// #56
// Merge Intervals
// Tags: Intervals

var merge = function(intervals) {

    intervals.sort ((a,b) => (a[0] - b[0]))

    let mergeStart = intervals[0][0]
    let mergeEnd = intervals[0][1]
    
    let mergeMap = new Map()
    mergeMap.set(mergeStart, mergeEnd)
    
    for (let i = 1; i< intervals.length;i++){

        if(intervals[i][0] <= mergeEnd ){
            //overlapping case
            mergeEnd = Math.max(intervals[i][1], mergeEnd)
        }else{
            mergeStart = intervals[i][0]
            mergeEnd = intervals[i][1]
        }

        mergeMap.set(mergeStart, mergeEnd)
    }

    let final = []
    for (let [s, e] of mergeMap){
        final.push([s,e])
    }

    return final
    
};