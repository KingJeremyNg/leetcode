/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    if (A.length === 0) return 0;
    let max = -Infinity;
    for (let i = 0; i < A.length; i++) {
        let sum = 0;
        for (let j = 0; j < A.length; j++) {
            sum += A[j] * j;
        }
        max = Math.max(max, sum);
        A.unshift(A.pop());
    }
    return max;
};
