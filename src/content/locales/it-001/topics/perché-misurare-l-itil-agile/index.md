# Perché misurare l'ITIL agile

**I team che costruiscono ed erogano servizi hanno bisogno di un piccolo insieme di numeri onesti per capire se il proprio lavoro aiuta gli utenti e sta migliorando, e l'approccio agile e ITIL forniscono ciascuno una metà diversa di questo quadro.**

## Panoramica e motivazione

Ogni team che costruisce ed eroga un servizio prende decisioni tutto il giorno: su che cosa lavorare dopo, se un rilascio è sicuro, se il service desk ha bisogno di un'altra persona, se un'interruzione è stata un caso isolato o un andamento ricorrente. Senza misurazione, quelle decisioni poggiano sulla memoria, sugli aneddoti e su chi ha parlato per ultimo. Con la misurazione sbagliata possono andare peggio, perché un numero ha un'autorevolezza che un'opinione non ha. Questo argomento spiega perché vale la pena misurare, che cosa apporta ciascuna tradizione e quanto costa sbagliare.

In questo libro si incontrano due tradizioni. Lo [sviluppo agile del software](https://en.wikipedia.org/wiki/Agile_software_development) è un insieme di valori e pratiche, enunciati nel Manifesto Agile del 2001, che privilegia il software funzionante, la stretta collaborazione con i clienti e la capacità di rispondere al cambiamento. Le sue abitudini di misurazione sono empiriche e locali: un team ispeziona il proprio flusso, osserva ciò che ha consegnato e si adatta. [ITIL](https://en.wikipedia.org/wiki/ITIL), in origine Information Technology Infrastructure Library, è un corpo di indicazioni per la [gestione dei servizi IT](https://en.wikipedia.org/wiki/Information_technology_service_management) (ITSM), la pratica di progettare, erogare e migliorare i servizi IT. Le sue abitudini di misurazione sono orientate al servizio e condivise: livelli di servizio concordati, un catalogo dei servizi (nella grafia di ITIL "service catalogue") e una disciplina di miglioramento continuo. In ITIL 4, l'edizione del 2019 del framework, la misurazione e la rendicontazione sono una delle pratiche generali di gestione, e il miglioramento continuo è al tempo stesso una pratica e un principio guida. Prima di fare affidamento sui dettagli di versione, consulti le pubblicazioni correnti del titolare del framework, perché il framework continua a evolversi.

Le due visioni differiscono in modi utili. L'approccio agile chiede: «Stiamo costruendo la cosa giusta, e con quanta fluidità procede il lavoro?» ITIL chiede: «Il servizio risponde alle esigenze di chi lo usa, ed è affidabile, supportabile e sostenibile dal punto di vista economico?» Un team che misura solo il flusso può rilasciare rapidamente in un servizio che gli utenti trovano inaffidabile. Un team che misura solo i livelli di servizio può raggiungere ogni obiettivo e tuttavia consegnare il cambiamento così lentamente che il servizio smette di essere rilevante. Il movimento [DevOps](https://en.wikipedia.org/wiki/DevOps) è nato dall'osservazione che costruire ed erogare formano un unico sistema, e che quindi i numeri che lo descrivono vanno letti insieme. La [site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), la disciplina descritta da Google nei propri libri pubblicati, aggiunge un legame esplicito tra gli obiettivi di affidabilità e il ritmo del cambiamento.

Tre termini ricorrono in tutto il libro. Una **misura** descrive qualcosa del lavoro o del servizio. Una **metrica** è una misura con una formula, un'unità e una fonte di dati definite, così che due persone che la calcolano ottengano la stessa risposta. Una **salvaguardia** (guardrail) è una seconda misura o pratica, scelta in anticipo, che si muove se la prima viene manipolata. L'avvertimento che sta dietro alle salvaguardie è la [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): quando una misura diventa un obiettivo, le persone iniziano a pilotare il numero anziché il lavoro (vedi Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

### A che cosa serve la misurazione

La misurazione si guadagna il proprio posto quando svolge uno di quattro compiti.

- **Vedere.** Rendere visibile il lavoro invisibile: la coda che nessuno guarda, lo schema di incidenti che attraversa tre team, la modifica che attende nove giorni per ottenere uno slot.
- **Decidere.** Orientare la scelta tra due opzioni, per esempio se automatizzare un tipo di richiesta o correggere il difetto che la genera.
- **Imparare.** Mettere alla prova una convinzione. Se il team pensa che una nuova pratica di revisione ridurrà la rilavorazione, un numero può dire se è accaduto.
- **Rendere conto.** Fornire a utenti, clienti e dirigenti un resoconto onesto di ciò che il servizio eroga, in modo che la fiducia poggi su evidenze.

Un numero che non svolge nessuno di questi quattro compiti è un costo generale. Gli argomenti successivi ripetono questo test per ciascuna famiglia di metriche.

### Il costo di non misurare nulla

Un team che non misura nulla non è privo di numeri. Funziona su numeri impliciti: la lamentela più rumorosa, l'ultima interruzione, l'impressione del manager su quanto le persone sembrino occupate. Ne conseguono due costi.

- **Feedback lento.** I problemi che un andamento avrebbe mostrato in anticipo arrivano come sorprese. Un aumento graduale dei contatti ripetuti sembra sfortuna finché non diventa una crisi.
- **Nessuna base per migliorare.** Un team non può dire se una modifica ha aiutato, quindi non può imparare quali modifiche ripetere.

### Il costo di misurare le cose sbagliate

Misurare le cose sbagliate è spesso peggio che non misurare nulla, perché orienta lo sforzo con una falsa sicurezza. Conteggi di ticket chiusi, righe di codice, story point completati e ore registrate sono facili da raccogliere e da rappresentare in un grafico, e ciascuno è una misura dell'attività, non del valore per un utente. La ricerca alla base del framework SPACE (Forsgren e colleghi, 2021) sostiene che la produttività non può essere catturata da una sola dimensione e che i conteggi di attività usati da soli sono fuorvianti.

## Principi chiave

- **Misurare per una decisione.** Ogni metrica risponde a una domanda scritta e orienta una scelta nominata. Se nessuno sa dire quale, la si ritiri.
- **Unire le due visioni.** Leggere il flusso di consegna e la salute del servizio sulla stessa pagina, in modo che la velocità non sia mai acquistata a scapito della stabilità o viceversa.
- **Prima i risultati, poi l'attività.** Il criterio è che gli utenti stiano meglio. I conteggi di attività sostengono il racconto ma non lo fanno (vedi Argomento 1.3 «Risultati prima della produzione: scegliere cosa misurare»).
- **Descrivere team e servizi, mai singole persone.** Le classifiche individuali corrompono i dati e danneggiano la collaborazione.
- **Iniziare in piccolo e crescere.** Una manciata di metriche affidabili è meglio di un muro di metriche governate debolmente.
- **Mostrare prima al team.** Le persone che svolgono il lavoro sono il primo pubblico e il miglior controllo sull'accuratezza dei dati.
- **Aspettarsi il cambiamento.** Definizioni, metriche e obiettivi vengono rivisti quando smettono di orientare le decisioni.

## Definizioni delle metriche

Le metriche seguenti descrivono la salute di una pratica di misurazione stessa, che è il punto in cui «perché misurare» diventa verificabile. Un team in grado di mostrarle sta misurando per delle ragioni. Ogni formula basata sul tempo o sul conteggio ne dichiara i confini.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Quota di metriche collegate a una decisione | Quota delle metriche rendicontate che hanno una domanda scritta e una decisione nominata che orientano | metriche con una domanda e una decisione registrate / metriche rendicontate sulla dashboard a fine trimestre | percentuale | Registro delle metriche (vedi Argomento 1.4 «Governance e responsabilità delle metriche») | Misurazione e rendicontazione; miglioramento continuo | Azioni di retrospettiva; accordi di lavoro | Trimestrale |
| Copertura delle baseline | Quota dei servizi e dei team nel perimetro che hanno un valore iniziale registrato per ciascuna delle misure di base concordate | coppie servizio-misura con una baseline registrata negli ultimi 12 mesi / tutte le coppie servizio-misura nel perimetro; i servizi esterni al catalogo sono esclusi | percentuale | Catalogo dei servizi e registro delle metriche | Gestione dei livelli di servizio; misurazione e rendicontazione | Revisione con gli stakeholder; dashboard dei team | Trimestrale |
| Sforzo di misurazione | Tempo del personale dedicato a raccogliere, ripulire e rendicontare le metriche a mano | ore registrate per raccolta e rendicontazione manuali durante il mese, escluso il tempo speso ad agire sui risultati | ore per team al mese | Note sul tempo o breve sondaggio del team | Misurazione e rendicontazione | Budget di tempo della retrospettiva | Trimestrale |
| Età dei dati alla revisione | Quanto è vecchio il dato più recente quando il gruppo si riunisce per discuterne | timestamp della riunione di revisione meno timestamp dell'ultimo dato sulla dashboard; calcolato per metrica, riportato come mediana e 85° percentile | giorni | Registro degli aggiornamenti della dashboard | Misurazione e rendicontazione | Revisione con gli stakeholder | A ogni revisione |
| Seguito dei miglioramenti | Quota delle azioni di miglioramento sollevate dalle revisioni delle metriche che sono completate o chiuse deliberatamente entro la finestra concordata | azioni completate o chiuse con una motivazione entro 90 giorni dalla loro apertura / azioni sollevate nel periodo, contate dalla data registrata nel registro dei miglioramenti | percentuale | Registro o backlog del miglioramento continuo | Miglioramento continuo | Azioni di retrospettiva | Trimestrale |

Lo sforzo di misurazione conta deliberatamente solo il lavoro manuale. Il tempo speso a leggere i dati e a decidere che cosa fare è lo scopo dell'esercizio ed è escluso, così che automatizzare la raccolta appaia come un progresso.

## Raccomandazioni

### Partire dallo scopo

**1. Scrivere la ragione prima della metrica.** Per ogni misura proposta, scriva una frase: «Misuriamo X per decidere Y». Se la frase non può essere scritta, la misura non è pronta. Questa singola abitudine elimina la maggior parte delle metriche di vanità prima che entrino in una dashboard.

**2. Nominare il pubblico e la decisione.** Lo stesso numero significa cose diverse per un team, per un responsabile del servizio e per un dirigente. Annoti chi lo leggerà e quale scelta sostiene. La vista di lavoro di un team può contenere venti misure. Ciò che arriva alla direzione dovrebbe essere un insieme ridotto e stabile (vedi Argomento 11.1 «Progettare una dashboard delle metriche di servizio»).

### Usare entrambe le tradizioni

**3. Abbinare una misura di flusso a una misura di servizio.** Scelga almeno una misura di come si muove il lavoro, come il lead time o l'età dell'elemento di lavoro (vedi Argomento 2.2 «Lead time, cycle time ed efficienza del flusso»), e almeno una misura di come si comporta il servizio, come la ricorrenza degli incidenti o un indicatore di livello di servizio (vedi Argomento 5.2 «SLI, SLO e budget di errore»). Mostrarle insieme previene il fallimento comune in cui velocità e stabilità sono gestite da gruppi diversi che guardano grafici diversi.

**4. Trattare consegna e operazioni come un unico sistema.** La ricerca riassunta in *Accelerate* (Forsgren, Humble e Kim, 2018) riferisce che le prestazioni della consegna del software possono essere descritte con quattro misure che bilanciano produttività e stabilità. Qualunque insieme un team adotti, tenga le cifre relative alle modifiche e quelle relative agli incidenti abbastanza vicine perché l'aumento di una spinga a guardare l'altra (vedi Argomento 2.8 «Metriche DORA»).

### Misurare con onestà

**5. Preferire poche misure che si contrappongono.** Un singolo numero invita all'ottimizzazione eccessiva, perciò scelga coppie come velocità con qualità, volume con risultato, costo con esperienza. La coppia non deve essere una formula. Deve comparire sulla stessa pagina.

**6. Registrare una baseline prima di cambiare qualsiasi cosa.** Senza un valore iniziale, l'affermazione di un miglioramento è un racconto. Raccolga prima alcune settimane di dati, includendo la dispersione dei valori oltre alla media (vedi Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»). Le baseline proteggono anche i team: mostrano che un cattivo trimestre ha seguito un cambiamento nel modo di contare il lavoro, anziché un calo delle prestazioni.

### Costruire l'abitudine

**7. Rivedere con una cadenza adatta alla decisione.** Le misure di flusso si prestano a una conversazione settimanale, o a una tenuta a ogni passo della consegna continua del software. Le misure di livello di servizio e di costo si prestano a una conversazione mensile o trimestrale. Una metrica rivista con il ritmo sbagliato o crea rumore o perde il momento in cui un'azione sarebbe stata utile.

**8. Chiudere il ciclo con il lavoro di miglioramento.** Una revisione che si conclude con «interessante» ha sprecato i propri dati. Concluda ogni revisione con una o due azioni nominate, un responsabile e una data, e ne monitori il completamento. La pratica di miglioramento continuo di ITIL e la retrospettiva agile sono due nomi della stessa disciplina (vedi Argomento 9.5 «Metriche di miglioramento continuo»).

**9. Dire per che cosa non si useranno i numeri.** Dichiari chiaramente che le metriche dei team non saranno usate per classificare o premiare le singole persone, e che le definizioni saranno modificate apertamente. Le persone cooperano con la misurazione quando si fidano di come sarà usata (vedi Argomento 11.3 «Introdurre le metriche senza generare paura»).

## Vettori di manipolazione e protezioni

Anche le metriche sulla misurazione possono essere manipolate. Ogni riga seguente abbina la metrica al modo abituale in cui viene distorta e al controllo che lo rivelerebbe.

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Quota di metriche collegate a una decisione | Scrivere a posteriori una domanda e una decisione plausibili per ogni metrica, per aumentare la percentuale | Campionare il registro delle decisioni: chiedere che cosa è cambiato grazie alla metrica e confrontare la data di scrittura della voce con la data in cui la metrica è comparsa per la prima volta |
| Copertura delle baseline | Registrare una baseline una volta sola e non aggiornarla mai, o scegliere un periodo tranquillo e comodo | Richiedere un intervallo di date e una dimensione del campione dichiarati con ogni baseline; rivedere le baseline dopo cambiamenti importanti al servizio |
| Sforzo di misurazione | Spostare il lavoro di raccolta fuori dai registri svolgendolo senza registrarlo, o trasferendolo a un fornitore | Confrontare con un breve sondaggio su quanto tempo le persone dicono richieda la rendicontazione; includere nella revisione lo sforzo dei fornitori |
| Età dei dati alla revisione | Aggiornare la dashboard poco prima della riunione mentre i record sottostanti sono ancora obsoleti | Riportare l'età del record più recente nel sistema di origine oltre all'ora di aggiornamento |
| Seguito dei miglioramenti | Chiudere le azioni con la motivazione «non più rilevante» per raggiungere la percentuale, o spezzare le azioni in parti banali | Rivedere ogni trimestre le motivazioni addotte per le azioni chiuse e verificare se la misura a cui l'azione mirava si è mossa |

Una lettura sana è quella di una pratica visibilmente viva. Le metriche entrano ed escono dal registro per ragioni scritte, le baseline sono aggiornate, le azioni delle revisioni sono concluse o abbandonate con onestà, e il team dedica più tempo ad agire sui dati che a raccoglierli. Un punteggio perfetto su ogni riga è un invito a campionare i record sottostanti, non un motivo per festeggiare.

## Compromessi: vantaggi e svantaggi

| Scelta | Punto di forza | Punto debole |
| --- | --- | --- |
| Misurare poco | Costo basso; basso rischio di manipolazione; alta fiducia | Punti ciechi; le decisioni poggiano su aneddoti |
| Misurare molto | Copertura ampia; allerta precoce su molti fronti | L'attenzione si diluisce; la governance è sottile; il costo di raccolta cresce |
| Vista unificata | Bilancia velocità e stabilità; sostiene la responsabilità condivisa | Richiede definizioni concordate tra i team e un luogo comune in cui guardare |
| Obiettivi sulle metriche | Dà direzione e urgenza | Invita alla manipolazione; richiede una salvaguardia abbinata |
| Metriche senza obiettivi | Incoraggia una discussione onesta | Può scivolare in rendiconti su cui nessuno agisce |

La risposta pratica è un piccolo insieme unificato, con obiettivi usati con parsimonia per condizioni ben comprese e richieste dagli utenti, come un obiettivo di livello di servizio. Tutto il resto è una domanda da discutere. Lo scopo non è togliere il giudizio dalle decisioni, ma alimentarlo con evidenze migliori.

## Domande da discutere con il team

**1. Quale decisione abbiamo preso lo scorso trimestre che un numero ha effettivamente cambiato?**
Chieda al gruppo di ricordare decisioni specifiche e poi di stabilire quali, se ce ne sono, dipendevano dai dati. Se l'elenco è breve, è un'informazione utile: significa che gran parte della rendicontazione attuale non si guadagna il posto. Il facilitatore dovrebbe annotare le metriche che hanno cambiato davvero le decisioni, perché sono candidate alla protezione. Poi chieda quali decisioni sono state prese d'istinto e se un numero avrebbe potuto aiutare.

**2. Quali dei nostri numeri attuali descrivono l'attività e quali il valore per gli utenti?**
Metta la dashboard attuale su uno schermo e contrassegni ogni metrica come attività (ticket chiusi, build eseguite, punti completati) o risultato (utenti in grado di lavorare, problemi che non si ripresentano). Non discuta a lungo dei casi di confine. Il punto è vedere l'equilibrio. Dove c'è solo attività, chieda quale risultato l'attività dovrebbe produrre e come il team lo saprebbe.

**3. Dove si trovano oggi i numeri di consegna e di operazioni, e le stesse persone guardano entrambi?**
Ricostruisca dove è conservata ciascuna famiglia di misure e chi la rivede. I team sono spesso sorpresi di scoprire che i dati delle modifiche sono rivisti da un gruppo e quelli degli incidenti da un altro, senza una riunione condivisa. Chieda quale schema potrebbe sfuggire perché i due non sono mai visti insieme. Concordi un unico luogo o un'unica riunione in cui si incontrino.

**4. Che cosa non stiamo misurando e ci pentiremmo di non sapere?**
Inviti a esprimere preoccupazioni anziché metriche: «Temo che non ci accorgeremmo se...» Partendo dalle risposte, arrivi a misure candidate e poi ai dati più economici che le mostrerebbero. Mantenga l'elenco breve.

**5. Che cosa dovremmo poter credere sui nostri numeri prima di mostrarli alla direzione?**
Discuta che cosa rende affidabili i dati: definizioni stabili, controlli di accuratezza a campione e accordo sulle esclusioni. Elenchi i dubbi del team, anche piccoli, come uno stato usato in modo incoerente. Decida quali dubbi devono essere risolti prima di una condivisione più ampia e quali possono essere dichiarati insieme al numero.

**6. Se potessimo conservare solo tre metriche per il prossimo trimestre, quali sarebbero e perché?**
Il vincolo impone delle priorità. Chieda a ciascuno di scriverne tre, poi le confronti. Cerchi l'accordo sui risultati e il disaccordo sulle misure di attività. Chieda di quale salvaguardia ciascuna delle tre abbia bisogno.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna traggono il massimo beneficio da un feedback rapido e locale: quanto il lavoro attende, dove si accoda, quanto spesso le modifiche causano problemi. Dovrebbero mantenere per sé una vista di lavoro ricca e pubblicare all'esterno un piccolo insieme. I team dovrebbero resistere alla tentazione di misurare il volume di produzione come surrogato del valore, e abbinare fin dall'inizio le misure di velocità alle misure di qualità (vedi Argomento 2.1 «Misure del flusso»).

### Team di servizio e operations

I team di operazioni convivono già con i numeri: volumi, tempi di risposta e di risoluzione, disponibilità. L'opportunità è passare dal riportare ciò che è accaduto allo spiegare perché, attraverso la ricorrenza, le cause radice e la quota di lavoro non pianificato (vedi Argomento 2.9 «Lavoro operativo e lavoro non pianificato»). Dovrebbero anche portare i propri dati nelle conversazioni di pianificazione con i team di consegna, così che il lavoro sull'affidabilità sia sostenuto con evidenze anziché con lamentele.

### Leadership e governance

I dirigenti stabiliscono gli incentivi, spesso per caso, attraverso le domande che pongono. Un dirigente che chiede «perché questo è rosso?» insegna ai team a nascondere il rosso. Un dirigente che chiede «che cosa avete imparato, e di che cosa avete bisogno?» insegna ai team a rendicontare con onestà. Gli organi di governance dovrebbero chiedere il registro, le salvaguardie e le azioni di miglioramento insieme ai numeri, e dovrebbero finanziare il lavoro che un cattivo numero rivela (vedi Argomento 1.4 «Governance e responsabilità delle metriche»).

### Clienti e utenti

Gli utenti giudicano il servizio in base al fatto che funzioni e che i problemi vengano risolti, non in base alle misure interne. Le loro parole, nei sondaggi, nei reclami e nei commenti, appartengono accanto ai numeri operativi come controllo sul fatto che il team misuri ciò che conta (vedi Argomento 6.1 «Metriche di soddisfazione del cliente»).

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni gestisce un service desk, un team di operazioni e tre team di prodotto che costruiscono i servizi di vetrina, pagamenti ed evasione degli ordini. I numeri seguenti sono illustrativi.

La direzione chiede perché i clienti si lamentano della lentezza del checkout quando i team di consegna riferiscono di rilasciare ogni giorno e il team di operazioni riferisce una disponibilità del 99,9 per cento. Ciascun gruppo ha ragione secondo le proprie misure, e nessuno le ha guardate insieme. Il responsabile della gestione dei servizi propone una vista unificata di una pagina per il servizio di checkout, costruita con dati che i team già raccolgono.

La vista mostra quattro elementi per le ultime dodici settimane. Il lead time delle modifiche ha una mediana di 2 giorni e un 85° percentile di 9 giorni. Il tasso di fallimento delle modifiche è dell'8 per cento. Gli incidenti sul checkout sono 14, di cui 6 con una causa comune, una query lenta sul database introdotta da un rilascio recente. Il tempo mediano di ripristino è di 40 minuti, ma il tempo di caricamento della pagina al 95° percentile è salito gradualmente nell'arco di sei settimane, un andamento che la cifra di disponibilità non mostra perché il servizio è rimasto tecnicamente attivo.

Il gruppo vede ciò che era nascosto. La disponibilità era misurata come «il checkout risponde», mentre gli utenti vivono «il checkout risponde abbastanza velocemente». Il team di prodotto e il team di operazioni concordano di aggiungere un indicatore di latenza per il checkout, con un obiettivo fissato dal responsabile del prodotto dopo aver letto i commenti dei clienti, di trattare la causa ripetuta degli incidenti come un record di problema con un responsabile, e di rivedere la vista unificata ogni due settimane. Registrano una decisione: sospendere le nuove funzionalità del checkout per un periodo di consegna continua del software, per correggere la query e aggiungere un controllo delle prestazioni alla pipeline di rilascio.

Entro un mese compare un rischio di manipolazione. Il team di operazioni nota che due dei 14 incidenti erano stati aperti come «richieste di servizio» perché la categoria delle richieste non ha un obiettivo di risoluzione. Il team si rende conto che un obiettivo sugli incidenti aveva spinto le persone a classificare i casi di confine come richieste. Aggiungono alla vista la quota ricategorizzata e campionano dieci ticket al mese. Dopo il cambiamento, il tempo di caricamento della pagina al 95° percentile scende, gli incidenti ripetuti calano, e il team mantiene la vista perché ha cambiato una decisione.

## Lente di settore

**Startup.** I piccoli team hanno poco processo e molta fiducia, il che aiuta. Il rischio è importare una grande dashboard aziendale prima che ve ne sia bisogno. Si parta da due o tre misure che i fondatori leggeranno ogni settimana, come il lead time delle modifiche, un semplice indicatore di affidabilità e il feedback diretto degli utenti, e se ne scrivano le definizioni.

**Piccola impresa.** La persona che gestisce l'IT spesso risponde al titolare, e un singolo reclamo di un cliente può pesare più di qualsiasi grafico. Si mantenga l'insieme ridotto, si usino i dati che gli strumenti già producono e si privilegino le conversazioni con gli utenti. Si trattino con una certa cautela i rendiconti forniti dai fornitori, poiché i fornitori hanno incentivi propri.

**Grande impresa.** La scala moltiplica la richiesta di numeri confrontabili e la pressione a manipolarli. Si usi un piccolo insieme standard con definizioni scritte, si tengano separate le viste di lavoro dei team dalle aggregazioni, e si eviti di confrontare team che gestiscono tipi di servizio molto diversi. Un registro delle metriche, definizioni condivise e una cadenza di revisione diventano essenziali.

**Pubblica amministrazione e settore pubblico.** I livelli di servizio contrattuali, i requisiti di audit e gli obblighi di rendicontazione pubblica possono rendere alcune misure non negoziabili. Le si tratti come input di progettazione: le si rispetti, si mostri una salvaguardia accanto ad esse e si dichiarino le definizioni usate. La responsabilità pubblica aumenta il costo di nascondere le cattive notizie, perciò si costruiscano canali interni sicuri per una rendicontazione franca (vedi Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

La motivazione per misurare è decidere meglio a costi inferiori. La misurazione sostiene la definizione delle priorità, mostra dove si annida lo spreco, dà un'allerta precoce sul declino del servizio e fornisce evidenze per le richieste di investimento.

Il costo ha diverse componenti. Ci sono gli strumenti, che spesso sono già in dotazione: il sistema di ticketing, l'issue tracker, il controllo di versione e il monitoraggio. C'è il tempo del personale per definire le metriche, costruire le viste e mantenere un registro. C'è il costo ricorrente delle riunioni di revisione, che è il più grande e il più utile. Il costo totale di proprietà (TCO) di una pratica di misurazione comprende anche il costo di agire sui risultati, poiché un'intuizione senza budget per la correzione ha poco ritorno.

Il ritorno è difficile da esprimere con una cifra universale, e questo libro non ne inventa una. Un modo utile di costruire il caso è misurare le proprie baseline prima e dopo un cambiamento: tempo speso nella rendicontazione manuale, contatti ripetuti, decisioni ribaltate perché i dati erano sbagliati, sorprese scoperte in ritardo. L'andamento da attendersi è meno sorprese, discussioni più brevi e un migliore accordo tra numeri operativi ed esperienza degli utenti. Un semplice confronto del [ritorno sull'investimento](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) tra sforzo speso e sforzo risparmiato è un punto di partenza ragionevole, e l'Argomento 7.7 «Ritorno sull'investimento e business case» ne tratta il metodo.

## Anti-pattern e insidie

- **La dashboard di tutto.** Decine di grafici, nessun responsabile, nessuna decisione. Se ne scelgano pochi, si nomini la decisione che ciascuno orienta e si ritirino gli altri.
- **Misurazione unilaterale.** Velocità senza stabilità, o stabilità senza rilevanza. Si abbini una misura di flusso a una misura di servizio.
- **Misurare le persone.** Le classifiche individuali corrompono i dati e scoraggiano l'aiuto reciproco. Si rendiconti a livello di team e di servizi.
- **Obiettivi prima delle baseline.** Un obiettivo privo di valore iniziale è un'ipotesi. Si registri prima una baseline e si fissino gli obiettivi dopo almeno un ciclo di revisione.
- **Rendiconti senza azioni.** Una revisione che non produce cambiamenti insegna alle persone a ignorarla. Si concluda ogni revisione con un'azione nominata, un responsabile e una data.
- **Cambi di definizione silenziosi.** Le linee di tendenza perdono significato. Si registri ogni modifica con la sua motivazione e la si segni sul grafico.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Scopo e selezione | Metriche scelte perché lo strumento le offre | Alcune metriche hanno uno scopo dichiarato | Ogni metrica rendicontata ha una domanda e una decisione scritte | Insieme di metriche rivisto rispetto alle decisioni e ritirato quando inutilizzato | Metriche co-progettate con utenti e fornitori attorno a risultati condivisi |
| Vista unificata di agile e ITIL | Dati di consegna e di servizio tenuti separati | Pochi team li vedono insieme | Vista comune di flusso e salute del servizio per ciascun servizio | Vista unificata analizzata nel tempo e collegata al lavoro di miglioramento | Viste tra team e fornitori legate ai risultati per gli utenti |
| Baseline e sforzo | Nessuna baseline; raccolta manuale | Baseline per alcuni servizi; raccolta mista | Baseline registrate per le misure di base; raccolta per lo più automatica | Baseline aggiornate dopo i cambiamenti; sforzo monitorato e ridotto | Baseline e definizioni adeguate continuamente al mutare dei servizi |
| Uso nel miglioramento | Numeri annotati e dimenticati | Azioni occasionali dopo le settimane negative | Ogni revisione si conclude con azioni nominate | Seguito delle azioni misurato e finanziato | Il miglioramento nasce da tutti ed è visibile tra i team |

## Checklist

- [ ] Ogni metrica rendicontata ha una domanda scritta e una decisione nominata che orienta.
- [ ] Il pubblico di ogni vista è nominato e le viste dei team sono separate da quelle della direzione.
- [ ] Almeno una misura di flusso e una misura di servizio compaiono sulla stessa pagina.
- [ ] Esiste una baseline con intervallo di date e dimensione del campione per ogni misura di base.
- [ ] Ogni misura temporale dichiara dove il cronometro parte e dove si ferma.
- [ ] Ogni metrica ha una salvaguardia mostrata accanto.
- [ ] Lo sforzo di raccolta manuale è noto e il maggiore compito manuale è stato esaminato per l'automazione.
- [ ] I team vedono i propri dati prima della direzione.
- [ ] Nessuna classifica, retribuzione o provvedimento disciplinare individuale è legato a una metrica.
- [ ] Ogni revisione si conclude con almeno un'azione di miglioramento nominata, con responsabile e data.
- [ ] Almeno una metrica è stata ritirata o ridefinita nell'ultimo anno.

## Prompt IA

**Redigere la dichiarazione di scopo per ciascuna metrica.**

```text
Siamo [nome del team], responsabili di [servizio o prodotto]. La nostra
dashboard attuale mostra queste metriche: [elenco delle metriche con le
relative definizioni]. Per ciascuna, redigi una dichiarazione di una frase nella
forma «Misuriamo X per decidere Y», e segnala ogni metrica per la quale non
riesci a dedurre una decisione da quanto ti ho fornito. Suggerisci le domande a
cui devo rispondere per completare ciascuna dichiarazione. Non inventare valori
di riferimento né obiettivi. Elenca le tue ipotesi.
```

**Unire le viste di consegna e di servizio.**

```text
Le nostre misure di consegna sono [elenco, con definizioni e fonti dei dati] e
le nostre misure di servizio sono [elenco, con definizioni e fonti dei dati] per
[nome del servizio]. Proponi un layout di una pagina che le mostri insieme,
abbini ogni misura di velocità a una misura di stabilità o di qualità e indichi
i dati necessari a ciascuna. Individua le definizioni in conflitto tra i due
insiemi. Non inventare valori né soglie. Elenca le tue ipotesi e tutto ciò che
non hai potuto determinare.
```

**Pianificare una baseline.**

```text
Vogliamo registrare una baseline per [nome della metrica] per [servizio o team]
prima di cambiare [pratica o strumento]. I dati provengono da [fonte]. Proponi
per quanto tempo raccogliere i dati, quali statistiche di sintesi registrare
(compresi i percentili), che cosa escludere e perché, e come annotare eventuali
cambiamenti nel modo di contare il lavoro durante il periodo. Non presumere
valori. Elenca le tue ipotesi e i rischi per la qualità dei dati che individui.
```

**Preparare una revisione che porti all'azione.**

```text
Teniamo una revisione [settimanale, mensile o trimestrale] di [insieme di
metriche] con [pubblico]. Redigi un'agenda e un breve insieme di domande di
facilitazione che portino dalla lettura dei numeri alla scelta di una o due
azioni di miglioramento, ciascuna con un responsabile e una data. Includi uno
spunto per verificare la manipolazione rispetto alla salvaguardia di ciascuna
metrica. Non inventare dati. Elenca le tue ipotesi sul gruppo e sulla sua
cultura.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare l'argomento che tratta una metrica che si sta valutando e la relativa salvaguardia abbinata.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una metrica nuova o rivista mantenga la dichiarazione di scopo, il vettore di manipolazione e la salvaguardia.

## Punti chiave

- Si misura per vedere, decidere, imparare e rendere conto; un numero che non fa nulla di tutto ciò è un costo generale.
- L'approccio agile fornisce un feedback rapido e locale sul flusso; ITIL fornisce viste condivise, a livello di servizio, di affidabilità e valore. Le si legga insieme.
- Non misurare nulla lascia le decisioni agli aneddoti, e misurare le cose sbagliate orienta lo sforzo con una falsa sicurezza.
- Si parta da poche metriche, ciascuna con uno scopo scritto, una baseline e una salvaguardia.
- Si descrivano team e servizi, mai singole persone, e si lasci che il team veda per primo i propri dati.
- Si chiuda il ciclo: una revisione che non produce azioni spreca i dati.

## Riferimenti e letture di approfondimento

1. Beck, K., et al., *Manifesto for Agile Software Development*, 2001, https://agilemanifesto.org/.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
5. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
11. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
12. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
13. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
14. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
