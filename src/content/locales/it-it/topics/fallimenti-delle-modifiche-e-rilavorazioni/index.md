# Fallimenti delle modifiche e rilavorazioni

**Si definisca una sola volta, per iscritto, che cosa sia «una modifica fallita», si colleghi ogni fallimento alla modifica che lo ha causato e si leggano fallimento e rilavorazione insieme alla velocità, in modo che un numero più basso significhi modifiche più sicure e mai semplicemente meno segnalazioni.**

## Panoramica e motivazione

Ogni modifica a un servizio in produzione comporta una certa probabilità di peggiorare le cose. Le domande pratiche sono con quale frequenza ciò accada, quanto lavoro non pianificato generi e con quale rapidità il team si riprenda. Questo argomento tratta le misure che rispondono a tali domande: la quota di modifiche che falliscono, la quota che richiede un percorso d'emergenza, i tassi di rollback e di hotfix e la rilavorazione che segue una cattiva modifica. Tratta anche la parte meno brillante della materia, cioè concordare che cosa conti come fallimento.

Prima alcuni termini. In [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la pratica chiamata abilitazione delle modifiche copre l'aggiunta, la variazione o la rimozione di qualsiasi elemento che possa influire su un servizio. Una **modifica** è dunque più ampia di una distribuzione di codice: comprende una modifica di configurazione, il rinnovo di un certificato, una regola di firewall o una migrazione di database. Una **modifica standard** è preautorizzata e a basso rischio, una **modifica normale** passa attraverso una valutazione e una **modifica d'emergenza** viene effettuata con urgenza, di solito per ripristinare un servizio o chiudere una vulnerabilità grave. Una **distribuzione** (deployment) è l'atto di mettere una versione del software in un ambiente, mentre un **rilascio** (release) rende disponibile una capacità agli utenti. I team che usano un [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle) possono distribuire il codice senza rilasciarlo (si veda l'Argomento 4.5 «Metriche di rilascio e distribuzione»).

Un **fallimento di modifica** è una modifica che porta a un servizio degradato o richiede un rimedio. Il rimedio assume diverse forme. Un [rollback](https://en.wikipedia.org/wiki/Rollback_(data_management)) riporta il sistema al suo stato precedente. Un [hotfix](https://en.wikipedia.org/wiki/Hotfix) è una patch urgente applicata al di fuori del normale ritmo di rilascio. Una correzione roll-forward rilascia una nuova modifica sopra quella difettosa. La [rilavorazione](https://en.wikipedia.org/wiki/Rework) (rework) è lo sforzo non pianificato speso per rifare o riparare qualcosa che avrebbe dovuto essere finito. In un contesto di [consegna continua](https://en.wikipedia.org/wiki/Continuous_delivery), dove piccole modifiche fluiscono spesso verso la produzione, queste misure sono la principale evidenza sul fatto che la velocità stia costando stabilità.

Le due tradizioni guardano lo stesso evento in modo diverso. La visione ITIL è organizzata attorno al record di modifica: la modifica è stata autorizzata, è riuscita e l'esito è stato registrato? Una modifica che riesce sulla carta può comunque causare un incidente un'ora dopo. La visione agile è organizzata attorno all'elemento di lavoro e alla distribuzione: la definition of done del team ha tenuto e la modifica ha causato lavoro non pianificato subito dopo? Nessuna delle due visioni è completa da sola. La ricerca alla base del programma DORA tratta il tasso di fallimento delle modifiche e il tasso di rilavorazione delle distribuzioni come le due misure di «instabilità» accanto alle misure di throughput (si veda l'Argomento 2.8 «Metriche DORA», che le definisce a livello di programma). Questo argomento approfondisce la meccanica: come definire il fallimento, come collegare gli incidenti alle modifiche, come viene contato il lavoro d'emergenza e come i numeri vengono manipolati.

Fin dall'inizio vale un'avvertenza. Queste misure descrivono un team, un servizio o una pipeline. Non descrivono mai una persona. Un tasso di fallimento delle modifiche attribuito a un singolo ingegnere insegna alle persone a evitare il lavoro rischioso e di valore, a dividere le modifiche finché i conteggi non appaiono buoni e a smettere di segnalare i problemi (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»). La [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) morde duramente qui, perché «meno fallimenti» si ottiene facilmente registrando meno fallimenti.

La tempistica degli incidenti appartiene all'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti», gli incidenti peggiori all'Argomento 3.4 «Metriche degli incidenti maggiori», il flusso di approvazione e la quota di modifiche standard all'Argomento 4.3 «Metriche di abilitazione delle modifiche», le cause radice all'Argomento 4.1 «Metriche di gestione dei problemi» e la revisione scritta all'Argomento 4.2 «Metriche di postmortem e apprendimento».

## Principi chiave

- **Il fallimento richiede un'unica definizione scritta.** I team che decidono caso per caso producono numeri che non si possono analizzare nel tempo né confrontare, e la discussione sulla definizione sostituisce la discussione sul lavoro.
- **Un fallimento deve essere riconducibile alla sua modifica.** Senza un collegamento registrato tra un incidente, un rollback o un hotfix e la modifica che lo ha causato, il tasso di fallimento è un'ipotesi.
- **Contare ogni percorso di rimedio.** Rollback, hotfix, roll-forward e workaround manuale sono quattro strade verso lo stesso evento. Una metrica che ne conta una premia i team che ne scelgono un'altra.
- **Leggere il fallimento accanto alla velocità e al ripristino.** Un tasso di fallimento delle modifiche isolato può essere migliorato modificando meno spesso, il che raramente è l'obiettivo. Lo si abbini a lead time, frequenza di distribuzione e tempo di ripristino.
- **I campioni piccoli richiedono conteggi, non solo percentuali.** Un team con otto modifiche in un mese e un fallimento ha un tasso di fallimento del 12,5 per cento che non dice quasi nulla, quindi si mostrino i conteggi e si usi una finestra più lunga (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).
- **L'emergenza è un segnale, non un peccato.** Una quota stabile e spiegata di modifiche d'emergenza è normale. Una quota in crescita di solito indica problemi a monte di qualità, pianificazione o rilevamento.

## Definizioni delle metriche

Le misure di fallimento e di rilavorazione dipendono dall'unione del record di modifica, del log delle distribuzioni e dello strumento degli incidenti. Ciascuna definizione seguente indica che cosa viene contato, che cosa è escluso e dove l'orologio parte e si ferma. I team dovrebbero copiare le definizioni nel proprio registro delle metriche e adattarle con una motivazione dichiarata.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Corrispettivo agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasso di fallimento delle modifiche | Quota di modifiche in produzione che causano un servizio degradato o richiedono un rimedio | modifiche che hanno richiesto un rollback, un hotfix, una correzione roll-forward o un incidente collegato entro la finestra di fallimento / tutte le modifiche in produzione completate nel periodo; la finestra parte al completamento della modifica e si ferma dopo un numero fisso di giorni (per esempio 7), scritto nel registro delle metriche; le modifiche ancora all'interno della finestra sono riportate separatamente ed escluse dal tasso fino alla chiusura della finestra | percentuale | Record di modifica o log delle distribuzioni uniti allo strumento degli incidenti e all'elenco degli hotfix | Abilitazione delle modifiche; gestione degli incidenti | Definition of done; difetti sfuggiti | Mensile, su una finestra mobile di 90 giorni |
| Quota di modifiche d'emergenza | Quota di modifiche effettuate attraverso il percorso d'emergenza | modifiche registrate come d'emergenza / tutte le modifiche completate nel periodo; d'emergenza significa che la normale valutazione è stata aggirata o abbreviata per urgenza, e le modifiche standard preautorizzate sono escluse da entrambi i conteggi | percentuale | Campo del tipo nel record di modifica | Abilitazione delle modifiche | Lavoro non pianificato e classe di servizio expedite | Mensile |
| Tasso di rollback | Quota di modifiche annullate con ripristino di una versione precedente | modifiche annullate dopo aver raggiunto la produzione / tutte le modifiche in produzione nel periodo; un rollback effettuato prima che la modifica raggiungesse qualsiasi utente (per esempio un canary fermato al primo passaggio) è contato separatamente | percentuale | Log delle distribuzioni e strumento di rilascio | Gestione dei rilasci; gestione delle distribuzioni | Pratiche di pipeline e di rilascio | Mensile |
| Tasso di hotfix | Quota di modifiche che sono patch urgenti applicate al di fuori del normale flusso di rilascio | modifiche contrassegnate o create su ramo come hotfix / tutte le modifiche in produzione nel periodo; il denominatore include gli hotfix stessi | percentuale | Rami o tag del controllo di versione e log delle distribuzioni | Abilitazione delle modifiche; gestione degli incidenti | Lavoro non pianificato; expedite | Mensile |
| Tasso di rilavorazione delle distribuzioni | Quota di distribuzioni che erano correzioni non pianificate per un problema di una distribuzione precedente | distribuzioni in produzione che correggono un difetto o un fallimento di una recente distribuzione precedente, entro la stessa finestra di fallimento / tutte le distribuzioni in produzione nel periodo; il lavoro successivo pianificato dalla roadmap è escluso | percentuale | Log delle distribuzioni con un collegamento o tag «fixes» e il tracker del lavoro | Abilitazione delle modifiche; miglioramento continuo | Rilavorazione; difetti sfuggiti; failure demand | Mensile |
| Tasso di collegamento modifica-incidente | Quota di incidenti risolti che registrano se una modifica li ha causati e quale | incidenti con un campo «causato da una modifica» completato (sì o no, più l'identificativo della modifica quando sì) / incidenti risolti nel periodo; l'orologio si ferma quando l'incidente è chiuso | percentuale | Strumento degli incidenti e record di modifica | Gestione degli incidenti; abilitazione delle modifiche | Revisione post-incidente; definition of done | Mensile |
| Concordanza sulla definizione di fallimento | Concordanza tra due revisori sul fatto che un campione di modifiche sia fallito | modifiche campionate per le quali due revisori indipendenti raggiungono lo stesso verdetto di fallimento usando la definizione scritta / modifiche campionate; un campione di almeno 20 modifiche estratte a caso ogni trimestre | percentuale | Foglio di revisione del campione conservato con il registro delle metriche | Miglioramento continuo; misurazione e rendicontazione | Retrospettiva | Trimestrale |

Due note sulla tabella. Il tasso di fallimento e il tasso di rilavorazione si sovrappongono ma differiscono: un fallimento annullato senza una nuova distribuzione conta nel tasso di fallimento e non nel tasso di rilavorazione. E l'unità è la modifica o la distribuzione, non l'incidente, perché una modifica può causare tre incidenti e un incidente può derivare da tre modifiche.

## Raccomandazioni

### Scrivere la definizione di fallimento prima di raccogliere qualsiasi dato

**Concordare che cosa significhi «fallita» e inserirlo nel registro delle metriche.** Una definizione praticabile è che una modifica è fallita se, entro una finestra dichiarata dal completamento, è stata annullata, ha richiesto un hotfix o una correzione roll-forward, o è stata collegata a un incidente di una gravità dichiarata o superiore. Si dichiarino la finestra (7 giorni è comune, e il valore giusto dipende da quanto rapidamente i propri servizi mostrano i problemi), la soglia di gravità dell'incidente e chi decide in un caso controverso. Si scrivano almeno cinque esempi svolti, compresi quelli scomodi come una modifica che ha degradato le prestazioni senza alcuna interruzione. Si riveda la definizione ogni anno e si registrino i cambiamenti con le relative motivazioni, in modo che una linea di tendenza possa essere riformulata se la regola si sposta.

### Collegare i fallimenti alle modifiche nel record dell'incidente

**Aggiungere un campo obbligatorio al record dell'incidente: causato da una modifica, sì o no, e l'identificativo della modifica quando sì.** Il campo dovrebbe essere completato durante la risoluzione e controllato nella revisione post-incidente (si veda l'Argomento 4.2 «Metriche di postmortem e apprendimento»). Si monitori il tasso di collegamento come metrica a sé stante. Se solo la metà degli incidenti riporta il campo, il tasso di fallimento sottostima la verità di una quantità ignota, e lo si dica accanto al numero. Si automatizzi la prima ipotesi dove possibile, per esempio elencando le modifiche completate sul servizio interessato nelle ore precedenti l'inizio dell'incidente, e si lasci che una persona la confermi.

### Contare tutti i percorsi di rimedio, non uno solo

**Definire un unico fallimento a partire da più segnali.** Si ricavino i rollback dallo strumento di distribuzione, gli hotfix dal controllo di versione o dal log dei rilasci, le correzioni roll-forward dal collegamento «fixes» e gli incidenti dallo strumento degli incidenti, quindi si deduplichi per modifica. Un team che conta solo i rollback vedrà i fallimenti svanire il giorno in cui passa a correggere in avanti. Si mantenga anche ciascun percorso come suddivisione separata, perché la composizione racconta una storia: molti hotfix e pochi rollback suggeriscono che il rollback sia difficile, il che vale la pena di correggere di per sé.

### Trattare la quota di modifiche d'emergenza come una domanda, non come un punteggio

**Rivedere le modifiche d'emergenza come gruppo, non come obiettivo.** Ogni trimestre si leggano tutte e se ne ordinino le ragioni: ripristinare un servizio, chiudere una vulnerabilità, una richiesta tardiva del business, un passaggio di pianificazione mancato o un percorso di approvazione troppo lento per il lavoro ordinario. Le ultime due sono problemi di sistema che dovrebbero essere corretti migliorando il percorso standard, in modo che le persone non abbiano bisogno di aggirarlo (si veda l'Argomento 4.3 «Metriche di abilitazione delle modifiche»). Una quota pari a zero è sospetta, perché le vere emergenze si verificano. Una quota che sale con costanza merita un record di problema (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»).

### Misurare la rilavorazione come failure demand

**Monitorare la rilavorazione come lavoro creato da un fallimento precedente.** L'idea di failure demand (domanda da fallimento) proviene dalla progettazione dei servizi: la domanda che esiste perché qualcosa non è stato fatto bene la prima volta. In termini di consegna, si contino le distribuzioni e gli elementi di lavoro il cui unico scopo è correggere una modifica recente. Ciò si collega direttamente alla divisione tra lavoro pianificato e non pianificato (si veda l'Argomento 2.9 «Lavoro operativo e lavoro non pianificato»). Si usi la quota di capacità spesa in rilavorazione come spunto di conversazione con il product owner, perché trasforma un tasso astratto in un compromesso su ciò di cui occuparsi successivamente.

### Riportare i tassi con conteggi, distribuzioni e una finestra

**Mostrare i conteggi accanto alle percentuali e usare una finestra mobile.** Un tasso di fallimento mensile per un team che distribuisce dieci volte è rumoroso. Si usi una finestra mobile di 90 giorni, si mostri il numero di modifiche e di fallimenti dietro il tasso e si dia un'indicazione approssimativa dell'incertezza (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»). Per il ripristino, si mostrino la mediana e l'85° percentile del tempo dal fallimento al ripristino anziché una media. Quando un servizio ha pochissime modifiche, si racconti la storia con un elenco dei fallimenti effettivi anziché con un tasso.

### Abbinare il fallimento alla velocità in modo che il miglioramento non possa nascondersi in nessuno dei due

**Mostrare sempre il tasso di fallimento delle modifiche accanto al lead time e alla frequenza di distribuzione.** Se il tasso di fallimento scende mentre anche la frequenza di distribuzione cala bruscamente e il lead time cresce, il team potrebbe stare raggruppando le modifiche, il che aumenta il rischio di ciascuna. Se la velocità sale e il tasso di fallimento resta stabile, il sistema sta diventando più bravo a gestire le modifiche. L'abbinamento è la principale difesa contro la manipolazione e contro la comoda convinzione che meno distribuzioni significhino distribuzioni più sicure (si veda l'Argomento 2.8 «Metriche DORA»).

### Usare i numeri per migliorare la modifica stessa

**Trasformare i dati sui fallimenti in esperimenti di ingegneria.** Si osservino le caratteristiche comuni delle modifiche fallite: dimensione, ora del giorno, tipo, numero di persone coinvolte, se toccavano componenti condivisi e se la copertura dei test era scarsa. Poi si provi un piccolo esperimento reversibile come lotti più piccoli, [test di regressione](https://en.wikipedia.org/wiki/Regression_testing) automatizzati per un'area rischiosa, un [rilascio canary](https://en.wikipedia.org/wiki/Canary_release) per la prossima modifica rischiosa o un feature toggle che separi la distribuzione dal rilascio. Si misuri di nuovo dopo una finestra completa. Lo scopo è una modifica migliore, e una metrica migliorata è soltanto un'evidenza.

### Rivedere le metriche insieme in un forum senza colpa

**Tenere una revisione mensile delle modifiche fallite con le persone che le hanno effettuate.** L'ordine del giorno ha tre punti: i conteggi e la tendenza, due o tre modifiche fallite scelte per lo studio e un'azione di miglioramento con un responsabile. Si usi la pratica della revisione senza colpa, in modo che le persone descrivano che cosa sapevano all'epoca. Si pubblichino le note della revisione insieme alle metriche. Se le persone esitano a segnalare i fallimenti per il modo in cui vengono usati i numeri, si risolva questo prima di cambiare qualsiasi altra cosa (si veda l'Argomento 11.3 «Introdurre le metriche senza generare paura»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di contromisura abbinata |
| --- | --- | --- |
| Tasso di fallimento delle modifiche | Restringere la finestra di fallimento; non collegare gli incidenti alle modifiche; classificare una cattiva modifica come «richiesta di servizio» o «manutenzione»; correggere in avanti e chiamarla una nuova modifica; raggruppare molte modifiche in una sola in modo che un unico fallimento le copra | Tasso di collegamento modifica-incidente; audit trimestrale a campione rispetto all'elenco degli incidenti; concordanza sulla definizione di fallimento; lead time e frequenza di distribuzione accanto ad esso |
| Quota di modifiche d'emergenza | Instradare il lavoro urgente attraverso il percorso standard con una falsa valutazione del rischio; instradare il lavoro ordinario come emergenza per evitare l'approvazione; dividere un'emergenza in più modifiche normali | Lettura trimestrale di tutte le modifiche d'emergenza; ragioni ordinate e riviste; quota di modifiche standard e lead time di approvazione (si veda l'Argomento 4.3 «Metriche di abilitazione delle modifiche») |
| Tasso di rollback | Correggere in avanti per evitare di registrare un rollback; mantenere in produzione una versione difettosa; trattenere le modifiche dalla produzione in modo che non ci sia nulla da annullare | Tasso di hotfix e tasso di rilavorazione accanto ad esso; distribuzione dei tempi di ripristino; campione di incidenti rispetto al log delle distribuzioni |
| Tasso di hotfix | Non etichettare gli hotfix; farli passare attraverso il ramo normale; chiamare un hotfix «un piccolo miglioramento» | Tasso di rilavorazione delle distribuzioni; audit di rami e tag; quota di lavoro non pianificato (si veda l'Argomento 2.9 «Lavoro operativo e lavoro non pianificato») |
| Tasso di rilavorazione delle distribuzioni | Non collegare le correzioni alla distribuzione di origine; etichettare una correzione come «pianificata»; raggruppare la correzione con nuove funzionalità | Collegamento «fixes» obbligatorio sulle distribuzioni correttive; revisione a campione delle distribuzioni etichettate come pianificate; tasso di fallimento delle modifiche accanto ad esso |
| Tasso di collegamento modifica-incidente | Compilare il campo con «no» senza verificare; lasciare che il campo assuma «no» come valore predefinito; chiudere gli incidenti in blocco per aumentare la percentuale | Controllo a campione delle risposte «no» nella revisione post-incidente; nessun valore predefinito; commenti dei revisori su un campione |
| Concordanza sulla definizione di fallimento | Scegliere esempi facili per il campione; revisori che sono le persone misurate; allentare la definizione in modo che tutti concordino | Campione casuale estratto da qualcuno esterno al team; includere deliberatamente casi al limite; pubblicare i disaccordi e correggere la definizione |

Una lettura sana appare così: il tasso di fallimento si colloca in un intervallo che il team comprende e spiega, il tasso di collegamento è abbastanza alto da poter fidarsi del tasso di fallimento, le modifiche d'emergenza sono poche e spiegate, e rollback e hotfix sono brevi e provati. I fallimenti sono segnalati rapidamente e discussi senza colpa. Un tasso di fallimento innaturalmente basso con un basso tasso di collegamento, una frequenza di distribuzione in calo e dimensioni dei lotti in crescita è un avvertimento, non un successo. Si tratti qualsiasi miglioramento improvviso come uno stimolo a controllare prima lo strumento di misura (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»).

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Definizione di fallimento rigorosa e automatizzata | Coerente, economica da ripetere, facile da analizzare nel tempo | Non coglie i degradi sottili; può contare come fallimenti rollback benigni |
| Revisione basata sul giudizio di ogni modifica | Coglie contesto e gravità | Lenta, soggettiva, aperta a pressioni e derive |
| Finestra di fallimento lunga (settimane) | Coglie i fallimenti ritardati | Offusca causa ed effetto; le modifiche recenti non possono ancora essere riportate |
| Contare tutti i percorsi di rimedio | Difficile da manipolare cambiando percorso | Richiede che più fonti di dati siano unite con cura |

Si usi una definizione automatizzata come base, si aggiunga una revisione umana a campione e si migliori il collegamento tra modifiche e incidenti prima di costruire qualsiasi altra cosa.

## Domande da discutere con il team

**1. Che cosa conta esattamente come modifica fallita qui e due di noi potrebbero non essere d'accordo sulla stessa modifica?**
Si prendano cinque modifiche recenti e si chieda a ciascuna persona di votare se siano fallite. Si confrontino i voti e le ragioni. I disaccordi mostrano dove la definizione scritta è carente. Si concordi una regola per i casi scomodi, come un calo di prestazioni senza un'interruzione, e la si scriva con un esempio.

**2. Come sappiamo quali incidenti sono stati causati da una modifica?**
Ci si chieda come il collegamento sia registrato oggi e chi lo compili. Si rivedano dieci incidenti recenti e si veda quanti abbiano una modifica collegata e quanti dovrebbero averla. Si discuta se il campo sia facoltativo, se assuma «no» come valore predefinito e chi lo controlli. Il facilitatore dovrebbe puntare a un miglioramento concreto del record, come un campo obbligatorio senza valore predefinito.

**3. Quali percorsi di rimedio usiamo e sono tutti contati?**
Si elenchino rollback, hotfix, correzione roll-forward, workaround manuale e disattivazione di un feature toggle. Per ciascuno, ci si chieda dove l'evento sia registrato e se alimenti il tasso di fallimento. Si notino i percorsi che non lasciano traccia. La discussione rivela spesso che il percorso preferito dal team è quello che la metrica non può vedere.

**4. Quando è stata la nostra ultima modifica d'emergenza e si sarebbe potuta evitare?**
Si ripercorrano le ultime tre o quattro. Ci si chieda che cosa abbia reso ciascuna urgente, che cosa si sapesse prima e come sarebbe stato un percorso standard migliore. Si separino le vere emergenze dalle scoperte tardive e dalle approvazioni lente. Si concordi una correzione al percorso ordinario che elimini un motivo ricorrente di emergenza.

**5. Quanta parte della nostra settimana va nella correzione di modifiche recenti?**
Si stimi la quota di capacità spesa in rilavorazione nelle ultime quattro settimane, usando il tracker anziché la memoria. Si confronti la stima con il tracker. Si parli di quanto il numero costi in lavoro pianificato e di come il product owner lo userebbe. Si scelgano uno schema di fallimento e un esperimento per ridurlo.

**6. Se il nostro tasso di fallimento dimezzasse il prossimo trimestre, ci crederemmo?**
Si immagini il titolo e ci si chieda che cos'altro dovrebbe essere vero: tasso di collegamento stabile, frequenza di distribuzione costante, ripristino rapido e nessuna nuova categoria di «manutenzione». Si discuta quali di questi controlli il team effettui già e quali manchino. Si concordi come un miglioramento improvviso verrà indagato prima di essere festeggiato.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna possiedono le modifiche, quindi possiedono la definizione di fallimento e le correzioni. Si parta dal lavoro: si osservino le modifiche fallite nella revisione, se ne individuino le caratteristiche comuni e si provino lotti più piccoli, test migliori o toggle. Si monitori la rilavorazione come parte della board, in modo che le correzioni non pianificate siano visibili accanto al lavoro pianificato. Si tengano i numeri per l'apprendimento del team stesso e si resista alla condivisione di dati a livello individuale. Se una metrica viene mostrata ai dirigenti, il team dovrebbe essere in grado di spiegare ogni modifica in essa contenuta.

### Team di servizio e operations

I team operativi vedono le conseguenze delle modifiche nella coda degli incidenti e sono nella posizione migliore per mantenere il collegamento tra incidenti e modifiche. Possono aggiungere il campo obbligatorio, controllarlo nella fase di risoluzione e restituire i risultati al team di consegna senza colpa. Le operations possiedono anche il percorso d'emergenza e dovrebbero rivederne l'uso. Si condividano le informazioni sui percorsi di ripristino e si provino i rollback insieme ai team di consegna, poiché il modo migliore per ridurre il costo del fallimento è un'abitudine condivisa di rendere le modifiche reversibili (si veda l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»).

### Leadership e governance

I dirigenti dovrebbero chiedere le tendenze per servizio, i due tipi di misura di instabilità insieme alla velocità e gli esperimenti di miglioramento che li sostengono. Si evitino obiettivi fissi come «tasso di fallimento sotto il 5 per cento», che invitano alla ridefinizione, e si eviti di usare le cifre nelle valutazioni individuali. Gli organi di governance possono usare i dati come evidenza del fatto che un percorso di approvazione più leggero sia sicuro, verificando che fallimento e ripristino siano rimasti stabili mentre i controlli venivano allentati. Una tendenza in crescita delle modifiche d'emergenza è un segnale per guardare la pianificazione e la progettazione delle approvazioni, non per incolpare gli ingegneri di reperibilità.

### Clienti e utenti

Ai clienti non interessa il tasso di fallimento. Interessa se il servizio si rompe dopo un aggiornamento e con quale rapidità torna in funzione. I dati sui fallimenti supportano una comunicazione onesta: preavviso delle modifiche rischiose, messaggi di stato chiari quando una modifica causa problemi e un impegno visibile a imparare. Dove gli utenti dipendono da un servizio per compiti critici, si concordino con loro in anticipo finestre di manutenzione e aspettative di rollback (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori»).

## In pratica: un esempio di ITIL agile

Il reparto IT di un'azienda sanitaria regionale gestisce un servizio di prenotazione dei pazienti. Un team di prodotto di sette persone rilascia modifiche diverse volte alla settimana, e un team di operations di cinque persone gestisce gli incidenti e il processo delle modifiche. Tutti i numeri di questo esempio sono illustrativi.

In un trimestre, il report mensile mostra un tasso di fallimento delle modifiche del 4 per cento, in calo rispetto all'11 per cento del trimestre precedente. Il direttore dei sistemi informativi è soddisfatto. Il responsabile della piattaforma non è convinta, perché il team di reperibilità dice che le sue notti non sono migliorate. Chiede al team di eseguire l'audit a campione previsto dal registro delle metriche.

L'audit estrae 30 modifiche a caso e due revisori applicano la definizione scritta. Concordano su 24 dei 30 verdetti, quindi la concordanza sulla definizione di fallimento è dell'80 per cento (illustrativo). Poi confrontano il campione con l'elenco degli incidenti. Su 22 incidenti risolti nel trimestre, solo 9 riportano il campo «causato da una modifica», con un tasso di collegamento del 41 per cento. Leggendo a mano gli altri 13, i revisori ne trovano 5 iniziati entro un giorno da una modifica. Il conteggio corretto porta il tasso di fallimento a circa il 9 per cento, e l'audit scopre perché il numero sembrava buono: una nuova abitudine di distribuire le correzioni con l'etichetta «manutenzione», che il report escludeva sia dal denominatore sia dal numeratore.

Il rischio di manipolazione è l'etichetta, e nessuno l'aveva pianificato. Al team era stato detto che i fallimenti erano motivo di preoccupazione, e «manutenzione» evitava una conversazione. Il team prende tre decisioni. Il campo «causato da una modifica» diventa obbligatorio senza valore predefinito, e la revisione post-incidente lo controlla. L'etichetta «manutenzione» viene ritirata e le distribuzioni correttive devono portare un collegamento alla modifica che correggono, il che alimenta il tasso di rilavorazione. La definizione di fallimento viene riscritta con sei esempi svolti, compresa una regressione su una query lenta che non ha mai causato un'interruzione.

Il trimestre successivo mostra un tasso di fallimento riformulato dell'8 per cento e un tasso di collegamento del 90 per cento (illustrativo). Il report per la dirigenza ora mostra i conteggi, il tasso di collegamento e il tasso di rilavorazione accanto al lead time, e il direttore dei sistemi informativi smette di citare una singola percentuale.

## Lente di settore

**Startup.** Le modifiche sono piccole e frequenti, e il team spesso conosce a memoria ogni fallimento. Si mantenga la definizione a un paragrafo, si etichettino rollback e hotfix nello strumento di distribuzione e si rivedano i fallimenti nella retrospettiva settimanale. Un tasso di fallimento su 20 modifiche è rumoroso, quindi si usi un elenco di fallimenti come evidenza principale. Il rischio è l'informalità: senza una definizione scritta, il tasso cambia a seconda di chi sta contando.

**Piccola impresa.** Le stesse persone distribuiscono, gestiscono e supportano, quindi la rilavorazione compete direttamente con il lavoro pianificato. Si registrino i fallimenti in qualsiasi strumento già in uso, si aggiunga un campo obbligatorio al record dell'incidente e si rivedano le modifiche d'emergenza ogni trimestre. Si eviti un'approvazione pesante al solo scopo di migliorare i numeri. Una checklist condivisa per il rollback vale più di un board delle modifiche.

**Grande impresa.** Molti team, fornitori e strumenti significano molte definizioni. Si standardizzino la definizione di fallimento e il campo di collegamento tra i team, la si pubblichi nel catalogo delle metriche e si calcolino i tassi per servizio prima di aggregarli. Si usino audit a campione per trovare le divergenze e si tratti il record di modifica di ciascun fornitore come un'altra fonte con una propria qualità (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»). Si faccia attenzione che le aggregazioni non diventino mai classifiche di team.

**Governo e settore pubblico.** I record di modifica servono all'audit e alla responsabilità, e i rollback possono essere vincolati da norme di legge, appalti o piattaforme condivise. Si mantenga il record formale e vi si aggiunga il collegamento di fallimento come sua parte. Si spieghino con cura i numeri agli organi di vigilanza, con conteggi e contesto, perché un singolo fallimento in un servizio critico può attirare un'attenzione sproporzionata. Si usino i dati per giustificare percorsi più leggeri per le modifiche a basso rischio, con evidenze che fallimento e ripristino siano rimasti stabili.

## Business case: motivazioni, ROI e TCO

La motivazione è il costo delle modifiche fallite: lavoro sugli incidenti, rilavorazione, elementi della roadmap ritardati e perdita di fiducia degli utenti. Molte organizzazioni non sanno dire quanta parte del loro sforzo vada nella riparazione di modifiche recenti, e una misura di rilavorazione fornisce la prima risposta onesta. C'è anche un beneficio indiretto. I team che sanno dimostrare che le modifiche sono sicure possono difendere un'approvazione più leggera, che accorcia il lead time. La ricerca DORA riporta un'associazione tra approvazione esterna pesante e prestazioni di consegna più deboli (si veda l'Argomento 4.3 «Metriche di abilitazione delle modifiche»), e i dati sui fallimenti sono il modo in cui un team verifica tale affermazione rispetto alla propria storia.

Il costo di raccolta è modesto se le basi esistono: un campo obbligatorio nel record dell'incidente, distribuzioni correttive etichettate, un'unione di tre fonti di dati e una revisione mensile. Il costo maggiore è l'attenzione, perché qualcuno deve possedere la definizione, condurre gli audit e agire sui risultati. Si eviti di acquistare uno strumento prima che la definizione e il collegamento funzionino a mano.

Il ritorno si manifesta in meno fallimenti ripetuti, ripristino più breve, meno lavoro non pianificato e conversazioni migliori con la governance. Non si prometta una percentuale. Si stimi invece la propria linea di base: si contino le ore spese in rilavorazione e in risposta agli incidenti collegati alle modifiche nell'arco di un trimestre, le si valorizzi usando la propria tariffa interna normale e si confronti dopo i miglioramenti. Si dichiarino le ipotesi e si riporti il risultato come intervallo anziché come cifra singola. Lo si confronti con il costo del programma e con il costo di un singolo grave fallimento in un servizio critico.

## Anti-pattern e insidie

- **Fissare un obiettivo per il tasso di fallimento.** Invita alla ridefinizione e ai fallimenti nascosti. Si fissi invece un obiettivo di apprendimento, come completare ogni revisione e chiudere ogni azione correttiva, e si osservi il tasso per le tendenze.
- **Classificare team o persone in base al fallimento.** Distrugge la segnalazione e punisce i team che assumono lavoro rischioso e di valore. Si confronti un team con il proprio passato e si discuta il contesto.
- **Contare come fallimenti solo gli incidenti.** I fallimenti individuati presto e annullati scompaiono. Si includa ogni percorso di rimedio e si usino gli incidenti come un segnale tra diversi.
- **Trattare le modifiche d'emergenza come negative.** La pressione porta a emergenze mascherate. Le si riveda per le ragioni e si corregga il percorso ordinario.
- **Lasciare che il collegamento all'incidente assuma «no» come valore predefinito.** Il valore predefinito produce un numero lusinghiero e sbagliato. Si renda il campo obbligatorio e si controlli un campione.
- **Riportare un tasso senza conteggi.** I campioni piccoli oscillano enormemente. Si mostrino i conteggi e una finestra mobile.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizione di fallimento | Decisa caso per caso da chi viene interpellato | Alcuni team scrivono una definizione; i team differiscono | Un'unica definizione scritta con esempi svolti e una finestra dichiarata | Definizione verificata con audit a campione e concordanza misurata | Definizione rivista con fornitori e clienti quando smette di informare le decisioni |
| Collegamento tra modifiche e incidenti | Collegamento ricordato dalle persone, se mai | Campo facoltativo usato da alcuni team | Campo obbligatorio senza valore predefinito, controllato nella revisione post-incidente | Tasso di collegamento analizzato nel tempo e rivisto, con azioni sulle lacune | Collegamenti condivisi tra team e fornitori tramite interfacce concordate |
| Rimedio e gestione delle emergenze | Rollback e hotfix gestiti ad hoc e non registrati | Rollback e hotfix etichettati da alcuni team | Tutti i percorsi di rimedio registrati; criterio d'emergenza scritto | Modifiche d'emergenza riviste ogni trimestre; rollback provati | Percorsi di ripristino progettati nei servizi e testati congiuntamente tra i team |
| Uso nel miglioramento | Numeri citati nei report senza seguito | Fallimenti discussi dopo gli incidenti maggiori | Revisione mensile senza colpa delle modifiche fallite con azioni | Fallimento e rilavorazione abbinati alla velocità; esperimenti pianificati e finanziati | Routine di miglioramento condivisa tra team, con l'apprendimento pubblicato |

## Checklist

- [ ] Esiste una definizione scritta di fallimento di una modifica, con una finestra dichiarata e almeno cinque esempi svolti.
- [ ] L'unità di conteggio (modifica, distribuzione o rilascio) è indicata nel registro delle metriche.
- [ ] Il record dell'incidente ha un campo obbligatorio «causato da una modifica» senza valore predefinito.
- [ ] Rollback, hotfix e correzioni roll-forward sono etichettati negli strumenti di distribuzione o di controllo di versione.
- [ ] Le distribuzioni correttive portano un collegamento alla modifica che correggono.
- [ ] La modifica d'emergenza ha un breve criterio scritto, e ogni modifica d'emergenza è rivista entro un numero stabilito di giorni.
- [ ] I tassi sono mostrati con i conteggi e una finestra mobile, mai come semplice percentuale.
- [ ] Il tasso di fallimento delle modifiche è sempre mostrato accanto al lead time, alla frequenza di distribuzione e al tempo di ripristino.
- [ ] Un audit trimestrale a campione verifica i verdetti di fallimento e il collegamento agli incidenti.
- [ ] Si svolge una revisione mensile senza colpa delle modifiche fallite, con un responsabile per ogni azione.
- [ ] Nessuna metrica di questo argomento è usata per classificare o valutare individui.

## Prompt IA

**Redigere una definizione scritta di fallimento di una modifica.**

```text
Gestiamo [tipo di servizio o prodotto] con [dimensione del team] persone e
rilasciamo [frequenza, per esempio più volte alla settimana]. I nostri strumenti
sono [strumento delle modifiche, strumento di distribuzione, strumento degli
incidenti]. Rediga una definizione di una pagina di «modifica fallita» che
indichi l'unità (modifica, distribuzione o rilascio), la finestra di fallimento,
i percorsi di rimedio che contano (rollback, hotfix, correzione roll-forward,
incidente collegato) e le esclusioni. Includa [numero] esempi svolti, compresi
casi al limite. Non inventi valori di benchmark né soglie; mi chieda quelli di
cui ha bisogno. Elenchi le sue ipotesi.
```

**Progettare il collegamento modifica-incidente.**

```text
Ecco il nostro modello di record dell'incidente: [campi]. Ecco il nostro modello
di record di modifica: [campi]. Suggerisca come registrare quale modifica abbia
causato quale incidente, includendo un campo obbligatorio, i valori ammessi, chi
lo compila e come una revisione dovrebbe controllarlo. Proponga un modo per
suggerire automaticamente le modifiche candidate a partire da [dati
disponibili, per esempio orari di distribuzione e nomi dei servizi]. Non
ipotizzi come siano configurati i nostri strumenti. Elenchi le sue ipotesi e le
domande a cui dovrei rispondere.
```

**Analizzare un elenco di modifiche fallite per individuare schemi.**

```text
Di seguito [numero] modifiche fallite di [periodo], con questi campi: [elencare
i campi, per esempio dimensione, tipo, giorno e ora, servizio, percorso di
rimedio, tempo di ripristino]. Individui schemi e possibili fattori concorrenti
e suggerisca fino a [numero] piccoli esperimenti reversibili per ridurre i
fallimenti. Mantenga l'analisi a livello di team e di servizi e non classifichi
gli individui. Non inventi statistiche né valori di benchmark. Indichi quanto sia
sicuro ciascuno schema data la dimensione del campione ed elenchi le sue
ipotesi.
```

**Verificare una dashboard dei fallimenti per rischi di manipolazione.**

```text
La nostra dashboard mostra [elenco di metriche, per esempio tasso di fallimento
delle modifiche, quota di emergenze, tasso di rollback, tasso di hotfix, tasso
di rilavorazione] con queste definizioni: [definizioni]. Per ogni metrica,
elenchi i modi plausibili in cui il numero potrebbe migliorare senza che il
servizio migliori e una contromisura per ciascuno. Suggerisca due controlli di
audit che un team di [dimensione del team] persone potrebbe eseguire ogni
trimestre. Non inventi valori di benchmark né affermazioni di conformità.
Elenchi le sue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare quale argomento definisce una metrica correlata, come il lead time o la durata degli incidenti, e la contromisura da affiancare al tasso di fallimento.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una metrica di fallimento nuova o modificata indichi il proprio orologio, la propria fonte e il proprio vettore di manipolazione.

## Punti chiave

- Un tasso di fallimento delle modifiche vale quanto la sua definizione, quindi se ne scriva una con una finestra, esempi svolti e un'unità nominata.
- Si colleghi ogni fallimento alla sua modifica con un campo obbligatorio nel record dell'incidente e si misuri il tasso di collegamento.
- Si contino insieme rollback, hotfix, correzioni roll-forward e incidenti collegati, in modo che i team non possano eludere la metrica cambiando percorso.
- Si leggano la quota di modifiche d'emergenza e la rilavorazione come segnali sulla pianificazione e sul percorso ordinario, non come punteggi.
- Si mostri sempre il fallimento accanto alla velocità e al ripristino, con conteggi e una finestra mobile, e non si classifichino mai le persone.

## Riferimenti e letture di approfondimento

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
8. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
9. Wikipedia, [Hotfix](https://en.wikipedia.org/wiki/Hotfix).
10. Wikipedia, [Rework](https://en.wikipedia.org/wiki/Rework).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
14. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
