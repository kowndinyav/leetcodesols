var setZeroes = function(matrix) {
    let M = matrix.length;
    let N = matrix[0].length;

    let firstRowZero = false;
    let firstColZero = false;

    // Check if first row needs zero
    for (let c = 0; c < N; c++) {
        if (matrix[0][c] === 0) {
            firstRowZero = true;
            break;
        }
    }

    // Check if first col needs zero
    for (let r = 0; r < M; r++) {
        if (matrix[r][0] === 0) {
            firstColZero = true;
            break;
        }
    }

    // Use first row/col as markers
    for (let r = 1; r < M; r++) {
        for (let c = 1; c < N; c++) {
            if (matrix[r][c] === 0) {
                matrix[r][0] = 0;
                matrix[0][c] = 0;
            }
        }
    }

    // Zero cells based on markers
    for (let r = 1; r < M; r++) {
        for (let c = 1; c < N; c++) {
            if (matrix[r][0] == 0) {
                matrix[r][c] = 0;
            }
        }
    }

    // Zero first row if needed
    if (firstRowZero) {
        for (let c = 0; c < N; c++) {
            matrix[0][c] = 0;
        }
    }

    // Zero first col if needed
    if (firstColZero) {
        for (let r = 0; r < M; r++) {
            matrix[r][0] = 0;
        }
    }

    return matrix;
};