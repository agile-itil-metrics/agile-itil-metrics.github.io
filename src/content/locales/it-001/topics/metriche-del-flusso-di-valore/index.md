# Metriche del flusso di valore

**Si misuri un flusso di valore da un capo all'altro, si divida ogni fase nel tempo in cui il lavoro viene toccato e nel tempo in cui attende e si conti quanta parte arriva utilizzabile, perché i ritardi maggiori e le maggiori rilavorazioni in un'organizzazione di servizi si trovano tra i team, non al loro interno.**

## Panoramica e motivazione

La maggior parte dei team misura la propria fase. Il service desk riporta i ticket chiusi, un team di sviluppo riporta le story concluse, un comitato delle modifiche riporta le modifiche approvate. Ciascun numero può apparire sano mentre chi ha chiesto qualcosa attende per settimane. La ragione è strutturale: in una richiesta tipica, la maggior parte del tempo trascorso è speso in code e passaggi di consegne, e nessun team singolo possiede quel tempo.

Un [flusso di valore](https://en.wikipedia.org/wiki/Value_stream) è la sequenza di passi attraverso cui una richiesta diventa valore consegnato. La [mappatura del flusso di valore](https://en.wikipedia.org/wiki/Value-stream_mapping) è la tecnica, sviluppata nell'ambito della [produzione snella (lean)](https://en.wikipedia.org/wiki/Lean_manufacturing) e poi applicata a uffici, ospedali e software, che consiste nel disegnare ogni passo dall'inizio di un processo fino al cliente e nel registrare tempo e volume in ciascuna fase. La mappa è un'immagine dello stato attuale, seguita da un'immagine di uno stato futuro migliore. I numeri sulla mappa sono l'oggetto di questo argomento.

Qui si incontrano due vocabolari. In ITIL 4, la quarta edizione dell'Information Technology Infrastructure Library, un flusso di valore è una specifica combinazione di attività della catena del valore del servizio di [ITIL](https://en.wikipedia.org/wiki/ITIL) (pianificare, migliorare, coinvolgere, progettare e rilasciare in esercizio, ottenere e costruire, erogare e supportare) disposte per creare un particolare prodotto o servizio. Esempi sono «ripristinare il servizio dopo un incidente» e «consegnare una modifica dall'idea alla produzione». ITIL dice che cos'è un flusso e chi deve essere coinvolto. Il lean dice come misurarlo. La controparte agile è il flusso degli elementi di lavoro su una lavagna, che i team che gestiscono il flusso già monitorano con misure come il cycle time (vedi Argomento 2.1 «Misure del flusso»).

Le misure lean sono poche. Il **lead time** è il tempo totale trascorso dal momento in cui viene fatta una richiesta al momento in cui viene consegnata. Il **tempo di lavorazione (process time)**, talvolta chiamato touch time, è il tempo in cui qualcuno sta effettivamente lavorando sull'elemento. Il **tempo di attesa (wait time)** è il tempo in cui l'elemento sosta tra un lavoro attivo e l'altro, in una coda, in un'approvazione o in un passaggio di consegne. La **percentuale completa e corretta (%C/A, percent complete and accurate)** è la quota di elementi che la fase successiva può usare così come ricevuti, senza doverli correggere, completare o rimandare indietro. Il **takt time** è il ritmo al quale il flusso deve completare gli elementi per corrispondere alla domanda dei clienti, calcolato come tempo di lavoro disponibile diviso per il numero di elementi richiesti in quel tempo. Il rapporto tra tempo di lavorazione e lead time è l'**efficienza di processo**, che questo libro tratta come la forma, per il flusso di valore, dell'efficienza del flusso (vedi Argomento 2.2 «Lead time, cycle time ed efficienza del flusso»).

Due relazioni rendono i numeri utili insieme. Primo, il [lead time](https://en.wikipedia.org/wiki/Lead_time) è la somma di tempo di lavorazione e tempo di attesa su ogni fase, perciò un flusso con un lead time di settimane e un tempo di lavorazione di giorni è per lo più coda. La [legge di Little](https://en.wikipedia.org/wiki/Little%27s_law) collega quella coda al lavoro in corso e al throughput, ed è per questo che l'argomento 2.3 «Lavoro in corso e code» è il naturale compagno. Secondo, la %C/A si compone. Un flusso di cinque fasi in cui ciascuna fase passa il 90 percento della propria produzione in modo pulito consegna un risultato pulito solo nel 59 percento circa dei casi, un prodotto noto nella manifattura come [rolled throughput yield](https://en.wikipedia.org/wiki/Rolled_throughput_yield). I rapporti sulle singole fasi dicono tutti 90 percento. Il flusso dice qualcosa di molto meno confortevole.

## Principi chiave

- **Si parta dalla richiesta del cliente e si finisca all'uso da parte del cliente.** Un flusso misurato da «lavoro iniziato» a «lavoro integrato» nasconde l'attesa a entrambe le estremità, che spesso è la parte più lunga.
- **Si separi il tempo di lavorazione dal tempo di attesa in ogni fase.** Una singola durata di fase mescola i due e invia lo sforzo di miglioramento nel posto sbagliato. L'attesa è di solito una proprietà di progetto del flusso, non un fallimento di impegno.
- **Si misuri la qualità come completezza e correttezza, oltre che come velocità.** Una fase veloce che rimanda indietro il lavoro è lenta nei termini del flusso, perché la rilavorazione consuma capacità e aggiunge attesa.
- **Si mappi un flusso e una classe di elementi alla volta.** Una mappa che mescola modifiche di emergenza con richieste di routine produce una media che non descrive nessuna delle due.
- **Si riportino distribuzioni e si mostri il campione.** Lead time e tempo di attesa sono asimmetrici, perciò si mostrino la mediana e un percentile alto e si dica quanti elementi e quale periodo (vedi Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).
- **Si descrivano i flussi, mai le persone.** Le metriche di fase individuano dove il lavoro attende. Non sono mai una classifica delle persone o dei team di ciascuna fase.

## Definizioni delle metriche

Le metriche seguenti sono definite per un flusso di valore nominato e una classe di lavoro. I conteggi degli elementi escludono quelli annullati, salvo diversa indicazione. Tempo di lavorazione e tempo di attesa sono riportati per ogni fase e sommati per il flusso.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lead time del flusso di valore | Tempo trascorso dalla richiesta del cliente al momento in cui il cliente può usare il risultato | ora della conferma di consegna meno ora in cui la richiesta è stata registrata; gli elementi annullati o ritirati sono esclusi; si riportino la mediana e l'85° e il 95° percentile | giorni | Record dello strumento ITSM uniti agli eventi di consegna della pipeline o del sistema di evasione | Gestione delle richieste di servizio; abilitazione delle modifiche | Lead time sulla lavagna del team | Mensile |
| Tempo di lavorazione | Tempo in cui un elemento è attivamente lavorato, per fase e per il flusso | somma degli intervalli in cui l'elemento è in uno stato attivo, per fase; code, attese di approvazione e stati bloccati sono esclusi | ore o giorni | Cronologia degli stati del tracker; registrazioni del tempo dove gli stati sono troppo grossolani | Gestione degli incidenti; gestione delle richieste di servizio | Cycle time nelle colonne «in corso» | Mensile |
| Tempo di attesa | Tempo in cui un elemento sosta tra lavori attivi, per fase e per il flusso | tempo trascorso della fase meno il tempo di lavorazione di quella fase; comprende code, approvazioni, passaggi di consegne e tempo di blocco | giorni | Cronologia degli stati del tracker e cambi di stato dello strumento ITSM | Abilitazione delle modifiche; service desk | Tempo nelle colonne di coda; tempo di blocco | Mensile |
| Efficienza di processo | Quota del lead time che è tempo di lavorazione | somma dei tempi di lavorazione sulle fasi / lead time del flusso di valore per gli stessi elementi; gli elementi ancora aperti sono esclusi | percentuale | Derivata da tempo di lavorazione e lead time | Miglioramento continuo | Efficienza del flusso | Trimestrale |
| Percentuale completa e corretta (fase) | Quota degli elementi che una fase riceve e che può usare senza correzione, completamento o restituzione | elementi accettati così come ricevuti / elementi ricevuti nel periodo; gli elementi restituiti per qualsiasi ragione contano come non accettati | percentuale | Eventi di restituzione e di riapertura nel tracker o nello strumento ITSM; revisioni di accettazione a campione | Gestione delle richieste di servizio; abilitazione delle modifiche; gestione dei problemi | Definizione di pronto; tasso di rilavorazione | Mensile |
| Percentuale completa e corretta cumulata | Quota di elementi che superano ogni fase in modo pulito | prodotto dei valori di %C/A delle fasi per un flusso e un periodo (per esempio 0,90 x 0,85 x 0,95); le fasi esterne al flusso sono escluse | percentuale | Derivata dai valori delle fasi | Miglioramento continuo | Difetti sfuggiti e tasso di rilavorazione lungo una pipeline | Trimestrale |
| Numero di passaggi di consegne | Numero di volte in cui un elemento passa tra team o code | conteggio dei cambi di team o di coda responsabile dalla richiesta alla consegna, per elemento; si riportino la mediana e l'85° percentile | conteggio | Cronologia delle assegnazioni nello strumento ITSM o nel tracker | Service desk; gestione delle richieste di servizio | Dipendenze tra team | Trimestrale |
| Rapporto con il takt time | Se il ritmo del flusso corrisponde alla domanda | intervallo mediano osservato tra completamenti / takt time, dove il takt time è il tempo di lavoro disponibile diviso per gli elementi richiesti nello stesso periodo; un rapporto superiore a 1 significa che il flusso è più lento della domanda | rapporto | Conteggio della domanda dalla coda di accettazione ed eventi di completamento | Gestione della capacità e delle prestazioni; gestione dei livelli di servizio | Throughput rispetto alla domanda; previsione | Trimestrale |

Tempo di lavorazione, tempo di attesa e lead time di fase sono somme e rapporti sullo stesso insieme di elementi, perciò si calcolano da record a livello di elemento e mai sommando medie di fase misurate su campioni diversi. Il takt time si applica meglio al lavoro ripetibile come le richieste standard e le modifiche di routine, e si adatta male al lavoro in cui ogni elemento è unico.

## Raccomandazioni

### Scegliere il flusso

**1. Si scelga un flusso di valore e una classe di elementi e se ne nominino i confini.** Buoni primi candidati sono un tipo di richiesta ad alto volume, come il provisioning di accessi o di attrezzature, o il percorso di una modifica normale dall'approvazione alla messa in esercizio. Si scrivano il trigger che avvia il cronometro e l'evento che conferma la consegna al cliente. Se non si riesce a enunciare ciascuno in una frase, il flusso non è ancora definito (vedi Argomento 3.5 «Metriche di evasione delle richieste di servizio»).

**2. Si faccia partire il cronometro alla richiesta del cliente e lo si fermi all'uso da parte del cliente.** Un flusso che parte quando un team accetta il lavoro e si ferma quando il team lo segna come fatto esclude la coda di accettazione e il ritardo di conferma. Queste sono frequentemente le attese più lunghe. Se i dati per i veri confini non sono ancora acquisiti, si riporti la misura più ristretta con un'etichetta onesta e si pianifichi la strumentazione (vedi Argomento 1.5 «Fonti dei dati e strumentazione»).

### Mappare lo stato attuale

**3. Si percorra il flusso con le persone che svolgono il lavoro.** Si tenga una sessione di mappatura con un rappresentante di ogni fase, compreso il lato cliente. Si disegnino i passi come accadono davvero, poi si confronti con il processo documentato. Le differenze tra i due sono risultati a sé. Il metodo è descritto in *Learning to See* di Rother e Shook e in *Value Stream Mapping* di Martin e Osterling.

**4. Si registrino tempo di lavorazione e tempo di attesa per ogni fase da elementi reali.** Si prenda un campione di elementi recenti, 20 o più se il volume lo consente, e si segua ciascuno attraverso il flusso usando la cronologia del tracker e, se necessario, una conversazione. Si registrino il tempo di lavorazione e l'attesa prima di ogni fase. Si tratti il campione come una stima e si dica come è stato ottenuto. Si ripeta la mappatura quando il flusso cambia abbastanza da invalidarla.

**5. Si mostri l'attesa come barra a sé.** Sulla mappa e sulla dashboard, si disegnino tempo di lavorazione e tempo di attesa come segmenti separati per ogni fase. Una fase con 30 minuti di tempo di lavorazione e quattro giorni di attesa non ha nulla a che vedere con una con quattro giorni di tempo di lavorazione, benché la durata della fase sia identica.

### Misurare la qualità lungo il flusso

**6. Si misuri la %C/A al passaggio di consegne, definita dalla fase ricevente.** Il team ricevente decide che cosa significhi «utilizzabile così com'è», idealmente in una breve condizione di accettazione scritta. Si conti come non accettata una restituzione, una richiesta di informazioni mancanti o una correzione silenziosa. La correzione silenziosa è la perdita più comune, perché il lavoro viene sistemato senza che nessuno registri che era difettoso.

**7. Si calcoli la %C/A cumulata e la si confronti con i valori di fase.** Si moltiplichino i valori di fase. Un divario tra la cifra cumulata e la fase dall'aspetto migliore è l'effetto composto della rilavorazione e spesso sostiene la necessità di correggere un passaggio di consegne meglio di qualsiasi misura di velocità. La si colleghi alle misure di rilavorazione e di fallimento delle modifiche per lo stesso flusso (vedi Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni»).

### Usare i numeri per decidere

**8. Si migliori prima l'attesa maggiore e se ne cerchi la causa nell'interfaccia.** Si ordinino le fasi per tempo di attesa, poi ci si chieda che cosa l'elemento in attesa stia aspettando: una decisione, una persona, un lotto, uno spazio programmato o un input mancante. Poi ci si chieda se quell'attesa sia necessaria. La [teoria dei vincoli](https://en.wikipedia.org/wiki/Theory_of_constraints) sostiene che il ritmo del flusso è determinato dalla sua fase più stretta, perciò migliorare una fase che non è il vincolo cambia poco. Le attese di approvazione nell'abilitazione delle modifiche sono un caso frequente (vedi Argomento 4.3 «Metriche di abilitazione delle modifiche»).

**9. Si riducano i passaggi di consegne prima di ottimizzare le fasi.** Ogni passaggio di consegne aggiunge una coda, un cambio di contesto e una possibilità di informazioni incomplete. Si contino i passaggi, poi si verifichi se una fase possa essere combinata, una decisione delegata al team che svolge il lavoro o una richiesta standard preautorizzata. ITIL 4 descrive le modifiche standard come modifiche preautorizzate a basso rischio, che è esattamente questa mossa applicata al flusso delle modifiche.

**10. Si confrontino domanda e ritmo con il takt time, solo per il lavoro ripetibile.** Si calcoli il takt time dai dati reali di domanda del periodo, poi lo si confronti con l'intervallo al quale il flusso completa effettivamente gli elementi. Un flusso più lento del takt fa crescere una coda, e la legge di Little dice approssimativamente con quale rapidità. Un flusso molto più veloce del takt ha un margine che potrebbe essere reindirizzato. Non si usi il takt time per fissare obiettivi per le singole persone.

### Mantenere onesta la misurazione

**11. Si uniscano i dati tra gli strumenti e si dica che cosa è stimato.** Il flusso di solito attraversa lo strumento ITSM, l'issue tracker e la pipeline. Si unisca su un identificatore di elemento, si documenti la regola di unione e si segni quali fasi provengono da eventi di sistema e quali da campionamento. Una stima etichettata come stima è molto più utile di un numero dall'aspetto preciso e di origine ignota.

**12. Si riveda la mappa ogni trimestre e si leggano ogni volta gli elementi grezzi.** I flussi derivano man mano che i team si riorganizzano e gli strumenti cambiano. Si mettano la mappa e una decisione all'ordine del giorno di una revisione periodica con ogni fase rappresentata (vedi Argomento 1.4 «Governance e responsabilità delle metriche»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Lead time del flusso di valore | Far partire il cronometro più tardi, per esempio allo smistamento anziché alla richiesta; chiudere gli elementi prima che il cliente possa usarli; dividere una richiesta in diverse richieste piccole | Regole fisse del cronometro scritte nel registro delle metriche; conferma di consegna da parte del cliente; conteggio degli elementi riaperti e degli elementi figli collegati |
| Tempo di lavorazione | Registrare stati inattivi o bloccati come attivi così che il tempo di lavorazione salga e il flusso sembri efficiente; oppure registrare le attese come lavoro per sembrare occupati | Osservazione di un campione di elementi; tempo di lavorazione confrontato con le registrazioni del tempo dove esistono; definizioni degli stati riviste con il team |
| Tempo di attesa | Spostare l'attesa in uno stato non tracciato, come una conversazione laterale, un foglio di calcolo o uno stato «in sospeso» che ferma il cronometro | Riportare l'uso degli stati di pausa e di blocco; confrontare l'età del ticket con i timestamp di fase; campionare gli elementi per le attese fuori sistema |
| Efficienza di processo | Ridurre il lead time con una gestione prioritaria per gli elementi misurati, oppure gonfiare il tempo di lavorazione per alzare il rapporto | Mostrare lead time e tempo di lavorazione accanto al rapporto; riportare la quota di elementi con urgenza; non fissare mai un obiettivo per il rapporto in sé |
| Percentuale completa e corretta (fase) | La fase ricevente abbassa la propria soglia di accettazione così che meno elementi siano restituiti, oppure la fase mittente forza il lavoro con soluzioni informali | Condizione di accettazione scritta; conteggi di difetti e rilavorazioni a valle; campione di elementi accettati rivisto da una terza parte |
| Percentuale completa e corretta cumulata | Unire fasi così che le restituzioni avvengano all'interno di una fase e scompaiano dal conteggio dei passaggi; scegliere un elenco di fasi favorevole | Fissare in anticipo l'elenco delle fasi; riportare le modifiche delle fasi nel registro delle decisioni; confrontare con il tasso di rilavorazione dell'intero flusso |
| Numero di passaggi di consegne | Riassegnare gli elementi a una coda condivisa o a un responsabile generico per evitare cambi di responsabile contati; nascondere i passaggi in un unico «team» che ne comprende diversi | Contare per coda e per ruolo; leggere la cronologia delle assegnazioni degli elementi campionati; monitorare il numero di riassegnazioni per elemento |
| Rapporto con il takt time | Contare la domanda rinviata o respinta come non richiesta; contare i completamenti parziali come completamenti | Riportare domanda, domanda respinta ed età del backlog accanto al rapporto; contare i completamenti solo quando il cliente conferma |

Una lettura sana mostra lead time e tempo di lavorazione plausibili rispetto al campione, un tempo di attesa che è visibilmente la parte maggiore e che si riduce gradualmente, valori di %C/A sostenuti da una condizione di accettazione scritta e passaggi di consegne che calano solo quando è stato rimosso un vero passo o una vera decisione. Se il lead time migliora mentre la %C/A cumulata cala, il flusso sta facendo passare il lavoro più in fretta spostando il costo a valle, che è lo schema che le salvaguardie esistono per individuare (vedi Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Mappatura in workshop con un campione | Rapida, mostra l'intero flusso, costruisce comprensione condivisa tra i team | Un'istantanea che invecchia in fretta; distorsione del campione; dipende da partecipanti onesti |
| Misurazione automatica da eventi dello strumento | Continua, oggettiva, supporta percentili e tendenze | Vede solo ciò che gli strumenti registrano; le attese fuori sistema e le correzioni silenziose sono invisibili |
| Confini da un capo all'altro dal punto di vista del cliente | Riflette l'esperienza; mette in luce i ritardi di accettazione e di conferma | Richiede dati da più sistemi e un identificatore di elemento condiviso |
| Confronto tra takt time e domanda | Lega il ritmo alla domanda reale; rende prevedibile la crescita della coda | Debole per il lavoro unico e non ripetibile; richiede conteggi affidabili della domanda |
| %C/A cumulata | Mostra come la rilavorazione si compone attraverso i passaggi di consegne | Richiede accordo sulle condizioni di accettazione; facile discutere sulle definizioni |

Si usi il workshop di mappatura per imparare la forma del flusso e la misurazione automatica per osservarlo. Si usino le misure ai confini del team come input e le misure ai confini del cliente come verdetto. Il costo dell'approccio è la conversazione tra team che impone, che è anche il suo principale beneficio.

## Domande da discutere con il team

**1. Dove parte e dove si ferma il cronometro del cliente nella nostra richiesta più comune e il nostro rapporto concorda?**
Si scelga un tipo di richiesta e lo si ripercorra su una lavagna dal momento in cui il cliente chiede al momento in cui può usare il risultato. Si segni dove il nostro rapporto attuale inizia e smette di contare. Chi facilita dovrebbe cercare il divario a ciascuna estremità, poiché le code di accettazione e i ritardi di conferma sono abitualmente lasciati fuori. Si concordi se cambiare il rapporto o etichettarlo come vista parziale.

**2. Per ogni fase del nostro flusso, quanta parte del tempo trascorso è qualcuno al lavoro sull'elemento?**
Si prendano cinque elementi recenti e si ricostruisca la storia di ciascuno. Si stimino il tempo di lavorazione e l'attesa per ogni fase e si confrontino i totali. La maggior parte dei gruppi è sorpresa da quanto poco del tempo trascorso sia lavoro. Ci si chieda che cosa stia aspettando ciascuna lunga attesa e si resista alla prima risposta, che di solito è «le persone sono occupate». Si registri quali attese sembrano scelte di progetto anziché limiti di capacità.

**3. Di che cosa ha bisogno da noi la fase successiva e come ce ne accorgeremmo se mancasse?**
Si faccia enunciare a un rappresentante della fase ricevente la condizione di accettazione in parole semplici. La si confronti con ciò che la fase mittente ritiene di fornire. Si contino le volte nell'ultimo mese in cui il lavoro è stato restituito, completato da qualcun altro o sistemato in silenzio. La discussione produce spesso una piccola checklist che elimina una restituzione ricorrente.

**4. Quali passaggi di consegne esistono per ragioni storiche anziché per necessità?**
Si elenchino i passaggi sulla mappa e ci si chieda perché ciascuno esista. Alcuni sono reali: una competenza, un controllo, una separazione dei compiti. Altri persistono perché un confine tra team è stato tracciato anni fa. Si scelga un passaggio da rimuovere, delegare o preautorizzare e si nomini chi deve essere d'accordo.

**5. Se migliorassimo la fase di cui tutti si lamentano, il cliente se ne accorgerebbe?**
Si confronti la fase che attira più attenzione con la fase che contiene l'attesa più lunga. La teoria dei vincoli suggerisce che migliorare un non vincolo cambia poco per il cliente. Ci si chieda che cosa dovrebbe essere vero perché la fase più rumorosa fosse anche la più lenta. Chi facilita dovrebbe aiutare il gruppo a concordare come verificare la risposta con i dati.

**6. Come potrebbe qualcuno far apparire migliore questo flusso senza migliorarlo?**
Si passi in rassegna con il gruppo la tabella dei vettori di manipolazione. Per ogni metrica ci si chieda che cosa potrebbe fare una persona sotto pressione e che cosa vedrebbe il team se lo facesse. Si concordi quale lettura della salvaguardia sarà rivista ogni volta e chi ne sia responsabile. Lo scopo è un'abitudine condivisa di controllo, non la ricerca di colpevoli.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna di solito vedono con chiarezza le proprie fasi e male il flusso. Una vista del flusso di valore mostra loro quanto a lungo una modifica conclusa attende una revisione, un'approvazione, uno spazio di rilascio o una finestra di rilascio in esercizio, e quanto di ciò sia fuori dal loro controllo. Traggono beneficio dalla %C/A ai propri passaggi di consegne, perché trasforma vaghi lamenti su «requisiti scadenti» o «revisioni tardive» in eventi contati. Dovrebbero diffidare dal migliorare il proprio cycle time a spese della fase ricevente (vedi Argomento 2.8 «Metriche DORA»).

### Team di servizio e operations

I team operativi possiedono molte delle code: l'accettazione del service desk, l'approvazione delle modifiche, il calendario dei rilasci, il passaggio di consegne della reperibilità. Traggono vantaggio da modifiche standard preautorizzate, condizioni di accettazione chiare per il lavoro in ingresso e una vista di quali passaggi aggiungono più attesa. Dovrebbero anche aspettarsi di essere la fase ricevente in una misura di %C/A e di definire che aspetto abbia un passaggio completo. I loro elementi spesso portano cronometri rigorosi propri, perciò la misura del flusso si affianca, e non sostituisce, le misure di livello di servizio.

### Leadership e governance

I dirigenti sponsorizzano il cambiamento tra team e decidono se un flusso abbia un responsabile nominato. Dovrebbero chiedere il lead time del flusso dal punto di vista del cliente e l'attesa maggiore, anziché una scorecard fase per fase. Gli organi di governance che approvano il lavoro sono essi stessi fasi, e il loro tempo di attesa appartiene alla mappa. Fissare obiettivi sul rapporto tra tempo di lavorazione e lead time invita i vettori descritti sopra, perciò lo si usi per orientare l'indagine (vedi Argomento 6.5 «Realizzazione del valore e risultati di business»).

### Clienti e utenti

I clienti sperimentano il lead time e la rilavorazione, e raramente vedono le fasi. Il loro contributo più utile è confermare quando il risultato era utilizzabile e dire che cosa hanno dovuto fare per ottenerlo, come ripresentare un modulo. I rapporti destinati ai clienti dovrebbero dichiarare in parole semplici l'inizio e la fine del cronometro. I clienti traggono beneficio anche quando il flusso pubblica una mediana onesta e un percentile alto, perché una promessa basata sulla sola mediana delude una richiesta su diverse.

## In pratica: un esempio di ITIL agile

Il reparto IT di una compagnia assicurativa di medie dimensioni consegna modifiche normali alla propria piattaforma di gestione delle polizze. I clienti nel business lamentano che «le piccole modifiche richiedono più di un mese». Tutti i numeri di questo esempio sono illustrativi.

Il reparto mappa il flusso dal momento in cui un responsabile di business presenta una richiesta di modifica al momento in cui il responsabile conferma che la modifica è in esercizio. Un campione di 20 modifiche normali recenti fornisce la tabella delle fasi seguente, usando valori mediani illustrativi per fase.

| Fase | Tempo di lavorazione (giorni) | Tempo di attesa (giorni) | %C/A (illustrativa) |
| --- | --- | --- | --- |
| Accettazione e smistamento | 0,5 | 6 | 85 |
| Realizzazione | 1,5 | 5 | 90 |
| Collaudo | 0,5 | 8 | 80 |
| Approvazione della modifica | 0,25 | 9 | 70 |
| Rilascio in esercizio e conferma | 0,25 | 4 | 95 |
| Totale del flusso | 3,0 | 32 | 41 (cumulata) |

Il lead time del flusso nel campione è di circa 35 giorni, perciò l'efficienza di processo è di circa il 9 percento. La %C/A cumulata è di circa il 41 percento, il prodotto dei cinque valori di fase, quindi meno della metà delle modifiche supera ogni fase senza una restituzione. La fase di approvazione della modifica appare modesta se si guarda alla sola %C/A, ma i suoi 9 giorni di attesa sono la singola coda più lunga, e il 30 percento delle modifiche vi arriva con informazioni sul rischio mancanti, che il comitato rimanda indietro.

Il team prende due decisioni. Prima, classifica i dieci tipi di modifica a basso rischio più frequenti come modifiche standard con procedure preautorizzate, così che saltino il comitato. Seconda, il modulo di accettazione acquisisce i campi di rischio che il comitato chiede sempre e si concorda con il comitato una breve checklist di accettazione. Queste scelte affrontano l'attesa maggiore e la maggiore restituzione composta, anziché la fase di realizzazione, dove al team era stato chiesto di «andare più veloce».

Tre mesi dopo il lead time mediano per la classe campionata cala e l'attesa di approvazione si riduce, mentre la %C/A cumulata sale. Il rischio di manipolazione compare nel terzo mese. Un team di prodotto divide diverse richieste in due o tre più piccole, perché gli elementi piccoli si qualificano come modifiche standard, e il lead time per elemento scende bruscamente. Il revisore nota che il conteggio degli elementi figli collegati è aumentato e che la conferma del cliente per richiesta originale non è migliorata. Il reparto mantiene il lead time ma ridefinisce l'elemento come la richiesta originale del cliente, così che le suddivisioni non servano più. Il registro delle decisioni annota la modifica di definizione e riesprime il trimestre precedente con la stessa regola.

## Lente di settore

**Startup.** Un flusso breve con pochi passaggi di consegne ha poco da mappare, e la misura più utile è semplicemente il tempo trascorso dalla richiesta del cliente all'uso da parte del cliente. Si disegni il flusso su una parete, si leggano gli elementi grezzi e si osservi il primo passaggio di consegne che compare man mano che il team cresce. Si resista alla tentazione di costruire strumenti prima che il flusso si sia stabilizzato.

**Piccola impresa.** Una o due persone spesso coprono più fasi, perciò i passaggi di consegne avvengono tra ruoli o strumenti anziché tra team. I rapporti del tracker o del service desk forniscono il lead time a basso costo, e un campione di dieci elementi rivela l'attesa. Si chiedano ai fornitori, come un fornitore di servizi gestiti, i loro tempi di fase, poiché la coda del fornitore è spesso l'attesa più lunga.

**Grande impresa.** I flussi lunghi con molti team e punti di approvazione sono il luogo in cui %C/A cumulata e numero di passaggi di consegne rendono di più. Si assegni un responsabile a ogni flusso principale, lo si mappi congiuntamente con ogni fase rappresentata e si usi un identificatore di elemento condiviso così che gli strumenti possano essere uniti. Divisioni diverse useranno le stesse parole per cronometri diversi, perciò si pubblichi una definizione per misura e si tenga un registro delle modifiche.

**Pubblica amministrazione e settore pubblico.** Approvazioni di legge, fasi di approvvigionamento e controlli di audit formano fasi legittime che non possono essere rimosse e spesso contengono le attese più lunghe. Le si mappi con onestà, si separi l'attesa obbligatoria da quella evitabile e si mostri la parte obbligatoria a chi stabilisce le regole. Si conservi una traccia di audit dei dati e di ogni modifica di definizione (vedi Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

La motivazione è che l'attesa è di solito la parte maggiore del lead time e la più economica da ridurre, perché la soluzione è spesso una decisione, una regola o un passaggio di consegne anziché capacità aggiuntiva. I clienti avvertono direttamente il lead time, e l'organizzazione paga la rilavorazione in capacità che non compare mai in un rapporto di fase. Ridurre passaggi di consegne e restituzioni riduce anche le modalità di fallimento che diventano incidenti in seguito.

I costi sono modesti e soprattutto umani: poche ore del tempo di diverse persone per il workshop di mappatura e il campione, un identificatore di elemento condiviso tra gli strumenti (vedi Argomento 1.5 «Fonti dei dati e strumentazione») e un po' di tempo di analista ogni mese. Il costo maggiore è la conversazione tra team e la disponibilità a cambiare una regola che qualcuno possiede.

Il ritorno si manifesta come lead time più brevi e più prevedibili, una %C/A cumulata in crescita, meno elementi restituiti e capacità liberata dalla rilavorazione. Non si prevedano miglioramenti percentuali da casi di studio pubblicati. Si stimi il ritorno dal proprio flusso: il volume di elementi, l'attesa attuale, il costo del ritardo per il cliente per come lo si sa dichiarare e le ore di rilavorazione che si possono contare. Il Flow Framework e la letteratura lean descrivono lo schema, e nessuno dei due fornisce un valore di riferimento trasferibile al proprio flusso (vedi Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Mappare una fase anziché un flusso.** Una mappa splendidamente dettagliata del lavoro di un team lascia fuori dalla pagina le attese più lunghe. Si mappi dalla richiesta del cliente all'uso da parte del cliente e si aggiunga dettaglio solo dove sono le attese.
- **Fare la media dei tempi di fase da campioni diversi.** La somma delle medie di fase non è la media del flusso. Si calcolino le misure del flusso da record a livello di elemento e si riportino mediane e percentili.
- **Trattare il tempo di attesa come un problema di impegno.** Dire alle persone di lavorare più in fretta raramente accorcia una coda. Ci si chieda che cosa l'elemento stia aspettando e se l'attesa sia necessaria.
- **Ottimizzare l'efficienza di processo come obiettivo.** Una volta che il rapporto diventa un traguardo, il tempo di lavorazione viene gonfiato o il lead time viene ridotto con trucchi. Lo si usi come stimolo all'indagine e lo si abbini al lead time confermato dal cliente.
- **Misurare la %C/A senza una condizione di accettazione scritta.** Senza di essa, ogni restituzione è una discussione. Si faccia scrivere la condizione alla fase ricevente e la si mantenga breve.
- **Lasciare che la rilavorazione silenziosa non venga registrata.** Se una fase sistema il lavoro in ingresso senza registrarlo, la %C/A è sovrastimata e la fase mittente non impara mai. Si registri ogni correzione come restituzione.
- **Usare le metriche del flusso per classificare team o persone.** Descrivono il sistema, e l'attesa maggiore raramente è colpa di un solo team. Si riporti per fase e per flusso e si rivedano i risultati con tutte le fasi presenti.
- **Mappare una volta e mai più.** I flussi derivano. Si riveda la mappa secondo un calendario e dopo qualsiasi riorganizzazione o cambio di strumento.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizione del flusso e cronometri | Flusso non definito; ogni team misura la propria fase | Un flusso mappato da un team; i cronometri differiscono da quelli di altri team | Inizio e fine scritti per ogni flusso principale, dalla richiesta del cliente all'uso da parte del cliente | Regole del cronometro riviste, modifiche registrate, storia ricostruita quando le definizioni cambiano | Definizioni riviste tra team e fornitori man mano che flusso e domanda cambiano |
| Tempo di lavorazione e tempo di attesa | Si conosce solo il tempo trascorso | Campionati a mano per un flusso | Raccolti da eventi dello strumento con un modello di stati documentato e stime etichettate | Seguiti nel tempo con percentili, riduzioni dell'attesa finanziate e monitorate | Attese tra fornitori e team gestite congiuntamente, con code condivise visibili |
| Qualità lungo il flusso | Rilavorazione notata ma non contata | Restituzioni contate da alcune fasi | Condizioni di accettazione scritte e %C/A di fase mostrata ai team responsabili | %C/A cumulata seguita nel tempo e abbinata a misure di rilavorazione e di fallimento | Condizioni di accettazione condivise tra mittente e ricevente e collegate ai risultati per il cliente |
| Uso nel miglioramento | Mappatura fatta una volta, poi accantonata | Un workshop occasionale porta a una correzione locale | Revisione trimestrale con ogni fase presente | Attesa o restituzione maggiore affrontata ogni trimestre con un responsabile | Idee di miglioramento provenienti da ogni fase, con decisioni registrate e risultati verificati |

## Checklist

- [ ] Un flusso di valore e una classe di elementi sono nominati, con un responsabile del flusso.
- [ ] L'inizio e la fine del cronometro sono scritti in termini di richiesta del cliente e uso da parte del cliente.
- [ ] La mappa dello stato attuale è stata costruita con un rappresentante di ogni fase, compreso il lato cliente.
- [ ] Tempo di lavorazione e tempo di attesa sono registrati separatamente per ogni fase da un campione di elementi reali.
- [ ] I tempi di fase e di flusso sono riportati come mediane e percentile alto, con la dimensione del campione mostrata.
- [ ] Ogni fase ricevente ha una condizione di accettazione scritta e le restituzioni sono registrate.
- [ ] La percentuale completa e corretta cumulata è calcolata dai valori di fase.
- [ ] I passaggi di consegne sono contati e l'attesa maggiore ha un responsabile nominato e un esperimento pianificato.
- [ ] Per ogni metrica il vettore di manipolazione e la salvaguardia sono stati rivisti con il team.
- [ ] La mappa e il campione sono rivisti secondo un calendario e le modifiche di definizione sono registrate.

## Prompt IA

**Redigere una guida di intervista per la mappa del flusso di valore.**

```text
Sto mappando il flusso di valore per [nome del flusso], da [evento di inizio] a
[evento di fine], per la classe di elementi [classe di elementi]. I team
coinvolti sono [elenco dei team]. Redigi una guida di intervista per un workshop
di mappatura: domande per ogni fase su tempo di lavorazione, tempo di attesa,
passaggi di consegne, restituzioni e condizioni di accettazione, più domande per
il lato cliente. Non inventare tempistiche né valori di riferimento. Elenca le
tue ipotesi e i dati che dovrei raccogliere per verificare le risposte.
```

**Calcolare le misure del flusso da un campione.**

```text
Ecco un campione di [numero] elementi con orari di ingresso e di uscita dalle
fasi, stati attivi e di attesa e restituzioni: [incolla i dati o descrivi le
colonne]. Calcola lead time, tempo di lavorazione, tempo di attesa, efficienza di
processo, percentuale completa e corretta di fase e percentuale completa e
corretta cumulata e mostra le formule usate. Riporta le mediane e il [percentile]
percentile. Segnala gli elementi con timestamp mancanti e dì come li hai gestiti.
Non colmare le lacune con valori inventati. Elenca le tue ipotesi.
```

**Individuare i rischi di manipolazione in una dashboard di flusso.**

```text
La nostra dashboard del flusso mostra [elenco delle metriche] per [nome del
flusso], e i team sono valutati rispetto a [obiettivi o nessuno]. Per ciascuna
metrica, elenca modi plausibili in cui il numero potrebbe migliorare senza che il
flusso migliori, i segnali che rivelerebbero ciascuno e una metrica o pratica di
salvaguardia che lo individuerebbe. Concentrati su [fase o passaggio di consegne
di interesse]. Non suggerire di classificare le persone e non inventare soglie.
Elenca le tue ipotesi.
```

**Scrivere una condizione di accettazione per un passaggio di consegne.**

```text
La fase mittente è [team mittente] e la fase ricevente è [team ricevente]. Gli
elementi sono [tipo di elemento] e i motivi più comuni per cui vengono restituiti
sono [motivi]. Redigi una breve condizione di accettazione di non più di [numero]
controlli che il ricevente possa applicare e un modo per registrare le
restituzioni così che la percentuale completa e corretta possa essere calcolata.
Mantieni la formulazione neutra e non attribuire colpe. Elenca le tue ipotesi e le
domande che dovrei porre a entrambi i team.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare l'argomento che definisce una metrica sulla propria mappa del flusso e la salvaguardia che dovrebbe affiancarla.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che un argomento di metrica modificato dichiari i propri cronometri, i vettori di manipolazione e i rimandi.

## Punti chiave

- Si misuri il flusso dalla richiesta del cliente all'uso da parte del cliente, perché le misure ai confini del team nascondono le attese più lunghe.
- Si divida ogni fase in tempo di lavorazione e tempo di attesa e si cerchi la causa dell'attesa maggiore nell'interfaccia tra i team.
- La percentuale completa e corretta si compone attraverso le fasi, perciò il valore cumulato è di solito più basso di quanto suggerisca qualsiasi rapporto di fase.
- Si riducano i passaggi di consegne e si preautorizzi il lavoro di routine prima di spingere le fasi ad andare più veloci.
- Si osservi un campione di elementi reali accanto ai dati degli strumenti, si riportino percentili e si etichettino le stime.
- Si abbini ogni metrica del flusso alla sua salvaguardia e si usino le misure per descrivere il sistema, mai per classificare le persone.

## Riferimenti e letture di approfondimento

1. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
2. Martin, K., and Osterling, M., *Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation*, McGraw-Hill, 2014.
3. Womack, J. P., and Jones, D. T., *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*, Simon and Schuster, 1996.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
7. Kersten, M., *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*, IT Revolution, 2018.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
10. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
11. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
12. Wikipedia, [Value stream](https://en.wikipedia.org/wiki/Value_stream).
13. Wikipedia, [Value-stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping).
14. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
17. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
18. Wikipedia, [Rolled throughput yield](https://en.wikipedia.org/wiki/Rolled_throughput_yield).
19. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
