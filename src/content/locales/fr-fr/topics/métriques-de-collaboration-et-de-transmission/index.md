# Métriques de collaboration et de transmission

**Le travail ralentit et la qualité baisse partout où il change de mains ; mesurez donc les transmissions, l'attente entre elles et la dépendance envers des personnes isolées, et employez les chiffres pour réunir les bonnes personnes au lieu de compter qui parle à qui.**

## Résumé et motivation

Les principes du Manifeste agile disent que les gens du métier et les développeurs doivent travailler ensemble quotidiennement tout au long d'un projet. L'observation sous-jacente est ancienne et robuste : la plus grande part du retard dans une organisation de service ne vient pas de gens qui travaillent lentement. Elle vient du travail qui attend entre les personnes. Une demande passe du centre de services à une équipe de deuxième niveau, puis à une équipe d'application, puis à un administrateur de base de données, et à chaque étape elle rejoint une file, perd du contexte et risque d'être renvoyée. Les personnes concernées peuvent chacune être rapides. Le système est lent.

La gestion des services informatiques (ITSM), telle que codifiée par ITIL, organise depuis longtemps le soutien en niveaux et en équipes, l'escalade étant le mécanisme pour confier un problème à quelqu'un qui peut le résoudre. Cette structure a des avantages : spécialisation, responsabilité claire et accès contrôlé. Elle crée aussi des transmissions, et les transmissions ont un coût. La pratique agile et DevOps répond en bâtissant des équipes pluridisciplinaires qui portent davantage du travail de bout en bout, et en encourageant la collaboration en temps réel. Les deux traditions arrivent à des conclusions semblables : moins de transmissions, des attentes plus courtes entre elles et des personnes qui peuvent résoudre le problème qui y travaillent ensemble.

Plusieurs idées aident à la mesure.

- **Transmissions et files d'attente.** Chaque fois que le travail passe d'une équipe à une autre, il attend typiquement dans une file. Le temps passé à attendre est souvent bien plus grand que le temps passé à travailler. C'est pourquoi l'efficacité du flux, introduite plus tôt, est d'ordinaire faible (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux). Un [goulot d'étranglement](https://en.wikipedia.org/wiki/Bottleneck_(production)) est un point de capacité limitée dans un processus, et il détermine le débit de l'ensemble.
- **La structure façonne la communication.** La [loi de Conway](https://en.wikipedia.org/wiki/Conway%27s_law) énonce que les organisations conçoivent des systèmes qui reflètent leurs propres structures de communication. L'inverse est aussi praticable : si vous voulez un système avec moins de dépendances, disposez les équipes de façon à réduire les dépendances entre elles. Les frontières d'équipes créent des transmissions, et les transmissions façonnent l'architecture.
- **Dépendances.** Une [dépendance](https://en.wikipedia.org/wiki/Dependency_(project_management)) est une relation où un travail ne peut avancer avant qu'un autre se termine. Les dépendances entre équipes sont une source majeure de retard, et elles peuvent être cartographiées, comptées et réduites.
- **Les coûts de coordination croissent avec les personnes.** La [loi de Brooks](https://en.wikipedia.org/wiki/Brooks%27s_law), tirée des essais de Frederick Brooks sur les projets logiciels, observe qu'ajouter des personnes à un projet en retard peut le retarder davantage, en partie à cause du surcroît de communication. Plus de monde dans une conversation n'est pas automatiquement mieux.
- **Dépendance envers des individus.** Le [facteur d'autobus](https://en.wikipedia.org/wiki/Bus_factor) est le nombre de personnes qui devraient être indisponibles pour arrêter un projet, d'ordinaire employé pour signaler le risque quand la connaissance réside dans une seule tête. C'est une propriété de la répartition des connaissances, non une cote donnée à une personne.

Les mesures de collaboration ont un côté sombre. Compter les messages, les réunions ou les liens de réseau comme mesure de collaboration est facile et tentant, et cela glisse vite vers la surveillance des communications des gens. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique au groupe et à la vie privée : quand la « collaboration » devient un objectif, les gens produisent de l'activité visible, et quand elle devient de la surveillance, ils cessent de parler ouvertement (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Les mesures ici regardent donc les éléments de travail, les transmissions et les dépendances, ainsi que des schémas au niveau de l'équipe. Elles ne lisent pas les messages et ne classent pas les individus.

Ce sujet se relie aux mesures de flux de la partie 2, aux mesures d'incidents et de demandes de la partie 3 et aux transmissions avec les fournisseurs de la partie précédente (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

## Principes clés

- **Mesurer le travail, non les conversations.** Les transmissions, les attentes et les dépendances sont des propriétés des éléments de travail et des équipes.
- **Moins de transmissions valent mieux que des transmissions plus rapides.** La meilleure transmission est celle qui n'a pas lieu.
- **Réunir les gens.** La collaboration en temps réel supprime souvent toute une chaîne d'attente.
- **Rendre les dépendances visibles, et les réduire.** Cartographiez-les, comptez-les et changez les frontières d'équipes ou l'architecture là où elles font le plus mal.
- **Répandre délibérément la connaissance.** Les points uniques de connaissance sont des risques, et le partage est une activité de conception.
- **Protéger la concentration.** Une collaboration qui remplit chaque heure de réunions détruit le temps de faire le travail.
- **Associer continuellement les parties prenantes.** Des questions résolues en quelques heures servent mieux que des réponses recueillies en réunions hebdomadaires.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Nombre de transmissions | Nombre de fois qu'un élément de travail change d'équipe propriétaire avant son achèvement | médiane et 85e percentile des transferts d'équipe à équipe par élément achevé, par type d'élément | transferts par élément | Historique d'affectation de l'ITSM ou du suivi, agrégé par équipe | Gestion des incidents ; gestion des demandes de service ; maîtrise des changements | Équipes pluridisciplinaires portant le travail de bout en bout | Mensuelle |
| Part d'attente après transmission | Part du temps écoulé d'un élément passée à attendre après une transmission avant que le travail reprenne | temps entre la transmission et la première action de l'équipe réceptrice / temps écoulé total, médiane sur les éléments | pourcentage | Horodatages d'affectation et d'activité | Gestion des incidents ; gestion des demandes de service | Efficacité du flux ; temps en file | Mensuelle |
| Taux de réaffectation | Part des éléments passés entre équipes plus de deux fois ou renvoyés à une équipe précédente | éléments réaffectés plus de deux fois ou renvoyés / éléments achevés | pourcentage | Historique d'affectation | Gestion des incidents ; gestion des problèmes | Reprise et travail qui rebondit | Mensuelle |
| Retard dû aux dépendances | Temps que les éléments passent bloqués dans l'attente d'une autre équipe | médiane et 85e percentile des jours dans un état bloqué par une autre équipe, la dépendance étant nommée | jours | État bloqué du suivi et champ de dépendance | Maîtrise des changements ; gestion des mises en production et des déploiements | Âge de l'élément de travail bloqué | Mensuelle |
| Taux de résolution collaborative | Part des incidents résolus par des personnes de plusieurs équipes travaillant ensemble en temps réel sans escalade séquentielle | incidents avec une collaboration en temps réel consignée (par exemple un canal ou un appel partagé) résolus sans transmission supplémentaire / incidents de priorité admissible | pourcentage | Enregistrements d'incidents avec étiquette de collaboration | Gestion des incidents ; gestion des incidents majeurs | Essaimage sur les problèmes | Mensuelle |
| Couverture des connaissances | Part des composants critiques que peuvent exploiter et modifier au moins un nombre énoncé de membres de l'équipe | composants critiques ayant au moins le nombre cible de personnes capables de les exploiter et de les modifier / composants critiques | pourcentage | Carte des compétences et des responsabilités tenue par l'équipe | Gestion des connaissances ; gestion de la continuité de service | Propriété partagée et propriété collective du code | Trimestrielle |
| Délai de réponse des parties prenantes | Temps entre une question d'une équipe à une partie prenante et une réponse utilisable | médiane et 85e percentile des heures entre la question consignée et la réponse consignée | heures | Journal de questions ou champ du suivi pour les questions ouvertes | Gestion des niveaux de service ; gestion des relations avec le métier | Implication continue des parties prenantes | Mensuelle |

Agrégez au niveau de l'équipe, de la file ou du service, et ne rapportez jamais par individu. Le nombre de transmissions exclut les affectations automatiques qui ne changent pas l'équipe propriétaire. La part d'attente commence quand l'élément est affecté à l'équipe réceptrice et s'achève à sa première action consignée. La couverture des connaissances emploie le jugement de l'équipe elle-même sur qui peut exploiter un composant, revu avec l'équipe, et ne classe jamais les individus. Les données de collaboration viennent d'étiquettes et d'enregistrements d'éléments, non de la lecture de messages.

## Recommandations

### Cartographier les transmissions

**1. Dessinez le chemin d'un élément typique.** Choisissez un type courant de demande ou d'incident et retracez son chemin du premier contact à la résolution : chaque équipe, chaque file, chaque attente. Employez l'historique du suivi pour de vrais exemples, non le schéma officiel du processus. La carte montre où le travail attend et où il rebondit. Partagez-la avec les équipes concernées et demandez-leur de repérer le gaspillage qu'elles voient.

**2. Mesurez les transmissions et les attentes à partir de l'historique des éléments de travail.** Employez les horodatages d'affectation et d'activité pour calculer le nombre de transmissions, la part d'attente et le taux de réaffectation pour chaque type d'élément. Regardez la distribution : la plupart des éléments peuvent passer une fois, tandis qu'une longue queue rebondit de nombreuses fois. La queue est là où se trouvent les plus grands retards et le plus de frustration.

**3. Lisez les données avec les personnes qui font le travail.** Un taux élevé de réaffectation peut refléter une responsabilité floue, de l'information manquante ou un triage légitime. Demandez aux équipes avant de conclure. Elles savent pourquoi les éléments rebondissent, et ce qui l'arrêterait.

### Réduire les transmissions et l'attente

**4. Déplacez la capacité vers le travail.** Là où beaucoup d'éléments vont à une deuxième équipe pour une action simple, demandez si la première équipe pourrait recevoir la connaissance, l'accès ou l'automatisation pour la faire. Le libre-service et les guides d'exploitation peuvent supprimer des transmissions entières (voir le sujet 3.7, Métriques de libre-service et d'automatisation). Veillez à ce que le déplacement du travail ne surcharge pas simplement la première équipe.

**5. Employez la collaboration à la place de l'escalade séquentielle.** Pour les incidents complexes ou urgents, réunissez les personnes pertinentes en temps réel, avec une personne qui coordonne, au lieu de faire passer le ticket par des niveaux. Cette pratique, souvent appelée essaimage (swarming), supprime les attentes et la perte de contexte que crée l'escalade par niveaux. Suivez le taux de résolution collaborative, et regardez si les résultats et la satisfaction s'améliorent (voir le sujet 3.4, Métriques des incidents majeurs).

**6. Clarifiez la responsabilité aux frontières.** Pour chaque service et composant, énoncez qui le détient, comment le joindre et ce dont il a besoin lors d'une transmission. Un court modèle d'information requise, convenu avec l'équipe réceptrice, réduit les retours pour détails manquants. Passez en revue les cas de réaffectation pour trouver les lacunes de responsabilité.

**7. Réduisez les dépendances là où elles font le plus mal.** Cartographiez les dépendances entre équipes, comptez la fréquence à laquelle chacune cause un retard et attaquez les pires. Les options incluent le changement de l'architecture, le don à une équipe de la capacité qu'elle attend sans cesse, ou la réorganisation des équipes autour des services. Les [équipes pluridisciplinaires](https://en.wikipedia.org/wiki/Cross-functional_team) qui contiennent les compétences nécessaires pour livrer un service du début à la fin minimisent les dépendances, et elles portent la collaboration continue dans la structure. La loi de Conway suggère de changer ensemble la structure et la conception.

### Répandre la connaissance et l'implication

**8. Rendez visible la couverture des connaissances et améliorez-la.** Tenez une carte simple des composants critiques et des personnes capables d'exploiter et de modifier chacun. Cherchez les composants connus d'une seule personne, et planifiez le travail en binôme, la documentation et la rotation pour répandre la connaissance. Traitez le résultat comme un risque pour le système. Le but est la résilience et un rythme soutenable pour les personnes qui savent le plus, car une personne qui est la seule experte ne peut pas prendre de congé.

**9. Gardez continuellement les parties prenantes dans la boucle.** Convenez de la manière dont les parties prenantes seront jointes pour les questions et de la rapidité attendue des réponses. Une équipe qui attend une semaine une décision sur un détail attend la partie prenante, et le coût est réel. Consignez les questions et les réponses, mesurez le délai de réponse et employez-le dans les conversations avec les parties prenantes sur leur implication.

**10. Protégez le temps de travail concentré.** La collaboration devrait avoir un but. Passez en revue les réunions qui remplissent le calendrier, et demandez pour chacune quelle décision elle soutient. Réduisez le nombre de personnes dans les conversations qui n'en ont pas besoin, conformément à la loi de Brooks. Associez cela aux mesures de concentration du sujet précédent sur la santé de l'équipe (voir le sujet 9.1, Santé de l'équipe et expérience des développeurs).

### Rester honnête

**11. Ne mesurez pas le volume de communication.** Compter les messages, les réunions ou les liens de réseau dit peu de choses sur la qualité du travail en commun, et cela invite à surveiller les individus. Si votre équipe choisit d'employer l'analyse de réseaux sociaux pour comprendre la circulation de l'information, faites-le avec consentement, au niveau du groupe et pour l'apprentissage de l'équipe elle-même, et jamais pour coter des individus.

**12. Passez les mesures de transmission en revue avec les équipes et les fournisseurs.** Partagez les schémas entre les équipes et les fournisseurs concernés, et convenez d'une ou deux améliorations conjointes. Suivez si le nombre de transmissions et les attentes baissent. Aux frontières avec les fournisseurs, incluez les mesures dans les revues conjointes (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Nombre de transmissions | Garder les éléments affectés à une équipe pendant que d'autres font le travail ; réaffecter à une file partagée pour éviter le décompte | Vérifier l'activité réelle par équipe ; compter les transmissions par activité, non par la seule affectation |
| Part d'attente après transmission | Consigner une première action qui n'est qu'un accusé de réception ; affecter tard à la bonne équipe | Définir la « première action » comme une étape substantielle ; comparer à la satisfaction et au temps de résolution |
| Taux de réaffectation | Refuser de réaffecter même quand c'est faux ; clore et rouvrir des éléments sous une autre équipe | Qualité de résolution et taux de réouverture ; échantillonner les éléments rebondissants |
| Retard dû aux dépendances | Ne pas consigner l'état bloqué ; nommer la mauvaise dépendance | Comparer au temps de cycle et à l'âge des éléments ; revoir le champ de dépendance avec les équipes |
| Taux de résolution collaborative | Étiqueter chaque incident comme collaboratif ; créer des canaux partagés sans vrai travail | Vérifier que l'appel ou le canal incluait les personnes qui ont résolu ; temps de résolution et résultats |
| Couverture des connaissances | Lister des gens qui pourraient en théorie faire le travail ; gonfler la carte | Preuve de travail en binôme ou d'exercice ; demander qui a réellement effectué le dernier changement |
| Délai de réponse des parties prenantes | Consigner les questions tard ; marquer une réponse comme reçue alors qu'elle n'est pas utilisable | La partie prenante confirme que la réponse est utilisable ; échantillonner les questions |

Une lecture saine est moins de transmissions pour les éléments courants, des attentes plus courtes aux frontières qui subsistent, moins d'éléments rebondissants, des dépendances qui rétrécissent, plus d'incidents résolus par des personnes travaillant ensemble, des composants critiques connus de plusieurs personnes et des parties prenantes qui répondent en quelques heures.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Soutien par niveaux avec escalade | Spécialisation, contrôle de l'accès | Transmissions, attente, perte de contexte |
| Équipes pluridisciplinaires | Moins de transmissions, responsabilité partagée | Exigent des compétences larges ; peuvent dupliquer des spécialistes |
| Résolution collaborative | Plus rapide, meilleur apprentissage | Mobilise plusieurs personnes à la fois ; exige de la coordination |
| Escalade séquentielle | Emploi efficace des spécialistes | Plus lente pour les problèmes complexes |
| Équipes de spécialistes centralisées | Profondeur d'expertise, normes cohérentes | Goulots d'étranglement, files |
| Spécialistes intégrés | Accès rapide | Isolement ; normes inégales |
| Forte culture de réunions | Conscience partagée | Mange la concentration ; ralentit le travail |
| Communication écrite asynchrone | Préserve la concentration ; consigne les décisions | Plus lente pour les sujets urgents ou ambigus |

La réponse en prose est de garder les spécialistes là où la profondeur compte, de réunir les gens en temps réel pour les problèmes complexes ou urgents, de réduire les transmissions par la capacité et une responsabilité claire, et d'équilibrer les réunions avec une concentration protégée.

## Questions à discuter avec votre équipe

**1. Retracez le dernier incident ou la dernière demande qui a rebondi entre équipes. Où a-t-il attendu, et pourquoi ?**
Employez l'historique de l'élément. Marquez chaque transmission et chaque attente. L'animateur doit chercher l'information manquante, la responsabilité floue et les files que personne ne surveille. Convenez d'un changement qui aurait arrêté le rebond.

**2. Quelle équipe attendons-nous le plus souvent, et que lui faut-il de notre part pour être plus rapide ?**
Listez les dépendances et les retards qu'elles causent. Invitez l'autre équipe à la conversation, ou préparez des questions pour elle. Convenez d'un changement du modèle de transmission ou de l'accord de travail.

**3. Que ne savent faire qu'un ou deux d'entre nous, et que se passe-t-il quand ils sont absents ?**
Nommez les composants ou les tâches. Demandez quel plan répandrait la connaissance : travail en binôme, documentation, rotation. L'animateur doit prendre soin de traiter cela comme un risque pour le système et une question de charge pour les experts.

**4. Quand résoudre un problème ensemble en temps réel a-t-il mieux fonctionné que de le faire passer plus loin ?**
Rappelez un exemple. Qu'est-ce qui l'a fait fonctionner : les bonnes personnes, un coordinateur, une vue partagée ? Discutez de quand employer cette approche et de comment la rendre possible, par exemple avec un canal permanent et des règles sur qui se joint.

**5. Combien de temps attendons-nous les réponses de nos parties prenantes, et que cela coûte-t-il ?**
Regardez les questions ouvertes et leur âge. Discutez de ce qui ralentit les réponses : disponibilité, questions floues ou autorité floue. Convenez d'une attente avec les parties prenantes et d'un moyen de la suivre.

**6. Lesquelles de nos réunions pourraient être remplacées par une note écrite ou une décision ?**
Listez les réunions régulières et demandez pour chacune quelle décision elle soutient et qui a besoin d'y être. Annulez-en ou raccourcissez-en une. Convenez de protéger un bloc de temps sans réunions.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison détiennent beaucoup de dépendances et ressentent l'attente. Elles devraient cartographier leurs dépendances, demander les capacités qu'elles attendent sans cesse, partager la connaissance pour éviter les points uniques et garder les parties prenantes proches. Une composition pluridisciplinaire supprime souvent les plus gros retards.

### Équipes de service et d'exploitation

Les équipes d'exploitation et de soutien sont au centre des transmissions : elles reçoivent, acheminent et résolvent. Elles devraient tenir à jour l'information sur la responsabilité, employer la collaboration en temps réel pour les problèmes difficiles et consigner exactement les transmissions. Elles savent quelles frontières causent le plus de mal et peuvent dire quelle information éviterait les retours.

### Direction et gouvernance

Les dirigeants façonnent la structure qui crée les transmissions. Ils devraient regarder les données de transmissions et de dépendances en concevant les équipes et le financement, soutenir les équipes pluridisciplinaires là où elles aident et éviter les mesures de volume de communication. La gouvernance devrait traiter des retards répétés à une même frontière comme un problème structurel à corriger.

### Clients et utilisateurs

Les utilisateurs vivent les transmissions comme le fait d'être baladés, de se répéter et d'attendre. On devrait leur dire qui détient leur problème et les tenir informés. Leur expérience d'être renvoyés est une mesure directe de la qualité de la collaboration, et leurs retours devraient se lire avec les chiffres (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple d'ITIL agile

Le groupe informatique d'un détaillant national exploite un centre de services, une équipe d'infrastructure, une équipe de plateforme applicative et plusieurs équipes produit. Les utilisateurs signalent que les demandes concernant le système de point de vente prennent trop de temps. Les chiffres ci-dessous sont illustratifs.

Le responsable de service retrace 60 demandes récentes. La demande médiane passe par 3 équipes et le 85e percentile par 6. Dans le cas médian, 71 pour cent du temps écoulé est passé à attendre après une transmission avant que l'équipe réceptrice agisse. 22 pour cent des demandes sont réaffectées plus de deux fois, souvent entre les équipes d'infrastructure et de plateforme, qui croient chacune que l'autre détient le problème. Le temps bloqué en attente d'une autre équipe a une médiane de 3 jours pour les demandes qui touchent aux certificats, et de 8 jours au 85e percentile. La connaissance du renouvellement des certificats de la plateforme réside chez un seul ingénieur, et deux autres composants critiques ne sont connus que d'une personne chacun. Les parties prenantes de l'exploitation des magasins mettent une médiane de 26 heures à répondre aux questions de l'équipe de livraison.

Le groupe convient de quatre changements avec les équipes. Un court tableau de responsabilités énonce quelle équipe détient chaque composant du service de point de vente et quelle information une transmission doit contenir. Le centre de services reçoit l'accès aux guides d'exploitation et une automatisation pour les renouvellements de certificats, ce qui supprime une transmission courante. Pour les incidents prioritaires, le groupe met en place un canal permanent et une règle selon laquelle le coordinateur de l'incident fait venir immédiatement les personnes pertinentes, au lieu d'escalader par niveaux. L'équipe de plateforme met une deuxième et une troisième personne en binôme sur le processus des certificats, et prévoit un travail en binôme semblable pour les deux autres composants, avec du temps protégé dans le plan. L'équipe de livraison et l'exploitation des magasins conviennent d'une réponse le jour même aux questions bloquantes, suivies dans un journal de questions.

Trois mois plus tard, la demande médiane passe par 2 équipes, la part d'attente tombe à 38 pour cent et le taux de réaffectation à 9 pour cent. Les demandes liées aux certificats ont un temps bloqué médian de moins d'un jour. La couverture des connaissances sur les composants critiques passe de 52 à 81 pour cent. Le délai médian de réponse de l'exploitation des magasins tombe à 7 heures. On demande au directeur informatique une mesure de la quantité de communication des équipes. Le responsable de service explique que le volume de messages dit peu de choses sur la fluidité du travail, et que le suivre pourrait miner la confiance, et offre à la place les mesures de transmission et d'attente. La décision est consignée, et le tableau de responsabilités est ajouté à la description du service.

## Perspective sectorielle

**Startup.** Les petites équipes collaborent naturellement, et les transmissions apparaissent quand émergent les spécialistes. Gardez les équipes pluridisciplinaires aussi longtemps que possible, documentez légèrement la responsabilité et guettez la connaissance détenue par une seule personne. N'importez pas trop tôt le soutien par niveaux.

**Petite entreprise.** Une ou deux personnes peuvent tout couvrir, et le plus grand risque est la dépendance envers elles. Partagez la connaissance par de simples guides d'exploitation et prévoyez une relève pour les absences. Les transmissions aux fournisseurs sont la principale frontière ; gardez donc des contacts clairs et des voies d'escalade.

**Grande entreprise.** L'échelle crée de nombreuses équipes, couches et fournisseurs, et les transmissions se multiplient. Cartographiez les chemins d'éléments les plus courants, concevez les frontières d'équipes autour des services et employez des rôles de coordination pour les incidents entre équipes. Partagez les données de transmissions entre équipes pour que les frontières reçoivent une attention conjointe.

**Gouvernement et secteur public.** La responsabilité est souvent partagée entre organismes, sous-traitants et frontières légales, et les transmissions impliquent marchés publics et approbation formelle. Rendez explicite le tableau de responsabilités, employez des revues conjointes avec les sous-traitants et des canaux partagés pour les incidents qui traversent les frontières (voir le sujet 8.4, Métriques des fournisseurs et des contrats).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont l'effort pour extraire et analyser l'historique d'affectation, le temps des équipes pour retracer les chemins et convenir de la responsabilité, le coût de la formation croisée et tout outillage de collaboration en temps réel. Restructurer les équipes est une décision plus grande, avec ses propres coûts.

Les retours sont des temps de résolution et de livraison plus courts, moins de reprises dues aux éléments rebondissants, un risque moindre lié aux points uniques de connaissance et un environnement de travail plus calme. Bâtissez le dossier à partir de vos propres données : la part du temps écoulé passée à attendre, le nombre d'éléments qui rebondissent, le coût des retards à la pire frontière et l'effet des absences de personnes clés sur les incidents passés. Évitez de citer des chiffres publiés sur le coût des transmissions à moins de pouvoir retracer la source et le contexte. Comptez le coût des changements et comparez-le au retard supprimé (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Compter les messages ou les réunions.** Cela récompense le bruit et invite à la surveillance. Mesurez le flux du travail.
- **Optimiser la vitesse de chaque transmission.** Le but est d'avoir moins de transmissions. Supprimez-les là où vous le pouvez.
- **Blâmer l'équipe réceptrice pour les attentes.** La cause est souvent la file et la structure. Regardez le système.
- **Escalader par défaut.** Les niveaux séquentiels ajoutent de l'attente. Réunissez les gens pour les problèmes complexes.
- **Responsabilité floue.** Les éléments rebondissent. Publiez un tableau de responsabilités et gardez-le à jour.
- **Experts héroïques.** Les points uniques de connaissance sont un risque et un fardeau. Répandez délibérément la connaissance.
- **Les réunions comme collaboration.** Elles peuvent évincer le travail. Passez-les en revue au regard des décisions.
- **Traiter la couverture des connaissances comme une cote individuelle.** Elle devient un classement. Gardez-la comme mesure de système.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Visibilité des transmissions | Anecdotes | Chemins dessinés pour quelques services | Nombre de transmissions, part d'attente et réaffectations mesurés à partir de l'historique | Mesures revues avec les équipes et reliées aux résultats | Vue partagée entre équipes et fournisseurs ; frontières redessinées à partir des données |
| Réduire les transmissions | Escalade par défaut | Quelques guides d'exploitation et modèles | Tableaux de responsabilités ; capacité déplacée vers la première équipe ; collaboration pour les problèmes difficiles | Dépendances cartographiées et réduites ; résolution collaborative suivie | Équipes organisées autour des services avec des dépendances minimales dans toute l'organisation |
| Connaissances et parties prenantes | Les experts portent tout | Partage informel | Couverture des connaissances cartographiée ; questions des parties prenantes consignées | Couverture et délais de réponse gérés ; travail en binôme planifié | La connaissance et les décisions circulent librement entre équipes, fournisseurs et parties prenantes |

## Liste de vérification

- [ ] Le chemin d'un élément typique a été retracé à partir d'un véritable historique du suivi.
- [ ] Le nombre de transmissions, la part d'attente et le taux de réaffectation sont mesurés par type d'élément.
- [ ] La responsabilité de chaque service et composant est publiée et à jour.
- [ ] Un modèle de transmission énonce l'information dont l'équipe réceptrice a besoin.
- [ ] Les incidents complexes ou urgents emploient la collaboration en temps réel avec un coordinateur.
- [ ] Les dépendances entre équipes sont cartographiées, et les pires sont en cours de réduction.
- [ ] La couverture des connaissances des composants critiques est cartographiée, avec un plan pour la répandre.
- [ ] Les questions des parties prenantes sont consignées et les délais de réponse revus.
- [ ] Aucune mesure ne compte les messages, les réunions ou la communication individuelle.
- [ ] Les résultats sont partagés avec les équipes et les fournisseurs concernés.

## Prompts d'IA

**Analysez un chemin d'éléments de travail.**

```text
Voici des historiques d'affectation anonymisés pour [number] [type of item] :
élément, séquence d'équipes, horodatages d'affectation et de première action :
[paste]. Calculez ou décrivez le nombre de transmissions et les attentes,
repérez les chemins courants et la longue queue, et suggérez les raisons
probables de l'attente et du rebond, avec des questions à poser aux équipes. Ne
déduisez rien sur les individus. Énumérez vos hypothèses.
```

**Rédigez un tableau de responsabilités.**

```text
Rédigez un tableau de responsabilités pour le service [name] avec ces
composants et équipes : [list]. Pour chaque composant, incluez l'équipe
propriétaire, comment la joindre, ce qu'une transmission doit contenir et la
voie d'escalade. Signalez les composants dont la responsabilité semble floue ou
partagée. Tenez-vous-en à une page. Énumérez vos hypothèses et vos questions
pour les équipes.
```

**Planifiez la diffusion des connaissances.**

```text
Nos composants critiques et le nombre de personnes capables d'exploiter chacun
sont : [paste]. Proposez un plan pour répandre la connaissance des composants
connus de moins de [number] personnes : travail en binôme, documentation,
exercices et rotation. Suggérez comment protéger la charge des experts pendant
le plan et comment suivre les progrès sans classer les individus. Énumérez vos
hypothèses et vos risques.
```

**Concevez une approche collaborative des incidents.**

```text
Concevez une approche légère de résolution collaborative en temps réel des
incidents prioritaires dans [type of organization] avec [teams]. Incluez
comment ouvrir un espace partagé, qui coordonne, qui est invité, ce qui est
consigné et comment éviter de mobiliser trop de monde. Incluez des mesures pour
savoir si cela aide. Énumérez vos hypothèses et vos mises en garde.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de transmission ou de collaboration.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de collaboration mesure le travail et non les individus, avec son vecteur de détournement et son garde-fou.

## Points clés à retenir

- L'essentiel du retard se trouve dans les attentes entre transmissions ; mesurez donc le nombre de transmissions, la part d'attente et les réaffectations à partir de l'historique des éléments de travail.
- Réduisez les transmissions en déplaçant la capacité vers le travail, en clarifiant la responsabilité et en cartographiant et coupant les dépendances.
- Réunissez les bonnes personnes en temps réel pour les problèmes complexes ou urgents.
- Répandez la connaissance des composants critiques, et traitez les points uniques de connaissance comme un risque de système.
- Gardez les parties prenantes continuellement impliquées, avec des réponses rapides aux questions bloquantes.
- Ne mesurez jamais le volume de communication et ne cotez jamais des individus sur la collaboration.

## Références et lectures complémentaires

1. Conway, M. E., "How Do Committees Invent?" *Datamation*, 14(4), 1968.
2. Skelton, M., and Pais, M., *Team Topologies: Organizing Business and Technology Teams for Fast Flow*, IT Revolution, 2019.
3. Brooks, F. P., *The Mythical Man-Month: Essays on Software Engineering*, Addison-Wesley, 1975 (anniversary edition 1995).
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
8. Wikipedia, [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law).
9. Wikipedia, [Dependency (project management)](https://en.wikipedia.org/wiki/Dependency_(project_management)).
10. Wikipedia, [Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law).
11. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Cross-functional team](https://en.wikipedia.org/wiki/Cross-functional_team).
