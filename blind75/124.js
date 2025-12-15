var maxPathSum = function(root) {
  
    let graph = new Set()

    function tree2Graph(vertex, node, level){
    
        graph.add(vertex)

        if(node.left){
            let l = {"id": `${level}:L`, "val":node.left.val, "neighbours": []}
            vertex.neighbours.push(l)
            l.neighbours.push(vertex)
            tree2Graph (l, node.left, level + 1)
        }

        if(node.right){
            let r = {"id": `${level}:R`, "val":node.right.val, "neighbours": []}
            vertex.neighbours.push(r)
            r.neighbours.push(vertex)
            tree2Graph (r, node.right, level + 1)
        }
    }


    let n = {"id": `0:ROOT`, "val":root.val, "neighbours": []}
    tree2Graph(n, root, 1)

    let maxPathSum = -9999999999
    
    function DFS(fromV, pathSum, visited){

        visited.add(fromV)
        pathSum += fromV.val

        maxPathSum = Math.max(pathSum, maxPathSum)

        for (let vv of fromV.neighbours){
            if(!visited.has(vv)){
                DFS(vv, pathSum, visited)
            }
        }
    }

    for (v of graph){
        DFS(v, 0, new Set())
    }

    return maxPathSum;
};