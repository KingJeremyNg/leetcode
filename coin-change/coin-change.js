/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i < coins.length; i++) {
        for (let x = coins[i]; x < amount + 1; x++) {
            dp[x] = Math.min(dp[x], dp[x - coins[i]] + 1);
        }
    }
    return (dp[amount] === Infinity) ? -1 : dp[amount];
};
