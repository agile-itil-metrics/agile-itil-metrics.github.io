# Panorama des outils

**Choisissez les outils en fonction des questions auxquelles vous devez répondre et des données auxquelles vous pouvez vous fier, gardez les données portables et dépensez moins pour les plateformes que pour les habitudes qui rendent les chiffres dignes d'être lus.**

## Résumé et motivation

Les outils sont l'endroit où les programmes de métriques déraillent le plus souvent, dans deux directions opposées. Certaines organisations achètent d'abord une grande plateforme d'analyse et découvrent plus tard qu'elles n'ont ni définitions convenues, ni données propres, ni public. D'autres bâtissent un tas de scripts et de tableurs que seule une personne comprend, et le programme prend fin quand cette personne s'en va. Les deux partent de l'outil et ignorent les questions auxquelles il doit répondre.

Le paysage est encombré et change rapidement ; ce sujet est donc délibérément neutre envers les vendeurs. Il décrit les genres d'outils, les flux de données entre eux, les compromis entre construire et acheter, et des critères de choix. Il ne nomme aucun produit, car les noms de produits vieillissent vite et un livre est un mauvais guide des fonctions et des prix actuels. Les principes de mesure ne changent pas avec le vendeur : savoir ce que l'on mesure, d'où viennent les données, qui les détient et comment elles seront lues.

La plupart des données dont un programme de métriques de service a besoin existent déjà dans des systèmes de référence. Les outils de [gestion des services informatiques](https://en.wikipedia.org/wiki/IT_service_management) contiennent les incidents, les demandes, les problèmes, les changements et les enregistrements de configuration. Les systèmes de contrôle de source, de construction, de test et de déploiement contiennent l'historique du travail d'ingénierie. Les systèmes de supervision et d'[observabilité](https://en.wikipedia.org/wiki/Observability_(software)) contiennent les données de disponibilité, de latence et d'erreurs. Les outils de sondage, les systèmes financiers, les systèmes de ressources humaines et les dépôts de contrats contiennent le reste. Un programme de métriques joint ces sources sans perturber le travail qui s'y fait (voir le sujet 1.5, Sources de données et instrumentation).

Le déplacement des données depuis les sources vers un endroit où elles peuvent être analysées est une [chaîne de données](https://en.wikipedia.org/wiki/Data_pipeline), et le schéma classique est l'[extraction, transformation, chargement](https://en.wikipedia.org/wiki/Extract,_transform,_load) (ETL) : lire dans les sources, remodeler et nettoyer, puis écrire dans un stock. Le stock peut être un [entrepôt de données](https://en.wikipedia.org/wiki/Data_warehouse), un dépôt intégré de données de plusieurs systèmes organisé pour l'analyse. Les programmes accèdent à ces systèmes par une [interface de programmation](https://en.wikipedia.org/wiki/Application_programming_interface) (API), qui est la manière dont un logiciel demande à un autre des données de façon définie. La qualité de ce qui circule détermine la qualité de chaque graphique. La [qualité des données](https://en.wikipedia.org/wiki/Data_quality) couvre l'exactitude, l'exhaustivité, la cohérence et l'actualité, et la discipline qui l'entretient est la [gouvernance des données](https://en.wikipedia.org/wiki/Data_governance).

Le côté financier mérite du soin. Le [coût total de possession](https://en.wikipedia.org/wiki/Total_cost_of_ownership) d'un outil comprend les licences, l'infrastructure, l'intégration, la formation, l'administration et le coût d'en sortir. L'[enfermement chez un fournisseur](https://en.wikipedia.org/wiki/Vendor_lock-in) est la situation où changer de fournisseur est si coûteux que le client est de fait lié. Les programmes de métriques y sont particulièrement exposés, car les définitions, l'historique et les tableaux de bord s'accumulent à l'intérieur d'un outil, et les en extraire plus tard est difficile.

Les buts agiles façonnent l'approche. La livraison continue s'applique au programme : mettez en place le chemin fonctionnel le plus mince d'une source vers une vue pour une équipe, apprenez de son usage et étendez. L'implication continue des parties prenantes signifie que les personnes qui emploieront les chiffres participent aux choix d'outils. L'amélioration continue et l'évolution permanente signifient que l'on s'attend à ce que l'outillage change, de sorte que la portabilité compte plus que la perfection. Un rythme soutenable signifie que le programme ne devient pas un projet d'ingénierie de données qui affame le travail qu'il mesure. Et les individus motivés font un meilleur travail avec des outils qu'ils ont aidé à choisir et qu'ils comprennent qu'avec des outils imposés d'en haut, surtout des outils qui ressemblent à de la surveillance (voir le sujet 11.3, Déployer les métriques sans semer la peur).

Le sujet s'appuie sur les orientations de conception de tableaux de bord (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service) et sur les sujets de gouvernance de la partie 1.

## Principes clés

- **Les questions avant les outils.** Écrivez d'abord les questions et les mesures, puis voyez de quel outillage elles ont besoin.
- **Employer les systèmes de référence.** Prenez les données là où le travail se fait, et évitez de demander aux gens de les saisir deux fois.
- **Garder les définitions hors de l'outil.** Entretenez les définitions de métriques sous une forme simple et portable qui survit à un changement de plateforme.
- **Préférer des données portables.** Stockez les données en formats ouverts, avec des interfaces documentées, et gardez une voie de sortie.
- **Commencer mince et grandir.** Une source, une vue, une équipe, puis étendre.
- **Compter le coût complet.** Les licences ne sont qu'une fraction du coût de l'intégration, du nettoyage des données et de l'entretien.
- **Protéger les gens.** Les outils devraient agréger au niveau des équipes et des services, appliquer des règles d'accès et rendre la surveillance difficile.
- **Traiter la chaîne de données comme un service.** Elle a besoin d'un responsable, de supervision, de tests et d'un moyen de traiter les défaillances.

## Définitions des métriques

Les mesures ci-dessous décrivent la santé de l'outillage de métriques et de son approvisionnement en données. Elles sont destinées à l'équipe du programme, pour garder l'infrastructure honnête, et ne doivent pas servir à coter des personnes.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des sources | Part des systèmes de référence nécessaires aux mesures convenues qui alimentent automatiquement le stock de métriques | sources connectées et testées / sources nécessaires aux mesures convenues | pourcentage | Inventaire des sources ; configuration de la chaîne de données | Gestion de l'information et de la technologie ; gestion de la configuration des services | Livraison continue de la chaîne de données | Trimestrielle |
| Fiabilité de la chaîne de données | Part des chargements de données planifiés qui s'achèvent à temps avec des contrôles réussis | chargements à temps avec contrôles réussis / chargements planifiés | pourcentage | Journaux de la chaîne de données et résultats de tests | Supervision et gestion des événements | Tests automatisés et retour rapide | Hebdomadaire |
| Délai d'une nouvelle mesure | Temps écoulé entre une demande approuvée de nouvelle mesure et sa disponibilité avec une fiche de définition | jours entre l'approbation et la publication, médiane et 85e percentile | jours | Enregistrements de demandes et de mises en production | Gestion des demandes de service ; maîtrise des changements | Petits incréments de valeur | Trimestrielle |
| Taux de rapprochement | Part des chiffres clés qui concordent entre le stock de métriques et le système source lors d'un contrôle par échantillon | chiffres concordant dans la tolérance / chiffres vérifiés | pourcentage | Contrôles de rapprochement | Gestion de l'information et de la technologie | Retour digne de confiance | Mensuelle |
| Part de l'effort manuel | Part de l'effort des rapports récurrents consacrée à la collecte et au nettoyage manuels | heures d'étapes manuelles / heures totales des rapports récurrents | pourcentage | Estimations de temps ; sondage d'équipe | Amélioration continue | Éliminer les tâches répétitives | Trimestrielle |
| Préparation à la sortie | Capacité d'exporter les définitions, l'historique et les tableaux de bord sous une forme documentée et utilisable | exports testés et complets / tests d'export planifiés | pourcentage | Enregistrements de tests d'export | Gestion des fournisseurs ; gestion de la continuité de service | Choix soutenables | Annuelle |
| Coût de l'outillage par équipe soutenue | Coût annuel complet de l'outillage du programme divisé par les équipes qu'il sert | (licences + infrastructure + effort d'entretien) / équipes servies | monnaie par équipe | Enregistrements financiers et d'effort | Gestion financière des services | Rythme soutenable | Annuelle |

Comptez les sources selon ce dont les mesures convenues ont besoin et non selon ce qui existe, pour que la couverture ne soit pas relevée en connectant des systèmes sans rapport. Le rapprochement exige de choisir d'avance un échantillon et une tolérance. Le coût de l'outillage par équipe soutenue est un chiffre descriptif employé pour comparer des options, non un objectif à pousser vers le bas. Il inclut l'effort des personnes qui entretiennent la chaîne de données.

## Recommandations

### Décider de ce dont vous avez besoin

**1. Écrivez les exigences sous forme de questions et de mesures.** Listez les mesures que le programme a convenu de publier (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service), les sources dont chacune a besoin, la fraîcheur requise de chacune, qui peut la voir et combien de temps l'historique doit être conservé. Distinguez l'indispensable des préférences. Un court document de deux pages vaut mieux qu'une longue demande de propositions.

**2. Faites l'inventaire de ce que vous possédez déjà.** Beaucoup d'organisations ont des fonctions d'analyse dans leurs outils de gestion des services, d'ingénierie et de supervision qui restent inutilisées. Beaucoup ont des tableurs, des scripts et des rapports qui répondent déjà à une partie du besoin. Commencez par voir ce qu'ils peuvent faire. L'outil le moins cher est celui qui est déjà payé et déjà compris.

**3. Faites le bilan des données avant l'outil.** Pour chaque source, vérifiez si les données sont complètes, saisies de façon cohérente et accessibles par une interface. Un outil ne peut pas réparer des catégories d'incidents que personne n'emploie, des enregistrements de changements créés après coup ou des horodatages écrasés. Une partie du travail initial le plus précieux consiste à corriger la saisie des données à la source (voir le sujet 7.4, Métriques de qualité de la configuration et de la CMDB).

### Construire, acheter ou combiner

**4. Comparez la construction et l'achat sur le coût complet et l'adéquation.** Acheter une plateforme d'analyse ou un produit d'analyse d'ingénierie prêt à l'emploi apporte des connecteurs, des graphiques et un soutien prêts, au prix de licences, d'un modèle figé du monde et d'une dépendance. Construire une chaîne de données et des vues apporte l'adéquation et le contrôle, au prix de temps d'ingénierie et d'entretien. La plupart des organisations finissent par combiner : employer le rapport intégré là où il est assez bon, employer un outil d'analyse général pour les vues et bâtir de minces connecteurs là où rien d'autre ne convient.

**5. Éprouvez un prototype avec de vraies données.** Avant de vous engager, menez un essai à durée limitée avec deux ou trois de vos propres mesures, de vraies données et de vrais utilisateurs. Vérifiez le temps que les connexions ont pris, la façon dont l'outil a traité vos définitions, s'il pouvait montrer des distributions et des percentiles et comment il contrôlait l'accès. Les démonstrations commerciales emploient des données propres, et les vôtres ne le sont pas.

**6. Prévoyez la sortie avant d'entrer.** Demandez comment les définitions, l'historique et les tableaux de bord peuvent être exportés, et testez-le. Préférez les outils aux interfaces ouvertes et aux formats standard, et gardez votre propre copie des définitions de métriques et des données nettoyées. Le coût de partir fait partie du coût de rester, et une sortie crédible améliore votre position de négociation (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

### Choisir selon des critères clairs

**7. Employez des critères de sélection neutres envers les vendeurs.** Des critères utiles incluent les suivants. Les sources de données dont vous avez besoin ont-elles des connecteurs entretenus ? Les définitions peuvent-elles être écrites, versionnées et revues ? L'outil peut-il montrer des distributions, des percentiles et des tendances autant que des moyennes et des décomptes ? Agrège-t-il au niveau des équipes et des services et permet-il de restreindre les vues individuelles ? Prend-il en charge l'accès par rôles et l'audit ? Les données sont-elles exportables en formats ouverts ? Comment le vendeur traite-t-il les changements, les pannes et les incidents de sécurité ? Combien cela coûte-t-il à l'échelle que vous attendez dans trois ans ?

**8. Méfiez-vous de la notation intégrée.** Certains outils offrent d'emblée des scores composites, des classements de personnes ou des indices de « productivité ». Ils sont faciles à adopter et difficiles à défendre (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Vérifiez si ces fonctions peuvent être désactivées, et fixez la politique avant d'activer quoi que ce soit.

**9. Associez les personnes qui l'emploieront.** Demandez aux équipes d'essayer les options retenues avec leurs données. Leurs questions exposeront des limites qu'un document d'exigences n'a pas décelées. Associez tôt la sécurité, la vie privée, les finances et les achats (voir le sujet 8.1, Métriques des incidents de sécurité et des vulnérabilités).

### Exploiter la chaîne de données comme un service

**10. Automatisez, testez et supervisez la chaîne de données.** Traitez les chargements de données comme tout autre service en production. Exécutez des contrôles automatisés sur les décomptes, les plages, les doublons et la fraîcheur. Alertez en cas d'échec, et montrez l'état de la qualité des données sur le tableau de bord. Versionnez la logique de transformation et revoyez ses changements comme du code (voir le sujet 5.5, Métriques de supervision et de qualité des alertes).

**11. Tenez un catalogue de définitions.** Entretenez un catalogue partagé avec la définition, la formule, la source, le responsable et les limites de chaque mesure. Il peut être un dépôt de fichiers texte simples, un outil de catalogue de données ou un wiki. Ce qui compte est qu'il soit la source de vérité pour le sens, et que les tableaux de bord y puisent ou y renvoient (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

**12. Revoyez l'outillage chaque année.** Chaque année, vérifiez ce que coûte l'outillage, quelles parties le programme emploie, où subsiste l'effort manuel et quelles options plus récentes existent. Retirez ce que personne n'emploie. Reconsidérez l'équilibre entre construire et acheter à mesure que le programme mûrit. Prévoyez le changement comme une partie normale du travail.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Couverture des sources | Connecter des sources faciles ou sans rapport ; compter une connexion qui ne porte aucune donnée utilisable | Compter selon les mesures convenues ; vérifier l'exhaustivité des données par source |
| Fiabilité de la chaîne de données | Relâcher les contrôles pour que les chargements réussissent toujours ; planifier moins de chargements | Revoir la solidité des contrôles ; suivre le rapprochement et les nombres de lignes des sources |
| Délai d'une nouvelle mesure | Publier sans définitions ni tests ; rétrécir ce qui compte comme nouvelle mesure | Exiger la fiche de définition et un contrôle de rapprochement pour l'achèvement |
| Taux de rapprochement | Choisir des chiffres faciles à vérifier ; élargir la tolérance après un échec | Choisir les échantillons avant le contrôle ; fixer la tolérance d'avance ; inclure des chiffres difficiles |
| Part de l'effort manuel | Sous-estimer le travail manuel ; cacher l'effort dans d'autres budgets | Interroger les personnes qui font le travail ; comparer au temps passé tard dans chaque cycle de rapport |
| Préparation à la sortie | Tester un export partiel ; compter un plan documenté comme de la préparation | Mener une restauration complète dans un autre outil sur un échantillon ; vérifier les définitions et l'historique |
| Coût de l'outillage par équipe soutenue | Exclure l'effort d'entretien ; ajouter des équipes sur le papier | Inclure le temps du personnel ; compter les équipes qui emploient activement leurs vues |

Une lecture saine montre des données qui arrivent à temps et se rapprochent de la source, de nouvelles mesures publiées avec leurs définitions, un effort manuel qui baisse et une sortie qui a été testée au moins une fois.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Rapport intégré de chaque outil | Peu coûteux ; déjà là ; compris | Silos ; définitions incohérentes entre outils |
| Suite unique d'un seul vendeur | Intégrée ; un seul contrat | Enfermement ; épouse le modèle du vendeur, non le vôtre |
| Produit d'analyse d'ingénierie prêt à l'emploi | Démarrage rapide ; connecteurs prêts | Modèle figé ; risque de notation individuelle ; coût à l'échelle |
| Outil général d'analyse et de visualisation | Souple ; larges compétences disponibles | Exige un approvisionnement en données et du talent de conception |
| Entrepôt avec couche de transformation | Fort contrôle ; jointures entre sources | Effort d'ingénierie ; exige un responsable |
| Tableurs et scripts | Rapides à démarrer ; pas de licence | Fragiles ; dépendent des individus ; difficiles à auditer |
| Pile à code source ouvert | Contrôle ; pas de coût de licence | Effort d'entretien ; le soutien dépend de vous |
| Métriques collectées à la main | Fonctionne sans outillage | Lent ; sujet aux erreurs ; difficile à soutenir |

La réponse en prose est de commencer avec ce que vous avez déjà, d'ajouter la connexion la plus mince qui répond à de vraies questions, de garder portables les définitions et les données, et de ne passer à des outils plus lourds que lorsque les plus légers limitent manifestement les décisions.

## Questions à discuter avec votre équipe

**1. Quels chiffres produisons-nous à la main chaque mois, et que faudrait-il pour arrêter ?**
Listez les rapports manuels et les heures qu'ils prennent. Trouvez la source de chacun et si elle a une interface. L'animateur doit demander quels rapports pourraient simplement être abandonnés. Convenez d'en automatiser un et d'en retirer un.

**2. Si notre outil de rapport actuel disparaissait demain, que perdrions-nous ?**
Nommez les définitions, l'historique et les tableaux de bord qui n'existent qu'à l'intérieur. Vérifiez lesquels sont exportables. Convenez d'où garder une copie.

**3. À quelles données de nos systèmes faisons-nous le moins confiance, et pourquoi ?**
Regardez les habitudes de saisie, les valeurs par défaut et les champs écrasés. Estimez dans quelle mesure chaque distorsion affecte les mesures que nous publions. Convenez de la correction de source qui ajouterait le plus de confiance pour le moins d'effort.

**4. Que l'outil laisse-t-il voir aux gens que nous ne voudrions pas qu'il laisse voir ?**
Vérifiez les vues individuelles, les journaux d'activité et les classements. Décidez de ce qu'il faut restreindre ou désactiver, et écrivez la règle avant que quiconque emploie la fonction.

**5. Combien de temps mettons-nous à ajouter une nouvelle mesure, et qu'est-ce qui nous ralentit ?**
Retracez une demande récente de l'approbation à la disponibilité. Marquez les attentes. Convenez de ce qu'il faut supprimer, comme des approbations, des définitions manquantes ou du nettoyage manuel.

**6. Quel est le coût complet de cet outil pour une équipe pendant un an ?**
Additionnez les licences, l'infrastructure, l'intégration, la formation et le temps des personnes qui l'entretiennent. Comparez avec les décisions qu'il a améliorées. Discutez de ce que nous cesserions de payer.

## Quatre perspectives

### Équipes produit et livraison

Les équipes veulent des données qui viennent du travail sans saisie supplémentaire, et des vues qui répondent à leurs questions. Elles devraient aider à choisir et à tester les outils, détenir les définitions de leurs propres mesures et refuser les fonctions qui classent les individus. Leur temps est l'intrant le plus rare, et un outillage qui leur demande de consigner le travail deux fois sera rejeté.

### Équipes de service et d'exploitation

Les équipes d'exploitation gèrent les sources et souvent la chaîne de données. Elles devraient traiter la chaîne comme un service avec supervision et tests, garder fiables les champs de données sources et signaler les changements dans les systèmes de référence qui casseront les connecteurs. Elles sont les premières à voir quand un chiffre est faux.

### Direction et gouvernance

Les dirigeants financent le programme et fixent les attentes. Ils devraient demander le coût total, non le prix de licence, exiger la portabilité et une sortie, résister à l'achat d'une plateforme pour résoudre un problème de définitions et insister sur des règles de vie privée et d'accès. Ils devraient accepter un début modeste et le juger aux décisions qu'il améliore.

### Clients et utilisateurs

Les clients et les utilisateurs voient rarement l'outillage, et ils vivent avec ses conséquences : les données qui les concernent sont stockées, combinées et analysées. Ils méritent des règles claires sur ce qui est collecté, combien de temps c'est conservé, qui le voit et comment c'est protégé. Là où des mesures s'appuient sur leurs retours, les outils devraient respecter le consentement et l'anonymat.

## En pratique : un exemple d'ITIL agile

Une entreprise régionale de logistique a un outil de gestion des services, un système de contrôle de source et de déploiement, une plateforme de supervision et un outil de sondage, et chacun produit ses propres rapports. La responsable de la gestion des services veut une vue unique de la santé des services pour 12 équipes. Un vendeur offre une plateforme d'analyse tout-en-un avec un contrat de trois ans. Les chiffres ci-dessous sont illustratifs.

La responsable de la gestion des services écrit d'abord les questions et les 14 mesures que les équipes et les dirigeants ont convenues lors des séances sur le tableau de bord. Elle fait l'inventaire de ce qui existe : l'outil de gestion des services peut exporter les données d'incidents et de changements par son interface, le système de déploiement fournit les horodatages de déploiement et la plateforme de supervision rapporte la disponibilité par rapport aux objectifs. Elle demande à un petit groupe de représentants des équipes d'éprouver deux options sur trois mesures avec de vraies données : la plateforme du vendeur et une combinaison d'un outil général de visualisation avec un petit stock de données et de minces connecteurs.

L'essai révèle des différences. La plateforme s'est connectée à toutes les sources en deux jours, mais elle calculait le délai de livraison comme une moyenne et ne pouvait pas montrer de percentile élevé, elle avait un « score de productivité d'équipe » intégré qu'on ne pouvait pas désactiver, et l'export des définitions de tableaux de bord produisait un fichier qu'aucun autre outil ne pouvait lire. La combinaison a pris 11 jours à connecter, mais elle montrait des médianes et des percentiles, gardait les définitions en texte simple dans un dépôt et restreignait les champs individuels au niveau du stock de données. Le groupe découvre aussi que 30 pour cent des enregistrements de changements étaient créés après le déploiement, de sorte que le délai de livraison était faux quel que soit l'outil qui le lisait. Corriger l'habitude de saisie à la source devient le premier travail.

L'entreprise choisit la combinaison. La couverture des sources passe de 3 sources nécessaires sur 8 à 7 sur 8 en deux trimestres. La fiabilité de la chaîne de données commence à 71 pour cent des chargements à temps avec contrôles réussis, et atteint 96 pour cent après que l'équipe a ajouté des tests et des alertes d'échec. Le délai d'une nouvelle mesure tombe d'une médiane de 31 jours à 9. L'effort manuel sur le rapport mensuel tombe d'environ 40 heures à 6. Un directeur demande si le score de productivité de la plateforme du vendeur pourrait être ajouté pour donner un classement unique des équipes. La responsable de la gestion des services explique l'analyse du sujet 1.2, montre ce qui s'est passé quand un score semblable a été employé ailleurs dans l'entreprise et propose la vue équilibrée actuelle. La décision est consignée, et la fonction de score est désactivée dans tout outil qui en a une.

## Perspective sectorielle

**Startup.** Employez ce que le produit et les outils existants fournissent déjà. Un tableur et les rapports intégrés des outils que vous employez peuvent répondre à la plupart des premières questions. Résistez à une plateforme de données jusqu'à ce que les questions soient stables et que l'effort manuel fasse mal. Gardez les définitions de métriques écrites pour qu'un déménagement ultérieur soit facile.

**Petite entreprise.** Peu de mesures et peu de systèmes signifient un outillage simple. Les rapports intégrés et un tableur suffisent souvent. Les principaux risques sont des données gardées dans la tête d'une seule personne et des outils sans export. Choisissez des produits que vous pouvez quitter, et écrivez les définitions.

**Grande entreprise.** De nombreux systèmes, équipes et définitions plaident pour un stock de données gouverné, un catalogue de définitions et des vues en couches. Une responsabilité fédérée fonctionne mieux qu'une équipe centrale qui bâtit chaque rapport. Soyez attentif à l'enfermement, au contrôle d'accès, à la vie privée et à l'évaluation des fournisseurs, et envisagez une petite équipe de plateforme qui fournit la chaîne de données comme un service.

**Gouvernement et secteur public.** Les règles de marchés publics, la souveraineté des données et l'accessibilité influent sur les choix d'outils. Les normes ouvertes et la portabilité sont précieuses parce que les contrats sont longs et que les administrations changent. Prévoyez des évaluations de sécurité, la conservation des documents et les règles de divulgation publique, et vérifiez les orientations en vigueur sur l'hébergement et les achats (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts comprennent les licences ou abonnements, l'infrastructure, l'intégration et le travail de connecteurs, le nettoyage des données, le travail de définitions et de catalogue, la formation, le soutien et l'effort récurrent pour garder la chaîne de données en bonne santé. Les options de construction portent des coûts d'ingénierie faciles à sous-estimer, et les options d'achat portent des frais qui croissent avec l'échelle et le coût de partir.

Les retours viennent de l'effort de rapport économisé, de réponses plus rapides, de moins de disputes sur les chiffres et de meilleures décisions fondées sur des données fiables. Bâtissez le dossier à partir de vos propres données : les heures passées aux rapports manuels maintenant, le nombre de versions concurrentes d'un même chiffre, le délai entre une question et une réponse et le coût des outils qui se recoupent. Évitez de citer des chiffres d'analystes sur les retours de l'analytique sans source traçable ni pertinence pour votre contexte. Une comparaison équitable compte le coût complet de chaque option sur trois ans, sortie comprise (voir le sujet 7.5, Coût du service et économie unitaire, et le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **L'outil d'abord, les questions ensuite.** La plateforme arrive, et personne ne sait quoi lui demander. Écrivez d'abord les mesures.
- **Acheter pour réparer un problème de définitions.** Le désaccord sur le sens persiste dans n'importe quel outil. Réglez les définitions.
- **Scores individuels intégrés.** Ils tentent et ils déforment. Désactivez-les et fixez d'abord la politique.
- **Aucune sortie.** L'historique et les définitions sont piégés. Testez l'export et gardez une copie.
- **La chaîne de données d'une seule personne.** Elle s'arrête quand cette personne s'en va. Documentez-la, testez-la et partagez la responsabilité.
- **Double saisie.** Les gens consignent le même travail deux fois, et la qualité des deux baisse. Prenez les données dans les systèmes de référence.
- **Sur-ingénierie précoce.** Une plateforme de données arrive avant qu'une seule vue ait prouvé sa valeur. Commencez mince.
- **Ignorer la qualité des données.** Des graphiques propres sur des données sales induisent en erreur de façon plus convaincante. Corrigez la saisie à la source.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Approvisionnement en données | Collecte manuelle ; tableurs | Quelques flux automatisés ; scripts individuels | Des sources convenues alimentent un stock partagé par des chaînes de données testées | Fiabilité, rapprochement et fraîcheur gérés et visibles | Chaînes de données fédérées avec contrats partagés entre équipes et fournisseurs ; sources améliorées à partir des retours |
| Définitions et catalogue | Dans la tête des gens | Quelques-unes documentées | Un catalogue de définitions avec responsables, versionné et revu | Le catalogue pilote les tableaux de bord ; changements revus avec les utilisateurs | Définitions codétenues entre équipes et fournisseurs ; retirées quand elles cessent d'éclairer des décisions |
| Choix et coût | Achats improvisés | Outils qui se recoupent | Critères écrits ; sortie testée ; coût complet compté | Coût par équipe soutenue et effort manuel gérés | Choix d'outillage revus régulièrement avec les utilisateurs et adaptés à l'évolution des besoins |

## Liste de vérification

- [ ] Les mesures convenues et leurs questions sont écrites avant la comparaison des outils.
- [ ] Les outils et rapports existants ont été inventoriés et éprouvés d'abord.
- [ ] La qualité des données aux principales sources a été vérifiée et les pires lacunes corrigées.
- [ ] Les critères de sélection sont écrits et incluent les distributions, le contrôle d'accès et l'export.
- [ ] Un essai à durée limitée avec de vraies données et de vrais utilisateurs a été mené avant tout engagement.
- [ ] Les fonctions de notation et de classement au niveau individuel sont désactivées ou restreintes par la politique.
- [ ] Les définitions sont gardées dans un catalogue portable hors de tout outil unique.
- [ ] La chaîne de données a un responsable, des contrôles automatisés, une supervision et une alerte d'échec.
- [ ] Un export des définitions et de l'historique a été testé.
- [ ] Le coût complet sur trois ans, sortie comprise, a été compté.

## Prompts d'IA

**Rédigez des exigences à partir de questions.**

```text
Voici les questions que posent nos publics et les mesures que nous prévoyons de
publier : [paste]. Rédigez un document d'exigences de deux pages pour un outil
ou une chaîne de données de métriques. Couvrez les sources de données, la
fraîcheur, le contrôle d'accès, la conservation, les distributions et
percentiles, l'export et la portabilité, et une liste d'indispensables par
opposition aux préférences. Ne nommez aucun produit. Énumérez vos hypothèses et
les points à confirmer avec les équipes.
```

**Planifiez un essai d'outil.**

```text
Nous comparons [options] pour notre programme de métriques. Concevez un essai de
deux semaines avec trois de nos mesures et de vraies données. Énoncez ce qu'il
faut tester, comment noter les options selon des critères écrits, qui devrait
participer, comment vérifier le contrôle d'accès et l'export, et quelles preuves
nous consignerons. Ne revendiquez pas de résultats sur des produits précis.
Énumérez vos hypothèses et vos risques.
```

**Revoyez une chaîne de données.**

```text
Voici une description de la manière dont les données circulent de [sources] vers
nos tableaux de bord : [paste]. Repérez les points où des données pourraient
être en retard, dupliquées, écrasées ou perdues, et suggérez des contrôles
automatisés pour chacun. Proposez une façon de rapprocher les chiffres clés de la
source. N'inventez pas de comportements de systèmes. Énumérez vos hypothèses et
ce que vous n'avez pas pu savoir à partir de la description.
```

**Comparez le coût complet.**

```text
Aidez-moi à comparer le coût complet sur trois ans de la construction, de
l'achat et de la combinaison d'outils pour notre programme de métriques. Listez
les catégories de coûts de chaque option, y compris licences, infrastructure,
intégration, nettoyage des données, formation, entretien et sortie. Fournissez
un tableau avec des blancs pour nos propres chiffres. Ne fournissez pas de prix.
Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver la source de données et le garde-fou de chaque mesure en rédigeant les exigences.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un enregistrement de décision d'outillage porte des définitions, des sources de données et des garde-fous.

## Points clés à retenir

- Écrivez d'abord les questions et les mesures, et choisissez les outils pour les servir.
- Employez les systèmes de référence, corrigez la saisie des données à la source et testez le rapprochement.
- Gardez portables les définitions et les données, et testez la sortie avant de vous engager.
- Désactivez la notation et les classements au niveau individuel, et fixez la politique avant d'activer toute fonction.
- Exploitez la chaîne de données comme un service avec un responsable, des tests et de la supervision.
- Comptez le coût complet sur plusieurs années, et commencez par le chemin le plus mince qui répond à de vraies questions.

## Références et lectures complémentaires

1. Kimball, R., and Ross, M., *The Data Warehouse Toolkit*, Wiley, 3rd edition, 2013.
2. Redman, T., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4 Foundation*, 2019.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
7. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
8. Wikipedia, [Data pipeline](https://en.wikipedia.org/wiki/Data_pipeline).
9. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
10. Wikipedia, [Data warehouse](https://en.wikipedia.org/wiki/Data_warehouse).
11. Wikipedia, [Application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface).
12. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
13. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
14. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
