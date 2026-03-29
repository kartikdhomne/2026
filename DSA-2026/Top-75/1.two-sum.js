// Two Sum

let arr = [2, 7, 3, 5, 4]; arrTwo = [1, 2, 3, 4, 5]
target = 10;

// Step 1 : Basic 

function TwoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j]
            }
        }
    }
}

console.log(TwoSum(arr, target))

// Step 2 : TwoSum ( with Hashmap)

function TwoSumTwo(arr, target) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if (map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set(arr[i], i)
    }
}

console.log(TwoSumTwo(arr, target))

//  Step 2 : TwoSum ( with Two Pointers)

function TwoSumTwoPointers(arrTwo, target) {

    let left = 0;
    let right = arrTwo.length - 1;


    while (left < right) {
        let sum = arrTwo[left] + arrTwo[right]
        if (sum === target) {
            return [left, right]
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }

    return []
}

console.log(TwoSumTwoPointers(arrTwo, target))

