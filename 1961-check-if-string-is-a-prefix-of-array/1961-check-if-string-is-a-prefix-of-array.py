class Solution(object):
    def isPrefixString(self, s, words):
        """
        :type s: str
        :type words: List[str]
        :rtype: bool
        """
        string = ""
        for word in words:
            string += word
            if string == s:
                return True
            if not s.startswith(string):
                return False
