/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  nums.sort((a, b) => a - b);
  let min = 0;
  let findMin=false;
  let max = 0;
  let findMax=false;
  for(let i=0;i<nums.length;i++){
    if(nums[i]===val&&(nums[i-1]<val||i-1<0)){
      findMin=true;
      min=i;
    }
    if(nums[i]===val&&(nums[i+1]>val||i+1==nums.length)){
      findMax=true;
      max=i;
    }
    if(findMax&&findMin){
      nums.splice(min,max-min+1)
      return nums.length;
    }
  }
  return nums.length;
};

/*
时间复杂度 O(n log n)
空间复杂度 O(1)
sort后直接比 不优雅
*/