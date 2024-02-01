/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const map = new Map();
  while(n!==1&&!map.has(n)){
    map.set(n,true);
    let sum = 0;
    while(n>0){
      let digit = n%10;
      sum+=Math.pow(digit,2);
      n = Math.floor(n/10);
    }
    n=sum;
  }
  return n===1;
};

/*
时间复杂度：O(logn)，其中 n 是输入的数字。
空间复杂度：O(logn)，其中 n 是输入的数字。
*/