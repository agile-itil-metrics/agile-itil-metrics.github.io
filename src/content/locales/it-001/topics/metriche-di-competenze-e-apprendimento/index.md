# Metriche di competenze e apprendimento

**Un team che continua a imparare mantiene sani i propri servizi: proteggete il tempo per l'apprendimento all'interno di un ritmo sostenibile, misurate se le competenze sono diffuse e utilizzate e trattate certificati e conteggi di corsi come indizi, mai come prova di competenza.**

## Panoramica e motivazione

I servizi sopravvivono alle persone che li hanno costruiti, e la tecnologia sottostante cambia di continuo. La capacità di un team di tenere il passo dipende da ciò che sa e dalla rapidità con cui impara. I principi del Manifesto Agile includono un'attenzione continua all'eccellenza tecnica e una riflessione regolare su come diventare più efficaci. Le pratiche ITIL di miglioramento continuo e di gestione della conoscenza descrivono la stessa esigenza dal lato organizzativo. Le misure di competenze e apprendimento chiedono se esista la capacità di gestire e modificare i servizi, se sia diffusa abbastanza da sopravvivere alle assenze e se l'organizzazione dia alle persone il tempo e il sostegno per crescere.

L'apprendimento è facile da contare e difficile da misurare bene. Ore di formazione, corsi completati e certificati sono visibili, e nessuno di essi mostra se qualcuno sappia fare qualcosa di nuovo sul lavoro. Una [certificazione professionale](https://en.wikipedia.org/wiki/Professional_certification) mostra che una persona ha soddisfatto uno standard di valutazione in un dato momento. È una prova utile, in particolare per i ruoli regolamentati e per i punti di ingresso come i fondamenti di ITIL o dell'agilità, e non è una misura dell'abilità o del giudizio attuali della persona. Questo argomento si appoggia quindi su misure di capacità in uso: chi sa gestire e modificare che cosa, con quale rapidità le persone nuove diventano utili e se l'apprendimento si vede nel lavoro.

Diverse idee plasmano l'approccio.

- **Molta conoscenza di valore è [tacita](https://en.wikipedia.org/wiki/Tacit_knowledge).** Michael Polanyi osservò che sappiamo più di quanto possiamo dire. Gestire un servizio complesso comporta un giudizio difficile da mettere per iscritto, che si diffonde soprattutto lavorando a fianco degli altri. La documentazione aiuta, ma non può sostituire pratiche condivise come il [pair programming](https://en.wikipedia.org/wiki/Pair_programming), l'affiancamento (shadowing) e la revisione.
- **Contano sia l'ampiezza sia la profondità.** Le [competenze a forma di T](https://en.wikipedia.org/wiki/T-shaped_skills) descrivono una persona con profondità in un ambito e ampiezza operativa in altri. I team di persone a forma di T possono coprire le assenze e collaborare oltre i confini. La [formazione incrociata](https://en.wikipedia.org/wiki/Cross-training_(business)) costruisce deliberatamente questa ampiezza.
- **L'apprendimento è sociale.** Una [comunità di pratica](https://en.wikipedia.org/wiki/Community_of_practice) è un gruppo di persone che condividono un mestiere e imparano le une dalle altre. Il [mentoring](https://en.wikipedia.org/wiki/Mentorship) affianca persone meno esperte a persone più esperte. Entrambi diffondono la conoscenza oltre i confini dei team.
- **Le organizzazioni possono imparare.** Un'[organizzazione che apprende](https://en.wikipedia.org/wiki/Learning_organization), termine reso popolare da Peter Senge, si trasforma continuamente attraverso l'apprendimento delle sue persone. Pratiche come le revisioni senza colpevolizzazione degli incidenti sono il modo in cui le organizzazioni imparano dall'esperienza (si veda l'Argomento 4.2 «Metriche di postmortem e apprendimento»).

Le misure di apprendimento hanno distorsioni proprie. I budget di formazione vengono spesi in corsi che nessuno applica. Il tempo per imparare viene promesso e poi consumato dagli incidenti. Le persone vengono classificate in base agli inventari delle competenze, il che le porta a nascondere ciò che non sanno. La salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) si applica: quando le ore di apprendimento sono un obiettivo, le persone frequentano sessioni, e quando i certificati sono un obiettivo, le persone li collezionano (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

Anche un ritmo sostenibile conta qui. L'apprendimento compresso nelle sere e nei fine settimana è un costo per le persone e non è segno di un'organizzazione sana. Le misure che seguono guardano al tempo protetto all'interno della settimana lavorativa.

## Principi chiave

- **Misurate la capacità in uso, non la frequenza ai corsi.** Guardate a ciò che le persone sanno fare e fanno.
- **Proteggete il tempo di apprendimento all'interno di un ritmo sostenibile.** Non fate dell'apprendimento un extra non retribuito.
- **Diffondete la conoscenza di proposito.** I punti singoli di conoscenza sono un rischio per il servizio e un peso per la persona.
- **Trattate i certificati come indizi, non come prova.** Contano per alcuni ruoli e dicono poco sulle competenze attuali.
- **Imparate dal lavoro.** Incidenti, revisioni e pairing insegnano più della maggior parte dei corsi.
- **Mantenete i dati sulle competenze a livello di team.** I singoli non dovrebbero essere classificati in base a un inventario.
- **Lasciate che le persone plasmino il proprio apprendimento.** Le persone motivate scelgono bene quando hanno tempo e sostegno.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Quota di tempo protetto per l'apprendimento | Quota della capacità del team accantonata e realmente usata per imparare | ore o quota di capacità usate per l'apprendimento in orario di lavoro / capacità lavorativa totale, a livello di team | percentuale | Piano di capacità del team e tipo di lavoro nel tracker | Gestione della forza lavoro e dei talenti; miglioramento continuo | Tempo per la riflessione e l'eccellenza tecnica | Mensile |
| Profondità della formazione incrociata | Quota di attività critiche svolte da almeno due persone nell'ultimo periodo | attività critiche svolte da due o più persone nel periodo / attività critiche | percentuale | Mappa di attività e responsabilità del team, convalidata dal lavoro recente | Gestione della conoscenza; gestione della continuità del servizio | Titolarità collettiva del lavoro | Trimestrale |
| Tempo al primo contributo | Tempo che un nuovo membro del team impiega a completare la prima modifica reale o il primo caso risolto | mediana e 85º percentile dei giorni dalla data di inizio al primo elemento di lavoro reale completato in produzione | giorni | Tracker di inserimento e tracker del lavoro | Gestione della forza lavoro e dei talenti; gestione della conoscenza | Tempo perché un nuovo membro del team apporti una prima modifica | Per assunzione, riesaminato trimestralmente |
| Partecipazione alle comunità | Quota di membri del team che partecipano a una comunità di pratica nel periodo, per loro scelta | membri che hanno partecipato, contribuito o presentato nel periodo / membri del team, a livello di team | percentuale | Registrazioni della comunità, volontarie | Gestione della conoscenza; miglioramento continuo | Comunità di pratica | Trimestrale |
| Tasso di applicazione della formazione | Quota di esperienze formative in cui chi ha imparato o il suo team riferisce di aver usato quanto appreso nel lavoro entro 90 giorni | esperienze di apprendimento riferite come applicate / esperienze di apprendimento completate | percentuale | Breve domanda di follow-up a chi ha imparato, anonimizzata a livello di team | Gestione della forza lavoro e dei talenti; miglioramento continuo | Apprendimento applicato al lavoro | Trimestrale |
| Copertura delle certificazioni pertinenti | Quota di ruoli che richiedono una certificazione per ragioni legali, contrattuali o di ingresso in cui il requisito è soddisfatto | ruoli con la certificazione richiesta posseduta / ruoli che richiedono la certificazione | percentuale | Registro dei requisiti dei ruoli, registrazioni dei certificati | Gestione della forza lavoro e dei talenti; governance | Rispetto dei requisiti di ingresso contrattuali o normativi | Annuale |
| Lezioni condivise tra i team | Numero di lezioni tratte da incidenti o miglioramenti che sono state condivise fuori dal team di origine e usate da un altro team | lezioni condivise con un uso registrato da parte di un altro team nel periodo | conteggio | Registro delle lezioni e note di revisione | Gestione della conoscenza; miglioramento continuo | Apprendimento condiviso tra i team | Trimestrale |

Definite nel registro le attività critiche, i ruoli e i tipi di apprendimento. Il tempo protetto per l'apprendimento conta solo il tempo usato per imparare, non quello offerto e perso a favore di lavoro urgente, ed esclude l'apprendimento fuori orario. La profondità della formazione incrociata conta le persone che hanno effettivamente svolto l'attività nel periodo, non quelle che in teoria potrebbero. Il tasso di applicazione della formazione usa autodichiarazioni ed è aggregato per team, con una dimensione minima del gruppo. La copertura delle certificazioni riguarda solo i ruoli con un requisito reale e non è mai usata per valutare la competenza di una persona.

## Raccomandazioni

### Proteggete il tempo e rendetelo reale

**1. Pianificate il tempo di apprendimento nella capacità.** Accantonate una quota della capacità di ogni team per l'apprendimento, ad esempio un blocco regolare ogni settimana, e scrivetela nel piano di capacità. Un piano che presuppone che tutti lavorino alla piena utilizzazione sulla consegna non lascia spazio per imparare. Monitorate la quota effettivamente usata ed esaminate perché risulti inferiore: incidenti, scadenze o cultura. Questo si collega agli argomenti su pianificazione e carico di lavoro (si veda l'Argomento 2.5 «Metriche di previsione e pianificazione della consegna»).

**2. Lasciate che le persone scelgano, con una guida.** Le persone motivate sanno che cosa devono imparare. Offrite un budget e tempo, un menu di opzioni e conversazioni sulle esigenze del team. Chiedete alle persone di condividere con il team ciò che imparano, il che moltiplica il valore. Evitate l'apprendimento obbligatorio irrilevante per il lavoro.

**3. Fate dell'apprendimento parte del lavoro.** Pairing, rotazione, affiancamento, revisione del codice, interventi interni e revisioni degli incidenti senza colpevolizzazione insegnano nel contesto di problemi reali. Contateli come apprendimento nel piano di capacità. Un team che impara mentre consegna ha bisogno di meno tempo lontano dalla consegna.

### Diffondete la conoscenza

**4. Mappate le attività critiche e chi le ha svolte.** Elencate le attività che devono essere eseguite in modo affidabile: ripristinare un database, ruotare una chiave, gestire un incidente maggiore, distribuire una modifica rischiosa. Per ciascuna, registrate chi l'ha svolta di recente. La mappa mostra i punti singoli di conoscenza. Convalidatela con prove di lavoro recente, perché un inventario di competenze basato sull'autovalutazione si discosta dalla realtà (si veda l'Argomento 9.3 «Metriche di collaborazione e passaggi di consegne»).

**5. Fate formazione incrociata in modo deliberato.** Pianificate pairing e rotazione in modo che ogni attività critica abbia almeno due persone che l'hanno svolta di recente. Esercitatevi con prove pratiche e game day dove possibile. L'obiettivo è la resilienza e una reperibilità sostenibile, e solleva gli esperti dall'essere gli unici in grado di aiutare.

**6. Sostenete le comunità di pratica e il mentoring.** Incoraggiate gruppi volontari attorno a mestieri come affidabilità, test, sicurezza o gestione dei servizi, e dedicate loro del tempo. Offrite mentoring tra i team. Misurate la partecipazione in modo leggero, a livello di team, e chiedete che cosa le comunità hanno prodotto: pratiche condivise, strumenti, lezioni.

### Inserite bene

**7. Misurate il tempo al primo contributo.** Monitorate quanto impiegano i nuovi membri a completare un lavoro reale in produzione e che cosa li rallenta: accessi, documentazione, configurazione dell'ambiente o titolarità poco chiara. Correggete le cause e chiedete il punto di vista di chi è arrivato da poco. Un inizio rapido e di sostegno dà il tono e riduce il rischio (si veda l'Argomento 6.4 «Esperienza degli utenti e dei dipendenti»).

**8. Date presto alle persone nuove lavoro reale con sostegno.** Iniziate con piccole attività reali e un collega di riferimento indicato per nome. Riesaminate regolarmente i progressi e adattate. Imparare facendo, con reti di sicurezza, è più rapido di un lungo periodo di lettura.

### Valutate onestamente l'apprendimento

**9. Chiedete se la formazione è stata applicata.** Dopo un corso o un evento, chiedete a chi lo ha seguito e al suo team, qualche settimana dopo, se e come lo hanno usato. Aggregate le risposte. I corsi che nessuno applica dovrebbero essere cambiati o abbandonati. Il modello di Kirkpatrick dei quattro livelli di valutazione della formazione, dalla reazione all'apprendimento, al comportamento, ai risultati, offre un lessico per questo, anche se semplici domande di follow-up sono un buon inizio.

**10. Usate le certificazioni per ciò in cui sono valide.** Dove legge, contratto o lo standard di ingresso di un ruolo richiedono una certificazione, monitorate la copertura. Altrove, trattate la certificazione come un segnale di impegno e di conoscenza. Non fissate conteggi di certificati come obiettivi e non retribuite né promuovete sulla base di essi soltanto.

**11. Condividete le lezioni tra i team.** Tenete un registro leggero delle lezioni tratte da incidenti, revisioni e miglioramenti e monitorate quali sono state usate da un team diverso da quello d'origine. Una lezione che rimane nel team che l'ha imparata è stata appresa solo a metà dall'organizzazione. Riesaminate il registro nelle comunità di pratica.

**12. Tenete i dati individuali fuori dalle classifiche.** Non pubblicate inventari di competenze per persona e non classificate mai le persone in base a ore di formazione, certificati o competenze autovalutate. Aggregate a livello di team e lasciate che le persone vedano i propri dati. I singoli nasconderanno le lacune se le lacune contano contro di loro.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Quota di tempo protetto per l'apprendimento | Registrare il lavoro ordinario come apprendimento; pianificare tempo che viene poi annullato | Contare solo il tempo usato; confrontare con le registrazioni del tipo di lavoro e i commenti del team |
| Profondità della formazione incrociata | Elencare persone che non hanno mai svolto l'attività; contare una singola osservazione | Prove di lavoro recente; risultati delle esercitazioni |
| Tempo al primo contributo | Contare modifiche banali; far partire il cronometro in ritardo | Definire nel registro il lavoro «reale»; chiedere al nuovo membro e al suo collega di riferimento |
| Partecipazione alle comunità | Imporre la presenza; contare le iscrizioni | Solo volontaria; chiedere che cosa la comunità ha prodotto |
| Tasso di applicazione della formazione | Fare pressione su chi ha imparato perché dica di aver applicato; interpellare solo gli entusiasti | Aggregato anonimo; follow-up a livello di team; osservare i cambiamenti verificabili |
| Copertura delle certificazioni pertinenti | Collezionare certificati per ruoli che non ne hanno bisogno; trattare la certificazione come competenza | Limitare ai requisiti reali; verificare la capacità pratica con altre prove |
| Lezioni condivise tra i team | Condividere lezioni banali; contare i post | Richiedere un uso registrato da parte di un altro team; riesaminare la qualità |

Una lettura sana mostra tempo di apprendimento protetto e utilizzato, attività critiche note a più persone, nuovi membri che apportano contributi reali rapidamente, comunità che producono pratiche condivise, formazione che le persone applicano e lezioni che viaggiano tra i team.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Corsi formali e certificazione | Strutturati, riconosciuti, utili per l'ingresso e i ruoli regolamentati | Costo; può non trasferirsi al lavoro |
| Apprendimento sul lavoro | Pertinente e immediato | Disomogeneo; dipende da mentori e tempo |
| Tempo protetto | Rende reale l'apprendimento | Compete con il lavoro urgente; richiede disciplina |
| Apprendimento nel proprio tempo | Nessun costo per la consegna | Insostenibile; ingiusto; straordinario nascosto |
| Inventario delle competenze | Mostra lacune e rischi | Soggettivo; può diventare una classifica |
| Prove di lavoro recente | Affidabili | Maggiore sforzo di mantenimento |
| Programma di formazione centralizzato | Coerenza | Lento; può non adattarsi ai team |
| Apprendimento scelto dal team | Pertinente; motivato | Qualità variabile; richiede una guida |

La risposta pratica è proteggere il tempo di apprendimento nella settimana lavorativa, imparare soprattutto attraverso il lavoro con qualche corso formale dove aiuta, mantenere la mappa delle competenze basata su prove recenti ed evitare ogni uso dei dati per classificare le persone.

## Domande da discutere con il team

**1. Che cosa ha imparato ciascuno di noi al lavoro lo scorso trimestre e come lo ha imparato?**
Condividete brevemente. Notate se la maggior parte dell'apprendimento è venuta da corsi, dal lavoro o da colleghi. Il facilitatore dovrebbe chiedere che cosa lo ha reso possibile e che cosa lo ha ostacolato. Concordate una modifica che aumenterebbe l'apprendimento utile.

**2. Quali attività critiche potrebbero svolgere solo uno o due di noi e che cosa accadrebbe se fossero assenti?**
Elencatele. Scegliete la più rischiosa e pianificate come diffondere la conoscenza: pairing, un'esercitazione, un runbook, la rotazione. Confermate che il piano non aggiunga straordinario nascosto per gli esperti.

**3. Quanto ha impiegato il nostro ultimo collega nuovo a fare qualcosa di reale e che cosa lo ha rallentato?**
Chiedetelo a lui. Ripercorrete i passi dal primo giorno. Discutete di accessi, ambiente, documentazione e sostegno. Concordate due correzioni che aiuterebbero la persona successiva.

**4. Quando un corso o un certificato ha cambiato il nostro modo di lavorare?**
Ricordate degli esempi. Chiedete che cosa ha fatto la differenza. Se ne vengono in mente pochi, discutete il perché. Decidete quale apprendimento valga la pena di continuare e quale abbandonare.

**5. Quale lezione di un incidente recente è stata effettivamente usata da un altro team?**
Guardate il registro delle lezioni. Se nulla ha viaggiato, chiedetevi come condividere più efficacemente: una comunità, un breve intervento, una modifica a uno standard. Scegliete una lezione da condividere questo mese.

**6. Il nostro tempo di apprendimento è reale e che cosa lo protegge?**
Confrontate il piano con ciò che è accaduto. Discutete che cosa lo occupa: incidenti, scadenze, aspettative. Concordate una regola per proteggerlo, ad esempio trattare una richiesta urgente come un'escalation verso chi decide.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna imparano soprattutto costruendo. Dovrebbero pianificare il tempo di apprendimento, fare pairing e rotazione sul lavoro critico, condividere ciò che imparano e partecipare alle comunità di pratica. Dovrebbero chiedere il tempo e gli strumenti di cui hanno bisogno e trattare l'apprendimento come parte del consegnare bene.

### Team di servizio e operations

I team operativi hanno bisogno di ampiezza, perché coprono assenze e incidenti a qualsiasi ora. Dovrebbero fare formazione incrociata sulle attività critiche, usare esercitazioni e game day e catturare ciò che imparano in runbook e revisioni. Il loro ritmo di reperibilità deve lasciare spazio al riposo e all'apprendimento.

### Leadership e governance

I dirigenti decidono se l'apprendimento sia una priorità o un ripensamento. Dovrebbero proteggere il tempo di apprendimento nei piani, finanziare le correzioni che l'inserimento rivela, evitare obiettivi su ore di formazione o certificati e sostenere le comunità. La governance dovrebbe monitorare la certificazione solo dove richiesta e guardare alle prove di capacità in uso.

### Clienti e utenti

Gli utenti traggono beneficio da team che conoscono a fondo i propri servizi e tengono il passo con i cambiamenti: correzioni più rapide, meno errori ripetuti e consigli migliori. Notano quando le persone che li aiutano sembrano nuove al sistema o quando lo stesso problema si ripresenta. Possono anche insegnare ai team qualcosa sul proprio lavoro, e il loro coinvolgimento è una forma di apprendimento.

## In pratica: un esempio di ITIL agile

Il gruppo di operazioni tecnologiche di una banca regionale ha sei team che gestiscono core banking, pagamenti e canali digitali. I numeri che seguono sono illustrativi.

La dashboard della formazione del gruppo mostra una media di 24 ore di formazione per persona l'anno scorso e 70 certificati conseguiti, e il direttore della formazione è soddisfatto. La responsabile delle operazioni pone una domanda diversa: i team riescono a cavarsela quando le persone chiave sono assenti? Chiede a ogni team di mappare le proprie attività critiche e chi ha svolto ciascuna negli ultimi sei mesi. Su 46 attività critiche, solo 19 erano state svolte da due o più persone, una profondità di formazione incrociata del 41 per cento. Quattordici attività erano state svolte da una sola persona. Il tempo al primo contributo per le ultime otto assunzioni ha una mediana di 41 giorni, con un 85º percentile di 67, trascorsi per lo più in attesa di accessi e nella ricerca della documentazione. Un breve follow-up con 38 persone che avevano completato corsi ha rilevato che il 31 per cento diceva di aver applicato quanto appreso entro 90 giorni. I team riferiscono che il tempo di apprendimento è di solito la prima cosa a essere annullata in una settimana intensa, e il tempo protetto effettivamente usato è circa il 3 per cento della capacità.

Il gruppo apporta quattro modifiche con i team. Ogni team pianifica un blocco di apprendimento fisso di circa l'8 per cento della capacità, con una regola per cui un annullamento deve essere concordato con il responsabile del team e registrato. I piani di pairing e rotazione puntano alle 14 attività a persona singola, partendo dalle cinque più critiche, con esercitazioni ogni trimestre. Una checklist di inserimento e un collega di riferimento indicato per nome riducono il ritardo negli accessi, e il piano della prima settimana comprende una piccola modifica reale. I corsi sono scelti dai team da una rosa ristretta, e una domanda di follow-up parte dopo 60 giorni. Una comunità interteam sull'affidabilità si riunisce ogni mese, e lì si condividono le lezioni delle revisioni degli incidenti con una nota su chi le ha usate.

Un anno dopo, la profondità della formazione incrociata è del 78 per cento, il tempo mediano al primo contributo è di 19 giorni, il tasso di applicazione della formazione è del 64 per cento e il tempo di apprendimento protetto usato è circa il 7 per cento della capacità. Sei lezioni tratte dalle revisioni sono state adottate da altri team. Il direttore della formazione chiede un obiettivo di 40 ore di formazione per persona. La responsabile delle operazioni offre invece misure di profondità della formazione incrociata, applicazione e tempo al primo contributo, spiegando che le ore possono essere raggiunte con sessioni che nessuno usa. La decisione viene registrata e la dashboard abbandona la media delle ore di formazione. La copertura delle certificazioni è monitorata solo per i ruoli in cui le autorità di regolamentazione la richiedono.

## Lente di settore

**Startup.** Le persone indossano molti cappelli e imparano in fretta sotto pressione. Proteggete un po' di tempo per l'apprendimento, fate del pairing l'impostazione predefinita e osservate i punti singoli di conoscenza. Assumere generalisti aiuta. Non costruite troppo presto un reparto di formazione.

**Piccola impresa.** I budget sono ridotti e una sola persona può coprire molto. Usate un apprendimento a basso costo: documentazione dei fornitori, eventi di comunità, mentoring da un consulente esterno di fiducia e formazione incrociata dove possibile. Assicuratevi che almeno un'altra persona possa gestire le attività critiche, anche solo approssimativamente.

**Grande impresa.** La scala consente programmi formali, comunità e percorsi di carriera. Invita anche a requisiti uniformi che non si adattano a nessuno. Fornite un budget e una piattaforma di apprendimento comuni, lasciate scegliere i team, sostenete le comunità interne e misurate la capacità per team. Allineate la certificazione alle esigenze reali.

**Pubblica amministrazione e settore pubblico.** Carenze di competenze, regole sugli acquisti e quadri della funzione pubblica plasmano lo sviluppo. La certificazione può essere un requisito formale per alcuni ruoli. Investite in apprendistati e mobilità interna, conservate la conoscenza quando i contratti terminano e usate comunità tra più enti per condividere le pratiche (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi sono il tempo stesso, che è il costo principale, più i budget per corsi ed eventi, lo sforzo per mantenere la mappa delle competenze, il tempo di mentoring e qualche strumento per le comunità. Pairing e rotazione costano in termini di throughput nel breve periodo.

I ritorni sono resilienza alle assenze e al ricambio, inserimento più rapido, meno errori ripetuti, risoluzione dei problemi più veloce e miglior fidelizzazione tra le persone che crescono. Costruite il caso dai vostri dati: il numero di attività critiche note a una sola persona, i giorni che i nuovi assunti impiegano a essere produttivi e il costo di quel tempo, gli incidenti prolungati dall'assenza di esperti e il turnover tra il personale che dice di non avere spazio per crescere. Evitate di citare stime pubblicate sui ritorni della formazione a meno che possiate ricostruirne metodo e applicabilità. Il costo del non imparare compare tardi, come competenze obsolete e servizi fragili (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Le ore di formazione come obiettivo.** Compra la frequenza. Misurate applicazione e capacità.
- **I certificati come prova di competenza.** Mostrano una valutazione in un dato momento. Usate altre prove.
- **Apprendimento nel proprio tempo.** Nasconde lo straordinario ed è ingiusto. Proteggete il tempo nella settimana lavorativa.
- **Inventari di competenze autovalutate usati per classificare.** Le persone gonfiano o nascondono. Basate le mappe sul lavoro recente e mantenetele a livello di team.
- **Esperti eroi.** Una persona che sa tutto è un rischio e un peso. Diffondete la conoscenza.
- **Corsi scelti centralmente per tutti.** Si adattano a pochi. Lasciate scegliere i team con una guida.
- **Annullare per primo l'apprendimento.** Insegna che l'apprendimento è facoltativo. Proteggetelo e trattate le eccezioni come decisioni.
- **Lezioni che restano locali.** L'organizzazione ripete gli errori. Condividetele e monitorate l'uso.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Tempo e sostegno | Apprendimento nel proprio tempo | Budget di formazione occasionale | Tempo protetto nel piano di capacità; apprendimento scelto dal team | Il tempo usato è monitorato; gli annullamenti sono decisioni; i budget seguono le esigenze dei team | Tempo di apprendimento e percorsi di crescita coordinati tra team e partner |
| Diffusione della conoscenza | Gli esperti portano il lavoro | Esiste documentazione | Attività critiche mappate con prove recenti; pairing ed esercitazioni | Profondità della formazione incrociata gestita; inserimento misurato e migliorato | La conoscenza fluisce liberamente tra team, fornitori e comunità |
| Valutazione dell'apprendimento | Si conta la frequenza | Valutazioni di gradimento dei corsi | Follow-up sull'applicazione; certificazione dove richiesta | Lezioni condivise e usate tra i team; formazione modificata in base ai risultati | Risultati dell'apprendimento collegati ai risultati del servizio e condivisi con i partner |

## Checklist

- [ ] Il tempo di apprendimento è pianificato nella capacità del team e monitorato come usato.
- [ ] Le attività critiche sono elencate, con chi ha svolto ciascuna di recente.
- [ ] Ogni attività critica ha un piano per raggiungere almeno due persone esercitate.
- [ ] Il tempo al primo contributo è misurato per i nuovi membri e se ne tiene conto.
- [ ] Le comunità di pratica e il mentoring sono sostenuti e volontari.
- [ ] La formazione è seguita da una domanda sull'applicazione.
- [ ] La certificazione è monitorata solo per i ruoli con un requisito reale.
- [ ] Un registro delle lezioni documenta la condivisione e l'uso tra i team.
- [ ] I dati sulle competenze sono mantenuti a livello di team e mai usati per classificare i singoli.
- [ ] L'apprendimento non dipende mai da ore non retribuite.

## Prompt IA

**Costruire una mappa delle attività critiche.**

```text
Il nostro team gestisce [servizi]. Elenca le attività critiche che devono essere
eseguite in modo affidabile (ad esempio ripristino da backup, rotazione delle
credenziali, coordinamento di incidenti maggiori, distribuzioni rischiose) e
suggerisci prove che possiamo usare per registrare chi ha svolto ciascuna negli
ultimi sei mesi. Proponi una tabella semplice e un modo per riesaminarla con il
team senza classificare le persone. Non inventare attività nostre oltre a
quanto descrivo. Elenca le tue ipotesi.
```

**Progettare un piano di inserimento.**

```text
Progetta un piano di inserimento per i primi 30 giorni di un nuovo [ruolo] che
entra in un team che gestisce [servizi]. Includi la configurazione degli
accessi, un collega di riferimento indicato per nome, una piccola modifica
reale entro la fine della prima settimana, verifiche periodiche e che cosa
misurare (tempo al primo contributo e che cosa lo ha rallentato). Mantienilo
orientato al sostegno e realistico. Elenca le tue ipotesi e gli elementi da
adattare al nostro contesto.
```

**Fare il follow-up della formazione.**

```text
Redigi un breve insieme di domande di follow-up da inviare alle persone 60
giorni dopo che hanno completato [corso o evento]. Chiedi se e come lo hanno
applicato, che cosa ha ostacolato e che cosa aiuterebbe, in modo che le
risposte possano essere aggregate a livello di team senza identificare i
singoli. Suggerisci come leggere le risposte e che cosa cambiare. Elenca le
tue ipotesi.
```

**Pianificare un'azione di diffusione della conoscenza.**

```text
L'attività [descrizione] è svolta solo da [una o due persone] nel nostro team.
Proponi un piano per diffonderla con pairing, un'esercitazione e
documentazione, con tempi realistici che proteggano il carico di lavoro di
quelle persone. Suggerisci come capiremo che il piano ha funzionato, usando
prove di lavoro recente. Elenca le tue ipotesi e i rischi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di competenze o di apprendimento.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica di apprendimento misuri la capacità in uso e riporti il proprio vettore di manipolazione e la salvaguardia.

## Punti chiave

- Misurate la capacità in uso: chi ha svolto di recente le attività critiche e con quale rapidità le persone nuove contribuiscono.
- Proteggete il tempo di apprendimento nella settimana lavorativa, all'interno di un ritmo sostenibile.
- Diffondete la conoscenza di proposito con pairing, rotazione, esercitazioni e comunità.
- Verificate se la formazione è stata applicata e trattate i certificati come indizi, non come prova.
- Condividete le lezioni tra i team e monitorate il loro uso.
- Mantenete i dati sulle competenze a livello di team e non classificate mai i singoli.

## Riferimenti e letture di approfondimento

1. Senge, P. M., *The Fifth Discipline: The Art and Practice of the Learning Organization*, Doubleday, 1990.
2. Wenger, E., *Communities of Practice: Learning, Meaning, and Identity*, Cambridge University Press, 1998.
3. Polanyi, M., *The Tacit Dimension*, Doubleday, 1966.
4. Ericsson, K. A., Krampe, R. T., and Tesch-Römer, C., "The role of deliberate practice in the acquisition of expert performance," *Psychological Review*, 100(3), 1993.
5. Kirkpatrick, D. L., and Kirkpatrick, J. D., *Evaluating Training Programs: The Four Levels*, 3rd ed., Berrett-Koehler, 2006.
6. Skelton, M., and Pais, M., *Team Topologies*, IT Revolution, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Professional certification](https://en.wikipedia.org/wiki/Professional_certification).
9. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
10. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
11. Wikipedia, [T-shaped skills](https://en.wikipedia.org/wiki/T-shaped_skills).
12. Wikipedia, [Cross-training (business)](https://en.wikipedia.org/wiki/Cross-training_(business)).
13. Wikipedia, [Community of practice](https://en.wikipedia.org/wiki/Community_of_practice).
14. Wikipedia, [Mentorship](https://en.wikipedia.org/wiki/Mentorship).
15. Wikipedia, [Learning organization](https://en.wikipedia.org/wiki/Learning_organization).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
