/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let n = height.length;
  let left = 0,right = n-1;
  let maxCount = 0;
  while(left<right){
    let width = right-left;
    let curCount = width*Math.min(height[left],height[right]);
    maxCount = Math.max(maxCount,curCount)
    height[left]<=height[right]?left++:right--;
  }
  return maxCount;
};

/*
时间复杂度：O(n)
空间复杂度：O(1)
*/