# L'IA dans la mesure de la gestion des services

**Avant que l'IA change le travail, écrivez à quoi il ressemble aujourd'hui, puis mesurez chaque usage de l'IA par rapport à cette ligne de base et par rapport à un travail comparable fait sans elle, car les affirmations seront grandes et les preuves généralement minces.**

## Résumé et motivation

L'intelligence artificielle se trouve désormais dans bien des outils que les équipes emploient pour construire et exploiter des services. L'[intelligence artificielle](https://en.wikipedia.org/wiki/Artificial_intelligence) (IA) est la capacité de systèmes informatiques à accomplir des tâches associées à l'intelligence humaine. À l'intérieur, les systèmes d'[apprentissage automatique](https://en.wikipedia.org/wiki/Machine_learning) apprennent des schémas à partir de données, et les systèmes d'[IA générative](https://en.wikipedia.org/wiki/Generative_artificial_intelligence), souvent bâtis sur de [grands modèles de langage](https://en.wikipedia.org/wiki/Large_language_model), produisent du texte, du code et d'autres contenus en réponse à des instructions. En gestion des services informatiques (ITSM), ces capacités apparaissent dans le triage des tickets, le résumé des incidents, la rédaction d'articles de connaissances, les réponses suggérées pour le centre de services, la complétion et la revue de code dans les chaînes de livraison, la détection d'anomalies dans la supervision et les assistants conversationnels pour les utilisateurs. L'[AIOps](https://en.wikipedia.org/wiki/AIOps) est le nom souvent donné à l'application de l'IA aux données d'exploitation informatique.

Les affirmations faites pour ces outils sont grandes, et les preuves dans une organisation donnée sont généralement minces. Les vendeurs rapportent du temps économisé. Les premiers adoptants rapportent de l'enthousiasme. Les dirigeants demandent le gain d'efficience qui a été promis. Les équipes, pendant ce temps, rapportent que la production doit être vérifiée, que certaines suggestions sont fausses avec aplomb et que le travail se sent différent. La mesure est la manière dont une organisation découvre laquelle de ces affirmations est vraie pour son propre travail. Cette partie du livre prend l'IA au sérieux comme chose à mesurer, avec les mêmes garde-fous que toute autre famille de métriques.

L'IA change le problème de mesure de quatre façons.

- **Le volume et la vitesse montent pendant que la qualité devient plus difficile à voir.** L'IA peut produire vite des tickets, des réponses, du code et des documents ; les mesures de production montent donc. Savoir si la production est bonne est une question distincte (voir le sujet 10.4, Inflation des métriques et dilution de la qualité).
- **Les lignes de base disparaissent.** Une fois l'IA d'usage quotidien, on ne peut plus retrouver à quoi ressemblait le travail sans elle. Une ligne de base doit être saisie avant le changement, ou un groupe de comparaison doit exister.
- **Les humains restent dans la boucle, avec des conséquences.** Les conceptions où l'[humain reste dans la boucle](https://en.wikipedia.org/wiki/Human-in-the-loop) gardent une personne responsable du résultat. Les gens qui revoient la production d'une machine peuvent s'en remettre trop facilement à elle, un schéma connu sous le nom de [biais d'automatisation](https://en.wikipedia.org/wiki/Automation_bias), ou passer plus de temps à vérifier qu'ils n'en ont économisé.
- **Les productions peuvent être fluides et fausses.** Une [hallucination](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) est une production assurée que ni l'entrée ni les faits ne soutiennent. Les mesures doivent inclure une vérification de l'exactitude, échantillonnée par une personne.

Les façons de travailler agiles et ITIL offrent toutes deux une posture face à cela. Les buts agiles de livraison continue, d'amélioration continue et d'évolution permanente suggèrent de traiter chaque usage de l'IA comme une petite expérience : énoncer le bénéfice attendu, l'essayer avec quelques personnes volontaires, comparer et décider. Le principe directeur d'ITIL de progresser par itérations avec retour va dans le même sens, et son insistance sur la valeur demande quel résultat s'améliore pour les utilisateurs et le métier, non quelle quantité de texte est produite. Le but de personnes motivées est servi quand l'IA soulage le travail fastidieux et respecte leur jugement, et il n'est pas servi quand l'IA devient un moyen d'accélérer le rythme ou de surveiller les personnes qui s'en servent. Un rythme soutenable signifie que le temps économisé ne devrait pas être silencieusement converti en demande supplémentaire.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique à l'IA sous sa forme la plus aiguë. Si l'« adoption de l'IA » ou la « part de code générée par l'IA » devient un objectif, les gens emploieront l'outil là où il n'aide pas, et la qualité paiera le chiffre (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Ce sujet couvre les fondations : où l'IA entre dans le travail, quelles lignes de base saisir et quelles mesures montrent si un usage de l'IA aide. Les sujets suivants approfondissent le travail assisté, les agents et agents conversationnels, l'inflation et la dilution, et la gouvernance. Les faits sur les produits et les règles d'IA changent rapidement, et les énoncés de cette partie sur des outils ou des réglementations précis sont datés d'octobre 2026 et devraient être revérifiés.

## Principes clés

- **Saisir une ligne de base avant d'introduire l'IA.** Sans elle, toute affirmation de bénéfice est une opinion.
- **Traiter chaque usage comme une expérience avec une comparaison.** Comparez avec un travail semblable fait sans IA, sur la même période.
- **Mesurer la qualité par échantillonnage, avec des personnes.** Une production fluide n'est pas une production exacte.
- **Compter le coût complet.** Incluez le temps de revue, la reprise, les licences et les coûts d'inférence.
- **Garder les gens redevables et informés.** La personne qui emploie l'IA répond du résultat.
- **Ne pas laisser l'IA devenir une accélération du rythme ou un moniteur.** Le temps économisé est un choix sur la manière de l'employer.
- **Commencer avec des personnes volontaires et de vrais problèmes.** Les mandats produisent de l'usage sans valeur.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Exhaustivité des lignes de base | Part des cas d'usage de l'IA prévus dotés d'une ligne de base consignée avant l'adoption pour leurs principaux indicateurs | cas d'usage avec ligne de base datée / cas d'usage prévus | pourcentage | Registre des cas d'usage | Amélioration continue ; mesure et rapport | Ligne de base avant une expérience | Trimestrielle |
| Couverture de l'usage de l'IA | Part des éléments de travail ou tâches admissibles où l'IA a été employée, par cas d'usage | éléments où l'assistance de l'IA a été employée / éléments admissibles, à partir des journaux de l'outil ou d'étiquettes d'utilisateurs, au niveau de l'équipe | pourcentage | Journaux d'usage de l'outil, étiquettes | Centre de services ; gestion des incidents ; gestion des mises en production et des déploiements | Adoption d'un outil par des équipes volontaires | Mensuelle |
| Taux d'acceptation et de modification des suggestions | Part des suggestions de l'IA acceptées telles quelles, modifiées ou rejetées | suggestions de chaque catégorie / suggestions offertes | pourcentage | Journaux de l'outil agrégés par équipe | Centre de services ; gestion des connaissances | Revue des suggestions de la machine | Mensuelle |
| Exactitude de la production revue | Part des productions de l'IA échantillonnées jugées correctes et adaptées à l'usage par un examinateur qualifié | productions jugées correctes / productions échantillonnées | pourcentage | Enregistrements de revues par échantillon | Assurance qualité ; gestion des connaissances | Définition de terminé pour la production | Mensuelle |
| Temps de tâche par rapport à la ligne de base | Temps pour accomplir une tâche définie avec l'IA comparé à la ligne de base ou à un groupe de comparaison | médiane et 85e percentile du temps de tâche avec l'IA moins le même pour la ligne de base ou la comparaison | minutes ou heures | Tâches chronométrées, horodatages de tickets | Centre de services ; gestion des incidents | Temps de cycle d'une tâche | Trimestrielle |
| Coût par tâche assistée par l'IA | Coût total du travail assisté par l'IA par tâche, y compris la revue et la reprise | (coût de licence et d'usage + coût en temps de revue et de reprise) / tâches achevées avec l'IA | monnaie par tâche | Factures des fournisseurs, estimations de temps, suivi du travail | Gestion financière des services | Coût de service par résultat | Trimestrielle |
| Évolution des résultats par rapport à une comparaison | Variation de l'indicateur de résultat pour le travail assisté par l'IA comparé à un travail semblable non assisté | variation de l'indicateur du groupe assisté par l'IA moins variation du groupe de comparaison | unités de l'indicateur | Mesures de résultats par cas d'usage (qualité, satisfaction, taux de réouverture, défauts) | Amélioration continue | Apprentissage tiré des expériences | Trimestrielle |

Définissez chaque cas d'usage par la tâche, les utilisateurs et les indicateurs de résultats, et consignez-les dans le registre. La couverture de l'usage de l'IA est une mesure descriptive et non un objectif. L'exactitude de la production revue est jugée par rapport à une norme écrite par une personne qualifiée qui n'a pas produit la production. Le temps de tâche inclut le temps de formuler les instructions, de revoir et de corriger autant que de générer. Le coût par tâche compte le temps humain passé à vérifier et à corriger. L'évolution des résultats exige une comparaison choisie d'avance et une note sur les autres changements pendant la période.

## Recommandations

### Décider où l'IA a sa place

**1. Listez les tâches et le problème que chaque usage de l'IA traite.** Partez de la douleur, non de l'outil : rédaction répétée, triage lent, connaissances dispersées, longues revues, alertes bruyantes. Pour chaque usage candidat, écrivez le problème, qui le ressent, le résultat qui devrait s'améliorer et les risques. Laissez de côté les usages sans problème clair. C'est le registre auquel se rattachent la ligne de base et les mesures.

**2. Classez le risque de chaque usage.** Un outil qui rédige des notes internes comporte un risque différent de celui qui change des systèmes de production, répond à des clients ou prend des décisions sur des personnes. Classez les usages selon le dommage si la production est fausse, qui est touché et si une personne la revoit avant qu'elle prenne effet. Les usages à plus haut risque exigent des mesures, un échantillonnage et une gouvernance plus solides (voir le sujet 10.5, Métriques de gouvernance et de risque de l'IA).

**3. Commencez avec des personnes volontaires et des tâches délimitées.** Menez un projet pilote avec des volontaires sur une tâche courante et vérifiable. Les volontaires donnent un retour honnête et adaptent l'outil à leur travail. Une tâche délimitée rend possibles les lignes de base et les comparaisons. Évitez de commencer par le travail le plus sensible.

### Saisir les lignes de base et mettre en place des comparaisons

**4. Consignez la ligne de base avant le premier usage.** Pour chaque cas d'usage, saisissez l'état actuel des indicateurs : temps d'achèvement, qualité ou taux de défauts, reprise, satisfaction des utilisateurs et coût. Prenez assez d'observations pour voir la variation normale (voir le sujet 1.6, Culture statistique pour les métriques de service). Datez la ligne de base et conservez-la. Une ligne de base prise après le déploiement est un enregistrement du nouveau monde.

**5. Bâtissez une comparaison.** Là où c'est possible, gardez un groupe semblable ou un ensemble de tâches qui n'emploie pas l'IA pendant la période pilote, ou alternez l'usage par semaine ou par type de tâche de façon équitable. La randomisation est idéale et souvent impraticable. Dites clairement ce qui a changé d'autre. Sans comparaison, les améliorations dues à la saisonnalité, aux effectifs ou à l'apprentissage seront portées au crédit de l'outil.

**6. Mesurez honnêtement le temps.** Le temps jusqu'à un premier brouillon est rarement la bonne mesure. Mesurez le temps jusqu'à un résultat fini et vérifié, y compris la formulation des instructions, la revue et la correction. Les gens rapportent souvent un gain de temps fondé sur l'étape de génération, et l'étape de revue en mange une partie ou la totalité. Des études de temps sur un échantillon de tâches valent l'effort.

### Mesurer la qualité et le coût

**7. Échantillonnez les productions pour les faire revoir par des personnes qualifiées.** Chaque mois, tirez un échantillon aléatoire de productions assistées par l'IA et faites-les juger par une personne qualifiée par rapport à une norme écrite. Rapportez l'exactitude, les genres d'erreurs trouvées et les tendances. C'est la principale protection contre la propagation d'erreurs fluides. Gardez l'examinateur indépendant du producteur, et faites tourner les examinateurs.

**8. Surveillez les schémas d'acceptation et de modification.** Un taux d'acceptation très élevé peut signaler un biais d'automatisation, où les gens acceptent sans vérifier. Un taux très bas peut signaler un outil peu utile. Employez les taux comme invitations à la conversation avec l'équipe et demandez ce que les chiffres signifient dans son expérience. Ne fixez pas d'objectifs d'acceptation.

**9. Comptez le coût complet par tâche.** Incluez les frais de licence, les charges selon l'usage, le temps passé à formuler les instructions, à revoir et à corriger, la formation et l'effort de gouvernance. Comparez avec le coût de la ligne de base. Un outil qui produit vite des brouillons et demande une forte correction peut coûter plus que l'ancienne façon. Incluez le coût des erreurs qui atteignent les utilisateurs.

### Bien traiter le côté humain

**10. Protégez les gens de la surveillance et de la dérive du rythme.** Agrégez les données d'usage de l'IA au niveau de l'équipe et ne les employez pas pour coter des individus. N'employez pas l'usage comme mesure de performance. Convenez d'avance que le temps économisé ne deviendra pas automatiquement de la charge supplémentaire, et décidez avec l'équipe de ce qu'on en fait : qualité, apprentissage, amélioration ou autre travail. Un rythme constant est un objectif de conception (voir le sujet 9.2, Métriques de satisfaction et de bien-être).

**11. Interrogez les personnes qui s'en servent.** De courts sondages éclairs et des conversations révèlent ce que les chiffres manquent : où l'outil aide, où il frustre, où il déplace le travail de la création vers la vérification, et s'il change la satisfaction du travail. Traitez avec respect les préoccupations sur les compétences, la qualité et la sécurité d'emploi.

**12. Décidez, publiez et revisitez.** À la fin de chaque projet pilote, décidez de passer à l'échelle, d'adapter ou d'arrêter, et consignez les preuves. Partagez honnêtement les résultats, y compris les résultats nuls et négatifs. Revisitez les décisions à mesure que les outils changent, ce qu'ils font rapidement. Un usage qui n'a pas aidé l'an dernier peut aider maintenant, et l'inverse.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Exhaustivité des lignes de base | Consigner les lignes de base après coup ; employer des indicateurs commodes | Lignes de base horodatées ; revue indépendante de la méthode de ligne de base |
| Couverture de l'usage de l'IA | Imposer l'usage ; compter des invocations triviales ou automatiques | Jamais un objectif ; comparer à l'évolution des résultats ; compter l'usage significatif |
| Taux d'acceptation et de modification des suggestions | Récompenser l'acceptation ; rendre le rejet fastidieux | Aucun objectif ; exactitude de la production revue ; interroger les utilisateurs sur leur expérience |
| Exactitude de la production revue | Échantillonner des productions faciles ; examinateurs indulgents | Échantillon aléatoire par des examinateurs indépendants ; norme écrite ; rotation des examinateurs |
| Temps de tâche par rapport à la ligne de base | Ne chronométrer que la génération ; choisir des tâches faciles | Temps jusqu'au résultat vérifié ; échantillonner les tâches au hasard ; inclure la revue et la reprise |
| Coût par tâche assistée par l'IA | Omettre le temps de revue ou le coût de gouvernance | Liste de vérification du coût complet ; comparer aux études de temps |
| Évolution des résultats par rapport à une comparaison | Choisir des groupes ou des périodes favorables ; ignorer d'autres changements | Comparaison et période convenues d'avance ; liste des autres changements |

Une lecture saine est des lignes de base pour chaque projet pilote, un temps mesuré jusqu'aux résultats finis, une exactitude vérifiée par des personnes qualifiées, des coûts qui incluent la revue, des résultats comparés équitablement, et des équipes qui disent que l'outil sert leur jugement.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Projet pilote avec volontaires | Retour honnête ; faible risque | Les volontaires sont des enthousiastes ; les résultats peuvent ne pas se généraliser |
| Déploiement imposé | Couverture rapide | Usage sans valeur ; ressentiment ; détournement |
| Comparaison contrôlée | Preuves crédibles | Effort ; pas toujours possible |
| Avant-après seulement | Simple | Brouillé par d'autres changements |
| Économies rapportées par le vendeur | Faciles à obtenir | Optimistes ; sans contexte |
| Tâches chronométrées par vous-même | Ancrées dans votre travail | Longues ; petits échantillons |
| Forte revue de chaque production | Sûre | Supprime le bénéfice |
| Revue par échantillon | Passe à l'échelle | Certaines erreurs passent |

La réponse en prose est de mener de petits projets pilotes avec lignes de base et comparaisons, d'échantillonner les productions pour la qualité, de compter le coût complet et de décider sur les preuves. Employez les chiffres des vendeurs comme des hypothèses à éprouver.

## Questions à discuter avec votre équipe

**1. Où attendons-nous que l'IA nous aide, et que verrions-nous si elle le faisait ?**
Listez les usages candidats et, pour chacun, l'indicateur et la ligne de base que nous avons aujourd'hui. L'animateur doit pousser à la précision : quelle tâche, quelle mesure, quelle ampleur de changement compterait. Choisissez un usage à piloter et convenez de la ligne de base.

**2. Qu'est-ce qui nous ferait faire confiance ou non à une suggestion de l'IA, et comment saurions-nous que nous avons eu tort ?**
Discutez de cas où la production était fausse et de la façon dont on l'a remarqué. Considérez comment la revue fonctionne en pratique et si la pression conduit à la sauter. Convenez d'une méthode d'échantillonnage que quelqu'un d'indépendant appliquera.

**3. Quelle part du temps que nous économisons serait dépensée à vérifier ?**
Chronométrez une tâche réelle avec et sans l'outil, y compris la formulation des instructions et la revue. Comparez avec ce que les gens attendent. La conversation révèle souvent où est le gain et où il n'est pas.

**4. Que devrions-nous faire du temps que nous économisons ?**
Décidez d'avance. Les options incluent le travail de qualité, l'apprentissage, l'amélioration ou moins de pression. Discutez de la façon d'éviter que le temps soit silencieusement absorbé par plus de demande. Convenez avec les dirigeants de la manière dont l'équipe le protégera.

**5. Que ne voudrions-nous pas que l'IA fasse ici, et pourquoi ?**
Listez les tâches qui demandent du jugement humain, de l'empathie ou de la redevabilité. Discutez des risques pour les utilisateurs et pour les compétences. L'animateur doit consigner les limites comme intrants de la gouvernance.

**6. Comment saurons-nous quand arrêter ?**
Définissez les preuves qui mettraient fin au projet pilote ou à l'usage. Convenez de qui décide et quand. Un projet pilote sans critères de sortie devient un élément permanent.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison emploient l'IA pour le code, les tests, les revues et la documentation. Elles devraient mesurer le temps jusqu'à un résultat revu et fonctionnel, surveiller la qualité et les défauts, et garder la revue humaine significative. Elles devraient résister aux métriques qui comptent les lignes générées ou l'acceptation, et insister sur des mesures de résultats comme les défauts et la stabilité.

### Équipes de service et d'exploitation

Les équipes d'exploitation et de centre de services emploient l'IA pour le triage, les résumés, les suggestions et la supervision. Elles devraient comparer la qualité du traitement et de la résolution avec les lignes de base, échantillonner les productions et guetter les effets sur les utilisateurs et sur les contacts répétés. Elles devraient être consultées avant qu'une IA soit placée devant les utilisateurs.

### Direction et gouvernance

Les dirigeants parrainent les programmes d'IA et font face à la pression de montrer des gains. Ils devraient insister sur les lignes de base et les comparaisons, financer le travail de revue, éviter les objectifs d'usage et protéger les gens de la surveillance et de la dérive du rythme. La gouvernance devrait exiger une classification des risques et des preuves avant le passage à l'échelle.

### Clients et utilisateurs

Les utilisateurs rencontrent l'IA dans des réponses, des suggestions et des actions automatisées. Ils veulent une aide correcte et compréhensible et la possibilité de joindre une personne. On devrait leur dire quand ils interagissent avec une IA là où c'est approprié, et leurs retours sont la preuve essentielle que l'IA aide (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple d'ITIL agile

Le groupe technologique d'un assureur de taille moyenne exploite un centre de services interne pour 4 000 employés et plusieurs équipes produit. La direction achète des licences pour un assistant d'IA et demande un rapport du temps économisé après trois mois. Les chiffres ci-dessous sont illustratifs.

La responsable de la gestion des services insiste sur une ligne de base. Pour la tâche la plus courante du centre de services, la rédaction de réponses aux demandes d'accès et de mots de passe, elle chronomètre 120 tickets récents : temps de traitement médian de 11 minutes, 85e percentile de 24, taux de réouverture de 6 pour cent, et un score de satisfaction du sondage qui est stable. Elle choisit deux équipes pour piloter l'assistant et garde deux équipes semblables comme comparaison. Les équipes pilotes sont volontaires.

Après huit semaines, le temps de traitement médian des équipes pilotes est de 8 minutes et le 85e percentile de 19, contre 11 et 23 dans les équipes de comparaison. Les journaux de l'outil montrent que les agents acceptent les suggestions telles quelles dans 52 pour cent des cas, les modifient dans 38 pour cent et les rejettent dans 10 pour cent. Un échantillon aléatoire mensuel de 80 réponses, revu par un agent senior hors du projet pilote, en trouve 91 pour cent entièrement correctes, les erreurs se concentrant dans une procédure rarement employée où l'assistant a donné des étapes périmées. Le taux de réouverture dans les équipes pilotes monte légèrement à 7 pour cent, dans la variation normale. Le coût par ticket baisse modestement une fois comptés les licences et le temps de revue. Un sondage montre que les agents apprécient les brouillons et n'aiment pas la vérification supplémentaire des longues réponses. Deux agents disent ressentir la pression de traiter plus de tickets par heure.

La responsable de la gestion des services rapporte un gain de temps d'environ un quart à la médiane et énonce les réserves : deux équipes, huit semaines, des volontaires, et un taux de réouverture à surveiller. Elle convient avec les dirigeants que le temps économisé ira à la base de connaissances et aux cas complexes, et qu'aucun objectif de tickets ne montera. La procédure périmée est corrigée dans la base de connaissances. Un cadre supérieur demande un usage obligatoire dans toute l'entreprise et un objectif de 80 pour cent d'acceptation. Elle refuse l'objectif, expliquant qu'un objectif d'acceptation récompenserait le fait de ne pas vérifier, et propose d'étendre le projet pilote à deux équipes de plus avec les mêmes mesures. La décision est consignée.

## Perspective sectorielle

**Startup.** Les outils sont adoptés vite et souvent de façon informelle. Saisissez une simple ligne de base de temps et de défauts pour l'usage principal, gardez la revue humaine de tout ce qui est visible par les clients et évitez de vous enfermer tôt chez un seul vendeur. Guettez la sécurité et l'exposition des données quand le personnel emploie des outils publics.

**Petite entreprise.** Les assistants prêts à l'emploi peuvent offrir une aide réelle pour la rédaction et les tâches courantes. Mesurez à petite échelle : le temps de quelques tâches réelles et le taux de corrections. Soyez prudent avec les données confidentielles, et vérifiez les conditions des vendeurs sur l'usage des données.

**Grande entreprise.** L'échelle exige de la gouvernance, des normes d'achat et une approche commune de la mesure. Menez des projets pilotes avec comparaison, publiez les résultats en interne et partagez les lignes de base et les méthodes entre équipes. Méfiez-vous des programmes qui rapportent l'usage comme un succès.

**Gouvernement et secteur public.** Les décisions qui touchent les citoyens peuvent être soumises à des obligations légales de transparence, d'équité et de revue humaine. Classez les usages par risque, gardez des traces de la façon dont l'IA a été employée dans les décisions et soyez ouvert à ce sujet. Les règles de marchés publics et de protection des données s'appliquent, et certaines juridictions ont des lois précises sur l'IA qu'il faut vérifier à la date d'aujourd'hui (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont les licences ou les charges selon l'usage, l'intégration, la formation, le temps de saisir les lignes de base et de mener les comparaisons, le temps humain passé à revoir et à corriger les productions, et l'effort de gouvernance. Les coûts peuvent croître avec l'usage et changer avec la tarification des vendeurs ; modélisez donc une plage.

Les retours potentiels sont du temps récupéré sur des tâches répétitives, une rédaction et une recherche plus rapides, une meilleure couverture des connaissances et un soulagement du personnel face au travail fastidieux. Ce sont des possibilités à éprouver, non des hypothèses à encaisser. Bâtissez le dossier à partir de vos propres projets pilotes : temps de tâche mesuré jusqu'à un résultat vérifié, exactitude revue, reprise et coût complet par tâche, par rapport à la ligne de base et à la comparaison. Évitez de citer des pourcentages de productivité tirés de sources de vendeurs ou de sondages à moins de pouvoir retracer la méthode et l'adéquation à votre travail. Incluez le risque d'erreurs qui atteignent les utilisateurs et le coût de gouverner les outils (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Introduire l'IA sans ligne de base.** On ne peut pas dire ce qui a changé. Saisissez-la d'abord.
- **Mesurer la vitesse de génération.** Le gain peut disparaître en revue. Mesurez le temps jusqu'au résultat vérifié.
- **Objectifs d'adoption.** Ils produisent de l'usage sans valeur. Traitez la couverture comme descriptive.
- **Faire confiance aux affirmations des vendeurs.** Ce sont des hypothèses. Éprouvez-les sur votre travail.
- **Une revue qui n'est pas réelle.** Le biais d'automatisation transforme la revue en tampon. Échantillonnez et vérifiez de façon indépendante.
- **Convertir le temps économisé en demande supplémentaire.** Cela érode la confiance et le rythme soutenable. Décidez d'avance à quoi sert le temps.
- **Surveiller l'usage individuel.** Cela engendre la peur. Agrégez au niveau de l'équipe.
- **Des projets pilotes sans fin.** Ils deviennent permanents par défaut. Fixez des critères de sortie.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| But et lignes de base | Outils adoptés par enthousiasme | Cas d'usage listés | Registre avec problème, classe de risque, ligne de base et indicateur pour chaque usage | Lignes de base et comparaisons exigées avant le passage à l'échelle ; résultats publiés | Lignes de base et méthodes partagées entre équipes et partenaires ; usages retirés quand les preuves s'estompent |
| Preuves de bénéfice | Anecdotes et affirmations de vendeurs | Estimations de temps informelles | Tâches chronométrées ; exactitude échantillonnée ; coût complet par tâche | Évolution des résultats par rapport à une comparaison rapportée avec ses limites | Vue de portefeuille de l'endroit où l'IA aide, avec apprentissage largement partagé |
| Personnes et rythme | Mandats ; surveillance | Soin informel | Données au niveau de l'équipe seulement ; temps économisé alloué par accord | Préoccupations suivies ; compétences et satisfaction mesurées | Conception conjointe de l'usage de l'IA avec les utilisateurs et le personnel ; rythme soutenu protégé |

## Liste de vérification

- [ ] Chaque usage de l'IA a un problème écrit, une classe de risque, un responsable et des critères de sortie.
- [ ] Une ligne de base datée existe pour chaque projet pilote avant le premier usage.
- [ ] Un groupe de comparaison ou des tâches de comparaison sont définis d'avance.
- [ ] Le temps est mesuré jusqu'à un résultat fini et vérifié.
- [ ] Les productions sont échantillonnées chaque mois et revues par des personnes qualifiées et indépendantes.
- [ ] Le coût complet par tâche inclut la revue et la reprise.
- [ ] Les données d'usage sont agrégées au niveau de l'équipe et non employées pour des individus.
- [ ] L'équipe a convenu de ce qu'elle fera du temps économisé.
- [ ] Les utilisateurs sont interrogés sur leur expérience de l'outil.
- [ ] Les projets pilotes se terminent par une décision consignée de passer à l'échelle, d'adapter ou d'arrêter.

## Prompts d'IA

**Rédigez une entrée de cas d'usage.**

```text
Nous envisageons d'employer l'IA pour [task] dans [team and service]. Rédigez
une entrée de registre de cas d'usage : le problème et qui le ressent, le
résultat qui devrait s'améliorer, la classification du risque et pourquoi,
l'étape de revue humaine, les indicateurs de ligne de base à saisir maintenant,
une approche de comparaison, les composantes de coût à suivre, les critères de
sortie et des questions pour l'équipe. Ne supposez pas de fonctions de vendeurs
précis et ne revendiquez pas de bénéfices. Énumérez vos hypothèses.
```

**Concevez une étude de tâches chronométrées.**

```text
Concevez une petite étude pour mesurer l'effet d'un assistant d'IA sur [task].
Proposez comment choisir les tâches, comment comparer équitablement avec et sans
l'outil, ce qu'il faut chronométrer (y compris la formulation des instructions,
la revue et la correction), comment juger la qualité de la production et comment
éviter les biais. Gardez cela praticable pour une équipe de [number] personnes.
N'énoncez pas de résultats attendus. Énumérez vos hypothèses et les limites de
la conception.
```

**Planifiez l'échantillonnage des productions.**

```text
Nos productions assistées par l'IA par mois sont d'environ [number] des types
[list]. Concevez un processus mensuel d'échantillonnage aléatoire et de revue :
taille d'échantillon et méthode de sélection (avec le raisonnement, en évitant
une précision exagérée), qui revoit, la norme écrite, les catégories d'erreurs,
comment rapporter et comment employer les constats. Énumérez vos hypothèses et
vos risques.
```

**Décidez quoi faire du temps économisé.**

```text
Notre projet pilote a économisé une médiane de [value] par tâche pour [number]
tâches par semaine dans [team]. Suggérez des options pour employer le temps qui
soutiennent la qualité, l'apprentissage et un rythme soutenable, avec les
compromis et les risques de chacune, et une façon de convenir du choix avec
l'équipe et les dirigeants. Ne supposez pas que les économies persisteront.
Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique liée à l'IA avant de la rapporter.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique d'IA consigne sa ligne de base, sa comparaison, son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Saisissez une ligne de base datée avant d'employer l'IA, et comparez avec un travail semblable fait sans elle.
- Mesurez le temps jusqu'à un résultat fini et vérifié, et échantillonnez les productions pour l'exactitude avec des examinateurs indépendants.
- Comptez le coût complet, y compris la revue et la reprise.
- Traitez l'usage et l'acceptation comme descriptifs, jamais comme des objectifs.
- Décidez d'avance de ce qu'il faut faire du temps économisé, et gardez un rythme soutenable.
- Gardez les données d'usage au niveau de l'équipe, et terminez chaque projet pilote par une décision consignée.

## Références et lectures complémentaires

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
4. Bender, E. M., Gebru, T., McMillan-Major, A., and Shmitchell, S., "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 2021.
5. Russell, S., and Norvig, P., *Artificial Intelligence: A Modern Approach*, 4th ed., Pearson, 2020.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
8. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
9. Wikipedia, [Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).
10. Wikipedia, [Large language model](https://en.wikipedia.org/wiki/Large_language_model).
11. Wikipedia, [AIOps](https://en.wikipedia.org/wiki/AIOps).
12. Wikipedia, [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop).
13. Wikipedia, [Automation bias](https://en.wikipedia.org/wiki/Automation_bias).
14. Wikipedia, [Hallucination (artificial intelligence)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
