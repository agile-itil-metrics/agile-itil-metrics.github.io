# Metriche di monitoraggio e qualità degli avvisi

**Un avviso è una richiesta di attenzione rivolta a una persona, quindi si misura il monitoraggio in base a quante volte quella richiesta valeva la pena, a quanta parte dei problemi reali ha intercettato e a quanto sonno e quanta fiducia è costata.**

## Panoramica e motivazione

Il monitoraggio è la raccolta, l'elaborazione e la visualizzazione di dati in tempo reale su un sistema. Il [monitoraggio dei sistemi](https://en.wikipedia.org/wiki/System_monitoring) risponde alla domanda «il servizio funziona nel modo in cui gli utenti ne hanno bisogno?». Un avviso è il punto in cui quei dati chiedono a una persona di fare qualcosa. La maggior parte dei team misura male o per nulla la prima attività, e la seconda solo attraverso i reclami. Questo argomento offre un piccolo insieme di misure per entrambe: se il monitoraggio vede i guasti che contano e se gli avvisi che genera meritano l'attenzione che richiedono.

Prima alcuni termini. Nel vocabolario di ITIL 4, un evento è un cambiamento di stato significativo per la gestione di un servizio, e la gestione degli eventi è la pratica di rilevare gli eventi, decidere quali contano e scegliere la risposta. Un avviso è una notifica a una persona, consegnata come chiamata (page), messaggio o ticket. Una chiamata (page) è un avviso che interrompe qualcuno immediatamente. Un falso positivo è un avviso scattato quando nulla richiedeva attenzione, e un falso negativo è un guasto che nessun avviso ha segnalato; entrambi i termini provengono dal linguaggio dei [falsi positivi e falsi negativi](https://en.wikipedia.org/wiki/False_positives_and_false_negatives). Un avviso azionabile è un avviso per cui una persona aveva un'azione utile da compiere, e l'ha compiuta oppure ha scelto deliberatamente di non farlo per una ragione registrata.

I due lati del monitoraggio tirano in direzioni opposte. Aggiungere avvisi dopo ogni incidente costruisce un muro di rumore; ridurli per fare silenzio rischia di lasciare il silenzio durante il guasto che conta. Il linguaggio di [precisione e richiamo](https://en.wikipedia.org/wiki/Precision_and_recall) si adatta bene. La precisione chiede quale quota degli avvisi emessi valesse la pena di emettere. Il richiamo chiede quale quota dei problemi reali gli avvisi abbiano intercettato. La qualità degli avvisi è l'equilibrio tra i due, e una metrica che osserva solo uno invita il team a sacrificare l'altro. Il [rapporto segnale-rumore](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) coglie la stessa tensione.

Il costo umano è la ragione per cui questo argomento appartiene a un libro di metriche di servizio. L'[affaticamento da allarmi](https://en.wikipedia.org/wiki/Alarm_fatigue) è la ben documentata tendenza delle persone esposte a molti allarmi, per lo più irrilevanti, a desensibilizzarsi e a rispondere lentamente a quelli che contano. È stato studiato per la prima volta in ambito clinico e si applica a qualsiasi rotazione di [reperibilità](https://en.wikipedia.org/wiki/On-call) chiamata troppo spesso da avvisi che non portano a nulla. Chi risponde affaticato perde incidenti reali e alla fine lascia la rotazione.

Le visioni differiscono tra le due tradizioni che questo libro unisce. ITIL 4 colloca questo lavoro nella pratica di monitoraggio e gestione degli eventi, con legami con la gestione degli incidenti e dei livelli di servizio. Il suo interesse è che gli eventi siano rilevati, classificati e instradati in modo che gli incidenti vengano individuati presto e gestiti in modo coerente. La [site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) lo affronta dall'altra parte: il libro di Google *Site Reliability Engineering* sostiene che le chiamate dovrebbero essere urgenti, importanti, azionabili e reali, e che tutto il resto appartiene a un ticket o a una dashboard. I team agili lo incontrano come un accordo di lavoro: chi viene svegliato, per che cosa e chi corregge un avviso sbagliato. Le metriche seguenti attingono a tutte e tre le visioni e mantengono una regola: una metrica descrive una rotazione, un servizio o una regola di avviso, mai una singola persona.

Questo argomento non ripete quelli vicini. I tempi degli incidenti appartengono all'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti», gli incidenti maggiori all'Argomento 3.4 «Metriche degli incidenti maggiori», gli obiettivi e i budget di errore all'Argomento 5.2 «SLI, SLO e budget di errore» e il carico umano all'Argomento 5.7 «Metriche di toil e reperibilità». Qui il soggetto è la qualità del segnale che dà inizio a tutti quelli. La strumentazione è trattata nell'Argomento 1.5 «Fonti dei dati e strumentazione».

## Principi chiave

- **Chiamare per sintomi che gli utenti percepiscono; ticket o dashboard per il resto.** Un avviso su ciò che gli utenti vivono (errori, lentezza, indisponibilità) resta utile al cambiare del sistema. Un avviso su una causa (un disco pieno, una CPU occupata) è utile solo quando predice un sintomo e una persona può agire prima che arrivi.
- **Ogni avviso deve condurre a un'azione.** Se la risposta giusta a un avviso è non fare nulla, l'avviso dovrebbe essere modificato, declassato a ticket o eliminato. Misurare la quota che porta ad azione e trattare il resto come difetti del monitoraggio.
- **Misurare sia la precisione sia il richiamo.** Contare solo il rumore premia il silenzio, e contare solo la copertura premia il volume. I due insieme descrivono la qualità, e ciascuno funge da salvaguardia per l'altro.
- **Trattare ogni regola di avviso come un prodotto con un responsabile.** Una regola ha uno scopo, una soglia, un runbook e una data di riesame. Le regole senza responsabile si accumulano, e il rumore che producono non appartiene a nessuno.
- **Riportare rotazioni e servizi, mai persone.** Il carico di avvisi è una proprietà di come sono progettati il sistema e la rotazione. Nominare le persone trasforma un problema di progettazione in un problema di colpa e nasconde la correzione reale.

## Definizioni delle metriche

Le metriche seguenti sono scelte come insieme. Il solo volume non ha significato, l'azionabilità dice se il volume è un problema, e la copertura e il tempo di rilevamento dicono che cosa il silenzio nasconde. Tutte sono calcolate per servizio o per rotazione, e tutte usano il record degli avvisi degli strumenti di monitoraggio e di chiamata, collegato ai record di incidenti e ticket.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume degli avvisi | Numero di avvisi che hanno notificato una persona, suddivisi in chiamate e ticket | Conteggio delle notifiche distinte consegnate a una rotazione o coda nel periodo; le ripetizioni dello stesso avviso aperto sono raggruppate in una; gli avvisi gestiti interamente dall'automazione senza notifica a una persona sono esclusi; riportare per rotazione per settimana, e la quota fuori orario separatamente | avvisi per settimana di rotazione | Strumento di chiamata e instradamento degli avvisi | Monitoraggio e gestione degli eventi | Accordo di lavoro del team sulla reperibilità | Settimanale |
| Tasso di avvisi azionabili | Quota di avvisi a seguito dei quali una persona ha compiuto un'azione utile | Avvisi con un'azione registrata (correzione, mitigazione, escalation o modifica della regola di avviso) / avvisi esaminati nel periodo; gli avvisi risolti automaticamente prima di qualsiasi presa in carico sono contati come non azionabili; gli avvisi non esaminati sono riportati come conteggio separato, non scartati | percentuale | Record degli avvisi collegato all'etichetta di riesame, al ticket o all'incidente | Monitoraggio e gestione degli eventi; gestione degli incidenti | Azione di miglioramento del team sull'operatività | Riesame settimanale, andamento mensile |
| Tasso di falsi positivi | Quota di avvisi scattati quando non esisteva alcun problema | Avvisi etichettati falso positivo nel riesame / avvisi esaminati nel periodo; «falso positivo» significa che la condizione non era un guasto e nessuno vorrebbe essere avvisato; un problema reale troppo minore per agire non è un falso positivo | percentuale | Etichette di riesame degli avvisi | Monitoraggio e gestione degli eventi | Riesame retrospettivo del rumore | Mensile |
| Copertura del rilevamento | Quota di servizi inclusi che hanno almeno un avviso testato su un sintomo visibile all'utente | Servizi con un avviso sintomo esercitato da un test o da un evento reale negli ultimi 12 mesi / servizi nell'ambito del catalogo dei servizi; l'elenco dei servizi inclusi è fissato all'inizio del periodo | percentuale | Catalogo dei servizi, inventario delle regole di avviso, record dei test | Gestione della configurazione del servizio; monitoraggio e gestione degli eventi | Definizione di completato per un nuovo servizio | Trimestrale |
| Quota di rilevamento da monitoraggio | Quota di incidenti che il monitoraggio ha rilevato prima che li segnalasse un utente o un collega | Incidenti il cui primo segnale è stato un avviso / incidenti nel periodo; l'orologio è l'ora di apertura dell'incidente, e gli incidenti senza primo segnale registrato sono riportati come sconosciuti, non come rilevati | percentuale | Record dell'incidente con campo primo segnale, cronologia degli avvisi | Gestione degli incidenti | Riesame dell'incidente (apprendimento post-incidente) | Mensile |
| Tempo di rilevamento (TTD, time to detect) | Tempo trascorso tra l'inizio dell'impatto sugli utenti e il primo avviso che ha notificato una persona | Ora del primo avviso con notifica a una persona meno ora di inizio dell'impatto, dove l'inizio dell'impatto è il primo istante in cui l'indicatore di livello di servizio ha violato la soglia, come stabilito nel riesame dell'incidente; riportare la mediana e il 95º percentile; gli incidenti senza avviso sono esclusi e contati separatamente | minuti | Riesame dell'incidente, cronologia degli avvisi, storico dell'indicatore di livello di servizio | Gestione degli incidenti; monitoraggio e gestione degli eventi | Riesame post-incidente | Mensile, per incidente |
| Concentrazione degli avvisi | Quota del volume di avvisi prodotta dalle poche regole più rumorose | Avvisi delle cinque regole con più avvisi / tutti gli avvisi nel periodo; lo stesso avviso raggruppato una volta; il numero di cinque regole è una convenzione che un team può cambiare se ne dichiara il motivo | percentuale | Inventario delle regole di avviso e record delle chiamate | Miglioramento continuo; monitoraggio e gestione degli eventi | Backlog di miglioramento retrospettivo | Mensile |
| Aggiornamento delle regole di avviso | Quota di regole di chiamata che hanno un responsabile, un link a un runbook e un riesame entro l'intervallo concordato | Regole di chiamata che soddisfano tutte e tre le condizioni / tutte le regole di chiamata; le regole disattivate nel periodo sono escluse | percentuale | Inventario delle regole di avviso | Gestione della conoscenza; monitoraggio e gestione degli eventi | Accordo di lavoro sulla prontezza operativa | Trimestrale |

Il volume degli avvisi ha bisogno di contesto, quindi va letto accanto al tasso di avvisi azionabili. Il tempo di rilevamento usa l'inizio dell'impatto sugli utenti, non il ticket, perché l'orologio del ticket parte dopo il rilevamento; l'inizio dell'impatto è una stima derivata dal riesame dell'incidente e dovrebbe essere etichettato come tale. Il tasso di falsi positivi e il tasso di avvisi azionabili non sono complementari, perché un avviso può essere vero e comunque non valere il tempo di una persona.

## Raccomandazioni

### Decidere che cosa merita una chiamata

**1. Scrivere una politica di chiamata e mantenerla breve.** Indicare in un paragrafo che cosa merita una chiamata (un sintomo che gli utenti percepiscono ora o percepiranno presto, su cui una persona può agire) e che cosa no. Tutto il resto va a una coda di ticket o a una dashboard. Il capitolo del libro Google SRE sul monitoraggio dei sistemi distribuiti è un buon punto di partenza (si veda l'Argomento 5.2 «SLI, SLO e budget di errore»).

**2. Allertare sui sintomi e tenere le cause per la diagnosi.** Una chiamata per «tasso di errore sopra la soglia concordata» è una chiamata sugli utenti. Una chiamata per «la CPU è alta» è una chiamata su un'ipotesi. Tenere i segnali a livello di causa nelle dashboard dove chi risponde guarderà una volta scattato l'avviso sul sintomo, e promuoverne uno a chiamata solo quando predice in modo affidabile un sintomo con preavviso sufficiente per agire.

**3. Legare le soglie di chiamata all'obiettivo di livello di servizio.** Dove un servizio ha un [obiettivo di livello di servizio (SLO)](https://en.wikipedia.org/wiki/Service-level_objective), allertare sul ritmo con cui il budget di errore viene consumato anziché su soglie grezze. Il capitolo dello SRE Workbook sull'allerta sugli SLO descrive gli avvisi sul burn rate e i compromessi tra precisione, richiamo, tempo di rilevamento e tempo di ripristino. Questo approccio chiama per ciò che minaccia l'obiettivo e tace sulle brevi oscillazioni che non lo minacciano.

### Riesaminare ogni avviso con un ritmo

**4. Etichettare ogni avviso in un riesame breve e regolare.** Riservare quindici minuti ogni settimana per ciascuna rotazione per guardare ciò che è scattato. Per ogni avviso, registrare un'etichetta: azionabile, falso positivo, reale ma non degno di una chiamata, o duplicato. Le etichette sono i dati per il tasso di avvisi azionabili e il tasso di falsi positivi, e il riesame è il luogo in cui le regole rumorose vengono corrette il giorno dopo anziché il trimestre dopo.

**5. Far produrre al riesame una modifica.** Ogni settimana, scegliere almeno una regola da tarare, declassare, unire o eliminare, e registrare la modifica nel backlog del team come lavoro ordinario.

**6. Eliminare senza timore.** I team conservano gli avvisi perché eliminarne uno sembra rischioso e nessuno ricorda perché esista. Richiedere che ogni regola di chiamata riporti uno scopo e un responsabile, e concordare che una regola che non ha mai portato ad azione in un periodo dichiarato venga rimossa o declassata, con la modifica registrata in modo da poterla annullare. La metrica di aggiornamento delle regole rende visibile la disciplina.

### Misurare ciò che il monitoraggio non vede

**7. Tracciare la quota di incidenti scoperti prima dagli utenti.** Dopo ogni incidente, registrare come è stato notato per primo: un avviso, un collega, un cliente, un ticket di supporto o un controllo di routine. La quota scoperta dal monitoraggio è la misura pratica più vicina al richiamo. Non è completa, perché gli incidenti che nessuno ha notato non entrano mai nel campione, quindi abbinarla a test periodici degli avvisi stessi.

**8. Stimare onestamente il tempo di rilevamento.** Stabilire l'inizio dell'impatto sugli utenti nel riesame post-incidente a partire dallo storico dell'indicatore di livello di servizio, non da quando qualcuno ha digitato il ticket. Riportare la mediana e un percentile elevato, e mostrare gli incidenti senza alcun avviso come conteggio separato. Una singola media nasconde sia il caso tipico sia la coda sfavorevole (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio» e l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»).

**9. Testare gli avvisi da cui si dipende.** La copertura del rilevamento è credibile solo se si è visto l'avviso funzionare. Includere nei game day o nelle prove di rilascio una verifica che causi deliberatamente un sintomo e confermi che l'avviso giusto scatti, raggiunga la rotazione giusta e rimandi a un runbook utilizzabile. Un avviso mai esercitato è una speranza, non un controllo (si veda l'Argomento 5.6 «Metriche di continuità del servizio»).

### Mantenere sano il percorso del segnale

**10. Monitorare il monitoraggio.** Un guasto silenzioso del sistema di monitoraggio appare esattamente come un servizio sano. Aggiungere un controllo heartbeat che chiami se la pipeline degli avvisi smette di consegnare, e registrare con quale frequenza la pipeline stessa fallisce.

**11. Raggruppare, deduplicare e collegare prima di contare.** Raggruppare gli avvisi correlati in uno, sopprimere le ripetizioni di un avviso già aperto e instradare ciascuno alla rotazione responsabile. Collegare ogni avviso al proprio runbook e all'incidente o ticket che ha creato, perché quel collegamento è ciò che consente di calcolare il tasso di avvisi azionabili e la quota di rilevamento da monitoraggio senza conteggio manuale (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Volume degli avvisi | Alzare le soglie, aggiungere lunghi ritardi o spostare gli avvisi da chiamate a una coda silenziosa così che il conteggio scenda mentre i problemi passano inosservati; dividere o unire gli avvisi per cambiare il conteggio | Quota di rilevamento da monitoraggio e tempo di rilevamento; una regola per cui ogni declassamento è registrato con la sua motivazione e riesaminato dopo un trimestre |
| Tasso di avvisi azionabili | Etichettare gli avvisi come azionabili a posteriori, o compiere un'azione banale (un commento, una presa in carico) per qualificarli; lasciare gli avvisi rumorosi non esaminati in modo che non entrino mai nel denominatore | Il conteggio degli avvisi non esaminati mostrato accanto al tasso; un controllo a campione di qualcuno esterno alla rotazione; una definizione scritta di «azione utile» |
| Tasso di falsi positivi | Definire i falsi positivi in modo ristretto così che gli avvisi «reali ma inutili» contino come veri; chiudere gli avvisi rumorosi senza etichetta | Tasso di avvisi azionabili e l'etichetta «reale ma non degno di una chiamata» tracciati separatamente; campionamento periodico degli avvisi chiusi |
| Copertura del rilevamento | Aggiungere un avviso banale (un ping) a ogni servizio per rivendicare la copertura; contare gli avvisi mai testati | Il requisito che l'avviso osservi un sintomo visibile all'utente e sia stato esercitato negli ultimi 12 mesi; quota di rilevamento da monitoraggio |
| Quota di rilevamento da monitoraggio | Registrare ogni incidente come «rilevato dal monitoraggio» anche quando un utente lo ha segnalato per primo; creare un avviso a posteriori e poi citarlo; lasciare vuoto il campo del primo segnale per evitare un numero negativo | Il conteggio degli sconosciuti mostrato accanto alla quota; evidenza del primo segnale tratta dalla cronologia degli avvisi, non dalla memoria; incidenti segnalati dai clienti collegati dal record del supporto |
| Tempo di rilevamento (TTD, time to detect) | Dichiarare l'inizio dell'impatto più tardi di quanto fosse; escludere gli incidenti senza avviso; riportare la media per nascondere la coda | Inizio dell'impatto tratto dallo storico dell'indicatore di livello di servizio; incidenti senza avviso contati e mostrati; mediana e 95º percentile riportati insieme |
| Concentrazione degli avvisi | Dividere una regola rumorosa in più regole così che nessuna sia tra le prime cinque; rinominare le regole | Riportare la concentrazione per guasto o servizio di fondo oltre che per regola; tracciare accanto il volume totale e il tasso di avvisi azionabili |
| Aggiornamento delle regole di avviso | Aggiungere responsabili segnaposto, link a runbook vuoti o un riesame di pura formalità per soddisfare la condizione | Un controllo a campione che il link al runbook si risolva e sia stato usato in una risposta reale; la pratica di testare il runbook nei game day |

Una lettura sana mostra più elementi insieme. Il volume di avvisi per rotazione è stabile o in calo ed entro un livello che il team ha scelto come sostenibile. Il tasso di avvisi azionabili sale nell'arco di diversi mesi man mano che le regole più rumorose vengono tarate. La quota di rilevamento da monitoraggio è alta e il tempo di rilevamento è breve e non si allunga al calare del volume, il che dimostra che il silenzio è stato meritato e non comprato. La copertura del rilevamento cresce perché i servizi vengono testati, non perché sono stati aggiunti avvisi banali. Se il volume cala mentre la quota di rilevamento o il tempo di rilevamento peggiora, il team ha scambiato richiamo con tranquillità, e sono le salvaguardie a rivelarlo.

## Compromessi: vantaggi e svantaggi

| Approccio | Pro | Contro |
| --- | --- | --- |
| Poche chiamate basate sui sintomi | Notti tranquille, alta fiducia in ogni chiamata, facili da mantenere aggiornate | Rischio di rilevamento tardivo per i problemi a lenta formazione; richiede buone abitudini di ticket e dashboard per il resto |
| Molti avvisi sensibili | Preavviso di problemi a livello di causa; meno incidenti mancati | Affaticamento da allarmi, presa in carico più lenta e abbandono delle rotazioni di reperibilità |
| Avvisi sul burn rate degli SLO | Chiamate legate a ciò che minaccia l'obiettivo; meno oscillazioni | Richiede buoni indicatori e un obiettivo concordato; serve taratura per bilanciare tempo di rilevamento e precisione |
| Riesame settimanale degli avvisi | Feedback rapido; regole rumorose corrette in fretta | Costa tempo ogni settimana; diventa teatro se non segue alcuna modifica |
| Etichettatura da parte di persone | Cattura un giudizio che nessuno strumento possiede | Soggettiva; le etichette divergono tra revisori e rotazioni se le definizioni non sono scritte |
| Soppressione e raggruppamento automatici | Riducono il rumore su larga scala; riducono le chiamate ripetute | Possono nascondere segnali reali se le regole sono sbagliate; richiedono monitoraggio e riesame propri |

Ogni scelta scambia precisione e richiamo, e lo scambio dovrebbe essere fatto di proposito e scritto per servizio, perché è il contesto che permette a chiunque di leggere equamente i numeri. Un servizio con conseguenze gravi da un guasto mancato può accettare un tasso di azionabilità più basso in cambio di un preavviso più precoce, con un livello di smistamento che invia di notte gli avvisi aggiuntivi a una coda di ticket.

## Domande da discutere con il team

**1. Per che cosa vorremmo essere svegliati, e quali chiamate del mese scorso rispettavano quello standard?** Scrivere la politica di chiamata in una o due frasi, poi prendere le chiamate del mese scorso e verificare ciascuna rispetto ad essa. L'esercizio vale più della percentuale che produce, perché i disaccordi rivelano dove le aspettative del team differiscono. Registrare quelle non necessarie come candidate al declassamento.

**2. Se la regola di avviso più rumorosa sparisse domani, che cosa perderemmo?** Porre la domanda per ciascuna delle cinque regole principali per volume. Spesso nessuno sa nominare un guasto specifico che la regola abbia mai intercettato, ed è segno che può essere tarata o rimossa. Dove qualcuno ci riesce, chiedere se il guasto farebbe scattare anche un avviso sul sintomo.

**3. Come scopriamo che cosa il monitoraggio ha mancato?** Guardare gli ultimi incidenti e chiedere chi se n'è accorto per primo e per quanto tempo l'impatto è durato prima di allora. La risposta fornisce la quota di rilevamento da monitoraggio e un tempo di rilevamento approssimativo senza nuovi strumenti. Discutere quale segnale avrebbe intercettato ciascuno prima.

**4. Il nostro carico di reperibilità è sostenibile, e come lo sapremmo?** Concordare che cosa significhi sostenibile per una rotazione, come un limite di chiamate fuori orario a settimana, e riesaminare l'andamento per rotazione, non per persona. Se il carico supera il livello concordato, trattarlo come un difetto del servizio e pianificare il lavoro per ridurlo. Mantenere le misure coerenti con l'Argomento 5.7 «Metriche di toil e reperibilità».

**5. Quali dei nostri avvisi non abbiamo mai testato, e come potremmo testarli in sicurezza?** Elencare i servizi che dipendono da un solo avviso sul sintomo e chiedere se qualcuno lo abbia visto scattare in un caso reale o in una prova. Pianificare un test e verificare l'intero percorso: rilevamento, instradamento, notifica, runbook. Considerare se una pipeline di avvisi guasta sarebbe visibile.

**6. Come potrebbero essere manipolati questi numeri qui, e che cosa noteremmo?** Chiedere al team di descrivere, onestamente, come potrebbe far apparire migliore ciascuna cifra senza migliorare nulla. Poi concordare quale salvaguardia lo mostrerebbe e chi la guarda. Nominare in anticipo i trucchi li rende meno allettanti (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Quattro prospettive

### Team di prodotto e di consegna

I team che costruiscono e gestiscono un servizio decidono che cosa esso riferisce di sé, quindi la qualità degli avvisi comincia nella definizione di completato. Una nuova funzionalità che viene rilasciata con il proprio indicatore e il proprio avviso testati evita un monitoraggio aggiunto dopo il primo incidente. Trattare la taratura degli avvisi come lavoro ordinario del backlog.

### Team di servizio e operations

I team operativi portano il cercapersone e ne sentono per primi il costo, quindi possiedono il ritmo di riesame, l'etichettatura e l'heartbeat della pipeline. Quando un avviso è sbagliato, la correzione spetta al responsabile della regola, non a chi ha ricevuto la chiamata.

### Leadership e governance

I dirigenti possono chiedere cifre di rilevamento e azionabilità per servizio, finanziare il tempo di taratura e resistere a un obiettivo sul volume degli avvisi che premia il silenzio. Un volume in calo è una buona notizia solo se la quota di rilevamento e il tempo di rilevamento restano stabili. I limiti di reperibilità sostenibile sono una decisione di organico e di progettazione, non motivazionale.

### Clienti e utenti

I clienti non vedono mai un avviso; vedono se il servizio è fallito e quanto ci è voluto per ripararlo. Un buon monitoraggio si manifesta come incidenti risolti prima che se ne accorgano e meno casi in cui un cliente segnala per primo. Dove l'organizzazione usa misure di esperienza (si veda l'Argomento 5.1 «Metriche SLA, OLA e XLA»), la quota di incidenti segnalati per primi dagli utenti è un indicatore diretto del divario di esperienza.

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni gestisce una piattaforma di ordini con quattro team di prodotto e un team di piattaforma che supporta la rotazione di reperibilità. Tutti i numeri di questo esempio sono illustrativi. In quattro settimane (illustrativo) la rotazione ha ricevuto 240 chiamate, 70 delle quali tra le 22:00 e le 07:00. Il team esamina ogni chiamata usando quattro etichette: azionabile, falso positivo, reale ma non degna di una chiamata e duplicata.

Il riesame mostra un tasso di avvisi azionabili del 31 percento (illustrativo) e un tasso di falsi positivi del 22 percento (illustrativo). Cinque regole hanno prodotto il 58 percento delle chiamate (illustrativo), e la maggiore era una soglia sul disco di un server batch che si ripristinava sempre da sola. La quota di rilevamento da monitoraggio del trimestre precedente era del 62 percento (illustrativo), e il tempo di rilevamento mediano era di 14 minuti (illustrativo) con un 95º percentile di 51 minuti (illustrativo).

Il team declassa tre regole rumorose a una coda di ticket, unisce i duplicati in modo che un guasto produca una sola chiamata, sostituisce l'avviso sul conteggio grezzo degli errori del checkout con un avviso sul burn rate del budget di errore (si veda l'Argomento 5.2 «SLI, SLO e budget di errore») e aggiunge un avviso sul sintomo per le e-mail di conferma ordine, una lacuna dietro due incidenti segnalati dai clienti. Ogni modifica è una voce del backlog con un responsabile. Quattro settimane dopo le chiamate scendono a 96 (illustrativo) e il tasso di azionabilità sale al 64 percento (illustrativo), mentre la quota di rilevamento sale al 71 percento (illustrativo) e il tempo di rilevamento mediano resta a 14 minuti. Il silenzio sembra meritato.

Il rischio di manipolazione compare nel terzo mese. Un nuovo dirigente fissa un obiettivo informale di meno di 60 chiamate ogni quattro settimane, e una rotazione lo raggiunge allungando il ritardo dell'avviso sugli errori del checkout. La sua quota di rilevamento scende al 55 percento (illustrativo) e il suo tempo di rilevamento al 95º percentile sale a 80 minuti (illustrativo). Poiché le salvaguardie stanno accanto al volume, il riesame se ne accorge. Il team ritira l'obiettivo sul volume, ripristina l'avviso e registra il caso nel registro delle metriche (si veda l'Argomento 1.4 «Governance e responsabilità delle metriche»).

## Lente di settore

**Startup.** Con una manciata di ingegneri tutti reperibili, la priorità è una breve politica di chiamata e pochi avvisi sui sintomi sui percorsi che generano ricavi. Basta uno sguardo di dieci minuti il lunedì su ciò che ha svegliato le persone. Il rischio principale è non avere alcun avviso, così che i clienti siano il monitoraggio; contare con quale frequenza un cliente vi ha avvisati per primo.

**Piccola impresa.** Le piccole organizzazioni si affidano spesso al monitoraggio di un fornitore. Misure utili sono la copertura del rilevamento per i pochi sistemi che bloccano l'attività e la quota di incidenti scoperti dagli utenti. Chiedere ai fornitori i dati sugli avvisi cui il contratto dà diritto.

**Grande impresa.** Le grandi organizzazioni hanno molti strumenti e rotazioni, e ogni team può definire «azionabile» in modo diverso. Standardizzare definizioni ed etichette, riesaminare a livello di team e aggregare per servizio anziché per strumento. Le piattaforme di correlazione degli eventi riducono il volume su larga scala ma richiedono propri controlli di richiamo.

**Governo e settore pubblico.** Alcuni servizi operano in orario d'ufficio e altri, come i sistemi di emergenza o di sussidi, operano in continuo. Copertura del rilevamento e avvisi testati contano di più dove il guasto ha conseguenze legali o di sicurezza, e i record dei test possono supportare l'audit. Riportare copertura e rilevamento agli organi di controllo, non i conteggi grezzi degli avvisi, facili da fraintendere (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

Le ragioni per investire sono pratiche. Un rilevamento migliore accorcia il tempo in cui gli utenti sono interessati. Meno chiamate inutili proteggono il sonno, riducono l'abbandono della rotazione e riservano l'attenzione agli avvisi che contano. Il costo di una scarsa qualità degli avvisi è difficile da vedere perché è distribuito tra sonno interrotto, risposte lente e partenze di ingegneri esperti.

Il costo di raccolta di queste metriche è basso se gli strumenti di avvisi, chiamate e incidenti possono essere collegati, e moderato se le etichette vengono aggiunte a mano. I costi principali sono il tempo di riesame settimanale, il lavoro di taratura ed eliminazione e i test occasionali di rilevamento. Eliminare le regole inutilizzate riduce anche i costi di licenza e di archiviazione del monitoraggio, e il costo totale di proprietà dovrebbe includere il tempo delle persone.

Il ritorno compare entro pochi mesi come rotazioni più tranquille, una quota di rilevamento da monitoraggio in crescita e un tempo di rilevamento che non peggiora. Per tradurlo in denaro, confrontare il costo delle ore di incidente e del ricambio della rotazione con il costo del riesame, usando le proprie cifre. Non usare medie di settore a meno di poter citare una fonte verificata.

## Anti-pattern e insidie

- **Fissare obiettivi sul volume degli avvisi.** Un obiettivo sul conteggio premia il silenzio e invita a nascondere gli avvisi. Fissare obiettivi sul tasso di avvisi azionabili e sulla quota di rilevamento, e usare il volume come cifra di contesto con un limite di sostenibilità scelto dal team.
- **Allertare su ogni causa.** Decine di chiamate a livello di causa producono rumore e comunque mancano il sintomo a cui nessuno ha pensato. Allertare invece sui sintomi visibili all'utente.
- **Aggiungere un avviso dopo ogni incidente e non rimuoverne mai uno.** Abbinare ogni nuovo avviso a un riesame di quelli che rende ridondanti.
- **Contare gli avvisi senza etichettarli.** Un conteggio senza un giudizio di utilità non distingue una rotazione rumorosa da una impegnata. Etichettare un campione ogni settimana, anche se si dispone di pochi minuti.
- **Trattare la copertura come un conteggio di avvisi.** Un servizio con cinquanta avvisi sulle cause e nessun avviso sul sintomo è mal coperto. Definire la copertura come rilevamento testato dei sintomi.
- **Classificare le persone in base alle chiamate gestite o prese in carico.** Punisce i membri della rotazione che affrontano i turni difficili e incoraggia a evitare il cercapersone. Riportare per rotazione e servizio e cercare correzioni di progettazione.
- **Non testare mai il percorso degli avvisi.** Un avviso di cui non si è visto il funzionamento è un'ipotesi. Includere test degli avvisi nei game day e monitorare la pipeline stessa.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Politica di chiamata e responsabilità delle regole | Avvisi aggiunti ad hoc; nessuno sa perché molti esistano | Alcuni team hanno una politica e dei responsabili per le proprie regole | Una breve politica di chiamata; ogni regola di chiamata ha un responsabile e un runbook | Aggiornamento delle regole tracciato e riesaminato; regole inutilizzate rimosse secondo calendario | Politica e responsabilità adattate tra team e fornitori al mutare dei servizi |
| Misurazione della qualità degli avvisi | Lamentele sul rumore; nessun conteggio | Volume contato da alcuni team; nessuna etichettatura | Riesame settimanale con etichette comuni; tasso di avvisi azionabili e di falsi positivi riportati per servizio | Tassi tracciati nel tempo e abbinati a misure di rilevamento; lavoro di miglioramento finanziato | Qualità collegata tra servizi e fornitori; definizioni riviste quando non informano più le decisioni |
| Rilevamento e copertura | Clienti e colleghi segnalano la maggior parte dei problemi | Avvisi sui sintomi su alcuni servizi chiave | Copertura del rilevamento tracciata con avvisi testati; primo segnale registrato per ogni incidente | Tempo di rilevamento e quota di rilevamento da monitoraggio riesaminati con una salvaguardia; le lacune diventano lavoro pianificato | Rilevamento testato di routine tra dipendenze e fornitori, compresa la pipeline degli avvisi |
| Uso nel miglioramento | Le correzioni agli avvisi seguono la notte peggiore | Le correzioni seguono gli incidenti | Ogni riesame produce almeno una modifica | Modifiche tracciate fino al loro effetto su volume, azionabilità e rilevamento | Carico di rotazione, rilevamento e budget di errore riesaminati insieme per orientare gli investimenti |

## Checklist

- [ ] Abbiamo una politica di chiamata scritta, di poche frasi, che dice che cosa merita una chiamata.
- [ ] Ogni regola di chiamata ha un responsabile, uno scopo e un link a un runbook.
- [ ] Ogni rotazione esamina ciò che è scattato almeno ogni settimana ed etichetta ogni avviso.
- [ ] Ogni riesame produce almeno una modifica registrata a una regola.
- [ ] Riportiamo volume degli avvisi, tasso di avvisi azionabili e tasso di falsi positivi per rotazione e servizio, mai per persona.
- [ ] Ogni incidente registra come è stato rilevato per primo, con un'opzione «sconosciuto».
- [ ] Stimiamo l'inizio dell'impatto dallo storico dell'indicatore di livello di servizio e riportiamo la mediana e il 95º percentile del tempo di rilevamento.
- [ ] Ogni servizio incluso ha un avviso sul sintomo testato negli ultimi 12 mesi.
- [ ] Un controllo heartbeat ci chiama se la pipeline degli avvisi si ferma.
- [ ] Abbiamo concordato un carico fuori orario sostenibile per ogni rotazione e lo riesaminiamo.
- [ ] Nessun obiettivo è fissato sul solo volume degli avvisi.

## Prompt IA

**Scopo: redigere una politica di chiamata per un servizio a partire dai suoi indicatori e dalle sue conseguenze.**

```text
Aiutami a redigere una politica di chiamata per il servizio [nome del servizio].
Contesto: gli utenti sono [gruppo di utenti]; i sintomi visibili all'utente che ci interessano sono [sintomi, per esempio errori, latenza, indisponibilità]; le conseguenze di un guasto mancato sono [conseguenze]; la rotazione di reperibilità è [descrizione della rotazione, per esempio orari e dimensione del team].
Scrivi una breve politica (meno di 200 parole) che dica che cosa merita una chiamata, che cosa va a una coda di ticket e che cosa resta su una dashboard.
Non inventare soglie né valori di riferimento; lascia segnaposto [soglia] che fisseremo con i nostri dati.
Elenca le domande che ci porresti prima di finalizzarla ed elenca le tue ipotesi.
```

**Scopo: analizzare un riesame degli avvisi esportato alla ricerca di schemi di rumore.**

```text
Incollerò una tabella di avvisi del [periodo] per la rotazione [nome della rotazione] con le colonne: [nomi delle colonne, per esempio regola, ora, etichetta, azione compiuta, servizio].
Calcola il tasso di avvisi azionabili, il tasso di falsi positivi, la quota fuori orario e la quota di avvisi delle cinque regole più rumorose, usando solo i dati che incollo.
Suggerisci quali regole tarare, unire, declassare o eliminare, con una motivazione per ciascuna, e contrassegna ogni suggerimento come ipotesi da verificare.
Riporta per regola, servizio e rotazione, mai per persona. Non inventare valori di riferimento.
Elenca le tue ipotesi e le righe che hai escluso.
```

**Scopo: verificare un insieme di metriche sugli avvisi per il rischio di manipolazione prima della pubblicazione.**

```text
Ecco le metriche sulla qualità degli avvisi che intendiamo pubblicare: [elenco delle metriche con definizioni e formule].
Per ciascuna metrica, descrivi due modi in cui potrebbe essere manipolata o fraintesa nel nostro contesto di [tipo di organizzazione e servizio], e suggerisci una salvaguardia abbinata dallo stesso elenco o una pratica che possiamo adottare.
Segnala qualsiasi metrica mostrata senza la propria salvaguardia.
Non inventare fonti né valori di riferimento.
Elenca le tue ipotesi su come i nostri strumenti registrano avvisi e incidenti.
```

**Scopo: pianificare un test di rilevamento per i servizi con copertura debole.**

```text
I nostri servizi sono [elenco dei servizi], e gli avvisi sui sintomi che crediamo esistano sono [elenco degli avvisi].
Proponi un piano di test sicuro per il prossimo [game day o prova] che verifichi, per ciascun servizio, che un sintomo deliberato faccia scattare l'avviso, raggiunga [rotazione] e rimandi a un runbook.
Indica chi dovrebbe essere informato in anticipo e come registrare i risultati per la copertura del rilevamento.
Non inventare funzionalità degli strumenti; chiedimi come funziona [strumento di monitoraggio].
Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per individuare l'argomento che definisce una misura correlata e la salvaguardia che dovrebbe affiancare una metrica sulla qualità degli avvisi.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che le modifiche a questo argomento mantengano coerenti il modello, la tabella di manipolazione e i riferimenti incrociati.

## Punti chiave

- Giudicare gli avvisi in base al fatto che abbiano portato ad azione, e giudicare il monitoraggio in base a quanti problemi reali ha intercettato; precisione e richiamo si fanno da salvaguardia a vicenda.
- Chiamare sui sintomi che gli utenti percepiscono, legare le soglie all'obiettivo di livello di servizio dove ne esiste uno e tenere le cause per la diagnosi.
- Riesaminare ogni settimana ciò che è scattato, etichettarlo e produrre almeno una modifica ogni volta.
- Non fissare mai un obiettivo sul solo volume degli avvisi; leggerlo accanto a tasso di avvisi azionabili, quota di rilevamento da monitoraggio e tempo di rilevamento.
- Testare gli avvisi e la pipeline degli avvisi, perché un avviso non testato è un'ipotesi.
- Riportare per rotazione e servizio, mai per persona, e trattare il carico di reperibilità sostenibile come obiettivo di progettazione.

## Riferimenti e letture di approfondimento

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Monitoring Distributed Systems," https://sre.google/sre-book/monitoring-distributed-systems/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Practical Alerting from Time-Series Data," https://sre.google/sre-book/practical-alerting/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, "Alerting on SLOs," https://sre.google/workbook/alerting-on-slos/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [System monitoring](https://en.wikipedia.org/wiki/System_monitoring).
7. Wikipedia, [False positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives).
8. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
9. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
