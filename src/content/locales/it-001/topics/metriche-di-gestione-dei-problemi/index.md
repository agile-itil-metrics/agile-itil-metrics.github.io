# Metriche di gestione dei problemi

**Le metriche di gestione dei problemi mostrano se un team sta rimuovendo le cause dei propri incidenti o si limita a riparare i sintomi: occorre dunque misurare quante cause vengono individuate, con quale rapidità vengono corrette in via definitiva e se gli stessi incidenti si ripresentano.**

## Panoramica e motivazione

Un team che ripristina il servizio rapidamente può comunque restare intrappolato in un circolo vizioso. Lo stesso guasto torna ogni poche settimane, le stesse persone vengono chiamate in reperibilità e i numeri degli incidenti sembrano sani perché ogni riparazione è veloce. La gestione dei problemi è la pratica che permette di uscire da questo circolo. Osserva più incidenti insieme, trova la causa sottostante e fa in modo che sia rimossa o contenuta. Questo argomento tratta i numeri che indicano se tale lavoro viene svolto e se funziona.

Quattro termini reggono l'argomento. Un **incidente** è un'interruzione non pianificata di un servizio o una riduzione della sua qualità, secondo l'uso che ne fa il framework [ITIL](https://en.wikipedia.org/wiki/ITIL) (si veda l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti»). Un **problema** è la causa sottostante, o presunta, di uno o più incidenti. Un **errore noto** è un problema la cui causa è compresa e per il quale è registrato un workaround, conservato in un [database degli errori noti](https://en.wikipedia.org/wiki/Known_error_database) in modo che la persona successiva che incontra il sintomo possa trovarlo. Un [workaround](https://en.wikipedia.org/wiki/Workaround) (soluzione temporanea) riduce o evita l'impatto di un incidente o di un problema senza rimuoverne la causa. La correzione definitiva è la modifica che rimuove la causa.

Individuare la causa è compito dell'[analisi delle cause radice](https://en.wikipedia.org/wiki/Root_cause_analysis). Tra le tecniche comuni vi sono i [cinque perché](https://en.wikipedia.org/wiki/Five_whys), il [diagramma di Ishikawa](https://en.wikipedia.org/wiki/Ishikawa_diagram) e il [diagramma di Pareto](https://en.wikipedia.org/wiki/Pareto_chart), che ordina le cause in base alla frequenza con cui si verificano o al danno che producono. I sistemi complessi hanno spesso più cause concorrenti e nessun colpevole unico, perciò una buona registrazione di un problema indica i fattori che, una volta rimossi, fermano la ricorrenza, e dichiara il grado di fiducia del team.

Le metriche contano perché la gestione dei problemi ha una trappola di rendicontazione intrinseca. Aprire un record di problema è facile e dà una sensazione di produttività. Anche chiuderne uno è facile, dato che un record può essere chiuso con una nota. Nessuno dei due eventi dimostra che qualcosa sia migliorato per gli utenti. Le misure che vale la pena osservare si trovano più a valle: se gli incidenti collegati a un problema smettono di ripetersi, se gli errori noti vengono davvero usati dalle persone in reperibilità e per quanto tempo una causa diagnosticata attende la sua correzione.

Le visioni ITIL e agile qui si incontrano senza troppo attrito. In ITIL 4 la gestione dei problemi è una pratica all'interno del sistema di valore del servizio, vicina alla gestione degli incidenti, all'abilitazione delle modifiche e alla gestione della conoscenza. Il suo corrispettivo agile è il flusso di piccole correzioni basate sull'evidenza che attraversa il [backlog](https://en.wikipedia.org/wiki/Backlog) di un team, la retrospettiva che individua uno schema e l'abitudine di trattare il lavoro sull'affidabilità come ordinario lavoro di prodotto. Dove la visione ITIL sottolinea registrazioni, responsabilità ed errore noto, la visione agile sottolinea piccoli lotti e feedback rapido. Entrambe vogliono meno incidenti ripetuti, e questo esito è la misura da tenere davanti a tutti.

Questo argomento non ripete gli orologi degli incidenti (si veda l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti») né le misure sugli incidenti maggiori (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori»), e tratta il seguito delle revisioni solo dove alimenta i problemi (si veda l'Argomento 4.2 «Metriche di postmortem e apprendimento»). Il backlog degli errori noti e la più ampia idea di [debito tecnico](https://en.wikipedia.org/wiki/Technical_debt) sono trattati nell'Argomento 4.6 «Debito tecnico ed errori noti». Qui l'attenzione è sul record di problema e sugli esiti che produce. Le misure di ripristino e di fallimento basate sulle distribuzioni si trovano nell'Argomento 2.8 «Metriche DORA».

## Principi chiave

- **Misurare la ricorrenza, non le pratiche burocratiche.** La prova della gestione dei problemi è che gli incidenti collegati smettano di tornare. I conteggi dei record aperti e chiusi descrivono l'attività e dicono poco sul risultato.
- **Separare tre momenti.** Rilevare che esiste uno schema, individuarne la causa e rimuovere la causa sono eventi diversi, con orologi diversi e responsabili diversi. Fonderli nasconde dove si trova il ritardo.
- **Un workaround è una tappa, non una conclusione.** Va registrato, usato, e va monitorato per quanto tempo resta l'unica protezione. Un workaround che dura anni è debito con un responsabile che nessuno sa nominare.
- **Portare la correzione dove si lavora.** Una correzione definitiva di solito arriva come modifica o come elemento di backlog appartenente a un team di prodotto. La si misuri nel flusso del team stesso e la si mostri al team che possiede il servizio.
- **Collegare gli incidenti ai problemi alla fonte.** Ogni misura qui presentata dipende dal collegamento tra un incidente e un problema. Se il collegamento è debole, i numeri sono deboli.
- **Preferire distribuzioni e coorti alle medie.** Le durate dei problemi sono lunghe e asimmetriche, e pochi record vecchi dominano qualsiasi media (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).
- **Descrivere team e servizi, mai persone.** I problemi sono proprietà del sistema. Una tabella dei problemi chiusi per analista trasforma un'indagine in una quota da raggiungere.

## Definizioni delle metriche

Tutti gli orologi usano i timestamp del record di problema, dei record di incidente collegati e della modifica o dell'elemento di backlog collegato. Salvo diversa indicazione in una riga, i problemi sono contati per servizio e per team responsabile, ed escludono i record uniti o duplicati. Per ogni durata si preferiscono i percentili alle medie. I numeri dell'esempio di questo argomento sono illustrativi.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Corrispettivo agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Problemi aperti e chiusi | Flusso di record di problema in ingresso e in uscita dallo stato aperto, per servizio | Numero di aperti nel periodo e numero di chiusi nel periodo, ciascuno per codice di chiusura (corretto, rischio accettato, duplicato, non riproducibile); i duplicati sono mostrati ma esclusi dal conteggio dei «corretti» | numero per periodo | Record di problema dell'ITSM | Gestione dei problemi | Ingresso e throughput del backlog | Mensile |
| Anzianità del backlog dei problemi | Da quanto tempo i problemi aperti restano in attesa | Per ogni problema aperto, data dell'istantanea meno data di creazione del record; riportare la mediana e l'85° percentile dei problemi aperti e il più vecchio, per priorità | giorni | Record di problema dell'ITSM | Gestione dei problemi | Anzianità dell'elemento di lavoro sulla board | Mensile |
| Tasso di collegamento incidente-problema | Quota di incidenti che rimandano a un problema o a un errore noto dove ne è atteso uno | Incidenti del periodo con un problema o un errore noto collegato / incidenti del periodo con priorità alta o superiore, o riaperti, o appartenenti a una categoria ripetuta; gli incidenti chiusi come errore dell'utente o come duplicati sono esclusi | percentuale | Record di incidente e di problema dell'ITSM | Gestione degli incidenti; gestione dei problemi | Individuazione di schemi nella retrospettiva | Mensile |
| Tempo alla causa radice | Quanto tempo impiega un problema diagnosticato per arrivare a una causa registrata | L'orologio parte quando il record di problema viene creato e si ferma quando la causa è registrata e una seconda persona l'ha rivista; i problemi chiusi senza una causa sono esclusi e contati a parte; riportare la mediana e l'85° percentile | giorni | Record di problema dell'ITSM e relativo registro di audit | Gestione dei problemi | Spike o investigazione con time-box | Mensile |
| Tasso di riuso degli errori noti | Con quale frequenza un errore noto viene usato quando arriva un incidente | Incidenti risolti con un errore noto collegato o con il suo workaround / incidenti del periodo il cui sintomo corrisponde a un errore noto già esistente in quel momento; gli incidenti senza un errore noto corrispondente sono esclusi | percentuale | Collegamenti degli incidenti nell'ITSM; uso degli articoli di conoscenza | Gestione della conoscenza; gestione dei problemi | Uso di runbook o playbook del team | Mensile |
| Tempo alla correzione definitiva | Per quanto tempo un problema resta esposto dalla diagnosi alla correzione in esecuzione in produzione | L'orologio parte quando la causa è registrata e si ferma quando la modifica di correzione collegata è implementata e confermata; i problemi chiusi come rischio accettato sono esclusi e contati a parte; riportare la mediana e l'85° percentile | giorni | Record di problema; record di modifica o eventi di distribuzione della pipeline | Gestione dei problemi; abilitazione delle modifiche | Cycle time dell'elemento di correzione | Mensile |
| Tasso di ricorrenza dopo la correzione | Quota di problemi corretti i cui sintomi collegati sono tornati | Problemi chiusi come corretti in un trimestre di coorte con un nuovo incidente corrispondente entro 90 giorni dall'entrata in produzione della correzione / problemi chiusi come corretti in quel trimestre; la finestra di 90 giorni è un esempio e viene dichiarata sul grafico | percentuale | Record di incidente e di problema dell'ITSM; eventi di distribuzione | Gestione dei problemi; miglioramento continuo | Tasso di difetti sfuggiti o di regressioni | Trimestrale |
| Quota di soli workaround | Quota di problemi noti protetti soltanto da un workaround | Problemi aperti nello stato di errore noto senza una correzione pianificata / problemi aperti nello stato di errore noto; i problemi a rischio accettato con un responsabile nominato e una data di revisione sono mostrati come gruppo separato | percentuale | Record di problema dell'ITSM | Gestione dei problemi; gestione del rischio | Registro del debito tecnico | Mensile |

La finestra di 90 giorni, la regola di corrispondenza dei sintomi e la definizione di «atteso» nel tasso di collegamento sono esempi. Un team sceglie i valori adatti ai propri servizi e li scrive nel registro delle metriche (si veda l'Argomento 1.4 «Governance e responsabilità delle metriche»). Contare i problemi chiusi come «corretti» separatamente dagli altri codici di chiusura mantiene onesta la coppia aperti-chiusi.

## Raccomandazioni

### Decidere che cosa conta come problema

**1. Aprire un problema sulla base di evidenze e dichiarare quali sono.** I buoni inneschi sono incidenti ripetuti con lo stesso sintomo, un incidente maggiore di causa ignota, una tendenza individuata in una revisione o un rischio individuato prima di qualsiasi incidente. Si scriva l'innesco sul record, per esempio «cinque incidenti in sei settimane collegati allo stesso servizio». Se ogni incidente insolito diventa un record di problema, il backlog si riempie di rumore e nessuno lo legge.

**2. Usare un piccolo insieme condiviso di codici di chiusura.** Corretto, rischio accettato, duplicato, non riproducibile e unito bastano alla maggior parte dei team. Ogni codice ha un significato in una frase e un responsabile che può usarlo. La composizione dei codici di chiusura è più informativa del numero di chiusi, perché mostra quanto lavoro ha rimosso una causa e quanto si è concluso senza una modifica.

### Collegare incidenti e problemi alla fonte

**3. Fare del collegamento un passaggio della chiusura dell'incidente.** Si chieda a chi risolve di collegare l'incidente a un problema, a un errore noto o a «nessuno trovato» prima di chiuderlo. Si offrano suggerimenti di corrispondenza dallo strumento, quando possibile, e si lasci decidere a una persona. Un collegamento fatto settimane dopo in un'operazione di massa non è affidabile (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»).

**4. Concordare come si abbinano i sintomi.** La ricorrenza dipende dal decidere quando due incidenti sono «lo stesso». Una breve tassonomia di cause e sintomi, con definizioni ed esempi, è meglio del testo libero. Si riveda ogni trimestre un campione di corrispondenze, poiché le non corrispondenze in entrambe le direzioni distorcono il tasso di ricorrenza.

**5. Lasciare che la revisione degli schemi alimenti l'elenco dei problemi.** Una revisione mensile delle categorie di incidente, per servizio e tramite [diagramma di Pareto](https://en.wikipedia.org/wiki/Pareto_chart), mostra quali poche cause producono la maggior parte del disagio. Si usi la revisione per aprire problemi e per assegnare loro una priorità, e si inviino nello stesso elenco le cause ripetute provenienti dalle revisioni degli incidenti maggiori (si veda l'Argomento 3.2 «Volume e priorità degli incidenti»).

### Misurare i tre ritardi

**6. Cronometrare separatamente le fasi.** Si misuri dalla creazione del record alla causa registrata, e dalla causa registrata alla correzione in esecuzione in produzione. Il primo ritardo indica la capacità di indagine, l'accesso ai dati e la competenza. Il secondo indica la definizione delle priorità, il processo delle modifiche e il lavoro sulle funzionalità in concorrenza. Un unico «tempo per chiudere un problema» li mescola e non offre a nessuno un'azione chiara.

**7. Riportare i più vecchi.** Si mostrino la mediana e l'85° percentile dell'anzianità dei problemi aperti e si elenchino i più vecchi per servizio. Pochi record vecchi di anni spostano una media e dicono poco, mentre l'elenco dei più vecchi invita a una decisione: correggere, accettare il rischio con un responsabile nominato e una data di revisione, oppure chiudere con una motivazione.

### Portare la correzione nel flusso normale

**8. Trattare una correzione definitiva come un elemento di backlog con un responsabile e una data.** Si colleghi il problema alla modifica o all'elemento di lavoro che porta la correzione e si mostri la correzione sulla stessa board del lavoro sulle funzionalità. Si assegnino le priorità con una regola concordata, per esempio ponderando il costo degli incidenti ricorrenti rispetto allo sforzo di correggerli. Dove una correzione richiede una modifica, il percorso della modifica standard dovrebbe essere rapido per le correzioni a basso rischio (si veda l'Argomento 4.3 «Metriche di abilitazione delle modifiche»).

**9. Chiedere insieme il workaround e la data di uscita.** Un workaround fa guadagnare tempo. Lo si registri come errore noto, si verifichi che il team di reperibilità possa trovarlo ed eseguirlo e si fissi una data di revisione per la correzione. La quota di soli workaround diventa allora un elenco di decisioni, non un silenzioso cumulo di debito (si veda l'Argomento 4.6 «Debito tecnico ed errori noti»).

### Verificare che le correzioni abbiano funzionato

**10. Far seguire a ogni correzione una finestra di ricorrenza.** Dopo che una correzione è in produzione, si osservino gli incidenti corrispondenti per una finestra dichiarata e si riporti la quota di correzioni che hanno tenuto, per coorte trimestrale. La ricorrenza è la cosa più vicina a una misura di esito che questa pratica possieda. Se è alta, ci si chieda se sia stata trovata la causa o solo un fattore concorrente e si riapra l'analisi.

**11. Misurare il riuso degli errori noti dove lavorano i risponditori.** Si conti con quale frequenza un errore noto o il suo workaround viene usato quando arriva un incidente corrispondente. Un basso tasso di riuso con molti errori noti di solito significa che le voci sono difficili da trovare, obsolete o scritte per l'analista anziché per chi risponde. Si correggano l'articolo e la sua collocazione prima di aggiungerne altri (si veda l'Argomento 3.6 «Metriche di gestione della conoscenza»).

### Mantenere onesti i numeri

**12. Mostrare coorti e avvertenze accanto a ogni grafico.** Si riportino sul grafico stesso le definizioni, la composizione dei codici di chiusura e ogni cambiamento di regola. Le coorti trimestrali di problemi corretti mostrano la ricorrenza senza mescolare lavoro vecchio e nuovo. Si abbini ogni conteggio a una misura di esito, in modo che nessun numero stia da solo (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di contromisura abbinata |
| --- | --- | --- |
| Problemi aperti e chiusi | Aprire molti record banali; dividere un problema in più parti; chiudere i record come duplicati o «non riproducibili» per svuotare l'elenco | Composizione dei codici di chiusura; tasso di ricorrenza dopo la correzione; un campione di record chiusi letto ogni trimestre |
| Anzianità del backlog dei problemi | Chiudere i record più vecchi senza una correzione; riaprirli come nuovo record per azzerare l'orologio; riclassificare un problema come richiesta | Collegare i nuovi record agli originali e riportare l'anzianità dal primo record; elenco delle chiusure per motivo; revisione dei rischi accettati |
| Tasso di collegamento incidente-problema | Collegare ogni incidente a un problema generico e vago per aumentare il tasso | Quota di collegamenti verso i cinque problemi più grandi; campione di collegamenti verificati per una corrispondenza reale; ricorrenza dei sintomi collegati |
| Tempo alla causa radice | Registrare una causa rapida e superficiale per fermare l'orologio; indicare «errore umano»; saltare il secondo revisore | Tasso di ricorrenza dopo la correzione; la tassonomia delle cause, dove «errore umano» non è accettato da solo; revisione di un campione di cause rispetto alle evidenze |
| Tasso di riuso degli errori noti | Contare un collegamento aggiunto dopo la chiusura dell'incidente; aggiungere un errore noto a ogni incidente di un servizio | Tempo tra la chiusura dell'incidente e il collegamento; feedback di chi risponde sull'utilità della voce; revisione delle voci non usate da 90 giorni |
| Tempo alla correzione definitiva | Contrassegnare la modifica come implementata prima che la correzione sia verificata; chiudere come rischio accettato per evitare il lavoro | Tasso di ricorrenza dopo la correzione; elenco dei rischi accettati con responsabile e data di revisione; passaggio di verifica prima che l'orologio si fermi |
| Tasso di ricorrenza dopo la correzione | Definire i sintomi in modo così stretto che le ricorrenze non corrispondano; allargare la finestra di chiusura in modo che le correzioni ricadano in coorti precedenti; ritardare il collegamento | Tassonomia delle cause rivista da qualcuno esterno al team responsabile; tasso di collegamento degli incidenti; finestra fissa dichiarata in anticipo |
| Quota di soli workaround | Pianificare una correzione fittizia senza una data reale; spostare i problemi a rischio accettato; abbassare la priorità del problema | Anzianità delle correzioni pianificate che sono slittate; elenco dei rischi accettati rivisto con un dirigente responsabile nominato; costo degli incidenti ripetuti per problema |

Una lettura sana appare tranquilla e un po' noiosa. I conteggi di aperti e chiusi sono più o meno allineati, i problemi aperti più vecchi hanno ciascuno una decisione registrata, la quota di correzioni che hanno tenuto è alta e le linee delle coorti sono stabili, e gli errori noti sono usati da chi incontra i sintomi. Lo schema di allarme è un lungo e ordinato conteggio di chiusi accanto a incidenti che continuano a tornare. Quando i numeri dell'attività sembrano eccellenti e gli utenti incontrano ancora lo stesso guasto, ci si fidi degli utenti.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Record formali di problema per gli incidenti ricorrenti e maggiori | Responsabile, storia e collegamento alle correzioni chiari; supporta l'audit | Onere di processo; i record possono diventare obsoleti |
| Correggere le cause nel backlog del team senza un record di problema | Rapido, leggero, vicino al lavoro | Gli schemi tra più team restano invisibili; nessun errore noto condiviso |
| Codici di chiusura rigorosi e coorti trimestrali | Visione onesta dell'esito; resiste ai conteggi ordinati | Più lento da leggere; richiede disciplina nell'inserimento dei dati |
| Contare i problemi chiusi come obiettivo | Facile da spiegare e da rappresentare in un grafico | Invita a chiudere per il conteggio; premia i problemi piccoli |
| Monitoraggio della ricorrenza per i problemi corretti | La misura più vicina disponibile del fatto che abbia funzionato | Richiede una buona corrispondenza dei sintomi e una finestra abbastanza lunga |
| Monitoraggio del riuso per gli errori noti | Mostra se la conoscenza aiuta chi risponde | Dipende dal fatto che chi risponde colleghi la voce; può essere manipolato |

I team che correggono rapidamente le cause nel proprio backlog dovrebbero comunque registrare la causa dove l'organizzazione più ampia possa vederla, in modo che un altro team che incontra lo stesso sintomo ne tragga beneficio. Si investa prima nel collegamento tra incidenti e problemi e nella finestra di ricorrenza. Questi due elementi rendono interpretabile ogni altra misura.

## Domande da discutere con il team

**1. Quali tre incidenti abbiamo riparato più spesso lo scorso trimestre e che cosa ci ha impedito di correggerne la causa?**
Si elenchino gli incidenti ripetuti dal service desk o dallo strumento degli incidenti e li si ordini per numero di occorrenze. Per ciascuno ci si chieda quale sia stato l'ostacolo: nessun tempo per l'indagine, nessuna causa concordata, una correzione in concorrenza con le funzionalità o una correzione che richiede un altro team. Il facilitatore dovrebbe cercare gli ostacoli che si ripetono nei tre casi, perché indicano una correzione di sistema e non una tecnica.

**2. Quando colleghiamo un incidente a un problema, chi lo fa, quando e come sappiamo che è il problema giusto?**
Si ripercorra un incidente recente dalla chiusura al collegamento. Si noti se il collegamento viene fatto durante l'incidente, alla chiusura o in una successiva pulizia. Si riveda insieme un piccolo campione di collegamenti per verificare le vere corrispondenze. Si concordi una modifica che renda il collegamento più semplice o più affidabile.

**3. Quanto tempo attende la correzione una causa diagnosticata e chi decide l'ordine?**
Si prendano i problemi con una causa registrata e si osservi il tempo trascorso dalla diagnosi. Ci si chieda chi assegna loro le priorità e quale regola usi. La discussione mostra spesso che il ritardo è una coda davanti al backlog di prodotto e non una difficoltà tecnica. Si concordi come confrontare le correzioni dei problemi con il lavoro sulle funzionalità.

**4. Quali sono i nostri workaround più vecchi e che cosa perderemmo tenendoli un altro anno?**
Si nominino i tre workaround più longevi e che cosa costano in sforzo manuale, rischio e conoscenza delle persone che li ricordano ancora. Ci si chieda che cosa accadrebbe se la persona che conosce il workaround fosse assente. Per ciascuno si decida se correggerlo, accettare il rischio con un responsabile e una data di revisione, oppure dismettere il servizio.

**5. Se un problema corretto ritorna, ce ne accorgiamo e con quale rapidità?**
Ci si chieda come verrebbe notato un sintomo che ritorna e chi riaprirebbe l'analisi. Si discuta se la finestra di ricorrenza sia abbastanza lunga per il tipo di guasto in questione. Il facilitatore dovrebbe aiutare il gruppo a concordare una finestra e una regola di corrispondenza e a decidere quale team riveda le corrispondenze, in modo che il team responsabile non valuti il proprio lavoro.

**6. Le persone in reperibilità usano i nostri errori noti e che cosa le spingerebbe a consultarne uno?**
Si chieda a chi risponde quando ha cercato per l'ultima volta un errore noto e che cosa ha trovato. Si osservi dove risiedono le voci, come sono intitolate e se dicano che cosa fare per prima cosa. Si scelga una voce da riscrivere insieme a una persona che risponde e la si provi nella successiva settimana di reperibilità.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna possiedono la maggior parte delle correzioni definitive e sentono la spinta del lavoro sulle funzionalità. Traggono beneficio dal vedere il costo in incidenti di un guasto ricorrente accanto allo sforzo di correggerlo, e dall'avere un posto chiaro per gli elementi di correzione nel backlog. Dovrebbero resistere alla tentazione di trattare il lavoro sui problemi come un'interruzione e riservargli invece una quota visibile di capacità. La retrospettiva è un luogo naturale per individuare schemi e aprire problemi (si veda l'Argomento 2.1 «Misure del flusso»).

### Team di servizio e operations

I team operativi vedono per primi i sintomi ripetuti e sostengono il costo in chiamate e lavoro manuale. Tengono i record dei problemi e degli errori noti, conducono la revisione degli schemi e verificano che i collegamenti vengano fatti. Il loro rischio è spendere energie sui record anziché rimuovere le cause. Dovrebbero mantenere piccoli i codici di chiusura, fare dell'errore noto la prima cosa che chi risponde vede e consegnare le correzioni al team responsabile con le evidenze allegate.

### Leadership e governance

I dirigenti decidono se il lavoro sull'affidabilità prevale sulle funzionalità e stabiliscono gli incentivi per ciò che viene registrato. Dovrebbero chiedere la ricorrenza per coorte e i problemi aperti più vecchi prima di chiedere i conteggi, e trattare il rischio accettato come una decisione che richiede un responsabile nominato e una data di revisione. Riportare un backlog in calo senza ricorrenza premia la chiusura. La governance dovrebbe guardare tendenze e decisioni, non una classifica dei team (si veda l'Argomento 4.6 «Debito tecnico ed errori noti»).

### Clienti e utenti

Gli utenti giudicano la gestione dei problemi con un solo criterio: la stessa cosa continua ad andare storta? Non vedono i record dei problemi e non si interessano a quanti ne siano stati chiusi. Dove gli accordi lo consentono, si informino i clienti su un problema noto, sul workaround e sulla data entro cui è attesa una correzione, quindi si riferisca quando questa arriva. Una correzione annunciata e consegnata costruisce più fiducia di una silenziosa.

## In pratica: un esempio di ITIL agile

Il reparto IT di un ospedale regionale supporta un'applicazione di pianificazione clinica usata dai reparti e dagli ambulatori. Un team di prodotto sviluppa e gestisce l'applicazione, un team di infrastruttura gestisce la piattaforma e un service desk riceve le chiamate. Tutti i numeri di questo esempio sono illustrativi.

In una revisione trimestrale il responsabile del reparto nota che la dashboard dei problemi appare eccellente: 46 problemi chiusi contro 31 aperti, e il problema aperto più vecchio ha 140 giorni. I responsabili dei reparti continuano a lamentarsi che la schermata di pianificazione si blocca al cambio turno. Il responsabile del servizio chiede il tasso di collegamento incidente-problema e il tasso di ricorrenza dopo la correzione, che non sono ancora sulla dashboard.

I dati raccontano una storia diversa. La composizione dei codici di chiusura mostra che 22 delle 46 chiusure erano «non riproducibile» o «duplicato». Il tasso di collegamento per gli incidenti ad alta priorità è del 38 per cento. Gli incidenti di blocco erano stati registrati in quattro categorie, quindi nessuno schema era visibile. Una volta ricollegato a mano un campione di 30 incidenti, 17 di essi rimandavano a un'unica causa: un blocco del database tenuto da un job notturno che si protraeva fino al turno del mattino. La ricorrenza dei problemi corretti nel trimestre precedente era del 27 per cento, più alta di quanto chiunque si aspettasse.

Il team prende tre decisioni. Primo, la tassonomia di cause e sintomi acquisisce una voce «blocco della pianificazione», e collegare un problema o «nessuno trovato» diventa un passaggio obbligatorio alla chiusura dell'incidente. Secondo, il problema del job notturno passa dal backlog dell'infrastruttura alla board del team di prodotto con un responsabile e una data obiettivo, e un workaround (un riavvio pianificato dopo il job) viene registrato come errore noto e provato con il service desk. Terzo, la dashboard sostituisce il conteggio dei chiusi con tre numeri: la quota di correzioni che hanno tenuto dopo 90 giorni, la mediana e l'85° percentile del tempo dalla causa registrata alla correzione e i problemi aperti più vecchi con le relative decisioni.

Otto settimane dopo il blocco viene rimosso con una modifica al job. Gli incidenti della categoria dei blocchi scendono da circa nove al mese a due, e il riuso degli errori noti sale al 71 per cento per i sintomi che restano, soprattutto perché il service desk ora trova la voce sul riavvio. Il rischio di manipolazione individuato dal team stava nella sua stessa abitudine precedente: chiudere i record come «non riproducibile» quando un incidente cadeva fuori dall'orario di lavoro. La composizione dei codici di chiusura, il campione di record chiusi letto ogni trimestre e la coorte di ricorrenza ora fungono da contromisure. Nessuno viene classificato, e la revisione elenca servizi e decisioni, non analisti.

## Lente di settore

**Startup.** Raramente esiste un processo separato per i problemi. Il team corregge le cause direttamente, e il rischio è che nessuno ricordi il perché. Si tenga un elenco di una pagina degli incidenti ricorrenti e delle loro cause, si colleghino le correzioni all'issue tracker e si riveda l'elenco ogni mese. Si misurino la ricorrenza e l'anzianità degli elementi più vecchi; si rinvii l'uso di codici di chiusura formali a quando il team crescerà.

**Piccola impresa.** Una sola persona IT o un fornitore di servizi gestiti può gestire tutto. Si chiedano al fornitore i suoi record dei problemi e le categorie di incidente che li sostengono, oltre alla definizione scritta di «risolto». Un breve elenco dei cinque problemi ripetuti principali, con un responsabile nominato e una data per ciascuno, supera uno strumento pesante. Si esportino periodicamente i record per evitare il lock-in.

**Grande impresa.** Molti servizi e fornitori creano la maggiore necessità di definizioni condivise. Si concordino tra i team la tassonomia delle cause, i codici di chiusura e la finestra di ricorrenza, si nominino i responsabili dei problemi per servizio e si riporti per servizio e per coorte. Dove una correzione è in mano a un fornitore, si monitori la risposta del fornitore rispetto all'accordo (si veda l'Argomento 8.4 «Metriche di fornitori e contratti») e si faccia escalation attraverso un percorso documentato.

**Governo e settore pubblico.** Audit, controllo delle modifiche e approvvigionamento possono allungare il percorso dalla causa alla correzione, perciò l'orologio del tempo alla correzione dovrebbe mostrare dove si trova il ritardo: indagine, approvazione, approvvigionamento o pianificazione. I rischi accettati richiedono responsabili e date di revisione registrati che reggano a un audit. Le regole di conservazione e di privacy si applicano ai record di incidente e di problema, in particolare dove vi compaiano dati clinici o di cittadini.

## Business case: motivazioni, ROI e TCO

Il costo ha tre componenti. La prima è il tempo di indagine: persone con le competenze e l'accesso per analizzare gli incidenti, che compete con il loro altro lavoro. La seconda è la correzione stessa, consegnata attraverso il backlog e il processo delle modifiche. La terza è il costo di registrazione e rendicontazione: collegare gli incidenti, mantenere le tassonomie, condurre la revisione degli schemi e mantenere il database degli errori noti. Questi costi sono perlopiù tempo delle persone, quindi si contino le ore.

Il ritorno si manifesta negli incidenti che smettono di ripetersi, in meno chiamate e meno sforzo manuale di workaround, in una gestione degli incidenti più breve perché chi risponde trova gli errori noti e in meno escalation verso gli ingegneri. Non esiste una cifra universale, quindi si stimi la propria. Per un incidente ricorrente, si moltiplichino le occorrenze all'anno per lo sforzo medio di gestione e per una stima dell'impatto sul business per occorrenza, quindi si confronti il risultato con lo sforzo di correggerlo. Si riveda la stima con il responsabile del servizio, la si dichiari come stima e la si riveda dopo che la finestra di ricorrenza ha mostrato che cosa è accaduto. La gestione dei problemi si ripaga meglio sulle poche cause che producono la maggior parte del carico di incidenti, che la vista di Pareto individua rapidamente.

## Anti-pattern e insidie

- **Chiudere come obiettivo.** Un obiettivo sui problemi chiusi premia i record banali e la chiusura anticipata. Si riportino prima le misure di esito e si mostri la composizione dei codici di chiusura.
- **I record dei problemi come cimitero.** I record restano aperti senza responsabile, data o decisione. Si riveda a cadenza regolare l'elenco dei più vecchi e si richieda una decisione per ciascun elemento.
- **Fermarsi a «errore umano».** Indica chi ha toccato il sistema e non perché il sistema abbia permesso il fallimento. Si accetti una causa solo quando indica una condizione che può essere cambiata.
- **Non correggere nulla finché la causa radice non è certa.** I fallimenti complessi possono non avere una causa unica. Si applichino un workaround e la correzione meglio supportata, quindi si osservi la ricorrenza.
- **Workaround senza uscita.** Un workaround senza una data di revisione diventa permanente. Si registrino un responsabile e una data quando viene creato l'errore noto.
- **Collegamenti deboli tra incidenti.** Collegamenti mancanti o approssimativi rendono invisibile la ricorrenza. Si faccia del collegamento una parte della chiusura dell'incidente e si campionino i collegamenti.
- **Lavoro sui problemi fuori dal backlog.** Le correzioni che vivono in una coda separata attendono per sempre. Si metta l'elemento di correzione sulla board del team responsabile e gli si assegni una priorità rispetto alle funzionalità.
- **Confrontare analisti o team sui record chiusi.** Premia i servizi facili e invita alla manipolazione. Si confrontino i servizi nel tempo rispetto alla propria storia e si leggano le coorti.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Identificazione dei problemi e collegamento | Problemi aperti solo dopo grandi interruzioni; nessun collegamento agli incidenti | Alcuni team collegano gli incidenti; le categorie differiscono da team a team | Tassonomia e codici di chiusura condivisi; collegamento fatto alla chiusura dell'incidente | Tasso di collegamento e qualità delle corrispondenze campionati e rivisti | Schemi rilevati tra team e fornitori, con errori noti condivisi |
| Causa radice ed errori noti | Causa registrata in testo libero, se mai | Errori noti tenuti da alcuni team in luoghi diversi | Un unico database degli errori noti; revisione delle cause da parte di una seconda persona | Tempo alla causa radice e riuso degli errori noti analizzati nel tempo e usati per agire | Chi risponde, i fornitori e i clienti contribuiscono alle voci condivise e le usano |
| Consegna delle correzioni | Le correzioni avvengono quando qualcuno ha tempo | Correzioni tracciate nell'elenco del singolo team | Correzione collegata a un elemento di backlog o a una modifica con responsabile e data | Tempo alla correzione definitiva rivisto, con capacità riservata | Priorità delle correzioni definita congiuntamente con le roadmap di prodotto e dei fornitori |
| Esito e apprendimento | Conteggi dei record riportati | Anzianità del backlog riportata in alcune revisioni | Ricorrenza dopo la correzione e quota di soli workaround riportate con le definizioni | Coorti abbinate a contromisure e usate nelle decisioni di finanziamento | Definizioni riviste quando smettono di informare le decisioni; routine di miglioramento |

## Checklist

- [ ] Il registro delle metriche definisce un problema, un errore noto e ciascun codice di chiusura.
- [ ] La chiusura dell'incidente include un collegamento a un problema, a un errore noto o a «nessuno trovato».
- [ ] Esiste una tassonomia di cause e sintomi, con definizioni ed esempi.
- [ ] Ogni problema ha un responsabile, un innesco e una data di decisione.
- [ ] Il tempo alla causa radice e il tempo alla correzione definitiva sono misurati separatamente, con percentili.
- [ ] Ogni correzione definitiva è collegata a un elemento di backlog o a una modifica con un responsabile.
- [ ] Ogni workaround ha un responsabile e una data di revisione.
- [ ] La ricorrenza dopo la correzione è monitorata per coorte trimestrale con una finestra dichiarata.
- [ ] Il riuso degli errori noti è misurato dove lavorano i risponditori.
- [ ] I problemi aperti più vecchi sono rivisti a cadenza regolare e ogni decisione è registrata.
- [ ] Un campione di record chiusi viene letto ogni trimestre per verificare codici di chiusura e cause.
- [ ] I report descrivono servizi e team, e nessuna tabella classifica individui.

## Prompt IA

**Trovare problemi candidati in un insieme di incidenti.**

```text
Ecco un'esportazione di incidenti per [servizio o team] dal [data di inizio] al
[data di fine]: [incollare campi dell'incidente come id, ora di apertura,
categoria, descrizione breve, nota di risoluzione]. Raggruppi gli incidenti che
possono condividere una causa sottostante, spieghi le evidenze per ciascun
gruppo e ordini i gruppi per numero di occorrenze e per [misura dell'impatto,
per esempio ore di impatto sugli utenti]. Segnali i gruppi in cui le evidenze
sono deboli. Non inventi cause, conteggi né valori di benchmark. Elenchi le sue
ipotesi e i dati aggiuntivi che aumenterebbero la sua fiducia.
```

**Rivedere i codici di chiusura e i record dei problemi.**

```text
Di seguito [numero] record di problemi chiusi per [servizio o team]: [incollare
id, codice di chiusura, causa registrata, riferimento della correzione, data di
chiusura]. Verifichi per ciascun record la presenza di un codice di chiusura
che non corrisponde al testo, di una causa che nomina una persona anziché una
condizione e di una correzione priva di collegamento. Riassuma gli schemi e
suggerisca tre domande per chi effettua la revisione. Non classifichi le
persone né inventi fatti sui record. Elenchi le sue ipotesi.
```

**Progettare una misura di ricorrenza.**

```text
Vogliamo misurare se i problemi corretti restano corretti per [servizio o
team]. I nostri strumenti sono [strumento ITSM, strumento di distribuzione], le
nostre categorie di incidente sono [elenco] e i nostri codici di chiusura sono
[elenco]. Proponga una definizione, una formula, l'avvio e l'arresto
dell'orologio, una regola di corrispondenza dei sintomi, una finestra di
ricorrenza e le esclusioni, con un layout di grafico che mostri le coorti
trimestrali. Suggerisca come potrebbe essere manipolata e una contromisura per
ciascun caso. Mi chieda le soglie di cui ha bisogno invece di inventarle.
Elenchi le sue ipotesi.
```

**Preparare una revisione decisionale dei problemi datati.**

```text
Ecco i problemi aperti da più di [numero] giorni per [servizio o team]:
[incollare id, anzianità, priorità, responsabile, ultimo aggiornamento, stato
del workaround]. Rediga un'agenda per una revisione di [durata] minuti in cui
ogni elemento riceve una di tre decisioni: correggere con una data, accettare il
rischio con un responsabile nominato e una data di revisione, oppure chiudere
con una motivazione. Suggerisca le evidenze da portare per ciascuna decisione.
Non inventi costi né esiti. Elenchi le sue ipotesi e le domande a cui dovrei
rispondere per prime.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare gli argomenti che definiscono le misure di incidenti, modifiche e conoscenza da cui dipendono le metriche dei problemi, e la contromisura da abbinare a ciascuna.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una metrica di problema nuova o modificata dichiari i propri orologi, le esclusioni, il vettore di manipolazione e la contromisura.

## Punti chiave

- La misura della gestione dei problemi è la ricorrenza: se gli incidenti collegati a un problema smettono di tornare.
- Si cronometrino separatamente le fasi, dal record alla causa registrata e dalla causa alla correzione in esecuzione in produzione.
- Si colleghino gli incidenti ai problemi alla chiusura, si concordi come abbinare i sintomi e si campionino i collegamenti.
- Un workaround è una tappa con un responsabile e una data di revisione, e la quota di soli workaround mostra quanto rischio si sta sostenendo.
- Si mettano le correzioni definitive nel backlog del team responsabile e si riportino le misure di esito prima dei conteggi dei record.
- Si descrivano servizi, coorti e decisioni. Non si classifichino mai analisti o team per problemi chiusi.

## Riferimenti e letture di approfondimento

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Ohno, T., *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Known error database](https://en.wikipedia.org/wiki/Known_error_database).
10. Wikipedia, [Workaround](https://en.wikipedia.org/wiki/Workaround).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
13. Wikipedia, [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram).
14. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
15. Wikipedia, [Backlog](https://en.wikipedia.org/wiki/Backlog).
16. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
