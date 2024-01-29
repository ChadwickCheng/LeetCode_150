/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a,b)=>a-b);
  let res = [];
  let n = nums.length;
  for(let i=0;i<n-2;i++){
    if(i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i+1;
    let right = n-1;
    while(left<right){
      let sum = nums[i]+nums[left]+nums[right];
      if(sum===0){
        res.push([nums[i],nums[left],nums[right]])
        while((left<right)&&nums[left]===nums[left+1]) left++;
        while((left<right)&&nums[right]===nums[right-1]) right--;
        left++;
        right--;
      }else if(sum<0){
        left++;
      }else{
        right--;
      }
    }
  }
  return res;
};
/*
O(n^2)
O(n)
*/