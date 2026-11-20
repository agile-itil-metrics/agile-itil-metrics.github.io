# Metriche degli incidenti maggiori

**Misuri gli incidenti maggiori come eventi rari e costosi da cui imparare, non come una classifica: li conti, ne misuri i tempi con onestà, ne dimensioni l'impatto sui clienti, verifichi che le persone siano state informate e dimostri che le azioni di seguito sono state realizzate.**

## Panoramica e motivazione

Un incidente maggiore è un incidente abbastanza grave da richiedere una risposta che va oltre la normale routine. [ITIL](https://en.wikipedia.org/wiki/ITIL), il framework più noto per l'IT service management, descrive la [gestione degli incidenti](https://en.wikipedia.org/wiki/Incident_management_(ITSM)) come il ripristino del normale funzionamento del servizio il più rapidamente possibile, e prevede che le organizzazioni gestiscano i loro incidenti più gravi attraverso un percorso distinto e più coordinato. Come un'organizzazione traccia quel confine è una sua decisione. Una scelta comune è un incidente che interessa molti utenti o un servizio critico e richiede più team che lavorano insieme sotto un unico coordinatore. Metta per iscritto la Sua definizione, perché ogni metrica di questo argomento ne dipende.

Gli incidenti maggiori sono pochi. Un team può vedere decine di incidenti ordinari a settimana e due o tre incidenti maggiori a trimestre. Questo cambia il modo di misurare. Le statistiche ordinarie di volume e di tempo di risoluzione degli incidenti (si vedano l'Argomento 3.2 «Volume e priorità degli incidenti» e l'Argomento 3.3 «Tempo di risposta e di risoluzione degli incidenti») presuppongono molti eventi e premiano le medie. Con una manciata di incidenti maggiori per periodo, una media è dominata da una sola brutta notte, una linea di tendenza è per lo più rumore e un [percentile](https://en.wikipedia.org/wiki/Percentile) non ha senso su cinque punti dati (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»). L'approccio onesto consiste nel mostrare ogni incidente maggiore come una riga a sé, con la propria cronologia, e nel riassumere solo su finestre più lunghe.

Le visioni agile e ITIL si incontrano qui più direttamente che in qualsiasi altro punto del libro. ITIL contribuisce con la struttura: un incidente maggiore dichiarato, un coordinatore nominato, una comunicazione definita alle parti interessate e una revisione successiva. Le tradizioni [agile](https://en.wikipedia.org/wiki/Agile_software_development) e della [site reliability engineering (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) contribuiscono con le abitudini: un [comandante dell'incidente](https://en.wikipedia.org/wiki/Incident_commander) che dirige la risposta, la revisione senza attribuzione di colpe di ciò che è accaduto e un'attenzione all'apprendimento che alimenta il miglioramento continuo. *Site Reliability Engineering* di Google descrive sia lo schema del comando dell'incidente sia la pratica della revisione postmortem (si vedano i Riferimenti). Un [postmortem](https://en.wikipedia.org/wiki/Postmortem_documentation) in questo senso è un resoconto scritto di un incidente, delle sue cause e delle azioni che ne seguono, e il termine è qui usato in modo intercambiabile con «revisione post-incidente».

Questo argomento affronta cinque domande. Con quale frequenza si verificano gli incidenti maggiori? Quanto durano, e quanta parte di quel tempo trascorre prima che qualcuno ne dichiari uno? Quanti utenti, e quali utenti, lo hanno sentito? Le persone hanno avuto nostre notizie in tempo e con un ritmo regolare? E il seguito promesso c'è stato? Gli argomenti correlati trattano ciò che li circonda: la disponibilità (si veda l'Argomento 5.3 «Metriche di disponibilità»), la qualità della revisione scritta (si veda l'Argomento 4.2 «Metriche di postmortem e apprendimento»), le cause sottostanti (si veda l'Argomento 4.1 «Metriche di gestione dei problemi») e la modifica che spesso li innesca (si veda l'Argomento 4.4 «Fallimenti delle modifiche e rilavorazioni»).

Termini usati in questo argomento:

- **Incidente maggiore:** un incidente che soddisfa i Suoi criteri scritti di dichiarazione e attiva il processo degli incidenti maggiori.
- **Dichiarazione:** il momento in cui qualcuno con autorità invoca formalmente il processo degli incidenti maggiori.
- **Tempo di ripristino:** il tempo dall'inizio dell'impatto sui clienti al momento in cui il servizio è ripristinato per gli utenti. Il momento del ripristino del servizio non coincide con il ritrovamento della [causa radice](https://en.wikipedia.org/wiki/Root_cause_analysis).
- **Comandante dell'incidente:** il ruolo che coordina la risposta, assegna i compiti e decide. È un ruolo per la durata dell'incidente, non un titolo professionale.
- **Revisione post-incidente:** l'esame strutturato e senza attribuzione di colpe di un incidente dopo il ripristino del servizio.
- **Azione:** un cambiamento specifico, con responsabile e scadenza, che deriva da una revisione.

## Principi chiave

- **Mostrare gli eventi, poi riassumere.** Gli eventi rari meritano cronologie individuali. Riportare ciascun incidente maggiore separatamente e usare statistiche di sintesi solo su una finestra lunga, con il conteggio accanto.
- **Far partire il cronometro all'impatto, non alla consapevolezza.** Una durata che inizia quando qualcuno se ne accorge nasconde il ritardo di rilevamento, che è spesso la parte più grande della storia.
- **Misurare l'esperienza dell'utente, non lo sforzo del team.** L'impatto sui clienti è la ragione per cui il processo esiste. Le ore di sforzo di chi risponde sono un costo da tracciare, mai un punteggio.
- **La comunicazione fa parte del ripristino.** Un servizio ripristinato mentre gli utenti ancora tirano a indovinare è stato corretto solo a metà. Trattare la tempestività degli aggiornamenti come una misura della risposta.
- **La revisione non è finita finché non lo sono le azioni.** Un documento completato con azioni aperte non ha cambiato nulla. Misurare il seguito dato, non solo l'esistenza di una revisione.
- **Non classificare mai le persone e non punire mai la dichiarazione.** Se dichiarare un incidente maggiore danneggia in un report il team di chi dichiara, verranno dichiarati meno incidenti e le metriche miglioreranno mentre il servizio peggiora.
- **Mantenere stabili i criteri di dichiarazione.** Spostare la soglia cambia ogni metrica di questo argomento. Registrare ogni modifica con il suo motivo e la sua data.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Numero di incidenti maggiori | Incidenti maggiori dichiarati in un periodo, per servizio | Conteggio degli incidenti che hanno soddisfatto i criteri di dichiarazione e sono stati dichiarati nel periodo, per momento di dichiarazione; gli incidenti declassati entro la prima ora sono elencati separatamente ed esclusi | conteggio per trimestre | Registrazioni degli incidenti dello strumento ITSM con il flag di incidente maggiore | Gestione degli incidenti | Revisione della salute del team o del servizio | Report mensile, tendenza trimestrale |
| Durata dell'incidente maggiore | Tempo in cui i clienti sono stati interessati | Momento di servizio ripristinato meno momento di inizio dell'impatto, per incidente. L'inizio dell'impatto è la prima evidenza nel monitoraggio o la prima segnalazione di un utente, a seconda di quale sia precedente. Il ripristino parziale è registrato come evento a sé, e il ripristino completo ferma il cronometro | minuti, per incidente | Cronologia del monitoraggio, cronologia dell'incidente nello strumento ITSM | Gestione degli incidenti; gestione dei livelli di servizio | Tempo di recupero nelle metriche di consegna (si veda l'Argomento 2.8 «Metriche DORA») | Per incidente; mediana e massimo su finestra lunga ogni trimestre |
| Tempo di dichiarazione | Ritardo tra l'inizio dell'impatto e la dichiarazione di un incidente maggiore | Momento di dichiarazione meno momento di inizio dell'impatto, per incidente. Gli incidenti mai dichiarati sono individuati da una revisione trimestrale degli incidenti ordinari ad alto impatto e sono inclusi con un momento di dichiarazione n/d (mai dichiarato) | minuti, per incidente | Cronologia del monitoraggio, traccia di audit dello strumento ITSM | Gestione degli incidenti; monitoraggio e gestione degli eventi | Definizione di pronto per l'escalation negli accordi di lavoro del team | Per incidente |
| Impatto sui clienti | Quanti utenti e quanto utilizzo sono stati interessati | Utenti interessati (o richieste fallite) moltiplicati per i minuti interessati, per incidente. Contare solo gli utenti che hanno tentato di usare il servizio durante la finestra di impatto. La manutenzione pianificata è esclusa | minuti-utente, o richieste fallite | Telemetria del servizio, registrazioni dei contatti di supporto | Gestione dei livelli di servizio; gestione degli incidenti | Indicatori di livello di servizio rivolti all'utente (si veda l'Argomento 5.2 «SLI, SLO e budget di errore») | Per incidente |
| Tempestività della comunicazione | Se le parti interessate sono state informate in tempo | Quota di incidenti maggiori in cui la prima comunicazione ai clienti è uscita entro l'obiettivo dopo la dichiarazione, e quota di aggiornamenti programmati inviati entro l'intervallo concordato. Il cronometro parte alla dichiarazione. I messaggi solo interni sono esclusi | percentuale di incidenti; percentuale di aggiornamenti | Storico della pagina di stato, registro delle comunicazioni nello strumento ITSM | Gestione degli incidenti; gestione dei livelli di servizio | Comunicazione con le parti interessate nell'accordo di lavoro del team | Per incidente; sintesi trimestrale |
| Tempestività del completamento della revisione | Se una revisione è avvenuta abbastanza presto da essere utile | Quota di incidenti maggiori con una revisione pubblicata entro il numero concordato di giorni lavorativi dopo il ripristino. Il cronometro si ferma alla pubblicazione, non alla prima bozza. Gli incidenti ancora entro la finestra sono esclusi | percentuale | Archivio delle revisioni, strumento ITSM | Miglioramento continuo; gestione dei problemi | Seguito del miglioramento | Trimestrale |
| Seguito delle azioni | Se le azioni della revisione sono completate | Azioni di revisione completate entro la scadenza / azioni di revisione in scadenza nel periodo. Le azioni chiuse come «non verranno fatte» sono contate separatamente con un motivo, non nascoste | percentuale; conteggio degli scaduti | Issue tracker collegato alla revisione | Miglioramento continuo; gestione dei problemi | Voci di backlog derivanti dalle retrospettive | Mensile |
| Tasso di incidenti maggiori ripetuti | Ricorrenza della stessa causa | Incidenti maggiori nel periodo la cui causa registrata corrisponde a quella di un precedente incidente maggiore nei dodici mesi precedenti / incidenti maggiori nel periodo. La corrispondenza avviene tramite il campo della causa, rivisto a mano | percentuale, con il conteggio mostrato | Registrazioni delle revisioni, registrazioni dei problemi | Gestione dei problemi | Lavoro di prevenzione nel backlog | Trimestrale |

Ogni riga ha bisogno di una regola scritta del cronometro prima di essere considerata affidabile. Le dispute sull'inizio dell'impatto e sul momento del ripristino sono comuni e si risolvono meglio in anticipo (si veda l'Argomento 1.5 «Fonti dei dati e strumentazione»).

## Raccomandazioni

### Mettere per iscritto che cosa rende maggiore un incidente

**Pubblichi criteri di dichiarazione che chiunque sia in reperibilità possa applicare.** I criteri combinano di solito l'impatto (utenti interessati, un servizio critico degradato, un rischio per la sicurezza o legale) con la necessità di coordinamento (è richiesto più di un team). Un elenco breve con esempi è meglio di una lunga matrice. Indichi chi può dichiarare e chiarisca che dichiarare in buona fede non è mai un errore, anche quando l'incidente si rivela minore.

**Registri la versione dei criteri in ogni registrazione di incidente.** Quando la soglia si sposta, si spostano con essa gli andamenti. Un numero di versione o una data su ogni registrazione permette di confrontare cose omogenee e di spiegare un salto del conteggio derivato da un cambio di regola.

### Contare e classificare senza trasformare il conteggio in un obiettivo

**Riporti il conteggio con il suo contesto.** Mostri il numero di incidenti maggiori per trimestre accanto al servizio, all'innesco (modifica, capacità, dipendenza, sicurezza, altro) e alla versione dei criteri. Un conteggio privo di contesto invita a obiettivi come «meno di tre a trimestre», che insegnano a non dichiarare. Consideri un conteggio in calo una buona notizia solo quando tempo di dichiarazione e impatto sui clienti sono stabili.

**Distingua dichiarati, declassati e mancati.** Tracci gli incidenti che sono stati dichiarati e declassati, perché mostrano se i criteri sono sensati. Riveda ogni trimestre un campione di incidenti ordinari alla ricerca di quelli che avrebbero dovuto essere dichiarati. I mancati sono i più istruttivi.

### Misurare i tempi dell'incidente dal lato dell'utente

**Faccia partire il cronometro quando i clienti sono interessati.** Usi la più antica evidenza affidabile, che è spesso un segnale di monitoraggio che precede il primo ticket. Quando l'inizio è incerto, registri la stima e la sua fonte anziché il momento in cui qualcuno se n'è accorto. Il divario tra inizio dell'impatto e dichiarazione è una metrica a sé e di solito la più economica da migliorare.

**Suddivida la cronologia in fasi.** Rilevamento, dichiarazione, diagnosi, mitigazione e ripristino completo hanno ciascuno cause di ritardo e responsabili diversi. Una scomposizione per fasi di ciascun incidente mostra dove è andato il tempo senza bisogno di una media. Ripristinare il servizio con una soluzione alternativa e correggere la causa sono eventi distinti, e il secondo appartiene alla gestione dei problemi.

**Usi la mediana e il caso peggiore su finestre lunghe, con il conteggio.** Per un anno di dati, riporti la mediana e la durata più lunga, e indichi da quanti incidenti provengono. Eviti un singolo tempo medio di ripristino per gli incidenti maggiori. Con pochi eventi è instabile ed è distorto da una sola lunga interruzione (si veda l'Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio»).

### Dimensionare l'impatto sui clienti in termini che gli utenti riconoscerebbero

**Preferisca l'impatto basato sugli utenti a quello basato sui server.** Richieste fallite, utenti interessati o transazioni interessate descrivono ciò che è accaduto alle persone. I minuti di servizio degradato su un componente descrivono ciò che è accaduto a una macchina. Dove dispone di indicatori di livello di servizio, li usi (si veda l'Argomento 5.2 «SLI, SLO e budget di errore») e colleghi l'incidente al quadro della disponibilità (si veda l'Argomento 5.3 «Metriche di disponibilità»).

**Aggiunga a ogni registrazione una dichiarazione di impatto in linguaggio semplice.** Una o due frasi che indichino chi è stato interessato e che cosa non ha potuto fare. I contatti di supporto, le menzioni sui social media e le escalation dei clienti sono evidenze per la dichiarazione, non metriche da massimizzare.

### Misurare la comunicazione come parte della risposta

**Fissi obiettivi di comunicazione per destinatario.** Clienti interessati, parti interessate interne e dirigenti hanno bisogno di messaggi diversi in momenti diversi. Concordi un obiettivo per la prima comunicazione dopo la dichiarazione e un ritmo regolare di aggiornamenti, e misuri il rispetto per ciascun incidente. Il ritmo conta più del contenuto: un aggiornamento che dice «nessun cambiamento, prossimo aggiornamento tra trenta minuti» e arriva puntuale costruisce più fiducia del silenzio.

**Tenga separate le mani della risposta e della comunicazione.** Un responsabile della comunicazione libera il comandante dell'incidente, che può concentrarsi sulla diagnosi. Un piccolo team può usare una lista di controllo e un modello precompilato.

### Chiudere il cerchio sull'apprendimento

**Tenga la revisione presto e la pubblichi.** La memoria svanisce, perciò fissi una finestra per la revisione e misuri se è stata rispettata. Il completamento della revisione conta meno di ciò che la revisione cambia, quindi lo abbini al seguito dato. *Site Reliability Engineering* di Google sostiene la causa della revisione senza attribuzione di colpe e della sua messa per iscritto (si vedano i Riferimenti), e l'Argomento 4.2 «Metriche di postmortem e apprendimento» tratta la qualità della revisione.

**Tracci le azioni fino alla fine e consenta un onesto «non verrà fatto».** Collochi ogni azione nel backlog già usato dal team responsabile, con un responsabile e una data. Registri le azioni respinte, con il motivo, anziché lasciarle marcire. Riveda le azioni scadute in una revisione operativa o di servizio e chieda che cosa le blocca. Limiti il numero di azioni per revisione, in modo che quelle che restano siano quelle che contano.

**Cerchi schemi tra gli incidenti e li invii alla gestione dei problemi.** Cause ripetute, inneschi comuni e lacune di rilevamento ricorrenti sono segnali che le singole revisioni non colgono. Li immetta nel processo dei problemi e degli errori noti (si veda l'Argomento 4.1 «Metriche di gestione dei problemi») e nella pianificazione dei team responsabili dei servizi. Tratti un tasso di ripetizione in crescita come uno stimolo a indagare, non come un verdetto.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Numero di incidenti maggiori | Alzare la soglia di dichiarazione, mantenere gli incidenti a priorità «alta» in modo che non vengano mai dichiarati, dividere un evento in più registrazioni o accorparne più di uno in uno solo | Criteri fissi e versionati; campione trimestrale di incidenti ordinari ad alto impatto; impatto sui clienti e tempo di dichiarazione tracciati accanto al conteggio |
| Durata dell'incidente maggiore | Spostare il cronometro a un inizio dell'impatto successivo, dichiarare «ripristinato» mentre gli utenti ancora falliscono, oppure chiudere e riaprire una nuova registrazione | Inizio dell'impatto ricavato dal monitoraggio; ripristino confermato da un indicatore rivolto all'utente; registrazioni riaperte e collegate contate come un solo incidente |
| Tempo di dichiarazione | Dichiarare in anticipo su tutto per apparire rapidi, oppure retrodatare la dichiarazione all'inizio dell'impatto | Quota di incidenti dichiarati successivamente declassati; traccia di audit del momento di dichiarazione; campione di cronologie confrontate con il monitoraggio grezzo |
| Impatto sui clienti | Restringere la definizione di «interessato», contare solo gli utenti che hanno aperto un ticket, oppure misurare una dipendenza rimasta attiva | Impatto ricavato dalla telemetria oltre che dai contatti; una dichiarazione di impatto in linguaggio semplice rivista alla revisione dell'incidente |
| Tempestività della comunicazione | Pubblicare un avviso vago per far partire il cronometro, inviare aggiornamenti privi di contenuto, oppure contare messaggi interni | Verifica del contenuto di un campione di aggiornamenti; feedback dei clienti sulla chiarezza; contati solo gli avvisi rivolti ai clienti |
| Tempestività del completamento della revisione | Pubblicare un documento scarno per rispettare la data, oppure dichiarare «non necessaria» una revisione | Qualità della revisione letta da un pari su un campione (si veda l'Argomento 4.2 «Metriche di postmortem e apprendimento»); quota di revisioni omesse mostrata |
| Seguito delle azioni | Scrivere azioni vaghe o banali, facili da chiudere, chiudere le azioni senza svolgere il lavoro, oppure rietichettarle come «non verranno fatte» | Qualità delle azioni campionata; azioni chiuse verificate rispetto alla modifica di sistema; quota di «non verranno fatte» e relativi motivi rivisti |
| Tasso di incidenti maggiori ripetuti | Registrare ogni causa come nuova scegliendo parole diverse, oppure attribuire tutto a un «errore umano» | Una breve tassonomia delle cause con definizioni; campi della causa rivisti da qualcuno esterno all'incidente; «errore umano» come causa non accettato senza una spiegazione di sistema |

Una lettura sana è un numero moderato e abbastanza stabile di incidenti dichiarati, con un occasionale declassamento e un occasionale mancato individuato in revisione. Il tempo di dichiarazione è breve e in calo, l'impatto sui clienti per incidente è compreso e cala dove è stato fatto lavoro di prevenzione, e quasi tutti gli aggiornamenti rivolti ai clienti sono in orario. Le revisioni sono pubblicate in tempo e le loro azioni sono per lo più concluse, con un piccolo e onesto insieme di azioni respinte. Se tutto sembra perfetto, ci si chieda se i criteri sono andati alla deriva o se le persone hanno smesso di dichiarare (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»). La [legge che porta il nome di Charles Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) è qui più facile da vedere, perché il costo di un cattivo numero è una ridotta disponibilità a dare l'allarme.

## Compromessi: vantaggi e svantaggi

| Scelta | Punto di forza | Punto debole |
| --- | --- | --- |
| Mostrare ogni incidente come una riga | Mantiene il contesto, evita medie fuorvianti su conteggi piccoli | Più difficile da sintetizzare per i dirigenti; richiede una breve narrazione per incidente |
| Riportare un conteggio degli incidenti maggiori | Semplice, familiare, visibile alla direzione | Facile da trasformare in un obiettivo; reagisce ai cambiamenti dei criteri |
| Tempo dall'inizio dell'impatto | Riflette l'esperienza dell'utente, espone il ritardo di rilevamento | L'inizio dell'impatto è talvolta incerto e richiede giudizio |
| Tempo dalla dichiarazione | Facile da rilevare e confrontare | Nasconde rilevamento e dichiarazione lenti |
| Minuti-utente di impatto | Confrontabile tra incidenti e servizi | Richiede telemetria; tratta tutti gli utenti e tutti i minuti come uguali |
| Tasso di completamento delle revisioni | Facile da raccogliere, stimola l'abitudine | Premia il documento, non l'apprendimento |
| Tasso di seguito delle azioni | Collega la revisione al cambiamento | Può essere manipolato con azioni banali; richiede un responsabile e un backlog |

Usi un piccolo insieme di misure che copra l'intero ciclo (dichiarare, ripristinare, informare, imparare, concludere) anziché ottimizzarne una. Aggiunga misure di impatto solo quando esiste la telemetria. Dove la telemetria manca, una dichiarazione di impatto scritta con cura serve meglio di un numero inventato.

## Domande da discutere con il team

**1. Che cosa rende esattamente maggiore un incidente qui, e tutti i reperibili concordano?**
La definizione è il fondamento di ogni altro numero. Chieda a tre persone di classificare lo stesso incidente recente e confronti le risposte. Il disaccordo mostra dove i criteri sono vaghi. Chi facilita annoti esempi da aggiungere ai criteri scritti e concordi chi può dichiarare. Concluda confermando che dichiarare in buona fede è sempre accettabile, anche se l'incidente viene poi declassato.

**2. Nel nostro ultimo incidente maggiore, quanto tempo è passato tra l'inizio dell'impatto e la dichiarazione?**
Ricostruisca la cronologia dal monitoraggio, non dalla memoria. Il divario è spesso più grande del previsto ed è talvolta la fase più lunga. Chieda quale segnale esisteva e chi lo ha visto, e se il divario derivava da criteri poco chiari, da un avviso mancante o dalla riluttanza a dichiarare. Scelga una modifica che lo accorcerebbe e decida come saprete se ha funzionato.

**3. Chi è stato interessato, e come lo sappiamo?**
Confronti ciò che il team credeva allora con ciò che telemetria e contatti di supporto mostrano dopo. Chieda quali clienti, se ve ne sono, sono stati interessati più di altri, e se fossero quelli che contano di più per l'organizzazione o quelli meno in grado di far fronte. Discuta se la dichiarazione di impatto è qualcosa che un cliente riconoscerebbe. Concordi una misura di impatto che potrete raccogliere in modo affidabile la prossima volta.

**4. Le persone hanno avuto nostre notizie quando ne avevano bisogno, e il messaggio era utile?**
Verifichi la prima comunicazione e ogni aggiornamento rispetto al ritmo concordato. Legga i messaggi effettivi come li leggerebbe un cliente. Chieda se dicevano che cosa si sapeva, che cosa non si sapeva e quando sarebbe arrivato il prossimo aggiornamento. Discuta chi è responsabile della comunicazione durante un incidente e se quella persona è libera di svolgerla.

**5. Che fine hanno fatto le azioni delle nostre ultime tre revisioni?**
Raccolga le azioni in un unico elenco e contrassegni ciascuna come completata, in corso, scaduta o respinta. Per quelle scadute, chieda che cosa le blocca: capacità, responsabilità, priorità o ambito poco chiaro. Decida come le azioni scadute verranno sollevate nella prossima riunione operativa o di pianificazione.

**6. Se fossimo misurati sul numero di incidenti maggiori, che cosa faremmo diversamente, e i clienti starebbero meglio?**
Questa domanda fa emergere i vettori di manipolazione prima che si verifichino. Chieda al gruppo di essere franco su che cosa potrebbe cambiare: soglie, etichette, chi dichiara. Poi chieda quale sia l'obiettivo migliore. Una buona risposta si orienta verso impatto sui clienti, tempo di dichiarazione e seguito dato, che sono più difficili da manipolare senza aiutare gli utenti. Registri la risposta come salvaguardia.

## Quattro prospettive

### Team di prodotto e di consegna

I team di prodotto incontrano gli incidenti maggiori come interruzioni del lavoro pianificato e come feedback sulle proprie modifiche. Traggono il massimo vantaggio da numeri di impatto chiari, da un accesso rapido alle proprie cronologie degli incidenti e da azioni di revisione che arrivano nel loro backlog con lo spazio per farle. Riservino capacità al seguito degli incidenti e trattino le azioni come lavoro con lo stesso rango delle funzionalità. Condividano le categorie delle cause, in modo che un innesco ricorrente porti a un cambiamento di pratica (si veda l'Argomento 2.9 «Lavoro operativo e lavoro non pianificato»).

### Team di servizio e operations

I team operativi conducono la risposta e portano il costo del lavoro notturno. Hanno bisogno di criteri applicabili alle 3 del mattino, di un ruolo di comandante e di comunicazione che possano coprire, e di strumenti che catturino la cronologia mentre gli eventi accadono anziché dalla memoria in seguito. Dovrebbero osservare il carico che gli incidenti maggiori pongono su un piccolo gruppo di persone (si veda l'Argomento 5.7 «Metriche di toil e reperibilità») e usare le metriche di questo argomento per chiedere lavoro di prevenzione, non per confrontare chi risponde.

### Leadership e governance

I responsabili definiscono il clima che decide se le persone dichiarano rapidamente e riportano con onestà. Dovrebbero chiedere la storia di ogni incidente maggiore e l'andamento su un anno, evitare obiettivi sul conteggio e chiedere di impatto sui clienti, lacune di rilevamento e azioni concluse. Finanzino il lavoro di prevenzione che le revisioni raccomandano e lo rivedano nello stesso foro dei piani di consegna. La governance può così vedere se le lezioni si trasformano in cambiamento (si veda l'Argomento 5.2 «SLI, SLO e budget di errore» per un modo di collegare affidabilità e investimento).

### Clienti e utenti

I clienti giudicano un incidente maggiore da quanto a lungo sono stati interessati, dal fatto di essere stati informati e dal fatto che si ripeta. Sono serviti meglio da avvisi onesti e tempestivi che da avvisi tardivi e rifiniti. Si dia loro un canale di stato, un ritmo su cui contare e, in seguito, un resoconto chiaro di ciò che è accaduto e di che cosa cambierà. Dove si applicano contratti, si riporti nei termini concordati nell'accordo sul livello di servizio (si veda l'Argomento 5.1 «Metriche SLA, OLA e XLA»). Vale la pena chiedere la soddisfazione dopo un incidente (si veda l'Argomento 6.1 «Metriche di soddisfazione del cliente»).

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni gestisce un negozio, un servizio di pagamenti e un servizio di gestione degli ordini, ciascuno di proprietà di un team di prodotto, con un team di piattaforma condiviso in reperibilità. Un piccolo gruppo di service management conduce il processo degli incidenti maggiori. Tutti i numeri di questo esempio sono illustrativi.

Negli ultimi due trimestri il rivenditore ha dichiarato cinque incidenti maggiori (illustrativo). Il gruppo di service management mostra ciascuno come una riga con inizio dell'impatto, momento di dichiarazione, momento di ripristino, ordini falliti stimati, momento della prima comunicazione ai clienti e stato della revisione. Notano che il divario mediano tra inizio dell'impatto e dichiarazione è di 38 minuti (illustrativo), quasi altrettanto lungo del tempo mediano dalla dichiarazione al ripristino, pari a 52 minuti (illustrativo). Con cinque incidenti trattano entrambi i numeri come approssimativi e leggono le cronologie. Tre dei cinque mostrano un avviso di monitoraggio scattato presto e rimasto non preso in carico in un canale condiviso.

Il team decide di instradare quella classe di avvisi al pager di reperibilità e di aggiungere ai criteri una riga che dice che un segnale prolungato di fallimento del checkout è sufficiente per dichiarare, senza attendere i ticket. Fissano inoltre un obiettivo di prima comunicazione ai clienti entro 20 minuti dalla dichiarazione (illustrativo) e lo verificano per ciascun incidente. Due su cinque lo hanno rispettato. Il team di distribuzione aggiunge un modello di pagina di stato che un responsabile della comunicazione può compilare sotto pressione.

Durante la stessa revisione individuano un rischio di manipolazione. Un responsabile di un team di prodotto aveva proposto un obiettivo trimestrale di «non più di due incidenti maggiori». Il gruppo di service management fa notare che il trimestre precedente aveva avuto un incidente rimasto ad alta priorità per quattro ore con clienti che fallivano al checkout, mai dichiarato perché il team era vicino al limite. Sostituiscono l'obiettivo con tre misure: tempo di dichiarazione, ordini falliti per incidente e quota di azioni di revisione completate in tempo. Aggiungono la salvaguardia di un campione trimestrale di incidenti ad alta priorità letto da qualcuno esterno al team responsabile. Nel trimestre successivo il numero dei dichiarati sale a quattro (illustrativo), il tempo mediano di dichiarazione cala e la revisione a campione non trova dichiarazioni mancate.

## Lente di settore

**Startup.** Una startup può non avere un processo formale per gli incidenti maggiori, solo chiunque sia sveglio. Partite da una definizione di un paragrafo, da un coordinatore nominato per ogni evento e da un documento condiviso che registra la cronologia. Contate gli incidenti e annotate l'impatto in una frase. La revisione può essere una nota di mezza pagina e il seguito è una voce nel backlog del team.

**Piccola impresa.** Una piccola impresa dipende spesso da fornitori per gran parte del proprio servizio, perciò la cronologia include l'attesa di un fornitore. Registrate nella cronologia dell'incidente i tempi di contatto e di risposta del fornitore, perché spiegano gran parte della durata e forniscono evidenze per le conversazioni contrattuali. Mantenete semplice la comunicazione ai clienti: un canale, una persona e un intervallo di aggiornamento dichiarato.

**Grande impresa.** Le grandi imprese gestiscono molti servizi e hanno molti incidenti in ogni periodo, perciò sono utili sia un conteggio per servizio sia un riepilogo complessivo. I rischi sono criteri incoerenti tra le divisioni e un processo così pesante da rallentare la dichiarazione. Allineate le definizioni, mantenete leggero il processo per i primi quindici minuti e usate un formato di registrazione comune, in modo che impatto e comunicazione possano essere confrontati.

**Pubblica amministrazione e settore pubblico.** Gli enti pubblici hanno spesso obblighi di legge, come notificare un'autorità di regolamentazione o il pubblico, e un costo del fallimento più alto per cittadini che non hanno alternative. Aggiungete misure di conformità agli obblighi di notifica e di impatto sui gruppi vulnerabili, e mantenete registrazioni che reggano agli audit e alle richieste di informazioni pubbliche. I cicli di approvvigionamento possono ritardare le azioni, perciò tracciate le azioni bloccate e portatele all'escalation.

## Business case: motivazioni, ROI e TCO

La motivazione è ridurre il costo degli incidenti che fanno più male: ricavi o servizio persi, fiducia danneggiata, esaurimento del personale ed esposizione normativa. Un piccolo insieme coerente di misure sugli incidenti maggiori mostra da dove proviene quel costo, se rilevamento e comunicazione stanno migliorando e se l'investimento nella prevenzione sta dando risultati. Misure che mostrano solo un conteggio spingono il costo verso l'occultamento degli incidenti.

I costi di raccolta sono modesti se i dati risiedono già nello strumento ITSM, nel sistema di monitoraggio e nell'issue tracker. I costi principali sono concordare le definizioni, collegare la registrazione dell'incidente al monitoraggio e al backlog delle azioni, e il tempo impiegato per scrivere ciascuna revisione. Le metriche costano poco oltre a rendere coerente la registrazione.

Il ritorno si manifesta come minor tempo di dichiarazione, comunicazione più chiara, meno incidenti ripetuti e meno rilavorazioni. Non esiste una cifra universale, perciò stimi la Sua: prenda l'ultimo anno di incidenti maggiori, stimi con la finanza il costo di un'ora di impatto per ciascun servizio e lo confronti con il costo del lavoro di seguito necessario per prevenire le cause ripetute. Il costo totale di proprietà comprende il tempo dei revisori, gli strumenti per cronologie e pagine di stato e la capacità riservata alle azioni di seguito, ed è lì che la maggior parte dei programmi investe troppo poco.

## Anti-pattern e insidie

- **Un obiettivo sul numero di incidenti maggiori.** Insegna a evitare di dichiarare. Invece, tracci tempo di dichiarazione, impatto e seguito dato, e campioni gli incidenti mancati.
- **Un singolo tempo medio di ripristino per gli incidenti maggiori.** Con pochi eventi, una lunga interruzione domina. Invece, mostri ogni incidente, poi la mediana e il più lungo su un anno con il conteggio.
- **Far partire il cronometro alla dichiarazione.** Nasconde il ritardo di rilevamento e di dichiarazione. Invece, parta dalla prima evidenza di impatto sui clienti e riporti il divario separatamente.
- **Classificare chi risponde o i team in base alle metriche sugli incidenti.** Distrugge la franchezza e rompe la revisione. Invece, riporti per servizio e sistema e tenga i nomi fuori dai dati.
- **Considerare la revisione conclusa quando il documento è pubblicato.** Il punto è il cambiamento. Invece, misuri il seguito delle azioni e guardi le azioni scadute ogni mese.
- **Modifiche silenziose delle soglie.** Gli andamenti perdono significato. Invece, versioni i criteri e annoti le modifiche nel report.
- **Contare solo i ticket come impatto.** Molti utenti interessati non chiamano mai. Invece, usi la telemetria e aggiunga una dichiarazione di impatto in linguaggio semplice.
- **Usare le metriche per attribuire colpe.** Le persone allora nascondono i fatti. Invece, mantenga le revisioni senza attribuzione di colpe, si concentri su condizioni e decisioni e cerchi cause di sistema.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Definizione e cronometri | Maggiore significa ciò che dice la persona più rumorosa; i tempi vengono dalla memoria | Alcuni team hanno criteri e annotano orari di inizio e fine | Una definizione scritta e versionata, con regole del cronometro per inizio dell'impatto, dichiarazione e ripristino | Definizione e cronometri verificati rispetto al monitoraggio; cambiamenti registrati con i motivi | Criteri e cronometri concordati con fornitori e clienti, rivisti quando smettono di orientare le decisioni |
| Impatto e comunicazione | Impatto descritto con aneddoti; aggiornamenti inviati quando qualcuno se ne ricorda | Impatto stimato per alcuni incidenti; alcuni team usano una pagina di stato | Impatto misurato dalla telemetria per i servizi chiave; obiettivi di aggiornamento fissati e tracciati | Impatto e comunicazione seguiti nel tempo e collegati al feedback dei clienti | Impatto condiviso con clienti e fornitori in un formato comune, con azioni di miglioramento congiunte |
| Revisione e seguito | Revisioni rare e non scritte; azioni dimenticate | Revisioni scritte da alcuni team; azioni registrate ma non tracciate | Ogni incidente maggiore revisionato in tempo; azioni tracciate nel backlog del team | Azioni scadute e cause ripetute riviste con una cadenza, con lavoro di prevenzione finanziato | Schemi condivisi tra team e fornitori; l'apprendimento cambia regolarmente progettazione e pianificazione |
| Uso nelle decisioni | Numeri citati a cose fatte | Conteggi mostrati ai dirigenti senza contesto | Cronologie e andamenti mostrati ai team responsabili dei servizi | Metriche abbinate a salvaguardie e usate per dare priorità al lavoro sull'affidabilità | Investimento sull'affidabilità deciso congiuntamente usando evidenze di impatto e ricorrenza tra servizi |

## Checklist

- [ ] I criteri di dichiarazione sono scritti, versionati e noti a chiunque sia in reperibilità.
- [ ] Dichiarare in buona fede è esplicitamente sicuro e non esiste alcun obiettivo sul conteggio.
- [ ] Inizio dell'impatto, dichiarazione e momento del ripristino sono definiti e ricavati dal monitoraggio o da una traccia di audit.
- [ ] Ogni incidente maggiore è mostrato come riga a sé con una cronologia per fasi.
- [ ] L'impatto sui clienti è ricavato dalla telemetria dove esiste e descritto in una dichiarazione in linguaggio semplice.
- [ ] Obiettivi per la prima comunicazione e per il ritmo degli aggiornamenti sono fissati e verificati per ciascun incidente.
- [ ] Una revisione è pubblicata entro la finestra concordata e le sue azioni sono nel backlog del team responsabile.
- [ ] Azioni scadute e cause ripetute sono riviste secondo un calendario.
- [ ] Un campione trimestrale di incidenti ordinari ad alto impatto verifica l'eventuale presenza di dichiarazioni mancate.
- [ ] Ogni metrica ha una salvaguardia nominata e nessuna metrica è usata per classificare i singoli.

## Prompt IA

**Redigere criteri di dichiarazione da sottoporre a revisione.**

```text
Sto redigendo i criteri per dichiarare un incidente maggiore in [tipo di
organizzazione]. I nostri servizi sono [elenco dei servizi] e i nostri team
sono [elenco dei team]. Gli utenti sono [descrizione degli utenti]. Proponi un
breve insieme di criteri di dichiarazione con due o tre esempi per ciascuno,
un elenco delle ambiguità su cui un team potrebbe discutere e le domande che
devo chiarire con [parti interessate]. Non inventare soglie né valori di
riferimento; usa [segnaposto] dove serve un numero. Elenca le tue ipotesi.
```

**Ricostruire e criticare la cronologia di un incidente.**

```text
Ecco la cronologia di un incidente maggiore: [incolla la cronologia con
timestamp e fonti]. Individua l'inizio dell'impatto, la dichiarazione, la
mitigazione e il ripristino completo, e indica quali timestamp sono incerti e
perché. Suddividi la durata in fasi e annota dove si sono verificati i ritardi
maggiori. Suggerisci domande da porre a chi ha risposto ed evidenze di
monitoraggio da cercare. Non inventare fatti che non sono nella cronologia.
Elenca le tue ipotesi.
```

**Esaminare un insieme di azioni post-incidente.**

```text
Di seguito le azioni di [numero] revisioni post-incidente per [servizio]:
[incolla le azioni con responsabile, scadenza e stato]. Raggruppale per tema,
segnala quelle vaghe, banali o prive di responsabile e individua schemi che
suggeriscano una registrazione di problema o una voce di backlog per [team
responsabile]. Non classificare persone o team in base alle prestazioni. Non
inventare cause. Elenca le tue ipotesi e le informazioni di cui avresti bisogno
per migliorare l'analisi.
```

**Verificare una metrica proposta per la manipolazione.**

```text
Prevediamo di tracciare [nome della metrica], definita come [definizione] e
misurata da [fonte dei dati]. Descrivi come questa metrica potrebbe essere
manipolata da [ruolo], quali comportamenti onesti potrebbe scoraggiare e quale
metrica o pratica di salvaguardia abbinata coglierebbe ciascun caso. Mantieni i
suggerimenti pratici per un team di [dimensione del team]. Non inventare valori
di riferimento né fonti. Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare gli argomenti correlati e la salvaguardia che dovrebbe affiancare ciascuna metrica degli incidenti maggiori.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una versione modificata di questo argomento rispetti ancora il modello e le convenzioni.

## Punti chiave

- Gli incidenti maggiori sono rari, perciò mostri ciascuno con la sua cronologia e riassuma solo su finestre lunghe con il conteggio accanto alla cifra.
- Faccia partire il cronometro all'impatto sui clienti e riporti il divario prima della dichiarazione come misura a sé.
- Misuri l'impatto in termini di utenti e utilizzo e aggiunga una dichiarazione in linguaggio semplice per ciò che i numeri non colgono.
- Tratti la tempestività della comunicazione come parte della risposta, con obiettivi per destinatario e un ritmo regolare di aggiornamenti.
- Una revisione è finita quando sono finite le sue azioni, perciò tracci il seguito dato e le cause ripetute.
- Non fissi mai un obiettivo sul conteggio, non classifichi mai le persone e mantenga sicuro il dichiarare.

## Riferimenti e letture di approfondimento

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
3. Beyer, B., et al. (eds.), "Managing Incidents," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/managing-incidents/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
7. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
8. Wikipedia, [Incident management (ITSM)](https://en.wikipedia.org/wiki/Incident_management_(ITSM)).
9. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
10. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Incident commander](https://en.wikipedia.org/wiki/Incident_commander).
13. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
