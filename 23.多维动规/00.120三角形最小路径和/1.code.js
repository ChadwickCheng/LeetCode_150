/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const n = triangle.length;
  const dp = Array.from(new Array(n), ()=>new Array(n).fill(0));
  dp[0][0] = triangle[0][0];

  for(let i=1;i<n;i++){
    dp[i][0] = dp[i-1][0]+triangle[i][0];
    for(let j=1;j<i;j++) dp[i][j] = Math.min(dp[i-1][j-1],dp[i-1][j])+triangle[i][j];
    dp[i][i] = dp[i-1][i-1]+triangle[i][i];
  }
  return Math.min(...dp[n-1]);
};
/*
使用一个二维数组 dp 来存储到达每个位置的最小路径和。对于三角形的顶点，最小路径和就是它自己的值。对于其他位置，最小路径和可以通过比较到达它上方和左上方位置的最小路径和，然后加上它自己的值，来得到。

首先创建了一个新的二维数组 dp，并将 dp[0][0] 设置为 triangle[0][0]。然后，它使用两个嵌套的 for 循环，计算到达每个位置的最小路径和。最后，它返回 dp[n - 1] 中的最小值，即自顶向下的最小路径和。
*/