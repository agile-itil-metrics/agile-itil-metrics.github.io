# Metriche di incidenti di sicurezza e vulnerabilità

**La sicurezza fa parte della consegna e dell'esercizio continui di un servizio: misurate per quanto tempo le persone restano esposte, con quale rapidità contenete ciò che va storto e quanto i colleghi si sentano liberi di alzare la mano, e non trasformate mai un errore in un motivo di colpa.**

## Panoramica e motivazione

Ogni servizio presenta dei punti deboli, e alcuni di essi saranno sfruttati contro di esso. Una [vulnerabilità](https://en.wikipedia.org/wiki/Vulnerability_(computing)) è un punto debole di software, hardware, configurazione o processo che può essere sfruttato per danneggiare la riservatezza, l'integrità o la disponibilità di un sistema. Un incidente di sicurezza è un evento in cui tale danno si verifica o è credibilmente minacciato. Le metriche di quest'area cercano di rispondere a due domande. Quanto siamo esposti, e con quale rapidità individuiamo, correggiamo e ci riprendiamo dai problemi?

La tradizione agile e DevOps tratta la sicurezza come una proprietà della consegna continua, non come un cancello posto alla sua fine. [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps) estende l'idea di DevOps incorporando controlli di sicurezza nella pipeline e condividendo la responsabilità tra sviluppo, sicurezza e operazioni. ITIL, attraverso la propria pratica di gestione della sicurezza delle informazioni, contribuisce con politiche, un pensiero basato sul rischio e il collegamento con la gestione di incidenti, modifiche e asset. I due approcci si incontrano nel lavoro quotidiano: gli aggiornamenti delle dipendenze arrivano come modifiche ordinarie, i rilievi sulle vulnerabilità diventano voci di backlog con un responsabile, e gli incidenti sono gestiti con le stesse revisioni senza attribuzione di colpe di qualsiasi altro (si veda l'Argomento 4.2 «Metriche di postmortem e apprendimento»).

Le metriche di sicurezza sono esposte a distorsioni particolari.

- **Contare i rilievi premia il non guardare.** Un team che scansiona meno trova meno. Un conteggio grezzo di vulnerabilità può diminuire perché uno scanner ha perso l'accesso, non perché qualcosa sia migliorato.
- **I punteggi di gravità sono input, non verità.** Il [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) (CVSS) assegna a una vulnerabilità un punteggio di gravità in astratto, e registri come [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (CVE) ne forniscono gli identificatori. Se una vulnerabilità sia rilevante per Lei dipende dal fatto che sia raggiungibile nel Suo ambiente, che sia in uso un exploit e dal valore dell'asset interessato. Un punteggio di gravità grezzo usato da solo indirizza lo sforzo verso i luoghi sbagliati.
- **La colpevolizzazione sopprime le segnalazioni.** Se le persone sono punite per aver cliccato su un link o per aver segnalato un incidente da loro causato, le segnalazioni cessano e l'esposizione cresce senza essere vista. La sicurezza psicologica è un controllo di sicurezza.
- **Le misure di tempo nascondono la coda.** Un tempo mediano di applicazione delle patch può sembrare sano mentre una manciata di sistemi critici resta esposta per mesi.

Questo argomento presenta le misure principali, con le loro definizioni, i loro vettori di manipolazione e le salvaguardie. Si basa sui registri di asset e configurazione della parte precedente, perché non si può applicare patch né scansionare ciò che non si riesce a trovare (si vedano l'Argomento 7.1 «Metriche di gestione degli asset IT» e l'Argomento 7.4 «Qualità della configurazione e del CMDB»). Un avvertimento: questa è una guida alla misurazione, non un manuale di sicurezza. Scelga i controlli insieme a professionisti qualificati della sicurezza e rispetti le norme e gli obblighi di legge che si applicano al Suo caso, come ISO/IEC 27001 e le indicazioni delle agenzie nazionali.

La salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) si applica con particolare forza alla sicurezza. Quando una metrica diventa un obiettivo, le persone riclassificano i rilievi, escludono asset dalle scansioni e chiudono i ticket senza correggere la causa (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Principi chiave

- **Misurare il tempo di esposizione oltre ai conteggi.** Per quanto tempo un punto debole resta aperto conta più di quanti ne vengano trovati.
- **Dare priorità in base al contesto.** Combinare gravità, sfruttabilità, raggiungibilità e valore dell'asset.
- **Verificare prima la copertura.** Un rapporto pulito proveniente da una scansione che ha mancato metà del patrimonio è un falso conforto.
- **Incorporare la sicurezza nella pipeline.** Fare in modo che le scelte sicure siano l'impostazione predefinita più semplice e fornire feedback rapido.
- **Collaborare tra discipline.** Sicurezza, sviluppo e operazioni sono insieme responsabili dei risultati.
- **Rendere sicura la segnalazione.** La gestione degli errori senza attribuzione di colpe mantiene vivo il flusso dei segnali.
- **Aggregare i dati sul comportamento umano.** Riportare schemi di gruppo e non nominare né classificare mai le singole persone.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Finestra di esposizione | Tempo in cui una vulnerabilità nota resta aperta sugli asset nel perimetro, per fascia di priorità | mediana e 85º percentile dei giorni dalla data in cui si è saputo che si applica all'asset alla data in cui una correzione o una mitigazione accettata è verificata | giorni | Scanner di vulnerabilità, sistema di ticket, registrazioni delle modifiche | Gestione della sicurezza delle informazioni; gestione dei problemi | Tempo per correggere un difetto nel backlog | Settimanale |
| Conformità delle patch | Quota di asset nel perimetro che rispettano la finestra prevista dalla politica di patch per la loro classe | asset aggiornati entro la finestra della politica / asset nel perimetro che hanno richiesto una patch nel periodo | percentuale | Strumenti di gestione di endpoint e server, registro degli asset | Gestione della sicurezza delle informazioni; gestione di rilasci e distribuzione | Dipendenze mantenute aggiornate nella pipeline | Settimanale |
| Rilievi critici scaduti | Numero ed età dei rilievi di priorità critica oltre la scadenza prevista dalla politica | numero di rilievi critici oltre la scadenza; età del più vecchio | conteggio; giorni | Sistema di gestione delle vulnerabilità | Gestione della sicurezza delle informazioni; gestione del rischio | Difetti di sicurezza che superano il limite concordato | Settimanale |
| Copertura delle scansioni | Quota di asset nel perimetro valutati entro l'intervallo richiesto | asset scansionati con successo nell'ultimo intervallo / asset nel perimetro | percentuale | Rapporti dello scanner collegati al registro degli asset | Gestione della sicurezza delle informazioni; gestione degli asset IT | Controlli della pipeline eseguiti a ogni build | Settimanale |
| Tempo di contenimento | Tempo dal rilevamento di un incidente di sicurezza confermato al suo contenimento | mediana e 85º percentile delle ore dal rilevamento al contenimento | ore | Registrazioni degli incidenti | Gestione degli incidenti; gestione della sicurezza delle informazioni | Tempo per ripristinare il servizio dopo un guasto | Per incidente, rivisto mensilmente |
| Età delle eccezioni di rischio | Età delle eccezioni a rischio accettato e quota di quelle oltre la data di revisione | giorni dall'approvazione; eccezioni oltre la data di revisione / eccezioni aperte | giorni; percentuale | Registro delle eccezioni | Gestione del rischio; gestione della sicurezza delle informazioni | Revisione del debito tecnico | Mensile |
| Tasso di segnalazione di sicurezza | Quota di eventi sospetti segnalati dal personale rispetto agli eventi di sicurezza confermati, come indicatore della cultura della segnalazione | segnalazioni del personale nel periodo / eventi sospetti confermati nel periodo, con tendenza a livello di gruppo | rapporto | Casella di posta della sicurezza, registrazioni degli incidenti | Gestione della sicurezza delle informazioni; gestione degli incidenti | Sollevare apertamente gli impedimenti | Mensile |

Indichi nel registro le fasce di priorità e le finestre previste dalla politica. La finestra di esposizione inizia quando si sa che la vulnerabilità si applica all'asset, cioè nel momento successivo tra la divulgazione e quello in cui si sa che l'asset esegue il componente interessato, e termina con la correzione verificata o con una mitigazione documentata e a tempo limitato. Il tempo di contenimento inizia al rilevamento, non al primo avviso che nessuno ha letto. Escluda i rilievi di test e i falsi positivi solo dopo revisione. Il tasso di segnalazione di sicurezza descrive gruppi e tendenze, mai singole persone.

## Raccomandazioni

### Conoscere il proprio patrimonio e la propria esposizione

**1. Partire dai registri di asset e dipendenze.** Scansioni, applicazione delle patch e responsabilità dipendono tutte dal sapere che cosa esiste. Colleghi ogni rilievo a un asset, a un responsabile e a un servizio, e misuri la copertura delle scansioni rispetto al registro. Dove la copertura è bassa, risolva prima questo aspetto, poi legga i rilievi. Un asset non scansionato è un'incognita, il che è peggio di un punto debole noto.

**2. Ridurre prima la [superficie di attacco](https://en.wikipedia.org/wiki/Attack_surface).** Rimuova ciò che non serve: servizi inutilizzati, porte aperte, vecchi account, ambienti dimenticati. Tutto ciò che dismette è qualcosa a cui non dovrà applicare patch. Tenga traccia del numero di servizi esposti a Internet e di account dormienti come semplici indicatori, e li riveda con i responsabili.

**3. Includere la propria catena di fornitura del software.** I servizi moderni dipendono da molti componenti. La [catena di fornitura del software](https://en.wikipedia.org/wiki/Software_supply_chain) comprende librerie, strumenti di build, immagini di container e i fornitori che stanno dietro di essi. Utilizzi le distinte base del software descritte in precedenza per individuare dove è usato un componente vulnerabile (si veda l'Argomento 7.2 «Metriche di asset software e licenze») e includa i rilievi sulle dipendenze nelle stesse misure dei rilievi sull'infrastruttura.

### Dare priorità e correggere

**4. Ordinare per contesto, non solo per punteggio di gravità.** Combini la gravità CVSS con il fatto che un exploit sia noto come in uso, che il componente vulnerabile sia raggiungibile e con l'importanza dell'asset. Gli elenchi pubblici delle vulnerabilità note come sfruttate aiutano per il primo fattore. Scriva le regole di ordinamento, le riveda e registri il motivo quando un elemento di gravità elevata viene declassato.

**5. Fissare finestre di politica per fascia e rendicontare rispetto a esse.** Per ciascuna fascia di priorità, concordi un tempo obiettivo per rimediare o mitigare. Riporti la quota entro la finestra, la mediana e l'85º percentile dell'esposizione e l'elemento aperto più vecchio. Le finestre sono obiettivi di confronto, e gli elementi più vecchi meritano attenzione perché mostrano dove il processo fallisce (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

**6. Trattare l'applicazione delle patch come una modifica ordinaria e frequente.** Il processo di patch più sicuro è quello che gira spesso ed è noioso. Aggiornamenti piccoli e frequenti sono più facili da testare e annullare rispetto a quelli grandi e rari, e le pipeline automatizzate possono applicarli in modo continuo. Utilizzi l'approccio di abilitazione delle modifiche per l'approvazione basata sul rischio e mantenga un percorso di emergenza per le correzioni urgenti (si veda l'Argomento 4.3 «Metriche di abilitazione delle modifiche»).

**7. Rendere le eccezioni visibili e di breve durata.** A volte una correzione non è possibile. Registri un'eccezione con un motivo, un controllo compensativo, un responsabile e una data di revisione, e riporti l'età delle eccezioni. Le eccezioni senza date di revisione diventano permanenti, e le eccezioni permanenti diventano il vero registro dei rischi.

### Rispondere e apprendere

**8. Esercitare la risposta agli incidenti.** La [gestione degli incidenti di sicurezza informatica](https://en.wikipedia.org/wiki/Computer_security_incident_management) comprende preparazione, rilevamento, contenimento, eradicazione, ripristino e lezioni apprese. Si eserciti con simulazioni, registri il tempo di contenimento dal rilevamento e riveda ogni incidente significativo senza attribuzione di colpe. La struttura della gestione degli incidenti di sicurezza è simile a quella della gestione degli incidenti maggiori (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori»).

**9. Misurare il contenimento, non solo il rilevamento.** Gli strumenti di rilevamento producono avvisi, e il valore sta in ciò che accade dopo. Tenga traccia del tempo necessario per contenere e ripristinare gli incidenti confermati e della quota di quelli individuati dal proprio monitoraggio rispetto a quelli segnalati da esterni. Una quota crescente di incidenti rilevati internamente è un segno di visibilità in miglioramento.

**10. Imparare dai quasi incidenti.** Un'email di phishing segnalata e bloccata, o una vulnerabilità trovata da un collega prima di un attaccante, è una lezione gratuita. Li registri e li riveda come farebbe con un incidente, e ringrazi la persona che ha segnalato. Il tasso di segnalazione di sicurezza è un indicatore di salute di tale cultura e dovrebbe crescere con la fiducia.

### Costruire la cultura e la pipeline

**11. Collocare i controlli dove lavorano gli sviluppatori.** Esegua analisi delle dipendenze e analisi statica nella build, fornisca feedback nella pull request e faccia fallire le build solo per i problemi che il team riconosce come bloccanti. Un feedback rapido e pertinente viene corretto. Un diluvio di rilievi di scarso valore viene ignorato. Tenga traccia del tempo di correzione dei rilievi della pipeline e tari le regole insieme ai team (si veda l'Argomento 2.7 «Metriche di pull request e code review»).

**12. Formare e mettere alla prova senza umiliare.** Gli esercizi di sensibilizzazione, come il phishing simulato, possono sviluppare competenze, ma possono anche danneggiare la fiducia quando i risultati sono usati per indicare o sanzionare singole persone. Riporti solo risultati aggregati, si concentri su quante persone segnalano i messaggi sospetti e spieghi lo scopo. Se un esercizio fa sentire il personale raggirato, lo cambi.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Finestra di esposizione | Chiudere i rilievi senza verifica; cambiare la data di inizio; riclassificare la gravità | Fase di verifica svolta da qualcuno esterno al team che corregge; regola sulla data di inizio nel registro; registro delle modifiche di gravità |
| Conformità delle patch | Escludere dal perimetro gli asset difficili da aggiornare; contare una patch come applicata quando il sistema non è stato riavviato | Modifiche del perimetro registrate; verificare la versione installata dall'asset, non dal ticket |
| Rilievi critici scaduti | Suddividere o unire i rilievi; declassare la gravità | Conteggio per vulnerabilità e asset univoci; revisione di tutte le modifiche di gravità |
| Copertura delle scansioni | Scansionare un insieme più ristretto; contare una scansione che non è riuscita ad autenticarsi | Copertura rispetto al registro degli asset; qualità della scansione (autenticata, completa) |
| Tempo di contenimento | Far partire il cronometro più tardi; dichiarare il contenimento in anticipo | Il cronometro parte al primo segnale di rilevamento; verifica del contenimento con evidenze |
| Età delle eccezioni di rischio | Rinnovare automaticamente le eccezioni; suddividere le eccezioni per ridurne l'età | Revisione dei rinnovi delle eccezioni con un motivo; limite ai rinnovi senza nuove evidenze |
| Tasso di segnalazione di sicurezza | Incoraggiare segnalazioni di scarso valore; scoraggiare le segnalazioni per migliorare altri numeri | Qualità delle segnalazioni; lettura dei commenti; sondaggio sul fatto che le persone si sentano al sicuro nel segnalare |

Una lettura sana comprende un'elevata copertura delle scansioni, una coda di esposizione breve e in riduzione, eccezioni oneste con date di revisione, incidenti contenuti rapidamente e individuati più spesso internamente, e personale che Le riferisce gli eventi sospetti senza timore.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Priorità basata solo sul punteggio di gravità | Semplice, coerente | Ignora il contesto; indirizza lo sforzo verso i luoghi sbagliati |
| Priorità basata sul contesto | Si concentra sul rischio reale | Richiede dati e giudizio |
| Finestre di patch fisse | Aspettative chiare | Può forzare modifiche affrettate e rischiose |
| Finestre basate sul rischio | Si adatta alla situazione | Più difficile da sottoporre ad audit |
| Applicazione frequente e automatizzata delle patch | Modifiche piccole, minore esposizione | Richiede buoni test e ripristino |
| Cicli di patch rari e di grandi dimensioni | Familiare | Esposizione più lunga, rischio maggiore per ogni modifica |
| Simulazione di phishing | Sviluppa la consapevolezza | Può erodere la fiducia se usata male |
| Attenzione alla cultura della segnalazione | Fa emergere i problemi in anticipo | Difficile da misurare direttamente |

La risposta in sintesi è ordinare per contesto, applicare le patch spesso in piccoli passi con un buon ripristino, registrare le eccezioni con scadenze e investire nella cultura della segnalazione come controllo.

## Domande da discutere con il team

**1. Quanta parte del nostro patrimonio vedono effettivamente le nostre scansioni?**
Confronti gli asset scansionati con il registro degli asset. Si chieda che cosa manchi e perché. Il facilitatore dovrebbe cercare categorie sistematicamente non scansionate, come container, dispositivi remoti o sistemi di terze parti. Concordate una lacuna da colmare in questo trimestre.

**2. Qual è il nostro rilievo critico aperto più vecchio e perché è ancora aperto?**
Osservate la coda, non la media. Ripercorrete i più vecchi: chi li gestisce, che cosa li blocca e qual è il controllo compensativo. Il facilitatore dovrebbe chiedere se l'eccezione è registrata. Concordate chi sbloccherà il più vecchio.

**3. Quando una correzione di sicurezza ha causato per l'ultima volta un'interruzione e che cosa è cambiato dopo?**
Ricordate un esempio. La causa è stata una correzione affrettata o un test mancante? Discutete come rendere l'applicazione delle patch routinaria e sicura. Collegate la risposta alla pratica di modifica e rilascio.

**4. Se oggi un collega segnalasse un'email sospetta, che cosa gli accadrebbe?**
Descrivete il percorso reale dalla segnalazione alla risposta, compreso il modo in cui la persona che segnala viene ringraziata. Chiedetevi se qualcuno sia stato messo in imbarazzo per aver segnalato o per aver cliccato. La conversazione riguarda la fiducia. Concordate una piccola modifica che renda la segnalazione più semplice o più sicura.

**5. Quali dei nostri numeri di sicurezza potrebbero aumentare mentre diventiamo meno sicuri?**
Elencate le misure e riflettete su come ciascuna potrebbe essere migliorata restringendo il perimetro o rietichettando. Assegnate una salvaguardia a ciascuna. Questo esercizio costruisce la voce di registro per la prossima revisione.

**6. Con quale rapidità possiamo contenere un incidente confermato e come lo sappiamo?**
Rivedete gli ultimi due incidenti e ripercorrete il tragitto dal rilevamento al contenimento. Annotate i ritardi. Chiedete quali esercitazioni abbiamo svolto. Concordate di svolgerne una prima della prossima revisione.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna realizzano la maggior parte delle correzioni e introducono molti dei punti deboli. Dovrebbero mantenere aggiornate le dipendenze come parte del flusso normale, trattare i rilievi di sicurezza come voci di backlog con responsabili e date, e usare controlli della pipeline che forniscano feedback rapido e pertinente. Hanno bisogno di priorità chiare e del tempo per agire su di esse, e dovrebbero poter sollevare preoccupazioni liberamente.

### Team di servizio e operations

I team di operazioni eseguono gli scanner, applicano le patch e rispondono agli incidenti. Dovrebbero mantenere aggiornati i collegamenti agli asset, riportare la copertura con onestà e gestire le eccezioni con scadenze. Hanno inoltre bisogno di tempo protetto per esercitare la risposta agli incidenti e di una cultura senza attribuzione di colpe quando si verificano errori.

### Leadership e governance

I dirigenti stabiliscono la propensione al rischio e decidono se la sicurezza sia finanziata come attività continua o come progetto. Dovrebbero chiedere finestre di esposizione ed elementi aperti più vecchi anziché totali, proteggere la cultura della segnalazione e accettare che i numeri aumentino quando la visibilità migliora. La governance dovrebbe richiedere evidenze per le eccezioni e per l'apprendimento dagli incidenti.

### Clienti e utenti

Gli utenti sono sia beneficiari sia una linea di difesa. Vogliono servizi che proteggano i loro dati e desiderano indicazioni chiare ed eque. Dovrebbero essere informati tempestivamente quando un incidente li riguarda, trattati con rispetto quando segnalano problemi e dotati di misure di sicurezza che non rendano il loro lavoro più difficile del necessario (si veda l'Argomento 6.4 «Esperienza degli utenti e dei dipendenti»).

## In pratica: un esempio di ITIL agile

Una cooperativa di credito regionale gestisce l'online banking, un'app mobile e sistemi di filiale con un piccolo team di ingegneria e un servizio di operazioni di sicurezza in outsourcing. I numeri seguenti sono illustrativi.

Il consiglio di amministrazione chiede un cruscotto di sicurezza. La prima bozza dell'analista di sicurezza mostra 4.200 vulnerabilità aperte in calo e il 96 percento di conformità delle patch. Il responsabile dell'ingegneria chiede della copertura delle scansioni. Collegando l'output dello scanner al registro degli asset, l'analista scopre che il 31 percento dei server e quasi tutti i container non sono stati scansionati negli ultimi 30 giorni, perché lo scanner ha perso le credenziali dopo una migrazione. Tra gli asset scansionati, la finestra di esposizione mediana per le vulnerabilità critiche è di 9 giorni e l'85º percentile è di 41 giorni. Il rilievo critico più vecchio ha 212 giorni, su un sistema legacy con un'eccezione scaduta quattro mesi prima. La conformità delle patch del 96 percento era stata calcolata solo sugli asset segnalati dallo strumento di patch.

Il team apporta quattro modifiche insieme a ingegneria e operazioni. La copertura delle scansioni diventa la prima riga del cruscotto, con l'obiettivo di raggiungere la copertura completa del registro, e l'autenticazione della scansione viene riparata e monitorata. La definizione delle priorità aggiunge lo stato di sfruttamento e l'importanza dell'asset al punteggio di gravità, così i 4.200 rilievi si riducono a un breve elenco di circa 60 che contano subito. Gli aggiornamenti delle dipendenze passano nella pipeline come modifiche piccole e frequenti con test automatizzati. Le eccezioni ricevono un responsabile, un controllo compensativo e una data di revisione, e quella scaduta viene rivista dal comitato per il rischio. L'analista di sicurezza cambia anche il modo in cui sono riportati i risultati del phishing simulato: viene mostrato solo il tasso di segnalazione a livello di gruppo, e l'analista ringrazia personalmente i colleghi che segnalano.

Due mesi dopo la copertura delle scansioni è del 97 percento, la finestra di esposizione all'85º percentile per gli elementi critici è di 14 giorni e il rilievo critico più vecchio è un'eccezione mitigata a 60 giorni dalla sua revisione. Un'email sospetta con una richiesta di pagamento viene segnalata da un dipendente di filiale nel giro di pochi minuti, e l'incidente è contenuto in meno di due ore. Il consiglio di amministrazione chiede di dimezzare entro fine anno il numero di vulnerabilità aperte. Il responsabile dell'ingegneria propone invece di riportare la finestra di esposizione e i rilievi critici scaduti, spiegando che un conteggio può diminuire scansionando meno. La decisione viene registrata e il consiglio concorda di rivedere le nuove misure alla riunione successiva.

## Lente di settore

**Startup.** Di solito non esiste un team di sicurezza dedicato, quindi incorpori le basi nella pipeline: aggiornamenti delle dipendenze, scansione dei segreti, autenticazione a più fattori e privilegio minimo. Tenga traccia della finestra di esposizione per un breve elenco di sistemi critici e abbia un semplice piano per gli incidenti. Resista alla tentazione di acquistare un grande insieme di strumenti prima di conoscere il proprio patrimonio.

**Piccola impresa.** I servizi in outsourcing e gli strumenti cloud comportano la maggior parte del rischio. Mantenga un inventario, attivi l'autenticazione a più fattori ovunque, mantenga i sistemi aggiornati automaticamente e sappia chi chiamare in caso di incidente. Misuri la conformità delle patch e il tempo di ripristino dei backup. Eviti di umiliare il personale che segnala errori.

**Grande impresa.** La scala richiede dati coerenti tra molti team e strumenti. Definisca centralmente fasce di priorità e finestre, lasci che i team gestiscano i propri rilievi, riporti l'esposizione per servizio di business e svolga esercitazioni regolari. Si coordini con i team di sicurezza dei fornitori e metta alla prova i passaggi di consegne.

**Governo e settore pubblico.** I settori affrontano spesso direttive obbligatorie con scadenze per vulnerabilità specifiche, obblighi formali di segnalazione degli incidenti e requisiti di audit. Li tratti come input di progettazione: tenga traccia della conformità alle scadenze delle direttive, conservi le evidenze e segnali gli incidenti come richiesto proteggendo la privacy delle persone (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi sono gli strumenti di scansione e monitoraggio, che potrebbero essere già posseduti; il tempo per mantenere i collegamenti agli asset; il tempo di ingegneria per correggere i rilievi e aggiornare le dipendenze; la preparazione alla risposta agli incidenti e le esercitazioni; e la formazione. I controlli della pipeline comportano tempo di configurazione e un certo tempo di build. Il monitoraggio in outsourcing ha un canone di servizio.

Il ritorno consiste in una minore probabilità e in un minore impatto degli incidenti, in un'esposizione più breve e in meno modifiche di emergenza affrettate. Questi benefici sono reali e difficili da quantificare, perché l'incidente che non è avvenuto non lascia traccia. Eviti di citare costi medi di settore delle violazioni o frequenze di incidenti, a meno che non possa risalire alla fonte e alla sua pertinenza. Costruisca il caso a partire dai Suoi dati: l'andamento della finestra di esposizione, il numero di modifiche di emergenza causate da patch tardive, il tempo speso in lavoro manuale di patch che l'automazione ha eliminato e il costo dei Suoi incidenti passati, compresi il tempo del personale e l'impatto sui clienti. Descriva la riduzione del rischio in termini di scenari specifici, come suggerisce l'argomento precedente sui business case (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Riportare conteggi di vulnerabilità.** I conteggi diminuiscono quando le scansioni mancano qualcosa. Riporti la finestra di esposizione, gli elementi scaduti e la copertura.
- **Dare priorità solo in base al punteggio di gravità.** Ignora raggiungibilità e sfruttamento. Aggiunga il contesto.
- **Trattare la scansione come la verità.** Verifichi copertura e qualità della scansione rispetto al registro degli asset.
- **Eccezioni permanenti.** Diventano rischio nascosto. Assegni a ogni eccezione un responsabile e una data di revisione.
- **Umiliare le persone per gli errori.** Le segnalazioni cessano. Utilizzi la revisione senza attribuzione di colpe e risultati aggregati.
- **La sicurezza come cancello finale.** Rallenta la consegna e invita a soluzioni alternative. Incorpori i controlli nella pipeline.
- **Cicli di patch big-bang.** Sono rischiosi e lenti. Applichi le patch spesso, con modifiche piccole.
- **Ignorare i fornitori.** I loro punti deboli sono i Suoi. Tenga traccia degli obblighi di sicurezza e degli incidenti dei fornitori.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Visibilità | Scansioni occasionali di alcuni sistemi | Scansioni regolari dei sistemi principali | Copertura delle scansioni monitorata rispetto al registro degli asset; rilievi collegati ai responsabili | Copertura, finestre di esposizione ed eccezioni gestite e analizzate nel tempo | Visione condivisa tra team e fornitori, comprese le dipendenze |
| Priorità e correzione | Correzione in base alla richiesta più insistente | Elenchi basati sulla gravità | Ordinamento basato sul contesto; finestre di politica per fascia; patch piccole e frequenti | Finestre e coda riviste; controlli della pipeline tarati con i team | Rimedi automatizzati e basati sul rischio con supervisione umana |
| Risposta e cultura | Risposta ad hoc; ricerca del colpevole | Piano di base, raramente testato | Piano esercitato; revisione senza attribuzione di colpe; segnalazione valorizzata | Tempo di contenimento e tasso di rilevamento interno gestiti; cultura della segnalazione misurata | Esercitazioni congiunte con fornitori e clienti; apprendimento ampiamente condiviso |

## Checklist

- [ ] La copertura delle scansioni è misurata rispetto al registro degli asset.
- [ ] I rilievi sono collegati a un asset, a un responsabile e a un servizio.
- [ ] Le fasce di priorità combinano gravità, sfruttamento, raggiungibilità e importanza dell'asset.
- [ ] Le finestre di politica per fascia sono concordate, e la finestra di esposizione e l'elemento aperto più vecchio sono riportati.
- [ ] I controlli su dipendenze e pipeline vengono eseguiti a ogni build, con bloccanti concordati.
- [ ] L'applicazione delle patch avviene come modifiche frequenti, piccole e testate, con un percorso di emergenza.
- [ ] Le eccezioni hanno un responsabile, un controllo compensativo e una data di revisione.
- [ ] La risposta agli incidenti è esercitata e il tempo di contenimento è misurato dal rilevamento.
- [ ] I dati sul comportamento umano sono riportati solo in forma aggregata e la segnalazione è ringraziata.
- [ ] Gli obblighi di sicurezza dei fornitori e i loro incidenti sono monitorati.

## Prompt IA

**Rivedere una regola di prioritizzazione delle vulnerabilità.**

```text
La nostra regola attuale per dare priorità alle vulnerabilità è: [descrivere].
I nostri campi di dati comprendono: [elencare, per esempio punteggio di gravità,
stato dell'exploit, importanza dell'asset, esposizione a Internet]. Esamina la
regola alla ricerca di punti ciechi e di modi in cui potrebbe essere manipolata,
e proponi un ordinamento basato sul contesto con fasce chiare e finestre di
politica. Non indicare numeri specifici come standard di settore. Elenca le tue
ipotesi e ciò che uno specialista di sicurezza dovrebbe confermare.
```

**Verificare la copertura delle scansioni.**

```text
Ecco un riepilogo del nostro registro degli asset per classe e degli asset visti
dal nostro scanner nell'ultimo [intervallo]: [incollare conteggi o elenchi
anonimizzati]. Individua le classi con bassa copertura, le probabili ragioni
delle lacune e le verifiche più rapide per confermare ciascuna ragione. Suggerisci
come riportare la copertura in modo che una scansione fallita o parziale non
sembri un successo. Elenca le tue ipotesi.
```

**Pianificare un'esercitazione da tavolo.**

```text
Progetta un'esercitazione da tavolo di 90 minuti per [tipo di organizzazione] su
questo scenario: [descrivere, per esempio una credenziale di un fornitore
compromessa]. Includi ruoli, una cronologia di stimoli, le decisioni da
sollecitare, che cosa registrare (compresi i tempi di rilevamento e di
contenimento) e domande per un debriefing senza attribuzione di colpe. Non
includere nomi o sistemi reali. Elenca le tue ipotesi e che cosa adattare al
nostro contesto.
```

**Scrivere un messaggio senza attribuzione di colpe per un errore segnalato.**

```text
Un collega ha segnalato di [descrivere, per esempio aver cliccato su un link in
un'email di phishing]. Redigi una risposta breve e gentile da parte del team di
sicurezza che lo ringrazi, spieghi che cosa faremo e chieda i dettagli di cui
abbiamo bisogno. Poi redigi una nota aggregata per l'aggiornamento settimanale
che condivida la lezione senza nominare nessuno. Elenca le tue ipotesi e le
scelte di tono che devo rivedere.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di sicurezza o di vulnerabilità.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una voce di metrica di sicurezza riporti il proprio vettore di manipolazione, la salvaguardia e le regole sulla privacy.

## Punti chiave

- Misuri il tempo di esposizione, gli elementi aperti più vecchi e la copertura delle scansioni, non i conteggi grezzi dei rilievi.
- Dia priorità in base al contesto: gravità, sfruttamento, raggiungibilità e importanza dell'asset.
- Applichi le patch spesso, con modifiche piccole e testate, e assegni a ogni eccezione un responsabile e una data di revisione.
- Contenga rapidamente gli incidenti, impari senza attribuire colpe e tenga traccia del rilevamento interno.
- Tratti la cultura della segnalazione come un controllo: ringrazi chi segnala e non classifichi mai le singole persone.
- Incorpori i controlli di sicurezza nella pipeline in modo che le scelte sicure siano le più semplici.

## Riferimenti e letture di approfondimento

1. National Institute of Standards and Technology, *Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology*, NIST Special Publication 800-40 Revision 4, 2022.
2. National Institute of Standards and Technology, *Computer Security Incident Handling Guide*, NIST Special Publication 800-61 (latest revision).
3. Forum of Incident Response and Security Teams, *Common Vulnerability Scoring System*, specification (latest version), https://www.first.org/cvss/.
4. Cybersecurity and Infrastructure Security Agency, *Known Exploited Vulnerabilities Catalog*, https://www.cisa.gov/known-exploited-vulnerabilities-catalog.
5. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Vulnerability (computing)](https://en.wikipedia.org/wiki/Vulnerability_(computing)).
9. Wikipedia, [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps).
10. Wikipedia, [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System).
11. Wikipedia, [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Attack surface](https://en.wikipedia.org/wiki/Attack_surface).
14. Wikipedia, [Software supply chain](https://en.wikipedia.org/wiki/Software_supply_chain).
15. Wikipedia, [Computer security incident management](https://en.wikipedia.org/wiki/Computer_security_incident_management).
