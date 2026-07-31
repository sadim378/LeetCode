from typing import List

class Solution:
    def smallestRangeI(self, nums: List[int], k: int) -> int:
        current_score = max(nums) - min(nums)

        return max(0, current_score - 2 * k)