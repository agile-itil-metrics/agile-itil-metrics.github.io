# Concevoir un tableau de bord de métriques de service

**Un bon tableau de bord répond à quelques questions qu'un public nommé pose réellement, montre chaque chiffre avec sa tendance et son contexte, et est bâti par les personnes qui l'emploieront.**

## Résumé et motivation

Un [tableau de bord](https://en.wikipedia.org/wiki/Dashboard_(business)) est un affichage visuel de l'information la plus importante nécessaire pour atteindre un ou plusieurs objectifs, disposée de façon à pouvoir être surveillée d'un coup d'œil. En pratique, la plupart des tableaux de bord des organisations de service échouent à cette définition. Ils commencent comme un moyen de répondre à une vraie question, puis grossissent par accrétion jusqu'à montrer tout ce que l'outil peut dessiner. Personne n'en est responsable, personne n'est sûr de ce que signifient les chiffres, et l'écran au mur est ignoré.

Le but d'un tableau de bord de métriques de service est d'aider les gens à prendre des décisions et à lancer de bonnes conversations. Une équipe s'en sert pour remarquer que son travail attend plus longtemps qu'avant, et pour demander pourquoi. Un responsable de service s'en sert pour voir qu'un service est près du bord de son objectif de fiabilité. Un dirigeant s'en sert pour voir si l'investissement dans un domaine produit le résultat espéré. Un affichage qui ne fait rien de cela est de la décoration, et la décoration coûte de l'argent à construire et de l'attention à ignorer.

ITIL formule cela comme une question d'information et de communication : la bonne information, aux bonnes personnes, sous une forme qu'elles peuvent employer, au bon moment. Les buts agiles indiquent les mêmes principes de conception. L'implication continue des parties prenantes signifie que le public aide à concevoir la vue, et continue d'aider à mesure que les questions changent. L'amélioration continue signifie que le tableau de bord lui-même est revu et élagué. L'évolution permanente signifie que l'ensemble des mesures change quand les services et les buts changent. Un rythme soutenable signifie que le tableau de bord ne génère pas une compulsion quotidienne de vérifier des chiffres qui ne bougent que chaque mois. Et la même confiance qui soutient les individus motivés signifie que les équipes voient d'abord leurs propres données et détiennent l'histoire qu'elles racontent.

Trois défauts de conception sont courants. Le premier est le mur de chiffres, où une centaine de tuiles se disputent l'attention et aucune ne ressort. Le deuxième est l'affichage d'objectifs seulement, où un chiffre est montré face à un but en rouge ou en vert sans tendance ni contexte, ce qui invite à la gestion par la couleur plutôt que par la compréhension. Le troisième est l'affichage sans responsable, où les définitions ont dérivé, les données sont périmées et personne ne sait à qui demander. Le travail de conception consiste à les éviter.

Une bonne conception visuelle aide. La [visualisation de données](https://en.wikipedia.org/wiki/Data_visualization) est la pratique qui consiste à montrer des données sous forme graphique pour que les schémas puissent être vus et compris. Un [graphique miniature](https://en.wikipedia.org/wiki/Sparkline) (sparkline) est un petit graphique linéaire de la taille d'un mot qui montre une tendance sans axes ni étiquettes, et il convient bien à un tableau de bord parce qu'il place l'historique à côté de la valeur actuelle. Un [graphique de suivi](https://en.wikipedia.org/wiki/Run_chart) trace une mesure dans le temps avec une ligne médiane, et une [carte de contrôle](https://en.wikipedia.org/wiki/Control_chart) ajoute des limites qui séparent la variation ordinaire des signaux qui valent d'être examinés (voir le sujet 1.6, Culture statistique pour les métriques de service). Le [fatras graphique](https://en.wikipedia.org/wiki/Chartjunk) est la décoration qui n'ajoute aucune information, comme les lourdes grilles, les barres en trois dimensions et les jauges ornementales, et il vaut la peine de le retirer.

Une [métrique de vanité](https://en.wikipedia.org/wiki/Vanity_metric) est un chiffre qui fait bonne figure et n'aide personne à décider quoi que ce soit, comme un décompte de tickets traités ou de connexions à un portail montré sans résultats. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique à tout l'affichage : quand un chiffre à l'écran devient un objectif, les gens gèrent le chiffre (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Ce sujet s'appuie sur les cadres de mesure (voir le sujet 1.7, Cadres de mesure) et sur les sujets de données et de gouvernance de la partie 1.

## Principes clés

- **Partir des questions, non des données.** Écrivez les décisions et les questions du public avant de choisir un seul graphique.
- **Montrer peu de mesures, équilibrées.** Un petit ensemble qui couvre le flux, la qualité, la fiabilité, l'expérience et le coût résiste mieux au détournement qu'une mesure seule.
- **Toujours montrer la tendance et le contexte.** Une valeur sans historique, sans ligne de base ni note sur ce qui a changé est difficile à interpréter.
- **Respecter la variation.** Ne réagissez pas à chaque oscillation. Employez des graphiques de suivi ou des cartes de contrôle pour séparer le signal du bruit.
- **Donner à chaque public sa propre vue.** Les équipes, les responsables de service et la direction posent des questions différentes et ont besoin d'un détail différent.
- **Les équipes voient d'abord leurs données.** Les personnes qui font le travail devraient voir leurs chiffres avant quiconque, et détenir l'interprétation.
- **Tout définir et nommer un responsable.** Chaque mesure a une définition écrite, une source de données et une personne à qui s'adresser.
- **Garder léger à entretenir.** Un tableau de bord qui demande une semaine de travail manuel chaque mois mourra.

## Définitions des métriques

Les mesures ci-dessous portent sur le tableau de bord lui-même, non sur un service. Elles aident une équipe de programme à voir si ses affichages sont en bonne santé. Certaines sont descriptives et marquées comme telles, car les traiter en objectifs inviterait aux distorsions que ce sujet met en garde de ne pas commettre.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des questions | Part des questions listées par le public auxquelles le tableau de bord peut répondre avec une mesure définie | questions avec une mesure et une définition / questions listées par le public | pourcentage | Liste de questions issue de séances avec les parties prenantes ; fiches de métriques | Amélioration continue ; gestion des niveaux de service | Implication continue des parties prenantes | Trimestrielle |
| Exhaustivité des définitions | Part des mesures affichées dotées d'une définition écrite à jour, d'une source de données, d'un responsable et de limites connues | mesures avec les quatre / mesures affichées | pourcentage | Fiches de métriques ou catalogue | Gestion de l'information et de la technologie ; gestion des connaissances | Compréhension partagée ; travail visible | Trimestrielle |
| Fraîcheur des données | Part des mesures affichées mises à jour dans leur intervalle attendu | mesures mises à jour à temps / mesures affichées | pourcentage | Journaux de chaîne de données ; métadonnées du tableau de bord | Supervision et gestion des événements | Retour rapide | Hebdomadaire |
| Lien avec une décision | Part des mesures revues dont une revue récente a mené à une décision consignée, une action ou un choix délibéré de ne rien faire | mesures avec une décision liée dans la période / mesures revues | pourcentage | Notes de revue ; registre d'amélioration | Amélioration continue | Réflexion régulière | Trimestrielle |
| Taille de l'affichage | Nombre de mesures sur chaque vue de public | nombre par vue | mesures | Configuration du tableau de bord | Amélioration continue | Simplicité | Trimestrielle |
| Taux de retrait | Mesures retirées ou remplacées dans la période parce qu'elles ont cessé d'éclairer des décisions | mesures retirées / mesures affichées au début | pourcentage | Journal des modifications du tableau de bord | Amélioration continue | Évolution permanente | Annuelle |
| Portée auprès du public (descriptive) | Part des équipes ou des rôles visés qui ont ouvert leur vue dans la période | équipes ou rôles distincts qui ont consulté / équipes ou rôles visés | pourcentage | Journaux d'accès au tableau de bord, agrégés au niveau de l'équipe ou du rôle | Gestion de l'information et de la technologie | Implication continue des parties prenantes | Trimestrielle |

Définissez par écrit le public de chaque vue. Comptez les mesures par vue, non par outil, pour qu'un grand catalogue avec une petite page d'accueil ne soit pas pris pour de la prolifération. Les journaux d'accès sont recueillis et rapportés au niveau de l'équipe ou du rôle, et jamais pour suivre les habitudes de lecture des individus. La portée auprès du public est descriptive et se lit avec le lien avec une décision, car un affichage très consulté qui ne change aucune décision a peu de valeur. Le lien avec une décision accepte « nous avons regardé et choisi de ne rien faire » comme une décision consignée, pour que la mesure ne pousse pas les gens à inventer une action.

## Recommandations

### Partir du public

**1. Listez les publics et leurs questions.** Les publics typiques sont l'équipe de livraison ou de soutien qui fait le travail, le responsable de service redevable d'un service et les dirigeants qui financent et orientent. Asseyez-vous une heure avec chacun et notez ce qu'ils demandent, les décisions qu'ils prennent et ce qu'ils aimeraient savoir. Une bonne question ressemble à « Notre travail attend-il plus longtemps qu'avant ? » ou « Sommes-nous près d'avoir épuisé notre budget d'erreur ? » Elle ne ressemble pas à « Montrez-moi le tableau de bord des incidents. »

**2. Associez chaque question à une mesure et à une compagne.** Pour chaque question, choisissez la meilleure mesure unique parmi celles des parties précédentes de ce livre, et une compagne qui garde contre la distorsion évidente. Une mesure de vitesse s'associe à une mesure de qualité. Une mesure de volume s'associe à un résultat. Une mesure d'expérience s'associe à une mesure de comportement. C'est la logique d'association qui traverse tout le livre (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

**3. Associez le public à la conception.** Montrez des esquisses avant de rien construire. Demandez ce qui est confus, ce qui manque et ce qu'ils feraient de chaque chiffre. Leurs réponses réduiront l'ensemble, et ils feront confiance à ce qu'ils ont aidé à faire.

### Choisir un petit ensemble équilibré

**4. Gardez chaque vue à une poignée de mesures.** De cinq à neuf mesures par vue de public est une plage praticable, bien que le bon nombre dépende des questions. La limite force des choix. Mettez le détail derrière un clic, dans une vue de soutien, et gardez la page d'accueil à ce qui est nécessaire pour décider s'il faut regarder plus loin.

**5. Équilibrez l'ensemble entre les dimensions.** Un [tableau de bord prospectif](https://en.wikipedia.org/wiki/Balanced_scorecard) (balanced scorecard) est un outil de gestion stratégique qui regarde une organisation sous plusieurs perspectives au lieu des seuls résultats financiers. L'idée se transpose bien : pour un service, équilibrez le flux et la vitesse, la qualité et la stabilité, la fiabilité, l'expérience et le coût. Un ensemble qui n'inclut que la vitesse encourage les raccourcis, et un ensemble qui n'inclut que la qualité encourage le retard. L'idée connexe d'[indicateur clé de performance](https://en.wikipedia.org/wiki/Key_performance_indicator) est utile quand l'indicateur est choisi pour ce qu'il révèle d'un objectif et non pour sa facilité d'affichage.

**6. Distinguez les indicateurs des diagnostics.** Quelques indicateurs principaux disent si les choses sont saines. Les mesures de diagnostic aident à savoir pourquoi quand elles ne le sont pas. Gardez les diagnostics un cran plus bas, pour que la page d'accueil ne devienne pas un mur.

### Montrer le contexte et la tendance

**7. Montrez l'historique avec chaque valeur.** Placez un graphique miniature ou un petit graphique de suivi à côté de chaque valeur actuelle. Montrez au moins assez d'historique pour voir les schémas saisonniers, comme les pointes mensuelles ou un cycle trimestriel. Marquez les événements qui expliquent les changements : une mise en production, un changement de politique, une panne, une réorganisation d'équipe. Une note à côté de la courbe épargne cent questions.

**8. Employez des distributions et des plages pour les mesures de temps.** Une moyenne cache la longue queue que ressentent les utilisateurs. Montrez la médiane et un percentile élevé comme le 85e ou le 95e, et montrez la dispersion. Énoncez la taille de l'échantillon quand elle est petite, et montrez l'incertitude d'un petit échantillon (voir le sujet 1.6, Culture statistique pour les métriques de service, et le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux).

**9. Soyez prudent avec les objectifs et les couleurs.** Employez une ligne d'objectif quand un objectif a un fondement réel, comme un objectif de niveau de service, et montrez-la comme une référence, non comme un verdict. Évitez les tuiles rouges, ambre et vertes qui basculent sur un seul point de donnée. Si vous employez des couleurs d'état, fondez-les sur une règle qui tient compte de la variation normale, et expliquez la règle sur la page.

### Le rendre digne de confiance et entretenable

**10. Joignez une définition et une note de données à chaque mesure.** À un clic de chaque chiffre devraient se trouver sa définition, sa formule, sa source de données, son responsable, son heure d'actualisation et ses lacunes connues. Une courte note « comment lire ceci » vaut la place qu'elle prend. Un lecteur qui voit les limites risque moins de mal employer le chiffre, et une équipe qui les voit peut les contester (voir le sujet 1.4, Gouvernance et responsabilité des métriques, et le sujet 1.5, Sources de données et instrumentation).

**11. Automatisez les données et détenez l'affichage.** Tirez les données des systèmes de référence selon un calendrier, et montrez l'heure de la dernière mise à jour. Les tableurs manuels peuvent lancer une conversation, mais ils sont fragiles. Nommez un responsable de chaque tableau de bord, chargé de ses définitions, de sa fraîcheur et de son retrait. Passez le tableau de bord en revue à un rythme fixe avec son public, et élaguez-le.

**12. Prévoyez la sortie dès le départ.** Chaque mesure devrait avoir une raison d'exister énoncée et une condition de retrait, comme « quand le backlog des erreurs connues tombe sous un seuil pendant trois mois » ou « quand l'équipe ne s'en sert plus dans sa revue ». Retirer des mesures garde l'ensemble petit et signale que le programme sert le travail.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Couverture des questions | Écrire des questions étroites auxquelles les mesures existantes répondent déjà ; omettre les questions difficiles | Associer des parties prenantes extérieures à l'équipe du programme ; revoir explicitement les questions sans réponse |
| Exhaustivité des définitions | Remplir les champs de formules toutes faites ; des définitions que personne ne lit | Échantillonner les définitions pour leur clarté avec quelqu'un d'extérieur à l'équipe ; vérifier que la définition correspond au calcul réel |
| Fraîcheur des données | Actualiser une source périmée avec des données inchangées ; compter une actualisation comme un succès quand le flux source a échoué | Vérifier les horodatages des sources autant que les heures d'actualisation ; comparer aux nombres d'enregistrements et au volume attendu |
| Lien avec une décision | Consigner des décisions après coup pour remplir le champ ; inventer une action pour éviter un blanc | Accepter « a choisi de ne rien faire » comme décision consignée ; échantillonner les liens pour une vraie discussion préalable |
| Taille de l'affichage | Cacher des mesures sur des onglets secondaires ; scinder une vue en plusieurs | Compter les mesures par public sur tous les onglets ; demander au public combien de chiffres il emploie réellement |
| Taux de retrait | Retirer les mesures gênantes qui montrent de mauvais résultats | Revoir la liste des retraits pour les mesures aux tendances défavorables ; exiger une raison énoncée |
| Portée auprès du public (descriptive) | Ouvrir la page pour relever le compte ; consultation obligatoire en réunion | La garder descriptive ; la lire avec le lien avec une décision ; ne pas rapporter les consultations individuelles |

Une lecture saine montre une courte page d'accueil que le public peut expliquer, des définitions qui correspondent aux calculs, des données qui arrivent à temps, des revues qui mènent parfois à l'action et parfois à un choix délibéré d'attendre, et une liste de mesures retirées qui en inclut qui furent autrefois populaires.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Un tableau de bord d'entreprise pour tous | Source unique de vérité ; définitions cohérentes | Trop général pour tout public ; grossit en mur |
| Vues séparées par public sur des données partagées | Convient à chaque public ; définitions cohérentes | Exige une gouvernance des définitions partagées |
| Tableaux de bord bâtis par les équipes | Conviennent aux questions locales ; forte responsabilité | Les définitions dérivent ; difficiles à consolider |
| L'équipe centrale bâtit tous les tableaux de bord | Cohérence ; compétence de conception | Lent ; peut ne pas convenir aux questions des équipes |
| Affichage en direct, en temps réel | Signaux rapides pour l'exploitation | Encourage à réagir au bruit ; coûteux |
| Dossier de revue périodique | Calme, discuté avec le contexte | Retard ; peut être sauté |
| Objectifs et couleurs d'état | Lecture rapide | Invite à la gestion par la couleur ; cache la variation |
| Tendance et distribution seulement | Honnête sur la variation | Plus difficile à parcourir pour les nouveaux |

La réponse en prose est de partager les définitions dans toute l'organisation, de laisser chaque public avoir sa propre petite vue, de n'employer des affichages en direct que là où la réponse opérationnelle en a besoin, et d'employer une revue périodique calme pour les décisions d'amélioration.

## Questions à discuter avec votre équipe

**1. Quelles décisions avons-nous prises le dernier trimestre qu'un chiffre à l'écran a éclairées ?**
Listez-les. Pour chacune, nommez le chiffre et sa provenance. Remarquez quels chiffres de nos écrans actuels n'apparaissent jamais dans cette liste. L'animateur doit demander s'ils méritent leur place.

**2. Si nous ne pouvions montrer que cinq chiffres à notre propre équipe, lesquels seraient-ils ?**
Faites écrire à chacun une liste en privé, puis comparez. Discutez des différences et de ce que chaque chiffre aiderait quelqu'un à décider. Convenez d'un ensemble d'essai et d'une date pour le revoir.

**3. Quel chiffre de notre tableau de bord aimerions-nous le plus retirer, et pourquoi ?**
Écoutez les chiffres qui causent des disputes, induisent en erreur ou ne sont jamais lus. Vérifiez si le problème est la mesure ou sa présentation. Convenez de retirer, de redéfinir ou de garder chacun.

**4. Comment un nouveau collègue lirait-il notre tableau de bord sans aide ?**
Demandez à un nouveau d'expliquer ce qu'il voit. Notez ce qu'il lit de travers et pourquoi. Ajoutez des définitions, du contexte ou des notes là où il a trébuché.

**5. Qu'est-ce qui a changé dans notre travail qu'un chiffre ne montre pas ?**
Les mises en production, les effectifs, la politique ou un changement de clientèle peuvent expliquer une tendance. Convenez de la manière de consigner les événements sur l'affichage pour que le prochain lecteur ait l'histoire.

**6. Qui regarde nos données en dehors de nous, et qu'en fait-il ?**
Retracez le chemin de nos chiffres vers d'autres publics. Vérifiez que l'interprétation qu'ils y placent est une interprétation que nous approuverions. Convenez de ce que nous partagerons et du contexte qui l'accompagne.

## Quatre perspectives

### Équipes produit et livraison

Les équipes font le travail et devraient être le premier public de leurs propres données. Elles devraient aider à choisir les mesures, employer l'affichage pour provoquer leurs propres conversations de revue et l'annoter avec des événements. Une vue d'équipe devrait répondre à « comment allons-nous et que devrions-nous essayer ? » et non à « comment nous comparons-nous à l'équipe d'à côté ? »

### Équipes de service et d'exploitation

Les responsables de service sont redevables de la performance d'un service dans le temps. Leur vue rassemble fiabilité, incidents, changements, coût et expérience pour un service, avec les tendances et l'état des actions d'amélioration. Ils devraient s'en servir pour décider où investir et pour préparer les conversations avec les clients et les dirigeants.

### Direction et gouvernance

Les dirigeants ont besoin d'une courte vue des résultats et des risques dans les services, avec assez de contexte pour l'interpréter. Ils devraient demander des tendances et des distributions plutôt que des classements, résister à l'envie de demander de nouvelles mesures sans en retirer d'autres, et employer l'affichage pour diriger les questions vers les systèmes et les décisions, non vers les individus.

### Clients et utilisateurs

Les clients et les utilisateurs voient l'information de service par des pages d'état, des rapports et les mesures d'expérience qui reflètent leur point de vue (voir le sujet 6.2, Accords de niveau d'expérience). Leur vue devrait être honnête, simple et cohérente avec ce que voient les équipes. Ils devraient pouvoir dire à l'organisation ce que les chiffres ne montrent pas.

## En pratique : un exemple d'ITIL agile

Une entreprise de logiciels dotée d'un produit hébergé et d'un groupe de soutien à la clientèle a accumulé trois tableaux de bord : un écran d'exploitation de 62 tuiles, un rapport de soutien envoyé chaque semaine par courriel et une page de livraison entretenue par un analyste. L'équipe de direction demande un tableau de bord unique pour « tout voir ». Les chiffres ci-dessous sont illustratifs.

La responsable de la gestion des services propose de partir des questions. Elle tient une séance d'une heure avec chacun de trois publics : l'équipe de soutien, l'équipe de plateforme et le groupe de direction. L'équipe de soutien demande si les clients attendent plus longtemps qu'avant une première réponse utile et si les mêmes problèmes reviennent. L'équipe de plateforme demande si elle est près d'avoir épuisé son budget d'erreur et si son processus de changement la ralentit ou la protège. La direction demande si les clients tirent de la valeur et si l'investissement dans un nouveau portail de libre-service porte ses fruits. Ensemble, ils listent 14 questions. Les tableaux de bord existants pouvaient en répondre à six avec une mesure définie, de sorte que la couverture des questions est de 43 pour cent.

Le groupe conçoit trois vues d'au plus sept mesures chacune, sur des définitions partagées. La vue de soutien montre la médiane et le 85e percentile du temps jusqu'à une première réponse utile, la part des contacts qui reviennent dans les sept jours, une tendance de satisfaction avec la taille de son échantillon, et la résolution en libre-service associée aux contacts de retour. La vue de plateforme montre la disponibilité par rapport à l'objectif avec une ligne de consommation du budget d'erreur, le délai de livraison des changements avec le taux d'échec des changements, et la part du temps consacrée au travail imprévu. La vue de direction montre les résultats de niveau de service, l'expérience client, le coût par client actif et l'état de trois actions d'amélioration financées. Chaque valeur a un graphique miniature, un lien vers sa fiche de définition et un champ de note pour les événements. Les couleurs n'apparaissent que sur le budget d'erreur, selon une règle expliquée sur la page.

La première revue réserve des surprises. L'équipe de soutien remarque que son temps de réponse médian s'est amélioré alors que son 85e percentile s'est dégradé, parce que les contacts faciles étaient traités vite et les difficiles laissés en attente. Elle décide d'examiner ses règles de triage et consigne la décision. L'équipe de plateforme constate qu'une récente hausse du délai de livraison des changements a coïncidé avec une nouvelle étape d'approbation, et elle porte la question au groupe des changements. La direction remarque que l'usage du portail monte alors que les contacts de retour sont stables, et demande à l'équipe de soutien à quoi le portail ne répond pas. Deux trimestres plus tard, la couverture des questions est de 79 pour cent, toutes les mesures affichées ont des définitions complètes, et l'ancien écran de 62 tuiles est retiré. Trois mesures ont été abandonnées parce que personne ne s'en servait, et une a été ajoutée. Un directeur demande une ligne de synthèse vert-ambre-rouge. La responsable de la gestion des services montre un essai où une seule mauvaise semaine a fait virer la ligne au rouge et provoqué une volée de questions sans cause. Ils conviennent à la place d'une courte note écrite de ce qui a changé chaque mois, et consignent la décision.

## Perspective sectorielle

**Startup.** Gardez-le très petit : une seule page avec peut-être cinq chiffres que toute l'entreprise peut lire, reflétant la vitesse de livraison, la stabilité, l'expérience client et le coût. Employez ce que les outils existants offrent. Revisitez la page chaque fois que le produit ou les clients changent, et résistez à la construction d'une plateforme de données avant que les questions soient claires.

**Petite entreprise.** Un document partagé ou un simple graphique de tableur mis à jour chaque mois peut suffire. Choisissez une poignée de mesures que le propriétaire et le personnel emploient réellement, écrivez ce que chacune signifie et discutez-en lors d'une réunion régulière. Le risque n'est pas trop peu d'outillage. Le risque est de mesures auxquelles personne ne fait confiance ou sur lesquelles personne n'agit.

**Grande entreprise.** L'échelle exige des définitions partagées, un catalogue gouverné de mesures et des vues en couches pour les équipes, les services, les portefeuilles et les dirigeants. La tentation de tout consolider en un seul chiffre est forte et nuisible. Gardez les vues d'équipe détenues par les équipes, publiez des définitions communes et exigez un but énoncé pour toute nouvelle mesure sur une vue de direction (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

**Gouvernement et secteur public.** Les obligations de rapport et la redevabilité publique dictent souvent certaines mesures. Gardez les mesures imposées visibles et clairement séparées de celles que les équipes emploient pour s'améliorer, et expliquez au public et aux organes de surveillance ce que les chiffres peuvent et ne peuvent pas montrer. Le langage clair et l'accessibilité comptent pour tout affichage partagé hors de l'organisation (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts d'un programme de tableaux de bord comprennent le temps d'interroger les publics, de concevoir et de bâtir, de connecter et de nettoyer les données, d'écrire les définitions, de former et de soutenir les utilisateurs, et d'entretenir l'affichage dans le temps. Le plus grand coût caché est le temps des gens qui lisent des chiffres qui n'aident pas et les réunions passées à débattre de quel chiffre est le bon. Les constructions peu coûteuses et rapides sont courantes, et le vrai coût arrive plus tard sous forme d'entretien et de méfiance.

Les retours comprennent une reconnaissance plus rapide des tendances, moins de disputes sur les définitions, un travail d'amélioration mieux ciblé et un effort de rapport réduit quand une source gouvernée remplace plusieurs rapports manuels. Bâtissez le dossier à partir de vos propres données : les heures passées aux rapports manuels avant et après, le nombre de versions concurrentes du même chiffre et les décisions que l'affichage a éclairées. Évitez de citer des chiffres publiés sur la valeur de l'analytique sans source traçable ni pertinence pour votre contexte. L'affirmation crédible est modeste : des mesures moins nombreuses et meilleures, auxquelles on fait confiance et que l'on emploie (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Le mur de tuiles.** Chaque chiffre se dispute l'attention. Réduisez à une poignée par public et mettez le détail un cran plus bas.
- **La gestion par la couleur.** Les couleurs d'état basculent sur le bruit et provoquent des réactions. Montrez des tendances et employez des règles qui respectent la variation.
- **Aucune définition.** Deux équipes lisent différemment la même étiquette. Joignez une définition et un responsable à chaque mesure.
- **Les tableaux de bord comme surveillance.** Les vues au niveau individuel érodent la confiance et déforment les données. Montrez les équipes, les services et les systèmes.
- **Un seul chiffre pour tout résumer.** Il cache les compromis qu'il devait exposer. Montrez quelques mesures équilibrées.
- **Construire une fois, ne jamais revoir.** L'affichage se périme. Revoyez avec le public à un rythme régulier et retirez des mesures.
- **Affichages de vanité.** De gros décomptes d'activité sans résultats. Associez chaque volume à une mesure de résultat.
- **Le rapport que personne n'a demandé.** Bâti à partir des données disponibles plutôt que des questions posées. Partez des questions.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Public et questions | Bâti à partir des données disponibles | Certaines équipes demandent ce dont elles ont besoin | Publics et questions écrits ; petites vues par public | Couverture des questions et lien avec une décision revus et suivis d'action | Les publics conçoivent ensemble les vues, y compris clients et fournisseurs, et les questions évoluent avec les services |
| Conception et contexte | Nombreuses tuiles sans historique | Quelques tendances et définitions | Peu de mesures par vue avec tendance, distribution et définition pour chaque mesure | Affichages attentifs à la variation ; compagnes pour chaque indicateur principal | Les vues s'adaptent à l'évolution des buts ; schémas partagés réemployés entre équipes |
| Données et entretien | Manuel, périmé, sans responsable | Un peu d'automatisation ; responsables informels | Flux automatisés, responsables nommés, fraîcheur affichée | Fraîcheur et exhaustivité des définitions gérées ; retrait routinier | Responsabilité fédérée avec définitions partagées ; retrait et amélioration pilotés par les utilisateurs |

## Liste de vérification

- [ ] Les questions de chaque public sont écrites, et chaque vue y correspond.
- [ ] Chaque vue compte au plus environ neuf mesures, le détail étant un cran plus bas.
- [ ] L'ensemble est équilibré entre flux, qualité, fiabilité, expérience et coût.
- [ ] Chaque valeur montre la tendance et le contexte, et les mesures de temps montrent un percentile élevé.
- [ ] Chaque mesure a une définition, une source, un responsable et une heure d'actualisation à un clic.
- [ ] Les objectifs sont montrés comme des références, et les couleurs d'état suivent une règle énoncée.
- [ ] Les équipes voient d'abord leurs propres données et détiennent l'interprétation.
- [ ] Aucune vue ne classe ni ne suit des individus.
- [ ] Le tableau de bord a un responsable nommé, un rythme de revue et une règle de retrait des mesures.
- [ ] Les données sont tirées automatiquement, avec l'heure de dernière mise à jour visible.

## Prompts d'IA

**Transformez des questions en une vue.**

```text
Voici des questions posées par [audience] : [list]. Pour chacune, suggérez une
mesure principale et une mesure compagne qui garde contre sa distorsion la plus
probable. Regroupez-les en une vue d'au plus sept mesures, et pour chacune
énoncez la définition, un type de graphique suggéré et le contexte dont elle a
besoin. N'inventez ni données ni repères. Énumérez vos hypothèses et les
questions auxquelles la vue ne peut pas répondre.
```

**Revoyez un tableau de bord pour sa clarté.**

```text
Voici une description de notre tableau de bord, qui liste chaque tuile, son
étiquette et sa définition : [paste]. Agissez comme un nouveau collègue qui le
lit pour la première fois. Listez quelles étiquettes sont ambiguës, quels
chiffres manquent de contexte ou de tendance, quelles tuiles pourraient inviter
à la gestion par la couleur et quelles tuiles pourraient être retirées. Ne
réécrivez pas les données. Énumérez vos hypothèses.
```

**Rédigez une fiche de métrique.**

```text
Rédigez une fiche de métrique pour [measure]. Incluez une définition simple, la
formule, l'unité, la source de données, le responsable, l'intervalle
d'actualisation, les lacunes connues, la façon la plus probable de la détourner,
le garde-fou associé et la décision qu'elle devrait éclairer. Tenez-vous-en à
moins de 200 mots. N'inventez pas de chiffres. Marquez tout ce dont vous n'êtes
pas sûr.
```

**Planifiez une revue de tableau de bord.**

```text
Planifiez une revue trimestrielle de 45 minutes du tableau de bord de notre
[team] avec son public. Incluez comment vérifier que les mesures ont servi à des
décisions, comment décider lesquelles retirer, comment consigner les événements
qui expliquent les tendances et comment éviter de classer des personnes. Listez
les questions que l'animateur devrait poser et la production à consigner.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à chaque mesure d'une vue proposée.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une spécification de tableau de bord comporte pour chaque mesure des définitions, des responsables et des vecteurs de détournement.

## Points clés à retenir

- Partez des questions que pose un public, et donnez à chaque public une petite vue à lui.
- Équilibrez l'ensemble, et associez chaque indicateur principal à une compagne qui garde contre la distorsion.
- Montrez la tendance, la distribution et le contexte avec chaque valeur, et respectez la variation normale.
- Joignez une définition, une source, un responsable et une heure d'actualisation à chaque mesure.
- Laissez les équipes voir et détenir d'abord leurs données, et ne montrez jamais d'individus.
- Passez le tableau de bord en revue avec son public, et retirez les mesures qui ont cessé d'éclairer des décisions.

## Références et lectures complémentaires

1. Few, S., *Information Dashboard Design: The Effective Visual Communication of Data*, O'Reilly Media, 2006.
2. Tufte, E., *The Visual Display of Quantitative Information*, Graphics Press, 1983.
3. Kaplan, R., and Norton, D., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, 1992.
4. Wheeler, D., *Understanding Variation: The Key to Managing Chaos*, SPC Press, 2000.
5. Axelos, *ITIL 4 Foundation*, 2019.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Dashboard (business)](https://en.wikipedia.org/wiki/Dashboard_(business)).
8. Wikipedia, [Data visualization](https://en.wikipedia.org/wiki/Data_visualization).
9. Wikipedia, [Sparkline](https://en.wikipedia.org/wiki/Sparkline).
10. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Chartjunk](https://en.wikipedia.org/wiki/Chartjunk).
13. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
16. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
