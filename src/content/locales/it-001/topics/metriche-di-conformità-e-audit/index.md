# Metriche di conformità e audit

**La conformità è più semplice e più onesta quando le evidenze sono prodotte dal lavoro stesso: misurate quante evidenze arrivano in modo automatico, con quale rapidità i rilievi vengono corretti e con che frequenza lo stesso rilievo ritorna, e trattate gli auditor come parti interessate che entrano nella conversazione fin dall'inizio.**

## Panoramica e motivazione

La maggior parte delle organizzazioni che costruiscono e gestiscono servizi IT risponde a qualcuno: autorità di regolamentazione, clienti, organismi di certificazione, assicuratori, consigli di amministrazione. La [conformità normativa](https://en.wikipedia.org/wiki/Regulatory_compliance) è l'atto di adeguarsi a leggi, regole e standard e di dimostrare di farlo. Un audit è un esame sistematico di evidenze per giudicare se ciò sia vero. Nell'IT ciò comprende gli audit dei controlli sulla rendicontazione finanziaria, degli obblighi di protezione dei dati, delle certificazioni di sicurezza e degli impegni contrattuali. L'[audit informatico](https://en.wikipedia.org/wiki/Information_technology_audit) esamina i controlli che circondano i sistemi e i dati che essi contengono.

Conformità e consegna continua hanno fama di generare attrito. La conformità chiede documenti, firme e approvazioni prima della modifica, mentre la consegna continua favorisce modifiche piccole rilasciate in modo continuo. L'attrito è reale quando la conformità è trattata come una fase finale. Si attenua quando la conformità è incorporata nel flusso di lavoro. Registrazioni delle modifiche, revisioni del codice, test automatizzati e log di accesso sono evidenze, e una pipeline di consegna le produce ogni giorno. L'[audit continuo](https://en.wikipedia.org/wiki/Continuous_auditing) utilizza controlli automatizzati, quasi in tempo reale, anziché campioni periodici, e corrisponde alla cadenza della consegna continua. Una [traccia di audit](https://en.wikipedia.org/wiki/Audit_trail) è una registrazione che mostra chi ha fatto che cosa, quando e su quale sistema, ed è spesso l'evidenza più forte di cui si dispone.

ITIL descrive le pratiche pertinenti: gestione della sicurezza delle informazioni, gestione del rischio e governance del sistema di valore del servizio, e rimanda a standard come [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) per i sistemi di gestione della sicurezza delle informazioni. I quadri che le organizzazioni affrontano comunemente comprendono regimi di rendicontazione dei controlli finanziari, come il [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act) negli Stati Uniti, leggi sulla protezione dei dati come il [Regolamento generale sulla protezione dei dati](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) nell'Unione europea e rapporti di assurance come [SOC 2](https://en.wikipedia.org/wiki/SOC_2), che esaminano i controlli rilevanti per la sicurezza e i criteri correlati. I dettagli differiscono per giurisdizione, settore e data, e questo argomento descrive la pratica di misurazione, non i requisiti di legge. Si rivolga ai colleghi di conformità, di ufficio legale e di audit per sapere che cosa si applica al Suo caso.

Lo scopo delle metriche di conformità è capire quanto bene l'organizzazione rispetti i propri obblighi e quanto impegno ciò richieda, in modo che entrambi possano migliorare. Il rischio è che la conformità diventi una recita per l'auditor. Un team può superare un audit producendo documenti all'ultimo momento e continuare ad adottare pratiche rischiose. Si applica la salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): quando i «rilievi di audit» sono un obiettivo, le persone evitano il controllo, restringono il perimetro e negoziano la formulazione (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

Due linee di pensiero aiutano.

- **La conformità come sottoprodotto.** Se la pipeline registra automaticamente revisione, test, approvazione e distribuzione, le evidenze esistono che un audit sia vicino o no. Ciò elimina anche la tentazione di ricostruire le evidenze a posteriori.
- **Gli auditor come parti interessate.** La pratica agile valorizza la collaborazione continua con le parti interessate. Auditor e valutatori sono parti interessate con domande legittime. Coinvolgerli nella progettazione dei controlli e delle evidenze riduce sorprese e rilavorazioni, preservandone l'indipendenza.

## Principi chiave

- **Produrre evidenze come sottoprodotto del lavoro.** Pipeline, ticket e log dovrebbero rispondere alla maggior parte delle domande di audit.
- **Mappare gli obblighi su controlli e responsabili.** Ogni obbligo ha un controllo e ogni controllo ha un responsabile.
- **Collaborare presto con gli auditor.** Condividere progetti e approcci alle evidenze prima dell'audit, preservandone l'indipendenza.
- **Correggere le cause, non i rilievi.** Un rilievo chiuso senza rimuovere la causa ritorna.
- **Misurare l'impegno oltre all'esito.** Il costo della conformità fa parte del quadro.
- **Mantenere la separazione dei compiti dove conta.** L'indipendenza della revisione è un controllo che l'automazione può sostenere ma non sostituire.
- **Essere onesti sulle lacune.** I punti deboli dichiarati da sé è meglio trovarli Lei che altri.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Copertura degli obblighi | Quota di obblighi applicabili mappati su un controllo con un responsabile e una fonte di evidenza | obblighi mappati su almeno un controllo con responsabile e fonte di evidenza / obblighi applicabili | percentuale | Registro degli obblighi e registro dei controlli | Governance; gestione della sicurezza delle informazioni; gestione del rischio | La definizione di completato include le evidenze del controllo | Trimestrale |
| Tasso di automazione delle evidenze | Quota di evidenze dei controlli nel perimetro raccolte automaticamente dai sistemi di registrazione | evidenze di controllo raccolte automaticamente / evidenze richieste | percentuale | Registro dei controlli, pipeline e log di sistema | Gestione della sicurezza delle informazioni; abilitazione delle modifiche | La pipeline registra automaticamente revisione, test e distribuzione | Trimestrale |
| Tempo di fornitura delle evidenze | Tempo per fornire le evidenze richieste da un auditor o da un valutatore | mediana e 85º percentile dei giorni dalla richiesta all'evidenza accettata | giorni | Tracciatore delle richieste di audit | Governance; gestione della sicurezza delle informazioni | Prontezza di risposta a una domanda di una parte interessata | Per audit |
| Tempo di chiusura dei rilievi | Tempo per chiudere i rilievi di audit per gravità | mediana e 85º percentile dei giorni dall'emissione del rilievo alla chiusura verificata | giorni | Tracciatore dei rilievi | Miglioramento continuo; gestione del rischio | Tempo per correggere un difetto | Mensile |
| Tasso di rilievi ripetuti | Quota di rilievi che si ripresentano da un audit o da una revisione precedente | rilievi corrispondenti nella sostanza a un rilievo chiuso in precedenza / rilievi nel periodo | percentuale | Tracciatore dei rilievi con collegamenti alle cause | Miglioramento continuo; gestione dei problemi | Difetto ricorrente dopo una correzione | Per ciclo di audit |
| Conflitti di separazione dei compiti | Numero di combinazioni di accesso o approvazione che violano le regole di separazione e tempo per risolverle | conflitti rilevati; giorni mediani per risolvere | conteggio; giorni | Strumenti di gestione di identità e accessi, registrazioni delle modifiche | Gestione della sicurezza delle informazioni; abilitazione delle modifiche | Revisione indipendente delle modifiche | Mensile |
| Impegno di audit | Ore-persona che l'organizzazione impiega per preparare e sostenere un ciclo di audit, per unità di perimetro | ore registrate per preparazione e supporto all'audit / controlli o sistemi nel perimetro | ore per unità | Registrazioni dei tempi o stime dell'impegno | Governance; miglioramento continuo | Costo del lavoro non di consegna | Per ciclo di audit |

Indichi nel registro gli obblighi nel perimetro e il perimetro dell'audit. Il tempo di chiusura parte quando il rilievo è emesso e si ferma quando l'auditor o un verificatore indipendente conferma la chiusura, non quando il team dichiara di aver finito. I rilievi ripetuti sono abbinati per causa, non per formulazione, e la regola di abbinamento è registrata. L'impegno di audit è una misura di tendenza per l'organizzazione e mai una misura delle singole persone.

## Raccomandazioni

### Conoscere i propri obblighi e controlli

**1. Elencare in linguaggio semplice gli obblighi che si applicano.** Insieme ai colleghi dell'ufficio legale e della conformità, elenchi le leggi, gli standard, i contratti e le politiche che vincolano il servizio e che cosa ciascuno richieda in termini di risultati. Mantenga l'elenco breve e leggibile. Gli obblighi che nessuno sa enunciare con chiarezza sono quelli che causano sorprese negli audit.

**2. Mappare ogni obbligo su controlli, responsabili ed evidenze.** Per ogni obbligo, indichi il controllo che lo soddisfa, la persona responsabile e l'evidenza che mostra che il controllo funziona. Dove un controllo soddisfa più obblighi, lo dica, perché ciò riduce la duplicazione di sforzi. La copertura degli obblighi misura la completezza di questa mappa. Gli obblighi non mappati sono lacune da colmare o da accettare consapevolmente.

**3. Preferire controlli meno numerosi e più solidi.** Un controllo automatizzato e testato vale quanto diversi controlli manuali. Cerchi i controlli che si sovrappongono e dismetta quelli che non servono alcun obbligo. Ogni controllo costa impegno per essere eseguito e documentato (si veda l'Argomento 8.2 «Metriche di rischio e controlli»).

### Fare delle evidenze un sottoprodotto

**4. Lasciare che sia la pipeline a produrre le evidenze.** Colleghi ogni modifica in produzione a una richiesta, a una revisione del codice, ai risultati dei test e a un'approvazione dove richiesta, il tutto registrato automaticamente. Una registrazione di distribuzione che mostra questi elementi dice all'auditor che cosa è accaduto senza che sia scritto un documento. Ciò si basa sulle pratiche di consegna continua che i team agili già usano (si veda l'Argomento 4.5 «Metriche di rilascio e distribuzione»).

**5. Utilizzare verifiche di policy nella pipeline.** Codifichi le regole, come «nessuna distribuzione senza una revisione da parte di qualcuno diverso dall'autore» o «nessun accesso alla produzione senza un ticket», come controlli automatizzati. Il controllo è insieme un presidio e la sua evidenza. Mantenga le regole visibili e versionate, in modo che anche le loro modifiche siano registrate. Ciò sostiene la [separazione dei compiti](https://en.wikipedia.org/wiki/Segregation_of_duties), il principio secondo cui nessuna singola persona dovrebbe controllare tutte le fasi di un processo sensibile.

**6. Conservare correttamente le tracce di audit.** Conservi i log di accesso e di modifica in modo che non possano essere alterati dalle persone che descrivono, li mantenga per il periodo richiesto e li renda ricercabili. Una traccia modificabile da chi vi è registrato è un'evidenza debole. Verifichi le regole di conservazione con i colleghi dell'ufficio legale.

**7. Misurare quanta parte delle evidenze è automatica.** Il tasso di automazione delle evidenze mostra dove rimane la raccolta manuale. Ordini gli elementi manuali per impegno e rischio e automatizzi per primi i peggiori. Man mano che il tasso sale, l'impegno di audit e il tempo di risposta diminuiscono.

### Collaborare con gli auditor

**8. Invitare gli auditor nella progettazione.** Condivida per tempo con l'audit interno e con i valutatori esterni le modifiche pianificate ai controlli e alle evidenze, e chieda che cosa li soddisferebbe. Indipendenza significa che non progettano i Suoi controlli, non che non possano dirLe di quali evidenze avranno bisogno. Le conversazioni precoci riducono le rilavorazioni. L'Institute of Internal Auditors pubblica standard per la professione che spiegano il ruolo dell'[audit interno](https://en.wikipedia.org/wiki/Internal_audit).

**9. Preparare un indice delle evidenze.** Mantenga un indice vivo di dove si trova ciascun tipo di evidenza e di come recuperarla. Tenga traccia del tempo di risposta alle richieste di evidenze e usi i ritardi per individuare le automazioni mancanti. Un processo breve e costante vale più di una corsa prima di ogni audit.

**10. Concordare il significato di rilevanza e di perimetro.** Chieda agli auditor come giudicano ciò che conta e che cosa rientra nel perimetro, e registri la risposta. Una comprensione condivisa previene dispute in seguito. Non restringa il perimetro per evitare il controllo e non lo allarghi senza motivo.

### Correggere le cause e imparare

**11. Trattare ogni rilievo come una registrazione di problema.** Trovi la causa, la corregga e faccia verificare la chiusura da qualcuno di indipendente. Colleghi i rilievi ripetuti ai precedenti ed esamini perché la prima correzione non abbia retto. Un alto tasso di rilievi ripetuti indica correzioni che hanno trattato i sintomi, il che si collega alla gestione dei problemi (si veda l'Argomento 4.1 «Metriche di gestione dei problemi»).

**12. Monitorare il costo e ridurlo.** Registri l'impegno di audit nel corso dei cicli. Se l'impegno è alto e costante, cerchi duplicazioni tra gli audit, raccolta manuale delle evidenze e controlli che non servono a nessuno. Riporti la tendenza dell'impegno insieme agli esiti. La conformità vale il suo costo quando riduce un rischio reale, e le metriche aiutano a capirlo.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Copertura degli obblighi | Mappare gli obblighi su controlli deboli o irrilevanti; definire gli obblighi in modo restrittivo | Revisione della pertinenza dei controlli da parte di una seconda parte; test dei controlli (si veda l'Argomento 8.2 «Metriche di rischio e controlli») |
| Tasso di automazione delle evidenze | Contare schermate o esportazioni come automatiche; automatizzare per prime le evidenze di scarso valore | Definire automatico come generato dal sistema e resistente alle manomissioni; ordinare per rischio |
| Tempo di fornitura delle evidenze | Fornire rapidamente evidenze parziali; negoziare la formulazione della richiesta | Contare solo le evidenze accettate; monitorare le richieste di approfondimento |
| Tempo di chiusura dei rilievi | Chiudere i rilievi senza verifica; riclassificare la gravità | Verifica indipendente; registro delle modifiche di gravità |
| Tasso di rilievi ripetuti | Riformulare i rilievi perché non corrispondano; chiudere il rilievo precedente come tipo diverso | Abbinamento per causa con una regola registrata; revisione da parte dell'audit interno |
| Conflitti di separazione dei compiti | Spostare i conflitti su sistemi fuori perimetro; concedere accessi temporanei mai registrati | Coprire tutti i sistemi con processi sensibili; rivedere gli accessi temporanei |
| Impegno di audit | Non registrare le ore; spostare l'impegno su altri budget | Campionamento delle registrazioni dei tempi; confronto con i sondaggi sui team |

Una lettura sana comprende un'automazione delle evidenze in crescita, tempi di risposta più brevi e più stabili, rilievi chiusi con verifica, un basso tasso di ripetizione e un impegno di audit che diminuisce con la maturazione del processo.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Evidenze manuali periodiche | Familiari agli auditor | Costose; ricostruite a posteriori |
| Evidenze continue automatizzate | Economiche da mantenere; tempestive | Richiedono ingegneria; gli auditor devono fidarsi della fonte |
| Approvazioni pesanti | Controllo visibile | Lente; raggruppano le modifiche |
| Verifiche di policy automatizzate | Coerenti e rapide | Le regole devono essere giuste e visibili |
| Coinvolgimento precoce degli auditor | Meno sorprese | Richiede attenzione per preservare l'indipendenza |
| Audit alla fine | Separazione chiara | Rilievi tardivi; rilavorazioni |
| Un controllo per molti obblighi | Efficiente | Un singolo fallimento colpisce più obblighi |
| Molti controlli specifici | Mappatura chiara | Sforzo duplicato |

La risposta in sintesi è automatizzare le evidenze a partire dalla pipeline e dai sistemi di registrazione, coinvolgere presto gli auditor sulla progettazione mantenendone l'indipendenza e conservare un insieme snello di controlli solidi mappati sugli obblighi.

## Domande da discutere con il team

**1. Quale domanda di audit ci richiede più tempo per rispondere e perché?**
Scelga la richiesta di evidenze più lenta dell'ultimo audit e la ripercorra. L'evidenza manca, è dispersa o è nella testa di qualcuno? Discutete che cosa la renderebbe automatica. Il facilitatore dovrebbe annotare il costo in ore.

**2. Possiamo mostrare, per qualsiasi modifica in produzione dell'ultimo mese, chi l'ha rivista e quali test sono stati eseguiti?**
Scelga una modifica a caso e provi. Annoti dove la catena si spezza. Concordate un miglioramento alla registrazione della modifica o alla pipeline che colmi la lacuna.

**3. Che cosa abbiamo promesso all'ultimo audit e ha retto?**
Rivedete i rilievi e le correzioni. Per ciascuno, chieda se la causa sia stata rimossa e chi abbia verificato la chiusura. Cerchi le ripetizioni. Concordate un rilievo da esaminare più a fondo.

**4. Che cosa ci direbbero gli auditor se chiedessimo loro come rendere più semplici le evidenze?**
Pianifichi una conversazione con l'audit interno o con un valutatore sulla progettazione delle evidenze. Chieda di che cosa si fidano e di che cosa no. Il facilitatore dovrebbe trattare le loro risposte come informazioni e tenere presenti le regole di indipendenza.

**5. Quali controlli eseguiamo che nessun obbligo richiede?**
Elenchi i controlli e gli obblighi che servono. Trovi quelli senza uno scopo chiaro. Discutete della loro dismissione e delle evidenze che dimostrano che non sono necessari.

**6. Dove potrebbe una sola persona compiere qui un'operazione sensibile dall'inizio alla fine?**
Pensi a distribuzione, concessione di accessi e pagamenti. Verifichi se gli strumenti impongano la separazione o solo la policy. Discutete di controlli compensativi, come la revisione automatizzata, dove il personale è poco numeroso.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna producono gran parte delle evidenze svolgendo bene il proprio lavoro. Dovrebbero mantenere collegate le registrazioni di modifiche, revisioni e test, usare le verifiche di policy della pipeline e sollevare perplessità sui controlli che rallentano il lavoro senza ridurre il rischio. Traggono vantaggio da conversazioni precoci con gli auditor su quali evidenze siano sufficienti.

### Team di servizio e operations

I team di operazioni gestiscono la gestione degli accessi, il logging, i backup e la gestione degli incidenti, che sono centrali in molti audit. Dovrebbero mantenere i log resistenti alle manomissioni e conservati, gestire le revisioni degli accessi nei tempi previsti e mantenere l'indice delle evidenze. Sopportano il peso delle evidenze manuali e possono indicare dove l'automazione aiuterebbe di più.

### Leadership e governance

I dirigenti sono responsabili della conformità e spesso degli esiti degli audit. Dovrebbero finanziare l'automazione delle evidenze, chiedere copertura e tassi di rilievi ripetuti anziché il solo numero di rilievi e sostenere l'indipendenza degli auditor. La governance dovrebbe attendersi rapporti onesti sulle lacune e un piano per ciascuna.

### Clienti e utenti

Clienti e utenti si affidano alla conformità come garanzia sul modo in cui i loro dati e servizi sono trattati. Traggono vantaggio quando i rapporti di assurance sono chiari, quando gli incidenti sono segnalati come richiesto e quando i controlli non rendono l'uso legittimo più difficile del necessario. Una comunicazione trasparente sulla conformità costruisce fiducia.

## In pratica: un esempio di ITIL agile

Un'azienda di pagamenti di medie dimensioni gestisce una piattaforma di elaborazione delle carte ed è valutata ogni anno rispetto a un quadro di assurance sulla sicurezza e a un regime di protezione dei dati. I numeri seguenti sono illustrativi.

La preparazione all'audit impegna i team di ingegneria per circa sei settimane ogni anno. La valutazione dell'anno scorso si è chiusa con 14 rilievi, di cui 5 ripetuti dall'anno precedente. La responsabile della conformità mappa la situazione. La copertura degli obblighi è dell'83 percento, e il 17 percento degli obblighi non ha un responsabile del controllo nominato. L'automazione delle evidenze è del 22 percento, e la maggior parte delle evidenze per l'approvazione delle modifiche proviene da schermate di ticket raccolte a mano. Il tempo mediano di fornitura delle evidenze è di 9 giorni, con un 85º percentile di 21 giorni. Il tempo mediano di chiusura dei rilievi è di 74 giorni, e la chiusura era spesso dichiarata dal team responsabile senza verifica.

La responsabile della conformità lavora con i team di consegna e di operazioni e con l'auditor interno. Cambiano quattro cose. Ogni modifica in produzione nella pipeline si collega ora alla richiesta, alla revisione del codice da parte di una persona diversa dall'autore, ai risultati dei test e alla distribuzione, registrati automaticamente nella registrazione della modifica. Una verifica di policy blocca una distribuzione priva di revisione indipendente e registra il percorso di eccezione per le emergenze. Le revisioni degli accessi si svolgono trimestralmente a partire dal sistema di identità, che mostra direttamente i conflitti di separazione dei compiti. Ogni rilievo diventa una registrazione di problema, con un verificatore indipendente dell'audit interno, e i rilievi ripetuti sono collegati ai loro predecessori.

Alla valutazione successiva, il tasso di automazione delle evidenze è del 71 percento, il tempo mediano di fornitura delle evidenze è di 2 giorni, l'85º percentile è di 5 giorni e la preparazione all'audit richiede circa due settimane. La copertura degli obblighi è del 97 percento, e gli elementi restanti hanno un'accettazione documentata. I rilievi scendono a 6, con una ripetizione, e il tempo mediano di chiusura è di 31 giorni con verifica indipendente. L'amministratore delegato chiede zero rilievi per l'anno prossimo. La responsabile della conformità propone invece di monitorare i rilievi ripetuti, il tempo di chiusura e l'automazione delle evidenze, spiegando che un obiettivo di zero rilievi spinge i team a nascondere i problemi o a restringere il perimetro, e che un valutatore che non trova nulla potrebbe non aver cercato abbastanza. La decisione viene registrata e il consiglio concorda di rivedere le misure alla riunione successiva.

## Lente di settore

**Startup.** Gli obblighi possono arrivare all'improvviso con un grande cliente o un round di finanziamento. Costruisca presto le abitudini: revisione tra pari, registrazioni delle modifiche e controllo degli accessi nella pipeline, in modo che le evidenze esistano quando vengono richieste. Scelga un quadro di riferimento quando l'attività lo richiede e lo mappi su ciò che già fa.

**Piccola impresa.** Gli obblighi di conformità sono spesso fissati da contratti e leggi, e le risorse sono limitate. Mantenga un breve elenco di obblighi, si affidi a servizi gestiti con propri rapporti di assurance e conservi una semplice cartella delle evidenze. Diffidi dall'acquistare strumenti di conformità che costano più del rischio che affrontano.

**Grande impresa.** Molti obblighi si sovrappongono, quindi un quadro unificato dei controlli che mappa un controllo su molti obblighi fa risparmiare un grande impegno. Utilizzi fonti di evidenza comuni, un tracciatore dei rilievi condiviso e un calendario degli audit per evitare richieste ripetute. Coordini audit interno, conformità e sicurezza in modo che i team non siano esaminati tre volte per la stessa cosa.

**Governo e settore pubblico.** Gli obblighi di conformità sono estesi e pubblici, e comprendono regole su appalti, archivi, accessibilità e protezione dei dati, con audit da parte di organismi nazionali. Documenti decisioni ed evidenze per il periodo richiesto, renda i rapporti coerenti tra le amministrazioni dove possibile e mantenga una linea chiara tra audit indipendente e direzione. Gli obblighi possono cambiare con le elezioni e con la legislazione (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi comprendono gli strumenti per il registro dei controlli, l'integrazione della pipeline per le evidenze, i sistemi di identità e di logging e il tempo del personale di conformità e dei team. L'impegno iniziale per automatizzare le evidenze è significativo e sostituisce un lavoro manuale ricorrente.

I ritorni sono un minore impegno di audit ricorrente, risposte più rapide alle richieste, meno rilievi ripetuti e una visione più onesta dello stato di salute dei controlli. Comprendono anche il costo evitato di sorprese tardive in un ciclo di certificazione. Costruisca il caso a partire dai Suoi numeri: ore di preparazione all'audit prima e dopo, tempo di fornitura delle evidenze, numero ed età dei rilievi e costo di eventuali ritardi legati all'audit in una trattativa commerciale. Eviti di citare studi sul costo della conformità a meno che non possa risalire al loro metodo e alla loro pertinenza. Conti il costo del programma e il rischio di un'eccessiva automazione di controlli deboli. Il trattamento finanziario più ampio compare nell'ultimo argomento della parte precedente (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Prepararsi all'audit nell'ultimo mese.** Produce evidenze ricostruite e una corsa affannosa. Registri le evidenze mentre il lavoro avviene.
- **Schermate come evidenze.** Sono manuali, facili da alterare e costose. Utilizzi registrazioni generate dal sistema.
- **Puntare a zero rilievi.** Premia il perimetro ristretto e i problemi nascosti. Monitori chiusura, ripetizioni e copertura.
- **Chiudere i rilievi per dichiarazione.** Lo stesso rilievo ritorna. Verifichi la chiusura in modo indipendente.
- **Trattare gli auditor come avversari.** Aumenta il costo da entrambe le parti. Collabori sulla progettazione delle evidenze preservando l'indipendenza.
- **Controlli che non servono alcun obbligo.** Costano impegno e alimentano il cinismo. Li dismetta.
- **Automatizzare un controllo scadente.** Produce su larga scala evidenze di un controllo debole. Testi prima il controllo.
- **Separazione dei compiti manuale.** Si affida alla memoria. La imponga negli strumenti e riveda le eccezioni.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Obblighi e controlli | Noti a poche persone | Elenco di obblighi e controlli | Mappati su controlli, responsabili e fonti di evidenza | Copertura monitorata; sovrapposizioni ridotte; controlli testati | Quadro unificato dei controlli tra team, fornitori e regimi |
| Evidenze | Compilate prima degli audit | Modelli standard e una cartella delle evidenze | Pipeline e sistemi di registrazione producono gran parte delle evidenze | Tasso di automazione, tempo di fornitura e impegno gestiti | Assurance continua con auditor che consumano direttamente le evidenze |
| Rilievi e apprendimento | Rilievi contestati e chiusi per dichiarazione | Rilievi monitorati | Rilievi trattati come registrazioni di problema con verifica indipendente | Ripetizioni e tempo di chiusura analizzati e riportati nella progettazione dei controlli | Rilievi condivisi nell'organizzazione e con i partner; il miglioramento è routine |

## Checklist

- [ ] Gli obblighi applicabili sono elencati in linguaggio semplice, con i responsabili.
- [ ] Ogni obbligo è mappato su controlli e su una fonte di evidenza.
- [ ] Le modifiche in produzione portano automaticamente evidenze collegate di richiesta, revisione, test e distribuzione.
- [ ] Le verifiche di policy impongono nella pipeline revisione e separazione dei compiti.
- [ ] Le tracce di audit sono resistenti alle manomissioni e conservate per il periodo richiesto.
- [ ] Esiste un indice delle evidenze e il tempo di risposta alle richieste è misurato.
- [ ] Gli auditor sono consultati sulla progettazione delle evidenze preservandone l'indipendenza.
- [ ] I rilievi sono registrati come registrazioni di problema e chiusi con verifica indipendente.
- [ ] I rilievi ripetuti sono collegati ai loro predecessori ed esaminati per causa.
- [ ] L'impegno di audit è monitorato come tendenza e rivisto per individuare duplicazioni.

## Prompt IA

**Mappare gli obblighi sui controlli.**

```text
Ecco un elenco di obblighi che si applicano al nostro servizio in [settore e
giurisdizione]: [incollare in linguaggio semplice]. Ecco il nostro elenco di
controlli: [incollare]. Costruisci una tabella che mappi ogni obbligo sui
controlli, sull'evidenza che mostra il funzionamento di ciascun controllo e su un
ruolo responsabile. Segnala gli obblighi senza controllo, i controlli senza
obbligo e le evidenze deboli. Non fornire conclusioni legali. Elenca le tue
ipotesi e le domande per l'ufficio legale e la conformità.
```

**Pianificare l'automazione delle evidenze.**

```text
Le nostre evidenze di audit manuali comprendono: [elencare le voci con le ore
impiegate]. I nostri sistemi di registrazione sono: [elencare gli strumenti].
Ordina le evidenze per impegno e rischio e proponi come ciascuna potrebbe essere
raccolta automaticamente da un sistema di registrazione, che cosa renda
affidabile l'evidenza (resistenza alle manomissioni, completezza) e che cosa
confermare con gli auditor. Non presumere funzionalità di strumenti specifici.
Elenca le tue ipotesi.
```

**Analizzare i rilievi ripetuti.**

```text
Ecco i rilievi degli ultimi [numero] cicli di audit, con cause e correzioni:
[incollare, anonimizzati]. Raggruppa i rilievi per causa di fondo, individua le
ripetizioni e suggerisci perché le correzioni precedenti non hanno retto. Proponi
una regola per abbinare i rilievi per causa e una fase di verifica per la
chiusura. Non speculare oltre le informazioni fornite. Elenca le tue ipotesi.
```

**Preparare una conversazione precoce con gli auditor.**

```text
Redigi un ordine del giorno per una riunione con l'audit interno sul cambiamento
del modo in cui produciamo le evidenze per [controllo o processo]. Includi che
cosa intendiamo cambiare, le domande a cui abbiamo bisogno di risposta
(evidenze accettabili, campionamento, rilevanza), che cosa non chiederemo loro di
fare per preservarne l'indipendenza e come registreremo l'esito. Usa un
linguaggio semplice. Elenca le tue ipotesi e i rischi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di conformità o di audit.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una voce di metrica di conformità riporti il proprio vettore di manipolazione, la salvaguardia e la regola di indipendenza.

## Punti chiave

- Produca le evidenze come sottoprodotto della consegna, a partire da pipeline e sistemi di registrazione, e misuri quanta parte è automatica.
- Mappi ogni obbligo su un controllo, un responsabile e una fonte di evidenza.
- Inviti presto gli auditor nella progettazione delle evidenze e ne protegga l'indipendenza.
- Chiuda i rilievi rimuovendo le cause, verifichi la chiusura in modo indipendente e osservi il tasso di rilievi ripetuti.
- Eviti obiettivi come zero rilievi e monitori l'impegno insieme agli esiti.
- Imponga la separazione dei compiti negli strumenti e mantenga le tracce di audit resistenti alle manomissioni.

## Riferimenti e letture di approfondimento

1. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
2. Institute of Internal Auditors, *Global Internal Audit Standards*, 2024.
3. American Institute of Certified Public Accountants, *Trust Services Criteria* (used in SOC 2 examinations), latest version.
4. Kim, G., Humble, J., Debois, P., and Willis, J., *The DevOps Handbook*, IT Revolution, 2016.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Regulatory compliance](https://en.wikipedia.org/wiki/Regulatory_compliance).
8. Wikipedia, [Information technology audit](https://en.wikipedia.org/wiki/Information_technology_audit).
9. Wikipedia, [Continuous auditing](https://en.wikipedia.org/wiki/Continuous_auditing).
10. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
11. Wikipedia, [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001).
12. Wikipedia, [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act).
13. Wikipedia, [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).
14. Wikipedia, [SOC 2](https://en.wikipedia.org/wiki/SOC_2).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
16. Wikipedia, [Segregation of duties](https://en.wikipedia.org/wiki/Segregation_of_duties).
17. Wikipedia, [Internal audit](https://en.wikipedia.org/wiki/Internal_audit).
