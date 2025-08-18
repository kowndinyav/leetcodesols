var productExceptSelf = function(nums) {

    let prefix = new Array(nums.length).fill(1)
    let suffix = new Array(nums.length).fill(1)

    for (let i = 1; i < nums.length; i++){
        prefix[i] = prefix[i - 1] * nums[i - 1] 
    }

    for (let i = nums.length - 2; i >= 0; i--){
        suffix[i] = suffix[i+1] * nums[i + 1] 
    }

    let answers = new Array(nums.length).fill(1)
    for(let i =0;i<nums.length;i++){
        answers[i] = prefix[i] * suffix[i]
    }
    
    return answers

};

// [1,2,3,4,5,6,7]
// [1,1,1,1,1,1,1]
// [ ,1,2,6]

console.log(productExceptSelf([1,2,3,4]))

