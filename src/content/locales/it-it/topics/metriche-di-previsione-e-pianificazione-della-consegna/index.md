# Metriche di previsione e pianificazione della consegna

**I team che consegnano software in modo continuo e gestiscono anche servizi in produzione hanno bisogno di previsioni oneste, non di impegni spremuti dalle stime: si pianifichi a partire dal flusso del lavoro concluso, si diano intervalli anziché date e si tenga qualsiasi numero di pianificazione locale al team fuori dai confronti e fuori dagli obiettivi.**

## Panoramica e motivazione

Gli stakeholder pongono a ogni team di consegna due domande: «Quando sarà pronto?» e «Quanto può prendere in carico?». La risposta agile parte dagli scopi dei princìpi del Manifesto agile: consegnare software di valore in modo continuo, collaborare ogni giorno con gli stakeholder, riflettere e migliorare con regolarità e costruire il lavoro attorno a persone motivate a cui si dà fiducia perché lo portino a termine. Una previsione che serve questi scopi è una conversazione tra stakeholder su esiti probabili e rischio. Non è una promessa estorta sotto pressione.

I team che gestiscono servizi in produzione hanno una difficoltà in più. La loro capacità è condivisa tra modifiche pianificate, lavoro non pianificato sugli incidenti, richieste di servizio e miglioramento. Un piano che ignora il carico operativo fallirà per ragioni che nessuno aveva pianificato (vedi Argomento 2.9 «Lavoro operativo e lavoro non pianificato»). La gestione dei servizi IT (ITSM), come codificata da ITIL, tratta questo aspetto come una questione di capacità e domanda. La [pianificazione della capacità](https://en.wikipedia.org/wiki/Capacity_planning) è il processo di determinazione della capacità di cui un'organizzazione ha bisogno per soddisfare una domanda mutevole. La pratica agile di pianificare in base a ciò che il team può effettivamente concludere è la stessa idea a livello di team.

Esistono due grandi modi di prevedere la consegna:

- **Dalle stime.** Il team dimensiona gli elementi in una qualche unità, somma le dimensioni e divide per un tasso. Molti team usano un dimensionamento relativo come gli [story point](https://en.wikipedia.org/wiki/Story_point), e il tasso è chiamato [velocity](https://en.wikipedia.org/wiki/Velocity_(software_development)). È rapido da avviare, dipende dalle abitudini di stima del team ed è significativo solo all'interno di un unico team.
- **Dai dati di flusso.** Il team usa il proprio registro del lavoro concluso: quanti elementi completa a settimana (throughput) e quanto tempo richiedono gli elementi dall'inizio alla fine (cycle time). Poiché si tratta di conteggi e di tempi trascorsi, non di opinioni, resistono alla deriva e possono essere combinati con la simulazione per dare un intervallo di esiti. Questo approccio proviene dalla tradizione del flusso, di cui fa parte la Kanban Guide, e funziona con qualsiasi modo di organizzare il lavoro, compresi i team che consegnano in modo continuo senza alcun periodo di pianificazione fisso.

Questo argomento propende per il secondo approccio, perché la consegna continua di software produce un flusso costante di elementi conclusi che i dati di flusso descrivono direttamente (vedi Argomento 2.1 «Misure del flusso» e Argomento 2.2 «Lead time, cycle time ed efficienza del flusso»). Tratta comunque anche il primo, perché molti team usano le stime e perché l'uso scorretto della velocity è tra i modi più comuni in cui le metriche di consegna vanno storte.

Le previsioni sono [previsioni](https://en.wikipedia.org/wiki/Forecasting) di un futuro incerto, e l'incertezza è il punto. L'idea del [cono dell'incertezza](https://en.wikipedia.org/wiki/Cone_of_Uncertainty) dice che le stime iniziali sono le meno certe. La [fallacia della pianificazione](https://en.wikipedia.org/wiki/Planning_fallacy) dice che le persone sottostimano il tempo che richiederanno i propri piani anche quando sanno che piani simili hanno subito ritardi. Una buona misurazione delle previsioni lo riconosce e misura quanto spesso le previsioni centrano il bersaglio.

La salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) conta qui, perché previsioni e piani diventano facilmente promesse e poi obiettivi. Una volta che un team è giudicato sul rispetto di una data, nasconde i rischi, taglia la qualità o gonfia la stima (vedi Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Principi chiave

- **Si preveda dal lavoro concluso.** Ciò che il team ha consegnato è un'evidenza migliore di ciò che qualcuno crede che consegnerà.
- **Si dia un intervallo con una probabilità.** «Probabile entro la fine del mese prossimo, molto probabile entro la fine di quello successivo» è meglio di una data singola.
- **Si pianifichi in base alla capacità reale.** Si includa il lavoro operativo, si lasci tempo per il miglioramento e non si pianifichi al pieno utilizzo.
- **Si mantengano locali le stime.** Qualsiasi unità di dimensionamento è uno strumento di pianificazione privato di un team, mai una base di confronto.
- **Si misuri la qualità della previsione, non solo la consegna.** Una previsione giusta per le ragioni sbagliate è fortuna.
- **Si tratti la previsione come condivisa.** Stakeholder e team la costruiscono insieme e la rivedono quando i fatti cambiano.
- **Si abbia fiducia nel team.** Le persone a cui si dà fiducia e sostegno forniscono previsioni oneste.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasso di riuscita delle previsioni | Quota di previsioni in cui il risultato effettivo è ricaduto all'interno dell'intervallo dichiarato | previsioni il cui esito effettivo era entro l'intervallo dichiarato / previsioni effettuate | percentuale | Registro delle previsioni e record di consegna | Gestione della capacità e delle prestazioni; miglioramento continuo | Accuratezza delle previsioni nelle conversazioni di pianificazione | Mensile |
| Ampiezza dell'intervallo di previsione | Quanto era ampio l'intervallo dichiarato, rispetto alla previsione mediana | (limite superiore meno limite inferiore) / previsione mediana | rapporto | Registro delle previsioni | Gestione della capacità e delle prestazioni | Restringimento del cono dell'incertezza | Mensile |
| Successo degli obiettivi di consegna | Quota degli obiettivi di consegna dichiarati che sono stati raggiunti nel periodo, giudicati in base all'esito | obiettivi raggiunti / obiettivi fissati | percentuale | Record degli obiettivi concordati con gli stakeholder | Gestione dei livelli di servizio; miglioramento continuo | Revisione degli esiti con gli stakeholder | Mensile o a ogni rilascio di un obiettivo |
| Tasso di variazione dell'ambito | Quota del lavoro impegnato che è stata aggiunta, rimossa o ridimensionata dopo che la previsione è stata fatta | elementi aggiunti o rimossi dopo la previsione / elementi nella previsione originale | percentuale | Cronologia delle modifiche del tracker del lavoro | Abilitazione delle modifiche; gestione dei livelli di servizio | Adattamento del backlog al feedback | Mensile |
| Ripartizione della capacità | Quota della capacità del team spesa in modifiche, lavoro operativo e miglioramento | elementi o ore completati in ciascuna categoria / tutti gli elementi o ore completati | percentuale | Tracker del lavoro con tipo di lavoro | Gestione della capacità e delle prestazioni; gestione degli incidenti | Distribuzione dei tipi di lavoro | Mensile |
| Stabilità del throughput | Variazione del throughput settimanale | deviazione standard del throughput settimanale / media del throughput settimanale | rapporto | Tracker del lavoro | Gestione della capacità e delle prestazioni | Prevedibilità del flusso | Mensile |
| Velocity locale | Il lavoro concluso di un singolo team nella propria unità di dimensionamento per periodo di pianificazione | somma delle stime degli elementi che soddisfano la definizione di completato nel periodo | punti definiti dal team | Tracker del lavoro | Gestione della capacità e delle prestazioni | Ausilio del team alla pianificazione della capacità | A ogni periodo di pianificazione |

Si definiscano i cronometri. Una previsione è «effettuata» quando è registrata e condivisa con gli stakeholder, ed è «rispettata» quando l'esito è rilasciato e in uso, non quando il codice viene integrato. Il throughput conta gli elementi che soddisfano la definizione di completato, con gli elementi di tipi diversi contati in serie separate se la loro dimensione differisce molto. La velocity locale è mostrata solo al team che ne è proprietario.

## Raccomandazioni

### Prevedere dal flusso

**1. Si costruisca la previsione da throughput e cycle time.** Si contino gli elementi conclusi ogni settimana nelle ultime 12–26 settimane. Si usi quella storia per prevedere quanti elementi si concluderanno entro una certa data, o quando un insieme di elementi si concluderà probabilmente. Una simulazione con il [metodo Monte Carlo](https://en.wikipedia.org/wiki/Monte_Carlo_method), che campiona migliaia di volte dalla storia del team stesso, trasforma la storia in un intervallo di probabilità. Semplici fogli di calcolo o piccoli script lo fanno bene. Si dichiarino la finestra storica e la data della previsione.

**2. Si riportino i percentili degli esiti.** Si dica «probabile al 50 percento entro il 14 marzo, probabile all'85 percento entro il 4 aprile, probabile al 95 percento entro il 18 aprile». Ogni percentile è un'onesta dichiarazione di rischio, e gli stakeholder possono scegliere quanto margine serva loro. Una data singola nasconde quella scelta (vedi Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

**3. Si usino i percentili del cycle time per i singoli elementi.** Per un solo elemento, l'85° percentile dei cycle time passati risponde a «quanto potrebbe richiedere?» meglio di qualsiasi stima. Lo si mostri sulla lavagna, come una linea rispetto alla quale confrontare l'età degli elementi in corso (vedi Argomento 2.1 «Misure del flusso»).

**4. Si mantengano le dimensioni degli elementi all'incirca uniformi.** La previsione basata sul throughput funziona meglio quando gli elementi sono piccoli e abbastanza simili da poter essere contati. I team ci arrivano suddividendo il lavoro nel più piccolo pezzo che ancora consegna valore, un'abitudine della consegna continua di software a pieno titolo. Se gli elementi variano molto, si monitorino serie separate per i diversi tipi di lavoro.

**5. Si aggiorni la previsione ogni volta che i fatti cambiano.** Una previsione è una vista viva. Quando cambia l'ambito, cambia la dimensione del team o un grande incidente consuma una settimana, la si riesegua e lo si dica agli stakeholder. Si versionino le previsioni per poterle giudicare in seguito.

### Pianificare in base alla capacità reale

**6. Si ripartisca la capacità per tipo di lavoro.** Si registri quale quota del lavoro concluso del team fosse modifica pianificata, lavoro operativo non pianificato, richieste di servizio e miglioramento. Si pianifichi per la quota che l'esperienza mostra, non per un ideale. I team che gestiscono servizi in produzione trovano spesso che un terzo o più della capacità vada al lavoro operativo, e la cifra spetta a loro misurarla, non prenderla in prestito (vedi Argomento 2.9 «Lavoro operativo e lavoro non pianificato»).

**7. Si riservi capacità per il miglioramento.** Il miglioramento continuo è una parte stabile del lavoro, perciò si pianifichi tempo per esso nella ripartizione e lo si protegga. I team che lo comprimono in ogni periodo di grande impegno vedono salire il proprio carico operativo, il che lo comprime ulteriormente. Si monitorino la quota di miglioramento e l'effetto dei miglioramenti sulla quota operativa.

**8. Non si pianifichi al pieno utilizzo.** Un team pianificato al 100 percento non ha spazio per la variazione, e le code crescono man mano che l'utilizzo si avvicina al limite (vedi Argomento 2.3 «Lavoro in corso e code»). Si lasci un margine per l'imprevisto e lo si tratti come una scelta di progetto e non come uno spreco.

### Usare con cautela le stime, se le si usa

**9. Si tratti la velocity come un ausilio di pianificazione locale.** Se un team dimensiona il lavoro in story point, la sua velocity può aiutarlo a decidere quanto prendere in carico nella successiva conversazione di pianificazione, e dovrebbe essere confrontata solo con il recente passato dello stesso team. Non si confrontino mai i team, non si fissi un obiettivo di velocity né la si riporti verso l'alto come misura di produttività. I punti non hanno un'unità comune tra team, e la pressione ad alzare il numero gonfia le stime senza consegnare di più.

**10. Si confrontino ogni tanto le stime con i cycle time effettivi.** Si tracci un grafico delle stime rispetto al tempo che gli elementi hanno richiesto. Se le stime grandi non richiedono più tempo di quelle piccole, lo sforzo di stima non porta molto, e contare gli elementi può servire al team altrettanto bene. Se sono correlate, le stime portano informazione che vale la pena conservare. Si lasci che il team decida con i dati.

### Misurare se funziona

**11. Si registri ogni previsione e la si valuti.** Si registrino la previsione, l'intervallo e il risultato effettivo, poi si calcoli il tasso di riuscita. Una previsione ben calibrata all'85° percentile dovrebbe avverarsi circa l'85 percento delle volte. Se i successi sono molto sopra o sotto, si adegui il metodo. Si condivida il registro con gli stakeholder, perché la fiducia nella previsione si costruisce sullo storico.

**12. Si giudichino gli obiettivi di consegna dall'esito.** Un obiettivo come «i clienti possono pagare tramite fattura» è raggiunto quando i clienti possono farlo, non quando i compiti sono chiusi. Si concordino gli obiettivi con gli stakeholder in parole semplici, li si riveda insieme e se ne registri il risultato. Ciò mantiene la pianificazione legata alla collaborazione continua e scoraggia la consegna di lavoro che nessuno usa (vedi Argomento 1.3 «Risultati prima della produzione: scegliere cosa misurare»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tasso di riuscita delle previsioni | Dichiarare intervalli molto ampi così che ogni previsione centri il bersaglio; rifare la previsione a cose fatte | Ampiezza dell'intervallo di previsione; conservare nel registro la previsione originale; confrontare gli intervalli con lo storico di altri team |
| Ampiezza dell'intervallo di previsione | Restringere gli intervalli per sembrare sicuri | Tasso di riuscita delle previsioni; richiedere che l'intervallo sia costruito sullo storico registrato |
| Successo degli obiettivi di consegna | Fissare obiettivi facili; ridefinire un obiettivo a posteriori; contare la produzione come esito | Gli stakeholder giudicano l'esito; formulazione degli obiettivi conservata in un registro; controllo dei dati d'uso della modifica consegnata |
| Tasso di variazione dell'ambito | Congelare l'ambito rifiutando modifiche valide; nascondere la variazione di ambito ridimensionando gli elementi | Soddisfazione degli stakeholder per la reattività; motivi delle modifiche registrati |
| Ripartizione della capacità | Etichettare in modo errato il lavoro operativo come miglioramento; nascondere il carico operativo lavorando fuori dalla lavagna | Riconciliare con i record di incidenti e richieste; campionare gli elementi per tipo |
| Stabilità del throughput | Dividere gli elementi in pezzi banali per alzare il conteggio; chiudere gli elementi senza concluderli | Distribuzione delle dimensioni degli elementi; tasso di riapertura; campione per il valore consegnato |
| Velocity locale | Gonfiare le stime; dividere le story per rivendicare punti; confrontare i team | Tenerla privata al team; confrontarla con throughput e cycle time; non fissare mai un obiettivo |

Una lettura sana è fatta di previsioni che si avverano al tasso dichiarato, obiettivi che gli stakeholder concordano essere stati raggiunti, un quadro della capacità che corrisponde a ciò che il team vive e un numero di velocity che, se esiste, è usato dal team e da nessun altro.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Previsione basata sul flusso | Usa dati reali, resiste all'inflazione, dà intervalli | Richiede uno storico costante ed elementi di dimensione simile |
| Previsione basata sulle stime | Rapida da avviare, incoraggia la discussione sul lavoro | Soggettiva, si gonfia sotto pressione, non confrontabile tra team |
| Impegno su una data singola | Semplice da comunicare | Nasconde il rischio; punisce l'onestà |
| Intervallo con probabilità | Onesto sull'incertezza | All'inizio più difficile da leggere per alcuni stakeholder |
| Pianificazione al pieno utilizzo | Sembra efficiente | Le code crescono; nessuno spazio per incidenti o apprendimento |
| Margine pianificato | Assorbe la variazione e sostiene il miglioramento | Sembra capacità inattiva a chi non è convinto |

La risposta in breve è partire dai dati di flusso, aggiungere le stime solo dove aiutano il team e parlare per intervalli. Dove un contratto richiede una data, si dia la data che l'85° o il 95° percentile sostiene e si dica che cosa la cambierebbe.

## Domande da discutere con il team

**1. Che cosa diremmo se uno stakeholder chiedesse «quando sarà pronto» e volesse una risposta onesta?**
Si chieda al team di rispondere per un lavoro reale, prima con una data singola e poi con un intervallo. Si noti la differenza in quanto sia a proprio agio ciascuna risposta. Chi facilita dovrebbe cogliere che cosa il team avrebbe bisogno di sapere per dare l'intervallo con onestà, come storico, dimensione degli elementi e rischi noti.

**2. Quanta della nostra capacità va davvero a modifiche pianificate e come lo sappiamo?**
Si guardino gli ultimi tre mesi di lavoro concluso per tipo. Si confronti con il piano che il team aveva fatto. La conversazione rivela spesso che il lavoro operativo è maggiore del pianificato e che il lavoro di miglioramento è minore. Si concordi quale dovrebbe essere la ripartizione e quale decisione la cambierebbe.

**3. Dove ci aiutano le nostre stime e dove ci costano solo tempo?**
Si tracci un campione di stime rispetto ai cycle time effettivi. Si discuta se le stime più grandi siano state davvero più lente. Se il legame è debole, ci si chieda che cosa farebbe il team di diverso se contasse solo gli elementi. Si decida se proseguire, semplificare o smettere di stimare per un periodo di prova.

**4. Chi vede i nostri numeri di pianificazione a livello di team e che cosa ne viene fatto?**
Si ripercorra ciascun numero di pianificazione dal team al suo destinatario. Ci si chieda se qualcuno confronti i team con esso o fissi obiettivi. In caso affermativo, si discuta come fermarlo e che cosa offrire in alternativa. Chi facilita dovrebbe essere pronto a spiegare che i numeri locali perdono valore quando viaggiano.

**5. Quando una nostra previsione è fallita e che cosa abbiamo imparato?**
Si scelga un errore e lo si ripercorra. Era una variazione di ambito, un grande incidente, una dipendenza o un'ipotesi sbagliata? Che cosa l'avrebbe segnalato prima? Si concordi una modifica alla pratica di previsione, come registrare le dipendenze o aggiornare la previsione ogni settimana.

**6. Quali obiettivi abbiamo raggiunto lo scorso trimestre e chi lo ha detto?**
Si elenchino gli obiettivi di consegna e chi ha giudicato ciascuno. Se il team ha giudicato i propri obiettivi, si discuta come coinvolgere gli stakeholder. La conversazione sostiene la collaborazione continua e mostra se gli obiettivi riguardano gli esiti o i compiti.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna possiedono la previsione e i dati di flusso che la sostengono. Dovrebbero pubblicare intervalli, mantenere piccoli gli elementi e rifare la previsione quando i fatti cambiano. I team che scelgono di dimensionare il lavoro in punti dovrebbero tenere i numeri all'interno del team. L'obiettivo è un flusso costante di lavoro concluso e di valore e una previsione di cui gli stakeholder si fidano perché ha uno storico.

### Team di servizio e operations

I team operativi portano la domanda che sconvolge i piani. Dovrebbero condividere il carico di incidenti e richieste con i team di consegna, così che i piani di capacità partano da numeri reali. I team operativi che consegnano anche modifiche possono usare la stessa previsione basata sul flusso per il proprio lavoro. La pianificazione congiunta del lavoro di modifica e di esercizio è un buon luogo per la collaborazione continua tra i due gruppi.

### Leadership e governance

I dirigenti decidono se una previsione è una dichiarazione di rischio o una promessa. Dovrebbero chiedere intervalli, finanziare margine e miglioramento e resistere all'uso di velocity o throughput per confrontare i team. Gli organi di governance dovrebbero guardare al tasso di riuscita delle previsioni nel tempo e agli esiti degli obiettivi e trattare i mancati rispetti ripetuti come un segnale sul sistema, come dipendenze e carico operativo, non sulle persone.

### Clienti e utenti

Agli utenti importa quando vedranno la modifica e se li aiuterà. Un intervallo con una confidenza dichiarata li serve meglio di una data che slitta. Dovrebbero essere coinvolti nel giudicare se gli obiettivi sono stati raggiunti, poiché sono loro a sentire l'esito. Dire agli utenti quando una previsione cambia, e perché, fa parte del trattarli come collaboratori.

## In pratica: un esempio di ITIL agile

Il team digitale di un'azienda energetica regionale costruisce un portale di fatturazione per i clienti e lo gestisce in produzione. I numeri seguenti sono illustrativi.

Gli stakeholder hanno chiesto al team una data per una nuova funzionalità di piano di pagamento composta da 22 elementi. Il trimestre scorso il team aveva dato una data ferma basata sulle proprie stime, l'aveva mancata di cinque settimane a causa di due incidenti maggiori e aveva perso la fiducia degli stakeholder. Questa volta la responsabile della consegna recupera il throughput delle ultime 20 settimane, che varia da 3 a 9 elementi a settimana con una mediana di 6, e osserva che il lavoro operativo ha occupato circa il 35 percento degli elementi conclusi.

Esegue una simulazione dallo storico. Mostra che 22 elementi si concludono entro 4 settimane circa la metà delle volte, entro 6 settimane circa l'85 percento delle volte ed entro 8 settimane circa il 95 percento delle volte. Presenta queste tre date agli stakeholder, insieme alle ipotesi: dimensione del team invariata, carico operativo simile alle ultime 20 settimane e nessun nuovo ambito. Un responsabile di prodotto chiede di lanciare per una specifica data di fatturazione a otto settimane di distanza. Il team e gli stakeholder concordano di pianificare per la data all'85 percento, di tenere le ultime due settimane come margine e di fissare un punto di controllo ogni due settimane per rifare la previsione.

Al primo punto di controllo, un guasto al gateway di pagamento ha richiesto tre giorni e la simulazione sposta la data all'85 percento di una settimana. Il team lo comunica agli stakeholder lo stesso giorno, con la motivazione, e concordano di spostare fuori un elemento di basso valore. La funzionalità va in esercizio alla data del margine. L'obiettivo di consegna, «i clienti possono impostare un piano di pagamento senza telefonare», è giudicato dal responsabile di prodotto e da un panel di clienti dopo tre settimane. È raggiunto per la maggior parte dei clienti, e un tema nei commenti mostra confusione su una schermata, che entra nel backlog. Il team registra che il suo tasso di riuscita delle previsioni per il trimestre è di quattro su cinque. Gli stakeholder chiedono alla responsabile della consegna di portare intervalli di previsione alla prossima sessione di pianificazione, e il team abbandona l'uso degli story point perché contare gli elementi dava la stessa risposta.

## Lente di settore

**Startup.** Le priorità cambiano rapidamente, perciò si mantengano brevi e approssimative le previsioni. Si monitori il throughput fin dall'inizio, poiché non costa nulla, e si diano intervalli ai fondatori. Si resista alla tentazione di importare un sistema di pianificazione costruito per grandi team.

**Piccola impresa.** Una o due persone possono svolgere insieme lavoro di modifica e di esercizio, senza capacità libera. Si sia espliciti sulla ripartizione e si dica al titolare quando un incidente sposterà una data. Basta un semplice conteggio settimanale degli elementi conclusi.

**Grande impresa.** Molti team e dipendenze fanno dipendere le previsioni dal flusso di altri team. Si preveda ciascun team dai propri dati, si rendano visibili le dipendenze e si combinino gli intervalli con attenzione, perché sommare i casi migliori dà un totale fuorviante. Si evitino aggregazioni che confrontano i team per velocity.

**Pubblica amministrazione e settore pubblico.** Bilanci fissi, appalti e scadenze di legge creano pressione per impegni su una data singola. Si dichiari la data sostenuta dal percentile scelto, si spieghino le ipotesi e si registrino apertamente i compromessi sull'ambito. Dove esiste una data obbligatoria, si pianifichi l'ambito perché vi rientri (vedi Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

Il costo è basso. I dati di throughput e cycle time di solito esistono già nel tracker del lavoro del team. Un foglio di calcolo di previsione o un piccolo script richiede un giorno per essere costruito, e una previsione richiede minuti per essere aggiornata. Il costo ricorrente è il tempo per registrare previsioni e risultati e per tenere una breve conversazione di controllo con gli stakeholder.

Il ritorno viene da meno sorprese e decisioni migliori. Gli stakeholder che comprendono il rischio possono scegliere un margine, adeguare l'ambito o riordinare il lavoro presto. I team spendono meno tempo in cerimonie di stima se contare gli elementi serve altrettanto bene. I conflitti per date mancate e le scorciatoie sulla qualità che provocano diminuiscono. Si costruisca il caso a partire dal proprio storico: la quota di previsioni che hanno tenuto, il tempo speso a stimare e le variazioni di ambito fatte presto anziché tardi. Non si prendano in prestito cifre di prevedibilità da altre organizzazioni.

## Anti-pattern e insidie

- **Trattare una previsione come un impegno.** Trasforma la previsione in un obiettivo, e l'onestà diventa costosa. Si presentino intervalli e li si riveda.
- **Confrontare i team per velocity.** I punti sono locali e il confronto li gonfia. Si confronti un team solo con il proprio passato.
- **Pianificare al pieno utilizzo.** La variazione si trasforma in ritardo. Si lasci un margine.
- **Ignorare il lavoro operativo.** I piani falliscono sul carico che nessuno aveva pianificato. Si misuri e si pianifichi la ripartizione.
- **Usare una data singola per tutto.** Si usino i percentili e si dica quale si è scelto.
- **Stimare con più precisione di quanto i dati sostengano.** Stime dettagliate per lavoro lontano sono le meno affidabili. Si preveda il lavoro lontano in modo grossolano.
- **Fissare un obiettivo di velocity o di throughput.** Il numero salirà e il valore no.
- **Non valutare mai le previsioni.** Senza uno storico, la fiducia non può crescere.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Metodo di previsione | Ipotesi su una data singola | Stime sommate a mano | Intervalli basati sul flusso con percentili | Previsioni registrate e valutate; metodo affinato dal tasso di riuscita | Previsioni combinate tra team e dipendenze, condivise in tempo reale con gli stakeholder |
| Pianificazione della capacità | I piani ignorano il lavoro operativo | Carico operativo noto approssimativamente | Capacità ripartita per tipo di lavoro dai dati | Ripartizione rivista rispetto agli esiti; tempo di miglioramento protetto | Capacità pianificata congiuntamente con fornitori e operazioni tra i servizi |
| Obiettivi e uso dei numeri | Gli obiettivi sono elenchi di compiti | Obiettivi scritti | Obiettivi giudicati dall'esito con gli stakeholder | Mancati rispetti analizzati come segnali di sistema; numeri locali tenuti privati | Obiettivi fissati e giudicati in collaborazione con gli utenti; apprendimento condiviso tra i team |

## Checklist

- [ ] Le previsioni sono costruite dallo storico di throughput e cycle time del team stesso.
- [ ] Le previsioni sono date come intervalli con percentili, con le ipotesi dichiarate.
- [ ] Ogni previsione è registrata con il suo intervallo e il risultato effettivo.
- [ ] Tasso di riuscita delle previsioni e ampiezza dell'intervallo sono rivisti ogni mese.
- [ ] La capacità è ripartita per tipo di lavoro, compresi lavoro operativo e miglioramento.
- [ ] L'utilizzo pianificato lascia un margine per variazioni e incidenti.
- [ ] Qualsiasi unità di dimensionamento o velocity è privata del team e non porta alcun obiettivo.
- [ ] Gli obiettivi di consegna sono scritti come esiti e giudicati con gli stakeholder.
- [ ] Le variazioni di ambito sono registrate con le motivazioni.
- [ ] Le previsioni sono aggiornate quando i fatti cambiano e gli stakeholder ne sono informati.

## Prompt IA

**Costruire una previsione basata sul throughput.**

```text
Il nostro team ha concluso questi numeri di elementi in ciascuna delle ultime
[numero] settimane: [incolla i conteggi settimanali]. Vogliamo sapere quando
[numero] elementi saranno probabilmente conclusi. Spiega come produrre un
intervallo di probabilità usando il nostro stesso storico, fornisci un esempio
svolto di un semplice metodo di simulazione e descrivi quali ipotesi comporta.
Non inventare storico né valori di riferimento. Elenca le tue ipotesi e le
condizioni in cui la previsione non si applicherebbe.
```

**Esaminare come usiamo le stime.**

```text
Dimensioniamo gli elementi in [unità] e usiamo [pratica] per pianificare. Ecco un
campione di [numero] elementi conclusi con stime e cycle time effettivi in
giorni: [incolla i dati]. Descrivi se le stime prevedono il cycle time in questo
campione, che cosa ciò implichi per quanto sforzo meriti la stima e che cosa
potremmo provare invece. Non affermare risultati oltre i dati. Elenca le tue
ipotesi.
```

**Pianificare la capacità tra lavoro di modifica e di esercizio.**

```text
Nell'ultimo [periodo], il nostro team ha concluso [conteggi] elementi di questi
tipi: [modifica pianificata, incidenti, richieste, miglioramento]. Proponi una
ripartizione della capacità per il prossimo [periodo] che lasci un margine e
descrivi come spiegarla agli stakeholder. Suggerisci come individuare se il
lavoro operativo viene etichettato in modo errato. Non inventare rapporti di
settore. Elenca le tue ipotesi.
```

**Redigere una revisione della previsione con gli stakeholder.**

```text
Redigi un ordine del giorno e una sintesi di una pagina per un punto di controllo
della previsione su [lavoro]. Dati: previsione originale [intervallo], stato
attuale [descrizione], modifiche dall'ultimo punto di controllo [elenco]. Includi
l'intervallo aggiornato, che cosa lo ha cambiato, le opzioni su ambito o tempi e
le domande a cui abbiamo bisogno che gli stakeholder rispondano. Usa un
linguaggio semplice. Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di previsione o di pianificazione.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una voce rivista di metrica di pianificazione mantenga il proprio vettore di manipolazione e la salvaguardia.

## Punti chiave

- Si preveda dal flusso del lavoro concluso e si diano intervalli con probabilità anziché date singole.
- Si pianifichi in base alla capacità reale, compresi lavoro operativo, tempo di miglioramento e margine.
- Si tratti qualsiasi unità di stima o velocity come un ausilio privato di un solo team, mai come obiettivo o confronto.
- Si valutino le proprie previsioni: il tasso di riuscita costruisce fiducia.
- Si giudichino gli obiettivi di consegna dall'esito, insieme a stakeholder e utenti.
- Si abbia fiducia nel team e lo si sostenga: le previsioni oneste vengono da persone che non sono punite per l'incertezza.

## Riferimenti e letture di approfondimento

1. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Humble, J., and Farley, D., *Continuous Delivery*, Addison-Wesley, 2010.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Cohn, M., *Agile Estimating and Planning*, Prentice Hall, 2005.
6. Kahneman, D., and Tversky, A., "Intuitive prediction: biases and corrective procedures," *TIMS Studies in Management Science*, 12, 1979.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
9. Wikipedia, [Story point](https://en.wikipedia.org/wiki/Story_point).
10. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
11. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
12. Wikipedia, [Cone of Uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty).
13. Wikipedia, [Planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method).
