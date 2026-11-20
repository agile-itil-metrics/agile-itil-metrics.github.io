# Metriche del service desk

**Misuri il service desk in base a quanto bene aiuta le persone a tornare al lavoro e a quanto insegna al resto dell'organizzazione, perché i conteggi delle chiamate e i minuti al telefono premiano velocità e volume a scapito di entrambi.**

## Panoramica e motivazione

Per la maggior parte degli utenti il service desk è il servizio. Raramente incontrano gli ingegneri o vedono la pipeline; incontrano chi risponde quando qualcosa va storto. Un [help desk](https://en.wikipedia.org/wiki/Help_desk) è il reparto o la persona che fornisce assistenza e informazioni, di solito su problemi informatici. Nell'uso dell'[IT service management (ITSM)](https://en.wikipedia.org/wiki/IT_service_management), il service desk è il punto di contatto unico tra il fornitore e i suoi utenti e gestisce sia gli incidenti (interruzioni non pianificate, o potenziali interruzioni, di un servizio) sia le richieste di servizio (richieste di routine di qualcosa che il servizio normalmente fornisce). In [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la pratica del service desk si affianca alla gestione degli incidenti e alla gestione delle richieste di servizio, ed è descritta attraverso il proprio scopo e i propri risultati, non attraverso un elenco fisso di misure. Questo argomento offre quindi indicazioni pratiche, non un requisito del framework.

Le misure nate attorno al desk provengono in gran parte dalla tradizione del [call center](https://en.wikipedia.org/wiki/Call_centre): quanti contatti sono arrivati, quanto hanno atteso le persone, quante hanno rinunciato, quanto è durato ciascun contatto e quanti sono stati risolti al primo tentativo. Sono misure utili ed economiche, e sono anche le più facili del libro da trasformare in obiettivi che danneggiano il servizio. Le chiamate brevi sembrano efficienti finché lo stesso utente richiama tre volte. Un basso abbandono sembra attento alle persone finché gli operatori rispondono in fretta senza risolvere nulla. Il compito di questo argomento è descrivere ciascuna misura, indicarne i cronometri e dire che cosa premia e che cosa nasconde.

La prospettiva agile aggiunge un secondo scopo. Ogni contatto è un'evidenza su ciò che gli utenti trovano confuso, su ciò che si rompe e su ciò che vorrebbero che il servizio facesse. Un team agile che rilascia spesso ha bisogno di questa evidenza rapidamente e a livello di servizio, non di ticket. Il desk viene quindi misurato due volte: come attività che risponde bene alle persone e come sensore che alimenta il backlog. Il volume è il ponte tra le due. Un conteggio in crescita può significare crescita, un rilascio difettoso, un articolo mancante o un nuovo canale, e la sola metrica non permette di distinguere (si veda l'Argomento 3.2 «Volume e priorità degli incidenti» per come leggere i conteggi per categoria e priorità).

Termini chiave: la [risoluzione al primo contatto](https://en.wikipedia.org/wiki/First_call_resolution) è la quota di contatti risolti al primo contatto; un [distributore automatico di chiamate](https://en.wikipedia.org/wiki/Automatic_call_distributor) instrada le chiamate in arrivo al personale disponibile; un [accordo sul livello di servizio (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) è un impegno tra fornitore e cliente; un [percentile](https://en.wikipedia.org/wiki/Percentile) è il valore al di sotto del quale ricade una data quota di osservazioni, per cui l'85º percentile del tempo di gestione è la durata entro cui si conclude l'85 per cento dei contatti; e la [soddisfazione del cliente](https://en.wikipedia.org/wiki/Customer_satisfaction) (si veda l'Argomento 6.1 «Metriche di soddisfazione del cliente») è quanto bene un servizio soddisfa le aspettative degli utenti.

I termini «contatto» e «ticket» non sono equivalenti. Un contatto è un tentativo di una persona di raggiungere il desk attraverso un canale come telefono, chat, e-mail, portale, sportello o messaggistica. Un ticket (detto anche record) è ciò che lo strumento ITSM crea per tracciare il lavoro. Un ticket può coinvolgere molti contatti, e alcuni contatti, come un ripristino di password risolto sul momento, possono creare un ticket solo a fini di registrazione. Mescolare i due è la fonte di confusione più comune nei report del desk, perciò le definizioni seguenti li contano separatamente.

## Principi chiave

- **Contare separatamente contatti e ticket, e definire entrambi.** Un contatto è un tentativo di raggiungere il desk; un ticket è una registrazione di lavoro. I report che li mescolano non possono essere riconciliati.
- **Riportare i tempi come distribuzioni.** Mostrare la mediana e un percentile alto come l'85º o il 95º, mai solo una media, perché pochi contatti molto lunghi o molto brevi distorcono la media.
- **Abbinare ogni misura di velocità a una misura di esito.** Velocità di risposta, abbandono e tempo di gestione descrivono lo sforzo. Risoluzione e ricontatto descrivono se l'utente è stato aiutato.
- **Normalizzare il volume rispetto all'utilizzo.** Un conteggio che sale perché la base di utenti è cresciuta è una storia diversa da uno che sale per utente.
- **Misurare canali e servizi, non persone.** Queste metriche descrivono un desk, una coda, un servizio e un canale. Non vengono mai usate per classificare o sanzionare i singoli operatori.
- **Trattare il desk come un sensore.** Ogni metrica dovrebbe condurre a una domanda per i team di consegna su che cosa correggere, documentare o automatizzare a monte.

## Definizioni delle metriche

La tabella elenca sette misure che la maggior parte dei service desk può raccogliere dalla propria piattaforma di telefonia e dallo strumento ITSM. Soglie e obiettivi spettano a ciascun desk, che li stabilisce e li mette per iscritto; questo argomento non fornisce valori di riferimento.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume dei contatti | Numero di contatti ricevuti dal desk, per canale e periodo | conteggio dei contatti creati nel periodo, per canale; sono esclusi i contatti di prova interni, le risposte automatiche duplicate delle e-mail e le chiamate in uscita effettuate dal desk | conteggio | Log della piattaforma di telefonia o chat; record dei contatti dello strumento ITSM | Service desk | Segnale di domanda nel raffinamento del backlog | Settimanale |
| Tasso di contatto | Contatti rispetto alla dimensione della popolazione servita, così che la crescita non venga scambiata per un problema | contatti nel periodo / utenti attivi o account attivi nel periodo, scalati a 100 utenti; il numero di utenti è preso dallo stesso periodo e la definizione di «attivo» è messa per iscritto | contatti ogni 100 utenti | Record dei contatti e sistema di identità o di licenze | Service desk; gestione dei livelli di servizio | Domanda corretta per utilizzo nella revisione del prodotto | Mensile |
| Tempo di risposta | Attesa dal momento in cui un contatto entra in coda fino a quando una persona o un motore di risposta automatica lo prende in carico | il cronometro parte quando il contatto è messo in coda e si ferma alla prima risposta umana; i contatti abbandonati sono esclusi da questa misura e contati nell'abbandono; riportare la mediana e l'85º percentile | secondi (telefono, chat); minuti od ore (e-mail, portale) | Piattaforma di telefonia; piattaforma di chat; timestamp dello strumento ITSM | Service desk | Accordo di lavoro sulla reattività | Giornaliera nelle finestre di revisione, settimanale nel trend |
| Tasso di abbandono | Quota di contatti che terminano prima che qualcuno li prenda in carico, per decisione dell'utente | contatti terminati dall'utente prima della prima risposta umana / contatti messi in coda; i contatti terminati entro un breve periodo di tolleranza (indicato nella definizione, per esempio cinque secondi) sono esclusi perché accidentali | percentuale | Piattaforma di telefonia; piattaforma di chat | Service desk | Segnale del costo del ritardo nella revisione del servizio | Settimanale |
| Tempo di gestione | Tempo che il desk dedica a un contatto | il cronometro parte quando una persona prende in carico il contatto e si ferma quando lo conclude, incluso il lavoro di documentazione successivo al contatto; l'attesa dell'utente è inclusa solo se la definizione lo prevede; riportare la mediana e l'85º percentile, suddivisi per tipo di contatto | minuti | Piattaforma di telefonia; piattaforma di chat; registro di lavoro dello strumento ITSM | Service desk; gestione degli incidenti | Segnale di sforzo nel raffinamento e nella pianificazione della capacità | Settimanale |
| Tasso di risoluzione al primo contatto | Quota di contatti risolti al primo contatto senza alcun contatto successivo sulla stessa questione | contatti risolti durante il contatto e non seguiti da un ricontatto sulla stessa questione dallo stesso utente entro la finestra di ricontatto / contatti idonei; sono esclusi le chiamate in cui è richiesto solo un rinvio e quelle che il desk non è tenuto a risolvere | percentuale | Campi di risoluzione e collegamento dello strumento ITSM; conferma dell'utente dove raccolta | Service desk; gestione degli incidenti | Verifica della definizione di completato, risolto al primo tocco | Mensile |
| Tasso di ricontatto | Quota di contatti risolti seguiti da un altro contatto sulla stessa questione | contatti seguiti entro la finestra di ricontatto (per esempio sette giorni, indicata nella definizione) da un altro contatto dello stesso utente sullo stesso servizio o problema / contatti risolti nel periodo precedente; i contatti su un nuovo problema sono esclusi | percentuale | Collegamenti dello strumento ITSM e storico delle riaperture; record dei contatti | Service desk; gestione degli incidenti | Tasso di difetti sfuggiti | Mensile |

La risoluzione al primo contatto ha più di una definizione difendibile, quindi la definizione fa parte della metrica. Alcuni desk contano un contatto come risolto quando l'operatore chiude il ticket durante la chiamata. Altri contano solo quando l'utente non ritorna entro una finestra. La seconda è più difficile da raccogliere e più difficile da manipolare, ed è quella usata qui. Indichi la finestra, indichi che cosa conta come «la stessa questione» e applichi entrambe allo stesso modo in ogni periodo.

## Raccomandazioni

### Separare contatti e ticket fin dall'inizio

**Dia a contatti e ticket definizioni, identificativi e conteggi propri.** Un contatto è la registrazione di un tentativo di raggiungere il desk, e un ticket è la registrazione di un lavoro. Li colleghi nello strumento in modo che un ricontatto sulla stessa questione sia visibile. I report che mescolano i due producono una cifra di volume che nessuno riesce a riconciliare con la piattaforma di telefonia.

### Riportare il volume per canale, categoria e tasso normalizzato

**Mostri il volume totale, il volume per canale, il volume per categoria e il tasso di contatto ogni 100 utenti.** I soli totali confondono la crescita con il problema. Un calo del volume telefonico può essere uno spostamento verso la chat, e un aumento dei contatti da portale può essere un successo voluto del self-service. Tracci le serie su almeno un anno, in modo che la stagionalità, come gli inizi di semestre e le chiusure dell'anno finanziario, sia visibile.

### Usare distribuzioni per ogni misura di tempo

**Riporti la mediana e un percentile alto per il tempo di risposta e il tempo di gestione.** La media di una distribuzione asimmetrica non descrive quasi l'esperienza di nessuno. La mediana mostra il contatto tipico, e l'85º o il 95º percentile mostra quanto sia grave la coda lenta. Indichi su quanti contatti poggia la cifra e segnali la lettura come inaffidabile quando una coda gestisce solo una manciata di contatti nel periodo (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

### Trattare l'abbandono come un segnale di domanda e di organico

**Legga l'abbandono insieme al tempo di risposta e ai profili di arrivo.** Le persone abbandonano quando l'attesa è più lunga di quanto si aspettano, quindi il tasso sale con l'attesa, e l'attesa sale quando gli arrivi superano la capacità. La [teoria delle code](https://en.wikipedia.org/wiki/Queueing_theory) spiega perché l'attesa cresce bruscamente quando una coda si avvicina alla piena utilizzazione, ed è per questo che un desk gestito vicino al 100 per cento di occupazione ha sempre attese lunghe e alto abbandono. Dimensioni l'organico sui profili di arrivo per ora e giorno anziché su una media mensile, e mostri l'abbandono per fascia oraria (si veda l'Argomento 2.3 «Lavoro in corso e code»).

### Definire con cura la risoluzione al primo contatto, poi misurarla dal lato dell'utente

**Usi una definizione basata sul ricontatto e la confermi con una breve domanda agli utenti.** Contare solo i contatti che non ritornano entro una finestra dichiarata è più difficile da gonfiare rispetto a un flag impostato dall'operatore alla chiusura. Aggiunga una verifica di una sola domanda, come «il Suo problema è stato risolto?», e la confronti con la cifra di ricontatto. Quando le due divergono, la risposta dell'utente è la guida migliore, e lo scarto indica dove la chiusura è prematura.

### Usare il tempo di gestione per la pianificazione, non per gli obiettivi

**Tratti il tempo di gestione come un input di capacità e uno strumento diagnostico, e non fissi mai un obiettivo da battere per gli operatori.** Un obiettivo sul tempo di gestione paga la fretta, i trasferimenti prematuri e la documentazione scarna. Usi la distribuzione per tipo di contatto per pianificare l'organico e per individuare contatti che richiedono molto più tempo di quelli simili, il che spesso indica un articolo mancante, uno strumento goffo o un processo poco chiaro. Miri alle cause di sistema, non agli operatori.

### Collegare le metriche del desk al lavoro di consegna

**Esamini le principali categorie di contatti con i team proprietari dei servizi.** Ogni mese prenda le cinque categorie che hanno generato più contatti ogni 100 utenti e si chieda quale cambiamento a monte le eliminerebbe: una correzione, un articolo, un messaggio di errore migliore o un percorso self-service. Registri le risposte nel backlog del team proprietario. Questo trasforma i numeri del desk in lavoro di miglioramento ed è l'uso agile più chiaro dei dati (si vedano l'Argomento 3.6 «Metriche di gestione della conoscenza» e l'Argomento 3.7 «Metriche di self-service e automazione»).

### Includere ogni canale nelle stesse definizioni

**Applichi gli stessi criteri di cronometro e di conteggio a telefono, chat, e-mail, portale, sportello e messaggistica.** I canali asincroni non hanno una coda in tempo reale, quindi il tempo di risposta significa qualcosa di diverso in ciascuno. Definisca il cronometro per canale e riporti ciascuno separatamente prima di combinarli. Un desk che pubblica solo il proprio canale migliore nasconde l'esperienza di tutti gli altri.

### Collegare le metriche all'esperienza dell'utente

**Abbini le misure operative a una domanda di soddisfazione dopo il contatto e a uno spazio per testo libero.** Una risposta rapida a un contatto scortese o inutile è un cattivo esito, e i cronometri non possono vederlo. Mostri il tasso di risposta e la composizione dei rispondenti accanto al punteggio, perché risponde solo una parte autoselezionata di utenti (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»). Legga i commenti insieme alle persone che rispondono ai contatti, in un contesto di team.

### Mantenere le metriche a livello di team e di coda

**Riporti per coda, canale, servizio e team, e riservi i dati a livello di operatore alle conversazioni di accompagnamento a cui l'operatore partecipa.** Classificare i singoli operatori in base al tempo di gestione o al tasso di risoluzione spinge a scegliere i contatti facili e a evitare quelli difficili. Danneggia inoltre la fiducia nei dati, e gli utenti ne sentono il risultato nella qualità dell'aiuto. Usi i numeri a livello di team per chiedersi di che cosa abbia bisogno il sistema.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Volume dei contatti | Gli operatori scoraggiano la registrazione reindirizzando gli utenti verso canali non contati, oppure dividono un contatto in più contatti per far sembrare occupata una coda; i responsabili puntano a un volume più basso | Tasso di contatto ogni 100 utenti e riconciliazione periodica dei conteggi di telefonia con quelli dei ticket; una regola fissa per cui ogni canale è contato |
| Tasso di contatto | Il denominatore viene scelto a posteriori (per esempio con una definizione ampia di «attivo») in modo che il tasso appaia migliore | Una definizione scritta e datata di «utenti attivi» e i conteggi grezzi mostrati accanto al tasso |
| Tempo di risposta | I contatti ricevono risposta da un saluto automatico o da un trasferimento a una coda tranquilla, oppure la chiamata viene presa e messa in attesa; le e-mail ricevono una risposta automatica che conta come risposta | Definire il cronometro come prima risposta umana e monitorare accanto a esso abbandono e ricontatto |
| Tasso di abbandono | Le chiamate vengono interrotte prima di essere messe in coda, il periodo di tolleranza viene allungato, oppure un'offerta di richiamata viene contata come contatto evaso | Percentili del tempo di risposta, tasso di completamento delle richiamate e un periodo di tolleranza pubblicato |
| Tempo di gestione | Le chiamate vengono affrettate, trasferite subito o concluse prima che il problema sia risolto; le note restano scarne; il lavoro viene spostato nel tempo successivo al contatto che il cronometro esclude | Risoluzione al primo contatto, tasso di ricontatto e una revisione a campione della qualità della documentazione da parte del team |
| Tasso di risoluzione al primo contatto | I ticket vengono chiusi durante la chiamata a prescindere dal risultato, «la stessa questione» viene interpretata in modo ristretto, oppure i contatti difficili vengono classificati come «non tenuti a risolvere» | Tasso di ricontatto, una conferma dell'utente di una sola domanda e audit periodici delle esclusioni da parte del team |
| Tasso di ricontatto | Agli utenti viene chiesto di aprire un nuovo ticket per un seguito, oppure i seguiti vengono registrati con una categoria diversa in modo che non si colleghino | Regole di collegamento nello strumento, audit a campione dei contatti ripetuti non collegati e risoluzione dichiarata dall'utente |

Una lettura sana è un insieme di cifre che concordano tra loro. Tempo di risposta e abbandono si muovono insieme, il tempo di gestione varia con il tipo di contatto e non con l'obiettivo del giorno, risoluzione al primo contatto e ricontatto sono immagini speculari la cui somma resta vicina al massimo, e la risposta dell'utente a «il Suo problema è stato risolto?» concorda con la cifra di ricontatto. Una singola cifra che migliora nettamente mentre le altre restano ferme è un motivo per guardare come viene raccolta prima di festeggiare. Un desk manipolato mostra di solito i sintomi nel ricontatto, nelle categorie ripetute del volume e in lamentele crescenti.

## Compromessi: vantaggi e svantaggi

| Scelta | Vantaggio | Costo o rischio |
| --- | --- | --- |
| Tempo medio di gestione come cifra principale | Semplice, disponibile in ogni piattaforma, facile da spiegare | Premia la fretta, nasconde la coda e invita a obiettivi che danneggiano la risoluzione |
| Mediana e 85º percentile per i tempi | Descrive il caso tipico e la coda lenta | Richiede abbastanza contatti per essere stabile e qualche spiegazione in più |
| Risoluzione al primo contatto tramite flag di chiusura dell'operatore | Facile da raccogliere | Facile da gonfiare e difficile da confrontare tra desk |
| Risoluzione al primo contatto tramite finestra di ricontatto | Difficile da manipolare e più vicina all'esperienza dell'utente | Richiede buoni collegamenti nello strumento e attende il trascorrere della finestra prima di poter essere riportata |
| Abbandono con periodo di tolleranza | Elimina le interruzioni accidentali | Il periodo di tolleranza può essere allungato per abbellire la cifra |
| Tasso di contatto ogni 100 utenti | Separa la crescita dal problema | Dipende da un numero di utenti affidabile e da una definizione chiara di «attivo» |
| Sondaggio dopo il contatto | Coglie ciò che i cronometri non vedono | Tassi di risposta bassi e disomogenei, e distorsione verso gli utenti con opinioni forti |
| Reportistica solo per team e coda | Protegge la fiducia e concentra l'attenzione sul sistema | Offre meno dettaglio per l'accompagnamento individuale, che richiede un processo diverso e riservato |

Nessun insieme di misure elimina la tensione tra velocità e cura. Un desk che risponde a ogni contatto in pochi secondi e risolve poco ha una buona coda e un servizio scadente, mentre un desk che si prende il tempo di risolvere bene mostrerà tempi di gestione e di attesa più lunghi. La via d'uscita è concordare quale esito conta di più in questo trimestre, rendere esplicito il compromesso e rivedere la coppia di metriche che lo tiene in equilibrio. Più veloce è meglio solo finché la risoluzione regge.

## Domande da discutere con il team

**1. Che cosa significa «contatto» qui, e il nostro conteggio corrisponde a quanto riportano la piattaforma di telefonia e lo strumento ITSM?**
Chieda al gruppo di ripercorrere una giornata di contatti attraverso ogni canale e di confrontare i conteggi dei due sistemi. Annoti i contatti che non diventano mai ticket e i ticket che non nascono mai da un contatto. Chi facilita si aspetti uno scarto all'inizio e lo tratti come un risultato sulle definizioni, non come una colpa delle persone. Concordi una regola per il prossimo report e chi ne è responsabile.

**2. Quando diciamo che un contatto è stato risolto al primo contatto, come sappiamo che l'utente sarebbe d'accordo?**
Esamini dieci contatti recenti contrassegnati come risoluzioni al primo contatto e verifichi se qualcuno degli utenti è tornato sulla stessa questione. Chieda che cosa l'operatore avrebbe potuto fare diversamente in quelli che sono tornati. La discussione mostra di solito dove la chiusura avviene prima che l'utente sia pronto. Decida se aggiungere una conferma di una sola domanda e quale debba essere la finestra di ricontatto.

**3. Che cosa succede alla persona in attesa, e quando rinuncia?**
Osservi la curva di abbandono per tempo atteso. La maggior parte dei desk individua un punto oltre il quale le persone se ne vanno in gran numero, e quel punto è il limite pratico della coda. Chieda quali risposte di richiamata, chat o automatiche sono offerte e se qualcuna è contata come evasa quando il problema non è risolto. Chi facilita può usare questo spunto per aprire una discussione sull'organico per ora, non per mese.

**4. Quali dei nostri numeri sul tempo di gestione cambierebbero se prestassimo attenzione al lavoro successivo al contatto e all'attesa?**
Elenchi che cosa include il cronometro e che cosa lascia fuori. Chieda se qualcuno ha avvertito pressione ad abbreviare le chiamate e che cosa ha fatto. A questa domanda è più facile rispondere in un team che in un report, perciò dia alle persone la possibilità di parlare senza attribuzione. Concordi una definizione e se il tempo di gestione sarà usato solo per la pianificazione.

**5. Quali cinque categorie hanno generato più contatti ogni 100 utenti nello scorso trimestre, e chi è responsabile della correzione di ciascuna?**
Porti allo stesso tavolo i dati delle categorie e i responsabili dei servizi sottostanti. Per ciascuna categoria chieda se la risposta migliore sia una correzione, un articolo, un messaggio migliore o un percorso self-service. Lo scopo è uscire con voci nel backlog e responsabili indicati. Riveda l'elenco il trimestre successivo per vedere quali si sono mosse.

**6. Stiamo riportando questi dati a livello di team e di coda, e qualcuno li usa per confrontare le persone?**
Chieda direttamente al gruppo se una di queste cifre sia stata usata per giudicare una persona e con quale effetto. Discuta che cosa il desk smetterebbe di fare se il confronto individuale terminasse e che cosa comincerebbe a fare. Chi facilita registri gli eventuali esempi e li porti al responsabile delle metriche per una decisione sulla policy. L'obiettivo è un impegno scritto che i dati descrivano il sistema.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna ottengono dal desk la migliore visione del proprio servizio. I contatti ogni 100 utenti dopo un rilascio mostrano rapidamente se una modifica ha confuso le persone, e le categorie indicano che cosa correggere subito dopo. I team dovrebbero attendersi una revisione mensile delle categorie principali e trattarle come input per il backlog, senza attribuire al desk alcuna colpa per aver riferito ciò che gli utenti dicono. Chiedano al desk campioni di contatti oltre ai conteggi, perché le parole usate dagli utenti rivelano spesso un problema di etichettatura o di progettazione.

### Team di servizio e operations

Il personale del desk e i suoi responsabili hanno bisogno di cifre che li aiutino a pianificare e a migliorare senza trasformarsi in obiettivi. L'organico per ora in base ai profili di arrivo, le revisioni dei ricontatti e le richieste di articoli sono gli output più utili. Il personale dovrebbe avere voce nel modo in cui le metriche vengono definite, perché sa dove i cronometri ingannano. Dovrebbe vedere per prime le cifre del proprio team e poterle contestare.

### Leadership e governance

I responsabili hanno bisogno di un breve insieme di cifre che concordino tra loro: volume e tasso di contatto, tempo di risposta e abbandono, risoluzione al primo contatto e ricontatto, e un punteggio di soddisfazione degli utenti con il suo tasso di risposta. Dovrebbero chiedere le distribuzioni e le note sui cambi di definizione, e resistere alla tentazione di fissare un unico obiettivo sul tempo di gestione o sul volume. Gli obiettivi sulla sola velocità invitano alla manipolazione sopra descritta. La governance dovrebbe registrare chi è responsabile di ciascuna definizione (si veda l'Argomento 1.4 «Governance e responsabilità delle metriche»).

### Clienti e utenti

Agli utenti importa se sono riusciti a farsi ascoltare, se sono stati trattati bene e se il problema è rimasto risolto. Non importa loro il tempo di gestione. Dire loro che cosa misura il desk e agire sul loro feedback costruisce fiducia, come pure assicurarsi che i canali che preferiscono siano misurati e presidiati. I clienti che acquistano il servizio sono tutelati da impegni chiari in uno SLA o in un accordo sull'esperienza (si vedano l'Argomento 5.1 «Metriche SLA, OLA e XLA» e l'Argomento 6.2 «Experience level agreement»).

## In pratica: un esempio di ITIL agile

Il reparto IT di un ospedale regionale gestisce un service desk di circa una dozzina di persone per circa 4.000 utenti clinici e amministrativi. I numeri seguenti sono illustrativi e non provengono da alcuna organizzazione reale.

La vista settimanale del team mostra 1.900 contatti (illustrativo), pari a un tasso di contatto di 47,5 contatti ogni 100 utenti (illustrativo). Il tempo di risposta telefonico ha una mediana di 40 secondi e un 85º percentile di 6 minuti (illustrativo). L'abbandono è del 14 per cento (illustrativo) e sale bruscamente nelle mattine dei giorni feriali tra le 08:00 e le 09:30. Il tempo mediano di gestione è di 7 minuti e l'85º percentile è di 22 minuti (illustrativo). La risoluzione al primo contatto secondo la finestra di ricontatto è del 61 per cento (illustrativo) e il tasso di ricontatto a sette giorni è del 19 per cento (illustrativo).

Alla revisione mensile il responsabile del desk e il team delle applicazioni cliniche esaminano le categorie. I problemi di accesso e di badge rappresentano una quota consistente dei contatti del mattino, e una recente modifica all'accesso dell'applicazione clinica ha prodotto un picco di contatti sullo stesso messaggio di errore. Il desk e il team delle applicazioni decidono di fare tre cose. Cambieranno il messaggio di errore e aggiungeranno un collegamento all'articolo, aggiungeranno un'opzione di richiamata per il picco del mattino e anticiperanno di un'ora l'inizio di un turno per coprire il profilo di arrivo delle 08:00. Rivedranno abbandono, ricontatto e tasso di contatto per quella categoria dopo quattro settimane.

A metà trimestre un responsabile propone un obiettivo di tempo di gestione di 5 minuti per ridurre la coda. Il team mostra che i contatti all'85º percentile sono quelli lenti che contano di più e che un obiettivo spingerebbe gli operatori a concludere le chiamate prima del tempo. Notano anche che la cifra di risoluzione al primo contatto è salita al 78 per cento (illustrativo) in una settimana mentre il tasso di ricontatto è salito al 27 per cento (illustrativo). Una revisione rileva che alcuni turni avevano iniziato a chiudere i ticket durante la chiamata con una nota all'utente di richiamare, e ciò contava come risoluzione al primo contatto. Il team ripristina la definizione basata sul ricontatto, aggiunge la domanda di conferma all'utente e abbandona l'obiettivo sul tempo di gestione. Da quel momento abbandono, tempo di risposta e ricontatto vengono riportati insieme.

## Lente di settore

**Startup.** Il desk è spesso una casella di posta condivisa o un canale di chat gestito da chi è libero. Contate i contatti per canale, etichettate la categoria ed esaminate le prime cinque ogni mese con le persone che costruiscono il prodotto. Non acquistate una piattaforma di call center prima che il volume lo giustifichi, e non fissate obiettivi di velocità quando due persone rispondono a tutti i contatti.

**Piccola impresa.** Una persona o un fornitore esterno gestisce di solito un service desk in hosting. Usate i report standard dello strumento, chiedete al fornitore per iscritto le sue definizioni di contatto, risoluzione e abbandono, ed esportate di tanto in tanto i dati grezzi. Una breve domanda ricorrente agli utenti, come «il Suo problema è stato risolto?», offre più comprensione di una lunga dashboard.

**Grande impresa.** Molte code, lingue, strumenti e fornitori portano a definizioni diverse della stessa parola. Concordate una definizione condivisa di contatto, risoluzione al primo contatto e ricontatto, e un insieme comune di canali. Riportate per coda e servizio, con una vista standard per la direzione, e usate i dati di gestione della forza lavoro per dimensionare l'organico sui profili di arrivo. Confrontate le code solo dopo aver verificato che usino le stesse definizioni.

**Pubblica amministrazione e settore pubblico.** I record possono avere obblighi di conservazione, accesso, audit e riservatezza, e un contratto può fissare metriche e obiettivi per un desk in outsourcing. Leggete criticamente le metriche contrattuali e aggiungete alla rendicontazione le misure di salvaguardia anche quando non sono richieste. Conservate la traccia di audit dei cambi di definizione ed evitate di raccogliere dati personali non necessari. I servizi pubblici servono spesso utenti con scarsa scelta di canale, quindi l'accessibilità di ciascun canale fa parte del quadro (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

La motivazione per metriche migliori del desk è un servizio più economico e migliore, e il ritorno arriva in tre punti. Primo, meno contatti ripetuti: ogni ricontatto è lavoro che il desk non avrebbe dovuto fare e tempo che l'utente non voleva spendere. Secondo, correzioni a monte: i dati di categoria del desk possono eliminare intere classi di contatti quando i team di consegna agiscono su di essi. Terzo, un organico migliore: i dati sui profili di arrivo permettono ai responsabili di collocare le persone quando gli utenti ne hanno bisogno, il che riduce allo stesso tempo abbandono e tempi morti.

Il costo della raccolta è modesto dove la piattaforma di telefonia e lo strumento ITSM registrano già gli eventi. I costi principali sono il tempo per concordare le definizioni, correggere il collegamento tra contatti e ticket, aggiungere una breve domanda dopo il contatto e rivedere i dati con i team di consegna.

Qui non si offre alcuna cifra di ritorno, perché le cifre pubblicate variano con l'organizzazione e il metodo, e nessuna è stata verificata per questo argomento. Stimi il ritorno dai Suoi dati. Prenda il numero di ricontatti e un tempo di gestione misurato, li moltiplichi per il costo di un'ora di operatore e lo confronti con il costo della correzione. Descriva il risultato come una stima con le sue ipotesi e lo riveda dopo il cambiamento (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Porre come obiettivo il tempo medio di gestione.** Premia la fretta e i trasferimenti prematuri. Usi la distribuzione per tipo di contatto per la pianificazione e la abbini a risoluzione al primo contatto e ricontatto.
- **Contare un flag di chiusura impostato dall'operatore come risoluzione al primo contatto.** Può essere impostato a prescindere dall'esito. Usi una finestra di ricontatto e una conferma dell'utente.
- **Classificare i singoli operatori.** Spinge a scegliere i casi facili e a comportamenti difensivi. Riporti per team e coda e mantenga le conversazioni individuali riservate e di sostegno.
- **Riportare una media su tutti i canali che nasconde il canale più debole.** Telefono, chat ed e-mail si comportano in modo diverso. Riporti ciascun canale separatamente prima di combinarli.
- **Leggere il volume senza un denominatore.** Un aumento può essere crescita. Mostri i contatti ogni 100 utenti e la composizione per categoria.
- **Lasciare il desk fuori dalle decisioni di consegna.** I conteggi riportati su una dashboard e mai discussi con il team di prodotto sono sprecati. Tenga una revisione mensile delle categorie principali con i rispettivi responsabili.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizioni e cronometri | Ognuno conta i contatti a modo suo | Alcune definizioni sono scritte per alcune code | Una definizione scritta per metrica, inclusi avvio e arresto del cronometro ed esclusioni | I cambi di definizione sono registrati e rivisti con una cadenza stabilita | Definizioni condivise con fornitori e clienti e riviste quando smettono di orientare le decisioni |
| Acquisizione e qualità dei dati | Conteggi assemblati a mano da esportazioni | Dati di telefonia e ITSM riportati separatamente | Contatti e ticket collegati, con acquisizione automatizzata tra i canali | Collegamento, completezza e riconciliazione misurati e seguiti nel tempo | Dati sui contatti condivisi tra team e fornitori tramite interfacce concordate |
| Uso nel miglioramento | Numeri riportati ma raramente discussi | Revisione occasionale dei periodi di punta | Revisione mensile delle categorie principali con i responsabili dei servizi | Miglioramenti pianificati, finanziati e verificati rispetto a ricontatto e volume | I dati del desk guidano le priorità del backlog tra team di prodotto e fornitori |
| Salvaguardie e fiducia | Obiettivi di velocità applicati ai singoli | Qualche consapevolezza della manipolazione | Misure abbinate riportate insieme e nessuna classifica individuale | Controlli sulla manipolazione sottoposti ad audit da parte del team e conferma dell'utente in uso | Utenti e personale contribuiscono a definire le misure e ne vedono i risultati |

## Checklist

- [ ] Contatti e ticket sono definiti e contati separatamente, e i conteggi si riconciliano.
- [ ] Ogni canale ha un cronometro scritto per il tempo di risposta e un modo dichiarato di trattare le risposte automatiche.
- [ ] I tempi sono riportati come mediana e percentile alto con la dimensione del campione.
- [ ] L'abbandono ha un periodo di tolleranza scritto ed è mostrato insieme al tempo di risposta.
- [ ] La risoluzione al primo contatto usa una finestra di ricontatto e un significato dichiarato di «la stessa questione».
- [ ] Viene raccolta una conferma dell'utente di una sola domanda, con il relativo tasso di risposta mostrato.
- [ ] Il tasso di contatto ogni 100 utenti è riportato, con una definizione scritta di «utente attivo».
- [ ] Non è fissato alcun obiettivo sul tempo di gestione per gli operatori e nessuna metrica classifica i singoli.
- [ ] Le principali categorie di contatti sono riviste mensilmente con i team responsabili, e le azioni vanno in un backlog.
- [ ] Le definizioni sono sotto controllo di versione e ogni modifica è datata.

## Prompt IA

**Redigere definizioni precise per le misure fondamentali del desk.**

```text
Sto scrivendo le definizioni per queste misure del service desk: [elenco delle
misure, per esempio volume dei contatti, tempo di risposta, abbandono, tempo di
gestione, risoluzione al primo contatto, ricontatto]. I nostri canali sono
[elenco dei canali] e i nostri strumenti sono [piattaforma di telefonia o chat e
strumento ITSM]. Per ciascuna misura, redigi la definizione, la formula,
l'avvio e l'arresto del cronometro, le inclusioni e le esclusioni, l'unità e la
fonte dei dati. Usa gli stessi termini ovunque e non inventare valori di
riferimento od obiettivi. Elenca le tue ipotesi e le domande a cui devo
rispondere per completare il lavoro.
```

**Esaminare un insieme di cifre del desk alla ricerca di segni di manipolazione.**

```text
Ecco le cifre del nostro service desk per [periodo]: [incolla cifre come
volume, percentili del tempo di risposta, abbandono, percentili del tempo di
gestione, risoluzione al primo contatto, ricontatto]. Le nostre definizioni sono
[incolla le definizioni]. Cerca schemi che suggeriscano che una cifra è
migliorata per il modo in cui viene raccolta e non perché il servizio è
migliorato, e suggerisci che cosa verificare nei dati per ciascuna. Non accusare
singole persone e non inventare soglie. Elenca le tue ipotesi e ciò che non hai
potuto stabilire dai dati forniti.
```

**Preparare una revisione mensile delle principali categorie di contatto.**

```text
Sto preparando una revisione mensile delle categorie di contatto del service
desk per [servizio o team]. Dispongo di [conteggi per categoria e contatti ogni
100 utenti degli ultimi tre mesi]. Redigi un'agenda, un modello di tabella
sintetica e un elenco di domande da porre a ciascun responsabile del servizio su
cause, correzioni, articoli e opzioni self-service. Suggerisci come registrare
le azioni in un backlog. Non inventare numeri né cause. Elenca le tue ipotesi e
i dati che devo portare.
```

**Progettare un breve sondaggio dopo il contatto.**

```text
Voglio misurare se gli utenti si sono sentiti aiutati dopo aver contattato
[nome del service desk] tramite [canale]. Redigi [numero] domande neutre, tra
cui una sul fatto che il problema sia stato risolto, un piano su quando
inviarle e come riportare il tasso di risposta e la composizione dei
rispondenti. Segnala le formulazioni che potrebbero distorcere le risposte e
indica le considerazioni sulla privacy dato che i dati saranno conservati in
[strumento]. Non inventare tassi di risposta di riferimento. Elenca le tue
ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare quale argomento definisce una metrica correlata e la salvaguardia che dovrebbe affiancare una misura del desk.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che le modifiche a questo argomento mantengano ogni metrica abbinata a un vettore di manipolazione e a una salvaguardia.

## Punti chiave

- Contare separatamente contatti e ticket, definire entrambi e normalizzare il volume rispetto alla dimensione della base di utenti.
- Riportare i tempi come mediana e percentile alto, e indicare su quanti contatti poggia ciascuna cifra.
- Leggere velocità di risposta, abbandono e tempo di gestione come segni di sforzo, e abbinarli a risoluzione al primo contatto e ricontatto come segni di esito.
- Definire la risoluzione al primo contatto in base al ritorno o meno dell'utente e confermarla con una verifica di una sola domanda.
- Usare il desk come sensore: rivedere ogni mese le categorie principali con i team proprietari dei servizi.
- Misurare code, canali e servizi, e non classificare mai i singoli operatori.

## Riferimenti e letture di approfondimento

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997, pp. 305-321.
8. Wikipedia, [Help desk](https://en.wikipedia.org/wiki/Help_desk).
9. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Call centre](https://en.wikipedia.org/wiki/Call_centre).
12. Wikipedia, [First call resolution](https://en.wikipedia.org/wiki/First_call_resolution).
13. Wikipedia, [Automatic call distributor](https://en.wikipedia.org/wiki/Automatic_call_distributor).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
16. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
17. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
