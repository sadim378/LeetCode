/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var n = nums.length;

    for (var i = 0; i < n; i++) {
        if (nums[i] <= 0) {
            nums[i] = n + 1;
        }
    }

    for (var i = 0; i < n; i++) {
        var x = Math.abs(nums[i]);
        if (x >= 1 && x <= n) {
            nums[x - 1] = -Math.abs(nums[x - 1]);
        }
    }

    for (var i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    return n + 1;
};