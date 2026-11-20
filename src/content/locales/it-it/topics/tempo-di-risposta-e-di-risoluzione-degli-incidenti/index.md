# Tempo di risposta e di risoluzione degli incidenti

**Le misure di tempo per gli incidenti descrivono quanto attendono gli utenti in ciascuna fase: le riporti quindi come distribuzioni con i cronometri messi per iscritto, mai come una sola media, e abbini ogni numero di velocità a una misura che indichi se la correzione ha retto.**

## Panoramica e motivazione

Un incidente, nell'IT service management (ITSM), è un'interruzione non pianificata di un servizio o una riduzione della sua qualità. La [gestione degli incidenti](https://en.wikipedia.org/wiki/Incident_management) è la pratica che ripristina il servizio normale nel modo più rapido compatibile con la sicurezza. In ITIL 4 la pratica si chiama gestione degli incidenti e rientra tra le pratiche di service management del framework [ITIL](https://en.wikipedia.org/wiki/ITIL). Le sue controparti agili sono l'abitudine del team di trattare il lavoro non pianificato come un flusso di lavoro di prima classe, e le pratiche di reperibilità e di revisione senza attribuzione di colpe che provengono dalla [site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), la disciplina che gestisce i servizi con metodi di ingegneria del software.

Il tempo è il modo più naturale di descrivere un incidente, e il più frequentemente usato male. Un singolo incidente attraversa diverse fasi. Qualcosa si rompe, un monitor o un utente se ne accorge, una persona prende in carico l'avviso, qualcuno comincia a lavorare, il servizio viene ripristinato per gli utenti e il ticket viene chiuso una volta che la causa è stata gestita o rinviata. Ogni intervallo tra due di questi eventi è una misura distinta, con un responsabile distinto, una causa di ritardo distinta e un rimedio distinto. Chiamare tutto «tempo di risoluzione» nasconde dove risiede il ritardo.

Questo argomento tratta le misure di tempo trascorso che seguono un incidente dall'inizio alla fine: **tempo di rilevamento**, **tempo di presa in carico**, **tempo di prima risposta**, **tempo di ripristino** e **tempo di risoluzione**. Tratta inoltre l'anzianità degli incidenti aperti, il numero di passaggi di mano di un incidente e i problemi statistici della sintesi più nota, il tempo medio di ripristino o di risoluzione (MTTR). Conteggi, categorie e priorità sono trattati altrove (si veda l'Argomento 3.2 «Volume e priorità degli incidenti»). Gli incidenti grandi e insoliti hanno misure proprie (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori»).

### Termini usati in questo argomento

- **Tempo di rilevamento (TTD).** Tempo trascorso da quando il guasto ha iniziato a interessare gli utenti fino a quando l'organizzazione ne è venuta a conoscenza, tramite monitoraggio o segnalazione di un utente.
- **Tempo di presa in carico (TTA).** Tempo trascorso da quando l'avviso o il ticket viene sollevato fino a quando una persona o un team indicato ne accetta la responsabilità.
- **Tempo di prima risposta.** Tempo trascorso da quando l'incidente viene registrato fino alla prima azione o messaggio significativo rivolto all'utente interessato. Una risposta automatica non conta.
- **Tempo di ripristino.** Tempo trascorso dall'inizio dell'impatto sugli utenti fino a quando gli utenti possono di nuovo usare il servizio, anche se la causa sottostante è solo aggirata.
- **Tempo di risoluzione.** Tempo trascorso da quando l'incidente viene registrato fino alla sua chiusura, avvenuta perché il servizio è ripristinato e l'utente ha confermato o ha avuto una ragionevole possibilità di confermare.
- **Tempo medio di ripristino o di risoluzione (MTTR).** La media aritmetica di una di queste durate su un insieme di incidenti. La lettera R si legge come riparazione, recupero, ripristino, risoluzione o risposta a seconda di chi parla, il che è il primo problema dell'abbreviazione. L'[articolo di Wikipedia sul tempo medio di riparazione](https://en.wikipedia.org/wiki/Mean_time_to_repair) elenca le varianti.
- **Accordo sul livello di servizio (SLA).** Un [accordo sul livello di servizio](https://en.wikipedia.org/wiki/Service-level_agreement) è un impegno tra un fornitore e un cliente sul livello di servizio, che include spesso obiettivi di tempi di risposta e di risoluzione per priorità.

### Perché la media è una sintesi scadente

Le durate degli incidenti non sono simmetriche. La maggior parte degli incidenti è breve, pochi sono molto lunghi, e i lunghi dominano qualsiasi media. Durate di questo tipo sono spesso ben descritte da una forma asimmetrica a destra, come la [distribuzione log-normale](https://en.wikipedia.org/wiki/Log-normal_distribution). In dati asimmetrici la media può collocarsi ben sopra ciò che appare un incidente tipico, e una sola lunga interruzione può spostarla più di un mese di miglioramenti.

Il team SRE di Google ha pubblicato un'analisi di questo problema. Sostiene che, per gli insiemi di dati sugli incidenti da esso studiati, la dispersione delle durate degli incidenti è abbastanza ampia da far sì che l'MTTR possa nascondere miglioramenti reali o mostrare cambiamenti che sono rumore, e raccomanda di guardare invece alle distribuzioni (Davidovič, 2021, elencato nei riferimenti). Il ragionamento poggia su statistiche ben note, perciò potete verificarlo sui vostri dati senza fidarvi della conclusione di nessuno: tracciate le durate dei vostri incidenti, calcolate la media e la [mediana](https://en.wikipedia.org/wiki/Median) e vedete quanto distano (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

L'alternativa sono i [percentili](https://en.wikipedia.org/wiki/Percentile). La mediana dice quanto ha atteso un utente tipico. L'85º o il 95º percentile dice quanto hanno atteso gli sfortunati. I clienti ricordano l'attesa lunga, non la media, perciò un impegno espresso in percentili come «nove incidenti su dieci di questa priorità ripristinati entro un tempo dichiarato» corrisponde molto meglio alla loro esperienza di una media.

### Come differiscono le visioni ITIL e agile

La visione ITIL tende a partire da una priorità e da un obiettivo. Impatto e urgenza stabiliscono una priorità, la priorità stabilisce gli obiettivi di tempo di risposta e di risoluzione, e un accordo sul livello di servizio può associare conseguenze al mancato rispetto. Ciò è ordinato e facile da verificare, e incline alla manipolazione che gli obiettivi invitano (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

La visione agile e SRE parte dall'impatto sugli utenti e dal flusso. Si chiede con quale rapidità il team limita il danno, quanta parte del tempo trascorso di un incidente è stata lavoro attivo e quanta attesa, e che cosa il team ha imparato. Preferisce misure di impatto (utenti interessati, minuti di servizio degradato) a misure di stato del ticket, e tratta il cronometro del ticket come un indicatore sostitutivo comodo ma imperfetto. Le due visioni sono compatibili. Usi la struttura di priorità di ITIL per decidere che cosa misurare e per chi, e usi il pensiero in termini di flusso e di impatto per decidere se il numero significa qualcosa.

## Principi chiave

- **Nominare la fase, non la «risoluzione».** Rilevamento, presa in carico, risposta, ripristino e risoluzione sono domande diverse con responsabili diversi. Riportare ciascuna con il proprio nome.
- **Mettere per iscritto entrambi i cronometri.** Ogni misura di tempo indica quale evento la fa partire, quale la ferma e quali stati la mettono in pausa. La maggior parte della manipolazione risiede in questi confini.
- **Riportare distribuzioni.** Mostrare la mediana, un percentile alto e l'anzianità dell'incidente aperto più vecchio. Evitare una media isolata, che i dati asimmetrici rendono inaffidabile.
- **Misurare il ripristino separatamente dalla chiusura.** Agli utenti importa quando il servizio è tornato. Il ticket può chiudersi più tardi, dopo che la causa è stata gestita.
- **Abbinare velocità e durata nel tempo.** Un ripristino rapido che lo stesso incidente annulla il giorno dopo non è un miglioramento. Mostrare tassi di ricorrenza e di riapertura accanto a ogni misura di tempo.
- **Descrivere team, servizi e sistemi.** Non classificare mai i singoli operatori o ingegneri in base al tempo di risposta o di risoluzione.
- **Segmentare prima di confrontare.** Confrontare cose omogenee, per priorità e per servizio, perché un numero combinato mescola reimpostazioni di password e guasti di database.

## Definizioni delle metriche

Ogni riga indica i propri cronometri. Il tempo di calendario e il tempo lavorativo sono diversi: indicate quale usate. Dove una misura usa i percentili, la tabella riporta il 50º e il 95º, e i team possono aggiungere l'85º.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tempo di rilevamento | Per quanto tempo un guasto ha interessato gli utenti prima che l'organizzazione lo sapesse | Il cronometro parte al primo momento di impatto sugli utenti (ricavato dai dati di monitoraggio o dall'inizio dell'impatto confermato registrato nella revisione); si ferma al primo avviso o alla prima segnalazione dell'utente. Riportato come mediana e 95º percentile per servizio. Gli incidenti senza inizio noto sono contati e riportati separatamente, non scartati | minuti | Piattaforma di monitoraggio e avvisi; registrazione dell'incidente con un campo di inizio dell'impatto | Gestione degli incidenti; monitoraggio e gestione degli eventi | Lavoro sull'osservabilità e sulla qualità degli avvisi (si veda l'Argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi») | Mensile |
| Tempo di presa in carico | Quanto attende un avviso o un ticket sollevato prima che una persona se ne assuma la responsabilità | Il cronometro parte quando l'avviso scatta o il ticket viene registrato; si ferma quando una persona o un team indicato lo accetta. L'assegnazione automatica non ferma il cronometro. Riportato come mediana e 95º percentile per priorità | minuti | Strumento di paging; storico delle assegnazioni dello strumento ITSM | Gestione degli incidenti; service desk | Risposta di reperibilità in una rotazione SRE | Mensile |
| Tempo di prima risposta | Quanto attende l'utente una prima risposta umana e utile | Il cronometro parte quando l'incidente viene registrato; si ferma al primo messaggio o azione umana che affronta la segnalazione. Prese in carico automatiche e ricevute standardizzate sono escluse. Cronometro in orario lavorativo dichiarato | minuti od ore lavorative | Registro delle comunicazioni dello strumento ITSM | Service desk; gestione degli incidenti | Feedback tempestivo all'utente, come in un accordo di lavoro | Settimanale |
| Tempo di ripristino | Per quanto tempo gli utenti sono rimasti senza un servizio funzionante | Il cronometro parte all'inizio dell'impatto sugli utenti; si ferma quando gli utenti possono di nuovo usare il servizio, anche con una soluzione alternativa o un rollback. La correzione successiva della causa non lo allunga. Riportato come mediana e 95º percentile per priorità e servizio | minuti od ore | Registrazione dell'incidente con timestamp di inizio impatto e di ripristino; monitoraggio | Gestione degli incidenti | Tempo medio di ripristino nei termini DORA, letto come distribuzione (si veda l'Argomento 2.8 «Metriche DORA») | Mensile |
| Tempo di risoluzione | Per quanto tempo la registrazione dell'incidente è rimasta aperta fino alla chiusura | Il cronometro parte quando l'incidente viene registrato; si ferma quando viene chiuso dopo il ripristino e la conferma dell'utente o un'attesa ragionevole. Il tempo in «in attesa del cliente» è mostrato come quota separata e riportata, e non sottratto dalla cifra principale. Riportato come mediana e 95º percentile per priorità | ore od ore lavorative | Storico degli stati dello strumento ITSM | Gestione degli incidenti | Cycle time del lavoro non pianificato (si veda l'Argomento 2.2 «Lead time, cycle time ed efficienza del flusso») | Mensile |
| Anzianità dell'incidente aperto più vecchio | Da quanto tempo è aperto l'incidente aperto da più tempo | Adesso meno il momento di registrazione, per ogni incidente aperto, elencando i più vecchi per priorità. Gli stati di pausa non vengono sottratti | giorni | Elenco degli incidenti aperti dello strumento ITSM | Gestione degli incidenti | Età dell'elemento di lavoro sulla lavagna del team (si veda l'Argomento 2.1 «Misure del flusso») | Settimanale |
| Quota di tempo attivo | La proporzione del tempo trascorso di un incidente spesa in lavoro attivo anziché in attesa | Somma del tempo negli stati attivi / tempo totale da registrazione a chiusura, per gli incidenti chiusi nel periodo. Gli stati attivi sono quelli in cui una persona lavora sull'incidente; gli stati di attesa sono elencati nella definizione | percentuale | Storico degli stati dello strumento ITSM | Gestione degli incidenti | Efficienza del flusso (si veda l'Argomento 2.2 «Lead time, cycle time ed efficienza del flusso») | Trimestrale |
| Numero di riassegnazioni | Quante volte un incidente cambia team responsabile prima del ripristino | Conteggio dei cambi di gruppo di assegnazione dalla registrazione al ripristino, sintetizzato come mediana e quota di incidenti con tre o più. Contato per servizio e priorità, mai per operatore | conteggio | Storico delle assegnazioni dello strumento ITSM | Gestione degli incidenti; service desk | Numero di passaggi di consegne (si veda l'Argomento 9.3 «Metriche di collaborazione e passaggi di consegne») | Mensile |

Due note sui dati. Primo, un tempo di ripristino vale quanto il suo momento di inizio. Molte registrazioni di incidenti riportano quando qualcuno ha digitato il ticket, il che può ritardare di ore rispetto al vero inizio dell'impatto. Se il Suo strumento non ha un campo di inizio dell'impatto, ne aggiunga uno e tratti gli inizi stimati come stime (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»). Secondo, quando confronta periodi, mantenga le stesse definizioni di priorità, altrimenti la linea di tendenza rifletterà la riclassificazione.

## Raccomandazioni

### Definire i cronometri

**1. Scriva una scheda dei cronometri per ciascuna misura di tempo.** Per ogni fase elenchi l'evento di avvio, l'evento di arresto, gli stati che mettono in pausa il cronometro, la base temporale (calendario od orario lavorativo) e le esclusioni. La conservi nel registro delle metriche (si veda l'Argomento 1.4 «Governance e responsabilità delle metriche»).

**2. Separi il ripristino dalla chiusura.** Registri il momento in cui il servizio è tornato per gli utenti come timestamp a sé, distinto da quello in cui il ticket è stato chiuso. Il ripristino è ciò che gli utenti sentono, e la chiusura comprende verifica, documentazione e gestione della causa. I team che usano un solo timestamp per entrambi sono premiati per chiudere i ticket troppo presto o penalizzati per un seguito accurato.

**3. Registri l'inizio dell'impatto, non solo il momento di registrazione.** Chieda a chi risponde di indicare quando gli utenti hanno sentito per la prima volta l'effetto, usando dove possibile i dati di monitoraggio. Contrassegni il campo come stimato quando lo è. Il tempo di rilevamento non ha senso senza di esso, e il tempo di ripristino è distorto dalla sua assenza.

**4. Limiti gli stati di pausa e ne riporti l'uso.** L'attesa di un cliente o di un fornitore è a volte legittima. Consenta un elenco breve e nominato di stati di pausa, richieda un motivo e mostri la quota di tempo dell'incidente trascorsa in ciascuno. Una quota crescente di tempo in pausa è un segno di deriva, non di velocità.

### Riportare con onestà

**5. Sostituisca la media con la mediana e un percentile alto.** Mostri il 50º e il 95º percentile per ciascuna fase, per priorità, come serie temporale. Mostri il numero di incidenti dietro ogni punto, perché un percentile su dieci incidenti è una cifra debole. Dove i conteggi sono piccoli, tracci i singoli incidenti come punti e rinunci alla linea di sintesi.

**6. Mostri l'anzianità degli incidenti aperti più vecchi.** Un grafico delle durate degli incidenti chiusi è cieco rispetto agli incidenti ancora aperti, che sono i peggiori. Elenchi ogni settimana gli incidenti aperti più vecchi per priorità. È difficile migliorarla senza completare il lavoro, perciò è un utile complemento a qualsiasi grafico del tempo di risoluzione.

**7. Segmenti per priorità e per servizio.** Un tempo di risoluzione combinato sale quando la composizione si sposta verso incidenti complessi, anche se ogni tipo di incidente è gestito più rapidamente. Confronti all'interno di una priorità e di un servizio, e mostri la composizione accanto al tempo (si veda l'Argomento 3.2 «Volume e priorità degli incidenti»). Non tragga conclusioni da un mese in cui la composizione è cambiata.

**8. Usi limiti di controllo per separare il segnale dal rumore.** Le durate degli incidenti variano molto da una settimana all'altra senza che nulla cambi. Un grafico di controllo, con limiti calcolati su un periodo stabile, mostra quando uno spostamento è abbastanza grande da meritare una spiegazione (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

### Abbinare velocità e durata nel tempo

**9. Mostri i tassi di riapertura e di ricorrenza accanto a ogni misura di tempo.** Il tasso di riapertura è la quota di incidenti riaperti entro una finestra dichiarata. La ricorrenza è lo stesso servizio e lo stesso sintomo che ricompaiono entro una finestra. Se il tempo di ripristino cala mentre la ricorrenza sale, il team sta applicando rattoppi veloci. Invii gli incidenti ricorrenti alla gestione dei problemi (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»).

**10. Misuri attese e passaggi di consegne, perché è lì che va il tempo.** Per la maggior parte dei servizi, gran parte del tempo trascorso di un incidente è attesa di una persona, di una decisione o di un fornitore, anziché lavoro. La quota di tempo attivo e il numero di riassegnazioni mostrano dove guardare. Il rimedio a un lungo tempo di risoluzione è spesso una regola di instradamento più chiara o una reperibilità condivisa, non una digitazione più veloce.

**11. Usi obiettivi sui percentili, con una persona nel circuito.** Se Le serve un obiettivo, lo enunci come impegno in percentili per una priorità, come «nove incidenti su dieci di priorità 2 ripristinati entro un tempo dichiarato», e lo concordi con le persone che dovranno rispettarlo. Riveda i mancati rispetti come domande sul sistema, non come colpe di chi è in reperibilità (si veda l'Argomento 5.1 «Metriche SLA, OLA e XLA»).

**12. Chieda agli utenti dell'esperienza.** Un breve sondaggio su un campione di incidenti chiusi e la lettura dei commenti diranno se il numero corrisponde a come è stata vissuta l'attesa. Agli utenti importa spesso più una comunicazione tempestiva che il minuto esatto del ripristino (si veda l'Argomento 6.1 «Metriche di soddisfazione del cliente»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tempo di rilevamento | Fissare l'inizio dell'impatto più tardi di quando è stato; allargare le soglie degli avvisi in modo che meno guasti contino come incidenti; contare solo gli incidenti che il monitor ha colto | Quota di incidenti segnalati per la prima volta dagli utenti anziché dal monitoraggio; revisione periodica delle stime di inizio dell'impatto rispetto ai dati di monitoraggio |
| Tempo di presa in carico | Assegnare o prendere in carico automaticamente per fermare il cronometro; prendere in carico l'avviso e poi non fare nulla | Tempo di prima risposta e tempo di ripristino per gli stessi incidenti; campione di avvisi presi in carico senza attività successiva |
| Tempo di prima risposta | Inviare una risposta standardizzata o di una parola per fermare il cronometro | Revisione di un campione di prime risposte per verificarne la sostanza; contatti ripetuti e commenti dei sondaggi |
| Tempo di ripristino | Dichiarare il servizio ripristinato prima che gli utenti possano usarlo; ripristinare sopprimendo il sintomo; registrare le interruzioni come manutenzione pianificata | Ricorrenza entro una finestra; impatto segnalato dagli utenti dopo l'ora di ripristino; quota di incidenti rietichettati a posteriori |
| Tempo di risoluzione | Spostare i ticket in «in attesa del cliente» o «sospeso»; chiudere dopo un solo tentativo di contatto; dividere un incidente in figli per chiudere in anticipo il padre | Quota di tempo negli stati di pausa; tasso di riapertura; anzianità dell'incidente aperto più vecchio; lettura di un campione di note di chiusura |
| Anzianità dell'incidente aperto più vecchio | Chiudere e riaprire il ticket più vecchio; riclassificarlo come problema o richiesta per toglierlo dall'elenco | Collegare i duplicati agli originali e riportare l'anzianità collegata; conteggio degli incidenti convertiti in problemi o richieste in ciascun periodo |
| Quota di tempo attivo | Registrare lavoro breve e privo di senso per contrassegnare il tempo come attivo; passare a stati attivi senza sforzo | Confrontare il tempo attivo con esiti come il tempo di ripristino; campione di note di lavoro |
| Numero di riassegnazioni | Riaprire sotto lo stesso team anziché passare il lavoro; passare il lavoro tramite un canale laterale in modo che lo strumento non mostri alcun passaggio | Tempo di ripristino e soddisfazione degli utenti; osservazione periodica di come il lavoro si muove tra i team |

Una lettura sana mostra mediane e percentili di coda che si muovono insieme, una quota ridotta e stabile di tempo in pausa, pochi incidenti segnalati per primi dagli utenti, ricorrenza in calo e commenti dei sondaggi che corrispondono ai dati dei ticket. Tratti un miglioramento nella cifra principale che arriva da solo come uno stimolo a una revisione della manipolazione.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Tempo medio di ripristino | Familiare; un solo numero; facile da seguire nel tempo | Dominato da pochi incidenti lunghi; nasconde i cambiamenti reali; scadente per campioni piccoli |
| Mediana più un percentile alto | Descrive l'esperienza tipica e quella sfortunata; resiste ai valori anomali | Richiede abbastanza incidenti; due numeri da spiegare |
| Tracciare ogni incidente | Mostra la forma completa e i valori anomali; onesto con volumi bassi | Più difficile da leggere con volumi alti; richiede un facilitatore |
| Obiettivi per priorità | Aspettative chiare; supporta contratti ed escalation | Invita alla riclassificazione e alla pausa dei cronometri; può spingere lo sforzo verso il confine dell'obiettivo |
| Misure del cronometro del ticket | Economiche, disponibili in ogni strumento ITSM | Misurano il ticket, non l'esperienza dell'utente; sensibili al flusso di stati |
| Misure basate sull'impatto | Vicine a ciò che gli utenti sentono; resistono ai trucchi sui ticket | Richiedono dati di monitoraggio e un campo di inizio dell'impatto; più difficili da verificare |

La risposta pragmatica è mantenere il cronometro del ticket perché ogni strumento lo ha, aggiungere un timestamp di ripristino basato sull'impatto dove il monitoraggio lo consente e usare distribuzioni per entrambi. La media è accettabile come descrizione approssimativa di un insieme unico, stabile e ampio di incidenti simili, e non dovrebbe mai essere l'unico numero sulla pagina.

## Domande da discutere con il team

**1. Quale fase di un incidente richiede più tempo per noi, e come lo sappiamo?**
Disegni su una lavagna la cronologia dell'incidente con le fasi dall'inizio dell'impatto alla chiusura. Prenda gli ultimi dieci incidenti e segni quanto è durata ciascuna fase, usando i dati dello strumento e la memoria di chi ha risposto. Chi facilita cerchi la fase in cui il tempo si concentra, che è spesso l'attesa di un passaggio di consegne o di una decisione, non il lavoro tecnico. Concordi quale fase merita attenzione per prima.

**2. Dove partono e si fermano i nostri cronometri, e chi lo ha deciso?**
Chieda a ciascuno di dire quando ritiene che un incidente «sia iniziato» e quando «sia finito». Le risposte differiranno, e le differenze sono il risultato. Le confronti con i campi dello strumento e con il flusso di stati. Registri le definizioni concordate nel registro delle metriche e annoti dove lo strumento non è ancora in grado di supportarle.

**3. Che cosa mostrerebbero le nostre mediane e i nostri 95º percentili che la nostra media nasconde?**
Prima della riunione calcoli media, mediana e 95º percentile degli incidenti dell'ultimo trimestre per priorità. Li mostri affiancati e tracci le durate. Chieda che cosa il team concluderebbe da ciascuno. Chi facilita noti se uno o due incidenti spostano la media e discuta se il team ritiene che la mediana rappresenti l'attesa di un utente tipico.

**4. Quanto tempo trascorriamo in attesa anziché al lavoro, e perché?**
Scelga tre incidenti lunghi e ne ripercorra lo storico degli stati. Conti le ore negli stati attivi e le ore negli stati di attesa e annoti chi o che cosa si attendeva. Chieda quali attese potrebbero essere accorciate da una decisione, da un percorso di escalation più chiaro o da una reperibilità condivisa.

**5. Se ci venisse chiesto di ridurre di un quarto il tempo di risoluzione, come lo faremmo senza aiutare gli utenti?**
È la revisione della manipolazione in miniatura. Elenchi ogni mossa che migliorerebbe il numero senza migliorare il servizio, come mettere in pausa il cronometro, chiudere prima del tempo o rietichettare le priorità. Per ciascuna mossa chieda se una salvaguardia la coglierebbe. L'elenco è l'inizio della colonna dei vettori di manipolazione e mostra dove le definizioni vanno rese più rigorose.

**6. Come sappiamo che un ripristino più rapido è stato reale?**
Chieda le prove: ricorrenza, riaperture, commenti degli utenti ed eventuali incidenti successivi con lo stesso sintomo. Esamini un miglioramento recente e chieda se ha retto un mese dopo. Chi facilita orienti il gruppo verso correzioni durature. Concluda decidendo quale misura di durata nel tempo entra nella dashboard.

## Quattro prospettive

### Team di prodotto e di consegna

I team di prodotto che gestiscono i propri servizi vedono il tempo degli incidenti come un costo del lavoro non pianificato che sposta il lavoro pianificato. Tracciino quanta parte di ciascun periodo di flusso è assorbita dagli incidenti e trattino gli incidenti ripetuti come voci di backlog per il team responsabile. Le pratiche di rilascio che rendono rapido il rollback accorciano il ripristino, perciò il tempo degli incidenti è in parte una misura di consegna (si veda l'Argomento 2.9 «Lavoro operativo e lavoro non pianificato»).

### Team di servizio e operations

I team operativi sono proprietari dei cronometri e sentono la pressione degli obiettivi. Dovrebbero pubblicare la scheda dei cronometri, verificare l'uso degli stati di pausa, riportare mediane e percentili di coda per priorità e tenere un elenco settimanale degli incidenti aperti più vecchi. Il carico di reperibilità e la qualità degli avvisi plasmano i tempi di presa in carico e di rilevamento, perciò vanno considerati insieme (si veda l'Argomento 5.7 «Metriche di toil e reperibilità»).

### Leadership e governance

I responsabili dovrebbero chiedere quale fase è la più lenta e che cosa si sta facendo al riguardo, non perché un numero è rosso. Dovrebbero attendersi una rendicontazione in percentili, una misura di durata nel tempo accanto a ogni misura di velocità e una spiegazione quando le definizioni cambiano. I finanziamenti per monitoraggio, runbook e lavoro sui problemi spesso rendono più della pressione su chi risponde, perché riducono il ritardo che chi risponde non può controllare.

### Clienti e utenti

Gli utenti vivono l'attesa, la qualità della comunicazione e se il problema ritorna. Raramente vedono i nomi delle fasi. Si dia loro una prima risposta onesta, si dica che cosa aspettarsi e li si aggiorni secondo un calendario. I loro commenti nei sondaggi e i contatti ripetuti sono la migliore verifica del fatto che il cronometro del ticket dica la verità.

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni gestisce una piattaforma ordini, un servizio di account cliente e un sistema interno di magazzino. I team di prodotto sono responsabili dei propri servizi e condividono una rotazione di reperibilità con un piccolo gruppo operativo. Tutti i numeri di questo esempio sono illustrativi.

La direzione fissa l'obiettivo di un «tempo medio di risoluzione inferiore a quattro ore» per gli incidenti di priorità 2. Nel primo trimestre la dashboard mostra una media di 3,8 ore e l'obiettivo sembra raggiunto. Il personale del magazzino dice che alcune interruzioni sembrano durare tutto il giorno. La responsabile operativa traccia i 41 incidenti di priorità 2 (illustrativo) del trimestre e trova una mediana di 1,5 ore e un 95º percentile di 11 ore. Tre incidenti spiegano la maggior parte della coda lunga.

Ripercorre i tre incidenti lunghi. Ciascuno ha trascorso la maggior parte del tempo in «in attesa del fornitore» o «in attesa del cliente». In due, il ticket era stato chiuso e riaperto come nuovo incidente quando l'originale aveva «violato» l'obiettivo, il che aveva azzerato il cronometro. Un terzo ha comportato quattro riassegnazioni tra team nell'arco di due giorni. Un campione di note di chiusura mostra che 6 ticket su 30 esaminati (illustrativo) erano stati chiusi dopo un solo tentativo di raggiungere l'utente.

Il team apporta quattro modifiche. Aggiunge un campo di inizio dell'impatto e un timestamp di ripristino al modulo dell'incidente. Riporta mediana, 85º e 95º percentile per priorità, e gli incidenti aperti più vecchi ogni settimana. Mostra nella stessa pagina la quota di tempo negli stati di pausa e il tasso di ricorrenza. E collega i ticket riaperti ai loro originali, così che l'anzianità si trasferisca.

Alla revisione successiva la media principale è salita a 4,6 ore perché i ticket riaperti ora contano per intero. Il team spiega l'aumento alla direzione come una correzione. Il 95º percentile e il ticket aperto più vecchio sono ora i numeri su cui lavorano, e il numero di riassegnazioni indica una lacuna di instradamento tra il servizio ordini e il sistema di magazzino. Concordano di aggiungere un alias di reperibilità condiviso e di rivederne l'effetto nel trimestre successivo anziché fissare subito un nuovo obiettivo.

## Lente di settore

**Startup.** Il volume è basso, quindi i percentili sono rumorosi e un grafico di ciascun incidente è meglio di una sintesi. Spesso una sola persona rileva, risponde e ripristina, quindi la separazione delle fasi conta meno di una cronologia scritta di ciascun incidente. Aggiungete una nota sull'inizio dell'impatto a ogni resoconto post-incidente e calcolate semplici mediane quando gli incidenti saranno abbastanza.

**Piccola impresa.** Un fornitore di servizi gestiti o un singolo generalista IT possono gestire gli incidenti, e il contratto del fornitore può definire obiettivi di risposta e di risoluzione. Leggete con attenzione i cronometri contrattuali, perché spesso differiscono dall'esperienza dei vostri utenti. Tenete un breve registro di inizio dell'impatto e ripristino per gli incidenti che contano e chiedete al fornitore le registrazioni sottostanti, poiché una cifra di sintesi nasconde i cronometri.

**Grande impresa.** Molti team, fornitori e schemi di priorità rendono il confronto allettante e fuorviante. Standardizzate le definizioni dei cronometri e i significati delle priorità in tutta l'organizzazione, pubblicate distribuzioni anziché medie e segmentate per servizio. Osservate la deriva degli stati di pausa e la riclassificazione, che crescono con il numero di livelli di rendicontazione.

**Pubblica amministrazione e settore pubblico.** Contratti, rendicontazione prevista dalla legge e audit possono fissare i cronometri e le definizioni di priorità. Rispettate tali obblighi come scritti e mantenete accanto a essi una seconda vista orientata all'utente, in modo che la conformità non nasconda una cattiva esperienza. Siate aperti sulle definizioni e sulle correzioni quando una regola del cronometro cambia (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

Il costo di questo argomento è soprattutto progettazione e disciplina. Servono alcune ore per scrivere le schede dei cronometri, qualche configurazione per aggiungere un campo di inizio dell'impatto e un timestamp di ripristino, e uno sforzo modesto per costruire report in percentili. Dove lo strumento ITSM o una piattaforma di monitoraggio detengono già i timestamp, l'estrazione è un'attività una tantum. Il costo ricorrente è una revisione mensile e un campione trimestrale di incidenti chiusi.

Il ritorno deriva da decisioni migliori e meno rilavorazioni. La rendicontazione delle distribuzioni mostra se un miglioramento ha funzionato, e quella per fase dirige lo sforzo verso il ritardo reale, come passaggi di consegne, lacune di rilevamento o attese dei fornitori. Le misure di durata nel tempo evitano il falso risparmio dei rattoppi veloci che ritornano come incidenti ripetuti. Misuri la Sua base di partenza per un trimestre, apporti una modifica e confronti le distribuzioni.

## Anti-pattern e insidie

- **Un singolo MTTR sulla dashboard direzionale.** La media di dati asimmetrici è fuorviante. Mostri la mediana, un percentile alto e l'incidente aperto più vecchio, e indichi quanti incidenti stanno dietro a ciascun punto.
- **Mescolare priorità e servizi.** Uno spostamento della composizione sembra un cambiamento di prestazioni. Segmenti per priorità e servizio e mostri la composizione.
- **Fermare il cronometro con gli stati di pausa.** Il tempo svanisce in «in attesa» e «sospeso». Elenchi gli stati consentiti, richieda i motivi e riporti la quota di tempo in ciascuno.
- **Chiudere e riaprire i ticket.** Azzera l'anzianità e nasconde l'incidente lungo. Colleghi i ticket riaperti ai loro originali e riporti l'anzianità collegata.
- **Usare un solo timestamp per ripristino e chiusura.** I team sono allora premiati per la chiusura prematura o penalizzati per un seguito accurato. Registri entrambi e riporti entrambi.
- **Classificare operatori o ingegneri in base al tempo di risoluzione.** Premia i ticket facili e la scelta selettiva, e scoraggia l'aiuto reciproco e l'escalation. Riporti solo per team e servizio.
- **Obiettivi senza misure di durata nel tempo.** Un rattoppo veloce che fallisce domani sembra un successo. Mostri ricorrenza e tasso di riapertura accanto a ogni obiettivo.
- **Trattare piccoli campioni come tendenze.** Un 95º percentile ricavato da una manciata di incidenti è una congettura. Tracci i singoli incidenti e attenda più dati prima di tracciare una linea.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizioni e cronometri | Ognuno misura in modo diverso; un solo «tempo di risoluzione» | Cronometri scritti per alcuni team; fasi parzialmente separate | Una scheda dei cronometri per tutte le fasi, con gli stati di pausa elencati | Definizioni riviste e cambiamenti registrati con i motivi | Definizioni allineate con fornitori e clienti, riviste quando smettono di orientare le decisioni |
| Qualità dei dati | Note manuali; inizio dell'impatto sconosciuto | Timestamp dello strumento per ticket registrato e chiuso | Inizio dell'impatto e ripristino registrati per gli incidenti prioritari | Dati verificati a campione; stime segnalate | Dati di monitoraggio e ITSM uniti automaticamente e affidabili tra i team |
| Pratica statistica | Solo media | Media e mediana mostrate | Mediana e percentile alto per priorità e servizio | Limiti di controllo usati; misure di durata nel tempo abbinate | Distribuzioni collegate all'esperienza dell'utente e usate per decidere dove investire |
| Uso nel miglioramento | Numeri usati per inseguire i singoli | Il team vede i propri numeri | Il team rivede mensilmente i tempi delle fasi e le attese | Le fasi lente portano a lavoro di miglioramento finanziato | Il miglioramento è condiviso tra team e fornitori e le misure evolvono |

## Checklist

- [ ] Ogni fase (rilevamento, presa in carico, risposta, ripristino, risoluzione) ha una regola scritta di avvio, arresto e pausa.
- [ ] Inizio dell'impatto e momento del ripristino sono registrati come campi distinti per gli incidenti prioritari.
- [ ] I report mostrano la mediana e un percentile alto, per priorità e per servizio.
- [ ] È mostrato il numero di incidenti dietro ogni punto riportato.
- [ ] Gli incidenti aperti più vecchi sono elencati ogni settimana.
- [ ] Gli stati di pausa sono un elenco breve e nominato e la loro quota di tempo è riportata.
- [ ] Tasso di riapertura e ricorrenza sono mostrati accanto a ogni misura di tempo.
- [ ] I ticket riaperti sono collegati ai loro originali, così che l'anzianità si trasferisca.
- [ ] Nessuna misura di tempo è usata per classificare singoli operatori o ingegneri.
- [ ] Un campione di incidenti chiusi viene letto ogni trimestre per verificarne l'onestà.
- [ ] I commenti dei sondaggi dei clienti sono letti accanto ai dati dei ticket.

## Prompt IA

**Confrontare la media e i percentili delle durate dei nostri incidenti.**

```text
Incollerò le registrazioni degli incidenti per [servizio o team] relative a
[periodo]. Campi: [elenca campi come ora di registrazione, inizio dell'impatto,
ora di ripristino, ora di chiusura, priorità, storico degli stati]. Calcola la
mediana, l'85º percentile, il 95º percentile e la media di [nome della fase, per
esempio tempo di ripristino] per [priorità] e mostra quanti incidenti stanno
dietro a ciascuna cifra. Descrivi quanto la media differisce dalla mediana e
quali incidenti determinano tale differenza. Non inventare dati né valori di
riferimento. Elenca le tue ipotesi, le righe che hai escluso e tutto ciò che i
dati non hanno potuto dirti.

[incolla i dati degli incidenti privati dei dati personali]
```

**Redigere una scheda dei cronometri per le nostre misure di tempo degli incidenti.**

```text
Redigi una scheda dei cronometri per [nome del team] che copra tempo di
rilevamento, tempo di presa in carico, tempo di prima risposta, tempo di
ripristino e tempo di risoluzione. Il nostro strumento ITSM è [nome dello
strumento], il nostro monitoraggio è [strumento di monitoraggio] e il nostro
flusso di stati è [elenco degli stati]. Per ciascuna fase indica l'evento di
avvio, l'evento di arresto, gli stati di pausa, la base temporale ([calendario
od orario lavorativo]), le esclusioni e un vettore di manipolazione con una
salvaguardia. Contrassegna ogni elemento che hai dovuto ipotizzare ed elenca le
domande a cui devo rispondere per completare la scheda. Non inventare obiettivi.
```

**Trovare dove va il tempo trascorso in alcuni incidenti lunghi.**

```text
Ecco lo storico degli stati di [numero] incidenti lunghi di [servizio]. Per
ciascun incidente elenca il tempo trascorso in ogni stato, contrassegna gli
stati attivi e di attesa secondo questa regola: [quali stati contano come
attivi], e annota ogni riassegnazione tra [team o gruppi]. Riporta gli schemi
tra gli incidenti, non i singoli individui, e suggerisci quale fase merita
attenzione per prima. Non ipotizzare cause che i dati non mostrano. Elenca le
tue ipotesi e quali campi aggiuntivi sarebbero utili.

[incolla gli storici degli stati privati dei dati personali]
```

**Condurre una revisione della manipolazione sui nostri obiettivi di tempo degli incidenti.**

```text
Riportiamo [nome della metrica] per [priorità o servizio], definita come
[definizione con eventi di avvio e arresto]. L'obiettivo è [obiettivo] e il
pubblico è [pubblico]. Elenca modi realistici in cui il numero potrebbe
migliorare senza aiutare gli utenti, come la pausa del cronometro, la chiusura
anticipata, la rietichettatura o la riapertura dei ticket. Per ciascun modo,
proponi una misura o pratica di salvaguardia che lo rivelerebbe e indica come
quella stessa salvaguardia potrebbe essere manipolata. Non inventare valori di
riferimento né statistiche. Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare gli argomenti correlati e le salvaguardie abbinate per una misura di tempo degli incidenti che sta per riportare.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una modifica a questo argomento mantenga coerenti il modello, la tabella di manipolazione e i rimandi.

## Punti chiave

- Un incidente ha delle fasi, e ciascuna fase ha il proprio cronometro, responsabile e rimedio. Nomini la fase che sta misurando.
- Le durate degli incidenti sono asimmetriche, quindi la media è fuorviante. Riporti la mediana, un percentile alto e l'anzianità dell'incidente aperto più vecchio.
- Scriva dove ciascun cronometro parte e si ferma, registri inizio dell'impatto e ripristino separatamente dalla chiusura del ticket e limiti gli stati di pausa.
- Abbini ogni misura di velocità a una misura di durata nel tempo come ricorrenza e tasso di riapertura.
- Descriva team e servizi, mai singoli operatori, e legga un campione di incidenti chiusi per verificare che i numeri siano onesti.

## Riferimenti e letture di approfondimento

1. Davidovič, Š., *Incident Metrics in SRE: Critically Evaluating MTTR and Friends*, O'Reilly Media, 2021, https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
7. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
13. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
14. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
15. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
16. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
