var insert = function(intervals, newInterval) {

    let results = []

    // 1. add all intervals before the newInterval
    let i = 0
    while (i < intervals.length && intervals[i][1] < newInterval[0]){
        results.push(intervals[i])
        i++
    }
    
    // 2. merge all overlapping intervals
    let mergedInterval = new Array(2).fill(0)
    while (i < intervals.length && newInterval[1] > intervals[i][0]){
        mergedInterval[0] = Math.min(intervals[i][0], newInterval[0])
        mergedInterval[1] = Math.max(intervals[i][1], newInterval[1])    
        i++
    }
    results.push(mergedInterval)

    // 3. append intervals left over
    while (i < intervals.length){
        results.push(intervals[i])
    }

    return results
};

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [11,11]))
// console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [0,0]))
// console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [17,18]))
// console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))
// console.log(insert([[1,3],[6,9]], [2,5]))