'use strict';

const Node = require('../node');
const Stack = require('../stack');
const Queue = require('../queue');


const node = new Node();
const stack = new Stack();
const queue = new Queue();

describe('Stacks and Queues', () => {

  });

// =============STACKS============= //
  
  it('Can successfully instantiate an empty stack', () => {
    let expected = new Stack();
    expect(expected).toEqual({ stack: [], top: null })
  });

  it('return message if there is nothing to pop', () => {
    let expected = stack.pop();
    expect(expected).toBe('Nothing in Stack');
  });
  
  it('Can successfully push onto a stack', () => {
    let expected = stack.push('hi');
    expect(expected).toBe('hi')
  });

  it('Can successfully push multiple values onto a stack', () => {
    stack.push('orange')
    stack.push('banana')
    let expected = stack.top
    expect(expected).toBe('banana')
  });

  it('Can successfully pop off the stack', () => {
    stack.push('hello');
    stack.push('world')
    let expected = stack.pop();
    expect(expected).toBe('world');
  });
  
  it('Can successfully empty a stack after multiple pops', () => {
    while (stack.stack.length != 0) {
      stack.pop()
    }
    let expected = stack.pop()
    expect(expected).toBe('Nothing in Stack');
  });

  it('Can successfully peek the next item on the stack', () => {
    stack.push('peek this')
    let expected = stack.peek();
    expect(expected).toBe('peek this');
  });

  it('Can successfully instantiate an empty stack', () => {
    let expected = new Stack();
    expect(expected).toEqual({"stack": [], "top": null});
  });


  // =============QUEUES============= //

  it('Can successfully instantiate an empty queue', () => {
    let expected = new Queue();
    expect(expected).toEqual({ queue: [], front: null, rear: null })
  });

  it('Can successfully enqueue into a queue', () => {
    let expected = queue.enqueue('green');
    expect(expected).toBe('green');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    queue.enqueue('yellow')
    queue.enqueue('red')
    let expected = queue.front
    expect(expected).toBe('red');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    queue.enqueue('blue');
    let expected = queue.dequeue();
    expect(expected).toBe('blue');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue('car');
    let expected = queue.peek();
    expect(expected).toBe('car');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    while (queue.queue.length !== 0) {
      queue.dequeue()
    }
    console.log(queue)
  });

