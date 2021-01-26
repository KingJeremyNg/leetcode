/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let dict = {};
    for (let i = 0; i < nums.length; i++) {
        dict[nums[i]] ? dict[nums[i]] += 1 : dict[nums[i]] = 1;
    }
    for (let key in dict) {
        if (dict[key] === 1) return key;
    }
};
