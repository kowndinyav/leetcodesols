

function removeDuplicates(a){
    let MAX_DUPS_ALLOWED = 2
    let l = 0
    let r = 0
    
    while (r < a.length){

        //first move r to end of the streak of duplicates keeping track of duplicate count
        let count = 1
        while (r < a.length && a[r] == a[r+1]){
            r++
            count++
        }

        //copy 1...MAX_DUPS_ALLOWED elements starting from l
        let i = 0
        while (i <  Math.min(MAX_DUPS_ALLOWED, count)){
            a[l] = a[r]
            l++
            i++
        }

        //move to r to next distinct element
        r++

    }

    return l
}


console.log(removeDuplicates([1,1,1,2,2,3]))
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))