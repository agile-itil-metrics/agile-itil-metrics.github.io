# Métriques de flux de valeur

**Mesurez un flux de valeur de bout en bout, séparez chaque étape en temps où le travail est touché et temps où il attend, et comptez combien arrive utilisable, car les plus grands retards et les plus grandes reprises d'une organisation de services se situent entre les équipes, non à l'intérieur.**

## Résumé et motivation

La plupart des équipes mesurent leur propre étape. Le centre de services rapporte les tickets clos, une équipe de développement rapporte les récits terminés, un comité des changements rapporte les changements approuvés. Chaque chiffre peut paraître sain tandis que la personne qui a demandé quelque chose attend des semaines. La raison est structurelle : dans une demande typique, l'essentiel du temps écoulé se passe dans des files et des transmissions, et aucune équipe ne détient ce temps.

Un [flux de valeur](https://en.wikipedia.org/wiki/Value_stream) est la séquence d'étapes par laquelle une demande devient de la valeur livrée. La [cartographie du flux de valeur](https://en.wikipedia.org/wiki/Value-stream_mapping) est la technique, développée au sein de la [production au plus juste](https://en.wikipedia.org/wiki/Lean_manufacturing) (lean) puis appliquée aux bureaux, aux hôpitaux et au logiciel, qui consiste à dessiner chaque étape depuis le début d'un processus jusqu'au client et à consigner le temps et le volume à chaque étape. La carte est une image de l'état actuel, suivie d'une image d'un meilleur état futur. Les chiffres de la carte sont le sujet de ce sujet.

Deux vocabulaires se rencontrent ici. Dans ITIL 4, la quatrième édition de l'Information Technology Infrastructure Library, un flux de valeur est une combinaison spécifique d'activités de la chaîne de valeur du service [ITIL](https://en.wikipedia.org/wiki/ITIL) (planifier, améliorer, impliquer, concevoir et faire la transition, obtenir et construire, fournir et soutenir) agencées pour créer un produit ou un service particulier. Des exemples sont « rétablir le service après un incident » et « livrer un changement de l'idée à la production ». ITIL vous dit ce qu'est un flux et qui doit y être associé. Le lean vous dit comment le mesurer. L'équivalent agile est la circulation des éléments de travail sur un tableau, que les équipes qui gèrent le flux suivent déjà avec des mesures comme le temps de cycle (voir le sujet 2.1, Mesures de flux).

Les mesures lean sont peu nombreuses. Le **délai de livraison** est le temps écoulé total entre le moment où une demande est faite et celui où elle est livrée. Le **temps de traitement**, parfois appelé temps de travail effectif, est le temps pendant lequel quelqu'un travaille réellement sur l'élément. Le **temps d'attente** est le temps pendant lequel l'élément reste entre deux travaux actifs, dans une file, une approbation ou une transmission. Le **pourcentage complet et exact (%C/E)** est la part des éléments que l'étape suivante peut utiliser tels que reçus, sans avoir à les corriger, les compléter ou les renvoyer. Le **temps takt** est le rythme auquel le flux doit terminer des éléments pour répondre à la demande des clients, calculé comme le temps de travail disponible divisé par le nombre d'éléments demandés dans ce temps. Le rapport entre le temps de traitement et le délai de livraison est l'**efficacité du processus**, que ce livre traite comme la forme de flux de valeur de l'efficacité du flux (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux).

Deux relations rendent les chiffres utiles ensemble. Premièrement, le [délai de livraison](https://en.wikipedia.org/wiki/Lead_time) est la somme du temps de traitement et du temps d'attente sur chaque étape ; un flux avec un délai de livraison de semaines et un temps de traitement de jours est donc surtout de la file. La [loi de Little](https://en.wikipedia.org/wiki/Little%27s_law) relie cette file au travail en cours et au débit, ce qui explique pourquoi le sujet 2.3 (Travail en cours et théorie des files d'attente) en est le compagnon naturel. Deuxièmement, le %C/E se compose. Un flux de cinq étapes dont chacune transmet proprement 90 pour cent de sa sortie ne livre un résultat propre qu'environ 59 pour cent du temps, un produit connu dans l'industrie sous le nom de [rendement global de passage](https://en.wikipedia.org/wiki/Rolled_throughput_yield). Les rapports d'étape disent tous 90 pour cent. Le flux dit quelque chose de bien moins confortable.

## Principes clés

- **Partir de la demande du client et finir à l'usage du client.** Un flux mesuré de « travail démarré » à « travail fusionné » cache l'attente aux deux bouts, qui est souvent la partie la plus longue.
- **Séparer le temps de travail effectif du temps d'attente à chaque étape.** Une durée d'étape unique mêle les deux et envoie l'effort d'amélioration au mauvais endroit. L'attente est généralement une propriété de conception du flux, non un défaut d'effort.
- **Mesurer la qualité comme complétude et exactitude, autant que la vitesse.** Une étape rapide qui renvoie du travail est lente aux yeux du flux, car la reprise consomme de la capacité et ajoute de l'attente.
- **Cartographier un flux et une classe d'éléments à la fois.** Une carte qui mélange changements d'urgence et demandes courantes produit une moyenne qui ne décrit ni l'un ni l'autre.
- **Rapporter des distributions et montrer l'échantillon.** Le délai de livraison et le temps d'attente sont asymétriques ; montrez donc la médiane et un percentile élevé, et dites combien d'éléments et quelle période (voir le sujet 1.6, Culture statistique pour les métriques de service).
- **Décrire des flux, jamais des personnes.** Les métriques d'étape identifient où le travail attend. Elles ne sont jamais un classement des individus ou des équipes de chaque étape.

## Définitions des métriques

Les métriques ci-dessous sont définies pour un flux de valeur nommé et une classe de travail. Les comptages d'éléments excluent les éléments annulés sauf indication contraire. Le temps de traitement et le temps d'attente sont rapportés pour chaque étape et additionnés pour le flux.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Délai de livraison du flux de valeur | Temps écoulé entre la demande du client et le moment où le client peut utiliser le résultat | heure de confirmation de livraison moins heure à laquelle la demande a été enregistrée ; les éléments annulés ou retirés sont exclus ; rapportez la médiane et les 85e et 95e percentiles | jours | Enregistrements de l'outil ITSM joints aux événements de livraison de la chaîne ou du système d'exécution | Gestion des demandes de service ; maîtrise des changements | Délai de livraison sur le tableau de l'équipe | Mensuelle |
| Temps de traitement | Temps pendant lequel un élément est activement travaillé, par étape et pour le flux | somme des intervalles pendant lesquels l'élément est dans un état actif, par étape ; les états de file, d'attente d'approbation et de blocage sont exclus | heures ou jours | Historique des états du gestionnaire de tickets ; relevés de temps là où les états sont trop grossiers | Gestion des incidents ; gestion des demandes de service | Temps de cycle dans les colonnes « en cours » | Mensuelle |
| Temps d'attente | Temps pendant lequel un élément reste entre deux travaux actifs, par étape et pour le flux | temps écoulé de l'étape moins le temps de traitement de cette étape ; inclut les files, les approbations, les transmissions et le temps bloqué | jours | Historique des états du gestionnaire de tickets et changements d'état de l'outil ITSM | Maîtrise des changements ; centre de services | Temps dans les colonnes de file ; temps bloqué | Mensuelle |
| Efficacité du processus | Part du délai de livraison qui est du temps de traitement | somme des temps de traitement sur les étapes / délai de livraison du flux de valeur pour les mêmes éléments ; les éléments encore ouverts sont exclus | pourcentage | Dérivée du temps de traitement et du délai de livraison | Amélioration continue | Efficacité du flux | Trimestrielle |
| Pourcentage complet et exact (étape) | Part des éléments qu'une étape reçoit et qu'elle peut utiliser sans correction, complément ni renvoi | éléments acceptés tels que reçus / éléments reçus dans la période ; les éléments renvoyés pour quelque raison que ce soit comptent comme non acceptés | pourcentage | Événements de renvoi et de réouverture du gestionnaire de tickets ou de l'outil ITSM ; revues d'acceptation par échantillon | Gestion des demandes de service ; maîtrise des changements ; gestion des problèmes | Définition de prêt ; taux de reprise | Mensuelle |
| Pourcentage complet et exact cumulé | Part des éléments qui passent proprement toutes les étapes | produit des valeurs de %C/E d'étape pour un flux et une période (par exemple 0,90 x 0,85 x 0,95) ; les étapes hors du flux sont exclues | pourcentage | Dérivée des valeurs d'étape | Amélioration continue | Défauts échappés et taux de reprise sur une chaîne | Trimestrielle |
| Nombre de transmissions | Nombre de fois qu'un élément passe entre des équipes ou des files | nombre de changements d'équipe ou de file responsable de la demande à la livraison, par élément ; rapportez la médiane et le 85e percentile | nombre | Historique d'affectation de l'outil ITSM ou du gestionnaire de tickets | Centre de services ; gestion des demandes de service | Dépendances entre équipes | Trimestrielle |
| Ratio de temps takt | Si le rythme du flux correspond à la demande | intervalle observé médian entre achèvements / temps takt, où le temps takt est le temps de travail disponible divisé par les éléments demandés dans la même période ; un ratio supérieur à 1 signifie que le flux est plus lent que la demande | ratio | Comptage de la demande de la file d'accueil et événements d'achèvement | Gestion de la capacité et de la performance ; gestion des niveaux de service | Débit au regard de la demande ; prévision | Trimestrielle |

Le temps de traitement, le temps d'attente et les délais de livraison d'étape sont des sommes et des ratios sur le même ensemble d'éléments ; ils sont donc calculés à partir d'enregistrements au niveau des éléments et jamais en additionnant des moyennes d'étape mesurées sur des échantillons différents. Le temps takt s'applique mieux au travail répétable comme les demandes standard et les changements courants, et convient mal au travail où chaque élément est unique.

## Recommandations

### Choisir le flux

**1. Choisissez un flux de valeur important et une classe d'éléments, et nommez ses frontières.** Les bons premiers candidats sont un type de demande à fort volume, comme le provisionnement d'accès ou de matériel, ou le parcours d'un changement normal de l'approbation à la mise en production. Écrivez le déclencheur qui démarre l'horloge et l'événement qui confirme la livraison au client. Si vous ne pouvez pas énoncer chacun en une phrase, le flux n'est pas encore défini (voir le sujet 3.5, Métriques de traitement des demandes de service).

**2. Démarrez l'horloge à la demande du client et arrêtez-la à l'usage du client.** Un flux qui démarre quand une équipe accepte le travail et s'arrête quand l'équipe le marque terminé exclut la file d'accueil et le retard de confirmation. Ce sont fréquemment les attentes les plus longues. Si les données pour les vraies frontières ne sont pas encore capturées, rapportez la mesure plus étroite avec un libellé honnête et planifiez l'instrumentation (voir le sujet 1.5, Sources de données et instrumentation).

### Cartographier l'état actuel

**3. Parcourez le flux avec les personnes qui font le travail.** Menez une séance de cartographie avec un représentant de chaque étape, y compris du côté du client. Dessinez les étapes telles qu'elles se déroulent réellement, puis comparez avec le processus documenté. Les écarts entre les deux sont des constats en eux-mêmes. La méthode est décrite dans *Learning to See* de Rother et Shook et dans *Value Stream Mapping* de Martin et Osterling.

**4. Consignez le temps de traitement et le temps d'attente de chaque étape à partir d'éléments réels.** Prenez un échantillon d'éléments récents, 20 ou plus si le volume le permet, et suivez chacun dans le flux à l'aide de l'historique du gestionnaire de tickets et, si nécessaire, d'une conversation. Consignez le temps de travail effectif et l'attente avant chaque étape. Traitez l'échantillon comme une estimation et dites comment il a été tiré. Recommencez la cartographie quand le flux change assez pour l'invalider.

**5. Montrez l'attente comme sa propre barre.** Sur la carte et le tableau de bord, dessinez le temps de traitement et le temps d'attente comme des segments séparés pour chaque étape. Une étape avec 30 minutes de temps de traitement et quatre jours d'attente ne ressemble en rien à une étape avec quatre jours de temps de traitement, bien que la durée de l'étape soit identique.

### Mesurer la qualité le long du flux

**6. Mesurez le %C/E à la transmission, défini par l'étape réceptrice.** L'équipe réceptrice décide de ce que veut dire « utilisable tel que reçu », idéalement dans une courte condition d'acceptation écrite. Comptez un renvoi, une demande d'information manquante ou une correction silencieuse comme non accepté. La correction silencieuse est la fuite la plus courante, parce que le travail est réparé sans que personne consigne qu'il était cassé.

**7. Calculez le %C/E cumulé et comparez-le aux valeurs d'étape.** Multipliez les valeurs d'étape. L'écart entre le chiffre cumulé et l'étape qui paraît la meilleure est l'effet de composition de la reprise, et il plaide souvent mieux pour corriger une transmission que n'importe quelle mesure de vitesse. Reliez-le aux mesures de reprise et d'échec de changement du même flux (voir le sujet 4.4, Échecs de changement et reprises).

### Se servir des chiffres pour décider

**8. Améliorez d'abord la plus grande attente, et cherchez sa cause dans l'interface.** Classez les étapes par temps d'attente, puis demandez ce que l'élément en attente attend : une décision, une personne, un lot, un créneau planifié ou une entrée manquante. Demandez ensuite si cette attente est nécessaire. La [théorie des contraintes](https://en.wikipedia.org/wiki/Theory_of_constraints) soutient que le rythme du flux est fixé par son étape la plus étroite ; améliorer une étape qui n'est pas la contrainte change donc peu de chose. Les attentes d'approbation dans la maîtrise des changements en sont un cas fréquent (voir le sujet 4.3, Métriques de maîtrise des changements).

**9. Réduisez les transmissions avant d'optimiser les étapes.** Chaque transmission ajoute une file, un changement de contexte et une chance d'information incomplète. Comptez les transmissions, puis testez si une étape peut être combinée, une décision déléguée à l'équipe qui fait le travail ou une demande standard préautorisée. ITIL 4 décrit les changements standard comme des changements préautorisés à faible risque, ce qui est exactement ce geste appliqué au flux des changements.

**10. Comparez la demande et le rythme au temps takt, pour le travail répétable seulement.** Calculez le temps takt à partir des données de demande réelles de la période, puis comparez-le à l'intervalle auquel le flux termine réellement des éléments. Un flux plus lent que le takt fait grandir une file, et la loi de Little vous dit à peu près à quelle vitesse. Un flux bien plus rapide que le takt a une marge qui pourrait être réorientée. N'employez pas le temps takt pour fixer des objectifs à des individus.

### Garder la mesure honnête

**11. Joignez les données entre outils, et dites ce qui est estimé.** Le flux traverse généralement l'outil ITSM, le gestionnaire de tickets et la chaîne. Joignez sur un identifiant d'élément, documentez la règle de jointure et marquez quelles étapes proviennent d'événements système et lesquelles de l'échantillonnage. Une estimation étiquetée comme telle est bien plus utile qu'un chiffre d'apparence précise d'origine inconnue.

**12. Revoyez la carte chaque trimestre, et lisez des éléments bruts à chaque fois.** Les flux dérivent à mesure que les équipes se réorganisent et que les outils changent. Mettez la carte et une décision à l'ordre du jour d'une revue permanente où chaque étape est représentée (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Délai de livraison du flux de valeur | Démarrer l'horloge plus tard, par exemple au tri plutôt qu'à la demande ; clore des éléments avant que le client puisse les utiliser ; fractionner une demande en plusieurs petites | Règles d'horloge fixes écrites dans le registre des métriques ; confirmation de livraison par le client ; compte des éléments rouverts et des éléments enfants liés |
| Temps de traitement | Consigner des états inactifs ou bloqués comme actifs pour que le temps de traitement monte et que le flux paraisse efficace ; ou consigner des attentes comme du travail pour paraître occupé | Observation d'un échantillon d'éléments ; temps de traitement comparé aux relevés de temps là où ils existent ; définitions d'états revues avec l'équipe |
| Temps d'attente | Déplacer l'attente vers un état non suivi, comme une conversation à part, un tableur ou un statut « en suspens » qui arrête l'horloge | Rapporter l'usage des statuts de pause et de blocage ; comparer l'âge du ticket avec les horodatages d'étape ; échantillonner des éléments pour y chercher des attentes hors système |
| Efficacité du processus | Raccourcir le délai de livraison par un traitement accéléré des éléments mesurés, ou gonfler le temps de traitement pour relever le ratio | Montrer le délai de livraison et le temps de traitement à côté du ratio ; rapporter la part accélérée ; ne jamais fixer d'objectif au ratio lui-même |
| Pourcentage complet et exact (étape) | L'étape réceptrice abaisse son seuil d'acceptation pour que moins d'éléments soient renvoyés, ou l'étape émettrice fait passer le travail par des contournements informels | Condition d'acceptation écrite ; comptes de défauts et de reprises en aval ; échantillon d'éléments acceptés revu par un tiers |
| Pourcentage complet et exact cumulé | Fusionner des étapes pour que les renvois se produisent à l'intérieur d'une étape et disparaissent du compte des transmissions ; choisir une liste d'étapes favorable | Fixer la liste d'étapes à l'avance ; rapporter les changements d'étapes dans le journal des décisions ; comparer au taux de reprise de tout le flux |
| Nombre de transmissions | Réaffecter des éléments à une file partagée ou à un responsable fourre-tout pour éviter des changements de responsable comptés ; cacher des transmissions dans une seule « équipe » qui en couvre plusieurs | Compter par file et par rôle ; lire l'historique d'affectation d'éléments échantillonnés ; suivre le nombre de réaffectations par élément |
| Ratio de temps takt | Compter la demande différée ou rejetée comme non demandée ; compter les achèvements partiels comme des achèvements | Rapporter la demande, la demande rejetée et l'âge du backlog à côté du ratio ; ne compter les achèvements que si le client confirme |

Une lecture saine montre un délai de livraison et un temps de traitement plausibles au regard de l'échantillon, un temps d'attente qui est visiblement la plus grande part et diminue peu à peu, des valeurs de %C/E appuyées par une condition d'acceptation écrite et des transmissions qui ne baissent que lorsqu'une vraie décision ou étape a été supprimée. Si le délai de livraison s'améliore pendant que le %C/E cumulé baisse, le flux fait passer le travail plus vite en déplaçant le coût en aval, ce qui est le schéma que les garde-fous existent pour attraper (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Cartographie en atelier avec un échantillon | Rapide, montre tout le flux, bâtit une compréhension partagée entre équipes | Un instantané qui vieillit vite ; biais d'échantillon ; dépend de participants honnêtes |
| Mesure automatisée à partir des événements d'outils | Continue, objective, soutient les percentiles et les tendances | Ne voit que ce que les outils consignent ; les attentes hors système et les corrections silencieuses sont invisibles |
| Frontières de bout en bout côté client | Reflète l'expérience ; expose les retards d'accueil et de confirmation | Exige des données de plusieurs systèmes et un identifiant d'élément partagé |
| Temps takt et comparaison avec la demande | Relie le rythme à la demande réelle ; rend la croissance de la file prévisible | Faible pour le travail unique et non répétable ; exige des comptages de demande fiables |
| %C/E cumulé | Montre comment la reprise se compose à travers les transmissions | Exige un accord sur les conditions d'acceptation ; facile de se disputer sur les définitions |

Utilisez l'atelier de cartographie pour apprendre la forme du flux et la mesure automatisée pour le surveiller. Employez les mesures aux frontières d'équipe comme intrants et les mesures aux frontières du client comme verdict. Le coût de l'approche est la conversation entre équipes qu'elle impose, qui est aussi son principal bénéfice.

## Questions à discuter avec votre équipe

**1. Où l'horloge du client démarre-t-elle et s'arrête-t-elle dans notre demande la plus courante, et notre rapport concorde-t-il ?**
Choisissez un type de demande et tracez-le sur un tableau blanc depuis le moment où le client demande jusqu'au moment où il peut utiliser le résultat. Marquez où notre rapport actuel commence et cesse de compter. L'animateur doit chercher l'écart à chaque bout, car les files d'accueil et les retards de confirmation sont couramment laissés de côté. Convenez de changer le rapport ou de l'étiqueter comme une vue partielle.

**2. Pour chaque étape de notre flux, quelle part du temps écoulé est du travail sur l'élément ?**
Prenez cinq éléments récents et reconstituez l'historique de chacun. Estimez le temps de travail effectif et l'attente de chaque étape, et comparez les totaux. La plupart des groupes sont surpris de voir combien peu du temps écoulé est du travail. Demandez ce qu'attend chaque longue attente, et résistez à la première réponse, qui est généralement « les gens sont occupés ». Notez quelles attentes ressemblent à des choix de conception plutôt qu'à des limites de capacité.

**3. De quoi l'étape suivante a-t-elle besoin de notre part, et comment saurions-nous que cela manquait ?**
Demandez à un représentant de l'étape réceptrice d'énoncer la condition d'acceptation en mots simples. Comparez avec ce que l'étape émettrice croit fournir. Comptez les fois du dernier mois où le travail a été renvoyé, complété par quelqu'un d'autre ou corrigé en silence. La discussion produit souvent une petite liste de contrôle qui supprime un renvoi récurrent.

**4. Quelles transmissions existent par histoire plutôt que par nécessité ?**
Listez les transmissions de la carte et demandez pourquoi chacune existe. Certaines sont réelles : une compétence, un contrôle, une séparation des tâches. D'autres persistent parce qu'une frontière d'équipe a été tracée il y a des années. Choisissez une transmission à supprimer, déléguer ou préautoriser, et nommez qui doit donner son accord.

**5. Si nous améliorions l'étape dont tout le monde se plaint, le client le remarquerait-il ?**
Comparez l'étape qui attire le plus l'attention avec l'étape qui détient la plus longue attente. La théorie des contraintes suggère qu'améliorer une non-contrainte change peu de chose pour le client. Demandez ce qui devrait être vrai pour que l'étape la plus bruyante soit aussi la plus lente. L'animateur doit aider le groupe à convenir de la manière de tester la réponse avec des données.

**6. Comment quelqu'un pourrait-il faire paraître ce flux meilleur sans l'améliorer ?**
Parcourez le tableau des vecteurs de détournement avec le groupe. Pour chaque métrique, demandez ce qu'une personne sous pression pourrait faire et ce que l'équipe verrait si elle le faisait. Convenez de la lecture de garde-fou qui sera revue à chaque fois et de qui en est responsable. Le but est une habitude partagée de vérification, non une chasse aux coupables.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison voient généralement bien leurs propres étapes et mal le flux. Une vue en flux de valeur leur montre combien de temps un changement terminé attend une revue, une approbation, un créneau de version ou une fenêtre de déploiement, et quelle part échappe à leur contrôle. Elles profitent du %C/E à leurs transmissions, parce qu'il transforme des plaintes vagues sur de « mauvaises exigences » ou des « revues tardives » en événements comptés. Elles devraient se méfier d'améliorer leur propre temps de cycle aux dépens de l'étape réceptrice (voir le sujet 2.8, Métriques DORA).

### Équipes de service et d'exploitation

Les équipes d'exploitation détiennent un grand nombre de files : l'accueil du centre de services, l'approbation des changements, le calendrier des versions, la transmission d'astreinte. Elles gagnent à préautoriser les changements standard, à poser des conditions d'acceptation claires pour le travail entrant et à voir quelles transmissions ajoutent le plus d'attente. Elles doivent aussi s'attendre à être l'étape réceptrice dans une mesure de %C/E, et à définir ce qu'est un passage de relais complet. Leurs éléments portent souvent leurs propres horloges strictes ; la mesure du flux se place donc à côté des mesures de niveau de service, sans les remplacer.

### Direction et gouvernance

Les dirigeants parrainent le changement entre équipes et décident si un flux a un responsable nommé. Ils devraient demander le délai de livraison du flux du point de vue du client et la plus grande attente, plutôt qu'un tableau de score étape par étape. Les instances de gouvernance qui approuvent le travail sont elles-mêmes des étapes, et leur temps d'attente a sa place sur la carte. Fixer des objectifs au ratio entre temps de traitement et délai de livraison invite aux vecteurs décrits ci-dessus ; servez-vous-en donc pour orienter l'enquête (voir le sujet 6.5, Réalisation de la valeur et résultats métier).

### Clients et utilisateurs

Les clients vivent le délai de livraison et la reprise, et voient rarement les étapes. Leur contribution la plus utile est de confirmer quand le résultat était utilisable et de dire ce qu'ils ont dû faire pour l'obtenir, comme soumettre à nouveau un formulaire. Les rapports destinés aux clients devraient énoncer le début et la fin de l'horloge en mots simples. Les clients profitent aussi de ce que le flux publie une médiane honnête et un percentile élevé, car une promesse fondée sur la seule médiane déçoit une demande sur plusieurs.

## En pratique : un exemple d'ITIL agile

Le service informatique d'une compagnie d'assurance de taille moyenne livre des changements normaux à sa plateforme de gestion des polices. Les clients de l'entreprise se plaignent que « les petits changements prennent plus d'un mois ». Tous les chiffres de cet exemple sont illustratifs.

Le service cartographie le flux depuis le moment où un responsable métier soumet une demande de changement jusqu'au moment où il confirme que le changement est en production. Un échantillon de 20 changements normaux récents donne le tableau d'étapes ci-dessous, avec des valeurs médianes illustratives par étape.

| Étape | Temps de traitement (jours) | Temps d'attente (jours) | %C/E (illustratif) |
| --- | --- | --- | --- |
| Accueil et tri | 0,5 | 6 | 85 |
| Construction | 1,5 | 5 | 90 |
| Test | 0,5 | 8 | 80 |
| Approbation du changement | 0,25 | 9 | 70 |
| Déploiement et confirmation | 0,25 | 4 | 95 |
| Total du flux | 3,0 | 32 | 41 (cumulé) |

Le délai de livraison du flux dans l'échantillon est d'environ 35 jours, de sorte que l'efficacité du processus est d'environ 9 pour cent. Le %C/E cumulé est d'environ 41 pour cent, le produit des cinq valeurs d'étape ; moins de la moitié des changements passent donc toutes les étapes sans renvoi. L'étape d'approbation du changement paraît modeste par son seul %C/E, mais ses 9 jours d'attente sont la plus longue file unique, et 30 pour cent des changements y arrivent avec des informations de risque manquantes, que le comité renvoie.

L'équipe prend deux décisions. Premièrement, elle classe les dix types de changements à faible risque les plus fréquents comme changements standard avec des procédures préautorisées, afin qu'ils contournent le comité. Deuxièmement, le formulaire d'accueil gagne les champs de risque que le comité demande toujours, et une courte liste de contrôle d'acceptation est convenue avec le comité. Ces choix s'attaquent à la plus grande attente et au plus grand renvoi composé, plutôt qu'à l'étape de construction, où l'on avait demandé à l'équipe d'« aller plus vite ».

Trois mois plus tard, le délai de livraison médian de la classe échantillonnée baisse et l'attente d'approbation diminue, tandis que le %C/E cumulé monte. Le risque de détournement apparaît au troisième mois. Une équipe produit fractionne plusieurs demandes en deux ou trois plus petites, parce que les petits éléments se qualifient comme changements standard, et le délai de livraison par élément chute fortement. Le relecteur remarque que le compte des éléments enfants liés a augmenté et que la confirmation du client par demande d'origine ne s'est pas améliorée. Le service garde le délai de livraison, mais redéfinit l'élément comme la demande d'origine du client, de sorte que les fractionnements n'aident plus. Le journal des décisions consigne le changement de définition et rétablit le trimestre précédent avec la même règle.

## Perspective sectorielle

**Startup.** Un flux court avec peu de transmissions a peu à cartographier, et la mesure la plus utile est simplement le temps écoulé entre la demande du client et son usage. Dessinez le flux sur un mur, lisez les éléments bruts et guettez la première transmission qui apparaît quand l'équipe grandit. Résistez à la construction d'outillage avant que le flux se soit stabilisé.

**Petite entreprise.** Une ou deux personnes couvrent souvent plusieurs étapes ; les transmissions sont donc entre rôles ou outils plutôt qu'entre équipes. Les rapports du gestionnaire de tickets ou du centre de services donnent le délai de livraison à peu de frais, et un échantillon de dix éléments révèle l'attente. Demandez à vos fournisseurs, comme un prestataire de services gérés, leurs temps d'étape, car la file du fournisseur est souvent la plus longue attente.

**Grande entreprise.** Les longs flux avec de nombreuses équipes et portes d'approbation sont l'endroit où le %C/E cumulé et le nombre de transmissions rapportent le plus. Attribuez un responsable à chaque grand flux, cartographiez-le conjointement avec chaque étape représentée et utilisez un identifiant d'élément partagé pour pouvoir joindre les outils. Des divisions différentes emploieront les mêmes mots pour des horloges différentes ; publiez donc une définition par mesure et tenez un journal des changements.

**Gouvernement et secteur public.** Les approbations légales, les étapes de marchés et les contrôles d'audit forment des étapes légitimes qui ne peuvent pas être supprimées, et elles détiennent souvent les plus longues attentes. Cartographiez-les honnêtement, séparez l'attente imposée de l'attente évitable et montrez la part imposée à ceux qui fixent les règles. Conservez une piste d'audit des données et de tout changement de définition (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est que l'attente est généralement la plus grande part du délai de livraison et la moins coûteuse à réduire, parce que la solution est souvent une décision, une règle ou une transmission plutôt que de la capacité supplémentaire. Les clients ressentent directement le délai de livraison, et l'organisation paie la reprise en capacité qui n'apparaît jamais sur un rapport d'étape. Réduire les transmissions et les renvois réduit aussi les modes de défaillance qui deviennent plus tard des incidents.

Les coûts sont modestes et surtout humains : quelques heures du temps de plusieurs personnes pour l'atelier de cartographie et l'échantillon, un identifiant d'élément partagé entre outils (voir le sujet 1.5, Sources de données et instrumentation) et un peu de temps d'analyste chaque mois. Le coût le plus élevé est la conversation entre équipes et la volonté de changer une règle qui appartient à quelqu'un.

Le retour se voit dans des délais de livraison plus courts et plus prévisibles, un %C/E cumulé en hausse, moins d'éléments renvoyés et de la capacité libérée de la reprise. Ne prévoyez pas d'amélioration en pourcentage à partir d'études de cas publiées. Estimez le retour à partir de votre propre flux : le volume d'éléments, l'attente actuelle, le coût du retard pour le client tel que vous pouvez l'énoncer et les heures de reprise que vous pouvez compter. Le Flow Framework et la littérature lean décrivent le schéma, et aucun ne fournit de référence qui se transpose à votre flux (voir le sujet 7.7, Retour sur investissement et dossier d'affaires).

## Antimodèles et pièges

- **Cartographier une étape au lieu d'un flux.** Une carte magnifiquement détaillée du travail d'une équipe laisse les plus longues attentes hors de la page. Cartographiez de la demande du client à l'usage du client, et n'ajoutez du détail que là où sont les attentes.
- **Faire la moyenne de temps d'étape issus d'échantillons différents.** La somme des moyennes d'étape n'est pas la moyenne du flux. Calculez les mesures du flux à partir d'enregistrements au niveau des éléments et rapportez des médianes et des percentiles.
- **Traiter le temps d'attente comme un problème d'effort.** Dire aux gens de travailler plus vite raccourcit rarement une file. Demandez ce qu'attend l'élément et si l'attente est nécessaire.
- **Optimiser l'efficacité du processus comme un objectif.** Dès que le ratio devient un but, le temps de traitement est gonflé ou le délai de livraison est rogné par des astuces. Servez-vous-en comme d'une invitation à enquêter et associez-le au délai de livraison confirmé par le client.
- **Mesurer le %C/E sans condition d'acceptation écrite.** Sans elle, chaque renvoi est une dispute. Demandez à l'étape réceptrice d'écrire la condition et gardez-la courte.
- **Laisser la reprise silencieuse non consignée.** Si une étape corrige le travail entrant sans le consigner, le %C/E est surestimé et l'étape émettrice n'apprend jamais rien. Consignez chaque correction comme un renvoi.
- **Utiliser les métriques de flux pour classer des équipes ou des personnes.** Elles décrivent le système, et la plus grande attente est rarement la faute d'une seule équipe. Rapportez par étape et par flux, et passez les résultats en revue avec toutes les étapes présentes.
- **Cartographier une fois et jamais plus.** Les flux dérivent. Revoyez la carte selon un calendrier et après toute réorganisation ou tout changement d'outil.

## Modèle de maturité

| Dimension | Initier | Développer | Standardiser | Gérer | Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définition du flux et horloges | Flux non défini ; chaque équipe mesure sa propre étape | Un flux cartographié par une équipe ; horloges différentes de celles des autres équipes | Début et fin écrits pour chaque grand flux, de la demande du client à l'usage du client | Règles d'horloge revues, changements consignés, historique rétabli quand les définitions changent | Définitions révisées entre équipes et fournisseurs à mesure que le flux et la demande changent |
| Temps de traitement et temps d'attente | Seul le temps écoulé est connu | Échantillonnés pour un flux à la main | Collectés à partir d'événements d'outils avec un modèle d'états documenté et des estimations étiquetées | Suivis dans le temps avec des percentiles, réductions d'attente financées et suivies | Attentes entre fournisseurs et équipes gérées conjointement, avec des files partagées visibles |
| Qualité le long du flux | Reprise remarquée mais non comptée | Renvois comptés par certaines étapes | Conditions d'acceptation écrites et %C/E d'étape montré aux équipes responsables | %C/E cumulé suivi dans le temps et associé aux mesures de reprise et d'échec | Conditions d'acceptation codétenues par l'émetteur et le récepteur et reliées aux résultats pour les clients |
| Usage dans l'amélioration | Cartographie faite une fois, puis rangée | Un atelier occasionnel mène à une correction locale | Revue trimestrielle avec chaque étape présente | La plus grande attente ou le plus grand renvoi traité chaque trimestre avec un responsable | Des idées d'amélioration viennent de chaque étape, avec des décisions consignées et des résultats vérifiés |

## Liste de vérification

- [ ] Un flux de valeur et une classe d'éléments sont nommés, avec un responsable du flux.
- [ ] Le début et la fin de l'horloge sont écrits en termes de demande du client et d'usage du client.
- [ ] La carte de l'état actuel a été construite avec un représentant de chaque étape, y compris du côté du client.
- [ ] Le temps de traitement et le temps d'attente sont consignés séparément pour chaque étape à partir d'un échantillon d'éléments réels.
- [ ] Les temps d'étape et de flux sont rapportés sous forme de médianes et d'un percentile élevé, avec la taille de l'échantillon affichée.
- [ ] Chaque étape réceptrice a une condition d'acceptation écrite, et les renvois sont consignés.
- [ ] Le pourcentage complet et exact cumulé est calculé à partir des valeurs d'étape.
- [ ] Les transmissions sont comptées et la plus grande attente a un responsable nommé et une expérience planifiée.
- [ ] Le vecteur de détournement et le garde-fou de chaque métrique sont revus avec l'équipe.
- [ ] La carte et l'échantillon sont revus selon un calendrier, et les changements de définition sont consignés.

## Prompts d'IA

**Rédigez un guide d'entretien pour une cartographie du flux de valeur.**

```text
Je cartographie le flux de valeur de [stream name], de [start event] à [end
event], pour la classe d'éléments [item class]. Les équipes concernées sont
[list of teams]. Rédigez un guide d'entretien pour un atelier de cartographie :
des questions pour chaque étape sur le temps de traitement, le temps d'attente,
les transmissions, les renvois et les conditions d'acceptation, plus des
questions pour le côté client. N'inventez ni durées ni valeurs de référence.
Énumérez vos hypothèses et les données que je devrais collecter pour vérifier
les réponses.
```

**Calculez les mesures du flux à partir d'un échantillon.**

```text
Voici un échantillon de [number] éléments avec les heures d'entrée et de sortie
des étapes, les états actifs et d'attente et les renvois : [paste data or
describe the columns]. Calculez le délai de livraison, le temps de traitement,
le temps d'attente, l'efficacité du processus, le pourcentage complet et exact
par étape et le pourcentage complet et exact cumulé, et montrez les formules
employées. Rapportez les médianes et le [percentile] percentile. Signalez les
éléments aux horodatages manquants et dites comment vous les avez traités. Ne
comblez pas les trous avec des valeurs inventées. Énumérez vos hypothèses.
```

**Trouvez les risques de détournement dans le tableau de bord d'un flux.**

```text
Le tableau de bord de notre flux montre [list metrics] pour [stream name], et
les équipes sont évaluées au regard de [targets or none]. Pour chaque métrique,
énumérez les façons plausibles dont le chiffre pourrait s'améliorer sans que le
flux s'améliore, les signaux qui révéleraient chacune et un garde-fou (métrique
ou pratique) qui l'attraperait. Concentrez-vous sur [stage or handoff of
concern]. Ne suggérez pas de classer des individus et n'inventez pas de seuils.
Énumérez vos hypothèses.
```

**Rédigez une condition d'acceptation pour une transmission.**

```text
L'étape émettrice est [sender team] et l'étape réceptrice est [receiver team].
Les éléments sont [item type], et les raisons les plus courantes de leur renvoi
sont [reasons]. Rédigez une courte condition d'acceptation d'au plus [number]
vérifications que le récepteur peut appliquer, et une façon de consigner les
renvois pour que le pourcentage complet et exact puisse être calculé. Gardez la
formulation neutre et n'attribuez pas de blâme. Énumérez vos hypothèses et les
questions que je devrais poser aux deux équipes.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une métrique de votre carte de flux et le garde-fou qui doit se trouver à côté.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un sujet de métrique modifié énonce ses horloges, ses vecteurs de détournement et ses renvois.

## Points clés à retenir

- Mesurez le flux de la demande du client à l'usage du client, car les mesures aux frontières d'équipe cachent les plus longues attentes.
- Séparez chaque étape en temps de traitement et temps d'attente, et cherchez la cause de la plus grande attente dans l'interface entre équipes.
- Le pourcentage complet et exact se compose à travers les étapes ; la valeur cumulée est donc généralement plus basse que ne le suggère n'importe quel rapport d'étape.
- Réduisez les transmissions et préautorisez le travail courant avant de pousser les étapes à aller plus vite.
- Observez un échantillon d'éléments réels à côté des données d'outils, rapportez des percentiles et étiquetez les estimations.
- Associez chaque métrique de flux à son garde-fou, et servez-vous des mesures pour décrire le système, jamais pour classer des personnes.

## Références et lectures complémentaires

1. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
2. Martin, K., and Osterling, M., *Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation*, McGraw-Hill, 2014.
3. Womack, J. P., and Jones, D. T., *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*, Simon and Schuster, 1996.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
7. Kersten, M., *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*, IT Revolution, 2018.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
10. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
11. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
12. Wikipedia, [Value stream](https://en.wikipedia.org/wiki/Value_stream).
13. Wikipedia, [Value-stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping).
14. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
17. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
18. Wikipedia, [Rolled throughput yield](https://en.wikipedia.org/wiki/Rolled_throughput_yield).
19. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
