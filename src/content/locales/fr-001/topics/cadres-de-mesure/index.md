# Cadres de mesure

**Un cadre de mesure est une façon de décider quels chiffres méritent une place sur la page, et les meilleurs partent tous d'un objectif et d'une question ; choisissez donc le cadre le plus léger qui garde chaque métrique reliée à une décision.**

## Résumé et motivation

Une équipe qui veut mesurer son travail se heurte vite à un problème : il existe des milliers de chiffres possibles, et aucune règle pour choisir entre eux. Un cadre de mesure fournit la règle. Il nomme un point de départ (un objectif, une stratégie, une poignée de conditions critiques) et décrit comment passer de ce point de départ à un petit ensemble de mesures que les gens liront et sur lesquelles ils agiront. Les cadres diffèrent par leur vocabulaire, mais ils partagent un but : garder chaque chiffre relié à une raison d'être.

Ce sujet couvre cinq idées que l'on trouve dans presque toutes les organisations qui exploitent des services. La première est l'approche Goal-Question-Metric (GQM, objectif-question-métrique), développée par le chercheur en génie logiciel [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili) et ses collègues. Elle part d'un objectif, pose les questions qui montreraient s'il est atteint, et ne choisit les métriques qu'ensuite. La deuxième est celle des [objectifs et résultats clés](https://en.wikipedia.org/wiki/OKR) (OKR), une méthode de définition d'objectifs popularisée chez Intel par Andrew Grove puis chez Google par John Doerr. Un objectif dit où une équipe veut aller, et une poignée de résultats clés disent comment elle saura qu'elle est arrivée. La troisième est le [tableau de bord prospectif](https://en.wikipedia.org/wiki/Balanced_scorecard) (balanced scorecard), introduit par Robert Kaplan et David Norton en 1992, qui demande aux organisations de regarder ensemble les résultats financiers, les clients, les processus internes et l'apprentissage et la croissance, pour qu'aucune vue ne domine.

Les quatrième et cinquième idées sont plus anciennes et plus simples. Un [facteur critique de succès](https://en.wikipedia.org/wiki/Critical_success_factor) (CSF) est une condition qui doit être vraie pour qu'un objectif soit atteint, et un [indicateur clé de performance](https://en.wikipedia.org/wiki/Key_performance_indicator) (KPI) est une mesure de la solidité de cette condition. ITIL, le cadre de gestion des services informatiques (ITSM) publié par Axelos puis PeopleCert, emploie exactement cette paire. Dans ITIL 4 (la version largement utilisée en octobre 2026), les recommandations sur la mesure et le reporting et sur l'amélioration continue disent aux praticiens de définir des CSF pour un service ou une pratique, puis de choisir des KPI qui montrent l'avancement au regard de ceux-ci. L'approche plus large d'[ITIL](https://en.wikipedia.org/wiki/ITIL) est résumée ici, non reproduite.

Les points de vue agile et ITIL se rencontrent utilement dans ce domaine. La pratique agile favorise de courts cycles d'apprentissage : une équipe énonce une hypothèse, essaie quelque chose, inspecte le résultat et ajuste. La pratique ITIL favorise des services définis, des niveaux de service convenus et un processus géré d'amélioration. Un cadre comme GQM convient à l'habitude agile de demander ce que l'équipe veut apprendre. Un tableau de bord prospectif convient au besoin d'ITIL de montrer aux dirigeants un tableau équilibré de la santé du service. Les OKR se situent entre les deux, car ils sont revus en cycles courts tout en étant rédigés dans le langage des résultats que comprennent les instances de gouvernance.

Trois termes reviennent dans ce sujet. Un **objectif** est un énoncé d'un résultat visé pour un public nommé. Une **question** est quelque chose qu'il faudrait savoir pour dire si l'objectif est atteint. Une **métrique** est une manière définie de compter ou de chronométrer quelque chose qui aide à répondre à une question. Les cadres diffèrent dans leur traitement du troisième terme, mais tous insistent pour qu'il vienne en dernier, après l'objectif et la question. Cet ordre est la meilleure protection contre l'échec décrit par la loi de Goodhart (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques), où un chiffre remplace le but qu'il devait servir.

Aucun cadre ne corrige un mauvais choix d'objectif, et aucun ne supprime le besoin de garde-fous. Traitez un cadre comme un échafaudage pour une conversation, et attendez-vous à le changer quand le travail change. Les KPI en particulier peuvent devenir des [métriques de vanité](https://en.wikipedia.org/wiki/Vanity_metric), des comptes qui ne font que monter et n'éclairent jamais une décision, comme le total des tickets traités. Les raisons plus larges de mesurer sont exposées ailleurs (voir le sujet 1.1, Pourquoi mesurer l'ITIL agile).

### Comment les cadres diffèrent

Les cadres répondent à des questions légèrement différentes, et les mélanger est courant. Servez-vous du tableau ci-dessous comme d'une carte.

| Cadre | Point de départ | Production typique | Meilleur usage | Horizon typique |
| --- | --- | --- | --- | --- |
| Goal-Question-Metric | Un objectif précis pour un produit, un processus ou un service | Un arbre d'objectifs, de questions et de métriques | Concevoir un programme de mesure pour une équipe ou un service | De semaines à mois |
| OKR | Un objectif ambitieux pour la période suivante | Quelques objectifs, chacun avec des résultats clés mesurables | Aligner les équipes sur des résultats et concentrer l'effort | Trimestre |
| Tableau de bord prospectif | La stratégie d'une organisation | Objectifs et mesures dans quatre perspectives | Montrer aux dirigeants une vue équilibrée et relier la stratégie aux opérations | Année |
| CSF et KPI | Un service, une pratique ou un objectif | Quelques conditions qui doivent tenir, chacune avec des indicateurs | Exploiter une pratique ITIL définie et rapporter sa santé | Continu, revu régulièrement |

## Principes clés

- **Partir de l'objectif, puis de la question, puis de la métrique.** Une métrique choisie en premier n'a aucun moyen d'être jugée utile.
- **Rendre explicites le public et la décision.** Chaque objectif nomme qui en profite, et chaque métrique nomme qui agira sur elle.
- **Garder l'ensemble petit.** Quelques mesures lues et dignes de confiance valent mieux qu'une longue liste parcourue en diagonale.
- **Équilibrer la vue.** Associez la vitesse à la qualité, le coût à l'expérience et la production à court terme à l'apprentissage à long terme, pour qu'aucun cadre ne récompense l'un aux dépens d'un autre.
- **Traiter les objectifs chiffrés comme des hypothèses.** Un objectif et ses chiffres sont un pari qui peut être faux ; revoyez-les donc selon un calendrier et changez-les avec un motif consigné.
- **Utiliser les cadres pour décrire des équipes et des services, jamais pour classer des personnes.** Les tableaux de bord prospectifs, les résultats clés et les KPI appartiennent à une équipe ou à un service.
- **Combiner les cadres à dessein.** Dites quel cadre détient quelle décision, pour que le même chiffre ne soit pas défini de trois façons.

## Définitions des métriques

Les métriques ci-dessous mesurent la santé d'un cadre en usage, non la santé d'un service. Elles montrent si les objectifs et les métriques sont encore reliés, et elles s'appliquent quel que soit le cadre choisi par une équipe. Les comptages se font par équipe ou service, jamais par personne.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Traçabilité des objectifs | Part des métriques rapportées qui remontent à un objectif et une question écrits | métriques avec un objectif et une question consignés / métriques rapportées | pourcentage | Registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques) | Mesure et reporting ; amélioration continue | Objectif de livraison ; objectif produit | Trimestrielle |
| Distribution des scores des résultats clés | Dispersion des scores de fin de période des résultats clés, montrée comme la part de chaque tranche | résultats clés dans chaque tranche de score (par exemple 0,0 à 0,3, 0,4 à 0,6, 0,7 à 1,0) / résultats clés notés dans la période ; exclut les résultats clés abandonnés avec un motif consigné | pourcentage par tranche | Outil de suivi des OKR ou document d'équipe | Amélioration continue ; gestion des niveaux de service | Planification trimestrielle ; revue | Trimestrielle |
| Couverture des perspectives | Part des quatre perspectives du tableau de bord prospectif qui ont au moins une mesure avec une valeur actuelle | perspectives avec une mesure rapportée dans la dernière période / quatre | pourcentage | Tableau de bord prospectif ou tableau de bord | Mesure et reporting ; gouvernance du système de valeur du service | Revue par les parties prenantes (vues client et apprentissage) | Trimestrielle |
| Ancienneté de la revue des indicateurs | Temps écoulé depuis la dernière revue de la définition et de la cible de chaque KPI | date de revue moins date de la dernière revue ; l'horloge démarre à la dernière revue consignée et s'arrête à la date de rapport ; rapportez la médiane et la plus ancienne | jours | Journal des changements du registre des métriques | Amélioration continue ; mesure et reporting | Actions de rétrospective | Trimestrielle |
| Couverture CSF-KPI | Part des facteurs critiques de succès ayant au moins un KPI actuellement rapporté | CSF avec un KPI actuel / CSF définis pour le service ou la pratique | pourcentage | Documentation de la pratique ou du service ; registre des métriques | L'approche CSF et KPI des guides de pratiques ITIL | Définition de terminé ; accords de travail | Trimestrielle |

La traçabilité des objectifs ne compte une métrique comme tracée que si l'objectif et la question sont tous deux écrits et si le public est nommé ; un objectif seul ne suffit pas. La distribution des scores des résultats clés doit se lire comme une dispersion, non comme une moyenne, car une moyenne cache une équipe qui a tout sous-estimé et une équipe qui a tout manqué. L'ancienneté de la revue des indicateurs exclut les métriques retirées dans la période.

## Recommandations

### Choisir et combiner les cadres

**1. Choisissez le plus petit cadre qui fait le travail.** Une équipe de service avec un seul problème d'amélioration a rarement besoin d'un tableau de bord prospectif complet. GQM suffit souvent, car il a un point d'arrêt clair : un arbre d'un objectif, de quelques questions et de quelques métriques. N'ajoutez de la structure que lorsqu'une décision l'exige.

**2. Écrivez les objectifs en trois parties : but, sujet et point de vue.** Les objectifs GQM sont traditionnellement formulés comme l'amélioration d'une qualité donnée d'un sujet donné d'un point de vue donné, par exemple améliorer la clarté des mises à jour d'incident pour les personnes qui dépendent du centre de services. La structure oblige à dire qui en profite. Si un objectif n'a pas de point de vue, c'est probablement un slogan.

**3. Posez des questions auxquelles une personne pourrait répondre par une courte histoire.** « En combien de temps les utilisateurs reçoivent-ils une réponse après avoir signalé un problème ? » est une bonne question, car on peut imaginer une réponse et la preuve qui la soutient. « Quelle est notre performance ? » n'en est pas une. Visez de trois à cinq questions par objectif, et attendez-vous à ce que certaines trouvent leur réponse dans des entretiens ou des échantillons plutôt que dans un chiffre.

**4. Choisissez les métriques en dernier, et choisissez-en plus d'une.** Pour chaque question, nommez les métriques candidates, la source de données et le vecteur de détournement (voir le sujet 1.5, Sources de données et instrumentation). Incluez au moins une métrique en tension avec les autres, comme le temps de réponse à côté du taux de réouverture. Si une question n'a pas de métrique réalisable, dites-le et prévoyez une vérification qualitative.

**5. Décidez quel cadre détient quelle décision.** Un arrangement courant consiste à laisser le tableau de bord prospectif ou un équivalent porter les quelques mesures que revoient les dirigeants, les OKR porter les améliorations que l'équipe a choisies ce trimestre, et les CSF et KPI décrire la santé courante d'une pratique. Écrivez cet arrangement dans le registre des métriques pour que chaque chiffre ait une seule définition et un seul responsable.

### Bien utiliser les OKR

**6. Écrivez les objectifs comme des résultats, et les résultats clés comme des preuves.** Un objectif tel que « Les utilisateurs voient leurs problèmes résolus sans avoir à nous relancer » est un résultat. Un résultat clé tel que « le temps médian avant une première mise à jour utile passe de [valeur actuelle] à [valeur cible] » est une preuve. Les résultats clés qui se lisent comme des tâches (« lancer un nouveau portail ») sont des activités, non des résultats. Si vous ne pouvez pas dire ce qui changerait pour un utilisateur, le résultat clé n'est pas terminé.

**7. Gardez les OKR au niveau de l'équipe et du service.** Les fixer pour des individus tend à les transformer en listes de tâches et en entrées d'évaluation de performance, et invite au détournement que prédit la loi de Goodhart. Laissez une équipe écrire ses propres résultats clés en toute transparence, et laissez les équipes voir ceux des autres. Évitez les cascades où chaque niveau doit reformuler le niveau supérieur.

**8. Traitez le score comme une conversation, non comme une note.** Les équipes qui font d'un score parfait l'objectif écrivent des résultats clés timides. Une distribution des scores groupée en haut suggère une sous-estimation, et une distribution groupée en bas suggère que les cibles étaient fantaisistes. Revoyez la dispersion chaque trimestre, et demandez ce que l'équipe a appris de chaque manque.

### Bien utiliser tableaux de bord prospectifs, CSF et KPI

**9. Définissez les CSF avant les KPI.** Un facteur critique de succès est un énoncé de ce qui doit être vrai, par exemple « les utilisateurs peuvent trouver et utiliser le bon article de libre-service ». Un KPI montre alors si c'est vrai. Commencer par le KPI invite à compter ce qui est facile à compter. Demandez pour chaque CSF : « si cela cessait d'être vrai, en combien de temps le remarquerions-nous, et à partir de quoi ? » La réponse est le KPI.

**10. Utilisez les perspectives du tableau de bord prospectif pour éviter une vue unilatérale.** Les quatre perspectives classiques sont financière, client, processus internes, et apprentissage et croissance. Les organisations de services les rebaptisent souvent, par exemple coût, expérience utilisateur, santé opérationnelle et capacité. Ce qui compte est que chaque perspective ait au moins une mesure avec une valeur actuelle, et que la baisse de l'une soit lue à côté des autres (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

**11. Reliez la stratégie aux mesures par une carte simple.** Une [carte stratégique](https://en.wikipedia.org/wiki/Strategy_map) trace des flèches de la capacité au processus, au client et aux résultats financiers. Elle est utile pour la conversation et médiocre comme calculateur. Dessinez-la, discutez les flèches, puis choisissez quelques mesures. N'essayez pas de rendre le schéma quantitativement exact.

**12. Revoyez les cadres selon un calendrier.** Fixez une revue trimestrielle où l'équipe se demande, pour chaque objectif, résultat clé et KPI, s'il importe encore et s'il pousse encore les gens vers la bonne action. Retirez ce qui ne sert plus, et consignez le motif. Les métriques qui survivent à leurs objectifs deviennent des métriques de vanité.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Traçabilité des objectifs | Écrire un objectif et une question après que la métrique existe déjà, pour que le dossier paraisse complet ; objectifs vagues qui justifient n'importe quelle métrique | Échantillonner cinq entrées chaque trimestre et demander si la question aurait pu mener à une autre métrique ; vérifier que le public et la décision sont nommés |
| Distribution des scores des résultats clés | Écrire des résultats clés faciles pour que les scores se groupent près de 1,0 ; noter généreusement après coup ; abandonner les résultats clés qui vont mal sans consigner pourquoi | Compte des résultats clés abandonnés avec leurs motifs ; comparer les résultats clés avec les résultats de la période précédente ; revoir avec la direction l'ambition médiane |
| Couverture des perspectives | Ajouter une mesure symbolique à une perspective pour qu'elle compte comme couverte ; choisir des mesures qui ne peuvent pas bouger | Vérifier que chaque mesure de perspective a changé de valeur au cours de l'année et qu'une décision écrite lui est rattachée |
| Ancienneté de la revue des indicateurs | Consigner une revue sans lire l'indicateur ; ne changer que la date | Exiger un résultat écrit (conservé, changé, retiré) à chaque revue, et échantillonner le journal |
| Couverture CSF-KPI | Attribuer un KPI sans rapport avec le CSF pour atteindre la couverture complète ; choisir un KPI incapable de révéler un échec | Demander pour chaque paire quelle lecture montrerait que le CSF est en échec ; chercher les KPI qui n'ont jamais été rouges |

Une lecture saine est celle où les objectifs changent quand le monde change, où quelques résultats clés sont manqués pour des raisons déclarées et où le nombre de métriques rapportées baisse ou reste stable plutôt que de croître. Si tout est vert, si les scores se groupent en haut et si personne ne peut nommer une métrique retirée cette année, le cadre est devenu une décoration.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Goal-Question-Metric | Relie chaque métrique à une raison ; facile à expliquer ; fonctionne à l'échelle d'une équipe | Demande une séance animée ; peut devenir un exercice sur papier ; dit peu de choses sur la priorité entre objectifs |
| OKR | Concentre un trimestre sur quelques résultats ; visible entre équipes ; convient aux cycles de planification courts | Facile d'écrire des résultats clés comme des tâches ; les scores peuvent être détournés ; les OKR individuels se confondent avec l'évaluation de performance |
| Tableau de bord prospectif | Donne aux dirigeants une vue équilibrée ; relie la stratégie aux opérations | Lourd à entretenir ; les perspectives peuvent devenir des cases à remplir ; lent à refléter le changement |
| CSF et KPI | Familiers dans la pratique ITIL ; bien adaptés au reporting d'un service en exploitation | Dérivent facilement vers des KPI de vanité ; les indicateurs se périment sans revue |
| Aucun cadre | Léger et rapide pour une très petite équipe | Les métriques s'accumulent sans raison ; les débats sur ce qu'il faut mesurer se répètent |
| Plusieurs cadres ensemble | Chaque décision reçoit l'outil qui convient | Définitions en double ; confusion sur le chiffre qui fait autorité |

Choisissez le poids du cadre en fonction des enjeux. Un petit service interne a besoin d'un objectif, de trois questions et de quelques métriques tenues sur une page. Un service fourni sous contrat peut exiger des KPI définis au niveau d'un accord de niveau de service (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

## Questions à discuter avec votre équipe

**1. À quel objectif sert chacune de nos métriques rapportées, et qui remarquerait si nous cessions de la rapporter ?**
Listez les métriques sur un tableau et écrivez l'objectif à côté de chacune. Là où l'objectif manque, demandez qui a demandé la métrique et pourquoi. Certaines se révéleront héritées d'un projet antérieur et pourront être retirées. L'animateur doit traiter une métrique sans objectif comme une découverte normale, non comme un échec.

**2. Si nous ne pouvions répondre qu'à trois questions sur notre service, lesquelles seraient-elles ?**
Cela force un classement des questions avant les métriques. Laissez chaque personne en écrire trois, puis regroupez-les. Comparez le regroupement avec le tableau de bord actuel de l'équipe. Les écarts entre les deux sont généralement le produit le plus utile de la séance.

**3. Lesquels de nos résultats clés décrivent un résultat pour les utilisateurs, et lesquels décrivent un travail que nous prévoyons de faire ?**
Lisez chaque résultat clé à voix haute et demandez si un utilisateur le remarquerait s'il était atteint. Si la réponse est non, réécrivez-le comme un résultat ou déplacez-le dans le plan. L'animateur peut préciser que les tâches ne posent pas de problème, mais qu'elles ont leur place dans un backlog. Terminez en convenant d'un résultat clé à réécrire ce trimestre.

**4. Où nos quatre perspectives de tableau de bord divergent-elles, et que cela nous dit-il ?**
Demandez au groupe de chercher une période récente où une perspective s'est améliorée pendant qu'une autre empirait, comme un coût qui baisse tandis que l'expérience chute. Discutez de la cause et de la question de savoir si quelqu'un l'avait vu venir. Cela installe l'habitude de lire les mesures ensemble. Notez toute perspective sans mesure, et décidez d'en ajouter une ou de dire clairement qu'elle est hors périmètre.

**5. Pour chaque facteur critique de succès, quelle lecture nous dirait qu'il est en échec ?**
Choisissez deux CSF et nommez le KPI, puis demandez quelle valeur déclencherait une conversation. Si l'équipe ne sait pas le dire, le KPI ne fait pas son travail. Cherchez les KPI qui n'ont jamais changé de couleur, ce qui signale généralement un seuil trop lâche. L'animateur doit demander quel serait le vecteur de détournement du KPI.

**6. Quel cadre devrait détenir quelle décision, et où définissons-nous aujourd'hui le même chiffre deux fois ?**
Suivez une métrique, comme le temps de résolution des incidents, dans tous les rapports où elle apparaît. Comparez les définitions. Les différences d'horloges ou d'exclusions sont courantes et expliquent souvent les querelles entre équipes. Convenez d'un responsable et d'une définition, et consignez-les dans le registre.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison rencontrent les cadres surtout sous forme d'OKR et, avec de la chance, de GQM. Une équipe tire le plus de valeur quand elle écrit ses propres objectifs et résultats clés, reliés à ce dont ses utilisateurs ont besoin, et quand elle sépare les mesures de travail de celles que voient les dirigeants. Une équipe devrait se méfier des résultats clés qui récompensent la production, comme les points de récit ou les versions, car ils invitent aux comportements que les cadres devaient prévenir (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

### Équipes de service et d'exploitation

Les équipes d'exploitation rencontrent les cadres surtout sous forme de CSF et de KPI au sein des pratiques ITIL, plus les cibles de niveau de service convenues avec les clients. Elles gagnent à définir le CSF en langage clair avant de choisir le KPI, à rapporter des percentiles pour les mesures de temps et à garder les mesures de fiabilité comme les indicateurs et objectifs de niveau de service à côté de l'expérience des utilisateurs (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Elles devraient aussi résister à la tentation de conserver des KPI fixés il y a des années et qui ne se rapportent plus à l'usage du service.

### Direction et gouvernance

Les dirigeants choisissent les cadres, généralement en demandant un tableau de bord prospectif ou des OKR, et ce qu'ils font des chiffres décide du comportement des cadres. Un dirigeant qui punit un résultat clé manqué apprend aux équipes à en écrire de faciles. Un dirigeant qui demande ce que l'équipe a appris leur apprend à en écrire d'honnêtes. Les instances de gouvernance devraient attendre un registre des métriques, un petit nombre de mesures rapportées et une revue régulière de l'efficacité du cadre lui-même (voir le sujet 11.4, Modèle de maturité des programmes de métriques).

### Clients et utilisateurs

Les clients et les utilisateurs ne voient que rarement le cadre, seulement ses effets. Un cadre bien conçu se manifeste par des services qui s'améliorent comme ils l'ont demandé et par un reporting honnête sur ce qui ne s'est pas amélioré. Un cadre médiocre se manifeste par des rapports verts qui ne correspondent pas à l'expérience. Incluez un point de vue utilisateur dans chaque objectif, et laissez les retours des utilisateurs figurer dans la perspective client du tableau de bord prospectif à côté des chiffres opérationnels (voir le sujet 6.2, Accords de niveau d'expérience).

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne de taille moyenne exploite une plateforme d'assistance à la clientèle et un portail de libre-service avec plusieurs équipes produit et un petit groupe d'exploitation des services. Tous les chiffres sont illustratifs.

La direction demande un tableau de bord prospectif et, séparément, des OKR trimestriels. En un trimestre l'équipe en est à 31 mesures rapportées, et personne ne peut dire pourquoi la moitié d'entre elles existent. Le responsable du service anime une séance d'une demi-journée en GQM sur un seul objectif : « Améliorer la clarté de l'aide pour les clients qui ne peuvent pas finaliser un paiement, du point de vue du client. »

La séance produit quatre questions. Les clients trouvent-ils le bon article d'aide ? Ont-ils besoin de contacter l'assistance après l'avoir lu ? Combien de temps faut-il pour résoudre un problème de paiement lorsqu'ils contactent l'assistance ? Ont-ils le sentiment que la réponse était claire ? Sur les 31 mesures, neuf correspondent à ces questions. Trois nouvelles sont nécessaires : le succès de la recherche d'articles, le taux de contact après consultation d'un article et une enquête à une question après la résolution. Les 22 autres sont marquées pour retrait, avec l'accord de leur responsable.

L'OKR du trimestre est écrit comme un résultat. L'objectif est « Les clients résolvent leurs problèmes de paiement sans avoir à nous relancer ». Les trois résultats clés sont le temps médian et le 90e percentile jusqu'à la résolution, le taux de contact après consultation d'un article et le résultat de l'enquête sur la clarté. Le tableau de bord prospectif garde la perspective client pointée vers les mêmes mesures, de sorte qu'il y a une définition, non deux.

À mi-trimestre, un risque de détournement apparaît. Le taux de contact après consultation d'un article chute brutalement, ce qui ressemble à un succès. Un relecteur échantillonne 20 sessions et constate qu'une refonte a déplacé le lien « nous contacter » trois écrans plus loin. Moins de personnes atteignent l'assistance, et l'enquête montre des scores de clarté plus bas. L'équipe ajoute l'abandon de recherche et les commentaires de l'enquête comme garde-fous et rétablit le lien.

À la fin du trimestre, les scores des résultats clés sont de 0,6, 0,8 et 0,5, que l'équipe présente tels quels. La direction demande ce que l'équipe a appris, non pourquoi les scores n'étaient pas plus élevés. La décision, consignée dans le journal des décisions, est de garder l'objectif pour un deuxième trimestre, de remplacer le taux de contact par la part des clients qui résolvent le problème dès la première visite et de retirer six mesures de plus du tableau de bord prospectif.

## Perspective sectorielle

**Startup.** Une startup a généralement besoin d'un objectif, de trois questions et d'une poignée de métriques, tenus sur une page. Les OKR sont courants et fonctionnent bien quand ils sont écrits par l'équipe qui fera le travail. Résistez à l'ajout d'un tableau de bord prospectif tant que des investisseurs ou des clients ne l'exigent pas.

**Petite entreprise.** Les ressources sont minces ; choisissez donc un cadre et employez-le légèrement. Des CSF et des KPI écrits pour les deux ou trois choses que l'entreprise ne peut pas se permettre de rater suffisent souvent. Préférez les retours directs des clients à une notation élaborée.

**Grande entreprise.** Plusieurs cadres coexistent généralement, ce qui fait de la responsabilité des définitions le principal défi. Tenez un registre, désignez quel cadre porte quel chiffre et menez une revue annuelle de l'ensemble de l'arrangement. Méfiez-vous des cascades qui forcent chaque équipe à reformuler avec ses propres mots les objectifs de l'entreprise.

**Gouvernement et secteur public.** Le reporting imposé et les niveaux de service contractuels jouent le rôle de KPI fixes. Prenez-les comme donnés, et employez GQM ou les OKR pour le travail d'amélioration autour d'eux. La responsabilité publique relève les enjeux d'un chiffre trompeur ; publiez donc les définitions et soyez ouvert sur les changements (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût d'un cadre est surtout du temps : une séance animée pour concevoir les mesures, une courte revue trimestrielle et l'entretien d'un registre. Des logiciels pour les OKR ou les tableaux de bord prospectifs existent, mais un document ou un tableur suffit souvent à petite échelle. Le coût le plus élevé est l'attention de la direction, car un cadre que les dirigeants n'utilisent pas devient du reporting pour le reporting.

Le retour vient de mesures moins nombreuses et meilleures. Les équipes qui peuvent dire pourquoi chaque chiffre existe passent moins de temps à produire des rapports que personne ne lit, se disputent moins sur les définitions et remarquent plus tôt qu'une mesure a cessé d'éclairer les décisions. Plutôt que de citer un chiffre, mesurez vos propres lignes de base : le nombre de métriques rapportées, la part ayant un objectif consigné et le temps passé à préparer les rapports récurrents, avant et après l'adoption du cadre. Un traitement plus complet du retour sur investissement figure ailleurs (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Des métriques avant les objectifs.** Partir des données dont on dispose produit un tableau de bord de ce qui est facile à compter. Écrivez d'abord l'objectif et la question, puis voyez quelles données conviennent.
- **Des OKR comme listes de tâches.** Des résultats clés qui nomment des activités donnent à chaque trimestre l'air occupé et ne disent rien des résultats. Réécrivez chacun comme une preuve qu'un utilisateur remarquerait.
- **Des OKR et des tableaux de bord prospectifs comme objectifs individuels.** Ils invitent au détournement et découragent l'entraide entre personnes. Gardez-les au niveau de l'équipe et du service.
- **Un tableau de bord prospectif aux perspectives vides ou symboliques.** Remplir chaque case de quelque chose n'est pas voir l'ensemble. Exigez une valeur actuelle et une décision pour chacune.
- **Des KPI qui ne changent jamais.** Si un indicateur est vert depuis des années, son seuil est probablement faux ou il ne mesure rien qui puisse échouer. Demandez quelle lecture montrerait un problème, puis réinitialisez-le.
- **Des cadres empilés sans responsabilité.** Trois cadres qui définissent la même mesure de trois façons créent des querelles. Nommez un responsable et une définition unique.
- **Récompenser le score.** Si un score d'OKR parfait vaut des éloges ou une prime, les équipes écriront des résultats clés faciles. Récompensez l'apprentissage honnête et les bonnes questions.
- **Le cadre comme cérémonie.** Une journée d'ateliers qui produit une affiche plastifiée ne change rien. Gardez la production dans le registre et revoyez-la selon un calendrier.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Objectifs et questions | Métriques choisies parce que les données existent | Certaines équipes écrivent des objectifs avant les métriques | Un format commun d'objectif et de question ; chaque métrique rapportée remonte à l'un d'eux | La traçabilité est revue et les lacunes mènent à un travail financé | Objectifs coécrits avec les clients et les fournisseurs et révisés quand les conditions changent |
| Usage des cadres | Ad hoc ; aucun cadre déclaré | Les équipes adoptent des cadres différents avec des vocabulaires différents | Un arrangement écrit dit quel cadre détient quelle décision | Les résultats des cadres sont revus, et les parties inutilisées abandonnées | Cadres alignés entre équipes et fournisseurs avec un seul ensemble de définitions |
| Indicateurs et notation | KPI fixés une fois et jamais revus | Certains KPI ont des responsables et des seuils | KPI et résultats clés ont des responsables, des définitions et des garde-fous | Scores et indicateurs suivis dans le temps et examinés chaque trimestre pour le détournement | Indicateurs retirés et remplacés couramment, avec des changements liés aux résultats |
| Usage dans les décisions | Rapports produits puis ignorés | Les dirigeants demandent des chiffres quand quelque chose tourne mal | Les revues consignent les décisions que les chiffres ont influencées | Les questions d'apprentissage sont la norme ; les cibles manquées sont discutées sans reproche | La planification de l'amélioration entre équipes utilise les mêmes objectifs et mesures partagés |

## Liste de vérification

- [ ] Chaque métrique rapportée remonte à un objectif écrit, une question et un public nommé.
- [ ] Un registre des métriques consigne quel cadre détient chaque métrique et sa définition unique.
- [ ] Les objectifs sont écrits avec un but, un sujet et un point de vue.
- [ ] Chaque résultat clé décrit un résultat que quelqu'un remarquerait, non une tâche.
- [ ] Les OKR, les mesures du tableau de bord prospectif et les KPI appartiennent à des équipes ou à des services, non à des individus.
- [ ] Chaque facteur critique de succès a au moins un KPI actuel et une lecture indiquée qui montrerait l'échec.
- [ ] Chaque perspective du tableau de bord prospectif a une mesure avec une valeur actuelle.
- [ ] Chaque métrique a un vecteur de détournement et un garde-fou nommés.
- [ ] Une revue trimestrielle demande si chaque objectif, résultat clé et KPI importe encore.
- [ ] Au moins une métrique ou un indicateur a été retiré ou repensé au cours de l'année écoulée, avec le motif consigné.

## Prompts d'IA

**Transformez un objectif en questions et en métriques candidates.**

```text
Notre équipe est [team name], qui exploite [type of service or delivery work]
pour [audience]. Notre objectif est : [goal stated as purpose, subject, and
viewpoint]. En utilisant l'approche Goal-Question-Metric, proposez de trois à
cinq questions qui montreraient si nous atteignons cet objectif. Pour chaque
question, suggérez des métriques candidates que nous pourrions définir, le type
de source de données dont nous aurions besoin, le vecteur de détournement
probable et un garde-fou. N'inventez ni valeurs de référence ni statistiques.
Énumérez vos hypothèses et tout ce que vous n'avez pas pu déterminer à partir de
ce que je vous ai donné.
```

**Passez en revue des brouillons d'OKR.**

```text
Voici nos brouillons d'objectifs et de résultats clés pour [period] : [paste
OKRs]. Notre équipe est [team name] et nos utilisateurs sont [audience]. Examinez
chaque résultat clé et dites-moi s'il décrit un résultat ou une activité, s'il
pourrait être atteint sans aider les utilisateurs et quel garde-fou le
montrerait. Suggérez des réécritures si nécessaire, en utilisant des
[placeholders] pour tous les chiffres que nous devons fournir nous-mêmes.
N'inventez ni cibles ni valeurs de référence. Énumérez vos hypothèses et les
questions auxquelles je dois répondre.
```

**Associez les facteurs critiques de succès à des KPI.**

```text
Pour la pratique ITIL [practice name] de notre organisation, qui sert
[audience], voici les facteurs critiques de succès que nous avons rédigés : [list
CSFs]. Proposez pour chacun des KPI qui pourraient être collectés à partir de
[data sources]. Pour chaque KPI, indiquez où l'horloge démarre et s'arrête s'il
s'agit d'une mesure de temps, quelle lecture montrerait que le facteur est en
échec et comment il pourrait être détourné. N'énoncez ni valeurs de référence
ni affirmations de conformité. Énumérez vos hypothèses.
```

**Auditez l'équilibre d'un tableau de bord prospectif.**

```text
Notre tableau de bord prospectif a ces mesures, regroupées par perspective :
[paste measures by perspective]. Nous sommes [type of organization]. Repérez les
perspectives minces, les mesures qui semblent faire double emploi et les mesures
qui pourraient bouger d'une façon qui cache un problème dans une autre
perspective. Suggérez des garde-fous et des mesures à retirer. N'inventez ni
chiffres ni sources. Énumérez vos hypothèses et ce que vous n'avez pas pu juger
à partir des données que je vous ai données.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver quel sujet détient une métrique et son garde-fou associé avant de la placer dans un cadre.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique fondée sur un cadre porte sa définition, son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Un cadre décide quelles métriques méritent une place, et la règle commune est de partir d'un objectif et d'une question, puis de choisir la métrique.
- Goal-Question-Metric convient pour concevoir des mesures pour une équipe, les OKR pour concentrer un trimestre, les tableaux de bord prospectifs pour des vues équilibrées de direction, et les CSF avec les KPI pour exploiter une pratique ITIL.
- Employez le cadre le plus léger qui fonctionne, et dites lequel détient quel chiffre.
- Tout cadre peut être détourné ; associez donc chaque métrique à un garde-fou et revoyez l'ensemble selon un calendrier.
- Gardez les cadres au niveau de l'équipe et du service, jamais comme objectifs individuels.
- Retirez les objectifs, résultats clés et indicateurs qui n'éclairent plus les décisions.

## Références et lectures complémentaires

1. Basili, V. R., Caldiera, G., and Rombach, H. D., "The Goal Question Metric Approach," in *Encyclopedia of Software Engineering*, Wiley, 1994.
2. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January-February 1992.
3. Kaplan, R. S., and Norton, D. P., *The Balanced Scorecard: Translating Strategy into Action*, Harvard Business School Press, 1996.
4. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
5. Grove, A. S., *High Output Management*, Random House, 1983.
6. Rockart, J. F., "Chief Executives Define Their Own Data Needs," *Harvard Business Review*, March-April 1979.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
9. Axelos, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
10. Wikipedia, [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili).
11. Wikipedia, [OKR](https://en.wikipedia.org/wiki/OKR).
12. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
13. Wikipedia, [Critical success factor](https://en.wikipedia.org/wiki/Critical_success_factor).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
17. Wikipedia, [Strategy map](https://en.wikipedia.org/wiki/Strategy_map).
