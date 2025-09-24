
var serialize = function(root) {
    if (!root) return null;

    let str = "";
    let queue = [{ node: root, parent: null }];

    while (queue.length > 0) {
        let item = queue.shift();

        // Parent value
        str += (item.parent == null ? "NULL," : item.parent.val + ",");

        // Child value
        if (item.parent == null) {
            str += item.node.val + ",";
        } else {
            if (!item.node) {
                str += (item.left ? "L_NULL," : "R_NULL,");
            } else {
                str += (item.left ? "L_" + item.node.val + "," : "R_" + item.node.val + ",");
            }
        }

        // Add children to queue
        if (item.node) {
            queue.push({ node: item.node.left, parent: item.node, left: true });
            queue.push({ node: item.node.right, parent: item.node, right: true });
        }
    }

    console.log(`${str.slice(0, -1)}`)

    return str.slice(0, -1); // remove last comma
};

/**
 * Decodes your encoded data to tree
 * BFS approach with parent queue (no Map)
 */
var deserialize = function(data) {
    if (!data || data.length === 0) return null;

    let items = data.split(",");
    let root = null;
    let queue = []; // BFS parent queue
    let parentNode = null

    for (let i = 0; i < items.length; i += 2) {

        let parentVal = items[i];
        let childInfo = items[i + 1];

        console.log(`parentVal:${parentVal} childInfo:${childInfo}`)

        if (parentVal === "NULL") {
            // root node
            root = new TreeNode(parseInt(childInfo));
            // queue.push(root);
            parentNode = root
        } else {
            // parent from front of queue
            // parentNode = queue.shift();

            if (childInfo === "L_NULL") {
                parentNode.left = null;
            } else if (childInfo === "R_NULL") {
                parentNode.right = null;
            } else if (childInfo.startsWith("L_")) {
                let val = parseInt(childInfo.slice(2));
                parentNode.left = new TreeNode(val);
                queue.push(parentNode.left);
            } else if (childInfo.startsWith("R_")) {
                let val = parseInt(childInfo.slice(2));
                parentNode.right = new TreeNode(val);
                queue.push(parentNode.right);
                parentNode = queue.shift();
            }
        }
    }

    return root;
};

/**
 * Usage:
 * deserialize(serialize(root));
 */