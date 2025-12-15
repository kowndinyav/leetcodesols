var uniquePaths = function(m, n) {

    let dp = Array.from ({length: m+1}, () => new Array(n+1).fill(0))

    // Base case
    dp[m-1][n-2] = 1
    dp[m-2][n-1] = 1
    dp[m-1][n-1] = 1

    for (let i=m-1;i>=0;i--){
        for(let j=n-1;j>=0;j--){
            if (dp[i][j] == 0){
                dp[i][j] = dp[i+1][j] + dp[i][j+1]
            }
        }
    }

    return dp[0][0]

}

console.log(uniquePaths(3,7))