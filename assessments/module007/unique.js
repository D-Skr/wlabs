/* Write a function that takes in a single word, as a string.
 * It should return True if that word contains only unique characters.
 * Return False otherwise. */

function hasUniqueChars(word) {
  const wordSet = new Set(word);
  if (wordSet.size === word.length) {
    return true;
  }
  return false;
}

console.log(hasUniqueChars("Monday")); //true
console.log(hasUniqueChars("Moooonday")); //false

//space complexity O(n)
