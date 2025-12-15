var characterReplacement = function(s, k) {
    
    let left = 0;
    let maxFreq = 0;
    let counts = new Array(26).fill(0);
    let res = 0;

    for (let right = 0; right < s.length; right++) {

        let W = right - left + 1

        // update the frequency map
        let idx = s.charCodeAt(right) - 65; 
        counts[idx]++;

        // update maxFreq - here interesting thing is, it is b/w current max and current char frequence only!!
        maxFreq = Math.max(maxFreq, counts[idx]);

        // 
        while (W - maxFreq > k) {
            idx = s.charCodeAt(left) - 65;
            counts[idx]--;
            left++;
        }

        // find the global max
        res = Math.max(res, W);
    }

    return res;
};