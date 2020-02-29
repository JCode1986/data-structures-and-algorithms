'use strict';

const mergeSort = require('../merge-sort.js');

describe('Merge Sort', () => {
  it('works as expected', () => {
    let arrayOne = [9, 2, 7, 4, 3, 1, 5, 6, 8]
    expect(mergeSort(arrayOne)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it(`returns array if length is less than 2`, () => {
    let arrayTwo = []
    let arrayThree = [1]
    expect(mergeSort(arrayTwo)).toEqual([]);
    expect(mergeSort(arrayThree)).toEqual([1]);
  });
  it(`returns message if element in array is not a number`, () => {
    let arrayThree = 'I am not an array';
    expect(mergeSort(arrayThree)).toBe('needs to be an array with integers');
  });
});