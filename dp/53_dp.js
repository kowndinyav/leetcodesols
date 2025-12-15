var maxSubArray = function(a) {

    /*

    D - Dimension - i - max sum ending at i
    B - Base case - dp[0] = a[0]
    R - Recurrence Relationship
        dp (i) = max { a(i), dp(i-1) }

    */
    
    let dp = Array.from({length: a.length})
    dp[0] = a[0]

    for (let i = 1; i < a.length;i++){
        dp[i] = Math.max(a[i], dp[i-1])
    }

    return Math.max(...dp[i])

};
