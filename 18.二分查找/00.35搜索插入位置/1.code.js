/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length-1;
  while(left<=right){
    let mid = Math.floor((left+right)/2);
    if(nums[mid]===target) return mid;
    else if(nums[mid]<target) left = mid+1;
    else right = mid-1;
  }
  return left;
};

/*
时间复杂度：O(log n)，其中 n 是数组的长度。这是因为我们使用了二分查找，每次都将搜索空间缩小为之前的一半，直到找到目标值，或者搜索空间为空。

空间复杂度：O(1)，我们只使用了几个变量来存储左右边界和中点，所以空间复杂度是常数。
*/