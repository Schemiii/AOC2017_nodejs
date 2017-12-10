import * as fs from 'fs'
import * as path from 'path'
import {seq, circle} from './sequence'

fs.readFile(path.join(__dirname, 'input'), (err, bufSequence) => {
  if (err) {
    console.log(new Error('file not found'))
  } else {
    let p1 = seq(bufSequence.toString().split('').map(Number))
    let p2 = circle(bufSequence.toString().split('').map(Number))
    console.log(`Sum of digits \n-sequence: ${p1}  \n-circle: ${p2}`)
  }
})
