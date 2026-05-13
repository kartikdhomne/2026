
let arr = [2, 3, 4, 5]

// Custom polyfill for Array.prototype.map
Array.prototype.myMap = function (callback) {
    // Step 1: Create a new empty array to store results
    const result = [];

    // Step 2: Loop through each element of the original array
    for (let i = 0; i < this.length; i++) {
        // Step 3: Call the callback function on each element
        // this[i]  -> current element
        // i        -> current index
        // this     -> original array
        result.push(callback(this[i], i, this));
    }

    // Step 4: Return the new array
    return result;
};

let res = arr.myMap(i => i * 2)

console.log(res)