# L'IA nella misurazione della gestione dei servizi

**Prima che l'IA cambi il lavoro, si annoti che aspetto ha il lavoro oggi, poi si misuri ogni uso dell'IA rispetto a quella base di riferimento e a un lavoro comparabile svolto senza di essa, perché le affermazioni saranno grandi e le evidenze di solito scarse.**

## Panoramica e motivazione

L'intelligenza artificiale è ormai presente in molti degli strumenti con cui i team costruiscono e gestiscono i servizi. L'[intelligenza artificiale](https://en.wikipedia.org/wiki/Artificial_intelligence) (IA) è la capacità dei sistemi computazionali di svolgere compiti associati all'intelligenza umana. Al suo interno, i sistemi di [apprendimento automatico](https://en.wikipedia.org/wiki/Machine_learning) imparano schemi dai dati, mentre i sistemi di [IA generativa](https://en.wikipedia.org/wiki/Generative_artificial_intelligence), spesso costruiti su [modelli linguistici di grandi dimensioni](https://en.wikipedia.org/wiki/Large_language_model), producono testo, codice e altri contenuti in risposta a prompt. Nella gestione dei servizi IT (ITSM) queste capacità compaiono nello smistamento dei ticket, nella sintesi degli incidenti, nella redazione di articoli della conoscenza, nelle risposte suggerite per il service desk, nel completamento e nella revisione del codice nelle pipeline di consegna, nel rilevamento di anomalie nel monitoraggio e negli assistenti conversazionali per gli utenti. [AIOps](https://en.wikipedia.org/wiki/AIOps) è il nome spesso dato all'applicazione dell'IA ai dati delle operazioni IT.

Le affermazioni sostenute a favore di questi strumenti sono grandi, e le evidenze in una data organizzazione sono di solito scarse. I fornitori riportano tempo risparmiato. I primi ad adottarli riportano entusiasmo. I dirigenti chiedono il guadagno di efficienza che era stato promesso. Nel frattempo i team riferiscono che l'output va controllato, che alcuni suggerimenti sono sbagliati con grande sicurezza e che il lavoro è diverso da prima. La misurazione è il modo in cui un'organizzazione scopre quale di queste affermazioni sia vera per il proprio lavoro. Questa parte del libro prende l'IA sul serio come oggetto da misurare, con le stesse salvaguardie di qualsiasi altra famiglia di metriche.

L'IA cambia il problema della misurazione in quattro modi.

- **Volume e velocità aumentano mentre la qualità diventa più difficile da vedere.** L'IA può produrre rapidamente ticket, risposte, codice e documenti, quindi le misure di output salgono. Se l'output sia buono è una domanda distinta (si veda l'argomento 10.4 «Inflazione delle metriche e diluizione della qualità»).
- **Le basi di riferimento svaniscono.** Una volta che l'IA è in uso quotidiano, non si può più ricostruire che aspetto avesse il lavoro senza di essa. Una base di riferimento va acquisita prima del cambiamento, oppure deve esistere un gruppo di confronto.
- **Gli esseri umani restano nel ciclo, con conseguenze.** I modelli [human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop) mantengono una persona responsabile del risultato. Chi rivede l'output di una macchina può affidarvisi troppo facilmente, uno schema noto come [automation bias](https://en.wikipedia.org/wiki/Automation_bias), oppure può dedicare più tempo al controllo di quanto ne abbia risparmiato.
- **Gli output possono essere fluenti e sbagliati.** Un'[allucinazione](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) è un output espresso con sicurezza ma privo di sostegno nell'input o nei fatti. Le misure devono includere un controllo di correttezza, campionato da una persona.

Le modalità di lavoro agili e quelle di ITIL offrono entrambe un atteggiamento verso tutto questo. Gli obiettivi agili di consegna continua, miglioramento continuo ed evoluzione costante suggeriscono di trattare ogni uso dell'IA come un piccolo esperimento: dichiarare il beneficio atteso, provarlo con poche persone disponibili, confrontare e decidere. Il principio guida di ITIL di procedere in modo iterativo con retroazione va nella stessa direzione, e la sua enfasi sul valore chiede quale risultato migliori per gli utenti e per il business, non quanto testo venga prodotto. L'obiettivo di persone motivate è servito quando l'IA solleva dal lavoro tedioso e rispetta il loro giudizio, e non è servito quando l'IA diventa un modo per aumentare il ritmo o per sorvegliare chi la usa. Ritmo sostenibile significa che il tempo risparmiato non dovrebbe essere trasformato silenziosamente in maggiore domanda.

La salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) si applica all'IA nella sua forma più acuta. Se l'«adozione dell'IA» o la «quota di codice generato dall'IA» diventa un obiettivo, le persone useranno lo strumento dove non aiuta e la qualità pagherà il prezzo del numero (si veda l'argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

Questo argomento tratta i fondamenti: dove l'IA entra nel lavoro, quali basi di riferimento acquisire e quali misure mostrano se un uso dell'IA sta aiutando. Gli argomenti successivi approfondiscono il lavoro assistito, gli agenti e i chatbot, l'inflazione e la diluizione e la governance. I fatti sui prodotti di IA e sulle regole cambiano rapidamente, e le affermazioni su strumenti o normative specifici in questa parte sono datate a ottobre 2026 e vanno ricontrollate.

## Principi chiave

- **Acquisire una base di riferimento prima di introdurre l'IA.** Senza di essa, ogni affermazione sui benefici è un'opinione.
- **Trattare ogni uso come un esperimento con un confronto.** Confrontare con un lavoro analogo svolto senza IA, nello stesso periodo.
- **Misurare la qualità tramite campionamento, con le persone.** Un output fluente non è un output corretto.
- **Contare il costo complessivo.** Includere tempo di revisione, rilavorazione, licenze e costi di inferenza.
- **Mantenere le persone responsabili e informate.** Chi usa l'IA risponde del risultato.
- **Non lasciare che l'IA diventi un aumento di ritmo o uno strumento di sorveglianza.** Il tempo risparmiato è una scelta su come usare il tempo.
- **Cominciare con persone disponibili e problemi reali.** Gli obblighi producono uso senza valore.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Completezza delle basi di riferimento | Quota dei casi d'uso di IA pianificati che dispongono di una base di riferimento registrata, precedente all'adozione, per i loro indicatori principali | casi d'uso con base di riferimento datata / casi d'uso pianificati | percentuale | Registro dei casi d'uso | Miglioramento continuo; misurazione e rendicontazione | Base di riferimento prima di un esperimento | Trimestrale |
| Copertura d'uso dell'IA | Quota degli elementi di lavoro o dei compiti idonei in cui è stata usata l'IA, per caso d'uso | elementi in cui è stata usata l'assistenza dell'IA / elementi idonei, dai log dello strumento o dalle etichette degli utenti, a livello di team | percentuale | Log di utilizzo dello strumento, etichette | Service desk; gestione degli incidenti; gestione dei rilasci e delle distribuzioni | Adozione di uno strumento da parte di team disponibili | Mensile |
| Tasso di accettazione e di modifica dei suggerimenti | Quota dei suggerimenti dell'IA accettati così come sono, modificati o respinti | suggerimenti di ciascuna categoria / suggerimenti proposti | percentuale | Log dello strumento aggregati per team | Service desk; gestione della conoscenza | Revisione dei suggerimenti della macchina | Mensile |
| Accuratezza dell'output rivisto | Quota degli output dell'IA campionati giudicati corretti e adatti allo scopo da un revisore qualificato | output giudicati corretti / output campionati | percentuale | Registrazioni delle revisioni a campione | Assicurazione della qualità; gestione della conoscenza | Definition of done per l'output | Mensile |
| Tempo del compito rispetto alla base di riferimento | Tempo per completare un compito definito con l'IA rispetto alla base di riferimento o a un gruppo di confronto | mediana e 85º percentile del tempo del compito con l'IA meno gli stessi valori per la base di riferimento o il confronto | minuti od ore | Compiti cronometrati, timestamp dei ticket | Service desk; gestione degli incidenti | Cycle time di un compito | Trimestrale |
| Costo per compito assistito dall'IA | Costo totale del lavoro assistito dall'IA per compito, inclusi revisione e rilavorazione | (costo di licenza e di utilizzo + costo del tempo di revisione e rilavorazione) / compiti completati con l'IA | valuta per compito | Fatture dei fornitori, stime dei tempi, tracciatore del lavoro | Gestione finanziaria del servizio | Costo di erogazione per risultato | Trimestrale |
| Variazione del risultato rispetto al confronto | Variazione dell'indicatore di risultato per il lavoro assistito dall'IA rispetto a un lavoro analogo non assistito | variazione dell'indicatore per il gruppo assistito dall'IA meno la variazione per il gruppo di confronto | unità dell'indicatore | Misure di risultato per caso d'uso (qualità, soddisfazione, tasso di riapertura, difetti) | Miglioramento continuo | Apprendimento dagli esperimenti | Trimestrale |

Si definisca ciascun caso d'uso tramite il compito, gli utenti e gli indicatori di risultato, e lo si registri nel registro. La copertura d'uso dell'IA è una misura descrittiva e non un obiettivo. L'accuratezza dell'output rivisto è giudicata rispetto a uno standard scritto da una persona qualificata che non ha prodotto l'output. Il tempo del compito comprende il tempo per formulare il prompt, rivedere e correggere, oltre che per generare. Il costo per compito conta il tempo delle persone dedicato a controllare e correggere. La variazione del risultato richiede un confronto scelto in anticipo e una nota sugli altri cambiamenti avvenuti nel periodo.

## Raccomandazioni

### Decidere dove l'IA ha il suo posto

**1. Elencare i compiti e il problema che ciascun uso dell'IA affronta.** Si parta dal problema, non dallo strumento: redazione ripetitiva, smistamento lento, conoscenza dispersa, revisioni lunghe, avvisi rumorosi. Per ogni uso candidato si scrivano il problema, chi lo avverte, il risultato che dovrebbe migliorare e i rischi. Si scartino gli usi privi di un problema chiaro. È questo il registro a cui si appendono la base di riferimento e le misure.

**2. Classificare il rischio di ciascun uso.** Uno strumento che redige note interne comporta un rischio diverso da uno che modifica sistemi di produzione, risponde ai clienti o prende decisioni sulle persone. Si classifichino gli usi in base al danno in caso di output errato, a chi ne è colpito e al fatto che una persona lo riveda prima che produca effetto. Gli usi a rischio più alto richiedono misure, campionamento e governance più forti (si veda l'argomento 10.5 «Metriche di governance e rischio dell'IA»).

**3. Cominciare con persone disponibili e compiti circoscritti.** Si avvii un progetto pilota con volontari su un compito frequente e verificabile. I volontari danno un riscontro onesto e adattano lo strumento al proprio lavoro. Un compito circoscritto rende fattibili basi di riferimento e confronti. Si eviti di cominciare dal lavoro più delicato.

### Acquisire le basi di riferimento e predisporre i confronti

**4. Registrare la base di riferimento prima del primo uso.** Per ciascun caso d'uso si acquisisca lo stato attuale degli indicatori: tempo di completamento, qualità o tasso di difetti, rilavorazione, soddisfazione degli utenti e costo. Si raccolgano osservazioni sufficienti a vedere la normale variazione (si veda l'argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»). Si date la base di riferimento e la si conservi. Una base di riferimento rilevata dopo l'introduzione è la registrazione del nuovo mondo.

**5. Costruire un confronto.** Dove possibile, si mantenga per il periodo pilota un gruppo analogo o un insieme di compiti che non usa l'IA, oppure si alterni l'uso per settimana o per tipo di compito in modo equo. La randomizzazione è l'ideale e spesso impraticabile. Si dichiari con chiarezza che cos'altro è cambiato. Senza un confronto, i miglioramenti dovuti a stagionalità, organico o apprendimento verranno attribuiti allo strumento.

**6. Misurare il tempo con onestà.** Il tempo fino a una prima bozza raramente è la misura giusta. Si misuri il tempo fino a un risultato finito e verificato, includendo formulazione dei prompt, revisione e correzione. Spesso le persone riferiscono il tempo risparmiato sulla base della fase di generazione, e la fase di revisione ne consuma una parte o tutto. Gli studi dei tempi su un campione di compiti valgono lo sforzo.

### Misurare qualità e costo

**7. Campionare gli output per la revisione da parte di persone qualificate.** Ogni mese si estragga un campione casuale di output assistiti dall'IA e lo si faccia giudicare da una persona qualificata rispetto a uno standard scritto. Si riportino l'accuratezza, i tipi di errore riscontrati e le tendenze. È la principale protezione contro la diffusione di errori fluenti. Si mantenga il revisore indipendente dal produttore e si faccia ruotare i revisori.

**8. Osservare gli schemi di accettazione e di modifica.** Un tasso di accettazione molto alto può segnalare automation bias, cioè persone che accettano senza controllare. Un tasso molto basso può segnalare uno strumento poco utile. Si usino i tassi come spunti di conversazione con il team, chiedendo che cosa significhino i numeri secondo la loro esperienza. Non si fissino obiettivi di accettazione.

**9. Contare il costo complessivo per compito.** Si includano canoni di licenza, addebiti basati sull'uso, il tempo dedicato a formulare prompt, rivedere e correggere, la formazione e lo sforzo di governance. Si confronti con il costo della base di riferimento. Uno strumento che produce bozze rapidamente e richiede forti correzioni può costare più del modo precedente. Si includa il costo degli errori che raggiungono gli utenti.

### Impostare correttamente il lato umano

**10. Proteggere le persone dalla sorveglianza e dallo scivolamento del ritmo.** Si aggreghino i dati d'uso dell'IA a livello di team e non li si usi per valutare i singoli. Non si usi l'utilizzo come misura di prestazione. Si concordi in anticipo che il tempo risparmiato non diventerà automaticamente carico di lavoro aggiuntivo, e si decida con il team che cosa farne: qualità, apprendimento, miglioramento o altro lavoro. Un ritmo costante è un obiettivo di progettazione (si veda l'argomento 9.2 «Metriche di soddisfazione e benessere»).

**11. Chiedere alle persone che la usano.** Brevi sondaggi e conversazioni rivelano ciò che i numeri non colgono: dove lo strumento aiuta, dove frustra, dove sposta il lavoro dal creare al controllare e se cambia la soddisfazione per il lavoro. Si trattino con rispetto le preoccupazioni su competenze, qualità e sicurezza del posto di lavoro.

**12. Decidere, pubblicare e rivedere.** Al termine di ogni pilota si decida se estendere, adattare o interrompere, e si registrino le evidenze. Si condividano i risultati con onestà, compresi quelli nulli e negativi. Si rivedano le decisioni man mano che gli strumenti cambiano, cosa che avviene rapidamente. Un uso che l'anno scorso non aiutava può aiutare oggi, e viceversa.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Completezza delle basi di riferimento | Registrare le basi di riferimento a posteriori; usare indicatori di comodo | Basi di riferimento con data certa; revisione indipendente del metodo di base |
| Copertura d'uso dell'IA | Imporre l'uso; contare invocazioni banali o automatiche | Mai un obiettivo; confrontare con la variazione del risultato; contare l'uso significativo |
| Tasso di accettazione e di modifica dei suggerimenti | Premiare l'accettazione; rendere macchinoso il rifiuto | Nessun obiettivo; accuratezza dell'output rivisto; chiedere agli utenti la loro esperienza |
| Accuratezza dell'output rivisto | Campionare output facili; revisori indulgenti | Campione casuale da parte di revisori indipendenti; standard scritto; rotazione dei revisori |
| Tempo del compito rispetto alla base di riferimento | Cronometrare solo la generazione; scegliere compiti facili | Tempo fino al risultato verificato; campionare i compiti a caso; includere revisione e rilavorazione |
| Costo per compito assistito dall'IA | Omettere il tempo di revisione o il costo di governance | Checklist del costo complessivo; confrontare con gli studi dei tempi |
| Variazione del risultato rispetto al confronto | Scegliere gruppi o periodi favorevoli; ignorare altri cambiamenti | Confronto e periodo concordati in anticipo; elenco degli altri cambiamenti |

Una lettura sana è questa: basi di riferimento per ogni pilota, tempi misurati fino a risultati finiti, accuratezza verificata da persone qualificate, costi che includono la revisione, risultati confrontati in modo equo e team che dicono che lo strumento è al servizio del loro giudizio.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Pilota con volontari | Riscontro onesto; rischio basso | I volontari sono entusiasti; i risultati possono non generalizzarsi |
| Diffusione imposta | Copertura rapida | Uso senza valore; risentimento; manipolazione |
| Confronto controllato | Evidenze credibili | Impegno; non sempre possibile |
| Solo prima e dopo | Semplice | Confuso da altri cambiamenti |
| Risparmi dichiarati dal fornitore | Facili da ottenere | Ottimistici; privi di contesto |
| Compiti cronometrati in proprio | Radicati nel proprio lavoro | Richiedono tempo; campioni piccoli |
| Revisione pesante di ogni output | Sicura | Elimina il beneficio |
| Revisione a campione | Scalabile | Alcuni errori sfuggono |

La risposta in prosa è condurre piccoli progetti pilota con basi di riferimento e confronti, campionare gli output per la qualità, contare il costo complessivo e decidere sulla base delle evidenze. Si usino le cifre dei fornitori come ipotesi da verificare.

## Domande da discutere con il team

**1. Dove ci aspettiamo che l'IA ci aiuti, e che cosa vedremmo se lo facesse?**
Elencate gli usi candidati e, per ciascuno, l'indicatore e la base di riferimento di cui disponiamo oggi. Il facilitatore dovrebbe insistere sulla concretezza: quale compito, quale misura, quale entità di variazione conterebbe. Scegliete un uso da sperimentare e concordate la base di riferimento.

**2. Che cosa ci farebbe fidare o diffidare di un suggerimento dell'IA, e come sapremmo di esserci sbagliati?**
Discutete i casi in cui l'output era sbagliato e come ce ne si è accorti. Considerate come funziona in pratica la revisione e se la pressione porta a saltarla. Concordate un metodo di campionamento che sarà condotto da qualcuno di indipendente.

**3. Quanta parte del tempo che risparmiamo verrebbe spesa in controlli?**
Cronometrate un compito reale con lo strumento e senza, inclusi formulazione dei prompt e revisione. Confrontate con ciò che le persone si aspettano. La conversazione spesso rivela dove sta il guadagno e dove no.

**4. Che cosa dovremmo fare con il tempo che risparmiamo?**
Decidetelo in anticipo. Le opzioni comprendono lavoro di qualità, apprendimento, miglioramento o meno pressione. Discutete come evitare che il tempo venga assorbito silenziosamente da una domanda maggiore. Concordate con i dirigenti come il team lo proteggerà.

**5. Che cosa non vorremmo che l'IA facesse qui, e perché?**
Elencate i compiti che richiedono giudizio umano, empatia o responsabilità. Discutete i rischi per gli utenti e per le competenze. Il facilitatore dovrebbe registrare i confini come input per la governance.

**6. Come sapremo quando fermarci?**
Definite le evidenze che porrebbero fine al pilota o all'uso. Concordate chi decide e quando. Un pilota senza criteri di uscita diventa un'istituzione permanente.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna usano l'IA per codice, test, revisioni e documentazione. Dovrebbero misurare il tempo fino a un risultato rivisto e funzionante, osservare qualità e difetti e mantenere significativa la revisione umana. Dovrebbero resistere alle metriche che contano le righe generate o l'accettazione e insistere su misure di risultato come i difetti e la stabilità.

### Team di servizio e operations

I team di operazioni e di service desk usano l'IA per smistamento, sintesi, suggerimenti e monitoraggio. Dovrebbero confrontare con le basi di riferimento la qualità della gestione e della risoluzione, campionare gli output e osservare gli effetti sugli utenti e sui contatti ripetuti. Andrebbero consultati prima che l'IA venga posta di fronte agli utenti.

### Leadership e governance

I dirigenti sponsorizzano i programmi di IA e subiscono la pressione di mostrare risultati. Dovrebbero insistere su basi di riferimento e confronti, finanziare il lavoro di revisione, evitare obiettivi di utilizzo e proteggere le persone da sorveglianza e scivolamento del ritmo. La governance dovrebbe richiedere la classificazione del rischio e le evidenze prima di estendere l'uso.

### Clienti e utenti

Gli utenti incontrano l'IA nelle risposte, nei suggerimenti e nelle azioni automatizzate. Vogliono un aiuto corretto e comprensibile e la possibilità di raggiungere una persona. Dovrebbero essere informati quando interagiscono con l'IA, dove opportuno, e il loro riscontro è l'evidenza chiave per sapere se essa aiuta (si veda l'argomento 6.1 «Metriche di soddisfazione del cliente»).

## In pratica: un esempio di ITIL agile

Il gruppo tecnologico di una compagnia assicurativa di medie dimensioni gestisce un service desk interno per 4.000 dipendenti e diversi team di prodotto. La direzione acquista licenze per un assistente di IA e chiede un resoconto del tempo risparmiato dopo tre mesi. I numeri seguenti sono illustrativi.

La responsabile della gestione dei servizi insiste su una base di riferimento. Per il compito più frequente del service desk, la redazione di risposte alle richieste di accesso e di password, cronometra 120 ticket recenti: tempo mediano di gestione di 11 minuti, 85º percentile di 24, tasso di riapertura del 6 percento e un punteggio di soddisfazione, ricavato dal sondaggio, stabile. Sceglie due team per sperimentare l'assistente e ne mantiene due analoghi come confronto. I team del pilota sono volontari.

Dopo otto settimane, il tempo mediano di gestione dei team del pilota è di 8 minuti e l'85º percentile è 19, contro 11 e 23 nei team di confronto. I log dello strumento mostrano che gli operatori accettano i suggerimenti così come sono nel 52 percento dei casi, li modificano nel 38 percento e li respingono nel 10 percento. Un campione casuale mensile di 80 risposte, rivisto da un operatore senior estraneo al pilota, ne trova il 91 percento completamente corretto, con errori concentrati in una procedura usata raramente per la quale l'assistente ha fornito passaggi obsoleti. Il tasso di riapertura nei team del pilota sale leggermente al 7 percento, entro la normale variazione. Il costo per ticket scende modestamente una volta contate licenze e tempo di revisione. Un sondaggio mostra che gli operatori apprezzano le bozze e non gradiscono il controllo aggiuntivo delle risposte lunghe. Due operatori dicono di sentire la pressione a gestire più ticket all'ora.

La responsabile della gestione dei servizi riferisce un risparmio di tempo di circa un quarto alla mediana ed espone le riserve: due team, otto settimane, volontari e un tasso di riapertura da tenere sotto osservazione. Concorda con i dirigenti che il tempo risparmiato andrà alla base di conoscenza e ai casi complessi e che nessun obiettivo sui ticket aumenterà. La procedura obsoleta viene corretta nella base di conoscenza. Un dirigente senior chiede l'uso obbligatorio in tutta l'azienda e un obiettivo di accettazione dell'80 percento. Lei rifiuta l'obiettivo, spiegando che un obiettivo di accettazione premierebbe il non controllare, e propone di estendere il pilota ad altri due team con le stesse misure. La decisione viene registrata.

## Lente di settore

**Startup.** Gli strumenti vengono adottati rapidamente e spesso in modo informale. Si acquisisca una semplice base di riferimento di tempi e difetti per l'uso principale, si mantenga la revisione umana di tutto ciò che è rivolto ai clienti e si eviti di legarsi presto a un unico fornitore. Si faccia attenzione a sicurezza ed esposizione dei dati quando il personale usa strumenti pubblici.

**Piccola impresa.** Gli assistenti pronti all'uso possono offrire un aiuto reale per la redazione e i compiti di routine. Si misuri su piccola scala: tempo per alcuni compiti reali e tasso di correzioni. Si presti attenzione ai dati riservati e si verifichino le condizioni del fornitore sull'uso dei dati.

**Grande impresa.** La scala richiede governance, standard di approvvigionamento e un approccio comune alla misurazione. Si conducano piloti con confronto, si pubblichino i risultati internamente e si condividano basi di riferimento e metodi tra i team. Ci si guardi dai programmi che riportano l'utilizzo come successo.

**Pubblica amministrazione e settore pubblico.** Le decisioni che riguardano i cittadini possono essere soggette a obblighi di legge in materia di trasparenza, equità e revisione umana. Si classifichino gli usi per rischio, si conservino registrazioni di come l'IA è stata usata nelle decisioni e si sia trasparenti al riguardo. Si applicano le regole sugli appalti e la protezione dei dati, e alcune giurisdizioni hanno leggi specifiche sull'IA da verificare alla data odierna (si veda l'argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi sono licenze o addebiti d'uso, integrazione, formazione, il tempo per acquisire le basi di riferimento e condurre i confronti, il tempo delle persone dedicato a rivedere e correggere gli output e lo sforzo di governance. I costi possono crescere con l'uso e cambiare con i prezzi dei fornitori, quindi si modelli un intervallo.

I potenziali ritorni sono tempo recuperato nei compiti ripetitivi, redazione e ricerca più rapide, migliore copertura della conoscenza e sollievo per il personale dal lavoro tedioso. Sono possibilità da verificare, non ipotesi da dare per incassate. Si costruisca il caso a partire dai propri piloti: tempo del compito misurato fino a un risultato verificato, accuratezza rivista, rilavorazione e costo complessivo per compito, rispetto a base di riferimento e confronto. Si eviti di citare percentuali di produttività da fonti di fornitori o di sondaggi, a meno di poterne ricostruire il metodo e l'aderenza al proprio lavoro. Si includano il rischio di errori che raggiungono gli utenti e il costo di governare gli strumenti (si veda l'argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Introdurre l'IA senza una base di riferimento.** Non si può dire che cosa sia cambiato. La si acquisisca per prima.
- **Misurare la velocità di generazione.** Il risparmio può svanire nella revisione. Si misuri il tempo fino a un risultato verificato.
- **Obiettivi di adozione.** Producono uso senza valore. Si tratti la copertura come descrittiva.
- **Fidarsi delle affermazioni dei fornitori.** Sono ipotesi. Si verifichino sul proprio lavoro.
- **Una revisione che non è reale.** L'automation bias trasforma la revisione in un timbro. Si campioni e si controlli in modo indipendente.
- **Convertire il tempo risparmiato in maggiore domanda.** Erode la fiducia e il ritmo sostenibile. Si decida in anticipo a che cosa serve il tempo.
- **Sorvegliare l'uso individuale.** Genera paura. Si aggreghi a livello di team.
- **Piloti senza fine.** Diventano permanenti per inerzia. Si fissino criteri di uscita.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Scopo e basi di riferimento | Strumenti adottati per entusiasmo | Casi d'uso elencati | Registro con problema, classe di rischio, base di riferimento e indicatore per ciascun uso | Basi di riferimento e confronti richiesti prima di estendere; risultati pubblicati | Basi di riferimento e metodi condivisi tra team e partner; usi ritirati quando le evidenze si affievoliscono |
| Evidenze del beneficio | Aneddoti e affermazioni dei fornitori | Stime informali dei tempi | Compiti cronometrati; accuratezza campionata; costo complessivo per compito | Variazione del risultato rispetto al confronto riportata con i suoi limiti | Visione di portafoglio di dove l'IA aiuta, con apprendimento condiviso ampiamente |
| Persone e ritmo | Obblighi; sorveglianza | Attenzione informale | Solo dati a livello di team; tempo risparmiato destinato per accordo | Preoccupazioni monitorate; competenze e soddisfazione misurate | Co-progettazione dell'uso dell'IA con utenti e personale; ritmo sostenuto protetto |

## Checklist

- [ ] Ogni uso dell'IA ha un problema scritto, una classe di rischio, un responsabile e criteri di uscita.
- [ ] Esiste una base di riferimento datata per ogni pilota prima del primo utilizzo.
- [ ] Un gruppo di confronto o compiti di confronto sono definiti in anticipo.
- [ ] Il tempo è misurato fino a un risultato finito e verificato.
- [ ] Gli output sono campionati ogni mese e rivisti da persone qualificate e indipendenti.
- [ ] Il costo complessivo per compito include revisione e rilavorazione.
- [ ] I dati d'uso sono aggregati a livello di team e non usati per i singoli.
- [ ] Il team ha concordato che cosa fare con il tempo risparmiato.
- [ ] Agli utenti viene chiesta la loro esperienza con lo strumento.
- [ ] I piloti terminano con una decisione registrata di estendere, adattare o interrompere.

## Prompt IA

**Redigere una voce di caso d'uso.**

```text
Stiamo valutando l'uso dell'IA per [compito] in [team e servizio]. Redigi una voce
del registro dei casi d'uso: il problema e chi lo avverte, il risultato che
dovrebbe migliorare, la classificazione del rischio e il perché, la fase di
revisione umana, gli indicatori di base da acquisire ora, un approccio di
confronto, le componenti di costo da monitorare, i criteri di uscita e le
domande per il team. Non dare per scontate funzionalità specifiche dei fornitori
e non dichiarare benefici. Elenca le tue ipotesi.
```

**Progettare uno studio a compiti cronometrati.**

```text
Progetta un piccolo studio per misurare l'effetto di un assistente di IA su
[compito]. Proponi come selezionare i compiti, come confrontare in modo equo con
e senza lo strumento, che cosa cronometrare (inclusi formulazione dei prompt,
revisione e correzione), come giudicare la qualità dell'output e come evitare
distorsioni. Mantienilo pratico per un team di [numero] persone. Non indicare
risultati attesi. Elenca le tue ipotesi e i limiti del disegno dello studio.
```

**Pianificare il campionamento degli output.**

```text
I nostri output assistiti dall'IA sono circa [numero] al mese, dei tipi [elenco].
Progetta un processo mensile di campionamento casuale e revisione: dimensione del
campione e metodo di selezione (con la motivazione, evitando una precisione
ostentata), chi rivede, lo standard scritto, le categorie di errore, come
rendicontare e come usare i risultati. Elenca le tue ipotesi e i rischi.
```

**Decidere che cosa fare con il tempo risparmiato.**

```text
Il nostro pilota ha risparmiato una mediana di [valore] per compito, per [numero]
compiti a settimana in [team]. Suggerisci opzioni per usare il tempo a favore di
qualità, apprendimento e ritmo sostenibile, con i compromessi e i rischi di
ciascuna, e un modo per concordare la scelta con il team e con i dirigenti. Non
dare per scontato che i risparmi persistano. Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica legata all'IA prima di rendicontarla.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica di IA riporti la sua base di riferimento, il confronto, il vettore di manipolazione e la salvaguardia.

## Punti chiave

- Si acquisisca una base di riferimento datata prima che l'IA venga usata e si confronti con un lavoro analogo svolto senza di essa.
- Si misuri il tempo fino a un risultato finito e verificato e si campionino gli output per l'accuratezza con revisori indipendenti.
- Si conti il costo complessivo, inclusi revisione e rilavorazione.
- Si trattino utilizzo e accettazione come descrittivi, mai come obiettivi.
- Si decida in anticipo che cosa fare con il tempo risparmiato e si mantenga un ritmo sostenibile.
- Si tengano i dati d'uso a livello di team e si chiuda ogni pilota con una decisione registrata.

## Riferimenti e letture di approfondimento

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
4. Bender, E. M., Gebru, T., McMillan-Major, A., and Shmitchell, S., "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 2021.
5. Russell, S., and Norvig, P., *Artificial Intelligence: A Modern Approach*, 4th ed., Pearson, 2020.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
8. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
9. Wikipedia, [Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).
10. Wikipedia, [Large language model](https://en.wikipedia.org/wiki/Large_language_model).
11. Wikipedia, [AIOps](https://en.wikipedia.org/wiki/AIOps).
12. Wikipedia, [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop).
13. Wikipedia, [Automation bias](https://en.wikipedia.org/wiki/Automation_bias).
14. Wikipedia, [Hallucination (artificial intelligence)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
