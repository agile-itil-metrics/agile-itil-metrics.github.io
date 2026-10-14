# Métriques d'amélioration continue

**L'amélioration est une habitude de remarquer, d'essayer et de vérifier ; mesurez donc si les idées deviennent des changements, si les changements sont vérifiés quant à leur effet et si les mêmes problèmes reviennent, et gardez le travail entre les mains des personnes qui le font.**

## Résumé et motivation

L'un des principes du Manifeste agile dit qu'à intervalles réguliers l'équipe réfléchit à la manière de devenir plus efficace, puis ajuste son comportement en conséquence. ITIL exprime la même conviction dans ses principes directeurs et sa pratique d'amélioration continue : les services et la manière de les exploiter devraient être améliorés en permanence, par petites étapes, sur la base de preuves. Les deux demandent la même chose, à savoir une habitude permanente d'amélioration et non un programme occasionnel.

La plupart des organisations croient le faire. Beaucoup ont une réunion de type rétrospective qui génère une liste d'actions, un registre d'idées d'amélioration ou un plan annuel d'amélioration. L'échec courant est que la liste s'allonge et que peu de choses se passent. Des actions sont convenues en réunion et oubliées. Des améliorations sont faites et jamais vérifiées, de sorte que personne ne sait si elles ont aidé. Le même problème revient sous un autre nom. Les métriques d'amélioration continue sont la manière de distinguer une organisation qui s'améliore d'une organisation qui ne fait qu'en parler.

Le [processus d'amélioration continue](https://en.wikipedia.org/wiki/Continual_improvement_process) a de profondes racines dans la gestion de la qualité. Le cycle [Planifier-Faire-Vérifier-Agir](https://en.wikipedia.org/wiki/PDCA) (PDCA), associé à W. Edwards Deming et Walter Shewhart, décrit l'amélioration comme une succession de petites expériences : planifier un changement, l'essayer, vérifier le résultat et agir sur ce que l'on apprend. Le [kaizen](https://en.wikipedia.org/wiki/Kaizen) est le terme japonais pour l'amélioration continue des pratiques de travail, avec l'implication de tous. Les deux viennent de la [production allégée](https://en.wikipedia.org/wiki/Lean_manufacturing) et du système de production de Toyota, et les deux sont désormais un vocabulaire standard du travail de service et de logiciel. ITIL 4 offre un modèle d'amélioration continue dont les étapes demandent quelle est la vision, où l'on en est maintenant, où l'on veut aller, comment on y arrivera, d'agir, si l'on y est arrivé et comment garder l'élan. C'est une invitation à la conversation, non une procédure à suivre mécaniquement.

Quelques idées aident.

- **Améliorer la contrainte.** La [théorie des contraintes](https://en.wikipedia.org/wiki/Theory_of_constraints), développée par Eliyahu Goldratt, dit que le débit d'un système est limité par sa partie la plus lente, de sorte que les améliorations ailleurs ajoutent peu. Trouvez la contrainte avec les mesures de flux vues plus tôt dans le livre, et améliorez-la d'abord (voir le sujet 2.3, Travail en cours et théorie des files d'attente).
- **Chercher les causes, non les symptômes.** L'[analyse des causes profondes](https://en.wikipedia.org/wiki/Root_cause_analysis) cherche les causes sous-jacentes d'un problème pour que leur correction en empêche le retour. L'emploi excessif de méthodes simples peut induire en erreur quand les problèmes ont plusieurs causes ; examinez donc les facteurs contributifs.
- **Remettre en question les hypothèses.** L'[apprentissage en double boucle](https://en.wikipedia.org/wiki/Double-loop_learning), terme de Chris Argyris et Donald Schön, va au-delà de la correction de l'action pour examiner les croyances et les règles qui l'ont suscitée. Les équipes qui ne corrigent que les symptômes (apprentissage en boucle simple) tendent à rencontrer de nouveau les mêmes problèmes.
- **L'amélioration exige de la capacité.** Une équipe à la limite de ses forces n'a pas de place pour s'améliorer. Une capacité protégée est une condition préalable, et un rythme qui peut être soutenu fait partie de ce qui rend l'amélioration possible (voir le sujet 9.2, Métriques de satisfaction et de bien-être).

Les métriques d'amélioration invitent à leur propre détournement. Si le nombre d'actions terminées est un objectif, les équipes conviennent d'actions triviales. Si les économies issues des améliorations sont un objectif, les revendications gonflent. Si le nombre d'idées soumises est un objectif, les idées affluent et aucune n'est traitée. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique : mesurez si les améliorations fonctionnent, et non l'air affairé du programme d'amélioration (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **L'amélioration appartient aux personnes qui font le travail.** Elles voient d'abord les problèmes et les corrections possibles.
- **Travailler par petites étapes et vérifier chacune.** De petites expériences réduisent le risque et accélèrent l'apprentissage.
- **Mesurer la suite donnée et l'effet, non l'activité.** Les actions terminées et les effets confirmés comptent plus que les idées produites.
- **Améliorer d'abord la contrainte.** L'effort loin du goulot d'étranglement ajoute peu.
- **Corriger les causes.** Cherchez les facteurs contributifs et remettez en question les hypothèses qui les sous-tendent.
- **Protéger la capacité d'amélioration.** Elle ne viendra pas du temps libre qui n'existe pas.
- **Célébrer l'apprentissage, y compris celui des expériences ratées.** Une idée essayée qui n'a pas fonctionné est de l'information.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de suite donnée aux actions | Part des actions d'amélioration convenues en revue qui ont été achevées à la date convenue | actions achevées à la date / actions échues dans la période | pourcentage | Registre d'amélioration ou backlog de l'équipe | Amélioration continue | Actions de réflexion livrées | Mensuelle |
| Âge du backlog d'amélioration | Âge des éléments d'amélioration ouverts, avec attention aux plus anciens | médiane et 85e percentile de l'âge en jours des éléments ouverts ; âge du plus ancien | jours | Registre d'amélioration | Amélioration continue | Âge du backlog | Mensuelle |
| Taux de vérification des effets | Part des améliorations achevées dont l'effet a été vérifié par rapport à une ligne de base | améliorations achevées avec une vérification avant-après consignée / améliorations achevées | pourcentage | Registre d'amélioration avec champs de ligne de base et de résultat | Amélioration continue ; mesure et rapport | Apprentissage tiré des expériences | Trimestrielle |
| Délai entre l'idée et l'essai | Temps entre le moment où une idée d'amélioration est soulevée et son premier essai dans le travail réel | médiane et 85e percentile des jours entre soulevée et premier essai | jours | Registre d'amélioration | Amélioration continue | Retour rapide sur les changements | Mensuelle |
| Part des idées de première ligne | Part des idées d'amélioration soulevées par les personnes qui font le travail, comptée au niveau de l'équipe | idées soulevées par des membres de l'équipe qui font le travail / idées soulevées | pourcentage | Registre d'amélioration | Amélioration continue | Équipes auto-organisées | Trimestrielle |
| Taux de problèmes répétés | Part des problèmes qui reviennent après une amélioration destinée à en supprimer la cause | problèmes revenant dans une période énoncée après la clôture d'une amélioration liée / améliorations closes avec une cause liée | pourcentage | Enregistrements d'incidents, de problèmes et d'améliorations reliés par la cause | Gestion des problèmes ; amélioration continue | Défaut échappé après une correction | Trimestrielle |
| Part de capacité d'amélioration | Part de la capacité de l'équipe consacrée au travail d'amélioration | capacité ou éléments achevés étiquetés amélioration / capacité totale ou éléments achevés | pourcentage | Types de travail du suivi | Amélioration continue ; gestion de la capacité et de la performance | Temps de réflexion et d'excellence technique | Mensuelle |

Définissez l'« élément d'amélioration » dans le registre et gardez-le distinct du travail ordinaire du backlog et des réparations correctives. L'horloge de suite donnée démarre quand l'action est convenue avec un responsable et une date. Une vérification d'effet exige une ligne de base consignée avant le changement et un indicateur défini, et le résultat peut être « aucun effet » ou « impossible à dire ». Le taux de problèmes répétés dépend d'une cause consignée, et la règle d'appariement est écrite dans le registre. Toutes les mesures décrivent des équipes et le système, non des individus.

## Recommandations

### Rendre l'amélioration visible et détenue

**1. Tenez une liste d'amélioration visible par équipe.** Mettez les éléments d'amélioration là où l'équipe regarde déjà, comme son tableau ou son backlog, et étiquetez-les. Chaque élément a un responsable, un problème énoncé, un effet attendu, un indicateur et une date. Une liste qui vit dans un outil distinct ou un document que personne n'ouvre se dégradera. Montrez les plus anciens éléments pour que la liste ne puisse pas se cacher.

**2. Tenez une réflexion régulière et courte.** À un rythme régulier, l'équipe demande ce qui va bien, ce qui gêne et ce qu'il faut essayer ensuite. Gardez-la courte et précise, et terminez par un petit nombre d'actions dotées de responsables. Si votre équipe choisit un format nommé pour cela, comme une rétrospective, c'est son choix. Le principe est l'habitude régulière.

**3. Convenez de moins d'actions et terminez-les.** Deux ou trois actions menées à bien enseignent plus qu'une douzaine qui ne le sont pas. Vérifiez le taux de suite donnée. Quand les actions glissent de façon répétée, demandez pourquoi : responsabilité floue, absence de capacité ou actions trop grandes. Découpez les grandes en petites étapes.

**4. Protégez la capacité.** Réservez une part de la capacité à l'amélioration et planifiez-la comme tout autre travail (voir le sujet 2.5, Métriques de prévision et de planification de la livraison). Quand l'équipe est surchargée, réduisez l'accueil de nouveau travail plutôt que d'annuler l'amélioration, car l'amélioration est souvent ce qui réduit la surcharge. Suivez la part employée.

### Trouver ce qui compte

**5. Cherchez la contrainte.** Employez les données de flux pour trouver où le travail attend et ce qui limite le débit. Les améliorations à la contrainte élèvent la production de tout le système. Les améliorations ailleurs peuvent ne faire que déplacer le tas de travail. Appliquez la même vue au traitement des incidents, à l'approbation des changements et à l'exécution des demandes.

**6. Employez des preuves pour choisir.** Choisissez les améliorations à partir des données et des personnes les plus proches de la douleur : incidents répétés, longues attentes, reprises, plaintes des utilisateurs, listes d'obstacles. Reliez chaque amélioration à un problème consigné. Cela relie le registre d'amélioration à la gestion des problèmes (voir le sujet 4.1, Métriques de gestion des problèmes).

**7. Cherchez les causes et les facteurs contributifs.** Pour les problèmes récurrents, demandez pourquoi plus d'une fois, et cherchez des conditions autant que des déclencheurs. Méfiez-vous de vous arrêter à la première cause plausible, ou à une personne. Remettez en question les hypothèses : pourquoi travaillons-nous ainsi, et la règle est-elle encore nécessaire ? C'est là que l'apprentissage en double boucle porte ses fruits.

### Essayer petit, puis vérifier

**8. Menez de petites expériences avec une ligne de base.** Énoncez le changement, l'effet attendu et l'indicateur. Consignez la ligne de base avant le changement. Essayez à petite échelle pendant une courte période, puis comparez. Le cycle Planifier-Faire-Vérifier-Agir est un cadre simple. Plus court est le temps entre l'idée et l'essai, plus rapide est l'apprentissage.

**9. Vérifiez l'effet et consignez-le honnêtement.** Après un changement, comparez l'indicateur avec la ligne de base et avec ce qui a changé d'autre. Consignez si l'effet a été vu, non vu ou incertain. Les équipes qui ne trouvent jamais « aucun effet » ne vérifient probablement pas avec soin (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

**10. Gardez ce qui fonctionne et abandonnez ce qui ne fonctionne pas.** Répandez les améliorations qui fonctionnent dans d'autres équipes là où elles conviennent, et retirez les changements qui ont ajouté du coût sans bénéfice. Revisitez les changements plus anciens, car les conditions changent. Les normes devraient évoluer à mesure que l'équipe apprend.

### Garder l'habitude vivante

**11. Rendez sûr le fait de suggérer et d'arrêter.** Les gens soulèvent des idées quand les précédentes ont été entendues et suivies d'effet. Ils se taisent quand les idées s'évanouissent ou apportent du travail supplémentaire à celui qui les propose. Répondez à chaque idée, même si la réponse est « pas maintenant », avec une raison. Permettez aux équipes d'arrêter les améliorations qui ne fonctionnent pas.

**12. Ne faites pas de l'amélioration un objectif.** Ne fixez pas d'objectifs pour le nombre d'idées, le nombre d'actions closes ou les économies revendiquées. Rapportez la suite donnée, les vérifications d'effets, le taux de répétition et quelques histoires. Comparez chaque équipe à son propre passé, et partagez les bonnes idées entre équipes sans les classer.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Taux de suite donnée aux actions | Convenir d'actions triviales ; déplacer les dates d'échéance ; clore sans faire | Revoir la taille et la valeur des actions ; changements de dates consignés ; taux de vérification des effets |
| Âge du backlog d'amélioration | Clore les vieux éléments comme « ne sera pas fait » sans décision ; scinder les éléments pour remettre l'âge à zéro | Consigner les raisons de clôture ; suivre les éléments clos sans action ; revoir les plus anciens |
| Taux de vérification des effets | Consigner une vérification sans ligne de base ; ne vérifier que les réussites | Ligne de base datée d'avant le changement ; inclure les résultats nuls et négatifs |
| Délai entre l'idée et l'essai | Appeler un plan un essai ; essayer des variations triviales | Définir un essai comme un changement dans le travail réel ; regarder l'importance des idées essayées |
| Part des idées de première ligne | Des gestionnaires qui déposent des idées sous des noms d'employés ; quotas obligatoires d'idées | Idées par auteur consignées au niveau de l'équipe ; aucun quota ; demander à l'équipe |
| Taux de problèmes répétés | Consigner des causes différentes pour le même problème ; clore l'enregistrement antérieur sous un autre type | Apparier par cause avec une règle consignée ; revue par quelqu'un d'extérieur à l'équipe |
| Part de capacité d'amélioration | Étiqueter le travail ordinaire comme de l'amélioration ; planifier du temps qui est ensuite employé pour la livraison | Échantillonner les éléments pour leur type ; comparer au temps réellement passé |

Une lecture saine est une liste courte avec des actions qui aboutissent, des idées qui atteignent l'essai en quelques jours ou semaines, des effets vérifiés et parfois décevants, des problèmes répétés qui diminuent et une capacité protégée qui est employée.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Grands programmes d'amélioration | Visibles ; peuvent s'attaquer à de gros problèmes | Lents ; déconnectés du travail quotidien |
| Petites expériences continues | Apprentissage rapide, faible risque | Peuvent manquer des problèmes structurels |
| Équipe d'amélioration centrale | Compétence et cohérence | Éloignée du travail ; les idées stagnent |
| Amélioration détenue par l'équipe | Pertinente et motivée | Qualité variable ; exige du soutien |
| Programmes d'idées avec récompenses | Génèrent du volume | Quotas et détournement ; faible qualité |
| Sélection fondée sur les preuves | Se concentre sur les vrais problèmes | Exige des données et du temps |
| Vérifications formelles des effets | Apprentissage honnête | Effort ; peuvent paraître bureaucratiques si lourdes |
| Aucune vérification | Rapide | Aucun apprentissage sur ce qui fonctionne |

La réponse en prose est de garder l'amélioration près des équipes, en petites expériences avec des vérifications d'effets légères, soutenues par quelques personnes qui aident pour les données et la méthode, et par des dirigeants qui protègent la capacité et écoutent les résultats.

## Questions à discuter avec votre équipe

**1. Quelle amélioration avons-nous convenue lors de notre dernière revue, et a-t-elle eu lieu ?**
Regardez les actions. Pour chacune, demandez si elle a été achevée, abandonnée ou oubliée, et pourquoi. L'animateur doit noter les raisons. Convenez du nombre d'actions que l'équipe peut réellement terminer, et réduisez la prochaine liste à ce nombre.

**2. Quel changement récent savons-nous avoir aidé, et comment le savons-nous ?**
Choisissez un changement récent et cherchez la ligne de base et le résultat. S'il n'y en a pas, discutez de la manière de vérifier la prochaine fois. Décidez d'un indicateur simple pour la prochaine expérience.

**3. Qu'est-ce qui revient sans cesse malgré le nombre de fois où nous le corrigeons ?**
Listez les problèmes récurrents. Pour l'un d'eux, demandez pourquoi il revient et quelle hypothèse sous-tend l'approche actuelle. Considérez si la correction traite un symptôme. Choisissez un problème récurrent à examiner de plus près.

**4. Où le travail attend-il le plus longtemps, et quelle est la contrainte ?**
Employez les données de flux. Demandez si les améliorations sur lesquelles l'équipe travaille touchent la contrainte. Sinon, discutez de l'opportunité de changer de priorité.

**5. Quelle part de notre semaine va à l'amélioration, et qu'est-ce qui la protège ?**
Comparez le plan avec la réalité. Discutez de ce qui prend le temps. Convenez d'une règle pour protéger une petite part, et de ce qu'il faut couper si l'équipe est surchargée.

**6. Qu'est-il advenu de la dernière idée que quelqu'un a suggérée, et comment l'a-t-il appris ?**
Retracez une idée. A-t-elle reçu une réponse, a-t-elle été essayée ou perdue ? Discutez de la façon de s'assurer que chaque idée reçoit une réponse et une raison.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison sont la principale source d'idées d'amélioration et les meilleurs juges de leur efficacité. Elles devraient tenir une liste visible, terminer quelques actions par cycle, vérifier les effets et partager ce qu'elles apprennent. Elles ont besoin d'une capacité protégée et de dirigeants qui répondent.

### Équipes de service et d'exploitation

Les équipes d'exploitation voient chaque jour les incidents répétés, les approbations lentes et les tâches répétitives manuelles. Elles devraient relier les améliorations aux problèmes consignés, suivre les problèmes répétés et se ménager du temps pour les corrections qui réduisent leur propre charge. Leurs retours montrent si les améliorations atteignent l'utilisateur.

### Direction et gouvernance

Les dirigeants créent les conditions : capacité protégée, sécurité pour suggérer et pour arrêter, et attention aux résultats. Ils devraient demander la suite donnée et les vérifications d'effets, accepter les constats honnêtes d'« aucun effet », éviter les quotas et financer les améliorations qui demandent un investissement. La gouvernance devrait regarder le registre d'amélioration entre équipes pour y trouver des schémas qui appellent une action structurelle.

### Clients et utilisateurs

Les utilisateurs gagnent à des services qui s'améliorent sans cesse, et ils sont une riche source d'idées. On devrait les interroger, leur dire ce qui a changé et les inviter à vérifier l'effet. Des plaintes répétées sur le même problème signalent que l'amélioration n'atteint pas la cause.

## En pratique : un exemple d'ITIL agile

Le groupe des services numériques d'une administration fiscale nationale exploite un portail de déclaration, un système de paiements et une plateforme de centre de contact avec huit équipes. Chaque équipe tient une liste d'amélioration, et le groupe rapporte chaque trimestre le nombre d'améliorations achevées. Les chiffres ci-dessous sont illustratifs.

La responsable de l'amélioration des services remarque que le chiffre rapporté monte alors que les mêmes points douloureux persistent. Elle passe les listes en revue. Dans l'ensemble du groupe, 212 éléments d'amélioration sont ouverts, avec un âge médian de 7 mois et le plus ancien à 26 mois. Parmi les actions convenues dans les revues du dernier trimestre, 38 pour cent ont été achevées à leur date. Sur les 64 améliorations achevées l'an dernier, seules 9 avaient une ligne de base et un résultat consignés, soit un taux de vérification des effets de 14 pour cent, et 3 de ces 9 n'ont montré aucun effet. Les problèmes répétés sont courants : sur 25 incidents liés à des améliorations destinées à en supprimer la cause, 11 sont revenus dans les six mois, soit un taux de répétition de 44 pour cent. Le travail d'amélioration prend environ 4 pour cent de la capacité.

Le groupe convient de quatre changements avec les équipes. Chaque équipe réduit sa liste aux éléments qu'elle peut traiter dans les deux prochains mois et énonce pourquoi elle met de côté ou clôt le reste. Les équipes conviennent de pas plus de trois actions à la fois, avec des responsables nommés. Pour chaque amélioration, une ligne de base et un indicateur sont consignés avant le changement, et le résultat est consigné après, y compris « aucun effet ». Une revue trimestrielle regarde les problèmes récurrents entre équipes et en choisit deux pour une analyse de cause plus profonde, les équipes du centre de contact et des paiements enquêtant ensemble sur une cause partagée. Chaque équipe réserve 10 pour cent de la capacité à l'amélioration, protégée par une règle selon laquelle l'annulation exige l'accord du responsable d'équipe et une entrée au journal. Le rapport aux dirigeants passe du nombre d'améliorations achevées à la suite donnée, aux vérifications d'effets et aux problèmes répétés.

Après deux trimestres, les éléments ouverts tombent à 74 avec un âge médian de 2 mois. La suite donnée monte à 81 pour cent, le taux de vérification des effets à 70 pour cent, 9 des 36 améliorations vérifiées ne montrant aucun effet et étant abandonnées. Le taux de problèmes répétés tombe à 20 pour cent, et le délai entre l'idée et l'essai a une médiane de 9 jours. Le sous-directeur demande un objectif de 100 améliorations achevées par trimestre. La responsable de l'amélioration des services explique que le décompte est la raison pour laquelle les chiffres précédents induisaient en erreur, et propose de suivre la suite donnée, l'effet et le taux de répétition. La décision est consignée, et la demande d'une équipe de mener une expérience de quatre semaines sur son processus d'approbation est approuvée.

## Perspective sectorielle

**Startup.** L'amélioration se fait constamment et de façon informelle. Tenez une courte liste, écrivez les effets attendus et vérifiez-les, et protégez une petite tranche de temps. Évitez les processus lourds, et guettez l'évincement total de l'amélioration par la croissance.

**Petite entreprise.** Une ou deux personnes font tout, et l'amélioration entre en concurrence avec la lutte contre les incendies. Choisissez un problème récurrent par trimestre, corrigez sa cause et vérifiez l'effet. Demandez aux utilisateurs ce qui les agace et agissez sur une chose.

**Grande entreprise.** L'échelle rend l'amélioration inégale et les idées difficiles à partager. Fournissez un format de registre commun et un coaching léger, laissez les équipes détenir leurs listes et employez un forum interéquipes pour répandre ce qui fonctionne et s'attaquer aux contraintes partagées. Évitez les quotas centraux.

**Gouvernement et secteur public.** L'amélioration peut être contrainte par les marchés publics, la législation et les chaînes d'approbation, et elle est scrutée publiquement. Documentez les expériences et leurs résultats, associez les utilisateurs au choix et à la vérification des améliorations, et rapportez honnêtement les effets, y compris ceux qui n'ont pas fonctionné. Cherchez les améliorations qui retirent un fardeau aux citoyens (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont la capacité protégée, qui est le coût principal, l'effort pour consigner les lignes de base et les résultats, et un peu de coaching ou d'animation. Les outils peuvent être aussi simples que le tableau existant de l'équipe.

Les retours sont moins de problèmes répétés, moins de tâches répétitives, des attentes plus courtes et un meilleur moral dans les équipes qui voient leurs idées devenir des changements. Bâtissez le dossier à partir de vos propres données : le coût des incidents récurrents et la part supprimée par les améliorations, le temps économisé par les améliorations aux effets vérifiés et le coût des améliorations faites qui n'ont pas fonctionné, que la vérification empêche désormais de répéter. Évitez de citer des rendements publiés de programmes d'amélioration à moins de pouvoir retracer leur source et leur méthode. Comptez aussi le coût d'opportunité de la capacité (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Compter les améliorations achevées.** Les équipes conviennent de changements triviaux. Mesurez la suite donnée et l'effet.
- **Quotas d'idées.** Ils génèrent du volume et du bruit. Répondez aux idées qui viennent.
- **Pas de lignes de base.** Personne ne sait si quelque chose a aidé. Consignez l'avant et l'après.
- **Ne consigner que les réussites.** L'apprentissage tiré de l'échec est perdu. Consignez les résultats nuls.
- **Longues listes sans élagage.** La liste perd sa crédibilité. Réduisez à ce que l'équipe fera.
- **Amélioration sur le temps libre.** Il n'y en a pas. Protégez la capacité.
- **Corriger les symptômes.** Le problème revient. Demandez pourquoi plus d'une fois, et remettez en question les hypothèses.
- **Amélioration par une équipe distante.** Les idées stagnent. Gardez-la auprès des personnes qui font le travail.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Habitude et responsabilité | L'amélioration est occasionnelle | La réflexion a lieu ; les actions se perdent souvent | Liste d'équipe visible avec responsables ; un petit nombre d'actions terminées | Suite donnée et délai idée-essai gérés ; capacité protégée | L'amélioration est routinière et partagée entre équipes, fournisseurs et utilisateurs |
| Preuves et effet | Opinions | Quelques mesures après les changements | Ligne de base et résultat consignés pour chaque amélioration | Les vérifications d'effets incluent les résultats nuls ; problèmes répétés suivis par cause | L'apprentissage au niveau du portefeuille guide où s'améliorer ensuite, avec les partenaires |
| Profondeur | Corrections de symptômes | Quelques analyses de cause | Analyse de cause pour les problèmes récurrents | Contraintes identifiées à partir des données de flux ; hypothèses remises en question | Améliorations systémiques tout au long de la chaîne de valeur, avec gouvernance partagée |

## Liste de vérification

- [ ] Chaque équipe a une liste d'amélioration visible avec responsables, effets attendus et dates.
- [ ] Une réflexion régulière et courte se termine par un petit nombre d'actions détenues.
- [ ] La suite donnée aux actions et l'âge des plus anciens éléments sont revus chaque mois.
- [ ] La capacité d'amélioration est planifiée, protégée et suivie.
- [ ] Les améliorations sont reliées à des problèmes consignés ou à des preuves.
- [ ] Une ligne de base et un indicateur sont consignés avant chaque changement.
- [ ] Les effets sont vérifiés et consignés, y compris l'absence d'effet.
- [ ] Les problèmes répétés sont suivis par cause après les améliorations.
- [ ] Chaque idée reçoit une réponse avec une raison.
- [ ] Il n'y a ni quotas ni objectifs pour les idées, les actions ou les économies.

## Prompts d'IA

**Choisissez des améliorations à partir de preuves.**

```text
Voici nos problèmes et obstacles récurrents avec des décomptes approximatifs et
l'impact : [paste]. Voici nos données de flux sur les endroits où le travail
attend : [paste]. Suggérez lesquelles de deux ou trois améliorations sont les
plus susceptibles de compter, pourquoi, et quelles preuves le confirmeraient ou
le contrediraient. Recommandez une petite expérience pour chacune, avec une
ligne de base et un indicateur. N'inventez pas de chiffres. Énumérez vos
hypothèses.
```

**Concevez une petite expérience.**

```text
Nous voulons essayer [change] pour traiter [problem] dans [team and process].
Concevez une petite expérience : l'effet attendu, la ligne de base à consigner
maintenant, l'indicateur et la manière de le mesurer, la période d'essai, la
manière de savoir si d'autres changements ont brouillé le résultat et ce que
nous ferons s'il n'y a aucun effet. Gardez-la légère. Énumérez vos hypothèses et
vos risques.
```

**Revoyez une liste d'amélioration.**

```text
Voici notre liste d'amélioration avec l'âge, le responsable et l'effet attendu
de chaque élément : [paste]. Repérez les éléments trop vagues, trop grands ou
périmés, suggérez une liste plus courte que l'équipe pourrait terminer en deux
mois et proposez une note expliquant les éléments que nous mettons de côté et
pourquoi. Ne jugez pas d'individus. Énumérez vos hypothèses.
```

**Analysez un problème récurrent.**

```text
Problème : [describe]. Corrections passées et moments de retour : [paste].
Suggérez des facteurs contributifs au-delà de la première cause plausible, des
hypothèses à remettre en question (apprentissage en double boucle) et quelques
moyens de tester chaque hypothèse à peu de frais. Ne supposez pas une cause
profonde unique. Énumérez vos hypothèses et vos questions pour l'équipe.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique d'amélioration.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique d'amélioration mesure la suite donnée et l'effet, avec son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Tenez une liste d'amélioration visible par équipe, avec quelques actions détenues à la fois, et terminez-les.
- Consignez une ligne de base avant chaque changement, vérifiez l'effet ensuite et consignez les résultats nuls.
- Suivez la suite donnée, les vérifications d'effets, les problèmes répétés et l'âge des plus anciens éléments.
- Améliorez d'abord la contrainte, et cherchez les causes et les hypothèses qui les sous-tendent.
- Protégez la capacité d'amélioration dans un rythme soutenable.
- Ne fixez pas de quotas pour les idées, les actions ou les économies.

## Références et lectures complémentaires

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Continual Improvement*, TSO, 2020.
2. Deming, W. E., *Out of the Crisis*, MIT Center for Advanced Engineering Study, 1982 (MIT Press edition, 2000).
3. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
4. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
5. Argyris, C., "Teaching smart people how to learn," *Harvard Business Review*, 69(3), 1991.
6. Rother, M., *Toyota Kata: Managing People for Improvement, Adaptiveness, and Superior Results*, McGraw-Hill, 2009.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
9. Wikipedia, [PDCA](https://en.wikipedia.org/wiki/PDCA).
10. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
11. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
12. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Double-loop learning](https://en.wikipedia.org/wiki/Double-loop_learning).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
