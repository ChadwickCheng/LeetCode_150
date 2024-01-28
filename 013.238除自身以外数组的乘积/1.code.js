/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let n = nums.length;
  const answer = new Array(n).fill(1)
  let left=1,right=1;
  for(let i=0;i<n;i++){
    answer[i]*=left;
    left*=nums[i];
    answer[n-1-i]*=right;
    right *= nums[n - 1 - i];
  }
  return answer;
};

/*
时间复杂度：O(n)
空间复杂度：O(1)

通过使用前缀和后缀乘积的概念来解决。我们可以创建两个数组，一个存储从左到右的前缀乘积，另一个存储从右到左的后缀乘积。然后，对于每个元素，我们可以将其左侧的前缀乘积与其右侧的后缀乘积相乘，得到的结果就是除了该元素之外的所有元素的乘积。
*/