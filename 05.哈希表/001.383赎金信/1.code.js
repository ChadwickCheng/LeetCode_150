/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let mLen = magazine.length;
  const mMap = new Map();
  for(let i=0;i<mLen;i++){
    mMap.has(magazine[i])?mMap.set(magazine[i],mMap.get(magazine[i])+1):mMap.set(magazine[i],1);
  }
  let rLen = ransomNote.length;
  for(let i=0;i<rLen;i++){
    if((!mMap.has(ransomNote[i]))||(mMap.get(ransomNote[i])<=0)){
      return false;
    }else{
      mMap.set(ransomNote[i],mMap.get(ransomNote[i])-1)
    }
  }
  return true;
};

const ransomNote = "aa";
const magazine = "ab"
console.log(canConstruct(ransomNote,magazine))

/*
时间复杂度：O(m + n)，其中 m 是 magazine 的长度，n 是 ransomNote 的长度。
空间复杂度：O(m)，其中 m 是 magazine 的长度。
*/