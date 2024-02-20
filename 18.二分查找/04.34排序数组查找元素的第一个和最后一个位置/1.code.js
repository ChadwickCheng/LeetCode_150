/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let first = findFirst(nums,target);
  let last = findLast(nums,target);
  if(first<=last){
    return [first,last];
  }else{
    return [-1,-1];
  }
};

const findFirst = (nums,target) => {
  let left = 0, right = nums.length - 1;
  while(left<=right){
    let mid = Math.floor((left+right)/2);
    if(nums[mid]<target){
      left = mid + 1;
    }else{
      right = mid - 1;
    }
  }
  return left;
}

const findLast = (nums,target) => {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
  }
  return right;
}