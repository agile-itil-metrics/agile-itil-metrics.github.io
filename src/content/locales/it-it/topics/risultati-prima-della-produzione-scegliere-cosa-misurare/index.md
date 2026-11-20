# Risultati prima della produzione: scegliere cosa misurare

**Una buona metrica di servizio o di consegna descrive un cambiamento nella vita di un cliente o nella salute di un servizio: si scelgano le misure chiedendosi che cosa è cambiato per qualcuno, e si trattino i conteggi di attività e di produzione al più come evidenze di supporto.**

## Panoramica e motivazione

La maggior parte delle dashboard inizia da ciò che è facile contare: ticket chiusi, modifiche rilasciate, storie completate, chiamate risposte. Sono già dotati di timestamp in uno strumento e rientrano nel controllo del team. Nessuno di questi dice se qualcuno stia meglio.

Quattro parole aiutano a fare chiarezza. L'**attività** è lo sforzo speso: ore lavorate, riunioni tenute, chiamate effettuate. La **produzione** (output) è ciò che il lavoro ha prodotto: un rilascio, un ticket risolto, un articolo pubblicato. Il **risultato** (outcome) è il cambiamento che quella produzione ha reso possibile per qualcuno: un cliente porta a termine un compito in metà tempo, una clinica apre nei tempi previsti, un problema ricorrente smette di ripresentarsi. L'**impatto** è l'effetto di più lungo periodo sugli obiettivi dell'organizzazione, come clienti fidelizzati o minor costo di erogazione. In ITIL 4 (l'edizione del 2019 del framework pubblicato da AXELOS, oggi di proprietà di PeopleCert), una produzione è un deliverable tangibile o intangibile di un'attività, e un risultato è un esito per uno stakeholder reso possibile da una o più produzioni.

[ITIL](https://en.wikipedia.org/wiki/ITIL) aggiunge una seconda idea che funziona come criterio per qualsiasi metrica: il valore è [co-creato](https://en.wikipedia.org/wiki/Co-creation) dal fornitore del servizio e dal consumatore del servizio, non consegnato dall'uno all'altro. Ciò segue il pensiero alla base della [logica dominante del servizio](https://en.wikipedia.org/wiki/Service-dominant_logic), la visione di marketing secondo cui il valore nasce nell'uso, quando il cliente applica le capacità di un fornitore ai propri obiettivi. Una metrica misurata interamente dal lato del fornitore non può dimostrare il valore. Un team può chiudere ogni ticket e rilasciare ogni release nei tempi, mentre gli utenti non trovano il proprio lavoro più semplice.

La visione agile arriva allo stesso punto per un'altra strada. I principi alla base del Manifesto per lo [sviluppo agile del software](https://en.wikipedia.org/wiki/Agile_software_development) affermano che il software funzionante è la principale misura di avanzamento e che la semplicità, l'arte di massimizzare la quantità di lavoro non svolto, è essenziale. Nessuno dei due premia un mucchio più grande di produzione. Entrambi indicano la consegna di qualcosa che funziona per i suoi utenti e il non costruire ciò di cui nessuno ha bisogno.

Le metriche di produzione e di attività non sono sbagliate. Gestiscono flusso, capacità e costi, e gli argomenti successivi le usano ampiamente (vedi Argomento 2.1 «Misure del flusso»). L'errore è lasciare che prendano il posto del valore. Una [metrica di vanità](https://en.wikipedia.org/wiki/Vanity_metric) è un numero facile da riportare e che quasi sempre sale: utenti registrati totali, ticket gestiti cumulativi, funzionalità rilasciate finora. Fa apparire occupato un team e non dice a nessuno che cosa fare dopo. Il test: questo numero potrebbe salire mentre la situazione del cliente peggiora?

Le metriche di risultato sono più difficili. Si muovono lentamente, dipendono da fattori fuori dal controllo del team e sono rumorose. Una modifica al flusso di reimpostazione della password può impiegare settimane a mostrarsi nel volume dei contatti, su cui incide anche una campagna di marketing. La risposta è scegliere i risultati con cura, abbinarli alle misure di produzione con cui il team si orienta giorno per giorno ed essere onesti su quanta parte del movimento il team può rivendicare.

Un **indicatore anticipatore** (leading indicator) è una misura che si muove prima del risultato a cui si tiene e su cui si può influire per tempo, come la quota di nuovi servizi con un runbook di supporto collaudato. Un **indicatore posticipato** (lagging indicator) riporta il risultato a cose fatte, come il numero di incidenti maggiori o l'abbandono dei clienti. Gli economisti usano lo stesso abbinamento, classificando un [indicatore economico](https://en.wikipedia.org/wiki/Economic_indicator) come anticipatore, coincidente o posticipato. I team hanno bisogno di entrambi: gli indicatori posticipati dicono se si aveva ragione, e gli indicatori anticipatori danno qualcosa su cui agire mentre c'è ancora tempo. Un indicatore anticipatore è solo un'ipotesi finché non si è verificato, nell'arco di più periodi, che si muova davvero prima del risultato.

Le misure di risultato sono un rimedio parziale alla manipolazione (vedi Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»). Una misura vicina a ciò che i clienti sperimentano è più difficile da migliorare senza aiutarli, e la distanza dal risultato è dove vive la manipolazione. I framework che aiutano nella scelta sono trattati a parte (vedi Argomento 1.7 «Framework di misurazione»).

## Principi chiave

- **Partire dal risultato e procedere a ritroso.** Si nomini il cambiamento che si vuole per un cliente, un servizio o l'organizzazione, poi ci si chieda quale evidenza lo mostrerebbe, poi quali segnali anticipatori comparirebbero prima.
- **Il valore è co-creato, quindi si includa il lato del consumatore.** Almeno una misura di ogni insieme dovrebbe provenire dalle persone che usano il servizio: il loro successo, il loro sforzo o la loro esperienza, anziché i soli record del fornitore.
- **Mantenere visibile la catena.** Si mostrino attività, produzione, risultato e impatto come una catena. I team si orientano su produzioni e indicatori anticipatori, e si giudicano sui risultati.
- **Abbinare, mai sostituire.** Una misura di risultato spiega perché conta una misura di produzione, e una misura di produzione spiega che cosa fare riguardo a una misura di risultato. Nessuna funziona da sola.
- **Preferire misure che possono scendere oltre che salire.** Un numero che cresce soltanto è un conteggio, non un segnale.
- **Trattare gli indicatori anticipatori come ipotesi.** Si verifichi che predicano il risultato e li si abbandoni quando non lo fanno.
- **Essere onesti sull'attribuzione.** I risultati hanno molte cause. Si dica su che cosa il team influisce e che cosa si limita a osservare.

## Definizioni delle metriche

Le cinque metriche seguenti sono scelte per spostare un insieme di misure verso i risultati. Sono esempi della forma da usare, e gli argomenti successivi definiscono le misure di servizio e di consegna che le riempiono. Le soglie illustrative di questo argomento non sono benchmark.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Copertura dei risultati | Quota delle metriche rendicontate che sono collegate nel registro delle metriche a un risultato scritto per un cliente o un servizio nominati | metriche con un collegamento scritto a un risultato / metriche rendicontate nel periodo. Conta solo le metriche mostrate in un rendiconto regolare; esclude le misure della vista di lavoro tenute da un singolo team | percentuale | Registro delle metriche (vedi Argomento 1.4 «Governance e responsabilità delle metriche») | Misurazione e rendicontazione; miglioramento continuo | Obiettivo di prodotto e obiettivo di consegna | Trimestrale |
| Tasso di adozione delle funzionalità | Quota degli utenti idonei che usano una capacità nuova o modificata entro una finestra dichiarata dopo il rilascio | utenti idonei distinti che hanno usato la capacità entro 30 giorni dal rilascio / utenti idonei distinti in quel periodo. Il cronometro parte alla disponibilità generale; esclude gli account di test interni e gli utenti che non potevano raggiungere la capacità | percentuale | Analisi di prodotto, log di utilizzo del catalogo dei servizi | Progettazione del servizio; gestione dei rilasci | Feedback delle revisioni con gli stakeholder; misura del risultato di prodotto | Mensile per 3 mesi dopo il rilascio, poi trimestrale |
| Tasso di contatti ripetuti | Quota dei contatti di un utente sullo stesso servizio entro una finestra dichiarata dopo la chiusura di un contatto precedente | nuovi contatti dello stesso utente sullo stesso servizio entro 14 giorni da un contatto chiuso / contatti chiusi nel periodo. Il cronometro parte alla chiusura; esclude i contatti aperti come seguiti pianificati | percentuale | Storico di contatti e ticket dello strumento ITSM | Service desk; gestione degli incidenti | Difetti sfuggiti; definition of done | Mensile |
| Tasso di validazione degli indicatori anticipatori | Quota degli indicatori anticipatori in uso il cui movimento ha preceduto il movimento dell'indicatore posticipato collegato nel periodo di revisione | indicatori anticipatori con un anticipo confermato sul proprio indicatore posticipato / indicatori anticipatori in uso. Giudicato dal team in una revisione documentata, su almeno quattro periodi di dati; esclude gli indicatori con meno di quattro periodi | percentuale | Registro delle metriche e storico degli andamenti | Miglioramento continuo | Azioni di retrospettiva sugli esperimenti | Due volte l'anno |
| Tasso di completamento delle revisioni dei benefici | Quota delle modifiche o dei miglioramenti finanziati il cui risultato atteso è stato verificato rispetto alla propria misura dopo il ritardo concordato | modifiche con una revisione dei risultati completata entro 90 giorni dalla data di revisione pianificata / modifiche la cui data di revisione cadeva nel periodo. Esclude le modifiche ritirate prima del rilascio | percentuale | Record delle modifiche, registro dei miglioramenti, note di revisione | Miglioramento continuo; abilitazione delle modifiche | Revisione con gli stakeholder; revisione dell'incremento di prodotto | Trimestrale |

La copertura dei risultati e il tasso di completamento delle revisioni dei benefici misurano la pratica di misurazione e sono facili da soddisfare con la burocrazia. Il tasso di adozione delle funzionalità e il tasso di contatti ripetuti stanno più vicini al cliente e sono quelli con più probabilità di cambiare una decisione.

## Raccomandazioni

### Partire dai risultati

**1. Scrivere il risultato come una frase su una persona o su un servizio.** «Il personale può reimpostare da sé la propria password senza chiamare il service desk» è un risultato. «Rilasciare il nuovo portale delle identità» è una produzione. Si ponga la frase in cima alla voce della metrica nel registro, poi si scelga la misura. Se non si riesce a scrivere la frase, non si è pronti a scegliere un numero.

**2. Disegnare la catena dall'attività all'impatto.** Per ogni obiettivo, si schizzino quattro riquadri: che cosa fa il team, che cosa produce, che cosa cambia per l'utente e che cosa questo cambia per l'organizzazione. Si collochi ciascuna metrica candidata in un riquadro. Un insieme pieno a sinistra e vuoto a destra è il segnale per cercare evidenze di risultato.

**3. Applicare a ogni metrica il test della co-creazione di valore.** Ci si chieda: la visione del valore di chi mostra questa metrica, e la visione del consumatore compare da qualche parte nell'insieme? In termini ITIL, una relazione di servizio ha un fornitore e un consumatore, e il valore si realizza nell'uso del consumatore. Una misura del tempo di risposta dal cronometro del fornitore ha bisogno di una misura compagna dal lato del consumatore, come il fatto che l'utente abbia potuto proseguire il proprio lavoro (vedi Argomento 6.2 «Experience level agreement»).

**4. Chiedere una decisione, non un rapporto.** Per ogni metrica candidata, si scriva la decisione che qualcuno prenderebbe se si muovesse. Si ritiri ogni misura senza una decisione collegata. È il filtro più rapido contro le metriche di vanità e impedisce che una dashboard cresca per inerzia.

### Abbinare produzioni e risultati

**5. Scegliere una misura di risultato per ogni misura di produzione principale.** Se si rendicontano i rilasci, li si abbini a una misura di ciò che i rilasci hanno cambiato per il servizio, come i fallimenti delle modifiche o gli incidenti visibili agli utenti (vedi Argomento 2.8 «Metriche DORA»). Se si rendicontano i ticket risolti, li si abbini ai contatti ripetuti. La coppia dovrebbe stare sulla stessa pagina. Un team che vede solo la produzione ottimizzerà per la produzione.

**6. Scegliere misure di risultato su cui il team può influire, e nominare quelle che si limita a osservare.** Un team può influire sui contatti ripetuti del proprio servizio e sull'adozione delle proprie funzionalità. Può solo osservare il fatturato dell'azienda. Entrambi appartengono al quadro, ma gli obiettivi e il lavoro di miglioramento si legano alle misure su cui si influisce. Nominare la differenza previene l'attribuzione di colpe per movimenti che il team non avrebbe potuto causare.

**7. Usare i surrogati apertamente.** Molti risultati non possono essere misurati direttamente. Si scelga un surrogato (proxy), si dica che lo è e si dica che cosa trascura. Il tasso di contatti ripetuti è un surrogato di «il problema è stato davvero risolto», e un breve sondaggio o la lettura dei commenti aperti può verificare che dica ancora la verità (vedi Argomento 6.1 «Metriche di soddisfazione del cliente»).

### Costruire coppie anticipatore-posticipato

**8. Abbinare ogni indicatore posticipato ad almeno un indicatore anticipatore su cui si possa agire.** Gli incidenti maggiori sono un indicatore posticipato, e la quota di servizi con runbook di ripristino collaudati può anticiparli. L'indicatore anticipatore dà al team qualcosa da fare questo mese. Si scelgano indicatori anticipatori in cui si crede per una ragione che si sa scrivere, poi si metta alla prova la convinzione.

**9. Validare gli indicatori anticipatori con uno sguardo a ritroso.** Due volte l'anno, si rappresenti ciascun indicatore anticipatore rispetto al suo partner posticipato su almeno quattro periodi e ci si chieda se il movimento sia venuto per primo. Dove la relazione è debole, si cambi o si abbandoni l'indicatore anticipatore.

**10. Usare gli obiettivi di livello di servizio dove il risultato ha una misura chiara visibile all'utente.** Un indicatore di livello di servizio (SLI) ben scelto è un segnale anticipatore della soddisfazione degli utenti, e un obiettivo di livello di servizio (SLO) stabilisce quanto buono debba essere (vedi Argomento 5.2 «SLI, SLO e budget di errore»). Funzionano meglio quando l'indicatore è scelto dal punto di vista dell'utente, non da quello della macchina.

### Mantenere onesta la scelta

**11. Chiudere il ciclo con revisioni dei risultati.** Quando una modifica o un miglioramento viene finanziato, si registrino il risultato che deve produrre, la misura e la data in cui qualcuno controllerà. Si tenga la revisione anche se la risposta è scomoda. Senza revisioni, il linguaggio dei risultati è decorazione (vedi Argomento 6.5 «Realizzazione del valore e risultati di business»).

**12. Tenere le misure di produzione nella vista di lavoro e dire a che cosa servono.** Le misure di flusso, di capacità e di costo sono gli strumenti del team, non la sua scheda di valutazione. Il cycle time dice dove il lavoro attende (vedi Argomento 2.2 «Lead time, cycle time ed efficienza del flusso»). Riportate verso l'alto senza un risultato accanto, invitano alla manipolazione.

## Vettori di manipolazione e protezioni

Muoversi verso i risultati non elimina la manipolazione. Ne cambia la forma: i risultati possono essere ridefiniti, i surrogati possono essere pilotati e le revisioni possono essere saltate.

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Copertura dei risultati | Scrivere una frase di risultato vaga («migliorare il servizio») per ogni metrica, così che il collegamento esista sulla carta | Campionare il registro: una frase deve nominare una persona o un servizio e un cambiamento; verificare che sia stata presa una decisione a causa della misura |
| Tasso di adozione delle funzionalità | Contare come adozione un primo uso forzato o automatico; restringere il gruppo di utenti idonei; rendere la capacità predefinita così che sia «usata» senza essere scelta | Completamento dei compiti o soddisfazione tra gli utenti della capacità; persistenza dell'uso dopo 30 e 90 giorni; lettura dei commenti aperti |
| Tasso di contatti ripetuti | Dire agli utenti di aprire una nuova richiesta tramite un altro canale; chiudere il contatto come duplicato di uno non correlato; allungare la chiusura per evitare il ricontatto entro la finestra | Contatti per canale per lo stesso servizio; revisione a campione delle note di chiusura; tasso di «problema risolto» riferito dagli utenti |
| Tasso di validazione degli indicatori anticipatori | Dichiarare validi gli indicatori anticipatori dopo uno sguardo informale; scegliere indicatori che si muovono in modo banale insieme al risultato | Registrazione scritta della revisione con i dati rappresentati; invitare qualcuno esterno al team a contestare un risultato per ciclo |
| Tasso di completamento delle revisioni dei benefici | Tenere una revisione solo di nome, o fissare a posteriori il risultato atteso così che sia sempre raggiunto | Confrontare il risultato nella revisione con la dichiarazione fatta quando la modifica è stata finanziata; monitorare la quota di revisioni che hanno portato a un cambio di piano |

Una lettura sana mostra misure di risultato che talvolta deludono, revisioni che talvolta pongono fine a una modifica e indicatori anticipatori che talvolta vengono abbandonati. Un insieme in cui ogni risultato è raggiunto e ogni indicatore anticipatore è confermato è con ogni probabilità stato tarato perché lo fosse.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Misure di produzione e di attività | Rapide, economiche e sotto il controllo del team; utili per le decisioni su flusso e capacità | Facili da gonfiare; non dicono se qualcuno ne abbia tratto beneficio |
| Misure di risultato | Restano vicine a ciò che clienti e organizzazione apprezzano; più difficili da migliorare senza aiutare | Lente, rumorose e influenzate da fattori fuori dal controllo del team |
| Indicatori anticipatori | Danno un allarme precoce e qualcosa su cui agire | Possono fuorviare se il legame con il risultato è presunto anziché verificato |
| Indicatori posticipati | Riportano ciò che è realmente accaduto | Arrivano troppo tardi per cambiare il risultato di questo periodo |
| Surrogati dei risultati | Rendono visibili risultati difficili da misurare | Possono allontanarsi da ciò che rappresentano e invitano alla surrogazione |
| Un piccolo insieme guidato dai risultati | Facile da ricordare e da discutere; concentra lo sforzo | Può non cogliere un problema esterno ai risultati scelti |
| Un ampio insieme bilanciato | Copre più parti del servizio | Diluisce l'attenzione; ciascuna misura riceve meno scrutinio |

Si mantenga un piccolo numero di misure di risultato che l'intero gruppo sappia recitare, si sostenga ciascuna con le misure di produzione e anticipatrici che la spiegano, e si riveda l'insieme quando cambia la strategia. Gli approcci bilanciati associati alla [balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard) e agli [obiettivi e risultati chiave](https://en.wikipedia.org/wiki/Objectives_and_key_results) cercano entrambi di collegare il lavoro quotidiano ai risultati che contano. Falliscono allo stesso modo quando i risultati chiave diventano un elenco di produzioni con una percentuale accanto.

## Domande da discutere con il team

**1. Per le nostre cinque metriche più in vista, quali possono salire mentre i nostri clienti stanno peggio?**
Si scrivano le cinque su una lavagna e si ponga la domanda per ciascuna. Un conteggio di ticket chiusi, per esempio, può salire mentre salgono anche i contatti ripetuti. Il facilitatore dovrebbe annotare i casi in cui la risposta è sì, perché quelle sono le metriche di vanità. Si concluda chiedendo quale misura di risultato starebbe accanto a ciascuna.

**2. Che aspetto ha una buona settimana per un cliente di questo servizio, nelle sue parole?**
Si chieda a chi parla con i clienti, evitando il vocabolario del team. Le risposte diventano frasi di risultato e rivelano spesso cose che nessuno misura, come il non dover spiegare un problema due volte. Si raccolgano tre frasi e ci si chieda quali si possano misurare, anche per surrogato.

**3. Quali dei nostri indicatori anticipatori abbiamo mai verificato rispetto al risultato che dovrebbero predire?**
Si scelga un indicatore e lo si rappresenti rispetto al suo partner posticipato per gli ultimi periodi. Ci si chieda che cosa si vede e quanto si è sicuri. Se la relazione è debole, si discuta con che cosa sostituirlo. Si tratti un indicatore abbandonato come un normale esito dell'apprendimento, non come un fallimento.

**4. Dove il nostro team si attribuisce il merito di un risultato che si limita a osservare?**
Si guardino le metriche nei rapporti alla direzione. Quali dipendono da fattori fuori dal controllo del team, come la stagionalità, una campagna o un fornitore? Si concordi un modo semplice per dichiarare su che cosa il team influisce e che cosa osserva. Ciò prepara il team al giorno in cui un risultato si muove per ragioni che non ha causato.

**5. Che cosa abbiamo rilasciato o cambiato negli ultimi due trimestri, e qualcuno ha verificato se ha funzionato?**
Si elenchino le modifiche su una lavagna e si contrassegnino quelle con un record di revisione. Per le altre, ci si chieda quale risultato era atteso e come lo si potrebbe scoprire ora. Si resista alla caccia al colpevole. Lo scopo è avviare l'abitudine, anche se le prime revisioni sono in ritardo.

**6. Quali misure di produzione dovrebbero tornare nella nostra vista di lavoro?**
Alcune misure sono utili al team e fuorvianti in un rapporto. Ci si chieda quali siano quali, e di che cosa avrebbe bisogno ciascuna accanto per restare in un rapporto alla direzione. Si concordi una misura da spostare in questo trimestre. Spostare una misura è un segno di maturità, non una ritirata dalla trasparenza.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna sono tentati dalla produzione perché i loro strumenti la riportano per impostazione predefinita. Il rimedio è rendere l'adozione e le evidenze di risultato parte della definition of done e della revisione con gli stakeholder. Una funzionalità che nessuno usa è una lezione, e scoprirlo presto è un vantaggio della pratica agile. I team tengono le misure di flusso nella propria vista di lavoro e le abbinano a misure di adozione e di fallimento (vedi Argomento 2.5 «Metriche di previsione e pianificazione della consegna»).

### Team di servizio e operations

I team di servizio sono misurati sulla gestione: chiamate risposte, ticket chiusi, tempo di risoluzione. Queste misure contano per la pianificazione e i costi, e dicono poco sul fatto che il problema dell'utente sia scomparso. I team di operazioni dovrebbero aggiungere i contatti ripetuti, la ricorrenza della stessa causa e la risoluzione riferita dagli utenti accanto alle misure di velocità, e trattare con sospetto un conteggio crescente di ticket facili (vedi Argomento 3.1 «Metriche del service desk»). Indicatori anticipatori come l'uso degli articoli della conoscenza e i runbook collaudati danno al team qualcosa su cui agire tra un incidente e l'altro.

### Leadership e governance

Ciò che i dirigenti chiedono di vedere insegna all'organizzazione che cosa conta. Si chiedano i risultati, si accetti che siano più lenti e rumorosi e si finanzino le revisioni che li verificano. Gli organi di governance dovrebbero cercare un insieme breve e stabile di misure di risultato, ciascuna con un responsabile dichiarato e un registro delle decisioni che ha orientato (vedi Argomento 1.4 «Governance e responsabilità delle metriche»). Un dirigente che chiede «che cosa abbiamo imparato?» ottiene dati migliori di uno che chiede «perché questo è rosso?»

### Clienti e utenti

I clienti sperimentano direttamente i risultati e raramente vedono i conteggi di produzione. Sono la prova finale dell'insieme: il servizio permette loro di proseguire con ciò per cui sono venuti? Brevi sondaggi, commenti aperti e osservazione di compiti reali sono evidenze migliori di qualsiasi misura dal lato del fornitore. I clienti hanno anche un ruolo nella co-creazione del valore, il che significa che quanto sono informati, messi in condizione di agire e ascoltati influisce sui risultati (vedi Argomento 6.3 «Metriche di adozione del servizio e del catalogo»).

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni gestisce un team di piattaforma interno che offre a circa 40 team di prodotto un servizio self-service di provisioning degli ambienti, supportato da un piccolo service desk. Tutti i numeri di questo esempio sono illustrativi.

Il rapporto mensile mostra 310 richieste evase (in crescita rispetto a 240), un tempo mediano di evasione di 6 ore e 12 funzionalità rilasciate nel trimestre. La direzione è soddisfatta. Il responsabile della piattaforma nota che sono aumentati anche i contatti al desk sul provisioning, e chiede al team di rappresentare le produzioni rispetto al risultato sperato: i team di prodotto ottengono un ambiente senza attendere né chiedere aiuto.

L'esercizio della catena mostra che il team aveva misurato attività e produzione e nessun risultato. Ne aggiungono tre. Il primo è il tasso di contatti ripetuti: il 22 per cento dei contatti sul provisioning è seguito da un altro contatto sullo stesso servizio entro 14 giorni. Il secondo è il tasso di adozione delle funzionalità per le tre più recenti, che si attesta al 9 per cento, al 14 per cento e al 61 per cento dei team idonei dopo 30 giorni. Il terzo, un indicatore anticipatore, è la quota di richieste che si completano senza un passaggio umano, attualmente il 48 per cento. Ipotizzano che questa dovrebbe portare verso il basso il tasso di contatti ripetuti.

Decidono di sospendere due funzionalità pianificate simili alle due a bassa adozione e di dedicare il trimestre alla causa più comune di contatti ripetuti, un messaggio di errore poco chiaro quando si supera una quota. Registrano il risultato atteso, un tasso di contatti ripetuti inferiore al 15 per cento, e fissano una data di revisione a 90 giorni.

Il rischio di manipolazione compare nel secondo mese. Il tasso di contatti ripetuti scende all'11 per cento, il che sembra meraviglioso. Un campione di 25 contatti chiusi mostra che il service desk aveva iniziato a chiedere agli utenti di usare un canale di chat per le domande di approfondimento, e il canale di chat non è conteggiato nello strumento ITSM. Il team aggiunge al rapporto i contatti per canale, porta le trascrizioni della chat nel campione e scopre che il tasso combinato è del 17 per cento. È un miglioramento reale, inferiore alla prima lettura. Nella revisione il responsabile riporta il 17 per cento, nota che l'indicatore anticipatore è salito dal 48 al 57 per cento di pari passo e registra che l'ipotesi ha retto per due dei quattro periodi necessari per dichiararla validata.

## Lente di settore

**Startup.** I risultati sono a portata di mano: i fondatori possono parlare con i clienti e vedere se restano. Il rischio è misurare solo la crescita degli utenti e delle funzionalità, che sono metriche di vanità finché non sono visibili la fidelizzazione e il successo nei compiti. Si scelga una misura di risultato che i clienti riconoscerebbero e la si controlli ogni settimana.

**Piccola impresa.** I numeri sono troppo piccoli per la statistica, perciò si preferiscano conversazioni dirette, una manciata di casi monitorati e un breve elenco di surrogati. Si diffidi delle dashboard dei fornitori che riportano la propria attività come se fosse il proprio risultato.

**Grande impresa.** La scala invita a rendicontare la produzione, perché le produzioni sono confrontabili tra molti team e i risultati no. Si resista a imporre un'unica definizione di risultato a servizi dissimili. Si concordi un piccolo insieme di frasi di risultato condivise, si lasci che ciascun servizio scelga le proprie misure e si mantenga aggiornato il registro.

**Pubblica amministrazione e settore pubblico.** I doveri di legge, le regole di finanziamento e i livelli di servizio fissano in anticipo alcune misure, spesso produzioni come le pratiche trattate. Le si rispetti, e si aggiungano accanto misure di risultato per cittadini e personale, come il fatto che una persona abbia ottenuto l'aiuto per cui era venuta. La rendicontazione pubblica rende i dati onesti sui risultati più preziosi e più delicati, perciò si concordi in anticipo come saranno spiegate le cifre corrette (vedi Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

Il costo dello spostamento verso i risultati è soprattutto sforzo e pazienza: scrivere frasi di risultato, aggiungere alcune misure come un breve sondaggio o un evento di adozione, e tenere revisioni dei risultati. Il costo degli strumenti è modesto, poiché la maggior parte dei surrogati può essere costruita con dati già raccolti. Il costo maggiore è il ritardo, perché i dati di risultato arrivano lentamente e i dirigenti devono attenderli.

Il ritorno viene da scelte migliori su dove spendere. Il lavoro che nessuno usa è costoso, così come migliorare una misura di gestione mentre la causa sottostante dei contatti ripetuti rimane. L'andamento da attendersi è meno funzionalità costruite e lasciate inutilizzate, più attenzione sulle cause ricorrenti e una storia più solida per ottenere finanziamenti. Non si prometta una percentuale. Si misurino le proprie baseline, come l'adozione dei rilasci recenti e i contatti ripetuti, e si confronti dopo alcuni trimestri (vedi Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Contare ciò che è facile.** I conteggi di ticket e di rilasci sono in ogni strumento, il che li rende l'impostazione predefinita. Si aggiunga almeno una misura di risultato per ogni servizio prima di aggiungere un altro conteggio di produzione.
- **Teatro dei risultati.** Scrivere una frase di risultato per ogni metrica senza mai verificarla. Si riveda un campione del registro e ci si chieda quale decisione ciascuna misura abbia orientato.
- **Indicatori anticipatori non verificati.** Trattare un segnale plausibile come una prova. Lo si rappresenti rispetto al risultato posticipato almeno due volte l'anno e si abbandonino quelli che non anticipano.
- **Risultati come obiettivi personali.** Assegnare una misura di risultato a una sola persona invita al comportamento descritto nell'argomento 1.2. Si leghino i risultati a team e servizi.
- **Misurare solo il lato del fornitore.** Un insieme fatto di cronometri e conteggi interni perderà ciò che i clienti percepiscono. Si includa una misura dal lato del consumatore per ogni servizio.
- **Non rivedere mai.** Finanziare le modifiche sulla base di benefici promessi e non verificarli mai. Si metta una data di revisione sul record della modifica quando viene approvata.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Scelta delle misure | Conteggi disponibili negli strumenti | Alcuni team scrivono frasi di risultato | Ogni metrica rendicontata ha un risultato scritto e una decisione che orienta | Insiemi di risultato e di produzione rivisti insieme ogni trimestre | Frasi di risultato allineate tra team, fornitori e clienti e riviste quando cambia la strategia |
| Indicatori anticipatori e posticipati | Solo risultati posticipati, riportati in ritardo | Pochi indicatori anticipatori scelti per intuizione | Indicatori anticipatori e posticipati abbinati e registrati nel registro | Indicatori anticipatori validati rispetto ai risultati due volte l'anno | Indicatori condivisi con fornitori e clienti; l'insieme evolve con le evidenze |
| Revisioni dei risultati | Nessuna verifica del funzionamento delle modifiche | Revisioni occasionali dopo grandi modifiche | Data di revisione registrata per ogni modifica finanziata | Revisioni completate, con risultati che alimentano il piano successivo | Revisioni di routine, tra team, con il contributo dei clienti |
| Evidenze dal lato del consumatore | Aneddoti | Sondaggio per alcuni servizi | Una misura dal lato del consumatore per ogni servizio | Evidenze dei consumatori analizzate nel tempo e lette insieme ai dati operativi | I clienti aiutano a definire e interpretare le misure di risultato |

## Checklist

- [ ] Ogni servizio ha almeno una frase di risultato che nomina una persona o un servizio e un cambiamento.
- [ ] Ogni metrica rendicontata è collocata sulla catena dall'attività all'impatto.
- [ ] Ogni metrica ha una decisione nominata che orienta; quelle che non ne hanno sono ritirate.
- [ ] Ogni misura di produzione in un rapporto ha accanto una misura di risultato.
- [ ] Ogni servizio ha almeno una misura dal lato del consumatore.
- [ ] Ogni indicatore posticipato ha un indicatore anticipatore, con una ragione scritta del collegamento.
- [ ] Gli indicatori anticipatori sono verificati rispetto ai risultati almeno due volte l'anno.
- [ ] I surrogati sono etichettati come tali, con ciò che trascurano.
- [ ] Ogni modifica finanziata ha un risultato atteso, una misura e una data di revisione.
- [ ] Le misure di risultato si legano a team e servizi, mai a singole persone.

## Prompt IA

**Trasformare una metrica di produzione in un insieme guidato dai risultati.**

```text
Il nostro team è [nome del team], che fornisce [servizio o prodotto] a [clienti
o utenti]. Attualmente rendicontiamo [elenco di metriche di produzione o di
attività]. Vogliamo spostarci verso i risultati. Per ciascuna metrica, suggerisci
una frase di risultato su un cliente o un servizio che potrebbe sostenere e
proponi una misura di risultato e un indicatore anticipatore che potremmo
considerare. Per ogni suggerimento, indica che cosa la misura trascurerebbe e
come potrebbe essere manipolata. Non inventare valori di riferimento né fonti.
Elenca le tue ipotesi e i fatti che ti servono da me.
```

**Verificare se un indicatore anticipatore è credibile.**

```text
Usiamo [indicatore anticipatore] come indicatore anticipatore per [misura di
risultato posticipata]. Ecco [numero] periodi di dati per entrambi, incollati di
seguito, con note su qualsiasi cosa sia cambiata in quel periodo: [dati e note].
Descrivi se l'indicatore anticipatore sembra muoversi prima di quello posticipato
e quali altre spiegazioni sono coerenti con i dati. Non sostenere la causalità.
Elenca le tue ipotesi, i limiti di una quantità così ridotta di dati e quali dati
aggiuntivi sarebbero utili.
```

**Redigere una revisione dei risultati per una modifica recente.**

```text
Abbiamo apportato questa modifica: [descrizione], approvata il [data], con il
risultato atteso [frase di risultato] e la misura [misura]. Dati attuali: [dati].
Redigi l'agenda di una revisione dei risultati e una breve struttura di sintesi
che confronti il risultato atteso con ciò che osserviamo, separi ciò su cui il
team ha influito da ciò che si è limitato a osservare ed elenchi domande per gli
utenti. Non giudicare il successo oltre ciò che i dati sostengono. Elenca le tue
ipotesi e le eventuali lacune nei dati.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare l'argomento e la misura di risultato compagna per una metrica di produzione che si sta per rendicontare.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che un nuovo argomento di metrica abbini le proprie misure di produzione a risultati e salvaguardie.

## Punti chiave

- Attività, produzione, risultato e impatto sono cose diverse, e una dashboard delle prime due non può mostrare il valore.
- In ITIL il valore è co-creato con il consumatore, perciò ogni insieme ha bisogno di una misura dal lato del consumatore.
- Si abbinino le produzioni ai risultati, e gli indicatori posticipati a quelli anticipatori che si sono verificati.
- Si sia chiari su ciò su cui il team influisce e su ciò che si limita a osservare.
- Si rivedano le modifiche finanziate rispetto ai risultati attesi e si lasci che gli esiti cambino il piano.
- Le misure di risultato riducono la manipolazione senza porvi fine, perciò ciascuna richiede ancora una salvaguardia.

## Riferimenti e letture di approfondimento

1. Seiden, J., *Outcomes Over Output: Why Customer Behavior Is the Key Metric for Business Success*, Sense & Respond Press, 2019.
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
3. Vargo, S. L., and Lusch, R. F., "Evolving to a New Dominant Logic for Marketing," *Journal of Marketing*, 68(1), 2004.
4. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January to February 1992.
5. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
9. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Co-creation](https://en.wikipedia.org/wiki/Co-creation).
12. Wikipedia, [Service-dominant logic](https://en.wikipedia.org/wiki/Service-dominant_logic).
13. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
14. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
15. Wikipedia, [Economic indicator](https://en.wikipedia.org/wiki/Economic_indicator).
16. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
17. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
