/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map();
  for(let i=0;i<nums.length;i++) map.has(nums[i])?null:map.set(nums[i],i);
  for(let i=0;i<nums.length;i++){
    let another = target-nums[i]
    if(map.has(another)&&(map.get(another)!==i)){
      return [i,map.get(another)]
    }
  }
};

/*
时间复杂度：O(n)
空间复杂度：O(n)
*/