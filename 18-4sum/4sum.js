/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    var result = [];
    var n = nums.length;

    for (var i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (var j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            var left = j + 1;
            var right = n - 1;

            while (left < right) {
                var sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    result.push([nums[i] , nums[j] , nums[left] , nums[right]]);

                    while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;   
                }else if (sum < target) {
                    left++;
                }else {
                    right--;
                }
            }
        }
    }
    return result;
};