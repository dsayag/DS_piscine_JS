let coins = [5, 7, 1, 1, 2, 3, 22]

function pocketMoney(coins) {
    let calcul = 0;
    let newArray = [];

    for (let i = 0; i < coins.length; i++) {
        console.log("coins i : " + coins[i]);
        for (let j = 0; j < coins.length; j++) {
            console.log("coins j : " + coins[j]);
            calcul = coins[i] + coins[j]; // Calcul toutes les possibilités
            console.log("Résultat 1 : " + calcul); // Affiche toutes les possibilités            
            newArray.push(coins[i] + coins[j]);
        }
    }

    //console.log(newArray); // Affiche toutes les possibilités
    //console.log("Le nombre max est : " + Math.max(...calculGeneral));
    //console.log("Le nombre mini est : " + Math.min(...calculGeneral));

}

// Merci de ne pas effacer la ligne en dessous.
//exports.pocketMoney =  pocketMoney;

/*
function pocketMoney(coins){
    let P = coins.sort(function(a, b) {return a - b;})
      let sCoin = 0;
      for (let i = 0; i < P.length; i++) {
          if (P[i] > sCoin + 1){
          return sCoin + 1
      }
      sCoin += P[i]
      }
    return sCoin + 1
  }
*/

let res = pocketMoney(coins);

console.log(pocketMoney(coins));