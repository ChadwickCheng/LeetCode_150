/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  const n = s1.length,m = s2.length,t = s3.length;
  if(n + m !== t) return false;
  const dp = Array.from(new Array(n+1),()=>new Array(m+1).fill(false));
  dp[0][0] = true;
  for(let i=0;i<=n;i++){
    for(let j=0;j<=m;j++){
      let p = i+j-1;
      if(i>0){
        dp[i][j] = dp[i][j]||(dp[i-1][j]&&s1[i-1]===s3[p]);
      }
      if(j>0){
        dp[i][j] = dp[i][j]||(dp[i][j-1]&&s2[j-1]===s3[p]);
      }
    }
  }
  return dp[n][m];
};

/*
可以使用一个二维布尔数组 dp 来存储 s3 的前 i+j 个字符是否可以由 s1 的前 i 个字符和 s2 的前 j 个字符交错组成。

首先检查 s1、s2 和 s3 的长度是否满足条件。然后，它创建了一个新的二维布尔数组 dp，并将 dp[0][0] 设置为 true。接着，它使用两个嵌套的 for 循环，计算 s3 的前 i+j 个字符是否可以由 s1 的前 i 个字符和 s2 的前 j 个字符交错组成。最后，它返回 dp[n][m]，即 s3 是否可以由 s1 和 s2 交错组成。
*/