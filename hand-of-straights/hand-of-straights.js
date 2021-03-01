/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
    if (hand.length % W !== 0) return false;
    hand.sort((a, b) => a - b);
    let stack = [];
    while (hand.length !== 0) {
        let temp = hand.splice(0, 1)[0];
        for (let i = 1; i < W; i++) {
            let index = hand.indexOf(temp + 1);
            if (index >= 0) {
                hand.splice(index, 1);
                temp++;
            }
            else return false;
        }
    }
    return true;
};