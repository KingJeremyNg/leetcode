class Solution(object):
    def minSteps(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: int
        """
        memo = {}
        for char in s:
            if char not in memo:
                memo[char] = 0
            memo[char] += 1
        
        count = 0
        for char in t:
            if (char in memo) and (memo[char] > 0):
                memo[char] -= 1
            else:
                count += 1
        return count
