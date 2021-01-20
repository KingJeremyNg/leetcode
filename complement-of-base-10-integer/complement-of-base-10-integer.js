/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    let string = N.toString(2);
    let result = "";
    for (let i = 0; i < string.length; i++) {
        (string[i] === "1") ? result += "0" : result += "1";
    }
    return parseInt(result, 2);
};
