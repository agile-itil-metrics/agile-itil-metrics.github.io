# Debito tecnico ed errori noti

**Si trattino gli errori noti e il debito tecnico come un unico registro visibile di correzioni rinviate, si misuri quanto costa ciascun elemento per ogni mese in cui resta aperto e si spenda una quota protetta della capacità sugli elementi con gli interessi più alti.**

## Panoramica e motivazione

Ogni team rinvia qualche riparazione. Un difetto è compreso ma non corretto, si prende una scorciatoia per rispettare una data, un componente viene lasciato invecchiare e un workaround viene scritto in un runbook. Ciascun rinvio è una decisione sensata nel momento in cui viene presa. Il problema comincia quando i rinvii si accumulano fuori dalla vista, perché il costo di sostenerli emerge più tardi sotto forma di incidenti, consegna lenta e persone stanche, senza alcuna riga in un report che colleghi il costo alla causa.

Due vocabolari descrivono lo stesso schema. In [ITIL](https://en.wikipedia.org/wiki/ITIL), un **errore noto** è un problema la cui causa radice è compresa e per il quale esiste un workaround, o una correzione definitiva non ancora applicata. Gli errori noti vengono registrati perché il personale del service desk e delle operations possa risolvere rapidamente gli incidenti ripetuti, e il record resta aperto finché non viene rilasciata una correzione. Nel lavoro software agile, il **[debito tecnico](https://en.wikipedia.org/wiki/Technical_debt)** è la metafora, coniata da [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) nel 1992, per le scelte di progettazione e di implementazione che rendono più difficili le modifiche future. La metafora porta con sé due idee che contano per la misurazione: il **capitale** (principal), che è lo sforzo necessario per rimuovere il debito, e gli **interessi**, che sono lo sforzo o il rischio aggiuntivo che si paga in ogni periodo finché il debito resta.

Le due visioni differiscono per dove guardano. Gli errori noti vengono scoperti attraverso le operations: un incidente o un'indagine su un problema trova una causa. Il debito tecnico viene di solito scoperto attraverso la consegna: uno sviluppatore nota che una modifica è più difficile di quanto dovrebbe essere. Un errore noto è spesso debito tecnico che ha già cominciato a danneggiare i clienti. Il debito tecnico è spesso un errore noto in attesa di accadere. Tenere elenchi separati, uno nello strumento ITSM e uno in un backlog o in una wiki, nasconde il collegamento e produce due argomentazioni in competizione per la stessa scarsa capacità.

Questo argomento offre un piccolo insieme di misure per il registro combinato. Evita una singola cifra in denaro per il debito di un'intera organizzazione, che nessun metodo produce in modo affidabile, e misura ciò che si può osservare: elementi aperti, tempo di attesa, incidenti causati, lavoro aggiunto e capacità spesa in riparazioni. Il registro alimenta poi una conversazione di definizione delle priorità tra prodotto e operations (si veda l'Argomento 4.1 «Metriche di gestione dei problemi» per i record dei problemi e le correzioni definitive, e l'Argomento 2.9 «Lavoro operativo e lavoro non pianificato» per il carico di interruzioni che il debito crea).

Termini usati in questo argomento:

- Un **workaround** è un modo per ripristinare il servizio o evitare un fallimento senza rimuovere la causa.
- Una **correzione definitiva** rimuove la causa. L'[analisi delle cause radice](https://en.wikipedia.org/wiki/Root_cause_analysis) è il lavoro che la trova.
- Il **[refactoring del codice](https://en.wikipedia.org/wiki/Code_refactoring)** ristruttura il codice senza cambiarne il comportamento esterno. È il modo consueto di ripagare il debito di progettazione.
- Un **[code smell](https://en.wikipedia.org/wiki/Code_smell)** è un segnale superficiale nel codice che spesso indica un problema più profondo. È uno stimolo a dare un'occhiata, non un verdetto.
- Il **[costo opportunità](https://en.wikipedia.org/wiki/Opportunity_cost)** è il valore della migliore alternativa a cui si rinuncia scegliendo un uso del tempo anziché un altro. Ogni correzione compete con una funzionalità, e il confronto è la vera decisione.
- Il **[costo del ritardo](https://en.wikipedia.org/wiki/Cost_of_delay)** (cost of delay) è la perdita economica derivante dal rinvio di un lavoro. È l'idea alla base della valutazione degli interessi su un elemento di debito.
- Un **[bug software](https://en.wikipedia.org/wiki/Software_bug)** è un difetto nel software. Un errore noto può essere un bug, una debolezza di configurazione, un limite di progettazione o un difetto di un fornitore.
- L'**[analisi statica del programma](https://en.wikipedia.org/wiki/Static_program_analysis)** ispeziona il codice senza eseguirlo. I suoi avvisi e i punteggi di complessità sono indicatori di possibile debito, e costituiscono un'evidenza più debole rispetto allo storico degli incidenti.

Non tutto il debito è un errore. Il quadrante di Martin Fowler distingue il debito deliberato da quello involontario e il debito sconsiderato da quello prudente (si veda l'elenco dei riferimenti). Una scorciatoia prudente con un piano di rimborso è un prestito sensato, e il debito sconsiderato è quello da prevenire. Le metriche qui non giudicano l'origine. Mostrano il saldo.

## Principi chiave

- **Un registro, due porte.** Gli errori noti provenienti dalle operations e gli elementi di debito provenienti dalla consegna vanno nello stesso elenco visibile, con un collegamento tra i record che descrivono la stessa causa.
- **Misurare gli interessi, e anche il capitale.** La dimensione di una riparazione conta meno di ciò che l'elemento aperto vi costa ogni mese in incidenti, workaround e modifiche rallentate. Si ordini per interessi per unità di sforzo di riparazione.
- **Fare del rinvio una decisione con un responsabile.** Ogni elemento ha un responsabile, un motivo dichiarato per l'attesa e una data di revisione. Un elemento che nessuno ha scelto di rinviare è trascuratezza, e viene contato come tale.
- **Proteggere la capacità prima di averne bisogno.** Una quota dichiarata della capacità di ciascun team per il lavoro di riparazione, concordata in anticipo, vale più di una pulizia eroica dopo un brutto trimestre.
- **Mantenere onesto il workaround.** Un workaround è un servizio, con il proprio costo, il proprio responsabile e le proprie modalità di guasto. Si misuri con quale frequenza viene usato e con quale frequenza fallisce.
- **Descrivere sistemi, mai persone.** Il debito appartiene a un servizio o a un componente. Non lo si attribuisca mai a un autore, e non si classifichino mai gli ingegneri in base al debito che hanno toccato.
- **Stimare in modo grossolano.** Dimensioni di «ore», «giorni» e «settimane» bastano. Una precisione maggiore è inventata.

## Definizioni delle metriche

Le metriche seguenti descrivono il registro delle riparazioni rinviate. Orologi e confini sono indicati in ciascuna formula. Le misure di tempo sono riportate come distribuzioni (la mediana e l'85° o il 95° percentile), non come una singola media.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Corrispettivo agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Anzianità del backlog degli errori noti | Da quanto tempo gli errori noti aperti attendono una correzione definitiva | L'orologio parte quando il record del problema è contrassegnato come «errore noto»; si ferma quando la correzione definitiva è rilasciata in produzione; gli elementi chiusi come «rischio accettato» sono riportati separatamente ed esclusi. Si riportino il numero, l'anzianità mediana e l'anzianità all'85° percentile, per servizio | giorni (distribuzione) | Record di problema e di errore noto dello strumento ITSM, record dei rilasci | Gestione dei problemi | Grafico dell'anzianità degli elementi di lavoro; anzianità del backlog dei bug | Mensile |
| Copertura dei workaround | Quota di errori noti aperti che hanno un workaround documentato e testato che un operatore può seguire | errori noti aperti con un workaround rivisto negli ultimi 6 mesi / errori noti aperti; gli elementi chiusi e quelli a rischio accettato sono esclusi | percentuale | Knowledge base collegata ai record degli errori noti | Gestione dei problemi; gestione della conoscenza | Runbook o definition of done per l'operabilità | Mensile |
| Incidenti collegati a errori noti aperti | Incidenti la cui causa è un errore noto aperto, una misura diretta degli interessi pagati in interruzione del servizio | incidenti del periodo collegati a un errore noto che era aperto quando l'incidente è iniziato / tutti gli incidenti del periodo; gli incidenti senza un collegamento alla causa sono riportati come non collegati, non contati | percentuale, più numero | Collegamenti incidente-problema dello strumento ITSM | Gestione degli incidenti; gestione dei problemi | Difetti sfuggiti; afflusso di bug in produzione | Mensile |
| Stock di debito | Numero e dimensione stimata degli elementi di debito tecnico registrati che restano aperti | elementi aperti nel registro del debito a fine periodo; la dimensione è la somma delle fasce di sforzo grossolane (ore, giorni, settimane) assegnate alla registrazione; il debito non registrato o sospetto è escluso | numero, e fasce di sforzo | Registro del debito nel tracker, etichettato per servizio | Miglioramento continuo; progettazione del servizio | Elementi del backlog di prodotto etichettati come debito | Mensile |
| Interessi del debito | Lavoro aggiuntivo causato dal debito aperto e dagli errori noti, in tempo del team | ore registrate nel periodo su elementi di lavoro etichettati con un riferimento a un debito o a un errore noto (workaround, passaggi manuali, rilavorazione e sforzo aggiuntivo sulle modifiche interessate) / ore lavorative totali del team nel periodo; il lavoro di riparazione in sé è escluso e contato nella quota di capacità | percentuale del tempo di lavoro | Etichette di tempo o di sforzo sugli elementi di lavoro, tenute a livello di team | Miglioramento continuo; gestione dei problemi | Quota di lavoro non pianificato e di rilavorazione | Mensile |
| Quota di capacità per il debito | Quota della capacità di consegna spesa per estinguere debito ed errori noti | capacità (numero di elementi o sforzo) degli elementi di lavoro completati etichettati come riparazione di debito o correzione di errore noto / tutti gli elementi di lavoro completati nel periodo; gli elementi senza etichetta sono esclusi | percentuale | Tracker, elementi completati per etichetta | Miglioramento continuo; abilitazione delle modifiche | Allocazione della capacità | Per periodo di pianificazione, rivisto mensilmente |
| Variazione netta del debito | Se il registro sta crescendo o si sta riducendo | elementi di debito e di errore noto registrati nel periodo meno elementi risolti nel periodo; risolto significa correzione rilasciata, non integrata; gli elementi chiusi come «non verrà corretto» sono contati in una riga separata | numero (con segno) | Registro del debito e record degli errori noti | Miglioramento continuo | Variazione del backlog per categoria | Mensile |

Il rischio accettato è un modo legittimo di chiudere un errore noto, perché alcuni problemi non valgono la pena di essere corretti. È elencato separatamente in modo che la chiusura degli elementi non migliori silenziosamente il dato sull'anzianità. La finestra di revisione di 6 mesi nella copertura dei workaround è un esempio. Un team imposta la finestra in modo da corrispondere alla velocità con cui cambiano i suoi sistemi e la scrive nel registro delle metriche.

## Raccomandazioni

### Costruire il registro

**1. Unire l'elenco degli errori noti e l'elenco del debito in un unico registro.** Si tenga un solo registro con un campo per l'origine (operations o consegna), il servizio, il responsabile, la fascia di dimensione e il collegamento ai record correlati. Può contenerlo lo strumento ITSM, o il tracker, purché ciascun sistema rimandi all'altro. Senza una vista unica, un errore noto nelle operations compete con un elemento di debito invisibile nella consegna per gli stessi ingegneri.

**2. Registrare il debito nel momento in cui viene creato o scoperto.** Una scorciatoia presa deliberatamente va nel registro nella stessa pull request o nello stesso record di modifica, con un motivo dichiarato e una data di revisione. Il debito trovato in seguito viene registrato da chi lo trova. Una regola di cattura economica, di una riga, funziona meglio di un audit periodico, perché le persone dimenticano ciò che sapevano il trimestre scorso.

### Misurare gli interessi

**3. Collegare ogni volta gli incidenti agli errori noti.** Il collegamento tra un incidente e il suo errore noto è il dato più forte di cui si dispone sugli interessi, e costa pochi secondi alla risoluzione. Si renda il collegamento un campo obbligatorio quando la causa è nota e si riporti la quota di non collegati, in modo che una lacuna non appaia come una buona notizia (si veda l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»). Quando la stessa causa compare in più incidenti, il record del problema porta le evidenze per la correzione.

**4. Etichettare il lavoro che il debito crea.** Si lasci che gli ingegneri contrassegnino un elemento di lavoro quando è stato necessario un workaround, un passaggio manuale o una rilavorazione aggiuntiva a causa di un punto debole noto, e lo si colleghi all'elemento del registro. L'etichetta costa poco e fornisce il dato degli interessi del debito a livello di team. Si tratti il risultato come una stima con un ampio margine di errore, utile per ordinare gli elementi e per osservare una tendenza, non per la contabilità.

**5. Valutare ogni elemento con due numeri: sforzo di riparazione e interessi mensili.** Si usino fasce grossolane, come ore, giorni, settimane, per lo sforzo, e un costo mensile approssimativo ricavato dagli incidenti collegati, dal lavoro etichettato e da qualsiasi costo di fermo che la propria organizzazione già stima. Dividere gli interessi per lo sforzo dà un semplice tempo di rientro. Non si inventi precisione: una fascia e un'ipotesi dichiarata bastano a separare i vantaggi evidenti dagli elementi che possono attendere.

### Proteggere la capacità e decidere

**6. Riservare una quota permanente di capacità e riportarla.** Si concordi con il product owner una quota di ogni ciclo per il lavoro di riparazione, stabilita in base alla tendenza del registro e riesaminata ogni trimestre. Si riporti la quota di capacità per il debito accanto alle cifre del lavoro pianificato, in modo che i dirigenti vedano il lavoro di riparazione come un investimento deliberato. Una quota riservata protegge inoltre il team da una discussione di compromesso a ogni conversazione di pianificazione, che il backlog delle funzionalità di solito vince.

**7. Ordinare le riparazioni rispetto alle funzionalità con un'unica valuta comune.** Si mettano gli errori noti e gli elementi di debito nella stessa conversazione di definizione delle priorità delle funzionalità, espressi come costo del ritardo e tempo di rientro. Una correzione che rimuove un incidente settimanale e restituisce il proprio sforzo in un trimestre compete in base ai propri meriti. Ordinare in base al rumore, all'anzianità di chi lo chiede o alla data di registrazione dà risultati scadenti (si veda l'Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni»).

**8. Chiudere il cerchio sulle decisioni di rinvio.** Per ogni elemento lasciato consapevolmente aperto, si registrino chi ha accettato il rischio, la data di revisione e l'innesco che lo farebbe salire di priorità, come un secondo incidente o una modifica pianificata nell'area. Si riveda l'elenco degli accettati con una propria cadenza. Un elemento rinviato tre volte senza un innesco è una decisione di ignorarlo, e il registro dovrebbe dirlo.

### Mantenere onesti i numeri

**9. Rilasciare la correzione prima di chiudere il record.** Un errore noto resta aperto finché la correzione definitiva non è in produzione e la ricorrenza non è stata verificata su una finestra dichiarata. Chiudere a «integrato» o a «ticket completato» lusinga i dati sull'anzianità e sulla variazione netta e riapre l'incidente in seguito (si veda l'Argomento 4.5 «Metriche di rilascio e distribuzione»). Si monitori il tasso di riapertura degli errori noti come controllo di qualità della regola di chiusura.

**10. Guardare la forma del registro, oltre ai totali.** Un conteggio piatto può nascondere una lunga coda di elementi molto vecchi, una quota crescente di elementi in un servizio o un registro mantenuto piccolo chiudendo tutto come «non verrà corretto». Si mostrino in una sola pagina la distribuzione dell'anzianità, la suddivisione per servizio e l'elenco dei rischi accettati. Lo si riveda con le persone che possiedono i servizi, nella stessa riunione che pianifica il lavoro del trimestre successivo.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di contromisura abbinata |
| --- | --- | --- |
| Anzianità del backlog degli errori noti | Chiudere i vecchi record come «rischio accettato» o «non verrà corretto»; dividere un vecchio record in nuovi record giovani; azzerare l'orologio registrando di nuovo | Numero e anzianità dei rischi accettati riportati nella stessa pagina; revisione delle chiusure da parte di qualcuno esterno al team responsabile; discendenza dei record conservata |
| Copertura dei workaround | Scrivere un workaround vago per soddisfare il campo; contare un workaround che nessun operatore ha mai provato | Uso del workaround e tasso di fallimento negli incidenti collegati; prova periodica di un campione di workaround |
| Incidenti collegati a errori noti aperti | Lasciare gli incidenti non collegati, o collegarli a una causa diversa, in modo che la quota scenda | Quota di incidenti non collegati riportata accanto ad essa; revisione a campione degli incidenti chiusi per individuare collegamenti mancati |
| Stock di debito | Non registrare il debito, in modo che lo stock appaia piccolo; unire molti elementi in un unico grande elemento; registrare banalità per apparire diligenti | Revisione del registro rispetto a un campione di code review e di postmortem degli incidenti; controlli sulla dimensione e sulla specificità degli elementi |
| Interessi del debito | Etichettare troppo poco il lavoro per evitare il controllo, o troppo per ottenere un budget di riparazione; leggere la cifra come una valutazione di un team | Audit a campione di elementi etichettati e non etichettati; solo vista a livello di team, senza confronto tra team; interessi letti insieme ai collegamenti degli incidenti |
| Quota di capacità per il debito | Etichettare il normale lavoro sulle funzionalità come riparazione; scegliere elementi cosmetici facili per riempire la quota | Controllo dell'esito: anzianità degli elementi più vecchi ad alti interessi e collegamenti degli incidenti in calo; revisione di ciò che è stato corretto rispetto all'ordinamento |
| Variazione netta del debito | Risolvere molti elementi minuscoli per compensarne pochi grandi; chiudere gli elementi come «non verrà corretto» per far scendere il conteggio | Variazione netta mostrata per fascia di dimensione e per interessi; riga dei «non verrà corretto» riportata; controllo della ricorrenza sugli elementi risolti |

Una lettura sana mostra un registro visibile, specifico e che si muove in una direzione scelta dal team. Gli elementi più vecchi ad alti interessi diminuiscono di numero. Gli incidenti collegati a errori noti aperti sono in calo, e la quota di non collegati è piccola. La quota di capacità per il debito è stabile al livello concordato anziché impennarsi dopo una crisi e svanire dopo. L'elenco dei rischi accettati è breve e rivisto. Quando un singolo numero appare eccellente e gli altri non si muovono, si sospetti della definizione prima di festeggiare.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Un unico registro unito di errori noti e debito | Un'unica definizione delle priorità; operations e consegna vedono gli stessi costi | Richiede strumenti condivisi o collegamenti; la titolarità tra due funzioni deve essere stabilita |
| Una quota permanente di capacità per le riparazioni | Prevedibile; protegge il lavoro di riparazione dalla pressione delle funzionalità | Può essere spesa in elementi di basso valore se l'ordinamento è debole |
| Lavoro di riparazione pianificato solo quando vince il dibattito sulle priorità | Flessibile; risponde alla priorità corrente | Le funzionalità vincono quasi sempre; il registro cresce fino a una crisi |
| Interessi stimati da incidenti e lavoro etichettato | Lega il debito a un costo osservabile; supporta l'ordinamento | Numeri approssimativi; dipende da un'etichettatura onesta e dai collegamenti degli incidenti |
| Una spinta dedicata alle riparazioni o «settimana del debito» | Concentrazione e progressi visibili | Episodica; il registro si riempie di nuovo tra un evento e l'altro; interrompe gli impegni pianificati |

Si scelga la soluzione più leggera che mantenga in movimento gli elementi più vecchi ad alti interessi. Un piccolo team può gestire il registro su un'unica board con un'etichetta e una revisione mensile. Le organizzazioni più grandi hanno bisogno di collegamenti tra strumenti e di un metodo di ordinamento concordato. L'obiettivo è una decisione deliberata su ogni elemento, non un elenco vuoto.

## Domande da discutere con il team

**1. Quali tre elementi aperti ci costano di più ogni mese e come lo sappiamo?**
Si chieda alle persone di nominare i candidati a memoria, poi li si controlli rispetto ai collegamenti degli incidenti e al lavoro etichettato. Si confronti l'elenco ricordato con quello misurato e si annotino le differenze. Si concordi come verranno raccolte da ora in avanti le evidenze per l'ordinamento.

**2. Quando rinviamo una correzione, chi decide e quando riguardiamo la questione?**
Si ripercorrano gli ultimi cinque rinvii e ci si chieda chi abbia accettato il rischio e quale data di revisione sia stata fissata. Dove nessuno ha deciso, l'elemento è stato trascurato, non rinviato. Si concordi una regola per cui ogni rinvio porta un responsabile, un motivo e un innesco. Si discuta come verrà rivisto l'elenco dei rischi accettati e da chi.

**3. Quanta capacità dovremmo riservare alle riparazioni e che cosa cambierebbe la quota?**
Si mostrino la tendenza del registro e l'attuale quota di capacità per il debito. Ci si chieda a che cosa il team sarebbe disposto a rinunciare per aumentarla e quali evidenze la farebbero scendere. Si registrino il numero, il motivo e la data in cui riesaminarlo.

**4. I nostri workaround sono reali e un nuovo operatore sarebbe in grado di seguirli?**
Si scelga un workaround a caso e si chieda a qualcuno che non lo ha scritto di seguirlo. Si concordi una routine di prova per i workaround che coprono gli errori di maggior impatto.

**5. Che cosa conta come corretto e per quanto tempo osserviamo prima di chiudere il record?**
Si confrontino le regole di chiusura usate da operations, consegna e product owner. Si discuta una finestra di ricorrenza adatta al servizio e che cosa farà il team quando un elemento chiuso viene riaperto. Si concordi un'unica definizione e la si scriva nel registro delle metriche.

**6. Dove i nostri numeri sul debito potrebbero raccontarci una storia comoda?**
Si chiedano i modi in cui ciascun numero potrebbe essere lusingato: debito non registrato, elementi facili corretti per primi, elementi chiusi come non verrà corretto. Si osservino la quota di incidenti non collegati e l'elenco dei rischi accettati. Si scelga una contromisura da aggiungere questo trimestre e si nomini chi la controllerà.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna vedono per primi il debito, di solito mentre modificano il codice. Traggono beneficio da un registro facile da arricchire e da una quota protetta di capacità, in modo che il lavoro di riparazione non dipenda dal vincere una discussione a ogni conversazione di pianificazione. Dovrebbero registrare le scorciatoie quando le prendono, etichettare il lavoro causato dai punti deboli ed evitare di usare il debito come etichetta per qualsiasi lavoro che preferirebbero non fare (si veda l'Argomento 2.2 «Lead time, cycle time ed efficienza del flusso» per gli effetti del debito sul lead time).

### Team di servizio e operations

I team operativi vedono gli interessi: incidenti ripetuti, passaggi manuali, workaround fragili e il carico di reperibilità che ne consegue. Possiedono i record degli errori noti e i documenti dei workaround, e dispongono dei dati sugli incidenti che valorizzano gli interessi. Dovrebbero collegare ogni incidente al suo errore noto, provare i workaround e portare alla conversazione di pianificazione evidenze ordinate anziché un elenco di lamentele (si veda l'Argomento 5.7 «Metriche di toil e reperibilità»).

### Leadership e governance

I dirigenti decidono quanta capacità riceve il lavoro di riparazione, e gli incentivi che stabiliscono decidono se il registro resta onesto. Dovrebbero chiedere la distribuzione dell'anzianità, le cifre sugli interessi e l'elenco dei rischi accettati, non un singolo punteggio di debito. Leggere il registro come una valutazione di un team punisce la registrazione e spinge il debito nella clandestinità. Un forum di governance dovrebbe trattare l'accettazione del rischio come una decisione con un responsabile e una data di revisione.

### Clienti e utenti

I clienti avvertono il debito come fallimenti ripetuti e workaround che devono seguire. Dove un workaround riguarda gli utenti, lo si pubblichi con una nota semplice su quando è attesa una correzione e si rispetti la data o si spieghi il cambiamento. Meno incidenti ripetuti e uno stato onesto sui problemi noti costruiscono più fiducia di una promessa di assenza di difetti (si veda l'Argomento 6.1 «Metriche di soddisfazione del cliente»).

## In pratica: un esempio di ITIL agile

Il reparto IT di un ospedale regionale gestisce un servizio di prenotazione dei pazienti, supportato da un team di prodotto e da un gruppo di operations. Tutti i numeri di questo esempio sono illustrativi.

Il gruppo di operations tiene 23 errori noti nello strumento ITSM. Il team di prodotto tiene un elenco separato di 41 elementi di debito sulla propria board. Una revisione trimestrale rileva che 9 degli errori noti e 7 degli elementi di debito descrivono le stesse cinque cause. L'errore noto più vecchio ha 14 mesi, l'anzianità mediana degli errori noti è di 5 mesi e l'85° percentile è di 11 mesi. La copertura dei workaround è del 61 per cento. Gli incidenti collegati a errori noti aperti sono il 18 per cento degli incidenti del trimestre, e il 22 per cento degli incidenti non è collegato, quindi la quota reale potrebbe essere più alta.

Il team unisce i due elenchi in un unico registro di 55 elementi distinti. Per i dieci elementi con più incidenti collegati, stima uno sforzo di riparazione in fasce e un interesse mensile in ore. Un elemento spicca: un job notturno di sincronizzazione degli appuntamenti fallisce silenziosamente circa una volta ogni due settimane e richiede un riavvio manuale da parte del personale di reperibilità. La sua riparazione è stimata in due settimane. I suoi interessi, ricavati dagli incidenti collegati e dal lavoro etichettato, sono di circa 10 ore al mese, e ogni fallimento ritarda gli elenchi mattutini degli ambulatori. Il tempo di rientro è di circa quattro mesi, più rapido di qualsiasi funzionalità presente allora nel piano.

La decisione, registrata nel registro delle decisioni, è di riservare il 15 per cento della capacità del team di prodotto al lavoro di riparazione, ordinato per interessi per unità di sforzo, e di correggere per primo il job di sincronizzazione. Il responsabile delle operations accetta inoltre di collegare ogni incidente a un errore noto dove esiste e di provare i cinque workaround più usati.

Due trimestri dopo l'anzianità mediana degli errori noti è di 4 mesi e l'85° percentile è di 9 mesi. Gli incidenti collegati a errori noti aperti scendono all'11 per cento. La quota di non collegati scende all'8 per cento, il che dà al team più fiducia nella cifra. Poi il team coglie un rischio di manipolazione. La riga della variazione netta del debito mostra 12 elementi risolti in un trimestre, ma 6 di essi sono stati chiusi come non verrà corretto, e due di questi erano gli elementi più vecchi ad alti interessi. Un revisore esterno al team legge i record e scopre che le chiusure erano state fatte per migliorare il dato sull'anzianità. Gli elementi vengono riaperti, il motivo della chiusura diventa un campo obbligatorio con un approvatore nominato e gli elementi a rischio accettato compaiono ora nella stessa pagina della distribuzione dell'anzianità.

## Lente di settore

**Startup.** Il debito è di solito deliberato e spesso giusto, perché la rapidità verso un primo cliente conta più di tutto. Si tenga un unico elenco sulla board con un'etichetta, si registrino le scorciatoie quando le si prende e si fissi una data di revisione in modo che «più tardi» abbia un significato. Si aumenti la quota di riparazione quando gli interessi cominciano a manifestarsi negli incidenti.

**Piccola impresa.** Un singolo amministratore o un piccolo team porta spesso insieme operations e consegna, quindi i due elenchi sono naturalmente uno solo. Si registrino gli errori noti e i loro workaround in un documento condiviso e si annoti da quale fornitore o contratto dipenda ciascun elemento. Un difetto di proprietà del fornitore è un errore noto che non si può correggere da soli, quindi si monitorino la data promessa dal fornitore e il proprio workaround.

**Grande impresa.** Molti team, molti servizi e molti fornitori creano diversi elenchi in competizione e diverse definizioni di «done». Si stabiliscano un'unica struttura del registro, un'unica regola di chiusura e un unico metodo di ordinamento, e si lasci che i team aggiungano campi locali con una corrispondenza dichiarata.

**Governo e settore pubblico.** Sistemi legacy, lunghi cicli di approvvigionamento e budget fissi rendono alcuni debiti costosi da ripagare e alcune decisioni di sostituzione lente. Si registrino i vincoli legali, di conservazione e di audit che bloccano una correzione, poiché spiegano il rinvio. Si mostri il registro come parte della rendicontazione del rischio e si pianifichi la riparazione nel ciclo di bilancio anziché trattarla come un costo non pianificato (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

La motivazione è smettere di pagare interessi che non si vedono. Incidenti ripetuti, workaround manuali e modifiche lente e rischiose sono i costi visibili, e normalmente vengono registrati come problemi separati in budget separati. Un registro unito li trasforma in un unico confronto tra il costo della riparazione e il costo di sostenere il debito.

Il costo della pratica ha tre componenti. La prima è l'avvio: un registro, collegamenti tra lo strumento ITSM e il tracker e una convenzione di etichettatura. La seconda è lo sforzo corrente: pochi secondi per incidente per collegarlo, pochi secondi per elemento di lavoro per etichettarlo e una revisione mensile di un'ora o due per servizio. La terza è la capacità di riparazione in sé, che è la voce più grande ed è un investimento deliberato, non un costo generale.

Il ritorno deriva da schemi che si possono misurare da soli. Si confrontino gli incidenti collegati a un errore noto prima e dopo la sua correzione, le ore di lavoro etichettato sulle modifiche interessate prima e dopo, e le interruzioni di reperibilità evitate. Si aggiunga il costo del fermo se la propria organizzazione già lo stima. Non si prenda in prestito una cifra di settore per il costo del debito: la letteratura di ricerca sul tema è reale, ma le cifre dipendono dal contesto, e i propri dati su incidenti e tempi sono un'evidenza migliore. La ricerca di *Accelerate* collega le prestazioni di consegna alle prestazioni organizzative (si veda l'Argomento 2.8 «Metriche DORA»), sebbene non dia alcun prezzo per il proprio registro. Per la trattazione più ampia di costi e ritorno si veda l'Argomento 7.7 «Ritorno sull'investimento e business case».

## Anti-pattern e insidie

- **Due elenchi che non si incontrano mai.** Operations e consegna si contendono la stessa capacità con evidenze diverse. Si uniscano gli elenchi o si colleghi ogni causa condivisa.
- **Un unico punteggio di debito per l'organizzazione.** Nasconde dove sia il costo e invita a classificare i team. Si riporti il registro per servizio, con anzianità, interessi e titolarità.
- **La grande riscrittura come unica riparazione.** Le grandi pulizie si arenano, e il registro si riempie di nuovo mentre procedono. Si estinguano gli elementi a piccoli passi, ordinati per tempo di rientro.
- **Debito zero come obiettivo.** Perseguirlo premia le chiusure banali e scoraggia la registrazione onesta. Si miri a un registro i cui elementi più vecchi ad alti interessi siano in movimento.
- **Chiudere gli errori noti a «integrato».** La correzione non ha raggiunto gli utenti, e l'incidente ritorna. Si chiuda al rilascio, poi si osservi la ricorrenza su una finestra dichiarata.
- **Nascondere il rinvio in «non verrà corretto».** Il dato sull'anzianità migliora e il rischio resta. Si conti separatamente il rischio accettato, con un responsabile e una data di revisione.
- **Trattare l'analisi statica come la verità.** I punteggi riflettono la forma del codice, non il costo. Li si usi per trovare candidati, poi si confermi con i collegamenti degli incidenti e lo storico delle modifiche.
- **Attribuire il debito agli autori.** Insegna alle persone a nascondere le scorciatoie e a evitare i componenti difficili. Si mantenga ogni misura a livello di servizio e di team (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Registro e definizioni | Errori noti e debito vivono nella testa delle persone o in appunti sparsi | Operations e consegna tengono ciascuna un elenco, con regole diverse | Un unico registro con una definizione scritta, un responsabile e una regola di chiusura per ogni elemento | Anzianità, rischio accettato e variazione netta rivisti rispetto alle definizioni scritte | Definizioni riviste con fornitori e clienti quando smettono di informare le decisioni |
| Misurazione degli interessi | Nessun collegamento tra incidenti e cause | Alcuni incidenti collegati a mano agli errori noti | Collegamenti degli incidenti obbligatori dove la causa è nota; lavoro etichettato a livello di team | Interessi e tempo di rientro stimati per gli elementi principali e analizzati nel tempo | Interessi collegati agli esiti del servizio e condivisi tra team e fornitori |
| Capacità e definizione delle priorità | La riparazione avviene in una crisi | Tempo informale riservato da alcuni team | Una quota concordata di capacità e un metodo di ordinamento comune | Quota adeguata in base alla tendenza del registro e finanziata come lavoro pianificato | Capacità di riparazione coordinata tra piattaforme condivise e fornitori |
| Workaround e chiusura | Workaround non documentati o in mano a una sola persona | Documentati per alcuni errori, non testati | Workaround nella knowledge base, con una regola di chiusura al rilascio | Uso, fallimento e ricorrenza dei workaround dopo la chiusura misurati | Workaround ritirati automaticamente al rilascio delle correzioni, con feedback degli utenti |

## Checklist

- [ ] Errori noti ed elementi di debito risiedono in un unico registro, oppure sono collegati elemento per elemento.
- [ ] Ogni elemento ha un responsabile, una fascia di dimensione, un servizio e una data di revisione.
- [ ] Le scorciatoie deliberate sono registrate quando vengono prese, con un motivo.
- [ ] Gli incidenti sono collegati agli errori noti dove la causa è nota, e la quota di non collegati è riportata.
- [ ] Il lavoro causato dai punti deboli è etichettato a livello di team, e l'etichettatura è verificata a campione.
- [ ] Ciascuno degli elementi principali ha una fascia di sforzo di riparazione e una stima degli interessi mensili.
- [ ] Una quota di capacità per il lavoro di riparazione è concordata, riportata e rivista ogni trimestre.
- [ ] Gli errori noti si chiudono al rilascio della correzione, con una finestra di ricorrenza dichiarata.
- [ ] Le chiusure a rischio accettato sono elencate separatamente, con un approvatore e una data di revisione.
- [ ] I workaround per gli errori di maggior impatto sono testati in modo programmato.
- [ ] La distribuzione dell'anzianità e la suddivisione per servizio sono mostrate, insieme ai totali.
- [ ] Nessuna misura del debito è usata per confrontare o classificare individui.

## Prompt IA

**Unire due elenchi in un unico registro.**

```text
Ho due elenchi di riparazioni rinviate. L'elenco A proviene da [strumento o
fonte delle operations] e contiene [numero] errori noti. L'elenco B proviene da
[tracker o fonte della consegna] e contiene [numero] elementi di debito tecnico.
Ecco le voci: [incollare le voci con titolo, servizio, data di registrazione e
una descrizione di una riga]. Raggruppi le voci che sembrano descrivere la
stessa causa, proponga una singola voce di registro per ciascun gruppo e
segnali le voci che richiedono la conferma di una persona per la corrispondenza.
Non inventi cause, servizi o date. Elenchi le sue ipotesi e le domande a cui
dovrei rispondere prima di unire.
```

**Stimare le fasce di sforzo e gli interessi mensili per gli elementi principali.**

```text
Per l'elemento del registro [titolo dell'elemento] sul servizio [servizio],
dispongo di queste evidenze: incidenti collegati [elenco con date e durate],
lavoro etichettato [ore o numero di elementi] e una stima di riparazione del
team pari a [stima]. Mi aiuti a scrivere fasce grossolane di sforzo e di
interessi mensili, un semplice tempo di rientro e il livello di confidenza per
ciascuna cifra. Mostri i suoi calcoli. Non inventi costi, valori di benchmark né
cifre di settore. Se manca una cifra, me la chieda. Elenchi le sue ipotesi.
```

**Rivedere la chiusura e i rischi di manipolazione.**

```text
Ecco le definizioni e i dati dell'ultimo trimestre per il nostro registro di
errori noti e debito: [definizioni di anzianità, copertura dei workaround,
variazione netta del debito e regola di chiusura] e [riepilogo degli elementi
chiusi, con i motivi di chiusura]. Individui i modi in cui queste misure
potrebbero essere lusingate, le evidenze nei dati che suggeriscono che sia
accaduto e una contromisura per ciascuno. Lo tratti come una revisione dello
strumento di misura, non come una revisione delle persone. Non accusi nessuno e
non inventi dati. Elenchi le sue ipotesi.
```

**Preparare una conversazione di definizione delle priorità con il product owner.**

```text
Devo proporre come suddividere la capacità tra funzionalità e lavoro di
riparazione per [team] il prossimo trimestre. Il registro mostra [riepilogo del
registro: conteggi, distribuzione dell'anzianità, elementi principali con fasce
di sforzo e di interessi]. Il piano delle funzionalità contiene [riepilogo delle
funzionalità pianificate e del loro valore atteso, come fornito dal product
owner]. Rediga una proposta di una pagina che confronti le opzioni per la quota
di riparazione, indichi il costo del ritardo degli elementi principali di
riparazione e nomini i compromessi. Non inventi stime di valore né quote di
riferimento. Elenchi le sue ipotesi e le decisioni che il product owner deve
prendere.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare l'argomento che definisce una metrica correlata, come la ricorrenza o il fallimento delle modifiche, e la contromisura che le appartiene.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una metrica modificata indichi i propri orologi, il proprio vettore di manipolazione e la propria contromisura.

## Punti chiave

- Errori noti e debito tecnico sono due viste di un unico registro di riparazioni rinviate, quindi li si tenga insieme o collegati.
- Si misurino gli interessi che ciascun elemento costa ogni mese, in incidenti, workaround e modifiche rallentate, e si ordinino le riparazioni per tempo di rientro.
- Si faccia di ogni rinvio una decisione con un responsabile, un motivo e una data di revisione, e si riporti separatamente il rischio accettato.
- Si riservi una quota concordata di capacità al lavoro di riparazione e la si riporti accanto al lavoro pianificato.
- Si chiuda un errore noto al rilascio della correzione, poi si osservi la ricorrenza prima di fidarsi del risultato.
- Si mantenga ogni misura a livello di servizio e di team e si usino contromisure, in modo che un numero migliore significhi un sistema migliore.

## Riferimenti e letture di approfondimento

1. Cunningham, W., "The WyCash Portfolio Management System," OOPSLA '92 Experience Report, ACM, 1992.
2. Fowler, M., "Technical Debt Quadrant," 2009, https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
3. Fowler, M., *Refactoring: Improving the Design of Existing Code*, 2nd edition, Addison-Wesley, 2018.
4. Kruchten, P., Nord, R., and Ozkaya, I., *Managing Technical Debt: Reducing Friction in Software Development*, Addison-Wesley, 2019.
5. Sculley, D., and others, "Hidden Technical Debt in Machine Learning Systems," Advances in Neural Information Processing Systems 28, 2015, https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring).
15. Wikipedia, [Code smell](https://en.wikipedia.org/wiki/Code_smell).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
18. Wikipedia, [Software bug](https://en.wikipedia.org/wiki/Software_bug).
19. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
