const fs = require('fs')
const path = require('path')
const sequence = require('./sequence')

fs.readFile(path.join(__dirname, 'input'), (err, bufSequence) => {
  if (err) {
    console.log(new Error('file not found'))
  } else {
    let p1 = sequence.seq(bufSequence.toString().split(''))
    let p2 = sequence.circle(bufSequence.toString().split(''))
    console.log(`Sum of digits \n-sequence: ${p1}  \n-circle: ${p2}`)
  }
})
