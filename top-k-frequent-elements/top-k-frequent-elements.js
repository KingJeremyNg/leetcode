/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let dict = {};
    nums.forEach((element) => {
        dict[element] ? dict[element] += 1 : dict[element] = 1;
    });
    let arr = Object.keys(dict).map((key) => {
        return [Number(key), dict[key]];
    });
    arr.sort((a, b) => b[1] - a[1]);
    let ans = [];
    for (let i = 0; i < k; i++) {
        ans.push(arr[i][0]);
    }
    return ans;
};