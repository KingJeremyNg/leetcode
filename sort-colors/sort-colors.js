/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    red = 0;
    white = 0;
    blue = nums.length - 1;

    while (white <= blue) {
        if (nums[white] === 0) {
            temp = nums[red];
            nums[red] = nums[white];
            nums[white] = temp;
            white++;
            red++;
        }
        else if (nums[white] === 1) {
            white++;
        }
        else {
            temp = nums[white];
            nums[white] = nums[blue];
            nums[blue] = temp
            blue--;
        }
    }
};
