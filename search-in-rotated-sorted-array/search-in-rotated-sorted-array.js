/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 1 && target === nums[0]) return 0;
    if (nums.length === 1 && target != nums[0]) return -1;
    if (target >= nums[0]) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) return i;
            if (target < nums[i]) return -1;
        }
    }
    else {
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] === target) return i;
            if (target > nums[i]) return -1;
        }
    }
    return -1;
};
