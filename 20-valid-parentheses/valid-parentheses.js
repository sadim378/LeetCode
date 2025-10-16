/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];

    var pairs = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };

    for (var char of s) {
        if ( char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else {
            if (stack.length === 0) return false;

            var top = stack.pop();

            if (pairs[char] !== top) {
                return false;
            }
        }
    }

    return stack.length === 0;
};