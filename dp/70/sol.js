function climbStairs(n){

    let mem = {}

    function solve(n){

        if (n == 0) return 1
        if (n < 0) return 0
        if (mem[n] !== undefined) return mem[n]

        mem[n] = solve(n-1) + solve(n-2)
        return mem[n]

    }

    return solve(n)
}

console.log(climbStairs(5))