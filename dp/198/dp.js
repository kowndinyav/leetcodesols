function robHouses(nums){

    let mem = {}

    function solve(n){

        if(n > nums.length - 1){
            return 0
        }
        if(n == nums.length - 1){
            mem [n] = nums[nums.length-1]
            return mem[n]
        }
        if(n == nums.length - 2){
            mem [n] = Math.max(nums[nums.length-1], nums[nums.length-2])
            return mem[n]
        }

        if (mem[n] !== undefined) return mem[n]
        
        mem[n] = Math.max(nums[n] + solve(n + 2), solve(n+1))
        return mem[n]
    }

    return solve(0)
}


console.log(robHouses([1,2,3,1]))
console.log(robHouses([1,3,1,3,100]))
console.log(robHouses([2,7,9,3,1]))