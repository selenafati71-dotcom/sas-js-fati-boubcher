/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
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
        score: 2
    },
]
function meilleurCandidat(condidats) {
    let tableau = [];
    for (let i = 0; i < condidats.length; i++){
        if ( condidats[i].score >= 10 ){
            tableau.push(condidats[i]);
        }
    }
    return tableau;
}
console.log(meilleurCandidat(candidats));