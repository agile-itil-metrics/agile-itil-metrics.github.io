# Lavoro in corso e code

**Un team completamente occupato è un team il cui lavoro attende: si misuri quanto lavoro è in corso, quanto tempo resta in coda e quanto il team opera vicino alla propria capacità, e si usi l'aritmetica delle code per fissare limiti prima che arrivino i ritardi.**

## Panoramica e motivazione

Ogni team di servizio ha una coda, che usi o meno la parola. Gli incidenti attendono lo smistamento, le richieste attendono l'approvazione, le modifiche attendono uno spazio di revisione e gli elementi di backlog attendono che qualcuno li prenda in carico. La maggior parte del tempo trascorso in questi sistemi è speso ad attendere, non a lavorare. Le misure di questo argomento spiegano perché l'attesa cresce, come vederla per tempo e che cosa può fare un team al riguardo.

La grandezza centrale è il [lavoro in corso](https://en.wikipedia.org/wiki/Work_in_process) (WIP, work in process), il numero di elementi che sono stati avviati e non ancora conclusi. I team agili che gestiscono il flusso rendono visibile il WIP su una lavagna e lo limitano con un limite di WIP. Le operazioni di servizio secondo ITIL contano incidenti, richieste e modifiche aperti e chiamano l'insieme una coda o un backlog di record. Le due visioni descrivono la stessa cosa: elementi all'interno di un sistema che non li ha ancora consegnati. Questo argomento usa «lavoro in corso» per entrambe e dichiara ogni volta il confine (quali stati contano come «in corso» e quali no), perché quel confine decide ogni numero che segue.

La matematica proviene dalla [teoria delle code](https://en.wikipedia.org/wiki/Queueing_theory), lo studio delle file d'attesa. Il suo risultato più utile per un team di servizio è la [legge di Little](https://en.wikipedia.org/wiki/Little%27s_law), dimostrata da John Little nel 1961. Per un sistema stabile, il numero medio di elementi nel sistema è uguale al tasso medio di arrivo moltiplicato per il tempo medio che un elemento trascorre nel sistema. In termini di consegna, il WIP medio è uguale al throughput medio moltiplicato per il cycle time medio. La legge vale indipendentemente dall'ordine in cui gli elementi sono serviti, il che ne fa un controllo di plausibilità poco costoso su qualsiasi insieme di metriche di flusso (vedi Argomento 2.1 «Misure del flusso» e Argomento 2.2 «Lead time, cycle time ed efficienza del flusso»).

Il secondo risultato è meno confortevole. Quando una risorsa condivisa si avvicina al pieno utilizzo, il tempo di attesa cresce sempre più rapidamente. Un'approssimazione correlata, la [formula di Kingman](https://en.wikipedia.org/wiki/Kingman%27s_formula), mostra che il ritardo in coda cresce con l'utilizzo in proporzione al rapporto tra l'utilizzo e la frazione inattiva residua, e cresce anche con la variabilità degli arrivi e dei tempi di servizio. Il lavoro di supporto e di operazioni è variabile per natura, poiché gli incidenti arrivano a raffiche e lo sforzo per elemento differisce molto. Un team che pianifica di essere occupato al 100 percento ha quindi pianificato lunghe attese, e il primo incidente maggiore trasforma le lunghe attese in un arretrato che richiede settimane per essere smaltito.

Termini usati in questo argomento:

- Il **tasso di arrivo** è il numero di elementi che entrano nel sistema per unità di tempo.
- Il **throughput** (o tasso di uscita) è il numero di elementi che escono dal sistema come conclusi, per unità di tempo.
- Il **cycle time** è il tempo trascorso dal momento in cui un elemento entra nel confine del sistema al momento in cui lo lascia. Questo argomento usa lo stesso cronometro dell'argomento 2.2.
- Il **tempo in coda** è la parte del tempo trascorso durante la quale un elemento attende e nessuno vi lavora.
- L'**utilizzo** è la frazione della capacità disponibile che è in uso. Per un team, la capacità si esprime in ore di lavoro o in un conteggio di elementi che possono essere gestiti in parallelo. L'utilizzo è una proprietà di un team o di un gruppo di risorse, mai di una singola persona.
- Il **limite di WIP** è un numero massimo concordato di elementi in una fase o nell'intero sistema. Quando il limite è raggiunto non si avvia un nuovo elemento.
- Un **collo di bottiglia** è la fase con la minore capacità rispetto alla domanda. Determina il ritmo dell'intera catena, un punto sviluppato dalla [teoria dei vincoli](https://en.wikipedia.org/wiki/Theory_of_constraints) e dalla sua idea di [collo di bottiglia](https://en.wikipedia.org/wiki/Bottleneck_(production)).

Le visioni agile e ITIL si incontrano qui: ITIL 4 (2019) tratta la gestione della capacità e delle prestazioni, la gestione degli incidenti e la gestione delle richieste di servizio come pratiche che dipendono dall'adeguare la capacità alla domanda, e i metodi agili esprimono la stessa idea come limitare il lavoro in corso e concludere prima di avviare. Lo [sviluppo software lean](https://en.wikipedia.org/wiki/Lean_software_development) tratta il lavoro non concluso come scorta con costo di mantenimento e rischio.

## Principi chiave

- **L'attesa domina il tempo trascorso.** Nella maggior parte dei sistemi di servizio e di consegna gli elementi attendono molto più a lungo di quanto qualcuno ci lavori, perciò ridurre l'attesa è una leva più grande che lavorare più in fretta.
- **La legge di Little collega i tre numeri del flusso.** WIP medio, throughput e cycle time non possono essere fissati in modo indipendente. Se si vuole un cycle time più breve allo stesso throughput, occorre abbassare il WIP.
- **Il ritardo cresce ripidamente vicino al pieno utilizzo.** Il margine è il prezzo della reattività. Un team senza capacità libera non può assorbire una raffica o un elemento urgente senza ritardare tutto il resto.
- **La variabilità amplifica le code.** Arrivi irregolari e dimensioni irregolari degli elementi allungano le code anche quando il carico medio sembra accettabile. Si riduca la variabilità dove si può e la si assorba con un cuscinetto dove non si può.
- **Si limiti il WIP per concludere il lavoro, non per sembrare occupati.** Un limite di WIP è lo stimolo per una conversazione sul lavoro bloccato e sulla capacità, non una regola di conformità.
- **Si misuri a livello di sistema.** WIP, lunghezza della coda e utilizzo descrivono team e servizi, mai le persone che ne fanno parte.
- **Si riportino distribuzioni, non medie.** I tempi in coda hanno code lunghe, perciò si mostrino la mediana e un percentile alto come l'85° o il 95° (vedi Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

## Definizioni delle metriche

Sette misure coprono l'argomento. Ciascuna è definita per un confine nominato che il team scrive nel proprio registro delle metriche (vedi Argomento 1.4 «Governance e responsabilità delle metriche»).

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lavoro in corso | Numero di elementi iniziati e non conclusi all'interno del confine concordato | Conteggio degli elementi negli stati «in corso» al momento dell'istantanea; gli elementi nel backlog o nella coda «pronto» prima del primo stato di lavorazione e gli elementi già fatti sono esclusi | elementi | Cronologia degli stati dell'issue tracker o dello strumento ITSM | Gestione degli incidenti; gestione delle richieste di servizio | Conteggio del WIP sulla lavagna | Istantanea giornaliera, rivista settimanalmente |
| Lunghezza della coda | Numero di elementi in attesa che il lavoro inizi o in attesa tra una fase e l'altra | Conteggio degli elementi negli stati di attesa (per esempio «nuovo», «in attesa di smistamento», «in attesa di revisione») al momento dell'istantanea; gli elementi bloccati sono riportati a parte, non sommati | elementi | Cronologia degli stati del tracker o dello strumento ITSM | Gestione degli incidenti; abilitazione delle modifiche | Colonna pronto e colonne di coda su una lavagna | Istantanea giornaliera, rivista settimanalmente |
| Tempo in coda | Tempo trascorso da un elemento in attesa prima che il lavoro inizi, per fase | Il cronometro parte quando l'elemento entra in uno stato di attesa e si ferma quando entra nello stato attivo successivo; il tempo in uno stato contrassegnato «bloccato in attesa del cliente» è escluso e riportato come cifra a sé; si riportino la mediana e l'85° percentile | ore o giorni | Timestamp delle transizioni di stato nel tracker o nello strumento ITSM | Service desk; gestione degli incidenti; abilitazione delle modifiche | Tempo di attesa in un flusso di valore; tempo nelle colonne di coda | Settimanale |
| Tasso di arrivo e di uscita | Elementi che entrano ed escono dal sistema per periodo e loro differenza come crescita netta della coda | Arrivi = elementi che entrano nel confine nel periodo; uscite = elementi che si completano nel periodo; crescita netta = arrivi meno uscite; gli elementi riaperti contano come arrivi solo se il team li definisce così | elementi a settimana | Timestamp di creazione e di risoluzione del tracker o dello strumento ITSM | Monitoraggio e gestione degli eventi; gestione degli incidenti | Throughput e diagramma di flusso cumulativo | Settimanale |
| Rapporto di carico del team | Quota della capacità del team che il lavoro pianificato e atteso consumerebbe | Ore di domanda attesa nel periodo (arrivi per sforzo medio per elemento) / ore di capacità disponibili dopo ferie e impegni fissi; il team dichiara come stima lo sforzo; le singole persone non sono mai riportate | percentuale | Piano di capacità, cronologia dello sforzo nel tracker, turni | Gestione della capacità e delle prestazioni; gestione della forza lavoro e dei talenti | Capacità del team nel lavoro pianificato | Mensile e a ogni evento di pianificazione |
| Tasso di superamento del limite di WIP | Quota di giorni in cui una fase o il sistema supera il limite di WIP concordato | Giorni con WIP sopra il limite / giorni lavorativi nel periodo; i giorni in cui il team ha registrato un'eccezione deliberata con una motivazione sono riportati a parte | percentuale di giorni | Istantanee giornaliere del WIP e registro delle eccezioni | Miglioramento continuo; gestione degli incidenti | Accordo di lavoro sul limite di WIP | Settimanale |
| Rapporto di coerenza della legge di Little | Controllo che i tre numeri del flusso concordino tra loro | WIP medio nel periodo / (uscite al giorno per cycle time medio in giorni) per lo stesso confine e periodo; un rapporto vicino a 1 significa che le definizioni sono coerenti, un rapporto lontano da 1 significa che un confine o un cronometro è incoerente | rapporto | Gli stessi dati del tracker delle altre metriche di flusso | Misurazione e rendicontazione | Controllo di plausibilità delle metriche di flusso in una retrospettiva | Mensile |

## Raccomandazioni

### Definire prima il confine

**1. Si scriva il confine del sistema prima di contare qualsiasi cosa.** Si dichiari quale stato avvia «in corso» e quale lo conclude e quali elementi sono esclusi (per esempio la manutenzione programmata o gli elementi in attesa di un cliente). Due team che contano il WIP in modo diverso produrranno numeri non confrontabili, e un confine che si sposta in silenzio romperà il controllo della legge di Little. Si registri il confine nel registro delle metriche e lo si cambi solo con una motivazione registrata.

**2. Si separi l'attesa dal lavoro nel modello degli stati.** Se un unico stato copre sia «in coda per la revisione» sia «in corso di revisione», il tempo in coda è invisibile. Si diano agli stati di attesa nomi propri, come descritto nell'argomento 1.5 «Fonti dei dati e strumentazione», così che i timestamp delle transizioni rivelino il ritardo. Il costo di uno stato in più è piccolo rispetto al valore di vedere dove sostano gli elementi.

### Usare la legge di Little come controllo di coerenza

**3. Si esegua ogni mese il controllo della legge di Little.** Si calcolino WIP medio, throughput e cycle time medio per lo stesso periodo e lo stesso confine e si veda se concordano all'incirca. Una grande discrepanza di solito significa che gli elementi entrano o escono dal sistema senza essere contati, oppure che vecchi elementi sono parcheggiati in uno stato non presidiato. Si correggano i dati prima di interpretare qualsiasi tendenza. La legge è un teorema sui sistemi stabili, perciò la si applichi a periodi in cui la coda non è cresciuta o diminuita in modo drastico.

### Osservare utilizzo e crescita della coda

**4. Si pianifichi un margine dove la variabilità è alta.** Per la gestione degli incidenti, il lavoro di reperibilità e qualsiasi coda alimentata da domanda casuale, si pianifichi al di sotto della piena capacità perché una raffica non diventi un arretrato. I team scoprono comunemente che un rapporto di carico che sulla carta sembra confortevole è già troppo alto una volta contate le interruzioni (vedi Argomento 2.9 «Lavoro operativo e lavoro non pianificato»). Si concordi l'intervallo obiettivo con le persone che svolgono il lavoro e lo si riveda dopo ogni incidente maggiore.

**5. Si monitori la crescita netta della coda oltre alla sua dimensione.** Una coda di 40 elementi che si riduce è sana, e una coda di 15 che cresce di 5 elementi a settimana non lo è. Si confrontino ogni settimana arrivi e uscite e si tracci la tendenza con un [diagramma di flusso cumulativo](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), dove una banda che si allarga per una fase segnala un WIP crescente in quella fase. Quando gli arrivi superano le uscite per diverse settimane, la coda cresce senza limite ed è dovuta una decisione: aggiungere capacità, ridurre la domanda o cambiare ciò che viene accettato.

**6. Si legga il tempo in coda per fase per trovare il collo di bottiglia.** Si scomponga il tempo trascorso in periodi di attesa per fase. La fase con il tempo in coda più lungo e il maggior numero di elementi in attesa è una candidata al collo di bottiglia. Migliorare qualsiasi altra fase non accorcerà l'intero sistema, perciò si diriga lo sforzo di miglioramento sul vincolo e si ricontrolli dopo, perché il vincolo si sposta.

### Limitare il WIP in modo che funzioni

**7. Si fissi il primo limite di WIP dall'osservazione, poi lo si adegui.** Si parta vicino al WIP medio attuale, o leggermente al di sotto, e si osservi che cosa accade al cycle time e agli elementi bloccati. Si abbassi il limite gradualmente finché il team può ancora tenere ogni persona produttiva nel concludere il lavoro. Non esiste un numero corretto universale, e una cifra presa a prestito da un altro team non porta alcuna evidenza per il proprio.

**8. Si tratti un superamento come uno stimolo, non come una violazione.** Quando il WIP supera il limite, ci si chieda che cosa impedisca il completamento e chi possa concentrarsi su di esso. Un superamento registrato con una motivazione, come una correzione urgente in produzione, è informazione. Se i superamenti diventano routine, il limite è sbagliato o il sistema è sovraccarico, e la risposta è una conversazione sulla capacità anziché un rimprovero.

**9. Si applichino i limiti all'intero flusso di valore, non a una sola colonna.** Un limite solo su «in corso» lascia che il lavoro si accumuli nelle code di revisione, collaudo e approvazione. Si limiti il numero di elementi nel sistema da un capo all'altro e si aggiungano limiti di fase dove una coda specifica continua a crescere. Le fasi condivise, come una revisione del comitato consultivo sulle modifiche o un ambiente di test, meritano un proprio limite visibile e un proprio tempo in coda.

### Gestire in modo deliberato il lavoro urgente e variabile

**10. Si dia al lavoro con urgenza una politica.** Senza una politica, gli elementi urgenti superano in silenzio ogni limite e il team non riesce a distinguere il carico pianificato da quello non pianificato. Si definisca che cosa si qualifica, quanti elementi con urgenza possono essere in corso e quale lavoro si ferma. Si contino gli elementi con urgenza e il loro effetto sul tempo in coda, così che il costo dell'urgenza sia visibile a chi la richiede (vedi Argomento 2.9 «Lavoro operativo e lavoro non pianificato»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Lavoro in corso | Spostare gli elementi in uno stato «parcheggiato» o «in sospeso» per restare sotto il limite; dividere gli elementi per farli sembrare più piccoli; avviare il lavoro fuori dalla lavagna | Conteggio degli elementi negli stati parcheggiati e loro età; campionare la lavagna rispetto al lavoro reale; riportare l'elemento in corso più vecchio |
| Lunghezza della coda | Chiudere e riaprire gli elementi; respingere nuovi elementi alla porta; ridenominare gli stati di attesa così che cadano fuori dal conteggio | Tasso di riapertura e tasso di rifiuto accanto alla lunghezza della coda; revisione delle definizioni degli stati a ogni revisione delle metriche |
| Tempo in coda | Far partire il cronometro in ritardo creando il record dopo che il lavoro è pronto; mettere in pausa il cronometro tramite stati di blocco o di attesa del cliente; segnare un elemento come in corso quando è stato solo aperto | Distribuzione del tempo negli stati di blocco e di pausa; quota di elementi creati dopo essere stati avviati; attesa riferita dal richiedente tramite un breve sondaggio |
| Tasso di arrivo e di uscita | Chiudere in fretta gli elementi per alzare le uscite; dividere una richiesta in molte per alzare entrambi i conteggi; contare i duplicati come arrivi | Misure di qualità e di riapertura sugli elementi chiusi (vedi Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»); distribuzione delle dimensioni degli elementi; verifica dell'esito per il cliente |
| Rapporto di carico del team | Sottostimare lo sforzo per mostrare capacità libera, o sovrastimare la domanda per giustificare l'organico; riportare un rapporto per un periodo favorevole | Confrontare sforzo stimato e sforzo effettivo per elemento; mostrare il rapporto con la sua tendenza e la quota di interruzioni; revisione tra pari del metodo di stima |
| Tasso di superamento del limite di WIP | Alzare il limite per fermare i superamenti; nascondere i superamenti spostando gli elementi fuori dalla lavagna; concedere liberamente le eccezioni | Numero e motivi delle eccezioni; storia delle modifiche del limite con le date; percentile del cycle time accanto al tasso di superamento |
| Rapporto di coerenza della legge di Little | Aggiustare il confine o il periodo finché il rapporto si avvicina a 1; escludere gli elementi di lunga durata come valori anomali | Fissare in anticipo confine e periodo; pubblicare gli elementi esclusi e il loro numero; rivedere con una motivazione le modifiche del confine |

Una lettura sana è un team il cui WIP è stabile o in calo, i cui percentili del tempo in coda sono piatti o in miglioramento, i cui arrivi e le cui uscite si bilanciano all'incirca e i cui superamenti si accompagnano a motivazioni che portano ad azioni. Il rapporto della legge di Little si aggira intorno a 1 perché i dati sono coerenti, non perché qualcuno l'abbia ritoccato.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Limiti di WIP stretti | Cycle time più breve, scoperta precoce dei problemi, più conclusioni | Può comparire tempo inattivo in una fase; richiede disciplina e una certa polivalenza; può frustrare gli stakeholder che vogliono il lavoro avviato |
| Limiti di WIP larghi o assenti | Tutti sembrano occupati e le richieste sono accettate in fretta | Code lunghe, consegna lenta, blocchi nascosti, forte cambio di contesto |
| Capacità di margine pianificata | Assorbe raffiche e lavoro urgente; mantiene brevi i tempi di risposta | Sembra uno spreco in un rapporto sull'utilizzo; richiede alla direzione di accettare una minore efficienza apparente |
| Utilizzo pianificato elevato | Appare efficiente e poco costoso all'ora | L'attesa cresce ripidamente quando il carico si avvicina alla capacità; fragile di fronte a qualsiasi perturbazione |
| Usare la legge di Little per la pianificazione | Semplice, generale e rapida da applicare | Valida solo per sistemi stabili e per medie; non dice nulla su un singolo elemento |

Si limiti il WIP e si mantenga un margine dove la variabilità e il costo del ritardo sono alti, e si accettino limiti più larghi dove il lavoro è regolare e indipendente.

Nel più semplice modello da manuale di un singolo servitore con arrivi e tempi di servizio casuali (una coda M/M/1), il tempo medio nel sistema è il tempo di servizio diviso per uno meno l'utilizzo: 2 volte al 50 percento, 5 volte all'80 percento, 10 volte al 90 percento e 20 volte al 95 percento. I team reali non sono singoli servitori, perciò si trattino queste cifre come la forma della curva, non come una previsione.

## Domande da discutere con il team

**1. Che cosa conta come «in corso» per noi e lo contiamo tutti allo stesso modo?**
Si chieda a ciascuno di nominare il primo e l'ultimo stato che rende un elemento parte del WIP, poi si confrontino le risposte. Si cerchino stati come «in sospeso» o «in attesa del cliente» che alcuni contano e altri no. Si concordi un confine e lo si scriva. Chi facilita dovrebbe annotare come le risposte cambierebbero il numero del WIP, perché ciò mostra quanto la metrica sia sensibile alla definizione.

**2. Dove attendono più a lungo i nostri elementi e chi è il responsabile di quella coda?**
Si disegni il flusso dall'arrivo al fatto e si segnino i punti di attesa. Usando un mese recente di dati, si stimino la mediana e l'85° percentile dell'attesa in ciascun punto. Si discuta quale coda non ha un responsabile, come una fase di approvazione o un ambiente di test condiviso. Si concordi una coda da esaminare nel dettaglio e una persona che porti i dati la prossima volta.

**3. Quanto è troppo occupato per il tipo di lavoro che svolgiamo?**
Si confronti il carico pianificato con la quota di tempo effettivamente speso in interruzioni ed elementi urgenti. Ci si chieda che cosa sia accaduto alla coda l'ultima volta che la domanda ha avuto un picco. Si discuta l'idea che un team senza capacità libera non possa rispondere rapidamente. Chi facilita dovrebbe orientarsi verso un intervallo obiettivo per il rapporto di carico, non un numero unico, e verso un piano per ciò che accade quando l'intervallo viene superato.

**4. La nostra coda sta crescendo, riducendosi o è stabile, e come lo sappiamo?**
Si guardino arrivi e uscite delle ultime otto settimane. Basta un semplice grafico. Ci si chieda se qualcuno si sarebbe accorto di un lento aumento prima che diventasse un problema e quale segnale farebbe scattare un'azione. Si concordi che cosa un team debba fare quando le uscite restano indietro rispetto agli arrivi per tre settimane di fila.

**5. Che cosa accadrebbe se abbassassimo di uno il nostro limite di WIP?**
Si chieda alle persone di prevedere quali elementi attenderebbero, quali si concluderebbero prima e che cosa farebbero quando non possono avviare qualcosa di nuovo. Si facciano emergere timori come quello di essere visti come inattivi.

**6. I nostri numeri concordano tra loro?**
Si prenda un mese di dati e si calcolino WIP medio, throughput e cycle time medio. Si verifichi se il WIP sia all'incirca il throughput per il cycle time. In caso contrario, si cerchi la causa, come elementi conclusi ma non chiusi, o elementi chiusi senza essere stati avviati. Chi facilita dovrebbe trattare una discrepanza come un dono: indica un problema di dati o di definizione che altrimenti distorcerebbe ogni altra metrica di flusso.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna avvertono gli effetti di un WIP eccessivo come cambio di contesto, feedback tardivo e lavoro non concluso che si deteriora. Traggono il massimo vantaggio da limiti di WIP visibili, elementi piccoli e dall'abitudine di concludere prima di avviare. Un team dovrebbe guardare ai propri tempi in coda tra le fasi, come l'attesa di una revisione, perché questi ritardi sono di solito maggiori del tempo speso a scrivere codice (vedi Argomento 2.7 «Metriche di pull request e code review»).

### Team di servizio e operations

I team operativi affrontano una domanda casuale, perciò gli effetti di accodamento sono forti. Un service desk, un turno di reperibilità e un comitato di revisione delle modifiche si comportano ciascuno come una coda con arrivi variabili. Questi team hanno bisogno di margine esplicito, regole di priorità chiare e una politica per il lavoro con urgenza, così che gli elementi urgenti non spostino in silenzio tutto il resto (vedi Argomento 3.1 «Metriche del service desk» e Argomento 5.7 «Metriche di toil e reperibilità»). Si misuri il tempo in coda a ogni passaggio di consegne e si osservi il lavoro che rimbalza tra gruppi (vedi Argomento 9.3 «Metriche di collaborazione e passaggi di consegne»).

### Leadership e governance

I dirigenti influenzano le code attraverso la domanda che accettano e l'utilizzo che premiano. Dovrebbero chiedere i percentili del tempo in coda e la crescita netta della coda oltre all'utilizzo, e aspettarsi che un servizio sano operi al di sotto della piena capacità. Una richiesta di aggiungere altri progetti a un team già al limite è una decisione di allungare il cycle time di tutti, e la governance dovrebbe rendere esplicito questo compromesso. Si finanzi la capacità per il vincolo anziché iniziative generali di efficienza (vedi Argomento 5.4 «Metriche di capacità e prestazioni»).

### Clienti e utenti

I clienti sperimentano l'accodamento come attesa di una risposta e raramente si preoccupano di quanto il team sia occupato. Hanno bisogno di aspettative oneste basate sulla distribuzione delle attese passate, di un modo per vedere lo stato della propria richiesta e di un percorso di escalation per le esigenze urgenti. Limitare il WIP può significare un'accettazione più lenta di nuove richieste e un completamento più rapido di quelle accettate, e questa scelta dovrebbe essere loro spiegata (vedi Argomento 6.2 «Experience level agreement»).

## In pratica: un esempio di ITIL agile

Il reparto IT di un ospedale regionale ha un service desk, un team di infrastruttura e un team applicativo. Tutti i numeri di questo esempio sono illustrativi.

Il team applicativo gestisce richieste di servizio e piccole modifiche per i sistemi clinici. Nell'arco di un trimestre, la sua dashboard mostra un cycle time mediano passato da 6 giorni lavorativi a 11, mentre il team riferisce di essere «a pieno regime». Il rapporto di carico che il team calcola per il trimestre è del 98 percento. L'85° percentile del tempo in coda per la fase «in attesa di approvazione clinica» è di 9 giorni lavorativi, e il WIP medio sulla lavagna è di 44 elementi a fronte di un throughput di 4 elementi per giorno lavorativo. Applicando la legge di Little, 44 diviso 4 dà un cycle time medio implicito di 11 giorni lavorativi, che concorda con la cifra misurata, perciò i dati sono coerenti e il team si fida.

Il capo reparto suggerisce per prima cosa di assumere un consulente. Il responsabile del team indica la scomposizione per fase: degli 11 giorni, la coda prima dell'approvazione clinica e la coda prima del rilascio rappresentano la maggior parte del tempo trascorso, e il lavoro attivo è una piccola quota. Gli arrivi nel trimestre hanno superato le uscite di circa 2 elementi a settimana, quindi la coda è cresciuta in modo costante. Il team ha inoltre accettato ogni richiesta urgente, e gli elementi con urgenza non hanno una politica.

Il team decide quattro modifiche, registrate nel registro delle decisioni. Fissa un limite di WIP a livello di sistema di 30 elementi, con un limite di fase di 8 sulla coda di approvazione. Pianifica un rapporto di carico di circa l'80 percento in modo che le interruzioni attese ci rientrino. Scrive una politica di urgenza che consente al massimo due elementi urgenti in corso. Chiede al gruppo di approvazione clinica di tenere un breve spazio di revisione giornaliero anziché una riunione settimanale. Dopo otto settimane, il team riporta un cycle time mediano di 7 giorni lavorativi, un 85° percentile del tempo in coda all'approvazione di 3 giorni lavorativi e un tasso di superamento del 10 percento dei giorni, con le motivazioni registrate.

Il team individua un rischio di manipolazione nel secondo mese. Il tasso di superamento appare eccellente, ma un campione della lavagna mostra diversi elementi in un nuovo stato chiamato «in attesa», che si trova fuori dal conteggio del WIP, e la salvaguardia del conteggio degli stati parcheggiati era in crescita. Il team rimuove lo stato, riporta gli elementi nel conteggio e richiede che ogni nuovo stato sia aggiunto al registro con una definizione. Il tasso di superamento sale al 18 percento per alcune settimane, che il team accetta come cifra onesta, per poi scendere man mano che gli elementi bloccati vengono risolti.

## Lente di settore

**Startup.** La domanda è irregolare e la tentazione è avviare tutto. Basta una semplice lavagna con un limite di WIP visibile e un controllo settimanale dell'elemento in corso più vecchio. Si mantenga un margine per i problemi in produzione, poiché una sola interruzione può consumare l'intero team.

**Piccola impresa.** Una o due persone spesso gestiscono supporto, progetti e amministrazione, e la casella di posta è la coda. Si separi il lavoro pianificato da quello reattivo, si fissi un limite giornaliero ai compiti avviati e si dica ai clienti l'attesa abituale per ciascun tipo di richiesta.

**Grande impresa.** Molti team condividono fasi come l'approvazione delle modifiche, la revisione di sicurezza e gli ambienti di test, e le code condivise sono spesso le più lunghe. Si misuri il tempo in coda nelle fasi condivise e lo si pubblichi, si assegni un responsabile a ciascuna fase condivisa e si eviti di riportare l'utilizzo come obiettivo. Gli strumenti possono contare il WIP in modo diverso tra i team, perciò si concordino un confine comune e un vocabolario di stati comune prima di aggregare (vedi Argomento 2.4 «Metriche del flusso di valore»).

**Pubblica amministrazione e settore pubblico.** Scadenze di legge, fasi di approvvigionamento e approvazioni formali creano code lunghe che i team non controllano. Si separi il tempo che un team controlla dal tempo speso in attesa di altri enti e si riportino entrambi. Dove gli obiettivi di servizio sono fissati da leggi o regolamenti, si documentino le regole del cronometro ed eventuali pause e si conservi la traccia di audit (vedi Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

La motivazione è una consegna più rapida e più prevedibile senza aggiungere personale, perché l'attesa domina il tempo trascorso e un taglio modesto del WIP o di una lunga coda di approvazione accorcia il cycle time di ogni elemento che segue. Il margine pianificato consente inoltre a un team di assorbire un incidente maggiore senza perdere settimane di altro lavoro.

I costi sono modesti e riguardano soprattutto le persone: lo sforzo per definire confini e stati, per costruire un'istantanea giornaliera del WIP e un rapporto sul tempo in coda dai dati esistenti degli strumenti e per tenere una breve revisione settimanale. Limitare il WIP significa anche dire «non ancora» ad alcune richieste, il che richiede l'accordo degli stakeholder, e la capacità inattiva è un costo apparente che i dirigenti devono comprendere come assicurazione contro il ritardo.

Il ritorno dovrebbe essere descritto attraverso schemi che l'organizzazione può misurare da sé anziché attraverso percentuali prese a prestito. Si monitorino la mediana e l'85° percentile del cycle time prima e dopo i limiti, il numero di elementi invecchiati oltre una soglia concordata, il tasso di superamento e i suoi motivi e la quota di tempo speso in lavoro urgente. Il business case è più solido quando collega il tempo in coda a qualcosa che l'azienda già avverte, come l'attesa per l'accesso di un nuovo assunto, una modifica a un sistema clinico o una correzione per un cliente. Il costo totale di proprietà è dominato dal tempo delle persone che rivedono i numeri e agiscono, perciò si conti quel tempo rispetto al ritardo che elimina. Un team dovrebbe costruire la propria baseline, poiché qui non sono citati valori di riferimento.

## Anti-pattern e insidie

- **Puntare al 100 percento di utilizzo.** Garantisce lunghe attese e una consegna fragile. Si pianifichi un rapporto di carico con margine e lo si riveda dopo le perturbazioni.
- **Limitare solo la colonna «in corso».** Il lavoro si accumula allora nelle code fuori dal limite. Si limiti il sistema da un capo all'altro e si aggiungano limiti di fase dove le code crescono.
- **Trattare il limite di WIP come una regola da far rispettare.** Le persone nascondono il lavoro per conformarsi. Si usi un superamento come stimolo per chiedersi che cosa sia bloccato e se ne registri la motivazione.
- **Parcheggiare gli elementi in stati senza limite.** Il conteggio resta basso mentre il lavoro attende non visto. Si includano gli stati parcheggiati in un conteggio visibile e se ne riveda l'età.
- **Misurare l'utilizzo delle singole persone.** Premia l'apparire occupati e invita alla classifica. Si misuri il team o il gruppo di risorse e non si pubblichi mai una cifra per persona.
- **Ignorare il lato degli arrivi.** I team lavorano sulle uscite mentre la domanda continua a crescere. Si monitorino gli arrivi e, quando superano la capacità, si prenda una decisione esplicita su che cosa accettare.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizioni e confini | Ciascuno conta il WIP a modo proprio | Alcuni team scrivono un confine per la propria lavagna | Un confine scritto e un vocabolario di stati, con gli stati di attesa separati da quelli di lavoro | Modifiche al confine registrate e controllo della legge di Little eseguito ogni mese | Confini allineati con fornitori e team partner e rivisti quando smettono di orientare le decisioni |
| Limiti di WIP e margine | Nessun limite; tutti occupati | Limiti informali su una colonna | Limiti a livello di sistema e di fase, con registro dei superamenti e un intervallo di carico dichiarato | Limiti adeguati sulla base di evidenze di cycle time e di coda con una cadenza | Limiti e capacità coordinati tra i team che condividono le fasi |
| Visibilità delle code | L'attesa è vista solo attraverso i reclami | Lunghezza della coda contata su alcune lavagne | Percentili del tempo in coda per fase mostrati al team responsabile | Crescita netta della coda seguita nel tempo con salvaguardie e tradotta in lavoro finanziato | Tempo in coda nelle fasi condivise ed esterne riportato apertamente a clienti e fornitori |
| Uso nelle decisioni | Richieste di capacità sostenute con aneddoti | Utilizzo citato per giustificare l'organico | Evidenze di coda e di cycle time usate nella pianificazione | Compromessi tra domanda e capacità decisi con i dati nelle revisioni di governance | Domanda plasmata congiuntamente con i clienti usando le distribuzioni dei tempi di attesa |

## Checklist

- [ ] Il confine del sistema per il WIP è scritto, con gli stati iniziale e finale e le esclusioni.
- [ ] Gli stati di attesa e gli stati di lavoro sono stati distinti nel flusso di lavoro.
- [ ] Un'istantanea giornaliera di WIP e coda è acquisita e conservata.
- [ ] Il tempo in coda è riportato come mediana e percentile alto, per fase.
- [ ] Arrivi e uscite sono tracciati ogni settimana, con un diagramma di flusso cumulativo.
- [ ] Esiste un limite di WIP per il sistema e per ogni fase con una coda in crescita.
- [ ] I superamenti del limite sono registrati con una motivazione e rivisti ogni settimana.
- [ ] Una politica definisce il lavoro con urgenza e limita il numero di elementi in corso.
- [ ] Il rapporto di carico del team è stimato a livello di team, mai per persona, con il metodo dichiarato.
- [ ] Il controllo della legge di Little è eseguito ogni mese e le discrepanze sono indagate.
- [ ] Gli stati parcheggiati e bloccati sono contati e la loro età è rivista.
- [ ] Ogni modifica a un confine, a uno stato o a un limite è registrata con data e motivazione.

## Prompt IA

**Verificare il confine e gli stati alla base di un conteggio del WIP.**

```text
Voglio definire il lavoro in corso per [team o servizio]. Gli stati del nostro
flusso di lavoro sono [elenco degli stati con un significato di una riga
ciascuno] e questi elementi sono esclusi: [esclusioni]. Individua le ambiguità
su quali stati contano come in corso, quali sono di attesa e quali sono bloccati.
Suggerisci un confine e un elenco di stati più pulito e dì che cosa la modifica
farebbe al numero del WIP. Non ipotizzare come sia configurato il nostro
strumento e non inventare valori di riferimento. Elenca le tue ipotesi e le
domande a cui devo rispondere.
```

**Eseguire un controllo di coerenza della legge di Little.**

```text
Ecco i dati per [team o servizio] nel periodo [periodo]: WIP medio [valore],
uscite al giorno [valore] e cycle time medio in giorni [valore], usando il
confine [descrizione del confine]. Calcola il rapporto tra WIP medio e uscite per
cycle time e spiega che cosa potrebbe significare una discrepanza dato questo
confine, come elementi parcheggiati, elementi chiusi senza essere stati avviati
o un periodo instabile. Suggerisci controlli che posso fare in [tracker o
strumento ITSM]. Non inventare cifre né soglie. Elenca le tue ipotesi.
```

**Pianificare un primo esperimento sul limite di WIP.**

```text
Il nostro team è [dimensione e ruoli del team] e lavora su [tipo di lavoro]. Il
WIP medio attuale è [valore], con le fasi [elenco delle fasi], e la coda più
lunga è [fase]. Redigi un esperimento a tempo definito per introdurre un limite
di WIP: un'ipotesi, il limite da provare e perché, le misure da osservare
(inclusa almeno una salvaguardia), che cosa conta come eccezione e una data di
revisione. Non indicare un limite universale corretto né valori di riferimento.
Elenca le tue ipotesi e i rischi.
```

**Individuare il probabile collo di bottiglia dai dati per fase.**

```text
Per [team o servizio], ecco il tempo in coda e il WIP per fase nel periodo
[periodo]: [tabella con fase, tempo in coda mediano, 85° percentile del tempo in
coda, elementi in attesa e note sulla capacità]. Ordina le fasi come candidate
al vincolo, spiega il ragionamento in linguaggio semplice e suggerisci un
esperimento a basso costo per la candidata principale e una misura che mostri
che ha funzionato. Non inventare dati né benchmark. Elenca le tue ipotesi e quali
dati aggiuntivi cambierebbero la classifica.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare quale argomento definisce una misura di flusso o di capacità che si sta aggiungendo e la salvaguardia che dovrebbe affiancarla.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una metrica modificata nomini i propri cronometri, il confine, il vettore di manipolazione e la salvaguardia.

## Punti chiave

- L'attesa domina il tempo trascorso, perciò si misurino WIP, lunghezza della coda e tempo in coda per fase e si riportino mediane e percentili alti.
- La legge di Little lega insieme WIP medio, throughput e cycle time, il che ne fa una prova rapida della coerenza delle definizioni.
- Il ritardo cresce ripidamente quando l'utilizzo si avvicina alla piena capacità, perciò si pianifichi un margine dove la domanda è variabile.
- Si limiti il WIP per l'intero sistema, si trattino i superamenti come stimoli per una conversazione e ci si guardi dal ridenominare il lavoro per restare sotto il limite.
- Si osservino arrivi e uscite, poiché una coda che cresce settimana dopo settimana richiede una decisione sulla capacità o sulla domanda.
- Si misurino team e servizi, mai le persone, e si concordi un confine scritto prima di confrontare i numeri.

## Riferimenti e letture di approfondimento

1. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
2. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
3. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
6. Hopp, W. J., and Spearman, M. L., *Factory Physics*, 3rd edition, Waveland Press, 2011.
7. Kleinrock, L., *Queueing Systems, Volume 1: Theory*, Wiley, 1975.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
10. Wikipedia, [Work in process](https://en.wikipedia.org/wiki/Work_in_process).
11. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
12. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
13. Wikipedia, [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula).
14. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
15. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
16. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
17. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
