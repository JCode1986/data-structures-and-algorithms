'use strict';

const Stack = require('../stacksAndQueues/stack');

module.exports = function multiBracketValidation(input) {
  let brackets = new Stack();
  for(let i = 0; i < input.length; i++) {
    
    // If this is an opening bracket, add to the stack.
    if (input.charAt(i) === '[' || 
      input.charAt(i) === '{' || 
      input.charAt(i) === '(') {
        brackets.push(input.charAt(i));
    } 

    // If this is a closing bracket, check the top of the stack if has matching opening bracket.
    else if (input.charAt(i) === ']' || 
      input.charAt(i) === '}' || 
      input.charAt(i) === ')') {
    
      if (input.charAt(i) === '}' && brackets.peek() !== '{' ||
          input.charAt(i) === ')' && brackets.peek() !== '(' ||
          input.charAt(i) === ']' && brackets.peek() !== '[') {
            // No matching opening bracket.
            return false;
      }
  

    // Opening bracket matched, remove from top of stack.
      brackets.pop();
    }

  }

  // Iterated through entire input. Check if empty
  // If empty, success!
  // If not empty then return false
  return brackets.isEmpty();
};