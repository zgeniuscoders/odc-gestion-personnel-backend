# Documentation API Départements

## 1. Récupérer tous les Départements

### URL
```
GET /departements
```

### Description
Cette API permet de récupérer une liste de tous les départements dans le système.

### Réponse
La réponse contient un tableau d'objets, chacun représentant un département avec ses postes associés.

### Exemple de Réponse
```json
{
    "data": [
        {
            "id": 1,
            "nom": "Finance",
            "description": "bla bla",
            "createdAt": "2025-02-10T14:56:29.000+00:00",
            "updatedAt": "2025-02-10T14:56:29.000+00:00",
            "postes": [
                {
                    "id": 1,
                    "titre": "admin",
                    "departmentId": 1,
                    "description": "bla bla",
                    "salaire": "300.00",
                    "createdAt": "2025-02-10T15:00:29.000+00:00",
                    "updatedAt": "2025-02-10T15:00:29.000+00:00"
                }
            ]
        }
    ]
}
```

## 2. Ajouter un Département

### URL
```
POST /departements
```

### Description
Cette API permet d'ajouter un nouveau département dans le système.

### Corps de la Requête
```json
{
    "nom": "Finance",
    "description": "bla bla"
}
```

### Réponse
```json
{
    "id": 2,
    "nom": "Finance",
    "description": "bla bla",
    "createdAt": "2025-02-10T15:30:00.000+00:00",
    "updatedAt": "2025-02-10T15:30:00.000+00:00"
}
```

### Cas d'Erreur
Si des champs requis ne sont pas fournis, vous pourriez recevoir une réponse d'erreur comme celle-ci :

```json
{
    "errors": [
        {
            "message": "The nom field must be defined",
            "rule": "required",
            "field": "nom"
        },
        {
            "message": "The description field must be defined",
            "rule": "required",
            "field": "description"
        }
    ]
}
```

## 3. Mettre à Jour un Département

### URL
```
PUT /departements/{id}
```
*Remplacez `{id}` par l'identifiant unique du département à mettre à jour.*

### Corps de la Requête
```json
{
    "nom": "Finance",
    "description": "Nouvelle description"
}
```

### Réponse
```json
{
    "id": 1,
    "nom": "Finance",
    "description": "Nouvelle description",
    "updatedAt": "2025-02-10T16:00:00.000+00:00"
}
```

## 4. Supprimer un Département

### URL
```
DELETE /departements/{id}
```
*Remplacez `{id}` par l'identifiant unique du département à supprimer.*

### Réponse
```json
{
    "message": "Département supprimé avec succès.",
    "id": 1
}
```

# Documentation API Postes

## 1. Récupérer tous les Postes

### URL
```
GET /postes
```

### Description
Cette API permet de récupérer une liste de tous les postes dans le système, y compris les personnels associés à chaque poste.

### Réponse
La réponse contient un tableau d'objets, chacun représentant un poste avec ses détails, son département et les personnels associés.

### Exemple de Réponse
```json
{
    "data": [
        {
            "id": 1,
            "titre": "admin",
            "departmentId": 1,
            "description": "bla bla",
            "salaire": "300.00",
            "createdAt": "2025-02-10T15:00:29.000+00:00",
            "updatedAt": "2025-02-10T15:00:29.000+00:00",
            "department": {
                "id": 1,
                "nom": "Finance",
                "description": "bla bla",
                "createdAt": "2025-02-10T14:56:29.000+00:00",
                "updatedAt": "2025-02-10T14:56:29.000+00:00"
            },
            "personnels": [
                {
                    "id": 1,
                    "nom": "matondo",
                    "postnom": "djjd",
                    "prenom": "djdjdjd",
                    "email": "ejjejejeje",
                    "numeroTelephone": "ejejjeje",
                    "profile": "https://www.djdjd.com",
                    "dateNaissance": "2025-02-10",
                    "dateEmbauche": "2025-02-10",
                    "posteId": 1,
                    "createdAt": "2025-02-10T19:09:26.000+00:00",
                    "updatedAt": "2025-02-10T19:09:26.000+00:00"
                },
                {
                    "id": 2,
                    "nom": "matondo",
                    "postnom": "djjd",
                    "prenom": "djdjdjd",
                    "email": "ejjejejeje",
                    "numeroTelephone": "ejejjeje",
                    "profile": "https://www.djdjd.com",
                    "dateNaissance": "2025-02-10",
                    "dateEmbauche": "2025-02-10",
                    "posteId": 1,
                    "createdAt": "2025-02-10T19:10:16.000+00:00",
                    "updatedAt": "2025-02-10T19:10:16.000+00:00"
                }
            ]
        }
    ]
}
```

## 2. Ajouter un Poste

### URL
```
POST /postes
```

### Description
Cette API permet d'ajouter un nouveau poste dans le système.

### Corps de la Requête
```json
{
    "titre": "admin",
    "departmentId": 1,
    "description": "bla bla",
    "salaire": "300.00"
}
```

### Réponse
```json
{
    "id": 2,
    "titre": "admin",
    "departmentId": 1,
    "description": "bla bla",
    "salaire": "300.00",
    "createdAt": "2025-02-10T16:00:00.000+00:00",
    "updatedAt": "2025-02-10T16:00:00.000+00:00"
}
```

### Cas d'Erreur
Si des champs requis ne sont pas fournis, vous pourriez recevoir une réponse d'erreur comme celle-ci :

```json
{
    "errors": [
        {
            "message": "The titre field must be defined",
            "rule": "required",
            "field": "titre"
        },
        {
            "message": "The salaire field must be defined",
            "rule": "required",
            "field": "salaire"
        },
        {
            "message": "The description field must be defined",
            "rule": "required",
            "field": "description"
        },
        {
            "message": "The departmentId field must be defined",
            "rule": "required",
            "field": "departmentId"
        }
    ]
}
```

## 3. Mettre à Jour un Poste

### URL
```
PUT /postes/{id}
```
*Remplacez `{id}` par l'identifiant unique du poste à mettre à jour.*

### Corps de la Requête
```json
{
    "titre": "admin",
    "description": "Nouvelle description",
    "salaire": "350.00"
}
```

### Réponse
```json
{
    "id": 1,
    "titre": "admin",
    "departmentId": 1,
    "description": "Nouvelle description",
    "salaire": "350.00",
    "updatedAt": "2025-02-10T16:30:00.000+00:00"
}
```

## 4. Supprimer un Poste

### URL
```
DELETE /postes/{id}
```
*Remplacez `{id}` par l'identifiant unique du poste à supprimer.*

### Réponse
```json
{
    "message": "Poste supprimé avec succès.",
    "id": 1
}
```

Cette documentation inclut toutes les méthodes nécessaires pour gérer les postes dans le système, avec des exemples de réponses et des cas d'erreur pour l'ajout d'un poste, ainsi que les personnels associés à chaque poste.

# Documentation API Personnels

## 1. Récupérer tous les Personnels


```
GET /personnels
```

### Description
Cette API permet de récupérer une liste de tous les personnels dans le système.

### Réponse
La réponse contient un tableau d'objets, chacun représentant un personnel.

### Exemple de Réponse
```json
{
    "data": [
        {
            "id": 1,
            "nom": "matondo",
            "postnom": "djjd",
            "prenom": "djdjdjd",
            "email": "ejjejejeje",
            "numeroTelephone": "ejejjeje",
            "profile": "https://www.djdjd.com",
            "dateNaissance": "2025-02-10",
            "dateEmbauche": "2025-02-10",
            "posteId": 1,
            "createdAt": "2025-02-10T19:09:26.000+00:00",
            "updatedAt": "2025-02-10T19:09:26.000+00:00",
            "poste": {
                "id": 1,
                "titre": "admin",
                "departmentId": 1,
                "description": "bla bla",
                "salaire": "300.00",
                "createdAt": "2025-02-10T15:00:29.000+00:00",
                "updatedAt": "2025-02-10T15:00:29.000+00:00"
            }
        },
    ]
}
```

## 2. Récupérer un Personnel

### URL
```
GET /personnels/{id}
```
*Remplacez `{id}` par l'identifiant unique du personnel.*

### Description
Cette API permet de récupérer les informations d'un personnel spécifique.

### Réponse
La réponse est un objet contenant les détails du personnel.

### Exemple de Réponse
```json
{
  "data": {
    "id": 1,
    "nom": "matondo",
    "postnom": "djjd",
    "prenom": "djdjdjd",
    "email": "ejjejejeje",
    "numeroTelephone": "ejejjeje",
    "profile": "https://www.djdjd.com",
    "dateNaissance": "2025-02-10",
    "dateEmbauche": "2025-02-10",
    "posteId": 1,
    "poste": {
      "id": 1,
      "titre": "admin",
      "description": "bla bla",
      "salaire": "300.00"
    }
  }
}
```

## 3. Ajouter un Personnel

### URL
```
POST /personnels
```

### Description
Cette API permet d'ajouter un nouveau personnel dans le système.

### Corps de la Requête
```json
{
    "nom": "matondo",
    "postnom": "djjd",
    "prenom": "djdjdjd",
    "email": "ejjejejeje",
    "numeroTelephone": "ejejjeje",
    "profile": "https://www.djdjd.com",
    "dateNaissance": "2025-02-10",
    "dateEmbauche": "2025-02-10",
    "posteId": 1
}
```

### Réponse
```json
{
    "id": 3,
    "nom": "matondo",
    "postnom": "djjd",
    "prenom": "djdjdjd",
    "email": "ejjejejeje",
    "numeroTelephone": "ejejjeje",
    "profile": "https://www.djdjd.com",
    "dateNaissance": "2025-02-10",
    "dateEmbauche": "2025-02-10",
    "posteId": 1
}
```

### Cas d'Erreur
Si des champs requis ne sont pas fournis, vous pourriez recevoir une réponse d'erreur comme celle-ci :

```json
{
    "errors": [
        {
            "message": "The nom field must be defined",
            "rule": "required",
            "field": "nom"
        },
        {
            "message": "The postnom field must be defined",
            "rule": "required",
            "field": "postnom"
        },
        {
            "message": "The prenom field must be defined",
            "rule": "required",
            "field": "prenom"
        },
        {
            "message": "The email field must be defined",
            "rule": "required",
            "field": "email"
        },
        {
            "message": "The numeroTelephone field must be defined",
            "rule": "required",
            "field": "numeroTelephone"
        },
        {
            "message": "The profile field must be defined",
            "rule": "required",
            "field": "profile"
        },
        {
            "message": "The dateNaissance field must be defined",
            "rule": "required",
            "field": "dateNaissance"
        },
        {
            "message": "The dateEmbauche field must be defined",
            "rule": "required",
            "field": "dateEmbauche"
        },
        {
            "message": "The posteId field must be defined",
            "rule": "required",
            "field": "posteId"
        }
    ]
}
```

## 4. Mettre à Jour un Personnel

### URL
```
PUT /personnels/{id}
```
*Remplacez `{id}` par l'identifiant unique du personnel à mettre à jour.*

### Corps de la Requête
```json
{
    "email": "nouveauemail@example.com",
    "numeroTelephone": "123456789"
}
```

## 5. Supprimer un Personnel

### URL
```
DELETE /personnels/{id}
```
*Remplacez `{id}` par l'identifiant unique du personnel à supprimer.*

### Réponse
```json
{
    "message": "Personnel supprimé avec succès.",
}
```
