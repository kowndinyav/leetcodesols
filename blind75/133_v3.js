var cloneGraph = function(node) {

    if (!node) return null;

    // push the first node
    let queue = []
    queue.push(node)

    let visited = new Map()
    let clonedRoot = null

    while (queue.length > 0){

        let srcNode = queue.shift()
        
        let clonedNode = null

        if (!visited.has(srcNode.val)){
            clonedNode = new Node(srcNode.val)
            visited.set(srcNode.val, clonedNode) 
        }else{
            clonedNode = visited.get(srcNode.val)
        }

        if(clonedRoot == null){
            clonedRoot = clonedNode
        }
        
        for (let n of srcNode.neighbors){
            
            if(!visited.has(n.val)){
                // if the node is not yet visisted, create the corresponding cloned node and add to visited list
                visited.set(n.val, new Node(n.val)) 
                
                // only unvisited nodes, push to queue
                queue.push(n)
            }

            // update neighbors
            clonedNode.neighbors.push(visited.get(n.val))            
        }
    }
    

    return clonedRoot

};