/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = new Map();
  const threshold = Math.floor(nums.length/2)
  for(let i=0;i<nums.length;i++){
    map.has(nums[i])?map.set(nums[i],map.get(nums[i])+1):map.set(nums[i],1)
  }
  for(let [k,v] of map.entries()){
    if(v>threshold) return k;
  }
}

/*
时间复杂度：O(n)
空间复杂度：O(n)
*/