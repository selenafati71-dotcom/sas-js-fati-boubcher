/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
  function tableaux(nombers){
    let plusgrande = nombers[0];
    let pluspetit = nombers[0];
    for(let i of nombers){
    if (i > plusgrande){
        plusgrande = i
    }else if (i < pluspetit){
        pluspetit = i 

    }
}
        return {
            plusgrande,
            pluspetit
        };

    }     
    
   
 
  
console.log(tableaux([10, 4, 15, 25,9]));