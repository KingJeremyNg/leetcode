# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """

        def traverse(node1, node2, carry, prev=None):
            if not node1 and not node2:
                if carry:
                    prev.next = ListNode(val=carry, next=None)
                return
            if not node1.next and node2.next:
                node1.next = ListNode(val=0, next=None)
            if not node2.next and node1.next:
                node2.next = ListNode(val=0, next=None)
            num = node1.val + node2.val + carry
            node1.val = num % 10
            traverse(node1.next, node2.next, num // 10, node1)

        traverse(l1, l2, 0)
        return l1
