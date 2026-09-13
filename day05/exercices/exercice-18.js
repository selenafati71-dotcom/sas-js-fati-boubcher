/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPTEUR D'OCCURRENCES DE LETTRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui compte combien de fois la lettre "e" (minuscule ou majuscule) apparaît dans un long paragraphe.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day05/exercices/exercice-18.js
 */
'use strict';


let paragraphe = "Je suis une etudiante en informatique";
function compterE(texte) {
    let compteur = 0;
    for (let lettre of texte.toLowerCase()) {
        if (lettre === "e") {
            compteur++;
        }
    }
    return compteur;
}
console.log(compterE(paragraphe));
