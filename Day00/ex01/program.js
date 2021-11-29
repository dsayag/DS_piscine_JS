function isPalindrome(arg1) {
    let str = arg1;
    let strReverse = str.split("").reverse().join(""); // Eclate un string en caractère unique, inverse les lettres, rassemble les caractères éclatés

    if (str === strReverse) {
        console.log(arg1 + ' est un Palindrome');
        //return true;
    } else
        console.log(arg1 + " n\'est pas un Palindrome");
        //return false;
}

isPalindrome("kayak");