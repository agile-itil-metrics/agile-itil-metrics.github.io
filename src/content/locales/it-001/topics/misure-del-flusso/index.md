# Misure del flusso

**Quattro semplici conteggi e cronometri, lavoro in corso, throughput, età dell'elemento di lavoro e cycle time, dicono a un team dove il suo lavoro è bloccato e che cosa può promettere, a condizione che ciascuno sia definito allo stesso modo per il lavoro di progetto e per il lavoro di servizio e sia letto come distribuzione anziché come media.**

## Panoramica e motivazione

La maggior parte delle dashboard di consegna e di servizio riporta ciò che si è concluso il mese scorso. Le misure del flusso aggiungono la vista che conta mentre il lavoro è ancora in movimento: quanto è in corso in questo momento, quanto è vecchio ciascun elemento, con quale rapidità gli elementi si concludono e quanto tempo richiedono. La letteratura sul flusso dà a queste quattro misure definizioni precise. La Kanban Guide (kanbanguides.org, versione corrente a ottobre 2026) è una fonte chiara: le indica come le misure che un team usa per ispezionare e adattare il proprio flusso di lavoro, e questo argomento segue tali definizioni senza richiedere alcun metodo o lavagna in particolare.

Le quattro definizioni sono brevi. Il **lavoro in corso (WIP, work in progress)** è il numero di elementi di lavoro che sono iniziati ma non conclusi. Il **throughput** è il numero di elementi di lavoro conclusi per unità di tempo. L'**età dell'elemento di lavoro** è il tempo trascorso tra l'inizio di un elemento di lavoro e l'istante corrente, perciò si applica solo agli elementi ancora in corso. Il **cycle time** è il tempo trascorso tra l'inizio e la conclusione di un elemento di lavoro, contando entrambi i giorni in modo inclusivo secondo la formulazione della Guide. Un **elemento di lavoro** è un'unità di lavoro che il team ha scelto di tracciare come un'unica cosa, come una user story, un incidente, una richiesta di servizio o una modifica. Un **flusso di lavoro** è l'insieme degli stati tra «iniziato» e «concluso», e la **definizione del flusso di lavoro** scritta dal team dice quali sono tali stati.

Due delle quattro riguardano il sistema nel suo complesso (WIP e throughput) e due riguardano i singoli elementi (età e cycle time). La coppia per gli elementi conclusi è throughput e cycle time. La coppia per gli elementi non conclusi è WIP ed età. Questa distinzione conta perché le misure sugli elementi conclusi sono posticipate: dicono come sono andate le cose. Le misure sugli elementi non conclusi sono anticipatrici: dicono che cosa sta per accadere, quando c'è ancora tempo per agire. L'età dell'elemento di lavoro è la meno sfruttata delle quattro, ed è di solito la prima che vale la pena aggiungere a una lavagna.

La relazione tra le prime tre non è casuale. La [legge di Little](https://en.wikipedia.org/wiki/Little%27s_law), un risultato della [teoria delle code](https://en.wikipedia.org/wiki/Queueing_theory), afferma che in un sistema stabile il numero medio di elementi nel sistema è uguale al tasso medio di arrivo moltiplicato per il tempo medio che ciascun elemento vi trascorre. In termini di flusso, il WIP medio è legato al throughput medio e al cycle time medio. La legge vale solo a condizioni su cui l'argomento ritorna nelle Raccomandazioni (vedi Argomento 2.3 «Lavoro in corso e code» per la trattazione completa). La conseguenza pratica è semplice: se il throughput resta pressoché costante, più lavoro in corso significa cycle time più lunghi.

Le visioni agile e ITIL qui si incontrano con vocabolari diversi. Nella pratica agile le misure di flusso appartengono alla lavagna del team e sono usate in una revisione periodica con gli stakeholder e nella riflessione del team su come migliorare. In ITIL 4 gli stessi numeri descrivono come la gestione degli incidenti, la gestione delle richieste di servizio e l'abilitazione delle modifiche facciano avanzare i record attraverso gli stati, e alimentano la pratica di misurazione e rendicontazione e la gestione dei livelli di servizio. Un incidente è un elemento di lavoro. Una richiesta di servizio è un elemento di lavoro. Entrambi hanno un inizio, una fine e un'età nel mezzo. Il service desk ITIL e il team di consegna svolgono lo stesso tipo di lavoro dal punto di vista della misurazione: gli elementi arrivano, attendono, vengono lavorati e se ne vanno.

Le misure si collegano anche allo [sviluppo software lean](https://en.wikipedia.org/wiki/Lean_software_development), che considera l'attesa la principale fonte di spreco, e al [diagramma di flusso cumulativo](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), un grafico degli arrivi e delle partenze cumulati che mostra a colpo d'occhio WIP, throughput e cycle time. Il grafico è facoltativo. Le quattro misure possono essere calcolate da una tabella di elementi con due date ciascuno.

Poiché il cycle time e l'età sono durate con una lunga coda destra, una singola media induce in errore. Un [percentile](https://en.wikipedia.org/wiki/Percentile) come l'85° dice a un team «l'85 percento degli elementi si conclude entro questo numero di giorni», che è una previsione utilizzabile e una promessa utilizzabile (vedi Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»). La letteratura sul flusso chiama una simile promessa **aspettativa di livello di servizio (SLE, service level expectation)**: quanto tempo dovrebbe richiedere un elemento tipico, espresso come tempo e probabilità. Una SLE è una previsione del team su se stesso. Non è un [accordo sul livello di servizio](https://en.wikipedia.org/wiki/Service-level_agreement), che è un impegno negoziato con un cliente (vedi Argomento 5.1 «Metriche SLA, OLA e XLA»).

## Principi chiave

- **Si contino elementi interi che rispondono a un'unica definizione di iniziato e concluso.** Dividere o unire gli elementi per migliorare un numero distrugge la comparabilità. Si concordi che cosa sia un elemento di lavoro e si mantenga stabile la definizione.
- **Si definiscano i cronometri prima di raccogliere i dati.** Cycle time ed età dipendono da quale stato significhi «iniziato» e quale «concluso». Si scrivano entrambi e si registri ogni loro modifica (vedi Argomento 1.5 «Fonti dei dati e strumentazione»).
- **Si guardi prima al lavoro non concluso.** Età e WIP sono le sole misure che possono ancora cambiare un esito. Throughput e cycle time confermano ciò che è già accaduto.
- **Si riportino distribuzioni, non medie.** Si mostrino i percentili per cycle time ed età e una serie di conteggi settimanali per il throughput, così che la forma della variazione sia visibile.
- **Si usino le misure per gestire il flusso di lavoro, non le persone.** L'unità di analisi è il flusso di lavoro del team. Non si classifichino mai le singole persone per elementi conclusi o per cycle time.
- **Si limiti il WIP per rendere prevedibile il flusso.** Un limite di WIP è una politica, non un obiettivo. Il limite esiste per far emergere le code e accorciare il cycle time.
- **Si separi il tempo di flusso dall'accuratezza della pianificazione.** Le misure di flusso descrivono come si muove il lavoro. Da sole non dicono nulla sul fatto che sia stato scelto il lavoro giusto (vedi Argomento 1.3 «Risultati prima della produzione: scegliere cosa misurare»).

## Definizioni delle metriche

Ogni riga conta gli elementi nel flusso di lavoro di un solo team. Gli elementi ancora in corso sono esclusi da cycle time e throughput, e gli elementi conclusi sono esclusi da età e WIP.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lavoro in corso (WIP) | Elementi di lavoro iniziati ma non conclusi | Conteggio degli elementi il cui timestamp di inizio è impostato e il cui timestamp di conclusione è vuoto, in un momento dichiarato (per esempio la fine di ogni giorno); gli elementi di backlog non ancora iniziati e gli elementi conclusi sono esclusi | elementi | Cronologia degli stati dell'issue tracker o dello strumento ITSM | Gestione degli incidenti; gestione delle richieste di servizio; abilitazione delle modifiche | Limite di WIP; backlog del team in corso | Istantanea giornaliera, rivista settimanalmente |
| Throughput | Elementi di lavoro conclusi per unità di tempo | Conteggio degli elementi il cui timestamp di conclusione ricade nel periodo (per esempio una settimana di calendario, da lunedì a domenica); gli elementi conclusi e poi riaperti contano di nuovo solo se sono nuovi elementi | elementi a settimana | Cronologia degli stati dell'issue tracker o dello strumento ITSM | Gestione degli incidenti; evasione delle richieste di servizio | Throughput; elementi completati | Settimanale |
| Età dell'elemento di lavoro | Tempo trascorso da un elemento non concluso in corso di lavorazione | Ora corrente meno il timestamp di inizio, per gli elementi ancora in corso; il cronometro scorre durante il tempo di blocco; gli elementi non ancora iniziati sono esclusi | giorni | Cronologia degli stati dell'issue tracker o dello strumento ITSM | Gestione degli incidenti; gestione dei problemi | Età dell'elemento di lavoro; check-in giornaliero del team | Giornaliera, rivista a ogni check-in del team |
| Cycle time | Tempo trascorso dall'inizio alla conclusione di un elemento concluso | Timestamp di conclusione meno timestamp di inizio, in giorni di calendario, inclusivo; il cronometro parte al primo passaggio in uno stato di inizio e si ferma al passaggio in uno stato di conclusione; si riportino la mediana e l'85° e il 95° percentile | giorni | Cronologia degli stati dell'issue tracker o dello strumento ITSM | Gestione degli incidenti; evasione delle richieste di servizio; abilitazione delle modifiche | Cycle time; durata dell'elemento | Settimanale, con una finestra mobile da 8 a 12 settimane |
| Conseguimento della SLE | Quota degli elementi conclusi che hanno rispettato l'aspettativa di livello di servizio del team | Elementi conclusi con cycle time pari o inferiore alla SLE / tutti gli elementi conclusi nella finestra; gli elementi ancora aperti sono esclusi | percentuale | Derivata dal cycle time | Gestione dei livelli di servizio | Aspettativa di livello di servizio | Mensile |
| Quota di tempo bloccato | Quota dei giorni in corso che gli elementi hanno trascorso segnalati come bloccati | Giorni-elemento in stato bloccato / giorni-elemento in corso, sulla finestra; il cronometro per entrambi parte al timestamp di inizio | percentuale | Flag dell'issue tracker o stato di blocco nello strumento ITSM | Gestione degli incidenti; gestione dei problemi; gestione dei fornitori | Blocchi; impedimenti sollevati nei check-in giornalieri del team | Settimanale |

Il cycle time qui segue la definizione della letteratura sul flusso. Si distingue dall'idea ITIL di tempo di risoluzione, che spesso è misurato dal momento in cui un ticket viene aperto e può escludere il tempo in sospeso. Un team che vuole confrontare entrambi deve etichettarli, e l'argomento 2.2 tratta i cronometri in dettaglio (vedi Argomento 2.2 «Lead time, cycle time ed efficienza del flusso»). Il conseguimento della SLE e la quota di tempo bloccato derivano dalle quattro misure di base e sono incluse perché sono il modo in cui un team usa quelle misure giorno per giorno.

## Raccomandazioni

### Definire il flusso di lavoro e gli elementi

**1. Si scriva la definizione del flusso di lavoro prima di tracciare qualsiasi grafico.** Si elenchino gli stati, si dica quale significhi «iniziato» e quale «concluso» e si dichiari chi può spostare un elemento tra di essi. La letteratura sul flusso la chiama definizione del flusso di lavoro, e ogni misura di questo argomento ne dipende. Se due team definiscono «iniziato» in modo diverso, i loro cycle time non possono essere confrontati.

**2. Si scelga una dimensione dell'elemento di lavoro che il team possa concludere in giorni, non in mesi.** Un elemento di lavoro è ciò che il team traccia come un'unica unità: una story, un incidente, una richiesta. Elementi molto grandi nascondono la propria età e rendono il throughput discontinuo. Si usi una regola stabile come «un elemento è una cosa che un cliente o un utente potrebbe notare» e si evitino divisioni degli elementi al solo scopo di migliorare un conteggio.

**3. Si tratti il lavoro di progetto e il lavoro di servizio come lo stesso tipo di flusso, con schemi di arrivo diversi.** Il lavoro di progetto arriva come un backlog pianificato da cui il team attinge. Il lavoro di servizio, come incidenti e richieste, arriva in modo imprevedibile e può prevalere sul lavoro pianificato. Si misurino entrambi sulla stessa lavagna o nelle stesse tabelle, etichettati per tipo, così da vedere come le interruzioni incidano sul lavoro pianificato (vedi Argomento 2.9 «Lavoro operativo e lavoro non pianificato»).

### Misurare il lavoro non concluso

**4. Si parta dall'età dell'elemento di lavoro sulla lavagna.** Si contrassegni ogni scheda con la sua età in giorni e si ordini o si evidenzi per fasce di percentile ricavate dalla storia dei cycle time del team stesso. Un elemento più vecchio dell'85° percentile dei cycle time passati è un segnale per chiedersi che cosa lo stia bloccando oggi. Ciò trasforma una misura posticipata in uno stimolo quotidiano.

**5. Si conti il WIP con onestà e si fissi un limite che si possa difendere.** Si conti ogni elemento iniziato e non concluso, compreso il lavoro in attesa di una revisione o di un fornitore. Si scelga un limite iniziale a partire dal WIP medio attuale del team e lo si abbassi gradualmente, annotando che cosa cambia in cycle time ed età. Si tratti il limite come una politica che il team ispeziona e si usi la legge di Little solo come controllo di plausibilità sulle medie (vedi Argomento 2.3 «Lavoro in corso e code»).

**6. Si mostri il lavoro bloccato come tempo, non come flag.** Un flag di blocco che nessuno conta diventa una scusa. Si registri quando un elemento è stato bloccato e quando è stato liberato e si riporti la quota di tempo bloccato. Si tenga in corso il cronometro dell'elemento durante il blocco, perché l'attesa del cliente non si ferma (vedi Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti», dove gli stati di sospensione di ITIL pongono la stessa domanda).

### Misurare il lavoro concluso

**7. Si riporti il cycle time come distribuzione con percentili.** Si mostrino la mediana, l'85° percentile e il 95° percentile e si tracci ogni elemento concluso come un punto nel tempo (un diagramma a dispersione), così che il team possa vedere gruppi e valori anomali. Si dichiari la finestra, per esempio le ultime 10 settimane. Una media nasconde la lunga coda che i clienti avvertono.

**8. Si riporti il throughput come serie settimanale, non come totale singolo.** Si tracci il conteggio degli elementi conclusi per settimana come [grafico di andamento](https://en.wikipedia.org/wiki/Run_chart) o come [carta di controllo](https://en.wikipedia.org/wiki/Control_chart). I conteggi settimanali variano in modo naturale, perciò si leggano i cambiamenti rispetto a tale variazione prima di reagire e non si confronti mai il throughput di due team come classifica di prestazione, perché dimensioni e definizioni degli elementi differiscono (vedi Argomento 2.5 «Metriche di previsione e pianificazione della consegna»).

**9. Si fissi un'aspettativa di livello di servizio a partire dai propri dati e la si riveda.** Si prendano i cycle time del team delle ultime settimane, si scelga una probabilità con cui il team possa convivere e si legga il numero di giorni dal percentile. La si pubblichi come «l'85 percento degli elementi si conclude in 9 giorni o meno», usando valori reali tratti dai propri dati. La si riveda quando il flusso di lavoro cambia. Una SLE è una previsione che il team fa su se stesso, perciò la si tenga separata dagli obiettivi contrattuali.

### Usare le misure

**10. Si usino tutte e quattro insieme e si pongano le stesse quattro domande a ogni check-in del team.** Che cosa è in corso, ed è entro il limite? Quali sono gli elementi più vecchi e che cosa li sbloccherebbe? Quanti ne abbiamo conclusi, ed è nel consueto intervallo? Quanto tempo hanno richiesto i più recenti rispetto alla nostra aspettativa? Le quattro domande sostituiscono un rapporto di stato e richiedono pochi minuti.

**11. Si applichino le stesse misure alle code di servizio, con un confine chiaro per il cronometro.** Per incidenti e richieste, «iniziato» potrebbe essere la prima assegnazione a una persona o a un team, mentre il cronometro di risoluzione ITIL parte alla registrazione. Entrambi sono validi e rispondono a domande diverse: quanto è reattiva l'accettazione e quanto tempo richiede il lavoro vero e proprio. Si nomini ciascun cronometro e non li si mescoli in un unico grafico (vedi Argomento 3.5 «Metriche di evasione delle richieste di servizio»).

**12. Si modifichi il flusso di lavoro, poi si misuri di nuovo e si conservi la storia.** Quando il team cambia un limite di WIP, uno stato o una politica, si registrino la data e la motivazione e si segni la modifica sui grafici. Uno spostamento del cycle time dopo una modifica è evidenza del suo effetto. Uno spostamento senza modifica registrata è un motivo per sospettare dello strumento di misura (vedi Argomento 1.4 «Governance e responsabilità delle metriche»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Lavoro in corso (WIP) | Tenere gli elementi nel backlog o in una colonna «pronto» fino all'ultimo momento, così che non siano contati come iniziati; chiudere e riaprire gli elementi; nascondere il lavoro fuori dalla lavagna | Riconciliare gli elementi della lavagna con le richieste ricevute; campionare la lavagna rispetto al lavoro effettivo del team; monitorare l'età degli elementi nella prima colonna |
| Throughput | Dividere gli elementi in pezzi minuscoli; chiudere gli elementi prima che siano finiti; scegliere prima gli elementi facili | Osservare la distribuzione delle dimensioni degli elementi e il tasso di riapertura; contare i difetti sfuggiti e gli incidenti collegati agli elementi recenti; rivedere il mix dei tipi di lavoro conclusi |
| Età dell'elemento di lavoro | Spostare un elemento stantio in «fatto» o in un nuovo stato per azzerare il cronometro; annullare in silenzio i vecchi elementi; creare una copia nuova di un vecchio elemento | Verificare i passaggi di stato all'indietro e gli elementi annullati; riportare gli elementi annullati e la loro età; controllare i duplicati creati in prossimità del limite di età |
| Cycle time | Far partire il cronometro in ritardo spostando gli elementi in «in corso» solo quando il lavoro è quasi finito; fermarlo in anticipo segnando gli elementi come fatti prima della revisione o del rilascio | Confrontare l'ora di inizio con il primo commit o la prima attività; riportare il tempo tra «fatto» e rilascio; campionare gli elementi conclusi per verificare il vero completamento |
| Conseguimento della SLE | Fissare una SLE generosa; escludere gli elementi difficili come «speciali»; chiudere gli elementi per restare sotto il limite | Mantenere la SLE a un percentile dei dati passati e rivederla ogni trimestre; riportare gli elementi esclusi e la ragione; leggere il 95° percentile e gli elementi aperti più vecchi |
| Quota di tempo bloccato | Non segnalare mai i blocchi, così che la quota appaia bassa; segnalare tutto come bloccato per spiegare il ritardo | Confrontare la quota di blocco con l'età degli elementi in corso; rivedere i motivi dei blocchi per categoria; campionare gli elementi bloccati per verificare ciascun motivo |

Una lettura sana mostra il WIP al limite o al di sotto nella maggior parte dei giorni, l'età per lo più sotto l'85° percentile dei cycle time passati e un throughput che varia entro un intervallo stabile da una settimana all'altra. I percentili del cycle time sono stabili o in calo, il conseguimento della SLE si colloca vicino alla probabilità scelta dal team e il tempo bloccato ha cause nominate su cui qualcuno sta lavorando. Quando un numero sembra troppo bello, ci si chieda se il cronometro si sia spostato o se la definizione sia cambiata prima di festeggiare.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Misure di flusso (WIP, throughput, età, cycle time) | Semplici, indipendenti dagli strumenti e basate su conteggi e date; supportano la previsione probabilistica | Richiedono definizioni coerenti e timestamp puliti; non dicono nulla su valore o qualità |
| Misure basate su stime come gli story point | Includono una visione di sforzo e complessità; si adattano al lavoro pianificato | Soggettive e specifiche del team; non confrontabili tra team |
| Metriche di servizio basate su medie come il tempo medio di risoluzione | Facili da calcolare e da spiegare | Distorte da valori anomali e asimmetria; nascondono la lunga coda |
| Cycle time e SLE basati su percentili | Riflettono ciò che i clienti sperimentano; supportano una promessa chiara | Richiedono abbastanza storia; più difficili da spiegare a chi è abituato alle medie |
| Un'unica definizione a livello di organizzazione di «iniziato» e «concluso» | Consente l'aggregazione e il confronto | Si adatta male ad alcuni team; può spingere i team verso stati artificiali |

Si scelga la misura più semplice che serva alla decisione in corso. Le misure di flusso funzionano bene per un team che attinge il lavoro e può concludere gli elementi in giorni. Si adattano meno bene quando gli elementi richiedono mesi, quando un elemento varia enormemente di dimensione o quando la maggior parte del valore sta nella scoperta e non nella consegna.

## Domande da discutere con il team

**1. Quale stato significa «iniziato» per noi e quale «concluso», e tutti concordano?**
Si metta la lavagna sullo schermo e si chieda a ciascuno di indicare il primo e l'ultimo stato del cronometro. Si annotino i disaccordi, perché sono la maggiore fonte di cycle time inaffidabili. Si guardi in particolare agli elementi in attesa di revisione, in una coda di rilascio o nelle mani di un fornitore. Si concordi una definizione scritta del flusso di lavoro e una data di entrata in vigore.

**2. Quanto lavoro abbiamo in corso in questo momento e che cosa accadrebbe se smettessimo di avviare nuovi elementi per una settimana?**
Si contino le schede, compreso il lavoro fermo. Ci si chieda che cosa il team concluderebbe e che cosa resterebbe bloccato. Chi facilita dovrebbe orientare la conversazione verso le ragioni dell'avvio anticipato, come la paura dei tempi morti o la pressione degli stakeholder, e lontano dalla colpa. Si proponga un primo limite di WIP e una data per rivederlo.

**3. Quali sono gli elementi più vecchi sulla lavagna e che cosa blocca ciascuno di essi?**
Si ordini per età e si parli dei tre elementi più vecchi. Per ciascuno si indichino l'ostacolo, la persona che può rimuoverlo e la prossima azione. Si confrontino le età più alte con l'85° percentile dei cycle time passati. Si prenda l'abitudine di porre questa domanda a ogni check-in, perché l'età è la sola misura che può ancora cambiare un risultato.

**4. Che aspetto ha la nostra distribuzione dei cycle time e quale promessa possiamo farne derivare?**
Si mostri il diagramma a dispersione degli elementi conclusi nelle ultime 8–12 settimane. Si leggano la mediana, l'85° e il 95° percentile. Si discuta se il team si senta a proprio agio nel dichiarare una SLE all'85° percentile e che cosa avessero in comune i valori anomali. Chi facilita dovrebbe verificare che il gruppo comprenda la differenza tra la mediana e la coda.

**5. In che modo incidenti e richieste influenzano il lavoro pianificato che prendiamo dal backlog?**
Si etichettino gli elementi conclusi per tipo e si confrontino cycle time e throughput per tipo. Ci si chieda quanto spesso un elemento pianificato si sia fermato perché è arrivato un incidente. Si decida se una politica di urgenza o una capacità riservata possano aiutare e come mantenerne visibile l'uso (vedi Argomento 2.9 «Lavoro operativo e lavoro non pianificato»). Si discuta che cosa il team smetterebbe di fare se le interruzioni raddoppiassero.

**6. Quali di queste misure potremmo manipolare e come ce ne accorgeremmo?**
Si passi in rassegna ogni misura chiedendosi come qualcuno sotto pressione potrebbe farla apparire migliore senza migliorare il flusso. Si abbini ogni risposta a una salvaguardia della tabella. Chi facilita dovrebbe trattare l'esercizio come progettazione dello strumento di misura e non come un'accusa. Si scelga una salvaguardia da aggiungere in questo trimestre e si nomini un responsabile.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna usano le misure di flusso per vedere il proprio sistema. Traggono il massimo dall'età degli elementi in corso e dalla distribuzione del cycle time, che dicono su che cosa concentrarsi e che cosa promettere. Dovrebbero evitare di trasformare il throughput in un obiettivo e di confrontare i propri numeri con quelli di altri team (vedi Argomento 2.8 «Metriche DORA», per le misure a livello di consegna che stanno sopra il flusso del team).

### Team di servizio e operations

I team di servizio gestiscono arrivi che non controllano. Le misure di flusso mostrano come interruzioni, passaggi di consegne e attese di altri allunghino il tempo di conclusione. Traggono beneficio da viste separate per incidenti, richieste e modifiche pianificate e dal tempo bloccato riportato per motivo. Dovrebbero mantenere i cronometri ITIL richiesti dai contratti usando al tempo stesso i cronometri di flusso per guidare il team.

### Leadership e governance

I dirigenti dovrebbero chiedere la distribuzione e la tendenza, non una cifra singola, e dovrebbero leggere i cambiamenti con accanto le modifiche del flusso di lavoro registrate. Possono usare il conseguimento della SLE e i profili di età per vedere i rischi con anticipo. Dovrebbero resistere alla tentazione di aggregare il throughput tra team, perché le definizioni degli elementi differiscono, e dovrebbero finanziare la bonifica di modelli di stato e timestamp di cui hanno bisogno dati di flusso affidabili.

### Clienti e utenti

I clienti avvertono il cycle time e in particolare la sua coda. Un'affermazione come «la maggior parte delle richieste di questo tipo è conclusa entro un numero dichiarato di giorni» dà loro qualcosa su cui pianificare, e una nota onesta quando il team è fuori dalla propria aspettativa costruisce fiducia. Non hanno bisogno dei conteggi di WIP o di throughput, ma ne beneficiano quando queste misure riducono l'attesa.

## In pratica: un esempio di ITIL agile

Il reparto IT di un ospedale regionale gestisce un team combinato che si occupa di richieste di servizio degli utenti finali e di un piccolo flusso di miglioramenti pianificati per i sistemi clinici. Tutti i numeri di questo esempio sono illustrativi.

Il team ha una lavagna con gli stati Pronto, In corso, In attesa di altri, Revisione e Fatto. Il responsabile nota che il rapporto mensile mostra 46 elementi conclusi, in linea con il mese precedente, eppure il personale clinico lamenta che le richieste richiedono «un'eternità». Un esame della cronologia del tracker mostra che «iniziato» era stato impostato quando una scheda veniva smistata per la prima volta, perciò il cycle time includeva giorni trascorsi in coda.

Il team riscrive la definizione del flusso di lavoro: «iniziato» è il primo passaggio in In corso, «concluso» è il passaggio in Fatto e In attesa di altri conta come in corso, con un proprio tempo bloccato. Con i nuovi cronometri, il cycle time mediano delle ultime 10 settimane è di 4 giorni, l'85° percentile è di 11 giorni e il 95° percentile è di 24 giorni. Il WIP medio è di 19 elementi per un team di 6 persone. L'età dell'elemento di lavoro mostra sette schede più vecchie di 11 giorni, e cinque di esse sono in attesa di un fornitore esterno.

Il team decide tre cose. Fissa una SLE di «l'85 percento degli elementi si conclude in 11 giorni o meno». Fissa un limite di WIP di 12 e concorda di non avviare nuovi elementi pianificati quando il limite è raggiunto. Aggiunge inoltre una revisione settimanale di dieci minuti dei cinque elementi più vecchi. Gli elementi dei fornitori sono sollevati tramite la gestione dei fornitori con le date da cui attendono.

Sei settimane dopo, l'85° percentile del cycle time è di 8 giorni e il WIP ha una media di 12. Il throughput è di 44 elementi a settimana per diverse settimane, vicino al livello precedente. Poi il team vede un possibile rischio di manipolazione: il cycle time mediano scende a 2 giorni in una settimana, ma il conteggio degli elementi conclusi a settimana sale bruscamente e la quota di elementi riaperti entro una settimana cresce. Un campione di schede mostra che richieste grandi venivano suddivise in diverse schede di una sola riga per aumentare il throughput e accorciare il cycle time. Le salvaguardie l'hanno individuato: il mix delle dimensioni degli elementi e il tasso di riapertura. Il team concorda una regola su che cosa conti come un elemento, unisce le schede suddivise nei rapporti e continua a pubblicare la SLE e l'elenco delle età.

## Lente di settore

**Startup.** Un piccolo team può partire con una lavagna fisica o digitale e un foglio di calcolo di date di inizio e di fine. Si parta da età e WIP, perché non richiedono storia, e si aggiungano i percentili del cycle time dopo circa dieci settimane di dati. Si tenga un'unica lavagna per il lavoro pianificato e le correzioni urgenti, etichettati per tipo, così che le interruzioni siano visibili.

**Piccola impresa.** Il lavoro arriva spesso via e-mail o tramite un help desk in hosting. Si usino le date di creazione, inizio e risoluzione dello strumento stesso, si verifichi che «iniziato» significhi che qualcuno ha cominciato a lavorare e si esportino i dati con regolarità. Uno sguardo settimanale semplice agli elementi aperti più vecchi fa più bene di una dashboard elaborata.

**Grande impresa.** Molti team, strumenti e flussi di lavoro rendono le definizioni coerenti la sfida principale. Si concordi un piccolo vocabolario comune per iniziato e concluso, si lasci che i team mappino i propri stati locali su di esso e si mantengano i dati di flusso a livello di team al livello del team. Si usino le misure per individuare code sistemiche, come fasi di approvazione condivise o ambienti condivisi, e non per confrontare i team.

**Pubblica amministrazione e settore pubblico.** Scadenze di legge, requisiti di audit e regole sugli appalti plasmano i cronometri. Si tenga il cronometro di legge separato dal cronometro di flusso del team e si documentino entrambi. Le fasi controllate dal fornitore spesso dominano il cycle time, perciò le si registri come tempo bloccato e si usino i dati nelle discussioni contrattuali (vedi Argomento 8.4 «Metriche di fornitori e contratti»).

## Business case: motivazioni, ROI e TCO

Il costo delle misure di flusso è basso in strumenti e moderato in disciplina. Un team ha bisogno di una lavagna con cambi di stato affidabili, di qualche ora per scrivere la definizione del flusso di lavoro, di una breve revisione periodica e di qualcuno che mantenga i grafici. Se i timestamp provengono dal tracker o dallo strumento ITSM, la raccolta è quasi gratuita. Il costo maggiore è il tempo speso ad allineare le definizioni e a cambiare le abitudini, come smettere di avviare nuovo lavoro quando il limite è raggiunto.

Il ritorno si manifesta in prevedibilità e in meno sorprese. Un team che può dichiarare una SLE dai propri dati può rispondere a «quando sarà pronto?» senza gonfiare le stime e può vedere presto il lavoro fermo. Si descriva il beneficio attraverso misure che si possono osservare di persona: la quota di elementi più vecchi dell'85° percentile, l'ampiezza del divario tra la mediana e il 95° percentile e il tempo speso nelle riunioni di stato prima e dopo. Non viene offerto alcun valore di riferimento, perché i numeri pubblicati dipendono dal flusso di lavoro e dalle definizioni degli elementi. Il costo totale di proprietà è soprattutto tempo delle persone, perciò lo si conti e lo si confronti con il costo del lavoro che attende senza essere visto.

## Anti-pattern e insidie

- **Contare elementi che non sono mai iniziati.** Le schede di backlog gonfiano WIP ed età e rendono la lavagna illeggibile. Si contino solo gli elementi iniziati e si tenga il backlog in un posto a sé (vedi Argomento 2.6 «Metriche di backlog e raffinamento»).
- **Trattare un limite di WIP come un obiettivo da raggiungere.** Un limite è un tetto che fa emergere le code. Si verifichi se il limite svolge il proprio compito e lo si abbassi quando il team ce la fa.
- **Riportare solo medie.** Il cycle time medio nasconde la lunga coda che i clienti avvertono. Si riportino la mediana e l'85° e il 95° percentile.
- **Sospendere il cronometro durante l'attesa.** Fermare il cronometro quando un elemento è bloccato fa apparire migliore il cycle time e nasconde il ritardo. Si tenga il cronometro in corso e si riporti il tempo bloccato separatamente.
- **Confrontare il throughput tra team.** Definizioni e dimensioni degli elementi differiscono. Si confronti ciascun team con la propria storia.
- **Usare le misure di flusso per giudicare le singole persone.** Gli elementi conclusi per persona invitano alla manipolazione e ignorano il lavoro condiviso. Si mantenga ogni misura a livello di team.
- **Cambiare il flusso di lavoro senza registrarlo.** Un cambio nel nome di uno stato o in una politica interrompe la tendenza in silenzio. Si registrino data e motivazione e le si segni su ogni grafico.
- **Mescolare incidenti, richieste e lavoro pianificato in un'unica distribuzione.** I loro cycle time differiscono per natura. Si etichetti per tipo e si legga ciascuna distribuzione a parte.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizioni e cronometri | «Iniziato» e «concluso» significano cose diverse per persone diverse | Alcuni team scrivono gli stati del proprio flusso di lavoro | Una definizione scritta del flusso di lavoro per team, con regole di cronometro per il tempo bloccato | Modifiche alle definizioni registrate e segnate sui grafici; cronometri rivisti per individuare derive | Definizioni allineate tra team e fornitori dove il lavoro attraversa i confini e riviste quando smettono di orientare le decisioni |
| Misurare il lavoro non concluso | Stato riferito nelle riunioni | Le schede mostrano età o WIP per alcuni team | WIP contato ogni giorno ed età mostrata su ogni scheda, con un limite scritto | Fasce di età ricavate dai percentili storici guidano l'azione quotidiana | Code e passaggi di consegne tra team monitorati insieme, con l'età condivisa con i fornitori |
| Misurare il lavoro concluso | Conteggi dei ticket chiusi al mese | Medie del cycle time riportate da alcuni team | Percentili del cycle time e throughput settimanale da un'unica fonte di dati | Tendenze riviste rispetto alle modifiche registrate; conseguimento della SLE monitorato | Previsioni dai dati di flusso orientano la pianificazione e gli impegni di servizio tra team |
| Uso e salvaguardie | Numeri usati per inseguire le persone | Consapevolezza informale della manipolazione | Ogni misura abbinata a una salvaguardia e rivista con il team | Gli avvisi delle salvaguardie portano a lavoro di miglioramento finanziato | Misure e salvaguardie riviste congiuntamente con clienti e fornitori |

## Checklist

- [ ] La definizione del flusso di lavoro è scritta, con gli stati «iniziato» e «concluso» nominati.
- [ ] Un elemento di lavoro è definito, con una regola per dividere e unire gli elementi.
- [ ] Il WIP è contato ogni giorno dai dati dello strumento e un limite di WIP è scritto.
- [ ] Ogni scheda in corso mostra la propria età in giorni.
- [ ] Il cycle time è riportato come mediana, 85° percentile e 95° percentile su una finestra dichiarata.
- [ ] Il throughput è riportato come grafico di andamento settimanale con la sua finestra.
- [ ] Un'aspettativa di livello di servizio è dichiarata dai dati del team e rivista ogni trimestre.
- [ ] Il tempo bloccato è registrato con inizio, fine e motivo, e il cronometro dell'elemento continua a scorrere.
- [ ] Incidenti, richieste e lavoro pianificato sono etichettati così che ciascuno si possa leggere a parte.
- [ ] Ogni modifica a uno stato o a una politica è registrata con data e motivazione.
- [ ] Ogni misura è abbinata a una salvaguardia della tabella di manipolazione.
- [ ] Nessuna misura è usata per classificare le persone o per confrontare i team.

## Prompt IA

**Verificare una definizione di flusso di lavoro alla ricerca di problemi di cronometro.**

```text
Ecco il flusso di lavoro per [team o servizio]: [elenco degli stati e delle
transizioni, con un significato di una riga per ciascuno se noto]. Vogliamo
calcolare lavoro in corso, throughput, età dell'elemento di lavoro e cycle time
usando le definizioni della letteratura sul flusso. Individua quale stato
dovrebbe far partire il cronometro e quale dovrebbe fermarlo, qualsiasi stato
in cui il cronometro potrebbe essere sospeso o frainteso e qualsiasi stato che
due team potrebbero interpretare in modo diverso. Non ipotizzare come sia
configurato il nostro strumento. Elenca le tue ipotesi e le domande a cui devo
rispondere per fissare la definizione.
```

**Analizzare un'esportazione di elementi di lavoro.**

```text
Ho un'esportazione di [numero] elementi di lavoro conclusi da [strumento] con
questi campi: [nomi dei campi, per esempio id, tipo, data di inizio, data di
conclusione, periodi di blocco]. Spiega come calcolare i percentili del cycle
time, il throughput settimanale e il lavoro in corso giornaliero a partire da
questi campi e come gestire date mancanti, elementi riaperti ed elementi di tipo
[tipi]. Fornisci i passaggi e una breve traccia di script in [linguaggio] e non
presupporre alcun valore. Elenca le tue ipotesi e i controlli sulla qualità dei
dati che dovrei eseguire per primi.
```

**Redigere una dichiarazione di aspettativa di livello di servizio.**

```text
Il nostro team gestisce [tipo di lavoro] e ha dati di cycle time delle ultime
[numero] settimane, con una mediana di [valore], un 85° percentile di [valore]
e un 95° percentile di [valore]. Redigi un'aspettativa di livello di servizio
di una frase e una breve nota che la spieghi a [destinatari, per esempio clienti
o responsabile del servizio], includendo ciò che non promette. Non inventare
valori obiettivo o benchmark. Elenca le tue ipotesi e le avvertenze sulla
dimensione del campione.
```

**Esaminare i rischi di manipolazione delle nostre misure di flusso.**

```text
Monitoriamo [elenco delle misure di flusso] per [team o servizio]. Il team è
sotto pressione per [pressione, per esempio ridurre l'età dei ticket]. Per
ciascuna misura, elenca modi realistici in cui potrebbe apparire migliore senza
migliorare il flusso, il segnale nei nostri dati che rivelerebbe ciascuno e una
salvaguardia abbinata. Non inventare statistiche né citare studi. Elenca le tue
ipotesi e i dati che mi servirebbero per verificare ciascun rischio.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare l'argomento che definisce una misura di flusso e la salvaguardia che dovrebbe affiancarla.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che le modifiche a questo argomento mantengano allineati il modello, la tabella delle definizioni e la tabella di manipolazione.

## Punti chiave

- Quattro misure descrivono il flusso: lavoro in corso, throughput, età dell'elemento di lavoro e cycle time, ciascuna con una definizione breve e un cronometro che deve essere scritto.
- L'età dell'elemento di lavoro e il WIP sono le misure anticipatrici; throughput e cycle time confermano ciò che è già accaduto.
- Si riportino cycle time ed età come percentili e si dichiari un'aspettativa di livello di servizio dai propri dati.
- Le stesse misure si adattano al lavoro di progetto e al lavoro di servizio, purché si etichettino i tipi di lavoro e si nomini ciascun cronometro.
- Ogni misura può essere manipolata spostando il cronometro, dividendo gli elementi o nascondendo il lavoro, perciò si abbini ciascuna a una salvaguardia.
- Si mantengano le misure a livello di team e le si usi per migliorare il flusso di lavoro, mai per classificare le persone.

## Riferimenti e letture di approfondimento

1. Kanban Guide, kanbanguides.org, current version as of October 2026, https://kanbanguides.org/english/
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
7. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
8. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
9. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
10. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
13. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
