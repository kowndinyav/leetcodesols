
function reverse(a, l, r){
    let temp = 0
    while (l<r){
        temp = a[l]
        a[l] = a[r]
        a[r] = temp
        l++
        r--
    }
}


function rotate(a, k){
    
    let N = a.length
    k = k % N

    reverse(a, 0, N-1)
    reverse(a, 0, k-1)
    reverse(a, k, N-1)

    return a
}


console.log(rotate([1,2,3,4,5,6,7], 3))
console.log(rotate([-1,-100,3,99], 2))