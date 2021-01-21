/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) return nums[0];
    let bestSum = -Infinity;
    let currentSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        bestSum = Math.max(bestSum, currentSum);
    }
    return bestSum;
};
