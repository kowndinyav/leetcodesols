function maxArea(height){

    let l = 0
    let r = height.length - 1

    let maxArea = 0
    while (l < r){

        let area = Math.min(height[l], height[r]) * (r - l)
        maxArea = Math.max(maxArea, area)

        if(height[l] < height[r]){
            l++
        }else{
            r--
        }


    }

    return maxArea

}


console.log(maxArea([1,8,6,2,5,4,8,3,7]))