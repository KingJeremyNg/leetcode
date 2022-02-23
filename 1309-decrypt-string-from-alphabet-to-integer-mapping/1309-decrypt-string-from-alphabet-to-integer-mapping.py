class Solution(object):
    def freqAlphabets(self, s):
        """
        :type s: str
        :rtype: str
        """
        ans = ""
        while(s):
            if s[-1] == "#":
                ans = chr(int(s[-3:-1]) + 96) + ans
                s = s[0:-3]
            else:
                ans = chr(int(s[-1]) + 96) + ans
                s = s[0:-1]
        return ans
