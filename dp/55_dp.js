function canJump(nums){

    /*
     * D - Dimension - i 
     * B - Base case 
     *  dp[N-1] = T
     *  dp[N-2] = nums[N-2] > 0 ? T : F
     * 
     * R - dp(i) = nums[i] > 0 ? OR (dp[k] where 0<k<nums[i]) : F
     */

    let N = nums.length

    let dp = new Array(N).fill(false)

    dp[nums.length - 1] = true

    for (let i = N - 2; i >= 0; i--){
        for (let j = i + 1; j < i + 1 + nums[i]; j++){
            if(nums[i] > 0 && dp[j]){
                dp[i] = true
                break
            }
        }
    }

    return dp[0]

}

console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))

