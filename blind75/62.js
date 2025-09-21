var uniquePaths = function(m, n) {

    let mem = {}
    
    function solve(i, j){

        let key = i + "_" + j

        if (i == m-1 && j == n-1){
            return 0
        }

        let downPaths = 0
        if (i+1 < m){
            downPaths = 1 + solve(i+1, j)
        }

        let rightPaths = 0
        if(j+1 < n){
            rightPaths = 1 + solve(i, j+1)
        }

        mem[key] = downPaths + rightPaths
    }

    return solve(0, 0)    
};