/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x<0||(x%10===0&&x!==0)) return false;
  let revertedNum = 0;
  while(x>revertedNum){
    revertedNum = revertedNum*10+x%10;
    x = Math.floor(x/10);
  }
  return x === revertedNum||x===Math.floor(revertedNum/10);
};

/*
反转整数的后半部分，然后与前半部分进行比较。这种方法的优点是它不需要额外的空间，而且它可以处理负数（负数不可能是回文数）。
*/