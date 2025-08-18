function minimumTotal(nums){

    let mem = new Array(nums.length)
    for (let i=0;i<nums.length;i++){
        mem[i] = new Array(nums.length)
    }

    function solve(row, i){

        if(row == nums.length - 1){
            mem[row][i] = nums[row][i]
            return mem[row][i]
        }

        // if(mem[row] !== undefined && mem[row][i] !== undefined) return mem[row][i]

        let minTotal = Number.MAX_VALUE
        for (let i = 0;i < nums[row].length; i++){
            minTotal = Math.min(minTotal, nums[row][i] + solve(row + 1, i), nums[row][i] + solve(row + 1, i+1))
        }

        mem[row][i] = minTotal
        return minTotal
    }

    return solve(0, 0)

}


console.log(minimumTotal([[1],[-2,-5],[3,6,9],[-1,2,4,-3]]))

// console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
// console.log(minimumTotal([[-10]]))

