/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let sL = s.length;
  let tL = t.length;
  if(sL===0) return true;
  if(tL===0&&sL!=0) return false;
  let i = 0;
  let j = 0;
  while(i<sL&&j<tL){
    if(s[i]===t[j]){
      i++;
      j++;
    }else{
      j++
    }
  }
  return i===sL;
};