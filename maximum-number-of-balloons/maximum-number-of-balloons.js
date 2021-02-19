/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let ans = 0;
    let dict = {};
    for (let i = 0; i < text.length; i++) {
        if (dict[text[i]]) dict[text[i]] += 1;
        else dict[text[i]] = 1;
    }
    while (dict["b"] > 0 &&
           dict["a"] > 0 &&
           dict["l"] > 1 &&
           dict["o"] > 1 &&
           dict["n"] > 0) {
        ans++;
        dict["b"]--;
        dict["a"]--;
        dict["l"] -= 2;
        dict["o"] -= 2;
        dict["n"]--;
    }
    return ans;
};