
var rotate = function(matrix) {

    let N = matrix.length
    
    // transpose
    for(let i = 0; i < N; i++){
        for(let j = i+1; j < N; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    // reverse rows
    for (let i = 0; i < N; i++) {
        matrix[i].reverse();
    }

    console.log(matrix)
};


rotate([[1,2,3],[4,5,6],[7,8,9]])
rotate([[1,2,3,4],[5,6,7,8],[9,10,11,12], [13,14,15,16]])
