function subsets(a){

    let results = []

    function solve(start, path){
        
        results.push([...path])

        for (let i = start; i < a.length;i++){
            path.push(a[i])
            solve(i+1, path)
            path.pop()
        }
    }


    solve(0, [])

    return results
}

console.log(subsets([1,2,3]))

