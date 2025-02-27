function isSubsequence(s, t){

    let p = 0
    let count = 0

    for (let i = 0;i<s.length;i++){

        for(let j = p; j < t.length; j++){
            if(s[i] == t[j]){
                p = j + 1
                count++
                break
            }
        }

    }

    return count == s.length ? true : false

}

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))