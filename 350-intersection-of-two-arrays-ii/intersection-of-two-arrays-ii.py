from typing import List

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        count = {}

        # nums1 er protita number count korbo
        for num in nums1:
            if num in count:
                count[num] += 1
            else:
                count[num] = 1

        result = []

        # nums2 er moddhe common number khujbo
        for num in nums2:
            if num in count and count[num] > 0:
                result.append(num)
                count[num] -= 1

        return result