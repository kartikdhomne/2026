// Write a function to find the value in given array 

// Example :

let arr = [3, 1, 5, 4, 9, 6, 8]; value = 4

function findValue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}

console.log(findValue(arr, 7))