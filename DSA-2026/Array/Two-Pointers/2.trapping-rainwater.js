Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 6
// Explanation: The above elevation map(black section) is represented by array[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1].In this case, 6 units of rain water(blue section) are being trapped.

function TrappingWater () {
    let left = 0, right = height.length - 1;
    let maxLeft = 0, maxRight = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= maxLeft) {
                maxLeft = height[left];
            } else {
                water += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] >= maxRight) {
                maxRight = height[right];
            } else {
                water += maxRight - height[right];
            }
            right--;
        }
    }

    return water;
}