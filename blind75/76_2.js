var minWindow = function(s, t) {
    
    // Build target frequency map
    let freqMapTarget = new Map();
    for (let ch of t) {
        freqMapTarget.set(ch, (freqMapTarget.get(ch) || 0) + 1);
    }

    let freqMapSrc = new Map();
    let required = freqMapTarget.size;  // number of unique chars in t
    let formed = 0;                     // number of chars that meet required freq

    let l = 0, r = 0;
    let minWindowSize = Number.MAX_SAFE_INTEGER;
    let window = [];

    while (r < s.length) {
        let ch = s[r];

        // building the frequency map for source string
        freqMapSrc.set(ch, (freqMapSrc.get(ch) || 0) + 1);

        if (freqMapTarget.has(ch) && freqMapSrc.get(ch) === freqMapTarget.get(ch)) {
            // when the frequency of a specific character match in both frequency maps, we increase the formed count
            formed++;
        }

        // Try to shrink window while it is valid
        while (l <= r && formed === required) {
            
            // update the window
            if ((r - l + 1) < minWindowSize) {
                minWindowSize = r - l + 1;
                window = [l, r];
            }

            // shrink left
            let leftChar = s[l];
            freqMapSrc.set(leftChar, freqMapSrc.get(leftChar) - 1);
            if (freqMapTarget.has(leftChar) && freqMapSrc.get(leftChar) < freqMapTarget.get(leftChar)) {
                formed--;
            }

            l++;
        }

        r++;
    }

    return window.length === 0 ? "" : s.slice(window[0], window[1] + 1);
};