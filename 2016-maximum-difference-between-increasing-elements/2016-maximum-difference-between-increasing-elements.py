class Solution(object):
    def maximumDifference(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max = -1
        for i in range(len(nums)):
            for j in range(len(nums)):
                if i == j:
                    continue
                val = abs(nums[j] - nums[i])
                if val > max and i < j and nums[i] < nums[j]:
                    max = val
        return max