/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let counts = new Array(32).fill(0);
  for(let num of nums){
    for(let i=0;i<32;i++){
      if((num>>>i)&1) counts[i]++;
    }
  }
  let res = 0;
  for(let i=0;i<32;i++){
    if(counts[i]%3!==0) res = res | (1<<i); 
  }
  return res;
};

/*
对数组中的每个数的每一位进行统计，如果某一位的 1 的个数不能被 3 整除，那么只出现一次的数的这一位就是 1。
*/