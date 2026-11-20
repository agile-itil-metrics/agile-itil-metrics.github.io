# Costo del servizio ed economia unitaria

**Sapere quanto costa un servizio, e quanto costa per unità di qualcosa che gli utenti apprezzano, permette a un team di compiere scelte oneste su qualità, velocità e spesa, purché le regole di allocazione siano eque, visibili e mai usate per punire le persone che gestiscono il servizio.**

## Panoramica e motivazione

Ogni servizio IT costa denaro: persone, cloud e hosting, licenze, hardware, fornitori e la quota di piattaforme condivise che utilizza. I dirigenti chiedono quanto costa un servizio, se ne valga la pena e che cosa cambi se la domanda raddoppia. I team pongono le stesse domande dall'altro lato: che cosa possiamo permetterci di fare, e a che cosa stiamo rinunciando? Senza numeri, queste conversazioni si trasformano in discussioni su di chi sia quale budget.

La [contabilità dei costi](https://en.wikipedia.org/wiki/Cost_accounting) è la pratica di misurare, registrare e analizzare i costi. Per un'organizzazione di servizi i compiti centrali sono attribuire i costi ai servizi, esprimere il costo per unità di qualcosa di significativo e prevedere come il costo cambia con il volume. La pratica ITIL di gestione finanziaria dei servizi copre lo stesso terreno, e la pratica FinOps per la spesa cloud la porta oltre (si veda l'Argomento 7.6 «Metriche di FinOps e costi del cloud»).

Le visioni agile e ITIL del costo differiscono, e la differenza è utile.

- **La visione per progetti** finanzia uno sforzo temporaneo con un budget e una data di consegna. Il costo è ciò che il progetto ha speso, e il successo è la consegna nei tempi e nel budget. Il progetto finisce, il team si disperde e il servizio che ha creato passa a qualcun altro.
- **La visione per prodotti o servizi** finanzia un team stabile per costruire ed eseguire un servizio per tutta la sua vita. Il costo è il costo stabile del team e delle sue piattaforme, e la domanda è se il valore erogato giustifichi quella spesa. Questo si accorda con gli obiettivi agile di consegna continua e di costruzione attorno a persone motivate che conoscono il servizio. Si accorda anche con l'attenzione di ITIL al costo di un servizio lungo tutto il suo ciclo di vita.

Le misure di costo possono fuorviare con la stessa facilità con cui informano. Ricorrono tre problemi.

- **L'allocazione è una scelta.** I costi condivisi, come reti, sicurezza e piattaforme, devono essere ripartiti tra i servizi secondo una qualche regola, e regole diverse danno risposte diverse. L'[allocazione dei costi](https://en.wikipedia.org/wiki/Cost_allocation) dovrebbe seguire un [determinante di costo](https://en.wikipedia.org/wiki/Cost_driver) (cost driver), un fattore che fa variare il costo, come utenti, richieste o archiviazione. L'[activity-based costing](https://en.wikipedia.org/wiki/Activity-based_costing) formalizza questo approccio tracciando i costi fino alle attività che consumano risorse.
- **I costi fissi e variabili si comportano diversamente.** Un [costo fisso](https://en.wikipedia.org/wiki/Fixed_cost) resta uguale al variare del volume entro un intervallo, e un [costo variabile](https://en.wikipedia.org/wiki/Variable_cost) cresce con il volume. Il [costo unitario](https://en.wikipedia.org/wiki/Unit_cost) di un servizio diminuisce al crescere del volume quando dominano i costi fissi, uno schema legato alle [economie di scala](https://en.wikipedia.org/wiki/Economies_of_scale). Guardare il costo unitario senza sapere quali costi sono fissi porta a previsioni sbagliate.
- **Costo non è valore.** Il servizio più economico non è il migliore. Il costo per ticket diminuisce se si chiudono i ticket senza risolvere i problemi. Le misure di costo hanno bisogno di una controparte di qualità o di risultato, che le parti precedenti di questo libro forniscono (si veda l'Argomento 6.5 «Realizzazione del valore e risultati di business»).

Contano anche le classificazioni contabili. Le [spese in conto capitale](https://en.wikipedia.org/wiki/Capital_expenditure) acquistano asset durevoli, e le spese operative coprono la gestione quotidiana. I servizi cloud e in abbonamento spostano la spesa dal primo tipo al secondo, cosa che cambia l'aspetto dei budget senza cambiare quanto costano i servizi. I colleghi della finanza sono responsabili di queste regole, e le metriche qui descritte vanno costruite insieme a loro.

La salvaguardia ricavata dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) vale con forza quando si parla di denaro. Un obiettivo di costo tende a produrre tagli là dove è più facile nascondere il danno, come manutenzione, qualità e tempo di apprendimento. Le misure che seguono sono quindi abbinate a indicatori di salute del servizio e a una dichiarazione delle regole di allocazione (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Principi chiave

- **Rendere esplicite le regole di allocazione e legarle a determinanti.** Le persone accettano numeri che riescono a seguire.
- **Separare costi fissi e variabili.** Le previsioni dipendono dal sapere quale sia quale.
- **Riportare il costo unitario con la sua controparte di qualità.** Più economico è meglio solo se il servizio è ancora buono.
- **Usare intervalli e tendenze, non una falsa precisione.** L'allocazione comporta giudizio.
- **Finanziare team stabili attorno ai servizi dove possibile.** I team stabili imparano e migliorano; quelli temporanei si sciolgono.
- **Condividere i costi con le persone che possono cambiarli.** Visibilità senza influenza è solo attribuzione di colpe.
- **Non classificare mai persone o team in base al costo.** I servizi differiscono, e così i loro vincoli.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Costo per servizio | Costo annuo pieno di un servizio nominato, usando regole di allocazione documentate | costi diretti + costi condivisi allocati al servizio nel periodo | valuta all'anno | Libro mastro, dati dei centri di costo, fatture cloud e di licenze, dati su tempo o attività | Gestione finanziaria dei servizi; gestione del catalogo dei servizi | Costo di un team di prodotto stabile e delle sue piattaforme | Trimestrale |
| Costo unitario | Costo per unità di qualcosa che gli utenti apprezzano, come per utente attivo, per transazione o per richiesta risolta | costo per servizio nel periodo / unità erogate nel periodo | valuta per unità | Costo per servizio e dati di volume | Gestione finanziaria dei servizi; gestione dei livelli di servizio | Costo di erogazione per risultato | Trimestrale |
| Copertura dell'allocazione | Quota della spesa IT attribuita a un servizio nominato o dichiarata come spesa generale condivisa | spesa attribuita ai servizi o dichiarata come spesa generale / spesa IT totale | percentuale | Libro mastro e modello di allocazione | Gestione finanziaria dei servizi | Costo visibile del lavoro di ciascun team | Trimestrale |
| Ripartizione tra esercizio, modifica e miglioramento | Quota di spesa o di capacità destinata a gestire i servizi, a modificarli e a migliorarli | spesa o capacità in ciascuna categoria / totale | percentuale | Etichette del libro mastro, tipi di lavoro dell'issue tracker | Gestione finanziaria dei servizi; miglioramento continuo | Allocazione della capacità per tipo di lavoro | Trimestrale |
| Scostamento della previsione | Differenza tra costo previsto ed effettivo, per servizio | (effettivo meno previsto) / previsto | percentuale | Registro delle previsioni e libro mastro | Gestione finanziaria dei servizi | Accuratezza della previsione | Mensile |
| Tasso di contestazione dello showback | Quota delle voci di showback o di addebito contestate dai responsabili dei servizi e poi modificate | voci modificate dopo contestazione / voci emesse | percentuale | Sistema di showback e registro delle contestazioni | Gestione finanziaria dei servizi | Retrospettiva sui costi condivisi | Trimestrale |
| Quota di finanziamento dei team stabili | Quota della spesa di consegna e operatività finanziata come capacità stabile di un team per un servizio | spesa per team di servizio stabili / spesa totale di consegna e operatività | percentuale | Libro mastro e organigramma | Gestione finanziaria dei servizi; cambiamento organizzativo | Team costruiti attorno ai servizi e a persone motivate | Annuale |

Si definiscano periodo, valuta e tipi di costo per ogni misura e si riportino nel registro delle metriche le regole di allocazione: quali costi sono diretti, quali sono condivisi e quale determinante ripartisce ciascun costo condiviso. Il costo unitario richiede un'unità che utenti e team accettino entrambi, e la definizione dell'unità resta fissa lungo la tendenza. Lo scostamento della previsione si confronta con la previsione com'era all'inizio del periodo, non con una rivista.

## Raccomandazioni

### Costruire il quadro dei costi

**1. Partire dal libro mastro e dall'elenco dei servizi.** Si prenda la spesa IT totale dal libro mastro, si elenchino i servizi dal catalogo e si decida quale quota di ciascun costo appartenga a quale servizio. Si inizi dai costi diretti più semplici: il team che gestisce il servizio, le sue licenze, il suo hosting. I costi condivisi vengono dopo. Un primo quadro approssimativo, condiviso con le persone coinvolte, vale più di uno preciso costruito in privato.

**2. Scegliere determinanti di costo che le persone possano seguire.** Per ogni costo condiviso si scelga un determinante legato a ciò che lo causa davvero: utenti per una piattaforma di collaborazione, archiviazione per una piattaforma di dati, richieste per un gateway, dispositivi per la gestione degli endpoint. Si spieghi la regola in una frase. I determinanti che nessuno può verificare invitano alle discussioni, e quelli che nessuno può influenzare rendono inutile lo showback.

**3. Separare costi fissi e variabili.** Per ciascun servizio si indichi quali costi si muovono con il volume e quali no. Un servizio fatto soprattutto di costi fissi ha un costo unitario che diminuisce con la crescita, uno fatto soprattutto di costi variabili no. Questa separazione è la base di qualsiasi previsione e di qualsiasi conversazione sul ridimensionamento.

**4. Mostrare intervalli dove l'allocazione comporta giudizio.** Se due regole di allocazione ragionevoli danno risultati diversi del 20 per cento, si mostrino entrambe o si mostri l'intervallo. Un unico numero preciso ricavato da una regola arbitraria avvia scontri che i dati non possono risolvere.

### Misurare per unità, con la qualità accanto

**5. Scegliere un'unità che rifletta il valore.** Costo per utente attivo, per transazione completata, per richiesta risolta o per distribuzione possono essere tutti utili. Si scelga l'unità collegata alla finalità del servizio, la si concordi con il responsabile del servizio e la si mantenga stabile. Il costo per ticket è un'unità rischiosa, perché diminuisce quando i ticket vengono chiusi in anticipo e aumenta quando si prevengono i ticket con un buon self-service.

**6. Abbinare ogni costo unitario a una misura di qualità.** Si mostri il costo unitario accanto a disponibilità, soddisfazione o tasso di riapertura. Un costo unitario che scende mentre scende la qualità è un trasferimento di costo agli utenti. Un costo unitario che resta stabile mentre la qualità sale è un guadagno. Li si presenti insieme o per niente (si veda l'Argomento 6.1 «Metriche di soddisfazione del cliente»).

**7. Seguire la tendenza, non solo il livello.** Il costo unitario nel tempo, con note su che cosa è cambiato, racconta una storia che un solo trimestre non può raccontare. Si segnino sul grafico le modifiche delle regole di allocazione o delle unità, in modo che le tendenze non siano lette male. Si confronti un servizio con la propria storia prima di confrontarlo con altri.

### Condividere il costo con chi può cambiarlo

**8. Usare lo showback prima dell'addebito.** Lo showback riferisce i costi ai responsabili dei servizi senza fatturarli, e l'addebito (chargeback) trasferisce il costo ai loro budget. Si inizi con lo showback, che costruisce comprensione e fiducia, e si passi all'addebito solo dove cambia le decisioni e le regole sono accettate. Entrambi dipendono da regole che i responsabili contribuiscono a plasmare.

**9. Lasciare che i responsabili contestino i numeri.** Un processo di contestazione è segno di salute, purché sia rapido e i suoi esiti siano registrati. Si riveda il tasso di contestazione: un tasso alto mostra regole di cui nessuno si fida, e uno pari a zero può mostrare che nessuno legge i rapporti. Si corregga la regola, non solo la voce.

**10. Rivedere il costo con l'intero team del servizio.** Si includano nella revisione periodica dei costi ingegneri e operatori oltre ai dirigenti. Chi gestisce un servizio spesso sa dove si nasconde lo spreco: ambienti inattivi, risorse sovradimensionate, strumenti duplicati. Si trattino i loro rilievi come miglioramenti da condividere e non come critiche.

### Finanziare per stabilità e apprendimento

**11. Preferire team stabili finanziati attorno ai servizi.** Dove possibile, si finanzi un team stabile perché sia responsabile di un servizio nel tempo, anziché mettere insieme un team di progetto e scioglierlo. I team stabili accumulano conoscenza, costruiscono rapporti migliori con gli utenti e sostengono il costo delle decisioni sbagliate. Ciò riflette l'obiettivo agile di costruire attorno a persone motivate e l'attenzione di ITIL al ciclo di vita del servizio. Il cambiamento nel finanziamento è una decisione organizzativa significativa, perciò si coinvolgano presto finanza e dirigenti. Il libro di Mik Kersten *Project to Product* tratta questo passaggio.

**12. Riservare capacità al miglioramento.** I costi che riducono i costi futuri, come automazione, correzioni di affidabilità e rimozione di strumenti duplicati, hanno bisogno di finanziamenti protetti, altrimenti perdono ogni volta contro il lavoro sulle funzionalità. Si segua la quota di miglioramento nella ripartizione tra esercizio, modifica e miglioramento e si osservino i ritorni che produce (si veda l'Argomento 4.6 «Debito tecnico ed errori noti»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Costo per servizio | Spostare costi su altri servizi tramite la regola di allocazione; lasciare non allocati i costi sfavorevoli | Copertura dell'allocazione; regole pubblicate e riviste dai responsabili; confrontare i totali con il libro mastro |
| Costo unitario | Gonfiare il denominatore con unità di basso valore; tagliare la qualità per tagliare il costo; cambiare l'unità | Misura di qualità abbinata; definizione dell'unità fissa; verifiche sui risultati |
| Copertura dell'allocazione | Dichiarare grandi importi come spesa generale per evitare l'attribuzione | Quota di spesa generale riportata; revisione di ciò che viene dichiarato spesa generale e perché |
| Ripartizione tra esercizio, modifica e miglioramento | Rietichettare il lavoro di esercizio come miglioramento o modifica; etichettare alla fine del periodo | Etichettare all'accettazione; campionare gli elementi per tipo; confrontare con i dati di incidenti e richieste |
| Scostamento della previsione | Gonfiare le previsioni; rivedere la previsione a periodo avanzato | Previsione registrata all'inizio; confrontare nel tempo gli intervalli di previsione con i consuntivi |
| Tasso di contestazione dello showback | Scoraggiare le contestazioni; modificare le voci senza cambiare la regola | Rivedere contestazioni ed esiti; verificare se le regole sono cambiate dopo contestazioni ripetute |
| Quota di finanziamento dei team stabili | Rinominare i progetti come team stabili senza cambiare finanziamento o responsabilità | Verificare nel tempo stabilità e responsabilità del team; misure di salute del servizio |

Una lettura sana è un quadro dei costi che i responsabili dei servizi riconoscono, costi unitari che si muovono per cause spiegate mentre la qualità tiene, errori di previsione che si riducono e lavoro di miglioramento che compare nei numeri.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Finanziamento a progetto | Ambito e termine chiari | I team si sciolgono; si perde conoscenza; il servizio viene passato ad altri |
| Finanziamento di team stabili | Apprendimento, responsabilità, costo stabile | Richiede fiducia e un processo di pianificazione maturo; l'ambito può derivare |
| Showback | Costruisce comprensione con poco attrito | Può essere ignorato se nessuno ne risponde |
| Addebito (chargeback) | Crea responsabilità e segnali di prezzo | Contestazioni; incentivi a evitare i servizi condivisi |
| Regole di allocazione semplici | Facili da spiegare | Possono essere grossolane |
| Allocazione basata sulle attività | Più accurata | Costosa da mantenere; falsa precisione |
| Costo per unità | Collega il costo al valore | Sensibile alla scelta dell'unità e al volume |
| Solo costo totale | Semplice | Nasconde tendenze ed efficienza |

La risposta in prosa è partire da regole semplici e dallo showback, aggiungere precisione dove le decisioni ne dipendono e orientarsi verso il finanziamento di team stabili man mano che crescono fiducia e maturità della pianificazione. Si tenga una misura di qualità accanto a ogni misura di costo.

## Domande da discutere con il team

**1. Quanto costa all'anno il nostro servizio principale, e chi sarebbe d'accordo con il numero?**
Si chieda alla finanza e al responsabile del servizio di produrre stime indipendenti. Le si confronti. Il facilitatore dovrebbe annotare dove differiscono e perché: regole di allocazione, ambito o costi mancanti. Si concordi un'unica regola documentata per il prossimo trimestre.

**2. Qual è l'unità che i nostri utenti riconoscerebbero, e quanto costa?**
Si elenchino le possibili unità per il servizio e se ne scelga una. Se ne calcoli il costo e si discuta di che cosa lo farebbe salire o scendere. Ci si chieda che cosa l'unità nasconde. Si aggiunga una misura di qualità da affiancarle.

**3. Quali dei nostri costi condivisi sono ripartiti con una regola che nessuno sa spiegare?**
Si elenchino i costi condivisi e i loro determinanti. Per ciascuno ci si chieda se il determinante sia collegato a ciò che causa il costo. Se ne sostituisca uno che non lo è. Si discuta di chi può influenzare il determinante, poiché i dati di costo senza influenza sono solo colpa.

**4. Quanta della nostra capacità va a gestire, modificare e migliorare il servizio?**
Si riveda un trimestre di lavoro concluso per tipo, come nell'argomento sulla pianificazione (si veda l'Argomento 2.5 «Metriche di previsione e pianificazione della consegna»). Si confronti con ciò che pensano i dirigenti. Si decida quale dovrebbe essere la quota di miglioramento e che cosa la proteggerebbe.

**5. Che cosa cambierebbe se finanziassimo un team stabile per questo servizio?**
Si immaginino il finanziamento, la responsabilità e le misure. Ci si chieda quali rischi e benefici vedrebbero finanza, team e utenti. Si individui un passo verso questo obiettivo, come un elenco stabile dei componenti del team e una vista condivisa del budget del servizio.

**6. Quando un valore di costo ha causato per l'ultima volta una discussione, e che cosa abbiamo imparato?**
Si ricordi una contestazione su uno showback o su un budget. Riguardava il numero o la regola? Si discuta di come una regola più chiara o un processo di contestazione migliore avrebbero aiutato.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna vedono il costo come il prezzo del proprio tempo, delle proprie piattaforme e dei propri strumenti. Dovrebbero conoscere il costo e il costo unitario del proprio servizio, individuare presto gli sprechi e usare i numeri per sostenere il lavoro di miglioramento e il finanziamento stabile. Dovrebbero evitare di ottimizzare il numero tagliando la qualità e contestare le regole di allocazione che non riescono a seguire.

### Team di servizio e operations

I team di operazioni sostengono il costo di gestione dei servizi e spesso detengono le piattaforme condivise. Dovrebbero pubblicare come sono guidati i costi condivisi, rispondere alle domande sullo showback e condividere, per esperienza, idee di risparmio. Dovrebbero attendersi pressioni per ridurre i costi di esercizio e mostrare il lato della qualità e del rischio di qualsiasi taglio.

### Leadership e governance

I dirigenti chiedono di costo e valore e stabiliscono il modello di finanziamento. Dovrebbero chiedere costi unitari con controparti di qualità, sostenere il finanziamento di team stabili dove è adatto ed evitare di classificare i team per costo. La governance dovrebbe attendersi che le regole di allocazione siano documentate, riviste e applicate in modo coerente, e dovrebbe guardare alla quota di miglioramento.

### Clienti e utenti

Gli utenti che pagano tramite addebito vogliono capire la fattura e poterla influenzare. Gli altri vedono il costo nella qualità e nell'ampiezza dei servizi offerti. Costi unitari chiari e voce in capitolo nel compromesso tra prezzo e servizio rendono più sano il rapporto, e il loro riscontro fa parte della controparte di qualità di ogni costo unitario.

## In pratica: un esempio di ITIL agile

Il reparto IT centrale di un'università di medie dimensioni fornisce circa 25 servizi a 18.000 studenti e dipendenti. I numeri che seguono sono illustrativi.

L'ufficio finanziario vuole sapere perché il budget dell'IT sia cresciuto più in fretta delle iscrizioni. Il partner finanziario dell'IT costruisce un quadro dei costi insieme ai responsabili dei servizi. Della spesa IT totale, il 72 per cento è diretto a servizi nominati, il 18 per cento è relativo a piattaforme condivise (rete, identità, strumenti di sicurezza) allocate tramite determinanti e il 10 per cento è dichiarato spesa generale. La copertura dell'allocazione è quindi del 90 per cento. La piattaforma di apprendimento costa l'equivalente di 41 dollari statunitensi per utente attivo all'anno, rispetto ai 36 precedenti, mentre soddisfazione e disponibilità sono stabili. Il service desk mostra un costo per richiesta risolta diminuito del 12 per cento in due anni. Il responsabile del servizio fa notare che il calo ha coinciso con un aumento dei ticket riaperti dal 4 al 9 per cento, e la controparte di qualità mostra che il risparmio è in parte un trasferimento di sforzo agli utenti.

Il team apporta quattro modifiche. Pubblica le regole di allocazione in una pagina, con i determinanti per ciascun costo condiviso e la data dell'ultima revisione. Sostituisce il costo per richiesta con il costo per richiesta risolta al primo contatto, mostrato accanto al tasso di riapertura. Sposta la piattaforma di apprendimento e il servizio di identità al finanziamento come team stabili con un organico fisso. Riserva il 15 per cento della capacità al lavoro di miglioramento per ciascuno dei due servizi più grandi e segue che cosa il lavoro restituisce.

Un anno dopo, il costo unitario della piattaforma di apprendimento è di 38 dollari statunitensi grazie alla crescita dell'uso, il tasso di riapertura è sceso al 5 per cento e lo scostamento della previsione per i due servizi con team stabili è entro il 4 per cento, contro l'11 per cento del lavoro finanziato a progetto. Il tasso di contestazione dello showback è sceso dal 22 all'8 per cento dopo la modifica di due regole. L'ufficio finanziario chiede un obiettivo annuale di riduzione del costo unitario del 5 per cento per ogni servizio. Il partner finanziario dell'IT propone obiettivi solo dove un servizio ha una chiara leva di efficienza, mostrati con la controparte di qualità, e spiega che un obiettivo generalizzato premierebbe il taglio della manutenzione. La decisione viene registrata, con una revisione annuale delle regole.

## Lente di settore

**Startup.** Il costo è per lo più cloud, strumenti e stipendi. Si seguano fin dall'inizio per servizio la spesa principale di cloud e strumenti, si applichino i tag alle risorse e si calcoli presto il costo per cliente attivo. Si resista alle allocazioni elaborate, poiché il team è piccolo.

**Piccola impresa.** Una manciata di fornitori e una o due persone costituiscono la maggior parte dei costi. Si tenga un semplice quadro annuale, il costo per utente per gli strumenti principali e una vista di ciò che viene pagato e non usato. Si chiedano ai fornitori fatture dettagliate.

**Grande impresa.** La scala porta piattaforme condivise e molte unità di business. Si usino un modello di allocazione documentato con determinanti, un processo di contestazione e un partner finanziario inserito nell'IT. Si diffidi di un addebito che scoraggia l'uso di servizi condivisi che giovano a tutti.

**Pubblica amministrazione e settore pubblico.** I budget sono annuali e stanziati, con regole sulla spesa in conto capitale e operativa, e può essere richiesta la trasparenza dei costi. Si allinei la determinazione dei costi dei servizi alle regole della finanza pubblica, si documentino i metodi di allocazione per gli audit e si consideri il finanziamento pluriennale dei team di servizio stabili dove la legge lo consente. Si riportino i costi unitari insieme alle misure di risultato (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi sono lo sforzo di costruire il modello di allocazione, il tempo di finanza e responsabili dei servizi per concordare le regole e il lavoro ordinario di rendicontazione mensile e gestione delle contestazioni. La maggior parte delle organizzazioni dispone già del libro mastro e dei dati di fatturazione cloud. Un piccolo modello in un foglio di calcolo può avviare il lavoro, e gli strumenti vengono dopo.

I ritorni sono decisioni migliori e meno discussioni. I team che vedono i propri costi trovano sprechi: ambienti inattivi, licenze inutilizzate e strumenti duplicati. I dirigenti possono confrontare le opzioni conoscendo i determinanti di costo, pianificare la crescita con costi fissi e variabili separati e finanziare il miglioramento con evidenze del suo ritorno. Si costruisca il caso a partire dai propri numeri: lo spreco trovato nella prima revisione, il tempo speso nelle contestazioni di budget e lo scostamento della previsione prima e dopo. Si evitino affermazioni esterne sulla spesa IT media come percentuale del fatturato, a meno che se ne possano ricondurre fonte e metodo, poiché le definizioni variano molto. L'ultimo argomento di questa parte raccoglie in un unico luogo il caso finanziario (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Ripartire il costo condiviso in parti uguali.** Punisce i piccoli utilizzatori e nasconde i veri determinanti. Si usino determinanti che riflettano il consumo.
- **Il costo per ticket come obiettivo.** Premia la chiusura anticipata dei ticket. Si usi il costo per richiesta risolta con una controparte di qualità.
- **Precisione senza fiducia.** Un bel modello a cui i responsabili non credono non vale nulla. Si costruiscano le regole insieme a loro.
- **Prima l'addebito.** Avvia scontri prima che vi sia comprensione. Si inizi con lo showback.
- **Tagliare ciò che è difficile da vedere.** Manutenzione, apprendimento e lavoro sull'affidabilità vengono tagliati per primi e costano di più in seguito. Si protegga la capacità di miglioramento.
- **Confrontare i team per costo.** I servizi differiscono per vincoli e rischio. Si confronti ciascuno con la propria storia.
- **Cambiare insieme le regole e la tendenza.** Si segnino sui grafici le modifiche alle regole e, dove possibile, si ricostruisca lo storico.
- **Trattare il costo come proprietà della finanza.** Chi gestisce il servizio sa da dove viene il costo. Lo si includa.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Quadro dei costi | Budget solo per reparto | Costo per servizio per alcuni servizi, allocazione approssimativa | Regole di allocazione documentate con determinanti; copertura monitorata | Costi unitari con controparti di qualità; separazione tra fissi e variabili | Costi condivisi in modo trasparente con i partner di business; determinanti influenzati congiuntamente |
| Uso del costo | Tagli di costo in percentuale | Showback ad alcuni responsabili | Showback per tutti i servizi; processo di contestazione | Scostamento della previsione e tendenze del costo unitario guidano le decisioni | Costo, qualità e valore bilanciati apertamente nell'intero portafoglio |
| Modello di finanziamento | Budget annuali per progetto | Alcuni team stabili | Team stabili per i servizi chiave | Il finanziamento segue i risultati del servizio e l'apprendimento | Finanziamento flessibile tra i servizi con investimento condiviso nelle piattaforme |

## Checklist

- [ ] La spesa IT totale è attribuita ai servizi o dichiarata come spesa generale, con la copertura monitorata.
- [ ] Le regole di allocazione e i determinanti sono scritti e rivisti con i responsabili dei servizi.
- [ ] I costi fissi e variabili sono separati per ciascun servizio principale.
- [ ] I costi unitari usano unità concordate e stabili e affiancano misure di qualità.
- [ ] Le previsioni sono registrate all'inizio del periodo e confrontate con i consuntivi.
- [ ] Lo showback è disponibile per ogni responsabile di servizio, con un processo di contestazione.
- [ ] Sono riportati spesa o capacità per esercizio, modifica e miglioramento.
- [ ] Una quota di capacità è protetta per il miglioramento.
- [ ] Le modifiche a regole e unità sono segnate sui grafici di tendenza.
- [ ] Nessun team o persona è classificato in base al costo.

## Prompt IA

**Proporre determinanti di costo per i servizi condivisi.**

```text
I nostri servizi condivisi e i loro costi annui sono: [elenco]. I nostri
servizi che li usano sono: [elenco], con dati d'uso disponibili per: [elenco di
determinanti come utenti, richieste, archiviazione]. Proponi un determinante di
costo per ciascun servizio condiviso, spiega come verificare che il
determinante rifletta ciò che causa il costo e descrivi i limiti. Non inventare
costi. Elenca le tue ipotesi e che cosa dovrebbe confermare la finanza.
```

**Progettare un costo unitario e la sua controparte di qualità.**

```text
Per il servizio [nome] in [tipo di organizzazione], suggerisci tre possibili
unità per il costo unitario (per esempio per utente attivo, per transazione,
per richiesta risolta) e, per ciascuna, una misura di qualità da mostrare
accanto e un modo in cui la coppia potrebbe essere manipolata. Raccomanda una
unità motivando la scelta. Non inventare cifre. Elenca le tue ipotesi e le
domande per il responsabile del servizio.
```

**Preparare una revisione dello showback.**

```text
Redigi un ordine del giorno e una sintesi di una pagina per una revisione
trimestrale dello showback con il responsabile di [servizio]. Dati: costo di
questo trimestre [cifre], trimestre precedente [cifre], volume [cifre], misure
di qualità [cifre] e contestazioni [elenco]. Includi domande che aiutino il
responsabile a trovare sprechi e a contestare l'allocazione. Usa un linguaggio
semplice. Elenca le tue ipotesi e segna ogni affermazione che richiede una
verifica.
```

**Pianificare il passaggio al finanziamento di team stabili.**

```text
Attualmente finanziamo il lavoro come progetti: [descrivi]. Stiamo valutando di
finanziare team stabili per [servizi]. Delinea i passaggi, le informazioni che
finanza e dirigenti vorranno, i rischi e le misure per seguire se il
cambiamento aiuta (per esempio scostamento della previsione, stabilità del
team, quota di miglioramento e salute del servizio). Non dichiarare risultati
di altre organizzazioni. Elenca le tue ipotesi e le decisioni che richiedono il
contributo dei dirigenti.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di costo o di economia unitaria.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica di costo indichi la propria regola di allocazione, il vettore di manipolazione e la controparte di qualità.

## Punti chiave

- Si attribuisca il costo ai servizi con determinanti che le persone possano seguire e si mostrino le regole.
- Si separino i costi fissi da quelli variabili e si abbini ogni costo unitario a una misura di qualità.
- Si inizi con lo showback e un processo di contestazione, e si aggiunga l'addebito solo se cambia le decisioni.
- Si finanzino team stabili attorno ai servizi dove possibile e si protegga la capacità di miglioramento.
- Si riportino intervalli e tendenze e si segnino sui grafici le modifiche delle regole.
- Non si classifichino mai persone o team in base al costo.

## Riferimenti e letture di approfondimento

1. Kaplan, R. S., and Anderson, S. R., "Time-Driven Activity-Based Costing," *Harvard Business Review*, 82(11), 2004.
2. Kaplan, R. S., and Cooper, R., *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*, Harvard Business School Press, 1998.
3. Kersten, M., *Project to Product*, IT Revolution, 2018.
4. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Financial Management*, TSO, 2020.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Cost accounting](https://en.wikipedia.org/wiki/Cost_accounting).
8. Wikipedia, [Cost allocation](https://en.wikipedia.org/wiki/Cost_allocation).
9. Wikipedia, [Cost driver](https://en.wikipedia.org/wiki/Cost_driver).
10. Wikipedia, [Activity-based costing](https://en.wikipedia.org/wiki/Activity-based_costing).
11. Wikipedia, [Fixed cost](https://en.wikipedia.org/wiki/Fixed_cost).
12. Wikipedia, [Variable cost](https://en.wikipedia.org/wiki/Variable_cost).
13. Wikipedia, [Unit cost](https://en.wikipedia.org/wiki/Unit_cost).
14. Wikipedia, [Economies of scale](https://en.wikipedia.org/wiki/Economies_of_scale).
15. Wikipedia, [Capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
