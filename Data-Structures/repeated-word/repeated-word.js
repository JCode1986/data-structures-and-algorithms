'use strict';

function repeatedWord(string) {
  let obj = {};
  let word = string.split(' ');
  let mostRepeatedKey = ' ';
  let mostRepeatedValue = 0;

  for(let i = 0; word.length; i++) {
    if(!obj[word[i]]) {
      obj[word[i]] = 1;
    }
    else obj[word[i]]++;
  }
  let keys = Object.keys(obj);
  let currentVal = obj[keys[i]]
  for(let j = 0; j < keys.length; j++) {
    if(currentVal) {
      if(currentVal > mostRepeatedValue) {
        currentVal = mostRepeatedValue;
        mostRepeatedKey = keys[i];
      }
    }
  }
  return mostRepeatedKey;
}

module.exports = repeatedWord; 