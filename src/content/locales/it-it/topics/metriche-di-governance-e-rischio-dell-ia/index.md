# Metriche di governance e rischio dell'IA

**L'uso dell'IA richiede la stessa disciplina di qualsiasi modifica a un servizio in produzione: sapere dov'è, chi ne è responsabile, quanto è rischiosa, come viene collaudata e modificata e che cosa accade quando va male, con una supervisione che le persone siano davvero in grado di esercitare.**

## Panoramica e motivazione

L'IA entra in un'organizzazione da molte porte. Un team adotta un assistente di programmazione. Un fornitore aggiunge una funzionalità generativa a un prodotto già in uso. Un dipendente incolla un documento in uno strumento pubblico. Un reparto costruisce un modello per assegnare punteggi alle richieste. Ciascuno è un uso dell'IA con i propri benefici e rischi, e pochi sono visibili in un unico luogo. La governance è l'insieme di strutture, politiche e pratiche che rendono quegli usi noti, riconducibili a un responsabile e sufficientemente sicuri. Le metriche di rischio dicono se la governance funziona.

ITIL dispone dei mattoni: la governance del sistema di valore del servizio, la gestione del rischio, l'abilitazione delle modifiche, la gestione della sicurezza delle informazioni, la gestione dei fornitori e il miglioramento continuo. Le modalità di lavoro agili e DevOps forniscono l'abitudine al cambiamento piccolo, controllato e reversibile e ai controlli automatizzati nella pipeline. La governance dell'IA non ha bisogno di un universo separato. Ha bisogno di queste pratiche applicate a cose che si comportano in modo diverso dal software convenzionale.

In che cosa è diversa l'IA?

- **Il comportamento è statistico e può cambiare senza una modifica del codice.** Un modello può comportarsi diversamente dopo un aggiornamento del fornitore, una variazione dei suoi input o una variazione del prompt. I dati che vede in produzione possono discostarsi da quelli su cui è stato collaudato, un fenomeno noto nell'apprendimento automatico come deriva (drift). Un sistema può degradarsi in silenzio.
- **Gli output non sono pienamente prevedibili.** Il collaudo non può coprire ogni input, quindi la valutazione avviene per campionamento e con test mirati, non per dimostrazione. I sistemi possono fallire in modi che i loro costruttori non avevano previsto.
- **I danni possono essere diffusi e disuguali.** Il [bias algoritmico](https://en.wikipedia.org/wiki/Algorithmic_bias) è un errore sistematico che porta a esiti iniqui per alcuni gruppi. Può derivare dai dati, dalla progettazione o dall'uso, e può non emergere nelle cifre complessive di accuratezza.
- **Compaiono nuove superfici di attacco.** La [prompt injection](https://en.wikipedia.org/wiki/Prompt_injection) è un attacco in cui istruzioni nascoste nei dati di input manipolano un modello linguistico inducendolo a un comportamento non voluto. I modelli possono essere indotti a rivelare dati o a compiere azioni che i loro responsabili non intendevano.
- **La dipendenza dai fornitori è profonda.** Molte capacità di IA provengono da fornitori esterni, con una visibilità limitata su come vengono costruite o modificate. Le misure sui fornitori contano di più (si veda l'argomento 8.4 «Metriche di fornitori e contratti»).
- **Le regole stanno emergendo e differiscono da luogo a luogo.** Leggi, standard e linee guida sull'IA si sviluppano rapidamente. Il [regolamento sull'intelligenza artificiale (AI Act)](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act) dell'Unione europea adotta un approccio basato sul rischio con obblighi che si applicano per fasi, e altre giurisdizioni seguono strade diverse. Standard come ISO/IEC 42001 sui sistemi di gestione dell'IA e il NIST AI Risk Management Framework offrono strutture. Le affermazioni su regole specifiche in questo argomento sono datate a ottobre 2026 e vanno ricontrollate, e la consulenza legale dovrebbe orientare i propri obblighi. Il campo più ampio è descritto in vari modi come [IA responsabile](https://en.wikipedia.org/wiki/Responsible_AI) o IA affidabile, e la questione di come il diritto debba trattare l'IA è oggetto della [regolamentazione dell'intelligenza artificiale](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).

La governance può fallire in due modi opposti. Può essere così pesante che i team la evitano e l'uso dell'IA va sottotraccia come [shadow IT](https://en.wikipedia.org/wiki/Shadow_IT). Oppure può essere un esercizio cartaceo, con una politica e un registro che non riflettono la pratica. Gli obiettivi agili suggeriscono la via di mezzo: coinvolgimento continuo degli stakeholder nel fissare le regole, approvazioni piccole e rapide per gli usi a basso rischio, un esame più approfondito dove il danno è possibile e miglioramento continuo dei controlli man mano che cresce l'esperienza. Persone motivate, con confini chiari e la fiducia di usare il giudizio al loro interno, segnaleranno i problemi. Persone che temono una punizione non lo faranno.

La salvaguardia derivante dalla [legge di Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) si applica alle misure di governance: quando la «percentuale di usi dell'IA registrati» è un obiettivo, i registri si riempiono di voci che nessuno legge, e gli usi reali restano fuori vista (si veda l'argomento 1.2 «La legge di Goodhart e la psicologia delle metriche»).

Questo argomento si fonda sugli argomenti su rischio, conformità e sicurezza della Parte 8 e su quelli precedenti di questa parte.

## Principi chiave

- **Sapere dove si usa l'IA.** Un registro degli usi, compresi quelli incorporati nei prodotti e quelli che il personale adotta per conto proprio, è il fondamento.
- **Adeguare l'esame al rischio.** Leggero per gli usi a basso rischio, più approfondito per quelli rilevanti.
- **Trattare le modifiche a modelli e prompt come modifiche.** Richiedono collaudo, approvazione proporzionata al rischio e la possibilità di tornare indietro.
- **Valutare prima e durante l'uso.** Collaudare su casi realistici e continuare a collaudare in produzione.
- **Mantenere una supervisione umana significativa.** Una persona deve poter comprendere, mettere in discussione e prevalere, e avere il tempo e l'autorità per farlo.
- **Imparare dagli incidenti senza attribuire colpe.** I fallimenti dell'IA sono nuovi, e la segnalazione è il modo in cui l'organizzazione impara.
- **Rendere rapida l'approvazione dei casi sicuri.** Una governance lenta spinge l'uso fuori dalla vista.

## Definizioni delle metriche

| Metrica | Definizione | Formula | Unità | Fonte dei dati | Pratica ITIL | Controparte agile | Cadenza |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Copertura del registro degli usi dell'IA | Quota degli usi dell'IA individuati con mezzi indipendenti che sono nel registro con un responsabile e una classe di rischio | usi nel registro con responsabile e classe di rischio / usi individuati con scoperta indipendente (approvvigionamento, spese, identità, rete e segnalazioni del personale) | percentuale | Registro, dati di approvvigionamento e di spesa, log delle identità, sondaggi | Governance; gestione degli asset IT; gestione del rischio | Lavoro visibile e responsabilità chiare | Trimestrale |
| Attualità della valutazione del rischio | Quota degli usi a rischio medio e alto con una valutazione del rischio entro il ciclo richiesto | usi valutati entro il ciclo / usi a rischio medio e alto | percentuale | Valutazioni del rischio | Gestione del rischio; gestione della sicurezza delle informazioni | Riflessione regolare sui rischi | Trimestrale |
| Copertura del controllo delle modifiche | Quota delle modifiche a modelli, prompt, strumenti e fonti di dati in produzione passate attraverso il controllo delle modifiche con i collaudi richiesti | modifiche con registrazione, collaudi e approvazione proporzionata al rischio / modifiche rilevate | percentuale | Registrazioni delle modifiche confrontate con la cronologia delle versioni e le note di rilascio dei fornitori | Abilitazione delle modifiche; gestione dei rilasci e delle distribuzioni | Modifiche piccole, controllate e reversibili | Mensile |
| Attualità della valutazione | Quota degli usi in produzione con una valutazione aggiornata (accuratezza, sicurezza ed equità dove pertinente) e risultati entro la tolleranza | usi con una valutazione entro il ciclo e risultati accettabili / usi in produzione nell'ambito | percentuale | Registrazioni delle valutazioni | Assicurazione della qualità; gestione del rischio | Definition of done per il comportamento | Trimestrale |
| Tasso di evidenza della supervisione umana | Quota degli output o delle decisioni rilevanti campionati con una revisione umana sostanziale registrata | elementi campionati con revisione documentata che avrebbe potuto cambiare l'esito / elementi campionati | percentuale | Registrazioni delle decisioni campionate | Gestione del rischio; governance | Revisione prima del rilascio | Mensile |
| Tasso di incidenti dell'IA e tempo di contenimento | Incidenti che coinvolgono l'IA (output dannoso, esposizione di dati, azione non sicura) per uso e tempo per contenerli | incidenti per uso in produzione per trimestre; mediana e 85º percentile delle ore dal rilevamento al contenimento | incidenti; ore | Registrazioni degli incidenti etichettate IA | Gestione degli incidenti; gestione della sicurezza delle informazioni | Risposta e apprendimento senza attribuire colpe | Trimestrale |
| Attualità della due diligence sull'IA dei fornitori | Quota dei fornitori che offrono funzionalità di IA in servizi critici la cui valutazione specifica sull'IA è aggiornata | fornitori con valutazione IA aggiornata / fornitori critici con funzionalità di IA | percentuale | Valutazioni dei fornitori | Gestione dei fornitori; gestione del rischio | Revisione regolare delle dipendenze | Trimestrale |

Si definisca «uso dell'IA» in modo ampio nel registro: modelli che si costruiscono, servizi che si acquistano, funzionalità all'interno dei prodotti e strumenti che usa il personale. Le classi di rischio e i cicli sono fissati nella politica. La copertura del registro è misurata rispetto alla scoperta indipendente, non rispetto al registro stesso. La copertura del controllo delle modifiche richiede un modo di rilevare le modifiche: controllo di versione, comunicazioni dei fornitori, monitoraggio della configurazione. L'evidenza della supervisione umana richiede che la revisione avrebbe potuto cambiare l'esito, non che sia stato premuto un pulsante. I tassi di incidenti descrivono usi e sistemi e non si usano per valutare le persone.

## Raccomandazioni

### Conoscere e classificare

**1. Costruire il registro trovando oltre che chiedendo.** Si parta con un sondaggio e una politica, poi si verifichi rispetto ai dati di approvvigionamento e di spesa, ai log di identità e accesso, ai dati di fatturazione di rete e cloud e agli aggiornamenti dei prodotti dei fornitori. Si includano le funzionalità di IA incorporate negli strumenti già posseduti. Ci si aspetti sorprese: le persone usano strumenti che non erano stati approvati, spesso per buone ragioni. Le si tratti come informazione (si veda l'argomento 7.2 «Metriche di asset software e licenze»).

**2. Assegnare un responsabile e una classe di rischio a ciascun uso.** Il responsabile è la persona che risponde dell'uso e dei suoi risultati. La classe di rischio riflette il danno in caso di fallimento del sistema: chi ne è colpito, se sono coinvolte decisioni sulle persone, se agisce da solo, quali dati tocca e quanto sono reversibili gli effetti. Si usino poche classi con regole chiare. Ci si ispiri a framework riconosciuti, come il NIST AI Risk Management Framework, ISO/IEC 42001 e la legge applicabile, e li si adatti al proprio contesto.

**3. Rendere proporzionata l'approvazione.** Per gli usi a basso rischio basta una rapida registrazione in autonomia con poche domande. Per gli usi rilevanti si richiedano una valutazione del rischio, risultati di valutazione, una progettazione definita della supervisione umana e un'approvazione formale. Un percorso rapido per la maggioranza sicura tiene le persone dentro il sistema, e un percorso più lento per i pochi pericolosi garantisce loro il giusto esame.

### Collaudare e controllare le modifiche

**4. Valutare su casi realistici, prima e durante l'uso.** Si costruisca un insieme di casi di prova che rispecchi input reali, compresi quelli difficili e avversari, e si valutino gli output rispetto a criteri scritti. Si includano controlli di sicurezza e di equità dove le persone potrebbero essere colpite. Si ripetano le valutazioni secondo un calendario e ogni volta che cambiano il modello, il prompt o i dati. Un red team, un gruppo che attacca deliberatamente il sistema per trovarne le debolezze, è una pratica utile per gli usi a rischio più alto. Si vedano le pratiche di campionamento per il lavoro assistito (si veda l'argomento 10.2 «Misurare il lavoro assistito dall'IA»).

**5. Porre modelli, prompt e strumenti sotto controllo delle modifiche.** Si versionino prompt e configurazioni come il codice. Si richiedano collaudi e approvazione proporzionati al rischio per le modifiche, le si registri e si mantenga la possibilità di tornare indietro. Si seguano gli aggiornamenti del modello guidati dal fornitore, che possono cambiare il comportamento senza preavviso, e si concordi con i fornitori come si sarà informati. Si tratti l'aggiornamento di un modello come una modifica che richiede controllo (si veda l'argomento 4.3 «Metriche di abilitazione delle modifiche»).

**6. Monitorare in produzione.** Si osservino la deriva di input e output, l'aumento dei tassi di errore e di modifica manuale e gli schemi insoliti. Si fissino soglie che attivano una revisione. Per i sistemi che compiono azioni, si monitorino i log delle azioni. Il monitoraggio è il modo di trovare i problemi che il collaudo ha mancato.

### Mantenere reale la supervisione umana

**7. Progettare una supervisione che possa funzionare.** Una persona che rivede ogni output di un sistema veloce non riesce a tenere il passo, e una persona a cui si chiede di approvare ciò che non può comprendere non sta esercitando una supervisione. Si definisca che cosa fa l'essere umano, quali informazioni ha, quanto tempo e quale autorità di prevalere. Si campionino le revisioni per verificarne la sostanza. Si resti vigili sull'automation bias, la tendenza ad accettare l'output della macchina (si veda l'argomento 10.1 «L'IA nella misurazione della gestione dei servizi»).

**8. Conservare tracce di audit.** Si registrino input, output, versioni, decisioni e azioni in un modo che supporti l'indagine, nel rispetto delle regole sulla privacy e dei limiti di conservazione. Una [traccia di audit](https://en.wikipedia.org/wiki/Audit_trail) permette di rispondere a che cosa è accaduto e perché. Per le decisioni rilevanti sulle persone, si consideri quale spiegazione si possa dare e quale via di ricorso esista (si veda l'argomento 8.3 «Metriche di conformità e audit»).

**9. Proteggere i dati e resistere alla manipolazione.** Si controlli quali dati i sistemi di IA possano vedere e inviare all'esterno. Si verifichino prompt injection e perdita di dati, specie per i sistemi che leggono contenuti esterni o hanno accesso a strumenti. Si applichino i principi del privilegio minimo usati per gli agenti che agiscono (si vedano l'argomento 10.3 «Metriche di agenti IA e chatbot» e l'argomento 8.1 «Metriche di incidenti di sicurezza e vulnerabilità»). Si consideri la privacy in fase di progettazione e si coinvolgano gli specialisti della protezione dei dati.

### Rispondere e imparare

**10. Trattare gli incidenti dell'IA come incidenti.** Si definisca che cosa conta: output dannosi o distorti, esposizione di dati, azioni non sicure, errori significativi che raggiungono gli utenti. Si usi il normale processo degli incidenti con l'etichetta IA, si riveda senza attribuire colpe e si riportino gli insegnamenti nelle valutazioni e nei controlli. Si renda facile la segnalazione per personale e utenti. Il tempo di contenimento conta quanto per qualsiasi incidente (si veda l'argomento 3.4 «Metriche degli incidenti maggiori»).

**11. Gestire l'IA dei fornitori.** Si chieda ai fornitori quali funzionalità di IA usino, come vengano collaudate e modificate, come vengano trattati i dati e come siano segnalati gli incidenti. Si aggiungano ai contratti clausole specifiche sull'IA dove conta, compreso l'avviso di modifiche sostanziali del modello. Si rivalutino i fornitori critici secondo un ciclo (si veda l'argomento 8.4 «Metriche di fornitori e contratti»).

**12. Riesaminare la governance stessa.** Ogni trimestre si verifichi che cosa mostrino le misure: dove gli usi non sono stati registrati, quali approvazioni sono state troppo lente, quali controlli non hanno individuato problemi. Si adeguino la politica e i percorsi. Si coinvolgano personale e utenti nel riesame. Si mantengano le regole brevi, chiare e aggiornate, e si ritirino i controlli che non meritano il proprio costo.

## Vettori di manipolazione e protezioni

| Metrica | Come viene manipolata | Metrica o pratica di salvaguardia abbinata |
| --- | --- | --- |
| Copertura del registro degli usi dell'IA | Registrare usi banali per alzare la percentuale; denominatori limitati a ciò che è registrato | Scoperta indipendente per il denominatore; campionare le voci del registro per qualità; amnistia per gli usi non registrati |
| Attualità della valutazione del rischio | Valutazioni sbrigative che passano sempre; valutare gli usi a basso rischio | Riesaminare la profondità delle valutazioni; verificare che la classe di rischio corrisponda ai criteri |
| Copertura del controllo delle modifiche | Non rilevare le modifiche dei fornitori; registrare le modifiche a posteriori | Rilevamento tramite cronologia delle versioni e comunicazioni dei fornitori; registrazioni delle modifiche con data certa precedente al rilascio |
| Attualità della valutazione | Valutazioni su casi facili; scegliere le tolleranze dopo aver visto i risultati | Insiemi di prova rivisti da una parte indipendente; soglie fissate in anticipo |
| Tasso di evidenza della supervisione umana | Premere approva senza leggere; documentare una revisione che non poteva cambiare l'esito | Campionare le revisioni per la sostanza; errori noti inseriti di proposito; carico dei revisori |
| Tasso di incidenti dell'IA e tempo di contenimento | Non segnalare gli incidenti; restringere la definizione | Segnalazione facile e senza colpe; confrontare con i reclami degli utenti e i rilievi di audit |
| Attualità della due diligence sull'IA dei fornitori | Questionari compilati dal marketing; valutazioni senza evidenze | Requisiti di evidenza per i fornitori critici; verifica indipendente |

Una lettura sana è questa: un registro che la scoperta indipendente conferma, valutazioni commisurate al rischio, modifiche che passano attraverso il controllo, valutazioni tenute aggiornate, una supervisione che trova errori reali, incidenti segnalati con prontezza e contenuti rapidamente e fornitori che condividono ciò che modificano.

## Compromessi: vantaggi e svantaggi

| Approccio | Punto di forza | Punto debole |
| --- | --- | --- |
| Approvazione centrale per ogni uso dell'IA | Controllo, coerenza | Lenta; spinge l'uso sottotraccia |
| Registrazione in autonomia con livelli di rischio | Rapida per la maggioranza sicura | Richiede buoni criteri e controlli a campione |
| Divieto degli strumenti pubblici | Riduce l'esposizione dei dati | Uso nascosto; benefici persi |
| Strumenti approvati con linee guida | Uso visibile e gestibile | Richiede messa a disposizione e supporto |
| Documentazione pesante | Evidenza per l'audit | Onere; può non riflettere la pratica |
| Valutazione automatizzata nella pipeline | Continua, coerente | Richiede buoni insiemi di prova; può mancare nuovi fallimenti |
| Revisione umana di tutto | Sicurezza | Non scalabile; affaticamento |
| Campionamento basato sul rischio | Pratico | Alcuni fallimenti sfuggono |

La risposta in prosa è fornire strumenti approvati e un percorso rapido per gli usi a basso rischio, concentrare l'esame su quelli rilevanti, automatizzare valutazione e monitoraggio e mantenere la supervisione umana dove può funzionare davvero.

## Domande da discutere con il team

**1. Dove usiamo oggi l'IA senza che sia su alcun elenco?**
Chiedetelo con onestà al team e offrite un'amnistia. Osservate gli strumenti usati per redigere, sintetizzare, programmare e analizzare, compresi quelli all'interno dei prodotti. Il facilitatore dovrebbe registrare gli usi senza giudizio. Concordate chi li registrerà e quali richiedano uno sguardo più attento.

**2. Se il nostro uso più rilevante dell'IA commettesse un errore dannoso, come lo scopriremmo e che cosa faremmo?**
Percorrete rilevamento, contenimento, comunicazione e apprendimento. Annotate le lacune nel monitoraggio, nella responsabilità e nell'autorità di spegnerlo. Concordate un miglioramento.

**3. Che cosa può cambiare sotto di noi senza che nessuno lo approvi?**
Elencate modelli, prompt, fonti di dati e aggiornamenti dei fornitori. Per ciascuno, chiedetevi come sapremmo che è cambiato e come lo collauderemmo. Concordate dove aggiungere un rilevamento o un test.

**4. La persona che rivede l'output dell'IA nel nostro processo potrebbe realisticamente cogliere un errore grave?**
Osservate volume, informazioni, tempo e autorità. Provate con un errore inserito di proposito. Se la revisione non può funzionare, riprogettate il processo prima di aggiungere altra IA.

**5. Quali delle nostre regole un collega indaffarato troverebbe facili da seguire, e quali aggirerebbe?**
Elencate le regole attuali e verificatele sui flussi di lavoro reali. Discutete perché le regole vengono aggirate. Concordate cambiamenti che rendano facile il percorso sicuro.

**6. Che cosa ci hanno detto i fornitori sulla loro IA, e che cosa non abbiamo chiesto?**
Controllate questionari e contratti recenti. Individuate i fornitori critici con funzionalità di IA e le lacune informative. Concordate le domande per il prossimo riesame.

## Quattro prospettive

### Team di prodotto e di consegna

I team di consegna costruiscono e adottano funzionalità di IA, e avvertono la governance come attrito o come aiuto. Dovrebbero registrare presto gli usi, collaudare su casi realistici, porre prompt e modelli sotto controllo di versione e progettare una supervisione che funzioni. Traggono vantaggio da un'approvazione rapida per gli usi a basso rischio.

### Team di servizio e operations

I team di operazioni gestiscono l'IA in produzione e rispondono ai suoi incidenti. Dovrebbero monitorare la deriva, conservare i log delle azioni, etichettare gli incidenti dell'IA e avere l'autorità e i mezzi per spegnere un sistema. Usano anch'essi l'IA e dovrebbero seguire le stesse regole.

### Leadership e governance

I dirigenti fissano la propensione al rischio e rispondono dei risultati. Dovrebbero finanziare registro, valutazione e monitoraggio, accettare che alcuni usi dell'IA non passeranno, chiedere la scoperta indipendente degli usi e seguire incidenti e tempo di contenimento. Gli organi di governance dovrebbero mantenere brevi le regole, riesaminarle regolarmente e assicurare che personale e utenti abbiano voce.

### Clienti e utenti

Gli utenti sono toccati dalle decisioni e dagli output dell'IA, spesso senza saperlo. Meritano di sapere quando l'IA è coinvolta in questioni che li riguardano, di raggiungere una persona e di contestare le decisioni. Reclami e ricorsi sono evidenze essenziali di come la governance funzioni nella pratica.

## In pratica: un esempio di ITIL agile

La divisione tecnologia e operazioni di una banca regionale adotta una politica sull'IA dopo che un dipendente ha incollato dati di clienti in uno strumento pubblico. Il team di conformità pubblica un registro e si aspetta che ogni uso vi sia elencato. I numeri seguenti sono illustrativi.

Tre mesi dopo il registro elenca 38 usi dell'IA. Il responsabile del rischio tecnologico verifica con mezzi indipendenti: dati di approvvigionamento e di spesa, log di identità che mostrano gli accessi ai servizi di IA, dati di rete e un sondaggio anonimo tra il personale. La scoperta trova 94 usi, quindi la copertura del registro è del 40 percento. Diciassette sono funzionalità all'interno di strumenti che la banca già licenzia e dodici sono strumenti pubblici usati dal personale. Dei 38 usi registrati, solo 14 hanno una classe di rischio, e i tre usi a rischio più alto, un modello che assegna punteggi agli avvisi di frode, un chatbot per i clienti e uno strumento che sintetizza i reclami, non hanno alcuna valutazione nell'ultimo anno. Le modifiche alla configurazione del modello antifrode e ai prompt del chatbot sono fatte direttamente dai team, e le registrazioni delle modifiche dell'ultimo trimestre coprono il 21 percento delle modifiche trovate nella cronologia delle versioni. Un campione di 60 avvisi di frode scartati dal modello mostra una revisione umana registrata per 52 di essi, ma un insieme di cinque omissioni note, inserite di proposito, è stato individuato da un solo revisore, perché ciascun revisore gestisce alcune centinaia di avvisi al giorno. Un incidente, in cui il chatbot ha fornito ai clienti un importo di commissione obsoleto, è stato scoperto da un reclamo, e ci sono voluti sei giorni per contenerlo perché nessuno aveva l'autorità di spegnerlo.

Il responsabile del rischio tecnologico riprogetta la governance con i team. Una breve registrazione in autonomia con cinque domande porta nel registro gli usi a basso rischio in pochi minuti, e un periodo di amnistia incoraggia il personale a elencare gli strumenti che usa. Le classi di rischio si basano su danno, dati e autonomia. Gli usi a rischio più alto richiedono una valutazione, un collaudo su casi realistici e avversari e una progettazione definita della supervisione. Modelli, prompt e strumenti passano sotto controllo delle modifiche con collaudi proporzionati al rischio, e i prompt del chatbot sono versionati con possibilità di tornare indietro. Il processo sugli avvisi di frode è riprogettato in modo che i revisori gestiscano meno avvisi, meglio prioritizzati, e gli errori inseriti di proposito mettono alla prova il loro rilevamento. Un responsabile designato per ogni uso ad alto rischio ha l'autorità di spegnerlo, e la risposta agli incidenti copre l'IA. Ai fornitori di cloud e di IA della banca si chiede quali funzionalità di IA usino e come vengano notificate le modifiche.

Due trimestri dopo, la copertura del registro rispetto alla scoperta indipendente è dell'88 percento, tutti gli usi ad alto rischio sono valutati e collaudati entro il ciclo, la copertura del controllo delle modifiche è dell'84 percento, il rilevamento degli errori inseriti di proposito da parte dei revisori sale a 4 su 5 e il tempo mediano di contenimento di un incidente dell'IA è di 3 ore. Il personale usa strumenti approvati per la maggior parte dei compiti. Un dirigente senior chiede un obiettivo di copertura del registro del 100 percento. Il responsabile del rischio tecnologico propone di seguire la copertura rispetto alla scoperta indipendente, l'attualità delle valutazioni e la gestione degli incidenti, e spiega che un registro senza scoperta può raggiungere il 100 percento e comunque mancare il rischio. La decisione viene registrata.

## Lente di settore

**Startup.** La velocità conta e i rischi sono soprattutto esposizione dei dati e output inaffidabili. Si tenga un breve elenco di strumenti e usi con i responsabili, si fissino poche regole chiare su quali dati possano essere usati dove e si versionino i prompt. Si riveda man mano che crescono le richieste di garanzie da parte dei clienti.

**Piccola impresa.** Il personale userà strumenti pubblici. Si fornisca un'opzione approvata, si scriva una regola di una pagina sui dati e si riveda come gli strumenti vengono usati. Si interroghino i fornitori sulle loro funzionalità di IA e si tenga traccia di dove l'IA prende decisioni su clienti o personale.

**Grande impresa.** La scala richiede un modello operativo: registro, livelli di rischio, standard di valutazione, controllo delle modifiche e processo degli incidenti, integrati con le funzioni di rischio e sicurezza esistenti. Si usi la scoperta indipendente, si automatizzi la valutazione nelle pipeline e ci si allinei agli standard. Si dia ai team un percorso rapido.

**Pubblica amministrazione e settore pubblico.** Le decisioni che riguardano i cittadini comportano obblighi di trasparenza, equità e ricorso, e i quadri normativi in materia di appalti e giuridici determinano ciò che è consentito. Si mantengano registri pubblici degli usi ad alto impatto dove richiesto, si valuti l'impatto sui diritti, si mantengano gli esseri umani in modo significativo nel ciclo e si verifichino la legge e le linee guida vigenti (si veda l'argomento 8.5 «Rendicontazione regolamentata e governativa»).

## Business case: motivazioni, ROI e TCO

I costi comprendono lo sforzo di costruire e mantenere il registro, strumenti o analisi di scoperta, valutazioni del rischio, insiemi di valutazione ed esecuzioni, controllo delle modifiche per prompt e modelli, monitoraggio, formazione e capacità di risposta agli incidenti. La governance aggiunge anche un certo ritardo per gli usi a rischio più alto. Questi costi crescono con il numero e il rischio degli usi, ed è una ragione per mantenere leggera l'approvazione a basso rischio.

I ritorni comprendono danni ed esposizione evitati, meno sorprese negli audit e nei riesami regolatori, un'adozione sicura più rapida grazie a regole chiare e la fiducia di clienti e personale. Si costruisca il caso a partire dai propri dati: il numero di usi trovati fuori dal registro e i dati che toccano, gli incidenti e il loro costo, il tempo speso in approvazioni ad hoc prima e dopo e i rilievi negli audit. Si eviti di citare statistiche pubblicate su incidenti o sanzioni dell'IA senza una fonte tracciabile e una pertinenza al proprio contesto. Si includa il costo del non governare, che comprende la possibilità di danni legali e reputazionali significativi (si veda l'argomento 7.7 «Ritorno sull'investimento e business case»).

## Anti-pattern e insidie

- **Un registro che nessuno verifica.** La copertura sembra alta e manca gli usi reali. Si usi la scoperta indipendente.
- **Divieti generalizzati.** Spingono l'uso sottotraccia. Si forniscano strumenti approvati e un percorso rapido.
- **Trattare prompt e modelli come configurazione senza responsabile.** Il comportamento cambia inosservato. Si pongano sotto controllo delle modifiche.
- **Valutare una volta sola.** I sistemi derivano e cambiano. Si ripeta secondo calendario e a ogni modifica.
- **Supervisione solo di nome.** I revisori non possono cogliere ciò che non vedono. Si provi con errori inseriti di proposito e si sistemi il carico.
- **Nessuna autorità di spegnimento.** Il contenimento richiede giorni. Si nominino responsabili con il potere di fermare un sistema.
- **Ignorare l'IA dei fornitori.** Il proprio rischio include il loro. Si chieda, si inserisca nel contratto e si rivaluti.
- **Regole che nessuno riesce a seguire.** Vengono aggirate. Si mantengano brevi e si renda facile il percorso sicuro.

## Modello di maturità

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Conoscere e classificare | Nessuna visione dell'uso dell'IA | Politica ed elenco parziale | Registro con responsabile e classe di rischio; scoperta indipendente usata per la copertura | Copertura, attualità delle valutazioni e tempi di approvazione gestiti | Visione condivisa del registro tra unità di business e fornitori; classi riesaminate con regolatori e utenti |
| Collaudo e modifiche | Ad hoc | Qualche valutazione per alcuni usi | Valutazione su casi realistici; prompt e modelli sotto controllo delle modifiche | Valutazione continua e monitoraggio della deriva; copertura gestita | Valutazione e modifiche automatizzate e basate sul rischio nelle pipeline, sottoposte a audit indipendente |
| Supervisione e apprendimento | Affidamento sulla fiducia | La revisione esiste in linea di principio | Supervisione progettata e campionata; incidenti dell'IA etichettati e riesaminati senza attribuire colpe | Test con errori inseriti di proposito, tempo di contenimento e valutazioni dei fornitori gestiti | Supervisione, apprendimento dagli incidenti e politica sviluppati insieme a personale, utenti e partner |

## Checklist

- [ ] Un registro elenca gli usi dell'IA con un responsabile e una classe di rischio, verificato rispetto alla scoperta indipendente.
- [ ] Esiste un percorso rapido per gli usi a basso rischio e uno più approfondito per quelli rilevanti.
- [ ] Gli usi a rischio più alto hanno una valutazione del rischio aggiornata e una progettazione definita della supervisione.
- [ ] Le valutazioni su casi realistici e avversari sono aggiornate e ripetute a ogni modifica.
- [ ] Prompt, modelli, strumenti e fonti di dati sono versionati e sotto controllo delle modifiche.
- [ ] Il monitoraggio in produzione osserva deriva, errori, modifiche manuali e azioni insolite.
- [ ] La supervisione è messa alla prova con errori inseriti di proposito, e il carico dei revisori è realistico.
- [ ] Le tracce di audit supportano l'indagine nel rispetto delle regole di privacy e conservazione.
- [ ] Gli incidenti dell'IA sono etichettati, riesaminati senza attribuire colpe e i responsabili possono spegnere i sistemi.
- [ ] I fornitori con funzionalità di IA sono valutati e vincolati a notificare le modifiche sostanziali.

## Prompt IA

**Redigere una classificazione del rischio per gli usi dell'IA.**

```text
Proponi una semplice classificazione del rischio (tre o quattro livelli) per gli usi
dell'IA in [tipo di organizzazione], basata sul danno in caso di errore, su chi è
colpito, sul coinvolgimento di decisioni sulle persone, sull'autonomia delle azioni,
sulla sensibilità dei dati e sulla reversibilità. Per ciascun livello indica usi
esemplificativi, le approvazioni e le evidenze richieste e il ciclo di revisione.
Non formulare conclusioni giuridiche. Elenca le tue ipotesi e i punti da confermare
con gli specialisti legali, del rischio e della sicurezza.
```

**Progettare un modulo di registrazione.**

```text
Progetta un breve modulo di registrazione in autonomia per i nuovi usi dell'IA, con
non più di otto domande, che assegni automaticamente una classe di rischio iniziale
e instradi gli usi a rischio più alto verso la revisione. Copri scopo, dati, utenti
interessati, autonomia, fornitore e responsabile. Spiega come mantenerlo rapido per i
casi a basso rischio. Elenca le tue ipotesi e i rischi di errata classificazione.
```

**Pianificare un insieme di valutazione.**

```text
Usiamo l'IA per [compito] in [processo]. Aiutami a progettare un insieme di
valutazione: tipi di casi realistici, casi difficili e avversari, criteri scritti per
output corretti e sicuri, controlli di equità dove le persone sono interessate, quanto
grande sia praticabile un insieme, con che frequenza ripeterlo e quali modifiche
debbano innescare una nuova esecuzione. Non sostenere che un insieme sia sufficiente.
Elenca le tue ipotesi e i limiti.
```

**Riesaminare un incidente dell'IA.**

```text
Ecco la descrizione di un incidente legato all'IA: [incolla, senza dati personali].
Redigi un riesame senza attribuzione di colpe: cronologia, come è stato rilevato,
fattori concorrenti (dati, prompt, modello, supervisione, fornitore, processo),
impatto, che cosa lo ha contenuto e azioni con responsabili. Suggerisci modifiche a
valutazione, monitoraggio e controllo delle modifiche. Non attribuire colpe a
singole persone. Elenca le tue ipotesi e le questioni aperte.
```

## Skill IA

- [Competenza Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): da usare per trovare la salvaguardia abbinata a una metrica di governance o di rischio dell'IA.
- [Competenza di manutenzione Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): da usare per verificare che la voce di una metrica di governance dell'IA si basi su evidenze indipendenti e riporti il proprio vettore di manipolazione e la propria salvaguardia.

## Punti chiave

- Si costruisca il registro dell'IA con la scoperta indipendente e si adegui l'esame al rischio, con un percorso rapido per gli usi sicuri.
- Si trattino modelli, prompt, strumenti e fonti di dati come modifiche che richiedono collaudo, approvazione e possibilità di tornare indietro.
- Si valuti prima dell'uso e durante l'uso, su casi realistici e avversari.
- Si progetti una supervisione umana che possa funzionare e la si metta alla prova con errori inseriti di proposito.
- Si trattino gli incidenti dell'IA come gli altri incidenti, con riesame senza attribuire colpe, e si dia ai responsabili il potere di spegnere i sistemi.
- Si interroghino i fornitori sulla loro IA, e si mantengano brevi le regole e facile il percorso sicuro.

## Riferimenti e letture di approfondimento

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. ISO/IEC 23894, *Information technology: Artificial intelligence: Guidance on risk management*, International Organization for Standardization, 2023.
4. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
5. Organisation for Economic Co-operation and Development, *OECD AI Principles*, 2019 (updated 2024).
6. Mitchell, M., et al., "Model Cards for Model Reporting," *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias).
9. Wikipedia, [Prompt injection](https://en.wikipedia.org/wiki/Prompt_injection).
10. Wikipedia, [Artificial Intelligence Act](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act).
11. Wikipedia, [Responsible AI](https://en.wikipedia.org/wiki/Responsible_AI).
12. Wikipedia, [Regulation of artificial intelligence](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).
13. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
