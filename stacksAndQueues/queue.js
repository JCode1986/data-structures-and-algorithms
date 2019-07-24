'use strict';

const Node = require('./node.js');

/**
 * node queue
 * with array and rear
 * @class Queue
 */
class Queue {
  constructor(){
    this.rear = null;
    this.front = null;
  }

  /**
   * adds a new node
   * to the back of the queue 
   * @param {*} value
   * @memberof Queue
   */
  enqueue(...values) {
  //  this.next = this.rear
  //  this.rear = new Node(value);
  if(!values[0]) return 'needs at least one argument';
  let total = [...values];
  total.forEach( value => {
    let node = new Node;
    node.value = value;
    if(!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  });
  }
  

  /**
   * removes the value from the front of the queue
   * and returns the value
   * @returns
   * @memberof Queue
   */
  dequeue() {
    if(!this.front) return null;
    let node = this.front;
    this.front = node.next || null;
    if (this.front === null) this.rear = null; 
    return node.value || null;
  }

  /**
   * returns the value located in the front of the queue
   * without removing it from the queue
   * @returns
   * @memberof Queue
   */
    peek() {
    return this.front;
  }
}

module.exports = Queue;

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue)