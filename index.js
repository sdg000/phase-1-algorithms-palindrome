function isPalindrome(word) {
  // Write your algorithm here

  word = word.toLowerCase()
  let newWord = word.toLowerCase().split('').reverse().join('')

  if (word === newWord){
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here

  1. function with word as param
  2. change word to lower case
  3. copy word to another variable
  4  split wordCopy to array, reverse wordCopy, and rejoin wordCopy
  5. compare word to wordCopy using if statement
*/

/*
  Add written explanation of your solution here

  change word to lower case for comparison
  make a copy of word
  change word to array, reverse and compare to oldWord 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
