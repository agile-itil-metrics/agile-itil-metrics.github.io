# Metriche di continuità del servizio

**Un piano di ripristino è un'ipotesi finché un'esercitazione non l'ha messo alla prova, quindi le metriche di continuità dovrebbero contare ciò che è stato effettivamente ripristinato, con quale rapidità e quanti dati sono tornati, e mai il numero di piani su uno scaffale.**

## Panoramica e motivazione

La maggior parte delle misure sugli incidenti descrive la giornata negativa ordinaria: un rilascio fallito, un database saturo, un vicino rumoroso. La continuità del servizio descrive la giornata rara e grave, quando cade una regione, un archivio dati viene corrotto, un fornitore scompare o un ransomware cifra l'intero patrimonio. La [pianificazione della continuità operativa](https://en.wikipedia.org/wiki/Business_continuity_planning) è la disciplina che prepara un'organizzazione a continuare a erogare a livelli accettabili durante tali eventi. In ITIL 4 la pratica si chiama gestione della continuità del servizio ed è la visione IT di quel più ampio obiettivo (si veda l'argomento corrispondente della guida complementare *Agile ITIL Guide*).

Due termini reggono la maggior parte del peso. L'[obiettivo di tempo di ripristino](https://en.wikipedia.org/wiki/Recovery_time_objective) (RTO, recovery time objective) è il tempo accettabile per ripristinare un servizio dopo un'interruzione. L'[obiettivo di punto di ripristino](https://en.wikipedia.org/wiki/Recovery_point_objective) (RPO, recovery point objective) è la perdita di dati accettabile, espressa come intervallo di tempo: un RPO di un'ora significa che perdere l'ultima ora di scritture è tollerabile e perdere di più non lo è. Entrambi derivano da un'[analisi d'impatto sul business](https://en.wikipedia.org/wiki/Business_impact_analysis) (BIA, business impact analysis), il metodo per individuare quali attività contano di più, che cosa dipende da che cosa e quanto costa un'interruzione. Gli obiettivi sono decisioni di business con un prezzo, perché obiettivi più stringenti richiedono più ridondanza, più automazione e più tempo di esercitazione.

La difficoltà è che un obiettivo è una promessa su un evento futuro che non è ancora accaduto. L'evidenza onesta è un test. Il team ha ripristinato il servizio entro l'RTO nell'ultima esercitazione? I dati ripristinati hanno rispettato l'RPO? I passaggi del piano erano quelli che il team ha davvero eseguito? Una metrica di continuità è quindi per lo più una misurazione di esercitazioni, e la qualità della misurazione dipende da quanto l'esercitazione fosse realistica.

I team agili e di site reliability engineering (SRE) portano abitudini utili. I loro sistemi cambiano ogni settimana, quindi un piano scritto una volta e archiviato diventa obsoleto in pochi mesi. La risposta agile è mantenere il ripristino come codice (per esempio con l'[infrastruttura come codice](https://en.wikipedia.org/wiki/Infrastructure_as_code)), provarlo spesso e trattare ogni prova come fonte di voci di backlog. La [chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering) e i game day applicano la stessa idea su scala minore: provocare un guasto di proposito, in modo controllato, e osservare che cosa accade. La visione SRE è descritta nel libro di Google *Site Reliability Engineering*, e il campo più ampio è riassunto nella voce [site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).

### Come differiscono le visioni

- **Visione ITIL.** La gestione della continuità del servizio è una pratica che fissa gli obiettivi di ripristino a partire dalla BIA, progetta i piani e li dimostra con i test. I suoi esiti sono piani, rapporti di esercitazione e riscontri registrati. Lo standard [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301) descrive un sistema di gestione della continuità operativa. Alla data di ottobre 2026, verificare direttamente l'edizione corrente se un cliente o un'autorità di regolazione richiede la conformità.
- **Visione agile.** La capacità di ripristino è una proprietà del prodotto nella definizione di completato. Una storia che aggiunge un archivio dati non è completata finché il suo percorso di ripristino non è stato provato.
- **Visione SRE.** Il lavoro sull'affidabilità è preventivato e misurato. Failover, prove di ripristino e game day sono lavoro pianificato con responsabili e riscontri che entrano nel backlog.

Questo argomento tratta sette misure: ripristino rispetto agli obiettivi di tempo e di dati nei test, copertura e recenza delle esercitazioni, ripristini da backup, chiusura dei riscontri e aggiornamento dei piani. Le interruzioni reali sono nelle metriche degli incidenti maggiori (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori») e nelle metriche di disponibilità (si veda l'Argomento 5.3 «Metriche di disponibilità»). Gli obiettivi espressi come traguardi visibili all'utente sono nell'argomento su indicatori e budget (si veda l'Argomento 5.2 «SLI, SLO e budget di errore»). Il «failed deployment recovery time» del programma di ricerca DORA è un orologio molto più piccolo (si veda l'Argomento 2.8 «Metriche DORA»). Le cause radice rivelate dai test appartengono agli argomenti su problemi e apprendimento (si veda l'Argomento 4.1 «Metriche di gestione dei problemi» e l'Argomento 4.2 «Metriche di postmortem e apprendimento»).

Un **livello (tier)** è una classe di servizi raggruppati in base alla rapidità con cui devono tornare disponibili. Un'**esercitazione a tavolino (tabletop)** è una prova basata sulla discussione, senza modifiche ai sistemi. Un **game day** è una prova pratica in cui un team provoca o simula un guasto e osserva la risposta. Un **riscontro (finding)** è un divario registrato tra il piano e ciò che è accaduto. L'**aggiornamento del piano** è quanto bene un piano rifletta il servizio com'è oggi.

## Principi chiave

- **Prima testare, poi dichiarare.** Un RTO o un RPO è validato solo da un ripristino effettivamente eseguito e cronometrato. Riportare affiancati l'obiettivo e l'ultimo risultato dimostrato.
- **Misurare il realismo, non solo il successo.** Il ripristino di un database di prova vuoto concluso in pochi minuti dice poco su un ripristino di dimensioni di produzione. Registrare ambito e condizioni di ogni esercitazione accanto al risultato.
- **Stratificare il patrimonio e dedicare impegno per livello.** I servizi critici ottengono test frequenti e realistici. I servizi di livello basso ottengono verifiche più leggere. Un unico obiettivo di frequenza per tutto spreca impegno o manca il rischio.
- **Trattare i riscontri come il prodotto di un'esercitazione.** Il risultato prezioso di un game day è un elenco chiuso di lacune. Un test senza riscontri è o eccellente o troppo blando, ed è bene scoprire quale dei due.
- **Descrivere servizi e rotazioni, mai persone.** I risultati delle esercitazioni descrivono il sistema e il piano. Nessuno viene classificato in base a quanto rapidamente ha ripristinato una prova.
- **Mostrare ogni esercitazione come una riga a sé.** Ci sono pochi test per servizio all'anno, quindi le medie ingannano (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

## Definizioni delle metriche

Ogni metrica indica l'orologio o il conteggio, che cosa è escluso e la fonte dei dati. Ogni riga richiede una regola scritta prima di essere considerata affidabile. Un «servizio di livello 1» nel seguito indica un servizio nel livello di ripristino più alto definito dalla propria BIA.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasso di RTO rispettato | Quota di esercitazioni di ripristino in cui il servizio è stato ripristinato entro il proprio RTO dichiarato | esercitazioni con tempo di ripristino <= RTO / esercitazioni eseguite. L'orologio parte dall'inizio dichiarato del guasto dell'esercitazione (momento di iniezione o dichiarazione dello scenario) e si ferma quando il servizio supera il controllo di stato concordato per utenti reali o sintetici. Le esercitazioni a tavolino e quelle senza ripristino cronometrato sono escluse e contate separatamente | percentuale, con il numero di esercitazioni mostrato | Rapporto di esercitazione, cronologia dal monitoraggio, registro dei servizi con RTO | Gestione della continuità del servizio; gestione della disponibilità | Esito del game day; tempo di ripristino nelle metriche di consegna | Per esercitazione; aggregata ogni trimestre |
| Tasso di RPO rispettato | Quota di esercitazioni di ripristino in cui la perdita di dati è rimasta entro l'RPO dichiarato | esercitazioni con intervallo di perdita di dati misurato <= RPO / esercitazioni che ripristinano dati. L'intervallo di perdita di dati è il tempo tra l'ultima scrittura presente dopo il ripristino e il momento del guasto. Le esercitazioni che non ripristinano alcuno stato sono escluse | percentuale, con il numero di esercitazioni mostrato | Rapporto di esercitazione, confronto dei dati ripristinati con la sorgente o il registro delle scritture | Gestione della continuità del servizio; gestione della sicurezza delle informazioni | Prova di ripristino come parte della definizione di completato | Per esercitazione; aggregata ogni trimestre |
| Copertura del ripristino testato | Quota di servizi di livello 1 e 2 che hanno avuto un test di ripristino pratico entro il proprio intervallo di test concordato | servizi con un test qualificante entro l'intervallo / servizi inclusi. Un test qualificante è pratico (non solo a tavolino) e ripristina il servizio nell'ambiente di test o di produzione. L'intervallo è fissato per livello | percentuale, per livello | Registro dei servizi, calendario e rapporti delle esercitazioni | Gestione della continuità del servizio; gestione del catalogo dei servizi | Calendario dei game day | Mensile |
| Giorni dall'ultimo test di ripristino riuscito | Età del più recente test di ripristino superato per ogni servizio critico | data del rapporto meno data dell'ultimo test che ha rispettato sia RTO sia RPO. Un test fallito non azzera l'orologio. I servizi mai testati sono mostrati come «mai» e non come zero | giorni, per servizio, con il più vecchio evidenziato | Rapporti delle esercitazioni, registro dei servizi | Gestione della continuità del servizio | Calendario dei game day; età dell'elemento di lavoro | Mensile |
| Tasso di successo dei ripristini da backup | Quota di ripristini da backup tentati che si sono conclusi con dati verificati e utilizzabili | ripristini completati e che hanno superato una verifica dei dati / ripristini tentati, sui test di ripristino automatici e manuali. Il solo successo del job di backup è escluso, perché un job eseguito non è un ripristino riuscito | percentuale, per livello di dati | Log del sistema di backup, risultati della verifica automatica dei ripristini | Gestione della continuità del servizio; gestione di infrastruttura e piattaforma | Prova di ripristino; criteri di operabilità nella definizione di completato | Settimanale per i test automatici; mensile nel riesame |
| Tasso di chiusura dei riscontri delle esercitazioni | Quota di riscontri delle esercitazioni di ripristino chiusi entro il tempo concordato, suddivisa per gravità | riscontri chiusi entro l'obiettivo / riscontri scaduti nel periodo. L'orologio parte quando il riscontro è registrato nel rapporto dell'esercitazione e si ferma alla correzione verificata, cioè un nuovo test o un riesame che la confermi. I riscontri accettati come rischi da un responsabile nominato sono contati separatamente | percentuale, con il conteggio dei riscontri scaduti | Rapporto dell'esercitazione, sistema di tracciamento delle segnalazioni | Gestione della continuità del servizio; miglioramento continuo | Azioni della retrospettiva; età delle voci di backlog | Mensile |
| Aggiornamento dei piani | Quota di piani di continuità e runbook riesaminati dopo l'ultima modifica sostanziale del loro servizio, o entro il loro intervallo di riesame | piani con data di riesame successiva all'ultima modifica sostanziale ed entro l'intervallo / piani inclusi. Per modifica sostanziale si intende un record di modifica contrassegnato come alterazione di architettura, archivi dati, dipendenze o fornitori | percentuale, con l'età del piano non riesaminato più vecchio | Repository dei piani (controllo di versione), record delle modifiche, registro dei servizi | Gestione della continuità del servizio; abilitazione delle modifiche | La definizione di completato include l'aggiornamento del runbook | Trimestrale |

L'orologio RTO in un'esercitazione differisce da quello di un'interruzione reale, che parte dall'impatto (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori»), quindi confrontare esercitazioni con esercitazioni. Un'esercitazione rigidamente scritta misura la velocità di prova, quindi registrare quanta sorpresa conteneva.

## Raccomandazioni

### Fissare obiettivi che si possano testare

**1. Derivare RTO e RPO da un'analisi d'impatto sul business e scriverli accanto al servizio.** La BIA chiede al business quanto costano un'ora, un giorno e una settimana di interruzione e quali dati può permettersi di perdere. Registrare le risposte nel registro dei servizi, così che ogni test possa essere confrontato con un obiettivo dichiarato. Gli obiettivi scelti dai soli ingegneri tendono a essere insostenibili o slegati da ciò di cui i clienti hanno bisogno.

**2. Stratificare i servizi e fissare gli intervalli di test per livello.** Un numero ridotto di livelli, forse tre o quattro, è più facile da gestire di una regola diversa per ogni servizio. Dare al livello più alto i test più frequenti e più realistici, e al livello più basso una verifica leggera come un ripristino periodico di un campione. Scrivere gli intervalli e riesaminarli quando cambia la BIA.

**3. Verificare che l'obiettivo sia coerente con l'architettura.** Un RPO di cinque minuti con un backup notturno è una contraddizione che un test farà emergere nel momento peggiore. Confrontare ogni obiettivo con la progettazione di backup, replica e failover prima della prima esercitazione e registrare ogni lacuna come riscontro.

### Testare in modi che rivelino qualcosa

**4. Combinare esercitazioni a tavolino, prove di ripristino e game day.** Un'esercitazione a tavolino è economica e individua lacune in ruoli, contatti e decisioni. Una prova di ripristino pratica individua lacune in procedure, permessi e dati. Un game day, che provoca un guasto e osserva la risposta, individua lacune in monitoraggio, runbook e coordinamento. Riportare ciascun tipo separatamente, così che una serie di facili esercitazioni a tavolino non sembri una prova di ripristino.

**5. Cronometrare il ripristino su dati di dimensioni di produzione.** Un ripristino che funziona su una piccola copia può fallire sul volume reale per limiti di throughput o di archiviazione. Dove i test su scala piena sono troppo costosi da eseguire spesso, eseguirne uno periodicamente e dichiarare ogni estrapolazione. Registrare la dimensione dei dati insieme al risultato.

**6. Verificare che i dati ripristinati siano utilizzabili.** Aggiungere una verifica automatica dopo il ripristino, come un conteggio di righe, un checksum o una transazione sintetica. Contare un ripristino come riuscito solo quando quella verifica è superata.

**7. Aggiungere gradualmente la sorpresa.** Le prime esercitazioni possono essere annunciate e scritte. Quelle successive dovrebbero trattenere i dettagli del guasto e includere dipendenze come credenziali scadute o un fornitore irraggiungibile. Registrare il livello di sorpresa in modo che i risultati possano essere letti nel loro contesto.

### Trasformare i riscontri in cambiamento

**8. Registrare ogni riscontro con un responsabile, una gravità e una scadenza.** Un game day produce un elenco: un permesso mancante, un passaggio del runbook che non corrisponde più allo strumento, un monitor che non è mai scattato. Inserire ciascuno nel backlog del team con la stessa visibilità del lavoro sulle funzionalità. Tracciare l'età dei riscontri aperti e la quota chiusa nei tempi, e confermare la chiusura con un nuovo test dove praticabile.

**9. Collegare i riscontri alla gestione dei problemi e all'apprendimento.** Un riscontro che si ripresenta nelle esercitazioni è un problema nel senso ITIL (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»). Riesaminare ogni esercitazione senza attribuire colpe, come si farebbe con un postmortem, e seguire le azioni fino alla chiusura (si veda l'Argomento 4.2 «Metriche di postmortem e apprendimento»).

### Mantenere vivi i piani

**10. Tenere piani e runbook nel controllo di versione e collegarli al cambiamento.** Quando un record di modifica altera l'architettura, un archivio dati o un fornitore, richiedere che il piano responsabile sia riesaminato nello stesso lavoro (si veda l'Argomento 4.3 «Metriche di abilitazione delle modifiche»). Misurare l'aggiornamento del piano rispetto all'ultima modifica sostanziale e non solo rispetto al calendario. Un piano riesaminato ogni trimestre che ignora la migrazione del mese scorso è aggiornato solo di nome.

**11. Mantenere onesta la mappa delle dipendenze.** L'ordine di ripristino dipende da servizi condivisi come identità, risoluzione dei nomi e archivio dei segreti. Riconciliare la mappa con i record di configurazione e correggere le lacune che le esercitazioni rivelano (si veda l'Argomento 7.4 «Qualità della configurazione e del CMDB»).

**12. Includere i fornitori e ruotare l'incarico delle esercitazioni.** Chiedere a ogni fornitore critico le proprie evidenze di test e concordare come esercitare i passaggi congiunti (si veda l'Argomento 8.4 «Metriche di fornitori e contratti»). Le esercitazioni consumano tempo, quindi condividere l'incarico in una rotazione e contarlo come carico operativo (si veda l'Argomento 5.7 «Metriche di toil e reperibilità»).

## Vettori di manipolazione e protezioni

I numeri di continuità sono facili da abbellire perché poche persone guardano da vicino un'esercitazione, e il vero test avviene di rado. La tabella abbina ogni metrica a un modo in cui viene manipolata e al controllo che lo individua. Gli abbinamenti seguono la forma definita nell'Argomento 1.2 (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tasso di RTO rispettato | Scegliere un piccolo insieme di dati di prova, uno scenario facile o uno script provato; far partire l'orologio in ritardo, dopo che il team ha iniziato; allentare il controllo di stato così che «ripristinato» arrivi prima; fissare un RTO generoso così che ogni test sia superato | Registrare dimensione dei dati, sorpresa dello scenario e definizione del controllo di stato con ogni risultato; confrontare l'RTO con la BIA; mostrare ogni esercitazione come una riga a sé, compresi i fallimenti |
| Tasso di RPO rispettato | Misurare la perdita solo per la tabella principale e non per tutto lo stato; testare una replica sincronizzata perché non c'è carico in esecuzione; ridefinire l'RPO dopo un risultato mancato | Verificare la perdita di dati rispetto al registro delle scritture in tutti gli archivi dati inclusi; testare sotto un carico di scrittura realistico; tenere un registro delle modifiche degli obiettivi con le motivazioni |
| Copertura del ripristino testato | Contare le discussioni a tavolino come test; testare un servizio banalmente piccolo per alzare la percentuale; ridurre l'elenco degli inclusi riclassificando i servizi a un livello inferiore | Richiedere test pratici per il conteggio di livello 1; riportare la copertura ponderata per criticità del servizio; verificare i cambi di livello rispetto alla BIA |
| Giorni dall'ultimo test di ripristino riuscito | Rieseguire un test facile per azzerare l'età; etichettare come superato un test parziale; azzerare la data dopo un riesame cartaceo | Mostrare l'ambito dell'ultimo test superato; mostrare l'età massima e i servizi mai testati; richiedere che siano stati rispettati sia RTO sia RPO |
| Tasso di successo dei ripristini da backup | Riportare il successo del job di backup come successo del ripristino; testare solo i backup noti come buoni; verificare con un controllo che non può fallire | Tracciare i ripristini di backup campionati a caso; richiedere un risultato di verifica dei dati; riesaminare il controllo stesso a ogni audit |
| Tasso di chiusura dei riscontri delle esercitazioni | Chiudere i riscontri senza correzione; declassare la gravità per allentare la scadenza; dividere un riscontro in molti facili; registrare pochi riscontri fin dall'inizio | Verificare la chiusura con un nuovo test; riportare i riscontri per esercitazione accanto al tasso di chiusura, poiché un conteggio in calo può significare esercitazioni più blande; riesaminare i cambi di gravità |
| Aggiornamento dei piani | Aggiornare una data di riesame senza leggere il piano; segnare le modifiche come non sostanziali; riempire il piano di testo generico che non diventa mai obsoleto | Campionare i piani e ripercorrerli con qualcuno che non li ha scritti; confrontare la frequenza del contrassegno di modifica sostanziale con lo storico delle modifiche di architettura; collegare l'aggiornamento ai risultati dei test |

Una lettura sana mostra una manciata di test per trimestre con una variazione onesta: alcuni superati al primo tentativo, alcuni falliti e ripetuti, e i riscontri di ciascuno compaiono nel backlog e si chiudono nei tempi dichiarati. Punteggi perfetti anno dopo anno sono un motivo per chiedersi quanto siano difficili le esercitazioni.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Test di ripristino automatici piccoli e frequenti | Evidenza economica e continua; individua presto i guasti silenziosi del backup | Non testa coordinamento, persone o ripristino su scala piena |
| Esercitazione annuale di failover su scala piena | Realistica; esercita insieme persone, fornitori e dipendenze | Costosa e rara; difficile da ripetere dopo una correzione; comporta rischi se eseguita in produzione |
| Esercitazioni a tavolino | Basso costo; individua lacune in ruoli e decisioni; buone per la formazione | Non dimostra che la tecnologia funzioni; facile da eseguire senza imparare nulla |
| Game day in produzione con guasto indotto | Massimo realismo; testa monitoraggio e runbook così come sono | Richiede salvaguardie mature e sostegno della dirigenza; può danneggiare i clienti se eseguito con leggerezza |
| Obiettivi a livelli | Dedica impegno dove sta il rischio | Le assegnazioni di livello possono derivare e richiedono un responsabile |

La risposta pratica è un programma a strati: controlli di ripristino automatici ed economici sempre attivi, prove pratiche per ogni servizio di livello 1 a intervalli fissi, un'esercitazione più ampia su un ciclo più lungo ed esercitazioni a tavolino per decisioni e comunicazione. Dichiarare gli intervalli in modo che il lettore possa giudicare quanto sia recente l'evidenza.

## Domande da discutere con il team

**1. Quando abbiamo ripristinato l'ultima volta il nostro servizio più importante, e che cosa abbiamo dimostrato esattamente?**
Chiedere la data, la dimensione dei dati, lo scenario e il risultato, e scriverli su una lavagna. Il facilitatore dovrebbe resistere alla tentazione di giudicare e concentrarsi sul divario tra l'affermazione e l'evidenza. Concludere concordando un test che colmerebbe il divario maggiore.

**2. Chi ha scelto i nostri RTO e RPO, e il business li sceglierebbe ancora oggi?**
Risalire da ogni obiettivo a un'analisi d'impatto sul business o a una decisione. Chiedere se l'architettura potrebbe rispettare l'obiettivo sulla carta, e se il costo per rispettarlo sia mai stato dichiarato. Concordare chi confermerà con il business gli obiettivi dei servizi principali e entro quando.

**3. Quanto ci costerebbe in reputazione un'esercitazione fallita, e questo influenza quanto sono difficili le nostre esercitazioni?**
Questa domanda fa emergere la pressione che rende le esercitazioni blande. Chiedere se un test fallito sia trattato come un fallimento del team o come un successo dell'esercitazione.

**4. Quali riscontri della nostra ultima esercitazione sono ancora aperti, e perché?**
Leggere l'elenco ad alta voce con età e responsabili. Per ogni voce scaduta, chiedere che cosa la blocca: lavoro concorrente, responsabilità poco chiara, costo o la convinzione che il rischio sia accettabile. L'obiettivo è che nessun riscontro resti in uno stato senza responsabile.

**5. Che cosa presuppone il nostro piano che non è più vero?**
Scegliere un piano e leggerlo con una persona che non lo ha scritto. Cercare strumenti dismessi, account rinominati e fornitori usciti. Chiedere come verrebbe aggiornato il piano quando il servizio cambia, e chi se ne accorge quando non lo è. Collegare la risposta al processo di modifica.

**6. Quale dipendenza fermerebbe tutto, e abbiamo mai testato senza di essa?**
Servizi condivisi come identità, risoluzione dei nomi, segreti e lo stesso sistema di chiamata sono comuni punti singoli di guasto. Chiedere al team di nominarli e di descrivere l'ultima volta in cui ciascuno è stato reso indisponibile di proposito.

## Quattro prospettive

### Team di prodotto e di consegna

I team di prodotto possiedono la progettazione che rende possibile il ripristino, quindi incontrano la continuità come parte della definizione di completato per i servizi critici: un percorso di backup, una procedura di ripristino e un runbook che funziona. Dovrebbero eseguire prove di ripristino nella propria cadenza, conservare il codice di ripristino insieme al servizio e trattare una prova fallita come una voce di backlog.

### Team di servizio e operations

I team operativi eseguono la maggior parte delle esercitazioni e portano il carico di prepararle. Dovrebbero tenere il calendario delle esercitazioni, registrare le cronologie mentre l'esercitazione procede e scrivere i riscontri lo stesso giorno. I risultati descrivono il servizio e il piano, e nessuno viene classificato in base a quanto rapidamente una persona ha ripristinato una prova.

### Leadership e governance

I dirigenti fissano gli obiettivi con il business e decidono quanto ripristino valga la pena di acquistare. Dovrebbero chiedere di vedere l'ultimo risultato dimostrato accanto a ogni obiettivo, l'età dell'evidenza e i riscontri aperti, ed evitare di premiare un foglio pulito. Gli organi di governance dovrebbero aspettarsi un insieme ridotto e stabile di misure di continuità, collegate al registro dei rischi e alla rendicontazione regolamentata dove applicabile (si veda l'Argomento 8.2 «Metriche di rischio e controlli» e l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

### Clienti e utenti

I clienti vedono raramente la continuità finché non conta, e allora la giudicano interamente dall'esito: per quanto tempo sono rimasti senza il servizio e se i loro dati sono sopravvissuti. Traggono beneficio da dichiarazioni chiare su ciò che viene promesso, in termini comprensibili, e da una comunicazione onesta quando un incidente attiva il piano. Dove i contratti includono impegni di ripristino, condividere su richiesta le evidenze delle esercitazioni (si veda l'Argomento 5.1 «Metriche SLA, OLA e XLA»).

## In pratica: un esempio di ITIL agile

Il reparto IT di un ospedale regionale gestisce un sistema di pianificazione dei pazienti, un archivio di diagnostica per immagini e un servizio di messaggistica del personale. Un team di prodotto di otto persone mantiene la pianificazione, e un team operativo gestisce la piattaforma. Tutti i numeri di questo esempio sono illustrativi.

Il registro del reparto elenca la pianificazione come livello 1 con un RTO di 2 ore e un RPO di 15 minuti. Il rapporto trimestrale mostra «tasso di RTO rispettato: 100 percento su 4 esercitazioni» e «copertura del ripristino testato: 100 percento». Un nuovo responsabile delle operazioni legge i rapporti delle esercitazioni dietro i numeri. Tre delle quattro esercitazioni erano a tavolino, e l'unico ripristino pratico usava una copia del database contenente circa un decimo dei dati di produzione. Nessuno aveva ripristinato un backup in un ambiente pulito da 14 mesi.

Il team decide di cambiare ciò che viene misurato e testato. Ridefinisce la copertura del ripristino testato per contare solo i test pratici, il che fa scendere la cifra al 33 percento sui tre servizi di livello 1. Pianifica un ripristino di dimensioni di produzione per la pianificazione, con verifica automatica dei conteggi di righe e una transazione di prenotazione sintetica. L'esecuzione richiede 3 ore e 40 minuti a fronte di un RTO di 2 ore, e i dati ripristinati sono indietro di 40 minuti rispetto al punto di guasto a fronte di un RPO di 15 minuti, perché il log shipping era stato sospeso durante una migrazione e mai ripreso. Il game day produce 9 riscontri: 2 di gravità alta, 5 media e 2 bassa.

La decisione registrata nel registro è trattare il mancato rispetto come il risultato più prezioso dell'anno. Il team apre lavoro per riprendere il log shipping con un avviso sul suo ritardo, parallelizzare il ripristino e spostare un volume di dati su un'archiviazione più veloce. L'RTO resta di 2 ore, e il team aggiunge un'alternativa manuale documentata per la pianificazione. Il tasso di chiusura dei riscontri nei primi 60 giorni è di 7 su 9 nei tempi, con gli altri due accettati come rischi da responsabili nominati.

Il rischio di manipolazione individuato qui era sottile. Nessuno ha falsificato un numero: un conteggio generoso di esercitazioni a tavolino e un piccolo insieme di dati di prova hanno reso verde il rapporto. Le salvaguardie che hanno funzionato sono state registrare dimensione dei dati e tipo di esercitazione con ogni risultato, e la pratica di leggere i rapporti di esercitazione sottostanti. Nel rapporto successivo, il team mostra ogni esercitazione come una riga a sé, compresa l'esecuzione fallita.

## Lente di settore

**Startup.** Di solito c'è un solo ambiente di produzione, un piccolo team e un fornitore cloud gestito. La misura più preziosa è la più semplice: ripristinare ogni mese il database di produzione da backup in un ambiente pulito, cronometrarlo e verificare il risultato. Scrivere RTO e RPO su una pagina.

**Piccola impresa.** L'IT è spesso esternalizzato o gestito da una o due persone su servizi in hosting. Chiedere per iscritto al fornitore quale ripristino si impegna a garantire e quali evidenze può mostrare, e testare un ripristino dei propri dati ogni trimestre. Tenere un piano di una pagina dove possa essere letto quando i sistemi principali sono fermi.

**Grande impresa.** Molti servizi, molti fornitori e piattaforme condivise rendono essenziali la stratificazione e una mappa delle dipendenze. Investire in un registro centrale dei servizi con obiettivi, un calendario delle esercitazioni, una verifica automatica dei ripristini e una rendicontazione coerente, così che i risultati siano confrontabili tra i team.

**Governo e settore pubblico.** Gli obblighi di continuità possono derivare da legge, audit o politica, e un servizio pubblico può dover continuare a funzionare durante le emergenze. Le evidenze dei test sono spesso riesaminate dall'esterno, quindi conservare rapporti delle esercitazioni, riscontri e record di chiusura in una forma leggibile da un revisore. Gli appalti possono vincolare gli accordi di ripristino, quindi includere nei contratti i diritti di esercitazione e le evidenze (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

Le ragioni per investire sono il costo di un'interruzione grave che dura più di quanto il business possa sopportare, la perdita di dati che non possono essere ricreati e gli obblighi verso clienti, autorità di regolazione e assicuratori che chiedono evidenza di preparazione. Il lavoro sulla continuità è un'assicurazione, quindi il ritorno è la perdita evitata e la fiducia dei decisori, ed è difficile da esprimere come cifra senza inventarne una. Descriverlo attraverso schemi osservabili: il divario tra tempo di ripristino dichiarato e dimostrato, il numero di riscontri di gravità alta scoperti nelle esercitazioni anziché in eventi reali e il tempo per rispondere a una richiesta di evidenza di un cliente o di un revisore.

I costi si dividono in tre gruppi: la ridondanza e gli strumenti che gli obiettivi richiedono, il tempo delle persone per pianificare, eseguire e riesaminare le esercitazioni e l'impegno per mantenere aggiornati piani e mappe delle dipendenze.

Il costo totale di proprietà è dominato dalle persone e dai livelli più stringenti. Passare da un RTO di 24 ore a uno di 2 ore cambia la progettazione e il conto, quindi rendere esplicito quel compromesso con il business. Test piccoli, frequenti e automatici tendono a costare meno di un grande evento annuale perché i difetti emergono quando sono economici da correggere.

## Anti-pattern e insidie

- **Il piano sullo scaffale.** Un documento conta come preparazione e nessuno l'ha provato. Riportare invece la data e il risultato dell'ultimo test pratico accanto a ogni obiettivo.
- **Il successo del backup come successo del ripristino.** I job riportano verde mentre i dati non possono essere ripristinati. Testare invece regolarmente i ripristini e verificare i dati prima di contare un successo.
- **Teatro provato.** L'esercitazione è scritta ed eseguita dagli autori del piano. Aggiungere invece gradualmente la sorpresa.
- **Un solo obiettivo per tutto.** Ogni servizio ha un RTO di quattro ore perché lo diceva il modello. Stratificare invece i servizi a partire da un'analisi d'impatto sul business e fissare obiettivi adeguati.
- **Riscontri che non si chiudono mai.** Il rapporto dell'esercitazione elenca lacune e il backlog non le vede mai. Dare invece a ogni riscontro un responsabile e una scadenza, e verificare la chiusura con un nuovo test.
- **Penalizzare il test fallito.** Un team incolpato per un RTO mancato smetterà di eseguire test difficili. Concordare invece in anticipo che un'esercitazione fallita con buoni riscontri è un buon esito, e riesaminarla senza colpe.
- **Piani obsoleti dopo un cambiamento rapido.** Il calendario guida il riesame e le modifiche di architettura sfuggono. Collegare invece il riesame dei piani ai record di modifiche sostanziali e misurare l'aggiornamento rispetto ad essi.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Obiettivi e livelli | RTO e RPO non scritti o copiati da un modello | Obiettivi scritti per alcuni servizi chiave | Livelli e obiettivi derivano da un'analisi d'impatto sul business e stanno nel registro dei servizi | Obiettivi riesaminati rispetto ai risultati dimostrati e all'architettura | Obiettivi concordati congiuntamente con il business e i fornitori, e adeguati al mutare dei servizi |
| Test ed evidenze | Ripristino mai testato, o testato una volta dopo un incidente | Test di ripristino ad hoc di alcuni team; risultati conservati in appunti personali | Intervalli di test per livello con ambito, cronologia e risultato registrati | Risultati tracciati nel tempo, con esercitazioni a tavolino, prove e game day riportati separatamente | Esercitazioni tra team e con fornitori con sorpresa, pianificate in base al rischio |
| Riscontri e apprendimento | Lacune notate informalmente | Riscontri elencati dopo alcune esercitazioni | Ogni riscontro ha un responsabile, una gravità e una scadenza | Tasso di chiusura ed età riesaminati, con un nuovo test che conferma la chiusura | I riscontri alimentano piattaforme condivise, contratti con i fornitori e standard di progettazione |
| Aggiornamento dei piani | Piani scritti una volta | Piani aggiornati dopo gli incidenti | Piani nel controllo di versione con un intervallo di riesame | Riesame collegato alle modifiche sostanziali e misurato | Piani e runbook testati come codice e generati dalla definizione del servizio dove possibile |

## Checklist

- [ ] Ogni servizio di livello 1 ha un RTO e un RPO scritti derivati da un'analisi d'impatto sul business.
- [ ] Il registro dei servizi mostra livello, obiettivi e intervallo di test di ogni servizio.
- [ ] Gli orologi RTO e RPO, il controllo di stato e le esclusioni sono scritti (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»).
- [ ] Test di ripristino pratici, esercitazioni a tavolino e game day sono riportati come tipi distinti.
- [ ] Ogni test di ripristino registra dimensione dei dati, scenario, livello di sorpresa e il tempo di ripristino e la perdita di dati misurati.
- [ ] I ripristini da backup sono testati automaticamente, e una verifica dei dati decide il successo.
- [ ] Ogni riscontro delle esercitazioni ha un responsabile, una gravità, una scadenza e un posto nel backlog.
- [ ] Il riesame dei piani è collegato ai record di modifiche sostanziali, e il piano non riesaminato più vecchio è visibile.
- [ ] La mappa delle dipendenze include i servizi condivisi, e almeno uno scenario ne rimuove uno.
- [ ] Ogni metrica di questo argomento ha una salvaguardia nominata e un responsabile nel registro delle metriche (si veda l'Argomento 1.4 «Governance e responsabilità delle metriche»).
- [ ] L'incarico delle esercitazioni ruota, e il tempo che richiede è contato come carico operativo.

## Prompt IA

**Progettare un test di ripristino e le misure che lo accompagnano.**

```text
Voglio testare il ripristino di [nome del servizio], un servizio di [livello]
con un RTO dichiarato di [RTO] e un RPO di [RPO]. I suoi componenti principali
sono [elenco: archivi dati, code, calcolo, servizi condivisi] e i suoi
fornitori sono [elenco]. Redigi un piano di test con uno scenario realistico,
l'evento che avvia l'orologio, il controllo di stato che lo ferma, come
misurare la perdita di dati rispetto all'RPO, la dimensione dei dati da usare,
che cosa registrare e le salvaguardie per evitare danni alla produzione. Non
inventare tempi di riferimento né affermare che un qualsiasi obiettivo sia
raggiungibile. Elenca le tue ipotesi e le domande a cui dovrei rispondere per
completare il piano.
```

**Esaminare i rapporti delle esercitazioni alla ricerca di evidenze lusinghiere.**

```text
Ecco i riepiloghi delle nostre ultime [numero] esercitazioni di ripristino:
[incollare per ciascuna: tipo, data, ambito, dimensione dei dati, tempo di
ripristino, perdita di dati, numero di riscontri]. I nostri obiettivi sono
[RTO e RPO per livello]. Individua dove i risultati riportati potrebbero
sovrastimare la reale capacità di ripristino, come piccoli insiemi di dati,
scenari scritti, copertura solo a tavolino o controlli di stato lassi.
Suggerisci quali informazioni aggiuntive registrare e quali metriche di
salvaguardia abbinare a ciascun risultato. Non inventare valori di
riferimento né presumere fatti che non ti ho fornito. Elenca le tue ipotesi.
```

**Trasformare gli appunti di un game day in riscontri e voci di backlog.**

```text
Ecco gli appunti grezzi di un game day su [servizio]: [incollare appunti e
cronologia]. Estrai ogni divario tra il piano e ciò che è accaduto come
riscontro separato con un titolo breve, una descrizione, una gravità
suggerita secondo questa scala [scala di gravità], un ruolo candidato come
responsabile (non una persona nominata) e come potremmo verificare la
correzione. Raggruppa i riscontri che potrebbero avere una causa radice
comune. Non inventare eventi che non sono negli appunti. Elenca le tue ipotesi
e ciò che richiede chiarimenti.
```

**Verificare l'aggiornamento di un piano rispetto ai cambiamenti recenti.**

```text
Ecco il piano di continuità per [servizio], riesaminato l'ultima volta il
[data]: [incollare il piano o uno schema]. Queste sono le modifiche sostanziali
da allora: [elenco di modifiche ad architettura, archivi dati, dipendenze,
fornitori e strumenti]. Individua passaggi, contatti, strumenti e dipendenze
del piano che le modifiche potrebbero aver reso errati, ed elenca le domande
che un revisore dovrebbe porre. Non inventare dettagli sui nostri sistemi.
Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per individuare l'argomento che definisce una metrica di continuità, di ripristino o di esercitazione, e la salvaguardia da abbinarle.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una metrica di continuità modificata dichiari i propri orologi, le esclusioni e il vettore di manipolazione.

## Punti chiave

- Un obiettivo di ripristino è una promessa, e solo un'esercitazione cronometrata e realistica mostra se può essere mantenuta.
- Riportare l'ultimo risultato dimostrato e la sua età accanto a ogni RTO e RPO, e mostrare ogni esercitazione come una riga a sé.
- Testare i ripristini, non i backup: un ripristino conta solo quando i dati sono stati verificati come utilizzabili.
- Il prodotto di un'esercitazione è un elenco chiuso di riscontri, quindi tracciarne l'età e confermare la chiusura con un nuovo test.
- Tenere i piani nel controllo di versione e legarne il riesame alle modifiche sostanziali, e non solo al calendario.
- Misurare servizi e piani, mai persone, e fare di un'esercitazione fallita con buoni riscontri un risultato sicuro e rispettato.

## Riferimenti e letture di approfondimento

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. ISO 22301:2019, *Security and resilience: Business continuity management systems: Requirements*, International Organization for Standardization.
5. ISO 22313:2020, *Security and resilience: Business continuity management systems: Guidance on the use of ISO 22301*, International Organization for Standardization.
6. Rosenthal, C., and Jones, N., *Chaos Engineering: System Resiliency in Practice*, O'Reilly Media, 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning).
9. Wikipedia, [Recovery time objective](https://en.wikipedia.org/wiki/Recovery_time_objective).
10. Wikipedia, [Recovery point objective](https://en.wikipedia.org/wiki/Recovery_point_objective).
11. Wikipedia, [Business impact analysis](https://en.wikipedia.org/wiki/Business_impact_analysis).
12. Wikipedia, [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301).
13. Wikipedia, [Backup](https://en.wikipedia.org/wiki/Backup).
14. Wikipedia, [Chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
