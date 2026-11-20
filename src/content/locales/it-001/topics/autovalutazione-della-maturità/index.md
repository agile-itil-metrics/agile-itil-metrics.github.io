# Autovalutazione della maturità

Un'autovalutazione consolidata per un team. Usa la scala condivisa a cinque livelli (Avvio, Sviluppo, Standardizzazione, Gestione, Orchestrazione) in due viste: le sei dimensioni di un programma di metriche e le aree di metriche trattate dalle Parti da 2 a 10. Richiede circa un'ora. È uno strumento di conversazione e non una certificazione, e non coincide con le scale di maturità dei processi presenti in ITIL, in ISO/IEC 33000 o nel Capability Maturity Model. I risultati restano al team (si veda l'argomento 11.4 «Modello di maturità per i programmi di metriche»).

## Come condurla

1. **Riunire il team per un'ora** con un facilitatore che non sia il responsabile del team. Mostrare la scala riportata sotto.
2. **Assegnare i livelli in privato.** Ogni persona indica da sola il livello al quale ritiene si trovi il team, per ciascuna riga.
3. **Confrontare e discutere.** Le differenze rivelano esperienze diverse della stessa pratica. Chiedere un esempio per ogni livello dichiarato («Quale decisione, lo scorso trimestre?»).
4. **Concordare una visione del team** e mettere per iscritto le evidenze che la sostengono.
5. **Scegliere uno o due piccoli passi successivi,** ciascuno completabile entro un trimestre, con un responsabile e una data. Inserirli nel registro dei miglioramenti (si veda l'argomento 9.5 «Metriche di miglioramento continuo»).
6. **Tenere il risultato presso il team.** Oltre il team si condividano solo intervalli e temi aggregati. Non si faccia mai la media delle righe in un unico punteggio e non si classifichino mai i team.

Si riveda l'autovalutazione circa due volte l'anno e dopo una riorganizzazione, un cambio di strumenti o una violazione della carta delle metriche. Ci si aspetti che alcune righe arretrino, e lo si consideri un'informazione.

## La scala

| Livello | Nome | Come si presenta |
| --- | --- | --- |
| 1 | **Avvio** | Il team riconosce la pratica ma non ha un modo coerente di attuarla. Il lavoro è improvvisato, dipende dalle persone ed è per lo più non documentato. |
| 2 | **Sviluppo** | Alcuni team hanno pratiche funzionanti, ma differiscono da team a team. Esistono i primi strumenti, modelli e abitudini, che però non sono condivisi né attesi. |
| 3 | **Standardizzazione** | Un approccio comune e leggero è messo per iscritto e usato tra i team. I ruoli sono chiari. L'approccio è un punto di partenza che i team possono adattare indicandone il motivo. |
| 4 | **Gestione** | I risultati sono misurati e rivisti. Le lacune portano a un lavoro di miglioramento pianificato e dotato di risorse. |
| 5 | **Orchestrazione** | La pratica è coordinata tra team, fornitori e clienti e viene adattata continuamente al mutare delle condizioni. Il miglioramento è ordinario e proviene da tutti. |

Più alto non significa sempre meglio. Si scelga il livello adatto alle proprie dimensioni, al proprio rischio e alle proprie esigenze, e si annoti il perché.

## Vista 1: il programma di metriche

| Dimensione | 1 Avvio | 2 Sviluppo | 3 Standardizzazione | 4 Gestione | 5 Orchestrazione |
| --- | --- | --- | --- | --- | --- |
| Domande e scopo | Misure raccolte perché i dati esistono | Alcuni team dichiarano le domande che pongono | Pubblici e domande messi per iscritto; misure ad essi collegate | Copertura delle domande rivista; le domande senza risposta generano nuove misure | Pubblici, compresi clienti e fornitori, plasmano le misure |
| Definizioni e responsabilità | Le definizioni variano da persona a persona | Alcune scritte; responsabili informali | Catalogo con definizione, fonte, responsabile e limiti | Completezza delle definizioni e contestazioni gestite | Definizioni condivise tra team e fornitori |
| Dati e strumenti | Manuali e fragili | Alcuni flussi automatizzati | Pipeline collaudate, archivio condiviso, dati portabili | Affidabilità, riconciliazione e prontezza all'uscita gestite | Pipeline federate con contratti condivisi |
| Uso nelle decisioni | Numeri mostrati, raramente usati | Usati in alcune revisioni | Revisioni regolari che registrano le decisioni | Evidenze delle decisioni tracciate e seguite da azioni | Decisioni collegate ai risultati tra i team |
| Fiducia e sicurezza | Paura o indifferenza | Rassicurazioni verbali | Carta scritta; viste individuali disattivate; sondaggio sulla sicurezza | Violazioni esaminate apertamente; segnali di franchezza gestiti | Fiducia ordinaria; programma plasmato da personale e partner |
| Revisione ed evoluzione | Nessuna | Pulizie occasionali | Revisione periodica con i team; regola di ritiro | Passi di valutazione finanziati e completati | Il programma migliora continuamente grazie a tutti |

## Vista 2: le aree di metriche

Per ciascuna area, si indichi il livello che meglio descrive come il proprio team la misura e la usa oggi. Si saltino le aree che non si applicano. Gli spunti sono esempi di ciò che può dire un team di Livello 3.

| Area | Parte di riferimento | Un team di Livello 3 può dire |
| --- | --- | --- |
| Flusso e consegna continua | Parte 2 | Conosciamo i nostri lead time e cycle time come distribuzioni, limitiamo il lavoro in corso e leggiamo la velocità di consegna insieme alla stabilità (si veda l'argomento 2.8 «Metriche DORA»). |
| Service desk, incidenti e richieste | Parte 3 | Misuriamo il tempo fino a una risoluzione utile insieme ai contatti di ritorno, e i nostri incidenti maggiori hanno una revisione standard (si veda l'argomento 3.4 «Metriche degli incidenti maggiori»). |
| Problemi, modifiche e rilasci | Parte 4 | Le nostre modifiche seguono un percorso proporzionato al rischio, e monitoriamo la rilavorazione e il costo degli errori noti (si veda l'argomento 4.3 «Metriche di abilitazione delle modifiche»). |
| Livelli di servizio, disponibilità e affidabilità | Parte 5 | I nostri livelli di servizio sono definiti a partire dai risultati per gli utenti, con un budget di errore usato nelle decisioni (si veda l'argomento 5.2 «SLI, SLO e budget di errore»). |
| Cliente ed esperienza | Parte 6 | Interpelliamo gli utenti sulla loro esperienza in modi che non li stancano, e agiamo sulle risposte (si veda l'argomento 6.2 «Experience level agreement»). |
| Asset, configurazione e finanza | Parte 7 | Sappiamo che cosa possediamo e gestiamo, e il costo per unità di utilizzo dei nostri servizi (si veda l'argomento 7.5 «Costo del servizio ed economia unitaria»). |
| Sicurezza, rischio, conformità e fornitori | Parte 8 | Le nostre evidenze su rischio e controlli sono reali, i nostri fornitori sono misurati sui risultati e nulla di tutto ciò è manipolato per l'audit (si veda l'argomento 8.2 «Metriche di rischio e controlli»). |
| Persone, team e miglioramento | Parte 9 | Ascoltiamo le nostre persone su ritmo e benessere, e seguiamo il lavoro di miglioramento fino ai risultati (si veda l'argomento 9.1 «Salute del team ed esperienza degli sviluppatori»). |
| Metriche nell'era dell'IA | Parte 10 | Confrontiamo il lavoro assistito dall'IA con una base di riferimento, campioniamo gli output per verificarne l'utilità e registriamo i nostri usi dell'IA (si veda l'argomento 10.1 «L'IA nella misurazione della gestione dei servizi»). |

## Registrare il risultato

```text
Team: [nome]   Data: [data]   Facilitatore: [nome]
Partecipanti: [ruoli]

Vista 1
| Dimensione | Visione del team | Evidenze | Passo successivo (responsabile, data) |
| [riga] | [1-5] | [esempio] | [passo] |

Vista 2
| Area | Visione del team | Evidenze | Passo successivo |
| [riga] | [1-5 o n/d] | [esempio] | [passo] |

Differenze che ci hanno sorpreso: [note]
Per che cosa non useremo mai questo risultato: [classifiche, finanziamenti, valutazioni delle prestazioni]
Prossima valutazione: [data]
```

## Leggere il profilo

- **Cercare la riga limitante.** Fiducia e definizioni spesso limitano le altre. Un piccolo progresso lì può sbloccare il resto.
- **Confrontare le righe, non i team.** La domanda utile è dove il proprio team è più forte o più debole, non come si confronta con un altro.
- **Chiedere che cosa è cambiato.** Un avanzamento dopo un trimestre dovrebbe essere sostenuto da una decisione, un'abitudine o un risultato che si sappia nominare. Un avanzamento senza evidenze suggerisce che l'assegnazione dei livelli sia stata ottimistica.
- **Fermarsi a ciò che è abbastanza buono.** Un team può ragionevolmente restare al Livello 3 in alcune righe per anni.
