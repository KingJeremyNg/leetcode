/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    nums = nums.join("").split("0");
    return Math.max(...(nums.map(a => a.length)));
};