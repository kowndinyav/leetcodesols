var cloneGraph = function(node) {

    if (!node) return null;

    // push the first node
    let queue = []
    queue.push(node)

    let visited = new Set()
    let clonedRoot = null
    let nodeMap = new Map()

    // Pass 1: create the nodes only - no adjacency list 

    while (queue.length > 0){

        let xx = queue.shift()
        visited.add(xx.val)

        let clonedNode = new Node(xx.val)
        if(clonedRoot == null){
            clonedRoot = clonedNode
        }

        nodeMap.set(xx.val, clonedNode)

        for (let n of xx.neighbors){
            if(!visited.has(n.val)){
                queue.push(n)
                visited.add(n.val)
            }
        }
    }


    // Pass 3: Update neighbours
    queue.push(node)
    visited = new Set()
    while (queue.length > 0){

        let xx = queue.shift()
        let clonedNode = nodeMap.get(xx.val)
        visited.add(xx.val)
        
        for (let n of xx.neighbors){
            clonedNode.neighbors.push(nodeMap.get(n.val))

            if(!visited.has(n.val)){
                queue.push(n)
                visited.add(n.val)
            }
        }
    }

    return clonedRoot

};