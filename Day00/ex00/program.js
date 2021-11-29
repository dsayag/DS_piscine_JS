let array = [3, 5, -4, 8, 10, 1, -1, 6];
let targetSum = 15;

function twoNumberSum(array, targetSum) {
    let tableau = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == targetSum) { // Si l'indice i + l'indice j est égale à somme de la cible
                tableau.push(array[i] + ' et ' + array[j]);                
            } else if (array[i] + array[j] !== targetSum) {  // Si l'indice i + l'indice j n'est pas égale à somme de la cible
                tableau;
            }
        }
    }
    console.log("Les nombres dont la somme est égale à la cible sont : " + tableau);
    return tableau;
}

let result = twoNumberSum(array, targetSum);