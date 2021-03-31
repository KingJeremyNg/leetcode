/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
    let xy = 0;
    let yx = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === "x" && s2[i] === "y") xy++;
        if (s1[i] === "y" && s2[i] === "x") yx++;
    }
    let ans = Math.floor(xy / 2) + Math.floor(yx / 2);
    xy %= 2;
    yx %= 2;
    if (!xy && !yx) return ans;
    else if (xy && yx) return ans + 2;
    else return -1;
};
