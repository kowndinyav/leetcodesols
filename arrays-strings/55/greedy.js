function canJump(nums){
    
    let targetIndex = nums.length - 1

    for(let i = nums.length-2;i>=0;i--){

        if(i + nums[i] >= targetIndex){
            targetIndex = i
        }
    }

    return targetIndex == 0?true:false

}

console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))