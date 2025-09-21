
var pacificAtlantic = function(heights) {

    let dirs = [[1,0],[-1,0],[0,1],[0,-1]]
    let ROWS = heights.length
    let COLS = heights[0].length

    let pacific = Array.from ({length: ROWS}, () => Array(COLS).fill(false))
    let atlantic = Array.from ({length: ROWS}, () => Array(COLS).fill(false))
    
    function dfs(r, c, visited){

        visited[r][c] = true

        for (let [dr, dc] of dirs){
            let nr = r + dr
            let nc = c + dc

            if(
                (nr >= 0 && nr < ROWS)                  // boundary check for row
                && (nc >= 0 && nc < COLS)               // boundary check for colums
                && (heights[nr][nc] >= heights[r][c])   // if the current cell has higher height
                && !visited[nr][nc]                     // not already visited
            ){
                dfs(nr, nc, visited)
            }
        }

    }

    // Pacific (top row, left col)
    for (let c = 0; c < COLS; c++) dfs(0, c, pacific);
    for (let r = 0; r < ROWS; r++) dfs(r, 0, pacific);

    // Atlantic (bottom row, right col)
    for (let c = 0; c < COLS; c++) dfs(ROWS-1, c, atlantic);
    for (let r = 0; r < ROWS; r++) dfs(r, COLS-1, atlantic);

    let ret = []
    for (let r=0;r<ROWS;r++){
        for(let c=0;c<COLS;c++){
            if(pacific[r][c] && atlantic[r][c]){
                ret.push([r,c])
            }
        }
    }

    return ret

};

console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]))

// console.log(pacificAtlantic([[1,2,3],[8,9,4],[7,6,5]]))