/*
 * A pangram is a sentence that contains all the letters of the English alphabet at least once,
 * like “The quick brown fox jumps over the lazy dog.”
 * Write a function to check a sentence to see if it is a pangram or not.
 */

function isPangram(sentence) {
  const alphabet = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ""));
  if (alphabet.size === 26) {
    return true;
  }
  return false;
}

console.log(isPangram("The quick brown fox jumps oVer the lazy dog!")); //true

console.log(isPangram("I like cats, but not mice")); //false
