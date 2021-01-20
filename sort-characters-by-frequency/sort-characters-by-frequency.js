/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let dict = {};
    let array = new Array();
    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]]) dict[s[i]] += 1;
        else dict[s[i]] = 1;
    }
    for (var key in dict) {
        array.push(key.repeat(dict[key]));
    }
    return array.sort((a, b) => b.length - a.length).join("");
};
