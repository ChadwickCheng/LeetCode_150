/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const s2t = new Map();
  const t2s = new Map()
  for(let i=0;i<s.length;i++){
    if(!s2t.has(s[i])&&!t2s.has(t[i])){
      s2t.set(s[i],t[i]);
      t2s.set(t[i],s[i]);
    }else{
      if(t[i]!==s2t.get(s[i])){
        return false;
      }
      if(s[i]!==t2s.get(t[i])){
        return false;
      }
    }
  }
  return true;
};

/*
时间复杂度：O(n)
空间复杂度：O(n)
*/