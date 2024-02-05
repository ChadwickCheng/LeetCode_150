/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let n = nums.length;
  if(n===0) return [];
  let ans = [];
  let start = nums[0],end = nums[0];

  for(let i=1;i<n;i++){
    if(nums[i]!==end+1){
      ans.push(start === end ? `${start}` : `${start}->${end}`);
      start = nums[i];
    }
    end = nums[i];
  }
  ans.push(start === end ? `${start}` : `${start}->${end}`);
  return ans;
};

// const nums = [0,1,2,4,5,7];
const nums = [0,2,3,4,6,8,9]
console.log(summaryRanges(nums))

/*
时间复杂度是 O(n)，因为我们只需要遍历一次数组。
空间复杂度是 O(1)，因为我们只需要常数级别的额外空间。
*/