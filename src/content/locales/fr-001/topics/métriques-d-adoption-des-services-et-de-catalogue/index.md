# Métriques d'adoption des services et de catalogue

**Un service que personne ne choisit, ne trouve ou pour lequel personne ne mène une demande à son terme n'a pas livré de valeur ; mesurez donc comment les gens découvrent et emploient ce que vous offrez, et gardez le catalogue aussi honnête qu'un backlog.**

## Résumé et motivation

Les équipes investissent dans des services puis découvrent que les gens ne les emploient pas. Le nouveau portail de libre-service est contourné par courriel. Un élément de catalogue soigneusement conçu pour l'accès à un logiciel reçoit deux demandes par an tandis que cent par mois arrivent par discussion instantanée. Un service de supervision est lancé et la moitié des équipes pour lesquelles il a été construit ne s'y connectent jamais. L'adoption est la moitié manquante de la livraison : un service n'a de valeur que lorsque ses utilisateurs visés commencent à l'employer, continuent et le mènent à terme.

Le **catalogue de services** (l'orthographe propre d'ITIL est « service catalogue ») est la liste des services et des éléments demandables qu'une organisation offre, décrits en termes que ses utilisateurs peuvent comprendre. Un [catalogue de services](https://en.wikipedia.org/wiki/Service_catalog) a généralement une vue tournée vers le client, qui liste ce qu'un utilisateur peut demander et comment, et une vue technique, qui consigne comment chaque service est construit et soutenu. Les équipes agiles en reconnaîtront la forme : un catalogue est une sorte de [backlog de produit](https://en.wikipedia.org/wiki/Product_backlog) à l'envers. Un backlog liste ce qu'on a l'intention de construire. Un catalogue liste ce qu'on offre déjà, et les deux demandent le même soin : ordre, élagage, formulation claire et flux régulier de retours des utilisateurs (voir le sujet 2.6, Métriques du backlog et de son affinage).

L'**adoption** est la mesure dans laquelle les utilisateurs visés adoptent un service et continuent de l'employer. L'étude de la façon dont les nouvelles pratiques se répandent a une longue histoire ; la théorie de la [diffusion des innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations) décrit l'adoption comme un processus dans le temps, avec des adopteurs précoces, une majorité et des retardataires. Pour un service interne, la leçon pratique est que l'adoption se produit rarement à cause d'une annonce. Elle se produit quand le service est facile à trouver, facile à employer et nettement meilleur que le contournement.

Les mesures d'adoption sont tentantes à transformer en objectifs. Imposer un canal fait paraître un chiffre d'usage bon pendant que les utilisateurs s'en offusquent et bâtissent des contournements. Pousser chaque demande dans un élément de catalogue fait monter la couverture du catalogue alors que l'achèvement baisse. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique ; chaque mesure ici est donc associée à un contrôle que c'est la vraie valeur, non le simple usage, qui monte (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Ce sujet couvre quatre choses : si les gens emploient un service (adoption), s'ils peuvent trouver et terminer ce pour quoi ils sont venus (catalogue et flux de demandes), si le catalogue est à jour et honnête (hygiène) et si l'usage est concentré sur quelques éléments (forme). Il se relie au traitement des demandes (voir le sujet 3.5, Métriques de traitement des demandes de service) et au libre-service (voir le sujet 3.7, Métriques de libre-service et d'automatisation), qui couvrent ce qui se passe après que la demande est faite.

## Principes clés

- **L'adoption est un résultat ; demandez donc ce que l'utilisateur essayait de faire.** Comptez les buts accomplis, non les pages vues.
- **Mesurer l'entonnoir, pas seulement le total.** L'endroit où les gens abandonnent dit ce qu'il faut corriger.
- **Comparer avec l'alternative.** Un service concurrence le courriel, la discussion instantanée, un appel téléphonique et un contournement.
- **Garder le catalogue aussi petit et à jour que possible.** Les éléments périmés apprennent aux utilisateurs à cesser de chercher.
- **Segmenter avant de conclure.** Les moyennes sur tous les utilisateurs cachent les groupes pour lesquels le service ne fonctionne pas.
- **Ne jamais forcer l'usage pour relever un chiffre.** Les mandats produisent des chiffres, non de l'adoption.
- **Traiter un faible usage comme une question pour le responsable et les utilisateurs.** Cela peut signifier que le service n'est pas nécessaire.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux d'adoption | Part des utilisateurs éligibles qui ont employé un service au moins une fois dans la période | utilisateurs éligibles distincts avec au moins un usage accompli / utilisateurs éligibles | pourcentage | Journaux d'usage du service joints à l'annuaire des utilisateurs | Gestion du catalogue de services ; gestion des niveaux de service | Adoption des fonctions ; revue des résultats du produit | Mensuelle |
| Taux d'usage actif | Part des adopteurs qui continuent d'employer le service dans le temps | utilisateurs actifs dans la période qui ont aussi employé le service dans la période précédente / utilisateurs actifs dans la période précédente | pourcentage | Journaux d'usage ; tables de cohortes | Amélioration continue | Rétention dans l'analyse du produit | Mensuelle |
| Couverture du catalogue | Part des demandes qui arrivent par le catalogue plutôt que par des canaux ad hoc | demandes créées via le catalogue / toutes les demandes, tous canaux confondus | pourcentage | Outil de gestion des demandes ; étiquettes de boîte courriel et de discussion | Gestion des demandes de service ; gestion du catalogue de services | Éléments de backlog qui portent une définition écrite | Mensuelle |
| Taux d'abandon des demandes | Part des demandes commencées que l'utilisateur ne soumet pas | demandes commencées mais non soumises dans les 24 heures / demandes commencées | pourcentage | Analyse du portail | Gestion des demandes de service | Abandon de tâche dans les tests d'utilisabilité | Mensuelle |
| Taux de réussite des recherches | Part des recherches dans le catalogue qui aboutissent à une demande ou à une réponse consultée | recherches suivies d'une demande ou d'une consultation de connaissance dans la session / recherches | pourcentage | Journaux de recherche du portail | Gestion des connaissances ; gestion du catalogue de services | Facilité à trouver dans la recherche auprès des utilisateurs | Mensuelle |
| Part d'éléments périmés | Part des éléments du catalogue dépassant leur date de revue ou sans usage dans une période fixée | éléments en retard de revue ou sans demande depuis 12 mois / éléments du catalogue | pourcentage | Registre du catalogue | Gestion du catalogue de services | Ancienneté du backlog et élagage | Trimestrielle |
| Concentration des demandes | Part des demandes représentée par les éléments les plus demandés | demandes des cinq premiers éléments / toutes les demandes du catalogue | pourcentage | Outil de gestion des demandes | Gestion des demandes de service | Pareto du travail par type | Trimestrielle |

Énoncez la base d'utilisateurs de chaque mesure. Les « utilisateurs éligibles » doivent être définis avant de mesurer, par exemple le personnel des rôles qui pourraient employer un service, et la liste consignée dans le registre des métriques. Ne comptez un usage que s'il se termine par un résultat accompli, comme un accès accordé, et non quand une page se charge. Excluez les comptes de test et le trafic automatisé.

## Recommandations

### Connaître vos services et vos utilisateurs

**1. Définissez le public visé de chaque service.** Avant de mesurer l'adoption, écrivez à qui le service est destiné, et pourquoi ils l'emploieraient plutôt que l'alternative. Un nouveau service d'analyse construit pour le personnel de la finance n'est pas à « faible adoption » si seul le personnel de la finance était censé l'employer. Sans public défini, le taux d'adoption est un nombre sur personne.

**2. Consignez l'alternative.** Pour chaque service important, listez ce que font les gens maintenant quand ils ne l'emploient pas : demander à un collègue, envoyer un courriel, acheter un outil, faire tourner un tableur. Traitez l'alternative comme un concurrent au sens qui compte : c'est là que vont vos utilisateurs quand votre service est plus difficile. Comparez l'effort des deux chemins à la conception et en revue.

**3. Décrivez les éléments dans le langage de l'utilisateur.** Des titres comme « Accès à un logiciel, standard » et « Remplacement d'ordinateur portable, endommagé » sont plus faciles à trouver que des noms internes. Testez les titres en demandant à quelques utilisateurs de trouver un élément à partir d'un court scénario. Les problèmes de formulation apparaissent vite dans les journaux de recherche.

**4. Gardez un responsable pour chaque élément.** Chaque élément de catalogue a un responsable nommé, une date de revue, une description du public et le volume attendu. Les éléments sans responsable dérivent. Si personne ne peut dire qui emploie un élément et pourquoi, c'est un candidat au retrait.

### Mesurer le parcours

**5. Instrumentez l'entonnoir.** Pour chaque service important, consignez les étapes de la découverte au résultat accompli : trouver l'élément, commencer la demande, remplir le formulaire, soumettre, recevoir le résultat. Une vue en [entonnoir de conversion](https://en.wikipedia.org/wiki/Conversion_funnel) montre où les utilisateurs partent. Corrigez d'abord la plus grande perte. Vérifiez que les corrections rendent le formulaire plus court ou plus clair, et pas seulement les données plus jolies.

**6. Employez des cohortes pour voir la rétention.** Une [analyse de cohortes](https://en.wikipedia.org/wiki/Cohort_analysis) regroupe les utilisateurs selon le moment où ils ont employé le service pour la première fois et suit chaque groupe. Elle distingue un service qui garde ses utilisateurs d'un service qui les attire une fois et les perd. Employez-la pour les services qui devraient être employés de façon répétée, comme le portail du centre de services ou une chaîne de déploiement.

**7. Lisez les journaux de recherche pour voir ce que les gens ne trouvent pas.** Les recherches sans résultat, ou répétées avec des mots différents, désignent des lacunes de dénomination, de contenu ou du catalogue lui-même. Passez en revue chaque mois les principales recherches sans résultat et décidez pour chacune : renommer un élément, ajouter un synonyme, écrire un article ou créer un nouvel élément. Les outils d'[analyse web](https://en.wikipedia.org/wiki/Web_analytics) peuvent le fournir, tout comme les propres journaux du portail.

**8. Segmentez par groupe.** Ventilez l'adoption et l'abandon par rôle, lieu, appareil et besoins d'accessibilité là où vous avez un accès licite et éthique à cette information. L'agrégat peut paraître sain alors que le personnel de nuit ou les utilisateurs d'appareils mobiles échouent deux fois plus. Supprimez les petits groupes pour protéger les gens, et combinez avec les mesures d'expérience des sujets précédents (voir le sujet 6.2, Accords de niveau d'expérience).

### Garder le catalogue honnête

**9. Élaguez selon un calendrier.** Passez le catalogue en revue chaque trimestre. Retirez ou fusionnez les éléments sans usage, retirez les éléments de services abandonnés et corrigez les éléments à fort abandon. Un catalogue plus petit et exact sert mieux les utilisateurs qu'un catalogue complet et périmé. Traitez le retrait comme normal et consignez le motif.

**10. Regardez la forme de la demande.** Dans la plupart des catalogues, quelques éléments représentent l'essentiel des demandes, un schéma souvent décrit par le [principe de Pareto](https://en.wikipedia.org/wiki/Pareto_principle). Servez-vous-en pour concentrer l'effort de conception sur les éléments fréquents et pour automatiser ceux qui sont courants (voir le sujet 3.7, Métriques de libre-service et d'automatisation). N'abandonnez pas la longue traîne sans l'avoir regardée, car des éléments rares peuvent compter énormément pour les personnes qui en ont besoin.

**11. Ne forcez pas l'adoption.** Si un service est nécessaire, les utilisateurs viendront dès qu'il sera facile. Là où l'organisation exige un canal pour des raisons de contrôle ou d'audit, dites-le, et soyez ouvert sur le fait que le chiffre reflète une règle, non une préférence. Évitez les [schémas trompeurs](https://en.wikipedia.org/wiki/Dark_pattern), comme cacher le numéro de téléphone ou rendre l'alternative plus difficile, car ils relèvent l'usage et abaissent la confiance.

**12. Bouclez la boucle avec les responsables et les utilisateurs.** Partagez chaque mois l'entonnoir, les lacunes de recherche et la liste des éléments périmés avec les responsables d'éléments. Demandez aux utilisateurs, dans l'enquête et en revue, pourquoi ils emploient ou évitent un service (voir le sujet 6.1, Métriques de satisfaction de la clientèle). Consignez ce que vous avez changé dans le registre et dites aux utilisateurs que c'est fait.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Taux d'adoption | Imposer l'usage ; compter les connexions ou les pages vues comme usage ; rétrécir les « utilisateurs éligibles » à ceux qui l'emploient déjà | Définition de résultat accompli ; comparer avec les notes de satisfaction et d'effort ; publier la règle des utilisateurs éligibles |
| Taux d'usage actif | Inscrire d'office les utilisateurs pour qu'ils paraissent actifs ; envoyer des notifications qui comptent comme activité | Ne compter que les actions accomplies à l'initiative de l'utilisateur ; entretiens par échantillon avec les utilisateurs qui ont lâché |
| Couverture du catalogue | Forcer chaque demande dans un élément de catalogue générique ; clore les demandes par courriel avec « veuillez employer le portail » | Taux d'abandon des demandes et satisfaction ; compter combien de demandes sont soumises à nouveau par un autre canal |
| Taux d'abandon des demandes | Retirer des champs de formulaire nécessaires, ce qui déplace le travail vers le traitement ; ne compter les demandes abandonnées qu'après une longue fenêtre | Taux de reprise et de clarification au traitement (voir le sujet 3.5, Métriques de traitement des demandes de service) |
| Taux de réussite des recherches | Compter n'importe quel clic comme un succès ; ajouter des articles hors sujet qui correspondent à toute requête | Vérifier que le résultat a servi (demande faite, article noté utile) ; lire les recherches sans résultat |
| Part d'éléments périmés | Marquer des éléments comme revus sans les lire ; remettre les dates de revue à zéro en bloc | Échantillonner les éléments revus pour leur exactitude ; montrer la date du dernier vrai changement |
| Concentration des demandes | Scinder les éléments populaires en plusieurs ; fusionner des éléments sans rapport pour cacher la demande de la longue traîne | Taxonomie d'éléments fixe avec journal des changements ; regarder la traîne par catégorie |

Une lecture saine est un catalogue où les éléments les plus employés fonctionnent bien et deviennent plus faciles, où les utilisateurs choisissent le service parce qu'il est meilleur que l'alternative, et où le retrait d'un élément est routinier.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Canal imposé | Volume prévisible, facile à auditer | Ressentiment, contournements, chiffres gonflés |
| Adoption volontaire | Signal honnête de valeur | Plus lente ; certains services peuvent ne jamais être adoptés |
| Grand catalogue | Complet, couvre les besoins rares | Difficile à chercher ; devient périmé |
| Petit catalogue | Facile à trouver et à entretenir | Les besoins rares tombent hors de lui ; les utilisateurs recourent au courriel |
| Mesures d'entonnoir | Repèrent où les utilisateurs abandonnent | Exigent de l'instrumentation ; peuvent encourager l'optimisation du formulaire aux dépens du résultat |
| Enquête sur le pourquoi | Explique le comportement | Biaisée par ceux qui répondent ; difficile à passer à l'échelle |

La réponse en prose est de préférer l'adoption volontaire appuyée sur un avantage de qualité net, et de n'employer des mandats que là où le contrôle ou la conformité l'exigent, le chiffre étant étiqueté en conséquence. Gardez le catalogue assez petit pour être entretenu, et mettez la traîne dans une base de connaissances où l'on peut chercher, non dans une centaine d'éléments à demi employés.

## Questions à discuter avec votre équipe

**1. À qui chacun de nos principaux services est-il destiné, et comment saurions-nous qu'ils l'emploient ?**
Listez les cinq services sur lesquels votre équipe passe le plus de temps et écrivez le public visé de chacun. Demandez ensuite comment l'adoption pourrait être mesurée pour eux. L'animateur doit chercher les services dont personne ne peut nommer le public, car ils n'ont probablement aucun plan d'adoption.

**2. Que font les gens quand ils n'emploient pas notre service, et pourquoi ?**
Pour un service à faible adoption, interrogez ou sondez quelques utilisateurs qui l'évitent. L'alternative est généralement révélatrice : elle peut être plus rapide, plus familière ou plus souple. Décidez s'il faut améliorer le service, changer l'alternative ou accepter que le service n'est pas nécessaire.

**3. Où les utilisateurs abandonnent-ils notre élément le plus demandé ?**
Montrez l'entonnoir de l'élément principal, de la première vue à la soumission. Demandez à l'équipe de deviner où se trouve la plus grande perte, puis comparez. Convenez d'un changement à tester et dites comment vous vérifierez qu'il a aidé sans déplacer le problème ailleurs.

**4. Que retirerions-nous du catalogue si nous osions ?**
Imprimez la liste des éléments sans demande depuis un an. Demandez ce qui arriverait si chacun disparaissait. La conversation découvre souvent qu'un élément existe parce que quelqu'un l'a demandé un jour. Convenez d'une date pour retirer ou fusionner les cinq premiers, et d'une note aux utilisateurs.

**5. Où poussons-nous ou forçons-nous les utilisateurs, et cela vaut-il le coût ?**
Listez chaque endroit où une règle ou une conception pousse les utilisateurs dans un canal. Demandez lesquels sont réellement nécessaires et lesquels sont une habitude. L'animateur doit explorer comment les utilisateurs vivent chacun, et si les chiffres qui en résultent signifient ce que les dirigeants croient qu'ils signifient.

**6. Que cherchent les gens que nous n'avons pas ?**
Passez en revue les principales recherches sans résultat. Pour chacune, décidez s'il faut ajouter un élément, écrire un article ou expliquer que le service n'existe pas. Demandez qui détient cette revue et à quelle fréquence elle aura lieu.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison construisent des services et des fonctions qui ont besoin d'être adoptés pour compter. Elles devraient définir le public dès le départ, intégrer des mesures d'usage dans le service et revoir l'entonnoir après le lancement. Les données d'adoption sont un retour sur le travail, et leur place est dans l'affinage et la revue. Les équipes devraient éviter de déclarer une version terminée quand elle est livrée. Terminé signifie que les utilisateurs visés en tirent le bénéfice.

### Équipes de service et d'exploitation

Les équipes d'exploitation gèrent le catalogue et voient les demandes qui arrivent par chaque canal. Elles devraient tenir le catalogue à jour, étiqueter les demandes qui le contournent et demander pourquoi. Elles ne devraient pas clore une demande en la redirigeant, car cela cache le signal. Les lacunes de recherche et l'abandon sont leur meilleure source d'améliorations du portail.

### Direction et gouvernance

Les dirigeants décident si l'adoption est une conversation ou un quota. Ils devraient demander à quoi sert le service, qui il aide et pourquoi les gens le choisissent. Ils devraient éviter de fixer des objectifs d'adoption pour des équipes individuelles, soutenir le retrait des services inutilisés et s'attendre à voir l'adoption à côté de la satisfaction et de l'effort. Là où un mandat est justifié, les dirigeants devraient l'expliquer aux utilisateurs.

### Clients et utilisateurs

Les utilisateurs veulent obtenir ce dont ils ont besoin avec peu d'effort. Ils remarquent quand un portail est difficile à chercher, quand des formulaires demandent ce que l'organisation sait déjà et quand l'ancienne façon est plus rapide. Leur comportement, et ce qu'ils disent, est le signal d'adoption le plus honnête. On devrait leur demander pourquoi ils évitent un service, et leur dire ce qui a changé en conséquence.

## En pratique : un exemple d'ITIL agile

Le service informatique d'une agence nationale de transport exploite un centre de services, un portail de libre-service avec un catalogue d'environ 140 éléments et plusieurs équipes produit. Les chiffres ci-dessous sont illustratifs.

Le portail a été lancé il y a un an, et la direction a fixé un objectif de 80 pour cent des demandes par son intermédiaire. Le rapport mensuel montre 78 pour cent de couverture, et la responsable de la gestion des services est contente jusqu'à ce qu'elle lise les commentaires de l'enquête auprès des utilisateurs. Le personnel des bureaux régionaux dit que le portail est lent et que les formulaires sont longs. Elle demande au responsable du catalogue de regarder l'entonnoir et les journaux de recherche.

L'entonnoir de « Équipement d'un nouvel arrivant » montre 1 100 débuts par trimestre et 640 soumissions, soit un taux d'abandon de 42 pour cent. Le formulaire a 23 champs. Le journal de recherche montre que le terme « ordinateur portable » renvoie huit éléments, et que le terme « VPN » n'en renvoie aucun, bien que ce soit le terme le plus recherché. Sur 140 éléments du catalogue, 38 n'ont eu aucune demande en 12 mois et 21 dépassent leur date de revue. Les cinq premiers éléments représentent 61 pour cent des demandes, et 15 pour cent supplémentaires des demandes arrivent par courriel et sont saisies à la main.

L'équipe fait quatre changements. Elle réduit le formulaire de nouvel arrivant à neuf champs en employant des données que le système des ressources humaines détient déjà. Elle ajoute un article sur le VPN et un élément avec des synonymes. Elle fusionne les huit éléments d'ordinateur portable en deux. Et elle retire 19 des éléments inutilisés avec une note aux responsables. Elle change aussi la façon dont le rapport mensuel est lu : la couverture est montrée avec le taux d'abandon et la question d'enquête « dans quelle mesure était-il facile d'obtenir ce dont vous aviez besoin ? » Trois mois plus tard, l'abandon de l'élément de nouvel arrivant tombe à 24 pour cent, la couverture du portail est de 74 pour cent et la note d'effort des bureaux régionaux monte. Le directeur demande pourquoi la couverture a baissé. La responsable de la gestion des services explique que les demandes par courriel étaient auparavant closes d'office, et que le chiffre plus bas est plus honnête et l'expérience meilleure. Le journal des décisions consigne que l'objectif est remplacé par une direction : réduire l'abandon et relever la note d'effort, la couverture étant revue mais non ciblée.

## Perspective sectorielle

**Startup.** Il n'y a souvent aucun catalogue. Une simple page « comment obtenir X » et un canal partagé suffisent. Observez ce que les gens demandent et transformez les cinq premières demandes en courts guides. Mesurez l'adoption des outils internes en interrogeant les utilisateurs, et laissez de côté les entonnoirs formels.

**Petite entreprise.** Peu de personnes assurent l'informatique, et les demandes arrivent par tous les canaux. Un catalogue modeste de 10 à 20 éléments couvre la plupart des besoins. Ne forcez pas les utilisateurs vers un portail qui coûte plus à entretenir que les demandes qu'il traite. Revoyez la liste deux fois par an.

**Grande entreprise.** L'échelle vous donne un catalogue assez grand pour exiger une gouvernance : responsables, dates de revue et taxonomie. Segmentez l'adoption par unité d'affaires et par région, et évitez les mandats pour toute l'entreprise qui ignorent les besoins locaux. Méfiez-vous des fournisseurs dont les éléments de catalogue sont comptés mais non employés.

**Gouvernement et secteur public.** Les services atteignent le public autant que le personnel, avec des devoirs d'accessibilité, de langue et d'égalité d'accès. Incluez les canaux assistés (téléphone, en personne) dans les mesures pour que l'adoption numérique ne cache pas l'exclusion. Là où des règles légales ou de politique exigent un canal, dites-le dans les rapports (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont modestes. Les journaux d'usage et les données de demandes existent généralement déjà. L'analyse de l'entonnoir et des recherches demande l'accès à l'analyse du portail, que la plupart des plateformes fournissent. Le principal coût en temps est la revue trimestrielle du catalogue et un regard mensuel sur les lacunes de recherche et les abandons, quelques heures chacun. Corriger les formulaires et fusionner les éléments coûtent du temps de conception et de configuration.

Le retour vient de services qui sont employés, de demandes qui aboutissent et de moins de gaspillage au traitement. Un formulaire plus court qui réduit l'abandon diminue les contacts répétés et le traitement manuel. Élaguer les éléments inutilisés réduit l'entretien. Bâtissez le dossier à partir de vos propres chiffres : taux d'abandon, temps de traitement manuel par demande reçue par courriel et coût d'entretien d'un élément inutilisé, avant et après les changements. Évitez les affirmations publiées sur le ROI des portails que vous ne pouvez pas retracer, car elles dépendent de l'organisation et de la méthode.

## Antimodèles et pièges

- **Compter les lancements comme de l'adoption.** Un service est adopté quand les utilisateurs visés accomplissent des résultats avec lui. Mesurez l'usage, non l'annonce.
- **Imposer un canal pour relever un chiffre.** Les utilisateurs le contourneront. Améliorez le service et laissez le chiffre suivre.
- **Ajouter des éléments sans jamais en retirer.** Le catalogue devient impossible à chercher. Élaguez chaque trimestre.
- **Ne regarder que les totaux.** Segmentez par groupe et regardez l'entonnoir.
- **Clore les demandes reçues par courriel par une redirection.** Cela cache la demande et agace les utilisateurs. Traitez la demande et corrigez la route.
- **Employer les pages vues comme usage.** Comptez les résultats accomplis.
- **Traiter un faible usage comme un échec des utilisateurs.** Demandez si le service est nécessaire et facile à employer.
- **Laisser les responsables d'éléments s'effacer.** Attribuez des responsables et des dates de revue à chaque élément.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Conception du catalogue | Liste qui a grandi au gré des demandes | Un catalogue existe, formulation incohérente | Éléments en langage utilisateur avec responsables et dates de revue | Élagage trimestriel ; taxonomie gérée | Catalogue partagé entre équipes et fournisseurs ; éléments co-conçus avec les utilisateurs |
| Mesure de l'adoption | Anecdote | Comptes de demandes par élément | Adoption définie par utilisateurs éligibles et résultats accomplis | Entonnoirs, cohortes et segments revus chaque mois | Adoption reliée à l'expérience et aux résultats entre services |
| Amélioration | Corrections ad hoc | Corrections après plaintes | Lacunes de recherche et abandons revus chaque mois | Corrections priorisées et suivies dans un backlog | Amélioration coordonnée avec les utilisateurs, les services retirés étant rapportés ouvertement |

## Liste de vérification

- [ ] Chaque service important a un public visé écrit et un chemin alternatif.
- [ ] L'adoption est définie comme des résultats accomplis par des utilisateurs éligibles.
- [ ] Les éléments de catalogue ont des responsables, des descriptions en langage utilisateur et des dates de revue.
- [ ] L'entonnoir est instrumenté pour les éléments les plus demandés.
- [ ] Les recherches sans résultat sont revues chaque mois.
- [ ] L'adoption et l'abandon sont segmentés par groupe, les petits groupes étant supprimés.
- [ ] Les demandes qui arrivent hors du catalogue sont étiquetées et comptées.
- [ ] Le catalogue est élagué chaque trimestre, les motifs étant consignés.
- [ ] L'adoption est montrée à côté des mesures de satisfaction ou d'effort.
- [ ] Aucun objectif d'adoption n'est fixé pour une équipe ou une personne individuelle.

## Prompts d'IA

**Analysez un entonnoir de demandes.**

```text
Pour l'élément de catalogue [item name] dans [type of organization], les
données de notre portail pour [period] sont : vues [number], débuts [number],
soumissions [number] et traitées [number]. Le formulaire compte [number] champs :
[list]. Décrivez où les utilisateurs rencontrent probablement des difficultés,
suggérez trois changements à tester et dites comment je vérifierais que chaque
changement a aidé sans déplacer le problème vers le traitement. N'inventez pas
de valeurs de référence. Énumérez vos hypothèses et les données supplémentaires
dont vous avez besoin.
```

**Examinez les journaux de recherche à la recherche de lacunes du catalogue.**

```text
Voici les [number] principales recherches dans le catalogue de [period] avec le
nombre de résultats : [paste data]. Regroupez-les en thèmes, signalez les
recherches qui ne renvoient rien ou trop d'éléments, et suggérez si chacune
demande un nouvel élément, un renommage, un synonyme ou un article de
connaissance. Ne devinez pas des services que nous pourrions ne pas offrir.
Énumérez vos hypothèses et les questions que je devrais poser aux responsables
d'éléments.
```

**Planifiez une revue d'élagage du catalogue.**

```text
Je gère un catalogue de [number] éléments. Pour chacun de ces éléments, j'ai les
comptes de demandes sur 12 mois, les dates de revue et les responsables : [paste
a summary]. Proposez des critères pour retirer, fusionner ou garder un élément,
une courte note aux responsables et un moyen d'éviter de supprimer des éléments
rares mais critiques. Incluez un contrôle que nous ne déplaçons pas simplement
les demandes vers le courriel. Énumérez vos hypothèses.
```

**Rédigez une définition d'adoption pour un service.**

```text
Service : [name]. Utilisateurs visés : [roles]. Chemin alternatif aujourd'hui :
[what they do now]. Rédigez une définition d'adoption d'une page couvrant les
utilisateurs éligibles, ce qui compte comme un usage accompli, la source de
données, comment exclure le trafic de test et automatisé, comment la mesure
pourrait être détournée et un garde-fou. N'inventez pas d'objectifs. Énumérez
vos hypothèses et tout ce que je dois confirmer.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique d'adoption ou de catalogue.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une nouvelle entrée de métrique de catalogue a son vecteur de détournement et son garde-fou.

## Points clés à retenir

- L'adoption signifie que les utilisateurs visés accomplissent des résultats avec un service ; définissez donc le public et comptez les achèvements.
- Mesurez l'entonnoir, les lacunes de recherche et la rétention des utilisateurs, et segmentez par groupe.
- Comparez le service avec l'alternative que les utilisateurs ont aujourd'hui.
- Gardez le catalogue petit, détenu et élagué chaque trimestre.
- Ne forcez pas l'usage pour relever un chiffre, et associez l'adoption à la satisfaction et à l'effort.
- Traitez un faible usage comme une question sur le besoin et la facilité, non comme un échec des utilisateurs.

## Références et lectures complémentaires

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Hunnebeck, L., *ITIL Service Design* (service catalogue management), The Stationery Office, 2011.
3. Hunt, A. and Thomas, D., *The Pragmatic Programmer*, Addison-Wesley, for the habit of removing what is no longer useful.
4. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
5. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
6. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Conversion funnel](https://en.wikipedia.org/wiki/Conversion_funnel).
9. Wikipedia, [Cohort analysis](https://en.wikipedia.org/wiki/Cohort_analysis).
10. Wikipedia, [Web analytics](https://en.wikipedia.org/wiki/Web_analytics).
11. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
12. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
