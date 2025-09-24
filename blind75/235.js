var lowestCommonAncestor = function(root, p, q) {
  
    function findInTree(sr, node){

        if(sr == null){
            return false
        }

        if(sr.val == node.val){
            return true
        }

        return findInTree(sr.left, node) || findInTree(sr.right, node)
    }
    
    function solve(r, p1 , q1){

        if (r==null){
            return null
        }

        let pOnLeft = findInTree(r.left, p1)
        let qOnRight = findInTree(r.right, q1)
    
        if (pOnLeft && qOnRight){
            return root
        }

        if (pOnLeft && r.val == q1.val){
            return r
        }

        if (qOnRight && r.val == p1.val){
            return r
        }
    
        if (pOnLeft){
            return solve(r.left, p1, q1)
        }
        return solve(r.right, p1, q1)
        
    }

    return solve(root, p, q)
    
};

