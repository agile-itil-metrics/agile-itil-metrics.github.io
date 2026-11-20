# Metriche di postmortem e apprendimento

**Una revisione scritta, archiviata e dimenticata non ha insegnato nulla a nessuno: occorre dunque misurare se le revisioni avvengono, se sono buone, se le loro azioni vengono portate a termine e se le stesse cause smettono di ripresentarsi, mantenendo l'intera pratica senza colpa, in modo che le persone continuino a dire la verità.**

## Panoramica e motivazione

Ogni servizio, a volte, fallisce. Ciò che distingue un team che migliora con costanza da un team che ripete la propria settimana peggiore è ciò che accade nei giorni successivi al fallimento. Un [postmortem](https://en.wikipedia.org/wiki/Postmortem_documentation) è un resoconto scritto di un incidente o di un quasi incidente: che cosa è accaduto, come è stato rilevato e gestito, quali condizioni lo hanno reso possibile e che cosa il team cambierà. ITIL chiama questa attività revisione post-incidente, e questo argomento usa i due nomi in modo intercambiabile. Una regolare riflessione del team ne è una parente stretta che guarda il lavoro ordinario anziché un'interruzione.

Questo argomento tratta le misure che indicano se tale ciclo di apprendimento funziona. Pone quattro domande. Le revisioni che dovrebbero avvenire avvengono davvero? Sono abbastanza buone da trovare qualcosa di reale? Le azioni che producono vengono portate a termine? E la stessa causa continua comunque a ripresentarsi? Una quinta domanda scorre sotto le altre: le persone si sentono abbastanza sicure da descrivere ciò che è realmente accaduto?

L'argomento si colloca tra due vicini ed evita di ripeterli. Le metriche degli incidenti maggiori (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori») misurano la tempestività della revisione e il seguito delle sue azioni per gli incidenti maggiori dichiarati, e sono la sede di quelle due misure in quel contesto ristretto. Le metriche di gestione dei problemi (si veda l'Argomento 4.1 «Metriche di gestione dei problemi») possiedono il record di problema, l'errore noto e il tempo alla correzione definitiva. Questo argomento allarga lo sguardo a ogni livello di gravità degli incidenti, ai quasi incidenti e alle retrospettive dei team, e possiede la qualità dell'apprendimento stesso: copertura, profondità, chiusura delle azioni su tutte le fonti, ricorrenza delle cause e segnali di assenza di colpa che mantengono onesti i dati.

### Termini usati in questo argomento

- **Postmortem o revisione post-incidente:** un esame strutturato e senza colpa di un incidente dopo il ripristino del servizio, che si conclude con un record scritto.
- **Quasi incidente (near miss):** un evento che avrebbe potuto causare un incidente o un danno ma non lo ha fatto, per esempio una distribuzione fallita intercettata in un ambiente di test o un avviso scattato pochi minuti prima che gli utenti se ne accorgessero.
- **Azione:** una modifica specifica con un team responsabile nominato, una data di scadenza e un modo per capire quando è completata.
- **Fattore concorrente:** una condizione che ha reso l'incidente possibile o peggiore. La maggior parte degli incidenti ne ha diversi. Una singola «causa radice» è spesso una semplificazione, e l'[analisi delle cause radice](https://en.wikipedia.org/wiki/Root_cause_analysis) è meglio trattarla come una ricerca di condizioni, non di un colpevole.
- **Classe di causa:** un'etichetta stabile tratta da un breve elenco concordato (per esempio «limite di capacità», «deriva della configurazione», «monitoraggio mancante», «responsabilità poco chiare») usata per individuare la ricorrenza. Descrive una condizione del sistema, mai una persona.
- **Senza colpa (blameless):** uno stile di revisione che chiede come il sistema abbia permesso a una persona ragionevole di agire come ha agito, e non chiede chi punire. È una pratica, ed è legata all'idea di [cultura giusta](https://en.wikipedia.org/wiki/Just_culture) (just culture), in cui gli errori in buona fede sono trattati come apprendimento e gli atti sconsiderati sono comunque gestiti separatamente.
- **Information Technology Infrastructure Library (ITIL):** il framework ampiamente diffuso per la gestione dei servizi IT (ITSM). Questo argomento si riferisce alle pratiche come descritte in ITIL 4 (2019), e il libro nel suo insieme è datato a ottobre 2026. Si veda [ITIL](https://en.wikipedia.org/wiki/ITIL).

### Come differiscono le visioni agile e ITIL

ITIL contribuisce con la struttura. In ITIL 4 la gestione degli incidenti ripristina il servizio, la gestione dei problemi riduce la probabilità e l'impatto degli incidenti trovando e gestendo le cause, e il miglioramento continuo trasforma ciò che si è appreso in modifiche finanziate. La revisione è il cardine tra le prime due e la terza. ITIL tende a chiedere se la revisione sia stata tenuta, se sia stato aperto un record di problema dove giustificato e se il miglioramento sia stato registrato.

Le tradizioni agile e dell'[ingegneria dell'affidabilità del sito (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) contribuiscono con le abitudini. Le revisioni sono senza colpa, brevi, scritte per lettori esterni al team e ampiamente condivise. La regolare riflessione del team, un'abitudine di miglioramento continuo, chiede che cosa cambiare successivamente, e la preferenza [agile](https://en.wikipedia.org/wiki/Agile_software_development) per aggiustamenti piccoli e frequenti sostituisce il singolo grande programma di miglioramento. Il libro *Site Reliability Engineering* di Google dedica un capitolo alla cultura dei postmortem e sostiene che un processo di revisione vale quanto la cultura che lo circonda.

Usate insieme, le due visioni sono forti. ITIL offre regole di copertura e un luogo in cui l'azione possa vivere. Le abitudini agile e SRE offrono onestà e rapidità. Misurate insieme, mostrano se il ciclo si sta chiudendo.

## Principi chiave

- **L'apprendimento è il prodotto, non il documento.** Una revisione ha avuto successo quando qualcosa cambia nel sistema, nel processo o nella comprensione condivisa. Si conti il cambiamento, non la documentazione.
- **L'assenza di colpa è una precondizione per dati buoni.** Se le persone temono la colpa, la cronologia sarà scarna, i fattori concorrenti saranno ripuliti e lo stesso incidente tornerà. Si protegga la franchezza prima di misurare qualsiasi altra cosa.
- **Misurare il seguito e la ricorrenza, non il volume.** Il numero di revisioni dice poco. La quota di azioni completate e la quota di cause che restano scomparse dicono moltissimo.
- **Mantenere le metriche a livello di team e di sistema.** Una revisione riguarda le condizioni. Non si contino mai revisioni, azioni o errori per persona, e non si usino mai questi numeri nelle conversazioni sulle prestazioni.
- **Dimensionare la revisione.** Non ogni evento merita un documento lungo. Si stabiliscano gli inneschi in base all'impatto e al valore di apprendimento, e si lasci che un piccolo evento riceva una revisione breve.
- **Lasciare che le azioni competano onestamente.** Un'azione è lavoro. Appartiene allo stesso backlog degli altri lavori, con una priorità rispetto ad essi, e può essere rifiutata con una motivazione registrata.
- **Leggere le revisioni.** I numeri localizzano il problema. Un essere umano che legge un campione dice se le revisioni sono buone.

## Definizioni delle metriche

Le metriche seguenti descrivono il ciclo di apprendimento per un servizio o per un gruppo di team. Ciascuna indica che cosa viene contato, dove gli orologi partono e si fermano e che cosa è escluso. Le misure di tempo dovrebbero essere mostrate come una mediana e un percentile alto (per esempio l'85°) con l'anzianità dell'elemento aperto più vecchio, non come una media (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Corrispettivo agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Copertura delle revisioni | Quota di eventi qualificanti che hanno ricevuto una revisione completata | Eventi qualificanti con una revisione pubblicata entro la finestra concordata / eventi qualificanti chiusi nel periodo. Gli eventi qualificanti sono quelli che soddisfano gli inneschi scritti. Gli eventi ancora aperti alla fine del periodo e interni alla finestra sono esclusi. | percentuale | Record di incidente dello strumento ITSM uniti al repository delle revisioni | Gestione degli incidenti; gestione dei problemi | Regolare riflessione del team; accordi di lavoro del team | Mensile |
| Punteggio di qualità delle revisioni | Se una revisione pubblicata soddisfa un breve standard scritto | Revisioni di un campione che soddisfano almeno [numero concordato] degli elementi della checklist / revisioni del campione. Il campione è un numero fisso di revisioni estratte a caso ogni trimestre e valutate da qualcuno esterno al team responsabile. | percentuale | Campione trimestrale del repository delle revisioni con una scheda di valutazione | Miglioramento continuo; gestione dei problemi | Definition of done per una revisione | Trimestrale |
| Tasso di chiusura delle azioni | Quota di azioni delle revisioni completate entro la scadenza | Azioni completate o formalmente rifiutate (con una motivazione) entro la scadenza / azioni in scadenza nel periodo. L'orologio parte quando la revisione è pubblicata e si ferma quando il team responsabile contrassegna l'azione come completata e un revisore la conferma. Le azioni chiuse come «non verrà fatto» sono contate separatamente e riportate. | percentuale | Backlog del team o registro dei miglioramenti dell'ITSM, collegato alla revisione | Miglioramento continuo; gestione dei problemi | Backlog del team; azioni di miglioramento | Mensile |
| Anzianità delle azioni aperte | Anzianità delle azioni delle revisioni ancora aperte | Per ogni azione aperta, oggi meno la data di pubblicazione della sua revisione. Riportare la mediana, l'85° percentile e la più vecchia. | giorni | Backlog del team o registro dei miglioramenti | Miglioramento continuo | Anzianità dell'elemento di lavoro; lavoro in corso che invecchia | Mensile |
| Tasso di ricorrenza delle cause | Quota di eventi la cui classe di causa corrisponde a un evento precedente per lo stesso servizio | Eventi del periodo la cui classe di causa primaria corrisponde a una revisione chiusa nei dodici mesi precedenti per lo stesso servizio / eventi con una classe di causa registrata nel periodo. Gli eventi senza una classe di causa registrata sono esclusi e contati separatamente. | percentuale | Campo della classe di causa del repository delle revisioni unito ai record di incidente | Gestione dei problemi; gestione degli incidenti | Analisi dei difetti sfuggiti; temi della retrospettiva | Trimestrale |
| Tasso di segnalazione dei quasi incidenti | Volume di quasi incidenti e segnali deboli che le persone scelgono di segnalare | Quasi incidenti registrati nel periodo / servizi attivi, mostrato come tendenza per servizio e mai per persona. Il tasso è pensato per crescere presto in un programma sano e poi stabilizzarsi. | numero per servizio | Registro dei quasi incidenti, o un campo con tag nell'issue tracker | Gestione degli incidenti; gestione del rischio | Verifica della salute del team; board degli impedimenti | Mensile |
| Portata dell'apprendimento | Quanto lontano viaggia una revisione oltre il team che l'ha scritta | Revisioni presentate o discusse al di fuori del team responsabile (un forum condiviso, una sessione tra team o una lettura documentata da parte di un team dipendente) entro [numero concordato] giorni dalla pubblicazione / revisioni pubblicate nel periodo | percentuale | Registri dei forum o delle riunioni e repository delle revisioni | Miglioramento continuo; gestione della conoscenza | Revisione con gli stakeholder; comunità di pratica | Trimestrale |
| Riporto delle azioni di retrospettiva | Quota di azioni delle retrospettive del team completate entro la retrospettiva successiva | Azioni di retrospettiva completate prima della retrospettiva successiva / azioni di retrospettiva concordate nella precedente. Le azioni deliberatamente abbandonate con una motivazione sono rimosse da entrambi i conteggi. | percentuale | Note o board della retrospettiva, tenute nel backlog del team | Miglioramento continuo | Regolare riflessione del team | Per periodo di revisione, riesaminato ogni trimestre |
| Sondaggio breve sulla libertà di parola | Se le persone credono di poter descrivere gli errori senza colpa | Quota di risposte pari o superiori a [livello concordato] su un breve insieme anonimo di domande (per esempio «Posso descrivere un errore in una revisione senza timore di essere incolpato») / risposte ricevute. Il sondaggio è riportato solo per gruppi abbastanza grandi da proteggere l'anonimato. | percentuale | Sondaggio breve anonimo | Miglioramento continuo; cambiamento organizzativo | Verifica della salute del team; verifica della sicurezza psicologica | Trimestrale |

Una revisione è «pubblicata» quando è visibile ai lettori previsti, non salvata come bozza. Una classe di causa è registrata dal gruppo di revisione a partire dalla revisione stessa, da un breve elenco concordato, mai da chi ha chiuso il ticket.

## Raccomandazioni

### Decidere che cosa merita una revisione

**1. Scrivere gli inneschi e pubblicarli.** Una regola come «ogni incidente maggiore, ogni incidente delle due gravità più alte, ogni evento con perdita di dati dei clienti e ogni quasi incidente che il team giudica istruttivo» elimina la discussione e rende la copertura misurabile. Senza inneschi scritti, le revisioni seguono l'umore e il carico di lavoro, e il dato di copertura non significa nulla.

**2. Dimensionare la revisione all'evento.** Un piccolo evento può avere una revisione di mezza pagina scritta in trenta minuti, mentre un incidente maggiore può meritare una cronologia completa e una sessione facilitata. Un percorso leggero mantiene alta la copertura senza fare della pratica un peso.

### Giudicare la qualità leggendo

**3. Campionare e leggere le revisioni ogni trimestre.** Si estragga un piccolo campione casuale e si faccia leggere ciascuna revisione a qualcuno esterno al team responsabile, rispetto a una breve checklist. Elementi utili sono una cronologia che mostri le decisioni e le informazioni disponibili quando furono prese, più di un fattore concorrente, una descrizione di ciò che è andato bene, azioni con responsabili e date, e un linguaggio che descriva il sistema e non l'individuo. Si riporti la quota di quelle che soddisfano lo standard e si restituiscano i risultati a chi scrive sotto forma di coaching.

**4. Insegnare l'abilità di condurre le revisioni.** Il [bias del senno di poi](https://en.wikipedia.org/wiki/Hindsight_bias) fa apparire gli eventi ovvi a cose fatte e spinge gli autori verso «qualcuno avrebbe dovuto accorgersene». Si chieda ai facilitatori di ricostruire che cosa le persone sapessero in ciascun momento, e si usino i [cinque perché](https://en.wikipedia.org/wiki/Five_whys) come spunto per le domande, non come ricetta per un'unica risposta.

### Fare in modo che le azioni vengano completate

**5. Mettere le azioni nel backlog reale.** Un'azione che vive solo in un documento di revisione è invisibile alla pianificazione. Si crei un elemento di lavoro nel tracker del team responsabile, lo si colleghi alla revisione e lo si lasci competere per la capacità come qualsiasi altro lavoro. Si riporti la chiusura per team e per servizio, in modo che un'azione bloccata diventi visibile a chi può sbloccarla.

**6. Ammettere un «non verrà fatto» onesto e registrarne il motivo.** Alcune azioni risultano troppo costose o non più rilevanti. Chiuderle con una motivazione dichiarata è più sano che lasciarle aperte per un anno o contrassegnarle come fatte senza farle. Si riporti la quota di quelle rifiutate, perché una quota molto alta suggerisce che il processo di revisione stia proponendo azioni che nessuno finanzierà.

**7. Monitorare l'anzianità delle azioni aperte, oltre al tasso di chiusura.** L'85° percentile dell'anzianità delle azioni aperte e l'azione aperta più vecchia mostrano che cosa è bloccato. Si riveda la più vecchia nella riunione che esamina l'affidabilità del servizio.

### Tenere d'occhio le ripetizioni

**8. Tenere un breve elenco di classi di causa e applicare l'etichetta a ogni revisione.** Un elenco da otto a quindici classi è sufficiente. Si riveda l'elenco quando più di una piccola quota di eventi finisce in una classe «altro». L'etichettatura consente di rispondere con i dati alla domanda «lo abbiamo già visto?» e alimenta la gestione dei problemi con schemi che nessuna singola revisione mostra (si vedano l'Argomento 4.1 «Metriche di gestione dei problemi» e l'Argomento 4.6 «Debito tecnico ed errori noti»).

**9. Trattare la ricorrenza come un segnale sull'azione, non sulle persone.** Quando una classe di causa ritorna, ci si chieda se le azioni precedenti siano state completate, se fossero le azioni giuste e se la classe sia troppo ampia. La ricorrenza dopo che tutte le azioni sono state chiuse significa che le azioni non hanno funzionato, il che è una notizia utile.

### Proteggere l'onestà

**10. Mantenere le revisioni senza colpa e renderlo visibile.** Si dichiari nel modello che la revisione descrive condizioni e decisioni e non attribuisce colpe, e i dirigenti ringrazino gli autori per la franchezza. La [sicurezza psicologica](https://en.wikipedia.org/wiki/Psychological_safety), nella ricerca di Amy Edmondson sui team di lavoro, è la convinzione condivisa che il team sia sicuro per assumersi rischi interpersonali (si veda l'Argomento 9.2 «Metriche di soddisfazione e benessere»).

**11. Premiare le segnalazioni di quasi incidenti e leggere un conteggio in crescita come una buona notizia all'inizio.** Un team che comincia a segnalare i quasi incidenti vedrà il conteggio salire, perché gli eventi si verificavano da sempre. Lo si dica in anticipo, si monitori la quota di quasi incidenti che ha prodotto un cambiamento e si pubblichino le storie con il consenso del team.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di contromisura abbinata |
| --- | --- | --- |
| Copertura delle revisioni | Restringere gli inneschi; declassare la gravità in modo che gli eventi cadano fuori da essi; archiviare una «revisione» di una riga per spuntare la casella | Punteggio di qualità delle revisioni; confrontare i conteggi di gravità degli incidenti con l'impatto segnalato dai clienti; verificare i declassamenti |
| Punteggio di qualità delle revisioni | Scrivere per la checklist con testo standard; valutazione da parte del team responsabile; un campione prevedibile | Valutatore esterno; campione casuale; leggere ad alta voce due revisioni ogni trimestre; monitorare se le azioni delle revisioni con punteggio alto vengono completate |
| Tasso di chiusura delle azioni | Fissare scadenze lontane; dividere le azioni in pezzi banali; chiudere le azioni senza verifica; dichiarare «non verrà fatto» per svuotare l'elenco | Anzianità delle azioni aperte; quota di rifiutate con motivazioni; conferma del revisore che la modifica funzioni; tasso di ricorrenza delle cause |
| Anzianità delle azioni aperte | Chiudere e riaprire o ricreare un'azione per azzerarne l'anzianità; spostare le azioni in un elenco separato di «idee» | Collegare le nuove azioni alla revisione di origine e mantenere la prima data; numero di azioni spostate nelle idee |
| Tasso di ricorrenza delle cause | Registrare classi di causa vaghe o in continuo cambiamento in modo che nulla corrisponda; usare un'ampia classe «altro»; collegare una ripetizione a una classe diversa | Quota di eventi in «altro»; una rilettura periodica delle revisioni per classe; una revisione dell'elenco stesso delle classi |
| Tasso di segnalazione dei quasi incidenti | Chiedere segnalazioni per raggiungere un numero; registrare eventi banali; oppure, nella direzione opposta, leggere il numero come un fallimento e sopprimere le segnalazioni | Quota di quasi incidenti che hanno portato a una modifica; nessun obiettivo sul conteggio; feedback dal sondaggio breve sulla libertà di parola |
| Portata dell'apprendimento | Aggiungere nomi a una lista di distribuzione; presentare in sessioni poco frequentate; contare un collegamento come una lettura | Presenze o note di discussione effettive; chiedere ai team dipendenti che cosa hanno cambiato dopo l'ultima revisione |
| Riporto delle azioni di retrospettiva | Concordare solo azioni banali e facili da completare; saltare la retrospettiva; contrassegnare gli elementi come completati | Impatto delle azioni secondo il giudizio del team; tasso di retrospettive tenute; se lo stesso tema compare per più settimane |
| Sondaggio breve sulla libertà di parola | Fare pressione sui rispondenti; sondare solo le persone sicure di sé; riportare una media che nasconde un gruppo con punteggio basso | Tasso di risposta e composizione dei rispondenti; dimensione minima del gruppo; commenti aperti letti per intero; se il linguaggio delle revisioni cambia |

Una lettura sana mostra revisioni per gli eventi che contano, uno standard di qualità che la maggior parte soddisfa, azioni che vengono completate o onestamente rifiutate, un pugno di azioni vecchie che i dirigenti sanno nominare, classi di causa la cui frequenza cala dopo che sono state affrontate e un conteggio di quasi incidenti che è salito e poi si è stabilizzato. Il sondaggio breve resta stabile o migliora quando si verifica un incidente difficile. Uno schema troppo pulito è di per sé un segnale per leggere un campione.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Rivedere ogni incidente | Copertura completa; nessuna discussione sugli inneschi | Oneroso; le revisioni diventano superficiali; i team arrivano a detestare il processo |
| Rivedere in base a inneschi scritti | Concentra lo sforzo su impatto e valore di apprendimento | Gli inneschi richiedono manutenzione; gli eventi al limite sfuggono |
| Etichettatura per classe di causa | Trova schemi tra le revisioni | Le classi sono una semplificazione; le cause reali sono spesso più cose insieme |
| Sondaggio breve anonimo sulla sicurezza | Segnale onesto su una domanda delicata | Grossolano; i team piccoli possono essere identificabili; stanchezza da sondaggi |

La risposta in prosa è mantenere il ciclo breve e i numeri pochi: inneschi scritti, un piccolo campione di qualità, un unico tracker delle azioni e un elenco di classi di causa, aggiungendo il sondaggio sulla sicurezza una volta che il team si fida del resto. Nessuna misura qui dimostra che l'apprendimento sia avvenuto. Insieme mostrano se le condizioni per esso sono presenti.

## Domande da discutere con il team

**1. Quali dei nostri ultimi cinque incidenti hanno ricevuto una revisione e qualcuno ha cambiato qualcosa a causa di essa?**
Si parta dall'elenco degli incidenti, non dalla cartella delle revisioni, in modo che le revisioni mancanti diventino visibili. Per ciascuna revisione, ci si chieda che cosa sia diverso oggi nel sistema o nel processo. Se la risposta è «nulla», ci si chieda perché la revisione sia stata tenuta e chi l'abbia letta. Il facilitatore dovrebbe registrare le risposte senza giudicare, perché mostrano se la pratica produce cambiamento o carta.

**2. Che cosa renderebbe più difficile per qualcuno dire la verità in una revisione qui?**
Si chiedano esempi specifici: la reazione di un responsabile, una valutazione delle prestazioni, un'escalation di un cliente, un tono in un'email. Si inviti prima le persone a scrivere le risposte in forma anonima. Si cerchino condizioni che possono essere cambiate, come chi partecipa, chi legge e che cosa dicono ad alta voce i dirigenti. Questa è la conversazione che protegge ogni altro numero dell'argomento.

**3. Quali azioni sono aperte da più tempo e che cosa le blocca?**
Si mostrino le cinque più vecchie. Per ciascuna, ci si chieda se l'azione sia ancora giusta, se abbia un responsabile con capacità e se debba essere fatta, ripianificata o rifiutata. Si mantenga l'attenzione sul sistema di lavoro e non sul responsabile. Si concordi una decisione per ciascuna prima della fine della sessione.

**4. Quando è tornato lo stesso tipo di problema e che cosa dice questo sulla correzione precedente?**
Si usino le etichette delle classi di causa per trovare una ripetizione e si legga la revisione precedente con le sue azioni. Ci si chieda se le azioni siano state completate, se affrontassero i fattori concorrenti e se la classe sia stata tracciata in modo troppo ampio. L'obiettivo è un'azione migliore, non una spiegazione.

**5. Segnaliamo i quasi incidenti e che cosa accade quando qualcuno lo fa?**
Si chieda un esempio recente e si ricostruisca che cosa è seguito. Se non è seguito nulla, ci si chieda perché le persone dovrebbero segnalare di nuovo. Se il conteggio è basso, ci si chieda che cosa le persone temano. Il facilitatore dovrebbe spiegare che un conteggio in crescita è atteso all'inizio e concordare come il team risponderà alla prossima segnalazione, in modo che segnalare appaia utile.

**6. Come sapremmo che una revisione è stata buona se non potessimo guardare alcun numero?**
Questo chiede al team di descrivere la qualità con parole proprie. Le risposte comuni includono «qualcuno esterno al team ha imparato qualcosa», «la correzione ha tenuto» e «l'autore non aveva paura». Si trasformino le risposte nella checklist per il campione trimestrale e la si riveda dopo due trimestri.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna scrivono molte revisioni e portano la maggior parte delle azioni, quindi sentono per primi il costo di un processo goffo. Traggono beneficio da modelli brevi, da una regola di innesco chiara e da un collegamento visibile tra un'azione e un elemento del backlog del team. La regolare riflessione del team merita la stessa disciplina di seguito di una revisione di incidente, e un team che completa le azioni della propria retrospettiva pratica la stessa abitudine su scala più piccola. Ci si guardi dal lasciare che le azioni vengano schiacciate dalla pressione delle funzionalità e si porti apertamente questo compromesso al product owner (si veda l'Argomento 2.5 «Metriche di previsione e pianificazione della consegna»).

### Team di servizio e operations

I team operativi custodiscono le evidenze (cronologie, avvisi, log delle chat) e sono nella posizione migliore per etichettare le classi di causa in modo coerente e per accorgersi di una ripetizione prima che diventi un'interruzione. Hanno bisogno di tempo protetto per scrivere, dato che le revisioni scritte alla fine di un lungo turno sono scarne. Si colleghi ogni revisione a qualsiasi record di problema che alimenti (si veda l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»).

### Leadership e governance

I dirigenti danno il tono a ogni revisione con ciò che chiedono dopo. «Chi è stato?» pone fine alle revisioni oneste, e «che cosa abbiamo imparato e che cosa stiamo cambiando?» le invita. Gli organi di governance dovrebbero attendersi copertura, qualità, anzianità delle azioni e ricorrenza nella revisione dell'affidabilità, finanziare le azioni che richiedono investimenti e non confrontare mai i team in base a quanti incidenti o revisioni hanno.

### Clienti e utenti

I clienti raramente vedono la revisione, ma ne sentono il risultato: lo stesso guasto che smette di tornare e un resoconto onesto quando ritorna. Dove i contratti lo consentono, si pubblichi un riepilogo in linguaggio semplice dopo un incidente significativo (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori»). Il contatto ripetuto sullo stesso problema è il segnale, lato cliente, che l'apprendimento non ha attecchito (si veda l'Argomento 6.1 «Metriche di soddisfazione del cliente»).

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni gestisce una vetrina rivolta ai clienti, un servizio di pagamenti e una piattaforma interna di inventario. Cinque team di prodotto sviluppano e gestiscono questi servizi, e un piccolo gruppo di gestione dei servizi mantiene il processo degli incidenti e dei problemi. I numeri di questo esempio sono illustrativi.

In un trimestre il rivenditore ha 41 incidenti nelle due gravità più alte. Gli inneschi scritti li qualificano tutti per una revisione, e 36 revisioni vengono pubblicate entro dieci giorni lavorativi, quindi la copertura delle revisioni è di circa l'88 per cento. La dirigenza è soddisfatta. Il gruppo di gestione dei servizi estrae un campione casuale di otto revisioni, chiede a un team di un'altra area di prodotto di valutarle e scopre che solo tre soddisfano lo standard concordato. La lacuna comune è che la cronologia elenca che cosa è accaduto ma non che cosa le persone sapessero quando hanno preso ciascuna decisione, e la sezione dei fattori concorrenti indica una sola causa.

Lo stesso campione mostra che, delle 74 azioni in scadenza nel trimestre, 51 sono state completate entro la scadenza, con un tasso di chiusura di circa il 69 per cento. L'azione aperta più vecchia, di 210 giorni, è una soglia di avviso di capacità sul database dei pagamenti, rinviata per sei settimane consecutive. L'etichettatura delle cause mostra «limite di capacità» in 9 delle 36 revisioni, 4 delle quali per il servizio di pagamenti. Il sondaggio breve anonimo, a cui hanno risposto 58 delle 70 persone invitate, è più basso nel gruppo di reperibilità, dove diversi commenti dicono che i dirigenti senior pongono domande insistenti su singole persone nominate.

Il team prende tre decisioni. Primo, tengono una breve sessione con i dirigenti senior che partecipano alle revisioni e concordano una regola: le domande in sala riguardano condizioni e decisioni, e qualsiasi seguito su una persona passa attraverso il responsabile del team. Secondo, mettono l'azione di capacità più vecchia in cima al successivo ciclo di pianificazione del team dei pagamenti, con una priorità rispetto al lavoro sulle funzionalità definita dal product owner, e riportano l'esito alla revisione dell'affidabilità. Terzo, aggiungono due elementi della checklist al modello di revisione (che cosa le persone sapevano a ogni decisione e almeno due fattori concorrenti) e conducono una sessione di coaching per chi scrive usando una revisione anonimizzata.

Il rischio di manipolazione compare nel trimestre successivo. La copertura delle revisioni sale al 97 per cento, ma la quota di revisioni sotto le 300 parole raddoppia, e alcuni team hanno declassato degli incidenti dalla gravità due alla tre, appena sotto l'innesco. Il campione di qualità e un audit dei cambi di gravità lo intercettano. Il gruppo chiede perché i declassamenti siano avvenuti, scopre che i team ritenevano la revisione punitiva e allenta l'aspettativa sulla lunghezza per gli eventi piccoli, mantenendo l'innesco della gravità due.

## Lente di settore

**Startup.** Un piccolo team può apprendere rapidamente perché tutti hanno partecipato all'incidente. Il rischio è che nulla venga scritto e la lezione se ne vada con la persona assunta dopo. Si tenga un modello di una pagina, si faccia una revisione per tutto ciò che sveglia qualcuno di notte e si monitorino solo la chiusura delle azioni e le cause ripetute. Si protegga la franchezza facendo leggere le revisioni ai fondatori senza commenti sugli individui.

**Piccola impresa.** La persona che ha risolto il problema è spesso l'unica a comprenderlo. Si usi un modello breve e si riveda ogni mese l'azione aperta più vecchia.

**Grande impresa.** Si standardizzino il modello, l'innesco e l'elenco delle classi di causa, e si lasci ai team la possibilità di adattare la profondità. Si fornisca un luogo ricercabile per le revisioni, un forum tra team e un valutatore esterno. Ci si guardi dalle classifiche dei team per numero di incidenti o di revisioni, poiché puniscono la trasparenza.

**Governo e settore pubblico.** Le revisioni possono essere soggette a obblighi di legge, audit o richieste di accesso agli atti, il che rende gli autori cauti. Si separi la revisione di apprendimento da qualsiasi relazione formale per la vigilanza e si registrino le azioni bloccate con la relativa dipendenza (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

Il costo di questa pratica è soprattutto tempo. Gli autori dedicano ore a ogni revisione e molte persone trascorrono un'ora in una sessione. Un campione trimestrale di qualità richiede alcune ore di un lettore esterno. L'etichettatura delle cause e il monitoraggio delle azioni richiedono un po' di strumenti, che possono essere un foglio di calcolo e un campo negli strumenti di ticket e di backlog esistenti. C'è un costo maggiore e meno visibile nel comportamento della dirigenza, perché il programma fallisce se i dirigenti reagiscono male a revisioni franche.

Il ritorno deriva dalle cause che smettono di ripresentarsi e dagli incidenti che sono più brevi perché il team ha già visto qualcosa di simile. Meno incidenti ripetuti liberano capacità di ingegneria e di operations, riducono le escalation e abbassano il costo dell'interruzione per i clienti. Una libreria condivisa di revisioni accorcia la curva di apprendimento dei nuovi arrivati e riduce la dipendenza da poche persone esperte. Non si citi una percentuale di un'altra organizzazione. Si misuri la propria linea di base per ricorrenza delle cause, anzianità delle azioni aperte e contatti ripetuti prima di iniziare, e si confronti dopo due o tre trimestri.

Il limite onesto è che l'apprendimento è difficile da attribuire: un calo della ricorrenza può derivare da una revisione migliore, da una modifica di architettura non correlata o dalla fortuna. Per una trattazione più ampia si veda l'Argomento 7.7 «Ritorno sull'investimento e business case».

## Anti-pattern e insidie

- **Teatro delle revisioni.** Le revisioni soddisfano una regola e nessuno le legge. Al contrario, si campionino e si leggano le revisioni e le si giudichi in base al cambiamento che hanno prodotto.
- **Una ricerca della causa radice come persona.** La revisione indica un errore individuale e si ferma. Al contrario, ci si chieda che cosa abbia reso probabile l'errore e si elenchino più fattori concorrenti.
- **Inflazione delle azioni.** Le revisioni producono lunghi elenchi che il team non può finanziare. Al contrario, si limiti ogni revisione a poche azioni ordinate per priorità e si rifiutino le altre con una motivazione.
- **Azioni fuori dal backlog.** Vivono in un documento e non vengono mai pianificate. Al contrario, si creino elementi di lavoro nel tracker del team responsabile e li si colleghi alla revisione.
- **Chiusura senza verifica.** L'azione viene contrassegnata come fatta e la causa ritorna. Al contrario, un revisore confermi che la modifica funziona e si osservi la classe di causa per rilevare la ricorrenza.
- **Usare i conteggi per confrontare i team.** Un team con più revisioni o quasi incidenti appare peggiore. Al contrario, si legga un conteggio alto come apertura e si confronti ciascun team con la propria storia.
- **Punire chi porta la notizia.** Un dirigente interroga una persona dopo una revisione franca. Al contrario, si concordi una norma su come rispondono i dirigenti e si controlli il sondaggio breve dopo gli incidenti difficili.
- **Trattare le metriche come prova di apprendimento.** Una dashboard pulita viene presa come evidenza che l'organizzazione sta apprendendo. Al contrario, si continui a leggere un campione di revisioni e a interrogare le persone che le hanno scritte.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Inneschi e copertura | Le revisioni dipendono da chi è disponibile e da quanto è sembrato grave | Alcuni team tengono revisioni per gli incidenti gravi | Inneschi scritti e modello comune; copertura contata per gravità | Copertura analizzata nel tempo e verificata rispetto ai declassamenti; percorsi leggero e completo | Inneschi adattati con clienti e fornitori; revisioni condivise per incidenti congiunti |
| Qualità e onestà | Le revisioni nominano una persona o una causa unica | Alcuni team scrivono revisioni senza colpa | Checklist standard; linguaggio senza colpa atteso | Campione trimestrale esterno; sondaggio breve rivisto; coaching per chi scrive | Revisioni scritte insieme a fornitori e utenti; la lettura tra team è routine |
| Azioni e ricorrenza | Le azioni vivono nei documenti e raramente vengono completate | Azioni tracciate da alcuni team; la chiusura varia | Azioni nel backlog reale con responsabili, date e rifiuto onesto | Chiusura, anzianità e ricorrenza delle cause riviste, con miglioramento finanziato | Azioni coordinate tra team e fornitori; classi di causa riviste al mutare degli schemi |
| Condivisione e apprendimento | Le lezioni restano nel team | Revisioni pubblicate per il team | Revisioni ricercabili e condivise in un forum regolare | Portata misurata; i team dipendenti riportano i cambiamenti effettuati | L'apprendimento fluisce verso progettazione, onboarding e contratti con i fornitori |

## Checklist

- [ ] Inneschi scritti stabiliscono quali eventi ricevono una revisione, compresi i quasi incidenti di alto valore di apprendimento.
- [ ] Esiste un breve modello, con un percorso leggero per gli eventi piccoli.
- [ ] Le revisioni sono senza colpa per modello e per comportamento della dirigenza.
- [ ] Ogni azione è un elemento di lavoro nel backlog del team responsabile, con un responsabile e una data.
- [ ] Le azioni possono essere rifiutate, e la motivazione è registrata e riportata.
- [ ] Esiste un breve elenco di classi di causa, e ogni revisione è etichettata.
- [ ] Un lettore esterno valuta ogni trimestre un campione casuale di revisioni.
- [ ] Le azioni aperte più vecchie sono riviste insieme all'affidabilità del servizio.
- [ ] L'anzianità delle azioni aperte è riportata come mediana, percentile alto e più vecchia.
- [ ] Esiste un percorso per i quasi incidenti, e il team sa che cosa accade dopo una segnalazione.
- [ ] Nessuna metrica di questo argomento è riportata o usata per persona.
- [ ] Un sondaggio breve sulla libertà di parola viene condotto solo per gruppi abbastanza grandi da proteggere l'anonimato.

## Prompt IA

**Rivedere la qualità di una bozza di postmortem.**

```text
Ecco una bozza di postmortem per [descrizione dell'incidente] sul servizio
[servizio]. La verifichi rispetto a questo standard: [incollare la propria
checklist di revisione]. Per ogni elemento, dica se la bozza lo soddisfa,
citi le righe che sostengono il suo giudizio e indichi il linguaggio che
attribuisce la colpa a una persona anziché descrivere condizioni. Non aggiunga
fatti che non sono nel testo. Elenchi le sue ipotesi e tutto ciò che non ha
potuto giudicare in base a quanto fornito.

[incollare la bozza, con i dati personali rimossi]
```

**Proporre classi di causa a partire da revisioni passate.**

```text
Di seguito i riepiloghi di [numero] revisioni passate per [servizio o gruppo di
servizi]. Proponga un breve elenco di classi di causa, tra [minimo] e
[massimo], che descrivano condizioni del sistema e mai persone. Per ogni classe
fornisca una definizione di una riga, le revisioni che vi rientrano e le
revisioni ambigue. Non inventi cause che non siano supportate dal testo.
Elenchi le sue ipotesi e le revisioni che non ha potuto classificare.

[incollare i riepiloghi]
```

**Analizzare le azioni aperte per individuare schemi di stallo.**

```text
Ecco un'esportazione delle azioni delle revisioni per [team o servizio]: team
responsabile, data di creazione, data di scadenza, stato e una descrizione di
una riga. Riporti la mediana, l'85° percentile e l'anzianità massima delle
azioni aperte, quindi raggruppi le azioni più vecchie per probabile motivo di
stallo (per esempio ambito poco chiaro, dipendenza da un altro team, nessuna
capacità o scarso valore). Riporti gli schemi per team e per servizio, mai per
persona. Non ipotizzi motivi che i dati non supportano. Elenchi le sue ipotesi
e i campi aggiuntivi che sarebbero utili.

[incollare l'esportazione con i dati personali rimossi]
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare l'argomento corrispondente, le definizioni e la contromisura abbinata per una metrica di revisione o di apprendimento che si sta per riportare.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una metrica di apprendimento rivista riporti ancora i propri orologi, il vettore di manipolazione e la contromisura.

## Punti chiave

- Una revisione vale ciò che cambia, quindi si misurino copertura, qualità, chiusura delle azioni e ricorrenza delle cause, e si legga un campione delle revisioni stesse.
- L'assenza di colpa è la precondizione per dati onesti, e i dirigenti la proteggono con il modo in cui rispondono a una revisione franca.
- Si mettano le azioni nel backlog reale, se ne limiti il numero, si ammetta un rifiuto onesto e si osservi l'anzianità delle più vecchie.
- Si etichettino le revisioni con un breve elenco di classi di causa, in modo che le cause ripetute diventino visibili e alimentino la gestione dei problemi.
- Si legga un conteggio crescente di quasi incidenti come segno di apertura all'inizio, e non si classifichino mai persone o team in base al volume delle revisioni.
- Si abbini ogni numero qui riportato a una contromisura, perché il ciclo di apprendimento è esso stesso un obiettivo che può essere manipolato.

## Riferimenti e letture di approfondimento

1. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 44(2), 1999.
4. Dekker, S., *The Field Guide to Understanding 'Human Error'*, Ashgate, 2006.
5. Reason, J., *Human Error*, Cambridge University Press, 1990.
6. Derby, E., and Larsen, D., *Agile Retrospectives: Making Good Teams Great*, Pragmatic Bookshelf, 2006.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Just culture](https://en.wikipedia.org/wiki/Just_culture).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
15. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
16. Wikipedia, [Hindsight bias](https://en.wikipedia.org/wiki/Hindsight_bias).
17. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
18. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
