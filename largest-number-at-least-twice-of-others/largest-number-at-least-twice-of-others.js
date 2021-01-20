/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if (nums.length === 1) return 0;
    let sorted = (new Array(...nums)).sort(function(a, b) {return a - b});
    let max = sorted.pop();
    for (let i = 0; i < sorted.length; i++) {
        if ((sorted[i] * 2) > max) return -1;
    }
    return nums.indexOf(max);
};
