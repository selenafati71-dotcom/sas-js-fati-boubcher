# 🔎 Jour 05 — Recherche

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

> En JavaScript, une chaîne de caractères (String) est-elle "mutable" (modifiable) ou "immuable" (immutable) ? Que cela implique-t-il quand on utilise `.toUpperCase()` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Une String en JavaScript est immutable, c’est-à-dire qu’on ne peut pas modifier directement la chaîne originale. Les méthodes comme .toUpperCase() créent une nouvelle chaîne sans changer l’originale.

> À compléter avec mes propres mots.

---

### Question 02

> Quelle est la différence entre `.slice()`, `.substring()` et `.substr()` ? Lequel est considéré comme déprécié ou moins recommandé ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
.slice(start, end) permet d’utiliser des positions négatives.
.substring(start, end) ne prend pas en compte les positions négatives.

> À compléter avec mes propres mots.

---

### Question 03

> Quelle méthode permet de transformer la chaîne `"A,B,C"` en un tableau `["A", "B", "C"]` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
La méthode .split() permet de transformer une chaîne en tableau en utilisant un séparateur.

> À compléter avec mes propres mots.

---

### Question 04

> Quelle est la différence entre `.indexOf()` et `.search()` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

indexOf():cherche la position d’un texte précis dans une chaîne.
.search():cherche aussi un texte, mais il peut utiliser une Expression Régulière (Regex).
..
> À compléter avec mes propres mots.

---

### Question 05

> À quoi servent les **Template Literals** (les backticks `` ` ``) par rapport aux simples quotes `'` ou doubles `"` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Les Template Literals utilisent les backticks ` `. Ils permettent notamment d’insérer facilement des variables dans une chaîne avec ${} et d’écrire du texte sur plusieurs lignes.

> À compléter avec mes propres mots.

---

### Question 06

> Comment vérifier de manière moderne si une chaîne *commence* par un mot spécifique ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
La méthode moderne pour vérifier si une chaîne commence par un texte précis est .startsWith().

> À compléter avec mes propres mots.

---

### Question 07

> Quelle méthode permet d'enlever les espaces vides au début et à la fin d'une chaîne, mais pas au milieu ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
La méthode .trim() permet de supprimer les espaces au début et à la fin d’une chaîne. Elle ne supprime pas les espaces qui sont au milieu.

> À compléter avec mes propres mots.

---

### Question 08

> Quelle est la différence de comportement entre `.replace("a", "b")` et `.replaceAll("a", "b")` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
replace():remplace seulement la première occurrence trouvée.
.replaceAll():remplace toutes les occurrences trouvées.

> À compléter avec mes propres mots.

---

### Question 09

> Qu'est-ce qu'une Expression Régulière (Regex) et pourquoi l'utilise-t-on avec les strings ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Une Expression Régulière (Regex) est un modèle utilisé pour rechercher, vérifier ou extraire des informations dans une chaîne de caractères.
Elle est utile pour rechercher des mots, des nombres, des emails, des formats particuliers, etc.
> À compléter avec mes propres mots.

---

### Question 10

> Peut-on utiliser la propriété `.length` sur une chaîne vide `""` ? Quel sera le résultat ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
Oui, on peut utiliser .length sur une chaîne vide "". Le résultat sera 0, car la chaîne ne contient aucun caractère.

> À compléter avec mes propres mots.


## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
