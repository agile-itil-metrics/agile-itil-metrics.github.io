# Metriche di evasione delle richieste di servizio

**Misuri quanto durano le richieste di routine dal punto di vista dell'utente, quanta parte di quel tempo è attesa, quali voci di catalogo generano la domanda e quanto del lavoro è automatizzato, poi usi il quadro per riprogettare le richieste più comuni anziché fare pressione sulle persone che le gestiscono.**

## Panoramica e motivazione

Una **richiesta di servizio** è una richiesta di routine di un utente per qualcosa che un servizio è progettato per fornire: un account, l'accesso a una cartella, un portatile, una licenza software, un'informazione. Si differenzia da un **incidente**, che è un'interruzione non pianificata di un servizio (si veda l'Argomento 3.2 «Volume e priorità degli incidenti»), e da una **modifica**, che altera un servizio e richiede una nuova valutazione del rischio (si veda l'Argomento 4.3 «Metriche di abilitazione delle modifiche»). In [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 questo lavoro è coperto dalla pratica di gestione delle richieste di servizio, ed è di solito descritto come un **modello di richiesta** ripetibile: le informazioni necessarie, le approvazioni, i passaggi e il tempo atteso. ITIL scrive la parola in inglese britannico («fulfilment»); il corpo di questo argomento usa la grafia «fulfillment» in linea con l'ortografia del libro, mentre in italiano si parla di «evasione».

Le richieste sono importanti per le metriche perché sono una domanda prevedibile. Un incidente è una sorpresa; la richiesta del portatile per un neoassunto arriva ogni mese e segue gli stessi passaggi. Questa prevedibilità rende le richieste il candidato migliore per la progettazione, la standardizzazione e l'[automazione dei processi](https://en.wikipedia.org/wiki/Process_automation). Significa anche che i ritardi sono raramente causati dalla difficoltà. Sono causati da code, approvazioni e passaggi di consegne, perciò la domanda utile è dove la richiesta attende, non con quale velocità qualcuno digita.

L'unità di analisi è la **voce di catalogo**: una cosa nominata che un utente può richiedere nel [catalogo dei servizi](https://en.wikipedia.org/wiki/Service_catalog) (il termine ITIL è «service catalogue»; il resto di questo argomento dice «catalogo dei servizi»). Le misure per voce sono molto più utili di un singolo numero combinato, perché una richiesta di reimpostazione della password e una richiesta di realizzazione di un server hanno cronometri diversi, responsabili diversi e obiettivi ragionevoli diversi. Una media combinata nasconde entrambi.

Le visioni agile e ITIL si incontrano qui con poco attrito. ITIL chiede se il servizio produce il risultato concordato nel tempo concordato. La pratica agile del flusso chiede quanto tempo impiega il lavoro a scorrere dalla richiesta al completamento, quanto sosta nelle code e quanto lavoro è in corso contemporaneamente. Una richiesta è un elemento di lavoro che si muove in un flusso, perciò gli strumenti della misurazione del flusso, come il cycle time e l'età dell'elemento di lavoro, si applicano direttamente (si veda l'Argomento 2.1 «Misure del flusso»). Il vocabolario differisce. L'aritmetica è la stessa.

Tre termini ricorrono. Il **tempo di evasione** è il tempo trascorso dal momento in cui l'utente invia la richiesta al momento in cui l'utente conferma, o il sistema registra, che la cosa è stata consegnata. Il **tempo di lavoro effettivo** è il tempo in cui qualcuno lavora attivamente sulla richiesta, e il **tempo di attesa** è tutto il resto, comprese le approvazioni e l'attesa dell'utente. La differenza tra i due è ciò che un modello di richiesta dovrebbe ridurre. La **quota di automazione** è la porzione di richieste evase senza che una persona le tocchi dopo l'invio.

Le misure di tempo richiedono cura. I tempi di evasione sono asimmetrici: la maggior parte delle richieste si conclude rapidamente e poche richiedono moltissimo. Una media è tirata in giro da quelle poche, perciò riporti la mediana e un [percentile](https://en.wikipedia.org/wiki/Percentile) alto come l'85º o il 95º (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»). Gli obiettivi concordati con i clienti, come quelli di un [accordo sul livello di servizio (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement), dovrebbero essere enunciati allo stesso modo: «l'85 per cento delle richieste di portatili evase entro 5 giorni lavorativi» dice più di «media di 3 giorni».

Infine, un'avvertenza dalla psicologia della misurazione. Quando un team è giudicato sulla chiusura rapida delle richieste, il modo più economico di migliorare il numero è cambiare ciò che conta come chiuso o mettere in pausa il cronometro. La [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) si applica pienamente (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»). Ogni metrica seguente è quindi abbinata a una salvaguardia, e nessuna descrive un singolo operatore.

## Principi chiave

- **Misurare per voce di catalogo.** Ogni voce ha il proprio modello di richiesta, il proprio responsabile e un proprio obiettivo ragionevole, perciò i numeri combinati sono fuorvianti.
- **Far partire il cronometro quando l'utente chiede e fermarlo quando l'utente ha la cosa.** I traguardi interni sono diagnostiche utili, ma non sono l'esperienza del cliente.
- **Separare il tempo di attesa dal tempo di lavoro effettivo.** Il divario tra i due mostra dove la riprogettazione rende, e raramente sta nel lavoro in sé.
- **Riportare distribuzioni, non medie.** Una mediana e un 95º percentile descrivono ciò che gli utenti vivono.
- **Trattare la domanda come un segnale.** Il volume per voce mostra di che cosa hanno bisogno gli utenti, che cosa è confuso e che cosa merita automazione o self-service.
- **Automatizzare prima ciò che è stabile e frequente.** La quota di automazione è il risultato di una buona progettazione delle richieste, non un obiettivo da inseguire per se stesso.
- **Misurare il team e il servizio, mai la persona.** Le richieste scorrono attraverso sistemi, e la variazione tra gli operatori riflette per lo più la composizione del lavoro.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tempo di evasione della richiesta | Tempo trascorso per consegnare una richiesta, mostrato come mediana e 95º percentile per voce di catalogo | il cronometro parte quando l'utente invia la richiesta, si ferma quando l'utente conferma la consegna o la consegna viene registrata; le richieste annullate dall'utente sono escluse; il tempo di attesa dell'utente è riportato separatamente, non rimosso | giorni lavorativi od ore | Storico delle richieste dello strumento ITSM | Gestione delle richieste di servizio | Cycle time sulla lavagna del team (si veda l'Argomento 2.2 «Lead time, cycle time ed efficienza del flusso») | Settimanale, tendenza mensile |
| Evasione entro l'obiettivo | Quota di richieste consegnate entro l'obiettivo concordato per la loro voce di catalogo | richieste evase entro l'obiettivo / richieste evase nel periodo; cronometro come sopra, le voci ancora aperte sono escluse e contate invece nell'anzianità del backlog | percentuale | Storico delle richieste dello strumento ITSM; tabella degli obiettivi per voce di catalogo | Gestione dei livelli di servizio | Aspettativa di livello di servizio | Mensile |
| Backlog e anzianità delle richieste | Numero di richieste aperte e anzianità delle più vecchie, per voce di catalogo | richieste aperte a fine periodo (conteggio); anzianità di ciascuna richiesta aperta = data del report meno data di invio; riportare il conteggio, l'anzianità mediana e l'anzianità massima | conteggio e giorni | Coda delle richieste aperte dello strumento ITSM | Gestione delle richieste di servizio | Lavoro in corso ed elementi di lavoro invecchiati (si veda l'Argomento 2.3 «Lavoro in corso e code») | Settimanale |
| Tempo di attesa per l'approvazione | Tempo che una richiesta trascorre in attesa di un'approvazione | il cronometro parte quando l'approvazione viene richiesta, si ferma quando viene concessa o negata; le richieste senza passaggio di approvazione sono escluse | ore | Registro delle approvazioni dello strumento ITSM | Gestione delle richieste di servizio; abilitazione delle modifiche | Tempo bloccato o colonna «in attesa» sulla lavagna | Mensile |
| Volume delle richieste per voce di catalogo | Numero di richieste inviate per ciascuna voce, con la sua quota sul totale | richieste inviate per voce nel periodo; le richieste reinviate come duplicati, se identificate, sono escluse; riportare il conteggio e la quota sul totale | conteggio e percentuale | Registrazioni delle richieste dello strumento ITSM | Gestione del catalogo dei servizi | Analisi della domanda per dare forma al backlog | Mensile |
| Quota di automazione | Porzione di richieste evase senza alcun passaggio manuale dopo l'invio | richieste evase end-to-end dall'automazione / richieste evase nel periodo; una richiesta toccata da una persona per qualsiasi passaggio di evasione è contata come manuale; le approvazioni da parte di una persona non contano come passaggi manuali di evasione se la policy le richiede | percentuale | Registrazioni di evasione dello strumento ITSM e log della piattaforma di automazione | Gestione delle richieste di servizio; automazione nella catena del valore del servizio | Automazione nella definizione di completato | Mensile |
| Tasso di riapertura delle richieste | Quota di richieste evase che l'utente riapre o ripresenta perché il risultato era errato o incompleto | richieste riaperte o ripresentate per la stessa voce dallo stesso utente entro 7 giorni dall'evasione / richieste evase nel periodo; la finestra di 7 giorni è un esempio che il team mette per iscritto | percentuale | Storico delle richieste dello strumento ITSM | Gestione delle richieste di servizio | Tasso di rilavorazione; difetti sfuggiti | Mensile |

Il tempo di evasione conta il tempo lavorativo solo se il team ha concordato un calendario e lo ha registrato; altrimenti usi le ore trascorse e lo dichiari. La metrica del backlog porta intenzionalmente tre numeri, perché un conteggio da solo non dice nulla sull'attesa. La definizione della quota di automazione lascia fuori dal conteggio dei «manuali» le approvazioni umane perché molte approvazioni sono una decisione di policy, non un costo di evasione; il tempo di attesa per l'approvazione è misurato separatamente, così che il ritardo resti visibile.

## Raccomandazioni

### Definire i cronometri e l'unità

**1. Misuri per voce di catalogo e pubblichi l'elenco delle voci.** Parta dalle prime dieci voci per volume, che di solito coprono una quota ampia delle richieste, e aggiunga voci man mano che i dati lo consentono. Dia a ciascuna voce un responsabile, un obiettivo dichiarato e una definizione in una riga di «consegnato». L'elenco delle voci è il denominatore di tutto il resto, quindi lo conservi nel registro delle metriche (si veda l'Argomento 1.4 «Governance e responsabilità delle metriche»).

**2. Metta per iscritto l'avvio e l'arresto del cronometro per ciascuna voce.** Per la maggior parte delle voci il cronometro parte all'invio e si ferma quando l'utente può usare ciò che ha chiesto, non quando un ticket viene chiuso. Un portatile è consegnato quando è nelle mani dell'utente, non quando è prenotato il corriere.

**3. Decida una volta per tutte come trattare l'attesa dell'utente.** Alcune richieste si bloccano perché l'utente non ha risposto a una domanda. Mettere in pausa il cronometro per questo è ragionevole, ma è anche la leva più facile da abusare. Registri la pausa come stato separato con un motivo, riporti il tempo in pausa come numero a sé e riveda il tasso di pausa per voce (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»).

### Riportare ciò che gli utenti vivono

**4. Mostri la mediana e il 95º percentile, con un conteggio.** Li metta entrambi in un grafico per voce, con il numero di richieste dietro ogni punto. Una mediana di due giorni con un 95º percentile di venti dice che la maggior parte degli utenti è ben servita e che una coda richiede indagine, cosa che una media di quattro giorni nasconde. Quando il conteggio è piccolo, lo dica e mostri le singole richieste anziché un percentile.

**5. Renda visibile l'anzianità delle richieste aperte.** Il tempo di evasione si conosce solo dopo che una richiesta si è conclusa, perciò è in ritardo. Un elenco delle richieste aperte più vecchie per voce, ordinato per anzianità, dice a un team dove guardare oggi. In termini di flusso è l'età dell'elemento di lavoro rispetto al cycle time abituale della voce, ed è la vista più utilizzabile che una coda di richieste possa avere.

**6. Suddivida il tempo trascorso in tempo di lavoro effettivo, di approvazione e di attesa dell'utente.** Prenda un campione di richieste evase per una voce e scomponga ciascuna nel tempo trascorso in ogni stato. La maggior parte dei team scopre che il lavoro attivo è una piccola quota del tempo trascorso. Il risultato sposta la conversazione di miglioramento da «lavorare più in fretta» a «rimuovere la coda tra i passaggi», che è l'idea centrale dello studio delle code e del flusso (si veda l'Argomento 2.3 «Lavoro in corso e code»).

### Usare la domanda per dare forma al servizio

**7. Legga il volume per voce come un messaggio degli utenti.** Un volume in crescita per una voce può significare bisogno crescente, un prodotto confuso o un guasto altrove, come un processo rotto che costringe le persone a chiedere di nuovo. Una voce a volume molto basso può essere candidata al ritiro dal catalogo. Confronti il volume con i dati di adozione (si veda l'Argomento 6.3 «Metriche di adozione del servizio e del catalogo»).

**8. Classifichi i candidati all'automazione per volume, stabilità e tempo di lavoro effettivo.** I migliori primi candidati sono ad alto volume, variano raramente e comportano un tempo di lavoro effettivo apprezzabile. Parta dalla voce i cui passaggi sono già identici ogni volta, come l'accesso a un gruppo standard, e automatizzi i passaggi prima di toccare le eccezioni. Tracci la quota di automazione per voce in modo che il progresso sia visibile e invii le questioni di self-service e di deflessione al loro argomento (si veda l'Argomento 3.7 «Metriche di self-service e automazione»).

**9. Riprogetti le approvazioni prima di aggiungere persone.** L'attesa di approvazione spesso domina il tempo trascorso. Per ciascuna approvazione chieda se è richiesta dalla policy, se basterebbe una richiesta standard pre-approvata e se l'approvatore può essere un ruolo con un sostituto anziché una sola persona. Pre-approvare richieste a basso rischio e ben comprese riflette l'idea delle modifiche standard nell'abilitazione delle modifiche e rimuove le code senza rimuovere il controllo.

### Mantenere onesti i numeri

**10. Abbini ogni volta velocità e qualità.** Riporti il tempo di evasione accanto al tasso di riapertura e a un segnale di soddisfazione degli utenti per la stessa voce (si veda l'Argomento 6.1 «Metriche di soddisfazione del cliente»). Una richiesta più rapida che ritorna riaperta è più lenta di quanto sembri. Se la velocità migliora e con essa sale il tasso di riapertura, tratti il guadagno di velocità come non dimostrato.

**11. Tenga separate nei dati richieste, incidenti e modifiche.** Mescolarli distorce tutti e tre. Una reimpostazione di password che è in realtà il sintomo di un servizio di accesso difettoso è un incidente, e una richiesta di alterare il funzionamento di un servizio è una modifica. Classifichi all'ingresso con una breve regola, campioni trimestralmente le voci classificate male e confronti affiancati i volumi di richieste e di incidenti (si veda l'Argomento 3.1 «Metriche del service desk»).

**12. Riveda la tabella delle voci con il team che svolge il lavoro.** Si incontri ogni mese per trenta minuti attorno alla tabella per voce: volume, mediana e 95º percentile, richiesta aperta più vecchia, quota di automazione, tasso di riapertura. Scelga una voce e una modifica da provare e guardi la stessa tabella il mese successivo per vedere che cosa è accaduto.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tempo di evasione della richiesta | Mettere in pausa il cronometro per «in attesa dell'utente» che l'utente sia o no la causa; chiudere le richieste prima della consegna e riaprirle come nuove; dividere una richiesta in più richieste piccole | Quota di tempo in pausa per voce, con audit a campione dei motivi di pausa; tasso di riapertura; conferma di consegna dell'utente prima della chiusura |
| Evasione entro l'obiettivo | Ridefinire l'obiettivo per renderlo più facile; contare solo le richieste che si concludono e ignorare quelle aperte da più tempo; scegliere le voci veloci per l'insieme degli obiettivi | Anzianità del backlog per le richieste aperte; modifiche agli obiettivi registrate nel registro delle metriche con un motivo; l'insieme degli obiettivi copre tutte le voci per volume |
| Backlog e anzianità delle richieste | Chiudere le richieste vecchie come «nessuna risposta» o «obsolete»; spostare le richieste in un'altra coda o categoria in modo che escano dalla coda contata | Conteggio delle richieste chiuse senza consegna, per motivo; trasferimenti di categoria e coda rivisti nella riunione mensile |
| Tempo di attesa per l'approvazione | Gli approvatori approvano senza leggere per contenere il proprio tempo; i richiedenti sollecitano gli approvatori fuori dal sistema in modo che l'attesa registrata sia breve | Revisione a campione delle richieste approvate rispetto alla policy; tasso di riapertura ed eccezioni di sicurezza per le voci approvate; numero di passaggi di approvazione per voce |
| Volume delle richieste per voce di catalogo | Ridurre il volume rendendo il catalogo più difficile da trovare o scoraggiando le richieste; riclassificare le richieste come incidenti o come «richieste generiche» | Soddisfazione degli utenti per il catalogo; quota di contatti classificati come «altro»; dati di adozione del servizio (si veda l'Argomento 6.3 «Metriche di adozione del servizio e del catalogo») |
| Quota di automazione | Automatizzare le voci banali per alzare la percentuale; contare come automatizzata una richiesta con script che una persona ancora controlla a mano; nascondere passaggi manuali in un ticket separato | Quota ponderata per volume delle richieste e per tempo di lavoro effettivo rimosso; automazioni fallite e tasso di ripiego sul manuale; campione di richieste «automatizzate» tracciate end-to-end |
| Tasso di riapertura delle richieste | Scoraggiare la riapertura rendendola difficile; dire agli utenti di aprire una nuova richiesta, il che azzera il contatore | Richieste ripetute dello stesso utente per la stessa voce entro la finestra; soddisfazione degli utenti per voce; riapertura consentita dalla notifica |

Una lettura sana appare così. Mediana e 95º percentile calano insieme, oppure il 95º percentile cala mentre la mediana regge. La richiesta aperta più vecchia non è molto più vecchia del 95º percentile di quelle evase. Tasso di riapertura e soddisfazione restano stabili o migliorano mentre la velocità migliora. La quota di automazione sale sulle voci che contano per volume, e il volume stesso cambia per ragioni che il team sa spiegare. Se un numero migliora nettamente mentre la sua salvaguardia va in direzione opposta, si vadano a guardare le richieste sottostanti.

## Compromessi: vantaggi e svantaggi

| Scelta | Vantaggi | Svantaggi |
| --- | --- | --- |
| Misurazione per voce | Gli obiettivi si adattano al lavoro; mostra dove la riprogettazione rende | Più dati da mantenere; le voci piccole hanno pochi punti dati |
| Mediana e 95º percentile anziché la media | Descrive ciò che gli utenti vivono; resiste ai valori anomali | Più difficile da spiegare ai dirigenti abituati a un solo numero; instabile per le voci a basso volume |
| Mettere in pausa il cronometro quando si attende l'utente | Equo verso il team quando è l'utente a causare il ritardo | Facilmente abusabile; nasconde l'effetto di moduli poco chiari e di scarsa comunicazione |
| Contare la quota di automazione | Rende visibile il progresso dell'automazione e lo collega al costo | Premia le automazioni facili; non dice nulla sulla qualità se non abbinata al tasso di fallimento |
| Misurare dall'invio dell'utente alla conferma dell'utente | Corrisponde all'esperienza del cliente | Dipende dalla conferma dell'utente, spesso mancante; richiede una regola predefinita |
| Separazione rigorosa di richieste e incidenti | Dati più puliti e obiettivi migliori | Richiede disciplina all'ingresso e discussioni sui casi limite |

Il compromesso centrale è tra un numero pulito e un numero equo. Un cronometro rigoroso che non si ferma mai è semplice e difficile da manipolare, ma penalizza il team quando l'utente è lento. Un cronometro flessibile è più equo ma richiede audit. La maggior parte dei team fa bene a partire in modo rigoroso, aggiungere un unico stato di pausa esplicito con un motivo e riportare apertamente la quota in pausa.

## Domande da discutere con il team

**1. Quali tre voci di catalogo causano più attesa ai nostri utenti, e come lo sappiamo?**
Porti la tabella per voce di volume, mediana e 95º percentile del tempo di evasione. Chieda al gruppo di scegliere le voci in base all'attesa totale (volume per attesa tipica), non in base a quanto sono fastidiose. Confronti la risposta con il primo istinto delle persone. Chi facilita annoti dove dati e istinto differiscono.

**2. Quando partono e si fermano i nostri cronometri, e un utente sarebbe d'accordo?**
Scelga una voce comune e ne percorra il tragitto come lo vede l'utente, dal primo clic al momento in cui può usare il risultato. Segni dove lo stato del nostro ticket dice «fatto» e dove l'utente direbbe «fatto». Ogni divario tra i due è attesa invisibile. Concordi una modifica all'evento di arresto e la scriva nel registro delle metriche.

**3. Quanto del nostro tempo trascorso è lavoro delle persone, e quanto è attesa?**
Campioni dieci richieste evase per una voce e scomponga ciascuna in tempo di lavoro effettivo, di approvazione e di attesa dell'utente. Mostri il risultato come barra impilata. Chieda che cosa dovrebbe essere vero perché l'attesa si dimezzasse. Questa domanda di solito sposta la sala da «servono più persone» a «servono meno passaggi di consegne».

**4. Quali approvazioni potrebbero essere sostituite da una regola concordata in anticipo?**
Elenchi le approvazioni per le voci principali e la ragione di policy di ciascuna. Dove nessuno ricorda l'ultimo rifiuto, l'approvazione può essere un rituale.

**5. Se automatizzassimo la prossima voce di catalogo, il numero salirebbe per il motivo giusto?**
Discuta come la quota di automazione possa salire attraverso voci facili o a basso volume mentre gli utenti non vedono alcuna differenza. Chieda che cosa il team misurerebbe per confermare che un'automazione ha aiutato: tempo di lavoro effettivo rimosso, tasso di fallimento, tasso di riapertura e soddisfazione. Decida quale voce automatizzare successivamente in base a volume e tempo di lavoro effettivo, non alla sola facilità.

**6. Che cosa faremmo se un numero di questa pagina peggiorasse, e a chi verrebbe data la colpa?**
Conduca apertamente l'esperimento mentale. Chieda che cosa il team sarebbe tentato di cambiare nei dati prima di cambiare il servizio. Concordi che la prima risposta a un numero che peggiora è guardare le richieste che stanno dietro.

## Quattro prospettive

### Team di prodotto e di consegna

I team di prodotto generano richieste sui propri servizi: accesso ad ambienti, nuove pipeline, dati di test, chiavi di licenza. Tempi di evasione lunghi per queste richieste si manifestano come lavoro fermo nel flusso del team stesso, perciò la misura appartiene alla loro lavagna come stato bloccato. I team che sono proprietari di un servizio dovrebbero pubblicare le proprie voci di richiesta e i propri obiettivi, e trattare le richieste ripetute come candidati al backlog (si veda l'Argomento 2.6 «Metriche di backlog e raffinamento»). Dove una richiesta è in realtà una capacità di piattaforma mancante, la domanda ripetuta è la ragione per costruirla.

### Team di servizio e operations

Per le persone che evadono le richieste, la tabella per voce è una mappa di dove va lo sforzo. Sanno quali passaggi sono manuali, quali approvazioni si bloccano e quali moduli producono input vago. Dovrebbero essere proprietarie dei modelli di richiesta, del backlog di automazione e della revisione mensile, e dovrebbero essere il primo pubblico dei dati. I numeri descrivono la coda e il processo, perciò si renda esplicito che nessuno è classificato e che la variazione tra le persone riflette per lo più la composizione delle richieste che prendono in carico.

### Leadership e governance

I responsabili hanno bisogno di una vista breve: mediana e 95º percentile per le voci principali, la quota evasa entro l'obiettivo, le richieste aperte più vecchie e l'andamento della quota di automazione e del costo per richiesta (si veda l'Argomento 7.5 «Costo del servizio ed economia unitaria»). Il compito della governance è chiedere che cosa è cambiato, non chi è lento. I responsabili approvano anche il lato di policy delle approvazioni, perciò detengono la leva che più riduce l'attesa.

### Clienti e utenti

Agli utenti importano tre cose: quanto tempo, quanto prevedibile e quanto sforzo. Raramente importano loro gli stati interni. Si mostri loro un obiettivo semplice per voce («portatili in cinque giorni lavorativi»), si dica loro a che punto è la richiesta e si chieda di confermare la consegna. Si raccolga un segnale di soddisfazione di una sola domanda alla chiusura e se ne leggano i commenti.

## In pratica: un esempio di ITIL agile

Il reparto IT di un'università regionale (un'organizzazione fittizia) gestisce un service desk e un piccolo team di piattaforma. I numeri seguenti sono illustrativi, non provengono da alcuna organizzazione reale.

Alla revisione mensile il team osserva la tabella per voce. Su tutte le richieste, il tempo medio di evasione è di 3,1 giorni lavorativi, il che appare accettabile e si è appena mosso in un anno. Per voce, il quadro è diverso. «Accesso a una cartella condivisa» ha una mediana di 0,4 giorni e un 95º percentile di 2 giorni. «Licenza software di dipartimento» ha una mediana di 2 giorni e un 95º percentile di 11 giorni. «Portatile per neoassunto» ha una mediana di 6 giorni e un 95º percentile di 15 giorni. Le prime tre voci per volume sono accesso a cartella condivisa, richieste di licenza e portatili per neoassunti, con quote illustrative del 32, 21 e 9 per cento di tutte le richieste.

Il team campiona dieci richieste di portatili e scompone il tempo. Risultato illustrativo: circa 0,5 giorni di lavoro effettivo, 2,5 giorni in attesa dell'approvazione di un responsabile di linea, 1,5 giorni in attesa della conferma delle scorte e il resto in una coda del corriere. L'attesa di approvazione è la componente maggiore.

La decisione deriva dai dati. Il team propone, con il responsabile della finanza e quello della sicurezza, che i portatili del catalogo standard siano pre-approvati quando il ruolo del neoassunto è confermato dalle risorse umane, con il responsabile avvisato anziché interpellato. Collegano inoltre la verifica delle scorte al sistema di inventario. Fissano l'esperimento per un trimestre e concordano che cosa conterà come successo: il 95º percentile per i portatili cala, e il tasso di riapertura e il punteggio di soddisfazione restano invariati.

Un rischio di manipolazione compare nel secondo mese. La mediana per le licenze cala nettamente, da 2 giorni a meno di 1. La revisione nota che la quota di tempo in pausa «in attesa dell'utente» per la voce è salita da un 5 per cento illustrativo al 40 per cento e che il tasso di riapertura è aumentato. Un campione mostra che gli operatori mettevano in pausa le richieste con un messaggio generico nel momento in cui una licenza richiedeva un qualsiasi controllo, il che fermava il cronometro. Il team non incolpa gli operatori. Vede che l'obiettivo rendeva attraente la pausa e che il campo del motivo di pausa era testo libero. Cambia il motivo di pausa in un breve elenco, richiede una domanda specifica all'utente e aggiunge la quota di tempo in pausa come colonna fissa accanto alla mediana. La mediana delle licenze torna vicina al livello precedente, il tasso di riapertura cala e il team usa il tempo di discussione risparmiato per riprogettare il modulo delle licenze, che produceva le richieste poco chiare.

Dopo il trimestre (illustrativo), il 95º percentile dei portatili cala da 15 a 9 giorni e la quota di automazione per l'accesso a cartelle condivise raggiunge il 70 per cento. Il team registra entrambe le modifiche e sceglie il modulo delle licenze come esperimento successivo.

## Lente di settore

**Startup.** Una startup ha pochi tipi di richiesta e nessun catalogo formale, e le stesse persone gestiscono le richieste e costruiscono il prodotto. Misurate le tre o quattro richieste che bloccano i nuovi arrivati, come account e attrezzature, e tracciate la richiesta aperta più vecchia. Automatizzate presto l'inserimento, perché ogni assunzione lo ripete.

**Piccola impresa.** Una piccola impresa si affida spesso a una sola persona IT o a un fornitore esterno. Usate una semplice lavagna condivisa con una colonna per ogni stato e tracciate anzianità e volume delle richieste per tipo. Chiedete al fornitore il volume mensile per voce e la richiesta aperta più vecchia.

**Grande impresa.** Una grande impresa ha centinaia di voci di catalogo, molti gruppi di evasione e approvazioni a più livelli. Concentratevi sulle voci principali per volume e su quelle con l'attesa più lunga per attesa totale. Standardizzate la definizione del cronometro tra i gruppi di evasione prima di confrontarli e riportate separatamente i passaggi di consegne tra gruppi (si veda l'Argomento 9.3 «Metriche di collaborazione e passaggi di consegne»). I tempi di evasione dei fornitori appartengono alla stessa vista, misurati dalla richiesta del cliente, non dal ricevimento del fornitore.

**Pubblica amministrazione e settore pubblico.** Gli enti pubblici aggiungono approvazioni obbligatorie, regole di approvvigionamento e obblighi di conservazione dei documenti, perciò una parte del tempo di attesa è policy e dovrebbe essere etichettata come tale anziché contata come ritardo da rimuovere. Pubblicate gli obiettivi per voce in linguaggio semplice dove gli impegni di servizio sono pubblici. Riportate in modo che un'autorità di regolamentazione o un organo di controllo possa riprodurre i risultati, con le definizioni scritte.

## Business case: motivazioni, ROI e TCO

Le richieste sono una quota ampia e ripetitiva del lavoro che raggiunge un service desk, quindi anche una modesta riprogettazione ha un effetto esteso. Le motivazioni principali sono attese più brevi e più prevedibili per gli utenti, minore sforzo di gestione per richiesta, meno contatti ripetuti e capacità liberata per il lavoro sui problemi e sul miglioramento.

Il lato dei costi è per lo più una tantum e modesto. Definire le voci di catalogo, concordare i cronometri e assicurarsi che lo strumento registri gli stati necessari richiede pochi giorni di lavoro per gruppo, più un piccolo sforzo continuo per mantenere corretta la pipeline (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»). L'automazione ha un proprio costo di costruzione e di manutenzione, che comprende il monitoraggio delle automazioni, la gestione dei fallimenti e il loro aggiornamento quando i sistemi di destinazione cambiano. Si conti ciò nel costo totale di proprietà oltre alla licenza o al tempo di costruzione.

Il ritorno va stimato dai Suoi dati e non da un benchmark generale. Per una voce, moltiplichi il volume mensile per il tempo di lavoro effettivo risparmiato e per il costo pieno del tempo, poi sottragga il costo di costruzione ed esercizio della modifica. Aggiunga il valore del tempo di attesa rimosso per gli utenti, con un metodo difendibile, e lo mostri separatamente perché è una stima di natura diversa. Nessuna cifra di questo argomento è un benchmark e i numeri degli esempi sono illustrativi. Colleghi il business case al costo unitario per richiesta dove esistono i dati finanziari (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Una sola media combinata per tutte le richieste.** Nasconde sia i guadagni rapidi sia la coda lunga. Riporti per voce, con una mediana e un 95º percentile.
- **Chiudere il ticket e chiamarlo consegnato.** L'utente può ancora non avere nulla. Definisca la consegna dal lato dell'utente e chieda conferma.
- **Stati di pausa a testo libero.** Uno stato «in attesa» senza motivo permette di fermare il cronometro per qualsiasi causa. Usi un breve elenco di motivi e riporti la quota in pausa.
- **Contare l'automazione per numero di voci.** Dieci voci rare automatizzate possono alzare la percentuale senza aiutare nessuno. Ponderi per volume e tempo di lavoro effettivo.
- **Classificare gli operatori per richieste chiuse.** Premia la scelta dei ticket facili e punisce chi prende quelli difficili. Riporti solo a livello di team e voce.
- **Nascondere la domanda per apparire efficienti.** Rendere il catalogo difficile da usare riduce il volume e aumenta la frustrazione. Abbini il volume ai dati di soddisfazione e di adozione.
- **Trattare le approvazioni come intoccabili.** Le approvazioni sono spesso il ritardo maggiore e raramente vengono riviste. Chieda che cosa protegge ciascuna e se una regola può svolgere il compito.
- **Mescolare richieste e incidenti.** Distorce entrambi gli insiemi di numeri. Classifichi all'ingresso e campioni la classificazione.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizioni e cronometri | Le richieste sono contate come ticket; la fine del cronometro è ciò che «chiuso» significa | Alcuni team definiscono avvio e arresto per voce; le definizioni differiscono | Una definizione scritta del cronometro per voce di catalogo, condivisa tra i team | Definizioni riviste con una cadenza e cambiamenti registrati con i motivi | Le definizioni seguono la visione del cliente tra i fornitori e vengono riviste quando smettono di orientare le decisioni |
| Dati e reportistica | Conteggi estratti a mano dallo strumento | Report per alcune voci dallo strumento ITSM; tempi medi | Mediana e 95º percentile per voce da un'unica fonte di dati | Andamenti, anzianità del backlog e quota di tempo in pausa rivisti con le rispettive salvaguardie | Dati di evasione di team interni e fornitori combinati e collegati ai risultati per gli utenti |
| Domanda e automazione | Richieste gestite una per una; nessuna visione della domanda ripetuta | Voci principali individuate in modo informale; qualche script | Modelli di richiesta documentati per le voci principali; backlog di automazione ordinato per volume e tempo di lavoro effettivo | Quota di automazione e tasso di fallimento tracciati; approvazioni riprogettate sulla base di evidenze | Domanda, self-service e automazione pianificati insieme in tutta l'organizzazione e adattati continuamente |
| Uso nel miglioramento | I numeri sono riportati verso l'alto, non usati | Correzioni occasionali dopo le lamentele | Revisione mensile da parte del team che svolge il lavoro | Miglioramenti finanziati legati ai risultati per voce | Le idee di miglioramento arrivano da team, utenti e fornitori, e i risultati ritornano nella progettazione del catalogo |

## Checklist

- [ ] Ogni voce di catalogo in ambito ha un responsabile, una definizione in una riga di «consegnato» e un obiettivo dichiarato.
- [ ] Gli eventi di avvio e arresto del cronometro di evasione sono scritti per ciascuna voce.
- [ ] L'attesa dell'utente è uno stato separato con un breve elenco di motivi, e il tempo in pausa è riportato.
- [ ] I report mostrano la mediana e il 95º percentile per voce, con il numero di richieste dietro ciascuno.
- [ ] Le richieste aperte più vecchie sono visibili al team ogni settimana.
- [ ] Tempo di lavoro effettivo, di approvazione e di attesa sono stati campionati per le voci principali.
- [ ] Il volume per voce è rivisto mensilmente e confrontato con i dati di adozione o di soddisfazione.
- [ ] La quota di automazione è ponderata per volume e abbinata ai tassi di fallimento e di ripiego.
- [ ] Ogni metrica di velocità è abbinata al tasso di riapertura e a un segnale di soddisfazione degli utenti.
- [ ] Richieste, incidenti e modifiche sono classificati all'ingresso e la classificazione è campionata.
- [ ] Nessun report classifica i singoli operatori.

## Prompt IA

**Redigere un modello di richiesta e una definizione del cronometro per una voce di catalogo.**

```text
Sto definendo la misurazione per questa voce di catalogo: [nome della voce di
catalogo]. I passaggi attuali sono [elenca i passaggi e chi svolge ciascuno], le
approvazioni sono [elenca le approvazioni] e il nostro strumento è [strumento
ITSM]. Redigi un modello di richiesta con le informazioni richieste, gli
eventi di avvio e arresto del cronometro di evasione, gli stati in cui il
cronometro può andare in pausa e i motivi ammessi, e un elenco dei timestamp che
lo strumento deve registrare. Non inventare valori di riferimento né funzioni
dello strumento. Elenca le tue ipotesi e le domande a cui devo rispondere per
completare la definizione.
```

**Suddividere il tempo trascorso in tempo di lavoro effettivo e di attesa.**

```text
Ecco un campione di [numero] richieste evase per [voce di catalogo] con gli
orari dei cambi di stato: [incolla lo storico degli stati anonimizzato, senza
nomi]. Calcola, per ciascuna richiesta e per il campione, il tempo di lavoro
effettivo, l'attesa di approvazione e il tempo di attesa dell'utente, e mostra
la mediana e l'intervallo. Indica quale stato contiene più tempo e quali
domande devo porre al team al riguardo. Non dedurre cause senza evidenze e non
confrontare singole persone. Elenca le tue ipotesi.
```

**Classificare i candidati all'automazione.**

```text
Ecco una tabella di voci di catalogo con volume mensile, tempo mediano di
lavoro effettivo, variazione dei passaggi e sistemi toccati da ciascuna:
[incolla la tabella]. Suggerisci un modo per classificare i candidati
all'automazione usando volume, stabilità e tempo di lavoro effettivo, e spiega
la classifica per le prime [numero] voci. Segnala le voci in cui l'automazione
potrebbe creare rischi di sicurezza o di qualità ed elenca che cosa devo
verificare per primo con [ruolo del responsabile dei controlli]. Non inventare
cifre di risparmio né valori di riferimento. Elenca le tue ipotesi.
```

**Esaminare una dashboard di evasione per il rischio di manipolazione.**

```text
Questa è la nostra dashboard di evasione delle richieste: [descrivi metriche,
definizioni e obiettivi]. Per ciascuna metrica, elenca come potrebbe essere
manipolata o fraintesa, il segno osservabile nei dati e una metrica o pratica
di salvaguardia abbinata. Verifica che nulla classifichi i singoli e suggerisci
modifiche di formulazione che riducano la pressione sul team. Non inventare
soglie; chiedimi quelle che ti servono. Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la definizione, il vettore di manipolazione e la salvaguardia di una metrica di richiesta, e gli argomenti vicini che le si abbinano.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che le modifiche a questo argomento mantengano intatti il modello, i cronometri e gli abbinamenti con le salvaguardie.

## Punti chiave

- Misuri l'evasione per voce di catalogo, dall'invio dell'utente alla conferma dell'utente, e riporti la mediana e un percentile alto.
- La maggior parte del tempo trascorso è attesa, perciò scomponga tempo di lavoro effettivo, di approvazione e di attesa dell'utente prima di decidere che cosa correggere.
- Legga il volume per voce come un messaggio degli utenti e automatizzi prima le voci frequenti e stabili.
- Abbini ogni numero di velocità al tasso di riapertura e a un segnale di soddisfazione, e riporti apertamente il tempo in pausa.
- Descriva la coda e il processo, mai la persona.

## Riferimenti e letture di approfondimento

1. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
2. AXELOS, *ITIL 4 Practice Guide: Service Request Management*, TSO (The Stationery Office), 2020.
3. ISO/IEC 20000-1, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Process automation](https://en.wikipedia.org/wiki/Process_automation).
12. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
