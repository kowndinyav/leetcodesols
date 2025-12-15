var search = function(nums, target) {
    
    let l = 0
    let r = nums.length - 1
    let m = Math.floor((l + r) / 2)

    while (l <= r){

        m = Math.floor((l + r) / 2)

        if (nums[m] == target){
            return m
        }

        if (nums[l] < nums[m]){
            
            // middle falling into Left sorted array - target can still be any where

            if (target > nums[m]){
                l = m + 1
            }else{

                // when target is less than mid inside Left Sorted Portion, there are two possibilities
                // may be between l - m or in the right half
                if (target >= nums[l]){
                    r = m - 1
                }else{
                    l = m + 1
                }

            }
        }else{
            // middle falling into Right sorted array - target can still be any where

            if(target < nums[m]){
                r = m - 1
            }else{
                if (target <= nums[r]){
                    l = m + 1
                }else{
                    r = m - 1
                }
            }
        }

    }

    return -1

};

console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([5,1,3], 5))