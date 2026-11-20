# Inflazione delle metriche e diluizione della qualità

**Quando l'IA rende economici volume e velocità, ogni metrica che conta volume e velocità si gonfia: si abbini dunque ciascuna a una misura di utilità verificata da una persona e si osservi se il segnale nei propri dati sta venendo sommerso.**

## Panoramica e motivazione

Una metrica funziona perché riflette qualcosa che è difficile da produrre. I ticket risolti riflettono impegno. I documenti scritti riflettono conoscenza. I test aggiunti riflettono cura. Quando uno strumento rende quasi gratuito l'output visibile, il legame tra output e impegno si spezza. I numeri continuano a salire e il significato si svuota. È l'inflazione delle metriche, e il suo compagno è la diluizione della qualità: la quota di ciò che viene prodotto che è utile diminuisce, e la parte utile diventa più difficile da trovare.

Non è un problema nuovo. La [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) e la sua parente [legge di Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) descrivono come le misure usate per il controllo vengano corrotte. Una [metrica di vanità](https://en.wikipedia.org/wiki/Vanity_metric) appare impressionante e non dice nulla sulla salute del lavoro. Ciò che l'IA cambia è la velocità e la scala con cui l'output può essere generato, e con esse la velocità e la scala con cui possono verificarsi questi vecchi fallimenti. Un team che un tempo gonfiava un conteggio a mano può ora farlo in pochi minuti, spesso senza volerlo.

Diversi schemi ricorrono nel lavoro di servizio e di consegna.

- **Inflazione di volume.** L'IA redige più ticket, più risposte, più commenti, più casi di test, più documenti e più codice. I conteggi di queste cose salgono. Salgono anche i carichi di lavoro di chi deve leggerle, rivederle e mantenerle.
- **Inflazione di velocità.** Il tempo fino alla prima bozza scende nettamente, mentre il tempo fino a un risultato finito e verificato scende meno, o non scende affatto. Una dashboard che riporta il primo racconta una storia lusinghiera.
- **Rumore.** Più contenuti competono per l'attenzione. Il [sovraccarico informativo](https://en.wikipedia.org/wiki/Information_overload) è la condizione in cui una persona non riesce a elaborare il volume di informazioni presentate, e il [rapporto segnale-rumore](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) della base di conoscenza, della coda dei ticket o del flusso di avvisi diminuisce. L'[alert fatigue](https://en.wikipedia.org/wiki/Alert_fatigue) ne è la forma operativa (si veda l'argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi»).
- **Contenuti generati di bassa qualità.** I contenuti prodotti in blocco con poca revisione, talvolta chiamati [AI slop](https://en.wikipedia.org/wiki/AI_slop), sono plausibili e poveri. Una base di conoscenza alimentata da tali articoli diventa meno affidabile, e gli utenti imparano a diffidarne.
- **Costo di verifica.** Lo sforzo per controllare un'affermazione è spesso molto maggiore di quello per formularla, uno schema talvolta chiamato [legge di Brandolini](https://en.wikipedia.org/wiki/Brandolini%27s_law). Quando la generazione è economica, la verifica diventa il collo di bottiglia.
- **Efficienza che aumenta il consumo.** Il [paradosso di Jevons](https://en.wikipedia.org/wiki/Jevons_paradox) descrive i casi in cui guadagni di efficienza portano a un maggiore utilizzo di una risorsa, non a un minore. Se redigere un rapporto diventa economico, si richiedono più rapporti. Il tempo risparmiato da uno strumento può essere consumato da più lavoro di minor valore.
- **Cicli di retroazione.** Se il contenuto generato alimenta il ciclo successivo di generazione, gli errori si accumulano. La letteratura di ricerca descrive il [collasso del modello](https://en.wikipedia.org/wiki/Model_collapse) nei modelli addestrati sui propri output. Un ciclo analogo può verificarsi all'interno di un'organizzazione quando un assistente sintetizza ticket scritti da un assistente a partire da articoli che un assistente ha sintetizzato.
- **Basi di riferimento alla deriva.** Se la distribuzione dei dati cambia a causa dell'IA, tendenze e soglie non significano più ciò che significavano. Ciò somiglia al [concept drift](https://en.wikipedia.org/wiki/Concept_drift) nell'apprendimento automatico, in cui il rapporto tra input e risultati cambia nel tempo. Un aumento del volume di ticket può riflettere una creazione più facile dei ticket, non più problemi.

Gli obiettivi agili contano qui. Consegna continua, miglioramento continuo e ritmo sostenibile dipendono tutti dalla chiarezza del segnale. Non si dovrebbe chiedere a persone motivate di guadare rumore generato dalle macchine o di verificare cumuli di output a un ritmo insostenibile. Gli stakeholder coinvolti in modo continuo sono anche la migliore difesa: vi diranno quando i rapporti non servono più.

Questo argomento fornisce le misure per accorgersi di inflazione e diluizione, e gli abbinamenti che le mettono in luce. Si fonda sui fondamenti e sulle misure del lavoro assistito (si vedano l'argomento 10.1 «L'IA nella misurazione della gestione dei servizi» e l'argomento 10.2 «Misurare il lavoro assistito dall'IA»).

## Principi chiave

- **Abbinare ogni metrica di volume o di velocità a un controllo di utilità.** Una persona giudica se l'output è utile.
- **Misurare fino a un risultato finito e verificato.** La velocità della prima bozza è una trappola.
- **Osservare l'onere di verifica.** Cresce in silenzio e consuma il tempo risparmiato.
- **Proteggere il segnale.** Si mantengano base di conoscenza, code e avvisi abbastanza puliti da potersene fidare.
- **Spezzare i cicli di retroazione.** Non si lasci che il contenuto generato alimenti la generazione senza revisione.
- **Ridefinire la base di riferimento quando i dati cambiano.** Le tendenze a cavallo di un cambio tecnologico richiedono cautela.
- **Preferire meno output, ma migliori.** Meno può essere più quando l'attenzione è la risorsa limitante.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rapporto output-risultato | Volume di output rispetto al risultato che avrebbe dovuto produrre | conteggio degli output (ticket, articoli, modifiche) / misura del risultato (problemi risolti, articoli usati, modifiche persistenti), nello stesso periodo, seguito come tendenza | rapporto | Tracciatore del lavoro, base di conoscenza, misure di risultato | Miglioramento continuo; misurazione e rendicontazione | Software funzionante al posto del volume di documentazione | Mensile |
| Quota di elementi utili | Quota degli elementi campionati giudicati utili da un revisore qualificato | elementi campionati giudicati utili (corretti, pertinenti, non duplicati) / elementi campionati | percentuale | Revisione di un campione casuale | Gestione della conoscenza; assicurazione della qualità | Definition of done per i contenuti | Mensile |
| Onere di verifica | Tempo umano speso per controllare e correggere il lavoro generato per unità di output | ore di revisione e correzione / unità di output, seguito come tendenza | ore per unità | Stime dei tempi, dati dello strumento di revisione | Gestione finanziaria del servizio; miglioramento continuo | Capacità di revisione come vincolo | Mensile |
| Tasso di ridondanza dei contenuti | Quota degli elementi di conoscenza che duplicano o si sovrappongono in modo sostanziale a un altro | elementi segnalati come duplicati o sovrapposti in revisione o tramite corrispondenza / elementi nella base di conoscenza | percentuale | Revisione della base di conoscenza, rapporti di corrispondenza | Gestione della conoscenza | Unica fonte di verità | Trimestrale |
| Quota di conoscenza generata sottoposta a revisione | Quota degli elementi di conoscenza generati dall'IA che una persona qualificata ha rivisto e approvato prima della pubblicazione | elementi generati pubblicati con revisione approvata / elementi generati pubblicati | percentuale | Metadati della base di conoscenza | Gestione della conoscenza; abilitazione delle modifiche | Revisione prima del rilascio | Mensile |
| Afflusso nel backlog rispetto alla risoluzione | Crescita del lavoro in arrivo rispetto alla crescita del lavoro risolto, per le code influenzate dall'IA | (variazione degli elementi creati) / (variazione degli elementi risolti), confrontata con la base di riferimento precedente all'IA | rapporto | Storico di ticket e tracciatore | Gestione degli incidenti; gestione delle richieste di servizio | Equilibrio del flusso | Mensile |
| Segnalazioni di deriva delle metriche | Numero di metriche la cui definizione o distribuzione è cambiata in modo percepibile dopo l'introduzione dell'IA, riesaminate e annotate | metriche segnalate in revisione / metriche nel registro | conteggio; percentuale | Revisione del registro delle metriche, controlli di distribuzione | Misurazione e rendicontazione | Retrospettiva sulla misurazione | Trimestrale |

Si definisca «utile» in una griglia scritta: corretto, pertinente a un bisogno reale, non duplicato e aggiornato. L'onere di verifica conta il tempo speso dalle persone, incluso il tempo per formulare di nuovo il prompt, ed esclude il tempo di sola attesa. La quota sottoposta a revisione è un controllo: la conoscenza generata non rivista è seguita separatamente e mantenuta con un'etichetta ben visibile. Le segnalazioni di deriva delle metriche sono discussioni, non sanzioni: una segnalazione significa che una persona ha deciso se adeguare la definizione, annotare la tendenza o ridefinire la base di riferimento. Tutte le misure descrivono processi e contenuti, non individui.

## Raccomandazioni

### Abbinare il volume all'utilità

**1. Integrare un controllo di utilità in ogni metrica di volume.** Per ogni misura di volume o di velocità presente nella dashboard, si indichi una misura di utilità giudicata da una persona. I ticket creati si abbinano alla qualità della risoluzione, gli articoli scritti all'uso e all'accuratezza degli articoli, le modifiche integrate a persistenza e rilavorazione (si veda l'argomento 10.2 «Misurare il lavoro assistito dall'IA»). Le si mostri insieme e si discuta quando divergono.

**2. Campionare e giudicare con regolarità.** Ogni mese si estragga un campione casuale di elementi dai flussi che l'IA tocca e lo si faccia giudicare da una persona qualificata rispetto a una griglia scritta. Si registrino la quota di utili e i motivi per cui gli elementi falliscono. Si facciano ruotare i revisori e li si mantenga indipendenti dai produttori. Il campionamento è la principale difesa contro la diluizione lenta.

**3. Riportare i risultati prima degli output.** Nei rapporti alla direzione, si apra con i risultati: problemi risolti, utenti soddisfatti, difetti evitati. Si pongano dopo i conteggi di output, come contesto. Se il rapporto sarebbe comunque prezioso senza i conteggi di output, è orientato bene.

### Controllare verifica e rumore

**4. Misurare l'onere di verifica.** Si stimi il tempo speso a controllare e correggere il lavoro generato e lo si segua come tendenza per unità di output. Se cresce al crescere dell'output, il guadagno netto è minore di quanto suggeriscano i numeri di generazione, e i revisori possono essere sulla via del sovraccarico. Si includa l'onere nel costo per compito (si veda l'argomento 10.1 «L'IA nella misurazione della gestione dei servizi»).

**5. Limitare ciò che entra nel sistema.** Si decida quale contenuto generato possa essere creato e pubblicato automaticamente e quale richieda revisione. Si fissino limiti alla dimensione e al numero di modifiche generate in una stessa revisione. Si renda facile dire no al volume. Una coda più piccola con elementi più chiari serve meglio gli utenti.

**6. Gestire la base di conoscenza come un prodotto.** Si etichetti il contenuto generato, si richieda la revisione prima della pubblicazione, si ritirino i duplicati e gli elementi obsoleti e si seguano ridondanza e uso. Una base di conoscenza è utile in proporzione a quanto gli utenti si fidano. Si rimuovano gli articoli che nessuno usa e di cui nessuno può rispondere (si veda l'argomento 3.6 «Metriche di gestione della conoscenza»).

**7. Mantenere puliti i flussi di avvisi e di ticket.** Se l'IA crea ticket da avvisi o sintesi, si misurino la quota utile e i duplicati. Si regoli con decisione. Si tratti un rapporto segnale-rumore in calo come un incidente a sé stante, poiché danneggia la risposta quando arriva un guaio vero.

### Spezzare i cicli e osservare la base di riferimento

**8. Impedire che il contenuto generato si alimenti da solo senza controllo.** Dove un assistente attinge a una base di conoscenza, a uno storico di ticket o a rapporti passati, ci si assicuri che il materiale generato in quelle fonti sia stato rivisto, oppure sia etichettato e ponderato di conseguenza. Si campioni la catena: si scelga una risposta e la si ripercorra a ritroso attraverso le fonti per vedere da dove proviene. I cicli non controllati amplificano gli errori.

**9. Ridefinire la base di riferimento quando i dati cambiano.** Dopo l'introduzione dell'IA, si annotino i grafici di tendenza e, dove la natura dei dati è cambiata, si avvii una nuova base di riferimento. Si controllino le distribuzioni, non solo i totali: lunghezza dei ticket, composizione per categoria e tempo di creazione possono tutti cambiare. Le segnalazioni di deriva delle metriche stimolano queste conversazioni (si veda l'argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

**10. Cercare l'effetto rimbalzo.** Quando un compito diventa più economico, ci si chieda se la domanda per esso crescerà. Si decida in anticipo come usare il tempo risparmiato, così che non venga assorbito da più output di scarso valore. Un team che produce il doppio dei rapporti con lo stesso impegno può star facendo un lavoro meno utile.

### Mantenere l'attenzione umana nel ciclo

**11. Proteggere l'attenzione di revisori e utenti.** Capacità di revisione e attenzione sono scarse. Si riduca il volume di materiale che le persone devono leggere, si diano ai revisori carichi realistici e si chieda loro che cosa stia diventando più difficile. Un ritmo sostenibile comprende il ritmo del leggere e del giudicare (si veda l'argomento 9.2 «Metriche di soddisfazione e benessere»).

**12. Chiedere a utenti e stakeholder se il segnale è chiaro.** Il coinvolgimento continuo di chi usa gli output è la prova migliore. Si chieda se la base di conoscenza sia più facile o più difficile da usare, se i rapporti dicano loro ciò che serve, se la coda sembri più chiara. Le loro risposte, e i loro commenti, vanno lette accanto ai numeri.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Rapporto output-risultato | Scegliere una misura di risultato che sale con il volume; cambiare il periodo | Risultato fissato nel registro; confrontare con soddisfazione e tasso di riapertura |
| Quota di elementi utili | Campionare elementi facili; griglia indulgente; revisori influenzati dal produttore | Campione casuale; griglia scritta; revisori indipendenti e a rotazione |
| Onere di verifica | Non registrare il tempo di revisione; spostare il controllo sui team a valle | Includere la rilavorazione a valle; chiedere ai revisori del carico |
| Tasso di ridondanza dei contenuti | Regole di corrispondenza ristrette che mancano i duplicati; fondere elementi distinti | Campionare a mano i duplicati; registrare le regole di fusione |
| Quota di conoscenza generata sottoposta a revisione | Segnare la revisione come completa senza leggere; rivedere in blocco | Campionare le revisioni per la sostanza; tempo per revisione; tasso di errore negli elementi pubblicati |
| Afflusso nel backlog rispetto alla risoluzione | Chiudere automaticamente gli elementi; dividere gli elementi | Verificare la qualità della risoluzione; tasso di riapertura; campionare gli elementi chiusi |
| Segnalazioni di deriva delle metriche | Non segnalare per evitare lavoro; segnalare tutto | Riesaminare tutte le metriche ogni trimestre; richiedere una decisione per ogni segnalazione |

Una lettura sana è questa: una quota di elementi utili stabile o in crescita al crescere del volume, un onere di verifica noto e sostenibile, una base di conoscenza con bassa ridondanza e contenuto generato rivisto, code con un segnale chiaro e una visione della direzione che apre con i risultati.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Contare gli output | Facile, familiare | Si gonfia; premia il volume |
| Misurare i risultati | Riflette il valore | Più lento; più difficile da attribuire |
| Campionare e giudicare | Rileva la diluizione | Richiede revisori competenti; impegno |
| Punteggio automatico della qualità | Scalabile | Opinione di un altro modello; può condividere gli stessi punti ciechi |
| Rivedere tutto ciò che è generato | Sicuro | Elimina il beneficio; revisori sovraccarichi |
| Rivedere un campione | Pratico | Alcuni elementi scadenti passano |
| Consentire la generazione aperta | Rapida, ampia | Rumore; la fiducia si erode |
| Limitare la generazione agli usi approvati | Segnale più pulito | Adozione più lenta; benefici mancati |

La risposta in prosa è misurare i risultati, campionare e giudicare l'utilità con le persone, limitare ciò che entra negli archivi condivisi senza revisione e rivedere le basi di riferimento. Si usi il punteggio automatico come ausilio e non come giudice.

## Domande da discutere con il team

**1. Quali dei nostri numeri sono saliti da quando usiamo l'IA, e che cosa hanno fatto per le persone che serviamo?**
Elencate i numeri. Per ciascuno, osservate il risultato che avrebbe dovuto riflettere. Il facilitatore dovrebbe annotare dove il risultato non si è mosso. Abbinate quei numeri a un controllo di utilità.

**2. Di quanto di ciò che abbiamo pubblicato o creato il mese scorso saremmo lieti di rispondere riga per riga?**
Prendete un campione casuale e leggetelo insieme. Segnate ciò che è utile, povero, sbagliato o duplicato. Discutete il tasso e le cause. Concordate uno standard per ciò che entra negli archivi condivisi.

**3. Dove il controllo sta diventando il nostro collo di bottiglia?**
Chiedetelo ai revisori. Osservate le code di revisioni, la profondità delle revisioni e l'impegno che portano ora. Concordate un limite alla dimensione o al numero di elementi generati per revisione e un modo di misurare l'onere.

**4. Quale contenuto generato sta alimentando altro contenuto generato qui?**
Ripercorrete a ritroso una risposta tipica fino alle sue fonti. Dove è iniziata la catena? Discutete dove una persona dovrebbe controllare la catena o etichettare il contenuto.

**5. Che cosa direbbe oggi un utente della nostra base di conoscenza, rispetto a un anno fa?**
Leggete i commenti recenti e osservate i dati d'uso. Chiedetevi se sia più facile o più difficile trovare una risposta affidabile. Concordate una pulizia e una regola per i nuovi contenuti.

**6. Quali delle nostre tendenze dovremmo riavviare con una nuova base di riferimento?**
Elencate le metriche che dipendono dal volume o da come vengono creati gli elementi. Cercate cambiamenti di forma dall'arrivo dell'IA. Annotate le tendenze e decidete quali richiedano una base di riferimento nuova.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna generano gran parte del volume e portano la manutenzione. Dovrebbero favorire modifiche più piccole e più chiare, mantenere rivisto ed etichettato il materiale generato e osservare persistenza e rilavorazione. Dovrebbero rifiutare le metriche basate sul volume generato e chiedere misure di risultato.

### Team di servizio e operations

I team di operazioni vivono nelle code, negli avvisi e nella base di conoscenza che la diluizione danneggia. Dovrebbero regolare ticket e avvisi creati dall'IA per mantenere forte il segnale, rivedere la conoscenza generata prima che venga pubblicata e segnalare quando il flusso diventa rumore. Sono nella posizione migliore per giudicare l'utilità.

### Leadership e governance

I dirigenti ricevono le dashboard che l'inflazione distorce. Dovrebbero chiedere prima i risultati, richiedere controlli di utilità accanto al volume, finanziare la capacità di revisione e accettare che alcune misure richiedano una nuova base di riferimento. La governance dovrebbe verificare che il contenuto generato negli archivi condivisi sia rivisto ed etichettato.

### Clienti e utenti

Gli utenti sopportano il costo della diluizione quando le risposte sono sbagliate, gli articoli si contraddicono e le risposte sono lunghe e vuote. Vogliono un aiuto breve, corretto e pertinente. La loro reazione alla qualità di ciò che ricevono è una prova diretta del fatto che il segnale sia sopravvissuto.

## In pratica: un esempio di ITIL agile

Il gruppo IT di un'azienda farmaceutica globale abilita un assistente di IA per redigere articoli della conoscenza, sintetizzare ticket e preparare rapporti settimanali di stato. In un trimestre, la dashboard appare eccellente. I numeri seguenti sono illustrativi.

Gli articoli della conoscenza creati salgono da 140 a 610 al mese. I ticket riportano sintesi dettagliate scritte dall'IA. I rapporti settimanali arrivano a dodici pagine. La responsabile della qualità del servizio nota che la soddisfazione per il self-service è calata e che il service desk riferisce più contatti del tipo «l'articolo non mi ha aiutato». Campiona 100 dei nuovi articoli con due operatori esperti. Solo 54 sono giudicati utili: 23 duplicano articoli esistenti, 15 contengono passaggi obsoleti o scorretti e 8 sono troppo vaghi per essere messi in pratica. Tra i nuovi articoli, il 71 percento è stato pubblicato senza revisione umana. La base di conoscenza contiene ora circa 3.200 articoli, con un tasso di ridondanza dei contenuti che lei stima al 28 percento contro il 9 percento di un anno fa. Gli operatori riferiscono che trovare una risposta affidabile richiede più tempo. L'onere di verifica per i redattori di articoli del service desk è cresciuto a circa 40 ore a settimana, da 12. Le sintesi dei ticket scritte dall'IA fanno sì che le successive risposte generate dall'IA si basino su un testo che nessuno ha scritto, e in una ricostruzione a ritroso di cinque risposte attraverso le loro fonti, due si basavano su una sintesi che aveva descritto male il problema. I rapporti settimanali di stato, quando letti, dicono poco che non fosse già nel precedente, e gli stakeholder hanno smesso di leggere oltre pagina due.

Propone quattro cambiamenti, che il gruppo dirigente del servizio e i responsabili della conoscenza adottano. Gli articoli generati richiedono la revisione di un redattore designato prima della pubblicazione e sono etichettati finché non approvati. Un limite di un articolo generato per gruppo tematico previene i duplicati, e una ripulitura fonde o ritira gli elementi ridondanti. I modelli di rapporto sono ridotti a due pagine che aprono con i risultati, e l'IA è usata per redigere solo le sezioni che una persona poi rielabora. Le sintesi dei ticket sono contrassegnate come generate, e un campione viene verificato ogni mese. La dashboard riporta quota di elementi utili, tasso di ridondanza, quota sottoposta a revisione e onere di verifica accanto ai conteggi degli articoli.

Dopo due trimestri, gli articoli creati al mese scendono a 190, la quota di elementi utili sale al 91 percento, il tasso di ridondanza scende all'11 percento, la quota sottoposta a revisione è del 100 percento e l'onere di verifica si stabilizza a circa 16 ore a settimana. La soddisfazione per il self-service si riprende e i contatti «l'articolo non mi ha aiutato» calano. Gli stakeholder leggono il rapporto di due pagine. Un direttore chiede un obiettivo di 1.000 articoli al mese per mostrare il valore del programma di IA. La responsabile della qualità del servizio spiega che il problema era proprio il conteggio e propone di seguire utilità e utilizzo. La decisione viene registrata.

## Lente di settore

**Startup.** La generazione è economica e il tempo di revisione è scarso. Si mantengano brevi documentazione e ticket, si rivedano i contenuti che i clienti leggeranno e si cancelli senza timore. Un insieme piccolo e corretto di articoli vale più di uno grande di articoli dubbi.

**Piccola impresa.** C'è poca capacità di revisione, quindi si limiti ciò che lo strumento produce. Si preferisca una manciata di guide e modelli verificati. Ci si guardi dal pubblicare materiale generato su pagine pubbliche senza controllarlo.

**Grande impresa.** La scala amplifica il rumore. Si istituisca una governance dei contenuti con responsabili, etichette e regole di revisione, si misuri l'utilità in tutta la base di conoscenza e si conducano pulizie periodiche. Si condividano le griglie tra i team e si confrontino le tendenze, non i team.

**Pubblica amministrazione e settore pubblico.** I contenuti pubblici devono essere accurati e accessibili, e gli errori possono nuocere. Si richieda la revisione delle informazioni pubbliche generate, si conservino registrazioni di come sono state prodotte e si applichino standard di linguaggio semplice e di accessibilità. Possono applicarsi regole di conservazione e di tenuta degli atti al materiale generato (si veda l'argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi per difendersi dall'inflazione sono modesti: tempo di revisione per il campionamento, impegno redazionale per i contenuti generati, strumenti per il rilevamento dei duplicati e lo sforzo di ridefinire le basi di riferimento delle tendenze. I costi del non farlo sono maggiori ma diffusi: utenti che smettono di fidarsi del self-service, revisori che si esauriscono, decisioni prese su numeri gonfiati e progetti di pulizia.

Si costruisca il caso a partire dai propri dati: la quota di elementi utili e l'onere di verifica nel tempo, il volume di contatti causati da contenuti poco utili e il costo di una pulizia della base di conoscenza. Si eviti di usare cifre pubblicate sulla qualità dei contenuti generati, che variano ampiamente per strumento, compito e metodo. Si includa il costo evitato del danno reputazionale derivante dalla pubblicazione di informazioni errate (si veda l'argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Celebrare il volume.** Premia il rumore. Si celebrino risultati e utilità.
- **La velocità della prima bozza come storia di produttività.** Il risparmio può svanire nel controllo. Si misuri il tempo fino a un risultato verificato.
- **Pubblicare contenuti generati senza revisione.** La fiducia si erode in silenzio. Si riveda e si etichetti.
- **Lasciare che il contenuto generato alimenti la generazione.** Gli errori si accumulano. Si controlli la catena.
- **Basi di riferimento immutate.** Le tendenze ingannano dopo un cambio tecnologico. Si annoti e si ridefinisca la base.
- **Sovraccaricare i revisori.** La revisione diventa un timbro. Si limiti il volume e si misuri l'onere.
- **Usare un giudice IA per tutto.** Può condividere i punti ciechi del produttore. Si mantengano le persone nel ciclo.
- **Ignorare l'effetto rimbalzo.** Un lavoro più economico attira più lavoro. Si decida a che cosa serva il tempo risparmiato.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Abbinamento e campionamento | Volume riportato da solo | Impressioni informali sulla qualità | Ogni metrica di volume abbinata a un controllo di utilità campionato | Utilità, onere e ridondanza gestiti con obiettivi per la revisione, non per il volume | Visione della qualità del segnale a livello dell'intera organizzazione; griglie condivise con i partner |
| Contenuti e cicli | Contenuto generato mescolato agli altri | Qualche etichettatura | Contenuto generato etichettato e rivisto prima della pubblicazione; catene campionate | Cicli monitorati; archivi curati; duplicati ritirati secondo calendario | Provenienza tracciata da un capo all'altro tra strumenti e fornitori |
| Basi di riferimento e attenzione | Tendenze lette a cavallo del cambio | Annotazioni su alcuni grafici | Basi di riferimento ridefinite dove i dati sono cambiati; effetto rimbalzo considerato | Segnalazioni di deriva riesaminate ogni trimestre; carico dei revisori gestito | Progettazione delle metriche che si adatta continuamente al cambiamento tecnologico insieme agli stakeholder |

## Checklist

- [ ] Ogni metrica di volume o di velocità ha un compagno di utilità giudicato da una persona.
- [ ] Un campione casuale di elementi toccati dall'IA è rivisto ogni mese rispetto a una griglia scritta.
- [ ] L'onere di verifica è stimato e seguito come tendenza.
- [ ] La conoscenza generata è etichettata e rivista prima della pubblicazione.
- [ ] La ridondanza nella base di conoscenza è misurata e ridotta.
- [ ] I flussi di avvisi e di ticket sono monitorati per quota utile e duplicati.
- [ ] Le catene dagli output generati alle loro fonti sono campionate.
- [ ] Le tendenze a cavallo dell'introduzione dell'IA sono annotate o con base di riferimento ridefinita.
- [ ] I rapporti alla direzione aprono con i risultati.
- [ ] A utenti e stakeholder viene chiesto se il segnale sia più chiaro o più rumoroso.

## Prompt IA

**Creare una griglia di utilità.**

```text
Redigi una breve griglia (non più di sei criteri) per giudicare se un [articolo della
conoscenza, sintesi di ticket, rapporto di stato] è utile in [tipo di organizzazione].
Includi correttezza, pertinenza a un bisogno reale, duplicazione, aggiornamento e
chiarezza, con una valutazione su tre livelli e esempi per ciascun livello. Non
inventare statistiche. Elenca le tue ipotesi e come mantenere coerenti i revisori.
```

**Analizzare un calo del segnale.**

```text
Da quando abbiamo introdotto l'IA per [compito], queste cifre sono cambiate: [incolla
volumi, risoluzione, soddisfazione, tasso di riapertura, ore dei revisori]. Descrivi
che cosa suggerisce lo schema riguardo a inflazione o diluizione, quali cambiamenti
possono dipendere dalla creazione più facile, che cosa campionare dopo e quali
metriche possano richiedere una nuova base di riferimento. Non presumere cause che i
dati non possono supportare. Elenca le tue ipotesi.
```

**Pianificare una pulizia della base di conoscenza.**

```text
La nostra base di conoscenza ha [numero] articoli, di cui [numero] generati negli
ultimi [periodo]. Proponi un piano di pulizia: come rilevare duplicati ed elementi
obsoleti, come stabilire le priorità in base all'uso, come rivedere gli articoli
generati, regole per prevenire il ripetersi e misure da seguire. Non presumere
strumenti specifici. Elenca le tue ipotesi e i rischi.
```

**Ripercorrere una catena di contenuto generato.**

```text
Ecco una risposta generata dall'IA e le fonti da cui ha attinto: [incolla]. Risali
da ciascuna affermazione alla sua fonte e segna se la fonte era scritta da una
persona, contenuto generato rivisto o contenuto generato non rivisto. Individua dove
possa essere entrato un errore e suggerisci un controllo. Non presumere fatti oltre
il testo. Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare il compagno di utilità di una metrica di volume o di velocità.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una metrica influenzata dall'IA abbini il volume a un'utilità campionata e riporti il proprio vettore di manipolazione e la propria salvaguardia.

## Punti chiave

- Quando l'IA rende economico l'output, le metriche di volume e di velocità si gonfiano e la quota di ciò che è utile può diminuire.
- Si abbini ogni misura di volume o di velocità a un controllo di utilità campionato e giudicato da una persona.
- Si misurino il tempo fino a un risultato verificato e l'onere di verifica, perché il controllo diventa il collo di bottiglia.
- Si etichetti e si riveda il contenuto generato prima che entri negli archivi condivisi e si evitino cicli che si alimentano da soli senza controllo.
- Si ridefiniscano le basi di riferimento delle tendenze dopo un cambio tecnologico e si apra i rapporti con i risultati.
- Si decida in anticipo a che cosa serva il tempo risparmiato e si protegga l'attenzione di revisori e utenti.

## Riferimenti e letture di approfondimento

1. Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., and Gal, Y., "AI models collapse when trained on recursively generated data," *Nature*, 631, 2024.
2. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
11. Wikipedia, [Information overload](https://en.wikipedia.org/wiki/Information_overload).
12. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
13. Wikipedia, [Alert fatigue](https://en.wikipedia.org/wiki/Alert_fatigue).
14. Wikipedia, [AI slop](https://en.wikipedia.org/wiki/AI_slop).
15. Wikipedia, [Brandolini's law](https://en.wikipedia.org/wiki/Brandolini%27s_law).
16. Wikipedia, [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox).
17. Wikipedia, [Model collapse](https://en.wikipedia.org/wiki/Model_collapse).
18. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
