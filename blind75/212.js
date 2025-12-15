var findWords = function(board, words) {

    let M = board.length
    let N = board[0].length
    let matchedWords = new Set()
    let wordSet = new Set(words)


    function getAllPrefixes(words) {
        const prefixSet = new Set();
    
        for (const word of words) {
            // add all prefixes of this word
            for (let i = 1; i <= word.length; i++) {
                prefixSet.add(word.slice(0, i));
            }
        }
    
        return prefixSet;
    }

    
    function DFS(i, j, path, visited){

        if (wordSet.has(path)) {
            matchedWords.add(path)
        }

        let directions = [[1,0], [-1,0], [0,1], [0,-1]]

        for (let [r, c] of directions){
            let nr = r + i
            let nc = c + j

            if ((nr >=0 && nr < M) && (nc >=0 && nc < N) && !visited[nr][nc]){
                
                if(prefixes.has(path + board[nr][nc])){
                    visited[nr][nc] = true
                    DFS(nr, nc, path + board[nr][nc], visited)
                    visited[nr][nc] = false
                }
                
            }
        }

        return false
    }
    let prefixes = getAllPrefixes(words)

    for (let i = 0; i < M; i++){
        for (let j = 0; j < N; j++){
            let visited = Array.from({ length: M }, () => Array(N).fill(false))
            visited[i][j] = true
            DFS(i,j, ""+board[i][j], visited)
        }
    }

    return Array.from(matchedWords)
};
