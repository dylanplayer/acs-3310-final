import { ordinalSuffix } from '../index';

test("st -> 1st", () => {
  expect(ordinalSuffix(1)).toBe('1st');
});

test("nd -> 2nd", () => {
  expect(ordinalSuffix(2)).toBe('2nd');
});

test("rd -> 3rd", () => {
  expect(ordinalSuffix(3)).toBe('3rd');
});

test("th -> 4th", () => {
  expect(ordinalSuffix(4)).toBe('4th');
});

test("th -> 11th", () => {
  expect(ordinalSuffix(11)).toBe('11th');
});

test("nd -> 502nd", () => {
  expect(ordinalSuffix(502)).toBe('502nd');
});

test("st -> 1001st", () => {
  expect(ordinalSuffix(1001)).toBe('1001st');
});

test("rd -> 433rd", () => {
  expect(ordinalSuffix(433)).toBe('433rd');
});
