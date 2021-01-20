/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let array = new Array();
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) array.push(i);
        if (array.length == k) break;
    }
    return (array.length >= k) ? array[k - 1] : -1;
};
