# Accords de niveau d'expérience

**Un accord de niveau d'expérience ajoute la question « qu'est-ce que cela a fait d'utiliser le service ? » à la question « le service a-t-il atteint sa cible ? », et il ne fonctionne que si les mesures d'expérience sont choisies avec les utilisateurs et gardées à côté des mesures opérationnelles.**

## Résumé et motivation

Un [accord de niveau de service](https://en.wikipedia.org/wiki/Service-level_agreement) (SLA) consigne ce à quoi un fournisseur s'engage à livrer, généralement en termes que le fournisseur peut compter : disponibilité, temps de réponse, temps de résolution. Ces mesures sont utiles et aussi incomplètes. Une équipe peut atteindre chaque cible du tableau de bord pendant que les utilisateurs passent leur semaine à contourner des connexions lentes, à se répéter auprès d'un centre de services et à attendre des approbations. Cet écart entre un rapport vert et des utilisateurs mécontents est parfois appelé l'effet pastèque : vert à l'extérieur, rouge à l'intérieur (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

Un **accord de niveau d'expérience (XLA)** est un accord, entre un fournisseur et les personnes qui utilisent un service, sur l'expérience que le service devrait offrir. Il énonce des résultats et des ressentis souhaités, comme « je peux commencer à travailler quelques minutes après mon arrivée » ou « j'ai confiance que ma demande sera traitée », et il nomme les mesures qui montreront s'ils sont atteints. Le terme est employé dans toute la communauté de la gestion des services informatiques (ITSM), et sa définition exacte varie selon les auteurs et les fournisseurs. Vérifiez les publications actuelles du propriétaire du cadre avant de décrire un XLA comme une partie d'ITIL, et dites quel usage vous suivez. Ce sujet traite le XLA comme une idée pratique : un accord qui place des mesures d'expérience à côté de mesures opérationnelles.

L'idée a des racines hors de l'informatique. L'[expérience utilisateur](https://en.wikipedia.org/wiki/User_experience) est l'expérience globale d'une personne qui utilise un produit, un système ou un service, et l'[expérience client](https://en.wikipedia.org/wiki/Customer_experience) est la somme des interactions d'un client avec une organisation dans le temps. L'[utilisabilité](https://en.wikipedia.org/wiki/Usability) concerne l'efficacité, l'efficience et la satisfaction avec lesquelles les gens peuvent atteindre leurs buts. Les équipes agiles connaissent ce territoire par la conception centrée sur l'humain et la recherche auprès des utilisateurs, et par les revues avec les parties prenantes où les utilisateurs réagissent à un logiciel fonctionnel. Un XLA apporte la même attention au service en exploitation.

L'expérience est difficile à mesurer et facile à fausser. Une enquête qui n'atteint que les utilisateurs contents, un score de sentiment réglé pour monter ou un « indice d'expérience » unique que personne ne peut expliquer induiront en erreur aussi sûrement qu'un temps de ticket truqué. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique pleinement : les mesures d'expérience sont des amorces de conversation, non des quotas (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Ce sujet s'appuie sur les mesures d'enquête du sujet précédent (voir le sujet 6.1, Métriques de satisfaction de la clientèle) et ajoute des mesures comportementales et de parcours qui ne dépendent pas du fait de demander.

## Principes clés

- **Partir des résultats qui comptent pour les gens.** Demandez aux utilisateurs à quoi ressemble une bonne journée, et écrivez les accords avec leurs mots.
- **Associer l'expérience à l'exploitation.** Un XLA se place à côté d'un SLA, non à sa place.
- **Employer quelques mesures sous des angles différents.** Combinez ce que les gens disent, ce qu'ils font et ce que le système enregistre.
- **Mesurer les parcours autant que les points de contact.** Une expérience est tout le chemin du besoin au résultat.
- **Être honnête sur l'incertitude.** Les données d'expérience sont bruitées, et les petits groupes ont besoin de protection.
- **Convenir des cibles avec les utilisateurs, et les réviser.** Un XLA est un accord vivant, revu avec les personnes qu'il décrit.
- **N'employer jamais les données d'expérience pour classer des individus.**

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Score d'expérience | Note moyenne d'un énoncé d'expérience convenu, pour un service et un public | note moyenne des réponses valides à un énoncé sur une échelle fixe | points d'échelle | Courte enquête éclair, envoyée selon un calendrier | Gestion des niveaux de service ; amélioration continue | Retour de la revue des parties prenantes ; revue des résultats du produit | Mensuelle |
| Tendance de sentiment | Direction du ton des commentaires libres pour un service | part des commentaires codés positifs moins part des commentaires codés négatifs, par période | points de pourcentage | Commentaires d'enquête et commentaires de tickets codés | Amélioration continue | Thèmes de rétrospective | Mensuelle |
| Événements de friction par utilisateur | Compte des signaux qu'un utilisateur a rencontré des ennuis, normalisé par utilisateur actif | (contacts répétés + éléments rouverts + connexions échouées au-delà d'un nombre fixé + demandes abandonnées) / utilisateurs actifs | événements par utilisateur | Système de tickets, journaux d'identité, portail de demandes | Centre de services ; gestion des incidents | Défauts trouvés à l'usage | Mensuelle |
| Temps perdu à cause de problèmes informatiques | Temps estimé que les utilisateurs perdent à cause de problèmes de service dans une période | minutes perdues déclarées par utilisateur, ou temps mesuré en état dégradé pondéré par les utilisateurs touchés | minutes par utilisateur | Enquête éclair ; supervision jointe aux comptes d'utilisateurs | Gestion de la disponibilité ; gestion des incidents | Temps de cycle perdu à cause d'obstacles | Trimestrielle |
| Taux d'achèvement du parcours | Part des utilisateurs qui terminent un parcours défini sans abandonner ni chercher de l'aide | utilisateurs terminant le parcours sans contact d'aide / utilisateurs commençant le parcours | pourcentage | Analyse du portail ; liens de tickets | Gestion des demandes de service ; gestion du catalogue de services | Réussite des tâches dans les tests d'utilisabilité | Mensuelle |
| Atteinte du XLA | Part des cibles d'expérience convenues atteintes dans la période | cibles atteintes / cibles convenues | pourcentage | Le registre des XLA | Gestion des niveaux de service | Atteinte des objectifs de livraison | Trimestrielle |
| Écart d'expérience | Différence entre l'atteinte du SLA et le score d'expérience pour le même service | rang d'atteinte du SLA moins rang du score d'expérience entre services, ou comparaison écrite | différence de rang ou note | Rapports de SLA et enquête éclair | Gestion des niveaux de service | Définition de terminé face aux retours des utilisateurs | Trimestrielle |

Définissez le public et la période de chaque mesure. Énoncez comment les petits groupes sont protégés : par exemple, aucun résultat n'est montré pour un groupe de moins de dix personnes. Les événements de friction comptent des signaux, non un blâme ; un événement est donc rattaché à un service et à un groupe d'utilisateurs, jamais à l'évaluation de performance d'une personne nommée.

## Recommandations

### Concevoir l'accord avec les utilisateurs

**1. Interrogez avant de mesurer.** Passez du temps avec un échantillon d'utilisateurs de chaque groupe important et demandez : à quoi ressemble une bonne journée avec ce service ? Où vous fait-il perdre du temps ? Que cesseriez-vous de faire s'il fonctionnait ? Employez les habitudes de la [conception centrée sur l'humain](https://en.wikipedia.org/wiki/Human-centered_design) : observez le travail réel et écrivez ce que vous entendez avec les mots de l'utilisateur. Les énoncés qui en résultent deviennent les objectifs d'expérience de l'accord.

**2. Écrivez les énoncés d'expérience comme des résultats.** « Je peux rendre un nouvel arrivant productif dès son premier matin » dit plus que « demande d'accès d'un nouvel arrivant résolue en deux jours ». Gardez chaque énoncé court, à la première personne et lié à un service. Visez trois à cinq énoncés par service pour que les gens puissent s'en souvenir.

**3. Choisissez des mesures sous trois angles.** Pour chaque énoncé, choisissez une mesure parmi ce que les gens disent (une question éclair ou un thème de commentaires), une parmi ce que les gens font (achèvement du parcours, contacts répétés, demandes abandonnées) et, si possible, une parmi ce que le système enregistre (latence des étapes du parcours). Quand les trois divergent, vous avez trouvé quelque chose à examiner.

**4. Convenez des cibles légèrement.** Au début, fixez une direction (« réduire le temps perdu ») et une date de revue plutôt qu'un nombre dur. Des cibles dures pour de nouvelles mesures d'expérience invitent au détournement avant que la mesure soit comprise. Quand une cible apparaît, faites-en une plage, et dites qui l'a acceptée.

### Recueillir et lire les données

**5. Employez de courtes questions éclair régulières.** Une question sur un énoncé, posée à intervalle régulier, est plus facile à répondre qu'une longue enquête annuelle. Faites tourner les énoncés, gardez la formulation stable et évitez de demander à la même personne plus d'une fois dans une période donnée. Reliez la conception de l'enquête éclair aux principes d'enquête du sujet précédent (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

**6. Lisez les commentaires avec une méthode.** Les outils d'[analyse de sentiment](https://en.wikipedia.org/wiki/Sentiment_analysis) peuvent trier de grands volumes de texte, et ils comprennent mal le sarcasme, le jargon et le contexte. Traitez la sortie de l'outil comme un premier passage, faites vérifier un échantillon par une personne chaque mois et gardez une courte liste de thèmes que vous codez à la main. Le but de l'analyse est de trouver des sujets dont parler avec les utilisateurs, non de produire un score.

**7. Ajoutez des signaux comportementaux issus du parcours.** Instrumentez les parcours qui comptent pour les utilisateurs, à leur connaissance : où commencent-ils, où abandonnent-ils et où demandent-ils de l'aide ? La [supervision des utilisateurs réels](https://en.wikipedia.org/wiki/Real_user_monitoring) des temps de chargement des pages, des erreurs et des étapes donne une vue que les enquêtes ne peuvent pas donner. Dites aux utilisateurs ce que vous recueillez, limitez-vous à ce dont vous avez besoin et agrégez avant de partager.

**8. Protégez les petits groupes et les individus.** Les données d'expérience peuvent révéler qui est en difficulté. Agrégez les résultats, supprimez les groupes en dessous d'une taille convenue et n'employez jamais les données dans des évaluations de performance. Décidez qui peut voir les commentaires bruts, et stockez-les en conséquence. Dans les cadres réglementés, consultez des spécialistes de la confidentialité avant de recueillir des données comportementales.

### Se servir de l'accord

**9. Montrez le SLA et le XLA côte à côte.** Sur la même page, affichez l'atteinte opérationnelle et les mesures d'expérience de chaque service. L'association est le but : un SLA vert avec un score d'expérience en baisse est une invitation à une conversation, et un score d'expérience vert avec des SLA qui échouent mérite qu'on regarde ce qu'on ne dit pas aux utilisateurs.

**10. Tenez une revue régulière de l'expérience avec les utilisateurs.** Réunissez-vous chaque trimestre avec des représentants des groupes d'utilisateurs, montrez les données, demandez ce qu'elles signifient et convenez d'une ou deux améliorations à essayer. Incluez le centre de services et l'équipe produit, car la cause d'une mauvaise expérience se situe souvent dans le produit, non dans le soutien.

**11. Financez les corrections.** Un accord qui identifie la friction puis la laisse en place apprend aux utilisateurs que les mesures sont du théâtre. Mettez les deux ou trois principaux problèmes d'expérience dans le backlog avec des responsables et des dates, et rendez-en compte à la revue suivante. Voir les métriques d'amélioration continue plus loin dans ce livre (voir le sujet 9.5, Métriques d'amélioration continue).

**12. Révisez l'accord à mesure que les services et les utilisateurs changent.** Retirez les énoncés qui ne comptent plus et ajoutez-en de nouveaux. Consignez les changements et marquez-les sur les graphiques de tendance, comme pour toute définition de métrique.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Score d'expérience | N'interroger que des utilisateurs satisfaits ; placer l'enquête après de bons événements ; reformuler l'énoncé pour qu'il soit plus facile d'y adhérer | Taux de réponse et composition des répondants ; journal de stabilité de la formulation ; lecture des commentaires |
| Tendance de sentiment | Régler l'outil ou la liste de thèmes jusqu'à ce que la tendance monte ; exclure les canaux négatifs | Vérification humaine d'un échantillon mensuel ; garder un guide de codage fixe et consigner les changements |
| Événements de friction par utilisateur | Redéfinir les événements pour que moins comptent ; décourager les contacts répétés en rendant le centre difficile à joindre | Volume de contacts par canal ; taux d'abandon au centre de services (voir le sujet 3.1, Métriques du centre de services) |
| Temps perdu à cause de problèmes informatiques | Demander de façon à ancrer des estimations basses ; ne compter que les incidents majeurs | Comparer le temps déclaré avec le temps dégradé mesuré ; revue de la formulation de l'enquête |
| Taux d'achèvement du parcours | Définir le parcours si étroitement que l'échec sort du périmètre ; orienter les cas difficiles vers un autre canal | Définition du parcours dans le registre ; taux de contacts d'aide et escalades |
| Atteinte du XLA | Fixer des cibles déjà atteintes ; définir un très petit ensemble de cibles | Revoir la fixation des cibles avec les utilisateurs ; montrer l'atteinte avec la tendance et l'historique des cibles |
| Écart d'expérience | Choisir les services ou les périodes les plus favorables ; changer les SLA comparés | Ensemble de comparaison fixe convenu à l'avance ; montrer tous les services |

Une lecture saine est un tableau d'expérience qui correspond aux commentaires et à la conversation de revue avec les utilisateurs, un petit ensemble de mesures qui changent lentement et pour des raisons que l'équipe peut expliquer, et un backlog de corrections d'expérience qui raccourcit.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| SLA seul | Clair, comptable, contractuel | Manque ce que ressentent les utilisateurs ; peut être vert alors que les utilisateurs sont mécontents |
| XLA seul | Proche de ce que les utilisateurs apprécient | Plus difficile à mesurer et à comparer ; faible comme base de contrats avec des fournisseurs |
| SLA avec XLA | Donne les deux vues et expose l'écart | Plus de travail ; exige confiance et jugement pour lire les divergences |
| Mesures d'expérience fondées sur l'enquête | Voix directe des utilisateurs | Biais de réponse ; charge pour les répondants |
| Mesures comportementales | Aucune charge d'enquête ; objectives | Exigent de l'instrumentation et du soin pour la confidentialité ; montrent ce qui s'est passé, non pourquoi |
| Indice d'expérience unique | Titre facile | Cache le détail ; facile à détourner et difficile à expliquer |

La réponse en prose est d'employer le XLA comme un ajout, introduit pour quelques services où l'écart entre l'exploitation et l'expérience est déjà visible. Ne remplacez pas les SLA contractuels par des mesures d'expérience que les fournisseurs ne peuvent pas contrôler. Gardez les engagements juridiques et commerciaux dans le SLA, et servez-vous du XLA pour piloter l'amélioration et la conversation.

## Questions à discuter avec votre équipe

**1. Pour notre service le plus important, à quoi ressemble une bonne journée pour les utilisateurs, avec leurs mots ?**
Réunissez deux ou trois utilisateurs, ou réutilisez des entretiens récents, et écrivez leurs énoncés. L'animateur doit résister à les reformuler en termes opérationnels. Comparez les énoncés avec le SLA actuel et demandez lesquels il couvre et lesquels il ignore. Les écarts sont des candidats à des mesures d'expérience.

**2. Où nos tableaux de bord verts et les histoires de nos utilisateurs divergent-ils ?**
Demandez à l'équipe un cas récent où un service a atteint ses cibles et où les utilisateurs se sont plaints. Retracez le cas à travers les données : qu'avons-nous mesuré, et qu'avons-nous manqué ? La conversation fait souvent émerger une étape manquante, une transmission ou une horloge arrêtée trop tôt. Consignez le cas comme exemple pour la prochaine revue avec les utilisateurs.

**3. Quelles trois mesures emploierions-nous pour savoir si cet énoncé d'expérience est vrai ?**
Choisissez un énoncé et choisissez une mesure parmi ce que les gens disent, une parmi ce qu'ils font et une parmi ce que le système enregistre. Demandez ce que chacune pourrait manquer et comment chacune pourrait être détournée. Convenez du plus petit ensemble qui convaincrait un utilisateur sceptique.

**4. Que recueillons-nous sur les utilisateurs qu'ils pourraient ne pas attendre, et en seraient-ils à l'aise ?**
Listez les sources de données comportementales et le but de chacune. Demandez à un représentant des utilisateurs de réagir. L'animateur doit traiter l'inconfort comme une information sur la conception, non comme un obstacle. Décidez ce qu'il faut cesser de recueillir, ce qu'il faut agréger et qui peut voir les données brutes.

**5. Que ferions-nous si le score d'expérience baissait alors que tous les SLA restaient verts ?**
Répétez la réponse. Qui regarde d'abord, que vérifie-t-il et à qui parle-t-il ? Décidez si l'équipe ferait confiance au score d'expérience ou chercherait des moyens de l'écarter. La réponse montre le sérieux avec lequel l'équipe prend l'accord.

**6. Quelles corrections d'expérience avons-nous promises, et qu'en est-il advenu ?**
Passez en revue les deux dernières réunions de revue avec les utilisateurs. Pour chaque engagement, montrez la date, le responsable et le résultat. Si la liste est vide ou périmée, discutez de la raison. Convenez d'une correction à livrer avant la prochaine revue et d'un moyen de dire aux utilisateurs que c'est fait.

## Quatre perspectives

### Équipes produit et livraison

Les équipes produit détiennent une grande part de la cause d'une mauvaise expérience : écrans déroutants, étapes lentes, erreurs peu claires. Les mesures d'expérience leur donnent des preuves tirées de l'usage réel, et elles alimentent directement l'affinage. Les équipes devraient lire les thèmes de commentaires avant chaque séance de planification et relier les mesures de parcours au backlog. Elles ne devraient pas traiter le score d'expérience comme un objectif d'équipe. C'est une information sur le service qu'elles partagent avec l'exploitation.

### Équipes de service et d'exploitation

Les équipes d'exploitation voient d'abord la friction : contacts répétés, contournements et appelants en colère. Les mesures d'expérience leur donnent un moyen de montrer ce que le SLA cache, et une raison de corriger les causes plutôt que de clore les tickets plus vite. Elles devraient tenir bon sur les définitions et l'échantillonnage, éviter d'orienter les utilisateurs vers des canaux qui paraissent meilleurs et lire en entier les commentaires mécontents (voir le sujet 3.1, Métriques du centre de services).

### Direction et gouvernance

Les dirigeants choisissent si un XLA est une conversation ou un tableau d'affichage. Ils devraient demander ce que les données d'expérience disent de l'endroit où investir, éviter de lier la rémunération à un indice d'expérience et protéger la confidentialité des données du personnel. La gouvernance devrait demander les définitions, l'échantillonnage et l'historique des changements, et traiter un saut inexpliqué d'une mesure d'expérience comme une raison de vérifier la méthode.

### Clients et utilisateurs

Les utilisateurs sont les auteurs de l'accord. Ils devraient être invités à décrire ce à quoi ressemble le bien, voir les résultats et savoir ce qui a changé. Ils devraient savoir ce qui est recueilli à leur sujet et pourquoi, et avoir un moyen de dire non. Les utilisateurs souvent interrogés qui ne voient rien s'améliorer cesseront de répondre, et le silence fera paraître les données meilleures que la réalité.

## En pratique : un exemple d'ITIL agile

Un cabinet de services professionnels de taille moyenne exploite un service informatique interne pour 1 800 employés. Les chiffres ci-dessous sont illustratifs.

Le rapport mensuel de SLA montre 99,8 pour cent de disponibilité pour la plateforme de collaboration et 96 pour cent des incidents résolus dans la cible. Le directeur informatique est satisfait, mais les consultants chez les clients continuent de se plaindre d'une connexion lente. Le responsable du service propose un projet pilote de XLA pour la plateforme de collaboration.

Lors d'entretiens avec 12 consultants, trois énoncés émergent : « je peux rejoindre un appel client dans les deux minutes qui suivent ma décision de le faire », « je n'ai pas à appeler l'informatique pour retrouver l'accès à mon compte » et « quand quelque chose tombe en panne, je sais ce qui se passe ». L'équipe choisit des mesures pour chacun. Pour le premier, elle prend la note éclair de l'énoncé et le temps mesuré entre le début de la connexion et l'entrée dans l'appel, tiré de la supervision des utilisateurs réels du client, agrégé par région. Pour le second, elle compte les contacts de réinitialisation de mot de passe par utilisateur actif et par mois. Pour le troisième, elle suit la part des incidents où le message d'état a été mis à jour dans les 30 minutes, et pose la question éclair à son sujet.

Les deux premiers mois de données montrent que le temps médian de la connexion à l'entrée dans l'appel est bon dans la région du siège mais long dans deux autres, et que les contacts de réinitialisation de mot de passe par utilisateur sont trois fois plus élevés pour le personnel sur ordinateurs portables gérés que pour les autres. Le score d'expérience du premier énoncé est de 3,1 sur 5 contre 4,2 pour le personnel de bureau. Le SLA est vert dans les deux cas. Le responsable du service porte le constat à la revue avec les utilisateurs. L'équipe convient de deux améliorations : régler la configuration d'authentification unique pour les régions éloignées, et changer les paramètres de renouvellement des jetons sur les ordinateurs portables gérés. Trois mois plus tard, le temps médian baisse, les contacts de réinitialisation par utilisateur baissent et le score d'expérience monte à 3,8. Le directeur convient de garder le XLA pour ce service, de l'ajouter à un autre et de ne fixer aucune cible numérique avant la prochaine revue.

## Perspective sectorielle

**Startup.** Le contact étroit avec les utilisateurs rend les entretiens faciles. Résistez à construire un cadre : écrivez trois énoncés d'expérience pour le service principal, interrogez les utilisateurs à leur sujet chaque mois et ajoutez une mesure comportementale. Les accords formels viennent plus tard.

**Petite entreprise.** Le personnel est peu nombreux et partage souvent un responsable avec l'informatique. Employez des conversations et une très courte enquête éclair mensuelle. Soyez prudent avec les données comportementales, car les petits groupes sont facilement identifiables.

**Grande entreprise.** L'échelle apporte de nombreux groupes d'utilisateurs et de fournisseurs. Définissez les énoncés d'expérience par service et par persona, gardez des tableaux de bord par service et évitez un indice d'expérience unique pour toute l'entreprise. Alignez le XLA sur les contrats de fournisseurs afin que les fournisseurs apportent des données sans être tenus à des mesures qu'ils ne peuvent pas influencer.

**Gouvernement et secteur public.** Les services font souvent face au public autant qu'au personnel, avec des devoirs d'accessibilité, de langage clair et d'égalité d'accès. Incluez l'accessibilité dans les énoncés d'expérience et les mesures, testez avec des utilisateurs qui s'appuient sur des technologies d'assistance et protégez les données personnelles conformément à la loi. Là où un rapport public est exigé, rapportez les méthodes avec les résultats (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût est modéré. Les entretiens avec les utilisateurs prennent quelques jours par service. Une enquête éclair mensuelle demande un outil d'enquête, que beaucoup d'organisations ont déjà. Les mesures comportementales demandent un peu d'instrumentation, qui peut venir de la supervision existante et de l'analyse du portail. La revue avec les utilisateurs prend quelques heures chaque trimestre. Coder les commentaires prend une heure ou deux chaque mois.

Le retour réside dans la découverte de problèmes que les SLA ne montrent pas, comme des parcours lents dans certaines régions ou sur certains appareils, et dans l'orientation de l'argent d'amélioration vers ce que les utilisateurs apprécient. Le temps perdu à cause de problèmes informatiques peut être transformé en coût avec vos propres taux de personnel si vous le mesurez soigneusement. Évitez les affirmations génériques de gains de productivité. Bâtissez le dossier à partir de votre propre ligne de base : temps perdu par utilisateur, événements de friction par utilisateur et contacts répétés, avant et après une correction. Comptez aussi le coût évité des contournements, comme les outils parallèles adoptés parce que le service officiel est incommode.

## Antimodèles et pièges

- **Remplacer les SLA par des XLA.** Les contrats ont besoin d'engagements comptables. Gardez les deux et montrez-les ensemble.
- **Un indice d'expérience composite.** Il cache la cause et invite au détournement. Montrez quelques mesures séparées.
- **Définir l'expérience sans les utilisateurs.** Des énoncés écrits en salle de réunion décrivent le point de vue du fournisseur. Interrogez et testez avec les utilisateurs.
- **Interroger jusqu'à ce que les gens cessent de répondre.** Gardez les enquêtes éclair courtes et faites tourner les sujets.
- **Recueillir des données comportementales sans le dire à personne.** Cela brise la confiance et peut enfreindre la loi. Soyez ouvert sur ce qui est recueilli et pourquoi.
- **Employer les données d'expérience dans les évaluations de performance.** Cela transforme un outil d'apprentissage en surveillance et détruit le rapport honnête.
- **Corriger la mesure, non la cause.** Ne redirigez pas les utilisateurs vers un canal plus sympathique pour améliorer un chiffre. Corrigez le parcours.
- **Laisser les constats sur une diapositive.** Financez et suivez les corrections d'expérience.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Objectifs d'expérience | Implicites ou absents | Écrits par le fournisseur pour certains services | Énoncés écrits avec les utilisateurs pour les services clés | Énoncés revus et révisés chaque trimestre avec les groupes d'utilisateurs | Partagés entre services et fournisseurs, détenus conjointement avec les utilisateurs |
| Mesure | Enquêtes occasionnelles | Enquête éclair pour un service | Mesures sous trois angles (dire, faire, système) pour chaque énoncé | Mesures suivies dans le temps, protégées pour les petits groupes et comparées aux SLA | Données combinées entre fournisseurs, avec des choix de confidentialité contrôlés par les utilisateurs |
| Action | Plaintes traitées une par une | Corrections faites ad hoc | Principaux problèmes d'expérience dans le backlog avec des responsables | Corrections financées, suivies et rapportées aux utilisateurs | Amélioration coordonnée entre équipes, fournisseurs et utilisateurs, l'apprentissage étant partagé |

## Liste de vérification

- [ ] Chaque service sous XLA a de trois à cinq énoncés d'expérience écrits avec les utilisateurs.
- [ ] Chaque énoncé a des mesures sous au moins deux angles (dire, faire, système).
- [ ] Les mesures de SLA et d'expérience figurent sur la même page pour chaque service.
- [ ] Les enquêtes éclair sont courtes, régulières et stables dans leur formulation.
- [ ] Les commentaires sont codés selon un guide stable et une personne vérifie un échantillon mensuel.
- [ ] Les groupes inférieurs à une taille convenue sont supprimés dans les rapports.
- [ ] Les données comportementales recueillies sont communiquées aux utilisateurs et limitées au besoin.
- [ ] Aucune mesure d'expérience n'est employée dans les évaluations de performance individuelles.
- [ ] Une revue trimestrielle avec des représentants des utilisateurs est au calendrier.
- [ ] Les principaux problèmes d'expérience ont des responsables et des dates dans le backlog.

## Prompts d'IA

**Rédigez des énoncés d'expérience à partir de notes d'entretiens.**

```text
Voici des notes anonymisées de [number] entretiens avec des utilisateurs de
[service] dans [type of organization] : [paste notes]. Proposez de trois à cinq
énoncés d'expérience à la première personne, chacun lié à un résultat qui
importe aux utilisateurs, en reprenant leurs mots autant que possible. Pour
chacun, suggérez une mesure parmi ce que les gens disent, une parmi ce qu'ils
font et une parmi ce que le système enregistre. N'inventez pas de chiffres.
Énumérez vos hypothèses et tout ce que vous n'avez pas pu savoir à partir des
notes.
```

**Trouvez l'écart entre SLA et expérience.**

```text
Pour [service] sur [period], nos résultats de SLA étaient : [paste results]. Nos
données d'expérience (notes éclair, thèmes de commentaires, comptes de
friction) étaient : [paste data]. Décrivez où les deux divergent, proposez trois
explications possibles pour chaque divergence et suggérez ce qu'il faut vérifier
ensuite. Ne supposez pas de cause que les données ne peuvent pas étayer.
Énumérez vos hypothèses et les données supplémentaires qui aideraient.
```

**Examinez une approche de confidentialité pour les mesures comportementales.**

```text
Nous prévoyons de recueillir ces signaux comportementaux pour la mesure de
l'expérience : [list]. Les utilisateurs sont [staff, public, or both] dans
[jurisdiction or sector]. Examinez le plan pour les risques en matière de
confidentialité, de confiance et d'équité, et suggérez des pratiques minimales
d'agrégation, de conservation et de communication. Signalez tout ce que je
devrais porter à un spécialiste de la confidentialité. Ne donnez pas de
conclusions juridiques. Énumérez vos hypothèses.
```

**Préparez une revue trimestrielle de l'expérience avec les utilisateurs.**

```text
Rédigez un ordre du jour et un résumé d'une page pour une revue trimestrielle de
l'expérience de [service] avec des représentants de [user groups]. Incluez côte
à côte les résultats de SLA et d'expérience, les principaux thèmes de
commentaires, les engagements du trimestre dernier et leur état, et deux
questions pour les utilisateurs. Les données : [paste data]. Gardez un ton
simple et évitez le jargon. Énumérez vos hypothèses et marquez toute affirmation
qui demande vérification.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou d'une mesure d'expérience avant de l'ajouter à un tableau de bord.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de XLA porte son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Un XLA ajoute des objectifs et des mesures d'expérience aux cibles opérationnelles, et il complète le SLA.
- Écrivez les énoncés d'expérience avec les utilisateurs, avec leurs mots, et liez chacun à des mesures de ce que les gens disent, font et de ce que le système enregistre.
- Montrez ensemble les résultats de SLA et d'expérience, et traitez la divergence comme une invitation à enquêter.
- Protégez les utilisateurs : communiquez ce que vous recueillez, agrégez-le, supprimez les petits groupes et gardez-le hors des évaluations de performance.
- Évitez un indice d'expérience unique et évitez les cibles dures avant que les mesures soient comprises.
- Financez les corrections que révèlent les données, et dites aux utilisateurs ce qui a changé.

## Références et lectures complémentaires

1. ISO 9241-210, *Ergonomics of human-system interaction: Human-centred design for interactive systems*, International Organization for Standardization.
2. Norman, D. A., *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
5. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
6. Wikipedia, [User experience](https://en.wikipedia.org/wiki/User_experience).
7. Wikipedia, [Customer experience](https://en.wikipedia.org/wiki/Customer_experience).
8. Wikipedia, [Usability](https://en.wikipedia.org/wiki/Usability).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Human-centered design](https://en.wikipedia.org/wiki/Human-centered_design).
11. Wikipedia, [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis).
12. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
