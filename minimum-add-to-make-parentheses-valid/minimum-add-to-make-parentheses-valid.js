/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let stack = [];
    for (let i = 0; i < S.length; i++) {
        if (stack[stack.length - 1] === "(" && S[i] === ")") stack.pop();
        else stack.push(S[i]);
    }
    return stack.length;
};