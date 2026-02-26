// TWO SUM

let arr = [2, 5, 7, 1, 9, 3];
target = 10;

// Method 1 (Hashmap)

function TwoSum(arr, target) {
    if (arr.length === 0) return;

    let map = new Map();
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }

    return result;
}

console.log(TwoSum(arr, target));

// Method 2 (Two Pointers) use only when arr is sorted else inconsistent output

function TwoPointerSum(arr, target) {
    if (arr.length === 0) return;

    let min = 0;
    let max = arr.length - 1;

    while (min < max) {
        let sum = arr[min] + arr[max];

        if (sum < target) {
            min++
        } else if (sum > target) {
            max--
        } else {
            return [min, max]
        }
    }

    return null
}

console.log(TwoPointerSum(arr, target))