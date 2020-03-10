'use strict';

function repeatedWord(string) {
  if(!string) return 'please enter something as an argument'
  let obj = {};
  let wordArray = string.split(' ');
  let mostRepeatedWord = '';
  let wordCount = 0;

  for(let word of wordArray) {
    !obj[word] ? obj[word] = 1 : obj[word]++;
  }
  
  for(let key in obj) {
    let currentVal = obj[key]
    if(currentVal) {
      if(currentVal > wordCount) {
        wordCount = currentVal;
        mostRepeatedWord = key
      }
    }
  }
  return mostRepeatedWord;
}

module.exports = repeatedWord; 