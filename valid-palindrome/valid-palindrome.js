/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[\x00-\x2F]|[\x3A-\x40]|[\x5B-\x60]|[\x7B-\x7F]/g, "").toLowerCase();
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] != s[s.length - i - 1]) return false;
    }
    return true;
};