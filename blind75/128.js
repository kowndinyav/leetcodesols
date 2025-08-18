
var longestConsecutive = function(nums) {

    let hashset = new Set(nums)

    let longestSeqLength = 0

    for (let num of hashset){

        if(!hashset.has(num - 1)){ // searching for number less than current number (looking for sneak's head)
            // means we found snake's head

            // now follow till tail
            
            let seqLength = 1 // account for head
            while (hashset.has(num + 1)){
                seqLength++
                num++
            }

            longestSeqLength = Math.max(seqLength, longestSeqLength)
        }

    }
    return longestSeqLength;    
}

console.log(longestConsecutive([100,4,200,1,3,2]))