/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let y = 0;
    let x = 0;
    let points = new Set().add(`${x}${y}`);
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
        if (points.has(`${x}${y}`)) return true;
        else points.add(`${x}${y}`);
    }
    return false;
};
