# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def getMinimumDifference(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        memo = []

        def traverse(node, ans):
            if not node:
                return ans
            for num in memo:
                diff = abs(num - node.val)
                if diff < ans:
                    ans = diff
            memo.append(node.val)
            return min(traverse(node.left, ans), traverse(node.right, ans))

        return traverse(root, float("inf"))
