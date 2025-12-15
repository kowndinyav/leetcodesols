var numDecodings = function(s) {

    if(s[0] == "0"){
        return 0
    }

    let n = s.length
    let dp = new Array(s.length).fill(0)

    dp[0] = 1

    for (let i = 1; i < n; i++){

        let num = parseInt(s.slice(i-1, i+1))
        
        if (num <= 26 && s[i] != 0 && s[i-1] != 0 && ((i + 1 >= n) || s[i+1] != 0)){
            dp[i] = 1 + dp[i-1]
        }else{
            dp[i] = dp[i-1]
        }

    }

    return dp[n-1]
}

console.log(numDecodings("06"))