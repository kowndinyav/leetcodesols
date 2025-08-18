




var eraseOverlapIntervals = function(intervals) {

    let originalLength = intervals.length;

    function isOverlap(interval1, interval2) {
        return interval1[1] > interval2[0] && interval1[0] < interval2[1];
    }

    function longerOrEqualInterval(interval1, interval2) {
        return (interval1[1] - interval1[0]) >= (interval2[1] - interval2[0])  ;
    }

    function duplicateInterval(interval1, interval2) {
        return interval1[0] === interval2[0] && interval1[1] === interval2[1];
    }


    let removeCount = 0;

    for (let i = 0; i < intervals.length; i++) {
        for (let j = i + 1; j < intervals.length; j++) {

            if (duplicateInterval(intervals[i], intervals[j])) {
                removeCount++;
            }else{
                if (isOverlap(intervals[i], intervals[j])) {
                
                    if (longerOrEqualInterval(intervals[i], intervals[j]) ) {
                        intervals.splice(i, 1);
                    } else {
                        intervals.splice(j, 1);
                    }
                }
            }
            
        }
    }

    return originalLength - intervals.length;
    
};


// console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));
console.log(eraseOverlapIntervals([[1,2],[1,2],[1,2]]));