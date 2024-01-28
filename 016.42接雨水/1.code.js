/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let left = 0;
  let right = height.length-1;
  let maxLeft = 0;
  let maxRight = 0;
  let result = 0;
  while(left<right){
    if(height[left]<height[right]){
      height[left] >= maxLeft ? (maxLeft = height[left]) : result += (maxLeft - height[left]);
      left++;
    }else{
      height[right] >= maxRight ? (maxRight = height[right]) : result += (maxRight - height[right]);
      right--;
    }
  }
  return result;
};

/*
时间复杂度：O(n)
空间复杂度：O(1)
*/