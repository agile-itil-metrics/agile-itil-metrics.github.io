# Qualità della configurazione e del CMDB

**Un database di configurazione si guadagna il posto solo quando le persone si fidano abbastanza da usarlo in una modifica o in un incidente: se ne misuri quindi la qualità in base a quanto bene risponde a domande reali e si lasci che siano i team responsabili dei servizi a mantenere aggiornati i propri registri.**

## Panoramica e motivazione

Quando un server di database si guasta alle tre di notte, qualcuno chiede quali servizi ne dipendano. Quando un team pianifica una modifica, qualcuno chiede che cos'altro potrebbe rompersi. Le risposte dovrebbero venire da un registro delle cose che compongono i servizi e di come sono collegate. Quel registro è l'oggetto della gestione della configurazione, e il database che lo sostiene è il database di gestione della configurazione, di solito abbreviato in CMDB (configuration management database).

Un [elemento di configurazione](https://en.wikipedia.org/wiki/Configuration_item) (CI, configuration item) è qualunque componente che deve essere gestito per erogare un servizio IT: un server, un'applicazione, un database, un dispositivo di rete, un account cloud, un contratto. Un [database di gestione della configurazione](https://en.wikipedia.org/wiki/Configuration_management_database) conserva informazioni sui CI, sui loro attributi e sulle relazioni tra di essi. Dove la gestione degli asset chiede che cosa si possiede, chi ne è responsabile e quanto costa (si veda l'Argomento 7.1 «Metriche di gestione degli asset IT»), la gestione della configurazione chiede come le parti si combinano e che cosa dipende da che cosa.

I CMDB hanno una reputazione mista, e se la sono guadagnata. Molti sono stati costruiti come mappe esaustive, riempiti di dati che decadevano più in fretta di quanto qualcuno riuscisse a correggerli, e poi abbandonati. Le tradizioni agile e DevOps offrono un punto di partenza migliore. I team che descrivono la propria infrastruttura come codice dispongono di una definizione autorevole e versionata di ciò che eseguono, e possono pubblicarla automaticamente nel registro condiviso. L'[infrastruttura come codice](https://en.wikipedia.org/wiki/Infrastructure_as_code) trasforma il registro in un sottoprodotto della consegna. ITIL 4 descrive la pratica come gestione della configurazione del servizio e pone l'accento sulle informazioni necessarie a sostenere le decisioni, non sulla completezza fine a se stessa.

La qualità di un registro di configurazione ha diverse componenti, che corrispondono all'idea più ampia di [integrità dei dati](https://en.wikipedia.org/wiki/Data_integrity):

- **Completezza:** i CI e gli attributi che contano sono presenti.
- **Accuratezza:** ciò che il registro dice corrisponde alla realtà.
- **Tempestività:** le modifiche compaiono nel registro abbastanza presto da essere utili.
- **Coerenza:** la stessa cosa non è registrata due volte con nomi diversi. Far corrispondere registrazioni che si riferiscono alla stessa cosa è il problema della [risoluzione delle entità](https://en.wikipedia.org/wiki/Entity_resolution).
- **Qualità delle relazioni:** le dipendenze tra i CI sono presenti e corrette. È qui che si trovano la maggior parte del valore e la maggior parte del decadimento.

La prova più profonda di un CMDB è l'uso. Un registro che le persone consultano durante incidenti e modifiche, e correggono quando è errato, è sano. Un registro che viene soltanto sottoposto ad audit non lo è. Le misure che seguono abbinano perciò misure di qualità a misure di uso.

Vale la salvaguardia ricavata dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) con una variante: la completezza è facile da gonfiare con valori predefiniti, e l'accuratezza è facile da dichiarare senza verificarla. Si insista su evidenze indipendenti e su misure di uso (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Principi chiave

- **Partire dalle domande.** Si decida a che cosa il registro deve rispondere e si costruisca solo quello.
- **Preferire un registro più piccolo e affidabile a uno più grande e dubbio.** L'ambito cresce quando si guadagna la fiducia.
- **Lasciare che sia la fonte di verità ad alimentare il registro.** Dovrebbero scriverci pipeline, API cloud e rilevamento, non persone con fogli di calcolo.
- **Lasciare ai team di servizio la responsabilità dei registri dei propri servizi.** Conoscono le proprie dipendenze e avvertono il costo degli errori.
- **Misurare sia per uso sia per qualità.** Un buon registro viene consultato.
- **Verificare rispetto alla realtà.** Si metta alla prova il registro chiedendosi se prevede ciò che accade.
- **Correggere alla fonte.** Un registro errato è un sintomo. Si trovi il processo che l'ha lasciato scivolare.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Completezza dei CI | Quota dei CI nell'ambito con tutti gli attributi richiesti compilati con valori validi | CI nell'ambito con ogni attributo richiesto valido / CI nell'ambito | percentuale | CMDB, regole sugli attributi | Gestione della configurazione del servizio; gestione degli asset IT | La definizione di completato include la descrizione del servizio | Mensile |
| Accuratezza dei CI | Quota dei CI campionati il cui registro corrisponde alle evidenze sugli attributi richiesti | CI campionati corrispondenti su tutti gli attributi richiesti / CI campionati | percentuale | Campione di audit confrontato con il sistema in esercizio | Gestione della configurazione del servizio | Lo stato dell'infrastruttura come codice corrisponde alla realtà | Trimestrale |
| Copertura delle dipendenze | Quota dei servizi critici le cui dipendenze a monte e a valle sono mappate e riviste | servizi critici con una mappa delle dipendenze rivista negli ultimi 90 giorni / servizi critici | percentuale | Relazioni del CMDB e registrazioni delle revisioni | Gestione della configurazione del servizio; gestione della disponibilità | Revisione dell'architettura e della responsabilità dei servizi | Trimestrale |
| Tasso di successo della previsione dell'impatto | Quota di incidenti e modifiche in cui i servizi effettivamente colpiti rientravano nell'impatto previsto dal CMDB | incidenti o modifiche in cui tutti i servizi colpiti erano stati previsti / incidenti o modifiche esaminati | percentuale | Revisioni post-incidente e registrazioni delle modifiche confrontate con interrogazioni del CMDB | Gestione degli incidenti; abilitazione delle modifiche | Riscontro di una revisione senza colpe su dipendenze mancanti | Trimestrale |
| Tasso di CI duplicati | Quota di CI che duplicano un altro CI | CI segnalati come duplicati dalle regole di corrispondenza e confermati in revisione / CI nell'ambito | percentuale | Rapporto di corrispondenza del CMDB e campione di revisione | Gestione della configurazione del servizio | Un'unica fonte di verità | Mensile |
| Latenza di aggiornamento | Ritardo tra una modifica a un CI nel mondo reale e il suo aggiornamento nel CMDB | mediana e 85º percentile delle ore o dei giorni dall'evento di modifica all'aggiornamento del CMDB | ore o giorni | Eventi di modifica e di pipeline confrontati con i marcatori temporali del CMDB | Gestione della configurazione del servizio; abilitazione delle modifiche | Registrazione automatizzata nella pipeline | Mensile |
| Tasso di uso del CMDB | Quota di incidenti e modifiche che fanno riferimento a CI e, tra questi, quota in cui gli utenti riferiscono che il registro è stato utile | registrazioni che fanno riferimento a un CI valido / incidenti e modifiche nel periodo; più quota di registrazioni riviste in cui i dati del CI sono stati utili | percentuale | Strumento ITSM, breve richiesta di riscontro | Gestione degli incidenti; abilitazione delle modifiche | Team che usano il registro condiviso nel proprio lavoro | Mensile |

Si definisca e si registri l'ambito di «CI nell'ambito» per classe e per criticità. Un CI è accurato solo sugli attributi indicati come richiesti. La latenza di aggiornamento parte dall'evento reale, come una distribuzione o un acquisto, e termina quando il CMDB lo riflette. Il tasso di successo della previsione dell'impatto richiede una fase di revisione che registri quali servizi siano stati effettivamente colpiti, ed è affidabile solo quanto quella revisione.

## Raccomandazioni

### Decidere a che cosa serve il registro

**1. Scrivere le domande a cui il CMDB deve rispondere.** Quelle tipiche sono: che cosa dipende da questo componente, chi è responsabile di questo servizio, che cosa è cambiato di recente, che cosa colpirebbe un guasto qui e che cosa è fuori supporto. Per ciascuna domanda si indichino le classi di CI, gli attributi e le relazioni necessari. Tutto ciò che non serve a rispondere a una domanda è candidato a restare fuori.

**2. Partire dai servizi che contano di più.** Si scelga la manciata di servizi critici, li si mappi da un capo all'altro e si faccia bene quello prima di aggiungerne altri. Una mappa affidabile di dieci servizi aiuta più di una mappa dubbia di mille. Si estenda man mano che crescono fiducia e uso.

**3. Definire in modo semplice classi, attributi e tipi di relazione.** Un breve elenco di classi di CI (servizio, applicazione, database, host, rete, risorsa cloud) e di tipi di relazione (dipende da, viene eseguito su, si connette a, è di responsabilità di) copre la maggior parte delle esigenze. Un modello che cerca di catturare tutto è difficile da riempire e ancora più difficile da interrogare. Si tenga un modello scritto e lo si modifichi deliberatamente.

### Alimentare il registro dalla fonte

**4. Pubblicare da pipeline e codice.** Dove infrastruttura e applicazioni sono definite come codice, si faccia in modo che la pipeline di consegna crei, aggiorni e ritiri i CI a ogni modifica, comprese le informazioni su responsabilità e dipendenze dichiarate insieme al codice. Si tratti la dichiarazione come parte della definizione di completato per un servizio. Questo porta la latenza di aggiornamento quasi a zero e mantiene il registro allineato con ciò che è in esecuzione.

**5. Usare il rilevamento come seconda opinione.** Il [rilevamento dei servizi](https://en.wikipedia.org/wiki/Service_discovery) di rete e cloud trova ciò che è effettivamente in esecuzione e come è collegato. Lo si confronti con il registro dichiarato. Le differenze sono riscontri: o nella dichiarazione manca qualcosa o è in esecuzione qualcosa che non dovrebbe. Il solo rilevamento produce dati rumorosi senza responsabilità, perciò lo si usi per verificare, non per redigere.

**6. Usare identificativi stabili e regole di corrispondenza.** I duplicati nascono quando fonti diverse nominano la stessa cosa in modo diverso. Si concordi un identificativo univoco per ciascuna classe di CI, si registrino gli identificativi di origine e si eseguano regole di corrispondenza per trovare e unire i duplicati. Si riveda a mano un campione delle corrispondenze, poiché l'unione automatica può fondere cose diverse.

**7. Dare a ciascun team di servizio la responsabilità della propria porzione.** Il team che costruisce ed esegue un servizio è nella posizione migliore per conoscerne le dipendenze e accorgersi degli errori. Gli si renda facile il compito: un modello, una breve revisione in fase di pianificazione e un riscontro quando i loro dati vengono usati. I team centrali sono responsabili del modello, degli strumenti e dei controlli, non di ogni registrazione.

### Misurare qualità e uso

**8. Verificare l'accuratezza con il campionamento.** Ogni trimestre si estragga un campione casuale di CI e lo si verifichi rispetto ai sistemi in esercizio, e un secondo campione dai sistemi in esercizio per verificare che compaiano nel registro. Si riporti l'accuratezza per classe e si mostrino le principali fonti di errore. Si mantenga fisso il metodo di campionamento, in modo che le tendenze significhino qualcosa.

**9. Mettere alla prova la mappa con gli incidenti.** Dopo un incidente o una modifica significativi, si confrontino i servizi effettivamente colpiti con ciò che il CMDB aveva previsto. Si registrino i mancati riscontri e si correggano le dipendenze mancanti. È la prova di accuratezza più significativa, perché verifica il registro rispetto agli eventi, e il tasso di successo migliora man mano che la mappa viene corretta. Si usino revisioni senza colpe, perché le persone riferiscano volentieri i mancati riscontri (si veda l'Argomento 4.2 «Metriche di postmortem e apprendimento»).

**10. Seguire l'uso e chiedere se è stato utile.** Si conti quanto spesso incidenti e modifiche fanno riferimento a CI e si ponga a chi risponde e a chi approva una breve domanda sull'utilità del registro. Un tasso di uso in crescita con risposte positive è il segno più chiaro di valore. Un basso tasso di uso significa che le persone non si fidano del registro o non sanno che esiste, ed entrambe le cose sono rimediabili.

**11. Rivedere con regolarità le mappe delle dipendenze con i responsabili.** Le dipendenze cambiano man mano che il software evolve. Si chieda ai responsabili dei servizi critici di confermare le proprie mappe ogni trimestre, idealmente nell'ambito di una conversazione di pianificazione o di architettura. Si usi la data di conferma come attributo e si mostrino le mappe scadute.

### Mantenerlo onesto e proporzionato

**12. Ritirare ciò che nessuno usa.** Si rimuovano le classi di CI e gli attributi di cui nessuna domanda ha bisogno e che nessuno consulta. Meno campi, ma migliori, aumentano l'accuratezza. Si riveda il modello ogni anno e si registri che cosa è stato rimosso e perché. Un registro più piccolo è meno da mantenere veritiero e rende più facile rispettare onestamente le misure di qualità.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Completezza dei CI | Riempire gli attributi richiesti con valori predefiniti o segnaposto; restringere l'elenco dei richiesti | Contare i valori predefiniti e segnaposto; elenco dei richiesti fisso; campione di accuratezza |
| Accuratezza dei CI | Campionare le classi facili; fare l'audit dopo una pulizia | Campione casuale estratto in modo indipendente da entrambe le direzioni; metodo fisso |
| Copertura delle dipendenze | Segnare le mappe come riviste senza leggerle; mappare solo dipendenze banali | Tasso di successo della previsione dell'impatto; verifica a campione di una mappa rispetto al traffico reale |
| Tasso di successo della previsione dell'impatto | Scegliere gli incidenti andati bene; registrare in modo ristretto i servizi colpiti | Rivedere tutti gli incidenti significativi; revisori esterni al team responsabile |
| Tasso di CI duplicati | Unire CI distinti per abbassare il tasso; allentare le regole di corrispondenza | Campionare le unioni per verificarne la correttezza; registrare le regole di unione |
| Latenza di aggiornamento | Retrodatare gli eventi di modifica; contare solo gli aggiornamenti automatizzati | Confrontare i marcatori temporali di eventi e aggiornamenti dei sistemi di origine; traccia di audit |
| Tasso di uso del CMDB | Aggiungere riferimenti ai CI per mera formalità; rendere obbligatorio il campo con un valore qualsiasi | Verificare che i CI referenziati siano pertinenti; la domanda di riscontro sull'utilità |

Una lettura sana è un registro più piccolo con un'elevata accuratezza misurata, mappe delle dipendenze che prevedono gli incidenti reali, una latenza di aggiornamento vicina a zero per le classi automatizzate e persone che dichiarano di usare il registro perché aiuta.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| CMDB esaustivo | Visione ampia; supporta molti casi d'uso | Costoso da mantenere veritiero; decade |
| CMDB minimo, guidato dalle domande | Affidabile ed economico | Lacune; richiede disciplina nella crescita |
| Popolamento guidato dal rilevamento | Trova ciò che non si conosce; poco sforzo manuale | Rumoroso; privo di responsabilità e finalità |
| Popolamento guidato dalle pipeline | Accurato; bassa latenza | Limitato a ciò che è costruito tramite pipeline |
| Responsabilità centrale dei registri | Coerenza | Lenta; lontana dalla conoscenza |
| Responsabilità dei registri ai team | Accurata e veloce | Variazioni; richiede modelli e controlli |
| Modello a grafo | Naturale per relazioni e interrogazioni di impatto | Richiede competenze e strumenti |
| Modello a tabelle relazionali | Familiare e semplice | Scomodo per interrogazioni di dipendenze profonde |

La risposta in prosa è partire in piccolo e guidati dalle domande, popolare da pipeline con il rilevamento come seconda opinione e mettere i team di servizio a capo dei propri registri. Un [database a grafo](https://en.wikipedia.org/wiki/Graph_database) può rendere naturale porre domande sulle dipendenze, anche se un database convenzionale funziona se il modello è mantenuto semplice.

## Domande da discutere con il team

**1. Quale domanda abbiamo desiderato per ultima che il CMDB potesse rispondere, e poteva?**
Si ricordi un incidente o una modifica recenti in cui qualcuno ha cercato le dipendenze. Che cosa ha trovato e che cosa ha fatto invece? Il facilitatore dovrebbe registrare la domanda e se il registro sia stato consultato. Il risultato è il primo candidato per lo scopo del registro.

**2. Se il nostro servizio più importante si guastasse ora, quanta fiducia abbiamo nell'impatto previsto?**
Si chieda l'impatto previsto al CMDB e lo si confronti con ciò che credono le persone che conoscono il servizio. Si annotino le differenze. Si concordi quale dipendenza verificare per prima e chi la controllerà.

**3. Chi è responsabile del registro di ciascun servizio, e lo sa?**
Si elenchino i servizi critici e i responsabili delle loro voci nel CMDB. Ci si chieda se i responsabili lo sanno e le hanno riviste di recente. Dove il responsabile è «il team del CMDB», si discuta di come trasferire la responsabilità al team del servizio.

**4. Che cosa compiliamo solo per soddisfare un campo obbligatorio?**
Si cerchino valori predefiniti e segnaposto. Mostrano dove il modello chiede più di quanto qualcuno sappia. Si decida se rimuovere il campo, automatizzarlo o trovare la fonte reale.

**5. Dove il nostro registro è in disaccordo con ciò che è in esecuzione?**
Si confronti l'output del rilevamento con il registro per un servizio. Per ciascuna differenza ci si chieda se debba cambiare il registro o la realtà. La conversazione tende a trovare sia dati obsoleti sia componenti non autorizzati.

**6. Che cosa smetteremmo di registrare?**
Si elenchino classi, attributi e relazioni che nessuno ha usato per sei mesi. Ci si chieda che cosa accadrebbe se ciascuno scomparisse. Si concordi di rimuoverne due e di osservare se qualcuno se ne accorge.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna detengono la conoscenza di ciò da cui i loro servizi dipendono e sono nella posizione migliore per mantenere veritiero il registro. Dovrebbero dichiarare responsabilità e dipendenze insieme al codice, rivederle quando cambia il progetto e usare il registro nella pianificazione delle modifiche. Una definizione di completato che include l'aggiornamento della descrizione del servizio mantiene il registro vicino al lavoro.

### Team di servizio e operations

I team di operazioni consultano il registro durante incidenti e modifiche, perciò ne avvertono per primi gli errori. Dovrebbero segnalare i mancati riscontri nelle revisioni, eseguire verifiche di rilevamento, mantenere le regole di corrispondenza e fornire riscontri ai responsabili. Gestiscono anche gli strumenti e i campioni di audit.

### Leadership e governance

I dirigenti vogliono impatto e rischio visibili, e spesso sponsorizzano grandi programmi CMDB che deludono. Dovrebbero chiedere evidenze di uso e di accuratezza al posto dei conteggi di registrazioni, finanziare l'integrazione delle pipeline e accettare un ambito più ristretto fatto bene. La governance dovrebbe attendersi di vedere il tasso di successo della previsione dell'impatto e l'elenco delle lacune.

### Clienti e utenti

Gli utenti traggono beneficio quando gli incidenti vengono diagnosticati più in fretta e le modifiche hanno meno probabilità di rompere i servizi dipendenti. Raramente vedono il CMDB, anche se ne vedono gli effetti in comunicazioni che nominano correttamente i servizi colpiti e in meno sorprese dopo le modifiche. Il loro riscontro dopo gli incidenti mostra se il quadro dell'impatto era corretto.

## In pratica: un esempio di ITIL agile

Il gruppo tecnologico di una compagnia aerea nazionale gestisce circa 300 applicazioni e una piattaforma di prenotazione per i clienti. I numeri che seguono sono illustrativi.

Il CMDB contiene 180.000 CI ed è stato popolato da uno strumento di rilevamento cinque anni fa. La responsabile della gestione dei servizi vuole sapere se valga la pena di tenerlo. Chiede a un piccolo team di metterlo alla prova. Per la qualità, effettuano l'audit di 150 CI campionati e li trovano accurati al 71 per cento sui cinque attributi richiesti. Per la mappa, esaminano gli ultimi 20 incidenti significativi e confrontano i servizi effettivamente colpiti con ciò che il CMDB aveva previsto: ha previsto tutti i servizi colpiti in 6 casi su 20, un tasso di successo del 30 per cento. Per l'uso, il 12 per cento degli incidenti dell'ultimo trimestre ha fatto riferimento a un CI e, in una breve indagine tra chi risponde, la maggior parte ha dichiarato di affidarsi a una pagina wiki separata. I CI duplicati sono il 9 per cento del totale.

Il team prende quattro decisioni insieme ai responsabili dei servizi. Riduce l'ambito ai 40 servizi che hanno più clienti, con cinque classi di CI e quattro tipi di relazione. Chiede a ciascun team di servizio di dichiarare responsabile, dipendenze e ubicazione in esecuzione in un breve file conservato insieme al codice, che la pipeline pubblica nel CMDB a ogni rilascio. Esegue il rilevamento ogni settimana e riferisce le differenze ai responsabili. Aggiunge un campo alla revisione degli incidenti, «la previsione del CMDB era corretta?», e corregge ogni mancato riscontro entro due settimane.

Due trimestri dopo, il CMDB circoscritto contiene 14.000 CI, l'accuratezza sul campione è del 92 per cento, la latenza di aggiornamento dal rilascio al registro è inferiore a un'ora per i servizi nella pipeline e il tasso di successo sugli ultimi 12 incidenti è del 75 per cento. L'uso del CMDB negli incidenti è salito al 58 per cento e chi risponde dice che la pagina wiki non serve più. Il direttore operativo chiede un piano per portare dentro in una volta le altre 260 applicazioni. La responsabile della gestione dei servizi propone di aggiungere dieci servizi a trimestre, dopo che ciascuno ha ottenuto un tasso di successo superiore a un livello concordato in un incidente di prova, e spiega che il precedente registro esteso non aveva mai goduto di fiducia. La decisione viene registrata, con una revisione a ogni trimestre.

## Lente di settore

**Startup.** C'è poco bisogno di un CMDB oltre a un catalogo dei servizi e al codice dell'infrastruttura. Si tengano responsabili dei servizi e dipendenze nel repository e se ne generi una mappa. Si aggiunga un database solo quando le domande superano i file.

**Piccola impresa.** Può bastare un semplice diagramma e un elenco di sistemi con responsabili e fornitori. Lo si aggiorni dopo ogni modifica significativa. Si resista alla tentazione di acquistare una piattaforma per un piccolo patrimonio, ma si mantenga aggiornato il diagramma, poiché è prezioso in un'interruzione.

**Grande impresa.** La scala richiede un modello, una responsabilità federata e l'integrazione con più fonti, comprese le acquisizioni. Si standardizzino gli identificativi e il modello di base, si lasci che i team lo estendano entro regole e si misurino uso e accuratezza per dominio. Ci si attenda di dover gestire in modo permanente una funzione di corrispondenza e pulizia.

**Pubblica amministrazione e settore pubblico.** I servizi poggiano spesso su sistemi di lunga durata, fornitori esterni e infrastrutture condivise, e l'impatto degli incidenti può toccare il pubblico. Si mappino esplicitamente le dipendenze da fornitori e piattaforme condivise, si conservino i registri per gli audit e ci si allinei con la pianificazione della continuità (si veda l'Argomento 5.6 «Metriche di continuità del servizio»).

## Business case: motivazioni, ROI e TCO

I costi sono lo sforzo di modellazione e governance, l'integrazione di pipeline e rilevamento, un po' di strumenti e lo sforzo di audit e correzioni. Molte organizzazioni possiedono già la piattaforma. Il popolamento tramite pipeline è economico una volta che esiste il modello. I grandi programmi per popolare tutto in una volta sono stati costosi e spesso sono falliti.

I ritorni sono incidenti più brevi, modifiche più sicure e meno tempo speso a cercare informazioni. Si costruisca il caso a partire dalle proprie evidenze: il tempo che chi risponde impiega a trovare le dipendenze in un incidente tipico, la quota di incidenti in cui la mancanza di informazioni sulle dipendenze ha ritardato la diagnosi e le modifiche che hanno causato un impatto inatteso. Il tasso di successo della previsione dell'impatto è una misura diretta del fatto che il registro sarebbe stato d'aiuto. Si evitino affermazioni pubblicate sulla percentuale di incidenti causati dalle modifiche o sul costo delle interruzioni, a meno che se ne possa risalire alla fonte. Si confrontino i costi di mantenere un registro grande e dubbio con il valore di uno piccolo e affidabile.

## Anti-pattern e insidie

- **Popolare tutto per primo.** Un registro enorme e obsoleto distrugge la fiducia. Si parta dai servizi critici.
- **Il rilevamento come unica fonte.** Non può dire perché qualcosa esiste né chi ne è responsabile. Lo si combini con le dichiarazioni.
- **Verificare la completezza e chiamarla qualità.** Completo ma sbagliato è peggio di incompleto ma giusto. Si campioni per l'accuratezza.
- **Team centrali responsabili di tutti i dati.** Non li conoscono. Si dia ai team di servizio la responsabilità.
- **Campi obbligatori con valori predefiniti.** Sembrano completi e non portano informazione. Si rimuovano o si automatizzino.
- **Misurare in base al numero di CI.** Di più non è meglio. Si misurino accuratezza, tasso di successo e uso.
- **Ignorare le relazioni.** Senza dipendenze, un CMDB è un inventario. Si investa nella mappa per i servizi critici.
- **Dare la colpa alle persone per i mancati riscontri.** Smettono di riferirli. Si tratti una dipendenza mancata come un riscontro.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Ambito e modello | Ciò che il rilevamento ha trovato | Modello definito; ambito ampio | Modello guidato dalle domande; servizi critici mappati | L'ambito cresce quando tasso di successo e uso lo giustificano | Modello federato tra team e fornitori; identificativi condivisi |
| Popolamento e qualità | Caricamento manuale o una tantum | Rilevamento e importazioni programmati | Le pipeline pubblicano dal codice; rilevamento come verifica; audit a campione | Accuratezza, latenza e duplicati misurati e seguiti nel tempo | Flussi in tempo reale con riconciliazione automatizzata e conferma dei responsabili |
| Uso | Raramente consultato | Usato da pochi team | Referenziato negli incidenti e nelle modifiche come pratica standard | Previsione dell'impatto verificata sugli incidenti; uso e utilità monitorati | Il registro orienta decisioni automatizzate e mappe condivise con i fornitori |

## Checklist

- [ ] Le domande a cui il CMDB deve rispondere sono scritte.
- [ ] L'ambito è limitato ai servizi critici, con una regola di crescita definita.
- [ ] Il modello ha un piccolo insieme di classi, attributi e tipi di relazione.
- [ ] Ogni servizio critico ha un responsabile che ha confermato il proprio registro nell'ultimo trimestre.
- [ ] Le pipeline pubblicano le modifiche ai CI per i servizi costruiti come codice.
- [ ] I risultati del rilevamento sono confrontati con il registro e le differenze sono riviste.
- [ ] Ogni trimestre si effettua l'audit di un campione casuale di accuratezza in entrambe le direzioni.
- [ ] Le revisioni degli incidenti registrano se l'impatto previsto era corretto.
- [ ] L'uso del CMDB negli incidenti e nelle modifiche è monitorato, con una domanda sull'utilità.
- [ ] Le classi e gli attributi inutilizzati sono ritirati secondo un calendario.

## Prompt IA

**Definire le domande e l'ambito.**

```text
Gestiamo [tipo di organizzazione e servizi]. Situazioni tipiche in cui ci
servono informazioni di configurazione: [elenco di incidenti, modifiche,
audit]. Redigi un elenco delle domande a cui il nostro CMDB dovrebbe
rispondere, delle classi di CI, degli attributi e delle relazioni necessari
per ciascuna e di un ambito iniziale minimo dei servizi più critici. Non
inventare strumenti. Elenca le tue ipotesi e che cosa confermare con i
responsabili dei servizi.
```

**Analizzare un mancato riscontro nella previsione dell'impatto.**

```text
Dopo l'incidente [descrizione], il CMDB aveva previsto questi servizi colpiti:
[elenco], mentre i servizi effettivamente colpiti erano: [elenco]. Spiega le
possibili ragioni di ciascuna differenza (dipendenza mancante, relazione
errata, dati obsoleti, dipendenza indiretta), suggerisci come verificare
ciascuna e proponi una correzione alla fonte. Non presumere cause che le
informazioni non possono sostenere. Elenca le tue ipotesi.
```

**Progettare un file di dichiarazione per i team di servizio.**

```text
Proponi una dichiarazione breve e leggibile da una persona che un team di
servizio conserva insieme al proprio codice per descrivere il servizio al
CMDB: responsabile, contatto di supporto, livello, dipendenze, ubicazione in
esecuzione e classificazione dei dati. Includi regole di validazione che la
pipeline potrebbe applicare e un esempio minimo per [tipo di servizio]. Limitati
a ciò che richiedono le domande in [incolla le domande]. Elenca le tue ipotesi
e i campi da rivedere con la sicurezza.
```

**Pianificare un audit trimestrale dell'accuratezza.**

```text
Il nostro CMDB contiene [numero] CI in queste classi: [elenco]. Progetta un
audit trimestrale con campioni casuali estratti in entrambe le direzioni (dal
CMDB alla realtà e dalla realtà al CMDB), indica che cosa verificare per ogni
classe, come riferire con onestà accuratezza e fonti di errore e come evitare
di correggere i nostri stessi compiti. Non sopravvalutare la precisione
statistica. Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di qualità della configurazione.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica del CMDB riporti il proprio vettore di manipolazione, la salvaguardia e la regola dell'evidenza indipendente.

## Punti chiave

- Si costruisca il CMDB per rispondere a domande dichiarate sui servizi che contano di più e lo si faccia crescere man mano che cresce la fiducia.
- Lo si popoli da pipeline e codice, si usi il rilevamento come seconda opinione e si lasci ai team di servizio la responsabilità dei propri registri.
- Si verifichi la qualità rispetto agli eventi: si confronti l'impatto previsto con ciò che è realmente accaduto negli incidenti.
- Si misurino uso e utilità, non il numero di CI.
- Si campioni per l'accuratezza da evidenze indipendenti in entrambe le direzioni.
- Si ritiri ciò che nessuno usa e si correggano gli errori alla fonte.

## Riferimenti e letture di approfondimento

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Configuration Management*, TSO, 2020.
2. Wang, R. Y., and Strong, D. M., "Beyond accuracy: what data quality means to data consumers," *Journal of Management Information Systems*, 12(4), 1996.
3. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd ed., Technics Publications, 2017.
4. Morris, K., *Infrastructure as Code*, 2nd ed., O'Reilly, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Configuration item](https://en.wikipedia.org/wiki/Configuration_item).
7. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
8. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
9. Wikipedia, [Data integrity](https://en.wikipedia.org/wiki/Data_integrity).
10. Wikipedia, [Entity resolution](https://en.wikipedia.org/wiki/Entity_resolution).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Service discovery](https://en.wikipedia.org/wiki/Service_discovery).
13. Wikipedia, [Graph database](https://en.wikipedia.org/wiki/Graph_database).
