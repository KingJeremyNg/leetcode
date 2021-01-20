/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let types = new Array();
    for(let i = 0; i < candyType.length; i++) {
        if (!types.includes(candyType[i])) {
            types.push(candyType[i]);
        }
    }
    numCandies = candyType.length / 2;
    return Math.min(numCandies, types.length);
};
