function threeSum(nums){

    let arr = nums.sort ((a,b) => a-b)
    
    let res = []
    let i  = 0

    while (i<arr.length){

        let j = i + 1
        let k = arr.length - 1
        
        while (j < k){
            if(arr[i] + arr[j] + arr[k] == 0){
                //solution - push it
                res.push([arr[i],arr[j],arr[k]])
                j++
                k--
                while (i + 1 < arr.length && arr[i] == arr[i+1]) i++
                while (j < arr.length && arr[j] == arr[j-1]) j++
                while (k > 0 && arr[k] == arr[k+1]) k--
            }else if(arr[i] + arr[j] + arr[k] < 0){
                j++
            }else if(arr[i] + arr[j] + arr[k] > 0){
                k--
            }
        }

        i++
    }

    return res

}

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,1,1]))
console.log(threeSum([0,0,0]))
