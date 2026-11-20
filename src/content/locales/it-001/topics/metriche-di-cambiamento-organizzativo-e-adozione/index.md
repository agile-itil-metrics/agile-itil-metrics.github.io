# Metriche di cambiamento organizzativo e adozione

**Un cambiamento si è radicato quando le persone fanno la cosa nuova per le ragioni per cui andava fatta e il risultato migliora: misurate lo scopo e l'effetto, non la presenza di rituali, e mantenete il ritmo del cambiamento a un livello che le persone possano sostenere.**

## Panoramica e motivazione

Le organizzazioni adottano di continuo nuovi modi di lavorare: un nuovo processo di gestione dei servizi, una pipeline di consegna, una diversa struttura dei team, un insieme di pratiche agili, un framework per gli incidenti. Gli annunci sono facili. La vera domanda è che cosa cambi nel comportamento quotidiano, e ciò che conta è se ne sia seguito il beneficio atteso. Molti programmi dichiarano successo perché la formazione è stata erogata, gli strumenti sono stati installati e il nuovo vocabolario è in uso, mentre il lavoro appare identico e i risultati non si sono mossi.

I principi del Manifesto Agile affermano che le migliori architetture, i migliori requisiti e le migliori progettazioni emergono da team che si autorganizzano, e che i cambiamenti dei requisiti sono benvenuti. Affermano inoltre di costruire i progetti attorno a individui motivati e di fidarsi di loro, e di mantenere un ritmo costante a tempo indeterminato. Questi principi sono un argomento permanente contro l'imposizione di pratiche dall'alto e la misurazione della conformità. Indicano un approccio diverso al cambiamento: coinvolgere le persone con continuità, lasciare evolvere il modo di lavorare e giudicarlo dai risultati.

Un'idea di monito che viene dalla cultura del software è quella del culto del cargo. Il [cargo cult programming](https://en.wikipedia.org/wiki/Cargo_cult_programming) descrive l'inclusione rituale di codice o di pratiche prive di scopo, copiate da altrove senza comprenderle. L'intervento di Richard Feynman sulla «scienza del culto del cargo» usò un'immagine affine per descrivere un lavoro che ha la forma esteriore di quello vero senza la sua sostanza. Applicato ai modi di lavorare, il culto del cargo è il team che tiene tutte le riunioni, usa tutti i termini e compila tutte le bacheche, e non consegna in modo continuo, non collabora con i propri stakeholder e non migliora. Un approccio da [culto del cargo](https://en.wikipedia.org/wiki/Cargo_cult) confonde la forma di una pratica con il suo scopo. Le metriche di questo argomento sono pensate per distinguere le due cose.

Diverse idee dallo studio del cambiamento aiutano.

- **Il cambiamento è un problema di [cambiamento organizzativo](https://en.wikipedia.org/wiki/Organizational_change) quanto tecnico.** La [gestione del cambiamento](https://en.wikipedia.org/wiki/Change_management) affronta il lato umano: consapevolezza, desiderio, conoscenza, capacità e rinforzo sono tra gli elementi comunemente usati. Modelli come gli otto passi di John Kotter e l'ADKAR di Prosci offrono vocabolari, e nessuno di essi è una garanzia.
- **Le persone spesso resistono al cambiamento per ragioni valide.** La [resistenza al cambiamento](https://en.wikipedia.org/wiki/Resistance_to_change) può segnalare un vero problema della proposta, una minaccia a qualcosa che le persone apprezzano o stanchezza. Trattatela come informazione.
- **L'adozione è un processo nel tempo.** La teoria della [diffusione delle innovazioni](https://en.wikipedia.org/wiki/Diffusion_of_innovations) descrive come le nuove pratiche si diffondono in un sistema sociale, dai primi adottanti alla maggioranza, attraverso influenza e osservazione.
- **La cultura plasma ciò che si radica.** La [cultura organizzativa](https://en.wikipedia.org/wiki/Organizational_culture), l'insieme di assunzioni e comportamenti condivisi di un gruppo, determina quali cambiamenti appaiono naturali e quali vengono rifiutati.
- **L'osservazione cambia il comportamento.** L'[effetto Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) è la tendenza delle persone a modificare il proprio comportamento perché osservate. Un progetto pilota che mostra un ottimo risultato sotto stretta attenzione può non reggere su scala più ampia.

La salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) è particolarmente rilevante per la trasformazione: quando l'adozione è un obiettivo, i team adottano la forma. Una dashboard dei «team che usano il nuovo processo», con un mandato alle spalle, mostrerà alta adozione e scarso cambiamento (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»). Questo argomento riunisce le misure precedenti dei risultati (si veda l'Argomento 6.5 «Realizzazione del valore e risultati di business») e del miglioramento (si veda l'Argomento 9.5 «Metriche di miglioramento continuo») come prova che un cambiamento ha funzionato.

## Principi chiave

- **Giudicate un cambiamento dal suo risultato, non dai suoi rituali.** La prova dell'adozione è un risultato migliore.
- **Rendete esplicito lo scopo di ogni pratica.** Se nessuno sa dire perché, è un candidato al culto del cargo.
- **Coinvolgete continuamente le persone interessate.** Progettate con loro, non per loro.
- **Preferite l'adozione volontaria e l'evoluzione ai mandati.** I team adattano le pratiche al proprio contesto.
- **Limitate il carico di cambiamento.** Le persone possono assorbire solo una certa quantità, e un ritmo costante include il cambiamento.
- **Trattate la resistenza come dato.** Ascoltate ciò che dice della proposta.
- **Confrontate con onestà.** Usate gruppi di confronto e diffidate dei risultati che compaiono solo sotto osservazione.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chiarezza dello scopo | Quota di membri del team che sanno enunciare con parole proprie lo scopo di una pratica e un modo per capire se funziona | membri che indicano uno scopo e un indicatore chiari in una breve verifica anonima / membri interpellati, a livello di team | percentuale | Breve verifica anonima, aggregata per team | Gestione del cambiamento organizzativo; miglioramento continuo | Comprensione da parte del team del perché si lavora così | Trimestrale |
| Ampiezza di adozione della pratica | Quota di team che usano una pratica definita, in base al comportamento osservabile e non alla presenza | team che mostrano il comportamento definito nell'ultimo periodo, confermato dal team e da un osservatore / team nell'ambito | percentuale | Autovalutazione del team confermata dall'osservazione | Gestione del cambiamento organizzativo | Diffusione di una pratica | Trimestrale |
| Movimento dei risultati rispetto al confronto | Variazione di una misura di risultato per i team che adottano rispetto a team simili che non adottano, nello stesso periodo | variazione del risultato per chi adotta meno variazione per i team di confronto | unità del risultato | Misure di risultato per team (flusso, stabilità, esperienza) | Miglioramento continuo; misurazione e rendicontazione | Apprendimento dagli esperimenti | Trimestrale |
| Carico di cambiamento | Numero di cambiamenti significativi che interessano contemporaneamente un team | conteggio delle iniziative di cambiamento significative che chiedono a un team di cambiare il proprio modo di lavorare nel periodo, per team | conteggio | Portafoglio dei cambiamenti e contributo dei team | Gestione del cambiamento organizzativo; abilitazione delle modifiche | Ritmo sostenibile | Trimestrale |
| Tasso di coinvolgimento degli stakeholder | Quota di iniziative di cambiamento in cui le persone interessate hanno partecipato a progettazione e revisione | iniziative con coinvolgimento registrato delle persone interessate / iniziative | percentuale | Registrazioni delle iniziative e conferma dei team interessati | Gestione del cambiamento organizzativo; coinvolgimento degli stakeholder | Coinvolgimento continuo degli stakeholder | Trimestrale |
| Quota di adozione volontaria | Quota di team che adottano e che hanno scelto la pratica, anziché esservi stati indirizzati | team adottanti che riferiscono di aver scelto la pratica / team adottanti | percentuale | Resoconti dei team | Gestione del cambiamento organizzativo | Team autorganizzati | Annuale |
| Tasso di regressione | Quota di team che hanno abbandonato una pratica entro un anno dalla sua adozione | team che hanno smesso entro 12 mesi / team che hanno adottato | percentuale | Registrazioni dei team nel tempo | Gestione del cambiamento organizzativo; miglioramento continuo | Pratiche abbandonate perché inutili | Annuale |

Definite la pratica in base a ciò che i team fanno e intendono, non al suo nome. L'ampiezza di adozione conta un team solo quando il suo comportamento corrisponde alla definizione e il team e un osservatore concordano. Il movimento dei risultati usa team di confronto scelti in anticipo come simili per tipo di servizio e punto di partenza e indica che altro è cambiato. Il carico di cambiamento conta le iniziative che chiedono al team di alterare il proprio lavoro, non gli aggiornamenti di routine. Tutte le misure sono a livello di team o di iniziativa, mai individuali.

## Raccomandazioni

### Partite da scopo e persone

**1. Indicate lo scopo e l'indicatore prima della pratica.** Per ogni cambiamento proposto, scrivete quale problema risolve, chi lo sente, quale risultato dovrebbe migliorare e come lo capirete. Se lo scopo è «essere agili» o «adottare il framework», chiedete di nuovo. I team seguiranno una pratica più volentieri quando vedono a che cosa serve. È la migliore protezione dal culto del cargo.

**2. Coinvolgete le persone interessate nella progettazione del cambiamento.** Chiedete a chi svolge il lavoro che cosa fa male, che cosa proverebbe e che cosa teme. Progettate con alcuni di loro, sperimentate con un piccolo gruppo e ascoltate. Il coinvolgimento continuo degli stakeholder è uno scopo agile fondamentale, e si applica ai programmi di cambiamento quanto ai prodotti. Registrate chi ha partecipato.

**3. Ascoltate la resistenza.** Quando le persone si oppongono, chiedete che cosa vedono che voi non vedete. Le possibili risposte includono un difetto della proposta, una capacità mancante, un costo non riconosciuto o un cambiamento precedente mai portato a termine. Registrate le preoccupazioni e le risposte e adattate il cambiamento dove hanno ragione.

### Introducete il cambiamento in modo da poterne imparare

**4. Fate un pilota con un confronto.** Provate il cambiamento con uno o due team disponibili e osservate un gruppo comparabile che non cambia. Confrontate i risultati nello stesso periodo. Tenete presente l'effetto Hawthorne ed estendete il pilota abbastanza a lungo perché la novità si attenui. Un [progetto pilota](https://en.wikipedia.org/wiki/Pilot_project) è una prova su piccola scala, e il suo valore sta in ciò che insegna prima di estendere, quindi indicate in anticipo che cosa sperate di imparare e che cosa vi farebbe fermare.

**5. Preferite l'adozione volontaria e lasciate evolvere le pratiche.** Quando i team scelgono una pratica perché risolve un problema per loro, la adattano e la mantengono. Quando è imposta, la mettono in scena. Offrite lo scopo, le evidenze e il sostegno, e lasciate che i team decidano come applicarla. Consentite variazioni locali e imparatene. Monitorate adozione volontaria e regressione per vedere se una pratica si sta consolidando per le ragioni giuste.

**6. Diffondete con l'esempio e la conversazione.** L'influenza viaggia attraverso persone rispettate e visibili. Condividete storie di team che hanno provato qualcosa e di che cosa è successo, compresi i contrattempi. Le comunità di pratica sono un buon canale (si veda l'Argomento 9.4 «Metriche di competenze e apprendimento»). Evitate le classifiche di adozione.

### Tenete d'occhio il carico

**7. Contate i cambiamenti che si abbattono su ciascun team.** Elencate le iniziative che chiedono a un team di cambiare il proprio modo di lavorare: nuovi strumenti, nuovi processi, riorganizzazioni, requisiti di rendicontazione. Un team che ne affronta molte insieme non può assorbirle, e subentra la [stanchezza da cambiamento](https://en.wikipedia.org/wiki/Change_fatigue). Mettete in sequenza le iniziative, abbandonate quelle di poco valore e lasciate ai team il tempo di concludere un cambiamento prima del successivo. Fa parte del mantenere un ritmo sostenibile (si veda l'Argomento 9.2 «Metriche di soddisfazione e benessere»).

**8. Ritirate ciò che non serve più.** Per ogni nuova pratica aggiunta, chiedetevi che cosa si può togliere. Gli strati di processo si accumulano, e ogni strato ha un costo. Riesaminate ogni trimestre i rituali che un team svolge e abbandonate quelli il cui scopo non è più servito.

### Misurate l'adozione per ciò che conta

**9. Definite l'adozione in base al comportamento osservabile e allo scopo.** Descrivete che cosa un team fa di diverso quando la pratica si è radicata, ad esempio «le modifiche arrivano in produzione a piccoli passi con controlli automatici, e gli utenti vengono consultati ogni settimana». Valutate con osservazione e conversazione, non contando manufatti come bacheche o riunioni. Chiedete ai membri del team di spiegare lo scopo.

**10. Confrontate i risultati, non la conformità.** Osservate le misure di flusso, stabilità, esperienza e costo dei team che adottano rispetto ai team di confronto (si veda l'Argomento 2.8 «Metriche DORA»). Prestate attenzione alla causalità: i team che adottano possono essere diversi in modi che influiscono anch'essi sui risultati. Riferite il confronto con i suoi limiti.

**11. Verificate l'esperienza delle persone.** Un'adozione che aumenta l'attrito o erode l'autonomia può minare se stessa. Usate i sondaggi rapidi su salute del team e benessere per vedere come viene vissuto il cambiamento (si veda l'Argomento 9.1 «Salute del team ed esperienza degli sviluppatori»). Chiedete che cosa il cambiamento ha tolto, oltre a ciò che ha aggiunto.

**12. Siate onesti nella rendicontazione.** Riferite insieme adozione, risultati, carico di cambiamento e regressioni, con il racconto di ciò che si è imparato. Evitate di dichiarare successo quando la forma si è diffusa e i risultati non si sono mossi. Ammettete quando una pratica non era adatta e ritiratela. Una trasformazione si giudica da ciò che ha reso possibile, non da quanto ampiamente è stata annunciata.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Chiarezza dello scopo | Addestrare le persone a recitare lo scopo; porre domande tendenziose | Verifica anonima; chiedere un esempio di come si capirebbe; confrontare con il movimento dei risultati |
| Ampiezza di adozione della pratica | Contare bacheche e riunioni; team che recitano per l'osservatore | Definire in base a comportamento e scopo; osservazione da parte di qualcuno esterno al team; movimento dei risultati |
| Movimento dei risultati rispetto al confronto | Scegliere un gruppo o un periodo di confronto favorevole; omettere altri cambiamenti | Scegliere in anticipo confronto e periodo; elencare gli altri cambiamenti; mostrare l'incertezza |
| Carico di cambiamento | Suddividere un'iniziativa in piccoli pezzi; non contare i cambiamenti che arrivano in modo informale | Contare in base all'effetto sul lavoro del team; chiedere ai team di elencare ciò che stanno assorbendo |
| Tasso di coinvolgimento degli stakeholder | Invitare le persone a un briefing e chiamarlo coinvolgimento; registrare solo la presenza | Conferma dei team interessati di aver influito sulla progettazione; registrare le modifiche apportate in risposta |
| Quota di adozione volontaria | Presentare un mandato come una scelta; team che dicono di aver scelto quando si sono sentiti obbligati | Resoconto anonimo; chiedere che cosa sarebbe successo se avessero rifiutato |
| Tasso di regressione | Rendere costoso o nascosto l'abbandono di una pratica; rinominare la pratica abbandonata | Riesaminare i motivi dell'abbandono; consentire un ritiro sicuro |

Una lettura sana mostra una pratica che i team sanno spiegare e scegliere, un'adozione misurata dal comportamento, risultati che migliorano rispetto al confronto, un carico di cambiamento gestibile, poche regressioni con buoni motivi e persone che dicono che la propria voce ha plasmato il cambiamento.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Estensione imposta | Rapida, coerente | Conformità senza scopo; risentimento; culto del cargo |
| Adozione volontaria | Adottanti motivati; adattamento locale | Più lenta; disomogenea; alcuni team non adottano mai |
| Cambiamento «big bang» | Evento chiaro | Rischio alto; carico pesante; difficile da cui imparare |
| Piloti a stadi con confronto | Si impara prima di estendere | Più lenti; i piloti possono non generalizzare |
| Pratiche standard tra i team | Coordinamento e supporto più semplici | Adattamento scarso per alcuni team |
| Variazione locale | Adattamento al contesto | Più difficile da confrontare e supportare |
| Dashboard di adozione | Progresso visibile | Premiano la forma dell'adozione |
| Confronto dei risultati | Segnale onesto | Difficile da isolare; più lento a manifestarsi |

La risposta pratica è fare piloti con confronto, offrire le pratiche con i loro scopi, lasciare che i team scelgano e adattino, contare il carico di cambiamento e giudicare dai risultati, usando uno standard solo dove il coordinamento lo richiede.

## Domande da discutere con il team

**1. Quale pratica seguiamo di cui nessuno sa spiegare lo scopo?**
Ciascuno ne nomina una. Per ognuna, discutete quale problema doveva risolvere e se lo risolve ancora. Il facilitatore dovrebbe registrare le risposte senza mettersi sulla difensiva. Concordate di mantenerne, cambiarne o abbandonarne due.

**2. Quali cambiamenti ci stanno investendo adesso e quali potrebbero attendere?**
Elencate ogni iniziativa che ci chiede di cambiare il modo di lavorare. Contatele. Chiedetevi quali aggiungono valore e quali aggiungono carico. Proponete agli sponsor una sequenza o l'arresto di una di esse.

**3. A che cosa abbiamo detto di no nell'ultimo cambiamento e qualcuno ha ascoltato?**
Ricordate la resistenza o le preoccupazioni. Sono state ascoltate e il cambiamento si è adattato? Discutete come sollevare le preoccupazioni in modo che vengano recepite. Concordate come il team darà feedback sul prossimo cambiamento.

**4. Se questo cambiamento ha funzionato, che cosa sarebbe diverso nei nostri risultati e come lo capiremmo?**
Redigete l'indicatore e il confronto. Chiedetevi che altro sta cambiando nello stesso momento. Se nessuno sa dirlo, al cambiamento manca uno scopo. Concordate subito una base di riferimento.

**5. Come capiremmo se una nuova pratica fosse solo di facciata?**
Pensate ai segni: nessuno usa il prodotto, la riunione non produce decisioni, la bacheca viene aggiornata per un pubblico. Discutete come verificarli. Concordate un momento per riesaminare i rituali che il team svolge.

**6. Quale pratica abbiamo abbandonato e che cosa abbiamo imparato abbandonandola?**
Ricordatene una. Discutete se fosse sicuro abbandonarla e che cosa l'ha sostituita. Trattate la risposta come prova che i team possono adattarsi.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna vivono con i cambiamenti. Dovrebbero chiedere lo scopo, partecipare alla progettazione, condurre piccoli esperimenti e dire quando una pratica non si adatta. Hanno il diritto di far evolvere il proprio modo di lavorare e il dovere di consegnare risultati che giustifichino le proprie scelte.

### Team di servizio e operations

I team operativi assorbono cambiamenti di processo da molte direzioni, spesso in aggiunta al lavoro non pianificato. Dovrebbero registrare il carico di cambiamento, chiedere una sequenza e unirsi ai piloti in cui il loro punto di vista conta. Sono ben posizionati per accorgersi quando un nuovo processo aggiunge passaggi senza valore.

### Leadership e governance

I dirigenti sponsorizzano i cambiamenti e spesso li impongono. Dovrebbero indicare scopi e indicatori, coinvolgere le persone interessate, preferire l'adozione volontaria dove possibile, limitare il carico di cambiamento ed essere pronti a ritirare ciò che non funziona. La governance dovrebbe guardare ai risultati rispetto al confronto, al carico di cambiamento per team e ai tassi di regressione, e diffidare di dati di adozione uniformemente alti.

### Clienti e utenti

Gli utenti sperimentano gli effetti del cambiamento nella qualità del servizio, nella comunicazione e nella stabilità. Possono essere coinvolti nella progettazione dei cambiamenti che li riguardano, e il loro feedback è prova del fatto che il cambiamento abbia aiutato. Sostengono anche il costo delle trasformazioni che distraggono i team dal servizio.

## In pratica: un esempio di ITIL agile

La divisione tecnologica di un'azienda logistica multinazionale ha 30 team. Due anni fa ha avviato un programma di trasformazione per adottare un insieme standard di modi di lavorare, e la dashboard del programma mostra 27 team su 30 «adottanti». I numeri che seguono sono illustrativi.

Alla nuova responsabile delle pratiche di ingegneria viene chiesto se il programma abbia funzionato. Guarda oltre la dashboard. Una breve verifica anonima mostra che solo il 41 per cento dei membri dei team sa enunciare lo scopo delle pratiche principali e un modo per capire se funzionano. L'osservazione di otto team mostra che cinque tengono le riunioni prescritte e aggiornano le bacheche, e due di questi cinque rilasciano ancora ogni trimestre con approvazione manuale. Confrontando i 12 team con il comportamento di pratica più marcato con 12 team simili che non lo avevano, il cycle time mediano e il tasso di fallimento delle modifiche sono simili, e la soddisfazione per il modo di lavorare è inferiore tra i team sotto la conformità più forte. Il team medio sta assorbendo cinque iniziative che gli chiedono di cambiare il proprio modo di lavorare, con tre team che ne affrontano otto o più. Il 22 per cento dei team ha adottato volontariamente. Dei team che due anni fa hanno adottato una pratica di pipeline, il 30 per cento ha smesso silenziosamente.

La responsabile delle pratiche di ingegneria ridefinisce il programma con i team. Lo scopo di ciascuna pratica viene scritto in linguaggio semplice con un indicatore, e i team sono liberi di adottare, adattare o rifiutare, con una conversazione sul perché. La divisione pubblica il carico di cambiamento per team e chiede agli sponsor di mettere in sequenza le proprie iniziative; quattro vengono sospese e due unite. I team disponibili sperimentano in un pilota una pratica di rilascio a piccoli passi con controlli automatici, con un gruppo di confronto scelto in anticipo, e i risultati vengono condivisi come storie e numeri. Gli stakeholder del business e delle operazioni partecipano alle sessioni di progettazione di due cambiamenti di processo. La rendicontazione passa dai conteggi di adozione a movimento dei risultati, carico di cambiamento e regressione.

Un anno dopo, il 71 per cento dei membri dei team sa enunciare lo scopo delle pratiche che usa. I team pilota riducono il cycle time mediano del 30 per cento contro una riduzione del 6 per cento nel gruppo di confronto, con l'effetto Hawthorne considerato estendendo il pilota di altri due mesi. Il carico medio di cambiamento scende a tre iniziative per team. L'adozione volontaria sale al 64 per cento e le regressioni sono il 9 per cento, con i motivi registrati. Il direttore operativo chiede un obiettivo di adozione del 100 per cento entro fine anno. La responsabile delle pratiche di ingegneria propone di monitorare invece risultati e carico, spiegando che un 100 per cento imposto ha prodotto l'apparenza di successo e la regressione precedenti. La decisione viene registrata e la dashboard abbandona il conteggio delle adozioni.

## Lente di settore

**Startup.** Il cambiamento è costante e le pratiche vengono dai fondatori e dai primi assunti. Mantenete esplicito lo scopo di ogni pratica e abbandonate tutto ciò che non aiuta. Resistete alla tentazione di copiare il processo di una grande azienda prima di avere i suoi problemi.

**Piccola impresa.** Spesso decide il titolare, e il cambiamento è personale. Spiegate perché, coinvolgete le poche persone interessate, provate un cambiamento alla volta e verificate se il disagio che prende di mira si è attenuato. Evitate acquisti di framework che superano la capacità del team di assorbirli.

**Grande impresa.** La scala invita a standard, programmi e consulenti, e con essi al rischio di culto del cargo su larga scala. Offrite pratiche condivise con i loro scopi, sostenete l'adozione volontaria, gestite il portafoglio dei cambiamenti in base al carico dei team e confrontate i risultati con onestà. Usate le comunità di pratica per diffondere ciò che funziona.

**Pubblica amministrazione e settore pubblico.** Il cambiamento può essere guidato da legislazione, ristrutturazioni e cicli politici, con una scelta limitata. Dove la scelta è limitata, siate trasparenti, concentratevi sullo scopo e sul risultato e coinvolgete presto personale e utenti. Possono applicarsi tutele del personale e doveri di consultazione, e la responsabilità pubblica rende prezioso riferire con onestà ciò che non ha funzionato (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi di misurare bene il cambiamento sono modesti: brevi verifiche, dati di confronto da misure esistenti, tempo di osservazione e un elenco delle iniziative per team. Il costo maggiore è la disponibilità a sentirsi dire che un programma prediletto non funziona.

I ritorni derivano dal non sprecare il costo molto elevato delle trasformazioni fallite: formazione, consulenza, strumenti e tempo di molte persone, oltre al costo della stanchezza da cambiamento e della fiducia perduta. Costruite il caso dalla vostra storia: il costo di un programma passato e quali risultati ha mosso, il numero di iniziative che si contendono ciascun team e la proporzione di pratiche adottate poi abbandonate. Evitate di citare statistiche sui tassi di fallimento delle trasformazioni a meno che possiate ricostruirne fonte e metodo. Includete il beneficio di una correzione di rotta più precoce grazie a piloti con confronto (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Riferire l'adozione come successo.** La forma può diffondersi senza sostanza. Riferite i risultati rispetto al confronto.
- **Imporre le pratiche.** Produce rituale e risentimento. Offrite gli scopi e lasciate scegliere ai team.
- **Copiare il processo di un'altra azienda.** Importa la forma, non le condizioni che l'hanno fatto funzionare. Partite dai vostri problemi.
- **Troppi cambiamenti insieme.** Il carico supera la capacità. Contate e mettete in sequenza.
- **Liquidare la resistenza.** Si perdono informazioni. Ascoltate e adattatevi.
- **Piloti senza confronto.** Gli effetti di novità fuorviano. Usate un confronto e un periodo più lungo.
- **Non ritirare mai nulla.** Gli strati di processo si accumulano. Togliete mentre aggiungete.
- **Teatro del successo.** Storie senza numeri, o numeri senza storie, nascondono la verità. Riferite entrambi, con onestà.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Scopo e coinvolgimento | Pratiche annunciate | Scopi enunciati in presentazioni | Scopo e indicatore scritti per ogni cambiamento; persone interessate consultate | Coinvolgimento e chiarezza dello scopo misurati; resistenza registrata e riscontrata | Cambiamento co-progettato con utenti e team in tutta l'organizzazione e con i partner |
| Introduzione ed evidenze | Estensioni «big bang» | Piloti senza confronto | Piloti con gruppi di confronto; adozione definita dal comportamento | Movimento dei risultati e regressione monitorati; limiti delle evidenze riferiti | Apprendimento a livello di portafoglio su quali cambiamenti funzionano, condiviso apertamente |
| Carico e sostenibilità | Nessuna visione del carico di cambiamento | Iniziative elencate | Carico di cambiamento contato per team e messo in sequenza | Carico gestito rispetto alla capacità; pratiche ritirate | Cambiamento pianificato congiuntamente con capacità, benessere e obiettivi di consegna |

## Checklist

- [ ] Ogni cambiamento ha uno scopo scritto, un indicatore indicato e una base di riferimento.
- [ ] Le persone interessate hanno partecipato alla progettazione e il loro contributo è registrato.
- [ ] Preoccupazioni e resistenza sono registrate con le risposte.
- [ ] I piloti hanno un gruppo di confronto e un periodo abbastanza lungo perché la novità si attenui.
- [ ] L'adozione è definita dal comportamento osservabile e dallo scopo.
- [ ] Adozione volontaria e regressione sono monitorate, con i motivi.
- [ ] Il carico di cambiamento per team è contato e le iniziative sono messe in sequenza.
- [ ] Le pratiche sono riesaminate ai fini di una rimozione almeno ogni anno.
- [ ] Il movimento dei risultati è riferito con i suoi limiti.
- [ ] Nessun obiettivo richiede che una data percentuale di team adotti una pratica.

## Prompt IA

**Scrivere uno scopo e un indicatore per un cambiamento.**

```text
Prevediamo di introdurre [cambiamento] per [team] in [tipo di organizzazione].
Redigi uno scopo di un paragrafo in linguaggio semplice (il problema, chi lo
sente, il risultato che dovrebbe migliorare), un indicatore con una base di
riferimento da registrare ora, un modo per confrontare con team simili che non
cambiano e i segni che la pratica è diventata un rituale senza scopo. Non
inventare evidenze. Elenca le tue ipotesi e le domande per i team interessati.
```

**Contare e mettere in sequenza il carico di cambiamento.**

```text
Ecco un elenco di iniziative che chiederanno a [team o gruppo] di cambiare il
proprio modo di lavorare nel prossimo [periodo]: [incolla con sponsor,
dimensione e date]. Conta il carico per team, individua conflitti e
dipendenze e proponi una sequenza che lasci spazio al lavoro e a un ritmo
sostenibile. Suggerisci quali potrebbero essere combinate, rinviate o
abbandonate. Non presumere che possiamo fare tutto. Elenca le tue ipotesi.
```

**Progettare un pilota con un confronto.**

```text
Progetta un pilota di [cambiamento] con [numero] team disponibili e un gruppo di
confronto di [numero] team simili. Proponi le misure di risultato e le basi di
riferimento, la durata (incluso il tempo perché la novità si attenui), come
scegliere in anticipo il gruppo di confronto, che cos'altro potrebbe
confondere il risultato e che cosa ci porterebbe a estendere, adattare o
fermarci. Non dichiarare risultati di altre organizzazioni. Elenca le tue
ipotesi.
```

**Verificare il culto del cargo.**

```text
Ecco una pratica che i nostri team seguono: [descrivi, con i suoi manufatti e
le sue riunioni]. Poni dieci domande che potrei rivolgere ai membri del team
per vedere se comprendono lo scopo, sanno indicare il risultato che dovrebbe
migliorare e la adatterebbero al proprio contesto. Aggiungi i segni nei
manufatti che suggeriscono che la pratica viene eseguita per mostra. Non
giudicare i singoli. Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di adozione o di cambiamento.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica di adozione misuri comportamento e risultato, con il proprio vettore di manipolazione e la salvaguardia.

## Punti chiave

- Giudicate un cambiamento dal suo risultato rispetto a un confronto, non dalla diffusione dei suoi rituali.
- Scrivete lo scopo e l'indicatore prima della pratica e verificate se le persone sanno spiegarli.
- Coinvolgete continuamente le persone interessate e trattate la resistenza come informazione.
- Preferite l'adozione volontaria, lasciate evolvere le pratiche e monitorate le regressioni.
- Contate il carico di cambiamento su ciascun team e mantenetelo entro un ritmo sostenibile.
- Riferite con onestà, compreso ciò che non ha funzionato, e ritirate le pratiche che non servono più.

## Riferimenti e letture di approfondimento

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Kotter, J. P., *Leading Change*, Harvard Business School Press, 1996.
3. Hiatt, J. M., *ADKAR: A Model for Change in Business, Government and our Community*, Prosci Learning Center Publications, 2006.
4. Schein, E. H., *Organizational Culture and Leadership*, 5th ed., Wiley, 2016.
5. Feynman, R. P., "Cargo Cult Science," Caltech commencement address, 1974, reprinted in *Surely You're Joking, Mr. Feynman!*, W. W. Norton, 1985.
6. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
7. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
8. Wikipedia, [Cargo cult programming](https://en.wikipedia.org/wiki/Cargo_cult_programming).
9. Wikipedia, [Cargo cult](https://en.wikipedia.org/wiki/Cargo_cult).
10. Wikipedia, [Organizational change](https://en.wikipedia.org/wiki/Organizational_change).
11. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
12. Wikipedia, [Resistance to change](https://en.wikipedia.org/wiki/Resistance_to_change).
13. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
14. Wikipedia, [Organizational culture](https://en.wikipedia.org/wiki/Organizational_culture).
15. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
18. Wikipedia, [Change fatigue](https://en.wikipedia.org/wiki/Change_fatigue).
