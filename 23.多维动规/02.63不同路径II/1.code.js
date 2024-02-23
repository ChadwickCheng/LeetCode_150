/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length,n = obstacleGrid[0].length;
  const dp = Array.from(new Array(m),()=>new Array(n).fill(0));
  dp[0][0] = obstacleGrid[0][0]===0?1:0;
  for(let i=1;i<m;i++) dp[i][0] = obstacleGrid[i][0]===0?dp[i-1][0]:0;
  for(let j=1;j<n;j++) dp[0][j] = obstacleGrid[0][j]===0?dp[0][j-1]:0;
  for(let i=1;i<m;i++){
    for(let j=1;j<n;j++) dp[i][j] = obstacleGrid[i][j]===0?dp[i-1][j]+dp[i][j-1]:0;
  }
  return dp[m-1][n-1];
};
/*
可以使用一个二维数组 dp 来存储到达每个位置的路径数量。对于网格的左上角，如果它不是障碍物，那么路径数量就是 1，否则就是 0。对于第一行和第一列的其他位置，如果它不是障碍物，那么路径数量就是它上方或左方的格子的路径数量，否则就是 0。对于其他位置，如果它不是障碍物，那么路径数量就是它上方和左方的格子的路径数量之和，否则就是 0。
*/