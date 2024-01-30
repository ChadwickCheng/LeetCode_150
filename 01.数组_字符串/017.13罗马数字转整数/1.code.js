/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const dict = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  };
  let res = 0;
  for(let i=0;i<s.length;i++){
    if(i<s.length-1&&dict[s[i]]<dict[s[i+1]]){
      res -= dict[s[i]];
    }else{
      res += dict[s[i]]
    }
  };
  return res;
};
/*
时间复杂度：O(n)
空间复杂度：O(1)
*/