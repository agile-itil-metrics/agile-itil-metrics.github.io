# Lavoro operativo e lavoro non pianificato

**Un team che costruisce ed eroga un servizio ha un unico bacino di capacità: si renda visibile la ripartizione tra modifiche pianificate e lavoro operativo, la si protegga con regole esplicite per le interruzioni e le urgenze e si legga la quota di lavoro non pianificato come un segnale sul sistema anziché come un verdetto sulle persone.**

## Panoramica e motivazione

Ogni team che costruisce ed eroga un servizio spende il proprio tempo in due grandi tipi di lavoro. Il **lavoro di modifica (change work)** fa avanzare il servizio: nuove funzionalità, miglioramenti pianificati, migrazioni e rimozione di debolezze note. Il **lavoro di esercizio (run work)**, detto anche lavoro operativo, mantiene il servizio in funzione: rispondere a incidenti e richieste, reagire agli avvisi, applicare patch di routine, ripristinare gli accessi e gestire i compiti manuali che il servizio richiede ancora. Entrambi sono legittimi, e un servizio che ha utenti ha bisogno di entrambi. Il problema inizia quando nessuno sa dire quanto di ciascuno il team stia facendo, perché il piano presuppone allora in silenzio una capacità che il lavoro di esercizio ha già consumato.

Il lavoro si può ordinare anche in base al fatto che fosse previsto o meno. Il **lavoro pianificato** è stato scelto prima dell'inizio del periodo, per esempio durante la pianificazione o con un impegno trimestrale. Il **lavoro non pianificato** arriva durante il periodo e richiede un'attenzione che non era stata messa a budget: un incidente in produzione, una richiesta urgente di uno stakeholder di alto livello, una correzione di sicurezza o un difetto che blocca un cliente. I due assi si sovrappongono ma non coincidono. La maggior parte del lavoro di esercizio è non pianificata nei tempi anche quando il suo volume è prevedibile, e una parte del lavoro di esercizio, come un rinnovo programmato di un certificato, è interamente pianificata. Anche il lavoro di modifica può essere non pianificato, come quando cambia una normativa e un team deve rispondere nel giro di settimane.

Le visioni agile e ITIL descrivono la stessa pressione con parole diverse. Nella pianificazione a tempo definito, un impegno è una previsione di capacità, e il lavoro che arriva a metà periodo o sposta qualcos'altro o viene rinviato. Su una lavagna di flusso il lavoro in corso ha limiti espliciti e c'è spesso una corsia dedicata per gli elementi urgenti, e la domanda è quanti elementi urgenti il sistema possa assorbire prima che il flusso collassi (vedi Argomento 2.1 «Misure del flusso»). In ITIL 4 (la versione pubblicata nel 2019), la gestione degli incidenti, la gestione delle richieste di servizio e la gestione dei problemi descrivono come il lavoro di esercizio venga ricevuto, prioritizzato e risolto, mentre l'abilitazione delle modifiche e la pratica di sviluppo e gestione del software governano le modifiche pianificate. Le pratiche descrivono flussi di lavoro. Raramente dicono come un singolo team debba ripartire le proprie ore tra di essi, ed è in quel vuoto che opera questo argomento.

Diversi termini ricorrono qui. Un'**interruzione (interrupt)** è qualsiasi richiesta che arriva fuori dal ciclo di pianificazione e distoglie una persona dall'elemento su cui sta lavorando. Il **carico di interruzioni** è l'effetto totale di quelle richieste su un team in un periodo, misurato per numero, per ore o per quota di capacità che consumano. Un'**urgenza (expedite)** è un elemento di lavoro a cui è consentito saltare la coda, di solito perché il suo [costo del ritardo](https://en.wikipedia.org/wiki/Cost_of_delay) è alto e immediato. Una **corsia di urgenza** è una regola, spesso una riga dedicata su una lavagna, che limita quante urgenze possano essere in corso contemporaneamente. La **ripartizione della capacità** è la divisione esplicita della capacità di un team tra tipi di lavoro, per esempio una quota dichiarata per le modifiche pianificate, una per il lavoro di esercizio e una per il miglioramento.

Il lavoro non pianificato è la più grande tassa nascosta sulla consegna pianificata: ogni interruzione costa il proprio tempo più il tempo di recupero perso per il [cambio di compito](https://en.wikipedia.org/wiki/Task_switching_(psychology)), e la ricerca sul lavoro interrotto (Mark, Gudith e Klocke, 2008) ha rilevato che le persone compensano lavorando più in fretta al prezzo di più stress. Una nota sulla direzione. Una quota elevata di lavoro non pianificato non è di per sé un difetto. Un servizio appena lanciato, un'interruzione in corso o un evento regolamentato possono legittimamente consumare la maggior parte della capacità di un team per un periodo. Lo scopo non è portare a zero il lavoro non pianificato né nasconderlo, ma vederlo, dargli un prezzo e decidere con deliberazione quanto ne assorbirà il team e quanto l'organizzazione debba correggere a monte. Il lavoro non pianificato che si ripete per la stessa causa è il più utile da individuare, perché indica un record di problema, una lacuna di monitoraggio o una voce di [debito tecnico](https://en.wikipedia.org/wiki/Technical_debt) che costa meno rimuovere che continuare a pagare.

## Principi chiave

- **La capacità è finita e condivisa.** Ogni ora data al lavoro di esercizio o a un'urgenza è un'ora non data alle modifiche pianificate, perciò si renda esplicita e visibile la ripartizione anziché lasciarla emergere da chi grida più forte.
- **Si classifichi il lavoro quando arriva, non dopo.** Si etichetti ogni elemento come pianificato o non pianificato e come modifica o esercizio nel momento in cui entra nel sistema, perché la riclassificazione a fine periodo è un ricordo e non un'osservazione.
- **Le interruzioni hanno un prezzo oltre la loro durata.** Si conti il costo di recupero del cambio oltre ai minuti spesi e si preferiscano progetti che raggruppino o instradino le interruzioni verso una persona nominata.
- **Si dia urgenza per regola, non per grado.** Una corsia di urgenza con un limite e un test di ingresso protegge il flusso; le urgenze illimitate per anzianità lo eliminano.
- **Si riservi capacità di proposito.** Un margine pianificato è più onesto di un piano che non ne presuppone alcuno.
- **Si tratti il lavoro non pianificato ripetuto come un difetto del sistema.** Una ripetizione settimanale è candidata a un record di problema o a un'automazione.
- **Si misurino team e servizi, mai le persone.** La persona che risponde alla maggior parte delle interruzioni è di solito quella che sa di più; classificarla punisce la cosa sbagliata (vedi Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Definizioni delle metriche

Sette metriche descrivono come la capacità viene divisa e disturbata. Ciascuna richiede una regola di classificazione scritta, perché ognuna dipende da come gli elementi sono etichettati. Il periodo di ogni formula è la stessa finestra fissa per il team, come una settimana, un mese o un trimestre.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rapporto di lavoro non pianificato | Quota degli elementi di lavoro completati, per numero, che non erano nel piano all'inizio del periodo | elementi completati nel periodo entrati nella lavagna o nel backlog dopo l'inizio del periodo / tutti gli elementi completati nel periodo; il cronometro parte all'evento di pianificazione e si ferma alla fine del periodo; gli elementi annullati e quelli ancora aperti sono esclusi | percentuale | Issue tracker con l'ora di creazione dell'elemento e l'istantanea di pianificazione | Gestione degli incidenti; gestione delle richieste di servizio | Variazione di ambito; tipi di elemento di lavoro | Mensile |
| Aderenza alla ripartizione della capacità | Quanto lo sforzo effettivo corrisponda alla ripartizione dichiarata tra lavoro di modifica, di esercizio e di miglioramento | per ciascuna categoria, differenza assoluta tra quota effettiva e quota concordata, sommate e dimezzate; la quota effettiva è gli elementi completati (o lo sforzo registrato dove il team lo registra) in quella categoria / tutti gli elementi completati; gli elementi senza categoria sono riportati a parte e non scartati | punti percentuali | Campo del tipo di lavoro dell'issue tracker e registrazioni del tempo dove esistono | Miglioramento continuo; gestione della capacità e delle prestazioni | Ripartizione o pianificazione della capacità | Mensile |
| Tasso di interruzioni | Con quale frequenza le richieste fuori dal piano raggiungono il team e le persone che svolgono lavoro pianificato | interruzioni ricevute dal team nel periodo / giorni lavorativi del periodo, dove un'interruzione è qualsiasi ticket, chiamata, richiesta di messaggio o domanda registrata sul canale di accettazione del team e non già nel piano; i duplicati della stessa richiesta sottostante sono contati una volta | interruzioni per giorno lavorativo | Registro del canale di accettazione, coda ITSM, sistema di avvisi e registro delle interruzioni del team | Gestione degli incidenti; gestione delle richieste di servizio; monitoraggio e gestione degli eventi | Registro delle interruzioni o accordo di lavoro del team | Settimanale |
| Tasso di urgenze | Quota degli elementi completati che hanno usato la corsia di urgenza | elementi completati nel periodo entrati nella corsia di urgenza / tutti gli elementi completati nel periodo; il cronometro parte quando l'elemento è contrassegnato come urgente e si ferma al completamento; gli elementi declassati fuori dalla corsia prima dell'inizio del lavoro sono contati a parte | percentuale | Cronologia delle corsie della lavagna o cronologia del campo priorità | Gestione degli incidenti; abilitazione delle modifiche (modifica di emergenza) | Classe di servizio urgente | Mensile |
| Spostamento del lavoro pianificato | Numero di elementi pianificati spinti fuori o abbandonati per far posto al lavoro non pianificato | elementi pianificati rimossi dal periodo, rinviati o lasciati incompiuti con una motivazione registrata «spostato da lavoro non pianificato» nel periodo (conteggio); gli elementi rimossi perché l'obiettivo è cambiato sono esclusi | conteggio di elementi | Cronologia delle modifiche della lavagna, con il campo motivazione | Abilitazione delle modifiche; miglioramento continuo | Protezione dell'obiettivo di consegna; negoziazione dell'ambito | Mensile |
| Quota di lavoro non pianificato ripetuto | Quota degli elementi non pianificati la cui causa corrisponde a un precedente elemento non pianificato nella finestra di osservazione | elementi non pianificati completati nel periodo che si collegano allo stesso record di problema, regola di avviso o etichetta di causa di un elemento precedente entro la finestra di osservazione (per esempio 90 giorni) / tutti gli elementi non pianificati completati nel periodo; gli elementi senza etichetta di causa sono riportati come conteggio distinto di non classificati | percentuale | Record ITSM di incidenti e problemi, etichette di causa del tracker | Gestione dei problemi; gestione degli errori noti | Azioni di retrospettiva; etichette dei difetti ricorrenti | Mensile |
| Affidabilità dell'impegno pianificato | Quota degli elementi che il team aveva pianificato per il periodo e che ha concluso nel periodo | elementi pianificati conclusi nel periodo / elementi pianificati all'inizio del periodo; gli elementi aggiunti dopo l'inizio sono esclusi da entrambi i conteggi | percentuale | Istantanea di pianificazione e cronologia dei completamenti del tracker | Gestione dei livelli di servizio; abilitazione delle modifiche | Affidabilità della previsione | Mensile |

Le misure di tempo in questo argomento, come l'età di un elemento urgente, dovrebbero essere mostrate come percentili (per esempio la mediana e l'85° percentile) e non come media, poiché un solo incidente lungo distorce una media (vedi Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

## Raccomandazioni

### Rendere visibile la ripartizione

**1. Si etichetti ogni elemento con due campi all'accettazione.** Si aggiungano un tipo di lavoro (modifica, esercizio, miglioramento) e un flag di pianificazione (pianificato, non pianificato) al modulo di accettazione del tracker o dello strumento ITSM e li si renda entrambi obbligatori. Le etichette costano poco quando sono impostate alla creazione e sono inaffidabili quando ricostruite dopo. Si scriva la definizione di ciascun valore in una frase nell'accordo di lavoro del team e la si riveda quando le etichette smettono di descrivere il lavoro (vedi Argomento 1.5 «Fonti dei dati e strumentazione»).

**2. Si congeli un'istantanea di pianificazione.** «Non pianificato» ha significato solo rispetto a un piano, perciò si acquisisca l'elenco degli elementi all'inizio del periodo e lo si conservi. Si confronti il lavoro completato con l'istantanea, non con l'aspetto che la lavagna ha a fine periodo.

### Ripartire la capacità di proposito

**3. Si concordi una ripartizione della capacità e la si tratti come un'ipotesi.** Si decida, come team e con il product owner o il responsabile del servizio, all'incirca quale quota vada alle modifiche pianificate, al lavoro di esercizio e al miglioramento. Si parta da ciò che i dati mostrano che il team ha effettivamente fatto negli ultimi periodi, poi si scelga un obiettivo che si muova nella direzione desiderata. Si riveda la ripartizione a ogni ciclo di pianificazione; una percentuale fissa copiata dalla slide di un altro team è un'ipotesi e non una decisione.

**4. Si riservi un margine dimensionato sulla propria storia.** Si usi il registro delle interruzioni del team stesso per dimensionare un margine per il lavoro non pianificato, per esempio guardando la fascia mediana e quella alta della quota non pianificata settimanale nei periodi recenti, e si pianifichi solo la capacità che resta. Un margine regolarmente inutilizzato può ridursi; uno regolarmente esaurito richiede una ripartizione maggiore o la rimozione di una causa. La relazione tra carico e ritardo in una coda (si vedano la [legge di Little](https://en.wikipedia.org/wiki/Little%27s_law) e l'argomento 2.3 «Lavoro in corso e code») spiega perché un sistema gestito alla piena utilizzazione non ha spazio per assorbire una sorpresa.

### Progettare il percorso delle interruzioni

**5. Si instradino le interruzioni verso un ruolo nominato.** Si faccia ruotare una singola persona, spesso chiamata gestore delle interruzioni, ingegnere di turno o scudo, perché riceva le richieste in ingresso per un giorno o una settimana, mentre gli altri proteggono la propria concentrazione. Il ruolo ha un perimetro scritto, una nota di passaggio di consegne e un limite alla durata, così che il carico sia condiviso in modo equo. I team con una rotazione dovrebbero collegarla alla pratica di reperibilità (vedi Argomento 5.7 «Metriche di toil e reperibilità»).

**6. Si faccia triage alla porta.** Le interruzioni differiscono enormemente per urgenza. Si applichi all'accettazione una breve regola di [triage](https://en.wikipedia.org/wiki/Triage) che pone tre domande: un servizio è fermo o un utente è bloccato, c'è una data che non può spostarsi e la richiesta può attendere il prossimo evento di pianificazione? Gli elementi che falliscono tutte e tre vanno nel backlog e sono pianificati come qualsiasi altro lavoro. In termini ITIL 4 questo è il passo di prioritizzazione della gestione degli incidenti e della gestione delle richieste di servizio applicato all'accettazione del team stesso.

### Governare la corsia di urgenza

**7. Si dia alla corsia di urgenza un limite e un test di ingresso.** La corsia contiene al massimo uno o due elementi alla volta, e un elemento vi entra solo se il suo costo del ritardo è alto e immediato e il richiedente sa dichiararlo. Un test dichiarato permette al team di dire no alla richiesta che è semplicemente rumorosa. Se la corsia è sempre piena, ha smesso di essere un'eccezione, e il team dovrebbe rivedere il test di ingresso e le cause a monte. La corsia è una [classe di servizio](https://en.wikipedia.org/wiki/Class_of_service) con regole proprie; per l'idea di fondo si veda la letteratura Kanban (Anderson, 2010).

### Rimuovere le fonti

**8. Si colleghino gli elementi non pianificati a una causa e si rivedano le ripetizioni.** Si aggiunga a ogni elemento non pianificato un'etichetta di causa o un collegamento a un record di problema. Una volta al mese, si elenchino le cause che ricorrono e si inviino le prime poche alla gestione dei problemi, al backlog come voci di debito tecnico o a miglioramenti del monitoraggio (vedi Argomento 4.1 «Metriche di gestione dei problemi» e Argomento 4.6 «Debito tecnico ed errori noti»). La quota di lavoro non pianificato ripetuto dice se quelle correzioni arrivano a segno. Lo schema è simile all'eliminazione del toil descritta nel libro Google SRE, dove il lavoro operativo manuale ripetitivo è trattato come qualcosa da eliminare per via ingegneristica; il libro suggerisce di tenerlo sotto una certa quota del tempo di un ingegnere (Beyer et al., 2016), un'indicazione che ogni team dovrebbe verificare sui propri dati anziché adottarla come obiettivo.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Rapporto di lavoro non pianificato | Aggiungere elementi all'istantanea di pianificazione in ritardo così che contino come pianificati; lasciare il lavoro urgente non tracciato così che non conti mai; etichettare elementi pianificati come non pianificati per scusare un piano mancato | Istantanea di pianificazione congelata con timestamp; conteggio dei non classificati; un campione di elementi chiusi letto ogni trimestre per confrontare l'etichetta con ciò che è accaduto |
| Aderenza alla ripartizione della capacità | Spostare elementi tra categorie per far corrispondere la ripartizione concordata; dividere un elemento in diversi per spostare le quote; scegliere una ripartizione che il team già rispetta | Definizioni di categoria fisse scritte nell'accordo di lavoro; un campione di descrizioni di elementi rispetto alla loro categoria; affidabilità dell'impegno pianificato |
| Tasso di interruzioni | Trasformare le interruzioni in favori silenziosi che non raggiungono mai il registro; combinare più richieste in una sola voce; scoraggiare le persone dal chiedere | Confrontare il registro con il traffico del canale di accettazione e la cronologia degli avvisi; chiedere al team in retrospettiva se il registro corrisponda alla sua esperienza |
| Tasso di urgenze | Tenere il lavoro urgente fuori dalla corsia per sembrare disciplinati, oppure metterci tutto per ottenere velocità; ridefinire urgente come «importante» | Limite della corsia con test di ingresso; quota di urgenze che hanno superato il test alla revisione; spostamento del lavoro pianificato |
| Spostamento del lavoro pianificato | Registrare lo spostamento come variazione di ambito per scelta; lasciare che gli elementi pianificati falliscano in silenzio senza motivazione; evitare elementi pianificati che probabilmente verranno spostati | Campo motivazione obbligatorio su ogni elemento rimosso o incompiuto; affidabilità dell'impegno pianificato; revisione delle motivazioni in retrospettiva |
| Quota di lavoro non pianificato ripetuto | Usare un'etichetta di causa grossolana così che le ripetizioni siano nascoste, o una fine così che nulla si ripeta; chiudere il record di problema per eliminare il collegamento | Tassonomia delle etichette di causa rivista ogni trimestre; conteggio dei non classificati; verifica della ricorrenza dopo la chiusura di un record di problema |
| Affidabilità dell'impegno pianificato | Pianificare poco per concludere tutto; gonfiare le stime; contare un elemento parziale come fatto; scartare gli elementi difficili prima dell'inizio del periodo | Dimensione e valore degli elementi pianificati confrontati nel tempo; verifica dell'esito sull'obiettivo di consegna; rapporto di lavoro non pianificato, così che un valore alto non sia letto come salute quando il piano era timido |

Una lettura sana è un rapporto di lavoro non pianificato che il team sa spiegare, una corsia di urgenza raramente piena e una quota di ripetizioni che cala dopo le correzioni. Una lettura sospettamente perfetta è ciò che va indagato. Un team che riporta zero lavoro non pianificato ha o un servizio molto tranquillo o uno non tracciato, e il modo per distinguere è confrontare il registro con la cronologia di avvisi e ticket.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Ripartizione fissa della capacità (percentuali dichiarate) | Facile da spiegare; protegge il lavoro di miglioramento dalla fame | Ignora la variazione reale; può essere manipolata con la ri-etichettatura |
| Margine riservato dimensionato sulla storia | Fa corrispondere il piano al carico reale di interruzioni | Richiede diversi periodi di dati affidabili; può nascondere una causa cronica |
| Gestore delle interruzioni a rotazione | Protegge la concentrazione della maggior parte del team; distribuisce il carico in modo equo | Il lavoro pianificato del gestore si ferma; il ruolo richiede passaggio di consegne e supporto |
| Limite rigoroso alle urgenze | Mantiene prevedibile il flusso; impone un costo del ritardo dichiarato | I richiedenti possono aggirarlo; una vera emergenza può sembrare bloccata |
| Contare gli elementi anziché lo sforzo | Semplice e difficile da gonfiare | Tratta in modo uguale dimensioni molto diverse |

La posizione pratica per la maggior parte dei team è contare prima gli elementi, aggiungere lo sforzo solo dove i conteggi degli elementi fuorviano, proteggere un piccolo margine e una piccola corsia di urgenza e usare l'etichetta di causa per attaccare la ripetizione maggiore.

## Domande da discutere con il team

**1. Quale quota del lavoro completato nell'ultimo periodo era non pianificata e come lo sappiamo?**
Si apra l'istantanea di pianificazione accanto all'elenco degli elementi completati e si contino gli elementi che non erano nel piano. Si confronti il risultato con la percezione di ciascuno del periodo; i due spesso differiscono. Chi facilita dovrebbe chiedere quanti elementi non siano mai stati registrati, perché la risposta onesta plasma ogni altro numero.

**2. Quali tre fonti di interruzioni ci costano di più e chi potrebbe rimuoverle?**
Si elenchino le fonti per numero e per sforzo assorbito, come avvisi, richieste ripetute, escalation e richieste ad hoc degli stakeholder. Si segni ciascuna come rimovibile, instradabile o inevitabile. Chi facilita dovrebbe insistere perché si nomini un responsabile esterno al team per qualsiasi fonte che il team non può correggere da solo.

**3. Quale ripartizione tra lavoro di modifica, di esercizio e di miglioramento vogliamo davvero?**
Si confronti la ripartizione mostrata dai dati con quella che le persone credono di avere e con quella che la direzione si aspetta. Si discuta quali tipi di lavoro il team lascerebbe cadere per primi sotto pressione, poiché ciò rivela le vere priorità. Si scelga un obiettivo per il prossimo periodo e un modo per verificarlo.

**4. Qual è la nostra regola per la corsia di urgenza e chi decide?**
Si legga ad alta voce la regola attuale, oppure si noti che non ne esiste una. Si chiedano le ultime tre urgenze e si verifichi ciascuna rispetto a un costo del ritardo dichiarato. Si discuta che cosa faccia il team quando una persona di alto livello chiede un salto che non supera il test e chi sostenga la decisione.

**5. Quando veniamo interrotti, che cosa ci costa dopo che l'interruzione finisce?**
Si chieda alle persone di descrivere quanto tempo ci voglia per ritrovare il proprio posto in un compito dopo un'interruzione tipica.

**6. Quale elemento non pianificato è tornato più di una volta e che cosa lo fermerebbe?**
Si prenda l'ultimo trimestre di elementi non pianificati e si cerchino le ripetizioni per causa. Si scelga quello con lo sforzo totale maggiore e se ne ripercorra la ragione della ricorrenza: un avviso mancante, un difetto non corretto, un passaggio manuale o un problema del fornitore. Si decida se vada in un record di problema, nel backlog o in una conversazione con il fornitore.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna avvertono il lavoro non pianificato come piani rotti e previsioni che slittano. Traggono vantaggio dall'etichettatura all'accettazione, da un'istantanea di pianificazione congelata e da una previsione costruita su un margine basato sulla storia (vedi Argomento 2.5 «Metriche di previsione e pianificazione della consegna»). Il registro degli spostamenti mostra ai product owner che cosa sia costata ogni richiesta tardiva.

### Team di servizio e operations

I team operativi portano la maggior parte del lavoro di esercizio. Hanno bisogno di un gestore delle interruzioni nominato, di una regola di triage e di un percorso dalle richieste e dagli avvisi ricorrenti verso le correzioni (vedi Argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi»). La quota di ripetizioni è il loro argomento più forte per investire nella gestione dei problemi.

### Leadership e governance

I dirigenti stabiliscono la ripartizione reale attraverso le richieste che fanno e le scadenze che accettano. Dovrebbero chiedere il rapporto e le sue cause, finanziare il lavoro di miglioramento che rimuove le interruzioni ripetute ed evitare di usare le urgenze come modo normale di ottenere le cose.

### Clienti e utenti

I clienti vedono il lavoro non pianificato come interruzioni, risposte lente e funzionalità in ritardo. Ne traggono beneficio quando il team ha spazio per correggere le cause e hanno bisogno di un percorso equo per sollevare l'urgenza. Gli accordi sul livello di servizio (si veda [accordo sul livello di servizio](https://en.wikipedia.org/wiki/Service-level_agreement)) dovrebbero riflettere il carico di interruzioni che il team sostiene (vedi Argomento 5.1 «Metriche SLA, OLA e XLA»).

## In pratica: un esempio di ITIL agile

Il reparto IT di un assicuratore sanitario regionale gestisce una piattaforma sinistri con un team di prodotto di sette persone e un service desk condiviso. Il team costruisce nuove funzionalità e supporta anche la piattaforma in produzione. Tutti i numeri di questo esempio sono illustrativi.

Per sei settimane, l'affidabilità dell'impegno pianificato del team è scesa da circa l'85 percento al 55 percento, e il product owner ha cominciato a mettere in dubbio le stime del team. Il responsabile del team recupera la cronologia del tracker. Usando le istantanee di pianificazione congelate, il rapporto di lavoro non pianificato è del 41 percento per numero nell'ultimo periodo, contro una percezione del team di «forse un quinto». Il conteggio dei non classificati è del 9 percento, perciò il rapporto è ragionevolmente affidabile.

Scomponendo gli elementi non pianificati per causa si vede che 14 su 24 erano lavoro di esercizio, e di questi 9 risalgono a un unico job batch di invio dei sinistri che fallisce dopo una modifica di formato dei dati da parte di un partner e viene riavviato a mano ogni volta. La quota di lavoro non pianificato ripetuto è del 58 percento. Il tasso di interruzioni è di 6 per giorno lavorativo, e 4 di queste raggiungono gli ingegneri che stanno svolgendo il lavoro pianificato, perché il service desk effettua l'escalation direttamente a chi risponde per primo. La corsia di urgenza contiene due elementi alla volta quasi ogni giorno, e il tasso di urgenze è del 23 percento. Lo spostamento del lavoro pianificato è di 7 elementi nel periodo, di cui 5 portano la motivazione «spostato da lavoro non pianificato».

Il team prende quattro decisioni con il product owner e il responsabile del servizio. Primo, un ingegnere alla volta diventa il gestore delle interruzioni con un perimetro scritto e una nota di passaggio di consegne, e le escalation vanno solo a quella persona. Secondo, la corsia di urgenza è limitata a un elemento, con un test di ingresso che richiede un costo del ritardo dichiarato, e ogni urgenza registra l'elemento che ha spostato. Terzo, il fallimento del job batch è sollevato come record di problema, con una correzione e una conversazione con il partner inserite nel backlog come lavoro di miglioramento, usando il 15 percento della capacità, che è la quota che il team sceglie come prima ripartizione per il miglioramento. Quarto, il team pianifica il prossimo periodo di lavoro con un margine dimensionato sulla fascia alta della propria recente quota non pianificata, non con un carico pieno.

Sei settimane dopo, il rapporto di lavoro non pianificato è del 27 percento, la quota di ripetizioni è del 22 percento, il tasso di interruzioni che raggiungono i lavoratori pianificati è di 1,5 al giorno e l'affidabilità dell'impegno pianificato è di circa il 78 percento (tutti illustrativi). Il team non ha raggiunto il precedente 85 percento, e lo dice.

Il rischio di manipolazione che il team individua: nel secondo periodo con il nuovo assetto il tasso di interruzioni scende bruscamente, e il responsabile del team nota che le persone scrivono direttamente al gestore, così che i favori non raggiungono mai il registro. Confrontando il registro con il canale di accettazione e la cronologia degli avvisi, il volume reale risulta invariato. Il team concorda che il gestore reindirizzi i messaggi diretti al canale di accettazione. La colpa stava nella progettazione del percorso, non in una persona.

## Lente di settore

**Startup.** Quasi tutto il lavoro sembra urgente e le stesse poche persone svolgono lavoro di modifica e di esercizio. Si mantenga la classificazione a due etichette e si fissi un limite esplicito alle urgenze. Il rapporto non pianificato è l'evidenza per dire «possiamo fare la roadmap o il carico di supporto, non entrambi».

**Piccola impresa.** Un amministratore o un piccolo team gestisce spesso ogni richiesta. Si usino i tipi di ticket dello strumento come classificazione, si registrino le interruzioni per un mese per imparare lo schema e si riservi un blocco giornaliero fisso al lavoro pianificato. Si chiedano ai fornitori i rapporti sul loro volume e sulle cause ripetute.

**Grande impresa.** Il lavoro non pianificato per un team è spesso lavoro pianificato per un altro. Si concordino definizioni condivise, si riporti per team e per servizio e si finanzino le correzioni al livello in cui risiede la causa (vedi Argomento 9.3 «Metriche di collaborazione e passaggi di consegne»).

**Pubblica amministrazione e settore pubblico.** La capacità può essere fissata da tetti di organico, e il lavoro di esercizio può essere imposto da leggi o rilievi di audit. Si facciano rientrare questi aspetti nella ripartizione, si documentino le regole di classificazione e si conservi una traccia di audit (vedi Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

La motivazione è una consegna prevedibile: un piano che ignora il carico di interruzioni viene mancato ripetutamente, e il lavoro non pianificato reso visibile dà al team una voce più forte quando chiede tempo per rimuovere le cause.

Il costo di raccolta di queste misure è modesto quando le etichette e l'istantanea di pianificazione fanno parte del normale flusso di lavoro. I costi principali sono il tempo per concordare le definizioni, la disciplina di etichettare all'accettazione, una piccola quantità di strumenti per unire i dati del tracker e dell'ITSM (vedi Argomento 1.5 «Fonti dei dati e strumentazione») e le ore del gestore delle interruzioni, il cui lavoro pianificato rallenta. Aggiungere registrazioni del tempo a livello di ora costa considerevolmente di più ed è spesso mal tollerato, perciò le si aggiunga solo se i conteggi degli elementi si rivelano fuorvianti. Il costo totale di proprietà è dominato dal tempo delle persone, perciò lo si conti.

Il ritorno si manifesta in schemi che il team può misurare da sé anziché in una cifra presunta. Si cerchino una quota di lavoro non pianificato ripetuto in calo dopo le correzioni dei problemi, un aumento dell'affidabilità dell'impegno pianificato, meno elementi pianificati spostati e meno interruzioni che raggiungono le persone sul lavoro pianificato. Dove le ore sono note, lo sforzo recuperato dalla rimozione di una causa ricorrente può essere valutato al costo orario del team e confrontato con lo sforzo della correzione (vedi Argomento 7.5 «Costo del servizio ed economia unitaria» e Argomento 7.7 «Ritorno sull'investimento e business case»). Non si prendano in prestito percentuali di settore per il lavoro non pianificato; nessuna cifra di un'altra organizzazione sostituisce la propria storia.

## Anti-pattern e insidie

- **Trattare tutto il lavoro non pianificato come un fallimento.** Una parte è il servizio che fa il proprio dovere, e un obiettivo di zero spinge il lavoro fuori dal registro. Ci si chieda invece quale parte sia attesa, quale evitabile e si fissi un margine per la prima.
- **Cultura dell'eroe.** La persona che salva ogni emergenza diventa indispensabile, stanca e un singolo punto di guasto. Si condivida invece il ruolo delle interruzioni a rotazione e si premi la rimozione delle cause.
- **Tutto è un'urgenza.** Una corsia sempre piena è solo una seconda coda. Si fissi invece un limite, si richieda un costo del ritardo dichiarato e si riveda ogni mese il test di ingresso.
- **Pianificare al pieno utilizzo.** Un piano senza margine garantisce che ogni sorpresa sposti qualcosa. Si dimensioni invece un margine sulla propria storia di interruzioni e si pianifichi la capacità che resta.
- **Classificare a posteriori.** Le etichette aggiunte a fine periodo riflettono memoria e umore. Si richiedano invece le etichette all'accettazione e si congeli l'istantanea di pianificazione.
- **Assorbire la domanda in silenzio.** I favori che non raggiungono mai il registro rendono invisibile il carico e sbagliata la pianificazione. Si faccia invece regola di un unico percorso di accettazione e si reindirizzino verso di esso le richieste dei canali laterali.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Classificazione e visibilità | Il lavoro non è etichettato; il lavoro non pianificato è sentito, non contato | Alcuni team etichettano il lavoro pianificato e non pianificato con parole proprie | Una definizione scritta di tipi di lavoro e flag di pianificazione, applicata all'accettazione con un'istantanea di pianificazione | Rapporto non pianificato e conteggio dei non classificati seguiti nel tempo e rivisti a ogni periodo | Definizioni condivise tra team e fornitori e riviste quando smettono di orientare le decisioni |
| Ripartizione della capacità | Si presume che la capacità sia pienamente disponibile per il lavoro pianificato | Alcuni team applicano un margine approssimativo | Una ripartizione concordata tra modifica, esercizio e miglioramento, con un margine dimensionato sulla storia | Aderenza rivista e ripartizione adeguata con i responsabili di prodotto e di servizio | Ripartizione negoziata tra team che condividono piattaforme, servizi e persone |
| Gestione di interruzioni e urgenze | Chiunque interrompe chiunque; l'urgenza è decisa dall'anzianità | In alcuni team esiste l'abitudine di una persona di turno o di una riga urgente | Un ruolo nominato per le interruzioni, una regola di triage e una corsia di urgenza con limite e test di ingresso | Tasso di urgenze, spostamento e tasso di interruzioni rivisti rispetto a una salvaguardia | Instradamento delle interruzioni e regole di urgenza coordinati tra i team, con reperibilità e percorsi di escalation condivisi |
| Rimozione delle cause | Gli stessi problemi ricorrono e vengono risolti con atti eroici | Alcune ripetizioni sono notate e discusse nelle retrospettive | Gli elementi non pianificati portano un'etichetta di causa e le ripetizioni maggiori vanno alla gestione dei problemi | Quota di ripetizioni seguita nel tempo e correzioni finanziate come lavoro di miglioramento pianificato | Cause tracciate tra team, fornitori e clienti e miglioramento come routine |

## Checklist

- [ ] Ogni elemento di lavoro porta un tipo di lavoro (modifica, esercizio, miglioramento) e un flag di pianificazione, impostati all'accettazione.
- [ ] Le definizioni di pianificato, non pianificato, modifica ed esercizio sono scritte nell'accordo di lavoro del team.
- [ ] Un'istantanea di pianificazione è congelata all'inizio di ogni periodo e conservata.
- [ ] Il rapporto di lavoro non pianificato è riportato come tendenza, accanto al conteggio dei non classificati.
- [ ] Il team e i suoi responsabili hanno concordato una ripartizione della capacità e l'hanno rivista nell'ultimo trimestre.
- [ ] Esiste un unico percorso di accettazione e le richieste dei canali laterali sono reindirizzate verso di esso.
- [ ] Un ruolo per le interruzioni con un perimetro scritto ruota all'interno del team.
- [ ] La corsia di urgenza ha un limite, un test di ingresso e una registrazione di ciò che ogni urgenza ha spostato.
- [ ] Gli elementi non pianificati portano un'etichetta di causa o un collegamento a un record di problema e le ripetizioni sono riviste ogni mese.
- [ ] Le misure sono riportate a livello di team e di servizio e mai usate per classificare le persone.

## Prompt IA

**Progettare una classificazione del lavoro per l'accettazione.**

```text
Il nostro team è [descrizione del team, per esempio un team di piattaforma di sei
persone che costruisce e supporta un servizio interno]. Usiamo [tracker o
strumento ITSM]. Vogliamo etichettare ogni elemento all'accettazione come
modifica, esercizio o miglioramento, e come pianificato o non pianificato.
Redigi definizioni chiare di una frase per ciascun valore, tre casi limite su cui
le persone discuteranno con una decisione suggerita per ciascuno e un breve
modulo di accettazione. Non inventare funzionalità del nostro strumento né valori
di riferimento. Elenca le tue ipotesi e le domande a cui devo rispondere per
affinare le definizioni.
```

**Analizzare un registro delle interruzioni alla ricerca di schemi.**

```text
Ecco una sintesi delle nostre interruzioni nel periodo [periodo]: [incolla
conteggi anonimizzati per fonte, giorno e tipo, senza nomi di persone].
Raggruppale in fonti che potrebbero essere rimosse, instradate a una persona,
raggruppate o accettate. Per ciascun gruppo, suggerisci un esperimento e una
misura per capire se ha funzionato. Non inventare valori di riferimento né
confrontarci con altre organizzazioni. Elenca le tue ipotesi e i dati che ti
servirebbero per essere più sicuro.
```

**Redigere una politica per la corsia di urgenza.**

```text
Lavoriamo con [lavagna di flusso, pianificazione a tempo definito, flusso
continuo o un ibrido] con un team di [dimensione del team] e un livello di
servizio di [livelli di servizio, se presenti]. Redigi una politica di una pagina
per le urgenze con un test di ingresso basato su un costo del ritardo dichiarato,
un limite agli elementi nella corsia, una regola su che cosa accada all'elemento
spostato e un elenco di domande di revisione mensile. Mantieni neutro il
linguaggio ed evita di nominare persone. Non inventare soglie; segna quelle che
devo scegliere io. Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare quale argomento possiede una metrica correlata, come il volume degli incidenti o il toil, e la salvaguardia che deve affiancarla.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una versione modificata di questo argomento mantenga allineati cronometri, regole di classificazione e tabella di manipolazione.

## Punti chiave

- Lavoro pianificato e non pianificato, e lavoro di modifica e di esercizio, condividono un unico bacino di capacità, perciò si renda visibile la ripartizione e la si concordi con deliberazione.
- Si etichetti il lavoro all'accettazione e si congeli un'istantanea di pianificazione, poiché «non pianificato» significa qualcosa solo rispetto a un piano registrato.
- Le interruzioni costano tempo di recupero oltre ai minuti, perciò le si instradi verso un ruolo nominato e se ne faccia triage alla porta.
- Una corsia di urgenza ha bisogno di un limite, di un test di ingresso e di una registrazione di ciò che ogni urgenza ha spostato.
- Il lavoro non pianificato ripetuto è il segnale più forte per la gestione dei problemi e per il lavoro di miglioramento, e la quota di ripetizioni mostra se le correzioni arrivano a segno.
- Si riporti a livello di team e di servizio, si confronti un team con la propria storia e non si classifichino mai le persone.

## Riferimenti e letture di approfondimento

1. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Rau, V., "Eliminating Toil," chapter 5 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/eliminating-toil/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Kim, G., Behr, K., and Spafford, G., *The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win*, IT Revolution Press, 2013.
8. DeMarco, T., *Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency*, Broadway Books, 2001.
9. Mark, G., Gudith, D., and Klocke, U., "The cost of interrupted work: more speed and stress," in *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2008)*, ACM, 2008.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Kanban (development)](https://en.wikipedia.org/wiki/Kanban_(development)).
12. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
13. Wikipedia, [Task switching (psychology)](https://en.wikipedia.org/wiki/Task_switching_(psychology)).
14. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
16. Wikipedia, [Triage](https://en.wikipedia.org/wiki/Triage).
17. Wikipedia, [Class of service](https://en.wikipedia.org/wiki/Class_of_service).
18. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
