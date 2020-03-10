'use strict'

const multiBracketValidation = require('../multi-bracket-validation');
const Stack = require('../../../data-structures/stacksAndQueues/stack')

const stack = new Stack()


describe('Multi-bracket validation', () => {
  
  it('can instantiate an empty stack', () => {
    let expected = stack
    let actual = {"stack": [], "top": null}
    expect(expected).toEqual(actual); 
  });

  it('returns message if argument is not a string', () => {
    let expected = "enter a string"
    let actual = multiBracketValidation(123)
    expect(expected).toEqual(actual);  
  });

  it('works as exptected; brackets have matches', () => {
    let expected = true
    let actual = multiBracketValidation('[123]{}()') 
    expect(expected).toEqual(actual);  
  });

  it('brackets does not have matches', () => {  
    let expected = false
    let actual = multiBracketValidation('[123]{}()((((((((') 
    expect(expected).toEqual(actual);  
  });

});

