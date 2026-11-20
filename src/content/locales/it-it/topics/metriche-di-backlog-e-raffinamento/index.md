# Metriche di backlog e raffinamento

**Un backlog è una coda di promesse, perciò si misuri quante promesse sono in attesa, da quanto tempo attendono e quanta parte del prossimo tratto di lavoro sia davvero pronta, e si tratti un cumulo crescente di elementi vecchi come una decisione che non si è ancora presa.**

## Panoramica e motivazione

Ogni team che costruisce o gestisce un servizio tiene un elenco del lavoro che ha concordato di prendere in considerazione. Nella pratica agile questo elenco è il [product backlog](https://en.wikipedia.org/wiki/Product_backlog), un insieme ordinato di elementi che descrive che cosa si potrebbe fare per migliorare il prodotto. Su una lavagna di flusso l'equivalente è l'insieme degli elementi in attesa a sinistra delle colonne di inizio lavorazione. Nella gestione dei servizi IT (ITSM), come descritta da [ITIL](https://en.wikipedia.org/wiki/ITIL), gli equivalenti sono gli incidenti, le richieste di servizio, i problemi e le modifiche aperti in attesa in una coda. Tutti questi sono backlog. Si differenziano per chi li alimenta, per la rapidità con cui gli elementi devono uscire e per che cosa significhi per un elemento attendere.

La maggior parte dei dati proviene da un [sistema di tracciamento delle issue](https://en.wikipedia.org/wiki/Issue_tracking_system) o da uno strumento ITSM. Le metriche di backlog rispondono a una domanda semplice: la quantità di lavoro promesso è proporzionata alla capacità di svolgerlo, e il lavoro promesso vale ancora la pena di essere fatto? Un backlog che cresce senza limite non descrive un piano. Descrive una lista dei desideri, e ogni lettore, dal product owner al cliente che ha sollevato un elemento, si farà una propria idea di quando sarà fatto. La risposta onesta è spesso «mai», e il costo di non dirlo si paga in fiducia, in tempo speso a rileggere vecchi elementi e in decisioni prese su informazioni stantie.

Il raffinamento è l'attività che mantiene utile un backlog. Nella pratica agile, il raffinamento del product backlog è il lavoro continuo di aggiungere dettaglio, stime e ordine agli elementi in modo che siano pronti per essere avviati. I team che attingono il lavoro quando si libera capacità chiamano spesso la stessa attività rifornimento o backlog grooming. Nell'ITSM compare come smistamento, categorizzazione e cura di un elenco di errori noti o di problemi. Le metriche di questo argomento misurano la dimensione e l'età del backlog, quanto lavoro è pronto e quanto bene il raffinamento mantenga davanti al team una finestra di lavoro pronto.

Quattro termini ricorrono. Un **elemento** è una singola voce in un backlog, come una [user story](https://en.wikipedia.org/wiki/User_story), un difetto, una richiesta di servizio o un record di problema. L'**età dell'elemento** è il tempo trascorso da quando l'elemento è entrato nel backlog, che è distinta dall'età dell'elemento di lavoro nella misurazione del flusso, dove il cronometro parte quando inizia il lavoro (vedi Argomento 2.1 «Misure del flusso»). **Pronto** significa che un elemento soddisfa la definizione di pronto scritta dal team, così che il team potrebbe avviarlo e aspettarsi di concluderlo entro una finestra di livello di servizio. Il **raffinamento** è il lavoro di rendere pronti gli elementi e di eliminare quelli che non saranno mai fatti.

I backlog di prodotto e di servizio si comportano in modo diverso, e mescolarli è l'errore più comune in quest'ambito. Un product backlog è un luogo in cui gli elementi sono deliberatamente trattenuti finché il product owner non decide il loro ordine. L'attesa è uno stato normale, e un elemento vecchio è un motivo per chiedersi se conti ancora. Un backlog di servizio di incidenti e richieste è una coda con una promessa allegata: il cliente si aspetta una risposta entro un tempo. L'attesa lì è un costo per il cliente fin dal primo minuto. Un product backlog va potato; un backlog di servizio va svuotato. Si mettano i due su uno stesso grafico e il grafico trarrà in inganno.

La visione agile tratta il backlog come un artefatto vivo posseduto da un product owner, mantenuto abbastanza breve da essere compreso e ordinato per valore. La visione ITIL tratta i record aperti come lavoro in corso rispetto a un livello di servizio concordato, posseduto da una pratica. Entrambe le visioni condividono un fatto della teoria delle code: una coda che riceve elementi più velocemente di quanto li rilasci crescerà, e il tempo che un elemento attende cresce con la coda (vedi Argomento 2.3 «Lavoro in corso e code»). La [legge di Little](https://en.wikipedia.org/wiki/Little%27s_law) lega la dimensione della coda, il tasso al quale gli elementi escono e il tempo medio che un elemento trascorre nel sistema, ed è la ragione per cui dimensione e età del backlog sono due viste della stessa cosa.

Un'ultima distinzione mantiene onesto l'argomento. Un backlog non è una misura di produttività né di quanto sia occupato un team. Un backlog grande può significare un prodotto popolare, un elenco potato male o un team con poche risorse, e il solo numero non sa dire quale.

## Principi chiave

- **Si misuri l'età oltre alla dimensione.** La dimensione dice quanto è in attesa; l'età dice da quanto, e gli elementi più vecchi mostrano dove si stanno evitando decisioni.
- **Si tengano separati i backlog di prodotto e di servizio.** Un'idea trattenuta e un cliente in attesa sono cose diverse, e ciascuno richiede una propria lettura.
- **Si miri a lavoro pronto, non a un lungo elenco.** Poche settimane di lavoro pronto e ben ordinato valgono più di mille elementi che nessuno ha guardato.
- **La potatura è una funzionalità.** Rimuovere un elemento che non si farà mai è lavoro onesto, e un tasso di scarto che non supera mai lo zero è un segnale d'allarme.
- **Si usino le distribuzioni.** Si riportino la mediana e l'85° percentile dell'età degli elementi e si mostri l'elemento più vecchio, poiché le medie nascondono la coda.
- **Si descrivano il team e il sistema.** Le metriche di backlog mostrano come il lavoro arriva a un team e come viene gestito, mai come si sia comportata una singola persona.
- **Si leghi ogni numero a una decisione.** Se un grafico del backlog non cambierebbe ciò che si fa dopo, lo si ritiri.

## Definizioni delle metriche

Le metriche seguenti si applicano a un singolo backlog alla volta. Si scelga prima il backlog (un product backlog, una coda di incidenti, una coda di richieste di servizio, un elenco di problemi) e si riporti ciascuna metrica per backlog. I percentili usano il metodo del [percentile](https://en.wikipedia.org/wiki/Percentile) indicato nell'argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio».

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dimensione del backlog | Numero di elementi aperti in un backlog nominato in un dato momento | Conteggio degli elementi con stato aperto o pronto alla data dell'istantanea; esclude gli elementi in corso e quelli chiusi | elementi | Istantanea dell'issue tracker o dello strumento ITSM | Gestione degli incidenti; gestione delle richieste di servizio; gestione dei problemi | Product backlog; coda di ingresso | Settimanale |
| Età del backlog | Distribuzione di quanto a lungo hanno atteso gli elementi aperti | Per ogni elemento aperto, data dell'istantanea meno la data in cui è entrato nel backlog; si riportino la mediana, l'85° percentile e l'elemento più vecchio | giorni | Cronologia di creazione e di stato dell'issue tracker o dello strumento ITSM | Gestione degli incidenti; gestione dei problemi; miglioramento continuo | Salute del backlog; revisione degli elementi vecchi | Settimanale |
| Profondità del lavoro pronto | Quanto in anticipo il team ha lavoro pronto | Elementi che soddisfano la definizione di pronto / media di elementi conclusi a settimana negli ultimi sei periodi | settimane | Flag «pronto» dell'issue tracker e storico del throughput | Analisi di business; gestione delle richieste di servizio | Definizione di pronto; raffinamento | A ogni periodo di pianificazione |
| Copertura del raffinamento | Quota della finestra a breve termine che è pronta | Elementi nelle prossime due finestre di due settimane di lavoro atteso (o i primi N per ordine) che soddisfano la definizione di pronto / elementi in quella finestra | percentuale | Ordine dell'issue tracker, flag «pronto» e lavoro pianificato | Analisi di business; abilitazione delle modifiche (per le modifiche pianificate) | Raffinamento del product backlog | A ogni periodo di pianificazione |
| Rapporto tra ingresso e uscita del backlog | Se gli elementi arrivano più velocemente di quanto escano | Elementi aggiunti nel periodo / elementi rimossi dal backlog per completamento o scarto nello stesso periodo; un rapporto superiore a 1 significa crescita | rapporto | Eventi di creazione e di risoluzione dell'issue tracker o dello strumento ITSM | Gestione degli incidenti; gestione delle richieste di servizio; gestione della capacità e delle prestazioni | Tassi di arrivo e di uscita | Settimanale |
| Tasso di scarto del backlog | Quota degli elementi in uscita rimossi senza consegna | Elementi chiusi come «non si farà», duplicato od obsoleto / tutti gli elementi in uscita dal backlog nel periodo; esclude gli elementi chiusi come fatti | percentuale | Campo di risoluzione dell'issue tracker | Miglioramento continuo; gestione dei problemi (revisione degli errori noti) | Potatura del backlog; ordinamento da parte del product owner | Mensile |
| Backlog di servizio oltre l'obiettivo | Quota degli elementi di servizio aperti più vecchi della finestra di risposta o di risoluzione concordata | Elementi aperti il cui tempo trascorso supera l'obiettivo di servizio / tutti gli elementi aperti nella coda; il cronometro parte dalla registrazione e si ferma solo negli stati che la definizione scritta consente | percentuale | Strumento ITSM con cronometro di livello di servizio | Gestione dei livelli di servizio; gestione degli incidenti; gestione delle richieste di servizio | Corsia di urgenza; aspettativa di livello di servizio | Giornaliera o settimanale |

Tre cronometri vanno dichiarati con chiarezza. L'età del backlog parte quando l'elemento viene creato nel backlog e si ferma quando esce per completamento o scarto, perciò un elemento riaperto parte con una nuova età. La profondità del lavoro pronto usa il throughput dei soli elementi completati, mai la velocity pianificata, poiché la velocity pianificata è una previsione. Il backlog di servizio oltre l'obiettivo usa il cronometro di livello di servizio, che può differire dall'età del backlog a causa delle pause consentite (vedi Argomento 5.1 «Metriche SLA, OLA e XLA»).

## Raccomandazioni

### Impostare il backlog in modo che possa essere misurato

**1. Si nomini ogni backlog e il suo responsabile.** Ogni backlog nel perimetro ha un responsabile, uno scopo e un elenco di tipi di elemento. Un product backlog appartiene a un product owner; una coda di incidenti appartiene al service desk o al gruppo risolutore. Senza un responsabile nominato, nessuno decide quando un vecchio elemento debba andarsene.

**2. Si separino gli elementi trattenuti dalle promesse in coda.** Si contrassegni ogni elemento come un'idea che il team trattiene per l'ordinamento o come un impegno su cui qualcuno è in attesa. Si riportino separatamente dimensione ed età del backlog per ciascuno. Una richiesta di supporto che sosta in un product backlog è una promessa in coda nel posto sbagliato, e merita un cronometro di servizio.

**3. Si scriva la definizione di pronto e la si mantenga breve.** Una definizione di pronto elenca le poche cose che un team deve sapere prima di iniziare: l'esito cercato, una dimensione approssimativa, le condizioni di accettazione ed eventuali dipendenze. La si tenga a una manciata di righe e la si riveda quando smette di prevedere un lavoro fluido. Una lunga checklist trasforma il raffinamento in burocrazia e invita a spuntare caselle.

**4. Si registrino la data di ingresso e il motivo di uscita.** Età e tasso di scarto dipendono entrambi da due campi: la data in cui un elemento è entrato e il motivo per cui è uscito. Si rendano obbligatori entrambi nello strumento e si aggiunga un elenco controllato di motivi di uscita come fatto, duplicato, obsoleto e non si farà. Le date mancanti sono la causa più comune di un'età del backlog inutilizzabile (vedi Argomento 1.5 «Fonti dei dati e strumentazione»).

### Leggere insieme dimensione ed età

**5. Si riporti l'età del backlog come distribuzione.** Si mostrino la mediana, l'85° percentile e l'elemento più vecchio, e un istogramma per fasce di età come meno di 30 giorni, da 30 a 90, da 90 a 180 e oltre 180. Un'età media piatta può nascondere un cumulo crescente di elementi antichi perché i nuovi elementi abbassano la media. La vista dell'elemento più vecchio è la più difficile da nascondere.

**6. Si usi il rapporto ingresso-uscita per vedere presto la crescita.** Un rapporto costantemente superiore a 1 significa che il backlog crescerà, qualunque sia la dimensione attuale. Lo si tracci come cifra mobile su quattro settimane per attenuare ferie e settimane di rilascio. Lo si abbini al throughput così che il team possa vedere se la crescita deriva da una domanda in aumento o da una produzione in calo (vedi Argomento 2.1 «Misure del flusso»).

**7. Si converta la dimensione in tempo con il throughput.** Si divida la dimensione del backlog per la media di elementi conclusi per periodo per ottenere un numero approssimativo di periodi di lavoro in attesa, un uso diretto della legge di Little. Si dichiari con chiarezza che è una media, non una promessa, e si mostri l'intervallo usando un throughput più basso e uno più alto di periodi recenti. Un product backlog di cento elementi che equivale a un anno di lavoro è una conversazione sull'ambito, non un calendario.

### Mantenere fluido il raffinamento

**8. Si miri a una finestra di lavoro pronto, non a un backlog pieno di lavoro pronto.** Si raffini quanto basta per le prossime una–tre settimane di lavoro e non oltre. Il dettaglio aggiunto a un elemento che non sarà avviato per sei mesi di solito diventa stantio, perciò si misuri la profondità del lavoro pronto e la si lasci oscillare all'interno di una fascia obiettivo, come da una a tre settimane di lavoro, che il team sceglie e rivede. Una profondità molto sopra la fascia è spreco; una profondità inferiore a una settimana di lavoro è un rischio di pianificazione inattiva o frettolosa.

**9. Si misuri la copertura del raffinamento sugli elementi che stanno per essere avviati.** La copertura del raffinamento guarda solo alla cima dell'ordine. Risponde alla domanda che la riunione di pianificazione porrà: se iniziassimo ora, i prossimi elementi sarebbero pronti? La si riporti subito prima della pianificazione, quando un'omissione si può ancora correggere, anziché dopo.

**10. Si faccia del raffinamento un'attività regolare e breve.** Le indicazioni agili, compresa la Scrum Guide, descrivono il raffinamento come un'attività continua e ne lasciano la forma al team. Molti team trovano che una sessione breve e frequente funzioni meglio di un'unica lunga riunione.

### Potare e rivedere

**11. Si poti secondo un calendario e si riporti il tasso di scarto.** Si rivedano ogni mese gli elementi più vecchi e ci si chieda per ciascuno: lo faremo nei prossimi sei mesi e, in caso contrario, perché tenerlo? Chiudere un elemento con una motivazione dichiarata non è un fallimento. Un team che non scarta mai probabilmente accumula, e uno che scarta la maggior parte di ciò che riceve probabilmente accetta lavoro che avrebbe dovuto rifiutare alla porta.

**12. Si gestiscano i backlog di servizio svuotandoli, non potandoli.** Per le code di incidenti e di richieste, la prima domanda è se gli elementi siano entro la propria finestra di servizio. Si monitorino la quota oltre l'obiettivo e l'elemento aperto più vecchio e si tenga la corsia di urgenza per gli elementi che non possono attendere. Gli elenchi di problemi e di errori noti si collocano tra i due mondi: sono trattenuti finché una correzione non è finanziata, perciò li si riveda come un product backlog, con una data di revisione dichiarata per ciascuna voce (vedi Argomento 4.6 «Debito tecnico ed errori noti»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Dimensione del backlog | Chiudere elementi in blocco come obsoleti, dividere gli elementi per sembrare occupati o nascondere il lavoro in elenchi laterali e fogli di calcolo | Tasso di scarto del backlog con i motivi di uscita; confronto periodico dello strumento con l'elenco reale delle richieste; feedback dei clienti sugli elementi scartati |
| Età del backlog | Azzerare la data di ingresso clonando o ricreando vecchi elementi; spostare gli elementi tra backlog; riaprire anziché risollevare per cambiare il cronometro | Verifica degli elementi clonati e spostati; revisione dell'elemento più vecchio; età misurata dalla prima creazione attraverso i record collegati |
| Profondità del lavoro pronto | Segnare gli elementi come pronti senza controllarli; gonfiare la profondità scrivendo elementi dettagliati per lavoro di poco valore | Campione di elementi pronti letti rispetto alla definizione; tasso di rilavorazione o di ritorno al raffinamento quando il lavoro inizia |
| Copertura del raffinamento | Spuntare il flag «pronto» per rispettare il numero; restringere la finestra così che contino meno elementi | Conteggio degli elementi rimandati indietro dopo la pianificazione; successo degli obiettivi di consegna e variazione di ambito a metà periodo (vedi Argomento 2.5 «Metriche di previsione e pianificazione della consegna») |
| Rapporto tra ingresso e uscita del backlog | Chiudere in fretta gli elementi facili per spingere l'uscita, o rifiutare nuovi elementi alla porta per tenere basso l'ingresso | Età degli elementi più vecchi; tasso di scarto; quota di richieste respinte senza motivo; bisogni non soddisfatti riferiti dai clienti |
| Tasso di scarto del backlog | Scartare elementi che gli utenti vogliono ancora, per ridurre la dimensione; oppure evitare gli scarti così che il numero appaia mite | Revisione con il richiedente di un campione di elementi scartati; tasso di riapertura e di nuova segnalazione degli elementi scartati |
| Backlog di servizio oltre l'obiettivo | Mettere in pausa il cronometro con uno stato di attesa del cliente, declassare la priorità, o chiudere e riaprire per azzerare la finestra | Quota di tempo negli stati di pausa; tasso di riapertura (vedi Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»); soddisfazione degli utenti sui ticket chiusi |

Una lettura sana mostra un backlog la cui dimensione è stabile o in lenta diminuzione, i cui elementi più vecchi sono pochi e ciascuno ha un responsabile e una motivazione dichiarata, e la cui finestra a breve termine è per lo più pronta. Il rapporto ingresso-uscita si aggira intorno a 1, il tasso di scarto non è né zero né dominante e la copertura del raffinamento sale senza che il lavoro pianificato diventi più fragile. Quando i numeri sembrano buoni ma i clienti continuano a segnalare che nulla accade alle loro richieste, si dia fiducia ai clienti e si verifichino i dati.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Product backlog piccolo e potato con decisione | Facile da comprendere e da mantenere ordinato; onesto sulla capacità | Rischia di scartare idee che sarebbero contate in seguito; i richiedenti possono sentirsi ignorati |
| Backlog grande e conservato | Preserva ogni idea e richiesta; storia utile | Costoso da leggere; gli elementi stantii fuorviano la pianificazione e nascondono le vere priorità |
| Finestra pronta profonda (molte settimane raffinate) | Pianificazione fluida; meno sorprese quando il lavoro inizia | Il dettaglio raffinato diventa stantio; sforzo speso su lavoro che potrebbe non iniziare mai |
| Finestra pronta ridotta (circa una settimana) | Poco dettaglio sprecato; resta flessibile | La pianificazione può bloccarsi quando alcuni elementi non sono pronti; meno anticipo per individuare le dipendenze |
| Definizione di pronto rigorosa | Meno partenze vaghe; lavoro prevedibile | Può diventare un cancello che rallenta il flusso e incoraggia a spuntare caselle |
| Definizione di pronto leggera | Rapida; dà fiducia al team | Più scoperta durante il lavoro; più cambiamenti a metà periodo |

La risposta pratica è mantenere il backlog abbastanza piccolo da essere letto in una sola seduta, tenere una finestra pronta di circa una–tre settimane di lavoro e lasciare che la definizione di pronto resti abbastanza breve da essere ricordata. Le code di servizio richiedono l'atteggiamento opposto: essere piccole non è un obiettivo, concludere entro la finestra concordata lo è. Si scelga in ogni riga la cella adatta al proprio contesto e se ne scriva la ragione.

## Domande da discutere con il team

**1. Se smettessimo di aggiungere elementi oggi, quanto tempo ci vorrebbe per svuotare il backlog al nostro throughput recente e questo numero sembra credibile?**
Si parta dividendo la dimensione del backlog per il numero tipico di elementi conclusi per periodo e si mostri l'intervallo usando il migliore e il peggiore dei periodi recenti. Ci si chieda se il team creda al risultato e dove il tempo andrebbe davvero. Se il numero supera un anno per un product backlog, ci si chieda quali elementi potrebbero essere rimossi senza che nessuno se ne accorga.

**2. Quali sono i cinque elementi più vecchi e chi ha deciso che dovessero essere ancora qui?**
Si leggano ad alta voce i cinque elementi più vecchi con le loro date di ingresso. Per ciascuno si chieda un responsabile nominato e una ragione per cui resta, come l'attesa di una dipendenza, un rinvio deliberato o la trascuratezza. Si concordi un'azione per ciascuno: pianificarlo, scartarlo o scrivere perché resta e quando riesaminarlo.

**3. Che cosa significa «pronto» qui e le nostre sorprese recenti sono derivate da elementi che non lo erano?**
Si chieda a ciascuno di scrivere la definizione di pronto con parole proprie, poi si confrontino. Le differenze sono il primo risultato. Si guardi indietro agli elementi che hanno causato domande a metà periodo o rilavorazioni e ci si chieda che cosa li avrebbe resi pronti. Chi facilita dovrebbe resistere alla tentazione di aggiungere voci alla checklist per ogni sorpresa e scegliere invece le una o due che avrebbero evitato più guai.

**4. Quali dei nostri backlog contengono idee e quali contengono promesse a qualcuno?**
Si elenchi ciascun backlog e si ordinino i suoi elementi nei due tipi. Richieste di supporto, incidenti ed elementi di clienti impegnati sono promesse e richiedono un cronometro di servizio; idee e miglioramenti sono trattenuti per l'ordinamento. Si discuta dove i due sono mescolati e che cosa ciò faccia al grafico dell'età. Il risultato può essere semplice come un'etichetta e un filtro che consentano di riportare ciascuno separatamente.

**5. Quando abbiamo rimosso per l'ultima volta degli elementi di proposito e come hanno reagito i richiedenti?**
La potatura spesso sembra rischiosa, perciò si guardino le evidenze. Si controlli il tasso di scarto e si campionino alcuni elementi scartati. Ci si chieda se il richiedente sia stato informato e se qualcuno abbia chiesto di riavere un elemento. Chi facilita dovrebbe aiutare il gruppo a concordare un messaggio semplice per i richiedenti («non abbiamo in programma di farlo; ecco perché; lo segnali di nuovo se le circostanze cambiano») così che la potatura diventi routine e rispettosa.

**6. Se volessimo che i nostri grafici del backlog sembrassero migliori senza aiutare nessuno, che cosa faremmo?**
Si esegua la revisione della manipolazione dell'argomento 1.2 su ciascuna metrica di backlog. Risposte probabili includono chiudere vecchi elementi in blocco, clonare elementi per azzerare l'età, segnare elementi come pronti in anticipo e restringere la finestra che la copertura conta. Per ogni risposta, si verifichi se la salvaguardia della tabella precedente la individuerebbe. Si annotino quelle che sfuggirebbero e si scelga un nuovo controllo da provare il prossimo trimestre.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna usano le metriche di backlog per mantenere calma la pianificazione. Profondità del lavoro pronto e copertura del raffinamento dicono al team se la prossima sessione di pianificazione sarà fluida, e l'età del backlog mostra quali promesse stanno marcendo in silenzio. Una buona abitudine è rivedere per pochi minuti età, ingresso-uscita e profondità del pronto a ogni sessione di raffinamento, poi agire su una cosa. I team dovrebbero pubblicare verso l'esterno un piccolo insieme stabile e tenere per sé le fasce di età dettagliate (vedi Argomento 2.5 «Metriche di previsione e pianificazione della consegna»).

### Team di servizio e operations

I team operativi gestiscono code con cronometri. La loro lettura centrale è la quota di elementi aperti oltre l'obiettivo insieme all'elemento aperto più vecchio, suddivisa per priorità e per stato di pausa. Gli elenchi di problemi e di errori noti richiedono una data di revisione su ogni voce, così che gli elementi trattenuti non diventino permanenti. I team dovrebbero anche osservare il rapporto ingresso-uscita della coda degli incidenti, poiché un rapporto superiore a 1 per diverse settimane è un segnale precoce di carenza di personale o di una causa ricorrente (vedi Argomento 3.2 «Volume e priorità degli incidenti»).

### Leadership e governance

I dirigenti vedono un backlog come una dichiarazione di intenti. Un backlog molto grande dice loro che l'organizzazione promette più di quanto possa consegnare, e uno che si riduce rapidamente può significare potatura o domanda ridotta. Ci si chieda quale decisione il numero informi. Si finanzi il tempo per raffinamento e potatura, si evitino obiettivi sulla dimensione grezza del backlog e si chieda la distribuzione dell'età e i motivi di scarto quando viene presentata una cifra di dimensione (vedi Argomento 1.3 «Risultati prima della produzione: scegliere cosa misurare»).

### Clienti e utenti

I clienti sperimentano il backlog come silenzio. Un elemento sollevato sei mesi fa senza risposta dice più di qualsiasi grafico. Gli utenti apprezzano che si dica loro la verità: è pianificato, non è pianificato e ecco perché, oppure è in attesa di una dipendenza. Si dia ai richiedenti un modo per vedere lo stato dei propri elementi e si tratti gli elementi scartati come un compito di comunicazione, non di pulizia dei dati (vedi Argomento 3.5 «Metriche di evasione delle richieste di servizio»).

## In pratica: un esempio di ITIL agile

Un assicuratore regionale di medie dimensioni gestisce un'applicazione interna per i sinistri con un team di prodotto e un service desk separato. I numeri di questo esempio sono illustrativi.

Il backlog del team di prodotto contiene 412 elementi. L'età mediana è di 138 giorni, l'85° percentile è di 410 giorni e l'elemento più vecchio ha 29 mesi. Il team conclude circa 14 elementi ogni due settimane, perciò il backlog equivale a circa 29 periodi di due settimane di lavoro al throughput recente. La copertura del raffinamento sulle prossime due finestre di due settimane è del 55 percento, e la pianificazione si protrae spesso perché il team scopre dettagli mancanti. Il service desk mostra un quadro diverso: 63 richieste aperte, di cui il 9 percento oltre l'obiettivo, e un rapporto ingresso-uscita vicino a 1.

Un product owner chiede un numero più piccolo e propone un obiettivo di meno di 200 elementi entro la fine del trimestre. Il team non vuole trattarlo come un obiettivo a sé. Esegue invece una revisione. Contrassegna gli elementi come idee trattenute o lavoro promesso e scopre che 38 dei 412 sono richieste di supporto che ai clienti era stato detto sarebbero state gestite. Le sposta nella coda di servizio con un cronometro di servizio. Legge i 40 elementi più vecchi e scopre che 22 sono obsoleti o duplicati. Li chiude con i motivi di uscita e informa i richiedenti. Fissa una fascia di pronto da uno a due periodi di due settimane e dedica una breve sessione settimanale a raffinare solo la cima dell'ordine.

In tre periodi di due settimane la dimensione del backlog scende a 301 e il tasso di scarto del mese è del 31 percento, alto di proposito e segnalato nella revisione. La copertura del raffinamento sale all'88 percento. Uno sguardo rapido ai dati rivela un rischio di manipolazione: la dimensione del backlog è scesa più in fretta del previsto perché due membri del team hanno clonato una manciata di elementi vecchi in elementi nuovi per evitare l'elenco degli elementi vecchi. Il team se ne accorge quando il grafico dell'elemento più vecchio non corrisponde più al campione degli scarti. Concordano di misurare l'età dalla prima creazione attraverso i record collegati e di rivedere i cloni a ogni sessione di potatura. La decisione registrata per la direzione è di abbandonare l'obiettivo di dimensione e di riportare invece ogni trimestre la distribuzione dell'età, la finestra del pronto e i motivi di scarto.

## Lente di settore

**Startup.** Il backlog è spesso un unico elenco nella testa del fondatore o una semplice lavagna. Si monitorino solo l'età degli elementi più vecchi e se il prossimo lavoro sia pronto. Si poti con decisione e spesso, poiché la risposta giusta per un'idea di tre mesi fa è spesso dimenticarla.

**Piccola impresa.** Il lavoro di prodotto e di servizio di solito condivide un team, perciò il backlog mescola idee trattenute e promesse ai clienti. Le si separi presto con un'etichetta. Un unico elenco letto ogni settimana in una breve riunione vale più di metriche elaborate. Si osservi per prima l'età degli elementi rivolti ai clienti, perché una richiesta dimenticata può costare una relazione.

**Grande impresa.** Molti team e molte code moltiplicano i modi di leggere male un backlog. Si definiscano le metriche una volta sola, con i cronometri e i motivi di uscita, e si eviti di aggregare la dimensione dei product backlog in un'unica cifra di portafoglio. Si confronti un team con la propria storia, mai con un altro team con lavoro diverso (vedi Argomento 2.4 «Metriche del flusso di valore»). Gli elenchi di problemi e di errori noti meritano una propria cadenza di revisione.

**Pubblica amministrazione e settore pubblico.** Impegni verso i cittadini, tempi di risposta di legge e tracce di audit plasmano le code di servizio. Si trattino i cronometri di legge come input fissi e si riporti la quota oltre l'obiettivo con le definizioni usate. I product backlog possono essere vincolati da cicli di finanziamento e appalti, perciò la finestra pronta può dover essere più lunga che in un team commerciale. Si mantengano visibili i motivi di scarto, poiché la responsabilità pubblica rende rischioso l'abbandono silenzioso.

## Business case: motivazioni, ROI e TCO

Il costo di queste metriche è modesto. La maggior parte dei dati risiede già nell'issue tracker o nello strumento ITSM. I costi sono una data di ingresso e un motivo di uscita obbligatori, una breve sessione di potatura ogni mese, pochi minuti nel raffinamento per guardare i grafici di età e di pronto e un po' di sforzo per separare i backlog di prodotto e di servizio. Bastano un foglio di calcolo o i rapporti integrati dello strumento per iniziare, e non occorre acquistare alcun nuovo prodotto.

Il ritorno viene dallo spreco evitato e da promesse più chiare. I team che mantengono una finestra pronta spendono meno tempo di pianificazione a riscoprire che cosa significhi un elemento, e i team che potano smettono di rileggere elementi che non saranno mai fatti. I clienti ricevono risposte oneste prima, il che riduce i contatti ripetuti e le escalation. Si descriva il beneficio in termini di schemi che il team può verificare da sé: sessioni di pianificazione più brevi, meno elementi rimandati al raffinamento dopo l'inizio del lavoro, meno solleciti su vecchie richieste e meno sorprese quando la direzione chiede che cosa ci sia nella pipeline. Questo argomento non offre una percentuale, poiché nessuna può essere data senza una fonte. Si misuri la propria baseline per un trimestre e si confronti.

## Anti-pattern e insidie

- **Trattare la dimensione del backlog come un punteggio di produttività o di prestazione.** La dimensione dipende da domanda, ambito e abitudini di potatura. Si riporti la dimensione insieme a età e motivi di scarto e non si confrontino mai i team su di essa.
- **Mescolare idee trattenute e promesse ai clienti in un solo elenco.** Il grafico dell'età si legge allora come trascuratezza e manca il cronometro di servizio. Le si divida con un'etichetta e si riporti ciascuna separatamente.
- **Raffinare tutto.** Elementi dettagliati che non partiranno per mesi diventano stantii. Si mantenga una finestra pronta e si raffini appena prima del bisogno.
- **Non scartare mai.** Un elenco in continua crescita rende falsa ogni affermazione sull'ambito. Si poti secondo un calendario e se ne registri ogni volta il motivo.
- **Azzerare l'età clonando o spostando gli elementi.** Lusinga il grafico e perde la storia. Si misuri l'età dalla prima creazione attraverso i record collegati e si verifichino i cloni.
- **Una definizione di pronto usata come cancello.** Se blocca lavoro che il team potrebbe avviare in sicurezza, rallenta il flusso. La si mantenga breve e si lasci che il team la derogui con una motivazione dichiarata.
- **Obiettivi sulla dimensione grezza.** Un obiettivo di meno di N elementi invita alla chiusura in blocco. Si fissi l'obiettivo sull'età degli elementi più vecchi o sulla quota oltre l'obiettivo di servizio, con una salvaguardia.
- **Usare l'età media.** I nuovi elementi abbassano la media mentre i vecchi si accumulano. Si mostrino la mediana, l'85° percentile e l'elemento più vecchio.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizioni e dati | Date di ingresso e motivi di uscita mancanti o incoerenti | Alcuni team registrano le date; le definizioni di pronto differiscono | Una definizione scritta di pronto e di età del backlog; data di ingresso e motivo di uscita obbligatori | Qualità dei dati campionata; età misurata attraverso cloni e spostamenti | Definizioni condivise tra team e fornitori e riviste quando smettono di orientare le decisioni |
| Salute del backlog | Il backlog cresce senza che nessuno lo noti; nessuna potatura | Pulizia occasionale quando l'elenco diventa ingestibile | Potatura programmata; backlog di prodotto e di servizio separati | Dimensione, età, ingresso-uscita e tasso di scarto seguiti nel tempo e rivisti con una salvaguardia | Politica del backlog calibrata tra i team su domanda e capacità; i clienti vedono lo stato dei propri elementi |
| Raffinamento | Dettaglio aggiunto ad hoc in fase di pianificazione | Sessioni regolari per alcuni team | Raffinamento breve e regolare con una finestra pronta concordata | Copertura e profondità del pronto riviste e collegate agli esiti di consegna | Raffinamento condiviso tra team e dipendenze; la finestra si adatta alle condizioni |
| Uso nelle decisioni | Numeri mostrati solo quando qualcosa va storto | Riportati alla direzione senza discussione | Il team rivede età e profondità del pronto nel raffinamento | Lavoro di miglioramento finanziato segue la revisione | Le evidenze del backlog informano le decisioni di portafoglio e di capacità in tutta l'organizzazione |

## Checklist

- [ ] Ogni backlog ha un responsabile nominato e uno scopo dichiarato.
- [ ] Idee trattenute e promesse ai clienti sono etichettate e riportate separatamente.
- [ ] Ogni elemento ha una data di ingresso obbligatoria e un motivo di uscita da un elenco controllato.
- [ ] Il team ha una breve definizione scritta di pronto.
- [ ] L'età del backlog è riportata come mediana, 85° percentile ed elemento più vecchio.
- [ ] Il rapporto ingresso-uscita è mostrato come cifra mobile accanto al throughput.
- [ ] Una finestra pronta è concordata e la profondità del lavoro pronto è riportata rispetto ad essa.
- [ ] La copertura del raffinamento è riportata prima della pianificazione, non dopo.
- [ ] Una sessione mensile di potatura è in calendario e il tasso di scarto è riportato.
- [ ] Le code di servizio mostrano la quota oltre l'obiettivo e l'uso degli stati di pausa.
- [ ] La revisione della manipolazione per le metriche di backlog è stata eseguita questo trimestre.

## Prompt IA

**Valutare la salute di un backlog.**

```text
Lavoro con [nome del team], che possiede [tipo di backlog, come un product
backlog o una coda di incidenti]. Ecco una sintesi del backlog: [numero di
elementi], distribuzione dell'età [mediana, 85° percentile, elemento più
vecchio], elementi conclusi per [settimana] [numeri], elementi aggiunti per
[settimana] [numeri] e motivi di scarto [conteggi]. La nostra definizione di
pronto è: [definizione].

Spiega che cosa potrebbe significare questa combinazione di cifre, elencando
almeno tre spiegazioni diverse, e suggerisci quali dati aggiuntivi le
distinguerebbero. Non inventare valori di riferimento né obiettivi. Elenca le tue
ipotesi e tutto ciò che non hai potuto determinare da quanto ti ho fornito.
```

**Redigere una definizione di pronto.**

```text
Aiutami a redigere una breve definizione di pronto per [nome del team], che
lavora su [tipo di lavoro]. I nostri attuali problemi con gli elementi non pronti
sono: [elenco dei problemi]. Proponi non più di sei criteri, di' quale problema
affronta ciascun criterio e descrivi come il team potrebbe verificare ciascuno in
meno di un minuto. Suggerisci inoltre quando il team dovrebbe essere autorizzato
a iniziare un elemento che non soddisfa la definizione. Non copiare alcun testo
di framework. Elenca le tue ipotesi.
```

**Pianificare una sessione di potatura del backlog.**

```text
Pianifica una sessione di potatura di [durata] per il backlog di [nome del team].
Il backlog ha [numero] elementi e i più vecchi hanno [età]. I motivi di uscita
che usiamo sono [elenco]. Proponi un ordine del giorno, le domande da porre su
ogni vecchio elemento, un semplice messaggio da inviare ai richiedenti i cui
elementi vengono rimossi e i dati da registrare dopo. Indica i modi in cui la
sessione potrebbe essere manipolata e come individuarli. Non inventare
statistiche. Elenca le tue ipotesi.
```

**Separare il lavoro di prodotto e di servizio in un backlog misto.**

```text
Ecco un campione di [numero] elementi dal nostro backlog combinato in [nome dello
strumento], con i campi [elenco dei campi]. Classifica ciascun elemento come idea
trattenuta, promessa a un cliente con un'aspettativa di servizio o poco chiaro e
spiega il tuo ragionamento. Poi suggerisci etichette e una semplice regola per
instradare i futuri elementi. Riporta schemi, non singole persone, e non
ipotizzare fatti non presenti nei dati. Elenca le tue ipotesi e gli elementi che
non hai potuto classificare.

[incolla gli elementi, con i dati personali rimossi]
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata e gli argomenti vicini per una metrica di backlog che si sta per introdurre.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che un argomento di backlog rivisto mantenga coerenti i propri vettori di manipolazione, le salvaguardie e i rimandi.

## Punti chiave

- Un backlog è una coda di promesse, perciò si leggano insieme dimensione ed età e si mostrino gli elementi più vecchi.
- Si tengano idee trattenute e promesse ai clienti in viste separate, poiché l'attesa significa cose diverse in ciascuna.
- Si miri a una breve finestra di lavoro pronto e si misuri la copertura del raffinamento sugli elementi che stanno per iniziare.
- Si poti secondo un calendario, si registri perché gli elementi escono e si tratti un tasso di scarto pari a zero come un segnale d'allarme.
- Si fissino obiettivi su età e finestre di servizio, non sulla dimensione grezza, e si abbini ogni metrica di backlog a una salvaguardia.
- Le metriche di backlog descrivono come il lavoro arriva a un team e come viene gestito e non classificano mai le persone.

## Riferimenti e letture di approfondimento

1. Schwaber, K., and Sutherland, J., *The Scrum Guide*, 2020, https://scrumguides.org/scrum-guide.html.
2. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
3. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Cohn, M., *User Stories Applied: For Agile Software Development*, Addison-Wesley, 2004.
6. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [User story](https://en.wikipedia.org/wiki/User_story).
11. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
12. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
13. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
