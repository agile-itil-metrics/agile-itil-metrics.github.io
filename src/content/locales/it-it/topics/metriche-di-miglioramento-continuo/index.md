# Metriche di miglioramento continuo

**Il miglioramento è un'abitudine fatta di osservare, provare e verificare: misurate se le idee diventano modifiche, se le modifiche vengono verificate nei loro effetti e se gli stessi problemi continuano a ripresentarsi, e lasciate il lavoro nelle mani di chi lo svolge.**

## Panoramica e motivazione

Uno dei principi del Manifesto Agile afferma che, a intervalli regolari, il team riflette su come diventare più efficace, quindi regola e adatta di conseguenza il proprio comportamento. ITIL esprime la stessa convinzione nei suoi principi guida e nella pratica di miglioramento continuo: i servizi e il modo in cui sono gestiti dovrebbero essere migliorati in ogni momento, a piccoli passi, sulla base di evidenze. Entrambi chiedono la stessa cosa, ossia un'abitudine stabile al miglioramento e non un programma occasionale.

La maggior parte delle organizzazioni crede di farlo. Molte hanno una riunione in stile retrospettiva che genera un elenco di azioni, un registro di idee di miglioramento o un piano annuale di miglioramento. Il fallimento più comune è che l'elenco cresce e accade poco. Le azioni vengono concordate in una riunione e dimenticate. I miglioramenti vengono realizzati e mai verificati, quindi nessuno sa se abbiano aiutato. Lo stesso problema ritorna sotto un altro nome. Le metriche di miglioramento continuo servono a distinguere un'organizzazione che sta migliorando da una che ne sta soltanto parlando.

Il [processo di miglioramento continuo](https://en.wikipedia.org/wiki/Continual_improvement_process) ha radici profonde nella gestione della qualità. Il ciclo [Plan-Do-Check-Act](https://en.wikipedia.org/wiki/PDCA) (pianificare, fare, verificare, agire), associato a W. Edwards Deming e Walter Shewhart, descrive il miglioramento come una serie di piccoli esperimenti ripetuti: pianificare una modifica, provarla, verificarne il risultato e agire su ciò che si impara. [Kaizen](https://en.wikipedia.org/wiki/Kaizen) è il termine giapponese per il miglioramento continuo delle pratiche di lavoro, con il coinvolgimento di tutti. Entrambi provengono dalla [produzione snella](https://en.wikipedia.org/wiki/Lean_manufacturing) (lean manufacturing) e dal Toyota Production System, ed entrambi sono ormai lessico standard nel lavoro sui servizi e sul software. ITIL 4 propone un modello di miglioramento continuo i cui passi chiedono qual è la visione, dove ci si trova ora, dove si vuole arrivare, come ci si arriverà, di agire, se si è arrivati e come mantenere lo slancio. È uno spunto per la conversazione, non una procedura da seguire meccanicamente.

Alcune idee aiutano.

- **Migliorate il vincolo.** La [teoria dei vincoli](https://en.wikipedia.org/wiki/Theory_of_constraints), sviluppata da Eliyahu Goldratt, afferma che il throughput di un sistema è limitato dalla sua parte più lenta, quindi i miglioramenti altrove aggiungono poco. Trovate il vincolo usando le misure di flusso illustrate in precedenza nel libro e migliorate prima quello (si veda l'Argomento 2.3 «Lavoro in corso e code»).
- **Cercate le cause, non i sintomi.** L'[analisi delle cause radice](https://en.wikipedia.org/wiki/Root_cause_analysis) cerca le cause sottostanti di un problema, in modo che rimuoverle ne impedisca il ritorno. L'uso eccessivo di metodi semplici può trarre in inganno quando i problemi hanno più cause, quindi esaminate i fattori concorrenti.
- **Mettete in discussione le assunzioni.** L'[apprendimento a doppio ciclo](https://en.wikipedia.org/wiki/Double-loop_learning), termine di Chris Argyris e Donald Schön, va oltre la correzione dell'azione ed esamina le convinzioni e le regole che l'hanno determinata. I team che correggono solo i sintomi (apprendimento a ciclo singolo) tendono a incontrare di nuovo gli stessi problemi.
- **Il miglioramento richiede capacità.** Un team al limite delle forze non ha spazio per migliorare. La capacità protetta è una precondizione, e un ritmo sostenibile è parte di ciò che rende possibile il miglioramento (si veda l'Argomento 9.2 «Metriche di soddisfazione e benessere»).

Le metriche di miglioramento invitano alla propria manipolazione. Se il numero di azioni completate è un obiettivo, i team concordano azioni banali. Se i risparmi derivanti dai miglioramenti sono un obiettivo, le dichiarazioni si gonfiano. Se il numero di idee presentate è un obiettivo, le idee affluiscono a valanga e nessuna viene attuata. La salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) si applica: misurate se i miglioramenti funzionano, non quanto sembri impegnato il programma di miglioramento (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Principi chiave

- **Il miglioramento appartiene alle persone che svolgono il lavoro.** Sono le prime a vedere i problemi e le possibili correzioni.
- **Lavorate a piccoli passi e verificate ciascuno.** I piccoli esperimenti riducono il rischio e accelerano l'apprendimento.
- **Misurate il seguito dato e l'effetto, non l'attività.** Le azioni completate e gli effetti confermati contano più delle idee generate.
- **Migliorate prima il vincolo.** Lo sforzo lontano dal collo di bottiglia aggiunge poco.
- **Correggete le cause.** Cercate i fattori concorrenti e mettete in discussione le assunzioni che li sostengono.
- **Proteggete la capacità di miglioramento.** Non avverrà in un tempo libero che non esiste.
- **Valorizzate l'apprendimento, anche dagli esperimenti falliti.** Un'idea provata che non ha funzionato è informazione.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasso di completamento delle azioni | Quota di azioni di miglioramento concordate nelle revisioni che sono state completate entro la data stabilita | azioni completate entro la data / azioni in scadenza nel periodo | percentuale | Registro dei miglioramenti o backlog del team | Miglioramento continuo | Azioni di riflessione realizzate | Mensile |
| Età del backlog dei miglioramenti | Età delle voci di miglioramento aperte, con attenzione alle più vecchie | mediana e 85º percentile dell'età in giorni delle voci aperte; età della più vecchia | giorni | Registro dei miglioramenti | Miglioramento continuo | Età del backlog | Mensile |
| Tasso di verifica degli effetti | Quota di miglioramenti completati il cui effetto è stato verificato rispetto a una base di riferimento | miglioramenti completati con una verifica prima-dopo registrata / miglioramenti completati | percentuale | Registro dei miglioramenti con campi per base di riferimento e risultato | Miglioramento continuo; misurazione e rendicontazione | Apprendimento dagli esperimenti | Trimestrale |
| Tempo dall'idea alla prova | Tempo che intercorre da quando viene proposta un'idea di miglioramento alla prima prova nel lavoro reale | mediana e 85º percentile dei giorni dalla proposta alla prima prova | giorni | Registro dei miglioramenti | Miglioramento continuo | Feedback rapido sulle modifiche | Mensile |
| Quota di idee dal campo | Quota di idee di miglioramento proposte da chi svolge il lavoro, conteggiata a livello di team | idee proposte dai membri del team che svolgono il lavoro / idee proposte | percentuale | Registro dei miglioramenti | Miglioramento continuo | Team autorganizzati | Trimestrale |
| Tasso di problemi ricorrenti | Quota di problemi che si ripresentano dopo un miglioramento inteso a rimuoverne la causa | problemi che si ripresentano entro un periodo stabilito dopo la chiusura di un miglioramento correlato / miglioramenti chiusi con una causa correlata | percentuale | Registrazioni di incidenti, problemi e miglioramenti collegate per causa | Gestione dei problemi; miglioramento continuo | Difetto sfuggito dopo una correzione | Trimestrale |
| Quota di capacità di miglioramento | Quota della capacità del team spesa in lavoro di miglioramento | capacità o elementi completati etichettati come miglioramento / capacità totale o elementi completati | percentuale | Tipi di lavoro nel tracker | Miglioramento continuo; gestione della capacità e delle prestazioni | Tempo per la riflessione e l'eccellenza tecnica | Mensile |

Definite nel registro che cosa sia una «voce di miglioramento» e tenetela distinta dal normale lavoro di backlog e dalle riparazioni correttive. Il cronometro del completamento parte quando l'azione viene concordata con un responsabile e una data. Una verifica degli effetti richiede una base di riferimento registrata prima della modifica e un indicatore definito, e il risultato può essere «nessun effetto» o «impossibile dirlo». Il tasso di problemi ricorrenti dipende da una causa registrata, e la regola di corrispondenza è scritta nel registro. Tutte le misure descrivono i team e il sistema, non i singoli.

## Raccomandazioni

### Rendete il miglioramento visibile e con un responsabile

**1. Tenete un solo elenco visibile dei miglioramenti per team.** Mettete le voci di miglioramento dove il team già guarda, come la sua bacheca o il suo backlog, ed etichettatele. Ogni voce ha un responsabile, un problema indicato, un effetto atteso, un indicatore e una data. Un elenco che vive in uno strumento separato o in un documento che nessuno apre si deteriorerà. Mostrate le voci più vecchie, così l'elenco non può nascondersi.

**2. Tenete una riflessione regolare e breve.** Con una cadenza costante il team si chiede che cosa va bene, che cosa sta d'intralcio e che cosa provare dopo. Mantenetela breve e specifica e concludete con un piccolo numero di azioni che hanno un responsabile. Se il vostro team sceglie di usare un formato con un nome per questo, come una retrospettiva, è una scelta del team. Il principio è l'abitudine regolare.

**3. Concordate meno azioni e portatele a termine.** Due o tre azioni completate insegnano più di una dozzina che non lo sono. Verificate il tasso di completamento. Quando le azioni slittano ripetutamente, chiedetevi perché: titolarità poco chiara, nessuna capacità o azioni troppo grandi. Suddividete le grandi in piccoli passi.

**4. Proteggete la capacità.** Riservate una quota di capacità al miglioramento e pianificatela come qualsiasi altro lavoro (si veda l'Argomento 2.5 «Metriche di previsione e pianificazione della consegna»). Quando il team è sovraccarico, riducete l'afflusso di nuovo lavoro invece di annullare il miglioramento, dato che il miglioramento è spesso ciò che riduce il sovraccarico. Monitorate la quota usata.

### Trovate ciò che conta

**5. Cercate il vincolo.** Usate i dati di flusso per trovare dove il lavoro attende e che cosa limita il throughput. I miglioramenti al vincolo aumentano la produzione dell'intero sistema. I miglioramenti altrove possono solo spostare la pila di lavoro. Applicate la stessa visione alla gestione degli incidenti, all'approvazione delle modifiche e all'evasione delle richieste.

**6. Usate le evidenze per scegliere.** Scegliete i miglioramenti dai dati e dalle persone più vicine al problema: incidenti ripetuti, lunghe attese, rilavorazioni, lamentele degli utenti, elenchi di ostacoli. Collegate ogni miglioramento a un problema registrato. Questo lega il registro dei miglioramenti alla gestione dei problemi (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»).

**7. Cercate cause e fattori concorrenti.** Per i problemi ricorrenti, chiedete più di una volta perché e cercate condizioni oltre che inneschi. Diffidate dal fermarvi alla prima causa plausibile o a una persona. Mettete in discussione le assunzioni: perché lavoriamo così e la regola è ancora necessaria? È qui che l'apprendimento a doppio ciclo rende.

### Provate in piccolo, poi verificate

**8. Conducete piccoli esperimenti con una base di riferimento.** Indicate la modifica, l'effetto atteso e l'indicatore. Registrate la base di riferimento prima della modifica. Provatela su piccola scala per un breve periodo, poi confrontate. Il ciclo Plan-Do-Check-Act è uno schema semplice. Più breve è il tempo dall'idea alla prova, più rapido è l'apprendimento.

**9. Verificate l'effetto e registratelo con onestà.** Dopo una modifica, confrontate l'indicatore con la base di riferimento e con ciò che è cambiato d'altro. Registrate se l'effetto è stato visto, non visto o poco chiaro. I team che non trovano mai «nessun effetto» probabilmente non verificano con attenzione (si veda l'Argomento 6.5 «Realizzazione del valore e risultati di business»).

**10. Conservate ciò che funziona e abbandonate ciò che non funziona.** Diffondete agli altri team i miglioramenti che funzionano dove sono adatti e ritirate le modifiche che hanno aggiunto costo senza beneficio. Riesaminate le modifiche più vecchie, poiché le condizioni cambiano. Gli standard dovrebbero evolvere man mano che il team impara.

### Mantenete viva l'abitudine

**11. Rendete sicuro suggerire e fermarsi.** Le persone propongono idee quando quelle precedenti sono state ascoltate e attuate. Restano in silenzio quando le idee svaniscono o comportano lavoro extra per chi le propone. Rispondete a ogni idea, anche se la risposta è «non ora», con una motivazione. Consentite ai team di interrompere i miglioramenti che non funzionano.

**12. Non trasformate il miglioramento in un obiettivo.** Non fissate obiettivi per il numero di idee, per il numero di azioni chiuse o per i risparmi dichiarati. Riferite il seguito dato, le verifiche degli effetti, il tasso di ricorrenza e alcune storie. Confrontate ogni team con il proprio passato e condividete le buone idee tra i team senza classificarle.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tasso di completamento delle azioni | Concordare azioni banali; spostare le scadenze; chiudere senza fare | Riesaminare dimensione e valore delle azioni; registrare le modifiche di data; tasso di verifica degli effetti |
| Età del backlog dei miglioramenti | Chiudere le voci vecchie come «non si farà» senza una decisione; suddividere le voci per azzerare l'età | Registrare i motivi della chiusura; monitorare le voci chiuse senza azione; riesaminare le più vecchie |
| Tasso di verifica degli effetti | Registrare una verifica senza base di riferimento; verificare solo i successi | Base di riferimento datata prima della modifica; includere risultati nulli e negativi |
| Tempo dall'idea alla prova | Chiamare prova un piano; provare variazioni banali | Definire una prova come una modifica nel lavoro reale; valutare l'importanza delle idee provate |
| Quota di idee dal campo | Responsabili che inseriscono idee a nome del personale; quote obbligatorie di idee | Idee per autore registrate a livello di team; nessuna quota; chiedere al team |
| Tasso di problemi ricorrenti | Registrare cause diverse per lo stesso problema; chiudere la registrazione precedente sotto un altro tipo | Corrispondenza per causa con una regola registrata; revisione da parte di qualcuno esterno al team |
| Quota di capacità di miglioramento | Etichettare il lavoro ordinario come miglioramento; pianificare tempo che viene poi usato per la consegna | Campionare le voci per tipo; confrontare con il tempo effettivamente speso |

Una lettura sana mostra un elenco breve con azioni che si concludono, idee che arrivano alla prova in giorni o settimane, effetti che vengono verificati e a volte deludono, problemi ricorrenti in calo e capacità protetta che viene usata.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Grandi programmi di miglioramento | Visibili; possono affrontare grandi questioni | Lenti; scollegati dal lavoro quotidiano |
| Piccoli esperimenti continui | Apprendimento rapido, basso rischio | Possono perdere i problemi strutturali |
| Team centrale di miglioramento | Competenza e coerenza | Lontano dal lavoro; le idee si arenano |
| Miglioramento di proprietà del team | Pertinente e motivato | Qualità variabile; richiede sostegno |
| Schemi di idee con premi | Generano volume | Quote e manipolazione; bassa qualità |
| Selezione basata sulle evidenze | Si concentra sui problemi reali | Richiede dati e tempo |
| Verifiche formali degli effetti | Apprendimento onesto | Sforzo; può sembrare burocratico se pesante |
| Nessuna verifica | Rapido | Nessun apprendimento su ciò che funziona |

La risposta pratica è mantenere il miglioramento vicino ai team, in piccoli esperimenti con leggere verifiche degli effetti, sostenuti da poche persone che aiutano con dati e metodo e da dirigenti che proteggono la capacità e ascoltano i risultati.

## Domande da discutere con il team

**1. Quale miglioramento abbiamo concordato nella nostra ultima revisione e si è realizzato?**
Guardate le azioni. Per ciascuna, chiedetevi se sia stata completata, abbandonata o dimenticata, e perché. Il facilitatore dovrebbe annotare i motivi. Concordate quante azioni il team può davvero portare a termine e riducete a quel numero l'elenco successivo.

**2. Quale modifica fatta di recente sappiamo che ha aiutato e come lo sappiamo?**
Scegliete una modifica recente e cercate la base di riferimento e il risultato. Se non ci sono, discutete come verificare la prossima volta. Decidete un indicatore semplice per il prossimo esperimento.

**3. Che cosa ritorna sempre, per quante volte lo correggiamo?**
Elencate i problemi ricorrenti. Per uno, chiedetevi perché ritorna e quale assunzione sta dietro l'approccio attuale. Valutate se la correzione tratti un sintomo. Scegliete un problema ricorrente da approfondire.

**4. Dove il lavoro attende più a lungo e qual è il vincolo?**
Usate i dati di flusso. Chiedetevi se i miglioramenti su cui il team sta lavorando toccano il vincolo. Se no, discutete se cambiare focus.

**5. Quanta parte della nostra settimana va al miglioramento e che cosa la protegge?**
Confrontate il piano con la realtà. Discutete che cosa ruba il tempo. Concordate una regola per proteggere una piccola quota e che cosa tagliare se il team è sovraccarico.

**6. Che cosa è successo all'ultima idea che qualcuno ha suggerito e come ne è venuto a conoscenza?**
Ripercorrete un'idea. Ha ricevuto risposta, è stata provata o si è persa? Discutete come assicurarsi che ogni idea riceva una risposta e una motivazione.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna sono la fonte principale delle idee di miglioramento e i migliori giudici di quando funzionano. Dovrebbero tenere un elenco visibile, concludere alcune azioni a ogni ciclo, verificare gli effetti e condividere ciò che imparano. Hanno bisogno di capacità protetta e di dirigenti che rispondano.

### Team di servizio e operations

I team operativi vedono ogni giorno incidenti ripetuti, approvazioni lente e toil manuale. Dovrebbero collegare i miglioramenti ai problemi registrati, monitorare i problemi ricorrenti e ritagliare tempo per le correzioni che riducono il proprio carico. Il loro feedback mostra se i miglioramenti arrivano all'utente.

### Leadership e governance

I dirigenti creano le condizioni: capacità protetta, sicurezza nel suggerire e nel fermarsi, attenzione ai risultati. Dovrebbero chiedere il seguito dato e le verifiche degli effetti, accettare con onestà i risultati di «nessun effetto», evitare le quote e finanziare i miglioramenti che richiedono investimenti. La governance dovrebbe esaminare il registro dei miglioramenti di tutti i team alla ricerca di schemi che richiedano un'azione strutturale.

### Clienti e utenti

Gli utenti traggono beneficio da servizi che continuano a migliorare e sono una ricca fonte di idee. Andrebbe chiesto loro, andrebbe detto che cosa è cambiato e andrebbero invitati a verificarne l'effetto. Le lamentele ripetute sullo stesso problema sono un segnale che il miglioramento non raggiunge la causa.

## In pratica: un esempio di ITIL agile

Il gruppo di servizi digitali di un'agenzia fiscale nazionale gestisce un portale per le dichiarazioni, un sistema di pagamenti e una piattaforma di contact center con otto team. Ogni team tiene un elenco di miglioramenti, e il gruppo riferisce ogni trimestre il numero di miglioramenti completati. I numeri che seguono sono illustrativi.

La responsabile del miglioramento dei servizi nota che il numero riferito sale mentre gli stessi punti dolenti persistono. Esamina gli elenchi. Nell'insieme del gruppo, 212 voci di miglioramento sono aperte, con un'età mediana di 7 mesi e la più vecchia di 26 mesi. Delle azioni concordate nelle revisioni del trimestre scorso, il 38 per cento è stato completato entro la data. Dei 64 miglioramenti completati l'anno scorso, solo 9 avevano una base di riferimento e un risultato registrati, un tasso di verifica degli effetti del 14 per cento, e 3 di quei 9 non mostravano alcun effetto. I problemi ricorrenti sono frequenti: su 25 incidenti collegati a miglioramenti intesi a rimuoverne la causa, 11 si sono ripresentati entro sei mesi, un tasso di ricorrenza del 44 per cento. Il lavoro di miglioramento assorbe circa il 4 per cento della capacità.

Il gruppo concorda quattro modifiche con i team. Ogni team riduce il proprio elenco alle voci che può affrontare nei due mesi successivi e indica perché mette da parte o chiude le altre. I team concordano non più di tre azioni alla volta, con responsabili nominati. Per ogni miglioramento, una base di riferimento e un indicatore vengono registrati prima della modifica e il risultato viene registrato dopo, incluso «nessun effetto». Una revisione trimestrale esamina i problemi ricorrenti tra i team e ne sceglie due per un'analisi più approfondita delle cause, con i team del contact center e dei pagamenti che indagano insieme una causa comune. Ogni team riserva il 10 per cento della capacità al miglioramento, protetto da una regola per cui l'annullamento richiede l'accordo del responsabile del team e una voce di registro. Il rapporto ai dirigenti passa dal numero di miglioramenti completati a seguito dato, verifiche degli effetti e problemi ricorrenti.

Dopo due trimestri, le voci aperte scendono a 74 con un'età mediana di 2 mesi. Il seguito dato sale all'81 per cento, il tasso di verifica degli effetti al 70 per cento, con 9 dei 36 miglioramenti verificati che non mostrano alcun effetto e vengono abbandonati. Il tasso di problemi ricorrenti scende al 20 per cento, e il tempo dall'idea alla prova ha una mediana di 9 giorni. Il vicedirettore chiede un obiettivo di 100 miglioramenti completati per trimestre. La responsabile del miglioramento dei servizi spiega che il conteggio era il motivo per cui i numeri precedenti erano fuorvianti, e propone di monitorare seguito dato, effetto e tasso di ricorrenza. La decisione viene registrata, e la richiesta di un team di condurre un esperimento di quattro settimane sul proprio processo di approvazione viene accolta.

## Lente di settore

**Startup.** Il miglioramento avviene di continuo e in modo informale. Tenete un elenco breve, scrivete gli effetti attesi e verificateli, e proteggete una piccola fetta di tempo. Evitate processi pesanti e fate attenzione a che il miglioramento non sia del tutto soppiantato dalla crescita.

**Piccola impresa.** Una o due persone fanno tutto, e il miglioramento compete con l'emergenza. Scegliete un problema ricorrente a trimestre, correggetene la causa e verificate l'effetto. Chiedete agli utenti che cosa li infastidisce e agite su una cosa.

**Grande impresa.** La scala rende il miglioramento disomogeneo e le idee difficili da condividere. Fornite un formato comune di registro e un coaching leggero, lasciate che i team possiedano i propri elenchi e usate un forum interteam per diffondere ciò che funziona e affrontare vincoli comuni. Evitate quote centrali.

**Pubblica amministrazione e settore pubblico.** Il miglioramento può essere vincolato da acquisti, legislazione e catene di approvazione, ed è sottoposto a controllo pubblico. Documentate gli esperimenti e i loro risultati, coinvolgete gli utenti nella scelta e nella verifica dei miglioramenti e riferite con onestà sugli effetti, compresi quelli che non hanno funzionato. Cercate miglioramenti che tolgano oneri ai cittadini (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi sono la capacità protetta, che è il costo principale, lo sforzo per registrare basi di riferimento e risultati e un po' di coaching o facilitazione. Gli strumenti possono essere semplici come la bacheca già in uso al team.

I ritorni sono meno problemi ripetuti, minor toil, attese più brevi e un morale migliore nei team che vedono le proprie idee trasformarsi in cambiamento. Costruite il caso dai vostri dati: il costo degli incidenti ricorrenti e la quota eliminata dai miglioramenti, il tempo risparmiato dai miglioramenti con effetti verificati e il costo dei miglioramenti realizzati che non hanno funzionato, che la verifica ora evita di ripetere. Evitate di citare ritorni pubblicati sui programmi di miglioramento a meno che possiate ricostruirne fonte e metodo. Contate anche il costo opportunità della capacità (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Contare i miglioramenti completati.** I team concordano modifiche banali. Misurate seguito dato ed effetto.
- **Quote di idee.** Generano volume e rumore. Rispondete alle idee che arrivano.
- **Nessuna base di riferimento.** Nessuno sa se qualcosa abbia aiutato. Registrate il prima e il dopo.
- **Registrare solo i successi.** Si perde l'apprendimento dal fallimento. Registrate i risultati nulli.
- **Elenchi lunghi senza potatura.** L'elenco perde credibilità. Riducetelo a ciò che il team farà.
- **Miglioramento nel tempo libero.** Non ce n'è. Proteggete la capacità.
- **Correggere i sintomi.** Il problema ritorna. Chiedete perché più di una volta e mettete in discussione le assunzioni.
- **Miglioramento affidato a un team lontano.** Le idee si arenano. Tenetelo presso chi svolge il lavoro.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Abitudine e titolarità | Il miglioramento è occasionale | La riflessione avviene; le azioni spesso si perdono | Elenco visibile del team con responsabili; un piccolo numero di azioni concluse | Seguito dato e tempo dall'idea alla prova gestiti; capacità protetta | Il miglioramento è routine e condiviso tra team, fornitori e utenti |
| Evidenze ed effetto | Opinioni | Alcune misure dopo le modifiche | Base di riferimento e risultato registrati per ogni miglioramento | Le verifiche degli effetti includono risultati nulli; problemi ricorrenti monitorati per causa | L'apprendimento a livello di portafoglio guida dove migliorare dopo, con i partner |
| Profondità | Correzioni dei sintomi | Qualche analisi delle cause | Analisi delle cause per i problemi ricorrenti | Vincoli individuati dai dati di flusso; assunzioni messe in discussione | Miglioramenti sistemici lungo il flusso di valore, con governance condivisa |

## Checklist

- [ ] Ogni team ha un elenco visibile dei miglioramenti con responsabili, effetti attesi e date.
- [ ] Una riflessione regolare e breve si conclude con un piccolo numero di azioni con un responsabile.
- [ ] Il seguito dato alle azioni e l'età delle voci più vecchie sono riesaminati mensilmente.
- [ ] La capacità di miglioramento è pianificata, protetta e monitorata.
- [ ] I miglioramenti sono collegati a problemi registrati o a evidenze.
- [ ] Una base di riferimento e un indicatore sono registrati prima di ogni modifica.
- [ ] Gli effetti sono verificati e registrati, compreso il nessun effetto.
- [ ] I problemi ricorrenti sono monitorati per causa dopo i miglioramenti.
- [ ] Ogni idea riceve una risposta con una motivazione.
- [ ] Non ci sono quote né obiettivi per idee, azioni o risparmi.

## Prompt IA

**Scegliere i miglioramenti dalle evidenze.**

```text
Ecco i nostri problemi ricorrenti e gli ostacoli con conteggi approssimativi e
impatto: [incolla]. Ecco i nostri dati di flusso su dove il lavoro attende:
[incolla]. Suggerisci quali due o tre miglioramenti hanno maggiori probabilità
di contare, perché e quali evidenze confermerebbero o smentirebbero questa
ipotesi. Raccomanda un piccolo esperimento per ciascuno, con una base di
riferimento e un indicatore. Non inventare cifre. Elenca le tue ipotesi.
```

**Progettare un piccolo esperimento.**

```text
Vogliamo provare [modifica] per affrontare [problema] in [team e processo].
Progetta un piccolo esperimento: l'effetto atteso, la base di riferimento da
registrare ora, l'indicatore e come misurarlo, il periodo di prova, come capire
se altre modifiche hanno confuso il risultato e che cosa faremo se non c'è
alcun effetto. Mantienilo leggero. Elenca le tue ipotesi e i rischi.
```

**Riesaminare un elenco di miglioramenti.**

```text
Ecco il nostro elenco di miglioramenti con età, responsabile ed effetto atteso
per ciascuna voce: [incolla]. Individua le voci troppo vaghe, troppo grandi o
obsolete, suggerisci un elenco più breve che il team potrebbe concludere in due
mesi e proponi una nota per spiegare le voci che mettiamo da parte e perché.
Non giudicare i singoli. Elenca le tue ipotesi.
```

**Analizzare un problema ricorrente.**

```text
Problema: [descrivi]. Correzioni passate e quando si è ripresentato: [incolla].
Suggerisci fattori concorrenti oltre la prima causa plausibile, assunzioni da
mettere in discussione (apprendimento a doppio ciclo) e alcuni modi per
verificare a basso costo ciascuna ipotesi. Non presumere una singola causa
radice. Elenca le tue ipotesi e le domande per il team.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di miglioramento.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica di miglioramento misuri il seguito dato e l'effetto, con il proprio vettore di manipolazione e la salvaguardia.

## Punti chiave

- Tenete un solo elenco visibile dei miglioramenti per team, con poche azioni alla volta e con un responsabile, e portatele a termine.
- Registrate una base di riferimento prima di ogni modifica, verificate l'effetto dopo e registrate i risultati nulli.
- Monitorate seguito dato, verifiche degli effetti, problemi ricorrenti ed età delle voci più vecchie.
- Migliorate prima il vincolo e cercate le cause e le assunzioni che le sostengono.
- Proteggete la capacità di miglioramento all'interno di un ritmo sostenibile.
- Non fissate quote per idee, azioni o risparmi.

## Riferimenti e letture di approfondimento

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Continual Improvement*, TSO, 2020.
2. Deming, W. E., *Out of the Crisis*, MIT Center for Advanced Engineering Study, 1982 (MIT Press edition, 2000).
3. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
4. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
5. Argyris, C., "Teaching smart people how to learn," *Harvard Business Review*, 69(3), 1991.
6. Rother, M., *Toyota Kata: Managing People for Improvement, Adaptiveness, and Superior Results*, McGraw-Hill, 2009.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
9. Wikipedia, [PDCA](https://en.wikipedia.org/wiki/PDCA).
10. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
11. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
12. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Double-loop learning](https://en.wikipedia.org/wiki/Double-loop_learning).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
