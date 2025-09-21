var isValidBST = function(root) {
    

    if(root == null){
        // end
        return true
    }

    let valCheck = false
    
    if((root.left && root.left.val < root.val) && (root.right && root.right.val > root.val)){
        valCheck = true
    }

    let leftValid = true
    if(root.left){
        leftValid = isValidBST(root.left)    
    }
    
    let rightValid = true
    if(root.right){
        rightValid = isValidBST(root.right)
    }
    

    return valCheck && leftValid && rightValid;
    
};