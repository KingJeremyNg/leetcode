/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let arr = S.split("").map((char, i) => {
        return Math.abs(i - S.indexOf(C, i));
    });
    let reverse = S.split("").reverse();
    return reverse.map((char, i) => {
        return Math.min(arr[arr.length - i - 1], Math.abs(i - reverse.indexOf(C, i)));
    }).reverse();
};