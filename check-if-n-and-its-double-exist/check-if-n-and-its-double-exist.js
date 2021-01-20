/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let set = new Set();
    for (let val of arr) {
        if (set.has(val << 1) || set.has(val / 2)) return true;
        set.add(val);
    }
    return false;
};
