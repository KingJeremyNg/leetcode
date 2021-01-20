/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    S = S.replace(/[-]+/g, "");
    if (S === "") return "";
    S = S.split("").reverse().join("");
    S = S.match(new RegExp('.{1,' + K + '}', 'g'));
    for (let i = 0; i < S.length; i++) {
        S[i] = S[i].split("").reverse().join("");
    }
    return S.reverse().join("-").toUpperCase();
};
