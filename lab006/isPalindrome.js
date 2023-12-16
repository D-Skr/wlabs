// Return true if this word is a palindrome. false if it is not. 
// A palindrome is a word that is spelled the same backwards and forwards.
// Case sensitive.

function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
        //if (word.charCodeAt(i) != word.charCodeAt(word.length - 1 - i)) {
        if (word[i] != word[word.length - 1 - i]) {
            return false;
        }
        return true;
    }
}