# Metriche DORA

**Le metriche DORA descrivono con quale rapidità e con quale sicurezza le modifiche al software di un team raggiungono la produzione: si leggano insieme le misure di velocità e quelle di stabilità, le si calcoli da eventi di pipeline e di incidente e le si usi per avviare conversazioni su un sistema di consegna, mai per classificare team o persone.**

## Panoramica e motivazione

Le metriche DORA provengono dal programma di ricerca di [DevOps Research and Assessment (DORA)](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment), uno studio di lunga durata su come le pratiche di consegna del software si relazionino con gli esiti di team e organizzazioni. Nicole Forsgren, Jez Humble e Gene Kim presentarono i primi risultati nel libro [Accelerate](https://en.wikipedia.org/wiki/Accelerate_(book)) nel 2018, e il programma è proseguito sotto Google Cloud con un rapporto annuale. La ricerca si chiedeva quali aspetti misurabili della consegna predicano buoni esiti e si è fermata su un piccolo insieme di misure di prestazione della consegna del software che si possono calcolare dalla pipeline di consegna e dal registro degli incidenti.

A ottobre 2026, il sito DORA descrive cinque metriche di prestazione della consegna del software, divise in due gruppi. Tre descrivono il **throughput**, cioè la rapidità con cui le modifiche si muovono: change lead time, frequenza di rilascio e tempo di ripristino dopo un rilascio fallito. Due descrivono l'**instabilità**, cioè la frequenza con cui un rilascio causa problemi: tasso di fallimento delle modifiche e tasso di rilavorazione dei rilasci. Le pubblicazioni precedenti descrivevano quattro metriche, con il «tempo di ripristino del servizio» al posto del tempo di ripristino dopo un rilascio fallito e senza il tasso di rilavorazione. Le definizioni sono state affinate nel corso degli anni, perciò si dichiari sempre quale edizione delle linee guida si sta seguendo e la data dell'ultimo controllo.

Il risultato della ricerca che ha reso famose le metriche è che velocità e stabilità tendono a muoversi insieme tra i team. I team che rilasciavano spesso e avevano lead time brevi non pagavano, in media, il prezzo di più fallimenti. Ciò ribalta il vecchio presupposto che andare più veloci significhi rompere di più. È uno schema nei dati di sondaggi e di pipeline, non una legge, e vale per i team che hanno investito in pratiche come la [consegna continua](https://en.wikipedia.org/wiki/Continuous_delivery), i lotti piccoli, i test automatizzati e il feedback rapido. Le metriche sono segnali di quelle capacità sottostanti. Non sono le capacità stesse.

I termini seguenti ricorrono in questo argomento.

- Un **rilascio (deployment)** è l'atto di mettere una versione del software in un dato ambiente. Questo argomento intende la produzione, salvo diversa indicazione.
- Una **modifica (change)** è un insieme di cambiamenti al software, comunemente uno o più commit che vengono rilasciati insieme. In ITIL 4 la parola ha un significato più ampio, che copre qualsiasi aggiunta, modifica o rimozione che possa influire sui servizi, e la pratica [ITIL](https://en.wikipedia.org/wiki/ITIL) che la governa è l'abilitazione delle modifiche.
- Un **rilascio fallito** è un rilascio che causa un servizio degradato o un'interruzione in produzione e richiede rimedio, come una correzione urgente, un ripristino della versione precedente o una patch. Il proprio team scrive la regola esatta, perché la ricerca la lascia alla definizione locale.
- Un **rollback** è l'atto di riportare la produzione all'ultima versione precedente nota come buona.
- Un **percentile** è un valore al di sotto del quale ricade una quota dichiarata di osservazioni. L'85° percentile del lead time è il numero che l'85 percento delle modifiche batte.

Le visioni agile e ITIL si incontrano su questo terreno. Un team agile vede questi numeri come feedback sulla propria pratica ingegneristica e sui propri accordi di lavoro. Un professionista ITIL li vede come evidenza di esito per l'abilitazione delle modifiche, la gestione dei rilasci, la gestione dei rilasci in esercizio e la gestione degli incidenti. La tensione riguarda di solito il controllo. Un tradizionale comitato di approvazione delle modifiche cerca di ridurre i fallimenti ispezionando ogni modifica prima del rilascio. La ricerca DORA ha rilevato che una pesante approvazione esterna non era associata a una migliore stabilità, mentre lo erano la revisione tra pari, i test automatici e le modifiche piccole. In ITIL 4, l'abilitazione delle modifiche lo prevede separando modifiche standard, normali e di emergenza e consentendo che le modifiche a basso rischio siano preautorizzate (vedi Argomento 4.3 «Metriche di abilitazione delle modifiche»).

Le metriche hanno anche limiti che la ricerca stessa dichiara, e il consiglio pratico di questo argomento si fonda su di essi. Descrivono un sistema di consegna per una applicazione o un servizio, sono pensate per conversazioni di miglioramento e non dicono nulla sul fatto che il lavoro rilasciato abbia valore. Un team può registrare numeri eccellenti rilasciando la cosa sbagliata. Per questa ragione questo argomento sta accanto, e non sopra, alle misure di flusso (vedi Argomento 2.1 «Misure del flusso»), alle misure di affidabilità del servizio (vedi Argomento 5.2 «SLI, SLO e budget di errore») e alle misure di esito (vedi Argomento 1.3 «Risultati prima della produzione: scegliere cosa misurare»).

Infine, le metriche invitano la [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) nel momento in cui compaiono su una dashboard della direzione. La frequenza di rilascio è la più facile da gonfiare e il conteggio dei rilasci falliti è il più facile da nascondere. Ogni raccomandazione seguente abbina quindi una misura a un controllo su come potrebbe essere piegata (vedi Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Principi chiave

- **Si calcoli dagli eventi, non dalla memoria.** I rilasci provengono dalla pipeline, i fallimenti e i ripristini dal registro degli incidenti e il lead time dal controllo di versione unito alla pipeline (vedi Argomento 1.5 «Fonti dei dati e strumentazione»).
- **Si leggano velocità e stabilità come un unico quadro.** Un team veloce con fallimenti in aumento, o un team stabile che rilascia ogni trimestre, dice qualcosa che nessuna delle due metà mostra da sola.
- **Si misuri un servizio o un'applicazione, non una persona.** L'unità di analisi è un sistema di consegna. Le persone non rilasciano da sole, e classificarle distrugge i dati.
- **Si confronti un team con il proprio passato, non con un altro team.** Il contesto differisce nettamente tra un servizio di pagamenti, una piattaforma dati e un'app mobile, e la ricerca stessa mette in guardia dall'usare le metriche come una classifica.
- **Si usino distribuzioni per i tempi.** Lead time e tempo di ripristino hanno code lunghe, perciò si riportino la mediana e un percentile alto (vedi Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).
- **Si trattino le metriche come sintomi.** Quando un numero si muove, se ne cerchi la causa nelle capacità sottostanti, come dimensione dei lotti, automazione dei test, pratica di revisione e architettura, poi si conduca un esperimento.
- **Si scrivano le definizioni.** Fallimento, rilascio e «inizio del lavoro» sono giudizi. Si registri la scelta e la si mantenga stabile così che la tendenza abbia un significato.

## Definizioni delle metriche

Le cinque metriche seguenti seguono le linee guida DORA a ottobre 2026. Le formule dichiarano i cronometri e le esclusioni che il team dovrebbe scrivere. Dove la ricerca lascia aperto un confine, la tabella mostra un valore predefinito sensato e le raccomandazioni spiegano la scelta.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Change lead time | Tempo perché una modifica sottoposta a commit raggiunga la produzione | Il cronometro parte al primo commit della modifica (o alla sua integrazione nel ramo principale, se indicato nella definizione) e si ferma quando il rilascio in produzione si completa con successo; si riportino la mediana e l'85° percentile delle modifiche rilasciate nel periodo; le modifiche mai rilasciate sono escluse e riportate a parte come lavoro in corso | Ore o giorni | Controllo di versione unito alla pipeline di rilascio | Gestione dei rilasci in esercizio; gestione dei rilasci; abilitazione delle modifiche | Cycle time; lead time verso la produzione | Settimanale o per rilascio, rivisto mensilmente |
| Frequenza di rilascio | Con quale frequenza un team rilascia in produzione | Conteggio dei rilasci in produzione riusciti dell'applicazione nel periodo / giorni del periodo; i rilasci falliti o annullati con rollback sono esclusi dal conteggio dei riusciti; i rilasci negli ambienti di test sono esclusi | Rilasci al giorno o a settimana | Registro degli eventi della pipeline di rilascio | Gestione dei rilasci in esercizio; gestione dei rilasci | Consegna continua; rilascio alla fine di ogni incremento | Settimanale |
| Tempo di ripristino dopo un rilascio fallito | Quanto tempo occorre per ripristinare quando un rilascio causa un guasto in produzione | Il cronometro parte quando il guasto viene rilevato o segnalato (sempre con la stessa regola) e si ferma quando il servizio è ripristinato per gli utenti; si riportino la mediana e l'85° percentile per i rilasci falliti nel periodo; gli incidenti non causati da un rilascio sono esclusi | Minuti od ore | Registro degli incidenti unito agli eventi di rilascio e agli avvisi di monitoraggio | Gestione degli incidenti; gestione della continuità del servizio | Tempo di ripristino; lavoro di ripristino | Per ogni guasto, rivisto mensilmente |
| Tasso di fallimento delle modifiche | Quota dei rilasci in produzione che causano un guasto che richiede rimedio | Rilasci che hanno richiesto una correzione urgente, un rollback, una patch o una risposta a un incidente / tutti i rilasci in produzione nel periodo; la regola che collega un guasto al proprio rilascio è scritta e applicata sempre allo stesso modo | Percentuale | Eventi di rilascio uniti a incidenti, rollback e rilasci di correzioni urgenti | Abilitazione delle modifiche; gestione degli incidenti | Definition of Done; difetti sfuggiti | Mensile |
| Tasso di rilavorazione dei rilasci | Quota dei rilasci in produzione che non erano pianificati e sono stati fatti per correggere un problema visibile agli utenti | Rilasci non pianificati effettuati in risposta a un problema in produzione / tutti i rilasci in produzione nel periodo; i rilasci pianificati che contengono per caso una correzione sono esclusi; la regola per «non pianificato» è scritta | Percentuale | Registro della pipeline etichettato per motivo del rilascio, collegato a record di incidenti o di difetti | Abilitazione delle modifiche; gestione dei problemi | Lavoro non pianificato; correzione di bug rilasciata fuori piano | Mensile |

Due note sulla tabella. Primo, il tasso di fallimento delle modifiche e il tasso di rilavorazione dei rilasci si sovrappongono e non sono la stessa cosa: un guasto che il team nota e annulla con rollback senza alcun nuovo rilascio conta nel tasso di fallimento delle modifiche ma non nel tasso di rilavorazione, mentre una correzione pianificata che il team programma non conta in nessuno dei due. Secondo, la ricerca tratta il **rilascio** come unità e conta per applicazione, perciò una piattaforma con cinquanta servizi ha cinquanta insiemi di numeri, non uno.

## Raccomandazioni

### Partire da definizioni e cronometri

**1. Si scriva una definizione di una pagina per ogni metrica prima di tracciarla.** Si dichiari che cosa conti come rilascio, quale ambiente sia la produzione, dove parta il cronometro per il lead time e come un guasto sia collegato a un rilascio. Si metta la pagina nel registro delle metriche (vedi Argomento 1.4 «Governance e responsabilità delle metriche»). Una definizione che vive solo nella testa di qualcuno deriverà la prima volta che lo strumento o il team cambia.

**2. Si scelga un inizio per il lead time e vi si resti fedeli.** Le scelte più comuni sono il primo commit sulla modifica, l'integrazione nel ramo principale e la creazione di un ticket. Il primo commit misura il sistema di consegna e ignora il tempo in cui il lavoro è rimasto in un backlog. L'inizio dal ticket misura più dell'attesa del cliente ma vi mescola la prioritizzazione (vedi Argomento 2.2 «Lead time, cycle time ed efficienza del flusso»). Se ne usi una in modo coerente e si dica quale in ogni grafico.

**3. Si attribuiscano i fallimenti con una regola dichiarata.** Un guasto appartiene a un rilascio quando, per esempio, un incidente si apre entro una finestra dichiarata dopo il rilascio e l'analisi della causa punta a quella modifica, oppure quando un rollback o una correzione urgente è etichettato ad esso. Si scelga una regola che le persone possano applicare senza discussione, si riveda un campione di casi ogni trimestre e si mantenga la regola invariata abbastanza a lungo da vedere una tendenza.

### Strumentare dalla pipeline

**4. Si prendano gli eventi di rilascio dalla pipeline, non da un foglio di calcolo.** Un sistema [CI/CD](https://en.wikipedia.org/wiki/CI/CD) che registra ogni rilascio in produzione con un timestamp, una versione e un risultato fornisce la frequenza di rilascio e la fine del cronometro del lead time senza inserimenti umani. I conteggi inseriti a mano sono tardivi e incoerenti e invitano ai problemi di retrodatazione descritti nell'argomento 1.5 «Fonti dei dati e strumentazione». Il progetto open source Four Keys del team DORA è un esempio svolto di raccolta di questi eventi, anche se va bene qualsiasi pipeline equivalente propria.

**5. Si unisca il registro degli incidenti ai rilasci.** Le misure di guasto e di ripristino richiedono due fonti: il registro dei rilasci e lo strumento degli incidenti. Si aggiunga al record dell'incidente un campo «causato da rilascio» e l'identificatore del rilascio, compilato durante la risoluzione e verificato nella revisione post-incidente (vedi Argomento 4.2 «Metriche di postmortem e apprendimento»). Senza l'unione, il tasso di fallimento delle modifiche diventa un'ipotesi.

**6. Si etichetti il motivo di ogni rilascio.** Il tasso di rilavorazione ha bisogno di separare i rilasci pianificati dalle correzioni non pianificate. Basta una semplice etichetta sull'esecuzione della pipeline, come «modifica pianificata» o «correzione di un problema in produzione». Si mantenga breve l'elenco delle etichette, così che le persone non debbano pensarci sotto pressione.

### Riportare i numeri con onestà

**7. Si riportino distribuzioni e conteggi, non una singola media.** Si mostrino la mediana e l'85° percentile per lead time e tempo di ripristino, con il numero di osservazioni dietro ciascuno. Una settimana con due rilasci e un guasto ha un tasso di fallimento delle modifiche del 50 percento che significa molto poco, perciò si mostrino i conteggi accanto alla percentuale e si preferisca una finestra più lunga per i tassi (vedi Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

**8. Si mostrino fianco a fianco i gruppi di throughput e di instabilità.** Si mettano le tre metriche di throughput e le due di instabilità in un'unica vista, per servizio, con la tendenza su almeno un trimestre. Non si pubblichi mai la frequenza di rilascio senza le misure di fallimento accanto. Se un dirigente chiede un solo numero, si spieghi che non esiste un unico punteggio DORA e si offra la vista a due gruppi.

**9. Si mantengano i confronti entro la storia del team stesso.** Un team che porta il proprio lead time mediano da nove giorni a cinque ha imparato qualcosa. Classificarlo rispetto a un altro team con diversa architettura, carico normativo o treno di rilasci prova poco e insegna a entrambi i team a proteggere i propri numeri. Quando si deve aggregare per la governance, si mostrino la dispersione tra i servizi e la tendenza di miglioramento, non una classifica (vedi Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

### Migliorare il sistema che i numeri descrivono

**10. Si riduca prima la dimensione dei lotti.** Le modifiche piccole accorciano il lead time, rendono più facile diagnosticare i guasti e abbassano il costo di un rollback. Le tecniche includono i [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle), il lavoro basato sul trunk e la suddivisione del lavoro in modo che ogni incremento possa essere rilasciato da solo (vedi Argomento 2.7 «Metriche di pull request e code review»). Si monitori la dimensione mediana delle modifiche accanto al lead time, così da vedere se il lotto si sta davvero riducendo.

**11. Si investa nella rilevazione rapida e nell'inversione rapida.** Il tempo di ripristino cala quando il team può vedere un guasto in pochi minuti e quando può fare il [rollback](https://en.wikipedia.org/wiki/Rollback_(data_management)) o disattivare una modifica senza una nuova build. Un [canary release](https://en.wikipedia.org/wiki/Canary_release), un feature toggle e un rollback automatico accorciano ciascuno l'intervallo tra guasto e ripristino. Si misuri separatamente il tempo dal rilascio alla rilevazione, perché una rilevazione lenta si nasconde dentro il numero del tempo di ripristino (vedi Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»).

**12. Si usino i numeri per scegliere una capacità da migliorare.** Si scelga una metrica debole, ci si chieda perché sia debole e si selezioni dall'elenco delle capacità della ricerca una pratica che ne affronti la causa, come l'automazione dei test, un'architettura a basso accoppiamento o un'approvazione leggera delle modifiche. Si conduca la modifica per un trimestre e si guardi la tendenza. Si abbini l'esperimento a un tema di retrospettiva, così che il team sia responsabile del miglioramento (vedi Argomento 9.5 «Metriche di miglioramento continuo»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Change lead time | Spostare più tardi l'inizio del cronometro, per esempio partendo dall'integrazione anziché dal primo commit; integrare presto in un ramo di lunga durata; escludere le modifiche difficili come «non codice»; far passare modifiche banali nella pipeline per trascinare in basso la mediana | Percentile ed età del lavoro in corso; un inizio del cronometro fisso e scritto; campione ogni trimestre del 10 percento di modifiche più lente; distribuzione delle dimensioni delle modifiche |
| Frequenza di rilascio | Dividere una modifica in molti rilasci banali; ri-rilasciare build invariate; contare i rilasci in staging o le modifiche di configurazione vuote | Dimensione della modifica per rilascio; quota di rilasci che contengono una modifica visibile all'utente; tasso di fallimento delle modifiche e tasso di rilavorazione accanto |
| Tempo di ripristino dopo un rilascio fallito | Far partire il cronometro in ritardo o chiudere gli incidenti in anticipo; riclassificare un guasto come nuovo incidente dopo una correzione parziale; alzare la soglia di gravità per «guasto» | Ricorrenza dello stesso incidente entro una finestra dichiarata; inizio del cronometro preso dagli avvisi di monitoraggio; durata dell'impatto riferita dai clienti |
| Tasso di fallimento delle modifiche | Non collegare gli incidenti ai rilasci; contare solo i guasti che causano un'interruzione completa; allargare la finestra così che i guasti ne restino fuori; correggere in avanti e chiamarla una nuova modifica | Rivedere ogni trimestre un campione di incidenti rispetto al registro dei rilasci; monitorare la proporzione di incidenti con un collegamento al rilascio registrato; tasso di rilavorazione dei rilasci |
| Tasso di rilavorazione dei rilasci | Etichettare le correzioni come lavoro pianificato; accorpare una correzione in un rilascio programmato; evitare i rilasci di correzione ritardando la correzione | Conteggi di difetti e di difetti sfuggiti dal tracker; età dei difetti aperti in produzione; verifica delle etichette su un campione di rilasci |

Una lettura sana mostra lead time e tempo di ripristino in diminuzione o stabili a un livello basso, frequenza di rilascio stabile o in crescita con modifiche piccole e tassi di fallimento e di rilavorazione piatti o in calo, con conteggi abbastanza grandi da potersene fidare. Letture sospette includono un improvviso salto della frequenza di rilascio senza alcun cambiamento nel lavoro, un tasso di fallimento che scende a zero nel giro di un mese e un tempo di ripristino che cala mentre i reclami dei clienti restano gli stessi. Ciascuna richiede uno sguardo allo strumento prima di festeggiare.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Usare tutte e cinque le metriche DORA per servizio | Basate sulla ricerca, bilanciano velocità e stabilità, calcolate da eventi oggettivi | Richiedono una pipeline e un registro degli incidenti che si uniscano in modo pulito; mute sul fatto che il lavoro avesse valore |
| Riportare solo frequenza di rilascio e lead time | Facile da raccogliere dalla pipeline | Premia la sola velocità e invita proprio alla manipolazione che le misure di stabilità individuano |
| Usare definizioni locali per team | Si adatta all'architettura e allo stile di rilascio del team | I team non si possono confrontare e le aggregazioni sono inaffidabili |
| Usare un'unica definizione a livello di organizzazione | Rendicontazione coerente; governance semplice | Si adatta male ad alcuni sistemi, come i mainframe con finestre batch o i rilasci regolamentati |
| Confrontare i team con fasce di prestazione pubblicate | Dà ai dirigenti una rapida idea della posizione | Ignora il contesto, e la ricerca avverte che le fasce non sono obiettivi per ciascun team |
| Usare le metriche per l'automiglioramento del team | Costruisce responsabilità; sostiene dati onesti | Offre meno conforto ai dirigenti che vogliono un unico punteggio |

La tensione centrale è tra comparabilità e onestà. Più un numero è usato per giudicare i team, più i dati si piegano e meno aiutano il team che li possiede. Si usino le metriche per sostenere prima di tutto il miglioramento, si accetti una comparabilità imperfetta e si mantengano le viste a livello dirigenziale su tendenze e dispersione. Dove la rendicontazione regolamentata richiede una definizione standard, la si documenti e si tenga separata la vista di miglioramento a livello di team.

## Domande da discutere con il team

**1. Quali dei nostri cinque numeri DORA provengono da eventi e quali dal ricordo di qualcuno?**
Si ripercorra ciascuna metrica fino alla sua fonte. Si noti dove una persona digita una data o decide se qualcosa conti come guasto. Chi facilita dovrebbe aiutare il gruppo a ordinare i passaggi manuali in base a quanto potrebbero distorcere il numero e a concordare quale automatizzare per primo.

**2. Dove esattamente parte e si ferma il nostro cronometro del lead time e tutti concordano?**
Si chieda a tre persone di descrivere l'inizio e la fine del cronometro per l'ultima modifica rilasciata. Si confrontino le risposte. Le differenze emergono di solito intorno al primo commit, all'integrazione, a un ticket e alla fase di approvazione. Si concordi una definizione e la si scriva, e si discuta quale tempo di attesa la definizione scelta nasconda.

**3. Che cosa conta per noi come rilascio fallito e chi decide?**
Si ripassino gli ultimi cinque incidenti in produzione e ci si chieda se ciascuno appartenga a un rilascio. I disaccordi mostrano dove la regola è poco chiara. Si discuta che cosa accada a un guasto corretto con una modifica di configurazione, un rollback o una rapida patch e si decida come ciascuno venga registrato.

**4. Se la frequenza di rilascio raddoppiasse il prossimo trimestre, che cosa verificheremmo prima di definirla una buona notizia?**
Si inviti il gruppo a nominare i modi in cui il numero potrebbe salire senza consegnare più valore. Si guardino dimensione delle modifiche, quota di rilasci con una modifica visibile all'utente e tassi di fallimento e di rilavorazione. Chi facilita dovrebbe annotare quali controlli esistano già sulla dashboard e quali vadano aggiunti.

**5. Come vengono usati questi numeri da persone esterne al team?**
Si chieda chi li vede, in quale forma e che cosa ne fa. Si ascoltino confronti con altri team, obiettivi fissati dall'esterno e usi nelle valutazioni individuali. Si discuta che cosa il team dovrebbe vedere cambiare in quell'uso prima di potersi fidare dei propri dati e chi abbia l'autorità di cambiarlo.

**6. Quale capacità migliorerebbe di più il nostro numero più debole e qual è un piccolo esperimento da provare?**
Si scelga la metrica più debole e si discutano le sue probabili cause, come lotti grandi, revisione lenta, test instabili o un passaggio di rilascio manuale. Si scelga una causa e si progetti un esperimento di quattro–sei settimane con un modo per vederne l'effetto. Si concordi una data per rivedere il risultato e chi porterà i dati.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna possiedono le capacità che guidano questi numeri: modifiche piccole, test automatici, una pipeline rapida e l'abitudine di rivedersi a vicenda il lavoro. Dovrebbero usare le metriche come uno specchio della propria pratica ingegneristica, fissare i propri obiettivi di miglioramento e resistere alla pressione di riportare verso l'alto un unico numero. Decidono anche le definizioni, perciò hanno il dovere di mantenerle oneste (vedi Argomento 2.7 «Metriche di pull request e code review»).

### Team di servizio e operations

I team operativi detengono il registro degli incidenti da cui dipendono le misure di guasto e di ripristino. Aiutano il team di consegna etichettando gli incidenti con il rilascio che li ha causati, fornendo un monitoraggio che rilevi rapidamente i guasti e partecipando alla revisione di ogni rilascio fallito. Dovrebbero controllare che la velocità di consegna non stia comprando un'instabilità che essi assorbono come carico di reperibilità (vedi Argomento 5.7 «Metriche di toil e reperibilità») e chiedere gli investimenti in rollback e rilevazione che riducono il tempo di ripristino.

### Leadership e governance

I dirigenti dovrebbero chiedere tendenze e dispersione tra i servizi, i due gruppi di metriche insieme e gli esperimenti di miglioramento che stanno dietro. Dovrebbero evitare obiettivi che blocchino un numero, come «rilasciare ogni giorno», ed evitare di usare le metriche nelle valutazioni individuali. Gli organi di governance possono usare i numeri come evidenza che un percorso di approvazione delle modifiche più leggero è sicuro, o come ragione per riconsiderarlo, mostrando se la stabilità è rimasta costante mentre il processo cambiava (vedi Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni»).

### Clienti e utenti

Ai clienti raramente interessano i conteggi dei rilasci. Interessa loro con quale rapidità una correzione o una funzionalità li raggiunga, quanto raramente un rilascio rompa qualcosa su cui contano e con quale rapidità il servizio ritorni quando succede. Si usino le metriche DORA come evidenza interna che questi esiti sono probabili e le si integri con misure rivolte ai clienti come disponibilità e soddisfazione (vedi Argomento 5.3 «Metriche di disponibilità» e Argomento 6.1 «Metriche di soddisfazione del cliente»).

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni gestisce un servizio di checkout posseduto da un team di prodotto, supportato da un team di piattaforma e dal service desk. Tutti i numeri seguenti sono illustrativi.

Il team ha rilasciato in produzione circa due volte a settimana, con un lead time (dal primo commit alla produzione) di una mediana di 11 giorni e un 85° percentile di 26 giorni. Nel trimestre precedente, 6 rilasci su 24 (25 percento, illustrativo) sono stati seguiti da un rollback o da un incidente. Il tempo di ripristino mediano per quei guasti è stato di 3 ore. Il comitato di approvazione delle modifiche si riunisce ogni settimana e rivede ogni modifica al servizio di checkout.

Il team propone un piano. Dividerà le modifiche grandi, aggiungerà controlli automatici nella pipeline, metterà il nuovo comportamento dietro feature toggle e chiederà al comitato di preautorizzare come modifiche standard quelle a basso rischio che superano i controlli. Il responsabile delle modifiche è cauto, perciò il team concorda di riportare ogni mese tutte e cinque le metriche e di interrompere l'esperimento se il tasso di fallimento sale per due mesi consecutivi.

Dopo un trimestre, i numeri (illustrativi) sono 19 rilasci al mese, un lead time mediano di 3 giorni con un 85° percentile di 8 giorni, un tasso di fallimento delle modifiche dell'8 percento, un tempo di ripristino mediano di 40 minuti e un tasso di rilavorazione del 5 percento. Il team è soddisfatto e un responsabile regionale chiede di confrontare la frequenza di rilascio del team di checkout con gli altri team di prodotto e di fissare un obiettivo comune.

Il responsabile del team porta alla revisione la scomposizione di rilavorazione e fallimenti e nota un rischio di manipolazione. La frequenza di rilascio è stata aiutata da un certo numero di minuscoli rilasci di configurazione che la pipeline conta, e la dimensione mediana delle modifiche si sta riducendo più in fretta del lavoro effettivo. Peggio ancora, due incidenti del mese scorso sono stati corretti con una modifica di configurazione che la pipeline ha registrato come un normale rilascio etichettato «pianificato», perciò il tasso di rilavorazione era sottostimato. Il tasso di fallimento delle modifiche appariva buono in parte perché quei due incidenti non erano stati collegati ai rilasci originali.

La decisione, registrata nel registro delle decisioni, ha quattro parti. I rilasci di sola configurazione sono contati separatamente e mostrati accanto al numero principale. L'etichetta del motivo del rilascio è verificata ogni mese su un campione di 10 rilasci. Lo strumento degli incidenti ora richiede l'identificatore del rilascio quando la causa è una modifica. E il team declina l'obiettivo comune di frequenza di rilascio, offrendo invece una vista condivisa che mostra la tendenza di ciascun servizio e il suo tasso di fallimento. Il responsabile delle modifiche concorda di mantenere la preautorizzazione per le modifiche standard, con una revisione alla fine del trimestre successivo.

## Lente di settore

**Startup.** Un piccolo team rilascia spesso molte volte al giorno e ha registri di incidenti scarni, perciò frequenza di rilascio e lead time sono facili ma i dati sui guasti sono frammentari. Si parta etichettando nella pipeline ogni rollback e correzione urgente e tenendo un semplice registro degli incidenti con l'identificatore del rilascio. Non si lasci che un'alta frequenza convinca che la stabilità vada bene senza controllare il tasso di fallimento.

**Piccola impresa.** Una piattaforma in hosting o uno sviluppatore esterno possono rilasciare solo una volta al mese, con pochi strumenti. Si conti a mano ciò che si può per alcuni mesi, si chiedano per iscritto al fornitore le date di rilascio e di incidente e ci si concentri su lead time e tasso di fallimento. Si usino i numeri per decidere se modifiche più piccole consegnate in modo continuo ridurrebbero il rischio, non per inseguire una fascia.

**Grande impresa.** Molti team, diversi stili di rilascio e un misto di sistemi moderni e legacy rendono difficili definizioni coerenti. Si concordi una definizione minima comune per ogni metrica, la si pubblichi e si consenta a un team di aggiungerne di più rigorose locali con una motivazione dichiarata. Si aggreghi mostrando la dispersione e la tendenza per servizio anziché una media e si mantenga il dettaglio a livello di team visibile solo al team responsabile e ai gruppi che lo supportano.

**Pubblica amministrazione e settore pubblico.** Finestre di rilascio, regole di audit e contratti di appalto plasmano ciò che è possibile, e alcuni sistemi sono gestiti da fornitori. Si includano nei contratti i diritti sui dati di consegna e di incidente così che le metriche possano essere calcolate. Si usino i numeri come evidenza che un programma di modernizzazione sta accorciando i lead time senza alzare i tassi di fallimento e si riportino tutte le metriche insieme così che i risultati non siano selezionati (vedi Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

La motivazione è accorciare il tempo tra un'idea e il suo uso mantenendo stabile la produzione. Il costo del programma ha tre parti: la strumentazione (eventi di pipeline, etichette dei rilasci e unione con gli incidenti), la routine di revisione (uno sguardo mensile alle tendenze e un campione trimestrale di casi di fallimento e di rilavorazione) e il lavoro di miglioramento indicato dai numeri, come l'automazione dei test o una pipeline più rapida. Le prime due sono modeste. La terza è dove sta la vera spesa, e viene spesa in capacità ingegneristica, non in misurazione.

Il ritorno viene da decisioni che i numeri rendono più facili. Un team può mostrare a un comitato delle modifiche che le modifiche piccole sono sicure e così eliminare una fase di approvazione. Un gruppo di piattaforma può vedere quali servizi hanno pipeline lente o rollback scadente e collocare di conseguenza il proprio investimento. Un team operativo può sostenere con i dati la richiesta di un migliore strumento di rilevazione. Si descriva il ritorno attraverso schemi che si possono osservare di persona, come il tempo dal commit alla produzione, la quota di rilasci che richiedono una correzione e il carico di reperibilità per rilascio, prima e dopo una modifica. Si eviti di citare cifre di riferimento di altre organizzazioni come ritorno atteso, poiché il proprio contesto sarà diverso. Il costo totale di proprietà è dominato dal tempo delle persone, perciò si mantenga piccolo l'insieme di metriche e se ne automatizzi la raccolta (vedi Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Trattare le metriche come una scorecard di prestazione per le singole persone.** Rompe la base della ricerca e corrompe i dati. Si riporti solo a livello di servizio e di team.
- **Fissare obiettivi come «rilasciare ogni giorno» o «lead time sotto un giorno».** L'obiettivo sostituisce lo scopo. Si fissi una direzione di miglioramento e un esperimento e si tenga il numero come segnale.
- **Classificare i team gli uni rispetto agli altri o rispetto a fasce pubblicate.** Il contesto differisce e segue la manipolazione. Si confronti un team con la propria tendenza e si usino le fasce solo come vaga orientamento.
- **Riportare la velocità senza la stabilità.** La coppia è il punto. Si mostrino sempre insieme i gruppi di throughput e di instabilità.
- **Lasciare che le definizioni derivino.** Fallimento, rilascio e inizio del lead time cambiano in silenzio con lo strumento. Si registri ogni modifica di una definizione con la sua motivazione e la si segni sul grafico.
- **Contare i rilasci di qualsiasi cosa.** Invii di configurazione, rilasci in ambienti di test e nuovi rilasci della stessa build gonfiano il conteggio. Si definisca un rilascio in produzione e si mostrino separatamente gli altri tipi.
- **Ignorare che cosa viene rilasciato.** Numeri solidi possono nascondere lavoro che non conta. Li si legga accanto alle misure di flusso e di esito (vedi Argomento 2.9 «Lavoro operativo e lavoro non pianificato»).
- **Inseguire la metrica anziché la capacità.** Il lead time cala nel modo più affidabile quando i lotti si riducono e i test diventano più rapidi. Si migliori la pratica e si lasci che il numero la segua.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizioni e cronometri | Ciascuno definisce rilascio e fallimento in modo diverso | Alcuni team documentano le proprie definizioni | Una definizione scritta per metrica, con cronometri ed esclusioni, nel registro delle metriche | Modifiche alle definizioni registrate e segnate sui grafici; campioni controllati ogni trimestre | Definizioni riviste congiuntamente con fornitori e governance quando smettono di orientare le decisioni |
| Acquisizione dei dati | Conteggi assemblati a mano dai ticket | Dati di pipeline per alcuni servizi; incidenti collegati a mano | Rilasci, motivi e collegamenti con gli incidenti acquisiti automaticamente per la maggior parte dei servizi | Qualità dei dati (tasso di collegamento, verifica delle etichette) misurata e seguita nel tempo | Eventi condivisi tra team e fornitori tramite interfacce concordate |
| Uso dei numeri | Riportati verso l'alto come un unico punteggio | I team guardano i propri grafici di tanto in tanto | Gruppi di throughput e di instabilità rivisti insieme ogni mese dal team responsabile | Le tendenze alimentano esperimenti di miglioramento finanziati con una salvaguardia | Dispersione e tendenze informano investimenti di piattaforma e politica delle modifiche in tutta l'organizzazione |
| Salvaguardie contro la manipolazione | Nessuna | Consapevolezza informale | Salvaguardie abbinate elencate per ogni metrica | Salvaguardie e campioni rivisti, con i casi di manipolazione registrati | Salvaguardie affinate continuamente man mano che team e strumenti cambiano |

## Checklist

- [ ] Le cinque metriche sono definite per iscritto, con cronometri, esclusioni e data ed edizione delle linee guida DORA seguite.
- [ ] I rilasci in produzione sono registrati dalla pipeline con timestamp, versione e risultato.
- [ ] L'inizio del lead time (primo commit, integrazione o altro) è dichiarato e applicato in modo coerente.
- [ ] Gli incidenti portano un campo per il rilascio che li ha causati, compilato durante la risoluzione.
- [ ] Ogni rilascio porta un'etichetta del motivo e un campione è verificato ogni mese.
- [ ] I tempi sono riportati come mediana e percentile alto, con i conteggi.
- [ ] Le metriche di throughput e di instabilità sono mostrate insieme per ogni servizio.
- [ ] La dimensione delle modifiche è monitorata accanto a frequenza di rilascio e lead time.
- [ ] I numeri non sono usati nelle valutazioni individuali né per classificare i team.
- [ ] Un responsabile nominato rivede le metriche ogni mese e registra ogni modifica a una definizione.
- [ ] Un esperimento di miglioramento, legato alla metrica più debole, è in corso con una data di revisione.

## Prompt IA

**Scrivere un insieme di definizioni di una pagina per le cinque metriche.**

```text
Sto definendo le metriche DORA di consegna del software per [nome del servizio o
dell'applicazione]. I nostri strumenti sono [host del controllo di versione,
sistema CI/CD, strumento degli incidenti, strumento ITSM]. Il nostro stile di
rilascio è [continuo, settimanale, mensile o altro]. Per change lead time,
frequenza di rilascio, tempo di ripristino dopo un rilascio fallito, tasso di
fallimento delle modifiche e tasso di rilavorazione dei rilasci, redigi una
definizione con dove il cronometro parte e si ferma, che cosa è contato ed
escluso, la fonte dei dati e un rischio di ambiguità. Non inventare valori di
riferimento né affermare che la nostra pratica corrisponda a una qualsiasi fascia
di prestazione pubblicata. Elenca le tue ipotesi e le domande a cui devo
rispondere per completare le definizioni.
```

**Verificare i rischi di manipolazione di un insieme di metriche.**

```text
Ecco come calcoliamo attualmente le nostre metriche di consegna: [descrizione di
ciascuna metrica, della sua fonte dei dati e di come è riportata]. Il pubblico è
[team, direzione o organo di governance]. Per ciascuna metrica, elenca modi
plausibili in cui il numero potrebbe essere gonfiato, nascosto o distorto senza
un reale miglioramento e suggerisci una metrica o pratica di salvaguardia
abbinata che lo individuerebbe. Non inventare statistiche. Elenca le tue ipotesi
e le informazioni che ti servirebbero per essere più preciso.
```

**Analizzare un'esportazione di dati di rilasci e incidenti.**

```text
Incollerò una piccola esportazione di [numero] rilasci in produzione e [numero]
incidenti con questi campi: [elenca i campi, per esempio id del rilascio,
timestamp, risultato, etichetta del motivo, id dell'incidente, orario di
apertura, orario di risoluzione, collegamento al rilascio]. Calcola la mediana e
l'85° percentile del tempo di ripristino, il tasso di fallimento delle modifiche
e il tasso di rilavorazione, mostrando i conteggi dietro ciascuno. Segnala i
record con collegamenti mancanti o timestamp sospetti. Non estrapolare oltre i
dati né confrontare il risultato con benchmark esterni. Elenca le tue ipotesi e i
problemi di qualità dei dati che limitano le conclusioni.
```

**Pianificare un esperimento di miglioramento.**

```text
La nostra metrica di consegna più debole è [nome della metrica], attualmente
[valore come riportato, con intervallo di date e conteggi]. Le probabili cause
discusse dal team sono [elenco]. I nostri vincoli sono [vincoli, per esempio
rilasci regolamentati, ambiente di test condiviso]. Proponi tre piccoli
esperimenti di quattro–sei settimane, ciascuno con un'ipotesi, un modo per
osservarne l'effetto, una metrica di salvaguardia e un rischio. Non inventare
cifre di miglioramento attese. Elenca le tue ipotesi e che cosa dovremmo
verificare prima di iniziare.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare gli argomenti correlati su modifiche, rilasci e incidenti e la salvaguardia che dovrebbe affiancare ciascuna metrica DORA.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una versione rivista di questo argomento mantenga coerenti cronometri, vettori di manipolazione e rimandi.

## Punti chiave

- Le metriche DORA sono cinque misure della consegna del software, tre di throughput e due di instabilità, e sono più utili lette insieme per un singolo servizio.
- Le si calcoli da eventi di pipeline e di incidente con definizioni scritte, perché il fallimento e l'inizio del lead time sono giudizi.
- Le si usi per imparare su un sistema di consegna e per confrontare un team con la propria storia, mai per classificare persone o team.
- Si riportino mediane, percentili alti e conteggi e si abbini ogni metrica a una salvaguardia che ne individui la manipolazione.
- Si migliorino le capacità sottostanti, come lotti piccoli, rilevazione rapida e rollback facile, e si lasci che i numeri le seguano.
- Si dichiarino l'edizione e la data delle linee guida seguite, poiché le definizioni sono state affinate nel tempo.

## Riferimenti e letture di approfondimento

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. DORA, *DORA research program*, Google Cloud, https://dora.dev/research/
4. DORA, *Four Keys project*, https://github.com/dora-team/fourkeys
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
6. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [DevOps Research and Assessment](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment).
9. Wikipedia, [Accelerate (book)](https://en.wikipedia.org/wiki/Accelerate_(book)).
10. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
16. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
