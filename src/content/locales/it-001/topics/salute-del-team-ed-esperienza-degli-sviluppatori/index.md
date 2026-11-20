# Salute del team ed esperienza degli sviluppatori

**I team lavorano al meglio quando il feedback è rapido, il carico sulla mente è gestibile e possono trovare lunghi periodi di concentrazione: misurate queste condizioni insieme al team, rimuovete gli ostacoli che emergono e non usate mai i numeri per classificare le persone.**

## Panoramica e motivazione

I principi del Manifesto Agile chiedono di costruire i progetti attorno a individui motivati, di dare loro l'ambiente e il supporto di cui hanno bisogno e di fidarsi che porteranno a termine il lavoro. Chiedono inoltre che sponsor, sviluppatori e utenti siano in grado di mantenere un ritmo costante a tempo indeterminato e che il team rifletta a intervalli regolari su come diventare più efficace. Le misure di salute del team e di esperienza degli sviluppatori sono il modo in cui questi principi diventano verificabili. Chiedono com'è lavorare qui e che cosa sta d'intralcio.

L'[esperienza degli sviluppatori](https://en.wikipedia.org/wiki/Developer_experience) (developer experience) è la somma delle interazioni che gli sviluppatori hanno con gli strumenti, i processi e le persone con cui lavorano. Il concetto è più ampio dell'ingegneria del software. Gli operatori, il personale del service desk, gli analisti e chiunque altro costruisca o gestisca un servizio ha un'esperienza del proprio ambiente. Questo argomento usa «esperienza degli sviluppatori» per gli ingegneri e «salute del team» per il gruppo più ampio, e le stesse misure valgono per entrambi.

Due framework di ricerca sono ampiamente citati. Il framework SPACE, pubblicato da Nicole Forsgren e colleghi nel 2021, sostiene che la [produttività](https://en.wikipedia.org/wiki/Productivity) degli sviluppatori non può essere ridotta a un solo numero e propone cinque dimensioni: soddisfazione e benessere, prestazioni, attività, comunicazione e collaborazione, efficienza e flusso. Un seguito del 2023 di Abi Noda, Margaret-Anne Storey, Nicole Forsgren e Michaela Greiler, intitolato "DevEx: What Actually Drives Productivity", si concentra su tre dimensioni che gli sviluppatori possono percepire e che le organizzazioni possono cambiare: cicli di feedback, carico cognitivo e stato di flusso. Entrambi gli articoli raccomandano di combinare i dati di percezione con i dati di sistema sui flussi di lavoro, ed entrambi mettono in guardia dall'usare una singola misura, in particolare un conteggio di attività, come sostituto della produttività.

Le tre dimensioni di DevEx sono un punto di partenza pratico.

- **Cicli di feedback.** Con quale rapidità una persona apprende il risultato di ciò che ha fatto? Build lente, test lenti, revisioni lente e approvazioni lente aggiungono ciascuna attesa, e l'attesa spezza la concentrazione. Un feedback rapido è anche un sostegno fondamentale della consegna continua.
- **[Carico cognitivo](https://en.wikipedia.org/wiki/Cognitive_load).** Quanto deve tenere a mente una persona per portare a termine qualcosa? Sistemi complicati, documentazione scarsa, responsabilità poco chiare e molti strumenti aumentano il carico. Ridurlo libera capacità per il lavoro che conta.
- **[Stato di flusso](https://en.wikipedia.org/wiki/Flow_(psychology)).** Una persona riesce a trovare periodi ininterrotti in cui concentrarsi? Riunioni, notifiche, richieste non pianificate e cambi di contesto la erodono.

Le misure in quest'area sono insolitamente facili da usare male. I conteggi di commit, pull request, ticket chiusi od ore di connessione sono misure di attività. Sono facili da raccogliere, dicono poco sulla possibilità delle persone di lavorare bene e invitano alla manipolazione. Le misure di percezione sono soggettive e preziose, e possono essere distorte se le persone temono le conseguenze di una risposta onesta. Qualsiasi misura sulle persone può scivolare nella sorveglianza. La salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) vale con una sfumatura etica: quando una misura sulle persone diventa un obiettivo, le persone smettono di dire la verità sul proprio lavoro (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

Questo argomento si basa sull'esperienza degli utenti interni descritta in precedenza (si veda l'Argomento 6.4 «Esperienza degli utenti e dei dipendenti») e prosegue negli argomenti successivi su benessere, collaborazione, competenze e miglioramento.

## Principi chiave

- **Misurate le condizioni, non le persone.** Chiedete dell'ambiente e dei suoi ostacoli, e riferite a livello di team.
- **Combinate la percezione con i dati sui flussi di lavoro.** Ciò che le persone sentono e ciò che i sistemi registrano omettono ciascuno una parte del quadro.
- **Lasciate che il team possieda la propria verifica di salute.** Le persone più vicine al lavoro scelgono le domande e leggono per prime i risultati.
- **Non usate mai queste misure per classificare o valutare i singoli.** Porrebbe fine alle risposte oneste.
- **Evitate i conteggi di attività come produttività.** Conteggi di commit, ticket od ore non sono risultati.
- **Agite in modo visibile su ciò che ascoltate.** Rimuovete l'ostacolo, oppure spiegate perché non lo fate.
- **Proteggete un ritmo sostenibile.** Un team che corre al massimo a tempo indeterminato sta attingendo al proprio futuro.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tempo del ciclo di feedback | Tempo necessario a una persona per ottenere il risultato di un'azione comune, per tipo di ciclo | mediana e 85º percentile dei minuti o delle ore per build, esecuzione dei test, attesa della revisione del codice e distribuzione, per team | minuti od ore | Timestamp degli strumenti di pipeline e di revisione, aggregati per team | Gestione dei rilasci e delle distribuzioni; miglioramento continuo | Feedback rapido nella consegna continua | Settimanale |
| Quota di tempo di concentrazione | Quota di tempo di lavoro in blocchi ininterrotti di una lunghezza minima concordata, come riferita dal team | ore in blocchi di concentrazione riferite dal team / ore di lavoro, raccolte in un breve sondaggio rapido | percentuale | Sondaggio rapido del team; dati del calendario solo se il team aderisce e sono aggregati | Miglioramento continuo; gestione della conoscenza | Tempo protetto per il lavoro approfondito | Mensile |
| Valutazione del carico cognitivo | Valutazione del team di quanto sia difficile comprendere e modificare un sistema o un processo indicato | valutazione media e dispersione su una breve scala concordata, per sistema | punti della scala | Breve sondaggio rapido collegato a un sistema o a un processo | Progettazione del servizio; gestione della conoscenza | Comprensione condivisa del lavoro | Trimestrale |
| Tempo di risoluzione degli ostacoli | Tempo che intercorre da quando il team segnala un ostacolo alla sua rimozione o a una decisione registrata di non rimuoverlo | mediana e 85º percentile dei giorni dalla segnalazione alla risoluzione o alla decisione | giorni | Elenco degli impedimenti o tracker | Miglioramento continuo; gestione dei problemi | Impedimenti rimossi | Mensile |
| Andamento della verifica di salute del team | Valutazione del team stesso sulle dimensioni da esso scelte, seguita nel tempo | variazione delle valutazioni sulle dimensioni scelte dal team tra una verifica e l'altra | punti della scala | Verifica di salute del team, di proprietà del team | Miglioramento continuo | Riflessione del team su come diventare più efficace | Mensile o trimestrale |
| Soddisfazione per strumenti e processi | Valutazione del team della soddisfazione per gli strumenti e i processi usati quotidianamente | valutazione media o quota di giudizi favorevoli per ogni strumento o processo indicato | punti della scala o percentuale | Breve sondaggio rapido | Gestione dei livelli di servizio; miglioramento continuo | Adeguatezza dell'ambiente al lavoro | Trimestrale |
| Copertura delle dimensioni | Numero di dimensioni SPACE coperte dalle misure che un team usa effettivamente | conteggio delle cinque dimensioni con almeno una misura in uso | conteggio (da 0 a 5) | Registro delle metriche | Misurazione e rendicontazione; governance | Misure bilanciate | Annuale |

Aggregate tutto a livello di team e fissate una dimensione minima del gruppo, ad esempio nessun risultato per un gruppo inferiore a cinque persone. Il tempo di concentrazione è la descrizione del team stesso, e ogni dato ricavato dal calendario è facoltativo, aggregato e concordato dal team. I tempi dei cicli di feedback provengono dai sistemi e descrivono la pipeline, non le persone. La copertura delle dimensioni è un controllo sul programma di misurazione, pensato per evitare di affidarsi a un solo tipo di misura.

## Raccomandazioni

### Partite dalle condizioni in cui le persone lavorano

**1. Chiedete al team che cosa lo rallenta.** Iniziate con una conversazione, non con un sondaggio: che cosa vi fa perdere tempo, che cosa è difficile da capire e che cosa vi interrompe più spesso? Annotate le risposte con le parole del team. La conversazione trova problemi che nessuna dashboard troverebbe e costruisce la fiducia di cui i sondaggi successivi hanno bisogno. Concordate quali due o tre misurare.

**2. Usate le tre dimensioni di DevEx come lente.** Per ciascuna fra cicli di feedback, carico cognitivo e stato di flusso, scegliete una domanda di percezione e, dove possibile, una misura di sistema. Per i cicli di feedback, abbinate «quanto è soddisfatto del tempo che richiedono le build?» alla durata della build. Per il carico cognitivo, chiedete quanto sia difficile comprendere e modificare un sistema indicato. Per il flusso, chiedete con quale frequenza le persone riescono a lavorare senza interruzioni. Abbinate ciò che le persone dicono a ciò che i sistemi registrano ed esaminate le discrepanze.

**3. Coprite più dimensioni di SPACE.** Scegliete misure da almeno tre delle cinque dimensioni, in modo che nessun tipo di dato prevalga. Soddisfazione e benessere, collaborazione, efficienza e flusso contano spesso di più per un team che gestisce servizi. Trattate le misure di attività con grande cautela e usatele solo come contesto. La misura di copertura delle dimensioni mantiene onesto questo impegno.

### Misurate con attenzione

**4. Lasciate che il team possieda e legga per primo la propria verifica di salute.** Una verifica di salute del team è una breve autovalutazione su dimensioni scelte dal team, come divertimento, supporto, velocità, apprendimento e facilità di rilascio. Il team legge e discute i propri risultati prima che qualcun altro veda una sintesi. Gli altri vedono andamenti e ostacoli per cui il team chiede aiuto, non punteggi da confrontare. Questo mantiene lo strumento un ausilio all'apprendimento e dipende dalla [sicurezza psicologica](https://en.wikipedia.org/wiki/Psychological_safety), la convinzione condivisa che nessuno sarà punito per aver parlato apertamente.

**5. Cronometrate i cicli di feedback che contano.** Misurate la durata dei cicli di cui le persone si lamentano: build locale, suite di test, attesa della revisione del codice, distribuzione in un ambiente di test. Riferite mediana e 85º percentile, poiché una coda lenta fa più male di quanto suggerisca la media. Condividete i numeri con il team che possiede la pipeline e fate del miglioramento un lavoro regolare (si veda l'Argomento 2.7 «Metriche di pull request e code review»).

**6. Proteggete la concentrazione e misuratela con delicatezza.** Chiedete della concentrazione nel sondaggio rapido ed esaminate che cosa causa le interruzioni: carico di riunioni, notifiche, richieste non pianificate. Se un team desidera esaminare gli schemi del calendario, fatelo con il suo consenso e aggregate i risultati. Non tracciate mai l'attività o la presenza dei singoli. Lo scopo è trovare interruzioni strutturali da rimuovere, come una riunione che potrebbe essere un documento.

**7. Seguite gli ostacoli fino alla risoluzione.** Tenete un elenco visibile degli ostacoli segnalati dal team e misurate quanto tempo occorre per risolverli o accantonarli consapevolmente. Un elenco lungo che non si accorcia mai insegna che segnalare i problemi è inutile. La decisione di non rimuovere un ostacolo, con una motivazione, conta come risoluzione.

### Usate i risultati per migliorare

**8. Intervenite su una o due cose alla volta.** Scegliete l'ostacolo di maggior valore, risolvetelo e comunicatelo al team. Un'azione visibile fa più per la fiducia di un lungo rapporto. Resistete alla tentazione di avviare molte iniziative insieme.

**9. Abbinate le misure sulle persone alle misure di risultato.** Osservate come i cicli di feedback e il carico cognitivo si collegano ai risultati di consegna e di stabilità (si veda l'Argomento 2.8 «Metriche DORA»). Non dichiarate causalità partendo da una correlazione nei vostri dati. Usate l'abbinamento per trovare domande da esplorare, ad esempio se i team con revisioni più lente abbiano anche cycle time più lunghi.

**10. Tenete i conteggi di attività fuori dalla conversazione.** Non riferite commit, righe di codice o ticket chiusi per persona. I conteggi degli output del team possono essere utili per il flusso, ma dicono poco sulla salute. Se qualcuno chiede metriche di attività individuali, spiegate la ricerca e offrite invece misure delle condizioni.

### Proteggete le persone

**11. Stabilite le regole sulla privacy prima di raccogliere.** Mettete per iscritto che cosa viene raccolto, perché, chi lo vede, per quanto tempo viene conservato e che cosa non sarà mai fatto con i dati. Aggregate a livello di team, sopprimete i gruppi piccoli e lasciate che i rappresentanti delle persone coinvolte riesaminino le regole. Non usate questi dati nelle valutazioni delle prestazioni, nelle promozioni o nei provvedimenti disciplinari.

**12. Fate di un ritmo sostenibile l'impostazione predefinita.** Osservate i segnali di un team che corre troppo: una lunga serie di incidenti fuori orario, uno stato permanente di urgenza, elenchi di ostacoli in crescita, soddisfazione in calo. Trattateli come problemi di sistema da risolvere con ambito, organico o priorità. Un ritmo costante che le persone possono sostenere è un obiettivo di progettazione e favorisce qualità, apprendimento e fidelizzazione (si veda l'Argomento 9.2 «Metriche di soddisfazione e benessere»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tempo del ciclo di feedback | Escludere i casi lenti; misurare un percorso rapido che la maggior parte del lavoro non segue | Riferire l'85º percentile; definire nel registro l'inizio e la fine di ciascun ciclo |
| Quota di tempo di concentrazione | Bloccare tempo nel calendario senza concentrarsi; riferire una concentrazione gonfiata per compiacere i responsabili | Sondaggio rapido di proprietà del team; confronto con le cause delle interruzioni; nessuna rendicontazione individuale |
| Valutazione del carico cognitivo | Valutare bassi i sistemi per evitare controlli; scegliere sistemi facili da valutare | Valutare un elenco fisso di sistemi; confrontare con il tempo di inserimento e gli schemi degli incidenti |
| Tempo di risoluzione degli ostacoli | Chiudere gli ostacoli senza risolverli; rifiutarsi di registrarli | Il team conferma la risoluzione; tasso di ostacoli riaperti |
| Andamento della verifica di salute del team | I responsabili che spingono per buoni punteggi; i team che aggiustano i punteggi per evitare attenzione | Il team possiede i risultati; andamenti condivisi solo con il consenso del team |
| Soddisfazione per strumenti e processi | Interpellare utenti soddisfatti; addestrare il personale a rispondere bene | Tasso e composizione delle risposte; lettura dei commenti; collegamento alle misure di sistema |
| Copertura delle dimensioni | Contare una dimensione con una misura di facciata | Verificare che ogni misura conteggiata sia usata in una decisione |

Una lettura sana mostra cicli di feedback più brevi e più stabili, un carico cognitivo in calo sui sistemi chiave, team che riferiscono una concentrazione reale, ostacoli che vengono segnalati e risolti, verifiche di salute di cui il team si fida e nessun uso dei dati sui singoli.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Sondaggi di percezione | Colgono ciò che i sistemi non possono; costo basso | Soggettivi; vulnerabili a paura e stanchezza |
| Misure sui flussi di lavoro | Oggettive; continue | Non colgono sentimenti e cause; rischio di sorveglianza |
| Verifica di salute di proprietà del team | Onesta e utile al team | Difficile da confrontare; difficile da estendere |
| Sondaggio standard a livello aziendale | Confrontabile tra i team | Meno pertinente; usato per classificare |
| Conteggi di attività | Facili da raccogliere | Sostituti scadenti; facilmente manipolabili |
| Misure centrate sulle condizioni | Indicano cause risolvibili | Richiedono impegno di seguito |
| Sondaggi rapidi frequenti | Tempestivi | Stanchezza da sondaggi |
| Sondaggio annuale | Onere basso | Lento; obsoleto |

La risposta pratica è combinare verifiche di salute di proprietà del team e brevi sondaggi rapidi con misure di flusso di lavoro sui cicli di cui le persone si lamentano, evitare i conteggi di attività e tutelare la privacy. Usate con parsimonia i confronti a livello aziendale, e mai per classificare i team.

## Domande da discutere con il team

**1. Qual è il ciclo di feedback più lento della nostra giornata lavorativa e quanto dura in realtà?**
Scegliete il ciclo di cui le persone si lamentano di più. Cronometratelo dai sistemi e confrontatelo con ciò che dicono le persone. Il facilitatore dovrebbe annotare le sorprese, in entrambe le direzioni. Concordate una modifica che lo accorcerebbe e chi ne è responsabile.

**2. Quale sistema temiamo di modificare e che cosa lo rende difficile?**
Nominate il sistema. La difficoltà sta nel codice, nella documentazione, negli strumenti o nella conoscenza concentrata in poche teste? Chiedete quale miglioramento ridurrebbe di più il carico. Pianificate come capire se ha funzionato.

**3. Quando ciascuno di noi ha avuto per l'ultima volta un lungo blocco di tempo ininterrotto, e che cosa ha interrotto quelli che non sono riusciti?**
Condividete con onestà e senza attribuire colpe. Elencate le interruzioni e classificatele in strutturali (riunioni, notifiche, richieste non pianificate) e occasionali. Scegliete un'interruzione strutturale da ridurre.

**4. Quale ostacolo abbiamo segnalato più di una volta senza risultato?**
Esaminate l'elenco degli ostacoli. Per ogni voce di lunga data, chiedetevi chi potrebbe risolverla e che cosa lo blocca. Se il team ha smesso di segnalare ostacoli, discutete il perché. Concordate quale portare all'attenzione superiore con delle prove.

**5. Che cosa ci farebbe esitare a dare una risposta onesta in una verifica di salute?**
Discutete i timori su come i risultati potrebbero essere usati. Il facilitatore dovrebbe registrare le preoccupazioni e concordare regole: chi vede i dati, che cosa non sarà mai fatto con essi. Se non ci si fida delle regole, ditelo e decidete che cosa farebbe guadagnare fiducia.

**6. Quali delle nostre misure potrebbero salire mentre il lavoro peggiora?**
Elencate le misure e pensate ai modi in cui ciascuna potrebbe migliorare senza aiutare nessuno. Assegnate una salvaguardia a ciascuna. Eliminate ogni misura che non serve a una decisione.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna sanno meglio di tutti che cosa li rallenta e sono i titolari della propria verifica di salute. Dovrebbero nominare gli ostacoli, cronometrare i cicli che controllano e decidere con il team che cosa risolvere per primo. Dovrebbero resistere alle pressioni per riferire l'attività individuale e insistere su misure a livello di team.

### Team di servizio e operations

I team operativi si fanno carico di reperibilità, interruzioni e lavoro non pianificato che erodono concentrazione e ritmo. Dovrebbero porre il carico strutturale come problema di sistema, misurare i cicli dei propri strumenti e mantenere una rotazione sostenibile. Traggono beneficio da elenchi di ostacoli condivisi con i team di consegna, poiché molti ostacoli attraversano il confine.

### Leadership e governance

I dirigenti stabiliscono le condizioni e decidono come usare i dati. Dovrebbero finanziare le correzioni che le misure delle condizioni rivelano, tutelare le regole sulla privacy e chiedere andamenti e ostacoli al posto di punteggi da confrontare. La governance dovrebbe trattare una richiesta di metriche di attività individuali come un motivo per riesaminare le regole e dovrebbe aspettarsi che il lavoro di miglioramento sia visibile.

### Clienti e utenti

Gli utenti traggono beneficio da team che possono lavorare con calma e imparare in fretta, perché i loro problemi vengono risolti bene. Notano anche quando un team è sopraffatto: risposte più lente, errori ripetuti, alto ricambio. Il loro feedback è una prova sulla salute del team vista dall'esterno, e meritano onestà su come vengono stabilite le priorità delle correzioni.

## In pratica: un esempio di ITIL agile

Il gruppo tecnologico di una compagnia assicurativa nazionale ha 14 team che costruiscono e gestiscono servizi per polizze e sinistri. La direzione chiede una dashboard della produttività degli sviluppatori. La prima richiesta riguarda commit e ticket chiusi per persona. La responsabile dell'efficacia ingegneristica propone un approccio diverso. I numeri che seguono sono illustrativi.

Inizia con conversazioni in cinque team. Emergono ripetutamente tre ostacoli: la suite di test richiede 70 minuti, le revisioni del codice attendono a lungo nei team che dipendono da due revisori senior e nessuno si sente in grado di modificare il vecchio servizio di calcolo dei sinistri. Misura ciò che può dai sistemi. Il ciclo mediano di build e test è di 58 minuti, con un 85º percentile di 92. L'attesa mediana per la prima revisione è di 9 ore lavorative e l'85º percentile è di 31 ore. Aggiunge un breve sondaggio rapido trimestrale con le tre domande DevEx, con un gruppo minimo di rendicontazione di cinque persone. La valutazione del carico cognitivo per il servizio di calcolo dei sinistri è 4,4 su una scala a cinque punti in cui 5 significa molto difficile, contro 2,6 per il portale delle polizze. Il tempo di concentrazione riferito dai team è di circa 3 ore al giorno, con riunioni e richieste non pianificate come cause principali. Ogni team conduce la propria verifica di salute su dimensioni da esso scelte e legge soltanto l'andamento complessivo.

Il gruppo concorda quattro azioni con i team. La suite di test viene suddivisa e parallelizzata, e l'85º percentile scende da 92 a 41 minuti nel giro di due mesi. Una rotazione delle revisioni distribuisce il carico oltre i due revisori senior, e l'attesa all'85º percentile scende a 14 ore. Tre team concordano un blocco settimanale senza riunioni e un team ridefinisce il modo in cui le richieste non pianificate lo raggiungono. Il servizio di calcolo dei sinistri diventa un progetto di apprendimento condiviso, con pairing e documentazione, e la sua valutazione del carico cognitivo scende a 3,5 nell'arco di due trimestri. Il tempo di concentrazione riferito sale a circa 4 ore.

Quando un dirigente senior chiede di nuovo i conteggi di commit individuali, la responsabile dell'efficacia ingegneristica spiega la ricerca su SPACE e DevEx e offre la dashboard delle condizioni. La decisione viene registrata, insieme alle regole sulla privacy che stabiliscono che l'attività individuale non sarà mai usata nelle valutazioni. Un team chiede che i risultati della propria verifica di salute non vengano riassunti per la direzione in questo trimestre, e la richiesta è accolta. Il turnover nei team coinvolti si riduce nell'anno successivo, e lei annota di non poter dimostrare il collegamento e di non volerlo affermare.

## Lente di settore

**Startup.** Tutti si conoscono, quindi le conversazioni valgono più dei sondaggi. Cronometrate i principali cicli di feedback, mantenete rapide le build e osservate i segnali di un ritmo insostenibile, perché poche persone portano molto peso. Non importate un grande programma di sondaggi.

**Piccola impresa.** Un piccolo team può essere composto da una o due persone che sia costruiscono sia supportano. Il rischio principale è l'interruzione e la dipendenza dai singoli. Tenete un semplice elenco degli ostacoli, garantite la sostituzione in caso di assenza e chiedetevi regolarmente che cosa vi sta intralciando. I dati a livello individuale sono per natura identificativi, quindi affidatevi alla conversazione.

**Grande impresa.** La scala porta varietà e tentazioni di confronto. Fornite un kit comune (domande dei sondaggi rapidi, cronometraggi dei cicli) lasciando che i team possiedano le proprie verifiche di salute. Aggregate con cura, condividete gli schemi tra i team per diffondere le correzioni e tenete lontane le classifiche. Coinvolgete i comitati aziendali o i rappresentanti dei dipendenti dove esistono.

**Pubblica amministrazione e settore pubblico.** Acquisti, regole di sicurezza e catene di approvazione allungano i cicli di feedback, e il personale può godere di forti tutele sul monitoraggio. Misurate i cicli, coinvolgete i rappresentanti nella definizione delle regole sui dati e usate i risultati per semplificare i processi. I dipendenti pubblici motivati dal valore del servizio traggono beneficio dalla rimozione visibile degli ostacoli (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi sono il tempo dei team per verifiche di salute e sondaggi rapidi, un po' di strumentazione delle pipeline e degli strumenti di revisione, un analista o un coach che aiuti a interpretare i risultati e a facilitare, e il tempo di ingegneria per rimuovere gli ostacoli. La maggior parte di questi costi è modesta rispetto al costo dei cicli lenti moltiplicato per molte persone.

Il ritorno deriva dal tempo recuperato, da minori rilavorazioni, da una migliore fidelizzazione e da un apprendimento più rapido. Stimatelo dai vostri dati: le ore settimanali perse in attesa di build e revisioni nel gruppo, il costo di assunzione e inserimento per sostituire chi se ne va e gli schemi di incidenti o difetti collegati a team sovraccarichi. Siate prudenti nel convertire i minuti in denaro e dichiarate le ipotesi. Evitate affermazioni tratte da studi pubblicati sui guadagni di produttività, a meno che possiate ricostruirne il metodo e l'applicabilità. Ricordate il costo dell'errore: un programma percepito come sorveglianza danneggia la fiducia e la qualità di ogni sondaggio successivo (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Dashboard di produttività individuale.** Misurano l'attività, invitano alla manipolazione e danneggiano la fiducia. Misurate le condizioni a livello di team.
- **Usare i punteggi delle verifiche di salute per confrontare i team.** I team finiscono per gestire il punteggio. Lasciate che i team possiedano i propri risultati.
- **Sondaggi senza azione.** Le persone smettono di rispondere. Risolvete qualcosa di visibile a ogni ciclo.
- **Misurare il tempo di connessione o la presenza.** Premia la visibilità e punisce la concentrazione. Misurate cicli e ostacoli.
- **Una sola misura per tutto.** Perde la maggior parte del quadro. Coprite più dimensioni.
- **Ignorare la coda.** Le mediane nascondono i cicli lenti che fanno male. Riferite i percentili.
- **Dare la colpa alle persone per problemi di sistema.** Gli ostacoli sono di solito strutturali. Correggete la struttura.
- **Considerare normale correre al massimo.** L'urgenza permanente porta all'esaurimento. Trattate il sovraccarico prolungato come un fallimento della pianificazione.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Comprensione delle condizioni | Aneddoto | Sondaggio occasionale | Conversazioni e sondaggi rapidi regolari su cicli di feedback, carico e flusso | Dati di percezione e di flusso di lavoro combinati, con andamenti a livello di team | Visione condivisa delle condizioni tra team e fornitori; i team co-progettano le misure |
| Titolarità ed etica | La direzione legge tutto | Attenzione informale | Verifiche di salute di proprietà del team; regole di privacy scritte | Regole riesaminate con i rappresentanti; divieto di uso individuale fatto rispettare | Regole e pratiche sottoposte a audit indipendente; i team controllano la condivisione dei dati |
| Azione | Lamentele ignorate | Correzioni ad hoc | Elenco degli ostacoli con responsabili; una o due correzioni per ciclo | Correzioni tracciate e collegate ai risultati; ritmo sostenibile monitorato | Rimozione degli ostacoli integrata nella pianificazione; apprendimento ampiamente condiviso |

## Checklist

- [ ] I team hanno detto con parole proprie che cosa li rallenta.
- [ ] Almeno una domanda di percezione e una misura di sistema coprono ciascuna fra cicli di feedback, carico cognitivo e flusso.
- [ ] Le misure provengono da almeno tre dimensioni SPACE.
- [ ] Ogni team possiede la propria verifica di salute e ne legge per primo i risultati.
- [ ] I tempi dei cicli di feedback sono riferiti come mediana e 85º percentile.
- [ ] Un elenco visibile degli ostacoli ha dei responsabili e il tempo di risoluzione è monitorato.
- [ ] I risultati sono riferiti a livello di team con una dimensione minima del gruppo.
- [ ] Regole di privacy scritte stabiliscono che i dati individuali non saranno usati nelle valutazioni.
- [ ] I conteggi di attività non sono riferiti come produttività.
- [ ] Il team vede almeno una correzione per ciclo.

## Prompt IA

**Redigere domande per un sondaggio rapido sulle tre dimensioni di DevEx.**

```text
Redigi un breve sondaggio rapido di non più di sei domande per [tipo di team]
che copra cicli di feedback, carico cognitivo e stato di flusso. Usa una
formulazione neutra, una scala coerente e un commento aperto. Per ogni domanda
suggerisci una misura di sistema corrispondente con cui poterla confrontare.
Non dichiarare risultati di ricerca. Elenca le tue ipotesi e i modi in cui le
domande potrebbero essere fraintese.
```

**Analizzare gli schemi dell'elenco degli ostacoli.**

```text
Ecco l'elenco degli ostacoli del team per l'ultimo [periodo], con le date di
segnalazione, le date di risoluzione e brevi descrizioni: [incolla,
anonimizzato]. Raggruppa gli ostacoli per causa, evidenzia le voci di lunga
data e gli schemi ricorrenti e suggerisci quali uno o due affrontare per primi
e perché. Non dedurre motivazioni né nominare singole persone. Elenca le tue
ipotesi e che cosa il team dovrebbe confermare.
```

**Scrivere le regole di privacy per un programma di salute del team.**

```text
Redigi una serie di regole di una pagina per un programma di salute del team e
di esperienza degli sviluppatori in [tipo di organizzazione]. Copri che cosa
viene raccolto, lo scopo, chi vede che cosa, la dimensione minima del gruppo, la
conservazione, l'impegno che i dati individuali non saranno usati nelle
valutazioni delle prestazioni e il modo in cui il personale può sollevare
preoccupazioni. Segnala tutto ciò che dovrei far riesaminare da ufficio legale,
responsabili della privacy e rappresentanti dei dipendenti. Non trarre
conclusioni legali. Elenca le tue ipotesi.
```

**Confrontare le condizioni con i risultati.**

```text
Per [numero] team abbiamo misure delle condizioni (tempi dei cicli di feedback,
valutazioni del carico cognitivo, tempo di concentrazione) e misure di
risultato (cycle time, tasso di fallimento delle modifiche, incidenti):
[incolla la tabella]. Descrivi gli schemi, indica dove i dati sono troppo scarsi
per concludere qualcosa e suggerisci ipotesi da verificare con i team. Non
dichiarare causalità. Elenca le tue ipotesi e le tue cautele.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di salute del team o di esperienza degli sviluppatori.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica relativa alle persone riporti il proprio vettore di manipolazione, la salvaguardia e le regole di privacy.

## Punti chiave

- Misurate le condizioni in cui le persone lavorano: cicli di feedback, carico cognitivo e flusso.
- Combinate ciò che le persone dicono con ciò che i sistemi registrano ed esaminate le discrepanze.
- Lasciate che i team possiedano le proprie verifiche di salute, riferite a livello di team e non usate mai i dati sui singoli.
- Evitate i conteggi di attività come sostituto della produttività.
- Agite in modo visibile su uno o due ostacoli alla volta e monitorate quanto tempo occorre per risolverli.
- Proteggete un ritmo che il team possa sostenere a tempo indeterminato.

## Riferimenti e letture di approfondimento

1. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
2. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Productivity](https://en.wikipedia.org/wiki/Productivity).
7. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
8. Wikipedia, [Developer experience](https://en.wikipedia.org/wiki/Developer_experience).
9. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
10. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
