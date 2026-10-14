# Listes de vérification

Trois listes de vérification pour l'équipe du programme : une pour revoir une seule métrique, une pour lancer un tableau de bord et une pour auditer un programme de métriques. Employez-les comme invitations à une conversation avec les équipes, non comme un formulaire à remplir et à classer. Adaptez-les, et laissez de côté les éléments qui ne conviennent pas à votre contexte.

## Liste de vérification de la revue d'une métrique

Employez-la avant qu'une métrique soit adoptée et à chaque revue périodique (voir le sujet 1.4, Gouvernance et responsabilité des métriques).

**But**

- [ ] La métrique répond à une question qu'un public nommé a posée.
- [ ] La décision qu'elle devrait éclairer est écrite.
- [ ] Elle mesure un résultat, ou elle est clairement associée à un résultat (voir le sujet 1.3, Les résultats plutôt que la production : choisir ce qu'il faut mesurer).

**Définition**

- [ ] Une définition écrite, une formule, une unité et une source de données existent.
- [ ] Les règles d'horloge ou de frontière sont explicites (quand le comptage commence, s'arrête et se met en pause).
- [ ] Un responsable est nommé, ainsi qu'une personne à qui demander quand le chiffre paraît faux.
- [ ] Les limites connues des données sont consignées, y compris les lacunes et les changements dans la manière dont elles ont été saisies.

**Honnêteté**

- [ ] Le vecteur de détournement le plus probable est écrit.
- [ ] Une métrique ou pratique de garde-fou associée est en place.
- [ ] La métrique décrit une équipe, un service ou un système, et ne classe jamais des individus.
- [ ] Les mesures de temps montrent une médiane et un percentile élevé, avec la taille de l'échantillon (voir le sujet 1.6, Culture statistique pour les métriques de service).
- [ ] Une ligne de base de plusieurs périodes existe, pour que les changements se lisent par rapport à la variation ordinaire.

**Usage**

- [ ] L'équipe qui fait le travail voit d'abord le chiffre et a aidé à le définir.
- [ ] La dernière revue a mené à une décision consignée, y compris la décision d'attendre.
- [ ] Une condition de retrait de la métrique est écrite.

## Liste de vérification du lancement d'un tableau de bord

Employez-la avant qu'un tableau de bord soit montré à son public (voir le sujet 11.1, Concevoir un tableau de bord de métriques de service).

**Public et contenu**

- [ ] Le public et ses questions sont écrits, et le public a aidé à revoir une esquisse.
- [ ] La vue compte au plus environ neuf mesures, le détail étant un cran plus bas.
- [ ] L'ensemble est équilibré entre flux, qualité, fiabilité, expérience et coût.
- [ ] Chaque mesure a une compagne qui garde contre sa distorsion probable.

**Clarté**

- [ ] Chaque valeur montre la tendance et le contexte, les événements étant notés.
- [ ] Chaque mesure a une définition, une source, un responsable, une heure d'actualisation et des lacunes connues à un clic.
- [ ] Les objectifs sont montrés comme des références, et toute couleur d'état suit une règle énoncée qui tient compte de la variation.
- [ ] La décoration qui n'ajoute aucune information a été retirée.

**Confiance et exploitation**

- [ ] La charte a été convenue, et les vues au niveau individuel sont désactivées (voir le sujet 11.3, Déployer les métriques sans semer la peur).
- [ ] Les équipes ont vu leurs propres données et ont eu le temps de les corriger.
- [ ] Les données sont tirées automatiquement, avec des contrôles de fraîcheur et un rapprochement avec la source (voir le sujet 11.2, Panorama des outils).
- [ ] Un responsable nommé, une date de revue et une voie de contestation existent.
- [ ] Les rapports que ce tableau de bord remplace ont une date de retrait.

## Liste de vérification de l'audit d'un programme

Employez-la deux fois par an, avec les équipes, à côté de l'autoévaluation (voir le sujet 12.5, Autoévaluation de la maturité).

**But et confiance**

- [ ] Le programme a un commanditaire et une charte écrite que les dirigeants suivent.
- [ ] Les violations signalées de la charte ont été traitées et leurs suites publiées sans noms.
- [ ] Les sondages d'équipes et les signalements de quasi-incidents ne suggèrent pas une peur croissante.
- [ ] Aucun classement d'équipes ou d'individus n'existe nulle part dans les outils ou les diapositives de l'organisation.

**Mesures et données**

- [ ] Chaque équipe peut nommer les décisions que ses mesures ont éclairées le dernier trimestre.
- [ ] Les définitions sont gardées dans un catalogue portable, avec des responsables.
- [ ] La couverture des sources, la fiabilité de la chaîne de données et le rapprochement sont vérifiés et visibles.
- [ ] Un export des définitions et de l'historique a été testé au cours de la dernière année.

**Équilibre et largeur**

- [ ] Les mesures de résultats côtoient les mesures d'activité dans chaque vue.
- [ ] Les mesures liées à l'IA suivent les lignes de base, l'échantillonnage et les résultats vérifiés, non le seul volume (voir le sujet 10.4, Inflation des métriques et dilution de la qualité).
- [ ] Des mesures de coût, de risque et de personnes sont présentes là où elles comptent, et aucune ne sert à classer des individus.

**Amélioration**

- [ ] Les actions d'amélioration de la dernière revue sont achevées ou abandonnées avec une raison.
- [ ] Des mesures et des rapports ont été retirés au cours de la dernière année.
- [ ] L'effort demandé aux équipes pour la mesure a été estimé et leur est acceptable.
- [ ] Le programme lui-même a été revu avec les équipes, et le plan a été changé en conséquence (voir le sujet 11.5, Une feuille de route d'adoption progressive).
