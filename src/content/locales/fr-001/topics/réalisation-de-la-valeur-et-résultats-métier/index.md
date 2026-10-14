# Réalisation de la valeur et résultats métier

**Livrer un changement n'est pas la même chose que l'organisation en tirer profit ; énoncez donc le bénéfice attendu avant de construire, vérifiez-le après la mise en production avec les personnes qui devaient en profiter, et soyez honnête sur la part de toute amélioration que vous pouvez attribuer à votre travail.**

## Résumé et motivation

Les façons de travailler agiles placent le logiciel fonctionnel en premier et gardent les parties prenantes en collaboration tout au long, afin que ce qui est livré soit ce dont les gens ont besoin. La gestion des services informatiques (ITSM), telle que codifiée par ITIL, formule le même souci comme la valeur : un service a de la valeur quand il aide les clients à atteindre les résultats qu'ils veulent, avec des coûts et des risques qu'ils acceptent. Les deux traditions se rencontrent sur une question inconfortable. Dans un an, les personnes et l'organisation s'en trouvent-elles mieux grâce à ce que cette équipe a construit et exploité ?

Y répondre est plus difficile que de compter ce qui a été livré. Des fonctions sont livrées et personne ne les emploie. Les incidents baissent pour des raisons sans rapport avec le travail de l'équipe. Une économie apparaît sur une diapositive, et le budget dont elle venait est dépensé ailleurs. Ce sujet porte sur la façon de combler cet écart, et il se relie directement à l'accent mis sur les résultats introduit tôt dans le livre (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

Quatre idées organisent le sujet.

- **Bénéfice.** Un bénéfice est une amélioration mesurable qu'une partie prenante valorise, comme moins de temps passé sur une tâche, moins d'erreurs, plus de clients servis ou un risque plus bas. Une fonction n'est pas un bénéfice. C'est un moyen. La [gestion de la réalisation des bénéfices](https://en.wikipedia.org/wiki/Benefits_realisation_management) est la discipline qui identifie les bénéfices, attribue des responsables et vérifie qu'ils arrivent.
- **Hypothèse de valeur.** Avant de construire, l'équipe écrit ce qu'elle s'attend à voir changer, pour qui, de combien et comment elle le saura. C'est une affirmation testable, et elle peut être fausse. Une [théorie du changement](https://en.wikipedia.org/wiki/Theory_of_change) ou un [modèle logique](https://en.wikipedia.org/wiki/Logic_model) expose la chaîne des activités aux produits puis aux résultats, ce qui aide à rendre l'hypothèse explicite.
- **Indicateurs avancés et retardés.** Un [indicateur avancé](https://en.wikipedia.org/wiki/Leading_indicator) bouge tôt et prédit un résultat, comme l'adoption d'un nouveau processus. Un [indicateur retardé](https://en.wikipedia.org/wiki/Lagging_indicator) confirme le résultat après coup, comme un coût par transaction réduit. Employez les deux : les indicateurs avancés permettent de corriger le cap, et les indicateurs retardés disent si cela a fonctionné.
- **Attribution.** De nombreuses choses changent à la fois. Pour dire que votre travail a causé une amélioration, il faut une comparaison : une ligne de base, un groupe de comparaison ou un plan avant-après qui tient compte des autres changements. Sans cela, les affirmations de valeur sont des histoires. La position honnête est souvent « associé à » et non « causé par ».

Des cadres d'objectifs comme les [objectifs et résultats clés](https://en.wikipedia.org/wiki/Objectives_and_key_results) (OKR) peuvent relier le travail des équipes aux résultats métier, et le sujet précédent sur les cadres de mesure les couvre en détail (voir le sujet 1.7, Cadres de mesure). Le risque de chaque cadre est celui que nomme la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) : dès qu'un chiffre de bénéfice devient un objectif, les gens trouvent des moyens de produire le chiffre sans le bénéfice (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

Le sujet fait aussi le pont vers l'argent. Le sujet de la partie suivante sur le retour sur investissement et le dossier d'affaires prend en profondeur la vue financière (voir le sujet 7.7, Retour sur investissement et dossier d'affaires). Ici, l'accent est mis sur la preuve des résultats, qui alimente ce dossier.

## Principes clés

- **Écrire le bénéfice attendu avant de construire.** Une affirmation qui ne peut pas être vérifiée plus tard ne peut pas en être apprise.
- **Nommer un responsable pour chaque bénéfice.** Le responsable est une partie prenante qui verra le changement, non l'équipe de livraison.
- **Mesurer auprès des utilisateurs, après la mise en production.** La livraison est le début de la vérification, non la fin.
- **Employer les indicateurs avancés pour piloter et les indicateurs retardés pour confirmer.**
- **Être honnête sur l'attribution.** Dites ce qui a changé d'autre, et évitez les affirmations que la preuve ne peut pas soutenir.
- **Compter les bénéfices qui ne sont pas arrivés.** Apprendre d'une hypothèse échouée est un bénéfice de travailler ainsi.
- **Continuer de collaborer.** Les parties prenantes et l'équipe passent ensemble la preuve en revue, régulièrement.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Taux de réalisation des bénéfices | Part des bénéfices attendus qui ont été observés à la date de revue convenue | bénéfices avec un résultat mesuré au seuil convenu ou au-dessus / bénéfices attendus dont la date de revue tombe dans la période | pourcentage | Registre des bénéfices avec responsables, lignes de base et dates de revue | Amélioration continue ; gouvernance du système de valeur de service | Revue des résultats avec les parties prenantes | Trimestrielle |
| Délai jusqu'à la première valeur | Temps entre le début du travail et le premier bénéfice mesurable pour les utilisateurs | jours entre le début du premier travail et la première date où l'indicateur de bénéfice a bougé comme attendu | jours | Suivi du travail et indicateur de bénéfice | Conception de services ; gestion des versions et des déploiements | Livraison continue de valeur | Par initiative |
| Taux de vérification des hypothèses | Part des changements mis en production dont l'hypothèse de valeur énoncée a été vérifiée après la mise en production | changements avec une vérification post-mise en production consignée / changements mis en production qui portaient une hypothèse | pourcentage | Journal des hypothèses lié aux enregistrements de versions | Amélioration continue ; maîtrise des changements | Apprendre du travail livré | Mensuelle |
| Part de qualité de la preuve | Part des bénéfices revendiqués qui ont une ligne de base et une méthode de comparaison énoncée | affirmations de bénéfice avec ligne de base et méthode / affirmations de bénéfice rapportées | pourcentage | Revue du registre des bénéfices | Mesure et rapport | Rapport honnête des résultats | Trimestrielle |
| Mouvement de l'indicateur de résultat | Variation d'un indicateur de résultat choisi par rapport à sa ligne de base et à une comparaison là où elle existe | (indicateur après moins indicateur avant) avec la variation du groupe de comparaison rapportée à côté | unités de l'indicateur | Analyse du produit, données de service, finance | Gestion des niveaux de service ; amélioration continue | Avancement d'un résultat clé | Mensuelle |
| Heures d'impact sur l'activité | Heures pendant lesquelles un processus métier a été dégradé ou arrêté à cause de problèmes de service | heures de processus dégradé ou arrêté attribuées par les responsables de processus à des causes de service informatique | heures | Enregistrements d'incidents joints à la confirmation du responsable de processus | Gestion des incidents ; gestion de la disponibilité | Revue de l'impact sur l'activité | Mensuelle |
| Part de capacité liée aux résultats | Part de la capacité de l'équipe dépensée sur du travail lié à un résultat énoncé | capacité sur les éléments liés à un résultat consigné / capacité totale | pourcentage | Suivi du travail avec un champ de résultat | Système de valeur de service ; gouvernance du portefeuille | Travail aligné sur l'objectif du produit | Trimestrielle |

Définissez la date de revue et le seuil de chaque bénéfice quand il est consigné, non après. Le délai jusqu'à la première valeur démarre quand le travail commence et s'arrête quand l'indicateur bouge pour la première fois dans la direction attendue d'un montant énoncé, ce qui peut être bien après la mise en production. L'attribution des heures d'impact sur l'activité est convenue avec le responsable de processus, et les désaccords sont consignés.

## Recommandations

### Avant de construire : rendre l'affirmation vérifiable

**1. Écrivez une hypothèse de valeur pour chaque changement important.** Employez une forme simple : « Nous croyons que [changement] aidera [qui] à [faire quoi] de sorte que [amélioration mesurable]. Nous le saurons quand [indicateur] passera de [ligne de base] à [attendu], revu le [date]. » Gardez-la assez courte pour tenir sur une carte du tableau. Les équipes qui ne peuvent pas remplir les blancs n'ont souvent pas encore compris le problème.

**2. Consignez une ligne de base.** Sans un avant, il n'y a pas d'après. Capturez la valeur actuelle de l'indicateur, la manière dont elle a été mesurée et sa variation. Si l'indicateur est bruité, un seul nombre induit en erreur ; consignez donc une plage sur plusieurs semaines (voir le sujet 1.6, Culture statistique pour les métriques de service).

**3. Choisissez des indicateurs avancés et retardés.** Pour une nouvelle demande en libre-service, un indicateur avancé est le nombre d'utilisateurs éligibles qui la mènent à terme, et un indicateur retardé est la baisse des heures de traitement manuel (voir le sujet 6.3, Métriques d'adoption des services et de catalogue). Convenez de l'indicateur vérifié à quel moment. Les indicateurs avancés permettent une correction en cours de route sans attendre la fin du trimestre.

**4. Nommez un responsable du bénéfice extérieur à l'équipe de livraison.** Le responsable est la partie prenante qui verra l'amélioration dans son domaine et pourra la juger. L'équipe de livraison soutient la mesure mais ne corrige pas ses propres devoirs. C'est la collaboration continue en pratique : la personne qui voulait le résultat reste impliquée jusqu'à ce qu'il soit confirmé.

### Après la mise en production : le vérifier, honnêtement

**5. Passez l'hypothèse en revue à la date convenue.** Tenez une courte revue avec le responsable et l'équipe. Regardez l'indicateur, la ligne de base et la comparaison. Consignez le résultat dans le registre : atteint, partiellement atteint, non atteint ou impossible à dire. « Impossible à dire » est un résultat légitime et une invitation à améliorer la mesure.

**6. Employez une comparaison là où vous le pouvez.** La comparaison la plus forte est une expérience contrôlée. Le [test A/B](https://en.wikipedia.org/wiki/A/B_testing) compare deux versions avec des utilisateurs répartis au hasard, et fonctionne bien pour les services numériques ayant assez de trafic. Là où la répartition aléatoire n'est pas possible, un déploiement échelonné permet de comparer des groupes qui ont et n'ont pas reçu le changement. Une approche de [différence des différences](https://en.wikipedia.org/wiki/Difference_in_differences) compare la variation d'un groupe traité avec celle d'un groupe non traité sur la même période, ce qui retire les tendances partagées. Employez le plan le plus simple qui convienne.

**7. Cherchez les facteurs de confusion.** Un facteur de [confusion](https://en.wikipedia.org/wiki/Confounding) est quelque chose d'autre qui a changé et pourrait expliquer le résultat : un schéma saisonnier, une nouvelle politique, un autre mélange de demandes. Listez les plus plausibles avant de revendiquer un effet. Si vous ne pouvez pas les écarter, dites ce que la preuve soutient et pas plus.

**8. Rapportez les résultats négatifs et nuls.** Quand un changement n'a pas aidé, dites-le et consignez ce qui a été appris. Le [biais du survivant](https://en.wikipedia.org/wiki/Survivorship_bias), l'habitude de ne regarder que les succès, fait paraître les programmes meilleurs qu'ils ne sont. Un registre qui ne contient que des victoires n'a pas été tenu honnêtement.

### Garder le programme honnête

**9. Séparez la qualité de la preuve du bénéfice.** Suivez la part des affirmations qui ont une ligne de base et une méthode énoncée. Une grande affirmation avec une preuve faible devrait se lire comme telle. Un registre sain montre des affirmations modestes avec une preuve solide, et quelques honnêtes entrées « impossible à dire ».

**10. Reliez la capacité aux résultats, de façon lâche.** Demandez quelle part du travail de l'équipe est liée à un résultat énoncé, et regardez le reste. Certains travaux, comme les corrections de sécurité ou le maintien du service, n'ont aucun nouveau bénéfice, et c'est bien s'ils sont nommés. Le but est de remarquer la dérive, non de forcer chaque tâche dans une histoire de bénéfice.

**11. Reliez au cadre d'objectifs que vous employez.** Si vous employez les OKR, faites des résultats clés les indicateurs de résultat et passez-les en revue avec les parties prenantes. Gardez les résultats clés orientés sur les résultats, non sur les tâches, et laissez de la place à des objectifs ambitieux qui peuvent ne pas être pleinement atteints. Ne faites pas des résultats clés des objectifs individuels (voir le sujet 1.7, Cadres de mesure).

**12. Passez en revue le portefeuille autant que le projet.** Une fois par trimestre, regardez entre les initiatives quels bénéfices sont arrivés, lesquels non et ce que le schéma dit de la façon dont l'équipe estime et sélectionne le travail. Servez-vous-en pour améliorer la manière dont les hypothèses sont écrites, non pour classer des équipes.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Taux de réalisation des bénéfices | Fixer des seuils bas ; déplacer la date de revue ; redéfinir le bénéfice après coup | Seuil et date fixés à l'approbation ; part de qualité de la preuve ; responsable extérieur à l'équipe de livraison |
| Délai jusqu'à la première valeur | Choisir un indicateur précoce qui bouge pour la mauvaise raison ; démarrer l'horloge tard | Indicateur et horloge définis dans le registre ; confirmer avec le responsable du bénéfice |
| Taux de vérification des hypothèses | Écrire des hypothèses vagues qui passent toujours ; ne vérifier que les changements réussis | Échantillonner les hypothèses pour leur testabilité ; inclure les résultats nuls et échoués dans la revue |
| Part de qualité de la preuve | Remplir les lignes de base après coup ; décrire n'importe quelle comparaison comme une méthode | Ligne de base datée avant le changement ; revue par quelqu'un d'extérieur à l'équipe |
| Mouvement de l'indicateur de résultat | Choisir une période ou un groupe favorable ; ignorer les facteurs de confusion | Période et groupe préenregistrés ; liste des facteurs de confusion considérés |
| Heures d'impact sur l'activité | Les responsables de processus gonflent ou dégonflent les attributions ; incidents requalifiés pour éviter l'attribution | Règles d'attribution écrites et consignées ; comparer avec les enregistrements d'incidents et de disponibilité |
| Part de capacité liée aux résultats | Étiqueter tout le travail avec un résultat générique ; inventer des résultats pour le travail courant | Liste de résultats revue avec les parties prenantes ; échantillon d'éléments pour la qualité du lien |

Une lecture saine est un registre où certains bénéfices sont atteints, d'autres non, quelques-uns incertains, et où chaque entrée a une ligne de base, un responsable et une méthode énoncée. Un registre de succès uniforme devrait être traité avec soupçon.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Registre formel des bénéfices | Redevabilité, apprentissage entre initiatives | Bureaucratie si appliqué à chaque petit changement |
| Hypothèse légère sur chaque carte | Peu coûteuse, bâtit l'habitude | Facile à écrire de façon vague |
| Expérience contrôlée | Preuve forte de la cause | Exige du trafic, du temps et un plan qui convienne au service |
| Avant-après seulement | Simple, rapide | Brouillé par d'autres changements |
| Jugement des parties prenantes | Saisit la valeur que les métriques manquent | Sujet à l'optimisme et à la politique |
| Indicateurs avancés | Correction précoce du cap | Peuvent ne pas prédire le vrai résultat |
| Indicateurs retardés | Confirment les vrais résultats | Arrivent tard ; nombreuses causes |

La réponse en prose est d'ajuster le poids de la preuve à la taille et au risque du changement. Employez une hypothèse légère et un simple avant-après pour les petits changements, et une expérience ou un déploiement échelonné pour les grands. Consignez toujours ce que vous attendiez, ce qui s'est passé et votre degré de certitude.

## Questions à discuter avec votre équipe

**1. Qu'avons-nous livré le trimestre dernier, et qu'est-ce qui a changé pour les personnes qu'il devait aider ?**
Listez les principaux changements et, pour chacun, nommez la personne qui remarquerait une différence. Demandez ce qu'elle dirait. L'animateur doit noter les changements dont personne ne peut répondre, car ce sont des candidats à une vérification post-mise en production. Convenez d'un changement à revoir avec son responsable dans le mois.

**2. Pour notre prochain changement important, quelle est l'hypothèse de valeur et comment le saurons-nous ?**
Remplissez ensemble le formulaire d'hypothèse. Contestez les mots vagues et les lignes de base manquantes. Demandez quel résultat ferait changer les plans de l'équipe. Si le groupe ne peut pas s'accorder sur une mesure, c'est une tâche de découverte avant de construire.

**3. Qui détient le bénéfice, et est-il dans la salle ?**
Vérifiez que chaque bénéfice a un responsable extérieur à l'équipe de livraison. Demandez à quelle fréquence le responsable voit la preuve. Là où le responsable est l'équipe elle-même, discutez de qui d'autre devrait partager le jugement. La conversation soutient la collaboration continue entre les parties prenantes.

**4. Qu'est-ce qui a changé d'autre quand les chiffres se sont améliorés ?**
Prenez une amélioration récemment revendiquée et listez les autres changements de la même période : politique, saisonnalité, dotation, version d'une autre équipe. Demandez lesquels pourraient expliquer le résultat. Décidez s'il faut décrire l'amélioration comme causée par le changement, associée à lui ou incertaine.

**5. Lesquelles de nos hypothèses passées se sont révélées fausses, et qu'avons-nous fait ?**
Demandez l'histoire d'une attente déçue. Si aucune ne vient vite, l'équipe ne vérifie peut-être pas, ou n'en parle peut-être pas. Discutez de la manière de rendre sûr et utile le rapport d'un résultat nul.

**6. Quelle part de notre capacité est liée à un résultat, et cela vous paraît-il juste ?**
Passez en revue un mois de travail terminé et étiquetez chaque élément avec un résultat ou « maintien du service ». Demandez si la répartition correspond à ce que pensent les dirigeants. Discutez du travail sans résultat et de la question de savoir s'il devrait continuer.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison détiennent l'hypothèse et le plan de mesure, et elles devraient livrer les changements par petites étapes pour que la preuve arrive tôt. Elles devraient intégrer l'indicateur dans le changement, par exemple en consignant les événements dont elles ont besoin, et demander au responsable du bénéfice de confirmer ce qu'elles voient. Les équipes devraient accueillir les hypothèses échouées comme de l'information, puisque l'apprentissage précoce épargne le coût de construire davantage de la mauvaise chose.

### Équipes de service et d'exploitation

Les équipes d'exploitation voient l'effet réel des changements sur les incidents, les demandes et la capacité. Elles détiennent une grande part des données des indicateurs retardés, comme les heures de traitement manuel et les contacts répétés, et elles devraient aider à vérifier les hypothèses autant qu'absorber le changement. Elles devraient parler quand les bénéfices revendiqués sur le papier ne correspondent pas à ce que voit le centre de services.

### Direction et gouvernance

Les dirigeants choisissent si les bénéfices sont un outil d'apprentissage ou un argumentaire de vente. Ils devraient demander des lignes de base et des méthodes, accueillir les honnêtes résultats « non atteint » et éviter de tenir les équipes à des chiffres de bénéfice fixés avant que les faits soient connus. La gouvernance devrait passer le registre en revue comme un portefeuille, financer la mesure et être prête à arrêter un travail dont l'hypothèse a échoué.

### Clients et utilisateurs

Les utilisateurs savent si un changement a aidé, et ils sont les meilleurs juges de la plupart des bénéfices. On devrait leur demander, leur montrer les résultats et leur dire quand un changement n'a pas livré ce qui était espéré. Leurs commentaires sont une preuve à part entière. Un bénéfice que les chiffres montrent et que les utilisateurs ne ressentent pas mérite un examen plus attentif.

## En pratique : un exemple d'ITIL agile

Le groupe informatique d'un assureur de santé régional construit et exploite un portail de demandes d'indemnisation pour les prestataires. Les chiffres ci-dessous sont illustratifs.

Le groupe prévoit d'ajouter des contrôles automatiques d'éligibilité à la soumission des demandes. L'hypothèse, écrite avec le responsable des opérations d'indemnisation, est : « Nous croyons que des contrôles automatiques d'éligibilité aideront le personnel de facturation des prestataires à soumettre des demandes correctes du premier coup, de sorte que les demandes renvoyées pour correction passent de 18 pour cent à 12 pour cent en trois mois. Nous le saurons par le taux de demandes renvoyées, revu le 1er mars. » La ligne de base est la moyenne des 12 dernières semaines, 18 pour cent avec une plage hebdomadaire de 15 à 21 pour cent. L'indicateur avancé est l'usage du contrôle le premier mois. Le responsable des opérations d'indemnisation est le responsable du bénéfice.

L'équipe met en production par petites étapes, le contrôle étant d'abord disponible dans une région. Après trois semaines, l'usage du contrôle est de 64 pour cent dans cette région. À la date de revue, les demandes renvoyées tombent à 13 pour cent dans la région qui a le contrôle et à 17 pour cent dans les régions qui ne l'ont pas. Le responsable des indemnisations fait remarquer qu'un changement de politique sur un code de facturation est aussi entré en vigueur dans la période. L'équipe le liste comme facteur de confusion et retire les demandes avec ce code des deux groupes, ce qui laisse 14 pour cent contre 17,5. La réalisation du bénéfice est consignée « partiellement atteint » : meilleure que la ligne de base d'une marge nette, en deçà de la cible de 12 pour cent. L'équipe écrit honnêtement dans le registre que la preuve vient d'un déploiement échelonné sur un trimestre et que l'effet peut différer pour d'autres prestataires.

Elle déploie ensuite le contrôle dans toutes les régions, avec un plan de vérification dans trois mois, et ajoute une tâche pour améliorer le message d'erreur, puisque les commentaires des prestataires disent que le message est peu clair. La directrice financière demande un seul nombre pour le conseil. Le chef de l'informatique offre la plage et la méthode, et refuse d'énoncer un chiffre avec plus de précision que la preuve ne le permet. La décision est consignée, ainsi que la prochaine date de revue.

## Perspective sectorielle

**Startup.** Les bénéfices sont proches du chiffre d'affaires et de la fidélisation, et la vitesse d'apprentissage compte. Écrivez des hypothèses d'une ligne sur des cartes, vérifiez-les vite et évitez les registres lourds. Employez de simples comparaisons, et acceptez que les petits échantillons limitent ce que vous pouvez revendiquer.

**Petite entreprise.** Le propriétaire est le responsable du bénéfice, et les effets sont visibles. Gardez une courte liste de changements avec leurs effets attendus et passez-la en revue chaque trimestre. Évitez de gonfler de petits gains en grands chiffres, et comparez avec le coût du changement.

**Grande entreprise.** Les portefeuilles, les cycles de financement et les nombreuses parties prenantes rendent utile un registre des bénéfices. Gardez-le léger pour les petits changements et rigoureux pour les grands, placez les responsables dans les unités d'affaires et passez en revue l'ensemble du portefeuille. Gardez-vous de consolider des chiffres aux définitions différentes.

**Gouvernement et secteur public.** Les résultats sont souvent des biens publics, comme l'accès, l'équité et la sécurité, qui ne se réduisent pas au chiffre d'affaires. Définissez les résultats avec les personnes servies, employez des preuves mixtes et rapportez ouvertement les méthodes. Des dossiers d'affaires formels et des revues de bénéfices peuvent être exigés, et les honnêtes résultats nuls comptent pour la redevabilité publique (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Le coût est surtout de l'attention. Écrire une hypothèse prend quelques minutes, une ligne de base une heure ou quelques-unes, et une revue une courte réunion. Les expériences et les déploiements échelonnés demandent un effort de conception et un peu d'outillage. Un registre des bénéfices peut être un tableur ou un champ du suivi du travail.

Le retour est de meilleures décisions d'investissement. Une équipe qui vérifie ses hypothèses cesse de construire des choses qui n'aident pas, étend celles qui aident et apprend à quel point elle prédit bien. Cela épargne le coût des fonctions inutilisées et des programmes échoués. Bâtissez le dossier à partir de vos propres données : la part des changements qui portaient une hypothèse, la part de ceux qui ont été vérifiés et le coût du travail ensuite abandonné ou annulé. Évitez les chiffres publiés sur le taux d'échec des projets informatiques à moins de pouvoir retracer leur source et leur méthode, car ils varient largement et sont souvent cités sans contexte. Le traitement financier est dans la partie suivante (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Compter la livraison comme de la valeur.** Une fonction livrée est un moyen. Vérifiez l'effet sur les gens.
- **Des hypothèses qui ne peuvent pas échouer.** Rendez-les précises, avec un nombre et une date.
- **Corriger ses propres devoirs.** Faites juger le résultat par le responsable du bénéfice extérieur à l'équipe.
- **Revendiquer une cause à partir d'un avant-après.** Listez les facteurs de confusion et employez une comparaison quand c'est possible.
- **Ne rapporter que les victoires.** Consignez les résultats nuls et négatifs. Un registre de seuls succès n'est pas honnête.
- **Fixer des objectifs de bénéfice pour des individus.** Des objectifs liés aux personnes invitent à des affirmations gonflées. Gardez les bénéfices au niveau de l'équipe et de l'initiative.
- **La sur-précision.** Rapportez des plages et la méthode, non un seul nombre décimal.
- **Ignorer le travail qui n'a pas de nouveau bénéfice.** Nommez-le, et n'inventez pas d'histoire de bénéfice pour lui.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Énoncer la valeur | Bénéfices revendiqués dans les dossiers d'affaires seulement | Hypothèses écrites pour certains changements | Une courte hypothèse, une ligne de base et un responsable pour chaque changement important | Hypothèses et seuils fixés à l'approbation ; indicateurs avancés et retardés définis | Hypothèses partagées entre équipes et fournisseurs ; résultats définis avec les utilisateurs |
| Vérifier la valeur | Aucune vérification post-mise en production | Vérification occasionnelle par l'équipe de livraison | Revue planifiée avec un responsable indépendant | Comparaisons et facteurs de confusion documentés ; qualité de la preuve suivie | Les preuves au niveau du portefeuille guident le financement ; expériences partagées entre équipes |
| Apprentissage | Victoires célébrées, échecs oubliés | Quelques leçons consignées | Résultats nuls consignés et revus | Les schémas d'hypothèses manquées améliorent la sélection et le dimensionnement | L'apprentissage alimente la planification dans toute l'organisation et avec les partenaires |

## Liste de vérification

- [ ] Chaque changement important a une hypothèse de valeur écrite avec ligne de base, indicateur et date de revue.
- [ ] Chaque bénéfice a un responsable extérieur à l'équipe de livraison.
- [ ] Les indicateurs avancés et retardés sont définis et suivis.
- [ ] Les revues ont lieu à la date convenue avec le responsable.
- [ ] Des comparaisons ou des déploiements échelonnés sont employés là où c'est faisable.
- [ ] Les facteurs de confusion sont listés pour chaque résultat revendiqué.
- [ ] Les résultats nuls et négatifs sont consignés et partagés.
- [ ] La qualité de la preuve est suivie à côté des affirmations de bénéfice.
- [ ] Aucun individu n'a d'objectif de bénéfice personnel.
- [ ] Une revue trimestrielle du portefeuille regarde les schémas d'hypothèses atteintes et manquées.

## Prompts d'IA

**Écrivez une hypothèse de valeur.**

```text
Nous prévoyons de [describe change] pour [users or stakeholders] dans [type of
organization]. Le problème aujourd'hui : [describe]. Rédigez une hypothèse de
valeur sous la forme « Nous croyons que [change] aidera [who] à [do what] de
sorte que [measurable improvement]. Nous le saurons quand [indicator]... »
Suggérez un indicateur avancé et un indicateur retardé, la ligne de base dont
nous avons besoin et la logique de la date de revue. N'inventez pas de valeurs
cibles ; laissez-les comme espaces réservés pour nous. Énumérez vos hypothèses
et ce que nous devons découvrir.
```

**Listez les facteurs de confusion d'un résultat revendiqué.**

```text
Nous affirmons que [change] a amélioré [indicator] de [before] à [after] entre
[dates]. Autres événements de la période : [list]. Listez les facteurs de
confusion plausibles, comment chacun pourrait expliquer le résultat et quelles
données ou quelle comparaison aideraient à l'écarter. Suggérez une formulation
qui énonce ce que la preuve soutient. Ne supposez pas de cause que les données
ne peuvent pas étayer. Énumérez vos hypothèses.
```

**Concevez une comparaison par déploiement échelonné.**

```text
Nous pouvons mettre en production [change] pour [number] groupes à des moments
différents : [describe groups and constraints]. Proposez un déploiement
échelonné qui nous permette de comparer des groupes avec et sans le changement,
dites quel indicateur et quelle période employer, ce qui pourrait biaiser la
comparaison et ce que nous conclurions de résultats différents. N'inventez pas de
tailles d'effet. Énumérez vos hypothèses et vos risques.
```

**Examinez une entrée du registre des bénéfices.**

```text
Examinez cette entrée du registre des bénéfices pour [initiative] : [paste entry
including claim, baseline, method, owner, and review date]. Signalez les
informations manquantes, la formulation vague, les affirmations que la preuve ne
soutient pas et les façons dont le résultat pourrait être détourné. Suggérez une
formulation plus solide qui corresponde à ce que nous avons réellement mesuré.
Énumérez vos hypothèses et vos questions pour le responsable.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de valeur ou de résultat avant de la rapporter.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de bénéfices porte son vecteur de détournement, son garde-fou et son critère de preuve.

## Points clés à retenir

- Écrivez une hypothèse de valeur vérifiable avant de construire, avec une ligne de base, un responsable extérieur à l'équipe et une date de revue.
- Employez les indicateurs avancés pour piloter et les indicateurs retardés pour confirmer.
- Comparez là où vous le pouvez, listez les facteurs de confusion et ne revendiquez que ce que la preuve soutient.
- Consignez les résultats nuls et négatifs ; un registre de succès uniforme n'est pas honnête.
- Suivez la qualité de la preuve à côté de la taille de l'affirmation.
- Gardez les parties prenantes et les utilisateurs en collaboration jusqu'à ce que le résultat soit confirmé.

## Références et lectures complémentaires

1. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
2. Doerr, J., *Measure What Matters*, Portfolio/Penguin, 2018.
3. Kohavi, R., Tang, D., and Xu, Y., *Trustworthy Online Controlled Experiments*, Cambridge University Press, 2020.
4. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
5. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Benefits realisation management](https://en.wikipedia.org/wiki/Benefits_realisation_management).
8. Wikipedia, [Theory of change](https://en.wikipedia.org/wiki/Theory_of_change).
9. Wikipedia, [Logic model](https://en.wikipedia.org/wiki/Logic_model).
10. Wikipedia, [Leading indicator](https://en.wikipedia.org/wiki/Leading_indicator).
11. Wikipedia, [Lagging indicator](https://en.wikipedia.org/wiki/Lagging_indicator).
12. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [A/B testing](https://en.wikipedia.org/wiki/A/B_testing).
15. Wikipedia, [Difference in differences](https://en.wikipedia.org/wiki/Difference_in_differences).
16. Wikipedia, [Confounding](https://en.wikipedia.org/wiki/Confounding).
17. Wikipedia, [Survivorship bias](https://en.wikipedia.org/wiki/Survivorship_bias).
