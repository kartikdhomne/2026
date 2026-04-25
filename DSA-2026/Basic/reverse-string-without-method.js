// Reverse string without built in method

let str = "Kartik";

function ReverseStringWithoutMethod(str) {
  if (str.length === 0) return null;

  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(ReverseStringWithoutMethod(str));

// Using Recursion

function ReverseStringRecursion(str) {
    if (str === "") {
        return "";
    } else{
        return ReverseStringRecursion(str.substr(1)) + str.charAt(0)
    }
}

console.log(ReverseStringRecursion(str))

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
  return str;
};
console.log(reverseString(str));
console.log(reverseStringOne(str));