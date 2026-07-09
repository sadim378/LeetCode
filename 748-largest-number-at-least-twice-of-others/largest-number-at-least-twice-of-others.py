class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        largest = max(nums)
        index = nums.index(largest)
        for num in nums:
            if num == largest:
                continue
            if largest < num * 2:
                return -1

        return index