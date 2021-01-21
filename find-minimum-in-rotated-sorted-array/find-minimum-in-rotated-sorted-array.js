/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) return nums[0];
    let min = Infinity;
    if (nums[0] > nums[nums.length - 1]) {
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] < min) min = nums[i];
            else return min;
        }
    }
    else {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < min) min = nums[i];
            else return min;
        }
    }
};
