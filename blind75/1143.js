
var longestCommonSubsequence = function(text1, text2) {

    
    
    let max = 0

    function subsets(a){

        let results = new Map()
        function solve(start, path){
            
            results.set(path.join(""), true)
            
            for (let i = start; i < a.length;i++){
                path.push(a[i])
                solve(i+1, path)
                path.pop()
            }
        }

        solve(0, [])    
        return results
    }

    function longestSubset(a, b, c){

        function solve(start, path){
            
            let str = path.join("")

            if(b.has(str)){
                max = Math.max(str.length, max)
            }
    
            for (let i = start; i < a.length;i++){
                if(c.includes(a[i]) > 0){
                    path.push(a[i])
                    solve(i+1, path)
                    path.pop()    
                }
            }

        }

        solve(0, [])    
    }

    if(text1.includes(text2) > 0){
        return text2.length
    }

    if(text2.includes(text1) > 0){
        return text1.length
    }

    let text1Chars = text1.split("")
    let text2Chars = text2.split("")
    let text1Subsets = subsets(text1Chars)
    console.log(text1Subsets)
    
    longestSubset(text2Chars, text1Subsets, text1Chars)  
    return max
};

console.log(longestCommonSubsequence("papmretkborsrurgtina", "nsnupotstmnkfcfavaxgl"))