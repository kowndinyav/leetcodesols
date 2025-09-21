var minMeetingRooms = function(intervals) {

    if (intervals.length === 0) return 0;
    if (intervals.length === 1) return 1;

    let starts = intervals.map(e => e[0])
    starts.sort( (a, b) => a - b )

    let ends = intervals.map(e => e[1])
    ends.sort( (a, b) => a - b )

    let startIndex = 0
    let endIndex = 0
    let count = 0
    let maxRooms = 0

    intervals.sort ( (a,b) => a[0] - b[0] )
    
    while (startIndex < intervals.length){
        
        if (starts[startIndex] < ends[endIndex]){
            count++ // meeting started, new room required until we hit end of a meeting
            startIndex++
        }else{
            count-- // a meeting ended, free up a room
            endIndex++
        }

        maxRooms = Math.max(count, maxRooms)
    }

    return count
};

console.log(minMeetingRooms([[0,30],[5,10],[15,20]]))
console.log(minMeetingRooms([[7,10],[2,4]]))
console.log(minMeetingRooms([[5,8],[6,8]]))