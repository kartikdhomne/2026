// Find first non repeating character in a string

let str = "mirror";

function findNonRepeating(str) {
  if (str.length === 0) return null; 
  
  const charCounts = new Map();

  // First pass: count character occurrences
  for (const char of str) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  // Second pass: find the first character with a count of 1
  for (const char of str) {
    if (charCounts.get(char) === 1) {
      return char;
    }
  }

  return null;
}

console.log(findNonRepeating(str));
