var exist = function(board, word) {
    let M = board.length
    let N = board[0].length
    let directions = [[-1,0],[1,0],[0,-1],[0,1]]
    let ret = false
    let visited = new Set()

    function CELL_KEY(i, j) {
        return `${i}_${j}`;
    }

    function DFS(i, j, I){

        if(I == word.length){
            return true
        }

        if (i < 0 || j < 0 || i >= M || j >= N || board[i][j] !== word[I] || visited.has(CELL_KEY(i, j))) {
            return false;
        }

        visited.add(CELL_KEY(i, j));

        for ([dr, dc] of directions){
            let nr = i + dr
            let nc = j + dc
            if(DFS(nr, nc, I + 1)){
                return true
            }
        }   

        return false
    }

    for (let i = 0; i < M;i++){
        for (let j = 0; j < N;j++){
            if (DFS(i, j, 0)){
                ret = true
                break
            }
        }
    }

    return ret
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"))