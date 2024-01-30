/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  let j = 1;
  const threshold = 2;
  let temp = 0;
  let findDouble = false;
  let spec = false;
  let specIdx = 0;
  while(j<nums.length){
    if(nums[i] === nums[j]){
      if(findDouble){
        temp++;
        j++;
        j===nums.length?spec=true:spec=false;
        spec?specIdx=i+2:specIdx=0;
      }else{
        findDouble = true;
        temp = 2;
        j++;
      }
    }else{
      if(findDouble){
        if(temp === threshold){
          i=j;
          j++;
          temp = 0;
          findDouble = false;
        }else{
          nums.splice(i+2,temp-threshold)
          j -= (temp-threshold)
          temp=0;
          findDouble=false;
          i=j;
          j++;
        }
      }else{
        i++;
        j++;
      }
    }
  }
  specIdx===0?specIdx=0:nums.splice(specIdx)
  return nums.length;
};

const arr = [0,0,1,1,1,1,2,3,3,3]
const n = removeDuplicates(arr)
console.log('arr',arr);
console.log('n',n);

/*
时间复杂度：O(n)
空间复杂度：O(1)
*/