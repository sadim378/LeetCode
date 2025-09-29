/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;
    
    // dp[i][j] = whether s[0..i-1] matches p[0..j-1]
    const dp = Array.from({length: m+1}, () => Array(n+1).fill(false));
    
    dp[0][0] = true; // empty string matches empty pattern

    // Initialize dp[0][j] when s is empty
    for (let j = 1; j <= n; j++) {
        if (p[j-1] === '*' && j >= 2) {
            dp[0][j] = dp[0][j-2]; // '*' can remove preceding char
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j-1] === '.' || p[j-1] === s[i-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else if (p[j-1] === '*') {
                // Two options:
                // 1. '*' stands for zero preceding element
                dp[i][j] = dp[i][j-2];
                // 2. '*' stands for one or more of preceding element
                if (p[j-2] === '.' || p[j-2] === s[i-1]) {
                    dp[i][j] = dp[i][j] || dp[i-1][j];
                }
            }
        }
    }
    
    return dp[m][n];
};
