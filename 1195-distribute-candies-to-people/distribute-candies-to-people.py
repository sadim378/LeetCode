from typing import List

class Solution:
    def distributeCandies(self, candies: int, num_people: int) -> List[int]:
        result = [0] * num_people

        give = 1
        index = 0

        while candies > 0:
            result[index] += min(give, candies)
            candies -= give

            give += 1
            index = (index + 1) % num_people

        return result