# Misurare il lavoro assistito dall'IA

**Si giudichi il lavoro assistito dall'IA in base a ciò che sopravvive alla revisione, alla produzione e al contatto successivo dell'utente, non a quanto in fretta è comparso, e si continui a osservare se le persone che lo svolgono stiano ancora imparando.**

## Panoramica e motivazione

Quando un team usa strumenti di IA ogni giorno, la domanda centrale cambia da «dovremmo?» a «che cosa stiamo ottenendo?». L'argomento precedente ha esposto i fondamenti: basi di riferimento, confronti e costo complessivo (si veda l'argomento 10.1 «L'IA nella misurazione della gestione dei servizi»). Questo argomento entra nel lavoro stesso. Come si stabilisce se codice, ticket, documenti e decisioni assistiti dall'IA siano buoni quanto, migliori o peggiori del lavoro che sostituiscono, e che cosa accade alle persone che lo svolgono?

L'assistenza dell'IA tocca molti tipi di lavoro. Nella consegna del software, gli strumenti suggeriscono o generano codice, test, messaggi di commit e commenti di revisione. Nelle operazioni di servizio sintetizzano gli incidenti, propongono cause, redigono risposte e scrivono articoli della conoscenza. Nell'analisi producono rapporti e interrogazioni. Il tratto comune è che produrre una prima versione plausibile diventa economico. I costi si spostano altrove: leggere e giudicare l'output, correggere ciò che è sbagliato, mantenere ciò che è stato generato e imparare abbastanza da riconoscere la differenza.

Diversi effetti rendono difficile la misurazione.

- **I conteggi di output ingannano.** Le [righe di codice](https://en.wikipedia.org/wiki/Lines_of_code) sono sempre state una misura scadente della produttività, e il codice generato la peggiora. Più codice significa più da leggere, testare e mantenere. I conteggi di righe generate, suggerimenti accettati o bozze dicono poco sul valore.
- **La revisione diventa il collo di bottiglia.** La [revisione del codice](https://en.wikipedia.org/wiki/Code_review) e la revisione di altro lavoro generato richiedono tempo, e un flusso di modifiche più grandi e più frequenti può sovraccaricare i revisori. Le [pull request](https://en.wikipedia.org/wiki/Pull_request) di grandi dimensioni sono più difficili da rivedere bene, e un revisore sovraccarico è più incline ad approvare ciò che non ha compreso. Le misure di revisione e di flusso già presentate restano essenziali (si veda l'argomento 2.7 «Metriche di pull request e code review»).
- **I problemi di qualità arrivano in ritardo.** Il codice generato può superare i test oggi e portare con sé [codice duplicato](https://en.wikipedia.org/wiki/Duplicate_code), una struttura poco chiara o difetti nascosti che emergono come costo di manutenzione, una forma di [debito tecnico](https://en.wikipedia.org/wiki/Technical_debt). Le misure prese al momento della creazione lo mancano. Si osservi che cosa accade al lavoro in seguito.
- **Le competenze possono cambiare.** Affidarsi a uno strumento per compiti che prima si svolgevano da sé è una forma di [scarico cognitivo](https://en.wikipedia.org/wiki/Cognitive_offloading), che può liberare attenzione per problemi più difficili oppure condurre alla [dequalificazione](https://en.wikipedia.org/wiki/Deskilling) se la comprensione sottostante si affievolisce. Entrambi gli esiti sono possibili e dipendono da come si usano gli strumenti. Ciò conta per le persone coinvolte e per la capacità del team di gestire le situazioni che lo strumento non sa affrontare.

Le evidenze sull'effetto dell'assistenza dell'IA sulla produttività sono ancora in evoluzione e variano con il compito, l'esperienza dell'utente, lo strumento e il contesto. Alcuni studi controllati su compiti di programmazione hanno rilevato un completamento più rapido nei compiti ben definiti, mentre altri studi e rapporti hanno rilevato guadagni minori o nulli, o costi aggiuntivi, per persone esperte che lavorano su sistemi complessi che conoscono bene. Questo libro non offre un numero. La posizione responsabile per un team è misurare il proprio lavoro, con basi di riferimento e confronto, e trattare qualsiasi cifra pubblicata come un unico studio in un contesto particolare.

La salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) è qui particolarmente importante, perché la pressione a mostrare risultati è forte e i numeri facili sono quelli fuorvianti. Le misure che seguono considerano ciò che sopravvive, non ciò che viene prodotto (si veda l'argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Principi chiave

- **Misurare ciò che sopravvive.** Persistenza, rilavorazione e difetti sfuggiti dicono più dell'output.
- **Osservare la revisione.** Il flusso del lavoro assistito dall'IA è limitato da quanto bene le persone riescono a leggerlo.
- **Confrontare cose omogenee.** Il lavoro assistito e quello non assistito devono essere simili per natura e difficoltà.
- **Guardare sia più tardi sia adesso.** I problemi di qualità e i costi di manutenzione compaiono settimane o mesi dopo la creazione.
- **Mantenere la comprensione nel ciclo.** Chi consegna il lavoro deve essere in grado di spiegarlo.
- **Proteggere competenze e apprendimento.** Si noti che cosa le persone sanno ancora fare senza lo strumento.
- **Aggregare; non sorvegliare i singoli.** I dati su chi usa l'IA e come servono a migliorare il processo, non a classificare le persone.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasso di persistenza | Quota delle modifiche assistite dall'IA che restano sostanzialmente invariate dopo un periodo dichiarato | modifiche assistite dall'IA con meno di una quota stabilita modificata o annullata dopo 30 giorni / modifiche assistite dall'IA integrate 30 giorni fa | percentuale | Cronologia del controllo di versione collegata alle etichette di assistenza, a livello di team | Gestione dei rilasci e delle distribuzioni; abilitazione delle modifiche | Lavoro che regge; poca rilavorazione | Mensile |
| Rilavorazione dopo l'integrazione | Quota delle modifiche che richiedono una correzione successiva entro un breve periodo, per modifiche assistite e di confronto | modifiche con una correzione successiva collegata entro 14 giorni / modifiche integrate, per gruppo | percentuale | Controllo di versione, tracciatore delle segnalazioni, registrazioni delle modifiche | Abilitazione delle modifiche; gestione dei problemi | Difetti sfuggiti; rilavorazione | Mensile |
| Carico di revisione | Impegno del revisore per modifica, per modifiche assistite e di confronto | mediana e 85º percentile del tempo di revisione e dei cicli di revisione per modifica, per gruppo | ore; cicli | Timestamp dello strumento di revisione, aggregati per team | Gestione dei rilasci e delle distribuzioni | La revisione come retroazione e apprendimento | Mensile |
| Tasso di difetti sfuggiti | Difetti trovati in produzione per modifica, per modifiche assistite e di confronto | difetti trovati dopo il rilascio attribuiti a una modifica / modifiche rilasciate, per gruppo | difetti per modifica | Tracciatore dei difetti collegato alle modifiche | Gestione degli incidenti; gestione dei problemi | Qualità di ciò che viene rilasciato | Trimestrale |
| Tasso di superamento del controllo di spiegazione | Quota delle modifiche assistite dall'IA campionate il cui autore sa spiegare in revisione l'approccio e i relativi compromessi | modifiche campionate in cui l'autore ha spiegato con soddisfazione del revisore / modifiche campionate | percentuale | Note di revisione campionate | Gestione della conoscenza; abilitazione delle modifiche | Comprensione condivisa del codice | Trimestrale |
| Qualità del supporto assistito | Tasso di riapertura e soddisfazione degli utenti per le risposte di supporto assistite dall'IA rispetto a quelle non assistite | ticket assistiti riaperti / ticket assistiti, e valutazioni favorevoli / valutazioni, per gruppo | percentuale | Strumento ITSM, sondaggio | Service desk; gestione degli incidenti | Qualità dei risultati di servizio | Mensile |
| Valutazione di fiducia senza strumento | Valutazione del team sulla fiducia nello svolgere compiti chiave senza lo strumento | valutazione media e dispersione su una scala concordata, per team | punti di scala | Sondaggio anonimo rapido del team | Gestione della forza lavoro e dei talenti; gestione della conoscenza | Capacità e apprendimento del team | Trimestrale |

Si etichetti l'assistenza dell'IA in modo affidabile a livello di team, tramite i log dello strumento o una convenzione leggera, e si dichiari come si scelgono le modifiche di confronto: simili per dimensione, area e rischio. La persistenza misura una modifica sostanziale, con una soglia fissata nel registro. La rilavorazione dopo l'integrazione collega una correzione successiva alla modifica originale con una regola dichiarata. Il carico di revisione è l'impegno del revisore, non dell'autore, e include solo il tempo di revisione attiva dove misurabile. I dati a livello individuale non vengono mai riportati. I campioni per il controllo di spiegazione sono scelti a caso, e il controllo è una conversazione a sostegno dell'apprendimento, non una prova su una persona.

## Raccomandazioni

### Seguire il lavoro dopo la sua creazione

**1. Tracciare che cosa accade nel tempo al lavoro assistito.** Per il codice, si seguano le modifiche per settimane dopo l'integrazione: restano, vengono corrette o annullate? Per il supporto, si seguano i ticket dopo la risposta: vengono riaperti o seguiti da contatti ripetuti? Per i documenti, si verifichi se vengono usati, corretti o ignorati. Persistenza e rilavorazione sono segnali semplici e difficili da falsificare della qualità.

**2. Confrontare con un lavoro analogo non assistito.** Si scelga un lavoro di confronto di dimensioni, rischio e area simili, dello stesso periodo. La difficoltà conta: le persone possono usare l'IA per compiti facili, il che favorirebbe lo strumento, o per compiti difficili, il che lo penalizzerebbe. Si dichiari come i compiti arrivano a essere assistiti e si corregga o si avverta di conseguenza. Un confronto piccolo e onesto vale più di uno grande e confuso (si veda l'argomento 6.5 «Realizzazione del valore e risultati di business»).

**3. Includere le misure a valle nell'insieme standard.** Si abbini qualsiasi misura di velocità al tasso di fallimento delle modifiche, ai difetti sfuggiti e alle misure di stabilità già in uso (si veda l'argomento 2.8 «Metriche DORA»). Un guadagno di velocità con stabilità in calo è un trasferimento di costo alle operazioni e agli utenti. Si riporti la coppia insieme.

### Mantenere significativa la revisione

**4. Osservare il carico e la dimensione della revisione.** Si misurino tempo di revisione, cicli di revisione e dimensione delle modifiche per il lavoro assistito e non assistito. Se le modifiche assistite sono più grandi o più numerose, i revisori possono essere sovraccarichi. Si fissino norme sulla dimensione delle modifiche e si limiti la quantità di materiale generato che può confluire in una singola revisione. La capacità di revisione fa parte della capacità del sistema (si veda l'argomento 2.3 «Lavoro in corso e code»).

**5. Chiedere agli autori di spiegare.** Si faccia abitudine che l'autore di una modifica sappia spiegare che cosa fa, perché questo approccio e quali sono i compromessi. Basta una breve conversazione di sostegno durante la revisione. Si campionino controlli di spiegazione ogni trimestre per vedere se la comprensione tiene il passo con l'output. Dove gli autori non sanno spiegare, lo si tratti come un segnale per rallentare e imparare, non come una mancanza della persona.

**6. Difendersi dall'automation bias.** Si incoraggino i revisori a leggere il lavoro assistito con lo stesso spirito critico di qualunque altro. Si facciano ruotare i revisori, si inseriscano occasionalmente problemi noti in una modifica di prova per verificare il rilevamento e si mantenga il campionamento degli output da parte di revisori indipendenti. Un tasso di accettazione molto alto con rilavorazione in crescita è un avvertimento (si veda l'argomento 10.1 «L'IA nella misurazione della gestione dei servizi»).

### Curare qualità e manutenzione

**7. Monitorare la struttura del codice e del sistema.** Si tengano sotto osservazione duplicazione, complessità, copertura dei test e frequenza di modifica nelle aree in cui l'assistenza è massiccia. Si usino le misure già disponibili per il [collaudo del software](https://en.wikipedia.org/wiki/Software_testing) e la salute del codice, e si osservino le tendenze. Una duplicazione in aumento o un'efficacia dei test in calo possono segnalare che il codice generato viene accettato senza integrazione nella progettazione. La copertura del [test di regressione](https://en.wikipedia.org/wiki/Regression_testing) è una rete di sicurezza, e la sua forza conta di più quando il volume di modifiche cresce.

**8. Trattare con cura i test generati.** L'IA può scrivere molti test rapidamente, e i test possono passare senza verificare nulla di significativo. Si campionino i test generati per valutarne il valore e si misuri l'efficacia dei test con metodi come verificare se falliscono quando il comportamento viene deliberatamente rotto. Non si conti il numero di test scritti come misura di qualità.

**9. Osservare la qualità del supporto assistito.** Per service desk e operazioni, si misurino tasso di riapertura, contatti ripetuti, soddisfazione e accuratezza delle risposte campionate, confrontando risposte assistite e non assistite. Una risposta più rapida che rimanda l'utente indietro è più lenta nel complesso. Si leggano i commenti degli utenti sulle risposte assistite e si verifichi se gli utenti sanno di avere a che fare con l'IA dove ciò conta (si veda l'argomento 6.1 «Metriche di soddisfazione del cliente»).

### Proteggere persone e competenze

**10. Notare che cosa le persone sanno ancora fare.** Si chieda ai team quanto si sentano sicuri di svolgere compiti chiave senza lo strumento e si segua la tendenza. Si usino esercitazioni occasionali senza strumento, l'affiancamento e riesami della progettazione sottostante per mantenere vive le competenze. Si protegga in particolare l'apprendimento dei membri più recenti del team, che possono usare lo strumento prima di aver costruito i modelli mentali su cui i colleghi esperti si basano per giudicarlo (si veda l'argomento 9.4 «Metriche di competenze e apprendimento»).

**11. Tenere i dati sulle persone fuori dalla valutazione.** Si aggreghi a livello di team. Non si riporti quali singoli usino di più l'IA e non si usino utilizzo, tasso di accettazione o volume generato nelle valutazioni delle prestazioni. Si rendano note le regole. Serve fiducia per avere resoconti onesti su ciò che funziona e ciò che non funziona.

**12. Rivedere con regolarità.** Strumenti, modelli e pratiche cambiano nel giro di mesi. Si ripeta il confronto quando cambia lo strumento o il modo di lavorare. Si condividano i risultati, compreso il fatto che uno strumento qui non è servito, e si ritirino gli usi che non meritano più il loro posto.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tasso di persistenza | Evitare modifiche necessarie per tenere alto il numero; etichettare come assistite solo le modifiche riuscite | Etichettare tramite i log dello strumento, non per scelta dell'autore; abbinare a difetti sfuggiti e rilavorazione |
| Rilavorazione dopo l'integrazione | Correggere in un ticket diverso o in una nuova modifica non collegata; ritardare le correzioni oltre la finestra | Regola di collegamento nel registro; osservare una finestra più lunga; difetti in produzione |
| Carico di revisione | Revisioni frettolose che abbassano il tempo misurato; approvazioni senza commenti | Campione sulla profondità della revisione; difetti sfuggiti; sondaggio tra i revisori |
| Tasso di difetti sfuggiti | Non attribuire i difetti alle modifiche; riclassificare i difetti come miglioramenti | Regola di attribuzione; campione indipendente della classificazione dei difetti |
| Tasso di superamento del controllo di spiegazione | Autori che si preparano al controllo; revisori indulgenti | Campioni casuali e non annunciati; rotazione dei revisori; attenzione alle ragioni di progettazione |
| Qualità del supporto assistito | Assistere solo ticket facili; istruire gli utenti a dare valutazioni alte | Abbinare i ticket per tipo e difficoltà; tasso di risposta e composizione; leggere i commenti |
| Valutazione di fiducia senza strumento | Valutazioni gonfiate per evitare verifiche; valutazioni basse per sostenere la richiesta di più strumenti | Anonimato; confrontare con la pratica osservata nelle esercitazioni; leggere i commenti |

Una lettura sana è questa: lavoro assistito che resta al suo posto tanto spesso quanto quello non assistito, rilavorazione e difetti sfuggiti pari o migliori del confronto, revisione che resta profonda, autori in grado di spiegare ciò che consegnano, supporto assistito che non ritorna e team che restano sicuri delle proprie competenze.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Misurare il volume di output | Facile | Premia il volume; non dice nulla sul valore |
| Misurare persistenza e rilavorazione | Riflette la qualità nel tempo | Ritardata; richiede il collegamento delle registrazioni |
| Confronto controllato | Credibile | Richiede impegno; può essere impraticabile |
| Confronto osservazionale | Economico | Confuso dalla selezione dei compiti |
| Controlli di spiegazione obbligatori | Mantengono la comprensione | Possono sembrare una verifica; aggiungono impegno |
| Controlli leggeri a campione | Onere basso | Possono mancare degli schemi |
| Forti restrizioni all'uso dell'IA | Controllo del rischio | Beneficio perso; uso nascosto |
| Uso aperto con misurazione | Apprendimento e beneficio | Richiede fiducia e disciplina |

La risposta in prosa è consentire l'uso entro regole chiare, misurare ciò che sopravvive, campionare per verificare la comprensione, proteggere la capacità di revisione e le competenze e tenere i dati sulle persone fuori dalla valutazione.

## Domande da discutere con il team

**1. Quanto di ciò che l'IA ci ha aiutato a produrre nell'ultimo trimestre è ancora al suo posto, invariato, e come lo sappiamo?**
Osservate persistenza e rilavorazione delle modifiche assistite rispetto a un insieme comparabile. Il facilitatore dovrebbe registrare quanto è stato difficile rispondere. Concordate come etichettare e collegare le registrazioni perché la risposta sia facile il trimestre prossimo.

**2. La revisione tiene il passo, e che cosa accade quando non lo fa?**
Osservate tempi, cicli e dimensioni delle revisioni. Chiedete ai revisori come si sentono davanti alle modifiche assistite. Discutete limiti di dimensione e modi di ripartire il carico. Concordate una norma da provare.

**3. Ciascuno di noi saprebbe spiegare l'ultima modifica consegnata con l'aiuto dell'IA, e i suoi compromessi?**
Provate a coppie. Notate dove la spiegazione è stata facile e dove difficile. Discutete che cosa ciò dica sul nostro uso dello strumento e come mantenere alta la comprensione.

**4. Che cosa sappiamo ancora fare bene senza lo strumento, e di che cosa stiamo perdendo il tocco?**
Elencate i compiti chiave, valutate con onestà la fiducia e pianificate un po' di pratica senza strumento o di affiancamento. La conversazione fa emergere anche ciò che le persone apprezzano nel proprio lavoro e vogliono conservare.

**5. Dove l'IA ci ha aiutato di più e di meno, e che cosa hanno in comune quei luoghi?**
Confrontate esempi. Cercate caratteristiche come compiti ben definiti, buoni test o domini familiari. Usate i risultati per orientare dove impiegare lo strumento.

**6. Che cosa misureremmo se non ci fidassimo delle nostre prime impressioni?**
Chiedete al gruppo di nominare le evidenze che gli farebbero cambiare idea sullo strumento in un senso o nell'altro. Usate le risposte per definire il prossimo confronto.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna detengono l'esperienza quotidiana e i risultati di qualità. Dovrebbero etichettare il lavoro assistito, osservare persistenza e rilavorazione, mantenere significativa la revisione e conservare la propria comprensione. Dovrebbero farsi sentire quando il volume di modifiche generate supera la loro capacità di rivederle.

### Team di servizio e operations

I team di operazioni usano l'IA per sintesi, diagnosi e risposte, e ereditano i problemi di qualità che sfuggono. Dovrebbero campionare gli output, confrontare i tassi di riapertura e di contatti ripetuti e mantenere una chiara responsabilità umana per le azioni in produzione. Dovrebbero contribuire a definire dove l'IA non deve agire senza una persona.

### Leadership e governance

I dirigenti subiscono la pressione di mostrare risultati e possono essere tentati da metriche di utilizzo e di output. Dovrebbero insistere su persistenza, rilavorazione e misure di stabilità accanto alla velocità, finanziare la capacità di revisione, proteggere lo sviluppo delle competenze e resistere alla classificazione delle persone. La governance dovrebbe attendersi confronti e avvertenze nei rapporti sui benefici dell'IA.

### Clienti e utenti

Gli utenti ricevono i risultati: il codice che fa funzionare i loro servizi, le risposte alle loro richieste, i documenti su cui fanno affidamento. Ne traggono vantaggio quando la qualità regge e ne soffrono quando non regge. Dovrebbero poter raggiungere una persona, e il loro riscontro sulle interazioni assistite è un'evidenza chiave della qualità.

## In pratica: un esempio di ITIL agile

Il gruppo digitale di una compagnia aerea europea ha sei team di prodotto che costruiscono e gestiscono software di prenotazione e di operazioni. I team hanno cominciato a usare un assistente di programmazione basato sull'IA un anno fa, e la dashboard del gruppo riporta che il 38 percento delle righe integrate è generato dall'IA. I numeri seguenti sono illustrativi.

La responsabile dell'eccellenza ingegneristica è a disagio per quella dashboard. Chiede a tre team di etichettare le modifiche assistite tramite i log dello strumento, solo a livello di team, e di scegliere modifiche di confronto di dimensioni e area simili. In un trimestre, il tempo mediano dal primo commit all'integrazione è più breve per le modifiche assistite, 1,4 giorni contro 2,0. Il tasso di persistenza delle modifiche assistite dopo 30 giorni è dell'81 percento contro il 90 percento delle modifiche di confronto, e il 12 percento delle modifiche assistite ha richiesto una correzione successiva entro 14 giorni contro il 7 percento. Il carico di revisione racconta la stessa storia: il tempo mediano di revisione per modifica è più alto del 35 percento per le modifiche assistite, e l'85º percentile della dimensione delle modifiche è cresciuto. I difetti sfuggiti ogni 100 modifiche sono leggermente più alti per le modifiche assistite, benché il campione sia piccolo e la differenza rientri nella normale variazione. Un campione di 40 modifiche assistite mostra che in 31 l'autore sapeva spiegare bene l'approccio e i compromessi, in 6 in parte, e in 3 per nulla, per lo più in aree di codice nuove per l'autore. Nel service desk, le risposte assistite avevano un tasso di riapertura del 7 percento contro il 6 di quelle non assistite, con soddisfazione simile. In un sondaggio rapido del team, gli ingegneri più recenti valutano la propria fiducia nell'implementare le funzionalità principali senza lo strumento 2,6 su 5, contro 4,1 per gli ingegneri con più di tre anni nel gruppo.

La responsabile dell'eccellenza ingegneristica porta i risultati ai team e non li classifica. I team concordano quattro cambiamenti. Limiti alla dimensione delle modifiche e un turno di revisione proteggono i revisori. Gli autori spiegano brevemente in revisione le modifiche assistite. Gli ingegneri più recenti lavorano in coppia con quelli esperti sulle funzionalità principali, e un esercizio mensile senza strumento mantiene allenate le competenze. La dashboard abbandona la quota di righe generate e mostra persistenza, rilavorazione, carico di revisione e difetti sfuggiti, per il lavoro assistito rispetto al confronto. Tre mesi dopo, il divario di persistenza si riduce a 4 punti, le correzioni successive scendono all'8 percento e il controllo di spiegazione migliora. Un vicepresidente chiede che la quota di righe generate diventi un obiettivo per ogni team. La responsabile dell'eccellenza ingegneristica spiega i risultati e propone di continuare a monitorare i risultati, aggiungendo che i guadagni sono reali in alcuni compiti e non in altri e che il team deciderà dove usare lo strumento. La decisione viene registrata.

## Lente di settore

**Startup.** I team piccoli possono trarre molto dall'assistenza e al tempo stesso accumulare rapidamente debito nascosto. Si seguano persistenza e rilavorazione fin dall'inizio, si mantengano significativi i test e ci si assicuri che chi dovrà mantenere il sistema lo comprenda. Ci si guardi dal consegnare codice che nessuno sa spiegare.

**Piccola impresa.** L'assistenza può dare slancio a un team minuscolo. Si misuri su un campione piccolo: quanto spesso il lavoro assistito richiede correzioni successive. Si mantengano backup, test e revisione umana di tutto ciò che è rivolto ai clienti, e si protegga la comprensione che il titolare ha dei sistemi da cui dipende.

**Grande impresa.** La scala amplifica sia i guadagni sia i problemi. Si fornisca una guida condivisa su etichettatura, limiti di revisione e misure, si confrontino con cautela i team senza classificarli e si investa nella capacità di revisione e di collaudo. Si includa nella pipeline la revisione di sicurezza e di licenza del codice generato (si veda l'argomento 7.2 «Metriche di asset software e licenze»).

**Pubblica amministrazione e settore pubblico.** I sistemi pubblici hanno vita lunga, responsabilità rigorosa e conseguenze elevate in caso di errore. Si richieda una responsabilità umana tracciabile, collaudi accurati e documentazione di come è stata usata l'IA. Si registri il lavoro assistito nelle registrazioni delle modifiche e si valutino i rischi per equità e sicurezza (si veda l'argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi sono strumenti e addebiti d'uso, lo sforzo di etichettare e collegare le registrazioni, il tempo di revisione e correzione, collaudi aggiuntivi e formazione. Uno studio di confronto richiede tempo, ma è poco costoso rispetto a una decisione sbagliata di estendere o di vietare.

I ritorni sono reali dove l'assistenza riduce lo sforzo senza ridurre la qualità, e si perdono dove sposta lo sforzo in revisione, rilavorazione e manutenzione. Si costruisca il caso a partire dalle proprie misure: tempo fino a una modifica integrata e persistente, rilavorazione e difetti sfuggiti rispetto al confronto, carico di revisione e soddisfazione di utenti e personale. Si eviti di usare come stima le cifre di produttività pubblicate. Si ricordino i costi nascosti: comprensione ridotta, perdita di competenze e debito tecnico. Si sia onesti sull'incertezza (si veda l'argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Contare righe generate o suggerimenti accettati.** Premiano il volume. Si misuri ciò che sopravvive.
- **Confrontare lavoro assistito su compiti facili con lavoro non assistito su compiti difficili.** Il risultato favorisce o penalizza lo strumento. Si abbinino i compiti.
- **Lasciare che la capacità di revisione resti indietro.** La qualità cala in silenzio. Si limiti la dimensione delle modifiche e si proteggano i revisori.
- **Saltare le misure a valle.** Il costo compare più tardi. Si seguano rilavorazione, difetti e stabilità.
- **Trattare i test generati come qualità.** Possono passare senza verificare nulla. Si collaudino i test.
- **Ignorare le competenze.** La comprensione si affievolisce senza che ce ne si accorga. Si seguano la fiducia senza strumento e la pratica.
- **Sorvegliare i singoli.** Genera paura e nasconde i problemi. Si tengano i dati a livello di team.
- **Dichiarare vittoria su uno studio breve e piccolo.** Si ripeta man mano che strumenti e pratiche cambiano.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Misurare ciò che sopravvive | Conteggi di output | Impressioni informali sulla qualità | Lavoro assistito etichettato; persistenza e rilavorazione seguite rispetto al confronto | Difetti a valle, stabilità e carico di revisione gestiti insieme | Evidenze tra team orientano dove si usa l'assistenza; risultati condivisi ampiamente |
| Revisione e comprensione | Revisione come prima | Preoccupazione per il sovraccarico | Norme sulla dimensione delle modifiche; controlli di spiegazione a campione | Capacità di revisione pianificata; automation bias contrastato | Revisione e comprensione integrate nel modo in cui tutti i team lavorano con l'IA |
| Persone e competenze | Non considerate | Aneddoti | Fiducia senza strumento rilevata con sondaggi rapidi; un po' di pratica | Sviluppo delle competenze pianificato; tendenze gestite | Apprendimento e mestiere protetti in tutta l'organizzazione; uso dell'IA co-progettato con il personale |

## Checklist

- [ ] Il lavoro assistito dall'IA è etichettato a livello di team tramite i log dello strumento o una convenzione leggera.
- [ ] È definito un lavoro di confronto di dimensioni, area e rischio simili.
- [ ] Persistenza e rilavorazione dopo l'integrazione sono seguite per il lavoro assistito e di confronto.
- [ ] Difetti sfuggiti e tasso di fallimento delle modifiche sono riportati accanto a qualsiasi misura di velocità.
- [ ] Tempo di revisione, cicli e dimensione delle modifiche sono monitorati, con norme sulla dimensione.
- [ ] Gli autori sanno spiegare le modifiche assistite, e un campione viene verificato ogni trimestre.
- [ ] I test generati sono campionati per verificarne il valore.
- [ ] Il supporto assistito è confrontato per tasso di riapertura, contatti ripetuti e soddisfazione.
- [ ] La fiducia senza strumento è rilevata con sondaggi rapidi, e la pratica senza strumento è pianificata.
- [ ] I dati individuali di utilizzo e di accettazione non sono usati nella valutazione.

## Prompt IA

**Pianificare un confronto tra modifiche assistite e non assistite.**

```text
Vogliamo confrontare modifiche assistite dall'IA e non assistite per [team e sistema].
I nostri dati comprendono: [elenco dei campi]. Proponi come etichettare le modifiche
assistite senza affidarsi alla memoria degli autori, come scegliere modifiche di
confronto di dimensioni e rischio simili, quali misure confrontare (persistenza,
rilavorazione, carico di revisione, difetti), il periodo e come accompagnare i
risultati con le dovute avvertenze. Non indicare risultati attesi. Elenca le tue
ipotesi e le minacce alla validità.
```

**Progettare un controllo di spiegazione.**

```text
Progetta un breve controllo di spiegazione, di sostegno, per modifiche assistite
dall'IA campionate in [linguaggio e dominio]. Includi come campionare, le domande
che pone un revisore, che cosa copre una buona spiegazione, come registrare i
risultati a livello di team e come usare gli esiti per l'apprendimento senza
valutare le persone. Elenca le tue ipotesi e i rischi del controllo.
```

**Riesaminare le misure a valle.**

```text
Ecco le nostre misure per [periodo]: velocità [valori], persistenza [valori],
rilavorazione [valori], carico di revisione [valori], difetti sfuggiti [valori],
per il lavoro assistito e di confronto. Descrivi che cosa suggerisce lo schema e
che cosa non suggerisce, quali differenze rientrano nella normale variazione e che
cosa controllare dopo. Non sostenere nessi causali. Elenca le tue ipotesi e i dati
che dovrei aggiungere.
```

**Pianificare la pratica senza strumento.**

```text
Proponi un programma leggero per mantenere vive le competenze di base in un team che
usa ogni giorno strumenti di IA: esercizi mensili senza strumento, affiancamento tra
membri più recenti ed esperti e discussioni di progettazione. Suggerisci come
inserirlo nella settimana lavorativa senza aggiungere pressione e come seguirne
l'effetto con il sondaggio rapido sulla fiducia senza strumento. Elenca le tue
ipotesi e i compromessi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una misura del lavoro assistito dall'IA.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una metrica del lavoro assistito dall'IA misuri ciò che sopravvive e riporti il proprio vettore di manipolazione e la propria salvaguardia.

## Punti chiave

- Si misuri ciò che sopravvive: persistenza, rilavorazione, difetti sfuggiti e stabilità, rispetto a un lavoro analogo non assistito.
- Si protegga la capacità di revisione e si mantenga profonda la revisione, perché limita la velocità con cui il lavoro assistito può scorrere in sicurezza.
- Si verifichi che gli autori sappiano spiegare ciò che consegnano e si noti se le competenze crescono o si affievoliscono.
- Si campionino test e output generati per verificarne il valore reale.
- Si leggano le affermazioni di produttività pubblicate come singoli studi e si misuri il proprio lavoro.
- Si tengano i dati individuali di utilizzo fuori dalla valutazione.

## Riferimenti e letture di approfondimento

1. Peng, S., Kalliamvakou, E., Cihon, P., and Demirer, M., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot," arXiv preprint, 2023.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. DORA, Google Cloud, *Accelerate State of DevOps Report* (latest edition addressing AI), https://dora.dev/.
4. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Lines of code](https://en.wikipedia.org/wiki/Lines_of_code).
8. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
9. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
10. Wikipedia, [Duplicate code](https://en.wikipedia.org/wiki/Duplicate_code).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Cognitive offloading](https://en.wikipedia.org/wiki/Cognitive_offloading).
13. Wikipedia, [Deskilling](https://en.wikipedia.org/wiki/Deskilling).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Software testing](https://en.wikipedia.org/wiki/Software_testing).
16. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
