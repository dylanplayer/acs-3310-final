"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
test("st -> 1st", function () {
    expect((0, index_1.ordinalSuffix)(1)).toBe('1st');
});
test("nd -> 2nd", function () {
    expect((0, index_1.ordinalSuffix)(2)).toBe('2nd');
});
test("rd -> 3rd", function () {
    expect((0, index_1.ordinalSuffix)(3)).toBe('3rd');
});
test("th -> 4th", function () {
    expect((0, index_1.ordinalSuffix)(4)).toBe('4th');
});
test("th -> 11th", function () {
    expect((0, index_1.ordinalSuffix)(11)).toBe('11th');
});
test("nd -> 502nd", function () {
    expect((0, index_1.ordinalSuffix)(502)).toBe('502nd');
});
test("st -> 1001st", function () {
    expect((0, index_1.ordinalSuffix)(1001)).toBe('1001st');
});
test("rd -> 433rd", function () {
    expect((0, index_1.ordinalSuffix)(433)).toBe('433rd');
});
//# sourceMappingURL=index.test.js.map