function minJumps(nums){

    let dp = new Array(nums.length).fill(Number.MAX_VALUE)

    dp [nums.length - 1] = 0

    for(let i = nums.length - 2; i>=0;i--){

        for (let j = 1;j <= nums[i]; j++){

            if(i+j == nums.length - 1){
                dp[i] = 1
            }else if (i+j < nums.length - 1){
                dp[i] = Math.min(dp[i], 1 + dp[i+j])
            }
        }
    }

    return dp[0]

}

console.log(minJumps([2,3,1,1,4]))