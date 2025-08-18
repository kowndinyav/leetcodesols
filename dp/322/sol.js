function coinChange(nums, T){

    let mem = {}

    function solve(T){

        if (T == 0) return 0
        if (T <= 0) return Number.MAX_VALUE
        if (mem[T] !== undefined) return mem[T]


        let minCoins = Number.MAX_VALUE;
        
        for(let i = 0; i < nums.length; i++){
            minCoins = Math.min(1 + solve(T - nums[i]), minCoins)
        }

        mem[T] = minCoins

        return minCoins

    }

    let val = solve(T)
    return val == Number.MAX_VALUE? - 1: val
}


console.log(coinChange([357,239,73,52], 9832))
console.log(coinChange([2], 3))
console.log(coinChange([1], 0))
console.log(coinChange([1,2,5], 11))
console.log(coinChange([1,2,5,3,4,7], 7))
console.log(coinChange([1,2,5,3], 7))