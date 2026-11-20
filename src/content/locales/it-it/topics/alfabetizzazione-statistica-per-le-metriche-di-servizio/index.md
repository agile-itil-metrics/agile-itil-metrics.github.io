# Alfabetizzazione statistica per le metriche di servizio

**I dati dei ticket e del flusso sono asimmetrici, irregolari e spesso scarsi: si riportino mediane e percentili alti anziché medie, si dica quanti elementi stanno dietro a ogni tasso e si separi la variazione ordinaria dal cambiamento reale prima che qualcuno reagisca.**

## Panoramica e motivazione

La maggior parte delle metriche di servizio arriva come un singolo numero su una dashboard: tempo medio di risoluzione, percentuale di incidenti risolti entro l'obiettivo, ticket chiusi questa settimana. Un singolo numero sembra preciso. Di solito è un riepilogo compresso di una raccolta disordinata di eventi, e la compressione decide che cosa vede il lettore. L'alfabetizzazione statistica, ai fini di questo libro, è il piccolo insieme di abitudini che mantiene onesto il riepilogo: scegliere un riepilogo adatto alla forma dei dati, sapere quanti dati stanno dietro ad esso e distinguere un cambiamento reale dal rumore.

La forma dei dati di servizio è il primo problema. Le misure temporali come il tempo di risoluzione, il cycle time e il tempo di attesa sono limitate a zero e hanno una lunga coda a destra. La maggior parte degli elementi si conclude rapidamente e pochi richiedono moltissimo tempo. Dati di questo tipo sono [asimmetrici](https://en.wikipedia.org/wiki/Skewness), e la media aritmetica è tirata verso la coda, perciò un ticket bloccato può spostare la media più di cento ticket di routine. La [mediana](https://en.wikipedia.org/wiki/Median), il valore centrale quando gli elementi sono ordinati, ne è molto meno influenzata. Un [percentile](https://en.wikipedia.org/wiki/Percentile) la generalizza: l'85° percentile è il valore entro cui si conclude l'85 per cento degli elementi. Le durate di questo tipo sono spesso modellate con una [distribuzione log-normale](https://en.wikipedia.org/wiki/Log-normal_distribution), in cui il logaritmo del valore è simmetrico. La lezione è che «tipico» e «medio» differiscono per i dati asimmetrici.

La dimensione del campione è il secondo problema. Un team che risolve 12 incidenti di priorità 1 in un trimestre e riporta «83 per cento entro l'obiettivo» sta descrivendo 10 casi su 12. Un solo mancato rispetto in più sposterebbe la cifra di otto punti. L'affermazione onesta include il conteggio, e spesso un intervallo. Un [intervallo di confidenza](https://en.wikipedia.org/wiki/Confidence_interval) è un intervallo calcolato dai dati che esprime quanto il valore vero potrebbe plausibilmente discostarsi da quello osservato. Gli intervalli sono ampi per i campioni piccoli e stretti per quelli grandi, che è il messaggio corretto per un trimestre con 12 incidenti.

La variazione è il terzo problema. Ogni processo produce numeri che oscillano da una settimana all'altra senza che nulla sia cambiato. Walter Shewhart, lavorando sulla qualità manifatturiera negli anni Venti, separò questa oscillazione di routine dai segnali che meritano un'indagine e ci diede la [carta di controllo](https://en.wikipedia.org/wiki/Control_chart). L'applicazione di carte di questo tipo a un processo si chiama [controllo statistico di processo](https://en.wikipedia.org/wiki/Statistical_process_control). Parte di quest'ultimo errore è la [regressione verso la media](https://en.wikipedia.org/wiki/Regression_toward_the_mean): un valore estremo tende a essere seguito da uno meno estremo, perciò la settimana successiva a una settimana terribile sembra una ripresa, che qualcuno abbia fatto qualcosa o meno.

La pratica agile del flusso, come l'uso da parte della Kanban Guide dei percentili del cycle time e dell'età dell'elemento di lavoro, chiede già distribuzioni e previsioni espresse come probabilità (vedi Argomento 2.1 «Misure del flusso»). In ITIL 4, la pratica di misurazione e rendicontazione e la pratica di miglioramento continuo dipendono entrambe da misure che significano ciò che sembrano significare, e la gestione dei livelli di servizio dipende da obiettivi fissati rispetto a una variazione realistica. L'alfabetizzazione statistica è lo strato condiviso sotto entrambe. Sostiene anche la salvaguardia dell'argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»: un team che mostra l'intera distribuzione ha meno posti in cui nascondere una media manipolata.

La variazione da causa comune è incorporata in un processo, e la variazione da causa speciale deriva da qualcosa di specifico che è cambiato o è andato storto. Un accordo sul livello di servizio (SLA) è un impegno documentato verso un cliente, e un obiettivo di livello di servizio (SLO) è un obiettivo per una misura.

## Principi chiave

- **Adattare il riepilogo alla forma.** Si usino mediane e percentili per le durate e si mostri l'intera distribuzione quando la decisione conta. Si riservi la media ai dati approssimativamente simmetrici, o a totali come il costo.
- **Ogni tasso porta il proprio conteggio.** Una percentuale senza numeratore e denominatore è un'affermazione priva di evidenze. Sotto un conteggio minimo dichiarato, si mostrino gli elementi grezzi anziché un tasso.
- **La variazione ordinaria non è una notizia.** Si conosca l'intervallo normale di una misura prima di reagire. Si risponda ai segnali, non a ogni movimento.
- **L'incertezza fa parte della risposta.** Si esprimano le previsioni come probabilità («l'85 per cento degli elementi si conclude entro 9 giorni») e le stime come intervalli, e si resista alla falsa precisione.
- **Mostrare le distribuzioni al team che possiede il lavoro.** Gli elementi grezzi e gli istogrammi rendono visibili i casi insoliti e rendono più difficile la manipolazione silenziosa.
- **Correlazione, selezione e tempistica spiegano molti «miglioramenti».** Ci si chieda che cos'altro è cambiato, chi è stato escluso dai dati e se il punto di partenza fosse insolitamente negativo.
- **Mantenere proporzionata la statistica.** Un team ha bisogno di una manciata di tecniche usate con coerenza, non di un corso di statistica. Si spieghi ogni grafico a parole semplici.

## Definizioni delle metriche

Le metriche seguenti descrivono la qualità statistica di una pratica di metriche e la distribuzione del lavoro di servizio. Le misure temporali usano i cronometri dichiarati in ciascuna riga, e le definizioni sono pensate per essere riutilizzate dagli argomenti successivi (vedi Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti» e Argomento 2.2 «Lead time, cycle time ed efficienza del flusso»).

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tempo mediano di risoluzione | Il tempo di risoluzione centrale degli incidenti risolti nel periodo | 50° percentile di (timestamp di risoluzione meno timestamp di creazione) sugli incidenti risolti nel periodo; il cronometro parte alla creazione del ticket e si ferma alla risoluzione; le sospensioni sono riportate separatamente, non sottratte; i ticket annullati e duplicati sono esclusi | ore o giorni | Storico degli stati dello strumento ITSM | Gestione degli incidenti; misurazione e rendicontazione | Cycle time mediano | Settimanale o mensile |
| Tempo di risoluzione a percentile alto | Il tempo entro cui si risolve la maggior parte degli incidenti, con il percentile nominato | 85° (o 95°) percentile dello stesso tempo trascorso di cui sopra; calcolato solo se sono stati risolti almeno 20 elementi, altrimenti si elencano gli elementi grezzi | ore o giorni | Storico degli stati dello strumento ITSM | Gestione degli incidenti; gestione dei livelli di servizio | Previsione del percentile del cycle time | Settimanale o mensile |
| Età dell'elemento aperto più vecchio | Età dell'elemento ancora aperto più vecchio, più il conteggio degli elementi più vecchi del percentile alto | adesso meno il timestamp di creazione per gli elementi aperti, senza sottrarre alcuna sospensione; conta tutti gli elementi aperti nella coda del servizio, compresi quelli in attesa del cliente | giorni | Strumento ITSM o issue tracker | Gestione degli incidenti; gestione dei problemi | Età dell'elemento di lavoro | Settimanale |
| Copertura della rendicontazione dei tassi | Quota dei tassi rendicontati che mostrano numeratore, denominatore e un controllo del conteggio minimo | tassi rendicontati con conteggi e un indicatore del campione / tassi rendicontati; conta solo i tassi pubblicati nel fascicolo di revisione del periodo | percentuale | Registro delle metriche (vedi Argomento 1.4 «Governance e responsabilità delle metriche») | Misurazione e rendicontazione | Accordi di lavoro | Trimestrale |
| Tasso di segnali della carta di controllo | Quota dei punti sulla carta di controllo di una misura che segnalano variazione da causa speciale secondo le regole scritte del team | punti segnalati secondo le regole / punti rappresentati, sugli ultimi 20 o più punti; le regole sono fissate in anticipo e registrate | percentuale | Strumento per carte di controllo o foglio di calcolo | Miglioramento continuo | Ispezione retrospettiva del processo | Mensile |
| Ampiezza dell'intervallo | Ampiezza dell'intervallo di incertezza dichiarato su un tasso principale | limite superiore meno limite inferiore dell'intervallo, usando il metodo indicato nel registro, per il tasso principale del periodo | punti percentuali | Calcolato dai conteggi dell'ITSM | Gestione dei livelli di servizio | Intervallo di previsione nella pianificazione | Mensile |

Dove un contratto nomina una media, si riporti la cifra contrattuale e si mostrino accanto la mediana e il percentile.

## Raccomandazioni

### Riepilogare onestamente i dati temporali

**1. Adottare per impostazione predefinita la mediana e un percentile alto nominato.** Per il tempo di risoluzione, il cycle time e il tempo di evasione, si pubblichino insieme la mediana e l'85° o il 95° percentile, e si scriva il percentile nel nome della metrica. La mediana dice che cosa è tipico, e il percentile alto dice che cosa si può ragionevolmente promettere a un cliente. Se si deve scegliere un solo numero per un impegno, si scelga il percentile.

**2. Mostrare la forma oltre al riepilogo.** Un istogramma o un grafico a dispersione del tempo di risoluzione per data di chiusura mostra cluster, code lunghe e spostamenti improvvisi che nessun riepilogo mostra. Quando l'immagine e il numero discordano, si creda all'immagine e si indaghi sul numero.

**3. Aggiungere l'età dell'elemento aperto più vecchio.** I percentili del lavoro concluso guardano all'indietro e ignorano tutto ciò che è ancora bloccato. Si riportino l'elemento aperto più vecchio e quanti elementi aperti sono già più vecchi del proprio percentile alto (vedi Argomento 2.1 «Misure del flusso»). È il singolo correttivo più utile per le medie che migliorano perché gli elementi difficili vengono lasciati invecchiare.

### Rispettare i campioni piccoli e l'incertezza

**4. Pubblicare il conteggio con ogni tasso.** Si scriva «10 su 12 risolti entro l'obiettivo» anziché «83 per cento». Si aggiunga una regola per cui i tassi basati su meno di un numero dichiarato di elementi vengono mostrati come conteggi o come elementi sottostanti. La soglia è un giudizio: la si scriva, la si riveda e la si applichi ovunque.

**5. Usare intervalli per i tassi principali e le previsioni.** Per una proporzione come la quota di modifiche che falliscono, si calcoli un intervallo di confidenza con un metodo su cui il team concorda e si annoti il metodo nel registro. Per le previsioni di consegna, un intervallo basato su un campione (per esempio, «probabilmente tra 8 e 14 elementi a settimana») dice ai pianificatori più di una singola cifra di throughput. Se l'intervallo è troppo ampio per orientare una decisione, lo si dica.

### Distinguere il segnale dal rumore

**6. Tracciare carte di controllo per le misure su cui si agisce.** Una semplice carta dei valori individuali rappresenta ogni punto in ordine temporale con una linea centrale e limiti calcolati dai dati, e segnala i punti fuori dai limiti o le sequenze da un solo lato del centro. Si parta dalla mediana settimanale del tempo di risoluzione e dal volume settimanale. Si scrivano una sola volta le regole di segnalazione (per esempio, un punto oltre i limiti, o una sequenza di otto da un lato) e le si mantenga fisse, così che il team non regoli le regole finché il grafico non concorda con le proprie sensazioni.

**7. Agire sui segnali e lasciare in pace la variazione da causa comune.** Quando un punto è entro i limiti, si resista a una spiegazione per esso; è il processo che si comporta come al solito. Quando compare un segnale, ci si chieda che cosa sia cambiato quella settimana: un rilascio, una carenza di personale, un'interruzione di un fornitore, una nuova categoria. Se il processo è stabile ma insoddisfacente, il miglioramento è un cambiamento del sistema, non una conversazione con chi ha avuto la settimana rossa.

**8. Aspettarsi la regressione verso la media dopo un periodo estremo.** Se si avvia un'iniziativa nel mese peggiore dell'anno, un certo miglioramento seguirà per caso. Si confronti con una baseline più lunga, con un servizio simile che non è cambiato o con i limiti di controllo prima di accreditare l'iniziativa. Una coppia prima-dopo di due punti è la forma più debole di evidenza.

### Ragionare con cura su causa e selezione

**9. Chiedersi che cosa manca ai dati.** Le risposte ai sondaggi provengono da persone che hanno scelto di rispondere. I ticket chiusi escludono quelli ancora aperti. Prima di trarre una conclusione, si elenchino chi o che cosa è assente e come ciò potrebbe inclinare il risultato.

**10. Cambiare le definizioni di proposito, e segnarlo sul grafico.** Un nuovo modello di stato, una nuova matrice di priorità o un nuovo elenco di categorie cambiano i dati senza cambiare il lavoro. Si annoti ogni modifica sul grafico e si riavviino i limiti di controllo dopo di essa (vedi Argomento 1.5 «Fonti dei dati e strumentazione»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tempo mediano di risoluzione | Chiudere prima i ticket rapidi lasciando aperti quelli difficili; spezzare un ticket in diversi ticket facili; sospendere il cronometro in uno stato di attesa del cliente | Tempo di risoluzione a percentile alto ed età dell'elemento aperto più vecchio; quota di tempo negli stati di sospensione; tasso di ticket collegati |
| Tempo di risoluzione a percentile alto | Scegliere un percentile che lusinga il risultato, o cambiarlo tra un rapporto e l'altro; escludere i casi lunghi come «valori anomali» o riclassificarli | Percentile fissato nel registro; un elenco degli elementi esclusi con le motivazioni; età dell'elemento aperto più vecchio |
| Età dell'elemento aperto più vecchio | Chiudere o accorpare l'elemento più vecchio senza risolverlo; spostarlo in un'altra coda o categoria | Tasso di riapertura; audit a campione sulle chiusure più vecchie; conteggio dei trasferimenti di coda |
| Copertura della rendicontazione dei tassi | Allegare un conteggio a caratteri minuscoli mentre i titoli continuano ad aprirsi con la percentuale; fissare il conteggio minimo così basso da non scattare mai | Rivedere la dashboard effettiva, non il registro; conteggio minimo rivisto insieme all'ampiezza dell'intervallo |
| Tasso di segnali della carta di controllo | Allargare i limiti, aggiungere regole o riavviare la baseline in modo che i segnali scompaiano; spostare i punti cambiando la misura | Regole e limiti conservati nel registro con cronologia delle modifiche; confronto con l'istogramma grezzo |
| Ampiezza dell'intervallo | Scegliere un metodo o una finestra che producono un intervallo stretto; aggregare servizi dissimili per ingrandire il campione | Metodo nominato nel registro; scomposizione per servizio disponibile su richiesta; confronto tra risultati aggregati e non aggregati |

Una lettura sana mostra mediane e percentili che si muovono nella stessa direzione dell'esperienza degli utenti, un breve elenco di elementi vecchi che si riduce senza essere riclassificato di nascosto e tassi che compaiono con i loro conteggi. Il tasso di segnali della carta di controllo dovrebbe essere basso e diverso da zero: una carta che non segnala mai potrebbe non essere in grado di farlo, e una che segnala sempre riflette un processo instabile o regole mal scelte.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Tempo medio di risoluzione | Semplice, corrisponde a molti contratti, facile da sommare | Dominato dalla coda; nasconde ciò che i clienti sperimentano tipicamente |
| Mediana più percentile alto | Resiste ai valori anomali; sostiene le promesse ai clienti | Richiede un po' di spiegazione; i percentili hanno bisogno di abbastanza elementi per essere stabili |
| Tassi grezzi senza conteggi | Compatti e familiari | Nascondono i campioni piccoli e invitano a leggere troppo |
| Tassi con conteggi e intervalli | Onesti sull'incertezza; scoraggiano la reazione eccessiva | Sembrano meno decisi; i metodi per gli intervalli richiedono accordo |
| Carte di controllo | Separano il segnale dal rumore; guidano quando agire | Richiedono abbastanza punti e definizioni stabili; i limiti possono essere fraintesi o manipolati |
| Confronto prima-dopo | Rapido e facile da comunicare | Soggetto a regressione verso la media e a cambiamenti concomitanti |

Per un servizio con una manciata di incidenti all'anno, nessuna statistica è stabile, e il metodo giusto è leggere ogni incidente. Per un desk ad alto volume, le misure che tengono conto della distribuzione sono economiche e chiaramente superiori. Si scelga in base al volume e alla posta in gioco della decisione.

## Domande da discutere con il team

**1. Quale dei nostri numeri attuali sulla dashboard è una media di qualcosa di asimmetrico, e che cosa mostrerebbero la mediana e il 95° percentile?**
Si scelga la misura temporale più osservata e si calcolino tutti e tre sullo stesso insieme di elementi prima della riunione. Ci si chieda se la storia raccontata dalla media corrisponda a ciò che dicono gli utenti. Si concluda concordando quale riepilogo diventa il titolo e dove compariranno gli altri.

**2. Quanti elementi stanno dietro alla nostra percentuale più citata, e la citeremmo ancora se scrivessimo i conteggi?**
Si elenchino le tre percentuali che la direzione legge di più. Accanto a ciascuna, si scrivano numeratore e denominatore dell'ultimo periodo. Ci si chieda che cosa farebbe alla cifra un singolo successo o fallimento in più. Si concordi un conteggio minimo sotto il quale il team mostra gli elementi anziché un tasso.

**3. Quando è stata l'ultima volta che abbiamo attribuito un miglioramento a un'iniziativa, e che cos'altro era vero in quel momento?**
Si scelga una storia di successo recente. Ci si chieda quando la misura era al suo peggio, che aspetto abbia la storia più lunga e se anche un servizio comparabile sia migliorato. Si mantenga un tono curioso.

**4. Qual è l'intervallo normale delle nostre misure chiave, e chi sarebbe in grado di dire che una data settimana è insolita?**
Si rappresentino gli ultimi 20 o più valori settimanali di una misura e si traccino il centro e i limiti, o li si calcoli approssimativamente. Ci si chieda a quali settimane entro l'intervallo il team abbia reagito. Si concordi chi possiede il grafico e dove sono scritte le regole di segnalazione.

**5. Chi o che cosa manca ai nostri dati?**
Si elenchino le fonti della misura: ticket chiusi, risposte ai sondaggi, servizi monitorati, strumenti con timestamp. Per ciascuna, ci si chieda chi è escluso e perché. Si registri ogni lacuna come una correzione o come un'avvertenza.

**6. Come spiegheremmo alla direzione un intervallo ampio o un «non lo sappiamo ancora» senza che suoni come una scusa?**
Si provi la formulazione su un esempio reale: «Tra il 70 e il 95 per cento, su 12 incidenti; ci aspettiamo di restringerlo dopo il prossimo trimestre». Ci si chieda di che cosa il pubblico abbia bisogno per decidere e se l'intervallo cambi la decisione. Si scriva un breve copione durante la riunione.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna usano il cycle time e il throughput per prevedere, e traggono il massimo beneficio da previsioni basate sui percentili anziché sulle medie (vedi Argomento 2.1 «Misure del flusso»). Una previsione espressa come intervallo con una probabilità è più facile da difendere di una data. Si resista alla tentazione di leggere come tendenza la variazione di un singolo periodo (vedi Argomento 2.5 «Metriche di previsione e pianificazione della consegna»).

### Team di servizio e operations

I team di operazioni possiedono i dati dei ticket e i cronometri degli incidenti, perciò sono nella posizione migliore per pubblicare mediane, percentili e l'elemento aperto più vecchio, e per spiegare le regole di sospensione. Dovrebbero rappresentare il volume settimanale e il tempo di risoluzione con limiti di controllo, in modo che un vero spostamento, come un rilascio difettoso, sia distinto da una cattiva settimana. Quando un servizio ha pochi incidenti, dovrebbero rivederli uno per uno anziché calcolare i tassi (vedi Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»).

### Leadership e governance

I dirigenti pongono le domande che plasmano ciò che i team mostrano. Chiedere «perché questo è salito?» a ogni oscillazione addestra l'organizzazione a spiegare il rumore e a nasconderlo. I dirigenti dovrebbero chiedere se un movimento rientra nell'intervallo normale, quanti elementi stanno dietro a una cifra e che cosa è cambiato nel processo. Gli organi di governance possono richiedere i conteggi sui tassi principali.

### Clienti e utenti

I clienti sperimentano casi individuali, non medie. Ricordano la singola richiesta che ha impiegato cinque settimane, e una media di due giorni non ripara quel ricordo. Gli impegni sui percentili («nove richieste su dieci entro tre giorni lavorativi») corrispondono meglio al modello mentale del cliente dei tempi medi. I risultati dei sondaggi dovrebbero essere mostrati con il numero di risposte, e i commenti aperti dovrebbero essere letti insieme ai numeri (vedi Argomento 6.1 «Metriche di soddisfazione del cliente»).

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni ha un service desk e un team di operazioni che supporta il suo negozio web. Le cifre seguenti sono illustrative.

La direzione vede un titolo mensile: «il tempo medio di risoluzione degli incidenti è sceso da 9,1 ore a 7,4 ore». Alla responsabile delle operazioni viene chiesto di confermarlo e di presentare il piano per il prossimo obiettivo, 6 ore. Prima di accettare, chiede all'analista di estrarre gli elementi sottostanti e di rappresentarli. Su 240 incidenti nel mese (illustrativi), la mediana è di 2,5 ore, l'85° percentile è di 14 ore e 9 incidenti hanno più di 5 giorni e sono ancora aperti. Il mese prima, la mediana era 2,6 ore. La media è scesa perché tre incidenti molto lunghi del mese precedente, uno dei quali aveva 11 giorni, si sono risolti per caso prima nel periodo, e perché un lotto di ticket di reimpostazione della password è stato ricategorizzato in un tipo di richiesta a chiusura rapida.

Il team rappresenta la mediana settimanale delle ultime 26 settimane. La linea centrale sta vicino a 2,6 ore e ogni punto degli ultimi due mesi è entro i limiti. Il calo del titolo non è un segnale. La ricategorizzazione nella seconda settimana ha cambiato la definizione a metà grafico, perciò il team la segna e riavvia i limiti da quel punto.

Decidono tre modifiche. Il rapporto mensile mostrerà la mediana, l'85° percentile e l'elemento aperto più vecchio, con il numero di incidenti dietro ciascuno. L'obiettivo proposto di 6 ore di media viene sostituito da una conversazione su un obiettivo basato su un percentile, da fissare dopo un trimestre di dati con la nuova definizione. Il team elencherà anche i 9 vecchi incidenti con un responsabile e un passo successivo per ciascuno.

Il rischio di manipolazione che intercettano compare alla revisione successiva. Un manager propone di chiudere i 9 incidenti più vecchi come «non più riproducibili» per far apparire sana la cifra dell'elemento più vecchio. Poiché il registro abbina l'età dell'elemento aperto più vecchio al tasso di riapertura e a un audit a campione sulle vecchie chiusure, il team legge tre delle chiusure proposte, scopre che due sono ancora attive e le mantiene aperte. La cifra dell'elemento più vecchio resta scomoda per un altro mese. È il comportamento voluto.

## Lente di settore

**Startup.** I volumi sono piccoli, quindi la maggior parte dei tassi è fatta di pochi elementi e gli intervalli sono ampi. Si legga ogni incidente anziché calcolare statistiche, si tenga un semplice grafico settimanale di una o due misure e si eviti di dichiarare tendenze a partire da tre punti. Quando il volume cresce, si passi presto a mediane e percentili in modo che le abitudini siano già acquisite.

**Piccola impresa.** La persona che gestisce l'IT possiede anche i dati, e il campione è di solito piccolo. Si riportino conteggi, non percentuali, per gli eventi rari e si confronti con il proprio storico più lungo. Si verifichi che cosa misuri davvero il cronometro del «tempo di risposta» di un fornitore.

**Grande impresa.** Il volume rende significative le distribuzioni, e incoraggia anche aggregazioni che mescolano servizi dissimili. Si confronti ciò che è comparabile, si pubblichino le definizioni e il percentile usato e si mantenga una libreria condivisa di regole di grafici e di calcolo, in modo che i team non calcolino la stessa misura in tre modi.

**Pubblica amministrazione e settore pubblico.** I contratti e la rendicontazione per legge fissano spesso una media o una percentuale soglia, e quelle definizioni non sono negoziabili. Si riporti la cifra richiesta esattamente come definita e si mostrino accanto la mediana, il percentile e i conteggi, in modo che gli organi di controllo vedano il quadro completo. Il controllo pubblico rende più preziosa l'incertezza onesta, perché un numero troppo sicuro è costoso da ritirare (vedi Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

Occorrono poche ore per concordare le regole di riepilogo, costruire un istogramma e una carta di controllo a partire da un'esportazione e aggiungere i conteggi a un modello di rapporto, più pochi minuti a ogni ciclo per mantenerli aggiornati. La maggior parte degli strumenti calcola già i percentili. Il costo maggiore è una conversazione con persone abituate a un unico numero rassicurante.

Il ritorno è nelle decisioni migliori e nella minore reazione sprecata. I team smettono di riorganizzarsi dopo una cattiva settimana, smettono di accreditare alle iniziative miglioramenti casuali e smettono di promettere medie che metà dei loro clienti non sperimenta. Non si prenda in prestito una cifra: si conti quante volte le decisioni dell'anno scorso sono state ribaltate e quanti «miglioramenti» sono svaniti nel periodo successivo, e si usino quei conteggi per dimensionare il caso.

## Anti-pattern e insidie

- **Mediare durate asimmetriche.** La media è trascinata dalla coda e nasconde ciò che gli utenti percepiscono. Si riportino la mediana e un percentile alto nominato e si mostri l'elemento aperto più vecchio.
- **Percentuali da campioni minuscoli.** «100 per cento» da tre elementi è un aneddoto. Si mostrino i conteggi e si applichi una regola del conteggio minimo.
- **Reagire a ogni oscillazione.** Inseguire ogni settimana rossa spreca sforzo e insegna ai team a spiegare il rumore. Si usino limiti di controllo e regole di segnalazione scritte.
- **Prova prima-dopo.** Due punti non possono separare un intervento dal caso o dalla regressione verso la media. Si usi una baseline più lunga e un confronto.
- **Spostare i pali sul grafico.** Cambiare limiti, regole o definizioni a posteriori fa concordare qualsiasi grafico con la storia. Si fissino le regole, si registrino le modifiche e le si annotino.
- **Escludere i valori anomali per impostazione predefinita.** I casi più lunghi sono di solito quelli che i clienti ricordano. Si escluda solo con una motivazione scritta e si elenchi ciò che è stato escluso.
- **Falsa precisione.** Riportare 83,3 per cento da 12 elementi implica una conoscenza che i dati non hanno. Si arrotondi con onestà e si mostri un intervallo.
- **Aggregare lavoro dissimile.** Un tempo mescolato di reimpostazioni di password e di guasti del data center non descrive nessuno dei due. Si segmenti prima.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Riepiloghi dei dati temporali | Solo medie | Alcuni team mostrano le mediane | Mediana più un percentile nominato ed elemento aperto più vecchio sono lo standard | Distribuzioni riviste con una salvaguardia e analizzate nel tempo | Impegni sui percentili concordati con clienti e fornitori e rivisti al mutare dei dati |
| Dimensione del campione e incertezza | Tassi citati senza conteggi | Conteggi mostrati in alcuni rapporti | Conteggi e una regola del conteggio minimo su ogni tasso | Intervalli sui tassi principali, metodo nel registro | Incertezza condivisa apertamente con i clienti e usata nella pianificazione tra i team |
| Variazione e causalità | Ogni cambiamento viene spiegato | Alcuni grafici con limiti | Carte di controllo con regole scritte per le misure chiave | I segnali innescano un'indagine pianificata; iniziative verificate rispetto alla baseline | Librerie di grafici condivise tra i servizi; baseline confrontate tra i team senza classifiche |

## Checklist

- [ ] Ogni misura temporale riporta una mediana e un percentile alto nominato, anziché una sola media.
- [ ] Sono riportati l'età dell'elemento aperto più vecchio e il conteggio degli elementi oltre il percentile alto.
- [ ] Ogni tasso rendicontato mostra numeratore e denominatore.
- [ ] Una regola del conteggio minimo è messa per iscritto e applicata a tutti i tassi.
- [ ] I tassi principali e le previsioni mostrano un intervallo, con il metodo nominato nel registro.
- [ ] Esistono carte di controllo per le tre misure su cui il team agisce, con regole di segnalazione scritte.
- [ ] Le modifiche alle definizioni sono annotate sui grafici e registrate nel registro.
- [ ] Gli elementi esclusi sono elencati con le motivazioni.
- [ ] Le affermazioni di miglioramento sono verificate rispetto a una baseline più lunga prima di essere ripetute.
- [ ] Il vettore di manipolazione e la salvaguardia di ogni metrica sono nel registro (vedi Argomento 1.4 «Governance e responsabilità delle metriche»).

## Prompt IA

**Verificare se un riepilogo si adatta ai dati.**

```text
Ho [numero] valori di [misura, come il tempo di risoluzione degli incidenti] per
[servizio] nel periodo [periodo]. Il cronometro parte a [evento di avvio] e si
ferma a [evento di arresto]. Le sospensioni sono [gestite come]. I valori sono
incollati di seguito.

Descrivi la forma della distribuzione, calcola la media, la mediana e il
[percentile, come l'85°] e il [secondo percentile, come il 95°], e dimmi quale
riepilogo rappresenta meglio un caso tipico e quale sostiene una promessa ai
clienti. Segnala i valori che sembrano errori nei dati, ma non rimuoverli. Non
inventare valori di riferimento. Elenca le tue ipotesi e ciò che non hai potuto
determinare dai dati.

[incolla i valori, con i dati personali rimossi]
```

**Esprimere un tasso con la sua incertezza.**

```text
Il nostro team riporta [nome del tasso] come [numeratore] su [denominatore] per
[periodo] e [servizio]. Mostra come presentarlo con i conteggi, spiega a parole
semplici di quanto lo cambierebbe un successo in più o in meno e calcola un
intervallo di confidenza usando [metodo, oppure «un metodo che consigli e
nomini»]. Suggerisci una formulazione comprensibile a un dirigente non tecnico e
una regola del conteggio minimo per decidere quando mostrare gli elementi anziché
un tasso. Non inventare cifre di confronto. Elenca le tue ipotesi, compresi il
metodo e le condizioni sui dati che richiede.
```

**Giudicare se un cambiamento è un segnale o rumore.**

```text
Ecco [numero] valori consecutivi [settimanali o mensili] di [misura] per
[servizio]. Un cambiamento è avvenuto in [periodo]: [descrivi l'intervento, il
rilascio o la modifica di definizione]. Rappresenta o descrivi una carta di
controllo con una linea centrale e limiti, applica queste regole di
segnalazione: [elenco delle regole, come un punto oltre i limiti o una sequenza
di otto da un lato], e dimmi quali punti segnalano. Di' se il cambiamento è
distinguibile dalla variazione ordinaria e quali altre spiegazioni, come la
regressione verso la media o una modifica di definizione, dovrei escludere. Non
sostenere la causalità. Elenca le tue ipotesi e i dati aggiuntivi che sarebbero
utili.

[incolla i valori]
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare l'argomento e la salvaguardia abbinata per una metrica di tempo o di tasso prima di pubblicarla.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una misura statistica aggiunta a un argomento abbia la propria definizione, i cronometri, il vettore di manipolazione e la salvaguardia.

## Punti chiave

- Le durate di servizio sono asimmetriche, perciò si riportino la mediana e un percentile alto nominato, e si aggiunga l'età dell'elemento aperto più vecchio.
- Ogni tasso porta il proprio conteggio, e i campioni piccoli sono mostrati come elementi o con un intervallo, non come una percentuale sicura.
- Si conosca l'intervallo normale di una misura con una carta di controllo prima di reagire a una singola settimana.
- Si diffidi dei miglioramenti misurati con due punti: la regressione verso la media e le modifiche di definizione ne spiegano molti.
- L'incertezza onesta è un punto di forza in un rapporto ed è una salvaguardia contro la manipolazione alla Goodhart (vedi Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).
- Si mantenga proporzionata la tecnica: pochi metodi coerenti, spiegati a parole semplici, servono a un team meglio di molti metodi non spiegati.

## Riferimenti e letture di approfondimento

1. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
2. Shewhart, W. A., *Economic Control of Quality of Manufactured Product*, D. Van Nostrand, 1931.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
5. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd edition, Wiley, 2014.
6. Kahneman, D., *Thinking, Fast and Slow*, Farrar, Straus and Giroux, 2011.
7. Tufte, E. R., *The Visual Display of Quantitative Information*, 2nd edition, Graphics Press, 2001.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Wikipedia, [Skewness](https://en.wikipedia.org/wiki/Skewness).
10. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
11. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
12. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
14. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
15. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
16. Wikipedia, [Regression toward the mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean).
