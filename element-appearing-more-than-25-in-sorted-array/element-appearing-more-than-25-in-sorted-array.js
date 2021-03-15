/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) map[arr[i]] = 1;
        else map[arr[i]] += 1;
        if (map[arr[i]] / arr.length > 0.25) return arr[i];
    }
};