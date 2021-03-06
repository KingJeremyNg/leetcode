/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = Array.from(n.toString()).map(Number);
    return n.reduce((a, b) => a * b, 1) - n.reduce((a, b) => a + b, 0);
};