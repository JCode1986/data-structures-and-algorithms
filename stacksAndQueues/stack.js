'use strict';

const Node = require('./node.js');

/**
 * node stack
 * with a top and rear
 * @class Stack
 */
class Stack {
  constructor(){
    this.top = null;
  }

  /**
   * takes any value as an argument
   * adds a new value to the top of the stack 
   * @param {*} value
   * @returns
   * @memberof Stack
   */
  push(value) {
    let node = new Node(value)
    this.next = this.top;
    this.top = node;
  }

  /**
   * removes the node from the top of the stack,
   * returns the node's value
   * @returns
   * @memberof Stack
   */
  pop() {
    if (this.top === null) {
      return "nothing to pop";
    }
    let temp = this.top;
    this.top = this.next;
    temp.next = null;
    return temp.value;
  }

  /**
   * returns the value 
   * located on top of the stack
   * @returns
   * @memberof Stack
   */
  peek() {
    return this.top.value;
  }
}


let stack = new Stack();


module.exports = Stack;

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack.pop())
console.log(stack.peek())
console.log(stack);
// console.log(stack.pop());
// console.log(stack.peek())
// console.log(util.inspect(stack, false, null, true));
