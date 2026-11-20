# Metriche di rilascio e distribuzione

**Distribuire il codice e rilasciarlo agli utenti sono eventi diversi con rischi diversi: occorre dunque misurarli separatamente, contare ciascuno secondo una regola scritta e leggere insieme frequenza, lead time, dimensione dei lotti e igiene dei flag, anziché celebrare un singolo conteggio.**

## Panoramica e motivazione

Molti team usano le parole «distribuzione» e «rilascio» come se significassero la stessa cosa. Non è così, e la differenza è l'idea più utile di questo argomento. Una **distribuzione** (deployment) è l'atto di mettere una versione del software in un ambiente, di solito la produzione, come descritto nell'articolo sul [deployment del software](https://en.wikipedia.org/wiki/Software_deployment). Un **rilascio** (release) è il momento in cui una modifica diventa disponibile agli utenti a cui è destinata, una decisione che la [gestione dei rilasci](https://en.wikipedia.org/wiki/Release_management) esiste per governare. Quando i due eventi avvengono insieme, una distribuzione è un rilascio e un solo numero descrive entrambi. Quando sono separati, il team può distribuire spesso e in silenzio, e rilasciare in modo deliberato.

La separazione conta perché i due eventi comportano rischi diversi. Una distribuzione comporta un rischio tecnico: la nuova build potrebbe non avviarsi, potrebbe rompere una dipendenza o potrebbe richiedere un rollback. Un rilascio comporta un rischio per il business e per l'utente: la modifica potrebbe confondere i clienti, o potrebbe dover arrivare a una data concordata. I team che accoppiano i due eventi accettano entrambi i rischi insieme, il che li spinge verso grandi lotti di modifiche rilasciati di rado. I team che li separano assumono il rischio tecnico a piccoli passi e il rischio per l'utente a passi controllati.

Lo strumento principale per la separazione è il [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle), chiamato anche feature flag: un interruttore nella configurazione che attiva o disattiva un comportamento senza una nuova distribuzione. Tecniche correlate includono il [rilascio canary](https://en.wikipedia.org/wiki/Canary_release), che espone prima una modifica a una piccola quota di traffico, e la [distribuzione blue-green](https://en.wikipedia.org/wiki/Blue-green_deployment), che mantiene due ambienti di produzione e sposta il traffico tra di essi. Tutte consentono di rispondere a due domande distinte: la nuova versione sta funzionando in modo sicuro, e chi dovrebbe vedere il nuovo comportamento e quando.

I termini seguenti ricorrono in questo argomento.

- Un **rilascio** è una versione o un insieme di modifiche reso disponibile agli utenti.
- Una **distribuzione** è lo spostamento di una versione verso un ambiente. ITIL 4 indica una pratica per questo, la gestione delle distribuzioni (deployment management).
- Un **dark launch** è una distribuzione il cui nuovo comportamento è disattivato per gli utenti.
- Un **rollout progressivo** è un rilascio che amplia l'esposizione per fasi, per esempio l'1 per cento, il 10 per cento e poi tutti.
- Un **lotto** (batch) è l'insieme di modifiche che vengono rilasciate insieme in una distribuzione o in un rilascio. La dimensione del lotto è il numero di modifiche, o la quantità di modifica, in esso contenute.
- Il **lead time di rilascio** è il tempo trascorso da un punto di partenza dichiarato fino a quando la modifica è disponibile per i suoi utenti. Il Suo team scrive il punto di partenza, perché ne sono in uso diversi.
- Un **percentile** è un valore al di sotto del quale ricade una quota indicata di osservazioni. L'85° percentile del lead time di rilascio è il numero che l'85 per cento dei rilasci batte.

Le visioni agile e ITIL si incontrano qui. Un team agile che segue la [consegna continua](https://en.wikipedia.org/wiki/Continuous_delivery) vuole che ogni modifica sia rilasciabile in qualsiasi momento e tratta il rilascio come una decisione di business presa separatamente dall'atto tecnico. Un professionista ITIL vede la gestione dei rilasci, la gestione delle distribuzioni e l'abilitazione delle modifiche come pratiche che pianificano, programmano e controllano il passaggio delle modifiche all'uso in produzione. Le due visioni entrano in conflitto quando la gestione dei rilasci è intesa come un calendario di grandi eventi. Si accordano quando la pratica è intesa come la capacità di rilasciare in sicurezza su richiesta, con i controlli integrati nella pipeline e nei flag.

Questo argomento non ripete le definizioni delle cinque misure di prestazione della consegna del programma di ricerca DORA (si veda l'Argomento 2.8 «Metriche DORA»), né le misure di fallimento e di rilavorazione dopo un rilascio (si veda l'Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni»), né il volume e l'approvazione delle modifiche (si veda l'Argomento 4.3 «Metriche di abilitazione delle modifiche»). Aggiunge ciò che quegli argomenti lasciano aperto: come contare i rilasci distintamente dalle distribuzioni, quanto a lungo una modifica finita attende prima che gli utenti la ricevano, quanto sono grandi i lotti e se i flag che rendono possibile la separazione vengono tenuti in ordine.

Infine, i conteggi di rilascio e di distribuzione sono numeri allettanti per una dashboard della dirigenza, e la [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) si applica subito (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»). Un conteggio di distribuzioni sale quando le modifiche vengono divise in pezzi banali. Un conteggio di rilasci sale quando si cambia un'etichetta. Ciascuna metrica seguente è quindi accompagnata dal modo in cui si piega e dalla contromisura che coglie la piega.

## Principi chiave

- **Distribuzione e rilascio sono due eventi.** Li si misuri separatamente dove l'architettura lo consente, e si dica chiaramente dove sono ancora un unico evento.
- **Contare secondo una regola scritta.** Una distribuzione conta quando un ambiente nominato ha ricevuto una versione nominata con un esito positivo. Un rilascio conta quando gli utenti previsti possono raggiungere la modifica. Si scriva la regola una volta e la si applichi sempre allo stesso modo.
- **Descrivere un servizio, non una persona.** I conteggi appartengono a un servizio e al suo team, mai a un individuo.
- **Misurare l'attesa, non solo il lavoro.** Il lead time di rilascio contiene spesso giorni di attesa per una finestra, un'approvazione o una decisione. L'attesa è dove di solito risiede il miglioramento.
- **I lotti piccoli sono la leva.** Frequenza e dimensione sono due viste della stessa cosa. Si abbini ogni conteggio a una misura di quanta modifica ciascun rilascio abbia portato.
- **I flag sono un inventario con un costo di mantenimento.** Un flag che vive troppo a lungo diventa codice morto e una fonte di fallimenti, quindi si monitori l'anzianità dei flag con la stessa cura della loro copertura.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Corrispettivo agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frequenza di distribuzione | Con quale frequenza un servizio riceve una distribuzione riuscita in produzione | Numero di distribuzioni riuscite in produzione del servizio nel periodo / giorni del periodo; le distribuzioni verso ambienti di test o di staging, quelle fallite o annullate e le ridistribuzioni di una build invariata sono escluse; le distribuzioni solo di configurazione sono contate in una serie separata | Distribuzioni al giorno o alla settimana | Log degli eventi della pipeline di distribuzione | Gestione delle distribuzioni | Consegna continua; rilascio di un incremento funzionante | Settimanale |
| Frequenza di rilascio | Con quale frequenza gli utenti ricevono una modifica che possono raggiungere | Numero di eventi di rilascio nel periodo / giorni del periodo; un evento di rilascio è il momento in cui una modifica, o un gruppo di modifiche, diventa raggiungibile dagli utenti previsti (un flag attivato per tutti gli utenti, la fase finale di un rollout progressivo o la distribuzione di una modifica senza flag); un dark launch, un rollout fermato a una fase parziale e una modifica di flag che riguarda solo gli utenti interni sono esclusi | Rilasci a settimana o al mese | Log di audit del servizio di flag unito al log della pipeline e al calendario dei rilasci | Gestione dei rilasci | Rilascio alla fine di ogni incremento; un incremento potenzialmente rilasciabile reso disponibile | Settimanale, rivisto mensilmente |
| Lead time di rilascio | Quanto tempo una modifica finita attende prima che gli utenti possano raggiungerla | L'orologio parte quando la modifica è integrata nel ramo principale ed ha superato i controlli automatici (oppure, se il team lo scrive così, al primo commit) e si ferma quando la modifica è rilasciata come definito sopra; si riportino la mediana e l'85° percentile delle modifiche rilasciate nel periodo; le modifiche non ancora rilasciate sono escluse e riportate come anzianità del lavoro in attesa | Ore o giorni | Controllo di versione unito alla pipeline e al log di audit dei flag | Gestione dei rilasci; gestione delle distribuzioni | Lead time da done a consegnato; lead time verso il cliente | Settimanale, rivisto mensilmente |
| Intervallo tra distribuzione e rilascio | Quanto tempo il codice distribuito resta «al buio» prima che gli utenti possano raggiungerlo | L'orologio parte quando la modifica è distribuita in produzione e si ferma quando è rilasciata; si riportino la mediana e l'85° percentile; le modifiche rilasciate nel momento della distribuzione hanno un intervallo pari a zero e sono incluse; le modifiche distribuite e poi rimosse senza rilascio sono escluse e contate separatamente | Ore o giorni | Log della pipeline unito al log di audit dei flag | Gestione dei rilasci; gestione delle distribuzioni | Dark launch; disaccoppiamento tra distribuzione e rilascio | Mensile |
| Dimensione del lotto di rilascio | Quanta modifica viene rilasciata insieme in un rilascio | Mediana e 85° percentile del numero di modifiche integrate (pull request o elementi di lavoro) per rilascio nel periodo; l'unità di modifica è scritta; ogni modifica è contata una sola volta, nel rilascio che l'ha resa raggiungibile | Modifiche per rilascio | Controllo di versione e issue tracker uniti all'evento di rilascio | Gestione dei rilasci; abilitazione delle modifiche | Lotti piccoli; fette verticali di lavoro | Per rilascio, rivisto mensilmente |
| Copertura dei feature flag | La quota di modifiche visibili agli utenti rilasciate dietro un flag | Modifiche visibili agli utenti rilasciate nel periodo che avevano un flag al momento del rilascio / tutte le modifiche visibili agli utenti rilasciate nel periodo; le modifiche all'infrastruttura e le correzioni di difetti che non possono essere protette da flag sono escluse, e la regola per «visibile all'utente» è scritta | Percentuale | Servizio di flag unito all'issue tracker e al log dei rilasci | Gestione dei rilasci; abilitazione delle modifiche | Consegna progressiva; sviluppo guidato da esperimenti | Mensile |
| Numero di flag obsoleti | Quanti flag hanno esaurito il loro scopo | Numero di flag di rilascio ancora presenti nel codice o nella configurazione oltre un numero dichiarato di giorni dopo che la modifica da essi protetta ha raggiunto tutti gli utenti; i flag operativi permanenti (kill switch, flag di abilitazione) sono etichettati ed esclusi; il limite di età è scritto per ciascun tipo di flag | Flag, e anzianità mediana dei flag di rilascio in giorni | Inventario del servizio di flag unito alla ricerca nel codice | Gestione dei rilasci; gestione della conoscenza | Pulizia del debito tecnico; il criterio di done che prevede la rimozione di un flag | Mensile |

## Raccomandazioni

### Scrivere che cosa conta come distribuzione e come rilascio

**Definire entrambi gli eventi prima di contare uno dei due.** Una distribuzione conta quando una versione nominata ha raggiunto un ambiente nominato e la pipeline ha riportato un esito positivo. Un rilascio conta quando gli utenti previsti possono raggiungere la modifica, il che per una modifica protetta da flag è il momento in cui il flag viene attivato per loro e non il momento in cui il codice è arrivato. Si indichino le esclusioni nella stessa frase: ambienti di test, rollback, ridistribuzioni di una build invariata ed esposizione solo interna.

### Riportare le due serie affiancate

**Mostrare la frequenza di distribuzione e la frequenza di rilascio su un unico grafico.** Dove le linee coincidono, il servizio accoppia ancora i due eventi. Dove le distribuzioni superano di molto i rilasci, il team ha cominciato a disaccoppiarli, e la distanza tra le linee è un segno della capacità. Un unico numero combinato nasconde questo e consente a un team di rivendicare una frequenza alta che gli utenti non vedono mai.

### Misurare il lead time di rilascio da un punto di partenza dichiarato fino all'utente

**Scegliere una sola volta l'avvio dell'orologio e mantenerlo.** Partire dal primo commit mostra il percorso completo, e partire dall'integrazione nel ramo principale isola la pipeline di rilascio e le sue approvazioni. Entrambi sono accettabili se dichiarati sul grafico e mai cambiati in silenzio. Si fermi l'orologio al rilascio, non alla distribuzione, altrimenti la metrica smette di misurare ciò che l'utente ha atteso.

### Monitorare la dimensione del lotto accanto alla frequenza

**Abbinare ogni frequenza a una dimensione.** Un team può aumentare il proprio conteggio di distribuzioni tagliando una modifica in fette che non sono utili in modo indipendente, e il conteggio sale mentre il flusso reale resta lo stesso. La mediana e l'85° percentile della dimensione del lotto mostrano se le fette sono reali. I lotti piccoli sono più facili da rivedere, testare e annullare, e questo è il beneficio di cui la frequenza è un indicatore indiretto.

### Trattare le fasi del rollout progressivo come eventi

**Registrare ogni fase di un rollout con un timestamp.** Un rollout che passa dall'1 per cento al 10 per cento a tutti fornisce tre timestamp, e ciascuno è un'occasione per fermarsi. Si catturino la fase, la quota di esposizione e l'esito del controllo di salute che ha consentito la fase successiva. Questo permette di distinguere un rollout messo in pausa per un segnale reale da uno che si è bloccato.

### Tenere un inventario dei flag con un responsabile e una data di scadenza

**Assegnare a ogni flag di rilascio un responsabile, uno scopo e una data di rimozione pianificata alla creazione.** Il servizio di flag o un semplice registro possono contenerli. Si riveda il registro ogni mese e si calcoli il numero di flag obsoleti. Un flag lasciato attivo dopo il rollout completo è codice morto che continua a ramificare. Si tratti la rimozione come parte del done per la modifica.

### Etichettare i flag per tipo

**Separare i flag di rilascio temporanei dai flag operativi permanenti.** I kill switch e i flag di abilitazione sono permanenti per progetto, mentre i flag di rilascio dovrebbero essere rimossi dopo il rollout completo. Mescolare i tipi rende rumoroso il conteggio degli obsoleti e invita i team a eliminare un interruttore di cui qualcuno ha bisogno durante un incidente. Si richieda il tipo al momento della creazione del flag.

### Collegare i rilasci ai record di incidenti e di modifiche

**Registrare l'identificativo del rilascio sull'incidente e sulla modifica.** Un evento di rilascio dovrebbe essere rintracciabile dallo strumento degli incidenti, in modo che la causa di un incidente possa essere collegata alla modifica rilasciata, sia che sia stata distribuita la settimana scorsa o attivata questa mattina. Senza il collegamento, le misure di instabilità attribuiscono i fallimenti alla data di distribuzione e perdono i fallimenti causati da una modifica di flag. Le modifiche dei flag in produzione sono modifiche nel senso ITIL e dovrebbero essere visibili all'abilitazione delle modifiche, anche quando sono preautorizzate come modifiche standard (si veda l'Argomento 4.3 «Metriche di abilitazione delle modifiche»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di contromisura abbinata |
| --- | --- | --- |
| Frequenza di distribuzione | Dividere una modifica in distribuzioni banali; ridistribuire build invariate; contare le distribuzioni verso lo staging; contare le distribuzioni solo di configurazione nella serie principale | Dimensione del lotto di rilascio e quota di distribuzioni con una modifica visibile all'utente; la serie separata della configurazione; tasso di fallimento delle modifiche accanto ad essa |
| Frequenza di rilascio | Rietichettare le distribuzioni come rilasci; contare come rilascio un flag attivato per il personale interno; rilasciare modifiche vuote o cosmetiche per raggiungere un obiettivo; contare ogni fase di un rollout come rilascio separato | Una definizione scritta di rilascio; campione trimestrale di rilasci verificato rispetto alle modifiche visibili all'utente; dimensione del lotto e conteggi delle modifiche rivolte al cliente |
| Lead time di rilascio | Far partire l'orologio più tardi, per esempio all'approvazione anziché all'integrazione; escludere come «bloccate» le modifiche che hanno atteso a lungo; rilasciare per prima una modifica banale per abbassare la mediana; fermare l'orologio alla distribuzione | L'85° percentile e l'anzianità della modifica in attesa più vecchia; un avvio scritto e fisso; una revisione trimestrale del 10 per cento più lento delle modifiche |
| Intervallo tra distribuzione e rilascio | Attivare un flag per un utente simbolico per registrare in anticipo il rilascio; escludere dal campione il codice rimasto a lungo al buio definendolo «non un rilascio»; eliminare il codice al buio per evitare un intervallo lungo | Quota di esposizione al rilascio (una soglia per ciò che conta come rilasciato); numero di modifiche distribuite e rimosse senza rilascio; numero di flag obsoleti |
| Dimensione del lotto di rilascio | Dividere il lavoro in pull request artificiali; unire modifiche non correlate in una per abbassare il numero di rilasci; contare solo la modifica grande di un pacchetto | Dimensione mediana della modifica in righe o file come misura di contesto; revisione di un campione di rilasci per individuare raggruppamenti di modifiche non correlate; frequenza accanto alla dimensione |
| Copertura dei feature flag | Aggiungere flag a modifiche banali per aumentare il tasso; proteggere con flag solo le modifiche sicure e rilasciare senza flag quelle rischiose; creare un flag senza alcun modo pratico di disattivarlo | Risultati dei test di flag disattivato per un campione di flag; il numero di flag obsoleti; cause di incidenti che non avevano un flag |
| Numero di flag obsoleti | Rietichettare come permanenti i flag di rilascio per uscire dal conteggio degli obsoleti; eliminare il record del flag lasciandolo nel codice; prorogare le date di scadenza senza revisione | Una ricerca periodica nel codice rispetto al registro; revisione di ogni cambio di tipo di flag; l'anzianità del flag di rilascio più vecchio |

Una lettura sana mostra le distribuzioni che precedono i rilasci per i servizi che usano i flag, con un intervallo modesto, una dimensione del lotto piccola e stabile e un 85° percentile del lead time non molto sopra la mediana. La copertura dei flag è alta per le modifiche rischiose, e il numero di flag obsoleti è basso o in calo. Una lettura che appare troppo buona, come una frequenza alta insieme a dimensioni dei lotti in crescita o un conteggio di obsoleti pari a zero con un numero crescente di flag permanenti, merita un audit a campione prima di qualsiasi festeggiamento.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Distribuire in continuo e rilasciare tramite flag | Piccolo rischio tecnico per distribuzione; la tempistica del rilascio diventa una scelta di business; spegnimento rapido | Richiede disciplina e strumenti per i flag; aggiunge percorsi di codice che devono essere testati e rimossi |
| Accoppiare distribuzione e rilascio | Semplice da spiegare; un solo evento da contare; nessun debito di flag | Ogni rilascio comporta rischio sia tecnico sia per l'utente, il che incoraggia grandi lotti rilasciati di rado |
| Release train programmato | Prevedibile per il supporto e per i regolatori | Le modifiche attendono il treno successivo; il conteggio riflette il calendario, non la capacità |
| Rollout progressivo per percentuale | Limita l'effetto di un cattivo rilascio; produce evidenze a ogni fase | Richiede buona telemetria e un controllo di salute; versioni miste possono funzionare affiancate per un certo tempo |
| Contare sia le distribuzioni sia i rilasci | Mostra il disaccoppiamento e l'attesa | Richiede che un log di audit dei flag o dei record di rilascio siano uniti alla pipeline |

Un servizio che non può ancora disaccoppiare la distribuzione dal rilascio, per esempio un'applicazione mobile distribuita tramite la revisione di un app store, dovrebbe misurare ciò che può: frequenza di rilascio, lead time di rilascio e dimensione del lotto, riportando il tempo di revisione dello store come attesa separata.

## Domande da discutere con il team

**1. Usiamo le parole «distribuzione» e «rilascio» per lo stesso evento e ciò corrisponde a quello che accade?**
Si chieda a tre persone di descrivere l'ultima modifica andata in produzione e si annotino il momento in cui è arrivato il codice e quello in cui gli utenti hanno potuto usarla per la prima volta. Il facilitatore dovrebbe aiutare il gruppo a concordare una frase per ciascun termine e a decidere quale dei due eventi misuri ogni numero esistente della dashboard.

**2. Qual è il tempo più lungo che una modifica finita ha atteso per il rilascio e perché?**
Si estragga la modifica integrata più vecchia che gli utenti ancora non possono raggiungere. Se ne ripercorra il cammino dall'integrazione a oggi e si scriva ogni attesa lungo il percorso.

**3. Se il nostro conteggio di distribuzioni raddoppiasse, che cosa controlleremmo prima di definirla una buona notizia?**
Si inviti il gruppo a nominare i modi in cui il conteggio potrebbe salire senza che più valore raggiunga gli utenti. Si osservino la dimensione del lotto, la quota di distribuzioni con una modifica visibile all'utente e le cifre di fallimento e di rilavorazione. Il facilitatore dovrebbe annotare quali di questi controlli esistano già nella dashboard e quali debbano essere aggiunti prima che qualcuno fissi un obiettivo.

**4. Quali dei nostri flag avremmo paura di eliminare e che cosa ci dice questo?**
Si scorra il registro dei flag e si scelgano i tre più vecchi. Ci si chieda chi sia il responsabile di ciascuno, che cosa protegga e che cosa accadrebbe se venisse rimosso. La paura di eliminare di solito significa un test mancante, un responsabile mancante o un record dello scopo mancante. Si concordi una data di rimozione per almeno uno e il controllo che renderebbe sicura la rimozione.

**5. Chi decide quando una modifica viene rilasciata e dispone delle informazioni di cui ha bisogno?**
Dove il rilascio è una scelta di business, la persona che la compie ha bisogno di vedere lo stato del rollout, i segnali di salute e la prontezza del supporto. Ci si chieda dove risiedano oggi questi fatti e con quale rapidità chi decide possa annullare un rilascio.

**6. Quale rilascio dell'ultimo trimestre è andato peggio e quale misura ci avrebbe avvertito?**
Si scelga un rilascio che ha causato problemi e se ne legga insieme la cronologia. Ci si chieda se il lotto fosse grande, se l'intervallo fosse lungo, se il rollout avesse fasi e se un flag avrebbe potuto limitare il danno. Si scelga una misura da aggiungere o una soglia da rendere più stretta come conseguenza.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna usano queste misure per vedere se la loro pipeline e i loro flag danno davvero controllo sull'esposizione. Le viste più utili sono l'intervallo, la dimensione del lotto e l'anzianità della modifica in attesa più vecchia, perché ciascuna indica qualcosa che il team può cambiare.

### Team di servizio e operations

I team operativi e di supporto si interessano a che cosa cambia in produzione e quando. Gli eventi di rilascio e le modifiche dei flag devono essere visibili per loro, idealmente con un identificativo di rilascio su ogni incidente. I rollout a fasi e lo spegnimento rapido riducono il numero di incidenti che richiedono un ripristino completo, e le misure aiutano i team operativi a chiedere i controlli che rendono il loro lavoro più sereno.

### Leadership e governance

I dirigenti dovrebbero chiedere tendenze e dispersione per ciascun servizio e la risposta a una semplice domanda: quanto tempo impiega una modifica finita per raggiungere gli utenti e con quale sicurezza. Un obiettivo di frequenza di distribuzione per tutti i team invita a dividere e a rietichettare, perciò si preferiscano obiettivi sugli esiti come le distribuzioni del lead time e la rimozione di attese note. La governance può ridurre il carico delle approvazioni dei rilasci preautorizzando le modifiche a basso rischio protette da flag, purché la traccia di audit dei flag sia completa (si veda l'Argomento 4.3 «Metriche di abilitazione delle modifiche»).

### Clienti e utenti

I clienti vedono i rilasci, non le distribuzioni. Si interessano al fatto che le correzioni arrivino presto, che il nuovo comportamento non li sorprenda e che una cattiva modifica possa essere annullata rapidamente. Un team che separa i due eventi può dare ai clienti accesso anticipato a una funzionalità, può annunciare una data che riesce a mantenere e può annullare una funzionalità senza perdere il resto. Si abbinino queste misure a quelle rivolte al cliente (si vedano l'Argomento 5.3 «Metriche di disponibilità» e l'Argomento 6.1 «Metriche di soddisfazione del cliente»).

## In pratica: un esempio di ITIL agile

Un rivenditore online regionale gestisce un servizio di ricerca prodotti di proprietà di un team di prodotto, supportato da un team di piattaforma e dal service desk. Il servizio viene distribuito in produzione tramite una pipeline e dispone di un servizio di flag introdotto sei mesi fa. Tutti i numeri seguenti sono illustrativi.

Nell'ultimo trimestre il team ha effettuato 52 distribuzioni in produzione, circa quattro alla settimana. La frequenza di rilascio, contata come i momenti in cui una modifica è diventata raggiungibile da tutti gli utenti previsti, è stata di 11 nello stesso trimestre, circa uno alla settimana. Il lead time di rilascio mediano, dall'integrazione al rilascio, è stato di 9 giorni, con un 85° percentile di 21 giorni. L'intervallo mediano tra distribuzione e rilascio è stato di 6 giorni. La dimensione mediana del lotto di rilascio è stata di 3 modifiche e l'85° percentile di 14. La copertura dei flag per le modifiche visibili all'utente è stata del 58 per cento e 17 flag di rilascio erano oltre i 30 giorni dal rollout completo.

Il rischio di manipolazione è già visibile. Alcune distribuzioni erano solo di configurazione e la pipeline contava ciascuna come distribuzione, perciò la dashboard ora mostra una serie separata della configurazione e la revisione mensile campiona 10 distribuzioni per verificare una modifica visibile all'utente. Un responsabile regionale vede il conteggio delle distribuzioni e chiede al team di aumentarlo per eguagliare la cifra di un altro team. Il responsabile del team resiste all'obiettivo e porta invece alla revisione mensile l'insieme completo dei numeri. La revisione trova che l'intervallo è lungo perché i rilasci attendono un briefing settimanale di marketing e supporto, che quattro dei 17 flag obsoleti proteggono percorsi di codice che nessuno ha testato e che l'85° percentile della dimensione del lotto proviene da pochi rilasci che raggruppavano modifiche non correlate prima di un blocco per le festività.

La decisione, registrata nel registro delle decisioni, ha quattro parti. Supporto e marketing parteciperanno a un briefing più breve, due volte alla settimana, in modo che la decisione di rilascio non attenda più lo slot settimanale. Ogni flag di rilascio riceve un responsabile e una data di rimozione, e i quattro flag obsoleti non testati vengono rimossi nelle due settimane successive. I rilasci che raggruppano modifiche non correlate richiedono una motivazione dichiarata nel record del rilascio. E il team rifiuta l'obiettivo comune sulle distribuzioni, offrendo invece una vista condivisa della distribuzione del lead time di rilascio e dell'igiene dei flag di ciascun servizio. Il responsabile delle modifiche accetta di trattare come modifiche standard le modifiche protette da flag che superano i controlli della pipeline, con una revisione il trimestre successivo. Nel trimestre seguente (illustrativo), il lead time di rilascio mediano scende a 5 giorni, il numero di flag obsoleti scende a 6 e il tasso di fallimento delle modifiche resta stabile, quindi l'esperimento continua.

## Lente di settore

**Startup.** Una startup ha spesso un unico servizio e una libreria di flag nel codice, quindi distribuzione e rilascio possono essere separati a basso costo. Si tenga un semplice registro dei flag con date di scadenza e si attenda di avere un volume sufficiente prima di fidarsi dei percentili.

**Piccola impresa.** Una piccola impresa può usare software confezionato o acquistato in cui il rilascio è controllato dal fornitore. Le misure utili sono il tempo tra il rilascio del fornitore e l'adozione da parte dell'impresa, e il lotto di modifiche che arrivano insieme in una versione maggiore. Si registrino le date di rilascio del fornitore e le proprie date di distribuzione in modo che l'attesa intermedia sia visibile.

**Grande impresa.** Una grande impresa affronta molti servizi con stili di rilascio diversi, un processo centrale delle modifiche e ambienti condivisi. Il lavoro principale consiste nel concordare le definizioni di distribuzione e di rilascio tra team e fornitori e nel mantenere un'aggregazione che rispetti le differenze. Si usino dispersione e tendenze per la governance e si tratti la piattaforma dei flag come un servizio condiviso con un responsabile.

**Governo e settore pubblico.** I rilasci sono spesso legati a date fisse, a norme di legge, a cicli di approvvigionamento o a barriere di garanzia, perciò la frequenza di rilascio può essere bassa per buone ragioni. La frequenza di distribuzione e l'intervallo tra distribuzione e rilascio possono comunque mostrare quanta parte del rischio sia stata assunta presto e quanta attenda la data. Si riporti l'attesa per le barriere esterne separatamente dal tempo di pipeline del team.

## Business case: motivazioni, ROI e TCO

La motivazione di queste misure è ridurre il rischio e il ritardo tra il completamento di una modifica e la consegna del suo valore. Grandi lotti rilasciati di rado portano più modifica per evento, quindi un fallimento è più difficile da diagnosticare e da annullare. Separare la distribuzione dal rilascio offre al team un modo di assumere il rischio tecnico presto e in piccole quantità, e di assumere il rischio per l'utente in modo deliberato. Le misure mostrano se la separazione è reale e dove le modifiche stanno attendendo.

I costi sono moderati. Raccogliere gli eventi di distribuzione e di rilascio richiede che il log della pipeline e il log di audit dei flag siano uniti al controllo di versione e all'issue tracker, il che è un'integrazione una tantum seguita da manutenzione occasionale (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»). La pratica dei flag ha essa stessa costi correnti: la piattaforma o la libreria, il registro, il test di entrambi i percorsi di una modifica protetta da flag e la pulizia dei flag scaduti. Il principale costo nascosto è il debito dei flag, che il numero di flag obsoleti mantiene visibile.

Il ritorno segue uno schema che la maggior parte dei team può osservare nei propri dati. Un lead time di rilascio più breve significa un ciclo di feedback più rapido sul fatto che una modifica aiuti gli utenti. Lotti più piccoli significano diagnosi più facile e annullamento più facile. Un intervallo più breve tra distribuzione e rilascio significa meno tempo in cui il lavoro finito resta non realizzato. Non si inventi una cifra per il valore. Si usino gli esempi del team stesso di modifiche rimaste al buio per settimane e la tendenza delle proprie misure.

## Anti-pattern e insidie

- **Fissare un obiettivo di frequenza di distribuzione per ogni team.** Invita a dividere e a rietichettare. Si fissino obiettivi sugli esiti, come una distribuzione del lead time più stretta, e si lasci che la frequenza segua.
- **Trattare un release train come prova di capacità.** Un calendario fisso dà un conteggio regolare e nasconde l'anzianità del lavoro in attesa. Si monitori l'anzianità della modifica integrata più vecchia che gli utenti non possono raggiungere.
- **Contare le modifiche di configurazione come distribuzioni nella serie principale.** Gonfia il numero. Si mantenga una serie separata e la si mostri accanto a quella principale.
- **Non rimuovere mai i flag.** Il codice accumula rami morti e combinazioni non testate. Si assegnino a ogni flag di rilascio un responsabile e una data di rimozione e si tratti la rimozione come parte del done.
- **Cambiare i flag in produzione senza un record.** Una modifica di flag è una modifica al comportamento della produzione. La si invii al log di audit e la si renda visibile all'abilitazione delle modifiche.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizioni e orologi | «Distribuzione» e «rilascio» sono usati in modo intercambiabile; ciascuno conta in modo diverso | Pochi team scrivono le proprie definizioni | Un'unica definizione scritta di distribuzione e rilascio, con orologi ed esclusioni, nel registro delle metriche | Cambiamenti di definizione registrati e segnalati sui grafici; campioni verificati ogni trimestre | Definizioni riviste congiuntamente con fornitori e governance quando smettono di informare le decisioni |
| Separazione tra distribuzione e rilascio | Ogni distribuzione è un rilascio | Alcuni team usano flag o rollout a fasi per le modifiche rischiose | Flag e rollout a fasi sono un'opzione standard, con gli eventi di rilascio registrati | Intervallo, dimensione del lotto e fasi del rollout analizzati nel tempo e rivisti | La tempistica dei rilasci è coordinata tra team e fornitori per i servizi correlati |
| Acquisizione dei dati | Conteggi assemblati a mano da ticket e chat | Dati della pipeline per alcuni servizi; rilasci registrati a mano | Distribuzioni, rilasci e modifiche dei flag acquisiti automaticamente per la maggior parte dei servizi | Qualità dei dati (tasso di collegamento, audit di campioni) misurata e analizzata nel tempo | Eventi condivisi tra team e fornitori tramite interfacce concordate |
| Igiene dei flag | Nessun inventario | Elenco informale in alcuni team | Registro con responsabile, tipo e data di scadenza per ogni flag di rilascio | Numero di flag obsoleti analizzato nel tempo; la rimozione è parte del done ed è verificata | Piattaforma di flag gestita come servizio condiviso con promemoria automatici di scadenza |
| Uso dei numeri | Riportati verso l'alto come un singolo conteggio | I team guardano di tanto in tanto i propri grafici | Rivisti mensilmente dal team responsabile accanto alle cifre di fallimento e di rilavorazione | Le tendenze alimentano un miglioramento finanziato con una contromisura | Dispersione e tendenze informano gli investimenti nella piattaforma e la politica delle modifiche in tutta l'organizzazione |

## Checklist

- [ ] «Distribuzione» e «rilascio» sono definiti per iscritto, con gli eventi dell'orologio e le esclusioni per ciascuno.
- [ ] Le distribuzioni in produzione sono acquisite automaticamente dalla pipeline, con gli ambienti di test esclusi.
- [ ] Gli eventi di rilascio sono acquisiti dal log di audit dei flag, dalle fasi del rollout o dai record dei rilasci.
- [ ] Il lead time di rilascio usa un avvio dell'orologio dichiarato e riporta la mediana e l'85° percentile.
- [ ] L'intervallo tra distribuzione e rilascio e la dimensione del lotto di rilascio sono riportati accanto alla frequenza.
- [ ] Le distribuzioni solo di configurazione compaiono in una serie separata.
- [ ] Ogni flag di rilascio ha un responsabile, un tipo e una data di scadenza in un registro.
- [ ] I flag obsoleti sono rivisti mensilmente e la loro rimozione è parte del done.
- [ ] Gli identificativi dei rilasci compaiono nei record di incidenti e di modifiche.
- [ ] Un campione di distribuzioni e rilasci viene sottoposto ad audit ogni trimestre rispetto alle definizioni.
- [ ] Un esperimento di miglioramento, legato all'attesa più lunga, è in corso con una data di revisione.

## Prompt IA

**Redigere le definizioni di distribuzione e di rilascio per un servizio.**

```text
Sto definendo le metriche di rilascio e di distribuzione per [nome del
servizio]. I nostri strumenti sono [host del controllo di versione, sistema
CI/CD, servizio di flag, issue tracker, strumento ITSM]. Il nostro stile di
rilascio è [continuo, release train settimanale, mensile, con revisione dello
store o altro]. Per frequenza di distribuzione, frequenza di rilascio, lead time
di rilascio, intervallo tra distribuzione e rilascio, dimensione del lotto di
rilascio, copertura dei feature flag e numero di flag obsoleti, rediga una
definizione che indichi dove l'orologio parte e si ferma, che cosa è contato ed
escluso, la fonte dei dati e un'ambiguità da risolvere. Non inventi valori di
benchmark né affermi che la nostra pratica corrisponda a una qualsiasi fascia di
prestazione pubblicata. Elenchi le sue ipotesi e le domande a cui dovrei
rispondere per completare le definizioni.
```

**Verificare un insieme di metriche di rilascio per rischi di manipolazione.**

```text
Ecco come calcoliamo e riportiamo le nostre metriche di rilascio e di
distribuzione: [descrizione di ciascuna metrica, della sua fonte dei dati e di
come viene riportata]. Il pubblico è [team, dirigenza o organo di governance] e
gli obiettivi, se presenti, sono [obiettivi o nessuno]. Per ogni metrica,
elenchi i modi plausibili in cui il numero potrebbe essere gonfiato, nascosto o
distorto senza un reale miglioramento e suggerisca una metrica o una pratica di
contromisura abbinata che lo coglierebbe. Non inventi statistiche. Elenchi le
sue ipotesi e le informazioni di cui avrebbe bisogno per essere più precisa.
```

**Analizzare un'esportazione di distribuzioni, rilasci e flag.**

```text
Incollerò una piccola esportazione con questi campi: [elencare i campi, per
esempio id della distribuzione, ora della distribuzione, esito, id delle
modifiche, nome del flag, ora di attivazione del flag, quota di esposizione, ora
del rilascio]. Copre [numero] distribuzioni e [numero] flag per [nome del
servizio] tra [data di inizio] e [data di fine]. Calcoli la mediana e l'85°
percentile del lead time di rilascio e dell'intervallo tra distribuzione e
rilascio, la distribuzione della dimensione dei lotti e l'elenco dei flag oltre
[limite di età] giorni dal rollout completo, mostrando i conteggi dietro
ciascuno. Segnali i record con collegamenti mancanti o timestamp sospetti. Non
estrapoli oltre i dati né confronti il risultato con benchmark esterni. Elenchi
le sue ipotesi e i problemi di qualità dei dati che limitano le conclusioni.
```

**Pianificare un esperimento di pulizia dei flag e di riduzione dell'attesa del rilascio.**

```text
La nostra attesa di rilascio più lunga è [descrizione dell'attesa, con
intervallo di date e conteggi], e il nostro registro dei flag contiene [numero]
flag di rilascio, dei quali [numero] oltre la data di scadenza. I vincoli sono
[vincoli, per esempio rilasci regolamentati, revisione dello store, ambiente di
test condiviso]. Proponga tre piccoli esperimenti da quattro a sei settimane,
ciascuno con un'ipotesi, un modo per osservare l'effetto, una metrica di
contromisura e un rischio. Non inventi cifre di miglioramento attese. Elenchi le
sue ipotesi e ciò che dovremmo verificare prima di iniziare.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare gli argomenti correlati su modifiche, rilasci e incidenti e la contromisura che dovrebbe affiancare ciascuna metrica di rilascio.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una versione rivista di questo argomento mantenga coerenti i propri orologi, i vettori di manipolazione e i riferimenti incrociati.

## Punti chiave

- Una distribuzione mette una versione in un ambiente e un rilascio rende una modifica raggiungibile dagli utenti. Si misurino i due separatamente dove possibile.
- Il lead time di rilascio dovrebbe terminare al rilascio, con un avvio dichiarato, ed essere riportato come mediana e 85° percentile.
- L'intervallo tra distribuzione e rilascio e la dimensione del lotto mostrano se il disaccoppiamento è reale e proteggono la frequenza dalla divisione e dalla rietichettatura.
- I feature flag rendono possibile la separazione e comportano un costo, quindi si monitorino copertura e flag obsoleti con responsabili e date di scadenza.
- Si conti secondo regole scritte, si colleghino i rilasci a incidenti e modifiche e si confronti un servizio con la propria storia anziché con altri team.

## Riferimenti e letture di approfondimento

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
3. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
4. Hodgson, P., "Feature Toggles (aka Feature Flags)," martinfowler.com, 2017, https://martinfowler.com/articles/feature-toggles.html
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
7. Wikipedia, [Release management](https://en.wikipedia.org/wiki/Release_management).
8. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
9. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
10. Wikipedia, [Blue-green deployment](https://en.wikipedia.org/wiki/Blue-green_deployment).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
