# Loi de Goodhart et psychologie des métriques

**Tout chiffre que vous récompensez, classez ou brandissez comme menace commencera à modifier le travail qu'il devait décrire ; chaque métrique de ce livre est donc utilisée comme une question à discuter par une équipe, et associée à un garde-fou qui détecte son détournement.**

## Résumé et motivation

La [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) est le plus ancien avertissement de la mesure. L'économiste Charles Goodhart remarquait en 1975, en écrivant sur la politique monétaire britannique, qu'une régularité statistique tend à s'effondrer dès que les autorités s'en servent comme levier de contrôle. La formulation populaire est venue plus tard. L'anthropologue Marilyn Strathern l'a exprimée en 1997 ainsi : « Lorsqu'une mesure devient un objectif, elle cesse d'être une bonne mesure. » Les deux phrases disent la même chose : dès qu'un chiffre sert à piloter les gens, les gens pilotent le chiffre.

La même idée porte d'autres noms. La [loi de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law), due au spécialiste des sciences sociales Donald Campbell, dit que plus un indicateur quantitatif sert à décider, plus il est exposé aux pressions de corruption et plus il fausse les processus qu'il devait surveiller. L'[effet cobra](https://en.wikipedia.org/wiki/Cobra_effect) est l'histoire d'une prime qui a produit davantage de ce qu'elle devait éliminer. Chacun est un exemple d'[incitation perverse](https://en.wikipedia.org/wiki/Perverse_incentive) : une récompense qui pousse le comportement loin de ce que voulait celui qui récompense.

Les équipes qui construisent et exploitent des services informatiques sont particulièrement exposées. La livraison continue et la gestion des services informatiques (ITSM), telle que codifiée par [ITIL](https://en.wikipedia.org/wiki/ITIL), produisent toutes deux un flux constant d'horodatages, de comptages et de statuts. Un système de tickets enregistre quand un ticket a été ouvert, quand il a été affecté, quand l'horloge a été suspendue et quand il a été clos. Un outil de livraison enregistre quand le travail a commencé et fini. Ces chiffres sont peu coûteux à collecter, faciles à représenter et faciles à transformer en objectifs. Ils sont aussi faciles à faire bouger sans aider personne.

Trois termes reviennent dans ce sujet et dans le reste du livre. Une **mesure** décrit quelque chose. Un **objectif** est un chiffre que quelqu'un est censé atteindre. Un **garde-fou** est une seconde mesure ou une pratique, choisie à l'avance, qui bougerait si la première mesure était détournée. Le passage de la mesure à l'objectif est le point où les ennuis commencent, et le garde-fou est le moyen de s'en apercevoir.

Ce sujet pose la règle qui gouverne tous les autres. Chaque famille de métriques du livre arrive avec son vecteur de détournement (la façon dont elle est typiquement détournée) et son garde-fou. Si un sujet ultérieur semble l'omettre, considérez-le comme inachevé.

### Pourquoi les gens détournent les chiffres

Le détournement n'est généralement pas de la malhonnêteté. C'est la réaction ordinaire de personnes compétentes aux incitations qu'elles ont devant elles. Quatre forces sont à l'œuvre.

- **La pression.** La prime, l'évaluation, le renouvellement de contrat ou la réputation de quelqu'un dépendent du chiffre. Même sans lien formel, les gens déduisent ce qui importe à la direction de ce que la direction représente en graphiques.
- **La substitution.** La [substitution](https://en.wikipedia.org/wiki/Surrogation) (surrogation) est la tendance à traiter la mesure comme si elle était la chose qu'elle représente. Les chercheurs qui l'ont étudiée dans les organisations ont constaté qu'une rémunération incitative liée à une mesure la rend plus probable. Une équipe qui suit les « tickets fermés » se met à croire que le but est de fermer des tickets, non de résoudre des problèmes.
- **La peur.** Lorsqu'un mauvais chiffre apporte des reproches, les gens cachent les mauvaises nouvelles. Les incidents sont déclassés, les pannes sont rebaptisées « maintenance planifiée » et les défauts sont consignés comme demandes d'évolution.
- **L'optimisation locale.** Une équipe améliore la partie du système sur laquelle elle est jugée et reporte le coût sur une partie qui ne l'est pas. Le centre de services ferme vite et le deuxième niveau hérite des récidives.

Comprendre ces forces importe, car le remède n'est pas une surveillance plus stricte. C'est de changer les conditions qui rendent le détournement rationnel.

## Principes clés

- **Mesurer pour apprendre, non pour juger.** Montrez d'abord les chiffres à l'équipe qui fait le travail, et servez-vous-en pour poser des questions.
- **Associer chaque métrique à un garde-fou.** La vitesse à la qualité, le volume au résultat, le coût à l'expérience.
- **Décrire des équipes et des systèmes, ne jamais classer des personnes.** Les classements individuels sont le moyen le plus rapide de corrompre une source de données.
- **Préférer les résultats et les tendances aux objectifs.** Une direction et une conversation valent mieux qu'un seuil.
- **Écrire la définition, horloges comprises.** Les définitions ambiguës sont l'endroit où se cache le détournement.
- **S'attendre au changement.** Retirez ou repensez une métrique lorsqu'elle cesse d'éclairer les décisions.
- **Rendre les mauvaises nouvelles sûres.** Si le reporting honnête est puni, les données mentiront.

## Définitions des métriques

Les métriques ci-dessous ne sont pas des mesures de service ou de livraison. Ce sont des mesures de la santé d'une pratique de métriques elle-même, et elles montrent la forme que prend chaque tableau de métriques de ce livre. Les trois premières sont des exemples de garde-fous que l'on retrouve dans les sujets suivants.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des garde-fous | Part des métriques rapportées qui ont un garde-fou nommé et suivi | métriques avec un garde-fou / métriques rapportées | pourcentage | Registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques) | Mesure et reporting ; amélioration continue | Rétrospective des accords de travail | Trimestrielle |
| Taux de réouverture | Part des tickets ou éléments de travail clos qui sont rouverts dans une fenêtre indiquée | éléments rouverts dans les 14 jours / éléments clos dans la période | pourcentage | Historique des statuts de l'outil ITSM ou du gestionnaire de tickets | Gestion des incidents ; gestion des problèmes | Définition de terminé ; défauts échappés | Mensuelle |
| Nombre de changements de définition | Nombre de changements apportés aux définitions de métriques ou aux flux de statuts dans une période, avec leurs motifs | nombre d'entrées dans le journal des changements de définition | nombre | Journal des changements du registre des métriques | Mesure et reporting | Accords de travail | Trimestrielle |
| Taux d'usage des métriques | Part des métriques rapportées qui ont été citées dans une décision pendant la période | métriques citées dans une décision consignée / métriques rapportées | pourcentage | Journal des décisions ou notes de revue | Amélioration continue | Actions de rétrospective | Trimestrielle |
| Écart de perception | Différence entre le résultat d'une enquête de satisfaction et un niveau de service issu des tickets pour le même service | taux issu de l'enquête moins taux issu du gestionnaire de tickets | points de pourcentage | Outil d'enquête et outil ITSM | Gestion des niveaux de service | Retours de la revue par les parties prenantes | Trimestrielle |

Le taux de réouverture ne compte que les éléments rouverts dans le même enregistrement. Un élément clos puis recréé sous forme de nouveau ticket n'apparaît pas. Une partie de l'intérêt de la section suivante est que le garde-fou a besoin de son propre garde-fou, comme le rattachement des tickets en double à leurs originaux.

## Recommandations

### Concevoir le système de mesure

**1. Partez d'une question, non d'un chiffre.** Avant d'ajouter une métrique, écrivez la question à laquelle elle répond et la décision qu'elle éclaire. « Les utilisateurs voient-ils leurs problèmes résolus du premier coup ? » est une question. « Réduire le temps moyen de traitement » est un objectif qui se fait passer pour en être une. Une métrique sans décision rattachée est candidate au retrait.

**2. Choisissez des métriques en tension.** Un chiffre unique invite à la suroptimisation ; choisissez donc des paires qui se tirent en sens contraire : délai de livraison et taux d'échec des changements, vitesse de clôture des tickets et taux de réouverture, disponibilité et expérience déclarée par les utilisateurs. La paire n'a pas besoin d'être une formule. Elle doit être montrée ensemble, sur la même page.

**3. Définissez les horloges et les exclusions.** Pour chaque mesure de temps, écrivez où l'horloge démarre, où elle s'arrête et quand elle peut se suspendre. L'essentiel du détournement dans les données de service se loge dans ces bornes : un ticket placé en « en attente du client » arrête l'horloge du niveau de service, et un changement consigné seulement après son application échappe au délai de livraison des changements. Si un état de suspension existe, rapportez la fréquence de son emploi.

**4. Utilisez des distributions et des percentiles.** Une moyenne des temps de résolution des tickets peut s'améliorer parce que quelques tickets faciles ont été clos vite pendant que les difficiles vieillissent. Montrez la médiane et un percentile élevé (par exemple le 85e ou le 95e), et montrez les plus anciens éléments ouverts. L'ancienneté des éléments de travail et le plus ancien ticket ouvert sont difficiles à détourner sans réellement terminer le travail (voir le sujet 2.1, Mesures de flux).

**5. Tenez un registre des métriques.** Un court registre énumère chaque métrique, son responsable, sa définition, sa source de données, son vecteur de détournement, son garde-fou et la date de sa dernière revue. C'est ennuyeux, et c'est l'habitude la plus efficace de ce sujet (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

### Introduire les métriques en sécurité

**6. Montrez d'abord à l'équipe, et montrez les données brutes.** Les équipes qui voient les chiffres avant la direction sont plus disposées à en questionner l'exactitude. Commencez par les éléments sous-jacents, non par le graphique. Si les données ne résistent pas à une conversation avec les personnes qui les ont produites, elles ne résisteront pas à un tableau de bord.

**7. Séparez les vues d'apprentissage des vues de redevabilité.** La vue de travail d'une équipe peut contenir de nombreuses mesures, y compris laides. Ce qui va à la direction doit être un petit ensemble stable. Si la direction réclame la vue de travail, attendez-vous à ce que la vue de travail change pour paraître meilleure.

**8. Ne liez ni rémunération, ni sanction, ni classement individuels à une métrique.** On peut demander aux équipes d'expliquer leurs chiffres et de les améliorer. Des objectifs individuels sur les nombres de tickets, de points de récit ou de validations apprennent aux gens à maximiser le compte. L'approche par [indicateur clé de performance](https://en.wikipedia.org/wiki/Key_performance_indicator) peut fonctionner lorsque les indicateurs sont choisis pour l'ensemble du système et revus régulièrement. Elle échoue quand elle devient une fiche de score par personne.

**9. Rendez sûr le reporting honnête.** La [sécurité psychologique](https://en.wikipedia.org/wiki/Psychological_safety) est la croyance que l'on ne sera pas puni pour avoir signalé une erreur ou une préoccupation. Une revue sans reproche d'un incident en est un exemple en pratique. Sans elle, les comptages d'incidents baissent pour la mauvaise raison : les gens cessent de signaler.

### Garder le système honnête

**10. Menez une revue de détournement.** Une fois par trimestre, posez à l'équipe une question sur chaque métrique rapportée : « Si nous voulions que ce chiffre paraisse bon sans aider personne, que ferions-nous ? » Notez les réponses, puis vérifiez si le garde-fou attraperait chacune. L'exercice est peu coûteux, produit des idées utiles et fait passer la conversation du soupçon à la conception.

**11. Auditez les définitions face à la réalité.** Échantillonnez un petit nombre d'éléments clos et lisez-les. Étaient-ils vraiment résolus ? La priorité était-elle honnête ? L'état « en attente du client » signifiait-il qu'on attendait réellement le client ? Un échantillon de quinze minutes en dit souvent plus qu'un mois de tableaux de bord.

**12. Retirez des métriques.** Une métrique qui n'a pas été citée dans une décision depuis deux trimestres est une charge inutile. Retirez-la, et dites-le. Moins de métriques, chacune digne de confiance, valent mieux que beaucoup.

## Vecteurs de détournement et garde-fous

Le tableau couvre les métriques de la section ci-dessus. Les sujets suivants appliquent la même forme aux mesures de service et de livraison.

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Couverture des garde-fous | Nommer un garde-fou sur le papier sans jamais le suivre | Revoir le registre : un garde-fou ne compte que si sa dernière valeur apparaît sur le même tableau de bord |
| Taux de réouverture | Clore le ticket et en créer un nouveau au lieu de le rouvrir ; allonger la fenêtre jusqu'à ce que les réouvertures en sortent | Taux de tickets en double et liés ; récurrence de la même cause entre plusieurs tickets |
| Nombre de changements de définition | Ne pas consigner les changements pour que le compte reste bas ; changer un flux sans prévenir personne | Comparer le modèle de statuts de l'outil avec le registre à chaque revue |
| Taux d'usage des métriques | Citer chaque métrique dans un journal de décisions par pure formalité | Demander ce qui a changé grâce à la citation ; échantillonner le journal |
| Écart de perception | N'interroger que les utilisateurs satisfaits ; orienter les enquêtes vers les moments qui suivent une bonne interaction | Taux de réponse à l'enquête et composition des répondants ; commentaires libres lus à voix haute en revue |

Une lecture saine est une pratique de métriques qui change : les définitions sont ajustées pour des raisons consignées par écrit, les métriques vont et viennent, et l'équipe peut raconter l'histoire d'une décision qu'un chiffre a modifiée.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Mesurer sans objectifs | Réduit le détournement ; invite à une discussion honnête | Peut dériver vers un reporting sur lequel personne n'agit |
| Objectifs avec garde-fous | Donne direction et urgence ; la paire limite le détournement | Plus de travail à entretenir ; le garde-fou finit aussi par être détourné |
| Métriques individuelles | Faciles à comprendre ; semblent équitables | Corrompent les données ; nuisent à la collaboration |
| Métriques d'équipe et de service | Correspondent à la façon dont le travail se fait réellement | Plus difficiles à attribuer ; masquent les besoins de soutien individuels |
| Peu de métriques | Plus faciles à croire et à retenir | Angles morts ; peuvent manquer un problème nouveau |
| Beaucoup de métriques | Large couverture | Dilue l'attention ; chaque métrique est faiblement gouvernée |

La réponse en prose est d'utiliser les objectifs avec parcimonie, pour des conditions bien comprises et difficiles à détourner, comme un objectif de niveau de service que les utilisateurs ont réclamé. Même alors, préférez rattacher l'objectif au service, non à l'évaluation d'une personne. Le but n'est pas de retirer les chiffres de la prise de décision. C'est de garder les chiffres reliés à la réalité en gardant de votre côté les personnes qui les produisent.

## Questions à discuter avec votre équipe

**1. Quel chiffre de notre tableau de bord actuel serions-nous le plus tentés d'améliorer sans améliorer le travail ?**
Commencez par la métrique que les gens regardent en premier, puis passez à celle dont la direction s'enquiert. Demandez des manœuvres précises : que ferions-nous aux données si nous étions sous pression ? L'animateur doit noter chaque réponse sans la juger, car la liste devient les vecteurs de détournement du registre. Terminez en demandant lesquelles de ces manœuvres nos garde-fous attraperaient, et lesquelles ils laisseraient passer.

**2. Où une horloge démarre-t-elle et s'arrête-t-elle dans notre mesure de temps la plus importante, et qui l'a décidé ?**
Demandez au groupe de dessiner le cycle de vie du ticket ou de l'élément de travail sur un tableau blanc et de marquer chaque état. Cherchez les états où le temps peut disparaître, comme l'attente d'un client ou la mise en pause. Comptez la fréquence d'emploi de chaque état et par qui. La conversation révèle souvent que deux équipes emploient le même mot différemment.

**3. Quand un chiffre nous a-t-il fait faire pour la dernière fois quelque chose d'inutile ?**
Invitez les histoires, pas les reproches. Les exemples courants sont clore des tickets avant de vérifier, fractionner des changements pour augmenter les comptes de déploiements, ou reclasser un incident pour éviter un rapport de dépassement. L'animateur doit demander ce que la personne cherchait à protéger. La réponse montre généralement l'incitation à changer.

**4. Qui voit nos métriques, et qu'en advient-il là-bas ?**
Suivez chaque métrique depuis l'équipe jusqu'à son public. Demandez si une version quelconque sert à comparer des équipes ou des personnes. Demandez ce que l'équipe montrerait si le public était différent. Là où l'équipe changerait les chiffres qu'elle montre, il y a un déficit de confiance dont il faut parler avec ce public.

**5. Quel est le garde-fou de chacune de nos cinq métriques les plus importantes, et est-il sur la même page ?**
Dressez une liste à deux colonnes sur un tableau. Si une métrique n'a pas de garde-fou, convenez d'un candidat et d'un responsable pour l'essayer pendant un trimestre. Si un garde-fou existe mais est rarement consulté, discutez-en les raisons. Évitez de choisir un garde-fou qui n'est que l'inverse de la métrique, car il n'apprend rien de neuf.

**6. Quelle métrique devrions-nous retirer ce trimestre ?**
Demandez des preuves : quand a-t-elle été utilisée pour la dernière fois dans une décision ? Si personne ne s'en souvient, retirez-la pour une période d'essai et voyez si quelqu'un le remarque. L'animateur doit traiter le retrait comme un événement normal. Les équipes qui n'abandonnent jamais de métriques finissent avec des rapports que personne ne croit ni ne lit.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison rencontrent le détournement à travers la vélocité, le débit et les comptes de déploiements. La [vélocité](https://en.wikipedia.org/wiki/Velocity_(software_development)) en particulier est un outil de planification pour une équipe, non une mesure de productivité, et comparer les équipes par elle conduit à des estimations gonflées. Les équipes de livraison devraient garder leurs mesures de travail pour elles, en publier un petit ensemble vers l'extérieur et associer chaque mesure de vitesse à une mesure de qualité (voir le sujet 2.5, Métriques de prévision et de planification de la livraison).

### Équipes de service et d'exploitation

Les équipes de service rencontrent le détournement à travers le temps de résolution, la résolution au premier contact et le respect des niveaux de service. Les états qui suspendent l'horloge et les champs de priorité sont les points habituels de dérive. Les équipes d'exploitation devraient auditer régulièrement les transitions de statut, rapporter l'usage des états de suspension et surveiller les contacts répétés et le taux de réouverture à côté de la vitesse. Les équipes d'astreinte devraient être particulièrement prudentes avec les mesures qui récompensent le fait de ne pas être appelé, car elles pénalisent une alerte honnête (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

### Direction et gouvernance

Les dirigeants fixent les incitations, souvent sans le vouloir. Une question posée en revue (« pourquoi est-ce rouge ? ») apprend à l'équipe ce qu'il faut cacher. Les dirigeants devraient demander ce que l'équipe a appris d'un chiffre, tenir les classements hors de la salle, protéger le reporting franc et financer le travail d'amélioration qu'un mauvais chiffre révèle. Les instances de gouvernance devraient attendre le registre des métriques et la revue de détournement dans le reporting, et traiter un changement défini d'une métrique comme normal.

### Clients et utilisateurs

Les utilisateurs éprouvent l'effet du détournement comme un service qui paraît bon sur le papier et se ressent mal en pratique : un ticket clos qui n'a pas été corrigé, une panne qualifiée de planifiée, une enquête qui ne les a jamais atteints. Les utilisateurs sont aussi le meilleur garde-fou. Leurs retours, sous forme d'enquêtes, de plaintes et de commentaires, devraient figurer à côté des chiffres opérationnels, et être lus en entier, non réduits à un score (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple d'ITIL agile

Le service informatique d'un hôpital régional exploite un centre de services et plusieurs équipes produit qui construisent des applications cliniques. Les chiffres de cet exemple sont illustratifs.

La direction fixe un objectif de clôture de 90 pour cent des incidents dans le délai convenu. En deux mois, le tableau de bord indique 94 pour cent. La responsable des opérations de service est contente mais mal à l'aise, car le personnel clinique se plaint davantage, non moins. Elle demande à l'équipe de mener une revue de détournement sur la métrique.

L'équipe esquisse le cycle de vie des tickets. Elle constate que les tickets passent en « en attente du client » deux fois en moyenne, et que le temps passé dans cet état a augmenté. Un échantillon de 30 tickets clos montre que 7 ont été clos avec la note « pas de réponse de l'utilisateur » après une seule tentative d'appel. Elle constate aussi que le taux de réouverture est stable uniquement parce qu'on disait aux utilisateurs de « créer un nouveau ticket » lorsque le problème revenait.

L'équipe fait trois changements. Premièrement, le graphique du temps de résolution montre désormais la médiane, le 90e percentile et le plus ancien ticket ouvert, ainsi que la part du temps passée dans les états de suspension. Deuxièmement, le tableau de bord ajoute un taux de contacts répétés, défini comme la part des nouveaux tickets du même utilisateur au sujet du même service dans les 14 jours. Troisièmement, une courte enquête est envoyée à un échantillon aléatoire de tickets clos, et ses commentaires libres sont lus lors de la revue mensuelle.

Trois mois plus tard, le chiffre principal de conformité tombe à 88 pour cent, ce qui ressemble à une mauvaise nouvelle. Le taux de contacts répétés a toutefois baissé, et les commentaires de l'enquête sur les problèmes non résolus sont devenus plus rares. La responsable des opérations explique à la direction que l'ancien chiffre était gonflé et que le nouveau tableau est plus honnête, et elle lui demande d'accepter un objectif de niveau de service fondé sur la définition corrigée. La décision, consignée dans le journal des décisions, est de fixer l'objectif après un trimestre de données supplémentaire plutôt que tout de suite.

## Perspective sectorielle

**Startup.** Les petites équipes ont peu de métriques et une forte confiance, ce qui aide. Le danger est d'importer trop tôt un grand tableau de bord d'entreprise. Commencez par deux ou trois mesures que les fondateurs utilisent réellement, écrivez leurs définitions et tenez-les à l'écart des conversations de performance individuelle.

**Petite entreprise.** Les ressources sont minces, et la personne qui gère l'informatique rend souvent compte directement au propriétaire. Une seule plainte de client peut peser plus que n'importe quel tableau de bord. Gardez l'ensemble petit, privilégiez les retours directs des utilisateurs et traitez les rapports fournis par les éditeurs avec une certaine prudence, car l'éditeur a ses propres incitations.

**Grande entreprise.** L'échelle multiplie à la fois la demande de chiffres comparables et la pression pour les détourner. Utilisez un petit ensemble standard avec des définitions écrites, séparez les vues de travail des équipes des consolidations et évitez de comparer des équipes qui travaillent sur des services de natures différentes. Un registre des métriques et un rythme de revue deviennent indispensables.

**Gouvernement et secteur public.** Les obligations de reporting et les niveaux de service contractuels peuvent rendre certains objectifs non négociables. Traitez-les comme des données d'entrée de la conception : respectez-les, montrez le garde-fou à côté et rapportez les définitions employées. La responsabilité publique augmente le coût de cacher les mauvaises nouvelles ; construisez donc des canaux internes sûrs et soyez ouvert sur les définitions corrigées (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût d'application de ce sujet est surtout du temps : quelques heures pour rédiger des définitions et un registre, une courte revue de détournement trimestrielle et un échantillonnage occasionnel d'éléments clos. Il y a peu de coûts d'outillage. Le coût le plus élevé est l'attention de la direction, car la discipline ne fonctionne que si les personnes qui lisent les chiffres se comportent de façon constante.

Le retour vient du gaspillage évité et de meilleures décisions. Des décisions prises sur des données corrompues peuvent orienter l'investissement vers le mauvais problème, comme doter un centre de services pour clore les tickets plus vite alors que le vrai problème est celui des contacts répétés dus à un défaut. Le détournement érode aussi la confiance entre l'équipe et les personnes qui comptent sur elle, ce qui est difficile à réparer. Décrivez le bénéfice par le schéma, non par un pourcentage inventé : moins de décisions annulées, moins de surprises lors des audits et un meilleur accord entre les chiffres opérationnels et l'expérience des utilisateurs. Si vous avez besoin de chiffres pour un dossier d'affaires, mesurez vos propres lignes de base, comme l'écart de perception et le taux de contacts répétés, avant et après le changement.

## Antimodèles et pièges

- **Des objectifs sans garde-fous.** Un objectif isolé est atteint par n'importe quelle voie disponible. Ajoutez une mesure associée avant d'annoncer l'objectif.
- **Des classements de personnes ou d'équipes.** Ils invitent au détournement et découragent l'entraide entre équipes. Montrez à chaque équipe sa propre tendance, avec le contexte.
- **Les métriques comme punition.** Un chiffre rouge qui apporte des reproches deviendra vert par dissimulation. Demandez plutôt ce dont l'équipe a besoin.
- **Des moyennes de données asymétriques.** Elles cachent la queue de distribution où les utilisateurs souffrent. Utilisez les percentiles et l'ancienneté du plus ancien élément.
- **Changer les définitions en silence.** Les courbes de tendance perdent leur sens. Consignez chaque changement avec son motif et marquez-le sur le graphique.
- **Traiter le garde-fou comme le nouvel objectif.** Le garde-fou finit alors par être détourné. Revoyez les deux ensemble et faites tourner les garde-fous quand ils perdent leur efficacité.
- **Les métriques de vanité.** Des comptes qui ne font que monter, comme les tickets traités ou les validations de code, ne disent rien des résultats. Préférez des mesures qui peuvent baisser comme monter.
- **Ignorer les preuves qualitatives.** Les chiffres seuls ne peuvent pas montrer qu'un ticket clos a laissé une impression de non-résolution. Lisez les commentaires.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et horloges | Informelles ; chacun compte différemment | Écrites pour certaines métriques | Une définition écrite par métrique, avec horloges et exclusions | Définitions revues et changements consignés avec leurs motifs | Définitions alignées entre équipes et fournisseurs, révisées quand elles cessent d'éclairer les décisions |
| Garde-fous | Aucun | Nommés pour certaines métriques | Chaque métrique rapportée a un garde-fou sur la même page | Garde-fous examinés chaque trimestre pour le détournement | Garde-fous qui tournent et sont coconçus avec les personnes mesurées |
| Usage et sécurité | Chiffres utilisés pour attribuer des reproches | L'équipe voit ses propres chiffres | L'équipe voit les données d'abord ; aucun classement individuel | La direction pose des questions d'apprentissage ; le reporting est sûr | Clients et fournisseurs partagent un regard franc sur les chiffres |

## Liste de vérification

- [ ] Chaque métrique rapportée a une question écrite et une décision qu'elle éclaire.
- [ ] Chaque mesure de temps a une règle écrite de démarrage, d'arrêt et de suspension.
- [ ] Chaque métrique rapportée a un garde-fou nommé affiché à côté d'elle.
- [ ] Les mesures de temps montrent les percentiles et l'ancienneté du plus ancien élément ouvert.
- [ ] Un registre des métriques existe, avec responsable, définition, vecteur de détournement, garde-fou et date de revue.
- [ ] L'équipe voit ses données avant la direction.
- [ ] Aucun classement, aucune rémunération ni sanction individuels n'est lié à une métrique.
- [ ] Une revue de détournement trimestrielle est inscrite au calendrier.
- [ ] Un échantillon d'éléments clos est lu chaque trimestre pour en vérifier l'honnêteté.
- [ ] Au moins une métrique a été retirée ou repensée au cours de l'année écoulée.

## Prompts d'IA

**Menez une revue de détournement sur une métrique.**

```text
Je dirige [team name], qui exploite [type of service or delivery work]. Nous
rapportons cette métrique : [metric name], définie comme [definition including
where the clock starts and stops]. Elle est utilisée par [audience] pour
[decision or target]. Nos données viennent de [tool].

Énumérez les façons réalistes dont cette métrique pourrait paraître meilleure
sans améliorer le service pour les utilisateurs. Pour chacune, suggérez un
garde-fou (métrique ou pratique) qui la révélerait et dites quel serait le
vecteur de détournement propre à ce garde-fou. N'inventez pas de valeurs de
référence. Énumérez vos hypothèses et tout ce que vous n'avez pas pu déterminer
à partir de ce que je vous ai donné.
```

**Rédigez une entrée de registre de métrique.**

```text
Rédigez une entrée de registre de métrique pour [metric name] pour [team name].
Champs : question à laquelle elle répond, décision qu'elle éclaire, définition,
formule, unité, source de données, rôle du responsable, cadence de revue,
vecteur de détournement, garde-fou, et comment les utilisateurs ou les clients
s'apercevraient qu'elle est erronée. Fondez l'entrée uniquement sur cette
description : [describe the metric and current process]. Marquez chaque champ
que vous avez dû supposer, et énumérez les questions auxquelles je dois répondre
pour compléter l'entrée.
```

**Auditez un échantillon de tickets clos.**

```text
Voici [number] tickets clos de [service], avec les champs [list fields] et les
notes de résolution collées ci-dessous. Examinez chacun pour y repérer des
signes que le ticket a été clos sans que le problème soit résolu, qu'un état de
suspension a servi à arrêter l'horloge, ou que la priorité ou la catégorie
semble ajustée. Rapportez des schémas, non des individus. Ne devinez pas des
causes que le texte n'étaye pas. Dites-moi ce que vous n'avez pas pu juger à
partir des données et quels champs supplémentaires aideraient.

[paste tickets, with personal data removed]
```

**Planifiez l'introduction sûre d'une métrique.**

```text
Nous prévoyons d'introduire [metric] auprès de [audience]. Contexte actuel :
[team size, culture, previous experience with metrics]. Proposez un plan de
déploiement couvrant qui voit les données en premier, comment nous expliquons le
but, ce pour quoi nous ne les utiliserons pas, quel garde-fou nous montrons avec
elles et quand nous vérifions si cela fonctionne. Signalez les risques de
détournement ou de peur et suggérez comment les réduire. Énumérez vos
hypothèses et n'inventez pas de statistiques.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet et le garde-fou associé d'une métrique que vous êtes sur le point d'introduire.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un nouveau sujet de métrique porte son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Une mesure qui devient un objectif cesse de décrire le travail ; servez-vous donc des chiffres pour poser des questions.
- Le détournement est une réaction normale à la pression et à la peur, et il se réduit en changeant les conditions, non par la surveillance.
- Chaque métrique a besoin d'une définition écrite avec ses horloges et d'un garde-fou affiché à côté.
- Préférez les percentiles et l'ancienneté du plus ancien élément aux moyennes.
- Décrivez des équipes et des services, ne classez jamais des individus, et laissez l'équipe voir d'abord ses données.
- Menez une revue de détournement chaque trimestre et retirez les métriques qui n'éclairent plus les décisions.

## Références et lectures complémentaires

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
5. Choi, J., Hecht, G. W., and Tayler, W. B., "Lost in translation: The effects of incentive compensation on strategy surrogation," *The Accounting Review*, 87(4), 2012.
6. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Cobra effect](https://en.wikipedia.org/wiki/Cobra_effect).
11. Wikipedia, [Perverse incentive](https://en.wikipedia.org/wiki/Perverse_incentive).
12. Wikipedia, [Surrogation](https://en.wikipedia.org/wiki/Surrogation).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
16. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
