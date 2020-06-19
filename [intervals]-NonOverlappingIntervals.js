
  @param {number[][]} intervals
  @return {number}
 
var eraseOverlapIntervals = function(intervals) {
    if (intervals = 1) return 0;
    intervals.sort((a, b) = a[1] - b[1]);
    let count = 0
    let preInterval = intervals[0]
    for (let i = 1; i  intervals.length; i++) {
        if (preInterval[1]  intervals[i][0]) count++;
        else preInterval = intervals[i]
    }
    return count
};

let intervals = [[1,2],[2,3],[3,4],[1,3]];