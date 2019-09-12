'use strict';

const quickSort = require('../quick-sort.js');

describe('Quick Sort', () => {
  it('works as expected', () => {
    let arrayOne = [9, 2, 7, 4, 3, 1, 5, 6, 8]
    quickSort(arrayOne, 0, arrayOne.length - 1)
    expect(arrayOne).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it(`returns message if element in array is not a number`, () => {
    let arrayThree = 'I am not an array';
    expect(quickSort(arrayThree)).toBe('needs to be an array with integers');
  });
    // it(`returns array if length is less than 2`, () => {
  //   let arrayTwo = []
  //   quickSort(arrayTwo, 0, arrayTwo.length -1);
  //   expect(arrayTwo).toBe(null);
  // });
});