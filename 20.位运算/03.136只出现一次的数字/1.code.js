/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let res = 0;
  for(let num of nums) res = res^num;
  return res;
};

/*
异或运算有一个特性，对于任何数 x，都有 x ^ x = 0 和 x ^ 0 = x。因此，如果我们将数组中的所有数进行异或运算，那么结果就是那个只出现一次的数。
*/