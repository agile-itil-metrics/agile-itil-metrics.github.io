# Délai de livraison, temps de cycle et efficacité du flux

**Le délai de livraison, le temps de cycle et l'efficacité du flux ne signifient quelque chose que si chacun a un début et une fin écrits, une distribution au lieu d'une moyenne et une vue de l'attente qui remplit l'essentiel du temps écoulé.**

## Résumé et motivation

Presque toute équipe veut savoir combien de temps prend le travail. La question paraît simple et provoque des disputes, parce que « combien de temps » dépend de qui demande et d'où il déclenche le chronomètre. Un client compte à partir du moment où il a demandé. Un développeur compte à partir du moment où il a pris le travail. Un responsable d'exploitation compte à partir du moment où le ticket a été affecté à une file. Tous trois ont raison selon leur propre horloge, et tous trois donnent des chiffres différents pour le même travail.

Le [délai de livraison](https://en.wikipedia.org/wiki/Lead_time) (lead time) est le temps écoulé entre l'arrivée d'une demande et sa satisfaction, vu du côté de la personne qui a demandé. Le [temps de cycle](https://en.wikipedia.org/wiki/Cycle_time) est le temps écoulé entre le moment où l'équipe s'engage sur un travail et le moment où il est terminé, vu du côté de l'équipe qui le fait. La différence entre les deux est le temps que la demande a attendu avant que l'équipe démarre. L'efficacité du flux est la part du temps écoulé pendant laquelle quelqu'un travaillait réellement sur l'élément, par opposition à l'élément qui attend. Si un élément a pris 10 jours du début à la fin et a été travaillé pendant 1 jour, son efficacité du flux est de 10 pour cent. Le temps de travail effectif est la part de travail. Le temps d'attente est tout le reste.

Le [développement logiciel lean](https://en.wikipedia.org/wiki/Lean_software_development) et le Kanban Guide ont transporté ces idées de la fabrication au travail de la connaissance. Les pratiques ITIL parlent de temps de résolution, de temps de traitement et de cibles de niveau de service, et les équipes agiles parlent de temps de cycle et d'éléments de travail. Ce sujet donne un seul jeu de définitions qui tient lorsqu'un incident, une demande, un changement et un récit se retrouvent dans la même réunion.

Le temps écoulé a une propriété qui surprend les gens la première fois qu'ils le mesurent. Dans la plupart du travail de la connaissance et du travail de service, l'élément passe la majorité de sa vie à attendre : une décision, un relecteur, un environnement, un fournisseur, une fenêtre de maintenance, ou simplement une personne occupée à autre chose. Rendre cette attente visible est la chose la plus utile que ces métriques fassent. Une équipe qui ne voit pas son temps d'attente tend à vouloir s'améliorer en travaillant plus vite, ce qui a peu d'effet sur un système où 90 pour cent du temps écoulé se passe dans des files. Le comportement des files est traité en profondeur au sujet 2.3, Travail en cours et théorie des files d'attente, et la vue complète du flux de valeur se trouve au sujet 2.4, Métriques de flux de valeur.

Les mesures de temps sont rapportées sous forme de percentiles, comme la médiane et le [percentile](https://en.wikipedia.org/wiki/Percentile) 85 ou 95, pour les raisons exposées au sujet 1.6, Culture statistique pour les métriques de service. Les horodatages bruts proviennent des sources du sujet 1.5, Sources de données et instrumentation. Les mesures de flux que sont le travail en cours, le débit et l'ancienneté des éléments de travail figurent au sujet 2.1, Mesures de flux, et la mesure DORA du délai de livraison des changements se trouve au sujet 2.8, Métriques DORA. Ce sujet couvre les mesures de temps elles-mêmes : comment les définir pour qu'elles soient comparables, où leurs horloges démarrent et s'arrêtent, et comment exposer l'attente qu'elles contiennent.

## Principes clés

- **Nommer l'horloge avant de lire le chiffre.** Chaque mesure de temps a un événement de départ, un événement d'arrêt et une liste d'exclusions. Un chiffre sans eux est une opinion.
- **Le délai de livraison appartient au client, le temps de cycle appartient à l'équipe.** Gardez les deux, et étiquetez toujours celui que montre un graphique, car l'écart entre eux est un signal en soi.
- **Rapporter des distributions, jamais seulement une moyenne.** La médiane décrit l'élément typique. Un percentile élevé décrit le risque que le client porte réellement.
- **L'attente est la principale découverte.** L'efficacité du flux est généralement basse, et la réponse consiste à supprimer les files et les transmissions, non à demander aux gens de se dépêcher.
- **Les états de suspension sont des décisions de conception.** Si l'horloge peut être arrêtée en déplaçant un élément vers un statut « en attente », ce statut sera utilisé ; comptez donc à quelle fréquence il l'est, et par qui.
- **Comparer un élément à ses semblables.** Un incident, une demande standard, un changement et une fonction ont des formes différentes. Segmentez par type de travail avant de comparer quoi que ce soit.
- **Mesurer des systèmes, non des personnes.** Les mesures de temps décrivent la façon dont le travail circule dans une équipe ou un service. Elles ne sont jamais un classement d'individus.

## Définitions des métriques

Le tableau ci-dessous emploie un seul vocabulaire pour les éléments de travail agiles et les enregistrements ITIL. « Élément de travail » désigne tout enregistrement qui se déplace dans un flux de travail : un récit, une tâche, un incident, une demande de service, un changement ou un enregistrement de problème. Toutes les durées sont du temps civil écoulé sauf indication contraire, et chacune est rapportée sous forme de médiane et de percentile élevé.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Délai de livraison | Temps écoulé entre l'arrivée d'une demande et sa livraison au demandeur | horodatage de livraison moins horodatage d'arrivée de la demande, par élément de travail ; l'horloge démarre quand la demande est enregistrée, s'arrête quand le demandeur peut utiliser le résultat ; les éléments encore ouverts et ceux annulés avant livraison sont exclus et comptés séparément | jours ou heures | Historique de l'outil ITSM ou du gestionnaire de tickets | Gestion des demandes de service ; gestion des incidents ; maîtrise des changements | Délai de livraison sur le tableau de l'équipe ; temps entre la demande et la version | Hebdomadaire, revu chaque mois |
| Temps de cycle | Temps écoulé entre le moment où l'équipe commence le travail et le moment où il est terminé | horodatage de fin moins horodatage de démarrage, par élément de travail ; l'horloge démarre au premier passage dans un état de travail actif, s'arrête au premier passage dans un état terminé ; le temps avant le démarrage et après l'état terminé est exclu | jours ou heures | Historique des états du gestionnaire de tickets ou du tableau | Gestion des incidents ; gestion des demandes de service ; maîtrise des changements | Temps de cycle (voir le sujet 2.1, Mesures de flux) | Hebdomadaire |
| Temps de travail effectif | Temps pendant lequel une personne ou un automatisme travaille activement sur l'élément | somme des intervalles que l'élément passe dans des états classés comme travail actif ; les états d'attente, de blocage et de file sont exclus | heures | Historique des états du gestionnaire de tickets, chaque état étant classé actif ou en attente | Gestion des incidents ; gestion des demandes de service | Temps de traitement dans une cartographie de flux de valeur | Échantillon mensuel |
| Temps d'attente | Temps pendant lequel l'élément est dans une file, bloqué ou suspendu | temps de cycle moins temps de travail effectif, par élément de travail ; sans objet pour les éléments sans démarrage consigné | jours ou heures | Historique des états du gestionnaire de tickets | Gestion des incidents ; gestion des niveaux de service | Temps d'attente ou temps bloqué sur un tableau | Mensuelle |
| Efficacité du flux | Part du temps de cycle passée en travail actif | somme des temps de travail effectif / somme des temps de cycle, pour les éléments terminés dans la période ; les éléments à l'historique d'états manquant sont exclus et comptés séparément | pourcentage | Historique des états du gestionnaire de tickets | Amélioration continue ; gestion des demandes de service | Efficacité du flux issue de la pratique lean | Mensuelle |
| Part de suspension de l'horloge | Part du temps de cycle pendant laquelle l'horloge de service formelle était suspendue | somme des durées de suspension / somme des temps de cycle, pour les éléments terminés dans la période ; les suspensions sont les statuts définis dans les règles d'horloge écrites | pourcentage | Historique des statuts de l'outil ITSM | Gestion des niveaux de service ; gestion des incidents | Temps de colonne bloquée ou en attente | Mensuelle |

Le départ de l'horloge du temps de cycle est une décision d'équipe qui doit être écrite. L'horloge formelle d'un accord de niveau de service (SLA) se suspend souvent pendant qu'un élément attend le client ; ce sujet rapporte donc la part de suspension au lieu d'écarter ce temps. Le temps de travail effectif est déduit des états, de sorte que son exactitude dépend de la qualité avec laquelle les états décrivent le travail.

## Recommandations

### Définir les horloges

**1. Écrivez le début et la fin de chaque horloge.** Pour le délai de livraison, le début est l'arrivée de la demande, telle qu'enregistrée par le premier système que touche le demandeur, et la fin est le moment où le demandeur peut utiliser le résultat. Pour le temps de cycle, le début est le premier passage dans un état actif et la fin est le premier passage dans un état terminé. Mettez les deux dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques) et montrez la définition sous chaque graphique.

**2. Convenez de ce que « terminé » signifie pour chaque type de travail.** Un changement est terminé lorsqu'il tourne en production et est vérifié, non lorsque le code est fusionné. Un incident est terminé lorsque le service est rétabli pour l'utilisateur, non lorsque le ticket est clos par un traitement par lots le vendredi. Une demande est terminée lorsque le demandeur a la chose. Si « terminé » diffère selon les équipes, les temps de cycle ne peuvent pas être comparés entre elles.

**3. Gardez à la fois le délai de livraison et le temps de cycle, et surveillez l'écart.** La différence entre eux est l'attente d'engagement : le temps qu'une demande reste avant que l'équipe démarre. Un temps de cycle court à côté d'un long délai de livraison dit que l'équipe travaille efficacement sur ce qu'elle démarre et que l'accueil est le goulot d'étranglement. Un temps de cycle long à côté d'un délai de livraison court dit que les demandes sont acceptées vite puis calent à l'intérieur de l'équipe.

### Rapporter le temps honnêtement

**4. Utilisez des percentiles et dites lesquels.** Rapportez la médiane et le 85e ou le 95e percentile, par exemple « la moitié des éléments se sont terminés en 4 jours et 85 pour cent en 11 jours ». Cet énoncé est aussi une prévision : un nouvel élément a environ 85 pour cent de chances de se terminer en 11 jours si le système reste le même. Une moyenne ne peut pas donner cette phrase, et elle bouge beaucoup lorsqu'une seule valeur aberrante apparaît (voir le sujet 1.6, Culture statistique pour les métriques de service).

**5. Tracez chaque élément, et pas seulement le résumé.** Un nuage de points du temps de cycle en fonction de la date de fin montre d'un coup d'œil la forme du système : des grappes, une lente dérive vers le haut, une marche soudaine après un changement de processus. Les chiffres de synthèse vont à côté du graphique. Un outil qui n'offre qu'une ligne de moyenne retire l'information dont l'équipe a le plus besoin.

**6. Segmentez par type de travail et par classe de service.** Un incident urgent, une demande standard, un changement planifié et un récit de recherche ont des temps attendus différents. Découpez les données par type, et par priorité là où la priorité change la façon dont le travail est traité, avant de chercher des schémas. Les populations mélangées produisent une distribution large qui ne décrit l'expérience de personne.

### Exposer l'attente

**7. Classez chaque statut comme actif, en attente ou terminé.** C'est le travail qui rend possible l'efficacité du flux. « En développement » et « en revue avec un relecteur au travail » sont actifs. « En attente de revue », « en attente d'approbation », « bloqué » et « en attente du client » sont des attentes. Revoyez la classification avec l'équipe, car les libellés d'un flux de travail disent rarement toute la vérité, et un état appelé « en cours » cache souvent un élément que personne n'a touché depuis une semaine.

**8. Calculez l'efficacité du flux comme un diagnostic, non comme un objectif.** Calculez-la sur un échantillon ou sur tous les éléments terminés, et servez-vous-en pour trouver où vit l'attente : quel état retient les éléments le plus longtemps, et quelle transmission le précède. Attendez-vous à des chiffres bas, et ne fixez pas d'objectif tel que « atteindre 40 pour cent ». Relever le chiffre en rebaptisant des états d'attente en états actifs est facile et inutile, et les vrais gains viennent de la suppression de la file elle-même (voir le sujet 2.4, Métriques de flux de valeur).

**9. Comptez séparément le temps bloqué et le temps suspendu.** Suivez à quelle fréquence les éléments entrent dans un état bloqué ou suspendu, combien de temps ils y restent et quelle en était la raison. Une courte liste de raisons de blocage récurrentes, comme l'attente d'une approbation, d'un environnement ou d'un fournisseur, vous dit quoi corriger et à qui parler. Rapportez la part de suspension à côté de tout résultat de niveau de service qui exclut le temps suspendu (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

### Bien utiliser les chiffres

**10. Maîtrisez la file pour maîtriser le temps.** Le temps de traversée d'un système augmente avec le travail en cours, une relation énoncée par la [loi de Little](https://en.wikipedia.org/wiki/Little%27s_law), qui relie le nombre moyen d'éléments dans le système, le taux d'arrivée ou d'achèvement et le temps moyen que passe chaque élément. Limiter le travail en cours est donc le levier le plus direct sur le temps de cycle (voir le sujet 2.3, Travail en cours et théorie des files d'attente). Changer l'objectif de la métrique sans changer la file ne change que l'incitation à mal rapporter.

**11. Utilisez les distributions de temps de cycle pour les prévisions et les cibles de niveau de service.** Si le 85e percentile du temps de cycle des demandes standard est de 6 jours, un engagement à 5 jours sera souvent manqué, et un engagement à 8 jours sera tenu avec de la marge. Fondez une cible interne sur ce que le système a fait, puis travaillez sur le système pour déplacer la distribution (voir le sujet 3.5, Métriques de traitement des demandes de service, et le sujet 4.3, Métriques de maîtrise des changements).

**12. Traitez un changement de définition comme un événement.** Si le début ou la fin d'une horloge change, marquez-le sur chaque graphique et rétablissez l'historique à partir des événements bruts lorsque c'est possible. Sans cette discipline, une courbe de tendance montre l'effet d'un changement de définition comme s'il s'agissait d'une amélioration ou d'un déclin (voir le sujet 1.5, Sources de données et instrumentation).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Délai de livraison | Retarder la création de l'enregistrement de la demande pour que l'horloge démarre tard ; clore et rouvrir des éléments pour relancer l'horloge ; fractionner une demande en de nombreuses minuscules | Comparer les enregistrements de demandes avec le premier contact par courriel ou messagerie sur un échantillon ; suivre le taux de réouverture ; suivre la taille et le nombre d'éléments par demande |
| Temps de cycle | Démarrer l'horloge tard en ne déplaçant les éléments vers « en cours » qu'à la fin ; laisser des éléments hors du tableau jusqu'à ce qu'ils soient presque finis ; découper le travail en morceaux qui ne livrent pas de valeur seuls | Ancienneté des éléments de travail ouverts (voir le sujet 2.1, Mesures de flux) ; vérifier que les éléments terminés sont utilisables par le demandeur ; comparer le délai de livraison au temps de cycle |
| Temps de travail effectif | Classer des états d'attente comme actifs, ou consigner de l'activité pour paraître occupé | Revoir chaque trimestre la classification des états avec l'équipe ; échantillonner des éléments et comparer l'activité consignée avec les validations, les commentaires et les agendas |
| Temps d'attente | Créer de nouveaux statuts pour que le temps d'attente tombe dans un trou non mesuré ; déplacer des éléments en attente vers un statut hors du flux de travail | Compter les statuts et transitions non documentés (voir le sujet 1.5, Sources de données et instrumentation) ; confirmer sur un échantillon que le temps de cycle égale le temps de travail effectif plus le temps d'attente |
| Efficacité du flux | Reclasser l'attente en actif ; ne sélectionner que les éléments rapides pour l'échantillon ; terminer d'abord les éléments faciles pour relever le ratio | Classification d'états fixe avec journal des changements ; la calculer sur tous les éléments terminés ; la rapporter avec le 85e percentile du temps de cycle et l'ancienneté des éléments ouverts |
| Part de suspension de l'horloge | Suspendre l'horloge de service formelle pour des raisons qui ne dépendent pas du client, comme les transmissions internes, afin de respecter le SLA | Auditer les raisons de suspension sur un échantillon ; rapporter côte à côte le temps écoulé et le temps de SLA ; examiner la vue propre du client sur le temps de résolution (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA) |

Une lecture saine montre un délai de livraison et un temps de cycle qui évoluent ensemble, un écart entre eux que l'équipe peut expliquer, un 85e percentile qui est un multiple stable de la médiane et une efficacité du flux basse mais en hausse à mesure que des files précises sont supprimées. Les signes d'alerte sont une médiane qui s'améliore tandis que le percentile élevé empire, une part de suspension qui grandit à la fin de chaque mois et une efficacité du flux qui saute sans aucun changement dans la façon de travailler. Quand un chiffre s'améliore, quelqu'un doit pouvoir désigner le changement dans le travail qui l'explique. Une amélioration due au détournement échouera généralement à ce test. La psychologie plus large est traitée au sujet 1.2, Loi de Goodhart et psychologie des métriques.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Délai de livraison du point de vue du demandeur | Correspond à ce que ressent le client ; difficile à améliorer en changeant des libellés internes | L'événement de départ échappe au contrôle de l'équipe et peut être mal consigné |
| Temps de cycle à partir de l'engagement de l'équipe | Sous le contrôle de l'équipe ; facile à calculer à partir de l'historique du tableau | Ignore le retard d'accueil ; une équipe peut paraître rapide pendant que les demandes attendent |
| Temps écoulé (horloge civile) | Simple, comparable et correspond à l'expérience du client | Inclut les nuits et les week-ends, ce qui peut induire en erreur pour des équipes aux horaires différents |
| Horloge en heures ouvrées | Convient aux niveaux de service assurés par des équipes présentes et aux schémas d'astreinte | Exige un calendrier par équipe ; cache l'attente réelle vécue par le client |
| Efficacité du flux sous forme de ratio | Montre en un seul chiffre intuitif la part du temps passée à attendre | Dépend de la classification des états ; facile à gonfler ; peut être mal lue comme un objectif |
| Rapport par percentiles | Montre le risque et soutient les prévisions | Exige assez d'éléments par période ; plus difficile à lire pour certains publics qu'une moyenne |

Le conseil pratique est de commencer par le temps écoulé, d'ajouter une vue en heures ouvrées seulement là où un niveau de service l'exige et de rapporter le délai de livraison comme le temps de cycle à un percentile élevé. Utilisez l'efficacité du flux comme déclencheur de conversation lors d'une revue, avec la classification des états sur la table, et évitez de la mettre sur un tableau de score.

## Questions à discuter avec votre équipe

**1. Où démarre notre horloge de délai de livraison, et où le client pense-t-il qu'elle démarre ?**
Prenez trois demandes récentes et suivez-les du premier contact à la livraison. Marquez le moment où la demande a été enregistrée dans le système de référence. Comparez l'écart entre le premier contact et la création de l'enregistrement. L'animateur doit chercher des files cachées dans le courriel, la messagerie ou une boîte partagée qui n'apparaissent jamais dans une métrique.

**2. Que signifie « terminé » pour chaque type de travail que nous traitons ?**
Listez les types de travail, comme les incidents, les demandes, les changements et les récits, et demandez l'événement d'arrêt de chacun. Demandez si le demandeur conviendrait que le travail était terminé à ce moment. Les divergences d'opinion désignent une horloge qui s'arrête trop tôt. Convenez d'un événement d'arrêt par type et écrivez-le.

**3. Lesquels de nos statuts sont des attentes, et combien de temps les éléments y restent-ils ?**
Affichez le flux de travail au mur et marquez chaque état comme actif ou en attente. Demandez le temps typique dans chaque état d'attente d'après le dernier mois de données. Le plus grand état d'attente est généralement une surprise pour quelqu'un. Choisissez une file à examiner de plus près le mois prochain.

**4. Quel percentile promettons-nous, et qu'a réellement fait le système ?**
Montrez la distribution des temps de cycle du dernier trimestre avec la médiane, le 85e percentile et le 95e percentile. Demandez quel engagement l'équipe prend actuellement envers les clients et où il se situe sur la distribution. Discutez du coût de promettre un temps plus rapide que ce que le système a livré. Décidez d'un engagement que l'équipe peut tenir pour ses propres raisons.

**5. Qui est autorisé à suspendre l'horloge, et pourquoi ?**
Listez les états de suspension et de mise en attente, les personnes qui peuvent les employer et les raisons déclarées. Lisez un échantillon d'éléments suspendus et demandez si le client en était réellement la cause. Discutez de ce qui se passerait si la part de suspension était montrée sur le même graphique que le résultat du SLA. L'animateur doit garder un ton curieux, car les états de suspension existent souvent pour des raisons légitimes qui n'ont jamais été écrites.

**6. Si l'efficacité du flux doublait le trimestre prochain, qu'aurions-nous changé dans la circulation du travail ?**
Demandez au groupe de nommer les files, les transmissions, les approbations ou les tailles de lots précis qui devraient changer. Si les réponses sont générales, comme « travailler plus dur » ou « mieux communiquer », le chiffre n'est pas encore relié à une action. Choisissez un changement concret, prédisez son effet sur le temps d'attente d'un état nommé et convenez de quand vérifier.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison détiennent l'horloge du temps de cycle et en voient le détail sur le tableau. Elles gagnent le plus à classer honnêtement les états, à limiter le travail en cours et à lire le nuage de points dans leurs propres rétrospectives. Elles devraient résister à la pression de fractionner le travail en morceaux artificiellement petits qui se terminent vite et ne livrent rien, et montrer l'âge des éléments ouverts à côté des temps de cycle terminés (voir le sujet 2.1, Mesures de flux).

### Équipes de service et d'exploitation

Les équipes de service travaillent avec des enregistrements qui portent des horloges de niveau de service formelles, et leurs états de suspension sont l'endroit où le temps écoulé et le temps de SLA divergent. Elles devraient rapporter les deux horloges, segmenter par type et priorité, et consigner la raison de chaque suspension. Les équipes d'exploitation sont aussi les propriétaires naturels des files d'approbations, de fenêtres de maintenance et de réponses de fournisseurs, qui dominent souvent le temps d'attente que voient les équipes produit (voir le sujet 3.5, Métriques de traitement des demandes de service).

### Direction et gouvernance

Les dirigeants demandent le délai de livraison parce que c'est le chiffre le plus proche de ce que vit le client. Ils devraient attendre une définition, une distribution et une segmentation avec chaque chiffre, et demander où est l'attente avant de demander pourquoi les gens sont lents. Les cibles pour ces mesures fonctionnent mieux quand elles s'appliquent à un service ou à un flux de valeur doté d'un responsable nommé, et quand elles sont fixées d'après ce que le système a livré. Une cible appliquée à une moyenne invite au reclassement et aux jeux d'horloge.

### Clients et utilisateurs

Les clients vivent le délai de livraison, avec toute l'attente avant que le travail commence et toute l'attente après que l'équipe croit avoir terminé. Ils ont besoin d'une estimation honnête exprimée sous forme de fourchette, comme « la plupart des demandes de ce genre sont traitées en une semaine, et presque toutes en deux », et ils ont besoin de savoir quand une suspension a été appliquée parce que l'équipe les attendait. Les rapports aux clients devraient indiquer quelle horloge ils emploient (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

## En pratique : un exemple d'ITIL agile

Le service informatique d'un hôpital régional exploite un centre de services, une équipe d'infrastructure et une équipe d'applications qui soutient le personnel clinique. Tous les chiffres de cet exemple sont illustratifs.

Le centre de services indique que les demandes d'accès standard respectent leur cible de 5 jours ouvrés dans 94 pour cent des cas, et pourtant les responsables de service continuent de se plaindre que l'accès prend « environ deux semaines ». La responsable des opérations de service demande à l'équipe de mesurer le délai de livraison et le temps de cycle de ces demandes sur un trimestre, en jours civils écoulés tirés de l'historique brut des statuts plutôt que de la minuterie du SLA.

Le résultat pour 400 demandes (illustratif) est un temps de cycle médian de 3 jours et un 85e percentile de 9 jours. Le délai de livraison, mesuré à partir du moment où le responsable a écrit pour la première fois à la boîte partagée, a une médiane de 8 jours et un 85e percentile de 16 jours. Deux constats expliquent l'écart. Premièrement, les demandes attendent en moyenne 3 jours dans la boîte avant que quelqu'un crée un ticket, ce qui est invisible pour le SLA. Deuxièmement, le statut « en attente d'approbation » représente l'essentiel du temps de cycle : sur les 9 jours du 85e percentile, environ 6 jours se passent à attendre l'approbation d'un chef de département. Le temps de travail effectif sur un échantillon de 30 demandes est d'environ une demi-journée, de sorte que l'efficacité du flux est d'environ 8 pour cent (illustratif). Le résultat du SLA est élevé parce que la minuterie s'arrête pendant « en attente d'approbation » et « en attente du client » ; la part de suspension de l'horloge est donc de 52 pour cent du temps de cycle.

L'équipe prend trois décisions. Elle ajoute un formulaire web qui crée le ticket dès le premier contact, de sorte que l'horloge du délai de livraison démarre là où démarre celle du client. Elle convient avec les chefs de département que les approbations pour une liste définie de rôles standard sont préautorisées, avec un audit trimestriel au lieu d'une approbation par demande. Et elle ajoute la part de suspension et le délai de livraison à la revue de service mensuelle à côté du résultat du SLA. Après un trimestre, le délai de livraison médian tombe à 4 jours et le 85e percentile à 8 jours (illustratif), tandis que le résultat du SLA bouge à peine.

Pendant la revue, l'équipe attrape un risque de détournement. Un technicien a commencé à déplacer les tickets vers « en attente du client » dès qu'un courriel d'approbation est envoyé, ce qui n'est pas l'usage prévu du statut. La part de suspension de ce groupe monte, l'audit d'un échantillon de tickets suspendus montre le schéma, et l'équipe réécrit les règles d'horloge de sorte que seule une demande d'information adressée au demandeur puisse suspendre l'horloge. Le garde-fou qui a attrapé le problème était de rapporter la part de suspension à côté du résultat du SLA, ce qui est l'appariement recommandé dans ce sujet.

## Perspective sectorielle

**Startup.** Avec une petite équipe et peu de transmissions, le temps de cycle est facile à mesurer à partir du tableau et le délai de livraison est proche du temps de cycle. Suivez les deux dès le premier jour avec une classification d'états simple, et regardez le nuage de points chaque semaine. L'efficacité du flux est généralement déjà élevée pour les petites tâches ; le danger principal est donc un accueil informel qui cache les demandes dans la messagerie.

**Petite entreprise.** Une seule personne peut jouer le demandeur, l'approbateur et l'exécutant, et le centre de services hébergé peut n'offrir qu'une minuterie de SLA. Exportez l'historique brut des statuts, calculez vous-même le temps écoulé et gardez une seule définition pour chaque horloge. Le constat le plus utile est généralement le temps d'attente des réponses de fournisseurs.

**Grande entreprise.** De nombreuses transmissions entre équipes, fournisseurs et comités d'approbation rendent le temps d'attente grand et réparti entre organisations. Convenez d'un vocabulaire commun pour le début, la fin et la suspension, classez les états de façon cohérente entre les outils ITSM et d'ingénierie, et segmentez par type de travail et classe de service. Les comparaisons entre équipes n'ont de sens qu'après alignement des définitions, et une consolidation doit être construite à partir de distributions, non en faisant la moyenne des moyennes d'équipes.

**Gouvernement et secteur public.** Les délais de réponse légaux, les règles de marchés et les chaînes d'approbation créent une attente que l'équipe ne peut pas supprimer seule. Consignez les horloges imposées de l'extérieur séparément des horloges internes, afin que la part du retard que l'organisation contrôle puisse être vue et améliorée. La publication du délai de livraison, avec des définitions claires, bâtit la confiance et expose les files que crée la politique (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation principale est que les mesures de temps transforment une plainte vague (« ça prend une éternité ») en un problème localisé (« les demandes attendent six jours une approbation »). Les mêmes données donnent aux équipes une prévision sincère, de sorte que les engagements envers les clients reposent sur la distribution du travail passé plutôt que sur l'espoir. Elles exposent aussi où un investissement dans l'automatisation, les approbations ou les effectifs raccourcirait le temps écoulé, ce qui est souvent un autre endroit que celui auquel on s'attend.

Les coûts sont modestes lorsque l'outillage enregistre déjà les changements d'état. La mise en place consiste à convenir des définitions, à classer les états et à construire une vue de la distribution et du nuage de points. Les coûts courants sont le temps d'entretien de la classification des états, d'audit des raisons de suspension sur un échantillon et de tenue de la revue mensuelle. Là où l'historique des états manque ou n'est pas fiable, le premier investissement porte sur l'instrumentation décrite au sujet 1.5, Sources de données et instrumentation.

Le retour se voit dans des schémas qu'une équipe peut mesurer elle-même : un temps de cycle à percentile élevé plus court pour un type de travail, moins d'escalades sur des éléments en retard, moins de litiges sur l'horloge qui a raison et un écart plus petit entre le délai de livraison et le temps de cycle. N'attendez pas un gain particulier d'une référence. Les auteurs lean et de flux décrivent une faible efficacité du flux comme courante, mais aucun chiffre publié ne doit être adopté comme cible pour votre propre travail sans vos propres données. Le coût total de possession est dominé par le temps des personnes ; comptez donc les heures du responsable de la métrique et des relecteurs.

## Antimodèles et pièges

- **Rapporter la moyenne.** Une seule longue valeur aberrante tire la moyenne et l'élément typique est mal décrit. Rapportez la médiane et un percentile élevé, et tracez les éléments.
- **Un seul chiffre pour tout le travail.** Mélanger incidents, demandes et fonctions produit une distribution qui ne décrit rien. Segmentez d'abord par type de travail et classe de service.
- **Ne mesurer que l'horloge du SLA.** Une minuterie qui s'arrête pendant les états d'attente rapporte un résultat que le client ne vit jamais. Rapportez le délai de livraison écoulé et la part de suspension à côté.
- **Fixer un objectif d'efficacité du flux.** Les gens relèvent le ratio en rebaptisant des états. Utilisez-le comme un diagnostic et jugez le succès au temps d'attente de files nommées.
- **Démarrer l'horloge au mauvais endroit.** Une horloge qui commence à l'affectation ou au premier travail cache la file d'accueil. Démarrez le délai de livraison à la demande et le temps de cycle à l'engagement, et publiez les deux.
- **Comparer les équipes par temps de cycle.** Des travaux, des états et des définitions différents rendent les classements dénués de sens et invitent au détournement. Comparez une équipe à son propre historique, et comparez les services seulement après alignement des définitions.
- **Ignorer les éléments ouverts.** Le temps de cycle ne compte que le travail terminé, de sorte qu'un élément bloqué est invisible jusqu'à ce qu'il se termine. Suivez l'âge des éléments encore en cours (voir le sujet 2.1, Mesures de flux).
- **Changer les définitions en silence.** La tendance enregistre alors un changement de l'instrument. Consignez chaque changement et marquez-le sur le graphique.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | Les gens citent des durées de mémoire ; chacun démarre l'horloge différemment | Certaines équipes définissent le temps de cycle sur leur tableau ; les équipes ITSM citent le temps de SLA | Une définition écrite du délai de livraison, du temps de cycle et des suspensions utilisée par toutes les équipes | Changements de définition consignés et historique rétabli à partir des événements bruts | Définitions alignées avec les fournisseurs et les clients et révisées quand elles cessent d'éclairer les décisions |
| Reporting et analyse | Moyennes dans une diapositive, assemblées à la main | Certaines équipes montrent des médianes ou un graphique de l'outil | Médiane et percentile élevé, avec un nuage de points, segmentés par type de travail | Distributions suivies dans le temps et revues selon un rythme ; prévisions tirées d'elles | Les données de flux entre équipes et fournisseurs sont combinées pour prévoir des engagements de bout en bout |
| Attente et efficacité du flux | L'attente n'est pas distinguée du travail | Des colonnes bloquées existent sur certains tableaux | Chaque statut classé actif ou en attente ; efficacité du flux calculée sur tous les éléments terminés | Plus grandes files examinées et financées pour amélioration ; raisons de suspension auditées | Files, approbations et transmissions repensées conjointement avec les équipes et les fournisseurs qui les créent |
| Usage dans les décisions | Chiffres montrés lors d'une revue trimestrielle et sans suite | Les équipes discutent du temps de cycle en rétrospective | Cibles de service fixées d'après la distribution observée | Cibles associées à des garde-fous et revues pour le détournement | Les clients voient des fourchettes honnêtes, et les idées d'amélioration viennent de tous ceux qui touchent le travail |

## Liste de vérification

- [ ] Chaque mesure de temps a un événement de départ, un événement d'arrêt et une liste d'exclusions écrits dans le registre des métriques.
- [ ] Le délai de livraison et le temps de cycle sont tous deux rapportés, et chaque graphique est étiqueté avec celui qu'il montre.
- [ ] « Terminé » est défini pour chaque type de travail et convenu avec le demandeur.
- [ ] Les résultats sont rapportés sous forme de médiane et de percentile élevé, et les éléments sont tracés.
- [ ] Les données sont segmentées par type de travail et, le cas échéant, par classe de service.
- [ ] Chaque statut est classé actif, en attente ou terminé, et la classification est revue chaque trimestre.
- [ ] Les statuts de suspension, qui peut les employer et leurs raisons sont écrits et audités sur un échantillon.
- [ ] Le temps écoulé et le temps de SLA sont montrés côte à côte, avec la part de suspension.
- [ ] L'efficacité du flux est utilisée comme un diagnostic et ne figure pas sur un tableau de score.
- [ ] Les changements de définition sont consignés et marqués sur les graphiques.
- [ ] L'âge des éléments ouverts est revu avec les temps de cycle terminés.

## Prompts d'IA

**Rédigez des règles d'horloge pour un type de travail.**

```text
Nous traitons [work type, for example standard access requests] dans [tool or
tools]. Les statuts du flux de travail sont [list of statuses]. Rédigez des
règles d'horloge écrites pour le délai de livraison et le temps de cycle :
l'événement qui démarre chaque horloge, l'événement qui l'arrête, les statuts
qui suspendent ou excluent du temps, et ce qu'il advient des éléments annulés
et rouverts. Signalez les statuts dont le sens est ambigu et les questions
auxquelles je dois répondre avant que les règles soient définitives.
N'inventez ni fonctions de notre outil ni valeurs de référence. Énumérez vos
hypothèses.
```

**Classez des statuts comme actifs ou en attente.**

```text
Voici le flux de travail de [team or service] : [statuses with a one-line
meaning for each]. Pour chaque statut, proposez s'il s'agit de travail actif,
d'attente ou de terminé, et expliquez pourquoi. Signalez les statuts qui mêlent
travail et attente, et suggérez comment les scinder avec le plus petit
changement possible du flux de travail. Dites comment la classification
changerait le calcul de l'efficacité du flux. Ne supposez pas combien de temps
les éléments restent dans chaque statut. Énumérez vos hypothèses.
```

**Analysez un ensemble de temps de cycle.**

```text
Ci-dessous figurent des temps de cycle en [unit] pour [number] éléments
terminés de type [work type], avec leurs dates de fin : [data]. Décrivez la
distribution à l'aide de la médiane et du [percentile, for example 85th]
percentile, repérez les grappes ou la dérive dans le temps et suggérez des
questions à poser à l'équipe sur les éléments lents. Recommandez combien
d'éléments il me faut avant que les percentiles soient fiables, et expliquez le
raisonnement. N'inventez pas de valeurs de référence et ne comparez pas avec
d'autres organisations. Énumérez vos hypothèses.
```

**Examinez une métrique pour y repérer un détournement.**

```text
Nous rapportons [metric, for example flow efficiency] pour [team or service],
définie comme [definition and clocks]. Les gens peuvent l'influencer par [known
behaviors, if any]. Énumérez les façons plausibles dont le chiffre pourrait être
détourné ou mal lu, un garde-fou associé (métrique ou pratique) pour chacune et
un échantillon d'enregistrements à lire à la main pour vérifier. N'inventez pas
de statistiques sur la fréquence du détournement. Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une mesure de temps et le garde-fou qui doit se trouver à côté.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une mesure de temps modifiée énonce ses horloges, ses exclusions et son vecteur de détournement.

## Points clés à retenir

- Le délai de livraison est l'attente du client et le temps de cycle est l'attente de l'équipe ; gardez donc les deux et examinez l'écart entre eux.
- Écrivez les règles de début, de fin et de suspension de chaque horloge, et traitez un changement de définition comme un événement.
- Rapportez la médiane et un percentile élevé, tracez les éléments et segmentez par type de travail avant de comparer quoi que ce soit.
- L'efficacité du flux est généralement basse parce que l'essentiel du temps écoulé est de l'attente ; servez-vous-en pour localiser les files et évitez d'en faire un objectif.
- Montrez la part de suspension à côté de tout résultat de niveau de service qui exclut le temps suspendu.
- Réduisez le travail en cours et supprimez les transmissions pour raccourcir le temps, car dire aux gens de se dépêcher ne change pas les files.

## Références et lectures complémentaires

1. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. DeGrandis, D., *Making Work Visible: Exposing Time Theft to Optimize Work and Flow*, IT Revolution, 2017.
6. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
12. Wikipedia, [Cycle time](https://en.wikipedia.org/wiki/Cycle_time).
13. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
14. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
