// Chech two string anagram are not

// Example : listen --> silent

let str1 = "silent";
let str2 = "listen";

// Method 1( two loops)

function stringAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let result = {};

  for (let letter of str1) {
    result[letter] = (result[letter] || 0) + 1;
  }

  for (let item of str2) {
    if (!result[item]) {
      return false;
    }

    result[item] -= 1;
  }

  return true;
}

let output = stringAnagrams(str1, str2);

console.log(output);

// Method 2 (Hashmap)

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let map = new Map();

  for (let char of str1) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of str2) {
    if (!map.has(char)) return false;
    map.set(char, map.get(char) - 1);
    if (map.get(char) < 0) return false;
  }

  return true;
}

console.log(isAnagram(str1, str2))