/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let array = [];
    for (let i = 0; i < matrix.length; i++) {
        array = array.concat(matrix[i]);
    }
    array.sort(function(a, b){return a - b});
    return array[k - 1];
};
