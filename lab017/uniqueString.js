function makeUniqueString(s) {
  let result = "";
  for (letter of s) {
    if (!result.includes(letter)) {
      result += letter;
    }
  }
  return result;
}

console.log(makeUniqueString("Hello Worldddddddddd"));
