/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var set = new Set();
    var left = 0;
    var maxLen = 0;

    for (var right = 0; right < s.length; right++) {
        while (set.has(s[right])){
            set.delete(s[left]);
                left++;
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
};