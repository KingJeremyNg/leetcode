/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    count = 0;
    do {
        count++;
        n -= count;
    } while (n > 0);
    if (n < 0) count --;
    return count;
};
