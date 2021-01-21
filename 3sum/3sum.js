/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let answers = [];
    if (nums.length < 3) return answers;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) return answers;
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let temp = nums[i] + nums[j] + nums[k];
            if (temp === 0) {
                answers.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) j++;
                while (j < k && nums[k] == nums[k + 1]) k--;
            }
            else if (temp > 0) k--;
            else j++;
        }
    }
    return answers;
};
