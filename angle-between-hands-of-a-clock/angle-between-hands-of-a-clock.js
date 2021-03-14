/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    hour += minutes / 60;
    hour = ((hour % 12) / 12) * 360;
    minutes = (minutes / 60) * 360;
    let res = Math.abs(hour - minutes);
    return Math.min(res, 360 - res);
};