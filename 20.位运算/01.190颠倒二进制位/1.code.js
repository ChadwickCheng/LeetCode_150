/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let res = 0;
  for(let i=0;i<32;i++){
    res = (res<<1)+(n&1);// n&1，最高位开始的31个数字和0与，全部为0，最后一位和1与，结果为1。res<<1，res左移一位，最后一位为0。两者相加，最后一位为n的最后一位
    n = n>>1;// 为了下次循环获得最后一位
    // console.log(res);
  }
  return res>>>0;// 无符号右移0位，返回无符号整数
};

// reverseBits(5)