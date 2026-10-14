# Les résultats plutôt que la production : choisir ce qu'il faut mesurer

**Une bonne métrique de service ou de livraison décrit un changement dans la vie d'un client ou la santé d'un service ; choisissez donc les mesures en demandant ce qui a changé pour quelqu'un, et traitez les comptages d'activité et de production comme, au plus, des éléments de preuve complémentaires.**

## Résumé et motivation

La plupart des tableaux de bord commencent par ce qui est facile à compter : tickets fermés, changements déployés, récits terminés, appels traités. Ces éléments sont déjà horodatés dans un outil et sous le contrôle de l'équipe. Aucun ne dit si quelqu'un s'en trouve mieux.

Quatre mots aident à garder le cap. L'**activité** est l'effort dépensé : heures travaillées, réunions tenues, appels passés. La **production** est ce que le travail a produit : une version, un ticket résolu, un article publié. Le **résultat** est le changement que cette production a rendu possible pour quelqu'un : un client accomplit une tâche en moitié moins de temps, une clinique ouvre à l'heure, un problème récurrent cesse de revenir. L'**impact** est l'effet à plus long terme sur les objectifs de l'organisation, comme la fidélisation des clients ou un coût de service plus bas. Dans ITIL 4 (l'édition de 2019 du cadre publié par AXELOS, aujourd'hui propriété de PeopleCert), une production est un livrable tangible ou intangible d'une activité, et un résultat est un effet pour une partie prenante rendu possible par une ou plusieurs productions.

[ITIL](https://en.wikipedia.org/wiki/ITIL) ajoute une seconde idée qui sert de critère pour toute métrique : la valeur est [cocréée](https://en.wikipedia.org/wiki/Co-creation) par le fournisseur de service et le consommateur du service, et non livrée de l'un à l'autre. Cela suit la pensée qui sous-tend la [logique dominante du service](https://en.wikipedia.org/wiki/Service-dominant_logic), la vision marketing selon laquelle la valeur naît à l'usage, lorsque le client applique les capacités d'un fournisseur à ses propres objectifs. Une métrique mesurée entièrement du côté du fournisseur ne peut pas prouver la valeur. Une équipe peut fermer chaque ticket et livrer chaque version à temps tandis que les utilisateurs ne trouvent pas leur travail plus facile.

Le point de vue agile arrive au même endroit par un autre chemin. Les principes qui sous-tendent le Manifeste pour le [développement logiciel agile](https://en.wikipedia.org/wiki/Agile_software_development) disent que le logiciel opérationnel est la principale mesure d'avancement, et que la simplicité, l'art de maximiser la quantité de travail non effectué, est essentielle. Ni l'un ni l'autre ne récompense un tas de production plus grand. Tous deux invitent à livrer quelque chose qui fonctionne pour ses utilisateurs et à ne pas construire ce dont personne n'a besoin.

Les métriques de production et d'activité ne sont pas fausses. Elles gèrent le flux, la capacité et le coût, et les sujets suivants s'en servent beaucoup (voir le sujet 2.1, Mesures de flux). L'erreur est de les laisser tenir lieu de valeur. Une [métrique de vanité](https://en.wikipedia.org/wiki/Vanity_metric) est un chiffre facile à rapporter et qui monte presque toujours : nombre total d'utilisateurs inscrits, tickets cumulés traités, fonctions livrées à ce jour. Elle donne à une équipe l'air occupé et ne dit à personne quoi faire ensuite. Le test : ce chiffre pourrait-il monter pendant que la situation du client empire ?

Les métriques de résultat sont plus difficiles. Elles bougent lentement, dépendent de facteurs hors du contrôle de l'équipe et sont bruitées. Un changement apporté au parcours de réinitialisation de mot de passe peut mettre des semaines à apparaître dans le volume de contacts, que touche aussi une campagne marketing. La réponse consiste à choisir les résultats avec soin, à les associer aux mesures de production que l'équipe utilise au quotidien pour se diriger, et à être honnête sur la part du mouvement que l'équipe peut revendiquer.

Un **indicateur avancé** est une mesure qui bouge avant le résultat qui vous importe et sur laquelle on peut agir tôt, comme la part des nouveaux services dotés d'un guide d'exploitation de support testé. Un **indicateur retardé** rapporte le résultat après coup, comme le nombre d'incidents majeurs ou l'attrition de la clientèle. Les économistes emploient la même paire, classant un [indicateur économique](https://en.wikipedia.org/wiki/Economic_indicator) comme avancé, coïncident ou retardé. Les équipes ont besoin des deux : les indicateurs retardés disent si vous aviez raison, et les indicateurs avancés donnent quelque chose sur quoi agir tant qu'il est encore temps. Un indicateur avancé n'est qu'une hypothèse tant que vous n'avez pas vérifié, sur plusieurs périodes, qu'il bouge bien avant le résultat.

Les mesures de résultat sont un remède partiel au détournement (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Une mesure proche de ce que vivent les clients est plus difficile à améliorer sans les aider, et la distance au résultat est l'endroit où vit le détournement. Les cadres qui aident à ce choix sont traités séparément (voir le sujet 1.7, Cadres de mesure).

## Principes clés

- **Partir du résultat et remonter.** Nommez le changement que vous voulez pour un client, un service ou l'organisation, demandez quelle preuve le montrerait, puis quels signes avancés apparaîtraient plus tôt.
- **La valeur est cocréée : incluez donc le côté du consommateur.** Au moins une mesure de chaque ensemble doit venir des personnes qui utilisent le service : leur réussite, leur effort ou leur expérience, plutôt que les seuls enregistrements du fournisseur.
- **Garder la chaîne visible.** Montrez l'activité, la production, le résultat et l'impact comme une chaîne. Les équipes se dirigent sur les productions et les indicateurs avancés, et se jugent sur les résultats.
- **Associer, ne jamais substituer.** Une mesure de résultat explique pourquoi une mesure de production importe, et une mesure de production explique que faire face à une mesure de résultat. Aucune ne fonctionne seule.
- **Préférer les mesures qui peuvent baisser comme monter.** Un chiffre qui ne fait que croître est un comptage, non un signal.
- **Traiter les indicateurs avancés comme des hypothèses.** Vérifiez qu'ils prédisent le résultat, et abandonnez-les quand ce n'est pas le cas.
- **Être honnête sur l'attribution.** Les résultats ont de nombreuses causes. Dites ce que l'équipe influence et ce qu'elle ne fait qu'observer.

## Définitions des métriques

Les cinq métriques ci-dessous sont choisies pour orienter un ensemble de mesures vers les résultats. Ce sont des exemples de la forme à employer, et les sujets suivants définissent les mesures de service et de livraison qui les complètent. Les seuils illustratifs de ce sujet ne sont pas des références de comparaison.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des résultats | Part des métriques rapportées qui sont reliées, dans le registre des métriques, à un résultat écrit pour un client ou un service nommé | métriques avec un lien de résultat écrit / métriques rapportées dans la période. Ne compte que les métriques présentées dans un rapport régulier ; exclut les mesures de la vue de travail tenues par une seule équipe | pourcentage | Registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques) | Mesure et reporting ; amélioration continue | Objectif produit et objectif de livraison | Trimestrielle |
| Taux d'adoption d'une fonction | Part des utilisateurs éligibles qui emploient une capacité nouvelle ou modifiée dans une fenêtre donnée après sa mise en service | utilisateurs éligibles distincts ayant employé la capacité dans les 30 jours suivant la mise en service / utilisateurs éligibles distincts de cette période. L'horloge démarre à la disponibilité générale ; exclut les comptes de test internes et les utilisateurs qui ne pouvaient pas accéder à la capacité | pourcentage | Analytique produit, journaux d'usage du catalogue de services | Conception de service ; gestion des versions | Retours de la revue par les parties prenantes ; mesure de résultat produit | Mensuelle pendant 3 mois après la mise en service, puis trimestrielle |
| Taux de contacts répétés | Part des contacts d'un utilisateur au sujet du même service dans une fenêtre donnée après la clôture d'un contact antérieur | nouveaux contacts du même utilisateur au sujet du même service dans les 14 jours suivant un contact clos / contacts clos dans la période. L'horloge démarre à la clôture ; exclut les contacts ouverts comme suivis planifiés | pourcentage | Historique des contacts et des tickets de l'outil ITSM | Centre de services ; gestion des incidents | Défauts échappés ; définition de terminé | Mensuelle |
| Taux de validation des indicateurs avancés | Part des indicateurs avancés en usage dont le mouvement a précédé celui de leur indicateur retardé associé dans la période de revue | indicateurs avancés dont l'avance sur leur indicateur retardé est confirmée / indicateurs avancés en usage. Jugé par l'équipe lors d'une revue documentée, sur au moins quatre périodes de données ; exclut les indicateurs ayant moins de quatre périodes | pourcentage | Registre des métriques et historique de tendance | Amélioration continue | Actions de rétrospective sur les expériences | Deux fois par an |
| Taux d'achèvement des revues de bénéfices | Part des changements ou améliorations financés dont le résultat visé a été revu au regard de sa mesure après le délai convenu | changements avec une revue de résultat terminée dans les 90 jours suivant la date de revue prévue / changements dont la date de revue est tombée dans la période. Exclut les changements retirés avant leur mise en service | pourcentage | Enregistrement de changement, registre d'amélioration, notes de revue | Amélioration continue ; maîtrise des changements | Revue par les parties prenantes ; revue de l'incrément produit | Trimestrielle |

La couverture des résultats et le taux d'achèvement des revues de bénéfices mesurent la pratique de mesure et sont faciles à satisfaire par de la paperasse. Le taux d'adoption d'une fonction et le taux de contacts répétés sont plus proches du client et sont ceux qui ont le plus de chances de changer une décision.

## Recommandations

### Partir des résultats

**1. Écrivez le résultat comme une phrase sur une personne ou un service.** « Le personnel peut réinitialiser lui-même son mot de passe sans appeler le centre de services » est un résultat. « Déployer le nouveau portail d'identité » est une production. Mettez la phrase en tête de l'entrée de la métrique dans le registre, puis choisissez la mesure. Si vous ne pouvez pas écrire la phrase, vous n'êtes pas prêt à choisir un chiffre.

**2. Tracez la chaîne de l'activité à l'impact.** Pour chaque objectif, esquissez quatre cases : ce que fait l'équipe, ce qu'elle produit, ce qui change pour l'utilisateur et ce que cela change pour l'organisation. Placez chaque métrique candidate dans une case. Un ensemble plein à gauche et vide à droite est le signal qu'il faut chercher des preuves de résultat.

**3. Appliquez le test de cocréation de valeur à chaque métrique.** Demandez : le point de vue de qui sur la valeur ceci montre-t-il, et le point de vue du consommateur apparaît-il quelque part dans l'ensemble ? En termes ITIL, une relation de service a un fournisseur et un consommateur, et la valeur est réalisée dans l'usage du consommateur. Une mesure du temps de réponse tirée de l'horloge du fournisseur a besoin d'une mesure compagne du côté du consommateur, comme le fait que l'utilisateur ait pu poursuivre son travail (voir le sujet 6.2, Accords de niveau d'expérience).

**4. Demandez une décision, non un rapport.** Pour chaque métrique candidate, écrivez la décision que quelqu'un prendrait si elle bougeait. Retirez toute mesure sans décision rattachée. C'est le filtre le plus rapide contre les métriques de vanité, et il empêche un tableau de bord de grossir par défaut.

### Associer productions et résultats

**5. Choisissez une mesure de résultat pour chaque grande mesure de production.** Si vous rapportez des déploiements, associez-les à une mesure de ce que les déploiements ont changé pour le service, comme l'échec des changements ou les incidents visibles par les utilisateurs (voir le sujet 2.8, Métriques DORA). Si vous rapportez des tickets résolus, associez-les aux contacts répétés. La paire doit être sur la même page. Une équipe qui ne voit que la production optimisera la production.

**6. Choisissez des mesures de résultat que l'équipe peut influencer, et nommez celles qu'elle ne fait qu'observer.** Une équipe peut influencer les contacts répétés de son propre service et l'adoption de ses propres fonctions. Elle ne peut qu'observer le chiffre d'affaires de l'entreprise. Les deux ont leur place dans le tableau, mais les objectifs et le travail d'amélioration se rattachent aux mesures influencées. Nommer la différence évite de reprocher des mouvements que l'équipe n'aurait pas pu causer.

**7. Employez les substituts ouvertement.** Beaucoup de résultats ne peuvent pas être mesurés directement. Choisissez un substitut, dites que c'en est un et dites ce qu'il manque. Le taux de contacts répétés est un substitut de « le problème a vraiment été résolu », et une courte enquête ou une lecture des commentaires libres peut vérifier qu'il dit encore la vérité (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

### Construire des paires avancé-retardé

**8. Associez chaque indicateur retardé à au moins un indicateur avancé sur lequel vous pouvez agir.** Les incidents majeurs sont un indicateur retardé, et la part des services dotés de guides de reprise testés peut les précéder. L'indicateur avancé donne à l'équipe quelque chose à faire ce mois-ci. Choisissez des indicateurs avancés auxquels vous croyez pour une raison que vous pouvez écrire, puis mettez cette croyance à l'épreuve.

**9. Validez les indicateurs avancés par un retour en arrière.** Deux fois par an, tracez chaque indicateur avancé face à son partenaire retardé sur au moins quatre périodes et demandez si le mouvement est venu en premier. Là où la relation est faible, changez ou abandonnez l'indicateur avancé.

**10. Utilisez des objectifs de niveau de service là où le résultat a une mesure claire côté utilisateur.** Un indicateur de niveau de service (SLI) bien choisi est un signal avancé du bonheur des utilisateurs, et un objectif de niveau de service (SLO) énonce le niveau requis (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Ils fonctionnent mieux quand l'indicateur est choisi du point de vue de l'utilisateur, non de celui de la machine.

### Garder le choix honnête

**11. Bouclez la boucle avec des revues de résultats.** Quand un changement ou une amélioration est financé, consignez le résultat qu'il doit produire, la mesure et la date à laquelle quelqu'un regardera. Tenez la revue même si la réponse est gênante. Sans revues, le langage des résultats n'est qu'une décoration (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

**12. Gardez les mesures de production dans la vue de travail, et dites à quoi elles servent.** Les mesures de flux, de capacité et de coût sont les instruments de l'équipe, non son tableau de score. Le temps de cycle vous dit où le travail attend (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux). Rapportées vers le haut sans un résultat à côté, elles invitent au détournement.

## Vecteurs de détournement et garde-fous

Aller vers les résultats ne supprime pas le détournement. Cela en change la forme : les résultats peuvent être redéfinis, les substituts peuvent être pilotés et les revues peuvent être sautées.

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Couverture des résultats | Écrire pour chaque métrique une phrase de résultat vague (« améliorer le service ») afin que le lien existe sur le papier | Échantillonner le registre : une phrase doit nommer une personne ou un service et un changement ; vérifier qu'une décision a été prise grâce à la mesure |
| Taux d'adoption d'une fonction | Compter comme adoption un premier usage forcé ou automatique ; réduire le groupe d'utilisateurs éligibles ; rendre la capacité par défaut pour qu'elle soit « utilisée » sans avoir été choisie | Réussite des tâches ou satisfaction des utilisateurs de la capacité ; maintien de l'usage à 30 et 90 jours ; lecture des commentaires libres |
| Taux de contacts répétés | Dire aux utilisateurs de soumettre une nouvelle demande par un autre canal ; clore le contact comme doublon d'un contact sans rapport ; allonger la clôture pour éviter un nouveau contact dans la fenêtre | Contacts par canal pour le même service ; revue par échantillon des notes de clôture ; taux de « problème résolu » déclaré par les utilisateurs |
| Taux de validation des indicateurs avancés | Déclarer valides les indicateurs avancés après un examen informel ; choisir des indicateurs qui bougent trivialement avec le résultat | Compte rendu écrit de la revue avec les données tracées ; inviter quelqu'un d'extérieur à l'équipe à contester un résultat par cycle |
| Taux d'achèvement des revues de bénéfices | Tenir une revue de pure forme, ou fixer le résultat visé après coup pour qu'il soit toujours atteint | Comparer le résultat de la revue avec l'énoncé fait quand le changement a été financé ; suivre la part des revues qui ont conduit à un changement de plan |

Une lecture saine montre des mesures de résultat qui déçoivent parfois, des revues qui mettent parfois fin à un changement et des indicateurs avancés qui sont parfois abandonnés. Un ensemble où chaque résultat est atteint et chaque indicateur avancé confirmé a probablement été réglé pour l'être.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Mesures de production et d'activité | Rapides, peu coûteuses et sous le contrôle de l'équipe ; bonnes pour les décisions de flux et de capacité | Faciles à gonfler ; ne disent rien sur le fait que quelqu'un en ait bénéficié |
| Mesures de résultat | Restent proches de ce que valorisent les clients et l'organisation ; plus difficiles à améliorer sans aider | Lentes, bruitées et influencées par des facteurs hors du contrôle de l'équipe |
| Indicateurs avancés | Donnent une alerte précoce et quelque chose sur quoi agir | Peuvent induire en erreur si le lien avec le résultat est supposé plutôt que testé |
| Indicateurs retardés | Rapportent ce qui s'est vraiment passé | Arrivent trop tard pour changer le résultat de la période |
| Substituts de résultats | Rendent visibles les résultats difficiles à mesurer | Peuvent s'écarter de ce qu'ils représentent et inviter à la substitution |
| Un petit ensemble axé sur les résultats | Facile à retenir et à discuter ; concentre l'effort | Peut manquer un problème extérieur aux résultats choisis |
| Un large ensemble équilibré | Couvre davantage du service | Dilue l'attention ; chaque mesure est moins scrutée |

Gardez un petit nombre de mesures de résultat que tout le groupe peut réciter, appuyez chacune sur les mesures de production et avancées qui l'expliquent, et revoyez l'ensemble quand la stratégie change. Les approches équilibrées associées au [tableau de bord prospectif](https://en.wikipedia.org/wiki/Balanced_scorecard) et aux [objectifs et résultats clés](https://en.wikipedia.org/wiki/Objectives_and_key_results) cherchent toutes deux à relier le travail quotidien aux résultats qui comptent. Elles échouent de la même façon quand les résultats clés deviennent une liste de productions avec un pourcentage à côté.

## Questions à discuter avec votre équipe

**1. Parmi nos cinq métriques les plus en vue, lesquelles peuvent monter alors que nos clients s'en trouvent plus mal ?**
Écrivez les cinq sur un tableau et posez la question à chacune. Un compte de tickets fermés, par exemple, peut monter pendant que les contacts répétés montent aussi. L'animateur doit noter les cas où la réponse est oui, car ce sont les métriques de vanité. Terminez en demandant quelle mesure de résultat se placerait à côté de chacune.

**2. À quoi ressemble une bonne semaine pour un client de ce service, dans ses mots ?**
Demandez à des personnes qui parlent aux clients, et évitez le vocabulaire de l'équipe. Les réponses deviennent des phrases de résultat, et révèlent souvent des choses que personne ne mesure, comme ne pas avoir à expliquer deux fois un problème. Notez trois phrases et demandez lesquelles peuvent être mesurées, ne serait-ce que par substitut.

**3. Lesquels de nos indicateurs avancés avons-nous jamais confrontés au résultat qu'ils sont censés prédire ?**
Choisissez un indicateur et tracez-le face à son partenaire retardé sur les dernières périodes. Demandez ce que vous voyez et quel est votre degré de confiance. Si la relation est faible, discutez de ce qui pourrait le remplacer. Traitez un indicateur abandonné comme un résultat normal de l'apprentissage, non comme un échec.

**4. Où notre équipe s'attribue-t-elle le mérite d'un résultat qu'elle ne fait qu'observer ?**
Regardez les métriques des rapports à la direction. Lesquelles dépendent de facteurs hors du contrôle de l'équipe, comme la saisonnalité, une campagne ou un fournisseur ? Convenez d'une manière simple d'énoncer ce que l'équipe influence et ce qu'elle observe. Cela prépare l'équipe au jour où un résultat bougera pour des raisons qu'elle n'a pas causées.

**5. Qu'avons-nous livré ou changé au cours des deux derniers trimestres, et quelqu'un a-t-il examiné si cela a fonctionné ?**
Listez les changements sur un tableau et marquez ceux qui ont un compte rendu de revue. Pour les autres, demandez quel résultat était attendu et comment on pourrait le savoir maintenant. Résistez à la chasse aux coupables. Le but est de lancer l'habitude, même si les premières revues sont tardives.

**6. Quelles mesures de production devraient retourner dans notre vue de travail ?**
Certaines mesures sont utiles à l'équipe et trompeuses dans un rapport. Demandez lesquelles sont lesquelles, et ce que chacune aurait besoin d'avoir à côté d'elle pour rester dans un rapport de direction. Convenez d'une mesure à déplacer ce trimestre. Déplacer une mesure est un signe de maturité, non un recul de la transparence.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison sont tentées par la production parce que leurs outils la rapportent par défaut. Le remède est de faire de l'adoption et des preuves de résultat une partie de la définition de terminé et de la revue par les parties prenantes. Une fonction que personne n'utilise est une leçon, et le découvrir tôt est un avantage de la pratique agile. Les équipes gardent les mesures de flux dans leur vue de travail et les associent à des mesures d'adoption et d'échec (voir le sujet 2.5, Métriques de prévision et de planification de la livraison).

### Équipes de service et d'exploitation

Les équipes de service sont mesurées sur le traitement : appels pris, tickets fermés, temps de résolution. Cela compte pour la planification et le coût, et dit peu sur le fait que le problème de l'utilisateur ait disparu. Les équipes d'exploitation devraient ajouter les contacts répétés, la récurrence de la même cause et la résolution déclarée par l'utilisateur à côté des mesures de vitesse, et traiter avec méfiance un nombre croissant de tickets faciles (voir le sujet 3.1, Métriques du centre de services). Des indicateurs avancés comme l'usage des articles de connaissance et les guides d'exploitation testés donnent à l'équipe quelque chose sur quoi agir entre les incidents.

### Direction et gouvernance

Ce que les dirigeants demandent à voir apprend à l'organisation ce qui compte. Demandez des résultats, acceptez qu'ils soient plus lents et plus bruités, et financez les revues qui les vérifient. Les instances de gouvernance devraient chercher un ensemble court et stable de mesures de résultat, chacune avec un responsable déclaré et un historique des décisions qu'elle a éclairées (voir le sujet 1.4, Gouvernance et responsabilité des métriques). Un dirigeant qui demande « qu'avons-nous appris ? » obtient de meilleures données que celui qui demande « pourquoi est-ce rouge ? »

### Clients et utilisateurs

Les clients vivent directement les résultats et voient rarement les comptes de production. Ils sont l'épreuve finale de l'ensemble : le service leur permet-il de poursuivre ce pour quoi ils sont venus ? Des enquêtes courtes, des commentaires libres et l'observation de tâches réelles sont de meilleures preuves que n'importe quelle mesure côté fournisseur. Les clients ont aussi un rôle dans la cocréation de valeur, ce qui signifie que leur degré d'information, d'habilitation et d'écoute affecte les résultats (voir le sujet 6.3, Métriques d'adoption des services et de catalogue).

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne de taille moyenne exploite une équipe de plateforme interne qui offre un service de provisionnement d'environnements en libre-service à environ 40 équipes produit, soutenue par un petit centre de services. Tous les chiffres de cet exemple sont illustratifs.

Le rapport mensuel montre 310 demandes traitées (contre 240), un temps médian de traitement de 6 heures et 12 fonctions livrées dans le trimestre. La direction est satisfaite. Le responsable de la plateforme remarque que les contacts vers le centre au sujet du provisionnement ont aussi augmenté, et demande à l'équipe de représenter les productions face au résultat espéré : des équipes produit qui obtiennent un environnement sans attendre ni demander d'aide.

L'exercice de chaîne montre que l'équipe avait mesuré l'activité et la production, et aucun résultat. Elle en ajoute trois. Le premier est le taux de contacts répétés : 22 pour cent des contacts de provisionnement sont suivis d'un autre contact au sujet du même service dans les 14 jours. Le deuxième est le taux d'adoption des trois fonctions les plus récentes, qui s'établit à 9 pour cent, 14 pour cent et 61 pour cent des équipes éligibles après 30 jours. Le troisième, un indicateur avancé, est la part des demandes qui se terminent sans étape humaine, actuellement de 48 pour cent. Elle fait l'hypothèse qu'il devrait faire baisser le taux de contacts répétés.

Elle décide de suspendre deux fonctions prévues qui ressemblent aux deux à faible adoption et de consacrer le trimestre à la cause la plus courante de contacts répétés, un message d'erreur peu clair lorsqu'un quota est dépassé. Elle consigne le résultat visé, un taux de contacts répétés sous 15 pour cent, et fixe une date de revue dans 90 jours.

Le risque de détournement apparaît au deuxième mois. Le taux de contacts répétés tombe à 11 pour cent, ce qui semble merveilleux. Un échantillon de 25 contacts clos montre que le centre de services avait commencé à demander aux utilisateurs d'employer un canal de discussion pour les questions de suivi, et que ce canal n'est pas compté dans l'outil ITSM. L'équipe ajoute les contacts par canal au rapport, intègre les transcriptions de discussion à l'échantillon et constate que le taux combiné est de 17 pour cent. C'est une amélioration réelle, plus petite que la première lecture. Lors de la revue, le responsable rapporte 17 pour cent, note que l'indicateur avancé est passé de 48 à 57 pour cent en phase, et consigne que l'hypothèse a tenu sur deux des quatre périodes nécessaires pour la déclarer validée.

## Perspective sectorielle

**Startup.** Les résultats sont à portée de main : les fondateurs peuvent parler aux clients et voir s'ils restent. Le risque est de ne mesurer que la croissance du nombre d'utilisateurs et de fonctions, qui sont des métriques de vanité tant que la rétention et la réussite des tâches ne sont pas visibles. Choisissez une mesure de résultat que les clients reconnaîtraient et vérifiez-la chaque semaine.

**Petite entreprise.** Les chiffres sont trop petits pour des statistiques ; préférez donc des conversations directes, une poignée de cas suivis et une courte liste de substituts. Méfiez-vous des tableaux de bord d'éditeurs qui rapportent leur propre activité comme si c'était votre résultat.

**Grande entreprise.** L'échelle invite au reporting de production, parce que les productions sont comparables entre de nombreuses équipes et que les résultats ne le sont pas. Résistez à l'imposition d'une définition unique de résultat à des services dissemblables. Convenez d'un petit ensemble de phrases de résultat communes, laissez chaque service choisir ses mesures et tenez le registre à jour.

**Gouvernement et secteur public.** Les obligations légales, les règles de financement et les niveaux de service fixent à l'avance certaines mesures, souvent des productions comme les dossiers traités. Respectez-les, et ajoutez à côté des mesures de résultat pour les citoyens et le personnel, comme le fait qu'une personne ait obtenu l'aide pour laquelle elle est venue. Le reporting public rend les données de résultat honnêtes plus précieuses et plus sensibles ; convenez donc à l'avance de la façon dont les chiffres corrigés seront expliqués (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût du passage vers les résultats est surtout de l'effort et de la patience : écrire des phrases de résultat, ajouter quelques mesures comme une courte enquête ou un événement d'adoption, et tenir des revues de résultats. Le coût d'outillage est modeste, puisque la plupart des substituts peuvent être construits à partir de données déjà collectées. Le coût le plus élevé est le délai, car les données de résultat arrivent lentement et les dirigeants doivent les attendre.

Le retour vient de meilleurs choix sur l'endroit où dépenser. Un travail que personne n'utilise coûte cher, tout comme améliorer une mesure de traitement alors que la cause sous-jacente des contacts répétés reste en place. Le schéma à attendre est moins de fonctions construites puis laissées inutilisées, plus d'attention aux causes récurrentes et un meilleur argumentaire de financement. Ne promettez pas de pourcentage. Mesurez vos propres lignes de base, comme l'adoption des versions récentes et les contacts répétés, et comparez après quelques trimestres (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Compter ce qui est facile.** Les comptes de tickets et de déploiements sont dans tous les outils, ce qui en fait le choix par défaut. Ajoutez au moins une mesure de résultat pour chaque service avant d'ajouter un autre compte de production.
- **Le théâtre des résultats.** Écrire une phrase de résultat pour chaque métrique sans jamais la vérifier. Passez en revue un échantillon du registre et demandez quelle décision chaque mesure a éclairée.
- **Des indicateurs avancés non testés.** Traiter un signal plausible comme une preuve. Tracez-le face au résultat retardé au moins deux fois par an et abandonnez ceux qui n'avancent pas.
- **Des résultats comme objectifs personnels.** Attribuer une mesure de résultat à une seule personne invite au comportement décrit dans le sujet 1.2. Rattachez les résultats aux équipes et aux services.
- **Ne mesurer que le côté du fournisseur.** Un ensemble fait d'horloges et de comptes internes manquera ce que les clients ressentent. Incluez une mesure côté consommateur pour chaque service.
- **Ne jamais revoir.** Financer des changements sur des bénéfices promis et ne jamais les vérifier. Mettez une date de revue sur l'enregistrement de changement lors de son approbation.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Choix des mesures | Comptes disponibles dans les outils | Certaines équipes écrivent des phrases de résultat | Chaque métrique rapportée a un résultat écrit et une décision qu'elle éclaire | Ensembles de résultats et de productions revus ensemble chaque trimestre | Phrases de résultat alignées entre équipes, fournisseurs et clients, et révisées quand la stratégie change |
| Indicateurs avancés et retardés | Seulement des résultats retardés, rapportés tard | Quelques indicateurs avancés choisis à l'intuition | Indicateurs avancés et retardés associés et consignés dans le registre | Indicateurs avancés validés face aux résultats deux fois par an | Indicateurs partagés avec les fournisseurs et les clients ; l'ensemble évolue avec les preuves |
| Revues de résultats | Aucune revue de l'efficacité des changements | Revues occasionnelles après les grands changements | Date de revue consignée pour chaque changement financé | Revues terminées, leurs résultats alimentant le plan suivant | Revues routinières, transversales aux équipes, incluant l'apport des clients |
| Preuves côté consommateur | Anecdotes | Enquête pour certains services | Une mesure côté consommateur pour chaque service | Preuves du consommateur suivies dans le temps et lues avec les données opérationnelles | Les clients aident à définir et à interpréter les mesures de résultat |

## Liste de vérification

- [ ] Chaque service a au moins une phrase de résultat nommant une personne ou un service et un changement.
- [ ] Chaque métrique rapportée est placée sur la chaîne de l'activité à l'impact.
- [ ] Chaque métrique a une décision nommée qu'elle éclaire ; celles qui n'en ont pas sont retirées.
- [ ] Chaque mesure de production d'un rapport a une mesure de résultat à côté d'elle.
- [ ] Chaque service a au moins une mesure côté consommateur.
- [ ] Chaque indicateur retardé a un indicateur avancé, avec une raison écrite du lien.
- [ ] Les indicateurs avancés sont confrontés aux résultats au moins deux fois par an.
- [ ] Les substituts sont étiquetés comme tels, avec ce qu'ils manquent.
- [ ] Chaque changement financé a un résultat visé, une mesure et une date de revue.
- [ ] Les mesures de résultat se rattachent aux équipes et aux services, jamais aux individus.

## Prompts d'IA

**Transformez une métrique de production en ensemble axé sur les résultats.**

```text
Notre équipe est [team name], qui fournit [service or product] à [customers or
users]. Nous rapportons actuellement [list of output or activity metrics]. Nous
voulons aller vers les résultats. Pour chaque métrique, suggérez une phrase de
résultat sur un client ou un service qu'elle pourrait appuyer, et proposez une
mesure de résultat et un indicateur avancé que nous pourrions envisager. Pour
chaque suggestion, dites ce que la mesure manquerait et comment elle pourrait
être détournée. N'inventez ni valeurs de référence ni sources. Énumérez vos
hypothèses et les faits dont vous avez besoin de ma part.
```

**Testez la crédibilité d'un indicateur avancé.**

```text
Nous utilisons [leading indicator] comme indicateur avancé de [lagging outcome
measure]. Voici [number] périodes de données pour les deux, collées ci-dessous,
avec des notes sur tout ce qui a changé pendant cette période : [data and
notes]. Décrivez si l'indicateur avancé semble bouger avant l'indicateur
retardé, et quelles autres explications sont compatibles avec les données.
N'affirmez pas de causalité. Énumérez vos hypothèses, les limites d'un tel
volume de données et les données supplémentaires qui aideraient.
```

**Rédigez une revue de résultat pour un changement récent.**

```text
Nous avons fait ce changement : [description], approuvé le [date], avec le
résultat visé [outcome sentence] et la mesure [measure]. Données actuelles :
[data]. Rédigez un ordre du jour de revue de résultat et une structure de
synthèse courte qui compare le résultat visé avec ce que nous observons,
sépare ce que l'équipe a influencé de ce qu'elle n'a fait qu'observer, et
énumère des questions pour les utilisateurs. Ne jugez pas du succès au-delà de
ce que les données étayent. Énumérez vos hypothèses et les lacunes de données.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet et la mesure de résultat compagne d'une métrique de production que vous êtes sur le point de rapporter.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un nouveau sujet de métrique associe ses mesures de production à des résultats et à des garde-fous.

## Points clés à retenir

- L'activité, la production, le résultat et l'impact sont des choses différentes, et un tableau de bord des deux premiers ne peut pas montrer la valeur.
- Dans ITIL, la valeur est cocréée avec le consommateur ; chaque ensemble a donc besoin d'une mesure venant de son côté.
- Associez les productions aux résultats, et les indicateurs retardés à des indicateurs avancés que vous avez testés.
- Soyez clair sur ce que l'équipe influence et ce qu'elle ne fait qu'observer.
- Passez en revue les changements financés au regard de leurs résultats visés, et laissez les résultats changer le plan.
- Les mesures de résultat réduisent le détournement sans y mettre fin ; chacune a donc encore besoin d'un garde-fou.

## Références et lectures complémentaires

1. Seiden, J., *Outcomes Over Output: Why Customer Behavior Is the Key Metric for Business Success*, Sense & Respond Press, 2019.
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
3. Vargo, S. L., and Lusch, R. F., "Evolving to a New Dominant Logic for Marketing," *Journal of Marketing*, 68(1), 2004.
4. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January to February 1992.
5. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
9. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Co-creation](https://en.wikipedia.org/wiki/Co-creation).
12. Wikipedia, [Service-dominant logic](https://en.wikipedia.org/wiki/Service-dominant_logic).
13. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
14. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
15. Wikipedia, [Economic indicator](https://en.wikipedia.org/wiki/Economic_indicator).
16. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
17. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
