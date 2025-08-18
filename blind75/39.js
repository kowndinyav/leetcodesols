var combinationSum = function(candidates, target) {

    let results = []

    function solve(start, target, path){

        if (target == 0){
            results.push([...path])
        }

        if(target < 0){
            return []
        }

        for (let i = start; i < candidates.length; i++){
            path.push(candidates[i])
            solve(i, target - candidates[i], path)
            path.pop()
        }
    }

    solve(0, target, [])
    return results
};

console.log(combinationSum([2,3,6,7], 1));
console.log(combinationSum([2,3,6,7], 7));
console.log(combinationSum([3,6,8], 10));
console.log(combinationSum([3,6,8], 23));
