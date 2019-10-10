'use strict';

const repeatedWord = require('../repeated-word.js')

describe('Repeated Words', () => {
  it('works as expected', () => {
    let sentence = 'in a galaxy far far away'
    let expected = repeatedWord(sentence);
    expect(expected).toBe('far')
  });

  it('no argument entered', () => {
    let expected = repeatedWord();
    expect(expected).toBe('please enter something as an argument')
  });

  it('returns highest word count even if there are other duplicated words', () => {
    let sentence = 'I finally had time complete this challenge, and so so happy that it is working. Now on to the next tasks. What is left to do? oh yeah, everything else. cat cat cat cat cat'
    let expected = repeatedWord(sentence);
    expect(expected).toBe('cat')
  });

});


