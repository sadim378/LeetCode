/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    var closest = nums[0] + nums[1] + nums[2];

    for (var i = 0; i < nums.length; i++) {
        var left = i + 1;
        var right = nums.length - 1;

        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            if (sum === target) {
                return sum;
            }else if (sum < target) {
                left++;
            }else {
                right--;
            }
        }
    }
    return closest;
};