/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
    k -= n;
    let alphabet = "_bcdefghijklmnopqrstuvwxy_";
    let res = "z".repeat(Math.floor(k / 25));
    if (k % 25) res = alphabet[k % 25] + res;
    return res.padStart(n, "a");
};