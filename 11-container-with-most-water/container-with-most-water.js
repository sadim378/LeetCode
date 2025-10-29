/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var left = 0;
    var right = height.length - 1;
    var maxArea = 0;

    while (left < right) {
        var currentHeight = Math.min(height[left], height[right]);
        var width = right - left;
        var currentArea = currentHeight * width;

        maxArea = Math.max(maxArea, currentArea);

        if (height[left] < height[right]) {
            left++;
        }else {
            right--;
        }
    }

    return maxArea;
};