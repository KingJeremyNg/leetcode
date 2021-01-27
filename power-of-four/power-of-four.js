/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if (n <= 0) return false;
    let binary = n.toString(2);
    if (binary.split("1").length != 2) return false;
    return (binary.length % 2 == 1);
};