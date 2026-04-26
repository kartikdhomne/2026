let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let width = right - left;
    let minheight = Math.min(height[left], height[right]);
    let area = width * minheight;

    maxArea = Math.max(area, maxArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

console.log(maxArea(height))
