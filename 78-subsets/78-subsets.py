class Solution(object):
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        ans = []
        bitmask = len(nums) * "0"
        while ("0" in bitmask):
            subset = []
            for i in range(len(bitmask)):
                if bitmask[i] == "1":
                    subset.append(nums[i])
            ans.append(subset)
            bitmask = bin(int(bitmask, 2) + 1)[2:].zfill(len(nums))
        ans.append(nums)
        return ans
