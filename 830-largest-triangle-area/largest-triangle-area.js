/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    var maxArea = 0;

    for (var i = 0; i < points.length; i++) {
        for (var j = i + 1; j < points.length; j++) {
            for (var k = j + 1; k < points.length; k++) {
                var [x1 , y1] = points[i];
                var [x2 , y2] = points[j];
                var [x3 , y3] = points[k];

                var area = Math.abs (
                    x1 * (y2 - y3) +
                    x2 * (y3 - y1) +
                    x3 * (y1 - y2)
                ) / 2;

                maxArea = Math.max(maxArea , area);
            }
        }
    }
    return maxArea;
};