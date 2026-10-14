# Sources de données et instrumentation

**Une métrique ne vaut que ce que valent les événements qui la sous-tendent ; nommez donc le système de référence de chaque chiffre, capturez les événements automatiquement au moment où ils se produisent et testez la chaîne de données aussi soigneusement que vous testez le graphique.**

## Résumé et motivation

La plupart des programmes de métriques consacrent leur effort aux tableaux de bord et presque rien aux tuyaux qui les alimentent. C'est à l'envers. Un graphique soigné construit sur des horodatages incohérents, un champ de statut que personne ne met à jour ou une intégration qui s'est arrêtée en silence le mois dernier paraît faire autorité tout en étant faux. Ce sujet couvre le socle peu glorieux du reste du livre : d'où viennent les données de service et de livraison, quelle est la fiabilité de chaque source et quels défauts de qualité des données invalident une métrique avant que quiconque s'en aperçoive.

Les sources se répartissent en quelques familles. Un outil de [gestion des services informatiques (ITSM)](https://en.wikipedia.org/wiki/Information_technology_service_management) enregistre les incidents, les demandes, les problèmes et les changements, qu'[ITIL](https://en.wikipedia.org/wiki/ITIL) traite comme les enregistrements centraux de l'exploitation des services. Un [système de suivi de tickets](https://en.wikipedia.org/wiki/Issue_tracking_system) enregistre le backlog et le mouvement des éléments de travail des équipes agiles. Le [contrôle de version](https://en.wikipedia.org/wiki/Version_control) enregistre les validations, les branches et les fusions. Une chaîne d'[intégration et de livraison continues (CI/CD)](https://en.wikipedia.org/wiki/CI/CD) enregistre les constructions, les résultats de tests et les déploiements. Les plateformes de supervision et d'[observabilité](https://en.wikipedia.org/wiki/Observability_(software)) émettent de la télémétrie : métriques, journaux et traces issus des systèmes en fonctionnement. Une [base de données de gestion des configurations (CMDB)](https://en.wikipedia.org/wiki/Configuration_management_database) enregistre les services et les composants auxquels les choses se rattachent. Les enquêtes enregistrent ce qu'aucun système ne peut observer, comme la satisfaction et l'effort.

Un événement de déploiement écrit par une chaîne est objectif et difficile à falsifier, un statut de ticket modifié des heures après le travail est un souvenir, et une réponse d'enquête est une perception. Savoir quel genre d'enregistrement se cache derrière un chiffre vous dit quel défaut chercher en premier.

Les points de vue agile et ITIL se rejoignent sur les mêmes données : les deux sont des machines à états dotées d'horodatages ; enregistrez donc chaque changement d'état comme un événement avec une heure fiable et dérivez les métriques des événements.

Trois termes reviennent dans ce sujet. Un **système de référence** est la seule source qui fait autorité pour un fait, par exemple la chaîne pour « un déploiement a eu lieu ». L'**instrumentation** est la capture délibérée d'événements, par du code, de la configuration ou une intégration d'outils, afin qu'une métrique puisse être calculée sans que personne la saisisse. Un **modèle de statuts** est l'ensemble des états dans lesquels un élément de travail ou un enregistrement peut se trouver et des passages autorisés entre eux. Le modèle de statuts décide quelles horloges peuvent être calculées.

À l'échelle de la grande entreprise et du secteur public, le problème s'aggrave. Les données passent par des connecteurs, des tâches d'[extraction, transformation et chargement (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load) et des couches de reporting, et chaque saut est une occasion pour le sens de dériver. Un champ qui signifie une chose à la source peut signifier quelque chose de subtilement différent dans l'entrepôt, et le chiffre semble toujours plausible. Le remède est de raccourcir la distance entre l'événement et le tableau de bord, et de vérifier la chaîne selon un calendrier.

## Principes clés

- **Capturer des événements, non des synthèses.** Stockez les changements d'état bruts avec leurs horodatages et calculez les métriques à partir d'eux, pour qu'une définition puisse changer sans perdre l'historique.
- **Préférer l'observation au déclaratif.** Là où un système peut voir l'événement, utilisez-le ; réservez les déclarations des personnes à ce que seules les personnes peuvent dire.
- **Nommer un système de référence par fait.** Des sources en double divergent, et le désaccord érode la confiance dans les deux.
- **Concevoir le modèle de statuts avant la métrique.** Une horloge ne peut pas être calculée à partir d'états qui n'existent pas ou qui signifient des choses différentes selon les équipes.
- **Traiter la chaîne de données comme un produit.** Elle a des responsables, des tests, une supervision et un journal des changements, car la qualité des données se dégrade en silence.
- **Montrer la provenance.** Chaque chiffre d'un tableau de bord devrait ramener à ses enregistrements sources en un ou deux clics.
- **Ne collecter que ce que vous utiliserez, et le protéger.** Chaque champ est un coût et, quand il concerne des personnes, un devoir de protection de la vie privée.

## Définitions des métriques

Les métriques ci-dessous mesurent la santé de l'approvisionnement en données lui-même. Elles sont le tableau de bord des instruments.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des sources | Part des services et équipes dans le périmètre dont les événements parviennent automatiquement au magasin de métriques | services ou équipes avec un flux automatisé / services ou équipes dans le périmètre ; le « périmètre » est listé dans le registre des métriques | pourcentage | Registre des métriques et configuration de la chaîne | Mesure et reporting ; gestion de la configuration des services | Accord de travail de l'équipe sur l'outillage | Trimestrielle |
| Complétude des horodatages | Part des éléments de travail clos qui portent tous les horodatages nécessaires aux horloges de la métrique | éléments clos avec tous les horodatages de changement d'état requis / éléments clos dans la période ; les éléments encore ouverts sont exclus | pourcentage | Historique de l'outil ITSM ou du gestionnaire de tickets | Gestion des incidents ; gestion des demandes de service | Historique du tableau ou du flux de travail | Mensuelle |
| Taux d'antidatage | Part des changements d'état enregistrés après coup, mesurée par l'écart entre l'heure de l'événement et l'heure de sa saisie | changements d'état saisis plus de 24 heures après l'heure de l'événement / changements d'état dans la période ; l'horloge démarre à l'événement et s'arrête à la saisie | pourcentage | Piste d'audit du gestionnaire de tickets, ou heure d'événement de la chaîne comparée à l'heure de saisie | Maîtrise des changements ; gestion des incidents | Définition de terminé | Mensuelle |
| Fraîcheur des données | Ancienneté des données les plus récentes d'un tableau de bord au moment où il est consulté | heure de consultation moins heure d'événement la plus récente chargée ; rapportez la médiane et le 95e percentile | heures | Journal d'exécution de la chaîne et journal de chargement du tableau de bord | Mesure et reporting | Préparation de la revue par les parties prenantes | Hebdomadaire |
| Écart de rapprochement | Désaccord entre deux sources pour le même comptage | différence absolue entre les deux comptages / comptage de la source de référence, pour une période et un périmètre fixés | pourcentage | Source de référence et couche de reporting | Gestion des niveaux de service ; gestion financière | Contrôles du rapport de version | Mensuelle |
| Dérive du modèle de statuts | Nombre de noms de statuts ou de transitions distincts en usage comparé au modèle documenté | statuts ou transitions non documentés observés dans la période (comptage) ; les documentés sont exclus | nombre | Configuration du flux de travail du gestionnaire de tickets et historique des événements | Amélioration continue | Accords de travail sur le flux de travail | Trimestrielle |
| Taux de réponse aux enquêtes | Part des personnes invitées qui ont rempli une enquête | réponses complètes / invitations remises ; les invitations rejetées sont exclues | pourcentage | Outil d'enquête | Gestion des niveaux de service ; expérience client | Revue par les parties prenantes et retours d'amélioration | Par vague d'enquête |

La complétude des horodatages ne compte que les éléments clos, de sorte qu'un backlog de vieux éléments ouverts ne peut pas masquer une lacune. Le taux d'antidatage emploie un seuil de 24 heures à titre d'exemple ; une équipe choisit un seuil adapté à son travail et l'écrit.

## Recommandations

### Associer chaque métrique à sa source

**1. Construisez une carte des sources avant de construire un tableau de bord.** Pour chaque métrique, consignez le système de référence, l'événement qui démarre l'horloge, l'événement qui l'arrête, le responsable de la source et le mode de défaillance connu. Si vous ne pouvez pas nommer le système, vous ne savez pas encore d'où vient le chiffre. Gardez la carte dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

**2. Choisissez un système de référence par fait.** Un déploiement est enregistré par la chaîne, un incident par l'outil ITSM, un changement de code par le contrôle de version, une relation de service par la CMDB. Là où deux outils détiennent le même fait, décidez lequel l'emporte et faites lire l'autre à partir de lui. Le rapprochement devient alors un contrôle, non un débat.

### Capturer les événements au moment où ils se produisent

**3. Instrumentez l'événement, non le rapport.** Laissez la chaîne enregistrer le déploiement, l'hébergeur de contrôle de version enregistrer la fusion et le système de supervision enregistrer l'alerte. Les données qui dépendent de quelqu'un qui pense à mettre à jour un champ se dégradent avec la distance à l'événement et avec la charge de travail. Là où un événement automatisé existe, préférez-le à un substitut saisi par une personne pour le même fait (voir le sujet 2.8, Métriques DORA).

**4. Faites des changements de statut un effet secondaire du travail.** Si la fusion d'une branche fait passer l'élément de travail à « en revue » ou si un déploiement le fait passer à « livré », personne n'a à y penser. Les intégrations entre le contrôle de version, la chaîne et le gestionnaire de tickets suppriment la plupart des antidatages.

**5. Gardez les événements bruts, et gardez-les immuables.** Stockez chaque changement d'état avec l'heure de l'événement, l'heure de saisie et le type d'acteur (personne ou automatisme). Écrivez les corrections comme de nouveaux événements, non comme des écrasements, pour que l'historique de la correction soit lui-même une donnée.

### Bien traiter le temps

**6. Enregistrez le temps selon une seule norme.** Stockez les horodatages en [temps universel coordonné (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) dans un format non ambigu comme celui défini par ISO 8601 et la RFC 3339, et ne convertissez en heure locale que pour l'affichage. Les fuseaux horaires mélangés et les changements d'heure d'été produisent discrètement des durées négatives et des horloges décalées d'une heure.

**7. Écrivez les règles d'horloge là où vivent les données.** Pour chaque mesure de temps, indiquez quel événement démarre l'horloge, lequel l'arrête et quels statuts la suspendent. Un état de suspension est une décision de conception. Rapportez la fréquence d'emploi de chaque état de suspension, car l'horloge est l'endroit où les données de service sont le plus souvent façonnées (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

### Concevoir le modèle de statuts

**8. Gardez le modèle de statuts petit, partagé et documenté.** Chaque statut supplémentaire invite chaque équipe à une interprétation différente. Définissez en une phrase ce que signifie chaque état, qui peut y faire entrer du travail et quelles transitions sont autorisées. L'ancienneté des éléments de travail et les mesures de flux dépendent de ce modèle (voir le sujet 2.1, Mesures de flux), et la comparaison entre équipes dépend du fait que les équipes emploient les mêmes mots pour les mêmes états. Quand les données vous surprennent, soupçonnez d'abord le flux de travail : consignez chaque changement d'un flux ou d'un champ avec sa date et son motif, et comptez les statuts non documentés comme un signal de dérive.

### Garder la chaîne de données honnête

**9. Testez la chaîne comme un logiciel.** Vérifiez les nombres de lignes par rapport à la source, vérifiez que les champs requis sont présents, vérifiez les doublons et alertez quand un flux s'arrête. Ajoutez un indicateur de fraîcheur à chaque tableau de bord pour que les lecteurs voient l'âge des données. Une défaillance silencieuse d'un connecteur qui laisse à l'écran les chiffres du mois dernier est l'une des défaillances les plus courantes et les plus dommageables dans ce domaine (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service).

**10. Rapprochez selon un calendrier et échantillonnez à la main.** Comparez un comptage de la couche de reporting avec la source pour une période fixée, et examinez la différence. Puis lisez un petit échantillon d'enregistrements bruts. Un échantillon de quinze minutes trouve souvent ce que les contrôles automatisés ne peuvent pas trouver, comme un statut employé de façon inattendue.

### Traiter les personnes et les enquêtes avec soin

**11. Réservez les enquêtes à ce que seule une personne peut vous dire.** La satisfaction, l'effort, la confiance et le bien-être ne s'observent pas dans les données de système. Demandez directement, gardez les enquêtes courtes, variez le moment et rapportez le taux de réponse et qui a répondu, puisque les personnes qui répondent diffèrent de celles qui ne répondent pas, une forme de [biais de sélection](https://en.wikipedia.org/wiki/Selection_bias). Lisez les commentaires libres en entier (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

**12. Protégez les données personnelles et gardez les données au niveau de l'équipe.** Les données d'événements sur le travail peuvent identifier des individus par la paternité des validations, les champs d'affectation et les enregistrements de messagerie. Collectez au niveau dont la métrique a besoin, agrégez par équipes et services et appliquez les règles de protection de la vie privée de votre juridiction et de votre organisation. Les données au niveau individuel, une fois collectées, tendent à servir au classement, ce qui corrompt la source (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Couverture des sources | Compter un service comme couvert dès qu'un flux est connecté, même s'il ne transporte presque aucun événement ; laisser les services difficiles hors périmètre | Volume d'événements par service couvert comparé à son activité connue ; revoir la liste du périmètre au regard du catalogue de services |
| Complétude des horodatages | Remplir les horodatages requis avec l'heure de clôture pour satisfaire la validation | Distribution des écarts entre états consécutifs ; échantillonner des éléments clos pour voir si les heures sont plausibles |
| Taux d'antidatage | Saisir les changements juste en deçà du seuil ; élargir le seuil ; enregistrer tous les changements par une mise à jour en bloc | Profil des heures de saisie ; part des changements faits par automatisme plutôt qu'à la main ; audit des modifications en bloc |
| Fraîcheur des données | Afficher l'heure de la dernière actualisation plutôt que l'heure de l'événement le plus récent | Heure de l'événement le plus récent affichée sur le tableau de bord ; alerte quand un flux ne livre aucun nouvel événement |
| Écart de rapprochement | Choisir la période ou le périmètre qui concilie ; ajuster la couche de reporting pour qu'elle corresponde à la source sans chercher la cause | Fixer le périmètre et la période à l'avance ; consigner chaque cause trouvée et les revoir chaque trimestre |
| Dérive du modèle de statuts | Réutiliser un statut existant pour un sens nouveau afin d'éviter d'être signalé ; ajouter des statuts sans les consigner | Comparer la configuration du flux de travail avec le registre à chaque revue ; lire un échantillon d'éléments dans des états inhabituels |
| Taux de réponse aux enquêtes | N'inviter que les personnes susceptibles de répondre ; envoyer des rappels aux utilisateurs satisfaits ; offrir des récompenses qui biaisent les réponses | Composition des répondants comparée à la population d'utilisateurs ; distribution des réponses par vague ; commentaires libres lus en revue |

Une lecture saine est un ensemble de chiffres ennuyeux : couverture élevée, antidatage faible et en baisse, fraîcheur conforme à sa promesse déclarée, et une cause connue chaque fois que l'écart de rapprochement n'est pas nul. Quand un chiffre bouge, quelqu'un peut dire si c'est le travail qui a changé ou l'instrument.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Capture automatisée des événements | Objective, rapide, peu d'effort une fois construite | Ne couvre que ce qui a été instrumenté ; casse en silence quand les outils changent |
| Saisie manuelle et mises à jour de statut | Capte le contexte et le jugement ; fonctionne sans intégration | Tardive, incohérente et ouverte au détournement |
| Un magasin central de métriques | Une définition, un seul endroit pour tester et gouverner | Exige financement et responsable ; peut devenir un goulot d'étranglement |
| Chaque équipe garde ses propres données | Adaptée au travail local ; rapide à démarrer | Les définitions divergent ; les consolidations sont peu fiables |
| Événements bruts conservés à long terme | Les définitions peuvent changer et l'historique peut être recalculé | Coût de stockage et de vie privée ; plus à sécuriser |

Automatisez ce qui est observable, demandez aux personnes ce qui ne l'est pas et gardez l'enregistrement brut. Investissez d'abord dans les sources qui alimentent les deux ou trois métriques que l'équipe utilise réellement, non dans une plateforme de données pour tous les chiffres imaginables.

## Questions à discuter avec votre équipe

**1. Pour notre métrique la plus importante, quel système est la source de référence, et comment le savons-nous ?**
Demandez au groupe de suivre le chiffre depuis le tableau de bord jusqu'au premier événement. Notez chaque endroit où une personne ou une transformation touche les données. L'animateur doit chercher les étapes que personne ne sait expliquer, car c'est là que doit commencer la première enquête.

**2. Lesquels de nos horodatages sont écrits par un système, et lesquels sont saisis par une personne ?**
Listez les horloges en usage, comme le temps de réponse, le temps de résolution et le temps de cycle. Marquez chaque départ et chaque arrêt comme automatique ou manuel. Pour les manuels, demandez combien de temps après l'événement la saisie est généralement faite. La discussion montre souvent que la métrique la plus débattue repose sur l'horodatage le moins fiable.

**3. Que signifient nos statuts, et toutes les équipes entendent-elles la même chose ?**
Mettez le flux de travail sur un tableau et demandez à des personnes de différentes équipes d'expliquer chaque état avec leurs propres mots. Comparez les explications. Comptez les états où l'horloge se suspend, et demandez qui peut les employer et pourquoi. Convenez d'un changement pour lever l'ambiguïté et consignez-le avec son motif.

**4. Comment saurions-nous qu'un flux s'est arrêté en silence ?**
Demandez quand quelqu'un a vérifié pour la dernière fois que les données du tableau de bord sont à jour. Discutez de l'alerte ou de l'indicateur de fraîcheur qui détecterait un connecteur arrêté en moins d'un jour. L'animateur doit insister pour obtenir un responsable nommé et un contrôle concret, non une intention générale d'être prudent.

**5. Que collectons-nous que nous n'utilisons jamais, et qu'utilisons-nous que nous ne collectons pas bien ?**
Placez côte à côte la liste des champs et la liste des métriques. Marquez les champs qui n'alimentent aucune décision et les métriques qui reposent sur de mauvais champs. Décidez d'un champ à ne plus collecter et d'un champ à améliorer ce trimestre.

**6. Qui répond à nos enquêtes, et qui ne répond pas ?**
Comparez les répondants avec la population d'utilisateurs ou de membres de l'équipe. Regardez les taux de réponse par groupe et par heure du jour ou de la semaine. Discutez de ce que le silence pourrait signifier et de la façon d'atteindre les groupes silencieux sans pression. Convenez de la manière dont le taux de réponse sera montré à côté de chaque résultat d'enquête.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison génèrent l'essentiel des données objectives : validations, revues, constructions et déploiements. Elles profitent d'une instrumentation qui fait des changements de statut un effet secondaire du travail, de sorte que le tableau reste honnête sans effort supplémentaire. Elles devraient garder le flux de travail petit et se méfier de l'usage de l'activité du contrôle de version comme mesure de l'effort (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux).

### Équipes de service et d'exploitation

Les équipes de service dépendent d'enregistrements créés par des personnes sous pression, souvent pendant un incident. Les règles d'horloge, les états de suspension et les champs de priorité sont les endroits où la dérive se produit. Les équipes d'exploitation devraient rendre automatique la capture des heures clés lorsque c'est possible, comme l'heure d'alerte et l'heure d'accusé de réception, auditer l'usage des états de suspension et garder les données de supervision séparées de l'enregistrement du ticket pour que chacun puisse vérifier l'autre (voir le sujet 5.5, Métriques de supervision et de qualité des alertes).

### Direction et gouvernance

Les dirigeants décident du niveau d'investissement dans les fondations de données et fixent les incitations qui déterminent si les données restent honnêtes. Ils devraient demander d'où vient un chiffre avant de demander pourquoi il a bougé, financer la responsabilité de la chaîne comme un travail continu et attendre une date de fraîcheur et une définition sur chaque rapport. Les instances de gouvernance devraient traiter un changement documenté de source ou de définition comme un événement normal, non comme un échec.

### Clients et utilisateurs

Les utilisateurs fournissent les données les plus importantes sur l'expérience, généralement en répondant à des enquêtes, en notant des interactions ou en signalant des problèmes. Ils ont besoin de savoir ce qui est collecté, pourquoi et ce qui changera en conséquence. Des enquêtes courtes et un suivi visible maintiennent le taux de réponse en bonne santé. Les rapports de niveau de service destinés aux clients devraient indiquer leurs sources et leurs définitions (voir le sujet 5.2, SLI, SLO et budgets d'erreur).

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne de taille moyenne a une équipe de plateforme, trois équipes produit et un centre de services. Tous les chiffres de cet exemple sont illustratifs.

La direction demande pourquoi le délai de livraison des changements du rapport mensuel est passé d'une médiane de 9 jours à 3 jours en un trimestre, alors que les équipes produit ne signalent aucun changement dans leur façon de travailler. Le responsable de l'ingénierie de plateforme soupçonne l'instrument et demande une carte des sources de la métrique.

La carte montre que le délai démarre à la création d'un enregistrement de changement dans l'outil ITSM et s'arrête quand son statut passe à « mis en œuvre ». Deux équipes produit avaient commencé à créer l'enregistrement après que le travail était prêt, de sorte que l'horloge démarrait tard. Un échantillon de 40 enregistrements révèle que 12 avaient été créés le jour même du déploiement. Le taux d'antidatage, mesuré comme l'écart entre l'événement de déploiement dans la chaîne et la saisie du statut « mis en œuvre », était de 31 pour cent au-delà du seuil de 24 heures que l'équipe avait fixé.

L'équipe fait trois changements. Premièrement, le départ de l'horloge se déplace vers la première validation liée au changement, tirée du contrôle de version, et l'arrêt vers l'événement de déploiement écrit par la chaîne. Deuxièmement, l'outil ITSM reçoit le statut de la chaîne, de sorte que « mis en œuvre » n'est plus saisi à la main. Troisièmement, le tableau de bord gagne un indicateur de fraîcheur et un contrôle de rapprochement des nombres de changements entre la chaîne et l'outil ITSM.

Selon la nouvelle définition, le délai médian est de 7 jours et le 95e percentile de 21 jours, et le taux d'antidatage tombe à 4 pour cent. La direction lit d'abord les 7 jours comme un résultat pire. Le responsable de la plateforme explique que l'ancien chiffre était un artefact de la création tardive des enregistrements. La décision, consignée dans le journal des décisions, est de rétablir les deux trimestres précédents à partir des événements bruts et de marquer le changement de définition sur le graphique. Le risque de détournement que l'équipe a attrapé était subtil : personne n'a falsifié un chiffre, et pourtant la création tardive d'enregistrements produisait un chiffre flatteur. L'écart de rapprochement joue désormais le rôle de garde-fou, et l'échantillon d'enregistrements bruts est revu chaque trimestre.

## Perspective sectorielle

**Startup.** Les données sont minces et la confiance est élevée, ce qui aide. Utilisez la chaîne et le contrôle de version comme sources principales, car elles ne demandent aucun effort supplémentaire, et gardez le modèle de statuts à une poignée d'états. Écrivez chaque définition et sa source sur une seule page, et revoyez-la quand l'équipe double.

**Petite entreprise.** Une seule personne gère souvent l'informatique sur un centre de services hébergé. Utilisez les rapports de l'outil, demandez par écrit ses définitions au fournisseur et exportez périodiquement les données brutes pour éviter l'enfermement.

**Grande entreprise.** De nombreux outils, de nombreuses équipes et des couches d'intégration créent le plus grand risque de dérive des définitions. Investissez dans un modèle d'événements partagé, un magasin central de métriques avec des responsables nommés et des contrôles automatisés de rapprochement et de fraîcheur. Convenez d'un petit vocabulaire de statuts à l'échelle de l'entreprise et laissez les équipes ajouter des états locaux seulement avec une correspondance déclarée vers lui.

**Gouvernement et secteur public.** Les enregistrements peuvent être soumis à des lois sur la conservation, l'audit, l'accès et la vie privée, et les marchés publics peuvent verrouiller des outils et des formats de données. Traitez cela comme des données d'entrée de la conception : gardez une piste d'audit, documentez la filiation de l'événement au rapport et négociez des droits d'export des données dans les contrats. Les obligations de reporting rendent les définitions documentées indispensables (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût de ce sujet a trois parts. La première est l'effort de construction : intégrations, magasin de métriques et nettoyage du modèle de statuts. La deuxième est l'effort d'exploitation : un responsable de la chaîne, la supervision des flux et une routine trimestrielle de rapprochement et d'échantillonnage. La troisième est le coût des contrôles de vie privée et de sécurité pour les données que vous conservez.

Le retour vient de décisions prises sur des chiffres qui signifient ce qu'ils semblent signifier. De mauvaises données conduisent à de mauvais investissements, à des querelles sur la justesse de tel chiffre et à des résultats rectifiés qui nuisent à la confiance. Décrivez le bénéfice par des schémas que vous pouvez mesurer vous-même : le temps nécessaire pour produire un rapport mensuel avant et après, le nombre de litiges de rapprochement par trimestre, et le taux d'antidatage et la complétude des horodatages dans le temps. Le coût total de possession est dominé par les personnes ; comptez donc les heures du responsable de la chaîne.

## Antimodèles et pièges

- **Construire le tableau de bord avant la carte des sources.** Le graphique paraît fini alors que son sens est inconnu. Cartographiez d'abord la source, les horloges et le responsable.
- **Se fier aux mises à jour manuelles de statut pour les mesures de temps.** La saisie tardive fait des horloges une fiction. Automatisez les transitions à partir des événements de la chaîne et du contrôle de version partout où ils existent.
- **Plusieurs systèmes de référence pour un même fait.** Des litiges s'ensuivent. Choisissez-en un et faites lire les autres à partir de lui.
- **Les changements de définition silencieux.** La courbe de tendance perd son sens. Consignez chaque changement avec son motif et marquez-le sur le graphique.
- **Des moyennes tirées de données incomplètes.** Les horodatages manquants ne sont pas aléatoires, puisque les éléments gênants sont souvent ceux qu'on saute. Rapportez la complétude des horodatages à côté du résultat.
- **Tout collecter au cas où ce serait utile.** Le coût et le risque de vie privée augmentent sans qu'aucune décision soit servie. Collectez ce dont une question nommée a besoin.
- **Aucun indicateur de fraîcheur.** Un tableau de bord périmé ressemble à un tableau de bord à jour. Montrez l'âge de l'événement le plus récent dans chaque vue.
- **Des données au niveau individuel sans but.** Elles tentent le classement et nuisent à la source. Agrégez au niveau de l'équipe et du service, et restreignez l'accès.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Sources et capture | Chiffres assemblés à la main à partir d'exports | Certains outils alimentent automatiquement un rapport ; d'autres non | Chaque métrique a un système de référence nommé et une capture automatisée là où un événement existe | Couverture et complétude mesurées et suivies dans le temps | Événements partagés entre équipes et fournisseurs par des interfaces convenues, avec des contrats d'export |
| Modèles de temps et de statuts | Chaque personne enregistre et lit le temps différemment | Certaines équipes documentent leur flux de travail | Une norme de temps et un vocabulaire de statuts partagé avec des règles d'horloge écrites | Dérive et antidatage surveillés, et changements consignés avec leurs motifs | Modèles révisés conjointement avec les fournisseurs et les clients quand ils cessent d'éclairer les décisions |
| Qualité de la chaîne | Défaillances découvertes quand quelqu'un se plaint | Contrôles manuels occasionnels | Nombres de lignes, contrôles de doublons et indicateur de fraîcheur sur chaque tableau de bord | Rapprochement planifié et causes revues ; la chaîne a un responsable | Santé de la chaîne rapportée comme celle d'un service, avec une amélioration financée |
| Enquêtes et vie privée | Enquêtes ad hoc ; aucun examen de vie privée | Questions standard dans certaines équipes | Enquêtes régulières courtes avec taux de réponse affiché ; données conservées au niveau de l'équipe | Composition des répondants revue et suivie d'actions | Résultats d'enquête et pratique de vie privée partagés ouvertement avec les utilisateurs |

## Liste de vérification

- [ ] Chaque métrique rapportée a un système de référence nommé et un responsable de source nommé.
- [ ] La carte des sources est conservée dans le registre des métriques.
- [ ] Chaque mesure de temps indique où son horloge démarre, s'arrête et se suspend.
- [ ] Les horodatages sont stockés en UTC dans un format non ambigu, et les horloges des serveurs sont synchronisées.
- [ ] Les changements de statut sont générés par automatisme partout où un événement existe.
- [ ] Les événements bruts sont conservés avec l'heure de l'événement et l'heure de saisie, et les corrections sont de nouveaux événements.
- [ ] Le modèle de statuts est documenté, et chaque changement est consigné avec son motif.
- [ ] Chaque tableau de bord montre l'âge de ses données les plus récentes.
- [ ] Les comptages sont rapprochés de la source selon un calendrier, et les causes sont consignées.
- [ ] Un échantillon d'enregistrements bruts est lu chaque trimestre.
- [ ] Le taux de réponse aux enquêtes et la composition des répondants sont montrés avec chaque résultat d'enquête.
- [ ] Les données personnelles sont minimisées et agrégées au niveau de l'équipe et du service.

## Prompts d'IA

**Construisez une carte des sources pour une métrique.**

```text
Je documente les données derrière cette métrique : [metric name], définie comme
[definition]. Nos outils sont [list of tools, for example tracker, ITSM tool,
pipeline, monitoring]. Rédigez une carte des sources avec ces champs : l'événement
qui démarre l'horloge, l'événement qui l'arrête, le système de référence de
chacun, qui ou quoi crée l'événement (personne ou automatisme), les modes de
défaillance probables et les contrôles qui détecteraient chaque défaillance.
N'inventez ni fonctions d'outils ni valeurs de référence. Énumérez vos
hypothèses et les questions auxquelles je dois répondre pour compléter la carte.
```

**Examinez un modèle de statuts à la recherche d'ambiguïtés.**

```text
Voici le flux de travail de [team or service] : [list of statuses and allowed
transitions, with a one-line meaning for each if known]. Les horloges que nous
en calculons sont [list clocks]. Repérez les statuts ambigus, les états où une
horloge pourrait s'arrêter ou se suspendre de façon trompeuse et les endroits où
deux équipes pourraient lire différemment le même mot. Suggérez un modèle plus
petit qui soutient toujours les horloges, et dites ce qui serait perdu. Ne
devinez pas comment notre outil est configuré. Énumérez vos hypothèses.
```

**Concevez des contrôles de qualité des données pour un flux.**

```text
Nous chargeons [data type, for example change records] depuis [source system]
vers [destination] tous les [schedule]. Les champs requis sont [list fields].
Proposez un ensemble pratique de contrôles de complétude, de doublons, de
fraîcheur et de rapprochement avec la source, avec une alerte suggérée et un rôle
de responsable pour chacun. Gardez l'ensemble assez petit pour qu'une équipe de
[team size] puisse l'entretenir. N'inventez pas de seuils ; demandez-moi ceux
dont vous avez besoin. Énumérez vos hypothèses.
```

**Rédigez une courte enquête et un plan pour son taux de réponse.**

```text
Je veux mesurer [experience topic, for example effort to get a request
fulfilled] pour [audience]. Rédigez [number] questions neutres, un plan pour
savoir quand et comment les envoyer, et comment rapporter le taux de réponse et
la composition des répondants. Signalez les formulations qui pourraient biaiser
les réponses, et notez les considérations de vie privée sachant que les données
seront conservées dans [tool or location]. N'inventez pas de taux de réponse de
référence. Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver quel sujet définit la métrique que vous instrumentez et le garde-fou qui devrait se trouver à côté.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un sujet de métrique nouveau ou modifié nomme sa source de données et ses horloges.

## Points clés à retenir

- Toute métrique dépend d'un système de référence nommé ; cartographiez donc la source avant de construire le graphique.
- Capturez les événements automatiquement au moment où ils se produisent, et gardez les événements bruts pour que les définitions puissent changer sans perdre l'historique.
- Le temps est aussi une donnée : employez une norme unique, écrivez les règles d'horloge et guettez l'antidatage.
- Gardez le modèle de statuts petit, partagé et documenté, et consignez chaque changement.
- Traitez la chaîne de données comme un produit avec un responsable, des tests, un indicateur de fraîcheur et un rapprochement planifié.
- Servez-vous des enquêtes pour ce que seules les personnes peuvent dire, montrez le taux de réponse et gardez les données personnelles au niveau de l'équipe.

## Références et lectures complémentaires

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Kleppmann, M., *Designing Data-Intensive Applications*, O'Reilly Media, 2017.
5. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
6. ISO/IEC 25012:2008, *Software engineering: Software product Quality Requirements and Evaluation (SQuaRE): Data quality model*, International Organization for Standardization.
7. ISO 8601, *Date and time: Representations for information interchange*, International Organization for Standardization.
8. Klyne, G., and Newman, C., *RFC 3339: Date and Time on the Internet: Timestamps*, Internet Engineering Task Force, 2002, https://www.rfc-editor.org/rfc/rfc3339
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
13. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
14. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
15. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
17. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
18. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
19. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
20. Wikipedia, [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
22. Wikipedia, [Selection bias](https://en.wikipedia.org/wiki/Selection_bias).
