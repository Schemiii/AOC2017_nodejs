/* eslint-env mocha */
describe('sequencer part one', () => {
  const sequencer = require('./sequence')
  const assert = require('assert')
  let input
  it('1122 produces a sum of 3', () => {
    input = '1122'.split('')
    assert(sequencer.seq(input) === 3, '1122 does produce a sum of 3')
  })
  it('1234 produces a sum of 0', () => {
    input = '1234'.split('')
    assert(sequencer.seq(input) === 0, '1234 does produce a sum of 0')
  })
  it('91212129 produces a sum of 9', () => {
    input = '91212129'.split('')
    assert(sequencer.seq(input) === 9, '91212129 does produce a sum of 9')
  })
})
/*
describe('sequencer part two', () => {
  const sequencer = require('./sequence')
  const assert = require('assert')
  let input
  it('1212 produces 6', () => {
    input = '1212'.split('')
    assert(sequencer.circle(input) === 6, '1212 produces 6')
  })
  it('1221 produces 0 ', () => {
    input = '1221'.split('')
    assert(sequencer.circle(input) === 0, '1221 produces 0')
  })
  it('123425 produces 4', () => {
    input = '123425'.split('')
    assert(sequencer.circle(input) === 4, '123425 produces 4')
  })
  it('123123 produces 12', () => {
    input = '123123'.split('')
    assert(sequencer.circle(input) === 1, '123123 produces 1')
  })
  it('12131415 produces 4', () => {
    input = '12131415'.split('')
    assert(sequencer.circle(input) === 4, '12131415 produces 4')
  })
})
*/
