/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let array = new Array();
    for(let i = 0; i < n; i++) {
        array.push(nums[i]);
        array.push(nums[n + i]);
    }
    return array;
};
