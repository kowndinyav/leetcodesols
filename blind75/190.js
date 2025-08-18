
var reverseBits = function(n) {
    

    // 32 bit - so there are 32 bits
    let result = 0
    let NUM_BITS = 32
    
   
    for (let i=0;i<NUM_BITS;i++){
        result = result | ((n & (1 << i)) >> i)
        result <<= 1
    }

    return result >> 1
}

console.log(reverseBits(12))

