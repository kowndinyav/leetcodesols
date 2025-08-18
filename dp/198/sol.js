function robHouses(nums){

    let rh = new Array(nums.length).fill(0)
    rh [nums.length - 1] = nums[nums.length - 1]
    rh [nums.length - 2] = nums[nums.length - 2]

    for (let i = nums.length - 3;i >=0;i--){
        // let a = Math.max(...rh.slice(i+2))
        let a = Math.max(i+2<nums.length ? rh[i+2] : 0, i+ 3 < nums.length?rh[i+3]:0)
        rh [i] = nums[i] + a
    }

    return Math.max(...rh)
}

console.log(robHouses([1,2,3,1]))
console.log(robHouses([1,3,1,3,100]))
console.log(robHouses([2,7,9,3,1]))