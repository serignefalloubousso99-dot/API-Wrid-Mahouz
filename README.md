**#  API Wird Mahfouz

Une API REST publique et gratuite fournissant les textes authentiques du **Wird Mahfouz** (les litanies de protection) écrit par **Cheikh Akhmadou Bamba**. 

Cette API a été conçue pour faciliter le travail des développeurs (web et mobile) qui souhaitent intégrer ces précieux textes dans leurs applications sans avoir à gérer la saisie ou le stockage des données.

---

## URL de Base (Endpoint)

L'API est déployée et accessible publiquement via l'URL suivante :

> **`https://api-wrid-mahouz.onrender.com`**

---

## Routes Disponibles (Endpoints)

Toutes les requêtes doivent être effectuées avec la méthode `GET`. L'API renvoie les données au format `JSON`.

### 1. Récupérer l'intégralité des Wirds
Renvoie les trois variations du Wird (Kaamil, Khatam, Hafif).
- **Route :** `/api/wird`
- **Méthode :** `GET`

### 2. Récupérer le Wird Al-Kaamil (Le Complet)
- **Route :** `/api/wird/kaamil`
- **Méthode :** `GET`

### 3. Récupérer le Wird Al-Khatam (Le Sceau)
- **Route :** `/api/wird/khatam`
- **Méthode :** `GET`

### 4. Récupérer le Wird Al-Hafif (Le Léger)
- **Route :** `/api/wird/hafif`
- **Méthode :** `GET`

---

Technologies Utilisées
JavaScript / Node.js : Environnement d'exécution.

Express.js : Architecture et gestion des routes REST.

CORS : Activé pour autoriser les requêtes cross-origin depuis n'importe quelle application Front-end (React, Flutter, Next.js, etc.).

Hébergement : Render.

Auteur
El Hadji Fallou Bousso

Étudiant en Développement d'Applications Réparties (DAR) à l'Université Cheikh Akhmadoul Khadim (UCAK), Touba.

N'hésitez pas à utiliser cette API pour vos projets communautaires. Les contributions ou suggestions d'amélioration sont les bienvenues !

## Exemple de Réponse (JSON)

Voici à quoi ressemble la réponse lorsque vous appelez la route `/api/wird/hafif` :

```json
{
  "type": "hafif",
  "total_steps": 20,
  "steps": [
    {
      "id": 2,
      "text_ar": "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ. وَإِنِّيَ أُعِيذُهَا بِكَ وَذُرِّيَّتَهَا مِنَ الشَّيْطَانِ الرَّجِيمِ...",
      "count": 1,
      "audio": "/audio/hafif/step02.mp3"
    },
    {
      "id": 3,
      "text_ar": "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
      "count": 3,
      "audio": "/audio/hafif/step03.mp3"
    }
  ]
}**



