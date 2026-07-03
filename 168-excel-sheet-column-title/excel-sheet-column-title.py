class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = []

        while columnNumber > 0:
            columnNumber -= 1

            remainder = columnNumber % 26
            letter = chr(ord('A') + remainder)

            result.append(letter)

            columnNumber //= 26

        result.reverse()
        return "".join(result)