import { calculator } from "./calculator.js";

test("Check for addtion", () => {
  expect(calculator.addition(4, 5)).toBe(9);
});
test("Check for subtraction", () => {
  expect(calculator.subtraction(6, 5)).toBe(1);
});
test("Check for multiplication", () => {
  expect(calculator.multiplication(4, 5)).toBe(20);
});
test("Check for division", () => {
  expect(calculator.division(10, 2)).toBe(5);
});

// edgeCases

test("addition with negative number", () => {
  expect(calculator.addition(-4, 5)).toBe(1);
});
test("addition with negative number", () => {
  expect(calculator.addition(4, -5)).toBe(-1);
});
test("subtract large number from small", () => {
  expect(calculator.subtraction(5, 7)).toBe(-2);
});
test("multiplication with zero", () => {
  expect(calculator.multiplication(4, 0)).toBe(0);
});
test("divide with 0", () => {
  expect(calculator.division(10, 0)).toBe(Infinity);
});
