
var MedianFinder = function() {
    this.freqMap = new Map()
    this.count = 0

};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.count++
    if(!this.freqMap.has(num)){
        this.freqMap.set(num, 0)
    }

    this.freqMap.set(num, this.freqMap.get(num) + 1)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
    let keys = Array.from(this.freqMap.keys());
    keys.sort((a, b) => a - b);

    let medianIndex = this.count / 2
    // console.log(`medianIndex = ${medianIndex}`)
    
    let sum = 0
    for (let i = 0; i < keys.length; i++){

        sum += this.freqMap.get(keys[i])

        // console.log(`medianIndex = ${medianIndex} sum=${sum}`)

        if(sum >= medianIndex){

            if(this.count % 2 == 1){
                // console.log(`medianIndex = ${medianIndex} sum=${sum} odd`)
                return keys[i]
            }else{
                // console.log(`medianIndex = ${medianIndex} sum=${sum} even`)
                if(sum == medianIndex){
                    // console.log(`medianIndex = ${medianIndex} sum=${sum} even - 1`)
                    return (keys[i] + (keys[i+1]))/2
                }else{
                    // console.log(`medianIndex = ${medianIndex} sum=${sum} even - 2`)
                    return keys[i]
                }
            }
            
        }
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */