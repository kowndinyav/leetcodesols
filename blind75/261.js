var validTree = function(n, edges) {
    
    if (edges.length != n - 1){

        // if e < n-1, it will be a graph with multiple disconnected roots
        // if e > n-1, then graph is strongly connected with loops
        return false
    }

    let graph = new Map()

    // in the leetcode problem, node are always 0 - n-1. Not any random numbers. so below code works
    for (let i = 0;i<n;i++){
        graph.set(i, new Set())
    }

    for ([a,b] of edges){
        graph.get(a).add(b)
        graph.get(b).add(a)
    }

    let queue = [0]
    let visited = new Set()

    while (queue.length > 0){

        let node = queue.shift()

        if (visited.has(node)) {
            continue
        }

        visited.add(node)

        for (neighbor of graph.get(node)){
            if(!visited.has(neighbor)){
                queue.push(neighbor)
            }
        }

    }
    return visited.size == n

};
