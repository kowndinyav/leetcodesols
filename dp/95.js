

var generateTrees = function(n) {

    let insertOrders = []
    
    
    function generateInsertCombs(path){
        if (path.length == n){
            insertOrders.push([...path])
            return
        }
        for (let i = 1; i <= n; i++){
            if (!path.includes(i)){
                path.push(i)
                generateInsertCombs(path)
                path.pop()
            }
        }
    }

    function insert(node, val){

        if (node.val > val){

            if(node.left){
                insert(node.left, val)
            }else{
                node.left = new TreeNode(val)
            }
            
        }else if (node.val < val){

            if(node.right){
                insert(node.right, val)
            }else{
                node.right = new TreeNode(val)
            }
            
        }
    }

    function createBST(a){

        let mid = (n%2 == 1)? Math.floor(n/2)+1 : -1
        if (a[0] == mid && midProcessedOnce){
            console.log("NOT midProcessedOnce")
            return null
        }

        if (a[0] == mid){
            console.log("midProcessedOnce")
            midProcessedOnce = true
        }

        let root = new TreeNode(a[0])
        for (let i = 1;i < a.length; i++){
            insert(root, a[i])
        }
        return root
    }

    

    generateInsertCombs([])
    console.log(insertOrders)

    let res = []

    let midProcessedOnce = false
    for (let i = 0; i < insertOrders.length; i++){
        let nn = createBST(insertOrders[i])
        
        if(nn){
            res.push(nn)
        }
        
    }

    return res
};



