var canPartition = function(nums) {
  
    let N = nums.length
    let sum = 0

    for (let i = 0;i<N;i++){
        sum += nums[i]
    } 

    if(sum%2 == 1){
        // if sum is odd, then partitioning into 2 equal halves is not possible
        return false
    }

    let targetSum = Math.floor(sum/2)


    function solve(index, sum, mem){

        
        if(sum == 0){
            // reached target sum
            return true
        }

        if (index == N || sum < 0){
            // reached end of the array and not target sum
            return false
        }

        if(mem[index][sum] != -1){
            return mem[index][sum]
        }


        mem[index][sum] = solve(index+1, sum, mem) || solve(index+1, sum-nums[index], mem)
        
        return mem[index][sum]
        
    }
    
    return solve(0, targetSum, Array.from({length: N}, () => new Array(targetSum + 1).fill(-1)))
    
};


console.log(canPartition([1,5,11,5]))