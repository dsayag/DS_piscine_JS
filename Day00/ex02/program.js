let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

function threeLargestNumbers(array) {
    let newArray = [];
    array.sort(function (a, b) { return b - a });

    for(let i = 0 ; i < 3; i++){
        newArray.push(array[i]);
    }
    newArray.reverse();
    console.log(newArray);
}

let result = threeLargestNumbers(array);