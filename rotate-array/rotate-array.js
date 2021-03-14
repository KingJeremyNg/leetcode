/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let subarray = nums.splice(nums.length - k, k);
    nums.unshift(...subarray);
};