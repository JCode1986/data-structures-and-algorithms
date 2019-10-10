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
  let keys = Object.keys(obj);
  for(let j = 0; j < keys.length; j++) {
    let currentVal = obj[keys[j]]
    if(currentVal) {
      if(currentVal > mostRepeatedValue) {
        mostRepeatedValue = currentVal;
        mostRepeatedKey = keys[j];
      }
    }
  }
  return mostRepeatedKey;
}

module.exports = repeatedWord; 