# Metriche di collaborazione e passaggi di consegne

**Il lavoro rallenta e la qualità cala ovunque passi di mano: misurate i passaggi di consegne, le attese tra l'uno e l'altro e la dipendenza da singole persone, e usate i numeri per riunire le persone giuste invece di contare chi parla con chi.**

## Panoramica e motivazione

I principi del Manifesto Agile affermano che le persone di business e gli sviluppatori devono lavorare insieme quotidianamente per tutta la durata di un progetto. L'osservazione di fondo è antica e solida: la maggior parte del ritardo in un'organizzazione di servizi non deriva da persone che lavorano lentamente. Deriva dal lavoro che attende tra una persona e l'altra. Una richiesta passa dal service desk a un team di secondo livello, poi a un team applicativo, poi a un amministratore di database, e a ogni passaggio si accoda, perde contesto e rischia di essere rimandata indietro. Le persone coinvolte possono essere tutte rapide. È il sistema a essere lento.

La gestione dei servizi IT (ITSM), così come codificata da ITIL, organizza da tempo il supporto in livelli e team, con l'escalation come meccanismo per portare un problema a chi può risolverlo. Questa struttura ha dei vantaggi: specializzazione, responsabilità chiare e accesso controllato. Crea però anche passaggi di consegne, e i passaggi di consegne hanno un costo. La pratica agile e DevOps risponde costruendo team interfunzionali che portano avanti una parte maggiore del lavoro da un capo all'altro e incoraggiando la collaborazione in tempo reale. Le due tradizioni giungono a conclusioni simili: meno passaggi di consegne, attese più brevi tra l'uno e l'altro e persone in grado di risolvere il problema che ci lavorano insieme.

Diverse idee aiutano la misurazione.

- **Passaggi di consegne e code.** Ogni volta che il lavoro passa da un team a un altro, in genere attende in una coda. Il tempo trascorso in attesa è spesso molto maggiore del tempo trascorso a lavorare. Per questo l'efficienza del flusso, introdotta in precedenza, è di solito bassa (si veda l'Argomento 2.2 «Lead time, cycle time ed efficienza del flusso»). Un [collo di bottiglia](https://en.wikipedia.org/wiki/Bottleneck_(production)) è un punto di capacità limitata in un processo e determina il throughput dell'insieme.
- **La struttura plasma la comunicazione.** La [legge di Conway](https://en.wikipedia.org/wiki/Conway%27s_law) afferma che le organizzazioni progettano sistemi che rispecchiano le proprie strutture di comunicazione. Vale anche il contrario, ed è praticabile: se volete un sistema con meno dipendenze, disponete i team in modo da ridurre le dipendenze tra loro. I confini tra i team creano passaggi di consegne, e i passaggi di consegne plasmano l'architettura.
- **Dipendenze.** Una [dipendenza](https://en.wikipedia.org/wiki/Dependency_(project_management)) è una relazione in cui un lavoro non può procedere finché un altro non termina. Le dipendenze tra team sono una delle principali fonti di ritardo e possono essere mappate, contate e ridotte.
- **I costi di coordinamento crescono con le persone.** La [legge di Brooks](https://en.wikipedia.org/wiki/Brooks%27s_law), tratta dai saggi di Frederick Brooks sui progetti software, osserva che aggiungere persone a un progetto in ritardo può farlo ritardare ancora di più, in parte per il sovraccarico di comunicazione aggiunto. Più persone in una conversazione non è automaticamente meglio.
- **Dipendenza dai singoli.** Il [bus factor](https://en.wikipedia.org/wiki/Bus_factor) è il numero di persone che dovrebbero essere indisponibili per fermare un progetto, di solito usato per evidenziare il rischio quando la conoscenza risiede in una sola testa. È una proprietà della distribuzione della conoscenza, non una valutazione di nessuna persona.

Le misure di collaborazione hanno un lato oscuro. Contare messaggi, riunioni o collegamenti di rete come misura della collaborazione è facile e allettante, e scivola rapidamente nel monitoraggio delle comunicazioni delle persone. La salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) vale per il gruppo e per la privacy: quando la «collaborazione» diventa un obiettivo, le persone producono attività visibile, e quando diventa sorveglianza smettono di parlare apertamente (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»). Le misure qui presentate guardano perciò agli elementi di lavoro, ai passaggi di consegne e alle dipendenze, e agli schemi a livello di team. Non leggono i messaggi né classificano i singoli.

Questo argomento si collega alle misure di flusso della Parte 2, alle misure di incidenti e richieste della Parte 3 e ai passaggi di consegne con i fornitori della parte precedente (si veda l'Argomento 8.4 «Metriche di fornitori e contratti»).

## Principi chiave

- **Misurate il lavoro, non le conversazioni.** Passaggi di consegne, attese e dipendenze sono proprietà degli elementi di lavoro e dei team.
- **Meno passaggi di consegne battono passaggi più rapidi.** Il miglior passaggio di consegne è quello che non avviene.
- **Riunite le persone.** La collaborazione in tempo reale spesso elimina un'intera catena di attese.
- **Rendete visibili le dipendenze e riducetele.** Mappatele, contatele e cambiate i confini dei team o l'architettura dove fanno più male.
- **Diffondete la conoscenza in modo deliberato.** I punti singoli di conoscenza sono rischi, e la condivisione è un'attività di progettazione.
- **Proteggete la concentrazione.** Una collaborazione che riempie ogni ora di riunioni distrugge il tempo per svolgere il lavoro.
- **Coinvolgete continuamente gli stakeholder.** Domande risolte in ore servono meglio di risposte raccolte in riunioni settimanali.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Numero di passaggi di consegne | Numero di volte in cui un elemento di lavoro cambia team proprietario prima del completamento | mediana e 85º percentile dei trasferimenti da team a team per elemento completato, per tipo di elemento | trasferimenti per elemento | Storico delle assegnazioni in ITSM o nel tracker, aggregato per team | Gestione degli incidenti; gestione delle richieste di servizio; abilitazione delle modifiche | Team interfunzionali che portano il lavoro da un capo all'altro | Mensile |
| Quota di attesa nei passaggi di consegne | Quota del tempo trascorso di un elemento passata in attesa dopo un passaggio di consegne prima che il lavoro riprenda | tempo tra il passaggio di consegne e la prima azione del team ricevente / tempo totale trascorso, mediana sugli elementi | percentuale | Timestamp di assegnazione e di attività | Gestione degli incidenti; gestione delle richieste di servizio | Efficienza del flusso; tempo di coda | Mensile |
| Tasso di riassegnazione | Quota di elementi passati tra team più di due volte o restituiti a un team precedente | elementi riassegnati più di due volte o restituiti / elementi completati | percentuale | Storico delle assegnazioni | Gestione degli incidenti; gestione dei problemi | Rilavorazione e lavoro che rimbalza | Mensile |
| Ritardo da dipendenza | Tempo che gli elementi trascorrono bloccati in attesa di un altro team | mediana e 85º percentile dei giorni in uno stato di blocco da parte di un altro team, con la dipendenza indicata | giorni | Stato di blocco e campo di dipendenza del tracker | Abilitazione delle modifiche; gestione dei rilasci e delle distribuzioni | Età degli elementi di lavoro bloccati | Mensile |
| Tasso di risoluzione collaborativa | Quota di incidenti risolti da persone di più team che lavorano insieme in tempo reale senza escalation sequenziale | incidenti con una collaborazione in tempo reale registrata (ad esempio un canale o una chiamata condivisi) risolti senza ulteriori passaggi di consegne / incidenti di priorità idonea | percentuale | Registrazioni degli incidenti con etichetta di collaborazione | Gestione degli incidenti; gestione degli incidenti maggiori | Lavoro congiunto sui problemi (swarming) | Mensile |
| Copertura della conoscenza | Quota di componenti critici con almeno un numero stabilito di membri del team in grado di gestirli e modificarli | componenti critici con almeno il numero obiettivo di persone in grado di gestirli e modificarli / componenti critici | percentuale | Mappa di competenze e responsabilità gestita dal team | Gestione della conoscenza; gestione della continuità del servizio | Titolarità condivisa e titolarità collettiva del codice | Trimestrale |
| Tempo di risposta degli stakeholder | Tempo che intercorre da una domanda del team a uno stakeholder fino a una risposta utilizzabile | mediana e 85º percentile delle ore dalla domanda registrata alla risposta registrata | ore | Registro delle domande o campo del tracker per le domande aperte | Gestione dei livelli di servizio; gestione delle relazioni con il business | Coinvolgimento continuo degli stakeholder | Mensile |

Aggregate a livello di team, di coda o di servizio e non riferite mai per singolo. Il numero di passaggi di consegne esclude le assegnazioni automatiche che non cambiano il team proprietario. La quota di attesa inizia quando l'elemento viene assegnato al team ricevente e termina alla sua prima azione registrata. La copertura della conoscenza usa il giudizio del team stesso su chi sappia gestire un componente, riesaminato con il team, e non classifica mai i singoli. I dati sulla collaborazione provengono da etichette e registrazioni degli elementi, non dalla lettura dei messaggi.

## Raccomandazioni

### Mappate i passaggi di consegne

**1. Disegnate il percorso di un elemento tipico.** Scegliete un tipo comune di richiesta o di incidente e ripercorretene il cammino dal primo contatto alla risoluzione: ogni team, ogni coda, ogni attesa. Usate lo storico del tracker per esempi reali, non il diagramma ufficiale del processo. La mappa mostra dove il lavoro attende e dove rimbalza. Condividetela con i team coinvolti e chiedete loro di individuare gli sprechi che vedono.

**2. Misurate passaggi di consegne e attese dallo storico degli elementi di lavoro.** Usate i timestamp di assegnazione e di attività per calcolare numero di passaggi, quota di attesa e tasso di riassegnazione per ogni tipo di elemento. Osservate la distribuzione: la maggior parte degli elementi può passare una volta sola, mentre una lunga coda rimbalza molte volte. È nella coda che si trovano i ritardi maggiori e la maggiore frustrazione.

**3. Leggete i dati con le persone che svolgono il lavoro.** Un alto tasso di riassegnazione può riflettere responsabilità poco chiare, informazioni mancanti o un legittimo smistamento. Chiedete ai team prima di concludere. Sanno perché gli elementi rimbalzano e che cosa lo fermerebbe.

### Riducete passaggi di consegne e attese

**4. Portate la capacità al lavoro.** Dove molti elementi vanno a un secondo team per un'azione semplice, chiedetevi se al primo team si potrebbero dare la conoscenza, l'accesso o l'automazione per eseguirla. Il self-service e i runbook possono eliminare interi passaggi di consegne (si veda l'Argomento 3.7 «Metriche di self-service e automazione»). Fate attenzione che spostare il lavoro non si limiti a sovraccaricare il primo team.

**5. Usate la collaborazione al posto dell'escalation sequenziale.** Per gli incidenti complessi o urgenti, riunite le persone competenti in tempo reale, con una persona che coordina, invece di far passare il ticket attraverso i livelli. Questa pratica, spesso chiamata swarming, elimina le attese e la perdita di contesto che l'escalation a livelli crea. Monitorate il tasso di risoluzione collaborativa ed osservate se risultati e soddisfazione migliorano (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori»).

**6. Chiarite la titolarità ai confini.** Per ogni servizio e componente, indicate chi ne è responsabile, come raggiungerlo e di che cosa ha bisogno in un passaggio di consegne. Un breve modello delle informazioni richieste, concordato con il team ricevente, riduce i rinvii per dettagli mancanti. Riesaminate i casi di riassegnazione per trovare lacune di titolarità.

**7. Riducete le dipendenze dove fanno più male.** Mappate le dipendenze tra i team, contate quanto spesso ciascuna causa ritardo e affrontate le peggiori. Le opzioni includono cambiare l'architettura, dare a un team la capacità che continua ad attendere o riorganizzare i team attorno ai servizi. I [team interfunzionali](https://en.wikipedia.org/wiki/Cross-functional_team) che contengono le competenze necessarie per consegnare un servizio dall'inizio alla fine minimizzano le dipendenze e portano la collaborazione continua nella struttura. La legge di Conway suggerisce che struttura e progettazione andrebbero cambiate insieme.

### Diffondete conoscenza e coinvolgimento

**8. Rendete visibile la copertura della conoscenza e miglioratela.** Tenete una semplice mappa dei componenti critici e delle persone in grado di gestire e modificare ciascuno. Cercate i componenti noti a una sola persona e pianificate pairing, documentazione e rotazione per diffonderne la conoscenza. Trattate il risultato come un rischio per il sistema. Lo scopo è la resilienza e un ritmo sostenibile per le persone che sanno di più, dato che chi è l'unico esperto non può andare in ferie.

**9. Tenete gli stakeholder costantemente coinvolti.** Concordate come raggiungere gli stakeholder con le domande e con quale rapidità debbano arrivare le risposte. Un team che attende una settimana per una decisione su un dettaglio sta aspettando lo stakeholder, e il costo è reale. Registrate domande e risposte, misurate il tempo di risposta e usatelo nelle conversazioni con gli stakeholder sul loro coinvolgimento.

**10. Proteggete il tempo per il lavoro concentrato.** La collaborazione dovrebbe avere uno scopo. Riesaminate le riunioni che riempiono il calendario e chiedetevi per ciascuna quale decisione sostenga. Riducete il numero di persone nelle conversazioni che non ne hanno bisogno, in linea con la legge di Brooks. Abbinatelo alle misure di concentrazione dell'argomento precedente sulla salute del team (si veda l'Argomento 9.1 «Salute del team ed esperienza degli sviluppatori»).

### Mantenete l'onestà

**11. Non misurate il volume della comunicazione.** Contare messaggi, riunioni o collegamenti di rete dice poco sul fatto che le persone lavorino bene insieme e invita al monitoraggio dei singoli. Se il vostro team sceglie di usare l'analisi delle reti sociali per capire come fluiscono le informazioni, fatelo con consenso, a livello di gruppo e per l'apprendimento del team stesso, e mai per valutare i singoli.

**12. Riesaminate le misure dei passaggi di consegne con team e fornitori.** Condividete gli schemi tra i team e i fornitori coinvolti e concordate uno o due miglioramenti congiunti. Verificate se numero di passaggi e attese diminuiscono. Per i confini con i fornitori, includete le misure nelle revisioni congiunte (si veda l'Argomento 8.4 «Metriche di fornitori e contratti»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Numero di passaggi di consegne | Mantenere gli elementi assegnati a un team mentre altri svolgono il lavoro; riassegnare a una coda condivisa per evitare il conteggio | Verificare l'attività effettiva per team; contare i passaggi in base all'attività, non solo all'assegnazione |
| Quota di attesa nei passaggi di consegne | Registrare una prima azione che è solo una presa d'atto; assegnare al team giusto in ritardo | Definire la «prima azione» come un passo sostanziale; confrontare con soddisfazione e tempo di risoluzione |
| Tasso di riassegnazione | Rifiutarsi di riassegnare anche quando sbagliato; chiudere e riaprire gli elementi sotto un altro team | Qualità della risoluzione e tasso di riapertura; campionare gli elementi rimbalzati |
| Ritardo da dipendenza | Non registrare lo stato di blocco; indicare la dipendenza sbagliata | Confrontare con cycle time ed età degli elementi; riesaminare il campo di dipendenza con i team |
| Tasso di risoluzione collaborativa | Etichettare ogni incidente come collaborativo; creare canali condivisi senza vero lavoro | Verificare che la chiamata o il canale abbia incluso chi ha risolto; tempo di risoluzione e risultati |
| Copertura della conoscenza | Elencare persone che in teoria potrebbero svolgere il lavoro; gonfiare la mappa | Prove di pairing o esercitazioni; chiedere chi ha effettivamente eseguito l'ultima modifica |
| Tempo di risposta degli stakeholder | Registrare le domande in ritardo; segnare come ricevuta una risposta che non è utilizzabile | Lo stakeholder conferma che la risposta è utilizzabile; campionare le domande |

Una lettura sana mostra meno passaggi di consegne per gli elementi comuni, attese più brevi ai confini che restano, meno elementi rimbalzati, dipendenze che si riducono, più incidenti risolti da persone che lavorano insieme, componenti critici noti a più persone e stakeholder che rispondono in ore.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Supporto a livelli con escalation | Specializzazione, controllo dell'accesso | Passaggi di consegne, attese, perdita di contesto |
| Team interfunzionali | Meno passaggi di consegne, titolarità condivisa | Richiedono competenze ampie; possono duplicare gli specialisti |
| Risoluzione collaborativa | Più rapida, migliore apprendimento | Coinvolge più persone insieme; richiede coordinamento |
| Escalation sequenziale | Uso efficiente degli specialisti | Più lenta per i problemi complessi |
| Team specialistici centralizzati | Profondità di competenza, standard coerenti | Colli di bottiglia, code |
| Specialisti integrati nei team | Accesso rapido | Isolamento; standard disomogenei |
| Cultura di molte riunioni | Consapevolezza condivisa | Consuma la concentrazione; rallenta il lavoro |
| Comunicazione scritta asincrona | Preserva la concentrazione; registra le decisioni | Più lenta per questioni urgenti o ambigue |

La risposta pratica è mantenere gli specialisti dove conta la profondità, riunire le persone in tempo reale per i problemi complessi o urgenti, ridurre i passaggi di consegne con capacità e titolarità chiare e bilanciare le riunioni con una concentrazione protetta.

## Domande da discutere con il team

**1. Ripercorrete l'ultimo incidente o l'ultima richiesta che è rimbalzata tra i team. Dove ha atteso e perché?**
Usate lo storico dell'elemento. Segnate ogni passaggio di consegne e ogni attesa. Il facilitatore dovrebbe cercare informazioni mancanti, titolarità poco chiara e code che nessuno controlla. Concordate una modifica che avrebbe fermato il rimbalzo.

**2. Quale team aspettiamo più spesso e di che cosa ha bisogno da noi per essere più rapido?**
Elencate le dipendenze e i ritardi che causano. Invitate l'altro team alla conversazione o preparate domande per lui. Concordate una modifica al modello dei passaggi di consegne o all'accordo di lavoro.

**3. Che cosa sanno fare solo uno o due di noi e che cosa succede quando sono assenti?**
Nominate i componenti o le attività. Chiedete quale piano diffonderebbe la conoscenza: pairing, documentazione, rotazione. Il facilitatore dovrebbe fare attenzione a trattarlo come un rischio per il sistema e una questione di carico di lavoro per gli esperti.

**4. Quando risolvere un problema insieme in tempo reale ha funzionato meglio che passarlo oltre?**
Ricordate un esempio. Che cosa lo ha fatto funzionare: le persone giuste, un coordinatore, una visione condivisa? Discutete quando usare questo approccio e come abilitarlo, ad esempio con un canale permanente e regole su chi si unisce.

**5. Quanto attendiamo le risposte dai nostri stakeholder e quanto ci costa?**
Esaminate le domande aperte e la loro età. Discutete che cosa rallenta le risposte: disponibilità, domande poco chiare o autorità poco chiara. Concordate un'aspettativa con gli stakeholder e un modo per monitorarla.

**6. Quali delle nostre riunioni potrebbero essere sostituite da una nota scritta o da una decisione?**
Elencate le riunioni regolari e per ciascuna chiedetevi quale decisione sostenga e chi debba esserci. Annullatene o accorciatene una. Concordate di proteggere un blocco di tempo senza riunioni.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna detengono molte delle dipendenze e sentono l'attesa. Dovrebbero mappare le proprie dipendenze, chiedere le capacità che continuano ad aspettare, condividere la conoscenza per evitare punti singoli e tenere vicini gli stakeholder. Una composizione interfunzionale spesso elimina i ritardi maggiori.

### Team di servizio e operations

I team di operazioni e di supporto stanno al centro dei passaggi di consegne: ricevono, instradano e risolvono. Dovrebbero mantenere informazioni chiare sulla titolarità, usare la collaborazione in tempo reale per i problemi difficili e registrare con accuratezza i passaggi di consegne. Sanno quali confini causano più difficoltà e possono dire quali informazioni eviterebbero i rinvii.

### Leadership e governance

I dirigenti plasmano la struttura che crea i passaggi di consegne. Dovrebbero esaminare i dati su passaggi e dipendenze nel progettare i team e i finanziamenti, sostenere i team interfunzionali dove aiutano ed evitare misure del volume di comunicazione. La governance dovrebbe trattare ritardi ripetuti a uno stesso confine come un problema strutturale da risolvere.

### Clienti e utenti

Gli utenti vivono i passaggi di consegne come l'essere rimbalzati, il doversi ripetere e l'attendere. Andrebbe detto loro chi è responsabile del loro problema e andrebbero tenuti informati. La loro esperienza del rimbalzo è una misura diretta di quanto bene funzioni la collaborazione, e il loro feedback andrebbe letto insieme ai numeri (si veda l'Argomento 6.1 «Metriche di soddisfazione del cliente»).

## In pratica: un esempio di ITIL agile

Il gruppo IT di un rivenditore nazionale gestisce un service desk, un team di infrastruttura, un team di piattaforma applicativa e diversi team di prodotto. Gli utenti segnalano che le richieste sul sistema di punto vendita richiedono troppo tempo. I numeri che seguono sono illustrativi.

Il responsabile del servizio ripercorre 60 richieste recenti. La richiesta mediana passa attraverso 3 team e l'85º percentile attraverso 6. Nel caso mediano, il 71 per cento del tempo trascorso è speso in attesa dopo un passaggio di consegne, prima che il team ricevente agisca. Il 22 per cento delle richieste è riassegnato più di due volte, spesso tra i team di infrastruttura e di piattaforma, che credono ciascuno che il problema spetti all'altro. Il tempo di blocco in attesa di un altro team ha una mediana di 3 giorni per le richieste che riguardano certificati e di 8 giorni all'85º percentile. La conoscenza del rinnovo dei certificati della piattaforma risiede in un solo ingegnere, e altri due componenti critici sono noti ciascuno a una sola persona. Gli stakeholder delle operazioni di negozio impiegano una mediana di 26 ore per rispondere alle domande del team di consegna.

Il gruppo concorda quattro modifiche con i team. Una breve tabella di titolarità indica quale team possiede ciascun componente del servizio di punto vendita e quali informazioni deve contenere un passaggio di consegne. Il service desk ottiene accesso ai runbook e un'automazione per il rinnovo dei certificati, che elimina un passaggio di consegne frequente. Per gli incidenti prioritari, il gruppo istituisce un canale permanente e una regola per cui il coordinatore dell'incidente coinvolge subito le persone competenti, invece di fare escalation per livelli. Il team di piattaforma affianca una seconda e una terza persona sul processo dei certificati e pianifica un pairing analogo per gli altri due componenti, con tempo protetto nel piano. Il team di consegna e le operazioni di negozio concordano una risposta nella stessa giornata per le domande bloccanti, monitorata in un registro delle domande.

Tre mesi dopo, la richiesta mediana passa attraverso 2 team, la quota di attesa scende al 38 per cento e il tasso di riassegnazione al 9 per cento. Le richieste legate ai certificati hanno un tempo di blocco mediano inferiore a un giorno. La copertura della conoscenza sui componenti critici sale dal 52 all'81 per cento. Il tempo di risposta mediano delle operazioni di negozio scende a 7 ore. Al responsabile IT viene chiesta una misura di quanto i team comunichino. Il responsabile del servizio spiega che il volume dei messaggi dice poco sul fatto che il lavoro scorra e che tracciarlo potrebbe minare la fiducia, e offre invece le misure di passaggi di consegne e di attesa. La decisione viene registrata e la tabella di titolarità viene aggiunta alla descrizione del servizio.

## Lente di settore

**Startup.** I team piccoli collaborano in modo naturale e i passaggi di consegne compaiono quando emergono gli specialisti. Mantenete i team interfunzionali il più a lungo possibile, documentate la titolarità in modo leggero e osservate la conoscenza detenuta da una sola persona. Non importate troppo presto il supporto a livelli.

**Piccola impresa.** Una o due persone possono coprire tutto, e il rischio maggiore è la dipendenza da loro. Condividete la conoscenza con semplici runbook e coprite le assenze. I passaggi di consegne ai fornitori sono il confine principale, quindi mantenete contatti e percorsi di escalation chiari.

**Grande impresa.** La scala crea molti team, livelli e fornitori, e i passaggi di consegne si moltiplicano. Mappate i percorsi più comuni degli elementi, progettate i confini dei team attorno ai servizi e usate ruoli di coordinamento per gli incidenti tra più team. Condividete i dati sui passaggi di consegne tra i team, in modo che i confini ricevano attenzione congiunta.

**Pubblica amministrazione e settore pubblico.** La responsabilità è spesso suddivisa tra enti, appaltatori e confini giuridici, e i passaggi di consegne coinvolgono acquisti e approvazioni formali. Rendete esplicita la tabella di titolarità, usate revisioni congiunte con gli appaltatori e canali condivisi per gli incidenti che attraversano i confini (si veda l'Argomento 8.4 «Metriche di fornitori e contratti»).

## Business case: motivazioni, ROI e TCO

I costi sono lo sforzo per estrarre e analizzare lo storico delle assegnazioni, il tempo dei team per ripercorrere i percorsi e concordare la titolarità, il costo della formazione incrociata ed eventuali strumenti per la collaborazione in tempo reale. Ristrutturare i team è una decisione più ampia, con costi propri.

I ritorni sono tempi più brevi di risoluzione e di consegna, meno rilavorazioni da elementi rimbalzati, minor rischio da punti singoli di conoscenza e un ambiente di lavoro più sereno. Costruite il caso dai vostri dati: la quota di tempo trascorso in attesa, il numero di elementi che rimbalzano, il costo dei ritardi al confine peggiore e l'effetto delle assenze di persone chiave su incidenti passati. Evitate di citare dati pubblicati sul costo dei passaggi di consegne a meno che possiate ricostruirne fonte e contesto. Contate il costo delle modifiche e confrontatelo con il ritardo eliminato (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Contare messaggi o riunioni.** Premia il rumore e invita alla sorveglianza. Misurate il flusso del lavoro.
- **Ottimizzare la velocità di ogni passaggio di consegne.** L'obiettivo sono meno passaggi di consegne. Eliminateli dove potete.
- **Dare al team ricevente la colpa delle attese.** La causa è spesso la coda e la struttura. Guardate il sistema.
- **Fare escalation per impostazione predefinita.** I livelli sequenziali aggiungono attesa. Riunite le persone per i problemi complessi.
- **Titolarità poco chiara.** Gli elementi rimbalzano. Pubblicate una tabella di titolarità e mantenetela aggiornata.
- **Esperti eroi.** I punti singoli di conoscenza sono un rischio e un peso. Diffondete la conoscenza in modo deliberato.
- **Riunioni come collaborazione.** Possono soffocare il lavoro. Riesaminatele rispetto alle decisioni.
- **Trattare la copertura della conoscenza come una valutazione individuale.** Diventa una classifica. Mantenetela una misura di sistema.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Visibilità dei passaggi di consegne | Aneddoti | Percorsi disegnati per pochi servizi | Numero di passaggi, quota di attesa e riassegnazioni misurati dallo storico | Misure riesaminate con i team e collegate ai risultati | Visione condivisa tra team e fornitori; confini riprogettati a partire dai dati |
| Riduzione dei passaggi di consegne | Escalation per impostazione predefinita | Alcuni runbook e modelli | Tabelle di titolarità; capacità spostata al primo team; collaborazione per i problemi difficili | Dipendenze mappate e ridotte; risoluzione collaborativa monitorata | Team organizzati attorno ai servizi con dipendenze minime in tutta l'organizzazione |
| Conoscenza e stakeholder | Gli esperti portano tutto | Condivisione informale | Copertura della conoscenza mappata; domande degli stakeholder registrate | Copertura e tempi di risposta gestiti; pairing pianificato | Conoscenza e decisioni fluiscono liberamente tra team, fornitori e stakeholder |

## Checklist

- [ ] Il percorso di un elemento tipico è stato ripercorso dallo storico reale del tracker.
- [ ] Numero di passaggi di consegne, quota di attesa e tasso di riassegnazione sono misurati per tipo di elemento.
- [ ] La titolarità di ogni servizio e componente è pubblicata e aggiornata.
- [ ] Un modello dei passaggi di consegne indica le informazioni di cui il team ricevente ha bisogno.
- [ ] Gli incidenti complessi o urgenti usano la collaborazione in tempo reale con un coordinatore.
- [ ] Le dipendenze tra team sono mappate e le peggiori vengono ridotte.
- [ ] La copertura della conoscenza dei componenti critici è mappata, con un piano per diffonderla.
- [ ] Le domande degli stakeholder sono registrate e i tempi di risposta riesaminati.
- [ ] Nessuna misura conta messaggi, riunioni o comunicazione individuale.
- [ ] I risultati sono condivisi con i team e i fornitori coinvolti.

## Prompt IA

**Analizzare un percorso di elementi di lavoro.**

```text
Ecco gli storici di assegnazione anonimizzati per [numero] [tipo di elemento]:
elemento, sequenza dei team, timestamp di assegnazione e di prima azione:
[incolla]. Calcola o descrivi numero di passaggi di consegne e attese,
identifica i percorsi comuni e la lunga coda e suggerisci le probabili ragioni
di attesa e rimbalzo, con domande da porre ai team. Non dedurre nulla sui
singoli. Elenca le tue ipotesi.
```

**Redigere una tabella di titolarità.**

```text
Redigi una tabella di titolarità per il servizio [nome] con questi componenti e
team: [elenco]. Per ogni componente includi il team proprietario, come
raggiungerlo, che cosa deve contenere un passaggio di consegne e il percorso di
escalation. Segnala i componenti in cui la titolarità appare poco chiara o
condivisa. Mantienila a una pagina. Elenca le tue ipotesi e le domande per i
team.
```

**Pianificare la diffusione della conoscenza.**

```text
I nostri componenti critici e il numero di persone in grado di gestire ciascuno
sono: [incolla]. Proponi un piano per diffondere la conoscenza dei componenti
noti a meno di [numero] persone: pairing, documentazione, esercitazioni e
rotazione. Suggerisci come proteggere il carico di lavoro degli esperti durante
il piano e come monitorare i progressi senza classificare i singoli. Elenca le
tue ipotesi e i rischi.
```

**Progettare un approccio collaborativo agli incidenti.**

```text
Progetta un approccio leggero per la risoluzione collaborativa in tempo reale
degli incidenti prioritari in [tipo di organizzazione] con [team]. Includi come
aprire uno spazio condiviso, chi coordina, chi viene invitato, che cosa viene
registrato e come evitare di coinvolgere troppe persone. Includi misure per
capire se aiuta. Elenca le tue ipotesi e le tue cautele.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di passaggi di consegne o di collaborazione.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica di collaborazione misuri il lavoro e non i singoli, con il proprio vettore di manipolazione e la salvaguardia.

## Punti chiave

- La maggior parte del ritardo sta nelle attese tra i passaggi di consegne: misurate numero di passaggi, quota di attesa e riassegnazioni dallo storico degli elementi di lavoro.
- Riducete i passaggi di consegne portando la capacità al lavoro, chiarendo la titolarità e mappando e tagliando le dipendenze.
- Riunite le persone giuste in tempo reale per i problemi complessi o urgenti.
- Diffondete la conoscenza dei componenti critici e trattate i punti singoli di conoscenza come un rischio di sistema.
- Mantenete gli stakeholder continuamente coinvolti, con risposte rapide alle domande bloccanti.
- Non misurate mai il volume della comunicazione né valutate i singoli sulla collaborazione.

## Riferimenti e letture di approfondimento

1. Conway, M. E., "How Do Committees Invent?" *Datamation*, 14(4), 1968.
2. Skelton, M., and Pais, M., *Team Topologies: Organizing Business and Technology Teams for Fast Flow*, IT Revolution, 2019.
3. Brooks, F. P., *The Mythical Man-Month: Essays on Software Engineering*, Addison-Wesley, 1975 (anniversary edition 1995).
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
8. Wikipedia, [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law).
9. Wikipedia, [Dependency (project management)](https://en.wikipedia.org/wiki/Dependency_(project_management)).
10. Wikipedia, [Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law).
11. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Cross-functional team](https://en.wikipedia.org/wiki/Cross-functional_team).
