# SLI, SLO e budget di errore

**Un obiettivo di livello di servizio trasforma «abbastanza affidabile» in un numero che utenti, team di prodotto e team operativi possono vedere tutti, e il budget di errore che ne risulta trasforma quel numero in una decisione condivisa e spendibile sul rischio, anziché in una discussione sulle colpe.**

## Panoramica e motivazione

Ogni servizio ha già un livello di affidabilità, che qualcuno lo abbia misurato o no. Se nessuno lo dichiara, gli utenti ne presumono uno, il team di prodotto ne presume un altro e il team operativo ne difende un terzo. La differenza si scopre durante un'interruzione. Questo argomento tratta le tre idee collegate che la [site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) usa per colmare questo divario: l'indicatore di livello di servizio, l'obiettivo di livello di servizio e il budget di errore.

Un [indicatore di livello di servizio (SLI, service level indicator)](https://en.wikipedia.org/wiki/Service_level_indicator) è la misurazione di un aspetto del servizio così come lo vivono gli utenti. Aspetti tipici sono se una richiesta è andata a buon fine, quanto tempo ha richiesto, se i dati restituiti erano aggiornati e se erano corretti. Un buon SLI si esprime come rapporto: il numero di eventi buoni diviso per il numero di eventi validi, su una finestra definita. Un [obiettivo di livello di servizio (SLO, service level objective)](https://en.wikipedia.org/wiki/Service-level_objective) è il traguardo per quel rapporto in un periodo, per esempio «il 99,9 percento delle richieste di checkout valide ha esito positivo su 28 giorni mobili». Il **budget di errore** è tutto ciò che l'obiettivo consente che vada storto: 100 percento meno lo SLO. Al 99,9 percento, il budget è lo 0,1 percento degli eventi validi.

Il budget di errore cambia la conversazione. Se il servizio ha speso poco del proprio budget, il team ha margine per rilasciare più in fretta, provare modifiche rischiose ed eseguire esperimenti. Se il budget è quasi esaurito, lo stesso team rallenta il lavoro sulle funzionalità e dedica impegno all'affidabilità finché il budget non si ricostituisce. La decisione deriva da un numero concordato in anticipo, quindi non dipende da chi è più anziano o più persuasivo nella riunione.

Il **burn rate** (velocità di consumo) è la rapidità con cui il budget viene speso, rispetto al ritmo che esaurirebbe esattamente tutto il budget alla fine della finestra. Un burn rate pari a 1 significa che il budget sarà esaurito esattamente alla fine della finestra. Un burn rate pari a 10 significa che sarà esaurito in un decimo della finestra. Il burn rate è il ponte tra lo SLO e l'allerta, perché dice quanto sia urgente un problema in termini di ciò che costa all'obiettivo.

Le visioni agile e ITIL si incontrano qui, e usano vocabolari diversi per idee affini. In ITIL 4, la gestione dei livelli di servizio è la pratica che stabilisce, misura e riporta i livelli di servizio, e l'[accordo sul livello di servizio (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) è l'accordo documentato tra un fornitore e un cliente (si veda l'Argomento 5.1 «Metriche SLA, OLA e XLA»). Uno SLO è un obiettivo interno, di solito più stringente dello SLA, e appartiene al team che gestisce il servizio. Uno SLA comporta conseguenze, come crediti o penali. Uno SLO comporta una regola decisionale. I team agili che possiedono i propri servizi («you build it, you run it») usano gli SLO per rendere visibile il costo dell'affidabilità nello stesso backlog delle funzionalità. I team che seguono la pratica ITIL possono trattare gli SLI come la forma misurabile di ciò che i clienti dicono di aver bisogno, e lo SLO come l'obiettivo operativo che mantiene al sicuro lo SLA.

La [disponibilità](https://en.wikipedia.org/wiki/Availability) è lo SLI più familiare ed è trattata in dettaglio altrove (si veda l'Argomento 5.3 «Metriche di disponibilità»). Anche latenza, correttezza, aggiornamento e throughput sono candidati. L'abilità sta nello scegliere gli indicatori in base a ciò che sta a cuore agli utenti, anziché a ciò che è facile da raccogliere. L'utilizzo della CPU di un server è facile da raccogliere e dice poco sul fatto che un cliente abbia potuto pagare. La quota di richieste di pagamento completate entro due secondi dice moltissimo. Per la latenza, riportare i [percentili](https://en.wikipedia.org/wiki/Percentile), non le medie, perché una media nasconde la coda lenta che gli utenti notano (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio» e l'Argomento 5.4 «Metriche di capacità e prestazioni»).

## Principi chiave

- **Partire dall'utente, non dal server.** Scegliere indicatori che descrivano un'esperienza che una persona riconoscerebbe, come «il mio pagamento è andato a buon fine», e risalire a ciò che va misurato.
- **Un obiettivo inferiore al 100 percento è una decisione, non un'ammissione.** L'affidabilità perfetta è irraggiungibile e insostenibile, e oltre un certo punto gli utenti di solito non ne percepiscono la differenza. Il budget rende esplicito questo compromesso.
- **Fissare l'obiettivo con le persone che ne dipendono.** Lo SLO è un accordo negoziato tra prodotto, operatività e clienti, non un numero scelto da un solo team.
- **Concordare le conseguenze prima che il budget si esaurisca.** Una politica del budget di errore scritta in una settimana tranquilla viene seguita in una settimana di stress. Una politica inventata durante un'interruzione viene discussa.
- **Allertare sul consumo, non su ogni singola oscillazione.** Chiamare una persona solo quando il budget viene consumato abbastanza in fretta da minacciare l'obiettivo, e indirizzare i consumi più lenti verso i ticket.
- **Gli SLO descrivono servizi, mai persone.** Il budget appartiene a un servizio e al suo team. Non è mai un punteggio per un ingegnere.

## Definizioni delle metriche

Le metriche seguenti descrivono il sistema SLO di un servizio. Le prime quattro sono il nucleo della pratica, e le ultime due descrivono la salute della pratica stessa. Ogni orologio e confine è indicato nella colonna della formula. Gli «eventi validi» sono gli eventi che contano per lo SLI dopo le esclusioni concordate nel documento SLO, come le richieste dei test di carico del team, che sono escluse.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rispetto dello SLI | La quota di eventi validi che sono stati buoni, per un indicatore di un servizio | eventi buoni / eventi validi, per la finestra dall'inizio alla fine del periodo di rendicontazione; gli eventi esclusi dal documento SLO (test di carico, manutenzione pianificata annunciata in anticipo, se lo SLO lo prevede) sono rimossi sia dal numeratore sia dal denominatore | percentuale | Telemetria del bilanciatore di carico, dell'applicazione o di sonde sintetiche; la piattaforma di monitoraggio o osservabilità | Gestione dei livelli di servizio; monitoraggio e gestione degli eventi | Definizione di completato per l'operabilità; riesame della salute del servizio con gli stakeholder | Continua, riportata ogni giorno e per finestra |
| Conformità allo SLO | Se lo SLI ha raggiunto l'obiettivo nella finestra SLO, e per quante finestre recenti | finestre in cui il rispetto dello SLI era pari o superiore all'obiettivo / finestre valutate, negli ultimi 12 mesi; una finestra ancora aperta è esclusa | percentuale di finestre | Storico del rispetto dello SLI | Gestione dei livelli di servizio; miglioramento continuo | Obiettivo del team o accordo di lavoro sull'affidabilità | Mensile, con un andamento trimestrale |
| Budget di errore residuo | La parte del budget non ancora spesa nella finestra corrente | 1 - (eventi cattivi finora / eventi cattivi ammessi per l'intera finestra), dove eventi cattivi ammessi = (1 - SLO) x eventi validi attesi per l'intera finestra; l'orologio parte all'inizio della finestra e si ferma alla sua fine | percentuale del budget | Rispetto dello SLI e previsione del volume | Gestione dei livelli di servizio; gestione del rischio | Verifica di prontezza al rilascio; input al lavoro pianificato | Giornaliera, riesaminata ogni settimana |
| Burn rate | La velocità con cui il budget viene speso rispetto al ritmo di spesa uniforme | (eventi cattivi / eventi validi in un periodo di osservazione) / (1 - SLO); il periodo di osservazione è dichiarato, per esempio 1 ora o 6 ore | rapporto (1 significa esattamente nel budget) | Telemetria dello SLI a risoluzione temporale fine | Monitoraggio e gestione degli eventi; gestione degli incidenti | Regole di allerta per la reperibilità; innesco dello swarming | Continua, valutata nelle regole di allerta |
| Aderenza alla politica del budget | Con quale frequenza è stata applicata la conseguenza concordata quando si è raggiunto un innesco della politica del budget di errore | inneschi nel periodo in cui l'azione prevista dalla politica è stata intrapresa entro il tempo concordato / inneschi raggiunti nel periodo; gli inneschi formalmente derogati con una motivazione registrata sono contati a parte, non rimossi | percentuale | Documento della politica, registro delle decisioni e storico del backlog | Gestione dei livelli di servizio; abilitazione delle modifiche | Accordo di lavoro; follow-through della retrospettiva | Trimestrale |
| Copertura SLO | La quota di percorsi utente critici, o di servizi inclusi, che hanno uno SLO aggiornato e uno SLI funzionante | servizi o percorsi inclusi con almeno uno SLO i cui dati SLI sono arrivati negli ultimi 7 giorni / servizi o percorsi inclusi; «inclusi» è elencato nel catalogo dei servizi (service catalogue nella terminologia ITIL) | percentuale | Catalogo dei servizi, registro SLO e configurazione del monitoraggio | Gestione del catalogo dei servizi; gestione dei livelli di servizio | Elenco dei servizi di proprietà del team | Trimestrale |

Il periodo di osservazione del burn rate e la finestra SLO sono scelte. Una finestra mobile di 28 giorni copre settimane intere. Dichiarare la scelta nel documento SLO e mantenerla stabile, altrimenti l'andamento sarà fuorviante.

## Raccomandazioni

### Scegliere gli indicatori in base a ciò che sta a cuore agli utenti

**1. Partire dai percorsi utente critici.** Elencare le tre-sei cose che un utente deve poter fare perché il servizio valga la pena di essere usato, come accedere, cercare, pagare e scaricare un estratto. Scrivere ciascuna come una frase dal punto di vista dell'utente. Poi scegliere lo SLI che mostra se quella frase era vera. In questo modo gli SLO restano pochi e si evita un catalogo di indicatori tecnici che nessuno legge.

**2. Esprimere ogni SLI come eventi buoni su eventi validi.** Un rapporto è facile da spiegare, facile da aggregare e facile da trasformare in un budget. Definire «buono» con una soglia che gli utenti accetterebbero, e definire «valido» in modo che il traffico che non si può ragionevolmente servire, come le richieste bloccate per abuso, sia escluso in modo documentato. Scrivere entrambe le definizioni nel documento SLO, perché il denominatore è dove si nascondono la maggior parte dei disaccordi.

**3. Misurare il più vicino possibile all'utente.** Un tasso di successo lato server può essere perfetto mentre un problema di rete o del client rende il servizio inutilizzabile. Misurare sul bilanciatore di carico o al perimetro, e aggiungere una sonda sintetica o una misurazione lato client per i percorsi più importanti. Ogni punto di misurazione ha un costo e un punto cieco, quindi registrare quale viene usato da ciascuno SLI (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»).

**4. Usare percentili per la latenza, con una soglia.** «Il 95 percento delle richieste di ricerca si completa in meno di 800 millisecondi» è uno SLI. «Latenza media» non lo è, perché poche richieste veloci possono compensarne molte lente. Dove utile, usare due soglie, come una mediana e un 99º percentile, poiché la coda lenta determina come il servizio viene percepito (si veda l'Argomento 5.4 «Metriche di capacità e prestazioni»).

### Fissare obiettivi che le persone possano difendere

**5. Fissare il primo SLO in base alle prestazioni attuali e al bisogno degli utenti, poi irrigidirlo.** Misurare lo SLI per alcune settimane, chiedere a utenti e personale di supporto quale livello notino e fissare un obiettivo che il servizio possa rispettare oggi con un certo margine. Un obiettivo fissato ben al di sopra delle prestazioni attuali è una violazione permanente, e le persone smettono di guardarlo. Un obiettivo fissato ben al di sotto di ciò che gli utenti ricevono lascia decadere la qualità senza che nessuno se ne accorga. Rivederlo dopo un trimestre.

**6. Mantenere lo SLO più stringente dello SLA, e tenerli separati.** Se un accordo con il cliente promette il 99,5 percento, l'obiettivo del team potrebbe essere il 99,9 percento, così il budget si esaurisce prima che la soglia contrattuale venga superata. Non rendere SLO e SLA lo stesso numero e non riportare l'uno come l'altro. L'accordo è un documento commerciale e giuridico, e l'obiettivo è una regola decisionale ingegneristica (si veda l'Argomento 5.1 «Metriche SLA, OLA e XLA»).

**7. Tenere conto delle dipendenze.** Un servizio non può essere più affidabile di ciò da cui dipende, a meno che non degradi con grazia. Elencare le dipendenze principali, compresi i fornitori, e chiedersi che cosa implichino le loro prestazioni effettive per il proprio obiettivo.

### Usare il budget come strumento decisionale

**8. Scrivere una politica del budget di errore prima di averne bisogno.** La politica dice che cosa accade a livelli di consumo definiti. Una versione semplice ha tre passi: funzionamento normale finché resta budget, riesame supplementare delle modifiche rischiose e priorità al lavoro sull'affidabilità quando è stata spesa una quota dichiarata, e sospensione dei rilasci di funzionalità non essenziali quando è esaurito, fino al ripristino del budget. Indicare chi può concedere una deroga e come viene registrata. I responsabili di prodotto e di operatività dovrebbero sottoscriverla entrambi, in modo che la politica si applichi in egual misura alle due parti.

**9. Spendere il budget di proposito.** Un budget che non viene mai toccato suggerisce che l'obiettivo sia troppo stringente o che il team sia troppo cauto. Usare il budget avanzato per esperimenti, cadenza di rilascio più rapida, rilasci canary e [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle) che permettono di sperimentare in produzione con esposizione limitata, e usare i [canary release](https://en.wikipedia.org/wiki/Canary_release) per individuare i problemi mentre è interessata solo una piccola quota di utenti. Trattare un budget costantemente intatto come un invito a chiedersi se l'obiettivo corrisponda a ciò di cui gli utenti hanno bisogno (si veda l'Argomento 4.5 «Metriche di rilascio e distribuzione»).

**10. Allertare su più burn rate.** Un consumo rapido, come un ritmo abbastanza alto da spendere una grossa quota del budget in un'ora, chiama una persona. Un consumo lento, come un ritmo modesto che comunque esaurirebbe il budget in pochi giorni, crea un ticket per l'orario di lavoro. Usare due o più finestre di osservazione intercetta sia i guasti improvvisi sia le perdite lente, e riduce le chiamate per brevi oscillazioni che costano poco budget. Il capitolo del Site Reliability Workbook sull'allerta sugli SLO spiega lo schema, e le soglie vanno tarate sul proprio servizio anziché copiate (si veda l'Argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi»).

**11. Collegare incidenti, problemi e apprendimento al budget.** Dopo un incidente, registrare quanto budget ha consumato accanto a durata e impatto. Usare quel numero per dare priorità al record del problema e alle azioni di follow-up (si veda l'Argomento 4.1 «Metriche di gestione dei problemi» e l'Argomento 4.2 «Metriche di postmortem e apprendimento»). Il costo in budget offre inoltre ai riesami degli incidenti maggiori un'unità comune per confrontare guasti molto diversi (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori»).

### Mantenere la pratica onesta e viva

**12. Riesaminare gli SLO rispetto alla realtà ogni trimestre.** Confrontare lo SLO con i contatti al supporto, i reclami e i risultati di soddisfazione. Se gli utenti sono insoddisfatti mentre lo SLO è verde, lo SLI è sbagliato o l'obiettivo è troppo lasco. Se lo SLO è rosso e nessuno si lamenta, l'obiettivo potrebbe essere troppo stringente. Registrare ogni modifica e il motivo, e mostrare la modifica nel grafico dell'andamento (si veda l'Argomento 6.2 «Experience level agreement»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Rispetto dello SLI | Restringere gli eventi «validi» finché i fallimenti scompaiono, per esempio escludendo le richieste ritentate o intere classi di errore; misurare solo il componente più sano; sondare solo da una posizione favorevole | Pubblicare la definizione dello SLI e le esclusioni nel documento SLO con un registro delle modifiche; confrontare lo SLI con i contatti al supporto e i reclami degli utenti; riesame regolare degli eventi esclusi e del loro volume |
| Conformità allo SLO | Fissare l'obiettivo abbastanza basso da essere sempre superato; cambiare la lunghezza della finestra dopo un periodo negativo; ridefinire una violazione come periodo di manutenzione | Obiettivo fissato con il contributo degli utenti e riesaminato secondo calendario; finestra fissata nel documento; numero di esclusioni e di modifiche non pianificate alla finestra riportato accanto alla conformità |
| Budget di errore residuo | Riclassificare eventi cattivi come esclusi; gonfiare il volume atteso in modo che il numero di eventi cattivi ammessi sembri maggiore; azzerare la finestra in anticipo | Eventi cattivi ammessi calcolati sul volume effettivo alla fine della finestra; volume degli eventi esclusi mostrato accanto al budget; date della finestra fissate in anticipo |
| Burn rate | Tarare le soglie di allerta perché il consumo non scatti mai; usare un periodo di osservazione così lungo che i consumi rapidi si mediano | Test di copertura delle allerte su incidenti passati («questa regola avrebbe chiamato?»); tasso di avvisi azionabili e numero di mancati rilevamenti (si veda l'Argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi») |
| Aderenza alla politica del budget | Concedere deroghe di routine; scrivere una politica con inneschi mai raggiungibili; contare un ticket simbolico di affidabilità come azione della politica | Deroghe contate e riesaminate separatamente; quota di deroghe nel periodo; lavoro di affidabilità completato (si veda l'Argomento 4.1 «Metriche di gestione dei problemi») |
| Copertura SLO | Aggiungere uno SLO banale a ogni servizio per alzare la percentuale; contare un percorso come coperto quando non arrivano dati | Verifica dell'aggiornamento dei dati SLI (dati arrivati negli ultimi 7 giorni); verifica che lo SLO copra un percorso critico, non un endpoint secondario |

Una lettura sana mostra uno SLI che segue ciò che gli utenti riferiscono, un obiettivo a volte mancato e a volte rispettato con margine, e un budget speso di proposito. La politica viene applicata quando il suo innesco scatta, le deroghe sono rare e registrate, e ogni modifica di definizione è visibile nel grafico. Un servizio che ha sempre il 100 percento del budget residuo, o uno che è sempre in violazione, merita una conversazione sull'obiettivo, non lodi o biasimo. Ricordare che qualsiasi singola cifra è uno spunto per una domanda (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| SLI sui percorsi utente | Corrispondono a ciò che gli utenti percepiscono; pochi; facili da spiegare ai non ingegneri | Richiedono impegno per la strumentazione end-to-end; possono non cogliere guasti interni non ancora arrivati agli utenti |
| SLI su componenti o risorse (CPU, memoria, profondità delle code) | Economici da raccogliere; utili per diagnosi e capacità | Scarsi sostituti dell'esperienza utente; producono molti avvisi irrilevanti |
| Finestra mobile | Fluida; nessun salto a fine mese; sempre aggiornata | Più difficile da spiegare ai dirigenti rispetto a un mese di calendario; un giorno negativo persiste per tutta la finestra |
| Allerta sul burn rate | Chiama quando l'obiettivo è davvero a rischio; meno falsi allarmi | Più complessa da configurare e testare; le soglie vanno tarate per servizio |

Scegliere pochi SLI, fissarli con gli utenti e lasciare che sia il budget a decidere il ritmo del cambiamento. La giusta severità è l'obiettivo più lasco che mantenga comunque soddisfatti gli utenti, dato che ogni «nove» in più costa più del precedente.

## Domande da discutere con il team

**1. Che cosa deve poter fare un utente di questo servizio, e come sapremmo se non potesse?**
Chiedere a ciascuno di scrivere le tre cose più importanti che un utente fa con il servizio, senza guardare alcuna dashboard. Confrontare gli elenchi e annotare le differenze tra prodotto, operatività e supporto. Poi chiedere quale di quei percorsi abbia attualmente uno SLI. Il facilitatore dovrebbe cercare percorsi importanti senza misurazione e misurazioni che non descrivono alcun percorso.

**2. Se il nostro SLO fosse il 99,9 percento e lo rispettassimo, gli utenti sarebbero soddisfatti, e come lo sappiamo?**
Affiancare lo SLO attuale agli ultimi tre mesi di contatti al supporto, reclami e risultati di soddisfazione. Chiedere se concordano. Se lo SLO è verde e gli utenti sono insoddisfatti, lo SLI o l'obiettivo vanno rivisti. Se gli utenti sono soddisfatti e lo SLO è rosso, l'obiettivo potrebbe essere più stringente del necessario. Concordare un'azione per far coincidere obiettivo ed esperienza.

**3. Che cosa faremmo davvero di diverso se il budget di errore si esaurisse?**
Leggere ad alta voce la politica del budget di errore attuale, oppure redigerne una insieme se non esiste. Chiedere chi fermerebbe che cosa e chi ha l'autorità di concedere una deroga. Il facilitatore dovrebbe insistere su azioni concrete, come sospendere i rilasci non essenziali e assegnare persone indicate per nome al lavoro sull'affidabilità, anziché su intenzioni generiche. Una politica che nessuno crede verrà seguita è peggio di nessuna politica.

**4. Quando abbiamo corso un rischio perché avevamo budget da spendere?**
Discutere se il team usi il proprio budget o si limiti a custodirlo. Guardare l'ultimo trimestre: c'è stato un periodo in cui il budget era quasi intatto mentre i rilasci erano lenti? Chiedere che cosa il team avrebbe provato se avesse saputo che era sicuro farlo. Questa domanda fa emergere l'eccesso di cautela, e la risposta spesso indica un rilascio canary, un toggle o una pipeline più veloce che consentirebbe al team di usare bene il proprio budget.

**5. Quali dei nostri avvisi sarebbero scattati in tempo per il nostro ultimo incidente grave, e quali sarebbero scattati per nulla?**
Prendere l'ultimo incidente significativo e rieseguire su di esso lo storico degli avvisi. Contare le chiamate arrivate, quanto tempo dopo l'inizio dell'impatto e quante chiamate sono arrivate per eventi che costavano quasi nulla in budget. Discutere se gli avvisi sul burn rate avrebbero fatto meglio. L'obiettivo è un breve elenco di modifiche agli avvisi, ciascuna con un responsabile, e non una discussione colpevolizzante su chi fosse reperibile.

**6. Chi è responsabile di ciascuno SLO, e quando ne abbiamo modificato uno per scelta l'ultima volta?**
Elencare gli SLO e scrivere accanto a ciascuno il responsabile, come team o ruolo. Chiedere quando ciascuno è stato riesaminato l'ultima volta e che cosa è cambiato. Uno SLO che nessuno tocca da un anno è segno che non informa più le decisioni. Concordare una data di riesame per ciascuno, e concordare chi ha il diritto di ritirare uno SLO che ha smesso di essere utile.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna ottengono una regola chiara su quanto velocemente muoversi. Quando c'è budget, possono rilasciare più spesso e provare modifiche più audaci. Quando è basso, inseriscono nel backlog il lavoro sull'affidabilità senza una lunga trattativa. Dovrebbero contribuire a scegliere gli indicatori perché sanno quali percorsi contano, e dovrebbero strumentare le nuove funzionalità tenendo presente lo SLI fin dall'inizio (si veda l'Argomento 2.8 «Metriche DORA»). Il budget è una risorsa del team con cui pianificare, mai un numero da nascondere.

### Team di servizio e operations

I team operativi usano gli SLO per decidere che cosa merita una chiamata e che cosa può attendere il mattino. L'allerta sul burn rate riduce il rumore e lega il lavoro di reperibilità a ciò che gli utenti percepiscono (si veda l'Argomento 5.7 «Metriche di toil e reperibilità»). Mantengono oneste le definizioni degli SLI, curano la telemetria che le sostiene e registrano il costo in budget nei record di incidenti e problemi.

### Leadership e governance

I dirigenti dovrebbero porsi tre domande: qual è l'obiettivo, quanto budget resta e che cosa faremo se si esaurisce? Sottoscrivono la politica del budget di errore e sostengono il team quando la politica dice di rallentare. Evitano di trasformare la conformità agli SLO in una metrica premiante, che invita a restringere le definizioni e a fissare obiettivi morbidi.

### Clienti e utenti

I clienti traggono beneficio quando l'obiettivo riflette ciò di cui hanno bisogno e quando possono vedere come il servizio si comporta rispetto ad esso. Vanno consultati quando l'obiettivo viene fissato, perché la loro tolleranza a lentezza o interruzioni varia per compito e per ora del giorno. Le misure di esperienza, come soddisfazione e sforzo, verificano se lo SLO coglie ciò che essi percepiscono (si veda l'Argomento 6.1 «Metriche di soddisfazione del cliente»).

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni ha un team di checkout, un team di piattaforma e un service desk. Il servizio di checkout è critico per il business. Tutti i numeri di questo esempio sono illustrativi.

Il team definisce uno SLI per il percorso «pagare un ordine»: la quota di richieste di pagamento valide che restituiscono un successo entro 2 secondi, misurata sul bilanciatore di carico. Le richieste valide escludono i test di carico del team e le richieste che il servizio antifrode rifiuta per progetto. Lo SLO è il 99,9 percento su 28 giorni mobili. La finestra prevede 12.000.000 di richieste valide, quindi il budget è di 12.000 richieste cattive (0,1 percento). La politica del budget di errore, sottoscritta dal responsabile del prodotto e dal responsabile della piattaforma, ha tre livelli: al 50 percento del budget speso, le modifiche rischiose richiedono un secondo revisore e un rilascio canary; al 75 percento, il lavoro sull'affidabilità ha priorità nella successiva conversazione di pianificazione; al 100 percento, i rilasci di funzionalità non essenziali sono sospesi finché il budget non si ricostituisce.

Al giorno 10 della finestra il team vede 7.800 richieste cattive su circa 4.285.714 attese finora, il che dà un rispetto dello SLI di circa il 99,82 percento, il 65 percento del budget speso e una finestra trascorsa solo per il 36 percento. Il burn rate nel periodo è di circa 1,8, quindi a questo ritmo il budget si esaurisce intorno al giorno 15. Un rilascio difettoso ha causato 5.000 dei fallimenti. Il record dell'incidente mostra che il guasto è durato 22 minuti, il riesame dell'incidente maggiore individua un controllo mancante nella pipeline e il costo in budget dell'incidente viene registrato nel record del problema (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»).

Il team segue la politica. L'azione del secondo livello si applica subito, quindi le modifiche rischiose richiedono un rilascio canary, e la riunione di pianificazione porta il controllo della pipeline in cima alla coda di lavoro. Il responsabile del prodotto accetta la sospensione di una funzionalità promozionale non urgente. Al giorno 28 il budget è speso al 94 percento, e il team chiude la finestra entro l'obiettivo.

Il rischio di manipolazione emerge nel riesame. Un altro team, che gestisce il servizio di ricerca del rivenditore, ha riportato il 99,95 percento per il trimestre mentre il service desk registrava un aumento dei contatti «la ricerca non funziona». Indagando, il team di piattaforma ha scoperto che il team della ricerca aveva ridefinito «valido» per escludere le richieste ritentate entro 5 secondi, il che eliminava molti fallimenti reali. Il riesame ha ripristinato la definizione originale, ha riformulato il trimestre e ha aggiunto due salvaguardie: ogni modifica a una definizione viene registrata nel documento SLO con una motivazione, e il rispetto dello SLI viene confrontato ogni mese con i contatti al supporto. Nessuno ha mentito, poiché la modifica era stata fatta per ridurre il rumore, quindi la correzione è stata una definizione più chiara, non un rimprovero.

## Lente di settore

**Startup.** Partire con uno SLO per il percorso più importante, misurato al perimetro, con una politica semplice che stia in una pagina. Non costruire una piattaforma per decine di SLO. Il budget aiuta un piccolo team a discutere meno sull'opportunità di rilasciare di venerdì.

**Piccola impresa.** Una piccola impresa si affida spesso a strumenti e fornitori in hosting, quindi lo SLI può provenire dai dati di stato di un fornitore o da una semplice sonda esterna. Leggere per iscritto i livelli di servizio del fornitore e verificarli rispetto alle proprie esigenze.

**Grande impresa.** Molti servizi, team e fornitori alzano la posta in gioco in termini di coerenza. Fornire un modello condiviso per i documenti SLO, un registro comune e un modo standard per calcolare rispetto e budget, così che i dirigenti possano confrontare e aggregare senza discutere sulle definizioni. Mantenere lo SLO di proprietà del team di servizio e il registro curato centralmente.

**Governo e settore pubblico.** I servizi devono spesso rispettare obiettivi normativi o pubblicati, e un fallimento può essere reso noto pubblicamente. Tenere separato l'impegno contrattuale o normativo dall'obiettivo interno e assicurarsi che lo SLO interno sia più stringente. Documentare la definizione dello SLI, le esclusioni e la provenienza dei dati per l'audit, e pianificare l'accessibilità e gli utenti che non possono scegliere un altro fornitore (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

La motivazione è meno discussioni e decisioni migliori sull'affidabilità. Senza un obiettivo, il lavoro sull'affidabilità compete con le funzionalità in base a chi discute con più forza. Con un obiettivo e un budget, il compromesso è visibile e concordato in anticipo, e gli utenti ottengono un servizio affidabile quanto serve loro, senza che il team paghi per un'affidabilità superiore.

Il costo ha quattro parti. La prima è la progettazione: workshop per scegliere percorsi, indicatori e obiettivi, e per scrivere la politica. La seconda è la strumentazione: telemetria nel punto giusto, sonde e la pipeline che trasforma gli eventi in rispetto e budget (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»). La terza è l'esercizio: regole di allerta, una dashboard, un riesame trimestrale e il tempo per mantenere aggiornate le definizioni. La quarta è il costo opportunità quando la politica sospende il lavoro sulle funzionalità, che è il costo di onorare l'accordo e la ragione per concordarlo prima che arrivi la pressione.

Il ritorno si manifesta in schemi che un team può tracciare da sé: meno chiamate che non richiedevano azione, dibattiti più brevi sull'opportunità di rilasciare, lavoro di affidabilità pianificato prima che il budget si esaurisca anziché dopo un incidente maggiore, e meno sorprese per i clienti. Descrivere il beneficio confrontando le cifre del team prima e dopo, come le chiamate per rotazione e la quota di budget consumata dall'incidente maggiore.

## Anti-pattern e insidie

- **Troppi SLO.** Decine di obiettivi diluiscono l'attenzione, e nessuno sa dire quale conti. Partire dai percorsi utente critici e ritirare il resto.
- **SLO uguale a SLA.** Riportare un numero come entrambi elimina il margine di sicurezza e mescola una regola ingegneristica con una promessa commerciale. Mantenere l'obiettivo più stringente dell'accordo.
- **Una politica mai applicata.** Se il budget si esaurisce e nulla cambia, la pratica perde credibilità. Far sottoscrivere la politica ai dirigenti e registrare ogni deroga con la sua motivazione.
- **Usare il budget come tabellone di punteggio per le persone.** Classificare ingegneri o personale reperibile in base al budget speso induce a nascondere gli incidenti e a restringere le definizioni. Attribuire il budget al servizio e discutere le cause a livello di sistema (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).
- **Allertare su ogni calo.** Chiamare sui sintomi grezzi crea affaticamento da avvisi e abitua le persone a ignorare le chiamate. Chiamare sul burn rate e inviare i consumi lenti ai ticket.
- **Impostare e dimenticare.** Uno SLO che nessuno riesamina si allontana da ciò di cui gli utenti hanno bisogno. Pianificare un riesame trimestrale e registrare che cosa è cambiato e perché.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Indicatori e obiettivi | Affidabilità descritta a parole; si riporta l'uptime dei server | Alcuni team definiscono SLI; gli obiettivi variano e sono raramente riesaminati | I percorsi utente critici hanno SLI e SLO documentati in un modello condiviso | Gli SLO sono tracciati nel tempo, confrontati con il feedback degli utenti e irrigiditi o allentati con evidenze | Gli SLO sono concordati con clienti e fornitori e allineati ai servizi dipendenti e ai contratti |
| Budget di errore e politica | Nessun budget; affidabilità contro funzionalità decisa a colpi di discussione | Un budget è calcolato per pochi servizi; nessuna conseguenza concordata | Una politica scritta, sottoscritta da prodotto e operatività, con inneschi definiti | Aderenza alla politica misurata, deroghe riesaminate, il budget informa la pianificazione dei rilasci | Decisioni sul budget coordinate tra i team che condividono dipendenze; politica rivista al mutare delle condizioni |
| Allerta e risposta | Allerte a soglia sulle risorse grezze; molte chiamate | Alcune allerte sul burn rate; soglie copiate da esempi | Allerte sul burn rate a più finestre per gli SLO chiave, con ticket per i consumi lenti | Qualità delle allerte misurata e tarata usando incidenti passati | Allerte allineate lungo le catene di servizi, con miglioramento guidato da riesami congiunti |

## Checklist

- [ ] I percorsi utente critici del servizio sono elencati, ciascuno scritto dal punto di vista dell'utente.
- [ ] Ogni SLI è definito come eventi buoni su eventi validi, con le esclusioni scritte.
- [ ] Gli SLI di latenza usano percentili e una soglia dichiarata, non medie.
- [ ] Ogni SLO indica il proprio obiettivo, la propria finestra e dove viene misurato lo SLI.
- [ ] Lo SLO è più stringente di qualsiasi SLA, e i due sono riportati separatamente.
- [ ] Esiste una politica del budget di errore, sottoscritta dai responsabili di prodotto e di operatività, che indica chi può concedere deroghe.
- [ ] Le allerte sul burn rate usano almeno due periodi di osservazione, e i consumi lenti creano ticket anziché chiamate.
- [ ] Ogni record di incidente mostra il budget che ha consumato.
- [ ] Il rispetto dello SLI è confrontato ogni mese con i contatti al supporto e i risultati di soddisfazione.
- [ ] Ogni SLO ha un responsabile (un team o un ruolo) e una data di riesame, e le modifiche sono registrate con le motivazioni.
- [ ] Nessun risultato SLO è usato per classificare o premiare singole persone.

## Prompt IA

**Redigere SLI candidati a partire dai percorsi utente.**

```text
Gestisco [nome del servizio], usato da [tipo di utenti] per svolgere [elenco
dei percorsi utente critici]. Possiamo misurare in [elenco dei punti di
misurazione, per esempio bilanciatore di carico, log applicativi, sonda
sintetica]. Per ciascun percorso, proponi uno o due SLI candidati scritti come
eventi buoni su eventi validi, con una definizione suggerita di «buono»,
«valido» ed esclusioni. Indica i punti di forza e i punti ciechi di ciascun
punto di misurazione. Non inventare valori obiettivo né riferimenti; chiedimi
che cosa tollerano gli utenti. Elenca le tue ipotesi.
```

**Redigere una politica del budget di errore.**

```text
Aiutami a redigere una politica del budget di errore per [nome del servizio]
con uno SLO di [obiettivo] su [finestra]. Gli stakeholder sono [ruolo di
prodotto] e [ruolo di operatività]. Proponi i livelli di innesco, l'azione a
ciascun livello, chi può concedere una deroga e come viene registrata, e come
viene riesaminata la politica. Mantienila in una pagina e segnala le decisioni
che richiedono uno sponsor umano. Non inventare soglie di altre organizzazioni;
presenta opzioni e compromessi. Elenca le tue ipotesi.
```

**Esaminare uno SLO per il rischio di manipolazione.**

```text
Ecco il nostro documento SLO per [nome del servizio]: [incollare definizione
dello SLI, esclusioni, obiettivo, finestra e registro delle modifiche].
Individua i modi in cui lo SLI potrebbe essere ristretto, la finestra o
l'obiettivo modificati, o gli eventi esclusi in modo da far apparire i
risultati migliori dell'esperienza degli utenti. Per ogni rischio, suggerisci
una metrica o pratica di salvaguardia. Non presumere intenzioni. Elenca le tue
ipotesi e le domande a cui dovrei rispondere.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per individuare gli argomenti correlati, come disponibilità, qualità degli avvisi e incidenti maggiori, e la salvaguardia che dovrebbe affiancare ciascuna misura SLO.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che le modifiche a questo argomento mantengano ogni metrica nella tabella di manipolazione e ogni riferimento incrociato con il proprio titolo.

## Punti chiave

- Scegliere pochi SLI in base a ciò che gli utenti fanno, ed esprimere ciascuno come eventi buoni su eventi validi.
- Uno SLO inferiore al 100 percento è una decisione sul rischio, e il budget di errore è lo spazio che quella decisione lascia al cambiamento.
- Scrivere la politica del budget di errore in anticipo, sottoscriverla a livello dirigenziale e registrare ogni deroga.
- Allertare sul burn rate con più di una finestra di osservazione, così che le chiamate riflettano un rischio reale per l'obiettivo.
- Proteggere le definizioni: registrare ogni modifica e confrontare i risultati degli SLI con ciò che gli utenti riferiscono.
- Attribuire il budget a servizi e team, mai a singole persone, e riesaminare ogni SLO almeno una volta a trimestre.

## Riferimenti e letture di approfondimento

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Jones, C., Wilkes, J., Murphy, N., and Smith, C., "Service Level Objectives," chapter 4 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/service-level-objectives/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. "Implementing SLOs," chapter 2 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/implementing-slos/
5. "Alerting on SLOs," chapter 5 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/alerting-on-slos/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
9. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
10. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Availability](https://en.wikipedia.org/wiki/Availability).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
