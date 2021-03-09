public class Solution {
    public string MergeAlternately(string word1, string word2) {
        string ans = "";
        while (word1 != "" && word2 != "") {
            ans += word1[0];
            word1 = word1.Substring(1, word1.Length - 1);
            ans += word2[0];
            word2 = word2.Substring(1, word2.Length - 1);
        }
        return ans + word1 + word2;
    }
}