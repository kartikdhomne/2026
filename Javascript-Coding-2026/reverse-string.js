let str = "Hello, World!";

function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    return reversed;
}

// OR

function reverseStringOne(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;

        left++;
        right--;
    }
};
console.log(reverseString(str));
console.log(reverseStringOne(str));