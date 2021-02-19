/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function(word1, word2) {
    let string = "";
    while (word1.length && word2.length) {
        if (word1 > word2) {
            string += word1[0];
            word1 = word1.substring(1);
        }
        else {
            string += word2[0];
            word2 = word2.substring(1);
        }
    }
    return string += word1 + word2;
};