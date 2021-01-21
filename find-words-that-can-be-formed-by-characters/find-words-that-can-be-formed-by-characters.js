/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const dict = {};
    let sum = 0;
    for (let i = 0; i < chars.length; i++) {
        if (dict[chars[i]]) dict[chars[i]] += 1;
        else dict[chars[i]] = 1;
    }
    for (let i = 0; i < words.length; i++) {
        let tempDict = {...dict};
        let check = true;
        for (let j = 0; j < words[i].length; j++) {
            if (!tempDict[words[i][j]] || tempDict[words[i][j]] < 0) {
                check = false;
                break;
            }
            if (tempDict[words[i][j]] > 0) tempDict[words[i][j]] -= 1;
        }
        if (check) sum += words[i].length;
    }
    return sum;
};
