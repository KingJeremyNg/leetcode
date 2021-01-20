/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    function ascending(array) {
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] < array[i]) return false;
        }
        return true;
    }
    
    function descending(array) {
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) return false;
        }
        return true;
    }
    
    return (ascending(A) || descending(A)) ? true : false;
};
