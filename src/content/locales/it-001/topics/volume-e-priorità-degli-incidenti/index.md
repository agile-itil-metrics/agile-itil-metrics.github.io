# Volume e priorità degli incidenti

**Conti gli incidenti rispetto all'uso che li ha prodotti, legga la priorità come una composizione anziché come un punteggio e osservi le ripetizioni, perché la forma della domanda di incidenti indica dove investire molto prima di qualsiasi singolo tempo di risoluzione.**

## Panoramica e motivazione

Un incidente, nei termini di [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, è un'interruzione non pianificata di un servizio o una riduzione della sua qualità. La [gestione degli incidenti](https://en.wikipedia.org/wiki/Incident_management) è la pratica che ripristina il normale funzionamento del servizio nel modo più rapido possibile e limita il danno per l'organizzazione. Ogni incidente è anche un segnale: qualcosa nel servizio, nelle sue modifiche, nei suoi utenti o nel suo monitoraggio non ha funzionato come previsto. Il numero e il carattere degli incidenti sono quindi una delle misure di domanda più informative di cui dispone un team operativo.

Il volume da solo è una guida scadente. Un aumento degli incidenti può significare che il servizio è peggiorato, oppure che più persone lo usano, oppure che il monitoraggio è migliorato e ora vede guasti che prima restavano non segnalati. Un calo può significare che il lavoro sull'affidabilità ha dato frutti, oppure che gli utenti hanno smesso di segnalare. Questo argomento riguarda la lettura del volume con un contesto sufficiente a distinguere queste storie: normalizzare rispetto all'utilizzo, suddividere per categoria e servizio, e osservare la composizione delle priorità e il tasso di ripetizioni.

La priorità è la seconda metà dell'argomento. La pratica ITIL deriva comunemente la priorità da due input: l'impatto (quanta parte dell'organizzazione è interessata) e l'urgenza (quanto rapidamente l'organizzazione ha bisogno della correzione). La coppia è mappata su un livello di priorità che stabilisce la risposta attesa. I team agili hanno una controparte stretta nel modo in cui eseguono il triage di un backlog: etichette di gravità e di urgenza sui difetti e una «classe di servizio» su una lavagna di flusso che decide che cosa salta la coda. Le parole differiscono; la domanda è la stessa: che cosa va gestito per primo, e perché.

La visione ITIL tratta gli incidenti come registrazioni di proprietà di un service desk e di gruppi risolutori, con categorie, priorità e obiettivi di livello di servizio. La visione agile tratta il lavoro non pianificato come un'interruzione del flusso che compete con il lavoro pianificato (si veda l'Argomento 2.9 «Lavoro operativo e lavoro non pianificato»). Entrambe le visioni traggono vantaggio dalle stesse misure, se le misure descrivono il sistema e non le persone al suo interno. Il [service desk](https://en.wikipedia.org/wiki/Help_desk_software) è il luogo in cui nasce la maggior parte delle registrazioni, e le sue metriche sono trattate separatamente (si veda l'Argomento 3.1 «Metriche del service desk»). La rapidità con cui gli incidenti ricevono risposta e vengono risolti è trattata nell'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti». Gli incidenti maggiori hanno misure proprie (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori»).

Diversi termini ricorrono più avanti. Un **percentile** è il valore al di sotto del quale ricade una data quota di osservazioni, per cui l'85º percentile è il valore che l'85 per cento delle osservazioni non supera. Un **accordo sul livello di servizio (SLA)** è un impegno documentato tra un fornitore e un cliente. Un **elemento di configurazione (CI)** è un componente che deve essere gestito per erogare un servizio. Un **processo di Poisson** descrive eventi che arrivano in modo indipendente a una certa frequenza media, il che costituisce un utile primo modello per gli arrivi degli incidenti (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

L'avvertenza dell'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche» vale qui più che in molti altri casi. Conteggi e priorità degli incidenti sono inseriti da persone, spesso sotto pressione, e il numero associato a una registrazione può cambiare cambiando il modo in cui la registrazione è scritta. Ogni metrica seguente ha un vettore di manipolazione, e le salvaguardie fanno parte della definizione.

## Principi chiave

- **Normalizzare prima di confrontare.** Un conteggio significa poco senza l'utilizzo, la base di utenti o il volume di transazioni da cui proviene. Confrontare i tassi tra periodi e servizi e mostrare accanto a essi il conteggio grezzo.
- **Leggere la composizione, non un singolo numero.** Distribuzione per priorità, distribuzione per categoria e quota di ripetizioni dicono insieme più di qualsiasi totale.
- **La priorità è una regola, non un umore.** Derivarla da impatto e urgenza tramite una matrice scritta, e misurare quanto spesso viene modificata a posteriori.
- **Separare incidenti e richieste.** Una richiesta di qualcosa di normale non è un guasto. Contare entrambi insieme gonfia il volume degli incidenti e nasconde come il service desk impiega il proprio tempo (si veda l'Argomento 3.5 «Metriche di evasione delle richieste di servizio»).
- **Le ripetizioni sono il segnale più prezioso.** Un incidente che ritorna indica un problema non ancora risolto (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»).
- **Misurare servizi e team, mai operatori.** I conteggi per persona invitano alla classifica, e la classifica corrompe i dati (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).
- **Aspettarsi che il volume si muova per ragioni che non riguardano la qualità.** Rilasci, stagioni, campagne e cambiamenti nei canali di segnalazione spostano tutti i conteggi. Annotare il grafico.

## Definizioni delle metriche

La tabella elenca le metriche di questo argomento. Cronometri e confini sono indicati nella colonna della formula. «Chiuso» e «aperto» si riferiscono ai timestamp nella registrazione dell'incidente; il momento di apertura è quando la registrazione viene creata oppure quando la crea il sistema di monitoraggio, e il momento di chiusura è quando l'incidente è confermato risolto e chiuso.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume di incidenti per servizio | Numero di incidenti aperti per un servizio in un periodo | incidenti con un momento di apertura all'interno del periodo, attribuiti al servizio interessato; sono escluse le richieste di servizio, i duplicati accorpati in una registrazione padre e le registrazioni annullate perché aperte per errore | conteggio | Registrazioni degli incidenti dello strumento ITSM | Gestione degli incidenti | Difetti di produzione o elementi di lavoro non pianificato per team | Settimanale, rivisto mensilmente |
| Tasso di incidenti normalizzato | Incidenti rispetto all'utilizzo del servizio | incidenti aperti nel periodo / misura di utilizzo per lo stesso periodo e ambito (utenti attivi, sessioni o transazioni, scelti e registrati per servizio) x 1.000; la misura di utilizzo deve provenire da una fonte diversa dallo strumento degli incidenti | incidenti ogni 1.000 unità di utilizzo | Strumento ITSM più dati di utilizzo da analytics o monitoraggio | Gestione degli incidenti; gestione dei livelli di servizio | Densità di difetti per rilascio o per utente | Mensile |
| Composizione per priorità | Quota di incidenti aperti a ciascun livello di priorità | incidenti alla priorità registrata all'apertura / tutti gli incidenti aperti nel periodo, mostrati per ciascun livello; gli incidenti riclassificati sono contati alla priorità di apertura e mostrati di nuovo alla priorità di chiusura | percentuale per livello | Strumento ITSM, compreso lo storico delle modifiche di priorità | Gestione degli incidenti | Distribuzione della gravità dei difetti; composizione per classe di servizio | Mensile |
| Tasso di riclassificazione della priorità | Quota di incidenti la cui priorità è cambiata tra apertura e chiusura | incidenti chiusi nel periodo la cui priorità di chiusura differisce da quella di apertura / incidenti chiusi nel periodo | percentuale | Traccia di audit dello strumento ITSM | Gestione degli incidenti | Tasso di nuovo triage sul backlog dei difetti | Mensile |
| Concentrazione per categoria | Quota del volume di incidenti detenuta dalle categorie più grandi | incidenti nelle prime cinque categorie per conteggio / tutti gli incidenti categorizzati nel periodo; gli incidenti non categorizzati sono riportati a parte come quota propria | percentuale | Campi di categoria e servizio dello strumento ITSM | Gestione degli incidenti; gestione dei problemi | Raggruppamenti di difetti per componente o epic | Mensile |
| Tasso di incidenti ripetuti | Quota di incidenti che si ripresentano per lo stesso servizio, elemento di configurazione e categoria entro una finestra dichiarata | incidenti nel periodo con un precedente incidente chiuso per lo stesso servizio, CI e categoria nella finestra precedente (per esempio 30 giorni, fissata una volta e registrata) / incidenti aperti nel periodo; una registrazione riaperta conta come riapertura, non come ripetizione | percentuale | Strumento ITSM e collegamenti CMDB | Gestione degli incidenti; gestione dei problemi | Tasso di regressioni o di difetti sfuggiti | Mensile |
| Tasso di riapertura | Quota di incidenti chiusi che sono stati riaperti | incidenti chiusi nel periodo che sono stati successivamente riaperti entro una finestra dichiarata (per esempio 7 giorni) / incidenti chiusi nel periodo | percentuale | Storico degli stati dello strumento ITSM | Gestione degli incidenti | Difetti riaperti; rilavorazione | Mensile |
| Quota rilevata dal monitoraggio | Quota di incidenti sollevati per la prima volta dal monitoraggio prima che un utente li segnalasse | incidenti il cui primo evento è un avviso automatico / tutti gli incidenti aperti nel periodo; gli incidenti aperti da una persona a partire da un avviso sono contati dall'ora dell'avviso | percentuale | Strumento ITSM, integrazione con il monitoraggio | Monitoraggio e gestione degli eventi; gestione degli incidenti | Difetti rilevati da avvisi rispetto a quelli segnalati dai clienti | Mensile |

Due note sulle definizioni. La prima è che la «priorità» in questa tabella è la priorità che la registrazione porta, che dovrebbe derivare dalla matrice di impatto e urgenza e non dall'ordine in cui le persone vogliono che il lavoro sia svolto. La seconda è che il volume riportato per un periodo è un conteggio di aperture, non un conteggio di incidenti aperti in un dato giorno. Il numero di incidenti aperti in un dato momento è una misura di backlog e appartiene all'anzianità (si veda l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»).

## Raccomandazioni

### Contare con cura

**1. Metta per iscritto che cosa è e che cosa non è un incidente.** Molti strumenti conservano incidenti, richieste, avvisi e problemi in un'unica tabella. Decida quali tipi di registrazione contano, documenti il filtro e lo applichi ogni volta. Un cambiamento del filtro cambia l'andamento, perciò registri le modifiche con data e motivo (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»).

**2. Deduplichi prima di riportare.** Quando un guasto produce cinquanta ticket, l'incidente padre è l'evento e i figli sono una misura della sua portata. Riporti entrambi i numeri: gli incidenti padre per sapere quanti guasti si sono verificati e le registrazioni collegate per sapere quante persone li hanno subiti. Mescolare i due fa sembrare una grande interruzione un mese di lavoro ordinario.

**3. Attribuisca gli incidenti ai servizi oltre che ai team.** Il servizio è ciò che l'organizzazione acquista e comprende. Usi il catalogo dei servizi (il «service catalogue» di ITIL) per definire l'elenco e riveda la mappatura dai CI quando i servizi cambiano. Un incidente senza servizio è un problema di qualità dei dati da correggere, e la quota di tali registrazioni merita di essere riportata.

### Normalizzare e interpretare il volume

**4. Normalizzi rispetto a una misura di utilizzo proveniente da una fonte diversa.** Divida per utenti attivi, sessioni o transazioni, tratti da analytics o monitoraggio e non dallo strumento degli incidenti. Un servizio che ha raddoppiato utenti e incidenti non è peggiorato; un servizio i cui incidenti sono raddoppiati con un utilizzo invariato, sì. Mostri il conteggio grezzo accanto al tasso, così che nessuno creda che il denominatore nasconda qualcosa.

**5. Usi un grafico di controllo, non una freccia di tendenza.** I conteggi degli incidenti variano da una settimana all'altra anche quando nulla è cambiato. Un [grafico di controllo](https://en.wikipedia.org/wiki/Control_chart) mostra l'intervallo abituale di variazione, così che il team reagisca a un segnale e lasci stare il rumore. I conteggi settimanali che si muovono entro i limiti non sono una notizia; una serie prolungata da un solo lato della media lo è. Corregga per la [stagionalità](https://en.wikipedia.org/wiki/Seasonality), come le chiusure di trimestre, le festività e i cicli di rilascio, confrontando periodi omogenei.

**6. Annoti il grafico con gli eventi.** Segni rilasci, migrazioni, campagne, interruzioni di dipendenze e cambiamenti del canale di segnalazione. Un nuovo modulo self-service o un pulsante «segnala un problema» più visibile possono aumentare il volume mentre il servizio resta lo stesso. La maggior parte delle discussioni sul volume termina in fretta quando il grafico mostra che cosa è accaduto quella settimana.

### Gestire la priorità con regole

**7. Derivi la priorità da impatto e urgenza con una matrice pubblicata.** Definisca l'impatto in termini di utenti e funzioni aziendali interessati, e l'urgenza in termini di quanto presto il danno cresce. Pubblichi la matrice nella pagina in cui gli operatori scelgono i valori, con due o tre esempi svolti per ogni cella. Eviti i campi di priorità a scelta libera: diventano una trattativa, e il numero di incidenti di «priorità 1» diventa una misura di capacità di persuasione.

**8. Riporti insieme la composizione e il tasso di riclassificazione.** Una composizione sana ha un piccolo numero di incidenti della priorità più alta e un'ampia base di priorità inferiori. Se il livello più alto cresce, ci si chieda se il danno è cresciuto o se i clienti hanno imparato che «critico» ottiene attenzione. Il tasso di riclassificazione mostra quanto bene si adatta la matrice: frequenti modifiche alla chiusura significano che la regola non è chiara o che la prima valutazione è affrettata. Riveda ogni mese un campione di registrazioni riclassificate nel gruppo che è responsabile della matrice.

**9. Mantenga allineate la priorità e la classe di servizio agile.** Dove i team di consegna ricevono lavoro originato da incidenti, usi le stesse parole e la stessa matrice, oppure pubblichi una mappatura chiara. Un team che definisce «alto» un difetto mentre le operazioni lo definiscono «medio» perderà tempo in traduzioni. Riservi una quota esplicita al lavoro accelerato, così che l'interruzione sia visibile nelle misure di flusso (si veda l'Argomento 2.1 «Misure del flusso»).

### Cercare ripetizioni e schemi

**10. Tracci ripetizioni e riaperture come segnali distinti.** Una riapertura significa che la prima correzione non ha retto; una ripetizione significa che lo stesso tipo di guasto è tornato dopo una correzione corretta. La prima indica la qualità della risoluzione e la seconda una causa irrisolta. Colleghi i gruppi ricorrenti alle registrazioni di problema e smetta di contare un incidente come risolto quando è probabile che ritorni (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»).

**11. Usi il [principio di Pareto](https://en.wikipedia.org/wiki/Pareto_principle) per scegliere dove guardare.** Ordini categorie e servizi per numero di incidenti e osservi quanto pochi ne rappresentano la maggior parte del volume. Indaghi i primi pochi prima di costruire nuovi report per il resto. La forma è uno stimolo per l'[analisi delle cause radice](https://en.wikipedia.org/wiki/Root_cause_analysis), non una conclusione, perché una categoria con un conteggio alto può semplicemente essere quella facile da categorizzare.

**12. Restituisca i risultati ai team di consegna e al service desk.** Condivida le viste per categoria e per ripetizione con i team che costruiscono e modificano i servizi, in una conversazione regolare anziché in un report. Abbini ogni gruppo ricorrente a un responsabile, un passo successivo e una data, e collochi il lavoro nello stesso backlog delle altre priorità (si veda l'Argomento 2.6 «Metriche di backlog e raffinamento»). Il volume cala quando le cause vengono rimosse, e ciò richiede capacità pianificata.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Volume di incidenti per servizio | Registrare gli incidenti come richieste, accorpare ticket non correlati, scoraggiare gli utenti dal segnalare, oppure chiudere i duplicati come «nessun guasto riscontrato» | Volume dei contatti segnalati dagli utenti e volume delle richieste accanto al volume degli incidenti; soddisfazione e abbandono del service desk; campione di richieste che sembrano guasti |
| Tasso di incidenti normalizzato | Scegliere il denominatore che dà la cifra migliore, oppure cambiare la definizione di utilizzo tra i periodi | Misura di utilizzo fissa per servizio, registrata nel registro; conteggi grezzi mostrati accanto al tasso |
| Composizione per priorità | Abbassare le priorità per apparire tranquilli o alzarle per ottenere attenzione; assegnare una priorità bassa per evitare un obiettivo di risposta | Tasso di riclassificazione della priorità; revisione mensile a campione rispetto alla matrice di impatto e urgenza; impatto segnalato dai clienti |
| Tasso di riclassificazione della priorità | Non cambiare la priorità quando dovrebbe cambiare, così che il tasso appaia stabile; cambiarla solo alla chiusura per adattarla all'obiettivo | Campione di registrazioni in cui l'impatto è cambiato durante l'incidente; revisioni delle cronologie degli incidenti |
| Concentrazione per categoria | Usare una categoria generica, oppure dividere una grande categoria in diverse per nascondere la concentrazione | Quota di registrazioni non categorizzate e «altro»; revisione periodica dell'elenco delle categorie; verifiche delle categorie rispetto alle note di risoluzione |
| Tasso di incidenti ripetuti | Aprire un nuovo incidente con parole o CI diversi per evitare il collegamento; chiudere prima del tempo per evitare una riapertura | Revisione delle registrazioni quasi duplicate per testo e servizio; tasso di riapertura; tasso di collegamento alle registrazioni di problema |
| Tasso di riapertura | Chiedere agli utenti di aprire un nuovo ticket anziché riaprire; chiudere i ticket in ritardo per evitare riaperture | Conteggio dei nuovi ticket che fanno riferimento a uno chiuso di recente; conferma di risoluzione da parte del cliente; distribuzione del tempo di chiusura |
| Quota rilevata dal monitoraggio | Creare avvisi rumorosi che aprono incidenti automaticamente, oppure lasciare che le persone riclassifichino come avvisi le segnalazioni degli utenti | Misure di qualità degli avvisi, come la quota di avvisi azionabili (si veda l'Argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi»); audit della fonte degli incidenti |

Una lettura sana è noiosa e spiegabile. I tassi normalizzati sono stabili o in calo per i servizi stabili e salgono quando l'utilizzo o le modifiche aumentano per una ragione che il grafico mostra. La composizione per priorità è stabile, la riclassificazione è bassa e un piccolo insieme di categorie riceve attenzione deliberata. Ripetizioni e riaperture calano dopo il lavoro pianificato sui problemi, e un movimento in qualsiasi metrica ha una spiegazione che qualcuno può dare senza difendere il numero.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Conteggi grezzi degli incidenti | Semplici, facili da spiegare, sempre disponibili | Mescolano utilizzo, qualità e comportamento di segnalazione in un unico numero |
| Tassi rispetto all'utilizzo | Consentono un confronto equo tra periodi e servizi | Richiedono una fonte di utilizzo affidabile; i denominatori possono essere contestati |
| Matrice fissa di impatto e urgenza | Priorità coerente tra i team; verificabile | Può sembrare rigida; i casi limite richiedono giudizio e una via per derogare |
| Priorità a scelta libera | Rapida e flessibile per operatori esperti | Incoerente, esposta alle pressioni, difficile da confrontare nel tempo |
| Albero di categorie dettagliato | Mostra da dove proviene la domanda | Difficile da usare sotto pressione; le persone scelgono la prima corrispondenza o «altro» |
| Elenco breve di categorie con tag | Rapido da applicare e coerente | Meno dettaglio; può nascondere schemi che richiedono analisi del testo |
| Tasso di ripetizione per CI e categoria | Indica cause irrisolte | Dipende da buoni dati sui CI; si verificano sia falsi collegamenti sia mancati collegamenti |

Si accetti che nessuna misura singola sia giusta. Usi i conteggi grezzi per la pianificazione della capacità, i tassi per la salute, la composizione per priorità per il rischio e le ripetizioni per il miglioramento, e mostri ciascuno per ciò che è. Mantenga l'elenco delle categorie abbastanza breve da essere usato e migliori l'albero solo quando una decisione richiede un dettaglio più fine.

## Domande da discutere con il team

**1. Che cosa conta come incidente qui, e tutti applicano la regola allo stesso modo?**
Prenda dieci registrazioni recenti e chieda a ciascuno di etichettarle come incidente, richiesta o altro. Confronti le risposte e discuta i disaccordi. Chi facilita cerchi abitudini come trattare come incidente ogni ticket proveniente da una persona di alto livello, e poi concordi una regola scritta con esempi. Registri la data, così che gli andamenti successivi possano essere letti correttamente.

**2. Quando il volume degli incidenti è aumentato lo scorso trimestre, che cosa sapevamo allora di utilizzo e modifiche?**
Affianchi il grafico a una cronologia di rilasci, campagne e cifre di utilizzo. Chieda quale aumento era spiegato e quale no. La discussione tende a mostrare quanto raramente il denominatore sia sulla pagina. Concordi quale misura di utilizzo ciascun servizio adotterà da ora in poi.

**3. Come si decide la priorità, e quando ci ha sorpresi l'ultima volta?**
Ripercorra la matrice di impatto e urgenza con un esempio recente per ciascun livello di priorità. Chieda dove gli operatori tirano a indovinare e dove clienti o responsabili esercitano pressione. Confronti la priorità di apertura e quella di chiusura di alcune registrazioni. Decida una modifica alla matrice o ai suoi esempi che riduca la discussione.

**4. Quali tre categorie assorbono la maggior parte del nostro volume di incidenti, e chi lavora per rimuoverne la causa?**
Elenchi le categorie principali e, per ciascuna, il responsabile della causa sottostante. Se la risposta è «nessuno», è un risultato. Chieda se la categoria è un vero raggruppamento o un'abitudine di etichettatura. Scelga un raggruppamento da indagare con il team di consegna in questo trimestre.

**5. Come distinguiamo una ripetizione da una riapertura, e che cosa facciamo per ciascuna?**
Mostri al team due o tre coppie di registrazioni e chieda quali sono ripetizioni. Discuta che cosa dice una riapertura sulla qualità della prima correzione e che cosa dice una ripetizione sulla causa. Chi facilita orienti il gruppo a collegare i raggruppamenti ricorrenti alle registrazioni di problema anziché chiuderli uno alla volta. Concordi chi li rivede e con quale frequenza.

**6. Che cosa saremmo tentati di cambiare se il nostro numero di incidenti fosse esaminato ogni settimana dai dirigenti?**
Chieda al gruppo di immaginare il numero esposto su una parete. Quali abitudini cambierebbero: come si registra, come si accorpano i ticket, come si fissano le priorità? Nomini apertamente la pressione, senza attribuire colpe. Concordi quale salvaguardia mostrerebbe il cambiamento e chi la osserva.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna ricevono l'output di questo argomento come domanda. Le viste per categoria e per ripetizione mostrano quali parti del prodotto causano più problemi, e la composizione per priorità mostra quanto lavoro di interruzione prevedere. I team dovrebbero trattare il lavoro originato da incidenti come parte della propria capacità, mantenerlo visibile nelle misure di flusso e usare i gruppi di ripetizioni per giustificare nel backlog il lavoro sull'affidabilità (si veda l'Argomento 2.9 «Lavoro operativo e lavoro non pianificato»). Contare gli incidenti per rilascio è un andamento utile, ma non dovrebbe mai diventare una misura di colpa per i singoli sviluppatori.

### Team di servizio e operations

I team di servizio e di operazioni creano le registrazioni e sentono la pressione sulla priorità. Traggono vantaggio da una matrice chiara, da un elenco breve di categorie e da modi rapidi per collegare i duplicati. Dovrebbero verificare i dati nei propri strumenti, come la quota di registrazioni non categorizzate e il tasso di riclassificazione, prima che lo facciano altri. I team operativi sono ben collocati per condurre la revisione mensile a campione e per alimentare la gestione dei problemi con i gruppi ricorrenti.

### Leadership e governance

I responsabili vogliono sapere se il servizio sta migliorando e dove investire. Dovrebbero chiedere tassi normalizzati, composizione per priorità e vista delle ripetizioni, con le annotazioni, e resistere a una cifra unica di volume. Gli obiettivi di «meno incidenti» invitano alla soppressione, perciò fissino aspettative su risultati come l'impatto sui clienti e la riduzione delle ripetizioni. La governance dovrebbe essere proprietaria della matrice di priorità e approvarne le modifiche, annotando l'effetto sulle linee di tendenza.

### Clienti e utenti

I clienti vivono gli incidenti come lavoro interrotto, non come categorie. Hanno bisogno di un modo semplice per segnalare un guasto, di una priorità equa basata sul proprio impatto e di aggiornamenti onesti. Se le segnalazioni vengono scoraggiate o le priorità appaiono arbitrarie, il volume calerà e con esso la fiducia. Si condividano i risultati principali in termini che gli utenti riconoscono, come i servizi migliorati e i problemi rimossi (si veda l'Argomento 6.1 «Metriche di soddisfazione del cliente»).

## In pratica: un esempio di ITIL agile

Il reparto IT di un ospedale regionale supporta un sistema di cartelle cliniche, un sistema di prenotazione e uno strumento di messaggistica per il personale. Tutti i numeri di questo esempio sono illustrativi.

Il report mensile mostra 640 incidenti nell'ultimo mese del trimestre, rispetto ai 520 del mese precedente. La direzione chiede un piano di recupero. Il responsabile del servizio di prenotazione, il cui conteggio è salito di più, chiede di esaminare i dati prima di convenire che il servizio sia peggiorato.

Emergono tre fatti. Primo, il sistema di prenotazione ha acquisito quel mese un nuovo gruppo di ambulatori, e gli utenti attivi sono aumentati di circa il 30 per cento (illustrativo). Normalizzato, il tasso di incidenti ogni 1.000 sessioni è rimasto grosso modo invariato. Secondo, 90 delle registrazioni in più erano collegate a un unico incidente padre, un'interfaccia con un sistema di laboratorio non funzionante, quindi il numero di guasti distinti è aumentato solo di una manciata. Terzo, la composizione per priorità è cambiata: la quota della priorità più alta era del 2 per cento il mese prima ed è ora del 7 per cento. Anche il tasso di riclassificazione era raddoppiato, e un campione di 20 registrazioni ha mostrato che circa la metà delle priorità alte era stata abbassata alla chiusura.

Il team prende tre decisioni. Riporta separatamente incidenti padre e registrazioni collegate. Aggiunge al report le sessioni attive come denominatore. Tiene una sessione di mezz'ora con il service desk e i referenti clinici per applicare la matrice di impatto e urgenza alle registrazioni campionate, il che mostra che «un ambulatorio non riesce a prenotare i pazienti» era stato trattato come medio da alcuni operatori e come alto da altri. La matrice riceve due esempi clinici per ogni cella.

Il rischio di manipolazione che individuano è silenzioso. Un responsabile aveva chiesto agli operatori di evitare la priorità 1 per il sistema di prenotazione perché ciascuna innescava una revisione, quindi le registrazioni venivano aperte a una priorità inferiore e alzate in seguito, oppure non alzate affatto. Il tasso di riclassificazione e la revisione a campione hanno messo in luce lo schema. Il team concorda che le revisioni servono per imparare, pubblica tale affermazione e monitora come salvaguardia la quota di incidenti aperti sotto la priorità di chiusura. Anche la concentrazione per categoria mostra il guasto dell'interfaccia in cima all'elenco, perciò viene aperta una registrazione di problema e una correzione viene pianificata con il team delle interfacce.

## Lente di settore

**Startup.** Il volume è piccolo e il team conosce ogni incidente, quindi tassi e matrici possono sembrare pesanti. Mantenete un semplice conteggio per servizio e un breve elenco di categorie, e scrivete in una pagina che cosa conta come incidente. Osservate le ripetizioni, perché un piccolo team può eliminare rapidamente un guasto ricorrente e recuperare tempo.

**Piccola impresa.** Il service desk può essere una sola persona che usa uno strumento in hosting. Usate i report standard dello strumento, mantenete la priorità a pochi livelli con una semplice regola di impatto e urgenza e verificate che le richieste non siano contate come incidenti. Confrontate mese su mese con note sui cambiamenti, come nuovo personale o nuovo software.

**Grande impresa.** Molti servizi, fornitori e desk rendono la coerenza il problema principale. Concordate una sola matrice di impatto e urgenza, un solo schema di categorie con profondità limitata e una sola regola di deduplicazione, e lasciate che i team locali aggiungano tag senza modificare lo schema condiviso. Normalizzate per servizio e rivedete gli andamenti con grafici di controllo e annotazioni. Gli incidenti causati dai fornitori richiedono una definizione condivisa nei contratti (si veda l'Argomento 5.1 «Metriche SLA, OLA e XLA»).

**Pubblica amministrazione e settore pubblico.** Gli incidenti possono comportare obblighi di rendicontazione, esigenze di audit e interesse pubblico, in particolare dove i servizi incidono sui diritti o sulla sicurezza dei cittadini. Documentate la matrice di priorità e lo schema di categorie, conservate una traccia di audit delle modifiche di priorità e fate attenzione a qualsiasi conteggio pubblicato, poiché la rendicontazione pubblica può creare forti pressioni su come le registrazioni vengono scritte. I dati di utilizzo possono essere limitati dalle norme sulla riservatezza, perciò dichiarate il denominatore che potete legittimamente usare (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

La motivazione è la gestione della domanda. Gli incidenti consumano tempo qualificato, interrompono il lavoro pianificato e disturbano gli utenti. Comprendere volume, priorità e ripetizioni permette a un'organizzazione di rimuovere le cause, dimensionare l'organico sulla domanda reale e mostrare ai dirigenti dove il lavoro sull'affidabilità darebbe frutti.

Il costo ha tre parti. L'avvio comprende la definizione di incidente e richiesta, l'accordo sulla matrice di priorità e sullo schema di categorie, e il collegamento dei dati di utilizzo ai servizi. Il costo di esercizio è lo sforzo di mantenere pulite le registrazioni, una revisione mensile a campione e una persona che mantenga il report. Un terzo costo è il tempo per agire sui risultati, da cui proviene la maggior parte del ritorno, perciò si pianifichi la capacità per esso.

Il ritorno si descrive meglio come schemi che potete misurare da soli. Tra questi: meno ripetizioni dopo il lavoro sui problemi, meno tempo speso in dispute sulla priorità, meno escalation a sorpresa e una migliore corrispondenza tra organico e domanda. Si eviti di promettere una riduzione percentuale degli incidenti; dipende dal servizio, dal punto di partenza e dal lavoro svolto. Il costo totale di proprietà è per lo più tempo delle persone, perciò lo si conti e lo si confronti con il tempo che gli incidenti ripetuti consumano attualmente.

## Anti-pattern e insidie

- **Riportare un conteggio grezzo come punteggio di salute.** Lo muovono utilizzo, modifiche e comportamento di segnalazione. Mostri insieme tassi normalizzati, conteggi grezzi e annotazioni.
- **Obiettivi di meno incidenti.** Premiano la soppressione e l'etichettatura errata. Fissi obiettivi di riduzione delle ripetizioni e di impatto sui clienti, e mantenga il numero di incidenti come informazione.
- **Contare le richieste come incidenti.** Il volume sale e il servizio appare peggiore di quanto sia. Separi i tipi di registrazione e riporti ciascuno.
- **Priorità a scelta libera.** La priorità diventa trattativa e la composizione perde significato. Usi una matrice pubblicata e campioni per verificare la coerenza.
- **Un albero di categorie che nessuno usa.** Le persone scelgono la prima corrispondenza e «altro» cresce. Lo mantenga breve, riveda «altro» ogni mese e sfoltisca ciò che non è usato.
- **Contare ogni ticket collegato come un guasto separato.** Una singola interruzione domina il mese. Riporti gli incidenti padre e il numero di registrazioni collegate.
- **Classificare operatori o team in base ai conteggi degli incidenti.** I conteggi per persona riflettono l'assegnazione del lavoro e le abitudini sui ticket. Aggreghi ai servizi e riveda gli schemi, non le persone.
- **Ignorare le ripetizioni.** Lo stesso guasto viene corretto ancora e ancora, e nessuno è responsabile della causa. Colleghi le ripetizioni alle registrazioni di problema e assegni un responsabile.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizioni e conteggio | Le persone non concordano su che cosa sia un incidente; i conteggi provengono da esportazioni ad hoc | Alcuni team separano le richieste dagli incidenti; le regole differiscono | Una definizione scritta, un filtro e una regola di deduplicazione per tutti i team | Cambi di definizione registrati e mostrati nei grafici di andamento; quota di registrazioni non categorizzate monitorata | Definizioni riviste con fornitori e clienti e riviste quando smettono di orientare le decisioni |
| Normalizzazione e interpretazione | Solo conteggi grezzi | Dati di utilizzo usati da pochi servizi | Una misura di utilizzo indicata per ogni servizio da una fonte separata | Grafici di controllo con annotazioni usati nelle revisioni | Dati di utilizzo, modifiche e incidenti collegati tra team e fornitori per spiegare la domanda |
| Pratica della priorità | Priorità scelta a sensazione | La matrice esiste in alcuni team | Una matrice con esempi, mostrata dove si sceglie la priorità | Composizione e tasso di riclassificazione rivisti e campionati ogni mese | Matrice calibrata con clienti e responsabili clinici o di business al mutare delle condizioni |
| Ripetizioni e schemi | Ripetizioni notate a memoria | Elenchi di categorie rivisti occasionalmente | Tassi di ripetizione e riapertura riportati mensilmente con una finestra dichiarata | Gruppi ricorrenti collegati a registrazioni di problema con responsabili e date | Rimozione delle cause tra team e fornitori finanziata e tracciata fino alla riduzione della domanda |

## Checklist

- [ ] Una definizione scritta separa gli incidenti da richieste, avvisi e problemi.
- [ ] Incidenti padre e registrazioni collegate sono riportati separatamente.
- [ ] Ogni incidente è attribuito a un servizio del catalogo dei servizi.
- [ ] Ogni servizio ha una misura di utilizzo indicata, proveniente da una fonte diversa dallo strumento degli incidenti.
- [ ] I report mostrano il conteggio grezzo, il tasso normalizzato e le annotazioni per rilasci e campagne.
- [ ] Si usa un grafico di controllo prima che qualcuno reagisca a una variazione del volume settimanale.
- [ ] La priorità è derivata da una matrice pubblicata di impatto e urgenza con esempi.
- [ ] Composizione per priorità e tasso di riclassificazione sono rivisti insieme ogni mese.
- [ ] L'elenco delle categorie è breve, e la quota di registrazioni «altro» e non categorizzate è monitorata.
- [ ] I tassi di ripetizione e di riapertura usano finestre dichiarate e sono riportati separatamente.
- [ ] I gruppi ricorrenti sono collegati a registrazioni di problema con un responsabile.
- [ ] Nessun report classifica i singoli operatori in base ai conteggi degli incidenti.

## Prompt IA

**Verificare l'ambiguità di una definizione di volume degli incidenti.**

```text
Contiamo il volume degli incidenti per [servizio o team] da [strumento ITSM].
Il nostro filtro attuale è [descrivi tipi di registrazione, stati ed esclusioni]
e il nostro periodo è [periodo]. Esamina la definizione per individuare
ambiguità, compreso il modo in cui sono trattati richieste, duplicati, ticket
accorpati e registrazioni annullate. Suggerisci una regola scritta chiara e un
breve elenco di esempi che risolverebbero i disaccordi. Non inventare valori di
riferimento. Elenca le tue ipotesi e le domande a cui devo rispondere per
completare la definizione.
```

**Progettare un tasso di incidenti normalizzato.**

```text
Per il servizio [nome del servizio] voglio un tasso di incidenti normalizzato
per l'utilizzo. Le misure di utilizzo disponibili sono [elenco, per esempio
utenti attivi, sessioni, transazioni] da [fonte]. Confronta le opzioni, indica
quale si adatta meglio e perché, e descrivi che cosa potrebbe distorcere
ciascuna. Proponi come mostrare in un unico grafico il conteggio grezzo, il
tasso e le annotazioni per [eventi come rilasci o campagne]. Non inventare
cifre o soglie. Elenca le tue ipotesi.
```

**Esaminare una matrice di impatto e urgenza.**

```text
Ecco la nostra matrice di priorità: [incolla livelli di impatto, livelli di
urgenza e priorità risultanti], ed ecco [numero] incidenti di esempio
anonimizzati: [incolla brevi descrizioni]. Applica la matrice a ciascun esempio,
indica dove due lettori potrebbero giungere a priorità diverse e suggerisci
formulazioni o esempi che riducano il disaccordo. Individua i modi in cui la
matrice potrebbe essere manipolata. Non inventare obiettivi di risposta o
valori di riferimento. Elenca le tue ipotesi.
```

**Analizzare categorie e ripetizioni per individuare candidati al miglioramento.**

```text
Ho registrazioni di incidenti per [periodo] con questi campi: [elenca i campi,
per esempio servizio, categoria, CI, ora di apertura, ora di chiusura, flag di
riapertura]. Descrivi un metodo per trovare le categorie principali, per
separare le riaperture dalle ripetizioni usando una finestra di [finestra] e per
scegliere [numero] candidati per l'indagine sui problemi. Spiega come
verificare la presenza di categorie generiche e di registrazioni quasi
duplicate. Non inventare schemi in dati che non ti ho mostrato. Elenca le tue
ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare l'argomento che definisce una metrica correlata e la salvaguardia che dovrebbe affiancarla.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che un argomento di metriche modificato mantenga completi cronometri, vettori di manipolazione e salvaguardie.

## Punti chiave

- Il volume degli incidenti riflette utilizzo, modifiche e comportamento di segnalazione quanto la qualità, perciò va normalizzato e annotato.
- Leggere la priorità come una composizione, derivarla da una matrice pubblicata di impatto e urgenza e osservare il tasso di riclassificazione.
- Riportare separatamente incidenti padre e registrazioni collegate, così che una singola interruzione non sembri un mese di lavoro ordinario.
- Ripetizioni e riaperture sono i segnali più utili, perché indicano cause e correzioni che non hanno retto.
- Aggregare ai servizi e ai team, mai ai singoli operatori, e abbinare ogni metrica a una salvaguardia.
- Usare grafici di controllo e viste di Pareto per decidere dove guardare, poi dare a ogni gruppo un responsabile e capacità.

## Riferimenti e letture di approfondimento

1. Axelos (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. ISO/IEC 20000-1, *Information technology: Service management: Service management system requirements*, International Organization for Standardization.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [Help desk software](https://en.wikipedia.org/wiki/Help_desk_software).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
13. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
