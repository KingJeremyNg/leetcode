/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let arr = x.toString().split("");
    if (arr[0] == "-") {
        arr.shift();
        return Number("-" + limit(arr.reverse().join("")));
    }
    else return limit(Number(arr.reverse().join("")));
    
    function limit(x) {
        if (x > 2 ** 31) return 0;
        else return x;
    }
};
​
​
