/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let stack = [];
    for (let i = 0; i < S.length; i++) {
        stack.push(S[i]);
        if (stack[stack.length - 1] === stack[stack.length - 2]) {
            stack.pop();
            stack.pop();
        }
    }
    return stack.join("");
};