var numDecodings = function(s) {

    let mem = {}
  
    function solve(remaining){

        if (remaining.indexOf("0") == 0){
            return 0
        }

        if(remaining.length == 0 || remaining.length == 1){
            return 1
        }

        if(mem[remaining] !== undefined){
            return mem[remaining]
        }

        let i = parseInt(remaining.slice(0,1))
        let c1 = 0
        if(i <= 26){
            c1 = solve(remaining.slice(1, remaining.length))
        }

        i = parseInt(parseInt(remaining.slice(0,2)))
        let c2 = 0
        if(i <= 26){
            c2 = solve(remaining.slice(2, remaining.length))
        }

        mem[remaining] =  c1 + c2
        return mem[remaining]

    }
    
    return solve(s)
};

console.log(numDecodings("11106"))
console.log(numDecodings("12"))
console.log(numDecodings("226"))
console.log(numDecodings("06"))
console.log(numDecodings("27"))