from typing import List
class Solution:
    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
        rows = len(img)
        cols = len(img[0])
        result = [[0] * cols for _ in range(rows)]

        for row in range(rows):
            for col in range(cols):

                total = 0
                count = 0

                for new_row in range(row - 1, row + 2):
                    for new_col in range(col - 1, col + 2):
                        if 0 <= new_row < rows and 0 <= new_col < cols:
                            total += img[new_row][new_col]
                            count += 1

                result[row][col] = total // count

        return result