# Mesures de flux

**Quatre comptages et horloges simples, le travail en cours, le débit, l'ancienneté des éléments de travail et le temps de cycle, disent à une équipe où son travail est bloqué et ce qu'elle peut promettre, à condition que chacun soit défini de la même façon pour le travail de projet et le travail de service et lu comme une distribution plutôt que comme une moyenne.**

## Résumé et motivation

La plupart des tableaux de bord de livraison et de service rapportent ce qui s'est terminé le mois dernier. Les mesures de flux ajoutent la vue qui compte pendant que le travail est encore en mouvement : combien est en cours en ce moment, quel âge a chaque élément, à quelle vitesse les éléments se terminent et combien de temps ils prennent. La littérature sur le flux donne à ces quatre mesures des définitions précises. Le Kanban Guide (kanbanguides.org, version courante en octobre 2026) en est une source claire : il les nomme comme les mesures qu'une équipe emploie pour inspecter et adapter son flux de travail, et ce sujet suit ces définitions sans exiger de méthode ni de tableau particuliers.

Les quatre définitions sont courtes. Le **travail en cours (WIP)** est le nombre d'éléments de travail qui ont démarré sans être terminés. Le **débit** est le nombre d'éléments de travail terminés par unité de temps. L'**ancienneté d'un élément de travail** est le temps écoulé entre le démarrage d'un élément de travail et l'heure actuelle ; elle ne s'applique donc qu'aux éléments encore en cours. Le **temps de cycle** est le temps écoulé entre le démarrage et la fin d'un élément de travail, en comptant les deux jours inclusivement selon la formulation du Guide. Un **élément de travail** est une unité de travail que l'équipe a choisi de suivre comme une chose unique, comme un récit utilisateur, un incident, une demande de service ou un changement. Un **flux de travail** est l'ensemble des états entre « démarré » et « terminé », et la **définition du flux de travail** écrite de l'équipe dit lesquels ils sont.

Deux des quatre concernent le système dans son ensemble (WIP et débit) et deux concernent les éléments individuels (ancienneté et temps de cycle). La paire des éléments terminés est le débit et le temps de cycle. La paire des éléments non terminés est le WIP et l'ancienneté. Cette séparation compte parce que les mesures des éléments terminés sont retardées : elles disent comment les choses se sont passées. Les mesures des éléments non terminés sont avancées : elles disent ce qui est sur le point de se produire, tant qu'il est encore temps d'agir. L'ancienneté des éléments de travail est la moins utilisée des quatre, et c'est généralement la première qui vaut la peine d'être ajoutée à un tableau.

La relation entre les trois premières n'est pas accidentelle. La [loi de Little](https://en.wikipedia.org/wiki/Little%27s_law), résultat de la [théorie des files d'attente](https://en.wikipedia.org/wiki/Queueing_theory), dit que dans un système stable le nombre moyen d'éléments dans le système est égal au taux moyen d'arrivée multiplié par le temps moyen que chaque élément y passe. En termes de flux, le WIP moyen est lié au débit moyen et au temps de cycle moyen. La loi ne vaut que sous des conditions auxquelles le sujet revient dans les recommandations (voir le sujet 2.3, Travail en cours et théorie des files d'attente, pour le traitement complet). La conséquence pratique est simple : si le débit reste à peu près constant, plus de travail en cours signifie des temps de cycle plus longs.

Les points de vue agile et ITIL se rencontrent ici avec des vocabulaires différents. Dans la pratique agile, les mesures de flux appartiennent au tableau de l'équipe et servent lors d'une revue régulière avec les parties prenantes et dans la réflexion propre de l'équipe sur la façon de s'améliorer. Dans ITIL 4, les mêmes chiffres décrivent comment la gestion des incidents, la gestion des demandes de service et la maîtrise des changements font circuler des enregistrements entre états, et ils alimentent la pratique de mesure et de reporting et la gestion des niveaux de service. Un incident est un élément de travail. Une demande de service est un élément de travail. Les deux ont un début, une fin et un âge entre les deux. Le centre de services ITIL et l'équipe de livraison font le même genre de travail du point de vue de la mesure : des éléments arrivent, attendent, sont traités et partent.

Les mesures se rattachent aussi au [développement logiciel lean](https://en.wikipedia.org/wiki/Lean_software_development), qui traite l'attente comme la principale source de gaspillage, et au [diagramme de flux cumulé](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), un graphique des arrivées et des départs cumulés qui montre d'un coup d'œil le WIP, le débit et le temps de cycle. Le graphique est facultatif. Les quatre mesures peuvent être calculées à partir d'un tableau d'éléments portant deux dates chacun.

Parce que le temps de cycle et l'ancienneté sont des durées à longue queue à droite, une moyenne unique induit en erreur. Un [percentile](https://en.wikipedia.org/wiki/Percentile) comme le 85e dit à une équipe « 85 pour cent des éléments se terminent en ce nombre de jours », ce qui est une prévision utilisable et une promesse utilisable (voir le sujet 1.6, Culture statistique pour les métriques de service). La littérature sur le flux appelle une telle promesse une **attente de niveau de service (SLE)** : combien de temps devrait prendre un élément typique, énoncé sous forme d'un temps et d'une probabilité. Une SLE est la prévision qu'une équipe fait sur elle-même. Ce n'est pas un [accord de niveau de service](https://en.wikipedia.org/wiki/Service-level_agreement), qui est un engagement négocié avec un client (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

## Principes clés

- **Compter des éléments entiers répondant à une seule définition de démarré et terminé.** Fractionner ou fusionner des éléments pour améliorer un chiffre détruit la comparabilité. Convenez de ce qu'est un élément de travail, et gardez la définition stable.
- **Définir les horloges avant de collecter les données.** Le temps de cycle et l'ancienneté dépendent de l'état qui signifie « démarré » et de celui qui signifie « terminé ». Écrivez les deux, et consignez tout changement qui les touche (voir le sujet 1.5, Sources de données et instrumentation).
- **Regarder d'abord le travail non terminé.** L'ancienneté et le WIP sont les seules mesures qui peuvent encore changer un résultat. Le débit et le temps de cycle confirment ce qui s'est déjà passé.
- **Rapporter des distributions, non des moyennes.** Montrez des percentiles pour le temps de cycle et l'ancienneté, et une série de comptages hebdomadaires pour le débit, afin que la forme de la variation soit visible.
- **Utiliser les mesures pour gérer le flux de travail, non les personnes.** L'unité d'analyse est le flux de travail de l'équipe. Ne classez jamais des individus par éléments terminés ou par temps de cycle.
- **Limiter le WIP pour rendre le flux prévisible.** Une limite de WIP est une politique, non un objectif. La limite existe pour exposer les files et raccourcir le temps de cycle.
- **Séparer le temps de flux de l'exactitude de la planification.** Les mesures de flux décrivent comment le travail circule. Elles ne disent rien par elles-mêmes sur le fait que le bon travail ait été choisi (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

## Définitions des métriques

Chaque ligne compte des éléments sur le flux de travail d'une seule équipe. Les éléments encore en cours sont exclus du temps de cycle et du débit, et les éléments terminés sont exclus de l'ancienneté et du WIP.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Travail en cours (WIP) | Éléments de travail démarrés mais non terminés | Nombre d'éléments dont l'horodatage de démarrage est renseigné et dont l'horodatage de fin est vide, à un moment donné (par exemple la fin de chaque jour) ; les éléments du backlog pas encore démarrés et les éléments terminés sont exclus | éléments | Historique des états du gestionnaire de tickets ou de l'outil ITSM | Gestion des incidents ; gestion des demandes de service ; maîtrise des changements | Limite de WIP ; backlog d'équipe en cours | Instantané quotidien, revu chaque semaine |
| Débit | Éléments de travail terminés par unité de temps | Nombre d'éléments dont l'horodatage de fin tombe dans la période (par exemple une semaine civile, du lundi au dimanche) ; les éléments terminés puis rouverts ne comptent à nouveau que s'il s'agit de nouveaux éléments | éléments par semaine | Historique des états du gestionnaire de tickets ou de l'outil ITSM | Gestion des incidents ; traitement des demandes de service | Débit ; éléments terminés | Hebdomadaire |
| Ancienneté d'un élément de travail | Temps écoulé depuis qu'un élément non terminé est en cours | Heure actuelle moins horodatage de démarrage, pour les éléments encore en cours ; l'horloge court pendant le temps de blocage ; les éléments pas encore démarrés sont exclus | jours | Historique des états du gestionnaire de tickets ou de l'outil ITSM | Gestion des incidents ; gestion des problèmes | Ancienneté de l'élément de travail ; point quotidien de l'équipe | Quotidienne, revue à chaque point de l'équipe |
| Temps de cycle | Temps écoulé entre le démarrage et la fin d'un élément terminé | Horodatage de fin moins horodatage de démarrage, en jours civils, inclusivement ; l'horloge démarre au premier passage dans un état démarré et s'arrête au passage dans un état terminé ; rapportez la médiane et les 85e et 95e percentiles | jours | Historique des états du gestionnaire de tickets ou de l'outil ITSM | Gestion des incidents ; traitement des demandes de service ; maîtrise des changements | Temps de cycle ; durée de l'élément | Hebdomadaire, avec une fenêtre glissante de 8 à 12 semaines |
| Atteinte de la SLE | Part des éléments terminés qui ont respecté l'attente de niveau de service de l'équipe | Éléments terminés dont le temps de cycle est inférieur ou égal à la SLE / tous les éléments terminés dans la fenêtre ; les éléments encore ouverts sont exclus | pourcentage | Dérivée du temps de cycle | Gestion des niveaux de service | Attente de niveau de service | Mensuelle |
| Part du temps bloqué | Part des jours en cours que les éléments ont passés signalés comme bloqués | Éléments-jours dans un état bloqué / éléments-jours en cours, sur la fenêtre ; l'horloge des deux démarre à l'horodatage de démarrage | pourcentage | Indicateurs du gestionnaire de tickets ou statut bloqué dans l'outil ITSM | Gestion des incidents ; gestion des problèmes ; gestion des fournisseurs | Blocages ; obstacles soulevés aux points quotidiens de l'équipe | Hebdomadaire |

Le temps de cycle suit ici la définition de la littérature sur le flux. Il diffère de l'idée ITIL de temps de résolution, qui est souvent mesuré à partir du moment où un ticket est ouvert et peut exclure le temps en attente. Une équipe qui veut comparer les deux doit les étiqueter, et le sujet 2.2 traite les horloges en détail (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux). L'atteinte de la SLE et la part du temps bloqué sont dérivées des quatre mesures de base et figurent ici parce que c'est ainsi qu'une équipe emploie ces mesures au quotidien.

## Recommandations

### Définir le flux de travail et les éléments

**1. Écrivez la définition du flux de travail avant de tracer quoi que ce soit.** Listez les états, dites lequel signifie « démarré » et lequel signifie « terminé », et indiquez qui peut déplacer un élément de l'un à l'autre. La littérature sur le flux appelle cela la définition du flux de travail, et chaque mesure de ce sujet en dépend. Si deux équipes définissent « démarré » différemment, leurs temps de cycle ne peuvent pas être comparés.

**2. Choisissez une taille d'élément de travail que l'équipe peut terminer en jours, non en mois.** Un élément de travail est ce que l'équipe suit comme une unité : un récit, un incident, une demande. Les très gros éléments cachent leur propre ancienneté et rendent le débit irrégulier. Employez une règle stable comme « un élément est une chose qu'un client ou un utilisateur pourrait remarquer », et évitez de fractionner des éléments juste pour améliorer un compte.

**3. Traitez le travail de projet et le travail de service comme le même genre de flux, avec des schémas d'arrivée différents.** Le travail de projet arrive comme un backlog planifié dans lequel l'équipe puise. Le travail de service, comme les incidents et les demandes, arrive de façon imprévisible et peut passer devant le travail planifié. Mesurez les deux sur le même tableau ou dans les mêmes tables, étiquetés par type, pour voir comment les interruptions affectent le travail planifié (voir le sujet 2.9, Travail opérationnel et travail non planifié).

### Mesurer le travail non terminé

**4. Commencez par l'ancienneté des éléments de travail sur le tableau.** Marquez chaque carte avec son âge en jours et triez ou surlignez par tranches de percentiles tirées de l'historique de temps de cycle de l'équipe. Un élément plus ancien que le 85e percentile des temps de cycle passés est un signal pour demander ce qui le bloque aujourd'hui. Cela transforme une mesure retardée en invitation quotidienne.

**5. Comptez honnêtement le WIP et fixez une limite que vous pouvez défendre.** Comptez chaque élément démarré qui n'est pas terminé, y compris le travail en attente d'une revue ou d'un fournisseur. Choisissez une limite initiale à partir du WIP moyen actuel de l'équipe et abaissez-la pas à pas, en notant ce qui change dans le temps de cycle et l'ancienneté. Traitez la limite comme une politique que l'équipe inspecte, et n'utilisez la loi de Little que comme un contrôle de bon sens sur les moyennes (voir le sujet 2.3, Travail en cours et théorie des files d'attente).

**6. Montrez le travail bloqué comme un temps, non comme un indicateur.** Un indicateur de blocage que personne ne compte devient une excuse. Consignez quand un élément est devenu bloqué et quand il a été libéré, et rapportez la part du temps bloqué. Gardez l'horloge de l'élément en marche pendant le blocage, car l'attente du client ne se suspend pas (voir le sujet 3.3, Temps de réponse et de résolution des incidents, où les états de mise en attente d'ITIL soulèvent la même question).

### Mesurer le travail terminé

**7. Rapportez le temps de cycle comme une distribution avec des percentiles.** Montrez la médiane, le 85e percentile et le 95e percentile, et tracez chaque élément terminé comme un point dans le temps (un nuage de points) pour que l'équipe voie les grappes et les valeurs aberrantes. Indiquez la fenêtre, par exemple les 10 dernières semaines. Une moyenne cache la longue queue que ressentent les clients.

**8. Rapportez le débit comme une série hebdomadaire, non comme un total unique.** Tracez le nombre d'éléments terminés par semaine sous forme de [graphique de séquence](https://en.wikipedia.org/wiki/Run_chart) ou de [carte de contrôle](https://en.wikipedia.org/wiki/Control_chart). Les comptages hebdomadaires varient naturellement ; lisez donc les changements au regard de cette variation avant de réagir, et ne comparez jamais le débit de deux équipes comme un classement de performance, car les tailles et les définitions d'éléments diffèrent (voir le sujet 2.5, Métriques de prévision et de planification de la livraison).

**9. Fixez une attente de niveau de service à partir de vos propres données et revoyez-la.** Prenez les temps de cycle de l'équipe sur les dernières semaines, choisissez une probabilité avec laquelle l'équipe peut vivre et lisez le nombre de jours au percentile. Publiez-la sous la forme « 85 pour cent des éléments se terminent en 9 jours ou moins », avec les valeurs réelles de vos données. Revoyez-la quand le flux de travail change. Une SLE est une prévision que l'équipe fait sur elle-même ; gardez-la donc séparée des cibles contractuelles.

### Utiliser les mesures

**10. Utilisez les quatre ensemble, et posez les mêmes quatre questions à chaque point d'équipe.** Qu'est-ce qui est en cours, et est-ce dans la limite ? Quels éléments sont les plus anciens, et qu'est-ce qui les débloquerait ? Combien en avons-nous terminé, et est-ce dans la plage habituelle ? Combien de temps les récents ont-ils pris par rapport à notre attente ? Les quatre questions remplacent un rapport d'état et prennent quelques minutes.

**11. Appliquez les mêmes mesures aux files de service, avec une frontière claire pour l'horloge.** Pour les incidents et les demandes, « démarré » pourrait être la première affectation à une personne ou une équipe, tandis que l'horloge de résolution ITIL démarre à l'enregistrement. Les deux sont valables et répondent à des questions différentes : quelle est la réactivité de l'accueil, et combien de temps prend le travail lui-même. Nommez chaque horloge, et ne les mélangez pas dans un même graphique (voir le sujet 3.5, Métriques de traitement des demandes de service).

**12. Changez le flux de travail, puis mesurez à nouveau, et gardez l'historique.** Quand l'équipe change une limite de WIP, un état ou une politique, consignez la date et la raison, et marquez le changement sur les graphiques. Un déplacement du temps de cycle après un changement est la preuve de son effet. Un déplacement sans changement consigné est une raison de soupçonner l'instrument (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Travail en cours (WIP) | Garder des éléments dans le backlog ou dans une colonne « prêt » jusqu'au dernier moment pour qu'ils ne soient pas comptés comme démarrés ; clore et rouvrir des éléments ; cacher du travail hors du tableau | Rapprocher les éléments du tableau des demandes reçues ; échantillonner le tableau au regard du travail réel de l'équipe ; suivre l'âge des éléments de la première colonne |
| Débit | Fractionner les éléments en minuscules morceaux ; clore des éléments avant qu'ils soient terminés ; choisir d'abord les éléments faciles | Regarder la distribution des tailles d'éléments et le taux de réouverture ; compter les défauts échappés et les incidents liés aux éléments récents ; revoir la composition des types de travail terminés |
| Ancienneté d'un élément de travail | Déplacer un élément périmé vers « terminé » ou un nouvel état pour remettre l'horloge à zéro ; annuler discrètement de vieux éléments ; créer une copie neuve d'un vieil élément | Auditer les retours en arrière d'état et les éléments annulés ; rapporter les éléments annulés et leur âge ; chercher les doublons créés près de la limite d'âge |
| Temps de cycle | Démarrer l'horloge tard en ne déplaçant les éléments vers « en cours » que lorsque le travail est presque fini ; l'arrêter tôt en marquant les éléments terminés avant la revue ou la mise en production | Comparer l'heure de démarrage avec la première validation ou la première activité ; rapporter le temps entre « terminé » et la mise en production ; échantillonner les éléments terminés pour vérifier l'achèvement réel |
| Atteinte de la SLE | Fixer une SLE généreuse ; exclure les éléments difficiles comme « spéciaux » ; clore des éléments pour rester sous la limite | Garder la SLE à un percentile des données passées et la revoir chaque trimestre ; rapporter les éléments exclus et leur motif ; lire le 95e percentile et les plus anciens éléments ouverts |
| Part du temps bloqué | Ne jamais signaler les blocages, pour que la part paraisse basse ; tout signaler comme bloqué pour expliquer le retard | Comparer la part bloquée avec l'âge des éléments en cours ; revoir les motifs de blocage par catégorie ; échantillonner les éléments bloqués pour vérifier chaque motif |

Une lecture saine montre un WIP à la limite ou en dessous la plupart des jours, une ancienneté majoritairement sous le 85e percentile des temps de cycle passés et un débit qui varie dans une plage stable d'une semaine à l'autre. Les percentiles de temps de cycle sont stables ou en baisse, l'atteinte de la SLE se situe près de la probabilité choisie par l'équipe, et le temps bloqué a des causes nommées sur lesquelles quelqu'un travaille. Quand un chiffre paraît trop beau, demandez si l'horloge a bougé ou si la définition a changé avant de vous réjouir.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Mesures de flux (WIP, débit, ancienneté, temps de cycle) | Simples, indépendantes des outils, fondées sur des comptages et des dates ; soutiennent la prévision probabiliste | Demandent des définitions cohérentes et des horodatages propres ; ne disent rien de la valeur ni de la qualité |
| Mesures fondées sur l'estimation comme les points de récit | Incluent une vue de l'effort et de la complexité ; conviennent au travail planifié | Subjectives et propres à l'équipe ; ne peuvent pas être comparées entre équipes |
| Métriques de service fondées sur la moyenne comme le temps moyen de résolution | Faciles à calculer et à expliquer | Faussées par les valeurs aberrantes et l'asymétrie ; cachent la longue queue |
| Temps de cycle et SLE fondés sur les percentiles | Reflètent ce que vivent les clients ; soutiennent une promesse claire | Demandent assez d'historique ; plus difficiles à expliquer à des gens habitués aux moyennes |
| Une définition unique à l'échelle de l'organisation de « démarré » et « terminé » | Permet la consolidation et la comparaison | Convient mal à certaines équipes ; peut pousser les équipes vers des états artificiels |

Choisissez la mesure la plus simple qui sert la décision en cours. Les mesures de flux fonctionnent bien pour une équipe qui tire le travail et peut terminer des éléments en jours. Elles conviennent moins quand les éléments prennent des mois, quand un élément varie énormément en taille ou quand l'essentiel de la valeur réside dans la découverte et non dans la livraison.

## Questions à discuter avec votre équipe

**1. Quel état signifie « démarré » pour nous, et lequel signifie « terminé », et tout le monde est-il d'accord ?**
Affichez le tableau à l'écran et demandez à chaque personne de désigner le premier et le dernier état de l'horloge. Notez les désaccords, car ils sont la plus grande source de temps de cycle peu fiables. Regardez surtout les éléments en attente de revue, dans une file de mise en production ou aux mains d'un fournisseur. Convenez d'une définition écrite du flux de travail et d'une date d'entrée en vigueur.

**2. Combien de travail avons-nous en cours en ce moment, et que se passerait-il si nous cessions de démarrer de nouveaux éléments pendant une semaine ?**
Comptez les cartes, y compris le travail qui a calé. Demandez ce que l'équipe finirait et ce qui resterait coincé. L'animateur doit orienter la conversation vers les raisons de démarrer tôt, comme la peur de l'inactivité ou la pression des parties prenantes, et non vers le reproche. Proposez une première limite de WIP et une date pour la revoir.

**3. Quels éléments sont les plus anciens sur le tableau, et qu'est-ce qui arrête chacun d'eux ?**
Triez par âge et parlez des trois plus anciens. Pour chacun, nommez l'obstacle, la personne qui peut le lever et la prochaine action. Comparez les plus grands âges avec le 85e percentile des temps de cycle passés. Prenez l'habitude de poser cette question à chaque point, car l'ancienneté est la seule mesure qui puisse encore changer un résultat.

**4. À quoi ressemble notre distribution de temps de cycle, et quelle promesse pouvons-nous en tirer ?**
Montrez le nuage de points des éléments terminés sur les 8 à 12 dernières semaines. Lisez la médiane, le 85e et le 95e percentile. Discutez de la question de savoir si l'équipe est à l'aise pour énoncer une SLE au 85e percentile, et de ce que les valeurs aberrantes avaient en commun. L'animateur doit vérifier que le groupe comprend la différence entre la médiane et la queue.

**5. Comment les incidents et les demandes affectent-ils le travail planifié que nous tirons du backlog ?**
Étiquetez les éléments terminés par type et comparez les temps de cycle et le débit par type. Demandez à quelle fréquence un élément planifié a calé parce qu'un incident est arrivé. Décidez si une politique d'accélération ou une capacité réservée aiderait, et comment garder son usage visible (voir le sujet 2.9, Travail opérationnel et travail non planifié). Discutez de ce que l'équipe cesserait de faire si les interruptions doublaient.

**6. Lesquelles de ces mesures pourrions-nous détourner, et comment le remarquerions-nous ?**
Parcourez chaque mesure et demandez comment quelqu'un sous pression pourrait la faire paraître meilleure sans améliorer le flux. Associez chaque réponse à un garde-fou du tableau. L'animateur doit traiter cela comme un exercice de conception de l'instrument et non comme une accusation. Choisissez un garde-fou à ajouter ce trimestre, et nommez un responsable.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison utilisent les mesures de flux pour voir leur propre système. Elles tirent le plus de l'âge des éléments en cours et de la distribution du temps de cycle, qui leur disent sur quoi se concentrer et quoi promettre. Elles devraient éviter de faire du débit un objectif et éviter de comparer leurs chiffres à ceux d'autres équipes (voir le sujet 2.8, Métriques DORA, pour les mesures de niveau livraison qui surplombent le flux d'équipe).

### Équipes de service et d'exploitation

Les équipes de service traitent des arrivées qu'elles ne contrôlent pas. Les mesures de flux montrent comment les interruptions, les transmissions et l'attente d'autrui allongent le temps de finir. Elles profitent de vues séparées pour les incidents, les demandes et les changements planifiés, et d'un temps bloqué rapporté par motif. Elles devraient garder les horloges ITIL qu'exigent les contrats tout en utilisant les horloges de flux pour conduire l'équipe.

### Direction et gouvernance

Les dirigeants devraient demander la distribution et la tendance, non un chiffre unique, et lire les changements avec les changements de flux de travail consignés à côté. Ils peuvent utiliser l'atteinte de la SLE et les profils d'ancienneté pour voir tôt le risque. Ils devraient résister à la consolidation du débit entre équipes, car les définitions d'éléments diffèrent, et financer le nettoyage des modèles de statuts et des horodatages dont des données de flux fiables ont besoin.

### Clients et utilisateurs

Les clients ressentent le temps de cycle, et surtout sa queue. Un énoncé tel que « la plupart des demandes de ce type sont traitées en un nombre de jours indiqué » leur donne quelque chose autour de quoi s'organiser, et une note honnête quand l'équipe est hors de son attente bâtit la confiance. Ils n'ont pas besoin des comptages de WIP ni de débit, mais ils profitent de ce que ces mesures réduisent l'attente.

## En pratique : un exemple d'ITIL agile

Le service informatique d'un hôpital régional exploite une équipe combinée qui traite les demandes de service des utilisateurs finaux et un petit flux d'améliorations planifiées pour les systèmes cliniques. Tous les chiffres de cet exemple sont illustratifs.

L'équipe a un tableau avec les états Prêt, En cours, En attente d'autrui, Revue et Terminé. Le responsable remarque que le rapport mensuel montre 46 éléments terminés, comme le mois précédent, alors que le personnel clinique se plaint que les demandes prennent « une éternité ». Un examen de l'historique du gestionnaire de tickets montre que « démarré » avait été fixé lors du premier tri de la carte, de sorte que le temps de cycle incluait des jours passés dans une file.

L'équipe réécrit la définition du flux de travail : « démarré » est le premier passage dans En cours, « terminé » est le passage dans Terminé, et En attente d'autrui compte comme en cours, avec son propre temps bloqué. Avec les nouvelles horloges, le temps de cycle médian des 10 dernières semaines est de 4 jours, le 85e percentile de 11 jours et le 95e percentile de 24 jours. Le WIP moyen est de 19 éléments pour une équipe de 6. L'ancienneté des éléments de travail montre sept cartes de plus de 11 jours, dont cinq attendent un fournisseur extérieur.

L'équipe décide de trois choses. Elle fixe une SLE de « 85 pour cent des éléments se terminent en 11 jours ou moins ». Elle fixe une limite de WIP de 12 et convient de cesser de démarrer de nouveaux éléments planifiés quand la limite est atteinte. Elle ajoute aussi une revue hebdomadaire de dix minutes des cinq plus anciens éléments. Les éléments des fournisseurs sont remontés par la gestion des fournisseurs avec les dates depuis lesquelles ils attendent.

Six semaines plus tard, le 85e percentile du temps de cycle est de 8 jours et le WIP est en moyenne de 12. Le débit est de 44 éléments par semaine pendant plusieurs semaines, près du niveau antérieur. Puis l'équipe voit un possible risque de détournement : le temps de cycle médian tombe à 2 jours en une semaine, mais le nombre d'éléments terminés par semaine monte fortement et la part d'éléments rouverts dans la semaine grimpe. Un échantillon de cartes montre que de grosses demandes étaient fractionnées en plusieurs cartes d'une ligne pour gonfler le débit et raccourcir le temps de cycle. Les garde-fous l'ont attrapé : la composition des tailles d'éléments et le taux de réouverture. L'équipe convient d'une règle sur ce qui compte comme un élément, fusionne les cartes fractionnées dans les rapports et continue de publier la SLE et la liste d'ancienneté.

## Perspective sectorielle

**Startup.** Une petite équipe peut commencer avec un tableau physique ou numérique et un tableur de dates de début et de fin. Commencez par l'ancienneté et le WIP, car ils n'exigent aucun historique, et ajoutez les percentiles de temps de cycle après environ dix semaines de données. Gardez un seul tableau pour le travail planifié et les corrections urgentes, étiquetés par type, pour que les interruptions soient visibles.

**Petite entreprise.** Le travail arrive souvent par courriel ou par un centre d'assistance hébergé. Utilisez les dates de création, de démarrage et de résolution propres à l'outil, vérifiez que « démarré » signifie que quelqu'un a commencé à travailler et exportez régulièrement les données. Un simple coup d'œil hebdomadaire aux plus anciens éléments ouverts fait plus de bien qu'un tableau de bord élaboré.

**Grande entreprise.** De nombreuses équipes, outils et flux de travail font des définitions cohérentes le principal défi. Convenez d'un petit vocabulaire commun pour démarré et terminé, laissez les équipes y faire correspondre leurs états locaux et gardez les données de flux au niveau de l'équipe. Utilisez les mesures pour repérer les files systémiques, comme les étapes d'approbation partagées ou les environnements partagés, et non pour comparer les équipes.

**Gouvernement et secteur public.** Les délais légaux, les exigences d'audit et les règles de marchés façonnent les horloges. Gardez l'horloge légale séparée de l'horloge de flux de l'équipe, et documentez les deux. Les étapes contrôlées par des fournisseurs dominent souvent le temps de cycle ; consignez-les donc comme du temps bloqué et servez-vous des données dans les discussions contractuelles (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

## Dossier d'affaires : motivations, ROI et TCO

Le coût des mesures de flux est faible en outils et modéré en discipline. Une équipe a besoin d'un tableau aux changements d'état fiables, de quelques heures pour écrire la définition du flux de travail, d'une courte revue récurrente et de quelqu'un pour entretenir les graphiques. Si les horodatages viennent du gestionnaire de tickets ou de l'outil ITSM, la collecte est presque gratuite. Le coût le plus élevé est le temps passé à aligner les définitions et à changer les habitudes, comme cesser de démarrer du travail quand la limite est atteinte.

Le retour se voit dans la prévisibilité et dans moins de surprises. Une équipe qui peut énoncer une SLE à partir de ses propres données peut répondre à « quand sera-ce fini ? » sans gonfler les estimations, et peut voir tôt le travail qui cale. Décrivez le bénéfice par des mesures que vous pouvez observer vous-même : la part d'éléments plus anciens que le 85e percentile, la largeur de l'écart entre la médiane et le 95e percentile et le temps passé en réunions d'état avant et après. Aucune valeur de référence n'est proposée ici, car les chiffres publiés dépendent des définitions de flux de travail et d'éléments. Le coût total de possession est surtout du temps de personnes ; comptez-le donc, et comparez-le au coût du travail qui attend sans être vu.

## Antimodèles et pièges

- **Compter des éléments qui n'ont jamais démarré.** Les cartes de backlog gonflent le WIP et l'ancienneté et rendent le tableau illisible. Ne comptez que les éléments démarrés, et gardez le backlog à part (voir le sujet 2.6, Métriques du backlog et de son affinage).
- **Traiter une limite de WIP comme une cible à atteindre.** Une limite est un plafond qui expose les files. Vérifiez si la limite fait son travail, et abaissez-la quand l'équipe le supporte.
- **Ne rapporter que des moyennes.** Le temps de cycle moyen cache la longue queue que ressentent les clients. Rapportez la médiane et les 85e et 95e percentiles.
- **Suspendre l'horloge pendant l'attente.** Arrêter l'horloge quand un élément est bloqué améliore l'apparence du temps de cycle et cache le retard. Gardez l'horloge en marche et rapportez le temps bloqué séparément.
- **Comparer le débit entre équipes.** Les définitions et les tailles d'éléments diffèrent. Comparez chaque équipe à son propre historique.
- **Utiliser les mesures de flux pour juger des individus.** Les éléments terminés par personne invitent au détournement et ignorent le travail partagé. Gardez chaque mesure au niveau de l'équipe.
- **Changer le flux de travail sans le consigner.** Un changement de nom d'état ou de politique rompt la tendance en silence. Consignez la date et la raison, et marquez-les sur chaque graphique.
- **Mélanger incidents, demandes et travail planifié dans une même distribution.** Leurs temps de cycle diffèrent par nature. Étiquetez par type et lisez chaque distribution séparément.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | « Démarré » et « terminé » signifient des choses différentes pour des personnes différentes | Certaines équipes écrivent leurs états de flux de travail | Une définition écrite du flux de travail par équipe, avec des règles d'horloge pour le temps bloqué | Changements de définition consignés et marqués sur les graphiques ; horloges revues pour la dérive | Définitions alignées entre équipes et fournisseurs là où le travail franchit des frontières, et révisées quand elles cessent d'éclairer les décisions |
| Mesure du travail non terminé | État annoncé en réunion | Les cartes montrent l'âge ou le WIP pour certaines équipes | WIP compté chaque jour et âge affiché sur chaque carte, avec une limite écrite | Tranches d'âge tirées des percentiles historiques qui guident l'action quotidienne | Files et transmissions transversales suivies ensemble, avec l'âge partagé avec les fournisseurs |
| Mesure du travail terminé | Comptes de tickets clos par mois | Moyennes de temps de cycle rapportées par certaines équipes | Percentiles de temps de cycle et débit hebdomadaire issus d'une même source de données | Tendances revues au regard des changements consignés ; atteinte de la SLE suivie | Les prévisions tirées des données de flux éclairent la planification et les engagements de service entre équipes |
| Usage et garde-fous | Chiffres utilisés pour courir après les gens | Conscience informelle du détournement | Chaque mesure associée à un garde-fou et revue avec l'équipe | Les alertes de garde-fou mènent à un travail d'amélioration financé | Mesures et garde-fous révisés conjointement avec les clients et les fournisseurs |

## Liste de vérification

- [ ] La définition du flux de travail est écrite, avec les états « démarré » et « terminé » nommés.
- [ ] Un élément de travail est défini, avec une règle de fractionnement et de fusion des éléments.
- [ ] Le WIP est compté chaque jour à partir des données de l'outil, et une limite de WIP est écrite.
- [ ] Chaque carte en cours affiche son âge en jours.
- [ ] Le temps de cycle est rapporté sous forme de médiane, de 85e percentile et de 95e percentile sur une fenêtre indiquée.
- [ ] Le débit est rapporté sous forme d'un graphique de séquence hebdomadaire avec sa fenêtre.
- [ ] Une attente de niveau de service est énoncée à partir des données propres de l'équipe et revue chaque trimestre.
- [ ] Le temps bloqué est consigné avec début, fin et motif, et l'horloge de l'élément continue de courir.
- [ ] Les incidents, les demandes et le travail planifié sont étiquetés pour que chacun puisse être lu séparément.
- [ ] Chaque changement d'état ou de politique est consigné avec sa date et sa raison.
- [ ] Chaque mesure est associée à un garde-fou du tableau de détournement.
- [ ] Aucune mesure n'est utilisée pour classer des individus ni pour comparer des équipes.

## Prompts d'IA

**Vérifiez une définition de flux de travail à la recherche de problèmes d'horloge.**

```text
Voici le flux de travail de [team or service] : [list of states and
transitions, with a one-line meaning for each if known]. Nous voulons calculer
le travail en cours, le débit, l'ancienneté des éléments de travail et le temps
de cycle avec les définitions de la littérature sur le flux. Identifiez quel
état devrait démarrer l'horloge et lequel devrait l'arrêter, tout état où
l'horloge pourrait être suspendue ou mal lue, et tout état que deux équipes
pourraient interpréter différemment. Ne devinez pas comment notre outil est
configuré. Énumérez vos hypothèses et les questions auxquelles je dois répondre
pour fixer la définition.
```

**Analysez un export d'éléments de travail.**

```text
J'ai un export de [number] éléments de travail terminés issus de [tool] avec ces
champs : [field names, for example id, type, started date, finished date,
blocked periods]. Expliquez comment calculer les percentiles de temps de cycle,
le débit hebdomadaire et le travail en cours quotidien à partir de ces champs,
et comment traiter les dates manquantes, les éléments rouverts et les éléments
de type [types]. Fournissez les étapes et un plan de script court en
[language], et ne supposez aucune valeur. Énumérez vos hypothèses et les
contrôles de qualité des données que je devrais exécuter d'abord.
```

**Rédigez un énoncé d'attente de niveau de service.**

```text
Notre équipe traite [type of work] et dispose de données de temps de cycle
sur les dernières [number] semaines, avec une médiane de [value], un 85e
percentile de [value] et un 95e percentile de [value]. Rédigez une attente de
niveau de service d'une phrase et une courte note pour l'expliquer à
[audience, for example customers or the service owner], en y incluant ce
qu'elle ne promet pas. N'inventez ni valeurs cibles ni références. Énumérez vos
hypothèses et les réserves sur la taille de l'échantillon.
```

**Examinez les risques de détournement de nos mesures de flux.**

```text
Nous suivons [list of flow measures] pour [team or service]. L'équipe subit une
pression pour [pressure, for example reduce ticket age]. Pour chaque mesure,
énumérez les façons réalistes de la faire paraître meilleure sans améliorer le
flux, le signal dans nos données qui révélerait chacune et un garde-fou associé.
N'inventez pas de statistiques et ne citez pas d'études. Énumérez vos
hypothèses et les données dont j'aurais besoin pour tester chaque risque.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une mesure de flux et le garde-fou qui devrait se trouver à côté.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent le gabarit, le tableau des définitions et le tableau de détournement en cohérence.

## Points clés à retenir

- Quatre mesures décrivent le flux : le travail en cours, le débit, l'ancienneté des éléments de travail et le temps de cycle, chacune avec une définition courte et une horloge qui doit être écrite.
- L'ancienneté des éléments de travail et le WIP sont les mesures avancées ; le débit et le temps de cycle confirment ce qui s'est déjà passé.
- Rapportez le temps de cycle et l'ancienneté sous forme de percentiles, et énoncez une attente de niveau de service à partir de vos propres données.
- Les mêmes mesures conviennent au travail de projet et au travail de service, à condition d'étiqueter les types de travail et de nommer chaque horloge.
- Toute mesure peut être détournée en déplaçant l'horloge, en fractionnant les éléments ou en cachant le travail ; associez donc chacune à un garde-fou.
- Gardez les mesures au niveau de l'équipe et servez-vous-en pour améliorer le flux de travail, jamais pour classer des personnes.

## Références et lectures complémentaires

1. Kanban Guide, kanbanguides.org, current version as of October 2026, https://kanbanguides.org/english/
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
7. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
8. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
9. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
10. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
13. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
