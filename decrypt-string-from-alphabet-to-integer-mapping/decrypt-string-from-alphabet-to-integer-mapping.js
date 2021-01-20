/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    s = s.split("");
    // console.log(s);
    const map = {};
    let result = "";
    for (let i = 1; i <= 26; i++) {
        map[i] = String.fromCharCode(96 + i);
    }
    // console.log(JSON.stringify(map));
    while (s.length != 0) {
        switch(s[s.length - 1]) {
            case "#":
                s.pop();
                result = map[s[s.length - 2] + s[s.length - 1]] + result;
                s.pop();
                s.pop();
                break;
            default:
                result = map[s[s.length - 1]] + result;
                s.pop();
                break;
        }
    }
    return result;
};
