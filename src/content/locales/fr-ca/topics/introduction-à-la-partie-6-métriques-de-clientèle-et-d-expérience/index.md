# Introduction à la partie 6 : Métriques de clientèle et d'expérience

**Les métriques de clientèle et d'expérience demandent si les personnes qui utilisent un service s'en trouvent mieux, question à laquelle les mesures opérationnelles et de livraison ne peuvent répondre qu'indirectement.**

Une équipe peut clore chaque incident dans sa cible, livrer chaque changement dans les délais et laisser quand même les utilisateurs frustrés. Les chiffres opérationnels décrivent ce qu'a fait l'organisation de service. Les chiffres d'expérience décrivent ce que l'utilisateur a ressenti et accompli. Les deux sont nécessaires, car un tableau de bord vert et un client mécontent peuvent coexister, et seul le second décide si le service est apprécié.

L'agile et ITIL se rencontrent ici naturellement. La pratique agile traite le logiciel fonctionnel et la collaboration avec le client comme la mesure du progrès, et elle emploie une rétroaction fréquente pour se diriger. ITIL 4 décrit la valeur comme co-créée avec le consommateur plutôt que livrée à lui ; l'expérience et les résultats du consommateur font donc partie du service, non d'un rapport écrit après coup. Mesurer l'expérience signifie donc recueillir cette rétroaction à dessein, la lire honnêtement et agir assez vite pour qu'elle compte.

Les données d'expérience sont aussi faciles à mal lire. Les scores d'enquête dépendent de qui répond, du moment où on le demande et de la formulation de la question. Les petits échantillons oscillent fortement, et un score qui monte peut ne refléter qu'un changement dans l'identité des répondants. Lisez chaque mesure de cette partie comme une preuve sur une équipe, un service ou un parcours, jamais comme un classement d'individus, et associez-la à un garde-fou afin qu'elle ne puisse pas être améliorée en changeant l'enquête au lieu du service (voir le sujet 1.2, Loi de Goodhart et psychologie des métriques).

## Sujets de cette partie

- **6.1 Métriques de satisfaction de la clientèle** : satisfaction de la clientèle (CSAT), indice de recommandation net (NPS), score d'effort client (CES), conception d'enquêtes, biais de réponse et taille d'échantillon.
- **6.2 Accords de niveau d'expérience** : mesurer l'expérience plutôt que seulement des cibles opérationnelles, à l'aide de mesures de sentiment, d'effort et de parcours.
- **6.3 Métriques d'adoption des services et de catalogue** : usage des éléments de catalogue, adoption et abandon, mélange de demandes et traitement du catalogue comme un backlog de produit.
- **6.4 Expérience des utilisateurs et des employés** : expérience numérique des employés, friction, temps perdu en problèmes informatiques et résultats pour les clients internes.
- **6.5 Réalisation de la valeur et résultats métier** : relier le travail de service aux résultats métier, suivi des bénéfices et limites de l'attribution.

## Comment ces sujets s'articulent

Le sujet 6.1 (voir le sujet 6.1, Métriques de satisfaction de la clientèle) fournit les instruments de base : les mesures d'enquête et la discipline pour les recueillir. Il expose aussi les limites de ces instruments, y compris le biais de réponse et la taille d'échantillon, qui s'appliquent à tous les autres sujets de la partie. Lisez-le d'abord, car les sujets suivants réutilisent ses mesures et héritent de ses mises en garde.

Le sujet 6.2 (voir le sujet 6.2, Accords de niveau d'expérience) prend ces instruments et s'en sert pour compléter les cibles opérationnelles. Un service peut atteindre une cible de temps de réponse et produire quand même une mauvaise expérience ; un accord de niveau d'expérience se place donc à côté de l'accord de niveau de service classique et ne le remplace pas. L'association fonctionne dans les deux sens. Les données opérationnelles expliquent pourquoi un score d'expérience a bougé, et les données d'expérience montrent si une cible opérationnelle vise la bonne chose.

Les sujets 6.3 et 6.4 regardent le comportement et la friction au lieu de l'opinion. L'adoption et l'abandon du sujet 6.3 (voir le sujet 6.3, Métriques d'adoption des services et de catalogue) montrent ce que les gens font réellement, ce qui vérifie ce qu'ils disent dans une enquête. La friction et le temps perdu du sujet 6.4 (voir le sujet 6.4, Expérience des utilisateurs et des employés) montrent le coût d'un mauvais service pour le client interne. Les mesures comportementales protègent les mesures d'enquête contre les réponses polies ou non représentatives, et les enquêtes expliquent le comportement que les seules données d'usage ne peuvent pas expliquer.

Le sujet 6.5 (voir le sujet 6.5, Réalisation de la valeur et résultats métier) clôt la partie en demandant si tout cela a changé un résultat qui importe à l'entreprise. C'est le sujet le plus prudent, car l'attribution est difficile : de nombreuses choses font bouger un résultat métier, et une équipe de service ne devrait revendiquer que ce que ses preuves soutiennent. Il protège le reste de la partie contre la mesure de la satisfaction pour elle-même.

Plusieurs paires de garde-fous en découlent. Un score de satisfaction devrait être lu avec son taux de réponse et sa taille d'échantillon. Une mesure d'effort ou de sentiment devrait être lue avec les données opérationnelles qui la sous-tendent. Un chiffre d'adoption devrait être lu avec l'abandon, afin qu'un élément de catalogue populaire que les gens abandonnent ne soit pas compté comme un succès. Les mesures de résolution rapide des parties précédentes devraient être lues avec la satisfaction, afin que la vitesse ne soit pas achetée au prix de mauvais résultats (voir le sujet 2.2, Délai de livraison, temps de cycle et efficacité du flux, pour les horloges qu'emploient ces mesures de vitesse).

Les parties suivantes poursuivent le même fil. Les mesures financières et de niveau de service des parties 7 et 8 décrivent le coût et l'engagement, et la vue d'expérience de cette partie est le contrôle que le coût et l'engagement sont dirigés vers quelque chose que les utilisateurs apprécient.
