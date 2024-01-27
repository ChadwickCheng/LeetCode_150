var majorityElement = function(nums) {
  let count = 0;
  let candidate;
  for(let num of nums){
    if(count===0){
      candidate = num
    }
    candidate===num?count++:count--;
  }
  return candidate;
};

/*
  时间复杂度：O(n)
  空间复杂度：O(1)
*/