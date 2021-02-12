/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    let arr = restaurants.filter(([id, rating, vegan, price, distance]) =>
        (!veganFriendly || vegan) &&
            price <= maxPrice &&
            distance <= maxDistance
    )
    arr.sort((a, b) => {
        if (a[1] - b[1] !== 0) return b[1] - a[1];
        else return b[0] - a[0];
    })
    return arr.map((element) => {return element[0]});
};