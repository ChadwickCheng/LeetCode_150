/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let maxPrice = prices[prices.length - 1];
  for(let i = prices.length - 2; i >= 0; i--){
    maxProfit = Math.max(maxProfit, maxPrice - prices[i]);
    maxPrice = Math.max(maxPrice, prices[i]);
  }
  return maxProfit;
};

/*
右-》左
时间复杂度：O(n)
空间复杂度：O(1)
*/