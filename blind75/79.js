var exist = function(board, word) {
    
    let M = board.length
    let N = board[0].length
    let directions = [[-1,0],[1,0],[0,-1],[0,1]]
    let ret = false
    let visited = Array.from({length:M}, () => new Array(N).fill(false))

    function DFS(i, j, path, pathLength){

        if(pathLength > word.length){
            return false
        }

        if(path == word){
            return true
        }
        
        visited[i][j] = true

        for (let [dr, dc] of directions){
            let nr = i + dr
            let nc = j + dc

            if (nr >= 0 && nc >= 0 && nr < M && j < N && !visited[nr][nc]) {
                if(DFS(nr, nc, path + board[nr][nc], pathLength + 1)){
                    return true
                }
            }
        }   
        
        visited[i][j] = false

        return false

    }

    for (let i = 0; i < M;i++){
        for (let j = 0; j < N;j++){
            if (board[i][j] === word[0] && DFS(i, j, "" + word[0], 1)){
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