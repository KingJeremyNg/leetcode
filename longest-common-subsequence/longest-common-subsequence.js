/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // Dyanamic Programming Approach. Fill 2D array with size text1.length * text2.length.
    let dp = new Array(text1.length + 1).fill(0);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(text2.length + 1).fill(0);
    }
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] != text2[j - 1]) {                     // The current char of text1 and text2 does not match
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);    // Check left and top for longer subsequence length
            }
            else {                                  // The current char of text1 and text2 matches
                dp[i][j] = dp[i - 1][j - 1] + 1;    // Check diag for prev longest subsequence length and add 1
            }
        }
    }
    return dp[text1.length][text2.length];
};
