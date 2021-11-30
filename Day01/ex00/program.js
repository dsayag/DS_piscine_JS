let array = [10, 8, 45, 7, 15];
//let array = [];

function tabTriCarre(array) {
    let calcul;
    let newArray = [];
    //array.sort(function (a, b) { return a - b });
    
    for (let i = 0; i < array.length; i++) {
        calcul = array[i] * array[i];
        newArray.push(calcul);
        // Corriger et ajouter un sort pour prendre en compte les nombre négatif.              
    }

    console.log(newArray);
    
    if (array == ![]) {
        console.log('Le tableau est vide');         
    } else {        
        console.log("Le tableau n'est pas vide, ses valeurs sont : " + newArray.sort(function (a, b) { return a - b }));
    }

    return newArray.sort(function (a, b) { return a - b });

}

// Merci de ne pas effacer la ligne en dessous.
// exports.tabTriCarre =  tabTriCarre;

let result = tabTriCarre(array);