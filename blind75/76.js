var minWindow = function(s, t) {

    function minWindowStarting(start){

        let i = start
        let j = 0
        let window = 0

        let windowStart = 0

        while (i < s.length && j < t.length){

            if (s[i] == t[j] && j == 0){
                windowStart = i
                window++ //start
                i++
                j++
            }else if(s[i] != t[j] && window > 0){
                window++ // non start,  non matches
                i++
            }else if(s[i] == t[j]){
                window++ // non start,  non matches
                i++
                j++
            }
        }

        if (j == t.length){
            return {"start": windowStart, "end": i}
        }

        return {}
    }
  
    for(let i = 0;i<s.length;i++){
        let w = minWindowStarting(i)
        console.log(w)
    }

};

console.log(minWindow("ADOBECODEBANC", "ABC"))