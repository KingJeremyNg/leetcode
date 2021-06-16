class Solution(object):
    def arrangeWords(self, text):
        """
        :type text: str
        :rtype: str
        """
        text = text.split()
        text.sort(key = len)
        return " ".join(text).capitalize()
