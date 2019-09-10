'use strict';

const AnimalShelter = require('../fifo-animal-shelter');

const animalShelter = new AnimalShelter();

let animalOne = { species: 'cat', name: 'Garfield' };
let animalTwo = { species: 'bird', name: 'tweety' };

describe('FIFO Animal Shelter', () => {
  
  it('should enqueue if a cat or dog object is entered', () => {
    let expected = animalShelter.fifoEnqueue(animalOne);
    expect(expected).toBe(animalOne)
  });

  it('return null if no cats or dogs', () => {
    let expected = animalShelter.fifoDequeue(animalTwo);
    expect(expected).toBe(null);
  });

  xit('should dequeue if there are cats or dogs in shelter', () => {
    let expected = animalShelter.fifoDequeue(animalOne);
    expect(expected).toBe(animalOne);
  });

});