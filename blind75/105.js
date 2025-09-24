var buildTree = function(preorder, inorder) {
  
    let results = []

    function solve(P, I){

        if (P.length == 0 || I.length == 0){
            return
        }

        results.push(P[0])

        let middle = I.indexOf(P[0])
        if(middle == 0){
            results.push(null)
            results.push(null)
        }

        let leftInOrder = I.slice(0, middle)
        let rightInOrder = I.slice(middle, I.length)

        let leftPreOrder = P.slice(1, 1 + leftInOrder.length)
        let rightPreOrder = P.slice(1 + leftInOrder.length)

        solve(leftPreOrder, leftInOrder)
        solve(rightPreOrder, rightInOrder)
    }

    solve(preorder, inorder)

    return results
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))