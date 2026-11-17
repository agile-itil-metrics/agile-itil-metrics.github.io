# Modèle de maturité des programmes de métriques

**Employez l'échelle commune à cinq niveaux pour décrire où en est un programme de métriques et pour choisir la prochaine petite étape, jamais comme un score à afficher, à comparer ou à certifier.**

## Résumé et motivation

Chaque autre sujet de ce livre se termine par un petit tableau de maturité pour son objet. Ce sujet applique la même échelle au programme de métriques dans son ensemble. La question n'est pas de savoir si les temps d'incidents d'une équipe sont bons. C'est de savoir dans quelle mesure l'organisation recueille, lit et exploite les mesures tout court : si les définitions sont partagées, si l'on fait confiance aux données, si les chiffres mènent à des décisions et si les personnes mesurées voient le programme comme une aide.

Un modèle de maturité est une description d'étapes qu'une organisation peut traverser à mesure qu'une pratique se développe. L'exemple le plus connu en logiciel est le [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model), issu de travaux du Software Engineering Institute et largement répandu. Son influence a été grande, et les critiques qui ont suivi aussi. Les organisations ont couru après le niveau et non après la capacité, les auditeurs ont noté la paperasse, et le modèle en est venu à servir d'insigne. Un usage responsable de tout modèle de maturité garde trois mises en garde à l'esprit. L'échelle est un outil de conversation et non une certification. Plus haut n'est pas toujours mieux, car le bon niveau dépend du contexte. Et le modèle ne remplace pas les résultats : un programme mûr qui n'améliore pas les services est un échec très ordonné, et un niveau montré comme un insigne ressemble beaucoup à une [métrique de vanité](https://en.wikipedia.org/wiki/Vanity_metric), un chiffre qui fait bonne figure et n'éclaire aucune décision.

L'échelle employée ici est celle qui est commune à tout le livre et au *Agile ITIL Guide* : Initier, Développer, Standardiser, Gérer et Orchestrer (voir le modèle de maturité commun dans la spécification). Elle n'est délibérément pas la même que les échelles de maturité des processus d'ITIL, de l'ISO/IEC 33000 ou du Capability Maturity Model, et une équipe ne devrait pas revendiquer un score dans l'un de ces cadres sur la foi de celle-ci.

Les buts agiles indiquent comment l'employer. L'amélioration continue signifie que le modèle sert à trouver la prochaine étape, non à atteindre un état final. L'évolution permanente signifie qu'un programme qui a atteint Orchestrer l'an dernier peut régresser si des gens s'en vont ou si les priorités changent ; l'autoévaluation est donc répétée. L'implication continue des parties prenantes signifie que l'évaluation se fait avec les équipes et non sur elles. Un rythme soutenable signifie que le programme franchit une étape à la fois et n'essaie pas de sauter trois niveaux en un trimestre. Et bâtir autour d'individus motivés signifie que les personnes qui font le travail jugent si le programme les aide. C'est la même logique que la pratique d'amélioration continue d'ITIL, où une organisation vérifie l'état actuel, fixe une direction et s'améliore par petites étapes, une habitude proche du [kaizen](https://en.wikipedia.org/wiki/Kaizen), l'idée japonaise d'amélioration continue par tous. L'idée plus générale est le [processus d'amélioration continue](https://en.wikipedia.org/wiki/Continual_improvement_process) (voir le sujet 9.5, Métriques d'amélioration continue).

Le modèle a un piège particulier dans le contexte des métriques. Un programme évalué sur ses propres métriques invite à la distorsion même qu'il met en garde. Si le « nombre de mesures dotées de définitions » devient un objectif, les définitions se multiplient. L'approche de ce sujet emploie donc des preuves tirées du travail (quelles décisions ont changé, ce que disent les équipes) en plus des décomptes, et elle garde l'évaluation détenue par les équipes, qui ont le moins à gagner à la gonfler (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Un formulaire d'évaluation complémentaire pour les équipes figure dans les annexes (voir le sujet 12.5, Autoévaluation de la maturité).

## Principes clés

- **L'échelle est un outil de conversation.** Elle aide les gens à décrire le présent et à choisir une prochaine étape, et elle ne sert ni à coter, ni à classer, ni à certifier.
- **Évaluer avec les équipes.** Une autoévaluation, discutée ouvertement, est plus exacte qu'une notation externe.
- **Juger par les preuves.** Demandez quelles décisions ont changé, ce que disent les gens et ce que montrent les données, autant que quels documents existent.
- **Les dimensions peuvent différer.** Un programme peut être fort en outillage et faible en confiance. Rapportez le profil, non un chiffre unique.
- **Avancer d'une étape à la fois.** Visez le niveau suivant dans une ou deux dimensions, non dans tout à la fois.
- **Plus haut n'est pas toujours mieux.** Choisissez le niveau qui convient à la taille, au risque et aux besoins de l'organisation.
- **S'attendre à la régression.** Le roulement du personnel, la réorganisation et la pression peuvent faire reculer un programme. Réévaluez régulièrement.
- **Ne jamais publier de classement des équipes.** Agrégez pour le programme et ne partagez les résultats d'une équipe qu'avec cette équipe.

## Définitions des métriques

Les mesures ci-dessous décrivent la santé du programme et son évaluation. Elles sont destinées à l'équipe du programme et aux commanditaires, et se lisent comme des signaux de discussion.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Participation à l'évaluation | Part des équipes participantes qui ont achevé une autoévaluation avec leur propre discussion | équipes ayant achevé et discuté / équipes participantes | pourcentage | Enregistrements d'évaluation | Amélioration continue | Réflexion et rétrospectives | Deux fois par an |
| Profil par dimension | La distribution des niveaux autoévalués des équipes dans chaque dimension, montrée comme une plage et non comme un score unique | nombre d'équipes à chaque niveau, par dimension | équipes par niveau | Autoévaluations, agrégées | Amélioration continue ; gouvernance | Travail visible | Deux fois par an |
| Actions d'amélioration issues des évaluations | Part des prochaines étapes convenues qui ont été achevées, abandonnées avec une raison ou sont en cours | actions closes ou justifiées / actions convenues | pourcentage | Registre d'amélioration | Amélioration continue | Petites expériences | Trimestrielle |
| Preuve de décision | Part des mesures échantillonnées pour lesquelles l'équipe peut nommer une décision ou un choix délibéré que la mesure a éclairé au dernier trimestre | mesures avec une décision nommée / mesures échantillonnées | pourcentage | Entretiens avec les équipes ; notes de revue | Amélioration continue | Les preuves plutôt que la cérémonie | Trimestrielle |
| Confiance dans les définitions et les données | Accord au niveau de l'équipe que les définitions sont claires et les données correctes | pourcentage d'accord dans un court sondage d'équipe ; taux de réponse montré | pourcentage | Sondage anonyme d'équipe | Gestion des connaissances ; gestion de l'information | Compréhension partagée | Deux fois par an |
| Délai jusqu'au niveau suivant (descriptif) | Temps écoulé pour qu'une équipe fasse monter d'un niveau une dimension lorsqu'elle l'a choisi | médiane des mois entre l'étape convenue et la réévaluation de l'équipe | mois | Historique des évaluations | Amélioration continue | Rythme soutenable | Annuelle |
| Fardeau de l'évaluation | Heures que l'évaluation prend par équipe | médiane des heures par équipe | heures | Estimations de temps des équipes | Amélioration continue | Rythme soutenable | Deux fois par an |

La participation se mesure comme l'achèvement avec discussion, car un formulaire rempli seul dit peu de choses. Le profil est une plage et n'est jamais moyenné en un seul nombre de maturité. Le délai jusqu'au niveau suivant est descriptif : une montée rapide peut refléter une autonotation gonflée, et une lente un soin approprié. Le fardeau de l'évaluation est un contrôle de l'évaluation elle-même, qui ne devrait pas prendre plus d'une heure ou deux par équipe.

## Recommandations

### Bien employer l'échelle

**1. Définissez les dimensions d'un programme de métriques.** Un ensemble praticable compte six dimensions : (a) questions et but, si les mesures répondent à des questions que les publics ont posées ; (b) définitions et responsabilité, si les mesures ont des définitions écrites et des responsables ; (c) données et outillage, si les données sont exactes, opportunes et portables ; (d) usage dans les décisions, si les chiffres éclairent les choix ; (e) confiance et sécurité, si les gens croient que les données les aident ; et (f) revue et évolution, si le programme s'élague lui-même. Six suffisent pour être utile et sont assez peu pour en discuter en une heure.

**2. Décrivez à quoi ressemble chaque niveau.** Le tableau de la section « Modèle de maturité » ci-dessous donne de courtes descriptions pour chaque dimension à chaque niveau. Traitez-les comme des invitations. Une équipe devrait adapter la formulation à son propre contexte et écrire ses propres exemples.

**3. Ne faites pas de moyenne.** Un score global unique cache le schéma qui compte. Un programme à forte maturité d'outillage et à faible confiance est dans une situation différente de celui qui a l'inverse, et la prochaine étape diffère. Montrez le profil.

### Évaluer avec les équipes et non sur elles

**4. Faites-en une conversation d'une heure.** Réunissez une équipe avec le tableau. Demandez à chaque personne de marquer, en privé, où elle pense que l'équipe se trouve dans chaque dimension, puis comparez. Discutez des différences, car elles révèlent des expériences différentes d'un même programme. Convenez d'une vue d'équipe, consignez les preuves qui la fondent et choisissez une ou deux prochaines étapes.

**5. Demandez des preuves.** Pour chaque niveau revendiqué, demandez un exemple. « Nous employons les chiffres dans nos décisions » invite à la question « Quelles décisions le dernier trimestre ? » Employez des mesures échantillonnées et des entretiens pour vérifier. Cela respecte les gens et empêche l'évaluation de glisser vers la pensée magique.

**6. Gardez les résultats auprès de l'équipe.** Le profil d'une équipe appartient à l'équipe. Le programme partage des plages agrégées et des thèmes communs, non un classement. Précisez que l'évaluation n'affecte ni le financement, ni la position, ni les évaluations. Si c'est le cas, les équipes la gonfleront et la valeur sera perdue (voir le sujet 11.3, Déployer les métriques sans semer la peur).

### Choisir les prochaines étapes

**7. Choisissez la dimension qui limite les autres.** La confiance et la sécurité limitent souvent tout le reste : sans elles, les données sont déformées et les décisions suspectes. Les définitions et la responsabilité limitent souvent les données et l'usage. Un schéma courant est de renforcer d'abord la confiance et les définitions, puis les données, puis l'usage et la revue. Cherchez la dimension où une petite amélioration débloquerait les autres.

**8. Fixez une petite étape concrète.** Une prochaine étape devrait être une étape qu'une équipe peut achever en un trimestre et reconnaître : « convenir d'une charte », « écrire des définitions pour nos quatre mesures », « automatiser deux flux », « tenir une revue mensuelle où nous consignons les décisions ». Évitez des étapes comme « atteindre le niveau 4 ». Les niveaux décrivent un état, et les étapes décrivent du travail.

**9. Reliez les étapes au registre d'amélioration.** Mettez les actions au même endroit que le reste du travail d'amélioration, avec responsables et dates, et passez les progrès en revue dans la conversation régulière d'amélioration (voir le sujet 9.5, Métriques d'amélioration continue). Une étape qui n'est ni financée ni planifiée n'aura pas lieu.

### Rester honnête et léger

**10. Calibrez entre équipes sans les classer.** Tenez une courte séance où les équipes partagent des exemples de ce qu'elles appellent niveau 3 dans une dimension. Discutez des différences de normes. Le but est une compréhension partagée, non des scores égaux. Faites tourner l'animateur, et invitez une équipe extérieure au programme à contester la formulation.

**11. Réévaluez selon un rythme, et en réponse aux événements.** Deux fois par an suffisent à la plupart des programmes. Réévaluez après une réorganisation, un changement d'outil ou une violation de la charte, car ces événements peuvent faire bouger la confiance dans les deux sens. Guettez la régression et traitez-la comme de l'information, non comme un échec.

**12. Retirez ou révisez le modèle lui-même.** Chaque année, demandez aux équipes si les dimensions et les descriptions de niveaux conviennent encore. Reformulez ce qui prête à confusion, et retirez ce que personne n'emploie. Un modèle qui n'a pas changé depuis cinq ans décrit peut-être un programme qui n'existe plus.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Participation à l'évaluation | Remplir des formulaires pour atteindre un quota ; une personne qui remplit pour l'équipe | Exiger une discussion d'équipe ; demander les preuves derrière chaque affirmation |
| Profil par dimension | Gonfler les niveaux pour faire bonne figure ; les sous-estimer pour recevoir de l'aide | Ne pas relier au financement ni à la position ; demander des preuves ; calibrer ouvertement |
| Actions d'amélioration issues des évaluations | Choisir des étapes triviales à clore ; clore sans faire | Revoir la taille et la valeur des étapes ; vérifier les résultats à la prochaine évaluation |
| Preuve de décision | Inventer des décisions après coup ; lister des décisions sans conséquence | Demander la date et les personnes concernées ; accepter « a choisi de ne rien faire » comme décision |
| Confiance dans les définitions et les données | Coacher les répondants ; faible réponse cachant le mécontentement | Anonymat et taille minimale de groupe ; montrer les taux de réponse ; parler directement aux équipes |
| Délai jusqu'au niveau suivant (descriptif) | Précipiter les affirmations de progrès ; cacher la régression | La garder descriptive ; la lire avec les preuves ; consigner les régressions sans pénalité |
| Fardeau de l'évaluation | Sauter la discussion pour réduire les heures | Suivre les heures avec la participation et la qualité des preuves |

Une lecture saine montre un profil aux niveaux variés, la confiance et les définitions progressant avant l'outillage et le polissage, des prochaines étapes petites et achevées, des décisions que les équipes peuvent nommer, et un registre honnête de régressions occasionnelles.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Autoévaluation d'équipe | Honnête, détenue, rapide | Subjective ; calibrage nécessaire |
| Évaluation externe | Cohérente ; indépendante | Coûteuse ; invite à jouer pour l'évaluateur |
| Score global unique | Facile à communiquer | Cache le schéma ; invite aux objectifs |
| Profil par dimension | Montre où agir | Plus difficile à résumer |
| Évaluation annuelle | Légère | Lente à remarquer la régression |
| Deux fois par an avec déclencheurs d'événements | Réactive | Plus d'effort |
| Liée au financement | Attire l'attention | Gonflement et détournement |
| Gardée séparée du financement | Données honnêtes | Exige d'autres moyens de gagner du soutien |

La réponse en prose est de mener une autoévaluation légère avec des preuves, de rapporter des profils et des plages, de garder les résultats auprès des équipes et de lier les prochaines étapes au registre d'amélioration, non au financement ni à la position.

## Questions à discuter avec votre équipe

**1. Laquelle des six dimensions dirions-nous être la plus faible, et qu'est-ce qui nous le fait dire ?**
Faites choisir à chacun une dimension en privé, puis partagez. L'animateur doit demander un exemple récent. Cherchez des schémas, et convenez de la dimension qui limite les autres.

**2. Pouvons-nous nommer une décision du dernier trimestre qu'une mesure a changée ?**
Listez-les. Si la liste est courte, demandez pourquoi. Discutez de si le problème vient des mesures, des données ou de l'habitude de regarder.

**3. Où nous placerions-nous sur la confiance et la sécurité, et comment le savons-nous ?**
Regardez les signalements de quasi-incidents, les contestations et les résultats de sondage. Comparez avec la façon dont les gens parlent en pratique. Convenez d'une chose que les dirigeants pourraient faire pour la faire bouger.

**4. À quoi ressemblerait une petite étape concrète pour notre dimension la plus faible ?**
Rédigez-la en une phrase, avec un responsable et une date. Vérifiez qu'elle peut être achevée en un trimestre. Convenez de la manière de savoir qu'elle a fonctionné.

**5. Qu'est-ce qui ferait ressentir cette évaluation comme une menace, et comment l'éviter ?**
Discutez des usages des résultats que les gens craindraient. Écrivez à quoi les résultats ne serviront jamais. Vérifiez que le responsable du programme est d'accord.

**6. Y a-t-il un niveau que nous n'avons pas besoin d'atteindre ?**
Pensez à notre taille, à nos risques et à nos buts. Décrivez un niveau assez bon pour l'instant et un signal qui nous dirait de le revisiter.

## Quatre perspectives

### Équipes produit et livraison

Les équipes s'évaluent elles-mêmes, choisissent la prochaine étape et gardent leurs résultats. Elles devraient se servir de la conversation pour faire ressortir les différences d'expérience, demander des preuves et fixer des étapes assez petites pour être menées à terme. Elles devraient repousser toute tentative de transformer le profil en classement.

### Équipes de service et d'exploitation

Les équipes d'exploitation portent de lourdes charges de données et d'incidents et peuvent voir où le programme les soutient ou les alourdit. Elles devraient noter où l'outillage ou les définitions bloquent leur travail, demander que les données d'astreinte et d'incidents soient traitées avec soin, et donner un retour franc sur le fardeau de l'évaluation.

### Direction et gouvernance

Les dirigeants parrainent le programme et reçoivent le tableau agrégé. Ils devraient demander des profils et des thèmes communs, résister à la demande d'un score unique, financer les prochaines étapes que les équipes choisissent et ne pas lier le financement ou la position à l'évaluation. Ils devraient aussi donner l'exemple en décrivant des décisions que des métriques ont éclairées.

### Clients et utilisateurs

Les clients et les utilisateurs gagnent à ce que le programme améliore les services et à ce que leurs retours fassent partie des mesures. Là où ils sont partenaires, ils peuvent participer à l'évaluation des mesures qui les concernent, par exemple l'utilité des sondages de satisfaction, et à la revue de la manière dont leurs données sont employées.

## En pratique : un exemple d'ITIL agile

Un groupe national d'assurance compte 20 équipes de livraison et de soutien et un programme de métriques qui fonctionne depuis 18 mois. Le commanditaire demande « un score de maturité pour chaque équipe » afin d'orienter l'investissement. La responsable du programme est méfiante, se souvenant que la notation de type audit précédente avait conduit les équipes à préparer des classeurs de documents. Les chiffres ci-dessous sont illustratifs.

La responsable du programme propose plutôt un profil sur six dimensions, évalué par les équipes dans une conversation d'une heure avec un animateur extérieur à l'équipe, les résultats étant gardés par l'équipe. Elle dit au commanditaire que le programme rapportera des plages et des thèmes communs, et qu'aucun profil d'équipe ne sera lié au financement. Le commanditaire accepte, et la décision est consignée.

Dix-neuf équipes sur 20 achèvent l'évaluation avec une discussion, de sorte que la participation est de 95 pour cent. Le profil montre une plage : en questions et but, la plupart des équipes sont au niveau 2 ou 3 ; en définitions et responsabilité, un éventail de 1 à 4 ; en données et outillage, surtout 3 ; en usage dans les décisions, surtout 2 ; en confiance et sécurité, un partage entre 2 et 4 ; et en revue et évolution, surtout 1 ou 2. Les vérifications de preuves sont révélatrices. Onze équipes ont revendiqué le niveau 3 pour l'usage dans les décisions, mais quand on leur a demandé de nommer une décision du dernier trimestre qu'une mesure avait éclairée, seules six ont pu le faire. La responsable du programme le note sans jugement, et cela devient un thème : les équipes ont des tableaux de bord et tiennent rarement des revues qui consignent des décisions.

Les prochaines étapes sont petites. Huit équipes choisissent une revue mensuelle avec un journal de décisions. Quatre choisissent d'écrire des définitions pour leurs mesures. Trois choisissent de convenir d'une charte. Six mois plus tard, 14 des 17 étapes convenues sont faites, une est abandonnée avec une raison et deux sont en cours. Une nouvelle évaluation montre la preuve de décision passant de 38 à 71 pour cent des mesures échantillonnées, et le sondage de confiance passant de 54 à 67 pour cent d'accord. Une équipe recule en confiance après une réorganisation, et l'animateur le consigne comme de l'information, non comme un échec. Un an plus tard, le commanditaire demande de nouveau un score unique pour le rapport annuel. La responsable du programme offre un profil d'une page avec des plages, trois thèmes et les étapes d'amélioration achevées. Le commanditaire accepte, et le rapport énonce clairement que l'échelle est un outil de conversation.

## Perspective sectorielle

**Startup.** Une évaluation formelle est probablement excessive. Une courte conversation deux fois par an sur les six dimensions, avec une ou deux petites étapes, suffit. Guettez la crainte que les mesures servent au jugement, car les petites équipes la ressentent vivement.

**Petite entreprise.** Employez les dimensions comme liste de vérification pour un entretien avec le propriétaire et le personnel. Demandez si les quelques mesures que vous gardez répondent à de vraies questions, si les gens savent ce qu'elles signifient et si elles sont employées. Choisissez une étape. Ne passez pas plus d'une heure.

**Grande entreprise.** L'échelle exige un processus léger et cohérent : mêmes dimensions, autoévaluation avec un animateur, séances de calibrage et profils agrégés. Résistez à un bureau central de notation. Reliez les prochaines étapes aux registres d'amélioration, et rapportez aux commanditaires des plages et des thèmes. Gardez-vous de laisser l'échelle devenir un exercice de conformité.

**Gouvernement et secteur public.** Les organes d'audit et de surveillance peuvent demander des scores de maturité. Soyez clair sur la différence entre cet outil interne de conversation et tout cadre formel. Gardez les résultats d'équipe auprès des équipes, fournissez des agrégats à la surveillance et soyez transparent sur ce que l'échelle est et n'est pas (voir le sujet 8.3, Métriques de conformité et d'audit).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont faibles : une heure ou deux par équipe deux fois par an, un animateur, un peu d'analyse et l'effort de mener à bien les étapes d'amélioration. Les coûts plus grands viennent quand le modèle est mal employé, avec des consultants, des bureaux de notation et des classeurs de preuves.

Les retours viennent d'un meilleur ciblage de l'effort. Au lieu de répartir l'investissement entre toutes les dimensions, le programme trouve la dimension limitante et s'y attaque. D'autres retours incluent une reconnaissance plus précoce de la régression, un langage partagé entre équipes et des étapes d'amélioration que les équipes ont choisies et détiennent. Bâtissez le dossier à partir de vos propres données : étapes d'amélioration achevées, évolution de la preuve de décision et des résultats du sondage de confiance, et effort que l'évaluation a demandé. Évitez de citer des affirmations publiées sur les retours de l'amélioration de la maturité sans source traçable ni pertinence pour votre contexte (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **L'insigne de maturité.** Le niveau devient le but. Employez-le comme une conversation, avec des preuves.
- **Un seul nombre global.** Le schéma est perdu et des objectifs apparaissent. Montrez le profil.
- **La notation par des auditeurs.** Les équipes préparent des documents pour jouer. Employez l'autoévaluation avec un animateur.
- **Lier le score au financement.** Le gonflement suit. Gardez l'évaluation séparée.
- **Courir après le niveau le plus haut.** Tous les programmes n'ont pas besoin d'Orchestrer. Choisissez ce qui convient.
- **Évaluer et oublier.** Aucune étape ne suit. Reliez les étapes au registre d'amélioration.
- **Évaluation trop longue.** Le fardeau croît et la qualité baisse. Tenez-la à une heure.
- **Ignorer la régression.** Les programmes reculent après un changement. Réévaluez selon un rythme et après les événements.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Questions et but | Mesures recueillies parce que les données existent | Certaines équipes énoncent les questions qu'elles posent | Publics et questions écrits ; mesures reliées à eux | Couverture des questions revue ; les questions sans réponse suscitent de nouvelles mesures | Les publics, y compris clients et fournisseurs, façonnent les mesures ; les questions évoluent avec les services |
| Définitions et responsabilité | Les définitions varient selon la personne | Certaines écrites ; responsables informels | Catalogue avec définition, source, responsable et limites pour chaque mesure | Exhaustivité des définitions et contestations gérées | Définitions codétenues entre équipes et fournisseurs ; révisées quand elles cessent d'éclairer des décisions |
| Données et outillage | Manuels et fragiles | Quelques flux automatisés | Chaînes de données testées, stock partagé, données portables | Fiabilité, rapprochement et préparation à la sortie gérés | Chaînes de données fédérées avec contrats partagés ; sources améliorées à partir des retours |
| Usage dans les décisions | Chiffres affichés, rarement employés | Employés dans certaines revues | Revues régulières qui consignent les décisions | Preuve de décision suivie et suivie d'action | Décisions reliées aux résultats entre équipes ; apprentissage partagé |
| Confiance et sécurité | Peur ou indifférence | Assurances verbales | Charte écrite ; vues individuelles désactivées ; sondage de sécurité | Violations examinées au grand jour ; signaux de franchise gérés | Confiance routinière ; programme façonné par le personnel et les partenaires |
| Revue et évolution | Aucune | Nettoyage occasionnel | Revue périodique avec les équipes ; règle de retrait | Étapes d'évaluation financées et achevées | Le programme s'améliore continuellement, avec des changements venus de tous |

## Liste de vérification

- [ ] Les six dimensions sont convenues, et les descriptions de niveaux sont adaptées à notre contexte.
- [ ] Chaque équipe s'évalue elle-même dans une discussion d'environ une heure, avec un animateur.
- [ ] Chaque niveau revendiqué est appuyé par un exemple ou une vérification par échantillon.
- [ ] Les résultats sont montrés sous forme de profils et de plages, et jamais comme un score moyenné unique ou un classement.
- [ ] Les résultats d'une équipe restent auprès de l'équipe, et l'agrégat est partagé avec les commanditaires.
- [ ] L'évaluation n'est liée ni au financement, ni à la position, ni aux évaluations de performance, et cela est écrit.
- [ ] Chaque équipe convient d'une ou deux petites prochaines étapes, avec un responsable et une date.
- [ ] Les prochaines étapes sont suivies dans le registre d'amélioration.
- [ ] La réévaluation a lieu au moins deux fois par an et après les événements majeurs.
- [ ] Le modèle lui-même est revu chaque année avec les équipes.

## Prompts d'IA

**Préparez une conversation d'autoévaluation.**

```text
Préparez un plan d'animation d'une heure pour l'autoévaluation par une équipe de
son programme de métriques sur six dimensions : questions et but, définitions et
responsabilité, données et outillage, usage dans les décisions, confiance et
sécurité, et revue et évolution. Employez cinq niveaux : Initier, Développer,
Standardiser, Gérer, Orchestrer. Incluez le marquage privé, la comparaison, les
questions de preuves et la convention d'une ou deux petites prochaines étapes.
Ne produisez pas de score. Énumérez vos hypothèses.
```

**Transformez une dimension faible en étapes.**

```text
Notre équipe se cote au niveau [n] sur [dimension] de son programme de
métriques. Preuves : [paste]. Suggérez trois petites étapes, chacune pouvant
être achevée en un trimestre, qui pourraient nous rapprocher du niveau [n+1].
Pour chaque étape, décrivez le responsable, l'effort, le bénéfice probable et la
manière dont nous saurions qu'elle a fonctionné. Ne promettez pas de résultats.
Énumérez vos hypothèses et vos risques.
```

**Vérifiez les preuves d'un niveau revendiqué.**

```text
Une équipe revendique le niveau [n] sur [dimension] et donne ces preuves :
[paste]. Agissez comme un collègue curieux. Listez des questions pour éprouver si
les preuves soutiennent l'affirmation, quels exemples seraient convaincants et
quels signes suggéreraient que l'affirmation est optimiste. Ne jugez pas
l'équipe. Énumérez vos hypothèses.
```

**Résumez des profils sans classer.**

```text
Voici des décomptes agrégés d'équipes à chaque niveau pour chaque dimension :
[paste]. Rédigez un résumé d'une demi-page pour les commanditaires qui décrit la
plage, trois thèmes communs et les étapes d'amélioration que les équipes ont
choisies. Ne classez pas les équipes, ne produisez pas de score unique et ne
revendiquez pas de causes sans preuves. Listez les réserves sur l'autoévaluation.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour relier les mesures du programme aux dimensions de maturité et à leurs garde-fous associés.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une évaluation de maturité rapporte des profils, garde les résultats auprès des équipes et évite un score unique.

## Points clés à retenir

- Employez l'échelle commune à cinq niveaux comme outil de conversation, jamais comme insigne, classement ou certification.
- Rapportez un profil sur six dimensions et non un score moyenné unique.
- Évaluez avec les équipes, demandez des preuves et gardez les résultats de chaque équipe auprès de l'équipe.
- Choisissez de petites prochaines étapes dans la dimension qui limite les autres, souvent la confiance et les définitions.
- Suivez les étapes dans le registre d'amélioration, et réévaluez régulièrement car les programmes régressent.
- Plus haut n'est pas toujours mieux, et les résultats comptent plus que les niveaux.

## Références et lectures complémentaires

1. Paulk, M., et al., *Capability Maturity Model for Software, Version 1.1*, Software Engineering Institute, Carnegie Mellon University, 1993.
2. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
3. ISO/IEC 33001, *Information technology: Process assessment: Concepts and terminology*, International Organization for Standardization, 2015.
4. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
5. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model).
8. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
9. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
