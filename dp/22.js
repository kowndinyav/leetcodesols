var generateParenthesis = function(n) {

    let ret = []
    
    // operation - 0 (open), 1 (close)

    function solve(level, operation, path, oc, cc){

        if(level == n * 2 - 1){
            ret.push(path)
            return
        }

        if (operation == 0){
            
            if (oc < n){
                // push open
                solve(level + 1, 0, path + "(", oc + 1, cc)
            }
            if (cc < n){
                // push close
                solve(level + 1, 1, path + ")", oc, cc + 1)
            }
            
        }else{
            if (oc < n){
                // push open
                solve(level + 1, 0, path + "(", oc + 1, cc)
            }
            if (cc < n && cc < oc){
                // push close
                solve(level + 1, 1, path + ")", oc, cc + 1)
            }
        }

    }

    solve(0, 0, "(", 1, 0)
    return ret

};
