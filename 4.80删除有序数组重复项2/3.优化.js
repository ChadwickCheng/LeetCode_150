var removeDuplicates = function(nums) {
  let i = 0;
  for(let num of nums) {
      if(i < 2 || num > nums[i-2]) {
          nums[i++] = num;
      }
  }
  return i;
};

const arr = [0,0,1,1,1,1,2,3,3,3]
const n = removeDuplicates(arr)
console.log('arr',arr);
console.log('n',n);

/*
时间复杂度：O(n)
空间复杂度：O(1)
*/