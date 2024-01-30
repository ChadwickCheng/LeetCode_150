/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(s.length===(1||0)) return true;
  s = s.toLowerCase().replace(/[^A-Za-z0-9]/g,'')
  let isEven = s.length%2===0;
  let isOdd = s.length%2!==0;
  let n = s.length;
  let i=0;
  let j=n-1;
  if(isEven){
    while(i<=((n/2)-1)){
      if(s[i]===s[j]){
        i++;
        j--;
      }else{
        return false;
      }
    }
  }
  if(isOdd){
    while(i<Math.ceil(n/2)){
      if(s[i]===s[j]){
        i++;
        j--;
      }else{
        return false;
      }
    }
  }
  return true;
};

a = "A man, a plan, a canal: Panama"
isPalindrome(a)

/*
时间复杂度：O(n)
空间复杂度：O(1)
*/