"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordinalSuffix = void 0;
/**
 * Generates number with its corrisponding suffix.
 * @param {number} num - Number to convert
 * @returns {string} - Number with suffix
 */
var ordinalSuffix = function (num) {
    var numString = String(num);
    var lastNumber = Number(numString[numString.length - 1]);
    var secondToLastNumber = Number(numString[numString.length - 2]);
    var isTeen = numString.length > 1 && secondToLastNumber === 1;
    if (!isTeen && lastNumber === 1) {
        return "".concat(num, "st");
    }
    else if (!isTeen && lastNumber === 2) {
        return "".concat(num, "nd");
    }
    else if (!isTeen && lastNumber === 3) {
        return "".concat(num, "rd");
    }
    else {
        return "".concat(num, "th");
    }
};
exports.ordinalSuffix = ordinalSuffix;
//# sourceMappingURL=index.js.map