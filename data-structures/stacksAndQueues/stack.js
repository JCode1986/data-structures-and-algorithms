'use strict';

/**
 * node stack
 * with a top and stack (array)
 * @class Stack
 */
class Stack {
  constructor(){
    this.top = null;
    this.stack = [];
  }

  /**
   * takes any value as an argument
   * adds a new value to the top of the stack 
   * @param {*} value
   * @returns
   * @memberof Stack
   */
  push(value) {
    this.stack.push(value);
    return this.top = (value);
  }

  /**
   * removes the node from the top of the stack,
   * returns the value
   * @returns
   * @memberof Stack
   */
  pop() {
    if (!this.stack[0]) {
      return 'Nothing in Stack';
    }
    let value = this.stack.pop();
    this.top = this.stack[this.stack.length-1];
    return value;
  }

  /**
   * returns the value 
   * located on top of the stack
   * @returns
   * @memberof Stack
   */
  peek() {
    return this.top;
  }

  isEmpty() {
    if(!this.stack.length) return true
    return false
  }
}

module.exports = Stack; 
