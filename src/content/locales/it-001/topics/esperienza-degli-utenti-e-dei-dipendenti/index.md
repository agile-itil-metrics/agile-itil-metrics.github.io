# Esperienza degli utenti e dei dipendenti

**Le persone lavorano al meglio quando gli strumenti, i dispositivi e il supporto che le circondano funzionano e basta: si misuri dunque l'attrito che i colleghi incontrano, si trattino le risposte come una ragione per rimuovere gli ostacoli e non si trasformino mai quei dati in sorveglianza o in una classifica di persone.**

## Panoramica e motivazione

Il quinto principio alla base del Manifesto Agile dice di costruire i progetti attorno a individui motivati, di dare loro l'ambiente e il supporto di cui hanno bisogno e di fidarsi che portino a termine il lavoro. Per chi usa l'IT interno, l'ambiente è il portatile, l'accesso, gli strumenti di collaborazione, il processo di richiesta degli accessi e il service desk. Quando questi sono lenti o confusi, le persone motivate perdono tempo e buona volontà, e inventano soluzioni di ripiego. Misurare quell'ambiente è dunque un modo per sostenere le persone. Non è un modo per sorvegliarle.

La [employee experience](https://en.wikipedia.org/wiki/Employee_experience_management) è la somma delle interazioni di un dipendente con il proprio luogo di lavoro lungo il tempo trascorso nell'organizzazione. La parte plasmata dall'IT è talvolta chiamata esperienza digitale dei dipendenti, e il [digital workplace](https://en.wikipedia.org/wiki/Digital_workplace) è l'insieme delle tecnologie che le persone usano per lavorare. Gli argomenti precedenti di questa parte hanno trattato i sondaggi di soddisfazione (si veda l'argomento 6.1, Metriche di soddisfazione del cliente) e gli experience level agreement (si veda l'argomento 6.2, Experience level agreement). Questo argomento rivolge la stessa attenzione verso l'interno, ai colleghi che usano ogni giorno i servizi IT, compresi gli ingegneri e gli operatori che li costruiscono e li gestiscono.

Gli utenti interni differiscono dai clienti esterni in quattro modi rilevanti per la misurazione.

- **Non possono andarsene.** Un dipendente non ha un concorrente a cui passare, perciò il silenzio non è soddisfazione. Può significare rassegnazione, o una soluzione di ripiego.
- **Sono identificabili.** In un'azienda di poche centinaia di persone, un piccolo gruppo di risposte a un sondaggio può indicare una persona. La progettazione della privacy viene per prima.
- **Sono anche colleghi.** Dati di esperienza scadenti danneggiano relazioni e morale, mentre dati buoni possono essere condivisi apertamente e usati per agire insieme.
- **Comprendono i team di consegna e di operations.** Gli strumenti usati da sviluppatori e personale del service desk fanno parte dell'esperienza, e il loro attrito raggiunge gli utenti sotto forma di correzioni più lente.

Due temi attraversano questo argomento. Il primo è l'**attrito**: lo sforzo, il ritardo e l'interruzione evitabili che si frappongono tra una persona e il suo lavoro. Interruzioni e sovraccarico mentale costano più di quanto suggerisca il loro tempo di orologio. Il concetto di [carico cognitivo](https://en.wikipedia.org/wiki/Cognitive_load), il peso gravante sulla memoria di lavoro, spiega perché un modulo confuso o un riavvio forzato inatteso costano più dei minuti che richiedono, e il concetto di [flow](https://en.wikipedia.org/wiki/Flow_(psychology)), uno stato di concentrazione assorbita, spiega perché proteggere il tempo ininterrotto conta per il lavoro intellettuale. Il secondo tema è l'**etica**: come conoscere l'esperienza senza invadere la privacy. La tecnologia di [monitoraggio dei dipendenti](https://en.wikipedia.org/wiki/Employee_monitoring) può misurare moltissimo, e il confine tra sostenere e controllare è facile da oltrepassare. Il guardrail derivato dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) si applica qui in forma umana: un punteggio usato per giudicare le persone insegna loro a nascondere i propri problemi (si veda l'argomento 1.2, La legge di Goodhart e la psicologia delle metriche).

## Principi chiave

- **Si misuri l'ambiente, non la persona.** L'unità di analisi è un servizio, un tipo di dispositivo o un gruppo, mai un individuo.
- **Si tratti l'attrito come il nemico.** Tempo perso, interruzione e confusione sono costi da eliminare.
- **Si chieda, si osservi e si misuri.** Si combini ciò che le persone dicono con ciò che i sistemi registrano e con ciò che si vede osservando il lavoro svolto.
- **Si faccia della privacy un requisito di progettazione.** Si raccolgano meno dati possibile per rispondere alla domanda, si aggreghi presto e si sopprimano i gruppi piccoli.
- **Si includano tutti.** Esigenze di accessibilità, lavoratori da remoto e a turni, e nuovi assunti incontrano spesso l'esperienza peggiore.
- **Si protegga la concentrazione.** Si pianifichino modifiche, aggiornamenti e notifiche attorno al lavoro delle persone.
- **Si dica che cosa si raccoglie e perché.** La trasparenza costruisce la fiducia da cui dipendono le risposte oneste.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tasso di prontezza al primo giorno | Quota di nuovi assunti i cui dispositivi, account e accessi sono completi e funzionanti all'orario di inizio | nuovi assunti con tutte le voci concordate funzionanti all'inizio / nuovi assunti nel periodo | percentuale | Richieste di onboarding, sistema di identità, conferma del nuovo assunto | Gestione delle richieste di servizio; gestione del catalogo dei servizi | Accordo di lavoro del team per l'onboarding | Mensile |
| Tempo alla produttività | Tempo trascorso dalla data di inizio al momento in cui un nuovo assunto dispone di tutto il necessario per il primo compito reale | mediana e 85° percentile dei giorni dalla data di inizio alla conferma del nuovo assunto e del suo responsabile | giorni | Tracker di onboarding; breve domanda di conferma | Gestione delle richieste di servizio; miglioramento continuo | Tempo perché un nuovo membro del team apporti una prima modifica | Mensile |
| Diffusione delle soluzioni di ripiego | Quota del personale interpellato che usa strumenti non approvati o passaggi manuali per aggirare un servizio ufficiale | rispondenti che segnalano una soluzione di ripiego per il servizio / rispondenti validi | percentuale | Sondaggio pulse; rapporti di rilevamento di strumenti autorizzati | Gestione dei livelli di servizio; miglioramento continuo | Impedimenti sollevati negli incontri quotidiani del team | Trimestrale |
| Minuti di interruzione forzata | Tempo in cui le persone sono interrotte da azioni IT pianificate come riavvii forzati, aggiornamenti e richieste di accesso | minuti totali di interruzione causati da azioni pianificate / utenti attivi nel gruppo | minuti per persona al mese | Log di gestione degli endpoint, aggregati per gruppo | Abilitazione delle modifiche; gestione di rilasci e distribuzioni | Tempo di lavoro privo di interruzioni | Mensile |
| Tempo di risoluzione delle richieste di accessibilità | Tempo per risolvere le richieste relative a esigenze di accessibilità | mediana e 85° percentile delle ore dalla richiesta alla soluzione funzionante confermata | ore | Sistema di richieste con tag di accessibilità | Gestione delle richieste di servizio; gestione degli incidenti | Definition of done inclusiva | Mensile |
| Punteggio pulse dello strumento | Valutazione di un singolo strumento o servizio nominato su una breve domanda concordata | valutazione media o quota favorevole sulle risposte valide, per strumento | punti di scala o percentuale | Sondaggio pulse, con rotazione degli strumenti | Gestione dei livelli di servizio; miglioramento continuo | Feedback dei membri del team sui propri strumenti | Trimestrale |
| Conformità alle salvaguardie della privacy | Quota di rapporti di esperienza che rispettano le regole di soppressione e aggregazione | rapporti conformi alle regole / rapporti pubblicati | percentuale | Verifica dei rapporti pubblicati rispetto alle regole di privacy | Gestione della sicurezza delle informazioni; misurazione e rendicontazione | Accordo di lavoro sull'uso dei dati | Trimestrale |

Si definiscano il gruppo e il periodo per ogni misura. La prontezza al primo giorno conta un nuovo assunto come pronto solo quando ogni voce di un elenco concordato funziona, e l'elenco è registrato nel registro delle metriche. I minuti di interruzione forzata sono calcolati a partire dai totali di gruppo, e il livello minimo mostrato è un gruppo di almeno dieci persone. La conformità alle salvaguardie della privacy si applica al programma di esperienza stesso, il che ne fa un guardrail sulle altre sei misure.

## Raccomandazioni

### Partire dalle persone e dal loro lavoro

**1. Si trascorra una giornata con i colleghi.** Ci si sieda accanto ad alcune persone di ruoli, sedi e turni diversi e le si osservi lavorare. Si annotino ogni attesa, ogni soluzione di ripiego e ogni momento di confusione. Si chieda che cosa correggerebbero per prima cosa. L'osservazione trova problemi che i sondaggi non vedono, perché le persone smettono di notare l'attrito con cui hanno imparato a convivere. Si concordi in anticipo che cosa si registrerà e come lo si userà.

**2. Si mappino i momenti che contano.** Per il personale, i momenti ad alto impatto sono di solito il primo giorno, il guasto di un portatile, il passaggio tra team, una richiesta di accesso e l'uscita dall'organizzazione. Si scrivano i passaggi di ciascuno e chi ne è responsabile. La mappa mostra i passaggi di consegne tra team in cui il ritardo si nasconde, il che si collega alle misure di collaborazione di una parte successiva (si veda l'argomento 9.3, Metriche di collaborazione e passaggi di consegne).

**3. Si includano le persone ai margini.** Il personale con esigenze di accessibilità, i lavoratori a turni, il personale da remoto e sul campo e i collaboratori esterni sono spesso invisibili nelle medie. Si segmentino i risultati dove farlo è sicuro e si riveda a parte il gruppo meno servito. Si tratti l'accessibilità come un requisito di prima classe. Gli standard di [accessibilità web](https://en.wikipedia.org/wiki/Web_accessibility), come le Web Content Accessibility Guidelines, offrono una checklist concreta per gli strumenti interni, e i problemi di accessibilità sono una questione giuridica ed etica in molte giurisdizioni.

### Misurare con cura

**4. Si combinino tre tipi di evidenza.** Si usino brevi domande pulse su strumenti e momenti nominati, misure di sistema come i minuti di interruzione forzata e il completamento dell'onboarding, e conversazioni. Quando due tipi non concordano, si indaghi. Uno strumento con un uptime eccellente e un punteggio pulse scadente sta dicendo qualcosa che l'uptime non può dire (si veda l'argomento 5.3, Metriche di disponibilità).

**5. Si chieda di uno strumento, non dell'IT.** «Quanto è facile trovare un documento nel file system?» ottiene risposte migliori di «Come va l'IT?». Si ruotino gli strumenti nel pulse in modo che nessuno sia interpellato più di una o due volte a trimestre, e si mantenga stabile la formulazione perché gli andamenti abbiano senso.

**6. Si contino i minuti che le persone perdono.** Il tempo perso è più facile da capire di un punteggio. Lo si stimi dal sistema dove possibile, per esempio dalle richieste di riavvio e dai fallimenti di accesso, e si chieda alle persone una cifra approssimativa dove non lo è. Lo si presenti per persona al mese per un gruppo, con il metodo, e si eviti di moltiplicare per lo stipendio per ottenere un numero drammatico a meno di dichiarare anche le ipotesi.

**7. Si minimizzi e si aggreghi.** Si segua il principio della [minimizzazione dei dati](https://en.wikipedia.org/wiki/Data_minimization): si raccolga solo ciò che serve, lo si conservi solo per il tempo necessario e si aggreghi il prima possibile. Dove i dati potrebbero identificare qualcuno, la [pseudonimizzazione](https://en.wikipedia.org/wiki/Pseudonymization) riduce il rischio. Regole come la [k-anonimità](https://en.wikipedia.org/wiki/K-anonymity), che richiede che ogni gruppo riportato contenga almeno k persone, offrono un modo semplice per sopprimere le celle piccole. Si dichiari il proprio k nel registro.

**8. Si tracci una linea netta contro la sorveglianza.** Non si usino i dati di esperienza, la telemetria degli endpoint o il sentiment per valutare individui, per rilevare chi è «meno coinvolto» o per alimentare le valutazioni delle prestazioni. Lo si dica per iscritto e si lasci che i rappresentanti del personale o un comitato aziendale, dove esistono, rivedano il piano dei dati. Si consultino la normativa locale e gli specialisti della privacy prima di raccogliere qualunque dato comportamentale. La fiducia, una volta persa, rende meno onesto ogni sondaggio successivo.

### Agire su ciò che si apprende

**9. Si corregga per primo l'attrito maggiore e lo si dica.** Si ordinino i problemi per tempo perso, numero di persone e gravità per le persone coinvolte, e si finanzino i principali. Si dica alle persone che cosa si è corretto e che cosa si è scelto di non correggere, con le ragioni. Una correzione visibile è il più forte incoraggiamento a continuare a segnalare problemi.

**10. Si pianifichino le interruzioni attorno al lavoro.** Molte interruzioni forzate sono evitabili. Si programmino gli aggiornamenti fuori dal tempo di concentrazione, si offra un rinvio entro limiti e si raggruppino i riavvii. Si riesaminino i minuti di interruzione forzata accanto agli obiettivi di sicurezza, in modo che il compromesso sia esplicito, poiché alcuni aggiornamenti devono avvenire rapidamente (si veda l'argomento 4.3, Metriche di abilitazione delle modifiche).

**11. Si trattino le soluzioni di ripiego come feedback di progettazione.** Quando le persone usano uno strumento non approvato, ci si chieda che cosa fa meglio. La risposta è un requisito che lo strumento ufficiale non ha colto. Lo [shadow IT](https://en.wikipedia.org/wiki/Shadow_IT) comporta rischi reali per sicurezza e costi, e una risposta punitiva lo spinge nella clandestinità. Si preferisca adottare la buona idea, oppure spiegare il rischio e offrire un'alternativa sicura.

**12. Si condivida il programma con le persone che serve.** Si mostrino i risultati al personale, si tenga una breve revisione con i rappresentanti e si chieda che cosa cambiare nel trimestre successivo. Il programma è una forma di collaborazione continua tra l'IT e i suoi utenti, e il miglioramento continuo dell'ambiente è il risultato. Lo si colleghi alle misure sulle persone della parte successiva (si veda l'argomento 9.2, Metriche di soddisfazione e benessere).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di guardrail abbinata |
| --- | --- | --- |
| Tasso di prontezza al primo giorno | Accorciare l'elenco concordato; segnare le voci come pronte prima che funzionino; ritardare la data ufficiale di inizio | Elenco scritto nel registro; conferma del nuovo assunto; tempo alla produttività |
| Tempo alla produttività | Far partire l'orologio più tardi; chiudere presto il record di onboarding | Definizione dell'orologio nel registro; conferma sia del responsabile sia del nuovo assunto |
| Diffusione delle soluzioni di ripiego | Scoraggiare le risposte oneste suggerendo conseguenze; interpellare solo gruppi soddisfatti | Dichiarazione di anonimato; tasso di risposta e composizione dei rispondenti; conformità alle salvaguardie della privacy |
| Minuti di interruzione forzata | Contare solo alcuni tipi di interruzione; spostare le interruzioni sul gruppo non misurato | Definire tutti i tipi di interruzione pianificata; riportare per gruppo, compreso il personale da remoto e a turni |
| Tempo di risoluzione delle richieste di accessibilità | Chiudere le richieste con una correzione parziale; etichettare le richieste come altro per evitare l'orologio | Conferma da parte del richiedente che la soluzione funziona; revisione delle richieste senza tag |
| Punteggio pulse dello strumento | Interpellare solo utenti soddisfatti; cambiare la domanda; addestrare il personale a rispondere bene | Registro delle formulazioni stabili; tasso di risposta e composizione; lettura dei commenti |
| Conformità alle salvaguardie della privacy | Riportare la conformità senza revisione indipendente; allargare i gruppi per nascondere problemi | Revisione periodica da parte di qualcuno esterno al team; pubblicare le regole (il valore di k e la soppressione) |

Una lettura sana è composta da nuovi assunti che possono lavorare fin dal primo giorno, un conteggio in calo di interruzioni forzate, soluzioni di ripiego che portano a strumenti ufficiali migliori e personale che dice di fidarsi del programma perché ha visto che cosa ne viene fatto delle proprie risposte.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Sondaggi pulse | Voce diretta, economici, facili da ripetere | Fatica da sondaggio; distorsione da risposta |
| Telemetria di sistema | Oggettiva, continua, nessun onere di sondaggio | Rischio per la privacy; mostra eventi ma non sentimenti |
| Osservazione e interviste | Trova l'attrito nascosto; costruisce relazioni | Richiedono tempo; campioni piccoli |
| Dati a grana fine | Diagnosi precisa | Identificano le persone; erodono la fiducia |
| Dati aggregati con soppressione | Sicuri da condividere e su cui agire | Meno dettaglio; nascondono i gruppi piccoli che possono essere in difficoltà |
| Controlli rigorosi sui dispositivi | Sicurezza e conformità | Più interruzioni forzate; più soluzioni di ripiego |

La risposta in prosa è usare tutti e tre i tipi di evidenza a livello di gruppo, conservare il dettaglio solo finché una diagnosi lo richiede e trattare sicurezza ed esperienza come un compromesso da discutere apertamente. L'obiettivo è un luogo di lavoro in cui persone motivate ottengono ciò che serve con poco sforzo.

## Domande da discutere con il team

**1. Com'è il primo giorno di un nuovo collega e come lo sappiamo?**
Si chieda al team di ripercorrere il tragitto dall'offerta al primo compito reale. Chi fa che cosa, e dove si attende? Si chieda a un assunto recente di unirsi alla conversazione. Il facilitatore dovrebbe concentrarsi sui momenti che hanno lasciato la persona in attesa o in imbarazzo e concordare una modifica che migliorerebbe la giornata del prossimo assunto.

**2. Quale soluzione di ripiego usano le persone che preferiremmo non usassero, e che cosa ci dice?**
Si elenchino gli strumenti non ufficiali e i passaggi manuali che il team ha visto. Per ciascuno ci si chieda quale esigenza soddisfi. La conversazione trova spesso un requisito che il servizio ufficiale non ha colto. Si decida quali soluzioni di ripiego adottare, quali sostituire con un'opzione ufficiale migliore e quali vietare con una spiegazione.

**3. Quanti minuti al mese sottraggono ai colleghi le nostre stesse azioni?**
Si stimino i riavvii forzati, gli aggiornamenti e le richieste per una persona tipo. Si confronti con ciò che direbbe un utente. Il facilitatore può chiedere che cosa cambierebbe se la cifra fosse pubblicata. Si concordi un'interruzione da ridurre o riprogrammare in questo trimestre.

**4. Quali dati sui colleghi potremmo raccogliere, e che cosa dovremmo promettere di non farne mai?**
Si compilino due elenchi: ciò che è tecnicamente possibile e ciò che il team raccoglierà davvero. Si rediga una breve dichiarazione di scopo e limiti. Si chieda a un rappresentante del personale di reagire. La discussione mostra dove si colloca la linea contro la sorveglianza e come spiegarla.

**5. Chi fatica di più con i nostri strumenti, ed è nei nostri dati?**
Si pensi a esigenze di accessibilità, lavoratori a turni, personale da remoto e persone nuove. Si verifichi se i sondaggi e i log le raggiungono e se le regole sui gruppi piccoli le nascondono. Si concordi un modo per ascoltare direttamente il gruppo meno servito.

**6. Che cosa abbiamo corretto il trimestre scorso grazie a ciò che i colleghi ci hanno detto, e lo hanno saputo?**
Si elenchino le correzioni e come sono state annunciate. Se l'elenco è breve, si discuta che cosa blocca l'azione: responsabilità, finanziamento o timore. Si concordi una correzione visibile da consegnare prima del prossimo sondaggio e un messaggio per spiegarla.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna sono al tempo stesso utenti e costruttori di strumenti interni. Il loro stesso attrito, come build lente, ambienti instabili e ritardi negli accessi, rallenta tutto ciò che consegnano, e le misure di questo argomento si applicano anche a loro. Dovrebbero inserire gli strumenti interni nel product backlog con un responsabile e degli utenti, e partecipare al pulse e alle revisioni come colleghi (si veda l'argomento 9.1, Salute del team ed esperienza degli sviluppatori).

### Team di servizio e operations

Operations e service desk plasmano gran parte dell'esperienza e sono personale con i propri strumenti e il proprio carico di lavoro. Dovrebbero inviare le modifiche con attenzione alla concentrazione degli utenti, mantenere reattivo il canale per l'accessibilità e usare le soluzioni di ripiego come feedback. Dovrebbero anche proteggere i propri colleghi dall'essere classificati in base ai dati di esperienza. Anche il personale di supporto è composto da individui motivati.

### Leadership e governance

I leader stabiliscono la cultura della misurazione. Dovrebbero chiedere che l'attrito venga rimosso, non che i punteggi salgano, e finanziare le correzioni. Dovrebbero tutelare per iscritto gli impegni sulla privacy, resistere alle richieste di usare i dati sugli individui e accettare che i controlli di sicurezza abbiano un costo di esperienza da ponderare. La governance dovrebbe aspettarsi le regole di privacy e la loro revisione come parte di qualunque rendicontazione sull'esperienza.

### Clienti e utenti

Le persone che usano l'IT interno sono gli autori dell'esperienza. Meritano un primo giorno che funzioni, strumenti che rispettino la loro concentrazione, un resoconto onesto di ciò che viene raccolto su di loro, un modo per rinunciare dove possibile e la prova che parlare porta al cambiamento. Ai colleghi con esigenze di accessibilità andrebbe chiesto come far funzionare il servizio per loro, e non andrebbero trattati come un caso speciale.

## In pratica: un esempio di ITIL agile

Il reparto IT centrale di un'università supporta 6.000 dipendenti e gestisce un service desk, un team di piattaforma e diversi team di prodotto. I numeri seguenti sono illustrativi.

Una nuova responsabile IT vuole capire perché le lamentele del personale sull'onboarding persistano mentre i tempi di risoluzione del service desk rientrano nell'obiettivo. Chiede alla responsabile del servizio di avviare un programma pilota di esperienza per i nuovi assunti e per il principale strumento di collaborazione, costruito insieme al consiglio del personale. La condizione del consiglio è una promessa scritta che nessun dato verrà usato sugli individui, e il consiglio accetta di rivedere il piano.

Il team misura la prontezza al primo giorno e il tempo alla produttività per i 140 nuovi assunti dell'ultimo trimestre, usando il tracker di onboarding e una conferma a una domanda da parte dell'assunto e del suo responsabile. Solo il 46 percento dei nuovi assunti aveva tutte le voci concordate funzionanti il primo giorno, e il tempo mediano alla produttività era di 4 giorni, con un 85° percentile di 9 giorni. Le ragioni, emerse dalle interviste, sono tre richieste distinte che attendono ciascuna un team diverso e una fase di imaging del portatile che termina tardi il venerdì. Un breve pulse sullo strumento di collaborazione, inviato a un decimo del personale a rotazione con una dimensione minima di gruppo di 10, mostra valutazioni più basse tra il personale che lavora la sera e nel fine settimana. I log degli endpoint, aggregati per edificio e turno, mostrano in media 38 minuti al mese di richieste di riavvio e di aggiornamento forzati, con una lunga coda per il personale dei turni notturni, che subisce riavvii durante l'orario di lavoro perché i suoi dispositivi si aggiornano quando gli altri dormono.

Il team apporta tre modifiche. Una singola richiesta di onboarding sostituisce le tre, con un responsabile designato. La fase di imaging si sposta in una finestra infrasettimanale. La pianificazione degli aggiornamenti ottiene una finestra di rinvio legata all'orario di lavoro dell'utente. Pubblicano le regole di privacy nel registro delle metriche: dimensione minima del gruppo di 10, nessun dato individuale in alcun rapporto e un limite di conservazione di sei mesi per i log grezzi. Tre mesi dopo, la prontezza al primo giorno sale all'81 percento, il tempo alla produttività all'85° percentile scende a 5 giorni e i minuti di interruzione forzata per il personale notturno si dimezzano circa. Un dirigente chiede alla responsabile IT di riferire quali dipartimenti hanno più reclami, per indicare dei team su cui intervenire. Lei rifiuta di classificare i dipartimenti e si offre di condividere gli schemi a livello di gruppo e di correggere le cause. La decisione è registrata nel registro delle decisioni, e il consiglio chiede di estendere il programma a un secondo strumento.

## Lente di settore

**Startup.** Tutti parlano con tutti, perciò osservazione e conversazione troveranno la maggior parte dell'attrito. Si renda eccellente l'esperienza del primo giorno, perché dà il tono, e si mantenga minima la telemetria. Si mettano per iscritto presto le promesse sulla privacy, anche se il team è piccolo.

**Piccola impresa.** Un solo amministratore può gestire onboarding e supporto. Si usi una checklist semplice e si chieda a ogni nuovo assunto che cosa mancava. Si faccia attenzione ai dati di gruppi piccoli: con una dozzina di dipendenti, quasi ogni scomposizione identifica qualcuno, perciò ci si affidi alla conversazione.

**Grande impresa.** Patrimoni informatici ampi e variegati rendono la segmentazione utile e rischiosa. Si segmenti per famiglia di ruoli, tipo di sede e classe di dispositivo anziché per team, si applichi una dimensione minima del gruppo e si coinvolgano i rappresentanti del personale. Si allinei il programma con le funzioni di sicurezza, legali e di privacy fin dall'inizio.

**Pubblica amministrazione e settore pubblico.** I doveri in materia di accessibilità, parità e privacy sono spesso previsti dalla legge, e comitati aziendali o sindacati possono avere ruoli formali. Si trattino i test di accessibilità e la consultazione come parti obbligatorie del programma, si pubblichino le regole di privacy e si eviti di raccogliere dati non chiaramente necessari. Dove i dati del personale sono soggetti a regolamentazione, si coinvolga il responsabile della protezione dei dati (si veda l'argomento 8.5, Rendicontazione regolamentata e governativa).

## Business case: motivazioni, ROI e TCO

I costi sono modesti. I sondaggi pulse e l'osservazione richiedono il tempo delle persone e uno strumento di sondaggio. I dati degli endpoint provengono di solito da strumenti già distribuiti, anche se l'analisi e la revisione della privacy richiedono impegno. Il costo maggiore è la disponibilità a correggere ciò che si trova, il che può significare cambiare processi di onboarding, policy dei dispositivi e pratiche di aggiornamento tra team.

Il ritorno si presenta come tempo recuperato, avvio più rapido dei nuovi assunti, meno contatti di supporto causati da attrito evitabile e meno shadow IT. Si può costruire il caso a partire dai propri numeri: i minuti di interruzione forzata per persona, i giorni alla produttività dei nuovi assunti e i contatti di supporto per problemi che una correzione ha eliminato. Si sia cauti con una singola cifra di produttività derivata da stipendio e minuti, perché poggia su ipotesi su quanto valga un minuto recuperato. C'è anche un costo di rischio sull'altro lato del bilancio: raccogliere troppi dati sul personale può creare esposizione giuridica e danneggiare la fiducia. Lo si includa nel costo totale di proprietà.

## Anti-pattern e insidie

- **Usare i dati di esperienza per giudicare gli individui.** Trasforma un programma di supporto in sorveglianza e pone fine al feedback onesto. Si aggreghi, si sopprimano i gruppi piccoli e lo si dichiari.
- **Misurare solo le medie.** Le persone con l'esperienza peggiore restano nascoste. Si osservino la coda e i gruppi meno serviti.
- **Raccogliere tutto perché è possibile.** Più dati portano più rischio. Si raccolga ciò che risponde a una domanda.
- **Interpellare senza tregua.** Le persone smettono di rispondere. Si ruotino gli strumenti e si mantenga breve il sondaggio.
- **Punire le soluzioni di ripiego.** Le persone le nascondono e il bisogno sottostante resta insoddisfatto. Si impari da esse.
- **Mettere sicurezza ed esperienza in stanze separate.** Alcuni controlli valgono il loro costo, molti no. Si discuta il compromesso con i numeri.
- **Considerare il primo giorno un problema di qualcun altro.** L'onboarding attraversa risorse umane, IT e responsabile. Gli si dia un unico responsabile.
- **Ignorare l'accessibilità finché non arriva un reclamo.** Si costruisca e si testi con le persone interessate fin dall'inizio.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Comprensione dell'attrito | Solo reclami | Interviste occasionali o un sondaggio | Osservazione regolare e pulse per strumenti e momenti chiave | Evidenze combinate di sondaggio, sistema e conversazione, segmentate in sicurezza | Visione congiunta con risorse umane, servizi generali e fornitori; il personale co-possiede le priorità |
| Privacy ed etica | Nessuna regola dichiarata | Attenzione informale | Regole scritte su scopo, minimizzazione e dimensione dei gruppi | Regole riviste in modo indipendente; conformità misurata | Regole co-progettate con i rappresentanti del personale e sottoposte ad audit presso i fornitori |
| Azione | Correzioni su reclamo | Correzioni ad hoc | Principale attrito a backlog con responsabili | Correzioni finanziate, monitorate e annunciate; interruzioni pianificate attorno al lavoro | Miglioramenti dell'esperienza integrati nella pianificazione tra team e fornitori |

## Checklist

- [ ] I momenti chiave (primo giorno, guasto di un dispositivo, richiesta di accesso, trasferimento, uscita) sono mappati con i responsabili.
- [ ] Prontezza al primo giorno e tempo alla produttività sono misurati con un elenco scritto e con orologi definiti.
- [ ] Un breve pulse copre a rotazione gli strumenti nominati.
- [ ] I minuti di interruzione forzata sono misurati per gruppo e rivisti con la sicurezza.
- [ ] Le richieste di accessibilità sono contrassegnate, monitorate e confermate dal richiedente.
- [ ] I rapporti usano una dimensione minima del gruppo e non mostrano mai individui.
- [ ] Esiste ed è condivisa una dichiarazione scritta di scopo e limiti per i dati di esperienza.
- [ ] I rappresentanti del personale hanno rivisto il piano dei dati dove tali organismi esistono.
- [ ] Le soluzioni di ripiego sono raccolte e riviste come feedback.
- [ ] Risultati e correzioni sono condivisi con il personale ogni trimestre.

## Prompt IA

**Mappare un momento che conta.**

```text
Vogliamo migliorare [momento, per esempio il primo giorno di un nuovo assunto]
in [tipo di organizzazione]. I passaggi oggi sono: [elenca i passaggi e chi è
responsabile di ciascuno]. Disegna una mappa testuale che mostri passaggi di
consegne e attese, suggerisci dove l'attrito è probabile e proponi, per ogni
passaggio principale, una misura tra ciò che le persone dicono, una tra ciò che
i sistemi registrano e una dall'osservazione. Non inventare cifre. Elenca le tue
ipotesi e le domande che dovrei porre al personale.
```

**Redigere una dichiarazione sulla privacy per un programma di esperienza.**

```text
Redigi una dichiarazione di una pagina, in linguaggio semplice, per il personale
su un programma di esperienza in [tipo di organizzazione] in [giurisdizione].
Raccogliamo: [elenca i dati]. Il nostro scopo è [scopo]. Includi ciò che non
faremo (per esempio usare dati sugli individui), la dimensione minima del gruppo
[numero], la conservazione [periodo], chi può vedere i dati grezzi e come il
personale può sollevare dubbi. Segnala tutto ciò che dovrei rivedere con uno
specialista della privacy o con i rappresentanti del personale. Non trarre
conclusioni legali. Elenca le tue ipotesi.
```

**Analizzare i commenti pulse su uno strumento.**

```text
Ecco [numero] commenti anonimizzati su [strumento] relativi a [periodo]:
[incolla i commenti privi di dati personali]. Raggruppali in temi di attrito,
conta ciascun tema, fornisci due citazioni rappresentative per ognuno e
suggerisci quali temi possano indicare una causa correggibile e quali un
bisogno di formazione. Non identificare le persone né dedurre motivazioni.
Elenca le tue ipotesi e che cosa una persona dovrebbe verificare prima di
agire.
```

**Pianificare una riduzione delle interruzioni.**

```text
I nostri endpoint ricevono in media [numero] interruzioni pianificate per
persona al mese: [elenca tipi e frequenze]. Requisiti di sicurezza: [elenco].
Proponi uno schema che riduca l'interruzione del tempo di concentrazione (per
esempio finestre di rinvio, raggruppamento, pianificazione in base all'orario di
lavoro) rispettando i requisiti, e descrivi come misurare se funziona senza
tracciare gli individui. Elenca le tue ipotesi e i compromessi che dovrei
discutere con la sicurezza.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare il guardrail abbinato a una metrica di esperienza o di attrito prima di pubblicarla.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una voce di metrica di esperienza rivista mantenga il proprio vettore di manipolazione, il proprio guardrail e le proprie regole di privacy.

## Punti chiave

- L'obiettivo è dare a persone motivate l'ambiente e il supporto di cui hanno bisogno, quindi si misuri l'attrito e lo si rimuova.
- Si combinino domande pulse, misure di sistema e osservazione, e si guardi ai gruppi ai margini.
- Si contino i minuti persi e le interruzioni causate dalle stesse azioni dell'IT, e si pianifichi attorno alla concentrazione delle persone.
- Si faccia della privacy una regola di progettazione: minimizzare, aggregare, sopprimere i gruppi piccoli e non giudicare mai gli individui.
- Si trattino le soluzioni di ripiego come feedback e si dica al personale che cosa si è corretto.
- Si includa l'accessibilità fin dall'inizio e si riveda il programma con le persone che serve.

## Riferimenti e letture di approfondimento

1. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
3. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
4. Csikszentmihalyi, M., *Flow: The Psychology of Optimal Experience*, Harper & Row, 1990.
5. Sweller, J., "Cognitive load during problem solving: Effects on learning," *Cognitive Science*, 12(2), 1988.
6. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
7. Sweeney, L., "k-anonymity: a model for protecting privacy," *International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems*, 10(5), 2002.
8. Wikipedia, [Employee experience management](https://en.wikipedia.org/wiki/Employee_experience_management).
9. Wikipedia, [Digital workplace](https://en.wikipedia.org/wiki/Digital_workplace).
10. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
11. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
12. Wikipedia, [Employee monitoring](https://en.wikipedia.org/wiki/Employee_monitoring).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility).
15. Wikipedia, [Data minimization](https://en.wikipedia.org/wiki/Data_minimization).
16. Wikipedia, [Pseudonymization](https://en.wikipedia.org/wiki/Pseudonymization).
17. Wikipedia, [K-anonymity](https://en.wikipedia.org/wiki/K-anonymity).
18. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
