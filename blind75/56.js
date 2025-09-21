/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    intervals.sort((a, b) => (a[0] - b[0]))

    let mergeStart = intervals[0][0]
    let mergeEnd = intervals[0][1]

    let mergeMap = new Map()
    mergeMap.set(mergeStart, mergeEnd)

    let res = []

    for (let i = 1; i < intervals.length; i++) {

        let curStart = intervals[i][0]
        let curEnd = intervals[i][1]

        if (curStart <= mergeEnd) {
            //overlapping case
            mergeMap.set(mergeStart, Math.max(curEnd, mergeEnd))
            mergeEnd = Math.max(curEnd, mergeEnd)
        } else {
            res.push(intervals[i])
            mergeStart = curStart
            mergeEnd = curEnd
        }
    }

    let final = []
    for (let i = 0; i < res.length; i++) {

        if (!mergeMap.has(res[i][0])) {

            /*
                Imagine case of: (1,3), (4,6), (4,7) - (4,6) would have been pushed to the list as 1,3 and 4,6 are non overlapping
                To handle this case, we are excluding 4,6 here
            */

            final.push(res[i])
        }
    }

    for ([key, val] of mergeMap) {
        final.push([key, val])
    }

    return final

};