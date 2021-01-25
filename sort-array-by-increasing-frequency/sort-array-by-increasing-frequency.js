/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!map.get(nums[i])) map.set(nums[i], 1);
        else map.set(nums[i], map.get(nums[i]) + 1);
    }
    return nums.sort((a, b) => map.get(a) - map.get(b) || b - a);
};
