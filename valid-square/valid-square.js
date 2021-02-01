/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    let points = [p1, p2, p3, p4].sort((a, b) => {
        if ((n = a[0] - b[0]) !== 0) return n;
        else return a[1] - b[1];
    });
    function dist(a, b) {
        // distance between 2 points. d = sqrt((x2 - x1)^2 + (y2 - y1)^2)
        return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
    }
    let d = [
        dist(points[0], points[1]),
        dist(points[0], points[2]),
        dist(points[0], points[3]), // point 0 is diagonal to 3
        dist(points[1], points[2]), // point 1 is diagonal to 2
        dist(points[1], points[3]),
        dist(points[2], points[3]),
    ]
    return d[0] &&
        d[0] === d[1] &&
        d[0] === d[4] &&
        d[0] === d[5] &&
        d[2] === d[3];
};