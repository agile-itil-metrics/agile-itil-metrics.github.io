# Metriche di FinOps e costi del cloud

**La spesa cloud viene decisa ogni giorno dagli ingegneri: si diano alle persone che costruiscono ed eseguono i servizi i dati sui costi, il contesto e l'autorità di agire, e si misurino sprechi, allocazione e costo unitario con la stessa cura che si dedica all'affidabilità.**

## Panoramica e motivazione

In un data center, la spesa viene decisa tramite ordini di acquisto e arriva in pochi grandi scalini. Nel cloud, uno sviluppatore può impegnare l'organizzazione in un addebito ricorrente con poche righe di configurazione, e un ambiente di test dimenticato può costare denaro per mesi. Il [cloud computing](https://en.wikipedia.org/wiki/Cloud_computing) offre accesso on demand a risorse di calcolo, e il modello [pay-as-you-go](https://en.wikipedia.org/wiki/Pay_as_you_go) che lo accompagna fa sì che la fattura segua l'utilizzo. È potente e rischioso. La stessa flessibilità che permette a un team di scalare in pochi minuti permette ai costi di crescere più in fretta di quanto nessuno se ne accorga.

FinOps, contrazione di finanza e operatività (finance e operations), è una pratica e una cultura per gestire i costi del cloud. La FinOps Foundation la descrive come un quadro operativo in cui i team di ingegneria, finanza, approvvigionamenti e business collaborano a decisioni di spesa basate sui dati. L'idea centrale è che le persone che usano le risorse cloud dovrebbero vedere e possedere i propri costi, mentre la finanza fornisce struttura, previsioni e impegni. Ciò corrisponde agli obiettivi agile di collaborazione continua tra le parti interessate e di team responsabili dei propri servizi, e corrisponde all'attenzione di ITIL per la gestione finanziaria dei servizi. Questo argomento tratta le misure che rendono concreta tale pratica. Si basa sulle idee generali di determinazione dei costi dell'argomento precedente (si veda l'Argomento 7.5 «Costo del servizio ed economia unitaria»).

Il costo del cloud ha caratteristiche che richiedono misure proprie.

- **Elasticità.** Lo [scaling automatico](https://en.wikipedia.org/wiki/Autoscaling) adegua le risorse alla domanda, il che rende il costo variabile e talvolta sorprendente. Il [calcolo serverless](https://en.wikipedia.org/wiki/Serverless_computing) addebita per esecuzione e sposta l'attenzione dai server alle richieste.
- **Molte piccole decisioni.** Ogni scelta di dimensione dell'istanza, livello di archiviazione, regione e architettura cambia il costo. La spesa è distribuita su centinaia di decisioni prese da molte persone, ed è difficile da vedere senza tag e buona reportistica.
- **Modelli di prezzo.** I prezzi on demand sono flessibili e i più alti. Gli impegni in cambio di uno [sconto sul volume](https://en.wikipedia.org/wiki/Volume_discount), come capacità riservata o piani di risparmio, abbassano il prezzo unitario in cambio di una promessa di utilizzo. La capacità spot o prelazionabile è economica e può essere ripresa. Ogni modello ha un rischio, e la miscela giusta dipende da quanto sia prevedibile il carico di lavoro. I termini esatti differiscono tra i fornitori e cambiano spesso, perciò si verifichi la documentazione corrente del fornitore prima di fare affidamento su qualsiasi dettaglio.
- **Costi condivisi e privi di tag.** Le risorse senza un tag di responsabile o di finalità non possono essere attribuite. Le piattaforme condivise ripartiscono il costo tra team che le consumano in modo diverso.
- **Costo ambientale.** I carichi di lavoro cloud consumano energia e causano emissioni, e l'[impronta di carbonio](https://en.wikipedia.org/wiki/Carbon_footprint) di un carico di lavoro è sempre più spesso un requisito di rendicontazione. I metodi per stimarla sono ancora in evoluzione, e i numeri dovrebbero accompagnarsi al metodo.

Le misure di costo nel cloud si prestano a scorciatoie. Ridurre la spesa spegnendo il monitoraggio o rimpicciolendo le risorse fino a far cadere il servizio mostra una fattura più bassa e un servizio peggiore. Vale la salvaguardia ricavata dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): ogni misura di costo qui descritta affianca una misura di affidabilità o di qualità, e nessun team è classificato in base alla propria fattura (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Principi chiave

- **Il costo è una metrica di ingegneria.** I team che costruiscono ed eseguono un servizio ne vedono e ne possiedono il costo.
- **Allocare ai responsabili.** Ogni dollaro dovrebbe corrispondere a un team o a un bacino condiviso dichiarato.
- **Abbinare costo, qualità e affidabilità.** I risparmi che rompono il servizio non sono risparmi.
- **Ottimizzare in continuazione, a piccoli passi.** Si riveda regolarmente lo spreco e si agisca come parte del lavoro normale.
- **Prevedere con intervalli.** La domanda variabile rende fragili le previsioni a numero singolo.
- **Collaborare tra le funzioni.** Ingegneria, finanza, approvvigionamenti e business decidono insieme.
- **Non classificare i team in base alla fattura.** I servizi differiscono, e la crescita non è spreco.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Copertura dell'allocazione | Quota della spesa cloud attribuita a un team responsabile o a un bacino condiviso dichiarato | spesa con un responsabile valido e un tag di servizio, o in un bacino condiviso dichiarato / spesa cloud totale | percentuale | Esportazione della fatturazione cloud, policy dei tag | Gestione finanziaria dei servizi; gestione degli asset IT | Responsabilità del team su ciò che gestisce | Settimanale |
| Costo unitario del cloud | Costo delle risorse cloud per unità di qualcosa che gli utenti apprezzano | costo cloud per il servizio nel periodo / unità erogate nel periodo | valuta per unità | Dati di fatturazione collegati ai volumi del servizio | Gestione finanziaria dei servizi; gestione dei livelli di servizio | Costo di erogazione per risultato | Mensile |
| Tasso di spreco | Quota di spesa su risorse inattive o chiaramente sovradimensionate | spesa su risorse inattive o sovradimensionate, secondo regole concordate / spesa totale sulle risorse nell'ambito | percentuale | Metriche di utilizzo e fatturazione | Gestione di capacità e prestazioni; gestione finanziaria | Riduzione degli sprechi nella toolchain | Settimanale |
| Copertura degli impegni | Quota dell'uso stabile idoneo coperta da impegni scontati | uso idoneo coperto da impegni / uso idoneo | percentuale | Rapporti di fatturazione e sugli impegni | Gestione finanziaria dei servizi; gestione dei fornitori | Pianificazione per una domanda prevedibile | Mensile |
| Utilizzo degli impegni | Quota degli impegni acquistati che è stata utilizzata | ore di impegno utilizzate / ore di impegno acquistate | percentuale | Rapporti sugli impegni | Gestione finanziaria dei servizi; gestione dei fornitori | Valore da un investimento pianificato | Mensile |
| Scostamento della previsione | Differenza tra spesa cloud prevista ed effettiva, per team e in totale | (effettivo meno previsto) / previsto | percentuale | Registro delle previsioni e dati di fatturazione | Gestione finanziaria dei servizi | Accuratezza della previsione | Mensile |
| Tempo di presa in carico delle anomalie | Tempo dall'avviso di un'anomalia di costo a una decisione registrata dal responsabile | mediana e 85º percentile delle ore dall'avviso alla risposta del responsabile | ore | Avvisi di anomalia e registrazioni dei ticket | Monitoraggio e gestione degli eventi; gestione degli incidenti | Reattività a un segnale di produzione | Mensile |

Si definiscano e si registrino l'ambito delle risorse, le regole dei tag e che cosa conta come inattivo o sovradimensionato. La copertura degli impegni si calcola solo rispetto all'uso stabile di base, non rispetto ai picchi. Il costo unitario usa un'unità concordata con il responsabile del servizio e fissa lungo la tendenza. I dati di costo dovrebbero dire se includono crediti, sconti, imposte e costi di supporto, e quali valuta e tasso di cambio si applicano.

## Raccomandazioni

### Rendere il costo visibile e posseduto

**1. Imporre un piccolo insieme obbligatorio di tag.** Si richieda che ogni risorsa porti un tag di responsabile, di servizio e di ambiente, imposto da una policy alla creazione, non da una pulizia successiva. La copertura dell'allocazione misura quanto bene funziona. Le risorse prive di tag possono essere bloccate o segnalate entro un giorno al titolare dell'account. Si mantenga ridotto l'insieme dei tag, perché le persone lo rispettino.

**2. Dare ai team una propria vista dei costi.** Si fornisca a ciascun team una vista giornaliera o settimanale della propria spesa per servizio e ambiente, con tendenze e anomalie. Le persone rispondono ai dati che possono vedere e capire. Un rapporto che arriva mensilmente e va solo alla finanza cambia poco.

**3. Definire i bacini di costo condivisi e i loro determinanti.** Le piattaforme condivise, la rete e i costi di supporto richiedono una regola su come ripartirli (si veda l'Argomento 7.5 «Costo del servizio ed economia unitaria»). Si pubblichi la regola, la si riveda con i team e si mantenga piccolo il bacino. Una regola che le persone sanno seguire guadagna più fiducia di una equa che nessuno comprende.

**4. Tenere una breve conversazione regolare sui costi.** Si riuniscano ingegneria, finanza e responsabili di prodotto a una cadenza costante, settimanale o quindicinale per i grandi spenditori e mensile per gli altri, per trenta minuti. Si rivedano la tendenza, le anomalie e il backlog di ottimizzazione. È collaborazione continua in pratica, e mantiene il costo all'ordine del giorno senza un processo pesante.

### Misurare il valore, non solo la spesa

**5. Esprimere il costo per unità.** La spesa cloud totale cresce con il successo. Ciò che conta è il costo per cliente attivo, per transazione o per build. Si scelga un'unità significativa per il servizio, la si segua nel tempo e si annotino le variazioni. Un costo unitario in calo con una spesa totale in aumento è uno schema sano, mentre un costo unitario in aumento con un utilizzo stabile è uno stimolo a indagare.

**6. Mostrare affidabilità e qualità accanto al costo.** Si mostri il costo insieme a disponibilità, latenza e tasso di errore per lo stesso servizio (si veda l'Argomento 5.2 «SLI, SLO e budget di errore»). I risparmi che fanno salire i tassi di errore sono un trasferimento di costo agli utenti. Un approccio basato sul budget di errore può rendere esplicito il compromesso: si spenda meno quando il servizio è molto migliore del necessario e si investa quando non lo è.

**7. Seguire lo spreco con regole esplicite.** Si definiscano inattivo (per esempio, nessun uso significativo in un periodo) e sovradimensionato (per esempio, utilizzo costantemente molto inferiore alla capacità predisposta) e si riporti la spesa per ciascuno. Le regole richiedono attenzione: un sistema in standby per la resilienza appare inattivo per progetto, e va escluso ed etichettato. Si riesaminino le regole quando producono falsi positivi.

### Agire su ciò che si trova

**8. Ridimensionare e ripulire nel lavoro normale.** Si faccia della rimozione degli sprechi una voce permanente nel backlog del team, affrontata a piccoli passi come parte del miglioramento continuo. Si programmi l'arresto degli ambienti non di produzione fuori dall'orario di lavoro, si elimini l'archiviazione non collegata, si scelgano livelli di archiviazione appropriati e si riveda per prime la voce più grande. Piccole modifiche regolari superano rare pulizie eroiche, che tendono a essere dimenticate quando aumenta la pressione.

**9. Abbinare il modello di prezzo al carico di lavoro.** Si usino gli impegni per l'uso stabile di base, l'on demand per il carico variabile e la capacità interrompibile per il lavoro che tollera le interruzioni. Ci si impegni in modo incrementale, a piccole quantità, e si seguano sia la copertura sia l'utilizzo. Un impegno eccessivo spreca denaro e uno insufficiente paga un sovrapprezzo. Si coinvolgano finanza e approvvigionamenti e si ricontrollino i termini con il fornitore, poiché cambiano.

**10. Rilevare le anomalie e rispondere.** Si usi il rilevamento delle anomalie sulla spesa, che segnala variazioni improvvise rispetto a una baseline. Gli strumenti di [rilevamento delle anomalie](https://en.wikipedia.org/wiki/Anomaly_detection) vanno da semplici soglie a modelli statistici. Si avvisi il team responsabile e si misuri quanto tempo occorre per prendere in carico e decidere. Un processo mal configurato può accumulare una fattura elevata in poche ore, perciò la rapidità conta (si veda l'Argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi»).

### Prevedere e pianificare

**11. Prevedere con intervalli e determinanti.** Si costruiscano le previsioni a partire dai determinanti della domanda, come utenti o transazioni attesi, insieme al costo unitario. Si usi l'[analisi degli scostamenti](https://en.wikipedia.org/wiki/Variance_analysis) per spiegare le differenze tra previsione e consuntivo, e si separino quelle dovute a volume, prezzo e mix. Si indichi un intervallo e si dichiarino le ipotesi. Lo scostamento della previsione dovrebbe ridursi man mano che il modello migliora.

**12. Includere la sostenibilità nel quadro.** Si stimino le emissioni associate ai carichi di lavoro principali usando un metodo documentato, come i rapporti dei fornitori o metodologie pubblicate, e si dichiarino i limiti della stima. Si confrontino le scelte di regione, tipo di istanza e programmazione sia in termini di costo sia di emissioni. Si tratti le emissioni per unità come una controparte del costo per unità e non si dichiari una precisione che il metodo non può sostenere.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Copertura dell'allocazione | Applicare tag a un responsabile generico; dichiarare grandi importi come condivisi | Quota di spesa di cui sono responsabili i generici; dimensione e revisione del bacino condiviso; campione di conferma dei responsabili |
| Costo unitario del cloud | Scegliere un'unità che cresce a basso costo; tagliare l'affidabilità per tagliare il costo | Definizione dell'unità fissa; controparti di affidabilità e qualità |
| Tasso di spreco | Restringere la definizione di inattivo; spostare lo spreco in un account fuori ambito | Regole nel registro; scansionare tutti gli account; campionare le risorse escluse dalle regole |
| Copertura degli impegni | Impegnarsi su baseline gonfiate per inseguire una percentuale alta | Utilizzo degli impegni; verificare la baseline rispetto allo storico d'uso |
| Utilizzo degli impegni | Aggiungere uso idoneo non necessario per riempire gli impegni | Confrontare con la crescita della domanda reale; costo unitario |
| Scostamento della previsione | Gonfiare le previsioni; rivederle a periodo avanzato | Registrare la previsione all'inizio; seguire ampiezza dell'intervallo e tasso di centramento |
| Tempo di presa in carico delle anomalie | Prendere in carico gli avvisi senza guardarli; chiudere automaticamente gli avvisi | Registrare una decisione e un esito; campionare gli avvisi per la qualità della risposta |

Una lettura sana è quasi tutta la spesa posseduta e visibile, un costo unitario che si muove per ragioni spiegate, sprechi che si riducono senza interruzioni, impegni che vengono usati e previsioni il cui errore si restringe nel tempo.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Un team cloud centrale controlla la spesa | Coerenza e potere negoziale | Lento; lontano dalle decisioni di ingegneria |
| I team possiedono il proprio costo cloud | Decisioni rapide e informate | Richiede dati, formazione e salvaguardie |
| Solo on demand | Flessibile | Prezzo unitario più alto |
| Impegni consistenti | Prezzo unitario più basso | Lock-in e spreco se la domanda cala |
| Limiti di budget rigidi | Previene gli sforamenti | Possono causare interruzioni o bloccare lavoro legittimo |
| Avvisi e revisione | Preserva la velocità | Dipende da una risposta tempestiva |
| Ridimensionamento aggressivo | Fa risparmiare | Rischio per le prestazioni se esagerato |
| Ridimensionamento misurato con SLO | Equilibrato | Richiede dati di affidabilità e attenzione |

La risposta in prosa è dare ai team dati e responsabilità, stabilire salvaguardie come avvisi e budget anziché arresti rigidi dove il servizio è critico, impegnarsi gradualmente sulla baseline stabile e abbinare sempre il costo all'affidabilità.

## Domande da discutere con il team

**1. Quanta parte della nostra fattura cloud possiamo attribuire oggi a un responsabile, e chi non si riesce a trovare?**
Si osservino la quota di spesa con tag validi e le voci più grandi prive di tag. Ci si chieda chi sarebbe responsabile di ciascuna. Il facilitatore dovrebbe annotare quante voci nessuno rivendica. Si concordi un passo della policy dei tag da imporre alla creazione.

**2. Che cosa ha fatto il nostro costo per unità negli ultimi sei mesi, e perché?**
Si tracci il costo unitario e si annotino le variazioni di architettura, prezzo e volume. Ci si chieda quali variazioni siano state deliberate. Se la tendenza è una sorpresa, si discuta di quali dati manchino. Si aggiunga una misura di qualità al grafico.

**3. Quali delle nostre risorse spegneremmo domani se osassimo?**
Si elenchino i candidati: ambienti inattivi, database sovradimensionati, archiviazione dimenticata. Per ciascuno ci si chieda quale sia il rischio e chi decide. Si concordi un modo sicuro di provare a rimuoverne uno, come programmare l'arresto o eseguire prima uno snapshot.

**4. Come ce ne accorgeremmo entro un giorno se un processo iniziasse a costare dieci volte di più?**
Si ripercorra il percorso degli avvisi dalla fattura al responsabile. Lo si metta alla prova con un esempio passato. La conversazione dovrebbe rivelare ritardi e lacune di responsabilità. Si concordino un tempo obiettivo per prendere in carico e decidere e chi è di turno.

**5. Quanta parte dell'uso di base potremmo impegnare in sicurezza, e che cosa potrebbe farci sbagliare?**
Si esamini lo storico d'uso alla ricerca di un livello minimo stabile e dei rischi che lo riguardano: cambiamenti di prodotto, migrazioni, variazioni di prezzo. Si decida un primo modesto impegno e una data di revisione. Si includa la finanza nella discussione.

**6. Quale compromesso tra costo e affidabilità stiamo facendo per caso?**
Si rivedano i risparmi e gli incidenti recenti. Alcuni erano collegati? Si discuta di come rendere esplicito il compromesso, per esempio collegando le revisioni dei costi ai budget di errore. Si decida chi può approvare un taglio che incide sull'affidabilità.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna prendono le decisioni che determinano il costo e sono nella posizione migliore per ridurlo. Dovrebbero applicare i tag alla creazione, controllare regolarmente la propria vista dei costi, includere il costo nelle discussioni di progetto e trattare la riduzione degli sprechi come lavoro normale. Dovrebbero poter vedere l'effetto di una modifica sul costo poco dopo averla fatta, il che favorisce un apprendimento rapido.

### Team di servizio e operations

I team di operazioni e di piattaforma gestiscono i servizi condivisi, impongono le policy e gestiscono gli avvisi di anomalia. Dovrebbero mantenere semplice la conformità dei tag, fornire rapporti in self-service e pubblicare regole chiare per i costi condivisi. Dovrebbero osservare sia il costo sia l'affidabilità delle piattaforme che forniscono e aiutare i team ad agire senza diventare un ostacolo.

### Leadership e governance

I dirigenti e la finanza vogliono una spesa prevedibile e un buon valore. Dovrebbero finanziare gli strumenti e il tempo per il lavoro sui costi, accettare intervalli nelle previsioni, evitare classifiche dei team e chiedere il costo unitario accanto alla qualità. La governance dovrebbe verificare che gli impegni siano assunti sulla base dei dati e che le dichiarazioni di sostenibilità riportino il proprio metodo.

### Clienti e utenti

Gli utenti avvertono il costo cloud indirettamente, attraverso prezzi, funzionalità o stabilità del servizio. Ne traggono beneficio quando i risparmi finanziano miglioramenti e ne soffrono quando i tagli riducono la qualità. Dove agli utenti viene addebitato il consumo, vogliono fatture chiare e la possibilità di influenzarle.

## In pratica: un esempio di ITIL agile

Un rivenditore online regionale gestisce il proprio negozio e la piattaforma degli ordini su un cloud pubblico, con sei team di ingegneria. I numeri che seguono sono illustrativi.

La spesa cloud è cresciuta con regolarità nel corso di un anno, e il direttore finanziario chiede un taglio. Il responsabile FinOps estrae i dati di fatturazione. La copertura dell'allocazione è del 68 per cento, con un terzo della spesa priva di tag negli account di test. Il costo per ordine completato è di 0,31 dollari statunitensi, rispetto a 0,27 sei mesi prima, mentre il volume degli ordini è cresciuto del 15 per cento. Il tasso di spreco secondo le regole del team è del 14 per cento della spesa nell'ambito, per lo più ambienti non di produzione in esecuzione di notte e nei fine settimana e alcuni database sovradimensionati. La copertura degli impegni è del 20 per cento della baseline stabile, con un utilizzo del 97 per cento di quanto acquistato. Uno scostamento della previsione di più 18 per cento nell'ultimo trimestre è seguito a una campagna di marketing di cui nessuno aveva informato il team di piattaforma. Un processo dati fuori controllo in un account è rimasto in esecuzione per due giorni prima che qualcuno se ne accorgesse.

Il responsabile concorda quattro modifiche con i team di ingegneria. Una policy dei tag blocca le nuove risorse prive di tag di responsabile e di servizio, con un periodo di tolleranza di due settimane. Ogni team riceve una vista settimanale dei costi e un breve spazio nella conversazione quindicinale sui costi. Gli ambienti non di produzione vengono programmati per fermarsi fuori dall'orario di lavoro, e i tre database sovradimensionati vengono ridimensionati dopo aver verificato le loro prestazioni rispetto agli obiettivi di livello di servizio. Un primo impegno copre il 60 per cento della baseline stabile, con una revisione tra tre mesi. Un avviso di anomalia arriva al team responsabile con l'aspettativa di una decisione registrata entro quattro ore, e il calendario di pianificazione ora include le campagne di marketing.

Dopo un trimestre, la copertura dell'allocazione è del 93 per cento, il tasso di spreco scende al 6 per cento, il costo per ordine scende a 0,26 dollari statunitensi senza variazioni nella latenza del checkout o nel tasso di errore e lo scostamento della previsione è di più 5 per cento. La copertura degli impegni è del 55 per cento con un utilizzo del 96 per cento. Il tempo mediano di presa in carico delle anomalie è di 2 ore, con l'85º percentile a 6. Il direttore finanziario chiede una classifica con il costo per team. Il responsabile FinOps rifiuta, spiegando che i team gestiscono servizi diversi con crescite diverse, e offre invece la tendenza del costo unitario di ciascun team con le sue misure di affidabilità. La decisione viene registrata e viene fissata la data della prossima revisione.

## Lente di settore

**Startup.** Crediti e fatture basse possono nascondere cattive abitudini che diventano costose su scala. Si applichino i tag dal primo giorno, si programmino le risorse non di produzione e si segua presto il costo per cliente. Ci si impegni solo quando la domanda è prevedibile.

**Piccola impresa.** Un solo account e pochi servizi rendono semplici tag e revisione. Si riveda la fattura ogni mese con la persona che costruisce il sistema, si rimuovano le risorse dimenticate e si diffidi degli impegni di lunga durata. Un avviso di budget è il singolo controllo più prezioso.

**Grande impresa.** Molti account, team e fornitori richiedono una funzione FinOps centrale che metta in grado i team anziché controllarli. Si standardizzino tag ed esportazioni di fatturazione tra i fornitori, si negozino centralmente gli impegni e si diano ai team i loro dati. Si pianifichino le differenze di rendicontazione multi-cloud.

**Pubblica amministrazione e settore pubblico.** Quadri di appalto, residenza dei dati e budget annuali fissi condizionano le scelte. Si documentino le decisioni su costi e regioni, si modelli l'effetto della spesa variabile sugli stanziamenti e si conservino tracce di audit. Gli impegni pubblici sulla sostenibilità possono richiedere emissioni rendicontate con i relativi metodi (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi di una pratica FinOps sono il tempo di poche persone per gestire reportistica, policy dei tag e conversazione regolare; gli strumenti, che possono essere forniti dalla piattaforma cloud o acquistati; e il tempo di ingegneria per agire sui risultati. Una piccola pratica può iniziare con un'esportazione di fatturazione e un foglio di calcolo.

I ritorni derivano da minori sprechi, prezzi migliori grazie agli impegni, meno sorprese e decisioni migliori sull'architettura. Si costruisca il caso a partire dai propri numeri: il tasso di spreco e il suo costo nella prima revisione, i risparmi dalla programmazione degli ambienti non di produzione, lo sconto sugli impegni sulla porzione impegnata e il costo evitato delle anomalie intercettate presto. Si eviti di citare percentuali di spreco o cifre di risparmio valide per l'intero settore senza una fonte e un metodo tracciabili. Si includano il costo della pratica e il rischio di impegno eccessivo. Il caso finanziario dei miglioramenti in generale è trattato nell'argomento successivo (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Un team centrale che dice di no.** Rallenta il lavoro e i team lo aggirano. Si mettano in grado i team con dati e salvaguardie.
- **Tagliare i costi senza osservare l'affidabilità.** I risparmi ritornano sotto forma di incidenti. Si abbini il costo alle misure di livello di servizio.
- **Inseguire la copertura degli impegni.** Una percentuale alta con un utilizzo basso è spreco. Si seguano entrambi.
- **Rapporti mensili solo alla finanza.** Gli ingegneri non li vedono mai. Si diano ai team viste giornaliere o settimanali.
- **I tag come progetto di pulizia.** Decade. Si impongano i tag alla creazione.
- **Classificare i team per spesa.** La crescita sembra spreco. Si mostrino le tendenze del costo unitario con il contesto.
- **Prevedere un solo numero.** La domanda variabile lo spezza. Si usino intervalli e determinanti.
- **Dichiarare emissioni precise.** I metodi di stima sono incerti. Si dichiarino metodo e limiti.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Visibilità e responsabilità | Fattura mensile rivista dalla finanza | Tag usati da alcuni team | Tag obbligatori; i team vedono viste settimanali dei costi | Copertura dell'allocazione gestita; bacini condivisi rivisti | I dati sui costi confluiscono nelle decisioni di prodotto quasi in tempo reale tra i fornitori |
| Ottimizzazione | Pulizie occasionali | Programmazioni e ridimensionamenti da parte di alcuni team | Regole sugli sprechi e backlog permanente di ottimizzazioni | Sprechi, impegni e costo unitario gestiti con controparti di affidabilità | Ottimizzazione continua e automatizzata con supervisione umana e apprendimento condiviso |
| Pianificazione | Budget annuale | Previsioni approssimative | Previsioni basate sui determinanti con intervalli | Scostamenti analizzati e riportati; impegni gestiti in modo incrementale | Previsione congiunta con il business, i fornitori e gli obiettivi di sostenibilità |

## Checklist

- [ ] Un piccolo insieme obbligatorio di tag (responsabile, servizio, ambiente) è imposto alla creazione delle risorse.
- [ ] La copertura dell'allocazione è riportata ogni settimana, con le voci più grandi prive di tag elencate.
- [ ] Ogni team ha una vista settimanale dei costi con tendenze e anomalie.
- [ ] Una conversazione regolare tra ingegneria e finanza sui costi è in calendario.
- [ ] Il costo unitario del cloud è seguito accanto a disponibilità, latenza e tasso di errore.
- [ ] Le regole sugli sprechi sono scritte e applicate, con le esclusioni etichettate.
- [ ] Gli impegni sono assunti in modo incrementale rispetto all'uso stabile di base, con copertura e utilizzo monitorati.
- [ ] Le previsioni usano determinanti e intervalli e gli scostamenti sono analizzati.
- [ ] Gli avvisi di anomalia raggiungono i responsabili con un tempo atteso per decidere.
- [ ] Le stime delle emissioni, se riportate, dichiarano metodo e limiti.

## Prompt IA

**Analizzare una tendenza dei costi.**

```text
Ecco una sintesi del nostro costo e utilizzo cloud per [servizio] nel periodo
[periodo]: [incolla costo mensile, volume ed eventuali variazioni note].
Scomponi la variazione di costo in effetti di volume, prezzo e mix per quanto i
dati lo consentono, suggerisci che cosa verificare in seguito e proponi un
costo unitario con una controparte di qualità. Non inventare prezzi o sconti.
Elenca le tue ipotesi e i dati che servirebbero per essere più certi.
```

**Redigere una policy dei tag.**

```text
Redigi una policy dei tag per [tipo di organizzazione] che usa [fornitori
cloud]. Includi un insieme minimo di tag obbligatori, i valori ammessi, come
vengono imposti alla creazione, come le violazioni vengono segnalate ai
responsabili e un periodo di tolleranza. Mantienila abbastanza breve perché
gli ingegneri la seguano. Elenca le tue ipotesi e tutto ciò che dipende da
funzionalità del fornitore che devo verificare nella documentazione corrente.
```

**Definire le regole sugli sprechi.**

```text
Proponi regole per classificare le risorse cloud come inattive o
sovradimensionate in [tipo di ambiente], includendo le metriche usate, le
finestre temporali, le esclusioni (per esempio gli standby per la resilienza)
e un processo di revisione dei falsi positivi. Descrivi come evitare di
danneggiare l'affidabilità. Non fissare soglie numeriche senza indicare come
dovremmo tararle sui nostri dati. Elenca le tue ipotesi.
```

**Pianificare un primo impegno.**

```text
Il nostro uso stabile di base nell'ultimo [periodo] è [sintesi] e i rischi per
la domanda sono [elenco]. Delinea un piano prudente per un primo impegno: come
stimare la baseline, quanto impegnare, come rivedere l'utilizzo e che cosa ci
farebbe fermare. Non presumere sconti o termini specifici dei fornitori.
Elenca le tue ipotesi e le domande per la finanza e gli approvvigionamenti.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di costo cloud.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica di costo cloud riporti il proprio vettore di manipolazione, la salvaguardia e la controparte di affidabilità.

## Punti chiave

- Si renda il costo visibile e posseduto: si impongano i tag alla creazione e si dia a ogni team una propria vista settimanale.
- Si misuri il costo per unità accanto ad affidabilità e qualità, mai da solo.
- Si rimuova lo spreco come parte del lavoro normale, guidati da regole scritte.
- Ci si impegni gradualmente sulla baseline stabile e si seguano sia la copertura sia l'utilizzo.
- Si preveda con determinanti e intervalli e si osservino le anomalie con una risposta rapida.
- Non si classifichino i team in base alla spesa e si dichiarino metodo e limiti di qualsiasi stima delle emissioni.

## Riferimenti e letture di approfondimento

1. Storment, J. R., and Fuller, M., *Cloud FinOps*, 2nd ed., O'Reilly, 2023.
2. FinOps Foundation, *FinOps Framework*, https://www.finops.org/framework/.
3. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Cloud computing](https://en.wikipedia.org/wiki/Cloud_computing).
7. Wikipedia, [Pay as you go](https://en.wikipedia.org/wiki/Pay_as_you_go).
8. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
9. Wikipedia, [Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing).
10. Wikipedia, [Volume discount](https://en.wikipedia.org/wiki/Volume_discount).
11. Wikipedia, [Carbon footprint](https://en.wikipedia.org/wiki/Carbon_footprint).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection).
14. Wikipedia, [Variance analysis](https://en.wikipedia.org/wiki/Variance_analysis).
