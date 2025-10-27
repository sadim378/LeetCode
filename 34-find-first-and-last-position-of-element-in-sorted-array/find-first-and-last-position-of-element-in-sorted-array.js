/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var result = [-1, -1];
    var left = 0, right = nums.length - 1;

    while (left <= right) {
        var mid =Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }

    if (left >= nums.length || nums[left] !== target) {
        return result;
    }
    result[0] = left;

    right = nums.length - 1;

    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }

    result[1] = right;

    return result;
};