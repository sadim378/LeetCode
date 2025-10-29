/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    
    let i = 0;
    let n = s.length;
    let sign = 1;
    let result = 0;

    while (i < n && s[i] === ' ') {
        i++;
    }

    if (i === n) {
        return 0;
    }

    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        sign = 1;
        i++;
    }

    while (i < n) {
        const char = s[i];
        const digit = char.charCodeAt(0) - '0'.charCodeAt(0);

        if (digit < 0 || digit > 9) {
            break;
        }

        if (sign === 1) {
            if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > (INT_MAX % 10))) {
                return INT_MAX;
            }
        } else {
            if (result > Math.floor(INT_MAX / 10) || (result === Math.floor(INT_MAX / 10) && digit > (INT_MAX % 10) + 1)) {
                return INT_MIN;
            }
        }

        result = (result * 10) + digit;
        i++;
    }
    
    return result * sign;
};