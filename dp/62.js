var uniquePaths = function(m, n) {

    let mem = {}

    function solve(i, j) {

        let key = i + "," + j;

        // Base case: reached bottom-right
        if (i === m - 1 && j === n - 1) {
            return 1;
        }

        if (mem[key] !== undefined){
            return mem[key]
        }

        // Out of bounds
        if (i >= m || j >= n) {
            return 0;
        }

        // Move down + move right
        mem[key] = solve(i + 1, j) + solve(i, j + 1);
        return mem[key]
    }

    return solve(0, 0);
};