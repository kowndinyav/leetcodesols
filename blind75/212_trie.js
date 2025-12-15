class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = new TrieNode();
            }
            node = node.children[ch];
        }
        node.isWord = true;
    }
}


var findWords = function(board, words) {

    let M = board.length
    let N = board[0].length
    let matchedWords = new Set()
    
    function DFS(i, j, path, visited, node){

        if (node.isWord) {
            matchedWords.add(path); // found valid word
        }

        let directions = [[1,0], [-1,0], [0,1], [0,-1]]

        for (let [r, c] of directions){
            let nr = r + i
            let nc = c + j

            if ((nr >=0 && nr < M) && (nc >=0 && nc < N) && !visited[nr][nc]){
                
                if(node.children[board[nr][nc]]){
                    visited[nr][nc] = true
                    DFS(nr, nc, path + board[nr][nc], visited, node.children[board[nr][nc]])
                    visited[nr][nc] = false 
                }
            }
        }
    }
    
    
    // Build Trie
    const trie = new Trie();
    for (let w of words) trie.insert(w);


    for (let i = 0; i < M; i++){
        for (let j = 0; j < N; j++){

            if (trie.root.children[board[i][j]]) {

                let visited = Array.from({ length: M }, () => Array(N).fill(false))
                visited[i][j] = true
                DFS(i,j, ""+board[i][j], visited, trie.root.children[board[i][j]])
            }
            
        }
    }

    return Array.from(matchedWords)
};
