var canFinish = function(n, edges) {

    if (edges.length == 0){
        return true
    }

    let graph = new Map()

    let indegree = new Map()
    for (let i = 0; i < n; i++) {
        indegree.set(i, 0);
    }

    for ([a,b] of edges){
        if(graph.get(b) == undefined){
            graph.set(b, new Set())
        }
        graph.get(b).add(a)
        
        indegree.set(a, indegree.get(a) + 1)
    }

    
    let queue = []

    // pick a node with indegree 0
    for (let [key, val] of indegree) {
        if (val == 0) {
            queue.push(key);
        }
    }

    let visited = new Set()
    let count = 0

    while (queue.length > 0){
        let node = queue.shift()
        visited.add(node)
        count++

        let neighbors = graph.get(node)

        if(neighbors !== undefined){
            for (nn of neighbors){

                indegree.set(nn, indegree.get(nn) - 1)
                
                if (indegree.get(nn) == 0 && !visited.has(nn)){
                    queue.push(nn)
                }
            }
        }
    }


    return count == n
};
console.log(canFinish(2, [[1,0]]))
console.log(canFinish(2, [[1,0],[0,1]]))
console.log(canFinish(5, [[1,4],[2,4],[3,1],[3,2]]))