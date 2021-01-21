/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let start = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        start = Math.min(start, prices[i]);
        profit = Math.max(profit, prices[i] - start);
    }
    return profit;
};
