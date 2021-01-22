/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let arr = [0];
    for (let i = 1; i <= num; i++) {
        arr.push(i.toString(2).replace(/0/g, "").length);
    }
    return arr;
};
