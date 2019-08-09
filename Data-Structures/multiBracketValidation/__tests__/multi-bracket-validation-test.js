'use strict';

const brackets = require('../multi-bracket-validation');

describe('Multi-bracket validation', () => {
  it('should only take a string as an argument', () => {
    let testOne = brackets.multiBracketValidation(1);
    expect(testOne).toBe('please enter a string bracket type');
    let testTwo = brackets.multiBracketValidation('[], {}, ()');
    expect(testTwo).toBe('[], {}, ()');
  })

  it('wired up', () => {
    
  })

});
