# Metriche di adozione del servizio e del catalogo

**Un servizio che nessuno sceglie, trova o porta a termine con una richiesta non ha prodotto valore: si misuri dunque come le persone scoprono e usano ciò che si offre, e si mantenga il catalogo onesto quanto un backlog.**

## Panoramica e motivazione

I team investono nei servizi e poi scoprono che le persone non li usano. Il nuovo portale self-service viene aggirato con la posta elettronica. Una voce di catalogo progettata con cura per l'accesso al software riceve due richieste all'anno mentre cento al mese arrivano in chat. Un servizio di monitoraggio viene lanciato e metà dei team a cui era destinato non vi si collega mai. L'adozione è la metà mancante della consegna: un servizio ha valore solo quando gli utenti a cui è destinato iniziano, continuano e terminano di usarlo.

Il **catalogo dei servizi** (l'ortografia di ITIL è «service catalogue») è l'elenco dei servizi e delle voci richiedibili che un'organizzazione offre, descritti in termini che i suoi utenti possono comprendere. Un [catalogo dei servizi](https://en.wikipedia.org/wiki/Service_catalog) ha di solito una vista rivolta al cliente, che elenca ciò che un utente può chiedere e come, e una vista tecnica, che registra come ciascun servizio è costruito e supportato. I team agili riconosceranno la forma: un catalogo è una sorta di [product backlog](https://en.wikipedia.org/wiki/Product_backlog) rovesciato. Un backlog elenca ciò che si intende costruire. Un catalogo elenca ciò che già si offre, ed entrambi richiedono la stessa cura: ordinamento, potatura, formulazione chiara e un flusso costante di feedback dagli utenti (si veda l'argomento 2.6, Metriche di backlog e raffinamento).

L'**adozione** è la misura in cui gli utenti a cui il servizio è destinato lo adottano e continuano a usarlo. Lo studio di come si diffondono le nuove pratiche ha una lunga storia: la teoria della [diffusione delle innovazioni](https://en.wikipedia.org/wiki/Diffusion_of_innovations) descrive l'adozione come un processo nel tempo, con adottanti precoci, una maggioranza e ritardatari. Per un servizio interno, la lezione pratica è che l'adozione raramente avviene grazie a un annuncio. Avviene quando il servizio è facile da trovare, facile da usare e chiaramente migliore della soluzione di ripiego.

Le misure di adozione sono allettanti da trasformare in obiettivi. Imporre un canale fa apparire bene un numero d'uso mentre gli utenti lo subiscono e costruiscono soluzioni di ripiego. Spingere ogni richiesta in una voce di catalogo fa salire la copertura del catalogo mentre il completamento scende. Il guardrail derivato dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) si applica, perciò ogni misura qui è abbinata a una verifica che a crescere sia il valore reale e non il mero uso (si veda l'argomento 1.2, La legge di Goodhart e la psicologia delle metriche).

Questo argomento copre quattro aspetti: se le persone usano un servizio (adozione), se riescono a trovare e portare a termine ciò per cui sono venute (catalogo e flusso delle richieste), se il catalogo è aggiornato e onesto (igiene) e se l'uso è concentrato in poche voci (forma). Si collega all'evasione delle richieste (si veda l'argomento 3.5, Metriche di evasione delle richieste di servizio) e al self-service (si veda l'argomento 3.7, Metriche di self-service e automazione), che trattano ciò che accade dopo che la richiesta è stata fatta.

## Principi chiave

- **L'adozione è un risultato, perciò ci si chieda che cosa l'utente stava cercando di fare.** Si contino gli obiettivi completati, non le visualizzazioni di pagina.
- **Si misuri il funnel, non solo il totale.** Dove le persone abbandonano dice che cosa correggere.
- **Si confronti con l'alternativa.** Un servizio compete con la posta elettronica, la chat, una telefonata e una soluzione di ripiego.
- **Si mantenga il catalogo il più piccolo e aggiornato possibile.** Le voci obsolete insegnano agli utenti a smettere di cercare.
- **Si segmenti prima di concludere.** Le medie su tutti gli utenti nascondono i gruppi per i quali il servizio non funziona.
- **Non si forzi mai l'uso per far salire un numero.** I mandati producono numeri, non adozione.
- **Si tratti il basso uso come una domanda per il responsabile e per gli utenti.** Può significare che il servizio non serve.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasso di adozione | Quota di utenti idonei che hanno usato un servizio almeno una volta nel periodo | utenti idonei distinti con almeno un uso completato / utenti idonei | percentuale | Log d'uso del servizio collegati alla directory degli utenti | Gestione del catalogo dei servizi; gestione dei livelli di servizio | Adozione delle funzionalità; revisione dei risultati di prodotto | Mensile |
| Tasso di uso attivo | Quota di adottanti che continuano a usare il servizio nel tempo | utenti attivi nel periodo che hanno usato il servizio anche nel periodo precedente / utenti attivi nel periodo precedente | percentuale | Log d'uso; tabelle di coorte | Miglioramento continuo | Retention nelle analisi di prodotto | Mensile |
| Copertura del catalogo | Quota di richieste che arrivano tramite il catalogo anziché tramite canali ad hoc | richieste create tramite catalogo / tutte le richieste, da tutti i canali | percentuale | Strumento di gestione delle richieste; tag di casella di posta e chat | Gestione delle richieste di servizio; gestione del catalogo dei servizi | Voci di backlog dotate di una definizione scritta | Mensile |
| Tasso di abbandono delle richieste | Quota di richieste avviate che l'utente non invia | richieste avviate ma non inviate entro 24 ore / richieste avviate | percentuale | Analisi del portale | Gestione delle richieste di servizio | Abbandono dei compiti nei test di usabilità | Mensile |
| Tasso di successo della ricerca | Quota di ricerche nel catalogo che si concludono con una richiesta o con una risposta visualizzata | ricerche seguite da una richiesta o da una visualizzazione di conoscenza nella sessione / ricerche | percentuale | Log di ricerca del portale | Gestione della conoscenza; gestione del catalogo dei servizi | Reperibilità nella ricerca sugli utenti | Mensile |
| Quota di voci obsolete | Quota di voci del catalogo oltre la data di revisione o prive di uso in un periodo stabilito | voci con revisione scaduta o con zero richieste in 12 mesi / voci nel catalogo | percentuale | Registro del catalogo | Gestione del catalogo dei servizi | Età del backlog e potatura | Trimestrale |
| Concentrazione delle richieste | Quota di richieste attribuibile alle voci più richieste | richieste per le prime cinque voci / tutte le richieste di catalogo | percentuale | Strumento di gestione delle richieste | Gestione delle richieste di servizio | Pareto del lavoro per tipo | Trimestrale |

Si dichiari la base di utenti per ogni misura. Gli «utenti idonei» devono essere definiti prima di misurare, per esempio il personale nei ruoli che potrebbero usare un servizio, e l'elenco registrato nel registro delle metriche. Si conti un uso solo quando termina in un risultato completato, come una concessione di accesso consegnata, e non quando una pagina si carica. Si escludano gli account di prova e il traffico automatizzato.

## Raccomandazioni

### Conoscere i propri servizi e i propri utenti

**1. Si definisca il pubblico previsto per ciascun servizio.** Prima di misurare l'adozione, si scriva a chi è destinato il servizio e perché dovrebbe usarlo anziché l'alternativa. Un nuovo servizio di analisi costruito per il personale finanziario non è a «bassa adozione» se solo il personale finanziario doveva usarlo. Senza un pubblico definito, il tasso di adozione è un numero che non riguarda nessuno.

**2. Si registri l'alternativa.** Per ogni servizio importante si elenchi ciò che le persone fanno oggi quando non lo usano: chiedere a un collega, inviare un'email, acquistare uno strumento, usare un foglio di calcolo. Si tratti l'alternativa come un concorrente nel senso che conta: è dove vanno i vostri utenti quando il servizio è più difficile. Si confronti lo sforzo di entrambi i percorsi in fase di progettazione e di revisione.

**3. Si descrivano le voci nel linguaggio degli utenti.** Titoli come «Accesso al software, standard» e «Sostituzione del portatile, danneggiato» sono più facili da trovare dei nomi interni. Si verifichino i titoli chiedendo a pochi utenti di trovare una voce a partire da un breve scenario. I problemi di formulazione emergono in fretta nei log di ricerca.

**4. Si mantenga un responsabile per ogni voce.** Ogni voce di catalogo ha un responsabile con nome, una data di revisione, una descrizione del pubblico e il volume atteso. Le voci senza responsabile vanno alla deriva. Se nessuno sa dire chi usa una voce e perché, essa è candidata alla rimozione.

### Misurare il percorso

**5. Si strumenti il funnel.** Per ogni servizio importante si registrino i passaggi dalla scoperta al risultato completato: trovare la voce, avviare la richiesta, compilare il modulo, inviare, ricevere il risultato. Una vista a [funnel di conversione](https://en.wikipedia.org/wiki/Conversion_funnel) mostra dove gli utenti se ne vanno. Si corregga per prima la perdita maggiore. Si verifichi che le correzioni rendano il modulo più breve o più chiaro, non soltanto i dati più eleganti.

**6. Si usino le coorti per vedere la retention.** Una [analisi di coorte](https://en.wikipedia.org/wiki/Cohort_analysis) raggruppa gli utenti in base a quando hanno usato per la prima volta il servizio e segue ciascun gruppo. Distingue un servizio che trattiene i propri utenti da uno che li attrae una volta e li perde. La si usi per i servizi che dovrebbero essere usati ripetutamente, come il portale del service desk o una pipeline di rilascio.

**7. Si leggano i log di ricerca per capire che cosa le persone non riescono a trovare.** Le ricerche senza risultati, o ripetute con parole diverse, indicano lacune nella denominazione, nei contenuti o nel catalogo stesso. Si rivedano ogni mese le principali ricerche senza risultati e si decida per ciascuna: rinominare una voce, aggiungere un sinonimo, scrivere un articolo o creare una nuova voce. Gli strumenti di [analisi web](https://en.wikipedia.org/wiki/Web_analytics) possono fornirle, così come i log del portale stesso.

**8. Si segmenti per gruppo.** Si scompongano adozione e abbandono per ruolo, sede, dispositivo ed esigenze di accessibilità dove si ha un accesso lecito ed etico a tali informazioni. L'aggregato può sembrare sano mentre il personale del turno di notte o gli utenti di dispositivi mobili falliscono in misura doppia. Si sopprimano i gruppi piccoli per proteggere le persone e si combini con le misure di esperienza degli argomenti precedenti (si veda l'argomento 6.2, Experience level agreement).

### Mantenere onesto il catalogo

**9. Si pota secondo un calendario.** Si riveda il catalogo ogni trimestre. Si rimuovano o si accorpino le voci senza uso, si ritirino le voci di servizi dismessi e si correggano le voci con alto abbandono. Un catalogo più piccolo e accurato serve gli utenti meglio di uno completo e obsoleto. Si tratti la rimozione come normale e se ne registri il motivo.

**10. Si osservi la forma della domanda.** Nella maggior parte dei cataloghi poche voci spiegano gran parte delle richieste, uno schema spesso descritto tramite il [principio di Pareto](https://en.wikipedia.org/wiki/Pareto_principle). Lo si usi per concentrare lo sforzo di progettazione sulle voci frequenti e per automatizzare quelle di routine (si veda l'argomento 3.7, Metriche di self-service e automazione). Non si scarti la coda lunga senza averla guardata, poiché le voci rare possono contare moltissimo per chi ne ha bisogno.

**11. Non si forzi l'adozione.** Se un servizio serve, gli utenti verranno quando sarà facile. Dove l'organizzazione richiede un canale per ragioni di controllo o di audit, lo si dica, e si sia aperti sul fatto che il numero riflette una regola, non una preferenza. Si evitino i [dark pattern](https://en.wikipedia.org/wiki/Dark_pattern), come nascondere il numero di telefono o rendere più difficile l'alternativa, poiché aumentano l'uso e riducono la fiducia.

**12. Si chiuda il ciclo con i responsabili e gli utenti.** Si condividano ogni mese con i responsabili delle voci il funnel, le lacune di ricerca e l'elenco delle voci obsolete. Si chieda agli utenti, nel sondaggio e nelle revisioni, perché usano o evitano un servizio (si veda l'argomento 6.1, Metriche di soddisfazione del cliente). Si registri nel registro ciò che si è modificato e si dica agli utenti che è avvenuto.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di guardrail abbinata |
| --- | --- | --- |
| Tasso di adozione | Imporre l'uso; contare accessi o visualizzazioni di pagina come uso; restringere gli «utenti idonei» a quelli che già lo usano | Definizione basata sul risultato completato; confronto con valutazioni di soddisfazione e di sforzo; pubblicazione della regola degli utenti idonei |
| Tasso di uso attivo | Iscrivere automaticamente gli utenti perché appaiano attivi; inviare notifiche che contano come attività | Contare solo le azioni completate avviate dall'utente; interviste a campione con utenti che hanno smesso |
| Copertura del catalogo | Forzare ogni richiesta in una voce di catalogo generica; chiudere le richieste via email con «si prega di usare il portale» | Tasso di abbandono delle richieste e soddisfazione; conteggio delle richieste riproposte tramite un altro canale |
| Tasso di abbandono delle richieste | Rimuovere campi del modulo necessari, spostando il lavoro sull'evasione; contare le richieste abbandonate solo dopo una finestra lunga | Tasso di rilavorazione e di chiarimenti in fase di evasione (si veda l'argomento 3.5, Metriche di evasione delle richieste di servizio) |
| Tasso di successo della ricerca | Contare ogni clic come successo; aggiungere articoli irrilevanti che corrispondono a ogni query | Verificare che il risultato sia stato usato (richiesta effettuata, articolo valutato come utile); leggere le ricerche senza risultati |
| Quota di voci obsolete | Segnare le voci come riviste senza leggerle; reimpostare in blocco le date di revisione | Campionare le voci riviste per verificarne l'accuratezza; mostrare la data dell'ultima modifica reale |
| Concentrazione delle richieste | Suddividere voci popolari in molte; accorpare voci non correlate per nascondere la domanda della coda lunga | Tassonomia delle voci fissa con registro delle modifiche; osservare la coda per categoria |

Una lettura sana è un catalogo in cui le voci più usate funzionano bene e diventano più semplici, in cui gli utenti scelgono il servizio perché è migliore dell'alternativa e in cui ritirare una voce è routine.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Canale imposto | Volume prevedibile, facile da sottoporre ad audit | Risentimento, soluzioni di ripiego, numeri gonfiati |
| Adozione volontaria | Segnale onesto del valore | Più lenta; alcuni servizi potrebbero non essere mai adottati |
| Catalogo ampio | Completo, copre le esigenze rare | Difficile da cercare; diventa obsoleto |
| Catalogo piccolo | Facile da trovare e da mantenere | Le esigenze rare restano fuori; gli utenti ricorrono alla posta elettronica |
| Metriche di funnel | Individuano dove gli utenti abbandonano | Richiedono strumentazione; possono incoraggiare l'ottimizzazione del modulo a scapito del risultato |
| Sondaggio sul perché | Spiega il comportamento | Distorto da chi risponde; difficile da scalare |

La risposta in prosa è preferire l'adozione volontaria sostenuta da un chiaro vantaggio di qualità e usare i mandati solo dove controllo o conformità lo richiedono, con il numero etichettato di conseguenza. Si mantenga il catalogo abbastanza piccolo da poterlo mantenere e si collochi la coda in una knowledge base ricercabile, non in cento voci usate a metà.

## Domande da discutere con il team

**1. A chi è destinato ciascuno dei nostri servizi principali e come sapremmo che lo usano?**
Si elenchino i cinque servizi a cui il team dedica più tempo e si scriva il pubblico previsto per ciascuno. Poi ci si chieda come misurare l'adozione. Il facilitatore dovrebbe cercare i servizi per cui nessuno sa nominare il pubblico, poiché è probabile che manchi un piano di adozione.

**2. Che cosa fanno le persone quando non usano il nostro servizio, e perché?**
Per un servizio a bassa adozione si intervistino o si interpellino alcuni utenti che lo evitano. L'alternativa è di solito rivelatrice: può essere più rapida, più familiare o più flessibile. Si decida se migliorare il servizio, cambiare l'alternativa o accettare che il servizio non serve.

**3. Dove abbandonano gli utenti nella nostra voce più richiesta?**
Si mostri il funnel della voce principale, dalla prima visualizzazione all'invio. Si chieda al team di indovinare dove si trova la perdita maggiore, poi si confronti. Si concordi una modifica da provare e si dica come verificare che abbia aiutato senza spostare il problema altrove.

**4. Che cosa toglieremmo dal catalogo se osassimo?**
Si stampi l'elenco delle voci senza richieste in un anno. Ci si chieda che cosa accadrebbe se ciascuna sparisse. La conversazione scopre spesso che una voce esiste perché qualcuno una volta l'ha chiesta. Si concordi una data per rimuovere o accorpare le prime cinque e una nota per gli utenti.

**5. Dove stiamo spingendo o forzando gli utenti, e ne vale il costo?**
Si elenchi ogni punto in cui una regola o un design spinge gli utenti verso un canale. Ci si chieda quali siano davvero necessari e quali un'abitudine. Il facilitatore dovrebbe esplorare come gli utenti vivono ciascuno e se i numeri che ne derivano significano ciò che i leader pensano.

**6. Che cosa cercano le persone che non abbiamo?**
Si rivedano le principali ricerche senza risultati. Per ciascuna si decida se aggiungere una voce, scrivere un articolo o spiegare che il servizio non esiste. Ci si chieda chi è responsabile di questa revisione e con quale frequenza avverrà.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna costruiscono servizi e funzionalità che hanno bisogno di adozione per contare. Dovrebbero definire il pubblico all'inizio, incorporare misure d'uso nel servizio e rivedere il funnel dopo il lancio. I dati di adozione sono feedback sul lavoro e appartengono al raffinamento e alla revisione. I team dovrebbero evitare di dichiarare concluso un rilascio quando viene distribuito. Concluso significa che gli utenti previsti ne stanno traendo beneficio.

### Team di servizio e operations

I team di operations gestiscono il catalogo e vedono le richieste che arrivano da ogni canale. Dovrebbero mantenere aggiornato il catalogo, contrassegnare le richieste che lo aggirano e chiedersi perché. Non dovrebbero chiudere una richiesta reindirizzandola, perché ciò nasconde il segnale. Le lacune di ricerca e l'abbandono sono la loro migliore fonte di miglioramenti per il portale.

### Leadership e governance

I leader decidono se l'adozione sia una conversazione o una quota. Dovrebbero chiedere a che cosa serve il servizio, chi aiuta e perché le persone lo scelgono. Dovrebbero evitare di fissare obiettivi di adozione per singoli team, sostenere il ritiro dei servizi inutilizzati e aspettarsi di vedere l'adozione accanto a soddisfazione e sforzo. Dove un mandato è giustificato, i leader dovrebbero spiegarlo agli utenti.

### Clienti e utenti

Gli utenti vogliono ottenere ciò che serve con poco sforzo. Notano quando un portale è difficile da cercare, quando i moduli chiedono cose che l'organizzazione già conosce e quando il vecchio modo è più rapido. Il loro comportamento, e ciò che dicono, è il segnale di adozione più onesto. Andrebbe chiesto loro perché evitano un servizio, e andrebbe detto che cosa è cambiato di conseguenza.

## In pratica: un esempio di ITIL agile

Il reparto IT di un'agenzia nazionale dei trasporti gestisce un service desk, un portale self-service con un catalogo di circa 140 voci e diversi team di prodotto. I numeri seguenti sono illustrativi.

Il portale è stato lanciato un anno fa e la direzione ha fissato l'obiettivo dell'80 percento delle richieste tramite il portale. Il rapporto mensile mostra una copertura del 78 percento, e la responsabile della gestione dei servizi è soddisfatta finché non legge i commenti del sondaggio tra gli utenti. Il personale delle sedi regionali dice che il portale è lento e i moduli sono lunghi. Chiede al responsabile del catalogo di esaminare il funnel e i log di ricerca.

Il funnel di «Attrezzatura per nuovi assunti» mostra 1.100 avvii a trimestre e 640 invii, con un tasso di abbandono del 42 percento. Il modulo ha 23 campi. Il log di ricerca mostra che il termine «portatile» restituisce otto voci e il termine «VPN» nessuna, benché sia il termine più cercato. Delle 140 voci di catalogo, 38 non hanno avuto richieste in 12 mesi e 21 hanno superato la data di revisione. Le prime cinque voci rappresentano il 61 percento delle richieste, e un ulteriore 15 percento delle richieste arriva per email e viene registrato a mano.

Il team apporta quattro modifiche. Riduce il modulo per i nuovi assunti a nove campi utilizzando dati che il sistema delle risorse umane già possiede. Aggiunge un articolo sulla VPN e una voce con sinonimi. Accorpa le otto voci sui portatili in due. E ritira 19 delle voci inutilizzate con una nota ai responsabili. Cambia anche il modo in cui si legge il rapporto mensile: la copertura è mostrata con il tasso di abbandono e con la domanda del sondaggio «quanto è stato facile ottenere ciò di cui aveva bisogno?». Tre mesi dopo, l'abbandono della voce per i nuovi assunti scende al 24 percento, la copertura del portale è del 74 percento e la valutazione dello sforzo da parte delle sedi regionali sale. Il direttore chiede perché la copertura sia scesa. La responsabile della gestione dei servizi spiega che prima le richieste via email venivano chiuse d'ufficio, che il numero più basso è più onesto e che l'esperienza è migliore. Il registro delle decisioni annota che l'obiettivo è sostituito da una direzione: ridurre l'abbandono e alzare la valutazione dello sforzo, con la copertura rivista ma non oggetto di obiettivo.

## Lente di settore

**Startup.** Spesso non esiste un catalogo. Una semplice pagina di «come ottenere X» e un canale condiviso bastano. Si osservi che cosa le persone chiedono e si trasformino le prime cinque richieste in brevi guide. Si misuri l'adozione degli strumenti interni chiedendo agli utenti e si tralascino i funnel formali.

**Piccola impresa.** Poche persone forniscono IT e le richieste arrivano da ogni canale. Un catalogo modesto di 10-20 voci copre la maggior parte delle esigenze. Non si forzino gli utenti in un portale che costa di più da mantenere delle richieste che gestisce. Si riveda l'elenco due volte l'anno.

**Grande impresa.** La scala fornisce un catalogo abbastanza grande da richiedere governance: responsabili, date di revisione e una tassonomia. Si segmenti l'adozione per unità di business e regione e si evitino mandati a livello aziendale che ignorano le esigenze locali. Si prestino attenzione ai fornitori le cui voci di catalogo sono conteggiate ma non usate.

**Pubblica amministrazione e settore pubblico.** I servizi raggiungono il pubblico oltre che il personale, con doveri in materia di accessibilità, lingua e parità di accesso. Si includano nelle misure i canali assistiti (telefono, di persona) affinché l'adozione digitale non nasconda l'esclusione. Dove regole giuridiche o di policy richiedono un canale, lo si dichiari nei rapporti (si veda l'argomento 8.5, Rendicontazione regolamentata e governativa).

## Business case: motivazioni, ROI e TCO

I costi sono modesti. I log d'uso e i dati delle richieste esistono di solito già. L'analisi di funnel e di ricerca richiede l'accesso alle analisi del portale, che la maggior parte delle piattaforme offre. Il principale costo in tempo è la revisione trimestrale del catalogo e uno sguardo mensile a lacune di ricerca e abbandoni, poche ore ciascuno. Correggere i moduli e accorpare le voci costa tempo di progettazione e di configurazione.

Il ritorno viene da servizi che sono usati, richieste che arrivano a termine e meno spreco nell'evasione. Un modulo più breve che riduce l'abbandono diminuisce i contatti ripetuti e la gestione manuale. Potare le voci inutilizzate riduce la manutenzione. Si costruisca il caso a partire dai propri numeri: tasso di abbandono, tempo di gestione manuale per richiesta via email e costo di mantenimento di una voce inutilizzata, prima e dopo le modifiche. Si evitino affermazioni pubblicate sul ROI dei portali che non si possono ricondurre a una fonte, poiché dipendono dall'organizzazione e dal metodo.

## Anti-pattern e insidie

- **Contare i lanci come adozione.** Un servizio è adottato quando gli utenti previsti completano risultati con esso. Si misuri l'uso, non l'annuncio.
- **Imporre un canale per far salire un numero.** Gli utenti lo aggireranno. Si migliori il servizio e si lasci che il numero segua.
- **Aggiungere voci senza mai rimuoverne.** Il catalogo diventa impossibile da cercare. Si pota ogni trimestre.
- **Guardare solo i totali.** Si segmenti per gruppo e si osservi il funnel.
- **Chiudere le richieste via email con un reindirizzamento.** Nasconde la domanda e irrita gli utenti. Si gestisca la richiesta e si corregga il percorso.
- **Usare le visualizzazioni di pagina come uso.** Si contino i risultati completati.
- **Trattare il basso uso come un fallimento degli utenti.** Ci si chieda se il servizio serve ed è facile da usare.
- **Lasciare decadere i responsabili delle voci.** Si assegnino responsabili e date di revisione per ogni voce.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Progettazione del catalogo | Elenco cresciuto per richiesta | Il catalogo esiste, formulazione incoerente | Voci nel linguaggio degli utenti con responsabili e date di revisione | Potatura trimestrale; tassonomia gestita | Catalogo condiviso tra team e fornitori; voci co-progettate con gli utenti |
| Misurazione dell'adozione | Aneddoto | Conteggi delle richieste per voce | Adozione definita da utenti idonei e risultati completati | Funnel, coorti e segmenti rivisti ogni mese | Adozione collegata a esperienza e risultati tra i servizi |
| Miglioramento | Correzioni ad hoc | Correzioni dopo i reclami | Lacune di ricerca e abbandoni rivisti ogni mese | Correzioni prioritizzate e monitorate a backlog | Miglioramento coordinato con gli utenti, con i servizi ritirati riportati apertamente |

## Checklist

- [ ] Ogni servizio importante ha un pubblico previsto scritto e un percorso alternativo.
- [ ] L'adozione è definita come risultati completati da utenti idonei.
- [ ] Le voci di catalogo hanno responsabili, descrizioni nel linguaggio degli utenti e date di revisione.
- [ ] Il funnel è strumentato per le voci più richieste.
- [ ] Le ricerche senza risultati sono riviste ogni mese.
- [ ] Adozione e abbandono sono segmentati per gruppo, con i gruppi piccoli soppressi.
- [ ] Le richieste che arrivano al di fuori del catalogo sono contrassegnate e contate.
- [ ] Il catalogo è potato ogni trimestre, con i motivi registrati.
- [ ] L'adozione è mostrata accanto a misure di soddisfazione o di sforzo.
- [ ] Nessun obiettivo di adozione è fissato per un singolo team o una singola persona.

## Prompt IA

**Analizzare un funnel di richiesta.**

```text
Per la voce di catalogo [nome della voce] in [tipo di organizzazione], i dati
del nostro portale per [periodo] sono: visualizzazioni [numero], avvii
[numero], invii [numero] ed evasi [numero]. Il modulo ha [numero] campi:
[elenco]. Descrivi dove gli utenti probabilmente incontrano difficoltà, suggerisci
tre modifiche da provare e indica come verificare che ciascuna abbia aiutato
senza spostare il problema sull'evasione. Non inventare valori di benchmark.
Elenca le tue ipotesi e quali dati aggiuntivi ti servono.
```

**Rivedere i log di ricerca per individuare lacune del catalogo.**

```text
Ecco le prime [numero] ricerche di catalogo del periodo [periodo] con il
numero di risultati: [incolla i dati]. Raggruppale in temi, segnala le ricerche
che non restituiscono nulla o troppe voci e suggerisci se ciascuna richieda una
nuova voce, una ridenominazione, un sinonimo o un articolo di conoscenza. Non
ipotizzare servizi che potremmo non offrire. Elenca le tue ipotesi e le domande
che dovrei porre ai responsabili delle voci.
```

**Pianificare una revisione di potatura del catalogo.**

```text
Gestisco un catalogo di [numero] voci. Per ciascuna di queste voci dispongo dei
conteggi delle richieste di 12 mesi, delle date di revisione e dei responsabili:
[incolla una sintesi]. Proponi criteri per rimuovere, accorpare o mantenere una
voce, una breve nota per i responsabili e un modo per evitare di eliminare voci
rare ma critiche. Includi una verifica che non ci si limiti a spostare le
richieste sulla posta elettronica. Elenca le tue ipotesi.
```

**Redigere una definizione di adozione per un servizio.**

```text
Servizio: [nome]. Utenti previsti: [ruoli]. Percorso alternativo oggi: [che
cosa fanno ora]. Redigi una definizione di adozione di una pagina che copra gli
utenti idonei, che cosa conta come uso completato, la fonte dei dati, come
escludere il traffico di prova e automatizzato, come la misura potrebbe essere
manipolata e un guardrail. Non inventare obiettivi. Elenca le tue ipotesi e
tutto ciò che devo confermare.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare il guardrail abbinato a una metrica di adozione o di catalogo.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una nuova voce di metrica di catalogo abbia il proprio vettore di manipolazione e il proprio guardrail.

## Punti chiave

- Adozione significa che gli utenti previsti completano risultati con un servizio: si definisca dunque il pubblico e si contino i completamenti.
- Si misurino il funnel, le lacune di ricerca e la retention degli utenti, e si segmenti per gruppo.
- Si confronti il servizio con l'alternativa che gli utenti hanno oggi.
- Si mantenga il catalogo piccolo, con responsabili e potato ogni trimestre.
- Non si forzi l'uso per far salire un numero e si abbini l'adozione a soddisfazione e sforzo.
- Si tratti il basso uso come una domanda su necessità e facilità, non come un fallimento degli utenti.

## Riferimenti e letture di approfondimento

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Hunnebeck, L., *ITIL Service Design* (service catalogue management), The Stationery Office, 2011.
3. Hunt, A. and Thomas, D., *The Pragmatic Programmer*, Addison-Wesley, for the habit of removing what is no longer useful.
4. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
5. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
6. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Conversion funnel](https://en.wikipedia.org/wiki/Conversion_funnel).
9. Wikipedia, [Cohort analysis](https://en.wikipedia.org/wiki/Cohort_analysis).
10. Wikipedia, [Web analytics](https://en.wikipedia.org/wiki/Web_analytics).
11. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
12. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
