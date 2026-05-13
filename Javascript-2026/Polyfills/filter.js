Array.prototype.myFilter = function (callback) {
    // Step 1: Create a new array to store filtered values
    const result = [];

    // Step 2: Loop through each element
    for (let i = 0; i < this.length; i++) {
        // Step 3: Execute callback
        // If callback returns true, keep the element
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    // Step 4: Return the filtered array
    return result;
};