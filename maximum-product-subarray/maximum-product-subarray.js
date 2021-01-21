/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 0) return 0;
    let min = nums[0];
    let max = nums[0];
    let bestProduct = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let temp = max;
        max = Math.max(nums[i], nums[i] * max, nums[i] * min);
        min = Math.min(nums[i], nums[i] * min, nums[i] * temp);
        bestProduct = Math.max(bestProduct, max);
    }
    return bestProduct;
};
