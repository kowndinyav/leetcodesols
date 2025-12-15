var calculateMinimumHP = function(dungeon) {
    let M = dungeon.length
    let N = dungeon[0].length
    let directions = [[1,0], [0,1]]
    let results = []

    function DFS(i, j, minHealthPoints, totalHealth, path){

        if(i == M - 1 && j == N - 1){

            if (dungeon[M-1][N-1] < 0){
                results.push([minHealthPoints - dungeon[M-1][N-1], totalHealth, path])
            }else{
                results.push([minHealthPoints, totalHealth, path])
            }
            
            return
        }

        for (let [r, c] of directions){
            let nr = i + r
            let nc = c + j

            if (nr < M && nc < N){
                
                if(minHealthPoints + dungeon[nr][nc] < 0){
                    minHealthPoints += dungeon[nr][nc]
                }

                totalHealth += dungeon[nr][nc]

                path += `-> (${nr}, ${nc})`
                
                DFS(nr, nc, minHealthPoints, totalHealth, path)

                path -= `-> (${nr}, ${nc})`
                
                if(minHealthPoints + dungeon[nr][nc] < 0){
                    minHealthPoints -= dungeon[nr][nc]
                }

                totalHealth -= dungeon[nr][nc]
            }
        }
    }   
    
    DFS(0,0, dungeon[0][0], dungeon[0][0], "(0,0)")

    let res = []
    for (let i = 0; i < results.length; i++){

        let [min, total] = results[i]

        if (dungeon[M-1][N-1] < 0){
            //if(total > Math.abs(dungeon[M-1][N-1])){
            if(total > 0){
                if(min < 0){
                    res.push(Math.abs(min) + 1)
                }else{
                    res.push(1)
                }
            }else{
                res.push(Math.abs(total) + 1)
            }
        }else{
            if(min < 0){
                res.push(Math.abs(min) + 1)
            }else{
                res.push(1)
            }
        }
    }

    return Math.min(...res)
};

// console.log(calculateMinimumHP([[-2,-3,3],[-5,-10,1],[10,30,-5]]))
// console.log(calculateMinimumHP([[0]]))
// console.log(calculateMinimumHP([[2,1],[1,-1]]))
// console.log(calculateMinimumHP([[0,5],[-2,-3]]))

// console.log(calculateMinimumHP([[1,2,1],[-2,-3,-3],[3,2,-2]]))

console.log(calculateMinimumHP([[1,-2,3],[2,-2,-2]]));

