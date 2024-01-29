/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const map = new Map();
  const backupMap = map;
  for(let i=0;i<t.length;i++){
    map.has(t[i])?map.set(t[i],map.get(t[i])+1):map.set(t[i],1);
  }
  let start = 0,end = 0;
  let n = s.length;
  while(end<n){
    if(backupMap.has(s[end])){
      backupMap.set(s[end],backupMap.get(s[end])-1)
    }
    end++;
  }
};
s = "ADOBECODEBANC", t = "ABC"
minWindow(s,t)