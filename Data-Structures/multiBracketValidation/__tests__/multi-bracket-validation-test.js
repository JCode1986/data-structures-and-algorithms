'use strict'

const multiBracketValidation = require('../multi-bracket-validation');

console.log(multiBracketValidation('string'));

describe('Multi-bracket validation', () => {
  it('fails as expected', () => {
    let str = '[asdsad';
    expect(multiBracketValidation(str)).toBeFalsy(); 
  });

  it('works as expected', () => {
    let str = '[asdsad]';
    expect(multiBracketValidation(str)).toBeTruthy(); 
  })

  it('type checks argument', () => {
    let num = 456;
    expect(multiBracketValidation(num)).toEqual('enter a string'); 
  })

});

