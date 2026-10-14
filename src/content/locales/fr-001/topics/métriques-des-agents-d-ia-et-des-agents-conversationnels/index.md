# Métriques des agents d'IA et des agents conversationnels

**Un assistant conversationnel n'a aidé que lorsque le problème de l'utilisateur est résolu et le reste ; mesurez donc la résolution vérifiée, les retours, la qualité de la transmission à une personne et le préjudice des actions erronées, et ne récompensez jamais un agent conversationnel pour avoir tenu les gens à l'écart de l'aide.**

## Résumé et motivation

De nombreuses organisations placent désormais un assistant conversationnel entre les utilisateurs et le centre de services, et certaines donnent aux agents d'IA la capacité d'agir : réinitialiser un mot de passe, commander du matériel, redémarrer un service, changer une configuration. Un [agent conversationnel](https://en.wikipedia.org/wiki/Chatbot) est une application logicielle qui mène une conversation, et un [assistant virtuel](https://en.wikipedia.org/wiki/Virtual_assistant) y ajoute la capacité d'accomplir des tâches au nom de l'utilisateur. L'idée plus large d'[agent intelligent](https://en.wikipedia.org/wiki/Intelligent_agent) est celle d'un système qui perçoit un environnement et agit vers des buts. Les modèles de langage modernes rendent ces systèmes bien plus capables de conversation ouverte que leurs prédécesseurs à base de règles, et le premier programme conversationnel, l'ELIZA de Joseph Weizenbaum dans les années 1960, montrait déjà avec quelle facilité les gens attribuent de la compréhension à une machine qui ne fait que produire des réponses plausibles.

L'attrait est évident. Les utilisateurs obtiennent de l'aide à toute heure sans attendre. Les équipes passent moins de temps sur les demandes courantes. Le [libre-service](https://en.wikipedia.org/wiki/Self-service) est depuis longtemps un but de l'ITSM, et le déplacement de la résolution vers des points plus précoces et moins coûteux (shift-left) est une idée centrale du centre de services (voir le sujet 3.7, Métriques de libre-service et d'automatisation). Le problème de mesure est que les chiffres évidents récompensent les mauvaises choses. Un agent conversationnel qui met fin à une conversation compte comme l'ayant « contenue », que l'utilisateur ait été aidé ou ait abandonné. Un agent conversationnel qui n'offre jamais de personne maximise le confinement. Un agent conversationnel qui donne avec aplomb une réponse fausse produit un échec silencieux qui apparaît sous forme de contact furieux quelques jours plus tard.

Deux genres de systèmes demandent des mesures distinctes.

- **Les assistants conversationnels** répondent aux questions, guident les utilisateurs et recueillent de l'information. Leur risque est celui de réponses fausses ou inutiles et d'utilisateurs piégés dans des boucles. Les mesures se concentrent sur la résolution, l'exactitude et la voie vers une personne.
- **Les agents qui agissent** changent des choses dans le monde : comptes, systèmes, tickets, argent. Leur risque est une action erronée aux conséquences réelles. Les mesures se concentrent sur l'exactitude des actions, la réversibilité, les limites de permissions et les pistes d'audit. Ces usages appellent une gouvernance plus solide et, souvent, l'approbation humaine des étapes lourdes de conséquences (voir le sujet 10.5, Métriques de gouvernance et de risque de l'IA).

Plusieurs questions de conception façonnent ce que vous mesurez.

- **L'honnêteté sur ce à quoi l'utilisateur parle.** De nombreuses juridictions ont ou élaborent des obligations d'informer les gens quand ils interagissent avec un système d'IA, et en octobre 2026 ces règles évoluent ; vérifiez donc ce qui s'applique à vous. La bonne pratique est de le dire clairement de toute façon.
- **Une sortie.** Les utilisateurs doivent pouvoir joindre une personne sans lutte. Un agent conversationnel qui cache la voie vers un humain est un [modèle trompeur](https://en.wikipedia.org/wiki/Dark_pattern), une conception qui piège les utilisateurs ou les trompe vers des issues qu'ils ne choisiraient pas.
- **L'accessibilité.** Les interfaces conversationnelles doivent fonctionner pour les personnes qui emploient des technologies d'assistance, celles dont la maîtrise de la langue est limitée et celles qui ont besoin d'une autre langue ou d'un autre canal.
- **Les décisions automatisées.** Quand la production d'un assistant touche les droits ou l'accès d'une personne, le sujet de la [prise de décision automatisée](https://en.wikipedia.org/wiki/Automated_decision-making) et les obligations qui l'entourent s'appliquent. Gardez ces décisions auprès de personnes, ou avec de solides garanties.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) est ici vivant : si le confinement ou le détournement est l'objectif, la façon la moins coûteuse de l'atteindre est de rendre l'humain plus difficile à joindre (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques). Les mesures ci-dessous placent d'abord la résolution et le résultat pour l'utilisateur.

## Principes clés

- **La résolution est la mesure, non le confinement.** Une conversation qui a pris fin n'est pas un problème qui a été résolu.
- **Vérifier, et surveiller le retour.** Ne comptez un contact comme résolu que lorsque l'utilisateur le confirme ou ne revient pas.
- **Toujours offrir une voie vers une personne.** Rendez-la facile, rapide et visible, et transportez le contexte.
- **Être honnête sur le système.** Dites que c'est une IA, ce qu'elle peut faire et ce qu'elle ne peut pas faire.
- **Limiter ce que les agents peuvent faire.** Accordez le moindre privilège, exigez l'approbation des actions lourdes de conséquences et gardez une piste d'audit.
- **Mesurer la qualité des réponses par échantillonnage.** Des réponses fluides peuvent être fausses.
- **Écouter les utilisateurs et le personnel qui ramasse les morceaux.** Ils voient ce que les métriques manquent.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de résolution vérifiée | Part des conversations avec l'agent conversationnel où l'utilisateur a confirmé que le problème était résolu, ou n'est pas revenu dans une période énoncée | conversations avec résolution confirmée ou sans contact de retour dans les 7 jours / conversations ayant commencé avec une intention résoluble | pourcentage | Journaux de conversations, confirmation de l'utilisateur, données de tickets et de contacts | Centre de services ; gestion des connaissances | Résultat fonctionnel pour l'utilisateur | Hebdomadaire |
| Taux de contacts de retour | Part des conversations terminées par l'agent conversationnel suivies d'un contact sur le même problème par n'importe quel canal | conversations suivies d'un contact lié dans les 7 jours / conversations terminées sans transmission | pourcentage | Journaux de conversations joints aux enregistrements de tickets et de contacts | Centre de services ; gestion des incidents | Défauts échappés | Hebdomadaire |
| Exhaustivité du contexte de transmission | Part des transmissions à une personne où celle-ci avait l'information nécessaire sans demander à l'utilisateur de se répéter | transmissions échantillonnées jugées complètes par l'agent récepteur / transmissions échantillonnées | pourcentage | Transmissions échantillonnées, retours des agents | Centre de services ; gestion des connaissances | Collaboration fluide à travers la frontière | Mensuelle |
| Délai avant une personne | Temps entre le moment où l'utilisateur demande une personne, ou l'agent conversationnel décide de transmettre, et la prise en charge par une personne | médiane et 85e percentile des minutes | minutes | Journaux de conversations, données de files | Centre de services ; gestion des incidents | Réactivité quand l'utilisateur a besoin d'aide | Hebdomadaire |
| Exactitude des réponses | Part des réponses de l'agent conversationnel échantillonnées jugées correctes, complètes et sûres par un examinateur qualifié | réponses jugées correctes / réponses échantillonnées | pourcentage | Revue par échantillon | Gestion des connaissances ; assurance qualité | Définition de terminé pour une réponse | Mensuelle |
| Satisfaction et effort envers l'agent conversationnel | Cote de satisfaction et de facilité donnée par l'utilisateur après une conversation, avec commentaires | cotes favorables / cotes ; cote moyenne d'effort | pourcentage ; points d'échelle | Court sondage après conversation | Centre de services ; expérience client | Retour sur un logiciel fonctionnel | Hebdomadaire |
| Taux d'annulation des actions de l'agent | Part des actions entreprises par un agent d'IA qui ont dû être corrigées, défaites ou escaladées | actions annulées ou corrigées / actions entreprises, par type d'action et classe de risque | pourcentage | Journal d'audit des actions, enregistrements de changements | Maîtrise des changements ; gestion des incidents | Reprise et retour arrière | Hebdomadaire |

Définissez les intentions que l'agent conversationnel traite, et excluez du confinement celles qu'il devrait toujours transmettre. La résolution vérifiée ne compte une conversation que si le problème était dans le périmètre et que l'utilisateur a confirmé ou n'a montré aucun contact de retour. Le délai avant une personne démarre à la demande de l'utilisateur, non à la fin d'un menu. L'exactitude des réponses est jugée par rapport à la base de connaissances et à la politique par une personne qui n'a pas construit l'agent conversationnel. Le taux d'annulation des actions de l'agent est ventilé par type d'action et classe de risque, et toute action préjudiciable est rapportée séparément comme un incident.

## Recommandations

### Définir le succès comme la résolution

**1. Définissez les intentions et le résultat que vous voulez.** Listez les problèmes que l'assistant devrait traiter, comme la réinitialisation de mot de passe, l'état d'un accès, les questions pratiques, et le résultat pour chacun : répondu, fait ou transmis. Décidez quelles intentions doivent toujours aller à une personne : plaintes, tout ce qui touche à la détresse, à la sécurité, aux droits légaux ou à l'argent. Un agent conversationnel qui essaie de tout traiter échoue mal aux marges.

**2. Mesurez la résolution vérifiée et les retours.** Demandez aux utilisateurs à la fin si leur problème est résolu, et cherchez aussi des contacts liés par la suite. Aucun des deux ne suffit seul : les utilisateurs qui abandonnent ne répondent pas, et certains qui ont été aidés appellent quand même. Ensemble, ils approchent la vraie résolution. Traitez le taux de contacts de retour comme le garde-fou clé de tout chiffre de confinement (voir le sujet 3.1, Métriques du centre de services).

**3. Évitez le confinement comme objectif.** Ne rapportez le confinement que comme un chiffre descriptif et toujours à côté de la résolution vérifiée, des retours et de la satisfaction. Un confinement qui monte avec des retours qui montent signifie que l'agent conversationnel renvoie les gens. Ne fixez pas d'objectif de confinement et ne liez la performance de personne à lui.

### Rendre la voie vers une personne facile et bonne

**4. Laissez les utilisateurs joindre une personne à tout moment.** Offrez une manière claire et simple de demander un humain, et honorez-la. Mesurez le délai avant une personne et la part des conversations où les utilisateurs ont demandé plus d'une fois. Testez vous-même le chemin régulièrement. Là où aucune personne n'est disponible, dites quand il y en aura une et offrez un rappel.

**5. Transmettez avec le contexte.** Quand l'agent conversationnel passe une conversation à une personne, incluez le résumé, ce qui a été essayé, les mots de l'utilisateur et les détails pertinents du compte pour que l'utilisateur ne se répète pas. Demandez aux agents récepteurs de coter si la transmission était complète, et échantillonnez les résultats. De mauvaises transmissions font que les utilisateurs font moins confiance à la fois à l'agent conversationnel et au service (voir le sujet 9.3, Métriques de collaboration et de transmission).

**6. Concevez pour tous les utilisateurs.** Testez l'assistant avec des utilisateurs qui emploient des technologies d'assistance, qui écrivent dans d'autres langues, qui sont pressés ou en détresse, et qui ne sont pas à l'aise avec la technologie. Offrez d'autres canaux. Mesurez la résolution vérifiée et la satisfaction par groupe d'utilisateurs là où c'est sûr et licite. Les moyennes cachent ceux que l'agent conversationnel déçoit le plus.

### Vérifier la qualité de ce qu'il dit et fait

**7. Échantillonnez les réponses pour l'exactitude et la sécurité.** Chaque mois, tirez un échantillon aléatoire de conversations et faites juger les réponses par une personne qualifiée : correctes, complètes, sûres et honnêtes sur l'incertitude. Consignez les erreurs par type : périmées, inventées, hors politique ou mal comprises. Renvoyez les erreurs à la base de connaissances et à la configuration. Ajoutez des tests ciblés pour les sujets sensibles et pour les tentatives de pousser l'assistant hors de son périmètre.

**8. Gardez la connaissance à jour.** Un assistant ne vaut que ce que valent le contenu et les outils auxquels il puise. Reliez les erreurs de réponse aux articles de connaissances, et mesurez la fraîcheur de la connaissance qu'il emploie (voir le sujet 3.6, Métriques de gestion des connaissances). Là où le système emploie la recherche dans une base de connaissances, incluez une vérification qu'il cite ses sources et que les sources sont les bonnes.

**9. Soyez honnête avec les utilisateurs.** Énoncez dès le début qu'ils parlent à une IA, et ce qu'elle peut et ne peut pas faire. Ne lui donnez pas un nom ou une manière humains qui suggèrent le contraire. Là où elle est incertaine, elle devrait le dire et offrir une personne. Vérifiez la loi applicable sur la divulgation.

### Gouverner les agents qui agissent

**10. Classez les actions par risque et fixez les permissions en conséquence.** Pour chaque action qu'un agent peut entreprendre, définissez sa classe de risque : informative, réversible et à faible impact, ou lourde de conséquences. Accordez le moindre privilège nécessaire. Exigez l'approbation humaine des actions lourdes de conséquences. Gardez une piste d'audit de chaque action avec la raison, l'utilisateur et le résultat. Ces contrôles se relient aux mesures de changement et de sécurité des parties précédentes (voir le sujet 8.1, Métriques des incidents de sécurité et des vulnérabilités, et le sujet 8.2, Métriques des risques et des contrôles).

**11. Mesurez l'exactitude et la réversibilité des actions.** Suivez le taux d'annulation par type d'action, et passez en revue chaque action préjudiciable comme un incident, sans reproche. Testez les agents dans un environnement sûr avant d'accorder l'accès, et retestez quand le modèle ou les outils changent. Une nouvelle version de modèle peut changer le comportement ; traitez-la donc comme un changement qui demande un contrôle (voir le sujet 4.3, Métriques de maîtrise des changements).

**12. Écoutez les personnes qui ramassent les morceaux.** Le personnel du centre de services voit les conséquences des échecs de l'agent conversationnel : utilisateurs furieux, contacts répétés et dégâts à nettoyer. Demandez-leur régulièrement ce que l'agent conversationnel fait de travers et ce qui complique les choses. Leurs retours et les commentaires des utilisateurs sont des preuves qu'aucune métrique ne saisit pleinement, et ils devraient façonner la prochaine série de changements.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Taux de résolution vérifiée | Compter toute fin de conversation comme résolue ; poser des questions de confirmation tendancieuses | Définir la confirmation de façon neutre ; taux de contacts de retour ; échantillonner les conversations |
| Taux de contacts de retour | Ne mesurer que par un canal ; fenêtres courtes | Joindre tous les canaux ; employer une fenêtre plus longue comme vérification ; échantillonner les retours |
| Exhaustivité du contexte de transmission | Passer une longue transcription au lieu d'un résumé ; échantillonner des transmissions faciles | Cote de l'agent récepteur ; échantillon aléatoire ; temps de résolution après la transmission |
| Délai avant une personne | Démarrer l'horloge après les menus ; compter un accusé de réception de file comme prise en charge | L'horloge démarre à la demande ; la prise en charge signifie qu'une personne est active dans la conversation |
| Exactitude des réponses | Échantillonner des conversations faciles ; examinateurs indulgents | Échantillon aléatoire par des examinateurs indépendants ; cas d'essai contradictoires |
| Satisfaction et effort envers l'agent conversationnel | Ne sonder que les conversations terminées ; placer le sondage là où seuls les utilisateurs contents arrivent | Sonder aussi les conversations abandonnées ; taux et composition des réponses ; lire les commentaires |
| Taux d'annulation des actions de l'agent | Ne pas consigner les annulations ; reclasser les corrections comme du nouveau travail | Journal d'audit résistant à l'altération ; relier les annulations aux actions ; revue d'incident |

Une lecture saine est une forte résolution vérifiée avec peu de retours, des voies faciles et rapides vers une personne avec des transmissions complètes, des réponses exactes à la revue par échantillon, des utilisateurs satisfaits dans tous les groupes et des agents dont les actions nécessitent rarement d'être annulées et ne causent jamais de préjudice inaperçu.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Agent conversationnel à base de règles | Prévisible, facile à tester | Étroit ; fragile ; frustrant hors des scripts |
| Assistant à modèle de langage | Souple, fluide | Peut se tromper avec aplomb ; plus difficile à tester |
| Recherche dans une connaissance approuvée | Réponses ancrées, plus faciles à corriger | Dépend de la qualité du contenu |
| Génération ouverte | Large couverture | Risque plus élevé d'invention |
| Approbation humaine des actions | Sécurité | Plus lente ; fatigue des relecteurs |
| Actions autonomes | Vitesse | Plus grand rayon d'impact en cas d'erreur |
| Périmètre strict avec transmission précoce | Sûr | Confinement plus bas |
| Large périmètre | Confinement plus élevé | Plus d'erreurs aux marges |

La réponse en prose est de commencer avec des intentions étroites et bien comprises, d'ancrer les réponses dans une connaissance approuvée, de rendre l'aide humaine facile et d'étendre le périmètre et l'autonomie seulement à mesure que les mesures le justifient.

## Questions à discuter avec votre équipe

**1. Si un utilisateur voulait une personne tout de suite, combien d'étapes faudrait-il, et l'avons-nous essayé nous-mêmes ?**
Testez le chemin ensemble. Comptez les étapes et l'attente. L'animateur doit noter chaque obstacle. Convenez de changements pour que le chemin soit court, et mesurez le délai avant une personne.

**2. Quelle part des conversations que notre agent conversationnel a terminées a réellement résolu le problème ?**
Vérifiez les retours et les confirmations pour un échantillon. Comparez avec le chiffre de confinement. Discutez de l'écart. Décidez quel chiffre les dirigeants devraient voir.

**3. Qu'est-ce que notre agent conversationnel fait de travers, et qui le découvre ?**
Interrogez le centre de services. Passez en revue des conversations échantillonnées. Cherchez des schémas : articles périmés, questions ambiguës, sujets sensibles. Convenez d'une voie des erreurs vers les corrections, avec un responsable.

**4. Quelles actions l'agent peut-il entreprendre seul, et lesquelles exigent une personne ?**
Listez les actions avec leurs classes de risque et leurs permissions. Demandez quel serait le pire échec réaliste de chacune. Convenez des règles d'approbation et de la piste d'audit, et de qui examine les cas préjudiciables.

**5. Qui l'agent conversationnel déçoit-il silencieusement ?**
Pensez aux utilisateurs pressés, en détresse, avec des besoins d'accessibilité ou une maîtrise limitée de la langue. Regardez la résolution et la satisfaction par groupe, là où c'est sûr. Convenez d'un test avec de tels utilisateurs.

**6. Qu'est-ce qui nous ferait éteindre l'agent conversationnel ou réduire son périmètre ?**
Définissez les preuves : retours au-dessus d'un niveau, actions préjudiciables, exactitude sous une norme. Décidez de qui peut décider. Avoir une règle d'arrêt d'avance facilite l'action.

## Quatre perspectives

### Équipes produit et livraison

Les équipes qui construisent l'assistant détiennent sa qualité. Elles devraient définir les intentions, ancrer les réponses dans une connaissance approuvée, tester avec des cas contradictoires, publier les changements sous contrôle et lire les échecs. Elles devraient repousser les objectifs de confinement qui récompensent le fait de piéger les utilisateurs.

### Équipes de service et d'exploitation

Le personnel du centre de services travaille avec l'assistant et hérite de ses échecs. Il devrait coter les transmissions, signaler les réponses fausses, tenir la connaissance à jour et prendre vite le relais quand on le lui demande. Il est le meilleur juge pour dire si l'assistant aide les utilisateurs, et sa charge de travail et son stress font partie du tableau.

### Direction et gouvernance

Les dirigeants parrainent l'assistant et veulent des économies. Ils devraient demander la résolution vérifiée, les retours et la satisfaction à côté du confinement, exiger une règle d'arrêt, financer la voie humaine et revoir les classes de risque des agents. La gouvernance devrait vérifier la divulgation, l'accessibilité et les obligations légales.

### Clients et utilisateurs

Les utilisateurs veulent de l'aide avec peu d'effort et sans tromperie. Ils devraient savoir qu'ils parlent à une IA, pouvoir joindre facilement une personne et avoir confiance que le système n'agira pas sans bonne raison. Leur expérience, surtout de l'échec, est la preuve première de la valeur de l'assistant.

## En pratique : un exemple d'ITIL agile

Une université nationale exploite un centre de services pour étudiants et personnel qui traite environ 30 000 contacts par mois. Elle lance un agent conversationnel pour les demandes courantes, et le tableau de bord du vendeur rapporte un taux de confinement de 74 pour cent. Les chiffres ci-dessous sont illustratifs.

Le responsable des services aux étudiants vérifie. Parmi les conversations terminées par l'agent conversationnel le mois dernier, 29 pour cent ont été suivies d'un contact lié par courriel ou téléphone dans les sept jours. La résolution vérifiée, à partir de la confirmation de l'utilisateur et de l'absence de retour, est de 49 pour cent pour les intentions dans le périmètre. Le délai médian pour joindre une personne après l'avoir demandée est de 6 minutes, avec un 85e percentile de 22, en partie parce que la voie exige trois étapes de menu. Un échantillon de 100 conversations revues par deux conseillers expérimentés trouve 88 réponses correctes et 12 défectueuses : 7 périmées, 3 qui inventaient des détails sur une échéance et 2 qui traitaient mal des cas sensibles impliquant un étudiant en difficulté. Les agents récepteurs jugent complètes 54 pour cent des transmissions. La satisfaction envers l'agent conversationnel est plus basse pour les étudiants qui emploient des lecteurs d'écran et pour ceux qui écrivent dans des langues autres que l'anglais. L'équipe du centre de services rapporte de nombreux contacts qui commencent par « l'agent conversationnel n'a pas pu m'aider ».

Le responsable des services aux étudiants apporte des changements avec l'équipe. Les intentions sensibles, comme le bien-être, les plaintes et les différends sur les frais, sont acheminées directement vers une personne, et l'agent conversationnel le dit. Une option « parler à une personne » apparaît sur chaque écran, et le délai avant une personne est suivi, avec l'objectif de répondre en quelques minutes pendant les heures où le personnel est présent. Les transmissions incluent un résumé automatique et les propres mots de l'utilisateur. Les responsables de la base de connaissances corrigent les articles périmés, et une revue mensuelle par échantillon les alimente. L'assistant est limité à répondre à partir d'un contenu approuvé et doit dire quand il ne sait pas. Un deuxième projet pilote permet à un agent de réinitialiser des mots de passe après vérification d'identité, chaque action étant consignée et réversible dans un délai limité, et un taux d'annulation suivi. Le tableau de bord remplace le confinement par la résolution vérifiée, le taux de contacts de retour, l'exactitude, le délai avant une personne et la satisfaction par groupe.

Trois mois plus tard, la résolution vérifiée atteint 66 pour cent pour les intentions dans le périmètre, le taux de contacts de retour tombe à 14 pour cent, le délai médian avant une personne tombe à 2 minutes, la part des transmissions complètes monte à 86 pour cent et l'exactitude des réponses échantillonnées monte à 95 pour cent, sans cas sensible mal traité dans l'échantillon. Le taux d'annulation des actions de l'agent dans le projet pilote des mots de passe est de 1,2 pour cent. Le cabinet du recteur demande un objectif de confinement de 85 pour cent. Le responsable des services aux étudiants explique qu'un objectif de confinement plus élevé récompenserait le fait de cacher la voie vers une personne, et propose la résolution vérifiée et les retours comme mesures, avec une revue de ce qu'il faut étendre ensuite. La décision est consignée.

## Perspective sectorielle

**Startup.** Un assistant peut couvrir le soutien à bas coût, et une seule mauvaise réponse peut coûter un client. Gardez un périmètre étroit, ancrez les réponses dans votre documentation, rendez l'option humaine évidente et lisez chaque escalade. Soyez prudent à l'idée de laisser un agent agir sur des comptes ou des paiements.

**Petite entreprise.** Un assistant prêt à l'emploi sur un site web peut traiter les questions courantes. Testez-le comme le ferait un client, assurez-vous qu'un numéro de téléphone ou une adresse de courriel est facile à trouver et passez les conversations en revue chaque semaine. Vérifiez ce que le vendeur fait des données.

**Grande entreprise.** L'échelle offre des économies et du risque. Menez un processus de gouvernance pour les classes de risque, les approbations et l'audit, mesurez par intention et par groupe d'utilisateurs, et assurez-vous qu'une personne est joignable sur chaque canal. Coordonnez le soutien, la sécurité, le juridique et l'accessibilité.

**Gouvernement et secteur public.** Les citoyens peuvent n'avoir aucun autre fournisseur, et les obligations d'accessibilité, d'accès linguistique et de traitement équitable s'appliquent fortement. Gardez une personne joignable, évitez les décisions automatisées sur les droits sans garanties, publiez la manière dont l'assistant est employé et vérifiez les obligations de divulgation et de droit administratif (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont les licences ou les charges selon l'usage, l'intégration, la préparation du contenu, l'échantillonnage et la revue continus, l'entretien de la base de connaissances, les tests et la gouvernance. Une bonne voie humaine coûte aussi de l'argent, car elle doit être dotée en personnel.

Les retours potentiels sont des attentes plus courtes pour les problèmes simples, un soulagement des contacts répétitifs et une couverture hors des heures de travail. Le côté du risque inclut les retours, la confiance perdue, les préjudices dus à des réponses ou actions erronées et l'exposition juridique. Bâtissez le dossier à partir de vos propres chiffres : la résolution vérifiée et les retours, le coût par contact résolu y compris les transmissions, le temps du personnel passé à corriger les échecs de l'agent conversationnel et la satisfaction par groupe. Évitez d'employer comme estimation les affirmations de confinement ou de détournement d'un vendeur. Comptez le coût de la voie humaine et de la gouvernance (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Le confinement comme objectif.** Il récompense le fait de tenir les gens à l'écart de l'aide. Rapportez la résolution vérifiée et les retours.
- **Voie vers une personne cachée ou lente.** C'est un modèle trompeur, et les utilisateurs le remarquent. Rendez-la courte et testez-la.
- **Transmettre sans contexte.** Les utilisateurs se répètent et la confiance baisse. Passez un résumé.
- **Laisser l'agent conversationnel traiter les cas sensibles.** Le bien-être, les plaintes et les droits demandent des personnes. Acheminez-les directement.
- **Actions autonomes sans audit ni approbation.** Une seule erreur peut se multiplier. Classez, limitez et consignez.
- **Ne mesurer que ce que montre le tableau de bord du vendeur.** Il flatte. Joignez vos propres données.
- **Ignorer les groupes que l'agent conversationnel déçoit.** Les moyennes les cachent. Testez et segmentez là où c'est sûr.
- **Aucune règle d'arrêt.** Un agent conversationnel défaillant reste en ligne. Définissez les preuves qui le restreindraient ou l'éteindraient.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Résultats | Confinement rapporté | Satisfaction sondée | Résolution vérifiée et retours suivis par intention | Segmentation par groupe d'utilisateurs ; règles d'arrêt définies ; exactitude échantillonnée chaque mois | Assistant, personnel et connaissances améliorés ensemble à partir de preuves partagées |
| Voie vers les personnes | Difficile à trouver | Option disponible | Voie courte ; délai avant une personne suivi ; transmissions porteuses de contexte | Qualité des transmissions cotée et améliorée ; dotation en personnel alignée sur la demande | Agent conversationnel et personnel collaborent en douceur entre canaux, le choix de l'utilisateur étant respecté |
| Agents qui agissent | Automatisation improvisée | Actions scriptées | Actions classées par risque, moindre privilège, approbation et audit | Taux d'annulation et préjudices revus ; changements contrôlés | Comportement des agents gouverné dans toute l'organisation et chez les fournisseurs, avec assurance indépendante |

## Liste de vérification

- [ ] Les intentions de l'assistant sont listées, avec celles qui doivent toujours aller à une personne.
- [ ] La résolution vérifiée et le taux de contacts de retour sont rapportés à côté du confinement.
- [ ] Une voie visible et courte vers une personne existe sur chaque écran, et le délai avant une personne est mesuré.
- [ ] Les transmissions incluent un résumé et les mots de l'utilisateur, et sont cotées par les agents récepteurs.
- [ ] Les réponses sont échantillonnées chaque mois par des examinateurs qualifiés et indépendants.
- [ ] Les utilisateurs sont informés qu'ils parlent à une IA, et de ce qu'elle peut faire.
- [ ] Des tests d'accessibilité et d'autres langues sont faits avec de vrais utilisateurs.
- [ ] Les actions des agents sont classées par risque, autorisées selon le moindre privilège et consignées pour l'audit.
- [ ] Les taux d'annulation et les actions préjudiciables sont revus sans reproche.
- [ ] Une règle d'arrêt définit quand restreindre ou éteindre l'assistant.

## Prompts d'IA

**Définissez les intentions et les règles de transmission.**

```text
Nous exploitons un centre de services pour [type of organization]. Les motifs de
contact les plus courants sont : [list with volumes]. Proposez quelles intentions
un agent conversationnel devrait traiter entièrement, lesquelles il devrait
seulement aider avant de les transmettre, et lesquelles doivent toujours aller à
une personne, avec des raisons. Incluez l'information de transmission à passer.
N'inventez pas de statistiques. Énumérez vos hypothèses et les risques des cas
sensibles.
```

**Vérifiez une affirmation de confinement.**

```text
Le tableau de bord de notre agent conversationnel montre un confinement de
[value]. Nous avons aussi : des contacts de retour dans les sept jours [value],
des résultats de sondage [values] et un échantillon de conversations [describe].
Expliquez ce que pourrait être la résolution vérifiée, comment la calculer à
partir de nos données, ce que l'écart entre confinement et résolution suggère et
ce qu'il faut vérifier ensuite. Ne revendiquez pas de causes que les données ne
peuvent pas soutenir. Énumérez vos hypothèses.
```

**Concevez une classification des risques pour les actions des agents.**

```text
Un agent d'IA pourrait entreprendre ces actions : [list]. Pour chacune, proposez
une classe de risque (informative, réversible à faible impact, lourde de
conséquences), la permission qu'elle devrait exiger, si une personne doit
l'approuver, ce qu'il faut consigner, comment l'annuler et un test à mener avant
de l'activer. Ne supposez pas d'outils précis. Énumérez vos hypothèses et les
décisions qui demandent l'apport de la sécurité et du juridique.
```

**Planifiez une revue des conversations de l'agent conversationnel.**

```text
Concevez une revue mensuelle des conversations de l'agent conversationnel :
taille d'échantillon et sélection (y compris certaines conversations abandonnées
et certaines de groupes d'utilisateurs risquant un mauvais service),
qualifications des examinateurs, une courte grille pour l'exactitude, la sécurité
et l'honnêteté sur l'incertitude, comment consigner les erreurs et corriger leurs
sources, et comment rapporter sans identifier les utilisateurs. Énumérez vos
hypothèses et vos mises en garde sur la vie privée.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique d'agent conversationnel ou d'agent d'IA.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique d'agent conversationnel mesure la résolution et porte son vecteur de détournement et son garde-fou.

## Points clés à retenir

- Mesurez la résolution vérifiée et les contacts de retour, et traitez le confinement comme un chiffre descriptif seulement.
- Rendez la voie vers une personne courte et visible, et transmettez avec le contexte.
- Échantillonnez les réponses pour l'exactitude et la sécurité, et gardez à jour la connaissance qu'emploie l'assistant.
- Soyez honnête sur le fait que les utilisateurs parlent à une IA, et testez avec les utilisateurs les plus susceptibles d'être déçus.
- Pour les agents qui agissent, classez le risque, limitez les permissions, exigez l'approbation des actions lourdes de conséquences et gardez une piste d'audit.
- Définissez d'avance une règle d'arrêt.

## Références et lectures complémentaires

1. Weizenbaum, J., "ELIZA: A computer program for the study of natural language communication between man and machine," *Communications of the ACM*, 9(1), 1966.
2. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
3. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
4. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Virtual assistant](https://en.wikipedia.org/wiki/Virtual_assistant).
9. Wikipedia, [Intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent).
10. Wikipedia, [Self-service](https://en.wikipedia.org/wiki/Self-service).
11. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
12. Wikipedia, [Automated decision-making](https://en.wikipedia.org/wiki/Automated_decision-making).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
