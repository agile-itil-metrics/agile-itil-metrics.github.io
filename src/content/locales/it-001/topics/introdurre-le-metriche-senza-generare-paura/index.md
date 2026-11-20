# Introdurre le metriche senza generare paura

**La misurazione funziona quando le persone credono che i numeri descrivano il loro lavoro per aiutarle: introdurla con trasparenza, responsabilità dei team, promesse scritte sull'uso e nessuna classifica di singole persone.**

## Panoramica e motivazione

Un programma di metriche riesce o fallisce sulla fiducia. Lo stesso insieme di misure può essere uno specchio utile in un'organizzazione e una fonte di timore in un'altra. La differenza raramente sta nelle misure. Sta in ciò che le persone credono che accadrà loro a causa dei numeri. Se credono che i numeri verranno usati per stilare classifiche, attribuire colpe o ridurre l'organico, la risposta sensata è proteggersi: scegliere il lavoro che ottiene un buon punteggio, ritardare la segnalazione dei problemi, discutere sulle definizioni e modificare silenziosamente ciò che viene registrato. I dati smettono allora di descrivere il lavoro, e il programma perde proprio ciò che era stato costruito per offrire.

Questo schema è antico e ben noto. L'[effetto Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) descrive il modo in cui le persone cambiano comportamento quando sanno di essere osservate. La [legge di Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) afferma che quanto più un indicatore quantitativo è usato per prendere decisioni, tanto più sarà soggetto a pressioni di corruzione e tanto più distorcerà il processo che avrebbe dovuto monitorare. La [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) esprime un concetto simile a proposito degli obiettivi (vedere l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»). Nessuna di queste è una ragione per evitare la misurazione. Sono ragioni per progettare l'introduzione in modo che gli incentivi a distorcere siano bassi e le ragioni per dire la verità siano alte.

La [sicurezza psicologica](https://en.wikipedia.org/wiki/Psychological_safety) è la convinzione condivisa che un team sia un luogo sicuro in cui assumersi rischi interpersonali, come ammettere un errore, porre una domanda o riferire cattive notizie. I programmi di metriche ne dipendono e possono eroderla. Le misure di fallimento, rilavorazione e ritardo sono oneste solo quando le persone si sentono al sicuro nel riferirle (vedere l'Argomento 9.2 «Metriche di soddisfazione e benessere» e l'Argomento 4.2 «Metriche di postmortem e apprendimento»). La [fiducia](https://en.wikipedia.org/wiki/Trust_(social_science)) tra le persone misurate e quelle che usano le misure è la risorsa di fondo, e si costruisce lentamente e si spende in fretta.

La [gestione del cambiamento](https://en.wikipedia.org/wiki/Change_management) è la disciplina che prepara e sostiene le persone nel cambiamento. Introdurre le metriche è un cambiamento organizzativo e merita la stessa cura di un nuovo processo o strumento (vedere l'Argomento 9.6 «Metriche di cambiamento organizzativo e adozione»). Il [ciclo di vita dell'adozione della tecnologia](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle) descrive come le innovazioni si diffondono dagli entusiasti alla maggioranza, il che ricorda che un progetto pilota rispettato con team disponibili vale più di un mandato. Un [progetto pilota](https://en.wikipedia.org/wiki/Pilot_project) è una prova su piccola scala che verifica un approccio prima di un impegno più ampio. Un [information radiator](https://en.wikipedia.org/wiki/Information_radiator) è una visualizzazione di informazioni che le persone possono leggere a colpo d'occhio senza chiedere, e si presta alla trasparenza quando mostra i dati del team al team che ne è responsabile.

Gli obiettivi agili danno forma all'introduzione. Il coinvolgimento continuo degli stakeholder significa che le persone misurate contribuiscono a scegliere le misure e le regole del loro uso. Il miglioramento continuo significa che il programma stesso viene modificato in risposta a ciò che le persone dicono. L'evoluzione costante significa che si prevede che le misure cambino, il che abbassa la posta in gioco di ciascuna. Un ritmo sostenibile significa che il programma non aggiunge rendicontazione che soffoca il lavoro. Costruire attorno a persone motivate significa trattare le persone come adulti capaci che possono usare i dati per migliorare il proprio lavoro, e non come risorse da monitorare. La posizione pratica è semplice: misurare il sistema, condividere i dati con le persone che ne fanno parte e lasciare che siano loro a guidare il miglioramento.

L'argomento lavora insieme alle indicazioni sulla dashboard (vedere l'Argomento 11.1 «Progettare una dashboard delle metriche di servizio») e alla governance delle misure (vedere l'Argomento 1.4 «Governance e responsabilità delle metriche»).

## Principi chiave

- **Dire a che cosa servono i dati e a che cosa non servono.** Scriverlo e rispettarlo.
- **I team sono responsabili delle proprie misure.** Le persone che svolgono il lavoro contribuiscono a definire, vedere e interpretare i numeri che lo riguardano.
- **Misurare i sistemi, non le singole persone.** Nessuna classifica, nessun punteggio per persona, nessun uso dei dati nelle valutazioni individuali delle prestazioni.
- **Essere trasparenti.** Condividere definizioni, fonti di dati e chi può vedere che cosa. Le sorprese generano sospetto.
- **Iniziare con i volontari.** Un pilota volontario produce storie e correzioni prima dell'introduzione più ampia.
- **Mostrare l'uso.** Dimostrare che i numeri portano ad aiuto, per esempio rimuovendo un ostacolo, e non a colpe.
- **Consentire la contestazione.** Le persone possono mettere in dubbio un numero, e le correzioni avvengono rapidamente e in modo visibile.
- **Procedere a un ritmo sostenibile.** Poche misure alla volta, con il tempo di imparare.

## Definizioni delle metriche

Le misure seguenti dicono al team di programma se l'introduzione sta costruendo o consumando fiducia. Descrivono i team e il programma, non le singole persone. Diverse si basano su indagini e sull'osservazione dei comportamenti, e si leggono al meglio come segnali di cui parlare.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Copertura della carta d'uso | Quota dei team partecipanti che hanno concordato una dichiarazione scritta di per che cosa le loro misure sono usate e per che cosa non lo sono mai | team con una carta concordata / team partecipanti | percentuale | Carte conservate presso il programma | Governance; gestione del cambiamento organizzativo | Accordi di lavoro | Trimestrale |
| Quota di responsabilità del team | Quota delle misure mostrate a un team le cui definizioni il team ha contribuito a scrivere o ha approvato | misure con approvazione del team / misure mostrate al team | percentuale | Catalogo delle metriche; registri di approvazione | Miglioramento continuo | Team auto-organizzati | Trimestrale |
| Segnale di franchezza | Se la segnalazione di problemi e quasi-incidenti resta stabile o aumenta dopo l'introduzione delle misure | segnalazioni di quasi-incidenti o problemi per team per trimestre, prima e dopo; andamento | segnalazioni | Registri di incidenti, quasi-incidenti e postmortem | Gestione degli incidenti; miglioramento continuo | Riflessione senza colpe | Trimestrale |
| Tempo di risposta alle contestazioni | Tempo dalla contestazione di un numero da parte di una persona o di un team a una risoluzione a loro visibile | mediana e 85° percentile dei giorni dalla contestazione alla risoluzione | giorni | Registro delle contestazioni | Miglioramento continuo; gestione della conoscenza | Rispondere al feedback | Trimestrale |
| Sicurezza percepita della misurazione (indagine) | Accordo, a livello di team, in un'indagine con affermazioni come «i dati sul nostro lavoro sono usati per aiutarci» | percentuale di consenso nell'indagine sul team; tasso di risposta mostrato | percentuale | Indagine anonima sul team, aggregata | Gestione del cambiamento organizzativo | Fiducia e persone motivate | Due volte l'anno |
| Episodi di uso individuale | Casi in cui i dati sono stati mostrati o usati per classificare o valutare singole persone, contro la carta | conteggio dei casi segnalati per trimestre, con gli esiti | conteggio | Segnalazioni al programma; revisione di dashboard e valutazioni | Governance | Rispetto per le persone | Trimestrale |
| Adozione volontaria | Quota dei team idonei che hanno scelto di aderire al programma in un periodo, prima di qualunque mandato | team che hanno aderito / team idonei invitati | percentuale | Registri del programma | Gestione del cambiamento organizzativo | Piloti e apprendimento | Trimestrale |

L'indagine sulla sicurezza percepita richiede una dimensione minima del gruppo per la rendicontazione, in modo che nessuna persona possa essere identificata, e dovrebbe essere anonima. Il segnale di franchezza va letto con attenzione: un aumento delle segnalazioni può significare più problemi o maggiore disponibilità a segnalarli, e in genere è la seconda cosa che un programma sano produce all'inizio. Gli episodi di uso individuale non sono un conteggio da nascondere. L'obiettivo è che ogni caso sia segnalato, gestito e corretto, e un piccolo numero di casi segnalati è il segno di un percorso di segnalazione che funziona, non di un fallimento del programma. L'adozione volontaria si conta solo per il periodo precedente a qualunque mandato.

## Raccomandazioni

### Stabilire prima le regole di base

**1. Scrivere le promesse e pubblicarle.** Prima che sia mostrato il primo numero, scrivere una breve carta. Una buona carta afferma che le misure descrivono team, servizi e sistemi e non vengono mai usate per classificare singole persone né nelle valutazioni individuali delle prestazioni. Indica chi può vedere che cosa, per quanto tempo i dati vengono conservati, come le persone possono contestare un numero e che cosa accade se le regole vengono violate. I dirigenti di vertice la firmano. La carta è un impegno che permette alle persone di abbassare la guardia e dovrebbe essere facile da trovare e da leggere.

**2. Separare la misurazione per il miglioramento dalla misurazione per il giudizio.** I team usano le proprie misure per migliorare il proprio lavoro. I dirigenti usano viste aggregate per indirizzare supporto e investimenti. Nessuno dei due usi riguarda la valutazione di una persona. Se un'organizzazione deve valutare le singole persone, dovrebbe farlo attraverso conversazione, evidenze e contesto, e mai leggendo una dashboard (vedere l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

**3. Essere aperti sui compromessi.** Dire alle persone che ogni misura può essere manipolata, che si sa in quali modi e che ciascuna ha una salvaguardia. Mostrare i vettori di gaming e le salvaguardie nello stile di questo libro. Nominare i rischi apertamente dimostra buona fede e invita le persone a indicare i modi che non si sono considerati.

### Rendere i team responsabili

**4. Lasciare che i team scelgano e definiscano.** Offrire un menu di misure e lasciare che ciascun team ne scelga alcune per iniziare, adatti le definizioni con una motivazione dichiarata e aggiunga le proprie. I team che hanno scelto le proprie misure hanno più probabilità di usarle onestamente. Mantenere un piccolo nucleo comune, in modo che i servizi possano essere confrontati al livello in cui il confronto è valido (vedere l'Argomento 1.4 «Governance e responsabilità delle metriche»).

**5. Mostrare ai team i loro dati per primi.** Dare a ogni team i propri numeri prima che li veda qualcun altro, con il tempo di controllare, correggere e aggiungere contesto. Il team è padrone della storia. Quando i dati vengono poi mostrati ai dirigenti, il team li presenta o li annota. Ciò evita sorprese e assicura che l'interpretazione provenga dalle persone più vicine al lavoro.

**6. Mantenere le viste al livello giusto.** Mostrare viste a livello di team e di servizio. Non mostrare suddivisioni per persona e disattivare le funzioni degli strumenti che le offrono. Dove una vista dettagliata è necessaria per un'indagine, come lo storico di un singolo incidente, limitare l'accesso, spiegare perché ed escluderla dalle conversazioni di valutazione (vedere l'Argomento 11.2 «Panorama degli strumenti»).

### Introdurre guadagnando fiducia

**7. Fare un pilota con volontari.** Invitare due o tre team curiosi e rispettati. Lavorare con loro sulle misure e sulle regole. Lasciare che raccontino le proprie storie ai colleghi. Le loro correzioni e obiezioni miglioreranno il programma, e il loro sostegno pesa più di qualunque annuncio. Chiedere che cosa cambierebbero prima dell'introduzione più ampia e cambiarlo.

**8. Offrire valore presto e in modo visibile.** Nelle prime settimane, usare i dati per eliminare qualcosa che infastidisce il team: una coda che attende sempre, un passaggio di approvazione senza scopo, un rapporto che nessuno legge. Quando le persone vedono che i numeri portano ad aiuto, offrono dati più onesti. Quando vedono che i numeri portano a domande su di loro, ne offrono meno.

**9. Rispondere rapidamente alle contestazioni.** Quando qualcuno dice che un numero è sbagliato, prenderlo sul serio. Verificarlo, correggere la definizione o i dati e dire pubblicamente che cosa è stato fatto. Una correzione rapida e rispettosa costruisce fiducia, e una risposta difensiva la consuma. Tenere un registro delle contestazioni e trattare le contestazioni ripetute come segnali che la misura richiede lavoro.

### Proteggere la fiducia nel tempo

**10. Osservare i segnali della paura.** Tra i segnali vi sono team che discutono sulle definizioni per evitare i risultati, miglioramenti improvvisi che non corrispondono ad altri segnali, meno problemi segnalati, lavoro scelto per fare bella figura e persone che chiedono chi può vedere i dati. Trattarli come informazioni sul programma e non come cattiva condotta. Chiedere ai team, ascoltare e adattare.

**11. Richiamare i dirigenti al rispetto della carta.** I dirigenti sono sotto pressione per confrontare, classificare e spiegare. Dare loro ciò che possono legittimamente usare: andamenti, distribuzioni e misure di risultato a livello di team e di servizio. Rendere facile segnalare una violazione della carta, rispondere a ogni segnalazione e pubblicare l'esito, senza nominare le persone che l'hanno sollevata. Una sola violazione visibile può annullare mesi di lavoro, e una correzione visibile può ricostruirlo.

**12. Rivedere il programma con le persone che ne fanno parte.** Ogni trimestre chiedere ai team a che cosa servono le misure, che cosa distorcono e che cosa abbandonerebbero. Ritirare le misure che non superano la prova. Condividere i risultati della revisione. Un impegno continuo e visibile a migliorare il programma è il segnale più forte che esso esiste per servire i team (vedere l'Argomento 9.5 «Metriche di miglioramento continuo»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Copertura della carta d'uso | Firmare le carte per formalità; dirigenti che le ignorano | Verificare l'uso della carta nella pratica; segnalare gli episodi di uso individuale; rivedere le carte con i team |
| Quota di responsabilità del team | Team che approvano definizioni che non hanno letto; il programma che presenta definizioni già finite per la firma | Verificare a campione come sono state sviluppate le definizioni; monitorare le modifiche richieste e ottenute dai team |
| Segnale di franchezza | Fare pressione sui team perché segnalino più o meno problemi; rinominare le categorie | Leggere insieme a gravità e contenuto dei postmortem; confrontare con i problemi segnalati dai clienti |
| Tempo di risposta alle contestazioni | Chiudere le contestazioni senza una risoluzione visibile; scoraggiare le contestazioni | Richiedere una risposta visibile; intervistare chi ha contestato; monitorare le contestazioni ripetute |
| Sicurezza percepita della misurazione (indagine) | Istruire i rispondenti; bassi tassi di risposta che nascondono team insoddisfatti | Anonimato e dimensione minima del gruppo; mostrare i tassi di risposta; parlare direttamente con i team |
| Episodi di uso individuale | Non segnalare; riclassificare gli episodi come altro; incolpare chi segnala | Segnalazione anonima facile; protezione per chi segnala; revisione di valutazioni e dashboard alla ricerca di dati individuali |
| Adozione volontaria | Pressione presentata come invito; contare team che hanno aderito per evitare controlli | Chiedere ai team perché hanno aderito; verificare l'uso nella pratica; mantenere il periodo privo di mandati |

Una lettura sana mostra carte a cui i team fanno effettivamente riferimento, misure che i team hanno contribuito a plasmare, segnalazioni di problemi stabili o in crescita, contestazioni evase rapidamente, un'indagine che mostra che le persone credono che i dati le aiutino, poche violazioni segnalate gestite apertamente e team che hanno aderito perché lo volevano.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Introduzione obbligatoria a tutti i team insieme | Rapida e coerente | Conformità senza convinzione; gaming e risentimento |
| Piloti volontari, poi diffusione | Costruisce storie e fiducia | Più lenta; copertura non uniforme |
| I team scelgono tutte le proprie misure | Forte responsabilità | Difficile da confrontare; lacune di copertura |
| Nucleo comune più scelta dei team | Equilibrio tra confronto e responsabilità | Richiede governance |
| Dashboard aperte tra i team | Trasparenza; apprendimento condiviso | Rischio di confronti e classifiche |
| Viste riservate ai team, con aggregati condivisi | Spazio sicuro per una riflessione onesta | I dirigenti possono sentirsi alla cieca |
| Carta scritta | Promesse chiare; base per la contestazione | Inutile se ignorata |
| Rassicurazioni informali | Rapide | Dimenticate; nessun ricorso |

La risposta in prosa è iniziare con i team disponibili, dare loro la responsabilità, condividere verso l'alto aggregati con il consenso e il contesto dei team e sostenere le promesse con una carta al cui rispetto i dirigenti sono richiamati.

## Domande da discutere con il team

**1. Che cosa crediamo che accadrà con questi numeri, e che cosa abbiamo visto accadere in passato?**
Invitare a raccontare storie sincere di misure usate bene e male. Il facilitatore dovrebbe registrare i timori senza controbattere. Concordare quali promesse farebbero la differenza maggiore.

**2. Che cosa scriveremmo in una carta che dice per che cosa i nostri dati non saranno mai usati?**
Redigerla insieme in parole semplici. Includere le valutazioni individuali delle prestazioni, le classifiche e i licenziamenti, se è questo il timore. Portarla ai dirigenti che dovrebbero firmarla.

**3. Quali delle misure proposte sceglieremmo e quali abbandoneremmo?**
Lasciare che ciascuno voti in privato e poi confrontare. Discutere perché alcune sembrano minacciose. Concordare un breve insieme da provare per un trimestre.

**4. Come sapremmo se le persone iniziassero a nascondere i problemi?**
Elencare i segnali: meno segnalazioni, linguaggio attenuato, lavoro evitato. Concordare chi osserva e come lo solleveremmo senza attribuire colpe.

**5. Chi dovrebbe vedere i numeri del nostro team, in quale forma e quando?**
Discutere vista riservata al team, aggregati per la dirigenza e confronto tra team. Decidere che cosa viene condiviso e chi lo presenta. Mettere la regola per iscritto.

**6. Se un numero che ci riguarda è sbagliato, come lo faremo correggere?**
Ripercorrere il cammino dall'accorgersene alla correzione. Individuare i ritardi e chi decide. Concordare un percorso di contestazione semplice e un tempo atteso.

## Quattro prospettive

### Team di prodotto e di consegna

I team portano il rischio di essere misurati e detengono la conoscenza di che cosa significano i numeri. Dovrebbero partecipare alla scelta e alla definizione delle misure, usare i dati nelle proprie revisioni e parlare quando un numero fuorvia. Ne traggono beneficio quando vedono per primi i dati e quando la misurazione aiuta a rimuovere gli ostacoli.

### Team di servizio e operations

I team operativi spesso detengono i dati più ricchi e i carichi più pesanti di reperibilità e incidenti. Dovrebbero diffidare delle misure che premiano il silenzio o puniscono l'escalation, proteggere la segnalazione di incidenti e quasi-incidenti e vigilare che i dati di reperibilità non siano usati per classificare le persone (vedere l'Argomento 5.7 «Metriche di toil e reperibilità»).

### Leadership e governance

I dirigenti stabiliscono la cultura dell'uso. Dovrebbero firmare e rispettare la carta, chiedere viste per team e per servizio, rispondere apertamente alle violazioni ed evitare di chiedere classifiche. Dovrebbero giudicare il programma dal miglioramento che rende possibile e dalla franchezza che preserva, non dal numero di dashboard.

### Clienti e utenti

Clienti e utenti traggono beneficio quando i team segnalano onestamente i problemi e correggono le cause. Possono anche essere oggetto di raccolta dati. Meritano chiarezza su che cosa viene raccolto su di loro e su come viene usato, e possono essere partner nel decidere quali misure mostrano valore per loro (vedere l'Argomento 6.1 «Metriche di soddisfazione del cliente»).

## In pratica: un esempio di ITIL agile

La divisione tecnologica di un fornitore di servizi sanitari introduce le metriche nei propri 15 team di consegna e di assistenza. Un tentativo precedente, tre anni prima, aveva pubblicato una classifica dei team per ticket chiusi ed era finito con un'impennata di chiusure di ticket di scarso valore e un calo degli incidenti segnalati. Le cifre seguenti sono illustrative.

La nuova responsabile della gestione dei servizi inizia chiedendo a sei responsabili di team che cosa ricordano. Descrivono la classifica e le sue conseguenze. Insieme a loro redige una carta: le misure descrivono team e servizi, mai singole persone; le viste individuali sono disattivate negli strumenti; i dati non sono mai usati nelle valutazioni individuali; i team vedono per primi i propri dati; chiunque può contestare un numero, con una risposta entro dieci giorni lavorativi; e una violazione di altro genere sarà segnalata al programma e rivista apertamente. Il direttore della tecnologia la firma, ed essa viene pubblicata nella pagina del programma.

Tre team si offrono volontari per il pilota. Ciascuno sceglie quattro misure da un menu e riscrive due definizioni. Un team insiste che il «tempo di risoluzione» escluda il tempo di attesa del cliente, e un altro che il fallimento delle modifiche sia definito dall'impatto sugli utenti e non dal solo rollback. Il pilota mostra il primo beneficio alla terza settimana, quando un team vede il proprio lavoro in attesa in una coda di approvazione ed elimina un passaggio che nessuno sapeva giustificare. Il team presenta la propria storia a una riunione di divisione. Altri sette team chiedono di aderire. L'adozione volontaria raggiunge 10 team su 15 entro due trimestri, e gli ultimi cinque aderiscono in seguito senza mandato.

Il programma osserva i segnali di paura. Le segnalazioni di quasi-incidenti per team aumentano nel primo trimestre, e la responsabile le interpreta come maggiore disponibilità a segnalare, confermandolo con la lettura di un campione. Un'indagine sui team con dimensione minima del gruppo mostra il 58 per cento di rispondenti d'accordo che «i dati sul nostro lavoro sono usati per aiutarci» all'inizio del secondo trimestre e il 76 per cento all'inizio del quarto. Il tempo di risposta alle contestazioni ha una mediana di quattro giorni lavorativi. Poi una direttrice, preparando un caso di budget, chiede una tabella che classifichi i team per numero di distribuzioni. Il responsabile del programma le dice che ciò esula dalla carta, offre una vista degli andamenti per servizio con commenti dei team e registra la richiesta come quasi-episodio di uso individuale segnalato, con l'esito. La direttrice accetta. Due trimestri dopo, gli episodi di uso individuale sono uno, segnalato, gestito e pubblicato senza nomi.

## Lente di settore

**Startup.** Il team è piccolo e la fiducia è personale. Dire ad alta voce a che cosa servono i numeri, lasciare che l'intero team scelga le poche misure da seguire e tenerle fuori da qualunque conversazione individuale. Il rischio è che un commento di passaggio di un fondatore su un numero rimodelli i comportamenti da un giorno all'altro. Scrivere la promessa, anche in poche righe.

**Piccola impresa.** Il personale può sospettare che i numeri servano a tagliare posti di lavoro. Parlare apertamente del perché si misura, di che cosa si guarderà e di che cosa no. Coinvolgere le persone nella scelta delle misure, condividere ciò che si scopre e mostrare presto un miglioramento che le ha aiutate.

**Grande impresa.** La scala rende la fiducia più difficile, perché la maggior parte dei dirigenti è lontana dai team. Usare una carta firmata a livello alto, misure di proprietà dei team con un piccolo nucleo comune, una configurazione degli strumenti che impedisca le viste individuali e un canale indipendente per segnalare le violazioni. Fare un pilota, imparare e diffondere attraverso i colleghi, ed evitare un'unica data globale di introduzione.

**Pubblica amministrazione e settore pubblico.** Le norme sul lavoro, i sindacati e il controllo pubblico aggiungono vincoli e aspettative. Consultare presto i rappresentanti del personale, concordare con loro la carta ed essere chiari sul confine tra dati di miglioramento e qualunque procedimento formale di valutazione. I requisiti di rendicontazione pubblica andrebbero tenuti separati dalle misure interne di miglioramento (vedere l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi sono soprattutto il tempo delle persone: redigere la carta, condurre i piloti, tenere workshop con i team, gestire le contestazioni, condurre le indagini e il tempo dei dirigenti speso nel rispettare le regole. Esiste anche un costo opportunità, perché un'introduzione accurata è più lenta di un mandato. Tali costi sono piccoli a fronte del costo di un'introduzione fallita, in cui i dati sono distorti, la fiducia è consumata e il programma è abbandonato.

I ritorni sono dati che riflettono la realtà, segnalazione onesta dei problemi e team che usano le misure per migliorare. Si manifestano come individuazione più precoce dei problemi, meno dispute sui numeri e maggiore adozione senza costrizione. Costruire il caso a partire dalla propria storia: che cosa è successo quando le misure sono state imposte in passato, quanti team hanno adottato volontariamente questa volta e come è cambiata la segnalazione dei problemi. Evitare di citare cifre pubblicate su coinvolgimento o fiducia senza una fonte rintracciabile e pertinente al proprio contesto (vedere l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **La classifica a sorpresa.** Le classifiche compaiono in una slide della dirigenza. La fiducia finisce. Tenere le classifiche fuori dal programma.
- **Misure nelle valutazioni delle prestazioni.** Anche una semplice menzione cambia i comportamenti ovunque. Tenerle fuori, per iscritto.
- **Prima il mandato, poi la spiegazione.** Conformità senza convinzione. Fare un pilota con volontari e spiegare le ragioni.
- **Una carta che nessuno fa rispettare.** Parole senza azioni sono peggio di nulla. Richiamare i dirigenti al rispetto e pubblicare gli esiti.
- **Sorveglianza per impostazione predefinita.** Gli strumenti espongono l'attività individuale perché possono farlo. Disattivare tali funzioni.
- **Risposte difensive alle contestazioni.** Le persone smettono di segnalare gli errori. Rispondere rapidamente e con rispetto.
- **Affrettarsi verso molte misure.** Sovraccarico e confusione. Iniziare con poche e crescere.
- **Leggere il silenzio come successo.** Meno segnalazioni possono significare paura. Osservare i segnali di franchezza e parlare con le persone.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Promesse e uso | Non scritti; l'uso varia da un responsabile all'altro | Rassicurazioni verbali; alcuni accordi di team | Carta scritta firmata dai dirigenti; viste individuali disattivate | Violazioni segnalate e riviste; uso della carta verificato | Carta condivisa con il personale e i partner; rivista in base all'esperienza |
| Responsabilità e trasparenza | Misure imposte | Alcuni team consultati | I team scelgono e definiscono le misure e vedono per primi i dati | Quota di responsabilità e tempo di risposta alle contestazioni gestiti | Team, fornitori e clienti condividono le viste per accordo; la responsabilità è routine |
| Fiducia e franchezza | Paura o indifferenza | Pilota con volontari | Indagine sulla sicurezza e andamenti dei quasi-incidenti rivisti con i team | I segnali innescano azioni pianificate; adozione volontaria monitorata | La franchezza è routine; il miglioramento del programma viene da tutti |

## Checklist

- [ ] Una carta scritta afferma a che cosa servono i dati e a che cosa non servono mai, e i dirigenti l'hanno firmata.
- [ ] Le viste e le classifiche a livello individuale sono disattivate negli strumenti o limitate da una politica.
- [ ] I team scelgono o approvano le proprie misure e vedono i propri dati prima degli altri.
- [ ] Un pilota con team volontari precede qualunque introduzione più ampia.
- [ ] Il primo uso dei dati offre un aiuto visibile al team.
- [ ] Esiste un percorso di contestazione, con un tempo di risposta dichiarato e un registro.
- [ ] Esiste un percorso di segnalazione per le violazioni della carta, e gli esiti sono pubblicati senza nomi.
- [ ] I segnali di sicurezza e di franchezza a livello di team sono osservati e discussi con i team.
- [ ] I vettori di gaming e le salvaguardie sono condivisi apertamente con i team.
- [ ] Il programma è rivisto con i team ogni trimestre, e le misure sono ritirate quando smettono di essere utili.

## Prompt IA

**Redigere una carta delle metriche.**

```text
Redigi una carta di una pagina per il programma di metriche di [tipo di
organizzazione]. Deve indicare a che cosa servono i dati, per che cosa non
verranno mai usati (incluse le classifiche individuali e le valutazioni delle
prestazioni), chi può vedere che cosa, per quanto tempo i dati vengono
conservati, come una persona può contestare un numero, come vengono segnalate le
violazioni e chi la firma. Usa parole semplici. Non fornire consulenza legale.
Elenca le tue ipotesi e i punti da confermare con gli specialisti delle risorse
umane e legali.
```

**Pianificare un pilota.**

```text
Pianifica un pilota di sei settimane di un programma di metriche con due o tre
team volontari in [contesto]. Includi come invitare i team, quali misure offrire,
come stabilire le regole, quale aiuto iniziale dovrebbero fornire i dati, che
cosa chiedere ai team alla fine e come decidere sull'introduzione più ampia. Non
dare per scontato l'esito. Elenca le tue ipotesi e i rischi.
```

**Rivedere una misura dal punto di vista della paura.**

```text
Ecco una misura proposta e il modo in cui verrà usata: [incolla]. Comportati come
un membro scettico del team. Descrivi come potrebbe essere percepita come una
minaccia, come le persone potrebbero cambiare comportamento per fare bella figura
e quale segnalazione onesta potrebbe scoraggiare. Suggerisci modifiche alla
definizione, alla visualizzazione o alle regole d'uso che ridurrebbero il rischio.
Elenca le tue ipotesi.
```

**Rispondere a una contestazione.**

```text
Un team ha contestato questo numero: [descrivi, senza dati personali]. Redigi una
risposta rispettosa che riconosca la preoccupazione, spieghi come viene calcolato
il numero, proponga come verificarlo, fissi una data per la risposta e dica che
cosa cambierà se il numero è sbagliato. Non essere difensivo. Elenca ciò che non
sai ancora.
```

## Skill IA

- [Agile ITIL Metrics skill](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare il vettore di gaming e la salvaguardia da condividere apertamente con i team per una misura proposta.
- [Agile ITIL Metrics maintainer skill](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che un piano di introduzione mantenga le misure a livello di team e di servizio e non classifichi mai le singole persone.

## Punti chiave

- La fiducia è la risorsa. Scrivere a che cosa servono i dati e a che cosa non servono mai, e mantenere la promessa.
- Misurare team, servizi e sistemi e disattivare le viste che espongono le singole persone.
- Lasciare che i team scelgano, definiscano e vedano per primi i propri dati e siano padroni della storia che essi raccontano.
- Fare un pilota con volontari, offrire presto un aiuto visibile e diffondere attraverso i colleghi.
- Rispondere rapidamente alle contestazioni e trattare i segnali di paura come informazioni sul programma.
- Richiamare i dirigenti al rispetto della carta e rivedere il programma con le persone che ne fanno parte.

## Riferimenti e letture di approfondimento

1. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 1999.
2. Campbell, D., "Assessing the Impact of Planned Social Change," *Evaluation and Program Planning*, 1979.
3. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
5. Westrum, R., "A Typology of Organisational Cultures," *BMJ Quality and Safety*, 2004.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Trust (social science)](https://en.wikipedia.org/wiki/Trust_(social_science)).
13. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
14. Wikipedia, [Technology adoption life cycle](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle).
15. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
16. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
