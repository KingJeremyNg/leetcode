/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let arr = new Array();
    for (let i = 0; i < n; i++) {
        arr[i] = start + 2 * i;
    }
    let result = 0;
    arr.forEach(element => result ^= element);
    return result;
};
