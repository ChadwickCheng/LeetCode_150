/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    for(let i=1;i<nums.length;i++){
      maxCurrent = Math.max(nums[i],maxCurrent+nums[i]);
      maxCurrent>maxGlobal?maxGlobal=maxCurrent:null;
    };
    return maxGlobal;
  };