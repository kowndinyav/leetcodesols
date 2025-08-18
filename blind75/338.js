var countBits = function(n) {
    
    let ret = []
    
    for (i=0;i<=n;i++){

        let c = 0

        let num = i
        while (num > 0){
            
            if(num & 1){
                c++
            }
            num >>>= 1
        }
        
        ret.push(c)
    }

    return ret

};

console.log(countBits(2))
