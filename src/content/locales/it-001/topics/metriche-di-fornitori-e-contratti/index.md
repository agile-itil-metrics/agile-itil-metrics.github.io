# Metriche di fornitori e contratti

**I fornitori fanno parte del Suo servizio: misurate che cosa consegnano, quanto dipendete da loro e se potreste andarvene, e costruite la relazione attorno a risultati condivisi e a un confronto regolare, non attorno a penali e sorprese.**

## Panoramica e motivazione

Quasi nessun servizio è costruito e gestito da un solo team. I fornitori di cloud lo ospitano, i fornitori di software lo alimentano, collaboratori esterni presidiano il service desk, un'azienda di telecomunicazioni trasporta il traffico e un partner di pagamenti sposta il denaro. Quando uno di loro fallisce, gli utenti non distinguono tra il Suo fallimento e il loro. La [gestione dei fornitori](https://en.wikipedia.org/wiki/Vendor_management) è la disciplina di selezionare, contrattualizzare, monitorare e, quando necessario, abbandonare i fornitori. La pratica di gestione dei fornitori di ITIL la descrive come l'assicurare che i fornitori e le loro prestazioni siano gestiti in modo appropriato per sostenere l'erogazione del servizio senza lacune.

L'[esternalizzazione](https://en.wikipedia.org/wiki/Outsourcing) sposta il lavoro verso una parte esterna e non sposta la responsabilità: l'organizzazione resta responsabile nei confronti dei propri clienti e delle autorità di regolamentazione. I contratti sono dunque un mezzo di coordinamento e di allocazione del rischio, non un trasferimento di responsabilità. Quando sono coinvolti molti fornitori, il [multisourcing](https://en.wikipedia.org/wiki/Multisourcing) e la pratica di [integrazione e gestione dei servizi](https://en.wikipedia.org/wiki/Service_integration_and_management) (SIAM) li coordinano in modo che l'utente veda un solo servizio. Le misure di questo argomento descrivono la salute di quella rete.

I valori agili offrono un orientamento utile. Il Manifesto Agile afferma una preferenza per la collaborazione con il cliente rispetto alla negoziazione dei contratti. Ciò non significa ignorare i contratti, che allocano rischio e denaro reali. Significa costruire relazioni in cui fornitore e cliente lavorano agli stessi risultati, condividono le informazioni presto e si adeguano man mano che imparano. I fornitori trattati come partner Le dicono dei problemi prima. I fornitori che temono le penali li nascondono. La misurazione dovrebbe sostenere il primo schema.

Nella misurazione dei fornitori ricorrono quattro problemi.

- **Rapporti verdi e utenti scontenti.** Un fornitore può rispettare ogni livello di servizio contrattuale e tuttavia offrire un'esperienza scadente, uno schema che l'argomento precedente sugli accordi di livello di servizio chiama effetto anguria (si veda l'Argomento 5.1 «Metriche SLA, OLA e XLA»). Il contratto misura ciò che dice, e gli utenti sperimentano qualcosa di più ampio.
- **Concentrazione e lock-in.** Dipendere fortemente da un solo fornitore è efficiente finché non fallisce o non aumenta i prezzi. Il [vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in) rende costoso il cambiamento, e il costo cresce silenziosamente a ogni integrazione.
- **Dipendenze nascoste.** I Suoi fornitori hanno a loro volta dei fornitori. Un [attacco alla catena di fornitura](https://en.wikipedia.org/wiki/Supply_chain_attack) prende di mira un fornitore fidato per raggiungere i suoi clienti, e il guasto di un subappaltatore può raggiungerLa senza alcun contatto da parte del Suo fornitore diretto.
- **L'uscita come ripensamento.** Molti contratti sono firmati senza un piano per terminarli. Una [strategia di uscita](https://en.wikipedia.org/wiki/Exit_strategy) mai testata potrebbe non funzionare quando serve.

Un'ulteriore considerazione riguarda la forma del contratto. La [contrattazione basata sulle prestazioni](https://en.wikipedia.org/wiki/Performance-based_contracting) lega il pagamento ai risultati e può allineare gli interessi quando i risultati sono chiari e misurabili. Può anche invitare alla manipolazione quando le misure sono ristrette. La salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) si applica in entrambe le direzioni: i fornitori ottimizzano il livello di servizio misurato, e gli acquirenti ottimizzano i risparmi dichiarati (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

Questo argomento si basa sui registri della parte precedente, in particolare sui dati di software e finanziari (si vedano l'Argomento 7.2 «Metriche di asset software e licenze» e l'Argomento 7.5 «Costo del servizio ed economia unitaria») e prepara agli obblighi di rendicontazione che spesso gravano sugli enti pubblici (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Principi chiave

- **Resta Sua la responsabilità.** I contratti allocano rischio e denaro, e non trasferiscono la responsabilità verso utenti e autorità di regolamentazione.
- **Misurare risultati ed esperienza oltre ai termini contrattuali.** Un rapporto contrattuale verde può nascondere un servizio scadente.
- **Conoscere le proprie dipendenze.** Mappare i fornitori critici, i loro principali subappaltatori e i servizi che da essi dipendono.
- **Pianificare l'uscita prima di firmare.** Un piano di uscita non testato è una speranza.
- **Collaborare regolarmente.** Revisioni congiunte frequenti e franche valgono più di riunioni di crisi annuali.
- **Condividere i dati apertamente.** Entrambe le parti traggono vantaggio dagli stessi numeri.
- **Differenziare i fornitori per criticità.** Dedicare l'impegno di gestione dove un fallimento farebbe più male.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Conseguimento dei livelli di servizio del fornitore | Quota di misure di livello di servizio contrattuali rispettate da un fornitore, abbinata a una misura di esperienza per lo stesso servizio | misure rispettate nel periodo / misure contrattuali; riportato accanto al punteggio di esperienza degli utenti per il servizio | percentuale | Rapporti del fornitore, monitoraggio proprio, dati dei sondaggi | Gestione dei fornitori; gestione dei livelli di servizio | Revisione del contributo di un partner agli obiettivi | Mensile |
| Tempo di incidente attribuito ai fornitori | Ore di impatto sul servizio attribuite a un componente o a un'azione di un fornitore | somma delle ore di impatto degli incidenti in cui un guasto del fornitore è stato una causa confermata | ore | Registrazioni degli incidenti con analisi delle cause, rapporti sugli incidenti dei fornitori | Gestione degli incidenti; gestione dei fornitori | Tempo perso per ostacoli esterni | Mensile |
| Copertura del registro dei contratti | Quota di fornitori con un contratto attuale, un responsabile interno nominato e una revisione pianificata | fornitori con tutti e tre gli elementi / fornitori nel perimetro | percentuale | Registro dei contratti, registrazioni degli acquisti | Gestione dei fornitori; gestione finanziaria | Chiara responsabilità sulle dipendenze esterne | Trimestrale |
| Aggiornamento della due diligence | Quota di fornitori critici la cui valutazione del rischio rientra nel ciclo di revisione | fornitori critici valutati entro il ciclo / fornitori critici | percentuale | Valutazioni del rischio dei fornitori | Gestione dei fornitori; gestione del rischio; gestione della sicurezza delle informazioni | Revisione regolare dei rischi | Trimestrale |
| Prontezza all'uscita | Quota di fornitori critici con un piano di uscita documentato e testato entro il periodo concordato | fornitori critici con un piano di uscita testato / fornitori critici | percentuale | Piani di uscita e registrazioni dei test | Gestione dei fornitori; gestione della continuità del servizio | Ripristino esercitato di una dipendenza | Annuale |
| Concentrazione | Quota di servizi critici che dipendono da un singolo fornitore senza un'alternativa testata | servizi critici con una dipendenza da un unico fornitore e senza alternativa testata / servizi critici | percentuale | Mappa delle dipendenze, registro dei fornitori | Gestione dei fornitori; gestione del rischio | Evitare un singolo punto di guasto | Trimestrale |
| Tasso di chiusura delle azioni congiunte | Quota di azioni concordate nelle revisioni congiunte con i fornitori che sono state chiuse entro la scadenza | azioni congiunte chiuse entro la data / azioni congiunte in scadenza | percentuale | Verbali delle revisioni e tracciatore delle azioni | Gestione dei fornitori; miglioramento continuo | Azioni di retrospettiva consegnate | Trimestrale |

Definisca nel registro la criticità, con i relativi criteri, e la applichi in modo coerente. Una misura di livello di servizio è «rispettata» secondo la definizione del contratto, e la misura di esperienza è quella che Lei sceglie per lo stesso servizio. Il tempo di incidente attribuito ai fornitori conta solo le cause confermate, e il metodo di attribuzione è concordato con il fornitore ove possibile. La prontezza all'uscita considera testato un piano solo quando nel periodo sia stata registrata una simulazione a tavolino o un'esercitazione.

## Raccomandazioni

### Conoscere i propri fornitori e ciò che da essi dipende

**1. Mantenere un registro dei fornitori con responsabili e criticità.** Elenchi ogni fornitore con un contratto, che cosa fornisce, il responsabile interno, le date del contratto e la criticità. Includa i servizi gratuiti o informali su cui i Suoi team fanno affidamento. La criticità è un giudizio sul danno in caso di fallimento del fornitore, e decide quanta attenzione di gestione riceve la relazione.

**2. Mappare la catena di dipendenze dei servizi critici.** Per ogni servizio critico, elenchi i fornitori da cui dipende e, dove possibile, i loro principali subappaltatori e le piattaforme condivise. Utilizzi le registrazioni di configurazione per i collegamenti interni e chieda ai fornitori le loro dipendenze critiche (si veda l'Argomento 7.4 «Qualità della configurazione e del CMDB»). La mappa mostra il rischio di concentrazione e Le dice dove un'interruzione altrove La raggiungerebbe.

**3. Valutare il rischio in modo proporzionato.** Utilizzi una valutazione breve e standard per i fornitori a basso rischio e una più approfondita per quelli critici, che copra sicurezza, resilienza, stabilità finanziaria e conformità. Rivaluti con un ciclo e quando qualcosa cambia. Condivida i risultati con il fornitore e concordi le azioni. Standard come ISO/IEC 27036 forniscono indicazioni sulla sicurezza delle informazioni nelle relazioni con i fornitori.

### Scrivere contratti per i risultati e la cooperazione

**4. Definire livelli di servizio che riflettano ciò che gli utenti sperimentano.** Includa misure contrattuali che si riferiscono ai risultati degli utenti, come la velocità dell'azione rivolta all'utente, oltre alla disponibilità dei componenti. Chieda i dati per verificarli da Sé. Un [accordo di livello di servizio](https://en.wikipedia.org/wiki/Service-level_agreement) con misure che nessuno può verificare, o che non corrispondono a ciò che gli utenti percepiscono, produce l'effetto anguria.

**5. Preferire obiettivi condivisi alle sole penali.** I crediti per gli obiettivi mancati sono comuni e hanno il loro posto, ma un contratto costruito soprattutto su penali rende la relazione conflittuale e i dati meno onesti. Dove possibile, includa obiettivi condivisi, revisioni congiunte regolari e ripartizione dei guadagni per i miglioramenti. Riveda l'incentivo per gli effetti collaterali che potrebbe causare.

**6. Pianificare l'uscita nel contratto.** Includa l'esportazione dei dati in formati utilizzabili, il supporto durante la transizione, un preavviso ragionevole e chiarezza sulla proprietà intellettuale e sulla titolarità delle configurazioni. Chieda quanto costerebbe andarsene e lo metta per iscritto. Un contratto senza termini di uscita La lascia a negoziare sotto pressione.

### Gestire la relazione

**7. Tenere revisioni congiunte regolari.** Si incontri con una cadenza adeguata alla criticità, con un breve ordine del giorno standard: risultati, incidenti, rischi, modifiche in arrivo e azioni. Condivida con il fornitore le Sue misure e chieda le sue. Tenga traccia delle azioni e della loro chiusura. Tratti l'incontro come una sessione di lavoro tra partner e inviti le persone che svolgono il lavoro.

**8. Condividere le informazioni sugli incidenti in modo rapido e aperto.** Concordi come e con quale rapidità ciascuna parte avvisa l'altra e riveda congiuntamente gli incidenti significativi senza attribuzione di colpe (si veda l'Argomento 3.4 «Metriche degli incidenti maggiori»). Misuri il tempo di incidente attribuito ai fornitori per vedere dove si trova l'impatto maggiore e lo usi nella conversazione, non come un bastone.

**9. Combinare i dati contrattuali con l'esperienza degli utenti.** Per ogni servizio critico del fornitore, affianchi le misure contrattuali alle misure di soddisfazione o di sforzo degli utenti (si veda l'Argomento 6.2 «Experience level agreement»). Il disaccordo tra le due è il punto di partenza di una discussione.

**10. Coordinare i fornitori in un unico servizio.** Dove più fornitori contribuiscono a un solo servizio, concordi chi possiede il risultato end-to-end, come funzionano i passaggi di consegne e chi comunica con gli utenti. Le pratiche SIAM lo formalizzano. Misuri il ritardo nei passaggi di consegne e le escalation ripetute tra fornitori (si veda l'Argomento 9.3 «Metriche di collaborazione e passaggi di consegne»).

### Ridurre la concentrazione e prepararsi a lasciare

**11. Misurare la concentrazione e decidere in modo deliberato.** Riporti la quota di servizi critici che dipendono da un singolo fornitore senza un'alternativa testata. La concentrazione è talvolta la scelta giusta, perché porta semplicità e peso negoziale. Ne faccia una decisione con un responsabile, un costo e una data di revisione, e non un incidente di percorso.

**12. Testare l'uscita.** Per i fornitori critici, ripercorra il piano di uscita almeno una volta in un periodo definito: si possono esportare i dati, esiste l'alternativa, quanto tempo richiederebbe, che cosa si romperebbe? Un'esercitazione a tavolino rivela le lacune a basso costo. Registri i risultati e colmi le lacune, e aggiorni il piano quando l'architettura cambia.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Conseguimento dei livelli di servizio del fornitore | Il fornitore esclude eventi dalla misurazione; il cronometro si ferma; definizioni ristrette | Monitoraggio proprio; misura dell'esperienza; audit delle esclusioni |
| Tempo di incidente attribuito ai fornitori | Contestare l'attribuzione; classificare i guasti del fornitore come lato cliente | Revisione congiunta delle cause; revisore neutrale per le controversie; monitoraggio della quota contestata |
| Copertura del registro dei contratti | Nominare responsabili che non lo sanno; elencare contratti senza date | Conferma del responsabile; verifica che le riunioni di revisione si tengano |
| Aggiornamento della due diligence | Valutazioni solo tramite questionario; i fornitori si autocertificano | Requisito di evidenze per i fornitori critici; verifica a campione |
| Prontezza all'uscita | Scrivere un piano e chiamarlo testato; esercitazioni senza passaggi reali | Registrare che cosa è stato esercitato; revisione indipendente dell'esercitazione |
| Concentrazione | Suddividere un fornitore in più entità giuridiche sulla carta | Mappa delle dipendenze fino al fornitore ultimo; revisione delle piattaforme condivise |
| Tasso di chiusura delle azioni congiunte | Fissare azioni facili; chiudere senza effetto | Revisione della qualità delle azioni; verifica che il problema previsto sia migliorato |

Una lettura sana comprende un registro dei fornitori con responsabili attivi, livelli di servizio che corrispondono all'esperienza degli utenti, incidenti discussi apertamente, concentrazione scelta in modo deliberato e piani di uscita che sono stati esercitati.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Un solo fornitore | Semplicità, peso negoziale, integrazione | Rischio di concentrazione, lock-in |
| Più fornitori | Resilienza, scelta | Costo di integrazione, onere di coordinamento |
| Contratto con molte penali | Rimedi chiari | Conflittuale; nasconde i problemi |
| Partnership con obiettivi condivisi | Dati onesti, apprendimento più rapido | Richiede fiducia e maturità; rimedi meno chiari |
| Pagamento basato sui risultati | Allinea gli incentivi | Risultati difficili da definire e misurare; manipolazione |
| Pagamento basato sugli input | Semplice, prevedibile | Premia l'impegno, non i risultati |
| Revisioni congiunte frequenti | Allerta precoce | Costo in tempo |
| Solo revisioni annuali | Basso costo | Lente nell'individuare i problemi |

La risposta in sintesi è riservare i rimedi contrattuali ai casi gravi, costruire le relazioni quotidiane attorno a risultati condivisi e dati aperti e scegliere la concentrazione di proposito. Adegui l'intensità della gestione alla criticità del fornitore.

## Domande da discutere con il team

**1. Quale fallimento di un fornitore danneggerebbe maggiormente i nostri utenti e qual è il nostro piano?**
Indichi le prime tre dipendenze. Per ciascuna, chieda che cosa accadrebbe in un'interruzione prolungata e quale sia il piano. Il facilitatore dovrebbe cercare dipendenze senza piano, senza responsabile o senza alternativa testata. Concordate quale affrontare per prima.

**2. Dove un rapporto contrattuale verde è in disaccordo con ciò che ci dicono gli utenti?**
Prenda un servizio di un fornitore e confronti le misure contrattuali con il feedback degli utenti. Chieda quale sia più affidabile e perché. La conversazione trova spesso un livello di servizio che misura la cosa sbagliata. Concordate di sollevarlo alla prossima revisione congiunta.

**3. Chi nel team possiede ciascuna relazione con i fornitori critici e con quale frequenza si incontrano?**
Controlli il registro. Se un responsabile non incontra il fornitore da mesi, ne chieda il motivo. Concordate una cadenza e un ordine del giorno standard per i più critici.

**4. Che cosa servirebbe per lasciare il nostro fornitore più grande?**
Stimi tempo, costo e rischio dell'uscita. Chieda quali dati, integrazioni e competenze Vi vincolano. Decidete se la dipendenza sia una scelta deliberata e che cosa la cambierebbe.

**5. Come veniamo a conoscenza di un incidente di un fornitore e con quale rapidità?**
Rivedete gli ultimi due incidenti dei fornitori e il tempo dall'inizio alla nostra conoscenza. Verifichi i termini di notifica. Concordate miglioramenti, come flussi di stato condivisi o un referente nominato.

**6. Che cosa condividiamo con i nostri fornitori e che cosa condividono loro con noi?**
Elenchi i dati che ciascuna parte fornisce. Discutete quale condivisione ulteriore sarebbe utile, come previsioni della domanda o preavviso delle modifiche. Consideri la riservatezza e concordi uno scambio con cui iniziare.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna dipendono dai fornitori per piattaforme, componenti e servizi, e risentono direttamente delle modifiche dei fornitori. Dovrebbero mantenere visibili le dipendenze nella progettazione, dare ai fornitori un preavviso precoce dei cambiamenti di domanda e partecipare alle revisioni congiunte. Possono costruire resilienza nei propri servizi, per esempio con soluzioni di ripiego, in modo che il fallimento di un fornitore non fermi tutto.

### Team di servizio e operations

I team di operazioni gestiscono la relazione quotidiana: aprono incidenti, monitorano le prestazioni e coordinano i passaggi di consegne. Detengono le evidenze sull'impatto attribuito ai fornitori e sull'esperienza di lavoro con ciascuno di essi. Dovrebbero registrare con cura l'attribuzione, mantenere funzionanti i canali di notifica e partecipare alle esercitazioni di uscita.

### Leadership e governance

I dirigenti firmano i contratti e accettano il rischio. Dovrebbero chiedere rapporti su criticità, concentrazione e prontezza all'uscita, definire le aspettative di partnership ed evitare di scegliere i fornitori solo in base al prezzo. La governance dovrebbe richiedere una due diligence proporzionata alla criticità e l'evidenza che i piani di uscita siano stati testati.

### Clienti e utenti

Gli utenti sperimentano il risultato combinato della rete di fornitori. Hanno bisogno di una comunicazione chiara quando un problema di un fornitore li riguarda e di un supporto coerente a prescindere da quale parte sia in colpa. Il loro feedback è la verifica che le prestazioni dei fornitori, così come riportate, corrispondano alla realtà.

## In pratica: un esempio di ITIL agile

Il dipartimento IT di un gruppo ospedaliero regionale supporta i sistemi clinici con circa 60 fornitori, tra cui un fornitore di hosting, un fornitore di cartelle cliniche elettroniche, un operatore di rete e un service desk gestito. I numeri seguenti sono illustrativi.

Dopo una lunga interruzione del sistema delle cartelle cliniche, il consiglio di amministrazione chiede quante siano tali dipendenze. Il responsabile della gestione dei fornitori ricostruisce il quadro. Il registro dei fornitori copre 47 dei 60 fornitori noti con un contratto attuale, un responsabile e una data di revisione, una copertura del 78 percento. La due diligence è aggiornata per 6 dei 14 fornitori critici. Su 22 servizi critici, 9 dipendono da un singolo fornitore senza alternativa testata, una concentrazione del 41 percento, e due di quei fornitori condividono la stessa piattaforma di hosting. Il service desk gestito riporta il 98 percento di conseguimento dei livelli di servizio, mentre la soddisfazione del personale clinico nei confronti del desk è in calo, e il rapporto mensile mostra che gli incidenti in attesa del secondo livello del fornitore sono esclusi dal tempo di risposta misurato. Nell'ultimo trimestre il tempo di incidente attribuito ai fornitori ha totalizzato 53 ore, tre quarti delle quali da due fornitori. Il piano di uscita per il fornitore delle cartelle cliniche esiste sulla carta e non è mai stato esercitato.

Il responsabile della gestione dei fornitori concorda i cambiamenti con i responsabili dei sistemi clinici e con i fornitori. I fornitori critici ottengono una revisione congiunta trimestrale con un ordine del giorno condiviso e dati di entrambe le parti. Il contratto del service desk è modificato per misurare il tempo di risoluzione dal punto di vista dell'utente, e il fornitore accetta di condividere i dati delle proprie code. Accanto alle misure contrattuali viene aggiunto un breve sondaggio sull'esperienza. La due diligence per i fornitori critici passa a un ciclo annuale con richieste di evidenze. Il team svolge un'esercitazione di uscita a tavolino per il fornitore delle cartelle cliniche, che rileva come il formato di esportazione dei dati non comprenda la traccia di audit e come l'alternativa richiederebbe mesi di preparazione. Il rilievo confluisce nella successiva negoziazione contrattuale. Il gruppo decide inoltre quali delle nove dipendenze da un unico fornitore accettare deliberatamente e quali ridurre.

Un anno dopo, la copertura del registro è del 96 percento, la due diligence è aggiornata per 13 dei 14 fornitori critici e la concentrazione è del 27 percento, con ogni caso rimanente registrato come decisione accettata. Il tempo di incidente attribuito ai fornitori scende a 22 ore a trimestre. La misura contrattuale del service desk e il punteggio di soddisfazione clinica si muovono ora insieme. Il direttore finanziario chiede una clausola che imponga penali finanziarie per qualsiasi livello di servizio mancato presso tutti i fornitori. Il responsabile della gestione dei fornitori propone penali solo per le misure critiche legate alla sicurezza e obiettivi condivisi per le altre, spiegando che penali generalizzate spingono i fornitori a nascondere gli eventi e a discutere sulla misurazione. La decisione viene registrata e il modello di contratto viene aggiornato.

## Lente di settore

**Startup.** I fornitori sono per lo più strumenti cloud e software come servizio. Mantenga un elenco con responsabili e date di rinnovo, sappia quali dati detiene ciascuno e conservi un'esportazione dei dati critici. Scelga fornitori con percorsi di esportazione chiari, perché il lock-in precoce è economico da creare e costoso da disfare.

**Piccola impresa.** Pochi fornitori sostengono l'attività, e il titolare li gestisce spesso direttamente. Mantenga contatti e termini contrattuali in un unico luogo, chieda aggiornamenti su stato e incidenti e testi il ripristino da backup conservati al di fuori del fornitore. Riduca la dipendenza da una singola persona presso il fornitore.

**Grande impresa.** Molti fornitori e livelli richiedono una funzione di gestione dei fornitori, livelli di criticità e termini contrattuali standard per sicurezza, resilienza e uscita. Utilizzi un coordinamento in stile SIAM dove i fornitori devono lavorare insieme. Mantenga una mappa centrale delle dipendenze e la condivida con i team di rischio e di continuità.

**Governo e settore pubblico.** Il diritto degli appalti, le regole sulla concorrenza e i requisiti di trasparenza condizionano il modo in cui i fornitori sono scelti e gestiti. I contratti possono essere lunghi, con obblighi di rendicontazione pubblica e requisiti di sovranità, accessibilità e uscita. Documenti le decisioni, riporti le prestazioni dei fornitori come richiesto e pianifichi la nuova gara (si veda l'Argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi sono il tempo dei responsabili dei fornitori e di una piccola funzione di coordinamento, un registro e i dati sulle dipendenze, l'impegno di valutazione e le revisioni congiunte. Le esercitazioni di uscita costano da poche ore a giorni per fornitore critico. Gli strumenti possono essere semplici come un registro condiviso.

I ritorni sono incidenti causati dai fornitori meno numerosi e più brevi, condizioni commerciali migliori grazie a una negoziazione informata, costi di lock-in evitati e una risposta più rapida e serena quando un fornitore fallisce. Costruisca il caso a partire dai Suoi dati: le ore di incidente attribuite ai fornitori e il loro costo, il costo e il tempo delle passate transizioni di fornitore e la differenza tra livelli di servizio contrattuali ed esperienza riferita dagli utenti. Eviti di citare tassi di fallimento dell'esternalizzazione di settore a meno che non possa risalire alla fonte e al metodo. Includa il costo di mantenere pronta una seconda opzione e lo confronti con l'esposizione che riduce (si veda l'Argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Firmare e dimenticare.** I contratti si allontanano dalla realtà. Tenga revisioni regolari con responsabili e dati.
- **Fidarsi solo del rapporto del fornitore.** Misura ciò che il fornitore sceglie. Monitori in modo indipendente e confronti con l'esperienza degli utenti.
- **Relazioni basate solo sulle penali.** Riducono l'onestà. Costruisca obiettivi condivisi accanto ai rimedi.
- **Nessun piano di uscita.** Andarsene diventa una crisi. Scriva e testi il piano prima che serva.
- **Concentrazione nascosta.** Più fornitori possono condividere un'unica piattaforma. Mappi fino al fornitore ultimo.
- **Colpevolizzazione nelle revisioni congiunte.** I fornitori nascondono gli incidenti. Riveda gli incidenti senza attribuzione di colpe.
- **Gestione uniforme di tutti i fornitori.** Spreca impegno sui piccoli e trascura i critici. Differenzi per criticità.
- **Ignorare i subappaltatori.** Il Suo rischio comprende il loro. Chieda delle dipendenze critiche.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Conoscere i fornitori | Contratti sparsi | Registro per i fornitori principali | Registro con responsabili, criticità e date di revisione | Mappa delle dipendenze fino ai subappaltatori; copertura e aggiornamento monitorati | Visione condivisa delle dipendenze con fornitori e clienti |
| Prestazioni e relazione | Reattiva; dispute | Rapporti mensili dai fornitori | Misure contrattuali e di esperienza confrontate; revisioni congiunte regolari | Azioni monitorate; incidenti rivisti congiuntamente; attribuzione concordata | Fornitori integrati come partner con obiettivi condivisi e dati aperti |
| Resilienza e uscita | Nessuna | Termini di uscita in alcuni contratti | Piani di uscita per i fornitori critici | Piani di uscita esercitati; concentrazione decisa in modo deliberato | Alternative mantenute pronte; esercitazioni congiunte con i fornitori |

## Checklist

- [ ] Un registro dei fornitori elenca ogni fornitore con un responsabile, la criticità e le date del contratto.
- [ ] I servizi critici hanno una mappa delle dipendenze che raggiunge i principali subappaltatori.
- [ ] I livelli di servizio contrattuali sono abbinati a una misura di esperienza degli utenti.
- [ ] Le revisioni congiunte con i fornitori critici si tengono con una cadenza e un ordine del giorno standard.
- [ ] La due diligence per i fornitori critici è aggiornata e basata su evidenze.
- [ ] I termini e i canali di notifica degli incidenti sono concordati e testati.
- [ ] Il tempo di incidente attribuito ai fornitori è registrato con un'attribuzione concordata.
- [ ] La concentrazione è misurata e ogni dipendenza da un unico fornitore è una decisione registrata.
- [ ] Esistono piani di uscita per i fornitori critici, esercitati nel periodo.
- [ ] I termini contrattuali includono l'esportazione dei dati, il supporto alla transizione e la titolarità delle configurazioni.

## Prompt IA

**Costruire una valutazione della criticità dei fornitori.**

```text
Abbiamo questi fornitori: [elencare con ciò che ciascuno fornisce]. I nostri
servizi critici sono: [elencare]. Proponi criteri per valutare la criticità dei
fornitori (per esempio danno in caso di indisponibilità, dati detenuti,
facilità di sostituzione), assegna a ciascun fornitore un punteggio rispetto ad
essi con le motivazioni e suggerisci l'intensità di gestione per livello. Non
inventare fatti sui fornitori. Elenca le tue ipotesi e ciò che devo confermare
con i responsabili dei servizi.
```

**Confrontare le misure contrattuali con l'esperienza degli utenti.**

```text
Per il servizio del fornitore [nome], le misure contrattuali e i risultati
dell'ultimo [periodo] sono: [incollare]. I dati sull'esperienza degli utenti per
lo stesso servizio sono: [incollare i punteggi dei sondaggi o i temi dei
commenti]. Descrivi dove concordano e dove non concordano, fornisci spiegazioni
plausibili per ciascun disaccordo e suggerisci domande per la prossima revisione
congiunta. Non presumere intenzioni da parte del fornitore. Elenca le tue
ipotesi.
```

**Progettare un'esercitazione di uscita.**

```text
Progetta un'esercitazione a tavolino di mezza giornata sull'uscita da
[fornitore] per [servizio]. Includi lo scenario, i partecipanti, i passaggi da
ripercorrere (esportazione dei dati, alternativa, passaggio, comunicazione), che
cosa registrare (tempo, lacune, decisioni) e come trasformare i risultati in
azioni e modifiche contrattuali. Non presumere prodotti specifici. Elenca le tue
ipotesi e i rischi dell'esercitazione.
```

**Redigere l'ordine del giorno di una revisione congiunta.**

```text
Redigi un ordine del giorno e un pacchetto dati di una pagina per una revisione
congiunta trimestrale con [fornitore] su [servizio]. Includi i risultati rispetto
alle misure contrattuali e all'esperienza degli utenti, incidenti e
apprendimento, rischi, modifiche in arrivo da entrambe le parti e revisione delle
azioni. Mantieni un tono collaborativo. Usa questi input: [incollare]. Elenca le
tue ipotesi e ogni punto che richieda una revisione legale.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di fornitori o di contratti.
- [Competenza di manutenzione di Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che una voce di metrica sui fornitori riporti il proprio vettore di manipolazione, la salvaguardia e la regola di attribuzione.

## Punti chiave

- Resta Sua la responsabilità dei servizi che esternalizza: gestisca i fornitori come parte del Suo servizio.
- Abbini le misure contrattuali all'esperienza degli utenti e monitori in modo indipendente dal rapporto del fornitore.
- Mappi le dipendenze fino ai subappaltatori e tratti la concentrazione come una decisione deliberata.
- Costruisca le relazioni attorno a risultati condivisi e a revisioni congiunte regolari, riservando i rimedi ai casi gravi.
- Pianifichi l'uscita prima di firmare e la testi per i fornitori critici.
- Riveda gli incidenti con i fornitori senza attribuire colpe e condivida i dati apertamente.

## Riferimenti e letture di approfondimento

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Supplier Management*, TSO, 2020.
2. ISO/IEC 27036, *Information technology: Security techniques: Information security for supplier relationships*, International Organization for Standardization.
3. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
6. Wikipedia, [Vendor management](https://en.wikipedia.org/wiki/Vendor_management).
7. Wikipedia, [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing).
8. Wikipedia, [Multisourcing](https://en.wikipedia.org/wiki/Multisourcing).
9. Wikipedia, [Service integration and management](https://en.wikipedia.org/wiki/Service_integration_and_management).
10. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
11. Wikipedia, [Supply chain attack](https://en.wikipedia.org/wiki/Supply_chain_attack).
12. Wikipedia, [Exit strategy](https://en.wikipedia.org/wiki/Exit_strategy).
13. Wikipedia, [Performance-based contracting](https://en.wikipedia.org/wiki/Performance-based_contracting).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
