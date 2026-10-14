# Inflation des métriques et dilution de la qualité

**Quand l'IA rend le volume et la vitesse bon marché, toute métrique qui compte le volume et la vitesse gonfle ; associez donc chacune à une mesure d'utilité vérifiée par une personne, et surveillez si le signal dans vos données est noyé.**

## Résumé et motivation

Une métrique fonctionne parce qu'elle reflète quelque chose de difficile à produire. Les tickets résolus reflètent un effort. Les documents écrits reflètent une connaissance. Les tests ajoutés reflètent du soin. Quand un outil rend la production visible presque gratuite, le lien entre la production et l'effort se rompt. Les chiffres continuent de monter et le sens s'en vide. C'est l'inflation des métriques, et sa compagne est la dilution de la qualité : la part de ce qui est produit qui est utile baisse, et la partie utile devient plus difficile à trouver.

Ce n'est pas un problème nouveau. La [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) et sa parente la [loi de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) décrivent comment les mesures employées pour contrôler sont corrompues. Une [métrique de vanité](https://en.wikipedia.org/wiki/Vanity_metric) a l'air impressionnante et ne dit rien de la santé du travail. Ce que l'IA change, c'est la vitesse et l'échelle auxquelles la production peut être générée, et avec elles la vitesse et l'échelle auxquelles ces vieux échecs peuvent se produire. Une équipe qui gonflait autrefois un décompte à la main peut maintenant le faire en quelques minutes, souvent sans le vouloir.

Plusieurs schémas reviennent dans le travail de service et de livraison.

- **Inflation du volume.** L'IA rédige plus de tickets, plus de réponses, plus de commentaires, plus de cas de test, plus de documents et plus de code. Les décomptes de ces éléments montent. La charge de ceux qui doivent les lire, les revoir et les entretenir monte aussi.
- **Inflation de la vitesse.** Le temps jusqu'au premier brouillon baisse fortement, et le temps jusqu'à un résultat fini et vérifié baisse moins, ou pas du tout. Un tableau de bord qui rapporte le premier raconte une histoire flatteuse.
- **Bruit.** Plus de contenu rivalise pour l'attention. La [surcharge informationnelle](https://en.wikipedia.org/wiki/Information_overload) est l'état dans lequel une personne ne peut traiter le volume d'information présenté, et le [rapport signal sur bruit](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) de la base de connaissances, de la file de tickets ou du flux d'alertes baisse. La [fatigue d'alerte](https://en.wikipedia.org/wiki/Alert_fatigue) en est la forme opérationnelle (voir le sujet 5.5, Métriques de supervision et de qualité des alertes).
- **Contenu généré de faible qualité.** Le contenu produit en masse avec peu de revue, parfois appelé [bouillie d'IA](https://en.wikipedia.org/wiki/AI_slop), est plausible et mince. Une base de connaissances ensemencée de tels articles devient moins digne de confiance, et les utilisateurs apprennent à s'en méfier.
- **Coût de vérification.** L'effort pour vérifier une affirmation est souvent bien plus grand que l'effort pour la faire, un schéma parfois appelé [loi de Brandolini](https://en.wikipedia.org/wiki/Brandolini%27s_law). Quand la génération est bon marché, la vérification devient le goulot d'étranglement.
- **L'efficience qui augmente la consommation.** Le [paradoxe de Jevons](https://en.wikipedia.org/wiki/Jevons_paradox) décrit des cas où des gains d'efficience mènent à un plus grand usage d'une ressource, non à un moindre. Si rédiger un rapport devient bon marché, on demande plus de rapports. Le temps économisé par un outil peut être consommé par plus de travail de moindre valeur.
- **Boucles de rétroaction.** Si le contenu généré alimente la série suivante de génération, les erreurs se composent. La littérature de recherche décrit l'[effondrement de modèle](https://en.wikipedia.org/wiki/Model_collapse) dans les modèles entraînés sur leurs propres productions. Une boucle semblable peut se produire dans une organisation quand un assistant résume des tickets écrits par un assistant à partir d'articles qu'un assistant a résumés.
- **Lignes de base qui dérivent.** Si la distribution des données change à cause de l'IA, les tendances et les seuils ne signifient plus ce qu'ils signifiaient. Cela ressemble à la [dérive conceptuelle](https://en.wikipedia.org/wiki/Concept_drift) en apprentissage automatique, où la relation entre les entrées et les résultats change avec le temps. Une hausse du volume de tickets peut refléter une création de tickets plus facile, non plus de problèmes.

Les buts agiles comptent ici. La livraison continue, l'amélioration continue et le rythme soutenable dépendent tous de la clarté du signal. On ne devrait pas demander à des personnes motivées de patauger dans du bruit généré par des machines ni de vérifier des piles de production à un rythme insoutenable. Les parties prenantes continuellement impliquées sont aussi la meilleure défense : elles vous diront quand les rapports n'aident plus.

Ce sujet donne les mesures pour remarquer l'inflation et la dilution, et les associations qui les exposent. Il s'appuie sur les fondations et sur les mesures du travail assisté (voir le sujet 10.1, L'IA dans la mesure de la gestion des services, et le sujet 10.2, Mesurer le travail assisté par l'IA).

## Principes clés

- **Associer chaque métrique de volume ou de vitesse à une vérification d'utilité.** Une personne juge si la production est utile.
- **Mesurer jusqu'à un résultat fini et vérifié.** La vitesse du premier brouillon est un piège.
- **Surveiller la charge de vérification.** Elle croît discrètement et consomme le temps économisé.
- **Protéger le signal.** Gardez la base de connaissances, les files et les alertes assez propres pour s'y fier.
- **Rompre les boucles de rétroaction.** Ne laissez pas le contenu généré alimenter la génération sans revue.
- **Rétablir une ligne de base quand les données changent.** Les tendances à travers un changement technologique demandent du soin.
- **Préférer moins de productions, mais meilleures.** Moins peut valoir mieux quand l'attention est la ressource limitante.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rapport production-résultat | Volume de production rapporté au résultat qu'il devait produire | décompte de production (tickets, articles, changements) / mesure de résultat (problèmes résolus, articles employés, changements retenus), sur la même période, suivi en tendance | ratio | Suivi du travail, base de connaissances, mesures de résultats | Amélioration continue ; mesure et rapport | Logiciel fonctionnel plutôt que volume de documentation | Mensuelle |
| Part d'éléments utiles | Part des éléments échantillonnés jugés utiles par un examinateur qualifié | éléments échantillonnés jugés utiles (corrects, pertinents, non dupliqués) / éléments échantillonnés | pourcentage | Revue d'un échantillon aléatoire | Gestion des connaissances ; assurance qualité | Définition de terminé pour le contenu | Mensuelle |
| Charge de vérification | Temps humain consacré à vérifier et à corriger le travail généré par unité de production | heures de revue et de correction / unités de production, suivies en tendance | heures par unité | Estimations de temps, données de l'outil de revue | Gestion financière des services ; amélioration continue | Capacité de revue comme contrainte | Mensuelle |
| Taux de redondance du contenu | Part des éléments de connaissances qui en dupliquent ou en recoupent substantiellement un autre | éléments signalés comme dupliqués ou recoupés en revue ou par appariement / éléments de la base de connaissances | pourcentage | Revue de la base de connaissances, rapports d'appariement | Gestion des connaissances | Source unique de vérité | Trimestrielle |
| Part revue des connaissances générées | Part des éléments de connaissances générés par l'IA qu'une personne qualifiée a revus et approuvés avant publication | éléments générés publiés avec revue approuvée / éléments générés publiés | pourcentage | Métadonnées de la base de connaissances | Gestion des connaissances ; maîtrise des changements | Revue avant la mise en production | Mensuelle |
| Entrée du backlog par rapport à la résolution | Croissance du travail qui arrive par rapport à la croissance du travail résolu, pour les files touchées par l'IA | (variation des éléments créés) / (variation des éléments résolus), comparée à la ligne de base d'avant l'IA | ratio | Historique des tickets et du suivi | Gestion des incidents ; gestion des demandes de service | Équilibre du flux | Mensuelle |
| Drapeaux de dérive des métriques | Nombre de métriques dont la définition ou la distribution a nettement changé après l'introduction de l'IA, revues et annotées | métriques signalées en revue / métriques du registre | nombre ; pourcentage | Revue du registre des métriques, vérifications de distribution | Mesure et rapport | Rétrospective sur la mesure | Trimestrielle |

Définissez « utile » dans une grille écrite : correct, pertinent pour un besoin réel, non dupliqué et à jour. La charge de vérification compte le temps passé par des personnes, y compris le temps de reformuler les instructions, et exclut le temps qui n'est qu'attente. La part revue est un contrôle : la connaissance générée non revue est suivie séparément et gardée visiblement étiquetée. Les drapeaux de dérive des métriques sont des discussions, non des pénalités : un drapeau signifie qu'une personne a décidé d'ajuster la définition, d'annoter la tendance ou de rétablir une ligne de base. Toutes les mesures décrivent des processus et du contenu, non des individus.

## Recommandations

### Associer le volume à l'utilité

**1. Intégrez une vérification d'utilité à chaque métrique de volume.** Pour chaque mesure de volume ou de vitesse de votre tableau de bord, nommez une mesure d'utilité jugée par une personne. Les tickets créés s'associent à la qualité de résolution, les articles écrits à l'usage et à l'exactitude des articles, les changements fusionnés à la rétention et à la reprise (voir le sujet 10.2, Mesurer le travail assisté par l'IA). Montrez-les ensemble, et discutez quand ils divergent.

**2. Échantillonnez et jugez, régulièrement.** Chaque mois, tirez un échantillon aléatoire d'éléments des flux que l'IA touche et faites-les juger par une personne qualifiée selon une grille écrite. Consignez la part utile et les raisons pour lesquelles des éléments échouent. Faites tourner les examinateurs et gardez-les indépendants des producteurs. L'échantillonnage est la principale défense contre la dilution lente.

**3. Rapportez les résultats avant les productions.** Dans les rapports aux dirigeants, commencez par les résultats : problèmes résolus, utilisateurs satisfaits, défauts évités. Mettez les décomptes de production ensuite, comme contexte. Si le rapport garderait sa valeur une fois les décomptes de production retirés, il est bien orienté.

### Maîtriser la vérification et le bruit

**4. Mesurez la charge de vérification.** Estimez le temps passé à vérifier et à corriger le travail généré, et suivez-le en tendance par unité de production. S'il monte quand la production monte, le gain net est plus petit que ne le suggèrent les chiffres de génération, et les relecteurs sont peut-être en route vers la surcharge. Incluez la charge dans le coût par tâche (voir le sujet 10.1, L'IA dans la mesure de la gestion des services).

**5. Limitez ce qui entre dans le système.** Décidez quel contenu généré peut être créé et publié automatiquement, et lequel demande une revue. Fixez des limites à la taille et au nombre de changements générés dans une revue. Rendez facile de dire non au volume. Une file plus petite avec des éléments plus clairs sert mieux les utilisateurs.

**6. Gérez la base de connaissances comme un produit.** Étiquetez le contenu généré, exigez une revue avant publication, retirez les doublons et les éléments périmés, et suivez la redondance et l'usage. Une base de connaissances est utile en proportion de la confiance que lui accordent les utilisateurs. Retirez les articles que personne n'emploie et dont personne ne peut se porter garant (voir le sujet 3.6, Métriques de gestion des connaissances).

**7. Gardez propres les flux d'alertes et de tickets.** Si l'IA crée des tickets à partir d'alertes ou de résumés, mesurez la part utile et les doublons. Ajustez énergiquement. Traitez un rapport signal sur bruit qui baisse comme un incident à part entière, car il nuit à la réponse quand un vrai problème arrive.

### Rompre les boucles et surveiller la ligne de base

**8. Empêchez le contenu généré de s'alimenter lui-même sans contrôle.** Là où un assistant puise dans une base de connaissances, un historique de tickets ou des rapports passés, assurez-vous que le matériel généré dans ces sources a été revu, ou qu'il est étiqueté et pondéré en conséquence. Échantillonnez la chaîne : choisissez une réponse et retracez-la jusqu'à ses sources pour voir d'où elle vient. Les boucles non contrôlées amplifient les erreurs.

**9. Rétablissez une ligne de base quand les données changent.** Après l'introduction de l'IA, annotez les graphiques de tendance et, là où la nature des données a changé, commencez une nouvelle ligne de base. Vérifiez les distributions, pas seulement les totaux : la longueur des tickets, la composition des catégories et le temps de création peuvent tous changer. Les drapeaux de dérive des métriques provoquent ces conversations (voir le sujet 1.6, Culture statistique pour les métriques de service).

**10. Cherchez l'effet rebond.** Quand une tâche devient moins chère, demandez si la demande pour elle va croître. Décidez d'avance de la manière d'employer le temps économisé, pour qu'il ne soit pas absorbé par plus de production de faible valeur. Une équipe qui produit deux fois plus de rapports avec le même effort fait peut-être un travail moins utile.

### Garder l'attention humaine dans la boucle

**11. Protégez l'attention des relecteurs et des utilisateurs.** La capacité de revue et l'attention sont rares. Réduisez le volume de matériel que les gens doivent lire, donnez aux relecteurs des charges réalistes et demandez-leur ce qui devient plus difficile. Un rythme soutenable inclut le rythme de lecture et de jugement (voir le sujet 9.2, Métriques de satisfaction et de bien-être).

**12. Demandez aux utilisateurs et aux parties prenantes si le signal est clair.** L'implication continue des personnes qui emploient les productions est le meilleur test. Demandez si la base de connaissances est plus facile ou plus difficile à employer, si les rapports leur disent ce dont ils ont besoin, si la file leur paraît plus claire. Leurs réponses, et leurs commentaires, devraient se lire à côté des chiffres.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Rapport production-résultat | Choisir une mesure de résultat qui monte avec le volume ; changer la période | Résultat fixé dans le registre ; comparer à la satisfaction et au taux de réouverture |
| Part d'éléments utiles | Échantillonner des éléments faciles ; grille indulgente ; examinateurs influencés par le producteur | Échantillon aléatoire ; grille écrite ; examinateurs indépendants et tournants |
| Charge de vérification | Ne pas consigner le temps de revue ; déplacer la vérification vers les équipes en aval | Inclure la reprise en aval ; interroger les relecteurs sur la charge |
| Taux de redondance du contenu | Règles d'appariement étroites qui manquent des doublons ; fusionner des éléments distincts | Échantillonner les doublons à la main ; consigner les règles de fusion |
| Part revue des connaissances générées | Marquer la revue comme faite sans lire ; revoir en bloc | Échantillonner les revues pour leur substance ; temps par revue ; taux d'erreurs dans les éléments publiés |
| Entrée du backlog par rapport à la résolution | Clore automatiquement les éléments ; scinder les éléments | Vérifier la qualité de la résolution ; taux de réouverture ; échantillonner les éléments clos |
| Drapeaux de dérive des métriques | Ne pas signaler pour éviter le travail ; tout signaler | Revoir toutes les métriques chaque trimestre ; exiger une décision pour chaque drapeau |

Une lecture saine est une part d'éléments utiles stable ou croissante à mesure que le volume croît, une charge de vérification connue et abordable, une base de connaissances à faible redondance avec du contenu généré revu, des files au signal clair et une vue de direction qui commence par les résultats.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Compter les productions | Facile, familier | Gonfle ; récompense le volume |
| Mesurer les résultats | Reflète la valeur | Plus lent ; plus difficile à attribuer |
| Échantillonner et juger | Détecte la dilution | Exige des examinateurs compétents ; effort |
| Notation automatique de la qualité | Passe à l'échelle | L'opinion d'un autre modèle ; peut partager les mêmes angles morts |
| Revoir tout ce qui est généré | Sûr | Supprime le bénéfice ; relecteurs surchargés |
| Revoir un échantillon | Praticable | Certains éléments de mauvaise qualité passent |
| Permettre la génération ouverte | Rapide, large | Bruit ; la confiance s'érode |
| Limiter la génération à des usages approuvés | Signal plus propre | Adoption plus lente ; bénéfices manqués |

La réponse en prose est de mesurer les résultats, d'échantillonner et de juger l'utilité avec des personnes, de limiter ce qui entre dans les stocks partagés sans revue et de revisiter les lignes de base. Employez la notation automatique comme une aide et non comme le juge.

## Questions à discuter avec votre équipe

**1. Lesquels de nos chiffres ont monté depuis que nous employons l'IA, et qu'ont-ils apporté aux personnes que nous servons ?**
Listez les chiffres. Pour chacun, regardez le résultat qu'il devait refléter. L'animateur doit noter où le résultat n'a pas bougé. Associez ces chiffres à une vérification d'utilité.

**2. Quelle part de ce que nous avons publié ou créé le mois dernier serions-nous heureux de défendre ligne à ligne ?**
Prenez un échantillon aléatoire et lisez-le ensemble. Marquez ce qui est utile, mince, faux ou dupliqué. Discutez du taux et des causes. Convenez d'une norme pour ce qui entre dans les stocks partagés.

**3. Où la vérification devient-elle notre goulot d'étranglement ?**
Interrogez les relecteurs. Regardez les files de revues, la profondeur des revues et l'effort qu'ils portent maintenant. Convenez d'une limite à la taille ou au nombre d'éléments générés par revue, et d'une façon de mesurer la charge.

**4. Quel contenu généré alimente ici d'autre contenu généré ?**
Retracez une réponse typique jusqu'à ses sources. Où la chaîne a-t-elle commencé ? Discutez de l'endroit où une personne devrait vérifier la chaîne, ou étiqueter le contenu.

**5. Que dirait un utilisateur de notre base de connaissances maintenant, par rapport à il y a un an ?**
Lisez les commentaires récents et regardez les données d'usage. Demandez s'il est plus facile ou plus difficile de trouver une réponse digne de confiance. Convenez d'un nettoyage et d'une règle pour le nouveau contenu.

**6. Lesquelles de nos tendances devrions-nous redémarrer avec une nouvelle ligne de base ?**
Listez les métriques qui dépendent du volume ou de la façon dont les éléments sont créés. Cherchez les changements de forme depuis l'arrivée de l'IA. Annotez les tendances, et décidez lesquelles ont besoin d'une nouvelle ligne de base.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison génèrent une grande part du volume et portent l'entretien. Elles devraient favoriser des changements plus petits et plus clairs, garder le matériel généré revu et étiqueté, et surveiller la rétention et la reprise. Elles devraient refuser les métriques fondées sur le volume généré, et demander des mesures de résultats.

### Équipes de service et d'exploitation

Les équipes d'exploitation vivent dans les files, les alertes et la base de connaissances que la dilution abîme. Elles devraient ajuster les tickets et alertes créés par l'IA pour garder le signal fort, revoir la connaissance générée avant sa publication et signaler quand le flux devient du bruit. Elles sont les mieux placées pour juger l'utilité.

### Direction et gouvernance

Les dirigeants reçoivent les tableaux de bord que l'inflation déforme. Ils devraient demander les résultats d'abord, exiger des vérifications d'utilité à côté du volume, financer la capacité de revue et accepter que certaines mesures aient besoin d'une nouvelle ligne de base. La gouvernance devrait vérifier que le contenu généré dans les stocks partagés est revu et étiqueté.

### Clients et utilisateurs

Les utilisateurs supportent le coût de la dilution quand les réponses sont fausses, que les articles se contredisent et que les réponses sont longues et vides. Ils veulent une aide courte, correcte et pertinente. Leur réaction à la qualité de ce qu'ils reçoivent est un test direct de la survie du signal.

## En pratique : un exemple d'ITIL agile

Le groupe informatique d'une entreprise pharmaceutique mondiale active un assistant d'IA pour rédiger des articles de connaissances, résumer des tickets et préparer des rapports d'état hebdomadaires. En un trimestre, le tableau de bord a l'air excellent. Les chiffres ci-dessous sont illustratifs.

Les articles de connaissances créés passent de 140 à 610 par mois. Les tickets portent des résumés détaillés rédigés par l'IA. Les rapports hebdomadaires font douze pages. La responsable de la qualité de service remarque que la satisfaction envers le libre-service a baissé et que le centre de services rapporte plus de contacts « l'article n'a pas aidé ». Elle échantillonne 100 des nouveaux articles avec deux agents expérimentés. Seuls 54 sont jugés utiles : 23 dupliquent des articles existants, 15 contiennent des étapes périmées ou incorrectes, et 8 sont trop vagues pour qu'on agisse. Parmi les nouveaux articles, 71 pour cent ont été publiés sans revue humaine. La base de connaissances compte maintenant environ 3 200 articles, avec un taux de redondance du contenu qu'elle estime à 28 pour cent contre 9 pour cent un an plus tôt. Les agents rapportent que trouver une réponse digne de confiance prend plus de temps. La charge de vérification des éditeurs d'articles du centre de services a grossi jusqu'à environ 40 heures par semaine, contre 12. Les résumés de tickets rédigés par l'IA font que les réponses générées ultérieurement par l'IA s'appuient sur un texte que personne n'a écrit, et dans une trace de cinq réponses jusqu'à leurs sources, deux s'appuyaient sur un résumé qui avait mal énoncé le problème. Les rapports d'état hebdomadaires, une fois lus, disent peu de choses qui n'étaient pas dans le précédent, et les parties prenantes ont cessé de lire au-delà de la page deux.

Elle propose quatre changements, que l'équipe de direction du service et les responsables des connaissances adoptent. Les articles générés exigent la revue d'un éditeur nommé avant publication, et sont étiquetés jusqu'à leur approbation. Une limite d'un article généré par groupe de sujets empêche les doublons, et un balayage fusionne ou retire les éléments redondants. Les modèles de rapports sont réduits à deux pages qui commencent par les résultats, et l'IA ne sert à rédiger que les sections qu'une personne édite ensuite. Les résumés de tickets sont marqués comme générés, et un échantillon est vérifié chaque mois. Le tableau de bord rapporte la part d'éléments utiles, le taux de redondance, la part revue et la charge de vérification à côté des décomptes d'articles.

Après deux trimestres, les articles créés par mois tombent à 190, la part d'éléments utiles monte à 91 pour cent, le taux de redondance tombe à 11 pour cent, la part revue est de 100 pour cent et la charge de vérification se stabilise à environ 16 heures par semaine. La satisfaction envers le libre-service se rétablit et les contacts « l'article n'a pas aidé » diminuent. Les parties prenantes lisent le rapport de deux pages. Un directeur demande un objectif de 1 000 articles par mois pour montrer la valeur du programme d'IA. La responsable de la qualité de service explique que le décompte était le problème, et propose de suivre l'utilité et l'usage. La décision est consignée.

## Perspective sectorielle

**Startup.** La génération est bon marché et le temps de revue est rare. Gardez la documentation et les tickets courts, revoyez ce que les clients liront et supprimez sans hésiter. Un petit ensemble correct d'articles vaut mieux qu'un grand ensemble douteux.

**Petite entreprise.** Il y a peu de capacité de revue ; limitez donc ce que l'outil produit. Préférez une poignée de guides et de modèles vérifiés. Méfiez-vous de publier du matériel généré sur des pages publiques sans le vérifier.

**Grande entreprise.** L'échelle amplifie le bruit. Établissez une gouvernance du contenu avec des responsables, des étiquettes et des règles de revue, mesurez l'utilité dans toute la base de connaissances et menez des nettoyages périodiques. Partagez les grilles entre équipes et comparez les tendances, non les équipes.

**Gouvernement et secteur public.** Le contenu public doit être exact et accessible, et les erreurs peuvent nuire. Exigez la revue de l'information publique générée, gardez des traces de la façon dont elle a été produite et appliquez les normes de langage clair et d'accessibilité. Des règles de conservation et d'archives peuvent s'appliquer au matériel généré (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts de la protection contre l'inflation sont modestes : temps de revue pour l'échantillonnage, effort éditorial pour le contenu généré, outillage de détection des doublons et effort pour rétablir les lignes de base des tendances. Les coûts de ne pas le faire sont plus grands mais diffus : utilisateurs qui cessent de faire confiance au libre-service, relecteurs qui s'épuisent, décisions prises sur des chiffres gonflés et projets de nettoyage.

Bâtissez le dossier à partir de vos propres données : la part d'éléments utiles et la charge de vérification dans le temps, le volume de contacts causés par un contenu peu utile et le coût d'un nettoyage de la base de connaissances. Évitez d'employer des chiffres publiés sur la qualité du contenu généré, qui varient largement selon l'outil, la tâche et la méthode. Incluez le coût évité des atteintes à la réputation causées par la publication d'informations fausses (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Célébrer le volume.** Il récompense le bruit. Célébrez les résultats et l'utilité.
- **La vitesse du premier brouillon comme histoire de productivité.** Le gain peut disparaître en vérification. Mesurez le temps jusqu'à un résultat vérifié.
- **Publier du contenu généré sans revue.** La confiance s'érode discrètement. Revoyez et étiquetez.
- **Laisser le contenu généré alimenter la génération.** Les erreurs se composent. Vérifiez la chaîne.
- **Des lignes de base inchangées.** Les tendances induisent en erreur après un changement technologique. Annotez et rétablissez.
- **Surcharger les relecteurs.** La revue devient un tampon. Limitez le volume et mesurez la charge.
- **Employer un juge d'IA pour tout.** Il peut partager les angles morts du producteur. Gardez des personnes dans la boucle.
- **Ignorer l'effet rebond.** Un travail moins cher attire plus de travail. Décidez à quoi sert le temps économisé.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Association et échantillonnage | Volume rapporté seul | Impressions informelles de qualité | Chaque métrique de volume associée à une vérification d'utilité échantillonnée | Utilité, charge et redondance gérées avec des objectifs de revue et non de volume | Vue de la qualité du signal dans toute l'organisation ; grilles partagées avec les partenaires |
| Contenu et boucles | Contenu généré mêlé | Un peu d'étiquetage | Contenu généré étiqueté et revu avant publication ; chaînes échantillonnées | Boucles surveillées ; stocks entretenus ; doublons retirés selon un calendrier | Provenance suivie de bout en bout entre outils et fournisseurs |
| Lignes de base et attention | Tendances lues à travers le changement | Annotations sur certains graphiques | Lignes de base rétablies là où les données ont changé ; effet rebond considéré | Drapeaux de dérive revus chaque trimestre ; charge des relecteurs gérée | La conception des métriques s'adapte continuellement au changement technologique avec les parties prenantes |

## Liste de vérification

- [ ] Chaque métrique de volume ou de vitesse a une compagne d'utilité jugée par une personne.
- [ ] Un échantillon aléatoire d'éléments touchés par l'IA est revu chaque mois selon une grille écrite.
- [ ] La charge de vérification est estimée et suivie en tendance.
- [ ] La connaissance générée est étiquetée et revue avant publication.
- [ ] La redondance dans la base de connaissances est mesurée et réduite.
- [ ] Les flux d'alertes et de tickets sont surveillés pour la part utile et les doublons.
- [ ] Les chaînes allant des productions générées à leurs sources sont échantillonnées.
- [ ] Les tendances à travers l'introduction de l'IA sont annotées ou rétablies sur une nouvelle ligne de base.
- [ ] Les rapports aux dirigeants commencent par les résultats.
- [ ] Les utilisateurs et les parties prenantes sont interrogés pour savoir si le signal est plus clair ou plus bruyant.

## Prompts d'IA

**Créez une grille d'utilité.**

```text
Rédigez une courte grille (six critères au plus) pour juger si un [knowledge
article, ticket summary, status report] est utile dans [type of organization].
Incluez l'exactitude, la pertinence pour un besoin réel, la duplication,
l'actualité et la clarté, avec une cote à trois niveaux et des exemples de
chaque niveau. N'inventez pas de statistiques. Énumérez vos hypothèses et la
manière de garder les examinateurs cohérents.
```

**Analysez une baisse du signal.**

```text
Depuis l'introduction de l'IA pour [task], ces chiffres ont changé : [paste
volumes, resolution, satisfaction, reopen rate, reviewer hours]. Décrivez ce que
le schéma suggère sur l'inflation ou la dilution, quels changements peuvent être
dus à une création plus facile, quoi échantillonner ensuite et quelles métriques
pourraient avoir besoin d'une nouvelle ligne de base. Ne supposez pas de causes
que les données ne peuvent pas soutenir. Énumérez vos hypothèses.
```

**Planifiez un nettoyage de la base de connaissances.**

```text
Notre base de connaissances compte [number] articles, dont [number] ont été
générés au cours des [period] derniers. Proposez un plan de nettoyage : comment
détecter les doublons et les éléments périmés, comment prioriser selon l'usage,
comment revoir les articles générés, des règles pour éviter la récidive et des
mesures à suivre. Ne supposez pas d'outils précis. Énumérez vos hypothèses et
vos risques.
```

**Retracez une chaîne de contenu généré.**

```text
Voici une réponse générée par l'IA et les sources dont elle s'est inspirée :
[paste]. Retracez chaque affirmation jusqu'à sa source et marquez si la source
était rédigée par un humain, un contenu généré revu ou un contenu généré non
revu. Repérez où une erreur a pu entrer et suggérez une vérification. Ne
supposez pas de faits au-delà du texte. Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver la compagne d'utilité d'une métrique de volume ou de vitesse.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique touchée par l'IA associe le volume à une utilité échantillonnée et porte son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Quand l'IA rend la production bon marché, les métriques de volume et de vitesse gonflent et la part utile peut baisser.
- Associez chaque mesure de volume ou de vitesse à une vérification d'utilité échantillonnée et jugée par une personne.
- Mesurez le temps jusqu'à un résultat vérifié et la charge de vérification, car la vérification devient le goulot d'étranglement.
- Étiquetez et revoyez le contenu généré avant son entrée dans les stocks partagés, et empêchez les boucles de s'alimenter sans contrôle.
- Rétablissez les lignes de base des tendances après un changement technologique, et faites commencer les rapports par les résultats.
- Décidez d'avance à quoi sert le temps économisé, et protégez l'attention des relecteurs et des utilisateurs.

## Références et lectures complémentaires

1. Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., and Gal, Y., "AI models collapse when trained on recursively generated data," *Nature*, 631, 2024.
2. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
11. Wikipedia, [Information overload](https://en.wikipedia.org/wiki/Information_overload).
12. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
13. Wikipedia, [Alert fatigue](https://en.wikipedia.org/wiki/Alert_fatigue).
14. Wikipedia, [AI slop](https://en.wikipedia.org/wiki/AI_slop).
15. Wikipedia, [Brandolini's law](https://en.wikipedia.org/wiki/Brandolini%27s_law).
16. Wikipedia, [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox).
17. Wikipedia, [Model collapse](https://en.wikipedia.org/wiki/Model_collapse).
18. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
