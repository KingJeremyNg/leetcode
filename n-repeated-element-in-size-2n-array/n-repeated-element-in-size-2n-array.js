/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let dict = {};
    for (let i = 0; i < A.length; i++) {
        if (dict[A[i]]) dict[A[i]] += 1;
        else dict[A[i]] = 1;
    }
    for (var key in dict) {
        if (dict[key] == A.length / 2) return key;
    }
    return 0;
};
