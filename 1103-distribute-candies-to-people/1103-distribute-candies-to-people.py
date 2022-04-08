class Solution(object):
    def distributeCandies(self, candies, num_people):
        """
        :type candies: int
        :type num_people: int
        :rtype: List[int]
        """
        ans = [0] * num_people
        count = 1
        while (candies > 0):
            if (candies <= count):
                ans[(count - 1) % num_people] += candies
                candies = 0
            else:
                ans[(count - 1) % num_people] += count
                candies -= count
            count += 1
        return ans
