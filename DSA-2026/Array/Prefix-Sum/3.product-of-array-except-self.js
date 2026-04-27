// Product of array except self

let nums = [1, 2, 3, 4];
output = [24, 12, 8, 6];

// Step 1. Basic Solution (Brute Force)

// For every element → multiply all other elements

function productExceptSelf(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }

    result.push(product);
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]

// Step 2. Optimal Solution (Prefix + Suffix) → ⭐

// Instead of recalculating:

// Store left product
// Store right product
// Multiply both

function productExceptSelf(nums) {
    let n = nums.length;
    let result = new Array(n).fill(1);

    // Left product
    let left = 1;
    for (let i = 0; i < n; i++) {
        result[i] = left;
        left *= nums[i];
    }

    // Right product
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }

    return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));

// “I compute prefix and suffix products for each index and multiply them to avoid division in O(n).”
