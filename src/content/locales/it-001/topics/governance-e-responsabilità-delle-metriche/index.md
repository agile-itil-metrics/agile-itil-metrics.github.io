# Governance e responsabilità delle metriche

**Una metrica che nessuno possiede, definisce, rivede o ritira si allontanerà dal lavoro che descrive, perciò si dia a ogni metrica rendicontata un responsabile nominato, una definizione scritta, una data di revisione e una via d'uscita.**

## Panoramica e motivazione

La governance delle metriche è l'insieme di decisioni leggere su chi possiede una misura, che cosa significa, chi può vederla, con quale frequenza viene rivista e quando viene rimossa. È una stretta parente della [data governance](https://en.wikipedia.org/wiki/Data_governance), che copre la gestione più ampia di disponibilità, qualità e sicurezza dei dati in un'organizzazione. La governance delle metriche applica la stessa disciplina al piccolo insieme, di grande visibilità, di numeri che team e dirigenti usano per orientare il lavoro di servizio e di consegna.

La necessità si manifesta come piccoli attriti ripetuti. Due team calcolano il «tempo di risoluzione» in modo diverso e dedicano una riunione a conciliare le cifre. Un riquadro della dashboard resta obsoleto per mesi perché la persona che lo aveva costruito ha cambiato lavoro. Una misura pensata per aiutare un team a diagnosticare il proprio flusso viene adottata da un comitato direttivo come obiettivo di prestazione, che è la situazione da cui mette in guardia l'argomento precedente (vedi Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»). Nessuno di questi è un problema statistico. Ciascuno è un problema di responsabilità, e ciascuno è economico da prevenire.

Le visioni agile e ITIL differiscono per enfasi, e la differenza è utile. Nella visione agile, un team possiede le proprie misure di lavoro e le negozia nelle retrospettive, negli accordi di lavoro e nelle revisioni. La visione ITIL, come documentata in ITIL 4 (l'edizione del 2019 di AXELOS, oggi pubblicata da PeopleCert), tratta la misurazione e la rendicontazione come una pratica generale di gestione e il miglioramento continuo come una pratica con propri ruoli, record e revisione. ITIL si aspetta inoltre che i responsabili dei servizi e delle pratiche rispondano dei risultati. Le due visioni si integrano: il team possiede la vista di lavoro, un responsabile di servizio o di pratica nominato possiede la vista rendicontata, e un piccolo registro collega le due.

Alcuni termini usati qui. Un **responsabile della metrica** (metric owner) è l'unica persona che risponde della definizione, della qualità dei dati e dell'uso di una metrica. Un **registro delle metriche** (metric register) è un breve catalogo delle metriche in uso, con il responsabile, la definizione, la fonte dei dati, la salvaguardia e la data di revisione di ciascuna. Una **carta delle metriche** (metrics charter) è una dichiarazione di una pagina di scopo, ambito, ruoli e cadenza di revisione per un insieme di metriche. Una **[fonte unica di verità](https://en.wikipedia.org/wiki/Single_source_of_truth)** (single source of truth) è l'unico sistema o insieme di dati autorevole da cui si calcola una data cifra. Un **[data steward](https://en.wikipedia.org/wiki/Data_steward)** cura la qualità e la definizione di un dominio di dati, e in una piccola organizzazione il responsabile della metrica svolge spesso questo ruolo. Una **[matrice RACI](https://en.wikipedia.org/wiki/RACI_matrix)** registra chi è responsabile (responsible), chi risponde (accountable), chi è consultato (consulted) e chi è informato (informed) per ciascuna attività. Un **[dizionario dei dati](https://en.wikipedia.org/wiki/Data_dictionary)** è un catalogo degli elementi di dati e dei loro significati, ciò che diventa la colonna delle definizioni del registro su scala maggiore. Il **[principio del privilegio minimo](https://en.wikipedia.org/wiki/Principle_of_least_privilege)** afferma che persone e sistemi ottengono l'accesso necessario al proprio compito e non di più. Il **[miglioramento continuo](https://en.wikipedia.org/wiki/Continual_improvement_process)** è lo sforzo costante di migliorare servizi, pratiche e modi di lavorare, ed è al tempo stesso una pratica ITIL e un'abitudine agile. SLA significa service level agreement (accordo sul livello di servizio) e ITSM significa gestione dei servizi IT (IT service management).

## Principi chiave

- **Ogni metrica rendicontata ha un unico responsabile nominato.** Un ruolo o una persona, mai «il team». La responsabilità condivisa lascia la definizione senza manutenzione.
- **Una definizione, una fonte unica di verità.** Si scriva la definizione una sola volta, compreso dove il cronometro parte e si ferma, e si calcoli la cifra in un unico posto.
- **Governare in proporzione alle conseguenze.** Una metrica che un team usa per fare debug della propria lavagna richiede una frase. Una metrica in un contratto, in un rapporto pubblico o in un fascicolo per il consiglio richiede una voce nella carta, una revisione e una traccia di audit.
- **L'accesso segue lo scopo.** Si decida chi vede quale vista e perché. Il pubblico predefinito della vista di lavoro di un team è il team.
- **Rivedere con una cadenza e ritirare sulla base di evidenze.** Le metriche hanno cicli di vita. Le si adotti, le si riveda, le si modifichi e le si ritiri deliberatamente.
- **Metterlo per iscritto e mantenerlo ridotto.** Un registro che sta su una pagina viene letto. Un manuale di politiche no.
- **La governance serve le persone misurate.** I responsabili di una metrica includono le persone il cui lavoro essa descrive.

## Definizioni delle metriche

Sono misure della salute di una pratica di metriche, non di un servizio. Sono deliberatamente poche ed economiche da raccogliere dal registro stesso. Ogni periodo è un trimestre solare, salvo diversa indicazione.

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Copertura della responsabilità | Quota delle metriche rendicontate con un responsabile nominato e aggiornato | metriche rendicontate con un responsabile che ricopre ancora il ruolo a fine periodo / metriche rendicontate a fine periodo; esclude le metriche usate solo all'interno della lavagna privata di un team | percentuale | Registro delle metriche | Misurazione e rendicontazione | Accordi di lavoro | Trimestrale |
| Attualità delle definizioni | Quota delle metriche rendicontate la cui definizione è stata rivista entro l'intervallo concordato | metriche con una data di revisione negli ultimi 6 mesi / metriche rendicontate; il cronometro parte dall'ultima revisione registrata e si ferma a fine periodo | percentuale | Registro delle modifiche del registro delle metriche | Misurazione e rendicontazione; miglioramento continuo | Azioni di retrospettiva | Trimestrale |
| Conformità della fonte | Quota delle metriche rendicontate calcolate da una sola fonte nominata | metriche con una fonte autorevole e senza un calcolo parallelo noto / metriche rendicontate; i calcoli paralleli si individuano campionando dashboard e rapporti | percentuale | Registro più un campione di dashboard e rapporti | Misurazione e rendicontazione; gestione dei livelli di servizio | Definition of done per una metrica | Trimestrale |
| Tasso di ritiro | Numero di metriche ritirate o accorpate in un periodo rispetto a quelle rendicontate | metriche ritirate o accorpate nel periodo / metriche rendicontate a inizio periodo; una metrica spostata in una vista privata del team conta come ritirata dall'insieme rendicontato | percentuale | Registro delle modifiche del registro delle metriche | Miglioramento continuo | Azioni di retrospettiva | Trimestrale |
| Attualità della revisione degli accessi | Quota delle viste di metriche riservate il cui elenco di destinatari è stato rivisto entro l'intervallo | viste riservate con una revisione dei destinatari negli ultimi 6 mesi / viste riservate; le viste aperte all'intera organizzazione sono escluse | percentuale | Elenco degli accessi o esportazione dei permessi dello strumento di BI | Gestione della sicurezza delle informazioni; misurazione e rendicontazione | Accordi di lavoro | Semestrale |
| Collegamento alle decisioni | Quota delle metriche rendicontate collegate nel registro a una decisione che orientano | metriche con una decisione o una domanda registrata / metriche rendicontate; un collegamento conta solo se la decisione è stata presa negli ultimi 12 mesi | percentuale | Registro delle metriche e registro delle decisioni | Miglioramento continuo | Revisione con gli stakeholder ed esiti dei miglioramenti | Trimestrale |

Nessuna di queste è un obiettivo. Un registro può mostrare una copertura della responsabilità totale e descrivere comunque metriche inutili, perciò si legga la tabella insieme alla tabella della manipolazione qui sotto.

## Raccomandazioni

### Stabilire la responsabilità e il registro

**1. Tenere un registro delle metriche di una pagina.** Si elenchi ogni metrica rendicontata con la sua domanda, il responsabile, la definizione, la formula e i cronometri, l'unità, la fonte dei dati, il pubblico, la salvaguardia, la data dell'ultima revisione e quella della revisione prevista. Un foglio di calcolo o un file Markdown nel controllo di versione bastano. Il registro è l'artefatto più utile di questo argomento, e l'argomento precedente presuppone già che esista (vedi Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

**2. Nominare un responsabile per metrica e registrare il ruolo.** Il responsabile risponde della definizione, della qualità dei dati e della spiegazione dei risultati anomali. Si scelga qualcuno vicino ai dati e alle decisioni, spesso il responsabile del servizio, il responsabile di una pratica o un team lead. Si registri il ruolo oltre alla persona, così che la voce sopravviva a un cambio di lavoro e una vacanza emerga nella cifra di copertura.

**3. Separare il possedere una metrica dal possedere il lavoro che misura.** Il responsabile di una metrica la spiega e la mantiene, ma il team che svolge il lavoro rimane responsabile del risultato. Ciò evita due trappole: il responsabile a cui si dà la colpa per un numero su cui non può influire, e il team che disconosce un numero perché lo mantiene qualcun altro. Una breve tabella RACI nella carta lo rende esplicito.

**4. Scrivere la definizione con i suoi cronometri, una sola volta.** Il registro contiene la definizione autorevole: che cosa si conta, dove il cronometro parte e si ferma, quali stati lo sospendono e che cosa è escluso. Si rimandi ad essa da ogni dashboard che mostra la metrica. Quando una definizione deve cambiare, la si cambi prima nel registro e si segni la modifica sul grafico (vedi Argomento 1.6 «Alfabetizzazione statistica per le metriche di servizio», per come mostrare una discontinuità in un andamento).

**5. Calcolare ogni metrica in un unico posto.** Si scelga la fonte autorevole, come lo strumento ITSM, l'issue tracker o il sistema di monitoraggio, e lo si dichiari nel registro. I fogli di calcolo paralleli che riproducono la cifra dovrebbero essere ritirati o rinominati perché nessuno li scambi per il numero ufficiale. La tracciabilità dei dati (lineage) e gli strumenti appartengono all'argomento successivo (vedi Argomento 1.5 «Fonti dei dati e strumentazione»).

### Stabilire cadenza e controllo delle modifiche

**6. Rivedere le definizioni con una pianificazione adeguata alle conseguenze.** Per le metriche nei contratti, nei rapporti regolamentati o nei fascicoli per la direzione, si riveda due volte l'anno e a ogni modifica del flusso di lavoro sottostante. Per le misure di lavoro a livello di team, la retrospettiva è la revisione. Ogni revisione pone tre domande: la definizione è ancora accurata, i dati sono ancora solidi e qualcuno ha usato il numero per decidere qualcosa?

**7. Trattare le modifiche alle definizioni come modifiche a un servizio.** Si registri chi ha richiesto la modifica, perché, chi è stato consultato e la data di entrata in vigore. Una piccola modifica a un flusso di stati può spostare silenziosamente di molto una misura temporale. Un controllo leggero delle modifiche alle definizioni prende in prestito l'idea dall'abilitazione delle modifiche senza la cerimonia (vedi Argomento 4.3 «Metriche di abilitazione delle modifiche», per la controparte relativa alle modifiche di servizio).

**8. Collegare la revisione al miglioramento continuo.** Le revisioni delle metriche dovrebbero produrre lavoro di miglioramento, o una decisione esplicita di non agire. ITIL tratta il miglioramento continuo come una pratica con un registro delle opportunità di miglioramento, e i team agili ottengono lo stesso effetto attraverso le azioni di retrospettiva. Se una revisione si conclude senza azioni e senza ritiri, ci si chieda se la metrica stia svolgendo un qualche lavoro (vedi Argomento 9.5 «Metriche di miglioramento continuo»).

**9. Ritirare le metriche deliberatamente.** Si definisca un test di ritiro, per esempio «non citata in una decisione per due cicli di revisione», e lo si applichi. Si archivino la definizione e i valori finali, si dica che cosa ha sostituito la metrica, se qualcosa, e lo si comunichi al pubblico. Un registro dei ritiri è un'evidenza per gli auditor e un sollievo per chi manteneva i dati a mano.

### Controllare viste e accessi

**10. Decidere il pubblico di ogni vista.** La maggior parte delle metriche ha una vista di lavoro per il team, una vista rendicontata per il responsabile del servizio o del programma e talvolta una vista esterna per clienti, un'autorità di regolamentazione o un fornitore. Si registri quale pubblico riceve quale vista e perché. Usando come guida il principio del privilegio minimo, si limitino le viste che contengono dati personali, dettagli di sicurezza o cifre di fornitori commercialmente sensibili, e si lasci aperto il resto in modo che la trasparenza sia la regola.

**11. Tenere i dati a livello individuale fuori dalla rendicontazione.** La regola ferrea di questo libro è che le metriche descrivono team, servizi e sistemi, non persone. La governance la sostiene fissando la granularità rendicontata, per esempio team e servizio, e limitando qualsiasi estrazione a livello di persona al data steward. Se arriva una richiesta di scomposizione a livello di persona, la si registri, si chieda a quale decisione serva e si offra un'alternativa a livello di team o di sistema (vedi Argomento 11.3 «Introdurre le metriche senza generare paura»).

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Copertura della responsabilità | Nominare un manager o una mailing list come responsabile per raggiungere il 100 per cento, senza nessuno che possa spiegare o modificare la metrica | Chiedere a ogni responsabile di spiegare un recente movimento del numero; monitorare le domande rimaste senza risposta per più di una settimana |
| Attualità delle definizioni | Aggiornare la data di revisione senza leggere la definizione | Campionare tre voci ogni trimestre e confrontare la definizione scritta con la configurazione effettiva dello strumento |
| Conformità della fonte | Dichiarare autorevole una fonte mentre i fogli di calcolo continuano a circolare e a non concordare | Contare le cifre distinte per la stessa metrica trovate in un campione di rapporti; conciliare le differenze nella revisione |
| Tasso di ritiro | Ritirare metriche banali o inutilizzate per apparire disciplinati, o rinominare una metrica perché conti come nuova | Rivedere il registro dei ritiri per ciò che è stato rimosso; monitorare accanto il conteggio totale rendicontato e la cifra del collegamento alle decisioni |
| Attualità della revisione degli accessi | Approvare l'elenco dei destinatari esistente senza leggerlo | Confrontare l'elenco con l'attuale composizione e i ruoli dei team; riportare il numero di rimozioni individuate |
| Collegamento alle decisioni | Scrivere una decisione vaga come «migliorare il servizio» per soddisfare il campo | Richiedere una decisione o una domanda datata e campionare il registro delle decisioni per verificare se la metrica sia stata effettivamente consultata |

Una lettura sana è quella di un registro che cambia. Le voci hanno responsabili che rispondono alle domande, date di revisione che cadono negli ultimi sei mesi, un registro dei ritiri con le motivazioni e un breve elenco di metriche ancora volute perché le persone sanno nominare la decisione che orientano. Un registro con ogni campo compilato e nulla che cambi mai è un segnale di allarme.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Ufficio centrale delle metriche | Definizioni coerenti e strumenti condivisi; audit più semplice | Lento, distante dal lavoro e tentato di standardizzare misure che dovrebbero differire tra i team |
| Responsabilità federata con un registro condiviso | I responsabili stanno vicino ai dati; il registro mantiene un minimo comune | Richiede un incoraggiamento costante per evitare derive di qualità tra i team |
| Solo misure di proprietà dei team | Rapido e adatto al lavoro | Le definizioni divergono; le aggregazioni diventano inaffidabili; la conoscenza se ne va con le persone |
| Accesso aperto per impostazione predefinita | Crea fiducia e comprensione condivisa | Rischia di esporre dettagli sensibili o a livello di persona |
| Accesso riservato | Protegge i dati sensibili | Nasconde il contesto a chi potrebbe aiutare e invita al sospetto |

L'equilibrio sta nel centralizzare lo strato sottile che deve concordare, ovvero il registro, le definizioni condivise e le regole di accesso, e nel federare tutto il resto.

## Domande da discutere con il team

**1. Chi risponderebbe se il numero più citato sulla nostra dashboard sembrasse sbagliato domani?**
Chieda al gruppo di nominare una persona, non un gruppo. Se emergono più nomi, o nessuno, la metrica in pratica non ha un responsabile. Il facilitatore dovrebbe annotare la metrica, il candidato responsabile e di che cosa avrebbe bisogno per svolgere il compito, come l'accesso in lettura ai dati o il tempo nella revisione. Si concluda concordando chi confermerà il responsabile e registrerà il ruolo nel registro.

**2. Dove esistono oggi due versioni della stessa cifra?**
Si cerchino rapporti che mostrano la stessa metrica con valori diversi: una slide settimanale rispetto a una dashboard in tempo reale, o un rapporto del fornitore rispetto a quello interno. Per ciascuno, ci si chieda da dove nasca la differenza, come l'ambito, il cronometro o le esclusioni. Si decida quale fonte è autorevole e che cosa accade all'altra versione. Ci si aspetti che la conversazione faccia emergere definizioni di lavoro diverse di parole che tutti ritenevano condivise.

**3. Quale metrica ritireremmo in questo trimestre, se dovessimo ritirarne una?**
Si parta dalla metrica che nessuno ha citato di recente in una decisione. Ci si chieda che cosa accadrebbe se sparisse e chi se ne accorgerebbe. Se la risposta è «nessuno», la si sposti fuori dall'insieme rendicontato per un periodo di prova. Il facilitatore dovrebbe trattare il ritiro come normale e sano e registrarne l'esito nel registro dei ritiri.

**4. Chi vede quali delle nostre metriche, ed è voluto?**
Si disegni una semplice griglia di metriche contro pubblici: team, responsabile del servizio, direzione, clienti, fornitori, autorità di regolamentazione. Si contrassegni dove l'accesso è stato una decisione e dove è semplicemente accaduto. Si cerchi ogni vista che potrebbe essere usata per confrontare le persone. Si concordi una modifica ad almeno un elenco di destinatari e chi lo rivedrà la volta successiva.

**5. Come cambiamo una definizione senza spezzare l'andamento?**
Si ripercorra una recente modifica a un flusso di stati o a una scala di priorità. Ci si chieda chi è stato informato, se il grafico è stato annotato e se qualcuno ha confrontato i valori vecchi e nuovi. Si rediga una voce di modifica leggera che il team compilerebbe davvero. Si concordi chi approva le modifiche alle metriche che compaiono nei contratti o nei rapporti esterni.

**6. Che cosa smetteremmo di fare se la governance diventasse un peso?**
La governance può trasformarsi in rituale. Ci si chieda quali parti dell'approccio attuale le persone salterebbero se nessuno controllasse, e perché. Si trattino le risposte come feedback di progettazione e non come resistenza. Il facilitatore dovrebbe cercare passaggi che si duplicano, campi che nessuno legge e revisioni che non producono mai una decisione.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna possiedono misure di lavoro come l'età dell'elemento di lavoro e il cycle time, e dovrebbero concordarne le definizioni nei propri accordi di lavoro. Quando una metrica sale in un rapporto di portafoglio, il team dovrebbe conoscere il responsabile, la definizione e il pubblico. I team traggono il massimo valore da una breve voce di registro per ogni misura rendicontata e dal diritto di contestare una definizione che non si adatta più a come il lavoro scorre (vedi Argomento 2.1 «Misure del flusso»).

### Team di servizio e operations

I team di servizio e di operazioni portano le metriche che compaiono negli SLA e nelle revisioni operative, perciò definizioni, cronometri ed esclusioni hanno un peso contrattuale. I responsabili qui sono di solito i responsabili dei servizi e delle pratiche. Dovrebbero conservare una traccia delle evidenze per le modifiche alle definizioni, conciliare con regolarità le cifre rendicontate con lo strumento ITSM ed essere i primi a ritirare una misura che ha smesso di orientare le decisioni operative (vedi Argomento 5.1 «Metriche SLA, OLA e XLA»).

### Leadership e governance

I dirigenti stabiliscono le condizioni: chi possiede le metriche, quali viste raggiungono il fascicolo per la direzione e come vengono usati i numeri. Dovrebbero chiedere il registro e il registro dei ritiri, leggere le definizioni dietro le cifre di copertina e resistere alle richieste di classifiche a livello di persona. Gli organi di governance hanno bisogno di un piccolo punto permanente all'ordine del giorno che riveda il registro e registri le decisioni, in linea con le aspettative della ISO/IEC 20000-1 per i sistemi di gestione dei servizi (nella sua edizione del 2018) senza trasformare la revisione in un esercizio di conformità (vedi Argomento 8.3 «Metriche di conformità e audit»).

### Clienti e utenti

Clienti e utenti vedono raramente il registro, ma ne avvertono l'assenza quando una cifra in una revisione del servizio differisce dalla loro esperienza. Dove una metrica compare in un rapporto rivolto ai clienti o in un SLA, la definizione dovrebbe essere disponibile in linguaggio semplice, compreso ciò che è escluso. I clienti dovrebbero avere un canale per contestare una cifra, e il responsabile dovrebbe rispondere (vedi Argomento 5.1 «Metriche SLA, OLA e XLA»).

## In pratica: un esempio di ITIL agile

Un rivenditore online di medie dimensioni gestisce un service desk, tre team di prodotto e un gruppo di operazioni. Tutti i numeri seguenti sono illustrativi.

La revisione mensile del servizio mostra un tempo di risoluzione degli incidenti di 5,1 ore per la mediana. La dashboard dei team di prodotto, costruita sullo stesso strumento ITSM, mostra 6,4 ore. Le due cifre circolano da un anno. Un nuovo responsabile del servizio chiede chi sia il responsabile della metrica e riceve tre risposte diverse.

Il responsabile, con i team lead e il data steward, dedica due sessioni a un primo registro di 14 metriche rendicontate. Di queste, 5 non avevano un responsabile e 4 avevano due fonti. Il tempo di risoluzione è una delle metriche a doppia fonte. La differenza risale a uno stato di sospensione: la revisione del servizio esclude il tempo in «in attesa del cliente», e la dashboard del team no. Il gruppo concorda un'unica definizione, nomina il responsabile del servizio come responsabile della metrica e pubblica entrambi i valori sulla stessa pagina per un trimestre, etichettati per definizione, così che nessuno perda lo storico. Annotano il grafico dove la definizione cambia.

Alla prima revisione trimestrale, il gruppo applica un test di ritiro e rimuove 3 delle 14 metriche, compreso un grafico mensile del conteggio dei ticket che nessuna decisione recente aveva citato. Limitano inoltre la vista che scompone il tempo di risoluzione per analista, mantenendo il data steward come unico detentore, e offrono invece una scomposizione a livello di team.

Un rischio di manipolazione compare alla seconda revisione. La copertura della responsabilità raggiunge il 100 per cento, ma un campione mostra che due dei responsabili sono una lista di distribuzione e un capo reparto che non ha mai aperto i dati. Il gruppo li sostituisce con responsabili di servizio nominati e aggiunge la domanda di salvaguardia alla revisione: «Il responsabile sa spiegare l'ultimo movimento di questo numero?» La copertura scende all'86 per cento per un trimestre, e il gruppo la registra come un risultato onesto. La decisione registrata è di mantenere l'obiettivo di copertura finché la salvaguardia non sarà stata attiva per due cicli.

## Lente di settore

**Startup.** Un fondatore o un lead engineer spesso possiede ogni metrica per impostazione predefinita. Il rischio è che le definizioni vivano in una sola testa. Si tenga un registro di cinque-otto metriche in un documento condiviso, si nomini un responsabile per ciascuna e si scrivano le definizioni il giorno in cui una metrica compare per la prima volta in un aggiornamento per investitori o clienti.

**Piccola impresa.** La persona che gestisce l'IT è di solito responsabile, steward e lettore dei rapporti. Si mantenga la governance su una sola pagina, si riveda due volte l'anno e si presti particolare attenzione quando un rapporto fornito dal fornitore definisce una metrica diversamente dalla propria. Si nomini chi, nell'attività, possiede ciascuna cifra rivolta ai clienti.

**Grande impresa.** La scala rende essenziale lo strato condiviso. Si usi un registro con flusso di lavoro, un consiglio leggero che si riunisce ogni trimestre e un ruolo di data steward per ogni dominio principale. Si preservi l'autonomia dei team sulle misure di lavoro e ci si guardi dallo standardizzare metriche che dovrebbero differire tra tipi di servizio. Allinearsi alla data governance già presente nell'organizzazione fa risparmiare sforzo.

**Pubblica amministrazione e settore pubblico.** La rendicontazione per legge, l'audit e gli appalti rendono un obbligo le definizioni scritte e i record delle modifiche. Si tratti il registro come un artefatto di audit e si mantenga una linea chiara da ogni cifra pubblicata al suo responsabile e alla sua fonte. Le decisioni sugli accessi coinvolgono spesso revisioni legali e di privacy, perciò si registri la base di ogni vista riservata (vedi Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

Il costo è modesto e consiste soprattutto in tempo. Ci si aspetti alcune ore per costruire un primo registro, un'ora o due a trimestre per la revisione e un po' di sforzo da parte del data steward per risolvere i conflitti tra fonti. I costi degli strumenti sono bassi perché un foglio di calcolo o un file sotto controllo di versione bastano per iniziare.

Il ritorno è soprattutto spreco evitato. Le riunioni spese a conciliare le cifre scompaiono, gli audit trovano una traccia chiara e l'inserimento di un nuovo responsabile di servizio è più rapido perché le definizioni sono scritte. Le decisioni sono migliori perché poggiano su numeri che significano la stessa cosa ogni mese. Non si citi una percentuale per questi benefici senza dati propri. Se servono cifre per un business case, si contino le ore spese lo scorso trimestre a conciliare numeri in conflitto e il numero di metriche senza un responsabile registrato, poi le si contino di nuovo dopo due cicli di revisione.

## Anti-pattern e insidie

- **Responsabilità per comitato.** Un gruppo possiede la metrica e nessuno risponde alle domande. Si nomini un ruolo responsabile e un sostituto.
- **Il registro come cimitero.** Viene costruito una volta e non toccato mai più. Si mettano le date di revisione in calendario e si mostri la data su ogni dashboard.
- **Standardizzare tutto.** Una definizione imposta a team il cui lavoro differisce produce numeri che non significano nulla da nessuna parte. Si condivida solo lo strato che deve concordare.
- **Cambi di definizione silenziosi.** Gli andamenti si spezzano e la fiducia li segue. Si registri ogni modifica con la sua motivazione e si annoti il grafico.
- **Governance senza ritiro.** L'insieme cresce soltanto e l'attenzione si assottiglia. Si applichi un test di ritiro a ogni revisione.
- **Segretezza per impostazione predefinita.** Nascondere le viste di lavoro alle persone misurate genera sospetto. Si limiti solo ciò che comporta un rischio reale e se ne spieghi il motivo.
- **Accesso aperto ai dati a livello di persona.** Una singola estrazione può diventare una classifica nel giro di giorni. Si fissi la granularità rendicontata a team e servizio e si tenga ogni dato a livello di persona sotto il data steward.
- **Teatro della conformità.** I campi vengono compilati per soddisfare una checklist. Si campionino le voci per verificarne la veridicità e si chieda ai responsabili di spiegare i movimenti recenti.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Responsabilità e registro | Responsabili poco chiari; le metriche vivono in fogli di calcolo individuali | Alcuni team tengono un elenco con i responsabili | Un registro per tutte le metriche rendicontate, ciascuna con un responsabile nominato e un ruolo | Copertura e attualità analizzate nel tempo; le lacune portano a correzioni dotate di risorse | Registro condiviso con fornitori e clienti dove le cifre attraversano i confini |
| Definizioni e controllo delle modifiche | Le definizioni differiscono da persona a persona | Scritte per alcune metriche contrattuali | Definizione scritta con cronometri e registro delle modifiche per ogni metrica rendicontata | Modifiche riviste per l'impatto sugli andamenti prima del rilascio | Definizioni riviste congiuntamente tra team e fornitori quando smettono di orientare le decisioni |
| Revisione e ritiro | Metriche aggiunte, mai rimosse | Pulizia occasionale | Cadenza di revisione e test di ritiro messi per iscritto | Esiti delle revisioni monitorati come lavoro di miglioramento | Ritiro e rinnovo di routine, guidati dalle evidenze di utenti e team |
| Accesso e pubblico | Accesso casuale | Viste riservate per i dati sensibili | Pubblico elencato per metrica, con un motivo | Accessi rivisti con una cadenza; dati a livello di persona detenuti dallo steward | Pubblico progettato con le persone misurate e con i clienti |

## Checklist

- [ ] Esiste un registro delle metriche che elenca ogni metrica rendicontata.
- [ ] Ogni metrica rendicontata ha un responsabile nominato e un ruolo registrato.
- [ ] Ogni metrica rendicontata ha una definizione scritta con regole di avvio, arresto ed esclusione.
- [ ] Ogni metrica ha una fonte autorevole nominata nel registro.
- [ ] Per ogni metrica sono registrate una data di revisione e un intervallo.
- [ ] Le modifiche alle definizioni sono registrate con una motivazione e segnate sul grafico.
- [ ] Un test di ritiro è messo per iscritto e applicato a ogni revisione.
- [ ] Il pubblico di ogni vista è registrato, con una motivazione per ogni restrizione.
- [ ] Nessuna vista rendicontata classifica persone, e i dati a livello di persona stanno presso il data steward.
- [ ] Il registro è stato campionato per verificarne la veridicità nell'ultimo trimestre.

## Prompt IA

**Redigere una carta delle metriche per un insieme di metriche.**

```text
Redigi una carta delle metriche di una pagina per [nome del team o del servizio],
che fornisce [tipo di servizio o di lavoro di consegna]. L'insieme di metriche è:
[elenco delle metriche]. I pubblici sono [pubblici]. Includi scopo, non-obiettivi
espliciti, una tabella RACI per responsabile, data steward e revisori con questi
ruoli: [ruoli], la cadenza di revisione e un test di ritiro. Basa la bozza solo
su quanto ho scritto. Non inventare metriche, obiettivi né valori di
riferimento. Elenca le tue ipotesi e le domande a cui dovrei rispondere per
completare la carta.
```

**Individuare i conflitti tra due versioni di una metrica.**

```text
Ecco due descrizioni di quella che dovrebbe essere la stessa metrica, [nome della
metrica]. Versione A, da [fonte A]: [descrizione e formula]. Versione B, da
[fonte B]: [descrizione e formula]. Confrontale su che cosa viene contato, dove
il cronometro parte e si ferma, quali stati lo sospendono e che cosa è escluso.
Spiega quali differenze potrebbero spiegare il divario tra [valore A] e [valore
B] e suggerisci domande per il responsabile. Non ipotizzare valori che non ti ho
fornito. Elenca le tue ipotesi e ciò che non hai potuto determinare.
```

**Esaminare un registro delle metriche alla ricerca di lacune.**

```text
Di seguito un estratto del nostro registro delle metriche con i campi [elenco dei
campi]. Esaminalo alla ricerca di responsabili mancanti, voci senza data di
revisione o con una più vecchia di [intervallo], metriche con più di una fonte,
metriche senza una decisione collegata e viste che potrebbero esporre dati a
livello di persona. Riporta gli andamenti per metrica, non per persona. Non
inventare fatti sulle nostre metriche. Dimmi quali riscontri sono certi in base
al testo e quali sono congetture, ed elenca le tue ipotesi.

[incolla l'estratto del registro, con i dati personali rimossi]
```

**Pianificare una revisione dei ritiri.**

```text
Riesaminiamo le metriche ogni [intervallo]. Il nostro test di ritiro è: [test].
Per ciascuna delle metriche seguenti, usando le note che fornisco, proponi
ritirare, mantenere, accorpare o riprogettare, con una motivazione di una riga e
una domanda da porre al responsabile: [metriche con data dell'ultima citazione e
ruolo del responsabile]. Suggerisci anche come annunciare ciascun ritiro a
[pubblico]. Non inventare dati di utilizzo. Elenca le tue ipotesi e ogni
informazione che cambierebbe la tua raccomandazione.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare l'argomento e la salvaguardia abbinata per una metrica prima di aggiungerla al registro.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una voce di metrica riporti un responsabile, un vettore di manipolazione e una salvaguardia.

## Punti chiave

- La governance mantiene i numeri con lo stesso significato nel tempo, e un registro di una pagina ne è il nucleo.
- Si nomini un responsabile per ogni metrica rendicontata, e si registri il ruolo oltre alla persona.
- Si scriva una sola definizione con i suoi cronometri, la si calcoli in un unico posto e si registri ogni modifica.
- Si adegui il peso della governance alle conseguenze della metrica.
- Si decida con consapevolezza chi vede quale vista, si tengano i dati a livello di persona fuori dalla rendicontazione e si ritirino le metriche sulla base di evidenze.

## Riferimenti e letture di approfondimento

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
5. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
6. ISO/IEC 20000-1:2018, *Information technology, Service management, Part 1: Service management system requirements*, International Organization for Standardization.
7. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
8. Wikipedia, [Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth).
9. Wikipedia, [Data steward](https://en.wikipedia.org/wiki/Data_steward).
10. Wikipedia, [RACI matrix](https://en.wikipedia.org/wiki/RACI_matrix).
11. Wikipedia, [Data dictionary](https://en.wikipedia.org/wiki/Data_dictionary).
12. Wikipedia, [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
13. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
