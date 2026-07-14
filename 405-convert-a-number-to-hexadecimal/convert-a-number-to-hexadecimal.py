class Solution:
    def toHex(self, num: int) -> str:
        hex_digits = "0123456789abcdef"
        if num == 0:
            return "0"
        num = num & 0xffffffff

        answer = ""

        while num > 0:
            remainder = num % 16
            answer = hex_digits[remainder] + answer
            num = num // 16

        return answer