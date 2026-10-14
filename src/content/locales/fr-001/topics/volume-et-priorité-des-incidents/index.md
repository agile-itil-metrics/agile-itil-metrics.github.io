# Volume et priorité des incidents

**Comptez les incidents au regard de l'usage qui les a produits, lisez la priorité comme un mélange plutôt que comme un score, et surveillez les répétitions, car la forme de la demande d'incidents dit où investir bien avant qu'un seul temps de résolution le fasse.**

## Résumé et motivation

Un incident, en termes d'[ITIL](https://en.wikipedia.org/wiki/ITIL) 4, est une interruption non planifiée d'un service ou une réduction de sa qualité. La [gestion des incidents](https://en.wikipedia.org/wiki/Incident_management) est la pratique qui rétablit le fonctionnement normal du service aussi vite que possible et limite le préjudice pour l'entreprise. Chaque incident est aussi un signal : quelque chose dans le service, ses changements, ses utilisateurs ou sa supervision n'a pas fonctionné comme prévu. Le nombre et le caractère des incidents sont donc l'une des mesures de demande les plus informatives dont dispose une équipe d'exploitation.

Le volume seul est un mauvais guide. Une hausse d'incidents peut signifier que le service s'est dégradé, que davantage de gens l'utilisent, ou que la supervision s'est améliorée et voit maintenant des pannes qui n'étaient pas signalées. Une baisse peut signifier que le travail de fiabilité a porté ses fruits, ou que les utilisateurs ont cessé de signaler. Ce sujet traite de la lecture du volume avec assez de contexte pour distinguer ces histoires : normalisation par rapport à l'usage, ventilation par catégorie et par service, et surveillance du mélange des priorités et du taux de répétitions.

La priorité est la seconde moitié du sujet. La pratique ITIL dérive couramment la priorité de deux intrants : l'impact (quelle part de l'entreprise est touchée) et l'urgence (à quelle vitesse l'entreprise a besoin du correctif). La paire est associée à un niveau de priorité qui fixe la réponse attendue. Les équipes agiles ont un équivalent proche dans leur façon de trier un backlog : étiquettes de gravité et d'urgence sur les défauts, et « classe de service » sur un tableau de flux qui décide de ce qui passe devant la file. Les mots diffèrent ; la question est la même : qu'est-ce qui doit être traité d'abord, et pourquoi.

La vision ITIL traite les incidents comme des enregistrements détenus par un centre de services et des groupes de résolution, avec des catégories, des priorités et des cibles de niveau de service. La vision agile traite le travail non planifié comme une interruption du flux qui concurrence le travail planifié (voir le sujet 2.9, Travail opérationnel et travail non planifié). Les deux visions profitent des mêmes mesures, si les mesures décrivent le système et non les personnes qui s'y trouvent. Le [centre de services](https://en.wikipedia.org/wiki/Help_desk_software) est l'endroit où la plupart des enregistrements commencent, et ses propres métriques sont traitées à part (voir le sujet 3.1, Métriques du centre de services). La rapidité de réponse et de résolution des incidents est traitée au sujet 3.3, Temps de réponse et de résolution des incidents. Les incidents majeurs ont leurs propres mesures (voir le sujet 3.4, Métriques des incidents majeurs).

Plusieurs termes reviennent ci-dessous. Un **percentile** est la valeur en deçà de laquelle tombe une part indiquée d'observations, de sorte que le 85e percentile est la valeur que 85 pour cent des observations ne dépassent pas. Un **accord de niveau de service (SLA)** est un engagement documenté entre un fournisseur et un client. Un **élément de configuration (CI)** est un composant qui doit être géré pour fournir un service. Un **processus de Poisson** décrit des événements qui arrivent indépendamment à un rythme moyen, ce qui est un premier modèle utile pour les arrivées d'incidents (voir le sujet 1.6, Culture statistique pour les métriques de service).

L'avertissement du sujet 1.2 (Loi de Goodhart et psychologie des métriques) s'applique ici plus qu'à la plupart des endroits. Les nombres d'incidents et les priorités sont saisis par des personnes, souvent sous pression, et le chiffre attaché à un enregistrement peut être changé en changeant la façon dont l'enregistrement est écrit. Chaque métrique ci-dessous a un vecteur de détournement, et les garde-fous font partie de la définition.

## Principes clés

- **Normaliser avant de comparer.** Un compte signifie peu sans l'usage, la base d'utilisateurs ou le volume de transactions dont il provient. Comparez des taux entre périodes et services, et montrez le compte brut à côté.
- **Lire le mélange, non un chiffre unique.** La distribution des priorités, la distribution des catégories et la part de répétitions en disent plus ensemble que n'importe quel total.
- **La priorité est une règle, pas une humeur.** Dérivez-la de l'impact et de l'urgence avec une matrice écrite, et mesurez à quelle fréquence elle est changée après coup.
- **Séparer incidents et demandes.** Une demande de quelque chose de normal n'est pas une panne. Les compter ensemble gonfle le volume d'incidents et cache ce que le centre de services fait de son temps (voir le sujet 3.5, Métriques de traitement des demandes de service).
- **Les répétitions sont le signal le plus précieux.** Un incident qui revient désigne un problème qui n'est pas encore résolu (voir le sujet 4.1, Métriques de gestion des problèmes).
- **Mesurer des services et des équipes, jamais des agents.** Les comptes par personne invitent au classement, et le classement corrompt les données (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).
- **S'attendre à ce que le volume bouge pour des raisons qui ne sont pas la qualité.** Les versions, les saisons, les campagnes et les changements de canaux de signalement déplacent tous les comptes. Annotez le graphique.

## Définitions des métriques

Le tableau liste les métriques de ce sujet. Les horloges et les frontières sont énoncées dans la colonne des formules. « Clos » et « ouvert » renvoient aux horodatages de l'enregistrement d'incident ; l'heure d'ouverture est le moment où l'enregistrement est créé ou celui où le système de supervision le crée, et l'heure de clôture est le moment où l'incident est confirmé résolu et clos.

| Métrique | Définition | Formule | Unité | Source de données | Pratique ITIL | Équivalent agile | Cadence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume d'incidents par service | Nombre d'incidents ouverts pour un service dans une période | incidents dont l'heure d'ouverture tombe dans la période, attribués au service touché ; les demandes de service, les doublons fusionnés dans un enregistrement parent et les enregistrements annulés comme créés par erreur sont exclus | nombre | Enregistrements d'incidents de l'outil ITSM | Gestion des incidents | Défauts de production ou éléments de travail non planifiés par équipe | Hebdomadaire, revu chaque mois |
| Taux d'incidents normalisé | Incidents relativement à l'usage du service | incidents ouverts dans la période / mesure d'usage pour la même période et le même périmètre (utilisateurs actifs, sessions ou transactions, choisis et consignés par service) x 1 000 ; la mesure d'usage doit provenir d'une source autre que l'outil d'incidents | incidents pour 1 000 unités d'usage | Outil ITSM plus données d'usage de l'analytique ou de la supervision | Gestion des incidents ; gestion des niveaux de service | Densité de défauts par version ou par utilisateur | Mensuelle |
| Répartition des priorités | Part des incidents ouverts à chaque niveau de priorité | incidents à la priorité consignée à l'ouverture / tous les incidents ouverts dans la période, montrés pour chaque niveau ; les incidents reclassés sont comptés à la priorité d'ouverture et montrés de nouveau à la priorité de clôture | pourcentage par niveau | Outil ITSM, y compris l'historique des changements de priorité | Gestion des incidents | Distribution de la gravité des défauts ; répartition des classes de service | Mensuelle |
| Taux de reclassement de priorité | Part des incidents dont la priorité a changé entre l'ouverture et la clôture | incidents clos dans la période dont la priorité de clôture diffère de la priorité d'ouverture / incidents clos dans la période | pourcentage | Piste d'audit de l'outil ITSM | Gestion des incidents | Taux de retri sur le backlog des défauts | Mensuelle |
| Concentration par catégorie | Part du volume d'incidents détenue par les plus grandes catégories | incidents dans les cinq premières catégories par nombre / tous les incidents catégorisés de la période ; les incidents non catégorisés sont rapportés séparément comme leur propre part | pourcentage | Champs de catégorie et de service de l'outil ITSM | Gestion des incidents ; gestion des problèmes | Grappes de défauts par composant ou par épopée | Mensuelle |
| Taux d'incidents répétés | Part des incidents qui reviennent pour le même service, élément de configuration et catégorie dans une fenêtre indiquée | incidents de la période ayant un incident clos antérieur pour les mêmes service, CI et catégorie dans la fenêtre précédente (par exemple 30 jours, fixée une fois et consignée) / incidents ouverts dans la période ; un enregistrement rouvert compte comme une réouverture, non comme une répétition | pourcentage | Outil ITSM et liens de la CMDB | Gestion des incidents ; gestion des problèmes | Taux de régression ou de défauts échappés | Mensuelle |
| Taux de réouverture | Part des incidents clos qui ont été rouverts | incidents clos dans la période qui ont été rouverts ensuite dans une fenêtre indiquée (par exemple 7 jours) / incidents clos dans la période | pourcentage | Historique des statuts de l'outil ITSM | Gestion des incidents | Défauts rouverts ; reprise | Mensuelle |
| Part détectée par la supervision | Part des incidents d'abord levés par la supervision avant qu'un utilisateur les signale | incidents dont le premier événement est une alerte automatisée / tous les incidents ouverts dans la période ; les incidents ouverts par une personne à partir d'une alerte sont comptés à l'heure de l'alerte | pourcentage | Outil ITSM, intégration de supervision | Supervision et gestion des événements ; gestion des incidents | Défauts levés par alerte ou signalés par les clients | Mensuelle |

Deux remarques sur les définitions. La première est que la « priorité » de ce tableau est la priorité que porte l'enregistrement, qui doit provenir de la matrice d'impact et d'urgence et non de l'ordre dans lequel les gens veulent que le travail soit fait. La seconde est que le volume rapporté pour une période est un compte d'ouvertures, non un compte d'incidents ouverts un jour donné. Le nombre d'ouverts à un instant donné est une mesure de backlog et relève du vieillissement (voir le sujet 3.3, Temps de réponse et de résolution des incidents).

## Recommandations

### Compter avec soin

**1. Écrivez ce qu'est un incident et ce qu'il n'est pas.** Beaucoup d'outils tiennent incidents, demandes, alertes et problèmes dans une même table. Décidez quels types d'enregistrements comptent, documentez le filtre et appliquez-le chaque fois. Un changement de filtre change la tendance ; consignez donc les changements avec la date et la raison (voir le sujet 1.5, Sources de données et instrumentation).

**2. Dédoublonnez avant de rapporter.** Quand une panne produit cinquante tickets, l'incident parent est l'événement et les enfants sont une mesure de sa portée. Rapportez les deux nombres : les incidents parents pour savoir combien de pannes se sont produites, et les enregistrements liés pour savoir combien de personnes les ont ressenties. Mélanger les deux fait ressembler une grosse panne à un mois de travail courant.

**3. Attribuez les incidents à des services autant qu'à des équipes.** Le service est la chose que l'entreprise achète et comprend. Utilisez le catalogue de services (l'orthographe propre à ITIL est « service catalogue ») pour définir la liste, et revoyez la correspondance depuis les CI quand les services changent. Un incident sans service est un problème de qualité des données à corriger, et la part de ces enregistrements vaut d'être rapportée.

### Normaliser et interpréter le volume

**4. Normalisez par rapport à une mesure d'usage issue d'une autre source.** Divisez par les utilisateurs actifs, les sessions ou les transactions, tirés de l'analytique ou de la supervision et non de l'outil d'incidents. Un service qui a doublé ses utilisateurs et ses incidents ne s'est pas dégradé ; un service dont les incidents ont doublé à usage plat l'a fait. Montrez le compte brut à côté du taux pour que personne ne croie que le dénominateur cache quelque chose.

**5. Utilisez une carte de contrôle, non une flèche de tendance.** Les nombres d'incidents varient d'une semaine à l'autre même quand rien n'a changé. Une [carte de contrôle](https://en.wikipedia.org/wiki/Control_chart) montre la plage habituelle de variation, de sorte que l'équipe réagit à un signal et laisse le bruit tranquille. Des comptes hebdomadaires qui bougent à l'intérieur des limites ne sont pas une nouvelle ; une série soutenue d'un seul côté de la moyenne en est une. Ajustez pour la [saisonnalité](https://en.wikipedia.org/wiki/Seasonality), comme les fins de trimestre, les congés et les cycles de versions, en comparant des périodes semblables.

**6. Annotez le graphique avec des événements.** Marquez les versions, les migrations, les campagnes, les pannes de dépendances et les changements du canal de signalement. Un nouveau formulaire de libre-service ou un bouton « signaler un problème » plus visible peut faire monter le volume alors que le service reste le même. La plupart des disputes sur le volume se terminent vite quand le graphique montre ce qui s'est passé cette semaine-là.

### Gérer la priorité par des règles

**7. Dérivez la priorité de l'impact et de l'urgence avec une matrice publiée.** Définissez l'impact en termes d'utilisateurs et de fonctions de l'entreprise touchés, et l'urgence en termes de rapidité à laquelle le préjudice grandit. Publiez la matrice sur la page où les agents choisissent les valeurs, avec deux ou trois exemples travaillés par cellule. Évitez les champs de priorité à choix libre ; ils tournent à la négociation, et le nombre d'incidents de « priorité 1 » devient une mesure de persuasion.

**8. Rapportez ensemble la répartition et le taux de reclassement.** Une répartition saine a un petit nombre d'incidents du plus haut niveau et une large base de niveaux plus bas. Si le niveau supérieur grossit, demandez si le préjudice a grandi ou si les clients ont appris que « critique » attire l'attention. Le taux de reclassement montre dans quelle mesure la matrice convient : des changements fréquents à la clôture signifient que la règle est floue ou que la première évaluation est bâclée. Passez chaque mois en revue un échantillon d'enregistrements reclassés dans le groupe qui détient la matrice.

**9. Gardez alignées la priorité et la classe de service agile.** Là où les équipes de livraison reçoivent du travail dû à des incidents, utilisez les mêmes mots et la même matrice, ou publiez une correspondance claire. Une équipe qui qualifie un défaut d'« élevé » pendant que l'exploitation qualifie le même défaut de « moyen » perdra du temps en traduction. Réservez une marge explicite pour le travail accéléré afin que l'interruption soit visible dans les mesures de flux (voir le sujet 2.1, Mesures de flux).

### Chercher les répétitions et les schémas

**10. Suivez les répétitions et les réouvertures comme des signaux séparés.** Une réouverture signifie que le premier correctif n'a pas tenu ; une répétition signifie que le même genre de panne est revenu après un vrai correctif. La première désigne la qualité de la résolution et la seconde une cause non résolue. Reliez les grappes répétées à des enregistrements de problèmes, et cessez de compter un incident comme réglé lorsqu'il risque de revenir (voir le sujet 4.1, Métriques de gestion des problèmes).

**11. Servez-vous du [principe de Pareto](https://en.wikipedia.org/wiki/Pareto_principle) pour choisir où regarder.** Triez les catégories et les services par nombre d'incidents et voyez combien peu représentent l'essentiel du volume. Examinez les premiers avant de construire de nouveaux rapports pour le reste. La forme est une invitation à l'[analyse des causes profondes](https://en.wikipedia.org/wiki/Root_cause_analysis), non une conclusion, car une catégorie à fort compte peut simplement être celle qui est facile à catégoriser.

**12. Rendez les constats aux équipes de livraison et au centre de services.** Partagez les vues par catégorie et par répétition avec les équipes qui construisent et modifient les services, dans une conversation régulière plutôt que dans un rapport. Associez chaque grappe récurrente à un responsable, une prochaine étape et une date, et placez le travail sur le même backlog que les autres priorités (voir le sujet 2.6, Métriques du backlog et de son affinage). Le volume baisse quand les causes sont supprimées, et cela exige une capacité planifiée.

## Vecteurs de détournement et garde-fous

| Métrique | Comment elle est détournée | Métrique ou pratique de garde-fou associée |
| --- | --- | --- |
| Volume d'incidents par service | Consigner des incidents comme des demandes, fusionner des tickets sans rapport, décourager les utilisateurs de signaler, ou clore des doublons comme « aucune panne trouvée » | Volume de contacts signalés par les utilisateurs et volume de demandes à côté du volume d'incidents ; satisfaction et abandon du centre de services ; échantillon de demandes qui se lisent comme des pannes |
| Taux d'incidents normalisé | Choisir le dénominateur qui donne le meilleur chiffre, ou changer la définition de l'usage entre périodes | Mesure d'usage fixe par service, consignée dans le registre ; comptes bruts montrés à côté du taux |
| Répartition des priorités | Abaisser les priorités pour paraître calme ou les relever pour attirer l'attention ; attribuer une basse priorité pour éviter une cible de réponse | Taux de reclassement de priorité ; revue mensuelle d'un échantillon au regard de la matrice d'impact et d'urgence ; impact déclaré par les clients |
| Taux de reclassement de priorité | Ne pas changer la priorité quand il le faudrait, pour que le taux paraisse stable ; ne la changer qu'à la clôture pour correspondre à la cible | Échantillon d'enregistrements où l'impact a changé pendant l'incident ; revues des chronologies d'incidents |
| Concentration par catégorie | Employer une catégorie fourre-tout, ou scinder une grosse catégorie en plusieurs pour cacher la concentration | Part des enregistrements non catégorisés et « autre » ; revue périodique de la liste de catégories ; contrôles des catégories au regard des notes de résolution |
| Taux d'incidents répétés | Ouvrir un nouvel incident avec une formulation ou un CI différents pour éviter le lien ; clore tôt pour éviter une réouverture | Revue des enregistrements quasi doublons par texte et service ; taux de réouverture ; taux de liaison aux enregistrements de problèmes |
| Taux de réouverture | Demander aux utilisateurs d'ouvrir un nouveau ticket au lieu de rouvrir ; clore tard les tickets pour éviter les réouvertures | Compte des nouveaux tickets qui renvoient à un ticket clos récemment ; confirmation de la résolution par le client ; distribution du temps jusqu'à la clôture |
| Part détectée par la supervision | Créer des alertes bruyantes qui ouvrent automatiquement des incidents, ou laisser des gens requalifier des signalements d'utilisateurs en alertes | Mesures de qualité des alertes comme la part d'alertes exploitables (voir le sujet 5.5, Métriques de supervision et de qualité des alertes) ; audit de la source des incidents |

Une lecture saine est terne et explicable. Les taux normalisés sont stables ou en baisse pour les services stables et montent quand l'usage ou le changement monte pour une raison que le graphique montre. La répartition des priorités est stable, le reclassement est bas et un petit ensemble de catégories reçoit une attention délibérée. Les répétitions et les réouvertures baissent après le travail planifié sur les problèmes, et un mouvement dans n'importe quelle métrique a une explication que quelqu'un peut donner sans défendre le chiffre.

## Compromis : avantages et inconvénients

| Approche | Force | Faiblesse |
| --- | --- | --- |
| Comptes bruts d'incidents | Simples, faciles à expliquer, toujours disponibles | Mêlent usage, qualité et comportement de signalement en un seul chiffre |
| Taux rapportés à l'usage | Permettent une comparaison équitable entre périodes et services | Exigent une source d'usage fiable ; les dénominateurs peuvent être contestés |
| Matrice fixe d'impact et d'urgence | Priorité cohérente entre équipes ; auditable | Peut paraître rigide ; les cas limites demandent du jugement et une voie de dérogation |
| Priorité à choix libre | Rapide et flexible pour des agents expérimentés | Incohérente, ouverte à la pression, difficile à comparer dans le temps |
| Arbre de catégories détaillé | Montre d'où vient la demande | Difficile à employer sous pression ; les gens choisissent la première correspondance ou « autre » |
| Liste de catégories courte avec étiquettes | Rapide à appliquer et cohérente | Moins de détail ; peut cacher des schémas qui demandent une analyse de texte |
| Taux de répétition par CI et catégorie | Désigne les causes non résolues | Dépend de bonnes données de CI ; les faux liens comme les oublis se produisent |

Acceptez qu'aucune mesure ne soit la bonne. Utilisez les comptes bruts pour la planification de la capacité, les taux pour la santé, la répartition des priorités pour le risque et les répétitions pour l'amélioration, et montrez chacun pour ce qu'il est. Gardez la liste de catégories assez courte pour qu'on s'en serve, et n'améliorez l'arbre que lorsqu'une décision a besoin d'un détail plus fin.

## Questions à discuter avec votre équipe

**1. Qu'est-ce qui compte comme un incident ici, et tout le monde applique-t-il la règle de la même façon ?**
Prenez dix enregistrements récents et demandez à chaque personne de les étiqueter comme incident, demande ou autre chose. Comparez les réponses et discutez des désaccords. L'animateur doit chercher des habitudes comme traiter chaque ticket d'une personne senior en incident, puis convenir d'une règle écrite avec des exemples. Consignez la date pour que les tendances ultérieures soient lues correctement.

**2. Quand le volume d'incidents a monté le dernier trimestre, que savions-nous alors de l'usage et du changement ?**
Placez le graphique à côté d'une chronologie des versions, des campagnes et des chiffres d'usage. Demandez quelle hausse était expliquée et laquelle ne l'était pas. La discussion montre généralement combien le dénominateur est rarement sur la page. Convenez de la mesure d'usage que chaque service portera désormais.

**3. Comment la priorité est-elle décidée, et quand nous a-t-elle surpris pour la dernière fois ?**
Parcourez la matrice d'impact et d'urgence avec un exemple récent de chaque niveau de priorité. Demandez où les agents devinent et où les clients ou les responsables font pression. Comparez la priorité d'ouverture et la priorité de clôture de quelques enregistrements. Décidez d'un changement de la matrice ou de ses exemples qui réduit la dispute.

**4. Quelles trois catégories prennent l'essentiel de notre volume d'incidents, et qui travaille à en supprimer la cause ?**
Listez les principales catégories et, pour chacune, le responsable de la cause sous-jacente. Si la réponse est « personne », c'est un constat. Demandez si la catégorie est une vraie grappe ou une habitude d'étiquetage. Choisissez une grappe à examiner avec l'équipe de livraison ce trimestre.

**5. Comment distinguons-nous une répétition d'une réouverture, et que faisons-nous de chacune ?**
Montrez à l'équipe deux ou trois paires d'enregistrements et demandez lesquelles sont des répétitions. Discutez de ce qu'une réouverture dit de la qualité du premier correctif, et de ce qu'une répétition dit de la cause. L'animateur doit orienter le groupe vers le rattachement des grappes répétées à des enregistrements de problèmes plutôt que vers leur clôture une par une. Convenez de qui les revoit et à quelle fréquence.

**6. Qu'aurions-nous envie de changer si notre nombre d'incidents était revu chaque semaine par la direction ?**
Demandez au groupe d'imaginer le chiffre affiché sur un mur. Quelles habitudes changeraient : la façon de consigner, de fusionner les tickets, de fixer les priorités ? Nommez la pression ouvertement et sans reproche. Convenez du garde-fou qui montrerait le glissement, et de qui le regarde.

## Quatre perspectives

### Équipes produit et livraison

Les équipes de livraison reçoivent la production de ce sujet sous forme de demande. Les vues par catégorie et par répétition montrent quelles parties du produit causent le plus d'ennuis, et la répartition des priorités montre combien de travail d'interruption prévoir. Les équipes devraient traiter le travail dû aux incidents comme une partie de leur capacité, le garder visible dans les mesures de flux et se servir des grappes répétées pour justifier du travail de fiabilité dans le backlog (voir le sujet 2.9, Travail opérationnel et travail non planifié). Compter les incidents par version est une tendance utile, mais cela ne devrait jamais devenir une mesure de reproche pour des développeurs individuels.

### Équipes de service et d'exploitation

Les équipes de service et d'exploitation créent les enregistrements et ressentent la pression autour de la priorité. Elles gagnent à une matrice claire, une liste de catégories courte et des moyens rapides de lier les doublons. Elles devraient vérifier les données dans leurs propres outils, comme la part d'enregistrements non catégorisés et le taux de reclassement, avant que d'autres le fassent. Les équipes d'exploitation sont bien placées pour mener la revue mensuelle par échantillon et alimenter la gestion des problèmes avec les grappes répétées.

### Direction et gouvernance

Les dirigeants veulent savoir si le service s'améliore et où investir. Ils devraient demander des taux normalisés, la répartition des priorités et la vue des répétitions, avec des annotations, et résister à un chiffre de volume unique. Les objectifs de « moins d'incidents » invitent à la suppression ; fixez donc plutôt les attentes sur des résultats comme l'impact sur les clients et la réduction des répétitions. La gouvernance devrait détenir la matrice de priorité et approuver ses changements, avec l'effet sur les courbes de tendance noté.

### Clients et utilisateurs

Les clients vivent les incidents comme du travail interrompu, non comme des catégories. Ils ont besoin d'un moyen simple de signaler une panne, d'une priorité équitable fondée sur leur impact et de mises à jour honnêtes. Si les signalements sont découragés ou si les priorités paraissent arbitraires, le volume baissera et la confiance avec lui. Partagez les principaux constats en termes que les utilisateurs reconnaissent, comme les services améliorés et les problèmes supprimés (voir le sujet 6.1, Métriques de satisfaction de la clientèle).

## En pratique : un exemple d'ITIL agile

Le service informatique d'un hôpital régional soutient un système de dossiers patients, un système de planification et un outil de messagerie du personnel. Tous les chiffres de cet exemple sont illustratifs.

Le rapport mensuel montre 640 incidents au dernier mois du trimestre, contre 520 le mois précédent. La direction demande un plan de redressement. Le responsable du service de planification, dont le compte a le plus augmenté, demande à regarder les données avant d'admettre que le service s'est dégradé.

Trois faits ressortent. Premièrement, le système de planification a accueilli ce mois-là un nouveau groupe de cliniques, et les utilisateurs actifs ont augmenté d'environ 30 pour cent (illustratif). Normalisé, le taux d'incidents pour 1 000 sessions était à peu près plat. Deuxièmement, 90 des enregistrements supplémentaires étaient liés à un seul incident parent, une interface défaillante avec un système de laboratoire ; le nombre de pannes distinctes n'avait donc augmenté que de quelques unités. Troisièmement, la répartition des priorités avait glissé : la part du plus haut niveau était de 2 pour cent le mois précédent et de 7 pour cent maintenant. Le taux de reclassement avait aussi doublé, et un échantillon de 20 enregistrements montrait qu'environ la moitié des hautes priorités avaient été abaissées à la clôture.

L'équipe prend trois décisions. Elle rapporte séparément les incidents parents et les enregistrements liés. Elle ajoute les sessions actives au rapport comme dénominateur. Elle tient une séance d'une demi-heure avec le centre de services et les responsables cliniques pour appliquer la matrice d'impact et d'urgence aux enregistrements échantillonnés, ce qui montre que « une clinique ne peut pas prendre de rendez-vous » avait été traité comme moyen par certains agents et élevé par d'autres. La matrice reçoit deux exemples cliniques par cellule.

Le risque de détournement qu'elle attrape est discret. Un responsable avait demandé aux agents d'éviter la priorité 1 pour le système de planification parce que chacune déclenchait une revue ; les enregistrements étaient donc ouverts à une priorité plus basse et relevés plus tard, ou pas du tout. Le taux de reclassement et la revue par échantillon ont exposé le schéma. L'équipe convient que les revues servent à apprendre, publie cet énoncé et suit comme garde-fou la part des incidents ouverts en dessous de la priorité de clôture. La concentration par catégorie montre aussi la panne d'interface en tête de liste ; un enregistrement de problème est donc ouvert et un correctif est programmé avec l'équipe des interfaces.

## Perspective sectorielle

**Startup.** Le volume est petit et l'équipe connaît chaque incident ; les taux et les matrices peuvent donc paraître lourds. Gardez un simple compte par service et une courte liste de catégories, et écrivez en une page ce qui compte comme un incident. Surveillez les répétitions, car une petite équipe peut éliminer vite une panne répétée et regagner du temps.

**Petite entreprise.** Le centre de services peut être une seule personne utilisant un outil hébergé. Utilisez les rapports standard de l'outil, gardez la priorité à quelques niveaux avec une règle simple d'impact et d'urgence, et vérifiez que les demandes ne sont pas comptées comme des incidents. Comparez d'un mois à l'autre avec des notes sur les changements, comme de nouveaux employés ou un nouveau logiciel.

**Grande entreprise.** De nombreux services, fournisseurs et centres font de la cohérence la question principale. Convenez d'une matrice d'impact et d'urgence, d'un schéma de catégories de profondeur limitée et d'une règle de dédoublonnage, et laissez les équipes locales ajouter des étiquettes sans changer le schéma partagé. Normalisez par service et revoyez les tendances avec des cartes de contrôle et des annotations. Les incidents causés par un fournisseur demandent une définition partagée dans les contrats (voir le sujet 5.1, Métriques de SLA, d'OLA et de XLA).

**Gouvernement et secteur public.** Les incidents peuvent comporter des obligations de déclaration, des besoins d'audit et un intérêt public, en particulier là où les services touchent aux droits ou à la sécurité des citoyens. Documentez la matrice de priorité et le schéma de catégories, conservez une piste d'audit des changements de priorité et soyez prudent avec tout chiffre publié, car la publication peut créer une forte pression sur la façon d'écrire les enregistrements. Les données d'usage peuvent être limitées par les règles de vie privée ; indiquez donc le dénominateur que vous pouvez légitimement utiliser (voir le sujet 8.5, Rapports réglementaires et gouvernementaux).

## Dossier d'affaires : motivations, ROI et TCO

La motivation est la gestion de la demande. Les incidents consomment un temps qualifié, interrompent le travail planifié et perturbent les utilisateurs. Comprendre le volume, la priorité et les répétitions permet à une organisation de supprimer des causes, de doter les effectifs au regard de la demande réelle et de montrer aux dirigeants où le travail de fiabilité rapporterait.

Le coût a trois parts. La mise en place couvre la définition de l'incident et de la demande, la convention de la matrice de priorité et du schéma de catégories, et la liaison des données d'usage aux services. Le coût courant est l'effort pour garder les enregistrements propres, une revue mensuelle par échantillon et une personne qui entretient le rapport. Un troisième coût est le temps d'agir sur les constats, d'où vient l'essentiel du retour ; prévoyez donc une capacité pour cela.

Le retour se décrit au mieux par des schémas que vous pouvez mesurer vous-même. Ils incluent moins de répétitions après le travail sur les problèmes, moins de temps passé en disputes de priorité, moins d'escalades surprises et une meilleure adéquation entre dotation et demande. Évitez de promettre un pourcentage de réduction des incidents ; il dépend du service, du point de départ et du travail accompli. Le coût total de possession est surtout du temps de personnes ; comptez-le donc, et comparez-le au temps que consomment actuellement les incidents répétés.

## Antimodèles et pièges

- **Rapporter un compte brut comme un score de santé.** L'usage, le changement et le comportement de signalement le déplacent tous. Montrez ensemble les taux normalisés, les comptes bruts et les annotations.
- **Des objectifs de moins d'incidents.** Ils récompensent la suppression et le mauvais étiquetage. Fixez des objectifs de réduction des répétitions et d'impact sur les clients, et gardez le nombre d'incidents comme information.
- **Compter les demandes comme des incidents.** Le volume monte et le service paraît plus mauvais qu'il ne l'est. Séparez les types d'enregistrements et rapportez chacun.
- **Une priorité à choix libre.** La priorité devient une négociation et la répartition perd son sens. Employez une matrice publiée et échantillonnez pour vérifier la cohérence.
- **Un arbre de catégories que personne n'utilise.** Les gens choisissent la première correspondance, et « autre » grossit. Gardez-le court, revoyez « autre » chaque mois et élaguez ce qui n'est pas utilisé.
- **Compter chaque ticket lié comme une panne distincte.** Une seule panne domine le mois. Rapportez les incidents parents et le nombre d'enregistrements liés.
- **Classer les agents ou les équipes par nombre d'incidents.** Les comptes par personne reflètent la répartition du travail et les habitudes de tickets. Agrégez par services et revoyez les schémas, non les personnes.
- **Ignorer les répétitions.** La même panne est réparée encore et encore, et personne ne détient la cause. Reliez les répétitions à des enregistrements de problèmes et attribuez un responsable.

## Modèle de maturité

| Dimension | 1 Initier | 2 Développer | 3 Standardiser | 4 Gérer | 5 Orchestrer |
| --- | --- | --- | --- | --- | --- |
| Définitions et comptage | Les gens ne s'accordent pas sur ce qu'est un incident ; les comptes viennent d'exports ad hoc | Certaines équipes séparent les demandes des incidents ; les règles diffèrent | Une définition, un filtre et une règle de dédoublonnage écrits pour toutes les équipes | Changements de définition consignés et montrés sur les courbes de tendance ; part des enregistrements non catégorisés suivie | Définitions revues avec les fournisseurs et les clients et révisées quand elles cessent d'éclairer les décisions |
| Normalisation et interprétation | Comptes bruts seulement | Données d'usage employées par quelques services | Une mesure d'usage nommée par service, issue d'une source séparée | Cartes de contrôle avec annotations employées en revue | Données d'usage, de changement et d'incidents reliées entre équipes et fournisseurs pour expliquer la demande |
| Pratique de la priorité | Priorité choisie à l'intuition | Une matrice existe dans certaines équipes | Une matrice avec des exemples, montrée là où la priorité est choisie | Répartition et taux de reclassement revus et échantillonnés chaque mois | Matrice réglée avec les clients et les responsables cliniques ou métier à mesure que les conditions changent |
| Répétitions et schémas | Répétitions remarquées de mémoire | Listes de catégories revues occasionnellement | Taux de répétition et de réouverture rapportés chaque mois avec une fenêtre indiquée | Grappes répétées reliées à des enregistrements de problèmes avec responsables et dates | Suppression des causes entre équipes et fournisseurs financée et suivie jusqu'à une demande réduite |

## Liste de vérification

- [ ] Une définition écrite sépare les incidents des demandes, des alertes et des problèmes.
- [ ] Les incidents parents et les enregistrements liés sont rapportés séparément.
- [ ] Chaque incident est attribué à un service du catalogue de services.
- [ ] Chaque service a une mesure d'usage nommée issue d'une source autre que l'outil d'incidents.
- [ ] Les rapports montrent le compte brut, le taux normalisé et des annotations pour les versions et les campagnes.
- [ ] Une carte de contrôle est employée avant que quiconque réagisse à un changement du volume hebdomadaire.
- [ ] La priorité est dérivée d'une matrice publiée d'impact et d'urgence avec des exemples.
- [ ] La répartition des priorités et le taux de reclassement sont revus ensemble chaque mois.
- [ ] La liste de catégories est courte, et la part des enregistrements « autre » et non catégorisés est suivie.
- [ ] Les taux de répétition et de réouverture emploient des fenêtres indiquées et sont rapportés séparément.
- [ ] Les grappes répétées sont reliées à des enregistrements de problèmes avec un responsable.
- [ ] Aucun rapport ne classe les agents individuels par nombre d'incidents.

## Prompts d'IA

**Vérifiez l'ambiguïté d'une définition du volume d'incidents.**

```text
Nous comptons le volume d'incidents de [service or team] à partir de [ITSM
tool]. Notre filtre actuel est [describe record types, statuses, and exclusions]
et notre période est [period]. Examinez la définition à la recherche
d'ambiguïtés, y compris la façon dont les demandes, les doublons, les tickets
fusionnés et les enregistrements annulés sont traités. Suggérez une règle écrite
claire et une courte liste d'exemples qui régleraient les désaccords. N'inventez
pas de valeurs de référence. Énumérez vos hypothèses et les questions
auxquelles je dois répondre pour compléter la définition.
```

**Concevez un taux d'incidents normalisé.**

```text
Pour le service [service name], je veux un taux d'incidents normalisé par
l'usage. Les mesures d'usage disponibles sont [list, for example active users,
sessions, transactions] issues de [source]. Comparez les options, dites
laquelle convient le mieux et pourquoi, et décrivez ce qui pourrait fausser
chacune. Proposez comment montrer le compte brut, le taux et les annotations
pour [events such as releases or campaigns] sur un même graphique. N'inventez ni
chiffres ni seuils. Énumérez vos hypothèses.
```

**Examinez une matrice d'impact et d'urgence.**

```text
Voici notre matrice de priorité : [paste impact levels, urgency levels, and the
resulting priorities], et voici [number] exemples d'incidents anonymisés :
[paste short descriptions]. Appliquez la matrice à chaque exemple, signalez où
deux lecteurs pourraient arriver à des priorités différentes et suggérez une
formulation ou des exemples qui réduisent le désaccord. Repérez les façons dont
la matrice pourrait être détournée. N'inventez ni cibles de réponse ni valeurs
de référence. Énumérez vos hypothèses.
```

**Analysez les catégories et les répétitions pour trouver des candidats à l'amélioration.**

```text
J'ai des enregistrements d'incidents pour [period] avec ces champs : [list
fields, for example service, category, CI, opening time, closing time, reopen
flag]. Décrivez une méthode pour trouver les principales catégories, séparer
les réouvertures des répétitions avec une fenêtre de [window] et choisir
[number] candidats à une investigation de problème. Expliquez comment repérer
les catégories fourre-tout et les enregistrements quasi doublons. N'inventez pas
de schémas dans des données que je ne vous ai pas montrées. Énumérez vos
hypothèses.
```

## Compétences d'IA

- [Compétence Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-skill/SKILL.md) : à utiliser pour trouver le sujet qui définit une métrique apparentée et le garde-fou qui doit se trouver à côté.
- [Compétence de maintenance Métriques de l'ITIL agile](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md) : à utiliser pour vérifier qu'un sujet de métrique modifié garde complets ses horloges, ses vecteurs de détournement et ses garde-fous.

## Points clés à retenir

- Le volume d'incidents reflète l'usage, le changement et le comportement de signalement autant que la qualité ; normalisez-le donc et annotez-le.
- Lisez la priorité comme un mélange, dérivez-la d'une matrice publiée d'impact et d'urgence et surveillez le taux de reclassement.
- Rapportez séparément les incidents parents et les enregistrements liés pour qu'une panne ne ressemble pas à un mois de travail courant.
- Les répétitions et les réouvertures sont les signaux les plus utiles, car ils désignent des causes et des correctifs qui n'ont pas tenu.
- Agrégez par services et équipes, jamais par agents individuels, et associez chaque métrique à un garde-fou.
- Servez-vous de cartes de contrôle et de vues de Pareto pour décider où regarder, puis donnez à chaque grappe un responsable et de la capacité.

## Références et lectures complémentaires

1. Axelos (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. ISO/IEC 20000-1, *Information technology: Service management: Service management system requirements*, International Organization for Standardization.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [Help desk software](https://en.wikipedia.org/wiki/Help_desk_software).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
13. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
