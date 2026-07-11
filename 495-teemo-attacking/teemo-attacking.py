from typing import List
class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        total = 0

        for i in range(1, len(timeSeries)):
            gap = timeSeries[i] - timeSeries[i - 1]
            total += min(gap, duration)
        total += duration

        return total