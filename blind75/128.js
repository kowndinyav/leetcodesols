
var longestConsecutive = function(nums) {

    let hashset = new Set(nums)
    let max = 0

    let visited = new Set()

    for (let num of hashset){

        // check the current num is the smallest
        if (!hashset.has(num - 1) && !visited.has(num)){

            let count = 1
            while (hashset.has(num+1)){
                visited.add(num + 1)
                count++
                num++
            }

            max = Math.max(count, max)
        }
    }

    return max
}

console.log(longestConsecutive([100,4,200,1,3,2]))