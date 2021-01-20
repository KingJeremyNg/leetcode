/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let split = sentence.split(" ");
    for (let i = 0; i < split.length; i++) {
        if (split[i].startsWith(searchWord)) return i + 1;
    }
    return -1;
};
