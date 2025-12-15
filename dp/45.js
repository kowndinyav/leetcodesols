var jump = function(nums) {

    /*
        D - Dimension - i - min jumps required from ith position
        
        B - Base Case
            dp[N-1] = 0
            dp[N-2] = dp[N-2]>0?1:0

        R - Recurrence relationship
            dp[i] = 1 + min (all dp(k) for 0<k<jumps[i])
    */


    let N = nums.length
    let dp = Array.from({length: N})

    dp[N-1] = 0
    dp[N-2] = nums[N-2] > 0 ? 1 : Number.MAX_SAFE_INTEGER
    
    for (let i = N-3;i>=0;i--){
        
        let temp = [] 
        for (let j = 1; j <= nums[i] && (i+j < N); j++){
            temp.push(dp[i+j])
        }

        dp[i] = 1 + Math.min(...temp)
    }

    return dp[0]
}

console.log(jump([2,3,1,1,4]))