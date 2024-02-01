/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const tM = new Map();
  let tn = t.length;
  let sn = s.length;
  for(let i=0;i<tn;i++){
    tM.has(t[i])?tM.set(t[i],tM.get(t[i])+1):tM.set(t[i],1)
  }
  for(let i=0;i<sn;i++){
    if(!tM.has(s[i])){
      return false;
    }else{
      tM.set(s[i],tM.get(s[i])-1);
    }
  }
  for(let v of tM.values()){
    if(v!==0){
      return false;
    }
  }
  return true;
};

let s = "anagram", t = "nagaram";
console.log(isAnagram(s,t))

/*
时间复杂度：O(n)
空间复杂度：O(1)
*/