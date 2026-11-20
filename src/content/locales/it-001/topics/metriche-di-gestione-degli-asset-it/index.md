# Metriche di gestione degli asset IT

**Non si può supportare, mettere in sicurezza né pagare in modo sensato ciò che non si riesce a trovare: si misuri quanto siano accurati, completi e aggiornati i registri degli asset e si costruisca l'abitudine di registrare gli asset come sottoprodotto del lavoro quotidiano, anziché come pulizia annuale.**

## Panoramica e motivazione

Ogni servizio poggia su qualcosa: portatili, server, licenze, account cloud, dispositivi di rete, e i dati e i contratti a essi associati. La [gestione degli asset IT](https://en.wikipedia.org/wiki/IT_asset_management) (ITAM, IT asset management) è l'insieme di pratiche aziendali che unisce le funzioni finanziarie, contrattuali e di inventario a supporto della gestione del ciclo di vita e del processo decisionale strategico per l'ambiente IT. Risponde a domande da cui dipendono altre pratiche. Che cosa possediamo? Dove si trova? Chi ne è responsabile? Quanto costa? Quando deve essere rinnovato, aggiornato con patch o sostituito?

La consegna continua e ITIL si incontrano con qualche difficoltà su questo terreno. I team che consegnano software in modo continuo creano e distruggono infrastrutture in continuazione: container, macchine virtuali, ambienti di test e account cloud compaiono in pochi minuti. Un foglio di calcolo trimestrale non può starci dietro. L'ITAM della tradizione ITIL insiste su registri, responsabili e cicli di vita, e questa insistenza è giusta, perché gli asset non gestiti sono il terreno in cui crescono lacune di sicurezza, sprechi di denaro e inadempienze di conformità. Il contributo agile è la collaborazione continua tra approvvigionamenti, finanza, sicurezza e operatività, e la pratica abitudine di registrare gli asset automaticamente al momento della creazione, tramite pipeline e infrastruttura come codice, in modo che il registro sia un sottoprodotto del lavoro.

In questo argomento ricorrono tre termini.

- **Asset:** un elemento di valore per l'organizzazione che viene gestito lungo un ciclo di vita. Nell'ITAM comprende hardware, software, risorse cloud, sottoscrizioni e talvolta dati.
- **Registro dell'asset:** la voce che descrive un asset: che cos'è, chi ne è responsabile, dove si trova, in che stato è, quanto costa e a che cosa è collegato.
- **Ciclo di vita:** le fasi che un asset attraversa, tipicamente richiesto, acquistato, ricevuto, distribuito, in uso, manutenuto, ritirato e dismesso. Il ragionamento sul [ciclo di vita del prodotto](https://en.wikipedia.org/wiki/Product_lifecycle) si applica a ciascuna classe di asset, con fasi diverse per un portatile e per una sottoscrizione cloud.

L'ITAM si sovrappone alla gestione della configurazione, che tiene traccia delle relazioni tra i componenti per poter comprendere l'impatto delle modifiche, e i prossimi argomenti trattano a turno software, hardware e configurazione (si vedano l'Argomento 7.2 «Metriche di asset software e licenze», l'Argomento 7.3 «Metriche del ciclo di vita degli asset hardware» e l'Argomento 7.4 «Qualità della configurazione e del CMDB»). La differenza è di finalità: la gestione degli asset pone l'accento su responsabilità, costo e ciclo di vita, mentre la gestione della configurazione lo pone su struttura e dipendenze. Lo stesso inventario spesso alimenta entrambe.

Lo standard citato dalla maggior parte dei programmi ITAM è la ISO/IEC 19770, una famiglia di standard per i sistemi di gestione degli asset IT. Lo si citi per nome e ambito e lo si legga presso l'ente di normazione prima di fare affidamento su qualunque dettaglio. Questo argomento non ne riproduce il testo.

Le metriche sugli asset si trasformano facilmente in obiettivi, e gli obiettivi sono facili da raggiungere sulla carta. Un inventario può mostrare un'accuratezza del 100 per cento perché registra solo ciò che era già noto. Vale la salvaguardia ricavata dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): si misuri l'accuratezza rispetto a evidenze indipendenti e si consideri un valore perfetto come un motivo per guardare con più attenzione (si veda l'Argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

## Principi chiave

- **Registrare al momento della modifica.** Gli asset dovrebbero entrare nel registro e uscirne come parte del lavoro che li crea o li rimuove.
- **Misurare rispetto a evidenze indipendenti.** Accuratezza significa corrispondenza con la realtà, verificata con un metodo diverso dal registro stesso.
- **Ogni asset ha un responsabile.** Un asset che non appartiene a nessuno non verrà aggiornato con patch, pagato in modo sensato o ritirato.
- **Mantenere il registro il più snello possibile.** Si acquisiscano i campi di cui le decisioni hanno bisogno, e non di più.
- **Combinare le fonti.** Strumenti di rilevamento, approvvigionamenti, finanza, gestione delle identità e fatturazione cloud vedono ciascuno una parte del patrimonio.
- **Collaborare tra le funzioni.** Approvvigionamenti, finanza, sicurezza e operatività condividono il registro e la sua qualità.
- **Trattare le lacune come informazioni.** Un asset non contabilizzato è un riscontro da comprendere, non un fallimento da nascondere.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Accuratezza dell'inventario | Quota di asset campionati il cui registro corrisponde a quanto riscontrato | asset campionati il cui registro corrisponde alle evidenze fisiche o tecniche su tutti i campi concordati / asset campionati | percentuale | Campione di audit confrontato con il registro degli asset e con i dati di rilevamento | Gestione degli asset IT; gestione della configurazione | La definizione di completato include la registrazione dell'asset | Trimestrale |
| Copertura del rilevamento | Quota di asset attesi visti dal rilevamento nel periodo | asset visti da almeno una fonte di rilevamento negli ultimi 30 giorni / asset nel registro che il rilevamento può vedere | percentuale | Rapporti dello strumento di rilevamento collegati al registro | Gestione degli asset IT; monitoraggio e gestione degli eventi | Lo stato dell'infrastruttura come codice corrisponde alla realtà | Mensile |
| Tasso di riconciliazione | Quota di asset corrispondenti tra fonti indipendenti | asset corrispondenti sia nel registro sia in una seconda fonte (per esempio approvvigionamenti, gestione delle identità o fatturazione cloud) / asset presenti in una delle due fonti | percentuale | Esportazioni di registro, approvvigionamenti, gestione delle identità, fatturazione cloud | Gestione degli asset IT; gestione dei fornitori | Un'unica fonte di verità per gli ambienti | Mensile |
| Quota di asset senza responsabile | Quota di asset privi di un responsabile nominato e valido | asset senza responsabile o con un responsabile che ha lasciato l'organizzazione / asset nel registro | percentuale | Registro collegato alla rubrica del personale | Gestione degli asset IT; gestione della sicurezza delle informazioni | Responsabilità chiara di servizi e componenti | Mensile |
| Completezza della fase del ciclo di vita | Quota di asset con una fase del ciclo di vita aggiornata e le date che tale fase richiede | asset con fase e date richieste registrate / asset nel registro | percentuale | Registro | Gestione degli asset IT; gestione dei rilasci e delle distribuzioni | Ciclo di vita degli ambienti tracciato nella pipeline | Mensile |
| Tempo di registrazione | Ritardo tra una modifica a un asset e il suo aggiornamento nel registro | mediana e 85º percentile delle ore o dei giorni dall'evento di modifica all'aggiornamento del registro | giorni | Eventi di modifica, approvvigionamento o pipeline confrontati con i marcatori temporali del registro | Gestione degli asset IT; abilitazione delle modifiche | Registrazione automatizzata nella pipeline | Mensile |
| Tasso di asset non contabilizzati | Quota di asset attesi che non è possibile localizzare o spiegare in sede di audit | asset attesi ma non trovati, e non spiegati da una dismissione approvata / asset attesi | percentuale | Risultati dell'audit | Gestione degli asset IT; gestione della sicurezza delle informazioni | Riscontro retrospettivo sugli elementi smarriti | A ogni audit |

Si dichiari l'ambito di «asset» per ciascuna classe. Un portatile, una macchina virtuale, una sottoscrizione e una licenza sono cose diverse, e i campi del registro e le evidenze differiscono. Il tempo di registrazione parte dall'evento che ha generato la modifica, come la ricezione della merce, l'esecuzione di una pipeline o l'avvio di una sottoscrizione, e termina quando il registro lo riflette. Si escludano gli asset volutamente fuori ambito, come i container di test di breve durata, e li si elenchi come classe di esclusione nel registro.

## Raccomandazioni

### Decidere che cosa si sta gestendo

**1. Elencare le classi di asset che contano e il perché.** Si parta da quelle che comportano costi, rischi o obblighi di legge: dispositivi degli utenti finali, server e account cloud, apparati di rete, licenze e sottoscrizioni software, archivi di dati critici. Per ciascuna classe si scrivano le decisioni che il registro deve sostenere: patching, rinnovo, audit, sostituzione, dismissione. Si tralascino le classi di cui nessuna decisione ha bisogno.

**2. Definire i campi minimi.** Per ciascuna classe si scelgano i pochi campi richiesti dalle decisioni: identificativo, tipo, responsabile, ubicazione o account, stato, date di acquisizione e di fine, centro di costo e collegamenti al servizio che l'asset supporta. Un registro breve e accurato vale più di uno lungo e obsoleto. La definizione si riporti nel registro delle metriche.

**3. Assegnare un responsabile a ogni classe e a ogni asset.** Il responsabile della classe progetta il registro e il processo. Il responsabile dell'asset è la persona o il team che ne risponde durante l'uso. Quando un asset è condiviso si indichi un team, non un individuo, e si mantenga aggiornata la rubrica in modo che le uscite dall'organizzazione non lascino asset orfani.

### Acquisire gli asset mentre il lavoro si svolge

**4. Registrare gli asset nella pipeline.** Dove l'infrastruttura è creata tramite codice, si faccia in modo che la pipeline scriva nel registro alla creazione e alla rimozione. Così il tempo di registrazione si avvicina a zero e il registro concorda con il codice. La pratica agile di consegnare le modifiche in modo continuo lo favorisce: se ogni distribuzione aggiorna il registro, il registro è raramente errato.

**5. Collegare approvvigionamenti e registro.** Per l'hardware e il software acquistati, si faccia dell'ordine di acquisto o della creazione della sottoscrizione il fattore scatenante di un registro, e della ricezione della merce o dell'attivazione il fattore scatenante di un cambio di stato. Le pratiche di [gestione delle scorte](https://en.wikipedia.org/wiki/Inventory_management) per i beni fisici offrono schemi utili per ricevere, immagazzinare ed erogare gli elementi. Dove gli acquisti avvengono al di fuori degli approvvigionamenti, come le carte di credito dei team per le sottoscrizioni, si aggiunga una verifica mensile dei dati delle note spese.

**6. Usare il rilevamento come controllo, non come registro.** Gli strumenti di rilevamento scandiscono le reti e gli account cloud e riferiscono ciò che trovano. Sono bravi a dire che cosa esiste e scarsi nel dire chi ne è responsabile o perché. Li si usi per individuare gli asset mancanti e sconosciuti e per il confronto con il registro. Il passaggio di confronto tra una fonte e l'altra è una forma di [riconciliazione](https://en.wikipedia.org/wiki/Reconciliation_(accounting)), la stessa idea che i contabili usano per confrontare due insiemi di registrazioni.

**7. Etichettare e applicare tag alla creazione.** Si richieda un responsabile e un tag di servizio su ogni risorsa cloud e un'etichetta su ogni dispositivo fisico. I metodi di [tracciamento degli asset](https://en.wikipedia.org/wiki/Asset_tracking), come i codici a barre e i tag a radiofrequenza, aiutano con gli elementi fisici in magazzini e uffici. Le risorse prive di tag sono riscontri per il team del responsabile, gestiti come parte normale dell'operatività.

### Misurare con onestà

**8. Effettuare l'audit con un campione casuale.** Ogni trimestre si estragga un campione casuale di asset dal registro e lo si verifichi rispetto alle evidenze: si trovi il dispositivo, si ispezioni la risorsa, si confermi il responsabile. Poi si estragga un campione nel verso opposto, dai risultati del rilevamento e dai dati di approvvigionamento, e si verifichi che ciascun elemento compaia nel registro. Le due direzioni rivelano lacune diverse. Si riporti l'accuratezza per ciascuna classe separatamente.

**9. Osservare la qualità dei dati nel tempo.** Completezza, accuratezza e tempestività dei registri sono aspetti della [qualità dei dati](https://en.wikipedia.org/wiki/Data_quality). Si segua l'andamento per campo e per classe e si osservi quali campi si degradano più in fretta. La deriva di responsabile e ubicazione è normale e indica dove automatizzare.

**10. Riportare le lacune.** Si mostrino gli asset non contabilizzati, la quota senza responsabile e gli elementi non riconciliati oltre all'accuratezza complessiva. Un rapporto che nasconde le proprie eccezioni è un rapporto su se stesso. Si indichino un responsabile e una data per ciascuna classe di lacune.

### Chiudere il cerchio

**11. Ritirare gli asset con la stessa cura con cui li si crea.** Anche la dismissione richiede registrazioni: la data, il metodo e, per i dispositivi che contenevano dati, l'evidenza che i dati siano stati cancellati. Una registrazione della [catena di custodia](https://en.wikipedia.org/wiki/Chain_of_custody) mostra chi ha gestito un asset e quando. Gli asset ritirati ancora presenti nel registro gonfiano i costi e confondono gli audit.

**12. Usare il registro nelle decisioni di ogni giorno.** Patching, rinnovi, risposta alla sicurezza e budgeting dovrebbero attingere dal registro. Quando le persone lo usano, lo correggono. Quando il registro serve solo per gli audit, decade. Si riveda l'uso del registro con i team che ne dipendono e si correggano per primi i campi di cui si lamentano.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Accuratezza dell'inventario | Campionare gli asset facili; svolgere l'audit solo dopo una pulizia; contare una corrispondenza su meno campi | Campione casuale estratto da qualcuno esterno al team; elenco di campi fisso; campione estratto in entrambe le direzioni |
| Copertura del rilevamento | Restringere gli «asset attesi» a ciò che il rilevamento può vedere; escludere le reti difficili da scandire | Documentare le esclusioni; confrontare con approvvigionamenti e fatturazione cloud |
| Tasso di riconciliazione | Scegliere una seconda fonte derivata dalla prima; abbinare automaticamente su chiavi deboli | Usare fonti davvero indipendenti; verificare a campione le corrispondenze a mano |
| Quota di asset senza responsabile | Assegnare come responsabile un team generico; inserire una persona fittizia | Conteggio degli asset di cui sono responsabili team generici; campione di conferma dei responsabili |
| Completezza della fase del ciclo di vita | Compilare date predefinite; impostare ogni asset su «in uso» | Confrontare la fase con le evidenze nell'audit; esaminare la distribuzione per età |
| Tempo di registrazione | Retrodatare gli eventi di modifica; registrare l'ora dell'evento come ora del registro | Confrontare con i marcatori temporali dei sistemi di origine; traccia di audit sulle modifiche |
| Tasso di asset non contabilizzati | Cancellare gli asset senza approvazione; riclassificarli come dismessi | Tasso di approvazione e di evidenza delle dismissioni; confrontare le cancellazioni con i registri della finanza |

Una lettura sana è un valore di accuratezza che resta sotto il 100 per cento per ragioni oneste, con lacune visibili che si riducono, responsabili che confermano i propri asset quando glielo si chiede e un registro che le persone usano per prendere decisioni.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Registrazione automatizzata | Veloce, coerente, poco sforzo | Richiede ingegneria; non vede ciò che è fuori dalla pipeline |
| Registrazione manuale | Flessibile, funziona per qualsiasi cosa | Lenta, soggetta a errori, decade |
| Guidato dal rilevamento | Trova ciò che non si conosce | Non può fornire responsabilità o finalità |
| Guidato dagli approvvigionamenti | Cattura costo e contratto | Non vede gli acquisti ombra e i livelli gratuiti |
| Controllo stretto degli acquisti | Registro solido | Rallenta i team; incoraggia i palliativi |
| Controllo leggero con verifiche | Veloce; si basa sulla fiducia | Più lacune da trovare e correggere |
| Schema di registro ampio | Reportistica ricca | Difficile da mantenere accurato |
| Schema di registro ridotto | Facile da mantenere | Analisi limitata |

La risposta in prosa è automatizzare la registrazione dove l'infrastruttura è codice, usare i dati di rilevamento e di fatturazione come controlli indipendenti e mantenere il registro snello. Si abbia fiducia nei team perché creino ciò di cui hanno bisogno, si chieda loro di applicarvi i tag e si verifichi con il campionamento.

## Domande da discutere con il team

**1. Se domani dovessimo trovare tutti gli asset legati al nostro servizio più importante, quanto tempo ci vorrebbe?**
Si scelga un servizio e se ne tracciano gli asset a partire dal registro e da altre fonti. Si cronometri l'esercizio e si annotino le lacune. Il facilitatore dovrebbe registrare quali fonti concordavano e quali no. Il risultato mostra se il registro è uno strumento di lavoro o un documento.

**2. Quali asset vengono creati senza che nessuno in questa stanza lo sappia?**
Si pensi ad account cloud, sottoscrizioni, ambienti di test e dispositivi acquistati fuori dagli approvvigionamenti. Ci si chieda come comparirebbero. La conversazione individua le falle. Si concordi una fonte di evidenza indipendente da aggiungere alla riconciliazione in questo trimestre.

**3. Chi è responsabile degli asset che abbiamo oggi, e come sappiamo che esistono ancora?**
Si prenda un campione di asset e si chieda ai responsabili indicati di confermare. Si annoti quanti responsabili hanno cambiato ruolo o lasciato l'organizzazione. Si decida come mantenere allineati la rubrica e il registro, per esempio con un controllo automatico quando qualcuno se ne va.

**4. Come facciamo l'audit del nostro stesso registro senza correggere i nostri compiti da soli?**
Si discuta di chi estrae il campione e di chi lo verifica. Ci si chieda che cosa accadrebbe se il risultato fosse scarso. Il facilitatore dovrebbe verificare se le persone si sentono al sicuro nel riferire un cattivo risultato, poiché un audit non sicuro produce buoni risultati.

**5. Che cosa registriamo che nessuno usa?**
Si elenchino i campi del registro e ci si chieda quali decisioni usino ciascuno di essi. I campi senza utilizzatori sono candidati alla rimozione. I campi usati ma inaffidabili sono candidati all'automazione. Si concordino due modifiche.

**6. Che cosa succede a un asset tra «non serve più» e «sparito»?**
Si ripercorra un dispositivo ritirato o un servizio dismesso. Chi conferma che i dati sono stati cancellati? Quando viene chiuso il registro? Le lacune in questo percorso sono il luogo in cui si accumulano costi, rischi e rilievi di audit.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna creano la maggior parte dei nuovi asset e avvertono la tenuta dei registri come un attrito, a meno che non sia automatica. Dovrebbero considerare il registro degli asset parte della definizione di completato per un ambiente, lasciare che le pipeline registrino ciò che creano e applicare ai tag delle risorse i responsabili. Beneficiano di un registro accurato quando devono individuare i costi, applicare patch o ritirare un ambiente.

### Team di servizio e operations

I team di operazioni dipendono dal registro per il patching, la risposta agli incidenti e la capacità. Dovrebbero riconciliare il rilevamento con il registro, perseguire gli asset senza responsabile e riferire le lacune come riscontri. Si occupano anche della gestione fisica: ricezione, imaging, stoccaggio e dismissione, dove contano le registrazioni della catena di custodia.

### Leadership e governance

Dirigenti e revisori si affidano ai dati sugli asset per il controllo dei costi, l'assicurazione della sicurezza e la conformità. Dovrebbero chiedere il metodo di accuratezza e l'elenco delle lacune, non solo il valore complessivo, e finanziare l'automazione della registrazione. La governance dovrebbe attendersi che il registro sia usato nelle decisioni e trattare con sospetto un 100 per cento dichiarato.

### Clienti e utenti

Gli utenti sperimentano la gestione degli asset quando un dispositivo arriva pronto, una licenza è disponibile quando serve e un portatile smarrito viene gestito bene. Il loro riscontro sull'inserimento e sulle dotazioni è evidenza di come il processo funzioni in pratica (si veda l'Argomento 6.4 «Esperienza degli utenti e dei dipendenti»). Hanno anche un ruolo: informare l'IT quando le dotazioni si spostano o vengono restituite.

## In pratica: un esempio di ITIL agile

Il reparto IT di un'azienda logistica di medie dimensioni supporta circa 2.400 dipendenti e gestisce una piattaforma di prodotto su infrastruttura cloud. I numeri che seguono sono illustrativi.

Un audit interno chiede il numero di dispositivi e di risorse cloud di proprietà dell'azienda. Il registro riporta 3.100 dispositivi degli utenti finali e 1.850 risorse cloud. La responsabile della gestione degli asset decide di verificare i valori prima di riferirli. Estrae un campione casuale di 100 dispositivi dal registro e ne trova 87 corrispondenti su tutti e quattro i campi concordati, un'accuratezza dell'87 per cento. Nella direzione opposta, estrae 100 dispositivi dallo strumento di gestione degli endpoint e ne trova 94 nel registro. La copertura del rilevamento del patrimonio cloud è dell'82 per cento, perché tre account creati dai team di progetto non sono collegati allo strumento di rilevamento. La riconciliazione dell'esportazione della fatturazione cloud con il registro fa corrispondere il 71 per cento delle risorse fatturate, e quelle non corrispondenti sono per lo più ambienti di test privi di tag. La quota di asset senza responsabile è del 9 per cento, e un terzo di essi appartiene a persone che hanno lasciato l'organizzazione.

Il team apporta quattro modifiche insieme ai team di prodotto e alla finanza. I modelli delle pipeline ora registrano ogni nuovo ambiente e richiedono un responsabile e un tag di servizio. La fattura cloud mensile viene riconciliata con il registro, e le risorse prive di tag vengono segnalate ai titolari degli account. Una verifica mensile confronta la rubrica del personale con i responsabili degli asset e invia un elenco ai dirigenti quando qualcuno se ne va. La ricezione della merce in magazzino innesca lo stesso giorno un aggiornamento del registro. Cambiano anche il modo di riferire: il riepilogo dell'audit mostra l'accuratezza da entrambe le direzioni di campionamento, l'elenco delle lacune e la quota senza responsabile.

Dopo due trimestri, l'accuratezza del campione dal registro è del 93 per cento, la riconciliazione del patrimonio cloud è del 90 per cento e la quota senza responsabile è del 3 per cento. Il responsabile della finanza chiede un unico valore di «accuratezza dell'inventario» per il consiglio di amministrazione. La responsabile della gestione degli asset fornisce il valore con il metodo e l'elenco delle lacune e rifiuta di riferire un obiettivo del 100 per cento, spiegando che lo scopo è mantenere le lacune visibili e in diminuzione. La decisione viene registrata, e il team osserva che il valore più basso ottenuto con un metodo migliore è più utile della cifra precedente non verificata.

## Lente di settore

**Startup.** Può non esserci un registro formale, solo account cloud e qualche portatile. Si tenga un semplice elenco con i responsabili, si applichino i tag alle risorse cloud fin dall'inizio e si riveda l'elenco ogni mese. Si eviti di acquistare una piattaforma prima di sapere a quali domande occorre rispondere.

**Piccola impresa.** Un singolo amministratore può occuparsi di tutto. Un foglio di calcolo con pochi campi può funzionare, se qualcuno lo confronta con gli acquisti due volte l'anno. Si presti attenzione a licenze e sottoscrizioni, facili da perdere di vista, e alla dismissione dei dispositivi che contenevano dati.

**Grande impresa.** La scala richiede automazione, responsabili di classe chiari e riconciliazione tra più fonti. Ci si attenda che le acquisizioni portino patrimoni non familiari e si pianifichi un modo standard per ricondurli allo stesso registro. Ci si allinei con la finanza sulla contabilizzazione degli asset, compreso il modo in cui le [immobilizzazioni](https://en.wikipedia.org/wiki/Fixed_asset) vengono capitalizzate e ammortizzate, e si concordi dove il registro IT e il libro contabile della finanza devono coincidere.

**Pubblica amministrazione e settore pubblico.** Gli enti pubblici affrontano audit, norme sugli appalti e obblighi di tenuta dei registri, e spesso conservano dati sensibili sui dispositivi. Si conservino le evidenze della dismissione, si documenti la catena di custodia e si allinei il registro con la rendicontazione degli asset richiesta. Si tratti il registro come parte delle evidenze per gli audit (si veda l'Argomento 8.3 «Metriche di conformità e audit»).

## Business case: motivazioni, ROI e TCO

I costi comprendono il tempo per progettare il registro, gli strumenti di rilevamento e riconciliazione se non se ne dispone, lo sforzo di ingegneria per registrare gli asset nelle pipeline e lo sforzo ordinario di campionamento e correzione. Molte organizzazioni possiedono già strumenti di rilevamento e di gestione degli endpoint. Un team di dimensioni modeste può gestire un programma, e il costo corrente è basso una volta automatizzata la registrazione.

I ritorni sono sprechi evitati e rischio ridotto. Registri accurati riducono il pagamento di sottoscrizioni e risorse inutilizzate, accelerano la risposta agli incidenti e il patching perché si sa che cosa esiste, e riducono lo sforzo di audit. Si eviti di dichiarare risparmi percentuali specifici tratti da studi pubblicati. Si misuri la propria baseline: il numero di risorse cloud senza responsabile e il loro costo mensile, il tempo per rispondere a una domanda di audit e le licenze pagate ma non utilizzate. Si conti anche il costo del rischio: un server sconosciuto è un'esposizione di sicurezza, e un dispositivo smarrito con dati ha un costo di notifica. Il trattamento finanziario dei costi è affrontato più avanti in questa parte (si veda l'Argomento 7.5 «Costo del servizio ed economia unitaria»).

## Anti-pattern e insidie

- **La pulizia annuale.** Un grande sforzo una volta all'anno decade nel giro di settimane. Si registri in modo continuo e si campioni ogni trimestre.
- **Fare audit solo sul registro.** Dimostra che il registro concorda con se stesso. Si campioni da evidenze indipendenti in entrambe le direzioni.
- **Un punteggio perfetto.** Un valore del 100 per cento di solito significa ambito ristretto o evidenze deboli. Si guardi che cosa è stato escluso.
- **Campi del responsabile compilati con un team generico.** Sembra completo ed è inutile. Si conti la responsabilità generica come una lacuna.
- **Troppi campi.** Le persone li riempiono con valori predefiniti. Si mantenga il registro a ciò di cui le decisioni hanno bisogno.
- **Prima lo strumento, poi il processo.** Una piattaforma di rilevamento senza regole di responsabilità e di ciclo di vita produce un disordine più grande. Si decidano prima le domande.
- **Penalizzare i team per le lacune.** Nasconderanno gli asset. Si trattino le lacune come riscontri e si corregga la causa.
- **Dimenticare la dismissione.** Gli asset ritirati che restano nel registro o escono senza una registrazione di cancellazione creano costi e rischi.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Acquisizione | Fogli di calcolo aggiornati quando ci si ricorda | Registro per le classi principali, per lo più manuale | Registrazione legata ad approvvigionamenti e pipeline | Registrazione automatizzata; tempo di registrazione misurato | Asset registrati tra team e fornitori da un unico flusso di eventi |
| Accuratezza | Sconosciuta | Conteggi occasionali | Campionamento indipendente trimestrale in entrambe le direzioni | Accuratezza e lacune seguite per classe e alimentate al miglioramento | Controlli indipendenti condivisi tra IT, finanza e sicurezza |
| Uso | Registro usato solo per gli audit | Usato da pochi team | Patching, rinnovo e budgeting attingono dal registro | Uso rivisto; campi adeguati alle decisioni | Il registro guida decisioni automatizzate con supervisione umana |

## Checklist

- [ ] Sono elencate le classi di asset e le decisioni che ciascun registro sostiene.
- [ ] I campi minimi per classe sono definiti e riportati nel registro delle metriche.
- [ ] Ogni classe e ogni asset ha un responsabile nominato, tenuto aggiornato rispetto alla rubrica.
- [ ] Le pipeline registrano la nuova infrastruttura con un responsabile e un tag di servizio.
- [ ] Gli approvvigionamenti e la creazione di sottoscrizioni innescano i registri degli asset.
- [ ] I dati di rilevamento e di fatturazione sono riconciliati con il registro ogni mese.
- [ ] Ogni trimestre si effettua l'audit di un campione casuale in entrambe le direzioni.
- [ ] Gli elenchi delle lacune, con responsabili e date, sono pubblicati insieme ai valori di accuratezza.
- [ ] La dismissione ha un metodo registrato e l'evidenza della cancellazione dei dati.
- [ ] I campi inutilizzati sono rimossi; il registro è usato nelle decisioni quotidiane.

## Prompt IA

**Progettare un registro minimo degli asset.**

```text
Gestiamo queste classi di asset IT in [tipo di organizzazione]: [elenco]. Le
decisioni che i nostri dati sugli asset devono sostenere sono: [elenco, per
esempio patching, rinnovo, audit, sostituzione, dismissione]. Per ciascuna
classe, proponi i campi minimi del registro, quale fonte dovrebbe fornire
ciascun campo e come ciascuno potrebbe essere verificato in modo indipendente.
Non inventare requisiti normativi. Elenca le tue ipotesi e tutto ciò che devo
confermare con la finanza, la sicurezza o l'ufficio legale.
```

**Pianificare un campione di audit bidirezionale.**

```text
Il nostro registro contiene [numero] asset in [classi]. Disponiamo anche di
dati di rilevamento, dati di approvvigionamento e dati di fatturazione cloud.
Progetta un audit trimestrale con campioni casuali estratti dal registro e
dalle altre fonti, indica quanto dovrebbe essere grande ciascun campione per
una lettura utile (spiega il ragionamento senza sopravvalutare la precisione),
che cosa registrare e come riferire accuratezza e lacune con onestà. Elenca le
tue ipotesi.
```

**Analizzare un risultato di riconciliazione.**

```text
Abbiamo riconciliato il nostro registro con [fonte] e abbiamo trovato:
corrispondenti [numero], solo nel registro [numero], solo nella fonte [numero].
Ecco esempi di ciascun gruppo con i campi in nostro possesso: [incolla esempi
anonimizzati]. Suggerisci le probabili ragioni di ciascuna mancata
corrispondenza, quali sono rapide da correggere, quali richiedono un
cambiamento di processo e che cosa verificare per primo. Non presumere cause
che i dati non possono sostenere. Elenca le tue ipotesi.
```

**Redigere un controllo di uscite e trasferimenti.**

```text
Redigi un semplice processo mensile per trovare gli asset i cui responsabili
hanno lasciato l'organizzazione o cambiato ruolo, usando la rubrica del
personale e il registro degli asset. Includi i passaggi, chi riceve l'elenco,
il tempo concesso per la riassegnazione, che cosa accade se nessuno risponde e
come registrare l'esito. Contesto: [strumenti e dimensione del team]. Elenca le
tue ipotesi e le considerazioni sulla privacy che devo verificare.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica sugli asset prima di rendicontarla.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica sugli asset riporti il proprio vettore di manipolazione, la salvaguardia e la regola dell'evidenza indipendente.

## Punti chiave

- Si registrino gli asset al momento della modifica, preferibilmente tramite pipeline e approvvigionamenti, in modo che il registro sia un sottoprodotto del lavoro.
- Si misuri l'accuratezza rispetto a evidenze indipendenti, campionando in entrambe le direzioni.
- Ogni asset ha bisogno di un responsabile, e gli asset senza responsabile sono riscontri.
- Si mantenga il registro snello e lo si renda utile nelle decisioni quotidiane.
- Si riportino le lacune, non solo il valore complessivo, e si diffidi di un punteggio perfetto.
- Si pianifichi la dismissione con la stessa cura della creazione.

## Riferimenti e letture di approfondimento

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: IT Asset Management*, TSO, 2020.
3. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
4. Redman, T. C., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
5. Wikipedia, [IT asset management](https://en.wikipedia.org/wiki/IT_asset_management).
6. Wikipedia, [Product lifecycle](https://en.wikipedia.org/wiki/Product_lifecycle).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Inventory management](https://en.wikipedia.org/wiki/Inventory_management).
9. Wikipedia, [Reconciliation (accounting)](https://en.wikipedia.org/wiki/Reconciliation_(accounting)).
10. Wikipedia, [Asset tracking](https://en.wikipedia.org/wiki/Asset_tracking).
11. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
12. Wikipedia, [Chain of custody](https://en.wikipedia.org/wiki/Chain_of_custody).
13. Wikipedia, [Fixed asset](https://en.wikipedia.org/wiki/Fixed_asset).
