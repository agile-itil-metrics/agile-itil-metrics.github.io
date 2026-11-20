# Ritorno sull'investimento e business case

**Un business case è una previsione: lo si scriva con intervalli e ipotesi dichiarate, si finanzi il lavoro per fasi man mano che arrivano le evidenze e si verifichi la previsione rispetto a ciò che è accaduto, così che il prossimo caso sia più onesto del precedente.**

## Panoramica e motivazione

Migliorare il modo in cui i servizi IT vengono erogati e gestiti richiede denaro e attenzione, e ogni proposta compete con altre. Una nuova piattaforma, una modifica dell'organico, un programma di automazione e un'iniziativa sulla qualità promettono tutti un futuro migliore. I dirigenti hanno bisogno di un modo per confrontarli, e i team di un modo per sostenere il lavoro che conta. Il business case è lo strumento tradizionale, e il ritorno sull'investimento è il suo numero più noto.

Un [business case](https://en.wikipedia.org/wiki/Business_case) è una giustificazione per un progetto o un'iniziativa proposti, che di solito espone il problema, le opzioni, i costi, i benefici e i rischi. Il [ritorno sull'investimento](https://en.wikipedia.org/wiki/Return_on_investment) (ROI, return on investment) confronta il guadagno di un investimento con il suo costo. Il [costo totale di proprietà](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO, total cost of ownership) conta tutto ciò che un asset o un servizio costa nel corso della sua vita, compresi acquisto, esercizio, supporto e dismissione. Gli argomenti precedenti di questa parte forniscono gli input: il costo di asset, software, registri di configurazione, servizi e risorse cloud (si vedano l'Argomento 7.5 «Costo del servizio ed economia unitaria» e l'Argomento 7.6 «Metriche di FinOps e costi del cloud»), e l'argomento sui benefici fornisce le evidenze sui risultati (si veda l'Argomento 6.5 «Realizzazione del valore e risultati di business»).

Due tensioni rendono i business case difficili da fare bene.

- **I business case sono previsioni, scritte da persone che vogliono l'approvazione.** L'autore spesso desidera che la proposta abbia successo, e l'incentivo a gonfiare i benefici e a ridurre i costi è forte. Il [bias di ottimismo](https://en.wikipedia.org/wiki/Optimism_bias) è la tendenza ad attendersi risultati migliori di quelli probabili, ed è ben documentato nella pianificazione dei progetti. Il correttivo è la [previsione per classe di riferimento](https://en.wikipedia.org/wiki/Reference_class_forecasting), che basa le stime sui risultati effettivi di progetti passati simili anziché su un racconto costruito dal basso. La propria storia di casi passati è la migliore classe di riferimento di cui si dispone.
- **La consegna continua cambia ciò che un business case può promettere.** L'approccio agile presuppone che requisiti e valore si scoprano man mano che il lavoro procede. Un ambito, un prezzo e un insieme di benefici fissati con un anno di anticipo sono in conflitto con questo. La risposta agile è finanziare per fasi: un piccolo primo passo per imparare, poi ulteriori finanziamenti man mano che arrivano le evidenze. Ciò si accorda con l'obiettivo di consegna continua e di collaborazione continua con le parti interessate, e si accorda con una funzione finanziaria che vuole controllo. Significa anche che il business case è un documento vivo, riesaminato man mano che le ipotesi vengono messe alla prova (si veda l'Argomento 6.5 «Realizzazione del valore e risultati di business»).

Alcune idee della finanza aiutano. Il [valore temporale del denaro](https://en.wikipedia.org/wiki/Time_value_of_money) dice che un'unità di valuta oggi vale più di una in futuro, perciò i benefici più lontani nel tempo contano meno. Il [valore attuale netto](https://en.wikipedia.org/wiki/Net_present_value) (NPV, net present value) converte un flusso di costi e benefici futuri in un unico valore odierno usando un tasso di sconto. Il [periodo di recupero](https://en.wikipedia.org/wiki/Payback_period) è il tempo necessario a recuperare l'esborso iniziale. Ciascuno è una sintesi e ciascuno nasconde ipotesi, perciò le si dichiari. Il [costo opportunità](https://en.wikipedia.org/wiki/Opportunity_cost) ricorda che il costo di scegliere un'opzione è il valore della migliore alternativa a cui si rinuncia. Un [costo irrecuperabile](https://en.wikipedia.org/wiki/Sunk_cost) è denaro già speso che non si può recuperare e che non dovrebbe guidare la decisione di proseguire.

Ogni numero di un business case può essere manipolato, scegliendo un periodo generoso, un tasso di sconto favorevole o benefici difficili da verificare. La salvaguardia ricavata dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) si applica al caso stesso: quando l'approvazione dipende da un ROI di facciata, gli autori imparano a produrlo (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»). Le misure che seguono includono perciò una verifica sulla qualità delle previsioni passate.

## Principi chiave

- **Trattare il caso come una previsione con un intervallo.** Si mostrino esiti bassi, attesi e alti e si dichiarino le ipotesi alla base di ciascuno.
- **Contare il costo completo.** Si includano esercizio, supporto, formazione, sforzo di cambiamento e dismissione, oltre alla realizzazione.
- **Essere espliciti sui benefici e sulle loro evidenze.** Si separino risparmi di costo, costi evitati, ricavi e riduzione del rischio, e si dica come ciascuno sarà misurato.
- **Finanziare per fasi.** Si rilasci il denaro man mano che le ipotesi vengono messe alla prova e il quadro migliora.
- **Confrontare con le alternative, compreso non fare nulla.** Il costo di restare fermi fa parte del caso.
- **Imparare dalla propria storia.** Si verifichino le previsioni rispetto ai risultati e si correggano.
- **Ignorare i costi irrecuperabili.** Si decida su ciò che sta davanti.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ritorno sull'investimento | Guadagno netto rispetto al costo in un periodo dichiarato | (benefici totali meno costi totali) / costi totali nel periodo | percentuale | Business case, libro mastro, registro dei benefici | Gestione finanziaria dei servizi; miglioramento continuo | Revisione dei risultati rispetto al finanziamento | Alla decisione e a ogni revisione |
| Costo totale di proprietà | Costo sull'intera vita di un servizio o di un asset in un periodo dichiarato | costi di acquisizione + esercizio + supporto + modifica + formazione + dismissione nel periodo | valuta | Libro mastro, modelli di costo, contratti con i fornitori | Gestione finanziaria dei servizi; gestione degli asset IT | Costo di un team stabile e delle sue piattaforme | Alla decisione e annualmente |
| Periodo di recupero | Tempo necessario perché i benefici netti cumulati eguaglino l'investimento iniziale | momento in cui benefici cumulati meno costi cumulati raggiunge lo zero | mesi | Flussi di cassa del business case | Gestione finanziaria dei servizi | Tempo al primo valore, esteso al recupero dei costi | Alla decisione e a ogni revisione |
| Valore attuale netto | Valore attuale dei benefici attesi meno valore attuale dei costi, a un tasso di sconto dichiarato | somma sui periodi di (beneficio meno costo) / (1 + tasso di sconto) elevato al periodo | valuta | Flussi di cassa del business case, policy finanziaria sul tasso di sconto | Gestione finanziaria dei servizi | Definizione delle priorità basata sul valore | Alla decisione |
| Accuratezza della stima dei costi | Rapporto tra costo effettivo e costo stimato per le iniziative concluse | costo effettivo / costo stimato all'approvazione, per iniziativa e come distribuzione | rapporto | Registrazioni dei business case e libro mastro | Gestione finanziaria dei servizi; miglioramento continuo | Accuratezza della previsione | Trimestrale |
| Accuratezza della stima dei benefici | Rapporto tra beneficio realizzato e beneficio atteso per le iniziative concluse, secondo le regole di evidenza dei benefici | beneficio realizzato / beneficio atteso all'approvazione, per iniziativa e come distribuzione | rapporto | Registrazioni dei business case e registro dei benefici | Miglioramento continuo; governance del sistema di valore del servizio | Revisione dei risultati con le parti interessate | Trimestrale |
| Tasso di arresto basato sulle evidenze | Quota delle iniziative finanziate che sono state fermate o rimodellate a un punto di controllo perché le evidenze hanno cambiato il quadro | iniziative fermate o rimodellate in base alle evidenze a un punto di controllo / iniziative giunte a un punto di controllo | percentuale | Registro delle decisioni ai punti di controllo | Miglioramento continuo; governance del portafoglio | Apprendimento dal lavoro rilasciato | Trimestrale |

Per ogni valore si indichino periodo, tasso di sconto e che cosa conta come costo o beneficio, e li si registri insieme al caso. ROI e NPV dipendono fortemente da questi elementi, perciò due casi sono confrontabili solo se usano le stesse regole. L'accuratezza dei costi e dei benefici si mostra come distribuzioni, per esempio il rapporto mediano e la dispersione, sulle iniziative passate, non come una singola media. Un basso tasso di arresto basato sulle evidenze può significare una buona selezione, oppure punti di controllo che non dicono mai di no, perciò va letto insieme alle misure di accuratezza.

## Raccomandazioni

### Scrivere il caso con onestà

**1. Partire dal problema e dalle opzioni.** Si descriva il problema, chi lo vive e quanto costa oggi. Si elenchino almeno tre opzioni: non fare nulla, un passo minimo e la modifica proposta, più qualsiasi alternativa seria. «Non fare nulla» ha costi, come il perdurare degli incidenti o un rischio crescente, e includerli rende equo il confronto.

**2. Contare il costo totale di proprietà sull'intera vita della modifica.** Si includano realizzazione, licenze, hosting, esercizio, supporto, formazione, migrazione, il tempo delle persone che la useranno e la dismissione. I costi che arrivano dopo il lancio sono quelli più spesso tralasciati. Si usi un periodo che corrisponda alla vita del beneficio e si dica quale sia.

**3. Descrivere ciascun beneficio e come sarà misurato.** Si separino i tipi. I risparmi di costo riducono la spesa effettiva. I costi evitati prevengono una spesa che altrimenti ci sarebbe stata, e sono più difficili da verificare. I benefici di ricavo dipendono dal comportamento del mercato. La riduzione del rischio abbassa la probabilità o l'impatto di una perdita, ed è meglio espressa in termini di uno scenario specifico. Per ciascuno si indichino l'indicatore, la baseline e il responsabile (si veda l'Argomento 6.5 «Realizzazione del valore e risultati di business»).

**4. Fornire intervalli e dire che cosa li determina.** Per costi e benefici si dia una stima bassa, attesa e alta, con le ipotesi principali. Un'[analisi di sensibilità](https://en.wikipedia.org/wiki/Sensitivity_analysis) mostra come cambia il risultato quando cambia un'ipotesi e quali ipotesi contano di più. Se il caso funziona solo quando ogni ipotesi è generosa, lo si dica. La simulazione può combinare gli intervalli, anche se può dare una falsa sicurezza se gli input sono congetture.

### Correggere l'ottimismo

**5. Usare la propria storia come classe di riferimento.** Si osservino i risultati effettivi di costo e beneficio delle proprie iniziative simili passate e li si confronti con quanto previsto. Se in passato le iniziative sono costate in media il 30 per cento in più del stimato, una nuova stima che lo ignora probabilmente ripeterà l'errore. Si corregga, o almeno si mostri la correzione. Le misure di accuratezza dei costi e dei benefici sopra descritte costruiscono questo storico.

**6. Far rivedere il caso a qualcuno esterno al team.** Un collega della finanza o di un altro team, non coinvolto nel risultato, legge il caso alla ricerca di costi mancanti, benefici generosi e ipotesi non verificate. Si renda la revisione routinaria e costruttiva. Un caso che la supera è più solido.

**7. Separare, dove possibile, chi stima da chi sostiene.** I team di consegna sono bravi a stimare lo sforzo, e gli sponsor sono bravi a giudicare il valore. Quando la stessa persona vuole l'approvazione, le stime derivano. Si registri chi ha prodotto quali numeri.

### Finanziare per fasi

**8. Rilasciare i finanziamenti a passi legati alle evidenze.** Si finanzi una piccola prima fase per verificare l'ipotesi più rischiosa: costruire una fetta sottile, condurre un progetto pilota o misurare la baseline. Si definisca in anticipo quale evidenza giustificherebbe la fase successiva, quale farebbe rimodellare il lavoro e quale lo farebbe fermare. È l'approccio agile al rischio applicato al denaro, e limita il costo di sbagliare.

**9. Decidere a ogni fase su ciò che sta davanti.** Il denaro già speso è un costo irrecuperabile e non dovrebbe pesare sulla decisione di proseguire. Ci si chieda se il costo rimanente sia giustificato dal beneficio atteso rimanente, alla luce di ciò che si è appreso. Si dia ai team il permesso di fermarsi e si tratti un arresto ben documentato come un buon risultato.

**10. Tenere coinvolte le parti interessate.** Si riveda il caso con lo sponsor e il responsabile dei benefici a ogni fase. La collaborazione con le parti interessate lungo tutto il percorso è un obiettivo agile fondamentale, e impedisce che il caso diventi un documento che nessuno legge dopo l'approvazione.

### Verificare e imparare

**11. Rivedere il risultato rispetto al caso.** Ai punti di revisione concordati si confrontino costo effettivo e beneficio realizzato con la previsione. Si registrino i rapporti, i motivi delle differenze e che cosa si cambierebbe nel prossimo caso. Si renda la revisione senza colpe e basata sui fatti, poiché da questo dipende la sincerità della rendicontazione.

**12. Riferire ai decisori la distribuzione dell'accuratezza.** Si mostri, sulle iniziative passate, come le previsioni si sono confrontate con i risultati. Un portafoglio in cui i benefici restano regolarmente sotto le attese con un margine simile dice ai dirigenti quanta fiducia accordare a un nuovo caso, e dà agli autori un motivo per essere onesti. Lo si abbini al tasso di arresto basato sulle evidenze per vedere se i punti di controllo funzionano.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Ritorno sull'investimento | Scegliere un periodo lungo o contare benefici soft; tralasciare il costo di esercizio | Regole fisse per periodo e ambito dei costi; qualità delle evidenze sui benefici; revisione indipendente |
| Costo totale di proprietà | Omettere supporto, formazione, sforzo di cambiamento o dismissione; usare volumi ottimistici | Checklist delle categorie di costo; confronto con il TCO effettivo di lavori passati simili |
| Periodo di recupero | Definire l'inizio più tardi; contare benefici che non vengono realizzati | Definizione del cronometro fissa; confronto con l'accuratezza dei benefici realizzati |
| Valore attuale netto | Scegliere un tasso di sconto basso; estendere l'orizzonte | Tasso di sconto stabilito dalla policy finanziaria; analisi di sensibilità mostrata |
| Accuratezza della stima dei costi | Rivedere a posteriori la stima di base; escludere gli sforamenti come variazioni di ambito | Stima congelata all'approvazione; registrare le variazioni di ambito con approvazione; mostrare il costo totale al completamento |
| Accuratezza della stima dei benefici | Contare benefici non misurati; ridefinire il beneficio | Regole del registro dei benefici; conferma da parte di un responsabile esterno al team di consegna |
| Tasso di arresto basato sulle evidenze | Fermare lavoro di basso valore per gonfiare il tasso; non fermare mai nulla | Leggere insieme alle misure di accuratezza; rivedere i motivi degli arresti e delle prosecuzioni |

Una lettura sana è un portafoglio con uno storico: previsioni leggermente ottimistiche in un modo noto, casi che includono intervalli e sensibilità e punti di controllo che talvolta fermano il lavoro sulla base delle evidenze.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Grande business case iniziale | Impegno e controllo chiari | Blocca le ipotesi; invita all'ottimismo |
| Finanziamento per fasi | Limita il costo di sbagliare; si impara presto | Richiede disciplina ai punti di controllo; meno certezza per la pianificazione |
| Singolo valore di ROI | Semplice da confrontare | Nasconde le ipotesi; facile da manipolare |
| Intervallo con sensibilità | Onesto sull'incertezza | Più difficile da confrontare; può sembrare vago |
| Caso qualitativo | Coglie le ragioni strategiche e di rischio | Difficile da confrontare e da verificare |
| Caso quantitativo | Confrontabile e verificabile | Falsa precisione; omette ciò che non si può contare |
| Classe di riferimento esterna | Corregge l'ottimismo | Può non adattarsi al proprio contesto |
| Classe di riferimento dalla propria storia | Si adatta al proprio contesto | Richiede uno storico; campioni piccoli |

La risposta in prosa è usare il finanziamento per fasi, gli intervalli e la propria storia, insieme a un breve resoconto qualitativo di ciò che i numeri non colgono. Si usino ROI, NPV e periodo di recupero come sintesi, non come verdetti.

## Domande da discutere con il team

**1. Quanto hanno sbagliato i nostri ultimi cinque business case, e in quale direzione?**
Si raccolgano i costi e i benefici previsti ed effettivi delle iniziative recenti. Si calcolino i rapporti. Si osservino la dispersione e se gli errori propendano in un'unica direzione. Il facilitatore dovrebbe resistere alle spiegazioni al primo passaggio e limitarsi a registrare lo schema. Poi si discuta di che cosa implichi per il prossimo caso.

**2. Qual è l'ipotesi più rischiosa della nostra proposta attuale, e a quanto poco costo potremmo verificarla?**
Si elenchino le ipotesi e le si ordini per quanto il caso dipenda da ciascuna e per quanto siamo incerti. Per la prima si progetti un piccolo test. La risposta plasma la prima fase di finanziamento.

**3. Quanto costa non fare nulla, e l'abbiamo inserito nel caso?**
Si descriva il percorso probabile se la proposta non viene approvata: costi degli incidenti che continuano, manutenzione crescente, rischio in aumento. Lo si stimi con un intervallo. Si verifichi che il caso si confronti equamente con esso.

**4. Quali costi compaiono sempre in ritardo nei nostri progetti?**
Si pensi a esercizio, formazione, migrazione e dismissione. Si controlli il caso per ciascuno. Si aggiunga al modello una checklist standard delle categorie di costo.

**5. Chi, al di fuori del team, ha messo in discussione i nostri numeri, e che cosa ha detto?**
Si riveda l'ultima revisione indipendente. Se non ce n'è stata nessuna, si decida chi dovrebbe condurre la prossima. La conversazione dovrebbe chiarire che la revisione è un servizio reso al caso, non un attacco.

**6. Quando abbiamo fermato qualcosa per l'ultima volta perché le evidenze erano cambiate, e come ci siamo sentiti?**
Si ricordi un'iniziativa fermata o rimodellata. Si discuta di come è stata accolta e di che cosa ha fatto per la fiducia. Si concordi come fare in modo che il prossimo arresto sia vissuto come apprendimento.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna forniscono le stime dei costi e imparano dalle fasi di finanziamento. Dovrebbero stimare con intervalli, registrare i costi effettivi e farsi sentire quando le ipotesi cadono. Il finanziamento per fasi permette loro di concentrarsi sull'apprendere ciò che conta di più, e un arresto basato sulle evidenze dovrebbe valere come un successo.

### Team di servizio e operations

I team di operazioni sostengono gran parte del costo dopo il lancio e spesso restano fuori dal caso. Andrebbero interpellati sui costi di esercizio, sullo sforzo di supporto e sui rischi, e dovrebbero verificare i benefici che dipendono dal loro lavoro, come la riduzione degli incidenti. Possono verificare con i propri dati le affermazioni sui risparmi nelle operazioni.

### Leadership e governance

I dirigenti decidono che cosa viene finanziato e fissano il clima di onestà. Dovrebbero chiedere intervalli e ipotesi, riesaminare lo storico delle previsioni, finanziare per fasi e accettare un arresto come esito normale. La governance dovrebbe richiedere la revisione indipendente dei casi grandi e una verifica successiva all'implementazione, e dovrebbe guardare al portafoglio dei risultati.

### Clienti e utenti

Utenti e responsabili di business sopportano i benefici e i disagi. Dovrebbero far parte del caso, contribuendo a definire il problema e il beneficio, e ricevere comunicazione di che cosa è stato deciso e perché. La loro esperienza dopo la consegna è la prova migliore che il caso fosse giusto.

## In pratica: un esempio di ITIL agile

Il gruppo IT di un'agenzia sanitaria provinciale propone un programma per automatizzare le richieste di accesso di routine e ridurre la gestione manuale. I numeri che seguono sono illustrativi.

La prima bozza della proposta dichiara un ROI del 240 per cento su cinque anni, basato su 18.000 richieste l'anno, un costo medio di gestione manuale e l'automazione completa dell'80 per cento delle richieste. La partner finanziaria suggerisce di applicare la storia del gruppo stesso. Estrae otto iniziative passate: il costo effettivo è stato in mediana 1,35 volte la stima, con un intervallo da 1,0 a 1,9, e il beneficio realizzato è stato in mediana 0,6 del beneficio atteso. Il gruppo scopre anche che il dato sul volume delle richieste proveniva da un solo anno di intensa attività e che la stima dei costi ometteva la formazione e il tempo del personale che esamina le eccezioni.

Il team riscrive il caso con gli intervalli. Applicando lo storico dei costi, il costo atteso aumenta di un terzo. Applicando lo storico dei benefici, il beneficio atteso si riduce di circa la metà. Il caso rivisto mostra un ROI in un intervallo da lievemente negativo a circa il 70 per cento, un periodo di recupero tra 20 e 40 mesi e un NPV positivo nei casi centrale e atteso al tasso di sconto della policy finanziaria e negativo nel caso basso. L'analisi di sensibilità mostra che la quota di richieste automatizzabili è ciò che conta di più. La proposta viene rimodellata in fasi. La prima fase automatizza i tre tipi di richiesta più comuni, con un budget pari a circa un quinto del totale, per verificare la quota di automazione e misurare il tempo di gestione di base. I criteri per la seconda fase sono scritti: almeno il 50 per cento di quei tipi di richiesta completamente automatizzato e il tempo di gestione per richiesta ridotto di una quantità dichiarata, con conferma del responsabile dei benefici.

Dopo la prima fase, il 58 per cento dei tre tipi di richiesta è automatizzato, e le eccezioni richiedono più tempo del previsto. Il team rimodella la seconda fase per migliorare la gestione delle eccezioni prima di estenderla ad altri tipi. Il consiglio dell'agenzia chiede perché il valore del ROI sia sceso. Il direttore spiega che il valore precedente presupponeva l'automazione completa e nessuno storico di sforamenti, e che il nuovo intervallo è più onesto. La decisione viene registrata. Il rimodellamento della seconda fase basato sulle evidenze viene annotato, e le tabelle di accuratezza dei costi e dei benefici del portafoglio vengono aggiornate.

## Lente di settore

**Startup.** Le risorse sono scarse e la velocità di apprendimento conta. Si usi un caso di una pagina con l'ipotesi più rischiosa e un test economico, si finanzi a piccoli passi e si evitino modelli finanziari elaborati. È spesso l'autonomia finanziaria (runway), non l'NPV, il vincolo determinante.

**Piccola impresa.** Il titolare è lo sponsor e la funzione finanziaria. Ci si concentri su recupero e flusso di cassa, si includa il tempo del personale e si confronti con le opzioni di non fare nulla e di acquistare. Si diffidi dei calcolatori di ROI forniti dai fornitori, che tendono a essere generosi.

**Grande impresa.** La governance del portafoglio, la policy finanziaria sui tassi di sconto e le molte proposte in competizione rendono importante la coerenza. Si usi un modello standard con categorie di costo obbligatorie, una revisione indipendente per i casi grandi e una revisione successiva all'implementazione. Si tenga un registro dell'accuratezza delle previsioni per sponsor e per tipo di iniziativa come strumento di portafoglio, non come classifica di persone.

**Pubblica amministrazione e settore pubblico.** Gli enti pubblici seguono spesso linee guida formali di valutazione, come il Green Book del Regno Unito, che stabilisce come valutare le opzioni, trattare il bias di ottimismo e considerare il rapporto qualità-prezzo compresi i benefici non finanziari. I benefici possono essere sociali e difficili da monetizzare, e contano trasparenza e audit. Si usino le linee guida che si applicano al proprio caso, si documentino le ipotesi e si registrino le evidenze dei benefici (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

Questo argomento riguarda esso stesso il business case, perciò il punto è il costo di farlo bene. Scrivere un caso accurato richiede giorni, non ore, e la revisione indipendente ne richiede di più. Seguire l'accuratezza di costi e benefici richiede una semplice registrazione della previsione e del risultato di ciascuna iniziativa, che a molte organizzazioni manca. Il finanziamento per fasi aggiunge riunioni di governance.

Il ritorno è una migliore allocazione del denaro scarso e meno grandi fallimenti. I casi onesti riducono le sorprese che seguono quelli ottimistici. Uno storico permette ai dirigenti di ridimensionare in modo appropriato i nuovi casi, il che rende più affidabile l'intero portafoglio. Si costruisca l'argomentazione a partire dalla propria storia: i rapporti tra costo e beneficio effettivi e stimati, il denaro speso per iniziative poi abbandonate e il costo della revisione confrontato con gli sforamenti che ha prevenuto. Si eviti di citare studi sui tassi di fallimento dei progetti, a meno che se ne possano ricondurre il metodo e la pertinenza al proprio tipo di lavoro.

## Anti-pattern e insidie

- **Un singolo valore di ROI presentato come un fatto.** Nasconde le ipotesi. Si mostrino intervalli e sensibilità.
- **Tralasciare il costo di esercizio.** La realizzazione è una frazione del costo sull'intera vita. Si conti l'intera vita.
- **Contare i benefici soft come hard.** Costi evitati e affermazioni di produttività richiedono evidenze. Li si etichetti e li si verifichi.
- **Prevedere solo dal basso verso l'alto.** Ripete l'ottimismo. Si confronti con la propria storia.
- **Tutto il finanziamento in anticipo.** Blocca le congetture. Si finanzi per fasi con punti di controllo basati sulle evidenze.
- **Proseguire per via del denaro già speso.** Si decida su ciò che sta davanti.
- **Correggersi i compiti da soli.** Si faccia rivedere costi e benefici a un lettore indipendente.
- **Non riesaminare mai il caso.** Senza revisioni dei risultati nulla migliora. Si verifichino le previsioni rispetto ai risultati.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Scrittura del caso | Presentazione informale con un numero di facciata | Modello con costi e benefici | Modello standard con checklist del TCO, intervalli e sensibilità | Correzione basata sulla propria storia applicata; revisione indipendente | Casi co-sviluppati con responsabili di business e finanza; ipotesi condivise nel portafoglio |
| Finanziamento | Tutto in anticipo | Tappe intermedie | Finanziamento per fasi con criteri di evidenza | I punti di controllo rimodellano o fermano abitualmente il lavoro sulla base delle evidenze | Il finanziamento del portafoglio si sposta tra le iniziative in base alle evidenze |
| Apprendimento | Nessun seguito | Revisione occasionale | Revisione successiva all'implementazione rispetto al caso | Accuratezza di costi e benefici seguita come distribuzioni e usata nei nuovi casi | Apprendimento condiviso nell'organizzazione e con i partner; il metodo migliora |

## Checklist

- [ ] Il caso elenca le opzioni, compreso non fare nulla.
- [ ] Il costo totale di proprietà copre realizzazione, esercizio, supporto, formazione, cambiamento e dismissione.
- [ ] Ogni beneficio ha un tipo, un indicatore, una baseline e un responsabile.
- [ ] Costi e benefici sono forniti come intervalli con i determinanti dichiarati.
- [ ] Un'analisi di sensibilità mostra quali ipotesi contano di più.
- [ ] Le stime sono confrontate con la propria storia di iniziative simili.
- [ ] Un revisore indipendente ha letto il caso.
- [ ] Il finanziamento è per fasi, con criteri di evidenza per proseguire, rimodellare o fermarsi.
- [ ] I risultati sono rivisti rispetto al caso alle date concordate.
- [ ] L'accuratezza di costi e benefici sulle iniziative passate è riferita ai decisori.

## Prompt IA

**Mettere alla prova un business case.**

```text
Ecco una sintesi del nostro business case per [iniziativa]: costi [elenco con
intervalli], benefici [elenco con tipi e intervalli], periodo [anni], tasso di
sconto [tasso stabilito dalla finanza] e ipotesi [elenco]. Individua le
categorie di costo mancanti, i benefici che richiedono evidenze più solide, le
ipotesi che dominano il risultato e i rischi di ottimismo. Suggerisci un'analisi
di sensibilità e una struttura di finanziamento per fasi. Non inventare cifre.
Elenca le tue ipotesi e le domande a cui dovrei rispondere.
```

**Costruire una classe di riferimento dalla nostra storia.**

```text
Abbiamo queste iniziative passate con costo e beneficio previsti ed effettivi:
[incolla una tabella]. Calcola i rapporti tra effettivo e previsto, descrivi
la mediana e la dispersione, commenta eventuali schemi per tipo di iniziativa e
suggerisci come usare questi dati nella stima di una nuova iniziativa.
Avvertimi dove il campione è troppo piccolo per fare affidamento. Non usare
benchmark esterni. Elenca le tue ipotesi.
```

**Progettare i punti di controllo per fasi.**

```text
Per [iniziativa], proponi tre fasi di finanziamento. Per ciascuna indica
l'ipotesi più rischiosa da verificare, l'evidenza che giustificherebbe il
passaggio successivo, l'evidenza che ci farebbe rimodellare il lavoro e
l'evidenza che ci farebbe fermare. Mantieni ogni fase piccola ed economica.
Non presumere alcun metodo di consegna particolare. Elenca le tue ipotesi e le
decisioni che richiedono il contributo dei dirigenti.
```

**Scrivere una revisione successiva all'implementazione.**

```text
Redigi una revisione successiva all'implementazione di una pagina per
[iniziativa]. Input: il caso originale [sintesi], il costo effettivo [cifre],
il beneficio realizzato e le evidenze [sintesi] e che cosa è cambiato lungo il
percorso [elenco]. Includi i rapporti di costo e di beneficio, i motivi delle
differenze, che cosa cambieremmo nel prossimo caso e le domande per il
responsabile dei benefici. Mantieni un tono fattuale e senza colpe. Elenca le
tue ipotesi e ogni affermazione che richiede una verifica.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di business case o di ROI.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica finanziaria indichi il proprio periodo, le ipotesi, il vettore di manipolazione e la salvaguardia.

## Punti chiave

- Un business case è una previsione: si mostrino intervalli, ipotesi e sensibilità.
- Si conti il costo totale di proprietà sull'intera vita della modifica e si confronti con il non fare nulla.
- Si corregga l'ottimismo usando la propria storia di previsioni e risultati.
- Si finanzi per fasi, si decida su ciò che sta davanti e si tratti un arresto basato sulle evidenze come un successo.
- Si rivedano i risultati rispetto al caso e si riferisca l'accuratezza ai decisori.
- Si usino ROI, NPV e periodo di recupero come sintesi con regole dichiarate, non come verdetti.

## Riferimenti e letture di approfondimento

1. HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, United Kingdom, latest edition.
2. Flyvbjerg, B., "From Nobel Prize to project management: Getting risks right," *Project Management Journal*, 37(3), 2006.
3. Kahneman, D., and Lovallo, D., "Timid choices and bold forecasts: A cognitive perspective on risk taking," *Management Science*, 39(1), 1993.
4. Brealey, R. A., Myers, S. C., and Allen, F., *Principles of Corporate Finance*, McGraw-Hill (latest edition).
5. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
6. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Business case](https://en.wikipedia.org/wiki/Business_case).
9. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
10. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
11. Wikipedia, [Optimism bias](https://en.wikipedia.org/wiki/Optimism_bias).
12. Wikipedia, [Reference class forecasting](https://en.wikipedia.org/wiki/Reference_class_forecasting).
13. Wikipedia, [Time value of money](https://en.wikipedia.org/wiki/Time_value_of_money).
14. Wikipedia, [Net present value](https://en.wikipedia.org/wiki/Net_present_value).
15. Wikipedia, [Payback period](https://en.wikipedia.org/wiki/Payback_period).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Sunk cost](https://en.wikipedia.org/wiki/Sunk_cost).
18. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
19. Wikipedia, [Sensitivity analysis](https://en.wikipedia.org/wiki/Sensitivity_analysis).
