/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let satisfaction = new Array();
    max = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) satisfaction.push(true);
        else satisfaction.push(false);
    }
    return satisfaction;
};
