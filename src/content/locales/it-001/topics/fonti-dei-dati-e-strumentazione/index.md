# Fonti dei dati e strumentazione

**Una metrica è affidabile solo quanto gli eventi che le stanno sotto: si nomini il sistema di riferimento per ogni numero, si catturino gli eventi automaticamente nel momento in cui accadono e si collaudi la pipeline con la stessa cura con cui si collauda il grafico.**

## Panoramica e motivazione

La maggior parte dei programmi di metriche dedica il proprio sforzo alle dashboard e quasi nulla alle tubature che le alimentano. È un'impostazione rovesciata. Un grafico rifinito costruito su timestamp incoerenti, su un campo di stato che nessuno aggiorna o su un'integrazione che si è fermata in silenzio il mese scorso sembra autorevole pur essendo sbagliato. Questo argomento tratta la fondazione poco appariscente del resto del libro: da dove provengono i dati di servizio e di consegna, quanto è affidabile ciascuna fonte e quali difetti di qualità dei dati invalidano una metrica prima che qualcuno se ne accorga.

Le fonti si raggruppano in poche famiglie. Uno strumento di [gestione dei servizi IT (ITSM)](https://en.wikipedia.org/wiki/Information_technology_service_management) registra incidenti, richieste, problemi e modifiche, che [ITIL](https://en.wikipedia.org/wiki/ITIL) tratta come i record centrali dell'operatività del servizio. Un [sistema di tracciamento delle issue](https://en.wikipedia.org/wiki/Issue_tracking_system) registra il backlog e il movimento degli elementi di lavoro per i team agili. Il [controllo di versione](https://en.wikipedia.org/wiki/Version_control) registra commit, branch e merge. Una pipeline di [integrazione continua e consegna continua (CI/CD)](https://en.wikipedia.org/wiki/CI/CD) registra build, risultati dei test e rilasci. Le piattaforme di monitoraggio e di [osservabilità](https://en.wikipedia.org/wiki/Observability_(software)) emettono telemetria: metriche, log e tracce dei sistemi in esecuzione. Un [database di gestione delle configurazioni (CMDB)](https://en.wikipedia.org/wiki/Configuration_management_database) registra i servizi e i componenti a cui le cose si riferiscono. I sondaggi registrano ciò che nessun sistema può osservare, come la soddisfazione e lo sforzo.

Un evento di rilascio scritto da una pipeline è oggettivo e difficile da falsificare, uno stato di un ticket cambiato ore dopo il lavoro è un ricordo, e la risposta a un sondaggio è una percezione. Sapere quale tipo di record sta dietro a un numero dice quale difetto cercare per primo.

Le visioni agile e ITIL si incontrano sugli stessi dati: entrambe sono macchine a stati con timestamp, perciò si registri ogni cambio di stato come un evento con un orario affidabile e si ricavino le metriche dagli eventi.

Tre termini ricorrono in questo argomento. Un **sistema di riferimento** (system of record) è l'unica fonte autorevole per un fatto, per esempio la pipeline per «un rilascio è avvenuto». La **strumentazione** (instrumentation) è la cattura deliberata di eventi, tramite codice, configurazione o integrazione di strumenti, in modo che una metrica possa essere calcolata senza che nessuno la digiti. Un **modello di stato** (status model) è l'insieme degli stati in cui un elemento di lavoro o un record può trovarsi e dei passaggi consentiti tra di essi. Il modello di stato decide quali cronometri sia possibile calcolare.

Su scala di grande impresa e di settore pubblico il problema si aggrava. I dati attraversano connettori, processi di [estrazione, trasformazione e caricamento (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load) e livelli di reporting, e ogni passaggio è un'occasione per il significato di scivolare via. Un campo che significa una cosa nella fonte può significare qualcosa di sottilmente diverso nel data warehouse, e il numero appare comunque plausibile. Il rimedio è accorciare la distanza tra evento e dashboard e controllare la pipeline secondo una pianificazione.

## Principi chiave

- **Catturare eventi, non riepiloghi.** Si conservino i cambi di stato grezzi con i timestamp e si calcolino le metriche a partire da essi, così che una definizione possa cambiare senza perdere lo storico.
- **Preferire l'osservazione all'autodichiarazione.** Dove un sistema può vedere l'evento, si usi quello; si riservino i resoconti delle persone a ciò che solo le persone possono dire.
- **Nominare un sistema di riferimento per ogni fatto.** Le fonti duplicate discordano, e il disaccordo erode la fiducia in entrambe.
- **Progettare il modello di stato prima della metrica.** Un cronometro non può essere calcolato da stati che non esistono o che significano cose diverse in team diversi.
- **Trattare la pipeline come un prodotto.** Ha responsabili, test, monitoraggio e un registro delle modifiche, perché la qualità dei dati decade in silenzio.
- **Mostrare la provenienza.** Ogni numero di una dashboard dovrebbe condurre ai propri record di origine in uno o due clic.
- **Raccogliere solo ciò che si userà, e proteggerlo.** Ogni campo è un costo e, quando riguarda persone, un dovere di tutela della privacy.

## Definizioni delle metriche

Le metriche seguenti misurano la salute della fornitura di dati stessa. Sono il quadro strumenti per gli strumenti.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Copertura delle fonti | Quota dei servizi e dei team nel perimetro i cui eventi raggiungono automaticamente l'archivio delle metriche | servizi o team con un feed automatizzato / servizi o team nel perimetro; il «perimetro» è elencato nel registro delle metriche | percentuale | Registro delle metriche e configurazione della pipeline | Misurazione e rendicontazione; gestione della configurazione del servizio | Accordo di lavoro del team sugli strumenti | Trimestrale |
| Completezza dei timestamp | Quota degli elementi di lavoro chiusi che riportano ogni timestamp necessario ai cronometri della metrica | elementi chiusi con tutti i timestamp di cambio di stato richiesti / elementi chiusi nel periodo; gli elementi ancora aperti sono esclusi | percentuale | Storico dello strumento ITSM o dell'issue tracker | Gestione degli incidenti; gestione delle richieste di servizio | Storico della lavagna o del flusso di lavoro | Mensile |
| Tasso di retrodatazione | Quota dei cambi di stato registrati a posteriori, misurata dal divario tra l'ora dell'evento e l'ora in cui è stato inserito | cambi di stato inseriti oltre 24 ore dopo l'ora dell'evento / cambi di stato nel periodo; il cronometro parte all'evento e si ferma all'inserimento | percentuale | Audit trail del tracker, o ora dell'evento della pipeline rispetto all'ora di inserimento | Abilitazione delle modifiche; gestione degli incidenti | Definition of done | Mensile |
| Freschezza dei dati | Quanto è vecchio il dato più recente di una dashboard al momento della consultazione | ora di consultazione meno l'ora dell'evento più recente caricato; si riportino la mediana e il 95° percentile | ore | Log di esecuzione della pipeline e log di caricamento della dashboard | Misurazione e rendicontazione | Preparazione della revisione con gli stakeholder | Settimanale |
| Varianza di riconciliazione | Disaccordo tra due fonti per lo stesso conteggio | differenza assoluta tra i due conteggi / conteggio della fonte di riferimento, per un periodo e un ambito fissi | percentuale | Fonte di riferimento e livello di reporting | Gestione dei livelli di servizio; gestione finanziaria | Controlli del rapporto di rilascio | Mensile |
| Deriva del modello di stato | Numero di nomi di stato o di transizioni distinti in uso rispetto al modello documentato | stati o transizioni non documentati osservati nel periodo (conteggio); quelli documentati sono esclusi | conteggio | Configurazione del flusso di lavoro del tracker e storico degli eventi | Miglioramento continuo | Accordi di lavoro sul flusso di lavoro | Trimestrale |
| Tasso di risposta ai sondaggi | Quota delle persone invitate che hanno completato un sondaggio | risposte completate / inviti recapitati; gli inviti respinti sono esclusi | percentuale | Strumento di sondaggio | Gestione dei livelli di servizio; esperienza del cliente | Revisione con gli stakeholder e feedback di miglioramento | Per ogni ondata di sondaggio |

La completezza dei timestamp conta solo gli elementi chiusi, così che un arretrato di vecchi elementi aperti non possa nascondere una lacuna. Il tasso di retrodatazione usa una soglia di 24 ore come esempio; un team sceglie una soglia adatta al proprio lavoro e la mette per iscritto.

## Raccomandazioni

### Associare ogni metrica alla sua fonte

**1. Costruire una mappa delle fonti prima di costruire una dashboard.** Per ogni metrica, si registrino il sistema di riferimento, l'evento che avvia il cronometro, l'evento che lo ferma, il responsabile della fonte e la modalità di guasto nota. Se non si riesce a nominare il sistema, non si sa ancora da dove venga il numero. Si conservi la mappa nel registro delle metriche (vedi Argomento 1.4 «Governance e responsabilità delle metriche»).

**2. Scegliere un sistema di riferimento per ogni fatto.** Un rilascio è registrato dalla pipeline, un incidente dallo strumento ITSM, una modifica del codice dal controllo di versione, una relazione di servizio dal CMDB. Dove due strumenti contengono lo stesso fatto, si decida quale prevale e si faccia leggere l'altro da esso. La riconciliazione diventa allora un controllo, non un dibattito.

### Catturare gli eventi nel momento in cui accadono

**3. Strumentare l'evento, non il rapporto.** Si lasci che la pipeline registri il rilascio, che l'host del controllo di versione registri il merge e che il sistema di monitoraggio registri l'avviso. I dati che dipendono dal fatto che qualcuno ricordi di aggiornare un campo si degradano con la distanza dall'evento e con il carico di lavoro. Dove esiste un evento automatizzato, lo si preferisca a un surrogato inserito da una persona per lo stesso fatto (vedi Argomento 2.8 «Metriche DORA»).

**4. Fare dei cambi di stato un effetto collaterale del lavoro.** Se il merge di un branch sposta l'elemento di lavoro in «in revisione» o un rilascio lo sposta in «rilasciato», nessuno deve ricordarsene. Le integrazioni tra controllo di versione, pipeline e tracker eliminano la maggior parte della retrodatazione.

**5. Conservare gli eventi grezzi, e conservarli immutabili.** Si memorizzi ogni cambio di stato con l'ora dell'evento, l'ora di inserimento e il tipo di attore (persona o automazione). Si scrivano le correzioni come nuovi eventi, non come sovrascritture, così che la cronologia della correzione sia essa stessa un dato.

### Rilevare correttamente il tempo

**6. Registrare il tempo secondo un unico standard.** Si memorizzino i timestamp in [tempo coordinato universale (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) in un formato non ambiguo come quello definito da ISO 8601 e RFC 3339, e si converta nell'ora locale solo per la visualizzazione. Fusi orari misti e cambi dell'ora legale producono silenziosamente durate negative e cronometri sfasati di un'ora.

**7. Scrivere le regole dei cronometri dove vivono i dati.** Per ogni misura temporale, si dichiari quale evento avvia il cronometro, quale lo ferma e quali stati lo sospendono. Uno stato di sospensione è una decisione di progettazione. Si riporti quanto spesso viene usato ciascuno stato di sospensione, perché il cronometro è il punto in cui i dati di servizio vengono più spesso plasmati (vedi Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»).

### Progettare il modello di stato

**8. Mantenere il modello di stato ridotto, condiviso e documentato.** Ogni stato in più invita a un'interpretazione diversa da parte di ciascun team. Si definisca in una frase che cosa significa ciascuno stato, chi può spostare il lavoro in esso e quali transizioni sono consentite. L'età dell'elemento di lavoro e le misure di flusso dipendono da questo modello (vedi Argomento 2.1 «Misure del flusso»), e il confronto tra team dipende dal fatto che i team usino le stesse parole per gli stessi stati. Quando i dati sorprendono, si sospetti per primo il flusso di lavoro: si registri ogni modifica a un flusso di lavoro o a un campo con la sua data e la sua motivazione, e si contino gli stati non documentati come un segnale di deriva.

### Mantenere onesta la pipeline

**9. Collaudare la pipeline come software.** Si controllino i conteggi di righe rispetto alla fonte, si verifichi che i campi richiesti siano presenti, si cerchino i duplicati e si generi un avviso quando un feed si ferma. Si aggiunga a ogni dashboard un indicatore di freschezza, così che chi la consulta veda quanto sono vecchi i dati. Un guasto silenzioso di un connettore che lascia a schermo i numeri del mese scorso è tra i fallimenti più comuni e più dannosi in quest'area (vedi Argomento 11.1 «Progettare una dashboard delle metriche di servizio»).

**10. Riconciliare secondo una pianificazione e campionare a mano.** Si confronti un conteggio nel livello di reporting con la fonte per un periodo fisso e si indaghi sulla differenza. Poi si legga un piccolo campione di record grezzi. Un campione di quindici minuti trova spesso ciò che i controlli automatici non possono, come uno stato usato in modo inatteso.

### Trattare con cura persone e sondaggi

**11. Riservare i sondaggi a ciò che solo una persona può dire.** Soddisfazione, sforzo, fiducia e benessere non possono essere osservati dai dati di sistema. Si chieda direttamente, si mantengano brevi i sondaggi, si vari la tempistica e si riportino il tasso di risposta e chi ha risposto, poiché chi risponde differisce da chi non risponde, una forma di [distorsione da selezione](https://en.wikipedia.org/wiki/Selection_bias). Si leggano per intero i commenti aperti (vedi Argomento 6.1 «Metriche di soddisfazione del cliente»).

**12. Proteggere i dati personali e mantenere i dati a livello di team.** I dati degli eventi sul lavoro possono identificare le persone attraverso l'autore dei commit, i campi dell'assegnatario e i registri delle chat. Si raccolga al livello necessario alla metrica, si aggreghi per team e servizi e si applichino le norme sulla privacy della propria giurisdizione e organizzazione. I dati a livello individuale, una volta raccolti, tendono a essere usati per le classifiche, il che corrompe la fonte (vedi Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Copertura delle fonti | Contare un servizio come coperto dopo il collegamento di un feed, anche se trasporta pochissimi eventi; lasciare fuori dal perimetro i servizi difficili | Volume di eventi per servizio coperto confrontato con la sua attività nota; revisione dell'elenco del perimetro rispetto al catalogo dei servizi |
| Completezza dei timestamp | Riempire i timestamp richiesti con l'ora di chiusura per soddisfare la validazione | Distribuzione dei divari tra stati consecutivi; campionamento degli elementi chiusi per verificare se gli orari sono plausibili |
| Tasso di retrodatazione | Inserire le modifiche appena entro la soglia; allargare la soglia; registrare tutte le modifiche tramite un unico aggiornamento in blocco | Andamento dell'ora di inserimento per fascia oraria; quota di modifiche effettuate dall'automazione rispetto a quelle manuali; audit delle modifiche in blocco |
| Freschezza dei dati | Mostrare l'ora dell'ultimo aggiornamento anziché l'ora dell'evento più recente | Ora dell'evento più recente mostrata sulla dashboard; avviso quando un feed non consegna nuovi eventi |
| Varianza di riconciliazione | Scegliere il periodo o l'ambito che concilia; modificare il livello di reporting perché corrisponda alla fonte senza trovare la causa | Fissare in anticipo ambito e periodo; registrare ogni causa trovata e rivedere le cause ogni trimestre |
| Deriva del modello di stato | Riutilizzare uno stato esistente per un nuovo significato per evitare di essere segnalati; aggiungere stati senza registrarli | Confrontare a ogni revisione la configurazione del flusso di lavoro con il registro; leggere un campione di elementi in stati insoliti |
| Tasso di risposta ai sondaggi | Invitare solo le persone che probabilmente risponderanno; inviare solleciti agli utenti soddisfatti; offrire premi che distorcono le risposte | Composizione dei rispondenti confrontata con la popolazione di utenti; distribuzione delle risposte per ondata; commenti aperti letti nella revisione |

Una lettura sana è un insieme di numeri noiosi: copertura alta, retrodatazione bassa e in calo, freschezza entro la propria promessa dichiarata e una causa nota ogni volta che la varianza di riconciliazione è diversa da zero. Quando un numero si muove, qualcuno sa dire se è cambiato il lavoro o lo strumento.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Cattura automatizzata degli eventi | Oggettiva, tempestiva, a basso sforzo una volta costruita | Copre solo ciò che è stato strumentato; si rompe in silenzio quando gli strumenti cambiano |
| Inserimento manuale e aggiornamenti di stato | Cattura contesto e giudizio; funziona senza integrazione | Tardivo, incoerente e aperto alla manipolazione |
| Un unico archivio centrale delle metriche | Una definizione, un solo luogo in cui collaudare e governare | Richiede finanziamenti e responsabilità; può diventare un collo di bottiglia |
| Ogni team tiene i propri dati | Adatto al lavoro locale; rapido da avviare | Le definizioni divergono; le aggregazioni sono inaffidabili |
| Eventi grezzi conservati a lungo termine | Le definizioni possono cambiare e lo storico può essere ricalcolato | Costi di archiviazione e privacy; più cose da proteggere |

Si automatizzi ciò che è osservabile, si interroghino le persone su ciò che non lo è e si conservi il record grezzo. Si investa per prima cosa nelle fonti dietro le due o tre metriche che il team usa davvero, non in una piattaforma di dati per ogni numero concepibile.

## Domande da discutere con il team

**1. Per la nostra metrica più importante, quale sistema è la fonte di riferimento, e come lo sappiamo?**
Chieda al gruppo di ripercorrere il numero dalla dashboard fino al primo evento. Annoti ogni punto in cui una persona o una trasformazione tocca i dati. Il facilitatore dovrebbe cercare i passaggi che nessuno sa spiegare, perché è lì che dovrebbe iniziare la prima indagine.

**2. Quali dei nostri timestamp sono scritti da un sistema e quali sono digitati da una persona?**
Si elenchino i cronometri in uso, come il tempo di risposta, il tempo di risoluzione e il cycle time. Si contrassegni ogni avvio e arresto come automatico o manuale. Per quelli manuali, ci si chieda quanto tempo dopo l'evento venga di solito effettuato l'inserimento. La discussione mostra spesso che la metrica più dibattuta poggia sul timestamp meno affidabile.

**3. Che cosa significano i nostri stati, e tutti i team intendono la stessa cosa?**
Si metta il flusso di lavoro su una lavagna e si chieda a persone di team diversi di spiegare ogni stato con parole proprie. Si confrontino le spiegazioni. Si contino gli stati in cui il cronometro si sospende e ci si chieda chi può usarli e perché. Si concordi una modifica per eliminare l'ambiguità e la si registri con la motivazione.

**4. Come scopriremmo che un feed si è fermato in silenzio?**
Ci si chieda quando qualcuno ha controllato per l'ultima volta che i dati della dashboard fossero aggiornati. Si discuta quale avviso o indicatore di freschezza intercetterebbe un connettore fermo entro un giorno. Il facilitatore dovrebbe insistere per un responsabile nominato e un controllo concreto, non per un'intenzione generica di fare attenzione.

**5. Che cosa raccogliamo che non usiamo mai, e che cosa usiamo che non raccogliamo bene?**
Si mettano fianco a fianco l'elenco dei campi e l'elenco delle metriche. Si contrassegnino i campi che non alimentano alcuna decisione e le metriche che poggiano su campi scadenti. Si decida un campo da smettere di raccogliere e uno da migliorare in questo trimestre.

**6. Chi risponde ai nostri sondaggi, e chi no?**
Si confrontino i rispondenti con la popolazione degli utenti o dei membri del team. Si osservino i tassi di risposta per gruppo e per ora del giorno o della settimana. Si discuta che cosa possa significare il silenzio e come raggiungere i gruppi silenziosi senza esercitare pressione. Si concordi come il tasso di risposta sarà mostrato accanto a ogni risultato di sondaggio.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna generano la maggior parte dei dati oggettivi: commit, revisioni, build e rilasci. Traggono vantaggio da una strumentazione che fa dei cambi di stato un effetto collaterale del lavoro, così che la lavagna resti onesta senza sforzo aggiuntivo. Dovrebbero mantenere ridotto il flusso di lavoro e diffidare dall'usare l'attività del controllo di versione come misura dello sforzo (vedi Argomento 2.2 «Lead time, cycle time ed efficienza del flusso»).

### Team di servizio e operations

I team di servizio dipendono da record creati da persone sotto pressione, spesso durante un incidente. Le regole dei cronometri, gli stati di sospensione e i campi di priorità sono i punti in cui avviene la deriva. I team di operazioni dovrebbero rendere automatica, dove possibile, la cattura degli orari chiave, come l'ora dell'avviso e l'ora della presa in carico, verificare l'uso degli stati di sospensione e tenere i dati di monitoraggio separati dal record del ticket in modo che ciascuno possa controllare l'altro (vedi Argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi»).

### Leadership e governance

I dirigenti decidono quanto investire nelle fondamenta dei dati e stabiliscono gli incentivi che determinano se i dati restano onesti. Dovrebbero chiedere da dove viene un numero prima di chiedere perché si è mosso, finanziare la responsabilità della pipeline come lavoro continuativo e attendersi una data di freschezza e una definizione su ogni rapporto. Gli organi di governance dovrebbero trattare una modifica documentata di una fonte o di una definizione come un evento normale, non come un fallimento.

### Clienti e utenti

Gli utenti forniscono i dati che contano di più sull'esperienza, di solito rispondendo ai sondaggi, valutando le interazioni o segnalando problemi. Hanno bisogno di sapere che cosa viene raccolto, perché e che cosa cambierà di conseguenza. Sondaggi brevi e un seguito visibile mantengono sano il tasso di risposta. I rapporti sui livelli di servizio rivolti ai clienti dovrebbero dichiarare le proprie fonti e definizioni (vedi Argomento 5.2 «SLI, SLO e budget di errore»).

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni ha un team di piattaforma, tre team di prodotto e un service desk. Tutti i numeri di questo esempio sono illustrativi.

La direzione chiede perché il lead time delle modifiche nel rapporto mensile sia sceso da una mediana di 9 giorni a 3 giorni in un trimestre, mentre i team di prodotto non riferiscono alcun cambiamento nel proprio modo di lavorare. Il responsabile dell'ingegneria di piattaforma sospetta lo strumento di misura e chiede una mappa delle fonti della metrica.

La mappa mostra che il lead time parte quando un record di modifica viene creato nello strumento ITSM e si ferma quando il suo stato viene impostato su «implementata». Due team di prodotto avevano iniziato a creare il record dopo che il lavoro era pronto, così che il cronometro partiva in ritardo. Un campione di 40 record rileva che 12 erano stati creati lo stesso giorno del rilascio. Il tasso di retrodatazione, misurato come divario tra l'evento di rilascio nella pipeline e l'inserimento dello stato «implementata», era del 31 per cento oltre la soglia di 24 ore fissata dal team.

Il team apporta tre modifiche. Primo, l'avvio del cronometro passa al primo commit collegato alla modifica, preso dal controllo di versione, e l'arresto passa all'evento di rilascio scritto dalla pipeline. Secondo, lo strumento ITSM riceve lo stato dalla pipeline, così che «implementata» non venga più digitato. Terzo, la dashboard acquisisce un indicatore di freschezza e un controllo di riconciliazione dei conteggi delle modifiche tra la pipeline e lo strumento ITSM.

Con la nuova definizione il lead time mediano è di 7 giorni e il 95° percentile è di 21 giorni, e il tasso di retrodatazione scende al 4 per cento. La direzione legge inizialmente i 7 giorni come un risultato peggiore. Il responsabile della piattaforma spiega che il vecchio numero era un artefatto della creazione tardiva dei record. La decisione, scritta nel registro delle decisioni, è di rielaborare i due trimestri precedenti a partire dagli eventi grezzi e di segnare sul grafico la modifica della definizione. Il rischio di manipolazione che il team ha intercettato era sottile: nessuno ha falsificato un numero, eppure la creazione tardiva dei record ha prodotto una cifra lusinghiera. La varianza di riconciliazione agisce ora da salvaguardia, e il campione di record grezzi viene rivisto ogni trimestre.

## Lente di settore

**Startup.** I dati sono scarsi e la fiducia è alta, il che aiuta. Si usino la pipeline e il controllo di versione come fonti principali, perché non richiedono sforzo aggiuntivo, e si mantenga il modello di stato a una manciata di stati. Si scriva ogni definizione e la sua fonte su una sola pagina e la si riveda quando il team raddoppia.

**Piccola impresa.** Spesso una persona gestisce l'IT su un service desk in hosting. Si usino i rapporti dello strumento, si chiedano al fornitore le sue definizioni per iscritto e si esportino periodicamente i dati grezzi per evitare il lock-in.

**Grande impresa.** Molti strumenti, molti team e livelli di integrazione creano il maggiore rischio di deriva delle definizioni. Si investa in un modello di eventi condiviso, in un archivio centrale delle metriche con responsabili nominati e in controlli automatizzati di riconciliazione e di freschezza. Si concordi un piccolo vocabolario di stati valido per tutta l'impresa e si lasci che i team aggiungano stati locali solo con una mappatura dichiarata verso di esso.

**Pubblica amministrazione e settore pubblico.** I record possono essere soggetti a norme su conservazione, audit, accesso e privacy, e gli appalti possono vincolare strumenti e formati di dati. Si trattino come input di progettazione: si mantenga un audit trail, si documenti la tracciabilità dall'evento al rapporto e si negozino nei contratti i diritti di esportazione dei dati. Gli obblighi di rendicontazione rendono essenziali le definizioni documentate (vedi Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

Il costo di questo argomento ha tre parti. La prima è lo sforzo di costruzione: integrazioni, un archivio delle metriche e una ripulitura del modello di stato. La seconda è lo sforzo di esercizio: un responsabile per la pipeline, il monitoraggio dei feed e una routine trimestrale di riconciliazione e campionamento. La terza è il costo dei controlli di privacy e sicurezza per i dati che si conservano.

Il ritorno viene da decisioni prese su numeri che significano ciò che sembrano significare. Dati scadenti portano a investimenti sbagliati, a discussioni su di chi sia la cifra giusta e a risultati rielaborati che danneggiano la fiducia. Si descriva il beneficio attraverso andamenti che si possono misurare da sé: il tempo necessario a produrre un rapporto mensile prima e dopo, il numero di dispute di riconciliazione per trimestre, e il tasso di retrodatazione e la completezza dei timestamp nel tempo. Il costo totale di proprietà è dominato dalle persone, perciò si contino le ore del responsabile della pipeline.

## Anti-pattern e insidie

- **Costruire la dashboard prima della mappa delle fonti.** Il grafico sembra finito mentre il suo significato è ignoto. Si mappino prima la fonte, i cronometri e il responsabile.
- **Fidarsi degli aggiornamenti di stato manuali per le misure temporali.** L'inserimento tardivo rende i cronometri fiction. Si automatizzino le transizioni a partire dagli eventi di pipeline e di controllo di versione ovunque esistano.
- **Più sistemi di riferimento per un solo fatto.** Seguono le dispute. Se ne scelga uno e si faccia leggere gli altri da esso.
- **Cambi di definizione silenziosi.** La linea di tendenza perde significato. Si registri ogni modifica con la sua motivazione e la si segni sul grafico.
- **Medie da dati incompleti.** I timestamp mancanti non sono casuali, poiché gli elementi scomodi sono spesso quelli saltati. Si riporti la completezza dei timestamp accanto al risultato.
- **Raccogliere tutto nel caso possa servire.** Costo e rischio per la privacy salgono senza servire alcuna decisione. Si raccolga ciò che una domanda nominata richiede.
- **Nessun indicatore di freschezza.** Una dashboard obsoleta appare uguale a una aggiornata. Si mostri l'età dell'evento più recente su ogni vista.
- **Dati a livello individuale senza scopo.** Tentano alla classifica e danneggiano la fonte. Si aggreghi a livello di team e di servizio e si limiti l'accesso.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Fonti e cattura | Numeri assemblati a mano da esportazioni | Alcuni strumenti alimentano automaticamente un rapporto; altri no | Ogni metrica ha un sistema di riferimento nominato e una cattura automatizzata dove esiste un evento | Copertura e completezza misurate e analizzate nel tempo | Eventi condivisi tra team e fornitori tramite interfacce concordate, con contratti per l'esportazione |
| Modelli di tempo e di stato | Ciascuno registra e legge il tempo in modo diverso | Alcuni team documentano il proprio flusso di lavoro | Un solo standard di tempo e un vocabolario di stati condiviso con regole scritte dei cronometri | Deriva e retrodatazione monitorate, modifiche registrate con le motivazioni | Modelli rivisti congiuntamente con fornitori e clienti quando smettono di orientare le decisioni |
| Qualità della pipeline | Guasti scoperti quando qualcuno si lamenta | Controlli manuali occasionali | Conteggi di righe, controlli dei duplicati e un indicatore di freschezza su ogni dashboard | Riconciliazione pianificata e cause riviste; la pipeline ha un responsabile | Salute della pipeline rendicontata come un servizio, con miglioramenti finanziati |
| Pratica di sondaggi e privacy | Sondaggi ad hoc; nessuna revisione della privacy | Domande standard in alcuni team | Sondaggi brevi e regolari con tasso di risposta mostrato; dati mantenuti a livello di team | Composizione dei rispondenti rivista e tradotta in azioni | Risultati dei sondaggi e pratica di privacy condivisi apertamente con gli utenti |

## Checklist

- [ ] Ogni metrica rendicontata ha un sistema di riferimento nominato e un responsabile della fonte nominato.
- [ ] La mappa delle fonti è conservata nel registro delle metriche.
- [ ] Ogni misura temporale dichiara dove il suo cronometro parte, si ferma e si sospende.
- [ ] I timestamp sono memorizzati in UTC in un formato non ambiguo e gli orologi dei server sono sincronizzati.
- [ ] I cambi di stato sono generati dall'automazione ovunque esista un evento.
- [ ] Gli eventi grezzi sono conservati con l'ora dell'evento e l'ora di inserimento, e le correzioni sono nuovi eventi.
- [ ] Il modello di stato è documentato e ogni modifica è registrata con la sua motivazione.
- [ ] Ogni dashboard mostra l'età dei propri dati più recenti.
- [ ] I conteggi sono riconciliati con la fonte secondo una pianificazione e le cause sono registrate.
- [ ] Un campione di record grezzi viene letto ogni trimestre.
- [ ] Il tasso di risposta ai sondaggi e la composizione dei rispondenti sono mostrati con ogni risultato di sondaggio.
- [ ] I dati personali sono ridotti al minimo e aggregati a livello di team e di servizio.

## Prompt IA

**Costruire una mappa delle fonti per una metrica.**

```text
Sto documentando i dati dietro questa metrica: [nome della metrica], definita
come [definizione]. I nostri strumenti sono [elenco degli strumenti, per esempio
tracker, strumento ITSM, pipeline, monitoraggio]. Redigi una mappa delle fonti
con questi campi: l'evento che avvia il cronometro, l'evento che lo ferma, il
sistema di riferimento per ciascuno, chi o che cosa crea l'evento (persona o
automazione), le probabili modalità di guasto e i controlli che individuerebbero
ciascun guasto. Non inventare funzionalità degli strumenti né valori di
riferimento. Elenca le tue ipotesi e le domande a cui dovrei rispondere per
completare la mappa.
```

**Esaminare un modello di stato per individuarne le ambiguità.**

```text
Ecco il flusso di lavoro di [team o servizio]: [elenco degli stati e delle
transizioni consentite, con un significato di una riga per ciascuno se noto]. I
cronometri che calcoliamo a partire da esso sono [elenco dei cronometri].
Individua gli stati ambigui, gli stati in cui un cronometro potrebbe fermarsi o
sospendersi in modo fuorviante e i punti in cui due team potrebbero leggere la
stessa parola in modo diverso. Suggerisci un modello più piccolo che sostenga
comunque i cronometri e di' che cosa andrebbe perso. Non ipotizzare come sia
configurato il nostro strumento. Elenca le tue ipotesi.
```

**Progettare controlli di qualità dei dati per un feed.**

```text
Carichiamo [tipo di dati, per esempio record di modifica] da [sistema di origine]
in [destinazione] ogni [pianificazione]. I campi richiesti sono [elenco dei
campi]. Proponi un insieme pratico di controlli per completezza, duplicati,
freschezza e riconciliazione rispetto alla fonte, con un avviso suggerito e un
ruolo di responsabile per ciascuno. Mantieni l'insieme abbastanza piccolo perché
un team di [dimensione del team] possa mantenerlo. Non inventare soglie;
chiedimi quelle che ti servono. Elenca le tue ipotesi.
```

**Redigere un breve sondaggio e un piano per il tasso di risposta.**

```text
Voglio misurare [argomento di esperienza, per esempio lo sforzo per far evadere
una richiesta] per [pubblico]. Redigi [numero] domande neutre, un piano su quando
e come inviarle e su come riportare il tasso di risposta e la composizione dei
rispondenti. Segnala le formulazioni che potrebbero distorcere le risposte e
annota le considerazioni sulla privacy, dato che i dati saranno conservati in
[strumento o luogo]. Non inventare tassi di risposta di riferimento. Elenca le
tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare quale argomento definisce la metrica che si sta strumentando e la salvaguardia che dovrebbe stare accanto ad essa.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che un argomento di metrica nuovo o modificato nomini la propria fonte dei dati e i propri cronometri.

## Punti chiave

- Ogni metrica dipende da un sistema di riferimento nominato, perciò si mappi la fonte prima di costruire il grafico.
- Si catturino gli eventi automaticamente nel momento in cui accadono e si conservino gli eventi grezzi, così che le definizioni possano cambiare senza perdere lo storico.
- Anche il tempo è un dato: si usi un solo standard, si scrivano le regole dei cronometri e si vigili sulla retrodatazione.
- Si mantenga il modello di stato ridotto, condiviso e documentato, e si registri ogni modifica.
- Si tratti la pipeline come un prodotto con un responsabile, test, un indicatore di freschezza e una riconciliazione pianificata.
- Si usino i sondaggi per ciò che solo le persone possono dire, si mostri il tasso di risposta e si mantengano i dati personali a livello di team.

## Riferimenti e letture di approfondimento

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Kleppmann, M., *Designing Data-Intensive Applications*, O'Reilly Media, 2017.
5. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
6. ISO/IEC 25012:2008, *Software engineering: Software product Quality Requirements and Evaluation (SQuaRE): Data quality model*, International Organization for Standardization.
7. ISO 8601, *Date and time: Representations for information interchange*, International Organization for Standardization.
8. Klyne, G., and Newman, C., *RFC 3339: Date and Time on the Internet: Timestamps*, Internet Engineering Task Force, 2002, https://www.rfc-editor.org/rfc/rfc3339
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
13. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
14. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
15. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
17. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
18. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
19. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
20. Wikipedia, [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
22. Wikipedia, [Selection bias](https://en.wikipedia.org/wiki/Selection_bias).
