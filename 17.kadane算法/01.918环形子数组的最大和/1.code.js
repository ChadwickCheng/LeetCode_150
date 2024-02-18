/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
  let total = 0;
  let maxSum = -Infinity;
  let curMax = 0;
  let minSum = Infinity;
  let curMin = 0;

  for(let num of nums){
    curMax = Math.max(curMax+num,num);
    maxSum = Math.max(maxSum,curMax);
    curMin = Math.min(curMin+num,num);
    minSum = Math.min(minSum,curMin);
    total+=num;
  }

  return maxSum>0?Math.max(maxSum,total-minSum):maxSum;
};

/*
时间复杂度：O(n)，其中 n 是数组的长度。这是因为我们只需要遍历一次数组，对于数组中的每个元素，我们都在常数时间内进行操作。

空间复杂度：O(1)，我们只使用了几个变量来存储最大和、最小和、当前最大和、当前最小和和总和，所以空间复杂度是常数。
*/