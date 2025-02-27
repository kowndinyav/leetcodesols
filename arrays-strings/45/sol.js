function minJumps (nums){

    let mem = {}
    let TARGET = nums.length - 1

    function solve(fromIndex){
        
        if (fromIndex == TARGET){
            return 0
        }

        if(nums[fromIndex] == 0){
            return Number.MAX_VALUE
        }

        if(mem[fromIndex] !== undefined){
            return mem[fromIndex]
        }


        let min = Number.MAX_VALUE
        for(let jump = 1;jump <= nums[fromIndex]; jump++){

            if(fromIndex + jump <= TARGET){
                let jumps = 1 + solve(fromIndex + jump)
                min = Math.min(min, jumps)    
            }
        }

        mem[fromIndex] = min
        return min
    }

    return solve(0)

}



console.log(minJumps([2,3,1,1,4]))
// console.log(minJumps([3,2,1,0,4]))
console.log(minJumps([2,3,0,1,4]))