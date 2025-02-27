function removeElement(nums, val) {

    let l = 0
    let r = nums.length - 1

    /*
    
    (l<r vs l<=r) : when input is [2] and value to be removed 3, l<r condition fails. Essentially handling edge cases

    */

    while (l<=r){

        while (nums[l] != val && l < nums.length) l++
        while (nums[r] == val && r >= 0) r--

        if(l >= r){
            break
        }

        nums[l] = nums[r]
        nums[r] = val
    }
    
    return l
}


console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))

