# freedivingCountdown
Freediving countdown app for AIDA competitions


#TODO: 
 - Completer le sw pour mettre ne cache les nouveaux scripts (sheet.js et TimeDelta.js)
 - Gérer les données locales pour garder les paramètres si l'application est fermée (import startlist)
 - Documentation complète
 
## Améliorations Potentielles

Voici une liste d'améliorations potentielles pour ce projet, classées par ordre d'importance (du plus important au moins important) :

1.  **Gestion des erreurs et feedback utilisateur :**
    *   Implémenter une gestion robuste des erreurs avec des messages clairs pour l'utilisateur (via l'interface utilisateur et non des `alert()`). Ceci est crucial pour la robustesse de l'application et l'expérience utilisateur.

2.  **Validation des entrées utilisateur :**
    *   Ajouter une validation rigoureuse des entrées dans les formulaires pour éviter les erreurs et les comportements inattendus.

3.  **Calculs de temps (Utilisation de Luxon systématique) :**
    *   Migrer complètement vers la librairie `luxon` pour les manipulations de dates et de temps, afin d'éviter les problèmes liés à l'objet `Date` natif et de bénéficier d'une API plus performante.

4.  **Persistance des paramètres :**
    *   Sauvegarder les paramètres utilisateur (volume, heure de début, etc.) dans le `localStorage` pour une meilleure expérience utilisateur.

5.  **Accessibilité :**
    *   Améliorer l'accessibilité de l'application en utilisant des balises sémantiques HTML5, en ajoutant des attributs `alt` aux images, et en fournissant des labels appropriés pour les formulaires.

6.  **Modularité et organisation du code :**
    *   Refactoriser le code en fonctions plus petites et spécialisées pour améliorer la lisibilité et la maintenabilité.

7.  **Performance :**
    *   Minifier les fichiers CSS et JavaScript pour réduire les temps de chargement.
    *   Envisager le chargement différé des images (`loading="lazy"`).

8.  **Nommage (TimeDelta) :**
    *   Renommer `getTimeDelta` pour être plus explicite (ex: `getTimeDifferenceMilliseconds`).

9.  **Frameworks/Libraries (Considérer une migration future) :**
    *   *À plus long terme*, évaluer l'opportunité de migrer vers un framework plus moderne comme React, Vue.js ou Angular pour une meilleure gestion de l'état et une plus grande modularité.  Ceci est un changement majeur qui nécessiterait une refonte importante de l'application.