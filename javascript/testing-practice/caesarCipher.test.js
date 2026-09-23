import { caesarCipher } from "./caesarCipher.js";

test("Normal shifting", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});
test("Wrapping", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("Case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
test("Punctuation and Spaces", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
