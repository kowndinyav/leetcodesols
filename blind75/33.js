var search = function(nums, target) {
    
    let l = 0
    let r = nums.length - 1
    

    while (l <= r){
        m = Math.floor((l + r) / 2)

        if (nums[m] == target){
            return m
        }

        if (nums[l] < nums[m]){
            if (nums[l] <= target && target < nums[m]){
                r = m - 1
            }else{
                l = m + 1
            }
        }else{
            if (nums[m] < target && target <= nums[r]){
                l = m + 1
            }else{
                r = m - 1
            }
        }
    }

    return -1
};

console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([5,1,3], 5))