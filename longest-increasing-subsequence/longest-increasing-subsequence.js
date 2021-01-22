/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;
    let dp = new Array(nums.length);
    dp[0] = 1;
    let max = 1;
    for (let i = 1; i < dp.length; i++) {
        let maxVal = 0;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                maxVal = Math.max(maxVal, dp[j]);
            }
        }
        dp[i] = maxVal + 1;
        max = Math.max(max, dp[i]);
    }
    console.log(dp);
    return max;
};
