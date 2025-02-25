


function coinChange (c, T){

    let mem = {}

    function solve (T){

        if(T == 0){
            return 0
        }
    
        if(T < 0){
            return Number.MAX_VALUE
        }
    
        if (mem[T] != undefined){
            return mem[T]
        }    
        
        let minCoins = Number.MAX_VALUE;
        for (let i = 0 ; i < c.length; i++){
            let result = solve(T - c[i])
            if (result !== Number.MAX_VALUE) {
                minCoins = Math.min(minCoins, 1 + result);
            }
        }

        mem[T] = minCoins
                
        return mem[T]
    }

    let ret = solve(T)
    return  ret == Number.MAX_VALUE?-1:ret;
}

// console.log(Number.MAX_VALUE)
console.log(coinChange([357,239,73,52], 9832))
// console.log(coinChange([2], 3))
// console.log(coinChange([1], 0))
console.log(coinChange([1,2,5], 11))
// console.log(coinChange([1,2,5,3,4,7], 7))
// console.log(coinChange([1,2,5,3], 7))