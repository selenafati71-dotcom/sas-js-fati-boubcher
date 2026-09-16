# 🔎 Jour 07 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questions


### Question 01

> Quelle est la différence entre la notation pointée (`objet.propriete`) et la notation crochets (`objet["propriete"]`) ? Quand est-il obligatoire d'utiliser les crochets ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
-->La notation pointée permet d'accéder facilement à une propriété quand je connais son nom directement.
--> Avec les crochets, je peux aussi utiliser une variable comme nom de propriété. Les crochets sont obligatoires quand le nom de la propriété contient des caractères spéciaux ou un espace.

> À compléter avec mes propres mots.

---

### Question 02

> Que se passe-t-il si on tente d'accéder à une propriété qui n'existe pas dans un objet ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Si j'essaie d'accéder à une propriété qui n'existe pas, JavaScript retourne undefined.
let utilisateur = { nom: "Fatima" };

> À compléter avec mes propres mots.

---

### Question 03

> Comment ajouter une nouvelle propriété à un objet déjà existant ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Je peux simplement créer une nouvelle propriété avec la notation pointée ou les crochets.

> À compléter avec mes propres mots.

---

### Question 04

> Comment supprimer une propriété d'un objet (mot-clé spécifique) ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
J'utilise le mot-clé delete.

> À compléter avec mes propres mots.

---

### Question 05

> Quelle est la boucle spécifique recommandée pour parcourir les *clés* d'un objet ? (`for...of` ou `for...in`) ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Pour parcourir les clés d'un objet, j'utilise for...in.
> À compléter avec mes propres mots.

---

### Question 06

> Qu'est-ce que le mot-clé `this` lorsqu'il est utilisé à l'intérieur d'une méthode (une fonction) d'un objet ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
this représente l'objet qui utilise la méthode. Il permet d'accéder aux propriétés de cet objet.

> À compléter avec mes propres mots.

---

### Question 07

> Qu'est-ce que le format **JSON** (JavaScript Object Notation) par rapport à un objet JavaScript classique ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
JSON est un format texte utilisé pour stocker et échanger des données. Il ressemble à un objet JavaScript, mais c'est une chaîne de caractères.

> À compléter avec mes propres mots.

---

### Question 08

> Quelle méthode native permet de convertir un objet JS en chaîne JSON (String) ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
La méthode est JSON.stringify()

> À compléter avec mes propres mots.

---

### Question 09

> Quelle méthode native permet de convertir une chaîne JSON en objet JS ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
La méthode est JSON.parse().

> À compléter avec mes propres mots.

---

### Question 10

> Comme les tableaux, les objets sont assignés par "référence". Que cela signifie-t-il si vous faites `const obj2 = obj1;` et que vous modifiez `obj2` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Quand je fais const obj2 = obj1, les deux variables font référence au même objet. Donc si je modifie obj2, la modification apparaît aussi dans obj1.

> À compléter avec mes propres mots.


## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
