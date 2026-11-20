# Framework di misurazione

**Un framework di misurazione è un modo per decidere quali numeri meritano un posto nella pagina, e i migliori partono tutti da un obiettivo e da una domanda: si scelga il framework più leggero che mantenga ogni metrica legata a una decisione.**

## Panoramica e motivazione

Un team che vuole misurare il proprio lavoro incontra subito un problema: esistono migliaia di numeri possibili e nessuna regola per sceglierli. Un framework di misurazione fornisce la regola. Indica un punto di partenza (un obiettivo, una strategia, una manciata di condizioni critiche) e descrive come passare da quel punto di partenza a un piccolo insieme di misure che le persone leggeranno e su cui agiranno. I framework differiscono nel vocabolario, ma condividono un unico scopo: mantenere ogni numero collegato a una ragione per averlo.

Questo argomento tratta cinque idee che compaiono in quasi tutte le organizzazioni che erogano servizi. La prima è l'approccio Goal-Question-Metric (GQM), sviluppato dal ricercatore di ingegneria del software [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili) e colleghi. Parte da un obiettivo, pone le domande che mostrerebbero se l'obiettivo viene raggiunto e solo allora sceglie le metriche. La seconda è costituita da [obiettivi e risultati chiave](https://en.wikipedia.org/wiki/OKR) (OKR), un metodo di definizione degli obiettivi reso popolare in Intel da Andrew Grove e poi in Google da John Doerr. Un obiettivo dice dove un team vuole andare, e una manciata di risultati chiave dice come saprà di essere arrivato. La terza è la [balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard), introdotta da Robert Kaplan e David Norton nel 1992, che chiede alle organizzazioni di guardare insieme ai risultati finanziari, ai clienti, ai processi interni e all'apprendimento e alla crescita, in modo che nessuna visione domini da sola.

La quarta e la quinta idea sono più antiche e più semplici. Un [fattore critico di successo](https://en.wikipedia.org/wiki/Critical_success_factor) (CSF) è una condizione che deve essere vera perché un obiettivo sia raggiunto, e un [indicatore chiave di prestazione](https://en.wikipedia.org/wiki/Key_performance_indicator) (KPI) è una misura di quanto bene quella condizione regga. ITIL, il framework per la gestione dei servizi IT (ITSM) pubblicato da Axelos e poi da PeopleCert, usa esattamente questo abbinamento. In ITIL 4 (la versione di uso diffuso a ottobre 2026), le indicazioni sulla misurazione e la rendicontazione e sul miglioramento continuo dicono ai professionisti di definire i CSF per un servizio o una pratica, poi di scegliere i KPI che mostrano i progressi rispetto ad essi. L'approccio più ampio di [ITIL](https://en.wikipedia.org/wiki/ITIL) è qui riassunto, non riprodotto.

Le visioni agile e ITIL si incontrano in modo utile in quest'area. La pratica agile privilegia brevi cicli di apprendimento: un team enuncia un'ipotesi, prova qualcosa, ispeziona il risultato e si adegua. La pratica ITIL privilegia servizi definiti, livelli di servizio concordati e un processo gestito di miglioramento. Un framework come GQM si adatta all'abitudine agile di chiedersi che cosa il team voglia imparare. Una balanced scorecard si adatta all'esigenza ITIL di mostrare ai dirigenti un quadro completo della salute del servizio. Gli OKR stanno tra i due, perché vengono rivisti in cicli brevi ma sono scritti nel linguaggio dei risultati che gli organi di governance comprendono.

Tre termini ricorrono in questo argomento. Un **obiettivo** (goal) è un'enunciazione di un risultato voluto per un pubblico nominato. Una **domanda** (question) è qualcosa che si avrebbe bisogno di sapere per dire se l'obiettivo viene raggiunto. Una **metrica** (metric) è un modo definito di contare o cronometrare qualcosa che aiuta a rispondere a una domanda. I framework differiscono nel trattamento del terzo termine, ma tutti insistono che arrivi per ultimo, dopo l'obiettivo e la domanda. Questo ordine è la protezione più forte contro il fallimento descritto dalla legge di Goodhart (vedi Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»), in cui un numero sostituisce lo scopo che doveva servire.

Nessun framework corregge una cattiva scelta dell'obiettivo, e nessuno elimina il bisogno di salvaguardie. Si tratti un framework come un'impalcatura per una conversazione e ci si aspetti di cambiarlo al mutare del lavoro. I KPI in particolare possono diventare [metriche di vanità](https://en.wikipedia.org/wiki/Vanity_metric), conteggi che salgono soltanto e non orientano mai una decisione, come il totale dei ticket gestiti. Le ragioni più ampie per misurare sono esposte altrove (vedi Argomento 1.1 «Perché misurare l'ITIL agile»).

### Come differiscono i framework

I framework rispondono a domande leggermente diverse, ed è comune combinarli. Si usi la tabella seguente come mappa.

| Framework | Punto di partenza | Prodotto tipico | Uso migliore | Orizzonte tipico |
| --- | --- | --- | --- | --- |
| Goal-Question-Metric | Un obiettivo specifico per un prodotto, un processo o un servizio | Un albero di obiettivi, domande e metriche | Progettare un programma di misurazione per un team o un servizio | Da settimane a mesi |
| OKR | Un obiettivo ambizioso per il periodo successivo | Pochi obiettivi, ciascuno con risultati chiave misurabili | Allineare i team sui risultati e concentrare lo sforzo | Trimestre |
| Balanced scorecard | La strategia di un'organizzazione | Obiettivi e misure in quattro prospettive | Mostrare ai dirigenti una visione completa e collegare strategia e operazioni | Anno |
| CSF e KPI | Un servizio, una pratica o un obiettivo | Poche condizioni che devono valere, ciascuna con indicatori | Gestire una pratica ITIL definita e rendicontarne la salute | Continuo, rivisto regolarmente |

## Principi chiave

- **Partire dall'obiettivo, poi la domanda, poi la metrica.** Una metrica scelta per prima non ha modo di essere giudicata utile.
- **Rendere esplicite il pubblico e la decisione.** Ogni obiettivo nomina chi ne beneficia, e ogni metrica nomina chi agirà su di essa.
- **Mantenere ridotto l'insieme.** Poche misure lette e considerate affidabili valgono più di un lungo elenco scorso di sfuggita.
- **Bilanciare la visione.** Si abbinino velocità e qualità, costo ed esperienza, produzione a breve termine e apprendimento a lungo termine, in modo che nessun framework premi una a scapito dell'altra.
- **Trattare gli obiettivi come ipotesi.** Un obiettivo e i suoi numeri sono una scommessa che può essere sbagliata, perciò li si riveda secondo una pianificazione e li si cambi con una motivazione registrata.
- **Usare i framework per descrivere team e servizi, mai per classificare le persone.** Scorecard, risultati chiave e KPI appartengono a un team o a un servizio.
- **Combinare i framework di proposito.** Si dica quale framework possiede quale decisione, così che lo stesso numero non sia definito in tre modi.

## Definizioni delle metriche

Le metriche seguenti misurano la salute di un framework in uso, non la salute di un servizio. Mostrano se obiettivi e metriche sono ancora collegati e si applicano qualunque framework un team scelga. I conteggi sono per team o servizio, mai per persona.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tracciabilità degli obiettivi | Quota delle metriche rendicontate che risalgono a un obiettivo e a una domanda scritti | metriche con un obiettivo e una domanda registrati / metriche rendicontate | percentuale | Registro delle metriche (vedi Argomento 1.4 «Governance e responsabilità delle metriche») | Misurazione e rendicontazione; miglioramento continuo | Obiettivo di consegna; obiettivo di prodotto | Trimestrale |
| Distribuzione dei punteggi dei risultati chiave | Dispersione dei punteggi di fine periodo dei risultati chiave, mostrata come quota in ciascuna fascia | risultati chiave in ciascuna fascia di punteggio (per esempio da 0,0 a 0,3, da 0,4 a 0,6, da 0,7 a 1,0) / risultati chiave valutati nel periodo; esclude i risultati chiave abbandonati con una motivazione registrata | percentuale per fascia | Strumento di tracciamento degli OKR o documento del team | Miglioramento continuo; gestione dei livelli di servizio | Pianificazione trimestrale; revisione | Trimestrale |
| Copertura delle prospettive | Quota delle quattro prospettive della balanced scorecard che hanno almeno una misura con un valore attuale | prospettive con una misura rendicontata nell'ultimo periodo / quattro | percentuale | Scorecard o dashboard | Misurazione e rendicontazione; governance del sistema di valore del servizio | Revisione con gli stakeholder (viste del cliente e dell'apprendimento) | Trimestrale |
| Età della revisione degli indicatori | Tempo trascorso dall'ultima revisione della definizione e dell'obiettivo di ciascun KPI | data della revisione meno la data dell'ultima revisione; il cronometro parte dall'ultima revisione registrata e si ferma alla data di rendicontazione; si riportino la mediana e il più vecchio | giorni | Registro delle modifiche del registro delle metriche | Miglioramento continuo; misurazione e rendicontazione | Azioni di retrospettiva | Trimestrale |
| Copertura CSF-KPI | Quota dei fattori critici di successo con almeno un KPI attualmente rendicontato | CSF con un KPI attuale / CSF definiti per il servizio o la pratica | percentuale | Documentazione della pratica o del servizio; registro delle metriche | L'approccio CSF e KPI nelle guide alle pratiche ITIL | Definition of done; accordi di lavoro | Trimestrale |

La tracciabilità degli obiettivi considera una metrica tracciata solo se sono scritti sia l'obiettivo sia la domanda ed è nominato il pubblico; un obiettivo da solo non basta. La distribuzione dei punteggi dei risultati chiave va letta come una dispersione, non come una media, perché una media nasconde un team che ha sottostimato tutto e un team che ha fallito tutto. L'età della revisione degli indicatori esclude le metriche ritirate nel periodo.

## Raccomandazioni

### Scegliere e combinare i framework

**1. Scegliere il framework più piccolo che svolga il compito.** Un singolo team di servizio con un problema di miglioramento raramente ha bisogno di una balanced scorecard completa. GQM è spesso sufficiente, perché ha un chiaro punto di arresto: un albero con un obiettivo, alcune domande e alcune metriche. Si aggiunga struttura solo quando una decisione la richiede.

**2. Scrivere gli obiettivi in tre parti: scopo, oggetto e punto di vista.** Gli obiettivi GQM sono tradizionalmente formulati come il miglioramento di una qualità dichiarata di un oggetto dichiarato da un punto di vista dichiarato, per esempio migliorare la chiarezza degli aggiornamenti sugli incidenti per le persone che dipendono dal service desk. La struttura costringe a dire chi ne beneficia. Se un obiettivo non ha un punto di vista, probabilmente è uno slogan.

**3. Porre domande a cui una persona potrebbe rispondere con una breve storia.** «Quanto rapidamente gli utenti ricevono risposta dopo aver segnalato un problema?» è una buona domanda, perché si può immaginare una risposta e le evidenze che la sostengono. «Qual è la nostra prestazione?» non lo è. Si miri a tre-cinque domande per obiettivo e ci si aspetti che ad alcune si risponda con interviste o campioni, non con un numero.

**4. Scegliere le metriche per ultime, e sceglierne più d'una.** Per ogni domanda, si nominino le metriche candidate, la fonte dei dati e il vettore di manipolazione (vedi Argomento 1.5 «Fonti dei dati e strumentazione»). Si includa almeno una metrica in tensione con le altre, come il tempo di risposta accanto al tasso di riapertura. Se una domanda non ha una metrica praticabile, lo si dica e si pianifichi un controllo qualitativo.

**5. Decidere quale framework possiede quale decisione.** Una disposizione comune è che la balanced scorecard o un equivalente contenga le poche misure che i dirigenti rivedono, che gli OKR contengano i miglioramenti che un team ha scelto in questo trimestre e che CSF e KPI descrivano la salute corrente di una pratica. Si scriva questa disposizione nel registro delle metriche, così che ogni numero abbia una sola definizione e un solo responsabile.

### Usare bene gli OKR

**6. Scrivere gli obiettivi come risultati e i risultati chiave come evidenze.** Un obiettivo come «Gli utenti vedono risolti i propri problemi senza doverci inseguire» è un risultato. Un risultato chiave come «il tempo mediano per un primo aggiornamento utile scende da [valore attuale] a [valore obiettivo]» è un'evidenza. I risultati chiave che si leggono come compiti («lanciare un nuovo portale») sono attività, non risultati. Se non si sa dire che cosa cambierebbe per un utente, il risultato chiave non è finito.

**7. Mantenere gli OKR a livello di team e di servizio.** Definirli per le singole persone tende a trasformarli in elenchi di compiti e in input per le valutazioni individuali, e invita alla manipolazione che la legge di Goodhart prevede. Si lasci che un team scriva apertamente i propri risultati chiave e che i team vedano quelli degli altri. Si evitino le cascate in cui ogni livello deve riformulare il livello superiore.

**8. Trattare il punteggio come una conversazione, non come un voto.** I team che trattano un punteggio perfetto come l'obiettivo scrivono risultati chiave timidi. Una distribuzione dei punteggi concentrata in alto suggerisce sottostima, e una concentrata in basso suggerisce che gli obiettivi erano fantasia. Si riveda la dispersione ogni trimestre e ci si chieda che cosa il team abbia imparato da ogni mancato risultato.

### Usare bene scorecard, CSF e KPI

**9. Definire i CSF prima dei KPI.** Un fattore critico di successo è un'enunciazione di ciò che deve essere vero, come «gli utenti possono trovare e usare l'articolo di self-service giusto». Un KPI mostra poi se è vero. Iniziare dal KPI invita a contare ciò che è facile contare. Per ogni CSF ci si chieda: «se questo smettesse di essere vero, con quale rapidità ce ne accorgeremmo, e da che cosa?» La risposta è il KPI.

**10. Usare le prospettive della scorecard per prevenire una visione unilaterale.** Le quattro prospettive classiche sono finanziaria, cliente, processi interni, apprendimento e crescita. Le organizzazioni di servizio spesso le rinominano, per esempio costo, esperienza degli utenti, salute operativa e capacità. Ciò che conta è che ciascuna prospettiva abbia almeno una misura con un valore attuale e che un calo in una sia letto accanto alle altre (vedi Argomento 6.5 «Realizzazione del valore e risultati di business»).

**11. Collegare strategia e misure con una mappa semplice.** Una [mappa strategica](https://en.wikipedia.org/wiki/Strategy_map) traccia frecce dalla capacità al processo, al cliente, ai risultati finanziari. È utile per la conversazione e scadente come calcolatrice. La si disegni, si discuta sulle frecce e poi si scelgano poche misure. Non si cerchi di rendere il diagramma quantitativamente esatto.

**12. Rivedere i framework in calendario.** Si fissi una revisione trimestrale in cui il team si chiede, per ogni obiettivo, risultato chiave e KPI, se conti ancora e se spinga ancora le persone all'azione giusta. Si ritiri ciò che non serve più e se ne registri la motivazione. Le metriche che sopravvivono ai propri obiettivi diventano metriche di vanità.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tracciabilità degli obiettivi | Scrivere un obiettivo e una domanda dopo che la metrica esiste già, per far apparire completo il registro; obiettivi vaghi che giustificano qualsiasi metrica | Campionare cinque voci ogni trimestre e chiedersi se la domanda avrebbe potuto portare a una metrica diversa; verificare che pubblico e decisione siano nominati |
| Distribuzione dei punteggi dei risultati chiave | Scrivere risultati chiave facili in modo che i punteggi si concentrino vicino a 1,0; rivalutare con generosità; abbandonare i risultati chiave che vanno male senza registrarne il motivo | Conteggio dei risultati chiave abbandonati con le loro motivazioni; confronto dei risultati chiave con i risultati del periodo precedente; revisione dell'ambizione mediana con la direzione |
| Copertura delle prospettive | Aggiungere una misura simbolica a una prospettiva perché conti come coperta; scegliere misure che non possono muoversi | Verificare che ogni misura di prospettiva abbia cambiato valore nell'ultimo anno e abbia una decisione scritta collegata |
| Età della revisione degli indicatori | Registrare una revisione senza leggere l'indicatore; cambiare solo la data | Richiedere un esito scritto (mantenuto, modificato, ritirato) con ogni revisione e campionare il registro |
| Copertura CSF-KPI | Assegnare un KPI non correlato al CSF per raggiungere la copertura piena; scegliere un KPI che non può rivelare un fallimento | Chiedere per ogni coppia quale lettura mostrerebbe che il CSF sta fallendo; cercare i KPI che non sono mai stati rossi |

Una lettura sana è quella in cui gli obiettivi cambiano quando il mondo cambia, alcuni risultati chiave vengono mancati per ragioni dichiarate e il numero di metriche rendicontate cala o resta stabile anziché crescere. Se tutto è verde, i punteggi si concentrano in alto e nessuno sa nominare una metrica ritirata quest'anno, il framework è diventato decorazione.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Goal-Question-Metric | Lega ogni metrica a una ragione; facile da spiegare; funziona su scala di team | Richiede una sessione facilitata; può diventare un esercizio cartaceo; dice poco sulle priorità tra gli obiettivi |
| OKR | Concentra un trimestre su pochi risultati; visibili tra i team; si adattano a cicli di pianificazione brevi | È facile scrivere i risultati chiave come compiti; i punteggi possono essere manipolati; gli OKR individuali si confondono con la valutazione delle prestazioni |
| Balanced scorecard | Offre ai dirigenti una visione completa; collega strategia e operazioni | Pesante da mantenere; le prospettive possono diventare caselle da riempire; lenta a riflettere il cambiamento |
| CSF e KPI | Familiari nella pratica ITIL; adatti a rendicontare un servizio in esercizio | È facile scivolare in KPI di vanità; gli indicatori diventano obsoleti senza revisione |
| Nessun framework | Leggero e rapido per un team molto piccolo | Le metriche si accumulano senza una ragione; le discussioni su che cosa misurare si ripetono |
| Più framework insieme | Ogni decisione riceve lo strumento adatto | Definizioni duplicate; confusione su quale numero sia autorevole |

Si scelga il peso del framework in proporzione alla posta in gioco. Un piccolo servizio interno ha bisogno di un obiettivo, tre domande e poche metriche tenute su una pagina. Un servizio erogato su contratto può richiedere KPI definiti fino al livello di un accordo sul livello di servizio (vedi Argomento 5.1 «Metriche SLA, OLA e XLA»).

## Domande da discutere con il team

**1. A quale obiettivo serve ciascuna delle nostre metriche rendicontate, e chi se ne accorgerebbe se smettessimo di rendicontarla?**
Si elenchino le metriche su una lavagna e si scriva l'obiettivo accanto a ciascuna. Dove l'obiettivo manca, ci si chieda chi abbia richiesto la metrica e perché. Alcune risulteranno ereditate da un progetto precedente e potranno essere ritirate. Il facilitatore dovrebbe trattare una metrica senza obiettivo come una normale scoperta, non come un fallimento.

**2. Se potessimo rispondere solo a tre domande sul nostro servizio, quali sarebbero?**
Ciò impone una graduatoria delle domande prima delle metriche. Si lasci che ciascuno ne scriva tre, poi le si raggruppi. Si confronti il raggruppamento con la dashboard che il team ha attualmente. Le lacune tra i due sono di solito il risultato più utile della sessione.

**3. Quali dei nostri risultati chiave descrivono un risultato per gli utenti e quali descrivono lavoro che intendiamo svolgere?**
Si legga ogni risultato chiave ad alta voce e ci si chieda se un utente se ne accorgerebbe qualora fosse raggiunto. Se la risposta è no, lo si riscriva come risultato o lo si sposti nel piano. Il facilitatore può ricordare che i compiti vanno bene, ma appartengono a un backlog. Si concluda concordando un risultato chiave da riscrivere in questo trimestre.

**4. Dove le nostre quattro prospettive della scorecard sono in disaccordo, e che cosa ci dice?**
Si chieda al gruppo di cercare un periodo recente in cui una prospettiva è migliorata mentre un'altra è peggiorata, come il costo che scende mentre l'esperienza cala. Si discuta la causa e se qualcuno l'avesse prevista. Ciò costruisce l'abitudine di leggere le misure insieme. Si annoti ogni prospettiva priva di misura e si decida se aggiungerne una o dire chiaramente che non rientra nell'ambito.

**5. Per ciascun fattore critico di successo, quale lettura ci direbbe che sta fallendo?**
Si scelgano due CSF e si nomini il KPI, poi ci si chieda quale valore innescherebbe una conversazione. Se il team non sa dirlo, il KPI non sta svolgendo il suo compito. Si cerchino i KPI che non hanno mai cambiato colore, il che di solito segnala una soglia fissata troppo larga. Il facilitatore dovrebbe chiedere quale sarebbe il vettore di manipolazione del KPI.

**6. Quale framework dovrebbe possedere quale decisione, e dove definiamo oggi due volte lo stesso numero?**
Si segua una metrica, come il tempo di risoluzione degli incidenti, attraverso ogni rapporto in cui compare. Si confrontino le definizioni. Le differenze nei cronometri o nelle esclusioni sono comuni e spiegano spesso le discussioni tra i team. Si concordino un responsabile e una definizione e li si registri nel registro.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna incontrano i framework principalmente come OKR e, se sono fortunati, GQM. Un team trae il massimo valore quando scrive i propri obiettivi e risultati chiave, collegati a ciò di cui i suoi utenti hanno bisogno, e quando tiene separate le misure di lavoro da quelle che vedono i dirigenti. Un team dovrebbe diffidare dei risultati chiave che premiano la produzione, come gli story point o i rilasci, perché invitano ai comportamenti che i framework dovevano prevenire (vedi Argomento 1.3 «Risultati prima della produzione: scegliere cosa misurare»).

### Team di servizio e operations

I team di operazioni incontrano i framework principalmente come CSF e KPI all'interno delle pratiche ITIL, più gli obiettivi di livello di servizio concordati con i clienti. Traggono beneficio dal definire il CSF in linguaggio semplice prima di scegliere il KPI, dal riportare i percentili per le misure temporali e dal tenere le misure di affidabilità, come gli indicatori e gli obiettivi di livello di servizio, accanto all'esperienza degli utenti (vedi Argomento 5.2 «SLI, SLO e budget di errore»). Dovrebbero anche resistere alla tentazione di mantenere KPI fissati anni fa che non si riferiscono più a come il servizio viene usato.

### Leadership e governance

I dirigenti scelgono i framework, di solito chiedendo una scorecard o degli OKR, e ciò che fanno con i numeri decide come i framework si comportano. Un dirigente che punisce un risultato chiave mancato insegna ai team a scriverne di facili. Un dirigente che chiede che cosa il team abbia imparato insegna a scriverne di onesti. Gli organi di governance dovrebbero attendersi un registro delle metriche, un piccolo numero di misure rendicontate e una revisione regolare del funzionamento del framework stesso (vedi Argomento 11.4 «Modello di maturità per i programmi di metriche»).

### Clienti e utenti

I clienti e gli utenti vedono raramente il framework, solo i suoi effetti. Uno ben progettato si manifesta come servizi che migliorano nei modi che hanno chiesto e come rendicontazione onesta su ciò che non è migliorato. Uno scadente si manifesta come rapporti verdi che non corrispondono all'esperienza. Si includa un punto di vista dell'utente in ogni obiettivo e si lasci che il feedback degli utenti stia nella prospettiva cliente della scorecard accanto ai numeri operativi (vedi Argomento 6.2 «Experience level agreement»).

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni gestisce una piattaforma di assistenza ai clienti e un portale self-service con diversi team di prodotto e un piccolo gruppo di operazioni di servizio. Tutti i numeri sono illustrativi.

La direzione chiede una balanced scorecard e, separatamente, OKR trimestrali. In un trimestre il team ha 31 misure rendicontate, e nessuno sa dire perché metà di esse esista. Il responsabile del servizio conduce una sessione di mezza giornata usando GQM su un obiettivo: «Migliorare la chiarezza dell'aiuto per i clienti che non riescono a completare un pagamento, dal punto di vista del cliente».

La sessione produce quattro domande. I clienti trovano l'articolo di aiuto giusto? Hanno bisogno di contattare l'assistenza dopo averlo letto? Quanto tempo richiede la risoluzione di un problema di pagamento quando contattano l'assistenza? Sentono che la risposta era chiara? Delle 31 misure, nove corrispondono a queste domande. Ne servono tre nuove: il successo della ricerca degli articoli, il tasso di contatto dopo la visualizzazione di un articolo e un sondaggio di una domanda dopo la risoluzione. Le restanti 22 vengono contrassegnate per il ritiro, con l'accordo del responsabile.

L'OKR del trimestre è scritto come risultato. L'obiettivo è «I clienti risolvono i problemi di pagamento senza doverci inseguire». I tre risultati chiave sono il tempo mediano e il 90° percentile alla risoluzione, il tasso di contatto dopo la visualizzazione di un articolo e l'esito del sondaggio sulla chiarezza. La scorecard mantiene la prospettiva cliente puntata sulle stesse misure, così che ci sia una definizione, non due.

A metà trimestre compare un rischio di manipolazione. Il tasso di contatto dopo la visualizzazione di un articolo cala bruscamente, il che sembra un successo. Un revisore campiona 20 sessioni e scopre che una riprogettazione ha spostato il link «contattaci» più in profondità di tre schermate. Meno persone raggiungono l'assistenza, e il sondaggio mostra punteggi di chiarezza inferiori. Il team aggiunge l'abbandono della ricerca e i commenti del sondaggio come salvaguardie e ripristina il link.

A fine trimestre i punteggi dei risultati chiave sono 0,6, 0,8 e 0,5, che il team presenta così come sono. La direzione chiede che cosa il team abbia imparato, non perché i punteggi non fossero più alti. La decisione, registrata nel registro delle decisioni, è di mantenere l'obiettivo per un secondo trimestre, sostituire il tasso di contatto con la quota di clienti che risolvono il problema alla prima visita e ritirare altre sei misure della scorecard.

## Lente di settore

**Startup.** Una startup ha di solito bisogno di un obiettivo, tre domande e una manciata di metriche, tenuti su una sola pagina. Gli OKR sono comuni e funzionano bene quando sono scritti dal team che svolgerà il lavoro. Si resista ad aggiungere una scorecard finché investitori o clienti non la richiedono.

**Piccola impresa.** Le risorse sono scarse, perciò si scelga un solo framework e lo si usi con leggerezza. CSF e KPI scritti per le due o tre cose che l'attività non può permettersi di sbagliare sono spesso sufficienti. Si preferisca il feedback diretto dei clienti a punteggi elaborati.

**Grande impresa.** Di solito coesistono più framework, il che fa della responsabilità delle definizioni la sfida principale. Si tenga un registro, si designi quale framework contiene quale numero e si conduca una revisione annuale dell'intera disposizione. Ci si guardi dalle cascate che costringono ogni team a riformulare con parole proprie gli obiettivi aziendali.

**Pubblica amministrazione e settore pubblico.** La rendicontazione obbligatoria e i livelli di servizio contrattuali agiscono come KPI fissi. Li si tratti come dati e si usino GQM o OKR per il lavoro di miglioramento attorno ad essi. La responsabilità pubblica alza la posta in gioco di un numero fuorviante, perciò si pubblichino le definizioni e si sia trasparenti sulle modifiche (vedi Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

Il costo di un framework è soprattutto tempo: una sessione facilitata per progettare le misure, una breve revisione trimestrale e la manutenzione di un registro. Esiste software per OKR o scorecard, ma un documento o un foglio di calcolo bastano spesso su piccola scala. Il costo maggiore è l'attenzione della direzione, poiché un framework che i dirigenti non usano diventa rendicontazione fine a sé stessa.

Il ritorno viene da misure meno numerose e migliori. I team che sanno dire perché esiste ogni numero spendono meno tempo a produrre rapporti che nessuno legge, discutono meno sulle definizioni e si accorgono prima che una misura ha smesso di orientare le decisioni. Anziché citare una cifra, si misurino le proprie baseline: il numero di metriche rendicontate, la quota con un obiettivo registrato e il tempo speso a preparare i rapporti ricorrenti, prima e dopo l'adozione del framework. Un trattamento più completo del ritorno sull'investimento si trova altrove (vedi Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Metriche prima degli obiettivi.** Partire dai dati che si hanno produce una dashboard di ciò che è facile contare. Si scrivano prima l'obiettivo e la domanda, poi si veda quali dati si adattano.
- **OKR come elenchi di compiti.** I risultati chiave che nominano attività fanno apparire occupato ogni trimestre e non dicono nulla sui risultati. Si riscriva ciascuno come evidenza che un utente noterebbe.
- **OKR e scorecard come obiettivi individuali.** Invitano alla manipolazione e scoraggiano l'aiuto tra le persone. Si mantengano a livello di team e di servizio.
- **Una scorecard con prospettive vuote o simboliche.** Riempire ogni casella con qualcosa non equivale a vedere il tutto. Si richiedano un valore attuale e una decisione per ciascuna.
- **KPI che non cambiano mai.** Se un indicatore è verde da anni, la sua soglia è probabilmente sbagliata o non misura nulla che possa fallire. Ci si chieda quale lettura mostrerebbe un problema, poi lo si reimposti.
- **Framework impilati senza responsabilità.** Tre framework che definiscono la stessa misura in tre modi creano discussioni. Si nominino un responsabile e una definizione unica.
- **Premiare il punteggio.** Se un punteggio OKR perfetto procura elogi o retribuzione, i team scriveranno risultati chiave facili. Si premino l'apprendimento onesto e le buone domande.
- **Framework come cerimonia.** Una giornata di workshop che produce un poster plastificato non cambia nulla. Si conservi il risultato nel registro e lo si riveda in calendario.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Obiettivi e domande | Metriche scelte perché i dati esistono | Alcuni team scrivono gli obiettivi prima delle metriche | Un formato comune di obiettivo e domanda; ogni metrica rendicontata risale a uno | La tracciabilità è rivista e le lacune portano a lavoro finanziato | Gli obiettivi sono scritti insieme a clienti e fornitori e rivisti al mutare delle condizioni |
| Uso dei framework | Ad hoc; nessun framework dichiarato | I team adottano framework diversi con vocabolari diversi | Una disposizione scritta dice quale framework possiede quale decisione | Gli esiti dei framework sono rivisti e le parti inutilizzate abbandonate | I framework sono allineati tra team e fornitori con un unico insieme di definizioni |
| Indicatori e punteggi | KPI fissati una volta e mai rivisti | Alcuni KPI hanno responsabili e soglie | KPI e risultati chiave hanno responsabili, definizioni e salvaguardie | Punteggi e indicatori analizzati nel tempo e rivisti ogni trimestre rispetto alla manipolazione | Indicatori ritirati e sostituiti di routine, con modifiche collegate ai risultati |
| Uso nelle decisioni | I rapporti sono prodotti e ignorati | I dirigenti chiedono numeri quando qualcosa va storto | Le revisioni registrano le decisioni che i numeri hanno influenzato | Le domande di apprendimento sono la norma; gli obiettivi mancati sono discussi senza colpe | La pianificazione dei miglioramenti tra i team usa gli stessi obiettivi e le stesse misure condivisi |

## Checklist

- [ ] Ogni metrica rendicontata risale a un obiettivo scritto, a una domanda e a un pubblico nominato.
- [ ] Un registro delle metriche riporta quale framework possiede ciascuna metrica e la sua definizione unica.
- [ ] Gli obiettivi sono scritti con uno scopo, un oggetto e un punto di vista.
- [ ] Ogni risultato chiave descrive un risultato che qualcuno noterebbe, non un compito.
- [ ] OKR, misure della scorecard e KPI appartengono a team o servizi, non a singole persone.
- [ ] Ogni fattore critico di successo ha almeno un KPI attuale e una lettura dichiarata che mostrerebbe il fallimento.
- [ ] Ogni prospettiva della scorecard ha una misura con un valore attuale.
- [ ] Ogni metrica ha un vettore di manipolazione e una salvaguardia nominati.
- [ ] Una revisione trimestrale chiede se ogni obiettivo, risultato chiave e KPI conti ancora.
- [ ] Almeno una metrica o un indicatore è stato ritirato o riprogettato nell'ultimo anno, con la motivazione registrata.

## Prompt IA

**Trasformare un obiettivo in domande e metriche candidate.**

```text
Il nostro team è [nome del team], che gestisce [tipo di servizio o di lavoro di
consegna] per [pubblico]. Il nostro obiettivo è: [obiettivo enunciato come scopo,
oggetto e punto di vista]. Usando l'approccio Goal-Question-Metric, proponi da
tre a cinque domande che mostrerebbero se stiamo raggiungendo questo obiettivo.
Per ogni domanda, suggerisci le metriche candidate che potremmo definire, il tipo
di fonte dei dati di cui avremmo bisogno, il probabile vettore di manipolazione e
una salvaguardia. Non inventare valori di riferimento né statistiche. Elenca le
tue ipotesi e tutto ciò che non hai potuto determinare da quanto ti ho fornito.
```

**Esaminare una bozza di OKR.**

```text
Ecco la nostra bozza di obiettivi e risultati chiave per [periodo]: [incolla gli
OKR]. Il nostro team è [nome del team] e i nostri utenti sono [pubblico].
Esamina ogni risultato chiave e dimmi se descrive un risultato o un'attività, se
potrebbe essere raggiunto senza aiutare gli utenti e quale salvaguardia lo
mostrerebbe. Suggerisci riscritture dove servono, usando [segnaposto] per i
numeri che dobbiamo fornire noi. Non inventare obiettivi né valori di
riferimento. Elenca le tue ipotesi e le domande a cui dovrei rispondere.
```

**Associare i fattori critici di successo ai KPI.**

```text
Per la pratica ITIL [nome della pratica] nella nostra organizzazione, che serve
[pubblico], ecco i fattori critici di successo che abbiamo abbozzato: [elenco dei
CSF]. Proponi per ciascuno i KPI che potrebbero essere raccolti da [fonti dei
dati]. Per ogni KPI, indica dove il cronometro parte e si ferma se è una misura
temporale, quale lettura mostrerebbe che il fattore sta fallendo e come potrebbe
essere manipolato. Non indicare valori di riferimento né affermazioni di
conformità. Elenca le tue ipotesi.
```

**Verificare l'equilibrio di una scorecard.**

```text
La nostra scorecard ha queste misure, raggruppate per prospettiva: [incolla le
misure per prospettiva]. Siamo [tipo di organizzazione]. Individua le prospettive
povere, le misure che sembrano duplicarsi e le misure che potrebbero muoversi in
modo da nascondere un problema in un'altra prospettiva. Suggerisci salvaguardie e
misure da ritirare. Non inventare cifre né fonti. Elenca le tue ipotesi e ciò che
non hai potuto giudicare dai dati che ti ho fornito.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare quale argomento possiede una metrica e la sua salvaguardia abbinata prima di collocarla in un framework.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una voce di metrica basata su un framework riporti la propria definizione, il vettore di manipolazione e la salvaguardia.

## Punti chiave

- Un framework decide quali metriche si guadagnano un posto, e la regola comune è partire da un obiettivo e da una domanda, poi scegliere la metrica.
- Goal-Question-Metric si adatta alla progettazione delle misure per un team, gli OKR a concentrare un trimestre, le scorecard alle visioni complete per la direzione e i CSF con i KPI alla gestione di una pratica ITIL.
- Si usi il framework più leggero che funzioni e si dica quale possiede quale numero.
- Ogni framework può essere manipolato, perciò si abbini ogni metrica a una salvaguardia e si riveda l'insieme in calendario.
- Si mantengano i framework a livello di team e di servizio, mai come obiettivi individuali.
- Si ritirino obiettivi, risultati chiave e indicatori che non orientano più le decisioni.

## Riferimenti e letture di approfondimento

1. Basili, V. R., Caldiera, G., and Rombach, H. D., "The Goal Question Metric Approach," in *Encyclopedia of Software Engineering*, Wiley, 1994.
2. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January-February 1992.
3. Kaplan, R. S., and Norton, D. P., *The Balanced Scorecard: Translating Strategy into Action*, Harvard Business School Press, 1996.
4. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
5. Grove, A. S., *High Output Management*, Random House, 1983.
6. Rockart, J. F., "Chief Executives Define Their Own Data Needs," *Harvard Business Review*, March-April 1979.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
9. Axelos, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
10. Wikipedia, [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili).
11. Wikipedia, [OKR](https://en.wikipedia.org/wiki/OKR).
12. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
13. Wikipedia, [Critical success factor](https://en.wikipedia.org/wiki/Critical_success_factor).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
17. Wikipedia, [Strategy map](https://en.wikipedia.org/wiki/Strategy_map).
