import { reverseString } from "./reverseString.js";

test("reverse the string", () => {
  expect(reverseString("umbrella")).toBe("allerbmu");
});
test("handle empty string", () => {
  expect(reverseString("")).toBe("");
});
test("makesure its a string", () => {
  expect(reverseString(10)).toBe(undefined);
});
test("reverse a single character", () => {
  expect(reverseString("a")).toBe("a");
});
test("reverse two character string", () => {
  expect(reverseString("ab")).toBe("ba");
});
test("check for spaces", () => {
  expect(reverseString("a b ")).toBe(" b a");
});
test("string containing punctuation mark", () => {
  expect(reverseString("Hello!")).toBe("!olleH");
});
test("palindrom check", () => {
  expect(reverseString("madam")).toBe("madam");
});
