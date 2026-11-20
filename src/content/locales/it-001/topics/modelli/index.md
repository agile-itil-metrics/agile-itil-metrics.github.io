# Modelli

Quattro modelli da copiare e adattare: una carta delle metriche, una scheda metrica, una specifica di dashboard e un'agenda di revisione. Sono punti di partenza. Si sostituisca il testo tra parentesi quadre, si elimini ciò che non si addice e si mantenga ogni documento a una pagina, dove possibile.

## Carta delle metriche

```text
Carta delle metriche per [team, servizio od organizzazione]

Scopo
Misuriamo [servizi e modalità di lavoro] per [migliorare ... / vedere ... / decidere ...].
Le misure ci aiutano a vedere il nostro lavoro e a migliorarlo. Non sono un modo
per giudicare le persone.

A che cosa servono i dati
- Revisioni del team su come procede il lavoro e su che cosa provare in seguito.
- Decisioni su dove investire in servizi, strumenti e competenze.
- Rendicontazione richiesta da [autorità di regolazione/clienti]: [elenco, tenuto separato].

Per che cosa i dati non saranno mai usati
- Classificare o confrontare le persone.
- Valutazioni individuali delle prestazioni, retribuzione, promozione o licenziamento.
- [Aggiungere le preoccupazioni sollevate dai vostri team.]

Chi vede che cosa
- Ogni team vede per primo i propri dati e ne è titolare dell'interpretazione.
- [Ruolo] vede gli andamenti aggregati di servizi e team.
- Le viste a livello individuale sono disattivate in [strumenti].

Dati conservati
- [Che cosa viene raccolto, da quali sistemi, per quanto tempo.]

Contestazioni
- Chiunque può contestare un numero. Rispondiamo entro [numero] giorni lavorativi.
- Contatto: [nome o gruppo].

Violazioni
- Segnalare qualsiasi uso contrario a questa carta a [canale]. Gli esiti sono
  pubblicati senza nomi.

Revisione
- Rivediamo questa carta ogni [sei mesi] insieme ai team.

Firmato: [sponsor], [rappresentante/i del team]   Data: [data]
```

## Scheda metrica

```text
Scheda metrica: [nome della metrica]

Domanda a cui risponde: [la domanda posta dal pubblico]
Decisione che orienta: [che cosa qualcuno potrebbe fare diversamente]
Definizione: [in parole semplici]
Formula: [come viene calcolata]
Unità: [unità]   Cadenza: [con quale frequenza]
Regole del cronometro o dei confini: [quando il conteggio parte, si ferma, si sospende]
Fonte dei dati: [sistema e campo]   Aggiornamento: [intervallo]
Responsabile: [ruolo]   Persona a cui rivolgersi: [nome o gruppo]
Pubblico: [team, responsabile del servizio, dirigenza]
Livello: [team, servizio o sistema. Mai una persona.]
Visualizzazione: [mediana e percentile, run chart, distribuzione]
Base di riferimento: [periodo e valore dai nostri dati]
Limiti noti: [lacune, variazioni nelle abitudini di inserimento, dimensione del campione]
Vettore di manipolazione: [come potrebbe sembrare migliore senza esserlo]
Contromisura: [metrica o pratica abbinata]
Risultato associato: [il risultato con cui va letta]
Argomento correlato: (si veda l'argomento [N.M], [Titolo])
Ritirare quando: [condizione]
Ultima revisione: [data]   Modifiche dall'ultima revisione: [note]
```

## Specifica di dashboard

```text
Specifica di dashboard: [nome]

Pubblico: [team, responsabile del servizio, dirigenza]
Responsabile: [ruolo]   Cadenza di revisione: [mensile o trimestrale]   Data di revisione: [data]
Domande a cui risponde
1. [domanda]
2. [domanda]

Misure (non più di circa nove)
| Misura | Domanda | Contromisura associata | Visualizzazione | Fonte | Aggiornamento |
| [nome] | [n.] | [nome] | [sparkline / run chart / distribuzione] | [sistema] | [intervallo] |

Contesto mostrato con ogni valore
- Andamento su [periodo], note sugli eventi, collegamento alla definizione, dimensione del campione quando è piccola.

Colori di stato
- [Nessuno, oppure la regola dichiarata che tiene conto della normale variabilità.]

Accesso
- [Chi può vedere che cosa. Viste a livello individuale: disattivate.]

Controlli di qualità dei dati
- [Aggiornamento, numero di righe, riconciliazione con la fonte.]

Ritiro
- Report sostituiti da questa dashboard: [elenco] ritirati il [data].
- Misure da ritirare quando: [condizioni].

Approvata dal pubblico: [nomi o ruoli]   Data: [data]
```

## Agenda di revisione

Una revisione di team di 45 minuti, mensile o trimestrale. È una conversazione sul lavoro, guidata dal team.

```text
Revisione delle metriche per [team], [data]

1. Check-in (5 minuti)
   Come procede il lavoro? C'è qualcosa che i numeri non mostrano?

2. Eventi dall'ultima volta (5 minuti)
   Rilasci, incidenti, cambi di organico, cambi di policy. Aggiungere note alla visualizzazione.

3. Andamenti e distribuzioni (15 minuti)
   Per ogni misura: che cosa vediamo? Si tratta di normale variabilità o di un segnale?
   Leggere ogni misura insieme alla sua contromisura. Verificare l'aggiornamento dei dati e le lacune note.

4. Decisioni (10 minuti)
   Che cosa proveremo, interromperemo o cambieremo? Registrare ogni decisione, compresa la
   decisione di attendere e osservare. Indicare un responsabile e una data per riesaminare.

5. Decisioni precedenti (5 minuti)
   Le decisioni dell'ultima volta hanno aiutato? Che cosa abbiamo imparato?

6. Le misure stesse (5 minuti)
   Quale misura ci ha confusi o ci ha tratti in inganno? Quale potremmo ritirare? Che cosa manca?

Registrare: decisioni, responsabili, date, modifiche alle misure.
Regola: nessun confronto tra persone. I numeri descrivono il sistema.
```
