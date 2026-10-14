# Métriques du backlog et de son affinage

**Un backlog est une file de promesses ; mesurez donc combien de promesses attendent, depuis combien de temps, et quelle part de la prochaine période de travail est réellement prête, et traitez un tas croissant de vieux éléments comme une décision que vous n'avez pas encore prise.**

## Résumé et motivation

Toute équipe qui construit ou exploite un service tient une liste de travail qu'elle a accepté d'envisager. Dans la pratique agile, cette liste est le [backlog de produit](https://en.wikipedia.org/wiki/Product_backlog), un ensemble ordonné d'éléments qui décrit ce qui pourrait être fait pour améliorer le produit. Sur un tableau de flux, l'équivalent est l'ensemble des éléments qui attendent à gauche des colonnes de démarrage. Dans la gestion des services informatiques (ITSM), telle que décrite par [ITIL](https://en.wikipedia.org/wiki/ITIL), les équivalents sont les incidents, les demandes de service, les problèmes et les changements ouverts qui attendent dans une file. Tous sont des backlogs. Ils diffèrent par qui les remplit, la vitesse à laquelle les éléments doivent partir et ce que signifie pour un élément d'attendre.

La plupart des données viennent d'un [système de suivi de tickets](https://en.wikipedia.org/wiki/Issue_tracking_system) ou d'un outil ITSM. Les métriques de backlog répondent à une question simple : la quantité de travail promis est-elle proportionnée à la capacité de le faire, et le travail promis vaut-il encore la peine d'être fait ? Un backlog qui grandit sans limite ne décrit pas un plan. Il décrit une liste de souhaits, et chacun de ses lecteurs, du responsable produit au client qui a soulevé un élément, se fera sa propre idée de quand il sera traité. La réponse honnête est souvent « jamais », et le coût de ne pas le dire se paie en confiance, en temps passé à relire de vieux éléments et en décisions prises sur des informations périmées.

L'affinage est l'activité qui garde un backlog utile. Dans la pratique agile, l'affinage du backlog de produit est le travail continu d'ajout de détail, d'estimations et d'ordre aux éléments pour qu'ils soient prêts à être démarrés. Les équipes qui tirent le travail à mesure que la capacité se libère appellent souvent la même activité réapprovisionnement ou toilettage du backlog. En ITSM, elle apparaît sous forme de tri, de catégorisation et de toilettage d'une liste d'erreurs connues ou de problèmes. Les métriques de ce sujet mesurent la taille et l'âge du backlog, la quantité de travail prêt et la manière dont l'affinage maintient devant l'équipe une fenêtre de travail prêt.

Quatre termes reviennent. Un **élément** est une entrée unique d'un backlog, comme un [récit utilisateur](https://en.wikipedia.org/wiki/User_story), un défaut, une demande de service ou un enregistrement de problème. L'**âge de l'élément** est le temps écoulé depuis que l'élément est entré dans le backlog, ce qui se distingue de l'ancienneté de l'élément de travail dans la mesure du flux, où l'horloge démarre quand le travail commence (voir le sujet 2.1, Mesures de flux). **Prêt** signifie qu'un élément respecte la définition de prêt écrite d'une équipe, de sorte que l'équipe pourrait le démarrer et compter le terminer dans une fenêtre de niveau de service. L'**affinage** est le travail qui consiste à rendre les éléments prêts et à retirer ceux qui ne seront jamais faits.

Les backlogs de produit et de service se comportent différemment, et les mélanger est l'erreur la plus courante dans ce domaine. Un backlog de produit est un endroit où les éléments sont délibérément retenus jusqu'à ce que le responsable produit décide de leur ordre. Attendre y est un état normal, et un vieil élément est une raison de se demander s'il compte encore. Un backlog de service d'incidents et de demandes est une file assortie d'une promesse : le client attend une réponse dans un délai. Y attendre est un coût pour le client dès la première minute. Un backlog de produit doit être élagué ; un backlog de service doit être vidé. Mettez les deux sur un même graphique et le graphique induira en erreur.

L'optique agile traite le backlog comme un artefact vivant détenu par un responsable produit, gardé assez court pour être compris et ordonné par valeur. L'optique ITIL traite les enregistrements ouverts comme du travail en cours au regard d'un niveau de service convenu, détenu par une pratique. Les deux visions partagent un fait de la théorie des files d'attente : une file qui reçoit des éléments plus vite qu'elle n'en libère grandira, et le temps qu'un élément attend croît avec la file (voir le sujet 2.3, Travail en cours et théorie des files d'attente). La [loi de Little](https://en.wikipedia.org/wiki/Little%27s_law) relie la taille de la file, le rythme auquel les éléments partent et le temps moyen qu'un élément passe dans le système, et c'est la raison pour laquelle la taille et l'âge du backlog sont deux vues de la même chose.

Une dernière distinction garde le sujet honnête. Un backlog n'est pas une mesure de productivité ni du degré d'occupation d'une équipe. Un gros backlog peut signifier un produit populaire, une liste mal élaguée ou une équipe sous-dotée, et le chiffre seul ne peut pas dire lequel.

## Principes clés

- **Mesurer l'âge autant que la taille.** La taille dit combien attendent ; l'âge dit depuis combien de temps, et les plus vieux éléments montrent où l'on évite des décisions.
- **Garder séparés les backlogs de produit et de service.** Une idée retenue et un client qui attend sont deux choses différentes, et chacune demande sa propre lecture.
- **Viser du travail prêt, non une longue liste.** Quelques semaines de travail prêt et bien ordonné valent plus que mille éléments que personne n'a regardés.
- **L'élagage est une fonctionnalité.** Retirer un élément que vous ne ferez jamais est un travail honnête, et un taux d'abandon qui n'est jamais supérieur à zéro est un signal d'alerte.
- **Utiliser des distributions.** Rapportez la médiane et le 85e percentile de l'âge des éléments et montrez l'élément le plus ancien, car les moyennes cachent la queue.
- **Décrire l'équipe et le système.** Les métriques de backlog montrent comment le travail parvient à une équipe et comment il est traité, jamais comment un individu a performé.
- **Relier chaque chiffre à une décision.** Si un graphique de backlog ne changerait pas ce que vous faites ensuite, retirez-le.

## Définitions des métriques

Les métriques ci-dessous s'appliquent à un seul backlog à la fois. Choisissez d'abord le backlog (un backlog de produit, une file d'incidents, une file de demandes de service, une liste de problèmes) et rapportez chaque métrique par backlog. Les percentiles emploient la méthode du [percentile](https://en.wikipedia.org/wiki/Percentile) énoncée au sujet 1.6, Culture statistique pour les métriques de service.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taille du backlog | Nombre d'éléments ouverts dans un backlog nommé à un moment donné | Nombre d'éléments au statut ouvert ou prêt à la date de l'instantané ; exclut les éléments en cours et les éléments clos | éléments | Instantané du gestionnaire de tickets ou de l'outil ITSM | Gestion des incidents ; gestion des demandes de service ; gestion des problèmes | Backlog de produit ; file d'entrée | Hebdomadaire |
| Âge du backlog | Distribution du temps d'attente des éléments ouverts | Pour chaque élément ouvert, date de l'instantané moins date d'entrée dans le backlog ; rapportez la médiane, le 85e percentile et l'élément le plus ancien | jours | Historique de création et de statut du gestionnaire de tickets ou de l'outil ITSM | Gestion des incidents ; gestion des problèmes ; amélioration continue | Santé du backlog ; revue des éléments anciens | Hebdomadaire |
| Profondeur de travail prêt | Jusqu'où l'équipe a du travail prêt devant elle | Éléments respectant la définition de prêt / éléments terminés par semaine en moyenne sur les six dernières périodes | semaines | Indicateur « prêt » du gestionnaire de tickets et historique du débit | Analyse métier ; gestion des demandes de service | Définition de prêt ; affinage | Par période de planification |
| Couverture de l'affinage | Part de la fenêtre à court terme qui est prête | Éléments des deux quinzaines suivantes de travail attendu (ou des N premiers par ordre) respectant la définition de prêt / éléments de cette fenêtre | pourcentage | Ordre, indicateur « prêt » et travail planifié du gestionnaire de tickets | Analyse métier ; maîtrise des changements (pour le changement planifié) | Affinage du backlog de produit | Par période de planification |
| Ratio entrées-sorties du backlog | Si les éléments arrivent plus vite qu'ils ne partent | Éléments ajoutés dans la période / éléments retirés du backlog par achèvement ou abandon dans la même période ; un ratio supérieur à 1 signifie une croissance | ratio | Événements de création et de résolution du gestionnaire de tickets ou de l'outil ITSM | Gestion des incidents ; gestion des demandes de service ; gestion de la capacité et de la performance | Taux d'arrivée et de départ | Hebdomadaire |
| Taux d'abandon du backlog | Part des éléments sortants retirés sans livraison | Éléments clos comme abandonnés, doublons ou obsolètes / tous les éléments quittant le backlog dans la période ; exclut les éléments clos comme terminés | pourcentage | Champ de résolution du gestionnaire de tickets | Amélioration continue ; gestion des problèmes (revue des erreurs connues) | Élagage du backlog ; ordonnancement par le responsable produit | Mensuelle |
| Backlog de service hors cible | Part des éléments de service ouverts plus anciens que leur fenêtre de réponse ou de résolution convenue | Éléments ouverts dont le temps écoulé dépasse la cible de service / tous les éléments ouverts de la file ; l'horloge court à partir de l'enregistrement et ne se suspend que dans les états que la définition écrite autorise | pourcentage | Outil ITSM avec horloge de niveau de service | Gestion des niveaux de service ; gestion des incidents ; gestion des demandes de service | Voie accélérée ; attente de niveau de service | Quotidienne ou hebdomadaire |

Trois horloges demandent à être énoncées clairement. L'âge du backlog démarre quand l'élément est créé dans le backlog et s'arrête quand il part par achèvement ou abandon ; un élément rouvert démarre donc un nouvel âge. La profondeur de travail prêt emploie le débit des seuls éléments terminés, jamais la vélocité planifiée, puisque la vélocité planifiée est une prévision. Le backlog de service hors cible emploie l'horloge de niveau de service, qui peut différer de l'âge du backlog à cause des suspensions autorisées (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

## Recommandations

### Organiser le backlog pour qu'il puisse être mesuré

**1. Nommez chaque backlog et son responsable.** Chaque backlog concerné a un responsable, un but et une liste de types d'éléments. Un backlog de produit appartient à un responsable produit ; une file d'incidents appartient au centre de services ou au groupe de résolution. Sans responsable nommé, personne ne décide quand un vieil élément doit partir.

**2. Séparez les éléments retenus des promesses en file.** Marquez chaque élément comme une idée que l'équipe retient pour l'ordonner ou comme un engagement sur lequel quelqu'un attend. Rapportez la taille et l'âge du backlog séparément pour chacun. Une demande de support située dans un backlog de produit est une promesse en file au mauvais endroit, et elle mérite une horloge de service.

**3. Écrivez la définition de prêt, et gardez-la courte.** Une définition de prêt énumère les quelques choses dont une équipe a besoin avant de démarrer : le résultat recherché, une taille approximative, les conditions d'acceptation et toute dépendance. Gardez-la à une poignée de lignes et révisez-la quand elle cesse de prédire un travail fluide. Une longue liste de contrôle transforme l'affinage en paperasse et invite à cocher des cases.

**4. Consignez la date d'entrée et le motif de sortie.** L'âge et le taux d'abandon dépendent de deux champs : la date d'entrée d'un élément et la raison de sa sortie. Rendez les deux obligatoires dans l'outil, et ajoutez une liste contrôlée de motifs de sortie comme terminé, doublon, obsolète et abandonné. Les dates manquantes sont la cause la plus courante d'un âge de backlog inutilisable (voir le sujet 1.5, Sources de données et instrumentation).

### Lire ensemble la taille et l'âge

**5. Rapportez l'âge du backlog comme une distribution.** Montrez la médiane, le 85e percentile et l'élément le plus ancien, ainsi qu'un histogramme par tranche d'âge comme moins de 30 jours, 30 à 90, 90 à 180 et plus de 180. Un âge moyen stable peut cacher un tas croissant d'éléments antiques parce que les nouveaux éléments tirent la moyenne vers le bas. La vue de l'élément le plus ancien est la plus difficile à cacher.

**6. Servez-vous du ratio entrées-sorties pour voir tôt la croissance.** Un ratio durablement supérieur à 1 signifie que le backlog grandira, quelle que soit sa taille actuelle. Tracez-le sous forme d'un chiffre glissant sur quatre semaines pour lisser les congés et les semaines de version. Associez-le au débit pour que l'équipe voie si la croissance vient d'une demande en hausse ou d'une production en baisse (voir le sujet 2.1, Mesures de flux).

**7. Convertissez la taille en temps grâce au débit.** Divisez la taille du backlog par la moyenne d'éléments terminés par période pour obtenir un nombre approximatif de périodes de travail en attente, application directe de la loi de Little. Dites clairement qu'il s'agit d'une moyenne et non d'une promesse, et montrez la fourchette avec un débit plus bas et un débit plus haut des périodes récentes. Un backlog de produit de cent éléments qui équivaut à un an de travail est une conversation sur le périmètre, non un calendrier.

### Maintenir l'affinage en flux

**8. Visez une fenêtre de travail prêt, non un backlog entièrement prêt.** Affinez assez pour la ou les trois prochaines semaines de travail et pas plus. Le détail ajouté à un élément qui ne sera pas démarré avant six mois se périme généralement ; mesurez donc la profondeur de travail prêt et laissez-la flotter dans une bande cible, comme une à trois semaines de travail, que l'équipe choisit et revoit. Une profondeur bien au-dessus de la bande est du gaspillage ; une profondeur inférieure à une semaine de travail est un risque de planification à vide ou bâclée.

**9. Mesurez la couverture de l'affinage sur les éléments sur le point d'être démarrés.** La couverture de l'affinage ne regarde que le haut de l'ordre. Elle répond à la question que posera la réunion de planification : si nous démarrions maintenant, les éléments suivants seraient-ils prêts ? Rapportez-la juste avant la planification, quand un manque peut encore être corrigé, plutôt qu'après.

**10. Faites de l'affinage une activité régulière et courte.** Les recommandations agiles, dont le Scrum Guide, décrivent l'affinage comme une activité continue et en laissent la forme à l'équipe. Beaucoup d'équipes trouvent qu'une séance courte et fréquente marche mieux qu'une longue réunion.

### Élaguer et revoir

**11. Élaguez selon un calendrier et rapportez le taux d'abandon.** Passez en revue chaque mois les plus vieux éléments et demandez pour chacun : le ferons-nous dans les six prochains mois, et sinon, pourquoi le garder ? Clore un élément avec un motif déclaré n'est pas un échec. Une équipe qui n'abandonne jamais fait probablement de la rétention, et celle qui abandonne la plus grande partie de ce qu'elle reçoit accepte probablement du travail qu'elle aurait dû décliner à la porte.

**12. Traitez les backlogs de service en les vidant, non en les élaguant.** Pour les files d'incidents et de demandes, la première question est de savoir si les éléments sont dans leur fenêtre de service. Suivez la part hors cible et l'élément ouvert le plus ancien, et gardez la voie accélérée pour les éléments qui ne peuvent pas attendre. Les listes de problèmes et d'erreurs connues se situent entre les deux mondes : elles sont retenues jusqu'à ce qu'un correctif soit financé ; revoyez-les donc comme un backlog de produit, avec une date de revue déclarée pour chaque entrée (voir le sujet 4.6, Dette technique et erreurs connues).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Taille du backlog | Clore des éléments en bloc comme obsolètes, fractionner des éléments pour paraître occupé, ou cacher du travail dans des listes annexes et des tableurs | Taux d'abandon du backlog avec motifs de sortie ; comparaison périodique de l'outil avec la liste réelle des demandes ; retours des clients sur les éléments abandonnés |
| Âge du backlog | Réinitialiser la date d'entrée en clonant ou en recréant de vieux éléments ; déplacer des éléments entre backlogs ; rouvrir au lieu de recréer pour changer l'horloge | Audit des éléments clonés et déplacés ; revue des plus vieux éléments ; âge mesuré depuis la première création à travers les enregistrements liés |
| Profondeur de travail prêt | Marquer des éléments prêts sans les vérifier ; gonfler la profondeur en écrivant des éléments détaillés pour du travail de faible valeur | Échantillon d'éléments prêts lus au regard de la définition ; taux de reprise ou de retour à l'affinage quand le travail démarre |
| Couverture de l'affinage | Cocher l'indicateur « prêt » pour atteindre le chiffre ; rétrécir la fenêtre pour que moins d'éléments comptent | Compte des éléments renvoyés après la planification ; réussite des objectifs de livraison et changement de périmètre en cours de période (voir le sujet 2.5, Métriques de prévision et de planification de la livraison) |
| Ratio entrées-sorties du backlog | Clore rapidement les éléments faciles pour pousser les sorties, ou refuser les nouveaux éléments à la porte pour contenir les entrées | Âge des plus vieux éléments ; taux d'abandon ; part des demandes rejetées sans motif ; besoins non satisfaits déclarés par les clients |
| Taux d'abandon du backlog | Abandonner des éléments que les utilisateurs veulent encore, pour réduire la taille ; ou éviter les abandons pour que le chiffre paraisse doux | Revue d'un échantillon d'éléments abandonnés avec le demandeur ; taux de réouverture et de recréation des éléments abandonnés |
| Backlog de service hors cible | Suspendre l'horloge avec un état d'attente du client, déclasser la priorité ou clore et rouvrir pour réinitialiser la fenêtre | Part du temps passée dans les états de suspension ; taux de réouverture (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques) ; satisfaction des utilisateurs sur les tickets clos |

Une lecture saine montre un backlog dont la taille est stable ou diminue lentement, dont les plus vieux éléments sont peu nombreux et ont chacun un responsable et un motif déclaré, et dont la fenêtre à court terme est en grande partie prête. Le ratio entrées-sorties tourne autour de 1, le taux d'abandon n'est ni nul ni dominant, et la couverture de l'affinage monte sans que le travail planifié devienne plus fragile. Quand les chiffres paraissent bons mais que les clients disent toujours que rien n'arrive à leurs demandes, croyez les clients et auditez les données.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Petit backlog de produit élagué sans ménagement | Facile à comprendre et à garder ordonné ; honnête sur la capacité | Risque d'abandonner des idées qui auraient compté plus tard ; les demandeurs peuvent se sentir ignorés |
| Gros backlog conservé | Préserve chaque idée et chaque demande ; historique utile | Coûteux à lire ; les éléments périmés induisent la planification en erreur et cachent les vraies priorités |
| Fenêtre prête profonde (de nombreuses semaines affinées) | Planification fluide ; moins de surprises au démarrage du travail | Le détail affiné se périme ; effort dépensé sur un travail qui peut ne jamais démarrer |
| Fenêtre prête peu profonde (environ une semaine) | Peu de détail gaspillé ; reste flexible | La planification peut caler quand quelques éléments ne sont pas prêts ; moins de délai pour repérer les dépendances |
| Définition de prêt stricte | Moins de démarrages flous ; travail prévisible | Peut devenir une porte qui ralentit le flux et encourage à cocher des cases |
| Définition de prêt légère | Rapide ; fait confiance à l'équipe | Plus de découverte pendant le travail ; plus de changements en cours de période |

La réponse pratique est de garder le backlog assez petit pour être lu d'une traite, de maintenir une fenêtre prête d'environ une à trois semaines de travail et de laisser la définition de prêt assez courte pour que les gens s'en souviennent. Les files de service demandent la posture inverse : être petit n'est pas un but, finir dans la fenêtre convenue en est un. Choisissez dans chaque ligne la cellule qui convient à votre contexte et écrivez la raison.

## Questions à discuter avec votre équipe

**1. Si nous cessions d'ajouter des éléments aujourd'hui, combien de temps faudrait-il pour vider le backlog à notre débit récent, et ce chiffre paraît-il crédible ?**
Commencez par diviser la taille du backlog par le nombre typique d'éléments terminés par période et montrez la fourchette avec les meilleures et les pires périodes récentes. Demandez si l'équipe croit le résultat, et où le temps passerait réellement. Si le nombre dépasse un an pour un backlog de produit, demandez quels éléments pourraient être retirés sans que personne le remarque.

**2. Quels sont les cinq plus vieux éléments, et qui a décidé qu'ils devaient encore être là ?**
Lisez à voix haute les cinq plus vieux éléments avec leurs dates d'entrée. Pour chacun, demandez un responsable nommé et une raison pour laquelle il reste, comme l'attente d'une dépendance, un report délibéré ou de la négligence. Convenez d'une action pour chacun : le planifier, l'abandonner ou écrire pourquoi il reste et quand le revoir.

**3. Que veut dire « prêt » ici, et nos récentes surprises sont-elles venues d'éléments qui ne l'étaient pas ?**
Demandez à chaque personne d'écrire la définition de prêt avec ses propres mots, puis comparez. Les différences sont le premier constat. Revenez sur les éléments qui ont causé des questions ou des reprises en cours de période et demandez ce qui les aurait rendus prêts. L'animateur doit résister à l'ajout d'un point de liste pour chaque surprise et choisir plutôt les un ou deux qui auraient évité le plus de peine.

**4. Lesquels de nos backlogs contiennent des idées, et lesquels contiennent des promesses faites à quelqu'un ?**
Listez chaque backlog et classez ses éléments dans les deux sortes. Les demandes de support, les incidents et les éléments clients engagés sont des promesses et demandent une horloge de service ; les idées et les évolutions sont retenues pour l'ordonnancement. Discutez de l'endroit où les deux sont mêlés et de ce que cela fait au graphique d'âge. Le résultat peut être aussi simple qu'une étiquette et un filtre qui permettent de rapporter chacun séparément.

**5. Quand avons-nous retiré des éléments à dessein pour la dernière fois, et comment les demandeurs ont-ils réagi ?**
L'élagage paraît souvent risqué ; regardez donc les preuves. Vérifiez le taux d'abandon et échantillonnez quelques éléments abandonnés. Demandez si le demandeur a été prévenu, et si quelqu'un a réclamé un élément. L'animateur doit aider le groupe à convenir d'un message simple pour les demandeurs (« nous ne prévoyons pas de faire cela ; voici pourquoi ; soulevez-le à nouveau si les circonstances changent ») afin que l'élagage devienne routinier et respectueux.

**6. Si nous voulions que nos graphiques de backlog paraissent meilleurs sans aider personne, que ferions-nous ?**
Menez la revue de détournement du sujet 1.2 sur chaque métrique de backlog. Les réponses probables incluent clore de vieux éléments en bloc, cloner des éléments pour réinitialiser l'âge, marquer des éléments prêts trop tôt et rétrécir la fenêtre que compte la couverture. Pour chaque réponse, vérifiez si le garde-fou du tableau ci-dessus l'attraperait. Notez celles qui passeraient entre les mailles et choisissez une nouvelle vérification à essayer le trimestre prochain.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison utilisent les métriques de backlog pour garder une planification sereine. La profondeur de travail prêt et la couverture de l'affinage disent à l'équipe si la prochaine séance de planification sera fluide, et l'âge du backlog montre quelles promesses pourrissent discrètement. Une bonne habitude est de revoir l'âge, le ratio entrées-sorties et la profondeur prête pendant quelques minutes à chaque séance d'affinage, puis d'agir sur une chose. Les équipes devraient publier un petit ensemble stable vers l'extérieur et garder pour elles les tranches d'âge détaillées (voir le sujet 2.5, Métriques de prévision et de planification de la livraison).

### Équipes de service et d'exploitation

Les équipes d'exploitation gèrent des files à horloges. Leur lecture centrale est la part d'éléments ouverts hors cible avec l'élément ouvert le plus ancien, ventilés par priorité et par état de suspension. Les listes de problèmes et d'erreurs connues ont besoin d'une date de revue sur chaque entrée pour que les éléments retenus ne deviennent pas permanents. Les équipes devraient aussi surveiller le ratio entrées-sorties de la file d'incidents, car un ratio supérieur à 1 pendant plusieurs semaines est un signe précoce de sous-effectif ou d'une cause récurrente (voir le sujet 3.2, Volume et priorité des incidents).

### Direction et gouvernance

Les dirigeants voient un backlog comme un énoncé d'intention. Un très gros backlog leur dit que l'organisation promet plus qu'elle ne peut livrer, et un backlog qui se réduit rapidement peut signifier un élagage ou une demande réduite. Demandez quelle décision le chiffre éclaire. Financez du temps pour l'affinage et l'élagage, évitez les objectifs sur la taille brute du backlog et demandez la distribution des âges et les motifs d'abandon quand un chiffre de taille est présenté (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

### Clients et utilisateurs

Les clients vivent le backlog comme du silence. Un élément soulevé il y a six mois sans réponse en dit plus que n'importe quel graphique. Les utilisateurs apprécient qu'on leur dise la vérité : c'est planifié, ce n'est pas planifié et voici pourquoi, ou c'est en attente d'une dépendance. Donnez aux demandeurs un moyen de voir l'état de leurs éléments, et traitez les éléments abandonnés comme une tâche de communication, non de nettoyage de données (voir le sujet 3.5, Métriques de traitement des demandes de service).

## En pratique : un exemple d'ITIL agile

Un assureur régional de taille moyenne exploite une application interne de gestion des sinistres avec une équipe produit et un centre de services distinct. Les chiffres de cet exemple sont illustratifs.

Le backlog de l'équipe produit contient 412 éléments. L'âge médian est de 138 jours, le 85e percentile de 410 jours et l'élément le plus ancien a 29 mois. L'équipe termine environ 14 éléments par quinzaine, de sorte que le backlog représente à peu près 29 quinzaines de travail au débit récent. La couverture de l'affinage des deux quinzaines suivantes est de 55 pour cent, et la planification déborde souvent parce que l'équipe découvre des détails manquants. Le centre de services montre un autre tableau : 63 demandes ouvertes, dont 9 pour cent sont hors cible, et un ratio entrées-sorties proche de 1.

Un responsable produit demande un chiffre plus petit et propose un objectif de moins de 200 éléments d'ici la fin du trimestre. L'équipe ne veut pas en faire un objectif en soi. Elle mène plutôt une revue. Elle étiquette les éléments comme idées retenues ou travail promis et constate que 38 des 412 sont des demandes de support dont on avait dit aux clients qu'elles seraient traitées. Elle les déplace vers la file de service avec une horloge de service. Elle lit les 40 plus vieux éléments et constate que 22 sont obsolètes ou en double. Elle les clôt avec des motifs de sortie et prévient les demandeurs. Elle fixe une bande prête d'une à deux quinzaines et consacre une courte séance hebdomadaire à n'affiner que le haut de l'ordre.

Sur trois quinzaines, la taille du backlog tombe à 301 et le taux d'abandon du mois est de 31 pour cent, ce qui est élevé à dessein et signalé dans la revue. La couverture de l'affinage monte à 88 pour cent. Un coup d'œil aux données révèle un risque de détournement : la taille du backlog a baissé plus vite que prévu parce que deux membres de l'équipe ont cloné une poignée de vieux éléments en éléments neufs pour éviter la liste des anciens. L'équipe l'attrape quand le graphique du plus ancien élément ne correspond plus à l'échantillon des abandons. Elle convient de mesurer l'âge depuis la première création à travers les enregistrements liés et de revoir les clones à chaque séance d'élagage. La décision consignée pour la direction est d'abandonner l'objectif de taille et de rapporter plutôt chaque trimestre la distribution des âges, la fenêtre prête et les motifs d'abandon.

## Perspective sectorielle

**Startup.** Le backlog est souvent une liste unique dans la tête du fondateur ou un simple tableau. Suivez seulement l'âge des plus vieux éléments et si le prochain travail est prêt. Élaguez fort et souvent, car la bonne réponse pour une idée vieille de trois mois est souvent de l'oublier.

**Petite entreprise.** Le travail de produit et de service partage généralement une équipe ; le backlog mêle donc des idées retenues et des promesses faites aux clients. Séparez-les tôt avec une étiquette. Une liste unique lue chaque semaine en une courte réunion vaut mieux que des métriques élaborées. Surveillez d'abord l'âge des éléments destinés aux clients, car une demande oubliée peut coûter une relation.

**Grande entreprise.** De nombreuses équipes et de nombreuses files multiplient les façons de mal lire un backlog. Définissez les métriques une seule fois, avec les horloges et les motifs de sortie, et évitez de consolider la taille des backlogs de produit en un seul chiffre de portefeuille. Comparez une équipe à son propre historique, jamais à une autre équipe aux travaux différents (voir le sujet 2.4, Métriques de flux de valeur). Les listes de problèmes et d'erreurs connues méritent leur propre rythme de revue.

**Gouvernement et secteur public.** Les engagements envers les citoyens, les délais de réponse légaux et les pistes d'audit façonnent les files de service. Traitez les horloges légales comme des données d'entrée fixes et rapportez la part hors cible avec les définitions employées. Les backlogs de produit peuvent être contraints par les cycles de financement et les marchés, de sorte que la fenêtre prête peut devoir être plus longue que dans une équipe commerciale. Gardez les motifs d'abandon visibles, car la responsabilité publique rend risqué l'abandon silencieux.

## Dossier d'affaires : motivations, ROI et TCO

Le coût de ces métriques est modeste. La plupart des données se trouvent déjà dans le gestionnaire de tickets ou l'outil ITSM. Les coûts sont une date d'entrée et un motif de sortie obligatoires, une courte séance d'élagage chaque mois, quelques minutes en affinage pour regarder les graphiques d'âge et de prêt, et un peu d'effort pour séparer les backlogs de produit et de service. Un tableur ou les rapports intégrés de l'outil suffisent pour commencer, et aucun nouveau produit n'a besoin d'être acheté.

Le retour vient du gaspillage évité et de promesses plus claires. Les équipes qui gardent une fenêtre prête passent moins de temps de planification à redécouvrir ce qu'un élément veut dire, et celles qui élaguent cessent de relire des éléments qui ne seront jamais faits. Les clients reçoivent plus tôt des réponses honnêtes, ce qui réduit les contacts répétés et les escalades. Décrivez le bénéfice par des schémas que l'équipe peut vérifier elle-même : des séances de planification plus courtes, moins d'éléments renvoyés à l'affinage après le début du travail, moins de relances sur de vieilles demandes et moins de surprises quand la direction demande ce qu'il y a dans le tuyau. Ce sujet n'offre aucun pourcentage, puisqu'aucun ne peut être donné sans source. Mesurez votre propre ligne de base pendant un trimestre et comparez.

## Antimodèles et pièges

- **Traiter la taille du backlog comme un score de productivité ou de performance.** La taille dépend de la demande, du périmètre et des habitudes d'élagage. Rapportez la taille avec l'âge et les motifs d'abandon, et ne comparez jamais les équipes sur elle.
- **Mélanger idées retenues et promesses aux clients dans une même liste.** Le graphique d'âge se lit alors comme de la négligence et l'horloge de service manque. Séparez-les avec une étiquette et rapportez chacun séparément.
- **Tout affiner.** Les éléments détaillés qui ne démarreront pas avant des mois se périment. Gardez une fenêtre prête et affinez juste avant le besoin.
- **Ne jamais abandonner.** Une liste toujours plus longue rend faux tout énoncé sur le périmètre. Élaguez selon un calendrier et consignez chaque fois le motif.
- **Réinitialiser l'âge en clonant ou en déplaçant des éléments.** Cela flatte le graphique et perd l'historique. Mesurez l'âge depuis la première création à travers les enregistrements liés et auditez les clones.
- **Une définition de prêt employée comme porte.** Si elle bloque du travail que l'équipe pourrait démarrer sans danger, elle ralentit le flux. Gardez-la courte et laissez l'équipe passer outre avec un motif déclaré.
- **Des objectifs sur la taille brute.** Un objectif de moins de N éléments invite à la clôture en bloc. Visez l'âge des plus vieux éléments ou la part hors cible de service, avec un garde-fou.
- **Utiliser l'âge moyen.** Les nouveaux éléments tirent la moyenne vers le bas pendant que les vieux s'accumulent. Montrez la médiane, le 85e percentile et l'élément le plus ancien.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et données | Dates d'entrée et motifs de sortie manquants ou incohérents | Certaines équipes consignent les dates ; les définitions de prêt diffèrent | Une définition écrite de prêt et d'âge du backlog ; date d'entrée et motif de sortie obligatoires | Qualité des données échantillonnée ; âge mesuré à travers les clones et les déplacements | Définitions partagées entre équipes et fournisseurs et révisées quand elles cessent d'éclairer les décisions |
| Santé du backlog | Le backlog grandit sans qu'on le remarque ; aucun élagage | Nettoyage occasionnel quand la liste devient ingérable | Élagage planifié ; backlogs de produit et de service séparés | Taille, âge, entrées-sorties et taux d'abandon suivis dans le temps et revus avec un garde-fou | Politique de backlog réglée entre équipes selon la demande et la capacité ; les clients voient l'état de leurs éléments |
| Affinage | Détail ajouté ad hoc à la planification | Séances régulières pour certaines équipes | Affinage court et régulier avec une fenêtre prête convenue | Couverture et profondeur prête revues et reliées aux résultats de livraison | Affinage partagé entre équipes et dépendances ; la fenêtre s'adapte aux conditions |
| Usage dans les décisions | Chiffres montrés seulement quand quelque chose tourne mal | Rapportés à la direction sans discussion | L'équipe revoit l'âge et la profondeur prête en affinage | Un travail d'amélioration financé suit la revue | Les preuves du backlog éclairent les décisions de portefeuille et de capacité dans toute l'organisation |

## Liste de vérification

- [ ] Chaque backlog a un responsable nommé et un but déclaré.
- [ ] Les idées retenues et les promesses aux clients sont étiquetées et rapportées séparément.
- [ ] Chaque élément a une date d'entrée obligatoire et un motif de sortie tiré d'une liste contrôlée.
- [ ] L'équipe a une courte définition de prêt écrite.
- [ ] L'âge du backlog est rapporté sous forme de médiane, de 85e percentile et d'élément le plus ancien.
- [ ] Le ratio entrées-sorties est montré sous forme d'un chiffre glissant à côté du débit.
- [ ] Une fenêtre prête est convenue, et la profondeur de travail prêt est rapportée au regard d'elle.
- [ ] La couverture de l'affinage est rapportée avant la planification, non après.
- [ ] Une séance d'élagage mensuelle est au calendrier et le taux d'abandon est rapporté.
- [ ] Les files de service montrent la part hors cible et l'usage des états de suspension.
- [ ] La revue de détournement des métriques de backlog a été menée ce trimestre.

## Prompts d'IA

**Évaluez la santé d'un backlog.**

```text
Je travaille avec [team name], qui détient [type of backlog, such as a product
backlog or incident queue]. Voici un résumé du backlog : [number of items],
distribution des âges [median, 85th percentile, oldest item], éléments terminés
par [week] [numbers], éléments ajoutés par [week] [numbers] et motifs
d'abandon [counts]. Notre définition de prêt est : [definition].

Expliquez ce que cette combinaison de chiffres pourrait signifier, en énumérant
au moins trois explications différentes, et suggérez quelles données
supplémentaires les départageraient. N'inventez ni valeurs de référence ni
objectifs. Énumérez vos hypothèses et tout ce que vous n'avez pas pu déterminer
à partir de ce que je vous ai donné.
```

**Rédigez une définition de prêt.**

```text
Aidez-moi à rédiger une courte définition de prêt pour [team name], qui travaille
sur [type of work]. Nos problèmes actuels avec les éléments non prêts sont :
[list of problems]. Proposez au plus six critères, dites quel problème chaque
critère traite et décrivez comment l'équipe pourrait vérifier chacun en moins
d'une minute. Suggérez aussi quand l'équipe devrait être autorisée à démarrer
un élément qui ne respecte pas la définition. Ne copiez aucun texte d'un cadre.
Énumérez vos hypothèses.
```

**Planifiez une séance d'élagage du backlog.**

```text
Planifiez une séance d'élagage de [length of time] pour le backlog de [team
name]. Le backlog contient [number] éléments, et les plus anciens ont [age]. Les
motifs de sortie que nous employons sont [list]. Proposez un ordre du jour, les
questions à poser sur chaque vieil élément, un message simple à envoyer aux
demandeurs dont les éléments sont retirés et les données à consigner ensuite.
Signalez les façons dont la séance pourrait être détournée et comment les
attraper. N'inventez pas de statistiques. Énumérez vos hypothèses.
```

**Séparez le travail de produit et de service dans un backlog mixte.**

```text
Voici un échantillon de [number] éléments de notre backlog combiné dans [tool
name], avec les champs [list of fields]. Classez chaque élément comme idée
retenue, promesse faite à un client avec une attente de service ou incertain, et
expliquez votre raisonnement. Suggérez ensuite des étiquettes et une règle simple
pour acheminer les futurs éléments. Rapportez des schémas, non des individus, et
ne devinez pas des faits absents des données. Énumérez vos hypothèses et les
éléments que vous n'avez pas pu classer.

[paste items, with personal data removed]
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé et les sujets voisins d'une métrique de backlog que vous êtes sur le point d'introduire.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un sujet de backlog révisé garde cohérents ses vecteurs de détournement, ses garde-fous et ses renvois.

## Points clés à retenir

- Un backlog est une file de promesses ; lisez donc ensemble la taille et l'âge et montrez les plus vieux éléments.
- Gardez les idées retenues et les promesses aux clients dans des vues séparées, car attendre signifie des choses différentes dans chacune.
- Visez une courte fenêtre de travail prêt et mesurez la couverture de l'affinage sur les éléments sur le point de démarrer.
- Élaguez selon un calendrier, consignez pourquoi les éléments partent et traitez un taux d'abandon de zéro comme un signal d'alerte.
- Visez l'âge et les fenêtres de service, non la taille brute, et associez chaque métrique de backlog à un garde-fou.
- Les métriques de backlog décrivent comment le travail parvient à une équipe et comment il est traité, et ne classent jamais les personnes.

## Références et lectures complémentaires

1. Schwaber, K., and Sutherland, J., *The Scrum Guide*, 2020, https://scrumguides.org/scrum-guide.html.
2. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
3. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Cohn, M., *User Stories Applied: For Agile Software Development*, Addison-Wesley, 2004.
6. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [User story](https://en.wikipedia.org/wiki/User_story).
11. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
12. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
13. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
