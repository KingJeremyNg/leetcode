/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    nums.sort((a, b) => a - b);
    let stack = [];
    while (nums.length) {
        stack.push(nums.shift());
        for (let i = 1; i < k; i++) {
            let index = nums.indexOf(stack[stack.length - 1] + 1);
            if (index === -1) return false;
            stack.push(...nums.splice(index, 1));
        }
        stack = [];
    }
    return (stack.length === 0) ? true : false;
};