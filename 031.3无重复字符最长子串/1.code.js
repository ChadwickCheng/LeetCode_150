/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let l = 0;
  let res = 0;
  const map = new Map();
  for(let r=0;r<s.length;r++){
    if(map.has(s[r])&&map.get(s[r])>=l){
      l = map.get(s[r])+1;
    }
    res = Math.max(res,r-l+1);
    map.set(s[r],r);// 该字符与下标
  }
  return res;
};
/*
时间复杂度：O(n)
空间复杂度：O(min(m, n))
*/