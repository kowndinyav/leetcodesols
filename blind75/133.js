var cloneGraph = function(node) {

    // node.val, node.neighbors

    if (!node) return null;

    let queue = [node]
    let visited = new Map()
    visited.set(node, new _Node(node.val))
    
    while (queue.length > 0){

        // pop a node from queue
        let curr = queue.shift()

        for (let neighbor of curr.neighbors){

            if (!visited.has(neighbor)){
                // not visited
                visited.set(neighbor, new _Node(neighbor.val))
                queue.push(neighbor)
            }

            visited.get(curr).neighbors.push(visited.get(neighbor))
        }        
    }

    return visited.get(node)
};