
Input: nums = [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

function moveZeroes(nums) {
    if (nums.length === 0) return 0;

    let position = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[position]] = [nums[position], nums[i]]
            position++
        }
    }
};