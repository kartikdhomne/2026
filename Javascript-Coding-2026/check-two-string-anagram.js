
function areAnagrams(str1, str2) {
  const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();
  
  const normalized1 = normalize(str1);
  const normalized2 = normalize(str2);
  
  if (normalized1.length !== normalized2.length) {
    return false;
  }
  const sorted1 = normalized1.split("").sort().join("");
  const sorted2 = normalized2.split("").sort().join("");
  return sorted1 === sorted2;
}


// Alternative approach using character frequency map
function areAnagramsOptimized(str1, str2) {
  const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();
  const normalized1 = normalize(str1);
  const normalized2 = normalize(str2);
  
  if (normalized1.length !== normalized2.length) {
    return false;
  }
  
  const charCount = {};
  
  for (let char of normalized1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for (let char of normalized2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  
  return true;
}

// Test cases
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
console.log(areAnagrams("The eyes", "They see")); // true
console.log(areAnagrams("a gentleman", "elegant man")); // true

console.log("\n--- Optimized approach ---");
console.log(areAnagramsOptimized("listen", "silent")); // true
console.log(areAnagramsOptimized("hello", "world")); // false
console.log(areAnagramsOptimized("The eyes", "They see")); // true
console.log(areAnagramsOptimized("a gentleman", "elegant man")); // true
