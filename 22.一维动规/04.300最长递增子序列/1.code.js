/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if(nums.length===0) return 0;
  let res = 1;
  let dp = new Array(nums.length).fill(1);
  for(let i=1;i<nums.length;i++){
    for(let j=0;j<i;j++){
      nums[i]>nums[j]?dp[i]=Math.max(dp[i],dp[j]+1):null;
    }
    res = Math.max(res,dp[i]);
  }
  return res;
};

/*
二分查找优化至nlogn
*/