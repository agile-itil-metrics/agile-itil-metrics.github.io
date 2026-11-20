# Metriche di disponibilità

**La disponibilità è la quota di tempo, o di richieste degli utenti, in cui un servizio ha fatto ciò di cui gli utenti avevano bisogno, e dice la verità solo se si definisce che cosa significhi «attivo» dal punto di vista dell'utente, si contano separatamente le interruzioni pianificate e non pianificate e si legge l'aritmetica dei «nove» prima di prometterne uno.**

## Panoramica e motivazione

La disponibilità è il numero più citato nella gestione dei servizi e uno dei meno definiti con precisione. Un'affermazione come «il servizio è stato disponibile al 99,9 percento il mese scorso» suona esatta, eppure nasconde almeno quattro decisioni: che cosa contava come servizio, che cosa contava come «disponibile», quali ore erano incluse e quali interruzioni erano escluse. Due team possono rendicontare lo stesso servizio nello stesso mese e pubblicare cifre che differiscono di un ordine di grandezza senza che nessuno dei due commetta un errore aritmetico.

Questo argomento rende esplicite quelle decisioni. Tratta il calcolo di uptime e downtime, la disponibilità ponderata sugli utenti, le interruzioni pianificate rispetto a quelle non pianificate e l'aritmetica dei «nove». Si basa sugli indicatori di livello di servizio (SLI), sugli obiettivi di livello di servizio (SLO) e sui budget di errore (si veda l'Argomento 5.2 «SLI, SLO e budget di errore») e sulla visione contrattuale dei livelli di servizio (si veda l'Argomento 5.1 «Metriche SLA, OLA e XLA»). Quegli argomenti dicono come scegliere un obiettivo. Questo dice come calcolare il numero con cui l'obiettivo viene confrontato.

### Termini usati in questo argomento

- La **disponibilità** è la capacità di un servizio di fare ciò di cui gli utenti hanno bisogno quando ne hanno bisogno, di solito espressa come percentuale in un periodo. Il concetto generale è descritto nella voce sull'[alta disponibilità](https://en.wikipedia.org/wiki/High_availability).
- Il **[downtime](https://en.wikipedia.org/wiki/Downtime)** è un periodo in cui un servizio non è disponibile. Questo argomento usa **interruzione** (outage) per un singolo episodio continuo di downtime e **degrado** per un periodo in cui il servizio funziona ma al di sotto di una qualità concordata.
- L'**uptime** è il complemento del downtime all'interno della finestra di misurazione. La disponibilità basata sul tempo è l'uptime diviso per il tempo totale incluso.
- La **disponibilità basata sulle richieste** è la quota di richieste valide andate a buon fine, per cui un guasto che interessa il 5 percento delle richieste per un'ora conta come il 5 percento del traffico di un'ora, non come un'ora intera di downtime.
- La **disponibilità ponderata sugli utenti** estende la visione basata sulle richieste ponderando i guasti in base al numero o all'importanza degli utenti interessati, per esempio contando le sessioni fallite o i percorsi falliti anziché le richieste grezze.
- Un **accordo sul livello di servizio (SLA)** è un impegno verso un cliente, e un **obiettivo di livello di servizio (SLO)** è un traguardo interno per un indicatore. Le voci su [service level agreement](https://en.wikipedia.org/wiki/Service-level_agreement) e [service level objective](https://en.wikipedia.org/wiki/Service-level_objective) forniscono definizioni generali.
- Il **downtime pianificato** è un'interruzione annunciata in anticipo e approvata tramite l'abilitazione delle modifiche. Il **downtime non pianificato** è tutto il resto. Il confine tra i due è una delle linee più contese nella rendicontazione della disponibilità.
- Il **[tempo medio tra i guasti](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF)** è il tempo operativo medio tra le interruzioni, e il **[tempo medio di riparazione](https://en.wikipedia.org/wiki/Mean_time_to_repair)** è il tempo medio di ripristino. Entrambi sono medie, quindi questo libro li legge come distribuzioni (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).
- Il **[monitoraggio sintetico](https://en.wikipedia.org/wiki/Synthetic_monitoring)** usa sonde scriptate che si comportano come un utente e riportano successo o fallimento. Il **[real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring)** registra l'esperienza degli utenti reali mentre usano il servizio.
- **[ITIL](https://en.wikipedia.org/wiki/ITIL)** è il framework più noto per la gestione dei servizi IT. In ITIL 4 la pratica di gestione della disponibilità si occupa di garantire che i servizi eroghino i livelli di disponibilità concordati, e collabora strettamente con il monitoraggio e la gestione degli eventi, la gestione degli incidenti e la gestione della continuità del servizio.

### Perché un solo numero non basta mai

Dieci interruzioni di quattro minuti ciascuna e una interruzione di quaranta minuti producono lo stesso totale di downtime, eppure gli utenti le percepiscono in modo diverso e richiedono risposte diverse. Il primo schema indica un servizio fragile. Il secondo indica un rilevamento o un ripristino lento. Per questo le metriche qui presentate sono un piccolo insieme, ciascuna con una salvaguardia, così che un team possa discutere onestamente di disponibilità senza competere per il maggior numero di «nove».

### Come differiscono le visioni ITIL e agile

In ITIL, la disponibilità è un attributo gestito di un servizio, concordato con il cliente e rendicontato dalla gestione dei livelli di servizio rispetto a un obiettivo dichiarato, con orari di servizio chiari ed esclusioni come la manutenzione pianificata.

Nella pratica agile e di site reliability engineering (SRE), la disponibilità è uno SLI tra gli altri, confrontato con uno SLO. Il libro di Google *Site Reliability Engineering* afferma che la disponibilità basata sul tempo si adatta a un singolo sistema, mentre il tasso di successo delle richieste si adatta ai servizi distribuiti che sono sempre parzialmente attivi. Afferma anche che il 100 percento non è quasi mai l'obiettivo giusto, perché il costo di ogni «nove» in più cresce ripidamente.

Usare la disciplina ITIL di ambito, orari ed esclusioni concordati per definire il denominatore. Usare la disciplina SRE di indicatori centrati sull'utente e budget di errore per definire il numeratore e decidere che cosa fare del risultato.

## Principi chiave

- **Definire «disponibile» dal punto di vista dell'utente.** Un servizio che risponde ai controlli di stato mentre gli utenti non riescono ad accedere è non disponibile per le persone che contano.
- **Scrivere il denominatore.** Dichiarare il confine del servizio, le ore incluse, il fuso orario e la finestra di misurazione prima di calcolare qualsiasi cosa.
- **Contare separatamente le interruzioni pianificate e non pianificate.** Riportarle entrambe, insieme, e non lasciare mai che una nasconda l'altra.
- **Preferire misure basate sulle richieste e ponderate sugli utenti per i servizi distribuiti.** Un guasto parziale non è né uptime pieno né downtime pieno.
- **Convertire i «nove» in minuti.** Un obiettivo è compreso solo quando le persone sanno dire quanti minuti di guasto al mese consente.
- **Scegliere il numero di «nove» di cui gli utenti hanno bisogno.** Oltre quel punto, ogni «nove» in più costa più di quanto renda.
- **Descrivere servizi, mai persone.** La disponibilità appartiene a un servizio e ai team che lo gestiscono, e non è mai il punteggio di un individuo.

## Definizioni delle metriche

Ogni riga dichiara i propri orologi e confini. Si usa il tempo di calendario salvo diversa indicazione di una riga. Dove una misura usa una distribuzione, riportare la mediana e il 95º percentile, e indicare la finestra.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Disponibilità basata sul tempo | Quota del tempo incluso in cui il servizio ha soddisfatto la definizione scritta di «attivo» | (minuti inclusi nella finestra meno minuti di downtime non pianificato) / minuti inclusi nella finestra. L'orologio parte dalla prima sonda fallita che viene poi confermata come impatto sugli utenti, oppure dall'inizio dell'impatto confermato registrato nel riesame dell'incidente; si ferma quando il servizio soddisfa di nuovo la definizione. Il downtime pianificato entro gli orari di servizio concordati è mostrato separatamente, e il tempo fuori dagli orari di servizio concordati è escluso dal denominatore | percentuale | Risultati del monitoraggio sintetico; record dell'incidente con timestamp di inizio impatto e di ripristino | Gestione della disponibilità; gestione dei livelli di servizio | Uno SLI basato sul tempo per un singolo sistema (si veda l'Argomento 5.2 «SLI, SLO e budget di errore») | Mensile |
| Disponibilità basata sulle richieste | Quota di richieste valide andate a buon fine | richieste valide riuscite / richieste valide totali nella finestra. Le richieste valide escludono le richieste malformate e gli errori del client causati dal chiamante; i guasti causati dal servizio, compresi i timeout, sono conteggiati come fallimenti. Riportata per servizio e per percorso utente | percentuale | Log e metriche del bilanciatore di carico, del gateway o dell'applicazione | Gestione della disponibilità; monitoraggio e gestione degli eventi | SLI sul tasso di successo con SLO e budget di errore (si veda l'Argomento 5.2 «SLI, SLO e budget di errore») | Andamento giornaliero, rapporto mensile |
| Disponibilità ponderata sugli utenti | Disponibilità ponderata in base agli utenti o ai percorsi interessati, così che un'interruzione nell'ora di punta pesi più di una notturna | 1 meno (sessioni utente fallite o percorsi falliti / sessioni utente o percorsi totali) nella finestra. Una sessione conta come fallita se un passaggio critico definito è fallito; il successo parziale è riportato come quota di degrado separata, non incorporato | percentuale | Real user monitoring; log di sessione dell'applicazione; eventi di analytics | Gestione della disponibilità; gestione dei livelli di servizio | SLI basato sui percorsi e misure di esperienza dell'Argomento 6.2 (si veda l'Argomento 6.2 «Experience level agreement») | Mensile |
| Downtime non pianificato | Minuti in cui il servizio è stato non disponibile senza preavviso approvato | Somma delle durate delle interruzioni nella finestra, dall'inizio dell'impatto confermato al ripristino confermato, per le interruzioni non annunciate e approvate tramite abilitazione delle modifiche prima del loro inizio. Le interruzioni sovrapposte sullo stesso servizio sono unite, non sommate. Riportato come minuti totali, numero di interruzioni, mediana e 95º percentile della durata delle interruzioni | minuti | Record dell'incidente con timestamp di inizio impatto e di ripristino | Gestione degli incidenti; gestione della disponibilità | Tempo di ripristino letto come distribuzione (si veda l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti») | Mensile |
| Quota di downtime pianificato | Proporzione di tutto il downtime che è stata annunciata e approvata in anticipo | minuti di downtime pianificato / (minuti di downtime pianificato più non pianificato) nella finestra. Un'interruzione conta come pianificata solo se è stata approvata tramite un record di modifica prima del suo inizio e se i suoi orari di inizio e fine sono stati comunicati agli utenti; un superamento oltre la finestra approvata è riclassificato come non pianificato dal momento in cui la finestra è terminata | percentuale | Record di modifica con finestra approvata; record dell'incidente; storico della pagina di stato | Abilitazione delle modifiche; gestione della disponibilità | Pratiche di rilascio e manutenzione che favoriscono la distribuzione senza downtime (si veda l'Argomento 4.3 «Metriche di abilitazione delle modifiche») | Mensile |
| Frequenza e distanziamento delle interruzioni | Con quale frequenza iniziano le interruzioni e per quanto tempo il servizio funziona tra l'una e l'altra | Numero di interruzioni iniziate nella finestra; e per ogni coppia di interruzioni consecutive, i minuti di uptime tra il ripristino della prima e l'inizio della seconda, riassunti come mediana e 5º percentile. Non riportata come singola media quando esistono meno di dieci intervalli | conteggio; minuti | Record degli incidenti; storico del monitoraggio | Gestione degli incidenti; gestione dei problemi | Segnale di stabilità accanto al tasso di fallimento delle modifiche (si veda l'Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni») | Mensile |
| Quota di degrado | Tempo in cui il servizio ha funzionato ma al di sotto di una qualità concordata | Minuti in cui l'indicatore di latenza, errore o correttezza ha superato la propria soglia, esclusi i minuti già conteggiati come downtime / minuti inclusi. Soglia dichiarata per servizio, per esempio nello SLO | percentuale | Misurazioni di monitoraggio e SLI | Gestione della disponibilità; gestione di capacità e prestazioni | SLI di latenza (si veda l'Argomento 5.4 «Metriche di capacità e prestazioni») | Mensile |
| Copertura della misurazione | Quanta parte del comportamento del servizio visibile agli utenti viene effettivamente osservata dalla misurazione della disponibilità | Percorsi utente critici con una sonda attiva o una misurazione di utenti reali / percorsi utente critici elencati nella definizione del servizio | percentuale | Definizione del servizio; configurazione del monitoraggio | Monitoraggio e gestione degli eventi; gestione della disponibilità | Copertura dell'osservabilità e qualità degli avvisi (si veda l'Argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi») | Trimestrale |

Due note sui dati. Una sonda che controlla ogni cinque minuti non può risolvere un'interruzione di due minuti, quindi registrare l'intervallo della sonda accanto alla cifra, e usare il campo di inizio impatto nel record dell'incidente (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»). Ogni volta che la definizione di «attivo» cambia, segnalarlo nel grafico dell'andamento.

## Raccomandazioni

### Definire la misurazione

**1. Scrivere la definizione del servizio prima della percentuale.** Elencare il confine del servizio, i percorsi utente critici, le ore incluse, il fuso orario e la finestra (di solito un mese di calendario). Dire quali dipendenze contano: se un fornitore di pagamenti si guasta e gli utenti non riescono a pagare, è un'interruzione propria? Registrare la risposta nel registro delle metriche (si veda l'Argomento 1.4 «Governance e responsabilità delle metriche»). La maggior parte delle dispute sulla disponibilità sono dispute su questa pagina, e risolverle in anticipo costa molto meno che risolverle dopo un'interruzione.

**2. Definire «attivo» come un risultato per l'utente, non come uno stato del server.** Un controllo di stato che restituisce successo mentre l'accesso è guasto misura la cosa sbagliata. Scegliere un piccolo numero di percorsi critici, come «cercare e visualizzare un articolo», «accedere» o «inviare una richiesta di indennizzo», e definire il successo di ciascuno in termini che gli utenti riconoscerebbero. Sondare il percorso end-to-end e trattare una risposta lenta oltre una soglia concordata come degradata, non come attiva.

**3. Usare misure basate sulle richieste per i servizi distribuiti e misure basate sul tempo dove il servizio è davvero acceso o spento.** Un servizio globale è raramente del tutto inattivo, quindi contare i minuti di guasto totale ignora la maggior parte dei guasti reali. Riportare entrambe quando possibile e dire quale sia il titolo e perché.

**4. Aggiungere la ponderazione sugli utenti dove il carico è disomogeneo.** Un'interruzione di dieci minuti alle 4 del mattino e una all'apertura di una giornata di negoziazione hanno la stessa durata e un costo molto diverso. Ponderare per sessioni o transazioni nel minuto del guasto, oppure riportare i minuti di interruzione nell'ora di punta come cifra separata.

**5. Misurare dall'esterno del dominio di guasto.** Una sonda all'interno della stessa rete o regione del servizio fallisce con esso, o continua a riportare successo mentre il percorso seguito dagli utenti è guasto. Eseguire sonde sintetiche da almeno due posizioni indipendenti e verificarle con i dati degli utenti reali.

### Trattare con onestà le interruzioni pianificate e non pianificate

**6. Riportare affiancati il downtime pianificato e non pianificato.** Molti accordi escludono la manutenzione pianificata, il che è ragionevole. Gli utenti la vivono comunque come downtime, quindi mostrare i minuti esclusi e la quota pianificata accanto al dato principale (si veda l'Argomento 4.3 «Metriche di abilitazione delle modifiche»).

**7. Rendere difficile meritarsi l'etichetta «pianificato».** Definire come pianificato ciò che è approvato tramite un record di modifica prima dell'inizio dell'interruzione, con orari di inizio e fine comunicati in anticipo agli utenti. Un'interruzione annunciata dopo il suo inizio è non pianificata. Un superamento oltre la finestra approvata è non pianificato dal momento in cui la finestra è terminata. Queste tre regole impediscono che l'etichetta diventi un modo per rietichettare i guasti.

**8. Lavorare per ridurre il downtime pianificato.** Distribuzioni progressive, feature flag, migrazioni di schema senza blocchi e rilasci blue-green consentono ai team di modificare un servizio senza fermarlo. Tracciare i minuti di downtime pianificato come andamento e chiedersi che cosa servirebbe per portarli verso lo zero.

### Leggere bene i numeri

**9. Convertire i «nove» in minuti e mostrarli.** La tabella seguente fornisce l'aritmetica per un mese di 30 giorni (43.200 minuti) e un anno di 365 giorni (525.600 minuti). Mettere sulla dashboard i minuti consentiti accanto all'obiettivo, e mostrare i minuti usati finora nella finestra. Le persone prendono decisioni migliori su «43 minuti al mese» che su «tre nove».

| Obiettivo di disponibilità | Downtime consentito in un mese di 30 giorni | Downtime consentito in un anno di 365 giorni |
| --- | --- | --- |
| 99 percento | 432 minuti (7,2 ore) | 5.256 minuti (87,6 ore) |
| 99,5 percento | 216 minuti (3,6 ore) | 2.628 minuti (43,8 ore) |
| 99,9 percento | 43,2 minuti | 525,6 minuti (8,76 ore) |
| 99,95 percento | 21,6 minuti | 262,8 minuti (4,38 ore) |
| 99,99 percento | 4,32 minuti | 52,56 minuti |
| 99,999 percento | circa 26 secondi | circa 5,26 minuti |

I valori presuppongono che l'orologio scorra per l'intera finestra. Se si misurano solo gli orari di servizio concordati, i minuti consentiti si riducono in proporzione, e occorre dirlo.

**10. Rispettare il costo di ogni «nove» in più e i limiti delle proprie dipendenze.** Il libro SRE osserva che i costi dell'affidabilità crescono ripidamente a ogni «nove» aggiuntivo, e che l'obiettivo dovrebbe riflettere ciò di cui gli utenti hanno bisogno e ciò che l'azienda è disposta a pagare. Un servizio può raramente essere più disponibile delle dipendenze di cui ha bisogno in serie. Se tre componenti essenziali raggiungono ciascuno il 99,9 percento e una richiesta ha bisogno di tutti e tre, la migliore disponibilità attesa per la combinazione è circa il 99,7 percento, perché le probabilità di guasto si sommano quando i componenti sono indipendenti. Fare la moltiplicazione prima di promettere una cifra.

**11. Guardare il distanziamento e la forma, non solo il totale.** Interruzioni brevi e frequenti richiedono una risposta diversa da una sola interruzione lunga e rara. Collegare le interruzioni lunghe al rilevamento e al ripristino (si veda l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti») e alla visione degli incidenti maggiori (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori»).

**12. Chiudere il cerchio con il budget di errore e il record del problema.** Un obiettivo di disponibilità è utile quando cambia ciò che il team fa. Quando il budget mensile di downtime consentito è quasi speso, rallentare le modifiche rischiose e spostare l'impegno sul lavoro di affidabilità, come descritto nella politica del budget di errore (si veda l'Argomento 5.2 «SLI, SLO e budget di errore»). Quando la stessa causa si ripresenta, aprire un record di problema e seguirlo fino a una correzione (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Disponibilità basata sul tempo | Sondare una pagina banale che resta attiva mentre il percorso reale fallisce; allungare l'intervallo della sonda in modo che le interruzioni brevi cadano tra i controlli; ridurre le ore incluse; contare le interruzioni come degrado | Disponibilità ponderata sugli utenti e real user monitoring; intervallo della sonda dichiarato accanto alla cifra; campionare gli incidenti rispetto allo storico del monitoraggio |
| Disponibilità basata sulle richieste | Includere nel denominatore richieste facili (controlli di stato, risorse in cache) per diluire i fallimenti; classificare gli errori del server come errori del client; escludere i tentativi ripetuti che gli utenti hanno vissuto come fallimenti | Tasso di successo per percorso critico, non per richiesta; riesaminare l'elenco delle esclusioni; confrontare con gli incidenti segnalati dagli utenti |
| Disponibilità ponderata sugli utenti | Scegliere la ponderazione in modo che i guasti nei picchi contino poco; definire una sessione «riuscita» in modo così lasco che passino anche passaggi guasti | Pubblicare la regola di ponderazione e l'elenco dei percorsi; confrontare con il volume dei reclami e i contatti al supporto durante le interruzioni |
| Downtime non pianificato | Riclassificare a posteriori le interruzioni come pianificate; ritardare l'inizio dell'impatto confermato; dividere un'interruzione in due per farla sembrare più breve | Quota di downtime pianificato, con la regola che un'interruzione annunciata dopo il suo inizio è non pianificata; confrontare l'inizio dell'impatto con i dati di monitoraggio |
| Quota di downtime pianificato | Registrare le modifiche come finestre approvate in modo che superamenti e guasti contino come pianificati; gonfiare la quota pianificata programmando manutenzioni inutili | Minuti di superamento riclassificati come non pianificati; tasso di fallimento delle modifiche e quota di modifiche di emergenza (si veda l'Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni») |
| Frequenza e distanziamento delle interruzioni | Unire gli incidenti, o aprire un nuovo incidente solo dopo un lungo intervallo, per tenere basso il conteggio; sopprimere gli avvisi in modo che le interruzioni brevi non vengano registrate | Campionamento di avvisi e incidenti rispetto agli eventi di monitoraggio grezzi; copertura del monitoraggio e qualità degli avvisi (si veda l'Argomento 5.5 «Metriche di monitoraggio e qualità degli avvisi») |
| Quota di degrado | Fissare la soglia così lasca che il servizio lento non la supera mai; dichiarare come attivo il tempo degradato | Percentili di latenza e lentezza segnalata dagli utenti riesaminati accanto alla cifra (si veda l'Argomento 5.4 «Metriche di capacità e prestazioni») |
| Copertura della misurazione | Elencare solo i percorsi facili da sondare, così che la copertura risulti al 100 percento; contare un percorso come coperto da una sonda che non viene mai eseguita | Elenco dei percorsi concordato con il responsabile del servizio e gli utenti; storico di esecuzione delle sonde campionato ogni trimestre |

Una lettura sana mostra cifre che si muovono per ragioni che il team sa spiegare, con downtime pianificato e non pianificato entrambi visibili e una cifra ponderata sugli utenti vicina al dato principale. Diffidare di un mese perfetto accompagnato da reclami. Un calo onesto occasionale mostra che il sistema di registrazione funziona.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Disponibilità basata sul tempo | Semplice, ampiamente compresa, facile da confrontare con i contratti | Tratta il guasto parziale come tutto o niente; ignora quando e chi |
| Disponibilità basata sulle richieste | Riflette il guasto parziale; scala ai servizi distribuiti | Dipende da una solida definizione di richiesta valida; può essere diluita dal traffico facile |
| Disponibilità ponderata sugli utenti | Vicina a ciò che gli utenti hanno vissuto; mostra il costo dei guasti nei momenti di picco | Richiede dati di sessione o di percorso; più impegno per spiegarla |
| Escludere il downtime pianificato | Corrisponde a molti accordi; premia il preavviso | Può nascondere impatti reali; invita alla rietichettatura |
| Obiettivi moderati con budget di errore | Bilancia affidabilità e velocità di consegna | Richiede disciplina per agire quando il budget è speso |

La risposta in breve è scegliere la misura più semplice adatta al servizio, aggiungere la ponderazione sugli utenti dove il carico è disomogeneo ed essere espliciti su ogni esclusione. Una misura un po' meno elegante ma compresa da tutti giova più di una sofisticata di cui nessuno si fida.

## Domande da discutere con il team

**1. Che cosa significa «disponibile» per il nostro servizio più importante, e un utente sarebbe d'accordo?**
Chiedere a ciascuno di descrivere, in una frase, che cosa un utente deve poter fare perché il servizio conti come attivo. Confrontare le risposte con la definizione scritta e con la sonda che alimenta la dashboard. Il facilitatore dovrebbe cogliere lacune come accesso, ricerca o pagamento che funzionano nella sonda ma falliscono nella pratica. Concludere concordando quali percorsi utente la definizione deve nominare.

**2. Quali interruzioni dell'ultimo trimestre il nostro calcolo avrebbe escluso, ed era giusto?**
Elencare le interruzioni e contrassegnare ciascuna come pianificata, non pianificata o esclusa. Chiedere chi ha preso ogni decisione e quando. Il facilitatore dovrebbe registrare i casi in cui gli utenti non sarebbero stati d'accordo con l'etichetta, e usarli per rendere più rigorose le regole.

**3. Quanti minuti di downtime consente il nostro obiettivo, e quanti ne abbiamo usati in questa finestra?**
Convertire l'obiettivo in minuti per il mese e per l'anno su una lavagna. Confrontare con i minuti usati finora. Chiedere che cosa farebbe diversamente il team se restasse solo il 20 percento del budget. Questo rende concreto l'obiettivo astratto e collega il numero alla politica del budget di errore.

**4. Dove la nostra misurazione potrebbe non cogliere un guasto che gli utenti sentirebbero?**
Ripercorrere posizioni delle sonde, intervallo, percorsi coperti e dipendenze. Chiedere quale guasto supererebbe tutte le sonde e romperebbe comunque il servizio per gli utenti. Concordare l'aggiunta di una nuova sonda o di una misura sugli utenti reali.

**5. Stiamo pianificando interruzioni che potremmo evitare?**
Osservare il downtime pianificato negli ultimi sei mesi e chiedere che cosa ha reso necessaria ciascuna interruzione. Alcune sono inevitabili, come un requisito di un fornitore. Altre derivano da un approccio di rilascio o migrazione che potrebbe cambiare. Chiedere che cosa servirebbe per eliminare la fonte maggiore e chi è responsabile di quel lavoro.

**6. Se il numero principale sembra perfetto, che cosa ci farebbe dubitare?**
Indicare i segnali che contraddirebbero la dashboard: volume dei reclami, contatti al supporto o il ricordo del team di reperibilità. Verificare se ne esistano in questo momento. Concordare un confronto da inserire nella dashboard.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna incidono sulla disponibilità ogni volta che modificano un servizio. Possono progettare per la distribuzione senza downtime, usare feature flag per limitare il raggio d'azione e trattare il budget di errore come input per le decisioni di rilascio, leggendo la disponibilità accanto alle misure di distribuzione (si veda l'Argomento 2.8 «Metriche DORA»).

### Team di servizio e operations

I team operativi possiedono le sonde, i record degli incidenti e le rotazioni che producono i dati. Dovrebbero mantenere aggiornate la definizione e l'elenco delle esclusioni, registrare con onestà l'inizio dell'impatto e riesaminare il monitoraggio rispetto agli incidenti reali. La disponibilità appartiene al servizio e alla sua rotazione, mai a un singolo ingegnere reperibile (si veda l'Argomento 5.7 «Metriche di toil e reperibilità»).

### Leadership e governance

I dirigenti stabiliscono gli incentivi che decidono se i dati sulla disponibilità siano sinceri. Un riesame che chiede «perché avete perso un nove?» insegna ai team a nascondere le interruzioni nelle esclusioni. Chiedere che cosa il team ha imparato e quale investimento ridurrebbe le interruzioni, e non pretendere più «nove» di quanti gli utenti noterebbero (si veda l'Argomento 8.4 «Metriche di fornitori e contratti», per gli impegni dei fornitori).

### Clienti e utenti

Gli utenti giudicano la disponibilità in base al fatto di aver potuto fare ciò per cui erano venuti. Tollerano una finestra di manutenzione segnalata molto meglio di una sorpresa. Offrire loro una pagina di stato con orari di inizio e fine onesti, e leggere il loro feedback accanto ai numeri (si veda l'Argomento 6.2 «Experience level agreement»).

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni gestisce una vetrina, un servizio di checkout e un servizio di tracciamento degli ordini. I numeri di questo esempio sono illustrativi.

Il team di checkout riporta il 99,95 percento di disponibilità basata sul tempo per il mese, il che consente 21,6 minuti di downtime non pianificato, e la dashboard mostra il 99,96 percento. La responsabile del supporto clienti è a disagio, perché i contatti al supporto sui pagamenti falliti sono aumentati nello stesso mese. Chiede al team di riesaminare la misurazione.

Il team individua tre problemi. La sonda controlla una pagina «il checkout è raggiungibile» ogni cinque minuti, non l'intero percorso di pagamento. I dati basati sulle richieste mostrano che in due serate un timeout del fornitore di pagamenti ha causato il fallimento di circa il 4 percento dei tentativi di pagamento per circa 50 minuti ciascuna, e la sonda non se n'è accorta perché la pagina in sé si caricava. E una migrazione di database che ha superato la finestra approvata di 18 minuti era stata registrata interamente come manutenzione pianificata.

Il team apporta quattro modifiche. Aggiunge una sonda sintetica per l'intero percorso di pagamento da due posizioni a intervalli di un minuto. Aggiunge cifre basate sulle richieste e ponderate sugli utenti, usando le sessioni arrivate al passaggio di pagamento. Riclassifica i minuti di superamento come non pianificati. E aggiunge al rapporto la quota di downtime pianificato e la copertura della misurazione.

Sulla base corretta, il mese mostra una disponibilità basata sul tempo del 99,93 percento, una disponibilità basata sulle richieste del 99,90 percento e una disponibilità ponderata sugli utenti del 99,84 percento, perché i guasti sono caduti nel picco serale. Tutte e tre mancano l'obiettivo del 99,95 percento, il che è scomodo. Il team e la responsabile del supporto concordano che il numero precedente era troppo generoso. Scrivono la definizione corretta nel registro delle metriche e mettono in atto la politica del budget di errore: per il mese successivo, le modifiche rischiose al checkout attendono che il budget si ricostituisca, e il team apre un record di problema per i timeout del fornitore di pagamenti (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»).

Il rischio di manipolazione che individuano è la rietichettatura. Un dirigente aveva suggerito di chiamare il superamento «manutenzione estesa» per proteggere l'obiettivo. La quota di downtime pianificato, con la sua regola per cui i superamenti diventano non pianificati, ha reso visibile la riclassificazione, e il team ha mantenuto la cifra onesta.

## Lente di settore

**Startup.** Un piccolo team ha spesso un solo servizio e poco monitoraggio. Partire con una sonda sul percorso più importante e una definizione di «attivo» di un paragrafo. Scegliere un obiettivo modesto, convertirlo in minuti ed evitare di promettere «nove» che il team non è ancora in grado di misurare.

**Piccola impresa.** Il servizio è spesso composto da strumenti in hosting più alcuni sistemi su misura, e la disponibilità dipende dai fornitori. Registrare le interruzioni dei fornitori per come interessano i propri utenti, confrontare con quanto il fornitore riferisce e mantenere l'insieme a due o tre cifre.

**Grande impresa.** Molti servizi, molti team e molti fornitori moltiplicano le definizioni in uso. Pubblicare una definizione standard di disponibilità con un breve elenco di varianti ammesse, mantenere aggiornato il registro delle metriche e assicurarsi che le regole su pianificato e non pianificato siano le stesse tra i team prima di confrontarli. Preferire la rendicontazione a livello di servizio alle classifiche dei team, poiché i servizi differiscono per carico e criticità.

**Governo e settore pubblico.** I servizi pubblici hanno spesso orari di servizio normativi, impegni pubblicati e contratti con crediti formali. Rendicontare rispetto ad essi come scritti, mostrare accanto la visione ponderata sugli utenti ed essere trasparenti sulle esclusioni (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi principali sono il tempo per scrivere la definizione del servizio e il registro, il monitoraggio che sonda i percorsi critici dall'esterno del dominio di guasto e l'impegno per unire dati di incidenti, modifiche e monitoraggio così da poter separare downtime pianificato e non pianificato. Il real user monitoring aggiunge costi di strumenti e di archiviazione. La maggior parte delle organizzazioni possiede già una parte dei dati, quindi il primo investimento riguarda di solito le definizioni.

Il ritorno viene da decisioni migliori e meno dispute. I team che misurano dal punto di vista dell'utente scoprono guasti che i controlli di stato non vedono, gli accordi sono più facili da gestire con una sola definizione e il costo di un «nove» in più può essere confrontato con il suo valore per gli utenti. Descrivere il beneficio come uno schema, come meno sorprese nei riesami degli accordi, e misurare le proprie basi di riferimento, come il divario tra il dato principale e le cifre ponderate sugli utenti. Non prendere in prestito cifre da altre organizzazioni.

## Anti-pattern e insidie

- **Citare i «nove» senza i minuti.** Un obiettivo che nessuno sa tradurre in downtime consentito non può guidare le decisioni. Mostrare i minuti consentiti e usati accanto a ogni obiettivo.
- **Misurare il server anziché il percorso.** Un controllo di stato verde può convivere con un accesso guasto. Sondare end-to-end i percorsi critici e confrontare con i dati degli utenti reali.
- **Lasciare che l'etichetta «pianificato» assorba i guasti.** Una categoria pianificata facile da reclamare svuota la cifra non pianificata. Richiedere l'approvazione prima dell'interruzione, comunicarla e riclassificare i superamenti.
- **Mediare tra servizi e ore.** Una cifra mista nasconde il servizio critico e l'ora di punta. Riportare per servizio e aggiungere una visione ponderata sugli utenti.
- **Promettere più «nove» di quanti le dipendenze consentano.** I componenti in serie non possono superare la loro disponibilità combinata. Moltiplicare prima di promettere e chiedere ai fornitori le loro cifre misurate.
- **Considerare il 100 percento come l'obiettivo.** Il costo sale ripidamente e il cambiamento rallenta. Scegliere l'obiettivo in base al bisogno degli utenti e usare il budget di errore.
- **Classificare team o persone in base ai loro «nove».** I servizi differiscono per carico e criticità, e una classifica insegna ai team a nascondere le interruzioni. Mostrare a ogni servizio il proprio andamento e confrontarlo con il proprio obiettivo.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizione e orologi | «Attivo» significa ciò che mostra lo strumento di monitoraggio; i tempi delle interruzioni sono stimati a posteriori | Scritta per alcuni servizi; i tempi delle sonde e degli incidenti non coincidono | Una definizione scritta per servizio con percorsi, ore, esclusioni e regole dell'orologio | Definizioni riesaminate con una cadenza; modifiche registrate e segnalate nei grafici | Definizioni allineate con fornitori e clienti e riviste quando smettono di informare le decisioni |
| Qualità della misurazione | Rapporti manuali o un singolo controllo di stato | Sonde per alcuni servizi; dati sulle richieste in alcuni log | Sonde dall'esterno verso l'interno sui percorsi critici più cifre basate sulle richieste da una fonte standard | Cifre ponderate sugli utenti da dati di utenti reali; copertura tracciata e campionata | Misurazioni condivise tra team e fornitori e riconciliate automaticamente |
| Gestione di pianificato e non pianificato | Nessuna distinzione; manutenzione conteggiata ad hoc | Etichetta pianificato usata da alcuni team, regole diverse | Una regola: approvato prima dell'interruzione e comunicato, superamenti riclassificati | Quota pianificata tracciata nel tempo con l'obiettivo di ridurla | La modifica senza downtime è l'impostazione predefinita, e il downtime pianificato è raro e negoziato |
| Uso nelle decisioni | Riportata dopo un reclamo | Riesaminata ogni mese dall'operatività | Obiettivi mostrati in minuti | La politica del budget di errore cambia il lavoro, con finanziamento | Disponibilità, costo ed esperienza bilanciati congiuntamente |

## Checklist

- [ ] Ogni servizio ha una definizione scritta di «disponibile» che indica i suoi percorsi utente critici.
- [ ] La finestra di misurazione, le ore incluse e il fuso orario sono dichiarati per ogni cifra.
- [ ] L'elenco delle esclusioni è scritto, riesaminato e mostrato accanto al dato principale.
- [ ] Il downtime pianificato richiede una modifica approvata e un preavviso; i superamenti contano come non pianificati.
- [ ] Le sonde operano dall'esterno del dominio di guasto, a un intervallo dichiarato, sui percorsi critici.
- [ ] Una cifra basata sulle richieste o ponderata sugli utenti affianca la cifra basata sul tempo.
- [ ] Ogni obiettivo è mostrato come minuti consentiti e minuti usati nella finestra corrente.
- [ ] Si riportano il numero di interruzioni e i percentili delle durate, non solo il totale.
- [ ] La disponibilità delle dipendenze è moltiplicata prima di promettere un obiettivo.
- [ ] Le modifiche alle definizioni sono registrate e segnalate nel grafico dell'andamento.
- [ ] La disponibilità è riportata per servizio e mai per persona.

## Prompt IA

**Redigere una definizione di disponibilità del servizio.**

```text
Sto scrivendo una definizione di disponibilità per [nome del servizio], un
[tipo di servizio] usato da [gruppi di utenti]. I suoi percorsi utente critici
sono [elenco dei percorsi]. Gli orari di servizio concordati sono [orari e
fuso orario]. Le dipendenze note sono [elenco]. Il nostro monitoraggio è
composto da [sonde, log, dati di utenti reali].

Redigi una definizione di una pagina che copra: che cosa conta come attivo per
ciascun percorso, la finestra di misurazione, le ore incluse, le esclusioni, la
regola per il downtime pianificato rispetto a quello non pianificato, l'avvio e
l'arresto dell'orologio per un'interruzione e le metriche da riportare. Non
inventare obiettivi né valori di riferimento. Elenca le tue ipotesi e le
domande a cui dovrei rispondere per completare la definizione.
```

**Convertire un obiettivo in downtime consentito e verificarlo.**

```text
Il nostro obiettivo per [nome del servizio] è [percentuale di disponibilità]
su [finestra, per esempio un mese di 30 giorni]. Il tempo incluso è [ore]. Le
nostre dipendenze essenziali e la loro disponibilità dichiarata o misurata
sono [elenco, oppure «sconosciuta»].

Calcola il downtime che questo obiettivo consente in minuti per la finestra e
per un anno, usando le ore incluse. Poi stima la migliore disponibilità
combinata se le dipendenze sono necessarie in serie e falliscono in modo
indipendente, e spiega la formula usata. Segnala dove i miei dati di partenza
sono troppo incerti per concludere alcunché. Non fornire cifre di disponibilità
per alcuna dipendenza che non ti ho indicato. Elenca le tue ipotesi.
```

**Esaminare un mese di interruzioni alla ricerca di problemi di classificazione.**

```text
Ecco i record delle interruzioni per [nome del servizio] per [mese]: [incollare
i record con inizio dell'impatto, ora di ripristino, etichetta pianificata o
non pianificata, ora di approvazione e note, senza dati personali].

Per ciascuna interruzione, verifica se l'etichetta pianificata o non
pianificata segue questa regola: [incollare la propria regola]. Individua i
record in cui l'inizio dell'impatto sembra tardivo, in cui un'interruzione
sembra divisa o unita e in cui un superamento avrebbe dovuto essere
riclassificato. Riassumi gli schemi per servizio e causa, mai per persona.
Dimmi che cosa non hai potuto giudicare dai dati. Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per individuare gli argomenti correlati e la salvaguardia abbinata per una misura di disponibilità che si sta per riportare.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una revisione di questo argomento mantenga ogni metrica abbinata a un vettore di manipolazione e a una salvaguardia.

## Punti chiave

- La disponibilità ha significato solo quando «attivo», il confine del servizio, gli orari e le esclusioni sono scritti dal punto di vista dell'utente.
- Le misure basate sulle richieste e ponderate sugli utenti descrivono i servizi distribuiti e il carico disomogeneo meglio dei minuti di guasto totale.
- Riportare insieme il downtime pianificato e non pianificato, e rendere difficile meritarsi l'etichetta «pianificato».
- Convertire ogni obiettivo in minuti e moltiplicare le dipendenze in serie prima di promettere un numero di «nove».
- Ogni «nove» in più costa più del precedente, quindi scegliere l'obiettivo in base a ciò di cui gli utenti hanno bisogno e usare il budget di errore per agire di conseguenza.
- Descrivere servizi e rotazioni, mai persone, e mettere alla prova ogni cifra principale con l'esperienza degli utenti.

## Riferimenti e letture di approfondimento

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Embracing Risk", https://sre.google/sre-book/embracing-risk/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Service Level Objectives", https://sre.google/sre-book/service-level-objectives/.
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, chapter "Implementing SLOs", https://sre.google/workbook/implementing-slos/.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [High availability](https://en.wikipedia.org/wiki/High_availability).
7. Wikipedia, [Downtime](https://en.wikipedia.org/wiki/Downtime).
8. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
9. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
10. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
11. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
12. Wikipedia, [Synthetic monitoring](https://en.wikipedia.org/wiki/Synthetic_monitoring).
13. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
14. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
