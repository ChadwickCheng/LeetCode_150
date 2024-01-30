/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  for(let i = 0;i<prices.length;i++){
    prices[i+1]-prices[i]>0?profit+=prices[i+1]-prices[i]:null
  }
  return profit;
};
/*
时间复杂度：O(n)
空间复杂度：O(1)
*/