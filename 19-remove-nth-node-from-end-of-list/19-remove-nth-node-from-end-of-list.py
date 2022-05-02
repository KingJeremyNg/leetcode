# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        def counter(node, count=0):
            if not node:
                return count
            return counter(node.next, count + 1)

        def remove(node, n, prev=None, count=0):
            if count == length - n:
                if not prev and not node.next:
                    node = None
                elif not prev:
                    node.val = node.next.val
                    node.next = node.next.next
                elif not node.next:
                    prev.next = None
                else:
                    prev.next = node.next
                return
            return remove(node.next, n, node, count + 1)

        length = counter(head)
        if length == 1:
            return None
        remove(head, n)
        return head