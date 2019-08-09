'use strict';

const brackets = module.exports = {};
const stacks = require('../stacksAndQueues/stack')

brackets.multiBracketValidation = function(input) {
  if(typeof input !== 'string') { 
    return 'please enter a string'
  } else {
    return input;
  }

};