# Métriques de disponibilité

**La disponibilité est la part du temps, ou des requêtes d'utilisateurs, pendant laquelle un service a fait ce dont ses utilisateurs avaient besoin, et elle ne dit la vérité que si vous définissez ce que « en service » veut dire du côté de l'utilisateur, comptez séparément les pannes planifiées et non planifiées, et lisez l'arithmétique des neuf avant d'en promettre.**

## Résumé et motivation

La disponibilité est le nombre le plus cité de la gestion des services et l'un des moins précisément définis. Un énoncé tel que « le service a été disponible à 99,9 pour cent le mois dernier » paraît exact, mais il cache au moins quatre décisions : ce qui comptait comme le service, ce qui comptait comme « disponible », quelles heures étaient concernées et quelles pannes étaient exclues. Deux équipes peuvent rapporter le même service pour le même mois et publier des chiffres qui diffèrent d'un ordre de grandeur sans qu'aucune ait fait d'erreur d'arithmétique.

Ce sujet rend ces décisions explicites. Il couvre le calcul du temps de service et de l'indisponibilité, la disponibilité pondérée par les utilisateurs, la panne planifiée contre non planifiée et l'arithmétique des neuf. Il s'appuie sur les indicateurs de niveau de service (SLI), les objectifs de niveau de service (SLO) et les budgets d'erreur (voir le sujet 5.2, SLI, SLO et budgets d'erreur) et sur la vue contractuelle des niveaux de service (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA). Ces sujets disent comment choisir une cible. Celui-ci dit comment calculer le nombre auquel la cible est comparée.

### Termes employés dans ce sujet

- La **disponibilité** est la capacité d'un service à faire ce dont les utilisateurs ont besoin quand ils en ont besoin, généralement exprimée en pourcentage sur une période. Le concept général est décrit dans l'article sur la [haute disponibilité](https://en.wikipedia.org/wiki/High_availability).
- L'**[indisponibilité](https://en.wikipedia.org/wiki/Downtime)** est une période où un service n'est pas disponible. Ce sujet emploie **panne** pour un épisode continu d'indisponibilité et **dégradation** pour une période où le service fonctionne mais en dessous d'une qualité convenue.
- Le **temps de service** est le complément de l'indisponibilité dans la fenêtre de mesure. La disponibilité fondée sur le temps est le temps de service divisé par le temps total concerné.
- La **disponibilité fondée sur les requêtes** est la part des requêtes valides qui ont réussi, de sorte qu'un échec qui touche 5 pour cent des requêtes pendant une heure compte pour 5 pour cent du trafic d'une heure, non pour une heure complète d'indisponibilité.
- La **disponibilité pondérée par les utilisateurs** prolonge la vue fondée sur les requêtes en pondérant les échecs par le nombre ou l'importance des utilisateurs touchés, par exemple en comptant les sessions échouées ou les parcours échoués au lieu des requêtes brutes.
- Un **accord de niveau de service (SLA)** est un engagement envers un client, et un **objectif de niveau de service (SLO)** est une cible interne pour un indicateur. Les articles sur l'[accord de niveau de service](https://en.wikipedia.org/wiki/Service-level_agreement) et l'[objectif de niveau de service](https://en.wikipedia.org/wiki/Service-level_objective) donnent des définitions générales.
- L'**indisponibilité planifiée** est une panne annoncée à l'avance et approuvée par la maîtrise des changements. L'**indisponibilité non planifiée** est tout le reste. La frontière entre les deux est l'une des lignes les plus contestées du rapport de disponibilité.
- Le **[temps moyen entre pannes](https://en.wikipedia.org/wiki/Mean_time_between_failures)** (MTBF) est le temps de fonctionnement moyen entre les pannes, et le **[temps moyen de réparation](https://en.wikipedia.org/wiki/Mean_time_to_repair)** est le temps moyen de rétablissement. Les deux sont des moyennes ; ce livre les lit donc comme des distributions (voir le sujet 1.6, Culture statistique pour les métriques de service).
- La **[supervision synthétique](https://en.wikipedia.org/wiki/Synthetic_monitoring)** emploie des sondes scriptées qui se comportent comme un utilisateur et rapportent succès ou échec. La **[supervision des utilisateurs réels](https://en.wikipedia.org/wiki/Real_user_monitoring)** enregistre l'expérience des vrais utilisateurs quand ils emploient le service.
- **[ITIL](https://en.wikipedia.org/wiki/ITIL)** est le cadre le plus connu de gestion des services informatiques. Dans ITIL 4, la pratique de gestion de la disponibilité vise à s'assurer que les services livrent les niveaux de disponibilité convenus, et elle travaille étroitement avec la supervision et la gestion des événements, la gestion des incidents et la gestion de la continuité de service.

### Pourquoi un seul nombre ne suffit jamais

Dix pannes de quatre minutes et une panne de quarante minutes produisent le même total d'indisponibilité, mais elles sont vécues différemment par les utilisateurs et appellent des réponses différentes. Le premier schéma désigne un service fragile. Le second désigne une détection ou un rétablissement lents. Pour cette raison, les métriques ici viennent en un petit ensemble, chacune avec un garde-fou, afin qu'une équipe puisse discuter honnêtement de la disponibilité sans concourir pour le plus grand nombre de neuf.

### En quoi les visions ITIL et agile diffèrent

Dans ITIL, la disponibilité est un attribut géré d'un service, convenu avec le client et rapporté par la gestion des niveaux de service au regard d'une cible énoncée, avec des heures de service claires et des exclusions comme la maintenance planifiée.

Dans la pratique agile et d'ingénierie de la fiabilité des sites (SRE), la disponibilité est un SLI parmi d'autres, comparé à un SLO. Le livre *Site Reliability Engineering* de Google dit que la disponibilité fondée sur le temps convient à un système unique, tandis que le taux de réussite des requêtes convient aux services distribués qui sont partiellement en service à tout moment. Il dit aussi que 100 pour cent n'est presque jamais la bonne cible, parce que le coût de chaque neuf supplémentaire monte fortement.

Employez la discipline ITIL du périmètre, des heures et des exclusions convenus pour définir le dénominateur. Employez la discipline SRE des indicateurs centrés sur l'utilisateur et des budgets d'erreur pour définir le numérateur et décider quoi faire du résultat.

## Principes clés

- **Définir « disponible » du côté de l'utilisateur.** Un service qui répond aux contrôles de santé pendant que les utilisateurs ne peuvent pas se connecter est en panne pour les personnes qui comptent.
- **Écrire le dénominateur.** Énoncez la frontière du service, les heures concernées, le fuseau horaire et la fenêtre de mesure avant de calculer quoi que ce soit.
- **Compter séparément les pannes planifiées et non planifiées.** Rapportez les deux, ensemble, et ne laissez jamais l'une se cacher dans l'autre.
- **Préférer les mesures fondées sur les requêtes et pondérées par les utilisateurs pour les services distribués.** Une panne partielle n'est ni un temps de service complet ni une indisponibilité complète.
- **Convertir les neuf en minutes.** Une cible n'est comprise que si les gens peuvent dire combien de minutes d'échec par mois elle permet.
- **Choisir le nombre de neuf dont les utilisateurs ont besoin.** Au-delà de ce point, chaque neuf supplémentaire coûte plus qu'il ne rapporte.
- **Décrire des services, jamais des personnes.** La disponibilité appartient à un service et aux équipes qui l'exploitent, et n'est jamais le score d'un individu.

## Définitions des métriques

Chaque ligne énonce ses horloges et ses frontières. Le temps civil est employé sauf indication contraire d'une ligne. Là où une mesure emploie une distribution, rapportez la médiane et le 95e percentile, et nommez la fenêtre.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Disponibilité fondée sur le temps | Part du temps concerné pendant laquelle le service a répondu à la définition écrite de « en service » | (minutes concernées dans la fenêtre moins minutes d'indisponibilité non planifiée) / minutes concernées dans la fenêtre. L'horloge démarre à la première sonde échouée qui est ensuite confirmée comme impact sur les utilisateurs, ou au début d'impact confirmé consigné dans la revue d'incident ; s'arrête quand le service répond de nouveau à la définition. L'indisponibilité planifiée dans les heures de service convenues est montrée séparément, et le temps hors des heures de service convenues est exclu du dénominateur | pourcentage | Résultats de la supervision synthétique ; enregistrement d'incident avec horodatages de début d'impact et de rétablissement | Gestion de la disponibilité ; gestion des niveaux de service | Un SLI fondé sur le temps pour un système unique (voir le sujet 5.2, SLI, SLO et budgets d'erreur) | Mensuelle |
| Disponibilité fondée sur les requêtes | Part des requêtes valides qui ont réussi | requêtes valides réussies / total des requêtes valides dans la fenêtre. Les requêtes valides excluent les requêtes mal formées et les erreurs de client causées par l'appelant ; les échecs causés par le service, y compris les dépassements de délai, sont comptés comme des échecs. Rapportée par service et par parcours utilisateur | pourcentage | Journaux et métriques de l'équilibreur de charge, de la passerelle ou de l'application | Gestion de la disponibilité ; supervision et gestion des événements | SLI de taux de réussite avec un SLO et un budget d'erreur (voir le sujet 5.2, SLI, SLO et budgets d'erreur) | Tendance quotidienne, rapport mensuel |
| Disponibilité pondérée par les utilisateurs | Disponibilité pondérée par les utilisateurs ou les parcours touchés, de sorte qu'une panne en heure de pointe compte plus qu'une panne de nuit | 1 moins (sessions d'utilisateurs échouées ou parcours échoués / total des sessions d'utilisateurs ou des parcours) dans la fenêtre. Une session compte comme échouée si une étape critique définie a échoué ; le succès partiel est rapporté comme une part de dégradation séparée, non intégré | pourcentage | Supervision des utilisateurs réels ; journaux de sessions de l'application ; événements d'analyse | Gestion de la disponibilité ; gestion des niveaux de service | SLI par parcours et mesures d'expérience du sujet 6.2 (voir le sujet 6.2, Accords de niveau d'expérience) | Mensuelle |
| Indisponibilité non planifiée | Minutes pendant lesquelles le service était indisponible sans préavis approuvé | Somme des durées de pannes dans la fenêtre, du début d'impact confirmé au rétablissement confirmé, pour les pannes non annoncées et approuvées par la maîtrise des changements avant leur début. Les pannes qui se chevauchent sur le même service sont fusionnées, non additionnées. Rapportée comme total de minutes, nombre de pannes, et médiane et 95e percentile de la durée des pannes | minutes | Enregistrement d'incident avec horodatages de début d'impact et de rétablissement | Gestion des incidents ; gestion de la disponibilité | Temps de rétablissement lu comme une distribution (voir le sujet 3.3, Temps de réponse et de résolution des incidents) | Mensuelle |
| Part d'indisponibilité planifiée | Proportion de toute l'indisponibilité qui a été annoncée et approuvée à l'avance | minutes d'indisponibilité planifiée / (minutes d'indisponibilité planifiée plus non planifiée) dans la fenêtre. Une panne ne compte comme planifiée que si elle a été approuvée par un enregistrement de changement avant son début et que ses heures de début et de fin ont été communiquées aux utilisateurs ; un dépassement au-delà de la fenêtre approuvée est requalifié en non planifié à partir du moment où la fenêtre s'est terminée | pourcentage | Enregistrement de changement avec fenêtre approuvée ; enregistrement d'incident ; historique de la page d'état | Maîtrise des changements ; gestion de la disponibilité | Pratiques de mise en production et de maintenance qui favorisent le déploiement sans interruption (voir le sujet 4.3, Métriques de maîtrise des changements) | Mensuelle |
| Fréquence et espacement des pannes | À quelle fréquence les pannes commencent et combien de temps le service fonctionne entre elles | Nombre de pannes commençant dans la fenêtre ; et pour chaque paire de pannes consécutives, les minutes de service entre le rétablissement de la première et le début de la seconde, résumées en médiane et en 5e percentile. Non rapporté comme moyenne unique quand il existe moins de dix intervalles | nombre ; minutes | Enregistrement d'incident ; historique de supervision | Gestion des incidents ; gestion des problèmes | Signal de stabilité à côté du taux d'échec des changements (voir le sujet 4.4, Échecs de changement et reprises) | Mensuelle |
| Part de dégradation | Temps pendant lequel le service fonctionnait mais en dessous d'une qualité convenue | Minutes pendant lesquelles l'indicateur de latence, d'erreur ou d'exactitude a franchi son seuil, en excluant les minutes déjà comptées comme indisponibilité / minutes concernées. Seuil énoncé par service, par exemple dans le SLO | pourcentage | Supervision et mesures de SLI | Gestion de la disponibilité ; gestion de la capacité et de la performance | SLI de latence (voir le sujet 5.4, Métriques de capacité et de performance) | Mensuelle |
| Couverture de la mesure | Quelle part du comportement du service visible des utilisateurs la mesure de disponibilité observe réellement | Parcours utilisateur critiques avec une sonde active ou une mesure d'utilisateurs réels / parcours utilisateur critiques listés dans la définition du service | pourcentage | Définition du service ; configuration de la supervision | Supervision et gestion des événements ; gestion de la disponibilité | Couverture de l'observabilité et qualité des alertes (voir le sujet 5.5, Métriques de supervision et de qualité des alertes) | Trimestrielle |

Deux remarques sur les données. Une sonde qui vérifie toutes les cinq minutes ne peut pas résoudre une panne de deux minutes ; consignez donc l'intervalle de la sonde à côté du chiffre, et employez le champ de début d'impact de l'enregistrement d'incident (voir le sujet 1.5, Sources de données et instrumentation). Chaque fois que la définition de « en service » change, marquez-le sur le graphique de tendance.

## Recommandations

### Définir la mesure

**1. Écrivez la définition du service avant le pourcentage.** Listez la frontière du service, les parcours utilisateur critiques, les heures concernées, le fuseau horaire et la fenêtre (un mois civil est courant). Dites quelles dépendances comptent : si un fournisseur de paiement tombe en panne et que les utilisateurs ne peuvent pas payer, est-ce votre panne ? Consignez la réponse dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques). La plupart des disputes sur la disponibilité sont des disputes sur cette page, et les régler à l'avance coûte bien moins cher que de les régler après une panne.

**2. Définissez « en service » comme un résultat pour l'utilisateur, non comme un état de serveur.** Un contrôle de santé qui renvoie un succès pendant que la connexion est cassée mesure la mauvaise chose. Choisissez un petit nombre de parcours critiques, comme « chercher et consulter un article », « se connecter » ou « soumettre une demande d'indemnisation », et définissez le succès de chacun en termes que les utilisateurs reconnaîtraient. Sondez le parcours de bout en bout, et traitez une réponse lente au-delà d'un seuil convenu comme dégradée, non comme en service.

**3. Employez des mesures fondées sur les requêtes pour les services distribués et des mesures fondées sur le temps là où le service est réellement allumé ou éteint.** Un service mondial est rarement entièrement en panne ; compter les minutes de défaillance totale ignore donc la plupart des vrais échecs. Rapportez les deux quand vous le pouvez, et dites laquelle est le chiffre de titre et pourquoi.

**4. Ajoutez une pondération par les utilisateurs là où la charge est inégale.** Une panne de dix minutes à 4 heures du matin et une au début d'une journée de négociation ont la même durée et un coût très différent. Pondérez par les sessions ou les transactions de la minute de l'échec, ou rapportez les minutes de panne en heure de pointe comme un chiffre séparé.

**5. Mesurez depuis l'extérieur du domaine de défaillance.** Une sonde située dans le même réseau ou la même région que le service tombe avec lui, ou continue de rapporter un succès alors que le chemin emprunté par les utilisateurs est cassé. Faites tourner des sondes synthétiques depuis au moins deux emplacements indépendants et recoupez-les avec les données d'utilisateurs réels.

### Traiter honnêtement les pannes planifiées et non planifiées

**6. Rapportez côte à côte l'indisponibilité planifiée et non planifiée.** Beaucoup d'accords excluent la maintenance planifiée, ce qui est raisonnable. Les utilisateurs la vivent quand même comme de l'indisponibilité ; montrez donc les minutes exclues et la part planifiée à côté du chiffre de titre (voir le sujet 4.3, Métriques de maîtrise des changements).

**7. Rendez l'étiquette « planifié » difficile à obtenir.** Définissez planifié comme approuvé par un enregistrement de changement avant le début de la panne, avec des heures de début et de fin communiquées aux utilisateurs à l'avance. Une panne annoncée après son début est non planifiée. Un dépassement au-delà de la fenêtre approuvée est non planifié à partir du moment où la fenêtre s'est terminée. Ces trois règles empêchent l'étiquette de devenir un moyen de requalifier des échecs.

**8. Travaillez à réduire l'indisponibilité planifiée.** Les déploiements progressifs, les bascules de fonctionnalité, les migrations de schéma sans verrou et les mises en production bleu-vert permettent aux équipes de changer un service sans l'arrêter. Suivez les minutes d'indisponibilité planifiée comme une tendance et demandez ce qu'il faudrait pour les ramener vers zéro.

### Bien lire les chiffres

**9. Convertissez les neuf en minutes et montrez-les.** Le tableau ci-dessous donne l'arithmétique pour un mois de 30 jours (43 200 minutes) et une année de 365 jours (525 600 minutes). Placez sur le tableau de bord les minutes permises à côté de la cible, et montrez les minutes déjà employées dans la fenêtre. Les gens prennent de meilleures décisions sur « 43 minutes par mois » que sur « trois neuf ».

| Cible de disponibilité | Indisponibilité permise dans un mois de 30 jours | Indisponibilité permise dans une année de 365 jours |
| --- | --- | --- |
| 99 pour cent | 432 minutes (7,2 heures) | 5 256 minutes (87,6 heures) |
| 99,5 pour cent | 216 minutes (3,6 heures) | 2 628 minutes (43,8 heures) |
| 99,9 pour cent | 43,2 minutes | 525,6 minutes (8,76 heures) |
| 99,95 pour cent | 21,6 minutes | 262,8 minutes (4,38 heures) |
| 99,99 pour cent | 4,32 minutes | 52,56 minutes |
| 99,999 pour cent | environ 26 secondes | environ 5,26 minutes |

Les valeurs supposent que l'horloge tourne pendant toute la fenêtre. Si vous ne mesurez que les heures de service convenues, les minutes permises se réduisent proportionnellement, et vous devriez le dire.

**10. Respectez le coût de chaque neuf supplémentaire et les limites de vos dépendances.** Le livre SRE note que les coûts de fiabilité montent fortement avec chaque neuf supplémentaire, et que la cible devrait refléter ce dont les utilisateurs ont besoin et ce que l'entreprise est prête à payer. Un service peut rarement être plus disponible que les dépendances dont il a besoin en série. Si trois composants essentiels atteignent chacun 99,9 pour cent et qu'une requête a besoin des trois, la meilleure disponibilité attendue de la combinaison est d'environ 99,7 pour cent, car les probabilités d'échec s'additionnent quand les composants sont indépendants. Faites la multiplication avant de promettre un chiffre.

**11. Regardez l'espacement et la forme, pas seulement le total.** De fréquentes pannes courtes demandent une autre réponse qu'une seule panne longue et rare. Reliez les longues pannes à la détection et au rétablissement (voir le sujet 3.3, Temps de réponse et de résolution des incidents) et à la vue des incidents majeurs (voir le sujet 3.4, Métriques des incidents majeurs).

**12. Bouclez la boucle avec le budget d'erreur et l'enregistrement de problème.** Une cible de disponibilité est utile quand elle change ce que fait l'équipe. Quand le budget mensuel d'indisponibilité permise est presque dépensé, ralentissez le changement risqué et déplacez l'effort vers le travail de fiabilité, comme le décrit la politique de budget d'erreur (voir le sujet 5.2, SLI, SLO et budgets d'erreur). Quand la même cause revient, ouvrez un enregistrement de problème et suivez-le jusqu'à une correction (voir le sujet 4.1, Métriques de gestion des problèmes).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Disponibilité fondée sur le temps | Sonder une page triviale qui reste en service pendant que le vrai parcours échoue ; allonger l'intervalle de sonde pour que les courtes pannes tombent entre les contrôles ; réduire les heures concernées ; compter des pannes comme dégradation | Disponibilité pondérée par les utilisateurs et supervision des utilisateurs réels ; intervalle de sonde énoncé à côté du chiffre ; échantillon d'incidents au regard de l'enregistrement de supervision |
| Disponibilité fondée sur les requêtes | Compter des requêtes faciles (contrôles de santé, ressources en cache) dans le dénominateur pour diluer les échecs ; classer des erreurs de serveur comme erreurs de client ; exclure les nouvelles tentatives que les utilisateurs ont vécues comme des échecs | Taux de réussite par parcours critique, non par requête ; revue de la liste d'exclusions ; comparaison avec les incidents signalés par les utilisateurs |
| Disponibilité pondérée par les utilisateurs | Choisir la pondération pour que les échecs en pointe comptent peu ; définir une session « réussie » si lâchement que des étapes cassées passent quand même | Publier la règle de pondération et la liste des parcours ; comparer avec le volume de plaintes et de contacts du support pendant les pannes |
| Indisponibilité non planifiée | Requalifier des pannes en planifiées après coup ; retarder le début d'impact confirmé ; scinder une panne en deux pour paraître plus court | Part d'indisponibilité planifiée, avec la règle qu'une panne annoncée après son début est non planifiée ; comparer le début d'impact avec les données de supervision |
| Part d'indisponibilité planifiée | Inscrire des changements comme fenêtres approuvées pour que les dépassements et les échecs comptent comme planifiés ; gonfler la part planifiée en programmant une maintenance inutile | Minutes de dépassement requalifiées en non planifiées ; taux d'échec des changements et part de changements d'urgence (voir le sujet 4.4, Échecs de changement et reprises) |
| Fréquence et espacement des pannes | Fusionner des incidents, ou n'ouvrir un nouvel incident qu'après un long écart, pour garder le compte bas ; supprimer des alertes pour que les courtes pannes ne soient pas consignées | Échantillonnage des alertes et des incidents au regard des événements de supervision bruts ; couverture de la supervision et qualité des alertes (voir le sujet 5.5, Métriques de supervision et de qualité des alertes) |
| Part de dégradation | Fixer un seuil si lâche que le service lent ne le franchit jamais ; déclarer le temps dégradé comme en service | Percentiles de latence et lenteur signalée par les utilisateurs revus à côté du chiffre (voir le sujet 5.4, Métriques de capacité et de performance) |
| Couverture de la mesure | Ne lister que les parcours faciles à sonder, de sorte que la couverture se lit comme 100 pour cent ; compter un parcours comme couvert par une sonde qui ne tourne jamais | Liste de parcours convenue avec le responsable du service et les utilisateurs ; historique d'exécution des sondes échantillonné chaque trimestre |

Une lecture saine montre des chiffres qui bougent pour des raisons que l'équipe peut expliquer, avec l'indisponibilité planifiée et non planifiée toutes deux visibles et un chiffre pondéré par les utilisateurs proche du chiffre de titre. Méfiez-vous d'un mois parfait accompagné de plaintes. Un creux honnête occasionnel montre que le système d'enregistrement fonctionne.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Disponibilité fondée sur le temps | Simple, largement comprise, facile à comparer avec les contrats | Traite la panne partielle comme tout ou rien ; ignore le moment et les personnes |
| Disponibilité fondée sur les requêtes | Reflète la panne partielle ; passe à l'échelle des services distribués | Dépend d'une bonne définition d'une requête valide ; peut être diluée par un trafic facile |
| Disponibilité pondérée par les utilisateurs | Proche de ce que les utilisateurs ont vécu ; montre le coût d'un échec en heure de pointe | Exige des données de session ou de parcours ; plus d'effort pour l'expliquer |
| Exclure l'indisponibilité planifiée | Correspond à de nombreux accords ; récompense le préavis | Peut cacher un impact réel ; invite à la requalification |
| Cibles modérées avec budgets d'erreur | Équilibre fiabilité et vitesse de livraison | Exige de la discipline pour agir quand le budget est dépensé |

La réponse en prose est de choisir la mesure la plus simple qui convient au service, d'ajouter une pondération par les utilisateurs là où la charge est inégale, et d'être explicite sur chaque exclusion. Une mesure un peu moins élégante que tout le monde comprend fait plus de bien qu'une mesure sophistiquée en laquelle personne n'a confiance.

## Questions à discuter avec votre équipe

**1. Que veut dire « disponible » pour notre service le plus important, et un utilisateur serait-il d'accord ?**
Demandez à chaque personne de décrire, en une phrase, ce qu'un utilisateur doit pouvoir faire pour que le service compte comme en service. Comparez les réponses avec la définition écrite et avec la sonde qui alimente le tableau de bord. L'animateur doit guetter les lacunes comme la connexion, la recherche ou le paiement qui fonctionnent dans la sonde mais échouent en pratique. Terminez en convenant des parcours utilisateur que la définition doit nommer.

**2. Lesquelles des pannes du dernier trimestre notre calcul aurait-il exclues, et était-ce équitable ?**
Listez les pannes et marquez chacune comme planifiée, non planifiée ou exclue. Demandez qui a pris chaque décision et quand. L'animateur doit consigner les cas où les utilisateurs auraient été en désaccord avec l'étiquette, et s'en servir pour resserrer les règles.

**3. Combien de minutes d'indisponibilité notre cible permet-elle, et combien en avons-nous employé dans cette fenêtre ?**
Convertissez la cible en minutes pour le mois et l'année sur un tableau blanc. Comparez avec les minutes employées jusqu'ici. Demandez ce que l'équipe ferait différemment s'il ne restait que 20 pour cent du budget. Cela rend concrète la cible abstraite et relie le chiffre à la politique de budget d'erreur.

**4. Où notre mesure pourrait-elle manquer un échec que les utilisateurs ressentiraient ?**
Parcourez les emplacements des sondes, l'intervalle, les parcours couverts et les dépendances. Demandez quel échec passerait toutes les sondes et casserait quand même le service pour les utilisateurs. Convenez d'ajouter une nouvelle sonde ou une mesure d'utilisateurs réels.

**5. Planifions-nous des pannes que nous pourrions éviter ?**
Regardez l'indisponibilité planifiée sur six mois et demandez ce qui a forcé chaque panne. Certaines sont inévitables, comme une exigence d'un fournisseur. D'autres viennent d'une approche de mise en production ou de migration qui pourrait changer. Demandez ce qu'il faudrait pour supprimer la plus grande source, et qui détient ce travail.

**6. Si le chiffre de titre paraît parfait, qu'est-ce qui nous ferait douter ?**
Nommez les signaux qui contrediraient le tableau de bord : volume de plaintes, contacts du support ou souvenir de l'équipe d'astreinte. Vérifiez si certains existent en ce moment. Convenez d'une comparaison à placer sur le tableau de bord.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison affectent la disponibilité chaque fois qu'elles changent un service. Elles peuvent concevoir pour un déploiement sans interruption, employer des bascules de fonctionnalité pour limiter le rayon d'impact et traiter le budget d'erreur comme un apport aux décisions de mise en production, en lisant la disponibilité à côté des mesures de déploiement (voir le sujet 2.8, Métriques DORA).

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent les sondes, les enregistrements d'incidents et les rotations qui produisent les données. Elles devraient tenir à jour la définition et la liste d'exclusions, consigner honnêtement le début d'impact et passer la supervision en revue au regard des incidents réels. La disponibilité appartient au service et à sa rotation, jamais à un ingénieur d'astreinte (voir le sujet 5.7, Métriques de tâches répétitives et d'astreinte).

### Direction et gouvernance

Les dirigeants fixent les incitations qui décident si les données de disponibilité sont franches. Une revue qui demande « pourquoi avez-vous perdu un neuf ? » apprend aux équipes à cacher les pannes dans les exclusions. Demandez ce que l'équipe a appris et quel investissement réduirait les pannes, et ne demandez pas plus de neuf que les utilisateurs n'en remarqueront (voir le sujet 8.4, Métriques des fournisseurs et des contrats, pour les engagements des fournisseurs).

### Clients et utilisateurs

Les utilisateurs jugent la disponibilité à ce qu'ils ont pu faire ce pour quoi ils étaient venus. Ils tolèrent bien mieux une fenêtre de maintenance signalée qu'une surprise. Donnez-leur une page d'état avec des heures de début et de fin honnêtes, et lisez leurs retours à côté des chiffres (voir le sujet 6.2, Accords de niveau d'expérience).

## En pratique : un exemple d'ITIL agile

Un détaillant en ligne de taille moyenne exploite une vitrine, un service de paiement et un service de suivi des commandes. Les chiffres de cet exemple sont illustratifs.

L'équipe de paiement rapporte 99,95 pour cent de disponibilité fondée sur le temps pour le mois, ce qui permet 21,6 minutes d'indisponibilité non planifiée, et le tableau de bord montre 99,96 pour cent. La responsable du soutien aux clients est mal à l'aise, car les contacts du support sur des paiements échoués ont augmenté pendant le même mois. Elle demande à l'équipe de revoir la mesure.

L'équipe trouve trois problèmes. La sonde vérifie une page « le paiement est joignable » toutes les cinq minutes, non le parcours complet de paiement. Les données fondées sur les requêtes montrent que pendant deux soirées un dépassement de délai du fournisseur de paiement a fait échouer environ 4 pour cent des tentatives de paiement pendant environ 50 minutes chacune, et la sonde ne l'a jamais remarqué parce que la page elle-même se chargeait. Et une migration de base de données qui a dépassé sa fenêtre approuvée de 18 minutes avait été entièrement consignée comme maintenance planifiée.

L'équipe fait quatre changements. Elle ajoute une sonde synthétique pour le parcours complet de paiement depuis deux emplacements à un intervalle d'une minute. Elle ajoute des chiffres fondés sur les requêtes et pondérés par les utilisateurs, à l'aide des sessions qui ont atteint l'étape de paiement. Elle requalifie en non planifiées les minutes de dépassement. Et elle ajoute au rapport la part d'indisponibilité planifiée et la couverture de la mesure.

Sur la base corrigée, le mois montre une disponibilité fondée sur le temps de 99,93 pour cent, une disponibilité fondée sur les requêtes de 99,90 pour cent et une disponibilité pondérée par les utilisateurs de 99,84 pour cent, parce que les échecs sont tombés dans la pointe du soir. Les trois manquent la cible de 99,95 pour cent, ce qui est inconfortable. L'équipe et la responsable du soutien conviennent que le chiffre antérieur était trop généreux. Elles écrivent la définition corrigée dans le registre des métriques et mettent en œuvre la politique de budget d'erreur : pour le mois suivant, les changements risqués au paiement attendent que le budget se reconstitue, et l'équipe ouvre un enregistrement de problème pour les dépassements de délai du fournisseur de paiement (voir le sujet 4.1, Métriques de gestion des problèmes).

Le risque de détournement qu'elles attrapent est la requalification. Un responsable avait suggéré d'appeler le dépassement « maintenance prolongée » pour protéger la cible. La part d'indisponibilité planifiée, avec sa règle selon laquelle les dépassements deviennent non planifiés, a rendu la requalification visible, et l'équipe a gardé le chiffre honnête.

## Perspective sectorielle

**Startup.** Une petite équipe a souvent un seul service et peu de supervision. Commencez par une sonde sur le parcours le plus important et une définition d'un paragraphe de « en service ». Choisissez une cible modeste, convertissez-la en minutes et évitez de promettre des neuf que l'équipe ne peut pas encore mesurer.

**Petite entreprise.** Le service est souvent des outils hébergés plus quelques systèmes sur mesure, et la disponibilité dépend des fournisseurs. Consignez les pannes de fournisseurs telles qu'elles touchent vos utilisateurs, comparez avec ce que rapporte le fournisseur et gardez l'ensemble à deux ou trois chiffres.

**Grande entreprise.** De nombreux services, équipes et fournisseurs multiplient les définitions en usage. Publiez une définition standard de la disponibilité avec une courte liste de variantes permises, tenez à jour le registre des métriques et assurez-vous que les règles du planifié et du non planifié sont les mêmes entre équipes avant de les comparer. Préférez le rapport au niveau du service aux classements d'équipes, car les services diffèrent par la charge et la criticité.

**Gouvernement et secteur public.** Les services publics ont souvent des heures de service légales, des engagements publiés et des contrats avec crédits formels. Rapportez au regard de ceux-ci tels qu'écrits, montrez la vue pondérée par les utilisateurs à côté et soyez ouvert sur les exclusions (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les principaux coûts sont le temps d'écrire la définition du service et le registre, une supervision qui sonde les parcours critiques depuis l'extérieur du domaine de défaillance, et l'effort de joindre les données d'incidents, de changements et de supervision afin de pouvoir séparer l'indisponibilité planifiée et non planifiée. La supervision des utilisateurs réels ajoute des coûts d'outillage et de stockage. La plupart des organisations possèdent déjà une partie des données ; le premier investissement porte donc généralement sur les définitions.

Le retour vient de meilleures décisions et de moins de disputes. Les équipes qui mesurent du côté de l'utilisateur trouvent des échecs que les contrôles de santé manquent, les accords sont plus faciles à gérer avec une seule définition, et le coût d'un neuf supplémentaire peut être mis en regard de sa valeur pour les utilisateurs. Décrivez le bénéfice comme un schéma, tel que moins de surprises aux revues d'accords, et mesurez vos propres lignes de base, comme l'écart entre le chiffre de titre et le chiffre pondéré par les utilisateurs. N'empruntez pas de chiffres à d'autres organisations.

## Antimodèles et pièges

- **Citer les neuf sans les minutes.** Une cible que personne ne peut traduire en indisponibilité permise ne peut pas guider les décisions. Montrez les minutes permises et employées à côté de chaque cible.
- **Mesurer le serveur au lieu du parcours.** Un contrôle de santé vert peut côtoyer une connexion cassée. Sondez les parcours critiques de bout en bout et comparez avec les données d'utilisateurs réels.
- **Laisser l'étiquette « planifié » absorber les échecs.** Une catégorie planifiée facile à revendiquer vide le chiffre non planifié. Exigez une approbation avant la panne, communiquez-la et requalifiez les dépassements.
- **Faire la moyenne entre services et heures.** Un chiffre mélangé cache le service critique et l'heure de pointe. Rapportez par service, et ajoutez une vue pondérée par les utilisateurs.
- **Promettre plus de neuf que les dépendances ne le permettent.** Des composants en série ne peuvent pas dépasser leur disponibilité combinée. Multipliez avant de promettre, et demandez aux fournisseurs leurs chiffres mesurés.
- **Traiter 100 pour cent comme le but.** Le coût grimpe fortement et le changement ralentit. Choisissez la cible selon le besoin des utilisateurs et employez le budget d'erreur.
- **Classer des équipes ou des personnes selon leurs neuf.** Les services diffèrent par la charge et la criticité, et un classement apprend aux équipes à cacher les pannes. Montrez à chaque service sa propre tendance et comparez-la à sa propre cible.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définition et horloges | « En service » veut dire ce que montre l'outil de supervision ; les heures de panne sont estimées après coup | Écrites pour certains services ; les heures de sonde et d'incident divergent | Une définition écrite par service avec parcours, heures, exclusions et règles d'horloge | Définitions revues selon un rythme ; changements consignés et marqués sur les graphiques | Définitions alignées avec les fournisseurs et les clients et révisées quand elles cessent d'éclairer les décisions |
| Qualité de la mesure | Rapports manuels ou un seul contrôle de santé | Sondes pour certains services ; données de requêtes dans certains journaux | Sondes de l'extérieur vers l'intérieur sur les parcours critiques plus chiffres fondés sur les requêtes d'une source standard | Chiffres pondérés par les utilisateurs issus de données d'utilisateurs réels ; couverture suivie et échantillonnée | Mesures partagées entre équipes et fournisseurs et réconciliées automatiquement |
| Traitement du planifié et du non planifié | Aucune distinction ; maintenance comptée ad hoc | Étiquette « planifié » employée par certaines équipes, règles différentes | Une règle : approuvé avant la panne et communiqué, dépassements requalifiés | Part du planifié suivie avec un objectif de la réduire | Le changement sans interruption est la règle, et l'indisponibilité planifiée est rare et négociée |
| Usage dans les décisions | Rapporté après une plainte | Revu chaque mois par l'exploitation | Cibles montrées en minutes | La politique de budget d'erreur change le travail, avec financement | Disponibilité, coût et expérience arbitrés conjointement |

## Liste de vérification

- [ ] Chaque service a une définition écrite de « disponible » qui nomme ses parcours utilisateur critiques.
- [ ] La fenêtre de mesure, les heures concernées et le fuseau horaire sont énoncés pour chaque chiffre.
- [ ] La liste d'exclusions est écrite, revue et montrée à côté du chiffre de titre.
- [ ] L'indisponibilité planifiée exige un changement approuvé et un préavis ; les dépassements comptent comme non planifiés.
- [ ] Les sondes tournent depuis l'extérieur du domaine de défaillance, à un intervalle énoncé, sur les parcours critiques.
- [ ] Un chiffre fondé sur les requêtes ou pondéré par les utilisateurs figure à côté du chiffre fondé sur le temps.
- [ ] Chaque cible est montrée en minutes permises et en minutes employées dans la fenêtre courante.
- [ ] Le nombre de pannes et les percentiles de durée sont rapportés, et pas seulement le total.
- [ ] La disponibilité des dépendances est multipliée avant qu'une cible soit promise.
- [ ] Les changements de définition sont consignés et marqués sur le graphique de tendance.
- [ ] La disponibilité est rapportée par service et jamais par personne.

## Prompts d'IA

**Rédigez une définition de disponibilité de service.**

```text
J'écris une définition de disponibilité pour [service name], un [type of
service] employé par [user groups]. Ses parcours utilisateur critiques sont
[list journeys]. Les heures de service convenues sont [hours and time zone]. Les
dépendances connues sont [list]. Notre supervision consiste en [probes, logs,
real user data].

Rédigez une définition d'une page couvrant : ce qui compte comme en service pour
chaque parcours, la fenêtre de mesure, les heures concernées, les exclusions, la
règle du planifié contre le non planifié, le début et la fin de l'horloge d'une
panne, et les métriques à rapporter. N'inventez ni cibles ni valeurs de
référence. Énumérez vos hypothèses et les questions auxquelles je devrais
répondre pour terminer la définition.
```

**Convertissez une cible en indisponibilité permise et testez-la.**

```text
Notre cible pour [service name] est [availability percentage] sur [window, for
example a 30-day month]. Le temps concerné est [hours]. Nos dépendances
essentielles et leur disponibilité énoncée ou mesurée sont [list, or "unknown"].

Calculez l'indisponibilité que cette cible permet, en minutes, pour la fenêtre
et pour une année, en employant les heures concernées. Estimez ensuite la
meilleure disponibilité combinée si les dépendances sont nécessaires en série et
tombent en panne indépendamment, et expliquez la formule employée. Signalez où
mes données d'entrée sont trop incertaines pour conclure quoi que ce soit.
Ne fournissez de chiffre de disponibilité pour aucune dépendance que je ne vous
ai pas donnée. Énumérez vos hypothèses.
```

**Passez en revue un mois de pannes à la recherche de problèmes de classification.**

```text
Voici les enregistrements de pannes de [service name] pour [month] : [paste
records with impact start, restore time, planned or unplanned label, approval
time, and notes, with personal data removed].

Pour chaque panne, vérifiez si l'étiquette planifiée ou non planifiée suit cette
règle : [paste your rule]. Identifiez les enregistrements où le début d'impact
paraît tardif, où une panne semble scindée ou fusionnée, et où un dépassement
aurait dû être requalifié. Résumez les schémas par service et par cause, jamais
par personne. Dites-moi ce que vous n'avez pas pu juger à partir des données.
Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets apparentés et le garde-fou associé d'une mesure de disponibilité que vous êtes sur le point de rapporter.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une révision de ce sujet garde chaque métrique associée à un vecteur de détournement et à un garde-fou.

## Points clés à retenir

- La disponibilité n'a de sens qu'une fois « en service », la frontière du service, les heures et les exclusions écrits du côté de l'utilisateur.
- Les mesures fondées sur les requêtes et pondérées par les utilisateurs décrivent mieux les services distribués et la charge inégale que les minutes de défaillance totale.
- Rapportez ensemble l'indisponibilité planifiée et non planifiée, et rendez l'étiquette « planifié » difficile à obtenir.
- Convertissez chaque cible en minutes, et multipliez les dépendances en série avant de promettre un nombre de neuf.
- Chaque neuf supplémentaire coûte plus que le précédent ; choisissez donc la cible selon ce dont les utilisateurs ont besoin et employez le budget d'erreur pour agir.
- Décrivez des services et des rotations, jamais des personnes, et testez chaque chiffre de titre au regard de l'expérience des utilisateurs.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Embracing Risk", https://sre.google/sre-book/embracing-risk/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Service Level Objectives", https://sre.google/sre-book/service-level-objectives/.
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, chapter "Implementing SLOs", https://sre.google/workbook/implementing-slos/.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [High availability](https://en.wikipedia.org/wiki/High_availability).
7. Wikipedia, [Downtime](https://en.wikipedia.org/wiki/Downtime).
8. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
9. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
10. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
11. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
12. Wikipedia, [Synthetic monitoring](https://en.wikipedia.org/wiki/Synthetic_monitoring).
13. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
14. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
