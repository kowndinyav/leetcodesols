var nthUglyNumber = function(n) {

    let dp = new Array(n)

    dp[0] = 1
    dp[1] = 2
    dp[2] = 3
    dp[3] = 4
    dp[4] = 5

    let count = 0
    for (let i = 5; i < n;i++){
        if (count == 0){
            dp[i] = dp[i-4] * dp[i-3] 
            count++
        }else if (count == 1){
            dp[i] = dp[i-5] * dp[i-3] 
            count++
        }
        else if (count == 2){
            dp[i] = dp[i-5] * dp[i-5]
            count = 0
        }
    }

    return dp[n-1]
};

// console.log(nthUglyNumber(6))
// console.log(nthUglyNumber(7))
// console.log(nthUglyNumber(8))
console.log(nthUglyNumber(9))