/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = 0; j < height.length; j++) {
            if (i == j) break;
            if ((temp = Math.min(height[i], height[j]) * Math.abs(j - i)) > max) max = temp;
        }
    }
    return max;
};
