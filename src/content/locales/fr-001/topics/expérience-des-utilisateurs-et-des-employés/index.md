# Expérience des utilisateurs et des employés

**Les gens font leur meilleur travail quand les outils, les appareils et le soutien qui les entourent fonctionnent tout simplement ; mesurez donc la friction que rencontrent vos collègues, traitez les réponses comme une raison de supprimer des obstacles, et ne transformez jamais ces données en surveillance ou en classement de personnes.**

## Résumé et motivation

Le cinquième principe du Manifeste agile dit de bâtir les projets autour d'individus motivés, de leur donner l'environnement et le soutien dont ils ont besoin, et de leur faire confiance pour atteindre l'objectif. Pour les personnes qui emploient l'informatique interne, l'environnement est l'ordinateur portable, la connexion, les outils de collaboration, le processus d'accès et le centre de services. Quand ceux-ci sont lents ou déroutants, les personnes motivées perdent du temps et de la bonne volonté, et elles inventent des contournements. Mesurer cet environnement est donc une façon de soutenir les gens. Ce n'est pas une façon de les surveiller.

L'[expérience employé](https://en.wikipedia.org/wiki/Employee_experience_management) est la somme des interactions d'un employé avec son lieu de travail tout au long de son passage dans l'organisation. La part que façonne l'informatique est parfois appelée expérience numérique de l'employé, et le [poste de travail numérique](https://en.wikipedia.org/wiki/Digital_workplace) est l'ensemble des technologies que les gens emploient pour travailler. Les sujets précédents de cette partie ont couvert les enquêtes de satisfaction (voir le sujet 6.1, Métriques de satisfaction de la clientèle) et les accords de niveau d'expérience (voir le sujet 6.2, Accords de niveau d'expérience). Ce sujet tourne la même attention vers l'intérieur, vers les collègues qui emploient les services informatiques chaque jour, y compris les ingénieurs et les exploitants qui les construisent et les font fonctionner.

Les utilisateurs internes diffèrent des clients externes de quatre façons qui comptent pour la mesure.

- **Ils ne peuvent pas partir.** Un employé n'a pas de concurrent vers qui se tourner ; le silence n'est donc pas de la satisfaction. Il peut signifier la résignation, ou un contournement.
- **Ils sont identifiables.** Dans une entreprise de quelques centaines de personnes, un petit groupe de réponses d'enquête peut désigner une personne. La conception de la confidentialité passe d'abord.
- **Ils sont aussi des collègues.** De mauvaises données d'expérience nuisent aux relations et au moral, et de bonnes données peuvent être partagées ouvertement et exploitées ensemble.
- **Ils incluent les équipes de livraison et d'exploitation.** L'outillage qu'emploient les développeurs et le personnel du centre de services fait partie de l'expérience, et sa friction atteint les utilisateurs par des corrections plus lentes.

Deux thèmes traversent ce sujet. Le premier est la **friction** : l'effort, le retard et l'interruption évitables qui se dressent entre une personne et son travail. Les interruptions et la charge mentale coûtent plus que leur temps d'horloge ne le laisse croire. L'idée de [charge cognitive](https://en.wikipedia.org/wiki/Cognitive_load), le fardeau sur la mémoire de travail, explique pourquoi un formulaire déroutant ou un redémarrage forcé inattendu coûte plus que les minutes qu'il prend, et l'idée de [flux](https://en.wikipedia.org/wiki/Flow_(psychology)), un état de concentration absorbée, explique pourquoi protéger le temps ininterrompu compte pour le travail de la connaissance. Le second thème est l'**éthique** : comment s'informer sur l'expérience sans envahir la vie privée. La technologie de [surveillance des employés](https://en.wikipedia.org/wiki/Employee_monitoring) peut mesurer beaucoup de choses, et la ligne entre soutenir et policer est facile à franchir. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique ici sous une forme humaine : un score employé pour juger les gens leur apprend à cacher leurs problèmes (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Mesurer l'environnement, non la personne.** L'unité d'analyse est un service, un type d'appareil ou un groupe, jamais un individu.
- **Traiter la friction comme l'ennemi.** Le temps perdu, l'interruption et la confusion sont des coûts à supprimer.
- **Demander, observer et mesurer.** Combinez ce que disent les gens, ce que les systèmes enregistrent et ce que vous voyez en regardant le travail s'accomplir.
- **Faire de la confidentialité une exigence de conception.** Recueillez le moins de données qui répondent à la question, agrégez tôt et supprimez les petits groupes.
- **Inclure tout le monde.** Les besoins d'accessibilité, les travailleurs à distance et postés et les nouveaux arrivants rencontrent souvent la pire expérience.
- **Protéger la concentration.** Planifiez les changements, les mises à jour et les notifications autour du travail des gens.
- **Dire ce que vous recueillez et pourquoi.** La transparence bâtit la confiance dont dépendent les réponses honnêtes.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de préparation au premier jour | Part des nouveaux arrivants dont les appareils, comptes et accès sont complets et fonctionnent à leur heure d'arrivée | nouveaux arrivants avec tous les éléments convenus fonctionnels à l'arrivée / nouveaux arrivants de la période | pourcentage | Demandes d'accueil, système d'identité, confirmation du nouvel arrivant | Gestion des demandes de service ; gestion du catalogue de services | Accord de travail de l'équipe pour l'accueil | Mensuelle |
| Délai jusqu'à la productivité | Temps écoulé entre la date d'arrivée et le moment où un nouvel arrivant a tout ce qu'il faut pour sa première vraie tâche | médiane et 85e percentile des jours entre la date d'arrivée et la confirmation du nouvel arrivant et de son responsable | jours | Suivi d'accueil ; courte question de confirmation | Gestion des demandes de service ; amélioration continue | Temps pour qu'un nouveau membre d'équipe fasse un premier changement | Mensuelle |
| Prévalence des contournements | Part du personnel interrogé qui emploie des outils non approuvés ou des étapes manuelles pour contourner un service officiel | répondants déclarant un contournement pour le service / répondants valides | pourcentage | Enquête éclair ; rapports de découverte d'outils sanctionnés | Gestion des niveaux de service ; amélioration continue | Obstacles soulevés aux points quotidiens de l'équipe | Trimestrielle |
| Minutes de perturbation forcée | Temps pendant lequel les gens sont interrompus par des actions informatiques planifiées comme les redémarrages forcés, les mises à jour et les invites de connexion | total des minutes de perturbation causées par des actions planifiées / utilisateurs actifs du groupe | minutes par personne et par mois | Journaux de gestion des postes de travail, agrégés par groupe | Maîtrise des changements ; gestion des versions et des déploiements | Temps de travail sans interruption | Mensuelle |
| Délai de résolution des demandes d'accessibilité | Temps pour résoudre les demandes liées à des besoins d'accessibilité | médiane et 85e percentile des heures entre la demande et une solution fonctionnelle confirmée | heures | Système de demandes avec une étiquette d'accessibilité | Gestion des demandes de service ; gestion des incidents | Définition de terminé inclusive | Mensuelle |
| Score éclair d'un outil | Note d'un outil ou d'un service nommé sur une courte question convenue | note moyenne ou part favorable des réponses valides, par outil | points d'échelle ou pourcentage | Enquête éclair, outils en rotation | Gestion des niveaux de service ; amélioration continue | Retour des membres de l'équipe sur leurs outils | Trimestrielle |
| Conformité aux garanties de confidentialité | Part des rapports d'expérience qui respectent les règles de suppression et d'agrégation | rapports respectant les règles / rapports publiés | pourcentage | Revue des rapports publiés au regard des règles de confidentialité | Gestion de la sécurité de l'information ; mesure et rapport | Accord de travail sur l'usage des données | Trimestrielle |

Définissez le groupe et la période de chaque mesure. La préparation au premier jour ne compte un nouvel arrivant comme prêt que si chaque élément d'une liste convenue fonctionne, et la liste est consignée dans le registre des métriques. Les minutes de perturbation forcée sont calculées à partir des totaux de groupe, et le niveau le plus bas montré est un groupe d'au moins dix personnes. La conformité aux garanties de confidentialité s'applique au programme d'expérience lui-même, ce qui en fait un garde-fou des six autres.

## Recommandations

### Partir des gens et de leur travail

**1. Passez une journée avec des collègues.** Asseyez-vous avec quelques personnes de rôles, de lieux et de quarts différents et regardez-les travailler. Notez chaque attente, chaque contournement et chaque moment de confusion. Demandez ce qu'elles corrigeraient d'abord. L'observation trouve des problèmes que les enquêtes manquent, car les gens cessent de remarquer la friction avec laquelle ils ont appris à vivre. Convenez à l'avance de ce que vous consignerez et de la façon dont vous l'emploierez.

**2. Cartographiez les moments qui comptent.** Pour le personnel, les moments à fort impact sont généralement le premier jour, la panne d'un ordinateur portable, un changement d'équipe, une demande d'accès et le départ de l'organisation. Écrivez les étapes de chacun et qui les détient. La carte montre les transmissions entre équipes où le retard se cache, ce qui se relie aux mesures de collaboration d'une partie ultérieure (voir le sujet 9.3, Métriques de collaboration et de transmission).

**3. Incluez les personnes en périphérie.** Le personnel ayant des besoins d'accessibilité, les travailleurs postés, le personnel à distance et de terrain, et les sous-traitants sont souvent invisibles dans les moyennes. Segmentez les résultats là où c'est sûr, et passez en revue séparément le groupe le moins bien servi. Traitez l'accessibilité comme une exigence de premier rang. Les normes d'[accessibilité du web](https://en.wikipedia.org/wiki/Web_accessibility) comme les Web Content Accessibility Guidelines donnent une liste de contrôle concrète pour les outils internes, et les problèmes d'accessibilité sont une question légale et éthique dans de nombreuses juridictions.

### Mesurer avec soin

**4. Combinez trois sortes de preuves.** Employez de courtes questions éclair sur des outils et des moments nommés, des mesures du système comme les minutes de perturbation forcée et l'achèvement de l'accueil, et des conversations. Quand deux sortes divergent, enquêtez. Un outil à l'excellente disponibilité et au mauvais score éclair vous dit quelque chose que la disponibilité ne peut pas dire (voir le sujet 5.3, Métriques de disponibilité).

**5. Interrogez sur un outil, non sur l'informatique.** « Dans quelle mesure est-il facile de trouver un document dans le système de fichiers ? » obtient de meilleures réponses que « Comment va l'informatique ? » Faites tourner les outils dans l'enquête éclair pour que personne ne soit interrogé plus d'une ou deux fois par trimestre, et gardez la formulation stable pour que les tendances signifient quelque chose.

**6. Comptez les minutes que les gens perdent.** Le temps perdu est plus facile à comprendre qu'un score. Estimez-le à partir du système là où vous le pouvez, par exemple les invites de redémarrage et les échecs de connexion, et demandez aux gens un chiffre approximatif là où vous ne le pouvez pas. Présentez-le par personne et par mois pour un groupe, avec la méthode, et évitez de multiplier par un salaire pour faire un nombre spectaculaire à moins d'énoncer aussi les hypothèses.

**7. Minimisez et agrégez.** Suivez le principe de la [minimisation des données](https://en.wikipedia.org/wiki/Data_minimization) : ne recueillez que ce dont vous avez besoin, ne le gardez que le temps nécessaire et agrégez aussi tôt que possible. Là où des données pourraient identifier quelqu'un, la [pseudonymisation](https://en.wikipedia.org/wiki/Pseudonymization) réduit le risque. Des règles comme la [k-anonymité](https://en.wikipedia.org/wiki/K-anonymity), qui exige que chaque groupe rapporté contienne au moins k personnes, donnent un moyen simple de supprimer les petites cellules. Énoncez votre k dans le registre.

**8. Tracez une ligne nette contre la surveillance.** N'employez pas les données d'expérience, la télémétrie des postes de travail ou le sentiment pour évaluer des individus, repérer qui est « moins engagé » ou alimenter les évaluations de performance. Dites-le par écrit, et laissez les représentants du personnel ou un comité d'entreprise passer le plan de données en revue là où ils existent. Vérifiez la loi locale et consultez des spécialistes de la confidentialité avant de recueillir toute donnée comportementale. Une confiance perdue rend chaque enquête ultérieure moins honnête.

### Agir sur ce que vous apprenez

**9. Corrigez d'abord la plus grande friction et dites-le.** Classez les problèmes par temps perdu, nombre de personnes et gravité pour les personnes touchées, et financez les premiers. Dites aux gens ce que vous avez corrigé et ce que vous avez choisi de ne pas corriger, avec les raisons. Une correction visible est le plus fort encouragement à continuer de signaler des problèmes.

**10. Planifiez les perturbations autour du travail.** Beaucoup d'interruptions forcées sont évitables. Planifiez les mises à jour hors du temps de concentration, offrez un report dans des limites et regroupez les redémarrages. Passez en revue les minutes de perturbation forcée à côté des objectifs de sécurité pour que l'arbitrage soit explicite, car certaines mises à jour doivent se faire vite (voir le sujet 4.3, Métriques de maîtrise des changements).

**11. Traitez les contournements comme un retour de conception.** Quand les gens emploient un outil non approuvé, demandez ce qu'il fait mieux. La réponse est une exigence que l'outil officiel a manquée. L'[informatique fantôme](https://en.wikipedia.org/wiki/Shadow_IT) porte de vrais risques pour la sécurité et le coût, et une réponse punitive la pousse dans la clandestinité. Préférez adopter la bonne idée, ou expliquer le risque et offrir une alternative sûre.

**12. Partagez le programme avec les personnes qu'il sert.** Montrez les résultats au personnel, tenez une courte revue avec des représentants et demandez quoi changer le trimestre suivant. Le programme est une forme de collaboration continue entre l'informatique et ses utilisateurs, et l'amélioration continue de l'environnement en est le résultat. Reliez-le aux mesures des personnes de la partie suivante (voir le sujet 9.2, Métriques de satisfaction et de bien-être).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Taux de préparation au premier jour | Raccourcir la liste convenue ; marquer des éléments comme prêts avant qu'ils fonctionnent ; retarder la date officielle d'arrivée | Liste écrite dans le registre ; confirmation du nouvel arrivant ; délai jusqu'à la productivité |
| Délai jusqu'à la productivité | Marquer le début de l'horloge plus tard ; clore tôt l'enregistrement d'accueil | Définition de l'horloge dans le registre ; le responsable et le nouvel arrivant confirment tous deux |
| Prévalence des contournements | Décourager les réponses honnêtes en laissant entendre des conséquences ; n'interroger que des groupes satisfaits | Énoncé d'anonymat ; taux de réponse et composition des répondants ; conformité aux garanties de confidentialité |
| Minutes de perturbation forcée | Ne compter que certaines sortes d'interruptions ; déplacer les perturbations vers le groupe non mesuré | Définir tous les types d'interruptions planifiées ; rapporter par groupe, personnel à distance et posté inclus |
| Délai de résolution des demandes d'accessibilité | Clore des demandes avec une correction partielle ; étiqueter des demandes autrement pour éviter l'horloge | Confirmation du demandeur que la solution fonctionne ; revue des demandes non étiquetées |
| Score éclair d'un outil | N'interroger que des utilisateurs contents ; changer la question ; former le personnel à bien répondre | Journal de stabilité de la formulation ; taux de réponse et composition ; lecture des commentaires |
| Conformité aux garanties de confidentialité | Rapporter la conformité sans revue indépendante ; élargir les groupes pour cacher les problèmes | Revue périodique par quelqu'un d'extérieur à l'équipe ; publier les règles (la valeur de k et la suppression) |

Une lecture saine est des nouveaux arrivants qui peuvent travailler dès leur premier jour, un compte en baisse d'interruptions forcées, des contournements qui mènent à de meilleurs outils officiels, et un personnel qui dit faire confiance au programme parce qu'il a vu ce qu'il fait de ses réponses.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Enquêtes éclair | Voix directe, peu coûteuses, faciles à répéter | Fatigue d'enquête ; biais de réponse |
| Télémétrie du système | Objective, continue, sans charge d'enquête | Risque pour la vie privée ; montre des événements mais pas des sentiments |
| Observation et entretiens | Trouve la friction cachée ; bâtit des relations | Prend du temps ; petits échantillons |
| Données fines | Diagnostic précis | Identifie des personnes ; érode la confiance |
| Données agrégées avec suppression | Sûres à partager et à exploiter | Moins de détail ; cachent de petits groupes qui peuvent être en difficulté |
| Contrôles stricts sur les appareils | Sécurité et conformité | Plus de perturbation forcée ; plus de contournements |

La réponse en prose est d'employer les trois sortes de preuves au niveau du groupe, de ne garder le détail que le temps qu'un diagnostic l'exige et de traiter la sécurité et l'expérience comme un arbitrage à discuter ouvertement. Le but est un lieu de travail où des personnes motivées obtiennent ce dont elles ont besoin avec peu d'effort.

## Questions à discuter avec votre équipe

**1. À quoi ressemble le premier jour d'un nouveau collègue, et comment le savons-nous ?**
Demandez à l'équipe de retracer le chemin de l'offre à la première vraie tâche. Qui fait quoi, et où cela attend-il ? Demandez à un arrivant récent de se joindre à la conversation. L'animateur doit se concentrer sur les moments qui ont laissé la personne à attendre ou embarrassée, et convenir d'un changement qui améliorerait le jour du prochain arrivant.

**2. Quel contournement les gens emploient-ils que nous préférerions qu'ils n'emploient pas, et que nous dit-il ?**
Listez les outils non officiels et les étapes manuelles que l'équipe a vus. Pour chacun, demandez quel besoin il satisfait. La conversation trouve souvent une exigence que le service officiel a manquée. Décidez quels contournements adopter, lesquels remplacer par une meilleure option officielle et lesquels interdire avec une explication.

**3. Combien de minutes nos propres actions prennent-elles à nos collègues chaque mois ?**
Estimez les redémarrages forcés, les mises à jour et les invites pour une personne typique. Comparez avec ce que dirait un utilisateur. L'animateur peut demander ce qui changerait si le chiffre était publié. Convenez d'une perturbation à réduire ou à replanifier ce trimestre.

**4. Quelles données sur nos collègues pourrions-nous recueillir, et que devrions-nous promettre de ne jamais en faire ?**
Dressez deux listes : ce qui est techniquement possible et ce que l'équipe recueillera réellement. Rédigez un court énoncé de but et de limites. Demandez à un représentant du personnel de réagir. La discussion montre où se situe la ligne contre la surveillance, et comment l'expliquer.

**5. Qui peine le plus avec nos outils, et sont-ils dans nos données ?**
Pensez aux besoins d'accessibilité, aux travailleurs postés, au personnel à distance et aux nouveaux. Vérifiez si les enquêtes et les journaux les atteignent et si les règles de petits groupes les cachent. Convenez d'une façon d'écouter directement le groupe le moins bien servi.

**6. Qu'avons-nous corrigé le trimestre dernier à cause de ce que nos collègues nous ont dit, et l'ont-ils su ?**
Listez les corrections et la manière dont elles ont été annoncées. Si la liste est courte, discutez de ce qui bloque l'action : responsabilité, financement ou peur. Convenez d'une correction visible à livrer avant la prochaine enquête et d'un message pour l'expliquer.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison sont à la fois utilisatrices et constructrices d'outils internes. Leur propre friction, comme les constructions lentes, les environnements instables et les retards d'accès, ralentit tout ce qu'elles livrent, et les mesures de ce sujet s'appliquent aussi à elles. Elles devraient faire des outils internes une partie du backlog produit avec un responsable et des utilisateurs, et prendre part à l'enquête éclair et aux revues comme des collègues (voir le sujet 9.1, Santé de l'équipe et expérience des développeurs).

### Équipes de service et d'exploitation

L'exploitation et le centre de services façonnent une grande part de l'expérience, et ce sont des employés qui ont leurs propres outils et leur propre charge de travail. Elles devraient envoyer les changements en veillant à la concentration des utilisateurs, garder réactif le canal d'accessibilité et employer les contournements comme retour. Elles devraient aussi protéger leurs propres collègues d'un classement par données d'expérience. Le personnel de soutien est aussi composé d'individus motivés.

### Direction et gouvernance

Les dirigeants fixent la culture de la mesure. Ils devraient demander de la friction supprimée, non des scores relevés, et financer les corrections. Ils devraient protéger par écrit les engagements de confidentialité, résister aux demandes d'employer les données sur des individus et accepter que les contrôles de sécurité aient un coût d'expérience à peser. La gouvernance devrait attendre les règles de confidentialité et leur revue comme partie de tout rapport d'expérience.

### Clients et utilisateurs

Les personnes qui emploient l'informatique interne sont les auteurs de l'expérience. Elles méritent un premier jour qui fonctionne, des outils qui respectent leur concentration, un compte rendu honnête de ce qui est recueilli à leur sujet, un moyen de refuser là où c'est possible et la preuve que parler mène à un changement. Les collègues ayant des besoins d'accessibilité devraient se voir demander comment faire fonctionner le service pour eux, et ne pas être traités comme un cas particulier.

## En pratique : un exemple d'ITIL agile

Le service informatique central d'une université soutient 6 000 employés et exploite un centre de services, une équipe de plateforme et plusieurs équipes produit. Les chiffres ci-dessous sont illustratifs.

Une nouvelle cheffe de l'informatique veut savoir pourquoi les plaintes du personnel sur l'accueil persistent alors que les temps de résolution du centre de services sont dans la cible. Elle demande au responsable du service de mener un programme pilote d'expérience pour les nouveaux arrivants et pour le principal outil de collaboration, bâti avec le conseil du personnel. La condition du conseil est une promesse écrite qu'aucune donnée ne sera employée sur des individus, et il accepte de passer le plan en revue.

L'équipe mesure la préparation au premier jour et le délai jusqu'à la productivité pour les 140 nouveaux arrivants du trimestre précédent, à l'aide du suivi d'accueil et d'une confirmation à une question de la part de l'arrivant et de son responsable. Seuls 46 pour cent des nouveaux arrivants avaient tous les éléments convenus fonctionnels dès le premier jour, et le délai médian jusqu'à la productivité était de 4 jours, avec un 85e percentile de 9 jours. Les raisons, tirées d'entretiens, sont trois demandes distinctes qui attendent chacune une équipe différente, et une étape de préparation des ordinateurs portables qui se termine tard le vendredi. Une courte enquête éclair de l'outil de collaboration, envoyée à un dixième tournant du personnel avec une taille de groupe minimale de 10, montre de plus basses notes parmi le personnel qui travaille le soir et le week-end. Les journaux des postes de travail, agrégés par bâtiment et par quart, montrent une moyenne de 38 minutes par mois d'invites de redémarrage forcé et de mise à jour, avec une longue traîne pour le personnel de nuit, qui subit des redémarrages pendant les heures de travail parce que ses appareils se mettent à jour quand les autres dorment.

L'équipe fait trois changements. Une demande d'accueil unique remplace les trois, avec un responsable nommé. L'étape de préparation passe à une fenêtre en semaine. La planification des mises à jour gagne une fenêtre de report liée aux heures de travail de l'utilisateur. Elle publie les règles de confidentialité dans le registre des métriques : une taille de groupe minimale de 10, aucune donnée individuelle dans aucun rapport et une limite de conservation de six mois pour les journaux bruts. Trois mois plus tard, la préparation au premier jour monte à 81 pour cent, le 85e percentile du délai jusqu'à la productivité tombe à 5 jours et les minutes de perturbation forcée du personnel de nuit baissent d'environ la moitié. Un responsable demande à la cheffe de l'informatique de rapporter quels départements ont le plus de plaintes, pour nommer des équipes à suivre. Elle refuse de classer les départements, et propose de partager les schémas au niveau du groupe et de corriger les causes. La décision est consignée dans le journal des décisions, et le conseil demande d'étendre le programme à un second outil.

## Perspective sectorielle

**Startup.** Tout le monde parle à tout le monde ; l'observation et la conversation trouveront donc l'essentiel de la friction. Faites du premier jour une excellente expérience, car il donne le ton, et gardez la télémétrie minimale. Écrivez tôt les promesses de confidentialité, même si l'équipe est petite.

**Petite entreprise.** Un seul administrateur peut gérer l'accueil et le soutien. Employez une simple liste de contrôle et demandez à chaque nouvel arrivant ce qui manquait. Soyez prudent avec les données de petits groupes : avec une douzaine d'employés, presque toute ventilation identifie quelqu'un ; fiez-vous donc à la conversation.

**Grande entreprise.** Des parcs vastes et variés rendent la segmentation utile et risquée. Segmentez par famille de rôles, type de site et classe d'appareil plutôt que par équipe, appliquez une taille de groupe minimale et associez les représentants du personnel. Alignez le programme avec les fonctions de sécurité, juridique et de confidentialité dès le départ.

**Gouvernement et secteur public.** Les devoirs d'accessibilité, d'égalité et de confidentialité sont souvent légaux, et les comités d'entreprise ou les syndicats peuvent avoir des rôles formels. Traitez les tests d'accessibilité et la consultation comme des parties obligatoires du programme, publiez les règles de confidentialité et évitez de recueillir des données dont le besoin n'est pas clair. Là où les données du personnel sont réglementées, associez le délégué à la protection des données (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont modestes. Les enquêtes éclair et l'observation demandent du temps de personnes et un outil d'enquête. Les données des postes de travail viennent généralement d'un outillage déjà déployé, bien que l'analyse et la revue de confidentialité demandent de l'effort. Le coût le plus grand est la volonté de corriger ce qui est trouvé, ce qui peut signifier changer les processus d'accueil, les politiques d'appareils et les pratiques de mise à jour entre équipes.

Le retour vient du temps récupéré, d'une montée en puissance plus rapide des nouveaux arrivants, de moins de contacts de soutien causés par une friction évitable et de moins d'informatique fantôme. Vous pouvez bâtir le dossier à partir de vos propres chiffres : les minutes de perturbation forcée par personne, les jours jusqu'à la productivité des nouveaux arrivants et les contacts de soutien sur des problèmes qu'une correction a supprimés. Soyez prudent avec un chiffre de productivité unique tiré d'un salaire et de minutes, car il repose sur des hypothèses sur ce que vaut une minute récupérée. Il y a aussi un coût de risque de l'autre côté du bilan : recueillir trop de données sur le personnel peut créer une exposition juridique et abîmer la confiance. Incluez-le dans le coût total de possession.

## Antimodèles et pièges

- **Employer les données d'expérience pour juger des individus.** Cela transforme un programme de soutien en surveillance et met fin aux retours honnêtes. Agrégez, supprimez les petits groupes et dites-le.
- **Ne mesurer que des moyennes.** Les personnes à la pire expérience sont cachées. Regardez la queue et les groupes les moins bien servis.
- **Tout recueillir parce que c'est possible.** Plus de données apportent plus de risque. Recueillez ce qui répond à une question.
- **Sonder sans relâche.** Les gens cessent de répondre. Faites tourner les outils et gardez court.
- **Punir les contournements.** Les gens les cachent et le besoin sous-jacent reste insatisfait. Apprenez-en.
- **Mettre la sécurité et l'expérience dans des salles séparées.** Certains contrôles valent leur coût, et beaucoup non. Discutez de l'arbitrage avec des chiffres.
- **Compter le premier jour comme le problème de quelqu'un d'autre.** L'accueil traverse les ressources humaines, l'informatique et le responsable. Donnez-lui un seul responsable.
- **Ignorer l'accessibilité jusqu'à une plainte.** Construisez et testez avec les personnes concernées dès le départ.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Comprendre la friction | Plaintes seulement | Entretiens ou enquête occasionnels | Observation régulière et enquête éclair pour les outils et moments clés | Preuves combinées d'enquête, de système et de conversation, segmentées en sécurité | Vue conjointe avec les ressources humaines, les installations et les fournisseurs ; le personnel co-détient les priorités |
| Confidentialité et éthique | Aucune règle énoncée | Soin informel | But, minimisation et règles de taille de groupe écrits | Règles revues de façon indépendante ; conformité mesurée | Règles co-conçues avec les représentants du personnel et auditées chez les fournisseurs |
| Action | Corrections sur plainte | Corrections ad hoc | Principale friction dans le backlog avec des responsables | Corrections financées, suivies et annoncées ; perturbation planifiée autour du travail | Améliorations de l'expérience intégrées à la planification entre équipes et fournisseurs |

## Liste de vérification

- [ ] Les moments clés (premier jour, panne d'appareil, demande d'accès, changement d'équipe, départ) sont cartographiés avec des responsables.
- [ ] La préparation au premier jour et le délai jusqu'à la productivité sont mesurés avec une liste écrite et des horloges.
- [ ] Une courte enquête éclair couvre des outils nommés en rotation.
- [ ] Les minutes de perturbation forcée sont mesurées par groupe et revues avec la sécurité.
- [ ] Les demandes d'accessibilité sont étiquetées, suivies et confirmées par le demandeur.
- [ ] Les rapports emploient une taille de groupe minimale et ne montrent jamais d'individus.
- [ ] Un énoncé écrit de but et de limites pour les données d'expérience existe et est partagé.
- [ ] Les représentants du personnel ont revu le plan de données là où de tels organes existent.
- [ ] Les contournements sont recueillis et revus comme retour.
- [ ] Les résultats et les corrections sont partagés avec le personnel chaque trimestre.

## Prompts d'IA

**Cartographiez un moment qui compte.**

```text
Nous voulons améliorer [moment, for example the first day for a new starter]
dans [type of organization]. Les étapes aujourd'hui sont : [list steps and who
owns each]. Dessinez une carte textuelle montrant les transmissions et les
attentes, suggérez où la friction est probable et proposez, pour chaque étape
importante, une mesure parmi ce que disent les gens, une parmi ce que les
systèmes enregistrent et une parmi l'observation. N'inventez pas de chiffres.
Énumérez vos hypothèses et les questions que je devrais poser au personnel.
```

**Rédigez un énoncé de confidentialité pour un programme d'expérience.**

```text
Rédigez un énoncé d'une page en langage clair pour le personnel sur un
programme d'expérience dans [organization type] en [jurisdiction]. Nous
recueillons : [list data]. Notre but est [purpose]. Incluez ce que nous ne ferons
pas (par exemple employer des données sur des individus), la taille de groupe
minimale [number], la conservation [period], qui peut voir les données brutes et
comment le personnel peut soulever des préoccupations. Signalez tout ce que je
devrais revoir avec un spécialiste de la confidentialité ou des représentants du
personnel. Ne donnez pas de conclusions juridiques. Énumérez vos hypothèses.
```

**Analysez des commentaires d'enquête éclair sur un outil.**

```text
Voici [number] commentaires anonymisés sur [tool] de [period] : [paste comments
with personal data removed]. Regroupez-les en thèmes de friction, comptez chaque
thème, donnez deux citations représentatives pour chacun et suggérez quels
thèmes peuvent désigner une cause corrigeable plutôt qu'un besoin de formation.
N'identifiez pas d'individus et n'inférez pas de motifs. Énumérez vos
hypothèses et ce qu'une personne devrait vérifier avant d'agir.
```

**Planifiez une réduction des perturbations.**

```text
Nos postes de travail reçoivent en moyenne [number] interruptions planifiées par
personne et par mois : [list types and frequencies]. Exigences de sécurité :
[list]. Proposez un dispositif qui réduit la perturbation du temps de
concentration (par exemple fenêtres de report, regroupement, planification selon
les heures de travail) tout en respectant les exigences, et décrivez comment
mesurer s'il fonctionne sans suivre des individus. Énumérez vos hypothèses et
les arbitrages que je devrais discuter avec la sécurité.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique d'expérience ou de friction avant de la publier.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique d'expérience révisée garde son vecteur de détournement, son garde-fou et ses règles de confidentialité.

## Points clés à retenir

- Le but est de donner à des personnes motivées l'environnement et le soutien dont elles ont besoin ; mesurez donc la friction et supprimez-la.
- Combinez des questions éclair, des mesures du système et de l'observation, et regardez les groupes en périphérie.
- Comptez les minutes perdues et les interruptions causées par les propres actions de l'informatique, et planifiez autour de la concentration des gens.
- Faites de la confidentialité une règle de conception : minimisez, agrégez, supprimez les petits groupes et ne jugez jamais des individus.
- Traitez les contournements comme un retour, et dites au personnel ce que vous avez corrigé.
- Incluez l'accessibilité dès le départ, et passez le programme en revue avec les personnes qu'il sert.

## Références et lectures complémentaires

1. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
3. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
4. Csikszentmihalyi, M., *Flow: The Psychology of Optimal Experience*, Harper & Row, 1990.
5. Sweller, J., "Cognitive load during problem solving: Effects on learning," *Cognitive Science*, 12(2), 1988.
6. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
7. Sweeney, L., "k-anonymity: a model for protecting privacy," *International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems*, 10(5), 2002.
8. Wikipedia, [Employee experience management](https://en.wikipedia.org/wiki/Employee_experience_management).
9. Wikipedia, [Digital workplace](https://en.wikipedia.org/wiki/Digital_workplace).
10. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
11. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
12. Wikipedia, [Employee monitoring](https://en.wikipedia.org/wiki/Employee_monitoring).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility).
15. Wikipedia, [Data minimization](https://en.wikipedia.org/wiki/Data_minimization).
16. Wikipedia, [Pseudonymization](https://en.wikipedia.org/wiki/Pseudonymization).
17. Wikipedia, [K-anonymity](https://en.wikipedia.org/wiki/K-anonymity).
18. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
