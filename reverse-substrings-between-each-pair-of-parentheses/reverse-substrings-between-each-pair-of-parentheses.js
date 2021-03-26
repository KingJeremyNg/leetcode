/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case ")":
                let temp = [];
                while (stack[stack.length - 1] !== "(") {
                    temp.push(stack.pop());
                }
                stack.pop();
                stack.push(...temp);
                break;
            default:
                stack.push(s[i]);
        }
    }
    return stack.join("");
};
