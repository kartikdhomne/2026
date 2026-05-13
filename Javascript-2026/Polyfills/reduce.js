Array.prototype.myReduce = function (callback, initialValue) {
    // Step 1: Save reference to the array
    const arr = this;

    // Step 2: Determine starting accumulator and index
    let accumulator;
    let startIndex;

    if (initialValue !== undefined) {
        // If initial value is provided
        accumulator = initialValue;
        startIndex = 0;
    } else {
        // If no initial value is provided
        accumulator = arr[0];
        startIndex = 1;
    }

    // Step 3: Loop through the array
    for (let i = startIndex; i < arr.length; i++) {
        // Step 4: Update accumulator
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    // Step 5: Return final accumulator
    return accumulator;
};