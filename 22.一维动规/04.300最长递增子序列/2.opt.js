/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  var tails = [nums[0]];
  for (var i = 1; i < nums.length; i++) {
      if (nums[i] > tails[tails.length - 1]) {
          tails.push(nums[i]);
      } else {
          var left = 0, right = tails.length - 1;
          while (left < right) {
              var mid = (left + right) >> 1;
              if (tails[mid] < nums[i]) {
                  left = mid + 1;
              } else {
                  right = mid;
              }
          }
          tails[left] = nums[i];
      }
  }
  return tails.length;
};
/*
可以使用二分查找的方法将时间复杂度降低到 O(n log(n))。我们维护一个数组 tails，其中 tails[i] 存储长度为 i+1 的最长递增子序列的最小尾元素。对于每个元素，我们在 tails 数组中查找第一个大于等于它的元素，如果找到了，我们就更新这个元素，否则我们就在 tails 数组的末尾添加这个元素。
首先创建了一个新的数组 tails，并将第一个元素添加到 tails 中。然后，它遍历 nums 中的每一个元素，对于每一个元素，它在 tails 中查找第一个大于等于它的元素，如果找到了，就更新这个元素，否则就在 tails 的末尾添加这个元素。最后，它返回 tails 的长度，即最长严格递增子序列的长度。
*/