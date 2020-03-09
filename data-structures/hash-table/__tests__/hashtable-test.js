'use strict';

const HashMap = require('../hashtable');

const h = new HashMap(5)

describe('HashMap', () => {

  it('Can instantiate a hash map', () => {
    let exptected = h;
    let actual = { bucket: [undefined,  undefined,  undefined,  undefined,  undefined], size: 5 };
    expect(exptected).toEqual(actual);
  });

  it('Can properly hash a string', () => {
    let exptected = 4
    let actual = h.hash('hello world')
    expect(exptected).toBe(actual);
  });

  it('Can properly add hashed key to bucket', () => {
    h.add('hello' , 'world' )
    let exptected = [{"hello": "world"}]
    let actual = h.bucket[3]
    expect(exptected).toStrictEqual(actual);
  });

  it('Returns boolean if hashed key exists in hash map', () => {
    let exptected = [ true, false ] 
    let actual = [h.contains('hello'), h.contains('i should be false')]
    expect(exptected).toStrictEqual(actual);
  })

  it('Returns message if hashed key not in hash map for retrieval', () => {
    let exptected = "retrieve the thing.. not!! ---> not in hashmap"
    let actual = h.get('retrieve the thing.. not!! --->')
    expect(exptected).toStrictEqual(actual);
  })  

  it('Can properly retrieve key from hashmap', () => {
    h.add('foo', 'bar')
    let exptected = 'bar'
    let actual = h.get('foo')
    expect(exptected).toStrictEqual(actual);
  }) 
  
  it('Can properly handle collisions', () => {
    let collision_h = new HashMap(1)
    collision_h.add('collision', 'bam')
    collision_h.add('here', 'watch out!')    
    let exptected = ['watch out!', 'bam']
    let actual = [ collision_h.get('here'), collision_h.get('collision')]
    console.log(collision_h.bucket)
    expect(exptected).toStrictEqual(actual);
  })  

});


