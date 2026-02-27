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