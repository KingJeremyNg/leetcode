/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    for (let i = 0; i < T.length; i++) {
        let days = 0;
        for (let j = i + 1; j < T.length; j++) {
            if (T[j] > T[i]) {
                days = j - i;
                break;
            }
        }
        T[i] = days;
    }
    return T;
};