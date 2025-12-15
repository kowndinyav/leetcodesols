var maxSubArray = function(a) {

    let sum = a[0]
    let max = a[0]

    for(let i=1;i<a.length;i++){
        
        if(sum < 0){
            sum = 0
        }

        sum += a[i]
        
        if(sum > max){
            max = sum
        }
        
    }
    
    return max
};
