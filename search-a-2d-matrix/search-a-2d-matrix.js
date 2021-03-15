/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let arr = matrix.flat();                        // Transform matrix into 1d array
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {                           // Narrow search by half of arr every iteration
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] < target) start = mid + 1;     // If target < mid that means target is within the 1st half
        if (arr[mid] > target) end = mid - 1;       // If target > mid that means target is within the 2nd half
        if (arr[mid] === target) return true;
    }
    if (start === end && arr[start] === target) return true;
    else return false;
};