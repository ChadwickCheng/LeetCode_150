/**
 * @param {number[]} nums
 * @return {number[][]}
 */
threeSum = function(nums) {
  let n = nums.length;
  let res = [];
  let backup = [];
  let resEle;
  for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
      let k = j+1;
      while(k<n){
        if(nums[i]+nums[j]+nums[k]===0){
          resEle = [nums[i],nums[j],nums[k]].sort((a,b)=>a-b)
          if(backup.indexOf(JSON.stringify(resEle))===-1){
            backup.push(JSON.stringify(resEle));
            res.push([nums[i],nums[j],nums[k]]);
          }
        }
        k++;
      }
    }
  }
  return res;
};

const arr = [-1,0,1,2,-1,-4]
threeSum(arr)
// 符合需求，但是时间复杂度太高