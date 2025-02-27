function canJump(nums){
    let mem = {}
    let TARGET = nums.length - 1

    function solve(fromIndex){

        if(fromIndex >= TARGET){
            return true
        }

        if(mem[fromIndex] !== undefined){
            return mem[fromIndex]
        }

        let ret = false

        for (let jump=nums[fromIndex];jump>=1;jump--){

            //take a jump and see if we are reaching to target index. If yes, we don't have to explore other jumps
            ret = ret || solve (fromIndex + jump)
            if(ret){
                break
            }
        }

        // remember that target index can be reached from the current index
        mem[fromIndex] = ret

        return ret
    }

    return solve(0)
}

console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))