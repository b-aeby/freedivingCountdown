# FRI:diving Countdown

Application web de compte à rebours pour les compétitions d'apnée, conçue pour annoncer les heures de départ et gérer plusieurs départs successifs avec signaux audio.

## Fonctionnalités

- **Affichage du compte à rebours en temps réel** avec heures, minutes et secondes
- **Deux modes de départ** :
  - **Mode manuel** : Programmez des heures de départ personnalisées avec intervalles configurables
  - **Mode startlist** : Importez les données de compétition depuis des fichiers Excel
- **Annonces audio automatiques** :
  - Annonces avant le départ (5 min, 3 min, 2 min, 1 min, 30s, 20s, 10s, 5s, 4s, 3s, 2s, 1s)
  - Signal de départ à l'heure exacte
  - Annonces du compte à rebours après le départ (30 à 1 seconde)
  - Annulation automatique après 31 secondes
- **Affichage des participants** montrant :
  - Heure de départ et type d'épreuve (STA, DYN/DYNB, DNF)
  - Jusqu'à 4 participants par départ (Zones A, B, C, D)
  - Informations du participant : nom, sexe (♀/♂), pays avec drapeau
- **Import Excel** supportant plusieurs catégories d'épreuves (STA, DYN/DYNB, DNF)
- **Avancement automatique** au départ suivant quand le départ actuel se termine
- **Design réactif** pour les appareils de bureau et mobiles
- **Verrou d'écran** pour empêcher l'écran de s'éteindre pendant les événements
- **Support PWA** pour une utilisation hors ligne

## Installation

1. Clonez ou téléchargez les fichiers du projet
2. Ouvrez `index.html` dans un navigateur web moderne (Chrome, Firefox, Safari, Edge)
3. Aucun serveur ni processus de compilation requis - fonctionne localement

## Démarrage rapide

### Mode Manuel

1. Ouvrez le panneau des paramètres (icône ⚙️)
2. Activez "Mode manuel"
3. Remplissez les champs :
   - **Heure début** : Format HH:MM
   - **Intervalle** : Minutes entre les départs
   - **Répétitions** : Nombre de départs à programmer
4. Cliquez sur "Programmer"
5. Le compte à rebours démarre automatiquement pour chaque créneau

### Mode Startlist

1. Ouvrez le panneau des paramètres (icône ⚙️)
2. Activez "Mode startlist"
3. Cochez "Importer fichier Excel"
4. Sélectionnez votre fichier Excel de compétition (format : "2026 for app.xlsx")
5. Cliquez sur "Importer"
6. Le tableau des départs se remplira avec tous les départs et participants
7. Le compte à rebours commence automatiquement

## Format du fichier Excel

Votre fichier Excel doit contenir :

- **Plusieurs sections d'épreuves** avec en-têtes :
  - Static Apnea (STA)
  - Dynamic Apnea / Dynamic No Fins (DYN/DYNB)
  - Dynamic Freediving (DNF)

- **Colonnes de données** (pour chaque section) :
  - Colonne B : Sexe (f/m)
  - Colonne C : Pays (code IOC)
  - Colonne D : Nom de famille
  - Colonne E : Prénom
  - Colonne L : Official Top (heure de départ programmée HH:MM:SS)
  - Colonne M : Zone/Couloir (A, B, C, D)

## Interface utilisateur

### Affichage principal

- **Heure officielle** : Heure actuelle (mise à jour chaque seconde)
- **Départ suivant** : Compte à rebours jusqu'au prochain départ
- **Zones des participants** : 4 cartes affichant :
  - Lettre de la zone (A, B, C, D)
  - Nom du participant
  - Icône de sexe (♀ ou ♂)
  - Drapeau du pays et code

### Panneau des paramètres

- **Basculement de mode** : Basculez entre les modes Manuel et Startlist
- **Basculement d'import** : Basculez entre l'import de fichier et la programmation manuelle
- **Tableau des paramètres** : Visualisez tous les départs chargés avec détails des participants
  - Lignes extensibles affichant toutes les informations du participant
  - Code couleur par type d'épreuve
  - Nombre de participants affichés par départ

## Raccourcis clavier

- **Touche M** : Couper/Rétablir l'audio (disponible uniquement après le signal de départ)

## Fichiers audio

L'application utilise des annonces pré-enregistrées :
- `audio/otm*min.mp3` - Annonces de minutes (5, 4, 3, 2 min avant le départ)
- `audio/ot*.mp3` - Annonces de minutes (120, 90, 60, 30 secondes)
- `audio/[0-9]*.mp3` - Numéros du compte à rebours (1-30 secondes)
- `audio/ot.mp3` - Signal de départ ("Top!")
- `audio/plus_1.mp3` - Annonce après le départ (+1 seconde)
- `audio/start_cancelled.mp3` - Signal d'annulation (après 31 secondes)
- `audio/whiteNoise_3s.mp3` - Signal d'avertissement avant le départ

## Détails des fonctionnalités

### Gestion des épreuves

- Chaque départ est suivi indépendamment
- Progression automatique au départ suivant quand le départ actuel est annulé
- Tous les départs chargés d'avance pour un accès rapide
- Synchronisation en temps réel avec l'horloge système

### Accessibilité

- Affichage à contraste élevé pour la visibilité dans les environnements lumineux
- Polices grandes et faciles à lire
- Annonces audio claires avec volume ajustable
- Indicateurs de sexe et de nationalité avec icônes

### Affichage des données

- Départs organisés par type d'épreuve dans le tableau des paramètres
- Tous les détails visibles dans les lignes extensibles
- Nombre de participants affiché par départ
- Accès rapide à toutes les données de compétition

## Détails techniques

- Construit avec JavaScript vanilla (pas de frameworks)
- Utilise Tabulator.js pour la gestion des tableaux
- SheetJS (XLSX) pour l'analyse des fichiers Excel
- Luxon pour les calculs de temps
- Bootstrap pour l'interface réactive
- Font Awesome pour les icônes
- Support Service Worker pour la capacité hors ligne

## Exigences du navigateur

- Navigateurs modernes supportant :
  - JavaScript ES6
  - API FileReader
  - API Web Audio
  - Service Workers
  - Local Storage

Recommandé : Chrome 80+, Firefox 75+, Safari 13+, Edge 80+

## Dépannage

**Audio ne joue pas :**
- Vérifiez le volume du navigateur
- Cliquez sur le bouton "Son" pour rétablir l'audio
- Assurez-vous que les fichiers audio sont dans le répertoire `audio/`

**L'import Excel échoue :**
- Vérifiez que le format du fichier correspond à la structure attendue
- Vérifiez que toutes les colonnes requises sont présentes
- Assurez-vous que les valeurs de temps sont au bon format (HH:MM:SS)

**Le départ suivant ne s'active pas :**
- Vérifiez que plusieurs départs sont chargés
- Assurez-vous que le départ actuel est terminé (après 31 secondes)
- Vérifiez que l'heure du prochain départ est dans le futur

## Licence

Créé pour les compétitions d'apnée. Libre de modifier et distribuer.

## Crédits

- Tabulator.js pour les tableaux dynamiques
- SheetJS pour l'analyse des fichiers Excel
- Luxon pour une gestion robuste de la date/heure
- Bootstrap et Font Awesome pour les composants UI
