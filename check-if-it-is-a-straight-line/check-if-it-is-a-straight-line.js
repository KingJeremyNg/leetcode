/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(c) {
    // gradient, m = (y2 - y1) / (x2 - x1);
    let m = (c[1][1] - c[0][1]) / (c[1][0] - c[0][0]);
    for (let i = 1; i < c.length - 1; i++) {
        let temp = (c[i + 1][1] - c[i][1]) / (c[i + 1][0] - c[i][0]);
        if (m === temp) continue;
        else if (m === Infinity && temp === -Infinity) continue;
        else return false;
    }
    return true;
};
