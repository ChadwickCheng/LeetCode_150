/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const p2s = new Map();
  const s2p = new Map();
  s=s.trim().split(' ');
  if (pattern.length !== s.length) {
    return false;
  }
  for(let i=0;i<pattern.length;i++){
    if(!p2s.has(pattern[i])&&!s2p.has(s[i])){
      p2s.set(pattern[i],s[i]);
      s2p.set(s[i], pattern[i]);
    }else{
      if(p2s.get(pattern[i])!==s[i]||s2p.get(s[i])!==pattern[i]){
        return false;
      }
    }
  }
  return true;
};
/*
时间复杂度：O(n)，其中 n 是 pattern 的长度或者 s 的单词数量
空间复杂度：O(n)，其中 n 是 pattern 的长度或者 s 的单词数量
*/