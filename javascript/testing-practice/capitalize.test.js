import { makeCapitalize } from "./capitalize.js";

test("caiptalize fist letter", () => {
  expect(makeCapitalize("hello")).toBe("Hello");
});

test("First letter is already capitalized", () => {
  expect(makeCapitalize("Hello")).toBe("Hello");
});

test("Make sure other letter are lower case", () => {
  expect(makeCapitalize("hELLO")).toBe("Hello");
});

test("Handle empty string", () => {
  expect(makeCapitalize("")).toBe(undefined);
});
