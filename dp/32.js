var longestValidParentheses = function(s) {
  
    /*
        stack
        
        - if top="("" 
            - current is ")" - pop - length += 2  
        - if top="(" or empty, current is "(", push
        - if top=")", current is "(", push - state should not be possible
        - if empty, current is ")" - skip
    */

    if(s.length == 0){
        return 0
    }

    let max = 0
    let stack = []
    let intervals = []
    let validLength = 0

    for (let i = 0;i < s.length;i++){

        if(s[i] == "("){
            stack.push({"index": i, "val": s[i]})
        }else{
            if(stack.length > 0){
                let top = stack[stack.length - 1]
                if (top.val == "("){
                    intervals.push([top.index, i])
                    top = stack.pop()                    
                }
            }
        }
    }

    if(intervals.length == 0){
        return 0
    }

    intervals.sort ( (a,b) => a[0] - b[0] )
    // console.log(intervals)

    let nonOverlappingIntervals = []
    nonOverlappingIntervals.push(intervals[0])
    console.log(`pushing interval ${intervals[0][0]} -  ${intervals[0][1]}`)

    let prevEnd = nonOverlappingIntervals[0][1]

    for (let i = 1 ; i < intervals.length;i++){
        let [start, end] = intervals[i]

        if(start > prevEnd){
            console.log(`pushing interval ${intervals[i][0]} -  ${intervals[i][1]}`)
            nonOverlappingIntervals.push(intervals[i])
        }else{
            console.log(`ignoring interval ${intervals[i][0]} -  ${intervals[i][1]}`)
        }

        prevEnd = Math.max(end, prevEnd)
    }

    
    // console.log(nonOverlappingIntervals)
    let prevStart = 0

    for (let i = 0; i < nonOverlappingIntervals.length; i++){

        let [start, end] = nonOverlappingIntervals[i]

        if(i == 0){
            validLength =  (end - start + 1)
            
        }else{
            if (start == prevEnd + 1){
                validLength += (end - start + 1)
            }else{
                validLength = (end - start + 1)
            } 
        }

        prevEnd = end
        prevStart = start
        max = Math.max(max, validLength)

    }

    return max
    
};

// console.log(longestValidParentheses("(()"))
// console.log(longestValidParentheses(")()())"))
// console.log(longestValidParentheses("()(()"))
console.log(longestValidParentheses("()(())"))

