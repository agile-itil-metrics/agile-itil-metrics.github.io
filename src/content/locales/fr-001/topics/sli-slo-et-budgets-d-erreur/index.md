# SLI, SLO et budgets d'erreur

**Un objectif de niveau de service transforme « assez fiable » en un nombre que les utilisateurs, les équipes produit et les équipes d'exploitation peuvent tous voir, et le budget d'erreur qu'il laisse transforme ce nombre en une décision partagée et dépensable sur le risque plutôt qu'en une dispute sur le blâme.**

## Résumé et motivation

Chaque service a déjà un niveau de fiabilité, que quelqu'un l'ait mesuré ou non. Si personne ne l'énonce, les utilisateurs en supposent un, l'équipe produit en suppose un autre et l'équipe d'exploitation en défend un troisième. La différence se découvre pendant une panne. Ce sujet couvre les trois idées liées que l'[ingénierie de la fiabilité des sites (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) emploie pour combler cet écart : l'indicateur de niveau de service, l'objectif de niveau de service et le budget d'erreur.

Un [indicateur de niveau de service (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) est la mesure d'un aspect du service tel que les utilisateurs le vivent. Les aspects typiques sont : une requête a-t-elle réussi, combien de temps a-t-elle pris, les données renvoyées étaient-elles fraîches et étaient-elles correctes. Un bon SLI s'exprime comme un rapport : le nombre d'événements bons divisé par le nombre d'événements valides, sur une fenêtre définie. Un [objectif de niveau de service (SLO)](https://en.wikipedia.org/wiki/Service-level_objective) est la cible de ce rapport sur une période, par exemple « 99,9 pour cent des requêtes de paiement valides réussissent sur 28 jours glissants ». Le **budget d'erreur** est ce que l'objectif permet de voir mal tourner : 100 pour cent moins le SLO. À 99,9 pour cent, le budget est de 0,1 pour cent des événements valides.

Le budget d'erreur change la conversation. Si le service a dépensé peu de son budget, l'équipe a de la marge pour mettre en production plus vite, essayer des changements risqués et mener des expériences. Si le budget est presque épuisé, la même équipe ralentit le travail sur les fonctions et dépense son effort en fiabilité jusqu'à ce que le budget se reconstitue. La décision vient d'un nombre convenu à l'avance ; elle ne dépend donc pas de la personne la plus ancienne ou la plus persuasive de la réunion.

Le **taux de consommation** est la vitesse à laquelle le budget est dépensé, par rapport au rythme qui le dépenserait exactement en entier à la fin de la fenêtre. Un taux de consommation de 1 signifie que le budget sera épuisé exactement à la fin de la fenêtre. Un taux de 10 signifie qu'il sera épuisé en un dixième de la fenêtre. Le taux de consommation est le pont entre le SLO et l'alerte, car il dit l'urgence d'un problème en termes de ce qu'il coûte à l'objectif.

Les visions agile et ITIL se rencontrent ici, et elles emploient un vocabulaire différent pour des idées apparentées. Dans ITIL 4, la gestion des niveaux de service est la pratique qui fixe, mesure et rapporte les niveaux de service, et l'[accord de niveau de service (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) est l'accord documenté entre un fournisseur et un client (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA). Un SLO est une cible interne généralement plus stricte que le SLA et détenue par l'équipe qui exploite le service. Un SLA porte des conséquences, comme des crédits ou des pénalités. Un SLO porte une règle de décision. Les équipes agiles qui détiennent leurs services (« vous le construisez, vous l'exploitez ») emploient les SLO pour rendre le coût de la fiabilité visible dans le même backlog que les fonctions. Les équipes qui suivent la pratique ITIL peuvent traiter les SLI comme la forme mesurable de ce que les clients disent vouloir, et le SLO comme la cible de travail qui garde le SLA en sécurité.

La [disponibilité](https://en.wikipedia.org/wiki/Availability) est le SLI le plus familier et est couverte en détail ailleurs (voir le sujet 5.3, Métriques de disponibilité). La latence, l'exactitude, la fraîcheur et le débit sont aussi des candidats. L'art consiste à choisir des indicateurs à partir de ce qui compte pour les utilisateurs, plutôt qu'à partir de ce qui est facile à collecter. L'usage du processeur d'un serveur est facile à collecter et dit peu de chose sur la possibilité pour un client de payer. La part des requêtes de paiement qui se terminent en moins de deux secondes en dit beaucoup. Pour la latence, rapportez des [percentiles](https://en.wikipedia.org/wiki/Percentile), non des moyennes, car une moyenne cache la queue lente que les utilisateurs remarquent (voir le sujet 1.6, Culture statistique pour les métriques de service, et le sujet 5.4, Métriques de capacité et de performance).

## Principes clés

- **Partir de l'utilisateur, non du serveur.** Choisissez des indicateurs qui décrivent une expérience qu'une personne reconnaîtrait, comme « mon paiement est passé », et remontez à ce qu'il faut mesurer.
- **Une cible inférieure à 100 pour cent est une décision, non un aveu.** La fiabilité parfaite est inatteignable et inabordable, et les utilisateurs ne peuvent généralement pas voir la différence au-delà d'un certain point. Le budget rend cet arbitrage explicite.
- **Fixer l'objectif avec les personnes qui en dépendent.** Le SLO est un accord négocié entre le produit, l'exploitation et les clients, non un nombre choisi par une seule équipe.
- **Convenir des conséquences avant que le budget soit épuisé.** Une politique de budget d'erreur écrite pendant une semaine calme est suivie pendant une semaine de stress. Une politique inventée pendant une panne est contestée.
- **Alerter sur la consommation, non sur chaque soubresaut.** N'appelez une personne que si le budget est consommé assez vite pour menacer l'objectif, et acheminez les consommations plus lentes vers des tickets.
- **Les SLO décrivent des services, jamais des personnes.** Le budget appartient à un service et à son équipe. Ce n'est jamais un score pour un ingénieur.

## Définitions des métriques

Les métriques ci-dessous décrivent le système de SLO d'un service. Les quatre premières sont le cœur de la pratique, et les deux dernières décrivent la santé de la pratique elle-même. Chaque horloge et chaque frontière est énoncée dans la colonne de formule. Les « événements valides » sont les événements qui comptent pour le SLI après les exclusions convenues dans le document du SLO, comme les requêtes des propres tests de charge de l'équipe, qui sont exclues.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Atteinte du SLI | La part des événements valides qui étaient bons, pour un indicateur d'un service | événements bons / événements valides, pour la fenêtre allant du début à la fin de la période de rapport ; les événements exclus par le document du SLO (tests de charge, maintenance planifiée annoncée à l'avance, si le SLO le dit) sont retirés du numérateur et du dénominateur | pourcentage | Télémétrie de l'équilibreur de charge, de l'application ou de sondes synthétiques ; la plateforme de supervision ou d'observabilité | Gestion des niveaux de service ; supervision et gestion des événements | Définition de terminé pour l'exploitabilité ; revue de la santé du service par les parties prenantes | Continue, rapportée chaque jour et par fenêtre |
| Conformité au SLO | Si le SLI a atteint l'objectif sur la fenêtre du SLO, et pour combien de fenêtres récentes | fenêtres dans lesquelles l'atteinte du SLI était à l'objectif ou au-dessus / fenêtres évaluées, sur les 12 derniers mois ; une fenêtre encore ouverte est exclue | pourcentage de fenêtres | Historique d'atteinte du SLI | Gestion des niveaux de service ; amélioration continue | Objectif d'équipe ou accord de travail sur la fiabilité | Mensuelle, avec une tendance trimestrielle |
| Budget d'erreur restant | La part du budget pas encore dépensée dans la fenêtre courante | 1 - (événements mauvais jusqu'ici / événements mauvais permis pour toute la fenêtre), où événements mauvais permis = (1 - SLO) x événements valides attendus pour toute la fenêtre ; l'horloge démarre au début de la fenêtre et s'arrête à sa fin | pourcentage du budget | Atteinte du SLI et prévision de volume | Gestion des niveaux de service ; gestion des risques | Contrôle de préparation à la mise en production ; apport au travail planifié | Quotidienne, revue hebdomadaire |
| Taux de consommation | La vitesse à laquelle le budget est dépensé par rapport au rythme de dépense régulière | (événements mauvais / événements valides sur une période de rétrospection) / (1 - SLO) ; la période de rétrospection est énoncée, par exemple 1 heure ou 6 heures | rapport (1 signifie exactement dans le budget) | Télémétrie du SLI à fine résolution temporelle | Supervision et gestion des événements ; gestion des incidents | Règles d'alerte d'astreinte ; déclencheur de travail en essaim | Continue, évaluée dans les règles d'alerte |
| Respect de la politique de budget | À quelle fréquence la conséquence convenue a été appliquée quand un déclencheur de la politique de budget d'erreur a été atteint | déclencheurs de la période où l'action de la politique a été prise dans le délai convenu / déclencheurs atteints dans la période ; les déclencheurs formellement levés avec un motif consigné sont comptés séparément, non retirés | pourcentage | Document de politique, journal des décisions et historique du backlog | Gestion des niveaux de service ; maîtrise des changements | Accord de travail ; suivi de rétrospective | Trimestrielle |
| Couverture par SLO | La part des parcours utilisateur critiques, ou des services concernés, qui ont un SLO à jour et un SLI fonctionnel | services ou parcours concernés avec au moins un SLO dont les données de SLI sont arrivées dans les 7 derniers jours / services ou parcours concernés ; « concernés » est listé dans le catalogue de services (« service catalogue » en termes ITIL) | pourcentage | Catalogue de services, registre des SLO et configuration de la supervision | Gestion du catalogue de services ; gestion des niveaux de service | Liste de responsabilité de service de l'équipe | Trimestrielle |

La période de rétrospection du taux de consommation et la fenêtre du SLO sont des choix. Une fenêtre glissante de 28 jours couvre des semaines entières. Énoncez le choix dans le document du SLO et gardez-le stable, sinon la tendance induira en erreur.

## Recommandations

### Choisir des indicateurs à partir de ce qui compte pour les utilisateurs

**1. Commencez par les parcours utilisateur critiques.** Listez les trois à six choses qu'un utilisateur doit pouvoir faire pour que le service vaille la peine d'être utilisé, comme se connecter, chercher, payer et télécharger un relevé. Écrivez chacune comme une phrase du côté de l'utilisateur. Puis choisissez le SLI qui montre si cette phrase était vraie. Cela garde les SLO peu nombreux et empêche un catalogue de jauges techniques que personne ne lit.

**2. Exprimez chaque SLI comme événements bons sur événements valides.** Un rapport est facile à expliquer, facile à agréger et facile à transformer en budget. Définissez « bon » avec un seuil que les utilisateurs accepteraient, et définissez « valide » de façon que le trafic que vous ne pouvez raisonnablement pas servir, comme les requêtes bloquées pour abus, soit exclu de manière documentée. Écrivez les deux définitions dans le document du SLO, car le dénominateur est l'endroit où se cachent la plupart des désaccords.

**3. Mesurez aussi près de l'utilisateur que c'est praticable.** Un taux de réussite côté serveur peut être parfait alors qu'un problème de réseau ou de client rend le service inutilisable. Mesurez à l'équilibreur de charge ou en périphérie, et ajoutez une sonde synthétique ou une mesure côté client pour les parcours qui comptent le plus. Chaque point de mesure a un coût et un angle mort ; consignez donc celui qu'emploie chaque SLI (voir le sujet 1.5, Sources de données et instrumentation).

**4. Employez des percentiles pour la latence, avec un seuil.** « 95 pour cent des requêtes de recherche se terminent en moins de 800 millisecondes » est un SLI. « Latence moyenne » n'en est pas un, car quelques requêtes rapides peuvent compenser beaucoup de lentes. Là où cela aide, employez deux seuils, comme une médiane et un 99e percentile, car la queue lente façonne la sensation du service (voir le sujet 5.4, Métriques de capacité et de performance).

### Fixer des objectifs que les gens peuvent défendre

**5. Fixez le premier SLO à partir de la performance actuelle et du besoin des utilisateurs, puis resserrez.** Mesurez le SLI pendant quelques semaines, demandez aux utilisateurs et au personnel de soutien quel niveau ils remarquent, et fixez un objectif que le service peut tenir aujourd'hui avec de la marge. Un objectif fixé bien au-dessus de la performance actuelle est un manquement permanent, et les gens cessent de le regarder. Un objectif fixé bien en dessous de ce que reçoivent les utilisateurs laisse la qualité se dégrader sans qu'on le voie. Revoyez-le après un trimestre.

**6. Gardez le SLO plus strict que le SLA, et gardez-les séparés.** Si un accord avec un client promet 99,5 pour cent, l'objectif de l'équipe pourrait être de 99,9 pour cent, de sorte que le budget est épuisé avant que la ligne contractuelle soit franchie. Ne faites pas du SLO et du SLA le même nombre, et ne rapportez pas l'un comme l'autre. L'accord est un document commercial et juridique, et l'objectif est une règle de décision d'ingénierie (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

**7. Tenez compte des dépendances.** Un service ne peut pas être plus fiable que ce dont il dépend, sauf s'il se dégrade avec grâce. Listez les principales dépendances, y compris les fournisseurs, et demandez ce que leur performance réelle implique pour votre objectif.

### Faire fonctionner le budget comme outil de décision

**8. Écrivez une politique de budget d'erreur avant d'en avoir besoin.** La politique dit ce qui se passe à des niveaux de consommation définis. Une version simple a trois étapes : fonctionnement normal tant qu'il reste du budget, revue supplémentaire des changements risqués et priorité au travail de fiabilité quand une part énoncée a été dépensée, et pause des mises en production de fonctions non essentielles quand il est épuisé, jusqu'à ce que le budget se reconstitue. Nommez qui peut accorder une exception et comment elle est consignée. Les dirigeants du produit et de l'exploitation devraient tous deux la signer, afin que la politique s'applique également aux deux côtés.

**9. Dépensez le budget à dessein.** Un budget qui n'est jamais touché suggère que l'objectif est trop strict ou que l'équipe est trop prudente. Employez le budget disponible pour des expériences, une cadence de mise en production plus rapide, des déploiements canari et des [bascules de fonctionnalité](https://en.wikipedia.org/wiki/Feature_toggle) qui permettent de tester en production avec une exposition limitée, et employez les [mises en production canari](https://en.wikipedia.org/wiki/Canary_release) pour attraper les problèmes pendant que seule une petite part des utilisateurs est touchée. Traitez un budget constamment intact comme une invitation à demander si l'objectif correspond à ce dont les utilisateurs ont besoin (voir le sujet 4.5, Métriques des versions et des déploiements).

**10. Alertez sur plusieurs taux de consommation.** Une consommation rapide, comme un taux assez élevé pour dépenser une grande part du budget en une heure, appelle une personne. Une consommation lente, comme un taux modeste qui épuiserait quand même le budget en quelques jours, crée un ticket pour les heures de travail. Employer deux fenêtres de rétrospection ou plus attrape à la fois les pannes soudaines et les fuites lentes, et réduit les appels pour de brefs soubresauts qui coûtent peu de budget. Le chapitre du Site Reliability Workbook sur l'alerte sur les SLO explique le schéma, et les seuils devraient être réglés pour votre service plutôt que copiés (voir le sujet 5.5, Métriques de supervision et de qualité des alertes).

**11. Reliez les incidents, les problèmes et l'apprentissage au budget.** Après un incident, consignez la part de budget qu'il a consommée à côté de sa durée et de son impact. Employez ce nombre pour prioriser l'enregistrement de problème et les actions de suivi (voir le sujet 4.1, Métriques de gestion des problèmes, et le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage). Le coût en budget donne aussi aux revues d'incidents majeurs une unité commune pour comparer des pannes très différentes (voir le sujet 3.4, Métriques des incidents majeurs).

### Garder la pratique honnête et vivante

**12. Passez les SLO en revue au regard de la réalité chaque trimestre.** Comparez le SLO avec les contacts du support, les plaintes et les résultats de satisfaction. Si les utilisateurs sont mécontents alors que le SLO est vert, le SLI est faux ou la cible est trop lâche. Si le SLO est rouge et que personne ne se plaint, la cible est peut-être trop stricte. Consignez chaque changement et son motif, et montrez le changement sur le graphique de tendance (voir le sujet 6.2, Accords de niveau d'expérience).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Atteinte du SLI | Rétrécir les événements « valides » jusqu'à ce que les échecs disparaissent, par exemple en excluant les requêtes réessayées ou des classes d'erreurs entières ; ne mesurer que le composant le plus sain ; ne sonder que depuis un emplacement favorable | Publier la définition du SLI et les exclusions dans le document du SLO avec un journal des changements ; comparer le SLI aux contacts du support et aux plaintes des utilisateurs ; revue régulière des événements exclus et de leur volume |
| Conformité au SLO | Fixer l'objectif assez bas pour toujours passer ; changer la longueur de la fenêtre après une mauvaise période ; requalifier un manquement en période de maintenance | Objectif fixé avec l'apport des utilisateurs et revu selon un calendrier ; fenêtre fixée dans le document ; compte des exclusions et des changements non planifiés de la fenêtre rapporté à côté de la conformité |
| Budget d'erreur restant | Requalifier des événements mauvais en exclus ; gonfler le volume attendu pour que le compte d'événements mauvais permis paraisse plus grand ; remettre la fenêtre à zéro tôt | Événements mauvais permis calculés à partir du volume réel en fin de fenêtre ; volume d'événements exclus montré à côté du budget ; dates de fenêtre fixées à l'avance |
| Taux de consommation | Régler les seuils d'alerte pour que la consommation ne déclenche jamais ; employer une rétrospection si longue que les consommations rapides se diluent | Test de couverture des alertes sur des incidents passés (« cette règle aurait-elle appelé ? ») ; taux d'alertes actionnables et compte de détections manquées (voir le sujet 5.5, Métriques de supervision et de qualité des alertes) |
| Respect de la politique de budget | Accorder des exceptions de routine ; écrire une politique dont les déclencheurs ne sont jamais atteignables ; compter un ticket de fiabilité symbolique comme l'action de la politique | Exceptions comptées et revues séparément ; part des exceptions dans la période ; travail de fiabilité accompli (voir le sujet 4.1, Métriques de gestion des problèmes) |
| Couverture par SLO | Ajouter un SLO trivial à chaque service pour relever le pourcentage ; compter un parcours comme couvert alors qu'aucune donnée n'arrive | Contrôle de fraîcheur des données de SLI (données arrivées dans les 7 derniers jours) ; revue pour savoir si le SLO couvre un parcours critique, non un point d'accès secondaire |

Une lecture saine montre un SLI qui suit ce que rapportent les utilisateurs, un objectif tantôt manqué et tantôt tenu avec marge, et un budget dépensé à dessein. La politique est appliquée quand son déclencheur est atteint, les exceptions sont rares et consignées, et chaque changement de définition est visible sur le graphique. Un service toujours à 100 pour cent de budget restant, ou toujours en manquement, mérite une conversation sur l'objectif, ni louange ni blâme. Souvenez-vous que tout chiffre isolé est une invitation à poser une question (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| SLI par parcours utilisateur | Correspondent à ce que ressentent les utilisateurs ; peu nombreux ; faciles à expliquer aux non-ingénieurs | Demandent un effort d'instrumentation de bout en bout ; peuvent manquer des défauts internes qui n'ont pas encore atteint les utilisateurs |
| SLI de composant ou de ressource (processeur, mémoire, profondeur de file) | Peu coûteux à collecter ; utiles pour le diagnostic et la capacité | Mauvais substituts de l'expérience des utilisateurs ; produisent de nombreuses alertes qui ne comptent pas |
| Fenêtre glissante | Lisse ; pas de falaise en fin de mois ; toujours à jour | Plus difficile à expliquer aux dirigeants qu'un mois civil ; une mauvaise journée s'attarde pendant toute la fenêtre |
| Alerte sur le taux de consommation | Appelle quand l'objectif est réellement en danger ; moins de fausses alarmes | Plus complexe à configurer et à tester ; les seuils doivent être réglés par service |

Choisissez peu de SLI, fixez-les avec les utilisateurs et laissez le budget décider du rythme du changement. La bonne rigueur est l'objectif le plus lâche qui garde encore les utilisateurs satisfaits, car chaque neuf supplémentaire coûte plus que le précédent.

## Questions à discuter avec votre équipe

**1. Que doit pouvoir faire un utilisateur de ce service, et comment saurions-nous s'il ne le pouvait pas ?**
Demandez à chaque personne d'écrire les trois choses les plus importantes qu'un utilisateur fait avec le service, sans regarder aucun tableau de bord. Comparez les listes et notez les différences entre produit, exploitation et soutien. Demandez ensuite lesquels de ces parcours ont actuellement un SLI. L'animateur doit chercher les parcours importants sans mesure et les mesures qui ne décrivent aucun parcours.

**2. Si notre SLO était de 99,9 pour cent et que nous le tenions, les utilisateurs seraient-ils contents, et comment le savons-nous ?**
Placez le SLO actuel à côté du dernier trimestre de contacts du support, de plaintes et de résultats de satisfaction. Demandez s'ils concordent. Si le SLO est vert et que les utilisateurs sont mécontents, le SLI ou la cible demande du travail. Si les utilisateurs sont contents et que le SLO est rouge, la cible est peut-être plus stricte que nécessaire. Convenez d'une action pour rapprocher l'objectif et l'expérience.

**3. Que ferions-nous réellement différemment si le budget d'erreur était épuisé ?**
Lisez à voix haute la politique de budget d'erreur actuelle, ou rédigez-en une ensemble s'il n'en existe pas. Demandez qui arrêterait quoi, et qui a l'autorité d'accorder une exception. L'animateur doit insister pour obtenir des actions concrètes, comme suspendre les mises en production non essentielles et affecter des personnes nommées au travail de fiabilité, plutôt que des intentions générales. Une politique que personne ne croit qu'elle sera suivie est pire qu'aucune politique.

**4. Quand avons-nous pris pour la dernière fois un risque parce que nous avions du budget en réserve ?**
Discutez de la question de savoir si l'équipe emploie son budget ou ne fait que le garder. Regardez le dernier trimestre : y a-t-il eu une période où le budget était presque intact alors que les mises en production étaient lentes ? Demandez ce que l'équipe aurait essayé si elle avait su que c'était sûr. Cette question fait ressortir l'excès de prudence, et la réponse désigne souvent un déploiement canari, une bascule ou une chaîne de livraison plus rapide qui permettrait à l'équipe de bien employer son budget.

**5. Lesquelles de nos alertes se seraient déclenchées à temps pour notre dernier mauvais incident, et lesquelles se seraient déclenchées pour rien ?**
Prenez le dernier incident important et rejouez l'historique des alertes face à lui. Comptez les appels arrivés, combien de temps après le début de l'impact, et combien sont arrivés pour des événements qui ont coûté presque aucun budget. Discutez de la question de savoir si des alertes sur le taux de consommation auraient mieux fait. Le but est une courte liste de changements d'alertes, chacun avec un responsable, et non une discussion de blâme sur qui était d'astreinte.

**6. Qui détient chaque SLO, et quand en avons-nous changé un pour la dernière fois à dessein ?**
Listez les SLO et écrivez le responsable à côté de chacun, comme équipe ou rôle. Demandez quand chacun a été revu pour la dernière fois et ce qui a changé. Un SLO que personne n'a touché depuis un an est le signe qu'il n'éclaire plus les décisions. Convenez d'une date de revue pour chacun, et de qui a le droit de retirer un SLO qui a cessé d'être utile.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison gagnent une règle claire sur la vitesse à laquelle avancer. Quand il reste du budget, elles peuvent mettre en production plus souvent et essayer des changements plus audacieux. Quand il est bas, elles mettent le travail de fiabilité dans le backlog sans longue négociation. Elles devraient aider à choisir les indicateurs parce qu'elles savent quels parcours comptent, et instrumenter les nouvelles fonctions en pensant au SLI dès le départ (voir le sujet 2.8, Métriques DORA). Le budget est une ressource d'équipe avec laquelle planifier, jamais un nombre à cacher.

### Équipes de service et d'exploitation

Les équipes d'exploitation emploient les SLO pour décider de ce qui mérite un appel et de ce qui peut attendre le matin. L'alerte sur le taux de consommation réduit le bruit et relie le travail d'astreinte à ce que ressentent les utilisateurs (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte). Elles gardent honnêtes les définitions des SLI, entretiennent la télémétrie qui les sous-tend et consignent le coût en budget dans les enregistrements d'incidents et de problèmes.

### Direction et gouvernance

Les dirigeants devraient poser trois questions : quel est l'objectif, combien de budget reste-t-il et que ferons-nous s'il s'épuise ? Ils signent la politique de budget d'erreur et soutiennent l'équipe quand la politique dit de ralentir. Ils évitent de transformer la conformité au SLO en métrique de prime, ce qui invite à rétrécir les définitions et à fixer des cibles molles.

### Clients et utilisateurs

Les clients gagnent quand l'objectif reflète ce dont ils ont besoin et quand ils peuvent voir comment le service se comporte par rapport à lui. Ils devraient être consultés quand l'objectif est fixé, car leur tolérance à la lenteur ou à l'indisponibilité varie selon la tâche et l'heure du jour. Les mesures d'expérience, comme la satisfaction et l'effort, vérifient si le SLO saisit ce qu'ils ressentent (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne de taille moyenne a une équipe de paiement, une équipe de plateforme et un centre de services. Le service de paiement est vital pour l'entreprise. Tous les chiffres de cet exemple sont illustratifs.

L'équipe définit un SLI pour le parcours « payer une commande » : la part des requêtes de paiement valides qui renvoient un succès en moins de 2 secondes, mesurée à l'équilibreur de charge. Les requêtes valides excluent les propres tests de charge de l'équipe et les requêtes que le service antifraude rejette par conception. Le SLO est de 99,9 pour cent sur 28 jours glissants. La fenêtre porte 12 000 000 de requêtes valides attendues, de sorte que le budget est de 12 000 requêtes mauvaises (0,1 pour cent). La politique de budget d'erreur, signée par le chef du produit et le chef de la plateforme, a trois niveaux : à 50 pour cent du budget dépensé, les changements risqués exigent un second relecteur et un déploiement canari ; à 75 pour cent, le travail de fiabilité prend la priorité à la prochaine conversation de planification ; à 100 pour cent, les mises en production de fonctions non essentielles sont suspendues jusqu'à ce que le budget se reconstitue.

Au jour 10 de la fenêtre, l'équipe voit 7 800 requêtes mauvaises sur environ 4 285 714 attendues jusqu'ici, ce qui donne une atteinte du SLI d'environ 99,82 pour cent, 65 pour cent du budget dépensé et une fenêtre écoulée à 36 pour cent seulement. Le taux de consommation sur la période est d'environ 1,8 ; à ce rythme, le budget est épuisé vers le jour 15. Un mauvais déploiement a représenté 5 000 des échecs. L'enregistrement d'incident montre que la panne a duré 22 minutes, la revue d'incident majeur identifie un contrôle manquant dans la chaîne de livraison et le coût en budget de l'incident est consigné dans l'enregistrement de problème (voir le sujet 4.1, Métriques de gestion des problèmes).

L'équipe suit la politique. L'action du deuxième niveau s'applique aussitôt, de sorte que les changements risqués exigent un déploiement canari, et la réunion de planification place le contrôle de la chaîne de livraison en tête de la file de travail. Le responsable de produit accepte une pause sur une fonction de promotion non urgente. Au jour 28, le budget est dépensé à 94 pour cent, et l'équipe termine la fenêtre dans l'objectif.

Le risque de détournement apparaît dans la revue. Une autre équipe, qui exploite le service de recherche du détaillant, a rapporté 99,95 pour cent pour le trimestre alors que le centre de services consignait une hausse des contacts « la recherche ne marche pas ». En enquêtant, l'équipe de plateforme a constaté que l'équipe de recherche avait redéfini « valide » pour exclure les requêtes réessayées dans les 5 secondes, ce qui retirait beaucoup de vrais échecs. La revue a rétabli la définition d'origine, rétabli le trimestre et ajouté deux garde-fous : tout changement de définition est consigné dans le document du SLO avec un motif, et l'atteinte du SLI est comparée chaque mois aux contacts du support. Personne n'a menti, puisque le changement avait été fait pour réduire le bruit ; la correction a donc été une définition plus claire, non une réprimande.

## Perspective sectorielle

**Startup.** Commencez avec un SLO pour le parcours le plus important, mesuré en périphérie, avec une politique simple qui tient sur une page. Ne construisez pas de plateforme pour des dizaines de SLO. Le budget aide une petite équipe à moins se disputer sur la question de savoir s'il faut livrer un vendredi.

**Petite entreprise.** Une petite entreprise s'appuie souvent sur des outils hébergés et des fournisseurs ; le SLI peut donc venir des données d'état d'un fournisseur ou d'une simple sonde externe. Lisez par écrit les niveaux de service du fournisseur et vérifiez-les au regard de vos propres besoins.

**Grande entreprise.** De nombreux services, équipes et fournisseurs relèvent l'enjeu de la cohérence. Fournissez un gabarit partagé pour les documents de SLO, un registre commun et une façon standard de calculer l'atteinte et le budget, afin que les dirigeants puissent comparer et consolider sans se disputer sur les définitions. Gardez le SLO détenu par l'équipe du service et le registre tenu de façon centrale.

**Gouvernement et secteur public.** Les services doivent souvent respecter des cibles légales ou publiées, et un échec peut être rapporté publiquement. Gardez l'engagement contractuel ou légal séparé de l'objectif interne, et assurez-vous que le SLO interne est plus serré. Documentez la définition du SLI, les exclusions et la filiation des données pour l'audit, et prévoyez l'accessibilité et les utilisateurs qui ne peuvent pas choisir un autre fournisseur (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est de réduire les disputes et d'améliorer les décisions sur la fiabilité. Sans objectif, le travail de fiabilité concurrence les fonctions selon la force de ceux qui argumentent le plus fort. Avec un objectif et un budget, l'arbitrage est visible et convenu à l'avance, et les utilisateurs obtiennent un service aussi fiable que nécessaire, sans que l'équipe paie pour de la fiabilité au-delà de ce point.

Le coût a quatre parties. La première est la conception : des ateliers pour choisir les parcours, les indicateurs et les objectifs, et pour écrire la politique. La deuxième est l'instrumentation : télémétrie au bon endroit, sondes et chaîne qui transforme les événements en atteinte et en budget (voir le sujet 1.5, Sources de données et instrumentation). La troisième est l'exploitation : règles d'alerte, tableau de bord, revue trimestrielle et temps pour tenir les définitions à jour. La quatrième est le coût d'opportunité quand la politique suspend le travail sur les fonctions, qui est le coût de respecter l'accord et la raison de le convenir avant que la pression arrive.

Le retour apparaît dans des schémas qu'une équipe peut suivre elle-même : moins d'appels qui n'ont exigé aucune action, des débats plus courts sur la mise en production ou non, du travail de fiabilité planifié avant que le budget s'épuise plutôt qu'après un incident majeur, et moins de surprises pour les clients. Décrivez le bénéfice en comparant les propres chiffres de l'équipe avant et après, comme les appels par rotation et la part du budget consommée par le plus gros incident.

## Antimodèles et pièges

- **Trop de SLO.** Des dizaines d'objectifs diluent l'attention, et personne ne peut dire lequel compte. Commencez par les parcours utilisateur critiques et retirez le reste.
- **SLO égal SLA.** Rapporter un nombre comme les deux supprime la marge de sécurité et mêle une règle d'ingénierie à une promesse commerciale. Gardez l'objectif plus strict que l'accord.
- **Une politique jamais appliquée.** Si le budget s'épuise et que rien ne change, la pratique perd sa crédibilité. Faites signer la politique par les dirigeants et consignez chaque exception avec son motif.
- **Employer le budget comme fiche de notes pour les personnes.** Classer les ingénieurs ou le personnel d'astreinte selon le budget dépensé amène les gens à cacher des incidents et à rétrécir les définitions. Attribuez le budget au service et discutez des causes au niveau du système (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).
- **Alerter sur chaque creux.** Appeler sur des symptômes bruts crée de la fatigue d'alerte et apprend aux gens à ignorer les appels. Appelez sur le taux de consommation et envoyez les consommations lentes vers des tickets.
- **Fixer puis oublier.** Un SLO que personne ne revoit s'éloigne de ce dont les utilisateurs ont besoin. Planifiez une revue trimestrielle et consignez ce qui a changé et pourquoi.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Indicateurs et objectifs | Fiabilité décrite en mots ; disponibilité des serveurs rapportée | Certaines équipes définissent des SLI ; les cibles varient et sont rarement revues | Les parcours utilisateur critiques ont des SLI et des SLO documentés dans un gabarit partagé | Les SLO sont suivis dans le temps, vérifiés au regard des retours des utilisateurs, et resserrés ou relâchés sur preuves | Les SLO sont convenus avec les clients et les fournisseurs et alignés sur les services dépendants et les contrats |
| Budget d'erreur et politique | Pas de budget ; fiabilité contre fonctions décidée par la dispute | Un budget est calculé pour quelques services ; aucune conséquence convenue | Une politique écrite, signée par le produit et l'exploitation, avec des déclencheurs définis | Respect de la politique mesuré, exceptions revues, le budget éclaire la planification des mises en production | Décisions de budget coordonnées entre équipes qui partagent des dépendances ; politique révisée quand les conditions changent |
| Alerte et réponse | Alertes à seuil sur ressources brutes ; beaucoup d'appels | Quelques alertes sur le taux de consommation ; seuils copiés d'exemples | Alertes sur le taux de consommation à fenêtres multiples pour les SLO clés, avec des tickets pour la consommation lente | Qualité des alertes mesurée et réglée à l'aide d'incidents passés | Alertes alignées sur les chaînes de services, et amélioration pilotée par des revues conjointes |

## Liste de vérification

- [ ] Les parcours utilisateur critiques du service sont listés, chacun écrit du côté de l'utilisateur.
- [ ] Chaque SLI est défini comme événements bons sur événements valides, avec les exclusions écrites.
- [ ] Les SLI de latence emploient des percentiles et un seuil énoncé, non des moyennes.
- [ ] Chaque SLO énonce sa cible, sa fenêtre et l'endroit où le SLI est mesuré.
- [ ] Le SLO est plus strict que tout SLA, et les deux sont rapportés séparément.
- [ ] Une politique de budget d'erreur existe, est signée par les dirigeants du produit et de l'exploitation, et nomme qui peut accorder des exceptions.
- [ ] Les alertes sur le taux de consommation emploient au moins deux périodes de rétrospection, et les consommations lentes créent des tickets plutôt que des appels.
- [ ] Chaque enregistrement d'incident montre le budget qu'il a consommé.
- [ ] L'atteinte du SLI est comparée chaque mois aux contacts du support et aux résultats de satisfaction.
- [ ] Chaque SLO a un responsable (une équipe ou un rôle) et une date de revue, et les changements sont consignés avec leurs motifs.
- [ ] Aucun résultat de SLO n'est employé pour classer ou récompenser des individus.

## Prompts d'IA

**Rédigez des SLI candidats à partir de parcours utilisateur.**

```text
J'exploite [service name], employé par [type of users] pour [list of critical
user journeys]. Nous pouvons mesurer à [list of measurement points, for example
load balancer, application logs, synthetic probe]. Pour chaque parcours,
proposez un ou deux SLI candidats écrits comme événements bons sur événements
valides, avec une définition suggérée de « bon », de « valide » et des
exclusions. Notez les forces et les angles morts de chaque point de mesure.
N'inventez ni valeurs cibles ni références ; demandez-moi ce que les utilisateurs
tolèrent. Énumérez vos hypothèses.
```

**Rédigez une politique de budget d'erreur.**

```text
Aidez-moi à rédiger une politique de budget d'erreur pour [service name] avec un
SLO de [target] sur [window]. Les parties prenantes sont [product role] et
[operations role]. Proposez des niveaux de déclenchement, l'action à chacun, qui
peut accorder une exception et comment elle est consignée, et comment la
politique est revue. Tenez-vous-en à une page et signalez les décisions qui
exigent un parrain humain. N'inventez pas de seuils tirés d'autres organisations ;
présentez des options et des arbitrages. Énumérez vos hypothèses.
```

**Examinez un SLO à la recherche de risques de détournement.**

```text
Voici notre document de SLO pour [service name] : [paste SLI definition,
exclusions, target, window, and change log]. Identifiez les façons dont le SLI
pourrait être rétréci, la fenêtre ou la cible changée, ou des événements exclus
de manière à faire paraître les résultats meilleurs que l'expérience des
utilisateurs. Pour chaque risque, suggérez une métrique ou pratique de
garde-fou. Ne supposez aucune intention. Énumérez vos hypothèses et les
questions auxquelles je devrais répondre.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets apparentés, comme la disponibilité, la qualité des alertes et les incidents majeurs, et le garde-fou qui doit se trouver à côté de chaque mesure de SLO.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier que les modifications de ce sujet gardent chaque métrique du tableau de détournement et chaque renvoi intitulés.

## Points clés à retenir

- Choisissez peu de SLI à partir de ce que font les utilisateurs, et exprimez chacun comme événements bons sur événements valides.
- Un SLO inférieur à 100 pour cent est une décision sur le risque, et le budget d'erreur est la marge que cette décision laisse au changement.
- Écrivez la politique de budget d'erreur à l'avance, signez-la au niveau de la direction et consignez chaque exception.
- Alertez sur le taux de consommation avec plus d'une fenêtre de rétrospection, afin que les appels reflètent un vrai risque pour l'objectif.
- Gardez les définitions : consignez chaque changement et comparez les résultats du SLI à ce que rapportent les utilisateurs.
- Attribuez le budget aux services et aux équipes, jamais aux individus, et passez chaque SLO en revue au moins chaque trimestre.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Jones, C., Wilkes, J., Murphy, N., and Smith, C., "Service Level Objectives," chapter 4 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/service-level-objectives/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. "Implementing SLOs," chapter 2 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/implementing-slos/
5. "Alerting on SLOs," chapter 5 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/alerting-on-slos/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
9. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
10. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Availability](https://en.wikipedia.org/wiki/Availability).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
