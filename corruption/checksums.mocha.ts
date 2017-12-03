/* eslint-env mocha */
import * as assert from 'assert'
import * as checksum from './checksum'

describe('spreadsheet', () => {
  const spreadsheet = `5 1 9 5\n7 5 3\n2 4 6 8`
  const anotherSheet = `5 9 2 8\n 9 4 7 3\n 3 8 6 5`
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
  describe('checksum', () => {
    it('checksum is 18', () => {
      let cs = checksum.checksum(checksum.format(spreadsheet))
      assert(cs === 18, 'checksum of sheet is 18')
    })
  })
  describe('sum of even divisible numbers', () => {
    it('checksum of another sheet is 9', () => {
      let t = checksum.format(anotherSheet)
      let k = checksum.checksumEvenDivisble(t)
      assert(k === 9, 'evenly number is 9')
    })
  })
})
