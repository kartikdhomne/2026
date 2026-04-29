
Input: numbers = [2, 7, 11, 15], target = 9
Output: [1, 2]

function TwoSum (nums, target) {
    if (nums.length === 0) return;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
}
