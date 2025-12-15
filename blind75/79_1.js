var exist = function(board, word) {
    let M = board.length
    let N = board[0].length
    let directions = [[-1,0],[1,0],[0,-1],[0,1]]
    let ret = false

    function CELL_KEY(i, j) {
        return `${i}_${j}`;
    }

    function DFS(i, j, I, visited){

        if(I == word.length){
            return true
        }

        if (i < 0 || j < 0 || i >= M || j >= N || board[i][j] !== word[I]) {
            return false;
        }

        let key = CELL_KEY(i, j)
        if (visited.has(key)){
            return false;
        } 

        visited.add(key);

        for ([dr, dc] of directions){
            let nr = i + dr
            let nc = j + dc
            if(DFS(nr, nc, I + 1, visited)){
                return true
            }
        }   

        visited.delete(key)
        return false
    }

    for (let i = 0; i < M;i++){
        for (let j = 0; j < N;j++){
            if (board[i][j] === word[0] && DFS(i, j, 0, new Set())){
                ret = true
                break
            }
        }
    }

    return ret
};