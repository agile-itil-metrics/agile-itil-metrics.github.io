# Santé de l'équipe et expérience des développeurs

**Les équipes font leur meilleur travail quand le retour est rapide, que la charge sur leur esprit est gérable et qu'elles peuvent trouver de longues plages de concentration ; mesurez donc ces conditions avec l'équipe, supprimez les obstacles qu'elles révèlent et n'employez jamais les chiffres pour classer les personnes.**

## Résumé et motivation

Les principes du Manifeste agile nous demandent de bâtir les projets autour d'individus motivés, de leur donner l'environnement et le soutien dont ils ont besoin et de leur faire confiance pour accomplir le travail. Ils demandent aussi que les commanditaires, les développeurs et les utilisateurs puissent maintenir indéfiniment un rythme constant, et que l'équipe réfléchisse régulièrement à la manière de devenir plus efficace. Les mesures de santé d'équipe et d'expérience des développeurs sont la manière dont ces principes deviennent vérifiables. Elles demandent ce que cela fait de faire le travail ici, et ce qui se met en travers.

L'[expérience des développeurs](https://en.wikipedia.org/wiki/Developer_experience) est la somme des interactions que les développeurs ont avec les outils, les processus et les personnes avec lesquels ils travaillent. L'idée est plus large que le génie logiciel. Les exploitants, le personnel du centre de services, les analystes et toute autre personne qui construit ou exploite un service ont une expérience de leur environnement. Ce sujet emploie « expérience des développeurs » pour les ingénieurs et « santé de l'équipe » pour le groupe plus large, et les mêmes mesures s'appliquent aux deux.

Deux cadres de recherche sont largement cités. Le cadre SPACE, publié par Nicole Forsgren et ses collègues en 2021, soutient que la [productivité](https://en.wikipedia.org/wiki/Productivity) des développeurs ne peut pas être réduite à un seul nombre, et propose cinq dimensions : satisfaction et bien-être, performance, activité, communication et collaboration, et efficience et flux. Une suite de 2023 par Abi Noda, Margaret-Anne Storey, Nicole Forsgren et Michaela Greiler, intitulée « DevEx: What Actually Drives Productivity », se concentre sur trois dimensions que les développeurs peuvent ressentir et que les organisations peuvent changer : les boucles de rétroaction, la charge cognitive et l'état de flux. Les deux articles recommandent de combiner des données d'enquête sur les perceptions avec des données des systèmes sur les flux de travail, et les deux mettent en garde contre l'usage d'une seule mesure, surtout d'un décompte d'activité, comme substitut de la productivité.

Les trois dimensions DevEx sont un point de départ pratique.

- **Boucles de rétroaction.** En combien de temps une personne apprend-elle le résultat de ce qu'elle a fait ? Les constructions lentes, les tests lents, les revues lentes et les approbations lentes ajoutent chacun de l'attente, et l'attente brise la concentration. Un retour rapide est aussi un soutien essentiel de la livraison continue.
- **[Charge cognitive](https://en.wikipedia.org/wiki/Cognitive_load).** Que doit garder en tête une personne pour accomplir quelque chose ? Les systèmes compliqués, la documentation pauvre, la responsabilité floue et les nombreux outils élèvent la charge. La réduire libère de la capacité pour le travail qui compte.
- **[État de flux](https://en.wikipedia.org/wiki/Flow_(psychology)).** Une personne peut-elle trouver des plages ininterrompues pour se concentrer ? Les réunions, les notifications, les demandes imprévues et les changements de contexte l'érodent tous.

Les mesures de ce domaine sont exceptionnellement faciles à mal employer. Les décomptes de validations, de demandes de fusion, de tickets clos ou d'heures en ligne sont des mesures d'activité. Elles sont faciles à collecter et disent peu de choses sur la capacité des gens à bien travailler, et elles invitent au détournement. Les mesures de perception sont subjectives et précieuses, et elles peuvent être déformées si les gens craignent les conséquences d'une réponse honnête. Toute mesure de personnes peut glisser vers la surveillance. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique avec une arête éthique : quand une mesure de personnes devient un objectif, les gens cessent de dire la vérité sur leur travail (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Ce sujet s'appuie sur l'expérience des utilisateurs internes décrite plus tôt (voir le sujet 6.4, Expérience des utilisateurs et des employés) et se poursuit dans les sujets suivants sur le bien-être, la collaboration, les compétences et l'amélioration.

## Principes clés

- **Mesurer les conditions, non les personnes.** Interrogez sur l'environnement et ses obstacles, et rapportez au niveau de l'équipe.
- **Combiner la perception et les données de flux de travail.** Ce que les gens ressentent et ce que les systèmes consignent manquent chacun une partie du tableau.
- **Laisser l'équipe détenir son bilan de santé.** Les personnes les plus proches du travail choisissent les questions et lisent d'abord les résultats.
- **Ne jamais employer ces mesures pour classer ou évaluer des individus.** Ce serait la fin des réponses honnêtes.
- **Éviter les décomptes d'activité comme productivité.** Les décomptes de validations, de tickets ou d'heures ne sont pas des résultats.
- **Agir visiblement sur ce que l'on entend.** Supprimez l'obstacle, ou dites pourquoi pas.
- **Protéger un rythme soutenable.** Une équipe qui tourne à plein régime indéfiniment emprunte à son avenir.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Durée des boucles de rétroaction | Temps pour qu'une personne obtienne le résultat d'une action courante, par type de boucle | médiane et 85e percentile des minutes ou heures de construction, d'exécution de tests, d'attente de revue de code et de déploiement, par équipe | minutes ou heures | Horodatages des outils de chaîne de livraison et de revue, agrégés par équipe | Gestion des mises en production et des déploiements ; amélioration continue | Retour rapide dans la livraison continue | Hebdomadaire |
| Part du temps de concentration | Part du temps de travail en plages ininterrompues d'une longueur minimale convenue, telle que rapportée par l'équipe | heures en plages de concentration rapportées par l'équipe / heures de travail, collectées dans un court sondage éclair | pourcentage | Sondage éclair d'équipe ; données de calendrier seulement si l'équipe y consent et si elles sont agrégées | Amélioration continue ; gestion des connaissances | Temps protégé pour le travail en profondeur | Mensuelle |
| Cote de charge cognitive | Cote donnée par l'équipe de la difficulté de comprendre et de modifier un système ou processus nommé | cote moyenne et dispersion sur une courte échelle convenue, par système | points d'échelle | Court sondage éclair relié à un système ou processus | Conception de service ; gestion des connaissances | Compréhension partagée du travail | Trimestrielle |
| Délai de résolution des obstacles | Temps entre le moment où l'équipe soulève un obstacle et sa suppression ou une décision consignée de ne pas le supprimer | médiane et 85e percentile des jours entre soulevé et résolu ou décidé | jours | Liste ou suivi des obstacles | Amélioration continue ; gestion des problèmes | Obstacles supprimés | Mensuelle |
| Tendance du bilan de santé de l'équipe | Cote donnée par l'équipe elle-même sur les dimensions qu'elle a choisies, suivie dans le temps | variation des cotes des dimensions choisies par l'équipe entre les bilans | points d'échelle | Bilan de santé de l'équipe, détenu par l'équipe | Amélioration continue | Réflexion de l'équipe sur la manière de devenir plus efficace | Mensuelle ou trimestrielle |
| Satisfaction envers les outils et les processus | Cote donnée par l'équipe de sa satisfaction envers les outils et processus qu'elle emploie chaque jour | cote moyenne ou part favorable pour chaque outil ou processus nommé | points d'échelle ou pourcentage | Court sondage éclair | Gestion des niveaux de service ; amélioration continue | Adéquation de l'environnement au travail | Trimestrielle |
| Couverture des dimensions | Nombre de dimensions SPACE couvertes par les mesures qu'une équipe emploie réellement | nombre des cinq dimensions ayant au moins une mesure en usage | nombre (0 à 5) | Registre des métriques | Mesure et rapport ; gouvernance | Mesures équilibrées | Annuelle |

Agrégez tout au niveau de l'équipe et fixez une taille minimale de groupe, par exemple aucun résultat pour un groupe de moins de cinq personnes. Le temps de concentration est la description de l'équipe elle-même, et tout chiffre tiré du calendrier est facultatif, agrégé et convenu par l'équipe. Les durées des boucles de rétroaction viennent des systèmes et décrivent la chaîne de livraison, non les personnes. La couverture des dimensions est un contrôle du programme de mesure, destiné à empêcher de se reposer sur un seul genre de mesure.

## Recommandations

### Partir des conditions dans lesquelles les gens travaillent

**1. Demandez à l'équipe ce qui la ralentit.** Commencez par une conversation, non un sondage : qu'est-ce qui vous fait perdre du temps, qu'est-ce qui est difficile à comprendre et qu'est-ce qui vous interrompt le plus ? Notez les réponses avec les mots de l'équipe. La conversation trouve des problèmes qu'aucun tableau de bord ne trouverait, et elle bâtit la confiance dont les sondages ultérieurs ont besoin. Convenez de deux ou trois éléments à mesurer.

**2. Employez les trois dimensions DevEx comme grille de lecture.** Pour chacune des boucles de rétroaction, de la charge cognitive et de l'état de flux, choisissez une question de perception et, si possible, une mesure système. Pour les boucles de rétroaction, associez « dans quelle mesure êtes-vous satisfait du temps que prennent les constructions ? » à la durée de la construction. Pour la charge cognitive, demandez à quel point il est difficile de comprendre et de modifier un système nommé. Pour le flux, demandez à quelle fréquence les gens peuvent travailler sans interruption. Associez ce que disent les gens à ce que consignent les systèmes, et regardez les désaccords.

**3. Couvrez plusieurs dimensions de SPACE.** Choisissez des mesures dans au moins trois des cinq dimensions pour qu'aucun genre de données ne domine. La satisfaction et le bien-être, la collaboration, et l'efficience et le flux comptent souvent le plus pour une équipe qui exploite des services. Traitez les mesures d'activité avec grand soin, et n'employez-les que comme contexte. La mesure de couverture des dimensions garde cela honnête.

### Mesurer avec soin

**4. Laissez l'équipe détenir son bilan de santé et en lire d'abord les résultats.** Un bilan de santé d'équipe est une courte autoévaluation sur des dimensions que l'équipe choisit, comme le plaisir, le soutien, la vitesse, l'apprentissage et la facilité de mise en production. L'équipe lit et discute ses propres résultats avant que quiconque voie un résumé. Les autres voient les tendances et les obstacles pour lesquels l'équipe demande de l'aide, non des scores à comparer. Cela garde l'outil comme une aide à l'apprentissage, et cela dépend de la [sécurité psychologique](https://en.wikipedia.org/wiki/Psychological_safety), la croyance partagée que les gens ne seront pas punis d'avoir parlé.

**5. Chronométrez les boucles de rétroaction qui comptent.** Mesurez la durée des boucles dont les gens se plaignent : construction locale, suite de tests, attente de revue de code, déploiement vers un environnement de test. Rapportez la médiane et le 85e percentile, car une queue lente fait plus mal que ne le suggère la moyenne. Partagez les chiffres avec l'équipe qui détient la chaîne de livraison, et faites de l'amélioration un travail régulier (voir le sujet 2.7, Métriques des demandes de fusion et de la revue de code).

**6. Protégez la concentration, et mesurez-la avec douceur.** Interrogez sur la concentration dans le sondage éclair, et regardez ce qui cause les interruptions : charge de réunions, notifications, demandes imprévues. Si une équipe souhaite regarder les schémas du calendrier, faites-le avec son accord et agrégez les résultats. Ne suivez jamais l'activité ou la présence d'individus. Le but est de trouver les interruptions structurelles à supprimer, comme une réunion qui pourrait être un document.

**7. Suivez la résolution des obstacles.** Tenez une liste visible des obstacles que l'équipe a soulevés, et mesurez le temps qu'ils mettent à être résolus ou écartés consciemment. Une longue liste qui ne rétrécit jamais apprend aux gens que soulever des problèmes est inutile. La décision de ne pas supprimer un obstacle, avec une raison, compte comme une résolution.

### Employer les résultats pour s'améliorer

**8. Agissez sur une ou deux choses à la fois.** Choisissez l'obstacle de plus grande valeur, corrigez-le et dites-le à l'équipe. Une action visible fait plus pour la confiance qu'un long rapport. Résistez à la tentation de lancer beaucoup d'initiatives à la fois.

**9. Associez les mesures de personnes à des mesures de résultats.** Regardez comment les boucles de rétroaction et la charge cognitive se rapportent aux résultats de livraison et de stabilité (voir le sujet 2.8, Métriques DORA). Ne revendiquez pas de causalité à partir d'une corrélation dans vos propres données. Employez l'association pour trouver des questions à explorer, comme celle de savoir si les équipes aux revues plus lentes ont aussi des temps de cycle plus longs.

**10. Gardez les décomptes d'activité hors de la conversation.** Ne rapportez ni validations, ni lignes de code, ni tickets clos par personne. Les décomptes de productions d'équipe peuvent être utiles pour le flux, mais ils disent peu de choses sur la santé. Si quelqu'un demande des métriques d'activité individuelle, expliquez la recherche et offrez plutôt des mesures de conditions.

### Protéger les personnes

**11. Fixez les règles de confidentialité avant de collecter.** Écrivez ce qui est collecté, pourquoi, qui le voit, combien de temps il est conservé et ce qui ne sera jamais fait avec. Agrégez au niveau de l'équipe, supprimez les petits groupes et laissez des représentants des personnes concernées revoir les règles. N'employez aucune de ces données dans les évaluations de performance, les promotions ou la discipline.

**12. Faites d'un rythme soutenable la valeur par défaut.** Guettez les signes qu'une équipe tourne à plein régime : une longue série d'incidents hors des heures de travail, un état permanent d'urgence, des listes d'obstacles qui s'allongent, une satisfaction qui baisse. Traitez-les comme des problèmes de système à régler par le périmètre, les effectifs ou les priorités. Un rythme constant que les gens peuvent tenir est un objectif de conception, et il soutient la qualité, l'apprentissage et la fidélisation (voir le sujet 9.2, Métriques de satisfaction et de bien-être).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Durée des boucles de rétroaction | Exclure les cas lents ; mesurer un chemin rapide que la plupart du travail n'emprunte pas | Rapporter le 85e percentile ; définir le début et la fin de chaque boucle dans le registre |
| Part du temps de concentration | Bloquer du temps au calendrier sans se concentrer ; rapporter une concentration gonflée pour plaire aux gestionnaires | Sondage éclair détenu par l'équipe ; comparer aux causes d'interruption ; aucun rapport individuel |
| Cote de charge cognitive | Coter bas les systèmes pour éviter l'examen ; choisir des systèmes faciles à coter | Coter une liste fixe de systèmes ; comparer au temps d'accueil et aux schémas d'incidents |
| Délai de résolution des obstacles | Clore des obstacles sans les corriger ; refuser de consigner des obstacles | L'équipe confirme la résolution ; taux d'obstacles rouverts |
| Tendance du bilan de santé de l'équipe | Des gestionnaires qui pressent pour de bons scores ; des équipes qui ajustent les scores pour éviter l'attention | L'équipe détient les résultats ; tendances partagées seulement avec le consentement de l'équipe |
| Satisfaction envers les outils et les processus | Sonder des utilisateurs satisfaits ; former le personnel à bien répondre | Taux et composition des réponses ; lire les commentaires ; relier aux mesures des systèmes |
| Couverture des dimensions | Compter une dimension avec une mesure symbolique | Vérifier que chaque mesure comptée sert dans une décision |

Une lecture saine est des boucles de rétroaction plus courtes et plus stables, une charge cognitive qui baisse sur les systèmes clés, des équipes qui rapportent une vraie concentration, des obstacles soulevés et résolus, des bilans de santé en lesquels l'équipe a confiance et aucun usage des données sur les individus.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Sondages de perception | Saisissent ce que les systèmes ne peuvent pas ; faible coût | Subjectifs ; vulnérables à la peur et à la fatigue |
| Mesures de flux de travail | Objectives ; continues | Manquent les ressentis et les causes ; risque de surveillance |
| Bilan de santé détenu par l'équipe | Honnête et utile à l'équipe | Difficile à comparer ; difficile à étendre |
| Sondage standard à l'échelle de l'entreprise | Comparable entre équipes | Moins pertinent ; employé pour classer |
| Décomptes d'activité | Faciles à collecter | Mauvais substituts ; facilement détournés |
| Mesures centrées sur les conditions | Pointent vers des causes corrigibles | Exigent un effort de suivi |
| Sondages éclairs fréquents | Opportuns | Fatigue des sondages |
| Sondage annuel | Faible fardeau | Lent ; périmé |

La réponse en prose est de combiner des bilans de santé détenus par les équipes et de courts sondages éclairs avec des mesures de flux de travail des boucles dont les gens se plaignent, d'éviter les décomptes d'activité et de protéger la confidentialité. Employez les comparaisons à l'échelle de l'entreprise avec parcimonie, et jamais pour classer les équipes.

## Questions à discuter avec votre équipe

**1. Quelle est la boucle de rétroaction la plus lente de notre journée de travail, et combien de temps prend-elle réellement ?**
Choisissez la boucle dont les gens se plaignent le plus. Chronométrez-la à partir des systèmes et comparez avec ce que disent les gens. L'animateur doit noter les surprises, dans les deux sens. Convenez d'un changement qui la raccourcirait, et de qui le détient.

**2. Quel système redoutons-nous de modifier, et qu'est-ce qui le rend difficile ?**
Nommez le système. La difficulté est-elle dans le code, la documentation, les outils ou les connaissances dans quelques têtes ? Demandez quelle amélioration unique baisserait le plus la charge. Planifiez comment savoir si elle a fonctionné.

**3. Quand chacun de nous a-t-il eu pour la dernière fois un long bloc de temps ininterrompu, et qu'est-ce qui a interrompu ceux qui ont échoué ?**
Partagez honnêtement et sans reproche. Listez les interruptions et classez-les en structurelles (réunions, notifications, demandes imprévues) et accidentelles. Choisissez une interruption structurelle à réduire.

**4. Quel obstacle avons-nous soulevé plus d'une fois sans résultat ?**
Regardez la liste des obstacles. Pour chaque élément ancien, demandez qui pourrait le résoudre et ce qui le bloque. Si l'équipe a cessé de soulever des obstacles, discutez de pourquoi. Convenez d'en escalader un avec des preuves.

**5. Qu'est-ce qui nous ferait hésiter à donner une réponse honnête au bilan de santé ?**
Discutez des craintes sur l'usage possible des résultats. L'animateur doit consigner les préoccupations et convenir de règles : qui voit les données, ce qui ne sera jamais fait avec. Si les règles ne sont pas crues, dites-le, et décidez de ce qui gagnerait la confiance.

**6. Lesquelles de nos mesures pourraient monter pendant que le travail empire ?**
Listez les mesures et pensez aux façons dont chacune pourrait être améliorée sans aider personne. Attribuez un garde-fou à chacune. Retirez toute mesure qui ne sert dans aucune décision.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison savent mieux que quiconque ce qui les ralentit et détiennent leur propre bilan de santé. Elles devraient nommer les obstacles, chronométrer les boucles qu'elles contrôlent et décider avec l'équipe quoi corriger d'abord. Elles devraient résister à la pression de rapporter l'activité individuelle et insister sur des mesures au niveau de l'équipe.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent l'astreinte, les interruptions et le travail imprévu qui érodent la concentration et le rythme. Elles devraient soulever la charge structurelle comme un problème de système, mesurer les boucles de leurs propres outils et tenir une rotation soutenable. Elles gagnent à partager des listes d'obstacles avec les équipes de livraison, car de nombreux obstacles traversent la frontière.

### Direction et gouvernance

Les dirigeants fixent les conditions et décident de la manière dont les données sont employées. Ils devraient financer les corrections que révèlent les mesures de conditions, protéger les règles de confidentialité et demander des tendances et des obstacles à la place de scores à comparer. La gouvernance devrait traiter une demande de métriques d'activité individuelle comme une raison de revoir les règles, et attendre que le travail d'amélioration soit visible.

### Clients et utilisateurs

Les utilisateurs gagnent à des équipes qui peuvent travailler calmement et apprendre vite, car leurs problèmes sont bien résolus. Ils remarquent aussi quand une équipe est débordée : réponses plus lentes, erreurs répétées, forte rotation. Leurs retours sont une preuve de la santé de l'équipe vue de l'extérieur, et ils méritent l'honnêteté sur la manière dont les corrections sont priorisées.

## En pratique : un exemple d'ITIL agile

Le groupe technologique d'un assureur national compte 14 équipes qui construisent et exploitent des services de polices et de sinistres. La direction demande un tableau de bord de productivité des développeurs. La première demande porte sur les validations et les tickets clos par personne. La responsable de l'efficacité de l'ingénierie propose une approche différente. Les chiffres ci-dessous sont illustratifs.

Elle commence par des conversations dans cinq équipes. Trois obstacles reviennent : la suite de tests prend 70 minutes, les revues de code attendent longtemps dans les équipes qui dépendent de deux relecteurs seniors, et personne ne se sent capable de modifier le vieux service de calcul des sinistres. Elle mesure ce qu'elle peut à partir des systèmes. La boucle médiane de construction et de test est de 58 minutes avec un 85e percentile de 92. L'attente médiane de première revue est de 9 heures ouvrables et le 85e percentile de 31 heures. Elle ajoute un court sondage éclair trimestriel avec les trois questions DevEx, avec un groupe minimal de rapport de cinq. La cote de charge cognitive du service de calcul des sinistres est de 4,4 sur une échelle de cinq points où 5 est très difficile, contre 2,6 pour le portail des polices. Le temps de concentration rapporté par les équipes est d'environ 3 heures par jour, les réunions et les demandes imprévues en étant les principales causes. Chaque équipe mène son propre bilan de santé sur des dimensions qu'elle a choisies, et ne lit que la tendance combinée.

Le groupe convient de quatre actions avec les équipes. La suite de tests est scindée et parallélisée, et le 85e percentile passe de 92 à 41 minutes en deux mois. Un roulement de revue répartit la charge au-delà des deux relecteurs seniors, et le 85e percentile d'attente tombe à 14 heures. Trois équipes acceptent un bloc hebdomadaire sans réunions, et une équipe retravaille la manière dont les demandes imprévues lui parviennent. Le service de calcul des sinistres devient un projet d'apprentissage partagé, avec du travail en binôme et de la documentation, et sa cote de charge cognitive passe à 3,5 en deux trimestres. Le temps de concentration rapporté monte à environ 4 heures.

Quand un cadre supérieur redemande des décomptes de validations individuels, la responsable de l'efficacité de l'ingénierie explique la recherche SPACE et DevEx et offre le tableau de bord des conditions. La décision est consignée, avec les règles de confidentialité qui disent que l'activité individuelle ne sera jamais employée dans les évaluations. Une équipe demande que les résultats de son bilan de santé ne soient pas résumés pour la direction ce trimestre, et la demande est accordée. L'attrition dans les équipes concernées baisse l'année suivante, et elle note qu'elle ne peut pas prouver le lien et ne le revendiquera pas.

## Perspective sectorielle

**Startup.** Tout le monde se connaît ; les conversations battent donc les sondages. Chronométrez les principales boucles de rétroaction, gardez les constructions rapides et guettez les signes de rythme insoutenable, car quelques personnes portent beaucoup. N'importez pas un grand programme de sondages.

**Petite entreprise.** Une petite équipe peut être une ou deux personnes qui construisent et soutiennent à la fois. Leur principal risque est l'interruption et la dépendance envers des individus. Tenez une simple liste d'obstacles, assurez une couverture en cas d'absence et demandez-vous régulièrement ce qui gêne. Les données au niveau individuel sont par nature identifiantes ; fiez-vous donc à la conversation.

**Grande entreprise.** L'échelle donne de la variété et des tentations de comparaison. Fournissez une trousse commune (questions de sondage éclair, chronométrage des boucles) tout en laissant les équipes détenir leurs bilans de santé. Agrégez avec soin, partagez les schémas entre équipes pour répandre les corrections et gardez les classements hors du tableau. Associez les comités d'entreprise ou les représentants des employés là où ils existent.

**Gouvernement et secteur public.** Les marchés publics, les règles de sécurité et les chaînes d'approbation allongent les boucles de rétroaction, et le personnel peut bénéficier de fortes protections contre la surveillance. Mesurez les boucles, associez des représentants à la fixation des règles de données et employez les constats pour simplifier les processus. Les agents publics motivés par la valeur du service gagnent à une suppression visible des obstacles (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont le temps des équipes pour les bilans de santé et les sondages éclairs, un peu d'instrumentation des chaînes de livraison et des outils de revue, un analyste ou un coach pour aider à interpréter les résultats et à animer, et le temps d'ingénierie pour supprimer les obstacles. La plupart de ces coûts sont faibles comparés au coût de boucles lentes multiplié par de nombreuses personnes.

Le retour vient du temps récupéré, de moins de reprises, d'une meilleure fidélisation et d'un apprentissage plus rapide. Estimez-le à partir de vos propres données : les heures par semaine perdues à attendre les constructions et les revues dans le groupe, le coût d'embaucher et d'accueillir pour remplacer ceux qui partent, et les schémas d'incidents ou de défauts liés aux équipes surchargées. Soyez prudent en transformant des minutes en argent, et énoncez les hypothèses. Évitez les affirmations d'études publiées sur des gains de productivité à moins de pouvoir retracer leur méthode et leur adéquation. Souvenez-vous du coût de se tromper : un programme vu comme de la surveillance abîme la confiance et la qualité de tous les sondages ultérieurs (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Tableaux de bord de productivité individuelle.** Ils mesurent l'activité, invitent au détournement et abîment la confiance. Mesurez les conditions au niveau de l'équipe.
- **Employer les scores de bilan de santé pour comparer les équipes.** Les équipes gèrent alors le score. Laissez les équipes détenir leurs résultats.
- **Des sondages sans action.** Les gens cessent de répondre. Corrigez quelque chose de visible à chaque cycle.
- **Mesurer le temps en ligne ou la présence.** Cela récompense la visibilité et punit la concentration. Mesurez les boucles et les obstacles.
- **Une seule mesure pour tout.** Elle manque l'essentiel du tableau. Couvrez plusieurs dimensions.
- **Ignorer la queue.** Les médianes cachent les boucles lentes qui font mal. Rapportez les percentiles.
- **Blâmer les gens pour des problèmes de système.** Les obstacles sont d'ordinaire structurels. Corrigez la structure.
- **Tourner à plein régime comme norme.** L'urgence permanente épuise les gens. Traitez la surcharge soutenue comme un échec de planification.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Comprendre les conditions | Anecdote | Sondage occasionnel | Conversations et sondages éclairs réguliers sur les boucles de rétroaction, la charge et le flux | Données de perception et de flux de travail combinées, avec tendances au niveau de l'équipe | Vue partagée des conditions entre équipes et fournisseurs ; les équipes conçoivent ensemble les mesures |
| Responsabilité et éthique | La direction lit tout | Soin informel | Bilans de santé détenus par les équipes ; règles de confidentialité écrites | Règles revues avec des représentants ; interdiction d'usage individuel appliquée | Règles et pratiques auditées indépendamment ; les équipes contrôlent le partage des données |
| Action | Plaintes sans suite | Corrections ponctuelles | Liste d'obstacles avec responsables ; une ou deux corrections par cycle | Corrections suivies et reliées aux résultats ; rythme soutenable surveillé | Suppression des obstacles intégrée à la planification ; apprentissage largement partagé |

## Liste de vérification

- [ ] Les équipes ont dit avec leurs propres mots ce qui les ralentit.
- [ ] Au moins une question de perception et une mesure système couvrent chacune des boucles de rétroaction, de la charge cognitive et du flux.
- [ ] Les mesures viennent d'au moins trois dimensions SPACE.
- [ ] Chaque équipe détient son bilan de santé et en lit d'abord les résultats.
- [ ] Les durées des boucles de rétroaction sont rapportées en médiane et en 85e percentile.
- [ ] Une liste visible d'obstacles a des responsables, et le délai de résolution est suivi.
- [ ] Les résultats sont rapportés au niveau de l'équipe avec une taille minimale de groupe.
- [ ] Des règles de confidentialité écrites énoncent que les données individuelles ne seront pas employées dans les évaluations.
- [ ] Les décomptes d'activité ne sont pas rapportés comme productivité.
- [ ] L'équipe voit au moins une correction par cycle.

## Prompts d'IA

**Rédigez des questions de sondage éclair pour les trois dimensions DevEx.**

```text
Rédigez un court sondage éclair d'au plus six questions pour [type of team]
couvrant les boucles de rétroaction, la charge cognitive et l'état de flux.
Employez une formulation neutre, une échelle cohérente et un commentaire
ouvert. Pour chaque question, suggérez une mesure système correspondante avec
laquelle nous pourrions la comparer. Ne revendiquez pas de résultats de
recherche. Énumérez vos hypothèses et les façons dont les questions pourraient
être mal comprises.
```

**Analysez les schémas de la liste d'obstacles.**

```text
Voici la liste d'obstacles de l'équipe pour le dernier [period] avec les dates
de signalement, les dates de résolution et de courtes descriptions : [paste,
sanitized]. Regroupez les obstacles par cause, signalez les éléments anciens et
les schémas, et suggérez lequel ou lesquels traiter d'abord et pourquoi. Ne
déduisez pas de motifs et ne nommez pas d'individus. Énumérez vos hypothèses et
ce que l'équipe devrait confirmer.
```

**Rédigez des règles de confidentialité pour un programme de santé d'équipe.**

```text
Rédigez un ensemble de règles d'une page pour un programme de santé d'équipe et
d'expérience des développeurs dans [type of organization]. Couvrez ce qui est
collecté, le but, qui voit quoi, la taille minimale de groupe, la conservation,
une promesse que les données individuelles ne seront pas employées dans les
évaluations de performance et la manière dont le personnel peut soulever des
préoccupations. Signalez ce que je devrais revoir avec le juridique, la
confidentialité et les représentants des employés. Ne donnez pas de conclusions
juridiques. Énumérez vos hypothèses.
```

**Comparez les conditions aux résultats.**

```text
Pour [number] équipes, nous avons des mesures de conditions (durées des boucles
de rétroaction, cotes de charge cognitive, temps de concentration) et des
mesures de résultats (temps de cycle, taux d'échec des changements, incidents) :
[paste table]. Décrivez les schémas, dites où les données sont trop clairsemées
pour conclure quoi que ce soit et suggérez des hypothèses à éprouver avec les
équipes. Ne revendiquez pas de causalité. Énumérez vos hypothèses et vos mises
en garde.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de santé d'équipe ou d'expérience des développeurs.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique relative aux personnes porte son vecteur de détournement, son garde-fou et ses règles de confidentialité.

## Points clés à retenir

- Mesurez les conditions dans lesquelles les gens travaillent : boucles de rétroaction, charge cognitive et flux.
- Combinez ce que disent les gens avec ce que consignent les systèmes, et regardez les désaccords.
- Laissez les équipes détenir leurs bilans de santé, rapportez au niveau de l'équipe et n'employez jamais les données sur les individus.
- Évitez les décomptes d'activité comme substitut de la productivité.
- Agissez visiblement sur un ou deux obstacles à la fois, et suivez le temps que mettent les obstacles à être résolus.
- Protégez un rythme que l'équipe peut soutenir indéfiniment.

## Références et lectures complémentaires

1. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
2. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Productivity](https://en.wikipedia.org/wiki/Productivity).
7. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
8. Wikipedia, [Developer experience](https://en.wikipedia.org/wiki/Developer_experience).
9. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
10. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
