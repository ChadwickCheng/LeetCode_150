/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  let dp = new Array(s.length+1).fill(false);
  dp[0] = true;
  for(let i=1;i<=s.length;i++){
    for(let j=0;j<i;j++){
      if(dp[j]&&wordDict.includes(s.substring(j,i))){
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};

/*
使用一个布尔数组 dp，其中 dp[i] 表示字符串 s 的前 i 个字符是否可以用 wordDict 中的单词表示。
首先创建了一个新的布尔数组 dp，并将 dp[0] 设置为 true。然后，它使用两个嵌套的 for 循环，检查字符串 s 的每一个子串是否可以用 wordDict 中的单词表示。如果可以，那么就将 dp[i] 设置为 true。最后，它返回 dp[s.length]，表示整个字符串 s 是否可以用 wordDict 中的单词表示。
*/