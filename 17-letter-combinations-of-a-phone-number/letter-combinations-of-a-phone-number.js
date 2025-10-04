/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    var phoneMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    var result = [];

    function backtrack(current , nextdigits) {
        if (nextdigits.length === 0) {
            result.push(current);
            return;
        }

        var letters = phoneMap[nextdigits[0]];

        for (var i = 0; i < letters.length; i++) {
            backtrack(current + letters[i], nextdigits.slice(1));
        }
    }

    backtrack("" , digits);

    return result;
};