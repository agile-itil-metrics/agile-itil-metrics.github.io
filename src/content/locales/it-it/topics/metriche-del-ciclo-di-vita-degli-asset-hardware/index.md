# Metriche del ciclo di vita degli asset hardware

**I dispositivi sono gli strumenti quotidiani di persone motivate e, insieme, un flusso di costi, rischi e sprechi: si pianifichi il rinnovo come un flusso costante anziché come uno scossone periodico, si misurino età e guasti a partire dai propri dati e si trattino la dismissione sicura e il riutilizzo come parte del lavoro.**

## Panoramica e motivazione

Dietro ogni servizio ci sono cose fisiche: portatili, telefoni, server, apparati di rete, stampanti e i cavi e i rack che li tengono insieme. L'hardware ha un ciclo di vita che il software non ha. Viene acquistato, spedito, configurato con l'immagine di sistema, consegnato, riparato, spostato, ritirato, cancellato e riciclato, e ogni passaggio ha un costo e un rischio. Un portatile che si guasta durante una chiamata con un cliente costa più del portatile stesso. Un server ritirato che lascia l'edificio con dati sui dischi costa molto più del suo valore di rivendita. Un cassetto di telefoni inutilizzati è capitale che non fa nulla.

L'obiettivo agile di costruire i progetti attorno a persone motivate, fornendo l'ambiente e il supporto di cui hanno bisogno, si applica direttamente. Le persone non possono dare il meglio con un dispositivo lento, guasto o mancante. La tradizione ITIL apporta la visione del ciclo di vita e i registri che l'accompagnano, trattati nell'argomento precedente sulla gestione degli asset IT (si veda l'Argomento 7.1 «Metriche di gestione degli asset IT»). Questo argomento aggiunge le misure specifiche per le apparecchiature fisiche: quanto sono vecchie, con quale frequenza si guastano, quanto bene vengono usate e come vengono dismesse.

La pianificazione dell'hardware è spesso fatta per grandi cicli: sostituire tutto ogni pochi anni, con un unico grande acquisto, e poi convivere con le conseguenze. Un'alternativa più regolare, nello spirito della consegna continua, è rinnovare continuamente una frazione del patrimonio. Questo livella la spesa, distribuisce il carico di lavoro di imaging e consegna e permette di imparare da ciascun lotto prima di acquistare il successivo. Significa anche che servono dati su età e guasti per decidere quando ciascun dispositivo debba uscire.

Tre idee organizzano le misure.

- **Età e guasti.** Il [tasso di guasto](https://en.wikipedia.org/wiki/Failure_rate) di una popolazione di dispositivi cambia nel corso della sua vita, e il [tempo medio tra i guasti](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF, mean time between failures) è una sintesi comune per gli elementi riparabili. Le medie nascondono molto: un lotto con un componente difettoso può guastarsi presto mentre il resto va bene. Si osservino i guasti per modello, lotto e fascia di età e si usi la propria storia, non le cifre dei produttori, per pianificare.
- **Utilizzo.** Un dispositivo che nessuno usa è uno spreco, e un dispositivo sovraccarico è una fonte di attrito. Si misuri se le apparecchiature sono usate e se si adattano al lavoro.
- **Uscita responsabile.** Le apparecchiature ritirate possono contenere dati sensibili, materiali preziosi e pericolosi e contribuire ai [rifiuti elettronici](https://en.wikipedia.org/wiki/Electronic_waste). I rifiuti elettronici sono una preoccupazione ambientale in crescita, e molte giurisdizioni regolamentano come devono essere trattati. La [cancellazione sicura dei dati](https://en.wikipedia.org/wiki/Data_erasure) e il riutilizzo o riciclo certificati sono la fine del ciclo di vita, non un ripensamento. Un approccio di [economia circolare](https://en.wikipedia.org/wiki/Circular_economy) mantiene in uso prodotti e materiali il più a lungo possibile.

Le metriche sull'hardware sono esposte a una distorsione familiare. Un team premiato per una bassa età media dei dispositivi può rinnovare dispositivi che vanno bene. Un team premiato per una spesa contenuta può allungare la vita dei dispositivi finché i guasti non disturbano le persone. Vale la salvaguardia ricavata dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law), perciò ogni misura è abbinata a una verifica che le persone e il pianeta stiano meglio, non solo il numero (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Principi chiave

- **Pianificare un flusso costante.** Si rinnovi una quota del patrimonio in ogni periodo e si impari da ciascun lotto.
- **Decidere in base alle evidenze.** Si usino i propri dati su guasti, età e utilizzo per scegliere quando sostituire.
- **Guardare la distribuzione.** Le medie nascondono la coda di dispositivi vecchi, guasti e inattivi.
- **Contare il costo totale.** Il prezzo di acquisto è una parte del costo di un dispositivo nel corso della sua vita (si veda l'Argomento 7.5 «Costo del servizio ed economia unitaria»).
- **Proteggere i dati fino alla fine.** Un dispositivo non è ritirato finché i suoi dati non sono spariti e l'evidenza non è registrata.
- **Preferire il riutilizzo e la riparazione.** Si mantengano le apparecchiature in servizio finché servono bene le persone.
- **Trattare le apparecchiature come parte dell'ambiente di lavoro.** Le persone hanno bisogno di dispositivi che funzionino.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Profilo di età | Distribuzione dell'età dei dispositivi per classe e quota oltre la vita pianificata | età mediana e età all'85º percentile; quota di dispositivi più vecchi della vita pianificata per la classe | anni; percentuale | Date di acquisto e di distribuzione nel registro degli asset | Gestione degli asset IT; gestione di capacità e prestazioni | Revisione della salute tecnica | Trimestrale |
| Tasso di rinnovo nei tempi | Quota di dispositivi giunti alla sostituzione pianificata che sono stati sostituiti entro la finestra pianificata | dispositivi sostituiti entro la finestra / dispositivi giunti alla sostituzione pianificata nel periodo | percentuale | Registro degli asset e piano di rinnovo | Gestione degli asset IT; gestione delle richieste di servizio | Manutenzione pianificata dell'ambiente di lavoro | Trimestrale |
| Tasso di guasto per modello | Guasti ogni 100 dispositivi all'anno, per modello e fascia di età | guasti hardware nel periodo / dispositivi medi in servizio, riportati su base annua, per 100 | guasti ogni 100 all'anno | Registrazioni di incidenti e riparazioni collegate al registro | Gestione degli incidenti; gestione degli asset IT | Difetti nell'ambiente di lavoro | Trimestrale |
| Quota di dispositivi inattivi | Quota dei dispositivi assegnati senza alcuna attività in un periodo stabilito | dispositivi senza accessi o attività di rete in 60 giorni / dispositivi assegnati | percentuale | Log di gestione degli endpoint, aggregati per classe | Gestione degli asset IT; gestione finanziaria | Riduzione degli sprechi | Mensile |
| Tempo di sostituzione | Tempo per sostituire un dispositivo guasto o smarrito con uno funzionante | mediana e 85º percentile delle ore o dei giorni dalla segnalazione al momento in cui l'utente dispone di un dispositivo funzionante | giorni | Registrazioni di incidenti e richieste | Gestione degli incidenti; gestione delle richieste di servizio | Tempo per sbloccare un membro del team | Mensile |
| Completamento della dismissione sicura | Quota dei dispositivi ritirati con evidenza registrata di cancellazione o distruzione dei dati | dispositivi ritirati con evidenza di cancellazione o distruzione / dispositivi ritirati | percentuale | Registrazioni di dismissione e certificati di cancellazione | Gestione della sicurezza delle informazioni; gestione degli asset IT | Definizione di completato per il ritiro delle apparecchiature | Mensile |
| Tasso di riutilizzo e riciclo | Quota dei dispositivi ritirati che sono stati riutilizzati, ricondizionati o riciclati tramite un canale approvato | dispositivi riutilizzati, ricondizionati o riciclati tramite un canale approvato / dispositivi ritirati | percentuale | Registrazioni di dismissione e dei partner | Gestione degli asset IT; gestione dei fornitori | Obiettivo di sostenibilità nella pianificazione | Trimestrale |

Si definiscano le classi di dispositivi (per esempio portatile standard, postazione per sviluppatori, telefono cellulare, server, switch di rete), ciascuna con la propria vita pianificata. Il tasso di guasto conta solo i guasti hardware ed esclude i guasti software, i danni causati dall'utente codificati a parte e lo smarrimento. Il tempo di sostituzione parte dalla segnalazione e termina quando l'utente conferma di disporre di un dispositivo funzionante, non quando ne viene spedito uno. La quota di dispositivi inattivi esclude i dispositivi volutamente di scorta, che vengono contati come classe a sé.

## Raccomandazioni

### Pianificare il flusso

**1. Stabilire una vita pianificata per ciascuna classe e trattarla come un'ipotesi.** Si parta dalla garanzia del fornitore e dalla propria esperienza e si riveda man mano che arrivano i dati. Una vita pianificata di pochi anni per i portatili, più lunga per gli apparati di rete e più breve per i dispositivi molto sollecitati è tipica, ma il valore giusto per il proprio patrimonio deriva dai propri dati di guasto e di utilizzo. Si scriva la motivazione nel registro.

**2. Rinnovare continuamente in piccoli lotti.** Si sostituisca una quota costante di dispositivi ogni mese o trimestre, ordinata per età, storico dei guasti ed esigenza. I piccoli lotti livellano il costo, distribuiscono il lavoro di imaging e consegna e permettono di provare un nuovo modello con pochi utenti prima di impegnarsi. Un unico grande rinnovo ogni pochi anni concentra rischio e sforzo.

**3. Tenere un modesto margine di scorte.** Un piccolo gruppo di dispositivi pronti accorcia il tempo di sostituzione per guasti, smarrimenti e nuovi arrivati. Si dimensioni il margine in base al proprio storico di guasti e assunzioni e lo si riveda ogni trimestre. Si contino le scorte come classe a sé, in modo che non distorcano l'utilizzo.

**4. Pianificare con la finanza, non contro di essa.** Si concordi come i dispositivi vengono capitalizzati e ammortizzati e come un rinnovo costante appare a bilancio. Le regole di [ammortamento](https://en.wikipedia.org/wiki/Depreciation) influiscono su quando una sostituzione è più economica sulla carta, e non dovrebbero guidare la sostituzione di dispositivi che servono ancora bene le persone. Si mantenga una vista condivisa del piano e delle sue ipotesi.

### Imparare dai propri dati

**5. Studiare i guasti per modello, lotto ed età.** Si colleghino al registro le registrazioni di riparazioni e incidenti e si osservino i guasti ogni 100 dispositivi all'anno per modello e fascia di età. Si cerchino i lotti che si guastano presto, i modelli che si guastano in un modo particolare e l'età alla quale i guasti iniziano ad aumentare. Si usino i risultati per scegliere i modelli e per scegliere i tempi della sostituzione. Si sia cauti con i campioni piccoli e si dica quando un modello ha troppi pochi dispositivi per essere giudicato (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

**6. Usare con criterio garanzia e riparazione.** Si sappia che cosa copre la [garanzia](https://en.wikipedia.org/wiki/Warranty) e per quanto tempo, si registrino i reclami e si confronti il costo della riparazione con quello della sostituzione. La riparazione mantiene le apparecchiature in uso e fuori dal flusso dei rifiuti, e il diritto alla riparazione di componenti e informazioni è un tema di politica attivo in diversi luoghi. A parità di altre condizioni, si preferiscano i modelli che si possono riparare e aggiornare.

**7. Misurare l'uso per trovare ciò che è inattivo e ciò che è sotto sforzo.** Si aggreghino i dati di attività per classe e si cerchino i dispositivi mai usati e quelli costantemente al limite. I dispositivi inattivi possono essere riassegnati o ritirati. I dispositivi sotto sforzo sono attrito, e gli utenti lo avvertiranno (si veda l'Argomento 6.4 «Esperienza degli utenti e dei dipendenti»). Si rispetti la privacy: si riferisca per classe e gruppo, mai per persona, e si usino i dati minimi.

**8. Seguire il tempo di sostituzione come un servizio.** Si misuri quanto tempo occorre a una persona per ottenere un dispositivo funzionante dopo un guasto o uno smarrimento, e si includano i passaggi: segnalazione, approvazione, scorta, imaging, consegna e passaggio di consegne. L'85º percentile dice quanto siano gravi i casi sfortunati. Si corregga per primo il passaggio più lento.

### Gestire bene i dispositivi

**9. Gestire i dispositivi in modo centralizzato e coerente.** La [gestione dei dispositivi mobili](https://en.wikipedia.org/wiki/Mobile_device_management) e strumenti simili permettono di registrare, configurare, aggiornare e cancellare i dispositivi da remoto, riducendo lavoro manuale e rischio. Li si usi per mantenere accurato il registro, per distribuire gli aggiornamenti con riguardo alla concentrazione delle persone e per sostenere la risposta allo smarrimento di un dispositivo.

**10. Fare della dismissione sicura un processo definito.** Si segua uno standard riconosciuto per la sanificazione dei supporti, come le linee guida pubblicate dal National Institute of Standards and Technology degli Stati Uniti, o l'equivalente nella propria giurisdizione. Si registrino metodo, data ed evidenza per ciascun dispositivo e si usino partner certificati per distruzione e riciclo. Un passaggio di dismissione senza evidenza è una lacuna.

**11. Preferire il riutilizzo, poi il riciclo.** Dove i dispositivi funzionano ancora, li si ridistribuisca internamente, li si doni tramite un partner approvato o li si rivenda dopo la cancellazione. Per il resto si usino riciclatori certificati. Si misuri la quota di dispositivi ritirati che va a ciascun canale e i motivi di quelli che finiscono direttamente nei rifiuti. Le normative sui rifiuti elettronici variano a seconda della giurisdizione e vengono fatte rispettare, perciò si coinvolgano i colleghi dell'ufficio legale e della sostenibilità.

**12. Rivedere il ciclo di vita con le persone che lo usano.** Una volta a trimestre si riuniscano finanza, sicurezza, approvvigionamenti, service desk e alcuni utenti per esaminare età, guasti, tempi di sostituzione e dismissione. Si chieda che cosa funziona e che cosa infastidisce le persone. È collaborazione continua attorno all'ambiente di lavoro, e mantiene realistico il piano.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Profilo di età | Sostituire dispositivi sani per abbassare la media; escludere i dispositivi vecchi riclassificandoli come scorte | Tasso di guasto per fascia di età; quota di dispositivi inattivi; revisione delle riclassificazioni |
| Tasso di rinnovo nei tempi | Allargare la finestra pianificata; rinviare le date pianificate modificando il piano | Modifiche al piano registrate con le motivazioni; confronto con i guasti e con il riscontro degli utenti |
| Tasso di guasto per modello | Codificare i guasti come danni causati dall'utente o guasti software; ritardare le registrazioni delle riparazioni | Campionare la codifica dei guasti; confrontare le registrazioni delle riparazioni con quelle degli incidenti |
| Quota di dispositivi inattivi | Contare come uso l'attività di fondo pianificata; riassegnare i dispositivi inattivi a utenti fantasma | Usare l'accesso umano come segnale di attività; verificare a campione le assegnazioni |
| Tempo di sostituzione | Fermare il cronometro alla spedizione; chiudere la richiesta prima che l'utente abbia un dispositivo funzionante | Il cronometro termina alla conferma dell'utente; indagine sulle sostituzioni recenti |
| Completamento della dismissione sicura | Registrare la cancellazione senza evidenza; certificati non abbinati ai numeri di serie | Abbinare i certificati ai numeri di serie; fare l'audit di un campione con il partner di dismissione |
| Tasso di riutilizzo e riciclo | Contare come riciclati i dispositivi inviati a un intermediario con trattamento a valle sconosciuto | Richiedere partner certificati e rendicontazione a valle; audit a campione |

Una lettura sana è un profilo di età con una coda sottile di dispositivi vecchi, tassi di guasto che orientano gli acquisti, tempi di sostituzione brevi, evidenze di dismissione complete e una quota decrescente di apparecchiature destinate ai rifiuti.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Rinnovo a ciclo fisso | Budget prevedibile e regole semplici | Sostituisce dispositivi che vanno bene; crea un grande picco di lavoro |
| Rinnovo continuo in lotti | Costo e carico di lavoro livellati; si impara tra un lotto e l'altro | Richiede buoni dati e disciplina |
| Uso fino al guasto | Costo d'acquisto più basso | Disturba le persone; costo non pianificato; rischio di sicurezza dei sistemi vecchi |
| Vita pianificata breve | Più nuovi, più veloci, meglio supportati | Costo più alto e più sprechi |
| Vita pianificata lunga | Costo inferiore e meno sprechi | Più guasti ed esposizione alla sicurezza nella coda |
| Riparazione e riutilizzo interni | Mantiene i dispositivi in uso; meno sprechi | Richiede competenze e ricambi |
| Dismissione in outsourcing | Trattamento specializzato | Richiede supervisione della catena a valle |

La risposta in prosa è rinnovare continuamente in piccoli lotti, in base a età, guasti ed esigenza, riparare e riutilizzare dove questo serve alle persone e mantenere la catena di dismissione a uno standard che si possa documentare.

## Domande da discutere con il team

**1. Che aspetto ha il quadro di età e guasti dei nostri dispositivi, e chi ha quelli più vecchi?**
Si mostrino la distribuzione per età e il tasso di guasto per fascia. Si osservi chi detiene i dispositivi più vecchi e se sono le persone che hanno più bisogno di apparecchiature affidabili. Il facilitatore dovrebbe chiedere che cosa il team cambierebbe nell'ordine dei rinnovi in base al quadro.

**2. Quanto tempo ci vuole perché qualcuno ottenga un dispositivo funzionante dopo che il proprio si è rotto?**
Si ripercorrano le ultime tre sostituzioni dalla segnalazione al dispositivo funzionante. Si annotino le attese. Ci si chieda quale passaggio potrebbe essere eliminato o automatizzato. Si concordi una modifica e un modo per misurarne l'effetto.

**3. Quali modelli ci danno più problemi, e come lo sappiamo?**
Si elenchino i modelli con i tassi di guasto o di ticket più alti. Si verifichi se il campione è abbastanza grande per giudicare. Ci si chieda come i risultati influenzino il prossimo acquisto. Se non lo fanno, si decida come farli confluire negli approvvigionamenti.

**4. Che cosa faremmo se un dispositivo ritirato saltasse fuori con dei dati dentro?**
Si ripercorrano il percorso di dismissione e le evidenze conservate a ogni passaggio. Ci si chieda dove sia l'anello più debole e chi verifichi il partner a valle. Si concordi una verifica a campione delle evidenze di dismissione per il prossimo trimestre.

**5. Dove sono inattive le nostre apparecchiature, e perché?**
Si osservino i dispositivi senza uso da 60 giorni e le scorte. Ci si chieda se debbano essere riassegnati, ritirati o conservati. La conversazione rivela anche le discrepanze tra ciò che le persone hanno ricevuto e ciò di cui hanno bisogno.

**6. Che cosa servirebbe per riutilizzare o riparare di più di ciò che ritiriamo?**
Si elenchino gli ostacoli: competenze, ricambi, policy o partner. Ci si chieda come sarebbe un progetto pilota con una classe di dispositivi e come verrebbe misurato. Si includano le prospettive della sostenibilità e della finanza.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna dipendono da macchine e dispositivi di test affidabili, e risentono direttamente di build lente e portatili guasti. Dovrebbero segnalare le apparecchiature che li rallentano, partecipare alla scelta dei modelli per i propri ruoli e attendersi un percorso di sostituzione rapido. I team che collaudano su dispositivi fisici, come i telefoni, dovrebbero trattare quei dispositivi come asset con responsabili e un piano di rinnovo.

### Team di servizio e operations

I team di operazioni gestiscono la catena di fornitura: acquisto, ricezione, imaging, distribuzione, riparazione e dismissione. Dovrebbero tenere aggiornati i registri, osservare gli schemi di guasto, mantenere un gruppo di scorte sensato e conservare le evidenze di dismissione. Portano il lavoro fisico, e la loro capacità limita la rapidità del rinnovo.

### Leadership e governance

I dirigenti vogliono costi prevedibili, rischio basso e una storia di sostenibilità. Dovrebbero finanziare un rinnovo costante, chiedere i dati su età e guasti al posto di una semplice età media e pretendere le evidenze di dismissione. La governance dovrebbe verificare che gli obblighi ambientali e di protezione dei dati siano rispettati e che il piano sia riesaminato al mutare delle condizioni.

### Clienti e utenti

Gli utenti vogliono un dispositivo che funzioni, sostituito rapidamente quando non funziona. Possiedono anche una parte del risultato: segnalare presto i problemi, restituire le apparecchiature e informare l'IT quando si spostano. Il loro punto di vista sulle apparecchiature e sul processo di sostituzione è il riscontro più diretto disponibile. Li si coinvolga nella scelta dei modelli per il loro lavoro.

## In pratica: un esempio di ITIL agile

Il reparto IT di un governo di contea supporta 3.800 dipendenti in 40 sedi, con un insieme di dispositivi per ufficio, per il lavoro sul campo e condivisi. I numeri che seguono sono illustrativi.

Ogni quattro anni la contea sostituiva tutti i portatili con un unico appalto, e l'ultimo ciclo si era concluso con un picco di guasti nell'anno precedente alla sostituzione e con mesi di lavoro di imaging nell'anno della sostituzione. Il responsabile della gestione degli asset propone un rinnovo costante e costruisce un quadro dal registro e dalle registrazioni delle riparazioni. L'età mediana dei portatili è di 3,2 anni e l'85º percentile è di 5,1 anni. I guasti ogni 100 portatili all'anno salgono da circa 6 per i dispositivi con meno di tre anni a circa 19 per quelli con più di cinque. Un modello acquistato in un unico lotto mostra 24 guasti ogni 100 all'anno a due anni di età, causati da un difetto della batteria. Il tempo mediano di sostituzione è di 5 giorni, con un 85º percentile di 12 giorni, per lo più in attesa dell'imaging. La quota di dispositivi inattivi è del 7 per cento, per lo più scorte e dispositivi di personale in congedo prolungato. Dei 410 portatili ritirati l'anno scorso, 366 hanno un certificato di cancellazione registrato, un tasso di completamento dell'89 per cento, e il 12 per cento è andato a un riciclatore senza rendicontazione a valle.

Il team apporta quattro modifiche. Passa a un rinnovo trimestrale di circa il 6 per cento dei portatili, ordinato per età e storico dei guasti, con il personale sul campo e i dispositivi più vecchi per primi. Negozia con il fornitore la sostituzione del lotto difettoso in garanzia. Mantiene un gruppo di scorte pari al 2 per cento del patrimonio, precaricato con l'immagine standard, il che riduce l'attesa per l'imaging. Richiede un certificato abbinato al numero di serie per ogni dispositivo dismesso e passa a un riciclatore che rendiconta il trattamento a valle. Avvia inoltre un piccolo progetto pilota per ricondizionare e ridistribuire i dispositivi con meno di quattro anni.

Due trimestri dopo l'85º percentile del tempo di sostituzione è di 4 giorni, la quota di dispositivi con più di cinque anni è scesa dal 22 al 13 per cento, il completamento delle evidenze di dismissione è del 99 per cento e il tasso di riutilizzo e riciclo tramite canali approvati è del 94 per cento. L'ufficio finanziario chiede un unico obiettivo per l'età media dei dispositivi, e il responsabile della gestione degli asset propone di seguire insieme il profilo di età e il tasso di guasto, spiegando che un'età media bassa si può comprare sostituendo dispositivi sani. La decisione viene registrata nel registro delle decisioni, con una revisione tra sei mesi.

## Lente di settore

**Startup.** I dispositivi vengono acquistati al bisogno e spesso dalla persona che li userà. Si tenga un elenco semplice con le date di acquisto, si cancellino i dispositivi alla partenza e si eviti di acquistare troppo. Si usi presto uno strumento di registrazione gestita, poiché costa meno che adattarlo in seguito.

**Piccola impresa.** Il costo di un dispositivo guasto ricade su poche persone. Si tengano uno o due dispositivi di scorta, si registrino le date di garanzia e si abbia una routine per la cancellazione e la dismissione. I riciclatori e i ricondizionatori locali possono essere buoni partner. Una checklist di dismissione di tre righe è meglio di nessuna.

**Grande impresa.** La scala rende importanti il comportamento dei lotti e la gestione dei fornitori. Si usino i dati sui guasti per negoziare con i fornitori, si standardizzino pochi modelli per classe e si gestisca il rinnovo continuo con il supporto logistico. Ci si allinei con la rendicontazione di sostenibilità, poiché l'hardware spesso domina l'impronta dell'IT.

**Pubblica amministrazione e settore pubblico.** Le norme sugli appalti, la conservazione dei registri e una rigorosa protezione dei dati condizionano il ciclo di vita. Si documenti la sanificazione secondo uno standard riconosciuto, si conservino le evidenze di dismissione per il periodo richiesto e si considerino gli impegni pubblici su sostenibilità e riparazione. Gli enti pubblici possono essere tenuti a rendicontare i rifiuti elettronici (si veda l'Argomento 8.3 «Metriche di conformità e audit»).

## Business case: motivazioni, ROI e TCO

I costi sono lo sforzo di collegare i dati di registro, riparazione ed endpoint; un po' di strumenti per la gestione dei dispositivi se non già presenti; il gruppo di scorte; e il lavoro di processo della dismissione con evidenza. I risparmi e i benefici emergono in meno guasti dirompenti, un bilancio più regolare, meno apparecchiature sprecate e un minor rischio di incidente sui dati.

Si costruisca il caso a partire dai propri dati. Si confronti il costo di far funzionare un dispositivo oltre la sua vita pianificata, compresi lo sforzo di supporto e il tempo di lavoro perso per ogni guasto, con il costo di sostituirlo prima. Si confronti il costo del gruppo di scorte con i giorni di lavoro persi risparmiati per ogni guasto. Si conti il numero di dispositivi ritirati senza evidenza di cancellazione e il costo di un singolo incidente sui dati che ne seguirebbe. Si eviti di citare durate medie dei dispositivi o cifre sui rifiuti elettronici da fonti pubblicate senza verificarne metodo e data. Il costo totale di proprietà riunisce queste parti (si veda l'Argomento 7.5 «Costo del servizio ed economia unitaria»), e il [costo totale di proprietà](https://en.wikipedia.org/wiki/Total_cost_of_ownership) completo di un dispositivo comprende acquisto, supporto, energia, disservizi e dismissione.

## Anti-pattern e insidie

- **Sostituire tutto secondo il calendario.** Spreca dispositivi funzionanti e crea un picco di carico di lavoro. Si usino età, guasti ed esigenza.
- **Usare fino al guasto.** Il costo non pianificato e il disagio superano il risparmio. Si osservi la coda dell'età.
- **Usare l'età media come obiettivo.** Si può raggiungere sostituendo dispositivi sani. Si mostrino il profilo e il tasso di guasto.
- **Fidarsi dei numeri di affidabilità dei produttori.** Il vostro uso è diverso. Si usino i propri dati sui guasti.
- **Dismettere senza evidenza.** Una cancellazione non registrata è un rischio di cui non si può dimostrare la gestione.
- **Inviare i dispositivi al riciclatore più economico.** Il trattamento a valle conta. Si usino partner certificati.
- **Tracciare le persone attraverso i loro dispositivi.** Si riferisca per classe e gruppo, e mai per individuo.
- **Ignorare riparazione e riutilizzo.** Mantenere le apparecchiature in servizio costa meno ed è più rispettoso dell'ambiente.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Pianificazione | Si compra quando si rompe | Rinnovo periodico a calendario | Vita pianificata per classe; rinnovo costante in lotti | Rinnovo programmato in base a età, guasti ed esigenza; scorte dimensionate sui dati | Rinnovo coordinato con fornitori, finanza e obiettivi di sostenibilità tra le sedi |
| Apprendimento dai dati | Nessuna registrazione dei guasti | Registrazioni delle riparazioni conservate | Tasso di guasto per modello e per età monitorato | I risultati modificano acquisti e tempistiche; tempo di sostituzione gestito | Dati su guasti e uso condivisi con i fornitori per migliorare progetto e condizioni |
| Uscita | I dispositivi spariscono | Cancellazione informale | Processo di dismissione con evidenza per ogni dispositivo | Evidenze verificate con audit; riutilizzo e riciclo monitorati | Pratiche circolari con partner certificati e rendicontazione pubblica |

## Checklist

- [ ] Le classi di dispositivi e le vite pianificate sono definite, con la motivazione registrata.
- [ ] Esiste un piano di rinnovo costante, rivisto con la finanza.
- [ ] Sono rendicontati il profilo di età, il tasso di guasto per modello e il tempo di sostituzione.
- [ ] Un gruppo di scorte è dimensionato sui dati di guasti e assunzioni.
- [ ] I dispositivi inattivi sono individuati per classe, con regole sulla privacy in vigore.
- [ ] I reclami in garanzia e le riparazioni sono registrati e usati nelle decisioni di acquisto.
- [ ] Ogni dispositivo ritirato ha un metodo di sanificazione registrato e l'evidenza.
- [ ] I partner di dismissione sono certificati e rendicontano il trattamento a valle.
- [ ] I tassi di riutilizzo e di riciclo sono monitorati.
- [ ] Una revisione trimestrale include finanza, sicurezza, approvvigionamenti, service desk e utenti.

## Prompt IA

**Analizzare i dati sui guasti per modello ed età.**

```text
Ecco una sintesi dei guasti hardware per [classe di dispositivi] nel periodo
[periodo]: modello, numero in servizio, fascia di età e numero di guasti:
[incolla la tabella]. Descrivi gli schemi per modello ed età, segnala i lotti o
i modelli che sembrano anomali, indica dove il campione è troppo piccolo per
giudicare e suggerisci che cosa verificare in seguito. Non applicare cifre dei
produttori né inventare valori di riferimento. Elenca le tue ipotesi.
```

**Progettare un piano di rinnovo continuo.**

```text
Abbiamo [numero] dispositivi in queste classi: [elenco con profilo di età]. Dati
su guasti e riparazioni: [sintesi]. Vincoli di budget: [sintesi]. Proponi un
piano di rinnovo trimestrale che sostituisca una quota costante, ordini le
sostituzioni per età, storico dei guasti ed esigenza degli utenti e mantenga un
gruppo di scorte. Spiega i compromessi rispetto a un rinnovo a ciclo fisso e
che cosa misurare. Non inventare prezzi. Elenca le tue ipotesi.
```

**Rivedere un processo di dismissione.**

```text
Il nostro processo di dismissione per [tipi di dispositivi] ritirati è:
[descrivi passaggi, partner e registrazioni]. Rivedilo alla ricerca di lacune
in sanificazione dei dati, evidenze, catena di custodia e trattamento
ambientale, e suggerisci miglioramenti e verifiche a campione. Precisa che i
requisiti variano a seconda della giurisdizione e vanno verificati con
specialisti legali e di sicurezza. Non fornire conclusioni giuridiche. Elenca
le tue ipotesi.
```

**Ridurre il tempo di sostituzione.**

```text
La sostituzione di un dispositivo guasto richiede attualmente questi passaggi e
queste attese tipiche: [elenco]. Individua i passaggi più lenti, suggerisci
modifiche (per esempio scorte precaricate, registrazione remota o approvazione
semplificata) e descrivi come misurare l'effetto sulla mediana e sull'85º
percentile. Non presumere strumenti che non abbiamo descritto. Elenca le tue
ipotesi e i rischi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica del ciclo di vita dell'hardware.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica sull'hardware riporti il proprio vettore di manipolazione, la salvaguardia e la regola dell'evidenza.

## Punti chiave

- Si rinnovi in modo continuo una quota costante di dispositivi, usando i propri dati su età, guasti e utilizzo.
- Si osservino la distribuzione per età e i guasti per modello, non la media.
- Si mantenga rapida la sostituzione con un gruppo di scorte e un percorso breve e misurato.
- Si tratti la dismissione sicura con evidenza come la fine del ciclo di vita e si preferiscano riparazione, riutilizzo e riciclo certificato.
- Si riferisca per classe di dispositivi e per gruppo, e non si tracci mai il singolo attraverso le sue apparecchiature.
- Si riveda il ciclo di vita insieme a finanza, sicurezza, approvvigionamenti e utenti.

## Riferimenti e letture di approfondimento

1. National Institute of Standards and Technology, *Guidelines for Media Sanitization*, NIST Special Publication 800-88 Revision 1, 2014.
2. European Parliament and Council, *Directive 2012/19/EU on waste electrical and electronic equipment (WEEE)*, 2012.
3. Baldé, C. P., et al., *The Global E-waste Monitor*, United Nations University, International Telecommunication Union, and International Solid Waste Association (latest edition).
4. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Failure rate](https://en.wikipedia.org/wiki/Failure_rate).
8. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
9. Wikipedia, [Electronic waste](https://en.wikipedia.org/wiki/Electronic_waste).
10. Wikipedia, [Data erasure](https://en.wikipedia.org/wiki/Data_erasure).
11. Wikipedia, [Circular economy](https://en.wikipedia.org/wiki/Circular_economy).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Depreciation](https://en.wikipedia.org/wiki/Depreciation).
14. Wikipedia, [Warranty](https://en.wikipedia.org/wiki/Warranty).
15. Wikipedia, [Mobile device management](https://en.wikipedia.org/wiki/Mobile_device_management).
16. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
