// Find largest number in array

let arr = [1, 6, 7, 19, 3, 9]

function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}

console.log(findLargest(arr))