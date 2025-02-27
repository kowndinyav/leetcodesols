function majorityElement(a){

    let candidate = -1
    let count = 0
    let i = 0

    while (i < a.length){

        if(count == 0){
            candidate = a[i]
            count++
        }else{
            if(a[i] == candidate){
                count++
            }else{
                count--
            }
        }

        i++
    }

    return candidate

}

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))