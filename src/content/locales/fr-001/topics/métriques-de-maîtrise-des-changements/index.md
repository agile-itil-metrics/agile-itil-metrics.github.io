# Métriques de maîtrise des changements

**Les métriques de maîtrise des changements montrent si votre organisation laisse les changements bénéfiques circuler en sécurité et rapidement ; mesurez donc comment les changements sont classés, combien de temps ils attendent une décision et quelle part de cette décision la chaîne de livraison prend automatiquement, et associez chaque mesure de vitesse à une vue du risque.**

## Résumé et motivation

Chaque service change. Les équipes ajoutent des fonctions, corrigent des bibliothèques, renouvellent des certificats, redimensionnent des bases de données et retirent de vieux composants. Dans le cadre [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, la pratique qui gouverne cela s'appelle la maîtrise des changements (change enablement), et son but déclaré est de maximiser le nombre de changements de service et de produit réussis en s'assurant que les risques sont correctement évalués, que les changements sont autorisés et que le calendrier des changements est géré. Les éditions antérieures d'ITIL appelaient la pratique [gestion des changements](https://en.wikipedia.org/wiki/Change_management_(ITSM)), et beaucoup d'organisations emploient encore ce nom. Le nouveau nom signale un déplacement d'accent : la pratique existe pour permettre le bon changement, non pour le retenir.

Un **changement**, dans ITIL 4, est l'ajout, la modification ou le retrait de tout ce qui pourrait avoir un effet direct ou indirect sur les services. C'est un périmètre plus large qu'un déploiement de code. Il couvre les modifications de configuration, les mises à jour d'infrastructure, les changements d'accès, les actions de fournisseurs et la documentation sur laquelle les exploitants s'appuient. Une équipe agile voit généralement un changement comme une demande de fusion qui part en production. Une équipe d'exploitation de service le voit comme une entrée dans un calendrier. Les deux visions sont valables, et les métriques de ce sujet fonctionnent le mieux quand elles décrivent le même événement des deux côtés.

ITIL 4 décrit trois types de changement, et les métriques de ce sujet en dépendent. Vérifiez la formulation exacte dans les publications actuelles du propriétaire du cadre ; ce sujet résume le schéma largement documenté à la date d'octobre 2026.

- Un **changement standard** est à faible risque et bien compris. Il suit une procédure documentée et est préautorisé ; il n'exige donc aucune approbation au cas par cas.
- Un **changement normal** exige une évaluation et une autorisation avant de se poursuivre. La profondeur de l'évaluation varie avec le risque et l'impact.
- Un **changement d'urgence** doit avoir lieu d'urgence, souvent pour rétablir le service ou combler une vulnérabilité grave. Il suit une voie accélérée avec une revue plus complète ensuite.

D'autres termes reviennent ci-dessous. Une **autorité de changement** est la personne ou le groupe qui détient le droit d'approuver un changement d'un type donné. Un **comité consultatif des changements (CAB)** est un groupe qui examine les changements proposés et conseille ou décide. Le **délai d'approbation** est le temps qu'un changement attend une décision d'autorisation. Un **percentile** est une valeur en dessous de laquelle tombe une part donnée des observations ; le 85e percentile est donc le nombre que 85 pour cent des changements battent.

Pourquoi mesurer tout cela ? Les preuves publiées les plus solides sur le contrôle des changements viennent du programme de recherche de DevOps Research and Assessment (DORA). Ses recommandations rapportent qu'une approbation externe lourde, comme un CAB ou la signature d'un cadre supérieur, est associée à une moins bonne performance de livraison de logiciels, et qu'aucune preuve n'a été trouvée qu'une revue externe plus formelle abaisse la part de changements qui échouent. Elles recommandent plutôt la revue par les pairs, les tests automatisés et les petits changements, avec un rôle stratégique pour tout comité central. Ce sont des énoncés d'association dans des données d'enquête, non des lois, et les pages de DORA ne donnent aucune taille d'effet pour cette affirmation ; traitez-les donc comme une bonne raison de regarder vos propres données et non comme un verdict sur tel ou tel contrôle. Le contenu sur la maîtrise des changements du *Agile ITIL Guide* résume la même recherche.

Les visions agile et ITIL se rencontrent sur la question de savoir où vit le contrôle. Dans une chaîne de livraison, une grande part de l'évaluation peut se faire en continu : un relecteur approuve le code, des tests automatisés vérifient le comportement et l'outil de déploiement écrit l'enregistrement. Cela satisfait l'intention de la [séparation des tâches](https://en.wikipedia.org/wiki/Separation_of_duties) quand la revue est consignée et que l'auteur ne peut pas approuver son propre travail. Les métriques disent si cela se produit réellement, ou si la chaîne de livraison est une route rapide que la plupart des changements quittent encore pour attendre dans une file.

Ce sujet couvre le côté flux et contrôle du changement : volume, mélange de types, temps d'attente et automatisation. Il ne couvre pas la question de savoir si les changements réussissent. Le taux d'échec des changements, la part d'urgence, le retour en arrière et les correctifs urgents relèvent du sujet 4.4, Échecs de changement et reprises, et les mesures DORA de débit et d'instabilité sont au sujet 2.8, Métriques DORA. La fréquence de déploiement et de mise en production est au sujet 4.5, Métriques des versions et des déploiements. Le côté incident d'un mauvais changement est au sujet 3.3, Temps de réponse et de résolution des incidents, et au sujet 3.4, Métriques des incidents majeurs.

Les métriques de changement attirent vite la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) : un objectif sur le délai d'approbation invite à des approbations rapides et vides, et un objectif sur la part de changements standard invite à requalifier un travail risqué en travail courant (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Proportionner le contrôle au risque.** Le but est un contrôle proportionné : les changements à faible risque prennent une voie rapide et préautorisée, et les changements à haut risque reçoivent un vrai examen. Un processus unique pour tout est lent pour la plupart des changements et superficiel pour les dangereux.
- **Mesurer l'attente, pas seulement le travail.** Le délai d'approbation domine souvent le temps qu'un changement terminé passe avant d'atteindre la production. Il est invisible tant que personne ne consigne quand l'approbation a été demandée et quand elle a été accordée.
- **Compter les types avant de compter quoi que ce soit d'autre.** Le volume, la vitesse et le risque diffèrent fortement entre changements standard, normaux et d'urgence. Une seule moyenne sur les trois cache tout signal utile.
- **Préférer les preuves automatisées et consignées aux réunions.** La revue par les pairs, les tests réussis et les contrôles de la chaîne de livraison produisent un enregistrement sans créneau d'agenda. Mesurez quelle part de la décision d'approbation la chaîne de livraison capture.
- **Décrire un service ou une équipe, jamais une personne.** Les approbateurs et les demandeurs travaillent à l'intérieur d'un système. Classer les individus selon les approbations accordées ou refusées apprend aux gens à tout approuver ou à ne rien approuver.
- **Associer la vitesse à la sécurité.** Une approbation plus rapide n'est une bonne nouvelle que si le tableau des échecs est stable. Lisez ces métriques à côté du sujet 4.4, Échecs de changement et reprises.
- **Écrire les règles de classification.** Qu'un changement soit standard, normal ou d'urgence est un jugement qui doit être reproductible. Consignez les critères et passez en revue un échantillon chaque trimestre.

## Définitions des métriques

Le tableau énonce les horloges et les exclusions que votre équipe devrait écrire. Les données viennent de l'outil de changements ou de tickets, des événements du contrôle de versions et de la chaîne de livraison, et des enregistrements d'approbation (voir le sujet 1.5, Sources de données et instrumentation).

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume de changements par type | Nombre de changements accomplis, réparti en standard, normal et d'urgence | Nombre d'enregistrements de changements qui ont atteint l'état mis en œuvre dans la période, groupés par type au moment de l'approbation ; les changements annulés et retirés sont exclus et rapportés séparément ; rapportez par service, non par personne | Changements par semaine ou par mois, par type | Enregistrements de changements de l'outil ITSM, joints aux événements de déploiement de la chaîne de livraison | Maîtrise des changements | Débit des éléments de travail terminés ; contenu de version par incrément | Hebdomadaire, revue mensuelle |
| Part de changements standard | Part des changements accomplis qui ont pris la voie préautorisée | Changements standard accomplis dans la période / tous les changements accomplis dans la période ; un changement requalifié après coup compte sous son type final et la requalification est consignée | Pourcentage | Enregistrements de changements avec type et historique de requalification | Maîtrise des changements | Travail courant couvert par l'accord de travail de l'équipe et la définition de terminé | Mensuelle |
| Délai d'approbation | Temps qu'un changement attend une décision d'autorisation | L'horloge démarre quand la demande est soumise comme prête à l'évaluation et s'arrête quand la décision d'autorisation est consignée ; le temps passé à attendre que le demandeur fournisse des informations est exclu et montré séparément ; rapportez la médiane et le 85e percentile pour les changements normaux de la période ; les changements standard sans étape d'approbation sont exclus | Heures ou jours ouvrés | Horodatages des enregistrements de changements ou événements d'approbation dans la chaîne de livraison | Maîtrise des changements | Temps d'attente dans un flux de travail ; temps dans une colonne de revue | Hebdomadaire, revue mensuelle |
| Part d'approbation automatisée | Part des décisions d'autorisation prises et consignées par des contrôles de la chaîne de livraison ou une politique préautorisée | Changements dont l'approbation a été accordée par un contrôle automatisé consigné ou une revue par les pairs consignée selon une politique écrite / tous les changements accomplis dans la période ; une signature manuelle d'un comité ou d'un chef compte comme non automatisée | Pourcentage | Journaux de la chaîne de livraison, enregistrements de revue de code et enregistrements de changements | Maîtrise des changements ; gestion des déploiements | Portes de qualité automatisées ; revue par les pairs dans la définition de terminé | Mensuelle |
| Âge de la file d'approbation | Depuis combien de temps les demandes en attente attendent en ce moment | Âge de chaque changement attendant actuellement une décision, mesuré de la soumission au moment de l'instantané ; rapportez l'élément le plus ancien et le 85e percentile de la file ouverte ; les approbations terminées sont exclues | Heures ou jours ouvrés | Enregistrements de changements avec statut d'approbation ouvert | Maîtrise des changements | Ancienneté de l'élément de travail ; travail en cours vieillissant | Instantané quotidien, revue hebdomadaire |
| Complétude de l'enregistrement de changement | Part des changements accomplis dont l'enregistrement peut répondre à qui, quoi, pourquoi, quand et quel service | Changements avec tous les champs requis renseignés et liés au service ou à l'élément de configuration touché / tous les changements accomplis dans la période ; les champs requis sont listés dans la définition ; les enregistrements créés après la mise en œuvre du changement sont signalés | Pourcentage | Enregistrements de changements, liens du contrôle de versions, données de configuration | Maîtrise des changements ; gestion de la configuration des services | Traçabilité du commit au ticket puis au déploiement | Mensuelle |

Le délai d'approbation regarde en arrière des changements qui ont fini d'attendre et peut cacher un tas de demandes bloquées. L'âge de la file regarde ce qui attend aujourd'hui, ce qui est l'alerte la plus précoce. La part de changements standard n'est pas un score à maximiser : une équipe qui modifie la configuration par une chaîne de livraison mûre aura une part élevée, et une équipe sur un système central ancien peut raisonnablement en avoir une faible.

## Recommandations

### Établir les bases

**1. Comptez les changements par type avant de mesurer quoi que ce soit d'autre.** Construisez une vue des changements accomplis, répartis en standard, normaux et d'urgence, par service et par mois. Beaucoup d'organisations découvrent à ce stade que personne ne peut s'accorder sur le total, parce que les tickets, les déploiements de la chaîne de livraison et les corrections informelles sont comptés séparément. Réconcilier ces sources est le premier résultat du programme (voir le sujet 1.5, Sources de données et instrumentation).

**2. Écrivez les règles de classification et échantillonnez-les.** Énoncez ce qui rend un changement standard : une procédure documentée, un risque connu et un historique. Énoncez ce qui pousse un changement vers le normal ou l'urgence. Passez en revue chaque trimestre un échantillon aléatoire d'une vingtaine de changements et demandez si chacun a été classé comme le disent les règles. La mauvaise classification est la principale menace pour tous les autres chiffres de ce sujet.

**3. Définissez par écrit l'horloge d'approbation.** Dites que l'horloge démarre quand la demande est soumise comme prête, et s'arrête quand la décision est consignée, et nommez les exclusions, comme l'attente d'une réponse du demandeur à une question. Sans cela, une équipe mesure à partir de la création du ticket et une autre à partir de la réunion du comité, et les chiffres ne peuvent pas être comparés, même dans le temps.

### Raccourcir l'attente

**4. Rapportez le délai d'approbation comme une distribution.** Une moyenne cache le schéma qui compte, à savoir quelques changements qui attendent très longtemps. Montrez la médiane et le 85e percentile, et les quelques cas les plus lents par nom de changement, non par nom de personne (voir le sujet 1.6, Culture statistique pour les métriques de service). Si le 85e percentile est plusieurs fois la médiane, la cause est généralement un cycle de réunions ou un seul approbateur surchargé, et le remède est structurel.

**5. Surveillez la file, pas seulement l'historique.** Passez en revue l'âge de la file d'approbation chaque semaine dans le même forum que celui qui revoit les mesures de flux. L'élément en attente le plus ancien est la meilleure alerte précoce qu'un comité est surchargé, qu'un congé a bloqué une signature ou qu'un demandeur a discrètement cessé de relancer. Une vue de file s'accorde aussi avec l'habitude de regarder le travail vieillissant (voir le sujet 2.1, Mesures de flux).

**6. Séparez l'attente d'information de l'attente de décision.** Quand une demande retourne au demandeur pour plus de détails, arrêtez l'horloge d'approbation et démarrez-en une autre. On reproche aux approbateurs des retards que le demandeur a causés, et on reproche aux demandeurs des retards dans la file. Deux horloges donnent à chaque côté une image exacte et une amélioration concrète, comme un meilleur gabarit de demande.

### Déplacer le contrôle dans la chaîne de livraison

**7. Convertissez les types de changements répétables et à faible risque en changements standard.** Choisissez le changement normal le plus courant dans votre vue des volumes, comme une mise à jour de bibliothèque courante ou une action de mise à l'échelle. Écrivez sa procédure et ses contrôles, convenez du risque avec l'autorité de changement et préautorisez-le. Puis surveillez ensemble la part de changements standard et le délai d'approbation des changements normaux : la part devrait monter et la file raccourcir, sans hausse correspondante des échecs (voir le sujet 4.4, Échecs de changement et reprises).

**8. Consignez l'approbation là où le travail se fait.** Capturez la revue par les pairs dans l'outil de [revue de code](https://en.wikipedia.org/wiki/Code_review) et laissez la chaîne de livraison lier automatiquement la revue, le résultat des tests et le déploiement à l'enregistrement de changement. L'enregistrement devient alors un sous-produit du travail au lieu d'une tâche séparée. Mesurez la part d'approbation automatisée, et inspectez un échantillon pour confirmer que la revue consignée est substantielle et non un tampon (voir le sujet 2.7, Métriques des demandes de fusion et de la revue de code).

**9. Traitez la chaîne de livraison comme l'endroit où encoder la politique.** Des règles comme « pas d'accès direct à la production sans ticket », « les tests doivent réussir » et « l'auteur ne peut pas approuver son propre changement » peuvent être appliquées par l'outillage, la configuration étant gardée sous forme de code selon les pratiques d'[infrastructure en tant que code](https://en.wikipedia.org/wiki/Infrastructure_as_code). Quand la politique est du code, vous pouvez montrer à un auditeur la règle et son historique plutôt qu'un procès-verbal de réunion. Mesurez combien de changements contournent la chaîne de livraison, car chaque contournement est un trou dans le contrôle.

### Garder le contrôle honnête

**10. Gardez une voie rapide pour les changements d'urgence, et passez en revue la façon dont elle est employée.** Les changements d'urgence ont besoin de vitesse ; ne les ralentissez donc pas avec la file normale. Passez en revue chacun d'eux ensuite et surveillez une dérive à la hausse du volume, car une voie d'urgence plus facile que la voie normale devient la voie par défaut (les mesures pour cela sont au sujet 4.4, Échecs de changement et reprises). Rapportez le volume d'urgence à côté du volume normal dans la même vue.

**11. Auditez la complétude des enregistrements selon un calendrier.** Un enregistrement complet aide pendant un incident, quand les intervenants demandent ce qui a changé récemment (voir le sujet 3.3, Temps de réponse et de résolution des incidents). Mesurez la complétude, passez en revue un échantillon et traitez les lacunes comme un défaut du formulaire ou de l'intégration, non comme un manquement du demandeur. Une [piste d'audit](https://en.wikipedia.org/wiki/Audit_trail) assemblée après coup de mémoire est une preuve faible.

**12. Revoyez le modèle d'autorité de changement au moins chaque année.** Décidez qui détient les droits d'approbation pour chaque type et chaque niveau de risque, et retirez les comités qui approuvent tout ce qu'ils voient. Déplacez un comité central vers un rôle stratégique : coordonner entre équipes, résoudre les conflits de calendrier et trancher les arbitrages entre délai de mise sur le marché et risque. Consignez la décision et les preuves dans le registre des métriques (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Volume de changements par type | Scinder un changement en nombreux petits enregistrements pour paraître occupé, en fusionner plusieurs en un pour paraître calme, ou laisser des changements informels hors des livres | Réconcilier les comptes avec les événements de déploiement de la chaîne de livraison chaque mois ; suivre la part des déploiements sans enregistrement de changement correspondant |
| Part de changements standard | Requalifier un travail risqué en standard pour atteindre un objectif, ou écrire de larges procédures standard qui couvrent n'importe quoi | Revue trimestrielle par échantillon de la classification ; taux d'échec des changements par type (voir le sujet 4.4, Échecs de changement et reprises) ; journal des requalifications |
| Délai d'approbation | Démarrer l'horloge tard, l'arrêter tôt, la suspendre pour des questions qu'il n'était pas nécessaire de poser, ou approuver sans lire | Le 85e percentile à côté de la médiane ; revue par échantillon de la substance des approbations ; taux d'échec des changements par groupe d'approbateurs, jamais par individu |
| Part d'approbation automatisée | Ajouter des contrôles automatisés qui réussissent toujours, ou compter comme assurance une revue par les pairs sans commentaires | Revue par échantillon des approbations automatisées et par les pairs ; défauts échappés et taux d'échec des changements approuvés automatiquement ; compte des contournements |
| Âge de la file d'approbation | Clore ou retirer de vieilles demandes pour que la file paraisse courte, ou les déplacer vers une nouvelle demande avec un horodatage neuf | Compte des demandes retirées et soumises à nouveau ; âge de la demande mesuré depuis la première soumission |
| Complétude de l'enregistrement de changement | Remplir les champs requis de texte de remplissage, ou créer des enregistrements après le changement pour satisfaire un rapport | Signaler les enregistrements créés après la mise en œuvre ; revue d'échantillon de la qualité du texte libre ; taux de liaison au commit |

Une lecture saine montre un mélange de types qui se déplace lentement vers les changements standard avec un tableau d'échecs stable, un délai d'approbation médian proche du 85e percentile, une file sans élément beaucoup plus ancien que les autres et un compte de contournements qui reste proche de zéro. Méfiez-vous d'un saut soudain de n'importe quel chiffre. Une division par deux du délai d'approbation en un mois sans changement de processus signifie généralement que l'horloge a bougé, non le travail.

## Compromis : avantages et inconvénients

| Approche | Avantages | Inconvénients |
| --- | --- | --- |
| Changements standard préautorisés | Rapides, cohérents, peu coûteux à auditer ; libèrent l'autorité de changement pour le travail risqué | Exigent une conception préalable ; la classification peut dériver ; de larges procédures cachent le risque |
| Revue par les pairs consignée dans la chaîne de livraison | Revue par des gens qui connaissent le code ; produit un enregistrement automatiquement ; passe à l'échelle avec le volume | La qualité dépend de la culture de revue ; les petites équipes peuvent manquer d'un relecteur indépendant ; certains régulateurs attendent un approbateur distinct |
| Comité consultatif central des changements | Visibilité entre équipes ; attrape les collisions de calendrier et les risques de dépendances partagées | Lent s'il sert de porte à chaque changement ; encourage des lots de changements plus gros livrés moins souvent ; crée une file |
| Délai d'approbation comme métrique de titre | Facile à expliquer ; expose une vraie source de retard | Facile à détourner ; peut pousser les approbateurs à se hâter ; ne dit rien de la qualité de la décision |
| Part d'approbation automatisée comme objectif | Récompense l'investissement dans l'outillage et les preuves consignées | Peut récompenser des contrôles automatisés faibles ; peut exclure des changements qui exigent vraiment un jugement humain |

La meilleure question est rarement « comité ou pas de comité » et le plus souvent « quels changements ont besoin de quelle sorte d'examen, et comment le savons-nous ? »

## Questions à discuter avec votre équipe

**1. Combien de changements avons-nous faits le mois dernier, et toutes nos sources concordent-elles ?**
Demandez à chaque groupe de produire son propre compte à partir des tickets, des déploiements de la chaîne de livraison et des canaux informels. Comparez les totaux. L'écart est lui-même un constat sur le changement non consigné. L'animateur doit convenir de la source qui fait foi et de qui réconcilie les autres.

**2. Lesquels de nos changements normaux sont en réalité courants, et que faudrait-il pour les rendre standard ?**
Listez les cinq changements normaux les plus fréquents. Pour chacun, demandez si la procédure est documentée, si le risque est compris et si l'équipe a un historique net. La discussion fait souvent ressortir un ou deux candidats évidents. Capturez les contrôles qui rendraient la préautorisation sûre, et nommez qui approuverait la procédure standard.

**3. Où notre horloge d'approbation démarre-t-elle et s'arrête-t-elle, et qu'est-ce qui attend à l'intérieur ?**
Prenez les trois derniers changements normaux et retracez-les de la soumission à la décision. Notez chaque transmission, réunion et demande d'information. Les gens sont souvent surpris par la part de l'attente qui est du temps civil entre les tours de questions. Convenez d'une définition écrite de l'horloge et de ce qui est exclu.

**4. Faisons-nous confiance à nos approbations, ou ne faisons-nous que les collecter ?**
Tirez un échantillon d'approbations récentes et lisez les revues. Cherchez les approbations accordées en quelques secondes ou sans commentaires. Le but est d'apprendre quelle assurance le processus apporte réellement, non de trouver un coupable. Discutez de ce qui rendrait une revue plus substantielle sans la ralentir.

**5. À quoi sert notre comité des changements, et que perdrions-nous s'il cessait de se réunir ?**
Demandez ce que le comité décide que personne d'autre ne pourrait décider, et ce qu'il ne fait que confirmer. Certains comités font un travail précieux de coordination entre équipes et de repérage de collisions de calendrier. D'autres reprennent des décisions déjà prises en revue de code. Convenez des fonctions qui valent la peine d'être gardées et de celles qui pourraient passer dans la chaîne de livraison ou un forum plus léger.

**6. Si nous réduisions de moitié le temps d'approbation, que devrions-nous voir pour savoir que c'était sûr ?**
Nommez les signaux de sécurité avant le changement, comme le taux d'échec des changements par type, la part d'urgence et les incidents liés aux changements récents. Convenez des seuils qui déclencheraient une pause. Cette conversation transforme un objectif de vitesse en expérience avec une règle d'arrêt, qui est la meilleure défense contre l'optimisation de la mauvaise chose.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison ressentent le délai d'approbation comme du temps mort entre un changement terminé et un changement en production. Elles veulent voir leurs propres chiffres par type, avec une vue de la file, pour décider quand regrouper, quand scinder et quand demander un nouveau changement standard. Leurs meilleures contributions sont de bons gabarits de demande, de petits changements et des liens nets du commit à l'enregistrement de changement.

### Équipes de service et d'exploitation

Les équipes d'exploitation emploient l'enregistrement de changement pour répondre à la première question d'un incident : qu'est-ce qui a changé récemment ? Elles valorisent la complétude, des liens de service exacts et un calendrier digne de confiance. Elles portent aussi le coût d'un changement qui tourne mal ; elles ont donc un intérêt légitime pour les règles de classification et la revue des changements d'urgence. Le meilleur geste est de co-détenir le catalogue des changements standard avec les équipes de livraison, afin que la préautorisation reflète la connaissance opérationnelle.

### Direction et gouvernance

Les dirigeants et les instances de gouvernance ont besoin de l'assurance que les changements sont maîtrisés, et ils ont besoin de savoir si le contrôle ralentit l'organisation. Ces métriques donnent les deux : mélange de types, temps d'attente et part des approbations appuyées par des preuves consignées. Demandez des tendances et la dispersion entre services, jamais un classement, et lisez-les à côté des mesures d'échec (voir le sujet 4.4, Échecs de changement et reprises). Financer l'automatisation qui déplace l'approbation dans la chaîne de livraison est généralement un meilleur investissement que d'ajouter un relecteur au comité.

### Clients et utilisateurs

Les clients voient rarement le processus de changement. Ils voient arriver de nouvelles fonctions, des corrections livrées promptement et moins de pannes après une version. Une approbation lente retarde les corrections qu'ils ont demandées, et une approbation faible risque la panne qu'ils redoutent. Là où un service a des fenêtres de maintenance programmées, publiez le calendrier des changements en langage clair.

## En pratique : un exemple d'ITIL agile

Une compagnie d'assurance régionale fictive exploite un portail client avec huit équipes de livraison et un CAB qui se réunit deux fois par semaine. Tous les chiffres ci-dessous sont illustratifs.

Le responsable de l'exploitation des services construit la première vue complète du changement. Pour le mois, le portail montre environ 420 changements accomplis selon les tickets, 610 déploiements en production selon la chaîne de livraison, et un écart qui se révèle être des changements faits sans ticket. Sur les 420 changements avec ticket, 18 pour cent sont standard, 76 pour cent normaux et 6 pour cent d'urgence (illustratif). Le délai d'approbation médian des changements normaux est de 2 jours ouvrés, et le 85e percentile est de 7 jours ouvrés (illustratif). La plus ancienne demande de la file a attendu 12 jours ouvrés.

Quand les équipes regardent la longue attente, elles trouvent deux causes. Beaucoup de demandes attendent la prochaine réunion du comité même quand elles sont courantes, et d'autres retournent plusieurs fois au demandeur pour des informations manquantes. L'équipe sépare les deux horloges et découvre qu'environ la moitié de l'attente au 85e percentile est du temps d'attente du demandeur. Elle corrige d'abord le gabarit de demande. Puis elle choisit les trois changements normaux les plus courants : mises à jour de dépendances avec tests réussis, bascules de configuration dans un outil de bascules de fonctionnalité et mise à l'échelle des serveurs d'application. Elle écrit des procédures, convient du risque avec l'autorité de changement et les convertit en changements standard dont l'approbation est consignée dans la chaîne de livraison.

Deux mois plus tard, la part de standard monte à 41 pour cent (illustratif), le 85e percentile du délai d'approbation des changements normaux tombe à 4 jours ouvrés (illustratif) et le taux d'échec des changements par type reste stable, comme rapporté dans les mesures associées (voir le sujet 4.4, Échecs de changement et reprises). Le comité passe de la revue de chaque changement normal à la revue des changements à haut risque et du calendrier mensuel.

Un risque de détournement apparaît dans l'échantillon trimestriel. Une équipe a classé une migration de schéma de base de données comme changement standard parce que la procédure antérieure pour les « changements de configuration » était formulée de façon lâche. Le relecteur de l'échantillon remarque que la migration n'avait pas de plan de retour en arrière. L'équipe resserre les définitions de changements standard, ajoute une règle selon laquelle les changements de schéma sont toujours normaux, et le journal des requalifications devient un point permanent de l'ordre du jour. La décision consignée dans le registre des métriques est de garder la part de changements standard comme mesure de contexte et non comme objectif.

## Perspective sectorielle

**Startup.** Une startup a généralement peu de processus formel et beaucoup d'automatisation de la chaîne de livraison. Les changements se font vite sans enregistrement ; la complétude et le lien du commit au déploiement comptent donc le plus. Une définition d'une page des trois types, plus une revue consignée par la chaîne de livraison, suffit souvent.

**Petite entreprise.** Une petite entreprise a souvent une ou deux personnes qui écrivent et mettent en production les changements, de sorte qu'une revue indépendante est difficile. Employez une simple liste de changements standard pour le travail courant, exigez un second regard pour tout ce qui touche aux données de clients ou à l'argent, et tenez un journal simple des changements. Les mesures qui valent d'être suivies sont le volume par type et la complétude des enregistrements, car elles sont peu coûteuses et elles aident pendant un incident.

**Grande entreprise.** Les grandes entreprises ont de nombreuses équipes, des plateformes partagées et des systèmes anciens de risques différents. Elles ont tendance à avoir un CAB, et les métriques aident à décider lesquelles de ses tâches doivent rester. Le travail principal est une classification cohérente, un catalogue partagé de changements standard et une chaîne de livraison qui consigne des preuves d'audit. Consolidez par service et par classe de risque, non par classement d'équipes.

**Gouvernement et secteur public.** Les organismes publics font souvent face à des exigences légales d'approbation, de séparation des tâches et de conservation des enregistrements, et peuvent avoir des fenêtres de mise en production dictées par les marchés. Les métriques devraient énoncer quels contrôles sont obligatoires et lesquels sont des habitudes locales, car les premiers ne peuvent pas être retirés et les seconds le peuvent. La revue par les pairs consignée et les preuves de la chaîne de livraison peuvent souvent satisfaire l'intention, mais confirmez-le avec l'auditeur concerné avant de vous y fier (voir le sujet 8.3, Métriques de conformité et d'audit).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est généralement le temps que les changements passent à attendre. Quand le travail terminé fait la queue pour une décision, la valeur est retardée, les lots grossissent et chaque lot porte plus de risque. Une deuxième motivation est l'assurance : les dirigeants et les auditeurs veulent savoir que les changements sont maîtrisés, et les preuves consignées dans la chaîne de livraison sont moins coûteuses à produire et plus dignes de confiance qu'une reconstitution. Une troisième est la réponse aux incidents, car un enregistrement de changement complet et exact raccourcit la recherche d'une cause.

La collecte est peu coûteuse si l'outil de changements et la chaîne de livraison stockent déjà les horodatages et les types, et modérée s'il faut les intégrer. Agir sur les données coûte plus : écrire des procédures de changements standard, construire des contrôles de chaîne de livraison et former les approbateurs et les demandeurs. Attendez-vous à l'essentiel du travail au premier trimestre et à un coût plus bas et régulier pour l'échantillonnage et la revue ensuite.

Le retour se voit dans moins de temps d'attente par changement, moins de réunions, moins d'effort pour préparer les preuves d'audit et un diagnostic plus rapide pendant les incidents. Estimez-le avec vos propres données : multipliez la réduction des heures d'attente d'approbation par le nombre de changements touchés et par un coût de l'heure de retard que votre partenaire financier accepte. N'importez pas de chiffres d'autres organisations. La recherche DORA soutient le sens de l'argument, mais ses pages ne donnent ni coût ni retour, et tout chiffre en dollars doit venir de vos propres mesures.

## Antimodèles et pièges

- **Traiter la part de changements standard comme un objectif.** Les équipes requalifient un travail risqué pour atteindre le chiffre. Employez-la comme contexte, revoyez la classification par échantillon et surveillez les taux d'échec par type.
- **Mesurer la seule vitesse d'approbation.** Un tampon rapide paraît excellent et ne livre rien. Associez le délai à une revue par échantillon de la substance des approbations et au tableau des échecs.
- **Ajouter des approbations après chaque incident.** Chaque nouvelle porte ralentit le système et encourage souvent de plus gros lots. Regardez d'abord pourquoi l'échec s'est produit, et corrigez la cause dans les tests, la revue ou la chaîne de livraison.
- **Classer les approbateurs ou les demandeurs.** Les comptes par personne d'approbations ou de refus apprennent aux gens à tout approuver ou à ne rien approuver. Rapportez par service et par type de changement.
- **Faire des moyennes entre types de changements.** Une moyenne unique mélange travail courant et travail risqué et cache les deux. Séparez toujours par type et montrez le 85e percentile.
- **Ignorer les changements faits hors processus.** Le contournement cache le volume et le risque réels. Réconciliez les déploiements de la chaîne de livraison avec les enregistrements de changements et traitez les écarts comme un défaut du système.
- **Garder le comité par habitude.** Un comité qui approuve tout ce qu'il voit ajoute du retard sans ajouter d'assurance. Revoyez chaque année ce qu'il décide que personne d'autre ne pourrait décider, et recentrez-le.
- **Collecter les données sans jamais décider.** Rattachez chaque métrique à un responsable nommé et à un forum de revue (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Classification et volume | Les types sont informels ; personne ne connaît le total | Certaines équipes comptent par type avec des règles différentes | Une classification écrite, un système qui fait foi | Mélange de types suivi dans le temps et échantillonné pour la justesse | Catalogue de changements standard partagé avec les fournisseurs et révisé quand les preuves de risque changent |
| Horloge d'approbation et file | Les attentes d'approbation sont ressenties mais non chronométrées | Certaines équipes horodatent les demandes | Une définition de l'horloge, médiane et percentile montrés | Âge de la file revu chaque semaine ; les retards pilotent des corrections financées | Flux d'approbation réglé entre équipes et fournisseurs au regard des échecs et des résultats pour les clients |
| Automatisation de l'approbation | L'approbation est une réunion ou un courriel | Quelques chaînes de livraison consignent la revue par les pairs | Revue et contrôles consignés par défaut pour les changements à faible risque | Part automatisée suivie avec un compte de contournements et des contrôles de qualité par échantillon | Politique encodée dans des contrôles de plateforme partagés qui s'adaptent quand le tableau des risques change |
| Enregistrements et usage | Enregistrements minces ou écrits après coup | Les enregistrements existent mais diffèrent en qualité | Champs requis convenus et liés aux services | Complétude auditée et employée dans les revues d'incidents | Les données de changement alimentent les pratiques d'incidents, de problèmes et d'audit dans toute l'organisation |

## Liste de vérification

- [ ] Les trois types de changements et leurs critères sont écrits et convenus.
- [ ] Une vue unique des changements accomplis par type existe, réconciliée avec les déploiements de la chaîne de livraison.
- [ ] L'horloge d'approbation a un début, une fin et une liste d'exclusions écrits.
- [ ] Le délai d'approbation est rapporté en médiane et en 85e percentile.
- [ ] L'âge de la file d'approbation est visible et revu chaque semaine.
- [ ] Au moins un changement normal fréquent a été converti en changement standard avec une procédure documentée.
- [ ] La revue par les pairs et les résultats des tests sont liés automatiquement aux enregistrements de changements.
- [ ] Un échantillon trimestriel vérifie la classification et la qualité des approbations.
- [ ] Le contournement de la chaîne de livraison est mesuré et revu.
- [ ] Chaque métrique a dans le registre des métriques un responsable nommé, un vecteur de détournement et un garde-fou.
- [ ] Aucun rapport ne classe des approbateurs ou des demandeurs individuels.

## Prompts d'IA

**Rédigez un guide de classification pour les trois types de changements.**

```text
Je travaille dans [type of organization] et nous exploitons [list of services].
Notre outil de changements est [tool], notre chaîne de livraison est [pipeline
tool] et notre contexte réglementaire est [regulations or none]. Voici nos dix
changements les plus fréquents : [list]. Rédigez un guide en langage clair pour
décider si chacun est un changement standard, normal ou d'urgence, avec les
critères employés et un exemple de cas limite. N'inventez pas de valeurs de
référence et ne prétendez pas qu'une pratique satisfait une exigence d'audit.
Énumérez vos hypothèses et les questions auxquelles je devrais répondre avant
d'adopter le guide.
```

**Trouvez où passe le temps d'approbation.**

```text
Voici un extrait d'enregistrements de changements avec les horodatages de
soumission, de demande d'information et de décision : [pasted data or
description]. Notre processus d'approbation est [description]. Calculez la
médiane et le 85e percentile du délai d'approbation par type de changement, en
séparant le temps d'attente du demandeur du temps d'attente d'une décision, et
suggérez trois questions à poser sur les cas les plus longs. N'inventez pas de
chiffres absents des données et ne classez pas de personnes. Énumérez vos
hypothèses et tout problème de qualité des données que vous remarquez.
```

**Vérifiez les risques de détournement des métriques.**

```text
Nous rapportons ces métriques de maîtrise des changements : [list of metrics
with definitions]. Le public est [team, leadership, or governance body] et les
métriques servent à [purpose]. Pour chaque métrique, listez les façons
plausibles dont elle pourrait être gonflée, cachée ou faussée sans amélioration
réelle, et suggérez une mesure ou pratique de garde-fou associée. Ne proposez ni
objectifs ni valeurs de référence. Énumérez vos hypothèses et les risques de
détournement qui comptent le plus selon vous pour [service name].
```

**Planifiez le passage de l'approbation par comité à l'approbation par la chaîne de livraison.**

```text
Notre voie d'approbation actuelle pour [change type] est [description], avec
[number] approbateurs et une attente typique décrite comme [description]. Notre
chaîne de livraison fournit [checks, tests, review tooling]. Proposez un plan par
étapes pour faire passer les changements à faible risque à une approbation
consignée par la chaîne de livraison, incluant les preuves que nous devrions
garder, les signaux de sécurité à surveiller et une règle d'arrêt. Ne prétendez
pas que le plan satisfait une réglementation ou une norme. Énumérez vos
hypothèses et les personnes que je devrais consulter, comme [auditor, security
lead, change authority].
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver les sujets apparentés sur les changements, les versions et les incidents et le garde-fou qui doit se trouver à côté de chaque métrique de maîtrise des changements.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une version révisée de ce sujet garde cohérents ses horloges, ses vecteurs de détournement et ses renvois.

## Points clés à retenir

- Les métriques de maîtrise des changements mesurent le flux et le contrôle du changement : volume par type, attente d'approbation et part de l'approbation que la chaîne de livraison consigne automatiquement.
- Séparez tout par type de changement, rapportez les temps d'attente en médiane et en 85e percentile, et surveillez la file en direct autant que l'historique.
- Faire passer le travail courant en changements standard et consigner la revue dans la chaîne de livraison est le moyen le plus direct de raccourcir l'attente, et cela doit se lire à côté des mesures d'échec.
- La part de changements standard et la vitesse d'approbation sont faciles à détourner ; échantillonnez donc la classification et la qualité des approbations, et gardez les chiffres hors des fiches individuelles.
- Employez les métriques pour décider à quoi sert un comité des changements, et financez l'automatisation qui rend sûr un contrôle plus léger.

## Références et lectures complémentaires

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA (Google Cloud), "Streamlining change approval" and "Software delivery performance metrics," DORA capabilities and guides, https://dora.dev/ (read the pages directly and note the date you consulted them).
3. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
6. Wikipedia, [Change management (ITSM)](https://en.wikipedia.org/wiki/Change_management_(ITSM)).
7. Wikipedia, [Separation of duties](https://en.wikipedia.org/wiki/Separation_of_duties).
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
