/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    var str = x.toString();
    var reversed = str.split('').reverse().join('');

    return str === reversed;
};