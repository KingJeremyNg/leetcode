/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let array = new Array();
    for (let i = left; i <= right; i ++) {
        let string = i.toString();
        let count = 0;
        for (let j = 0; j < string.length; j++) {
            if (i % Number(string[j]) != 0) count++;
        }
        if (count == 0) array.push(i);
    }
    return array;
};
