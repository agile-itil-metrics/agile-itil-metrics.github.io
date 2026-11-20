# La legge di Goodhart e la psicologia delle metriche

**Qualsiasi numero che si premi, si usi per classificare o si agiti come minaccia inizierà a cambiare il lavoro che doveva descrivere, perciò ogni metrica di questo libro è usata come una domanda da discutere in team ed è abbinata a una salvaguardia che ne intercetta la manipolazione.**

## Panoramica e motivazione

La [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) è il più antico avvertimento della misurazione. L'economista Charles Goodhart notò nel 1975, scrivendo della politica monetaria britannica, che una regolarità statistica tende a crollare una volta che le autorità esercitano su di essa pressioni a fini di controllo. La formulazione popolare è venuta dopo. L'antropologa Marilyn Strathern la espresse nel 1997 così: «Quando una misura diventa un obiettivo, cessa di essere una buona misura». Le due frasi dicono la stessa cosa: nel momento in cui un numero viene usato per orientare le persone, le persone orientano il numero.

La stessa idea ha altri nomi. La [legge di Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law), dello scienziato sociale Donald Campbell, afferma che quanto più un indicatore quantitativo viene usato per prendere decisioni, tanto più è soggetto a pressioni corruttive e tanto più distorce i processi che dovrebbe monitorare. L'[effetto cobra](https://en.wikipedia.org/wiki/Cobra_effect) è la storia di una taglia che produsse più di ciò che doveva eliminare. Ciascuno è un esempio di [incentivo perverso](https://en.wikipedia.org/wiki/Perverse_incentive): una ricompensa che spinge il comportamento lontano da ciò che voleva chi la offriva.

I team che costruiscono ed erogano servizi IT sono insolitamente esposti. La consegna continua e la gestione dei servizi IT (ITSM), così come codificata da [ITIL](https://en.wikipedia.org/wiki/ITIL), producono entrambe un flusso costante di timestamp, conteggi e stati. Un sistema di ticketing registra quando un ticket è stato aperto, quando è stato assegnato, quando il cronometro si è fermato e quando è stato chiuso. Uno strumento di consegna registra quando il lavoro è iniziato e finito. Questi numeri sono economici da raccogliere, facili da rappresentare in un grafico e facili da trasformare in obiettivi. Sono anche facili da spostare senza aiutare nessuno.

Tre termini ricorrono in questo argomento e nel resto del libro. Una **misura** descrive qualcosa. Un **obiettivo** (target) è un numero che qualcuno è tenuto a raggiungere. Una **salvaguardia** (guardrail) è una seconda misura o una pratica, scelta in anticipo, che si muoverebbe se la prima misura venisse manipolata. Il passaggio da misura a obiettivo è dove iniziano i guai, e la salvaguardia è il modo per accorgersene.

Questo argomento stabilisce la regola che governa ogni altro argomento. Ogni famiglia di metriche del libro arriva con il proprio vettore di manipolazione (come tipicamente viene manipolata) e la propria salvaguardia. Se un argomento successivo sembra ometterli, lo si consideri incompleto.

### Perché le persone manipolano i numeri

La manipolazione di solito non è disonestà. È la risposta ordinaria di persone capaci agli incentivi che hanno davanti. Operano quattro forze.

- **Pressione.** Il bonus, la valutazione, il rinnovo del contratto o la reputazione di qualcuno dipendono dal numero. Anche senza un legame formale, le persone deducono ciò che sta a cuore alla direzione da ciò che la direzione rappresenta nei grafici.
- **Surrogazione.** La [surrogazione](https://en.wikipedia.org/wiki/Surrogation) (surrogation) è la tendenza a trattare la misura come se fosse la cosa che rappresenta. I ricercatori che l'hanno studiata nelle organizzazioni hanno rilevato che la retribuzione incentivante legata a una misura la rende più probabile. Un team che monitora i «ticket chiusi» comincia a credere che l'obiettivo siano i ticket chiusi, non i problemi risolti.
- **Paura.** Quando un cattivo numero porta con sé la colpa, le persone nascondono le cattive notizie. Gli incidenti vengono declassati, le interruzioni rietichettate come «manutenzione pianificata» e i difetti registrati come richieste di funzionalità.
- **Ottimizzazione locale.** Un team migliora la parte del sistema su cui viene giudicato e scarica il costo su una parte su cui non lo è. Il service desk chiude in fretta e il secondo livello eredita le ripetizioni.

Comprendere queste forze conta perché il rimedio non è una sorveglianza più severa. È cambiare le condizioni che rendono razionale la manipolazione.

## Principi chiave

- **Misurare per imparare, non per giudicare.** Si mostrino i numeri per primi al team che svolge il lavoro e li si usi per porre domande.
- **Abbinare ogni metrica a una salvaguardia.** Velocità con qualità, volume con risultato, costo con esperienza.
- **Descrivere team e sistemi, non classificare mai le persone.** Le classifiche individuali sono il modo più rapido di corrompere una fonte di dati.
- **Preferire risultati e andamenti agli obiettivi.** Una direzione e una conversazione valgono più di una soglia.
- **Scrivere la definizione, compresi i cronometri.** Le definizioni ambigue sono il luogo in cui si nasconde la manipolazione.
- **Aspettarsi il cambiamento.** Si ritiri o si riprogetti una metrica quando smette di orientare le decisioni.
- **Rendere sicure le cattive notizie.** Se la rendicontazione onesta viene punita, i dati mentiranno.

## Definizioni delle metriche

Le metriche seguenti non sono misure di servizio o di consegna. Sono misure della salute di una pratica di metriche stessa, e mostrano la forma che assume ogni tabella di metriche di questo libro. Le prime tre sono esempi di salvaguardia che compaiono in tutti gli argomenti successivi.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Copertura delle salvaguardie | Quota delle metriche rendicontate che hanno una salvaguardia nominata e monitorata | metriche con una salvaguardia / metriche rendicontate | percentuale | Registro delle metriche (vedi Argomento 1.4 «Governance e responsabilità delle metriche») | Misurazione e rendicontazione; miglioramento continuo | Retrospettiva degli accordi di lavoro | Trimestrale |
| Tasso di riapertura | Quota dei ticket o degli elementi di lavoro chiusi che vengono riaperti entro una finestra dichiarata | elementi riaperti entro 14 giorni / elementi chiusi nel periodo | percentuale | Cronologia degli stati dello strumento ITSM o dell'issue tracker | Gestione degli incidenti; gestione dei problemi | Definition of done; difetti sfuggiti | Mensile |
| Numero di modifiche alle definizioni | Numero di modifiche alle definizioni delle metriche o ai flussi di stato in un periodo, con le relative motivazioni | conteggio delle voci nel registro delle modifiche alle definizioni | conteggio | Registro delle modifiche del registro delle metriche | Misurazione e rendicontazione | Accordi di lavoro | Trimestrale |
| Tasso di utilizzo delle metriche | Quota delle metriche rendicontate che sono state citate in una decisione durante il periodo | metriche citate in una decisione registrata / metriche rendicontate | percentuale | Registro delle decisioni o note di revisione | Miglioramento continuo | Azioni di retrospettiva | Trimestrale |
| Divario di percezione | Differenza tra il risultato di un sondaggio di soddisfazione e un livello di servizio ricavato dai ticket per lo stesso servizio | tasso ricavato dal sondaggio meno tasso ricavato dal tracker | punti percentuali | Strumento di sondaggio e strumento ITSM | Gestione dei livelli di servizio | Feedback delle revisioni con gli stakeholder | Trimestrale |

Il tasso di riapertura conta solo gli elementi riaperti nello stesso record. Un elemento chiuso e poi riproposto come nuovo ticket non compare. Parte del senso della sezione successiva è che la salvaguardia ha bisogno di una propria salvaguardia, come il collegamento dei ticket duplicati agli originali.

## Raccomandazioni

### Progettare il sistema di misurazione

**1. Partire da una domanda, non da un numero.** Prima di aggiungere una metrica, scriva la domanda a cui risponde e la decisione che orienta. «Gli utenti vedono risolti i loro problemi al primo tentativo?» è una domanda. «Ridurre il tempo medio di gestione» è un obiettivo che si finge tale. Una metrica senza una decisione collegata è candidata al ritiro.

**2. Scegliere metriche in tensione.** Un singolo numero invita all'ottimizzazione eccessiva, perciò scelga coppie che si tirano a vicenda: lead time con tasso di fallimento delle modifiche, velocità di chiusura dei ticket con tasso di riapertura, disponibilità con esperienza riferita dagli utenti. La coppia non deve essere una formula. Deve essere mostrata insieme, sulla stessa pagina.

**3. Definire i cronometri e le esclusioni.** Per ogni misura temporale, scriva dove parte il cronometro, dove si ferma e quando può sospendersi. La maggior parte della manipolazione nei dati di servizio sta in questi confini: un ticket messo in «in attesa del cliente» ferma il cronometro del livello di servizio, e una modifica registrata solo dopo essere stata applicata sfugge al lead time delle modifiche. Se esiste uno stato di sospensione, si riporti quanto spesso viene usato.

**4. Usare distribuzioni e percentili.** Una media dei tempi di risoluzione dei ticket può migliorare perché alcuni ticket facili sono stati chiusi rapidamente mentre quelli difficili invecchiano. Si mostrino la mediana e un percentile alto (per esempio l'85° o il 95°), e si mostrino gli elementi aperti più vecchi. L'età dell'elemento di lavoro e il ticket aperto più vecchio sono difficili da manipolare senza completare davvero il lavoro (vedi Argomento 2.1 «Misure del flusso»).

**5. Tenere un registro delle metriche.** Un breve registro elenca ciascuna metrica, il suo responsabile, la sua definizione, la sua fonte di dati, il suo vettore di manipolazione, la sua salvaguardia e la data dell'ultima revisione. È noioso ed è la singola abitudine più efficace di questo argomento (vedi Argomento 1.4 «Governance e responsabilità delle metriche»).

### Introdurre le metriche in modo sicuro

**6. Mostrare prima al team, e mostrare i dati grezzi.** I team che vedono i numeri prima della direzione sono più disposti a metterne in discussione l'accuratezza. Si parta dagli elementi sottostanti, non dal grafico. Se i dati non possono sopravvivere a una conversazione con le persone che li hanno generati, non possono sopravvivere a una dashboard.

**7. Separare le viste di apprendimento da quelle di responsabilità.** La vista di lavoro di un team può contenere molte misure, comprese quelle poco gradevoli. Ciò che arriva alla direzione dovrebbe essere un insieme ridotto e stabile. Se la direzione chiede la vista di lavoro, ci si aspetti che la vista di lavoro cambi per apparire migliore.

**8. Non legare retribuzione, provvedimenti disciplinari o classifiche individuali a una metrica.** Si può chiedere ai team di spiegare i propri numeri e di migliorarli. Obiettivi individuali su conteggi di ticket, story point o commit insegnano alle persone a massimizzare il conteggio. L'approccio degli [indicatori chiave di prestazione](https://en.wikipedia.org/wiki/Key_performance_indicator) (KPI) può funzionare quando gli indicatori sono scelti per l'intero sistema e rivisti con regolarità. Fallisce quando diventa una scheda di valutazione per persona.

**9. Rendere sicura la rendicontazione onesta.** La [sicurezza psicologica](https://en.wikipedia.org/wiki/Psychological_safety) è la convinzione che non si verrà puniti per aver parlato di un errore o di una preoccupazione. Una revisione senza colpe di un incidente ne è un esempio nella pratica. Senza di essa, i conteggi degli incidenti calano per la ragione sbagliata: le persone smettono di segnalare.

### Mantenere onesto il sistema

**10. Condurre una revisione della manipolazione.** Una volta al trimestre, ponga al team una domanda su ciascuna metrica rendicontata: «Se volessimo che questo numero apparisse bene senza aiutare nessuno, che cosa faremmo?» Scriva le risposte, poi verifichi se la salvaguardia le intercetterebbe tutte. L'esercizio è economico, produce idee utili e sposta la conversazione dal sospetto alla progettazione.

**11. Verificare le definizioni rispetto alla realtà.** Campioni un piccolo numero di elementi chiusi e li legga. Erano davvero risolti? La priorità era onesta? Lo stato «in attesa del cliente» significava davvero che si attendeva il cliente? Un campione di quindici minuti spesso dice più di un mese di dashboard.

**12. Ritirare le metriche.** Una metrica che non è stata citata in una decisione per due trimestri è un costo generale. La si rimuova, e lo si dica. Meno metriche, ciascuna affidabile, valgono più di molte.

## Vettori di manipolazione e protezioni

La tabella riguarda le metriche della sezione precedente. Gli argomenti successivi applicano la stessa forma alle misure di servizio e di consegna.

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Copertura delle salvaguardie | Nominare una salvaguardia sulla carta senza mai monitorarla | Rivedere il registro: una salvaguardia conta solo se il suo ultimo valore compare sulla stessa dashboard |
| Tasso di riapertura | Chiudere il ticket e aprirne uno nuovo anziché riaprirlo; allungare la finestra finché le riaperture ne restano fuori | Tasso di ticket duplicati e collegati; ricorrenza della stessa causa tra i ticket |
| Numero di modifiche alle definizioni | Non registrare le modifiche in modo che il conteggio resti basso; cambiare un flusso senza dirlo a nessuno | Confrontare a ogni revisione il modello di stato nello strumento con il registro |
| Tasso di utilizzo delle metriche | Citare ogni metrica nel registro delle decisioni come formalità | Chiedere che cosa è cambiato grazie alla citazione; campionare il registro |
| Divario di percezione | Sondare solo gli utenti soddisfatti; orientare i sondaggi verso momenti successivi a un'interazione positiva | Tasso di risposta al sondaggio e composizione dei rispondenti; commenti aperti letti ad alta voce in una revisione |

Una lettura sana è quella di una pratica di metriche che cambia: le definizioni vengono adeguate per ragioni annotate, le metriche vanno e vengono, e il team sa raccontare una decisione che un numero ha cambiato.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Misurare senza obiettivi | Riduce la manipolazione; invita a una discussione onesta | Può scivolare in rendiconti su cui nessuno agisce |
| Obiettivi con salvaguardie | Dà direzione e urgenza; la coppia limita la manipolazione | Più lavoro di manutenzione; anche la salvaguardia viene manipolata col tempo |
| Metriche individuali | Facili da capire; sembrano eque | Corrompono i dati; danneggiano la collaborazione |
| Metriche di team e di servizio | Corrispondono a come il lavoro avviene davvero | Più difficili da attribuire; nascondono le esigenze di supporto individuali |
| Poche metriche | Più facili da fidarsi e da ricordare | Punti ciechi; possono sfuggire un nuovo problema |
| Molte metriche | Copertura ampia | Diluiscono l'attenzione; ciascuna è governata debolmente |

La risposta in prosa è usare gli obiettivi con parsimonia, per condizioni ben comprese e difficili da manipolare, come un obiettivo di livello di servizio richiesto dagli utenti. Anche in quel caso, si preferisca legare l'obiettivo al servizio, non alla valutazione di una persona. Lo scopo non è togliere i numeri dalle decisioni. È mantenere i numeri collegati alla realtà tenendo dalla propria parte le persone che li producono.

## Domande da discutere con il team

**1. Quale numero della nostra dashboard attuale saremmo più tentati di migliorare senza migliorare il lavoro?**
Si parta dalla metrica che le persone guardano per prima, poi si passi a quella su cui la direzione chiede. Si chiedano mosse specifiche: che cosa faremmo ai dati se fossimo sotto pressione? Il facilitatore dovrebbe annotare ogni risposta senza giudicarla, perché l'elenco diventa i vettori di manipolazione del registro. Si finisca chiedendo quali di quelle mosse le nostre salvaguardie intercetterebbero e quali no.

**2. Dove parte e dove si ferma il cronometro nella nostra misura temporale più importante, e chi lo ha deciso?**
Chieda al gruppo di disegnare su una lavagna il ciclo di vita del ticket o dell'elemento di lavoro e di segnare ogni stato. Cerchi gli stati in cui il tempo può sparire, come l'attesa di un cliente o la sospensione. Conti quanto spesso ciascuno stato viene usato e da chi. La conversazione rivela spesso che due team usano la stessa parola in modo diverso.

**3. Quando è stata l'ultima volta che un numero ci ha fatto fare qualcosa di poco utile?**
Inviti a raccontare storie, non a incolpare. Esempi comuni sono chiudere i ticket prima di verificare, spezzare le modifiche per aumentare i conteggi dei rilasci, o riclassificare un incidente per evitare un rapporto di violazione. Il facilitatore dovrebbe chiedere che cosa la persona stesse cercando di proteggere. La risposta di solito mostra l'incentivo da cambiare.

**4. Chi vede le nostre metriche, e che cosa ne succede lì?**
Segua ogni metrica dal team al suo pubblico. Chieda se una qualche versione di essa viene usata per confrontare team o persone. Chieda che cosa il team mostrerebbe se il pubblico fosse diverso. Dove il team cambierebbe i numeri che mostra, c'è un divario di fiducia di cui parlare con il pubblico.

**5. Qual è la salvaguardia per ciascuna delle nostre cinque metriche più importanti, ed è sulla stessa pagina?**
Faccia un elenco a due colonne su una lavagna. Se una metrica non ha salvaguardia, si concordi un candidato e un responsabile che lo provi per un trimestre. Se una salvaguardia esiste ma viene guardata di rado, si discuta il perché. Si eviti di scegliere una salvaguardia che sia semplicemente l'inverso della metrica, perché non dice nulla di nuovo.

**6. Quale metrica dovremmo ritirare in questo trimestre?**
Chieda delle evidenze: quando è stata usata l'ultima volta in una decisione? Se nessuno lo ricorda, la si ritiri per un periodo di prova e si veda se qualcuno se ne accorge. Il facilitatore dovrebbe trattare il ritiro come un evento normale. I team che non abbandonano mai le metriche finiscono con rendiconti di cui nessuno si fida o che nessuno legge.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna incontrano la manipolazione attraverso velocity, throughput e conteggi dei rilasci. La [velocity](https://en.wikipedia.org/wiki/Velocity_(software_development)) in particolare è uno strumento di pianificazione per un singolo team, non una misura di produttività, e confrontare i team in base ad essa porta a stime gonfiate. I team di consegna dovrebbero tenere per sé le misure di lavoro, pubblicare all'esterno un piccolo insieme e abbinare ogni misura di velocità a una misura di qualità (vedi Argomento 2.5 «Metriche di previsione e pianificazione della consegna»).

### Team di servizio e operations

I team di servizio incontrano la manipolazione attraverso il tempo di risoluzione, la risoluzione al primo contatto e il rispetto dei livelli di servizio. Gli stati che fermano il cronometro e i campi di priorità sono i punti abituali di deriva. I team di operazioni dovrebbero verificare con regolarità le transizioni di stato, riportare l'uso degli stati di sospensione e osservare i contatti ripetuti e il tasso di riapertura accanto alla velocità. I team di reperibilità dovrebbero fare particolare attenzione alle misure che premiano il non essere chiamati, perché puniscono gli avvisi onesti (vedi Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»).

### Leadership e governance

I dirigenti stabiliscono gli incentivi, spesso senza volerlo. Una domanda posta in una revisione («perché questo è rosso?») insegna al team che cosa nascondere. I dirigenti dovrebbero chiedere che cosa il team ha imparato da un numero, tenere le classifiche fuori dalla stanza, proteggere la rendicontazione franca e finanziare il lavoro di miglioramento che un cattivo numero rivela. Gli organi di governance dovrebbero attendersi il registro delle metriche e la revisione della manipolazione come parte della rendicontazione, e trattare come normale una modifica definita di una metrica.

### Clienti e utenti

Gli utenti vivono l'effetto della manipolazione come un servizio che sulla carta appare buono e nella pratica si sente scadente: un ticket chiuso che non è stato risolto, un'interruzione etichettata come pianificata, un sondaggio che non li ha mai raggiunti. Gli utenti sono anche la migliore salvaguardia. Il loro feedback, sotto forma di sondaggi, reclami e commenti, dovrebbe stare accanto ai numeri operativi e dovrebbe essere letto per intero, non ridotto a un punteggio (vedi Argomento 6.1 «Metriche di soddisfazione del cliente»).

## In pratica: un esempio di ITIL agile

Il reparto IT di un ospedale regionale gestisce un service desk e diversi team di prodotto che costruiscono applicazioni cliniche. I numeri di questo esempio sono illustrativi.

La direzione fissa l'obiettivo di chiudere il 90 per cento degli incidenti entro il tempo concordato. Entro due mesi la dashboard mostra il 94 per cento. La responsabile delle operazioni di servizio è soddisfatta ma a disagio, perché il personale clinico si lamenta di più, non di meno. Chiede al team di condurre una revisione della manipolazione su quella metrica.

Il team abbozza il ciclo di vita del ticket. Scopre che i ticket passano in «in attesa del cliente» in media due volte ciascuno, e che il tempo trascorso in quello stato è aumentato. Un campione di 30 ticket chiusi mostra che 7 sono stati chiusi con la nota «nessuna risposta dall'utente» dopo un solo tentativo di chiamata. Scopre inoltre che il tasso di riapertura è stabile solo perché agli utenti veniva detto di «aprire un nuovo ticket» quando il problema si ripresentava.

Il team apporta tre modifiche. Primo, il grafico del tempo di risoluzione mostra ora la mediana, il 90° percentile e il ticket aperto più vecchio, insieme alla quota di tempo trascorsa negli stati di sospensione. Secondo, la dashboard aggiunge un tasso di contatti ripetuti, definito come la quota di nuovi ticket dello stesso utente sullo stesso servizio entro 14 giorni. Terzo, un breve sondaggio viene inviato a un campione casuale di ticket chiusi, e i suoi commenti aperti vengono letti nella revisione mensile.

Tre mesi dopo il numero principale di conformità scende all'88 per cento, il che sembra una cattiva notizia. Il tasso di contatti ripetuti, tuttavia, è calato e i commenti del sondaggio sui problemi irrisolti sono diventati più rari. La responsabile delle operazioni dice alla direzione che il vecchio numero era gonfiato e che il nuovo quadro è più onesto, e le chiede di accettare un obiettivo di livello di servizio basato sulla definizione corretta. La decisione, registrata nel registro delle decisioni, è di fissare l'obiettivo dopo un altro trimestre di dati anziché subito.

## Lente di settore

**Startup.** I piccoli team hanno poche metriche e molta fiducia, il che aiuta. Il pericolo è importare troppo presto una grande dashboard aziendale. Si parta da due o tre misure che i fondatori usano davvero, se ne scrivano le definizioni e le si tenga lontane dalle conversazioni sulle prestazioni individuali.

**Piccola impresa.** Le risorse sono scarse e la persona che gestisce l'IT spesso risponde direttamente al titolare. Un singolo reclamo di un cliente può pesare più di qualsiasi dashboard. Si mantenga l'insieme ridotto, si privilegi il feedback diretto degli utenti e si trattino con una certa cautela i rendiconti forniti dal fornitore, dato che il fornitore ha incentivi propri.

**Grande impresa.** La scala moltiplica sia la richiesta di numeri confrontabili sia la pressione a manipolarli. Si usi un piccolo insieme standard con definizioni scritte, si tengano separate le viste di lavoro dei team dalle aggregazioni e si eviti di confrontare team che lavorano su tipi di servizio diversi. Un registro delle metriche e una cadenza di revisione diventano essenziali.

**Pubblica amministrazione e settore pubblico.** Gli obblighi di rendicontazione e i livelli di servizio contrattuali possono rendere alcuni obiettivi non negoziabili. Li si tratti come input di progettazione: li si rispetti, si mostri la salvaguardia accanto ad essi e si riportino le definizioni usate. La responsabilità pubblica aumenta il costo di nascondere le cattive notizie, perciò si costruiscano canali interni sicuri e si sia trasparenti sulle definizioni corrette (vedi Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

Il costo di applicare questo argomento è soprattutto tempo: poche ore per scrivere le definizioni e un registro, una breve revisione trimestrale della manipolazione e un campionamento occasionale degli elementi chiusi. Il costo degli strumenti è modesto. Il costo maggiore è l'attenzione della direzione, perché la disciplina funziona solo se chi legge i numeri si comporta in modo coerente.

Il ritorno viene dallo spreco evitato e dalle decisioni migliori. Le decisioni prese su dati corrotti possono indirizzare gli investimenti sul problema sbagliato, come dotare di personale un service desk per chiudere i ticket più in fretta quando il vero problema sono i contatti ripetuti causati da un difetto. La manipolazione erode anche la fiducia tra il team e le persone che ne dipendono, cosa difficile da riparare. Si descriva il beneficio nell'andamento, non con una percentuale inventata: meno ribaltamenti di decisioni, meno sorprese negli audit e un migliore accordo tra numeri operativi ed esperienza degli utenti. Se servono cifre per un business case, si misurino le proprie baseline, come il divario di percezione e il tasso di contatti ripetuti, prima e dopo il cambiamento.

## Anti-pattern e insidie

- **Obiettivi senza salvaguardie.** Un obiettivo isolato viene raggiunto con qualsiasi via disponibile. Si aggiunga una misura abbinata prima che l'obiettivo sia annunciato.
- **Classifiche di persone o di team.** Invitano alla manipolazione e scoraggiano l'aiuto tra i team. Si mostri a ciascun team il proprio andamento, con il contesto.
- **Metriche come punizione.** Un numero rosso che porta con sé la colpa diventerà verde per occultamento. Si chieda invece di che cosa il team abbia bisogno.
- **Medie di dati asimmetrici.** Nascondono la coda in cui gli utenti soffrono. Si usino i percentili e l'età dell'elemento più vecchio.
- **Cambiare le definizioni in silenzio.** Le linee di tendenza perdono significato. Si registri ogni modifica con la sua motivazione e la si segni sul grafico.
- **Trattare la salvaguardia come il nuovo obiettivo.** Allora la salvaguardia viene manipolata. Si rivedano insieme entrambe e si ruotino le salvaguardie quando perdono efficacia.
- **Metriche di vanità.** Conteggi che possono solo salire, come i ticket gestiti o i commit effettuati, non dicono nulla sui risultati. Si preferiscano misure che possono anche scendere.
- **Ignorare le evidenze qualitative.** I soli numeri non possono mostrare che un ticket chiuso sembrava irrisolto. Si leggano i commenti.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizioni e cronometri | Informali; ciascuno conta a modo suo | Scritte per alcune metriche | Una definizione scritta per metrica, con cronometri ed esclusioni | Definizioni riviste e modifiche registrate con le motivazioni | Definizioni allineate tra team e fornitori, riviste quando smettono di orientare le decisioni |
| Salvaguardie | Nessuna | Nominate per alcune metriche | Ogni metrica rendicontata ha una salvaguardia sulla stessa pagina | Salvaguardie riviste ogni trimestre rispetto alla manipolazione | Salvaguardie a rotazione e co-progettate con le persone misurate |
| Uso e sicurezza | Numeri usati per attribuire colpe | Il team vede i propri numeri | Il team vede i dati per primo; nessuna classifica individuale | La direzione pone domande di apprendimento; la rendicontazione è sicura | Clienti e fornitori condividono una visione franca dei numeri |

## Checklist

- [ ] Ogni metrica rendicontata ha una domanda scritta e una decisione che orienta.
- [ ] Ogni misura temporale ha una regola scritta di avvio, arresto e sospensione.
- [ ] Ogni metrica rendicontata ha una salvaguardia nominata mostrata accanto.
- [ ] Le misure temporali mostrano i percentili e l'età dell'elemento aperto più vecchio.
- [ ] Esiste un registro delle metriche con responsabile, definizione, vettore di manipolazione, salvaguardia e data di revisione.
- [ ] Il team vede i propri dati prima della direzione.
- [ ] Nessuna classifica, retribuzione o provvedimento disciplinare individuale è legato a una metrica.
- [ ] Una revisione trimestrale della manipolazione è in calendario.
- [ ] Un campione di elementi chiusi viene letto ogni trimestre per verificarne l'onestà.
- [ ] Almeno una metrica è stata ritirata o riprogettata nell'ultimo anno.

## Prompt IA

**Condurre una revisione della manipolazione su una metrica.**

```text
Guido [nome del team], che gestisce [tipo di servizio o di lavoro di consegna].
Rendicontiamo questa metrica: [nome della metrica], definita come [definizione,
compreso dove il cronometro parte e si ferma]. È usata da [pubblico] per
[decisione o obiettivo]. I nostri dati provengono da [strumento].

Elenca i modi realistici in cui questa metrica potrebbe essere fatta apparire
migliore senza migliorare il servizio per gli utenti. Per ciascuno, suggerisci
una metrica o una pratica di salvaguardia che lo rivelerebbe e indica quale
sarebbe il vettore di manipolazione della salvaguardia stessa. Non inventare
valori di riferimento. Elenca le tue ipotesi e tutto ciò che non hai potuto
determinare da quanto ti ho fornito.
```

**Redigere una voce del registro delle metriche.**

```text
Redigi una voce del registro delle metriche per [nome della metrica] per [nome
del team]. Campi: domanda a cui risponde, decisione che orienta, definizione,
formula, unità, fonte dei dati, ruolo del responsabile, cadenza di revisione,
vettore di manipolazione, salvaguardia e come utenti o clienti si accorgerebbero
che è sbagliata. Basa la voce solo su questa descrizione: [descrivi la metrica e
il processo attuale]. Segnala ogni campo che hai dovuto ipotizzare ed elenca le
domande a cui dovrei rispondere per completare la voce.
```

**Verificare un campione di ticket chiusi.**

```text
Ecco [numero] ticket chiusi di [servizio], con i campi [elenco dei campi] e le
note di risoluzione incollate di seguito. Esamina ciascuno alla ricerca di segni
che il ticket sia stato chiuso senza risolvere il problema, che sia stato usato
uno stato di sospensione per fermare il cronometro, o che la priorità o la
categoria sembrino modificate. Riporta gli andamenti, non le persone. Non
formulare ipotesi su cause non supportate dal testo. Dimmi che cosa non hai
potuto valutare dai dati e quali campi aggiuntivi sarebbero utili.

[incolla i ticket, con i dati personali rimossi]
```

**Pianificare come introdurre una metrica in modo sicuro.**

```text
Intendiamo introdurre [metrica] a [pubblico]. Contesto attuale: [dimensione del
team, cultura, esperienza precedente con le metriche]. Proponi un piano di
introduzione che indichi chi vede i dati per primo, come spieghiamo lo scopo, per
che cosa non li useremo, quale salvaguardia mostriamo insieme ad essi e quando
verifichiamo se funziona. Segnala i rischi di manipolazione o di paura e
suggerisci come ridurli. Elenca le tue ipotesi e non inventare statistiche.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare l'argomento e la salvaguardia abbinata per una metrica che si sta per introdurre.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che un nuovo argomento di metrica riporti il proprio vettore di manipolazione e la salvaguardia.

## Punti chiave

- Una misura che diventa un obiettivo smette di descrivere il lavoro, perciò si usino i numeri per porre domande.
- La manipolazione è una risposta normale alla pressione e alla paura, e si riduce cambiando le condizioni, non sorvegliando.
- Ogni metrica richiede una definizione scritta con i suoi cronometri e una salvaguardia mostrata accanto.
- Si preferiscano i percentili e l'età dell'elemento più vecchio alle medie.
- Si descrivano team e servizi, non si classifichino mai le persone e si lasci che il team veda per primo i propri dati.
- Si riveda ogni trimestre la manipolazione e si ritirino le metriche che non orientano più le decisioni.

## Riferimenti e letture di approfondimento

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
5. Choi, J., Hecht, G. W., and Tayler, W. B., "Lost in translation: The effects of incentive compensation on strategy surrogation," *The Accounting Review*, 87(4), 2012.
6. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Cobra effect](https://en.wikipedia.org/wiki/Cobra_effect).
11. Wikipedia, [Perverse incentive](https://en.wikipedia.org/wiki/Perverse_incentive).
12. Wikipedia, [Surrogation](https://en.wikipedia.org/wiki/Surrogation).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
16. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
