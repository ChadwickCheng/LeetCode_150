/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let maxCount = 0;
  let end = 0;
  let step = 0;
  for(let i = 0;i<nums.length-1;i++){
    maxCount = Math.max(maxCount,i+nums[i])
    if(i===end){
      end = maxCount;
      step++;
    }
  }
  return step;
};

/*
时间复杂度：O(n)
空间复杂度：O(1)

使用贪心算法来解决。我们可以在每次跳跃时，尽可能地跳到能够使得下一次跳跃更远的位置。具体来说，我们可以维护当前能够到达的最大位置 maxPos，以及在当前位置之前，能够跳到的最远位置 end。如果我们到达了 end，那么就进行一次跳跃，并更新 end 为 maxPos
*/