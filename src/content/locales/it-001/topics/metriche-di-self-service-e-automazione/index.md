# Metriche di self-service e automazione

**Misuri il self-service in base al fatto che le persone abbiano ottenuto ciò di cui avevano bisogno senza aiuto, e misuri l'automazione in base al lavoro che elimina e ai guasti che crea, perché un contatto che non è mai arrivato è un successo solo se il problema è stato risolto.**

## Panoramica e motivazione

Self-service e automazione sono i due modi principali con cui un'organizzazione di servizio toglie alle proprie persone il lavoro di routine. Il [self-service](https://en.wikipedia.org/wiki/Self-service_software) permette a un utente di risolvere un problema o di ottenere qualcosa da solo, tramite un portale, un articolo di conoscenza, una pagina di reimpostazione della password o un [chatbot](https://en.wikipedia.org/wiki/Chatbot). L'[automazione](https://en.wikipedia.org/wiki/Automation) permette a un sistema di eseguire i passaggi che prima eseguiva una persona, come creare un account, riavviare un servizio o chiudere un ticket una volta che un monitor conferma il recupero. Entrambi mirano allo stesso risultato: meno compiti ripetitivi per le persone, risultati più rapidi per gli utenti e più tempo per il lavoro che richiede giudizio.

Le idee corrispondono a entrambe le tradizioni. In [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la pratica di gestione delle richieste di servizio prevede che le richieste ben comprese e ripetibili siano gestite attraverso flussi standard con tutta l'automazione ragionevole, e le pratiche di gestione degli incidenti e della conoscenza prevedono che informazioni di qualità siano disponibili per gli utenti e per il personale di supporto nel primo punto utile. La pratica agile e DevOps arriva allo stesso punto per un'altra strada: l'[infrastruttura come codice](https://en.wikipedia.org/wiki/Infrastructure_as_code), le pipeline e la disciplina di eliminare il toil, che i libri sulla site reliability engineering di Google definiscono come lavoro manuale, ripetitivo, automatizzabile e che cresce con il servizio. L'idea condivisa è spesso chiamata «shift left»: spostare la risoluzione di un problema verso l'utente, o verso il punto più economico e più precoce della catena di supporto, e lontano dalla coda degli specialisti.

Il linguaggio dello shift-left invita a un errore di misurazione. I team vedono che un contatto evitato è economico e poi contano i contatti evitati come successo. Il conteggio è facile da produrre, perché una visita al portale che non è finita in un ticket appare identica a una visita in cui l'utente ha rinunciato. Questo argomento parte quindi dall'esito dell'utente. Definisce che cosa significhi successo del self-service, come stimare la deflessione senza attribuirsi il merito dell'abbandono, come misurare copertura e affidabilità dell'automazione e come vedere l'effetto shift-left su volume e complessità. Le misure correlate di volume e priorità sono nell'Argomento 3.2 «Volume e priorità degli incidenti», il lato delle richieste è nell'Argomento 3.5 «Metriche di evasione delle richieste di servizio» e il lato della conoscenza è nell'Argomento 3.6 «Metriche di gestione della conoscenza».

Termini usati in questo argomento:

- **Livello 0 (o livello self-service)**: risoluzione da parte dell'utente senza contattare il personale. Il livello 1 è la prima linea di supporto, di solito il service desk, e i livelli 2 e 3 sono i livelli specialistico e ingegneristico.
- **Deflessione**: un contatto che altrimenti sarebbe arrivato al personale e che è stato invece risolto al livello 0. Non può essere osservata direttamente, perciò è sempre una stima.
- **Ricaduta (fall-through)**: un utente che ha provato il self-service, non ci è riuscito e poi ha contattato il personale per la stessa esigenza.
- **Runbook**: una procedura documentata per un compito operativo di routine. Un [runbook](https://en.wikipedia.org/wiki/Runbook) è il consueto primo passo verso la sua automazione.
- **Toil**: lavoro manuale, ripetitivo, automatizzabile e privo di valore duraturo (si veda l'Argomento 5.7 «Metriche di toil e reperibilità»).
- **Catalogo dei servizi**: l'elenco dei servizi e delle richieste standard offerti agli utenti. ITIL lo chiama «service catalogue».

## Principi chiave

- **Contare gli esiti, non i contatti evitati.** Una sessione di portale senza ticket è un successo solo quando l'esigenza dell'utente è stata soddisfatta. Definire il successo dal lato dell'utente e verificarlo con un segnale successivo.
- **La deflessione è una stima, quindi etichettarla come tale.** Dichiarare il metodo, il confronto usato e l'incertezza. Non presentare mai una cifra di deflessione stimata come un fatto misurato.
- **Misurare il percorso di ricaduta.** Il tragitto da un tentativo di self-service fallito a un contatto con il personale è dove si nasconde la maggior parte dei fallimenti. Riportarlo accanto a ogni numero di successo.
- **L'automazione ha un lato di costo.** Ogni flusso automatizzato richiede manutenzione, monitoraggio e un modo per fallire in sicurezza. Misurare insieme copertura e affidabilità e contare lo sforzo speso per mantenere viva l'automazione.
- **Lo shift left cambia la composizione oltre al volume.** Quando il lavoro facile esce dalla coda, il lavoro restante è in media più difficile e più lento. Leggere tempo di risoluzione e tempo di gestione tenendone conto (si veda l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»).
- **Le metriche descrivono servizi e flussi.** Riportare per voce di catalogo, famiglia di articoli o flusso di automazione. Non classificare mai gli operatori in base a quanti utenti hanno indirizzato al self-service.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasso di successo del self-service | Quota di sessioni di self-service in cui l'esigenza dell'utente è stata soddisfatta senza contatto con il personale | Sessioni concluse con un esito completato (richiesta inviata ed evasa, articolo segnato come utile, reimpostazione completata) senza contatti con il personale sulla stessa esigenza entro 7 giorni, divise per tutte le sessioni che hanno avviato un compito. Il cronometro parte alla prima azione significativa nel portale e si ferma al completamento o all'abbandono. Esclude traffico di bot, account di prova e semplice navigazione | Percentuale | Log del portale e dell'identità, sistema di ticket, analytics delle sessioni | Gestione delle richieste di servizio; gestione della conoscenza | Ciclo di feedback dei clienti; criteri di accettazione basati sui risultati | Mensile |
| Tasso stimato di deflessione | Quota stimata di domanda risolta al livello 0 che altrimenti sarebbe arrivata al personale | Confrontare il tasso di contatto ogni 1.000 utenti attivi per un servizio prima e dopo una modifica di self-service, oppure rispetto a un gruppo di controllo, corretto per gli spostamenti noti della domanda. Dichiarato come stima con il metodo indicato. Esclude i contatti spostati su un altro canale | Percentuale (stima) | Sistema di ticket, conteggi della popolazione di utenti, dati di esperimento o di coorte | Service desk; gestione degli incidenti | Esperimento con gruppo di controllo; test A/B | Trimestrale |
| Tasso di ricaduta | Quota di tentativi di self-service falliti che si concludono con un contatto con il personale sulla stessa esigenza | Contatti con il personale aperti entro 7 giorni da una sessione di self-service abbandonata o non riuscita dello stesso utente sullo stesso argomento, divisi per le sessioni non riuscite. Il cronometro parte alla fine della sessione. Esclude i contatti non correlati | Percentuale | Log del portale uniti al sistema di ticket per utente e argomento | Service desk; gestione della conoscenza | Percorso di escalation in una definizione di completato; feedback dal supporto | Mensile |
| Adozione del self-service (quota portal-first) | Quota di richieste e segnalazioni di incidenti idonee aperte tramite canali di self-service | Elementi creati tramite portale, bot o API, divisi per tutti gli elementi per le voci di catalogo che offrono un percorso di self-service. Esclude gli elementi per i quali non esiste un percorso di self-service | Percentuale | Campo canale del sistema di ticket, configurazione del catalogo | Gestione delle richieste di servizio; gestione del catalogo dei servizi | Monitoraggio dell'adozione dopo un rilascio | Mensile |
| Copertura dell'automazione | Quota di lavoro ripetibile idoneo completato dall'automazione senza alcun passaggio manuale | Elementi completati da un flusso automatizzato end-to-end, divisi per tutti gli elementi di tipi giudicati automatizzabili. Conta il tipo come automatizzabile solo se un elenco scritto di candidati lo nomina. Esclude il lavoro una tantum e gli elementi che l'automazione ha rifiutato | Percentuale | Sistema di ticket, log della piattaforma di automazione, elenco dei candidati | Gestione delle richieste di servizio; gestione dei rilasci | Automazione della definizione di completato; pipeline come codice | Mensile |
| Tasso di fallimento e rilavorazione dell'automazione | Quota di esecuzioni automatizzate fallite, che hanno richiesto una riparazione manuale o che hanno prodotto un esito poi corretto | Esecuzioni automatizzate che hanno dato errore, sono state annullate o sono state seguite da una correzione manuale entro 7 giorni, divise per tutte le esecuzioni automatizzate. Il cronometro parte all'avvio dell'esecuzione. Esclude le prove a vuoto pianificate | Percentuale | Log della piattaforma di automazione, sistema di ticket, registrazioni delle modifiche | Abilitazione delle modifiche; gestione degli incidenti | Tasso di fallimento delle modifiche; stabilità di build e test | Settimanale |
| Tempo di intervento manuale per tipo di richiesta | Sforzo del personale speso su un tipo di richiesta candidato all'automazione | Minuti di lavoro effettivo registrati dal personale sugli elementi del tipo nel periodo, sintetizzati come mediana e 85º percentile per elemento. Stimato per campionamento dove il tempo non è registrato. Esclude il tempo di attesa | Minuti per elemento | Campionamento dei tempi, registri di lavoro dei ticket | Gestione delle richieste di servizio | Monitoraggio del toil; sprechi nel flusso di valore | Trimestrale |
| Distribuzione per livello (quota shift-left) | Dove nella catena di supporto gli elementi vengono risolti | Elementi risolti a ciascun livello (0, 1, 2, 3) divisi per tutti gli elementi risolti nel periodo. Il livello è il livello più alto che ha svolto lavoro effettivo. Esclude gli elementi annullati prima del triage | Percentuale per livello | Gruppo risolutore del sistema di ticket e storico delle assegnazioni | Gestione degli incidenti; service desk | Schemi di swarming ed escalation; team multifunzionali | Mensile |

Tutte queste sono misurate per servizio, voce di catalogo o flusso, mai per persona. Le misure di tempo andrebbero mostrate come mediana più un percentile alto, come spiega l'introduzione all'argomento sull'alfabetizzazione statistica (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

## Raccomandazioni

### Definire il successo dal lato dell'utente

**1. Metta per iscritto che cosa significhi «ho ottenuto ciò di cui avevo bisogno» per ciascun percorso di self-service.** Per una reimpostazione di password è una reimpostazione completata e un accesso riuscito. Per una richiesta è l'evasione, non l'invio. Per un articolo è un utente che non ha contattato di nuovo il personale per la stessa esigenza. Una definizione che si ferma a «ha visualizzato la pagina» misura il traffico.

**2. Unisca le sessioni di self-service ai contatti successivi.** La prova più forte di fallimento è un contatto con il personale sullo stesso argomento poco dopo una sessione. Colleghi i due per utente e argomento dove le regole sulla privacy lo consentono e, dove non lo consentono, usi conteggi aggregati per argomento e giorno. L'unione trasforma una vaga storia di soddisfazione in un tasso di ricaduta che si può migliorare.

**3. Chieda agli utenti con una sola domanda al momento dell'uscita.** Una domanda come «Questo ha risolto il Suo problema?» fornisce un segnale diretto che i log non possono dare. Tratti le risposte come un campione, legga i commenti a testo libero e confronti chi risponde con chi non risponde, così che gli utenti più soddisfatti non definiscano il risultato (si veda l'Argomento 6.1 «Metriche di soddisfazione del cliente»).

### Stimare la deflessione con onestà

**4. Preferisca un confronto a un contatore.** La stima più pulita viene da un gruppo di controllo, da un rilascio a fasi o da una vista prima-e-dopo dei contatti ogni 1.000 utenti attivi per il servizio interessato. Contare le «sessioni che non sono diventate ticket» sovrastima l'effetto, perché molti di quegli utenti non avevano mai avuto un'esigenza che il personale avrebbe visto. Dichiari il metodo e l'incertezza accanto alla cifra.

**5. Normalizzi il volume rispetto all'utilizzo.** Un calo del numero di ticket può seguire un calo di utenti, un ciclo di rilascio tranquillo o un cambiamento stagionale. Divida per utenti attivi o per transazioni prima di trarre conclusioni (si veda l'Argomento 3.2 «Volume e priorità degli incidenti»). Annoti il grafico con rilasci, campagne e modifiche al portale.

**6. Tenga la deflessione fuori dagli obiettivi.** Un obiettivo di deflessione premia il nascondere il percorso di contatto, il seppellire il numero di telefono e il chiudere anticipatamente le sessioni di chat. Usi la deflessione come stima di apprendimento e lasci che l'obiettivo poggi sugli esiti per gli utenti, come il tasso di successo del self-service e l'elemento irrisolto più vecchio.

### Misurare l'automazione come un prodotto, non come un progetto

**7. Tenga un elenco di candidati e misuri la copertura rispetto a esso.** La copertura di «tutto il lavoro» è una misura scadente, perché la maggior parte del lavoro non è automatizzabile. Tenga un breve elenco scritto di tipi di richiesta e di incidente che sono ripetibili, ben compresi e frequenti, lo ordini per tempo di intervento manuale e volume e riporti la copertura rispetto a quell'elenco. Riveda l'elenco ogni trimestre in modo che il denominatore sia onesto.

**8. Abbini la copertura all'affidabilità.** Un flusso automatizzato che fallisce una volta su dieci, o che produce silenziosamente il risultato sbagliato, può costare più del compito manuale che ha sostituito. Tracci tasso di fallimento e rilavorazione, tempo di rilevamento di un'esecuzione fallita e con quale frequenza una persona deve riparare l'esito. Usi le pratiche di gestione degli errori che la comunità della site reliability engineering descrive: passaggi idempotenti, avvisi chiari e un ripiego manuale sicuro (si veda l'Argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi»).

**9. Conti la manutenzione.** Le automazioni richiedono responsabili, controllo di versione, test e aggiornamenti quando i sistemi circostanti cambiano. Registri il tempo speso per mantenere ciascun flusso e lo confronti con il tempo di intervento manuale che ha eliminato. Un'automazione che costa più da mantenere di quanto fa risparmiare è candidata al ritiro, il che è un risultato normale, non un fallimento.

### Osservare l'effetto shift-left

**10. Si aspetti che il lavoro restante sia più difficile.** Quando i contatti di routine lasciano il service desk, il tempo medio di gestione e la risoluzione al primo contatto al livello 1 spesso peggiorano anche se il servizio è migliore. Riporti la distribuzione per livello e la composizione per categoria accanto a queste misure, e concordi in anticipo con la direzione che un aumento del tempo di gestione dopo una deflessione riuscita è atteso (si veda l'Argomento 3.1 «Metriche del service desk»).

**11. Chiuda il cerchio con la conoscenza e la gestione dei problemi.** Ogni ricaduta è evidenza di un articolo mancante o scadente, di un modulo confuso o di un difetto non corretto. Invii i principali argomenti di ricaduta ai responsabili della conoscenza e, dove la causa è un difetto, alla gestione dei problemi (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»). Riveda l'elenco ogni mese e riporti quanti elementi sono stati corretti.

**12. Condivida la capacità che libera.** Se automazione e self-service eliminano lavoro, decida che cosa il tempo liberato acquista: lavoro di miglioramento, correzioni proattive o formazione. I team che non vedono alcun beneficio dall'automazione smettono di proporla. Tracci nel tempo la quota pianificata di capacità per il miglioramento (si veda l'Argomento 2.9 «Lavoro operativo e lavoro non pianificato»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tasso di successo del self-service | Contare come successo qualsiasi modulo completato o qualsiasi visualizzazione di pagina; rimuovere la domanda «è stato utile» quando i punteggi calano; escludere gli argomenti difficili dal denominatore | Tasso di ricaduta e un campione di sessioni chiuse letto da una persona; riportare le regole del denominatore |
| Tasso stimato di deflessione | Nascondere il percorso di contatto; aggiungere passaggi prima del contatto; classificare ogni calo di ticket come deflessione a prescindere dalla causa | Contatti ogni 1.000 utenti attivi, soddisfazione degli utenti sul servizio interessato e il metodo scritto accanto al numero |
| Tasso di ricaduta | Definire la finestra di corrispondenza così breve che i ritorni cadano fuori; chiudere il contatto successivo come duplicato | Tasso di contatti ripetuti su tutti i canali; revisione di un campione di contatti tornati |
| Adozione del self-service (quota portal-first) | Forzare tutte le richieste nel portale a prescindere dall'adeguatezza; rietichettare come ticket del portale i ticket creati per telefono | Tasso di successo del self-service e sforzo dell'utente; quota di richieste che non hanno un percorso di portale praticabile |
| Copertura dell'automazione | Scegliere voci facili per l'elenco dei candidati; far crescere il denominatore con compiti banali; contare come automatizzati flussi in parte manuali | Elenco scritto dei candidati rivisto ogni trimestre; tasso di fallimento e rilavorazione dell'automazione; tempo di intervento manuale delle voci restanti |
| Tasso di fallimento e rilavorazione dell'automazione | Escludere dal conteggio le riparazioni manuali; lasciare che le esecuzioni fallite riprovino silenziosamente finché riescono; etichettare i fallimenti come «prove a vuoto pianificate» | Registrazioni di incidenti e avvisi collegate ai flussi; tempo di rilevamento di un'esecuzione fallita; audit a campione degli esiti |
| Tempo di intervento manuale per tipo di richiesta | Non registrare il tempo per elementi che sembrano manuali; assegnare il tempo a un'altra categoria; campionare solo i giorni tranquilli | Piano di campionamento scritto e rivisto; confronto con cycle time e anzianità della coda per lo stesso tipo |
| Distribuzione per livello (quota shift-left) | Aumentare la quota risolta al livello 1 riclassificando le escalation, oppure chiudendo elementi al livello 1 e riaprendoli al livello 2 come nuovi elementi | Tasso di riapertura e tasso di ticket collegati; campione sulla qualità della risoluzione; soddisfazione dei clienti per livello |

Una lettura sana mostra il successo del self-service in crescita insieme a un tasso di ricaduta stabile o in calo, la deflessione stimata dichiarata con il suo metodo, la copertura dell'automazione in crescita rispetto a un elenco di candidati rivisto mentre fallimento e rilavorazione restano bassi, e una distribuzione per livello che sposta il lavoro più in anticipo senza alzare i tassi di riapertura né abbassare la soddisfazione. Se un numero migliora mentre la sua salvaguardia peggiora, tratti il miglioramento come non dimostrato.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Prima il self-service | Risultati immediati per gli utenti, costo marginale inferiore, disponibile a qualsiasi ora | Gli utenti con esigenze complesse o insolite possono sentirsi abbandonati; contenuti deboli creano più contatti di quanti ne eliminino |
| Prima il contatto con il personale | Aiuto personale, giudizio e la possibilità di notare problemi insoliti | Più lento, costoso e dipendente dalla disponibilità del personale |
| Stimare la deflessione con un gruppo di controllo | Evidenza credibile dell'effetto | Richiede lavoro di progettazione e tolleranza per un gruppo che non riceve la modifica |
| Contare le sessioni senza ticket | Economico e sempre disponibile | Sovrastima il successo; invita alla manipolazione; non distingue il successo dall'abbandono |
| Automazione estesa | Esecuzione coerente e meno toil | Onere di manutenzione, modalità di guasto che scalano e competenze che possono svanire dal team |
| Automazione selettiva di flussi stabili | Miglior ritorno per lo sforzo e meno sorprese | Lascia in essere un po' di lavoro manuale, che richiede attenzione propria |

La risposta in prosa è automatizzare ciò che è frequente, stabile e ben compreso, e tenere una persona disponibile dove l'esigenza è poco chiara o la posta in gioco è alta. Il self-service dovrebbe essere giudicato in base al fatto che le persone siano state aiutate, con il percorso presidiato dal personale mantenuto visibile. I risparmi dello shift-left sono reali solo quando l'esito per l'utente regge, perciò si contino entrambi i lati.

## Domande da discutere con il team

**1. Quando un utente apre il portale e se ne va senza aprire un ticket, che cosa supponiamo sia accaduto, e come potremmo scoprirlo?**
Chieda al gruppo di elencare le storie possibili: l'utente ha trovato la risposta, ha rinunciato, ha telefonato invece, oppure ha chiesto a un collega. Osservi quali dati le separerebbero, come un contatto successivo, una domanda all'uscita o un campione di sessioni. Chi facilita registri quale ipotesi è attualmente nella dashboard e chi vi fa affidamento. Concluda concordando una modifica che sostituisca un'ipotesi con un'evidenza.

**2. Come stimiamo oggi la deflessione, e difenderemmo il metodo di fronte a un partner finanziario scettico?**
Ripercorra il calcolo passo dopo passo, compresi il gruppo di confronto e le correzioni per i cambiamenti di domanda. Chieda che altro è cambiato nel periodo, come rilasci, interruzioni o cambi di personale. Annoti l'intervallo di valori plausibili oltre alla cifra principale. La discussione dovrebbe concludersi con una dichiarazione semplice del metodo che possa stare accanto al numero.

**3. Quali delle nostre automazioni spegneremmo domani se ne conoscessimo il vero costo?**
Elenchi i flussi automatizzati con responsabili, data dell'ultima modifica, numero di esecuzioni, tassi di fallimento e sforzo di manutenzione. Chieda quali nessuno rimpiangerebbe e quali le persone hanno paura di toccare. Chi facilita tratti il ritiro come un risultato legittimo. Le risposte rivelano spesso flussi senza responsabile.

**4. Che cosa accade a un utente il cui tentativo di self-service fallisce, e quanto tempo gli serve per raggiungere una persona?**
Chieda a qualcuno di percorrere il tragitto come lo farebbe un utente, compresa la ricerca del percorso di contatto. Lo cronometri e annoti ogni passaggio che potrebbe essere accorciato. Confronti l'esperienza con l'intento dichiarato del portale. Il gruppo dovrebbe decidere se il percorso è facile da trovare quanto il percorso di self-service.

**5. Com'era la composizione del lavoro del service desk un anno fa, e com'è ora?**
Esamini nel tempo la composizione per categoria e la distribuzione per livello. Discuta perché il tempo di gestione o la risoluzione al primo contatto si sono mossi e se ciò rifletta una composizione più difficile. Chieda se la direzione è stata informata che ciò è atteso. Concordi come presentare l'andamento in modo che un aumento del tempo di gestione dopo uno shift left riuscito non venga letto come un declino.

**6. Che cosa faremmo con la capacità che l'automazione libera, e chi decide?**
Stimi le ore eliminate dal lavoro manuale e indichi che cosa dovevano acquistare. Chieda se il tempo è andato al lavoro di miglioramento o è stato assorbito da nuova domanda. Discuta come il team lo saprebbe. Chi facilita spinga a un impegno concreto, come una quota di capacità riservata alla correzione dei principali argomenti di ricaduta.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna sono responsabili di gran parte di ciò che rende efficace il self-service: messaggi di errore chiari, moduli utilizzabili, aiuto nel prodotto e la possibilità di svolgere compiti senza aprire un ticket. Sono anche responsabili dell'automazione che vive nelle pipeline e nel codice dell'infrastruttura. Le loro misure utili sono il successo del self-service sulle proprie funzionalità e i passaggi manuali rimasti nel lavoro di rilascio e di ambiente, trattati come toil da eliminare (si veda l'Argomento 2.8 «Metriche DORA»). Dovrebbero leggere gli argomenti di ricaduta come un backlog di prodotto.

### Team di servizio e operations

I team operativi si fanno carico del patrimonio di automazione e del ripiego presidiato dal personale. Dovrebbero tracciare affidabilità dell'automazione, carico di manutenzione e tempo di intervento manuale residuo, e dovrebbero osservare la distribuzione per livello senza essere penalizzati per il lavoro più difficile che resta. Gli operatori dovrebbero essere consultati su quali richieste siano buoni candidati all'automazione, perché sanno dove si trova l'attrito reale. Si riporti per flusso e tipo di richiesta, mai per operatore.

### Leadership e governance

I responsabili sono tentati di trattare la deflessione come una cifra di risparmio. Una richiesta migliore riguarda l'esito per l'utente, il metodo dietro qualsiasi stima e l'affidabilità dell'automazione. La governance dovrebbe attendersi un elenco di candidati, un responsabile per ciascun flusso automatizzato e una regola di ritiro. I responsabili dovrebbero anche proteggere il percorso presidiato dal personale dal venire nascosto per rispettare un obiettivo (si veda l'Argomento 11.3 «Introdurre le metriche senza generare paura»).

### Clienti e utenti

Gli utenti vogliono andare avanti con il proprio lavoro. Molti preferiscono il self-service quando funziona e quasi tutti detestano restarne intrappolati quando non funziona. La loro esperienza è colta al meglio da domande su sforzo ed esito al momento dell'uscita e dal fatto che un tentativo fallito conduca rapidamente a una persona (si veda l'Argomento 6.4 «Esperienza degli utenti e dei dipendenti»). Gli utenti con esigenze di accessibilità o con poca confidenza sono un segnale precoce per i portali che funzionano solo per l'utente medio.

## In pratica: un esempio di ITIL agile

Il reparto IT di un rivenditore online di medie dimensioni gestisce un service desk, un team di piattaforma e diversi team di prodotto. I numeri di questo esempio sono illustrativi.

Il reparto lancia un portale riprogettato con reimpostazione guidata della password, un flusso di richiesta di accesso al software e un chatbot per le domande comuni. Tre mesi dopo il report del portale mostra che il 62 per cento delle sessioni termina senza ticket, e un responsabile propone di chiamarla «deflessione» e di fissare un obiettivo del 70 per cento. Il responsabile del service desk è a disagio, perché gli operatori riferiscono che le persone che telefonano dicono di aver «provato prima il portale».

Il team rivede le misure. Definisce il successo del self-service come un esito completato senza contatti con il personale sullo stesso argomento entro 7 giorni. Con tale definizione il tasso di successo è del 48 per cento, non del 62, e il tasso di ricaduta per il flusso di richiesta di accesso è del 31 per cento. Leggendo un campione di 40 contatti di ricaduta, scoprono che la maggior parte degli utenti non riusciva a capire quale di due voci di catalogo simili scegliere e che il chatbot rispondeva a una domanda su uno strumento ritirato.

Il team prende tre decisioni. Primo, la misura principale diventa il successo del self-service, con la deflessione stimata mostrata solo come stima trimestrale basata sui contatti ogni 1.000 utenti attivi, e nessun obiettivo è fissato sulla deflessione. Secondo, le due voci di catalogo simili vengono accorpate, il contenuto del chatbot viene corretto e i due principali argomenti di ricaduta vengono aggiunti al backlog di miglioramento con un responsabile. Terzo, un processo manuale per creare ambienti di test, che richiede agli ingegneri di piattaforma una mediana di 25 minuti (illustrativo) e avviene circa 40 volte al mese (illustrativo), viene aggiunto all'elenco dei candidati all'automazione.

Il team di piattaforma automatizza il flusso degli ambienti entro il trimestre. Un rischio di manipolazione compare rapidamente: la cifra di copertura del flusso sale, ma il tasso di fallimento e rilavorazione mostra che un'esecuzione su otto (illustrativo) richiede una riparazione manuale e che le riparazioni erano state registrate come «manutenzione pianificata». Il team aggiunge le esecuzioni riparate al conteggio dei fallimenti, collega le esecuzioni alla registrazione dell'incidente e concorda di rivedere il flusso ogni mese. Alla revisione successiva il tasso di successo è salito al 57 per cento (illustrativo), il tasso di ricaduta è calato e il tempo di gestione del service desk è salito leggermente perché i contatti rimasti sono più difficili. Il responsabile IT concorda di presentare il tempo di gestione insieme alla distribuzione per livello, per evitare di leggere l'aumento come declino.

## Lente di settore

**Startup.** I fondatori possono spesso correggere un percorso di self-service scadente parlando con l'utente. Misurate il successo con una sola domanda all'uscita e qualche lettura di sessioni reali, e automatizzate i due o tre compiti che interrompono più persone. Evitate di costruire un bot prima che le risposte scritte siano buone.

**Piccola impresa.** Una sola persona può gestire l'IT per tutti, perciò il self-service significa soprattutto buone guide brevi e un modulo di richiesta condiviso. L'automazione della creazione di account e delle reimpostazioni di password si ripaga rapidamente, purché qualcuno sia responsabile di ciascun flusso. Mantenete ovvio il percorso presidiato dal personale, perché altrimenti il personale del titolare aggirerà il sistema.

**Grande impresa.** La scala rende maggiori sia il beneficio sia la manipolazione. Standardizzate le definizioni tra le unità di business, mantenete un elenco centrale di candidati e un registro delle automazioni e riportate per servizio e voce di catalogo. Attenzione a confrontare unità che servono popolazioni di utenti molto diverse.

**Pubblica amministrazione e settore pubblico.** Accessibilità, accesso linguistico e obbligo di servire le persone che non possono usare i canali digitali sono input di progettazione, non extra. Mantenete disponibili e misurati i percorsi assistiti, documentate le decisioni automatizzate che incidono sulle persone e aspettatevi domande di audit su chi sia responsabile di ciascun flusso automatizzato (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

Le motivazioni sono meno contatti ripetitivi, risultati più rapidi per gli utenti, un'esecuzione più stabile dei compiti di routine e più capacità per il lavoro di miglioramento. Il lato dei costi comprende la costruzione e la manutenzione del portale e dei contenuti, il lavoro di integrazione e dei dati per unire le sessioni ai ticket, la piattaforma di automazione e il tempo per scrivere, collaudare e gestire ciascun flusso automatizzato. I campioni del tempo del personale e un breve sondaggio all'uscita costano poco e forniscono la maggior parte delle evidenze necessarie.

Il ritorno va argomentato dai Suoi dati. Usi il tempo di intervento manuale e il volume per stimare lo sforzo che un'automazione elimina, sottragga la manutenzione e il costo dei fallimenti e riporti il risultato come intervallo con le sue ipotesi. Per il self-service, usi il tasso di ricaduta e gli esiti campionati per mostrare la quota di contatti evitati perché gli utenti sono stati aiutati, non semplicemente respinti. Non importi percentuali di deflessione o di risparmio da fornitori o sondaggi; misuri prima la Sua base di partenza. Il costo totale di proprietà di un'automazione comprende le modifiche di cui avrà bisogno man mano che i sistemi circostanti evolvono, perciò le metta a budget.

## Anti-pattern e insidie

- **Contare come successo le sessioni senza ticket.** Non può separare l'aiuto dall'abbandono. Definisca il successo in base all'esito e lo verifichi con ricaduta e feedback all'uscita.
- **Obiettivi sulla deflessione.** Premiano il nascondere il percorso di contatto. Usi la deflessione come stima e fissi gli obiettivi sugli esiti per gli utenti.
- **Nascondere il numero di telefono o la chat.** Gli utenti che non riescono a raggiungere una persona aumentano il proprio sforzo e perdono fiducia. Mantenga visibile il percorso presidiato dal personale e misuri quanto tempo serve per raggiungerlo.
- **Automatizzare prima di comprendere il processo.** Il flusso codifica la confusione ad alta velocità. Documenti e semplifichi prima il runbook, poi automatizzi la versione stabile.
- **Automazione senza responsabili.** I flussi senza responsabile decadono in silenzio e falliscono nei momenti peggiori. Dia a ciascun flusso un responsabile, un test, un monitor e una regola di ritiro.
- **Ignorare il costo del fallimento.** Una cifra di copertura alta con rilavorazione non misurata è una passività nascosta. Riporti tasso di fallimento e rilavorazione insieme alla copertura.
- **Leggere un aumento del tempo di gestione come declino.** Dopo uno shift left riuscito il lavoro restante è più difficile. Mostri la distribuzione per livello e la composizione per categoria accanto alle misure di tempo.
- **Classificare gli operatori per contatti deflessi.** Produce lo spingere via gli utenti e rovina i dati. Riporti solo per servizio e flusso.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Successo del self-service e deflessione | Visite al portale e conteggi dei ticket riportati; nessuna definizione di esito | Successo definito per alcuni percorsi; deflessione citata senza metodo | Una definizione scritta di successo; ricaduta misurata; deflessione etichettata come stima | Successo e ricaduta seguiti nel tempo con feedback all'uscita; deflessione stimata per confronto | Esiti condivisi con team di prodotto e fornitori; gli argomenti di ricaduta guidano correzioni finanziate |
| Copertura e affidabilità dell'automazione | Automazione ad hoc; nessun elenco di candidati | Alcuni flussi automatizzati da singoli team; fallimenti gestiti in modo informale | Elenco di candidati, responsabili e misure di fallimento definiti per ogni flusso automatizzato | Copertura, tasso di fallimento e sforzo di manutenzione rivisti e finanziati con una cadenza | Automazione coordinata tra team e fornitori; flussi ritirati e rivisti ordinariamente |
| Effetto shift-left e uso | Volume riportato senza contesto | Distribuzione per livello tracciata da pochi team | Distribuzione per livello e composizione per categoria riportate accanto al tempo di gestione | Capacità liberata pianificata e tracciata; la direzione legge correttamente gli effetti di composizione | Capacità e apprendimento rifluiscono nei servizi e nella progettazione del catalogo in tutta l'organizzazione |

## Checklist

- [ ] Il successo del self-service è definito in base all'esito, con avvio, arresto ed esclusioni scritti.
- [ ] Il tasso di ricaduta è misurato per i principali percorsi di self-service.
- [ ] Ogni cifra di deflessione dichiara il proprio metodo ed è etichettata come stima.
- [ ] Nessun obiettivo è fissato sulla deflessione.
- [ ] Esiste una domanda di uscita di una sola domanda, o un feedback equivalente, per i percorsi chiave.
- [ ] Esiste un elenco scritto di candidati all'automazione, rivisto ogni trimestre.
- [ ] Ogni flusso automatizzato ha un responsabile, un monitor e una misura di fallimento e rilavorazione.
- [ ] Il tempo di intervento manuale è campionato per i principali tipi di richiesta.
- [ ] La distribuzione per livello è mostrata accanto al tempo di gestione e alla risoluzione al primo contatto.
- [ ] Il percorso presidiato dal personale è visibile e il suo tempo di accesso è verificato.
- [ ] I principali argomenti di ricaduta sono rivisti mensilmente e inviati ai responsabili.
- [ ] Nessuna metrica di questo argomento è riportata o posta come obiettivo per operatore.

## Prompt IA

**Verificare come stimiamo la deflessione.**

```text
Gestiamo [tipo di servizio] per [numero] utenti attivi. Riportiamo la
deflessione come [descrivi il calcolo attuale], usando dati da [strumenti].
Cambiamenti nel periodo: [rilasci, campagne, interruzioni, cambi di personale].
Esamina il metodo e spiega dove potrebbe sovrastimare o sottostimare l'effetto.
Suggerisci un confronto migliore, come un gruppo di controllo o i contatti ogni
1.000 utenti attivi, usando solo i dati che descrivo. Non inventare valori di
riferimento né obiettivi. Elenca le tue ipotesi e i dati di cui avresti bisogno
per rendere più solida la stima.
```

**Analizzare da un campione gli argomenti di ricaduta.**

```text
Di seguito [numero] contatti con il personale da [servizio] che hanno seguito
un tentativo di self-service sullo stesso argomento, con i campi [elenca i
campi] e la descrizione dell'utente. Raggruppali per probabile causa (lacuna
di contenuto, modulo confuso, difetto, accesso mancante, preferenza
dell'utente) e riporta gli schemi, non i singoli. Suggerisci quali gruppi di
cause passare ai responsabili della conoscenza, ai team di prodotto o alla
gestione dei problemi. Non fare ipotesi oltre il testo fornito. Elenca le tue
ipotesi e ciò che non hai potuto giudicare.

[incolla i contatti privati dei dati personali]
```

**Classificare i candidati all'automazione.**

```text
Ecco un elenco di tipi di richiesta e di incidente per [team]: [tipo, volume
mensile, minuti manuali mediani, variabilità, rischio se sbagliato]. Proponi
una classifica dei candidati all'automazione e spiega il ragionamento per
ciascuno, compresi l'onere di manutenzione e l'impatto del fallimento. Segnala
le voci che dovrebbero restare manuali. Usa solo i numeri che ti ho fornito e
non inventare cifre di risparmio. Elenca le tue ipotesi e le domande a cui devo
rispondere prima di impegnarmi.
```

**Progettare le salvaguardie per un flusso automatizzato.**

```text
Stiamo automatizzando [nome del flusso] per [servizio]. Processo manuale
attuale: [passaggi]. Strumenti: [piattaforma di automazione]. Proponi le
metriche da tracciare (copertura, fallimento e rilavorazione, tempo di
rilevamento di un'esecuzione fallita, sforzo di manutenzione), un modo in cui
ciascuna potrebbe essere manipolata e una salvaguardia per ciascuna. Includi un
ripiego manuale sicuro e un criterio di ritiro. Non inventare soglie né
benchmark. Elenca le tue ipotesi e tutto ciò che devi sapere sul nostro
ambiente.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare l'argomento correlato e la salvaguardia per una metrica di self-service o di automazione che intende introdurre.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che le modifiche a questo argomento mantengano ogni metrica abbinata a un vettore di manipolazione e a una salvaguardia.

## Punti chiave

- Il successo del self-service è un esito per l'utente, perciò lo definisca dal lato dell'utente e lo verifichi con ricaduta e feedback all'uscita.
- La deflessione è una stima, perciò ne dichiari il metodo e la tenga fuori dagli obiettivi.
- La copertura dell'automazione significa poco senza affidabilità, manutenzione e un elenco di candidati rivisto.
- Lo shift left aumenta la difficoltà del lavoro restante, perciò legga il tempo di gestione insieme alla distribuzione per livello e alla composizione per categoria.
- Misuri flussi, servizi e voci di catalogo, mai operatori, e mantenga visibile il percorso presidiato dal personale.

## Riferimenti e letture di approfondimento

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016 (chapter on eliminating toil).
2. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Request Management*, 2020.
6. Wikipedia, [Self-service software](https://en.wikipedia.org/wiki/Self-service_software).
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
