/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(" ").map((word) => {
        return word.split("").reverse().join("");
    });
    return s.join(" ");
};