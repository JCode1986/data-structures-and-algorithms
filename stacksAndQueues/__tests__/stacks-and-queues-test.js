'use strict';

const Node = require('../node');
const Stack = require('../stack');
const Queue = require('../queue');


const node = new Node();
const stack = new Stack();
const queue = new Queue();

describe('Stacks and Queues', () => {

  });

  it('Can successfully instantiate an empty stack', () => {
    let expected = stack;
    expect(expected).toEqual({"top": null});
  });

  it('Can successfully push a node onto a stack', () => {
    let newStack = stack;
    newStack.push(1);
    expect(newStack.top.value).toBe(1);
  });

  it('Can successfully push multiple values onto a stack', () => {
    let newStack = stack;
    newStack.push(2);
    expect(newStack.top.value).toBe(2);
    newStack.push(3);
    expect(newStack.top.value).toBe(3);
    newStack.push(4);
    expect(newStack.top.value).toBe(4);
  });


  it('Can successfully pop off the stack', () => {
    stack.push('hello');
    stack.push('world')
    let expected = stack.pop();
    expect(expected).toBe('world');
  });

  it('Can successfully empty a stack after multiple pops', () => {

  });

  it('Can successfully peek the next item on the stack', () => {
    stack.push('peek this')
    let expected = stack.peek();
    expect(expected).toBe('peek this');
  });


  it('Can successfully enqueue into a queue', () => {
    let expected = queue.enqueue('green');
    expect(expected).toBe('green');
  });

  it('Can successfully enqueue multiple values into a queue', () => {

  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    queue.enqueue('blue');
    let expected = queue.dequeue();
    expect(expected).toBe('green');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue('car');
    let expected = queue.peek();
    expect(expected).toBe('blue');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {

  });

  it('Can successfully instantiate an empty queue', () => {
    let expected = new queue;
    console.log(queue)
    expect(expected).toEqual({ queue: [], rear: null })
  });

