# Métriques de gestion des problèmes

**Les métriques de gestion des problèmes montrent si une équipe supprime les causes de ses incidents ou ne répare que leurs symptômes ; mesurez donc combien de causes sont trouvées, à quelle vitesse elles sont corrigées pour de bon et si les mêmes incidents reviennent.**

## Résumé et motivation

Une équipe qui rétablit vite le service peut quand même rester prise dans un tapis roulant. La même panne revient toutes les quelques semaines, les mêmes personnes sont appelées et les chiffres d'incidents paraissent sains parce que chaque réparation est rapide. La gestion des problèmes est la pratique qui descend du tapis roulant. Elle regarde à travers les incidents, trouve la cause sous-jacente et la fait supprimer ou contenir. Ce sujet couvre les chiffres qui disent si ce travail a lieu et s'il fonctionne.

Quatre termes portent le sujet. Un **incident** est une interruption non planifiée d'un service ou une réduction de sa qualité, au sens où le cadre [ITIL](https://en.wikipedia.org/wiki/ITIL) emploie le mot (voir le sujet 3.3, Temps de réponse et de résolution des incidents). Un **problème** est la cause sous-jacente, ou supposée, d'un ou plusieurs incidents. Une **erreur connue** est un problème dont la cause est comprise et pour lequel un contournement est consigné, conservé dans une [base de données d'erreurs connues](https://en.wikipedia.org/wiki/Known_error_database) afin que la prochaine personne qui rencontre le symptôme puisse la trouver. Un [contournement](https://en.wikipedia.org/wiki/Workaround) réduit ou évite l'impact d'un incident ou d'un problème sans en supprimer la cause. La correction permanente est le changement qui supprime la cause.

Trouver la cause est le travail de l'[analyse des causes profondes](https://en.wikipedia.org/wiki/Root_cause_analysis). Les techniques courantes comprennent la méthode des [cinq pourquoi](https://en.wikipedia.org/wiki/Five_whys), le [diagramme d'Ishikawa](https://en.wikipedia.org/wiki/Ishikawa_diagram) et le [diagramme de Pareto](https://en.wikipedia.org/wiki/Pareto_chart), qui classe les causes selon leur fréquence ou le mal qu'elles font. Les systèmes complexes ont souvent plusieurs causes contributives et aucun coupable unique ; un bon enregistrement de problème nomme donc les facteurs dont la suppression arrête la récurrence, et dit quel est le degré de confiance de l'équipe.

Les métriques comptent parce que la gestion des problèmes comporte un piège de rapport intégré. Ouvrir un enregistrement de problème est facile et donne un sentiment de productivité. En clore un est facile aussi, puisqu'un enregistrement peut être clos par une note. Aucun de ces événements ne montre que quoi que ce soit s'est amélioré pour les utilisateurs. Les mesures qui valent d'être surveillées se situent plus en aval : si les incidents liés à un problème cessent de revenir, si les erreurs connues sont réellement employées par les personnes d'astreinte et combien de temps une cause diagnostiquée attend sa correction.

Les visions ITIL et agile se rencontrent ici sans grande friction. Dans ITIL 4, la gestion des problèmes est une pratique du système de valeur de service, proche de la gestion des incidents, de la maîtrise des changements et de la gestion des connaissances. Son équivalent agile est le flux de petites corrections fondées sur des preuves qui traversent le [backlog](https://en.wikipedia.org/wiki/Backlog) d'une équipe, la rétrospective qui repère un schéma et l'habitude de traiter le travail de fiabilité comme un travail de produit ordinaire. Là où la vision ITIL insiste sur les enregistrements, la responsabilité et l'erreur connue, la vision agile insiste sur les petits lots et la rétroaction rapide. Les deux veulent moins d'incidents répétés, et ce résultat est la mesure à garder devant les yeux de tous.

Ce sujet ne répète ni les horloges d'incidents (voir le sujet 3.3, Temps de réponse et de résolution des incidents) ni les mesures d'incidents majeurs (voir le sujet 3.4, Métriques des incidents majeurs), et il ne traite le suivi des revues que là où il alimente les problèmes (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage). Le backlog d'erreurs connues et l'idée plus large de [dette technique](https://en.wikipedia.org/wiki/Technical_debt) sont traités au sujet 4.6, Dette technique et erreurs connues. Ici, l'accent est mis sur l'enregistrement de problème et les résultats qu'il produit. Les mesures de rétablissement et d'échec fondées sur le déploiement vivent au sujet 2.8, Métriques DORA.

## Principes clés

- **Mesurer la récurrence, non la paperasse.** Le test de la gestion des problèmes est que les incidents liés cessent de revenir. Les comptes d'enregistrements ouverts et clos décrivent l'activité et disent peu du résultat.
- **Séparer trois moments.** Détecter qu'un schéma existe, identifier sa cause et supprimer la cause sont des événements différents avec des horloges différentes et des responsables différents. Les fusionner cache où se trouve le retard.
- **Un contournement est une étape, non une fin.** Consignez-le, employez-le et suivez combien de temps il reste la seule protection. Un contournement qui vit pendant des années est de la dette dont personne ne peut nommer le responsable.
- **Mettre la correction là où est le travail.** Une correction permanente atterrit généralement sous forme de changement ou d'élément de backlog détenu par une équipe produit. Mesurez-la dans le propre flux de l'équipe, et montrez-la à l'équipe qui détient le service.
- **Lier les incidents aux problèmes à la source.** Chaque mesure ici dépend du lien entre un incident et un problème. Si le lien est faible, les chiffres sont faibles.
- **Préférer les distributions et les cohortes aux moyennes.** Les durées de problèmes sont longues et asymétriques, et quelques vieux enregistrements dominent toute moyenne (voir le sujet 1.6, Culture statistique pour les métriques de service).
- **Décrire des équipes et des services, jamais des personnes.** Les problèmes sont des propriétés du système. Un tableau de problèmes clos par analyste transforme une enquête en quota.

## Définitions des métriques

Toutes les horloges emploient les horodatages de l'enregistrement de problème, des enregistrements d'incidents liés et du changement ou de l'élément de backlog lié. Sauf indication contraire d'une ligne, les problèmes sont comptés par service et par équipe responsable, et les enregistrements fusionnés ou en double sont exclus. Les percentiles sont préférés aux moyennes pour toute durée. Les chiffres de l'exemple de ce sujet sont illustratifs.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Problèmes ouverts et clos | Flux d'enregistrements de problèmes entrant et sortant de l'état ouvert, par service | Nombre ouvert dans la période et nombre clos dans la période, chacun par code de clôture (corrigé, risque accepté, doublon, non reproductible) ; les doublons sont montrés mais exclus du compte « corrigé » | nombre par période | Enregistrements de problèmes de l'outil ITSM | Gestion des problèmes | Entrée et débit du backlog | Mensuelle |
| Âge du backlog de problèmes | Depuis combien de temps les problèmes ouverts attendent | Pour chaque problème ouvert, date de l'instantané moins date de création de l'enregistrement ; rapportez la médiane et le 85e percentile des problèmes ouverts et le plus ancien, par priorité | jours | Enregistrements de problèmes de l'outil ITSM | Gestion des problèmes | Ancienneté de l'élément de travail sur le tableau | Mensuelle |
| Taux de liaison incident-problème | Part des incidents qui pointent vers un problème ou une erreur connue là où l'on en attend un | Incidents de la période avec un problème ou une erreur connue liés / incidents de la période de priorité haute ou supérieure, ou rouverts, ou d'une catégorie répétée ; les incidents clos comme erreur d'utilisateur ou doublons sont exclus | pourcentage | Enregistrements d'incidents et de problèmes de l'outil ITSM | Gestion des incidents ; gestion des problèmes | Repérage de schémas en rétrospective | Mensuelle |
| Délai jusqu'à la cause profonde | Combien de temps un problème diagnostiqué met à atteindre une cause consignée | L'horloge démarre quand l'enregistrement de problème est créé et s'arrête quand la cause est consignée et qu'une seconde personne l'a revue ; les problèmes clos sans cause sont exclus et comptés séparément ; rapportez la médiane et le 85e percentile | jours | Enregistrements de problèmes de l'outil ITSM et leur piste d'audit | Gestion des problèmes | Étude exploratoire ou enquête à durée limitée | Mensuelle |
| Taux de réutilisation des erreurs connues | À quelle fréquence une erreur connue est employée quand un incident arrive | Incidents résolus avec une erreur connue liée ou son contournement / incidents de la période dont le symptôme correspond à une erreur connue qui existait à ce moment ; les incidents sans erreur connue correspondante sont exclus | pourcentage | Liens d'incidents de l'outil ITSM ; usage des articles de connaissance | Gestion des connaissances ; gestion des problèmes | Usage du guide d'exploitation ou du manuel de l'équipe | Mensuelle |
| Délai de correction permanente | Combien de temps un problème est exposé du diagnostic à la correction en production | L'horloge démarre quand la cause est consignée et s'arrête quand le changement de correction lié est mis en œuvre et confirmé ; les problèmes clos comme risque accepté sont exclus et comptés séparément ; rapportez la médiane et le 85e percentile | jours | Enregistrements de problèmes ; enregistrements de changements ou événements de déploiement de la chaîne de livraison | Gestion des problèmes ; maîtrise des changements | Temps de cycle de l'élément de correction | Mensuelle |
| Taux de récurrence après correction | Part des problèmes corrigés dont les symptômes liés sont revenus | Problèmes clos comme corrigés dans un trimestre de cohorte avec un nouvel incident correspondant dans les 90 jours suivant la mise en production de la correction / problèmes clos comme corrigés dans ce trimestre ; la fenêtre de 90 jours est un exemple et est énoncée sur le graphique | pourcentage | Enregistrements d'incidents et de problèmes de l'outil ITSM ; événements de déploiement | Gestion des problèmes ; amélioration continue | Défauts échappés ou taux de régression | Trimestrielle |
| Part de contournement seul | Part des problèmes connus protégés uniquement par un contournement | Problèmes ouverts à l'état d'erreur connue sans correction planifiée / problèmes ouverts à l'état d'erreur connue ; les problèmes à risque accepté avec un responsable nommé et une date de revue sont montrés comme un groupe séparé | pourcentage | Enregistrements de problèmes de l'outil ITSM | Gestion des problèmes ; gestion des risques | Registre de la dette technique | Mensuelle |

La fenêtre de 90 jours, la règle d'appariement des symptômes et la définition de « attendu » dans le taux de liaison sont des exemples. Une équipe choisit des valeurs qui conviennent à ses services et les écrit dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques). Compter les problèmes clos comme « corrigés » séparément des autres codes de clôture garde honnête la paire ouverts et clos.

## Recommandations

### Décider de ce qui compte comme un problème

**1. Ouvrez un problème sur preuve, et dites quelle est la preuve.** Les bons déclencheurs sont des incidents répétés du même symptôme, un incident majeur de cause inconnue, une tendance trouvée en revue ou un risque repéré avant tout incident. Écrivez le déclencheur sur l'enregistrement, par exemple « cinq incidents en six semaines liés au même service ». Si chaque incident inhabituel devient un enregistrement de problème, le backlog se remplit de bruit et personne ne le lit.

**2. Employez un petit ensemble partagé de codes de clôture.** Corrigé, risque accepté, doublon, non reproductible et fusionné suffisent à la plupart des équipes. Chaque code a un sens d'une phrase et un responsable qui peut l'employer. Le mélange de codes de clôture est plus informatif que le compte de clos, car il montre combien de travail a supprimé une cause et combien s'est terminé sans changement.

### Lier les incidents et les problèmes à la source

**3. Faites du lien une étape de la clôture d'incident.** Demandez à la personne qui résout de lier l'incident à un problème, à une erreur connue ou à « aucun trouvé » avant de le clore. Proposez des suggestions d'appariement de l'outil quand il le peut, et laissez une personne décider. Un lien fait des semaines plus tard dans un exercice en bloc n'est pas fiable (voir le sujet 1.5, Sources de données et instrumentation).

**4. Convenez de la façon d'apparier les symptômes.** La récurrence dépend de la décision de quand deux incidents sont « les mêmes ». Une courte taxonomie de causes et de symptômes, avec définitions et exemples, vaut mieux que du texte libre. Passez en revue un échantillon d'appariements chaque trimestre, car les erreurs d'appariement dans les deux sens faussent le taux de récurrence.

**5. Laissez la revue des schémas alimenter la liste de problèmes.** Une revue mensuelle des catégories d'incidents, par service et par [diagramme de Pareto](https://en.wikipedia.org/wiki/Pareto_chart), montre quelles quelques causes produisent l'essentiel de la douleur. Employez la revue pour ouvrir des problèmes et les prioriser, et envoyez les causes répétées issues des revues d'incidents majeurs dans la même liste (voir le sujet 3.2, Volume et priorité des incidents).

### Mesurer les trois retards

**6. Chronométrez les étapes séparément.** Mesurez de la création de l'enregistrement à la cause consignée, et de la cause consignée à la correction en production. Le premier retard désigne la capacité d'investigation, l'accès aux données et la compétence. Le second désigne la priorisation, le processus de changement et le travail concurrent sur les fonctions. Un seul « délai pour clore un problème » les mélange et ne donne à personne d'action claire.

**7. Rapportez les plus anciens.** Montrez la médiane et le 85e percentile de l'âge des problèmes ouverts, et listez les plus anciens par service. Quelques enregistrements vieux de plusieurs années déplaceront une moyenne et ne diront pas grand-chose, alors que la liste des plus anciens invite à une décision : corriger, accepter le risque avec un responsable nommé et une date de revue, ou clore avec un motif.

### Mettre la correction dans le flux normal

**8. Traitez une correction permanente comme un élément de backlog avec un responsable et une date.** Liez le problème au changement ou à l'élément de travail qui porte la correction, et montrez la correction sur le même tableau que le travail sur les fonctions. Priorisez selon une règle convenue, comme peser le coût récurrent des incidents contre l'effort de correction. Là où une correction exige un changement, la voie de changement standard devrait être rapide pour les corrections à faible risque (voir le sujet 4.3, Métriques de maîtrise des changements).

**9. Demandez ensemble le contournement et la date de sortie.** Un contournement fait gagner du temps. Consignez-le comme erreur connue, vérifiez que l'équipe d'astreinte peut le trouver et l'exécuter, et fixez une date de revue pour la correction. La part de contournement seul devient alors une liste de décisions, non un tas silencieux de dette (voir le sujet 4.6, Dette technique et erreurs connues).

### Vérifier que les corrections ont fonctionné

**10. Faites suivre chaque correction d'une fenêtre de récurrence.** Une fois la correction en production, surveillez les incidents correspondants pendant une fenêtre énoncée, et rapportez par cohorte trimestrielle la part des corrections qui ont tenu. La récurrence est ce qui se rapproche le plus d'une mesure de résultat pour cette pratique. Si elle est élevée, demandez si la cause a été trouvée ou seulement un facteur contributif, et rouvrez l'analyse.

**11. Mesurez la réutilisation des erreurs connues là où les intervenants travaillent.** Comptez à quelle fréquence une erreur connue ou son contournement est employé quand un incident correspondant arrive. Un faible taux de réutilisation avec beaucoup d'erreurs connues signifie généralement que les entrées sont difficiles à trouver, périmées ou écrites pour l'analyste plutôt que pour l'intervenant. Corrigez l'article et son emplacement avant d'en ajouter d'autres (voir le sujet 3.6, Métriques de gestion des connaissances).

### Garder les chiffres honnêtes

**12. Montrez des cohortes et des réserves à côté de chaque graphique.** Consignez les définitions, le mélange de codes de clôture et tout changement de règle sur le graphique lui-même. Les cohortes trimestrielles de problèmes corrigés montrent la récurrence sans mélanger le travail ancien et le nouveau. Associez chaque compte à une mesure de résultat afin qu'aucun chiffre ne reste seul (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Problèmes ouverts et clos | Ouvrir de nombreux enregistrements triviaux ; scinder un problème en plusieurs ; clore des enregistrements comme doublons ou « non reproductible » pour vider la liste | Mélange de codes de clôture ; taux de récurrence après correction ; un échantillon d'enregistrements clos lu chaque trimestre |
| Âge du backlog de problèmes | Clore les plus vieux enregistrements sans correction ; rouvrir comme nouvel enregistrement pour remettre l'horloge à zéro ; requalifier un problème en demande | Lier les nouveaux enregistrements à leurs originaux et rapporter l'âge à partir du premier enregistrement ; liste des clôtures par motif ; revue des risques acceptés |
| Taux de liaison incident-problème | Lier chaque incident à un problème fourre-tout vague pour relever le taux | Part des liens pointant vers les cinq plus grands problèmes ; échantillon de liens vérifiés pour un appariement réel ; récurrence des symptômes liés |
| Délai jusqu'à la cause profonde | Consigner une cause rapide et superficielle pour arrêter l'horloge ; nommer « erreur humaine » ; sauter le second relecteur | Taux de récurrence après correction ; la taxonomie des causes où « erreur humaine » n'est pas acceptée seule ; revue d'un échantillon de causes au regard des preuves |
| Taux de réutilisation des erreurs connues | Compter un lien ajouté après la clôture de l'incident ; ajouter une erreur connue à chaque incident d'un service | Temps entre la clôture de l'incident et le lien ; retour des intervenants sur l'utilité de l'entrée ; revue des entrées non employées en 90 jours |
| Délai de correction permanente | Marquer le changement comme mis en œuvre avant que la correction soit vérifiée ; clore comme risque accepté pour éviter le travail | Taux de récurrence après correction ; liste des risques acceptés avec responsable et date de revue ; étape de vérification avant que l'horloge s'arrête |
| Taux de récurrence après correction | Définir les symptômes étroitement pour que les récurrences ne correspondent pas ; élargir la fenêtre de clôture pour que les corrections tombent dans des cohortes plus anciennes ; retarder la liaison | Taxonomie des causes revue par quelqu'un d'extérieur à l'équipe responsable ; taux de liaison des incidents ; fenêtre fixe énoncée à l'avance |
| Part de contournement seul | Planifier une correction fictive sans vraie date ; déplacer des problèmes vers le risque accepté ; baisser la priorité du problème | Âge des corrections planifiées qui ont glissé ; liste des risques acceptés revue avec un dirigeant responsable nommé ; coût des incidents répétés par problème |

Une lecture saine paraît calme et un peu terne. Les comptes d'ouverts et de clos sont à peu près au même pas, les plus anciens problèmes ouverts ont chacun une décision consignée, la part de corrections qui ont tenu est élevée et les courbes de cohorte sont stables, et les erreurs connues sont employées par les personnes qui rencontrent les symptômes. Le schéma d'alerte est un long compte de clos bien rangé à côté d'incidents qui continuent de revenir. Quand les chiffres d'activité paraissent excellents et que les utilisateurs butent encore sur la même panne, faites confiance aux utilisateurs.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Enregistrements formels de problèmes pour les incidents récurrents et majeurs | Responsable, historique et lien vers les corrections clairs ; soutient l'audit | Surcoût de processus ; les enregistrements peuvent devenir périmés |
| Corriger les causes dans le backlog de l'équipe sans enregistrement de problème | Rapide, léger, proche du travail | Les schémas entre équipes passent inaperçus ; pas d'erreur connue partagée |
| Codes de clôture stricts et cohortes trimestrielles | Vue honnête des résultats ; résiste aux comptes bien rangés | Plus lent à lire ; exige de la discipline dans la saisie |
| Compter les problèmes clos comme objectif | Facile à expliquer et à tracer | Invite à clore pour le compte ; récompense les petits problèmes |
| Suivi de la récurrence des problèmes corrigés | Mesure disponible la plus proche de savoir si cela a fonctionné | Exige un bon appariement des symptômes et une fenêtre assez longue |
| Suivi de la réutilisation des erreurs connues | Montre si la connaissance aide les intervenants | Dépend de la liaison de l'entrée par les intervenants ; peut être détourné |

Les équipes qui corrigent vite les causes dans leur propre backlog devraient quand même consigner la cause là où l'organisation plus large peut la voir, pour qu'une autre équipe rencontrant le même symptôme en profite. Investissez d'abord dans le lien entre incidents et problèmes et dans la fenêtre de récurrence. Ces deux éléments rendent interprétable toute autre mesure.

## Questions à discuter avec votre équipe

**1. Quels trois incidents avons-nous le plus souvent réparés le trimestre dernier, et qu'est-ce qui nous a empêchés d'en corriger la cause ?**
Listez les incidents répétés à partir du centre de services ou de l'outil d'incidents et triez-les par nombre d'occurrences. Pour chacun, demandez quel était l'obstacle : pas de temps d'investigation, pas de cause convenue, une correction en concurrence avec des fonctions ou une correction qui exige une autre équipe. L'animateur doit chercher les obstacles qui se répètent d'un incident à l'autre, car ils désignent une correction du système plutôt qu'une correction technique.

**2. Quand nous lions un incident à un problème, qui le fait, quand, et comment savons-nous que c'est le bon problème ?**
Parcourez un incident récent de la clôture au lien. Notez si le lien est fait pendant l'incident, à la clôture ou lors d'un nettoyage ultérieur. Passez ensemble en revue un petit échantillon de liens pour de vrais appariements. Convenez d'un changement qui rend le lien plus facile ou plus fiable.

**3. Combien de temps une cause diagnostiquée attend-elle sa correction, et qui décide de l'ordre ?**
Prenez les problèmes avec une cause consignée et regardez le temps écoulé depuis le diagnostic. Demandez qui les priorise et quelle règle il emploie. La discussion montre souvent que le retard est une file devant le backlog de produit plutôt qu'une difficulté technique. Convenez de la façon dont les corrections de problèmes sont comparées au travail sur les fonctions.

**4. Quels sont nos plus anciens contournements, et que perdrions-nous à les garder une année de plus ?**
Nommez les trois contournements les plus durables et ce qu'ils coûtent en effort manuel, en risque et en connaissance des personnes qui s'en souviennent encore. Demandez ce qui arriverait si la personne qui connaît le contournement était absente. Décidez pour chacun de le corriger, d'accepter le risque avec un responsable et une date de revue, ou de retirer le service.

**5. Si un problème corrigé revient, le découvrons-nous, et à quelle vitesse ?**
Demandez comment un symptôme qui revient serait remarqué et qui rouvrirait l'analyse. Discutez de la question de savoir si la fenêtre de récurrence est assez longue pour le type de panne concerné. L'animateur doit aider le groupe à convenir d'une fenêtre et d'une règle d'appariement, et à décider quelle équipe passe en revue les appariements afin que l'équipe responsable ne note pas son propre travail.

**6. Les personnes d'astreinte emploient-elles nos erreurs connues, et qu'est-ce qui les ferait y recourir ?**
Demandez aux intervenants quand ils ont cherché pour la dernière fois une erreur connue et ce qu'ils ont trouvé. Regardez où vivent les entrées, comment elles sont intitulées et si elles disent quoi faire d'abord. Choisissez une entrée à réécrire avec un intervenant et testez-la lors de la prochaine semaine d'astreinte.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison détiennent la plupart des corrections permanentes, et elles ressentent l'attraction du travail sur les fonctions. Elles gagnent à voir le coût en incidents d'une panne récurrente à côté de l'effort de la corriger, et à disposer d'une place claire pour les éléments de correction dans le backlog. Elles devraient résister à traiter le travail sur les problèmes comme une interruption et plutôt lui réserver une part visible de capacité. La rétrospective est un endroit naturel pour repérer des schémas et ouvrir des problèmes (voir le sujet 2.1, Mesures de flux).

### Équipes de service et d'exploitation

Les équipes d'exploitation voient d'abord les symptômes répétés et portent le coût en appels et en travail manuel. Elles tiennent les enregistrements de problèmes et d'erreurs connues, mènent la revue des schémas et vérifient que les liens sont faits. Leur risque est de dépenser l'effort sur des enregistrements plutôt que de supprimer des causes. Elles devraient garder petit l'ensemble des codes de clôture, faire de l'erreur connue la première chose que voit un intervenant et remettre les corrections à l'équipe responsable avec les preuves jointes.

### Direction et gouvernance

Les dirigeants décident si le travail de fiabilité l'emporte sur les fonctions, et ils fixent les incitations sur ce qui est consigné. Ils devraient demander la récurrence par cohorte et les plus anciens problèmes ouverts avant de demander des comptes, et traiter le risque accepté comme une décision qui exige un responsable nommé et une date de revue. Rapporter un backlog en baisse sans la récurrence récompense la clôture. La gouvernance devrait regarder les tendances et les décisions, non un classement des équipes (voir le sujet 4.6, Dette technique et erreurs connues).

### Clients et utilisateurs

Les utilisateurs jugent la gestion des problèmes sur un seul point : la même chose continue-t-elle de mal tourner. Ils ne voient pas les enregistrements de problèmes, et ils se moquent du nombre de ceux qui ont été clos. Là où les accords le permettent, parlez aux clients d'un problème connu, du contournement et de la date à laquelle une correction est attendue, puis rendez compte quand elle arrive. Une correction annoncée et livrée bâtit plus de confiance qu'une correction silencieuse.

## En pratique : un exemple d'ITIL agile

Le service informatique d'un hôpital régional soutient une application de planification clinique employée par les services de soins et les consultations externes. Une équipe produit construit et exploite l'application, une équipe d'infrastructure exploite la plateforme et un centre de services prend les appels. Tous les chiffres de cet exemple sont illustratifs.

Lors d'une revue trimestrielle, le chef du service remarque que le tableau de bord des problèmes paraît excellent : 46 problèmes clos pour 31 ouverts, et le plus ancien problème ouvert a 140 jours. Les cadres de santé se plaignent toujours que l'écran de planification se fige au changement d'équipe. La responsable du service demande le taux de liaison incident-problème et le taux de récurrence après correction, qui ne sont pas encore sur le tableau de bord.

Les données racontent une autre histoire. Le mélange de codes de clôture montre que 22 des 46 clôtures étaient « non reproductible » ou « doublon ». Le taux de liaison pour les incidents de haute priorité est de 38 pour cent. Les incidents de blocage étaient consignés dans quatre catégories, de sorte qu'aucun schéma n'était visible. Une fois qu'un échantillon de 30 incidents a été relié à la main, 17 d'entre eux pointaient vers une seule cause : un verrou de base de données retenu par une tâche de nuit qui débordait sur l'équipe du matin. La récurrence des problèmes corrigés le trimestre précédent était de 27 pour cent, plus élevée que quiconque l'attendait.

L'équipe prend trois décisions. D'abord, la taxonomie des causes et des symptômes gagne une entrée « blocage de la planification », et lier un problème ou « aucun trouvé » devient une étape obligatoire à la clôture de l'incident. Ensuite, le problème de la tâche de nuit passe du backlog de l'infrastructure au tableau de l'équipe produit avec un responsable et une date cible, et un contournement (un redémarrage planifié après la tâche) est consigné comme erreur connue et testé avec le centre de services. Enfin, le tableau de bord remplace le compte de clos par trois chiffres : la part des corrections qui ont tenu après 90 jours, la médiane et le 85e percentile du délai entre la cause consignée et la correction, et les plus anciens problèmes ouverts avec leurs décisions.

Huit semaines plus tard, le verrou est supprimé par un changement de la tâche. Les incidents de la catégorie de blocage passent d'environ neuf par mois à deux, et la réutilisation des erreurs connues monte à 71 pour cent pour les symptômes qui restent, surtout parce que le centre de services trouve maintenant l'entrée de redémarrage. Le risque de détournement que l'équipe a attrapé se trouvait dans sa propre habitude antérieure : clore des enregistrements comme « non reproductible » quand un incident survenait hors des heures de travail. Le mélange de codes de clôture, l'échantillon d'enregistrements clos lu chaque trimestre et la cohorte de récurrence servent maintenant de garde-fous. Personne n'est classé, et la revue liste des services et des décisions, non des analystes.

## Perspective sectorielle

**Startup.** Il y a rarement un processus de problèmes distinct. L'équipe corrige directement les causes, et le risque est que personne ne se souvienne pourquoi. Tenez une liste d'une page des incidents récurrents et de leurs causes, liez les corrections au gestionnaire de tickets et revoyez la liste chaque mois. Mesurez la récurrence et l'âge des plus anciens éléments ; sautez les codes de clôture formels jusqu'à ce que l'équipe grandisse.

**Petite entreprise.** Une personne informatique ou un prestataire de services gérés peut tout exploiter. Demandez au prestataire ses enregistrements de problèmes et les catégories d'incidents qui les sous-tendent, ainsi que la définition écrite de « résolu ». Une courte liste des cinq principaux problèmes répétés, avec un responsable nommé et une date pour chacun, vaut mieux qu'un outil lourd. Exportez périodiquement les enregistrements pour éviter l'enfermement.

**Grande entreprise.** De nombreux services et fournisseurs créent le plus grand besoin de définitions partagées. Convenez de la taxonomie des causes, des codes de clôture et de la fenêtre de récurrence entre équipes, nommez des responsables de problèmes par service et rapportez par service et par cohorte. Là où un fournisseur détient une correction, suivez la réponse du fournisseur au regard de l'accord (voir le sujet 8.4, Métriques des fournisseurs et des contrats) et escaladez par une voie documentée.

**Gouvernement et secteur public.** L'audit, la maîtrise des changements et les marchés peuvent allonger le chemin de la cause à la correction ; l'horloge du délai de correction devrait donc montrer où se situe le retard : investigation, approbation, marché ou planification. Les risques acceptés ont besoin de responsables et de dates de revue consignés qui résistent à l'audit. Les règles de conservation et de confidentialité s'appliquent aux enregistrements d'incidents et de problèmes, en particulier là où des données cliniques ou de citoyens y figurent.

## Dossier d'affaires : motivations, ROI et TCO

Le coût a trois parties. La première est le temps d'investigation : des personnes ayant les compétences et l'accès pour analyser les incidents, ce qui concurrence leur autre travail. La deuxième est la correction elle-même, livrée par le backlog et le processus de changement. La troisième est le coût de consignation et de rapport : lier les incidents, tenir les taxonomies, mener la revue des schémas et entretenir la base de données d'erreurs connues. Ces coûts sont surtout du temps de personnes ; comptez donc les heures.

Le retour se voit dans des incidents qui cessent de se reproduire, moins d'appels et moins d'effort de contournement manuel, un traitement des incidents plus court parce que les intervenants trouvent les erreurs connues, et moins d'escalades vers les ingénieurs. Aucun chiffre universel ne s'applique ; estimez donc le vôtre. Pour un incident récurrent, multipliez les occurrences par an par l'effort moyen de traitement et une estimation de l'impact métier par occurrence, puis comparez avec l'effort de le corriger. Revoyez l'estimation avec le responsable du service, énoncez-la comme une estimation et revisitez-la une fois que la fenêtre de récurrence a montré ce qui s'est passé. La gestion des problèmes rapporte le mieux sur les quelques causes qui produisent l'essentiel de la charge d'incidents, que la vue de Pareto trouve rapidement.

## Antimodèles et pièges

- **Clore comme objectif.** Un but de problèmes clos récompense les enregistrements triviaux et la clôture précoce. Rapportez d'abord les mesures de résultat et montrez le mélange de codes de clôture.
- **Les enregistrements de problèmes comme cimetière.** Des enregistrements restent ouverts sans responsable, date ni décision. Passez en revue la liste des plus anciens selon un rythme et exigez une décision pour chaque élément.
- **S'arrêter à « erreur humaine ».** Cela nomme qui a touché au système et non pourquoi le système a permis la panne. N'acceptez une cause que si elle nomme une condition qui peut être changée.
- **Ne rien corriger tant que la cause profonde n'est pas certaine.** Les pannes complexes peuvent n'avoir aucune cause unique. Appliquez un contournement et la correction la mieux étayée, puis surveillez la récurrence.
- **Des contournements sans sortie.** Un contournement sans date de revue devient permanent. Consignez un responsable et une date quand l'erreur connue est créée.
- **Des liens d'incidents faibles.** Des liens manquants ou bâclés rendent la récurrence invisible. Faites de la liaison une partie de la clôture d'incident et échantillonnez les liens.
- **Le travail sur les problèmes hors du backlog.** Les corrections qui vivent dans une file séparée attendent indéfiniment. Mettez l'élément de correction sur le tableau de l'équipe responsable et priorisez-le face aux fonctions.
- **Comparer les analystes ou les équipes sur les enregistrements clos.** Cela récompense les services faciles et invite au détournement. Comparez les services dans le temps à leur propre historique, et lisez les cohortes.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Identification et liaison des problèmes | Problèmes ouverts seulement après de grandes pannes ; aucun lien d'incidents | Certaines équipes lient les incidents ; les catégories diffèrent selon l'équipe | Taxonomie partagée et codes de clôture ; lien fait à la clôture de l'incident | Taux de liaison et qualité des appariements échantillonnés et revus | Schémas détectés entre équipes et fournisseurs, avec des erreurs connues partagées |
| Cause profonde et erreurs connues | Cause consignée en texte libre, si elle l'est | Erreurs connues tenues par certaines équipes en des endroits différents | Une base de données d'erreurs connues ; revue des causes par une seconde personne | Délai jusqu'à la cause profonde et réutilisation des erreurs connues suivis dans le temps et exploités | Intervenants, fournisseurs et clients contribuent à des entrées partagées et les emploient |
| Livraison des corrections | Les corrections se font quand quelqu'un a le temps | Corrections suivies dans la propre liste d'une équipe | Correction liée à un élément de backlog ou à un changement avec un responsable et une date | Délai de correction permanente revu, avec de la capacité réservée | Priorité des corrections fixée conjointement avec les feuilles de route des produits et des fournisseurs |
| Résultat et apprentissage | Comptes d'enregistrements rapportés | Âge du backlog rapporté dans certaines revues | Récurrence après correction et part de contournement seul rapportées avec des définitions | Cohortes associées à des garde-fous et employées dans les décisions de financement | Définitions révisées quand elles cessent d'éclairer les décisions ; amélioration routinière |

## Liste de vérification

- [ ] Le registre des métriques définit un problème, une erreur connue et chaque code de clôture.
- [ ] La clôture d'incident inclut un lien vers un problème, une erreur connue ou « aucun trouvé ».
- [ ] Une taxonomie des causes et des symptômes existe, avec définitions et exemples.
- [ ] Chaque problème a un responsable, un déclencheur et une date de décision.
- [ ] Le délai jusqu'à la cause profonde et le délai de correction permanente sont mesurés séparément, avec des percentiles.
- [ ] Chaque correction permanente est liée à un élément de backlog ou à un changement avec un responsable.
- [ ] Chaque contournement a un responsable et une date de revue.
- [ ] La récurrence après correction est suivie par cohorte trimestrielle avec une fenêtre énoncée.
- [ ] La réutilisation des erreurs connues est mesurée là où les intervenants travaillent.
- [ ] Les plus anciens problèmes ouverts sont revus selon un rythme, et chaque décision est consignée.
- [ ] Un échantillon d'enregistrements clos est lu chaque trimestre pour vérifier les codes de clôture et les causes.
- [ ] Les rapports décrivent des services et des équipes, et aucun tableau ne classe des individus.

## Prompts d'IA

**Trouvez des problèmes candidats dans un ensemble d'incidents.**

```text
Voici un export d'incidents de [service or team] du [start date] au [end date] :
[paste incident fields such as id, opened time, category, short description,
resolution note]. Regroupez les incidents qui peuvent partager une cause
sous-jacente, expliquez les preuves de chaque groupe et classez les groupes par
nombre d'occurrences et par [impact measure, for example hours of user impact].
Marquez les groupes dont les preuves sont faibles. N'inventez ni causes, ni
comptes, ni valeurs de référence. Énumérez vos hypothèses et les données
supplémentaires qui augmenteraient votre confiance.
```

**Passez en revue les codes de clôture et les enregistrements de problèmes.**

```text
Ci-dessous figurent [number] enregistrements de problèmes clos pour [service or
team] : [paste id, closing code, recorded cause, fix reference, closing date].
Vérifiez pour chaque enregistrement un code de clôture qui ne correspond pas à
son texte, une cause qui nomme une personne au lieu d'une condition et une
correction sans lien. Résumez les schémas et suggérez trois questions pour un
relecteur. Ne classez pas de personnes et n'inventez pas de faits sur les
enregistrements. Énumérez vos hypothèses.
```

**Concevez une mesure de récurrence.**

```text
Nous voulons mesurer si les problèmes corrigés le restent pour [service or
team]. Nos outils sont [ITSM tool, deployment tool], nos catégories d'incidents
sont [list] et nos codes de clôture sont [list]. Proposez une définition, une
formule, un début et une fin d'horloge, une règle d'appariement des symptômes,
une fenêtre de récurrence et des exclusions, avec une disposition de graphique
montrant des cohortes trimestrielles. Suggérez comment elle pourrait être
détournée et un garde-fou pour chaque cas. Demandez-moi les seuils dont vous
avez besoin au lieu de les inventer. Énumérez vos hypothèses.
```

**Préparez une revue décisionnelle des problèmes anciens.**

```text
Voici les problèmes ouverts de plus de [number] jours pour [service or team] :
[paste id, age, priority, owner, last update, workaround status]. Rédigez un
ordre du jour pour une revue de [length] minutes où chaque élément reçoit l'une
de trois décisions : corriger avec une date, accepter le risque avec un
responsable nommé et une date de revue, ou clore avec un motif. Suggérez les
preuves à apporter pour chaque décision. N'inventez ni coûts ni résultats.
Énumérez vos hypothèses et les questions auxquelles je devrais répondre
d'abord.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets qui définissent les mesures d'incidents, de changements et de connaissances dont dépendent les métriques de problèmes, et le garde-fou à associer à chacune.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une métrique de problème nouvelle ou modifiée énonce ses horloges, ses exclusions, son vecteur de détournement et son garde-fou.

## Points clés à retenir

- La mesure de la gestion des problèmes est la récurrence : si les incidents liés à un problème cessent de revenir.
- Chronométrez les étapes séparément, de l'enregistrement à la cause consignée et de la cause à la correction en production.
- Liez les incidents aux problèmes à la clôture, convenez de la façon d'apparier les symptômes et échantillonnez les liens.
- Un contournement est une étape avec un responsable et une date de revue, et la part de contournement seul montre quel risque est porté.
- Mettez les corrections permanentes dans le backlog de l'équipe responsable, et rapportez les mesures de résultat avant les comptes d'enregistrements.
- Décrivez des services, des cohortes et des décisions. Ne classez jamais les analystes ou les équipes par problèmes clos.

## Références et lectures complémentaires

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Ohno, T., *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Known error database](https://en.wikipedia.org/wiki/Known_error_database).
10. Wikipedia, [Workaround](https://en.wikipedia.org/wiki/Workaround).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
13. Wikipedia, [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram).
14. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
15. Wikipedia, [Backlog](https://en.wikipedia.org/wiki/Backlog).
16. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
