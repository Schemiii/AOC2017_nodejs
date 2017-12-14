import * as fs from 'fs'
import * as path from 'path'
import {Bank, BankSlot} from './bank'

fs.readFile(path.join(__dirname, 'input'), (err, result) => {
  if (err) {
    process.exit(1)
  }
  let distributions = {}
  let banks = result.toString().split('\t').map(Number).map(b => new Bank(b))
  let slot = new BankSlot(banks)
  //initial distribution
  let nr = 0
  let finished = false
  let ad
  while (!finished) {
    ad = slot.distributeBank(slot.getHighestBank())
    if (distributions[ad] === undefined) {
      distributions[ad] = true
      nr++
    } else {
      nr++
      finished = true
    }
  }
  let newDistribution = {}
  newDistribution[ad] = true
  console.log('initial distributions', nr)
  let k = 0
  finished = false
  while (!finished) {
    ad = slot.distributeBank(slot.getHighestBank())
    if (newDistribution[ad] === undefined) {
      newDistribution[ad] = true
      k++
    } else {
      k++
      finished = true
    }
  }
  console.log('distributions loops ', k)
})
