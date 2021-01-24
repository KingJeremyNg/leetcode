/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let direction = 0;
    let ans = [];
    while (matrix.length != 0) {
        switch(direction % 4) {
            
            // Right case
            case 0:
                ans.push(...matrix.shift());
                break;
            
            // Downward case
            case 1:
                if (matrix.length === 1) {
                    ans.push(matrix[0].pop());
                    break;
                }
                else if (matrix[0].length === 1) {
                    while (matrix.length != 0) {
                        ans.push(matrix.shift());
                    }
                }
                else {
                    for (let i = 0; i < matrix.length; i++) {
                        ans.push(matrix[i].pop());
                    }
                }
                break;
            
            // Left case
            case 2:
                ans.push(...matrix.pop().reverse());
                break;
            
            // Upward case
            case 3:
                if (matrix.length === 1) {
                    ans.push(matrix[0].shift());
                    break;
                }
                else if (matrix[0].length === 1) {
                    while (matrix.length != 0) {
                        ans.push(matrix.pop());
                    }
                }
                else {
                    for (let i = matrix.length - 1; i >= 0; i--) {
                        ans.push(matrix[i].shift());
                    }
                }
                break;
        }
        direction++;
    }
    return ans;
};
