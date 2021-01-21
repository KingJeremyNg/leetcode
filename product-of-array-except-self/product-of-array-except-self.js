/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let length = nums.length;
    let answer = [1];
    for (let i = 1; i < nums.length; i++) {
        answer.push(nums[i - 1] * answer[i - 1]);
    }
    let R = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= R;
        R *= nums[i];
    }
    return answer;
};
