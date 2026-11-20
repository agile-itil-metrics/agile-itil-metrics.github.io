# Metriche di capacità e prestazioni

**Misurare quanto è pieno un servizio, quanto sono lente le sue richieste più lente e quanto margine resta prima che gli utenti se ne accorgano, quindi prevedere la domanda con intervalli, in modo che la capacità arrivi prima del bisogno e non dopo il reclamo.**

## Panoramica e motivazione

La disponibilità dice se un servizio risponde. Capacità e prestazioni dicono quanto bene risponde e per quanto tempo continuerà a farlo al crescere della domanda. Una pagina di checkout che risponde in otto secondi è «attiva» secondo la maggior parte delle definizioni di disponibilità e «guasta» secondo la definizione di qualsiasi cliente. Un database al 95 percento del proprio spazio di archiviazione è sano oggi e un'interruzione il mese prossimo. Questo argomento tratta le misure che colmano questi divari.

La [pianificazione della capacità](https://en.wikipedia.org/wiki/Capacity_planning) è la pratica di determinare le risorse di cui un servizio ha bisogno per soddisfare una domanda mutevole. In ITIL 4 rientra nella pratica di gestione di capacità e prestazioni, che mira a garantire che i servizi raggiungano le prestazioni concordate e attese e soddisfino la domanda attuale e futura in modo economicamente efficiente. La pratica la descrive su tre livelli: il business (che cosa l'organizzazione chiederà ai propri servizi), il servizio (come un servizio si comporta sotto carico) e il componente (come si comporta ogni server, database, collegamento di rete o coda). Le misure di questo argomento operano per lo più a livello di servizio e di componente, e richiedono input dal livello di business per prevedere qualsiasi cosa.

La [site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) tratta latenza, traffico, errori e saturazione come i quattro segnali da tenere d'occhio in qualsiasi sistema rivolto all'utente, e lega gli obiettivi di prestazione agli obiettivi di livello di servizio (si veda l'Argomento 5.2 «SLI, SLO e budget di errore»). I team agili incontrano la capacità come una questione di consegna: il prossimo rilascio può sostenere il carico atteso, e chi è responsabile della risposta? Trattare le prestazioni come un criterio di accettazione, verificato nella pipeline, sposta la conversazione più in anticipo.

In questo argomento ricorrono diversi termini. L'**utilizzo** è la quota della capacità di una risorsa in uso in un intervallo, per esempio la quota di tempo di processore occupato. La **saturazione** è la quantità di lavoro in attesa perché una risorsa è completamente usata, per esempio la lunghezza di una coda di esecuzione o di un arretrato di richieste. L'utilizzo dice quanto è occupata una risorsa. La saturazione dice se il lavoro è in coda per ottenerla, e le code sono ciò che gli utenti percepiscono. La **[latenza](https://en.wikipedia.org/wiki/Latency_(engineering))** è il tempo tra una richiesta e la sua risposta. Il **[throughput](https://en.wikipedia.org/wiki/Throughput)** è la velocità con cui un servizio completa il lavoro, per esempio richieste al secondo. Il **margine di capacità (headroom)** è il divario tra il carico di picco attuale e il carico a cui il servizio smette di rispettare i propri obiettivi. La **domanda** è il lavoro che utenti e business chiedono al servizio, che non coincide con il lavoro che esso completa: un servizio sovraccarico completa meno di quanto richiesto.

Una proprietà delle file d'attesa spiega perché queste misure si comportano così. La [teoria delle code](https://en.wikipedia.org/wiki/Queueing_theory) mostra che, per un servizio con arrivi casuali, il tempo di attesa cresce lentamente finché l'utilizzo è moderato e poi sale ripidamente quando l'utilizzo si avvicina al pieno impiego. La [legge di Little](https://en.wikipedia.org/wiki/Little%27s_law) mette in relazione il numero medio di richieste in un sistema con la frequenza di arrivo e il tempo medio che ciascuna vi trascorre. Una risorsa con utilizzo medio elevato è vicina a un precipizio. La forma esatta della curva dipende dal servizio, quindi la si trova mettendo alla prova il proprio sistema con il [test di carico](https://en.wikipedia.org/wiki/Load_testing) anziché prendendo in prestito una soglia da un articolo generico.

La latenza richiede particolare attenzione perché la media nasconde l'esperienza che conta. Un [percentile](https://en.wikipedia.org/wiki/Percentile) indica il valore al di sotto del quale ricade una data quota di osservazioni: il 95º percentile (p95) è la latenza che il 95 percento delle richieste batte. La [latenza di coda](https://en.wikipedia.org/wiki/Tail_latency) tende a dominare nei sistemi in cui una singola azione dell'utente si diffonde in molte chiamate interne. Riportare i percentili anziché la sola media (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio» e l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti», che sostiene la stessa tesi per il tempo di risoluzione).

Infine, la capacità dipende dalla [previsione](https://en.wikipedia.org/wiki/Forecasting) della domanda, e la domanda ha schemi: cicli giornalieri, cicli settimanali e [stagionalità](https://en.wikipedia.org/wiki/Seasonality) legata al calendario, alle campagne e ai lanci di prodotto. L'[autoscaling](https://en.wikipedia.org/wiki/Autoscaling) cambia la percezione del problema, poiché le piattaforme cloud possono aggiungere risorse in pochi minuti, ma non elimina l'argomento. L'autoscaling ha limiti, un ritardo, un costo e dipendenze che non scalano, come un database o un'interfaccia di terze parti. Il lato dei costi appartiene al FinOps (si veda l'Argomento 7.6 «Metriche di FinOps e costi del cloud»).

Gli argomenti vicini trattano l'aritmetica della disponibilità (si veda l'Argomento 5.3 «Metriche di disponibilità»), la progettazione degli avvisi (si veda l'Argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi») e il carico della rotazione (si veda l'Argomento 5.7 «Metriche di toil e reperibilità»). Qui il soggetto sono le risorse proprie del servizio e i suoi tempi di risposta.

## Principi chiave

- **Misurare la saturazione oltre all'utilizzo.** L'utilizzo mostra quanto è occupata una risorsa, e la saturazione mostra se il lavoro è in attesa. Gli utenti vivono l'attesa.
- **Riportare la latenza come distribuzione.** Usare i percentili per ogni operazione visibile all'utente e mantenere visibile la coda lenta. Una media di una distribuzione asimmetrica non descrive quasi nessuno.
- **Legare gli obiettivi all'esperienza dell'utente.** Una soglia ha significato quando risale a qualcosa a cui tengono un utente o il business, non a ciò che uno strumento si limita a rappresentare in un grafico.
- **Pianificare con intervalli e riesaminarli.** Una previsione è un intervallo con ipotesi dichiarate. Confrontarla con ciò che è accaduto e imparare dall'errore.
- **Conoscere i propri limiti attraverso i test.** La capacità è un'ipotesi finché un test di carico realistico non la conferma. Ripetere il test dopo le modifiche rilevanti.
- **Descrivere sistemi, mai persone.** Queste misure appartengono a servizi, componenti e team. Non sono mai un tabellone di punteggio per le persone.
- **Pesare il costo rispetto al rischio.** La capacità di riserva costa denaro, e la capacità mancante costa clienti. Rendere visibile il compromesso in modo che sia scelto e non subìto.

## Definizioni delle metriche

La tabella elenca sette misure. Gli orologi e i confini sono dichiarati in ciascuna formula. Le misure basate sui percentili usano una finestra fissa, dichiarata nel registro, e sono calcolate da osservazioni grezze o da istogrammi, mai come media di medie.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Utilizzo delle risorse | Quota della capacità di una risorsa in uso in un intervallo, riportata come percentile elevato della serie di intervalli | capacità occupata / capacità totale, per intervalli da 1 a 5 minuti; riportare la mediana e il 95º percentile nella finestra di riesame; le finestre di manutenzione con la risorsa svuotata sono escluse | percentuale | Monitoraggio dell'infrastruttura e metriche della piattaforma cloud | Gestione di capacità e prestazioni; monitoraggio e gestione degli eventi | Criteri di accettazione operativa nella definizione di completato; segnali di risorsa SRE | Settimanale |
| Saturazione | Quantità di lavoro in attesa di una risorsa completamente usata | lunghezza della coda, coda di esecuzione, richieste in sospeso o richieste limitate, per intervallo; riportare il 95º percentile e la quota di intervalli con qualsiasi attesa; gli intervalli senza domanda sono esclusi | conteggio, o percentuale di intervalli | Telemetria applicativa e infrastrutturale | Gestione di capacità e prestazioni; monitoraggio e gestione degli eventi | Segnale di saturazione SRE; limite di lavoro in corso su una coda di servizio | Settimanale |
| Percentile di latenza | Tempo impiegato per rispondere a una richiesta per un'operazione visibile all'utente, riportato alla mediana, al p95 e al p99 | tempo di risposta dalla richiesta ricevuta al perimetro all'ultimo byte inviato, per richiesta riuscita; le richieste fallite sono riportate come errori, non come risposte veloci; misurare su una finestra mobile | millisecondi | Log del bilanciatore di carico o del gateway, tracing, real user monitoring | Gestione dei livelli di servizio; gestione di capacità e prestazioni | Indicatore di latenza SRE e obiettivo di livello di servizio | Continua, riesaminata ogni settimana |
| Margine di capacità (headroom) | Carico residuo che un servizio può sostenere prima di violare i propri obiettivi | (carico di rottura testato o modellato - carico di picco attuale) / carico di picco attuale; il picco è l'ora più intensa nella finestra; il carico di rottura è il carico a cui l'obiettivo di latenza viene violato per la prima volta in un test, non il massimo hardware | percentuale, oppure giorni alla crescita attuale | Risultati dei test di carico e telemetria del traffico | Gestione di capacità e prestazioni; gestione dei livelli di servizio | Requisiti non funzionali e test di prestazione nella pipeline | Mensile, e prima dei lanci importanti |
| Errore di previsione | Differenza tra la domanda prevista e la domanda effettiva in un periodo | assoluto (picco previsto - picco effettivo) / picco effettivo, per un orizzonte dichiarato; la previsione è congelata all'inizio dell'orizzonte e non rivista in seguito; gli eventi isolati non previsti sono elencati, non rimossi | percentuale | Registro delle previsioni e telemetria del traffico | Gestione di capacità e prestazioni; pianificazione legata alla domanda nella gestione finanziaria dei servizi | Previsione di rilasci e roadmap; previsione della domanda SRE | Trimestrale |
| Lead time della capacità | Tempo necessario per mettere in servizio nuova capacità una volta accettato il bisogno | l'orologio parte quando la richiesta di capacità è approvata e si ferma quando la capacità sostiene traffico di produzione; riportare la mediana e l'85º percentile; le richieste annullate sono escluse | giorni | Record delle richieste nello strumento ITSM, record delle modifiche, log di provisioning | Gestione di capacità e prestazioni; gestione delle richieste di servizio; abilitazione delle modifiche | Lead time di un elemento del backlog della piattaforma (si veda l'Argomento 2.2 «Lead time, cycle time ed efficienza del flusso») | Trimestrale |
| Copertura dei test di prestazione | Quota di servizi critici con un test di carico recente e realistico | servizi critici con un test di carico superato di età inferiore a un limite dichiarato, su un ambiente e un carico di lavoro rappresentativi / servizi critici nel registro; il limite di età è scritto | percentuale | Archivio dei risultati dei test e registro dei servizi | Gestione di capacità e prestazioni; gestione dei rilasci | Test non funzionali nella pipeline di consegna continua | Trimestrale |

Insieme queste misure rispondono a quattro domande: quanto è pieno, quanto è lento, quanto margine resta e con quale rapidità possiamo reagire quando la risposta cambia.

## Raccomandazioni

### Partire dall'utente, poi dalla risorsa

**1. Scegliere le poche operazioni che stanno a cuore agli utenti e misurare quelle.** Un servizio ha centinaia di endpoint e una manciata di percorsi che contano, come accedere, cercare, pagare e scaricare un estratto. Concordarli con i responsabili di prodotto e i clienti, e fissare un'aspettativa di latenza per ciascuno. Questi si collegano naturalmente agli indicatori di livello di servizio (si veda l'Argomento 5.2 «SLI, SLO e budget di errore»).

**2. Abbinare ogni grafico di risorsa a un grafico di saturazione.** Mostrare il solo uso del processore invita alla falsa tranquillità del «ha raggiunto solo il 70 percento». Aggiungere accanto la coda, le richieste in attesa o il numero di limitazioni. Quando la saturazione compare prima che l'utilizzo appaia allarmante, si è trovato il vero vincolo, e quel vincolo spesso non è la risorsa che si stava osservando, come un pool di connessioni, un limite di thread o un limite di frequenza su un'interfaccia partner.

**3. Preferire la coda occupata alla media tranquilla.** Le medie su un giorno mescolano il cuore della notte con il picco di mezzogiorno. Guardare il periodo più intenso e registrare la data e la causa degli intervalli peggiori. La domanda di pianificazione è come si comporta il servizio nella peggiore ora attesa.

### Riportare la latenza con onestà

**4. Pubblicare i percentili per operazione e indicare la finestra.** Indicare la mediana, il p95 e il p99 per ogni operazione importante su una finestra mobile, e dire quali richieste sono incluse. Non mediare mai i percentili tra server o tra operazioni, perché il risultato non corrisponde all'esperienza di alcun utente reale; combinare invece gli istogrammi o le osservazioni grezze. Se il campione è piccolo, dirlo, poiché un p99 calcolato su poche centinaia di richieste è un numero rumoroso (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

**5. Misurare dove si trova l'utente, oltre che dove si trova il server.** I tempi lato server escludono la rete, il browser e il dispositivo. Aggiungere real user monitoring o controlli sintetici per poter distinguere un back end lento da un ultimo miglio lento.

**6. Contare errori e timeout insieme alla latenza, non al suo posto.** Un servizio che fallisce rapidamente appare veloce in un grafico di latenza, e un servizio che va in timeout appare lento per la ragione sbagliata. Riportare il tasso di errore insieme al percentile di latenza, così che un fallimento rapido non possa abbellire il risultato.

### Trovare i limiti, poi lasciare margine

**7. Provare apposta il punto di rottura.** Eseguire test di carico che riproducono un mix realistico di operazioni, far salire il carico e annotare dove l'obiettivo di latenza viene violato per la prima volta e quale risorsa si satura per prima. Testare su un ambiente che somigli alla produzione negli aspetti che contano, e scrivere in che cosa non le somiglia. Un test fallito in un luogo sicuro è l'incidente più economico che si avrà (si veda l'Argomento 4.5 «Metriche di rilascio e distribuzione», per inserire verifiche nella pipeline).

**8. Fissare il margine come politica e riesaminarlo come compromesso.** Decidere quanto margine un servizio mantiene rispetto al picco atteso, e perché. I servizi critici rivolti al cliente ne giustificano di più, i servizi batch interni di meno. La cifra è una scelta di business su costo e rischio, quindi registrare il ragionamento e rivederlo quando cambiano il costo di un'interruzione o il prezzo della capacità. Non copiare un numero da un'altra organizzazione.

### Prevedere la domanda con chi la conosce

**9. Chiedere al business che cosa sta arrivando e scrivere la previsione.** Campagne di marketing, nuovi clienti, scadenze normative ed eventi stagionali cambiano la domanda molto prima che il traffico lo mostri. Tenere un breve registro delle previsioni con la data, le ipotesi, l'intervallo, il responsabile e la fonte di ciascun input. Una previsione espressa come intervallo, con uno scenario basso, uno atteso e uno alto, è più onesta di un singolo numero e più utile per decidere quanto acquistare.

**10. Valutare la previsione e usare l'errore per migliorarla.** Dopo ogni periodo, confrontare la previsione congelata con ciò che è accaduto, usando l'errore di previsione, ed elencare le cause degli scostamenti ampi. Cause comuni sono una campagna non annunciata, un cambiamento nel comportamento degli utenti e una dipendenza che si è mossa. L'obiettivo non è un errore pari a zero, che non è raggiungibile, ma imparare quali input sono affidabili e allargare l'intervallo dove non lo sono.

### Rendere facile aggiungere capacità

**11. Accorciare il lead time della capacità prima di inseguire l'accuratezza.** Se la nuova capacità richiede settimane per arrivare, occorre prevedere con largo anticipo e tenere più riserva. Se richiede minuti, si può restare più vicini al bisogno. Osservare i passaggi tra «approvata» e «sostiene traffico», come approvvigionamento, approvazione, provisioning, configurazione e collaudo, ed eliminare per prime le attese più lunghe (si veda l'Argomento 4.3 «Metriche di abilitazione delle modifiche»). In termini ITIL questa è una scelta di strategia di capacità: anticipare la domanda, eguagliarla o seguirla in ritardo; sceglierla consapevolmente, servizio per servizio.

**12. Trattare l'autoscaling come un sistema da misurare.** Registrare con quale frequenza scatta lo scaling, quanto tempo impiega la nuova capacità a diventare utile, con quale frequenza raggiunge il massimo configurato e quanto costa. Un autoscaler bloccato al proprio limite è un piano di capacità già fallito. Esaminare questi dati insieme alla vista dei costi, così che prestazioni e spesa siano discusse insieme (si veda l'Argomento 7.5 «Costo del servizio ed economia unitaria»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Utilizzo delle risorse | Mediare su intervalli lunghi per nascondere i picchi; contare come «usata» la capacità riservata inattiva; riportare solo le risorse più tranquille | 95º percentile dell'ora di punta accanto alla media; misura di saturazione; elenco delle risorse incluse riesaminato rispetto alla mappa dei servizi |
| Saturazione | Alzare i limiti delle code in modo che nulla venga riportato come rifiutato o limitato; spostare l'attesa in un'altra coda non misurata | Percentile di latenza e tasso di errore per la stessa operazione; tempo di coda end-to-end, non di una sola fase; riesame di tutte le code nel percorso |
| Percentile di latenza | Riportare solo la media o la mediana; escludere dal campione le richieste lente o fallite; misurare da una posizione interna veloce; escludere gli «outlier» | p95 e p99 sempre mostrati; tasso di errori e timeout mostrato accanto alla latenza; real user monitoring confrontato con i tempi lato server; dimensione del campione grezzo mostrata |
| Margine di capacità (headroom) | Scegliere un carico di test blando; testare un ambiente più grande della produzione; definire il punto di rottura come massimo hardware | Carico di test riesaminato rispetto alla forma del traffico di produzione; elenco scritto delle differenze tra test e produzione; margine ritestato dopo le modifiche rilevanti |
| Errore di previsione | Rivedere la previsione a posteriori; fissare intervalli molto ampi così che ogni esito sia «nell'intervallo»; rimuovere i mesi con sorprese come «eventi non previsti» | Previsione congelata e datata nel registro; ampiezza dell'intervallo riportata con l'errore; ogni evento escluso elencato e riesaminato |
| Lead time della capacità | Far partire l'orologio più tardi ritardando i record di approvazione; chiudere le richieste quando l'ordine è emesso anziché quando la capacità sostiene traffico; dividere le richieste | Orologio definito dall'approvazione al traffico sostenuto; campione di richieste chiuse confrontato con i log di provisioning; numero di richieste riaperte |
| Copertura dei test di prestazione | Eseguire un test banale per rivendicare la copertura; ridurre l'elenco dei servizi critici; tenere a registro un vecchio test superato | Età del test e realismo del carico registrati; elenco dei servizi critici riesaminato rispetto al catalogo dei servizi e allo storico degli incidenti; test falliti riportati oltre a quelli superati |

Una lettura sana mostra un utilizzo con cicli giornalieri visibili e margine, una saturazione che compare di rado e brevemente, percentili di latenza stabili o in miglioramento nelle ore più intense e un errore di previsione noto che si riduce lentamente. Il segno sano è che le sorprese vengono discusse insieme alle loro cause. I numeri perfetti dovrebbero suscitare sospetto, perché di solito significano che la misurazione è blanda.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Operare con ampio margine | Assorbe le sorprese; protegge latenza e disponibilità | Costo più alto; nasconde inefficienze e previsioni deboli |
| Operare snelli con autoscaling rapido | Costo più basso; la capacità segue la domanda | Dipende da velocità e limiti dello scaling; le dipendenze possono non scalare; più difficile da analizzare durante un incidente |
| Obiettivi di latenza a percentile | Riflettono come si vivono le richieste lente; resistono ai trucchi della media | Richiedono più dati e campioni più grandi; rumorosi a percentili elevati per servizi a basso traffico |
| Solo latenza media o mediana | Semplice e stabile | Nasconde la coda che genera reclami e abbandoni |
| Test di carico sintetici | Controllati, ripetibili, sicuri | Realistici solo quanto il modello di carico e l'ambiente |
| Telemetria di produzione come base | Riflette il comportamento reale e il mix reale | Rivela i limiti solo dopo che sono stati raggiunti; non può sondare oltre la domanda attuale |
| Modelli di previsione dettagliati | Colgono stagionalità e crescita | Richiedono dati e competenze; falso senso di precisione quando gli input sono deboli |
| Semplici intervalli concordati con il business | Facili da spiegare e aggiornare; mettono a fuoco le ipotesi | Più grossolani; dipendono da input onesti da parte del business |

Scegliere il metodo più leggero che supporti la decisione. Per la maggior parte dei servizi bastano uno sguardo settimanale a utilizzo di picco, saturazione e percentili di latenza, un test di carico prima delle modifiche importanti e un riesame trimestrale delle previsioni. Aggiungere la modellazione dove il costo di sbagliare è alto.

## Domande da discutere con il team

**1. Quali tre percorsi utente contano di più, e quale tempo di risposta si aspettano gli utenti per ciascuno?**
Chiedere al gruppo di nominare i percorsi, poi confrontare con ciò che le dashboard rappresentano. Il facilitatore dovrebbe insistere per un'aspettativa riconducibile a un utente o a un cliente, non a una preferenza ingegneristica.

**2. Dove il nostro servizio è vicino a un precipizio, e come lo sappiamo?**
Cercare risorse come pool di connessioni, limiti di thread o un limite di frequenza di un partner. Chiedere quando ciascuna è stata testata fino al punto di rottura l'ultima volta. Se nessuno lo sa, quello è il primo lavoro da fare.

**3. Come riportiamo oggi la latenza, e che cosa direbbe l'1 percento di utenti più lento?**
Mostrare affiancati media, mediana, p95 e p99 per un'operazione e discutere il divario. Chiedere quali richieste sono escluse e perché, e se le richieste fallite sono contate.

**4. Quanto margine manteniamo, chi lo ha scelto e quando abbiamo rivisto la scelta l'ultima volta?**
Discutere il costo del margine e il costo di un'interruzione nel giorno più intenso. Concordare una data di riesame e le evidenze che cambierebbero il margine.

**5. Quanto sono state buone le nostre ultime tre previsioni di domanda, e che cosa abbiamo imparato?**
Confrontare le previsioni datate con i dati effettivi e le cause degli scostamenti ampi. Chiedere che cosa sapeva il business che l'operatività non ha ricevuto. Decidere un input da aggiungere al registro delle previsioni, come il calendario di marketing o un piano di lanci.

**6. Se ci servisse il doppio della capacità il mese prossimo, che cosa ce lo impedirebbe?**
Elencare ogni passaggio dalla richiesta al traffico di produzione e segnare dove si attende. Includere approvvigionamento, approvazioni, licenze e dipendenze che non scalano. Il facilitatore dovrebbe cercare l'attesa più lunga che non sia tecnica, poiché spesso è un'approvazione o un contratto. Concordare un passaggio da accorciare e misurare l'effetto tramite il lead time della capacità.

## Quattro prospettive

### Team di prodotto e di consegna

Includere un'aspettativa di prestazione nei criteri di accettazione delle funzionalità che toccano percorsi molto frequentati, eseguire un test di carico nella pipeline dove praticabile e informare per tempo l'operatività dei lanci. Attenzione all'abitudine di trattare le prestazioni come un successivo compito di «consolidamento», che si trasforma in lavoro non pianificato (si veda l'Argomento 2.9 «Lavoro operativo e lavoro non pianificato»).

### Team di servizio e operations

I team operativi possiedono la telemetria, il piano di capacità e la risposta quando si raggiunge un limite. Hanno bisogno di saturazione e latenza di coda nelle dashboard che usano davvero, di un registro delle previsioni condiviso con il business e di risultati di test di cui ci si possa fidare. Dovrebbero registrare ogni incidente legato alla capacità con la sua causa (si veda l'Argomento 4.1 «Metriche di gestione dei problemi» e l'Argomento 3.4 «Metriche degli incidenti maggiori»).

### Leadership e governance

I dirigenti decidono quanto rischio e quanto costo l'organizzazione accetta, e la politica di margine è il punto in cui quella decisione emerge. Chiedere percentili di latenza e margine per servizio critico, con accanto l'errore di previsione, e trattare le richieste di capacità come decisioni di investimento supportate da evidenze. Gli organi di governance dovrebbero resistere a un unico obiettivo di utilizzo per tutta l'organizzazione, che spinge ogni servizio allo stesso punto del precipizio.

### Clienti e utenti

I clienti percepiscono la lentezza come inaffidabilità, molto prima che un qualsiasi numero di disponibilità cambi. Esprimere le prestazioni in termini di percentili a un carico dichiarato e condividere come il servizio gestisce i periodi di picco (si veda l'Argomento 5.1 «Metriche SLA, OLA e XLA» e l'Argomento 6.2 «Experience level agreement»).

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni gestisce una vetrina, un servizio di pagamento e un servizio ordini, ciascuno di proprietà di un team di prodotto, con un team di piattaforma che fornisce l'infrastruttura condivisa. Tutti i numeri di questo esempio sono illustrativi.

Il riesame settimanale del team di piattaforma mostra la ricerca della vetrina con una latenza mediana di 180 millisecondi e un p95 di 420 millisecondi, entrambi entro l'obiettivo, e un uso del processore al 95º percentile dell'ora di punta del 58 percento. Tre settimane prima di un saldo programmato, una responsabile del supporto riferisce che i clienti dicono che il sito «arranca» durante le campagne serali. La dashboard è verde.

Il team esamina il p99 della ricerca nell'ora più intensa del saldo precedente e trova 3,1 secondi, a fronte di un obiettivo di p99 di 1,5 secondi. La saturazione racconta il resto: il pool di connessioni al database dei prodotti mostra richieste in attesa nel 14 percento degli intervalli di un minuto durante il picco, mentre l'uso del processore non ha mai superato il 60 percento. Il vincolo non è mai stato il processore. Era un limite del pool fissato quando il traffico era un terzo di quello attuale.

Il responsabile del prodotto e il responsabile della piattaforma eseguono un test di carico a 1,5 volte il picco dell'anno scorso, usando il mix di operazioni di produzione. Il test mostra che l'obiettivo di p99 viene violato a 1,15 volte il picco dell'anno scorso, quindi il margine è del 15 percento a fronte di una politica del 40 percento per i servizi rivolti al cliente. Il calendario di marketing suggerisce una domanda di 1,6 volte il picco dell'anno scorso nel giorno di apertura. La vecchia previsione, congelata nel registro, aveva fissato l'intervallo tra 1,2 e 1,4, e l'errore rispetto al saldo dell'anno scorso era stato del 22 percento, per lo più a causa di una campagna e-mail non annunciata.

La decisione, registrata nel registro delle decisioni, ha quattro parti. Primo, alzare il limite del pool e aggiungere repliche in lettura, e ritestare. Secondo, aggiungere al processo di rilascio una checklist di prontezza per i saldi, in modo che le campagne arrivino al registro delle previsioni almeno sei settimane prima. Terzo, aggiungere p99 e saturazione del pool al riesame settimanale. Quarto, concordare con la finanza il costo della capacità aggiuntiva per la finestra del saldo, usando uno scaling programmato anziché una riserva per tutto l'anno.

Dopo le modifiche, un secondo test mostra l'obiettivo di p99 tenuto fino a 1,8 volte il picco dell'anno scorso. Il rischio di manipolazione è emerso durante il riesame. Un collaboratore esterno aveva proposto una «vittoria rapida» consistente nell'escludere dal rapporto di latenza le richieste più lente di 5 secondi, sostenendo che fossero outlier. Il team ha rifiutato: le richieste escluse erano esattamente i clienti che si lamentavano. La salvaguardia è stata mantenere i tassi di errore e timeout accanto a ogni percentile di latenza e registrare la dimensione del campione. Durante il saldo il p99 raggiunge un picco di 1,2 secondi, la saturazione del pool resta sotto l'1 percento degli intervalli e l'errore di previsione è del 9 percento, registrato nel registro con la ragione dello scostamento residuo.

## Lente di settore

**Startup.** Il traffico è ridotto e la crescita incerta, quindi le misure economiche battono quelle elaborate. Tracciare i percentili di latenza per i due o tre percorsi che generano ricavi, osservare la saturazione sul database ed eseguire un semplice test di carico prima dei lanci. Impostare un avviso di spesa, così che un bug o un picco di traffico non diventi una fattura.

**Piccola impresa.** I servizi sono spesso in hosting o acquistati, quindi la capacità è una questione del fornitore. Chiedere al fornitore per iscritto rapporti di prestazioni e capacità, informarsi su cosa dice il contratto sui periodi di picco e osservare la vista del cliente con pochi controlli sintetici. Tracciare il margine sul sistema di cui l'azienda non può fare a meno.

**Grande impresa.** Molti servizi condividono l'infrastruttura, quindi i problemi di capacità compaiono nel posto sbagliato. Investire in una mappa dei servizi che colleghi i servizi ai componenti che usano, in un processo di previsione condiviso con le unità di business e in definizioni comuni dei percentili di latenza tra i team. Fissare la politica di margine in base alla criticità del servizio.

**Governo e settore pubblico.** La domanda è modellata da scadenze fissate per legge, come le date di presentazione delle dichiarazioni fiscali, le richieste di sussidi e le elezioni, e il fallimento in quelle date è pubblico. Le previsioni dovrebbero usare il calendario normativo, e la capacità per il picco può dover essere contrattualizzata con mesi di anticipo. I tempi di approvvigionamento allungano il lead time della capacità, quindi misurarli e pianificare di conseguenza. I rapporti pubblici sulle prestazioni del servizio dovrebbero indicare il percentile e le condizioni di carico (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

Il costo ha quattro parti. La prima è la strumentazione: telemetria e relativa archiviazione. La seconda è il collaudo: un ambiente rappresentativo e modelli di carico da mantenere. La terza è la routine di pianificazione: tenere il registro delle previsioni e riesaminare l'errore ogni trimestre. La quarta è la capacità di riserva stessa, che spesso è il costo maggiore e quello che più vale la pena rendere esplicito.

Il ritorno viene da meno incidenti legati alla capacità, decisioni migliori su quando acquistare e quando no, e spesa evitata su capacità che i dati mostrano non necessaria. Non promettere in anticipo una percentuale di risparmio. Misurare invece il proprio schema: il numero di incidenti con causa di capacità per trimestre, la quota di picchi che hanno richiesto interventi di emergenza, la spesa per capacità inattiva rispetto alla politica di margine concordata e l'andamento dell'errore di previsione. Il libro Google SRE tratta l'affidabilità come una decisione economica.

Il costo totale di proprietà è dominato dalle persone e dall'ambiente di test. Un piccolo team può iniziare con il monitoraggio esistente, un riesame settimanale e un test di carico per il percorso più importante.

## Anti-pattern e insidie

- **Riportare l'utilizzo medio come storia della capacità.** La media nasconde il picco e il precipizio. Riportare il percentile elevato dell'ora di punta e la misura di saturazione.
- **Latenza media nella dashboard dirigenziale.** La coda genera i reclami. Mostrare p95 e p99, con tassi di errore e dimensione del campione.
- **Escludere gli «outlier» dalla latenza.** Le richieste più lente sono utenti reali. Tenerle e indagarne la causa anziché tagliare i dati.
- **Mediare i percentili tra server.** Il risultato non descrive nessuno. Combinare istogrammi o osservazioni grezze prima di calcolare il percentile.
- **Piani di capacità costruiti solo sul traffico dell'anno scorso.** La domanda dipende da eventi di business. Includere il calendario aziendale e riesaminare l'errore di previsione.
- **Testare in un ambiente diverso dalla produzione.** Un risultato positivo dà falsa fiducia. Registrare le differenze e correggerle, oppure testare in produzione in modo sicuro.
- **Usare le metriche di capacità per classificare ingegneri o team.** Utilizzo e latenza descrivono sistemi. Esaminarli in termini di progettazione del servizio e domanda, tenendo le persone fuori dal quadro.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Misurazione di utilizzo, saturazione e latenza | Medie da pochi server; allerte sull'uso elevato del processore | Alcuni team rappresentano percentili di latenza e code | Definizioni condivise: percentili per operazione chiave, saturazione accanto all'utilizzo, finestre scritte | Tracciate rispetto agli obiettivi, abbinate ai tassi di errore, riesaminate ogni settimana | Definizioni riviste congiuntamente con fornitori e clienti; viste lato utente e lato server riconciliate |
| Limiti e margine | Limiti sconosciuti fino a un guasto | Test di carico occasionali prima di grandi lanci | Test di carico sui servizi critici rispetto a una politica di margine scritta | Margine tracciato per servizio e ritestato dopo le modifiche rilevanti | Politica di margine adeguata sulla base di costo, rischio e dati sugli incidenti tra team e fornitori |
| Previsione | Stime ad hoc al momento di una richiesta | I singoli team tengono le previsioni a mente o in fogli di calcolo | Un registro condiviso delle previsioni con intervalli e responsabili, alimentato dal calendario aziendale | Errore di previsione valutato e riesaminato, con le cause degli scostamenti | Previsioni costruite con il business e i fornitori; input migliorati di routine |
| Erogazione della capacità | Capacità aggiunta dopo un incidente | Richieste standard per i casi comuni | Percorso documentato dall'approvazione al traffico di produzione, con il lead time della capacità misurato | Attese più lunghe prese di mira con miglioramenti finanziati | Capacità aggiunta automaticamente entro la politica; comportamento dello scaling e costo riesaminati insieme |

## Checklist

- [ ] I percorsi utente critici sono nominati, ciascuno con un'aspettativa di latenza concordata con il suo responsabile.
- [ ] La latenza è riportata come mediana, p95 e p99 per operazione, con finestra e dimensione del campione dichiarate.
- [ ] I percentili sono calcolati da istogrammi o osservazioni grezze, mai mediati tra server.
- [ ] Ogni grafico di utilizzo ha accanto un grafico di saturazione.
- [ ] I tassi di errore e di timeout sono mostrati accanto a ogni percentile di latenza.
- [ ] Ogni servizio critico ha un test di carico, con le differenze di carico di lavoro e ambiente scritte.
- [ ] Esiste una politica di margine per criticità del servizio, con il ragionamento registrato.
- [ ] Un registro datato delle previsioni contiene intervalli, ipotesi e responsabili, ed è alimentato dal calendario aziendale.
- [ ] L'errore di previsione è riesaminato ogni trimestre, con le cause degli scostamenti ampi registrate.
- [ ] Il lead time della capacità è misurato dall'approvazione al traffico sostenuto.
- [ ] Limiti, ritardo e costo dell'autoscaling sono riesaminati con il responsabile del servizio.
- [ ] Nessuna misura di capacità o prestazioni è riportata per singola persona.

## Prompt IA

**Esaminare un rapporto di latenza alla ricerca di distorsioni nascoste.**

```text
Ecco come riportiamo la latenza per [operazione o servizio]: [descrizione del
punto di misurazione, della finestra, delle statistiche mostrate e di quali
richieste sono incluse o escluse]. I nostri utenti tengono a [percorso utente
o aspettativa]. Individua i modi in cui questo rapporto potrebbe sottostimare
l'esperienza degli utenti più lenti, come medie, regole di esclusione,
campionamento o posizione di misurazione. Suggerisci che cosa mostrare invece
e di quali dati aggiuntivi avrei bisogno. Non inventare valori di riferimento
né soglie; chiedimi quelli che ti servono. Elenca le tue ipotesi.
```

**Redigere un piano di test di carico per un servizio.**

```text
Mi serve un piano di test di carico per [nome del servizio]. I suoi principali
percorsi utente sono [percorsi], le sue dipendenze sono [dipendenze] e il suo
mix di traffico di produzione è approssimativamente [descrizione del mix].
L'ambiente di test differisce dalla produzione in questi modi: [differenze].
Proponi un modello di carico, uno schema di incremento, le misure da
registrare (percentili di latenza, tasso di errore, utilizzo, saturazione), le
condizioni di arresto e le domande a cui i risultati dovrebbero rispondere. Non
presumere funzionalità degli strumenti né inventare valori obiettivo. Elenca
le tue ipotesi e i rischi del test.
```

**Strutturare una previsione della domanda con il business.**

```text
Sto preparando una previsione di capacità per [servizio] che copre [orizzonte].
Input noti: [descrizione del traffico storico], [eventi di business e date] e
[modifiche pianificate]. Redigi un modello di registro delle previsioni con
scenari basso, atteso e alto, le ipotesi alla base di ciascuno, il responsabile
di ciascun input e una routine di riesame che valuti l'errore di previsione.
Suggerisci domande da porre a [stakeholder di business]. Non inventare tassi di
crescita né fattori stagionali. Elenca le tue ipotesi.
```

**Trovare il vero vincolo a partire dai sintomi.**

```text
Un servizio mostra questi sintomi durante il carico di picco: [sintomi, per
esempio p99 lento, crescita delle code, tipi di errore]. Dati di utilizzo:
[sintesi dell'utilizzo delle risorse]. Dati di saturazione: [sintesi di code,
pool, limitazioni]. Note sull'architettura: [breve descrizione]. Elenca le
risorse e i limiti che potrebbero essere il vincolo, le evidenze che
permetterebbero di distinguerli e il test successivo più economico per
ciascuno. Non attribuire una causa che i dati non supportano. Elenca le tue
ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per individuare l'argomento che definisce una misura di capacità o prestazioni, i suoi orologi e la salvaguardia che deve affiancarla.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che un argomento su capacità o prestazioni modificato mantenga ogni metrica abbinata a un vettore di manipolazione e a una salvaguardia.

## Punti chiave

- Misurare la saturazione insieme all'utilizzo, perché gli utenti sentono la coda, non la percentuale.
- Riportare la latenza come percentili per operazione, con tassi di errore e dimensione del campione, e non mediare mai i percentili.
- Trovare i limiti con i test e fissare il margine come politica registrata che pesa costo e rischio.
- Prevedere la domanda come intervalli con il business, congelare la previsione e imparare dall'errore.
- Accorciare il lead time della capacità e misurare l'autoscaling, in modo che la capacità segua il bisogno.
- Descrivere servizi e sistemi, mai persone, e trattare i numeri dall'aspetto perfetto come un invito a verificare la misurazione.

## Riferimenti e letture di approfondimento

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Google, "Monitoring Distributed Systems," chapter in *Site Reliability Engineering*, 2016, https://sre.google/sre-book/monitoring-distributed-systems/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. Dean, J., and Barroso, L. A., "The Tail at Scale," *Communications of the ACM*, 56(2), 2013.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Gregg, B., *Systems Performance: Enterprise and the Cloud*, 2nd edition, Addison-Wesley, 2020.
7. Allspaw, J., *The Art of Capacity Planning*, O'Reilly Media, 2008.
8. Gunther, N. J., *Guerrilla Capacity Planning*, Springer, 2007.
9. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
10. AXELOS (now PeopleCert), *ITIL 4 Foundation* and the ITIL 4 practice guide for capacity and performance management, 2019 onwards.
11. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Latency (engineering)](https://en.wikipedia.org/wiki/Latency_(engineering)).
14. Wikipedia, [Throughput](https://en.wikipedia.org/wiki/Throughput).
15. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
16. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
17. Wikipedia, [Load testing](https://en.wikipedia.org/wiki/Load_testing).
18. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
19. Wikipedia, [Tail latency](https://en.wikipedia.org/wiki/Tail_latency).
20. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
21. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
22. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
