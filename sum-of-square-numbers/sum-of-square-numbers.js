/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for (let i = 0; i ** 2 <= c; i++) {
        let temp = Math.sqrt(c - i ** 2);
        if (Math.floor(temp) === temp) return true;
    }
    return false;
};