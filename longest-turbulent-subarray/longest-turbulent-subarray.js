/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    let ans = 1;
    if (arr.length === 1) return ans;
    let anchor = 0;
    for (let i = 1; i < arr.length; i++) {
        let c = compare(arr[i - 1], arr[i]);
        if (c === 0) anchor = i;
        else if (i === arr.length - 1 || c * compare(arr[i], arr[i + 1]) !== -1) {
            ans = Math.max(ans, i - anchor + 1);
            anchor = i;
        }
    }
    return ans;
};

function compare(a, b) {
    if (a < b) return -1;
    if (a === b) return 0;
    if (a > b) return 1;
}