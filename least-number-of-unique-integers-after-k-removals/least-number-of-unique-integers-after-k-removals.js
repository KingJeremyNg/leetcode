/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    let map = new Map();
    arr.forEach((element) => {
        map.set(element, map.get(element) + 1 || 1);    // Map arr into a frequency map
    });
    let occurrences = Array.from(map.values());         // Store all values of map into an array
    occurrences.sort((a, b) => a - b);                  // Sort array in ascending order
    let res = occurrences.length;
    for (let freq of occurrences) {
        if (k >= freq) {
            k -= freq;
            res--;
        }
        else return res;
    }
    return res;
};
