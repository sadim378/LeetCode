
var insert = function(intervals, newInterval) {
    let result = [];

    let start = newInterval[0];
    let end = newInterval[1];

    let i = 0;

    // Step 1: Add all intervals before newInterval
    while (i < intervals.length && intervals[i][1] < start) {
        result.push(intervals[i]);
        i++;
    }

    // Step 2: Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= end) {
        start = Math.min(start, intervals[i][0]);
        end = Math.max(end, intervals[i][1]);
        i++;
    }

    result.push([start, end]);

    // Step 3: Add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};
