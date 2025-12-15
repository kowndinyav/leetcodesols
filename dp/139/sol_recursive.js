/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 
 * Recursive DP (Top-Down with Memoization)
 */
var wordBreak = function(s, wordDict) {
    // Convert to Set for O(1) lookup
    const wordSet = new Set(wordDict);
    
    // Memoization cache: key = start index, value = can we segment from this index?
    const memo = new Map();
    
    /**
     * Can we segment s[start...end] using dictionary words?
     * @param {number} start - starting index to check
     * @return {boolean}
     */
    function canSegment(start) {
        // Base case: reached the end of string
        if (start === s.length) {
            return true;
        }
        
        // Check memoization cache
        if (memo.has(start)) {
            return memo.get(start);
        }
        
        // Try all possible words starting from 'start' position
        for (let end = start + 1; end <= s.length; end++) {
            // Get substring from start to end
            const word = s.substring(start, end);
            
            // If this word is in dictionary AND rest of string can be segmented
            if (wordSet.has(word) && canSegment(end)) {
                memo.set(start, true);
                return true;
            }
        }
        
        // If no valid segmentation found
        memo.set(start, false);
        return false;
    }
    
    return canSegment(0);
};

// Example usage:
console.log(wordBreak("leetcode", ["leet","code"])); // true
console.log(wordBreak("applepenapple", ["apple","pen"])); // true
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); // false

