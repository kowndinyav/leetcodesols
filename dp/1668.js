var maxRepeating = function(sequence, word) {
    
    let S = sequence.length
    let W = word.length
    
    function getRepeatK(start){
        let i = start
        let k = 0

        while (i < S){
            let segment = sequence.slice(i, i+W)
            if(segment == word){
                k++
                i += W-1
            }else{
                break
            }
            i++
        }

        return k
    }

    let maxK = 0

    for (let i = 0; i < S; i++){
        if (sequence[i] == word[0]){
            maxK = Math.max(maxK, getRepeatK(i))
        }
    }

    return maxK
    
};

console.log(maxRepeating("ababc", "ba"))