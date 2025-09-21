var spiralOrder = function(matrix) {

    let LEFT = 0
    let TOP = 0
    let RIGHT = matrix[0].length - 1
    let BOTTOM = matrix.length - 1    
    let res = []
    let count = matrix.length * (matrix[0].length)

    while (res.length < count){

        r = TOP
        for (let c=LEFT; c <= RIGHT; c++){
            res.push(matrix[r][c])
        }
    
        c = RIGHT
        for (let r=TOP+1; r <= BOTTOM; r++){
            res.push(matrix[r][c])
        }
    
        if(BOTTOM != TOP){
            r = BOTTOM
            for (let c=RIGHT-1; c >= LEFT; c--){
                res.push(matrix[r][c])
            }
        }
    
        if(LEFT != RIGHT){
            c = LEFT
            for (let r=BOTTOM-1; r > TOP; r--){
                res.push(matrix[r][c])
            }
        }
        

        LEFT++
        TOP++
        RIGHT--
        BOTTOM--
    }

    return res
 
  };

  console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
  console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))