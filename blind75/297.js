/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {

    if(root == null){
        return null
    }

    let str = ""

    // BFS
    let queue = []
    queue.push({"node":root, "parent": null})

    while (queue.length > 0){
        let item = queue.shift()

        str = str + (item.parent == null? "NULL," : item.parent.val + ",")
        if(item.parent == null){
            str = str + item.node.val + ","
        }else{
            if (item.node == null) {
                str += (item.left ? "L_NULL," : "R_NULL,");
            } else {
                str += (item.left ? "L_" + item.node.val + "," : "R_" + item.node.val + ",");
            }
        }
        
        if(item.node){
            queue.push({"node":item.node.left, "parent": item.node, "left": true})
            queue.push({"node":item.node.right, "parent": item.node, "right": true})
        }
        
    }

    console.log(str.slice(0, str.length - 1))
    return str.slice(0, str.length - 1)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {

    if(data == null || data.length == 0){
        return null
    }
    
    let valNodeMap = new Map()

    let items = data.split(",")

    let root = null

    for (let i = 0; i < items.length; i+=2){
        
        if (items[i] == "NULL"){
            console.log(`${items[i+1]}    ROOT`)
            root = new TreeNode(parseInt(items[i+1]))
            valNodeMap.set(items[i+1], root)
        }else{
            let parentNode = valNodeMap.get(items[i])

            console.log(`${items[i+1].slice(2)}    ${valNodeMap.get(items[i]).val}`)

            if(items[i+1] == "L_NULL"){
                parentNode.left = null
            }else if(items[i+1] == "R_NULL"){
                parentNode.right = null
            }else if(items[i+1].indexOf("L_") == 0){
                parentNode.left = new TreeNode(parseInt(items[i+1].slice(2)))
                valNodeMap.set(items[i+1].slice(2), parentNode.left)
            }else if(items[i+1].indexOf("R_") == 0){
                parentNode.right = new TreeNode(parseInt(items[i+1].slice(2)))
                valNodeMap.set(items[i+1].slice(2), parentNode.right)
            }
        }
    }

    return root

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */