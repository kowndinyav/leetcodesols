var isInterleave = function(s1, s2, s3) {

    const memo = Array.from({length:s1.length}, () => new Array(s2.length))


    function solve(i, j, k){

        if(i < s1.length && j < s2.length && memo[i][j]){
            return memo[i][j]
        }

        if (k === s3.length) {
            return i === s1.length && j === s2.length;
        }

        if (i == s1.length && j == s2.length){
            return false
        }

        let r1 = false
        let r2 = false
        
        if (s1[i] == s3[k]){
            r1 = solve(i+1, j, k+1)
        }
        
        if(s2[j] == s3[k]){
            r2 = solve(i, j+1, k+1)
        }
    
        memo[i][j] = r1 || r2

        return memo[i][j]
    }

    if (s1.length == 0){
        return s2 == s3
    }

    if (s2.length == 0){
        return s1 == s3
    }

    return solve(0,0,0)
    
};

