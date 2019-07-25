'use strict';

/**
 * node class
 * with a next and a value
 * @class Node
 */
class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

module.exports = Node; 