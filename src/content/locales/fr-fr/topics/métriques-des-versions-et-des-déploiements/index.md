# Métriques des versions et des déploiements

**Déployer du code et le mettre en production pour les utilisateurs sont des événements différents avec des risques différents ; mesurez-les donc séparément, comptez chacun selon une règle écrite et lisez ensemble la fréquence, le délai, la taille des lots et l'hygiène des bascules plutôt que de célébrer un seul compte.**

## Résumé et motivation

Beaucoup d'équipes emploient les mots « déploiement » et « mise en production » comme s'ils voulaient dire la même chose. Ce n'est pas le cas, et la différence est l'idée la plus utile de ce sujet. Un **déploiement** est l'acte de mettre une version du logiciel dans un environnement, généralement la production, comme le décrit l'article sur le [déploiement de logiciels](https://en.wikipedia.org/wiki/Software_deployment). Une **mise en production** (release) est le moment où un changement devient disponible pour ses utilisateurs visés, une décision que la [gestion des versions](https://en.wikipedia.org/wiki/Release_management) existe pour gouverner. Quand les deux ont lieu ensemble, un déploiement est une mise en production et un seul nombre décrit les deux. Quand ils sont séparés, l'équipe peut déployer souvent et discrètement, et mettre en production délibérément.

La séparation compte parce que les deux événements portent des risques différents. Un déploiement porte un risque technique : la nouvelle construction peut ne pas démarrer, casser une dépendance ou exiger un retour en arrière. Une mise en production porte un risque métier et utilisateur : le changement peut dérouter les clients, ou doit atterrir à une date convenue. Les équipes qui couplent les deux événements acceptent les deux risques à la fois, ce qui les pousse vers de gros lots de changements mis en production rarement. Les équipes qui les séparent prennent le risque technique par petites étapes et le risque utilisateur par étapes contrôlées.

Le principal outil de séparation est la [bascule de fonctionnalité](https://en.wikipedia.org/wiki/Feature_toggle) (feature toggle ou feature flag) : un interrupteur de configuration qui active ou désactive un comportement sans nouveau déploiement. Les techniques apparentées comprennent la [mise en production canari](https://en.wikipedia.org/wiki/Canary_release), qui expose d'abord un changement à une petite part du trafic, et le [déploiement bleu-vert](https://en.wikipedia.org/wiki/Blue-green_deployment), qui garde deux environnements de production et bascule le trafic de l'un à l'autre. Toutes permettent de répondre à deux questions distinctes : la nouvelle version tourne-t-elle en sécurité, et qui devrait voir le nouveau comportement et quand.

Les termes ci-dessous reviennent dans ce sujet.

- Une **mise en production** est une version ou un ensemble de changements rendu disponible aux utilisateurs.
- Un **déploiement** est le déplacement d'une version vers un environnement. ITIL 4 nomme une pratique pour cela, la gestion des déploiements.
- Un **lancement furtif** est un déploiement dont le nouveau comportement est désactivé pour les utilisateurs.
- Un **déploiement progressif** est une mise en production qui élargit l'exposition par étapes, par exemple 1 pour cent, 10 pour cent, puis tout le monde.
- Un **lot** est l'ensemble des changements qui partent ensemble dans un déploiement ou une mise en production. La taille du lot est le nombre de changements, ou la quantité de changement, qu'il contient.
- Le **délai de mise en production** est le temps écoulé entre un point de départ énoncé et le moment où le changement est disponible pour ses utilisateurs. Votre équipe écrit le point de départ, car plusieurs sont d'usage courant.
- Un **percentile** est une valeur en dessous de laquelle tombe une part donnée des observations. Le 85e percentile du délai de mise en production est le nombre que 85 pour cent des mises en production battent.

Les visions agile et ITIL se rencontrent ici. Une équipe agile qui suit la [livraison continue](https://en.wikipedia.org/wiki/Continuous_delivery) veut que chaque changement soit publiable à tout moment, et traite la mise en production comme une décision métier prise séparément de l'acte technique. Un praticien ITIL voit la gestion des versions, la gestion des déploiements et la maîtrise des changements comme des pratiques qui planifient, programment et contrôlent le passage du changement à l'usage réel. Les deux visions entrent en conflit quand la gestion des versions est comprise comme un calendrier de grands événements. Elles s'accordent quand la pratique est comprise comme la capacité de mettre en production en sécurité à la demande, les contrôles étant intégrés dans la chaîne de livraison et les bascules.

Ce sujet ne répète pas les définitions des cinq mesures de performance de livraison du programme de recherche DORA (voir le sujet 2.8, Métriques DORA), ni les mesures d'échec et de reprise après une mise en production (voir le sujet 4.4, Échecs de changement et reprises), ni le volume et l'approbation des changements (voir le sujet 4.3, Métriques de maîtrise des changements). Il ajoute ce que ces sujets laissent ouvert : comment compter les mises en production comme distinctes des déploiements, combien de temps un changement terminé attend avant que les utilisateurs l'aient, quelle est la taille des lots et si les bascules qui rendent la séparation possible sont tenues en ordre.

Enfin, les comptes de mises en production et de déploiements sont des chiffres tentants pour un tableau de bord de direction, et la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique aussitôt (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Un compte de déploiements monte quand les changements sont scindés en morceaux triviaux. Un compte de mises en production monte quand une étiquette est changée. Chaque métrique ci-dessous vient donc avec la façon dont elle se tord et le garde-fou qui attrape la torsion.

## Principes clés

- **Le déploiement et la mise en production sont deux événements.** Mesurez-les séparément partout où l'architecture le permet, et dites clairement là où ils restent un seul événement.
- **Compter selon une règle écrite.** Un déploiement compte quand un environnement nommé a reçu une version nommée avec un résultat positif. Une mise en production compte quand les utilisateurs visés peuvent atteindre le changement. Écrivez la règle une fois et appliquez-la de la même façon à chaque fois.
- **Décrire un service, non une personne.** Les comptes appartiennent à un service et à son équipe, jamais à un individu.
- **Mesurer l'attente, pas seulement le travail.** Le délai de mise en production contient souvent des jours d'attente d'une fenêtre, d'une approbation ou d'une décision. L'attente est là où l'amélioration se trouve généralement.
- **Les petits lots sont le levier.** La fréquence et la taille sont deux vues d'une même chose. Associez chaque compte à une mesure de la quantité de changement que chaque mise en production portait.
- **Les bascules sont un inventaire avec un coût de portage.** Une bascule qui vit trop longtemps devient du code mort et une source d'échec ; suivez donc l'âge des bascules aussi soigneusement que leur couverture.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fréquence de déploiement | À quelle fréquence un service reçoit un déploiement réussi en production | Nombre de déploiements réussis du service en production dans la période / jours de la période ; les déploiements vers les environnements de test ou de préproduction, les déploiements échoués ou annulés et les redéploiements d'une construction inchangée sont exclus ; les déploiements de configuration seule sont comptés dans une série séparée | Déploiements par jour ou par semaine | Journal des événements de la chaîne de déploiement | Gestion des déploiements | Livraison continue ; livrer un incrément fonctionnel | Hebdomadaire |
| Fréquence de mise en production | À quelle fréquence les utilisateurs reçoivent un changement qu'ils peuvent atteindre | Nombre d'événements de mise en production dans la période / jours de la période ; un événement de mise en production est le moment où un changement, ou un groupe de changements, devient accessible à ses utilisateurs visés (une bascule activée pour tous les utilisateurs, la dernière étape d'un déploiement progressif ou le déploiement d'un changement sans bascule) ; un lancement furtif, un déploiement arrêté à une étape partielle et un changement de bascule qui n'affecte que les utilisateurs internes sont exclus | Mises en production par semaine ou par mois | Journal d'audit du service de bascules joint au journal de la chaîne de livraison et au calendrier des versions | Gestion des versions | Mettre en production à la fin de chaque incrément ; un incrément potentiellement livrable rendu disponible | Hebdomadaire, revue mensuelle |
| Délai de mise en production | Combien de temps un changement terminé attend avant que les utilisateurs puissent l'atteindre | L'horloge démarre quand le changement est fusionné dans la ligne principale et a passé ses contrôles automatisés (ou, si votre équipe l'écrit ainsi, au premier commit) et s'arrête quand le changement est mis en production tel que défini ci-dessus ; rapportez la médiane et le 85e percentile des changements mis en production dans la période ; les changements pas encore mis en production sont exclus et rapportés comme âge du travail en attente | Heures ou jours | Contrôle de versions joint à la chaîne de livraison et au journal d'audit des bascules | Gestion des versions ; gestion des déploiements | Délai de terminé à livré ; délai jusqu'au client | Hebdomadaire, revue mensuelle |
| Écart entre déploiement et mise en production | Combien de temps le code déployé reste furtif avant que les utilisateurs puissent l'atteindre | L'horloge démarre quand le changement est déployé en production et s'arrête quand il est mis en production ; rapportez la médiane et le 85e percentile ; les changements mis en production au moment du déploiement ont un écart de zéro et sont inclus ; les changements déployés puis retirés sans mise en production sont exclus et comptés séparément | Heures ou jours | Journal de la chaîne de livraison joint au journal d'audit des bascules | Gestion des versions ; gestion des déploiements | Lancement furtif ; découplage du déploiement et de la mise en production | Mensuelle |
| Taille des lots de mise en production | Quelle quantité de changement part ensemble dans une mise en production | Médiane et 85e percentile du nombre de changements fusionnés (demandes de fusion ou éléments de travail) par mise en production dans la période ; l'unité de changement est écrite ; chaque changement est compté une fois, dans la mise en production qui l'a rendu accessible | Changements par mise en production | Contrôle de versions et gestionnaire de tickets joints à l'événement de mise en production | Gestion des versions ; maîtrise des changements | Petits lots ; tranches verticales de travail | Par mise en production, revue mensuelle |
| Couverture par bascule de fonctionnalité | La part des changements visibles des utilisateurs mis en production derrière une bascule | Changements visibles des utilisateurs mis en production dans la période qui avaient une bascule au moment de la mise en production / tous les changements visibles des utilisateurs mis en production dans la période ; les changements d'infrastructure et les corrections de défauts qui ne peuvent pas être mis derrière une bascule sont exclus, et la règle pour « visible des utilisateurs » est écrite | Pourcentage | Service de bascules joint au gestionnaire de tickets et au journal des versions | Gestion des versions ; maîtrise des changements | Livraison progressive ; développement piloté par l'expérimentation | Mensuelle |
| Nombre de bascules périmées | Combien de bascules ont survécu à leur raison d'être | Nombre de bascules de mise en production encore présentes dans le code ou la configuration plus d'un nombre énoncé de jours après que le changement qu'elles gardent a atteint tous les utilisateurs ; les bascules opérationnelles permanentes (coupe-circuits, bascules de droits) sont étiquetées et exclues ; la limite d'âge est écrite par type de bascule | Bascules, et âge médian des bascules de mise en production en jours | Inventaire du service de bascules joint à la recherche dans le code | Gestion des versions ; gestion des connaissances | Nettoyage de la dette technique ; le critère de terminé qui consiste à retirer une bascule | Mensuelle |

## Recommandations

### Écrire ce qui compte comme un déploiement et comme une mise en production

**Définissez les deux événements avant de compter l'un ou l'autre.** Un déploiement compte quand une version nommée a atteint un environnement nommé et que la chaîne de livraison a rapporté un succès. Une mise en production compte quand les utilisateurs visés peuvent atteindre le changement, ce qui, pour un changement derrière une bascule, est le moment où la bascule est activée pour eux et non le moment où le code est arrivé. Énoncez les exclusions dans la même phrase : environnements de test, retours en arrière, redéploiements d'une construction inchangée et exposition purement interne.

### Rapporter les deux séries côte à côte

**Montrez la fréquence de déploiement et la fréquence de mise en production sur un même graphique.** Là où les courbes coïncident, le service couple encore les deux événements. Là où les déploiements courent bien devant les mises en production, l'équipe a commencé à les découpler, et la distance entre les courbes est un signe de la capacité. Un seul nombre combiné cache cela, et il permet à une équipe de revendiquer une fréquence élevée que les utilisateurs ne voient jamais.

### Mesurer le délai de mise en production d'un départ énoncé jusqu'à l'utilisateur

**Choisissez une fois le début de l'horloge et gardez-le.** Démarrer au premier commit montre le parcours complet, et démarrer à la fusion dans la ligne principale isole la chaîne de mise en production et ses approbations. L'un ou l'autre est acceptable s'il est énoncé sur le graphique et jamais changé en silence. Terminez l'horloge à la mise en production, non au déploiement, sinon la métrique cesse de mesurer ce que l'utilisateur a attendu.

### Suivre la taille des lots à côté de la fréquence

**Associez chaque fréquence à une taille.** Une équipe peut relever son compte de déploiements en découpant un changement en tranches qui ne sont pas utiles indépendamment, et le compte monte alors que le flux réel reste le même. La taille médiane et le 85e percentile des lots montrent si les tranches sont réelles. De petits lots sont plus faciles à revoir, à tester et à annuler, et c'est le bénéfice dont la fréquence est un substitut.

### Traiter les étapes d'un déploiement progressif comme des événements

**Consignez chaque étape d'un déploiement avec un horodatage.** Un déploiement qui passe de 1 pour cent à 10 pour cent puis à tout le monde donne trois horodatages, et chacun est une occasion de s'arrêter. Capturez l'étape, la part d'exposition et le résultat du contrôle de santé qui a permis l'étape suivante. Cela permet de distinguer un déploiement mis en pause pour un vrai signal d'un déploiement qui a calé.

### Tenir un inventaire des bascules avec un responsable et une date d'expiration

**Donnez à chaque bascule de mise en production un responsable, un but et une date de retrait prévue à la création.** Le service de bascules ou un simple registre peut les contenir. Passez le registre en revue chaque mois et calculez le nombre de bascules périmées. Une bascule laissée activée après le déploiement complet est du code mort qui bifurque encore. Traitez le retrait comme une partie de terminé pour le changement.

### Étiqueter les bascules par type

**Séparez les bascules temporaires de mise en production des bascules opérationnelles permanentes.** Les coupe-circuits et les bascules de droits sont permanents par conception, alors que les bascules de mise en production devraient être retirées après le déploiement complet. Mélanger les types rend le compte de périmées bruité et invite les équipes à supprimer un interrupteur dont quelqu'un a besoin pendant un incident. Exigez le type à la création de la bascule.

### Lier les mises en production aux enregistrements d'incidents et de changements

**Consignez l'identifiant de mise en production sur l'incident et le changement.** Un événement de mise en production devrait être traçable depuis l'outil d'incidents, afin que la cause d'un incident puisse être liée au changement qui a été mis en production, qu'il ait été déployé la semaine dernière ou activé ce matin. Sans le lien, les mesures d'instabilité attribuent les échecs à la date de déploiement et manquent les échecs causés par un changement de bascule. Les changements de bascules en production sont des changements au sens d'ITIL et devraient être visibles de la maîtrise des changements, même quand ils sont préautorisés comme changements standard (voir le sujet 4.3, Métriques de maîtrise des changements).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Fréquence de déploiement | Scinder un changement en déploiements triviaux ; redéployer des constructions inchangées ; compter les déploiements vers la préproduction ; compter les déploiements de configuration seule avec la série principale | Taille des lots de mise en production et part des déploiements avec un changement visible des utilisateurs ; la série de configuration séparée ; taux d'échec des changements à côté |
| Fréquence de mise en production | Requalifier des déploiements en mises en production ; compter une bascule activée pour le personnel interne comme une mise en production ; mettre en production des changements vides ou cosmétiques pour atteindre un objectif ; compter chaque étape d'un déploiement comme une mise en production séparée | Une définition écrite de la mise en production ; échantillon trimestriel de mises en production vérifié au regard des changements visibles des utilisateurs ; taille des lots et comptes de changements orientés client |
| Délai de mise en production | Démarrer l'horloge plus tard, par exemple à l'approbation plutôt qu'à la fusion ; exclure comme « bloqués » les changements qui ont longtemps attendu ; mettre d'abord en production un changement trivial pour tirer la médiane vers le bas ; terminer l'horloge au déploiement | Le 85e percentile et l'âge du plus ancien changement en attente ; un début fixe et écrit ; une revue trimestrielle des 10 pour cent de changements les plus lents |
| Écart entre déploiement et mise en production | Activer une bascule pour un utilisateur symbolique pour consigner la mise en production plus tôt ; laisser le code longtemps furtif hors de l'échantillon en disant que « ce n'est pas une mise en production » ; supprimer le code furtif pour éviter un long écart | Part d'exposition à la mise en production (un seuil pour ce qui compte comme mis en production) ; compte des changements déployés et retirés sans mise en production ; nombre de bascules périmées |
| Taille des lots de mise en production | Scinder le travail en demandes de fusion artificielles ; fusionner des changements sans rapport en un pour baisser le nombre de mises en production ; ne compter que le gros changement d'un groupe | Taille médiane des changements en lignes ou en fichiers comme mesure de contexte ; revue d'un échantillon de mises en production pour le regroupement sans rapport ; fréquence à côté de la taille |
| Couverture par bascule de fonctionnalité | Ajouter des bascules à des changements triviaux pour relever le taux ; ne mettre derrière une bascule que les changements sûrs et livrer sans bascule les risqués ; créer une bascule qu'on ne peut pas désactiver en pratique | Résultats de tests bascule désactivée pour un échantillon de bascules ; nombre de bascules périmées ; causes d'incidents qui n'avaient pas de bascule |
| Nombre de bascules périmées | Requalifier des bascules de mise en production en permanentes pour quitter le compte de périmées ; supprimer l'enregistrement de la bascule en la laissant dans le code ; prolonger les dates d'expiration sans revue | Une recherche périodique dans le code au regard du registre ; revue de chaque changement de type de bascule ; âge de la plus ancienne bascule de mise en production |

Une lecture saine montre des déploiements en avance sur les mises en production pour les services qui emploient des bascules, avec un écart modeste, une taille de lot petite et stable et un 85e percentile du délai pas très au-dessus de la médiane. La couverture par bascule est élevée pour les changements risqués, et le nombre de bascules périmées est bas ou en baisse. Une lecture qui paraît trop belle, comme une fréquence élevée avec des tailles de lots croissantes ou un nombre nul de périmées avec un nombre gonflé de bascules permanentes, mérite un audit par échantillon avant toute célébration.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Déployer en continu et mettre en production par bascule | Faible risque technique par déploiement ; le moment de la mise en production devient un choix métier ; désactivation rapide | Exige de la discipline et de l'outillage pour les bascules ; ajoute des chemins de code qui doivent être testés et retirés |
| Coupler déploiement et mise en production | Simple à expliquer ; un seul événement à compter ; pas de dette de bascules | Chaque mise en production porte à la fois le risque technique et le risque utilisateur, ce qui encourage de gros lots mis en production rarement |
| Train de mises en production programmé | Prévisible pour le soutien et les régulateurs | Les changements attendent le prochain train ; le compte reflète le calendrier, non la capacité |
| Déploiement progressif par pourcentage | Limite l'effet d'une mauvaise mise en production ; produit des preuves à chaque étape | Exige une bonne télémétrie et un contrôle de santé ; des versions mixtes peuvent tourner côte à côte un temps |
| Compter à la fois déploiements et mises en production | Montre le découplage et l'attente | Exige de joindre un journal d'audit des bascules ou des enregistrements de versions à la chaîne de livraison |

Un service qui ne peut pas encore découpler le déploiement de la mise en production, par exemple une application mobile distribuée par la revue d'une boutique d'applications, devrait mesurer ce qu'il peut : fréquence de mise en production, délai de mise en production et taille des lots, le temps de revue de la boutique étant rapporté comme une attente séparée.

## Questions à discuter avec votre équipe

**1. Employons-nous les mots « déploiement » et « mise en production » pour le même événement, et cela correspond-il à ce qui se passe ?**
Demandez à trois personnes de décrire le dernier changement mis en ligne et notez quand le code est arrivé et quand les utilisateurs ont pu s'en servir pour la première fois. L'animateur doit aider le groupe à convenir d'une phrase pour chaque terme et à décider lequel des deux événements chaque chiffre existant du tableau de bord mesure.

**2. Quel est le plus long temps qu'un changement terminé ait attendu sa mise en production, et pourquoi ?**
Tirez le plus ancien changement fusionné que les utilisateurs ne peuvent toujours pas atteindre. Retracez son chemin de la fusion à maintenant, et écrivez chaque attente en chemin.

**3. Si notre compte de déploiements doublait, que vérifierions-nous avant d'appeler cela une bonne nouvelle ?**
Invitez le groupe à nommer les façons dont le compte pourrait monter sans qu'il arrive plus de valeur aux utilisateurs. Regardez la taille des lots, la part des déploiements avec un changement visible des utilisateurs et les chiffres d'échec et de reprise. L'animateur doit noter lesquelles de ces vérifications existent déjà sur le tableau de bord et lesquelles doivent être ajoutées avant que quiconque fixe un objectif.

**4. Lesquelles de nos bascules aurions-nous peur de supprimer, et qu'est-ce que cela nous dit ?**
Parcourez le registre des bascules et choisissez les trois plus anciennes. Demandez qui détient chacune, ce qu'elle garde et ce qui arriverait si elle était retirée. La peur de supprimer signifie généralement un test manquant, un responsable manquant ou un enregistrement manquant du but. Convenez d'une date de retrait pour au moins une et du contrôle qui rendrait le retrait sûr.

**5. Qui décide quand un changement est mis en production, et a-t-il l'information dont il a besoin ?**
Là où la mise en production est un choix métier, la personne qui le fait a besoin de voir l'état du déploiement, les signaux de santé et la préparation du soutien. Demandez où vivent ces faits aujourd'hui et à quelle vitesse le décideur peut annuler une mise en production.

**6. Quelle mise en production du dernier trimestre s'est le plus mal passée, et quelle mesure nous aurait avertis ?**
Choisissez une mise en production qui a causé des ennuis et lisez ensemble la chronologie. Demandez si le lot était gros, si l'écart était long, si le déploiement avait des étapes et si une bascule aurait pu limiter les dégâts. Choisissez une mesure à ajouter ou un seuil à resserrer en conséquence.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison emploient ces mesures pour voir si leur chaîne de livraison et leurs bascules leur donnent réellement le contrôle de l'exposition. Les vues les plus utiles sont l'écart, la taille des lots et l'âge du plus ancien changement en attente, car chacune désigne quelque chose que l'équipe peut changer.

### Équipes de service et d'exploitation

Les équipes d'exploitation et de soutien se soucient de ce qui change en production et de quand. Les événements de mise en production et les changements de bascules doivent leur être visibles, idéalement avec un identifiant de mise en production sur chaque incident. Les déploiements par étapes et la désactivation rapide réduisent le nombre d'incidents qui exigent un rétablissement complet, et les mesures aident les équipes d'exploitation à demander les contrôles qui rendent leur travail plus calme.

### Direction et gouvernance

Les dirigeants devraient demander des tendances et la dispersion pour chaque service, et la réponse à une question simple : combien de temps faut-il pour qu'un changement terminé atteigne les utilisateurs, et avec quelle sécurité. Un objectif de fréquence de déploiement entre équipes invite à la scission et à la requalification ; préférez donc des objectifs sur des résultats comme les distributions de délais et sur la suppression d'attentes connues. La gouvernance peut alléger la charge des approbations de mise en production en préautorisant les changements à faible risque derrière une bascule, tant que la piste d'audit des bascules est complète (voir le sujet 4.3, Métriques de maîtrise des changements).

### Clients et utilisateurs

Les clients voient les mises en production, non les déploiements. Ils se soucient que les corrections arrivent vite, que le nouveau comportement ne les surprenne pas et qu'un mauvais changement puisse être annulé rapidement. Une équipe qui sépare les deux événements peut donner aux clients un accès anticipé à une fonction, annoncer une date qu'elle peut tenir et annuler une fonction sans perdre le reste. Associez ces mesures à des mesures orientées client (voir le sujet 5.3, Métriques de disponibilité, et le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne régional exploite un service de recherche de produits détenu par une équipe produit, soutenue par une équipe de plateforme et le centre de services. Le service se déploie en production par une chaîne de livraison et dispose d'un service de bascules introduit il y a six mois. Tous les chiffres ci-dessous sont illustratifs.

Le trimestre dernier, l'équipe a fait 52 déploiements en production, soit environ quatre par semaine. La fréquence de mise en production, comptée comme les moments où un changement est devenu accessible à tous les utilisateurs visés, était de 11 pour le même trimestre, soit environ une par semaine. Le délai médian de mise en production, de la fusion à la mise en production, était de 9 jours, avec un 85e percentile de 21 jours. L'écart médian entre déploiement et mise en production était de 6 jours. La taille médiane des lots de mise en production était de 3 changements et le 85e percentile de 14. La couverture par bascule des changements visibles des utilisateurs était de 58 pour cent, et 17 bascules de mise en production avaient plus de 30 jours après le déploiement complet.

Le risque de détournement est déjà visible. Certains déploiements étaient de configuration seule, et la chaîne de livraison comptait chacun comme un déploiement ; le tableau de bord montre donc maintenant une série de configuration séparée et la revue mensuelle échantillonne 10 déploiements pour un changement visible des utilisateurs. Un responsable régional voit le compte de déploiements et demande à l'équipe de le relever pour égaler le chiffre d'une autre équipe. Le chef d'équipe résiste à l'objectif et apporte plutôt à la revue mensuelle l'ensemble complet des chiffres. La revue constate que l'écart est long parce que les mises en production attendent un point hebdomadaire marketing et soutien, que quatre des 17 bascules périmées gardent des chemins de code que personne n'a testés et que le 85e percentile de la taille des lots vient de quelques mises en production qui regroupaient des changements sans rapport avant un gel des fêtes.

La décision, consignée dans le journal des décisions, a quatre parties. Le soutien et le marketing participeront à un point plus court, deux fois par semaine, afin que la décision de mise en production n'attende plus le créneau hebdomadaire. Chaque bascule de mise en production reçoit un responsable et une date de retrait, et les quatre bascules périmées non testées sont retirées dans les deux semaines suivantes. Les mises en production qui regroupent des changements sans rapport exigent un motif énoncé dans l'enregistrement de la mise en production. Et l'équipe décline l'objectif commun de déploiements, offrant à la place une vue partagée de la distribution du délai de mise en production et de l'hygiène des bascules de chaque service. Le responsable des changements convient de traiter les changements derrière une bascule qui passent les contrôles de la chaîne de livraison comme des changements standard, avec une revue le trimestre suivant. Le trimestre suivant (illustratif), le délai médian de mise en production tombe à 5 jours, le nombre de bascules périmées tombe à 6 et le taux d'échec des changements reste stable ; l'expérience continue donc.

## Perspective sectorielle

**Startup.** Une startup a souvent un seul service et une bibliothèque de bascules dans le code ; le déploiement et la mise en production peuvent donc être séparés à peu de frais. Tenez un simple registre de bascules avec des dates d'expiration, et attendez d'avoir assez de volume avant de vous fier aux percentiles.

**Petite entreprise.** Une petite entreprise peut exploiter des logiciels en paquet ou achetés dont le fournisseur contrôle la mise en production. Les mesures utiles sont le temps entre la version du fournisseur et son adoption par l'entreprise, et le lot de changements qui arrivent ensemble dans une version majeure. Consignez les dates de versions du fournisseur et vos propres dates de déploiement afin que l'attente entre les deux soit visible.

**Grande entreprise.** Une grande entreprise fait face à de nombreux services aux styles de mise en production différents, à un processus central de changement et à des environnements partagés. Le travail principal est de convenir des définitions du déploiement et de la mise en production entre équipes et fournisseurs, et de tenir une consolidation qui respecte les différences. Employez la dispersion et les tendances pour la gouvernance et traitez la plateforme de bascules comme un service partagé avec un responsable.

**Gouvernement et secteur public.** Les mises en production sont souvent liées à des dates fixes, à la législation, à des cycles de marchés ou à des portes d'assurance ; la fréquence de mise en production peut donc être basse pour de bonnes raisons. La fréquence de déploiement et l'écart entre déploiement et mise en production peuvent quand même montrer quelle part du risque a été prise tôt et quelle part attend la date. Rapportez séparément l'attente des portes externes et le temps propre de la chaîne de livraison de l'équipe.

## Dossier d'affaires : motivations, ROI et TCO

La motivation de ces mesures est de réduire le risque et le retard entre l'achèvement d'un changement et la livraison de sa valeur. De gros lots mis en production rarement portent plus de changement par événement ; un échec est donc plus difficile à diagnostiquer et plus difficile à annuler. Séparer le déploiement de la mise en production donne à l'équipe un moyen de prendre le risque technique tôt et en petites quantités, et de prendre le risque utilisateur délibérément. Les mesures montrent si la séparation est réelle et où le changement attend.

Les coûts sont modérés. Collecter les événements de déploiement et de mise en production exige que le journal de la chaîne de livraison et le journal d'audit des bascules soient joints au contrôle de versions et au gestionnaire de tickets, ce qui est une intégration ponctuelle suivie d'un entretien occasionnel (voir le sujet 1.5, Sources de données et instrumentation). La pratique des bascules a elle-même des coûts courants : la plateforme ou la bibliothèque, le registre, le test des deux chemins d'un changement derrière une bascule et le nettoyage des bascules expirées. Le principal coût caché est la dette de bascules, que le nombre de bascules périmées garde visible.

Le retour suit un schéma que la plupart des équipes peuvent observer dans leurs propres données. Un délai de mise en production plus court signifie une boucle de rétroaction plus rapide sur la question de savoir si un changement aide les utilisateurs. De plus petits lots signifient un diagnostic plus facile et une annulation plus facile. Un écart plus court entre déploiement et mise en production signifie moins de temps pendant lequel un travail terminé reste non réalisé. N'inventez pas de chiffre pour la valeur. Employez les propres exemples de l'équipe de changements restés furtifs pendant des semaines et la tendance de ses propres mesures.

## Antimodèles et pièges

- **Fixer un objectif de fréquence de déploiement pour chaque équipe.** Il invite à la scission et à la requalification. Fixez plutôt des objectifs de résultat, comme une distribution de délais plus étroite, et laissez la fréquence suivre.
- **Traiter un train de mises en production comme une preuve de capacité.** Un calendrier fixe donne un compte régulier et cache l'âge du travail en attente. Suivez l'âge du plus ancien changement fusionné que les utilisateurs ne peuvent pas atteindre.
- **Compter les changements de configuration comme des déploiements dans la série principale.** Cela gonfle le nombre. Gardez une série séparée et montrez-la à côté de la principale.
- **Ne jamais retirer les bascules.** Le code accumule des branches mortes et des combinaisons non testées. Donnez à chaque bascule de mise en production un responsable et une date de retrait, et traitez le retrait comme une partie de terminé.
- **Changer des bascules en production sans enregistrement.** Un changement de bascule est un changement du comportement de la production. Envoyez-le au journal d'audit et rendez-le visible de la maîtrise des changements.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | « Déploiement » et « mise en production » sont employés indifféremment ; chacun compte différemment | Quelques équipes écrivent leurs propres définitions | Une définition écrite du déploiement et de la mise en production, avec horloges et exclusions, dans le registre des métriques | Changements de définition consignés et marqués sur les graphiques ; échantillons vérifiés chaque trimestre | Définitions révisées conjointement avec les fournisseurs et la gouvernance quand elles cessent d'éclairer les décisions |
| Séparation du déploiement et de la mise en production | Chaque déploiement est une mise en production | Certaines équipes emploient des bascules ou des déploiements par étapes pour les changements risqués | Bascules et déploiements par étapes sont une option standard, les événements de mise en production étant consignés | Écart, taille des lots et étapes de déploiement suivis dans le temps et revus | Le moment des mises en production est coordonné entre équipes et fournisseurs pour les services liés |
| Capture des données | Comptes assemblés à la main à partir des tickets et de la discussion | Données de chaîne de livraison pour certains services ; mises en production consignées à la main | Déploiements, mises en production et changements de bascules capturés automatiquement pour la plupart des services | Qualité des données (taux de liaison, audit d'échantillons) mesurée et suivie dans le temps | Événements partagés entre équipes et fournisseurs par des interfaces convenues |
| Hygiène des bascules | Aucun inventaire | Liste informelle dans certaines équipes | Registre avec responsable, type et date d'expiration pour chaque bascule de mise en production | Nombre de bascules périmées suivi ; le retrait fait partie de terminé et est vérifié | Plateforme de bascules gérée comme un service partagé avec rappels d'expiration automatisés |
| Usage des chiffres | Rapportés vers le haut comme un compte unique | Les équipes regardent occasionnellement leurs propres graphiques | Revus chaque mois par l'équipe responsable à côté des chiffres d'échec et de reprise | Les tendances alimentent une amélioration financée avec un garde-fou | Dispersion et tendances éclairent l'investissement de plateforme et la politique de changement dans toute l'organisation |

## Liste de vérification

- [ ] « Déploiement » et « mise en production » sont définis par écrit, avec les événements d'horloge et les exclusions de chacun.
- [ ] Les déploiements en production sont capturés automatiquement depuis la chaîne de livraison, les environnements de test étant exclus.
- [ ] Les événements de mise en production sont capturés depuis le journal d'audit des bascules, les étapes de déploiement ou les enregistrements de versions.
- [ ] Le délai de mise en production emploie un début d'horloge énoncé et rapporte la médiane et le 85e percentile.
- [ ] L'écart entre déploiement et mise en production et la taille des lots sont rapportés à côté de la fréquence.
- [ ] Les déploiements de configuration seule figurent dans une série séparée.
- [ ] Chaque bascule de mise en production a un responsable, un type et une date d'expiration dans un registre.
- [ ] Les bascules périmées sont revues chaque mois et leur retrait fait partie de terminé.
- [ ] Les identifiants de mise en production figurent sur les enregistrements d'incidents et de changements.
- [ ] Un échantillon de déploiements et de mises en production est audité chaque trimestre au regard des définitions.
- [ ] Une expérience d'amélioration, liée à la plus longue attente, est en cours avec une date de revue.

## Prompts d'IA

**Rédigez des définitions du déploiement et de la mise en production pour un service.**

```text
Je définis des métriques de mise en production et de déploiement pour [service
name]. Nos outils sont [version control host, CI/CD system, flag service, issue
tracker, ITSM tool]. Notre style de mise en production est [continuous, weekly
train, monthly, store-reviewed, or other]. Pour la fréquence de déploiement, la
fréquence de mise en production, le délai de mise en production, l'écart entre
déploiement et mise en production, la taille des lots de mise en production, la
couverture par bascule de fonctionnalité et le nombre de bascules périmées,
rédigez une définition qui énonce où l'horloge démarre et s'arrête, ce qui est
compté et exclu, la source de données et une ambiguïté à résoudre. N'inventez
pas de valeurs de référence et ne prétendez pas que notre pratique correspond à
une bande de performance publiée. Énumérez vos hypothèses et les questions
auxquelles je devrais répondre pour terminer les définitions.
```

**Vérifiez un ensemble de métriques de mise en production à la recherche de risques de détournement.**

```text
Voici comment nous calculons et rapportons nos métriques de mise en production
et de déploiement : [description of each metric, its data source, and how it is
reported]. Le public est [team, leadership, or governance body] et les
objectifs, s'il y en a, sont [targets or none]. Pour chaque métrique, listez les
façons plausibles dont le chiffre pourrait être gonflé, caché ou faussé sans
amélioration réelle, et suggérez une métrique ou pratique de garde-fou associée
qui l'attraperait. N'inventez pas de statistiques. Énumérez vos hypothèses et
toute information dont vous auriez besoin pour être plus précis.
```

**Analysez un export de déploiements, de mises en production et de bascules.**

```text
Je vais coller un petit export avec ces champs : [list fields, for example
deployment id, deployment time, result, change ids, flag name, flag on time,
exposure share, release time]. Il couvre [number] déploiements et [number]
bascules pour [service name] entre le [start date] et le [end date]. Calculez la
médiane et le 85e percentile du délai de mise en production et de l'écart entre
déploiement et mise en production, la distribution de la taille des lots et la
liste des bascules ayant plus de [age limit] jours depuis le déploiement complet,
en montrant les comptes derrière chacun. Signalez les enregistrements aux liens
manquants ou aux horodatages suspects. N'extrapolez pas au-delà des données et ne
comparez pas le résultat à des références extérieures. Énumérez vos hypothèses et
les problèmes de qualité des données qui limitent les conclusions.
```

**Planifiez une expérience de nettoyage de bascules et d'attente de mise en production.**

```text
Notre plus longue attente de mise en production est [description of the wait,
with date range and counts], et notre registre de bascules contient [number]
bascules de mise en production, dont [number] ont dépassé leur date
d'expiration. Les contraintes sont [constraints, for example regulated releases,
store review, shared test environment]. Proposez trois petites expériences de
quatre à six semaines, chacune avec une hypothèse, un moyen d'observer l'effet,
une métrique de garde-fou et un risque. N'inventez pas de chiffres
d'amélioration attendue. Énumérez vos hypothèses et ce que nous devrions
vérifier avant de commencer.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets apparentés sur les changements, les versions et les incidents et le garde-fou qui doit se trouver à côté de chaque métrique de mise en production.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une version révisée de ce sujet garde cohérents ses horloges, ses vecteurs de détournement et ses renvois.

## Points clés à retenir

- Un déploiement met une version dans un environnement et une mise en production rend un changement accessible aux utilisateurs. Mesurez les deux séparément partout où vous le pouvez.
- Le délai de mise en production devrait se terminer à la mise en production, avec un début énoncé, et être rapporté en médiane et en 85e percentile.
- L'écart entre déploiement et mise en production et la taille des lots montrent si le découplage est réel, et ils protègent la fréquence contre la scission et la requalification.
- Les bascules de fonctionnalité rendent la séparation possible et ont un coût ; suivez donc la couverture et les bascules périmées avec des responsables et des dates d'expiration.
- Comptez selon des règles écrites, liez les mises en production aux incidents et aux changements, et comparez un service à son propre historique plutôt qu'à d'autres équipes.

## Références et lectures complémentaires

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
3. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
4. Hodgson, P., "Feature Toggles (aka Feature Flags)," martinfowler.com, 2017, https://martinfowler.com/articles/feature-toggles.html
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
7. Wikipedia, [Release management](https://en.wikipedia.org/wiki/Release_management).
8. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
9. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
10. Wikipedia, [Blue-green deployment](https://en.wikipedia.org/wiki/Blue-green_deployment).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
