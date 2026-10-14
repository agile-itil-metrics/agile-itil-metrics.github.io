# Déployer les métriques sans semer la peur

**La mesure fonctionne quand les gens croient que les chiffres décrivent leur travail pour les aider ; déployez donc avec transparence, responsabilité des équipes, promesses écrites sur l'usage et aucun classement d'individus.**

## Résumé et motivation

Un programme de métriques réussit ou échoue sur la confiance. Le même ensemble de mesures peut être un miroir utile dans une organisation et une source d'effroi dans une autre. La différence est rarement dans les mesures. Elle tient à ce que les gens croient qu'il leur arrivera à cause des chiffres. S'ils croient que les chiffres serviront à les classer, à les blâmer ou à les réduire, la réponse sensée est de se protéger : choisir le travail qui obtient de bons scores, retarder le signalement des problèmes, discuter des définitions et ajuster discrètement ce qui est consigné. Les données cessent alors de décrire le travail, et le programme perd cela même qu'il devait fournir.

Ce schéma est ancien et bien connu. L'[effet Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) décrit la manière dont les gens changent de comportement quand ils savent qu'ils sont observés. La [loi de Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) dit que plus un indicateur quantitatif sert à la prise de décision, plus il sera soumis à la pression de corruption et plus il faussera le processus qu'il devait surveiller. La [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) fait un constat semblable sur les objectifs (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Rien de cela n'est une raison d'éviter la mesure. Ce sont des raisons de concevoir le déploiement pour que les incitations à déformer soient faibles et les raisons de dire la vérité fortes.

La [sécurité psychologique](https://en.wikipedia.org/wiki/Psychological_safety) est la croyance partagée qu'une équipe est un lieu sûr pour prendre des risques interpersonnels, comme admettre une erreur, poser une question ou rapporter de mauvaises nouvelles. Les programmes de métriques en dépendent et peuvent l'éroder. Les mesures d'échec, de reprise et de retard ne sont honnêtes que lorsque les gens se sentent en sécurité pour les rapporter (voir le sujet 9.2, Métriques de satisfaction et de bien-être, et le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage). La [confiance](https://en.wikipedia.org/wiki/Trust_(social_science)) entre les personnes mesurées et celles qui emploient les mesures est l'actif sous-jacent, et elle se bâtit lentement et se dépense vite.

La [conduite du changement](https://en.wikipedia.org/wiki/Change_management) est la discipline qui consiste à préparer et à soutenir les gens à travers un changement. Introduire des métriques est un changement organisationnel, et il mérite le même soin qu'un nouveau processus ou outil (voir le sujet 9.6, Métriques de changement organisationnel et d'adoption). Le [cycle de vie de l'adoption technologique](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle) décrit comment les innovations se répandent des enthousiastes à une majorité, ce qui rappelle qu'un projet pilote respecté avec des équipes volontaires fait plus qu'un mandat. Un [projet pilote](https://en.wikipedia.org/wiki/Pilot_project) est un essai à petite échelle qui éprouve une approche avant un engagement plus large. Un [radiateur d'information](https://en.wikipedia.org/wiki/Information_radiator) est un affichage visible d'information que les gens peuvent lire d'un coup d'œil sans demander, ce qui convient à la transparence quand il montre les données d'une équipe à l'équipe qui les détient.

Les buts agiles donnent sa forme au déploiement. L'implication continue des parties prenantes signifie que les personnes mesurées aident à choisir les mesures et les règles de leur usage. L'amélioration continue signifie que le programme est lui-même changé en réponse à ce que disent les gens. L'évolution permanente signifie que l'on s'attend à ce que les mesures changent, ce qui abaisse l'enjeu de chacune. Un rythme soutenable signifie que le programme n'ajoute pas de rapports qui évincent le travail. Bâtir autour d'individus motivés signifie traiter les gens en adultes capables qui peuvent employer des données pour améliorer leur propre travail, et non en ressources à surveiller. La posture pratique est simple : mesurer le système, partager les données avec les gens qui en font partie et les laisser mener l'amélioration.

Le sujet travaille avec les orientations sur les tableaux de bord (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service) et la gouvernance des mesures (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

## Principes clés

- **Dire à quoi servent les données, et à quoi elles ne servent pas.** Écrivez les deux, et tenez-vous-y.
- **Les équipes détiennent leurs mesures.** Les personnes qui font le travail aident à définir, voir et interpréter les chiffres qui le concernent.
- **Mesurer les systèmes, non les individus.** Aucun classement, aucun score par personne, aucun usage des données dans les évaluations de performance individuelles.
- **Être transparent.** Partagez les définitions, les sources de données et qui peut voir quoi. Les surprises engendrent la suspicion.
- **Commencer avec des volontaires.** Un projet pilote volontaire produit des histoires et des corrections avant le déploiement plus large.
- **Montrer l'usage.** Démontrez que les chiffres mènent à de l'aide, comme la suppression d'un obstacle, et non au blâme.
- **Permettre la contestation.** Les gens peuvent mettre un chiffre en question, et les corrections se font vite et visiblement.
- **Aller à un rythme soutenable.** Quelques mesures à la fois, avec le temps d'apprendre.

## Définitions des métriques

Les mesures ci-dessous disent à l'équipe du programme si le déploiement bâtit ou dépense de la confiance. Elles décrivent des équipes et le programme, non des individus. Plusieurs reposent sur des sondages et sur l'observation du comportement, et elles se lisent au mieux comme des signaux dont parler.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture de la charte d'usage | Part des équipes participantes qui ont convenu d'un énoncé écrit de ce à quoi leurs mesures servent et ne servent jamais | équipes avec une charte convenue / équipes participantes | pourcentage | Chartes conservées par le programme | Gouvernance ; conduite du changement organisationnel | Accords de travail | Trimestrielle |
| Part de responsabilité de l'équipe | Part des mesures affichées d'une équipe dont l'équipe a aidé à écrire les définitions ou qu'elle a approuvées | mesures avec approbation de l'équipe / mesures affichées à l'équipe | pourcentage | Catalogue de métriques ; enregistrements d'approbation | Amélioration continue | Équipes auto-organisées | Trimestrielle |
| Signal de franchise | Si le signalement des problèmes et des quasi-incidents se maintient ou monte après l'introduction des mesures | signalements de quasi-incidents ou de problèmes par équipe et par trimestre, avant et après ; tendance | signalements | Enregistrements d'incidents, de quasi-incidents et d'analyses post-incident | Gestion des incidents ; amélioration continue | Réflexion sans reproche | Trimestrielle |
| Délai de réponse aux contestations | Temps entre la contestation d'un chiffre par une personne ou une équipe et une résolution qui leur est visible | médiane et 85e percentile des jours entre la contestation et la résolution | jours | Journal des contestations | Amélioration continue ; gestion des connaissances | Réponse aux retours | Trimestrielle |
| Sécurité perçue de la mesure (sondage) | Accord au niveau de l'équipe, dans un sondage, avec des énoncés comme « les données sur notre travail servent à nous aider » | pourcentage d'accord dans le sondage d'équipe ; taux de réponse montré | pourcentage | Sondage anonyme d'équipe, agrégé | Conduite du changement organisationnel | Confiance et individus motivés | Deux fois par an |
| Incidents d'usage individuel | Cas où des données ont été montrées ou employées pour classer ou évaluer des individus, contrairement à la charte | décompte des cas signalés par trimestre, avec leurs suites | nombre | Signalements au programme ; revue des tableaux de bord et des évaluations | Gouvernance | Respect des personnes | Trimestrielle |
| Adoption volontaire | Part des équipes admissibles qui ont choisi d'adopter le programme dans une période, avant tout mandat | équipes ayant adhéré / équipes admissibles invitées | pourcentage | Enregistrements du programme | Conduite du changement organisationnel | Projets pilotes et apprentissage | Trimestrielle |

Le sondage de sécurité perçue a besoin d'une taille minimale de groupe pour le rapport afin qu'aucun individu ne puisse être identifié, et il devrait être anonyme. Le signal de franchise doit se lire avec soin : une hausse des signalements peut signifier plus de problèmes ou plus de volonté de les signaler, et le second est d'ordinaire ce que produit au début un programme sain. Les incidents d'usage individuel ne sont pas un décompte à cacher. Le but est que chaque cas soit signalé, traité et corrigé, et un petit nombre de cas signalés est le signe d'une voie de signalement qui fonctionne, non d'un échec du programme. L'adoption volontaire ne se compte que pour la période précédant tout mandat.

## Recommandations

### Fixer d'abord les règles de base

**1. Écrivez les promesses et publiez-les.** Avant que le premier chiffre soit montré, rédigez une courte charte. Une bonne charte dit que les mesures décrivent des équipes, des services et des systèmes et ne servent jamais à classer des individus ni dans des évaluations de performance individuelles. Elle dit qui peut voir quoi, combien de temps les données sont conservées, comment les gens peuvent contester un chiffre et ce qui arrive si les règles sont enfreintes. Les hauts dirigeants la signent. La charte est un engagement qui permet aux gens de baisser leur garde, et elle devrait être facile à trouver et à lire.

**2. Séparez la mesure pour l'amélioration de la mesure pour le jugement.** Les équipes emploient leurs mesures pour améliorer leur propre travail. Les dirigeants emploient des vues agrégées pour orienter le soutien et l'investissement. Aucun usage ne vise à évaluer une personne. Si une organisation doit évaluer des individus, elle devrait le faire par la conversation, les preuves et le contexte, et jamais en lisant un tableau de bord (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

**3. Soyez ouvert sur les compromis.** Dites aux gens que chaque mesure peut être détournée, que vous savez de quelles façons et que chacune vient avec un garde-fou. Montrez les vecteurs de détournement et les garde-fous dans le style de ce livre. Nommer les risques au grand jour démontre la bonne foi, et invite les gens à signaler les façons que vous avez manquées.

### Faire des équipes les responsables

**4. Laissez les équipes choisir et définir.** Offrez un menu de mesures et laissez chaque équipe en choisir quelques-unes pour commencer, adapter les définitions pour une raison énoncée et ajouter les siennes. Les équipes qui ont choisi leurs mesures sont plus susceptibles de les employer honnêtement. Gardez un petit noyau commun pour que les services puissent être comparés au niveau où la comparaison est valide (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

**5. Montrez d'abord aux équipes leurs données.** Donnez à chaque équipe ses chiffres avant que quiconque les voie, avec le temps de vérifier, de corriger et d'ajouter du contexte. L'équipe détient l'histoire. Quand les données sont ensuite montrées aux dirigeants, l'équipe les présente ou les annote. Cela évite les surprises et garantit que l'interprétation vient des personnes les plus proches du travail.

**6. Gardez les vues au bon niveau.** Montrez des vues au niveau de l'équipe et du service. Ne montrez pas de ventilation par personne, et désactivez les fonctions d'outils qui le font. Là où une vue détaillée est nécessaire pour une enquête, comme l'historique d'un seul incident, limitez l'accès, expliquez pourquoi et gardez-la hors des conversations d'évaluation (voir le sujet 11.2, Panorama des outils).

### Déployer pour gagner la confiance

**7. Menez un projet pilote avec des volontaires.** Invitez deux ou trois équipes curieuses et respectées. Travaillez avec elles sur les mesures et les règles. Laissez-les raconter leurs propres histoires à leurs pairs. Leurs corrections et leurs objections amélioreront le programme, et leur soutien pèse plus que n'importe quelle annonce. Demandez ce qu'elles changeraient avant le déploiement plus large, et changez-le.

**8. Apportez de la valeur tôt et visiblement.** Dans les premières semaines, employez les données pour supprimer quelque chose qui agace l'équipe : une file qui attend toujours, une étape d'approbation sans but, un rapport que personne ne lit. Quand les gens voient que les chiffres mènent à de l'aide, ils offrent des données plus honnêtes. Quand ils voient que les chiffres mènent à des questions sur eux, ils en offrent moins.

**9. Répondez vite aux contestations.** Quand quelqu'un dit qu'un chiffre est faux, prenez-le au sérieux. Vérifiez, corrigez la définition ou les données, et dites publiquement ce qui a été fait. Une correction rapide et respectueuse bâtit la confiance, et une réponse défensive la dépense. Tenez un journal des contestations, et traitez les contestations répétées comme des signaux que la mesure a besoin de travail.

### Protéger la confiance dans le temps

**10. Guettez les signes de peur.** Les signes incluent des équipes qui discutent des définitions pour éviter les résultats, des améliorations soudaines qui ne correspondent pas à d'autres signaux, moins de problèmes signalés, du travail choisi pour faire bonne figure et des gens qui demandent qui peut voir les données. Traitez-les comme de l'information sur le programme et non comme de l'inconduite. Interrogez les équipes, écoutez et ajustez.

**11. Tenez les dirigeants à la charte.** Les dirigeants sont sous pression pour comparer, classer et expliquer. Donnez-leur ce qu'ils peuvent légitimement employer : tendances, distributions et mesures de résultats au niveau de l'équipe et du service. Rendez facile le signalement d'une violation de la charte, répondez à chaque signalement et publiez la suite, sans nommer les individus qui l'ont soulevée. Une seule violation visible peut défaire des mois de travail, et une correction visible peut le rebâtir.

**12. Revoyez le programme avec les personnes qui en font partie.** Chaque trimestre, demandez aux équipes ce que les mesures aident à faire, ce qu'elles déforment et ce qu'elles abandonneraient. Retirez les mesures qui échouent à l'épreuve. Partagez les résultats de la revue. Un engagement continu et visible à améliorer le programme est le signal le plus fort qu'il existe pour servir les équipes (voir le sujet 9.5, Métriques d'amélioration continue).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Couverture de la charte d'usage | Signer les chartes par formalité ; des dirigeants qui les ignorent | Vérifier l'usage des chartes en pratique ; rapporter les incidents d'usage individuel ; revoir les chartes avec les équipes |
| Part de responsabilité de l'équipe | Équipes qui approuvent des définitions qu'elles n'ont pas lues ; le programme qui présente des définitions finies pour signature | Échantillonner la manière dont les définitions ont été élaborées ; suivre les changements demandés et faits par les équipes |
| Signal de franchise | Presser les équipes de signaler plus ou moins de problèmes ; rebaptiser les catégories | Lire avec la gravité et le contenu des analyses post-incident ; comparer aux problèmes signalés par les clients |
| Délai de réponse aux contestations | Clore les contestations sans résolution visible ; décourager les contestations | Exiger une réponse visible ; sonder les contestataires ; suivre les contestations répétées |
| Sécurité perçue de la mesure (sondage) | Coacher les répondants ; faibles taux de réponse cachant des équipes mécontentes | Anonymat et taille minimale de groupe ; montrer les taux de réponse ; parler directement aux équipes |
| Incidents d'usage individuel | Ne pas signaler ; reclasser les incidents sous une autre rubrique ; blâmer ceux qui signalent | Signalement anonyme facile ; protection de ceux qui signalent ; revue des évaluations et des tableaux de bord pour des données individuelles |
| Adoption volontaire | Pression présentée comme invitation ; compter des équipes qui ont adhéré pour éviter l'examen | Demander aux équipes pourquoi elles ont adhéré ; vérifier l'usage en pratique ; garder la période libre de mandat |

Une lecture saine montre des chartes auxquelles les équipes se réfèrent réellement, des mesures que les équipes ont aidé à façonner, des signalements de problèmes stables ou en hausse, des contestations traitées rapidement, un sondage qui montre que les gens croient que les données les aident, quelques violations signalées qui ont été traitées ouvertement, et des équipes qui ont adhéré parce qu'elles le voulaient.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Déploiement imposé à toutes les équipes à la fois | Rapide et cohérent | Conformité sans conviction ; détournement et ressentiment |
| Projets pilotes volontaires, puis diffusion | Bâtit des histoires et de la confiance | Plus lent ; couverture inégale |
| Les équipes choisissent toutes leurs mesures | Forte responsabilité | Difficile à comparer ; lacunes de couverture |
| Noyau commun plus choix de l'équipe | Équilibre entre comparaison et responsabilité | Exige de la gouvernance |
| Tableaux de bord ouverts entre équipes | Transparence ; apprentissage partagé | Risque de comparaison et de classements |
| Vues réservées aux équipes, avec agrégats partagés | Espace sûr pour une réflexion honnête | Les dirigeants peuvent se sentir aveugles |
| Charte écrite | Promesses claires ; base de contestation | Sans valeur si ignorée |
| Assurances informelles | Rapides | Oubliées ; aucun recours |

La réponse en prose est de commencer avec des équipes volontaires, de leur donner la responsabilité, de partager des agrégats vers le haut avec le consentement et le contexte de l'équipe, et d'appuyer les promesses sur une charte à laquelle les dirigeants sont tenus.

## Questions à discuter avec votre équipe

**1. Que croyons-nous qu'il arrivera avec ces chiffres, et qu'avons-nous vu arriver par le passé ?**
Invitez des histoires honnêtes de mesures bien et mal employées. L'animateur doit consigner les craintes sans discuter. Convenez des promesses qui feraient le plus de différence.

**2. Qu'écririons-nous dans une charte qui dit à quoi nos données ne serviront jamais ?**
Rédigez-la ensemble avec des mots simples. Incluez les évaluations de performance individuelles, les classements et les licenciements, si c'est la crainte. Portez-la aux dirigeants qui devraient la signer.

**3. Lesquelles des mesures proposées choisirions-nous, et lesquelles abandonnerions-nous ?**
Laissez chacun voter en privé et comparez. Discutez de pourquoi certaines semblent menaçantes. Convenez d'un court ensemble à essayer pendant un trimestre.

**4. Comment saurions-nous si les gens commençaient à cacher des problèmes ?**
Listez les signes : moins de signalements, langage adouci, travail évité. Convenez de qui surveille et de la façon de le soulever sans blâme.

**5. Qui devrait voir les chiffres de notre équipe, sous quelle forme et quand ?**
Discutez de réservé à l'équipe, d'agrégats pour la direction et de comparaison entre équipes. Décidez de ce qui est partagé et de qui le présente. Écrivez la règle.

**6. Si un chiffre à notre sujet est faux, comment le ferons-nous corriger ?**
Retracez le chemin de la constatation à la correction. Repérez les retards et qui décide. Convenez d'une voie de contestation simple et d'un délai attendu.

## Quatre perspectives

### Équipes produit et livraison

Les équipes portent le risque d'être mesurées, et elles détiennent la connaissance de ce que signifient les chiffres. Elles devraient participer au choix et à la définition des mesures, employer les données dans leurs propres revues et parler quand un chiffre induit en erreur. Elles gagnent à voir d'abord les données et quand la mesure aide à supprimer des obstacles.

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent souvent les données les plus riches et les plus lourdes charges d'astreinte et d'incidents. Elles devraient se méfier des mesures qui récompensent le silence ou punissent l'escalade, protéger le signalement des incidents et des quasi-incidents et veiller à ce que les données d'astreinte ne servent pas à classer les gens (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte).

### Direction et gouvernance

Les dirigeants fixent la culture de l'usage. Ils devraient signer et suivre la charte, demander des vues d'équipe et de service, répondre ouvertement aux violations et éviter de demander des classements. Ils devraient juger le programme à l'amélioration qu'il permet et à la franchise qu'il préserve, non au nombre de tableaux de bord.

### Clients et utilisateurs

Les clients et les utilisateurs gagnent à ce que les équipes rapportent honnêtement les problèmes et corrigent les causes. Ils peuvent aussi être l'objet de la collecte de données. Ils méritent de la clarté sur ce qui est recueilli à leur sujet et sur la manière dont c'est employé, et ils peuvent être des partenaires pour décider quelles mesures montrent de la valeur pour eux (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple d'ITIL agile

La division technologique d'un fournisseur de services de santé introduit des métriques dans ses 15 équipes de livraison et de soutien. Une tentative précédente, trois ans plus tôt, avait publié un classement des équipes par tickets clos et s'était terminée par une pointe de clôtures de tickets de faible valeur et une baisse des incidents signalés. Les chiffres ci-dessous sont illustratifs.

La nouvelle responsable de la gestion des services commence par demander à six responsables d'équipe ce dont ils se souviennent. Ils décrivent le classement et les retombées. Elle rédige avec eux une charte : les mesures décrivent des équipes et des services, jamais des individus ; les vues individuelles sont désactivées dans les outils ; les données ne servent jamais dans les évaluations individuelles ; les équipes voient d'abord leurs données ; toute personne peut contester un chiffre, avec une réponse sous dix jours ouvrables ; et une violation sera signalée au programme et examinée au grand jour. Le directeur de la technologie la signe, et elle est affichée sur la page du programme.

Trois équipes se portent volontaires pour le projet pilote. Chacune choisit quatre mesures dans un menu et réécrit deux définitions. Une équipe insiste pour que le « temps de résolution » exclue le temps d'attente d'un client, et une autre pour que l'échec d'un changement soit défini par l'impact sur les utilisateurs et non par le seul retour arrière. Le projet pilote montre son premier bénéfice à la troisième semaine, quand une équipe voit son travail attendre dans une file d'approbation et supprime une étape que personne ne pouvait justifier. L'équipe présente son histoire lors d'une réunion de division. Sept autres équipes demandent à se joindre. L'adoption volontaire atteint 10 équipes sur 15 en deux trimestres, et les cinq dernières adhèrent plus tard sans mandat.

Le programme guette la peur. Les signalements de quasi-incidents par équipe montent au premier trimestre, ce que la responsable lit comme plus de volonté de signaler, et elle le confirme en lisant un échantillon. Un sondage d'équipe avec une taille minimale de groupe montre 58 pour cent de répondants d'accord avec « les données sur notre travail servent à nous aider » au début du deuxième trimestre et 76 pour cent au début du quatrième. Le délai de réponse aux contestations a une médiane de quatre jours ouvrables. Puis une directrice, en préparant un dossier budgétaire, demande un tableau classant les équipes par nombre de déploiements. La responsable du programme lui dit que c'est hors de la charte, offre une vue des tendances par service avec commentaire des équipes et consigne la demande comme un quasi-incident d'usage individuel signalé, avec sa suite. La directrice accepte. Deux trimestres plus tard, les incidents d'usage individuel s'élèvent à un, signalé, traité et publié sans noms.

## Perspective sectorielle

**Startup.** L'équipe est petite et la confiance est personnelle. Dites à voix haute à quoi servent les chiffres, laissez toute l'équipe choisir les quelques mesures à suivre et gardez-les hors de toute conversation individuelle. Le risque est qu'un commentaire en passant d'un fondateur sur un chiffre remodèle le comportement du jour au lendemain. Écrivez la promesse, même en quelques lignes.

**Petite entreprise.** Le personnel peut soupçonner que les chiffres visent à supprimer des emplois. Parlez ouvertement de pourquoi vous mesurez, de ce que vous regarderez et de ce que vous ne regarderez pas. Associez les gens au choix des mesures, partagez ce que vous trouvez et montrez tôt une amélioration qui les a aidés.

**Grande entreprise.** L'échelle rend la confiance plus difficile, car la plupart des dirigeants sont éloignés des équipes. Employez une charte signée à un niveau supérieur, des mesures détenues par les équipes avec un petit noyau commun, une configuration des outils qui empêche les vues individuelles et une voie indépendante de signalement des violations. Menez des projets pilotes, apprenez et diffusez par les pairs, et évitez une date de déploiement mondiale unique.

**Gouvernement et secteur public.** Les règles d'emploi, les syndicats et le regard du public ajoutent des contraintes et des attentes. Consultez tôt les représentants du personnel, convenez de la charte avec eux et soyez clair sur la ligne entre les données d'amélioration et tout processus formel de performance. Les exigences de rapport public devraient être gardées à part des mesures internes d'amélioration (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont surtout du temps de personnes : rédiger la charte, mener des projets pilotes, des ateliers avec les équipes, traiter les contestations, mener des sondages, et le temps des dirigeants consacré à respecter les règles. Il y a aussi un coût d'opportunité, car un déploiement soigné est plus lent qu'un mandat. Ces coûts sont faibles à côté du coût d'un déploiement raté, où les données sont déformées, la confiance dépensée et le programme abandonné.

Les retours sont des données qui reflètent la réalité, un signalement honnête des problèmes et des équipes qui emploient les mesures pour s'améliorer. Ils se manifestent sous forme de détection plus précoce des problèmes, de moins de disputes sur les chiffres et d'une adoption plus forte sans contrainte. Bâtissez le dossier à partir de votre propre histoire : ce qui s'est passé quand des mesures ont été imposées auparavant, combien d'équipes ont adopté volontairement cette fois et comment le signalement des problèmes a changé. Évitez de citer des chiffres publiés sur l'engagement ou la confiance sans source traçable ni pertinence pour votre contexte (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Le classement surprise.** Des classements apparaissent dans une diapositive de direction. La confiance prend fin. Gardez les classements hors du programme.
- **Des mesures dans les évaluations de performance.** Même une mention change le comportement partout. Gardez-les dehors, par écrit.
- **Imposer d'abord, expliquer ensuite.** Conformité sans conviction. Menez un projet pilote avec des volontaires et expliquez les raisons.
- **Une charte que personne ne fait respecter.** Des mots sans action sont pires que rien. Tenez les dirigeants à elle et publiez les suites.
- **La surveillance par défaut.** Les outils exposent l'activité individuelle parce qu'ils le peuvent. Désactivez ces fonctions.
- **Réponses défensives aux contestations.** Les gens cessent de signaler les erreurs. Répondez vite et avec respect.
- **Se précipiter sur de nombreuses mesures.** Surcharge et confusion. Commencez avec quelques-unes et grandissez.
- **Lire le silence comme un succès.** Moins de signalements peut signifier la peur. Surveillez les signaux de franchise et parlez aux gens.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Promesses et usage | Non écrits ; l'usage varie selon le gestionnaire | Assurances verbales ; quelques accords d'équipes | Charte écrite signée par les dirigeants ; vues individuelles désactivées | Violations signalées et examinées ; usage de la charte vérifié | Charte codétenue avec le personnel et les partenaires ; révisée selon l'expérience |
| Responsabilité et transparence | Mesures imposées | Certaines équipes consultées | Les équipes choisissent et définissent les mesures et voient d'abord les données | Part de responsabilité et délai de réponse aux contestations gérés | Équipes, fournisseurs et clients partagent des vues par accord ; responsabilité routinière |
| Confiance et franchise | Peur ou indifférence | Projet pilote avec des volontaires | Sondage de sécurité et tendances de quasi-incidents revus avec les équipes | Les signaux déclenchent une action planifiée ; adoption volontaire suivie | La franchise est routinière ; l'amélioration du programme vient de tous |

## Liste de vérification

- [ ] Une charte écrite énonce à quoi les données servent et ne servent jamais, et les dirigeants l'ont signée.
- [ ] Les vues et classements au niveau individuel sont désactivés dans les outils ou restreints par la politique.
- [ ] Les équipes choisissent ou approuvent leurs mesures et voient leurs données avant les autres.
- [ ] Un projet pilote avec des équipes volontaires précède tout déploiement plus large.
- [ ] Le premier usage des données apporte une aide visible à l'équipe.
- [ ] Une voie de contestation existe, avec un délai de réponse énoncé et un journal.
- [ ] Une voie de signalement existe pour les violations de la charte, et les suites sont publiées sans noms.
- [ ] Les signaux de sécurité et de franchise au niveau de l'équipe sont surveillés et discutés avec les équipes.
- [ ] Les vecteurs de détournement et les garde-fous sont partagés ouvertement avec les équipes.
- [ ] Le programme est revu chaque trimestre avec les équipes, et les mesures sont retirées quand elles cessent d'aider.

## Prompts d'IA

**Rédigez une charte des métriques.**

```text
Rédigez une charte d'une page pour le programme de métriques d'une [organization
type]. Elle devrait énoncer à quoi servent les données, à quoi elles ne serviront
jamais (y compris les classements individuels et les évaluations de performance),
qui peut voir quoi, combien de temps les données sont conservées, comment une
personne peut contester un chiffre, comment les violations sont signalées et qui
la signe. Employez des mots simples. Ne donnez pas de conseil juridique.
Énumérez vos hypothèses et les points à confirmer avec les spécialistes des
ressources humaines et du juridique.
```

**Planifiez un projet pilote.**

```text
Planifiez un projet pilote de six semaines d'un programme de métriques avec deux
à trois équipes volontaires dans [context]. Incluez comment inviter les équipes,
quelles mesures offrir, comment fixer les règles, quelle aide précoce les données
devraient apporter, ce qu'il faut demander aux équipes à la fin et comment
décider d'un déploiement plus large. Ne supposez pas le résultat. Énumérez vos
hypothèses et vos risques.
```

**Examinez une mesure sous l'angle de la peur.**

```text
Voici une mesure proposée et la manière dont elle sera employée : [paste].
Agissez comme un membre d'équipe sceptique. Décrivez comment elle pourrait être
perçue comme une menace, comment les gens pourraient changer de comportement pour
faire bonne figure et quel signalement honnête elle pourrait décourager.
Suggérez des changements à la définition, à l'affichage ou aux règles d'usage qui
abaisseraient le risque. Énumérez vos hypothèses.
```

**Répondez à une contestation.**

```text
Une équipe a contesté ce chiffre : [describe, without personal data]. Rédigez une
réponse respectueuse qui reconnaît la préoccupation, explique comment le chiffre
est calculé, propose comment le vérifier, fixe une date pour la réponse et dit ce
qui changera si le chiffre est faux. Ne soyez pas sur la défensive. Listez ce que
vous ne savez pas encore.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le vecteur de détournement et le garde-fou à partager ouvertement avec les équipes pour une mesure proposée.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un plan de déploiement garde les mesures au niveau de l'équipe et du service et ne classe jamais d'individus.

## Points clés à retenir

- La confiance est l'actif. Écrivez à quoi les données servent et ne servent jamais, et tenez la promesse.
- Mesurez les équipes, les services et les systèmes, et désactivez les vues qui exposent des individus.
- Laissez les équipes choisir, définir et voir d'abord leurs données, et détenir l'histoire qu'elles racontent.
- Menez un projet pilote avec des volontaires, apportez tôt une aide visible et diffusez par les pairs.
- Répondez vite aux contestations, et traitez les signes de peur comme de l'information sur le programme.
- Tenez les dirigeants à la charte, et revoyez le programme avec les personnes qui en font partie.

## Références et lectures complémentaires

1. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 1999.
2. Campbell, D., "Assessing the Impact of Planned Social Change," *Evaluation and Program Planning*, 1979.
3. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
5. Westrum, R., "A Typology of Organisational Cultures," *BMJ Quality and Safety*, 2004.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Trust (social science)](https://en.wikipedia.org/wiki/Trust_(social_science)).
13. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
14. Wikipedia, [Technology adoption life cycle](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle).
15. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
16. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
