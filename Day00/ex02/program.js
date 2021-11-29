let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

function threeLargestNumbers(array) {
    let newArray = [];
    array.sort(function (a, b) { return b - a });

    for(let i = 0 ; i < 3; i++){
        newArray.push(array[i]);
    }
    return newArray.reverse();
}

console.log(threeLargestNumbers(array));