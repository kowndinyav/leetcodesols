var numIslands = function(grid) {

    let M = grid.length
    let N = grid[0].length
    let visited = new Set()

    function getCellKey(i, j){
        return i + "_" + j
    }

    function BFS(i, j){

        let queue = []
        queue.push ([i,j])

        let directions = [[-1,0],[1,0],[0,-1],[0,1]]

        while (queue.length > 0){
            let cell = queue.shift()
            visited.add(getCellKey(cell[0], cell[1]))

            for ([dr, dc] of directions){                
                let nr = cell[0] + dr
                let nc = cell[1] + dc
    
                if (nr < M && nc < N && nr >=0 && nc >= 0 && (grid[nr][nc] == 1)){
                    if(!visited.has(getCellKey(nr, nc))){
                        queue.push([nr, nc]) 
                    }
                }
            }
        }

        
    }

    let island = 0

    for (let i = 0; i < M; i++){
        for (let j = 0; j < N; j++){

            if(!visited.has(getCellKey(i,j)) && grid[i][j] == 1){
                BFS(i, j)
                island++
            }

        }
    }
    
    return island
};


console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))