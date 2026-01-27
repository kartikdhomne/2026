// Write a function which will return list of negative numbers from array

let arr = [2, -9, 17, 0, 1, -10, 4, 8];

function countNegatives() {
    let negVal = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            negVal.push(arr[i]);
        }
    }
    return negVal;
}

console.log(countNegatives(arr));
