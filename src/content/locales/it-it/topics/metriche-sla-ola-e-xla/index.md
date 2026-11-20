# Metriche SLA, OLA e XLA

**Un accordo sul livello di servizio (SLA) dice al cliente che cosa è stato promesso, un accordo sul livello operativo (OLA) dice ai team interni che cosa si devono reciprocamente, e un accordo sul livello di esperienza (XLA) dice se le persone che usano il servizio stanno davvero meglio: servono tutti e tre, e vanno rendicontati con onestà anziché come un muro di verde.**

## Panoramica e motivazione

Un [accordo sul livello di servizio (SLA, service level agreement)](https://en.wikipedia.org/wiki/Service-level_agreement) è un impegno documentato tra un fornitore di servizi e un cliente su ciò che il servizio erogherà: orari, disponibilità, rapidità con cui il fornitore risponde agli incidenti e li risolve, e velocità con cui evade le richieste. In ITIL 4 (l'edizione 2019 del framework pubblicato dal titolare, oggi AXELOS sotto PeopleCert), la pratica di [gestione dei livelli di servizio](https://en.wikipedia.org/wiki/ITIL) definisce questi obiettivi, li monitora e ne riferisce. Un [accordo sul livello operativo (OLA, operational level agreement)](https://en.wikipedia.org/wiki/Operational-level_agreement) è la controparte interna: un accordo tra team della stessa organizzazione, per esempio tra il service desk e il team di rete, su che cosa farà ciascuno e con quale rapidità, affinché lo SLA rivolto al cliente possa essere rispettato. Un contratto di supporto (underpinning contract) svolge lo stesso ruolo per un fornitore esterno (si veda l'Argomento 8.4 «Metriche di fornitori e contratti»).

Un accordo sul livello di esperienza (XLA, experience level agreement) è il più recente dei tre. Registra un risultato concordato in termini di come le persone vivono il servizio: con quanta facilità hanno portato a termine il proprio lavoro, che cosa hanno provato nell'interazione e se il servizio le ha aiutate a raggiungere l'obiettivo. L'idea si è affermata nella pratica della gestione dei servizi perché uno SLA può essere rispettato mentre gli utenti sono insoddisfatti. Questo argomento è il riferimento per i tre accordi e per la loro rendicontazione. L'approfondimento su come misurare l'esperienza appartiene all'Argomento 6.2 «Experience level agreement», e le controparti ingegneristiche degli obiettivi appartengono all'Argomento 5.2 «SLI, SLO e budget di errore».

Accanto a questi accordi stanno tre concetti propri della consegna continua e dell'affidabilità. Un [indicatore di livello di servizio (SLI, service level indicator)](https://en.wikipedia.org/wiki/Service_level_indicator) è una proprietà misurata di un servizio, come la quota di richieste servite con successo. Un [obiettivo di livello di servizio (SLO, service level objective)](https://en.wikipedia.org/wiki/Service_level_objective) è il traguardo interno per uno SLI, di solito più severo di qualsiasi cosa promessa a un cliente. La pratica della [site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) tratta lo SLO, e il budget di errore che ne deriva, come uno strumento decisionale condiviso tra prodotto e operatività. Lo SLA è il contratto; lo SLO è il traguardo ingegneristico; lo SLI è la misurazione. Tenere distinti i tre evita una confusione frequente, in cui una clausola penale contrattuale viene usata per orientare le decisioni ingegneristiche quotidiane.

La famiglia ha un noto modo di fallire, chiamato rendicontazione «anguria» (watermelon reporting): un rapporto verde fuori e rosso dentro. Ogni riga dello SLA risulta rispettata, eppure i clienti sono frustrati, perché le misure sono state scelte per ciò che il fornitore poteva raggiungere con sicurezza anziché per ciò che sta a cuore al cliente, oppure perché le medie nascondono la coda sfavorevole, oppure perché l'orologio è stato fermato durante la parte peggiore dell'attesa. Il rimedio è in parte tecnico (percentili, orologi onesti, indicatori centrati sull'utente) e in parte sociale (accordi negoziati come una conversazione, riesaminati con una cadenza e letti come una domanda sul servizio, non come un verdetto su un team). L'avvertimento più ampio sulle misure che diventano obiettivi si trova nell'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche».

I team agili ragionano in termini di obiettivi e budget; i responsabili dei livelli di servizio ITIL ragionano in termini di accordi e riesami. Le due visioni si integrano: l'accordo enuncia il risultato, gli obiettivi e gli indicatori sono il modo in cui il team mantiene la promessa, e le misure di esperienza confermano che ciò è servito.

Un ultimo termine: un [percentile](https://en.wikipedia.org/wiki/Percentile) è il valore al di sotto del quale ricade una quota indicata di osservazioni. L'85º percentile del tempo di risoluzione è il tempo entro cui l'85 percento dei ticket è stato risolto. La maggior parte degli obiettivi SLA è scritta come percentile o come quota, perciò il modo in cui il percentile viene calcolato e ciò che vi è incluso costituiscono il cuore dell'argomento (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

## Principi chiave

- **Concordare i risultati con il cliente, poi misurarli.** Un accordo è un'enunciazione negoziata di ciò di cui il cliente ha bisogno e che il fornitore può sostenere, scritta con le parole del cliente e riesaminata insieme.
- **Riportare distribuzioni e quote, mai una media singola.** Un tempo medio di risoluzione che rispetta l'obiettivo può poggiare su una lunga coda di lavoro molto in ritardo. Indicare il percentile, la popolazione e il conteggio.
- **Rendere onesto l'orologio.** Ogni obiettivo ha un evento di avvio, un evento di arresto e un elenco di condizioni di sospensione. Pubblicare le regole dell'orologio e riportare con quale frequenza si usa ciascuna sospensione.
- **Stratificare gli accordi.** Lo SLA poggia su OLA e contratti con i fornitori, e gli obiettivi fissati all'interno del team dovrebbero essere più stringenti delle promesse fatte all'esterno. Una lacuna a qualsiasi livello emerge come violazione al vertice.
- **Abbinare ogni misura operativa a una misura di esperienza.** Un obiettivo rispettato con un'esperienza scadente, o l'inverso, è il segnale più utile del rapporto.
- **Contare i quasi-superamenti.** Il lavoro concluso appena entro il limite dice più sul rischio del lavoro concluso ben entro il limite.
- **Riferire su team e servizi, mai su persone.** Gli accordi descrivono ciò a cui un servizio o un team si impegna. Non sono un modo per classificare le persone.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasso di rispetto dello SLA | Quota di elementi misurati (incidenti, richieste o finestre temporali) che hanno rispettato un obiettivo SLA dichiarato nel periodo | Elementi che hanno rispettato l'obiettivo divisi per elementi misurati. L'orologio parte dall'istante registrato definito nell'accordo (per esempio la creazione del ticket) e si ferma all'evento di arresto definito (per esempio il ripristino confermato). Esclusi: elementi annullati come duplicati e tempo compreso in esclusioni concordate come la manutenzione programmata. Riportare il conteggio accanto alla quota | Percentuale, con n | Timestamp dello strumento ITSM; dati di monitoraggio per gli obiettivi basati sul tempo | Gestione dei livelli di servizio; gestione degli incidenti; gestione delle richieste di servizio | Rispetto dell'obiettivo di livello di servizio su una finestra mobile (si veda l'Argomento 5.2 «SLI, SLO e budget di errore») | Mensile, con una vista interna settimanale |
| Quota di quasi-superamenti | Quota di elementi che hanno rispettato l'obiettivo ma si sono conclusi nell'ultimo decimo del tempo consentito | Elementi conclusi al 90 percento o più del tempo obiettivo e ancora entro di esso, divisi per elementi che hanno rispettato l'obiettivo. Stesso orologio dello SLA. Non applicabile alle finestre temporali (si applica solo alle misure di tempo-all'obiettivo) | Percentuale | Timestamp dello strumento ITSM | Gestione dei livelli di servizio | Proporzione di lavoro vicino all'aspettativa di livello di servizio in un grafico di flusso (si veda l'Argomento 2.1 «Misure del flusso») | Mensile |
| Quota di sospensione dell'orologio | Quota del tempo trascorso totale del ticket spesa in stati che sospendono l'orologio SLA | Tempo totale di sospensione diviso per il tempo totale trascorso dall'avvio all'arresto, per gli elementi inclusi. Esclude gli elementi per cui non è stato usato alcuno stato di sospensione. Riportare per stato di sospensione | Percentuale | Storico degli stati dello strumento ITSM | Gestione dei livelli di servizio; gestione degli incidenti | Tempo di blocco e tempo di attesa in una vista di flusso (si veda l'Argomento 2.4 «Metriche del flusso di valore») | Mensile |
| Tasso di rispetto dell'OLA | Quota di passaggi di consegne interni che hanno rispettato l'obiettivo OLA tra due team | Passaggi completati entro l'obiettivo OLA divisi per passaggi ricevuti. L'orologio parte quando il team ricevente viene assegnato e si ferma quando restituisce o chiude l'elemento. Esclusi: elementi riassegnati per errore, contati separatamente | Percentuale, con n | Storico delle assegnazioni dello strumento ITSM | Gestione dei livelli di servizio; gestione degli incidenti | Tempo di attesa nel passaggio di consegne e lavoro bloccato tra team (si veda l'Argomento 9.3 «Metriche di collaborazione e passaggi di consegne») | Mensile |
| Tempo di attesa nel passaggio di consegne (85º percentile) | Tempo in cui un elemento attende nella coda di un team ricevente prima che il lavoro inizi | 85º percentile del tempo tra l'assegnazione al team ricevente e la prima azione registrata da quel team. Esclusi: elementi in attesa del cliente | Ore o minuti | Storico di assegnazione e attività dello strumento ITSM | Gestione dei livelli di servizio; gestione degli incidenti | Tempo in coda in una vista di flusso (si veda l'Argomento 2.3 «Lavoro in corso e code») | Settimanale |
| Punteggio di esperienza per percorso | Valutazione del cliente o dell'utente su come il servizio ha supportato un percorso definito, come ottenere un nuovo laptop o riprendersi da un'interruzione | Media e distribuzione delle valutazioni del sondaggio su una scala fissa per i percorsi completati nel periodo. Riportare il tasso di risposta e la composizione dei rispondenti. Esclusi: sondaggi parziali. Non una media singola, quindi mostrare la distribuzione | Scala di valutazione, con tasso di risposta | Breve sondaggio post-interazione; eventi del percorso dallo strumento ITSM | Gestione dei livelli di servizio; pratiche di soddisfazione del cliente (si veda l'Argomento 6.1 «Metriche di soddisfazione del cliente») | Feedback del cliente e misure di risultato | Mensile, mostrando ogni ondata |
| Divario «anguria» (watermelon gap) | Quota di periodi di rendicontazione o servizi in cui lo SLA risulta rispettato mentre la misura di esperienza o una misura di impatto sugli utenti risulta scadente | Servizi (o periodi) con rispetto dello SLA pari o superiore all'obiettivo ed esperienza inferiore al livello concordato, divisi per servizi (o periodi) con rispetto dello SLA pari o superiore all'obiettivo. Il livello di esperienza deve essere concordato prima che il periodo venga valutato | Percentuale dei servizi verdi | Rispetto dello SLA e punteggio di esperienza insieme | Gestione dei livelli di servizio; miglioramento continuo | Retrospettiva dei risultati rispetto agli esiti | Trimestrale |
| Copertura e aggiornamento degli accordi | Quota di servizi attivi i cui SLA, OLA e contratti con i fornitori esistono e sono stati riesaminati entro l'intervallo concordato | Servizi con tutti e tre i livelli documentati e riesaminati entro l'intervallo, divisi per servizi attivi nel catalogo dei servizi. L'intervallo è stabilito dall'organizzazione. Esclusi: servizi in dismissione | Percentuale | Catalogo dei servizi (service catalogue nell'ortografia propria di ITIL) e registro degli accordi | Gestione dei livelli di servizio; gestione del catalogo dei servizi; gestione dei fornitori | Accordi di lavoro e statuti dei team riesaminati con cadenza regolare | Trimestrale |

## Raccomandazioni

### Impostare gli accordi

**1. Scrivere ogni SLA nel linguaggio del cliente e legarlo a un solo risultato.** Partire da ciò di cui il cliente ha bisogno, per esempio «un dipendente bloccato fuori torna rapidamente al lavoro», e poi scegliere la misura. Un accordo breve con una manciata di obiettivi significativi vale più di uno lungo che nessuno legge. Mettere per iscritto l'orologio di ogni obiettivo: evento di avvio, evento di arresto e condizioni di sospensione (si veda l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»).

**2. Enunciare gli obiettivi come percentili o quote, con una popolazione dichiarata.** «Il 90 percento degli incidenti di priorità 2 ripristinato entro quattro ore» dice più di «ripristino medio sotto le due ore». Concordare che cosa conta: quali priorità, quali orari, quali tipi di richiesta. Mostrare il conteggio con ogni percentuale, in modo che un mese con otto incidenti non venga letto come un mese con ottocento.

**3. Derivare gli OLA dallo SLA e assegnare a ciascuno un team responsabile con nome.** Procedere a ritroso dall'obiettivo del cliente: se al cliente è promesso il ripristino entro quattro ore, gli OLA devono lasciare spazio a rilevamento, smistamento, passaggi di consegne e correzione. Scrivere ogni OLA come un breve accordo reciproco con un team ricevente, un tempo di risposta atteso e una via per le controversie. Un OLA esiste per aiutare i team a pianificare, quindi va mantenuto leggero quanto la relazione consente.

**4. Mantenere gli obiettivi più stringenti della promessa.** Fissare lo SLO interno a un livello più severo dello SLA, così che una settimana negativa venga notata e corretta prima di una violazione visibile al cliente (si veda l'Argomento 5.2 «SLI, SLO e budget di errore»). Trattare lo SLA come una soglia minima che interessa a finanza e ufficio legale, e lo SLO come il numero con cui gli ingegneri si orientano. Usare il budget di errore come il modo in cui prodotto e operatività decidono tra lavoro sulle funzionalità e lavoro sull'affidabilità.

### Misurare con onestà

**5. Pubblicare le regole dell'orologio e riferire sulle sospensioni.** La via più comune verso un rapporto verde è uno stato di sospensione generoso, come «in attesa del cliente» usato quando è il fornitore ad attendere. Riportare la quota di sospensione dell'orologio per stato di sospensione, campionare ogni mese alcuni ticket sospesi e chiedersi se il cliente concorderebbe che l'orologio andava fermato. Mantenere breve l'elenco dei motivi di sospensione ammessi e scriverlo nell'accordo.

**6. Mostrare l'intera distribuzione accanto all'obiettivo.** Affiancare al tasso di rispetto la mediana, l'85º o 95º percentile e il decile peggiore. Un rispetto fisso del 95 percento può nascondere una coda di lavoro che ha richiesto giorni (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

**7. Tracciare i quasi-superamenti e le cause delle violazioni.** La quota di quasi-superamenti dice quanta fortuna ci sia nel numero verde. Quando si verifica una violazione, registrare la categoria di causa e se fosse un problema di capacità, di passaggio di consegne, di fornitore o di definizione. Collegare le categorie maggiori alla gestione dei problemi (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»).

**8. Misurare la coda degli OLA, non solo il rispetto.** Il tempo di attesa nel passaggio di consegne all'85º percentile mostra dove il lavoro si blocca, molto prima che compaia una violazione dello SLA. Condividerlo con il team mittente e con quello ricevente, descrivendolo come una proprietà del flusso tra loro. La conversazione riguarda la coda, mai le persone che ne fanno parte (si veda l'Argomento 2.3 «Lavoro in corso e code»).

### Aggiungere l'esperienza e colmare il divario

**9. Abbinare ogni SLA a una misura di esperienza per lo stesso percorso.** Porre agli utenti una breve domanda dopo l'interazione su se ha funzionato e su quanto è stata faticosa, e riportare il tasso di risposta e la composizione dei rispondenti. Concordare in anticipo quale livello valga come sufficiente, così che uno XLA sia un risultato negoziato e non un numero inventato a posteriori (si veda l'Argomento 6.2 «Experience level agreement» e l'Argomento 6.1 «Metriche di soddisfazione del cliente»).

**10. Riportare il divario «anguria» e trattarlo come un riscontro.** Tracciare con quale frequenza uno SLA è rispettato mentre l'esperienza è scadente. Un divario crescente indica che le misure dello SLA si stanno allontanando da ciò che sta a cuore agli utenti, e la risposta giusta è rivedere la misura, non spiegare la discrepanza. Riesaminarlo trimestralmente con un rappresentante del cliente presente.

**11. Riesaminare gli accordi con una cadenza e ritirare quelli che nessuno usa.** Verificare ogni accordo rispetto al catalogo dei servizi, ai contratti con i fornitori e al lavoro effettivo. Un insieme più piccolo di accordi vivi è più facile da rendicontare e più difficile da manipolare.

**12. Riportare ogni servizio in un'unica vista che combini tutti e tre i livelli.** Mostrare in una sola pagina, per ogni servizio, il rispetto dello SLA, la distribuzione, le attese nei passaggi OLA, il punteggio di esperienza e il lavoro di miglioramento aperto. Ricavare lo stato dai dati, non da un colore scelto dal responsabile del servizio. Rendere la pagina aperta al cliente e ai team (si veda l'Argomento 11.1 «Progettare una dashboard delle metriche di servizio»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tasso di rispetto dello SLA | Scegliere un obiettivo facile; chiudere i ticket in anticipo e riaprirli dopo; riclassificare la priorità al ribasso; escludere i casi difficili come «fuori ambito» | Tasso di riapertura e tasso di riclassificazione della priorità; campione di ticket chiusi letto con il cliente; riesame trimestrale dell'elenco delle esclusioni |
| Quota di quasi-superamenti | Fermare l'orologio un minuto prima del limite, poi proseguire il lavoro fuori registro; dividere un ticket in due più brevi | Tempo dall'ultimo contatto con il cliente al ripristino confermato; numero di ticket collegati o figli per incidente |
| Quota di sospensione dell'orologio | Usare stati di sospensione su ticket che non attendono il cliente; spostare il lavoro in uno stato non conteggiato | Motivi di sospensione verificati su un campione; quota di sospensioni annullate dal cliente; punteggio di esperienza per i ticket sospesi |
| Tasso di rispetto dell'OLA | Rimandare i passaggi al mittente per riavviare l'orologio; segnare gli elementi come accettati senza avviare il lavoro | Numero di rimbalzi per elemento e tempo totale al ripristino tra i team; l'esito SLA end-to-end |
| Tempo di attesa nel passaggio di consegne (85º percentile) | Assegnare a una persona anziché alla coda del team per nascondere l'attesa; registrare una prima azione di facciata | Qualità della prima azione campionata; tempo dall'assegnazione al primo aggiornamento visibile al cliente |
| Punteggio di esperienza per percorso | Inviare i sondaggi solo agli utenti soddisfatti; porre domande suggestive; istruire chi risponde a dare valutazioni alte | Composizione dei rispondenti rispetto alla popolazione; tasso di risposta mostrato accanto al punteggio; commenti aperti letti nel riesame |
| Divario «anguria» (watermelon gap) | Fissare basso il livello di esperienza così che il divario resti piccolo; cambiare la misura di esperienza quando cala | Livello di esperienza concordato in anticipo e modifiche registrate con le motivazioni; andamento dell'intera distribuzione |
| Copertura e aggiornamento degli accordi | Segnare un accordo come riesaminato senza un riesame reale; contare un documento abbozzato come SLA | Evidenza del riesame (partecipanti, modifiche, decisioni); campione di accordi letti per il contenuto effettivo e l'approvazione del cliente |

Una lettura sana mostra un rispetto che si muove per ragioni comprensibili, quasi-superamenti pochi e spiegati, sospensioni che restano nell'elenco concordato, attese nei passaggi di consegne discusse dai team che ne sono responsabili e una misura di esperienza che concorda in larga parte con lo SLA. Dove le due divergono, il team dispone già di una nota sulla causa e di una voce di miglioramento.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| SLA contrattuali con penali | Chiari, applicabili, riconosciuti giuridicamente | Incoraggiano giochi sull'orologio e rendicontazione difensiva; le penali possono guastare il rapporto |
| SLA senza penali, con riesame regolare | Costruiscono fiducia e dati onesti; si concentrano sull'apprendimento | Meno leva quando un fornitore manca sistematicamente gli obiettivi |
| OLA dettagliati tra tutti i team | Aspettative chiare e meno controversie | Burocrazia; i team ottimizzano per il proprio orologio anziché per quello del cliente |
| OLA leggeri con un obiettivo end-to-end condiviso | Incoraggia la cooperazione; meno documentazione | Richiede fiducia e buona visibilità delle code per risolvere le controversie |
| Aggiungere XLA agli SLA | Mostra se il servizio aiuta le persone | I dati dei sondaggi sono più rumorosi e lenti; l'attribuzione è più difficile |

Mantenere piccolo l'accordo, riportare la distribuzione e usare i dati di esperienza per verificare i dati operativi. Dedicare impegno alle regole dell'orologio e ai passaggi di consegne, dove nasce la maggior parte del disaccordo su un numero.

## Domande da discutere con il team

**1. Se il nostro rapporto SLA è tutto verde, che cosa ci aspetteremmo che gli utenti dicessero del servizio?**
Chiedere al gruppo di indicare un servizio rimasto verde per diversi mesi e poi raccogliere ciò che gli utenti dicono effettivamente nei commenti e nei reclami. Confrontare i due. Il facilitatore dovrebbe cercare divari tra la misura e l'esperienza vissuta, e annotare quali misure sono state scelte perché facili da raggiungere.

**2. Dove si ferma il nostro orologio, e chi lo ha deciso?**
Ripercorrere le regole di avvio, arresto e sospensione per un obiettivo importante e chiedere chi ha scritto ciascuna. Osservare la quota di ticket in uno stato di sospensione e chiedersi se i clienti sarebbero d'accordo. Concordare una regola da rendere più stringente o più chiara.

**3. Quali dei nostri OLA aiutano i team a pianificare, e quali servono solo ad attribuire colpe?**
Elencare gli accordi interni e chiedere chi legge ciascuno e quando. Discutere che cosa accade dopo un OLA mancato: una conversazione sulla coda o una ricerca del colpevole. Lo scopo è spostare la discussione verso il flusso di lavoro tra i team. Scegliere un OLA da semplificare o ritirare.

**4. Quanta parte del nostro verde è fortuna?**
Mostrare la quota di quasi-superamenti per l'obiettivo più importante. Discutere che cosa accadrebbe se il mese successivo avesse qualche caso difficile in più o qualche persona disponibile in meno. Chiedersi se il team abbia margine e dove si trovi.

**5. Che cosa vorrebbe il cliente che promettessimo e che oggi non misuriamo?**
Invitare il rappresentante del cliente o un utente a descrivere con parole sue ciò che conta, come poter raggiungere una persona o ricevere un laptop prima del primo giorno. Raccogliere due o tre risultati. Decidere quali potrebbero diventare una breve domanda di sondaggio o un evento già presente nei dati, e come il gruppo concorderebbe un buon livello.

**6. Come ci accorgeremmo che le nostre misure SLA si sono allontanate da ciò che sta a cuore agli utenti?**
Discutere il divario «anguria» come segnale e chiedere chi lo osserva. Considerare con quale frequenza gli accordi vengono riesaminati e se il cliente partecipa. Concordare una data di riesame e le evidenze da portare, incluso un campione di ticket e gli ultimi risultati di esperienza.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna che gestiscono anche i propri servizi rispettano lo SLA tramite i propri obiettivi e budget di errore, e ne sentono il costo quando una penale SLA o un'escalation del cliente interrompe il lavoro pianificato. Dovrebbero mantenere gli SLO più stringenti degli SLA e trattare lo SLA come una soglia di sicurezza, non come l'obiettivo quotidiano (si veda l'Argomento 5.2 «SLI, SLO e budget di errore»).

### Team di servizio e operations

I team operativi portano gli orologi. Hanno bisogno di regole chiare per le condizioni di avvio, arresto e sospensione, di OLA condivisi che indichino la coda ricevente e di visibilità sulle attese nei passaggi di consegne. Dovrebbero riferire con chiarezza le cause delle violazioni e usarle come input per il lavoro su problemi e capacità (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»). Dovrebbero resistere alla pressione di spiegare un risultato tramite l'orologio anziché correggerne la causa.

### Leadership e governance

I dirigenti usano i rapporti SLA per vedere se gli impegni sono rispettati e dove investire. Dovrebbero chiedere distribuzioni, quota di sospensione dell'orologio, quota di quasi-superamenti e divario «anguria», e dovrebbero trattare con curiosità una serie ininterrotta di verde. Finanziare il lavoro di miglioramento che segue un'analisi delle violazioni e proteggere dalla colpevolizzazione la rendicontazione onesta conta più dell'obiettivo stesso (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

### Clienti e utenti

I clienti vogliono che l'accordo descriva ciò che percepiscono: quanto rapidamente il problema viene risolto, con quale frequenza si ripresenta e se possono raggiungere qualcuno che li aiuta. Dovrebbero far parte del riesame degli accordi e avere un modo per dire quando un rapporto verde non corrisponde alla loro esperienza. Una sintesi leggibile di una pagina, con le ragioni di ogni violazione e la correzione pianificata, costruisce più fiducia di una lunga tabella di rispetto degli obiettivi.

## In pratica: un esempio di ITIL agile

Il reparto IT di un ospedale regionale supporta un sistema di pianificazione clinica usato dal personale dei reparti. Il responsabile del servizio, il service desk, il team applicativo e il team infrastrutturale si incontrano ogni mese. Tutti i numeri seguenti sono illustrativi.

Lo SLA promette che il 90 percento degli incidenti di priorità 2 (perdita parziale di funzionalità che interessa un reparto) sia ripristinato entro quattro ore, misurate dalla creazione del ticket, in un servizio attivo 24 ore su 24, sette giorni su sette. Il rapporto mensile mostra un rispetto del 94 percento su 36 incidenti (illustrativo), comodamente verde. Il sondaggio di esperienza, inviato dopo ogni chiusura di priorità 2, ha un tasso di risposta del 41 percento (illustrativo) e una valutazione mediana di 3 su una scala a cinque punti, ben al di sotto del livello di 4 che il responsabile del servizio e i responsabili di reparto avevano concordato come XLA. Il divario «anguria» è visibile per il terzo mese consecutivo.

Il team osserva la distribuzione. Il ripristino mediano è di 1 ora e 40 minuti (illustrativo), ma il 95º percentile è di 3 ore e 50 minuti (illustrativo), e la quota di quasi-superamenti è del 31 percento (illustrativo): quasi un terzo degli incidenti «rispettati» si è concluso nell'ultimo decimo del tempo consentito. Esaminano la quota di sospensione dell'orologio e scoprono che il 22 percento (illustrativo) del tempo trascorso è speso nello stato «in attesa del cliente». Un campione di dieci ticket sospesi ne mostra quattro in cui il reparto aveva risposto e il ticket è rimasto sospeso fino al turno successivo, e in altri tre il team applicativo attendeva il team infrastrutturale. Il tempo di attesa nel passaggio di consegne all'85º percentile per la coda infrastrutturale è di 2 ore e 10 minuti (illustrativo) a fronte di un OLA di 30 minuti (illustrativo), e il tasso di rispetto dell'OLA per quel passaggio è del 58 percento (illustrativo).

La decisione è pratica. Cambiano la regola dell'orologio in modo che «in attesa del cliente» possa essere usato solo dopo una richiesta documentata al cliente, e l'orologio riprenda alla risposta successiva. Aggiungono un percorso di reperibilità per la coda infrastrutturale durante gli orari dei reparti e concordano un OLA più ridotto, con un riesame dopo un mese. Aggiungono la misura di esperienza e il divario «anguria» al rapporto mensile di una pagina e invitano un responsabile di reparto al riesame. Abbassano inoltre lo SLO interno a un ripristino più stringente entro quattro ore per il 95 percento degli incidenti, così che il team si accorga dei problemi prima che lo SLA sia a rischio.

Un rischio di manipolazione emerge nel secondo mese. Dopo la modifica della regola di sospensione, il rispetto scende all'89 percento (illustrativo), e un dirigente chiede al service desk di «ricontrollare le priorità». Il team individua un picco di declassamenti dalla priorità 2 alla priorità 3, abbina il rispetto ai tassi di riclassificazione e di riapertura e richiede una motivazione nel registro per qualsiasi cambio di priorità. Nel terzo mese il rispetto è del 91 percento (illustrativo), il 95º percentile è più basso, la quota di quasi-superamenti è scesa e la valutazione mediana di esperienza è salita a 3,8 (illustrativo). Il divario si riduce perché il lavoro è migliorato, e i numeri sono credibili.

## Lente di settore

**Startup.** Una piccola azienda spesso non ha alcuno SLA formale, solo una promessa informale a pochi primi clienti. Scrivere una pagina che indichi gli orari del servizio, un obiettivo di risposta e un obiettivo di ripristino espresso come percentile, e tenere uno SLO all'interno del team. Le conversazioni con i clienti prendono il posto di uno XLA, quindi annotare ogni mese che cosa dicono i tre clienti più importanti.

**Piccola impresa.** Un piccolo team IT dipende di solito molto da fornitori esterni, perciò i contratti di supporto contano più degli OLA interni. Verificare che l'impegno di ciascun fornitore sia almeno rigoroso quanto lo SLA offerto ai propri utenti, e tracciare le prestazioni effettive del fornitore (si veda l'Argomento 8.4 «Metriche di fornitori e contratti»). Una semplice pagina mensile, con rispetto degli obiettivi, quasi-superamenti e un breve sondaggio agli utenti, è sufficiente.

**Grande impresa.** Le grandi organizzazioni hanno bisogno di un registro degli accordi e di una metrica di copertura. Standardizzare le regole dell'orologio e le definizioni tra i servizi, così che gli aggregati siano significativi (si veda l'Argomento 1.4 «Governance e responsabilità delle metriche»). Diffidare dell'effetto «anguria» negli aggregati dirigenziali, dove centinaia di righe verdi nascondono pochi servizi con gravi disagi per gli utenti.

**Governo e settore pubblico.** Gli enti pubblici hanno spesso standard di servizio normativi, regole di appalto che fissano gli SLA nei contratti e l'obbligo di pubblicare i risultati. Mantenere chiara e verificabile la misura pubblicata, conservare le regole dell'orologio e le evidenze per l'audit, e trattare i cittadini come clienti con voce nel riesame (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»). Dove il contratto è rigido, aggiungere una misura di esperienza accanto ad esso senza modificare il testo contrattuale.

## Business case: motivazioni, ROI e TCO

Il caso a favore di metriche di accordo migliori è un caso di fiducia e di riduzione dello spreco di impegno. Rapporti che corrispondono a come gli utenti si sentono riducono escalation e controversie, accorciano la discussione mensile su di chi sia il numero giusto e consentono ai dirigenti di finanziare il lavoro che conta. OLA chiari riducono i ritardi nei passaggi di consegne, tra i maggiori contributori ai ripristini lunghi. Un divario «anguria», individuato presto, evita il costo maggiore di un rapporto con il cliente o di un rinnovo contrattuale che va male.

I costi sono modesti: il tempo per scrivere e riesaminare gli accordi, dati affidabili su orologio e passaggi di consegne (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»), un breve sondaggio e un riesame mensile. Il costo totale cresce con il numero di accordi, quindi pochi e semplici sono più economici da gestire.

Il ritorno appare come meno violazioni a sorpresa, meno tempo speso a spiegare i rapporti e scelte di investimento meglio informate. Trattare questi elementi come schemi da osservare e confrontare nel tempo, non come un calcolo. Confrontare l'impegno di un riesame mensile con il costo di una controversia degenerata o di un rinnovo perso nella propria organizzazione, usando i propri dati (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Riportare solo medie.** Una media nasconde una lunga coda di lavoro in ritardo. Riportare percentili, quota di quasi-superamenti e conteggio.
- **Scrivere lo SLA attorno a ciò che è facile da raggiungere.** Un obiettivo scelto per comodità produce un rapporto sempre verde. Partire da ciò di cui il cliente ha bisogno e mostrare apertamente il divario.
- **Sospendere l'orologio per migliorare il numero.** Stati di sospensione generosi trasformano lo SLA in finzione. Pubblicare le regole di sospensione, verificare campioni e riportare la quota di sospensione.
- **Gli OLA come arma.** Un OLA usato per incolpare il team successivo insegna ai team a rimbalzare il lavoro. Trattare i mancati rispetti come informazioni sulla coda e correggere il flusso.
- **Rendicontazione guidata dalle penali.** Penali pesanti incentivano classificazioni difensive e dispute sull'orologio. Usare le penali con parsimonia e abbinarle ai tassi di riapertura e di riclassificazione.
- **Dati di esperienza senza tasso di risposta.** Un punteggio alto proveniente da un campione minuscolo e autoselezionato inganna. Mostrare tasso di risposta e composizione dei rispondenti accanto a ogni risultato.
- **Accordi che nessuno riesamina.** Gli accordi obsoleti descrivono un servizio che non esiste più. Pianificare i riesami e ritirare ciò che non viene usato.
- **Obiettivi individuali ricavati da accordi di team.** Dividere uno SLA di team in quote personali porta a chiusure frettolose e a classifiche. Mantenere l'accordo al livello del servizio e del team.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Progettazione degli accordi | Promesse verbali o modelli copiati; obiettivi scelti per abitudine | Alcuni SLA scritti; OLA rari; orologi diversi tra i team | Un breve modello con obiettivi basati sui risultati, percentili e regole dell'orologio scritte | Accordi riesaminati con una cadenza, con il cliente e legati agli SLO | Livelli di SLA, OLA, contratto con i fornitori e SLO adeguati insieme al mutare delle condizioni |
| Qualità della misurazione | Conteggi manuali; medie; sospensioni non documentate | Rispetto basato su strumenti per alcuni servizi; uso delle sospensioni non riesaminato | Una definizione e una fonte di dati; distribuzioni e quota di sospensione mostrate | Quasi-superamenti, cause delle violazioni e attese nei passaggi di consegne tracciati nel tempo e campionati | Dati tra team e fornitori riconciliati; definizioni riviste quando non informano più le decisioni |
| Collegamento con l'esperienza | Nessun feedback degli utenti legato allo SLA | Sondaggi ad hoc per alcuni servizi | Un breve sondaggio per i percorsi chiave, con tasso di risposta mostrato | Obiettivi di esperienza concordati con i clienti e divario «anguria» riportato | Misure di esperienza e operative guidano il lavoro di miglioramento condiviso con i clienti |
| Uso nel miglioramento | Riportato dopo un reclamo | Violazioni discusse nelle riunioni di team | Riesame mensile con responsabili e azioni | Le cause delle violazioni alimentano miglioramenti finanziati e lavoro sui problemi | Clienti, fornitori e team pianificano insieme il miglioramento a partire dalla stessa vista |

## Checklist

- [ ] Ogni SLA indica il proprio risultato, il proprio obiettivo come percentile o quota e la propria popolazione.
- [ ] Evento di avvio, evento di arresto e condizioni di sospensione ammesse sono scritti per ogni obiettivo.
- [ ] Ogni SLA rivolto al cliente ha OLA o contratti con i fornitori che vi rientrano, ciascuno con un team responsabile con nome.
- [ ] Gli obiettivi interni sono più stringenti degli obiettivi SLA promessi.
- [ ] I rapporti mostrano la distribuzione, il conteggio, la quota di quasi-superamenti e la quota di sospensione dell'orologio.
- [ ] Ogni mese si legge un campione di ticket sospesi e chiusi.
- [ ] Ogni servizio chiave ha una misura di esperienza con un livello concordato, e il tasso di risposta è mostrato.
- [ ] Il divario «anguria» è tracciato e riesaminato con un rappresentante del cliente.
- [ ] Gli accordi sono riesaminati con una cadenza e ritirati quando non usati.
- [ ] Nessuna metrica di accordo è usata per classificare singole persone.

## Prompt IA

**Esaminare uno SLA alla ricerca di problemi di orologio e di formulazione.**

```text
Ecco il testo del nostro SLA per [servizio]: [incollare il testo dell'accordo].
Gli obiettivi sono [elenco degli obiettivi], misurati in [strumento].
Individua le ambiguità nell'evento di avvio, nell'evento di arresto e nelle
condizioni di sospensione, i punti in cui una media potrebbe nascondere una
lunga coda e le formulazioni che un cliente potrebbe leggere in modo diverso
da noi. Suggerisci formulazioni più chiare e le domande che dovrei porre al
cliente. Non inventare valori di riferimento né conclusioni legali. Elenca le
tue ipotesi.
```

**Redigere un OLA tra due team.**

```text
Mi serve un breve accordo sul livello operativo tra [team mittente] e
[team ricevente] a supporto del nostro SLA di [obiettivo SLA] per [servizio].
Il passaggio di consegne tipico è [descrizione], e la coda è [nome della coda
o dello strumento]. Redigi un OLA di una pagina con lo scopo, la risposta
attesa, le regole dell'orologio, un modo per risolvere le controversie e una
data di riesame. Mantieni un tono collaborativo e non suggerire penali a meno
che io non le chieda. Non inventare valori obiettivo; chiedimeli. Elenca le
tue ipotesi.
```

**Cercare un divario «anguria» nei nostri dati.**

```text
Ecco una sintesi del rispetto dello SLA e di una misura di esperienza per
[elenco dei servizi] nel periodo [periodo]: [incollare la tabella]. Individua
i servizi in cui lo SLA risulta rispettato e l'esperienza risulta scadente, e
suggerisci possibili spiegazioni da approfondire, come sospensioni
dell'orologio, riclassificazione della priorità o una misura scelta male.
Proponi domande e un piccolo campione di ticket da leggere per ciascuno. Non
presumere cause né inventare soglie. Elenca le tue ipotesi.
```

**Progettare un breve sondaggio di esperienza per uno XLA.**

```text
Vogliamo aggiungere una misura di esperienza per [percorso, per esempio
ottenere un nuovo laptop] per [destinatari]. Redigi [numero] domande neutre,
un piano su quando e come inviarle e come riportare il tasso di risposta e la
composizione dei rispondenti. Segnala le formulazioni che potrebbero
distorcere le risposte e suggerisci come concordare il livello obiettivo con
[ruolo del rappresentante del cliente]. Non inventare punteggi di riferimento.
Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per individuare quale argomento definisce la metrica alla base di una riga SLA e la salvaguardia che dovrebbe affiancarla.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che le modifiche a questo argomento mantengano allineati il modello, le regole dell'orologio e la tabella di manipolazione.

## Punti chiave

- Uno SLA è una promessa al cliente, un OLA è una promessa tra team e uno XLA è un risultato di esperienza concordato; ciascuno richiede la propria misura e il proprio responsabile.
- Riportare percentili, conteggi, quasi-superamenti e quota di sospensione dell'orologio, perché medie e sospensioni silenziose producono rapporti verdi su un servizio scadente.
- Derivare gli OLA dallo SLA e mantenere gli obiettivi interni più stringenti della promessa.
- Abbinare ogni SLA a una misura di esperienza per lo stesso percorso e riportare il divario «anguria» come un riscontro su cui agire.
- Riesaminare gli accordi con una cadenza, con il cliente presente, e ritirare ciò che nessuno usa.
- Mantenere ogni metrica di accordo al livello di servizi e team, mai di persone.

## Riferimenti e letture di approfondimento

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Operational-level agreement](https://en.wikipedia.org/wiki/Operational-level_agreement).
10. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
11. Wikipedia, [Service level objective](https://en.wikipedia.org/wiki/Service_level_objective).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
