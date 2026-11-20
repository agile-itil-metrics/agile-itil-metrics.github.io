# Lead time, cycle time ed efficienza del flusso

**Lead time, cycle time ed efficienza del flusso hanno significato solo quando ciascuno ha un inizio e una fine scritti, una distribuzione al posto di una media e una visione dell'attesa che riempie la maggior parte del tempo trascorso.**

## Panoramica e motivazione

Quasi ogni team vuole sapere quanto tempo richiede il lavoro. La domanda sembra semplice e genera discussioni, perché «quanto» dipende da chi chiede e da dove fa partire il cronometro. Un cliente conta dal momento in cui ha fatto la richiesta. Uno sviluppatore conta dal momento in cui ha preso in carico il lavoro. Un responsabile delle operazioni conta dal momento in cui il ticket è stato assegnato a una coda. Tutti e tre hanno ragione rispetto al proprio cronometro, e tutti e tre ottengono numeri diversi per lo stesso lavoro.

Il [lead time](https://en.wikipedia.org/wiki/Lead_time) è il tempo trascorso tra l'arrivo di una richiesta e il suo soddisfacimento, visto dalla parte di chi l'ha fatta. Il [cycle time](https://en.wikipedia.org/wiki/Cycle_time) è il tempo trascorso tra il momento in cui il team si impegna su un lavoro e il momento in cui lo conclude, visto dalla parte del team che lo svolge. La differenza tra i due è il tempo in cui la richiesta ha atteso prima che il team iniziasse. L'efficienza del flusso è la quota di tempo trascorso in cui qualcuno stava effettivamente lavorando sull'elemento, in contrapposizione a quando l'elemento attendeva. Se un elemento ha richiesto 10 giorni dall'inizio alla fine ed è stato lavorato per 1 giorno, la sua efficienza del flusso è del 10 percento. Il tempo di lavorazione (touch time) è la parte di lavoro. Il tempo di attesa è tutto il resto.

Lo [sviluppo software lean](https://en.wikipedia.org/wiki/Lean_software_development) e la Kanban Guide hanno portato queste idee dalla manifattura al lavoro della conoscenza. Le pratiche ITIL parlano di tempo di risoluzione, tempo di evasione e obiettivi di livello di servizio, e i team agili parlano di cycle time e di elementi di lavoro. Questo argomento fornisce un unico insieme di definizioni che regge quando un incidente, una richiesta, una modifica e una story condividono la stessa riunione.

Il tempo trascorso ha una proprietà che sorprende la prima volta che lo si misura. Nella maggior parte del lavoro della conoscenza e del lavoro di servizio, l'elemento trascorre la maggior parte della propria vita in attesa: di una decisione, di un revisore, di un ambiente, di un fornitore, di una finestra di manutenzione o semplicemente di una persona occupata in altro. Rendere visibile quell'attesa è la cosa più utile che queste metriche fanno. Un team che non vede il proprio tempo di attesa tende a cercare di migliorare lavorando più in fretta, il che ha poco effetto su un sistema in cui il 90 percento del tempo trascorso è speso in coda. Il comportamento delle code è trattato in profondità nell'argomento 2.3 «Lavoro in corso e code», e la visione completa del flusso di valore è nell'argomento 2.4 «Metriche del flusso di valore».

Le misure di tempo si riportano come percentili, come la mediana e l'85° o il 95° [percentile](https://en.wikipedia.org/wiki/Percentile), per le ragioni esposte nell'argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio». I timestamp grezzi provengono dalle fonti dell'argomento 1.5 «Fonti dei dati e strumentazione». Le misure di flusso di lavoro in corso, throughput ed età dell'elemento di lavoro sono nell'argomento 2.1 «Misure del flusso», e la misura DORA del change lead time è nell'argomento 2.8 «Metriche DORA». Questo argomento tratta le misure di tempo in sé: come definirle perché siano confrontabili, dove partono e dove si fermano i loro cronometri e come mettere in evidenza l'attesa che contengono.

## Principi chiave

- **Si nomini il cronometro prima di leggere il numero.** Ogni misura di tempo ha un evento di inizio, un evento di fine e un elenco di esclusioni. Una cifra senza di essi è un'opinione.
- **Il lead time appartiene al cliente, il cycle time appartiene al team.** Si tengano entrambi e si etichetti sempre quale dei due mostra un grafico, perché il divario tra loro è un segnale a sé.
- **Si riportino distribuzioni, mai solo una media.** La mediana descrive l'elemento tipico. Un percentile alto descrive il rischio che il cliente porta davvero.
- **L'attesa è il risultato principale.** L'efficienza del flusso è di solito bassa, e la risposta è rimuovere code e passaggi di consegne, non chiedere alle persone di sbrigarsi.
- **Gli stati di pausa sono decisioni di progettazione.** Se il cronometro può essere fermato spostando un elemento in uno stato «in attesa», quello stato verrà usato, perciò si conti con quale frequenza e da chi viene usato.
- **Si confronti un elemento con quelli della sua specie.** Un incidente, una richiesta standard, una modifica e una funzionalità hanno forme diverse. Si segmenti per tipo di lavoro prima di confrontare qualsiasi cosa.
- **Si misurino i sistemi, non le persone.** Le misure di tempo descrivono come il lavoro scorre attraverso un team o un servizio. Non sono mai una classifica delle persone.

## Definizioni delle metriche

La tabella seguente usa un unico vocabolario per gli elementi di lavoro agili e per i record ITIL. «Elemento di lavoro» indica qualsiasi record che attraversa un flusso di lavoro: una story, un'attività, un incidente, una richiesta di servizio, una modifica o un record di problema. Tutte le durate sono tempo di calendario trascorso, salvo diversa indicazione, e ciascuna è riportata come mediana e come percentile alto.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lead time | Tempo trascorso dall'arrivo di una richiesta alla sua consegna al richiedente | timestamp di consegna meno timestamp di arrivo della richiesta, per elemento di lavoro; il cronometro parte quando la richiesta è registrata e si ferma quando il richiedente può usare il risultato; gli elementi ancora aperti e quelli annullati prima della consegna sono esclusi e contati a parte | giorni od ore | Cronologia dello strumento ITSM o dell'issue tracker | Gestione delle richieste di servizio; gestione degli incidenti; abilitazione delle modifiche | Lead time sulla lavagna del team; tempo dalla richiesta al rilascio | Settimanale, rivisto mensilmente |
| Cycle time | Tempo trascorso dal momento in cui il team inizia il lavoro al momento in cui lo conclude | timestamp di conclusione meno timestamp di inizio, per elemento di lavoro; il cronometro parte al primo passaggio in uno stato di lavorazione attiva e si ferma al primo passaggio in uno stato di completamento; il tempo prima dell'inizio e dopo lo stato di completamento è escluso | giorni od ore | Cronologia degli stati del tracker o della lavagna | Gestione degli incidenti; gestione delle richieste di servizio; abilitazione delle modifiche | Cycle time (vedi Argomento 2.1 «Misure del flusso») | Settimanale |
| Tempo di lavorazione (touch time) | Tempo in cui una persona o un'automazione lavora attivamente sull'elemento | somma degli intervalli che l'elemento trascorre negli stati classificati come lavoro attivo; gli stati di attesa, di blocco e di coda sono esclusi | ore | Cronologia degli stati del tracker, con ogni stato classificato come attivo o di attesa | Gestione degli incidenti; gestione delle richieste di servizio | Tempo di lavorazione in una mappa del flusso di valore | Campione mensile |
| Tempo di attesa | Tempo in cui l'elemento è in coda, bloccato o in pausa | cycle time meno tempo di lavorazione, per elemento di lavoro; non applicabile per gli elementi senza un inizio registrato | giorni od ore | Cronologia degli stati del tracker | Gestione degli incidenti; gestione dei livelli di servizio | Tempo di attesa o tempo di blocco su una lavagna | Mensile |
| Efficienza del flusso | Quota del cycle time spesa in lavoro attivo | somma dei tempi di lavorazione / somma dei cycle time, per gli elementi conclusi nel periodo; gli elementi con cronologia degli stati mancante sono esclusi e contati a parte | percentuale | Cronologia degli stati del tracker | Miglioramento continuo; gestione delle richieste di servizio | Efficienza del flusso della pratica lean | Mensile |
| Quota di pausa del cronometro | Quota del cycle time durante la quale il cronometro formale del servizio è rimasto in pausa | somma delle durate delle pause / somma dei cycle time, per gli elementi conclusi nel periodo; le pause sono gli stati definiti nelle regole scritte del cronometro | percentuale | Cronologia degli stati dello strumento ITSM | Gestione dei livelli di servizio; gestione degli incidenti | Tempo nella colonna bloccato o in sospeso | Mensile |

L'inizio del cronometro del cycle time è una decisione del team che deve essere scritta. Il cronometro formale di un accordo sul livello di servizio (SLA) spesso si ferma mentre un elemento attende il cliente, perciò questo argomento riporta la quota di pausa invece di scartare quel tempo. Il tempo di lavorazione è dedotto dagli stati, quindi la sua accuratezza dipende da quanto bene gli stati descrivono il lavoro.

## Raccomandazioni

### Definire i cronometri

**1. Si scrivano l'inizio e la fine di ciascun cronometro.** Per il lead time l'inizio è l'arrivo della richiesta, come registrato dal primo sistema con cui il richiedente entra in contatto, e la fine è il momento in cui il richiedente può usare il risultato. Per il cycle time l'inizio è il primo passaggio in uno stato attivo e la fine è il primo passaggio in uno stato di completamento. Si inseriscano entrambi nel registro delle metriche (vedi Argomento 1.4 «Governance e responsabilità delle metriche») e si mostri la definizione sotto ogni grafico.

**2. Si concordi che cosa significhi «fatto» per ciascun tipo di lavoro.** Una modifica è fatta quando è in esecuzione in produzione e verificata, non quando il codice viene integrato. Un incidente è concluso quando il servizio è ripristinato per l'utente, non quando il ticket viene chiuso da un'operazione di massa il venerdì. Una richiesta è conclusa quando il richiedente ha ciò che aveva chiesto. Se «fatto» differisce da un team all'altro, i cycle time non si possono confrontare tra loro.

**3. Si tengano sia il lead time sia il cycle time e si osservi il divario.** La differenza tra i due è l'attesa di impegno: il tempo in cui una richiesta resta ferma prima che il team inizi. Un cycle time breve accanto a un lead time lungo dice che il team lavora con efficienza su ciò che avvia e che l'accettazione è il collo di bottiglia. Un cycle time lungo accanto a un lead time breve dice che le richieste sono accettate in fretta e poi si bloccano all'interno del team.

### Riportare il tempo con onestà

**4. Si usino i percentili e si dica quali.** Si riportino la mediana e l'85° o il 95° percentile, per esempio «metà degli elementi si è conclusa entro 4 giorni e l'85 percento entro 11 giorni». Quell'affermazione è anche una previsione: un nuovo elemento ha circa l'85 percento di probabilità di concludersi entro 11 giorni se il sistema rimane lo stesso. Una media non può darle quella frase e si sposta molto quando compare un singolo valore anomalo (vedi Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

**5. Si tracci ogni elemento, non solo il riepilogo.** Un diagramma a dispersione del cycle time rispetto alla data di conclusione mostra a colpo d'occhio la forma del sistema: gruppi, una lenta deriva verso l'alto, un brusco salto dopo una modifica di processo. I numeri di sintesi vanno accanto al grafico. Uno strumento che offre solo una linea di media elimina l'informazione di cui il team ha più bisogno.

**6. Si segmenti per tipo di lavoro e per classe di servizio.** Un incidente urgente, una richiesta standard, una modifica pianificata e una story di ricerca hanno tempi attesi diversi. Si suddividano i dati per tipo, e per priorità dove la priorità cambia il modo in cui il lavoro viene gestito, prima di cercare schemi. Le popolazioni miste producono una distribuzione ampia che non descrive l'esperienza di nessuno.

### Mettere in evidenza l'attesa

**7. Si classifichi ogni stato come attivo, di attesa o concluso.** È questo il lavoro che rende possibile l'efficienza del flusso. «In sviluppo» e «in revisione con un revisore al lavoro» sono attivi. «In attesa di revisione», «in attesa di approvazione», «bloccato» e «in attesa del cliente» sono di attesa. Si riveda la classificazione con il team, perché le etichette di un flusso di lavoro raramente dicono tutta la verità, e uno stato chiamato «in corso» spesso nasconde un elemento che nessuno tocca da una settimana.

**8. Si calcoli l'efficienza del flusso come diagnostica, non come obiettivo.** La si calcoli su un campione o su tutti gli elementi conclusi e la si usi per trovare dove vive l'attesa: quale stato trattiene gli elementi più a lungo e quale passaggio di consegne lo precede. Ci si aspettino numeri bassi e non si fissi un obiettivo come «raggiungere il 40 percento». Alzare il numero ridenominando gli stati di attesa come attivi è facile e inutile, e i veri guadagni vengono dalla rimozione della coda stessa (vedi Argomento 2.4 «Metriche del flusso di valore»).

**9. Si conti separatamente il tempo di blocco e di pausa.** Si monitorino la frequenza con cui gli elementi entrano in uno stato di blocco o di pausa, quanto vi restano e quale era il motivo. Un breve elenco di motivi di blocco ricorrenti, come l'attesa di un'approvazione, di un ambiente o di un fornitore, dice che cosa correggere e con chi parlare. Si riporti la quota di pausa accanto a qualsiasi risultato di livello di servizio che escluda il tempo in pausa (vedi Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»).

### Usare bene i numeri

**10. Si controlli la coda per controllare il tempo.** Il tempo attraverso un sistema cresce al crescere del lavoro in corso, una relazione enunciata dalla [legge di Little](https://en.wikipedia.org/wiki/Little%27s_law), che mette in relazione il numero medio di elementi nel sistema, il tasso di arrivo o di completamento e il tempo medio che ciascun elemento vi trascorre. Limitare il lavoro in corso è quindi la leva più diretta sul cycle time (vedi Argomento 2.3 «Lavoro in corso e code»). Cambiare l'obiettivo della metrica senza cambiare la coda cambia solo l'incentivo a rendicontare in modo scorretto.

**11. Si usino le distribuzioni del cycle time per le previsioni e per gli obiettivi di livello di servizio.** Se l'85° percentile del cycle time per le richieste standard è di 6 giorni, un impegno a 5 giorni sarà mancato spesso, e un impegno a 8 giorni sarà rispettato con margine. Si basi un obiettivo interno su ciò che il sistema ha fatto, poi si lavori sul sistema per spostare la distribuzione (vedi Argomento 3.5 «Metriche di evasione delle richieste di servizio» e Argomento 4.3 «Metriche di abilitazione delle modifiche»).

**12. Si tratti una definizione modificata come un evento.** Se l'inizio o la fine di un cronometro cambia, lo si segni su ogni grafico e, dove possibile, si ricostruisca la storia dagli eventi grezzi. Senza questa disciplina una linea di tendenza mostra l'effetto di un cambio di definizione come se fosse un miglioramento o un peggioramento (vedi Argomento 1.5 «Fonti dei dati e strumentazione»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Lead time | Ritardare la creazione del record della richiesta così che il cronometro parta tardi; chiudere e riaprire gli elementi per riavviare il cronometro; dividere una richiesta in molte richieste minuscole | Confrontare i record delle richieste con il primo contatto in e-mail o chat su un campione; monitorare il tasso di riapertura; monitorare la dimensione e il numero di elementi per richiesta |
| Cycle time | Far partire il cronometro in ritardo spostando gli elementi in «in corso» solo alla fine; lasciare gli elementi fuori dalla lavagna finché non sono quasi finiti; suddividere il lavoro in pezzi che da soli non producono valore | Età dell'elemento di lavoro per gli elementi aperti (vedi Argomento 2.1 «Misure del flusso»); verificare che gli elementi fatti siano utilizzabili dal richiedente; confrontare lead time e cycle time |
| Tempo di lavorazione (touch time) | Classificare gli stati di attesa come attivi o registrare attività per sembrare occupati | Rivedere ogni trimestre la classificazione degli stati con il team; campionare gli elementi e confrontare l'attività registrata con commit, commenti e calendari |
| Tempo di attesa | Creare nuovi stati così che il tempo di attesa cada in un vuoto non misurato; spostare gli elementi in attesa in uno stato esterno al flusso di lavoro | Contare gli stati e le transizioni non documentati (vedi Argomento 1.5 «Fonti dei dati e strumentazione»); confermare su un campione che il cycle time sia uguale a tempo di lavorazione più tempo di attesa |
| Efficienza del flusso | Riclassificare l'attesa come attiva; selezionare per il campione solo gli elementi veloci; concludere prima gli elementi facili per alzare il rapporto | Classificazione degli stati fissa con registro delle modifiche; calcolarla su tutti gli elementi conclusi; riportarla con l'85° percentile del cycle time e l'età degli elementi aperti |
| Quota di pausa del cronometro | Mettere in pausa il cronometro formale del servizio per ragioni che non dipendono dal cliente, come i passaggi interni, per rispettare lo SLA | Verificare su un campione i motivi delle pause; riportare affiancati tempo trascorso e tempo SLA; rivedere la visione del cliente sul tempo di risoluzione (vedi Argomento 5.1 «Metriche SLA, OLA e XLA») |

Una lettura sana mostra un lead time e un cycle time che si muovono insieme, un divario tra i due che il team sa spiegare, un 85° percentile che è un multiplo stabile della mediana e un'efficienza del flusso che è bassa ma in crescita man mano che specifiche code vengono rimosse. I segnali di allarme sono una mediana che migliora mentre il percentile alto peggiora, una quota di pausa che cresce alla fine di ogni mese e un'efficienza del flusso che salta senza alcun cambiamento nel modo di lavorare. Quando un numero migliora, qualcuno dovrebbe poter indicare il cambiamento nel lavoro che lo spiega. Un miglioramento dovuto alla manipolazione di solito non supera questa prova. La psicologia più ampia è trattata nell'argomento 1.2 «La legge di Goodhart e la psicologia delle metriche».

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Lead time dal punto di vista del richiedente | Corrisponde a ciò che il cliente percepisce; difficile da migliorare cambiando etichette interne | L'evento di inizio è fuori dal controllo del team e può essere registrato male |
| Cycle time dall'impegno del team | Sotto il controllo del team; facile da calcolare dalla cronologia della lavagna | Ignora il ritardo di accettazione; un team può sembrare veloce mentre le richieste attendono |
| Tempo trascorso (cronometro di calendario) | Semplice, confrontabile e corrispondente all'esperienza del cliente | Include notti e fine settimana, il che può trarre in inganno per team con orari diversi |
| Cronometro in orario lavorativo | Si adatta ai livelli di servizio presidiati e ai turni di reperibilità | Richiede un calendario per team; nasconde l'attesa reale vissuta dal cliente |
| Efficienza del flusso come rapporto | Mostra in un unico numero intuitivo quanta parte del tempo è attesa | Dipende dalla classificazione degli stati; facile da gonfiare; può essere letta come un obiettivo |
| Rendicontazione per percentili | Mostra il rischio e supporta le previsioni | Richiede abbastanza elementi per periodo; più difficile da leggere per alcuni destinatari rispetto a una media |

Il consiglio pratico è di partire dal tempo trascorso, aggiungere una vista in orario lavorativo solo dove un livello di servizio lo richiede e riportare sia il lead time sia il cycle time a un percentile alto. Si usi l'efficienza del flusso come spunto di conversazione in una revisione, con la classificazione degli stati sul tavolo, e si eviti di metterla in una scorecard.

## Domande da discutere con il team

**1. Dove parte il nostro cronometro del lead time e dove pensa che parta il cliente?**
Si prendano tre richieste recenti e le si ripercorra dal primo contatto alla consegna. Si segni il momento in cui la richiesta è stata registrata nel sistema di registrazione. Si confronti il divario tra il primo contatto e la creazione del record. Chi facilita dovrebbe cercare code nascoste in e-mail, chat o una casella condivisa che non compaiono mai in una metrica.

**2. Che cosa significa «fatto» per ciascun tipo di lavoro che gestiamo?**
Si elenchino i tipi di lavoro, come incidenti, richieste, modifiche e story, e si chieda l'evento di fine di ciascuno. Ci si chieda se il richiedente concorderebbe che il lavoro era concluso in quel momento. Le divergenze di opinione indicano un cronometro che si ferma troppo presto. Si concordi un evento di fine per tipo e lo si scriva.

**3. Quali dei nostri stati sono di attesa e quanto tempo vi restano gli elementi?**
Si metta il flusso di lavoro su una parete e si segni ogni stato come attivo o di attesa. Si chieda il tempo tipico in ciascuno stato di attesa dai dati dell'ultimo mese. Lo stato di attesa più grande è di solito una sorpresa per qualcuno. Si scelga una coda da esaminare più da vicino il mese prossimo.

**4. Quale percentile promettiamo e che cosa ha effettivamente fatto il sistema?**
Si mostri la distribuzione dei cycle time dell'ultimo trimestre con la mediana, l'85° percentile e il 95° percentile. Ci si chieda quale impegno il team assuma attualmente con i clienti e dove cada sulla distribuzione. Si discuta il costo di promettere un tempo più rapido di quello che il sistema ha fornito. Si decida un impegno che il team possa rispettare per ragioni proprie.

**5. Chi è autorizzato a mettere in pausa il cronometro e perché?**
Si elenchino gli stati di pausa e di sospensione, le persone che possono usarli e i motivi dichiarati. Si legga un campione di elementi in pausa e ci si chieda se la causa fosse davvero il cliente. Si discuta che cosa accadrebbe se la quota di pausa fosse mostrata sullo stesso grafico del risultato SLA. Chi facilita dovrebbe mantenere un tono curioso, dato che gli stati di pausa spesso esistono per ragioni legittime che nessuno ha mai scritto.

**6. Se l'efficienza del flusso raddoppiasse il prossimo trimestre, che cosa avremmo cambiato nel modo in cui il lavoro si muove?**
Si chieda al gruppo di nominare code, passaggi di consegne, approvazioni o dimensioni di lotto specifici che dovrebbero cambiare. Se le risposte sono generiche, come «lavorare di più» o «comunicare meglio», il numero non è ancora collegato ad alcuna azione. Si scelga un cambiamento concreto, se ne preveda l'effetto sul tempo di attesa di uno stato nominato e si concordi quando verificarlo.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna possiedono il cronometro del cycle time e ne vedono il dettaglio sulla lavagna. Traggono il massimo vantaggio dal classificare gli stati con onestà, limitare il lavoro in corso e leggere il diagramma a dispersione nelle proprie retrospettive. Dovrebbero resistere alla pressione di suddividere il lavoro in pezzi artificialmente piccoli che si concludono in fretta e non consegnano nulla, e dovrebbero mostrare l'età degli elementi aperti accanto ai cycle time completati (vedi Argomento 2.1 «Misure del flusso»).

### Team di servizio e operations

I team di servizio lavorano con record che portano cronometri formali di livello di servizio, e i loro stati di pausa sono il punto in cui tempo trascorso e tempo SLA divergono. Dovrebbero riportare entrambi i cronometri, segmentare per tipo e priorità e registrare il motivo di ogni pausa. I team operativi sono anche i titolari naturali delle code per approvazioni, finestre di manutenzione e risposte dei fornitori, che spesso dominano il tempo di attesa che i team di prodotto vedono (vedi Argomento 3.5 «Metriche di evasione delle richieste di servizio»).

### Leadership e governance

I dirigenti chiedono il lead time perché è il numero più vicino a ciò che il cliente sperimenta. Dovrebbero aspettarsi una definizione, una distribuzione e una segmentazione con ogni cifra e dovrebbero chiedere dove si trova l'attesa prima di chiedere perché le persone siano lente. Gli obiettivi per queste misure funzionano meglio quando si applicano a un servizio o a un flusso di valore con un responsabile nominato e quando sono fissati a partire da ciò che il sistema ha fornito. Un obiettivo applicato a una media invita alla riclassificazione e ai giochi sul cronometro.

### Clienti e utenti

I clienti sperimentano il lead time, compresa tutta l'attesa prima che il lavoro cominci e tutta l'attesa dopo che il team ritiene di aver finito. Hanno bisogno di una stima onesta espressa come intervallo, per esempio «la maggior parte delle richieste di questo tipo si conclude entro una settimana e quasi tutte entro due», e hanno bisogno di sapere quando è stata applicata una pausa perché il team stava aspettando loro. I rapporti ai clienti dovrebbero dichiarare quale cronometro usano (vedi Argomento 5.1 «Metriche SLA, OLA e XLA»).

## In pratica: un esempio di ITIL agile

Il reparto IT di un ospedale regionale gestisce un service desk, un team di infrastruttura e un team applicativo che supporta il personale clinico. Tutti i numeri di questo esempio sono illustrativi.

Il service desk riporta che le richieste di accesso standard rispettano il loro obiettivo di 5 giorni lavorativi nel 94 percento dei casi, eppure i responsabili di reparto continuano a lamentare che l'accesso richiede «circa due settimane». Il responsabile delle operazioni di servizio chiede al team di misurare lead time e cycle time per queste richieste nell'arco di un trimestre, usando i giorni di calendario trascorsi dalla cronologia grezza degli stati invece del timer SLA.

Il risultato per 400 richieste (illustrativo) è un cycle time mediano di 3 giorni e un 85° percentile di 9 giorni. Il lead time, misurato dal momento in cui il responsabile ha scritto per la prima volta alla casella condivisa, ha una mediana di 8 giorni e un 85° percentile di 16 giorni. Due risultati spiegano il divario. Primo, le richieste attendono in media 3 giorni nella casella di posta prima che qualcuno crei un ticket, cosa invisibile allo SLA. Secondo, lo stato «in attesa di approvazione» rappresenta la maggior parte del cycle time: dei 9 giorni dell'85° percentile, circa 6 giorni sono spesi in attesa che un capo reparto approvi. Il tempo di lavorazione su un campione di 30 richieste è di circa mezza giornata, quindi l'efficienza del flusso è di circa l'8 percento (illustrativo). Il risultato SLA è alto perché il timer si ferma durante «in attesa di approvazione» e «in attesa del cliente», perciò la quota di pausa del cronometro è il 52 percento del cycle time.

Il team prende tre decisioni. Aggiunge un modulo web che crea il ticket al primo contatto, così che il cronometro del lead time parta dove parte quello del cliente. Concorda con i capi reparto che le approvazioni per un elenco definito di ruoli standard siano preautorizzate, con un audit trimestrale invece di un'approvazione per richiesta. E aggiunge la quota di pausa e il lead time alla revisione mensile del servizio accanto al risultato SLA. Dopo un trimestre, il lead time mediano scende a 4 giorni e l'85° percentile a 8 giorni (illustrativo), mentre il risultato SLA si muove appena.

Durante la revisione il team individua un rischio di manipolazione. Un tecnico ha iniziato a spostare i ticket in «in attesa del cliente» non appena viene inviata un'e-mail di approvazione, il che non è lo scopo per cui lo stato era stato pensato. La quota di pausa per quel gruppo sale, l'audit di un campione di ticket in pausa mostra lo schema e il team riscrive le regole del cronometro in modo che solo una richiesta di informazioni al richiedente possa mettere in pausa il cronometro. La salvaguardia che ha individuato il problema è stata riportare la quota di pausa accanto al risultato SLA, che è l'abbinamento raccomandato in questo argomento.

## Lente di settore

**Startup.** Con un piccolo team e pochi passaggi di consegne, il cycle time è facile da misurare dalla lavagna e il lead time è vicino al cycle time. Si monitorino entrambi dal primo giorno con una semplice classificazione degli stati e si guardi il diagramma a dispersione ogni settimana. L'efficienza del flusso è di solito già alta per compiti piccoli, perciò il pericolo principale è un'accettazione informale che nasconde le richieste nella chat.

**Piccola impresa.** Una sola persona può essere richiedente, approvatore ed esecutore, e il service desk in hosting può offrire solo un timer SLA. Si esporti la cronologia grezza degli stati, si calcoli da sé il tempo trascorso e si mantenga una definizione per ciascun cronometro. Il risultato più utile è di solito quanto tempo le richieste attendono le risposte di fornitori o venditori.

**Grande impresa.** Molti passaggi di consegne tra team, fornitori e comitati di approvazione rendono il tempo di attesa grande e distribuito tra le organizzazioni. Si concordi un vocabolario condiviso per inizio, fine e pausa, si classifichino gli stati in modo coerente tra gli strumenti ITSM e di ingegneria e si segmenti per tipo di lavoro e classe di servizio. I confronti tra team sono significativi solo dopo che le definizioni si sono allineate, e un'aggregazione va costruita a partire dalle distribuzioni, non facendo la media delle medie dei team.

**Pubblica amministrazione e settore pubblico.** Tempi di risposta di legge, regole sugli appalti e catene di approvazione creano un'attesa che il team non può rimuovere da solo. Si registrino separatamente i cronometri imposti dall'esterno rispetto a quelli interni, così che la parte del ritardo controllata dall'organizzazione possa essere vista e migliorata. La rendicontazione pubblica del lead time, con definizioni semplici, costruisce fiducia ed espone le code create dalle politiche (vedi Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

La motivazione principale è che le misure di tempo trasformano un lamento vago («ci mette un'eternità») in un problema localizzato («le richieste attendono sei giorni per l'approvazione»). Gli stessi dati offrono ai team una previsione veritiera, così che gli impegni con i clienti si basino sulla distribuzione del lavoro passato anziché sulla speranza. Mostrano anche dove un investimento in automazione, approvazioni o personale accorcerebbe il tempo trascorso, che spesso è un luogo diverso da quello in cui le persone se lo aspettano.

I costi sono modesti quando gli strumenti registrano già i cambi di stato. L'avvio comporta concordare le definizioni, classificare gli stati e costruire una vista della distribuzione e del diagramma a dispersione. I costi di esercizio sono il tempo per mantenere la classificazione degli stati, per verificare su un campione i motivi delle pause e per tenere la revisione mensile. Dove la cronologia degli stati manca o non è affidabile, il primo investimento è nella strumentazione descritta nell'argomento 1.5 «Fonti dei dati e strumentazione».

Il ritorno si manifesta in schemi che un team può misurare da sé: un cycle time più breve al percentile alto per un tipo di lavoro, meno escalation per elementi in ritardo, meno dispute su quale cronometro sia giusto e un divario minore tra lead time e cycle time. Non ci si aspetti un guadagno particolare da un benchmark. Chi scrive di lean e di flusso descrive come comune una bassa efficienza del flusso, ma nessuna cifra pubblicata dovrebbe essere adottata come obiettivo per il proprio lavoro senza i propri dati. Il costo totale di proprietà è dominato dal tempo delle persone, perciò si contino le ore del responsabile della metrica e dei revisori.

## Anti-pattern e insidie

- **Riportare la media.** Un solo valore anomalo lungo trascina la media e l'elemento tipico viene descritto male. Si riportino la mediana e un percentile alto e si tracciano gli elementi.
- **Un solo numero per tutto il lavoro.** Mescolare incidenti, richieste e funzionalità produce una distribuzione che non descrive nulla. Si segmenti prima per tipo di lavoro e classe di servizio.
- **Misurare solo il cronometro SLA.** Un timer che si ferma durante gli stati di attesa riporta un risultato che il cliente non sperimenta mai. Si riportino il lead time trascorso e la quota di pausa accanto ad esso.
- **Fissare un obiettivo di efficienza del flusso.** Le persone alzano il rapporto ridenominando gli stati. Lo si usi come diagnostica e si giudichi il successo dal tempo di attesa di code nominate.
- **Far partire il cronometro nel posto sbagliato.** Un cronometro che inizia all'assegnazione o al primo lavoro nasconde la coda di accettazione. Si faccia partire il lead time alla richiesta e il cycle time all'impegno e si pubblichino entrambi.
- **Confrontare i team per cycle time.** Lavoro diverso, stati diversi e definizioni diverse rendono prive di senso le classifiche e invitano alla manipolazione. Si confronti un team con la propria storia e si confrontino i servizi solo dopo che le definizioni si sono allineate.
- **Ignorare gli elementi aperti.** Il cycle time conta solo il lavoro concluso, perciò un elemento bloccato è invisibile finché non termina. Si monitori l'età degli elementi ancora in corso (vedi Argomento 2.1 «Misure del flusso»).
- **Cambiare le definizioni in silenzio.** La tendenza registra allora una modifica dello strumento. Si registri ogni modifica e la si segni sul grafico.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizioni e cronometri | Le persone citano le durate a memoria; ciascuno fa partire il cronometro in modo diverso | Alcuni team definiscono il cycle time sulla propria lavagna; i team ITSM citano il tempo SLA | Una definizione scritta di lead time, cycle time e pause usata da tutti i team | Le modifiche alle definizioni sono registrate e la storia è ricostruita dagli eventi grezzi | Le definizioni sono allineate con fornitori e clienti e riviste quando smettono di orientare le decisioni |
| Rendicontazione e analisi | Medie in una slide, assemblate a mano | Alcuni team mostrano mediane o un grafico dello strumento | Mediana e percentile alto, con diagramma a dispersione, segmentati per tipo di lavoro | Distribuzioni seguite nel tempo e riviste con una cadenza; previsioni ricavate da esse | I dati di flusso tra team e fornitori sono combinati per prevedere impegni da un capo all'altro |
| Attesa ed efficienza del flusso | L'attesa non è distinta dal lavoro | Esistono colonne di blocco su alcune lavagne | Ogni stato classificato come attivo o di attesa; efficienza del flusso calcolata su tutti gli elementi conclusi | Le code maggiori sono esaminate e finanziate per il miglioramento; motivi delle pause verificati | Code, approvazioni e passaggi di consegne riprogettati congiuntamente con i team e i fornitori che li creano |
| Uso nelle decisioni | Numeri mostrati a una revisione trimestrale e senza seguito | I team discutono il cycle time nelle retrospettive | Obiettivi di servizio fissati dalla distribuzione osservata | Obiettivi abbinati a salvaguardie e rivisti per la manipolazione | I clienti vedono intervalli onesti e le idee di miglioramento vengono da chiunque tocchi il lavoro |

## Checklist

- [ ] Ogni misura di tempo ha nel registro delle metriche un evento di inizio, un evento di fine e un elenco di esclusioni scritti.
- [ ] Lead time e cycle time sono entrambi riportati e ogni grafico è etichettato con quello che mostra.
- [ ] «Fatto» è definito per ciascun tipo di lavoro e concordato con il richiedente.
- [ ] I risultati sono riportati come mediana e percentile alto e gli elementi sono tracciati.
- [ ] I dati sono segmentati per tipo di lavoro e, dove pertinente, per classe di servizio.
- [ ] Ogni stato è classificato come attivo, di attesa o concluso e la classificazione è rivista ogni trimestre.
- [ ] Gli stati di pausa, chi può usarli e i loro motivi sono scritti e verificati su un campione.
- [ ] Tempo trascorso e tempo SLA sono mostrati affiancati, con la quota di pausa.
- [ ] L'efficienza del flusso è usata come diagnostica e non compare in una scorecard.
- [ ] Le modifiche alle definizioni sono registrate e segnate sui grafici.
- [ ] L'età degli elementi aperti è rivista insieme ai cycle time completati.

## Prompt IA

**Redigere le regole del cronometro per un tipo di lavoro.**

```text
Gestiamo [tipo di lavoro, per esempio richieste di accesso standard] in [strumento
o strumenti]. Gli stati del flusso di lavoro sono [elenco degli stati]. Redigi
regole scritte del cronometro per lead time e cycle time: l'evento che fa partire
ciascun cronometro, l'evento che lo ferma, quali stati mettono in pausa o
escludono tempo e che cosa accade agli elementi annullati e riaperti. Segnala gli
stati dal significato ambiguo e le domande a cui devo rispondere prima che le
regole siano definitive. Non inventare funzionalità del nostro strumento né
valori di riferimento. Elenca le tue ipotesi.
```

**Classificare gli stati come attivi o di attesa.**

```text
Ecco il flusso di lavoro per [team o servizio]: [stati con un significato di una
riga per ciascuno]. Per ogni stato, proponi se sia lavoro attivo, attesa o
concluso e spiega perché. Segnala gli stati che mescolano lavoro e attesa e
suggerisci come dividerli con la minima modifica al flusso di lavoro. Spiega come
la classificazione cambierebbe il calcolo dell'efficienza del flusso. Non
presupporre quanto a lungo gli elementi restino in ciascuno stato. Elenca le tue
ipotesi.
```

**Analizzare un insieme di cycle time.**

```text
Di seguito sono riportati i cycle time in [unità] per [numero] elementi conclusi
di tipo [tipo di lavoro], con le date di conclusione: [dati]. Descrivi la
distribuzione usando la mediana e il [percentile, per esempio 85°] percentile,
individua gruppi o derive nel tempo e suggerisci domande da porre al team sugli
elementi lenti. Raccomanda di quanti elementi ho bisogno perché i percentili siano
affidabili e spiega il ragionamento. Non inventare valori di riferimento né
confrontare con altre organizzazioni. Elenca le tue ipotesi.
```

**Esaminare una metrica per la manipolazione.**

```text
Riportiamo [metrica, per esempio efficienza del flusso] per [team o servizio],
definita come [definizione e cronometri]. Le persone possono influenzarla
tramite [comportamenti noti, se presenti]. Elenca modi plausibili in cui il
numero potrebbe essere manipolato o frainteso, una metrica o pratica di
salvaguardia abbinata per ciascuno e un campione di record che dovrei leggere a
mano per verificare. Non inventare statistiche sulla frequenza con cui la
manipolazione si verifica. Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare l'argomento che definisce una misura di tempo e la salvaguardia che deve affiancarla.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una misura di tempo modificata dichiari i propri cronometri, le esclusioni e il vettore di manipolazione.

## Punti chiave

- Il lead time è l'attesa del cliente e il cycle time è l'attesa del team, perciò si tengano entrambi e si esamini il divario tra loro.
- Si scrivano le regole di inizio, fine e pausa per ogni cronometro e si tratti un cambio di definizione come un evento.
- Si riportino la mediana e un percentile alto, si tracciano gli elementi e si segmenti per tipo di lavoro prima di confrontare qualsiasi cosa.
- L'efficienza del flusso è di solito bassa perché la maggior parte del tempo trascorso è attesa, perciò la si usi per individuare le code ed evitare di farne un obiettivo.
- Si mostri la quota di pausa accanto a qualsiasi risultato di livello di servizio che escluda il tempo in pausa.
- Si riducano il lavoro in corso e i passaggi di consegne per accorciare il tempo, perché dire alle persone di sbrigarsi non cambia le code.

## Riferimenti e letture di approfondimento

1. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. DeGrandis, D., *Making Work Visible: Exposing Time Theft to Optimize Work and Flow*, IT Revolution, 2017.
6. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
12. Wikipedia, [Cycle time](https://en.wikipedia.org/wiki/Cycle_time).
13. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
14. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
