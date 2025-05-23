const unroll = require("./unroll");

test("4x4 square", () => {
  const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  expect(unroll(square)).toEqual([
    1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
  ]);
});

test("3x3 square with strings", () => {
  const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ];
  expect(unroll(smallerSquare)).toEqual([
    "a",
    "b",
    "c",
    "f",
    "i",
    "h",
    "g",
    "d",
    "e",
  ]);
});

test("1x1 square", () => {
  const single = [[42]];
  expect(unroll(single)).toEqual([42]);
});

test("2x2 square", () => {
  const square = [
    [1, 2],
    [3, 4],
  ];
  expect(unroll(square)).toEqual([1, 2, 4, 3]);
});
