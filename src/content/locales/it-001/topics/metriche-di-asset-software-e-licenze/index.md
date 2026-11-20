# Metriche di asset software e licenze

**Il software viene acquistato, sottoscritto, sviluppato e preso in prestito, e ciascun percorso genera obblighi e costi: si misuri ciò a cui si ha diritto, ciò che si usa davvero e ciò da cui si dipende, e si renda facile per i team scegliere gli strumenti senza creare sorprese in seguito.**

## Panoramica e motivazione

Il software è la classe di asset che cambia più in fretta ed è la più difficile da vedere. Uno sviluppatore aggiunge una libreria in pochi minuti. Un team si iscrive a uno strumento software as a service con la carta aziendale. Un fornitore cambia il proprio modello di prezzo tra un rinnovo e l'altro. Un contratto consente 500 utenti e gli utenti con un account sono 700. La [gestione degli asset software](https://en.wikipedia.org/wiki/Software_asset_management) (SAM, software asset management) è la pratica aziendale di gestire e ottimizzare l'acquisto, la distribuzione, la manutenzione, l'uso e la dismissione del software all'interno di un'organizzazione. Rientra nella più ampia pratica di gestione degli asset IT (si veda l'Argomento 7.1 «Metriche di gestione degli asset IT») e ne condivide la disciplina di registri, responsabili e cicli di vita.

La consegna continua e la gestione degli asset software tirano in direzioni diverse sul tema della velocità. I team che consegnano in modo continuo devono scegliere e adottare gli strumenti rapidamente e costruiscono su componenti open source a centinaia. La gestione degli asset software vuole sapere che cosa è in uso, a quali condizioni, a quale costo e con quale rischio. Entrambe hanno ragione. La via d'uscita è la collaborazione continua tra team, approvvigionamenti, ufficio legale, sicurezza e finanza: rendere veloce il percorso approvato, rendere facile da trovare il catalogo degli strumenti approvati e rendere automatici i controlli. Rallentare i team con un lungo processo di approvazione produce [shadow IT](https://en.wikipedia.org/wiki/Shadow_IT), il contrario della visibilità che tutti desiderano.

Contano quattro tipi di software, e le metriche differiscono tra loro.

- **Software con licenza** installato su dispositivi o server, regolato da una [licenza software](https://en.wikipedia.org/wiki/Software_license) che stabilisce chi può usarlo, quanti possono usarlo e a quali condizioni. I diritti d'uso possono essere per utente, per dispositivo, per core o per sede, e l'unità determina come si conta.
- **Software as a service.** Il [software as a service](https://en.wikipedia.org/wiki/Software_as_a_service) (SaaS) è accessibile in rete e pagato tramite sottoscrizione, spesso per postazione o per utilizzo. È facile da adottare e facile da dimenticare. Strumenti sovrapposti e postazioni inutilizzate si accumulano.
- **Componenti open source.** Il [software open source](https://en.wikipedia.org/wiki/Open-source_software) è disponibile con licenze che concedono ampi diritti a determinate condizioni. Alcune licenze, dette licenze [copyleft](https://en.wikipedia.org/wiki/Copyleft), richiedono che le opere derivate siano condivise alle stesse condizioni. La conformità dipende da come un componente viene usato e distribuito, e l'interpretazione di una licenza è una questione giuridica.
- **Software che si sviluppa.** Il proprio codice è un asset e dipende da molti componenti. Una [distinta base del software](https://en.wikipedia.org/wiki/Software_bill_of_materials) (SBOM, software bill of materials) è un elenco dei componenti presenti in un software. Aiuta a rispondere a quali dei propri servizi usino una determinata libreria quando emerge una vulnerabilità o un problema di licenza.

Le metriche sugli asset software sono esposte alla consueta distorsione. Una posizione delle licenze può sembrare sana perché l'inventario è incompleto. Il costo dello shelfware può sembrare basso perché i contratti sono stati accorciati prima della revisione. Vale la salvaguardia ricavata dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law), perciò ogni misura qui è abbinata a un controllo indipendente (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

Un'avvertenza di natura giuridica: i termini delle licenze e i diritti di audit sono materia legale. Questo argomento descrive una pratica di misurazione. Non interpreta alcuna licenza e non sostituisce la consulenza di un legale qualificato per la propria situazione e giurisdizione.

## Principi chiave

- **Misurare i diritti d'uso rispetto all'uso effettivo.** Sapere che cosa si può usare e che cosa si usa è il confronto fondamentale.
- **Contare con l'unità che la licenza usa.** Utenti, dispositivi, core e sottoscrizioni sono cose diverse, e mescolarli nasconde la risposta.
- **Fare del percorso approvato il percorso veloce.** Un catalogo visibile e un'approvazione rapida riducono l'adozione ombra.
- **Includere i componenti oltre ai prodotti.** Le librerie open source e le loro licenze fanno parte del patrimonio.
- **Rivedere prima del rinnovo.** Il momento migliore per tagliare gli sprechi è prima della data del contratto.
- **Tenere l'ufficio legale nella conversazione.** L'interpretazione spetta a chi è qualificato per darla.
- **Condividere il quadro con i team.** I team che vedono il proprio uso e il proprio costo fanno scelte migliori.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Posizione effettiva delle licenze | Confronto tra i diritti d'uso detenuti e l'uso riscontrato, per prodotto, nell'unità di conteggio propria della licenza | diritti d'uso detenuti meno distribuzioni o utenti riscontrati, per prodotto | unità (eccedenza positiva, carenza negativa) | Registri dei diritti d'uso, strumento di rilevamento, sistema di gestione delle identità | Gestione degli asset IT; gestione dei fornitori | Catalogo visibile e dati d'uso per i team | Mensile per i prodotti principali; trimestrale per gli altri |
| Tasso di utilizzo delle licenze | Quota dei diritti d'uso pagati che sono in uso attivo | diritti d'uso con attività negli ultimi 90 giorni / diritti d'uso pagati | percentuale | Rapporti d'uso dei fornitori, log di gestione delle identità, registri dei diritti d'uso | Gestione degli asset IT; gestione finanziaria | Retrospettiva sul valore degli strumenti | Mensile |
| Costo dello shelfware | Costo annuo dei diritti d'uso pagati e inutilizzati | somma di (diritti d'uso inutilizzati per costo unitario) | valuta all'anno | Registri dei diritti d'uso, dati d'uso, fatture | Gestione degli asset IT; gestione finanziaria | Riduzione degli sprechi nella toolchain | Trimestrale |
| Numero di applicazioni non autorizzate | Numero di applicazioni software in uso che non sono nel catalogo approvato | applicazioni viste nei dati delle spese, nei log di single sign-on o nei dati di rete che non sono nel catalogo | conteggio | Note spese, identity provider, dati di rete e di endpoint | Gestione degli asset IT; gestione della sicurezza delle informazioni | Team che scelgono gli strumenti con supporto visibile | Mensile |
| Prontezza al rinnovo | Quota dei rinnovi che hanno avuto una revisione dell'uso prima della data di preavviso | rinnovi con una revisione dell'uso completata almeno 90 giorni prima della data di preavviso / rinnovi in scadenza nel periodo | percentuale | Registro dei contratti e registrazioni delle revisioni | Gestione dei fornitori; gestione finanziaria | Pianificare in anticipo il cambiamento | Trimestrale |
| Copertura SBOM | Quota dei servizi di produzione con una distinta base del software aggiornata | servizi con una SBOM generata nell'ultimo ciclo di rilascio / servizi di produzione | percentuale | Output della pipeline di build, catalogo dei servizi | Gestione degli asset IT; gestione della sicurezza delle informazioni | La definizione di completato include la visibilità sulle dipendenze | Mensile |
| Copertura della revisione open source | Quota dei componenti in produzione con un'identificazione della licenza e una decisione di policy registrate | componenti con licenza e decisione registrate / componenti trovati nelle SBOM | percentuale | Strumento di analisi della composizione del software, registro delle policy | Gestione degli asset IT; gestione dei fornitori | Revisione delle dipendenze nella pipeline | Mensile |

Si dichiari nel registro l'unità di conteggio per ciascun prodotto. L'utilizzo conta l'attività a partire da un evento definito, come l'accesso, e da una finestra dichiarata. Si escludano gli account di servizio e di test dai conteggi degli utenti solo quando i termini della licenza lo consentono, e si registri la regola. Il costo è il prezzo unitario contrattuale al netto degli sconti concordati, e si registra la data del prezzo.

## Raccomandazioni

### Sapere che cosa si detiene e che cosa si usa

**1. Tenere un registro dei diritti d'uso per ogni prodotto che costa denaro o comporta obblighi.** Il registro dovrebbe riportare fornitore, prodotto, tipo di licenza, unità di conteggio, quantità, durata, prezzo, date di rinnovo e di preavviso, restrizioni e responsabile. Si conservi il contratto o un collegamento a esso. La metrica dipende da questo registro, che spesso non esiste per le sottoscrizioni acquistate al di fuori degli approvvigionamenti.

**2. Misurare l'uso con l'unità del fornitore.** Le licenze per postazione contano gli utenti nominali, e le licenze per processore contano i core. L'utilizzo rispetto all'unità sbagliata dà una falsa tranquillità. Dove i termini sono complessi, si chieda una volta agli approvvigionamenti e all'ufficio legale di descrivere la regola di conteggio in linguaggio semplice, e la si registri.

**3. Combinare tre fonti di dati d'uso.** La console di amministrazione del fornitore, i log di accesso dell'identity provider e gli strumenti di rilevamento ne vedono ciascuno una parte. Dove non concordano, se ne scopra il motivo. Una postazione assegnata ma mai usata è candidata al recupero, e un utente che compare in un log e non in un altro può essere un problema di dati.

**4. Recuperare per impostazione predefinita le postazioni inutilizzate.** Si stabilisca una regola, come rimuovere l'accesso dopo 90 giorni senza uso e ripristinarlo su richiesta. Si renda facile il ripristino, così che la regola non crei frustrazione. Il recupero è una pratica continua, non un progetto, e funziona meglio quando è automatizzato e annunciato.

### Rendere facile il percorso giusto

**5. Pubblicare un catalogo degli strumenti approvati.** Si elenchi ciò che i team possono usare, quanto costa, chi lo supporta e come richiedere l'accesso. Si aggiunga una via rapida per proporre un nuovo strumento, con una breve revisione di sicurezza, privacy e costo. Un catalogo che aiuta le persone a trovare lo strumento esistente previene gli acquisti duplicati (si veda l'Argomento 6.3 «Metriche di adozione del servizio e del catalogo»).

**6. Osservare la proliferazione senza punirla.** Si usino i dati delle spese, i log di single sign-on e i dati di rete per trovare le applicazioni che non sono nel catalogo. Si tratti ciascuna come una conversazione: di che cosa ha bisogno il team, e uno strumento approvato potrebbe servire? Si conti il numero di applicazioni non autorizzate e se ne segua l'andamento, puntando a ricondurre quelle utili sotto gestione, non a sopprimerle.

**7. Dare ai team visibilità sul proprio uso e sul proprio costo.** Una vista mensile di postazioni, uso e costo per team permette loro di ripulire le proprie sottoscrizioni. La visibilità funziona meglio del controllo poliziesco, e rispetta la preferenza agile per team auto-organizzati dotati delle informazioni di cui hanno bisogno.

### Pianificare i rinnovi e gestire la dipendenza

**8. Rivedere l'uso prima di ogni rinnovo significativo.** Si fissi una revisione da 90 a 120 giorni prima della data di preavviso, con il responsabile, gli approvvigionamenti e la finanza. Si portino utilizzo, costo dello shelfware, alternative e riscontri del team. La prontezza al rinnovo è la quota di rinnovi che raggiunge questa revisione in tempo. Una data di preavviso mancata è un costo con una causa.

**9. Fare attenzione al vendor lock-in.** Il [vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) rende costoso cambiare fornitore. Si registri la via d'uscita per i prodotti importanti: formati di esportazione dei dati, condizioni contrattuali alla cessazione e sforzo per la sostituzione. Non è necessario evitare la dipendenza, ma se ne deve conoscere il prezzo.

**10. Generare una SBOM a ogni rilascio.** Gli strumenti di build possono produrre una SBOM automaticamente come parte della pipeline, così l'informazione resta aggiornata senza sforzo continuo. La si conservi con il rilascio e la si renda ricercabile per poter rispondere a quali servizi usino un componente. Ciò sostiene allo stesso modo la gestione delle licenze e la risposta alla sicurezza.

**11. Rivedere le licenze open source nella pipeline.** Gli strumenti di [analisi della composizione del software](https://en.wikipedia.org/wiki/Software_composition_analysis) identificano i componenti e le loro licenze. Si concordi con l'ufficio legale una breve policy su quali licenze siano approvate, quali richiedano revisione e quali non siano consentite per il proprio uso, e si faccia segnalare dalla pipeline le eccezioni. Si conservino le decisioni di policy in un registro. Lo strumento identifica le licenze, e una persona qualificata a interpretarle decide i casi difficili.

### Prepararsi con calma agli audit

**12. Tenere le evidenze pronte, non un affannoso rimedio.** Un [audit software](https://en.wikipedia.org/wiki/Software_audit) da parte di un fornitore o di un'autorità di regolamentazione chiede di dimostrare che l'uso corrisponde ai diritti d'uso. Se i registri dei diritti d'uso e i dati d'uso sono già riconciliati ogni mese, un audit è una richiesta ordinaria. Si coinvolgano per tempo l'ufficio legale e gli approvvigionamenti, si risponda attraverso un unico canale e non si dichiarino spontaneamente conclusioni che non siano state riviste con loro.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Posizione effettiva delle licenze | Contare in un'unità favorevole; lasciare fuori dal rilevamento le distribuzioni ombra | Contare nell'unità propria della licenza; confrontare con i dati delle spese e delle identità; revisione legale della regola di conteggio |
| Tasso di utilizzo delle licenze | Accorciare la finestra di attività; contare come uso gli accessi di bot o di account di servizio | Finestra fissa nel registro; escludere gli account non umani; confrontare con il rapporto d'uso del fornitore |
| Costo dello shelfware | Rinegoziare o disdire poco prima della revisione per ridurre il valore; ignorare le sottoscrizioni sulle carte | Includere tutte le fonti di spesa; seguire il costo all'inizio della finestra di preavviso |
| Numero di applicazioni non autorizzate | Approvare tutto nel catalogo per ridurre il conteggio; nascondere l'uso con account personali | Criteri di revisione del catalogo; osservare i dati di spesa e di identità; chiedere ai team di che cosa hanno bisogno |
| Prontezza al rinnovo | Svolgere una revisione sbrigativa; spostare in avanti la data di preavviso | Checklist di revisione con input obbligatori; date contrattuali detenute dagli approvvigionamenti |
| Copertura SBOM | Generare SBOM che omettono le dipendenze transitive; contare output di build non rilasciati | Definire la profondità nel registro; verificare a campione una SBOM rispetto all'artefatto distribuito |
| Copertura della revisione open source | Segnare i componenti come rivisti senza una decisione; accettare licenze «sconosciute» | Contare i componenti con licenza sconosciuta; rivedere un campione di decisioni |

Una lettura sana è una posizione delle licenze che corrisponde a evidenze indipendenti, un tasso di utilizzo che sale perché le postazioni vengono recuperate e non perché la definizione è cambiata, un numero di applicazioni non autorizzate che scende man mano che il catalogo migliora e rinnovi che arrivano con una revisione.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Approvazione centrale di tutti gli strumenti | Controllo forte, una sola vista | Lenta; incoraggia lo shadow IT |
| Scelta del team entro limiti di salvaguardia | Veloce; risponde alle esigenze del team | Più varietà; richiede visibilità e revisione |
| Recupero aggressivo delle postazioni | Risparmia sui costi | Può frustrare gli utenti se il ripristino è lento |
| Fornitura generosa di postazioni | Poco attrito | Gli sprechi si accumulano |
| Accordi aziendali | Costo unitario inferiore, maggiore semplicità | Lock-in; si paga un'ampiezza non necessaria |
| Utilizzo a consumo | Allinea il costo all'uso | Fatture imprevedibili |
| Scansione automatizzata delle licenze | Coerente e veloce | Richiede giudizio umano nei casi limite |
| Revisione manuale dei componenti | Accurata | Non scala con alberi di dipendenze estesi |

La risposta in prosa è dare ai team la scelta entro limiti di salvaguardia chiari, automatizzare i controlli e dedicare l'attenzione umana ai contratti importanti e alle questioni di licenza difficili. Si mantenga una via rapida per i nuovi strumenti e una via facile per ripristinare l'accesso recuperato.

## Domande da discutere con il team

**1. Quali tre prodotti ci costano di più, e sappiamo quante persone li usano?**
Si elenchino i contratti più grandi e l'unità di conteggio di ciascuno. Si confronti con i dati d'uso. Il facilitatore dovrebbe cercare i prodotti per i quali nessuno conosce l'unità o per i quali non esistono dati d'uso. Si concordi di raccogliere i dati per uno di essi prima del prossimo rinnovo.

**2. Come viene adottato qui un nuovo strumento, e quanto tempo richiede?**
Si ripercorra un esempio recente dalla richiesta all'accesso. Ci si chieda quanti team hanno saltato il percorso, e perché. La risposta mostra se il percorso approvato è veloce. Si concordi un miglioramento del percorso e un modo per capire se ha funzionato.

**3. Che cosa accadrebbe se un fornitore ci chiedesse di dimostrare la nostra posizione delle licenze il mese prossimo?**
Si ripercorra chi risponderebbe, quali registri esistono e quali lacune ci sono. La conversazione non dovrebbe mirare a trarre conclusioni giuridiche, ma solo a individuare i registri mancanti. Si indichino le persone dell'ufficio legale e degli approvvigionamenti che sarebbero coinvolte e come il team le raggiungerebbe.

**4. Dove recuperiamo le postazioni inutilizzate, e dove no?**
Si rivedano le regole di recupero per i prodotti principali. Ci si chieda che cosa accadrebbe se una regola fosse applicata al resto. Si discuta di come rendere indolore il ripristino dell'accesso, poiché è ciò che rende accettabile la regola.

**5. Siamo in grado di dire quali dei nostri servizi usano una determinata libreria open source?**
Si scelga una libreria ben nota e si provi a rispondere. Se occorrono più di pochi minuti, si discuta del perché. Si concordi quale passaggio della pipeline potrebbe produrre una SBOM e dove si potrebbero conservare i risultati.

**6. Da che cosa dipendiamo che sarebbe difficile abbandonare?**
Si elenchino i prodotti i cui dati o flussi di lavoro sono profondamente legati a un unico fornitore. Ci si chieda quanto costerebbe lasciarli e come si comincerebbe. Il facilitatore può registrare la risposta come input per la pianificazione dei rinnovi.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna scelgono strumenti e librerie ogni giorno. Dovrebbero usare il catalogo approvato dove serve loro, proporre integrazioni con una breve nota e lasciare che la pipeline generi le SBOM e segnali i problemi di licenza. Hanno bisogno di risposte rapide: una policy chiara sulle licenze comuni e una via per chiedere di quelle insolite. Un team che vede i propri dati di postazioni e di spesa li ripulirà senza che gli venga detto.

### Team di servizio e operations

I team di operazioni eseguono il rilevamento, gestiscono gli accessi e si occupano di rinnovi e audit. Dovrebbero riconciliare i dati d'uso con i diritti d'uso, recuperare le postazioni inutilizzate secondo un calendario e mantenere aggiornato il registro dei contratti. Sostengono anche l'onere di supporto degli strumenti non gestiti, il che è un buon motivo per ricondurre sotto gestione quelli utili.

### Leadership e governance

I dirigenti vogliono evitare costi non pianificati ed esposizione legale senza rallentare i team. Dovrebbero finanziare l'automazione, chiedere le evidenze indipendenti alla base delle affermazioni sulla posizione delle licenze e tenere coinvolti ufficio legale e approvvigionamenti. La governance dovrebbe attendersi che i rinnovi siano rivisti in tempo e che la policy sull'open source sia applicata nella pipeline.

### Clienti e utenti

Gli utenti vogliono che lo strumento di cui hanno bisogno funzioni al primo tentativo, senza lunghe attese. Notano quando l'accesso scompare senza preavviso o quando due strumenti svolgono lo stesso compito. Andrebbe detto loro quando le postazioni verranno recuperate, dato un modo semplice per richiedere l'accesso e andrebbero consultati quando uno strumento viene sostituito.

## In pratica: un esempio di ITIL agile

Il gruppo tecnologico di un'organizzazione giornalistica regionale supporta 900 dipendenti e gestisce una piattaforma editoriale con circa 40 servizi. I numeri che seguono sono illustrativi.

Il direttore finanziario chiede perché i costi del software siano cresciuti più in fretta dell'organico. Il responsabile della gestione degli asset software raccoglie i dati. I registri dei diritti d'uso coprono 61 prodotti. I log di accesso e i rapporti dei fornitori mostrano che la suite di progettazione grafica ha 220 postazioni e 140 utenti attivi negli ultimi 90 giorni, un tasso di utilizzo del 64 per cento, con postazioni inutilizzate che costano circa quanto lo stipendio di un ingegnere. I dati delle spese mostrano 37 applicazioni non presenti nel catalogo, per lo più strumenti di collaborazione e di analisi acquistati dai team. Tre dei rinnovi più grandi avevano date di preavviso trascorse senza una revisione dell'uso.

Il team apporta quattro modifiche insieme ai team di prodotto. Una regola di recupero delle postazioni rimuove l'accesso dopo 90 giorni di mancato uso, con una richiesta a un clic per ripristinarlo. Una pagina di catalogo elenca gli strumenti approvati, il loro costo e un responsabile, con una via di due giorni per proporre un nuovo strumento. Le revisioni dei rinnovi iniziano 100 giorni prima della data di preavviso, con una checklist di utilizzo, alternative e riscontri del team. La pipeline di build della piattaforma editoriale ora genera una SBOM a ogni rilascio, e una scansione delle licenze segnala per la revisione da parte dell'ufficio legale i componenti con licenze sconosciute o restrittive.

Tre mesi dopo, l'utilizzo della suite di progettazione grafica è dell'86 per cento dopo il recupero di 60 postazioni, e un rinnovo viene rinegoziato con un numero inferiore di postazioni. Il numero di applicazioni non autorizzate scende da 37 a 24, perché il team aggiunge quattro strumenti utili al catalogo e ritira i duplicati. La copertura SBOM è del 70 per cento dei servizi di produzione. La scansione trova un componente con licenza sconosciuta in un servizio poco usato, che l'ufficio legale esamina e il team sostituisce. Un fornitore richiede una verifica delle licenze per un altro prodotto, e i registri prodotti per l'audit corrispondono, con una correzione. Il direttore chiede la promessa di un utilizzo del 100 per cento, e la responsabile spiega che un valore sano lascia un certo margine per i nuovi arrivati e per i cambiamenti, e propone un intervallo come indicazione, non come obiettivo. La decisione viene registrata.

## Lente di settore

**Startup.** Gli strumenti vengono scelti in fretta e pagati con carta. Si tenga un elenco di una pagina delle sottoscrizioni con responsabili e date di rinnovo, lo si riveda ogni trimestre e si usino i livelli gratuiti in modo deliberato. Si presti attenzione alle licenze open source prima di distribuire software o di raccogliere investimenti, poiché gli investitori potrebbero chiederne conto.

**Piccola impresa.** Una manciata di prodotti comporta la maggior parte del costo. Si tenga il conteggio delle postazioni a mano, si impostino promemoria in calendario per i rinnovi e si chiedano ai fornitori i rapporti d'uso. Si diffidi delle sottoscrizioni a rinnovo automatico e delle licenze legate a una persona che ha lasciato l'organizzazione.

**Grande impresa.** Contratti complessi, fusioni e molte unità di business rendono difficili i registri dei diritti d'uso. Si investa in un modello di dati che contenga le unità di conteggio, si automatizzino i flussi di rilevamento e di identità e si dia a ufficio legale e approvvigionamenti un posto nella pipeline per la policy sull'open source. Ci si attenda audit dei fornitori e si preparino le evidenze in anticipo.

**Pubblica amministrazione e settore pubblico.** Le norme sugli appalti, le licenze di pubblica utilità e i requisiti di sovranità condizionano le scelte. Si documentino i motivi degli acquisti, si conservino i registri dei contratti per il periodo richiesto e si considerino requisiti gli standard aperti e le vie d'uscita. La trasparenza sulla spesa per il software può essere un obbligo di legge (si veda l'Argomento 8.4 «Metriche di fornitori e contratti»).

## Business case: motivazioni, ROI e TCO

I costi sono il tempo per costruire il registro dei diritti d'uso, gli strumenti per l'analisi dell'uso e della composizione e lo sforzo per rivedere i rinnovi. Alcuni strumenti sono già concessi in licenza come parte di piattaforme di identità o di endpoint. Il costo ricorrente è di alcune ore al mese per un patrimonio piccolo e di più per uno grande. Automatizzare il recupero e la generazione delle SBOM lo riduce.

Il ritorno deriva dalla spesa evitata e dalle sorprese evitate. Le postazioni inutilizzate sono un risparmio diretto al rinnovo. Le revisioni anticipate dei rinnovi permettono di negoziare a ragion veduta. Conoscere le proprie dipendenze accorcia la risposta alle vulnerabilità e alle questioni di licenza. Si eviti di citare percentuali di risparmio del settore che non si possono ricondurre a una fonte. Si misuri la propria baseline: postazioni inutilizzate per costo unitario, numero di rinnovi rivisti in ritardo, tempo per rispondere a «quali servizi usano questo componente» e costo di eventuali rilievi di audit passati. Si includa il costo del programma stesso e si conti l'esposizione legale evitata solo dove si può descrivere uno specifico rischio ridotto. Gli argomenti successivi sui costi sviluppano ulteriormente la visione finanziaria (si veda l'Argomento 7.5 «Costo del servizio ed economia unitaria»).

## Anti-pattern e insidie

- **Contare nell'unità sbagliata.** Un conteggio di postazioni per una licenza venduta per core è fuorviante. Si registri l'unità.
- **Considerare il rapporto del fornitore come tutta la verità.** Lo si combini con i propri log.
- **Bloccare gli strumenti per impostazione predefinita.** I team aggirano il blocco. Si renda veloce il percorso approvato.
- **Recuperare senza una via del ritorno.** Gli utenti perdono fiducia. Si renda il ripristino facile e rapido.
- **Rivedere i rinnovi dopo la data di preavviso.** La leva è sparita. Si inizi presto.
- **Scansionare le licenze e ignorare i risultati.** Una scansione senza una policy e un responsabile delle decisioni è rumore.
- **Interpretare le licenze nel team di consegna.** I casi difficili spettano all'ufficio legale.
- **Trattare le SBOM come scartoffie.** Se nessuno le interroga, decadono. Le si usi nelle esercitazioni di risposta.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Diritti d'uso e utilizzo | Contratti nella posta elettronica; nessun dato d'uso | Registri per i prodotti principali; verifiche d'uso occasionali | Registri dei diritti d'uso con unità di conteggio; uso ricavato dai dati di identità e dei fornitori | Posizione delle licenze e utilizzo rivisti ogni mese; postazioni recuperate automaticamente | Uso e spesa condivisi con i team; dati di acquisto e di utilizzo che circolano tra fornitori e organizzazione |
| Percorso di adozione | I team comprano ciò che preferiscono | Un elenco di strumenti approvati | Via rapida del catalogo con responsabili e criteri di revisione | Applicazioni non autorizzate tracciate e assorbite o ritirate | Scelta degli strumenti co-progettata con i team; servizi comuni riutilizzati in tutta l'organizzazione |
| Componenti e dipendenze | Sconosciuti | Elenchi manuali dei componenti per alcuni servizi | SBOM generata al rilascio; policy sulle licenze concordata con l'ufficio legale | Copertura seguita; eccezioni riviste; esercitazioni di risposta eseguite | SBOM e policy condivise con fornitori e clienti; vie d'uscita pianificate |

## Checklist

- [ ] Ogni prodotto a pagamento o che comporta obblighi ha un registro dei diritti d'uso con unità, quantità, durata e responsabile.
- [ ] L'uso proviene da almeno due fonti, confrontate ogni mese per i prodotti principali.
- [ ] Il recupero delle postazioni ha una regola, un preavviso e una via facile per tornare indietro.
- [ ] Esiste un catalogo degli strumenti approvati con una via rapida per proporne uno nuovo.
- [ ] I dati delle spese e delle identità sono verificati alla ricerca di applicazioni non autorizzate.
- [ ] Le revisioni dei rinnovi iniziano almeno 90 giorni prima della data di preavviso.
- [ ] Le SBOM sono generate e conservate per ogni rilascio dei servizi di produzione.
- [ ] Una policy sulle licenze concordata con l'ufficio legale segnala le eccezioni nella pipeline.
- [ ] Le vie d'uscita dai fornitori sono registrate per i prodotti importanti.
- [ ] I referenti dell'ufficio legale e degli approvvigionamenti per gli audit sono indicati e noti ai team.

## Prompt IA

**Costruire un modello di registro dei diritti d'uso.**

```text
Redigi un modello per registrare i diritti d'uso del software per [tipo di
organizzazione], che copra questi tipi di prodotto: [con licenza, SaaS, open
source, sviluppato internamente]. I campi dovrebbero includere unità di
conteggio, quantità, durata, prezzo, data di preavviso, restrizioni,
responsabile, fonte dei dati d'uso e note sull'uscita. Suggerisci come
compilare ciascun campo a partire dalle fonti esistenti: [elenco]. Non
interpretare alcun termine di licenza. Elenca le tue ipotesi e i campi che
richiedono il contributo dell'ufficio legale o degli approvvigionamenti.
```

**Preparare una revisione di rinnovo.**

```text
Abbiamo un rinnovo per [prodotto] con data di preavviso [data]. Fatti: diritti
d'uso [numero] [unità], uso attivo [numero] negli ultimi 90 giorni, costo
annuo [importo] e riscontri del team [sintesi]. Redigi una revisione di
rinnovo di una pagina con le domande da porre, le opzioni (rinnovare così
com'è, ridurre, sostituire, rinegoziare) e le informazioni che ci mancano
ancora. Non inventare prezzi di mercato. Elenca le tue ipotesi.
```

**Progettare una regola di recupero delle postazioni.**

```text
Proponi una policy di recupero delle postazioni per [prodotto] usato da
[numero] persone in [tipo di organizzazione]. Includi la finestra di
inattività, il preavviso agli utenti, come ripristinare l'accesso, le
eccezioni (per esempio congedi o uso stagionale) e come misurare se aiuta
senza infastidire gli utenti. Contesto: [strumenti disponibili]. Elenca le tue
ipotesi e i rischi.
```

**Classificare il risultato di una scansione delle licenze.**

```text
La nostra scansione di [servizio] ha trovato questi componenti e licenze:
[incolla l'elenco con gli identificativi delle licenze]. La nostra policy:
approvate [elenco], richiedono revisione [elenco], non consentite [elenco].
Ordina i componenti in questi tre gruppi, segnala i casi sconosciuti o
ambigui e suggerisci che cosa chiedere all'ufficio legale per ciascun
elemento segnalato. Non fornire conclusioni giuridiche. Elenca le tue ipotesi.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di asset software o di licenze.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica software indichi la propria unità di conteggio, il vettore di manipolazione e la salvaguardia.

## Punti chiave

- Si confrontino i diritti d'uso con l'uso effettivo, contato nell'unità propria della licenza.
- Si renda veloce il percorso approvato, così che i team non debbano nascondere ciò che usano.
- Si riveda l'uso prima delle date di preavviso dei rinnovi e si recuperino le postazioni inutilizzate con una regola visibile.
- Si generino le SBOM nella pipeline e si verifichino le licenze rispetto a una policy concordata con l'ufficio legale.
- Si tengano coinvolti ufficio legale e approvvigionamenti nell'interpretazione e negli audit.
- Si dia ai team visibilità sul proprio uso e sul proprio costo.

## Riferimenti e letture di approfondimento

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. ISO/IEC 19770-3, *Information technology: IT asset management: Part 3: Entitlement schema*, International Organization for Standardization.
3. National Telecommunications and Information Administration, *The Minimum Elements For a Software Bill of Materials (SBOM)*, United States Department of Commerce, 2021.
4. ISO/IEC 5962, *Information technology: SPDX Specification*, International Organization for Standardization, 2021.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Software asset management](https://en.wikipedia.org/wiki/Software_asset_management).
8. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
9. Wikipedia, [Software license](https://en.wikipedia.org/wiki/Software_license).
10. Wikipedia, [Software as a service](https://en.wikipedia.org/wiki/Software_as_a_service).
11. Wikipedia, [Open-source software](https://en.wikipedia.org/wiki/Open-source_software).
12. Wikipedia, [Copyleft](https://en.wikipedia.org/wiki/Copyleft).
13. Wikipedia, [Software bill of materials](https://en.wikipedia.org/wiki/Software_bill_of_materials).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
16. Wikipedia, [Software composition analysis](https://en.wikipedia.org/wiki/Software_composition_analysis).
17. Wikipedia, [Software audit](https://en.wikipedia.org/wiki/Software_audit).
