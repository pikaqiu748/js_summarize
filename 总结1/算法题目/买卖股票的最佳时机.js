/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxprice = prices[prices.length - 1];
  let result = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    if (maxprice > prices[i]) {
      result = Math.max(result, maxprice - prices[i]);
    } else {
      maxprice = prices[i];
    }
  }
  return result;
};


