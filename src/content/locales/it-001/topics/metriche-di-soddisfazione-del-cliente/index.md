# Metriche di soddisfazione del cliente

**I punteggi di soddisfazione dicono come le persone hanno vissuto un momento del servizio: si pongano domande brevi e oneste al momento giusto, si leggano i commenti prima dei numeri e non si lasci mai che un punteggio diventi una quota.**

## Panoramica e motivazione

Le misure operative dicono che cosa ha fatto il servizio. Le misure di soddisfazione dicono com'è stato riceverlo. Un ticket può chiudersi entro il tempo obiettivo e lasciare comunque l'utente bloccato, e un servizio ripristinato può comunque lasciare l'impressione di una settimana negativa. I team agili pongono la stessa domanda al termine di ogni incremento: questo ha aiutato le persone a cui era destinato? L'IT service management (ITSM), così come codificato da ITIL, la pone attraverso il valore che un servizio co-crea con i propri clienti. La misurazione della soddisfazione è il punto in cui le due domande si incontrano.

La [soddisfazione del cliente](https://en.wikipedia.org/wiki/Customer_satisfaction) è una misura di quanto prodotti e servizi soddisfino o superino le aspettative dei clienti. Nel lavoro di servizio si raccoglie di solito tramite sondaggio e assume tre forme comuni, trattate in questo argomento:

- **Customer satisfaction score (CSAT):** una valutazione di una specifica interazione o di un servizio, di solito su una scala a cinque punti, riportata come quota di risposte soddisfatte.
- **Net promoter score (NPS):** basato su un'unica domanda su quanto sia probabile che un rispondente raccomandi un'azienda, un prodotto o un servizio. I rispondenti che indicano 9 o 10 sono promotori, quelli che indicano da 0 a 6 sono detrattori, e il punteggio è la percentuale di promotori meno la percentuale di detrattori. Il [net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score) è stato reso popolare da Fred Reichheld in un articolo del 2003 sulla *Harvard Business Review*.
- **Customer effort score (CES):** una valutazione di quanto sforzo sia stato necessario per portare a termine qualcosa, ovvero di quanto fosse semplice. I suoi autori sostenevano che ridurre lo sforzo preveda la fedeltà meglio che deliziare le persone. Si tratti questa affermazione come un'ipotesi da verificare nel proprio contesto, non come un fatto assodato.

In un contesto IT interno il «cliente» è un collega, e il sondaggio è una breve domanda dopo un ticket o un rilascio. I principi sono gli stessi, e i doveri etici sono maggiori, perché le persone interpellate lavoreranno con voi domani.

I sondaggi sono una forma di [metodologia dell'indagine](https://en.wikipedia.org/wiki/Survey_methodology), un campo con decenni di risultati su come la formulazione delle domande, la tempistica e il campionamento modifichino le risposte. I team che la ignorano tendono a produrre punteggi che si muovono per ragioni estranee alla qualità del servizio. Il guardrail derivato dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) vale qui con particolare forza: quando il personale è premiato per un punteggio alto, impara a chiederlo (si veda l'argomento 1.2, La legge di Goodhart e la psicologia delle metriche).

Questo argomento fornisce le definizioni, l'igiene dei dati e le abitudini che mantengono oneste le misure di soddisfazione. L'argomento successivo le estende verso una visione più completa dell'esperienza (si veda l'argomento 6.2, Experience level agreement).

## Principi chiave

- **Si chieda di un momento specifico.** Un sondaggio legato a un ticket chiuso o a un rilascio produce risposte più nitide di una domanda annuale generica.
- **Lo si mantenga breve.** Una valutazione e un commento libero valgono più di dieci domande che la maggior parte delle persone salta.
- **Si leggano i commenti.** Il punteggio dice quanto, le parole dicono perché.
- **Si dichiari chi ha risposto.** Un punteggio privo di tasso di risposta e di composizione dei rispondenti è una voce di corridoio.
- **Si chiuda il ciclo.** Chi segnala un'esperienza negativa dovrebbe ricevere una risposta.
- **Ci si confronti con sé stessi nel tempo.** I benchmark tra aziende diverse nascondono differenze di metodo, pubblico e cultura.
- **Si proteggano i rispondenti.** Si raccolga solo ciò che serve, si dica come sarà usato e non si classifichino gli individui sulla base di esso.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CSAT | Quota di risposte soddisfatte, per un tipo di interazione definito | risposte valutate 4 o 5 su una scala a cinque punti / risposte valide | percentuale | Sondaggio post-interazione legato al ticket o al rilascio | Service desk; gestione degli incidenti; gestione dei livelli di servizio | Feedback della revisione con gli stakeholder | Settimanale o mensile |
| NPS | Promotori meno detrattori per un servizio e un pubblico definiti | percentuale di risposte 9 o 10 meno percentuale di risposte da 0 a 6 | punti, intervallo da -100 a 100 | Sondaggio di relazione, inviato a intervalli fissi | Miglioramento continuo; gestione dei livelli di servizio | Revisione dei risultati di prodotto | Trimestrale |
| CES | Valutazione media, o quota favorevole, di quanto fosse semplice portare a termine qualcosa | risposte favorevoli / risposte valide, oppure valutazione media | percentuale o media | Sondaggio post-interazione legato al ticket, alla richiesta o al rilascio | Gestione delle richieste di servizio; service desk | Feedback di usabilità nel raffinamento | Mensile |
| Tasso di risposta al sondaggio | Quota di utenti invitati che hanno risposto | risposte ricevute / sondaggi consegnati | percentuale | Strumento di sondaggio e sistema di ticketing | Misurazione e rendicontazione | Partecipazione al feedback nelle revisioni | Mensile |
| Copertura dei rispondenti | Quanto la composizione dei rispondenti rispecchia la popolazione degli utenti sulle dimensioni concordate | quota di rispondenti in ciascun gruppo confrontata con la quota di utenti di quel gruppo, per gruppo | punti percentuali | Strumento di sondaggio collegato alla directory degli utenti o ai dati dei ticket | Misurazione e rendicontazione | Mappa degli stakeholder | Trimestrale |
| Quota dei temi nei commenti | Quota di commenti a testo libero assegnati a ciascun tema | commenti nel tema / commenti codificati | percentuale | Commenti del sondaggio codificati | Miglioramento continuo | Temi della retrospettiva | Mensile |
| Tempo di follow-up dei detrattori | Tempo che intercorre tra una valutazione bassa e un contatto documentato con l'utente | timestamp della nota di follow-up meno timestamp della valutazione bassa, mediana e 85° percentile | ore o giorni | Strumento di sondaggio e sistema di ticketing | Gestione degli incidenti; miglioramento continuo | Ciclo di feedback nell'accordo di lavoro | Mensile |

Gli orologi e i confini contano. CSAT e CES contano solo le risposte relative alla specifica interazione, mai l'umore generale. Il tempo di follow-up dei detrattori parte dal momento in cui la valutazione bassa è registrata, non da quando qualcuno la legge per la prima volta. Si escludano i record di prova e le risposte dei membri del team oggetto di misurazione.

## Raccomandazioni

### Progettare lo strumento

**1. Si scelga una domanda per ciascuno scopo.** Si usi il CSAT dopo un'interazione per capire come è andata quell'interazione, il CES dopo qualcosa che l'utente ha dovuto fare per capire dove si trova l'attrito, e l'NPS a intervalli regolari per capire la relazione complessiva. Mescolare i tre in un unico modulo invita alla fatica da sondaggio e a risultati confusi. Se ci si può permettere uno solo, si scelga quello che corrisponde alla decisione da prendere.

**2. Si scriva con formulazioni neutre e specifiche.** «Quanto è stato soddisfatto di come è stata gestita la Sua richiesta?» è meglio di «Quanto è stato eccezionale il nostro servizio?». Si evitino le domande doppie che chiedono insieme di rapidità e cordialità. Si offra una scala coerente, se ne etichettino gli estremi e si mantenga ogni volta lo stesso ordine delle risposte. La [scala Likert](https://en.wikipedia.org/wiki/Likert_scale) è un modello comune, e piccole variazioni nelle etichette possono spostare i risultati, quindi non le si cambi a cuor leggero.

**3. Si aggiunga una domanda aperta.** «Qual è il motivo principale della Sua valutazione?» costa poco al rispondente e fornisce al team i dati più ricchi. I commenti spiegano il punteggio, portano alla luce problemi che i numeri non vedono e offrono agli operatori qualcosa da cui imparare. Li si legga in una revisione periodica, se possibile ad alta voce.

**4. Si invii il sondaggio a ridosso dell'evento.** Si ponga la domanda poco dopo la risoluzione del ticket o l'arrivo del rilascio, quando il ricordo è fresco. Non la si invii nel momento della chiusura da parte di un operatore che spera in un voto alto. Un breve ritardo, impostato dal sistema, elimina la tentazione di pilotare la risposta.

### Rendere affidabili i numeri

**5. Si riportino tasso di risposta e composizione dei rispondenti accanto a ogni punteggio.** Un punteggio di soddisfazione ottenuto dal 4 percento degli utenti è un'affermazione sui rispondenti. Si confronti chi ha risposto con chi è stato invitato, usando attributi già disponibili, come regione, servizio o tipo di richiesta. Divari ampi richiedono un'etichetta di cautela sul punteggio. La rappresentatività è un tema centrale della ricerca sulla [distorsione da risposta](https://en.wikipedia.org/wiki/Response_bias), e per un team di servizio il punto è semplicemente guardare.

**6. Si mostri l'incertezza.** I campioni piccoli oscillano molto. Un [margine di errore](https://en.wikipedia.org/wiki/Margin_of_error) o un [intervallo di confidenza](https://en.wikipedia.org/wiki/Confidence_interval) mostrato accanto al CSAT mensile evita al team di reagire al rumore (si veda l'argomento 1.6, Alfabetizzazione statistica per le metriche di servizio). Se un team ha meno di alcune decine di risposte in un periodo, riporti i conteggi e legga i commenti, non le percentuali.

**7. Si eviti di selezionare chi viene interpellato.** Se è la persona che ha chiuso il ticket a decidere se inviare il sondaggio, i punteggi salgono per il motivo sbagliato. Si invii il sondaggio automaticamente a ogni interazione idonea, oppure a un campione casuale se il volume è alto. Si documenti la regola, comprese le eventuali esclusioni, nel registro delle metriche.

**8. Si separi la soddisfazione di una persona dalla prestazione di una persona.** La soddisfazione dipende da fattori che un singolo operatore non controlla: la qualità del prodotto, la coda, la policy, l'umore dell'utente. Non si classifichino gli operatori per CSAT. Lo si usi a livello di team e di servizio, e si usino i commenti per conversazioni di coaching che l'operatore accoglie con favore.

### Agire su ciò che si ascolta

**9. Si chiuda il ciclo con gli utenti insoddisfatti.** Si contattino le persone che segnalano un'esperienza negativa, si chieda che cosa sarebbe stato utile e si registri ciò che si apprende. Si fissi un obiettivo per il tempo di follow-up e si faccia del follow-up una conversazione, non una richiesta di cambiare il punteggio. Cambiare un punteggio su richiesta è una distorsione, perciò il follow-up deve mirare a risolvere il problema e a imparare.

**10. Si codifichino i commenti in temi e li si monitori.** Si concordi un breve elenco di temi, come «ho dovuto ripetermi», «risposta lenta», «la correzione non ha retto», «comunicazione poco chiara» e «cordiali e disponibili». Si codifichi ogni mese un campione, a mano o con uno strumento, e una persona ne verifichi i risultati. Le tendenze dei temi mostrano spesso i problemi prima che un punteggio si muova.

**11. Si colleghi la soddisfazione ai dati operativi.** Si confronti il CSAT con il tempo di risoluzione, il tasso di riapertura e il numero di contatti per problema. Le coppie dicono se la velocità sta comprando soddisfazione o se il team è veloce e sbaglia. Le si usi per trovare storie da approfondire, non per dimostrare una regola.

**12. Si trattino i benchmark con cura.** Le cifre pubblicate o fornite dai fornitori sui punteggi di soddisfazione dipendono da metodo, pubblico e regione, e la propria storia è un termine di paragone migliore. Se si usa un confronto esterno, se ne indichino fonte, metodo e data, e non si fissi un obiettivo a partire da esso senza verificare che il proprio metodo corrisponda. Non si inventi mai un benchmark.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di guardrail abbinata |
| --- | --- | --- |
| CSAT | Gli operatori guidano gli utenti a dare il massimo dei voti; sondaggi inviati solo dopo ticket semplici; ticket difficili chiusi senza sondaggio | Sondaggio automatico a ogni ticket idoneo; tasso di risposta e composizione dei rispondenti; tasso di riapertura |
| NPS | Interpellare solo utenti favorevoli; scegliere il momento del sondaggio dopo un evento positivo; chiedere di persona; rietichettare i punti della scala | Pubblico e calendario fissi nel registro; copertura dei rispondenti; lettura dei commenti dei detrattori |
| CES | Togliere passaggi dal modulo in modo da spostare il lavoro altrove; chiedere solo dopo richieste andate lisce | Conteggio dei contatti per problema; tempo di evasione delle richieste e rilavorazione (si veda l'argomento 3.5, Metriche di evasione delle richieste di servizio) |
| Tasso di risposta al sondaggio | Invitare solo le persone che probabilmente rispondono; inviare il sondaggio ogni volta a un elenco diverso | Regola di invito messa per iscritto; confronto tra invitati e popolazione degli utenti |
| Copertura dei rispondenti | Escludere dal confronto i gruppi difficili da raggiungere; ripesare senza dichiararlo | Pubblicare le dimensioni e il metodo; mostrare il risultato non ponderato accanto a quello ponderato |
| Quota dei temi nei commenti | Codificare i commenti per evitare i temi negativi; accorpare i temi in modo che nessuno appaia grande | Una seconda persona codifica un campione; mantenere stabile l'elenco dei temi e registrare le modifiche |
| Tempo di follow-up dei detrattori | Registrare una nota senza contattare l'utente; contattare l'utente per chiedere un punteggio migliore | Verificare il contenuto delle note di follow-up; chiedere all'utente nel sondaggio successivo se qualcuno lo ha contattato |

Una lettura sana è un tasso di risposta stabile, una composizione dei rispondenti vicina a quella degli utenti, un punteggio che si muove insieme all'esperienza descritta dagli utenti nei commenti e utenti insoddisfatti che dicono che qualcuno si è fatto sentire.

## Compromessi: vantaggi e svantaggi

| Misura | Punto di forza | Punto debole |
| --- | --- | --- |
| CSAT | Semplice, rapido, legato a un momento specifico | Facilmente gonfiabile; dice poco sull'intera relazione |
| NPS | Una sola domanda, facile da seguire nel tempo | Nasconde le ragioni; un solo numero comprime una distribuzione ampia; le differenze culturali influenzano la scala |
| CES | Indica direttamente l'attrito che il team può rimuovere | Meno conosciuto; le evidenze sono contestate |
| Sondaggio annuale lungo | Ricco, copre molti servizi | Lento, con basse risposte, difficile da tradurre in azioni |
| Solo commenti | Concreti, memorabili | Difficili da confrontare nel tempo; esposti alle voci più forti |
| Segnali comportamentali | Nessun onere di sondaggio; oggettivi | Non catturano i sentimenti; possono interpretare male la causa |

La risposta in prosa è combinare un breve sondaggio di interazione, un occasionale sondaggio di relazione e i commenti, e leggere tutti e tre insieme ai dati operativi. Le misure di soddisfazione funzionano come una conversazione tra utenti e team. Falliscono come tabellone dei punteggi.

## Domande da discutere con il team

**1. Che cosa facciamo con un punteggio basso e con un punteggio alto?**
Si chieda al team di descrivere, in concreto, l'ultima volta in cui un punteggio basso ha portato a un cambiamento. Poi si chieda lo stesso per un punteggio alto. Se le risposte sono vaghe, il sondaggio è un rituale. Il facilitatore dovrebbe cercare un collegamento concreto dai dati a un'azione e concordare un luogo in cui tale collegamento sarà registrato.

**2. Chi risponde ai nostri sondaggi e chi no?**
Si chieda al team di nominare i gruppi di utenti da cui riceve meno riscontri. Si confronti con l'elenco degli invitati e con la directory degli utenti. La conversazione rivela spesso che gli utenti più silenziosi hanno i problemi più difficili. Si concordi un modo per raggiungere un gruppo silenzioso in questo trimestre, come una breve telefonata o un canale diverso.

**3. In quale momento dell'interazione chiediamo, e chi decide?**
Si percorra il tragitto dalla risoluzione al sondaggio. Si individui ogni punto in cui una persona può influenzare se, quando o come il sondaggio viene inviato. Si concordi quali di questi punti vadano automatizzati. Il facilitatore può chiedere che cosa potrebbe fare un operatore per proteggere un punteggio, come domanda di progettazione e non come accusa.

**4. Che cosa sente un detrattore da noi dopo aver risposto?**
Si guardino alcune valutazioni basse recenti e si leggano le note di follow-up. Ci si chieda se l'utente si sentirebbe ascoltato. Si discuta come rendere utile il follow-up senza chiedere una valutazione modificata. Si decida chi è responsabile del follow-up e qual è il tempo obiettivo.

**5. Quali commenti dell'ultimo mese hanno cambiato ciò che abbiamo fatto?**
Si stampino o si mostrino dieci commenti a caso. Si chieda al team quali hanno dato luogo ad azioni, quali no e perché. Così l'attenzione resta sulle parole e si costruisce l'abitudine di leggerle. Si concordi di codificare i temi per il mese successivo e di rivederne l'andamento.

**6. A quale cifra pubblicata siamo tentati di confrontarci, e il confronto è equo?**
Si indichino la cifra, la sua fonte, il suo metodo e il suo pubblico, poi si confronti ciascuno con il proprio. Ci si chieda se cambierebbe una decisione. In caso contrario, la si metta da parte e si usi il proprio andamento. Il facilitatore dovrebbe registrare la risposta nel registro delle metriche.

## Quattro prospettive

### Team di prodotto e di consegna

I team di prodotto usano il feedback sulla soddisfazione per decidere che cosa correggere o costruire successivamente, e brevi sondaggi dopo un rilascio offrono una lettura più rapida della revisione trimestrale successiva. I team di consegna dovrebbero collegare i commenti alle voci di backlog, mostrare agli utenti che cosa è cambiato ed evitare di trattare un punteggio come obiettivo di consegna. Un aumento dei commenti su sforzo o confusione dopo un rilascio è un segnale per guardare al rilascio, non al sondaggio.

### Team di servizio e operations

I service desk raccolgono la maggior parte dei dati di interazione e sentono più di tutti la pressione del punteggio. I team di operations dovrebbero inviare i sondaggi automaticamente, pubblicare la regola di campionamento e usare i commenti per l'apprendimento del team. Dovrebbero tenere il CSAT accanto al tasso di riapertura e ai contatti ripetuti, così che le chiusure rapide non sembrino buoni risultati (si veda l'argomento 3.1, Metriche del service desk).

### Leadership e governance

I leader creano il clima in cui nasce la manipolazione. Una richiesta di «95 percento di soddisfazione entro fine anno» insegna al personale a proteggere il numero. I leader dovrebbero chiedere il tasso di risposta, la composizione dei rispondenti e i principali temi dei commenti, finanziare le correzioni che i commenti rivelano e tenere la soddisfazione fuori dalla retribuzione e dalle classifiche individuali. La governance dovrebbe pretendere un metodo dichiarato per ogni cifra che riporta all'esterno.

### Clienti e utenti

Gli utenti offrono il proprio tempo e la propria franchezza. Meritano un sondaggio breve, una ragione chiara per cui lo si chiede, una promessa su come saranno usate le loro risposte e una replica quando segnalano un problema. Dove il sondaggio non è anonimo, lo si dica. Gli utenti che non vedono cambiare nulla smetteranno di rispondere, e il silenzio sembrerà soddisfazione.

## In pratica: un esempio di ITIL agile

Il reparto IT di un ospedale regionale gestisce un service desk e un piccolo team che sviluppa applicazioni cliniche. I numeri seguenti sono illustrativi.

Il CSAT mensile del service desk è del 92 percento, calcolato su 140 risposte a fronte di circa 3.100 ticket chiusi, con un tasso di risposta del 4,5 percento. La direzione è soddisfatta. La responsabile del servizio legge i commenti e nota che molte risposte positive provengono dal personale amministrativo, mentre gli infermieri dei turni notturni compaiono appena. Confronta la composizione dei rispondenti con la directory degli utenti e scopre che il personale del turno di notte rappresenta circa il 18 percento degli utenti e il 3 percento dei rispondenti.

Il team introduce tre cambiamenti. Il sondaggio diventa un modulo di due domande con una valutazione e un commento, inviato automaticamente dal sistema di ticketing quattro ore dopo la risoluzione, per ogni ticket. Al personale che lavora a turni viene offerta una versione via SMS. Il rapporto mensile mostra ora il CSAT con il tasso di risposta, l'intervallo di confidenza, la composizione dei rispondenti a confronto con quella degli utenti e i cinque principali temi dei commenti.

In due mesi il tasso di risposta sale a circa l'11 percento e il CSAT scende all'84 percento. I temi dei commenti indicano «ho dovuto richiamare» e «la correzione non ha retto» come le prime due lamentele, concentrate nei sistemi clinici. Il responsabile IT dice al consiglio di amministrazione che il vecchio punteggio rifletteva chi rispondeva e che il nuovo è una guida migliore. Il team di prodotto aggiunge una voce di backlog per correggere il guasto ricorrente all'origine dei richiami, e il service desk inizia a contattare entro un giorno lavorativo ogni utente che assegna una valutazione di 1 o 2. Nel trimestre successivo il tasso di contatti ripetuti per i sistemi clinici scende, e con esso la quota di commenti «ho dovuto richiamare». Il team registra la decisione nel proprio diario e non fissa un obiettivo di CSAT.

## Lente di settore

**Startup.** Lo stretto contatto con gli utenti rende all'inizio preferibili le brevi conversazioni ai sondaggi. Si aggiunga un sondaggio a una sola domanda quando il volume cresce, e si continuino a leggere tutti i commenti. Si resista alla tentazione di pubblicare un punteggio prima di avere abbastanza risposte perché significhi qualcosa.

**Piccola impresa.** Un singolo cliente insoddisfatto può contare più di un punteggio. Si usi il sondaggio come spunto per parlare con le persone e si conservino i registri dei follow-up. I rapporti di soddisfazione forniti dai fornitori meritano scetticismo sul metodo.

**Grande impresa.** La scala porta con sé segmenti e la tentazione di aggregare. Si mantengano i punteggi per servizio e per pubblico, si pubblichi il metodo e si eviti di mediare servizi dissimili in un unico numero. Si usi una piattaforma di sondaggi stabile con invio automatico e si tratti con cautela ogni classifica tra team.

**Pubblica amministrazione e settore pubblico.** Gli enti pubblici hanno spesso obblighi formali di raccogliere il feedback degli utenti e di pubblicarne i risultati, oltre a doveri in materia di accessibilità e privacy. Si offrano canali di sondaggio accessibili, si proteggano le identità dei rispondenti e si pubblichino i metodi insieme ai risultati. Dove una cifra di soddisfazione compare in un contratto o in un rapporto previsto dalla legge, la si definisca con esattezza e si mostri accanto a essa il guardrail (si veda l'argomento 8.5, Rendicontazione regolamentata e governativa).

## Business case: motivazioni, ROI e TCO

I costi diretti sono lo strumento di sondaggio, che molti sistemi di ticketing già includono, una o due ore al mese per rivedere i commenti e codificare i temi, e il tempo per il follow-up con gli utenti insoddisfatti. Il costo maggiore è la disciplina di agire su ciò che si ascolta. Non serve una nuova piattaforma per iniziare.

Il ritorno si manifesta come correzioni apprezzate dagli utenti e sprechi evitati. I commenti dicono dove si trova l'attrito, così si possono rimuovere le cause dei contatti ripetuti e delle correzioni fallite anziché aggiungere personale per gestirli. Una visione migliore di chi non risponde protegge da decisioni basate su pochi autoselezionati. Si descriva il beneficio in termini di problemi individuati e rimossi, e si misurino le proprie linee di base prima e dopo: tasso di contatti ripetuti, tasso di riapertura e tempo alla prima risposta utile. Non si usi una percentuale inventata per giustificare il programma. Se servono cifre, le si costruisca a partire dai propri dati.

## Anti-pattern e insidie

- **Trattare il punteggio come un obiettivo.** Sarà raggiunto selezionando chi viene interpellato o pilotando la risposta. Lo si usi come una domanda e lo si abbini ai commenti e alle misure operative.
- **Interpellare solo dopo i ticket semplici.** Si invii a ogni interazione idonea, in modo automatico.
- **Classificare gli operatori per CSAT.** Penalizza chi prende in carico i casi difficili. Si usino viste per team e per servizio e si impari dai commenti.
- **Chiedere un punteggio migliore.** Il follow-up su una valutazione bassa deve mirare a risolvere il problema. Non si chieda una modifica.
- **Riportare un punteggio senza tasso di risposta.** Si mostri sempre chi ha risposto e quanti.
- **Cambiare la domanda mantenendo l'andamento.** Si registrino le modifiche e si segni la discontinuità nel grafico.
- **Importare un benchmark senza il suo metodo.** Si confronti prima con la propria storia.
- **Raccogliere commenti senza mai leggerli.** Si metta una revisione in calendario e si assegni un responsabile.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Strumento e campionamento | Sondaggio occasionale e ad hoc | Il sondaggio esiste per alcuni servizi, inviato a mano | Breve sondaggio inviato automaticamente a tutte le interazioni idonee | Regola di campionamento, modifiche di formulazione ed esclusioni registrate e riesaminate | Strumenti allineati tra team e fornitori e rivisti insieme agli utenti |
| Qualità dei dati | Solo punteggio | Tasso di risposta riportato | Tasso di risposta, composizione dei rispondenti e incertezza riportati | Copertura dei rispondenti gestita; codifica verificata da una seconda persona | Visione condivisa dell'esperienza tra i servizi, con gli utenti coinvolti nell'interpretazione |
| Azione e follow-up | Punteggi riportati, nulla cambia | Correzioni occasionali a partire dai commenti | Follow-up dei detrattori con un tempo obiettivo; temi monitorati | I temi guidano un lavoro di miglioramento finanziato e sono collegati ai dati operativi | Il ciclo chiuso attraversa team e fornitori; gli utenti vedono che cosa è cambiato |

## Checklist

- [ ] Ogni sondaggio ha uno scopo dichiarato e una decisione che contribuisce a orientare.
- [ ] Le domande sono brevi, neutre e includono un commento libero.
- [ ] Il sondaggio è inviato automaticamente a ogni interazione idonea o a un campione casuale documentato.
- [ ] Tasso di risposta e composizione dei rispondenti sono mostrati accanto a ogni punteggio.
- [ ] L'incertezza è mostrata e i campioni piccoli sono riportati come conteggi.
- [ ] Nessun singolo operatore è classificato in base alla soddisfazione.
- [ ] Una persona designata dà seguito alle valutazioni basse entro un tempo concordato.
- [ ] I commenti sono codificati in un elenco stabile di temi e riesaminati ogni mese.
- [ ] Le modifiche di formulazione e di campionamento sono registrate e segnate nei grafici.
- [ ] Ai rispondenti è detto come saranno usate le loro risposte e i dati personali sono protetti.

## Prompt IA

**Rivedere uno strumento di sondaggio.**

```text
Gestisco [servizio o team] per [tipo di organizzazione]. Interpelliamo
[pubblico] dopo [evento] con questa formulazione: [incolla domande e scala].
Rivedila alla ricerca di linguaggio suggestivo, domande doppie, scale poco
chiare e onere per il rispondente. Proponi una versione più breve che mantenga
una valutazione e un commento libero. Non inventare valori di benchmark e non
attribuire risultati di ricerca che non puoi citare. Elenca le tue ipotesi e
ciò che non hai potuto giudicare dal testo.
```

**Codificare i commenti del sondaggio in temi.**

```text
Ecco [numero] commenti di sondaggio anonimizzati per [servizio], relativi a
[periodo]: [incolla i commenti privi di dati personali]. Proponi un breve
elenco di temi (al massimo otto) e assegna ogni commento a un tema, con una
nota di confidenza dove è ambiguo. Riporta il conteggio per tema e tre citazioni
rappresentative per tema. Non identificare le persone. Dimmi che cosa una
persona dovrebbe verificare prima di fare affidamento su questa codifica ed
elenca le tue ipotesi.
```

**Verificare la rappresentatività.**

```text
Abbiamo ricevuto [risposte] risposte a fronte di [invitati] inviti. Rispondenti
per [dimensione, per esempio regione o turno]: [conteggi]. La nostra
popolazione di utenti per la stessa dimensione: [conteggi]. Confronta i due
insiemi, descrivi dove la composizione dei rispondenti differisce e indica quali
cautele dovremmo associare al nostro punteggio di soddisfazione. Suggerisci due
modi pratici per raggiungere i gruppi sottorappresentati. Non dedurre cause
oltre i dati ed elenca le tue ipotesi.
```

**Pianificare un follow-up a ciclo chiuso.**

```text
Redigi un breve processo per dare seguito agli utenti che assegnano una
valutazione pari o inferiore a [soglia] in [servizio]. Includi chi li contatta,
entro quanto tempo, che cosa dire, che cosa registrare e come evitare di
chiedere una valutazione modificata. Contesto: [dimensione del team, strumenti,
orari]. Elenca le tue ipotesi e i passaggi che dipendono da strumenti che non ho
descritto.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare il guardrail abbinato a una metrica di soddisfazione prima di pubblicarla.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una voce di metrica di sondaggio rivista mantenga il proprio vettore di manipolazione e il proprio guardrail.

## Punti chiave

- I punteggi di soddisfazione descrivono come è stato vissuto un momento di servizio, quindi si leghino i sondaggi a eventi specifici e li si mantenga brevi.
- Si riportino sempre tasso di risposta, composizione dei rispondenti e incertezza insieme al punteggio.
- I commenti spiegano i numeri, quindi li si legga ogni mese e li si codifichi in temi.
- Si inviino i sondaggi automaticamente e non si chieda mai agli utenti di cambiare una valutazione.
- Si usi la soddisfazione a livello di team e di servizio, mai per classificare le persone, e si trattino con cura i benchmark esterni.
- Si chiuda il ciclo: chi segnala un'esperienza negativa dovrebbe ricevere una risposta e vedere un cambiamento.

## Riferimenti e letture di approfondimento

1. Reichheld, F. F., "The One Number You Need to Grow," *Harvard Business Review*, 81(12), 2003.
2. Dixon, M., Freeman, K., and Toman, N., "Stop Trying to Delight Your Customers," *Harvard Business Review*, 88(7/8), 2010.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Likert, R., "A technique for the measurement of attitudes," *Archives of Psychology*, 22(140), 1932.
5. Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., and Tourangeau, R., *Survey Methodology*, 2nd ed., Wiley, 2009.
6. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
7. Wikipedia, [Net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score).
8. Wikipedia, [Survey methodology](https://en.wikipedia.org/wiki/Survey_methodology).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Likert scale](https://en.wikipedia.org/wiki/Likert_scale).
11. Wikipedia, [Response bias](https://en.wikipedia.org/wiki/Response_bias).
12. Wikipedia, [Margin of error](https://en.wikipedia.org/wiki/Margin_of_error).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
