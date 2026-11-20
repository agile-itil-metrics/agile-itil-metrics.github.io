# Metriche di rischio e controlli

**Il lavoro sul rischio è una conversazione continua su ciò che potrebbe andare storto e su ciò che stiamo facendo al riguardo: mantenete il registro breve e vivo, mettete alla prova i controlli che contano e diffidate di qualsiasi numero che faccia apparire ordinata l'incertezza.**

## Panoramica e motivazione

Ogni modifica a un servizio comporta un rischio, così come lasciarlo com'è. La [gestione del rischio](https://en.wikipedia.org/wiki/Risk_management) consiste nell'identificazione, nella valutazione e nella definizione delle priorità dei rischi, seguite da un'azione coordinata per ridurli, accettarli, trasferirli o evitarli. ITIL tratta il rischio come un filo che attraversa ogni pratica: l'abilitazione delle modifiche decide quanto controllo richieda una modifica, la continuità del servizio pianifica per le interruzioni, la sicurezza delle informazioni protegge dalle minacce. I modi di lavorare agili e DevOps riducono il rischio in modo diverso. Modifiche piccole consegnate in modo continuo, con feedback rapido e possibilità di ripristino, rendono ogni modifica meno pericolosa e rendono i problemi visibili prima.

Le due visioni si incontrano nelle metriche. Un team che consegna in modo continuo ha comunque bisogno di conoscere i propri rischi principali, chi li gestisce e se i controlli su cui fa affidamento funzionano. Una funzione di gestione del rischio che insiste su approvazioni pesanti ha comunque bisogno di evidenze che i suoi controlli riducano i danni e non si limitino a rallentare le persone. Questo argomento fornisce le misure per entrambe e si basa sulle pratiche descritte negli argomenti vicini dedicati a sicurezza e audit (si vedano l'Argomento 8.1 «Metriche di incidenti di sicurezza e vulnerabilità» e l'Argomento 8.3 «Metriche di conformità e audit»).

Ricorrono quattro termini.

- **Rischio:** un evento o una condizione incerti che, se si verificano, incidono sugli obiettivi. Ha una causa, un evento e una conseguenza, e una probabilità e un impatto che di solito sono stimati, non noti.
- **Registro dei rischi:** l'elenco dei rischi identificati con responsabili, valutazioni e risposte. Un [registro dei rischi](https://en.wikipedia.org/wiki/Risk_register) è uno strumento di lavoro quando è aggiornato e letto, e un artefatto di conformità quando non lo è.
- **Controllo:** un'azione o un meccanismo che riduce un rischio, come una revisione, un test automatizzato, un'approvazione, una separazione dei compiti o un avviso di monitoraggio. L'insieme dei controlli su cui un'organizzazione fa affidamento costituisce il suo sistema di [controllo interno](https://en.wikipedia.org/wiki/Internal_control).
- **Indicatore chiave di rischio (KRI):** una misura che segnala una variazione del livello di un rischio prima che si verifichi la perdita. Un [indicatore chiave di rischio](https://en.wikipedia.org/wiki/Key_risk_indicator) è utile quando anticipa un evento e quando qualcuno agisce di conseguenza.

La quantificazione del rischio ha debolezze note. Una [matrice di rischio](https://en.wikipedia.org/wiki/Risk_matrix), che colloca probabilità e impatto su una griglia di celle colorate, è ampiamente utilizzata e ampiamente criticata: le valutazioni sono soggettive, rischi diversi possono finire nella stessa cella per ragioni diverse e l'aritmetica della moltiplicazione di punteggi ordinali non ha un fondamento solido. Gli eventi rari e gravi, talvolta descritti attraverso la [teoria del cigno nero](https://en.wikipedia.org/wiki/Black_swan_theory), sono particolarmente difficili da valutare. La risposta onesta è usare la matrice come ausilio alla conversazione, mostrare intervalli e sostenerla con evidenze su controlli e incidenti. Il modello delle tre linee di difesa, che distingue i team che possiedono il rischio, i team che lo sorvegliano e l'assurance indipendente, offre una struttura per i ruoli e funziona meglio quando la prima linea, i team di consegna e di operazioni, possiede davvero i propri rischi.

La salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) si applica alla rendicontazione del rischio in modo particolare. Quando una valutazione rossa attira attenzione, le persone valutano i rischi come arancioni. Quando un rischio chiuso è un successo, le persone chiudono i rischi senza trattarli (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Principi chiave

- **Mantenere il registro breve e aggiornato.** Pochi rischi ben assegnati e rivisti valgono più di centinaia che non lo sono.
- **Far sì che la prima linea possieda i propri rischi.** Le persone più vicine al lavoro lo conoscono meglio.
- **Mettere alla prova i controlli su cui si fa affidamento.** Un controllo che non è mai stato testato è una speranza.
- **Preferire indicatori anticipatori su cui qualcuno agisce.** Un indicatore senza un piano di risposta è decorazione.
- **Mostrare intervalli ed evidenze, non una falsa precisione.** Le valutazioni sono stime.
- **Ridurre il rischio rendendo le modifiche piccole e reversibili.** La consegna continua con ripristino rapido è un controllo.
- **Parlare di rischio senza attribuire colpe.** La segnalazione onesta è la materia prima dell'intera pratica.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Aggiornamento delle revisioni dei rischi | Quota di rischi aperti rivisti dal loro responsabile entro l'intervallo concordato | rischi rivisti entro l'intervallo / rischi aperti | percentuale | Date di revisione del registro dei rischi | Gestione del rischio; miglioramento continuo | Rischi rivisti nelle conversazioni di pianificazione e revisione | Mensile |
| Copertura dei responsabili | Quota di rischi aperti con un responsabile nominato, attuale, che ha accettato la responsabilità | rischi con un responsabile attuale confermato / rischi aperti | percentuale | Registro dei rischi collegato alla rubrica delle persone | Gestione del rischio | Rischi di proprietà del team nel backlog | Mensile |
| Copertura dei test sui controlli | Quota di controlli chiave testati per il funzionamento entro il ciclo richiesto | controlli chiave testati nel ciclo / controlli chiave | percentuale | Registro dei controlli e registrazioni dei test | Gestione del rischio; gestione della sicurezza delle informazioni | Controlli automatizzati nella pipeline | Trimestrale |
| Tasso di efficacia dei controlli | Quota di controlli testati che risultano funzionare come progettato | controlli risultati efficaci / controlli testati | percentuale | Risultati dei test | Gestione del rischio; miglioramento continuo | Test automatizzati superati per le ragioni giuste | Trimestrale |
| Tempo di risposta alla violazione di un KRI | Tempo da quando un indicatore chiave di rischio supera la soglia a una decisione registrata | mediana e 85º percentile delle ore o dei giorni dalla violazione alla decisione | ore o giorni | Monitoraggio dei KRI e registro delle decisioni | Gestione del rischio; monitoraggio e gestione degli eventi | Reazione a un segnale di produzione | Mensile |
| Puntualità dei piani di trattamento | Quota di trattamenti del rischio completati entro la data prevista | trattamenti completati entro la data / trattamenti in scadenza nel periodo | percentuale | Registro dei rischi e tracciatore delle azioni | Gestione del rischio; miglioramento continuo | Azioni di miglioramento consegnate | Trimestrale |
| Quota di modifiche basate sul rischio | Quota di modifiche approvate attraverso percorsi basati sul rischio con le evidenze di controllo allegate | modifiche approvate tramite un percorso basato sul rischio con le evidenze richieste / modifiche nel periodo | percentuale | Registrazioni delle modifiche | Abilitazione delle modifiche; gestione del rischio | Modifiche consegnate in modo continuo con controlli automatizzati | Mensile |

Definisca nel registro l'intervallo di revisione e l'elenco dei controlli chiave. Un controllo è «testato» solo quando il test esamina le evidenze del funzionamento, non soltanto la progettazione. Il cronometro del KRI parte quando l'indicatore supera la soglia, come registrato dal sistema di monitoraggio, e si ferma a una decisione messa per iscritto, che può essere di agire, di accettare o di modificare la soglia. Escluda dal denominatore i rischi in via di dismissione solo dopo una decisione di chiusura registrata.

## Raccomandazioni

### Mantenere viva la conversazione sul rischio

**1. Mantenere il registro breve e scrivere ogni rischio in una forma standard.** Utilizzi una frase del tipo «A causa di [causa], potrebbe verificarsi [evento], con la conseguenza di [conseguenza].» Limiti il registro ai rischi che cambierebbero una decisione o un piano. Unisca i duplicati, suddivida quelli vaghi e dismetta i rischi superati. Un elenco di poche decine di rischi di cui le persone discutono vale più di mille che nessuno legge.

**2. Assegnare ogni rischio a un responsabile in grado di agire.** Il responsabile è la persona con autorità sulla risposta, di solito nel team di consegna o di operazioni, non nella funzione di gestione del rischio. Confermi la responsabilità con la persona interessata e la riveda quando le persone cambiano ruolo. La copertura dei responsabili misura questo aspetto, e un rischio senza responsabile è un rilievo.

**3. Rivedere i rischi nelle conversazioni che già si svolgono.** Porti i rischi principali nella pianificazione, nella revisione e nelle revisioni degli incidenti, invece di creare una riunione separata. L'abitudine agile di riflettere regolarmente su come diventare più efficaci è la sede naturale della domanda «che cosa potrebbe farci male in seguito?». Registri l'esito nel registro.

**4. Abbinare le valutazioni a evidenze e intervalli.** Per ogni rischio importante, registri che cosa Le fa ritenere che sia probabile o grave: incidenti, quasi incidenti, risultati di test, storia dei fornitori. Indichi un intervallo per probabilità e impatto dove possibile e dica quanto è incerto. Non combini punteggi ordinali in un unico numero trattandolo come una misurazione. Se usa una matrice, la usi per avviare una discussione (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

### Mettere alla prova i controlli

**5. Nominare i controlli chiave e lo scopo di ciascuno.** Per ogni rischio importante, elenchi i pochi controlli su cui fa affidamento e come apparirebbe il fallimento di ciascuno. Un registro dei controlli che elenca centinaia di attività minori nasconde quelle che contano. Includa i controlli automatizzati nella pipeline, come test, verifiche di policy e cancelli di approvazione.

**6. Testare il funzionamento, non solo la progettazione.** Una revisione della progettazione chiede se il controllo funzionerebbe se fosse eseguito. Un test di funzionamento chiede se è stato eseguito e ha funzionato nel periodo, esaminando campioni di evidenze. Pianifichi i test su un ciclo adeguato al rischio, registri i risultati e dia seguito ai fallimenti. Dove possibile, automatizzi le evidenze, in modo che il test avvenga in modo continuo.

**7. Trattare i fallimenti dei controlli come informazione.** Un test fallito è il sistema di controllo che funziona. Registri il fallimento, si chieda perché e corregga la causa. Il tasso di efficacia dei controlli va letto insieme al seguito dato: i fallimenti trovati e corretti rapidamente sono più sani di un tasso perfetto derivante da test deboli.

**8. Utilizzare un'assurance indipendente dove aggiunge valore.** L'audit interno o un revisore indipendente può testare i controlli posseduti dalla prima linea e sorvegliati dalla seconda. L'indipendenza protegge dal valutare il proprio stesso lavoro. Si coordini in modo che i team non siano testati da tre gruppi per la stessa cosa.

### Usare bene indicatori e decisioni

**9. Scegliere pochi indicatori anticipatori per ogni rischio importante.** Un indicatore chiave di rischio dovrebbe essere economico da misurare, collegato a una causa e abbinato a una soglia e a una risposta. Per esempio, l'età della vulnerabilità critica più vecchia segnala il rischio di sicurezza, e la quota di modifiche che richiedono una gestione di emergenza segnala il rischio di modifica. Definisca chi osserva l'indicatore e che cosa farà alla soglia (si veda l'Argomento 8.1 «Metriche di incidenti di sicurezza e vulnerabilità»).

**10. Registrare la decisione a ogni violazione.** Quando un indicatore supera una soglia, qualcuno decide: agire, accettare o adeguare la soglia. Metta per iscritto la decisione e il motivo. Questo costruisce una storia che mostra se le soglie sono ben fissate e se la risposta è tempestiva.

**11. Fare dell'approvazione basata sul rischio l'impostazione predefinita per le modifiche.** In un contesto di consegna continua, sostituisca i comitati di approvazione generalizzati con percorsi basati sul rischio: controlli automatizzati e revisione tra pari per le modifiche standard a basso rischio, e una revisione più approfondita per le poche modifiche ad alto rischio (si veda l'Argomento 4.3 «Metriche di abilitazione delle modifiche»). Alleghi l'evidenza che i controlli sono stati eseguiti. Questo riduce insieme rischio e ritardo, perché piccole modifiche con evidenze automatizzate sono più sicure di grandi modifiche con una firma.

**12. Imparare da perdite e quasi incidenti.** Dopo incidenti e situazioni sfiorate, aggiorni il registro: il rischio era presente, era valutato bene, il controllo ha funzionato? Usi le risposte per migliorare entrambi. Il ciclo tra eventi e registro è ciò che mantiene onesto il registro (si veda l'Argomento 4.2 «Metriche di postmortem e apprendimento»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Aggiornamento delle revisioni dei rischi | Segnare i rischi come rivisti senza discussione; modificare l'intervallo | Campionamento delle revisioni per verificarne la sostanza; intervallo fisso nel registro |
| Copertura dei responsabili | Assegnare responsabili a loro insaputa; indicare una persona anziana priva di autorità | Conferma del responsabile; verifica che i responsabili possano agire sulla risposta |
| Copertura dei test sui controlli | Testare i controlli facili; contare le revisioni di progettazione come test di funzionamento | Elenco dei controlli chiave fissato da una seconda parte; tipo di test registrato |
| Tasso di efficacia dei controlli | Testare campioni piccoli; scegliere campioni che superano il test | Metodo di campionamento indipendente dal responsabile; dimensione del campione registrata |
| Tempo di risposta alla violazione di un KRI | Modificare la soglia dopo una violazione; registrare una decisione priva di contenuto | Registro delle modifiche di soglia; campionamento del contenuto delle decisioni |
| Puntualità dei piani di trattamento | Fissare date facili; ridefinire il completamento | Date concordate con il responsabile all'approvazione; verifica che la valutazione del rischio si sia spostata |
| Quota di modifiche basate sul rischio | Classificare le modifiche come a basso rischio per evitare la revisione; allegare evidenze non prodotte dai controlli | Campionamento della classificazione rispetto alle regole; evidenze automatizzate dalla pipeline |

Una lettura sana comprende un registro breve su cui le persone discutono, responsabili che conoscono i propri rischi, controlli testati con alcuni fallimenti trovati e corretti, indicatori che guidano decisioni reali e meno approvazioni pesanti per le modifiche piccole.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Matrice di rischio | Rapida, visiva, avvia la conversazione | Soggettiva; falsa precisione; aritmetica ordinale |
| Intervalli quantificati | Più onesti sull'incertezza | Richiedono dati e competenze; impegno |
| Comitati di approvazione pesanti | Controllo visibile | Lenti; incoraggiano il raggruppamento delle modifiche |
| Controlli automatizzati basati sul rischio | Rapidi e coerenti | Richiedono ingegneria; i controlli automatizzati possono sbagliare |
| La funzione centrale del rischio possiede i rischi | Coerenza | Lontana dal lavoro; responsabili disimpegnati |
| Responsabilità della prima linea | Conoscenza e responsabilità | Qualità variabile; richiede supervisione |
| Test periodici dei controlli | Efficienti per controlli stabili | Non rilevano la deriva tra un test e l'altro |
| Monitoraggio continuo dei controlli | Evidenze tempestive | Impegno sugli strumenti; rumore |

La risposta in sintesi è affidare la responsabilità ai team, applicare una supervisione centrale leggera e test indipendenti, automatizzare le evidenze dove possibile e usare le valutazioni come spunti di conversazione.

## Domande da discutere con il team

**1. Quali sono i tre rischi più probabili per questo servizio nel prossimo anno e chi è responsabile di ciascuno?**
Chieda a ciascun membro di scrivere in privato tre rischi, poi li confronti. Sia la sovrapposizione sia le differenze sono istruttive. Il facilitatore dovrebbe registrare chi agirebbe su ciascun rischio. Concordate i primi tre e confermate i responsabili.

**2. Da quale controllo dipendiamo di più e quando abbiamo verificato l'ultima volta che funziona?**
Scelga un controllo, come una regola di revisione del codice, un backup o una fase di approvazione. Ripercorra l'ultima volta in cui sono state esaminate evidenze del suo funzionamento. Se nessuno lo sa, pianifichi un test. La conversazione mostra la differenza tra progettazione e funzionamento.

**3. Che cosa ci farebbe cambiare una valutazione da arancione a rossa e chi se ne accorgerebbe?**
Discutete gli indicatori e le soglie. Chieda se il team abbia mai declassato una valutazione per evitare attenzione e quale pressione l'abbia causato. Concordate quali evidenze giustificherebbero un cambiamento e come rendere sicuro dire «rosso».

**4. Quali approvazioni rallentano le nostre modifiche senza ridurre il rischio?**
Elenchi le approvazioni di cui ha bisogno una modifica tipica e per ciascuna chieda quale rischio affronta e se abbia mai fermato una modifica. Proponga di sostituirne una con un controllo automatizzato. Concordate quali evidenze mostrerebbero che la modifica è sicura.

**5. Quando un controllo è fallito, come l'abbiamo scoperto e che cosa abbiamo fatto?**
Ricordi un fallimento recente. È stato trovato da un test, da un incidente o da un auditor? Discutete come appaia un ciclo più solido. Includa il modo in cui è stata trattata la persona che l'ha trovato.

**6. Quali rischi abbiamo accettato e quando rivediamo tale decisione?**
Elenchi i rischi accettati e le date di revisione. Verifichi che ciascuno abbia un responsabile e un motivo. Un rischio accettato senza data di revisione è un rischio che nessuno sorveglia.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna possiedono la maggior parte del rischio operativo. Dovrebbero mantenere un breve elenco dei propri rischi, discuterli nella pianificazione e nella revisione e incorporare i controlli nella pipeline in modo che le evidenze siano automatiche. Traggono vantaggio da percorsi di modifica basati sul rischio che lasciano scorrere le modifiche a basso rischio, e dovrebbero essere onesti su ciò che potrebbe andare storto.

### Team di servizio e operations

I team di operazioni eseguono i controlli: backup, monitoraggio, revisioni degli accessi e test di ripristino. Dovrebbero conservare le evidenze del funzionamento, testare i controlli con un ciclo regolare e segnalare per tempo le violazioni degli indicatori. Sostengono il costo dei controlli pesanti e dovrebbero dire quali aggiungono poco.

### Leadership e governance

I dirigenti stabiliscono la propensione al rischio e decidono quanto attrito sia accettabile. Dovrebbero chiedere un breve elenco dei rischi principali con responsabili ed evidenze, accogliere con favore le valutazioni rosse, finanziare i test dei controlli e sostenere l'assurance indipendente. La governance dovrebbe verificare che il registro rifletta incidenti e quasi incidenti, e non dovrebbe premiare rapporti dall'aspetto ordinato.

### Clienti e utenti

Gli utenti subiscono le conseguenze dei rischi che si concretizzano e spesso ne sono a conoscenza prima del registro. Dovrebbero disporre di un modo per segnalare preoccupazioni ed essere informati dei rischi che li riguardano, nei limiti della riservatezza. La loro esperienza di incidenti e modifiche è un'evidenza per le revisioni del rischio.

## In pratica: un esempio di ITIL agile

Il gruppo digitale di un'azienda energetica nazionale gestisce la fatturazione dei clienti, un'app mobile e integrazioni con le operazioni di rete. I numeri seguenti sono illustrativi.

Il registro dei rischi del gruppo ha 340 voci, ripulite per l'ultima volta tre anni prima. L'aggiornamento delle revisioni dei rischi è del 22 percento e 61 rischi hanno responsabili che hanno lasciato l'azienda. La matrice mostra 85 rischi in rosso e nessuno legge il rapporto. La nuova responsabile dell'assurance di servizio propone un azzeramento. Insieme ai team di consegna riduce il registro ai rischi che cambierebbero una decisione, arrivando a 38. Assegna ciascuno a un responsabile nominato nel team in grado di agire, e questi confermano. Sceglie 12 controlli chiave e testa il funzionamento di ciascuno, invece di rivederne la progettazione. Cinque falliscono: due ripristini di backup non erano mai stati testati, una revisione degli accessi era stata saltata e due approvazioni di modifica erano state firmate senza evidenza di test.

Il team corregge i fallimenti e sostituisce il comitato di approvazione delle modifiche per le modifiche standard con percorsi basati sul rischio. Test automatizzati e revisione tra pari sono i controlli, e la pipeline allega le evidenze alla registrazione della modifica. Ogni rischio importante riceve uno o due indicatori anticipatori con soglie e risposte. Per il rischio di un'interruzione prolungata della fatturazione, gli indicatori sono l'età della vulnerabilità critica più vecchia e il numero di ripristini di backup falliti nel trimestre. Il primo trimestre mostra i responsabili che confermano tutti i 38 rischi, un aggiornamento delle revisioni del 91 percento, un tasso di efficacia dei controlli di 7 su 12 al primo test e di 12 su 12 dopo le correzioni, e un tempo mediano di risposta alla violazione dei KRI di 2 giorni. La quota di modifiche attraverso percorsi basati sul rischio è del 64 percento.

Il chief risk officer chiede che il numero di rischi rossi si dimezzi entro un anno. La responsabile dell'assurance di servizio propone invece di monitorare la puntualità dei piani di trattamento e l'efficacia dei controlli, spiegando che il conteggio dei rischi rossi può diminuire con una nuova valutazione e che preferirebbe vedere valutazioni rosse oneste. La decisione viene registrata e il rapporto del trimestre successivo include le decisioni campionate dietro ogni declassamento.

## Lente di settore

**Startup.** I rischi riguardano soprattutto l'esaurimento del denaro, la perdita di persone chiave e una grave interruzione. Mantenga un elenco di una pagina dei primi cinque, lo riveda mensilmente e testi backup e ripristini. Incorpori i controlli nella pipeline fin dall'inizio, perché costano meno che adattarli in seguito.

**Piccola impresa.** Pochi rischi dominano: la dipendenza da una persona chiave, un unico fornitore, il ransomware e la perdita di dati. Mantenga un breve elenco con i responsabili, testi i ripristini e tenga aggiornate le assicurazioni e i recapiti. Resista ai framework pesanti e ne prenda in prestito ciò che si adatta.

**Grande impresa.** La scala richiede una tassonomia comune, strumenti leggeri per il registro e le tre linee di difesa messe in pratica. Faccia in modo che la prima linea possieda i propri rischi, mantenga piccola e consultiva la seconda linea e renda efficienti i test indipendenti. Eviti test duplicati tra audit, rischio e conformità.

**Governo e settore pubblico.** La gestione del rischio è spesso un obbligo formale, con framework standard, comitati di audit e rendicontazione pubblica. Si allinei al framework richiesto, documenti le dichiarazioni di propensione al rischio e conservi le evidenze. La responsabilità pubblica rende più preziose le valutazioni rosse oneste, e anche più difficili (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi sono il tempo dei responsabili per rivedere i rischi, l'impegno per definire i controlli chiave e testarli, gli strumenti per il registro e per il monitoraggio degli indicatori se non già presenti e il costo dell'assurance indipendente. Automatizzare la raccolta delle evidenze richiede impegno di ingegneria e poi riduce il costo ricorrente.

I ritorni sono meno sorprese, un'approvazione delle modifiche più rapida e leggera e un'assurance più credibile. Un registro sfoltito e percorsi di modifica basati sul rischio fanno risparmiare il tempo che i grandi organi di approvazione consumavano. I test dei controlli falliti trovati prima di un incidente prevengono perdite difficili da quantificare. Costruisca il caso a partire dai Suoi dati: il tempo speso per ogni approvazione di modifica prima e dopo, il numero di fallimenti dei controlli trovati dai test rispetto a quelli trovati da incidenti o auditor e il costo di incidenti passati che un controllo avrebbe prevenuto. Eviti di citare statistiche di settore sulle perdite senza una fonte e un metodo tracciabili.

## Anti-pattern e insidie

- **Un registro che cresce all'infinito.** Nessuno lo legge. Lo sfoltisca ai rischi che contano.
- **Valutazioni senza evidenze.** Sono opinioni a colori. Alleghi evidenze e intervalli.
- **Responsabili solo di nome.** Il rischio sta presso qualcuno che non può agire. Confermi la responsabilità con le persone giuste.
- **Testare la progettazione e chiamarla assurance.** Un controllo che potrebbe funzionare potrebbe non averlo fatto. Testi il funzionamento.
- **Riportare solo il numero di rischi rossi.** I conteggi diminuiscono con una nuova valutazione. Osservi i trattamenti e i risultati dei controlli.
- **Comitati di approvazione per ogni modifica.** Rallentano le modifiche piccole e insegnano a raggrupparle. Utilizzi percorsi basati sul rischio.
- **Punire le valutazioni rosse.** I rischi vengono allora nascosti. Premi l'allerta precoce.
- **Culture separate del rischio e della consegna.** Un lavoro sul rischio fatto ai team, non con i team, produce teatro della conformità.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Registro e responsabilità | Elenco lungo e obsoleto | Il registro esiste, in parte assegnato | Registro breve con responsabili di prima linea confermati e date di revisione | Revisioni nelle conversazioni dei team; evidenze e intervalli allegati | Rischi condivisi tra team e fornitori con responsabili congiunti |
| Controlli | Si presume che funzionino | Progettazione documentata | Controlli chiave nominati; test di funzionamento con un ciclo | Fallimenti seguiti; evidenze automatizzate dove possibile | Monitoraggio continuo dei controlli con supervisione umana e assurance indipendente |
| Decisioni e modifiche | Approvazioni per comitato | Alcune modifiche standard preapprovate | Percorsi basati sul rischio con evidenze allegate | Indicatori con soglie e decisioni registrate; percorsi tarati sugli esiti | Decisioni sul rischio integrate nelle pipeline in tutta l'organizzazione e nella catena di fornitura |

## Checklist

- [ ] Il registro è breve, con i rischi scritti in forma di causa, evento e conseguenza.
- [ ] Ogni rischio ha un responsabile di prima linea confermato e in grado di agire.
- [ ] I rischi sono rivisti nelle conversazioni regolari del team.
- [ ] I controlli chiave sono nominati e testati per il funzionamento con un ciclo dichiarato.
- [ ] I fallimenti dei controlli sono registrati, spiegati e corretti.
- [ ] Ogni rischio importante ha uno o due indicatori anticipatori con soglie e risposte.
- [ ] Le decisioni alle violazioni degli indicatori sono registrate.
- [ ] Esistono percorsi di modifica basati sul rischio, con evidenze allegate automaticamente dove possibile.
- [ ] I rischi accettati hanno un responsabile, un motivo e una data di revisione.
- [ ] Incidenti e quasi incidenti aggiornano il registro.

## Prompt IA

**Riscrivere i rischi in una forma standard.**

```text
Ecco [numero] voci del nostro registro dei rischi: [incollare, con i dettagli
sensibili rimossi]. Riscrivi ciascuna nella forma "A causa di [causa], potrebbe
verificarsi [evento], con la conseguenza di [conseguenza]." Segnala le voci
vaghe, duplicate o che in realtà sono problemi già verificatisi. Suggerisci quali
potrebbero essere unite o dismesse. Non valutarle. Elenca le tue ipotesi e che
cosa confermare con i responsabili.
```

**Progettare un test di controllo.**

```text
Per il controllo [descrivere, per esempio la revisione trimestrale degli accessi
al sistema di fatturazione], progetta un test di funzionamento. Includi quali
evidenze esaminare, come selezionare un campione senza distorsioni, che cosa
conta come superato o fallito, come registrare i risultati e come automatizzare
nel tempo la raccolta delle evidenze. Non presumere strumenti specifici. Elenca
le tue ipotesi e i rischi nella progettazione del test.
```

**Proporre indicatori anticipatori per un rischio.**

```text
Rischio: [descrivere in forma di causa, evento, conseguenza]. Proponi fino a tre
indicatori anticipatori economici da misurare e collegati alla causa, con una
risposta suggerita in caso di violazione della soglia e il modo in cui ciascun
indicatore potrebbe trarre in inganno. Non inventare valori di soglia; descrivi
come dovremmo calibrarli a partire dai nostri dati. Elenca le tue ipotesi.
```

**Rivedere un processo di approvazione delle modifiche.**

```text
Il nostro processo di approvazione delle modifiche per [tipo di modifica] è:
[descrivere fasi, approvatori e ritardi tipici]. Individua le fasi che aggiungono
ritardo senza ridurre il rischio, proponi un'alternativa basata sul rischio con
controlli ed evidenze automatizzati e indica che cosa dovremmo misurare per
sapere se il rischio è aumentato o diminuito. Non attribuire risultati di
ricerca. Elenca le tue ipotesi e le decisioni che richiedono il contributo della
direzione.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di rischio o di controllo.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una voce di metrica di rischio riporti il proprio vettore di manipolazione, la salvaguardia e la regola sulle evidenze.

## Punti chiave

- Mantenga il registro dei rischi breve, assegnato ai team in grado di agire e rivisto nelle conversazioni già esistenti.
- Verifichi che i controlli chiave funzionino, tratti i fallimenti come informazione utile e automatizzi le evidenze.
- Utilizzi pochi indicatori anticipatori con soglie, risposte e decisioni registrate.
- Sostituisca l'approvazione generalizzata con percorsi di modifica basati sul rischio, sostenuti da evidenze automatizzate.
- Mostri intervalli ed evidenze invece di una falsa precisione e usi le matrici per avviare conversazioni.
- Renda sicuro assegnare valutazioni rosse e impari da perdite e quasi incidenti.

## Riferimenti e letture di approfondimento

1. ISO 31000, *Risk management: Guidelines*, International Organization for Standardization.
2. Committee of Sponsoring Organizations of the Treadway Commission, *Enterprise Risk Management: Integrating with Strategy and Performance*, 2017.
3. Hubbard, D. W., *The Failure of Risk Management: Why It's Broken and How to Fix It*, 2nd ed., Wiley, 2020.
4. Cox, L. A., "What's wrong with risk matrices?" *Risk Analysis*, 28(2), 2008.
5. Taleb, N. N., *The Black Swan: The Impact of the Highly Improbable*, Random House, 2007.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Risk management](https://en.wikipedia.org/wiki/Risk_management).
9. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
10. Wikipedia, [Internal control](https://en.wikipedia.org/wiki/Internal_control).
11. Wikipedia, [Key risk indicator](https://en.wikipedia.org/wiki/Key_risk_indicator).
12. Wikipedia, [Risk matrix](https://en.wikipedia.org/wiki/Risk_matrix).
13. Wikipedia, [Black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
