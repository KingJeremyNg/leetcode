/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let left = nums.length;
    let right = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                left = Math.min(left, i);
                right = Math.max(right, j);
            }
        }
    }
    return right - left < 0 ? 0 : right - left + 1;
};