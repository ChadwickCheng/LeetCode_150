/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const numSet = new Set(nums)
  let longestStreak = 0;

  for(let num of numSet){
    if(!numSet.has(num-1)){
      let curNum = num;
      let curStreak = 1;
      while(numSet.has(curNum+1)){
        curNum+=1;
        curStreak+=1;
      }
      longestStreak = Math.max(longestStreak,curStreak);
    }
  }
  return longestStreak;
};

/*
时间复杂度是 O(n)，因为我们只需要遍历一次数组和一次哈希表。
空间复杂度也是 O(n)，因为我们需要一个哈希表来存储数组中的每个数。
*/