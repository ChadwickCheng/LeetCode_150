/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const m = word1.length,n=word2.length,dp=Array.from(new Array(m+1),()=>new Array(n+1).fill(0));
  for(let i=1;i<=m;i++) dp[i][0]=i;
  for(let j=1;j<=n;j++) dp[0][j]=j;
  for(let i=1;i<=m;i++){
    for(let j=1;j<=n;j++){
      if(word1[i-1]===word2[j-1]){
        dp[i][j]=dp[i-1][j-1];
      }else{
        dp[i][j]=Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1])+1;
      }
    }
  }
  return dp[m][n];
};
/*
可以使用一个二维数组 dp 来存储将 word1 的前 i 个字符转换成 word2 的前 j 个字符所使用的最少操作数。

这段代码首先创建了一个新的二维数组 dp，并初始化第一行和第一列。然后，它使用两个嵌套的 for 循环，计算将 word1 的前 i 个字符转换成 word2 的前 j 个字符所使用的最少操作数。最后，它返回 dp[m][n]，即将 word1 转换成 word2 所使用的最少操作数。
*/