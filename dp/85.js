var maximalRectangle = function(matrix) {
    

    let dp = Array.from({length:matrix.length}, () => new Array(matrix[0].length).fill(0))

    let dp_vertical = Array.from({length:matrix.length}, () => new Array(matrix[0].length).fill(0))
    let dp_horizontal = Array.from({length:matrix.length}, () => new Array(matrix[0].length).fill(0))
    let dp_rectangle = Array.from({length:matrix.length}, () => new Array(matrix[0].length).fill(0))

    // vertical dp
    // Base case:
    //      d[i][j] = 1 if matrix[i][j] == 1
    // Recurrence Relationship 
    //      if dp[i][j] == 1 -> d[i][j] = 1 + dp[i-1][j]

    // horizontal dp
    // Base case:
    //      d[i][j] = 1 if matrix[i][j] == 1
    // Recurrence Relationship 
    //      if dp[i][j] == 1 -> d[i][j] = 1 + dp[i][j-1]

    // rectangular dp
    // Base case:
    //      d[i][j] = 1 if matrix[i][j] == 1
    // Recurrence Relationship 
    //      if dp[i][j] == 1 && dp[i-1][j] == 1 && dp[i][j-1]==1 && dp[i-1][j-1] -> d[i][j] = 3 + dp[i-1][j-1]


};

console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))