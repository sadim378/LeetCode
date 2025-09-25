/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var MAX = 2147483647;
    var MIN = -2147483648;

    var rev = 0;
    var sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    while ( x > 0) {
        var lastDigit = x % 10;
        rev = rev * 10 + lastDigit;
        x = Math.floor(x / 10);
    }

    rev = rev * sign;

    if (rev < MIN || rev > MAX) return 0;

    return rev;
};