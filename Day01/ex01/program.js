let array = [2, 4, 1, 7, 1, 7];

function firstDuplicateValue(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) { // Si l'indice i du tableau est égal à l'indice j
                return array[i]; // Retourne la valeur du tableau
            }
        }
    }
    return -1
}

let result = firstDuplicateValue(array);
console.log(result);

// Merci de ne pas effacer la ligne en dessous.
// exports.firstDuplicateValue =  firstDuplicateValue;

//////////////////////////////////////////////////////////////////////////////
// Vérifier le 1er de tous les indices et pas seulement juste le 1er indice //
//////////////////////////////////////////////////////////////////////////////