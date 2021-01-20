/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let stackS = new Array();
    let stackT = new Array();
    for (let i = 0; i < S.length; i++) {
        if (S[i] == "#") stackS.pop();
        else stackS.push(S[i]);
    }
    for (let i = 0; i < T.length; i++) {
        if (T[i] == "#") stackT.pop();
        else stackT.push(T[i]);
    }
    return ((stackS.join("") === stackT.join("")) ? true : false);
};
