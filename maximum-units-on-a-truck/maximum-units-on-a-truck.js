/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => a[1] - b[1]);
    let ans = 0;
    let temp;
    while (truckSize >= 0) {
        temp = boxTypes.pop();
        if (!temp) return ans;
        ans += temp[0] * temp[1];
        truckSize -= temp[0];
    }
    if (truckSize < 0) {
        ans += truckSize * temp[1];
    }
    return ans;
};
