/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const n = s.length;
  const dp = Array.from(new Array(n),()=>new Array(n).fill(false));
  let res = '';
  for(let len=0;len<n;len++){
    for(let i=0;i+len<n;i++){
      let j = i+len;
      if(len===0) dp[i][j] = true;
      else if(len===1) dp[i][j] = (s[i]===s[j]);
      else dp[i][j] = (s[i]===s[j]&&dp[i+1][j-1]);
      if(dp[i][j]&&len+1>res.length) res = s.substring(i,i+len+1);
    }
  }
  return res;
};
/*
可以使用一个二维布尔数组 dp 来存储字符串的每个子串是否是回文串。对于长度为 1 的子串，显然是回文串。对于长度为 2 的子串，如果两个字符相同，那么它是回文串。对于长度大于 2 的子串，如果它的首尾字符相同，并且去掉首尾字符后的子串是回文串，那么它是回文串。

len：表示子串的长度。由于我们需要从短到长来更新每个子串是否是回文串，所以我们需要一个变量来表示子串的长度。

i：表示子串的起始位置。我们需要遍历字符串的每一个位置，所以我们需要一个变量来表示子串的起始位置。

j：表示子串的结束位置。由于子串的长度和起始位置已知，所以我们可以通过 i + len 来计算子串的结束位置。

在每一次循环中，我们都会更新 
*/