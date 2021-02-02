/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i.toString());
    }
    return arr.sort();
};