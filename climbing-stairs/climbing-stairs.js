/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let prev = 0;
    let acc = 1;
    for (let i = 0; i < n; i++) {
        let temp = prev;
        prev = acc;
        acc += temp;
    }
    return acc;
};
