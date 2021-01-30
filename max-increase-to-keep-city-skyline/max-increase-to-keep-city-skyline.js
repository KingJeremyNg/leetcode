/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let top = new Array(grid.length).fill(0);
    let side = new Array(grid.length).fill(0);
    let sum = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] > top[x]) top[x] = grid[y][x];
            if (grid[y][x] > side[y]) side[y] = grid[y][x];
        }
    }
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            sum += Math.min(top[x] - grid[y][x], side[y] - grid[y][x]);
        }
    }
    return sum;
};