# Métriques de changement organisationnel et d'adoption

**Un changement s'est enraciné quand les gens font la chose nouvelle pour les raisons pour lesquelles elle devait être faite et que le résultat s'améliore ; mesurez donc le but et l'effet, non la présence de rituels, et gardez le rythme du changement à un niveau que les gens peuvent soutenir.**

## Résumé et motivation

Les organisations adoptent tout le temps de nouvelles façons de travailler : un nouveau processus de gestion des services, une chaîne de livraison, une autre structure d'équipe, un ensemble de pratiques agiles, un cadre de gestion des incidents. Les annonces sont faciles. La vraie question est de savoir ce qui change dans le comportement quotidien, et ce qui compte est de savoir si le bénéfice visé a suivi. Beaucoup de programmes déclarent un succès parce que la formation a été donnée, que les outils ont été installés et que le nouveau vocabulaire est en usage, alors que le travail a le même aspect et que les résultats n'ont pas bougé.

Les principes du Manifeste agile disent que les meilleures architectures, exigences et conceptions émergent d'équipes auto-organisées, et que les changements d'exigences sont les bienvenus. Ils disent aussi de bâtir les projets autour d'individus motivés et de leur faire confiance, et de maintenir indéfiniment un rythme constant. Ces principes sont un argument permanent contre l'imposition de pratiques d'en haut et la mesure de la conformité. Ils orientent vers une autre approche du changement : associer les gens en continu, laisser la façon de travailler évoluer et la juger par les résultats.

Une idée de mise en garde issue de la culture logicielle est le culte du cargo. La [programmation par culte du cargo](https://en.wikipedia.org/wiki/Cargo_cult_programming) décrit l'inclusion rituelle de code ou de pratiques qui ne servent à rien, copiés d'ailleurs sans compréhension. L'exposé de Richard Feynman sur la « science du culte du cargo » a employé une image voisine pour décrire un travail qui a la forme extérieure de la chose réelle sans sa substance. Appliqué aux façons de travailler, le culte du cargo est l'équipe qui tient toutes les réunions, emploie tous les termes et remplit tous les tableaux, et qui ne livre pas en continu, ne collabore pas avec ses parties prenantes et ne s'améliore pas. Une approche de [culte du cargo](https://en.wikipedia.org/wiki/Cargo_cult) confond la forme d'une pratique avec son but. Les métriques de ce sujet sont conçues pour distinguer les deux.

Plusieurs idées issues de l'étude du changement aident.

- **Le changement est un problème de [changement organisationnel](https://en.wikipedia.org/wiki/Organizational_change) autant que technique.** La [conduite du changement](https://en.wikipedia.org/wiki/Change_management) traite le côté humain : la sensibilisation, le désir, la connaissance, la capacité et le renforcement sont parmi les éléments couramment employés. Des modèles comme les huit étapes de John Kotter et l'ADKAR de Prosci offrent des vocabulaires, et aucun n'est une garantie.
- **Les gens résistent souvent au changement pour de bonnes raisons.** La [résistance au changement](https://en.wikipedia.org/wiki/Resistance_to_change) peut signaler un vrai problème dans la proposition, une menace pour quelque chose que les gens valorisent ou de la fatigue. Traitez-la comme de l'information.
- **L'adoption est un processus dans le temps.** La théorie de la [diffusion des innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations) décrit comment de nouvelles pratiques se répandent dans un système social, des premiers adoptants à la majorité, par l'influence et l'observation.
- **La culture façonne ce qui s'enracine.** La [culture organisationnelle](https://en.wikipedia.org/wiki/Organizational_culture), les hypothèses et comportements partagés d'un groupe, détermine quels changements semblent naturels et lesquels sont rejetés.
- **L'observation change le comportement.** L'[effet Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) est la tendance des gens à modifier leur comportement parce qu'ils sont observés. Un projet pilote qui montre un excellent résultat sous étroite attention peut ne pas tenir à grande échelle.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) est particulièrement pertinent pour la transformation : quand l'adoption est un objectif, les équipes adoptent la forme. Un tableau de bord des « équipes qui emploient le nouveau processus » assorti d'un mandat montrera une forte adoption et peu de changement (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Ce sujet rassemble les mesures précédentes de résultats (voir le sujet 6.5, Réalisation de la valeur et résultats métier) et d'amélioration (voir le sujet 9.5, Métriques d'amélioration continue) comme preuve qu'un changement a fonctionné.

## Principes clés

- **Juger un changement par son résultat, non par ses rituels.** La preuve de l'adoption est un meilleur résultat.
- **Rendre explicite le but de chaque pratique.** Si personne ne peut le dire, c'est un candidat au culte du cargo.
- **Associer continuellement les personnes touchées.** Concevez avec elles, non pour elles.
- **Préférer l'adoption volontaire et l'évolution aux mandats.** Les équipes adaptent les pratiques à leur contexte.
- **Limiter la charge de changement.** Les gens ne peuvent en absorber qu'un certain montant, et un rythme constant inclut le changement.
- **Traiter la résistance comme des données.** Écoutez ce qu'elle dit de la proposition.
- **Comparer honnêtement.** Employez des groupes de comparaison, et méfiez-vous des résultats qui n'apparaissent que sous observation.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Clarté du but | Part des membres de l'équipe qui peuvent énoncer avec leurs mots le but d'une pratique et une façon de savoir si elle fonctionne | membres donnant un but et un indicateur clairs lors d'une courte vérification anonyme / membres interrogés, au niveau de l'équipe | pourcentage | Courte vérification anonyme, agrégée par équipe | Conduite du changement organisationnel ; amélioration continue | Compréhension par l'équipe de la raison de sa façon de travailler | Trimestrielle |
| Étendue de l'adoption d'une pratique | Part des équipes qui emploient une pratique définie, selon un comportement observable et non la présence | équipes montrant le comportement défini dans la dernière période, confirmé par l'équipe et un observateur / équipes visées | pourcentage | Autoévaluation de l'équipe confirmée par l'observation | Conduite du changement organisationnel | Diffusion d'une pratique | Trimestrielle |
| Évolution des résultats par rapport à une comparaison | Variation d'une mesure de résultat pour les équipes adoptantes par rapport à des équipes semblables non adoptantes sur la même période | variation du résultat des adoptants moins variation des équipes de comparaison | unités de résultat | Mesures de résultats par équipe (flux, stabilité, expérience) | Amélioration continue ; mesure et rapport | Apprentissage tiré des expériences | Trimestrielle |
| Charge de changement | Nombre de changements significatifs touchant simultanément une équipe | nombre d'initiatives de changement significatives qui demandent à une équipe de changer sa façon de travailler dans la période, par équipe | nombre | Portefeuille de changements et apport des équipes | Conduite du changement organisationnel ; maîtrise des changements | Rythme soutenable | Trimestrielle |
| Taux d'implication des parties prenantes | Part des initiatives de changement dans lesquelles les personnes touchées ont participé à la conception et à la revue | initiatives avec une implication consignée des personnes touchées / initiatives | pourcentage | Enregistrements d'initiatives et confirmation des équipes touchées | Conduite du changement organisationnel ; engagement des parties prenantes | Implication continue des parties prenantes | Trimestrielle |
| Part d'adoption volontaire | Part des équipes adoptantes qui ont choisi la pratique, par opposition à celles à qui elle a été imposée | équipes adoptantes déclarant avoir choisi la pratique / équipes adoptantes | pourcentage | Déclarations des équipes | Conduite du changement organisationnel | Équipes auto-organisées | Annuelle |
| Taux de retour en arrière | Part des équipes qui ont abandonné une pratique dans l'année suivant son adoption | équipes ayant arrêté dans les 12 mois / équipes ayant adopté | pourcentage | Enregistrements des équipes dans le temps | Conduite du changement organisationnel ; amélioration continue | Pratiques abandonnées parce que peu utiles | Annuelle |

Définissez la pratique par ce que font les équipes et ce qu'elles visent, non par son nom. L'étendue de l'adoption ne compte une équipe que lorsque son comportement correspond à la définition et que l'équipe et un observateur sont d'accord. L'évolution des résultats emploie des équipes de comparaison choisies d'avance comme semblables par le type de service et le point de départ, et énonce ce qui a changé d'autre. La charge de changement compte les initiatives qui demandent à l'équipe de modifier son travail, non les mises à jour de routine. Toutes les mesures sont au niveau de l'équipe ou de l'initiative, jamais individuelles.

## Recommandations

### Partir du but et des personnes

**1. Énoncez le but et l'indicateur avant la pratique.** Pour chaque changement proposé, écrivez quel problème il résout, qui le ressent, quel résultat devrait s'améliorer et comment vous le saurez. Si le but est « être agile » ou « adopter le cadre », demandez de nouveau. Les équipes suivront plus volontiers une pratique quand elles voient à quoi elle sert. C'est la meilleure protection contre le culte du cargo.

**2. Associez les personnes touchées à la conception du changement.** Demandez à celles qui font le travail ce qui fait mal, ce qu'elles essaieraient et ce qu'elles craignent. Concevez avec quelques-unes, testez avec un petit groupe et écoutez. L'implication continue des parties prenantes est un but agile essentiel, et elle s'applique aux programmes de changement autant qu'aux produits. Consignez qui a participé.

**3. Écoutez la résistance.** Quand les gens résistent, demandez ce qu'ils voient que vous ne voyez pas. Les réponses possibles incluent un défaut de la proposition, une capacité manquante, un coût non reconnu ou un changement antérieur jamais terminé. Consignez les préoccupations et les réponses, et ajustez le changement là où elles ont raison.

### Introduire le changement de façon à pouvoir en tirer des leçons

**4. Menez un projet pilote avec une comparaison.** Essayez le changement avec une ou deux équipes volontaires, et observez un groupe comparable qui ne change pas. Comparez les résultats sur la même période. Gardez à l'esprit l'effet Hawthorne, et prolongez le projet pilote assez longtemps pour que la nouveauté s'estompe. Un [projet pilote](https://en.wikipedia.org/wiki/Pilot_project) est un test à petite échelle, et sa valeur tient à ce qu'il enseigne avant le passage à l'échelle ; énoncez donc d'avance ce que vous espérez apprendre et ce qui vous ferait arrêter.

**5. Préférez l'adoption volontaire, et laissez les pratiques évoluer.** Quand les équipes choisissent une pratique parce qu'elle résout un problème pour elles, elles l'adaptent et la gardent. Quand elle est imposée, elles la jouent. Offrez le but, les preuves et le soutien, et laissez les équipes décider de la manière de l'appliquer. Permettez la variation locale, et apprenez-en. Suivez l'adoption volontaire et les retours en arrière pour voir si une pratique s'enracine pour les bonnes raisons.

**6. Répandez par l'exemple et la conversation.** L'influence voyage par des personnes respectées et visibles. Partagez des histoires d'équipes qui ont essayé quelque chose et de ce qui s'est passé, y compris les revers. Les communautés de pratique sont un bon canal (voir le sujet 9.4, Métriques de compétences et d'apprentissage). Évitez les classements d'adoption.

### Surveiller la charge

**7. Comptez les changements qui s'abattent sur chaque équipe.** Listez les initiatives qui demandent à une équipe de changer sa façon de travailler : nouveaux outils, nouveaux processus, réorganisations, exigences de rapport. Une équipe qui en affronte beaucoup à la fois ne peut les absorber, et la [fatigue du changement](https://en.wikipedia.org/wiki/Change_fatigue) s'installe. Séquencez les initiatives, abandonnez celles de faible valeur et laissez aux équipes la place de terminer un changement avant le suivant. Cela fait partie du maintien d'un rythme soutenable (voir le sujet 9.2, Métriques de satisfaction et de bien-être).

**8. Retirez ce qui ne sert plus.** Pour chaque nouvelle pratique ajoutée, demandez ce qui peut être retiré. Les couches de processus s'accumulent, et chaque couche a un coût. Passez en revue chaque trimestre les rituels qu'une équipe tient et abandonnez ceux dont le but n'est plus servi.

### Mesurer l'adoption par ce qui compte

**9. Définissez l'adoption par le comportement observable et le but.** Décrivez ce qu'une équipe fait différemment quand la pratique s'est enracinée, par exemple « les changements atteignent la production par petites étapes avec des contrôles automatisés, et les utilisateurs sont consultés chaque semaine ». Évaluez par l'observation et la conversation, non en comptant des artefacts comme des tableaux ou des réunions. Demandez aux membres de l'équipe d'expliquer le but.

**10. Comparez les résultats, non la conformité.** Regardez les mesures de flux, de stabilité, d'expérience et de coût des équipes adoptantes par rapport aux équipes de comparaison (voir le sujet 2.8, Métriques DORA). Prenez garde à la causalité : les équipes qui adoptent peuvent être différentes de façons qui influent aussi sur les résultats. Rapportez la comparaison avec ses limites.

**11. Vérifiez l'expérience des personnes.** Une adoption qui augmente la friction ou érode l'autonomie peut se saper elle-même. Employez les sondages éclairs de santé d'équipe et de bien-être pour voir ce que le changement fait ressentir (voir le sujet 9.1, Santé de l'équipe et expérience des développeurs). Demandez ce que le changement a retiré autant que ce qu'il a ajouté.

**12. Soyez honnête dans le rapport.** Rapportez ensemble l'adoption, les résultats, la charge de changement et les retours en arrière, avec l'histoire de ce qui a été appris. Évitez de déclarer un succès quand la forme s'est répandue et que les résultats n'ont pas bougé. Admettez quand une pratique n'a pas convenu, et retirez-la. Une transformation se juge à ce qu'elle a permis, non à l'ampleur de son annonce.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Clarté du but | Coacher les gens à réciter le but ; poser des questions tendancieuses | Vérification anonyme ; demander un exemple de la manière dont ils sauraient ; comparer à l'évolution des résultats |
| Étendue de l'adoption d'une pratique | Compter les tableaux et les réunions ; équipes qui jouent pour l'observateur | Définir par le comportement et le but ; observation par quelqu'un d'extérieur à l'équipe ; évolution des résultats |
| Évolution des résultats par rapport à une comparaison | Choisir un groupe ou une période de comparaison favorable ; omettre d'autres changements | Choisir d'avance la comparaison et la période ; lister les autres changements ; montrer l'incertitude |
| Charge de changement | Scinder une initiative en petits morceaux ; ne pas compter les changements qui arrivent de façon informelle | Compter selon l'effet sur le travail de l'équipe ; demander aux équipes de lister ce qu'elles absorbent |
| Taux d'implication des parties prenantes | Inviter les gens à une séance d'information et appeler cela de l'implication ; ne consigner que la présence | Confirmation par les équipes touchées qu'elles ont influencé la conception ; consigner les changements faits en réponse |
| Part d'adoption volontaire | Présenter un mandat comme un choix ; équipes disant avoir choisi alors qu'elles se sentaient obligées | Rapport anonyme ; demander ce qui serait arrivé si elles avaient refusé |
| Taux de retour en arrière | Rendre coûteux ou caché l'abandon d'une pratique ; rebaptiser la pratique abandonnée | Revoir les raisons de l'abandon ; permettre un retrait sûr |

Une lecture saine est une pratique que les équipes peuvent expliquer et choisir, une adoption mesurée par le comportement, des résultats qui s'améliorent par rapport à la comparaison, une charge de changement gérable, quelques retours en arrière avec de bonnes raisons, et des gens qui disent que leur voix a façonné le changement.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Déploiement imposé | Rapide, cohérent | Conformité sans but ; ressentiment ; culte du cargo |
| Adoption volontaire | Adoptants motivés ; adéquation locale | Plus lente ; inégale ; certaines équipes n'adoptent jamais |
| Changement en bloc | Événement clair | Risque élevé ; lourde charge ; difficile d'en tirer des leçons |
| Projets pilotes échelonnés avec comparaison | Apprendre avant de passer à l'échelle | Plus lents ; les projets pilotes peuvent ne pas se généraliser |
| Pratiques standard entre équipes | Coordination et soutien plus faciles | Mal adaptées à certaines équipes |
| Variation locale | Adaptée au contexte | Plus difficile à comparer et à soutenir |
| Tableaux de bord d'adoption | Progrès visible | Récompensent la forme de l'adoption |
| Comparaison des résultats | Signal honnête | Difficile à isoler ; plus lente à apparaître |

La réponse en prose est de mener des projets pilotes avec comparaison, d'offrir les pratiques avec leurs buts, de laisser les équipes choisir et adapter, de compter la charge de changement et de juger par les résultats, en n'employant une norme que là où la coordination l'exige.

## Questions à discuter avec votre équipe

**1. Quelle pratique suivons-nous dont personne ne peut expliquer le but ?**
Chaque personne en nomme une. Pour chacune, discutez du problème qu'elle devait résoudre et de si elle le fait encore. L'animateur doit consigner les réponses sans défensive. Convenez de garder, de changer ou d'abandonner deux d'entre elles.

**2. Quels changements nous tombent dessus en ce moment, et lesquels pourraient attendre ?**
Listez chaque initiative qui nous demande de changer notre façon de travailler. Comptez-les. Demandez lesquelles ajoutent de la valeur et lesquelles ajoutent de la charge. Proposez aux commanditaires une séquence ou l'arrêt de l'une d'elles.

**3. À quoi avons-nous dit non lors du dernier changement, et quelqu'un écoutait-il ?**
Rappelez la résistance ou les préoccupations. Ont-elles été entendues, et le changement s'est-il adapté ? Discutez de la manière de soulever des préoccupations de façon à être reçu. Convenez de la façon dont l'équipe donnera son retour sur le prochain changement.

**4. Si ce changement a fonctionné, qu'est-ce qui serait différent dans nos résultats, et comment le saurions-nous ?**
Rédigez l'indicateur et la comparaison. Demandez ce qui change d'autre en même temps. Si personne ne peut le dire, le changement manque d'un but. Convenez d'une ligne de base maintenant.

**5. Comment saurions-nous si une nouvelle pratique n'était que pour la montre ?**
Pensez aux signes : personne n'emploie la production, la réunion n'a pas de décision, le tableau est mis à jour pour un public. Discutez de la manière de vérifier cela. Convenez d'un moment pour passer en revue les rituels que l'équipe tient.

**6. Quelle pratique avons-nous abandonnée, et qu'avons-nous appris en l'abandonnant ?**
Rappelez-en une. Discutez de si l'abandonner était sûr, et de ce qui l'a remplacée. Traitez la réponse comme la preuve que les équipes peuvent s'adapter.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison vivent avec les changements. Elles devraient demander le but, s'impliquer dans la conception, mener de petites expériences et dire quand une pratique ne convient pas. Elles ont le droit de faire évoluer leur façon de travailler, et le devoir de livrer des résultats qui justifient leurs choix.

### Équipes de service et d'exploitation

Les équipes d'exploitation absorbent des changements de processus de toutes parts, souvent par-dessus du travail imprévu. Elles devraient consigner la charge de changement, demander un séquencement et participer aux projets pilotes où leur point de vue compte. Elles sont bien placées pour remarquer quand un nouveau processus ajoute des étapes sans valeur.

### Direction et gouvernance

Les dirigeants parrainent les changements et les imposent souvent. Ils devraient énoncer les buts et les indicateurs, associer les personnes touchées, préférer l'adoption volontaire quand c'est possible, limiter la charge de changement et être prêts à retirer ce qui ne fonctionne pas. La gouvernance devrait regarder les résultats par rapport à la comparaison, la charge de changement par équipe et les taux de retour en arrière, et se méfier de chiffres d'adoption uniformément élevés.

### Clients et utilisateurs

Les utilisateurs vivent les effets du changement dans la qualité du service, la communication et la stabilité. Ils peuvent être associés à la conception des changements qui les touchent, et leurs retours sont une preuve de l'utilité du changement. Ils supportent aussi le coût des transformations qui détournent les équipes du service.

## En pratique : un exemple d'ITIL agile

La division technologique d'une entreprise multinationale de logistique compte 30 équipes. Il y a deux ans, elle a lancé un programme de transformation pour adopter un ensemble standard de façons de travailler, et le tableau de bord du programme montre 27 équipes sur 30 « adoptantes ». Les chiffres ci-dessous sont illustratifs.

La nouvelle responsable des pratiques d'ingénierie doit dire si le programme a fonctionné. Elle regarde au-delà du tableau de bord. Une courte vérification anonyme montre que seuls 41 pour cent des membres d'équipe peuvent énoncer le but des principales pratiques et une façon de savoir si elles fonctionnent. L'observation de huit équipes montre que cinq tiennent les réunions prescrites et mettent à jour les tableaux, et que deux de ces cinq publient encore chaque trimestre avec une approbation manuelle. En comparant les 12 équipes au comportement de pratique le plus fort avec 12 équipes semblables qui ne l'avaient pas, le temps de cycle médian et le taux d'échec des changements sont semblables, et la satisfaction envers la façon de travailler est plus basse parmi les équipes soumises à la conformité la plus forte. L'équipe moyenne absorbe cinq initiatives qui lui demandent de changer sa façon de travailler, trois équipes en affrontant huit ou plus. 22 pour cent des équipes ont adopté volontairement. Parmi les équipes qui ont adopté une pratique de chaîne de livraison il y a deux ans, 30 pour cent l'ont discrètement arrêtée.

La responsable des pratiques d'ingénierie recadre le programme avec les équipes. Le but de chaque pratique est écrit en langage clair avec un indicateur, et les équipes sont libres d'adopter, d'adapter ou de refuser, avec une conversation sur pourquoi. La division publie la charge de changement par équipe et demande aux commanditaires de séquencer leurs initiatives ; quatre sont suspendues et deux fusionnées. Des équipes volontaires mènent un projet pilote d'une pratique de mise en production par petites étapes avec contrôles automatisés, avec un groupe de comparaison choisi d'avance, et les résultats sont partagés sous forme d'histoires et de chiffres. Des parties prenantes du métier et de l'exploitation participent aux séances de conception de deux changements de processus. Le rapport passe des décomptes d'adoption à l'évolution des résultats, à la charge de changement et aux retours en arrière.

Un an plus tard, 71 pour cent des membres d'équipe peuvent énoncer le but des pratiques qu'ils emploient. Les équipes pilotes réduisent le temps de cycle médian de 30 pour cent contre une réduction de 6 pour cent dans le groupe de comparaison, l'effet Hawthorne étant pris en compte par une prolongation du projet pilote de deux mois. La charge de changement moyenne tombe à trois initiatives par équipe. L'adoption volontaire monte à 64 pour cent, et les retours en arrière sont de 9 pour cent, avec les raisons consignées. Le directeur de l'exploitation demande un objectif de 100 pour cent d'adoption d'ici la fin de l'année. La responsable des pratiques d'ingénierie propose de suivre plutôt les résultats et la charge, expliquant qu'un 100 pour cent imposé a produit l'apparence antérieure de succès et le retour en arrière antérieur. La décision est consignée, et le tableau de bord abandonne le décompte d'adoption.

## Perspective sectorielle

**Startup.** Le changement est constant et les pratiques viennent des fondateurs et des premières recrues. Gardez explicite le but de chaque pratique et abandonnez tout ce qui n'aide pas. Résistez à la copie du processus d'une grande entreprise avant d'en avoir les problèmes.

**Petite entreprise.** Le propriétaire décide souvent, et le changement est personnel. Expliquez pourquoi, associez les quelques personnes touchées, essayez un changement à la fois et vérifiez si la douleur visée s'est apaisée. Évitez les achats de cadres qui dépassent la capacité d'absorption de l'équipe.

**Grande entreprise.** L'échelle invite aux normes, aux programmes et aux consultants, et avec eux au risque de culte du cargo en volume. Offrez des pratiques partagées avec leurs buts, soutenez l'adoption volontaire, gérez le portefeuille de changements selon la charge des équipes et comparez honnêtement les résultats. Employez des communautés de pratique pour répandre ce qui fonctionne.

**Gouvernement et secteur public.** Le changement peut être dicté par la législation, la restructuration et les cycles politiques, avec peu de choix. Là où le choix est limité, soyez transparent à ce sujet, concentrez-vous sur le but et le résultat et associez tôt le personnel et les utilisateurs. Des protections du personnel et des obligations de consultation peuvent s'appliquer, et la redevabilité publique rend précieux le rapport honnête de ce qui n'a pas fonctionné (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts d'une bonne mesure du changement sont faibles : de courtes vérifications, des données de comparaison tirées de mesures existantes, du temps d'observation et une liste d'initiatives par équipe. Le coût le plus grand est la volonté d'entendre qu'un programme favori ne fonctionne pas.

Les retours viennent de ce qu'on ne gaspille pas le très grand coût des transformations ratées : formation, consultants, outils et temps de nombreuses personnes, plus le coût de la fatigue du changement et de la confiance perdue. Bâtissez le dossier à partir de votre propre historique : le coût d'un programme passé et les résultats qu'il a fait bouger, le nombre d'initiatives en concurrence pour chaque équipe et la proportion des pratiques adoptées abandonnées par la suite. Évitez de citer des statistiques sur les taux d'échec des transformations à moins de pouvoir retracer leur source et leur méthode. Incluez le bénéfice d'une correction de cap plus précoce grâce aux projets pilotes avec comparaison (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Rapporter l'adoption comme un succès.** La forme peut se répandre sans la substance. Rapportez les résultats par rapport à la comparaison.
- **Imposer des pratiques.** Cela produit du rituel et du ressentiment. Offrez les buts et laissez les équipes choisir.
- **Copier le processus d'une autre entreprise.** On importe la forme, non les conditions qui l'ont fait fonctionner. Partez de vos problèmes.
- **Trop de changements à la fois.** La charge dépasse la capacité. Comptez et séquencez.
- **Écarter la résistance.** Vous perdez de l'information. Écoutez et adaptez.
- **Des projets pilotes sans comparaison.** Les effets de nouveauté induisent en erreur. Employez une comparaison et une période plus longue.
- **Ne jamais rien retirer.** Les couches de processus s'accumulent. Retirez à mesure que vous ajoutez.
- **Théâtre du succès.** Des histoires sans chiffres, ou des chiffres sans histoires, cachent la vérité. Rapportez les deux, honnêtement.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| But et implication | Pratiques annoncées | Buts énoncés dans des présentations | But et indicateur écrits pour chaque changement ; personnes touchées consultées | Implication et clarté du but mesurées ; résistance consignée et traitée | Changement conçu avec les utilisateurs et les équipes dans toute l'organisation et chez les partenaires |
| Introduction et preuves | Déploiements en bloc | Projets pilotes sans comparaison | Projets pilotes avec groupes de comparaison ; adoption définie par le comportement | Évolution des résultats et retours en arrière suivis ; limites des preuves rapportées | Apprentissage à l'échelle du portefeuille sur les changements qui fonctionnent, partagé ouvertement |
| Charge et soutenabilité | Aucune vue de la charge de changement | Initiatives listées | Charge de changement comptée par équipe et séquencée | Charge gérée avec la capacité ; pratiques retirées | Changement planifié conjointement avec la capacité, le bien-être et les objectifs de livraison |

## Liste de vérification

- [ ] Chaque changement a un but écrit, un indicateur nommé et une ligne de base.
- [ ] Les personnes touchées ont participé à la conception, et leur apport est consigné.
- [ ] Les préoccupations et la résistance sont consignées avec leurs réponses.
- [ ] Les projets pilotes ont un groupe de comparaison et une période assez longue pour que la nouveauté s'estompe.
- [ ] L'adoption est définie par le comportement observable et le but.
- [ ] L'adoption volontaire et les retours en arrière sont suivis, avec leurs raisons.
- [ ] La charge de changement par équipe est comptée, et les initiatives sont séquencées.
- [ ] Les pratiques sont revues en vue d'un retrait au moins une fois par an.
- [ ] L'évolution des résultats est rapportée avec ses limites.
- [ ] Aucun objectif n'exige qu'un pourcentage donné d'équipes adopte une pratique.

## Prompts d'IA

**Rédigez un but et un indicateur pour un changement.**

```text
Nous prévoyons d'introduire [change] pour [teams] dans [type of organization].
Rédigez un but d'un paragraphe en langage clair (le problème, qui le ressent, le
résultat qui devrait s'améliorer), un indicateur avec une ligne de base à
consigner maintenant, une façon de comparer avec des équipes semblables qui ne
changent pas et des signes que la pratique est devenue un rituel sans but.
N'inventez pas de preuves. Énumérez vos hypothèses et vos questions pour les
équipes touchées.
```

**Comptez et séquencez la charge de changement.**

```text
Voici une liste d'initiatives qui demanderont à [team or group] de changer sa
façon de travailler dans les [period] à venir : [paste with sponsors, size, and
dates]. Comptez la charge par équipe, repérez les conflits et les dépendances,
et proposez une séquence qui laisse de la place au travail et à un rythme
soutenable. Suggérez lesquelles pourraient être combinées, reportées ou
abandonnées. Ne supposez pas que nous pouvons tout faire. Énumérez vos
hypothèses.
```

**Concevez un projet pilote avec comparaison.**

```text
Concevez un projet pilote de [change] avec [number] équipes volontaires et un
groupe de comparaison de [number] équipes semblables. Proposez les mesures de
résultats et les lignes de base, la durée (y compris le temps pour que la
nouveauté s'estompe), la manière de choisir d'avance le groupe de comparaison,
ce qui pourrait brouiller le résultat et ce qui nous ferait passer à l'échelle,
adapter ou arrêter. Ne revendiquez pas de résultats d'autres organisations.
Énumérez vos hypothèses.
```

**Vérifiez le culte du cargo.**

```text
Voici une pratique que nos équipes suivent : [describe, with its artifacts and
meetings]. Posez-moi dix questions que je pourrais adresser aux membres d'équipe
pour voir s'ils comprennent le but, peuvent nommer le résultat qu'elle devrait
améliorer et l'adapteraient à leur contexte. Ajoutez des signes dans les
artefacts qui suggèrent que la pratique est jouée pour la montre. Ne jugez pas
d'individus. Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique d'adoption ou de changement.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique d'adoption mesure le comportement et le résultat, avec son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Jugez un changement par son résultat par rapport à une comparaison, non par la diffusion de ses rituels.
- Écrivez le but et l'indicateur avant la pratique, et vérifiez que les gens peuvent l'expliquer.
- Associez continuellement les personnes touchées, et traitez la résistance comme de l'information.
- Préférez l'adoption volontaire, laissez les pratiques évoluer et suivez les retours en arrière.
- Comptez la charge de changement de chaque équipe, et gardez-la dans les limites d'un rythme soutenable.
- Rapportez honnêtement, y compris ce qui n'a pas fonctionné, et retirez les pratiques qui ne servent plus.

## Références et lectures complémentaires

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Kotter, J. P., *Leading Change*, Harvard Business School Press, 1996.
3. Hiatt, J. M., *ADKAR: A Model for Change in Business, Government and our Community*, Prosci Learning Center Publications, 2006.
4. Schein, E. H., *Organizational Culture and Leadership*, 5th ed., Wiley, 2016.
5. Feynman, R. P., "Cargo Cult Science," Caltech commencement address, 1974, reprinted in *Surely You're Joking, Mr. Feynman!*, W. W. Norton, 1985.
6. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
7. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
8. Wikipedia, [Cargo cult programming](https://en.wikipedia.org/wiki/Cargo_cult_programming).
9. Wikipedia, [Cargo cult](https://en.wikipedia.org/wiki/Cargo_cult).
10. Wikipedia, [Organizational change](https://en.wikipedia.org/wiki/Organizational_change).
11. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
12. Wikipedia, [Resistance to change](https://en.wikipedia.org/wiki/Resistance_to_change).
13. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
14. Wikipedia, [Organizational culture](https://en.wikipedia.org/wiki/Organizational_culture).
15. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
18. Wikipedia, [Change fatigue](https://en.wikipedia.org/wiki/Change_fatigue).
