/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  let n = prices.length;
  let dp = Array.from({length: n}, () => Array.from({length: k + 1}, () => Array(2).fill(0)));
  for (let i = 0; i < n; i++) {
      for (let j = 1; j <= k; j++) {
          if (i - 1 == -1) {
              dp[i][j][0] = 0;
              dp[i][j][1] = -prices[i];
              continue;
          }
          dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1] + prices[i]);
          dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j-1][0] - prices[i]);
      }
  }
  return dp[n-1][k][0];
};