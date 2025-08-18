
var lengthOfLongestSubstring = function(s) {
    
    let maxLen = 0

    for (let i = 0; i < s.length; i++){

        let l = i
        let r = l + 1

        if(r >= s.length){
            continue
        }

        let len = 1

        while (s[l] != s[r] && r < s.length){
            len++
            r++
        }

        maxLen = Math.max(len, maxLen)
    }

    return maxLen
};

console.log(lengthOfLongestSubstring("abcabcbb"))