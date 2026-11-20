
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = [];
    let current = [];

    nums.sort((a, b) => a - b);

    function backtrack(start) {
        result.push([...current]);

        for (let i = start; i < nums.length; i++) {

            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }

            current.push(nums[i]);

            backtrack(i + 1);

            current.pop();
        }
    }

    backtrack(0);

    return result;
};
