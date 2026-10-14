# Une feuille de route d'adoption progressive

**Partez de là où vous êtes, apportez quelque chose d'utile à une équipe dès le premier mois, et faites croître le programme par petites étapes dont chacune gagne le droit à la suivante.**

## Résumé et motivation

La plupart des conseils sur les métriques décrivent un état final : un ensemble complet de mesures, un stock de données propre, un tableau de bord pour chaque public, une culture de la preuve. Peu d'organisations y arrivent par un plan. Elles y arrivent, quand elles y arrivent, par une série de petites étapes utiles, dont chacune s'est payée avant que la suivante commence. Ce sujet offre une feuille de route dans cet esprit : les 30 premiers jours, les 60 suivants et 90 de plus, qui font ensemble environ 180 jours. Les durées sont une forme approximative et non une promesse. Une petite équipe peut aller plus vite, et une grande ou prudente plus lentement.

La logique est la même logique de livraison continue que le reste du livre recommande pour les services. Livrer tôt une tranche mince et fonctionnelle. La placer devant de vrais utilisateurs. Apprendre de ce qu'ils en font. Étendre ce qui a aidé et abandonner ce qui n'a pas aidé. Un programme de métriques qui passe six mois à concevoir et lance un tableau de bord complet devant un public surpris répète la vieille erreur de la grosse mise en production : beaucoup d'effort, un retour tardif et une forte chance que le résultat convienne mal. L'idée de [produit minimum viable](https://en.wikipedia.org/wiki/Minimum_viable_product), la plus petite version de quelque chose qui apporte de la valeur et génère de l'apprentissage, s'applique à un programme autant qu'à un produit.

Les buts agiles façonnent la feuille de route de plusieurs façons. L'implication continue des parties prenantes signifie que les premières semaines sont passées avec les personnes qui emploieront les chiffres et seront mesurées par eux, non dans une arrière-salle. L'amélioration continue signifie que le plan lui-même est revu et changé à mesure que le programme apprend, dans l'esprit du [kaizen](https://en.wikipedia.org/wiki/Kaizen), la pratique de l'amélioration petite et régulière par tous. L'évolution permanente signifie qu'aucune liste de mesures n'est définitive. Un rythme soutenable signifie que la feuille de route demande une part modeste du temps d'une équipe, et que le programme n'ajoute aucun fardeau de rapport qui dépasse son aide. Et bâtir autour d'individus motivés signifie commencer par des volontaires et par les questions qui leur tiennent à cœur.

La feuille de route respecte les autres sujets de cette partie. Elle suppose les règles de base de confiance du sujet sur le déploiement (voir le sujet 11.3, Déployer les métriques sans semer la peur), elle emploie les principes de tableau de bord (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service), elle garde l'outillage mince jusqu'à ce que la valeur soit prouvée (voir le sujet 11.2, Panorama des outils) et elle suit les progrès avec le profil de maturité du programme (voir le sujet 11.4, Modèle de maturité des programmes de métriques).

Trois idées aident à ancrer le travail initial. D'abord, partir d'une ligne de base. Un [graphique de suivi](https://en.wikipedia.org/wiki/Run_chart) de quelques mois de données existantes montre où en sont les choses et donne aux changements ultérieurs quelque chose à quoi se comparer. Ensuite, vérifier la [qualité des données](https://en.wikipedia.org/wiki/Data_quality) au départ, car les améliorations initiales les plus précieuses viennent souvent de la correction de la manière dont le travail est consigné et non d'un graphique quelconque. Enfin, rendre les résultats visibles : un [radiateur d'information](https://en.wikipedia.org/wiki/Information_radiator), un affichage qui montre l'information d'un coup d'œil sans que personne demande, aide une équipe à voir ses propres données et à lancer des conversations. Les premières étapes prennent d'ordinaire la forme d'un [projet pilote](https://en.wikipedia.org/wiki/Pilot_project) avec des participants volontaires, suivi de la diffusion de ce qui a fonctionné comme [conduite du changement](https://en.wikipedia.org/wiki/Change_management) dans l'organisation plus large (voir le sujet 9.6, Métriques de changement organisationnel et d'adoption).

Aucune feuille de route ne convient à toutes les organisations. Le plan ci-dessous est un point de départ à adapter par les personnes qui le mèneront.

## Principes clés

- **Partir de là où l'on est.** Employez les données, outils et habitudes que vous avez. N'attendez pas une nouvelle plateforme.
- **Mener un projet pilote avec des volontaires.** Une à trois équipes volontaires, travaillant sur des questions qui leur tiennent à cœur.
- **Apporter de la valeur dès le premier mois.** Quelque chose qui aide une équipe, non un rapport pour la direction.
- **Une tranche mince à la fois.** Une source, une vue, une poignée de mesures, puis étendre.
- **Écrire tôt les promesses.** Une courte charte avant que le premier chiffre soit partagé.
- **Revoir et ajuster.** À la fin de chaque étape, vérifiez ce qui a aidé, ce qui a nui et ce qu'il faut changer.
- **Arrêter des choses.** Retirez les mesures et rapports que personne n'emploie à mesure que les nouveaux arrivent.
- **Ne pas sauter la confiance.** Avancer vite sur l'outillage en laissant la confiance derrière produit de la distorsion.

## Définitions des métriques

Les mesures ci-dessous suivent la progression de l'adoption elle-même. Elles sont destinées à l'équipe du programme et aux commanditaires, et se lisent comme des signaux, non comme des objectifs. Elles évitent les décomptes de tableaux de bord ou de rapports, qui récompenseraient l'activité.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Délai jusqu'au premier résultat utile | Temps écoulé entre le début du programme et la première mesure qu'une équipe pilote dit lui avoir permis de faire un changement | jours entre le lancement et le premier usage utile confirmé par l'équipe | jours | Journal du programme ; confirmation de l'équipe | Amélioration continue | Livraison précoce et continue de valeur | Une fois, puis par nouvelle équipe |
| Équipes employant activement les mesures | Part des équipes invitées qui ont employé leurs mesures lors d'une revue dans la période, selon leur propre déclaration | équipes ayant employé des mesures lors d'une revue / équipes invitées | pourcentage | Confirmation de l'équipe ; notes de revue | Conduite du changement organisationnel | Implication continue des parties prenantes | Mensuelle |
| Améliorations reliées aux mesures | Nombre de changements que des équipes ont faits et qu'elles attribuent, avec des raisons, à ce qu'une mesure a montré | nombre de changements rapportés par les équipes avec un lien énoncé à une mesure | nombre | Registre d'amélioration | Amélioration continue | Expériences éclairées par les preuves | Trimestrielle |
| Mesures et rapports retirés | Mesures ou rapports arrêtés parce qu'ils ont cessé d'éclairer des décisions | nombre retiré par trimestre | nombre | Journal des modifications du catalogue | Amélioration continue | Évolution permanente | Trimestrielle |
| Couverture des lignes de base | Part des mesures convenues dotées d'une ligne de base consignée d'au moins quelques mois | mesures avec une ligne de base / mesures convenues | pourcentage | Catalogue de métriques | Gestion des niveaux de service ; amélioration continue | Les preuves plutôt que l'opinion | Trimestrielle |
| Part de l'effort du programme | Part du temps des équipes participantes consacrée aux tâches de mesure | heures de collecte, de rapport et de revue / heures totales de l'équipe, par estimation | pourcentage | Estimations de temps des équipes | Amélioration continue | Rythme soutenable | Trimestrielle |
| Achèvement des revues d'étape | Part des revues d'étape prévues tenues avec les équipes, les changements étant consignés | revues tenues avec changements consignés / revues prévues | pourcentage | Enregistrements du programme | Amélioration continue | Réflexion régulière | Par étape |

Le délai jusqu'au premier résultat utile se mesure d'après la déclaration de l'équipe pilote et non celle du programme. Les équipes employant activement les mesures se comptent d'après ce que disent les équipes, non d'après les connexions. Les améliorations reliées aux mesures sont un décompte de liens énoncés et non un objectif, car un objectif produirait des liens inventés. La part de l'effort du programme devrait rester faible, et une hausse est un avertissement.

## Recommandations

### Jours 1 à 30 : écouter, convenir et apporter une chose utile

**1. Trouvez un commanditaire et quelques volontaires.** Demandez à un haut dirigeant de parrainer le programme et de signer une courte charte. Invitez une à trois équipes curieuses et respectées. Expliquez que le but est de les aider à voir leur propre travail et à l'améliorer, et que les données ne serviront pas à classer ni à évaluer des individus (voir le sujet 11.3, Déployer les métriques sans semer la peur).

**2. Posez les questions.** Rencontrez chaque équipe pilote pendant une heure. Demandez ce qui la ralentit, ce qui la surprend et ce qu'elle aimerait savoir. Écrivez les questions. Choisissez trois à cinq mesures de ce livre qui répondent à ces questions, chacune avec un garde-fou associé (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

**3. Regardez les données que vous avez déjà.** Tirez quelques mois d'historique des systèmes de référence et tracez des graphiques de suivi. Vérifiez honnêtement la qualité des données : champs manquants, catégories changées, enregistrements créés après coup. Corrigez la saisie à la source là où c'est peu coûteux. Un simple tableur suffit à ce stade (voir le sujet 1.5, Sources de données et instrumentation).

**4. Apportez une chose utile.** D'ici la fin du premier mois, donnez à chaque équipe pilote une petite vue de ses propres données avec une définition pour chaque mesure, et tenez une conversation de revue. Cherchez un changement que les données suggèrent, comme la suppression d'une étape d'attente, et aidez l'équipe à l'essayer. Le premier résultat utile compte plus qu'un outil poli.

### Jours 31 à 90 : apprendre, étendre et en faire une routine

**5. Tenez la première revue avec les équipes pilotes.** Demandez ce qui a aidé, ce qui a prêté à confusion, ce qui a paru risqué et ce qu'elles changeraient. Révisez les mesures, les définitions et la charte. Écoutez surtout les signes de peur ou de détournement. Partagez une courte histoire de ce qui a changé, racontée par l'équipe.

**6. Automatisez le chemin mince.** Là où le travail manuel est lourd, automatisez les un ou deux flux qui comptent le plus, avec des contrôles de fraîcheur et de rapprochement avec la source. Gardez les définitions dans un catalogue simple et portable. N'achetez pas encore de plateforme à moins que l'essai ait montré que les outils existants ne peuvent pas faire le travail (voir le sujet 11.2, Panorama des outils).

**7. Établissez un rythme de revue.** Tenez une courte revue mensuelle dans chaque équipe pilote qui regarde les tendances, consigne les décisions et note les événements. Incluez la possibilité de dire « aucune action ». Ajoutez un examen trimestriel de l'ensemble du programme avec les commanditaires, à partir de vues agrégées et du commentaire des équipes.

**8. Invitez la vague suivante.** Offrez l'approche à davantage d'équipes, en vous appuyant sur les histoires des équipes pilotes. Laissez chaque nouvelle équipe choisir ses mesures dans un menu, avec un petit noyau commun. Gardez un rythme soutenable : quelques équipes à la fois, avec le soutien des équipes pilotes et de la responsable du programme.

### Jours 91 à 180 : renforcer, équilibrer et préparer la passation

**9. Concevez les vues par public.** Avec le public, concevez les vues du responsable de service et de la direction décrites dans le sujet du tableau de bord, à partir de définitions partagées et du commentaire des équipes (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service). Gardez chaque vue petite. Retirez les anciens rapports qu'elles remplacent.

**10. Ajoutez l'équilibre et les résultats.** Étendez les mesures pilotes à un ensemble équilibré qui inclut la qualité, la fiabilité, l'expérience et le coût, avec des résultats à côté de l'activité (voir le sujet 6.5, Réalisation de la valeur et résultats métier). Vérifiez le vecteur de détournement et le garde-fou de chaque nouvelle mesure avant qu'elle soit montrée.

**11. Évaluez le programme.** Menez l'autoévaluation du sujet sur le modèle de maturité avec chaque équipe participante, rapportez le profil et les thèmes, et choisissez une ou deux prochaines étapes dans la dimension qui limite les autres (voir le sujet 11.4, Modèle de maturité des programmes de métriques). Comptez ce que vous avez retiré autant que ce que vous avez ajouté.

**12. Décidez de la suite.** À la revue du 180e jour, avec les équipes et les commanditaires, décidez de continuer, d'ajuster ou d'arrêter. Écrivez ce que le programme a fait, avec quel effort, et ce qui a changé dans les services. Choisissez la prochaine étape : plus d'équipes, un outillage plus profond, des liens avec les mesures financières ou clients, ou la consolidation. Consignez la décision et les raisons.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Délai jusqu'au premier résultat utile | Déclarer utile un changement trivial ; précipiter une vitrine | Demander à l'équipe ce qui a changé ; vérifier que le changement a perduré |
| Équipes employant activement les mesures | Revues tenues pour cocher une case ; affirmer un usage qui n'a pas eu lieu | Demander la décision prise ; échantillonner les notes de revue ; parler avec les équipes |
| Améliorations reliées aux mesures | Inventer des liens pour atteindre un nombre ; s'attribuer le mérite de changements sans rapport | La garder descriptive ; demander à l'équipe son raisonnement ; accepter les liens incertains comme tels |
| Mesures et rapports retirés | Retirer les mesures gênantes ; retirer et réintroduire sous de nouveaux noms | Revoir la liste des retraits pour les tendances défavorables ; exiger une raison énoncée |
| Couverture des lignes de base | Fabriquer un historique ; employer une période qui flatte les résultats ultérieurs | Consigner la source et la période ; garder les données brutes ; choisir les lignes de base avant les changements |
| Part de l'effort du programme | Sous-estimer l'effort ; déplacer le travail vers des personnes hors du décompte | Interroger les personnes qui font le travail ; comparer aux heures supplémentaires en fin de cycle |
| Achèvement des revues d'étape | Revues courtes et expédiées ; consigner des changements qui n'ont jamais lieu | Vérifier que les changements sont exécutés ; demander aux équipes si la revue valait leur temps |

Une lecture saine montre un premier résultat utile dans le premier mois ou les deux premiers, des équipes qui emploient les mesures parce qu'elles les trouvent utiles, une poignée de changements attribués, des rapports retirés à côté des nouveaux, une part d'effort modeste et stable, et des revues d'étape qui mènent à de vrais changements du plan.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Projet pilote avec volontaires | Confiance ; vraies histoires | Démarrage plus lent ; biais de sélection |
| Déploiement à toutes les équipes ensemble | Couverture rapide | Résistance ; distorsion |
| Tableurs d'abord | Rapide ; peu coûteux ; apprentissage | Fragile ; effort manuel |
| Plateforme d'abord | Poli ; passage à l'échelle | Coût ; mauvaise adéquation avant que les questions soient claires |
| Peu de mesures par équipe | Concentration ; faible fardeau | Peut manquer des domaines importants |
| Beaucoup de mesures à la fois | Largeur | Surcharge ; prolifération |
| Plan fixe de 180 jours | Clarté pour les commanditaires | Rigide ; ignore ce qui est appris |
| Revues d'étape qui changent le plan | Apprentissage ; adéquation | Moins prévisible pour les commanditaires |

La réponse en prose est de commencer avec des volontaires et des tableurs, d'étendre à mesure que la valeur est montrée, de donner aux commanditaires une forme claire et des points de revue, et de permettre au plan de changer.

## Questions à discuter avec votre équipe

**1. Quelle est la question à laquelle nous voudrions pouvoir répondre sur notre travail ce mois-ci ?**
Recueillez les questions de chacun. Choisissez celle qui compte le plus et à laquelle on pourrait répondre avec des données que nous détenons déjà. Convenez de ce que serait une réponse utile.

**2. Que mesurons-nous déjà, et qui le regarde ?**
Listez les rapports existants et leurs publics. Marquez ceux que personne n'emploie. Décidez lesquels retirer pour faire place aux nouveaux.

**3. Qu'est-ce qui nous rendrait prêts à essayer ceci pendant un mois ?**
Écoutez les conditions : une charte, un mot à dire sur les mesures, un temps limité. Convenez-en avec le commanditaire avant de commencer.

**4. Quel petit changement les premières données pourraient-elles suggérer ?**
Regardez ensemble quelques mois d'historique. Nommez un changement possible et un résultat attendu. Convenez de la manière de savoir s'il a aidé.

**5. Combien de notre temps pouvons-nous y consacrer sans nuire au travail ?**
Estimez en heures par mois. Convenez d'une limite, et revoyez-la à la première revue d'étape.

**6. Quand devrions-nous arrêter ou changer le plan ?**
Décrivez des signes : aucun résultat utile, peur croissante, lourd effort. Convenez de qui décide et de la manière dont la décision sera consignée.

## Quatre perspectives

### Équipes produit et livraison

Les équipes pilotes portent le risque initial et donnent la première preuve. Elles devraient demander la charte, choisir leurs propres mesures, employer les premières vues dans leurs propres revues et rapporter honnêtement ce qui a aidé et ce qui n'a pas aidé. Elles gagnent quand le premier résultat supprime un vrai obstacle.

### Équipes de service et d'exploitation

Les équipes d'exploitation fournissent une grande part des données et ont souvent la plus lourde charge. Elles devraient aider à évaluer la qualité des données, signaler où une mesure récompenserait le mauvais comportement et protéger le temps pour l'astreinte et le travail sur les incidents. Leur rythme soutenable est une contrainte fixe du plan.

### Direction et gouvernance

Les dirigeants parrainent, signent la charte et protègent le programme contre le mauvais usage. Ils devraient accepter un début modeste, demander des résultats et des histoires plutôt que des décomptes de tableaux de bord, éviter de demander des classements et laisser le plan changer à mesure que le programme apprend. Ils devraient le juger aux décisions qui se sont améliorées.

### Clients et utilisateurs

Les clients et les utilisateurs gagnent quand le programme mène à de meilleurs services. Ils peuvent participer au choix des mesures d'expérience et à la revue de ce qui est recueilli à leur sujet. Ils devraient voir des changements issus de leurs retours.

## En pratique : un exemple d'ITIL agile

Une autorité de transport public de taille moyenne compte 12 équipes réparties entre services numériques, technologie d'exploitation et centre de services. Un nouveau directeur de l'information veut « un programme de métriques en six mois ». Une tentative antérieure avait acheté une plateforme et produit des tableaux de bord que peu de gens ouvraient. Les chiffres ci-dessous sont illustratifs.

La responsable de l'amélioration des services propose une feuille de route de 180 jours avec des revues d'étape aux jours 30, 90 et 180. La première semaine, elle rencontre le directeur de l'information, qui signe une charte d'une page, et invite trois équipes volontaires : le centre de services, une équipe d'information aux voyageurs et une équipe d'exploitation de l'infrastructure. Dans des séances d'une heure, chaque équipe énonce ses questions. Le centre de services veut savoir pourquoi les mêmes problèmes de clients reviennent. L'équipe d'information aux voyageurs veut savoir si ses changements cassent des choses. L'équipe d'infrastructure veut savoir quelle part de son temps va au travail imprévu.

Pour chaque équipe, elle choisit trois à cinq mesures de ce livre, avec des garde-fous, et bâtit des graphiques de suivi dans un tableur partagé à partir des cinq mois de données précédents. La vérification des données constate que 27 pour cent des enregistrements de changements de l'équipe d'information aux voyageurs ont été créés après le déploiement, et que les catégories du centre de services avaient été réorganisées en milieu de période. Corriger l'habitude de saisie et faire correspondre les catégories prend deux semaines. Au 27e jour, le centre de services voit que 19 pour cent de ses contacts étaient des retours dans la semaine, concentrés dans deux catégories liées à une page d'horaires confuse. L'équipe travaille avec l'équipe d'information aux voyageurs pour changer la page. Le centre de services confirme cela comme le premier résultat utile, au 27e jour.

À la revue du 30e jour, les équipes demandent des définitions plus courtes et moins de graphiques, et l'une demande si les données serviraient dans ses évaluations annuelles. La charte est précisée pour dire que non. Entre les jours 31 et 90, la responsable automatise deux flux, met en place dans chaque équipe une revue mensuelle qui consigne les décisions et invite quatre équipes de plus sur la foi des histoires du projet pilote. Les équipes employant activement les mesures s'établissent à 7 sur 7 invitées. À la revue du 90e jour, les équipes rapportent cinq changements qu'elles attribuent à leurs mesures. Le programme a retiré trois anciens rapports hebdomadaires. La part de l'effort est estimée à 3 pour cent du temps des équipes. Entre les jours 91 et 180, la responsable conçoit avec ces publics les vues du responsable de service et de la direction, ajoute des mesures d'expérience et de coût à l'ensemble équilibré et mène l'autoévaluation : la plupart des équipes sont au niveau 2 en usage dans les décisions et 3 en confiance et sécurité, et la prochaine étape choisie est un journal de décisions dans chaque équipe. Au 180e jour, le directeur de l'information demande un classement des 12 équipes selon leur maturité. La responsable offre le profil agrégé et les thèmes, explique la charte, et la demande est abandonnée. Les commanditaires conviennent d'étendre le programme aux cinq équipes restantes au cours des deux trimestres suivants, toujours sur une base volontaire.

## Perspective sectorielle

**Startup.** Comprimez la feuille de route. En deux semaines, convenez de trois questions et de deux ou trois mesures, et regardez-les ensemble chaque semaine ou quinzaine. Employez ce que vous avez déjà. Revisitez après un trimestre. Une startup qui attend de bâtir l'outillage perdra l'habitude de regarder.

**Petite entreprise.** Les 30 premiers jours peuvent être une seule conversation, une liste d'une page de questions, un tableur et un changement. Les étapes suivantes comprennent un regard mensuel régulier. Le principal risque est que la personne qui a tout mis en place devienne la seule à le comprendre ; écrivez donc ce que chaque mesure signifie.

**Grande entreprise.** Employez des vagues de volontaires, une petite équipe centrale qui soutient sans détenir les mesures, des définitions partagées et des revues d'étape avec les commanditaires. Résistez à une date mondiale unique. Attendez-vous à consacrer la première étape à corriger la saisie des données, et prévoyez la coordination avec la sécurité, la vie privée et les comités d'entreprise ou les représentants du personnel là où ils existent.

**Gouvernement et secteur public.** La consultation des représentants du personnel et une communication claire aux organes de surveillance font partie du travail initial. Les cycles d'achat favorisent souvent de commencer avec des outils déjà possédés. Gardez les rapports obligatoires séparés des mesures d'amélioration, et documentez les décisions pour l'audit (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts des 180 premiers jours sont surtout du temps de personnes : la responsable du programme, un petit effort d'analyse, une part du temps des équipes pilotes et l'attention des commanditaires. Les coûts d'outillage peuvent être faibles ou nuls aux premières étapes. Le coût le plus grand est celui de mal faire les premières étapes, par exemple en lançant des mesures sans confiance.

Les retours apparaissent tôt si la première étape est bien choisie : un changement que les données ont suggéré, des rapports retirés, moins de disputes sur les chiffres et des équipes qui en redemandent. Bâtissez le dossier à partir de votre propre historique : jours jusqu'au premier résultat utile, changements que les équipes attribuent aux mesures, heures économisées sur les rapports retirés et effort dépensé. Évitez de citer des chiffres externes sur les retours de l'analytique sans source traçable ni pertinence pour votre contexte. L'affirmation crédible est modeste et locale (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Le lancement en bloc.** Des mois de conception, puis une surprise. Livrez tôt une tranche mince.
- **La plateforme d'abord.** Les outils arrivent avant les questions. Commencez avec ce que vous avez.
- **Compter les tableaux de bord.** On mesure l'activité, on ignore la valeur. Suivez les décisions et les changements.
- **Sauter la charte.** La peur comble le vide. Écrivez les promesses avant que le premier chiffre soit montré.
- **Trop d'équipes à la fois.** Le soutien s'effondre. Diffusez par petites vagues.
- **Ne jamais rien arrêter.** Les anciens rapports restent à côté des nouveaux. Retirez à mesure que vous ajoutez.
- **Un plan fixe défendu contre les preuves.** Le plan devrait changer à mesure que vous apprenez.
- **Abandonner après le premier échec.** Les premiers essais enseignent. Revoyez, ajustez et réessayez.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Départ et projet pilote | Aucun plan ; rapports improvisés | Des équipes intéressées essaient les mesures seules | Charte, commanditaire et projets pilotes volontaires avec un premier résultat utile | L'apprentissage des projets pilotes pilote les plans de vagues ; délai jusqu'à la valeur suivi | Les équipes répandent l'approche entre elles ; commanditaires et partenaires s'y joignent |
| Extension et cadence | Efforts ponctuels | Quelques revues régulières | Revues mensuelles d'équipe et revues trimestrielles du programme | Part de l'effort, retrait et changements attribués gérés | Les revues relient équipes et services ; la cadence s'adapte au besoin |
| Apprentissage et ajustement | Plan fixe ou absent | Leçons occasionnellement partagées | Les revues d'étape changent le plan | Étapes de la feuille de route reliées au profil de maturité | Le programme s'améliore continuellement grâce aux contributions de tous |

## Liste de vérification

- [ ] Un commanditaire a signé une courte charte avant que le premier chiffre soit partagé.
- [ ] Une à trois équipes volontaires ont énoncé leurs questions avec leurs propres mots.
- [ ] Une ligne de base de plusieurs mois de données et une vérification de la qualité des données existent pour chaque mesure pilote.
- [ ] Chaque équipe pilote a une petite vue avec une définition pour chaque mesure.
- [ ] Un premier résultat utile est livré, et confirmé par l'équipe, dans le premier mois ou les deux premiers.
- [ ] Un rythme de revue existe dans chaque équipe pilote et consigne les décisions.
- [ ] Les anciens rapports sont retirés à mesure que de nouvelles vues les remplacent.
- [ ] L'effort que le programme demande aux équipes est estimé et gardé faible.
- [ ] Des revues d'étape aux jours 30, 90 et 180 sont tenues avec les équipes, et le plan change en conséquence.
- [ ] La prochaine étape est décidée avec les équipes et les commanditaires et consignée avec ses raisons.

## Prompts d'IA

**Rédigez un plan de 180 jours.**

```text
Rédigez une feuille de route de 180 jours pour introduire un programme de
métriques de service dans [organization type] avec [number] équipes. Employez
des revues d'étape aux jours 30, 90 et 180. Pour chaque étape, listez les buts,
les activités, les personnes concernées, le temps demandé aux équipes, le
premier résultat utile attendu et les risques. Commencez par des équipes pilotes
volontaires, une charte et les outils existants. Ne promettez pas de résultats.
Énumérez vos hypothèses.
```

**Choisissez les premières mesures.**

```text
Une équipe pilote décrit ses problèmes ainsi : [paste]. Suggérez trois à cinq
mesures pour commencer, chacune avec une définition, une source de données, le
vecteur de détournement le plus probable et un garde-fou associé. Préférez les
données que l'équipe détient déjà. N'inventez pas de chiffres. Énumérez vos
hypothèses et ce qu'il faut vérifier sur la qualité des données.
```

**Menez une vérification de la qualité des données.**

```text
Voici un exemple de description des champs et des valeurs de nos enregistrements
de [system] : [paste]. Repérez les problèmes de qualité probables pour mesurer
le délai de livraison, l'échec des changements et les contacts de retour, comme
les champs manquants, les catégories changées et les enregistrements créés après
coup. Suggérez de simples vérifications et corrections à la source. Ne devinez
pas un contenu que vous ne voyez pas. Énumérez vos hypothèses.
```

**Planifiez une revue d'étape.**

```text
Planifiez une revue d'étape de 45 minutes pour le jour [30, 90, or 180] avec les
équipes pilotes et le commanditaire. Incluez des questions sur ce qui a aidé, ce
qui a paru risqué, l'effort que cela a demandé, ce qu'il faut arrêter et ce
qu'il faut changer au plan. Incluez comment consigner les décisions et partager
une courte histoire de ce qui a changé. Ne classez pas les équipes. Énumérez vos
hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour choisir des mesures de départ avec leurs garde-fous associés pour une équipe pilote.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une feuille de route garde les mesures au niveau de l'équipe et porte un vecteur de détournement pour chaque mesure introduite.

## Points clés à retenir

- Partez de là où vous êtes, avec des volontaires, une charte et les données et outils que vous avez déjà.
- Apportez un résultat utile à une équipe dans le premier mois ou les deux premiers.
- Étendez par petites vagues, et retirez les rapports à mesure que de nouvelles vues les remplacent.
- Vérifiez tôt la qualité des données, et corrigez la saisie à la source.
- Tenez des revues d'étape qui changent le plan, et gardez faible l'effort demandé aux équipes.
- Décidez de la prochaine étape avec les équipes et les commanditaires, et consignez les raisons.

## Références et lectures complémentaires

1. Ries, E., *The Lean Startup*, Crown Business, 2011.
2. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product).
7. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
8. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
9. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
10. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
11. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
12. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
