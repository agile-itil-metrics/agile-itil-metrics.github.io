# Métriques des incidents de sécurité et des vulnérabilités

**La sécurité fait partie de la livraison et de l'exploitation continues d'un service ; mesurez donc combien de temps les gens restent exposés, la rapidité avec laquelle vous contenez ce qui tourne mal et la disposition des collègues à lever la main, et ne transformez jamais une erreur en motif de blâme.**

## Résumé et motivation

Tout service porte des faiblesses, et certaines seront utilisées contre lui. Une [vulnérabilité](https://en.wikipedia.org/wiki/Vulnerability_(computing)) est une faiblesse dans un logiciel, un matériel, une configuration ou un processus qui peut être exploitée pour nuire à la confidentialité, à l'intégrité ou à la disponibilité d'un système. Un incident de sécurité est un événement dans lequel ce préjudice se produit ou est crédiblement menacé. Les métriques de ce domaine tentent de répondre à deux questions. Quelle est notre exposition, et avec quelle rapidité trouvons-nous, corrigeons-nous les problèmes et nous en remettons-nous ?

La tradition agile et DevOps traite la sécurité comme une propriété de la livraison continue, non comme une porte à la fin. Le [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps) prolonge l'idée du DevOps en intégrant des contrôles de sécurité à la chaîne de livraison et en partageant la responsabilité entre développement, sécurité et exploitation. ITIL, par sa pratique de gestion de la sécurité de l'information, apporte la politique, la pensée fondée sur le risque et le lien avec la gestion des incidents, des changements et des actifs. Les deux se rencontrent dans le travail quotidien : les mises à jour de dépendances arrivent comme des changements ordinaires, les constats de vulnérabilités deviennent des éléments de backlog avec des responsables, et les incidents sont traités avec les mêmes revues sans reproche que les autres (voir le sujet 4.2, Métriques des analyses post-incident et de l'apprentissage).

Les métriques de sécurité sont exposées à des distorsions particulières.

- **Compter les constats récompense le fait de ne pas regarder.** Une équipe qui balaie moins trouve moins. Un décompte brut de vulnérabilités peut baisser parce qu'un outil de balayage a perdu son accès, non parce que quelque chose s'est amélioré.
- **Les scores de gravité sont des intrants, non des vérités.** Le [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) (CVSS) donne un score de gravité à une vulnérabilité dans l'abstrait, et des registres comme [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (CVE) leur donnent des identifiants. Qu'une vulnérabilité compte pour vous dépend de son atteignabilité dans votre environnement, de l'usage éventuel d'un exploit et de la valeur de l'actif touché. Un score de gravité brut employé seul envoie l'effort aux mauvais endroits.
- **Le blâme supprime les signalements.** Si les gens sont punis pour avoir cliqué sur un lien ou signalé un incident qu'ils ont causé, les signalements cessent, et l'exposition croît sans être vue. La sécurité psychologique est un contrôle de sécurité.
- **Les mesures de temps cachent la queue.** Un temps médian de correction peut sembler sain pendant qu'une poignée de systèmes critiques restent exposés pendant des mois.

Ce sujet donne les principales mesures, avec leurs définitions, leurs vecteurs de détournement et leurs garde-fous. Il s'appuie sur les enregistrements d'actifs et de configuration de la partie précédente, car on ne peut corriger ni balayer ce qu'on ne peut trouver (voir le sujet 7.1, Métriques de gestion des actifs informatiques, et le sujet 7.4, Métriques de qualité de la configuration et de la CMDB). Une mise en garde : ceci est un guide de mesure, non un manuel de sécurité. Choisissez les contrôles avec des professionnels qualifiés de la sécurité, et suivez les normes et obligations légales qui s'appliquent à vous, comme l'ISO/IEC 27001 et les orientations des agences nationales.

Le garde-fou de la [loi de Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) s'applique fortement à la sécurité. Quand une métrique devient un objectif, les gens reclassent les constats, excluent des actifs des balayages et ferment des tickets sans corriger la cause (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Principes clés

- **Mesurer la durée d'exposition autant que les décomptes.** Combien de temps une faiblesse reste ouverte compte plus que combien on en trouve.
- **Prioriser selon le contexte.** Combinez la gravité, l'exploitabilité, l'atteignabilité et la valeur de l'actif.
- **Vérifier d'abord la couverture.** Un rapport propre issu d'un balayage qui a manqué la moitié du parc est un faux réconfort.
- **Intégrer la sécurité à la chaîne de livraison.** Faites des choix sûrs la valeur par défaut facile, et donnez un retour rapide.
- **Collaborer entre disciplines.** La sécurité, le développement et l'exploitation détiennent ensemble les résultats.
- **Rendre le signalement sûr.** Le traitement sans reproche des erreurs maintient le flux des signaux.
- **Agréger les données de comportement humain.** Rapportez des schémas de groupe et ne nommez ni ne classez jamais des individus.

## Définitions des métriques

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fenêtre d'exposition | Temps pendant lequel une vulnérabilité connue reste ouverte sur les actifs visés, par bande de priorité | médiane et 85e percentile des jours entre la date où l'on sait qu'elle s'applique à l'actif et la date où un correctif ou une atténuation acceptée est vérifié | jours | Outil de balayage des vulnérabilités, système de tickets, enregistrements de changements | Gestion de la sécurité de l'information ; gestion des problèmes | Temps de correction d'un défaut du backlog | Hebdomadaire |
| Conformité des correctifs | Part des actifs visés qui respectent la fenêtre de la politique de correctifs pour leur classe | actifs corrigés dans la fenêtre de la politique / actifs visés qui exigeaient un correctif dans la période | pourcentage | Outils de gestion des postes et des serveurs, registre des actifs | Gestion de la sécurité de l'information ; gestion des mises en production et des déploiements | Dépendances tenues à jour dans la chaîne de livraison | Hebdomadaire |
| Constats critiques en retard | Nombre et âge des constats de priorité critique au-delà de leur échéance de politique | nombre de constats critiques hors échéance ; âge du plus ancien | nombre ; jours | Système de gestion des vulnérabilités | Gestion de la sécurité de l'information ; gestion des risques | Défauts de sécurité dépassant la limite convenue | Hebdomadaire |
| Couverture des balayages | Part des actifs visés évalués dans l'intervalle requis | actifs balayés avec succès dans le dernier intervalle / actifs visés | pourcentage | Rapports de balayage joints au registre des actifs | Gestion de la sécurité de l'information ; gestion des actifs informatiques | Contrôles de la chaîne de livraison exécutés à chaque construction | Hebdomadaire |
| Temps de confinement | Temps entre la détection d'un incident de sécurité confirmé et son confinement | médiane et 85e percentile des heures entre la détection et le confinement | heures | Enregistrements d'incidents | Gestion des incidents ; gestion de la sécurité de l'information | Temps de rétablissement du service après une défaillance | Par incident, revu chaque mois |
| Âge des exceptions de risque | Âge des exceptions de risque acceptées, et part de celles qui dépassent leur date de revue | jours depuis l'approbation ; exceptions dépassant la date de revue / exceptions ouvertes | jours ; pourcentage | Registre des exceptions | Gestion des risques ; gestion de la sécurité de l'information | Revue de la dette technique | Mensuelle |
| Taux de signalement de sécurité | Part des événements suspects signalés par le personnel par rapport aux événements de sécurité confirmés, comme indicateur de la culture de signalement | signalements du personnel dans la période / événements suspects confirmés dans la période, avec tendance au niveau du groupe | ratio | Boîte aux lettres de sécurité, enregistrements d'incidents | Gestion de la sécurité de l'information ; gestion des incidents | Soulever ouvertement les obstacles | Mensuelle |

Énoncez dans le registre les bandes de priorité et les fenêtres de la politique. La fenêtre d'exposition commence quand on sait que la vulnérabilité s'applique à l'actif, soit le plus tardif du moment de la divulgation et de celui où l'on sait que l'actif exécute le composant touché, et elle s'arrête à la remédiation vérifiée ou à une atténuation documentée et limitée dans le temps. Le temps de confinement commence à la détection, non à la première alerte que personne n'a lue. N'excluez les constats de test et les faux positifs qu'après revue. Le taux de signalement de sécurité décrit des groupes et des tendances, jamais des individus.

## Recommandations

### Connaître son parc et son exposition

**1. Partez des enregistrements d'actifs et de dépendances.** Les balayages, les correctifs et la responsabilité dépendent tous de la connaissance de ce qui existe. Reliez chaque constat à un actif, un responsable et un service, et mesurez la couverture des balayages par rapport au registre. Là où la couverture est faible, corrigez cela avant de lire les constats. Un actif non balayé est une inconnue, ce qui est pire qu'une faiblesse connue.

**2. Réduisez d'abord la [surface d'attaque](https://en.wikipedia.org/wiki/Attack_surface).** Retirez ce qui n'est pas nécessaire : services inutilisés, ports ouverts, anciens comptes, environnements oubliés. Tout ce que vous retirez est quelque chose que vous n'avez pas à corriger. Suivez le nombre de services exposés à Internet et de comptes dormants comme indicateurs simples, et revoyez-les avec les responsables.

**3. Incluez votre chaîne d'approvisionnement logicielle.** Les services modernes dépendent de nombreux composants. La [chaîne d'approvisionnement logicielle](https://en.wikipedia.org/wiki/Software_supply_chain) comprend les bibliothèques, les outils de construction, les images de conteneurs et les fournisseurs derrière eux. Employez les nomenclatures logicielles décrites plus tôt pour trouver où un composant vulnérable est utilisé (voir le sujet 7.2, Métriques des actifs logiciels et des licences), et incluez les constats de dépendances dans les mêmes mesures que les constats d'infrastructure.

### Prioriser et corriger

**4. Classez selon le contexte, non selon le seul score de gravité.** Combinez la gravité CVSS avec le fait qu'un exploit soit connu comme employé, que le composant vulnérable soit atteignable et l'importance de l'actif. Les listes publiques de vulnérabilités connues comme exploitées aident pour le premier facteur. Écrivez les règles de classement, revoyez-les et consignez la raison quand un élément de forte gravité est dépriorisé.

**5. Fixez des fenêtres de politique par bande et rapportez-les.** Pour chaque bande de priorité, convenez d'un délai cible de remédiation ou d'atténuation. Rapportez la part dans la fenêtre, la médiane et le 85e percentile de l'exposition, et l'élément ouvert le plus ancien. Les fenêtres sont des cibles de conversation, et les éléments les plus anciens méritent l'attention parce qu'ils montrent où le processus échoue (voir le sujet 1.6, Culture statistique pour les métriques de service).

**6. Traitez les correctifs comme un changement ordinaire et fréquent.** Le processus de correctifs le plus sûr est celui qui tourne souvent et qui est ennuyeux. Des mises à jour petites et fréquentes sont plus faciles à tester et à annuler que de grandes mises à jour rares, et des chaînes automatisées peuvent les appliquer en continu. Employez l'approche de maîtrise des changements pour l'approbation fondée sur le risque, et gardez une voie d'urgence pour les correctifs pressants (voir le sujet 4.3, Métriques de maîtrise des changements).

**7. Rendez les exceptions visibles et de courte durée.** Parfois un correctif n'est pas possible. Consignez une exception avec une raison, un contrôle compensatoire, un responsable et une date de revue, et rapportez l'âge des exceptions. Les exceptions sans dates de revue deviennent permanentes, et les exceptions permanentes deviennent le vrai registre des risques.

### Réagir et apprendre

**8. Exercez la réponse aux incidents.** La [gestion des incidents de sécurité informatique](https://en.wikipedia.org/wiki/Computer_security_incident_management) couvre la préparation, la détection, le confinement, l'éradication, le rétablissement et les leçons apprises. Répétez avec des exercices, consignez le temps de confinement depuis la détection et passez chaque incident significatif en revue sans reproche. La structure du traitement des incidents de sécurité ressemble à celle des incidents majeurs (voir le sujet 3.4, Métriques des incidents majeurs).

**9. Mesurez le confinement, pas seulement la détection.** Les outils de détection produisent des alertes, et la valeur réside dans ce qui se passe ensuite. Suivez le temps que prennent les incidents confirmés à être contenus et rétablis, et quelle part a été trouvée par votre propre supervision plutôt que signalée par des tiers. Une part croissante d'incidents détectés en interne est un signe de meilleure visibilité.

**10. Apprenez des quasi-incidents.** Un courriel d'hameçonnage signalé et bloqué, ou une vulnérabilité trouvée par un collègue avant un attaquant, est une leçon gratuite. Consignez et revoyez ces cas comme un incident, et remerciez la personne qui a signalé. Le taux de signalement de sécurité est un indicateur de santé de cette culture, et il devrait monter avec la confiance.

### Bâtir la culture et la chaîne de livraison

**11. Placez les contrôles là où les développeurs travaillent.** Exécutez l'analyse des dépendances et l'analyse statique dans la construction, donnez le retour dans la demande de fusion et ne faites échouer les constructions que sur les problèmes que l'équipe reconnaît comme bloquants. Un retour rapide et pertinent est corrigé. Un déluge de constats de faible valeur est ignoré. Suivez le temps de correction des constats de la chaîne de livraison, et ajustez les règles avec les équipes (voir le sujet 2.7, Métriques des demandes de fusion et de la revue de code).

**12. Formez et testez sans humilier.** Les exercices de sensibilisation, comme l'hameçonnage simulé, peuvent bâtir des compétences, et ils peuvent aussi abîmer la confiance quand les résultats servent à nommer ou à sanctionner des individus. Ne rapportez que des résultats agrégés, concentrez-vous sur le nombre de personnes qui signalent des messages suspects et expliquez le but. Si un exercice donne au personnel le sentiment d'avoir été piégé, changez-le.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Fenêtre d'exposition | Clore des constats sans vérification ; changer la date de début ; reclasser la gravité | Étape de vérification par quelqu'un d'extérieur à l'équipe qui corrige ; règle de date de début dans le registre ; journal des changements de gravité |
| Conformité des correctifs | Exclure du périmètre les actifs difficiles à corriger ; compter un correctif comme appliqué alors que le système n'a pas été redémarré | Changements de périmètre consignés ; vérifier la version installée sur l'actif, non sur le ticket |
| Constats critiques en retard | Scinder ou fusionner des constats ; rétrograder la gravité | Compter par vulnérabilité et actif uniques ; revoir tous les changements de gravité |
| Couverture des balayages | Balayer un ensemble plus étroit ; compter un balayage qui n'a pas réussi à s'authentifier | Couverture par rapport au registre des actifs ; qualité des balayages (authentifiés, complets) |
| Temps de confinement | Démarrer l'horloge plus tard ; déclarer le confinement trop tôt | L'horloge démarre au premier signal de détection ; vérifier le confinement avec des preuves |
| Âge des exceptions de risque | Renouveler automatiquement les exceptions ; scinder les exceptions pour réduire l'âge | Revoir les renouvellements d'exceptions avec une raison ; plafonner les renouvellements sans nouvelles preuves |
| Taux de signalement de sécurité | Encourager des signalements de faible valeur ; décourager des signalements pour améliorer d'autres chiffres | Qualité des signalements ; lire les commentaires ; sondage pour savoir si les gens se sentent en sécurité pour signaler |

Une lecture saine est une forte couverture des balayages, une queue d'exposition courte et qui rétrécit, des exceptions honnêtes avec des dates de revue, des incidents contenus rapidement et trouvés plus souvent en interne, et un personnel qui vous parle des événements suspects sans crainte.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Priorisation par le seul score de gravité | Simple, cohérente | Ignore le contexte ; envoie l'effort aux mauvais endroits |
| Priorisation fondée sur le contexte | Se concentre sur le risque réel | Exige des données et du jugement |
| Fenêtres de correctifs fixes | Attentes claires | Peut forcer des changements risqués et précipités |
| Fenêtres fondées sur le risque | S'adapte à la situation | Plus difficile à auditer |
| Correctifs automatisés fréquents | Petits changements, moins d'exposition | Exige de bons tests et un retour arrière |
| Rares grands cycles de correctifs | Familier | Exposition plus longue, risque plus grand par changement |
| Simulation d'hameçonnage | Bâtit la sensibilisation | Peut éroder la confiance si mal employée |
| Accent sur la culture de signalement | Fait remonter tôt les problèmes | Difficile à mesurer directement |

La réponse en prose est de classer selon le contexte, de corriger souvent par petites étapes avec un bon retour arrière, de consigner les exceptions avec des échéances et d'investir dans la culture de signalement comme contrôle.

## Questions à discuter avec votre équipe

**1. Quelle part de notre parc nos balayages voient-ils réellement ?**
Comparez les actifs balayés au registre des actifs. Demandez ce qui manque et pourquoi. L'animateur doit chercher les catégories systématiquement non balayées, comme les conteneurs, les appareils distants ou les systèmes tiers. Convenez d'une lacune à combler ce trimestre.

**2. Quel est notre plus ancien constat critique ouvert, et pourquoi est-il encore ouvert ?**
Regardez la queue, non la moyenne. Retracez les quelques plus anciens : qui les détient, ce qui les bloque et quel est le contrôle compensatoire. L'animateur doit demander si l'exception est consignée. Convenez de qui débloquera le plus ancien.

**3. Quand un correctif de sécurité a-t-il causé une panne pour la dernière fois, et qu'est-ce qui a changé ensuite ?**
Rappelez un exemple. La cause était-elle un correctif précipité ou un test manquant ? Discutez de la façon de rendre les correctifs routiniers et sûrs. Reliez la réponse à la pratique de changement et de mise en production.

**4. Si un collègue signalait un courriel suspect aujourd'hui, que lui arriverait-il ?**
Décrivez le vrai chemin du signalement à la réponse, y compris la façon dont la personne qui signale est remerciée. Demandez si quelqu'un a été embarrassé d'avoir signalé ou cliqué. La conversation porte sur la confiance. Convenez d'un petit changement qui rend le signalement plus facile ou plus sûr.

**5. Lesquels de nos chiffres de sécurité pourraient monter alors que nous devenons moins sûrs ?**
Listez les mesures et pensez à la manière dont chacune pourrait être améliorée en rétrécissant le périmètre ou en réétiquetant. Attribuez un garde-fou à chacune. Cet exercice bâtit l'entrée du registre pour la prochaine revue.

**6. À quelle vitesse pouvons-nous contenir un incident confirmé, et comment le savons-nous ?**
Passez en revue les deux derniers incidents et retracez la détection jusqu'au confinement. Notez les retards. Demandez quels exercices nous avons menés. Convenez d'en mener un avant la prochaine revue.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison font la plupart des corrections et introduisent bien des faiblesses. Elles devraient garder les dépendances à jour dans le flux normal, traiter les constats de sécurité comme des éléments de backlog avec des responsables et des dates, et employer des contrôles de chaîne de livraison qui donnent un retour rapide et pertinent. Elles ont besoin de priorités claires et du temps d'agir, et elles devraient pouvoir exprimer librement leurs inquiétudes.

### Équipes de service et d'exploitation

Les équipes d'exploitation gèrent les outils de balayage, appliquent les correctifs et répondent aux incidents. Elles devraient garder les liens d'actifs à jour, rapporter honnêtement la couverture et traiter les exceptions avec des échéances. Elles ont aussi besoin de temps protégé pour répéter la réponse aux incidents, et d'une culture sans reproche quand des erreurs se produisent.

### Direction et gouvernance

Les dirigeants fixent l'appétit pour le risque et décident si la sécurité est financée comme une activité continue ou comme un projet. Ils devraient demander les fenêtres d'exposition et les plus anciens éléments ouverts plutôt que des totaux, protéger la culture de signalement et accepter que les chiffres montent quand la visibilité s'améliore. La gouvernance devrait exiger des preuves pour les exceptions et pour l'apprentissage des incidents.

### Clients et utilisateurs

Les utilisateurs sont à la fois des bénéficiaires et une ligne de défense. Ils veulent des services qui protègent leurs données, et ils veulent des consignes claires et justes. On devrait les informer rapidement quand un incident les touche, les traiter avec respect quand ils signalent des problèmes et leur donner des mesures de sécurité qui ne compliquent pas leur travail plus que nécessaire (voir le sujet 6.4, Expérience des utilisateurs et des employés).

## En pratique : un exemple d'ITIL agile

Une caisse de crédit régionale exploite des services bancaires en ligne, une application mobile et des systèmes d'agence avec une petite équipe d'ingénierie et un service de centre d'opérations de sécurité externalisé. Les chiffres ci-dessous sont illustratifs.

Le conseil d'administration demande un tableau de bord de sécurité. La première ébauche de l'analyste de sécurité montre 4 200 vulnérabilités ouvertes en baisse, et 96 pour cent de conformité des correctifs. Le chef de l'ingénierie interroge sur la couverture des balayages. En joignant la sortie de l'outil de balayage au registre des actifs, l'analyste constate que 31 pour cent des serveurs et presque tous les conteneurs n'ont pas été balayés au cours des 30 derniers jours, parce que l'outil avait perdu ses identifiants après une migration. Parmi les actifs balayés, la fenêtre d'exposition médiane pour les vulnérabilités critiques est de 9 jours, et le 85e percentile de 41 jours. Le plus ancien constat critique a 212 jours, sur un système hérité dont l'exception avait expiré quatre mois plus tôt. La conformité des correctifs de 96 pour cent n'a été calculée que sur les actifs que l'outil de correctifs avait signalés.

L'équipe apporte quatre changements avec l'ingénierie et l'exploitation. La couverture des balayages devient la première ligne du tableau de bord, avec l'objectif d'atteindre la couverture complète du registre, et l'authentification du balayage est réparée et surveillée. La priorisation ajoute l'état d'exploitation et l'importance de l'actif au score de gravité, de sorte que les 4 200 constats se réduisent à une courte liste d'environ 60 qui comptent maintenant. Les mises à jour de dépendances passent dans la chaîne de livraison comme des changements petits et fréquents avec des tests automatisés. Les exceptions reçoivent un responsable, un contrôle compensatoire et une date de revue, et celle qui avait expiré est revue par le comité des risques. L'analyste de sécurité change aussi la façon de rapporter les résultats de l'hameçonnage simulé : seul le taux de signalement au niveau du groupe est montré, et l'analyste remercie personnellement les collègues qui signalent.

Deux mois plus tard, la couverture des balayages est de 97 pour cent, la fenêtre d'exposition au 85e percentile pour les éléments critiques est de 14 jours, et le plus ancien constat critique est une exception atténuée à 60 jours de sa revue. Un courriel suspect de demande de paiement est signalé par une employée d'agence en quelques minutes, et l'incident est contenu en moins de deux heures. Le conseil demande que le nombre de vulnérabilités ouvertes soit réduit de moitié d'ici la fin de l'année. Le chef de l'ingénierie suggère de rapporter plutôt la fenêtre d'exposition et les constats critiques en retard, expliquant qu'un décompte peut baisser en balayant moins. La décision est consignée, et le conseil accepte de revoir les nouvelles mesures à la prochaine réunion.

## Perspective sectorielle

**Startup.** Il n'y a généralement pas d'équipe de sécurité dédiée ; intégrez donc les bases à la chaîne de livraison : mises à jour de dépendances, balayage des secrets, authentification multifacteur et moindre privilège. Suivez la fenêtre d'exposition pour une courte liste de systèmes critiques et ayez un plan d'incident simple. Résistez à l'achat d'un grand ensemble d'outils avant de connaître votre parc.

**Petite entreprise.** Les services externalisés et les outils en nuage portent l'essentiel du risque. Tenez un inventaire, activez l'authentification multifacteur partout, gardez les systèmes à jour automatiquement et sachez qui appeler en cas d'incident. Mesurez la conformité des correctifs et le temps de restauration des sauvegardes. Évitez d'humilier le personnel qui signale des erreurs.

**Grande entreprise.** L'échelle exige des données cohérentes entre de nombreuses équipes et de nombreux outils. Définissez les bandes de priorité et les fenêtres de façon centrale, laissez les équipes détenir leurs constats, rapportez l'exposition par service métier et menez des exercices réguliers. Coordonnez-vous avec les équipes de sécurité des fournisseurs et testez les transferts.

**Gouvernement et secteur public.** Les secteurs font souvent face à des directives obligatoires avec des échéances pour des vulnérabilités précises, à des obligations formelles de signalement des incidents et à des exigences d'audit. Traitez-les comme des intrants de conception : suivez la conformité aux échéances des directives, gardez les preuves et signalez les incidents comme exigé tout en protégeant la vie privée des individus (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

Les coûts sont l'outillage de balayage et de supervision, qui peut déjà être possédé ; le temps d'entretenir les liens d'actifs ; le temps d'ingénierie pour corriger les constats et mettre à jour les dépendances ; la préparation et les exercices de réponse aux incidents ; et la formation. Les contrôles de la chaîne de livraison coûtent du temps de mise en place et un peu de temps de construction. La supervision externalisée a des frais de service.

Le retour est une probabilité et un impact plus faibles des incidents, une exposition plus courte et moins de changements d'urgence précipités. Ces bénéfices sont réels et difficiles à quantifier, car l'incident qui n'a pas eu lieu ne laisse aucune trace. Évitez de citer des coûts moyens de violations ou des fréquences d'incidents du secteur à moins de pouvoir retracer la source et sa pertinence. Bâtissez le dossier à partir de vos propres données : la tendance de la fenêtre d'exposition, le nombre de changements d'urgence causés par des correctifs tardifs, le temps passé au travail manuel de correctifs que l'automatisation a supprimé et le coût de vos incidents passés, y compris le temps du personnel et l'impact sur les clients. Décrivez la réduction du risque en termes de scénarios précis, comme le suggère le sujet précédent sur les dossiers d'affaires (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Rapporter des décomptes de vulnérabilités.** Les décomptes baissent quand les balayages manquent des choses. Rapportez la fenêtre d'exposition, les éléments en retard et la couverture.
- **Prioriser par le seul score de gravité.** Il ignore l'atteignabilité et l'exploitation. Ajoutez le contexte.
- **Traiter le balayage comme la vérité.** Vérifiez la couverture et la qualité des balayages par rapport au registre des actifs.
- **Exceptions permanentes.** Elles deviennent un risque caché. Donnez à chaque exception un responsable et une date de revue.
- **Humilier les gens pour leurs erreurs.** Les signalements cessent. Employez la revue sans reproche et des résultats agrégés.
- **La sécurité comme porte à la fin.** Elle ralentit la livraison et invite aux contournements. Intégrez les contrôles à la chaîne de livraison.
- **Cycles de correctifs en bloc.** Ils sont risqués et lents. Corrigez souvent par petits changements.
- **Ignorer les fournisseurs.** Leurs faiblesses sont les vôtres. Suivez les obligations de sécurité et les incidents des fournisseurs.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Visibilité | Balayages occasionnels de certains systèmes | Balayages réguliers des principaux systèmes | Couverture des balayages suivie par rapport au registre des actifs ; constats reliés à des responsables | Couverture, fenêtres d'exposition et exceptions gérées et suivies en tendance | Vue partagée entre équipes et fournisseurs, y compris les dépendances |
| Priorisation et correction | Corriger selon la demande la plus bruyante | Listes fondées sur la gravité | Classement fondé sur le contexte ; fenêtres de politique par bande ; petits correctifs fréquents | Fenêtres et queue revues ; contrôles de la chaîne de livraison ajustés avec les équipes | Remédiation automatisée et fondée sur le risque sous supervision humaine |
| Réponse et culture | Réponse improvisée ; blâme | Plan de base, rarement testé | Plan répété ; revue sans reproche ; signalement valorisé | Temps de confinement et taux de détection interne gérés ; culture de signalement mesurée | Exercices conjoints avec fournisseurs et clients ; apprentissage largement partagé |

## Liste de vérification

- [ ] La couverture des balayages est mesurée par rapport au registre des actifs.
- [ ] Les constats sont reliés à un actif, un responsable et un service.
- [ ] Les bandes de priorité combinent la gravité, l'exploitation, l'atteignabilité et l'importance de l'actif.
- [ ] Les fenêtres de politique par bande sont convenues, et la fenêtre d'exposition et l'élément ouvert le plus ancien sont rapportés.
- [ ] Les contrôles de dépendances et de chaîne de livraison s'exécutent à chaque construction, avec des bloquants convenus.
- [ ] Les correctifs sont appliqués comme des changements fréquents, petits et testés, avec une voie d'urgence.
- [ ] Les exceptions ont un responsable, un contrôle compensatoire et une date de revue.
- [ ] La réponse aux incidents est répétée, et le temps de confinement est mesuré depuis la détection.
- [ ] Les données de comportement humain ne sont rapportées qu'en agrégat, et le signalement est remercié.
- [ ] Les obligations de sécurité et les incidents des fournisseurs sont suivis.

## Prompts d'IA

**Revoyez une règle de priorisation des vulnérabilités.**

```text
Notre règle actuelle de priorisation des vulnérabilités est : [describe]. Nos
champs de données comprennent : [list, for example severity score, exploit
status, asset importance, internet exposure]. Examinez la règle pour y trouver
des angles morts et des moyens de la détourner, et proposez un classement fondé
sur le contexte avec des bandes claires et des fenêtres de politique. N'énoncez
pas de chiffres précis comme des normes du secteur. Énumérez vos hypothèses et
ce qu'un spécialiste de la sécurité devrait confirmer.
```

**Vérifiez la couverture des balayages.**

```text
Voici un résumé de notre registre des actifs par classe et des actifs vus par
notre outil de balayage dans le dernier [interval] : [paste counts or sanitized
lists]. Repérez les classes à faible couverture, les raisons probables des
lacunes et les vérifications les plus rapides pour confirmer chaque raison.
Suggérez comment rapporter la couverture pour qu'un balayage échoué ou partiel
n'ait pas l'air d'un succès. Énumérez vos hypothèses.
```

**Planifiez un exercice sur table.**

```text
Concevez un exercice sur table de 90 minutes pour [type of organization] sur ce
scénario : [describe, for example a compromised supplier credential]. Incluez
les rôles, une chronologie d'injections, les décisions à provoquer, ce qu'il
faut consigner (y compris le temps de détection et de confinement) et des
questions pour un débriefing sans reproche. N'incluez ni noms réels ni systèmes
réels. Énumérez vos hypothèses et ce qu'il faut adapter à notre contexte.
```

**Rédigez un message sans reproche pour une erreur signalée.**

```text
Un collègue a signalé qu'il a [describe, for example clicked a link in a
phishing email]. Rédigez une courte réponse aimable de l'équipe de sécurité qui
le remercie, explique ce que nous ferons et demande les détails dont nous avons
besoin. Rédigez ensuite une note agrégée pour la mise à jour hebdomadaire qui
partage la leçon sans nommer personne. Énumérez vos hypothèses et les choix de
ton que je devrais revoir.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le garde-fou associé à une métrique de sécurité ou de vulnérabilité.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'une entrée de métrique de sécurité porte son vecteur de détournement, son garde-fou et ses règles de confidentialité.

## Points clés à retenir

- Mesurez le temps d'exposition, les plus anciens éléments ouverts et la couverture des balayages, non les décomptes bruts de constats.
- Priorisez selon le contexte : gravité, exploitation, atteignabilité et importance de l'actif.
- Corrigez souvent par changements petits et testés, et donnez à chaque exception un responsable et une date de revue.
- Contenez rapidement les incidents, apprenez sans reproche et suivez la détection interne.
- Traitez la culture de signalement comme un contrôle : remerciez ceux qui signalent, et ne classez jamais des individus.
- Intégrez les contrôles de sécurité à la chaîne de livraison pour que les choix sûrs soient les choix faciles.

## Références et lectures complémentaires

1. National Institute of Standards and Technology, *Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology*, NIST Special Publication 800-40 Revision 4, 2022.
2. National Institute of Standards and Technology, *Computer Security Incident Handling Guide*, NIST Special Publication 800-61 (latest revision).
3. Forum of Incident Response and Security Teams, *Common Vulnerability Scoring System*, specification (latest version), https://www.first.org/cvss/.
4. Cybersecurity and Infrastructure Security Agency, *Known Exploited Vulnerabilities Catalog*, https://www.cisa.gov/known-exploited-vulnerabilities-catalog.
5. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Vulnerability (computing)](https://en.wikipedia.org/wiki/Vulnerability_(computing)).
9. Wikipedia, [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps).
10. Wikipedia, [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System).
11. Wikipedia, [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Attack surface](https://en.wikipedia.org/wiki/Attack_surface).
14. Wikipedia, [Software supply chain](https://en.wikipedia.org/wiki/Software_supply_chain).
15. Wikipedia, [Computer security incident management](https://en.wikipedia.org/wiki/Computer_security_incident_management).
