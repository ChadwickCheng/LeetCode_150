/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left=0,right=x;
  while(left<=right){
    let mid = Math.floor((left+right)/2);
    if(mid*mid<=x){
      left = mid+1;
    }else{
      right = mid-1;
    }
  }
  return right;
};

/*
在 0 到 x 的范围内查找一个整数，它的平方小于或等于 x，而它加一的平方大于 x。
*/