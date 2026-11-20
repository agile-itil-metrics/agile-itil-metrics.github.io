# Panorama degli strumenti

**Scegliere gli strumenti in base alle domande a cui serve rispondere e ai dati di cui ci si può fidare, mantenere i dati portabili e spendere per le piattaforme meno di quanto si investa nelle abitudini che rendono i numeri degni di essere letti.**

## Panoramica e motivazione

Gli strumenti sono il punto in cui i programmi di metriche sbagliano più spesso, in due direzioni opposte. Alcune organizzazioni acquistano per prima una grande piattaforma di analisi e scoprono più tardi di non avere definizioni concordate, dati puliti né un pubblico. Altre costruiscono un cumulo di script e fogli di calcolo che una sola persona comprende, e il programma finisce quando quella persona se ne va. Entrambe partono dallo strumento e ignorano le domande a cui esso dovrebbe rispondere.

Il panorama è affollato e muta rapidamente, quindi questo argomento è volutamente indipendente dai fornitori. Descrive i tipi di strumenti, i flussi di dati tra di essi, i compromessi tra sviluppare e acquistare e i criteri di scelta. Non cita alcun prodotto, perché i nomi dei prodotti invecchiano in fretta e un libro è una guida scadente a funzionalità e prezzi correnti. I principi di misurazione non cambiano con il fornitore: sapere che cosa si misura, da dove provengono i dati, chi ne è responsabile e come verranno letti.

La maggior parte dei dati di cui un programma di metriche di servizio ha bisogno esiste già nei sistemi di registrazione. Gli strumenti di [gestione dei servizi IT](https://en.wikipedia.org/wiki/IT_service_management) contengono incidenti, richieste, problemi, modifiche e registrazioni di configurazione. I sistemi di controllo del codice sorgente, di build, di test e di distribuzione contengono lo storico del lavoro di ingegneria. I sistemi di monitoraggio e di [osservabilità](https://en.wikipedia.org/wiki/Observability_(software)) contengono dati di disponibilità, latenza ed errori. Gli strumenti di indagine, i sistemi finanziari, quelli delle risorse umane e gli archivi dei contratti contengono il resto. Un programma di metriche unisce queste fonti senza disturbare il lavoro che vi si svolge (vedere l'Argomento 1.5 «Fonti dei dati e strumentazione»).

Il movimento dei dati dalle fonti a un luogo in cui possano essere analizzati è una [pipeline di dati](https://en.wikipedia.org/wiki/Data_pipeline), e lo schema classico è [extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load) (estrazione, trasformazione, caricamento): leggere dalle fonti, rimodellare e ripulire, scrivere in un archivio. L'archivio può essere un [data warehouse](https://en.wikipedia.org/wiki/Data_warehouse), un repository integrato di dati provenienti da più sistemi, organizzato per l'analisi. I programmi raggiungono questi sistemi tramite un'[interfaccia di programmazione di un'applicazione](https://en.wikipedia.org/wiki/Application_programming_interface) (API), ossia il modo in cui un software chiede dati a un altro in maniera definita. La qualità di ciò che scorre determina la qualità di ogni grafico. La [qualità dei dati](https://en.wikipedia.org/wiki/Data_quality) riguarda accuratezza, completezza, coerenza e tempestività, e la disciplina che la sostiene è la [data governance](https://en.wikipedia.org/wiki/Data_governance).

Il versante finanziario merita attenzione. Il [costo totale di proprietà](https://en.wikipedia.org/wiki/Total_cost_of_ownership) di uno strumento comprende licenze, infrastruttura, integrazione, formazione, amministrazione e il costo di abbandonarlo. Il [vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) è la situazione in cui cambiare fornitore è così costoso che il cliente è di fatto vincolato. I programmi di metriche sono particolarmente esposti, perché definizioni, storico e dashboard si accumulano dentro uno strumento ed estrarli in seguito è difficile.

Gli obiettivi agili plasmano l'approccio. La consegna continua si applica al programma: allestire il percorso funzionante più sottile da una fonte a una vista per un team, imparare dal suo utilizzo ed estendere. Il coinvolgimento continuo degli stakeholder significa che le persone che useranno i numeri partecipano alle scelte degli strumenti. Il miglioramento continuo e l'evoluzione costante significano che si prevede che gli strumenti cambino, quindi la portabilità conta più della perfezione. Un ritmo sostenibile significa che il programma non diventa un progetto di data engineering che affama il lavoro che misura. E le persone motivate lavorano meglio con strumenti che hanno contribuito a scegliere e che comprendono che con strumenti imposti dall'alto, in particolare quelli che sembrano sorveglianza (vedere l'Argomento 11.3 «Introdurre le metriche senza generare paura»).

L'argomento si appoggia alle indicazioni di progettazione della dashboard (vedere l'Argomento 11.1 «Progettare una dashboard delle metriche di servizio») e agli argomenti di governance della Parte 1.

## Principi chiave

- **Le domande prima degli strumenti.** Scrivere prima le domande e le misure, poi vedere di quali strumenti hanno bisogno.
- **Usare i sistemi di registrazione.** Prelevare i dati dove si svolge il lavoro ed evitare di chiedere alle persone di inserirli due volte.
- **Tenere le definizioni fuori dallo strumento.** Mantenere le definizioni delle metriche in una forma semplice e portabile che sopravviva a un cambio di piattaforma.
- **Preferire dati portabili.** Archiviare i dati in formati aperti, con interfacce documentate, e conservare una via d'uscita.
- **Iniziare in piccolo e crescere.** Una fonte, una vista, un team, poi estendere.
- **Contare il costo pieno.** Le licenze sono una frazione del costo di integrazione, pulizia dei dati e manutenzione.
- **Proteggere le persone.** Gli strumenti dovrebbero aggregare per team e servizi, far rispettare le regole di accesso e rendere difficile la sorveglianza.
- **Trattare la pipeline come un servizio.** Richiede un responsabile, un monitoraggio, test e un modo per gestire i guasti.

## Definizioni delle metriche

Le misure seguenti descrivono la salute degli strumenti di metriche e della loro fornitura di dati. Sono destinate al team di programma, per mantenere onesta l'infrastruttura, e non vanno usate per valutare le persone.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Copertura delle fonti | Quota dei sistemi di registrazione necessari per le misure concordate che alimentano automaticamente l'archivio delle metriche | fonti collegate e verificate / fonti necessarie per le misure concordate | percentuale | Inventario delle fonti; configurazione della pipeline | Gestione delle informazioni e della tecnologia; gestione della configurazione del servizio | Consegna continua della pipeline | Trimestrale |
| Affidabilità della pipeline | Quota dei caricamenti di dati pianificati che si completano in tempo con controlli superati | caricamenti in tempo con controlli superati / caricamenti pianificati | percentuale | Log della pipeline e risultati dei test | Monitoraggio e gestione degli eventi | Test automatizzati e feedback rapido | Settimanale |
| Tempo per una nuova misura | Tempo trascorso dalla richiesta approvata di una nuova misura alla sua disponibilità con una scheda di definizione | giorni dall'approvazione alla pubblicazione, mediana e 85° percentile | giorni | Registri di richieste e rilasci | Gestione delle richieste di servizio; abilitazione delle modifiche | Piccoli incrementi di valore | Trimestrale |
| Tasso di riconciliazione | Quota delle cifre chiave che coincidono tra l'archivio delle metriche e il sistema di origine in un controllo a campione | cifre coincidenti entro la tolleranza / cifre controllate | percentuale | Controlli di riconciliazione | Gestione delle informazioni e della tecnologia | Feedback affidabile | Mensile |
| Quota di lavoro manuale | Quota dello sforzo sui rapporti ricorrenti dedicata alla raccolta e alla pulizia manuale | ore in passaggi manuali / ore totali sui rapporti ricorrenti | percentuale | Stime di tempo; indagine sul team | Miglioramento continuo | Eliminazione del toil | Trimestrale |
| Prontezza all'uscita | Se definizioni, storico e dashboard possono essere esportati in una forma documentata e utilizzabile | esportazioni verificate e complete / prove di esportazione pianificate | percentuale | Registri delle prove di esportazione | Gestione dei fornitori; gestione della continuità del servizio | Scelte sostenibili | Annuale |
| Costo degli strumenti per team supportato | Costo annuo pieno degli strumenti del programma diviso per i team che serve | (licenze + infrastruttura + sforzo di manutenzione) / team serviti | valuta per team | Registri finanziari e di sforzo | Gestione finanziaria del servizio | Ritmo sostenibile | Annuale |

Contare le fonti in base a ciò di cui hanno bisogno le misure concordate e non a ciò che esiste, in modo che la copertura non venga aumentata collegando sistemi irrilevanti. La riconciliazione richiede di scegliere in anticipo un campione e una tolleranza. Il costo degli strumenti per team supportato è una cifra descrittiva usata per confrontare le opzioni, non un obiettivo da spingere verso il basso. Comprende lo sforzo delle persone che mantengono la pipeline.

## Raccomandazioni

### Decidere di che cosa si ha bisogno

**1. Scrivere i requisiti come domande e misure.** Elencare le misure che il programma ha concordato di pubblicare (vedere l'Argomento 11.1 «Progettare una dashboard delle metriche di servizio»), le fonti di cui ciascuna ha bisogno, quanto aggiornata deve essere ciascuna, chi può vederla e per quanto tempo lo storico deve essere conservato. Distinguere gli elementi indispensabili dalle preferenze. Un breve documento di due pagine è meglio di una lunga richiesta di offerta.

**2. Fare l'inventario di ciò che si possiede già.** Molte organizzazioni hanno funzionalità di analisi nei propri strumenti di gestione dei servizi, di ingegneria e di monitoraggio che restano inutilizzate. Molte hanno fogli di calcolo, script e rapporti che già rispondono a una parte del bisogno. Iniziare vedendo che cosa questi sanno fare. Lo strumento più economico è quello già pagato e già compreso.

**3. Fare il punto dei dati prima dello strumento.** Per ogni fonte, verificare se i dati sono completi, inseriti in modo coerente e accessibili tramite un'interfaccia. Uno strumento non può correggere categorie di incidenti che nessuno usa, registrazioni di modifica create a posteriori o timestamp sovrascritti. Parte del lavoro iniziale più prezioso consiste nel correggere l'acquisizione dei dati alla fonte (vedere l'Argomento 7.4 «Qualità della configurazione e del CMDB»).

### Sviluppare, acquistare o combinare

**4. Confrontare sviluppo e acquisto su costo pieno e adeguatezza.** Acquistare una piattaforma di analisi o un prodotto confezionato di analisi dell'ingegneria porta connettori, grafici e assistenza già pronti, al prezzo di licenze, di un modello del mondo prefissato e di dipendenza. Sviluppare una pipeline e delle viste porta adeguatezza e controllo, al prezzo di tempo di ingegneria e manutenzione. La maggior parte delle organizzazioni finisce per combinare: usare i rapporti integrati dove sono sufficienti, usare uno strumento generale di analisi per le viste e sviluppare connettori sottili dove nient'altro si adatta.

**5. Provare un prototipo con dati reali.** Prima di impegnarsi, condurre una prova a tempo limitato con due o tre delle proprie misure, usando dati reali e utenti reali. Verificare quanto tempo hanno richiesto le connessioni, quanto bene lo strumento ha gestito le proprie definizioni, se ha saputo mostrare distribuzioni e percentili e come ha controllato l'accesso. Le dimostrazioni commerciali usano dati puliti, e i propri non lo sono.

**6. Pianificare l'uscita prima di entrare.** Chiedere come si possono esportare definizioni, storico e dashboard, e provarlo. Preferire strumenti con interfacce aperte e formati standard e conservare una copia propria delle definizioni delle metriche e dei dati ripuliti. Il costo di abbandonare fa parte del costo di restare, e un'uscita credibile migliora la propria posizione negoziale (vedere l'Argomento 8.4 «Metriche di fornitori e contratti»).

### Scegliere con criteri chiari

**7. Usare criteri di selezione indipendenti dai fornitori.** Tra i criteri utili vi sono i seguenti. Le fonti di dati necessarie dispongono di connettori mantenuti? Le definizioni possono essere scritte, versionate e riviste? Lo strumento sa mostrare distribuzioni, percentili e andamenti oltre a medie e conteggi? Aggrega per team e servizi e permette di limitare le viste a livello individuale? Supporta l'accesso basato sui ruoli e l'audit? I dati sono esportabili in formati aperti? Come gestisce il fornitore le modifiche, le interruzioni e gli incidenti di sicurezza? Quanto costa alla scala prevista tra tre anni?

**8. Diffidare dei punteggi integrati.** Alcuni strumenti offrono di serie punteggi compositi, classifiche di persone o indici di «produttività». Sono facili da adottare e difficili da difendere (vedere l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»). Verificare se tali funzioni possono essere disattivate e stabilire la politica prima di attivare qualunque cosa.

**9. Coinvolgere le persone che lo useranno.** Chiedere ai team di provare con i propri dati le opzioni selezionate. Le loro domande metteranno in luce limiti che un documento di requisiti non aveva rivelato. Coinvolgere presto sicurezza, privacy, finanza e acquisti (vedere l'Argomento 8.1 «Metriche di incidenti di sicurezza e vulnerabilità»).

### Gestire la pipeline come un servizio

**10. Automatizzare, testare e monitorare la pipeline.** Trattare i caricamenti di dati come qualunque altro servizio di produzione. Eseguire controlli automatici su conteggi, intervalli, duplicati e aggiornamento. Generare un avviso in caso di guasto e mostrare sulla dashboard lo stato della qualità dei dati. Versionare la logica di trasformazione e rivederne le modifiche come si fa con il codice (vedere l'Argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi»).

**11. Mantenere un catalogo delle definizioni.** Mantenere un catalogo condiviso con definizione, formula, fonte, responsabile e limiti di ciascuna misura. Può essere un repository di file di testo semplice, uno strumento di catalogo dei dati o un wiki. Ciò che conta è che sia la fonte di verità per il significato e che le dashboard lo leggano o vi rimandino (vedere l'Argomento 1.4 «Governance e responsabilità delle metriche»).

**12. Rivedere ogni anno gli strumenti.** Ogni anno verificare quanto costano gli strumenti, quali parti il programma usa, dove resta lavoro manuale e quali opzioni più recenti esistono. Ritirare ciò che nessuno usa. Riconsiderare l'equilibrio tra sviluppo e acquisto man mano che il programma matura. Pianificare il cambiamento come parte normale del lavoro.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Copertura delle fonti | Collegare fonti facili o irrilevanti; contare una connessione che non trasporta dati utilizzabili | Contare in base alle misure concordate; verificare la completezza dei dati per fonte |
| Affidabilità della pipeline | Allentare i controlli perché i caricamenti passino sempre; pianificare meno caricamenti | Rivedere la solidità dei controlli; monitorare la riconciliazione e il numero di righe della fonte |
| Tempo per una nuova misura | Pubblicare senza definizioni né test; restringere ciò che conta come nuova misura | Richiedere la scheda di definizione e un controllo di riconciliazione per considerarla completata |
| Tasso di riconciliazione | Scegliere cifre facili da controllare; ampliare la tolleranza dopo un'incongruenza | Scegliere i campioni prima del controllo; fissare la tolleranza in anticipo; includere cifre difficili |
| Quota di lavoro manuale | Sottostimare il lavoro manuale; nascondere lo sforzo in altri budget | Chiedere alle persone che svolgono il lavoro; confrontare con il tempo speso in fondo a ciascun ciclo di rendicontazione |
| Prontezza all'uscita | Provare un'esportazione parziale; contare un piano documentato come prontezza | Eseguire un ripristino completo in un altro strumento su un campione; verificare definizioni e storico |
| Costo degli strumenti per team supportato | Escludere lo sforzo di manutenzione; aggiungere team solo sulla carta | Includere il tempo del personale; contare i team che usano attivamente le proprie viste |

Una lettura sana mostra dati che arrivano in tempo e si riconciliano con la fonte, nuove misure pubblicate con le definizioni, uno sforzo manuale in calo e un'uscita che è stata provata almeno una volta.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Rapporti integrati di ciascuno strumento | Economici; già disponibili; compresi | Silos; definizioni incoerenti tra gli strumenti |
| Suite unica di un solo fornitore | Integrata; un solo contratto | Lock-in; si adatta al modello del fornitore, non al proprio |
| Prodotto confezionato di analisi dell'ingegneria | Avvio rapido; connettori pronti | Modello prefissato; rischio di punteggi a livello individuale; costo alla scala |
| Strumento generale di analisi e visualizzazione | Flessibile; competenze ampiamente disponibili | Richiede una fornitura di dati e competenza di progettazione |
| Warehouse con livello di trasformazione | Controllo solido; unioni tra fonti | Sforzo di ingegneria; richiede un responsabile |
| Fogli di calcolo e script | Rapidi da avviare; nessuna licenza | Fragili; dipendono dalle persone; difficili da sottoporre ad audit |
| Stack open source | Controllo; nessun costo di licenza | Sforzo di manutenzione; l'assistenza dipende da chi lo usa |
| Metriche raccolte a mano | Funzionano senza strumenti | Lente; soggette a errori; difficili da sostenere |

La risposta in prosa è partire da ciò che si ha già, aggiungere il collegamento più sottile che risponda a domande reali, mantenere portabili definizioni e dati e passare a strumenti più pesanti solo quando quelli più leggeri limitano in modo dimostrabile le decisioni.

## Domande da discutere con il team

**1. Quali numeri produciamo a mano ogni mese, e che cosa servirebbe per smettere?**
Elencare i rapporti manuali e le ore che richiedono. Individuare la fonte di ciascuno e se dispone di un'interfaccia. Il facilitatore dovrebbe chiedere quali rapporti potrebbero semplicemente essere abbandonati. Concordare uno da automatizzare e uno da ritirare.

**2. Se il nostro attuale strumento di rendicontazione sparisse domani, che cosa perderemmo?**
Nominare le definizioni, lo storico e le dashboard che esistono solo al suo interno. Verificare quali di essi sono esportabili. Concordare dove conservare una copia.

**3. Di quali dati nei nostri sistemi ci fidiamo di meno, e perché?**
Esaminare abitudini di inserimento, valori predefiniti e campi sovrascritti. Stimare quanto ciascuna distorsione incida sulle misure che pubblichiamo. Concordare quale correzione alla fonte aggiungerebbe più fiducia con il minor sforzo.

**4. Che cosa permette di vedere lo strumento che non vorremmo che mostrasse?**
Controllare le viste a livello individuale, i log di attività e le classifiche. Decidere che cosa limitare o disattivare e scrivere la regola prima che qualcuno usi la funzione.

**5. Quanto tempo ci vuole per aggiungere una nuova misura, e che cosa ci rallenta?**
Ripercorrere una richiesta recente dall'approvazione alla disponibilità. Segnare le attese. Concordare che cosa eliminare, come approvazioni, definizioni mancanti o pulizia manuale.

**6. Qual è il costo pieno di questo strumento per un team in un anno?**
Sommare licenze, infrastruttura, integrazione, formazione e il tempo delle persone che lo mantengono. Confrontare con le decisioni che ha migliorato. Discutere che cosa smetteremmo di pagare.

## Quattro prospettive

### Team di prodotto e di consegna

I team vogliono dati che provengano dal lavoro senza inserimenti aggiuntivi e viste che rispondano alle loro domande. Dovrebbero contribuire a scegliere e provare gli strumenti, possedere le definizioni delle proprie misure e rifiutare le funzioni che classificano le persone. Il loro tempo è la risorsa più scarsa, e gli strumenti che chiedono di registrare il lavoro due volte incontreranno resistenza.

### Team di servizio e operations

I team operativi gestiscono le fonti e spesso la pipeline. Dovrebbero trattare la pipeline come un servizio con monitoraggio e test, mantenere affidabili i campi dei dati di origine e segnalare le modifiche nei sistemi di registrazione che romperanno i connettori. Sono i primi ad accorgersi che un numero è sbagliato.

### Leadership e governance

I dirigenti finanziano il programma e fissano le aspettative. Dovrebbero chiedere il costo totale, non il prezzo delle licenze, richiedere portabilità e un'uscita, resistere alla tentazione di acquistare una piattaforma per risolvere un problema di definizioni e pretendere regole di privacy e di accesso. Dovrebbero accettare un avvio modesto e giudicarlo dalle decisioni che migliora.

### Clienti e utenti

Clienti e utenti vedono raramente gli strumenti e ne vivono le conseguenze: i dati che li riguardano vengono archiviati, combinati e analizzati. Meritano regole chiare su che cosa viene raccolto, per quanto tempo viene conservato, chi lo vede e come è protetto. Dove le misure si basano sui loro riscontri, gli strumenti dovrebbero rispettare consenso e anonimato.

## In pratica: un esempio di ITIL agile

Un'azienda regionale di logistica dispone di uno strumento di gestione dei servizi, di un sistema di controllo del codice sorgente e distribuzione, di una piattaforma di monitoraggio e di uno strumento di indagine, e ciascuno produce i propri rapporti. La responsabile della gestione dei servizi vuole un'unica vista dello stato di salute dei servizi per 12 team. Un fornitore propone una piattaforma di analisi tutto in uno con un contratto triennale. Le cifre seguenti sono illustrative.

La responsabile della gestione dei servizi scrive anzitutto le domande e le 14 misure concordate da team e dirigenti nelle sessioni sulla dashboard. Fa l'inventario di ciò che esiste: lo strumento di gestione dei servizi può esportare dati di incidenti e modifiche tramite la propria interfaccia, il sistema di distribuzione fornisce i timestamp delle distribuzioni e la piattaforma di monitoraggio riporta la disponibilità rispetto agli obiettivi. Chiede a un piccolo gruppo di rappresentanti dei team di provare due opzioni su tre misure con dati reali: la piattaforma del fornitore e una combinazione di uno strumento generale di visualizzazione con un piccolo archivio dati e connettori sottili.

La prova fa emergere differenze. La piattaforma si è collegata a tutte le fonti in due giorni, ma calcolava il lead time come media e non sapeva mostrare un percentile alto, aveva un «punteggio di produttività del team» integrato che non poteva essere disattivato e l'esportazione delle definizioni delle dashboard produceva un file che nessun altro strumento sapeva leggere. La combinazione ha richiesto 11 giorni per collegarsi, ma ha mostrato mediane e percentili, ha conservato le definizioni come testo semplice in un repository e ha limitato i campi a livello individuale nell'archivio dati. Il gruppo scopre inoltre che il 30 per cento delle registrazioni di modifica veniva creato dopo la distribuzione, quindi il lead time era sbagliato qualunque strumento lo leggesse. Correggere l'abitudine di inserimento alla fonte diventa il primo lavoro.

L'azienda sceglie la combinazione. La copertura delle fonti sale da 3 a 7 delle 8 fonti necessarie nell'arco di due trimestri. L'affidabilità della pipeline parte dal 71 per cento di caricamenti in tempo con controlli superati e raggiunge il 96 per cento dopo che il team aggiunge test e avvisi di guasto. Il tempo per una nuova misura scende da una mediana di 31 giorni a 9. Lo sforzo manuale sul rapporto mensile scende da circa 40 ore a 6. Un direttore chiede se il punteggio di produttività della piattaforma del fornitore possa essere aggiunto per ottenere un'unica classifica dei team. La responsabile della gestione dei servizi spiega l'analisi dell'Argomento 1.2, mostra che cosa è accaduto quando un punteggio simile è stato usato altrove nell'azienda e propone la vista equilibrata attuale. La decisione viene registrata e la funzione di punteggio viene disattivata in qualunque strumento che ne abbia una.

## Lente di settore

**Startup.** Usare ciò che il prodotto e gli strumenti esistenti già offrono. Un foglio di calcolo e i rapporti integrati degli strumenti in uso possono rispondere alla maggior parte delle prime domande. Resistere a una piattaforma di dati finché le domande non sono stabili e lo sforzo manuale non diventa gravoso. Tenere scritte le definizioni delle metriche, in modo che un successivo passaggio sia facile.

**Piccola impresa.** Poche misure e pochi sistemi significano strumenti semplici. I rapporti integrati e un foglio di calcolo spesso bastano. I rischi principali sono dati conservati solo nella testa di una persona e strumenti privi di esportazione. Scegliere prodotti che si possano abbandonare e scrivere le definizioni.

**Grande impresa.** Molti sistemi, molti team e molte definizioni depongono a favore di un archivio dati governato, di un catalogo delle definizioni e di viste stratificate. La responsabilità federata funziona meglio di un team centrale che costruisce ogni rapporto. Prestare attenzione a lock-in, controllo degli accessi, privacy e valutazione dei fornitori, e considerare un piccolo team di piattaforma che fornisca la pipeline come servizio.

**Pubblica amministrazione e settore pubblico.** Le regole sugli appalti, la sovranità dei dati e l'accessibilità incidono sulla scelta degli strumenti. Standard aperti e portabilità sono preziosi perché i contratti sono lunghi e le amministrazioni cambiano. Pianificare valutazioni di sicurezza, conservazione dei documenti e regole di divulgazione pubblica, e verificare le indicazioni correnti su hosting e acquisti (vedere l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi comprendono licenze o abbonamenti, infrastruttura, lavoro di integrazione e sui connettori, pulizia dei dati, lavoro su definizioni e catalogo, formazione, assistenza e lo sforzo ricorrente per mantenere sana la pipeline. Le opzioni di sviluppo comportano costi di ingegneria facili da sottostimare, e le opzioni di acquisto comportano canoni che crescono con la scala e il costo di abbandonare.

I ritorni derivano dallo sforzo di rendicontazione risparmiato, da risposte più rapide, da meno dispute sui numeri e da decisioni migliori grazie a dati affidabili. Costruire il caso a partire dai propri dati: ore spese ora in rapporti manuali, numero di versioni concorrenti di una stessa cifra, ritardo tra una domanda e una risposta e costi di strumenti sovrapposti. Evitare di citare cifre di analisti sui ritorni dell'analisi dei dati senza una fonte rintracciabile e pertinente al proprio contesto. Un confronto equo conta il costo pieno di ciascuna opzione su tre anni, inclusa l'uscita (vedere l'Argomento 7.5 «Costo del servizio ed economia unitaria» e l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Prima lo strumento, poi le domande.** La piattaforma arriva e nessuno sa che cosa chiederle. Scrivere prima le misure.
- **Acquistare per risolvere un problema di definizioni.** Il disaccordo sul significato persiste in qualunque strumento. Chiarire le definizioni.
- **Punteggi individuali integrati.** Tentano e distorcono. Disattivarli e stabilire prima la politica.
- **Nessuna uscita.** Storico e definizioni restano intrappolati. Provare l'esportazione e conservarne una copia.
- **La pipeline di una sola persona.** Si ferma quando quella persona se ne va. Documentarla, testarla e condividerne la responsabilità.
- **Doppio inserimento.** Le persone registrano lo stesso lavoro due volte e la qualità di entrambe le registrazioni cala. Prelevare i dati dai sistemi di registrazione.
- **Sovraingegnerizzazione iniziale.** Una piattaforma di dati arriva prima che una sola vista abbia dimostrato il proprio valore. Iniziare in piccolo.
- **Ignorare la qualità dei dati.** Grafici puliti su dati sporchi ingannano in modo più convincente. Correggere l'acquisizione alla fonte.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Fornitura di dati | Raccolta manuale; fogli di calcolo | Alcuni flussi automatizzati; script individuali | Fonti concordate alimentano un archivio condiviso tramite pipeline testate | Affidabilità, riconciliazione e aggiornamento gestiti e visibili | Pipeline federate con contratti condivisi tra team e fornitori; fonti migliorate in base al riscontro |
| Definizioni e catalogo | Nella testa delle persone | Alcune documentate | Un unico catalogo di definizioni con responsabili, versionato e rivisto | Il catalogo guida le dashboard; modifiche riviste con gli utenti | Definizioni condivise tra team e fornitori; ritirate quando non informano più le decisioni |
| Scelta e costo | Acquisti ad hoc | Strumenti sovrapposti | Criteri scritti; uscita provata; costo pieno conteggiato | Costo per team supportato e sforzo manuale gestiti | Scelte degli strumenti riviste regolarmente con gli utenti e adattate al mutare dei bisogni |

## Checklist

- [ ] Le misure concordate e le loro domande sono scritte prima di confrontare gli strumenti.
- [ ] Gli strumenti e i rapporti esistenti sono stati inventariati e provati per primi.
- [ ] La qualità dei dati nelle fonti principali è stata verificata e le lacune peggiori sono state corrette.
- [ ] I criteri di selezione sono scritti e comprendono distribuzioni, controllo degli accessi ed esportazione.
- [ ] Prima di qualunque impegno è stata condotta una prova a tempo limitato con dati reali e utenti reali.
- [ ] Le funzioni di punteggio e classifica a livello individuale sono disattivate o limitate da una politica.
- [ ] Le definizioni sono conservate in un catalogo portabile, esterno a qualunque singolo strumento.
- [ ] La pipeline ha un responsabile, controlli automatici, monitoraggio e un avviso di guasto.
- [ ] È stata provata un'esportazione di definizioni e storico.
- [ ] È stato conteggiato il costo pieno su tre anni, inclusa l'uscita.

## Prompt IA

**Scrivere i requisiti a partire dalle domande.**

```text
Ecco le domande poste dai nostri pubblici e le misure che prevediamo di
pubblicare: [incolla]. Redigi un documento di requisiti di due pagine per uno
strumento o una pipeline di metriche. Copri fonti di dati, aggiornamento,
controllo degli accessi, conservazione, distribuzioni e percentili, esportazione
e portabilità, e un elenco di requisiti indispensabili rispetto alle preferenze.
Non citare prodotti. Elenca le tue ipotesi e i punti da confermare con i team.
```

**Pianificare una prova di uno strumento.**

```text
Stiamo confrontando [opzioni] per il nostro programma di metriche. Progetta una
prova di due settimane usando tre delle nostre misure e dati reali. Indica che
cosa verificare, come assegnare un punteggio alle opzioni rispetto a criteri
scritti, chi dovrebbe partecipare, come verificare il controllo degli accessi e
l'esportazione e quali evidenze registreremo. Non dichiarare risultati su
prodotti specifici. Elenca le tue ipotesi e i rischi.
```

**Rivedere una pipeline di dati.**

```text
Ecco una descrizione di come i dati fluiscono da [fonti] alle nostre dashboard:
[incolla]. Individua i punti in cui i dati potrebbero arrivare in ritardo,
duplicarsi, essere sovrascritti o andare persi, e suggerisci controlli
automatici per ciascuno. Proponi un modo per riconciliare le cifre chiave con la
fonte. Non inventare comportamenti dei sistemi. Elenca le tue ipotesi e ciò che
non hai potuto stabilire dalla descrizione.
```

**Confrontare il costo pieno.**

```text
Aiutami a confrontare il costo pieno su tre anni di sviluppare, acquistare e
combinare strumenti per il nostro programma di metriche. Elenca le categorie di
costo per ciascuna opzione, incluse licenze, infrastruttura, integrazione,
pulizia dei dati, formazione, manutenzione e uscita. Fornisci una tabella con
spazi vuoti per le nostre cifre. Non fornire prezzi. Elenca le tue ipotesi.
```

## Skill IA

- [Agile ITIL Metrics skill](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la fonte dei dati e la salvaguardia di ciascuna misura nella stesura dei requisiti.
- [Agile ITIL Metrics maintainer skill](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che un registro delle decisioni sugli strumenti riporti definizioni, fonti dei dati e salvaguardie.

## Punti chiave

- Scrivere prima le domande e le misure e scegliere gli strumenti al loro servizio.
- Usare i sistemi di registrazione, correggere l'acquisizione dei dati alla fonte e provare la riconciliazione.
- Mantenere portabili definizioni e dati e provare l'uscita prima di impegnarsi.
- Disattivare i punteggi e le classifiche a livello individuale e stabilire la politica prima di attivare qualunque funzione.
- Gestire la pipeline come un servizio, con un responsabile, test e monitoraggio.
- Contare il costo pieno su più anni e iniziare dal percorso più sottile che risponda a domande reali.

## Riferimenti e letture di approfondimento

1. Kimball, R., and Ross, M., *The Data Warehouse Toolkit*, Wiley, 3rd edition, 2013.
2. Redman, T., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4 Foundation*, 2019.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
7. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
8. Wikipedia, [Data pipeline](https://en.wikipedia.org/wiki/Data_pipeline).
9. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
10. Wikipedia, [Data warehouse](https://en.wikipedia.org/wiki/Data_warehouse).
11. Wikipedia, [Application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface).
12. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
13. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
14. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
