class Solution(object):
    def numWaterBottles(self, numBottles, numExchange):
        """
        :type numBottles: int
        :type numExchange: int
        :rtype: int
        """
        ans = numBottles
        while (numBottles):
            ans += numBottles // numExchange
            numBottles = (numBottles // numExchange) + (numBottles % numExchange)
            if numBottles < numExchange:
                break
        return ans
