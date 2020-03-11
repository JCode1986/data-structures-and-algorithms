'use strict';

const AnimalShelter = require('../fifo-animal-shelter');

const animalShelter = new AnimalShelter();


describe('FIFO Animal Shelter', () => {

  const animalOne = { species: 'cat', name: 'Garfield' };
  const animalTwo = { species: 'bird', name: 'tweety' };
  const animalThree = {species: 'dog', name: 'Pluto'};
  
  it('should enqueue if a dog object is entered', () => {
    animalShelter.fifoEnqueue(animalThree)
    let expected = animalThree
    let actual = animalShelter.dog.front
    expect(expected).toStrictEqual(actual)
  });

  it('should enqueue if a cat object is entered', () => {
    animalShelter.fifoEnqueue(animalOne)
    let expected = animalOne
    let actual = animalShelter.cat.front
    expect(expected).toStrictEqual(actual)
  });

  it('should enqueue if a any other animal besides a cat or dog object is entered', () => {
    animalShelter.fifoEnqueue(animalTwo)
    let expected = animalTwo
    let actual = animalShelter.other.front
    expect(expected).toStrictEqual(actual)
  });

  it('return cat from animal shelter', () => {
    let expected = animalOne
    let actual = animalShelter.fifoDequeue(animalOne)
    console.log(animalShelter.cat)
    expect(expected).toStrictEqual(actual)   
  });

  
  it('return dog from animal shelter', () => {
    let expected = animalThree
    let actual = animalShelter.fifoDequeue(animalThree)
    console.log(animalShelter.dog)
    expect(expected).toStrictEqual(actual)   
  });

  
  it('return any other animal from animal shelter', () => {
    let expected = animalTwo
    let actual = animalShelter.fifoDequeue(animalTwo)
    console.log(animalShelter.other)
    expect(expected).toStrictEqual(actual)   
  });

});