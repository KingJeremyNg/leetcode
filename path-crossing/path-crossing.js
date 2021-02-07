/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let y = 0;
    let x = 0;
    let points = [[0, 0]];
    for (let i = 0; i < path.length; i++) {
        switch (path[i]) {
            case "N":
                y++;
                break;
            case "E":
                x++;
                break;
            case "S":
                y--;
                break;
            case "W":
                x--;
                break;
        }
        if (check(points, x, y)) return true;
    }
    return false;
};

const check = (points, x, y) => {
    let a = JSON.stringify(points);
    let b = JSON.stringify([x, y]);
    if (a.indexOf(b) !== -1) return true;
    else points.push([x, y]);
}
