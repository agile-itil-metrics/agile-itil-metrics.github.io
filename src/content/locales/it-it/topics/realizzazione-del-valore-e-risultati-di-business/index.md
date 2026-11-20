# Realizzazione del valore e risultati di business

**Consegnare una modifica non equivale al fatto che l'organizzazione ne tragga beneficio: si dichiari dunque il beneficio atteso prima di costruire, lo si verifichi dopo il rilascio con le persone che dovevano trarne vantaggio e si sia onesti su quanta parte di un miglioramento si possa attribuire al proprio lavoro.**

## Panoramica e motivazione

I modi di lavorare agili mettono al primo posto il software funzionante e mantengono gli stakeholder in collaborazione costante, così che ciò che viene rilasciato sia ciò di cui le persone hanno bisogno. L'IT service management (ITSM), così come codificato da ITIL, inquadra la stessa preoccupazione come valore: un servizio è prezioso quando aiuta i clienti a ottenere i risultati che desiderano, con costi e rischi che accettano. Entrambe le tradizioni si incontrano su una domanda scomoda. Tra un anno, le persone e l'organizzazione stanno meglio grazie a ciò che questo team ha costruito e gestito?

Rispondere è più difficile che contare ciò che è stato consegnato. Le funzionalità vengono rilasciate e nessuno le usa. Gli incidenti calano per ragioni estranee al lavoro del team. Un risparmio di costo compare su una slide, e il budget da cui proviene viene speso altrove. Questo argomento riguarda la chiusura di quel divario, e si collega direttamente alla centralità dei risultati introdotta all'inizio del libro (si veda l'argomento 1.3, Risultati prima della produzione: scegliere cosa misurare).

Quattro idee organizzano l'argomento.

- **Beneficio.** Un beneficio è un miglioramento misurabile che uno stakeholder apprezza, come meno tempo speso in un compito, meno errori, più clienti serviti o minor rischio. Una funzionalità non è un beneficio. È un mezzo. La [gestione della realizzazione dei benefici](https://en.wikipedia.org/wiki/Benefits_realisation_management) è la disciplina che consiste nell'individuare i benefici, assegnare i responsabili e verificare che arrivino.
- **Ipotesi di valore.** Prima di costruire, il team scrive che cosa si aspetta che cambi, per chi, di quanto e come lo si riconoscerà. È un'affermazione verificabile e può essere sbagliata. Una [teoria del cambiamento](https://en.wikipedia.org/wiki/Theory_of_change) o un [modello logico](https://en.wikipedia.org/wiki/Logic_model) espone la catena che va dalle attività agli output ai risultati, aiutando a rendere esplicita l'ipotesi.
- **Indicatori anticipatori e posticipatori.** Un [indicatore anticipatore](https://en.wikipedia.org/wiki/Leading_indicator) si muove presto e prevede un risultato, come l'adozione di un nuovo processo. Un [indicatore posticipatore](https://en.wikipedia.org/wiki/Lagging_indicator) conferma il risultato a posteriori, come la riduzione del costo per transazione. Si usino entrambi: gli indicatori anticipatori permettono di correggere la rotta, e quelli posticipatori dicono se ha funzionato.
- **Attribuzione.** Molte cose cambiano contemporaneamente. Per dire che il proprio lavoro ha causato un miglioramento serve un confronto: una linea di base, un gruppo di confronto o un disegno prima-dopo che tenga conto delle altre modifiche. Senza di esso, le affermazioni di valore sono racconti. La posizione onesta è spesso «associato a» e non «causato da».

I framework di obiettivi come gli [objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results) (OKR) possono collegare il lavoro del team ai risultati di business, e l'argomento precedente sui framework di misurazione li tratta in dettaglio (si veda l'argomento 1.7, Framework di misurazione). Il rischio di ogni framework è quello indicato dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): quando un numero di beneficio diventa un obiettivo, le persone trovano modi di produrre il numero senza il beneficio (si veda l'argomento 1.2, La legge di Goodhart e la psicologia delle metriche).

L'argomento fa anche da ponte verso il denaro. L'argomento della parte successiva su ritorno sull'investimento e business case assume in profondità la prospettiva finanziaria (si veda l'argomento 7.7, Ritorno sull'investimento e business case). Qui l'attenzione è sulle evidenze dei risultati, che alimentano quel caso.

## Principi chiave

- **Si scriva il beneficio atteso prima di costruire.** Un'affermazione che non può essere verificata in seguito non permette di imparare.
- **Si nomini un responsabile per ogni beneficio.** Il responsabile è uno stakeholder che vedrà il cambiamento, non il team di consegna.
- **Si misuri presso gli utenti, dopo il rilascio.** La consegna è l'inizio della verifica, non la fine.
- **Si usino indicatori anticipatori per orientarsi e posticipatori per confermare.**
- **Si sia onesti sull'attribuzione.** Si dica che cos'altro è cambiato e si evitino affermazioni che le evidenze non possono sostenere.
- **Si contino i benefici che non sono arrivati.** Imparare da un'ipotesi fallita è un beneficio del lavorare in questo modo.
- **Si continui a collaborare.** Stakeholder e team rivedono insieme le evidenze, con regolarità.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasso di realizzazione dei benefici | Quota di benefici attesi che sono stati osservati alla data di revisione concordata | benefici con risultato misurato pari o superiore alla soglia concordata / benefici attesi con una data di revisione nel periodo | percentuale | Registro dei benefici con responsabili, linee di base e date di revisione | Miglioramento continuo; governance del sistema di valore del servizio | Revisione dei risultati con gli stakeholder | Trimestrale |
| Tempo al primo valore | Tempo dall'inizio del lavoro al primo beneficio misurabile per gli utenti | giorni dall'avvio del primo lavoro alla prima data in cui l'indicatore di beneficio si è mosso come atteso | giorni | Tracker del lavoro e indicatore di beneficio | Progettazione del servizio; gestione di rilasci e distribuzioni | Consegna continua di valore | Per iniziativa |
| Tasso di verifica delle ipotesi | Quota di modifiche rilasciate la cui ipotesi di valore dichiarata è stata verificata dopo il rilascio | modifiche con una verifica post-rilascio registrata / modifiche rilasciate che portavano un'ipotesi | percentuale | Registro delle ipotesi collegato ai record di rilascio | Miglioramento continuo; abilitazione delle modifiche | Apprendimento dal lavoro rilasciato | Mensile |
| Quota di qualità delle evidenze | Quota di benefici dichiarati che hanno una linea di base e un metodo di confronto dichiarato | dichiarazioni di beneficio con linea di base e metodo / dichiarazioni di beneficio riportate | percentuale | Revisione del registro dei benefici | Misurazione e rendicontazione | Rendicontazione onesta dei risultati | Trimestrale |
| Variazione dell'indicatore di risultato | Variazione di un indicatore di risultato scelto rispetto alla sua linea di base e, dove disponibile, a un confronto | (indicatore dopo meno indicatore prima) con la variazione del gruppo di confronto riportata accanto | unità dell'indicatore | Analisi di prodotto, dati di servizio, finanza | Gestione dei livelli di servizio; miglioramento continuo | Avanzamento dei key result | Mensile |
| Ore di impatto sul business | Ore in cui un processo di business è stato degradato o fermo a causa di problemi del servizio | ore di processo degradato o fermo attribuite dai responsabili del processo a cause legate al servizio IT | ore | Record degli incidenti collegati alla conferma del responsabile del processo | Gestione degli incidenti; gestione della disponibilità | Revisione dell'impatto sul business | Mensile |
| Quota di capacità legata ai risultati | Quota di capacità del team spesa in lavoro collegato a un risultato dichiarato | capacità su voci collegate a un risultato registrato / capacità totale | percentuale | Tracker del lavoro con campo risultato | Sistema di valore del servizio; governance del portafoglio | Lavoro allineato all'obiettivo di prodotto | Trimestrale |

Si definiscano la data di revisione e la soglia di ogni beneficio nel momento in cui viene registrato, non in seguito. Il tempo al primo valore parte quando inizia il lavoro e si ferma quando l'indicatore si muove per la prima volta nella direzione attesa di una quantità dichiarata, il che può avvenire molto dopo il rilascio. L'attribuzione delle ore di impatto sul business è concordata con il responsabile del processo, e le controversie sono registrate.

## Raccomandazioni

### Prima di costruire: rendere verificabile l'affermazione

**1. Si scriva un'ipotesi di valore per ogni modifica significativa.** Si usi una forma semplice: «Riteniamo che [modifica] aiuterà [chi] a [fare che cosa] in modo che [miglioramento misurabile]. Lo sapremo da [indicatore] che passa da [linea di base] a [atteso], rivisto il [data].» La si mantenga abbastanza breve da stare su una scheda della lavagna. I team che non riescono a riempire gli spazi vuoti spesso non hanno ancora compreso il problema.

**2. Si registri una linea di base.** Senza un prima non c'è un dopo. Si catturino il valore attuale dell'indicatore, come è stato misurato e quanto varia. Se l'indicatore è rumoroso, un singolo numero è fuorviante, perciò si registri un intervallo su diverse settimane (si veda l'argomento 1.6, Alfabetizzazione statistica per le metriche di servizio).

**3. Si scelgano indicatori anticipatori e posticipatori.** Per una nuova richiesta self-service, un indicatore anticipatore è quanti utenti idonei la completano, e un indicatore posticipatore è il calo delle ore di gestione manuale (si veda l'argomento 6.3, Metriche di adozione del servizio e del catalogo). Si concordi quale indicatore si verifica e quando. Gli indicatori anticipatori consentono una correzione in corso d'opera senza attendere la fine del trimestre.

**4. Si nomini un responsabile del beneficio esterno al team di consegna.** Il responsabile è lo stakeholder che vedrà il miglioramento nella propria area e che può giudicarlo. Il team di consegna supporta la misurazione ma non corregge i propri compiti. Questa è collaborazione continua nella pratica: la persona che voleva il risultato resta coinvolta finché non è confermato.

### Dopo il rilascio: verificare, con onestà

**5. Si riveda l'ipotesi alla data concordata.** Si tenga una breve revisione con il responsabile e il team. Si guardino l'indicatore, la linea di base e il confronto. Si registri il risultato nel registro: raggiunto, raggiunto in parte, non raggiunto o impossibile dirlo. «Impossibile dirlo» è un risultato legittimo e uno spunto per migliorare la misurazione.

**6. Si usi un confronto dove possibile.** Il confronto più forte è un esperimento controllato. L'[A/B testing](https://en.wikipedia.org/wiki/A/B_testing) confronta due versioni con utenti assegnati in modo casuale e funziona bene per i servizi digitali con traffico sufficiente. Dove la randomizzazione non è possibile, un rilascio scaglionato permette di confrontare i gruppi che hanno e non hanno ricevuto la modifica. Un approccio [differenza nelle differenze](https://en.wikipedia.org/wiki/Difference_in_differences) confronta la variazione in un gruppo trattato con la variazione in un gruppo non trattato nello stesso periodo, eliminando le tendenze comuni. Si usi il disegno più semplice che si adatti.

**7. Si cerchino i fattori di confusione.** Un fattore di [confondimento](https://en.wikipedia.org/wiki/Confounding) è qualcos'altro che è cambiato e potrebbe spiegare il risultato: un andamento stagionale, una nuova policy, una diversa composizione delle richieste. Si elenchino quelli plausibili prima di rivendicare un effetto. Se non si riesce a escluderli, si dica che cosa le evidenze sostengono e non di più.

**8. Si riportino i risultati negativi e nulli.** Quando una modifica non ha aiutato, lo si dica e si registri ciò che si è imparato. Il [bias del sopravvissuto](https://en.wikipedia.org/wiki/Survivorship_bias), l'abitudine di guardare solo i successi, fa apparire i programmi migliori di quanto siano. Un registro che contiene solo vittorie non è stato tenuto con onestà.

### Mantenere onesto il programma

**9. Si separi la qualità delle evidenze dal beneficio.** Si monitori la quota di dichiarazioni che hanno una linea di base e un metodo dichiarato. Una grande dichiarazione con evidenze deboli deve apparire come tale. Un registro sano mostra dichiarazioni modeste con evidenze solide e alcune oneste voci «impossibile dirlo».

**10. Si colleghi la capacità ai risultati, con elasticità.** Ci si chieda quale quota del lavoro del team sia legata a un risultato dichiarato e si guardi al resto. Alcuni lavori, come le correzioni di sicurezza o il mantenere le luci accese, non hanno un nuovo beneficio, e va bene se sono nominati. Lo scopo è accorgersi della deriva, non forzare ogni compito in una storia di benefici.

**11. Ci si colleghi al framework di obiettivi che si usa.** Se si usano gli OKR, si facciano dei key result gli indicatori di risultato e li si riveda con gli stakeholder. Si mantengano i key result centrati sui risultati, non sui compiti, e si lasci spazio per obiettivi ambiziosi che potrebbero non essere pienamente raggiunti. Non si facciano dei key result obiettivi individuali (si veda l'argomento 1.7, Framework di misurazione).

**12. Si riveda il portafoglio oltre al progetto.** Una volta a trimestre si guardi tra le iniziative quali benefici sono arrivati, quali no e che cosa dice lo schema su come il team stima e seleziona il lavoro. Lo si usi per migliorare il modo in cui sono scritte le ipotesi, non per classificare i team.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di guardrail abbinata |
| --- | --- | --- |
| Tasso di realizzazione dei benefici | Fissare soglie basse; spostare la data di revisione; ridefinire il beneficio a posteriori | Soglia e data fissate all'approvazione; quota di qualità delle evidenze; responsabile esterno al team di consegna |
| Tempo al primo valore | Scegliere un indicatore precoce che si muove per la ragione sbagliata; far partire l'orologio in ritardo | Indicatore e orologio definiti nel registro; conferma con il responsabile del beneficio |
| Tasso di verifica delle ipotesi | Scrivere ipotesi vaghe che passano sempre; verificare solo le modifiche riuscite | Campionare le ipotesi per verificarne la testabilità; includere nella revisione i risultati nulli e falliti |
| Quota di qualità delle evidenze | Ricostruire a posteriori le linee di base; descrivere qualunque confronto come metodo | Linea di base datata prima della modifica; revisione da parte di qualcuno esterno al team |
| Variazione dell'indicatore di risultato | Scegliere un periodo o un gruppo favorevole; ignorare i fattori di confusione | Periodo e gruppo preregistrati; elenco dei fattori di confusione considerati |
| Ore di impatto sul business | I responsabili di processo che gonfiano o sgonfiano le attribuzioni; incidenti riclassificati per evitare l'attribuzione | Regole di attribuzione scritte e registrate; confronto con i record di incidenti e disponibilità |
| Quota di capacità legata ai risultati | Etichettare tutto il lavoro con un risultato generico; inventare risultati per il lavoro di routine | Elenco dei risultati rivisto con gli stakeholder; campionare le voci per verificare la qualità del collegamento |

Una lettura sana è un registro in cui alcuni benefici sono raggiunti, altri no, alcuni sono incerti e ogni voce ha una linea di base, un responsabile e un metodo dichiarato. Un registro di successo uniforme va trattato con sospetto.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Registro formale dei benefici | Responsabilità, apprendimento tra le iniziative | Burocrazia se applicato a ogni piccola modifica |
| Ipotesi leggera su ogni scheda | Economica, costruisce l'abitudine | Facile da scrivere in modo vago |
| Esperimento controllato | Forte evidenza della causa | Richiede traffico, tempo e un disegno adatto al servizio |
| Solo prima-dopo | Semplice, rapido | Confuso da altre modifiche |
| Giudizio degli stakeholder | Coglie il valore che le metriche non vedono | Soggetto a ottimismo e politica |
| Indicatori anticipatori | Correzione di rotta precoce | Possono non prevedere il vero risultato |
| Indicatori posticipatori | Confermano i risultati reali | Arrivano tardi; molte cause |

La risposta in prosa è commisurare il peso delle evidenze alla dimensione e al rischio della modifica. Si usino un'ipotesi leggera e un semplice prima-dopo per le modifiche piccole, e un esperimento o un rilascio scaglionato per quelle grandi. Si registri sempre che cosa ci si aspettava, che cosa è accaduto e quanto si è sicuri.

## Domande da discutere con il team

**1. Che cosa abbiamo rilasciato nell'ultimo trimestre e che cosa è cambiato per le persone che doveva aiutare?**
Si elenchino le principali modifiche e, per ciascuna, si nomini la persona che noterebbe una differenza. Ci si chieda che cosa direbbe. Il facilitatore dovrebbe annotare le modifiche per cui nessuno sa rispondere, poiché sono candidate a una verifica post-rilascio. Si concordi una modifica da rivedere con il suo responsabile entro un mese.

**2. Per la nostra prossima modifica significativa, qual è l'ipotesi di valore e come sapremo se è vera?**
Si compili insieme il modulo dell'ipotesi. Si mettano in discussione le parole vaghe e le linee di base mancanti. Ci si chieda quale risultato spingerebbe il team a cambiare i propri piani. Se il gruppo non riesce a concordare una misura, è un compito di discovery prima di costruire.

**3. Chi è il responsabile del beneficio ed è presente?**
Si verifichi che ogni beneficio abbia un responsabile esterno al team di consegna. Ci si chieda con quale frequenza il responsabile vede le evidenze. Dove il responsabile è il team stesso, si discuta chi altro dovrebbe condividere il giudizio. La conversazione sostiene la collaborazione continua tra gli stakeholder.

**4. Che cos'altro è cambiato quando i numeri sono migliorati?**
Si prenda un miglioramento recente dichiarato e si elenchino le altre modifiche dello stesso periodo: policy, stagionalità, organico, il rilascio di un altro team. Ci si chieda quali potrebbero spiegare il risultato. Si decida se descrivere il miglioramento come causato dalla modifica, associato a essa o incerto.

**5. Quali delle nostre ipotesi passate si sono rivelate sbagliate e che cosa ne abbiamo fatto?**
Si chieda una storia di un'aspettativa fallita. Se non ne arriva una in fretta, il team potrebbe non verificare, o non parlarne. Si discuta come rendere sicuro e utile riportare un risultato nullo.

**6. Quale quota della nostra capacità è legata a un risultato e ci sembra giusto?**
Si riveda un mese di lavoro concluso e si contrassegni ogni voce con un risultato o con «mantenere in funzione il servizio». Ci si chieda se la ripartizione corrisponde a ciò che i leader pensano. Si discuta il lavoro senza risultato e se debba continuare.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna sono responsabili dell'ipotesi e del piano di misurazione, e dovrebbero consegnare le modifiche a piccoli passi in modo che le evidenze arrivino presto. Dovrebbero incorporare l'indicatore nella modifica, per esempio registrando gli eventi che servono, e chiedere al responsabile del beneficio di confermare ciò che vede. I team dovrebbero accogliere le ipotesi fallite come informazione, poiché un apprendimento precoce risparmia il costo di costruire altro di sbagliato.

### Team di servizio e operations

I team di operations vedono l'effetto reale delle modifiche su incidenti, richieste e capacità. Detengono gran parte dei dati per gli indicatori posticipatori, come le ore di gestione manuale e i contatti ripetuti, e dovrebbero aiutare a verificare le ipotesi oltre ad assorbire il cambiamento. Dovrebbero farsi sentire quando i benefici dichiarati sulla carta non corrispondono a ciò che vede il service desk.

### Leadership e governance

I leader scelgono se i benefici siano uno strumento di apprendimento o un discorso di vendita. Dovrebbero chiedere linee di base e metodi, accogliere con favore i risultati onesti di «non raggiunto» ed evitare di vincolare i team a numeri di beneficio fissati prima che i fatti fossero noti. La governance dovrebbe rivedere il registro come portafoglio, finanziare la misurazione ed essere disposta a fermare il lavoro la cui ipotesi è fallita.

### Clienti e utenti

Gli utenti sanno se una modifica ha aiutato e sono i migliori giudici della maggior parte dei benefici. Andrebbe chiesto loro, mostrati i risultati e detto quando una modifica non ha prodotto ciò che si sperava. I loro commenti sono evidenza a pieno titolo. Un beneficio che i numeri mostrano e gli utenti non percepiscono merita un esame più attento.

## In pratica: un esempio di ITIL agile

Il gruppo IT di un'assicurazione sanitaria regionale costruisce e gestisce un portale dei sinistri per i fornitori di prestazioni. I numeri seguenti sono illustrativi.

Il gruppo prevede di aggiungere controlli automatici di idoneità all'invio dei sinistri. L'ipotesi, scritta insieme al responsabile delle operations dei sinistri, è: «Riteniamo che i controlli automatici di idoneità aiuteranno il personale di fatturazione dei fornitori a presentare sinistri corretti al primo tentativo, così che i sinistri restituiti per correzione scendano dal 18 al 12 percento entro tre mesi. Lo sapremo dal tasso di sinistri restituiti, rivisto il 1° marzo.» La linea di base è la media delle ultime 12 settimane, il 18 percento con un intervallo settimanale tra il 15 e il 21 percento. L'indicatore anticipatore è l'uso del controllo nel primo mese. Il responsabile delle operations dei sinistri è il responsabile del beneficio.

Il team rilascia a piccoli passi, con il controllo disponibile dapprima in una sola regione. Dopo tre settimane l'uso del controllo è del 64 percento in quella regione. Alla data di revisione, i sinistri restituiti scendono al 13 percento nella regione con il controllo e al 17 percento nelle regioni senza. Il responsabile dei sinistri fa notare che nello stesso periodo è entrata in vigore anche una modifica di policy su un codice di fatturazione. Il team la elenca come fattore di confusione e rimuove da entrambi i gruppi i sinistri con quel codice, ottenendo il 14 percento contro il 17,5. La realizzazione del beneficio è registrata come «raggiunto in parte»: meglio della linea di base con un margine chiaro, ma inferiore all'obiettivo del 12 percento. Il team scrive con onestà nel registro che l'evidenza proviene da un rilascio scaglionato nell'arco di un trimestre e che l'effetto può differire per altri fornitori.

Estendono poi il controllo a tutte le regioni, con il piano di verificare di nuovo dopo tre mesi, e aggiungono un compito per migliorare il messaggio di errore, poiché i commenti dei fornitori dicono che il messaggio è poco chiaro. Il direttore finanziario chiede un unico numero per il consiglio di amministrazione. Il responsabile IT offre l'intervallo e il metodo e rifiuta di indicare una cifra con più precisione di quanta le evidenze consentano. La decisione è registrata, insieme alla data della prossima revisione.

## Lente di settore

**Startup.** I benefici sono vicini a ricavi e retention, e la velocità di apprendimento conta. Si scrivano ipotesi di una riga sulle schede, le si verifichi in fretta e si evitino registri pesanti. Si usino confronti semplici e si accetti che i campioni piccoli limitino ciò che si può affermare.

**Piccola impresa.** Il titolare è il responsabile del beneficio, e gli effetti sono visibili. Si tenga un breve elenco di modifiche con effetti attesi e lo si riveda ogni trimestre. Si eviti di gonfiare piccoli guadagni in grandi cifre e si confronti con il costo della modifica.

**Grande impresa.** Portafogli, cicli di finanziamento e molti stakeholder rendono utile un registro dei benefici. Lo si mantenga leggero per le piccole modifiche e rigoroso per quelle grandi, si collochino i responsabili nelle unità di business e si riveda sull'intero portafoglio. Ci si guardi dal sommare numeri con definizioni diverse.

**Pubblica amministrazione e settore pubblico.** I risultati sono spesso beni pubblici, come accesso, equità e sicurezza, che non si riducono al fatturato. Si definiscano i risultati con le persone servite, si usino evidenze miste e si riportino apertamente i metodi. Possono essere richiesti business case formali e revisioni dei benefici, e i risultati nulli onesti contano per la responsabilità pubblica (si veda l'argomento 8.5, Rendicontazione regolamentata e governativa).

## Business case: motivazioni, ROI e TCO

Il costo è principalmente attenzione. Scrivere un'ipotesi richiede minuti, una linea di base richiede un'ora o poche, e una revisione richiede una breve riunione. Esperimenti e rilasci scaglionati richiedono impegno di progettazione e qualche strumento. Un registro dei benefici può essere un foglio di calcolo o un campo nel tracker del lavoro.

Il ritorno è la qualità migliore delle decisioni di investimento. Un team che verifica le proprie ipotesi smette di costruire ciò che non aiuta, scala ciò che aiuta e impara quanto bene sa prevedere. Ciò risparmia il costo delle funzionalità inutilizzate e dei programmi falliti. Si costruisca il caso a partire dai propri dati: la quota di modifiche che portavano un'ipotesi, la quota di quelle verificate e il costo del lavoro poi abbandonato o annullato. Si evitino cifre pubblicate sul tasso di fallimento dei progetti IT a meno di poterne ricostruire fonte e metodo, poiché variano molto e sono spesso citate senza contesto. Il trattamento finanziario si trova nella parte successiva (si veda l'argomento 7.7, Ritorno sull'investimento e business case).

## Anti-pattern e insidie

- **Contare la consegna come valore.** Una funzionalità rilasciata è un mezzo. Si verifichi l'effetto sulle persone.
- **Ipotesi che non possono fallire.** Le si renda specifiche, con un numero e una data.
- **Correggere i propri compiti.** Si faccia giudicare il risultato dal responsabile del beneficio esterno al team.
- **Rivendicare una causa da un prima-dopo.** Si elenchino i fattori di confusione e si usi un confronto dove possibile.
- **Riportare solo le vittorie.** Si registrino i risultati nulli e negativi. Un registro di soli successi non è onesto.
- **Fissare obiettivi di beneficio per gli individui.** Obiettivi legati alle persone invitano a dichiarazioni gonfiate. Si mantengano i benefici a livello di team e di iniziativa.
- **Eccesso di precisione.** Si riportino intervalli e metodo, non un singolo numero decimale.
- **Ignorare il lavoro che non ha un nuovo beneficio.** Lo si nomini e non si inventi per esso una storia di benefici.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Dichiarare il valore | Benefici dichiarati solo nei business case | Ipotesi scritte per alcune modifiche | Una breve ipotesi, una linea di base e un responsabile per ogni modifica significativa | Ipotesi e soglie fissate all'approvazione; indicatori anticipatori e posticipatori definiti | Ipotesi condivise tra team e fornitori; risultati definiti con gli utenti |
| Verificare il valore | Nessuna verifica post-rilascio | Verifica occasionale da parte del team di consegna | Revisione pianificata con un responsabile indipendente | Confronti e fattori di confusione documentati; qualità delle evidenze monitorata | Le evidenze a livello di portafoglio guidano i finanziamenti; esperimenti condivisi tra team |
| Apprendimento | Vittorie celebrate, fallimenti dimenticati | Alcune lezioni registrate | Risultati nulli registrati e riesaminati | Gli schemi nelle ipotesi mancate migliorano selezione e dimensionamento | L'apprendimento alimenta la pianificazione in tutta l'organizzazione e con i partner |

## Checklist

- [ ] Ogni modifica significativa ha un'ipotesi di valore scritta con linea di base, indicatore e data di revisione.
- [ ] Ogni beneficio ha un responsabile esterno al team di consegna.
- [ ] Gli indicatori anticipatori e posticipatori sono definiti e monitorati.
- [ ] Le revisioni si svolgono alla data concordata con il responsabile.
- [ ] Confronti o rilasci scaglionati sono usati dove fattibile.
- [ ] I fattori di confusione sono elencati per ogni risultato dichiarato.
- [ ] I risultati nulli e negativi sono registrati e condivisi.
- [ ] La qualità delle evidenze è monitorata accanto alle dichiarazioni di beneficio.
- [ ] Nessun individuo ha un obiettivo personale di beneficio.
- [ ] Una revisione trimestrale del portafoglio osserva gli schemi nelle ipotesi raggiunte e mancate.

## Prompt IA

**Scrivere un'ipotesi di valore.**

```text
Prevediamo di [descrivi la modifica] per [utenti o stakeholder] in [tipo di
organizzazione]. Il problema oggi: [descrivi]. Redigi un'ipotesi di valore nella
forma «Riteniamo che [modifica] aiuterà [chi] a [fare che cosa] in modo che
[miglioramento misurabile]. Lo sapremo da [indicatore]...». Suggerisci un
indicatore anticipatore e uno posticipatore, quale linea di base ci serve e una
logica per la data di revisione. Non inventare valori obiettivo; lasciali come
segnaposto per noi. Elenca le tue ipotesi e che cosa dobbiamo accertare.
```

**Elencare i fattori di confusione per un risultato dichiarato.**

```text
Dichiariamo che [modifica] ha migliorato [indicatore] da [prima] a [dopo] tra
[date]. Altre cose accadute nel periodo: [elenco]. Elenca i plausibili fattori
di confusione, come ciascuno potrebbe spiegare il risultato e quali dati o
confronti aiuterebbero a escluderlo. Suggerisci una formulazione che dichiari
ciò che le evidenze sostengono. Non presumere una causa che i dati non possono
sostenere. Elenca le tue ipotesi.
```

**Progettare un confronto con rilascio scaglionato.**

```text
Possiamo rilasciare [modifica] a [numero] gruppi in momenti diversi: [descrivi
gruppi e vincoli]. Proponi un rilascio scaglionato che ci permetta di
confrontare i gruppi con e senza la modifica, indica quale indicatore e quale
periodo usare, che cosa potrebbe distorcere il confronto e che cosa
concluderemmo da esiti diversi. Non inventare dimensioni dell'effetto. Elenca
le tue ipotesi e i rischi.
```

**Rivedere una voce del registro dei benefici.**

```text
Rivedi questa voce del registro dei benefici per [iniziativa]: [incolla la voce
comprensiva di dichiarazione, linea di base, metodo, responsabile e data di
revisione]. Segnala le informazioni mancanti, le formulazioni vaghe, le
dichiarazioni che le evidenze non sostengono e i modi in cui il risultato
potrebbe essere manipolato. Suggerisci una formulazione più solida che
corrisponda a ciò che abbiamo effettivamente misurato. Elenca le tue ipotesi e
le domande per il responsabile.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare il guardrail abbinato a una metrica di valore o di risultato prima di riportarla.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una voce di metrica dei benefici riporti il proprio vettore di manipolazione, il proprio guardrail e il proprio standard di evidenza.

## Punti chiave

- Si scriva un'ipotesi di valore verificabile prima di costruire, con una linea di base, un responsabile esterno al team e una data di revisione.
- Si usino indicatori anticipatori per orientarsi e posticipatori per confermare.
- Si confronti dove possibile, si elenchino i fattori di confusione e si dichiari solo ciò che le evidenze sostengono.
- Si registrino i risultati nulli e negativi; un registro di successo uniforme non è onesto.
- Si monitori la qualità delle evidenze accanto alla dimensione della dichiarazione.
- Si mantengano stakeholder e utenti in collaborazione finché il risultato non è confermato.

## Riferimenti e letture di approfondimento

1. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
2. Doerr, J., *Measure What Matters*, Portfolio/Penguin, 2018.
3. Kohavi, R., Tang, D., and Xu, Y., *Trustworthy Online Controlled Experiments*, Cambridge University Press, 2020.
4. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
5. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Benefits realisation management](https://en.wikipedia.org/wiki/Benefits_realisation_management).
8. Wikipedia, [Theory of change](https://en.wikipedia.org/wiki/Theory_of_change).
9. Wikipedia, [Logic model](https://en.wikipedia.org/wiki/Logic_model).
10. Wikipedia, [Leading indicator](https://en.wikipedia.org/wiki/Leading_indicator).
11. Wikipedia, [Lagging indicator](https://en.wikipedia.org/wiki/Lagging_indicator).
12. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [A/B testing](https://en.wikipedia.org/wiki/A/B_testing).
15. Wikipedia, [Difference in differences](https://en.wikipedia.org/wiki/Difference_in_differences).
16. Wikipedia, [Confounding](https://en.wikipedia.org/wiki/Confounding).
17. Wikipedia, [Survivorship bias](https://en.wikipedia.org/wiki/Survivorship_bias).
