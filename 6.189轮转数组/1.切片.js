/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;
  const res = [];
  res.push(...(nums.splice(nums.length-k)),...nums);
  nums.splice(0, nums.length, ...res);
};

const arr = [1,2,3,4,5,6,7]
rotate(arr,3)
console.log('arr',arr);

/*
时间复杂度：O(n)
空间复杂度：O(n)
*/