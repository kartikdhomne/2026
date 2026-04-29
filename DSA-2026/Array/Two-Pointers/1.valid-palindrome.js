
Input: s = "A man, a plan, a canal: Panama"
Output: true

function isPalindrome(string) {
    let modifiedString = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let left = 0;
    let right = modifiedString.length - 1;

    while (left < right) {
        if (modifiedString[left] !== modifiedString[right]) {
            return false
        }
        left++
        right--
    }
    return true
}