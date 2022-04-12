class Solution(object):
    def gameOfLife(self, board):
        """
        :type board: List[List[int]]
        :rtype: None Do not return anything, modify board in-place instead.
        """
        ans = [[0 for j in range(len(board[i]))] for i in range(len(board))]
        for i in range(len(ans)):
            for j in range(len(ans[i])):
                subsection = [list[max(0, j-1):j+2] for list in board[max(0, i-1):i+2]]
                live = sum(list.count(1) for list in subsection)
                dead = sum(list.count(0) for list in subsection)
                if board[i][j] == 1:
                    if live - 1 < 2:
                        ans[i][j] = 0
                    elif live - 1 > 3:
                        ans[i][j] = 0
                    else:
                        ans[i][j] = 1
                else:
                    if live == 3:
                        ans[i][j] = 1
        for i in range(len(board)):
            for j in range(len(board[i])):
                board[i][j] = ans[i][j]
