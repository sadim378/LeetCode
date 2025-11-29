/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var candidate = null;
    var count = 0;

    for (var num of nums) {
        if (count === 0) {
            candidate = num;
        }

        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
};