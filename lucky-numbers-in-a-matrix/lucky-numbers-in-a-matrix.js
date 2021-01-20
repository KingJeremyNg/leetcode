/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let minNums = new Array();
    let maxNums = new Array();
    let answers = new Array();
    for (let m = 0; m < matrix.length; m++) {
        let min = Infinity;
        for (let n = 0; n < matrix[m].length; n ++) {
            if (matrix[m][n] < min) min = matrix[m][n];
        }
        minNums.push(min);
    }
    for (let n = 0; n < matrix[0].length; n++) {
        let max = -Infinity;
        for (let m = 0; m < matrix.length; m++) {
            if (matrix[m][n] > max) max = matrix[m][n];
        }
        maxNums.push(max);
    }
    for (let i = 0; i < minNums.length; i++) {
        if (maxNums.includes(minNums[i])) answers.push(minNums[i]);
    }
    return answers;
};
