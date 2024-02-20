/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let carry = 0;
  let res = '';
  let i = a.length-1,j = b.length-1;
  while(i>=0||j>=0){
    let sum = carry;
    i>=0?sum+=a[i--]-'0':null;
    j>=0?sum+=b[j--]-'0':null;
    res = sum%2+res;
    carry = Math.floor(sum/2);
  }
  carry>0?res = carry+res:null;
  return res;
};