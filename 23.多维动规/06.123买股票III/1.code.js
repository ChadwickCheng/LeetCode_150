/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let n = prices.length;
  let dp = Array.from({length:n},()=>Array.from({length:3},()=>new Array(2).fill(0)));

  for(let i=0;i<n;i++){
    for(let j=1;j<=2;j++){
      if(i-1===-1){
        dp[i][j][0] = 0;
        dp[i][j][1] = -prices[i];
        continue;
      }
      dp[i][j][0] = Math.max(dp[i-1][j][0],dp[i-1][j][1]+prices[i]);
      dp[i][j][1] = Math.max(dp[i-1][j][1],dp[i-1][j-1][0]-prices[i]);
    }
  }
  return dp[n-1][2][0];
};