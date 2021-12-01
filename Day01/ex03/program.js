let str = "AAAABBBGGGTTTDDDRDFR"; // 20 caractères

function runLengthEncoding(str) {
    {
        let n = str.length;
        for (let i = 0; i < n; i++) { // Compter le nbre de caractères -> 20
            //console.log("nombre de caractère : " + n);
            //console.log("caractère i : " + str[i]); // Affiche les caractères

            let count = 0;
            while (i < n - 1 && str[i] == str[i + 1]) {
                count++;
                i++;
            }

            console.log(str[i]); // Print character and its count
            console.log(count);
        }
    }
}

let res = runLengthEncoding(str);
//console.log(runLengthEncoding(str));

// Merci de ne pas effacer la ligne en dessous.
// exports.runLengthEncoding = runLengthEncoding;