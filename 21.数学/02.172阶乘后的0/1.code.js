/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let count = 0;
  while (n > 0) {
      n = Math.floor(n / 5);
      count += n;
  }
  return count;
};
/*
计算 n 的阶乘中包含多少个因子 5 来解决。因为一个尾随零是由因子 2 和因子 5 相乘得到的，而在 n 的阶乘中，因子 2 的数量总是大于因子 5 的数量，所以我们只需要计算因子 5 的数量。
*/