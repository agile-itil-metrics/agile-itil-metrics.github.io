# Métriques FinOps et de coûts du nuage

**La dépense en nuage est décidée chaque jour par des ingénieurs ; donnez donc aux personnes qui construisent et exploitent les services les données de coût, le contexte et l'autorité d'agir dessus, et mesurez le gaspillage, l'affectation et le coût unitaire avec le même soin que vous accordez à la fiabilité.**

## Résumé et motivation

Dans un centre de données, la dépense est décidée par des bons de commande et arrive en quelques grandes marches. Dans le nuage, un développeur peut engager l'organisation dans une charge récurrente avec quelques lignes de configuration, et un environnement de test oublié peut coûter de l'argent pendant des mois. L'[informatique en nuage](https://en.wikipedia.org/wiki/Cloud_computing) offre un accès à la demande à des ressources de calcul, et le modèle du [paiement à l'usage](https://en.wikipedia.org/wiki/Pay_as_you_go) qui l'accompagne signifie que la facture suit l'usage. C'est puissant et risqué. La même souplesse qui permet à une équipe de passer à l'échelle en quelques minutes permet au coût de croître plus vite que quiconque le remarque.

Le FinOps, contraction de finance et d'opérations (operations), est une pratique et une culture de gestion du coût du nuage. La FinOps Foundation le décrit comme un cadre opérationnel dans lequel les équipes d'ingénierie, de finance, d'achats et du métier collaborent sur des décisions de dépense fondées sur les données. Son idée centrale est que les personnes qui emploient des ressources de nuage devraient voir leurs coûts et les assumer, tandis que la finance fournit la structure, les prévisions et les engagements. Cela correspond aux buts agiles de collaboration continue entre parties prenantes et d'équipes qui détiennent leurs services, et au souci d'ITIL pour la gestion financière des services. Ce sujet couvre les mesures qui rendent cette pratique concrète. Il s'appuie sur les idées générales de calcul des coûts du sujet précédent (voir le sujet 7.5, Coût du service et économie unitaire).

Le coût du nuage a des particularités qui demandent leurs propres mesures.

- **Élasticité.** L'[adaptation automatique de la capacité](https://en.wikipedia.org/wiki/Autoscaling) ajuste les ressources à la demande, ce qui rend le coût variable et parfois surprenant. L'[informatique sans serveur](https://en.wikipedia.org/wiki/Serverless_computing) facture par exécution, et déplace l'attention des serveurs vers les requêtes.
- **Nombreuses petites décisions.** Chaque choix de taille d'instance, de palier de stockage, de région et d'architecture change le coût. La dépense est répartie entre des centaines de décisions prises par de nombreuses personnes, et elle est difficile à voir sans étiquettes et sans bons rapports.
- **Modèles de prix.** Les prix à la demande sont souples et les plus élevés. Les engagements en échange d'une [remise sur volume](https://en.wikipedia.org/wiki/Volume_discount), comme la capacité réservée ou les plans d'économies, abaissent le prix unitaire en échange d'une promesse d'usage. La capacité ponctuelle ou préemptible est peu chère et peut être reprise. Chaque modèle comporte un risque, et le bon mélange dépend de la prévisibilité de la charge de travail. Les conditions exactes diffèrent selon les fournisseurs et changent souvent ; vérifiez donc la documentation actuelle du fournisseur avant de vous fier à un détail.
- **Coût partagé et sans étiquette.** Les ressources sans étiquette de responsable ou de but ne peuvent pas être attribuées. Les plateformes partagées répartissent le coût entre des équipes qui consomment différemment.
- **Coût environnemental.** Les charges de travail en nuage consomment de l'énergie et causent des émissions, et l'[empreinte carbone](https://en.wikipedia.org/wiki/Carbon_footprint) d'une charge de travail est de plus en plus une exigence de rapport. Les méthodes d'estimation sont encore en développement, et les chiffres devraient venir avec leur méthode.

Les mesures de coût dans le nuage sont faciles à améliorer par des raccourcis. Réduire la dépense en coupant la supervision ou en rétrécissant les ressources jusqu'à ce que le service s'effondre montre une facture plus basse et un service pire. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique : chaque mesure de coût ici se tient à côté d'une mesure de fiabilité ou de qualité, et aucune équipe n'est classée selon sa facture (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Le coût est une métrique d'ingénierie.** Les équipes qui construisent et exploitent un service voient son coût et l'assument.
- **Affecter aux responsables.** Chaque dollar devrait correspondre à une équipe ou à un bassin partagé déclaré.
- **Associer le coût à la qualité et à la fiabilité.** Des économies qui cassent le service ne sont pas des économies.
- **Optimiser en continu, par petites étapes.** Passez régulièrement le gaspillage en revue et agissez dans le cadre du travail normal.
- **Prévoir par des plages.** Une demande variable rend fragiles les prévisions à nombre unique.
- **Collaborer entre fonctions.** L'ingénierie, la finance, les achats et le métier décident ensemble.
- **Ne pas classer les équipes par leur facture.** Les services diffèrent, et la croissance n'est pas du gaspillage.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture de l'affectation | Part de la dépense en nuage attribuée à une équipe responsable ou à un bassin partagé déclaré | dépense avec un responsable et une étiquette de service valides, ou dans un bassin partagé déclaré / dépense totale en nuage | pourcentage | Export de facturation du nuage, politique d'étiquettes | Gestion financière des services ; gestion des actifs informatiques | Responsabilité de l'équipe sur ce qu'elle exploite | Hebdomadaire |
| Coût unitaire en nuage | Coût des ressources de nuage par unité de quelque chose que les utilisateurs apprécient | coût en nuage du service dans la période / unités livrées dans la période | monnaie par unité | Données de facturation jointes au volume du service | Gestion financière des services ; gestion des niveaux de service | Coût de service par résultat | Mensuelle |
| Taux de gaspillage | Part de la dépense en ressources inactives ou manifestement surdimensionnées | dépense en ressources inactives ou surdimensionnées, selon des règles convenues / dépense totale sur les ressources concernées | pourcentage | Métriques d'utilisation et facturation | Gestion de la capacité et de la performance ; gestion financière | Réduction du gaspillage dans la chaîne d'outils | Hebdomadaire |
| Couverture par les engagements | Part de l'usage stable éligible couverte par des engagements à remise | usage éligible couvert par des engagements / usage éligible | pourcentage | Rapports de facturation et d'engagements | Gestion financière des services ; gestion des fournisseurs | Planification pour une demande prévisible | Mensuelle |
| Utilisation des engagements | Part des engagements achetés qui ont été employés | heures d'engagement employées / heures d'engagement achetées | pourcentage | Rapports d'engagements | Gestion financière des services ; gestion des fournisseurs | Valeur tirée d'un investissement planifié | Mensuelle |
| Écart de prévision | Différence entre la dépense en nuage prévue et réelle, par équipe et au total | (réel moins prévu) / prévu | pourcentage | Journal des prévisions et données de facturation | Gestion financière des services | Exactitude des prévisions | Mensuelle |
| Délai d'accusé de réception des anomalies | Temps entre une alerte d'anomalie de coût et une décision consignée du responsable | médiane et 85e percentile des heures entre l'alerte et la réponse du responsable | heures | Alertes d'anomalies et enregistrements de tickets | Supervision et gestion des événements ; gestion des incidents | Réactivité à un signal de production | Mensuelle |

Définissez et consignez le périmètre des ressources, les règles d'étiquettes et ce qui compte comme inactif ou surdimensionné. La couverture par les engagements est calculée sur l'usage de base stable seulement, non sur les pointes. Le coût unitaire emploie une unité convenue avec le responsable du service et fixée pour la tendance. Les données de coût devraient dire si elles incluent les crédits, les remises, les taxes et les frais de soutien, et quelle monnaie et quel taux de change s'appliquent.

## Recommandations

### Rendre le coût visible et détenu

**1. Imposez un petit ensemble d'étiquettes obligatoires.** Exigez que chaque ressource porte une étiquette de responsable, de service et d'environnement, imposée par une politique à la création, non par un nettoyage après coup. La couverture de l'affectation mesure l'efficacité de ce dispositif. Les ressources qui ne sont pas étiquetées peuvent être bloquées, ou signalées dans la journée au titulaire du compte. Gardez petit l'ensemble d'étiquettes pour que les gens s'y conforment.

**2. Donnez aux équipes leur propre vue du coût.** Fournissez à chaque équipe une vue quotidienne ou hebdomadaire de sa dépense par service et par environnement, avec tendances et anomalies. Les gens réagissent aux données qu'ils peuvent voir et comprendre. Un rapport mensuel qui ne va qu'à la finance change peu de choses.

**3. Définissez des bassins de coûts partagés et leurs inducteurs.** Les plateformes partagées, le réseau et les frais de soutien ont besoin d'une règle de répartition (voir le sujet 7.5, Coût du service et économie unitaire). Publiez la règle, revoyez-la avec les équipes et gardez le bassin petit. Une règle que les gens peuvent suivre gagne plus de confiance qu'une règle équitable que personne ne comprend.

**4. Tenez une courte conversation régulière sur le coût.** Réunissez l'ingénierie, la finance et les responsables de produit à un rythme régulier, chaque semaine ou quinzaine pour les gros dépensiers et chaque mois pour les autres, pendant trente minutes. Passez en revue la tendance, les anomalies et le backlog d'optimisation. C'est la collaboration continue en pratique, et elle garde le coût à l'ordre du jour sans lourd processus.

### Mesurer la valeur, pas seulement la dépense

**5. Exprimez le coût par unité.** La dépense totale en nuage monte avec le succès. Ce qui compte est le coût par client actif, par transaction ou par construction. Choisissez une unité significative pour le service, suivez-la dans le temps et annotez les changements. Un coût unitaire en baisse avec une dépense totale en hausse est un schéma sain, et un coût unitaire en hausse avec un usage stable est une invitation à enquêter.

**6. Montrez la fiabilité et la qualité à côté du coût.** Affichez le coût avec la disponibilité, la latence et le taux d'erreur du même service (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Des économies qui relèvent les taux d'erreur sont un transfert de coût aux utilisateurs. Une approche par budget d'erreur peut rendre l'arbitrage explicite : dépenser moins quand le service est bien meilleur que nécessaire, et investir quand il ne l'est pas.

**7. Suivez le gaspillage avec des règles explicites.** Définissez inactif (par exemple, aucun usage significatif sur une période) et surdimensionné (par exemple, utilisation constamment très inférieure à la capacité provisionnée), et rapportez la dépense de chacun. Les règles demandent du soin : un système de réserve pour la résilience paraît inactif par conception, et devrait être exclu et étiqueté. Revisitez les règles quand elles produisent des faux positifs.

### Agir sur ce que vous trouvez

**8. Redimensionnez et nettoyez dans le travail normal.** Faites de la suppression du gaspillage un élément permanent du backlog de l'équipe, traité par petites étapes dans le cadre de l'amélioration continue. Planifiez l'arrêt des environnements hors production en dehors des heures de travail, supprimez le stockage non rattaché, choisissez des paliers de stockage appropriés et passez d'abord en revue les plus grosses lignes. De petits changements réguliers valent mieux que de rares nettoyages héroïques, qu'on oublie quand la pression monte.

**9. Faites correspondre le modèle de prix à la charge de travail.** Employez des engagements pour l'usage de base stable, le prix à la demande pour la charge variable et la capacité interruptible pour le travail qui tolère l'interruption. Engagez-vous progressivement, par petites quantités, et suivez la couverture et l'utilisation. Un surengagement gaspille de l'argent et un sous-engagement paie une prime. Associez la finance et les achats, et revérifiez les conditions auprès du fournisseur, car elles changent.

**10. Détectez les anomalies et réagissez.** Employez la détection d'anomalies sur la dépense, qui signale les changements soudains par rapport à une ligne de base. Les outils de [détection d'anomalies](https://en.wikipedia.org/wiki/Anomaly_detection) vont de simples seuils à des modèles statistiques. Alertez l'équipe responsable, et mesurez le temps qu'elle met à accuser réception et à décider. Une tâche mal configurée peut faire grimper une grosse facture en quelques heures ; la vitesse compte donc (voir le sujet 5.5, Métriques de supervision et de qualité des alertes).

### Prévoir et planifier

**11. Prévoyez avec des plages et des inducteurs.** Bâtissez les prévisions à partir des inducteurs de la demande, comme les utilisateurs ou les transactions attendus, avec le coût unitaire. Employez l'[analyse des écarts](https://en.wikipedia.org/wiki/Variance_analysis) pour expliquer les différences entre prévu et réel, et séparez celles dues au volume, au prix et au mélange. Donnez une plage et énoncez les hypothèses. L'écart de prévision devrait diminuer à mesure que le modèle s'améliore.

**12. Incluez la durabilité dans le tableau.** Estimez les émissions associées aux principales charges de travail à l'aide d'une méthode documentée, comme les rapports des fournisseurs ou des méthodologies publiées, et énoncez les limites de l'estimation. Comparez les choix de région, de type d'instance et de calendrier à la fois sur le coût et sur les émissions. Traitez les émissions par unité comme une compagne du coût par unité, et ne revendiquez pas une précision que la méthode ne peut soutenir.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Couverture de l'affectation | Étiqueter tout à un responsable fourre-tout ; déclarer de grands montants comme partagés | Part de la dépense détenue par des fourre-tout ; taille et revue du bassin partagé ; échantillon de confirmation des responsables |
| Coût unitaire en nuage | Choisir une unité qui croît à bon marché ; couper la fiabilité pour couper le coût | Définition d'unité fixe ; compagnes de fiabilité et de qualité |
| Taux de gaspillage | Rétrécir la définition d'inactif ; déplacer le gaspillage vers un compte hors périmètre | Règles dans le registre ; balayer tous les comptes ; échantillonner les ressources que les règles excluent |
| Couverture par les engagements | S'engager sur des bases gonflées pour courir après un pourcentage élevé | Utilisation des engagements ; vérifier la base au regard de l'historique d'usage |
| Utilisation des engagements | Ajouter un usage éligible inutile pour remplir les engagements | Comparer avec la croissance de la demande réelle ; coût unitaire |
| Écart de prévision | Gonfler les prévisions ; les réviser tard | Consigner la prévision au début ; suivre la largeur de la plage et le taux de réussite |
| Délai d'accusé de réception des anomalies | Accuser réception des alertes sans regarder ; clore les alertes automatiquement | Consigner une décision et un résultat ; échantillonner les alertes pour la qualité de la réponse |

Une lecture saine est une dépense presque entièrement détenue et visible, un coût unitaire qui bouge pour des raisons expliquées, un gaspillage qui diminue sans pannes, des engagements qui sont employés et des prévisions dont l'erreur se réduit dans le temps.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Une équipe centrale du nuage contrôle la dépense | Cohérence et pouvoir de négociation | Lente ; éloignée des décisions d'ingénierie |
| Les équipes détiennent leur coût en nuage | Décisions rapides et informées | Exige des données, de la formation et des garde-fous |
| À la demande seulement | Souple | Prix unitaire le plus élevé |
| Forts engagements | Prix unitaire plus bas | Enfermement et gaspillage si la demande baisse |
| Plafonds budgétaires stricts | Empêche les dépassements | Peut causer des pannes ou bloquer du travail valable |
| Alertes et revue | Préserve la vitesse | Dépend d'une réponse rapide |
| Redimensionnement agressif | Économise de l'argent | Risque pour la performance si poussé trop loin |
| Redimensionnement mesuré avec des SLO | Équilibré | Exige des données de fiabilité et du soin |

La réponse en prose est de donner aux équipes des données et de la responsabilité, de fixer des garde-fous comme des alertes et des budgets plutôt que des arrêts durs là où le service est critique, de s'engager progressivement sur la base stable et d'associer toujours le coût à la fiabilité.

## Questions à discuter avec votre équipe

**1. Quelle part de notre facture de nuage pouvons-nous attribuer aujourd'hui à un responsable, et qui est introuvable ?**
Regardez la part de dépense avec des étiquettes valides et les plus gros éléments sans étiquette. Demandez qui détiendrait chacun. L'animateur doit noter combien d'éléments personne ne revendique. Convenez d'une étape de politique d'étiquettes à imposer à la création.

**2. Qu'a fait notre coût par unité au cours des six derniers mois, et pourquoi ?**
Tracez le coût unitaire et annotez les changements d'architecture, de prix et de volume. Demandez lesquels étaient délibérés. Si la tendance est une surprise, discutez des données qui manquent. Ajoutez une mesure de qualité au graphique.

**3. Lesquelles de nos ressources éteindrions-nous demain si nous osions ?**
Listez les candidates : environnements inactifs, bases de données surdimensionnées, stockage oublié. Pour chacune, demandez quel est le risque et qui décide. Convenez d'un moyen sûr d'essayer d'en retirer une, comme la planification ou un instantané d'abord.

**4. Comment saurions-nous en une journée si une tâche se mettait à coûter dix fois plus ?**
Parcourez le chemin d'alerte de la facture au responsable. Testez-le avec un exemple passé. La conversation devrait révéler des retards et des lacunes de responsabilité. Convenez d'un délai cible pour accuser réception et décider, et de qui est de garde.

**5. Quelle part de notre usage de base pourrions-nous engager en sécurité, et qu'est-ce qui nous donnerait tort ?**
Examinez l'historique d'usage pour y trouver un plancher stable et les risques qui pèsent sur lui : changements de produit, migrations, changements de prix. Décidez d'un premier engagement modeste et d'une date de revue. Associez la finance à la discussion.

**6. Quel arbitrage entre coût et fiabilité faisons-nous par accident ?**
Passez en revue les économies et les incidents récents. Certains étaient-ils liés ? Discutez de la façon de rendre l'arbitrage explicite, par exemple en reliant les revues de coût aux budgets d'erreur. Décidez de qui peut approuver une coupe qui affecte la fiabilité.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison prennent les décisions qui pilotent le coût et sont les mieux placées pour le réduire. Elles devraient étiqueter à la création, consulter régulièrement leur vue du coût, intégrer le coût aux discussions de conception et traiter la réduction du gaspillage comme du travail normal. Elles devraient pouvoir voir l'effet d'un changement sur le coût peu après l'avoir fait, ce qui soutient l'apprentissage rapide.

### Équipes de service et d'exploitation

Les équipes d'exploitation et de plateforme gèrent les services partagés, appliquent la politique et exploitent les alertes d'anomalies. Elles devraient garder simple la conformité aux étiquettes, fournir des rapports en libre-service et publier des règles claires pour les coûts partagés. Elles devraient surveiller à la fois le coût et la fiabilité des plateformes qu'elles fournissent, et aider les équipes à agir sans devenir une porte.

### Direction et gouvernance

Les dirigeants et la finance veulent une dépense prévisible et une bonne valeur. Ils devraient financer l'outillage et le temps pour le travail sur le coût, accepter des plages dans les prévisions, éviter les classements d'équipes et demander le coût unitaire à côté de la qualité. La gouvernance devrait vérifier que les engagements sont pris avec des données et que les affirmations de durabilité énoncent leur méthode.

### Clients et utilisateurs

Les utilisateurs ressentent le coût du nuage indirectement, par les prix, les fonctions ou la stabilité du service. Ils gagnent quand les économies financent des améliorations et pâtissent quand les coupes réduisent la qualité. Là où les utilisateurs sont facturés à la consommation, ils veulent des factures claires et la possibilité de les influencer.

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne régional exploite sa boutique et sa plateforme de commandes sur un nuage public, avec six équipes d'ingénierie. Les chiffres ci-dessous sont illustratifs.

La dépense en nuage a crû régulièrement pendant un an, et le directeur financier demande une coupe. Le responsable du FinOps tire les données de facturation. La couverture de l'affectation est de 68 pour cent, un tiers de la dépense sans étiquette étant dans des comptes de test. Le coût par commande accomplie est de 0,31 dollar américain, contre 0,27 six mois plus tôt, alors que le volume de commandes a crû de 15 pour cent. Le taux de gaspillage selon les règles de l'équipe est de 14 pour cent de la dépense concernée, surtout des environnements hors production qui fonctionnent la nuit et le week-end et quelques bases de données surdimensionnées. La couverture par les engagements est de 20 pour cent de la base stable, avec 97 pour cent d'utilisation de ce qui a été acheté. Un écart de prévision de plus 18 pour cent le dernier trimestre a suivi une campagne marketing dont personne n'avait parlé à l'équipe de plateforme. Une tâche de données emballée dans un compte a tourné pendant deux jours avant que quelqu'un le remarque.

Le responsable convient de quatre changements avec les équipes d'ingénierie. Une politique d'étiquettes bloque les nouvelles ressources sans étiquettes de responsable et de service, avec une période de grâce de deux semaines. Chaque équipe reçoit une vue hebdomadaire du coût et un court créneau dans la conversation bimensuelle sur le coût. Les environnements hors production sont planifiés pour s'arrêter en dehors des heures de travail, et les trois bases de données surdimensionnées sont redimensionnées après vérification de leur performance au regard des objectifs de niveau de service. Un premier engagement couvre 60 pour cent de la base stable, avec une revue dans trois mois. Une alerte d'anomalie va à l'équipe responsable avec l'attente d'une décision consignée dans les quatre heures, et le calendrier de planification inclut maintenant les campagnes marketing.

Après un trimestre, la couverture de l'affectation est de 93 pour cent, le taux de gaspillage tombe à 6 pour cent, le coût par commande tombe à 0,26 dollar américain sans changement de la latence ni du taux d'erreur au paiement, et l'écart de prévision est de plus 5 pour cent. La couverture par les engagements est de 55 pour cent avec 96 pour cent d'utilisation. Le délai médian d'accusé de réception des anomalies est de 2 heures, avec un 85e percentile à 6. Le directeur financier demande un classement montrant le coût par équipe. Le responsable du FinOps refuse, expliquant que les équipes exploitent des services différents avec une croissance différente, et offre à la place la tendance du coût unitaire de chaque équipe avec ses mesures de fiabilité. La décision est consignée, et la prochaine date de revue est fixée.

## Perspective sectorielle

**Startup.** Les crédits et les factures basses peuvent cacher de mauvaises habitudes qui deviennent coûteuses à grande échelle. Étiquetez dès le premier jour, planifiez les ressources hors production et suivez tôt le coût par client. Ne vous engagez que lorsque la demande est prévisible.

**Petite entreprise.** Un seul compte et quelques services rendent l'étiquetage et la revue simples. Passez la facture en revue chaque mois avec la personne qui construit le système, supprimez les ressources oubliées et méfiez-vous des longs engagements. Une alerte budgétaire est le contrôle isolé le plus précieux.

**Grande entreprise.** De nombreux comptes, équipes et fournisseurs appellent une fonction FinOps centrale qui habilite les équipes au lieu de les contrôler. Standardisez les étiquettes et les exports de facturation entre fournisseurs, négociez les engagements de façon centrale et donnez aux équipes leurs données. Prévoyez les différences de rapport entre plusieurs nuages.

**Gouvernement et secteur public.** Les cadres de marchés, la résidence des données et les budgets annuels fixes contraignent les choix. Documentez les décisions de coût et de région, modélisez l'effet d'une dépense variable sur les crédits votés et gardez des pistes d'audit. Des engagements publics de durabilité peuvent exiger des émissions rapportées avec leurs méthodes (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts d'une pratique FinOps sont le temps de quelques personnes pour mener le rapport, la politique d'étiquettes et la conversation régulière ; l'outillage, qui peut être fourni par la plateforme de nuage ou acheté ; et le temps d'ingénierie pour agir sur les constats. Une petite pratique peut commencer avec un export de facturation et un tableur.

Les retours viennent d'un gaspillage réduit, de meilleurs prix grâce aux engagements, de moins de surprises et de meilleures décisions d'architecture. Bâtissez le dossier à partir de vos propres chiffres : le taux de gaspillage et son coût à la première revue, les économies de la planification des environnements hors production, la remise d'engagement sur la part engagée et le coût évité des anomalies attrapées tôt. Évitez de citer des pourcentages de gaspillage ou des chiffres d'économies à l'échelle du secteur sans source et méthode traçables. Incluez le coût de la pratique et le risque de surengagement. Le dossier financier des améliorations en général est couvert au sujet suivant (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Une équipe centrale qui dit non.** Elle ralentit le travail et les équipes la contournent. Habilitez les équipes avec des données et des garde-fous.
- **Couper le coût sans surveiller la fiabilité.** Les économies reviennent sous forme d'incidents. Associez le coût aux mesures de niveau de service.
- **Courir après la couverture par les engagements.** Un pourcentage élevé avec une faible utilisation est du gaspillage. Suivez les deux.
- **Des rapports mensuels à la finance seulement.** Les ingénieurs ne les voient jamais. Donnez aux équipes des vues quotidiennes ou hebdomadaires.
- **L'étiquetage comme projet de nettoyage.** Il se dégrade. Imposez les étiquettes à la création.
- **Classer les équipes par dépense.** La croissance ressemble à du gaspillage. Montrez les tendances du coût unitaire avec leur contexte.
- **Prévoir un nombre unique.** Une demande variable le brise. Employez des plages et des inducteurs.
- **Revendiquer des émissions précises.** Les méthodes d'estimation sont incertaines. Énoncez la méthode et les limites.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Visibilité et responsabilité | Facture mensuelle revue par la finance | Étiquettes employées par certaines équipes | Étiquettes obligatoires ; les équipes voient des vues hebdomadaires du coût | Couverture de l'affectation gérée ; bassins partagés revus | Les données de coût alimentent les décisions de produit en quasi-temps réel entre fournisseurs |
| Optimisation | Nettoyages occasionnels | Planifications et redimensionnement par certaines équipes | Règles de gaspillage et backlog permanent d'optimisations | Gaspillage, engagements et coût unitaire gérés avec des compagnes de fiabilité | Optimisation continue et automatisée sous supervision humaine et apprentissage partagé |
| Planification | Budget annuel | Prévisions approximatives | Prévisions fondées sur les inducteurs avec des plages | Écart analysé et réinjecté ; engagements gérés progressivement | Prévision conjointe avec le métier, les fournisseurs et les objectifs de durabilité |

## Liste de vérification

- [ ] Un petit ensemble d'étiquettes obligatoires (responsable, service, environnement) est imposé à la création des ressources.
- [ ] La couverture de l'affectation est rapportée chaque semaine, avec la liste des plus gros éléments sans étiquette.
- [ ] Chaque équipe a une vue hebdomadaire du coût avec tendances et anomalies.
- [ ] Une conversation régulière entre ingénierie et finance sur le coût est au calendrier.
- [ ] Le coût unitaire en nuage est suivi à côté de la disponibilité, de la latence et du taux d'erreur.
- [ ] Les règles de gaspillage sont écrites et appliquées, les exclusions étant étiquetées.
- [ ] Les engagements sont pris progressivement sur l'usage de base stable, la couverture et l'utilisation étant suivies.
- [ ] Les prévisions emploient des inducteurs et des plages, et l'écart est analysé.
- [ ] Les alertes d'anomalies atteignent les responsables avec un délai attendu de décision.
- [ ] Les estimations d'émissions, si elles sont rapportées, énoncent leur méthode et leurs limites.

## Prompts d'IA

**Analysez une tendance de coût.**

```text
Voici un résumé de notre coût et de notre usage en nuage pour [service] sur
[period] : [paste monthly cost, volume, and any known changes]. Décomposez la
variation du coût en effets de volume, de prix et de mélange autant que les
données le permettent, suggérez ce qu'il faut vérifier ensuite et proposez un
coût unitaire avec une compagne de qualité. N'inventez ni prix ni remises.
Énumérez vos hypothèses et les données dont vous auriez besoin pour être plus
certain.
```

**Rédigez une politique d'étiquettes.**

```text
Rédigez une politique d'étiquettes pour [type of organization] employant
[cloud provider(s)]. Incluez un ensemble minimal d'étiquettes obligatoires, les
valeurs permises, la manière dont elles sont imposées à la création, comment les
violations sont rapportées aux responsables et une période de grâce. Gardez-la
assez courte pour que les ingénieurs la suivent. Énumérez vos hypothèses et tout
ce qui dépend de fonctions du fournisseur que je devrais vérifier dans la
documentation actuelle.
```

**Définissez des règles de gaspillage.**

```text
Proposez des règles pour classer des ressources de nuage comme inactives ou
surdimensionnées dans [type of environment], y compris les métriques employées,
les fenêtres de temps, les exclusions (par exemple les réserves de résilience)
et un processus de revue des faux positifs. Décrivez comment éviter de nuire à
la fiabilité. Ne fixez pas de seuils numériques sans dire comment nous devrions
les calibrer à partir de nos propres données. Énumérez vos hypothèses.
```

**Planifiez un premier engagement.**

```text
Notre usage de base stable sur les derniers [period] est [summary] et les
risques de demande sont [list]. Décrivez un plan prudent pour un premier
engagement : comment estimer la base, combien engager, comment revoir
l'utilisation et ce qui nous ferait arrêter. Ne supposez pas de remises ni de
conditions précises d'un fournisseur. Énumérez vos hypothèses et vos questions
pour la finance et les achats.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de coût du nuage.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de coût du nuage porte son vecteur de détournement, son garde-fou et sa compagne de fiabilité.

## Points clés à retenir

- Rendez le coût visible et détenu : imposez les étiquettes à la création et donnez à chaque équipe sa propre vue hebdomadaire.
- Mesurez le coût par unité à côté de la fiabilité et de la qualité, jamais seul.
- Supprimez le gaspillage dans le travail normal, guidé par des règles écrites.
- Engagez-vous progressivement sur la base stable et suivez à la fois la couverture et l'utilisation.
- Prévoyez avec des inducteurs et des plages, et guettez les anomalies avec une réponse rapide.
- Ne classez pas les équipes par dépense, et énoncez la méthode et les limites de toute estimation d'émissions.

## Références et lectures complémentaires

1. Storment, J. R., and Fuller, M., *Cloud FinOps*, 2nd ed., O'Reilly, 2023.
2. FinOps Foundation, *FinOps Framework*, https://www.finops.org/framework/.
3. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Cloud computing](https://en.wikipedia.org/wiki/Cloud_computing).
7. Wikipedia, [Pay as you go](https://en.wikipedia.org/wiki/Pay_as_you_go).
8. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
9. Wikipedia, [Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing).
10. Wikipedia, [Volume discount](https://en.wikipedia.org/wiki/Volume_discount).
11. Wikipedia, [Carbon footprint](https://en.wikipedia.org/wiki/Carbon_footprint).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection).
14. Wikipedia, [Variance analysis](https://en.wikipedia.org/wiki/Variance_analysis).
