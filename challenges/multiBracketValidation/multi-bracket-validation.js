'use strict';

const Stack = require('../../data-structures/stacksAndQueues/stack');

module.exports = function multiBracketValidation(input) {
  let brackets = new Stack();

  if(typeof input !== 'string') {
    return 'enter a string';
  } else {
    for(let char of input) {
      if (char === '[' || char === '{' || char === '(') {
        brackets.push(char);
      } 
        else if (char === ']' || char === '}' || char === ')') {   
          if (char === '}' && brackets.peek() !== '{' ||
              char === ')' && brackets.peek() !== '(' ||
              char === ']' && brackets.peek() !== '[') {
              return false;
          }
          brackets.pop();
        };
    };
  }
  return brackets.isEmpty();
};
