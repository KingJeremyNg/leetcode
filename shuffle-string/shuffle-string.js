/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    string = new Array();
    for (let i = 0; i < indices.length; i++) {
        string.push(s[indices.indexOf(i)]);
    }
    return string.join("");
};
