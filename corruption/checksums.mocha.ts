/* eslint-env mocha */
import * as assert from 'assert'
import * as checksum from './checksum'

describe('spreadsheet', () => {
  const spreadsheet = `5 1 9 5\n7 5 3\n2 4 6 8`
  let sheet: number[][]
  describe('converts a spreadsheet string to a two dimensional array', () => {
    const sum = (r, e) => r + e
    it('converts empty string', () => {
      sheet = checksum.format('')
      assert(sheet.length === 0, 'is an empty array')
    })
    it('converts a sheet', () => {
      sheet = checksum.format(spreadsheet)
      assert(sheet.length === 3, 'has length three')
      sheet.forEach((sl) => {
        sl.forEach((sle) => {
          let typeSle = typeof sle
          assert(typeSle === 'number')
        })
      })
    })
    it(`sum of sheet is 55`, () => {
      sheet = checksum.format(spreadsheet)
      assert(sheet.reduce((r, v) => r + v.reduce(sum), 0) === 55, 'sum of sheet is 55')
    })
  })
  /*
  describe('first row', () => {
    it('first row largest value is 9', () => {
      assert(spreadsheet, 'ok')
    })
    it('first row smallest value is 1', () => {

    })
    it('first rows difference is 8', () => {

    })
  })
  describe('second row', () => {
    it('first row largest value is 9', () => {

    })
    it('first row smallest value is 1', () => {

    })
    it('first rows difference is 8', () => {

    })
  })
  describe('third row', () => {
    it('third row largest value is 8', () => {

    })
    it('third row smallest value is 2', () => {

    })
    it('third rows difference is 6', () => {

    })
  })
  */
})
