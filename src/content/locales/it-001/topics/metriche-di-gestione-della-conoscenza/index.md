# Metriche di gestione della conoscenza

**Misuri la conoscenza in base al fatto che venga usata e ritenuta affidabile nel momento del bisogno, non in base a quanta ne esista: osservi insieme tasso di collegamento, riuso, aggiornamento e reperibilità, e tratti ogni conteggio di articoli come una domanda sul lavoro anziché come un punteggio.**

## Panoramica e motivazione

Un team di servizio accumula conoscenza ogni giorno: come ripristinare un servizio, che cosa significhi davvero un messaggio di errore confuso, quale soluzione alternativa ha retto l'ultima volta. La [gestione della conoscenza](https://en.wikipedia.org/wiki/Knowledge_management) è la disciplina che rende quella conoscenza disponibile alla persona successiva che ne ha bisogno. In ITIL 4 (l'edizione 2019 del framework pubblicato da AXELOS, e il fondamento ampiamente documentato di questo libro), la gestione della conoscenza è una pratica a sé stante, e [ITIL](https://en.wikipedia.org/wiki/ITIL) si aspetta anche che supporti la gestione degli incidenti, la gestione dei problemi e il service desk. Questo argomento tratta come capire se tale supporto è reale.

La maggior parte dell'output utilizzabile della gestione della conoscenza finisce in una [base di conoscenza](https://en.wikipedia.org/wiki/Knowledge_base): un archivio di articoli, runbook, registrazioni di errori noti e brevi risposte pratiche. Un [runbook](https://en.wikipedia.org/wiki/Runbook) è un insieme scritto di passaggi per un'operazione di routine o per un ripristino. Gli articoli sono la parte esplicita di ciò che un team sa. La [conoscenza tacita](https://en.wikipedia.org/wiki/Tacit_knowledge) delle persone esperte, come la sensazione che un allarme sia solo rumore, non può essere scritta per intero, e nessuna metrica di questo argomento la misura direttamente.

Nella visione ITIL, la conoscenza è una risorsa gestita con un ciclo di vita: creata, rivista, pubblicata, usata e ritirata. Nella visione agile, la documentazione deve guadagnarsi il proprio posto, la conversazione e il lavoro in coppia portano moltissimo, e la conoscenza scritta è un sottoprodotto del completare il lavoro. Entrambe le visioni concordano sulla prova: la conoscenza ha aiutato qualcuno a risolvere un problema reale più in fretta o meglio di quanto avrebbe fatto senza?

Il metodo che collega più direttamente le due visioni è il [Knowledge-Centered Service (KCS)](https://en.wikipedia.org/wiki/Knowledge-centered_support), una metodologia del Consortium for Service Innovation. Nel KCS, la conoscenza viene catturata e migliorata come parte della risoluzione del problema, non dopo. Le persone lavorano in due cicli. Il ciclo di risoluzione è il momento della risoluzione: cercare un articolo esistente, riutilizzarlo e migliorarlo se lo si trova, crearne uno se non c'è. Il ciclo evolutivo è il ciclo più lungo che studia come si comporta la conoscenza e migliora il sistema che la circonda. Il KCS propone anche indicatori propri, come il tasso con cui i casi risolti sono collegati ad articoli. Questo argomento riassume tali idee in modo neutrale rispetto ai fornitori; i team che adottano formalmente il KCS dovrebbero leggere la guida alle pratiche del Consortium.

Il numero di articoli in una base di conoscenza è un inventario, non un risultato, e cresce con l'incuria con la stessa facilità con cui cresce con la cura. Le metriche seguenti sono invece legate a un momento d'uso: un caso chiuso, una ricerca effettuata, la reazione di un lettore. Anche queste possono essere piegate (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

Le misure di contatto e di gestione appartengono al [service desk](https://en.wikipedia.org/wiki/Service_desk) (si veda l'Argomento 3.1 «Metriche del service desk»). Volume e schemi di ripetizione provengono dai dati sugli incidenti (si veda l'Argomento 3.2 «Volume e priorità degli incidenti»). Il successo del self-service, in cui gli utenti consultano gli articoli senza un operatore, è trattato separatamente (si veda l'Argomento 3.7 «Metriche di self-service e automazione»). Questo argomento resta sulla salute della conoscenza stessa e sul suo uso da parte delle persone che risolvono problemi.

## Principi chiave

- **Misurare l'uso nel punto di lavoro.** Un articolo collegato a un caso risolto o trovato da una ricerca è evidenza di valore. Un articolo che semplicemente esiste non lo è.
- **Catturare nel flusso di lavoro.** La conoscenza scritta durante la risoluzione è più fresca ed economica di quella scritta in uno sforzo di documentazione separato, perciò le metriche dovrebbero premiare la cattura come parte del completamento del lavoro.
- **Leggere l'aggiornamento rispetto all'uso.** Vecchio non significa sbagliato. Lo sforzo di revisione appartiene agli articoli usati spesso, non distribuito uniformemente su un catalogo di pagine per lo più non lette.
- **Campionare per pertinenza.** Un collegamento tra un caso e un articolo prova solo che qualcuno ha creato il collegamento. Un piccolo campione umano sul fatto che l'articolo fosse davvero adatto dice se il collegamento significa qualcosa.
- **Descrivere team e aree di conoscenza, mai singoli.** I conteggi di contributo per persona trasformano una risorsa condivisa in una competizione e insegnano a scrivere spazzatura (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).
- **Abbinare ogni metrica di volume a un segnale di qualità.** Tasso di collegamento con pertinenza, creazione di articoli con duplicati, riuso con feedback dei lettori.

## Definizioni delle metriche

La tabella elenca sette metriche. Le finestre temporali (come il periodo di revisione per l'aggiornamento) sono scelte che un team compie e mette per iscritto; nessun valore qui è un benchmark. Ovunque, «caso» significa una registrazione di incidente o di richiesta di servizio nello strumento ITSM (IT service management), e gli incidenti maggiori sono riportati separatamente in modo da non distorcere i rapporti (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori»).

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasso di collegamento della conoscenza | Quota di casi risolti che hanno almeno un articolo di conoscenza allegato al momento della risoluzione | casi risolti nel periodo con almeno un articolo collegato / casi risolti nel periodo. Conta la data di risoluzione; esclude gli incidenti maggiori, i casi chiusi come duplicati e i casi chiusi automaticamente senza lavoro umano | percentuale | Strumento ITSM: tabelle di collegamento tra casi e articoli | Gestione della conoscenza; gestione degli incidenti | La definizione di completato include la cattura di ciò che si è appreso | Settimanale per il team; mensile per la revisione |
| Rapporto di riuso | Quota di collegamenti ad articoli che puntano a un articolo esistente anziché a uno creato durante quel caso | collegamenti ad articoli esistenti prima dell'apertura del caso / tutti i collegamenti ad articoli effettuati sui casi risolti nel periodo. Esclude i collegamenti aggiunti dopo la chiusura del caso | percentuale | Strumento ITSM: data di creazione dell'articolo rispetto alla data di apertura del caso | Gestione della conoscenza; miglioramento continuo | Riuso anziché rilavorazione; proprietà condivisa del codice e della sua documentazione | Mensile |
| Aggiornamento degli articoli | Quota di articoli in uso che sono stati rivisti, oppure usati e confermati corretti, entro una finestra di revisione dichiarata | articoli in uso con una data di revisione o di uso confermato all'interno della finestra / articoli in uso. Un articolo è in uso se è stato collegato a un caso o visualizzato da un lettore negli ultimi 12 mesi (scelta del team); bozze e articoli ritirati sono esclusi | percentuale | Metadati della base di conoscenza e registro delle visualizzazioni | Gestione della conoscenza; service desk | Raffinamento del backlog della documentazione; azioni delle retrospettive | Mensile |
| Tasso di ricerche senza risultati | Quota di ricerche nella conoscenza che non restituiscono alcun articolo | ricerche con zero risultati / tutte le ricerche. Esclude le ricerche di bot e verifiche automatiche; conta ogni ricerca una volta anche se ripetuta entro un minuto | percentuale | Registro delle ricerche della base di conoscenza o del portale | Gestione della conoscenza; service desk; gestione delle richieste di servizio | Scoperta di bisogni degli utenti non soddisfatti; input per il backlog | Settimanale |
| Tasso di utilità | Quota di feedback dei lettori che dice che l'articolo è stato utile, mostrata con il tasso di risposta | voti utili / (voti utili + voti non utili) per gli articoli nel periodo; tasso di risposta = voti di feedback / visualizzazioni dell'articolo | percentuale, con tasso di risposta | Widget di feedback della base di conoscenza e registro delle visualizzazioni | Gestione della conoscenza; esperienza del cliente | Feedback delle parti interessate sulla revisione della documentazione | Mensile |
| Tempo di pubblicazione | Tempo trascorso da quando viene creata la bozza di un articolo a quando è rivisto e visibile al suo pubblico | il cronometro parte alla creazione della bozza, si ferma alla pubblicazione (o al primo stato visibile approvato). Esclude il tempo in uno stato di «sospeso, in attesa del rilascio del prodotto»; riportato come mediana e 85º percentile | giorni (mediana e 85º percentile) | Storico del flusso di lavoro della base di conoscenza | Gestione della conoscenza | Lead time di un elemento di lavoro da avvio a completamento (si veda l'Argomento 2.2 «Lead time, cycle time ed efficienza del flusso») | Mensile |
| Ampiezza dei contributi | Distribuzione della creazione e del miglioramento di articoli all'interno del team, misurata senza nominare le persone | contributori distinti che hanno creato o migliorato un articolo nel periodo / membri del team che hanno risolto casi nel periodo. Riportato solo per un team, mai come elenco di nomi | percentuale | Storico delle modifiche della base di conoscenza unito all'appartenenza al team | Gestione della conoscenza; miglioramento continuo | Proprietà collettiva; lavoro in coppia e swarming | Trimestrale |

Il tasso di collegamento della conoscenza ha un cronometro facile da trascurare. Il collegamento deve esistere quando il caso viene risolto, non quando qualcuno riordina una settimana dopo, perché il collegamento tardivo misura la pulizia e non dice nulla sull'uso durante la risoluzione. Il rapporto di riuso dipende da una data di creazione dell'articolo affidabile. Se gli articoli vengono migrati o importati in blocco, le date di creazione si azzerano e il rapporto sarà fuorviante finché la migrazione non viene segnalata.

## Raccomandazioni

### Decidere a che cosa serve la conoscenza

**1. Leghi ogni metrica di conoscenza a un caso d'uso.** Nomini le persone a cui la conoscenza serve: analisti del service desk che risolvono al primo contatto, ingegneri di reperibilità che gestiscono un avviso, oppure utenti che si aiutano da soli. Ogni pubblico ha bisogno di misure diverse. Un runbook per un ingegnere di reperibilità si giudica dal fatto che i passaggi abbiano ripristinato il servizio, mentre un articolo di reimpostazione della password si giudica dal fatto che l'utente abbia smesso di contattare il desk. Lo registri nel Suo registro (si veda l'Argomento 1.4 «Governance e responsabilità delle metriche»).

**2. Parta dal tasso di collegamento e dalla pertinenza, non dai conteggi degli articoli.** Il tasso di collegamento mostra se la conoscenza entra affatto nel momento della risoluzione. Lo abbini fin dall'inizio a un piccolo campione mensile in cui una persona legge 20 o 30 casi collegati e giudica se l'articolo era adatto. Un tasso di collegamento del 70 per cento con metà dei collegamenti irrilevanti è peggiore di un tasso del 40 per cento con collegamenti onesti, perché il primo nasconde la lacuna di conoscenza che il secondo rivela.

**3. Distingua «nessun articolo esiste» da «l'articolo esiste ma non è stato trovato».** Quando un caso si chiude senza collegamento, i motivi differiscono e così le correzioni. Aggiunga una breve scelta di chiusura, come «nessun articolo esisteva» e «articolo non trovato», e le riporti come quote dei casi non collegati. La prima indica contenuti da scrivere; la seconda indica ricerca, denominazione e struttura. Mantenga la scelta facoltativa dove rallenterebbe il desk e campioni invece.

### Catturare la conoscenza mentre il lavoro si conclude

**4. Faccia della cattura parte della definizione di completato.** In un team agile, un elemento di lavoro che cambia il comportamento di un servizio non è completato finché il runbook, la registrazione dell'errore noto o l'articolo di aiuto non sono aggiornati. Nel service desk, un caso che ha richiesto una scoperta non è risolto finché la scoperta non è catturata o un articolo esistente non è migliorato. È l'idea del KCS di lavorare nel ciclo di risoluzione, e mantiene basso il costo della scrittura perché chi scrive ha il contesto fresco.

**5. Consenta uno stato di bozza leggero.** Molti team perdono conoscenza perché ogni articolo deve superare una revisione pesante prima che qualcuno possa vederlo. La pratica in stile KCS distingue un articolo in lavorazione, visibile al team, da uno validato, visibile a un pubblico più ampio. Misuri separatamente il tempo di pubblicazione per entrambe le fasi, come mediane e 85º percentile, in modo che le revisioni lente emergano come una coda e non come una vaga lamentela (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

**6. Preferisca migliorare a creare.** Una pila crescente di articoli quasi duplicati peggiora la ricerca e rende più difficile mantenere l'aggiornamento. Osservi il rapporto di riuso accanto al conteggio delle creazioni e, quando la creazione sale mentre il riuso scende, cerchi i duplicati. Renda facile e visibile accorpare e ritirare, e conti un accorpamento come contributo positivo.

### Mantenere la conoscenza aggiornata e reperibile

**7. Riveda gli articoli che vengono usati.** Concentri lo sforzo di revisione dove l'uso è alto. Ordini gli articoli in uso per frequenza di collegamento o di visualizzazione e fissi per il gruppo di testa una finestra di revisione più breve che per la coda lunga. Un articolo obsoleto che nessuno legge costa poco; un articolo obsoleto che compare in un terzo delle risoluzioni può fuorviare centinaia di casi. Riporti l'aggiornamento del gruppo molto usato come riga a sé, così che la media dell'intera base non lo nasconda.

**8. Tratti i fallimenti di ricerca come voci di backlog.** Legga ogni mese le ricerche senza risultati più frequenti e decida per ciascuna se scrivere un articolo, aggiungere un sinonimo, rinominare un articolo o accettare che la domanda appartenga altrove. Questo trasforma una metrica in un elenco breve e concreto che il team può lavorare. Mostra inoltre il vocabolario reale, poiché utenti e analisti raramente usano le parole usate dal catalogo dei servizi.

**9. Legga le parole dietro i voti.** Il tasso di utilità è economico e rumoroso. I tassi di risposta sono di solito bassi e sbilanciati verso le opinioni forti. Mostri il tasso di risposta accanto al tasso di utilità e legga in una revisione fissa i commenti scritti sugli articoli più visualizzati. Un singolo commento come «il passaggio 4 non esiste più nella nuova versione» vale più di mille voti privi di etichetta.

**10. Colleghi la conoscenza a problemi e postmortem.** Un incidente ricorrente risolto ripetutamente con lo stesso articolo è un segnale per la gestione dei problemi, che cerca la causa sottostante e può eliminare la necessità dell'articolo (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»). Le registrazioni degli errori noti e le lezioni dei postmortem sono risorse di conoscenza con un proprio ciclo di vita (si vedano l'Argomento 4.2 «Metriche di postmortem e apprendimento» e l'Argomento 4.6 «Debito tecnico ed errori noti»). Guardi ogni trimestre i dieci articoli più collegati e si chieda quali dovrebbero essere ritirati correggendo la causa.

### Governare senza classificare

**11. Riporti il contributo a livello di team.** L'ampiezza dei contributi dice se il lavoro sulla conoscenza è condiviso o concentrato in due persone. È un rischio che vale la pena vedere, perché è lo stesso schema di un [bus factor](https://en.wikipedia.org/wiki/Bus_factor) pari a due. Non deve mai trasformarsi in una classifica di autori, che premierebbe la quantità di modifiche e insegnerebbe a dividere gli articoli o a fare modifiche banali. Se compare una concentrazione, la tratti come una conversazione di team su tempo, supporto e permesso di scrivere (si veda l'Argomento 9.4 «Metriche di competenze e apprendimento»).

**12. Ritiri le misure che smettono di aiutare.** Se nessuno agisce sul tasso di collegamento, sposti l'attenzione sulla pertinenza o sull'aggiornamento del gruppo molto usato. Registri ogni cambio di definizione con il motivo, perché una formula cambiata interrompe la linea di tendenza (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»).

## Vettori di manipolazione e protezioni

Ogni metrica della tabella delle definizioni compare qui. Le metriche di conoscenza sono particolarmente esposte perché l'atto di collegare o di rivedere è un clic veloce, mentre il vero valore sta nel contenuto.

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tasso di collegamento della conoscenza | Allegare un articolo qualsiasi, spesso generico o molto popolare, a ogni caso prima della chiusura; collegare a posteriori in blocco | Campione mensile di pertinenza dei casi collegati; quota di collegamenti che vanno agli stessi pochi articoli; timestamp del collegamento rispetto al timestamp della risoluzione |
| Rapporto di riuso | Creare un nuovo articolo per ogni caso e collegarlo subito, così che conti come riuso la volta successiva; oppure non creare mai, in modo che il rapporto appaia perfetto | Tasso di articoli duplicati trovato da una ricerca periodica; quota di casi chiusi con il motivo «nessun articolo esisteva» |
| Aggiornamento degli articoli | Segnare gli articoli come rivisti senza controllarli; azzerare la data di revisione con modifiche banali; contare solo gli articoli facili da rivedere | Campione di articoli rivisti di recente verificato rispetto al servizio reale; tasso di utilità e commenti scritti sugli stessi articoli |
| Tasso di ricerche senza risultati | Aggiungere articoli vaghi o generici che corrispondono a qualsiasi query; riempire di parole chiave; escludere dal registro i termini di ricerca scomodi | Clic seguito da un contatto sullo stesso argomento entro una breve finestra; tasso di utilità; lettura manuale dei termini di ricerca principali |
| Tasso di utilità | Sollecitare a votare solo i lettori soddisfatti; nascondere l'opzione «non utile»; votare dall'interno del team | Tasso di risposta e composizione dei rispondenti mostrati con il tasso; commenti scritti; tasso di contatto dopo la lettura dell'articolo |
| Tempo di pubblicazione | Pubblicare un abbozzo scarno per fermare il cronometro; dividere un articolo in pezzi; spostare le bozze in uno stato che il cronometro esclude | Pertinenza e utilità degli articoli pubblicati di recente; conteggio e anzianità delle bozze negli stati esclusi |
| Ampiezza dei contributi | Fare modifiche banali in modo che tutti appaiano come contributori; chiedere alle persone di aggiungere una frase per raggiungere una quota | Dimensione e sostanza delle modifiche campionate; riuso e utilità degli articoli a cui si è contribuito; nessun nome nel report |

Una lettura sana mostra articoli collegati che un campione umano conferma essere pertinenti, un rapporto di riuso che sale man mano che la base matura, un insieme molto usato di articoli con revisioni recenti verificate, un breve elenco di fallimenti di ricerca su cui il team sta lavorando e contributi distribuiti nel team. Alcuni casi senza articolo, perché erano davvero nuovi, sono segni di una base onesta, non in difficoltà.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Porre come obiettivo un alto tasso di collegamento | Spinge cattura e riuso nella routine quotidiana; semplice da capire | Invita a collegamenti privi di significato; nasconde le lacune dove non esiste alcun articolo |
| Campionare a mano la pertinenza | Rivela se i collegamenti significano qualcosa; costruisce standard condivisi | Richiede tempo degli analisti; i campioni piccoli sono rumorosi; dipende dal giudizio di chi campiona |
| Rivedere tutto secondo un calendario fisso | Facile da pianificare e verificare; applicato in modo uniforme | Spende sforzo su articoli che nessuno legge; trascura quelli molto usati |
| Rivedere in base all'uso | Dirige lo sforzo dove la conoscenza sbagliata fa più male | Richiede dati affidabili di visualizzazione e collegamento; gli articoli della coda lunga possono marcire inosservati |
| Adozione formale del KCS | Offre un insieme coerente e collaudato di pratiche e indicatori | Richiede investimento continuo, accompagnamento e supporto degli strumenti; pesante per un team molto piccolo |
| Conversazione e lavoro in coppia al posto degli articoli | Trasferisce giudizio e contesto; basso costo | Non scala su turni, ferie e ricambio; la conoscenza se ne va con le persone |

Misuri quanto basta per vedere se la conoscenza è usata e ritenuta affidabile, e spenda lo sforzo risparmiato sul contenuto. Per un piccolo team, un tasso di collegamento con un campione mensile di pertinenza e un breve elenco di fallimenti di ricerca è un programma completo. Per un grande desk, l'insieme completo si ripaga solo se qualcuno è responsabile della revisione e agisce di conseguenza.

## Domande da discutere con il team

**1. Quando abbiamo risolto per ultimo un caso difficile, da dove veniva la conoscenza e dove è finita dopo?**
Scelga un caso recente che ha richiesto vero sforzo e ripercorra il cammino di ciò che è stato appreso. È stato trovato un articolo, è stato chiesto a un collega o la risposta è stata elaborata da zero? Chieda se la persona successiva con lo stesso problema troverebbe la risposta in meno di cinque minuti. Chi facilita cerchi il divario tra ciò che il team sa e ciò che la base di conoscenza contiene.

**2. Se il mese prossimo portassimo il tasso di collegamento a un obiettivo dichiarato, come potremmo farlo senza aiutare nessuno?**
Renda esplicito l'elenco delle manipolazioni e lo tratti come input di progettazione anziché come accusa. Risposte comuni sono collegare un articolo generico, collegare in blocco alla chiusura e scegliere l'articolo più popolare. Per ciascuna risposta, chieda quale salvaguardia della tabella la coglierebbe e con quale rapidità. Chi facilita esca con almeno un nuovo controllo, come un campione mensile di pertinenza, e un responsabile per esso.

**3. Quali cinque articoli usiamo di più, e quando sono stati verificati l'ultima volta rispetto al servizio reale?**
Guardi gli articoli più collegati e più visualizzati e ne legga insieme ad alta voce due. La conversazione mostra spesso che gli articoli con più impatto sono quelli con meno cura, il che è l'argomento a favore della revisione in base all'uso.

**4. Che cosa cercano le persone che non abbiamo?**
Porti le principali ricerche senza risultati e i motivi dei casi non collegati. Li raggruppi in articoli da scrivere, parole da aggiungere e domande che appartengono a un altro team. Chi facilita raccolga un breve elenco dei prossimi tre elementi e pianifichi come verranno scritti durante il lavoro normale, non in un progetto speciale.

**5. Chi scrive la nostra conoscenza, e che cosa costa loro farlo?**
Discuta con onestà la cattura. La scrittura è vista come parte del lavoro o come lavoro in più dopo il lavoro? Chieda che cosa la rallenta: un modello pesante, una revisione lenta, la paura di sbagliare o la mancanza di tempo alla fine di un turno difficile. Chi facilita si allontani dall'inseguire i singoli e si orienti verso cambiamenti di strumenti, tempo e permesso.

**6. Di quali dei nostri articoli dovremmo smettere di avere bisogno?**
Prenda gli articoli più riutilizzati e chieda quale causa ricorrente aggirano. Una procedura di ripristino usata 200 volte al mese potrebbe essere il sintomo di un difetto del prodotto, di una schermata confusa o di un'automazione mancante. Decida quali elementi passare alla gestione dei problemi o al team di prodotto e quali automatizzare (si veda l'Argomento 3.7 «Metriche di self-service e automazione»). Chi facilita noti che il miglior risultato di un buon lavoro sulla conoscenza è talvolta avere meno articoli.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna creano gran parte della conoscenza di cui un servizio avrà bisogno: come si comporta una funzionalità, che cosa significa un nuovo errore, come fare il rollback. Se tale conoscenza non è catturata prima del rilascio, il service desk e i team di reperibilità la imparano a proprie spese. Includano il runbook e l'articolo di aiuto nella definizione di completato e osservino tasso di collegamento e fallimenti di ricerca per i servizi di cui sono responsabili come feedback. Quando lo stesso articolo è collegato molte volte, lo trattino come una segnalazione di difetto sul prodotto, non come un successo della documentazione.

### Team di servizio e operations

I team del service desk e delle operazioni sono i principali produttori e consumatori della base di conoscenza, perciò le metriche sono per lo più loro da usare. Lavorino con onestà nel ciclo di risoluzione: cercare prima, riutilizzare e migliorare, creare quando nulla si adatta. Usino il tasso di collegamento con un campione di pertinenza e leggano le ricerche senza risultati come un backlog. Evitino qualsiasi classifica di autori o di redattori, poiché la base di conoscenza è uno strumento condiviso e i conteggi personali la danneggiano (si veda l'Argomento 3.1 «Metriche del service desk»).

### Leadership e governance

I responsabili decidono se il lavoro sulla conoscenza riceve tempo, e quindi decidono la qualità della conoscenza. Chiedano il campione di pertinenza e l'aggiornamento degli articoli molto usati prima di chiedere il numero di articoli. Resistano agli obiettivi sul tasso di collegamento o sulla creazione di articoli senza una salvaguardia, e si aspettino di sentire quando i numeri calano per buone ragioni, come un insieme di duplicati accorpati. Finanzino la revisione degli articoli molto usati e le correzioni che rendono gli articoli superflui.

### Clienti e utenti

Gli utenti incontrano la conoscenza attraverso la ricerca, un portale, un chatbot o la risposta che un analista dà loro. Ciò che notano è se la prima risposta è corretta e se devono ripetersi. Il loro feedback sugli articoli, le loro ricerche che restano vuote e i loro contatti ripetuti sono le migliori salvaguardie per tutto ciò che è in questo argomento. Se agli utenti viene chiesto di valutare gli articoli, si dica loro che fine fa il feedback e si agisca su di esso in modo visibile (si veda l'Argomento 6.1 «Metriche di soddisfazione del cliente»).

## In pratica: un esempio di ITIL agile

Una compagnia di assicurazioni di medie dimensioni gestisce un service desk IT interno di circa una dozzina di analisti, a supporto del personale di diverse sedi. Il desk condivide una base di conoscenza con due team di prodotto responsabili dell'applicazione sinistri e del portale documenti. Tutti i numeri di questo esempio sono illustrativi.

La direzione ha chiesto una migliore risoluzione al primo contatto (si veda l'Argomento 3.1 «Metriche del service desk») e fissa un obiettivo per il tasso di collegamento della conoscenza del 60 per cento, rispetto a un 38 per cento illustrativo. Entro sei settimane la dashboard mostra il 64 per cento. Il responsabile del service desk non è convinto, perché gli analisti si lamentano ancora di non trovare le risposte, e una responsabile di un team di prodotto osserva che tre degli articoli di cui è responsabile compaiono sulla maggior parte dei casi chiusi.

Il team conduce una revisione della manipolazione e un campione di pertinenza. Leggono 30 casi collegati, scelti a caso dal mese precedente, e giudicano se l'articolo fosse adatto al caso. In un conteggio illustrativo, 11 dei 30 collegamenti puntano a un articolo generico «Come aprire un ticket» o a una panoramica generale della rete che non affrontava il problema. Scoprono anche che i collegamenti erano stati fatti entro pochi secondi dalla chiusura del caso, uno schema che suggerisce abitudine e non uso. Il responsabile del desk guarda il rapporto di riuso, che è salito, e la quota di casi non collegati con il motivo «nessun articolo esisteva», scesa quasi a zero, perché ora gli analisti scelgono l'articolo più vicino. La lacuna nella conoscenza è diventata invisibile.

Il team prende tre decisioni. Primo, l'obiettivo sul tasso di collegamento viene ritirato e sostituito da una vista corretta per la pertinenza: il tasso di collegamento è riportato accanto alla quota campionata di collegamenti pertinenti, e il motivo di chiusura «nessun articolo esisteva» è reso facile da scegliere e non è trattato come un fallimento. Secondo, le ricerche senza risultati sono lette ogni mese, e le prime cinque diventano i successivi compiti di scrittura, condivisi nel desk. Terzo, i 20 articoli più collegati sono rivisti per l'aggiornamento entro un mese, di responsabilità del team di prodotto competente, e qualsiasi articolo collegato a più di un quarto dei casi di un servizio viene passato alla gestione dei problemi come candidato a una correzione permanente (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»).

Due mesi dopo il tasso di collegamento principale è sceso a un 51 per cento illustrativo, il che sembra una cattiva notizia. La pertinenza campionata è salita dal 63 all'85 per cento in termini illustrativi, il tasso di ricerche senza risultati è calato e un problema ripetuto di accesso al portale documenti è stato corretto alla causa, il che ha ritirato tre articoli. Il responsabile chiede alla direzione di giudicare il programma in base a pertinenza e soluzioni alternative ritirate, non in base al tasso di collegamento grezzo.

## Lente di settore

**Startup.** La conoscenza vive in poche teste e nella cronologia delle chat. Scrivete un breve elenco di runbook per ciò che si rompe di notte e registrate la correzione dopo ogni incidente. Un controllo mensile che i runbook principali funzionino ancora è una misurazione sufficiente.

**Piccola impresa.** Spesso una sola persona è il service desk, l'amministratore e il responsabile della conoscenza. Il rischio è il bus factor, poiché la conoscenza scompare se scompare la persona. Usate un semplice archivio condiviso, mantenete brevi gli articoli e lasciate che un collaboratore esterno o un collega provi le procedure chiave. Una lettura periodica delle pagine più usate batte qualsiasi dashboard.

**Grande impresa.** La scala porta articoli duplicati e qualità disomogenea. Usate definizioni comuni per tasso di collegamento, aggiornamento e riuso, riportate per servizio e per team e nominate responsabili per gli articoli molto usati. Evitate di confrontare i team, perché la composizione dei servizi e l'età della base differiscono.

**Pubblica amministrazione e settore pubblico.** Regole sulle registrazioni, requisiti di accessibilità e aspettative di audit possono governare come la conoscenza viene archiviata, rivista e ritirata. Trattateli come input di progettazione: mantenete una traccia di approvazione per gli articoli che riguardano i cittadini e pubblicate contenuti accessibili. Il feedback e i fallimenti di ricerca dei cittadini sono particolarmente preziosi (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi delle metriche di conoscenza sono modesti. I dati degli strumenti esistono di solito già nella piattaforma ITSM e nella base di conoscenza. I costi principali sono il tempo per definire le misure, il piccolo campione mensile che verifica la pertinenza, il tempo di revisione per gli articoli molto usati e la disciplina di catturare la conoscenza mentre si risolvono i problemi. Se la piattaforma di conoscenza non ha dati utilizzabili su collegamenti o ricerche, si includa il costo di strumentarla (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»).

Il ritorno è uno schema, e il libro non cita una cifra per esso. Quando gli analisti trovano rapidamente un articolo corretto, la risoluzione è più veloce e più coerente, i nuovi arrivati diventano utili prima e gli ingegneri di reperibilità dipendono meno da pochi esperti. Quando gli utenti trovano le risposte da soli, il desk riceve meno contatti ripetuti per domande note. Le metriche aiutano mostrando dove la conoscenza manca, è obsoleta o non è usata, così che il raro tempo di scrittura vada agli articoli che contano.

Il costo totale di proprietà comprende la manutenzione. Gli articoli decadono quando i servizi cambiano, perciò il tempo di revisione è un costo continuo, e un programma che lo ignora sovrastimerà il beneficio. Per stimare il ritorno per il Suo team, confronti un campione dei Suoi casi prima e dopo, ed etichetti le Sue ipotesi.

## Anti-pattern e insidie

- **Contare articoli o visualizzazioni come successo.** Il volume cresce con il disordine e le visualizzazioni possono segnalare confusione. Misuri invece l'uso nella risoluzione, la pertinenza e il feedback.
- **Un obiettivo sul tasso di collegamento senza verifica di pertinenza.** Le persone allegheranno qualsiasi articolo. Campioni mensilmente i casi collegati e riporti la quota pertinente accanto al tasso.
- **Classificare autori o redattori.** I conteggi personali producono modifiche scarne e divisioni degli articoli. Riporti l'ampiezza dei contributi per il team e la discuta come una questione di capacità.
- **Rivedere tutti gli articoli con un unico calendario fisso.** Lo sforzo va a pagine che nessuno legge. Riveda in base all'uso e ritiri ciò che non è usato.
- **Pubblicare abbozzi per fermare il cronometro.** Un articolo rapido e scarno vanifica il tempo di pubblicazione. Lo abbini a utilità e tasso di contatto successivo.
- **Ignorare le ricerche che falliscono.** Le ricerche fallite sono il segnale più chiaro di un bisogno insoddisfatto. Le legga ogni mese e trasformi le voci principali in lavoro.
- **Separare la conoscenza dal lavoro.** Un progetto di documentazione a fine trimestre produce pagine obsolete. Catturi durante la risoluzione e nella definizione di completato.
- **Trattare la base di conoscenza come permanente.** Il contenuto decade. Renda ordinari e riconosciuti il ritiro e l'accorpamento.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Cattura e collegamento | La conoscenza vive nelle teste e nelle chat; i collegamenti sono rari | Alcuni team collegano gli articoli ai casi, la pratica varia | Una regola scritta per collegamento e cattura; motivi di chiusura registrati | Tasso di collegamento e campione di pertinenza rivisti mensilmente e legati al miglioramento | La cattura è parte del flusso di lavoro tra desk, operazioni e team di prodotto; definizioni riviste quando smettono di orientare le decisioni |
| Aggiornamento e responsabilità | Nessun responsabile; gli articoli invecchiano inosservati | Responsabili nominati per i servizi chiave | Finestre di revisione fissate, più brevi per gli articoli molto usati | L'aggiornamento degli articoli molto usati è seguito nel tempo e finanziato | Responsabilità di revisione condivisa con fornitori e team di prodotto; il ritiro è routine |
| Reperibilità e feedback | La ricerca è ad hoc; nessun dato di ricerca | Il registro delle ricerche esiste ma non viene letto | Ricerche senza risultati e feedback dei lettori rivisti con una cadenza stabilita | I fallimenti di ricerca alimentano un backlog e sono abbinati ai dati di contatto | Utenti, analisti e chatbot attingono a un'unica fonte di conoscenza; il feedback cambia visibilmente il contenuto |
| Uso nel miglioramento | Le metriche, se ci sono, sono conteggi | I conteggi sono mostrati al team | Metriche abbinate a salvaguardie e mostrate prima al team | Gli articoli molto collegati alimentano le decisioni su gestione dei problemi e automazione | Backlog di conoscenza, di problemi e di prodotto gestiti insieme tra i team |

## Checklist

- [ ] Ogni metrica di conoscenza indica il pubblico che serve e la decisione che informa.
- [ ] Il tasso di collegamento ha una definizione scritta, compresi il cronometro, le esclusioni e il trattamento degli incidenti maggiori.
- [ ] Un campione mensile verifica che gli articoli collegati siano pertinenti ai casi.
- [ ] La chiusura dei casi registra «nessun articolo esisteva» e «articolo non trovato» come motivi distinti.
- [ ] Il tempo di pubblicazione è riportato come mediana e percentile alto, con le fasi di bozza e di pubblicato separate.
- [ ] È fissata una finestra di revisione per gli articoli in uso, più breve per i più usati.
- [ ] Le principali ricerche senza risultati sono lette ogni mese e trasformate in voci di backlog.
- [ ] Il feedback dei lettori è mostrato con il suo tasso di risposta, e i commenti sugli articoli principali sono letti.
- [ ] Il contributo è riportato solo per il team, senza elenchi nominativi.
- [ ] Gli articoli più collegati sono rivisti ogni trimestre come candidati a correzioni permanenti.
- [ ] I cambi di definizione sono registrati con i motivi.

## Prompt IA

**Verificare se gli articoli collegati si adattano ai loro casi.**

```text
Conduco revisioni della conoscenza per [nome del team], che supporta [tipo di
servizio]. Di seguito [numero] casi risolti, ciascuno con il proprio riepilogo,
le note di risoluzione e il titolo e il testo dell'articolo collegato. Per ogni
coppia, giudica se l'articolo si adatta al caso come risposta pertinente,
risposta parziale o collegamento non correlato, e fornisci un motivo in una
riga. Riporta gli schemi per articolo e per servizio. Non nominare né
classificare i singoli analisti. Non inventare fatti sul servizio. Elenca le
tue ipotesi e tutto ciò che non hai potuto giudicare dal testo.

[incolla casi e articoli privati dei dati personali]
```

**Trasformare le ricerche fallite in un backlog di scrittura.**

```text
Ecco le ricerche più frequenti in [nome della base di conoscenza o del portale]
che non hanno restituito risultati in [periodo]: [elenco di termini di ricerca
con conteggi]. Raggruppale per temi. Per ciascun tema, suggerisci se richiede
un nuovo articolo, un sinonimo o la ridenominazione di un articolo esistente
([elenco dei titoli di articoli correlati]), un collegamento a un altro team o
nessuna azione. Non inventare articoli né fatti sui nostri sistemi. Elenca le
tue ipotesi e le domande a cui devo rispondere prima di scrivere qualsiasi
cosa.
```

**Progettare un insieme leggero di misure di conoscenza.**

```text
Progetta un piccolo insieme di misure di gestione della conoscenza per [nome del
team], un team di [dimensione del team] che usa [strumento ITSM] e [strumento
di conoscenza]. Il nostro obiettivo principale è [obiettivo, come una
risoluzione al primo contatto più rapida o una minore dipendenza dagli esperti].
Per ciascuna misura indica la definizione, il cronometro o confine, la fonte
dei dati, il probabile vettore di manipolazione e una salvaguardia. Non proporre
classifiche individuali, non inventare valori di riferimento e non citare fonti.
Elenca le tue ipotesi e i campi di dati di cui avresti bisogno che non ho
menzionato.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare gli argomenti correlati e la salvaguardia abbinata quando aggiunge una metrica di conoscenza alla Sua dashboard.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una metrica di conoscenza riporti il proprio vettore di manipolazione, la salvaguardia e i rimandi nella forma corretta.

## Punti chiave

- Misuri la conoscenza nel momento dell'uso: collegata nella risoluzione, trovata dalla ricerca, confermata dai lettori.
- Abbini il tasso di collegamento a un campione umano di pertinenza, perché un collegamento prova solo che qualcuno ha cliccato.
- Riveda l'aggiornamento in base all'uso, ponendo lo sforzo dove un articolo sbagliato fuorvierebbe più casi.
- Tratti ricerche fallite e articoli molto collegati come segnali per nuovi contenuti, denominazioni migliori o una correzione permanente.
- Riporti il contributo per il team e non classifichi mai gli autori.
- Meno articoli, ma migliori, indicano spesso una base più sana di una più grande.

## Riferimenti e letture di approfondimento

1. Consortium for Service Innovation, *KCS v6 Practices Guide*, first released 2016 and updated since, https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide (check the page for the current version).
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
3. Nonaka, I., and Takeuchi, H., *The Knowledge-Creating Company*, Oxford University Press, 1995.
4. Hansen, M. T., Nohria, N., and Tierney, T., "What's your strategy for managing knowledge?", *Harvard Business Review*, March-April 1999.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Wikipedia, [Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Knowledge base](https://en.wikipedia.org/wiki/Knowledge_base).
10. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
11. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
12. Wikipedia, [Knowledge-centered support](https://en.wikipedia.org/wiki/Knowledge-centered_support).
13. Wikipedia, [Service desk](https://en.wikipedia.org/wiki/Service_desk).
14. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
