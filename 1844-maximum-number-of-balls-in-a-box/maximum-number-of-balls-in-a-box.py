class Solution:
    def countBalls(self, lowLimit: int, highLimit: int) -> int:
        boxes = {}

        for ball in range(lowLimit, highLimit + 1):
            digit_sum = sum(int(digit) for digit in str(ball))
            boxes[digit_sum] = boxes.get(digit_sum, 0) + 1

        return max(boxes.values())