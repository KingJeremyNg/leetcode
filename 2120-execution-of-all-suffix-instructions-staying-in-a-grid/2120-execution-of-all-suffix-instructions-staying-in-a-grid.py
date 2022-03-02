class Solution(object):
    def executeInstructions(self, n, startPos, s):
        """
        :type n: int
        :type startPos: List[int]
        :type s: str
        :rtype: List[int]
        """
        ans = []
        for i in range(len(s)):
            count = 0
            y, x = startPos
            for j in range(i, len(s)):
                if s[j] == "U":
                    y -= 1
                if s[j] == "R":
                    x += 1
                if s[j] == "D":
                    y += 1
                if s[j] == "L":
                    x -= 1
                if x < 0 or x >= n or y < 0 or y >= n:
                    break
                else:
                    count += 1
            ans.append(count)
        return ans
