/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let freqMap = new Map()
    for (let i=0;i<nums.length;i++){

        if(!freqMap.has(nums[i])){
            freqMap.set(nums[i], 0)
        }

        freqMap.set(nums[i], freqMap.get(nums[i]) + 1)
    }

    let counts = Array.from(new Set(Array.from(freqMap.values())))
    counts.sort ((a,b) => b-a)


    let reverseFreqMap = new Map()
    for (let [k,v] of freqMap){

        if(!reverseFreqMap.has(v)){
            reverseFreqMap.set(v, [])    
        }

        let a = reverseFreqMap.get(v)
        a.push(k)
        reverseFreqMap.set(v, a)
    }

    let res = []
    let c = 0
    for (let i = 0; i < k; i++){

        let kList = reverseFreqMap.get(counts[i])

        for (let j=0;j<kList.length;j++){
            res.push(kList[j])
            c++

            if(c == k){
                i = k
                break
            }
        }
    }

    return res

};

console.log(topKFrequent([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6], 10))