# Progettare una dashboard delle metriche di servizio

**Una buona dashboard risponde a poche domande che un pubblico ben definito si pone davvero, mostra ogni numero insieme al suo andamento e al suo contesto, ed è costruita dalle persone che la useranno.**

## Panoramica e motivazione

Una [dashboard](https://en.wikipedia.org/wiki/Dashboard_(business)) è una visualizzazione grafica delle informazioni più importanti necessarie a raggiungere uno o più obiettivi, disposte in modo da poter essere monitorate a colpo d'occhio. Nella pratica, la maggior parte delle dashboard nelle organizzazioni di servizio non risponde a questa definizione. Nascono per rispondere a una domanda reale, poi crescono per accumulo fino a mostrare tutto ciò che lo strumento sa disegnare. Nessuno ne è responsabile, nessuno è certo del significato dei numeri e lo schermo appeso alla parete viene ignorato.

Lo scopo di una dashboard delle metriche di servizio è aiutare le persone a prendere decisioni e ad avviare buone conversazioni. Un team la usa per accorgersi che il proprio lavoro attende più a lungo di prima e per chiedersi perché. Un responsabile di servizio la usa per vedere che un servizio è prossimo al limite del proprio obiettivo di affidabilità. Un dirigente la usa per vedere se l'investimento in un ambito sta producendo il risultato sperato. Una schermata che non fa nulla di tutto ciò è decorazione, e la decorazione costa denaro per essere costruita e attenzione per essere ignorata.

ITIL inquadra la questione come un tema di informazione e comunicazione: l'informazione giusta, alle persone giuste, in una forma che possano usare, al momento giusto. Gli obiettivi agili indicano gli stessi principi di progettazione. Il coinvolgimento continuo degli stakeholder significa che il pubblico contribuisce a progettare la vista e continua a farlo man mano che le domande cambiano. Il miglioramento continuo significa che la dashboard stessa viene rivista e sfoltita. L'evoluzione costante significa che l'insieme delle misure cambia quando cambiano i servizi e gli obiettivi. Un ritmo sostenibile significa che la dashboard non genera la compulsione quotidiana di controllare numeri che si muovono solo ogni mese. E la stessa fiducia che sostiene le persone motivate fa sì che i team vedano per primi i propri dati e siano padroni della storia che essi raccontano.

Tre difetti di progettazione sono frequenti. Il primo è il muro di numeri, dove cento riquadri competono e nessuno si distingue. Il secondo è la schermata di soli obiettivi, dove una cifra è mostrata rispetto a un traguardo in rosso o in verde, senza andamento e senza contesto, il che invita a gestire per colore invece che per comprensione. Il terzo è la schermata senza responsabile, dove le definizioni sono derivate, i dati sono vecchi e nessuno sa a chi rivolgersi. Il lavoro di progettazione consiste nell'evitare questi difetti.

Una buona progettazione visiva aiuta. La [visualizzazione dei dati](https://en.wikipedia.org/wiki/Data_visualization) è la pratica di mostrare i dati in forma grafica in modo che schemi e andamenti possano essere visti e compresi. Una [sparkline](https://en.wikipedia.org/wiki/Sparkline) è un piccolo grafico a linee, grande quanto una parola, che mostra un andamento senza assi né etichette; si adatta bene a una dashboard perché affianca lo storico al valore corrente. Un [run chart](https://en.wikipedia.org/wiki/Run_chart) rappresenta una misura nel tempo con una linea della mediana, e una [carta di controllo](https://en.wikipedia.org/wiki/Control_chart) aggiunge limiti che separano la variazione ordinaria dai segnali che meritano un'indagine (vedere l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»). Il [chartjunk](https://en.wikipedia.org/wiki/Chartjunk) è la decorazione che non aggiunge informazione, come linee di griglia pesanti, barre tridimensionali e indicatori ornamentali, e conviene eliminarlo.

Una [metrica di vanità](https://en.wikipedia.org/wiki/Vanity_metric) è un numero che fa bella figura e non aiuta nessuno a decidere nulla, come un conteggio dei ticket gestiti o degli accessi a un portale mostrato senza risultati. La salvaguardia derivata dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) vale per l'intera schermata: quando un numero sullo schermo diventa un obiettivo, le persone gestiscono il numero (vedere l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

Questo argomento si basa sui framework di misurazione (vedere l'Argomento 1.7 «Framework di misurazione») e sugli argomenti di dati e governance della Parte 1.

## Principi chiave

- **Partire dalle domande, non dai dati.** Scrivere le decisioni e le domande del pubblico prima di scegliere un solo grafico.
- **Mostrare poche misure, equilibrate.** Un piccolo insieme che copre flusso, qualità, affidabilità, esperienza e costo resiste al gaming meglio di una misura isolata.
- **Mostrare sempre andamento e contesto.** Un valore privo di storico, di riferimento e di una nota su che cosa è cambiato è difficile da interpretare.
- **Rispettare la variazione.** Non reagire a ogni oscillazione. Usare run chart o carte di controllo per separare il segnale dal rumore.
- **Dare a ogni pubblico la sua vista.** Team, responsabili di servizio e dirigenza pongono domande diverse e richiedono un dettaglio diverso.
- **I team vedono per primi i propri dati.** Chi svolge il lavoro dovrebbe vedere i propri numeri prima di chiunque altro e possederne l'interpretazione.
- **Definire tutto e nominare un responsabile.** Ogni misura ha una definizione scritta, una fonte di dati e una persona a cui chiedere.
- **Mantenerla leggera da gestire.** Una dashboard che richiede una settimana di lavoro manuale ogni mese è destinata a morire.

## Definizioni delle metriche

Le misure seguenti riguardano la dashboard stessa, non un servizio. Aiutano un team di programma a verificare se le proprie schermate sono in buona salute. Alcune sono descrittive e sono indicate come tali, perché trattarle come obiettivi inviterebbe alle distorsioni da cui questo argomento mette in guardia.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Copertura delle domande | Quota delle domande elencate dal pubblico a cui la dashboard sa rispondere con una misura definita | domande con una misura e una definizione / domande elencate dal pubblico | percentuale | Elenco delle domande dalle sessioni con gli stakeholder; schede delle metriche | Miglioramento continuo; gestione dei livelli di servizio | Coinvolgimento continuo degli stakeholder | Trimestrale |
| Completezza delle definizioni | Quota delle misure mostrate con una definizione scritta aggiornata, una fonte di dati, un responsabile e limiti noti | misure con tutti e quattro / misure mostrate | percentuale | Schede delle metriche o catalogo | Gestione delle informazioni e della tecnologia; gestione della conoscenza | Comprensione condivisa; lavoro visibile | Trimestrale |
| Aggiornamento dei dati | Quota delle misure mostrate aggiornate entro l'intervallo previsto | misure aggiornate in tempo / misure mostrate | percentuale | Log della pipeline; metadati della dashboard | Monitoraggio e gestione degli eventi | Feedback rapido | Settimanale |
| Collegamento alle decisioni | Quota delle misure riviste per cui una revisione recente ha portato a una decisione registrata, a un'azione o alla scelta deliberata di non fare nulla | misure con una decisione collegata nel periodo / misure riviste | percentuale | Note di revisione; registro dei miglioramenti | Miglioramento continuo | Riflessione periodica | Trimestrale |
| Dimensione della vista | Numero di misure presenti in ciascuna vista per pubblico | conteggio per vista | misure | Configurazione della dashboard | Miglioramento continuo | Semplicità | Trimestrale |
| Tasso di ritiro | Misure rimosse o sostituite nel periodo perché non informavano più le decisioni | misure ritirate / misure mostrate all'inizio | percentuale | Registro delle modifiche della dashboard | Miglioramento continuo | Evoluzione costante | Annuale |
| Raggiungimento del pubblico (descrittiva) | Quota dei team o dei ruoli destinatari che hanno aperto la propria vista nel periodo | team o ruoli distinti che hanno consultato la vista / team o ruoli destinatari | percentuale | Log di accesso alla dashboard, aggregati per team o ruolo | Gestione delle informazioni e della tecnologia | Coinvolgimento continuo degli stakeholder | Trimestrale |

Definire per iscritto il pubblico di ciascuna vista. Contare le misure per vista, non per strumento, in modo che un catalogo ampio con una prima pagina ridotta non venga scambiato per proliferazione. I log di accesso sono raccolti e riportati a livello di team o di ruolo e mai per tracciare le abitudini di lettura delle singole persone. Il raggiungimento del pubblico è descrittivo e va letto insieme al collegamento alle decisioni, perché una schermata molto consultata che non modifica alcuna decisione ha poco valore. Il collegamento alle decisioni accetta «abbiamo guardato e scelto di non fare nulla» come decisione registrata, in modo che la misura non spinga a inventare azioni.

## Raccomandazioni

### Partire dal pubblico

**1. Elencare i pubblici e le loro domande.** I pubblici tipici sono il team di consegna o di supporto che svolge il lavoro, il responsabile di servizio che risponde di un servizio e i dirigenti che finanziano e indirizzano. Sedersi con ciascuno per un'ora e annotare che cosa chiedono, quali decisioni prendono e che cosa vorrebbero sapere. Una buona domanda suona come «Il nostro lavoro attende più a lungo di prima?» oppure «Siamo vicini a esaurire il nostro budget di errore?». Non suona come «Mostrami la dashboard degli incidenti».

**2. Associare a ogni domanda una misura e una compagna.** Per ogni domanda scegliere la singola misura migliore tra quelle delle parti precedenti di questo libro e una misura compagna che protegga dalla distorsione più ovvia. Una misura di velocità si affianca a una misura di qualità. Una misura di volume si affianca a un risultato. Una misura di esperienza si affianca a una misura di comportamento. È la logica di accoppiamento che attraversa l'intero libro (vedere l'Argomento 1.3 «Risultati prima della produzione: scegliere cosa misurare»).

**3. Coinvolgere il pubblico nella progettazione.** Mostrare schizzi prima di costruire qualunque cosa. Chiedere che cosa è confuso, che cosa manca e che cosa si farebbe con ciascun numero. Le risposte ridurranno l'insieme, e le persone si fideranno di ciò che hanno contribuito a creare.

### Scegliere un insieme piccolo ed equilibrato

**4. Limitare ogni vista a una manciata di misure.** Da cinque a nove misure per vista di pubblico è un intervallo praticabile, anche se il numero giusto dipende dalle domande. Il limite obbliga a scegliere. Collocare il dettaglio dietro un clic, in una vista di supporto, e limitare la prima pagina a ciò che serve per decidere se approfondire.

**5. Equilibrare l'insieme tra le dimensioni.** La [balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard) è uno strumento di gestione strategica che osserva un'organizzazione da più prospettive invece che dai soli risultati finanziari. L'idea si trasferisce bene: per un servizio, bilanciare flusso e velocità, qualità e stabilità, affidabilità, esperienza e costo. Un insieme che comprende solo la velocità incoraggia le scorciatoie, e uno che comprende solo la qualità incoraggia il ritardo. L'idea affine di [indicatore chiave di prestazione](https://en.wikipedia.org/wiki/Key_performance_indicator) è utile quando l'indicatore è scelto per ciò che rivela su un obiettivo e non per quanto è facile da mostrare.

**6. Distinguere gli indicatori dalle diagnostiche.** Pochi indicatori principali dicono se le cose vanno bene. Le misure diagnostiche aiutano a scoprire il perché quando non vanno bene. Tenere le diagnostiche un passo più in basso, in modo che la prima pagina non diventi un muro.

### Mostrare contesto e andamento

**7. Mostrare lo storico con ogni valore.** Affiancare a ogni valore corrente una sparkline o un piccolo run chart. Mostrare almeno lo storico sufficiente a cogliere gli andamenti stagionali, come i picchi mensili o un ciclo trimestrale. Segnalare gli eventi che spiegano i cambiamenti: un rilascio, una modifica di policy, un'interruzione, una riorganizzazione del team. Una nota accanto alla linea evita cento domande.

**8. Usare distribuzioni e intervalli per le misure di tempo.** Una media nasconde la coda lunga che gli utenti percepiscono. Mostrare la mediana e un percentile alto, come l'85° o il 95°, e mostrare la dispersione. Indicare la dimensione del campione quando è ridotta e mostrare quanto è incerto un campione piccolo (vedere l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio» e l'Argomento 2.2 «Lead time, cycle time ed efficienza del flusso»).

**9. Usare con cautela obiettivi e colori.** Usare una linea di obiettivo quando l'obiettivo ha un fondamento reale, come un obiettivo di livello di servizio, e mostrarla come riferimento, non come verdetto. Evitare i riquadri rossi, ambra e verdi che cambiano per un solo dato. Se si usano colori di stato, basarli su una regola che tenga conto della normale variazione e spiegare la regola nella pagina.

### Renderla affidabile e manutenibile

**10. Associare a ogni misura una definizione e una nota sui dati.** A un clic da ogni numero devono trovarsi la sua definizione, la formula, la fonte dei dati, il responsabile, l'ora di aggiornamento e le lacune note. Una breve nota «come leggere questa vista» vale lo spazio che occupa. Chi vede i limiti è meno incline a usare male il numero, e un team che li vede può metterli in discussione (vedere l'Argomento 1.4 «Governance e responsabilità delle metriche» e l'Argomento 1.5 «Fonti dei dati e strumentazione»).

**11. Automatizzare i dati e avere un responsabile della schermata.** Prelevare i dati dai sistemi di registrazione secondo una pianificazione e mostrare l'ora dell'ultimo aggiornamento. I fogli di calcolo manuali possono avviare una conversazione, ma sono fragili. Nominare per ogni dashboard un responsabile di definizioni, aggiornamento e ritiro. Rivedere la dashboard con il suo pubblico a cadenza fissa e sfoltirla.

**12. Pianificare l'uscita fin dall'inizio.** Ogni misura dovrebbe avere un motivo dichiarato per esistere e una condizione in cui verrà ritirata, come «quando l'arretrato degli errori noti scende sotto una soglia per tre mesi» oppure «quando il team non la usa più nelle proprie revisioni». Ritirare le misure mantiene ridotto l'insieme e segnala che il programma è al servizio del lavoro.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Copertura delle domande | Scrivere domande ristrette a cui le misure esistenti già rispondono; tralasciare le domande difficili | Includere stakeholder esterni al team di programma; rivedere esplicitamente le domande senza risposta |
| Completezza delle definizioni | Riempire i campi con testo di circostanza; definizioni che nessuno legge | Sottoporre a campione le definizioni per verificarne la chiarezza a una persona esterna al team; verificare che la definizione corrisponda al calcolo effettivo |
| Aggiornamento dei dati | Aggiornare una fonte ferma con dati invariati; contare un aggiornamento come riuscito quando il flusso della fonte è fallito | Controllare i timestamp della fonte oltre agli orari di aggiornamento; confrontare con i conteggi dei record e con il volume atteso |
| Collegamento alle decisioni | Registrare le decisioni a posteriori per riempire il campo; inventare azioni per evitare un campo vuoto | Accettare «abbiamo scelto di non fare nulla» come decisione registrata; verificare a campione che i collegamenti rimandino a una discussione precedente reale |
| Dimensione della vista | Nascondere misure in schede secondarie; dividere una vista in molte | Contare le misure per pubblico su tutte le schede; chiedere al pubblico quanti numeri usa davvero |
| Tasso di ritiro | Ritirare misure scomode che mostrano risultati scarsi | Rivedere l'elenco dei ritiri cercando misure con andamenti sfavorevoli; richiedere un motivo dichiarato |
| Raggiungimento del pubblico (descrittiva) | Aprire la pagina per far salire il conteggio; consultazione obbligatoria nelle riunioni | Mantenerla descrittiva; leggerla insieme al collegamento alle decisioni; non riportare le consultazioni individuali |

Una lettura sana mostra una prima pagina breve che il pubblico sa spiegare, definizioni che corrispondono ai calcoli, dati che arrivano in tempo, revisioni che a volte portano all'azione e a volte a una scelta deliberata di attendere, e un elenco di misure ritirate che comprende alcune un tempo molto apprezzate.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Una dashboard aziendale per tutti | Fonte unica di verità; definizioni coerenti | Troppo generica per ogni pubblico; cresce fino a diventare un muro |
| Viste separate per pubblico su dati condivisi | Si adatta a ciascun pubblico; definizioni coerenti | Richiede la governance delle definizioni condivise |
| Dashboard costruite dai team | Aderenti alle domande locali; forte responsabilità | Le definizioni divergono; difficili da aggregare |
| Un team centrale costruisce tutte le dashboard | Coerenza; competenza di progettazione | Lento; può non corrispondere alle domande dei team |
| Visualizzazione dal vivo, in tempo reale | Segnali rapidi per le operazioni | Incoraggia a reagire al rumore; costosa |
| Pacchetto di revisione periodico | Pacato, discusso con il contesto | Ritardo; può essere saltato |
| Obiettivi e colori di stato | Lettura rapida | Invita a gestire per colore; nasconde la variazione |
| Solo andamento e distribuzione | Onesta sulla variazione | Più difficile da leggere per i nuovi arrivati |

La risposta in prosa è condividere le definizioni in tutta l'organizzazione, lasciare che ogni pubblico abbia la propria piccola vista, usare le visualizzazioni dal vivo solo dove la risposta operativa le richiede e usare una calma revisione periodica per le decisioni di miglioramento.

## Domande da discutere con il team

**1. Quali decisioni abbiamo preso nell'ultimo trimestre che un numero su uno schermo ha contribuito a orientare?**
Elencarle. Per ciascuna, indicare il numero e da dove proveniva. Notare quali numeri presenti sulle nostre schermate attuali non compaiono mai in questo elenco. Il facilitatore dovrebbe chiedere se meritino il proprio posto.

**2. Se potessimo mostrare solo cinque numeri al nostro team, quali sarebbero?**
Chiedere a ciascuno di scrivere un elenco in privato, poi confrontarli. Discutere le differenze e che cosa ogni numero aiuterebbe a decidere. Concordare un insieme di prova e una data per rivederlo.

**3. Quale numero della nostra dashboard vorremmo rimuovere più volentieri, e perché?**
Ascoltare i numeri che causano discussioni, fuorviano o non vengono mai letti. Verificare se il problema è la misura o la sua presentazione. Concordare di ritirare, ridefinire o mantenere ciascuno.

**4. Come leggerebbe la nostra dashboard un nuovo collega senza aiuto?**
Chiedere a un nuovo arrivato di spiegare che cosa vede. Annotare che cosa interpreta male e perché. Aggiungere definizioni, contesto o note dove ha inciampato.

**5. Che cosa è cambiato nel nostro lavoro che un numero non mostra?**
Rilasci, organici, policy o un cambiamento nei clienti possono spiegare un andamento. Concordare come registrare gli eventi sulla schermata, in modo che il lettore successivo abbia la storia.

**6. Chi guarda i nostri dati oltre a noi, e che cosa ne fa?**
Ricostruire il percorso dei nostri numeri verso altri pubblici. Verificare che l'interpretazione che ne danno sia una che approveremmo. Concordare che cosa condivideremo e quale contesto lo accompagna.

## Quattro prospettive

### Team di prodotto e di consegna

I team svolgono il lavoro e dovrebbero essere il primo pubblico dei propri dati. Dovrebbero contribuire a scegliere le misure, usare la schermata per alimentare le proprie conversazioni di revisione e annotarla con gli eventi. Una vista del team dovrebbe rispondere a «come stiamo andando e che cosa dovremmo provare?» e non a «come ci confrontiamo con il team accanto?».

### Team di servizio e operations

I responsabili di servizio rispondono delle prestazioni di un servizio nel tempo. La loro vista riunisce affidabilità, incidenti, modifiche, costi ed esperienza di un servizio, con andamenti e stato delle azioni di miglioramento. Dovrebbero usarla per decidere dove investire e per preparare le conversazioni con clienti e dirigenti.

### Leadership e governance

I dirigenti hanno bisogno di una vista sintetica di risultati e rischi tra i servizi, con contesto sufficiente per interpretarla. Dovrebbero chiedere andamenti e distribuzioni piuttosto che classifiche, resistere alla tentazione di chiedere nuove misure senza ritirarne altre e usare la schermata per rivolgere le domande ai sistemi e alle decisioni, non alle persone.

### Clienti e utenti

Clienti e utenti vedono le informazioni sul servizio attraverso pagine di stato, rapporti e misure di esperienza che riflettono il loro punto di vista (vedere l'Argomento 6.2 «Experience level agreement»). La loro vista dovrebbe essere onesta, chiara e coerente con quella dei team. Dovrebbero poter dire all'organizzazione che cosa i numeri non mostrano.

## In pratica: un esempio di ITIL agile

Un'azienda di software con un prodotto in hosting e un gruppo di assistenza clienti ha accumulato tre dashboard: una schermata operativa con 62 riquadri, un rapporto di assistenza inviato per e-mail ogni settimana e una pagina di consegna mantenuta da un solo analista. Il team dirigente chiede un'unica dashboard per «vedere tutto». Le cifre seguenti sono illustrative.

La responsabile della gestione dei servizi propone di partire dalle domande. Tiene una sessione di un'ora con ciascuno di tre pubblici: il team di assistenza, il team di piattaforma e il gruppo dirigente. Il team di assistenza chiede se i clienti attendano più a lungo di prima una prima risposta utile e se gli stessi problemi si ripresentino. Il team di piattaforma chiede se sia vicino a esaurire il proprio budget di errore e se il proprio processo di modifica lo rallenti o lo protegga. La dirigenza chiede se i clienti stiano ricevendo valore e se l'investimento in un nuovo portale self-service stia dando frutti. Insieme elencano 14 domande. Le dashboard esistenti potevano rispondere a sei di esse con una misura definita, quindi la copertura delle domande è del 43 per cento.

Il gruppo progetta tre viste di non più di sette misure ciascuna, su definizioni condivise. La vista dell'assistenza mostra la mediana e l'85° percentile del tempo fino a una prima risposta utile, la quota di contatti che ritornano entro sette giorni, un andamento della soddisfazione con la dimensione del campione e la risoluzione in self-service abbinata ai contatti di ritorno. La vista della piattaforma mostra la disponibilità rispetto all'obiettivo con una linea di consumo del budget di errore, il lead time delle modifiche insieme al tasso di fallimento delle modifiche e la quota di tempo dedicata al lavoro non pianificato. La vista della dirigenza mostra i risultati a livello di servizio, l'esperienza del cliente, il costo per cliente attivo e lo stato di tre azioni di miglioramento finanziate. Ogni valore ha una sparkline, un collegamento alla propria scheda di definizione e un campo note per gli eventi. I colori compaiono solo sul budget di errore, in base a una regola spiegata nella pagina.

La prima revisione riserva sorprese. Il team di assistenza nota che il tempo mediano di risposta è migliorato mentre l'85° percentile è peggiorato, perché ai contatti semplici si rispondeva in fretta e quelli difficili restavano in attesa. Decide di esaminare le proprie regole di smistamento e registra la decisione. Il team di piattaforma vede che un recente aumento del lead time delle modifiche è coinciso con un nuovo passaggio di approvazione e porta la questione al gruppo che gestisce le modifiche. La dirigenza nota che l'uso del portale sta crescendo mentre i contatti di ritorno sono stabili e chiede al team di assistenza a che cosa il portale non riesca a rispondere. Due trimestri dopo, la copertura delle domande è del 79 per cento, tutte le misure mostrate hanno definizioni complete e la vecchia schermata da 62 riquadri è stata ritirata. Tre misure sono state eliminate perché nessuno le usava e una è stata aggiunta. Un direttore chiede una riga di sintesi verde-ambra-rossa. La responsabile della gestione dei servizi mostra una prova in cui una sola settimana negativa ha fatto diventare rossa la riga e ha provocato un'ondata di domande senza una causa. Concordano invece una breve nota scritta su che cosa è cambiato ogni mese e registrano la decisione.

## Lente di settore

**Startup.** Mantenerla piccolissima: una sola pagina con forse cinque numeri leggibili da tutta l'azienda, che riflettano velocità di consegna, stabilità, esperienza del cliente e costo. Usare ciò che gli strumenti esistenti offrono. Rivedere la pagina ogni volta che il prodotto o i clienti cambiano e resistere alla tentazione di costruire una piattaforma di dati prima che le domande siano chiare.

**Piccola impresa.** Può bastare un documento condiviso o un semplice grafico su foglio di calcolo aggiornato mensilmente. Scegliere una manciata di misure che il titolare e il personale usano davvero, scrivere che cosa significa ciascuna e discuterle in una riunione periodica. Il rischio non è la scarsità di strumenti. Il rischio sono misure di cui nessuno si fida o su cui nessuno agisce.

**Grande impresa.** La scala richiede definizioni condivise, un catalogo governato delle misure e viste stratificate per team, servizi, portafogli e dirigenti. La tentazione di riassumere tutto in un solo numero è forte e dannosa. Mantenere le viste dei team in capo ai team, pubblicare definizioni comuni e richiedere uno scopo dichiarato per ogni nuova misura su una vista della dirigenza (vedere l'Argomento 1.4 «Governance e responsabilità delle metriche»).

**Pubblica amministrazione e settore pubblico.** Gli obblighi di rendicontazione e la responsabilità verso il pubblico spesso impongono certe misure. Mantenere visibili le misure obbligatorie e chiaramente separate da quelle che i team usano per migliorare, e spiegare al pubblico e agli organismi di controllo che cosa le cifre possono e non possono mostrare. Linguaggio chiaro e accessibilità contano per qualunque schermata condivisa fuori dall'organizzazione (vedere l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi di un programma di dashboard comprendono il tempo per intervistare i pubblici, progettare e costruire, collegare e ripulire i dati, scrivere le definizioni, formare e assistere gli utenti e mantenere la schermata nel tempo. Il maggiore costo nascosto è il tempo delle persone che leggono numeri che non aiutano e delle riunioni spese a discutere di chi abbia il numero giusto. Le realizzazioni economiche e rapide sono comuni, e il costo reale arriva dopo, nella manutenzione e nella sfiducia.

I ritorni comprendono un riconoscimento più rapido degli andamenti, meno discussioni sulle definizioni, un lavoro di miglioramento meglio mirato e uno sforzo di rendicontazione ridotto quando un'unica fonte governata sostituisce diversi rapporti manuali. Costruire il caso a partire dai propri dati: ore spese in rapporti manuali prima e dopo, numero di versioni concorrenti della stessa cifra e decisioni orientate dalla schermata. Evitare di citare cifre pubblicate sul valore dell'analisi dei dati senza una fonte rintracciabile e pertinente al proprio contesto. L'affermazione credibile è modesta: meno misure, migliori, affidabili e usate (vedere l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Il muro di riquadri.** Ogni numero compete per l'attenzione. Ridurre a una manciata per pubblico e collocare il dettaglio un passo più in basso.
- **Gestione per colore.** I colori di stato cambiano per rumore e inducono reazioni. Mostrare gli andamenti e usare regole che rispettino la variazione.
- **Nessuna definizione.** Due team leggono la stessa etichetta in modo diverso. Associare a ogni misura una definizione e un responsabile.
- **Dashboard come sorveglianza.** Le viste a livello individuale erodono la fiducia e distorcono i dati. Mostrare team, servizi e sistemi.
- **Un solo numero per riassumere tutto.** Nasconde i compromessi che avrebbe dovuto rendere evidenti. Mostrare pochi numeri equilibrati.
- **Costruita una volta, mai rivista.** La schermata diventa obsoleta. Rivederla con il pubblico a intervalli regolari e ritirare le misure.
- **Schermate di vanità.** Grandi conteggi di attività senza risultati. Abbinare ogni volume a una misura di risultato.
- **Il rapporto che nessuno aveva chiesto.** Costruito sui dati disponibili invece che sulle domande poste. Partire dalle domande.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Pubblico e domande | Costruita con i dati disponibili | Alcuni team chiedono ciò di cui hanno bisogno | Pubblici e domande messi per iscritto; piccole viste per pubblico | Copertura delle domande e collegamento alle decisioni rivisti e tradotti in azioni | I pubblici co-progettano le viste, inclusi clienti e fornitori, e le domande evolvono con i servizi |
| Progettazione e contesto | Molti riquadri senza storico | Alcuni andamenti e definizioni | Poche misure per vista con andamento, distribuzione e definizione su ogni misura | Schermate attente alla variazione; misure compagne per ogni indicatore principale | Le viste si adattano al mutare degli obiettivi; schemi condivisi riutilizzati tra i team |
| Dati e manutenzione | Manuale, obsoleta, senza responsabile | Una certa automazione; responsabili informali | Flussi automatizzati, responsabili nominati, aggiornamento mostrato | Aggiornamento e completezza delle definizioni gestiti; ritiro di routine | Responsabilità federata con definizioni condivise; ritiro e miglioramento guidati dagli utenti |

## Checklist

- [ ] Le domande di ciascun pubblico sono messe per iscritto e ogni vista vi corrisponde.
- [ ] Ogni vista ha al massimo circa nove misure, con il dettaglio un passo più in basso.
- [ ] L'insieme è equilibrato tra flusso, qualità, affidabilità, esperienza e costo.
- [ ] Ogni valore mostra andamento e contesto, e le misure di tempo mostrano un percentile alto.
- [ ] Ogni misura ha una definizione, una fonte, un responsabile e un'ora di aggiornamento a un clic di distanza.
- [ ] Gli obiettivi sono mostrati come riferimenti e i colori di stato seguono una regola dichiarata.
- [ ] I team vedono per primi i propri dati e ne possiedono l'interpretazione.
- [ ] Nessuna vista classifica o traccia le singole persone.
- [ ] La dashboard ha un responsabile nominato, una cadenza di revisione e una regola per ritirare le misure.
- [ ] I dati sono prelevati automaticamente, con l'ora dell'ultimo aggiornamento visibile.

## Prompt IA

**Trasformare le domande in una vista.**

```text
Ecco le domande poste da [pubblico]: [elenco]. Per ciascuna, suggerisci una
misura primaria e una misura compagna che protegga dalla distorsione più
probabile. Raggruppale in una vista di non più di sette misure e, per ciascuna,
indica la definizione, un tipo di grafico suggerito e il contesto di cui ha
bisogno. Non inventare dati né benchmark. Elenca le tue ipotesi e le domande a
cui la vista non può rispondere.
```

**Rivedere una dashboard per verificarne la chiarezza.**

```text
Ecco la descrizione della nostra dashboard, con l'elenco di ogni riquadro, della
sua etichetta e della sua definizione: [incolla]. Comportati come un nuovo
collega che la legge per la prima volta. Elenca quali etichette sono ambigue,
quali numeri mancano di contesto o di andamento, quali riquadri potrebbero
invitare alla gestione per colore e quali riquadri potrebbero essere ritirati.
Non riscrivere i dati. Elenca le tue ipotesi.
```

**Redigere una scheda di metrica.**

```text
Redigi una scheda di metrica per [misura]. Includi una definizione chiara, la
formula, l'unità, la fonte dei dati, il responsabile, l'intervallo di
aggiornamento, le lacune note, il modo più probabile in cui verrà manipolata, la
salvaguardia abbinata e la decisione che dovrebbe orientare. Mantieni il testo
sotto le 200 parole. Non inventare cifre. Segnala tutto ciò di cui non sei sicuro.
```

**Pianificare una revisione della dashboard.**

```text
Pianifica una revisione trimestrale di 45 minuti della dashboard del nostro
[team] con il suo pubblico. Includi come verificare che le misure siano state
usate per decisioni, come decidere quali ritirare, come registrare gli eventi che
spiegano gli andamenti e come evitare di classificare le persone. Elenca le
domande che il facilitatore dovrebbe porre e l'output da registrare.
```

## Skill IA

- [Agile ITIL Metrics skill](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a ciascuna misura di una vista proposta.
- [Agile ITIL Metrics maintainer skill](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la specifica di una dashboard contenga definizioni, responsabili e vettori di gaming per ogni misura.

## Punti chiave

- Partire dalle domande che un pubblico si pone e dare a ciascun pubblico una piccola vista propria.
- Equilibrare l'insieme e abbinare ogni indicatore principale a una misura compagna che protegga dalla distorsione.
- Mostrare andamento, distribuzione e contesto con ogni valore e rispettare la normale variazione.
- Associare a ogni misura una definizione, una fonte, un responsabile e un'ora di aggiornamento.
- Lasciare che i team vedano e possiedano per primi i propri dati e non mostrare mai le singole persone.
- Rivedere la dashboard con il suo pubblico e ritirare le misure che non informano più le decisioni.

## Riferimenti e letture di approfondimento

1. Few, S., *Information Dashboard Design: The Effective Visual Communication of Data*, O'Reilly Media, 2006.
2. Tufte, E., *The Visual Display of Quantitative Information*, Graphics Press, 1983.
3. Kaplan, R., and Norton, D., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, 1992.
4. Wheeler, D., *Understanding Variation: The Key to Managing Chaos*, SPC Press, 2000.
5. Axelos, *ITIL 4 Foundation*, 2019.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Dashboard (business)](https://en.wikipedia.org/wiki/Dashboard_(business)).
8. Wikipedia, [Data visualization](https://en.wikipedia.org/wiki/Data_visualization).
9. Wikipedia, [Sparkline](https://en.wikipedia.org/wiki/Sparkline).
10. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Chartjunk](https://en.wikipedia.org/wiki/Chartjunk).
13. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
16. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
