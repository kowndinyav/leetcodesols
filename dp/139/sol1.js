/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // Convert wordDict to Set for O(1) lookup
    const wordSet = new Set(wordDict);
    
    // dp[i] means: can we segment s[0...i-1] into dictionary words?
    // dp[0] = true means empty string can be segmented (base case)
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    
    // For each position i in the string
    for (let i = 1; i <= s.length; i++) {
        // Try all possible previous positions j
        for (let j = 0; j < i; j++) {
            // If s[0...j-1] can be segmented (dp[j] is true)
            // AND s[j...i-1] is in dictionary
            // Then s[0...i-1] can be segmented
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; // No need to check other j values
            }
        }
    }
    
    return dp[s.length];
};

// Example usage:
console.log(wordBreak("leetcode", ["leet","code"])); // true
console.log(wordBreak("applepenapple", ["apple","pen"])); // true
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); // false
