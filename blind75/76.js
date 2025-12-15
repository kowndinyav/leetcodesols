var minWindow = function(s, t) {

    function computeFreqMap(str){
        
        let freqMap = new Map()
        
        for (let i = 0; i < str.length; i++){
            if(!freqMap.has(str[i])){
                freqMap.set(str[i], 0)
            }
            freqMap.set(str[i], freqMap.get(str[i]) + 1)
        }
        return freqMap
    }

    function compareFreqMap(freqMapSrc, freqMapTarget){
        for (let [key, val] of freqMapTarget){
            
            if (!freqMapSrc.has(key)){
                // if one of the expected char not found in the src map
                return false
            }

            if(freqMapSrc.get(key) < val){
                return false
            }
        }
        return true
    }

    function validateSubString(src, left, right, freqMapTarget){
        
        let freqMapSrc = new Map()
        
        for (let i = left; i <= right; i++){
            
            if(!freqMapSrc.has(src[i])){
                freqMapSrc.set(src[i], 0)
            }
            freqMapSrc.set(src[i], freqMapSrc.get(src[i]) + 1)
        }

        
        return compareFreqMap(freqMapSrc, freqMapTarget)
    }

    let t_freqMap = computeFreqMap(t)

    let minWindowSize = Number.MAX_SAFE_INTEGER
    let window = []

    for (let i=0;i<s.length;i++){
        for (let j=i+t.length-1; j < s.length;j++){
            if (validateSubString(s, i, j, t_freqMap)){
                // if t is found in s and if the window size is less than minWindowSize
                if ((j - i + 1) < minWindowSize){
                    window = [i, j]
                    minWindowSize = j - i + 1
                }
            }
        }
    }

    return window.length === 0 ? "" : s.slice(window[0], window[1] + 1)

};

console.log(minWindow("ADOBECODEBANC", "ABC"))