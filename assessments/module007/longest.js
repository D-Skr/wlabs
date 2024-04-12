/*
 * Write a function, find_longest_word,
 * that takes a list of words and returns
 * the length of the longest one.
 */

function findLongestWord(words) {
  let longestLength = 0;

  for (const word of words) {
    longestLength = Math.max(longestLength, word.length);
  }

  return longestLength;
}

console.log(findLongestWord(["hi", "hello"])); //5

//space complexity O(1)
