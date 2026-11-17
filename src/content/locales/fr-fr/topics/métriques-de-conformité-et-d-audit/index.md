# Métriques de conformité et d'audit

**La conformité est plus facile et plus honnête quand les preuves sont produites par le travail lui-même ; mesurez donc la part des preuves qui vient automatiquement, la rapidité avec laquelle les constats sont corrigés et la fréquence à laquelle le même constat revient, et traitez les auditeurs comme des parties prenantes qui rejoignent la conversation tôt.**

## Résumé et motivation

La plupart des organisations qui construisent et exploitent des services informatiques rendent des comptes à quelqu'un : régulateurs, clients, organismes de certification, assureurs, conseils d'administration. La [conformité réglementaire](https://en.wikipedia.org/wiki/Regulatory_compliance) est l'acte de se conformer aux lois, aux règles et aux normes, et de démontrer qu'on le fait. Un audit est un examen systématique de preuves pour juger si c'est vrai. En informatique, cela inclut les audits des contrôles de l'information financière, des obligations de protection des données, des certifications de sécurité et des engagements contractuels. L'[audit informatique](https://en.wikipedia.org/wiki/Information_technology_audit) examine les contrôles autour des systèmes et des données qu'ils détiennent.

La conformité et la livraison continue ont une réputation de friction. La conformité demande des documents, des signatures et des approbations avant le changement, et la livraison continue favorise de petits changements publiés en continu. La friction est réelle quand la conformité est traitée comme une phase à la fin. Elle diminue quand la conformité est intégrée au flux de travail. Les enregistrements de changements, les revues de code, les tests automatisés et les journaux d'accès sont des preuves, et une chaîne de livraison les produit chaque jour. L'[audit continu](https://en.wikipedia.org/wiki/Continuous_auditing) emploie des vérifications automatisées en quasi-temps réel des contrôles au lieu d'échantillons périodiques, et il correspond au rythme de la livraison continue. Une [piste d'audit](https://en.wikipedia.org/wiki/Audit_trail) est un enregistrement qui montre qui a fait quoi, quand, sur quel système, et c'est souvent la preuve la plus solide dont vous disposez.

ITIL décrit les pratiques pertinentes : gestion de la sécurité de l'information, gestion des risques et gouvernance du système de valeur de service, et il renvoie à des normes comme l'[ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) pour les systèmes de management de la sécurité de l'information. Les cadres auxquels les organisations font couramment face comprennent des régimes de rapport pour les contrôles financiers, comme la [loi Sarbanes-Oxley](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act) aux États-Unis, des lois de protection des données comme le [Règlement général sur la protection des données](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) dans l'Union européenne, et des rapports d'assurance comme [SOC 2](https://en.wikipedia.org/wiki/SOC_2), qui examinent les contrôles relatifs à la sécurité et à des critères connexes. Les détails diffèrent selon la juridiction, le secteur et la date, et ce sujet décrit une pratique de mesure, non des exigences légales. Travaillez avec vos collègues de la conformité, du juridique et de l'audit pour savoir ce qui s'applique à vous.

Le but des métriques de conformité est d'apprendre dans quelle mesure l'organisation remplit ses obligations et combien d'effort cela demande, pour que les deux puissent s'améliorer. Le risque est que la conformité devienne une représentation donnée à l'auditeur. Une équipe peut réussir un audit en produisant des documents au dernier moment et pourtant exercer des pratiques risquées. Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique : quand les « constats d'audit » sont un objectif, les gens évitent l'examen, rétrécissent le périmètre et négocient la formulation (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Deux lignes de pensée aident.

- **La conformité comme sous-produit.** Si la chaîne de livraison consigne automatiquement la revue, les tests, l'approbation et le déploiement, des preuves existent qu'un audit soit proche ou non. Cela supprime aussi la tentation de reconstituer des preuves après coup.
- **Les auditeurs comme parties prenantes.** La pratique agile valorise la collaboration continue avec les parties prenantes. Les auditeurs et les évaluateurs sont des parties prenantes aux questions légitimes. Les associer à la conception des contrôles et des preuves réduit la surprise et la reprise, tout en préservant leur indépendance.

## Principes clés

- **Produire des preuves comme sous-produit du travail.** Les chaînes de livraison, les tickets et les journaux devraient répondre à la plupart des questions d'audit.
- **Relier les obligations à des contrôles et à des responsables.** Chaque obligation a un contrôle, et chaque contrôle a un responsable.
- **Collaborer tôt avec les auditeurs.** Partagez les conceptions et les approches de preuves avant l'audit, et préservez leur indépendance.
- **Corriger les causes, non les constats.** Un constat clos sans suppression de la cause revient.
- **Mesurer l'effort autant que le résultat.** Le coût de la conformité fait partie du tableau.
- **Garder la séparation des tâches là où elle compte.** L'indépendance de la revue est un contrôle que l'automatisation peut soutenir sans le remplacer.
- **Être honnête sur les lacunes.** Il vaut mieux que vous trouviez vous-même vos faiblesses plutôt que d'autres.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Couverture des obligations | Part des obligations applicables reliées à un contrôle avec un responsable et une source de preuves | obligations reliées à au moins un contrôle avec responsable et source de preuves / obligations applicables | pourcentage | Registre des obligations et registre des contrôles | Gouvernance ; gestion de la sécurité de l'information ; gestion des risques | La définition de terminé inclut les preuves de contrôle | Trimestrielle |
| Taux d'automatisation des preuves | Part des preuves de contrôle visées collectées automatiquement à partir de systèmes de référence | éléments de preuve de contrôle collectés automatiquement / éléments de preuve requis | pourcentage | Registre des contrôles, journaux de la chaîne de livraison et des systèmes | Gestion de la sécurité de l'information ; maîtrise des changements | La chaîne de livraison consigne automatiquement revue, test et déploiement | Trimestrielle |
| Délai de fourniture des preuves | Temps pour fournir les preuves demandées par un auditeur ou un évaluateur | médiane et 85e percentile des jours entre la demande et la preuve acceptée | jours | Suivi des demandes d'audit | Gouvernance ; gestion de la sécurité de l'information | Réactivité à une question d'une partie prenante | Par audit |
| Délai de clôture des constats | Temps de clôture des constats d'audit par gravité | médiane et 85e percentile des jours entre l'émission du constat et la clôture vérifiée | jours | Suivi des constats | Amélioration continue ; gestion des risques | Temps de correction d'un défaut | Mensuelle |
| Taux de constats répétés | Part des constats qui reviennent d'un audit ou d'une revue précédents | constats correspondant sur le fond à un constat clos antérieur / constats de la période | pourcentage | Suivi des constats avec liens de cause | Amélioration continue ; gestion des problèmes | Défaut récurrent après une correction | Par cycle d'audit |
| Conflits de séparation des tâches | Nombre de combinaisons d'accès ou d'approbation qui violent les règles de séparation, et temps de résolution | conflits détectés ; médiane des jours de résolution | nombre ; jours | Outils de gestion des identités et des accès, enregistrements de changements | Gestion de la sécurité de l'information ; maîtrise des changements | Revue indépendante des changements | Mensuelle |
| Effort d'audit | Heures-personnes que l'organisation consacre à préparer et à soutenir un cycle d'audit, par unité de périmètre | heures consignées à la préparation et au soutien de l'audit / contrôles ou systèmes visés | heures par unité | Relevés de temps ou estimations d'effort | Gouvernance ; amélioration continue | Coût du travail hors livraison | Par cycle d'audit |

Énoncez dans le registre les obligations visées et le périmètre de l'audit. Le délai de clôture commence quand le constat est émis et s'arrête quand l'auditeur ou un vérificateur indépendant confirme la clôture, non quand l'équipe dit que c'est fini. Les constats répétés sont appariés par cause, non par formulation, et la règle d'appariement est consignée. L'effort d'audit est une mesure de tendance pour l'organisation et jamais une mesure d'individus.

## Recommandations

### Connaître ses obligations et ses contrôles

**1. Listez en langage clair les obligations qui s'appliquent.** Avec vos collègues du juridique et de la conformité, listez les lois, normes, contrats et politiques qui lient le service, et ce que chacune exige en termes de résultats. Gardez la liste courte et lisible. Les obligations que personne ne peut énoncer simplement sont celles qui causent des surprises d'audit.

**2. Reliez chaque obligation à des contrôles, des responsables et des preuves.** Pour chaque obligation, nommez le contrôle qui la remplit, la personne redevable et la preuve qui montre que le contrôle fonctionne. Là où un contrôle remplit plusieurs obligations, dites-le, car cela réduit l'effort dupliqué. La couverture des obligations mesure l'exhaustivité de cette carte. Les obligations non reliées sont des lacunes à combler ou à accepter en connaissance de cause.

**3. Préférez moins de contrôles, mais plus solides.** Un contrôle automatisé et testé vaut plusieurs contrôles manuels. Cherchez les contrôles qui se recoupent et retirez ceux qui ne servent aucune obligation. Chaque contrôle coûte de l'effort à exploiter et à prouver (voir le sujet 8.2, Métriques des risques et des contrôles).

### Faire de la preuve un sous-produit

**4. Laissez la chaîne de livraison produire les preuves.** Reliez chaque changement en production à une demande, une revue de code, des résultats de tests et une approbation là où elle est requise, le tout consigné automatiquement. Un enregistrement de déploiement qui montre cela dit à l'auditeur ce qui s'est passé sans qu'un document soit écrit. Cela repose sur les pratiques de livraison continue que les équipes agiles emploient déjà (voir le sujet 4.5, Métriques des versions et des déploiements).

**5. Employez des vérifications de politique dans la chaîne de livraison.** Codez les règles, comme « aucun déploiement sans revue par quelqu'un d'autre que l'auteur » ou « aucun accès à la production sans ticket », sous forme de contrôles automatisés. La vérification est à la fois un contrôle et sa preuve. Gardez les règles visibles et versionnées, pour que leurs changements soient eux aussi consignés. Cela soutient la [séparation des tâches](https://en.wikipedia.org/wiki/Segregation_of_duties), le principe selon lequel aucune personne seule ne devrait contrôler toutes les étapes d'un processus sensible.

**6. Conservez correctement les pistes d'audit.** Gardez les journaux d'accès et de changement de façon à ce qu'ils ne puissent pas être modifiés par les personnes qu'ils décrivent, conservez-les pour la période requise et rendez-les interrogeables. Une piste que peuvent modifier ceux qu'elle consigne est une preuve faible. Vérifiez les règles de conservation avec vos collègues du juridique.

**7. Mesurez la part de preuves automatiques.** Le taux d'automatisation des preuves montre où subsiste la collecte manuelle. Classez les éléments manuels par effort et par risque, et automatisez d'abord les pires. À mesure que le taux monte, l'effort d'audit et le délai de fourniture baissent.

### Travailler avec les auditeurs

**8. Invitez les auditeurs dans la conception.** Partagez tôt avec l'audit interne et les évaluateurs externes les changements prévus des contrôles et des preuves, et demandez ce qui les satisferait. L'indépendance signifie qu'ils ne conçoivent pas vos contrôles, et non qu'ils ne peuvent pas vous dire de quelles preuves ils auront besoin. Les conversations précoces réduisent la reprise. L'Institute of Internal Auditors publie des normes pour la profession qui expliquent le rôle de l'[audit interne](https://en.wikipedia.org/wiki/Internal_audit).

**9. Préparez un index des preuves.** Tenez un index vivant de l'endroit où réside chaque type de preuve et de la façon de le récupérer. Suivez le délai de fourniture des demandes de preuves et employez les retards pour trouver l'automatisation manquante. Un processus court et régulier vaut mieux qu'une course folle avant chaque audit.

**10. Convenez du sens de la matérialité et du périmètre.** Demandez aux auditeurs comment ils jugent ce qui compte et ce qui est dans le périmètre, et consignez la réponse. Une compréhension partagée prévient les disputes plus tard. Ne rétrécissez pas le périmètre pour éviter l'examen, et ne l'élargissez pas sans raison.

### Corriger les causes et apprendre

**11. Traitez chaque constat comme un enregistrement de problème.** Trouvez la cause, corrigez-la et faites vérifier la clôture par quelqu'un d'indépendant. Reliez les constats répétés aux précédents, et examinez pourquoi la première correction n'a pas tenu. Un taux élevé de constats répétés indique des corrections qui ont traité des symptômes, ce qui se rattache à la gestion des problèmes (voir le sujet 4.1, Métriques de gestion des problèmes).

**12. Suivez le coût et faites-le baisser.** Consignez l'effort d'audit au fil des cycles. Si l'effort est élevé et plat, cherchez les duplications entre audits, la collecte manuelle de preuves et les contrôles qui ne servent personne. Rapportez la tendance de l'effort avec les résultats. La conformité vaut son coût quand elle réduit un risque réel, et les métriques vous aident à en juger.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Couverture des obligations | Relier les obligations à des contrôles faibles ou non pertinents ; définir les obligations étroitement | Revue de la pertinence des contrôles par un tiers ; tester les contrôles (voir le sujet 8.2, Métriques des risques et des contrôles) |
| Taux d'automatisation des preuves | Compter des captures d'écran ou des exports comme automatiques ; automatiser d'abord les preuves de faible valeur | Définir automatique comme généré par le système et résistant à l'altération ; classer par risque |
| Délai de fourniture des preuves | Fournir vite des preuves partielles ; négocier la formulation de la demande | Ne compter que les preuves acceptées ; suivre les demandes de suite |
| Délai de clôture des constats | Clore des constats sans vérification ; reclasser la gravité | Vérification indépendante ; journal des changements de gravité |
| Taux de constats répétés | Reformuler les constats pour qu'ils ne correspondent pas ; clore le constat antérieur comme d'un autre type | Apparier par cause avec une règle consignée ; revue par l'audit interne |
| Conflits de séparation des tâches | Déplacer les conflits vers des systèmes hors périmètre ; accorder des accès temporaires jamais consignés | Couvrir tous les systèmes à processus sensibles ; revoir les accès temporaires |
| Effort d'audit | Ne pas consigner les heures ; déplacer l'effort vers d'autres budgets | Échantillonner les relevés de temps ; comparer avec des sondages d'équipes |

Une lecture saine est une automatisation des preuves croissante, un délai de fourniture plus court et plus stable, des constats clos avec vérification, un faible taux de répétition et un effort d'audit qui baisse à mesure que le processus mûrit.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Preuves manuelles périodiques | Familières aux auditeurs | Coûteuses ; reconstituées après coup |
| Preuves automatisées en continu | Peu coûteuses à entretenir ; opportunes | Exigent de l'ingénierie ; les auditeurs doivent faire confiance à la source |
| Lourdes approbations | Contrôle visible | Lentes ; regroupent les changements |
| Vérifications de politique automatisées | Cohérentes et rapides | Les règles doivent être justes et visibles |
| Participation précoce des auditeurs | Moins de surprises | Exige du soin pour préserver l'indépendance |
| Audit à la fin | Séparation claire | Constats tardifs ; reprise |
| Un contrôle pour plusieurs obligations | Efficace | Une seule défaillance touche plusieurs obligations |
| Nombreux contrôles précis | Carte claire | Effort dupliqué |

La réponse en prose est d'automatiser les preuves à partir de la chaîne de livraison et des systèmes de référence, d'associer tôt les auditeurs à la conception tout en gardant leur indépendance et de garder un ensemble réduit de contrôles solides reliés aux obligations.

## Questions à discuter avec votre équipe

**1. Quelle question d'audit met le plus de temps à obtenir réponse, et pourquoi ?**
Prenez la demande de preuve la plus lente du dernier audit et retracez-la. La preuve manque-t-elle, est-elle éparpillée ou est-elle dans la tête de quelqu'un ? Discutez de ce qui la rendrait automatique. L'animateur doit consigner le coût en heures.

**2. Pouvons-nous montrer, pour tout changement en production du dernier mois, qui l'a revu et quels tests ont tourné ?**
Choisissez un changement au hasard et essayez. Notez où la chaîne se rompt. Convenez d'une amélioration de l'enregistrement de changement ou de la chaîne de livraison qui comble la lacune.

**3. Qu'avons-nous promis au dernier audit, et cela a-t-il tenu ?**
Passez en revue les constats et les corrections. Pour chacun, demandez si la cause a été supprimée et qui a vérifié la clôture. Cherchez les répétitions. Convenez d'un constat à examiner plus en profondeur.

**4. Que nous diraient les auditeurs si nous leur demandions comment faciliter les preuves ?**
Prévoyez une conversation avec l'audit interne ou un évaluateur sur la conception des preuves. Demandez ce en quoi ils ont confiance et ce en quoi ils n'ont pas confiance. L'animateur doit traiter leurs réponses comme de l'information, et garder à l'esprit les règles d'indépendance.

**5. Quels contrôles exploitons-nous qu'aucune obligation n'exige ?**
Listez les contrôles et les obligations qu'ils servent. Trouvez ceux qui n'ont pas de but clair. Discutez de leur retrait, et des preuves qu'ils sont inutiles.

**6. Où une seule personne pourrait-elle faire quelque chose de sensible de bout en bout ici ?**
Pensez au déploiement, à l'octroi d'accès et aux paiements. Vérifiez si les outils imposent la séparation ou seulement la politique. Discutez de contrôles compensatoires, comme la revue automatisée, là où les effectifs sont petits.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison produisent une grande part des preuves en faisant bien leur travail. Elles devraient garder reliés les enregistrements de changements, de revues et de tests, employer des vérifications de politique dans la chaîne de livraison et soulever des inquiétudes sur les contrôles qui ralentissent le travail sans réduire le risque. Elles gagnent à des conversations précoces avec les auditeurs sur les preuves suffisantes.

### Équipes de service et d'exploitation

Les équipes d'exploitation gèrent la gestion des accès, la journalisation, les sauvegardes et le traitement des incidents, qui sont au cœur de nombreux audits. Elles devraient garder les journaux résistants à l'altération et conservés, mener les revues d'accès selon le calendrier et tenir l'index des preuves. Elles portent le fardeau des preuves manuelles et peuvent montrer où l'automatisation aiderait le plus.

### Direction et gouvernance

Les dirigeants sont redevables de la conformité et souvent des résultats d'audit. Ils devraient financer l'automatisation des preuves, demander la couverture et les taux de constats répétés plutôt que le seul nombre de constats, et soutenir l'indépendance des auditeurs. La gouvernance devrait attendre des rapports honnêtes sur les lacunes, et un plan pour chacune.

### Clients et utilisateurs

Les clients et les utilisateurs s'appuient sur la conformité comme assurance de la façon dont leurs données et leurs services sont traités. Ils y gagnent quand les rapports d'assurance sont clairs, que les incidents sont signalés comme exigé et que les contrôles ne rendent pas l'usage légitime plus difficile que nécessaire. Une communication transparente sur la conformité bâtit la confiance.

## En pratique : un exemple d'ITIL agile

Une entreprise de paiement de taille moyenne exploite une plateforme de traitement de cartes et est évaluée chaque année au regard d'un cadre d'assurance de sécurité et d'un régime de protection des données. Les chiffres ci-dessous sont illustratifs.

La préparation de l'audit prend environ six semaines chaque année aux équipes d'ingénierie. L'évaluation de l'an dernier s'est close avec 14 constats, dont 5 répétaient ceux de l'année précédente. Le responsable de la conformité dresse la situation. La couverture des obligations est de 83 pour cent, 17 pour cent des obligations n'ayant pas de responsable de contrôle nommé. L'automatisation des preuves est de 22 pour cent, et la plupart des preuves d'approbation des changements viennent de captures d'écran de tickets compilées à la main. Le délai médian de fourniture des preuves est de 9 jours, avec un 85e percentile de 21 jours. Le délai médian de clôture des constats est de 74 jours, et la clôture était souvent marquée par l'équipe responsable sans vérification.

Le responsable de la conformité travaille avec les équipes de livraison et d'exploitation et avec l'auditeur interne. Ils changent quatre choses. Chaque changement en production dans la chaîne de livraison est maintenant relié à la demande, à la revue de code par quelqu'un d'autre que l'auteur, aux résultats de tests et au déploiement, consignés automatiquement dans l'enregistrement du changement. Une vérification de politique bloque un déploiement qui n'a pas de revue indépendante, et journalise la voie d'exception pour les urgences. Les revues d'accès se font chaque trimestre à partir du système d'identité, qui montre directement les conflits de séparation des tâches. Chaque constat devient un enregistrement de problème, avec un vérificateur indépendant de l'audit interne, et les constats répétés sont reliés à leurs prédécesseurs.

À l'évaluation suivante, le taux d'automatisation des preuves est de 71 pour cent, le délai médian de fourniture des preuves est de 2 jours, le 85e percentile de 5 jours, et la préparation de l'audit prend environ deux semaines. La couverture des obligations est de 97 pour cent, et les éléments restants ont une acceptation documentée. Les constats tombent à 6, avec une répétition, et le délai médian de clôture est de 31 jours avec vérification indépendante. Le directeur général demande zéro constat l'an prochain. Le responsable de la conformité propose de suivre les constats répétés, le délai de clôture et l'automatisation des preuves, et explique qu'un objectif de zéro constat pousse les équipes à cacher des problèmes ou à rétrécir le périmètre, et qu'un évaluateur qui ne trouve rien n'a peut-être pas cherché assez fort. La décision est consignée, et le conseil accepte de revoir les mesures à la prochaine réunion.

## Perspective sectorielle

**Startup.** Les obligations peuvent arriver soudainement avec un gros client ou une levée de fonds. Prenez tôt des habitudes : revue par les pairs, enregistrements de changements et contrôle d'accès dans la chaîne de livraison, pour que les preuves existent quand on les demande. Choisissez un cadre quand l'entreprise en a besoin et reliez-le à ce que vous faites déjà.

**Petite entreprise.** Les obligations de conformité sont souvent fixées par des contrats et la loi, et les ressources sont limitées. Gardez une courte liste d'obligations, appuyez-vous sur des services gérés dotés de leurs propres rapports d'assurance et tenez un simple dossier de preuves. Méfiez-vous de l'achat d'outils de conformité qui coûtent plus que le risque qu'ils traitent.

**Grande entreprise.** De nombreuses obligations se recoupent ; un cadre de contrôle unifié qui relie un contrôle à plusieurs obligations économise un effort considérable. Employez des sources de preuves communes, un suivi partagé des constats et un calendrier des audits pour éviter les demandes répétées. Coordonnez l'audit interne, la conformité et la sécurité pour que les équipes ne soient pas examinées trois fois pour la même chose.

**Gouvernement et secteur public.** Les obligations de conformité sont étendues et publiques, y compris les règles de marchés publics, d'archives, d'accessibilité et de protection des données, avec des audits par des organismes nationaux. Documentez les décisions et les preuves pour la période requise, rendez les rapports cohérents entre organismes là où c'est possible et gardez une ligne claire entre l'audit indépendant et la direction. Les obligations peuvent changer avec les élections et la législation (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts comprennent l'outillage du registre des contrôles, l'intégration de la chaîne de livraison pour les preuves, les systèmes d'identité et de journalisation, et le temps du personnel de conformité et des équipes. L'effort initial d'automatisation des preuves est important, et il remplace un travail manuel récurrent.

Les retours sont un effort d'audit récurrent plus faible, des réponses plus rapides aux demandes, moins de constats répétés et une vue plus honnête de la santé des contrôles. Ils incluent aussi le coût évité des surprises tard dans un cycle de certification. Bâtissez le dossier à partir de vos propres chiffres : heures de préparation d'audit avant et après, délai de fourniture des preuves, nombre et âge des constats, et coût de tout retard lié à un audit dans une affaire commerciale. Évitez de citer des études sur le coût de la conformité à moins de pouvoir retracer leur méthode et leur pertinence. Comptez le coût du programme et le risque de sur-automatisation de contrôles faibles. Le traitement financier plus large figure dans le dernier sujet de la partie précédente (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Préparer l'audit le dernier mois.** Cela produit des preuves reconstituées et une course folle. Consignez les preuves pendant que le travail se fait.
- **Les captures d'écran comme preuves.** Elles sont manuelles, faciles à altérer et coûteuses. Employez des enregistrements générés par le système.
- **Viser zéro constat.** Cela récompense un périmètre étroit et des problèmes cachés. Suivez la clôture, les répétitions et la couverture.
- **Clore les constats par affirmation.** Le même constat revient. Vérifiez la clôture de façon indépendante.
- **Traiter les auditeurs en adversaires.** Cela augmente le coût des deux côtés. Collaborez sur la conception des preuves en préservant l'indépendance.
- **Des contrôles qui ne servent aucune obligation.** Ils coûtent de l'effort et engendrent le cynisme. Retirez-les.
- **Automatiser un mauvais contrôle.** Cela produit à grande échelle la preuve d'un contrôle faible. Testez d'abord le contrôle.
- **Séparation des tâches manuelle.** Elle repose sur la mémoire. Imposez-la dans les outils et revoyez les exceptions.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Obligations et contrôles | Connus de quelques personnes | Liste d'obligations et de contrôles | Reliés à des contrôles, des responsables et des sources de preuves | Couverture suivie ; recoupements réduits ; contrôles testés | Cadre de contrôle unifié entre équipes, fournisseurs et régimes |
| Preuves | Compilées avant les audits | Modèles standard et dossier de preuves | Chaînes de livraison et systèmes de référence produisent beaucoup de preuves | Taux d'automatisation, délai de fourniture et effort gérés | Assurance continue, les auditeurs consommant directement les preuves |
| Constats et apprentissage | Constats contestés et clos par affirmation | Constats suivis | Constats traités comme des enregistrements de problèmes avec vérification indépendante | Répétitions et délai de clôture analysés et réinjectés dans la conception des contrôles | Constats partagés dans l'organisation et avec les partenaires ; l'amélioration est routinière |

## Liste de vérification

- [ ] Les obligations applicables sont listées en langage clair, avec leurs responsables.
- [ ] Chaque obligation est reliée à des contrôles et à une source de preuves.
- [ ] Les changements en production portent automatiquement des preuves reliées de demande, de revue, de test et de déploiement.
- [ ] Les vérifications de politique imposent la revue et la séparation des tâches dans la chaîne de livraison.
- [ ] Les pistes d'audit résistent à l'altération et sont conservées pour la période requise.
- [ ] Un index des preuves existe, et le délai de fourniture des demandes est mesuré.
- [ ] Les auditeurs sont consultés sur la conception des preuves, l'indépendance étant préservée.
- [ ] Les constats sont consignés comme enregistrements de problèmes et clos avec vérification indépendante.
- [ ] Les constats répétés sont reliés à leurs prédécesseurs et examinés pour leur cause.
- [ ] L'effort d'audit est suivi en tendance et revu pour les duplications.

## Prompts d'IA

**Reliez les obligations aux contrôles.**

```text
Voici une liste d'obligations qui s'appliquent à notre service dans [sector and
jurisdiction] : [paste in plain language]. Voici notre liste de contrôles :
[paste]. Bâtissez un tableau reliant chaque obligation à des contrôles, aux
preuves qui montrent que chaque contrôle fonctionne et à un rôle de responsable.
Signalez les obligations sans contrôle, les contrôles sans obligation et les
preuves faibles. Ne donnez pas de conclusions juridiques. Énumérez vos
hypothèses et vos questions pour le juridique et la conformité.
```

**Planifiez l'automatisation des preuves.**

```text
Nos preuves d'audit manuelles comprennent : [list items with hours spent]. Nos
systèmes de référence sont : [list tools]. Classez les éléments de preuve par
effort et par risque et proposez comment chacun pourrait être collecté
automatiquement à partir d'un système de référence, ce qui rend la preuve
fiable (résistance à l'altération, exhaustivité) et ce qu'il faut confirmer avec
les auditeurs. Ne supposez pas de fonctions d'outils précis. Énumérez vos
hypothèses.
```

**Analysez les constats répétés.**

```text
Voici les constats des [number] derniers cycles d'audit, avec causes et
corrections : [paste, sanitized]. Regroupez les constats par cause sous-jacente,
repérez les répétitions et suggérez pourquoi les corrections antérieures n'ont
pas tenu. Proposez une règle d'appariement des constats par cause et une étape
de vérification de la clôture. Ne spéculez pas au-delà de l'information donnée.
Énumérez vos hypothèses.
```

**Préparez une conversation précoce avec les auditeurs.**

```text
Rédigez un ordre du jour pour une réunion avec l'audit interne sur le
changement de la façon dont nous produisons les preuves pour [control or
process]. Incluez ce que nous prévoyons de changer, les questions auxquelles
nous avons besoin de réponses (preuves acceptables, échantillonnage,
matérialité), ce que nous ne leur demanderons pas de faire pour préserver
l'indépendance et comment nous consignerons le résultat. Employez un langage
clair. Énumérez vos hypothèses et vos risques.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de conformité ou d'audit.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de conformité porte son vecteur de détournement, son garde-fou et sa règle d'indépendance.

## Points clés à retenir

- Produisez les preuves comme sous-produit de la livraison, à partir des chaînes de livraison et des systèmes de référence, et mesurez la part qui est automatique.
- Reliez chaque obligation à un contrôle, à un responsable et à une source de preuves.
- Invitez tôt les auditeurs à la conception des preuves, et protégez leur indépendance.
- Clôturez les constats en supprimant les causes, vérifiez la clôture de façon indépendante et surveillez le taux de constats répétés.
- Évitez les objectifs comme zéro constat, et suivez l'effort à côté des résultats.
- Imposez la séparation des tâches dans les outils, et gardez les pistes d'audit résistantes à l'altération.

## Références et lectures complémentaires

1. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
2. Institute of Internal Auditors, *Global Internal Audit Standards*, 2024.
3. American Institute of Certified Public Accountants, *Trust Services Criteria* (used in SOC 2 examinations), latest version.
4. Kim, G., Humble, J., Debois, P., and Willis, J., *The DevOps Handbook*, IT Revolution, 2016.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Regulatory compliance](https://en.wikipedia.org/wiki/Regulatory_compliance).
8. Wikipedia, [Information technology audit](https://en.wikipedia.org/wiki/Information_technology_audit).
9. Wikipedia, [Continuous auditing](https://en.wikipedia.org/wiki/Continuous_auditing).
10. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
11. Wikipedia, [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001).
12. Wikipedia, [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act).
13. Wikipedia, [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).
14. Wikipedia, [SOC 2](https://en.wikipedia.org/wiki/SOC_2).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
16. Wikipedia, [Segregation of duties](https://en.wikipedia.org/wiki/Segregation_of_duties).
17. Wikipedia, [Internal audit](https://en.wikipedia.org/wiki/Internal_audit).
