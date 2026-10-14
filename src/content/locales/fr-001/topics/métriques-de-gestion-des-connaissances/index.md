# Métriques de gestion des connaissances

**Mesurez les connaissances à l'aune de leur usage et de la confiance qu'on leur accorde au moment du besoin, non de leur quantité : surveillez ensemble le taux de liaison, la réutilisation, la fraîcheur et la facilité de recherche, et traitez chaque compte d'articles comme une question sur le travail plutôt que comme un score.**

## Résumé et motivation

Une équipe de service accumule des connaissances chaque jour : comment rétablir un service, ce que signifie vraiment un message d'erreur déroutant, quel contournement a tenu la dernière fois. La [gestion des connaissances](https://en.wikipedia.org/wiki/Knowledge_management) est la discipline qui consiste à rendre ces connaissances disponibles à la prochaine personne qui en a besoin. Dans ITIL 4 (l'édition 2019 du cadre publié par AXELOS, et le fondement largement documenté de ce livre), la gestion des connaissances est une pratique à part entière, et [ITIL](https://en.wikipedia.org/wiki/ITIL) attend aussi qu'elle soutienne le traitement des incidents, celui des problèmes et le centre de services. Ce sujet couvre la manière de savoir si ce soutien est réel.

La plus grande part de ce que produit utilement la gestion des connaissances finit dans une [base de connaissances](https://en.wikipedia.org/wiki/Knowledge_base) : un stock d'articles, de guides d'exploitation, d'enregistrements d'erreurs connues et de courtes réponses pratiques. Un [guide d'exploitation](https://en.wikipedia.org/wiki/Runbook) (runbook) est un ensemble écrit d'étapes pour une opération courante ou un rétablissement. Les articles sont la part explicite de ce qu'une équipe sait. Les [connaissances tacites](https://en.wikipedia.org/wiki/Tacit_knowledge) des personnes expérimentées, comme le sentiment qu'une alarme n'est que du bruit, ne peuvent pas être entièrement écrites, et aucune métrique de ce sujet ne les mesure directement.

Dans la vision ITIL, la connaissance est un actif géré avec un cycle de vie : créée, revue, publiée, utilisée et retirée. Dans la vision agile, la documentation doit gagner sa place, la conversation et le travail en binôme portent beaucoup, et la connaissance écrite est un sous-produit de l'achèvement du travail. Les deux visions s'accordent sur le test : la connaissance a-t-elle aidé quelqu'un à résoudre un vrai problème plus vite ou mieux qu'il ne l'aurait fait sans elle ?

La méthode qui relie le plus directement les deux visions est le [Knowledge-Centered Service (KCS)](https://en.wikipedia.org/wiki/Knowledge-centered_support), une méthodologie du Consortium for Service Innovation. Dans le KCS, la connaissance est capturée et améliorée dans le cadre de la résolution du problème, non après coup. Les gens travaillent dans deux boucles. La boucle de résolution est le moment de la résolution : chercher un article existant, le réutiliser et l'améliorer s'il existe, en créer un sinon. La boucle d'évolution est le cycle plus long qui étudie comment la connaissance se comporte et améliore le système autour d'elle. Le KCS propose aussi ses propres indicateurs, comme le taux auquel les cas résolus sont liés à des articles. Ce sujet résume ces idées sans lien avec un fournisseur ; les équipes qui adoptent formellement le KCS devraient lire le guide des pratiques du Consortium lui-même.

Le nombre d'articles d'une base de connaissances est un inventaire, non un résultat, et il monte aussi facilement par négligence que par soin. Les métriques ci-dessous sont liées à un moment d'usage : un cas clos, une recherche effectuée, la réaction d'un lecteur. Même celles-ci peuvent être faussées (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Les mesures de contact et de traitement vivent avec le [centre de services](https://en.wikipedia.org/wiki/Service_desk) (voir le sujet 3.1, Métriques du centre de services). Le volume et les schémas de répétition viennent des données d'incidents (voir le sujet 3.2, Volume et priorité des incidents). Le succès du libre-service, où les utilisateurs consomment des articles sans agent, est couvert séparément (voir le sujet 3.7, Métriques de libre-service et d'automatisation). Ce sujet s'en tient à la santé de la connaissance elle-même et à son usage par les personnes qui résolvent les problèmes.

## Principes clés

- **Mesurer l'usage au point de travail.** Un article lié à un cas résolu ou trouvé par une recherche est une preuve de valeur. Un article qui existe simplement n'en est pas une.
- **Capturer dans le flux de travail.** Une connaissance écrite pendant la résolution est plus fraîche et moins coûteuse que celle écrite lors d'un effort de documentation séparé ; les métriques devraient donc récompenser la capture comme partie de l'achèvement du travail.
- **Lire la fraîcheur au regard de l'usage.** Ancien ne veut pas dire faux. L'effort de revue appartient aux articles souvent utilisés, non réparti uniformément sur un catalogue de pages surtout non lues.
- **Échantillonner la pertinence.** Un lien entre un cas et un article prouve seulement que quelqu'un a créé le lien. Un petit échantillon humain sur l'adéquation réelle de l'article vous dit si le lien signifie quelque chose.
- **Décrire des équipes et des domaines de connaissance, jamais des individus.** Les comptes de contributions par personne transforment un actif partagé en compétition et apprennent aux gens à écrire des déchets (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).
- **Associer chaque métrique de volume à un signal de qualité.** Le taux de liaison à la pertinence, la création d'articles aux doublons, la réutilisation aux retours des lecteurs.

## Définitions des métriques

Le tableau liste sept métriques. Les fenêtres de temps (comme la période de revue pour la fraîcheur) sont des choix qu'une équipe fait et écrit ; aucune valeur ici n'est une référence. Partout, « cas » désigne un enregistrement d'incident ou de demande de service dans l'outil ITSM (gestion des services informatiques), et les incidents majeurs sont rapportés séparément pour ne pas fausser les ratios (voir le sujet 3.4, Métriques des incidents majeurs).

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de liaison aux connaissances | Part des cas résolus ayant au moins un article de connaissance attaché au moment de la résolution | cas résolus dans la période avec au moins un article lié / cas résolus dans la période. Compte la date de résolution ; exclut les incidents majeurs, les cas clos comme doublons et les cas clos automatiquement sans travail humain | pourcentage | Outil ITSM : tables de cas et de liens d'articles | Gestion des connaissances ; gestion des incidents | La définition de terminé inclut la capture de ce qui a été appris | Hebdomadaire pour l'équipe ; mensuelle pour la revue |
| Ratio de réutilisation | Part des liens d'articles qui pointent vers un article existant plutôt que vers un article créé pendant ce cas | liens vers des articles qui existaient avant l'ouverture du cas / tous les liens d'articles faits sur les cas résolus dans la période. Exclut les liens ajoutés après la clôture du cas | pourcentage | Outil ITSM : date de création de l'article au regard de la date d'ouverture du cas | Gestion des connaissances ; amélioration continue | Réutiliser plutôt que refaire ; propriété partagée du code et de sa documentation | Mensuelle |
| Fraîcheur des articles | Part des articles en usage qui ont été revus, ou utilisés et confirmés corrects, dans une fenêtre de revue déclarée | articles en usage ayant une date de revue ou d'usage confirmé dans la fenêtre / articles en usage. Un article est en usage s'il a été lié à un cas ou consulté par un lecteur dans les 12 derniers mois (un choix d'équipe) ; les brouillons et les articles retirés sont exclus | pourcentage | Métadonnées de la base de connaissances et journal des consultations | Gestion des connaissances ; centre de services | Affinage du backlog de la documentation ; actions de rétrospective | Mensuelle |
| Taux de recherches sans résultat | Part des recherches dans les connaissances qui ne retournent aucun article | recherches sans résultat / toutes les recherches. Exclut les recherches de robots et les contrôles automatiques ; compte chaque recherche une fois même si elle est répétée en moins d'une minute | pourcentage | Journal de recherche de la base de connaissances ou du portail | Gestion des connaissances ; centre de services ; gestion des demandes de service | Découverte d'un besoin d'utilisateur non satisfait ; apport au backlog | Hebdomadaire |
| Taux d'utilité | Part des retours de lecteurs disant que l'article a aidé, montrée avec le taux de réponse | votes utiles / (votes utiles + votes non utiles) pour les articles de la période ; taux de réponse = votes de retour / consultations de l'article | pourcentage, avec le taux de réponse | Widget de retour de la base de connaissances et journal des consultations | Gestion des connaissances ; expérience client | Retour des parties prenantes sur la documentation | Mensuelle |
| Délai de publication | Temps écoulé entre la création du brouillon d'un article et le moment où il est revu et visible de son public | l'horloge démarre à la création du brouillon, s'arrête à la publication (ou au premier état visible approuvé). Exclut le temps dans un état « en pause, en attente d'une version du produit » ; rapporté en médiane et 85e percentile | jours (médiane et 85e percentile) | Historique du flux de travail de la base de connaissances | Gestion des connaissances | Délai de livraison d'un élément de travail du début au terminé (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux) | Mensuelle |
| Étendue des contributions | Répartition de la création et de l'amélioration d'articles dans l'équipe, mesurée sans nommer les personnes | contributeurs distincts ayant créé ou amélioré un article dans la période / membres de l'équipe ayant résolu des cas dans la période. Rapporté pour une équipe seulement, jamais comme une liste de noms | pourcentage | Historique des modifications de la base de connaissances joint à l'appartenance aux équipes | Gestion des connaissances ; amélioration continue | Propriété collective ; travail en binôme et en essaim | Trimestrielle |

Le taux de liaison aux connaissances a une horloge facile à manquer. Le lien doit exister quand le cas est résolu, non quand quelqu'un fait le ménage une semaine plus tard, car une liaison tardive mesure le nettoyage et ne dit rien de l'usage pendant la résolution. Le ratio de réutilisation dépend d'une date de création d'article fiable. Si les articles sont migrés ou importés en bloc, leurs dates de création sont remises à zéro et le ratio induira en erreur tant que la migration n'est pas marquée.

## Recommandations

### Décider à quoi sert la connaissance

**1. Reliez chaque métrique de connaissance à un cas d'usage.** Nommez les personnes que la connaissance sert : les analystes du centre de services qui résolvent au premier contact, les ingénieurs d'astreinte qui traitent une alerte, ou les utilisateurs qui s'aident eux-mêmes. Chaque public a besoin de mesures différentes. Un guide d'exploitation pour un ingénieur d'astreinte se juge à ce que les étapes ont rétabli le service, tandis qu'un article de réinitialisation de mot de passe se juge à ce que l'utilisateur a cessé de contacter le centre. Consignez-le dans votre registre (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

**2. Commencez par le taux de liaison et la pertinence, non par les comptes d'articles.** Le taux de liaison montre si la connaissance entre dans le moment de la résolution. Associez-le dès le départ à un petit échantillon mensuel où une personne lit 20 ou 30 cas liés et juge si l'article convenait. Un taux de liaison de 70 pour cent avec la moitié des liens non pertinents est pire qu'un taux de liaison de 40 pour cent avec des liens honnêtes, parce que le premier cache la lacune de connaissance que le second révèle.

**3. Séparez « aucun article n'existe » de « l'article existe mais n'a pas été trouvé ».** Quand un cas se clôt sans lien, les raisons diffèrent et les remèdes aussi. Ajoutez un court choix de clôture, comme « aucun article n'existait » et « article introuvable », et rapportez-les comme des parts des cas non liés. Le premier désigne du contenu à écrire ; le second désigne la recherche, la dénomination et la structure. Gardez le choix facultatif là où il ralentirait le centre, et échantillonnez plutôt.

### Capturer la connaissance à mesure que le travail s'achève

**4. Faites de la capture une partie de la définition de terminé.** Dans une équipe agile, un élément de travail qui change le comportement d'un service n'est pas terminé tant que le guide d'exploitation, l'enregistrement d'erreur connue ou l'article d'aide n'est pas mis à jour. Au centre de services, un cas qui a exigé une découverte n'est pas résolu tant que la découverte n'est pas capturée ou qu'un article existant n'est pas amélioré. C'est l'idée du KCS de travailler dans la boucle de résolution, et elle garde bas le coût d'écriture, car la personne qui écrit a le contexte frais.

**5. Autorisez un état de brouillon léger.** Beaucoup d'équipes perdent des connaissances parce que chaque article doit passer une lourde revue avant que quiconque puisse le voir. La pratique de style KCS distingue un article en cours, visible de l'équipe, d'un article validé, visible d'un public plus large. Mesurez séparément le délai de publication des deux étapes, en médiane et en 85e percentile, afin que les revues lentes apparaissent comme une file et non comme une plainte vague (voir le sujet 1.6, Culture statistique pour les métriques de service).

**6. Préférez améliorer à créer.** Un tas croissant d'articles quasi dupliqués dégrade la recherche et rend la fraîcheur plus difficile à tenir. Surveillez le ratio de réutilisation à côté du compte de créations, et quand la création monte pendant que la réutilisation baisse, cherchez des doublons. Rendez la fusion et le retrait faciles et visibles, et comptez une fusion comme une contribution positive.

### Garder la connaissance à jour et trouvable

**7. Passez en revue les articles qui sont utilisés.** Concentrez l'effort de revue là où l'usage est élevé. Triez les articles en usage selon la fréquence de leur liaison ou de leur consultation, et fixez pour le groupe de tête une fenêtre de revue plus courte que pour la longue traîne. Un article périmé que personne ne lit coûte peu ; un article périmé qui apparaît dans un tiers des résolutions peut induire en erreur des centaines de cas. Rapportez la fraîcheur du groupe très utilisé comme sa propre ligne pour que la moyenne de toute la base ne la cache pas.

**8. Traitez les échecs de recherche comme des éléments de backlog.** Lisez chaque mois les recherches sans résultat les plus fréquentes et décidez pour chacune s'il faut écrire un article, ajouter un synonyme, renommer un article ou accepter que la question relève d'ailleurs. Cela transforme une métrique en une liste courte et concrète que l'équipe peut traiter. Cela montre aussi le vocabulaire réel, car les utilisateurs et les analystes emploient rarement les mots du catalogue de services.

**9. Lisez les mots derrière les votes.** Le taux d'utilité est peu coûteux et bruité. Les taux de réponse sont généralement bas et penchent vers les opinions tranchées. Montrez le taux de réponse à côté du taux d'utilité, et lisez les commentaires écrits sur les articles les plus consultés lors d'une revue régulière. Un seul commentaire comme « l'étape 4 n'existe plus dans la nouvelle version » vaut plus que mille votes sans étiquette.

**10. Reliez la connaissance aux problèmes et aux analyses post-incident.** Un incident récurrent résolu à répétition avec le même article est un signal pour la gestion des problèmes, qui cherche la cause sous-jacente et peut supprimer le besoin de l'article (voir le sujet 4.1, Métriques de gestion des problèmes). Les enregistrements d'erreurs connues et les leçons des analyses post-incident sont des actifs de connaissance avec leur propre cycle de vie (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage, et le sujet 4.6, Dette technique et erreurs connues). Regardez chaque trimestre les dix articles les plus liés et demandez lesquels devraient être retirés en corrigeant la cause.

### Gouverner sans classer

**11. Rapportez la contribution au niveau de l'équipe.** L'étendue des contributions dit si le travail de connaissance est partagé ou concentré sur deux personnes. C'est un risque qui vaut d'être vu, car c'est le même schéma qu'un [facteur camion](https://en.wikipedia.org/wiki/Bus_factor) de deux. Elle ne doit jamais devenir un classement d'auteurs, qui récompenserait la quantité de modifications et apprendrait aux gens à scinder des articles ou à faire des changements triviaux. Si une concentration apparaît, traitez-la comme une conversation d'équipe sur le temps, le soutien et la permission d'écrire (voir le sujet 9.4, Métriques de compétences et d'apprentissage).

**12. Retirez les mesures qui cessent d'aider.** Si personne n'agit sur le taux de liaison, déplacez l'attention vers la pertinence ou la fraîcheur du groupe très utilisé. Consignez tout changement de définition avec son motif, car une formule modifiée casse la courbe de tendance (voir le sujet 1.5, Sources de données et instrumentation).

## Vecteurs de détournement et garde-fous

Chaque métrique du tableau des définitions apparaît ici. Les métriques de connaissance sont particulièrement exposées parce que l'acte de lier ou de revoir est un clic rapide, alors que la vraie valeur réside dans le contenu.

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Taux de liaison aux connaissances | Attacher un article quelconque, souvent générique ou très populaire, à chaque cas avant de le clore ; lier après coup en bloc | Échantillon mensuel de pertinence des cas liés ; part des liens qui vont aux mêmes quelques articles ; horodatage du lien au regard de l'horodatage de résolution |
| Ratio de réutilisation | Créer un nouvel article pour chaque cas puis le lier aussitôt afin qu'il compte comme réutilisé la fois suivante ; ou ne jamais créer pour que le ratio paraisse parfait | Taux d'articles en double trouvé par une recherche périodique ; part des cas clos avec le motif « aucun article n'existait » |
| Fraîcheur des articles | Marquer des articles comme revus sans les vérifier ; remettre à zéro la date de revue par des modifications triviales ; ne compter que les articles faciles à revoir | Échantillon d'articles récemment revus testés au regard du service réel ; taux d'utilité et commentaires écrits sur les mêmes articles |
| Taux de recherches sans résultat | Ajouter des articles vagues ou fourre-tout qui correspondent à toute requête ; bourrer de mots-clés ; exclure du journal les termes de recherche gênants | Clic suivi d'un contact sur le même sujet dans une courte fenêtre ; taux d'utilité ; lecture manuelle des principaux termes de recherche |
| Taux d'utilité | N'inviter à voter que les lecteurs satisfaits ; cacher l'option non utile ; voter depuis l'intérieur de l'équipe | Taux de réponse et composition des répondants montrés avec le taux ; commentaires écrits ; taux de contact après lecture de l'article |
| Délai de publication | Publier une ébauche mince pour arrêter l'horloge ; scinder un article en morceaux ; déplacer des brouillons vers un état que l'horloge exclut | Pertinence et utilité des articles récemment publiés ; nombre et âge des brouillons dans les états exclus |
| Étendue des contributions | Faire des modifications triviales pour que chacun apparaisse comme contributeur ; demander aux gens d'ajouter une phrase pour atteindre un quota | Taille et substance des modifications échantillonnées ; réutilisation et utilité des articles contribués ; aucun nom dans le rapport |

Une lecture saine montre des articles liés qu'un échantillon humain confirme pertinents, un ratio de réutilisation qui monte à mesure que la base mûrit, un ensemble d'articles très utilisés avec des revues récentes et vérifiées, une courte liste d'échecs de recherche que l'équipe traite et une contribution répartie dans l'équipe. Quelques cas sans article, parce qu'ils étaient réellement nouveaux, sont des signes d'une base honnête, non d'une base défaillante.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Viser un taux de liaison élevé | Pousse la capture et la réutilisation dans la routine quotidienne ; simple à comprendre | Invite à des liens sans signification ; cache les lacunes où aucun article n'existe |
| Échantillonner la pertinence à la main | Révèle si les liens signifient quelque chose ; bâtit des normes partagées | Prend du temps d'analyste ; les petits échantillons sont bruités ; dépend du jugement de l'échantillonneur |
| Tout revoir selon un calendrier fixe | Facile à planifier et à auditer ; appliqué uniformément | Dépense de l'effort sur des articles que personne ne lit ; néglige les plus utilisés |
| Revoir selon l'usage | Dirige l'effort là où une connaissance fausse fait le plus mal | Exige des données fiables de consultation et de liens ; les articles de la longue traîne peuvent pourrir sans qu'on le voie |
| Adoption formelle du KCS | Donne un ensemble cohérent et éprouvé de pratiques et d'indicateurs | Exige un investissement soutenu, du coaching et un soutien d'outils ; lourd pour une très petite équipe |
| Conversation et travail en binôme plutôt qu'articles | Transmet le jugement et le contexte ; faible surcoût | Ne passe pas à l'échelle des équipes de quart, des congés et du roulement ; la connaissance part avec les gens |

Mesurez juste assez pour voir si la connaissance est utilisée et crue, et dépensez l'effort épargné sur le contenu. Pour une petite équipe, un taux de liaison avec un échantillon mensuel de pertinence et une courte liste d'échecs de recherche forment un programme complet. Pour un grand centre, l'ensemble complet ne se rentabilise que si quelqu'un détient la revue et agit en conséquence.

## Questions à discuter avec votre équipe

**1. La dernière fois que nous avons résolu un cas difficile, d'où venait la connaissance, et où est-elle allée ensuite ?**
Choisissez un cas récent qui a demandé un vrai effort et retracez le chemin de ce qui a été appris. A-t-on trouvé un article, demandé à un collègue, ou élaboré une réponse à partir de rien ? Demandez si la prochaine personne ayant le même problème trouverait la réponse en moins de cinq minutes. L'animateur doit chercher l'écart entre ce que l'équipe sait et ce que contient la base de connaissances.

**2. Si nous relevions notre taux de liaison à une cible donnée le mois prochain, comment pourrions-nous le faire sans aider personne ?**
Rendez explicite la liste des détournements et traitez-la comme un apport de conception plutôt que comme une accusation. Les réponses courantes sont de lier un article générique, de lier en bloc à la clôture et de choisir l'article le plus populaire. Pour chaque réponse, demandez quel garde-fou du tableau l'attraperait et à quelle vitesse. L'animateur doit repartir avec au moins un nouveau contrôle, comme un échantillon mensuel de pertinence, et un responsable pour celui-ci.

**3. Sur quels cinq articles nous appuyons-nous le plus, et quand ont-ils été vérifiés pour la dernière fois au regard du service réel ?**
Regardez les articles les plus liés et les plus consultés et lisez-en deux à voix haute ensemble. La conversation montre souvent que les articles qui ont le plus d'impact sont ceux qui reçoivent le moins de soin, ce qui est l'argument pour une revue selon l'usage.

**4. Que cherchent les gens que nous n'avons pas ?**
Apportez les principales recherches sans résultat et les raisons des cas non liés. Regroupez-les en articles à écrire, mots à ajouter et questions qui relèvent d'une autre équipe. L'animateur doit consigner une courte liste des trois éléments suivants et prévoir comment ils seront écrits dans le travail normal, non dans un projet spécial.

**5. Qui écrit notre connaissance, et que cela leur coûte-t-il ?**
Discutez honnêtement de la capture. L'écriture est-elle vue comme une partie du métier, ou comme un travail supplémentaire après le travail ? Demandez ce qui la ralentit : un gabarit lourd, une revue lente, la peur de se tromper, ou pas de temps à la fin d'un quart difficile. L'animateur doit détourner de la chasse aux individus vers des changements d'outillage, de temps et de permission.

**6. Lesquels de nos articles devrions-nous cesser d'avoir besoin ?**
Prenez les articles les plus réutilisés et demandez quelle cause récurrente ils contournent. Une procédure de réinitialisation employée 200 fois par mois pourrait être le symptôme d'un défaut du produit, d'un écran déroutant ou d'une automatisation manquante. Décidez quels éléments remettre à la gestion des problèmes ou à l'équipe produit, et lesquels automatiser (voir le sujet 3.7, Métriques de libre-service et d'automatisation). L'animateur doit noter que le meilleur résultat d'un bon travail de connaissance est parfois moins d'articles.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison créent une grande part de la connaissance dont un service aura besoin : comment une fonction se comporte, ce que signifie une nouvelle erreur, comment revenir en arrière. Si cette connaissance n'est pas capturée avant la publication, le centre de services et les équipes d'astreinte l'apprennent à la dure. Incluez le guide d'exploitation et l'article d'aide dans la définition de terminé, et surveillez le taux de liaison et les échecs de recherche des services que vous détenez comme rétroaction. Quand un même article est lié de nombreuses fois, traitez-le comme un rapport de défaut sur le produit, non comme un succès de la documentation.

### Équipes de service et d'exploitation

Les équipes du centre de services et d'exploitation sont les principales productrices et consommatrices de la base de connaissances ; les métriques sont donc surtout à elles d'en faire usage. Travaillez honnêtement la boucle de résolution : chercher d'abord, réutiliser et améliorer, créer quand rien ne convient. Employez le taux de liaison avec un échantillon de pertinence, et lisez les recherches sans résultat comme un backlog. Évitez tout classement d'auteurs ou de relecteurs, car la base de connaissances est un outil partagé et les comptes personnels lui nuisent (voir le sujet 3.1, Métriques du centre de services).

### Direction et gouvernance

Les dirigeants décident si le travail de connaissance reçoit du temps ; ils décident donc de la qualité de la connaissance. Demandez l'échantillon de pertinence et la fraîcheur des articles très utilisés avant de demander le compte d'articles. Résistez aux objectifs sur le taux de liaison ou la création d'articles sans garde-fou, et attendez-vous à entendre quand les chiffres baissent pour de bonnes raisons, comme un ensemble fusionné de doublons. Financez la revue des articles très utilisés et les corrections qui rendent des articles inutiles.

### Clients et utilisateurs

Les utilisateurs rencontrent la connaissance par la recherche, un portail, un agent conversationnel ou la réponse que leur donne un analyste. Ce qu'ils remarquent, c'est si la première réponse est correcte et s'ils doivent se répéter. Leurs propres retours sur les articles, leurs recherches qui ne donnent rien et leurs contacts répétés sont les meilleurs garde-fous de tout ce sujet. Si l'on demande aux utilisateurs de noter des articles, dites-leur ce qu'il advient de leurs retours, et agissez visiblement en conséquence (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple d'ITIL agile

Une compagnie d'assurance de taille moyenne exploite un centre de services informatique interne d'une douzaine d'analystes, qui soutient le personnel de plusieurs bureaux. Le centre partage une base de connaissances avec deux équipes produit qui détiennent l'application de sinistres et le portail de documents. Tous les chiffres de cet exemple sont illustratifs.

La direction a demandé une meilleure résolution au premier contact (voir le sujet 3.1, Métriques du centre de services) et fixe une cible de taux de liaison aux connaissances de 60 pour cent, contre un 38 pour cent illustratif. En six semaines, le tableau de bord montre 64 pour cent. Le responsable du centre de services n'est pas convaincu, car les analystes se plaignent toujours de ne pas trouver de réponses, et une responsable d'équipe produit mentionne que trois des articles qu'elle détient apparaissent sur la plupart des cas clos.

L'équipe mène une revue de détournement et un échantillon de pertinence. Elle lit 30 cas liés, choisis au hasard le mois précédent, et juge si l'article convenait au cas. Dans un décompte illustratif, 11 des 30 liens vont vers un article générique « Comment ouvrir un ticket » ou vers un aperçu général du réseau qui ne traitait pas le problème. Elle découvre aussi que les liens ont été faits dans les quelques secondes suivant la clôture du cas, un schéma qui suggère l'habitude et non l'usage. Le responsable du centre regarde le ratio de réutilisation, qui est en hausse, et la part des cas non liés avec le motif « aucun article n'existait », tombée à presque rien, parce que les analystes choisissent maintenant l'article le plus proche. La lacune de connaissance est devenue invisible.

L'équipe prend trois décisions. D'abord, la cible de taux de liaison est retirée et remplacée par une vue ajustée à la pertinence : le taux de liaison est rapporté à côté de la part échantillonnée de liens pertinents, et le motif de clôture « aucun article n'existait » est rendu facile à choisir et n'est pas traité comme un échec. Ensuite, les recherches sans résultat sont lues chaque mois, et les cinq premières deviennent les tâches d'écriture suivantes, réparties dans le centre. Enfin, les 20 articles les plus liés sont revus pour leur fraîcheur dans le mois, détenus par l'équipe produit concernée, et tout article lié à plus d'un quart des cas d'un service est remis à la gestion des problèmes comme candidat à une correction permanente (voir le sujet 4.1, Métriques de gestion des problèmes).

Deux mois plus tard, le taux de liaison de titre est retombé à un 51 pour cent illustratif, ce qui ressemble à une mauvaise nouvelle. La pertinence échantillonnée est passée de 63 à 85 pour cent en termes illustratifs, le taux de recherches sans résultat a baissé, et un problème répété de connexion au portail de documents a été corrigé à sa cause, ce qui a retiré trois articles. Le responsable demande à la direction de juger le programme sur la pertinence et les contournements retirés, non sur le taux de liaison brut.

## Perspective sectorielle

**Startup.** La connaissance vit dans quelques têtes et dans l'historique de discussion. Écrivez une courte liste de guides d'exploitation pour ce qui casse la nuit, et consignez la correction après chaque incident. Un contrôle mensuel que les principaux guides fonctionnent encore suffit comme mesure.

**Petite entreprise.** Une seule personne est souvent à la fois le centre de services, l'administrateur et le détenteur de la connaissance. Le risque est le facteur camion, puisque la connaissance disparaît si la personne disparaît. Employez un dépôt partagé simple, gardez les articles courts et laissez un prestataire ou un collègue tester les procédures clés. Une relecture régulière des pages les plus utilisées vaut mieux que n'importe quel tableau de bord.

**Grande entreprise.** L'échelle apporte des articles en double et une qualité inégale. Employez des définitions communes du taux de liaison, de la fraîcheur et de la réutilisation, rapportez par service et par équipe, et nommez des responsables pour les articles très utilisés. Évitez de comparer les équipes, car le mélange de services et l'âge de la base diffèrent.

**Gouvernement et secteur public.** Les règles d'archivage, les exigences d'accessibilité et les attentes d'audit peuvent régir la façon dont la connaissance est stockée, revue et retirée. Traitez-les comme des apports de conception : gardez une piste d'approbation pour les articles qui touchent les citoyens, et publiez du contenu accessible. Les retours et les échecs de recherche des citoyens sont particulièrement précieux (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts des métriques de connaissance sont modestes. Les données d'outil existent généralement déjà dans la plateforme ITSM et la base de connaissances. Les principaux coûts sont le temps de définir les mesures, le petit échantillon mensuel qui vérifie la pertinence, le temps de revue des articles très utilisés et la discipline de capturer la connaissance en résolvant les problèmes. Si la plateforme de connaissances manque de données exploitables de liens ou de recherche, le coût de son instrumentation devrait être inclus (voir le sujet 1.5, Sources de données et instrumentation).

Le retour est un schéma, et le livre n'en cite aucun chiffre. Quand les analystes trouvent vite un article correct, la résolution est plus rapide et plus cohérente, le nouveau personnel devient utile plus tôt et les ingénieurs d'astreinte dépendent moins de quelques experts. Quand les utilisateurs trouvent eux-mêmes des réponses, le centre reçoit moins de contacts répétés pour des questions connues. Les métriques aident en montrant où la connaissance manque, est périmée ou n'est pas utilisée, afin que le temps d'écriture, rare, aille aux articles qui comptent.

Le coût total de possession inclut l'entretien. Les articles se dégradent à mesure que les services changent ; le temps de revue est donc un coût continu, et un programme qui l'ignore surestimera le bénéfice. Pour estimer le retour pour votre propre équipe, comparez un échantillon de vos propres cas avant et après, et étiquetez vos hypothèses.

## Antimodèles et pièges

- **Compter les articles ou les consultations comme un succès.** Le volume monte avec l'encombrement et les consultations peuvent signaler de la confusion. Mesurez plutôt l'usage en résolution, la pertinence et les retours.
- **Un objectif de taux de liaison sans contrôle de pertinence.** Les gens attacheront n'importe quel article. Échantillonnez chaque mois les cas liés et rapportez la part pertinente à côté du taux.
- **Classer les auteurs ou les relecteurs.** Les décomptes personnels produisent des modifications minces et des scissions d'articles. Rapportez l'étendue des contributions pour l'équipe et discutez-la comme une question de capacité.
- **Revoir tous les articles selon un seul calendrier fixe.** L'effort va à des pages que personne ne lit. Revoyez selon l'usage et retirez ce qui n'est pas utilisé.
- **Publier des ébauches pour arrêter l'horloge.** Un article rapide et mince fait échouer le délai de publication. Associez-le à l'utilité et au taux de contact de suivi.
- **Ignorer les recherches qui échouent.** Les recherches qui échouent sont le signal le plus clair d'un besoin non satisfait. Lisez-les chaque mois et transformez les principales en travail.
- **Séparer la connaissance du travail.** Un projet de documentation en fin de trimestre produit des pages périmées. Capturez pendant la résolution et dans la définition de terminé.
- **Traiter la base de connaissances comme permanente.** Le contenu se dégrade. Rendez le retrait et la fusion routiniers et reconnus.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Capture et liaison | La connaissance vit dans les têtes et la discussion ; les liens sont rares | Certaines équipes lient des articles aux cas, la pratique varie | Une règle écrite de liaison et de capture ; motifs de clôture consignés | Taux de liaison et échantillon de pertinence revus chaque mois et reliés à l'amélioration | La capture fait partie du flux de travail entre centre, exploitation et équipes produit ; définitions révisées quand elles cessent d'éclairer les décisions |
| Fraîcheur et responsabilité | Pas de responsables ; les articles vieillissent sans être vus | Responsables nommés pour les services clés | Fenêtres de revue fixées, plus courtes pour les articles très utilisés | Fraîcheur des articles très utilisés suivie dans le temps et financée | Responsabilité de revue partagée avec les fournisseurs et les équipes produit ; le retrait est routinier |
| Facilité de recherche et retours | Recherche improvisée ; pas de données de recherche | Un journal de recherche existe mais n'est pas lu | Recherches sans résultat et retours des lecteurs revus selon un rythme fixé | Les échecs de recherche pilotent un backlog et sont associés aux données de contact | Utilisateurs, analystes et agents conversationnels puisent dans une seule source de connaissance ; les retours changent visiblement le contenu |
| Usage dans l'amélioration | Les métriques, s'il y en a, sont des comptes | Les comptes sont montrés à l'équipe | Métriques associées à des garde-fous et montrées d'abord à l'équipe | Les articles très liés alimentent les décisions de gestion des problèmes et d'automatisation | Les backlogs de connaissance, de problèmes et de produit sont gérés ensemble entre équipes |

## Liste de vérification

- [ ] Chaque métrique de connaissance nomme le public qu'elle sert et la décision qu'elle éclaire.
- [ ] Le taux de liaison a une définition écrite, incluant l'horloge, les exclusions et le traitement des incidents majeurs.
- [ ] Un échantillon mensuel vérifie que les articles liés sont pertinents pour les cas.
- [ ] La clôture d'un cas consigne « aucun article n'existait » et « article introuvable » comme motifs distincts.
- [ ] Le délai de publication est rapporté en médiane et en percentile élevé, avec les étapes de brouillon et de publié séparées.
- [ ] Une fenêtre de revue est fixée pour les articles en usage, plus courte pour les plus utilisés.
- [ ] Les principales recherches sans résultat sont lues chaque mois et transformées en éléments de backlog.
- [ ] Les retours des lecteurs sont montrés avec leur taux de réponse, et les commentaires sur les principaux articles sont lus.
- [ ] La contribution est rapportée pour l'équipe seulement, sans listes nominatives.
- [ ] Les articles les plus liés sont revus chaque trimestre comme candidats à des corrections permanentes.
- [ ] Les changements de définition sont consignés avec leurs motifs.

## Prompts d'IA

**Vérifiez si les articles liés conviennent à leurs cas.**

```text
Je mène des revues de connaissances pour [team name], qui soutient [type of
service]. Ci-dessous figurent [number] cas résolus, chacun avec son résumé, ses
notes de résolution, et le titre et le texte de l'article lié. Pour chaque
paire, jugez si l'article convient au cas comme réponse pertinente, réponse
partielle ou lien sans rapport, et donnez une raison en une ligne. Rapportez les
schémas par article et par service. Ne nommez ni ne classez les analystes
individuels. N'inventez pas de faits sur le service. Énumérez vos hypothèses et
tout ce que vous n'avez pas pu juger à partir du texte.

[paste cases and articles with personal data removed]
```

**Transformez les recherches qui échouent en backlog d'écriture.**

```text
Voici les recherches les plus fréquentes dans [knowledge base or portal name] qui
n'ont retourné aucun résultat en [period] : [list of search terms with counts].
Regroupez-les en thèmes. Pour chaque thème, suggérez s'il faut un nouvel
article, un synonyme ou un renommage d'un article existant ([list of related
article titles]), un renvoi vers une autre équipe, ou aucune action. N'inventez
ni articles ni faits sur nos systèmes. Énumérez vos hypothèses et les questions
auxquelles je devrais répondre avant d'écrire quoi que ce soit.
```

**Concevez un ensemble léger de mesures de connaissance.**

```text
Concevez un petit ensemble de mesures de gestion des connaissances pour [team
name], une équipe de [team size] personnes utilisant [ITSM tool] et [knowledge
tool]. Notre objectif principal est [goal, such as faster first contact
resolution or less dependence on experts]. Pour chaque mesure, donnez la
définition, l'horloge ou la frontière, la source de données, le vecteur de
détournement probable et un garde-fou. Ne proposez ni classements individuels,
ni valeurs de référence inventées, ni sources citées. Énumérez vos hypothèses et
les champs de données dont vous auriez besoin et que je n'ai pas mentionnés.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets apparentés et le garde-fou associé quand vous ajoutez une métrique de connaissance à votre tableau de bord.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique de connaissance porte son vecteur de détournement, son garde-fou et ses renvois sous la bonne forme.

## Points clés à retenir

- Mesurez la connaissance au moment de l'usage : liée en résolution, trouvée par la recherche, confirmée par les lecteurs.
- Associez le taux de liaison à un échantillon humain de pertinence, car un lien prouve seulement que quelqu'un a cliqué.
- Revoyez la fraîcheur selon l'usage, en mettant l'effort là où un article faux induirait en erreur le plus de cas.
- Traitez les recherches qui échouent et les articles très liés comme des signaux pour du nouveau contenu, une meilleure dénomination ou une correction permanente.
- Rapportez la contribution pour l'équipe et ne classez jamais les auteurs.
- Moins d'articles, mais meilleurs, indiquent souvent une base plus saine qu'une base plus grande.

## Références et lectures complémentaires

1. Consortium for Service Innovation, *KCS v6 Practices Guide*, first released 2016 and updated since, https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide (check the page for the current version).
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
3. Nonaka, I., and Takeuchi, H., *The Knowledge-Creating Company*, Oxford University Press, 1995.
4. Hansen, M. T., Nohria, N., and Tierney, T., "What's your strategy for managing knowledge?", *Harvard Business Review*, March-April 1999.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Wikipedia, [Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Knowledge base](https://en.wikipedia.org/wiki/Knowledge_base).
10. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
11. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
12. Wikipedia, [Knowledge-centered support](https://en.wikipedia.org/wiki/Knowledge-centered_support).
13. Wikipedia, [Service desk](https://en.wikipedia.org/wiki/Service_desk).
14. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
