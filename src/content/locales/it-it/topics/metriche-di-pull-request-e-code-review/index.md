# Metriche di pull request e code review

**La revisione è il punto in cui il lavoro concluso attende più spesso, perciò si misuri quanto tempo una modifica resta ferma prima che qualcuno la guardi, quanto è grande e con quale frequenza torna indietro, e si abbini ogni numero di velocità a un segnale di qualità, così che più veloce non significhi mai trascurato.**

## Panoramica e motivazione

Una [pull request](https://en.wikipedia.org/wiki/Pull_request) è una proposta di integrare un insieme di modifiche da un ramo di un repository di [controllo di versione](https://en.wikipedia.org/wiki/Version_control) in un altro, insieme alla conversazione sul fatto che debba essere integrata. In molti team è il cancello formale tra «l'autore pensa che funzioni» e «il team concorda che possa essere rilasciato». La conversazione è una forma di [code review](https://en.wikipedia.org/wiki/Code_review): una persona diversa dall'autore legge la modifica, pone domande e la approva oppure chiede revisioni. Alcune piattaforme chiamano la stessa cosa merge request; questo argomento usa «pull request» per entrambe.

La revisione vale la pena di essere misurata per una ragione semplice. Nella visione di flusso della consegna, un elemento di lavoro trascorre la maggior parte della propria vita in attesa, e la revisione è una delle attese che si trova interamente sotto il controllo del team. Un collo di bottiglia di una piattaforma condivisa o una dipendenza esterna richiedono che cambino altre persone. Una pull request che attende due giorni per un primo sguardo richiede solo che cambino le abitudini del team. Le misure di flusso di questo libro (vedi Argomento 2.1 «Misure del flusso» e Argomento 2.2 «Lead time, cycle time ed efficienza del flusso») forniscono il vocabolario generale. Questo argomento ingrandisce una fase del ciclo e le dà strumenti propri.

Le visioni agile e ITIL qui si incontrano in modo utile. Dal punto di vista agile, la revisione è un ciclo di feedback e un meccanismo di insegnamento. Diffonde la conoscenza del codice, individua precocemente i difetti e fa rispettare gli accordi di lavoro del team e la sua Definition of Done. Dal punto di vista ITIL, la stessa attività sostiene diverse pratiche. In ITIL 4, la pratica di sviluppo e gestione del software riguarda come il software viene costruito e controllato, l'abilitazione delle modifiche riguarda come le modifiche vengono valutate e autorizzate e la gestione dei rilasci in esercizio riguarda come le modifiche raggiungono l'ambiente di produzione. Una pull request sottoposta a revisione tra pari è, per molte organizzazioni, la prova che una modifica standard è stata valutata prima del rilascio. Trattare la revisione come un'attività misurata e migliorabile serve entrambe le visioni: il team agile vuole un feedback più rapido, e la pratica ITIL vuole un'assicurazione affidabile che le modifiche siano state controllate.

Il rischio da tenere presente in ogni momento è che velocità e qualità della revisione sono facili da separare. Un team può dimezzare il proprio tempo al primo riscontro approvando tutto a prima vista, e la dashboard mostrerà un trionfo mentre il codice peggiora. La [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) si applica con forza insolita a questa famiglia di metriche (vedi Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»), perché i numeri sono economici da raccogliere, visibili a tutti e banalmente facili da spostare senza cambiare ciò che dovevano rappresentare. Ogni raccomandazione seguente è scritta tenendolo presente.

L'**autore** ha aperto la pull request e un **revisore** la valuta. Un **ciclo di revisione** è un giro di «l'autore invia, il revisore risponde». La **rilavorazione** è la modifica fatta dopo un commento di revisione, o dopo l'integrazione, per correggere qualcosa che la prima versione aveva sbagliato. L'**integrazione continua (CI, continuous integration)** è la pratica di integrare spesso il lavoro in una linea condivisa e di controllare automaticamente ogni integrazione; si veda [integrazione continua](https://en.wikipedia.org/wiki/Continuous_integration).

Tutte le metriche di questo argomento descrivono team e repository. Non classificano mai revisori o autori. I conteggi di revisione a livello individuale sono facili da estrarre e allettanti da usare, e farlo trasforma una pratica di collaborazione in una gara (vedi Argomento 9.1 «Salute del team ed esperienza degli sviluppatori»).

## Principi chiave

- **L'attesa domina la revisione.** Nella maggior parte dei team la parte maggiore del tempo di revisione è la pull request ferma non letta, non la discussione una volta che un revisore inizia. Si misuri l'attesa prima di misurare la conversazione.
- **Le modifiche piccole sono riviste più in fretta e meglio.** La dimensione è una delle poche leve che migliora insieme velocità e accuratezza, perché un revisore può tenere a mente una modifica piccola.
- **La velocità senza scrutinio non è un miglioramento.** Ogni metrica di velocità di questo argomento ha bisogno di una controparte di qualità, e la coppia si legge insieme.
- **La revisione è una capacità del team, non personale.** Il carico dovrebbe distribuirsi nel team. Una metrica che mostra concentrazione indica un problema di progettazione del team, mai una persona da lodare o da biasimare.
- **Le distribuzioni battono le medie.** I tempi di revisione hanno una lunga coda di pull request bloccate, perciò si riportino la mediana e un percentile alto (vedi Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).
- **Si definisca il cronometro, poi lo si lasci stare.** Si dichiari quando il cronometro parte e si ferma, quali eventi lo mettono in pausa e quale attività automatica è esclusa, e lo si scriva dove vivono i dati (vedi Argomento 1.5 «Fonti dei dati e strumentazione»).
- **Le metriche di revisione servono il team che possiede il lavoro.** Sono un input alla retrospettiva del team stesso, non una scorecard per qualcun altro.

## Definizioni delle metriche

I cronometri seguenti presuppongono che la piattaforma di controllo di versione registri gli orari degli eventi di apertura, richieste di revisione, commenti, approvazioni, push e integrazioni. Le bozze, le pull request aperte da bot e quelle chiuse senza integrazione sono escluse, salvo che una riga dica diversamente. «Ore lavorative» indica gli orari di lavoro dichiarati dal team, così che una pull request aperta il venerdì sera non accumuli un fine settimana di attesa.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tempo al primo riscontro | Attesa tra il momento in cui una pull request diventa pronta per la revisione e la prima risposta umana sostanziale | Il cronometro parte quando la pull request esce dallo stato di bozza o viene aperta già pronta, si ferma al primo commento di revisione, richiesta di modifica o approvazione da parte di qualcuno diverso dall'autore; i commenti di bot e autore e i semplici cambi di etichetta sono esclusi. Si riportino la mediana e l'85° percentile in ore lavorative | ore lavorative | Cronologia degli eventi della piattaforma di controllo di versione | Sviluppo e gestione del software; abilitazione delle modifiche | Accordo di lavoro sulla reattività della revisione; flusso del lavoro in corso | Settimanale |
| Cycle time della revisione | Tempo totale da pronta per la revisione all'integrazione | Il cronometro parte quando la pull request è pronta per la revisione, si ferma all'integrazione; le pull request chiuse senza integrazione sono escluse e contate a parte. Si riportino la mediana e l'85° percentile in ore lavorative | ore lavorative | Cronologia degli eventi della piattaforma di controllo di versione | Gestione dei rilasci in esercizio; abilitazione delle modifiche | Cycle time della fase di revisione sulla lavagna del team | Settimanale |
| Dimensione della pull request | Quantità di modifica in una pull request | Righe aggiunte più righe eliminate, esclusi file generati, file di lock, codice di terze parti incluso e semplici ridenominazioni, come elencato nelle regole di esclusione del repository. Si riportino la mediana e l'85° percentile per pull request integrata | righe modificate | Statistiche di diff della piattaforma di controllo di versione | Sviluppo e gestione del software | Dimensione ridotta dei lotti; suddivisione delle story | Settimanale |
| Cicli di revisione | Numero di giri di push dell'autore e risposta del revisore prima dell'integrazione | Conteggio dei cicli distinti «modifiche richieste» o commento-poi-push per pull request integrata; il primo invio è il ciclo zero e i fallimenti dei controlli automatici sono esclusi. Si riportino la mediana e l'85° percentile | conteggio | Eventi di revisione e di push della piattaforma di controllo di versione | Miglioramento continuo; sviluppo e gestione del software | Segnale di rilavorazione nella fase di revisione; Definition of Done | Settimanale |
| Concentrazione del carico di revisione | Quanto in modo disomogeneo il lavoro di revisione è distribuito in un team | Quota delle revisioni completate del team gestite dai due revisori più impegnati su 4 settimane mobili; le revisioni della propria pull request e le revisioni dei bot sono escluse. Riportata per il team, mai per nome | percentuale | Eventi di revisione della piattaforma di controllo di versione, aggregati per team | Miglioramento continuo; gestione della conoscenza | Proprietà condivisa del codice; proprietà collettiva | Mensile |
| Numero di pull request stantie | Pull request aperte più a lungo del limite concordato dal team | Pull request ancora aperte e non in bozza la cui età dal momento in cui sono pronte per la revisione supera il limite del team, contate al momento dell'istantanea; le bozze sono escluse | conteggio | Elenco delle pull request aperte della piattaforma di controllo di versione | Abilitazione delle modifiche; miglioramento continuo | Età dell'elemento di lavoro; limite di WIP | Settimanale |
| Tasso di correzioni post-integrazione | Quota di pull request integrate seguite poco dopo da una modifica correttiva | Pull request integrate seguite entro 14 giorni da una correzione, un ripristino o una correzione urgente collegati alla stessa modifica / pull request integrate nel periodo; il lavoro di seguito pianificato e etichettato come tale è escluso | percentuale | Cronologia del controllo di versione, issue collegate e record di incidenti o modifiche | Abilitazione delle modifiche; gestione degli incidenti | Qualità incorporata; Definition of Done | Mensile |

Il tempo al primo riscontro è la leva maggiore e la metrica da cui la maggior parte dei team dovrebbe partire. Il cycle time della revisione ne è la misura di esito ed è una componente dei lead time più lunghi discussi nell'argomento 2.2. La finestra di 14 giorni e il limite di stantio sono esempi; ogni team sceglie valori adatti al proprio ritmo di rilascio e li scrive. Dove i numeri alimentano il quadro più ampio della consegna, subentrano la famiglia DORA (vedi Argomento 2.8 «Metriche DORA») e le misure di fallimento delle modifiche (vedi Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni»).

## Raccomandazioni

### Misurare l'attesa prima del lavoro

**1. Si parta dal tempo al primo riscontro.** È di solito il maggiore contributo al tempo di revisione e il più economico da migliorare. Lo si strumenti dalla cronologia degli eventi della piattaforma, così che nessuno debba inserire nulla. Si riportino la mediana e un percentile alto, perché una mediana di tre ore con un 95° percentile di quattro giorni significa che alcune modifiche vengono dimenticate.

**2. Si escludano dal cronometro bot e bozze e lo si dichiari.** I controlli automatici, i bot di aggiornamento delle dipendenze e gli strumenti di formattazione creano commenti in pochi secondi, e contarli fa apparire eccellente l'attesa. Si faccia partire il cronometro quando l'autore segna la modifica come pronta, non quando il ramo viene inviato per la prima volta. Si pubblichino queste regole accanto al grafico.

**3. Si usino le ore lavorative e si scriva il calendario del team.** Una pull request aperta a tarda ora di venerdì non dovrebbe portare un fine settimana di attesa. Un team distribuito su più fusi orari ha bisogno di una regola su quali orari contino, e spesso la risposta onesta è che il costo del passaggio di consegne tra fusi è la cosa che vale la pena vedere. Si dichiari la scelta e la si mantenga stabile.

### Dare al lavoro una forma rivedibile

**4. Si mantengano piccole le pull request e si tratti la dimensione come un'abitudine del team.** Si monitorino la mediana e l'85° percentile della dimensione e si guardi alle pull request grandi come a un insieme anziché come fallimenti individuali. I team di solito scoprono che le modifiche grandi derivano da poche cause: lavoro non suddiviso abbastanza finemente, mescolanza di refactoring con nuovo comportamento o attesa troppo lunga prima di integrare. Si suddivida il lavoro in modo che ogni pull request faccia una cosa sola, il che corrisponde anche al principio dei lotti piccoli alla base dello [sviluppo basato sul trunk](https://en.wikipedia.org/wiki/Trunk-based_development) e del rilascio frequente.

**5. Non si fissi un tetto rigido di dimensione come obiettivo.** Un limite come «non più di 400 righe» invita a dividere una modifica in pezzi artificiali che sono singolarmente illeggibili o che rompono la build quando integrati da soli. Si usi la dimensione come spunto di conversazione nella retrospettiva e si diano al team tecniche per la suddivisione, come i feature toggle, il refactoring preparatorio in una pull request a sé e l'integrazione dietro un flag.

**6. Si renda esplicita la richiesta di revisione.** Una pull request che non nomina alcun revisore attende un volontario, e i volontari sono scarsi. Si concordi nell'accordo di lavoro a chi viene chiesto, come viene avvisato il team e quale sia l'aspettativa di risposta. Un turno di revisione condiviso, o uno spazio di revisione giornaliero, di solito riduce l'attesa più di qualsiasi impostazione dello strumento.

### Distribuire il carico e la conoscenza

**7. Si osservi la concentrazione del carico come rischio a livello di team.** Se due persone gestiscono la maggior parte delle revisioni, la loro disponibilità limita il flusso del team e la loro assenza lo ferma. Si riveda ogni mese la misura di concentrazione e si agisca attraverso la progettazione del team: ruotare il revisore predefinito, affiancare i membri più nuovi a quelli esperti e scrivere le aree del codice che solo una persona può rivedere. Non si pubblichi una classifica per persona.

**8. Si usi la revisione per condividere la conoscenza e si protegga tale scopo.** Il valore a lungo termine della revisione include apprendimento, proprietà condivisa e stile coerente, oltre alla rilevazione dei difetti. La [programmazione in coppia](https://en.wikipedia.org/wiki/Pair_programming) e la programmazione in gruppo (mob) spostano parte di quello scambio più in anticipo nel processo; dove una coppia ha già lavorato su una modifica, una revisione più leggera è ragionevole. Si faccia della scelta una decisione del team, scritta nell'accordo di lavoro, così che «in coppia, quindi rivista in modo leggero» sia una regola visibile e non una scusa.

### Controllare la revisione stessa

**9. Si lasci all'automazione ciò che l'automazione fa bene.** Formattazione, linting e controlli di base appartengono alla pipeline, così che l'attenzione umana vada a progettazione, correttezza e rischio. L'[analisi statica dei programmi](https://en.wikipedia.org/wiki/Static_program_analysis) e i test automatici riducono il numero di cicli di revisione banali. I cicli rimanenti dicono allora di più sulla conversazione di progetto e meno su disaccordi di stile.

**10. Si leggano i cicli di revisione come segnale di chiarezza, non come conteggio di colpe.** Molti cicli possono significare che il requisito non era chiaro, che all'autore mancava il contesto, che il revisore ha chiesto modifiche di gusto o che la modifica era grande. Zero cicli su ogni pull request può significare un lavoro eccellente oppure che nessuno ha guardato. Si campioni una manciata di pull request con un numero insolitamente alto o insolitamente basso di cicli e le si legga insieme come team.

### Abbinare velocità e qualità e mantenere visibile il tempo

**11. Si mostri sempre una controparte di qualità accanto alla velocità di revisione.** Il tasso di correzioni post-integrazione, gli incidenti collegati a modifiche recenti e la quota di difetti trovati dopo il rilascio sono i partner naturali (vedi Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni»). Se il tempo di revisione migliora mentre il tasso di correzioni peggiora, il team ha scambiato assicurazione per velocità, e la soluzione è una conversazione anziché un obiettivo. Si mostrino entrambi sullo stesso grafico.

**12. Si colleghi la revisione al quadro del flusso e al lavoro non pianificato.** Una revisione più veloce aiuta solo se la fase successiva non si limita a mettere il lavoro in coda (vedi Argomento 2.3 «Lavoro in corso e code»). Le richieste di revisione urgenti che interrompono il lavoro pianificato hanno un costo proprio (vedi Argomento 2.9 «Lavoro operativo e lavoro non pianificato»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tempo al primo riscontro | Pubblicare un rapido «sembra a posto» o una emoji come prima risposta; assegnare un bot o un revisore compiacente; segnare una pull request come pronta solo dopo che qualcuno ha concordato in anticipo di guardarla | Tasso di correzioni post-integrazione; campione di approvazioni senza commenti; richiedere nell'accordo di lavoro che le prime risposte siano sostanziali |
| Cycle time della revisione | Integrare senza attendere la revisione; dividere una modifica in pezzi minuscoli per farla passare più in fretta; chiudere e riaprire una pull request per azzerare il cronometro | Conteggio delle pull request chiuse e riaperte; cicli di revisione; tasso di correzioni post-integrazione; regole dei rami protetti che richiedono l'approvazione |
| Dimensione della pull request | Escludere file dal conteggio; dividere una singola modifica in pezzi che non si possono comprendere separatamente; gonfiare la dimensione con codice generato | Rivedere ogni trimestre le regole di esclusione; verificare che i pezzi divisi compilino e superino i test da soli; leggere un campione dei più piccoli e dei più grandi |
| Cicli di revisione | Approvare al primo passaggio per tenere basso il conteggio; spostare la discussione in chat così che non lasci traccia; autori che inviano molte correzioni in un solo commit per nascondere i cicli | Tasso di correzioni post-integrazione; campione di pull request a zero cicli; mantenere la discussione nella pull request |
| Concentrazione del carico di revisione | Dividere le revisioni in molte piccole approvazioni per distribuire il conteggio; assegnare le revisioni a chi ha tempo libero ma non la conoscenza | Verificare la conoscenza del revisore per le aree rischiose; osservare il tasso di correzioni post-integrazione per area; mantenere la metrica a livello di team |
| Numero di pull request stantie | Chiudere le pull request stantie senza integrarle; convertirle in bozze per nasconderle; alzare il limite di stantio | Conteggio delle pull request chiuse non integrate; conteggio delle bozze di lunga durata; rivedere il limite con il team ogni trimestre |
| Tasso di correzioni post-integrazione | Registrare le correzioni sotto un nuovo elemento di lavoro senza collegamento; etichettare il lavoro correttivo come seguito pianificato; evitare la metrica ritardando la correzione oltre la finestra | Confrontare con i dati di incidenti e di fallimento delle modifiche; campione di elementi di seguito; verifica delle etichette usate |

Una lettura sana è una lettura calma. Il tempo al primo riscontro è breve e anche la coda è breve, così che nessuna pull request attenda per giorni. La dimensione si colloca in un intervallo che il team trova facile da leggere, con poche modifiche grandi che il team sa spiegare. I cicli di revisione sono bassi ma non zero, la concentrazione del carico è moderata, il numero di pull request stantie è piccolo e il tasso di correzioni post-integrazione è stabile. Quando un numero migliora bruscamente, qualcuno dovrebbe controllare che la sua salvaguardia abbinata non si sia mossa nella direzione sbagliata.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Revisione rapida con aspettative di risposta rigorose | Cicli di feedback brevi; minore perdita di contesto per l'autore; minore lavoro in corso | Pressione ad approvare in fretta; interrompe il lavoro concentrato |
| Revisione lenta e accurata | Lettura attenta di progetto e rischio; trasferimento di conoscenza più forte | Cycle time più lungo; si accumulano lotti più grandi; gli autori passano ad altro e perdono il contesto |
| Pull request piccole | Più facili da leggere e da ripristinare; flusso più fluido | Più sovraccarico per modifica; può frammentare una funzionalità in passi confusi |
| Pull request grandi | Meno passaggi di consegne; l'intera funzionalità visibile in una volta | Le revisioni diventano superficiali; più difficili da ripristinare; attese lunghe |
| Approvazione obbligatoria da un responsabile nominato | Responsabilità chiara per le aree rischiose; supporta l'autorizzazione delle modifiche | Crea un collo di bottiglia e un singolo punto di guasto |
| Controlli automatici prima della revisione umana | Libera le persone per progetto e rischio; coerente | Può creare falsa sicurezza; richiede manutenzione |

Nessuna politica singola vince. L'obiettivo è accorciare l'attesa preservando lo scrutinio, e il percorso consueto è fatto di modifiche più piccole, aspettative di revisione chiare, forte automazione per i controlli di routine e un accordo del team su che cosa sia una buona revisione. Le metriche di revisione sono più utili come domande per una retrospettiva e meno utili come obiettivi.

## Domande da discutere con il team

**1. Dove trascorre la maggior parte della propria vita una pull request, in attesa o in revisione?**
Si chieda al team di fare una stima prima di guardare i dati, poi si mostri la ripartizione tra tempo al primo riscontro e tempo restante fino all'integrazione. La maggior parte dei gruppi è sorpresa da quanto sia attesa. Chi facilita dovrebbe annotare quali stime erano sbagliate e chiedere che cosa ciascuna stima sbagliata dica su come il team vive la revisione. Si concluda con una modifica che attacchi l'attesa maggiore.

**2. Che aspetto ha una buona revisione in questo team e come potrebbe distinguerla un estraneo?**
Si elenchino i comportamenti che il team apprezza, come chiedere del progetto, controllare i test e spiegare la ragione di una richiesta. Poi ci si chieda quali di questi lascino una traccia visibile nella pull request. Si discuta come distinguere una prima risposta sostanziale da una di facciata senza sorvegliare le singole persone. Si concordi una breve descrizione scritta da inserire nell'accordo di lavoro.

**3. Quanto è troppo grande per noi e che cosa facciamo quando il lavoro è davvero grande?**
Si guardi la distribuzione delle dimensioni e si scelgano alcune delle pull request più grandi. Ci si chieda perché ciascuna fosse grande e se potesse essere suddivisa. Si discutano tecniche come i feature toggle, il refactoring preparatorio e l'integrazione dietro un flag. Chi facilita dovrebbe resistere alla tentazione di fissare un limite numerico e concordare invece un'abitudine che il team proverà per un mese.

**4. Chi rivede il nostro codice più rischioso e che cosa accade quando è assente?**
Si mappino le aree del codice sulle persone che possono rivederle bene. Si guardino la concentrazione del carico e le aree con un solo revisore qualificato. Si discuta come far crescere un secondo revisore in ciascuna, tramite affiancamento o assegnazioni a rotazione. Si mantenga la conversazione sulla resilienza del team, non sulla classifica del carico di lavoro di qualcuno.

**5. Se la nostra velocità di revisione raddoppiasse domani, che cosa vorremmo che fosse vero sulla qualità?**
Si chieda al gruppo di nominare i segnali di qualità che osserverebbe, come correzioni post-integrazione, incidenti collegati a modifiche recenti o numero di ripristini. Si verifichi se quei segnali siano attualmente visibili accanto al grafico della velocità. Si discuta quale sarebbe un primo segno che la velocità è stata comprata a spese dello scrutinio. Si concordi quale controparte mostrare sulla dashboard.

**6. Quali numeri di revisione saremmo tentati di migliorare in un modo che non aiuta?**
Si passi in rassegna ogni metrica chiedendosi come una persona sotto pressione potrebbe farla apparire migliore senza migliorare nulla. Si confrontino le risposte con la tabella di manipolazione precedente e si aggiungano le idee del team. Lo scopo è nominare il rischio prima che accada. Si concordi quale salvaguardia sarà rivista accanto a ciascuna metrica.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna possiedono il processo di revisione e dovrebbero possederne le metriche. Traggono il massimo vantaggio dall'accorciare l'attesa con semplici accordi: uno spazio di revisione giornaliero, un processo di richiesta chiaro e modifiche piccole. Dovrebbero usare i numeri nelle retrospettive, mantenere basso il lavoro in corso e resistere alla tentazione di ottimizzare un singolo grafico. La revisione è anche il luogo in cui i membri più nuovi imparano il codice, perciò si protegga quello scopo.

### Team di servizio e operations

I team operativi incontrano la revisione dove codice dell'infrastruttura, configurazione e automazione dei runbook vengono modificati tramite pull request. Per loro, la revisione fa spesso parte del modo in cui una modifica standard viene approvata e documentata (vedi Argomento 4.3 «Metriche di abilitazione delle modifiche»). Dovrebbero concordare quali modifiche richiedano la revisione di una seconda persona, con quale rapidità siano riviste le correzioni urgenti e come vengano riviste a posteriori le modifiche di emergenza, così che una correzione affrettata sia comunque esaminata. Una revisione superficiale su una modifica rischiosa emerge più tardi come incidente.

### Leadership e governance

I dirigenti dovrebbero trattare le metriche di revisione come segnali sulla salute e sul flusso del team, non come punteggi di produttività. Dovrebbero chiedere la misura di qualità abbinata ogni volta che viene riportato un numero di velocità, sostenere il tempo che una revisione accurata richiede ed evitare di confrontare i team sul tempo grezzo di revisione, poiché repository e rischi differiscono. Gli organi di governance possono usare le evidenze di revisione come parte dell'assicurazione sulle modifiche, purché accettino che un processo di revisione documentato e campionato è più solido di un conteggio di approvazioni.

### Clienti e utenti

I clienti non vedono le pull request, eppure ne avvertono i risultati: quanto presto arriva una correzione e con quale frequenza un rilascio porta un nuovo difetto. Attese brevi di revisione aiutano le correzioni urgenti a raggiungerli prima, e una revisione ponderata aiuta a tenere lontani da loro i guasti. Dove un servizio ha una storia pubblicata di rilasci o di difetti, i clienti traggono beneficio dal vedere che il team mostra nel tempo meno ripristini e meno correzioni ripetute.

## In pratica: un esempio di ITIL agile

Il reparto IT di un ospedale regionale gestisce un servizio web per la prenotazione degli appuntamenti dei pazienti, costruito da un team di prodotto di sette persone e gestito con un piccolo gruppo di site reliability. Tutti i numeri di questo esempio sono illustrativi.

In una revisione trimestrale il team scopre che il proprio cycle time della revisione ha una mediana di 26 ore lavorative e un 85° percentile di 71 ore lavorative (illustrativo). Scomponendo il ciclo si vede che il tempo mediano al primo riscontro è di 19 ore lavorative, perciò la maggior parte del ritardo è attesa. La dimensione delle pull request ha una mediana di 180 righe e un 85° percentile di 900 righe (illustrativo), e i due revisori più impegnati gestiscono il 68 percento delle revisioni (illustrativo). Il tasso di correzioni post-integrazione si colloca al 9 percento (illustrativo).

Il team prende tre accordi. Fissa uno spazio di revisione giornaliero di 30 minuti, scrive nel proprio accordo di lavoro l'aspettativa di una prima risposta entro un giorno lavorativo e fa ruotare ogni settimana un incarico «prima la revisione». Adotta inoltre l'abitudine della suddivisione per il lavoro grande, usando feature toggle così che le funzionalità parziali possano essere integrate in sicurezza. Non fissa un limite di dimensione né un obiettivo per il tempo al primo riscontro.

Dopo due mesi il tempo mediano al primo riscontro scende a 6 ore lavorative e l'85° percentile del cycle time della revisione scende a 34 ore lavorative (illustrativo). La concentrazione del carico scende al 52 percento (illustrativo) e il tasso di correzioni post-integrazione resta al 9 percento.

Il team individua poi un rischio di manipolazione. Un campione di approvazioni mostra che circa un terzo delle prime risposte arriva in pochi minuti e riporta solo «LGTM» su modifiche che toccano la logica dei promemoria degli appuntamenti. Il guadagno di velocità era in parte reale e in parte un timbro automatico. Il tasso di correzioni post-integrazione non si era ancora mosso perché il codice interessato gira su un ciclo mensile. Il team modifica l'accordo di lavoro in modo che una prima risposta debba includere una domanda, un commento su una parte specifica della modifica o una nota esplicita di ciò che è stato controllato, e aggiunge al proprio grafico di revisione la quota campionata di approvazioni senza commenti. Concorda inoltre che le modifiche alla logica dei promemoria rivolti ai pazienti richiedano due revisori, uno dei quali del gruppo operativo. La decisione, con le motivazioni, entra nel registro delle decisioni del team.

## Lente di settore

**Startup.** Un piccolo team può rivedere in pochi minuti perché tutti conoscono il codice, e il rischio principale è saltare la revisione quando il tempo scarseggia. Si mantengano poche le metriche: bastano tempo al primo riscontro e dimensione. Si stabilisca presto l'abitudine delle modifiche piccole, perché è molto più difficile introdurla una volta che codice e team crescono.

**Piccola impresa.** Spesso uno o due sviluppatori, o un fornitore esterno, mantengono il software. La revisione può essere di un solo collega o del personale del fornitore stesso. Si chieda ai fornitori come rivedono e se i dati delle pull request possano essere condivisi e si tenga un semplice registro di quali modifiche siano state riviste e da chi, perché la revisione è il principale controllo contro gli errori in un piccolo team.

**Grande impresa.** Molti team, repository e regole di approvazione creano un'ampia variazione. Si standardizzino le definizioni dei cronometri e le esclusioni così che i dati della piattaforma siano confrontabili, ma non si classifichino i team per tempo grezzo di revisione, poiché rischio e codice differiscono. Si presti attenzione ai requisiti di revisione imposti per audit che aggiungono attesa senza aggiungere scrutinio e si cerchino opportunità per sostituire le approvazioni manuali con controlli automatici e revisione campionata.

**Pubblica amministrazione e settore pubblico.** Separazione dei compiti, tracce di audit e regole sugli appalti richiedono spesso un'approvazione indipendente per le modifiche. Si trattino queste regole come input di progetto: si registri chi ha approvato che cosa e quando e si misuri l'attesa che creano. Dove i fornitori scrivono il codice, si specifichino nel contratto le evidenze di revisione e l'accesso ai dati (vedi Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

La motivazione è accorciare la parte della consegna che è insieme lenta e controllabile, mantenendo i benefici della revisione tra pari: meno difetti, conoscenza condivisa e una traccia di audit. Le pull request in attesa trattengono il lavoro concluso dagli utenti, aumentano il costo del cambio di contesto per gli autori e rendono più probabili i conflitti di integrazione man mano che i rami invecchiano. Ridurre l'attesa ripaga quindi attraverso una consegna più rapida, meno rilavorazione e meno frustrazione.

Il costo di raccogliere queste metriche è basso quando la piattaforma di controllo di versione fornisce la cronologia degli eventi e un'API. I costi principali sono il tempo per definire i cronometri e le esclusioni, per costruire o configurare il rapporto e per rivedere regolarmente i numeri. Il costo maggiore è comportamentale: il tempo che le persone dedicano a rivedere con tempestività, che compete con altro lavoro. Quel tempo è il vero investimento e dovrebbe essere messo a budget anziché trattato come gratuito.

Il ritorno si manifesta come un cycle time della revisione più breve, meno pull request stantie e un tasso di correzioni post-integrazione stabile o in calo. Si eviti di rivendicare in anticipo uno specifico miglioramento percentuale, poiché i risultati dipendono dal punto di partenza e dal team. Un caso credibile confronta le distribuzioni del team prima e dopo, insieme alla sua controparte di qualità, anziché citare cifre di altre organizzazioni. Il libro del 2018 *Accelerate* riporta ricerche che collegano pratiche tecniche e culturali alle prestazioni di consegna ed è una fonte ragionevole per l'argomento generale, ma i numeri per il proprio team vengono dai propri dati.

## Anti-pattern e insidie

- **Classificare revisori o autori.** Le classifiche individuali di revisioni completate o righe modificate corrompono la collaborazione. Si riporti a livello di team e si usino i numeri per adeguare le abitudini del team.
- **Fissare un obiettivo sul tempo al primo riscontro senza una controparte di qualità.** Il risultato è il timbro automatico. Si mostrino il tasso di correzioni post-integrazione e un campione di approvazioni senza commenti accanto a ogni grafico di velocità.
- **Fissare un limite rigido di dimensione.** I team dividono artificialmente il lavoro per conformarsi. Si usi la dimensione come conversazione e si insegnino invece tecniche di suddivisione.
- **Trattare zero commenti come un successo.** Un'approvazione non esaminata può riflettere fiducia o disattenzione. Si campionino tali pull request e le si legga insieme.
- **Contare l'attività dei bot come revisione.** I commenti automatici fanno sembrare breve l'attesa. Si escludano i bot dal cronometro e dalle misure di carico.
- **Ignorare fusi orari e calendari.** Il tempo grezzo dell'orologio fa sembrare lente le revisioni le attese di fine settimana e tra regioni. Si usino le ore lavorative e si nomini il calendario.
- **Lasciare crescere l'elenco delle stantie.** Le vecchie pull request accumulano conflitti di integrazione e perdono contesto. Si riveda l'elenco ogni settimana e si integri, si rielabori o si chiuda ciascun elemento con una motivazione.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizione e cronometri | Il tempo di revisione è stimato a occhio o riportato a sensazione | Alcuni team esportano i tempi dalla piattaforma con regole proprie | Una definizione scritta di ciascun cronometro, con esclusioni per bot, bozze e calendari | Definizioni riviste con una cadenza; modifiche registrate con le motivazioni | Definizioni allineate tra team e fornitori e riviste quando smettono di orientare le decisioni |
| Pratica di revisione | Le revisioni avvengono quando qualcuno se ne accorge | Norme informali in alcuni team | Accordo di lavoro scritto su richieste, aspettative di risposta e su ciò che una revisione copre | Norme adeguate sulla base dei dati; condivisione della conoscenza e aree di rischio monitorate | Pratica di revisione coordinata tra team e fornitori, con l'automazione che gestisce i controlli di routine |
| Controparte di qualità | Nessun legame tra revisione e difetti | Sguardo occasionale alle correzioni post-integrazione | Tasso di correzioni post-integrazione mostrato accanto alla velocità di revisione | Salvaguardie riviste regolarmente; approvazioni campionate lette | Evidenze di revisione collegate all'assicurazione sulle modifiche e all'apprendimento dagli incidenti tra i servizi |
| Uso nel miglioramento | Numeri inutilizzati | Mostrati ad alcune retrospettive | Rivisti dal team responsabile con una cadenza fissa | Le lacune portano a lavoro di miglioramento pianificato e finanziato | Le idee di miglioramento fluiscono dai team alla pratica condivisa e ritorno |

## Checklist

- [ ] I cronometri per il tempo al primo riscontro e il cycle time della revisione sono scritti, con inizio, fine ed esclusioni.
- [ ] Bot, bozze e pull request chiuse senza integrazione sono escluse o contate a parte e le regole sono visibili.
- [ ] I tempi sono riportati come mediana e percentile alto in ore lavorative.
- [ ] La dimensione della pull request è misurata con un elenco di esclusioni concordato per i file generati e di terze parti.
- [ ] Il team ha un accordo scritto su come si richiedono le revisioni e quanto presto ci si aspetta una prima risposta.
- [ ] La concentrazione del carico di revisione è riportata solo a livello di team.
- [ ] Un tasso di correzioni post-integrazione o un'altra controparte di qualità è mostrata sullo stesso grafico della velocità di revisione.
- [ ] Ogni mese si legge un campione di approvazioni senza commenti e molto rapide.
- [ ] L'elenco delle pull request stantie è rivisto ogni settimana.
- [ ] I dati di revisione sono usati nelle retrospettive e non nella valutazione individuale.
- [ ] Le aree di codice con un solo revisore qualificato sono elencate e hanno un piano.

## Prompt IA

**Redigere le definizioni dei cronometri per le metriche di revisione.**

```text
Voglio definire le metriche di revisione per [team o repository]. La nostra
piattaforma è [piattaforma di controllo di versione] e il nostro flusso è
[descrivi: pull request in bozza, approvazioni richieste, regole di integrazione,
bot in uso]. Redigi definizioni precise per tempo al primo riscontro e cycle time
della revisione, indicando l'evento che avvia e ferma ciascun cronometro, che
cosa è escluso (bot, bozze, chiuse non integrate), come sono gestite le ore
lavorative per [fusi orari e calendario di lavoro] e quali percentili riportare.
Non inventare valori di riferimento né funzionalità dello strumento. Elenca le
tue ipotesi e le domande a cui devo rispondere per completare le definizioni.
```

**Analizzare un'esportazione dei dati di revisione.**

```text
Ecco un'esportazione anonimizzata delle pull request integrate per [team] nel
periodo [periodo], con le colonne [elenca le colonne, per esempio orario di
pronto, orario del primo riscontro, orario di integrazione, righe modificate,
cicli di revisione, flag di correzione collegata]: [incolla i dati o una
sintesi]. Calcola la mediana e l'85° percentile per ogni misura di tempo e per la
dimensione, scomponi il ciclo di revisione in attesa e revisione e segnala gli
schemi che meritano una conversazione. Non classificare le persone e non
confrontare con benchmark esterni. Elenca le tue ipotesi e gli eventuali problemi
di qualità dei dati che noti.
```

**Individuare i rischi di manipolazione nelle nostre metriche di revisione.**

```text
Il nostro team riporta queste metriche di revisione: [elenca le metriche e come
ciascuna è calcolata]. Le pressioni su di noi sono [per esempio una scadenza di
rilascio, un obiettivo della direzione, un contratto con un fornitore]. Per
ciascuna metrica, descrivi modi plausibili in cui potrebbe migliorare senza
migliorare la revisione, i primi segnali di ciascuno e una metrica o pratica di
salvaguardia abbinata che lo individuerebbe. Non inventare statistiche. Elenca le
tue ipotesi e dimmi che cosa dovrei sapere per ordinare i rischi.
```

**Preparare una retrospettiva sul flusso di revisione.**

```text
Prepara un ordine del giorno di retrospettiva di 45 minuti per [team] sul flusso
di revisione. Input: tempo al primo riscontro [valore], cycle time della
revisione [valore], dimensione mediana [valore], concentrazione del carico
[valore] e tasso di correzioni post-integrazione [valore], tutti etichettati con
le rispettive definizioni. Suggerisci domande che facciano emergere le cause, un
piccolo esperimento che il team potrebbe condurre per [durata] e il segnale di
qualità da osservare durante l'esperimento. Non inventare cause né obiettivi.
Elenca le tue ipotesi e i dati che dovrei portare.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare l'argomento che definisce una metrica correlata di flusso o di qualità e la salvaguardia che dovrebbe affiancare una metrica di revisione.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che le modifiche a questo argomento mantengano coerenti il modello, la tabella di manipolazione e i rimandi.

## Punti chiave

- La maggior parte del ritardo di revisione è attesa, perciò si misurino tempo al primo riscontro e cycle time della revisione come distribuzioni in ore lavorative.
- Le pull request più piccole sono riviste più in fretta e con più attenzione; si insegni la suddivisione anziché imporre un tetto di dimensione.
- Si abbini ogni misura di velocità a una controparte di qualità, come il tasso di correzioni post-integrazione, e si leggano insieme.
- Si tratti il carico di revisione come una capacità del team e si riporti la concentrazione a livello di team, mai come classifica delle persone.
- Le metriche di revisione sono domande per una retrospettiva e servono il team che possiede il lavoro.

## Riferimenti e letture di approfondimento

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
3. Google, *Code Review Developer Guide*, Google Engineering Practices documentation, https://google.github.io/eng-practices/review/
4. Bacchelli, A., and Bird, C., "Expectations, Outcomes, and Challenges of Modern Code Review," *Proceedings of the 35th International Conference on Software Engineering (ICSE)*, 2013.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Schwaber, K., and Sutherland, J., *The Scrum Guide*, Scrum.org and Scrum Inc., 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
9. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
10. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
13. Wikipedia, [Trunk-based development](https://en.wikipedia.org/wiki/Trunk-based_development).
14. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
15. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
