/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i += 2) {
        ans = ans.concat(Array(nums[i]).fill(nums[i + 1]));
    }
    return ans;
};