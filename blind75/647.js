
var countSubstrings = function(s) {
  
    let count = 0

    function expandAroundCenter(center){
        let l = center
        let r = center
        
        while (l >= 0 && s[l] == s[r] && r < s.length){
            count++
            l--
            r++
        }
    }

    function expandAroundCenter2(l, r){
        while (l >= 0 && s[l] == s[r] && r < s.length){
            count++
            l--
            r++
        }
    }

    for (let i = 0; i < s.length; i++){
        expandAroundCenter(i)
        expandAroundCenter2(i, i + 1)
    }

    return count
};