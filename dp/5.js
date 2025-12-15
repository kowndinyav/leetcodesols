
var longestPalindrome = function(s) {
    if (s.length === 0) return 0;

    let ret = 1
    let window = [0, 0]
    let maxLen = 1;

    // odd size palindrome
    for (let i = 0; i < s.length; i++){
        let l = i - 1
        let r = i + 1
        while (l >= 0 && r < s.length && s[l] == s[r]){
            
            if (r - l + 1 > maxLen) {
                maxLen = r - l + 1;
                window = [l, r];
            }

            l--
            r++
        }
    }


    // even size palindrome
    for (let i = 0; i < s.length-1; i++){
        if (s[i] == s[i+1]){
            let l = i - 1
            let r = i + 2

            if (2 > maxLen) {
                maxLen = 2;
                window = [i, i + 1];
            }            
            while (l >= 0 && r < s.length && s[l] == s[r]){
                if (r - l + 1 > maxLen) {
                    maxLen = r - l + 1;
                    window = [l, r];
                }
                l--
                r++
            }
        }

        
    }

    return s.slice(window[0], window[1] + 1);
};