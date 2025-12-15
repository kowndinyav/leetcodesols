
var partition = function(s) {

    let N = s.length
    let res = []

    function checkPalindrome(str){

        let l = 0
        let r = str.length - 1

        while (l <= r){
            if(str[l] != str[r]){
                return false
            }
            l++
            r--
        }

        return true
    }
    
    function solve(start,path){

        if(start == N){
            res.push([...path])
            return true
        }

        for (let j = start+1;j <= N; j++){
            
            let prefixPalindrome = checkPalindrome(s.slice(start, j))
            
            if(prefixPalindrome){
                path.push(s.slice(start, j))
                solve(j, path)
                path.pop()
            }
            
        }
    }

    solve(0, [])
    return res
};

console.log(partition("aab"))
console.log(partition("bb"))