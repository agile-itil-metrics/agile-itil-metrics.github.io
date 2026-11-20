# Metriche di toil e reperibilità

**Un servizio è affidabile solo quanto la rotazione che se ne prende cura, quindi si misurano le interruzioni, il carico notturno e la quota di tempo perduta in lavoro manuale ripetitivo per la rotazione nel suo insieme, e si usano i numeri per finanziare la prevenzione e l'automazione, mai per confrontare le persone.**

## Panoramica e motivazione

L'affidabilità viene spesso descritta in termini del sistema: disponibilità, latenza, tassi di errore. Dietro ogni servizio che ha utenti nel cuore della notte c'è un sistema umano che risponde quando il sistema fallisce. Quel sistema umano ha dei limiti. Una rotazione chiamata troppo spesso, che sveglia troppe persone o che passa la maggior parte della settimana in attività manuali e ripetitive rallenterà, commetterà più errori e alla fine perderà persone. Le altre metriche della Parte 5 possono apparire sane fino al momento in cui le persone che le tengono insieme se ne vanno.

Due idee organizzano questo argomento. La prima è il lavoro di [reperibilità](https://en.wikipedia.org/wiki/On-call) (on-call): una rotazione di persone raggiungibili e pronte a rispondere agli avvisi al di fuori dei normali orari di lavoro. Una **chiamata (page)** è un avviso che interrompe chi risponde, di solito tramite cercapersone, telefonata o notifica push. Un **turno (shift)** è un intervallo di reperibilità, per esempio un giorno, una settimana o una notte. Una **rotazione** è il gruppo di persone che si alternano nei turni. La seconda idea è il **toil**, termine della [site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), la disciplina che gestisce i servizi con metodi di ingegneria del software. Nel libro di Google *Site Reliability Engineering*, il toil è il lavoro operativo legato alla gestione di un servizio in produzione che tende a essere manuale, ripetitivo, automatizzabile, tattico, privo di valore duraturo e in crescita al crescere del servizio. Non equivale al sovraccarico organizzativo come le riunioni, e non è semplicemente un lavoro che qualcuno non ama.

ITIL 4 non ha una pratica chiamata «gestione del toil». Il materiale si distribuisce su diverse pratiche. La [gestione degli incidenti](https://en.wikipedia.org/wiki/Incident_management) e il monitoraggio e la gestione degli eventi producono le chiamate. La gestione dei problemi rimuove le cause che continuano a produrle. La gestione delle richieste di servizio e la gestione dei rilasci producono gran parte del lavoro manuale ripetitivo. La gestione della forza lavoro e dei talenti, e il miglioramento continuo, possiedono il lato umano. La controparte agile è l'accordo di lavoro del team sul lavoro non pianificato e sul ritmo sostenibile, e l'abitudine DevOps per cui il team che costruisce un servizio porta anche una parte del cercapersone.

Le misure qui riguardano carico e sostenibilità. La gestione degli incidenti appartiene ad altri argomenti (si veda l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti» e l'Argomento 3.4 «Metriche degli incidenti maggiori»), così come la qualità dei singoli avvisi (si veda l'Argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi»). Questo argomento si chiede quanto costi alle persone della rotazione mantenere il servizio in funzione, e se quel costo sia sostenibile.

### Perché questo appartiene all'affidabilità

La fatica ha conseguenze operative. La [privazione del sonno](https://en.wikipedia.org/wiki/Sleep_deprivation) degrada il giudizio e i tempi di reazione, e chi risponde ed è stanco all'inizio di un incidente impiega più tempo a diagnosticarlo ed è più propenso a commettere un secondo errore mentre corregge il primo. L'[affaticamento da allarmi](https://en.wikipedia.org/wiki/Alarm_fatigue) è l'effetto correlato di troppi avvisi: le persone smettono di trattare ciascuno come urgente. Il [burnout professionale](https://en.wikipedia.org/wiki/Occupational_burnout) è l'esito a lungo termine di un sovraccarico prolungato, e si manifesta come abbandono, malattia e disimpegno, fenomeni lenti, costosi e difficili da invertire. Un team che misura l'affidabilità del servizio senza misurare la sostenibilità della propria rotazione osserva solo l'effetto e ignora parte della causa.

Questo argomento descrive rotazioni, turni e servizi, e non classifica mai le persone. Una visione ITIL parte dall'incidente e dal servizio, una visione SRE dal costo in tempo-persona e una visione agile dalla capacità per il lavoro pianificato.

## Principi chiave

- **Misurare la rotazione, non la persona.** Riportare il carico per servizio, turno e posizione nella rotazione. Il numero di chiamate di una persona dipende dal turno che le è toccato, e una classifica insegna a nascondere le interruzioni.
- **Contare quando avvengono le interruzioni oltre a quanto durano.** Una chiamata di cinque minuti alle 03:00 può costare una notte di sonno.
- **Definire il toil in modo ristretto e lasciare che sia il team a classificarlo.** Il toil è un tipo specifico di lavoro, non un sinonimo di lavoro sgradito.
- **Trattare il carico come un segnale per investire.** Un volume elevato di chiamate o una quota elevata di toil è evidenza che un servizio, uno strumento o un livello di organico ha bisogno di interventi.
- **Abbinare ogni misura di carico a una misura di qualità.** Meno chiamate è una buona notizia solo se gli incidenti vengono ancora rilevati.
- **Mostrare le distribuzioni e condividere i dati prima con la rotazione.** Un turno medio nasconde una manciata di notti terribili, e le persone reperibili sono i migliori giudici di quanto i numeri corrispondano alla loro esperienza.

## Definizioni delle metriche

La tabella fornisce l'insieme di base. Ogni misura di tempo o di conteggio indica dove inizia e dove finisce e che cosa è escluso. «Fuori orario» deve essere definito una volta per rotazione come finestra scritta in ora locale, inclusi fine settimana e festività, perché le persone di una rotazione distribuita possono avere orari locali diversi.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chiamate per turno | Numero di chiamate consegnate a una rotazione durante un turno | Conteggio delle chiamate consegnate tra l'inizio e la fine del turno, un conteggio per turno, dopo aver unito le chiamate duplicate dello stesso gruppo di avvisi entro 5 minuti (la finestra di unione è un'impostazione del team). Le chiamate di prova e quelle inviate per errore sono escluse. Riportare la mediana e il 90º percentile tra i turni, più il turno più intenso | chiamate per turno | Strumento di chiamata; calendario di reperibilità | Gestione degli incidenti; monitoraggio e gestione degli eventi | Politica sul lavoro non pianificato; ritmo sostenibile | Riesame settimanale, andamento mensile |
| Quota di chiamate fuori orario | Quota di chiamate che arrivano al di fuori della finestra di lavoro scritta | Chiamate consegnate fuori dalla finestra di lavoro / tutte le chiamate consegnate, nel periodo. La finestra è fissata per rotazione in ora locale; le festività contano come fuori finestra | percentuale | Strumento di chiamata; calendario della rotazione | Gestione degli incidenti; monitoraggio e gestione degli eventi | Accordo di lavoro sulla disponibilità | Mensile |
| Tasso di interruzioni notturne | Con quale frequenza un turno include almeno una chiamata nella finestra protetta del sonno | Turni con almeno una chiamata nella finestra protetta del sonno (per esempio dalle 22:00 alle 07:00 ora locale, stabilita dal team) / tutti i turni nel periodo. Una chiamata presa in carico automaticamente senza risposta umana è esclusa | percentuale di turni | Strumento di chiamata; registro delle prese in carico | Gestione degli incidenti; gestione della forza lavoro e dei talenti | Ritmo sostenibile; verifica della salute del team | Mensile |
| Quota di tempo dedicata al toil | Quota del tempo di lavoro di una rotazione speso in toil | Ore che la rotazione registra su lavoro classificato come toil / ore di lavoro totali registrate dalla rotazione, su un mese. Riunioni, formazione e ferie sono escluse sia dal numeratore sia dal denominatore. La classificazione segue le sei caratteristiche del toil, applicate dal team | percentuale del tempo | Campionamento del tempo o etichette delle attività nello strumento di lavoro; riesame della classificazione del team | Miglioramento continuo; gestione dei rilasci; gestione delle richieste di servizio | Quota di lavoro non pianificato; allocazione della capacità nel lavoro pianificato | Mensile, con riesame trimestrale della classificazione |
| Toil per fonte | Distribuzione delle ore di toil tra fonti nominate come riavvii manuali, richieste di accesso, rinnovi di certificati e smistamento dei ticket | Ore di toil per ciascuna fonte / ore di toil totali, elencando le prime cinque fonti e un gruppo «altro». Stesse esclusioni della quota di tempo dedicata al toil | percentuale delle ore di toil per fonte | Campionamento del tempo o etichette delle attività nello strumento di lavoro | Gestione dei problemi; gestione delle richieste di servizio | Backlog delle voci di miglioramento | Trimestrale |
| Tasso di chiamate ripetute | Quota di chiamate causate da una condizione che ha già chiamato la rotazione entro una finestra dichiarata | Chiamate il cui gruppo di avvisi o codice di causa corrisponde a una chiamata precedente entro 30 giorni / tutte le chiamate nel periodo. Un codice di causa è impostato da chi risponde alla chiusura; i codici non impostati sono riportati separatamente | percentuale | Strumento di chiamata; codici di causa dei record degli incidenti | Gestione dei problemi; gestione degli incidenti | Azioni della retrospettiva; backlog del debito tecnico | Mensile |
| Profondità della rotazione | Quanti responsabili qualificati condividono il cercapersone rispetto al numero di ruoli da coprire | Numero di persone che hanno completato la preparazione alla reperibilità e sono disponibili per i turni / numero di posizioni di turno per ciclo di rotazione. Ferie e distacchi riducono la disponibilità. Riportare come rapporto per rotazione, mai per persona | rapporto | Calendario della rotazione; checklist di preparazione | Gestione della forza lavoro e dei talenti | Team interfunzionale; matrice delle competenze | Trimestrale |
| Toil eliminato | Ore di toil ricorrente tolte dal lavoro della rotazione da un'automazione o da una modifica di progettazione | Ore mensili stimate di toil di una fonte prima della modifica meno le stesse dopo la modifica, misurate su almeno due cicli dopo la consegna. Le ore risparmiate da una pulizia una tantum sono escluse | ore al mese | Campionamento del tempo prima e dopo; ticket di miglioramento | Miglioramento continuo; gestione dei problemi | Voce di miglioramento consegnata | Trimestrale |

Un conteggio di chiamate è un conteggio di interruzioni, non di incidenti: un incidente può generare una dozzina di chiamate. La quota di tempo dedicata al toil dipende da una registrazione onesta, quindi trattarla come una stima concordata.

## Raccomandazioni

### Definire i termini prima di contare

**1. Scrivere che cosa conta come chiamata, turno e fuori orario.** I team contano cose diverse sotto la stessa parola. Una chiamata potrebbe essere qualsiasi notifica, solo quelle che raggiungono una persona o solo quelle che richiedono un'azione. Scegliere una definizione, dichiarare la finestra di unione per i duplicati e registrare la finestra di lavoro in ora locale. Senza questo, i numeri cambieranno quando uno strumento viene riconfigurato, e l'andamento sarà fuorviante.

**2. Concordare che cosa sia il toil, con esempi tratti dal proprio servizio.** Partire dalle sei caratteristiche del libro SRE. Scrivere un breve elenco di esempi e non-esempi, come riavviare un job bloccato (toil), progettare un nuovo strumento di ripristino (ingegneria) e una riunione di pianificazione (sovraccarico organizzativo). Rivedere l'elenco quando emergono disaccordi.

**3. Scegliere come misurare la quota di toil, e accettarne i limiti.** Le opzioni economiche sono il campionamento del tempo, le etichette delle attività nello strumento di lavoro e una breve stima quindicinale. Nessuna è esatta, quindi scegliere quella con meno sovraccarico, eseguirla per un trimestre e giudicare l'andamento più del valore assoluto.

### Misurare il carico sulla rotazione

**4. Riportare le chiamate per turno come distribuzione.** Il turno medio nasconde ciò che la rotazione percepisce. Mostrare la mediana, il 90º percentile e il turno più intenso, e aggiungere una nota su che cosa è accaduto in quel turno. Una mediana tranquilla con una coda terribile significa poche notti pessime, che è un problema diverso da una rotazione costantemente occupata. Si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio» per la lettura dei percentili.

**5. Affiancare la tempistica al volume.** La quota di chiamate fuori orario e il tasso di interruzioni notturne mostrano quando il carico si abbatte. Cinque chiamate in orario d'ufficio sono un fastidio; cinque tra mezzanotte e le 05:00 hanno un costo diverso. Mostrare entrambi nella stessa pagina.

**6. Guardare la distribuzione tra i turni, non tra le persone.** Una rotazione in cui un turno ricorrente (per esempio il fine settimana o il passaggio del lunedì) raccoglie la maggior parte delle chiamate richiede una correzione diversa da una in cui il carico è uniforme. Riportare la quota di chiamate per posizione di turno e giorno. Quando i dati sono riportati per persona nominata, aspettarsi che vengano letti come una classifica, quindi non produrre quella vista.

**7. Contare separatamente il carico degli incidenti maggiori.** Un incidente maggiore può generare più interruzioni in una notte di un mese normale. Riportarlo come riga a sé, in modo che un singolo evento non distorca l'andamento (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori»).

### Collegare il carico alle cause e alle correzioni

**8. Collegare le chiamate ai problemi e tracciare le ripetizioni.** Il tasso di chiamate ripetute mostra quanta parte del carico proviene da cause già note. Un tasso di ripetizione elevato è un argomento a favore della gestione dei problemi, non di una risposta più rapida. Alimentare il backlog dei problemi con le principali cause ricorrenti e registrare il collegamento (si veda l'Argomento 4.1 «Metriche di gestione dei problemi» e l'Argomento 4.6 «Debito tecnico ed errori noti»).

**9. Ordinare le fonti di toil e attaccare la maggiore.** Un [diagramma di Pareto](https://en.wikipedia.org/wiki/Pareto_chart) delle ore di toil per fonte mostra di solito poche fonti responsabili della maggior parte del tempo. Scegliere la più grande, decidere se può essere eliminata per progettazione, automatizzata o affidata al team che possiede la causa, e pianificarla come lavoro sulle funzionalità. Preferire eliminare il bisogno all'automatizzare il passaggio, perché un passaggio automatizzato deve comunque essere mantenuto.

**10. Misurare il toil eliminato, non le automazioni scritte.** Un'automazione che nessuno usa non elimina nulla. Misurare le ore di toil prima e dopo, su almeno due cicli, e registrare l'impegno per costruire e mantenere l'automazione. Questo è il ritorno onesto, e impedisce un programma di «automazione» che aggiunge script senza eliminare lavoro. Si veda l'Argomento 3.7 «Metriche di self-service e automazione» per l'adozione dell'automazione da parte degli utenti.

### Mantenere sostenibile il sistema

**11. Fissare i limiti della rotazione in un accordo di team, poi osservare la profondità della rotazione.** Concordare con quale frequenza una persona può essere reperibile, quante notti consecutive sono accettabili e quale riposo segue una notte pessima. La profondità della rotazione mostra se la rotazione ha abbastanza persone qualificate per il limite concordato. Una rotazione nominalmente di otto persone ma di fatto di tre, perché le altre non sono ancora pronte o sono in ferie, non rispetta il limite, qualunque cosa dica il turno.

**12. Usare i numeri per chiedere qualcosa di specifico.** Un numero di carico sostiene una richiesta: una modifica di organico, tempo sottratto al lavoro sulle funzionalità per ridurre il toil, una modifica alle soglie degli avvisi o una dismissione. Indicare la richiesta accanto al numero, altrimenti le persone smetteranno di registrare (si veda l'Argomento 1.4 «Governance e responsabilità delle metriche»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Chiamate per turno | Alzare le soglie degli avvisi o silenziarli così che il conteggio scenda; unire avvisi non correlati in una sola chiamata; spostare le chiamate in una coda di ticket che nessuno guarda | Copertura del rilevamento e incidenti segnalati dai clienti che il monitoraggio ha mancato (si veda l'Argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi»); tempo di rilevamento (si veda l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti») |
| Quota di chiamate fuori orario | Ridefinire la finestra di lavoro come più ampia; riprogrammare job e rilasci in modo che le chiamate si spostino nell'orario d'ufficio senza ridursi; riclassificare le chiamate come «bassa urgenza» | Volume totale di chiamate accanto alla quota; finestra di lavoro scritta sotto controllo delle modifiche; un riesame di ciò che si è spostato |
| Tasso di interruzioni notturne | Ritardare la presa in carico fino al mattino; prendere in carico automaticamente le chiamate; contare solo le chiamate che hanno raggiunto una persona | Tempo di presa in carico per ora (si veda l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»); chiamate senza risposta umana riportate separatamente; impatto sui clienti di notte |
| Quota di tempo dedicata al toil | Riclassificare il toil come «ingegneria» o «lavoro di progetto»; registrare meno di quanto speso; etichettare solo ciò che è facile da descrivere | Un audit periodico degli elementi classificati da parte di qualcuno esterno alla rotazione; la percezione del team su come è stata la settimana; la quota di tempo speso in lavoro di miglioramento pianificato |
| Toil per fonte | Dividere una fonte grande in molte piccole così che nessuna spicchi; lasciare una fonte senza nome in «altro» | Un limite al gruppo «altro» (per esempio meno di un quinto delle ore di toil, un'impostazione del team); campionamento degli elementi di «altro» ogni trimestre |
| Tasso di chiamate ripetute | Chiudere le chiamate con un nuovo codice di causa ogni volta in modo che le corrispondenze sfuggano; allargare i codici di causa finché tutto è distinto; allungare o accorciare la finestra | Audit dei codici di causa su un campione; ricorrenza dello stesso gruppo di avvisi tra gli incidenti (si veda l'Argomento 4.1 «Metriche di gestione dei problemi») |
| Profondità della rotazione | Contare persone che non hanno completato la preparazione; contare persone raramente disponibili; gonfiare il turno | Quota di turni effettivamente coperti dal gruppo nominale; numero effettivo di turni per posizione, riportato senza nomi; completamento della checklist di preparazione |
| Toil eliminato | Contare pulizie una tantum come risparmi ricorrenti; ignorare l'impegno di costruire e mantenere l'automazione; rivendicare risparmi senza un prima e dopo | Ore prima e dopo misurate su due cicli; impegno di manutenzione dell'automazione; quota di tempo dedicata al toil nei trimestri successivi |

Una lettura sana è una rotazione il cui turno mediano è tranquillo e il cui turno peggiore è raro, con poche chiamate di notte, una quota decrescente di chiamate ripetute e una quota di toil che scende perché le fonti sono state eliminate, non perché sono state riclassificate. Mostra anche l'impegno per arrivarci: il lavoro di miglioramento che compare nel piano, finanziato e consegnato. Se i conteggi di chiamate calano mentre i clienti segnalano più incidenti che il monitoraggio non ha intercettato, i numeri migliorano guardando altrove.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Contare le chiamate dallo strumento di chiamata | Automatico, economico e difficile da contestare | Conta le interruzioni, non il loro costo; tarare gli avvisi cambia il conteggio senza cambiare il carico |
| Campionamento del tempo per il toil | Accuratezza ragionevole con impegno modesto | Richiede disciplina; i campioni piccoli sono rumorosi |
| Rendicontazione a livello di rotazione | Corrisponde a come è organizzato il lavoro; sicura da condividere ampiamente | Può nascondere una persona in difficoltà; richiede accanto un canale di conversazione di sostegno |
| Tetto rigido al toil (per esempio l'obiettivo del libro SRE di mantenere il toil sotto il 50 percento del tempo) | Un segnale chiaro che innesca una risposta | Un numero può essere rispettato riclassificando; un tetto richiede il sostegno della direzione |

La tensione centrale è tra accettazione e investimento. È facile trattare un carico elevato come il prezzo normale di un servizio importante e chiedere alle persone di assorbirlo, ed è facile fissare un tetto che nessuno ha il potere di far rispettare. La via d'uscita è abbinare ogni misura a una decisione: una soglia a cui il team si ferma e agisce, un responsabile nominato per l'azione e una data in cui riguardare. I numeri a livello di rotazione sono sicuri e a volte troppo grossolani. Quando qualcuno è in difficoltà, la conversazione appartiene a quella persona e al suo responsabile, usando il suo racconto della settimana.

## Domande da discutere con il team

**1. Com'è stato il nostro turno più intenso dell'ultimo trimestre, e che cosa dicono i numeri al riguardo?**
Partire dalla storia prima del grafico. Chiedere alle persone che erano reperibili di descrivere il turno, poi confrontarlo con i numeri di chiamate per turno e interruzioni notturne. Se i numeri sottostimano l'esperienza, scoprire che cosa manca, come telefonate non registrate o lavoro svolto dopo la chiamata. Raccogliere quell'elenco come prossimo miglioramento della misurazione.

**2. Che cosa diremmo essere toil nel nostro team, e che cosa diremmo non esserlo?**
Mettere su una lavagna cinque o sei attività recenti e chiedere a ciascuno di classificarle come toil, ingegneria o sovraccarico organizzativo rispetto alle sei caratteristiche. Aspettarsi disaccordi, e trattarli come utili: i disaccordi mostrano dove la definizione è vaga. Concordare una definizione di lavoro per il prossimo trimestre e scrivere due esempi di ciascuno. Evitare di dibattere se il lavoro sia piacevole, perché la domanda è se sia manuale, ripetitivo e automatizzabile.

**3. Quale avviso o attività elimineremmo per primo se potessimo?**
Chiedere l'avviso o l'attività ricorrente che tutti temono, poi chiedere che cosa ci impedisce di eliminarlo: il costo della correzione, un responsabile mancante o la convinzione che sia necessario. Il facilitatore dovrebbe cercare il lavoro economico da eliminare il cui responsabile non è presente. Concludere scegliendo una voce per il prossimo ciclo di pianificazione.

**4. Quante persone possono davvero fare un turno oggi, e a quali limiti siamo disposti a impegnarci?**
Contare onestamente la preparazione: chi è formato, chi è disponibile e chi ha vincoli. Confrontare il risultato con la dimensione nominale della rotazione. Chiedere quale frequenza di reperibilità e quale numero di notti consecutive il gruppo consideri accettabili, poi verificare se la prassi attuale li rispetta.

**5. Se dimezzassimo il numero di chiamate entro il prossimo trimestre, come sapremmo di non aver semplicemente smesso di ascoltare?**
Questa domanda riguarda la salvaguardia. Chiedere al gruppo di elencare i modi in cui il conteggio delle chiamate potrebbe calare senza che il servizio migliori, come alzare le soglie, unire gli avvisi o ignorare una fonte. Poi chiedere che cosa vedremmo nelle segnalazioni dei clienti e nelle misure di rilevamento se ciò fosse accaduto. Concordare la salvaguardia e metterla nella stessa pagina del volume.

**6. Chi vede questi numeri, e che cosa vogliamo che ne faccia?**
Ripercorrere il cammino delle misure di carico dalla rotazione ai responsabili e ai dirigenti. Chiedere a quali conclusioni è probabile che arrivi ciascun pubblico, e se qualche vista possa essere letta come una classifica. Concordare la forma che sale: a livello di rotazione, con contesto, con una richiesta allegata. Annotare qualsiasi preoccupazione sulla riconoscibilità delle persone.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna generano gran parte del carico di reperibilità attraverso le modifiche che rilasciano. I team che gestiscono ciò che costruiscono possono vedere il legame tra un rilascio e le chiamate che seguono. Dovrebbero includere toil e lavoro di reperibilità nella pianificazione della capacità, pianificare l'eliminazione del toil come ordinario lavoro di backlog e osservare la qualità delle modifiche accanto alla velocità (si veda l'Argomento 2.8 «Metriche DORA»).

### Team di servizio e operations

I team operativi portano più spesso il cercapersone e vedono per primi il costo umano. Dovrebbero possedere le definizioni, eseguire il campionamento del tempo o l'etichettatura, pubblicare i numeri a livello di rotazione e portare le principali fonti di toil e le cause ripetute ai team responsabili, con evidenze. Il loro rischio è assorbire silenziosamente il carico per professionalità. Un registro calmo e fattuale di notti e settimane è una richiesta di aiuto più efficace di una lamentela, e i registri non dovrebbero mai essere trasformati in una classifica delle persone che hanno risposto.

### Leadership e governance

I dirigenti decidono organico, priorità e se il lavoro sul toil sia finanziato. Un dirigente che legge una quota elevata di toil come prestazione scadente insegna al team ad abbassarla rietichettando. Un dirigente che la legge come il conto di un lavoro che l'organizzazione ha scelto di non finanziare ottiene dati onesti e un piano. La governance dovrebbe aspettarsi un limite al carico della rotazione e una risposta visibile quando viene superato (si veda l'Argomento 9.2 «Metriche di soddisfazione e benessere»).

### Clienti e utenti

Gli utenti non vedono la rotazione, ma ne sentono gli effetti: una diagnosi più lenta da parte di chi risponde stanco, incidenti ripetuti da cause non risolte e la partenza di persone che conoscevano il servizio. Dove gli utenti si estendono su molti fusi orari, le loro esigenze fuori orario modellano la rotazione, e il costo di coprirle è un argomento legittimo per una conversazione sul livello di servizio (si veda l'Argomento 5.1 «Metriche SLA, OLA e XLA»).

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni gestisce una piattaforma ordini, un servizio account dei clienti e un'integrazione con il magazzino. Una rotazione di sei ingegneri di due team di prodotto e di un piccolo gruppo operativo condivide un turno settimanale di reperibilità. Tutti i numeri di questo esempio sono illustrativi.

Il riesame mensile mostra una mediana di 9 chiamate per turno e un 90º percentile di 31. Il turno più intenso ha avuto 58 chiamate. Circa metà di tutte le chiamate arriva fuori orario, e 6 degli 8 turni del trimestre includevano una chiamata tra le 22:00 e le 07:00. Il campionamento del tempo suggerisce che il toil occupi il 55 percento del tempo di lavoro.

Il turno più intenso ha coinciso con la scadenza di un certificato sull'integrazione con il magazzino, che ha chiamato la rotazione 22 volte in una notte. Un avviso sullo spazio su disco di un server batch rappresenta quasi un quarto delle chiamate, e la maggior parte è stata chiusa svuotando a mano una directory temporanea. Il tasso di chiamate ripetute è del 41 percento. Una vista di Pareto mostra che rinnovi manuali dei certificati, pulizia del disco e richieste di accesso occupano la maggior parte delle ore di toil.

Il team porta tre voci nelle prossime quattro settimane: automatizzare il rinnovo dei certificati, correggere la causa della directory temporanea piena e spostare le richieste di accesso su un modulo self-service di proprietà del team di identità. Un accordo di lavoro fissa un limite di un turno su quattro per persona e un giorno di riposo dopo una notte con tre o più chiamate. La profondità della rotazione è di 6 persone per un bisogno concordato di 8, quindi due ingegneri di un terzo team iniziano la formazione di preparazione.

Un rischio di manipolazione emerge al riesame successivo. Le chiamate per turno sono scese a una mediana di 4, e il 90º percentile a 12. Un dirigente è soddisfatto. Un membro del team fa notare che la soglia dell'avviso sul disco è stata alzata di 20 punti e che il server batch si è riempito due volte senza alcuna chiamata. Gli incidenti segnalati dai clienti sugli ordini batch in ritardo sono aumentati. La salvaguardia, gli incidenti segnalati dai clienti che il monitoraggio ha mancato, lo ha individuato. La modifica della soglia viene annullata, la pulizia della directory viene pianificata come correzione e il team aggiunge una regola per cui ogni modifica di soglia è registrata con la sua motivazione e riesaminata dopo un mese. La quota di toil del trimestre successivo è del 38 percento (illustrativo) ed è riportata con accanto il metodo di campionamento.

## Lente di settore

**Startup.** Un piccolo team spesso non ha una rotazione formale, quindi tutti sono reperibili sempre e il costo è invisibile. Contare chiamate e risvegli notturni in un foglio di calcolo e scrivere le tre maggiori attività ripetitive. I fondatori che portano personalmente il cercapersone sono un rischio d'impresa, non un segno di impegno.

**Piccola impresa.** Una o due persone possono gestire tutto l'IT. Misurare ciò che non richiede strumenti: chiamate fuori orario, attività che si ripetono e ferie che non si possono prendere. Un fornitore di servizi gestiti può farsi carico di parte della rotazione se il contratto indica tempi di risposta e orari. La profondità della rotazione è spesso pari a uno, il che è il rischio principale.

**Grande impresa.** La scala porta rotazioni follow-the-sun, piattaforme condivise e più fornitori. Definire le misure una volta, fissare finestre di lavoro locali per regione ed evitare medie tra rotazioni con servizi molto diversi. Le norme sul lavoro di alcuni paesi limitano l'obbligo di reperibilità e impongono periodi di riposo, e questi appartengono ai limiti della rotazione.

**Governo e settore pubblico.** I servizi possono richiedere una copertura continua per legge o contratto, e l'organico è vincolato da appalti e inquadramenti. I limiti della rotazione e le regole di riposo sono spesso disciplinati da accordi di lavoro, quindi misurare rispetto ad essi e riferire quando vengono superati. La responsabilità pubblica rende la rendicontazione sincera più preziosa e più difficile: costruire un canale sicuro per i dati di carico ed essere espliciti che descrivono il sistema e l'organico, non le persone (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

La motivazione è proteggere la qualità del servizio e trattenere le persone qualificate. Chi risponde stanco diagnostica più lentamente, e quando le persone esperte se ne vanno, la conoscenza se ne va con loro. Sostituire una persona ha costi reali in selezione, inserimento e produttività ridotta durante l'apprendimento, e un'organizzazione può stimare tali costi dai propri record. Il toil sottrae inoltre capacità al miglioramento. Un team che passa la maggior parte del tempo in operazioni manuali non può ridurre gli incidenti che le causano.

Il costo delle misure è modesto. Lo strumento di chiamata conta già le chiamate, e il campionamento del tempo costa pochi minuti per persona ogni quindici giorni. Il costo maggiore è agire sui riscontri: tempo di ingegneria per eliminare il toil, organico per una rotazione sostenibile e tempo di riesame. Contare la manutenzione dell'automazione come costo, perché un passaggio automatizzato non mantenuto diventa l'incidente di domani.

Il ritorno si manifesta come meno chiamate da cause note, meno interruzioni notturne, ore di toil restituite al lavoro di miglioramento, minore abbandono della rotazione e diagnosi più rapida. Nessuna cifra universale si applica, quindi stimare la propria. Per una fonte di toil, moltiplicare le ore mensili per un costo orario complessivo concordato con la finanza, confrontarlo con l'impegno per eliminarla e riesaminare dopo due cicli. Per la sostenibilità della rotazione, registrare partenze e lunghe assenze dalla rotazione e confrontarle nel tempo con le misure di carico, trattando il legame come un'ipotesi da verificare, non come una causa provata. Dove serve una cifra, dichiararla come stima e mostrare gli input (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Classificare le persone in base alle chiamate.** Trasforma una misura di sistema in un punteggio di prestazione e insegna a chi risponde a evitare i turni e a nascondere le interruzioni. Riportare per rotazione, posizione di turno e servizio.
- **Ridurre le chiamate silenziando gli avvisi.** Il conteggio cala e il rilevamento si indebolisce. Abbinare il volume al rilevamento e agli incidenti segnalati dai clienti, e riesaminare ogni modifica di soglia.
- **Chiamare toil ogni cosa.** Una definizione così ampia da includere riunioni e problemi difficili distrugge il segnale. Usare le sei caratteristiche e tenere un elenco di esempi.
- **Un obiettivo di toil senza autorità alle spalle.** Un tetto che non può innescare una decisione diventa un numero su cui si discute. Concordare in anticipo che cosa accade quando viene superato e chi decide.
- **Automatizzare prima di capire.** L'automazione può incorporare un processo scadente e aggiungere manutenzione. Chiedersi prima se il bisogno possa essere eliminato per progettazione, e misurare poi il toil eliminato.
- **Mediare tra servizi dissimili.** Una media tra un servizio stabile e uno fragile non descrive nessuno dei due. Mostrare separatamente ogni servizio e rotazione.
- **Misurare e non agire.** Numeri di carico senza risposta insegnano alle persone che i dati non contano. Allegare una decisione, un responsabile e una data di riesame a ogni riscontro.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizioni e dati | Chiamate e toil descritti a sensazione; nessuna definizione comune | Alcune rotazioni contano le chiamate; il toil è discusso ma non misurato | Una definizione scritta di chiamata, turno, fuori orario e toil; dati di chiamata raccolti dallo strumento | Distribuzioni e tempistiche tracciate nel tempo; toil campionato ogni mese e verificato | Definizioni riesaminate tra team e fornitori; impegno di campionamento adeguato al valore delle risposte |
| Sostenibilità della rotazione | Informale; sempre le stesse poche persone assorbono il cercapersone | Esistono turni; limiti discussi ma non scritti | Limiti scritti su frequenza e riposo; profondità della rotazione nota | Limiti monitorati e violazioni riesaminate con azioni | Rotazioni condivise tra team e fornitori, e carico bilanciato al mutare dei servizi |
| Uso dei numeri | Usati per incolpare o ignorati | Mostrati ai responsabili | Mostrati prima alla rotazione, con le decisioni che sostengono | Abbinati a salvaguardie e riesaminati con una cadenza che porta a cambiamenti finanziati | Condivisi con dirigenti e partner per pianificare organico e ambito del servizio |

## Checklist

- [ ] Chiamata, turno, finestra fuori orario e finestra di unione sono definiti per iscritto.
- [ ] Il toil ha una definizione scritta con esempi e non-esempi tratti dal nostro servizio.
- [ ] Le chiamate per turno sono riportate come mediana, percentile elevato e turno più intenso.
- [ ] Quota di chiamate fuori orario e tasso di interruzioni notturne sono riportati accanto al volume.
- [ ] Il carico è riportato per rotazione, posizione di turno e servizio, mai per persona nominata.
- [ ] La quota di tempo dedicata al toil è campionata secondo calendario, con il metodo scritto.
- [ ] Le prime cinque fonti di toil e le principali cause di chiamate ripetute sono nel backlog di miglioramento.
- [ ] Limiti della rotazione e regole di riposo sono in un accordo di team, e la profondità della rotazione è verificata ogni trimestre.
- [ ] Ogni misura di carico ha una salvaguardia nella stessa pagina, compresi rilevamento e incidenti segnalati dai clienti.
- [ ] Ogni riesame si conclude con una decisione, un responsabile e una data.
- [ ] Le modifiche a soglie e avvisi sono registrate con una motivazione e riesaminate dopo un mese.

## Prompt IA

**Esaminare il carico di una rotazione e cercare schemi.**

```text
Contribuisco a gestire la rotazione di reperibilità per [servizio o gruppo di
servizi]. La rotazione ha [numero] persone e una durata del turno di [durata].
La nostra finestra di lavoro è [orari e fuso orario], e la nostra finestra
protetta del sonno è [orari]. Di seguito i dati di chiamata anonimizzati per
[periodo], con le colonne [elenco delle colonne]:

[incollare i dati con i nomi rimossi]

Descrivi la distribuzione delle chiamate per turno, la quota di chiamate fuori
orario e la quota di turni con un'interruzione notturna. Indica i turni più
intensi, i gruppi di avvisi ricorrenti ed eventuali schemi per giorno o
posizione di turno. Riporta solo a livello di rotazione e servizio, mai per
persona. Non inventare valori di riferimento né obiettivi. Elenca le tue
ipotesi e ciò che non hai potuto determinare dai dati.
```

**Classificare le attività come toil, ingegneria o sovraccarico organizzativo.**

```text
Il nostro team gestisce [servizio]. Definiamo il toil come lavoro manuale,
ripetitivo, automatizzabile, tattico, privo di valore duraturo e in crescita
con il servizio. Ecco un elenco di attività recenti con ore approssimative:
[incollare l'elenco].

Per ciascuna attività, dì se rientra in toil, ingegneria o sovraccarico
organizzativo, e indica quali delle sei caratteristiche soddisfa o non
soddisfa. Segnala le attività borderline e dì quali informazioni aggiuntive le
risolverebbero. Suggerisci come ciascuna fonte di toil potrebbe essere
eliminata per progettazione, automatizzata o affidata a un team responsabile,
senza inventare risparmi. Elenca le tue ipotesi e le domande per il team.
```

**Redigere vettori di manipolazione e salvaguardie per le nostre metriche di carico.**

```text
Riportiamo queste metriche di reperibilità e toil per [nome della rotazione]:
[elenco delle metriche con definizioni]. Sono mostrate a [pubblico] per
supportare [decisione]. I nostri dati provengono da [strumento di chiamata,
strumento di lavoro, sondaggio].

Per ciascuna metrica, elenca modi realistici in cui potrebbe migliorare senza
che la rotazione stia meglio, e proponi una metrica o pratica di salvaguardia
che rivelerebbe ciascuno di essi. Poi dì come la salvaguardia stessa potrebbe
essere manipolata. Non inventare valori di riferimento. Elenca le tue ipotesi
e le definizioni che dovrei rendere più rigorose.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per individuare gli argomenti correlati e le salvaguardie quando si aggiunge una misura di reperibilità o di toil a una dashboard.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che le modifiche a questo argomento mantengano ogni metrica abbinata a un vettore di manipolazione e a una salvaguardia.

## Punti chiave

- Misurare il carico sulla rotazione, per turno, servizio e ora del giorno, e non classificare mai le persone che ne fanno parte.
- Contare quando avvengono le interruzioni oltre a quante sono, perché le chiamate notturne costano più di quelle in orario d'ufficio.
- Definire il toil in modo ristretto usando le sue sei caratteristiche, stimarne la quota di tempo con un metodo semplice e giudicare l'andamento.
- Collegare chiamate e fonti di toil al lavoro sui problemi e a modifiche di automazione o di progettazione, e misurare il toil effettivamente eliminato.
- Abbinare ogni misura di carico a una salvaguardia come rilevamento e incidenti segnalati dai clienti, così che numeri più bassi non possano essere comprati guardando altrove.
- Trattare un carico pesante come una richiesta di investimento, con una decisione, un responsabile e una data di riesame.

## Riferimenti e letture di approfondimento

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Eliminating Toil", https://sre.google/sre-book/eliminating-toil/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Being On-Call", https://sre.google/sre-book/being-on-call/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018. Chapter "Eliminating Toil", https://sre.google/workbook/eliminating-toil/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
7. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
8. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
9. Wikipedia, [Sleep deprivation](https://en.wikipedia.org/wiki/Sleep_deprivation).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
12. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
