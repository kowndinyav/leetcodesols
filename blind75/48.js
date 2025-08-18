var rotate = function(matrix) {

    let N = matrix.length
    let L = 0
    let R = N - 1 // num columns
    let T = 0
    let B = N - 1 // num rows

    let itrCount = N

    let TEMP = matrix[0][0]

    while ( L < R){

        for (let itr = 0; itr < itrCount - 1; itr++){

            TEMP = matrix[L][T]

            // From (L+1 -> R) [T][]
            for (let i = L + 1; i <= R; i++){
                [matrix[T][i], TEMP] = [TEMP, matrix[T][i]]
            }

            // From (T+1 -> B) [][R]
            for (let i = T + 1; i <= B; i++){
                [matrix[i][R], TEMP] = [TEMP, matrix[i][R]]
            }

            // From (R-1 -> L) [B][]
            for (let i = R - 1; i >= L; i--){
                [matrix[B][i], TEMP] = [TEMP, matrix[B][i]]
            }

            // From (B-1 -> T) [][L]
            for (let i = B - 1; i >= T; i--){
                [matrix[i][L], TEMP] = [TEMP, matrix[i][L]]
            }
        }

        matrix[L][T + 1] = TEMP

        N = N - 2
        itrCount = N
    
        T++; L++; B--; R--
    }
    console.log(matrix)

};


rotate([[1,2,3],[4,5,6],[7,8,9]])
rotate([[1,2,3,4],[5,6,7,8],[9,10,11,12], [13,14,15,16]])
