// Flatten Deeply Nested Array

let arr = [5, [2, 3], 7, [1, [4, 2]], [8], 9];

// Method 1:
function flattenArray(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

// console.log(flattenArray(arr));

// Method 2:
const flattenArray2 = (arr) =>
    arr.reduce(
        (acc, val) => acc.concat(Array.isArray(val) ? flattenArray2(val) : val),
        []
    );


//Method 3:

const result = arr.flat(Infinity);
console.log(result)