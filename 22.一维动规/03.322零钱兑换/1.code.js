/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const dp = new Array(amount+1).fill(amount+1);
  dp[0] = 0;
  for(let i=0;i<=amount;i++){
    for(let j=0;j<coins.length;j++){
      if(coins[j]<=i) dp[i] = Math.min(dp[i],dp[i-coins[j]]+1);
    }
  }
  return dp[amount]>amount?-1:dp[amount];
};

let coins = [1,2,5],amount = 11;
coinChange(coins,amount);
/*
可以使用一个数组 dp 来存储凑成每个金额所需的最少硬币个数。对于金额为 0，我们可以直接赋值为 0。对于其他金额，我们可以通过比较使用当前硬币和不使用当前硬币所需的最少硬币个数，来决定是否使用当前硬币。
首先创建了一个新的数组 dp，并将 dp[0] 设置为 0。然后，它使用两个嵌套的 for 循环，检查每一个金额是否可以用更少的硬币凑成。如果可以，那么就更新 dp[i]。最后，它返回 dp[amount]，表示凑成总金额所需的最少硬币个数。如果 dp[amount] 大于 amount，表示无法凑成总金额，返回 -1。
*/