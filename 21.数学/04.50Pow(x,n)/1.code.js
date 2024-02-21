/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if(n===0) return 1;
  if(n<0){
    x =1/x;
    n=-n;
  }
  let res = 1;
  while(n>0){
    if(n%2===1){
      res*=x;
      n--;
    }else{
      x*=x;
      n/=2;
    }
  }
  return res;
};

/*
如果 n 是奇数，将 x 乘到 res 上，然后将 n 减一。如果 n 是偶数，将 x 替换为 x * x，然后将 n 除以 2。
*/