# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def maxLevelSum(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        sum = [0]
        def traverse(node, level = 0):
            if (not node):
                return
            if (level >= len(sum)):
                sum.append(0)
            sum[level] += node.val
            traverse(node.left, level + 1)
            traverse(node.right, level + 1)
        traverse(root)
        return sum.index(max(sum)) + 1
