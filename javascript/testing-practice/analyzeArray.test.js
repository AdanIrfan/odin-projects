import { analyzeArray } from "./analyzeArray";

const object = analyzeArray([1, 8, 3, 4, 2, 6]);

test("average", () => {
  expect(object.average).toEqual(4);
});

test("min", () => {
  expect(object.min).toEqual(1);
});

test("max", () => {
  expect(object.max).toEqual(8);
});

test("length", () => {
  expect(object.length).toEqual(6);
});

test("analyze a single element", () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test("analyze negative numbers", () => {
  expect(analyzeArray([-5, -2, -10])).toEqual({
    average: -17 / 3,
    min: -10,
    max: -2,
    length: 3,
  });
});

test("analyze positive and negative numbers", () => {
  expect(analyzeArray([-5, 10, -2, 7])).toEqual({
    average: 2.5,
    min: -5,
    max: 10,
    length: 4,
  });
});

test("analyze numbers with the same value", () => {
  expect(analyzeArray([5, 5, 5, 5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 4,
  });
});

test("analyze decimal numbers", () => {
  expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({
    average: 2.5,
    min: 1.5,
    max: 3.5,
    length: 3,
  });
});
