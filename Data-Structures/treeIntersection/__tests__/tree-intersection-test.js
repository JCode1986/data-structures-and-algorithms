'use strict';

const findCommonValues = require('../tree-intersection.js')

describe('Tree Intersection', () => {
  it('works as expected', () => {
    expect(findCommonValues(tree1, tree2)).toEqual(["6", "621"])
  });

  it('returns null if no tree as argument', () => {
    expect(findCommonValues(tree1)).toBe(null)
  })

  it('returns message if no node value', () => {
    expect(findCommonValues(tree1, 'i have no value')).toBe('no value')
  })

});


let tree1 = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3,
      left: null,
      right: null
    }
  },
  right: {
    value: 4,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 621,
      left: null,
      right: null
    }
  }
}

let tree2 = {
  value: 7,
  left: {
    value: 8,
    left: {
      value: 9,
      left: null,
      right: null
    }
  },
  right: {
    value: 621,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 10,
      left: null,
      right: null
    }
  }
}
