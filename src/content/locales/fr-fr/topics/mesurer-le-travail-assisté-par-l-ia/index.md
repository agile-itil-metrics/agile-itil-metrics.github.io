# Mesurer le travail assisté par l'IA

**Jugez le travail assisté par l'IA à ce qui survit à la revue, à la production et au prochain contact de l'utilisateur, non à la rapidité de son apparition, et continuez de regarder si les personnes qui le font apprennent encore.**

## Résumé et motivation

Une fois qu'une équipe emploie chaque jour des outils d'IA, la question centrale passe de « devrions-nous ? » à « qu'en retirons-nous ? ». Le sujet précédent a posé les fondations : lignes de base, comparaisons et coût complet (voir le sujet 10.1, L'IA dans la mesure de la gestion des services). Ce sujet entre dans le travail lui-même. Comment savoir si le code, les tickets, les documents et les décisions assistés par l'IA valent autant que le travail qu'ils remplacent, mieux ou moins bien, et que devient la personne qui le fait ?

L'assistance de l'IA touche bien des genres de travail. En livraison logicielle, les outils suggèrent ou génèrent du code, des tests, des messages de validation et des commentaires de revue. En exploitation des services, ils résument les incidents, proposent des causes, rédigent des réponses et écrivent des articles de connaissances. En analyse, ils produisent des rapports et des requêtes. Le trait commun est que produire une première version plausible devient bon marché. Les coûts se déplacent ailleurs : lire et juger la production, corriger ce qui est faux, entretenir ce qui a été généré et apprendre assez pour connaître la différence.

Plusieurs effets rendent la mesure délicate.

- **Les décomptes de production induisent en erreur.** Les [lignes de code](https://en.wikipedia.org/wiki/Lines_of_code) ont toujours été une mauvaise mesure de la productivité, et le code généré l'aggrave. Plus de code, c'est plus à lire, à tester et à entretenir. Les décomptes de lignes générées, de suggestions acceptées ou de brouillons disent peu de choses sur la valeur.
- **La revue devient le goulot d'étranglement.** La [revue de code](https://en.wikipedia.org/wiki/Code_review) et la revue d'autres travaux générés prennent du temps, et un flux de changements plus gros et plus fréquents peut surcharger les relecteurs. Les grandes [demandes de fusion](https://en.wikipedia.org/wiki/Pull_request) sont plus difficiles à bien revoir, et un relecteur surchargé est plus susceptible d'approuver ce qu'il n'a pas compris. Les mesures de revue et de flux vues plus tôt demeurent essentielles (voir le sujet 2.7, Métriques des demandes de fusion et de la revue de code).
- **Les problèmes de qualité arrivent tard.** Le code généré peut passer les tests aujourd'hui et porter du [code dupliqué](https://en.wikipedia.org/wiki/Duplicate_code), une structure peu claire ou des défauts cachés qui surgissent sous forme de coût d'entretien, une forme de [dette technique](https://en.wikipedia.org/wiki/Technical_debt). Les mesures prises au moment de la création les manquent. Regardez ce qui arrive au travail ensuite.
- **Les compétences peuvent changer.** S'appuyer sur un outil pour des tâches qu'on faisait soi-même est une forme de [délestage cognitif](https://en.wikipedia.org/wiki/Cognitive_offloading), qui peut libérer l'attention pour des problèmes plus difficiles ou mener à la [déqualification](https://en.wikipedia.org/wiki/Deskilling) si la compréhension sous-jacente s'efface. Les deux sont possibles, et le résultat dépend de la façon dont les outils sont employés. Cela compte pour les personnes concernées et pour la capacité de l'équipe à traiter les situations que l'outil ne peut pas traiter.

Les preuves sur l'effet de l'assistance de l'IA sur la productivité sont encore en développement, et elles varient selon la tâche, l'expérience de l'utilisateur, l'outil et le contexte. Certaines études contrôlées de tâches de codage ont trouvé un achèvement plus rapide sur des tâches bien définies, et d'autres études et rapports ont trouvé des gains plus faibles ou nuls, ou des coûts supplémentaires, pour des personnes expérimentées travaillant sur des systèmes complexes qu'elles connaissent bien. Ce livre n'offre pas de chiffre. La position responsable d'une équipe est de mesurer son propre travail, avec des lignes de base et une comparaison, et de traiter tout chiffre publié comme une étude dans un contexte particulier.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) est ici particulièrement important, car la pression de montrer des gains est forte et les chiffres faciles sont les trompeurs. Les mesures ci-dessous suivent ce qui survit, non ce qui est produit (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Mesurer ce qui survit.** La rétention, la reprise et les défauts échappés en disent plus que la production.
- **Surveiller la revue.** Le flux du travail assisté par l'IA est limité par la capacité des gens à le lire.
- **Comparer ce qui est comparable.** Le travail assisté et non assisté doit être semblable par le genre et la difficulté.
- **Regarder plus tard autant que maintenant.** Les problèmes de qualité et les coûts d'entretien apparaissent des semaines ou des mois après la création.
- **Garder la compréhension dans la boucle.** La personne qui livre le travail doit pouvoir l'expliquer.
- **Protéger les compétences et l'apprentissage.** Remarquez ce que les gens peuvent encore faire sans l'outil.
- **Agréger ; ne pas surveiller les individus.** Les données sur qui emploie l'IA et comment servent à améliorer le processus, non à classer les gens.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de rétention | Part des changements assistés par l'IA qui restent substantiellement inchangés après une période énoncée | changements assistés par l'IA dont moins d'une part fixée a été modifiée ou annulée après 30 jours / changements assistés par l'IA fusionnés il y a 30 jours | pourcentage | Historique du contrôle de version joint à des étiquettes d'assistance, au niveau de l'équipe | Gestion des mises en production et des déploiements ; maîtrise des changements | Travail qui tient ; peu de reprise | Mensuelle |
| Reprise après fusion | Part des changements nécessitant une correction de suite dans une courte période, pour les changements assistés et de comparaison | changements avec une correction de suite liée dans les 14 jours / changements fusionnés, par groupe | pourcentage | Contrôle de version, suivi des tickets, enregistrements de changements | Maîtrise des changements ; gestion des problèmes | Défauts échappés ; reprise | Mensuelle |
| Charge de revue | Effort du relecteur par changement, pour les changements assistés et de comparaison | médiane et 85e percentile du temps de revue et des tours de revue par changement, par groupe | heures ; tours | Horodatages de l'outil de revue, agrégés par équipe | Gestion des mises en production et des déploiements | La revue comme retour et apprentissage | Mensuelle |
| Taux de défauts échappés | Défauts trouvés en production par changement, pour les changements assistés et de comparaison | défauts trouvés après la mise en production attribués à un changement / changements mis en production, par groupe | défauts par changement | Suivi des défauts relié aux changements | Gestion des incidents ; gestion des problèmes | Qualité de ce qui est mis en production | Trimestrielle |
| Taux de réussite de la vérification d'explication | Part des changements assistés par l'IA échantillonnés dont l'auteur peut expliquer l'approche et ses compromis en revue | changements échantillonnés où l'auteur a expliqué à la satisfaction du relecteur / changements échantillonnés | pourcentage | Notes de revue échantillonnées | Gestion des connaissances ; maîtrise des changements | Compréhension partagée du code | Trimestrielle |
| Qualité du soutien assisté | Taux de réouverture et satisfaction des utilisateurs pour les réponses de soutien assistées par l'IA comparées aux non assistées | tickets assistés rouverts / tickets assistés, et notes favorables / notes, par groupe | pourcentage | Outil ITSM, sondage | Centre de services ; gestion des incidents | Qualité des résultats de service | Mensuelle |
| Cote de confiance sans assistance | Cote donnée par l'équipe de sa confiance à accomplir les tâches clés sans l'outil | cote moyenne et dispersion sur une échelle convenue, par équipe | points d'échelle | Sondage éclair anonyme d'équipe | Gestion de la main-d'œuvre et des talents ; gestion des connaissances | Capacité et apprentissage de l'équipe | Trimestrielle |

Étiquetez l'assistance de l'IA de façon fiable au niveau de l'équipe, par les journaux de l'outil ou une convention légère, et énoncez comment les changements de comparaison sont choisis : semblables par la taille, le domaine et le risque. La rétention mesure un changement substantiel, avec un seuil fixé dans le registre. La reprise après fusion relie une correction de suite au changement d'origine selon une règle énoncée. La charge de revue est l'effort du relecteur, non de l'auteur, et n'inclut que le temps de revue actif là où il est mesurable. Les données au niveau individuel ne sont jamais rapportées. Les échantillons de la vérification d'explication sont choisis au hasard, et la vérification est une conversation pour soutenir l'apprentissage, non un test d'une personne.

## Recommandations

### Suivre le travail après sa création

**1. Suivez ce qui arrive au travail assisté dans le temps.** Pour le code, suivez les changements pendant des semaines après la fusion : restent-ils, sont-ils corrigés ou annulés ? Pour le soutien, suivez les tickets après la réponse : sont-ils rouverts ou suivis de contacts répétés ? Pour les documents, vérifiez s'ils sont employés, corrigés ou ignorés. La rétention et la reprise sont des signaux de qualité simples et difficiles à falsifier.

**2. Comparez avec un travail semblable non assisté.** Choisissez un travail de comparaison de taille, de risque et de domaine semblables, de la même période. La difficulté compte : les gens peuvent employer l'IA pour des tâches faciles, ce qui flatterait l'outil, ou pour des tâches difficiles, ce qui le pénaliserait. Énoncez comment les tâches en viennent à être assistées, et ajustez ou nuancez en conséquence. Une petite comparaison honnête vaut mieux qu'une grande comparaison brouillée (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

**3. Incluez les mesures en aval dans l'ensemble standard.** Associez toute mesure de vitesse au taux d'échec des changements, aux défauts échappés et aux mesures de stabilité déjà en usage (voir le sujet 2.8, Métriques DORA). Un gain de vitesse avec une stabilité qui baisse est un transfert de coût aux exploitants et aux utilisateurs. Rapportez la paire ensemble.

### Garder la revue significative

**4. Surveillez la charge et la taille de revue.** Mesurez le temps de revue, les tours de revue et la taille des changements pour le travail assisté et non assisté. Si les changements assistés sont plus gros ou plus nombreux, les relecteurs peuvent être surchargés. Fixez des normes de taille de changement, et limitez la quantité de matériel généré qui peut entrer dans une revue. La capacité de revue fait partie de la capacité du système (voir le sujet 2.3, Travail en cours et théorie des files d'attente).

**5. Demandez aux auteurs d'expliquer.** Faites-en une habitude : l'auteur d'un changement peut expliquer ce qu'il fait, pourquoi cette approche et quels sont les compromis. Une courte conversation bienveillante en revue suffit. Échantillonnez les vérifications d'explication chaque trimestre pour voir si la compréhension suit la production. Là où les auteurs ne peuvent pas expliquer, traitez-le comme un signal pour ralentir et apprendre, non comme un défaut de la personne.

**6. Gardez-vous du biais d'automatisation.** Encouragez les relecteurs à lire le travail assisté aussi critiquement que n'importe quel autre. Faites tourner les relecteurs, semez à l'occasion des problèmes connus dans un changement d'essai pour vérifier la détection, et maintenez l'échantillonnage des productions par des relecteurs indépendants. Un taux d'acceptation très élevé avec une reprise croissante est un avertissement (voir le sujet 10.1, L'IA dans la mesure de la gestion des services).

### Veiller à la qualité et à l'entretien

**7. Surveillez la structure du code et du système.** Suivez la duplication, la complexité, la couverture de tests et le taux de changement dans les zones où l'assistance est forte. Employez les mesures que vous avez déjà pour les [tests logiciels](https://en.wikipedia.org/wiki/Software_testing) et la santé du code, et regardez les tendances. Une duplication croissante ou une efficacité des tests qui baisse peut signaler que du code généré est accepté sans intégration à la conception. La couverture des [tests de non-régression](https://en.wikipedia.org/wiki/Regression_testing) est un filet de sécurité, et sa solidité compte davantage quand le volume de changement augmente.

**8. Traitez les tests générés avec soin.** L'IA peut écrire beaucoup de tests rapidement, et des tests peuvent réussir sans rien vérifier de significatif. Échantillonnez les tests générés pour leur valeur, et mesurez l'efficacité des tests par des méthodes comme celle de voir si les tests échouent quand on casse délibérément le comportement. Ne comptez pas les tests écrits comme mesure de qualité.

**9. Surveillez la qualité du soutien assisté.** Pour le centre de services et l'exploitation, mesurez le taux de réouverture, les contacts répétés, la satisfaction et l'exactitude des réponses échantillonnées pour les réponses assistées par rapport aux non assistées. Une réponse plus rapide qui renvoie l'utilisateur est plus lente au total. Lisez les commentaires des utilisateurs sur les réponses assistées, et regardez si les utilisateurs savent qu'ils ont affaire à une IA là où cela compte (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

### Protéger les personnes et les compétences

**10. Remarquez ce que les gens peuvent encore faire.** Demandez aux équipes quelle confiance elles ont à accomplir les tâches clés sans l'outil et suivez la tendance. Employez à l'occasion la pratique sans assistance, le travail en binôme et des revues de la conception sous-jacente pour garder vivantes les compétences. Protégez particulièrement l'apprentissage des membres plus récents de l'équipe, qui peuvent employer l'outil avant d'avoir bâti les modèles mentaux sur lesquels les collègues expérimentés s'appuient pour le juger (voir le sujet 9.4, Métriques de compétences et d'apprentissage).

**11. Gardez les données sur les personnes hors de l'évaluation.** Agrégez au niveau de l'équipe. Ne rapportez pas quels individus emploient le plus l'IA, et n'employez pas l'usage, le taux d'acceptation ou le volume généré dans les évaluations de performance. Faites connaître les règles. La confiance est nécessaire pour des rapports honnêtes de ce qui fonctionne et de ce qui ne fonctionne pas.

**12. Revisitez régulièrement.** Les outils, les modèles et les pratiques changent en quelques mois. Refaites la comparaison quand l'outil ou la façon de travailler change. Partagez les constats, y compris qu'un outil n'a pas aidé ici, et retirez les usages qui ne méritent plus leur place.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Taux de rétention | Éviter les changements nécessaires pour garder le chiffre ; n'étiqueter comme assistés que les changements réussis | Étiqueter par les journaux de l'outil, non par le choix de l'auteur ; associer aux défauts échappés et à la reprise |
| Reprise après fusion | Corriger dans un autre ticket ou un nouveau changement non relié ; retarder les corrections au-delà de la fenêtre | Règle de liaison dans le registre ; regarder une fenêtre plus longue ; défauts en production |
| Charge de revue | Revues bâclées qui abaissent le temps mesuré ; approbations sans commentaires | Échantillon de profondeur de revue ; défauts échappés ; sondage des relecteurs |
| Taux de défauts échappés | Ne pas attribuer les défauts aux changements ; reclasser des défauts comme améliorations | Règle d'attribution ; échantillon indépendant de la classification des défauts |
| Taux de réussite de la vérification d'explication | Des auteurs qui répètent pour la vérification ; relecteurs indulgents | Échantillons aléatoires et inopinés ; rotation des relecteurs ; accent sur les raisons de conception |
| Qualité du soutien assisté | N'assister que les tickets faciles ; coacher les utilisateurs à noter haut | Apparier les tickets par type et difficulté ; taux et composition des réponses ; lire les commentaires |
| Cote de confiance sans assistance | Cotes gonflées pour éviter l'examen ; cotes basses pour plaider en faveur de plus d'outils | Anonymat ; comparer à la pratique observée lors d'exercices ; lire les commentaires |

Une lecture saine est un travail assisté qui reste en place aussi souvent que le travail non assisté, une reprise et des défauts échappés qui égalent ou battent la comparaison, une revue qui reste profonde, des auteurs qui peuvent expliquer ce qu'ils livrent, un soutien assisté qui ne revient pas et des équipes qui restent confiantes en leurs propres compétences.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Mesurer le volume de production | Facile | Récompense le volume ; ne dit rien de la valeur |
| Mesurer la rétention et la reprise | Reflète la qualité dans le temps | Différée ; exige de relier les enregistrements |
| Comparaison contrôlée | Crédible | Exige de l'effort ; peut être impraticable |
| Comparaison par observation | Peu coûteuse | Brouillée par la sélection des tâches |
| Vérifications d'explication obligatoires | Maintiennent la compréhension | Peuvent paraître un test ; ajoutent de l'effort |
| Vérifications légères par échantillon | Faible fardeau | Peuvent manquer des schémas |
| Fortes restrictions de l'usage de l'IA | Contrôle du risque | Bénéfice perdu ; usage clandestin |
| Usage ouvert avec mesure | Apprentissage et bénéfice | Exige confiance et discipline |

La réponse en prose est d'autoriser l'usage dans des règles claires, de mesurer ce qui survit, d'échantillonner pour la compréhension, de protéger la capacité de revue et les compétences, et de garder les données sur les personnes hors de l'évaluation.

## Questions à discuter avec votre équipe

**1. Quelle part de ce que l'IA nous a aidés à produire le trimestre dernier est encore en place, inchangée, et comment le savons-nous ?**
Regardez la rétention et la reprise des changements assistés par rapport à un ensemble comparable. L'animateur doit consigner la difficulté de répondre. Convenez de la manière d'étiqueter et de relier les enregistrements pour que la réponse soit facile le trimestre prochain.

**2. La revue suit-elle, et que se passe-t-il quand elle ne suit pas ?**
Regardez les temps de revue, les tours et les tailles. Demandez aux relecteurs ce qu'ils ressentent à l'égard des changements assistés. Discutez de limites de taille et de façons de partager la charge. Convenez d'une norme à essayer.

**3. Chacun de nous pourrait-il expliquer le dernier changement livré avec l'aide de l'IA, et ses compromis ?**
Essayez en binômes. Remarquez où l'explication était facile et où elle était difficile. Discutez de ce que cela dit de notre usage de l'outil, et de la manière de maintenir la compréhension.

**4. Que pouvons-nous encore bien faire sans l'outil, et pour quoi perdons-nous le coup de main ?**
Listez les tâches clés, cotez honnêtement la confiance et planifiez de la pratique sans assistance ou du travail en binôme. La conversation fait aussi ressortir ce que les gens valorisent dans leur travail et veulent garder.

**5. Où l'IA nous a-t-elle le plus et le moins aidés, et qu'ont en commun ces endroits ?**
Comparez des exemples. Cherchez des traits comme des tâches bien définies, de bons tests ou des domaines familiers. Employez les constats pour guider où employer l'outil.

**6. Que mesurerions-nous si nous ne faisions pas confiance à nos premières impressions ?**
Demandez au groupe de nommer les preuves qui lui feraient changer d'avis sur l'outil, dans un sens ou dans l'autre. Employez les réponses pour définir la prochaine comparaison.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison détiennent l'expérience quotidienne et les résultats de qualité. Elles devraient étiqueter le travail assisté, surveiller la rétention et la reprise, garder la revue significative et entretenir leur propre compréhension. Elles devraient parler quand le volume de changement généré dépasse leur capacité à le revoir.

### Équipes de service et d'exploitation

Les équipes d'exploitation emploient l'IA pour les résumés, le diagnostic et les réponses, et elles héritent des problèmes de qualité qui échappent. Elles devraient échantillonner les productions, comparer les taux de réouverture et de contacts répétés, et garder une responsabilité humaine claire pour les actions en production. Elles devraient aider à définir où l'IA ne doit pas agir sans une personne.

### Direction et gouvernance

Les dirigeants font face à la pression de montrer des gains et peuvent être tentés par des métriques d'usage et de production. Ils devraient insister sur la rétention, la reprise et les mesures de stabilité à côté de la vitesse, financer la capacité de revue, protéger le développement des compétences et résister au classement des gens. La gouvernance devrait attendre des comparaisons et des réserves dans les rapports sur les bénéfices de l'IA.

### Clients et utilisateurs

Les utilisateurs reçoivent les résultats : le code qui fait tourner leurs services, les réponses à leurs demandes, les documents sur lesquels ils s'appuient. Ils y gagnent quand la qualité tient et en pâtissent quand elle ne tient pas. Ils devraient pouvoir joindre une personne, et leurs retours sur les interactions assistées sont la preuve essentielle de la qualité.

## En pratique : un exemple d'ITIL agile

Le groupe numérique d'une compagnie aérienne européenne compte six équipes produit qui construisent et exploitent des logiciels de réservation et d'exploitation. Les équipes ont commencé à employer un assistant de codage par l'IA il y a un an, et le tableau de bord du groupe rapporte que 38 pour cent des lignes fusionnées sont générées par l'IA. Les chiffres ci-dessous sont illustratifs.

La responsable de l'excellence de l'ingénierie est mal à l'aise devant ce tableau de bord. Elle demande à trois équipes d'étiqueter les changements assistés par les journaux de l'outil, au niveau de l'équipe seulement, et de choisir des changements de comparaison de taille et de domaine semblables. Sur un trimestre, le temps médian entre la première validation et la fusion est plus court pour les changements assistés, 1,4 jour contre 2,0. Le taux de rétention des changements assistés après 30 jours est de 81 pour cent contre 90 pour cent pour les changements de comparaison, et 12 pour cent des changements assistés ont nécessité une correction de suite dans les 14 jours contre 7 pour cent. La charge de revue raconte la même histoire : le temps de revue médian par changement est plus élevé de 35 pour cent pour les changements assistés, et le 85e percentile de la taille des changements a grossi. Les défauts échappés pour 100 changements sont légèrement plus élevés pour les changements assistés, bien que l'échantillon soit petit et que la différence soit dans la variation normale. Un échantillon de 40 changements assistés montre que dans 31 cas l'auteur pouvait bien expliquer l'approche et ses compromis, dans 6 partiellement et dans 3 pas du tout, surtout dans des zones de code nouvelles pour l'auteur. Au centre de services, les réponses assistées avaient un taux de réouverture de 7 pour cent contre 6 pour les non assistées, avec une satisfaction semblable. Dans un sondage éclair d'équipe, les ingénieurs plus récents cotent leur confiance à mettre en œuvre les fonctions de base sans l'outil à 2,6 sur 5, contre 4,1 pour les ingénieurs de plus de trois ans dans le groupe.

La responsable de l'excellence de l'ingénierie apporte les résultats aux équipes sans les classer. Les équipes conviennent de quatre changements. Des limites de taille de changement et un roulement de revue protègent les relecteurs. Les auteurs expliquent brièvement les changements assistés en revue. Les ingénieurs plus récents travaillent en binôme avec des expérimentés sur les fonctions de base, et un exercice mensuel sans assistance garde les compétences en pratique. Le tableau de bord abandonne la part de lignes générées et montre la rétention, la reprise, la charge de revue et les défauts échappés, assistés par rapport à la comparaison. Trois mois plus tard, l'écart de rétention se réduit à 4 points, les corrections de suite tombent à 8 pour cent, et la vérification d'explication s'améliore. Un vice-président demande que la part de lignes générées soit un objectif pour chaque équipe. La responsable de l'excellence de l'ingénierie explique les constats et propose de continuer de suivre les résultats, ajoutant que les gains sont réels pour certaines tâches et pas pour d'autres, et que l'équipe décidera où employer l'outil. La décision est consignée.

## Perspective sectorielle

**Startup.** De petites équipes peuvent beaucoup gagner de l'assistance et aussi accumuler vite une dette cachée. Suivez la rétention et la reprise dès le début, gardez des tests significatifs et assurez-vous que les personnes qui entretiendront le système le comprennent. Méfiez-vous de livrer du code que personne ne sait expliquer.

**Petite entreprise.** L'assistance peut étirer une toute petite équipe. Mesurez sur un petit échantillon : la fréquence à laquelle le travail assisté a besoin d'être corrigé plus tard. Gardez des sauvegardes, des tests et une revue humaine de tout ce qui est visible par les clients, et protégez la compréhension qu'a le propriétaire des systèmes dont il dépend.

**Grande entreprise.** L'échelle amplifie les gains comme les problèmes. Fournissez des orientations partagées sur l'étiquetage, les limites de revue et les mesures, comparez entre équipes avec précaution sans classer, et investissez dans la capacité de revue et de test. Incluez dans la chaîne de livraison la revue de sécurité et de licences du code généré (voir le sujet 7.2, Métriques des actifs logiciels et des licences).

**Gouvernement et secteur public.** Les systèmes publics ont de longues vies, une stricte redevabilité et de lourdes conséquences en cas d'erreur. Exigez une responsabilité humaine traçable, des tests soignés et la documentation de la façon dont l'IA a été employée. Consignez le travail assisté dans les enregistrements de changements, et évaluez les risques pour l'équité et la sécurité (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont l'outillage et les charges d'usage, l'effort pour étiqueter et relier les enregistrements, le temps de revue et de correction, les tests supplémentaires et la formation. Une étude de comparaison prend du temps, mais elle est peu coûteuse en regard d'une mauvaise décision de passer à l'échelle ou d'interdire.

Les retours sont réels là où l'assistance réduit l'effort sans réduire la qualité, et sont perdus là où elle déplace l'effort vers la revue, la reprise et l'entretien. Bâtissez le dossier à partir de vos propres mesures : temps jusqu'à un changement fusionné et retenu, reprise et défauts échappés par rapport à la comparaison, charge de revue et satisfaction des utilisateurs et du personnel. Évitez d'employer des chiffres de productivité publiés comme estimation. Souvenez-vous des coûts cachés : compréhension réduite, perte de compétences et dette technique. Soyez honnête sur l'incertitude (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Compter les lignes générées ou les suggestions acceptées.** Elles récompensent le volume. Mesurez ce qui survit.
- **Comparer du travail assisté sur des tâches faciles avec du travail non assisté sur des tâches difficiles.** Le résultat flatte ou pénalise l'outil. Appariez les tâches.
- **Laisser la capacité de revue prendre du retard.** La qualité baisse silencieusement. Limitez la taille des changements et protégez les relecteurs.
- **Sauter les mesures en aval.** Le coût apparaît plus tard. Suivez la reprise, les défauts et la stabilité.
- **Traiter les tests générés comme de la qualité.** Ils peuvent réussir sans rien vérifier. Testez les tests.
- **Ignorer les compétences.** La compréhension s'efface sans qu'on le remarque. Suivez la confiance sans assistance et la pratique.
- **Surveiller les individus.** Cela engendre la peur et cache les problèmes. Gardez les données au niveau de l'équipe.
- **Proclamer la victoire sur une étude courte et petite.** Refaites-la à mesure que les outils et les pratiques changent.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Mesurer ce qui survit | Décomptes de production | Impressions informelles de la qualité | Travail assisté étiqueté ; rétention et reprise suivies par rapport à la comparaison | Défauts en aval, stabilité et charge de revue gérés ensemble | Preuves entre équipes guidant où l'assistance est employée ; résultats largement partagés |
| Revue et compréhension | Revue comme avant | Inquiétude de la surcharge | Normes de taille de changement ; vérifications d'explication échantillonnées | Capacité de revue planifiée ; biais d'automatisation contré | Revue et compréhension intégrées à la façon dont toutes les équipes travaillent avec l'IA |
| Personnes et compétences | Non considérées | Anecdotes | Confiance sans assistance sondée ; un peu de pratique | Développement des compétences planifié ; tendances gérées | Apprentissage et métier protégés dans toute l'organisation ; usage de l'IA conçu avec le personnel |

## Liste de vérification

- [ ] Le travail assisté par l'IA est étiqueté au niveau de l'équipe par les journaux de l'outil ou une convention légère.
- [ ] Un travail de comparaison de taille, de domaine et de risque semblables est défini.
- [ ] La rétention et la reprise après fusion sont suivies pour le travail assisté et de comparaison.
- [ ] Les défauts échappés et le taux d'échec des changements sont rapportés à côté de toute mesure de vitesse.
- [ ] Le temps de revue, les tours et la taille des changements sont surveillés, avec des normes de taille.
- [ ] Les auteurs peuvent expliquer les changements assistés, et un échantillon est vérifié chaque trimestre.
- [ ] Les tests générés sont échantillonnés pour leur valeur.
- [ ] Le soutien assisté est comparé pour le taux de réouverture, les contacts répétés et la satisfaction.
- [ ] La confiance sans assistance est sondée, et la pratique sans assistance est planifiée.
- [ ] Les données individuelles d'usage et d'acceptation ne sont pas employées dans l'évaluation.

## Prompts d'IA

**Planifiez une comparaison de changements assistés et non assistés.**

```text
Nous voulons comparer les changements assistés par l'IA et non assistés pour
[team and system]. Nos données comprennent : [list fields]. Proposez comment
étiqueter les changements assistés sans dépendre de la mémoire des auteurs,
comment choisir des changements de comparaison de taille et de risque
semblables, quelles mesures comparer (rétention, reprise, charge de revue,
défauts), la période et comment nuancer les constats. N'énoncez pas de résultats
attendus. Énumérez vos hypothèses et les menaces à la validité.
```

**Concevez une vérification d'explication.**

```text
Concevez une courte vérification d'explication bienveillante pour des
changements assistés par l'IA échantillonnés dans [language and domain].
Incluez comment échantillonner, les questions que pose un relecteur, ce que
couvre une bonne explication, comment consigner les résultats au niveau de
l'équipe et comment employer les constats pour l'apprentissage sans noter les
gens. Énumérez vos hypothèses et les risques de la vérification.
```

**Revoyez les mesures en aval.**

```text
Voici nos mesures pour [period] : vitesse [values], rétention [values], reprise
[values], charge de revue [values], défauts échappés [values], pour le travail
assisté et de comparaison. Décrivez ce que le schéma suggère et ce qu'il ne
suggère pas, quelles différences sont dans la variation normale et ce qu'il faut
vérifier ensuite. Ne revendiquez pas de causalité. Énumérez vos hypothèses et
les données que je devrais ajouter.
```

**Planifiez la pratique sans assistance.**

```text
Proposez un programme léger pour garder vivantes les compétences de base d'une
équipe qui emploie chaque jour des outils d'IA : exercices mensuels sans
assistance, travail en binôme entre membres récents et expérimentés, et
discussions de conception. Suggérez comment l'intégrer à la semaine de travail
sans ajouter de pression et comment suivre son effet avec le sondage éclair de
confiance sans assistance. Énumérez vos hypothèses et les compromis.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une mesure du travail assisté par l'IA.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique du travail assisté par l'IA mesure ce qui survit et porte son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Mesurez ce qui survit : rétention, reprise, défauts échappés et stabilité, par rapport à un travail comparable non assisté.
- Protégez la capacité de revue et gardez la revue profonde, car elle limite la vitesse à laquelle le travail assisté peut circuler en sécurité.
- Vérifiez que les auteurs peuvent expliquer ce qu'ils livrent, et remarquez si les compétences croissent ou s'effacent.
- Échantillonnez les tests et les productions générés pour leur valeur réelle.
- Lisez les affirmations de productivité publiées comme des études isolées, et mesurez votre propre travail.
- Gardez les données d'usage individuelles hors de l'évaluation.

## Références et lectures complémentaires

1. Peng, S., Kalliamvakou, E., Cihon, P., and Demirer, M., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot," arXiv preprint, 2023.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. DORA, Google Cloud, *Accelerate State of DevOps Report* (latest edition addressing AI), https://dora.dev/.
4. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Lines of code](https://en.wikipedia.org/wiki/Lines_of_code).
8. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
9. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
10. Wikipedia, [Duplicate code](https://en.wikipedia.org/wiki/Duplicate_code).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Cognitive offloading](https://en.wikipedia.org/wiki/Cognitive_offloading).
13. Wikipedia, [Deskilling](https://en.wikipedia.org/wiki/Deskilling).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Software testing](https://en.wikipedia.org/wiki/Software_testing).
16. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
