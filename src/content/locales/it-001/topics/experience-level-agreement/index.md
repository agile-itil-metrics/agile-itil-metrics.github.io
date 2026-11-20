# Experience level agreement

**Un experience level agreement aggiunge la domanda «com'è stato usarlo?» alla domanda «il servizio ha raggiunto il suo obiettivo?», e funziona solo quando le misure di esperienza sono scelte insieme agli utenti e tenute accanto a quelle operative.**

## Panoramica e motivazione

Un [accordo sul livello di servizio](https://en.wikipedia.org/wiki/Service-level_agreement) (SLA) registra ciò che un fornitore si impegna a consegnare, di solito in termini che il fornitore stesso può contare: disponibilità, tempo di risposta, tempo di risoluzione. Queste misure sono utili e sono anche incomplete. Un team può rispettare ogni obiettivo sulla dashboard mentre gli utenti passano la settimana ad aggirare accessi lenti, a ripetersi con un service desk e ad attendere approvazioni. Questo divario tra rendicontazione verde e utenti insoddisfatti è talvolta chiamato effetto anguria: verde fuori, rosso dentro (si veda l'argomento 5.1, Metriche SLA, OLA e XLA).

Un **experience level agreement (XLA)** è un accordo, tra un fornitore e le persone che usano un servizio, sull'esperienza che il servizio dovrebbe offrire. Enuncia risultati e sensazioni desiderati, come «posso iniziare a lavorare entro pochi minuti dal mio arrivo» o «ho fiducia che la mia richiesta verrà gestita», e indica le misure che mostreranno se vengono rispettati. Il termine è usato in tutta la comunità dell'IT service management (ITSM) e la sua definizione esatta varia tra autori e fornitori. Si consultino le pubblicazioni correnti del titolare del framework prima di descrivere un XLA come parte di ITIL e si dichiari quale uso si segue. Questo argomento tratta l'XLA come un'idea pratica: un accordo che affianca le misure di esperienza a quelle operative.

L'idea ha radici al di fuori dell'IT. La [user experience](https://en.wikipedia.org/wiki/User_experience) è l'esperienza complessiva di una persona che usa un prodotto, un sistema o un servizio, e la [customer experience](https://en.wikipedia.org/wiki/Customer_experience) è la somma delle interazioni di un cliente con un'organizzazione nel tempo. L'[usabilità](https://en.wikipedia.org/wiki/Usability) riguarda con quanta efficacia, efficienza e soddisfazione le persone possono raggiungere i propri obiettivi. I team agili conoscono questo territorio grazie al design thinking e alla ricerca sugli utenti, e alle revisioni con gli stakeholder in cui gli utenti reagiscono al software funzionante. Un XLA porta la stessa attenzione al servizio in esercizio.

L'esperienza è difficile da misurare e facile da distorcere. Un sondaggio che raggiunge solo gli utenti soddisfatti, un punteggio di sentiment tarato per salire o un singolo «indice di esperienza» che nessuno sa spiegare trarranno in inganno quanto un tempo di ticket manipolato. Il guardrail derivato dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) vale per intero: le misure di esperienza sono spunti di conversazione, non quote (si veda l'argomento 1.2, La legge di Goodhart e la psicologia delle metriche).

Questo argomento si basa sulle misure da sondaggio dell'argomento precedente (si veda l'argomento 6.1, Metriche di soddisfazione del cliente) e aggiunge misure comportamentali e basate sul percorso che non dipendono dal chiedere.

## Principi chiave

- **Si parta dai risultati che stanno a cuore alle persone.** Si chieda agli utenti come appare una buona giornata e si scrivano gli accordi con le loro parole.
- **Si abbini l'esperienza alle operazioni.** Un XLA sta accanto a uno SLA, non al suo posto.
- **Si usino poche misure da angolazioni diverse.** Si combinino ciò che le persone dicono, ciò che fanno e ciò che il sistema registra.
- **Si misurino i percorsi oltre ai punti di contatto.** Un'esperienza è l'intero cammino dal bisogno al risultato.
- **Si sia onesti sull'incertezza.** I dati di esperienza sono rumorosi e i gruppi piccoli vanno protetti.
- **Si concordino gli obiettivi con gli utenti e li si riveda.** Un XLA è un accordo vivo, riesaminato con le persone che descrive.
- **Non si usino mai i dati di esperienza per classificare gli individui.**

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Punteggio di esperienza | Valutazione media di un'affermazione di esperienza concordata, per un servizio e un pubblico | valutazione media sulle risposte valide a una sola affermazione su una scala fissa | punti di scala | Breve sondaggio pulse, inviato secondo un calendario | Gestione dei livelli di servizio; miglioramento continuo | Feedback della revisione con gli stakeholder; revisione dei risultati di prodotto | Mensile |
| Andamento del sentiment | Direzione del tono nei commenti a testo libero per un servizio | quota di commenti codificati come positivi meno quota codificata come negativi, per periodo | punti percentuali | Commenti del sondaggio e commenti dei ticket codificati | Miglioramento continuo | Temi della retrospettiva | Mensile |
| Eventi di attrito per utente | Conteggio dei segnali per cui un utente ha incontrato difficoltà, normalizzato sugli utenti attivi | (contatti ripetuti + elementi riaperti + accessi falliti oltre un numero stabilito + richieste abbandonate) / utenti attivi | eventi per utente | Sistema di ticketing, log di identità, portale delle richieste | Service desk; gestione degli incidenti | Difetti riscontrati nell'uso | Mensile |
| Tempo perso a causa di problemi IT | Tempo stimato che gli utenti perdono a causa di problemi del servizio in un periodo | minuti persi dichiarati per utente, oppure tempo misurato in stato degradato ponderato per gli utenti interessati | minuti per utente | Sondaggio pulse; monitoraggio collegato al numero di utenti | Gestione della disponibilità; gestione degli incidenti | Cycle time perso a causa di impedimenti | Trimestrale |
| Tasso di completamento del percorso | Quota di utenti che terminano un percorso definito senza abbandonare né chiedere aiuto | utenti che completano il percorso senza contatto di aiuto / utenti che iniziano il percorso | percentuale | Analisi del portale; collegamenti ai ticket | Gestione delle richieste di servizio; gestione del catalogo dei servizi | Successo dei compiti nei test di usabilità | Mensile |
| Raggiungimento dell'XLA | Quota di obiettivi di esperienza concordati raggiunti nel periodo | obiettivi raggiunti / obiettivi concordati | percentuale | Il registro XLA | Gestione dei livelli di servizio | Raggiungimento dell'obiettivo di consegna | Trimestrale |
| Divario di esperienza | Differenza tra il raggiungimento dello SLA e il punteggio di esperienza per lo stesso servizio | posizione di raggiungimento dello SLA meno posizione del punteggio di esperienza tra i servizi, oppure un confronto scritto | differenza di posizione o nota | Rapporti SLA e sondaggio pulse | Gestione dei livelli di servizio | Definition of done a confronto con il feedback degli utenti | Trimestrale |

Si definiscano il pubblico e il periodo per ogni misura. Si dichiari come sono protetti i gruppi piccoli: per esempio, non si mostra alcun risultato per gruppi di meno di dieci persone. Gli eventi di attrito contano segnali, non colpe, perciò un evento è associato a un servizio e a un gruppo di utenti, mai alla valutazione della prestazione di una persona con nome e cognome.

## Raccomandazioni

### Progettare l'accordo con gli utenti

**1. Si intervistino gli utenti prima di misurare.** Si dedichi tempo a un campione di utenti di ciascun gruppo importante e si chieda: com'è una buona giornata con questo servizio? Dove Le fa perdere tempo? Che cosa smetterebbe di fare se funzionasse? Si adottino le abitudini della [progettazione centrata sull'uomo](https://en.wikipedia.org/wiki/Human-centered_design): osservare il lavoro reale e scrivere ciò che si ascolta con le parole dell'utente. Le affermazioni che ne risultano diventano gli obiettivi di esperienza dell'accordo.

**2. Si scrivano le affermazioni di esperienza come risultati.** «Posso rendere produttivo un nuovo assunto già la prima mattina» dice più di «richiesta di accesso per nuovo assunto risolta in due giorni». Ogni affermazione sia breve, in prima persona e legata a un solo servizio. Si miri a tre-cinque affermazioni per servizio, in modo che le persone possano ricordarle.

**3. Si scelgano misure da tre angolazioni.** Per ogni affermazione si scelga una misura tra ciò che le persone dicono (una domanda pulse o un tema dei commenti), una tra ciò che le persone fanno (completamento del percorso, contatti ripetuti, richieste abbandonate) e, ove possibile, una tra ciò che il sistema registra (latenza dei passaggi del percorso). Quando le tre non concordano, si è trovato qualcosa da approfondire.

**4. Si concordino gli obiettivi con leggerezza.** All'inizio si fissi una direzione («ridurre il tempo perso») e una data di revisione anziché un numero rigido. Obiettivi rigidi per misure di esperienza nuove invitano alla manipolazione prima che la misura sia compresa. Quando un obiettivo compare, lo si formuli come intervallo e si dica chi lo ha concordato.

### Raccogliere e leggere i dati

**5. Si usino domande pulse brevi e regolari.** Una domanda su una affermazione, posta a intervalli regolari, è più facile da rispondere di un lungo sondaggio annuale. Si ruotino le affermazioni, si mantenga stabile la formulazione e si eviti di interpellare la stessa persona più di una volta in un periodo stabilito. Si colleghi la progettazione del pulse ai principi di sondaggio dell'argomento precedente (si veda l'argomento 6.1, Metriche di soddisfazione del cliente).

**6. Si leggano i commenti con un metodo.** Gli strumenti di [analisi del sentiment](https://en.wikipedia.org/wiki/Sentiment_analysis) possono ordinare grandi volumi di testo, ma fraintendono sarcasmo, gergo e contesto. Si tratti l'output dello strumento come una prima passata, si faccia verificare a una persona un campione ogni mese e si tenga un breve elenco di temi codificati a mano. Lo scopo dell'analisi è trovare argomenti di cui parlare con gli utenti, non produrre un punteggio.

**7. Si aggiungano segnali comportamentali dal percorso.** Si strumentino, con la loro conoscenza, i percorsi che stanno a cuore agli utenti: dove iniziano, dove abbandonano e dove chiedono aiuto? Il [real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring) di tempi di caricamento delle pagine, errori e passaggi offre una visione che i sondaggi non possono dare. Si dica agli utenti che cosa si raccoglie, ci si limiti a ciò che serve e si aggreghi prima di condividere.

**8. Si proteggano i gruppi piccoli e gli individui.** I dati di esperienza possono rivelare chi è in difficoltà. Si aggreghino i risultati, si sopprimano i gruppi sotto una dimensione concordata e non si usino mai i dati nelle valutazioni delle prestazioni. Si decida chi può vedere i commenti grezzi e li si conservi di conseguenza. In contesti regolamentati, si consultino gli specialisti della privacy prima di raccogliere dati comportamentali.

### Usare l'accordo

**9. Si mostrino SLA e XLA affiancati.** Sulla stessa pagina si espongano il raggiungimento operativo e le misure di esperienza per ciascun servizio. L'abbinamento è il punto: uno SLA verde con un punteggio di esperienza in calo è uno spunto di conversazione, e un punteggio di esperienza verde con SLA in sofferenza merita un'occhiata a ciò che agli utenti non viene detto.

**10. Si tenga una revisione periodica dell'esperienza con gli utenti.** Ci si incontri ogni trimestre con i rappresentanti dei gruppi di utenti, si mostrino i dati, si chieda che cosa significhino e si concordino uno o due miglioramenti da provare. Si includano il service desk e il team di prodotto, poiché la causa di un'esperienza scadente si trova spesso nel prodotto, non nel supporto.

**11. Si finanzino le correzioni.** Un accordo che individua l'attrito e poi lo lascia dov'è insegna agli utenti che le misure sono teatro. Si portino a backlog, con responsabili e date, i due o tre principali problemi di esperienza e se ne riferisca alla revisione successiva. Si vedano le metriche di miglioramento continuo più avanti in questo libro (si veda l'argomento 9.5, Metriche di miglioramento continuo).

**12. Si riveda l'accordo al cambiare dei servizi e degli utenti.** Si ritirino le affermazioni che non contano più e se ne aggiungano di nuove. Si registrino le modifiche e le si segnino sui grafici di andamento, come per qualunque definizione di metrica.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di guardrail abbinata |
| --- | --- | --- |
| Punteggio di esperienza | Interpellare solo utenti soddisfatti; scegliere il momento del sondaggio dopo eventi positivi; riformulare l'affermazione in modo che sia più facile concordare | Tasso di risposta e composizione dei rispondenti; registro delle formulazioni stabili; lettura dei commenti |
| Andamento del sentiment | Tarare lo strumento o l'elenco dei temi finché l'andamento sale; escludere i canali negativi | Verifica umana di un campione mensile; mantenere una guida di codifica fissa e registrare le modifiche |
| Eventi di attrito per utente | Ridefinire gli eventi in modo che ne contino meno; scoraggiare i contatti ripetuti rendendo il desk difficile da raggiungere | Volume dei contatti per canale; tasso di abbandono al service desk (si veda l'argomento 3.1, Metriche del service desk) |
| Tempo perso a causa di problemi IT | Chiedere in modo da ancorare stime basse; contare solo gli incidenti maggiori | Confrontare il tempo dichiarato con il tempo misurato in stato degradato; revisione della formulazione del sondaggio |
| Tasso di completamento del percorso | Definire il percorso in modo così stretto che il fallimento resti fuori ambito; dirottare i casi difficili su un altro canale | Definizione del percorso nel registro; tasso di contatti di aiuto ed escalation |
| Raggiungimento dell'XLA | Fissare obiettivi già raggiunti; definire un insieme molto ristretto di obiettivi | Rivedere la definizione degli obiettivi con gli utenti; mostrare il raggiungimento con andamento e storico degli obiettivi |
| Divario di esperienza | Scegliere i servizi o i periodi che appaiono migliori; cambiare quali SLA vengono confrontati | Insieme di confronto fisso concordato in anticipo; mostrare tutti i servizi |

Una lettura sana è un quadro di esperienza che corrisponde ai commenti e alla conversazione di revisione con gli utenti, un piccolo insieme di misure che cambiano lentamente e per ragioni che il team sa spiegare, e un backlog di correzioni di esperienza che si accorcia.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Solo SLA | Chiaro, contabile, contrattuale | Non coglie ciò che gli utenti percepiscono; può essere verde mentre gli utenti sono insoddisfatti |
| Solo XLA | Vicino a ciò che gli utenti apprezzano | Più difficile da misurare e confrontare; debole come base per i contratti con i fornitori |
| SLA con XLA | Offre entrambe le visioni ed espone il divario | Più lavoro; richiede fiducia e giudizio nel leggere i disaccordi |
| Misure di esperienza basate su sondaggio | Voce diretta degli utenti | Distorsione da risposta; onere per i rispondenti |
| Misure comportamentali | Nessun onere di sondaggio; oggettive | Richiedono strumentazione e attenzione alla privacy; mostrano che cosa è accaduto, non perché |
| Indice unico di esperienza | Titolo facile da comunicare | Nasconde i dettagli; facile da manipolare e difficile da spiegare |

La risposta in prosa è usare l'XLA come aggiunta, introdotta per pochi servizi in cui il divario tra operazioni ed esperienza è già visibile. Non si sostituiscano gli SLA contrattuali con misure di esperienza che i fornitori non possono controllare. Si mantengano gli impegni legali e commerciali nello SLA e si usi l'XLA per guidare il miglioramento e la conversazione.

## Domande da discutere con il team

**1. Per il nostro servizio più importante, com'è una buona giornata per gli utenti, con le loro parole?**
Si riuniscano due o tre utenti, o si riutilizzino interviste recenti, e se ne annotino le affermazioni. Il facilitatore dovrebbe resistere alla tentazione di riformularle in termini operativi. Si confrontino le affermazioni con lo SLA attuale e ci si chieda quali copre e quali ignora. I divari sono candidati a diventare misure di esperienza.

**2. Dove le nostre dashboard verdi e le storie dei nostri utenti non concordano?**
Si chieda al team un caso recente in cui un servizio ha rispettato gli obiettivi e gli utenti si sono lamentati. Si ripercorra il caso attraverso i dati: che cosa abbiamo misurato e che cosa ci è sfuggito? La conversazione farà spesso emergere un passaggio mancante, un passaggio di consegne o un orologio fermatosi troppo presto. Si registri il caso come esempio per la prossima revisione con gli utenti.

**3. Quali tre misure useremmo per sapere se questa affermazione di esperienza è vera?**
Si scelga un'affermazione e si scelga una misura tra ciò che le persone dicono, una tra ciò che fanno e una tra ciò che il sistema registra. Ci si chieda che cosa ciascuna potrebbe non cogliere e come potrebbe essere manipolata. Si concordi l'insieme più piccolo che convincerebbe un utente scettico.

**4. Che cosa raccogliamo sugli utenti che potrebbero non aspettarsi, e ne sarebbero a loro agio?**
Si elenchino le fonti di dati comportamentali e lo scopo di ciascuna. Si chieda a un rappresentante degli utenti di reagire. Il facilitatore dovrebbe trattare il disagio come informazione sulla progettazione, non come un ostacolo. Si decida che cosa smettere di raccogliere, che cosa aggregare e chi può vedere i dati grezzi.

**5. Che cosa faremmo se il punteggio di esperienza scendesse mentre ogni SLA resta verde?**
Si provi la risposta. Chi guarda per primo, che cosa controlla e con chi parla? Si decida se il team si fiderebbe del punteggio di esperienza o cercherebbe modi per liquidarlo. La risposta mostra quanto seriamente il team prende l'accordo.

**6. Quali correzioni di esperienza abbiamo promesso e che cosa ne è stato?**
Si riesaminino le ultime due riunioni di revisione con gli utenti. Per ogni impegno si mostrino data, responsabile ed esito. Se l'elenco è vuoto o datato, se ne discuta il motivo. Si concordi una correzione da consegnare prima della prossima revisione e un modo per dire agli utenti che è avvenuta.

## Quattro prospettive

### Team di prodotto e di consegna

I team di prodotto detengono gran parte delle cause di un'esperienza scadente: schermate confuse, passaggi lenti, errori poco chiari. Le misure di esperienza offrono loro evidenze dall'uso reale e alimentano direttamente il raffinamento. I team dovrebbero leggere i temi dei commenti prima di ogni sessione di pianificazione e collegare le misure di percorso al backlog. Non dovrebbero trattare il punteggio di esperienza come un obiettivo del team. È un'informazione sul servizio che condividono con le operations.

### Team di servizio e operations

I team di operations vedono per primi l'attrito: contatti ripetuti, soluzioni di ripiego e chiamanti irritati. Le misure di esperienza offrono loro un modo per mostrare ciò che lo SLA nasconde, e una ragione per correggere le cause anziché chiudere più in fretta i ticket. Dovrebbero mantenere salde le definizioni e il campionamento, evitare di dirottare gli utenti su canali che appaiono migliori e leggere per intero i commenti negativi (si veda l'argomento 3.1, Metriche del service desk).

### Leadership e governance

I leader scelgono se un XLA sia una conversazione o un tabellone dei punteggi. Dovrebbero chiedere che cosa dicono i dati di esperienza su dove investire, evitare di collegare la retribuzione a un indice di esperienza e proteggere la privacy dei dati del personale. La governance dovrebbe chiedere le definizioni, il campionamento e la storia delle modifiche, e dovrebbe trattare un salto inspiegato in una misura di esperienza come motivo per verificare il metodo.

### Clienti e utenti

Gli utenti sono gli autori dell'accordo. Dovrebbero essere invitati a descrivere come appare il buono, vedere i risultati e sapere che cosa è cambiato. Dovrebbero sapere che cosa viene raccolto su di loro e perché, e avere modo di dire no. Gli utenti interpellati spesso che non vedono migliorare nulla smetteranno di rispondere, e il silenzio farà apparire i dati migliori della realtà.

## In pratica: un esempio di ITIL agile

Una società di servizi professionali di medie dimensioni gestisce un servizio IT interno per 1.800 dipendenti. I numeri seguenti sono illustrativi.

Il rapporto SLA mensile mostra una disponibilità del 99,8 percento per la piattaforma di collaborazione e il 96 percento di incidenti risolti entro l'obiettivo. Il direttore IT è soddisfatto, eppure i consulenti presso le sedi dei clienti continuano a lamentare un accesso lento. La responsabile del servizio propone un pilota XLA per la piattaforma di collaborazione.

Dalle interviste a 12 consulenti emergono tre affermazioni: «posso partecipare a una chiamata con il cliente entro due minuti dalla decisione di farlo», «non devo telefonare all'IT per rientrare nel mio account» e «quando qualcosa si rompe, so che cosa sta succedendo». Il team sceglie le misure per ciascuna. Per la prima, prende la valutazione pulse dell'affermazione e il tempo misurato dall'avvio dell'accesso all'ingresso nella chiamata, ricavato dal real user monitoring del cliente e aggregato per regione. Per la seconda, conta i contatti per il reset della password per utente attivo al mese. Per la terza, monitora la quota di incidenti in cui il messaggio di stato è stato aggiornato entro 30 minuti e pone la domanda pulse in merito.

I primi due mesi di dati mostrano che il tempo mediano dall'accesso all'ingresso nella chiamata è buono nella regione della sede centrale ma lungo in altre due, e che i contatti per il reset della password per utente sono tre volte più alti per il personale con portatili gestiti rispetto agli altri. Il punteggio di esperienza della prima affermazione è 3,1 su 5, contro 4,2 per il personale d'ufficio. Lo SLA è verde in entrambi i casi. La responsabile del servizio porta il risultato alla revisione con gli utenti. Il team concorda due miglioramenti: ottimizzare la configurazione del single sign-on per le regioni remote e modificare le impostazioni di rinnovo dei token sui portatili gestiti. Tre mesi dopo il tempo mediano scende, i contatti di reset per utente scendono e il punteggio di esperienza sale a 3,8. Il direttore concorda di mantenere l'XLA per questo servizio, di estenderlo a un altro e di non fissare alcun obiettivo numerico fino alla revisione successiva.

## Lente di settore

**Startup.** Lo stretto contatto con gli utenti rende facili le interviste. Si resista alla tentazione di costruire un framework: si scrivano tre affermazioni di esperienza per il servizio principale, si interpellino gli utenti ogni mese e si aggiunga una misura comportamentale. Gli accordi formali verranno dopo.

**Piccola impresa.** Il personale è poco numeroso e spesso condivide un responsabile con l'IT. Si usino conversazioni e un pulse mensile brevissimo. Si presti attenzione ai dati comportamentali, poiché i gruppi piccoli sono facilmente identificabili.

**Grande impresa.** La scala porta con sé molti gruppi di utenti e fornitori. Si definiscano le affermazioni di esperienza per servizio e per persona, si mantengano le dashboard per servizio e si eviti un unico indice di esperienza aziendale. Si allinei l'XLA ai contratti con i fornitori, in modo che i fornitori contribuiscano con i dati senza essere vincolati a misure che non possono influenzare.

**Pubblica amministrazione e settore pubblico.** I servizi si rivolgono spesso al pubblico oltre che al personale, con doveri in materia di accessibilità, linguaggio semplice e parità di accesso. Si includa l'accessibilità nelle affermazioni e nelle misure di esperienza, si testi con utenti che si affidano a tecnologie assistive e si proteggano i dati personali conformemente alla legge. Dove è richiesta la rendicontazione pubblica, si riportino i metodi insieme ai risultati (si veda l'argomento 8.5, Rendicontazione regolamentata e governativa).

## Business case: motivazioni, ROI e TCO

Il costo è moderato. Le interviste agli utenti richiedono pochi giorni per servizio. Un sondaggio pulse mensile richiede uno strumento di sondaggio, che molte organizzazioni già possiedono. Le misure comportamentali richiedono una certa strumentazione, che può provenire dal monitoraggio esistente e dall'analisi del portale. La revisione con gli utenti richiede alcune ore ogni trimestre. Codificare i commenti richiede una o due ore al mese.

Il ritorno sta nel trovare problemi che gli SLA non mostrano, come percorsi lenti in regioni o dispositivi specifici, e nell'indirizzare il denaro per il miglioramento verso ciò che gli utenti apprezzano. Il tempo perso a causa di problemi IT può essere tradotto in un costo con le tariffe del proprio personale, se lo si misura con attenzione. Si evitino affermazioni generiche sui guadagni di produttività. Si costruisca il caso a partire dalla propria linea di base: tempo perso per utente, eventi di attrito per utente e contatti ripetuti, prima e dopo una correzione. Si conti anche il costo evitato delle soluzioni di ripiego, come gli strumenti ombra adottati perché il servizio ufficiale è scomodo.

## Anti-pattern e insidie

- **Sostituire gli SLA con gli XLA.** I contratti richiedono impegni contabili. Si mantengano entrambi e li si mostri insieme.
- **Un solo indice composito di esperienza.** Nasconde la causa e invita alla manipolazione. Si mostrino poche misure separate.
- **Definire l'esperienza senza gli utenti.** Le affermazioni scritte in una sala riunioni descrivono il punto di vista del fornitore. Si intervistino e si testino con gli utenti.
- **Interpellare finché le persone smettono di rispondere.** Si mantengano brevi i pulse e si ruotino gli argomenti.
- **Raccogliere dati comportamentali senza dirlo a nessuno.** Rompe la fiducia e può violare la legge. Si sia aperti su che cosa si raccoglie e perché.
- **Usare i dati di esperienza nelle valutazioni delle prestazioni.** Trasforma uno strumento di apprendimento in sorveglianza e distrugge la segnalazione onesta.
- **Correggere la misura, non la causa.** Non si dirottino gli utenti su un canale più amichevole per migliorare un numero. Si corregga il percorso.
- **Lasciare i risultati su una slide.** Si finanzino e si monitorino le correzioni di esperienza.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Obiettivi di esperienza | Impliciti o assenti | Scritti dal fornitore per alcuni servizi | Affermazioni scritte con gli utenti per i servizi chiave | Affermazioni riesaminate e riviste ogni trimestre con i gruppi di utenti | Condivisi tra servizi e fornitori, di proprietà congiunta con gli utenti |
| Misurazione | Sondaggi occasionali | Sondaggio pulse per un servizio | Misure da tre angolazioni (dire, fare, sistema) per ogni affermazione | Misure con andamento, protette per i gruppi piccoli e confrontate con gli SLA | Dati combinati tra fornitori, con scelte di privacy controllate dagli utenti |
| Azione | Reclami gestiti uno per uno | Correzioni fatte ad hoc | Principali problemi di esperienza a backlog con responsabili | Correzioni finanziate, monitorate e riferite agli utenti | Miglioramento coordinato tra team, fornitori e utenti, con apprendimento condiviso |

## Checklist

- [ ] Ogni servizio con XLA ha da tre a cinque affermazioni di esperienza scritte con gli utenti.
- [ ] Ogni affermazione ha misure da almeno due angolazioni (dire, fare, sistema).
- [ ] Le misure di SLA e di esperienza compaiono sulla stessa pagina per ciascun servizio.
- [ ] I sondaggi pulse sono brevi, regolari e stabili nella formulazione.
- [ ] I commenti sono codificati con una guida stabile e una persona verifica un campione mensile.
- [ ] I gruppi sotto una dimensione concordata sono soppressi nei rapporti.
- [ ] I dati comportamentali raccolti sono comunicati agli utenti e limitati al necessario.
- [ ] Nessuna misura di esperienza è usata nelle valutazioni delle prestazioni individuali.
- [ ] Una revisione trimestrale con i rappresentanti degli utenti è in calendario.
- [ ] I principali problemi di esperienza hanno responsabili e date a backlog.

## Prompt IA

**Redigere affermazioni di esperienza a partire da appunti di interviste.**

```text
Ecco appunti anonimizzati di [numero] interviste a utenti di [servizio] in
[tipo di organizzazione]: [incolla gli appunti]. Proponi da tre a cinque
affermazioni di esperienza in prima persona, ciascuna legata a un risultato che
sta a cuore agli utenti, usando per quanto possibile le loro parole. Per
ciascuna, suggerisci una misura tra ciò che le persone dicono, una tra ciò che
fanno e una tra ciò che il sistema registra. Non inventare cifre. Elenca le tue
ipotesi e tutto ciò che non hai potuto stabilire dagli appunti.
```

**Individuare il divario tra SLA ed esperienza.**

```text
Per [servizio] nel periodo [periodo], i risultati dello SLA sono stati: [incolla
i risultati]. I nostri dati di esperienza (punteggi pulse, temi dei commenti,
conteggi di attrito) sono stati: [incolla i dati]. Descrivi dove i due insiemi
non concordano, offri tre possibili spiegazioni per ciascun disaccordo e
suggerisci che cosa verificare successivamente. Non presumere una causa che i
dati non possono sostenere. Elenca le tue ipotesi e quali dati aggiuntivi
sarebbero utili.
```

**Rivedere l'approccio alla privacy per le misure comportamentali.**

```text
Prevediamo di raccogliere questi segnali comportamentali per la misurazione
dell'esperienza: [elenco]. Gli utenti sono [personale, pubblico o entrambi] in
[giurisdizione o settore]. Rivedi il piano alla ricerca di rischi per privacy,
fiducia ed equità e suggerisci pratiche minime di aggregazione, conservazione e
comunicazione. Segnala tutto ciò che dovrei portare a uno specialista della
privacy. Non trarre conclusioni legali. Elenca le tue ipotesi.
```

**Preparare una revisione trimestrale dell'esperienza con gli utenti.**

```text
Redigi un'agenda e una sintesi di una pagina per una revisione trimestrale
dell'esperienza di [servizio] con i rappresentanti di [gruppi di utenti].
Includi i risultati di SLA ed esperienza affiancati, i principali temi dei
commenti, gli impegni del trimestre scorso con il loro stato e due domande per
gli utenti. I dati: [incolla i dati]. Mantieni un tono semplice ed evita il
gergo. Elenca le tue ipotesi e segna ogni affermazione che richiede verifica.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare il guardrail di una misura di esperienza prima di aggiungerla a una dashboard.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una voce di metrica XLA riporti il proprio vettore di manipolazione e il proprio guardrail.

## Punti chiave

- Un XLA aggiunge obiettivi e misure di esperienza agli obiettivi operativi e integra lo SLA.
- Si scrivano le affermazioni di esperienza con gli utenti, con le loro parole, e si leghi ciascuna a misure tratte da ciò che le persone dicono, da ciò che fanno e da ciò che il sistema registra.
- Si mostrino insieme i risultati di SLA ed esperienza e si tratti il disaccordo come uno spunto di indagine.
- Si proteggano gli utenti: si comunichi ciò che si raccoglie, lo si aggreghi, si sopprimano i gruppi piccoli e lo si tenga fuori dalle valutazioni delle prestazioni.
- Si eviti un unico indice di esperienza e si evitino obiettivi rigidi prima che le misure siano comprese.
- Si finanzino le correzioni che i dati rivelano e si dica agli utenti che cosa è cambiato.

## Riferimenti e letture di approfondimento

1. ISO 9241-210, *Ergonomics of human-system interaction: Human-centred design for interactive systems*, International Organization for Standardization.
2. Norman, D. A., *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
5. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
6. Wikipedia, [User experience](https://en.wikipedia.org/wiki/User_experience).
7. Wikipedia, [Customer experience](https://en.wikipedia.org/wiki/Customer_experience).
8. Wikipedia, [Usability](https://en.wikipedia.org/wiki/Usability).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Human-centered design](https://en.wikipedia.org/wiki/Human-centered_design).
11. Wikipedia, [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis).
12. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
