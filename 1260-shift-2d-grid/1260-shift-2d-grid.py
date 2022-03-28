class Solution(object):
    def shiftGrid(self, grid, k):
        """
        :type grid: List[List[int]]
        :type k: int
        :rtype: List[List[int]]
        """
        ans = []
        flatlist = [item for sublist in grid for item in sublist]
        for i in range(k):
            flatlist.insert(0, flatlist.pop())
        for i in range(len(grid)):
            ans.append(flatlist[i*len(grid[0]):(i+1)*len(grid[0])])
        return ans
