# Una roadmap di adozione incrementale

**Partire da dove ci si trova, offrire qualcosa di utile a un team nel primo mese e far crescere il programma a piccoli passi, ciascuno dei quali si guadagna il diritto al successivo.**

## Panoramica e motivazione

Gran parte delle indicazioni sulle metriche descrive uno stato finale: un insieme completo di misure, un archivio di dati pulito, una dashboard per ogni pubblico, una cultura delle evidenze. Poche organizzazioni ci arrivano per progetto. Ci arrivano, quando accade, attraverso una serie di piccoli passi utili, ciascuno dei quali si è ripagato prima che iniziasse il successivo. Questo argomento propone una roadmap in tale spirito: i primi 30 giorni, i 60 successivi e altri 90, che insieme fanno circa 180 giorni. Le tempistiche sono una forma approssimativa e non una promessa. Un team piccolo può muoversi più in fretta, e uno grande o prudente più lentamente.

La logica è la stessa logica di consegna continua che il resto del libro raccomanda per i servizi. Consegnare presto una fetta sottile e funzionante. Metterla davanti a utenti reali. Imparare da ciò che ne fanno. Estendere ciò che ha aiutato e abbandonare ciò che non è servito. Un programma di metriche che spende sei mesi in progettazione e lancia una dashboard completa davanti a un pubblico sorpreso ripete il vecchio errore del grande rilascio: molto sforzo, riscontro tardivo e alta probabilità che il risultato si adatti male. L'idea di [prodotto minimo funzionante](https://en.wikipedia.org/wiki/Minimum_viable_product) (minimum viable product), la versione più piccola di qualcosa che offre valore e genera apprendimento, vale per un programma come per un prodotto.

Gli obiettivi agili danno forma alla roadmap in diversi modi. Il coinvolgimento continuo degli stakeholder significa che le prime settimane si trascorrono con le persone che useranno i numeri e ne saranno misurate, non in una stanza sul retro. Il miglioramento continuo significa che il piano stesso viene rivisto e modificato man mano che il programma impara, nello spirito del [kaizen](https://en.wikipedia.org/wiki/Kaizen), la pratica del miglioramento piccolo e costante da parte di tutti. L'evoluzione costante significa che nessun elenco di misure è definitivo. Un ritmo sostenibile significa che la roadmap chiede una quota modesta del tempo di un team e che il programma non aggiunge un onere di rendicontazione che superi il suo aiuto. E costruire attorno a persone motivate significa iniziare con i volontari e con le domande che a loro importano.

La roadmap rispetta gli altri argomenti di questa parte. Presuppone le regole di base della fiducia dell'argomento sull'introduzione (vedere l'Argomento 11.3 «Introdurre le metriche senza generare paura»), usa i principi della dashboard (vedere l'Argomento 11.1 «Progettare una dashboard delle metriche di servizio»), mantiene sottili gli strumenti finché il valore non è dimostrato (vedere l'Argomento 11.2 «Panorama degli strumenti») e monitora i progressi con il profilo di maturità del programma (vedere l'Argomento 11.4 «Modello di maturità per i programmi di metriche»).

Tre idee aiutano a ancorare il lavoro iniziale. Primo, partire da una base di riferimento. Un [run chart](https://en.wikipedia.org/wiki/Run_chart) di alcuni mesi di dati esistenti mostra come stanno le cose e dà ai cambiamenti successivi qualcosa con cui essere confrontati. Secondo, verificare la [qualità dei dati](https://en.wikipedia.org/wiki/Data_quality) all'inizio, poiché i miglioramenti iniziali più preziosi spesso derivano dal correggere il modo in cui il lavoro viene registrato e non da un grafico. Terzo, rendere visibili i risultati: un [information radiator](https://en.wikipedia.org/wiki/Information_radiator), una visualizzazione che mostra le informazioni a colpo d'occhio senza che nessuno le chieda, aiuta un team a vedere i propri dati e ad avviare conversazioni. I primi passi assumono di solito la forma di un [progetto pilota](https://en.wikipedia.org/wiki/Pilot_project) con partecipanti disponibili, seguito dalla diffusione di ciò che ha funzionato come [gestione del cambiamento](https://en.wikipedia.org/wiki/Change_management) nell'organizzazione più ampia (vedere l'Argomento 9.6 «Metriche di cambiamento organizzativo e adozione»).

Nessuna roadmap si adatta a ogni organizzazione. Il piano seguente è un punto di partenza da adattare da parte delle persone che lo realizzeranno.

## Principi chiave

- **Partire da dove ci si trova.** Usare i dati, gli strumenti e le abitudini che si hanno. Non attendere una nuova piattaforma.
- **Fare un pilota con volontari.** Da uno a tre team disponibili, che lavorano su domande che a loro importano.
- **Offrire valore nel primo mese.** Qualcosa che aiuti un team, non un rapporto per la direzione.
- **Una fetta sottile alla volta.** Una fonte, una vista, una manciata di misure, poi estendere.
- **Scrivere presto le promesse.** Una breve carta prima che sia condiviso il primo numero.
- **Rivedere e adattare.** Verificare alla fine di ogni fase che cosa ha aiutato, che cosa ha danneggiato e che cosa cambiare.
- **Fermare cose.** Ritirare le misure e i rapporti che nessuno usa man mano che arrivano i nuovi.
- **Non saltare la fiducia.** Procedere in fretta sugli strumenti lasciando indietro la fiducia produce distorsione.

## Definizioni delle metriche

Le misure seguenti monitorano l'avanzamento dell'adozione stessa. Sono destinate al team di programma e ai sostenitori e si leggono come segnali, non come obiettivi. Evitano i conteggi di dashboard o rapporti, che premierebbero l'attività.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tempo al primo risultato utile | Tempo trascorso dall'avvio del programma alla prima misura che un team pilota dichiara l'abbia aiutato a fare una modifica | giorni dall'avvio al primo uso utile confermato dal team | giorni | Registro del programma; conferma del team | Miglioramento continuo | Consegna anticipata e continua di valore | Una volta, poi per ogni nuovo team |
| Team che usano attivamente le misure | Quota dei team invitati che hanno usato le proprie misure in una revisione nel periodo, secondo il proprio resoconto | team che hanno usato le misure in una revisione / team invitati | percentuale | Conferma del team; note di revisione | Gestione del cambiamento organizzativo | Coinvolgimento continuo degli stakeholder | Mensile |
| Miglioramenti ricondotti alle misure | Numero di modifiche che i team hanno fatto e che attribuiscono, con motivazioni, a ciò che una misura ha mostrato | conteggio delle modifiche segnalate dai team con un legame dichiarato a una misura | conteggio | Registro dei miglioramenti | Miglioramento continuo | Esperimenti guidati dalle evidenze | Trimestrale |
| Misure e rapporti ritirati | Misure o rapporti interrotti perché non informavano più le decisioni | conteggio dei ritirati per trimestre | conteggio | Registro delle modifiche del catalogo | Miglioramento continuo | Evoluzione costante | Trimestrale |
| Copertura della base di riferimento | Quota delle misure concordate che hanno una base di riferimento registrata di almeno alcuni mesi | misure con una base di riferimento / misure concordate | percentuale | Catalogo delle metriche | Gestione dei livelli di servizio; miglioramento continuo | Evidenze al posto delle opinioni | Trimestrale |
| Quota di sforzo del programma | Quota del tempo dei team partecipanti dedicata alle attività di misurazione | ore di raccolta, rendicontazione e revisione / ore totali del team, per stima | percentuale | Stime di tempo dei team | Miglioramento continuo | Ritmo sostenibile | Trimestrale |
| Completamento delle revisioni di fase | Quota delle revisioni di fase pianificate tenute con i team, con le modifiche registrate | revisioni tenute con modifiche registrate / revisioni pianificate | percentuale | Registri del programma | Miglioramento continuo | Riflessione periodica | Per fase |

Il tempo al primo risultato utile si misura in base al resoconto del team pilota e non a quello del programma. I team che usano attivamente le misure si contano in base a ciò che dicono i team, e non agli accessi. I miglioramenti ricondotti alle misure sono un conteggio di legami dichiarati e non un obiettivo, poiché un obiettivo produrrebbe legami inventati. La quota di sforzo del programma dovrebbe restare piccola, e un aumento è un avvertimento.

## Raccomandazioni

### Giorni da 1 a 30: ascoltare, concordare e offrire una cosa utile

**1. Trovare un sostenitore e alcuni volontari.** Chiedere a un dirigente di alto livello di sostenere il programma e firmare una breve carta. Invitare da uno a tre team curiosi e rispettati. Spiegare che lo scopo è aiutarli a vedere il proprio lavoro e a migliorarlo, e che i dati non saranno usati per classificare o valutare singole persone (vedere l'Argomento 11.3 «Introdurre le metriche senza generare paura»).

**2. Porre le domande.** Incontrare ogni team pilota per un'ora. Chiedere che cosa li rallenta, che cosa li sorprende e che cosa vorrebbero sapere. Scrivere le domande. Scegliere da tre a cinque misure di questo libro che rispondano a quelle domande, ciascuna con una salvaguardia compagna (vedere l'Argomento 1.3 «Risultati prima della produzione: scegliere cosa misurare»).

**3. Guardare i dati che già si hanno.** Estrarre alcuni mesi di storico dai sistemi di registrazione e tracciare i run chart. Verificare onestamente la qualità dei dati: campi mancanti, categorie cambiate, registrazioni create a posteriori. Correggere l'acquisizione alla fonte dove costa poco. In questa fase basta un semplice foglio di calcolo (vedere l'Argomento 1.5 «Fonti dei dati e strumentazione»).

**4. Offrire una cosa utile.** Entro la fine del primo mese, dare a ciascun team pilota una piccola vista dei propri dati con una definizione per ogni misura e tenere una conversazione di revisione. Cercare una modifica suggerita dai dati, come eliminare un passaggio di attesa, e aiutare il team a provarla. Il primo risultato utile conta più di uno strumento rifinito.

### Giorni da 31 a 90: imparare, estendere e renderlo routine

**5. Tenere la prima revisione con i team pilota.** Chiedere che cosa ha aiutato, che cosa ha confuso, che cosa è sembrato rischioso e che cosa cambierebbero. Rivedere le misure, le definizioni e la carta. Ascoltare in particolare i segnali di paura o di gaming. Condividere una breve storia di ciò che è cambiato, raccontata dal team.

**6. Automatizzare il percorso sottile.** Dove il lavoro manuale è gravoso, automatizzare i due flussi che contano di più, con controlli sull'aggiornamento e riconciliazione con la fonte. Tenere le definizioni in un catalogo semplice e portabile. Non acquistare ancora una piattaforma, a meno che la prova non abbia mostrato che gli strumenti esistenti non possono svolgere il compito (vedere l'Argomento 11.2 «Panorama degli strumenti»).

**7. Stabilire un ritmo di revisione.** Tenere una breve revisione mensile in ciascun team pilota che esamini gli andamenti, registri le decisioni e annoti gli eventi. Includere la possibilità di dire «nessuna azione». Aggiungere ogni trimestre uno sguardo all'intero programma con i sostenitori, usando viste aggregate e commenti dei team.

**8. Invitare l'ondata successiva.** Proporre l'approccio ad altri team, guidati dalle storie dei team pilota. Lasciare che ogni nuovo team scelga le proprie misure da un menu, con un piccolo nucleo comune. Mantenere il ritmo sostenibile: pochi team alla volta, con il supporto dei team pilota e del responsabile del programma.

### Giorni da 91 a 180: rafforzare, bilanciare e prepararsi al passaggio di consegne

**9. Progettare le viste per pubblico.** Con il pubblico, progettare le viste per i responsabili di servizio e per la dirigenza descritte nell'argomento sulla dashboard, usando definizioni condivise e i commenti dei team (vedere l'Argomento 11.1 «Progettare una dashboard delle metriche di servizio»). Mantenere ogni vista piccola. Ritirare i rapporti precedenti che sostituiscono.

**10. Aggiungere equilibrio e risultati.** Estendere le misure del pilota a un insieme equilibrato che comprenda qualità, affidabilità, esperienza e costo, con i risultati accanto all'attività (vedere l'Argomento 6.5 «Realizzazione del valore e risultati di business»). Verificare per ogni nuova misura il vettore di gaming e la salvaguardia prima che sia mostrata.

**11. Valutare il programma.** Condurre l'autovalutazione dell'argomento sul modello di maturità con ciascun team partecipante, riportare il profilo e i temi e scegliere uno o due passi successivi nella dimensione che limita le altre (vedere l'Argomento 11.4 «Modello di maturità per i programmi di metriche»). Contare ciò che si è ritirato oltre a ciò che si è aggiunto.

**12. Decidere che cosa viene dopo.** Alla revisione dei 180 giorni, con team e sostenitori, decidere se continuare, adattare o fermarsi. Scrivere che cosa ha fatto il programma, con quale sforzo e che cosa è cambiato nei servizi. Scegliere la fase successiva: più team, strumenti più approfonditi, collegamenti con le misure finanziarie o dei clienti, oppure consolidamento. Registrare la decisione e le ragioni.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Tempo al primo risultato utile | Dichiarare utile una modifica banale; affrettare un risultato di facciata | Chiedere al team che cosa è cambiato; verificare che la modifica sia durata |
| Team che usano attivamente le misure | Revisioni tenute per spuntare una casella; dichiarare un uso che non c'è stato | Chiedere la decisione presa; verificare a campione le note di revisione; parlare con i team |
| Miglioramenti ricondotti alle misure | Inventare legami per raggiungere un conteggio; rivendicare meriti per modifiche non correlate | Mantenerla descrittiva; chiedere al team il ragionamento; accettare i legami incerti come tali |
| Misure e rapporti ritirati | Ritirare misure scomode; ritirare e reintrodurre con nomi nuovi | Rivedere l'elenco dei ritirati cercando andamenti sfavorevoli; richiedere un motivo dichiarato |
| Copertura della base di riferimento | Fabbricare lo storico; usare un periodo che favorisce i risultati successivi | Registrare fonte e periodo; conservare i dati grezzi; scegliere le basi di riferimento prima delle modifiche |
| Quota di sforzo del programma | Sottostimare lo sforzo; spostare il lavoro su persone esterne al conteggio | Chiedere alle persone che svolgono il lavoro; confrontare con gli straordinari di fine ciclo |
| Completamento delle revisioni di fase | Revisioni brevi e di routine; registrare modifiche che non avvengono mai | Verificare che le modifiche siano attuate; chiedere ai team se la revisione ha valso il loro tempo |

Una lettura sana mostra un primo risultato utile entro il primo mese o i primi due, team che usano le misure perché le trovano utili, una manciata di modifiche attribuite, rapporti ritirati accanto ai nuovi, una quota di sforzo modesta e stabile e revisioni di fase che portano a cambiamenti reali nel piano.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Pilota con volontari | Fiducia; storie reali | Avvio più lento; distorsione di selezione |
| Introduzione a tutti i team insieme | Copertura rapida | Resistenza; distorsione |
| Prima i fogli di calcolo | Rapidi; basso costo; apprendimento | Fragili; sforzo manuale |
| Prima la piattaforma | Rifinitura; scala | Costo; adeguatezza scarsa prima che le domande siano chiare |
| Poche misure per team | Concentrazione; basso onere | Può trascurare ambiti importanti |
| Molte misure insieme | Ampiezza | Sovraccarico; proliferazione |
| Piano fisso di 180 giorni | Chiarezza per i sostenitori | Rigido; ignora ciò che si impara |
| Revisioni di fase che modificano il piano | Apprendimento; adeguatezza | Meno prevedibile per i sostenitori |

La risposta in prosa è iniziare con volontari e fogli di calcolo, estendere man mano che il valore viene dimostrato, dare ai sostenitori una forma chiara e punti di revisione e consentire al piano di cambiare.

## Domande da discutere con il team

**1. Qual è una domanda a cui vorremmo poter rispondere sul nostro lavoro questo mese?**
Raccogliere domande da tutti. Scegliere quella che conta di più e a cui si potrebbe rispondere con dati che già abbiamo. Concordare che aspetto avrebbe una risposta utile.

**2. Che cosa misuriamo già, e chi lo guarda?**
Elencare i rapporti esistenti e i loro pubblici. Segnare quelli che nessuno usa. Decidere quali ritirare per fare spazio ai nuovi.

**3. Che cosa ci renderebbe disposti a provare per un mese?**
Ascoltare le condizioni: una carta, voce in capitolo sulle misure, tempo limitato. Concordarle con il sostenitore prima di iniziare.

**4. Quale piccola modifica potrebbero suggerire i primi dati?**
Guardare insieme alcuni mesi di storico. Indicare una possibile modifica e un risultato atteso. Concordare come capiremo se ha aiutato.

**5. Quanto del nostro tempo possiamo dedicarvi senza danneggiare il lavoro?**
Stimare in ore al mese. Concordare un limite e rivederlo alla prima revisione di fase.

**6. Quando dovremmo fermarci o cambiare il piano?**
Descrivere i segnali: nessun risultato utile, paura crescente, sforzo gravoso. Concordare chi decide e come la decisione verrà registrata.

## Quattro prospettive

### Team di prodotto e di consegna

I team pilota portano il rischio iniziale e forniscono la prova iniziale. Dovrebbero chiedere la carta, scegliere le proprie misure, usare le prime viste nelle proprie revisioni e riferire onestamente che cosa ha aiutato e che cosa no. Ne traggono beneficio quando il primo risultato rimuove un ostacolo reale.

### Team di servizio e operations

I team operativi forniscono gran parte dei dati e spesso hanno il carico maggiore. Dovrebbero aiutare a valutare la qualità dei dati, segnalare dove una misura premierebbe il comportamento sbagliato e proteggere il tempo per il lavoro di reperibilità e sugli incidenti. Il loro ritmo sostenibile è un vincolo fisso per il piano.

### Leadership e governance

I dirigenti sostengono, firmano la carta e proteggono il programma dall'uso improprio. Dovrebbero accettare un avvio modesto, chiedere risultati e storie anziché conteggi di dashboard, evitare di chiedere classifiche e lasciare che il piano cambi man mano che il programma impara. Dovrebbero giudicarlo dalle decisioni che sono migliorate.

### Clienti e utenti

Clienti e utenti ne traggono vantaggio quando il programma porta a servizi migliori. Possono partecipare alla scelta delle misure di esperienza e alla revisione di ciò che viene raccolto su di loro. Dovrebbero vedere modifiche che derivano dal loro riscontro.

## In pratica: un esempio di ITIL agile

Un'azienda di trasporto pubblico di medie dimensioni ha 12 team tra servizi digitali, tecnologia operativa e un service desk. Un nuovo direttore dei sistemi informativi vuole «un programma di metriche in sei mesi». Un precedente tentativo aveva acquistato una piattaforma e prodotto dashboard che pochi aprivano. Le cifre seguenti sono illustrative.

La responsabile del miglioramento dei servizi propone una roadmap di 180 giorni con revisioni di fase ai giorni 30, 90 e 180. Nella prima settimana incontra il direttore dei sistemi informativi, che firma una carta di una pagina, e invita tre team volontari: il service desk, un team di informazione ai passeggeri e un team di operazioni dell'infrastruttura. In sessioni di un'ora ciascun team espone le proprie domande. Il service desk vuole sapere perché gli stessi problemi dei clienti ritornano. Il team di informazione ai passeggeri vuole sapere se le proprie modifiche rompono qualcosa. Il team dell'infrastruttura vuole sapere quanto del proprio tempo vada al lavoro non pianificato.

Per ciascun team sceglie da tre a cinque misure di questo libro, con le salvaguardie, e costruisce run chart in un foglio di calcolo condiviso a partire dai cinque mesi precedenti di dati. Il controllo dei dati rileva che il 27 per cento delle registrazioni di modifica del team di informazione ai passeggeri era stato creato dopo la distribuzione e che le categorie del service desk erano state riorganizzate a metà del periodo. Correggere l'abitudine di inserimento e mappare le categorie richiede due settimane. Al giorno 27 il service desk vede che il 19 per cento dei contatti erano ritorni entro una settimana, concentrati in due categorie legate a una pagina degli orari confusa. Il team lavora con quello di informazione ai passeggeri per modificare la pagina. Il service desk lo conferma come primo risultato utile, al giorno 27.

Alla revisione del giorno 30 i team chiedono definizioni più brevi e un numero minore di grafici, e uno chiede se i dati verranno usati nelle proprie valutazioni annuali. La carta viene chiarita per dire che non lo saranno. Tra i giorni 31 e 90, la responsabile automatizza due flussi, imposta in ciascun team una revisione mensile che registra le decisioni e invita altri quattro team sulla base delle storie del pilota. I team che usano attivamente le misure sono 7 su 7 invitati. Alla revisione del giorno 90, i team riferiscono cinque modifiche che attribuiscono alle proprie misure. Il programma ha ritirato tre vecchi rapporti settimanali. La quota di sforzo è stimata al 3 per cento del tempo dei team. Tra i giorni 91 e 180, la responsabile progetta con i rispettivi pubblici le viste per i responsabili di servizio e per la dirigenza, aggiunge misure di esperienza e di costo all'insieme equilibrato e conduce l'autovalutazione: la maggior parte dei team è al Livello 2 nell'uso nelle decisioni e al 3 in fiducia e sicurezza, e il passo successivo scelto è un registro delle decisioni in ogni team. Al giorno 180 il direttore dei sistemi informativi chiede una classifica di tutti i 12 team per maturità. La responsabile offre il profilo aggregato e i temi, spiega la carta e la richiesta viene lasciata cadere. I sostenitori concordano di estendere il programma ai cinque team rimanenti nei due trimestri successivi, sempre su base volontaria.

## Lente di settore

**Startup.** Comprimere la roadmap. Entro due settimane, concordare tre domande e due o tre misure e guardarle insieme ogni settimana o ogni quindici giorni. Usare ciò che si ha già. Riesaminare dopo un trimestre. Una startup che aspetta di costruire gli strumenti perderà l'abitudine di guardare.

**Piccola impresa.** I primi 30 giorni possono essere una sola conversazione, un elenco di domande di una pagina, un foglio di calcolo e una modifica. Le fasi successive comportano uno sguardo mensile regolare. Il rischio principale è che la persona che l'ha impostato diventi l'unica a comprenderlo, quindi scrivere che cosa significa ciascuna misura.

**Grande impresa.** Usare ondate di volontari, un piccolo team centrale che supporta e non possiede le misure, definizioni condivise e revisioni di fase con i sostenitori. Resistere a un'unica data globale. Aspettarsi di spendere la prima fase a correggere l'acquisizione dei dati e pianificare il coordinamento con sicurezza, privacy e comitati aziendali o rappresentanti del personale dove esistono.

**Pubblica amministrazione e settore pubblico.** La consultazione dei rappresentanti del personale e una comunicazione chiara agli organismi di controllo fanno parte del lavoro iniziale. I cicli di acquisto spesso favoriscono l'avvio con strumenti già posseduti. Tenere separata la rendicontazione obbligatoria dalle misure di miglioramento e documentare le decisioni per l'audit (vedere l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi dei primi 180 giorni sono soprattutto il tempo delle persone: il responsabile del programma, un piccolo sforzo di analisi, una quota del tempo dei team pilota e l'attenzione dei sostenitori. I costi degli strumenti possono essere bassi o nulli nelle prime fasi. Il costo maggiore è quello di sbagliare i primi passi, per esempio lanciando misure senza fiducia.

I ritorni compaiono presto se il primo passo è ben scelto: una modifica suggerita dai dati, rapporti ritirati, meno dispute sui numeri e team che chiedono di più. Costruire il caso a partire dalla propria documentazione: giorni al primo risultato utile, modifiche che i team attribuiscono alle misure, ore risparmiate sui rapporti ritirati e sforzo speso. Evitare di citare cifre esterne sui ritorni dell'analisi dei dati senza una fonte rintracciabile e pertinente al proprio contesto. L'affermazione credibile è modesta e locale (vedere l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Il lancio big bang.** Mesi di progettazione, poi una sorpresa. Consegnare presto una fetta sottile.
- **Prima la piattaforma.** Gli strumenti arrivano prima delle domande. Partire da ciò che si ha.
- **Contare le dashboard.** Si misura l'attività e si ignora il valore. Monitorare decisioni e modifiche.
- **Saltare la carta.** La paura riempie il vuoto. Scrivere le promesse prima che sia mostrato il primo numero.
- **Troppi team insieme.** Il supporto collassa. Diffondere a piccole ondate.
- **Non fermare mai nulla.** I vecchi rapporti restano accanto ai nuovi. Ritirare man mano che si aggiunge.
- **Un piano fisso difeso contro le evidenze.** Il piano dovrebbe cambiare man mano che si impara.
- **Rinunciare dopo il primo errore.** I primi tentativi insegnano. Rivedere, adattare e riprovare.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Avvio e pilota | Nessun piano; rapporti ad hoc | Team interessati provano le misure da soli | Carta, sostenitore e piloti volontari con un primo risultato utile | L'apprendimento dei piloti guida i piani delle ondate; tempo al valore monitorato | I team diffondono l'approccio tra loro; sostenitori e partner si uniscono |
| Estensione e cadenza | Iniziative una tantum | Alcune revisioni regolari | Revisioni mensili dei team e revisioni trimestrali del programma | Quota di sforzo, ritiro e modifiche attribuite gestiti | Le revisioni si collegano tra team e servizi; la cadenza si adatta alle esigenze |
| Apprendimento e adattamento | Piano fisso o assente | Occasionali lezioni condivise | Le revisioni di fase modificano il piano | Passi della roadmap legati al profilo di maturità | Il programma migliora continuamente grazie ai contributi di tutti |

## Checklist

- [ ] Un sostenitore ha firmato una breve carta prima che sia condiviso il primo numero.
- [ ] Da uno a tre team volontari hanno espresso le proprie domande con parole proprie.
- [ ] Per ogni misura del pilota esistono una base di riferimento di alcuni mesi di dati e un controllo della qualità dei dati.
- [ ] Ogni team pilota ha una piccola vista con una definizione per ogni misura.
- [ ] Un primo risultato utile è consegnato, e confermato dal team, entro il primo mese o i primi due.
- [ ] In ogni team pilota esiste un ritmo di revisione che registra le decisioni.
- [ ] I vecchi rapporti sono ritirati man mano che le nuove viste li sostituiscono.
- [ ] Lo sforzo che il programma chiede ai team è stimato e mantenuto ridotto.
- [ ] Le revisioni di fase ai giorni 30, 90 e 180 sono tenute con i team, e il piano cambia di conseguenza.
- [ ] La fase successiva è decisa con team e sostenitori e registrata con le motivazioni.

## Prompt IA

**Redigere un piano di 180 giorni.**

```text
Redigi una roadmap di 180 giorni per introdurre un programma di metriche di
servizio in [tipo di organizzazione] con [numero] team. Usa revisioni di fase ai
giorni 30, 90 e 180. Per ogni fase elenca gli obiettivi, le attività, le persone
coinvolte, il tempo richiesto ai team, il primo risultato utile atteso e i
rischi. Parti da team pilota volontari, una carta e gli strumenti esistenti. Non
promettere risultati. Elenca le tue ipotesi.
```

**Scegliere le prime misure.**

```text
Un team pilota descrive i propri problemi come segue: [incolla]. Suggerisci da tre
a cinque misure con cui iniziare, ciascuna con una definizione, una fonte dei dati,
il vettore di gaming più probabile e una salvaguardia compagna. Preferisci i dati
che il team già possiede. Non inventare cifre. Elenca le tue ipotesi e che cosa
verificare sulla qualità dei dati.
```

**Eseguire un controllo della qualità dei dati.**

```text
Ecco una descrizione di esempio dei campi e dei valori nelle registrazioni del
nostro [sistema]: [incolla]. Individua i probabili problemi di qualità per
misurare lead time, fallimento delle modifiche e contatti di ritorno, come campi
mancanti, categorie cambiate e registrazioni create a posteriori. Suggerisci
controlli semplici e correzioni alla fonte. Non fare ipotesi su contenuti che non
puoi vedere. Elenca le tue ipotesi.
```

**Pianificare una revisione di fase.**

```text
Pianifica una revisione di fase di 45 minuti al giorno [30, 90 o 180] con i team
pilota e il sostenitore. Includi domande su che cosa ha aiutato, che cosa è
sembrato rischioso, quale sforzo ha richiesto, che cosa fermare e che cosa
cambiare nel piano. Includi come registrare le decisioni e condividere una breve
storia di ciò che è cambiato. Non classificare i team. Elenca le tue ipotesi.
```

## Skill IA

- [Agile ITIL Metrics skill](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per scegliere misure iniziali con le relative salvaguardie abbinate per un team pilota.
- [Agile ITIL Metrics maintainer skill](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una roadmap mantenga le misure a livello di team e riporti un vettore di gaming per ogni misura introdotta.

## Punti chiave

- Partire da dove ci si trova, con volontari, una carta e i dati e gli strumenti che si hanno già.
- Offrire un risultato utile a un team nel primo mese o nei primi due.
- Estendere a piccole ondate e ritirare i rapporti man mano che le nuove viste li sostituiscono.
- Verificare presto la qualità dei dati e correggere l'acquisizione alla fonte.
- Tenere revisioni di fase che modificano il piano e mantenere ridotto lo sforzo richiesto ai team.
- Decidere la fase successiva con team e sostenitori e registrarne le ragioni.

## Riferimenti e letture di approfondimento

1. Ries, E., *The Lean Startup*, Crown Business, 2011.
2. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product).
7. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
8. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
9. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
10. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
11. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
12. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
