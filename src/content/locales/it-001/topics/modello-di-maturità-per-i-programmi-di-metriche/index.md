# Modello di maturità per i programmi di metriche

**Usare la scala condivisa a cinque livelli per descrivere a che punto si trova un programma di metriche e per scegliere il prossimo piccolo passo, mai come punteggio da esibire, confrontare o certificare.**

## Panoramica e motivazione

Ogni altro argomento di questo libro si chiude con una piccola tabella di maturità sul proprio tema. Questo argomento applica la stessa scala al programma di metriche nel suo complesso. La domanda non è quanto siano buoni i tempi di gestione degli incidenti di un team. È quanto bene l'organizzazione raccolga, legga e agisca sulle misure in generale: se le definizioni sono condivise, se ci si fida dei dati, se i numeri portano a decisioni e se le persone misurate considerano il programma un aiuto.

Un modello di maturità è una descrizione delle fasi che un'organizzazione può attraversare man mano che una pratica si sviluppa. L'esempio più noto nel software è il [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model), nato da un lavoro del Software Engineering Institute e ampiamente diffuso. La sua influenza fu grande, e lo furono anche le critiche che ne seguirono. Le organizzazioni inseguirono il livello e non la capacità, gli auditor valutarono la documentazione e il modello finì per essere usato come un distintivo. Un uso responsabile di qualunque modello di maturità tiene presenti tre cautele. La scala è uno strumento di conversazione e non una certificazione. Più alto non è sempre meglio, perché il livello giusto dipende dal contesto. E il modello non sostituisce i risultati: un programma maturo che non migliora i servizi è un fallimento molto ordinato, e un livello esibito come distintivo somiglia molto a una [metrica di vanità](https://en.wikipedia.org/wiki/Vanity_metric), un numero che fa bella figura e non orienta alcuna decisione.

La scala usata qui è quella condivisa in tutto il libro e nell'*Agile ITIL Guide*: Avvio (Initiate), Sviluppo (Develop), Standardizzazione (Standardize), Gestione (Manage) e Orchestrazione (Orchestrate) (vedere il modello di maturità condiviso nella specifica). Non coincide volutamente con le scale di maturità dei processi di ITIL, di ISO/IEC 33000 o del Capability Maturity Model, e un team non dovrebbe rivendicare un punteggio in nessuno di quei framework sulla base di questa.

Gli obiettivi agili indicano come usarla. Il miglioramento continuo significa che il modello serve a trovare il passo successivo, non a raggiungere uno stato finale. L'evoluzione costante significa che un programma che l'anno scorso ha raggiunto l'Orchestrazione può regredire se le persone se ne vanno o le priorità cambiano, quindi l'autovalutazione si ripete. Il coinvolgimento continuo degli stakeholder significa che la valutazione si svolge con i team e non sui team. Un ritmo sostenibile significa che il programma procede un passo alla volta e non tenta di saltare tre livelli in un trimestre. E costruire attorno a persone motivate significa che le persone che svolgono il lavoro giudicano se il programma le aiuta. È la stessa logica della pratica di miglioramento continuo in ITIL, in cui un'organizzazione verifica lo stato attuale, fissa una direzione e migliora a piccoli passi, un'abitudine vicina al [kaizen](https://en.wikipedia.org/wiki/Kaizen), l'idea giapponese di miglioramento continuo da parte di tutti. L'idea più generale è il [processo di miglioramento continuo](https://en.wikipedia.org/wiki/Continual_improvement_process) (vedere l'Argomento 9.5 «Metriche di miglioramento continuo»).

Il modello presenta una trappola particolare nel contesto delle metriche. Un programma valutato sulle proprie metriche invita alla stessa distorsione da cui mette in guardia. Se il «numero di misure con definizioni» diventa un obiettivo, le definizioni si moltiplicano. L'approccio di questo argomento usa quindi evidenze tratte dal lavoro (quali decisioni sono cambiate, che cosa dicono i team) oltre ai conteggi, e mantiene la valutazione in capo ai team, che hanno il minor interesse a gonfiarla (vedere l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»). Un modulo di valutazione di accompagnamento per i team compare nelle appendici (vedere l'Argomento 12.5 «Autovalutazione della maturità»).

## Principi chiave

- **La scala è uno strumento di conversazione.** Aiuta le persone a descrivere il presente e a scegliere un passo successivo, e non serve a valutare, classificare o certificare.
- **Valutare con i team.** Un'autovalutazione discussa apertamente è più accurata di un punteggio esterno.
- **Giudicare in base alle evidenze.** Chiedere quali decisioni sono cambiate, che cosa dicono le persone e che cosa mostrano i dati, oltre a quali documenti esistono.
- **Le dimensioni possono differire.** Un programma può essere forte negli strumenti e debole nella fiducia. Riportare il profilo, non un numero unico.
- **Procedere un passo alla volta.** Puntare al livello successivo in una o due dimensioni, non a tutto insieme.
- **Più alto non è sempre meglio.** Scegliere il livello adatto alla dimensione, al rischio e alle esigenze dell'organizzazione.
- **Aspettarsi la regressione.** Il ricambio del personale, le riorganizzazioni e le pressioni possono far arretrare un programma. Rivalutare con regolarità.
- **Non pubblicare mai una classifica dei team.** Aggregare per il programma e condividere i risultati dei singoli team solo con il team stesso.

## Definizioni delle metriche

Le misure seguenti descrivono la salute del programma e la sua valutazione. Sono destinate al team di programma e ai sostenitori, e si leggono come segnali per la discussione.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Partecipazione alla valutazione | Quota dei team partecipanti che hanno completato un'autovalutazione con una propria discussione | team che hanno completato e discusso / team partecipanti | percentuale | Registri delle valutazioni | Miglioramento continuo | Riflessione e retrospettive | Due volte l'anno |
| Profilo per dimensione | La distribuzione dei livelli autovalutati dei team in ciascuna dimensione, mostrata come intervallo e non come punteggio unico | conteggio dei team a ciascun livello, per dimensione | team per livello | Autovalutazioni, aggregate | Miglioramento continuo; governance | Lavoro visibile | Due volte l'anno |
| Azioni di miglioramento dalle valutazioni | Quota dei passi successivi concordati che sono stati completati, abbandonati con una motivazione o sono ancora in corso | azioni chiuse o motivate / azioni concordate | percentuale | Registro dei miglioramenti | Miglioramento continuo | Piccoli esperimenti | Trimestrale |
| Evidenza delle decisioni | Quota delle misure campionate per cui il team sa indicare una decisione o una scelta deliberata che la misura ha orientato nell'ultimo trimestre | misure con una decisione indicata / misure campionate | percentuale | Interviste ai team; note di revisione | Miglioramento continuo | Evidenze al posto delle cerimonie | Trimestrale |
| Fiducia in definizioni e dati | Accordo, a livello di team, sul fatto che le definizioni siano chiare e i dati corretti | percentuale di consenso in una breve indagine sul team; tasso di risposta mostrato | percentuale | Indagine anonima sul team | Gestione della conoscenza; gestione delle informazioni | Comprensione condivisa | Due volte l'anno |
| Tempo al livello successivo (descrittiva) | Tempo trascorso perché un team porti una dimensione al livello superiore, dove lo ha scelto | mesi mediani dal passo concordato alla nuova valutazione del team | mesi | Storico delle valutazioni | Miglioramento continuo | Ritmo sostenibile | Annuale |
| Onere della valutazione | Ore richieste dalla valutazione per ciascun team | ore mediane per team | ore | Stime di tempo fornite dai team | Miglioramento continuo | Ritmo sostenibile | Due volte l'anno |

La partecipazione si misura come completamento con discussione, perché un modulo compilato da soli dice poco. Il profilo è un intervallo e non viene mai mediato in un unico numero di maturità. Il tempo al livello successivo è descrittivo: una salita rapida può riflettere un'autovalutazione gonfiata, e una lenta può riflettere un'attenzione appropriata. L'onere della valutazione è un controllo sulla valutazione stessa, che non dovrebbe richiedere più di un'ora o due per team.

## Raccomandazioni

### Usare bene la scala

**1. Definire le dimensioni di un programma di metriche.** Un insieme praticabile ha sei dimensioni: (a) domande e scopo, se le misure rispondono a domande poste dai pubblici; (b) definizioni e responsabilità, se le misure hanno definizioni scritte e responsabili; (c) dati e strumenti, se i dati sono accurati, tempestivi e portabili; (d) uso nelle decisioni, se i numeri orientano le scelte; (e) fiducia e sicurezza, se le persone credono che i dati le aiutino; e (f) revisione ed evoluzione, se il programma si sfoltisce da sé. Sei sono sufficienti per essere utili e abbastanza poche da poterne discutere in un'ora.

**2. Descrivere l'aspetto di ciascun livello.** La tabella nella sezione «Modello di maturità» più avanti fornisce brevi descrizioni per ciascuna dimensione a ciascun livello. Trattarle come spunti. Un team dovrebbe adattare la formulazione al proprio contesto e scrivere i propri esempi.

**3. Non fare la media.** Un unico punteggio complessivo nasconde lo schema che conta. Un programma con alta maturità degli strumenti e bassa fiducia si trova in una situazione diversa da uno con il contrario, e il passo successivo differisce. Mostrare il profilo.

### Valutare con i team e non sui team

**4. Farne una conversazione di un'ora.** Riunire un team con la tabella. Chiedere a ciascuno di segnare in privato dove ritiene che si trovi il team in ogni dimensione, e poi confrontare. Discutere le differenze, perché rivelano esperienze diverse dello stesso programma. Concordare una visione del team, registrare le evidenze che la sostengono e scegliere uno o due passi successivi.

**5. Chiedere evidenze.** Per ogni livello rivendicato, chiedere un esempio. «Usiamo i numeri nelle decisioni» invita alla domanda «Quali decisioni nell'ultimo trimestre?». Usare misure campionate e interviste per verificare. Ciò rispetta le persone e impedisce alla valutazione di scivolare nel wishful thinking.

**6. Lasciare i risultati al team.** Il profilo di un team appartiene al team. Il programma condivide intervalli aggregati e temi comuni, non una classifica. Chiarire che la valutazione non incide su finanziamenti, posizione o valutazioni. Se incide, i team la gonfieranno e il valore andrà perduto (vedere l'Argomento 11.3 «Introdurre le metriche senza generare paura»).

### Scegliere i passi successivi

**7. Scegliere la dimensione che limita le altre.** Fiducia e sicurezza spesso limitano tutto il resto: senza di esse i dati sono distorti e le decisioni sospette. Definizioni e responsabilità spesso limitano dati e uso. Uno schema comune è rafforzare prima fiducia e definizioni, poi i dati, poi uso e revisione. Cercare la dimensione in cui un piccolo miglioramento sbloccherebbe le altre.

**8. Fissare un passo piccolo e concreto.** Un passo successivo dovrebbe essere uno che un team può completare in un trimestre e riconoscere: «concordare una carta», «scrivere le definizioni delle nostre quattro misure», «automatizzare due flussi», «tenere una revisione mensile in cui registriamo le decisioni». Evitare passi come «raggiungere il Livello 4». I livelli descrivono uno stato, e i passi descrivono lavoro.

**9. Collegare i passi al registro dei miglioramenti.** Collocare le azioni nello stesso luogo degli altri lavori di miglioramento, con responsabili e date, e verificare i progressi nella regolare conversazione sul miglioramento (vedere l'Argomento 9.5 «Metriche di miglioramento continuo»). Un passo non finanziato o non pianificato non si realizzerà.

### Mantenerla onesta e leggera

**10. Calibrare tra i team senza classificarli.** Tenere una breve sessione in cui i team condividono esempi di ciò che chiamano Livello 3 in una dimensione. Discutere le differenze di standard. L'obiettivo è una comprensione condivisa, non punteggi uguali. Ruotare il facilitatore e invitare un team esterno al programma a mettere in discussione la formulazione.

**11. Rivalutare con un ritmo e in risposta agli eventi.** Due volte l'anno è sufficiente per la maggior parte dei programmi. Rivalutare dopo una riorganizzazione, un cambio di strumenti o una violazione della carta, poiché questi possono spostare la fiducia in entrambe le direzioni. Osservare la regressione e trattarla come informazione, non come fallimento.

**12. Ritirare o rivedere il modello stesso.** Ogni anno chiedere ai team se le dimensioni e le descrizioni dei livelli sono ancora adeguate. Riformulare ciò che confonde ed eliminare ciò che nessuno usa. Un modello che non cambia da cinque anni può descrivere un programma che non esiste più.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Partecipazione alla valutazione | Completare i moduli per rispettare una quota; una sola persona che compila per il team | Richiedere una discussione di team; chiedere le evidenze a sostegno di ciascuna affermazione |
| Profilo per dimensione | Gonfiare i livelli per fare bella figura; sottostimarli per ricevere aiuto | Non collegare a finanziamenti o posizione; chiedere evidenze; calibrare apertamente |
| Azioni di miglioramento dalle valutazioni | Scegliere passi banali da chiudere; chiudere senza fare | Rivedere dimensione e valore dei passi; verificare i risultati alla valutazione successiva |
| Evidenza delle decisioni | Inventare decisioni a posteriori; elencare decisioni prive di conseguenze | Chiedere la data e le persone coinvolte; accettare «abbiamo scelto di non fare nulla» come decisione |
| Fiducia in definizioni e dati | Istruire i rispondenti; bassa risposta che nasconde il malcontento | Anonimato e dimensione minima del gruppo; mostrare i tassi di risposta; parlare direttamente con i team |
| Tempo al livello successivo (descrittiva) | Affrettare le dichiarazioni di progresso; nascondere la regressione | Mantenerla descrittiva; leggerla insieme alle evidenze; registrare le regressioni senza sanzioni |
| Onere della valutazione | Saltare la discussione per ridurre le ore | Monitorare le ore insieme alla partecipazione e alla qualità delle evidenze |

Una lettura sana mostra un profilo con un mix di livelli, con fiducia e definizioni che crescono prima di strumenti e rifinitura, passi successivi piccoli e portati a termine, decisioni che i team sanno nominare e una registrazione onesta di occasionali regressioni.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Autovalutazione del team | Onesta, posseduta, rapida | Soggettiva; richiede calibrazione |
| Valutazione esterna | Coerente; indipendente | Costosa; invita a recitare per il valutatore |
| Punteggio complessivo unico | Facile da comunicare | Nasconde lo schema; invita agli obiettivi |
| Profilo per dimensione | Mostra dove agire | Più difficile da riassumere |
| Valutazione annuale | Leggera | Lenta a rilevare la regressione |
| Due volte l'anno con inneschi da eventi | Reattiva | Maggiore sforzo |
| Collegata ai finanziamenti | Attira attenzione | Inflazione e gaming |
| Tenuta separata dai finanziamenti | Dati onesti | Richiede altri modi per ottenere sostegno |

La risposta in prosa è condurre un'autovalutazione leggera con evidenze, riportare profili e intervalli, lasciare i risultati ai team e collegare i passi successivi al registro dei miglioramenti, non a finanziamenti o posizione.

## Domande da discutere con il team

**1. Quale delle sei dimensioni diremmo che è la nostra più debole, e che cosa ci porta a dirlo?**
Chiedere a ciascuno di sceglierne una in privato e poi condividere. Il facilitatore dovrebbe chiedere un esempio recente. Cercare schemi e concordare quale dimensione limita le altre.

**2. Sappiamo indicare una decisione dell'ultimo trimestre che una misura ha cambiato?**
Elencarle. Se l'elenco è breve, chiedersi perché. Discutere se il problema siano le misure, i dati o l'abitudine di guardarli.

**3. Dove ci collocheremmo su fiducia e sicurezza, e come lo sappiamo?**
Esaminare le segnalazioni di quasi-incidenti, le contestazioni e i risultati delle indagini. Confrontare con il modo in cui le persone parlano nella pratica. Concordare una cosa che i dirigenti potrebbero fare per migliorarla.

**4. Che aspetto avrebbe un passo successivo piccolo e concreto per la nostra dimensione più debole?**
Redigerlo in una frase, con un responsabile e una data. Verificare che possa essere concluso in un trimestre. Concordare come sapremo che ha funzionato.

**5. Che cosa farebbe percepire questa valutazione come una minaccia, e come lo evitiamo?**
Discutere gli usi dei risultati che le persone temerebbero. Scrivere per che cosa i risultati non verranno mai usati. Verificare che il responsabile del programma sia d'accordo.

**6. C'è un livello che non abbiamo bisogno di raggiungere?**
Pensare alla nostra dimensione, ai rischi e agli obiettivi. Descrivere un livello sufficiente per ora e un segnale che ci direbbe di riesaminarlo.

## Quattro prospettive

### Team di prodotto e di consegna

I team si valutano da soli, scelgono il passo successivo e conservano i propri risultati. Dovrebbero usare la conversazione per far emergere differenze di esperienza, chiedere evidenze e fissare passi abbastanza piccoli da essere conclusi. Dovrebbero opporsi a qualunque tentativo di trasformare il profilo in una classifica.

### Team di servizio e operations

I team operativi sostengono carichi pesanti di dati e di incidenti e vedono dove il programma li supporta o li appesantisce. Dovrebbero segnalare dove strumenti o definizioni bloccano il loro lavoro, chiedere che i dati di reperibilità e di incidenti siano trattati con cura e dare un riscontro franco sull'onere della valutazione.

### Leadership e governance

I dirigenti sostengono il programma e ricevono il quadro aggregato. Dovrebbero chiedere profili e temi comuni, resistere alla tentazione di chiedere un punteggio unico, finanziare i passi successivi scelti dai team e non legare finanziamenti o posizione alla valutazione. Dovrebbero anche dare l'esempio descrivendo le decisioni che le metriche hanno orientato.

### Clienti e utenti

Clienti e utenti traggono beneficio quando il programma migliora i servizi e quando il loro riscontro fa parte delle misure. Dove sono partner, possono partecipare alla valutazione delle misure che li riguardano, per esempio l'utilità delle indagini di soddisfazione, e alla revisione di come vengono usati i loro dati.

## In pratica: un esempio di ITIL agile

Un gruppo assicurativo nazionale ha 20 team di consegna e di assistenza e un programma di metriche attivo da 18 mesi. Il sostenitore chiede «un punteggio di maturità per ogni team» per orientare gli investimenti. La responsabile del programma è diffidente, ricordando come una precedente valutazione in stile audit avesse spinto i team a preparare raccoglitori di documenti. Le cifre seguenti sono illustrative.

La responsabile del programma propone invece un profilo su sei dimensioni, valutato dai team in una conversazione di un'ora con un facilitatore esterno al team, con i risultati conservati dal team. Dice al sostenitore che il programma riporterà intervalli e temi comuni e che il profilo di nessun team sarà collegato ai finanziamenti. Il sostenitore acconsente, e la decisione viene registrata.

Diciannove team su 20 completano la valutazione con una discussione, quindi la partecipazione è del 95 per cento. Il profilo mostra un intervallo: in domande e scopo la maggior parte dei team si colloca al Livello 2 o 3; in definizioni e responsabilità, una dispersione da 1 a 4; in dati e strumenti, per lo più 3; in uso nelle decisioni, per lo più 2; in fiducia e sicurezza, una divisione tra 2 e 4; e in revisione ed evoluzione, per lo più 1 o 2. I controlli sulle evidenze sono rivelatori. Undici team avevano rivendicato il Livello 3 per l'uso nelle decisioni, ma quando è stato chiesto di indicare una decisione dell'ultimo trimestre orientata da una misura, solo sei hanno saputo farlo. La responsabile del programma lo annota senza giudizio, e diventa un tema: i team hanno dashboard e raramente tengono revisioni che registrino le decisioni.

I passi successivi sono piccoli. Otto team scelgono una revisione mensile con un registro delle decisioni. Quattro scelgono di scrivere le definizioni delle proprie misure. Tre scelgono di concordare una carta. Sei mesi dopo, 14 dei 17 passi concordati sono completati, uno è abbandonato con una motivazione e due sono in corso. Una nuova valutazione mostra l'evidenza delle decisioni salire dal 38 al 71 per cento delle misure campionate e l'indagine sulla fiducia passare dal 54 al 67 per cento di consenso. Un team arretra sulla fiducia dopo una riorganizzazione, e il facilitatore lo registra come informazione, non come fallimento. Un anno dopo il sostenitore chiede di nuovo un punteggio unico per il rapporto annuale. La responsabile del programma offre un profilo di una pagina con intervalli, tre temi e i passi di miglioramento completati. Il sostenitore accetta, e il rapporto afferma con chiarezza che la scala è uno strumento di conversazione.

## Lente di settore

**Startup.** Una valutazione formale è probabilmente eccessiva. Basta una breve conversazione due volte l'anno sulle sei dimensioni, con uno o due piccoli passi. Prestare attenzione al timore che le misure vengano usate per giudicare, poiché i team piccoli lo avvertono intensamente.

**Piccola impresa.** Usare le dimensioni come lista di controllo per un colloquio con il titolare e il personale. Chiedere se le poche misure mantenute rispondono a domande reali, se le persone ne conoscono il significato e se vengono usate. Scegliere un passo. Non impiegare più di un'ora.

**Grande impresa.** La scala richiede un processo leggero e coerente: le stesse dimensioni, autovalutazione con un facilitatore, sessioni di calibrazione e profili aggregati. Resistere a un ufficio centrale dei punteggi. Collegare i passi successivi ai registri dei miglioramenti e riportare ai sostenitori intervalli e temi. Evitare che la scala si trasformi in un esercizio di conformità.

**Pubblica amministrazione e settore pubblico.** Gli organismi di audit e di controllo possono chiedere punteggi di maturità. Essere chiari sulla differenza tra questo strumento di conversazione interno e qualunque framework formale. Lasciare i risultati dei team ai team, fornire aggregati agli organismi di controllo ed essere trasparenti su che cosa la scala è e che cosa non è (vedere l'Argomento 8.3 «Metriche di conformità e audit»).

## Business case: motivazioni, ROI e TCO

I costi sono ridotti: un'ora o due per team due volte l'anno, un facilitatore, un po' di analisi e lo sforzo per realizzare i passi di miglioramento. I costi maggiori arrivano quando il modello viene usato male, con consulenti, uffici dei punteggi e raccoglitori di evidenze.

I ritorni derivano da un migliore orientamento dello sforzo. Invece di distribuire l'investimento su tutte le dimensioni, il programma individua la dimensione limitante e la affronta. Altri ritorni comprendono un riconoscimento più precoce della regressione, un linguaggio condiviso tra i team e passi di miglioramento scelti e posseduti dai team. Costruire il caso a partire dai propri dati: passi di miglioramento completati, variazioni dell'evidenza delle decisioni e dei risultati dell'indagine sulla fiducia, e lo sforzo richiesto dalla valutazione. Evitare di citare affermazioni pubblicate sui ritorni del miglioramento della maturità senza una fonte rintracciabile e pertinente al proprio contesto (vedere l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Il distintivo di maturità.** Il livello diventa l'obiettivo. Usarlo come conversazione, con evidenze.
- **Un unico numero complessivo.** Lo schema si perde e compaiono gli obiettivi. Mostrare il profilo.
- **Valutazione da parte di auditor.** I team preparano documenti per recitare. Usare l'autovalutazione con un facilitatore.
- **Collegare il punteggio ai finanziamenti.** Ne segue l'inflazione. Tenere la valutazione separata.
- **Inseguire il livello più alto.** Non ogni programma ha bisogno dell'Orchestrazione. Scegliere ciò che è adatto.
- **Valutare e dimenticare.** Non seguono passi. Collegare i passi al registro dei miglioramenti.
- **Valutazione troppo lunga.** L'onere cresce e la qualità cala. Limitarla a un'ora.
- **Ignorare la regressione.** I programmi arretrano dopo i cambiamenti. Rivalutare con un ritmo e dopo gli eventi.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Domande e scopo | Misure raccolte perché i dati esistono | Alcuni team dichiarano le domande che si pongono | Pubblici e domande messi per iscritto; misure associate a essi | Copertura delle domande rivista; le domande senza risposta guidano nuove misure | I pubblici, inclusi clienti e fornitori, plasmano le misure; le domande evolvono con i servizi |
| Definizioni e responsabilità | Le definizioni variano da persona a persona | Alcune scritte; responsabili informali | Catalogo con definizione, fonte, responsabile e limiti per ciascuna misura | Completezza delle definizioni e contestazioni gestite | Definizioni condivise tra team e fornitori; riviste quando non informano più le decisioni |
| Dati e strumenti | Manuali e fragili | Alcuni flussi automatizzati | Pipeline testate, archivio condiviso, dati portabili | Affidabilità, riconciliazione e prontezza all'uscita gestite | Pipeline federate con contratti condivisi; fonti migliorate in base al riscontro |
| Uso nelle decisioni | Numeri mostrati, raramente usati | Usati in alcune revisioni | Revisioni regolari che registrano le decisioni | Evidenza delle decisioni monitorata e tradotta in azioni | Decisioni collegate tra i team ai risultati; apprendimento condiviso |
| Fiducia e sicurezza | Paura o indifferenza | Rassicurazioni verbali | Carta scritta; viste individuali disattivate; indagine sulla sicurezza | Violazioni riviste apertamente; segnali di franchezza gestiti | Fiducia come routine; programma plasmato da personale e partner |
| Revisione ed evoluzione | Nessuna | Pulizia occasionale | Revisione periodica con i team; regola di ritiro | Passi della valutazione finanziati e completati | Il programma migliora continuamente, con cambiamenti proposti da tutti |

## Checklist

- [ ] Le sei dimensioni sono concordate e le descrizioni dei livelli sono adattate al nostro contesto.
- [ ] Ogni team si autovaluta in una discussione di circa un'ora, con un facilitatore.
- [ ] Ogni livello rivendicato è sostenuto da un esempio o da un controllo a campione.
- [ ] I risultati sono mostrati come profili e intervalli, mai come un unico punteggio mediato o una classifica.
- [ ] I risultati di un team restano al team, e l'aggregato è condiviso con i sostenitori.
- [ ] La valutazione non è collegata a finanziamenti, posizione o valutazioni delle prestazioni, e ciò è scritto.
- [ ] Ogni team concorda uno o due piccoli passi successivi, con un responsabile e una data.
- [ ] I passi successivi sono monitorati nel registro dei miglioramenti.
- [ ] La rivalutazione avviene almeno due volte l'anno e dopo gli eventi importanti.
- [ ] Il modello stesso è rivisto ogni anno con i team.

## Prompt IA

**Preparare una conversazione di autovalutazione.**

```text
Prepara un piano di facilitazione di un'ora per l'autovalutazione, da parte di un
team, del proprio programma di metriche su sei dimensioni: domande e scopo,
definizioni e responsabilità, dati e strumenti, uso nelle decisioni, fiducia e
sicurezza, revisione ed evoluzione. Usa cinque livelli: Avvio, Sviluppo,
Standardizzazione, Gestione, Orchestrazione. Includi la marcatura privata, il
confronto, le domande sulle evidenze e la definizione di uno o due piccoli passi
successivi. Non produrre un punteggio. Elenca le tue ipotesi.
```

**Trasformare una dimensione debole in passi.**

```text
Il nostro team si colloca al Livello [n] sulla dimensione [dimensione] del proprio
programma di metriche. Evidenze: [incolla]. Suggerisci tre piccoli passi, ciascuno
concludibile in un trimestre, che potrebbero portarci verso il Livello [n+1]. Per
ogni passo descrivi il responsabile, lo sforzo, il probabile beneficio e come
sapremmo che ha funzionato. Non promettere risultati. Elenca le tue ipotesi e i
rischi.
```

**Verificare le evidenze di un livello rivendicato.**

```text
Un team rivendica il Livello [n] sulla dimensione [dimensione] e porta queste
evidenze: [incolla]. Comportati come un collega curioso. Elenca domande per
verificare se le evidenze sostengono l'affermazione, quali esempi sarebbero
convincenti e quali segnali suggerirebbero che l'affermazione è ottimistica. Non
giudicare il team. Elenca le tue ipotesi.
```

**Riassumere i profili senza classificare.**

```text
Ecco i conteggi aggregati dei team a ciascun livello per ciascuna dimensione:
[incolla]. Scrivi una sintesi di mezza pagina per i sostenitori che descriva
l'intervallo, tre temi comuni e i passi di miglioramento scelti dai team. Non
classificare i team, non produrre un punteggio unico e non dichiarare cause senza
evidenze. Elenca le avvertenze sull'autovalutazione.
```

## Skill IA

- [Agile ITIL Metrics skill](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per associare le misure del programma alle dimensioni di maturità e alle relative salvaguardie abbinate.
- [Agile ITIL Metrics maintainer skill](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una valutazione di maturità riporti profili, lasci i risultati ai team ed eviti un punteggio unico.

## Punti chiave

- Usare la scala condivisa a cinque livelli come strumento di conversazione, mai come distintivo, classifica o certificazione.
- Riportare un profilo su sei dimensioni e non un unico punteggio mediato.
- Valutare con i team, chiedere evidenze e lasciare i risultati di ciascun team al team.
- Scegliere piccoli passi successivi nella dimensione che limita le altre, spesso fiducia e definizioni.
- Monitorare i passi nel registro dei miglioramenti e rivalutare con regolarità perché i programmi regrediscono.
- Più alto non è sempre meglio, e i risultati contano più dei livelli.

## Riferimenti e letture di approfondimento

1. Paulk, M., et al., *Capability Maturity Model for Software, Version 1.1*, Software Engineering Institute, Carnegie Mellon University, 1993.
2. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
3. ISO/IEC 33001, *Information technology: Process assessment: Concepts and terminology*, International Organization for Standardization, 2015.
4. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
5. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model).
8. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
9. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
