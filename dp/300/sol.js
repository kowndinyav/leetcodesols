function longestSubSeq(nums){

    let mem = {}

    function solve(index){

        if (index == nums.length - 1) {
            console.log(`basecase:1 index=${index} ret=1`)
            mem[index] = 1
            return 1
        }
        if (mem[index] !== undefined) {
            console.log(`memoization index=${index} ret=${mem[index]}`)
            return mem[index]
        }

        let maxLen = 1
        for (let i = index+1; i < nums.length; i++){
            if(nums[index] < nums[i]){
                maxLen = Math.max(maxLen, 1 + solve(i))
            }
        }

        console.log(`index=${index} maxLen=${maxLen}`)
        mem[index] = maxLen
        return maxLen

    }

    let maxLen = 0
    for (let i = 0;i < nums.length;i ++){
        maxLen = Math.max(maxLen, solve(i))
    }

    return maxLen

}

console.log(longestSubSeq([10,9,2,5,3,7,101,18]))