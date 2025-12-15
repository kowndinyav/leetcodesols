
var lengthOfLongestSubstring = function(s) {
    
    let left = 0
    let maxLen = 0
    let memory = new Map()
    
    
    for (let right = 0; right < s.length; right++){

        let ch = s[right]

        if (memory.has(ch) && memory.get(ch) >= left ){
            // encountered a repeated character, move left to +1 of the repeated character position in the past
            // also move left by 1 only if the repeated character's position is greater than current left
            // example: "abba" -> when right is 3, ch is 'a' and left is 0, so move left to 1 - this is the case where left is 0 and repeated character's position is 0
            left = memory.get(ch) + 1
        }

        // remember the character's position
        memory.set(ch, right)

        maxLen = Math.max(right - left + 1, maxLen)
    }
    
    return maxLen
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
// console.log(lengthOfLongestSubstring("bbbbbb"))
console.log(lengthOfLongestSubstring("abba"))