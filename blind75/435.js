




var eraseOverlapIntervals = function(intervals) {

    intervals.sort((a,b) => a[1] - b[1])

    let prevEnd = intervals[0][1]
    let count = 0

    for (let i = 1; i< intervals.length;i++){

        if(intervals[i][0] < prevEnd){
            // current start is < prev end
            // and don't update prevEnd
            count++
        }else{
            // in case intervals are not overlapping
            // update prevEnd
            prevEnd = intervals[i][1]
        }
    }

    return count
    
};


// console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]));