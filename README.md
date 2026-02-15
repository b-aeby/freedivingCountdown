# Freediving Countdown App

## Description

Freediving Countdown est une application web conçue pour aider à l'organisation et au déroulement des compétitions d'apnée (freediving), en particulier pour les épreuves en piscine (STA, DYN, DNF). Elle fournit un chronomètre précis, un affichage des informations des athlètes, et une gestion des listes de départ.

## Fonctionnalités

*   **Chronomètre précis :** Affiche le temps officiel et le compte à rebours pour le prochain départ.
*   **Affichage des informations des athlètes :** Affiche le nom, le prénom, le genre et le pays des athlètes sur le point de commencer.
*   **Gestion des listes de départ :**
    *   Importation des listes de départ depuis un fichier Excel.
    *   Gestion manuelle des listes de départ.
*   **Paramètres :**
    *   Mode manuel/automatique pour la gestion des départs.
    *   Réglage du volume des annonces sonores.
*   **Compatibilité PWA :** Peut être installée sur un appareil pour une utilisation hors ligne.

## Mode d'emploi

### Installation

1.  Clonez le dépôt GitHub :

    ```bash
    git clone <URL_DU_DEPOT>
    ```

2.  Ouvrez le fichier `index.html` dans votre navigateur web.

### Utilisation

1.  **Paramètres :**
    *   Cliquez sur l'icône d'engrenage <i class="fa-solid fa-gear"></i> en haut à droite pour ouvrir le panneau des paramètres.
    *   **Mode manuel :** Activez le mode manuel pour programmer les départs manuellement. Désactivez-le pour utiliser les données importées depuis un fichier Excel.
        *   **Heure début :** Définissez l'heure de début du premier départ (format HH:MM).
        *   **Intervalle (minutes) :** Définissez l'intervalle entre les départs (en minutes).
        *   **Répétitions :** Définissez le nombre de départs à programmer.
        *   Cliquez sur le bouton "Programmer" pour générer la liste des départs.
    *   **Importer un fichier Excel :**
        *   Activez le mode manuel.
        *   Cliquez sur le bouton "Choisir un fichier" et sélectionnez votre fichier Excel contenant la liste de départ.
        *   Cliquez sur le bouton "Importer".
        *   Le fichier Excel doit être structuré avec les colonnes suivantes :
            *   Colonne B : Genre
            *   Colonne C : Pays
            *   Colonne D : Prénom
            *   Colonne E : Nom de famille
            *   Colonne L : Official Top (heure de départ, format HH:MM)
            *   Colonne M : Zone (numéro de couloir)
    *   **Réglage du volume :** Utilisez le slider pour ajuster le volume des annonces sonores.

2.  **Affichage principal :**
    *   Le chronomètre affiche le temps officiel.
    *   Le compte à rebours affiche le temps restant avant le prochain départ.
    *   Les informations des athlètes (nom, prénom, pays) sont affichées pour les quatre prochains départs (A, B, C, D).

3.  **Bouton Muet :**
    *   Cliquez sur l'icône de volume en bas à droite pour activer ou désactiver le son.

### Raccourcis clavier

*   **M :** Activer/désactiver le son (disponible uniquement après le "Official Top").

## Structure du projet

*   `index.html`: Fichier HTML principal.
*   `css/styles.css`: Fichier CSS pour la mise en forme.
*   `js/`: Contient les fichiers JavaScript :
    *   `freedivingCountdown.js`: Logique principale de l'application.
    *   `settings.js`: Gestion des paramètres et de l'importation des données.
    *   `TimeDelta.js`: Classe pour calculer les différences de temps.
*   `vendor/`: Contient les librairies tierces (jQuery, Bootstrap, Tabulator, Luxon, SheetJS, country-code-converter, etc.).
*   `sw.js`: Fichier Service Worker pour la PWA.
*   `manifest.json`: Fichier manifest pour la PWA.
*   `audio/`: Contient les fichiers audio.
*   `img/flags/`: Contient les images des drapeaux.

## Dépendances

*   [jQuery](https://jquery.com/)
*   [Bootstrap](https://getbootstrap.com/)
*   [Tabulator](http://tabulator.info/)
*   [Luxon](https://moment.github.io/luxon/)
*   [SheetJS](https://sheetjs.com/)
*   [country-code-converter](https://www.npmjs.com/package/country-code-converter)

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

## Licence

Ce projet est sous licence [MIT](LICENSE).