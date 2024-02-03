// Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(arr) {
  if (arr.length != 10) {
    return "Invalid phone number";
  }
  const part1 = arr.slice(0, 3).join("");
  const part2 = arr.slice(3, 6).join("");
  const part3 = arr.slice(6, 11).join("");
  return `(${part1}) ${part2}-${part3}`;
}

const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result); // (123) 456-7890

const result2 = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result2); // Invalid phone number
