# Rapports réglementaires et gouvernementaux

**Le rapport obligatoire est une exigence fixe autour de laquelle concevoir ; bâtissez-le donc à partir des mêmes enregistrements que ceux qui servent à exploiter le service, gardez la vue de rapport séparée de la vue d'apprentissage et protégez les personnes qui font le travail contre les objectifs qui le déforment.**

## Résumé et motivation

De nombreuses organisations doivent rendre compte de leurs services qu'elles le choisissent ou non. Les régulateurs demandent des notifications d'incidents, des chiffres de disponibilité et des preuves de contrôles. Les gouvernements exigent des organismes qu'ils publient des données de performance, de dépenses et des déclarations d'accessibilité. Les bailleurs de fonds et les organes de surveillance demandent des résultats au regard des engagements. Les contrats exigent des rapports de service. Dans ces contextes, le rapport n'est pas un choix de gestion interne. C'est une obligation avec une échéance, une définition et parfois une pénalité.

Le [secteur public](https://en.wikipedia.org/wiki/Public_sector) a des caractéristiques particulières. La [redevabilité](https://en.wikipedia.org/wiki/Accountability) envers les citoyens et les assemblées élues est un devoir central, et elle s'exerce par l'audit, la législation, les [lois sur l'accès à l'information](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country) et la publication des résultats. Les pratiques de [gouvernement ouvert](https://en.wikipedia.org/wiki/Open_government) et de [données ouvertes](https://en.wikipedia.org/wiki/Open_data) rendent l'information disponible pour examen et réutilisation. Les règles de [marchés publics](https://en.wikipedia.org/wiki/Public_procurement) façonnent ce qui peut être acheté et comment, et les obligations de [gestion des documents](https://en.wikipedia.org/wiki/Records_management) régissent la durée de conservation de l'information. L'[optimisation des ressources](https://en.wikipedia.org/wiki/Value_for_money) est un critère courant de la dépense publique, et des organismes indépendants mènent des [audits de performance](https://en.wikipedia.org/wiki/Performance_audit) pour l'examiner. Les détails diffèrent selon le pays, le niveau de gouvernement et le secteur, et ce sujet décrit une pratique de mesure, non des exigences légales. Travaillez avec vos collègues du juridique, de la conformité et des archives.

Les organisations réglementées du secteur privé, comme celles de la finance, de la santé, de l'énergie et des télécommunications, partagent bon nombre de ces caractéristiques. Elles font face à des obligations de notification des incidents, de rapport de résilience et d'examens de supervision. Le fil commun est que quelqu'un d'extérieur à l'équipe de livraison définit ce qui doit être rapporté et pour quand.

La livraison continue et la pratique ITIL ont toutes deux quelque chose à offrir. Le but agile de collaboration continue avec les parties prenantes s'étend aux organes de surveillance, qui sont des parties prenantes aux besoins légitimes, et des conversations précoces sur ce qu'ils exigent peuvent éviter la reprise. L'habitude agile de livrer continuellement de petits incréments fonctionnels convient au rapport : les rapports produits automatiquement à partir des systèmes de référence sont plus exacts et moins coûteux que ceux assemblés à la main chaque trimestre. La pratique ITIL de mesure et de rapport, et sa gestion des niveaux de service, donnent le vocabulaire pour définir ce qui est mesuré et partagé.

Les obligations de rapport créent trois dangers bien connus.

- **Distorsion par les objectifs.** Quand un chiffre rapporté a une conséquence, le travail se plie vers le chiffre. La littérature du secteur public sur les objectifs, y compris les écrits de John Seddon sur la pensée systémique dans le secteur public et l'analyse de la fixation sur les métriques de Jerry Muller, décrit de nombreux cas où atteindre l'objectif et servir le public divergeaient. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique de plein fouet (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).
- **Deux jeux de chiffres.** La définition réglementaire d'un chiffre diffère souvent de celle que l'équipe emploie en interne. Si l'équipe gère selon l'une et rapporte l'autre, personne ne fait confiance ni à l'une ni à l'autre. Gardez les deux visibles, rapprochez-les et expliquez les différences.
- **Le rapport comme fardeau.** Des demandes manuelles, répétées et incohérentes consomment des personnes qualifiées. Plus le rapport dépend d'un travail héroïque de tableur, plus l'erreur et le retard s'insinuent.

Ce sujet s'appuie sur les mesures de conformité, de risque et de fournisseurs de cette partie (voir le sujet 8.2, Métriques des risques et des contrôles, le sujet 8.3, Métriques de conformité et d'audit, et le sujet 8.4, Métriques des fournisseurs et des contrats) et sur les fondations de données de la première partie (voir le sujet 1.5, Sources de données et instrumentation).

## Principes clés

- **Traiter les obligations comme des intrants de conception.** Listez-les tôt, avec définitions, échéances et responsables, et concevez la collecte de données autour d'elles.
- **Produire les rapports à partir des systèmes de référence.** Automatisez l'extraction et gardez la filiation visible.
- **Séparer la vue de rapport de la vue d'apprentissage.** Les équipes ont besoin de mesures de travail franches qui ne sont pas contraintes par ce qui est rapporté.
- **Rapprocher les définitions.** Montrez comment les chiffres réglementaires se rapportent aux propres mesures de l'équipe.
- **Rapporter honnêtement, y compris les mauvaises nouvelles.** Les corrections et le contexte bâtissent la confiance.
- **Protéger les gens des objectifs pervers.** Employez les objectifs réglementaires avec des mesures compagnes et expliquez leurs limites.
- **Rendre utilisables les données publiées.** L'accessibilité, la clarté et le format comptent pour le public.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des obligations de rapport | Part des obligations de rapport dotées d'un responsable nommé, d'une définition énoncée, d'une source de données et d'une entrée au calendrier | obligations ayant les quatre / obligations de rapport visées | pourcentage | Registre des obligations | Mesure et rapport ; gouvernance | Accord de travail avec les parties prenantes sur les besoins d'information | Trimestrielle |
| Ponctualité des rapports | Part des rapports requis remis à leur échéance | rapports remis au plus tard à l'échéance / rapports dus dans la période | pourcentage | Calendrier des rapports et enregistrements de remise | Mesure et rapport | Engagements envers les parties prenantes tenus | Mensuelle |
| Taux de rectification | Part des rapports ou chiffres remis qui sont corrigés par la suite | rapports ou chiffres corrigés après remise / rapports ou chiffres remis | pourcentage | Journal des remises et journal des corrections | Mesure et rapport ; amélioration continue | Défauts échappés | Trimestrielle |
| Couverture de traçabilité | Part des chiffres rapportés qui peuvent être retracés jusqu'à un système de référence par des étapes documentées | chiffres avec filiation documentée jusqu'à un système de référence / chiffres rapportés | pourcentage | Documentation de filiation, spécifications des rapports | Mesure et rapport ; gestion des connaissances | Constructions reproductibles | Trimestrielle |
| Alignement des définitions | Part des mesures rapportées pour lesquelles la définition réglementaire et la définition interne sont documentées et rapprochées | mesures avec rapprochement documenté / mesures rapportées ayant une définition réglementaire | pourcentage | Registre des métriques | Mesure et rapport ; gestion des niveaux de service | Définition partagée de terminé | Trimestrielle |
| Effort de rapport | Heures-personnes consacrées à produire un rapport récurrent | heures consignées par cycle de rapport, avec la part d'extraction et d'assemblage manuels | heures | Estimations de temps, journaux d'effort | Mesure et rapport ; amélioration continue | Coût du travail hors livraison | Par cycle de rapport |
| Conformité d'accessibilité des publications | Part des rapports et jeux de données publiés qui respectent la norme d'accessibilité requise | éléments publiés réussissant un contrôle d'accessibilité / éléments publiés | pourcentage | Résultats de tests d'accessibilité | Mesure et rapport ; gestion des connaissances | Définition de terminé inclusive | Trimestrielle |

Écrivez la définition réglementaire, la source et l'échéance à côté de chaque mesure rapportée. Un rapport est « ponctuel » quand il est accepté par l'organisme destinataire, non quand il est envoyé, si l'acceptation est consignée. Une rectification compte toute correction d'un chiffre déjà remis, volontaire ou requise. L'effort de rapport est une mesure de tendance pour l'organisation et jamais une mesure d'individus. La conformité d'accessibilité est vérifiée par rapport à la norme qui s'applique à vous, comme les Web Content Accessibility Guidelines.

## Recommandations

### Traiter les obligations comme des intrants de conception

**1. Tenez un registre des obligations de rapport.** Pour chacune, consignez l'exigence, la source légale ou contractuelle, ce qui doit être rapporté, la définition, l'échéance, l'organisme destinataire, le responsable interne et la source de données. Revoyez-le quand les lois, les contrats ou les régulateurs changent. Les obligations connues tôt peuvent être intégrées à la conception, et celles découvertes tard doivent être assemblées à la main.

**2. Associez tôt l'organe de surveillance.** Demandez aux régulateurs, aux auditeurs et aux bailleurs de fonds ce qu'ils feront des données et ce dont ils ont besoin. Certains vous aideront à façonner une définition ou accepteront des données sous une forme que vous produisez déjà. La pratique agile valorise la collaboration avec les parties prenantes, et les organes de surveillance sont des parties prenantes. Conservez la trace de ces conversations, et préservez l'indépendance là où elle compte.

**3. Concevez dès le départ la collecte de données pour le rapport.** En construisant un service, incluez les événements et les champs dont auront besoin les rapports requis : horodatages d'incidents, impact, catégories, nombres d'utilisateurs. Les ajouter plus tard est coûteux. Définissez-les une fois, et partagez la définition entre les équipes, avec un seul responsable de la définition (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

### Produire les rapports à partir des systèmes de référence

**4. Automatisez la chaîne de l'enregistrement au rapport.** Extrayez des systèmes d'incidents, de changements et de services par des requêtes scriptées, appliquez des transformations documentées et produisez le rapport avec un modèle revu. Les rapports automatisés sont reproductibles, plus rapides et plus faciles à auditer que les rapports manuels. Versionnez les requêtes et les modèles pour qu'un rapport passé puisse être reproduit.

**5. Documentez la filiation.** Pour chaque chiffre rapporté, notez d'où il vient, comment il est calculé et qui le vérifie. La couverture de traçabilité mesure la qualité de ce travail. Un auditeur ou un journaliste qui demande « d'où vient ce nombre ? » devrait obtenir une réponse claire en quelques minutes.

**6. Relisez avant la remise, avec un lecteur indépendant.** Faites vérifier par quelqu'un d'extérieur à l'équipe qui a produit le rapport les définitions, l'arithmétique et le récit. Les relectures attrapent les erreurs et les affirmations non étayées. Consignez la relecture. Une courte validation de la personne redevable clarifie la responsabilité.

**7. Corrigez ouvertement.** Quand une erreur est trouvée après la remise, corrigez-la promptement, expliquez ce qui a changé et notez la cause. Un taux de rectification proche de zéro est suspect si les données sont complexes. Une correction visible et rapide bâtit plus de confiance qu'un chiffre laissé en place.

### Garder séparés le rapport et l'apprentissage

**8. Maintenez une vue de travail pour l'équipe.** Les équipes ont besoin de mesures qui les aident à s'améliorer, comme les percentiles, l'âge des plus anciens éléments et des compagnes de qualité. Elles sont rarement les mêmes que les chiffres réglementaires. Ne restreignez pas la vue de travail à ce qui est rapporté, et ne gérez pas uniquement selon le chiffre rapporté.

**9. Rapprochez les définitions réglementaires et internes.** Là où une mesure exigée diffère de celle de l'équipe, documentez les différences et montrez les deux. Par exemple, le chiffre de disponibilité d'un régulateur peut exclure la maintenance planifiée, alors que les utilisateurs la vivent comme une indisponibilité. Montrez le rapprochement dans le registre des métriques et dans les notes du rapport. Cela protège contre le problème des « deux jeux de chiffres ».

**10. Associez les objectifs réglementaires à des compagnes.** Si un objectif est imposé, ajoutez des mesures qui révéleraient la distorsion : qualité, expérience des utilisateurs et travail laissé de côté. Par exemple, associez un objectif de délai de première réponse à une mesure de résolution et de contacts répétés (voir le sujet 3.1, Métriques du centre de services). Expliquez dans le rapport comment le chiffre devrait se lire.

### Publier pour le public

**11. Rendez utilisable l'information publiée.** Publiez dans des formats ouverts et lisibles par machine là où la loi et la vie privée le permettent, avec des descriptions, définitions et dates claires. Respectez les normes d'accessibilité pour les documents et les pages web. Publier des données d'une manière que les gens ne peuvent ni lire ni réutiliser satisfait la lettre et trahit le but. Testez avec de vrais utilisateurs, y compris ceux qui emploient des technologies d'assistance (voir le sujet 6.4, Expérience des utilisateurs et des employés).

**12. Protégez la vie privée et la sécurité dans ce que vous publiez.** Agrégez et supprimez les petits nombres qui pourraient identifier des personnes, évitez de publier des détails qui aident les attaquants et vérifiez les règles de divulgation avec des spécialistes. Appliquez le même soin aux réponses faites en vertu des lois sur l'accès à l'information. Consignez les décisions de caviardage et leurs raisons.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Couverture des obligations de rapport | Traiter les obligations étroitement ; lister le responsable sans accord | Revue du registre par la conformité ou l'audit interne ; confirmation des responsables |
| Ponctualité des rapports | Remettre des rapports incomplets pour tenir la date ; compter les brouillons comme des remises | Contrôle d'exhaustivité à la remise ; ne compter que les rapports acceptés ; taux de rectification |
| Taux de rectification | Supprimer les corrections ; faire les corrections discrètement | Journal des corrections revu par un lecteur indépendant ; un faible taux se lit avec la traçabilité |
| Couverture de traçabilité | Documenter la filiation superficiellement ; n'inclure que des chiffres simples | Échantillonner la filiation en refaisant un calcul à partir de la source |
| Alignement des définitions | Déclarer les définitions alignées sans rapprochement ; n'adopter la définition réglementaire que dans le rapport | Document de rapprochement revu ; montrer les deux chiffres côte à côte |
| Effort de rapport | Ne pas consigner les heures ; déplacer le travail vers d'autres équipes | Comparer avec les retours de l'équipe ; inclure tous les contributeurs dans l'estimation |
| Conformité d'accessibilité des publications | Employer un vérificateur qui ne trouve que certains problèmes ; publier une version accessible distincte qui prend du retard | Tests manuels avec technologies d'assistance ; vérifier la parité entre versions |

Une lecture saine est chaque obligation détenue, des rapports à temps et exacts avec des corrections visibles, des chiffres traçables jusqu'aux systèmes de référence, des définitions réglementaires et internes rapprochées, un effort de rapport qui baisse et une information publiée que le public peut employer.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Assemblage manuel des rapports | Souple ; fonctionne avec n'importe quelles données | Lent, sujet aux erreurs, dépendant des individus |
| Rapport automatisé | Reproductible, auditable, peu coûteux à exploiter | Effort de mise en place ; peut ancrer une mauvaise définition |
| Un seul jeu de mesures pour tout | Simple | Déforme le travail ; les chiffres réglementaires conviennent rarement aux besoins de l'équipe |
| Vues de rapport et d'apprentissage séparées | Apprentissage franc ; rapport honnête | Exige rapprochement et discipline |
| Objectifs réglementaires stricts | Redevabilité claire | Effets pervers ; détournement |
| Objectifs avec compagnes et contexte | Révèle la distorsion | Plus à expliquer |
| Engagement précoce avec les régulateurs | Moins de surprises | Temps ; limites à maintenir |
| Relation à distance seulement | Indépendance claire | Retour tardif ; reprise |

La réponse en prose est d'automatiser les rapports à partir des systèmes de référence, de garder une vue de travail de l'équipe séparée de la vue de rapport, de rapprocher ouvertement les définitions et d'associer tôt les organes de surveillance tout en préservant leur indépendance.

## Questions à discuter avec votre équipe

**1. Quels rapports devons-nous, à qui, pour quand, et qui détient chacun ?**
Dressez la liste dans la salle et comparez-la au registre. Des lacunes apparaissent souvent : rapports dus en vertu de contrats, à des bailleurs de fonds ou selon des règles que peu de gens connaissent. L'animateur doit consigner les nouveaux éléments et attribuer des responsables.

**2. Quel chiffre rapporté gérerions-nous autrement s'il n'était pas rapporté ?**
Choisissez une mesure réglementaire ou contractuelle et demandez ce que l'équipe ferait si personne ne la mesurait. La réponse révèle où le chiffre et le but divergent. Discutez de la mesure compagne qui montrerait la différence.

**3. Pouvons-nous reproduire aujourd'hui, à partir de la source, le rapport du trimestre dernier ?**
Essayez avec un rapport. Notez ce qui est manuel, non documenté ou perdu. Convenez de la première étape pour automatiser ou documenter, et de qui s'en chargera.

**4. Comment traitons-nous une erreur trouvée après la remise ?**
Passez en revue le processus et le dernier exemple. La correction a-t-elle été rapide et ouverte ? Quelqu'un a-t-il eu peur de la soulever ? Convenez de ce qui rend la correction normale.

**5. Qu'éprouverait une personne utilisant une technologie d'assistance en lisant notre rapport publié ?**
Testez ensemble un élément publié, ou revoyez un contrôle d'accessibilité récent. Demandez qui détient l'accessibilité des documents publiés. Convenez d'une correction et d'un processus pour éviter la récidive.

**6. Que fait réellement le régulateur ou l'organe de surveillance de nos données ?**
Beaucoup d'équipes l'ignorent. Prévoyez une conversation pour le savoir et pour demander si une autre forme les servirait aussi bien. L'animateur doit noter les limites d'indépendance.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison construisent les événements et les champs dont dépendent les rapports, et elles ressentent la pression des objectifs réglementaires. Elles devraient inclure les besoins de rapport dans la définition de terminé, garder une vue de travail franche et signaler quand un objectif déforme le travail. Des conversations précoces avec les personnes qui rapportent aident à éviter la reprise.

### Équipes de service et d'exploitation

Les équipes d'exploitation génèrent la plupart des données sous-jacentes et préparent souvent les rapports. Elles devraient documenter la filiation, automatiser l'extraction et tenir un journal des corrections. Elles sont bien placées pour expliquer comment un chiffre devrait se lire, et pour avertir quand il induit en erreur.

### Direction et gouvernance

Les dirigeants sont redevables de l'exactitude et de l'honnêteté de ce qui est rapporté. Ils devraient demander traçabilité et rapprochement, résister à la transformation des chiffres réglementaires en objectifs individuels, protéger ceux qui soulèvent des erreurs et soutenir l'engagement avec les organes de surveillance. La gouvernance devrait revoir le registre des obligations et l'historique des rectifications.

### Clients et utilisateurs

Le public et les clients s'appuient sur l'information publiée pour tenir les services responsables. Ils ont besoin de données qu'ils peuvent trouver, lire et réutiliser, dans des formats accessibles, avec des explications claires de ce qu'elles signifient. Ils méritent aussi un avis prompt quand un incident les touche, comme les règles peuvent l'exiger.

## En pratique : un exemple d'ITIL agile

Un organisme national fournit des services de délivrance de permis en ligne utilisés par plusieurs millions de personnes par an. Il doit rendre compte chaque mois à un ministère, publier des données annuelles de performance et notifier son régulateur des incidents de service majeurs dans un délai fixe. Les chiffres ci-dessous sont illustratifs.

Un examen interne constate que l'organisme doit 31 rapports de natures diverses, et que seuls 22 figurent au registre des obligations avec un responsable nommé et une définition, soit une couverture de 71 pour cent. Les chiffres mensuels sont assemblés à la main en environ 60 heures, surtout en tirant de trois systèmes vers un tableur. La traçabilité est faible : pour le chiffre principal, la disponibilité, personne ne peut reproduire le nombre de l'an dernier. La définition de la disponibilité du ministère exclut la maintenance planifiée, et la vue de travail propre à l'organisme la compte, ce qui explique pourquoi les utilisateurs et le ministère voient des tableaux différents. L'organisme a atteint son objectif de délai de première réponse chaque mois, et le centre de services a commencé à accuser réception automatiquement des demandes pour l'atteindre, tandis que le temps de résolution a augmenté. Deux rapports publiés ont échoué à un test d'accessibilité vérifié avec un lecteur d'écran.

Le responsable de la performance des services de l'organisme convient de changements avec le ministère et les équipes de livraison et d'exploitation. Le registre des obligations devient complet, avec responsables, définitions et dates. Les chiffres mensuels viennent de requêtes scriptées sur les systèmes d'incidents et de supervision, avec une transformation documentée et un modèle revu, ce qui réduit l'effort à environ 8 heures. Une note de rapprochement expose les définitions réglementaire et interne de la disponibilité avec les deux chiffres montrés dans le rapport. L'objectif de première réponse est associé au temps de résolution et aux contacts répétés dans la vue de travail, et le ministère accepte de voir les mesures compagnes. L'organisme corrige aussi un chiffre de disponibilité du trimestre précédent, explique la cause et publie la correction. Les rapports publiés sont produits dans un modèle accessible, et un test au lecteur d'écran est ajouté à la liste de vérification de mise en production.

Un an plus tard, la couverture des obligations est de 100 pour cent, les rapports sont à temps, le taux de rectification est faible avec chaque correction expliquée, la traçabilité couvre tous les chiffres principaux, et l'effort de rapport a baissé d'environ 85 pour cent. Le cabinet de la ministre demande un nouvel objectif de 99,95 pour cent de disponibilité, les dirigeants de l'organisme en étant redevables. Le responsable de la performance des services explique la différence entre le chiffre réglementaire et celui vécu par les utilisateurs et propose un objectif avec des mesures compagnes et une date de revue. La décision est consignée, et le ministère accepte une revue conjointe de la définition avant la prochaine année de rapport.

## Perspective sectorielle

**Startup.** Les obligations de rapport peuvent arriver avec un premier client d'entreprise ou un régulateur. Commencez avec une courte liste d'obligations, produisez les rapports à partir de vos propres systèmes et évitez de bâtir un processus de rapport distinct. Soyez prudent en promettant des niveaux de service dans les contrats.

**Petite entreprise.** Les obligations sont souvent contractuelles ou liées à un seul régulateur. Tenez un calendrier, employez des modèles et documentez la façon dont les chiffres sont faits. Un petit rapport exact vaut mieux qu'un grand rapport hâtif.

**Grande entreprise.** De nombreuses obligations entre régions et régimes appellent un registre central, des définitions communes et un outillage d'extraction partagé. Méfiez-vous des demandes en double aux mêmes équipes. Employez une source unique de vérité pour les données d'incidents et de service, avec des vues pour chaque régime.

**Gouvernement et secteur public.** C'est le terrain propre de ce sujet. Prévoyez la législation, les demandes ministérielles, l'audit, les demandes d'accès à l'information et le regard du public. Publiez les données ouvertement là où la loi le permet, respectez les obligations d'accessibilité, conservez les documents pour la période requise et documentez les décisions. Résistez à la transformation des chiffres réglementaires en objectifs de performance individuels, et considérez les effets des objectifs sur les citoyens et le personnel.

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont l'effort de bâtir et d'entretenir le registre des obligations, l'ingénierie de l'extraction automatisée et des modèles, le temps de relecture et les tests d'accessibilité. Par comparaison avec l'assemblage manuel, l'automatisation déplace l'effort d'un travail répété vers une construction unique et un entretien léger.

Les retours sont moins d'erreurs et de corrections, moins de temps du personnel consacré à l'assemblage, des réponses plus rapides aux demandes de surveillance et plus de confiance de la part des régulateurs et du public. Bâtissez le dossier à partir de vos propres données : heures par rapport avant et après, nombre et effet des rectifications, temps de réponse à une question de surveillance et coût de toute pénalité ou constat d'audit critique évité. Évitez de citer des estimations du fardeau de conformité à moins de pouvoir retracer la source et la méthode. Incluez le coût de l'engagement continu avec les organes de surveillance, et comparez-le au coût des surprises (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Gérer selon le seul chiffre réglementaire.** Il déforme le travail. Gardez une vue de travail avec des mesures compagnes.
- **Deux jeux de chiffres non rapprochés.** La confiance s'effondre. Documentez et montrez les différences.
- **Des tableurs bricolés comme système.** Ils cassent et dépendent des individus. Automatisez à partir des systèmes de référence.
- **Remettre des rapports incomplets pour tenir une date.** On échange un échec contre un autre. Convenez de prolongations ou remettez avec des réserves claires.
- **Corrections discrètes.** Elles minent la confiance. Corrigez ouvertement et expliquez.
- **Objectifs individuels tirés des chiffres réglementaires.** Ils récompensent le détournement et punissent le personnel honnête. Gardez les chiffres au niveau du service.
- **Publications illisibles.** La conformité de forme trahit le but. Publiez des données utilisables et accessibles.
- **Ignorer la vie privée dans la publication.** Les petits nombres peuvent identifier des gens. Agrégez et revoyez la divulgation.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Obligations et définitions | Connues de quelques personnes | Liste partielle | Registre avec responsables, définitions et dates ; définitions réglementaires et internes rapprochées | Registre revu face aux changements de la loi ; rapprochement entretenu | Définitions élaborées avec les organes de surveillance ; partagées entre organismes |
| Production et qualité | Assemblage manuel | Modèles, quelques scripts | Automatisée à partir des systèmes de référence avec filiation et relecture indépendante | Rectifications analysées ; effort et ponctualité gérés | Rapports produits en continu ; les organes de surveillance accèdent directement aux données |
| Usage et publication | Rapport pour satisfaire la demande | Publié sur demande | Vue de travail séparée de la vue de rapport ; publication accessible et réutilisable | Mesures compagnes avec objectifs ; tests utilisateurs des publications | Données ouvertes et liées avec participation du public à la conception |

## Liste de vérification

- [ ] Un registre liste chaque obligation de rapport avec responsable, définition, source, échéance et organisme destinataire.
- [ ] Les champs et événements requis sont intégrés aux services dès le départ.
- [ ] Les rapports sont produits à partir des systèmes de référence par des requêtes et des modèles versionnés.
- [ ] Chaque chiffre rapporté a une filiation documentée et un vérificateur nommé.
- [ ] Un lecteur indépendant relit les rapports avant la remise.
- [ ] Les définitions réglementaires et internes sont rapprochées et les deux sont montrées.
- [ ] Les corrections sont consignées, expliquées et publiées promptement.
- [ ] Les objectifs réglementaires ont des mesures compagnes et un contexte dans le rapport.
- [ ] Les rapports et jeux de données publiés respectent la norme d'accessibilité applicable et l'examen de vie privée.
- [ ] Une conversation avec chaque organe de surveillance majeur sur ses besoins est au calendrier.

## Prompts d'IA

**Bâtissez un registre des obligations.**

```text
Voici une liste de rapports, de notifications et de publications que nous
croyons devoir : [paste with sources, in plain language]. Structurez-les en un
registre avec des champs pour l'exigence, la source, la définition, la source de
données, l'échéance, l'organisme destinataire et le rôle du responsable.
Signalez l'information manquante et les obligations qui semblent dupliquées
entre équipes. Ne donnez pas de conclusions juridiques. Énumérez vos hypothèses
et vos questions pour le juridique et la conformité.
```

**Rapprochez deux définitions.**

```text
La définition réglementaire de [measure] est : [text]. Notre définition interne
est : [text]. Nos champs de données sont : [list]. Expliquez les différences,
décrivez comment chacune affecte le nombre, suggérez comment montrer les deux
dans un rapport et proposez une courte note expliquant la différence aux
lecteurs. Ne supposez pas de faits non donnés. Énumérez vos hypothèses.
```

**Planifiez l'automatisation d'un rapport.**

```text
Nous produisons [report] chaque mois avec ces étapes manuelles et ces sources :
[list with hours]. Proposez un plan pour l'automatiser à partir des systèmes de
référence, avec des requêtes documentées, une étape de transformation, des notes
de filiation, une relecture et la reproductibilité des rapports passés.
Suggérez ce qu'il faut garder manuel et pourquoi. Ne supposez pas d'outils
précis. Énumérez vos hypothèses et vos risques.
```

**Revoyez l'utilisabilité d'un rapport publié.**

```text
Voici la structure textuelle d'un rapport que nous prévoyons de publier : [paste
headings and sample tables, with no sensitive content]. Examinez-la pour le
langage clair, les définitions, le contexte des chiffres, l'accessibilité des
tableaux et des graphiques, et les risques de vie privée dus aux petits nombres.
Suggérez des améliorations. Rappelez-moi de tester avec des technologies
d'assistance et de vérifier les règles de divulgation avec des spécialistes.
Énumérez vos hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de rapport réglementaire ou statutaire.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de rapport montre sa définition, son rapprochement, son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Traitez les obligations de rapport comme des intrants de conception, listées avec responsables, définitions et échéances.
- Produisez les rapports à partir des systèmes de référence avec filiation et relecture indépendante.
- Gardez une vue de travail franche séparée de la vue de rapport, et rapprochez ouvertement les définitions.
- Associez les objectifs réglementaires à des mesures compagnes, et ne les transformez jamais en objectifs individuels.
- Corrigez les erreurs ouvertement et rapidement.
- Publiez une information que le public peut trouver, lire et réutiliser, avec la vie privée protégée.

## Références et lectures complémentaires

1. Seddon, J., *Systems Thinking in the Public Sector*, Triarchy Press, 2008.
2. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
3. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
4. European Parliament and Council, *Directive (EU) 2016/2102 on the accessibility of the websites and mobile applications of public sector bodies*, 2016.
5. Government Digital Service, *Service Standard*, United Kingdom, https://www.gov.uk/service-manual/service-standard.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Public sector](https://en.wikipedia.org/wiki/Public_sector).
9. Wikipedia, [Accountability](https://en.wikipedia.org/wiki/Accountability).
10. Wikipedia, [Freedom of information laws by country](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country).
11. Wikipedia, [Open government](https://en.wikipedia.org/wiki/Open_government).
12. Wikipedia, [Open data](https://en.wikipedia.org/wiki/Open_data).
13. Wikipedia, [Public procurement](https://en.wikipedia.org/wiki/Public_procurement).
14. Wikipedia, [Records management](https://en.wikipedia.org/wiki/Records_management).
15. Wikipedia, [Value for money](https://en.wikipedia.org/wiki/Value_for_money).
16. Wikipedia, [Performance audit](https://en.wikipedia.org/wiki/Performance_audit).
17. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
