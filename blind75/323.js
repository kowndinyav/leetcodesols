
var countComponents = function(n, edges) {
    
    // collect all vertices
    // create an empty visted set
    // create an empty graph with nodes
    // update the graph with neighbours

    // TRAVERSE: pick any random vertex, start BFS and update visted
    // once the BFS is over, check the difference between visted and vertices
    // if there is some difference -> increase component count and again goto statement TRAVERSE

    let vertices = new Set([...Array(n).keys()])

    
    let graph = new Map()
    for (v of vertices){
        graph.set(v, [])
    }

    let visited = new Set()

    function BFS(startVertex){
        let queue = [startVertex]
        

        while (queue.length > 0){
    
            let v = queue.shift()
            visited.add(v)

            for (n of graph.get(v)){   
                if(!visited.has(n)){
                    visited.add(n)
                    queue.push(n)
                }
            }
    
        }
    }



    for ([v1, v2] of edges){
        graph.get(v1).push(v2)
        graph.get(v2).push(v1)
    }

    let componentCount = 0
    for (v of vertices){
        if (!visited.has(v)){
            BFS(v)        
            componentCount++
        }
    }

    return componentCount
    
};