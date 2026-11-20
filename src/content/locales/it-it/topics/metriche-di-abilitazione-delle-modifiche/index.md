# Metriche di abilitazione delle modifiche

**Le metriche di abilitazione delle modifiche mostrano se la Sua organizzazione lascia fluire in modo sicuro e rapido le modifiche benefiche: occorre dunque misurare come le modifiche vengono classificate, quanto attendono una decisione e quanta parte di tale decisione la pipeline prende in modo automatico, abbinando ogni misura di velocità a una visione del rischio.**

## Panoramica e motivazione

Ogni servizio cambia. I team aggiungono funzionalità, applicano patch alle librerie, ruotano i certificati, ridimensionano i database e dismettono vecchi componenti. Nel framework [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la pratica che governa tutto questo si chiama abilitazione delle modifiche (change enablement), e il suo scopo dichiarato è massimizzare il numero di modifiche riuscite a servizi e prodotti, assicurando che i rischi siano valutati correttamente, che le modifiche siano autorizzate e che il calendario delle modifiche sia gestito. Le edizioni precedenti di ITIL chiamavano la pratica [gestione delle modifiche](https://en.wikipedia.org/wiki/Change_management_(ITSM)) (change management), e molte organizzazioni usano ancora questo nome. Il nome più recente segnala un cambiamento di accento: la pratica esiste per abilitare le buone modifiche, non per trattenerle.

Una **modifica** in ITIL 4 è l'aggiunta, la variazione o la rimozione di qualsiasi elemento che possa avere un effetto diretto o indiretto sui servizi. È un ambito più ampio di una distribuzione di codice. Comprende modifiche alla configurazione, aggiornamenti dell'infrastruttura, cambi di accesso, azioni dei fornitori e documentazione su cui gli operatori fanno affidamento. Un team agile di solito vede una modifica come una pull request che viene rilasciata. Un team di operations del servizio la vede come una voce in un calendario. Entrambe le visioni sono valide, e le metriche di questo argomento funzionano meglio quando descrivono lo stesso evento da entrambi i lati.

ITIL 4 descrive tre tipi di modifica, e le metriche di questo argomento dipendono da essi. Si verifichi la formulazione esatta nelle pubblicazioni correnti del titolare del framework; questo argomento riassume lo schema ampiamente documentato a ottobre 2026.

- Una **modifica standard** è a basso rischio e ben compresa. Segue una procedura documentata ed è preautorizzata, quindi non richiede un'approvazione caso per caso.
- Una **modifica normale** richiede valutazione e autorizzazione prima di procedere. La profondità della valutazione scala con il rischio e con l'impatto.
- Una **modifica d'emergenza** deve avvenire con urgenza, spesso per ripristinare il servizio o chiudere una vulnerabilità grave. Segue un percorso accelerato con una revisione più completa successiva.

Altri termini ricorrono più avanti. Una **autorità per le modifiche** è la persona o il gruppo che detiene il diritto di approvare una modifica di un dato tipo. Un **change advisory board (CAB)** è un gruppo che esamina le modifiche proposte e fornisce pareri o decide. Il **lead time di approvazione** è il tempo che una modifica attende una decisione di autorizzazione. Un **percentile** è un valore al di sotto del quale ricade una quota indicata di osservazioni, quindi l'85° percentile è il numero che l'85 per cento delle modifiche batte.

Perché misurare tutto questo? L'evidenza pubblicata più solida sul controllo delle modifiche proviene dal programma di ricerca di DevOps Research and Assessment (DORA). Le sue indicazioni riportano che un'approvazione esterna pesante, come un CAB o l'autorizzazione di un dirigente, è associata a prestazioni di consegna del software peggiori, e che non è stata trovata alcuna evidenza che una revisione esterna più formale riduca la quota di modifiche che falliscono. Raccomanda invece la revisione tra pari, i test automatizzati e le modifiche piccole, con un ruolo strategico per qualsiasi board centrale. Sono affermazioni di associazione in dati di sondaggio, non leggi, e le pagine DORA non forniscono dimensioni dell'effetto per tale affermazione, perciò vanno trattate come un forte motivo per guardare i propri dati e non come un verdetto su un singolo controllo. Il materiale sull'abilitazione delle modifiche nella *Agile ITIL Guide* riassume la stessa ricerca.

Le visioni agile e ITIL si incontrano sulla domanda di dove risieda il controllo. In una pipeline di consegna, gran parte della valutazione può avvenire in modo continuo: un revisore approva il codice, i test automatizzati verificano il comportamento e lo strumento di distribuzione scrive il record. Ciò soddisfa l'intento della [separazione dei compiti](https://en.wikipedia.org/wiki/Separation_of_duties) quando la revisione è registrata e l'autore non può approvare il proprio lavoro. Le metriche dicono se questo avviene davvero, oppure se la pipeline è una strada veloce che la maggior parte delle modifiche abbandona comunque per attendere in coda.

Questo argomento tratta il lato del flusso e del controllo delle modifiche: volume, composizione per tipo, tempo di attesa e automazione. Non tratta se le modifiche riescano. Il tasso di fallimento delle modifiche, la quota di emergenze e le misure di rollback e di hotfix appartengono all'Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni», e le misure DORA di throughput e di instabilità si trovano nell'Argomento 2.8 «Metriche DORA». La frequenza di distribuzione e di rilascio si trova nell'Argomento 4.5 «Metriche di rilascio e distribuzione». Il lato degli incidenti di una cattiva modifica si trova nell'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti» e nell'Argomento 3.4 «Metriche degli incidenti maggiori».

Le metriche delle modifiche attirano rapidamente la [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): un obiettivo sul tempo di approvazione invita ad approvazioni rapide e vuote, e un obiettivo sulla quota di modifiche standard invita a riclassificare come routine un lavoro rischioso (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Principi chiave

- **Adeguare il controllo al rischio.** L'obiettivo è un controllo proporzionato: le modifiche a basso rischio seguono un percorso rapido e preautorizzato, e quelle ad alto rischio ricevono un'attenzione reale. Un unico processo per tutto è lento per la maggior parte delle modifiche e superficiale per quelle pericolose.
- **Misurare l'attesa, non solo il lavoro.** Il lead time di approvazione spesso domina il tempo che una modifica finita trascorre prima di raggiungere la produzione. È invisibile a meno che qualcuno registri quando l'approvazione è stata richiesta e quando è stata concessa.
- **Contare i tipi prima di contare qualsiasi altra cosa.** Volume, velocità e rischio differiscono nettamente tra modifiche standard, normali e d'emergenza. Una singola media su tutte e tre nasconde ogni segnale utile.
- **Preferire evidenze automatizzate e registrate alle riunioni.** La revisione tra pari, i test superati e i controlli della pipeline producono un record senza uno slot in calendario. Si misuri quanta parte della decisione di approvazione la pipeline cattura.
- **Descrivere un servizio o un team, mai una persona.** Approvatori e richiedenti lavorano all'interno di un sistema. Classificare gli individui in base alle approvazioni concesse o negate insegna alle persone ad approvare tutto o niente.
- **Abbinare la velocità alla sicurezza.** Un'approvazione più rapida è una buona notizia solo se il quadro dei fallimenti è stabile. Si leggano queste metriche accanto all'Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni».
- **Scrivere le regole di classificazione.** Che una modifica sia standard, normale o d'emergenza è un giudizio che deve essere riproducibile. Si registrino i criteri e si riveda un campione ogni trimestre.

## Definizioni delle metriche

La tabella indica gli orologi e le esclusioni che il Suo team dovrebbe mettere per iscritto. I dati provengono dallo strumento delle modifiche o dei ticket, dagli eventi del controllo di versione e della pipeline e dai record di approvazione (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»).

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Corrispettivo agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume delle modifiche per tipo | Numero di modifiche completate, suddivise in standard, normali e d'emergenza | Numero di record di modifica che hanno raggiunto lo stato di implementata nel periodo, raggruppati per tipo al momento dell'approvazione; le modifiche annullate e ritirate sono escluse e riportate separatamente; si riporti per servizio, non per persona | Modifiche a settimana o al mese, per tipo | Record di modifica nello strumento ITSM, uniti agli eventi di distribuzione della pipeline | Abilitazione delle modifiche | Throughput di elementi di lavoro finiti; contenuto del rilascio per incremento | Settimanale, rivisto mensilmente |
| Quota di modifiche standard | Quota di modifiche completate che hanno seguito il percorso preautorizzato | Modifiche standard completate nel periodo / tutte le modifiche completate nel periodo; una modifica riclassificata a posteriori conta sotto il suo tipo finale e la riclassificazione è registrata | Percentuale | Record di modifica con tipo e storia delle riclassificazioni | Abilitazione delle modifiche | Lavoro di routine coperto dall'accordo di lavoro e dalla definition of done del team | Mensile |
| Lead time di approvazione | Tempo che una modifica attende una decisione di autorizzazione | L'orologio parte quando la richiesta è inviata come pronta per la valutazione e si ferma quando la decisione di autorizzazione è registrata; il tempo trascorso in attesa che il richiedente fornisca informazioni è escluso e mostrato separatamente; si riportino la mediana e l'85° percentile per le modifiche normali del periodo; le modifiche standard senza passaggio di approvazione sono escluse | Ore o giorni lavorativi | Timestamp nei record di modifica o negli eventi di approvazione della pipeline | Abilitazione delle modifiche | Tempo di attesa in un flusso di lavoro; tempo in una colonna di revisione | Settimanale, rivisto mensilmente |
| Quota di approvazioni automatizzate | Quota di decisioni di autorizzazione prese e registrate da controlli della pipeline o da una politica preautorizzata | Modifiche la cui approvazione è stata concessa da un controllo automatizzato registrato o da una revisione tra pari registrata nell'ambito di una politica scritta / tutte le modifiche completate nel periodo; l'autorizzazione manuale da parte di un board o di un responsabile conta come non automatizzata | Percentuale | Log della pipeline, record di code review e record di modifica | Abilitazione delle modifiche; gestione delle distribuzioni | Quality gate automatizzati; revisione tra pari come parte della definition of done | Mensile |
| Anzianità della coda di approvazione | Da quanto tempo le richieste in sospeso sono in attesa in questo momento | Anzianità di ogni modifica attualmente in attesa di una decisione, misurata dall'invio al momento dell'istantanea; si riportino l'elemento più vecchio e l'85° percentile della coda aperta; le approvazioni completate sono escluse | Ore o giorni lavorativi | Record di modifica con stato di approvazione aperto | Abilitazione delle modifiche | Anzianità dell'elemento di lavoro; lavoro in corso che invecchia | Istantanea giornaliera, rivista settimanalmente |
| Completezza dei record di modifica | Quota di modifiche completate il cui record sa rispondere a chi, che cosa, perché, quando e quale servizio | Modifiche con tutti i campi richiesti compilati e collegate al servizio o all'elemento di configurazione interessato / tutte le modifiche completate nel periodo; i campi richiesti sono elencati nella definizione; i record creati dopo l'implementazione della modifica sono segnalati | Percentuale | Record di modifica, collegamenti del controllo di versione, dati di configurazione | Abilitazione delle modifiche; gestione della configurazione del servizio | Tracciabilità dal commit al ticket alla distribuzione | Mensile |

Il lead time di approvazione guarda indietro alle modifiche che hanno finito di attendere e può nascondere un cumulo di richieste bloccate. L'anzianità della coda guarda ciò che sta aspettando oggi, che è l'allarme più precoce. La quota di modifiche standard non è un punteggio da massimizzare: un team che modifica la configurazione attraverso una pipeline matura avrà una quota alta, e un team su un sistema centrale legacy può ragionevolmente averla bassa.

## Raccomandazioni

### Stabilire le basi

**1. Contare le modifiche per tipo prima di misurare qualsiasi altra cosa.** Si costruisca un'unica vista delle modifiche completate, suddivise in standard, normali e d'emergenza, per servizio e per mese. Molte organizzazioni scoprono a questo punto che nessuno riesce a concordare sul totale, perché ticket, distribuzioni della pipeline e correzioni informali vengono contati separatamente. Riconciliare queste fonti è il primo risultato del programma (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»).

**2. Scrivere le regole di classificazione e campionarle.** Si indichi che cosa rende standard una modifica: una procedura documentata, un rischio noto e uno storico positivo. Si indichi che cosa spinge una modifica verso il tipo normale o d'emergenza. Si riveda ogni trimestre un campione casuale di circa venti modifiche e ci si chieda se ciascuna sia stata classificata come dicono le regole. L'errata classificazione è la principale minaccia a ogni altro numero di questo argomento.

**3. Definire per iscritto l'orologio di approvazione.** Si dica che l'orologio parte quando la richiesta è inviata come pronta e si ferma quando la decisione è registrata, e si nominino le esclusioni, come l'attesa che il richiedente risponda a una domanda. Senza questo, un team misura dalla creazione del ticket e un altro dalla riunione del board, e i numeri non possono essere confrontati nemmeno nel tempo.

### Accorciare l'attesa

**4. Riportare il lead time di approvazione come distribuzione.** Una media nasconde lo schema che conta, cioè poche modifiche che attendono molto a lungo. Si mostrino la mediana e l'85° percentile e i pochi casi più lenti per nome della modifica, non per nome della persona (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»). Se l'85° percentile è molte volte la mediana, la causa è di solito un ciclo di riunioni o un singolo approvatore sovraccarico, e la soluzione è strutturale.

**5. Osservare la coda, non solo lo storico.** Si riveda l'anzianità della coda di approvazione ogni settimana nello stesso forum che esamina le misure di flusso. L'elemento in attesa più vecchio è il miglior allarme precoce del fatto che un board è sovraccarico, che una vacanza ha bloccato una firma o che un richiedente ha smesso silenziosamente di sollecitare. Una vista della coda si adatta anche all'abitudine di guardare il lavoro che invecchia (si veda l'Argomento 2.1 «Misure del flusso»).

**6. Separare l'attesa di informazioni dall'attesa di una decisione.** Quando una richiesta torna al richiedente per maggiori dettagli, si fermi l'orologio di approvazione e se ne avvii uno diverso. Gli approvatori vengono incolpati per ritardi causati dal richiedente, e i richiedenti vengono incolpati per ritardi nella coda. Due orologi danno a ciascuna parte un quadro accurato e un miglioramento concreto, come un modello di richiesta migliore.

### Spostare il controllo nella pipeline

**7. Convertire in modifiche standard i tipi di modifica ripetibili e a basso rischio.** Si scelga la modifica normale più comune nella propria vista dei volumi, come un aggiornamento di routine di una libreria o un'azione di scalatura. Si scriva la sua procedura e i suoi controlli, si concordi il rischio con l'autorità per le modifiche e la si preautorizzi. Poi si osservino insieme la quota di modifiche standard e il lead time di approvazione delle modifiche normali: la quota dovrebbe salire e la coda accorciarsi, senza un corrispondente aumento dei fallimenti (si veda l'Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni»).

**8. Registrare l'approvazione dove si svolge il lavoro.** Si catturi la revisione tra pari nello strumento di [code review](https://en.wikipedia.org/wiki/Code_review) e si lasci che la pipeline colleghi automaticamente la revisione, il risultato dei test e la distribuzione al record di modifica. Il record è allora un sottoprodotto del lavoro anziché un compito separato. Si misuri la quota di approvazioni automatizzate e si ispezioni un campione per confermare che la revisione registrata sia sostanziale e non un timbro formale (si veda l'Argomento 2.7 «Metriche di pull request e code review»).

**9. Trattare la pipeline come il luogo in cui codificare le politiche.** Regole come «nessun accesso diretto alla produzione senza un ticket», «i test devono passare» e «l'autore non può approvare la propria modifica» possono essere imposte dagli strumenti, con la configurazione conservata come codice secondo le pratiche di [infrastruttura come codice](https://en.wikipedia.org/wiki/Infrastructure_as_code). Quando la politica è codice, si può mostrare a un auditor la regola e la sua storia anziché un verbale di riunione. Si misuri quante modifiche aggirano la pipeline, perché ogni aggiramento è un buco nel controllo.

### Mantenere onesto il controllo

**10. Mantenere un percorso rapido per le modifiche d'emergenza e rivedere come viene usato.** Le modifiche d'emergenza richiedono velocità, quindi non le si rallenti con la coda normale. Si riveda ciascuna di esse dopo il fatto e si osservi una deriva verso l'alto del volume, poiché un percorso d'emergenza più facile di quello normale diventa quello predefinito (le misure per questo si trovano nell'Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni»). Si riporti il volume delle emergenze accanto al volume delle modifiche normali nella stessa vista.

**11. Verificare la completezza dei record con regolarità.** Un record completo aiuta durante un incidente, quando chi risponde chiede che cosa sia cambiato di recente (si veda l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»). Si misuri la completezza, si riveda un campione e si trattino le lacune come un difetto del modulo o dell'integrazione, non come una mancanza del richiedente. Una [traccia di audit](https://en.wikipedia.org/wiki/Audit_trail) assemblata a posteriori a memoria è una prova debole.

**12. Rivedere il modello dell'autorità per le modifiche almeno una volta all'anno.** Si decida chi detiene i diritti di approvazione per ciascun tipo e livello di rischio e si ritirino i board che approvano tutto ciò che vedono. Si sposti un board centrale verso un ruolo strategico: coordinare tra i team, risolvere i conflitti di calendario e decidere i compromessi tra time to market e rischio. Si registrino la decisione e le evidenze nel registro delle metriche (si veda l'Argomento 1.4 «Governance e responsabilità delle metriche»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di contromisura abbinata |
| --- | --- | --- |
| Volume delle modifiche per tipo | Dividere una modifica in molti piccoli record per sembrare occupati, unire molte modifiche in una per sembrare calmi, o lasciare modifiche informali fuori dai registri | Riconciliare i conteggi con gli eventi di distribuzione della pipeline ogni mese; monitorare la quota di distribuzioni senza un record di modifica corrispondente |
| Quota di modifiche standard | Riclassificare come standard un lavoro rischioso per raggiungere un obiettivo, o scrivere procedure standard ampie che coprono qualsiasi cosa | Revisione trimestrale a campione della classificazione; tasso di fallimento delle modifiche per tipo (si veda l'Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni»); un registro delle riclassificazioni |
| Lead time di approvazione | Far partire l'orologio in ritardo, fermarlo in anticipo, metterlo in pausa per domande che non occorreva porre, o approvare senza leggere | L'85° percentile accanto alla mediana; revisione a campione delle approvazioni per verificarne la sostanza; tasso di fallimento delle modifiche per gruppo di approvatori, mai per individuo |
| Quota di approvazioni automatizzate | Aggiungere controlli automatizzati che passano sempre, o contare come garanzia una revisione tra pari senza commenti | Revisione a campione delle approvazioni automatizzate e tra pari; difetti sfuggiti e tasso di fallimento delle modifiche approvate automaticamente; numero di aggiramenti |
| Anzianità della coda di approvazione | Chiudere o ritirare le vecchie richieste in modo che la coda sembri corta, o spostarle in una nuova richiesta con un timestamp recente | Numero di richieste ritirate e ripresentate; anzianità della richiesta misurata dal primo invio |
| Completezza dei record di modifica | Riempire i campi richiesti con testo segnaposto, o creare i record dopo la modifica per soddisfare un report | Segnalare i record creati dopo l'implementazione; revisione di qualità a campione del testo libero; tasso di collegamento ai commit |

Una lettura sana mostra la composizione per tipo che si sposta lentamente verso le modifiche standard con un quadro dei fallimenti stabile, un tempo di approvazione mediano vicino all'85° percentile, una coda senza elementi molto più vecchi degli altri e un numero di aggiramenti che resta vicino a zero. Si diffidi di un salto improvviso in un singolo numero. Un dimezzamento del lead time di approvazione in un mese senza alcun cambiamento di processo di solito significa che si è spostato l'orologio, non il lavoro.

## Compromessi: vantaggi e svantaggi

| Approccio | Pro | Contro |
| --- | --- | --- |
| Modifiche standard preautorizzate | Rapide, coerenti, economiche da verificare; liberano l'autorità per le modifiche per il lavoro rischioso | Richiedono una progettazione preliminare; la classificazione può derivare; le procedure ampie nascondono il rischio |
| Revisione tra pari registrata nella pipeline | Revisione da parte di persone che conoscono il codice; produce un record automaticamente; scala con il volume | La qualità dipende dalla cultura della revisione; i team piccoli possono non avere un revisore indipendente; alcuni regolatori si aspettano un approvatore separato |
| Change advisory board centrale | Visibilità tra team; intercetta collisioni di calendario e rischi di dipendenze condivise | Lento se usato come barriera per ogni modifica; incoraggia lotti di modifiche più grandi consegnati meno spesso; crea una coda |
| Lead time di approvazione come metrica principale | Facile da spiegare; espone una reale fonte di ritardo | Facile da manipolare; può spingere gli approvatori ad affrettarsi; non dice nulla sulla qualità della decisione |
| Quota di approvazioni automatizzate come obiettivo | Premia l'investimento in strumenti e in evidenze registrate | Può premiare controlli automatizzati deboli; può escludere modifiche che richiedono davvero un giudizio umano |

La domanda migliore raramente è «board o niente board» e di solito è «quali modifiche richiedono quale tipo di attenzione e come lo sappiamo?».

## Domande da discutere con il team

**1. Quante modifiche abbiamo fatto il mese scorso e tutte le nostre fonti concordano?**
Si chieda a ciascun gruppo di produrre il proprio conteggio da ticket, distribuzioni della pipeline e canali informali. Si confrontino i totali. Il divario è di per sé un risultato sulle modifiche non registrate. Il facilitatore dovrebbe concordare quale fonte sia il sistema di riferimento e chi riconcili le altre.

**2. Quali delle nostre modifiche normali sono in realtà di routine e che cosa servirebbe per renderle standard?**
Si elenchino le cinque modifiche normali più frequenti. Per ciascuna, ci si chieda se la procedura sia documentata, se il rischio sia compreso e se il team abbia uno storico pulito. La discussione spesso individua uno o due candidati evidenti. Si catturino i controlli che renderebbero sicura la preautorizzazione e si nomini chi approverebbe la procedura standard.

**3. Dove parte e dove si ferma il nostro orologio di approvazione e che cosa attende al suo interno?**
Si prendano le ultime tre modifiche normali e le si ripercorra dall'invio alla decisione. Si annotino ogni passaggio di consegne, riunione e richiesta di informazioni. Le persone sono spesso sorprese da quanta parte dell'attesa sia tempo di calendario tra un giro di domande e l'altro. Si concordi una definizione scritta dell'orologio e di ciò che è escluso.

**4. Ci fidiamo delle nostre approvazioni o ci limitiamo a raccoglierle?**
Si estragga un campione di approvazioni recenti e se ne leggano le revisioni. Si cerchino approvazioni concesse nel giro di pochi secondi o senza commenti. L'obiettivo è capire quanta garanzia il processo fornisca davvero, non trovare un colpevole. Si discuta di che cosa renderebbe una revisione più sostanziale senza renderla più lenta.

**5. A che cosa serve il nostro board delle modifiche e che cosa perderemmo se smettesse di riunirsi?**
Ci si chieda che cosa il board decida che nessun altro potrebbe decidere e che cosa si limiti a confermare. Alcuni board svolgono un lavoro prezioso di coordinamento tra team e di individuazione di collisioni di calendario. Altri ribadiscono decisioni già prese nella code review. Si concordi quali funzioni valga la pena conservare e quali potrebbero passare alla pipeline o a un forum più leggero.

**6. Se dimezzassimo il tempo di approvazione, che cosa dovremmo vedere per sapere che è sicuro?**
Si nominino i segnali di sicurezza prima del cambiamento, come il tasso di fallimento delle modifiche per tipo, la quota di emergenze e gli incidenti collegati a modifiche recenti. Si concordino le soglie che farebbero scattare una pausa. Questa conversazione trasforma un obiettivo di velocità in un esperimento con una regola di arresto, che è la migliore difesa contro l'ottimizzazione della cosa sbagliata.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna avvertono il lead time di approvazione come tempo morto tra una modifica finita e una in esecuzione. Vogliono vedere i propri numeri per tipo, con una vista della coda, in modo da poter decidere quando raggruppare, quando dividere e quando chiedere una nuova modifica standard. I loro migliori contributi sono buoni modelli di richiesta, modifiche piccole e collegamenti puliti dal commit al record di modifica.

### Team di servizio e operations

I team operativi usano il record di modifica per rispondere alla prima domanda di un incidente: che cosa è cambiato di recente? Apprezzano completezza, collegamenti accurati ai servizi e un calendario affidabile. Sostengono anche il costo di una modifica che va male, perciò hanno un interesse legittimo per le regole di classificazione e per la revisione delle modifiche d'emergenza. La mossa migliore è condividere con i team di consegna la titolarità del catalogo delle modifiche standard, in modo che la preautorizzazione rifletta la conoscenza operativa.

### Leadership e governance

I dirigenti e gli organi di governance hanno bisogno di garanzie che le modifiche siano controllate e devono sapere se il controllo sta rallentando l'organizzazione. Queste metriche offrono entrambe le cose: composizione per tipo, tempo di attesa e quota di approvazioni supportate da evidenze registrate. Si chiedano tendenze e dispersione tra i servizi, mai una classifica, e si leggano accanto alle misure di fallimento (si veda l'Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni»). Finanziare l'automazione che sposta l'approvazione nella pipeline è di solito un investimento migliore che aggiungere un revisore al board.

### Clienti e utenti

I clienti raramente vedono il processo delle modifiche. Vedono arrivare nuove funzionalità, correzioni rilasciate con prontezza e meno interruzioni dopo un rilascio. Un'approvazione lenta ritarda le correzioni che hanno richiesto, e un'approvazione debole rischia l'interruzione che temono. Dove un servizio ha finestre di manutenzione pianificate, si pubblichi il calendario delle modifiche in un linguaggio semplice.

## In pratica: un esempio di ITIL agile

Una compagnia assicurativa regionale fittizia gestisce un portale clienti con otto team di consegna e un CAB che si riunisce due volte alla settimana. Tutti i numeri seguenti sono illustrativi.

Il responsabile delle operations del servizio costruisce la prima vista completa delle modifiche. Per il mese, il portale mostra circa 420 modifiche completate secondo i ticket, 610 distribuzioni in produzione secondo la pipeline e un divario che si rivela essere costituito da modifiche effettuate senza un ticket. Delle 420 modifiche con ticket, il 18 per cento è standard, il 76 per cento normale e il 6 per cento d'emergenza (illustrativo). Il lead time di approvazione mediano per le modifiche normali è di 2 giorni lavorativi e l'85° percentile è di 7 giorni lavorativi (illustrativo). La richiesta più vecchia in coda ha atteso 12 giorni lavorativi.

Quando i team esaminano la lunga attesa, trovano due cause. Molte richieste restano ferme fino alla riunione successiva del board anche quando sono di routine, e altre rimbalzano più volte al richiedente per informazioni mancanti. Il team separa i due orologi e scopre che circa metà dell'attesa all'85° percentile è tempo di attesa del richiedente. Correggono per prima cosa il modello di richiesta. Poi scelgono le tre modifiche normali più comuni: aggiornamenti di dipendenze con test superati, attivazioni di configurazione in uno strumento di feature flag e scalatura dei server applicativi. Scrivono le procedure, concordano il rischio con l'autorità per le modifiche e le convertono in modifiche standard con l'approvazione registrata nella pipeline.

Due mesi dopo, la quota di modifiche standard sale al 41 per cento (illustrativo), l'85° percentile del lead time di approvazione per le modifiche normali scende a 4 giorni lavorativi (illustrativo) e il tasso di fallimento delle modifiche per tipo resta invariato, come riportato nelle misure di accompagnamento (si veda l'Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni»). Il board passa dal rivedere ogni modifica normale al rivedere le modifiche ad alto rischio e il calendario mensile.

Un rischio di manipolazione emerge nel campione trimestrale. Un team ha classificato come modifica standard una migrazione dello schema di un database perché la precedente procedura per le «modifiche di configurazione» era formulata in modo vago. Chi riesamina il campione nota che la migrazione non aveva un piano di rollback. Il team rende più rigorose le definizioni delle modifiche standard, aggiunge una regola per cui le modifiche allo schema sono sempre normali e il registro delle riclassificazioni diventa un punto fisso dell'ordine del giorno. La decisione registrata nel registro delle metriche è di mantenere la quota di modifiche standard come misura di contesto e non come obiettivo.

## Lente di settore

**Startup.** Una startup ha di solito poco processo formale e molta automazione della pipeline. Le modifiche avvengono rapidamente senza alcun record, quindi contano soprattutto la completezza e il collegamento dal commit alla distribuzione. Una definizione di una pagina dei tre tipi, più la revisione registrata dalla pipeline, spesso basta.

**Piccola impresa.** Una piccola impresa ha spesso una o due persone che scrivono e rilasciano le modifiche, quindi la revisione indipendente è difficile. Si usi un semplice elenco di modifiche standard per il lavoro di routine, si richieda un secondo paio di occhi per qualsiasi cosa tocchi dati dei clienti o denaro e si tenga un semplice registro delle modifiche. Le misure da monitorare sono il volume per tipo e la completezza dei record, perché sono economiche e aiutano durante un incidente.

**Grande impresa.** Le grandi imprese hanno molti team, piattaforme condivise e sistemi legacy con rischi diversi. Tendono ad avere un CAB, e le metriche aiutano a decidere quali dei suoi compiti debbano restare. Il lavoro principale consiste in una classificazione coerente, un catalogo condiviso di modifiche standard e una pipeline che registri le evidenze di audit. Si aggreghi per servizio e per classe di rischio, non per classifica dei team.

**Governo e settore pubblico.** Gli enti pubblici spesso affrontano requisiti legali di approvazione, separazione dei compiti e conservazione dei record, e possono avere finestre di rilascio dettate dagli appalti. Le metriche dovrebbero indicare quali controlli sono obbligatori e quali sono abitudini locali, poiché i primi non possono essere rimossi e i secondi sì. La revisione tra pari registrata e le evidenze della pipeline possono spesso soddisfare l'intento, ma lo si confermi con l'auditor competente prima di farvi affidamento (si veda l'Argomento 8.3 «Metriche di conformità e audit»).

## Business case: motivazioni, ROI e TCO

La motivazione è di solito il tempo che le modifiche trascorrono in attesa. Quando il lavoro finito fa la coda per una decisione, il valore viene ritardato, i lotti crescono e ogni lotto porta più rischio. Una seconda motivazione è la garanzia: dirigenti e auditor vogliono sapere che le modifiche sono controllate, e le evidenze registrate nella pipeline sono più economiche da produrre e più affidabili di una ricostruzione. Una terza è la risposta agli incidenti, perché un record di modifica completo e accurato accorcia la ricerca di una causa.

La raccolta è economica se lo strumento delle modifiche e la pipeline già memorizzano timestamp e tipi, e moderata se occorre integrarli. Agire sui dati costa di più: scrivere procedure di modifica standard, costruire controlli della pipeline e formare approvatori e richiedenti. Ci si aspetti la maggior parte del lavoro nel primo trimestre e un costo più basso e costante per il campionamento e la revisione in seguito.

Il ritorno si manifesta in meno tempo di attesa per modifica, meno riunioni, meno sforzo per preparare le evidenze di audit e una diagnosi più rapida durante gli incidenti. Lo si stimi con i propri dati: si moltiplichi la riduzione delle ore di attesa per l'approvazione per il numero di modifiche interessate e per un costo per ora di ritardo che il proprio partner finanziario accetta. Non si importino cifre da altre organizzazioni. La ricerca DORA sostiene la direzione dell'argomentazione, ma le sue pagine non forniscono un costo né un ritorno, e qualsiasi cifra in denaro deve provenire dalle proprie misurazioni.

## Anti-pattern e insidie

- **Trattare la quota di modifiche standard come un obiettivo.** I team riclassificano il lavoro rischioso per raggiungere il numero. La si usi come contesto, si riveda la classificazione a campione e si osservino i tassi di fallimento per tipo.
- **Misurare solo la velocità di approvazione.** Un timbro rapido appare eccellente e non consegna nulla. Si abbini il lead time alla revisione a campione della sostanza delle approvazioni e al quadro dei fallimenti.
- **Aggiungere approvazioni dopo ogni incidente.** Ogni nuova barriera rallenta il sistema e spesso incoraggia lotti più grandi. Si guardi prima al perché del fallimento e si corregga la causa nei test, nella revisione o nella pipeline.
- **Classificare approvatori o richiedenti.** I conteggi per persona di approvazioni o rifiuti insegnano ad approvare tutto o niente. Si riporti per servizio e per tipo di modifica.
- **Fare la media tra tipi di modifica.** Una singola media mescola lavoro di routine e rischioso e nasconde entrambi. Si divida sempre per tipo e si mostri l'85° percentile.
- **Ignorare le modifiche fatte fuori dal processo.** L'aggiramento nasconde volume e rischio reali. Si riconcilino le distribuzioni della pipeline con i record di modifica e si trattino i divari come un difetto del sistema.
- **Mantenere il board per abitudine.** Un board che approva tutto ciò che vede aggiunge ritardo senza aggiungere garanzia. Si riveda ogni anno ciò che decide che nessun altro potrebbe decidere e lo si riorienti.
- **Raccogliere i dati e non decidere mai.** Si colleghi ogni metrica a un responsabile nominato e a un forum di revisione (si veda l'Argomento 1.4 «Governance e responsabilità delle metriche»).

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Classificazione e volume | I tipi sono informali; nessuno conosce il totale | Alcuni team contano per tipo con regole diverse | Un'unica classificazione scritta, un unico sistema di riferimento | Composizione per tipo analizzata nel tempo e campionata per accuratezza | Catalogo di modifiche standard condiviso con i fornitori e rivisto al mutare delle evidenze sul rischio |
| Orologio di approvazione e coda | Le attese di approvazione sono percepite ma non cronometrate | Alcuni team applicano un timestamp alle richieste | Un'unica definizione dell'orologio, mediana e percentile mostrati | Anzianità della coda rivista settimanalmente; i ritardi guidano correzioni finanziate | Flusso di approvazione ottimizzato tra team e fornitori rispetto ai fallimenti e agli esiti per i clienti |
| Automazione dell'approvazione | L'approvazione è una riunione o un'email | Alcune pipeline registrano la revisione tra pari | Revisione e controlli registrati sono la norma per le modifiche a basso rischio | Quota automatizzata monitorata con un numero di aggiramenti e controlli di qualità a campione | Politica codificata in controlli di piattaforma condivisi che si adattano al mutare del quadro dei rischi |
| Record e utilizzo | I record sono scarni o scritti a posteriori | I record esistono ma differiscono per qualità | Campi richiesti concordati e collegati ai servizi | Completezza verificata e usata nelle revisioni degli incidenti | I dati sulle modifiche alimentano le pratiche di incidenti, problemi e audit in tutta l'organizzazione |

## Checklist

- [ ] I tre tipi di modifica e i loro criteri sono scritti e concordati.
- [ ] Esiste un'unica vista delle modifiche completate per tipo, riconciliata con le distribuzioni della pipeline.
- [ ] L'orologio di approvazione ha un avvio, un arresto e un elenco di esclusioni scritti.
- [ ] Il lead time di approvazione è riportato come mediana e 85° percentile.
- [ ] L'anzianità della coda di approvazione è visibile e rivista settimanalmente.
- [ ] Almeno una modifica normale frequente è stata convertita in una modifica standard con una procedura documentata.
- [ ] La revisione tra pari e i risultati dei test sono collegati automaticamente ai record di modifica.
- [ ] Un campione trimestrale verifica la classificazione e la qualità delle approvazioni.
- [ ] L'aggiramento della pipeline è misurato e rivisto.
- [ ] Ogni metrica ha un responsabile nominato, un vettore di manipolazione e una contromisura nel registro delle metriche.
- [ ] Nessun report classifica singoli approvatori o richiedenti.

## Prompt IA

**Redigere una guida alla classificazione per i tre tipi di modifica.**

```text
Lavoro in [tipo di organizzazione] e gestiamo [elenco dei servizi]. Il nostro
strumento delle modifiche è [strumento], la nostra pipeline è [strumento della
pipeline] e il nostro contesto normativo è [normative o nessuno]. Ecco le nostre
dieci modifiche più frequenti: [elenco]. Rediga una guida in linguaggio
semplice per decidere se ciascuna sia una modifica standard, normale o
d'emergenza, con i criteri usati e un esempio di caso limite. Non inventi
valori di benchmark né affermi che una pratica soddisfi un requisito di audit.
Elenchi le sue ipotesi e le domande a cui dovrei rispondere prima di adottare
la guida.
```

**Individuare dove si spende il tempo di approvazione.**

```text
Ecco un estratto di record di modifica con timestamp di invio, di richiesta di
informazioni e di decisione: [dati incollati o descrizione]. Il nostro processo
di approvazione è [descrizione]. Calcoli la mediana e l'85° percentile del lead
time di approvazione per tipo di modifica, separando il tempo di attesa del
richiedente dal tempo di attesa di una decisione, e suggerisca tre domande da
porre sui casi più lunghi. Non inventi cifre che non sono nei dati e non
classifichi le singole persone. Elenchi le sue ipotesi e gli eventuali problemi
di qualità dei dati che nota.
```

**Verificare le metriche per rischi di manipolazione.**

```text
Riportiamo queste metriche di abilitazione delle modifiche: [elenco di metriche
con definizioni]. Il pubblico è [team, dirigenza o organo di governance] e le
metriche sono usate per [scopo]. Per ogni metrica, elenchi i modi plausibili in
cui potrebbe essere gonfiata, nascosta o distorta senza un reale miglioramento e
suggerisca una misura o una pratica di contromisura abbinata. Non proponga
obiettivi né valori di benchmark. Elenchi le sue ipotesi e quali rischi di
manipolazione ritiene più importanti per [nome del servizio].
```

**Pianificare il passaggio dall'approvazione del board all'approvazione nella pipeline.**

```text
Il nostro attuale percorso di approvazione per [tipo di modifica] è
[descrizione], con [numero] approvatori e un'attesa tipica descritta come
[descrizione]. La nostra pipeline fornisce [controlli, test, strumenti di
revisione]. Proponga un piano graduale per spostare le modifiche a basso rischio
verso un'approvazione registrata e basata sulla pipeline, comprese le evidenze
che dovremmo conservare, i segnali di sicurezza da osservare e una regola di
arresto. Non affermi che il piano soddisfi alcuna normativa o standard. Elenchi
le sue ipotesi e le persone che dovrei consultare, come [auditor, responsabile
della sicurezza, autorità per le modifiche].
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare gli argomenti correlati su modifiche, rilasci e incidenti e la contromisura che dovrebbe affiancare ciascuna metrica di abilitazione delle modifiche.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una versione rivista di questo argomento mantenga coerenti i propri orologi, i vettori di manipolazione e i riferimenti incrociati.

## Punti chiave

- Le metriche di abilitazione delle modifiche misurano il flusso e il controllo delle modifiche: volume per tipo, attesa per l'approvazione e quanta approvazione la pipeline registra automaticamente.
- Si divida tutto per tipo di modifica, si riportino i tempi di attesa come mediana e 85° percentile e si osservi la coda attiva oltre allo storico.
- Spostare il lavoro di routine verso le modifiche standard e registrare la revisione nella pipeline è il modo più diretto per accorciare l'attesa, e va letto accanto alle misure di fallimento.
- La quota di modifiche standard e la velocità di approvazione sono facili da manipolare, perciò si campionino la classificazione e la qualità delle approvazioni e si tengano i numeri fuori dalle schede di valutazione individuali.
- Si usino le metriche per decidere a che cosa serva un board delle modifiche e si finanzi l'automazione che rende sicuro un controllo più leggero.

## Riferimenti e letture di approfondimento

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA (Google Cloud), "Streamlining change approval" and "Software delivery performance metrics," DORA capabilities and guides, https://dora.dev/ (read the pages directly and note the date you consulted them).
3. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
6. Wikipedia, [Change management (ITSM)](https://en.wikipedia.org/wiki/Change_management_(ITSM)).
7. Wikipedia, [Separation of duties](https://en.wikipedia.org/wiki/Separation_of_duties).
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
