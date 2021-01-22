/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    n = n.toString(2).split("").reverse().join("");
    if (n.length != 32) n += "0".repeat(32 - n.length);
    return parseInt(n, 2);
};
