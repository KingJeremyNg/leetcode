/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let dict = {};
    for (let i = 0; i < nums.length; i++) {
        if (dict[nums[i]]) dict[nums[i]] += 1;
        else dict[nums[i]] = 1;
    }
    for (var key in dict) {
        if (dict[key] == 1) return key;
    }
};
