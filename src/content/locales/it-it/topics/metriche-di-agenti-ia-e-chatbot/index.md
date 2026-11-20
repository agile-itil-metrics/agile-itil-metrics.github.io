# Metriche di agenti IA e chatbot

**Un assistente conversazionale ha aiutato solo quando il problema dell'utente è risolto e resta risolto: si misurino dunque la risoluzione verificata, i ritorni, la qualità del passaggio a una persona e il danno delle azioni errate, e non si premi mai un bot per aver tenuto le persone lontane dall'aiuto.**

## Panoramica e motivazione

Molte organizzazioni pongono oggi un assistente conversazionale tra gli utenti e il service desk, e alcune danno agli agenti di IA la capacità di agire: reimpostare una password, ordinare un'attrezzatura, riavviare un servizio, cambiare una configurazione. Un [chatbot](https://en.wikipedia.org/wiki/Chatbot) è un'applicazione software che conduce una conversazione, e un [assistente virtuale](https://en.wikipedia.org/wiki/Virtual_assistant) aggiunge la capacità di svolgere compiti per conto dell'utente. L'idea più ampia di [agente intelligente](https://en.wikipedia.org/wiki/Intelligent_agent) è quella di un sistema che percepisce un ambiente e compie azioni in vista di obiettivi. I moderni modelli linguistici rendono questi sistemi molto più capaci di conversazione aperta dei loro predecessori basati su regole, e il primo programma conversazionale, ELIZA di Joseph Weizenbaum negli anni Sessanta, mostrava già con quanta facilità le persone attribuiscano comprensione a una macchina che si limita a produrre risposte plausibili.

L'attrattiva è evidente. Gli utenti ricevono aiuto a qualsiasi ora senza attendere. I team dedicano meno tempo alle richieste di routine. Il [self-service](https://en.wikipedia.org/wiki/Self-service) è da tempo un obiettivo dell'ITSM, e lo shift-left, lo spostamento della risoluzione verso punti più precoci e meno costosi, è un'idea centrale del service desk (si veda l'argomento 3.7 «Metriche di self-service e automazione»). Il problema di misurazione è che i numeri più ovvi premiano le cose sbagliate. Un bot che chiude una conversazione la conta come «contenuta», sia che l'utente sia stato aiutato sia che si sia arreso. Un bot che non offre mai una persona massimizza il contenimento. Un bot che dà con sicurezza una risposta sbagliata produce un fallimento silenzioso che emerge, giorni dopo, come un contatto irritato.

Due tipi di sistema richiedono misure distinte.

- **Gli assistenti conversazionali** rispondono a domande, guidano gli utenti e raccolgono informazioni. Il loro rischio sono risposte errate o inutili e il fatto di intrappolare gli utenti in cicli. Le misure si concentrano su risoluzione, accuratezza e percorso verso una persona.
- **Gli agenti che agiscono** cambiano cose nel mondo: account, sistemi, ticket, denaro. Il loro rischio è un'azione errata con conseguenze reali. Le misure si concentrano su correttezza delle azioni, reversibilità, confini dei permessi e tracce di audit. Questi usi richiedono una governance più forte e, spesso, l'approvazione umana per i passaggi rilevanti (si veda l'argomento 10.5 «Metriche di governance e rischio dell'IA»).

Diverse questioni di progettazione determinano che cosa misurare.

- **Onestà su ciò con cui l'utente sta parlando.** Molte giurisdizioni hanno o stanno elaborando obblighi di informare le persone quando interagiscono con un sistema di IA, e a ottobre 2026 queste regole sono in evoluzione, quindi si verifichi che cosa si applica al proprio caso. La buona pratica è comunque dirlo con chiarezza.
- **Una via d'uscita.** Gli utenti devono poter raggiungere una persona senza fatica. Un bot che nasconde la via verso un essere umano è un [dark pattern](https://en.wikipedia.org/wiki/Dark_pattern), un modello di progettazione che inganna o intrappola gli utenti portandoli a esiti che non sceglierebbero.
- **Accessibilità.** Le interfacce conversazionali devono funzionare per chi usa tecnologie assistive, per chi ha una limitata capacità linguistica e per chi ha bisogno di un'altra lingua o di un altro canale.
- **Decisioni automatizzate.** Quando l'output di un assistente incide sui diritti o sull'accesso di una persona, si applicano il tema del [processo decisionale automatizzato](https://en.wikipedia.org/wiki/Automated_decision-making) e gli obblighi che lo accompagnano. Si lascino tali decisioni alle persone, o con forti salvaguardie.

La salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) è qui vivida: se il contenimento o la deflessione sono l'obiettivo, il modo più economico di raggiungerlo è rendere più difficile raggiungere una persona (si veda l'argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»). Le misure che seguono pongono al primo posto la risoluzione e il risultato per l'utente.

## Principi chiave

- **La risoluzione è la misura, non il contenimento.** Una conversazione terminata non è un problema risolto.
- **Verificare e controllare il ritorno.** Si conti un contatto come risolto solo quando l'utente lo conferma o non ritorna.
- **Fornire sempre una via verso una persona.** Si renda il percorso facile, rapido e visibile, e si porti con sé il contesto.
- **Essere onesti sul sistema.** Si dica che è un'IA, che cosa sa fare e che cosa no.
- **Limitare ciò che gli agenti possono fare.** Si conceda il privilegio minimo, si richieda l'approvazione per le azioni rilevanti e si conservi una traccia di audit.
- **Misurare la qualità delle risposte tramite campionamento.** Le risposte fluenti possono essere sbagliate.
- **Ascoltare gli utenti e il personale che raccoglie i cocci.** Vedono ciò che le metriche non colgono.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasso di risoluzione verificata | Quota delle conversazioni con il bot in cui l'utente ha confermato che il problema era risolto, o non è tornato entro un periodo dichiarato | conversazioni con risoluzione confermata o senza contatto di ritorno entro 7 giorni / conversazioni iniziate con un'intenzione risolvibile | percentuale | Log delle conversazioni, conferma dell'utente, dati di ticket e contatti | Service desk; gestione della conoscenza | Risultato funzionante per l'utente | Settimanale |
| Tasso di contatti di ritorno | Quota delle conversazioni concluse dal bot seguite da un contatto sullo stesso problema attraverso qualsiasi canale | conversazioni seguite da un contatto correlato entro 7 giorni / conversazioni concluse senza passaggio a una persona | percentuale | Log delle conversazioni collegati alle registrazioni di ticket e contatti | Service desk; gestione degli incidenti | Difetti sfuggiti | Settimanale |
| Completezza del contesto nel passaggio di consegne | Quota dei passaggi a una persona in cui la persona disponeva delle informazioni necessarie senza chiedere all'utente di ripetersi | passaggi campionati giudicati completi dall'operatore ricevente / passaggi campionati | percentuale | Passaggi campionati, riscontro degli operatori | Service desk; gestione della conoscenza | Collaborazione fluida oltre il confine | Mensile |
| Tempo di accesso a una persona | Tempo da quando l'utente chiede una persona, o il bot decide di passare la mano, a quando una persona prende in carico | mediana e 85º percentile dei minuti | minuti | Log delle conversazioni, dati delle code | Service desk; gestione degli incidenti | Reattività quando l'utente ha bisogno di aiuto | Settimanale |
| Accuratezza delle risposte | Quota delle risposte del bot campionate giudicate corrette, complete e sicure da un revisore qualificato | risposte giudicate corrette / risposte campionate | percentuale | Revisione a campione | Gestione della conoscenza; assicurazione della qualità | Definition of done per una risposta | Mensile |
| Soddisfazione e sforzo con il bot | Valutazione dell'utente su soddisfazione e facilità dopo una conversazione, con commenti | valutazioni favorevoli / valutazioni; valutazione media dello sforzo | percentuale; punti di scala | Breve sondaggio al termine della conversazione | Service desk; esperienza del cliente | Riscontro sul software funzionante | Settimanale |
| Tasso di annullamento delle azioni dell'agente | Quota delle azioni compiute da un agente di IA che hanno dovuto essere corrette, annullate o fatte salire di livello | azioni annullate o corrette / azioni compiute, per tipo di azione e classe di rischio | percentuale | Log di audit delle azioni, registrazioni delle modifiche | Abilitazione delle modifiche; gestione degli incidenti | Rilavorazione e rollback | Settimanale |

Si definiscano le intenzioni che il bot gestisce e si escludano dal contenimento quelle che dovrebbe sempre passare a una persona. La risoluzione verificata conta una conversazione solo se il problema rientrava nell'ambito e l'utente ha confermato oppure non ha mostrato alcun contatto di ritorno. Il tempo di accesso a una persona parte dalla richiesta dell'utente, non dalla fine di un menu. L'accuratezza delle risposte è giudicata rispetto alla base di conoscenza e alla politica da una persona che non ha costruito il bot. L'annullamento delle azioni dell'agente è suddiviso per tipo di azione e classe di rischio, e ogni azione dannosa è riportata separatamente come incidente.

## Raccomandazioni

### Definire il successo come risoluzione

**1. Definire le intenzioni e il risultato desiderato.** Si elenchino i problemi che l'assistente dovrebbe gestire, come reimpostazione della password, stato dell'accesso e domande su come fare, e il risultato per ciascuno: risposta fornita, azione svolta o passaggio a una persona. Si decida quali intenzioni devono sempre andare a una persona: reclami, tutto ciò che implica disagio, sicurezza, diritti legali o denaro. Un bot che cerca di gestire tutto fallisce male ai margini.

**2. Misurare la risoluzione verificata e i ritorni.** Si chieda agli utenti, alla fine, se il problema è risolto, e si cerchino anche i contatti correlati successivi. Nessuno dei due da solo basta: gli utenti che si arrendono non rispondono, e alcuni di quelli che sono stati aiutati chiamano comunque. Insieme approssimano la vera risoluzione. Si tratti il tasso di contatti di ritorno come la salvaguardia chiave per qualsiasi dato di contenimento (si veda l'argomento 3.1 «Metriche del service desk»).

**3. Evitare il contenimento come obiettivo.** Si riporti il contenimento solo come dato descrittivo e sempre accanto a risoluzione verificata, ritorni e soddisfazione. Un contenimento in crescita con ritorni in crescita significa che il bot sta respingendo le persone. Non si fissi un obiettivo di contenimento né si leghi a esso la prestazione di alcuno.

### Rendere facile e valida la via verso una persona

**4. Lasciare che gli utenti raggiungano una persona in qualsiasi momento.** Si fornisca un modo chiaro e semplice di chiedere un essere umano, e lo si rispetti. Si misurino il tempo di accesso a una persona e la quota di conversazioni in cui gli utenti hanno chiesto più di una volta. Si provi regolarmente il percorso in prima persona. Dove nessuna persona è disponibile, si dica quando lo sarà e si offra una richiamata.

**5. Passare la mano con il contesto.** Quando il bot passa una conversazione a una persona, si includano la sintesi, ciò che è stato provato, le parole dell'utente e i dettagli rilevanti dell'account, così che l'utente non debba ripetersi. Si chieda agli operatori riceventi di valutare se il passaggio fosse completo e si campionino i risultati. I passaggi scadenti fanno fidare meno gli utenti sia del bot sia del servizio (si veda l'argomento 9.3 «Metriche di collaborazione e passaggi di consegne»).

**6. Progettare per tutti gli utenti.** Si provi l'assistente con utenti che usano tecnologie assistive, che scrivono in altre lingue, che hanno fretta o sono in difficoltà e che non si trovano a proprio agio con la tecnologia. Si offrano altri canali. Si misurino risoluzione verificata e soddisfazione per gruppo di utenti dove è sicuro e lecito farlo. Le medie nascondono chi il bot delude di più.

### Verificare la qualità di ciò che dice e fa

**7. Campionare le risposte per accuratezza e sicurezza.** Ogni mese si estragga un campione casuale di conversazioni e si faccia giudicare le risposte da una persona qualificata: corrette, complete, sicure e oneste sull'incertezza. Si registrino gli errori per tipo: obsoleti, inventati, non conformi alla politica o fraintesi. Si riportino gli errori alla base di conoscenza e alla configurazione. Si aggiungano test mirati per gli argomenti sensibili e per i tentativi di spingere l'assistente fuori dal proprio ambito.

**8. Mantenere aggiornata la conoscenza.** Un assistente vale quanto i contenuti e gli strumenti da cui attinge. Si colleghino gli errori nelle risposte agli articoli della conoscenza e si misuri l'aggiornamento della conoscenza che usa (si veda l'argomento 3.6 «Metriche di gestione della conoscenza»). Dove il sistema usa il recupero da una base di conoscenza, si includa un controllo che citi le proprie fonti e che le fonti siano giuste.

**9. Essere onesti con gli utenti.** Si dichiari all'inizio che stanno parlando con un'IA e che cosa può e non può fare. Non le si dia un nome o un modo di fare umano che suggerisca altro. Dove non è sicura, dovrebbe dirlo e offrire una persona. Si verifichi la legge applicabile sull'informativa.

### Governare gli agenti che agiscono

**10. Classificare le azioni per rischio e impostare i permessi di conseguenza.** Per ogni azione che un agente può compiere si definisca la sua classe di rischio: informativa, reversibile e a basso impatto, oppure rilevante. Si conceda il privilegio minimo necessario. Si richieda l'approvazione umana per le azioni rilevanti. Si conservi una traccia di audit di ogni azione con il motivo, l'utente e il risultato. Questi controlli si collegano alle misure di modifica e di sicurezza delle parti precedenti (si vedano l'argomento 8.1 «Metriche di incidenti di sicurezza e vulnerabilità» e l'argomento 8.2 «Metriche di rischio e controlli»).

**11. Misurare correttezza e reversibilità delle azioni.** Si segua il tasso di annullamento per tipo di azione e si riveda ogni azione dannosa come incidente, senza attribuire colpe. Si collaudino gli agenti in un ambiente sicuro prima di concedere l'accesso e si ripeta il collaudo quando cambiano il modello o gli strumenti. Una nuova versione del modello può cambiare il comportamento, quindi la si tratti come una modifica che richiede controllo (si veda l'argomento 4.3 «Metriche di abilitazione delle modifiche»).

**12. Ascoltare le persone che raccolgono i cocci.** Il personale del service desk vede le conseguenze dei fallimenti del bot: utenti irritati, contatti ripetuti e pasticci da sistemare. Gli si chieda regolarmente che cosa il bot sbagli e che cosa renda il lavoro più difficile. Il loro riscontro e i commenti degli utenti sono evidenze che nessuna metrica coglie per intero, e dovrebbero orientare il successivo ciclo di cambiamenti.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tasso di risoluzione verificata | Contare come risolta qualsiasi fine di conversazione; porre domande di conferma suggestive | Definire la conferma in modo neutro; tasso di contatti di ritorno; campionare le conversazioni |
| Tasso di contatti di ritorno | Misurare solo attraverso un canale; finestre brevi | Unire tutti i canali; usare come controllo una finestra più lunga; campionare i ritorni |
| Completezza del contesto nel passaggio di consegne | Passare una trascrizione lunga invece di una sintesi; campionare passaggi facili | Valutazione dell'operatore ricevente; campione casuale; tempo di risoluzione dopo il passaggio |
| Tempo di accesso a una persona | Far partire il cronometro dopo i menu; contare come presa in carico la conferma di ingresso in coda | Il cronometro parte alla richiesta; presa in carico significa che una persona è attiva nella conversazione |
| Accuratezza delle risposte | Campionare conversazioni facili; revisori indulgenti | Campione casuale da parte di revisori indipendenti; casi di prova avversari |
| Soddisfazione e sforzo con il bot | Sondare solo le conversazioni concluse; collocare il sondaggio dove arrivano solo gli utenti soddisfatti | Sondare anche le conversazioni abbandonate; tasso di risposta e composizione; leggere i commenti |
| Tasso di annullamento delle azioni dell'agente | Non registrare gli annullamenti; riclassificare le correzioni come nuovo lavoro | Log di audit a prova di manomissione; collegare gli annullamenti alle azioni; revisione degli incidenti |

Una lettura sana è questa: alta risoluzione verificata con pochi ritorni, vie facili e rapide verso una persona con passaggi completi, risposte accurate nella revisione a campione, utenti soddisfatti in tutti i gruppi e agenti le cui azioni di rado richiedono di essere annullate e non causano mai danni inosservati.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Bot basato su regole | Prevedibile, facile da collaudare | Ristretto; fragile; frustrante fuori dai copioni |
| Assistente basato su modello linguistico | Flessibile, fluente | Può sbagliare con sicurezza; più difficile da collaudare |
| Recupero da conoscenza approvata | Risposte ancorate, più facili da correggere | Dipende dalla qualità dei contenuti |
| Generazione aperta | Ampia copertura | Maggiore rischio di invenzione |
| Approvazione umana per le azioni | Sicurezza | Più lenta; affaticamento del revisore |
| Azioni autonome | Velocità | Raggio d'impatto più ampio in caso di errore |
| Ambito rigoroso con passaggio precoce | Sicuro | Contenimento più basso |
| Ambito ampio | Contenimento più alto | Più errori ai margini |

La risposta in prosa è partire da intenzioni ristrette e ben comprese, ancorare le risposte a conoscenza approvata, rendere facile l'aiuto umano ed estendere ambito e autonomia solo nella misura in cui le misure lo giustificano.

## Domande da discutere con il team

**1. Se un utente volesse una persona subito, quanti passaggi occorrerebbero, e l'abbiamo provato noi stessi?**
Provate insieme il percorso. Contate i passaggi e l'attesa. Il facilitatore dovrebbe annotare ogni ostacolo. Concordate modifiche perché il percorso sia breve e misurate il tempo di accesso a una persona.

**2. Quale quota delle conversazioni che il nostro bot ha concluso ha davvero risolto il problema?**
Controllate ritorni e conferme su un campione. Confrontate con il dato di contenimento. Discutete lo scarto. Decidete quale dato i dirigenti debbano vedere.

**3. Che cosa sbaglia il nostro bot, e chi se ne accorge?**
Chiedetelo al service desk. Rivedete conversazioni campionate. Cercate schemi: articoli obsoleti, domande ambigue, argomenti sensibili. Concordate un percorso dagli errori alle correzioni, con un responsabile.

**4. Quali azioni può compiere l'agente da solo, e quali richiedono una persona?**
Elencate le azioni con le loro classi di rischio e i permessi. Chiedetevi quale sarebbe il peggior fallimento realistico di ciascuna. Concordate le regole di approvazione e la traccia di audit, e chi riesamina i casi dannosi.

**5. Chi sta deludendo in silenzio il bot?**
Pensate agli utenti che hanno fretta, sono in difficoltà, hanno esigenze di accessibilità o una lingua limitata. Osservate risoluzione e soddisfazione per gruppo, dove è sicuro. Concordate una prova con tali utenti.

**6. Che cosa ci farebbe spegnere il bot o restringerne l'ambito?**
Definite le evidenze: ritorni sopra un livello, azioni dannose, accuratezza sotto uno standard. Decidete chi può decidere. Avere in anticipo una regola di arresto rende più facile agire.

## Quattro prospettive

### Team di prodotto e di consegna

I team che costruiscono l'assistente ne sono responsabili della qualità. Dovrebbero definire le intenzioni, ancorare le risposte a conoscenza approvata, collaudare con casi avversari, rilasciare le modifiche sotto controllo e leggere i fallimenti. Dovrebbero opporsi agli obiettivi di contenimento che premiano l'intrappolare gli utenti.

### Team di servizio e operations

Il personale del service desk lavora con l'assistente ed eredita i suoi fallimenti. Dovrebbe valutare i passaggi, segnalare le risposte errate, mantenere aggiornata la conoscenza e subentrare rapidamente quando richiesto. È il miglior giudice del fatto che l'assistente aiuti gli utenti, e il suo carico di lavoro e il suo stress fanno parte del quadro.

### Leadership e governance

I dirigenti sponsorizzano l'assistente e vogliono risparmi. Dovrebbero chiedere risoluzione verificata, ritorni e soddisfazione accanto al contenimento, richiedere una regola di arresto, finanziare la via umana e rivedere le classi di rischio per gli agenti. La governance dovrebbe verificare informativa, accessibilità e obblighi di legge.

### Clienti e utenti

Gli utenti vogliono aiuto con poco sforzo e senza trucchi. Dovrebbero sapere di parlare con un'IA, poter raggiungere facilmente una persona e confidare che il sistema non agirà senza buoni motivi. La loro esperienza, specie dei fallimenti, è l'evidenza primaria del fatto che l'assistente valga la pena.

## In pratica: un esempio di ITIL agile

Un'università nazionale gestisce un service desk per studenti e personale che tratta circa 30.000 contatti al mese. Lancia un chatbot per le richieste comuni, e la dashboard del fornitore riporta un tasso di contenimento del 74 percento. I numeri seguenti sono illustrativi.

Il responsabile dei servizi agli studenti verifica. Tra le conversazioni concluse dal bot nell'ultimo mese, il 29 percento è stato seguito da un contatto correlato via e-mail o telefono entro sette giorni. La risoluzione verificata, basata sulla conferma dell'utente e sull'assenza di ritorno, è del 49 percento per le intenzioni rientranti nell'ambito. Il tempo mediano per raggiungere una persona dopo averla chiesta è di 6 minuti, con un 85º percentile di 22, in parte perché il percorso richiede tre passaggi di menu. Un campione di 100 conversazioni riviste da due consulenti esperti trova 88 risposte corrette e 12 difettose: 7 obsolete, 3 con dettagli inventati su una scadenza e 2 che hanno gestito male casi sensibili riguardanti uno studente in difficoltà. Gli operatori riceventi valutano completo il 54 percento dei passaggi. La soddisfazione per il bot è più bassa per gli studenti che usano lettori di schermo e per chi scrive in lingue diverse dall'inglese. Il team del service desk riferisce molti contatti che iniziano con «il chatbot non è riuscito ad aiutarmi».

Il responsabile dei servizi agli studenti apporta cambiamenti con il team. Le intenzioni sensibili, come benessere, reclami e controversie sulle tasse, sono instradate direttamente a una persona, e il bot lo dichiara. Un'opzione «parla con una persona» compare in ogni schermata, e il tempo di accesso a una persona viene seguito, con un obiettivo di rispondere entro pochi minuti durante gli orari presidiati. I passaggi includono una sintesi automatica e le parole dell'utente. I responsabili della base di conoscenza correggono gli articoli obsoleti, e una revisione mensile a campione li alimenta. L'assistente è limitato a rispondere con contenuti approvati e deve dichiarare quando non sa. Un secondo pilota consente a un agente di reimpostare le password dopo la verifica dell'identità, con ogni azione registrata e reversibile entro un limite di tempo, e un tasso di annullamento monitorato. La dashboard sostituisce il contenimento con risoluzione verificata, tasso di contatti di ritorno, accuratezza, tempo di accesso a una persona e soddisfazione per gruppo.

Tre mesi dopo, la risoluzione verificata raggiunge il 66 percento per le intenzioni rientranti nell'ambito, il tasso di contatti di ritorno scende al 14 percento, il tempo mediano di accesso a una persona scende a 2 minuti, la quota di passaggi completi sale all'86 percento e l'accuratezza delle risposte campionate sale al 95 percento, senza casi sensibili gestiti male nel campione. Il tasso di annullamento delle azioni dell'agente nel pilota sulle password è dell'1,2 percento. L'ufficio del rettore chiede un obiettivo di contenimento dell'85 percento. Il responsabile dei servizi agli studenti spiega che un obiettivo di contenimento più alto premierebbe il nascondere la via verso una persona, e propone come misure la risoluzione verificata e i ritorni, con un riesame di che cosa estendere in seguito. La decisione viene registrata.

## Lente di settore

**Startup.** Un assistente può coprire il supporto a basso costo, e una sola risposta sbagliata può costare un cliente. Si mantenga stretto l'ambito, si ancorino le risposte alla propria documentazione, si renda ovvia l'opzione umana e si legga ogni escalation. Si faccia attenzione a lasciare che un agente agisca su account o pagamenti.

**Piccola impresa.** Un assistente pronto all'uso su un sito web può gestire le domande comuni. Lo si provi come un cliente, ci si assicuri che un numero di telefono o un indirizzo e-mail siano facili da trovare e si rivedano le conversazioni ogni settimana. Si verifichi che cosa il fornitore faccia dei dati.

**Grande impresa.** La scala offre risparmi e rischio. Si conduca un processo di governance per classi di rischio, approvazioni e audit, si misuri per intenzione e gruppo di utenti e ci si assicuri che una persona sia raggiungibile su ogni canale. Si coordinino supporto, sicurezza, ufficio legale e accessibilità.

**Pubblica amministrazione e settore pubblico.** I cittadini possono non avere un fornitore alternativo, e si applicano con forza gli obblighi di accessibilità, di accesso linguistico e di trattamento equo. Si mantenga una persona raggiungibile, si evitino decisioni automatizzate su diritti e prestazioni senza salvaguardie, si pubblichi come l'assistente è usato e si verifichino gli obblighi di informativa e di diritto amministrativo (si veda l'argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi sono licenze o addebiti d'uso, integrazione, preparazione dei contenuti, campionamento e revisione continui, manutenzione della base di conoscenza, collaudi e governance. Anche una buona via umana costa denaro, perché deve essere presidiata.

I potenziali ritorni sono attese più brevi per le questioni semplici, sollievo dai contatti ripetitivi e copertura fuori orario. Sul versante del rischio vi sono ritorni, fiducia perduta, danni da risposte o azioni errate ed esposizione legale. Si costruisca il caso a partire dai propri numeri: risoluzione verificata e ritorni, costo per contatto risolto inclusi i passaggi, tempo del personale speso a rimediare ai fallimenti del bot e soddisfazione per gruppo. Si eviti di usare come stima le affermazioni di contenimento o di deflessione di un fornitore. Si conti il costo della via umana e della governance (si veda l'argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Il contenimento come obiettivo.** Premia il tenere le persone lontane dall'aiuto. Si riportino risoluzione verificata e ritorni.
- **Via verso una persona nascosta o lenta.** È un dark pattern, e gli utenti se ne accorgono. La si renda breve e la si provi.
- **Passare la mano senza contesto.** Gli utenti si ripetono e la fiducia cala. Si trasmetta una sintesi.
- **Lasciare che il bot gestisca i casi sensibili.** Benessere, reclami e diritti richiedono persone. Si instradino direttamente.
- **Azioni autonome senza audit o approvazione.** Un solo errore può moltiplicarsi. Si classifichi, si limiti e si registri.
- **Misurare solo ciò che mostra la dashboard del fornitore.** Lusinga. Si uniscano i propri dati.
- **Ignorare i gruppi che il bot delude.** Le medie li nascondono. Si provi e si segmenti dove è sicuro.
- **Nessuna regola di arresto.** Un bot che fallisce resta in funzione. Si definiscano le evidenze che ne restringerebbero o ne spegnerebbero l'uso.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Risultati | Contenimento riportato | Soddisfazione rilevata con sondaggi | Risoluzione verificata e ritorni seguiti per intenzione | Segmentazione per gruppo di utenti; regole di arresto definite; accuratezza campionata ogni mese | Assistente, personale e conoscenza migliorati insieme sulla base di evidenze condivise |
| Via verso le persone | Difficile da trovare | Opzione disponibile | Percorso breve; tempo di accesso a una persona seguito; passaggi con contesto | Qualità dei passaggi valutata e migliorata; organico adeguato alla domanda | Bot e personale collaborano in modo fluido tra i canali, nel rispetto della scelta dell'utente |
| Agenti che agiscono | Automazione ad hoc | Azioni scriptate | Azioni classificate per rischio, privilegio minimo, approvazione e audit | Tasso di annullamento e danni riesaminati; modifiche controllate | Comportamento degli agenti governato in tutta l'organizzazione e presso i fornitori con assurance indipendente |

## Checklist

- [ ] Le intenzioni dell'assistente sono elencate, con quelle che devono sempre andare a una persona.
- [ ] Risoluzione verificata e tasso di contatti di ritorno sono riportati accanto al contenimento.
- [ ] Esiste in ogni schermata una via visibile e breve verso una persona, e il tempo di accesso a una persona è misurato.
- [ ] I passaggi includono una sintesi e le parole dell'utente e sono valutati dagli operatori riceventi.
- [ ] Le risposte sono campionate ogni mese da revisori qualificati e indipendenti.
- [ ] Agli utenti viene detto che stanno parlando con un'IA e che cosa può fare.
- [ ] Le prove di accessibilità e in altre lingue sono svolte con utenti reali.
- [ ] Le azioni dell'agente sono classificate per rischio, autorizzate con privilegio minimo e registrate in un log di audit.
- [ ] Tassi di annullamento e azioni dannose sono riesaminati senza attribuire colpe.
- [ ] Una regola di arresto definisce quando restringere o spegnere l'assistente.

## Prompt IA

**Definire intenzioni e regole di passaggio.**

```text
Gestiamo un service desk per [tipo di organizzazione]. I motivi di contatto più
comuni sono: [elenco con volumi]. Proponi quali intenzioni un chatbot dovrebbe
gestire interamente, quali dovrebbe solo aiutare a trattare per poi passare la mano
e quali devono sempre andare a una persona, con le motivazioni. Includi le
informazioni da trasmettere nel passaggio. Non inventare statistiche. Elenca le tue
ipotesi e i rischi per i casi sensibili.
```

**Verificare un'affermazione di contenimento.**

```text
La dashboard del nostro chatbot mostra un contenimento di [valore]. Disponiamo anche
di: contatti di ritorno entro sette giorni [valore], risultati di sondaggio [valori]
e un campione di conversazioni [descrizione]. Spiega che cosa potrebbe essere la
risoluzione verificata, come calcolarla dai nostri dati, che cosa suggerisce lo
scarto tra contenimento e risoluzione e che cosa controllare dopo. Non sostenere
cause che i dati non possono supportare. Elenca le tue ipotesi.
```

**Progettare una classificazione del rischio per le azioni dell'agente.**

```text
Un agente di IA potrebbe compiere queste azioni: [elenco]. Per ciascuna, proponi una
classe di rischio (informativa, reversibile a basso impatto, rilevante), il
permesso che dovrebbe richiedere, se una persona debba approvarla, che cosa
registrare, come annullarla e un test da eseguire prima di abilitarla. Non
presumere strumenti specifici. Elenca le tue ipotesi e le decisioni che richiedono
il contributo di sicurezza e ufficio legale.
```

**Pianificare una revisione delle conversazioni del bot.**

```text
Progetta una revisione mensile delle conversazioni del bot: dimensione e selezione
del campione (incluse alcune conversazioni abbandonate e alcune di gruppi di utenti
a rischio di servizio scadente), qualifiche dei revisori, una breve griglia per
correttezza, sicurezza e onestà sull'incertezza, come registrare gli errori e
correggerne le fonti e come rendicontare senza identificare gli utenti. Elenca le
tue ipotesi e le cautele sulla privacy.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di chatbot o di agente di IA.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica di chatbot misuri la risoluzione e riporti il proprio vettore di manipolazione e la propria salvaguardia.

## Punti chiave

- Si misurino la risoluzione verificata e i contatti di ritorno, e si tratti il contenimento solo come dato descrittivo.
- Si renda breve e visibile la via verso una persona e si passi la mano con il contesto.
- Si campionino le risposte per accuratezza e sicurezza e si mantenga aggiornata la conoscenza usata dall'assistente.
- Si sia onesti sul fatto che gli utenti stanno parlando con un'IA e si provi con gli utenti che più probabilmente verrebbero delusi.
- Per gli agenti che agiscono, si classifichi il rischio, si limitino i permessi, si richieda l'approvazione per le azioni rilevanti e si conservi una traccia di audit.
- Si definisca in anticipo una regola di arresto.

## Riferimenti e letture di approfondimento

1. Weizenbaum, J., "ELIZA: A computer program for the study of natural language communication between man and machine," *Communications of the ACM*, 9(1), 1966.
2. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
3. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
4. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Virtual assistant](https://en.wikipedia.org/wiki/Virtual_assistant).
9. Wikipedia, [Intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent).
10. Wikipedia, [Self-service](https://en.wikipedia.org/wiki/Self-service).
11. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
12. Wikipedia, [Automated decision-making](https://en.wikipedia.org/wiki/Automated_decision-making).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
