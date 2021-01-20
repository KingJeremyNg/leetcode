/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    if (!n) return 0;
    if (n === 1) return 1;
    let arr = new Array(0, 1);
    for (let i = 2; i < n + 1; i++) {
        if (i % 2 == 0) {
            arr.push(arr[Math.floor(i / 2)]);
        }
        else {
            arr.push(arr[Math.floor(i / 2)] + arr[Math.floor(i / 2) + 1]);
        }
    }
    return arr.sort((a, b) => b - a)[0];
};
