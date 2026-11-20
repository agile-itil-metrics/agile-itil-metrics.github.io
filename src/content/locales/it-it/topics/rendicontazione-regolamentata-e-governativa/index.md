# Rendicontazione regolamentata e governativa

**La rendicontazione obbligatoria è un requisito fisso attorno al quale progettare: costruitela a partire dalle stesse registrazioni che usate per gestire il servizio, tenete separata la vista di rendicontazione da quella di apprendimento e proteggete le persone che svolgono il lavoro da obiettivi che lo distorcono.**

## Panoramica e motivazione

Molte organizzazioni devono rendicontare sui propri servizi che lo vogliano o no. Le autorità di regolamentazione chiedono notifiche di incidenti, dati di disponibilità ed evidenze dei controlli. I governi richiedono alle amministrazioni di pubblicare dati sulle prestazioni, sulla spesa e dichiarazioni di accessibilità. I finanziatori e gli organismi di vigilanza chiedono risultati rispetto agli impegni assunti. I contratti richiedono rapporti sul servizio. In questi contesti la rendicontazione non è una scelta di gestione interna. È un obbligo con una scadenza, una definizione e talvolta una sanzione.

Il [settore pubblico](https://en.wikipedia.org/wiki/Public_sector) presenta caratteristiche particolari. La [responsabilità](https://en.wikipedia.org/wiki/Accountability) verso i cittadini e gli organi elettivi è un dovere fondamentale e si esercita attraverso audit, legislazione, [leggi sulla libertà di informazione](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country) e risultati pubblicati. Le pratiche di [governo aperto](https://en.wikipedia.org/wiki/Open_government) e di [dati aperti](https://en.wikipedia.org/wiki/Open_data) rendono le informazioni disponibili per il controllo e il riutilizzo. Le regole degli [appalti pubblici](https://en.wikipedia.org/wiki/Public_procurement) determinano che cosa si possa acquistare e come, e gli obblighi di [gestione documentale](https://en.wikipedia.org/wiki/Records_management) regolano per quanto tempo le informazioni sono conservate. Il [rapporto qualità-prezzo](https://en.wikipedia.org/wiki/Value_for_money) è un criterio comune di valutazione della spesa pubblica, e organismi indipendenti svolgono [audit di performance](https://en.wikipedia.org/wiki/Performance_audit) per esaminarlo. I dettagli differiscono per paese, livello di governo e settore, e questo argomento descrive la pratica di misurazione, non i requisiti di legge. Si rivolga ai colleghi dell'ufficio legale, della conformità e della gestione documentale.

Le organizzazioni regolamentate del settore privato, come quelle di finanza, sanità, energia e telecomunicazioni, condividono molte di queste caratteristiche. Affrontano obblighi di notifica degli incidenti, rendicontazione sulla resilienza e verifiche di vigilanza. Il filo comune è che qualcuno al di fuori del team di consegna definisce che cosa debba essere rendicontato e entro quando.

Sia la consegna continua sia la pratica ITIL hanno qualcosa da offrire. L'obiettivo agile di una collaborazione continua con le parti interessate si estende agli organismi di vigilanza, che sono parti interessate con esigenze legittime, e conversazioni precoci su ciò che richiedono possono prevenire rilavorazioni. L'abitudine agile di consegnare continuamente incrementi piccoli e funzionanti si adatta alla rendicontazione: i rapporti prodotti automaticamente dai sistemi di registrazione sono più accurati e meno costosi di quelli assemblati a mano ogni trimestre. La pratica ITIL di misurazione e rendicontazione e la sua gestione dei livelli di servizio forniscono il vocabolario per definire che cosa viene misurato e condiviso.

Gli obblighi di rendicontazione creano tre rischi ben noti.

- **Distorsione dovuta agli obiettivi.** Quando un dato riportato comporta una conseguenza, il lavoro si piega verso il dato. La letteratura sugli obiettivi nel settore pubblico, compresi gli scritti di John Seddon sul pensiero sistemico nel settore pubblico e l'analisi di Jerry Muller sulla fissazione per le metriche, descrive molti casi in cui raggiungere l'obiettivo e servire il pubblico divergevano. La salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) si applica con piena forza (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).
- **Due serie di numeri.** La definizione normativa di un dato spesso differisce da quella che il team usa internamente. Se il team gestisce secondo una e rendiconta un'altra, nessuno si fida di nessuna delle due. Mantenga visibili entrambe, le riconcili e spieghi le differenze.
- **La rendicontazione come onere.** Richieste manuali, ripetute e incoerenti consumano persone qualificate. Quanto più la rendicontazione dipende da un eroico lavoro su fogli di calcolo, tanto più si insinuano errori e ritardi.

Questo argomento si basa sulle misure di conformità, rischio e fornitori di questa parte (si vedano l'Argomento 8.2 «Metriche di rischio e controlli», l'Argomento 8.3 «Metriche di conformità e audit» e l'Argomento 8.4 «Metriche di fornitori e contratti») e sui fondamenti dei dati della prima parte (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»).

## Principi chiave

- **Trattare gli obblighi come input di progettazione.** Elencarli presto, con definizioni, scadenze e responsabili, e progettare attorno ad essi la raccolta dei dati.
- **Produrre i rapporti dai sistemi di registrazione.** Automatizzare l'estrazione e mantenere visibile la provenienza dei dati.
- **Separare la vista di rendicontazione dalla vista di apprendimento.** I team hanno bisogno di misure di lavoro franche, non vincolate da ciò che viene rendicontato.
- **Riconciliare le definizioni.** Mostrare come i dati normativi si relazionano alle misure proprie del team.
- **Rendicontare con onestà, comprese le cattive notizie.** Correzioni e contesto costruiscono fiducia.
- **Proteggere le persone da obiettivi perversi.** Usare obiettivi normativi con misure di accompagnamento e spiegarne i limiti.
- **Rendere utilizzabili i dati pubblicati.** Accessibilità, chiarezza e formato contano per il pubblico.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Copertura degli obblighi di rendicontazione | Quota di obblighi di rendicontazione con un responsabile nominato, una definizione dichiarata, una fonte dei dati e una voce di calendario | obblighi con tutti e quattro gli elementi / obblighi di rendicontazione nel perimetro | percentuale | Registro degli obblighi | Misurazione e rendicontazione; governance | Accordo di lavoro con le parti interessate sulle esigenze informative | Trimestrale |
| Puntualità dei rapporti | Quota di rapporti richiesti presentati entro la scadenza | rapporti presentati entro la scadenza o prima / rapporti in scadenza nel periodo | percentuale | Calendario della rendicontazione e registrazioni di presentazione | Misurazione e rendicontazione | Impegni verso le parti interessate rispettati | Mensile |
| Tasso di rettifica | Quota di rapporti o dati presentati e poi corretti | rapporti o dati corretti dopo la presentazione / rapporti o dati presentati | percentuale | Registro delle presentazioni e registro delle correzioni | Misurazione e rendicontazione; miglioramento continuo | Difetti sfuggiti | Trimestrale |
| Copertura della tracciabilità | Quota di dati riportati che possono essere ricondotti a un sistema di registrazione attraverso passaggi documentati | dati con provenienza documentata fino a un sistema di registrazione / dati riportati | percentuale | Documentazione della provenienza, specifiche dei rapporti | Misurazione e rendicontazione; gestione della conoscenza | Build riproducibili | Trimestrale |
| Allineamento delle definizioni | Quota di misure riportate per cui la definizione normativa e quella interna sono documentate e riconciliate | misure con riconciliazione documentata / misure riportate con una definizione normativa | percentuale | Registro delle metriche | Misurazione e rendicontazione; gestione dei livelli di servizio | Definizione condivisa di completato | Trimestrale |
| Impegno di rendicontazione | Ore-persona impiegate per produrre un rapporto ricorrente | ore registrate per ciclo di rendicontazione, con la quota di estrazione e assemblaggio manuali | ore | Stime dei tempi, registri dell'impegno | Misurazione e rendicontazione; miglioramento continuo | Costo del lavoro non di consegna | Per ciclo di rendicontazione |
| Conformità di accessibilità delle pubblicazioni | Quota di rapporti e insiemi di dati pubblicati che soddisfano lo standard di accessibilità richiesto | elementi pubblicati che superano una verifica di accessibilità / elementi pubblicati | percentuale | Risultati dei test di accessibilità | Misurazione e rendicontazione; gestione della conoscenza | Definizione di completato inclusiva | Trimestrale |

Scriva la definizione normativa, la fonte e la scadenza accanto a ogni misura riportata. Un rapporto è «puntuale» quando è accettato dall'ente ricevente, non quando è inviato, se l'accettazione è registrata. Una rettifica conta qualsiasi correzione a un dato già presentato, volontaria o richiesta. L'impegno di rendicontazione è una misura di tendenza per l'organizzazione e mai una misura delle singole persone. La conformità di accessibilità è verificata rispetto allo standard che si applica al Suo caso, come le Web Content Accessibility Guidelines.

## Raccomandazioni

### Trattare gli obblighi come input di progettazione

**1. Mantenere un registro degli obblighi di rendicontazione.** Per ciascuno, registri il requisito, la fonte legale o contrattuale, che cosa deve essere riportato, la definizione, la scadenza, l'ente ricevente, il responsabile interno e la fonte dei dati. Lo riveda quando cambiano leggi, contratti o autorità di regolamentazione. Gli obblighi noti in anticipo possono essere progettati, quelli scoperti tardi devono essere assemblati a mano.

**2. Coinvolgere presto l'organismo di vigilanza.** Chieda alle autorità di regolamentazione, agli auditor e ai finanziatori che cosa faranno con i dati e di che cosa abbiano bisogno. Alcuni La aiuteranno a dare forma a una definizione o accetteranno dati in una forma che già produce. La pratica agile valorizza la collaborazione con le parti interessate, e gli organismi di vigilanza sono parti interessate. Conservi traccia di queste conversazioni e preservi l'indipendenza dove conta.

**3. Progettare fin dall'inizio la raccolta dei dati per la rendicontazione.** Quando costruisce un servizio, includa gli eventi e i campi di cui avranno bisogno i rapporti richiesti: marche temporali degli incidenti, impatto, categorie, numero di utenti. Aggiungerli in seguito è costoso. Li definisca una sola volta e condivida la definizione tra i team, con un unico responsabile della definizione (si veda l'Argomento 1.4 «Governance e responsabilità delle metriche»).

### Produrre i rapporti dai sistemi di registrazione

**4. Automatizzare la pipeline dalla registrazione al rapporto.** Estragga dai sistemi di incidenti, modifiche e servizi con interrogazioni scriptate, applichi trasformazioni documentate e produca il rapporto con un modello rivisto. I rapporti automatizzati sono ripetibili, più rapidi e più facili da sottoporre ad audit rispetto a quelli manuali. Versioni le interrogazioni e i modelli in modo da poter riprodurre un rapporto passato.

**5. Documentare la provenienza dei dati.** Per ogni dato riportato, annoti da dove proviene, come è calcolato e chi lo verifica. La copertura della tracciabilità misura quanto bene ciò sia fatto. Un auditor o un giornalista che chieda «da dove viene questo numero?» dovrebbe ricevere una risposta chiara in pochi minuti.

**6. Rivedere prima della presentazione, con un lettore indipendente.** Faccia verificare definizioni, aritmetica e narrazione da qualcuno esterno al team che ha prodotto il rapporto. Le revisioni individuano errori e affermazioni non supportate. Registri la revisione. Un breve benestare della persona responsabile rende chiara la titolarità.

**7. Correggere apertamente.** Quando si trova un errore dopo la presentazione, lo corregga prontamente, spieghi che cosa è cambiato e annoti la causa. Un tasso di rettifica vicino a zero è sospetto se i dati sono complessi. Una correzione visibile e rapida costruisce più fiducia di un dato lasciato com'è.

### Tenere separate rendicontazione e apprendimento

**8. Mantenere una vista di lavoro per il team.** I team hanno bisogno di misure che li aiutino a migliorare, come percentili, l'età degli elementi più vecchi e misure di qualità di accompagnamento. Queste raramente coincidono con i dati normativi. Non limiti la vista di lavoro a ciò che viene riportato e non gestisca basandosi unicamente sul dato riportato.

**9. Riconciliare le definizioni normative e quelle interne.** Dove una misura richiesta differisce da quella del team, documenti le differenze e mostri entrambe. Per esempio, il dato di disponibilità di un'autorità di regolamentazione può escludere la manutenzione pianificata, mentre gli utenti la sperimentano come indisponibilità. Mostri la riconciliazione nel registro delle metriche e nelle note del rapporto. Ciò protegge dal problema delle «due serie di numeri».

**10. Abbinare gli obiettivi normativi a misure di accompagnamento.** Se un obiettivo è imposto, aggiunga misure che rivelerebbero la distorsione: qualità, esperienza degli utenti e il lavoro lasciato fuori. Per esempio, abbini un obiettivo sul tempo di prima risposta a una misura della risoluzione e dei contatti ripetuti (si veda l'Argomento 3.1 «Metriche del service desk»). Spieghi nel rapporto come il dato debba essere letto.

### Pubblicare per il pubblico

**11. Rendere utilizzabili le informazioni pubblicate.** Pubblichi in formati aperti e leggibili da macchina dove la legge e la privacy lo permettono, con descrizioni, definizioni e date chiare. Rispetti gli standard di accessibilità per documenti e pagine web. Pubblicare dati in un modo che le persone non possono leggere o riutilizzare soddisfa la lettera e vanifica lo scopo. Verifichi con utenti reali, compresi quelli che usano tecnologie assistive (si veda l'Argomento 6.4 «Esperienza degli utenti e dei dipendenti»).

**12. Proteggere privacy e sicurezza in ciò che si pubblica.** Aggreghi e sopprima i numeri piccoli che potrebbero identificare persone, eviti di pubblicare dettagli che aiutano gli attaccanti e verifichi le regole di divulgazione con specialisti. Applichi la stessa cura alle risposte nell'ambito delle leggi sulla libertà di informazione. Registri le decisioni sull'oscuramento e le relative ragioni.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Copertura degli obblighi di rendicontazione | Trattare gli obblighi in modo restrittivo; elencare il responsabile senza accordo | Revisione del registro da parte della conformità o dell'audit interno; conferma dei responsabili |
| Puntualità dei rapporti | Presentare rapporti incompleti per rispettare la data; contare le bozze come presentazioni | Verifica di completezza alla presentazione; contare solo i rapporti accettati; tasso di rettifica |
| Tasso di rettifica | Sopprimere le correzioni; fare le correzioni in silenzio | Registro delle correzioni rivisto da un lettore indipendente; un tasso basso è letto insieme alla tracciabilità |
| Copertura della tracciabilità | Documentare la provenienza in modo superficiale; includere solo dati semplici | Campionare la provenienza rieseguendo un calcolo a partire dalla fonte |
| Allineamento delle definizioni | Dichiarare allineate le definizioni senza riconciliazione; adottare la definizione normativa solo nel rapporto | Documento di riconciliazione rivisto; mostrare entrambi i dati affiancati |
| Impegno di rendicontazione | Non registrare le ore; spostare il lavoro ad altri team | Confronto con il feedback dei team; includere tutti i contributori nella stima |
| Conformità di accessibilità delle pubblicazioni | Usare un verificatore che trova solo alcuni problemi; pubblicare una versione accessibile separata che resta indietro | Test manuali con tecnologie assistive; verifica della parità tra le versioni |

Una lettura sana comprende ogni obbligo assegnato, rapporti puntuali e accurati con correzioni visibili, dati riconducibili ai sistemi di registrazione, definizioni normative e interne riconciliate, impegno di rendicontazione in calo e informazioni pubblicate che il pubblico può utilizzare.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Assemblaggio manuale dei rapporti | Flessibile; funziona con qualsiasi dato | Lento, soggetto a errori, dipendente dalle persone |
| Rendicontazione automatizzata | Ripetibile, verificabile, economica da gestire | Impegno di avvio; può cristallizzare una definizione scadente |
| Una sola serie di misure per tutto | Semplice | Distorce il lavoro; i dati normativi raramente si adattano alle esigenze del team |
| Viste di rendicontazione e di apprendimento separate | Apprendimento franco; rendicontazione onesta | Richiede riconciliazione e disciplina |
| Obiettivi normativi rigidi | Responsabilità chiara | Effetti perversi; manipolazione |
| Obiettivi con misure di accompagnamento e contesto | Rivela la distorsione | Più da spiegare |
| Coinvolgimento precoce delle autorità di regolamentazione | Meno sorprese | Tempo; confini da mantenere |
| Solo rapporto a distanza | Indipendenza chiara | Feedback tardivo; rilavorazioni |

La risposta in sintesi è automatizzare i rapporti dai sistemi di registrazione, mantenere una vista di lavoro del team separata dalla vista di rendicontazione, riconciliare apertamente le definizioni e coinvolgere presto gli organismi di vigilanza preservandone l'indipendenza.

## Domande da discutere con il team

**1. Quali rapporti dobbiamo, a chi e entro quando, e chi è responsabile di ciascuno?**
Compilate l'elenco in sala e lo confrontate con il registro. Spesso emergono lacune: rapporti dovuti in base a contratti, a finanziatori o a regole che poche persone conoscono. Il facilitatore dovrebbe registrare le nuove voci e assegnare i responsabili.

**2. Quale dato riportato gestiremmo diversamente se non fosse riportato?**
Scelga una misura normativa o contrattuale e chieda che cosa farebbe il team se nessuno la misurasse. La risposta rivela dove il dato e lo scopo divergono. Discutete quale misura di accompagnamento mostrerebbe la differenza.

**3. Possiamo oggi riprodurre dalla fonte il rapporto dello scorso trimestre?**
Provi con un rapporto. Annoti ciò che è manuale, non documentato o perduto. Concordate il primo passo per automatizzare o documentare e chi lo farà.

**4. Come gestiamo un errore scoperto dopo la presentazione?**
Rivedete il processo e l'ultimo esempio. La correzione è stata rapida e aperta? Qualcuno ha avuto timore di sollevarla? Concordate che cosa renda normale la correzione.

**5. Che cosa sperimenterebbe una persona che usa una tecnologia assistiva leggendo il nostro rapporto pubblicato?**
Verificate insieme un elemento pubblicato, oppure rivedete una recente verifica di accessibilità. Chieda chi sia responsabile dell'accessibilità dei documenti pubblicati. Concordate una correzione e un processo per prevenirne la ripetizione.

**6. Che cosa fa effettivamente l'autorità di regolamentazione o l'organismo di vigilanza con i nostri dati?**
Molti team non lo sanno. Pianifichi una conversazione per scoprirlo e per chiedere se una forma diversa servirebbe altrettanto bene. Il facilitatore dovrebbe annotare i confini dell'indipendenza.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna costruiscono gli eventi e i campi da cui i rapporti dipendono e sentono la pressione degli obiettivi normativi. Dovrebbero includere le esigenze di rendicontazione nella definizione di completato, mantenere una vista di lavoro franca e segnalare quando un obiettivo distorce il lavoro. Conversazioni precoci con chi rendiconta aiutano a prevenire rilavorazioni.

### Team di servizio e operations

I team di operazioni generano la maggior parte dei dati sottostanti e spesso preparano i rapporti. Dovrebbero documentare la provenienza dei dati, automatizzare l'estrazione e mantenere un registro delle correzioni. Sono ben posizionati per spiegare come un dato debba essere letto e per avvertire quando induce in errore.

### Leadership e governance

I dirigenti sono responsabili dell'accuratezza e dell'onestà di ciò che viene riportato. Dovrebbero chiedere tracciabilità e riconciliazione, resistere alla tentazione di trasformare i dati normativi in obiettivi individuali, proteggere chi segnala errori e sostenere il dialogo con gli organismi di vigilanza. La governance dovrebbe rivedere il registro degli obblighi e la storia delle rettifiche.

### Clienti e utenti

Il pubblico e i clienti si affidano alle informazioni pubblicate per chiedere conto ai servizi. Hanno bisogno di dati che possano trovare, leggere e riutilizzare, in formati accessibili, con spiegazioni chiare del loro significato. Meritano anche una pronta notifica quando un incidente li riguarda, come le regole possono richiedere.

## In pratica: un esempio di ITIL agile

Un'agenzia nazionale fornisce servizi di rilascio di licenze online utilizzati da diversi milioni di persone ogni anno. Deve rendicontare mensilmente a un ministero, pubblicare dati annuali sulle prestazioni e notificare alla propria autorità di regolamentazione gli incidenti di servizio maggiori entro un termine fisso. I numeri seguenti sono illustrativi.

Una revisione interna rileva che l'agenzia deve 31 rapporti di diversi tipi e che solo 22 sono nel registro degli obblighi con un responsabile nominato e una definizione, una copertura del 71 percento. I dati mensili sono assemblati a mano in circa 60 ore, soprattutto estraendo da tre sistemi in un foglio di calcolo. La tracciabilità è scarsa: per il dato principale, la disponibilità, nessuno riesce a riprodurre il numero dell'anno scorso. La definizione di disponibilità del ministero esclude la manutenzione pianificata, mentre la vista di lavoro dell'agenzia la include, il che spiega perché utenti e ministero vedano quadri diversi. L'agenzia ha rispettato ogni mese l'obiettivo sul tempo di prima risposta, e il service desk ha iniziato a confermare automaticamente le richieste per raggiungerlo, mentre il tempo di risoluzione è salito. Due rapporti pubblicati non hanno superato un test di accessibilità verificati con uno screen reader.

Il responsabile delle prestazioni dei servizi dell'agenzia concorda i cambiamenti con il ministero e con i team di consegna e di operazioni. Il registro degli obblighi diventa completo, con responsabili, definizioni e date. I dati mensili provengono da interrogazioni scriptate dei sistemi di incidenti e di monitoraggio, con una trasformazione documentata e un modello rivisto, il che riduce l'impegno a circa 8 ore. Una nota di riconciliazione espone le definizioni normativa e interna di disponibilità, con entrambi i dati mostrati nel rapporto. L'obiettivo di prima risposta è abbinato al tempo di risoluzione e ai contatti ripetuti nella vista di lavoro, e il ministero accetta di vedere le misure di accompagnamento. L'agenzia corregge inoltre un dato di disponibilità del trimestre precedente, ne spiega la causa e pubblica la correzione. I rapporti pubblicati sono prodotti in un modello accessibile, e un test con screen reader viene aggiunto alla checklist di rilascio.

Un anno dopo, la copertura degli obblighi è del 100 percento, i rapporti sono puntuali, il tasso di rettifica è basso e ogni correzione è spiegata, la tracciabilità copre tutti i dati principali e l'impegno di rendicontazione è sceso di circa l'85 percento. L'ufficio del ministro chiede un nuovo obiettivo di disponibilità del 99,95 percento, con i dirigenti dell'agenzia responsabili. Il responsabile delle prestazioni dei servizi spiega la differenza tra il dato normativo e quello percepito dagli utenti e propone un obiettivo con misure di accompagnamento e una data di revisione. La decisione viene registrata e il ministero concorda una revisione congiunta della definizione prima del prossimo anno di rendicontazione.

## Lente di settore

**Startup.** Gli obblighi di rendicontazione possono arrivare con un primo cliente enterprise o con un'autorità di regolamentazione. Parta da un breve elenco di obblighi, produca i rapporti dai propri sistemi ed eviti di costruire un processo di rendicontazione separato. Faccia attenzione quando promette livelli di servizio nei contratti.

**Piccola impresa.** Gli obblighi sono spesso contrattuali o legati a una sola autorità di regolamentazione. Mantenga un calendario, usi modelli e documenti come sono prodotti i numeri. Un rapporto piccolo e accurato vale più di uno grande e frettoloso.

**Grande impresa.** Molti obblighi tra regioni e regimi richiedono un registro centrale, definizioni comuni e strumenti di estrazione condivisi. Si guardi dalle richieste duplicate agli stessi team. Utilizzi un'unica fonte di verità per i dati di incidenti e di servizio, con viste per ciascun regime.

**Governo e settore pubblico.** Questo è il terreno proprio dell'argomento. Pianifichi per la legislazione, le richieste ministeriali, gli audit, le richieste di libertà di informazione e il controllo pubblico. Pubblichi i dati apertamente dove la legge lo consente, rispetti gli obblighi di accessibilità, conservi i documenti per il periodo richiesto e documenti le decisioni. Resista alla tentazione di trasformare i dati normativi in obiettivi di prestazione individuali e consideri gli effetti degli obiettivi su cittadini e personale.

## Business case: motivazioni, ROI e TCO

I costi sono l'impegno per costruire e mantenere il registro degli obblighi, l'ingegneria dell'estrazione automatizzata e dei modelli, il tempo di revisione e i test di accessibilità. Rispetto all'assemblaggio manuale, l'automazione sposta l'impegno dal lavoro ripetuto a una costruzione una tantum e a una manutenzione leggera.

I ritorni sono meno errori e correzioni, meno tempo del personale speso nell'assemblaggio, risposte più rapide alle richieste degli organismi di vigilanza e maggiore fiducia da parte di autorità di regolamentazione e pubblico. Costruisca il caso a partire dai Suoi dati: ore per rapporto prima e dopo, numero ed effetto delle rettifiche, tempo per rispondere a una domanda di vigilanza e costo di eventuali sanzioni o rilievi di audit critici evitati. Eviti di citare stime dell'onere di conformità a meno che non possa risalire alla fonte e al metodo. Includa il costo del dialogo continuo con gli organismi di vigilanza e lo confronti con il costo delle sorprese (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Gestire solo in base al dato normativo.** Distorce il lavoro. Mantenga una vista di lavoro con misure di accompagnamento.
- **Due serie di numeri non riconciliate.** La fiducia crolla. Documenti e mostri le differenze.
- **Fogli di calcolo costruiti a mano come sistema.** Si rompono e dipendono dalle persone. Automatizzi a partire dai sistemi di registrazione.
- **Presentare rapporti incompleti per rispettare una data.** Scambia un fallimento con un altro. Concordi proroghe o presenti con avvertenze chiare.
- **Correzioni silenziose.** Minano la fiducia. Corregga apertamente e spieghi.
- **Obiettivi individuali ricavati da dati normativi.** Premiano la manipolazione e puniscono il personale onesto. Mantenga i dati a livello di servizio.
- **Pubblicazioni illeggibili.** La conformità nella forma vanifica lo scopo. Pubblichi dati utilizzabili e accessibili.
- **Ignorare la privacy nella pubblicazione.** I numeri piccoli possono identificare le persone. Aggreghi e riveda la divulgazione.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Obblighi e definizioni | Noti a poche persone | Elenco parziale | Registro con responsabili, definizioni e date; definizioni normative e interne riconciliate | Registro rivisto rispetto ai cambiamenti di legge; riconciliazione mantenuta | Definizioni sviluppate insieme agli organismi di vigilanza; condivise tra amministrazioni |
| Produzione e qualità | Assemblaggio manuale | Modelli, alcuni script | Automatizzata dai sistemi di registrazione con provenienza e revisione indipendente | Rettifiche analizzate; impegno e puntualità gestiti | Rapporti prodotti in modo continuo; gli organismi di vigilanza accedono direttamente ai dati |
| Uso e pubblicazione | Rapporto per soddisfare la richiesta | Pubblicato su richiesta | Vista di lavoro separata dalla vista di rendicontazione; pubblicazione accessibile e riutilizzabile | Misure di accompagnamento con obiettivi; test con utenti sulle pubblicazioni | Dati aperti e collegati con partecipazione del pubblico alla progettazione |

## Checklist

- [ ] Un registro elenca ogni obbligo di rendicontazione con responsabile, definizione, fonte, scadenza ed ente ricevente.
- [ ] I campi e gli eventi richiesti sono incorporati nei servizi fin dall'inizio.
- [ ] I rapporti sono prodotti dai sistemi di registrazione con interrogazioni e modelli versionati.
- [ ] Ogni dato riportato ha una provenienza documentata e un verificatore nominato.
- [ ] Un lettore indipendente rivede i rapporti prima della presentazione.
- [ ] Le definizioni normative e interne sono riconciliate ed entrambe sono mostrate.
- [ ] Le correzioni sono registrate, spiegate e pubblicate prontamente.
- [ ] Gli obiettivi normativi hanno misure di accompagnamento e contesto nel rapporto.
- [ ] I rapporti e gli insiemi di dati pubblicati soddisfano lo standard di accessibilità applicabile e la revisione sulla privacy.
- [ ] Una conversazione con ciascun organismo di vigilanza principale sulle sue esigenze è in calendario.

## Prompt IA

**Costruire un registro degli obblighi.**

```text
Ecco un elenco di rapporti, notifiche e pubblicazioni che riteniamo di dover
produrre: [incollare con le fonti, in linguaggio semplice]. Strutturali in un
registro con campi per requisito, fonte, definizione, fonte dei dati, scadenza,
ente ricevente e ruolo del responsabile. Segnala le informazioni mancanti e gli
obblighi che sembrano duplicati tra i team. Non fornire conclusioni legali.
Elenca le tue ipotesi e le domande per l'ufficio legale e la conformità.
```

**Riconciliare due definizioni.**

```text
La definizione normativa di [misura] è: [testo]. La nostra definizione interna
è: [testo]. I nostri campi di dati sono: [elencare]. Spiega le differenze,
descrivi come ciascuna influisca sul numero, suggerisci come mostrare entrambe in
un rapporto e proponi una breve nota che spieghi la differenza ai lettori. Non
presumere fatti non forniti. Elenca le tue ipotesi.
```

**Pianificare l'automazione di un rapporto.**

```text
Produciamo [rapporto] ogni mese con questi passaggi manuali e queste fonti:
[elencare con le ore]. Proponi un piano per automatizzarlo a partire dai sistemi
di registrazione, comprendente interrogazioni documentate, una fase di
trasformazione, note sulla provenienza, revisione e riproducibilità dei rapporti
passati. Suggerisci che cosa mantenere manuale e perché. Non presumere strumenti
specifici. Elenca le tue ipotesi e i rischi.
```

**Rivedere l'usabilità di un rapporto pubblicato.**

```text
Ecco la struttura testuale di un rapporto che intendiamo pubblicare: [incollare
titoli e tabelle di esempio, senza contenuti sensibili]. Rivedilo per
linguaggio semplice, definizioni, contesto dei dati, accessibilità di tabelle e
grafici e rischi per la privacy derivanti da numeri piccoli. Suggerisci
miglioramenti. Ricordami di verificare con tecnologie assistive e di controllare
le regole di divulgazione con specialisti. Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di rendicontazione normativa o regolamentata.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una voce di metrica di rendicontazione riporti la propria definizione, la riconciliazione, il vettore di manipolazione e la salvaguardia.

## Punti chiave

- Tratti gli obblighi di rendicontazione come input di progettazione, elencati con responsabili, definizioni e scadenze.
- Produca i rapporti dai sistemi di registrazione con provenienza dei dati e revisione indipendente.
- Mantenga una vista di lavoro franca separata dalla vista di rendicontazione e riconcili apertamente le definizioni.
- Abbini gli obiettivi normativi a misure di accompagnamento e non li trasformi mai in obiettivi individuali.
- Corregga gli errori apertamente e con rapidità.
- Pubblichi informazioni che il pubblico possa trovare, leggere e riutilizzare, con la privacy protetta.

## Riferimenti e letture di approfondimento

1. Seddon, J., *Systems Thinking in the Public Sector*, Triarchy Press, 2008.
2. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
3. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
4. European Parliament and Council, *Directive (EU) 2016/2102 on the accessibility of the websites and mobile applications of public sector bodies*, 2016.
5. Government Digital Service, *Service Standard*, United Kingdom, https://www.gov.uk/service-manual/service-standard.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Public sector](https://en.wikipedia.org/wiki/Public_sector).
9. Wikipedia, [Accountability](https://en.wikipedia.org/wiki/Accountability).
10. Wikipedia, [Freedom of information laws by country](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country).
11. Wikipedia, [Open government](https://en.wikipedia.org/wiki/Open_government).
12. Wikipedia, [Open data](https://en.wikipedia.org/wiki/Open_data).
13. Wikipedia, [Public procurement](https://en.wikipedia.org/wiki/Public_procurement).
14. Wikipedia, [Records management](https://en.wikipedia.org/wiki/Records_management).
15. Wikipedia, [Value for money](https://en.wikipedia.org/wiki/Value_for_money).
16. Wikipedia, [Performance audit](https://en.wikipedia.org/wiki/Performance_audit).
17. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
