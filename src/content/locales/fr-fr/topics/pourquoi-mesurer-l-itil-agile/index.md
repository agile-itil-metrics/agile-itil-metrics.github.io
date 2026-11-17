# Pourquoi mesurer l'ITIL agile

**Les équipes qui construisent et exploitent des services ont besoin d'un petit ensemble de chiffres honnêtes pour voir si leur travail aide les utilisateurs et s'améliore, et l'agilité comme ITIL apportent chacune une moitié différente de ce tableau.**

## Résumé et motivation

Chaque équipe qui construit et exploite un service prend des décisions toute la journée : sur quoi travailler ensuite, si une version est sûre, si le centre de services a besoin d'une personne de plus, si une panne était un cas isolé ou un schéma récurrent. Sans mesure, ces décisions reposent sur la mémoire, l'anecdote et la dernière personne qui a parlé. Avec une mauvaise mesure, elles peuvent être pires encore, car un chiffre porte une autorité qu'une opinion n'a pas. Ce sujet explique pourquoi mesurer vaut l'effort, ce que chaque tradition apporte et ce qu'il en coûte de se tromper.

Deux traditions se rencontrent dans ce livre. Le [développement logiciel agile](https://en.wikipedia.org/wiki/Agile_software_development) est un ensemble de valeurs et de pratiques, énoncées dans le Manifeste agile de 2001, qui privilégie les logiciels opérationnels, une collaboration étroite avec les clients et l'adaptation au changement. Ses habitudes de mesure sont empiriques et locales : une équipe inspecte son propre flux, regarde ce qu'elle a livré et s'adapte. [ITIL](https://en.wikipedia.org/wiki/ITIL), à l'origine Information Technology Infrastructure Library, est un corpus de recommandations pour la [gestion des services informatiques](https://en.wikipedia.org/wiki/Information_technology_service_management) (ITSM), la pratique qui consiste à concevoir, fournir et améliorer des services informatiques. Ses habitudes de mesure sont orientées vers le service et partagées : des niveaux de service convenus, un catalogue de services (l'orthographe propre à ITIL est « service catalogue ») et une discipline d'amélioration continue. Dans ITIL 4, l'édition de 2019 du cadre, la mesure et le reporting figurent parmi les pratiques générales de gestion, et l'amélioration continue est à la fois une pratique et un principe directeur. Consultez les publications actuelles du propriétaire du cadre avant de vous fier aux détails de version, car le cadre continue d'évoluer.

Les deux points de vue diffèrent de manière utile. L'agilité demande « construisons-nous la bonne chose, et le travail circule-t-il sans heurts ? » ITIL demande « le service répond-il aux besoins de ses utilisateurs, et est-il fiable, supportable et abordable ? » Une équipe qui ne mesure que le flux peut livrer vite dans un service que les utilisateurs jugent peu fiable. Une équipe qui ne mesure que les niveaux de service peut atteindre toutes ses cibles tout en livrant les changements si lentement que le service cesse d'être pertinent. Le mouvement [DevOps](https://en.wikipedia.org/wiki/DevOps) est né de l'observation que construire et exploiter forment un seul système, et que les chiffres qui le décrivent doivent donc se lire ensemble. L'[ingénierie de la fiabilité des sites](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), la discipline décrite par Google dans ses ouvrages publiés, ajoute un lien explicite entre les cibles de fiabilité et le rythme du changement.

Trois termes reviennent tout au long du livre. Une **mesure** décrit quelque chose du travail ou du service. Une **métrique** est une mesure dotée d'une formule, d'une unité et d'une source de données définies, de sorte que deux personnes qui la calculent obtiennent la même réponse. Un **garde-fou** est une seconde mesure ou pratique, choisie à l'avance, qui bouge si la première est détournée. L'avertissement qui sous-tend les garde-fous est la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) : lorsqu'une mesure devient un objectif, les gens se mettent à piloter le chiffre plutôt que le travail (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

### À quoi sert la mesure

La mesure mérite sa place lorsqu'elle remplit l'une de ces quatre tâches.

- **Voir.** Rendre visible le travail invisible : la file que personne ne regarde, le schéma d'incidents qui traverse trois équipes, le changement qui attend neuf jours un créneau.
- **Décider.** Éclairer un choix entre deux options, par exemple automatiser un type de demande ou corriger le défaut qui la provoque.
- **Apprendre.** Mettre une croyance à l'épreuve. Si l'équipe pense qu'une nouvelle pratique de revue réduira les reprises, un chiffre peut dire si ce fut le cas.
- **Rendre compte.** Donner aux utilisateurs, aux clients et aux dirigeants un compte rendu honnête de ce que le service apporte, afin que la confiance repose sur des preuves.

Un chiffre qui ne remplit aucune de ces quatre tâches est une charge inutile. Les sujets suivants reprennent ce test pour chaque famille de métriques.

### Le coût de ne rien mesurer

Une équipe qui ne mesure rien n'est pas dépourvue de chiffres. Elle fonctionne avec des chiffres implicites : la plainte la plus bruyante, la panne la plus récente, l'impression du responsable sur le degré d'occupation des gens. Deux coûts en découlent.

- **Rétroaction lente.** Les problèmes qu'une tendance aurait montrés tôt arrivent comme des surprises. Une hausse sournoise des contacts répétés ressemble à de la malchance jusqu'à ce qu'elle devienne une crise.
- **Aucune base d'amélioration.** Une équipe ne peut pas dire si un changement a aidé, et ne peut donc pas apprendre quels changements répéter.

### Le coût de mesurer les mauvaises choses

Mesurer les mauvaises choses est souvent pire que ne rien mesurer, car cela oriente l'effort avec une fausse assurance. Les nombres de tickets fermés, de lignes de code, de points de récit terminés et d'heures saisies sont faciles à collecter et à représenter, et chacun mesure l'activité, non la valeur pour un utilisateur. Les recherches à l'origine du cadre SPACE (Forsgren et collègues, 2021) soutiennent que la productivité ne peut pas être saisie par une seule dimension, et que les comptages d'activité utilisés seuls induisent en erreur.

## Principes clés

- **Mesurer pour une décision.** Chaque métrique répond à une question écrite et éclaire un choix nommé. Si personne ne peut dire lequel, retirez-la.
- **Joindre les deux points de vue.** Lisez le flux de livraison et la santé du service sur la même page, pour que la vitesse ne s'achète jamais aux dépens de la stabilité, ni l'inverse.
- **Mesurer d'abord les résultats, ensuite l'activité.** Le critère est que les utilisateurs soient mieux lotis. Les comptages d'activité appuient le récit mais ne le racontent pas (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).
- **Décrire des équipes et des services, jamais des individus.** Les classements individuels corrompent les données et nuisent à la collaboration.
- **Commencer petit et grandir.** Une poignée de métriques fiables vaut mieux qu'un mur de métriques faiblement gouvernées.
- **Montrer d'abord à l'équipe.** Les personnes qui font le travail sont le premier public, et le meilleur contrôle de l'exactitude des données.
- **S'attendre à changer.** Les définitions, les métriques et les cibles sont révisées lorsqu'elles cessent d'éclairer les décisions.

## Définitions des métriques

Les métriques ci-dessous décrivent la santé d'une pratique de mesure elle-même, là où « pourquoi mesurer » devient vérifiable. Une équipe qui peut les présenter mesure pour des raisons. Chaque formule fondée sur le temps ou sur un comptage en énonce les bornes.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Part de métriques liées à une décision | Part des métriques rapportées qui ont une question écrite et une décision nommée qu'elles éclairent | métriques avec une question et une décision consignées / métriques rapportées sur le tableau de bord en fin de trimestre | pourcentage | Registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques) | Mesure et reporting ; amélioration continue | Actions de rétrospective ; accords de travail | Trimestrielle |
| Couverture des lignes de base | Part des services et des équipes dans le périmètre qui ont une valeur de départ consignée pour chacune des mesures de base convenues | paires service-mesure avec une ligne de base consignée au cours des 12 derniers mois / toutes les paires service-mesure dans le périmètre ; les services hors catalogue sont exclus | pourcentage | Catalogue de services et registre des métriques | Gestion des niveaux de service ; mesure et reporting | Revue par les parties prenantes ; tableaux de bord d'équipe | Trimestrielle |
| Effort de mesure | Temps de personnel consacré à collecter, nettoyer et rapporter les métriques à la main | heures saisies pour la collecte et le reporting manuels pendant le mois, hors temps passé à agir sur les constats | heures par équipe par mois | Notes de temps ou court sondage d'équipe | Mesure et reporting | Budget de temps de la rétrospective | Trimestrielle |
| Âge des données à la revue | Ancienneté du point de données le plus récent lorsque le groupe se réunit pour en discuter | horodatage de la réunion de revue moins horodatage du dernier point de données du tableau de bord ; calculé par métrique, rapporté en médiane et en 85e percentile | jours | Journal d'actualisation du tableau de bord | Mesure et reporting | Revue par les parties prenantes | Par revue |
| Suivi des améliorations | Part des actions d'amélioration issues des revues de métriques qui sont terminées ou délibérément closes dans le délai convenu | actions terminées ou closes avec un motif dans les 90 jours suivant leur création / actions créées dans la période, comptées à partir de la date saisie dans le registre d'amélioration | pourcentage | Registre d'amélioration continue ou backlog | Amélioration continue | Actions de rétrospective | Trimestrielle |

L'effort de mesure ne compte volontairement que le travail manuel. Le temps passé à lire les données et à décider quoi faire est le but de l'exercice et en est exclu, afin que l'automatisation de la collecte apparaisse comme un progrès.

## Recommandations

### Commencer par le but

**1. Écrivez la raison avant la métrique.** Pour chaque mesure proposée, écrivez une phrase : « Nous mesurons X pour décider Y. » Si la phrase ne peut pas être écrite, la mesure n'est pas prête. Cette seule habitude écarte la plupart des métriques de vanité avant qu'elles n'entrent dans un tableau de bord.

**2. Nommez le public et la décision.** Le même chiffre signifie des choses différentes pour une équipe, un responsable de service et un dirigeant. Notez qui le lira et quel choix il appuie. Une vue de travail d'équipe peut porter vingt mesures. Ce qui va à la direction doit être un petit ensemble stable (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service).

### Utiliser les deux traditions

**3. Associez une mesure de flux à une mesure de service.** Choisissez au moins une mesure de la circulation du travail, comme le délai de livraison ou l'ancienneté des éléments de travail (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux), et au moins une mesure du comportement du service, comme la récurrence des incidents ou un indicateur de niveau de service (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Les montrer ensemble évite l'échec courant où la vitesse et la stabilité sont gérées par des groupes différents qui regardent des graphiques différents.

**4. Traitez la livraison et l'exploitation comme un seul système.** Les recherches résumées dans *Accelerate* (Forsgren, Humble et Kim, 2018) indiquent que la performance de livraison logicielle peut se décrire avec quatre mesures qui équilibrent débit et stabilité. Quel que soit l'ensemble adopté par une équipe, gardez les chiffres liés aux changements et ceux liés aux incidents assez proches pour que la hausse de l'un invite à examiner l'autre (voir le sujet 2.8, Métriques DORA).

### Mesurer honnêtement

**5. Préférez quelques mesures qui se tirent en sens contraire.** Un chiffre unique invite à la suroptimisation ; choisissez donc des paires comme vitesse et qualité, volume et résultat, coût et expérience. La paire n'a pas besoin d'être une formule. Elle doit apparaître sur la même page.

**6. Consignez une ligne de base avant de rien changer.** Sans valeur de départ, une affirmation d'amélioration n'est qu'une histoire. Capturez d'abord quelques semaines de données, en incluant la dispersion des valeurs autant que la moyenne (voir le sujet 1.6, Culture statistique pour les métriques de service). Les lignes de base protègent aussi les équipes : elles montrent qu'un mauvais trimestre a suivi un changement dans la façon de compter le travail plutôt qu'un déclin de performance.

### Installer l'habitude

**7. Faites la revue à un rythme qui correspond à la décision.** Les mesures de flux conviennent à une conversation hebdomadaire, ou tenue à chaque étape de la livraison logicielle continue. Les mesures de niveau de service et de coût conviennent à une conversation mensuelle ou trimestrielle. Une métrique revue au mauvais rythme crée soit du bruit, soit un moment manqué où l'action aurait aidé.

**8. Bouclez la boucle avec un travail d'amélioration.** Une revue qui se termine par « intéressant » a gâché ses données. Terminez chaque revue par une ou deux actions nommées, un responsable et une date, et suivez leur achèvement. La pratique d'amélioration continue d'ITIL et la rétrospective agile sont deux noms pour la même discipline (voir le sujet 9.5, Métriques d'amélioration continue).

**9. Dites à quoi vous n'utiliserez pas les chiffres.** Énoncez clairement que les métriques d'équipe ne serviront pas à classer ou à récompenser des individus, et que les définitions seront changées ouvertement. Les gens coopèrent avec la mesure lorsqu'ils font confiance à l'usage qui en sera fait (voir le sujet 11.3, Déployer les métriques sans semer la peur).

## Vecteurs de détournement et garde-fous

Même les métriques sur la mesure peuvent être détournées. Chaque ligne ci-dessous associe la métrique à la façon habituelle de la plier et au contrôle qui la révélerait.

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Part de métriques liées à une décision | Rédiger après coup une question et une décision plausibles pour chaque métrique afin de faire monter le pourcentage | Échantillonner le journal des décisions : demander ce qui a changé à cause de la métrique, et comparer la date d'écriture de l'entrée à la date d'apparition de la métrique |
| Couverture des lignes de base | Consigner une ligne de base une fois et ne jamais l'actualiser, ou choisir une période calme qui arrange | Exiger une plage de dates et une taille d'échantillon avec chaque ligne de base ; revoir les lignes de base après les changements majeurs du service |
| Effort de mesure | Sortir le travail de collecte des livres en le faisant sans le saisir, ou en le transférant à un fournisseur | Comparer avec un court sondage sur le temps que les gens disent consacrer au reporting ; inclure l'effort des fournisseurs dans la revue |
| Âge des données à la revue | Actualiser le tableau de bord juste avant la réunion alors que les enregistrements sous-jacents sont encore périmés | Rapporter l'âge de l'enregistrement le plus récent dans le système source en plus de l'heure d'actualisation |
| Suivi des améliorations | Clore des actions avec le motif « plus pertinent » pour atteindre le pourcentage, ou scinder des actions en morceaux triviaux | Passer en revue chaque trimestre les motifs donnés pour les actions closes, et suivre si la mesure visée par l'action a bougé |

Une lecture saine est une pratique visiblement vivante. Des métriques entrent dans le registre et le quittent pour des raisons écrites, les lignes de base sont fraîches, les actions issues des revues sont terminées ou honnêtement abandonnées, et l'équipe passe plus de temps à agir sur les données qu'à les collecter. Un score parfait sur chaque ligne invite à échantillonner les enregistrements sous-jacents ; ce n'est pas une raison de se réjouir.

## Compromis : avantages et inconvénients

| Choix | Force | Faiblesse |
| --- | --- | --- |
| Mesurer peu | Faible coût ; faible risque de détournement ; grande confiance | Angles morts ; les décisions reposent sur l'anecdote |
| Mesurer beaucoup | Large couverture ; alerte précoce sur de nombreux fronts | L'attention se dilue ; gouvernance mince ; le coût de collecte grandit |
| Vue jointe | Équilibre vitesse et stabilité ; soutient la responsabilité partagée | Exige des définitions communes entre équipes et un lieu commun où regarder |
| Cibles sur les métriques | Donne direction et urgence | Invite au détournement ; exige un garde-fou associé |
| Métriques sans cibles | Encourage une discussion honnête | Peut dériver vers des rapports sur lesquels personne n'agit |

La réponse pratique est un petit ensemble joint, avec des cibles utilisées avec parcimonie pour des conditions bien comprises et réclamées par les utilisateurs, comme un objectif de niveau de service. Tout le reste est une question à discuter. Le but n'est pas de retirer le jugement des décisions mais de l'alimenter de meilleures preuves.

## Questions à discuter avec votre équipe

**1. Quelle décision avons-nous prise le trimestre dernier qu'un chiffre a réellement changée ?**
Demandez au groupe de se rappeler des décisions précises, puis de déterminer lesquelles, le cas échéant, dépendaient de données. Si la liste est courte, c'est une information utile : cela signifie qu'une grande part du reporting actuel ne justifie pas son existence. L'animateur doit noter les métriques qui ont bien changé des décisions, car ce sont des candidates à la protection. Demandez ensuite quelles décisions ont été prises à l'instinct et si un chiffre aurait pu aider.

**2. Lesquels de nos chiffres actuels décrivent l'activité, et lesquels décrivent la valeur pour les utilisateurs ?**
Affichez le tableau de bord actuel à l'écran et marquez chaque métrique comme activité (tickets fermés, constructions lancées, points terminés) ou résultat (utilisateurs capables de travailler, problèmes qui ne reviennent pas). Ne débattez pas longtemps des cas limites. Le but est de voir l'équilibre. Là où il n'y a que de l'activité, demandez quel résultat l'activité est censée produire et comment l'équipe le saurait.

**3. Où se trouvent aujourd'hui les chiffres de livraison et d'exploitation, et les mêmes personnes regardent-elles les deux ?**
Retracez où chaque famille de mesures est stockée et qui la revoit. Les équipes sont souvent surprises de constater que les données de changements sont revues par un groupe et celles des incidents par un autre, sans réunion commune. Demandez quel schéma pourrait passer inaperçu parce que les deux ne sont jamais vus ensemble. Convenez d'un lieu ou d'une réunion où elles se rencontrent.

**4. Que ne mesurons-nous pas, que nous regretterions de ne pas savoir ?**
Invitez les inquiétudes plutôt que les métriques : « J'ai peur que nous ne remarquions pas si... » Partez des réponses pour arriver aux mesures candidates, puis aux données les moins coûteuses qui les montreraient. Gardez la liste courte.

**5. Que devrions-nous croire de nos chiffres avant de les montrer à la direction ?**
Discutez de ce qui rend les données fiables : définitions stables, contrôles d'exactitude par échantillonnage et accord sur les exclusions. Dressez la liste des doutes de l'équipe, même petits, comme un statut employé de façon incohérente. Décidez quels doutes doivent être levés avant un partage plus large et lesquels peuvent être divulgués avec le chiffre.

**6. Si nous ne pouvions garder que trois métriques pour le prochain trimestre, lesquelles seraient-elles et pourquoi ?**
La contrainte force les priorités. Demandez à chaque personne d'en écrire trois, puis comparez. Cherchez l'accord sur les résultats et le désaccord sur les mesures d'activité. Demandez de quel garde-fou chacune des trois a besoin.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison profitent surtout d'une rétroaction rapide et locale : combien de temps le travail attend, où il fait la queue, à quelle fréquence les changements causent des problèmes. Elles doivent garder pour elles une vue de travail riche et en publier un petit ensemble vers l'extérieur. Les équipes doivent résister à la tentation de mesurer le volume de production comme substitut de la valeur, et associer d'emblée les mesures de vitesse à des mesures de qualité (voir le sujet 2.1, Mesures de flux).

### Équipes de service et d'exploitation

Les équipes d'exploitation vivent déjà avec des chiffres : volumes, temps de réponse et de résolution, disponibilité. L'occasion est de passer du rapport de ce qui s'est passé à l'explication du pourquoi, par la récurrence, les causes profondes et la part de travail non planifié (voir le sujet 2.9, Travail opérationnel et travail non planifié). Elles doivent aussi apporter leurs données dans les conversations de planification avec les équipes de livraison, pour que le travail de fiabilité soit défendu par des preuves plutôt que par des plaintes.

### Direction et gouvernance

Les dirigeants fixent les incitations, souvent par accident, par les questions qu'ils posent. Un dirigeant qui demande « pourquoi est-ce rouge ? » apprend aux équipes à cacher le rouge. Un dirigeant qui demande « qu'avez-vous appris, et de quoi avez-vous besoin ? » apprend aux équipes à rapporter honnêtement. Les instances de gouvernance doivent demander le registre, les garde-fous et les actions d'amélioration en plus des chiffres, et financer le travail qu'un mauvais chiffre révèle (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

### Clients et utilisateurs

Les utilisateurs jugent le service à ce qu'il fonctionne et à ce que les problèmes soient réparés, non à des mesures internes. Leurs propres mots, dans les enquêtes, les plaintes et les commentaires, ont leur place à côté des chiffres opérationnels pour vérifier que l'équipe mesure ce qui compte (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne de taille moyenne exploite un centre de services, une équipe d'exploitation et trois équipes produit qui construisent les services de vitrine, de paiement et d'exécution des commandes. Les chiffres ci-dessous sont illustratifs.

La direction demande pourquoi les clients se plaignent de la lenteur du paiement alors que les équipes de livraison indiquent qu'elles livrent chaque jour et que l'équipe d'exploitation indique une disponibilité de 99,9 pour cent. Chaque groupe a raison selon ses propres mesures, et personne ne les a regardées ensemble. Le responsable de la gestion des services propose une vue jointe d'une page pour le service de paiement, construite à partir de données que les équipes collectent déjà.

La vue montre quatre choses pour les douze dernières semaines. Le délai de livraison des changements a une médiane de 2 jours et un 85e percentile de 9 jours. Le taux d'échec des changements est de 8 pour cent. Les incidents sur le paiement sont au nombre de 14, dont 6 partagent une même cause, une requête de base de données lente introduite par une version récente. Le temps médian de rétablissement est de 40 minutes, mais le temps de chargement de page au 95e percentile a augmenté sur six semaines, un schéma que le chiffre de disponibilité ne montre pas parce que le service est resté techniquement en ligne.

Le groupe voit ce qui était caché. La disponibilité était mesurée comme « le paiement répond », alors que les utilisateurs vivent « le paiement répond assez vite ». L'équipe produit et l'équipe d'exploitation conviennent d'ajouter un indicateur de latence pour le paiement avec un objectif fixé par le responsable produit après lecture des commentaires des clients, de traiter la cause d'incident répétée comme un enregistrement de problème avec un responsable, et de revoir la vue jointe tous les quinze jours. Elles consignent une décision : suspendre les nouvelles fonctions de paiement pendant une période de livraison logicielle continue pour corriger la requête et ajouter un contrôle de performance à la chaîne de publication.

Un risque de détournement apparaît en un mois. L'équipe d'exploitation constate que deux des 14 incidents avaient été ouverts comme « demandes de service » parce que la catégorie des demandes ne porte aucune cible de résolution. L'équipe comprend qu'une cible sur les incidents avait poussé les gens à classer les cas limites comme des demandes. Elle ajoute à la vue la part des recatégorisations et échantillonne dix tickets chaque mois. Après le changement, le 95e percentile du temps de chargement de page baisse, les incidents répétés diminuent, et l'équipe garde la vue parce qu'elle a changé une décision.

## Perspective sectorielle

**Startup.** Les petites équipes ont peu de processus et une forte confiance, ce qui aide. Le risque est d'importer un grand tableau de bord d'entreprise avant d'en avoir besoin. Commencez par deux ou trois mesures que les fondateurs liront chaque semaine, comme le délai de livraison des changements, un indicateur simple de fiabilité et les retours directs des utilisateurs, et écrivez leurs définitions.

**Petite entreprise.** La personne qui gère l'informatique rend souvent compte au propriétaire, et une seule plainte de client peut peser plus que n'importe quel graphique. Gardez l'ensemble petit, utilisez les données que vos outils produisent déjà et privilégiez les conversations avec les utilisateurs. Traitez les rapports fournis par les éditeurs avec un certain soin, car les éditeurs ont leurs propres incitations.

**Grande entreprise.** L'échelle multiplie la demande de chiffres comparables et la pression pour les détourner. Utilisez un petit ensemble standard avec des définitions écrites, séparez les vues de travail des équipes des consolidations et évitez de comparer des équipes qui exploitent des services de natures très différentes. Un registre de métriques, des définitions communes et un rythme de revue deviennent indispensables.

**Gouvernement et secteur public.** Les niveaux de service contractuels, les exigences d'audit et les obligations de rapport public peuvent rendre certaines mesures non négociables. Traitez-les comme des données d'entrée de la conception : respectez-les, montrez un garde-fou à côté et énoncez les définitions employées. La responsabilité publique augmente le coût de cacher les mauvaises nouvelles ; construisez donc des canaux internes sûrs pour un reporting franc (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation de la mesure est de meilleures décisions à moindre coût. La mesure appuie la priorisation, montre où se trouve le gaspillage, donne une alerte précoce du déclin d'un service et fournit des preuves pour les demandes d'investissement.

Le coût comporte plusieurs volets. Il y a l'outillage, souvent déjà possédé : le système de tickets, le gestionnaire de tâches, le contrôle de version et la supervision. Il y a le temps du personnel pour définir les métriques, construire des vues et tenir un registre. Il y a le coût récurrent des réunions de revue, qui est le plus élevé et le plus utile. Le coût total de possession (TCO) d'une pratique de mesure inclut aussi le coût d'agir sur les constats, car une observation sans budget pour la corriger rapporte peu.

Le retour est difficile à exprimer par un chiffre universel, et ce livre n'en invente pas. Une bonne façon de construire le dossier est de mesurer vos propres lignes de base avant et après un changement : temps passé au reporting manuel, contacts répétés, décisions inversées parce que les données étaient fausses et surprises découvertes tard. Le schéma à attendre est moins de surprises, des discussions plus courtes et un meilleur accord entre les chiffres opérationnels et l'expérience des utilisateurs. Une simple comparaison de [retour sur investissement](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) entre l'effort dépensé et l'effort économisé est un point de départ raisonnable, et le sujet 7.7, Retour sur investissement et dossier d'affaires, couvre la méthode.

## Antimodèles et pièges

- **Le tableau de bord de tout.** Des dizaines de graphiques, aucun responsable, aucune décision. Choisissez-en quelques-uns, nommez la décision que chacun éclaire et retirez le reste.
- **La mesure unilatérale.** La vitesse sans la stabilité, ou la stabilité sans la pertinence. Associez une mesure de flux à une mesure de service.
- **Mesurer les personnes.** Les classements individuels corrompent les données et découragent l'entraide. Rapportez au niveau des équipes et des services.
- **Des cibles avant les lignes de base.** Une cible sans valeur de départ est une supposition. Consignez d'abord une ligne de base, et fixez les cibles après au moins un cycle de revue.
- **Des rapports sans actions.** Une revue qui ne produit aucun changement apprend aux gens à l'ignorer. Terminez chaque revue par une action nommée, un responsable et une date.
- **Des changements de définition silencieux.** Les courbes de tendance perdent leur sens. Consignez chaque changement avec son motif et marquez-le sur le graphique.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| But et sélection | Métriques choisies parce que l'outil les offre | Certaines métriques ont un but déclaré | Chaque métrique rapportée a une question écrite et une décision | Ensemble de métriques revu au regard des décisions et retiré quand il n'est plus utilisé | Métriques coconçues avec les utilisateurs et les fournisseurs autour de résultats partagés |
| Vue jointe de l'agile et d'ITIL | Données de livraison et de service tenues à part | Quelques équipes consultent les deux ensemble | Vue commune du flux et de la santé du service par service | Vue jointe suivie dans le temps et reliée au travail d'amélioration | Vues transversales aux équipes et aux fournisseurs reliées aux résultats pour les utilisateurs |
| Lignes de base et effort | Aucune ligne de base ; collecte manuelle | Lignes de base pour certains services ; collecte mixte | Lignes de base consignées pour les mesures de base ; collecte surtout automatique | Lignes de base actualisées après les changements ; effort suivi et réduit | Lignes de base et définitions ajustées en continu au fil de l'évolution des services |
| Usage dans l'amélioration | Chiffres notés puis oubliés | Actions occasionnelles après les mauvaises semaines | Chaque revue se termine par des actions nommées | Suivi des actions mesuré et financé | L'amélioration vient de tous et est visible entre les équipes |

## Liste de vérification

- [ ] Chaque métrique rapportée a une question écrite et une décision nommée qu'elle éclaire.
- [ ] Le public de chaque vue est nommé, et les vues d'équipe sont séparées des vues de direction.
- [ ] Au moins une mesure de flux et une mesure de service apparaissent sur la même page.
- [ ] Une ligne de base avec une plage de dates et une taille d'échantillon existe pour chaque mesure de base.
- [ ] Chaque mesure de temps indique où l'horloge démarre et s'arrête.
- [ ] Chaque métrique a un garde-fou affiché à côté d'elle.
- [ ] L'effort de collecte manuelle est connu, et la plus grosse tâche manuelle a été examinée en vue de l'automatiser.
- [ ] Les équipes voient leurs propres données avant la direction.
- [ ] Aucun classement individuel, aucune rémunération ni sanction n'est lié à une métrique.
- [ ] Chaque revue se termine par au moins une action d'amélioration nommée, un responsable et une date.
- [ ] Au moins une métrique a été retirée ou redéfinie au cours de l'année écoulée.

## Prompts d'IA

**Rédigez l'énoncé de but de chaque métrique.**

```text
Nous sommes [team name], responsables de [service or product]. Notre tableau de
bord actuel montre ces métriques : [list of metrics with their definitions].
Pour chacune, rédigez un énoncé d'une phrase sous la forme « Nous mesurons X
pour décider Y », et signalez toute métrique pour laquelle vous ne pouvez pas
déduire une décision de ce que je vous ai donné. Suggérez les questions
auxquelles je dois répondre pour compléter chaque énoncé. N'inventez ni valeurs
de référence ni cibles. Énumérez vos hypothèses.
```

**Joignez les vues de livraison et de service.**

```text
Nos mesures de livraison sont [list, with definitions and data sources] et nos
mesures de service sont [list, with definitions and data sources] pour [service
name]. Proposez une mise en page d'une page qui montre les deux ensemble,
associe chaque mesure de vitesse à une mesure de stabilité ou de qualité et
indique les données dont chacune a besoin. Repérez les définitions qui entrent
en conflit entre les deux ensembles. N'inventez ni valeurs ni seuils. Énumérez
vos hypothèses et tout ce que vous n'avez pas pu déterminer.
```

**Planifiez une ligne de base.**

```text
Nous voulons consigner une ligne de base pour [metric name] pour [service or
team] avant de changer [practice or tool]. Les données proviennent de [source].
Proposez la durée de collecte, les statistiques de synthèse à consigner (y
compris les percentiles), ce qu'il faut exclure et pourquoi, et comment noter
tout changement dans la façon de compter le travail pendant la période. Ne
supposez aucune valeur. Énumérez vos hypothèses et les risques de qualité des
données que vous voyez.
```

**Préparez une revue qui mène à l'action.**

```text
Nous tenons une revue [weekly, monthly, or quarterly] de [metric set] avec
[audience]. Rédigez un ordre du jour et une courte série de questions
d'animation qui passent de la lecture des chiffres au choix d'une ou deux
actions d'amélioration, chacune avec un responsable et une date. Incluez une
invitation à vérifier le détournement en regard du garde-fou de chaque
métrique. N'inventez pas de données. Énumérez vos hypothèses sur le groupe et
sa culture.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui couvre une métrique que vous envisagez et son garde-fou associé.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un sujet de métrique nouveau ou révisé conserve l'énoncé de but, le vecteur de détournement et le garde-fou.

## Points clés à retenir

- Mesurez pour voir, décider, apprendre et rendre compte ; un chiffre qui ne fait rien de cela est une charge inutile.
- L'agilité fournit une rétroaction rapide et locale sur le flux ; ITIL fournit des vues partagées, au niveau du service, de la fiabilité et de la valeur. Lisez-les ensemble.
- Ne rien mesurer laisse les décisions à l'anecdote, et mesurer les mauvaises choses oriente l'effort avec une fausse assurance.
- Commencez avec quelques métriques, chacune avec un but écrit, une ligne de base et un garde-fou.
- Décrivez des équipes et des services, jamais des individus, et laissez l'équipe voir d'abord ses données.
- Bouclez la boucle : une revue qui ne produit aucune action gâche les données.

## Références et lectures complémentaires

1. Beck, K., et al., *Manifesto for Agile Software Development*, 2001, https://agilemanifesto.org/.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
5. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
11. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
12. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
13. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
14. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
