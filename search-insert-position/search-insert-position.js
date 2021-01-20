/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if ((index = nums.indexOf(target)) != -1) return index;
    else if (target > nums[nums.length - 1]) return nums.length;
    else if (target < nums[0]) return 0;
    else {
        for (let i = 1; i < nums.length; i++) {
            if (target > nums[i - 1] && target < nums[i]) return i;
        }
    }
};
