const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  const input = [1, 2, 3, 0];
  const output = shuffle(input);

  test("return an array", () => {
    expect(Array.isArray(output)).toBe(true);
  });

  test("return an array of the same length", () => {
    expect(input.length).toEqual(output.length);
  });

  test("return an array with different element order if length > 1", () => {
    expect(input).not.toEqual(output);
  });
});
