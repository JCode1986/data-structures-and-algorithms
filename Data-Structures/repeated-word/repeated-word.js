'use strict';

function repeatedWord(string) {
  if(!string) return 'please enter something as an argument'
  let obj = {};
  let word = string.split(' ');
  let mostRepeatedKey = '';
  let mostRepeatedValue = 0;

  for(let i = 0; i < word.length; i++) {
    if(!obj[word[i]]) {
      obj[word[i]] = 1;
    }
    else obj[word[i]]++;
  }
  for(let j = 0; j < Object.keys(obj).length; j++) {
    let currentVal = Object.values(obj)[j]
    if(currentVal) {
      if(currentVal > mostRepeatedValue) {
        mostRepeatedValue = currentVal;
        mostRepeatedKey = Object.keys(obj)[j]
      }
    }
  }
  return mostRepeatedKey;
}

module.exports = repeatedWord; 