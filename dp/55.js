function solve(a, i, t, mem){

    let ret = false

    if(a[i] == 0){
        ret = false
    }else if(mem[i] !== undefined){
        ret = mem[i]
    }else if(a[i] >= t){
        ret = true
    }else{
        for (let j=a[i];j>=1;j--){

            if(j < t){
                ret = ret || solve (a, i+j, t-j, mem)
                if(ret){
                    break
                }
            }
            
        }
    }

    mem[i] = ret

    return ret

}

function canJump(nums){
    let targetIndex = nums.length - 1

    for(let i = nums.length-2;i>=0;i--){
        if(i + nums[i] >= targetIndex){
            targetIndex = i
        }
    }

    return targetIndex == 0?true : false
}