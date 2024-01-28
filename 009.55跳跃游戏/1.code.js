/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxCount = 0;
  for(let i=0;i<nums.length;i++){
    if(i>maxCount) return false;
    maxCount = Math.max(maxCount,i+nums[i]);
    if(maxCount>=nums.length-1) return true;
  }
  return false;
};

/*
时间复杂度：O(n)
空间复杂度：O(1)

使用贪心算法来解决这个问题。从数组的第一个元素开始，维护一个变量 maxJump 来记录当前能够跳跃的最大长度。在遍历过程中，如果当前位置超过了 maxJump，那么就无法到达这个位置，返回 false。否则，更新 maxJump 为 max(maxJump, i + nums[i])，表示当前位置加上当前位置能够跳跃的长度和 maxJump 中的较大值。如果 maxJump 大于等于数组的最后一个位置，那么就可以到达最后一个位置，返回 true。
*/