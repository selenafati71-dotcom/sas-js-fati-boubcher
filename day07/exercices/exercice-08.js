/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.


let candidats = [
    {    
        nom: "ouiame",
        score: 13
    },

    {    
        nom: "faty",
        score: 12
    },

    {    
        nom: "amina",
        score: 20
    },
]

function meilleurCandidat(condidats) {
    let maxScore = candidats[0].score;
    let maxName = candidats[0].nom;

    for (let i = 1; i < candidats.length; i++) {
        if (candidats[i].score > maxScore) {
            maxScore = condidats[i].score;
            maxName = condidats[i].nom;
        }
    }

    return maxName;
}

console.log(meilleurCandidat(candidats));
