/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let excess = new Array();
    let arr = new Array();
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) excess.push(arr1[i]);
        else arr.push(arr1[i]);
    }
    arr.sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b));
    excess.sort((a, b) => a - b);
    return arr.concat(excess);
};