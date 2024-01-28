/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  let j = 0;
  let findDuplicates = false;
  while(j<nums.length){
    if(nums[i]===nums[j]){
      findDuplicates = true;
      j++;
    }else{
      if(findDuplicates){
        nums[i+1]=nums[j]
        findDuplicates = false;
        i++;
      }else{
        i++;
        j++;
      }
    }
  }
  nums.splice(i+1);
  return nums.length;
};
/*
  时间复杂度：O(n)
  空间复杂度：O(1)
*/