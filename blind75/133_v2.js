var cloneGraph = function(node) {

    if (!node) return null;

    // push the first node
    let queue = []
    queue.push(node)

    let visited = new Set()
    let clonedRoot = null
    let nodeMap = new Map()


    while (queue.length > 0){

        let srcNode = queue.shift()
        visited.add(srcNode.val)

        let clonedNode = null
        if (!nodeMap.get(srcNode.val)){
            clonedNode = new Node(srcNode.val)
            nodeMap.set(srcNode.val, clonedNode)    
        }else{
            clonedNode = nodeMap.get(srcNode.val)
        }

        if(clonedRoot == null){
            clonedRoot = clonedNode
        }
        
        for (let n of srcNode.neighbors){
            
            if(!visited.has(n.val)){
                // if the node is not yet visisted, create the corresponding cloned node and add to visited list
                nodeMap.set(n.val, new Node(n.val))
                visited.add(n.val)  
                
                // only unvisited nodes, push to queue
                queue.push(n)
            }

            // update neighbors
            clonedNode.neighbors.push(nodeMap.get(n.val))            
        }
    }
    

    return clonedRoot

};