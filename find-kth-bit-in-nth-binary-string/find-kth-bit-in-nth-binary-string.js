/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    if (n == 1 && k == 1) return "0";
    var array = new Array("0");
    for (let i = 0; i < n - 1; i ++) {
        let temp = invertReverse(array.slice(0, array.length));
        array = array.concat(temp);
        if (array.length > k) return array[k - 1];
    }
    
    function invertReverse(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === "1") array[i] = "0";
            else array[i] = "1";
        }
        return ["1"].concat(array.reverse());
    }
    
    return array[k - 1];
};
​
