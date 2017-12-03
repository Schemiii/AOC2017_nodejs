const fs = require('fs')
const path = require('path')
const sequence = require('./sequence')

fs.readFile(path.join(__dirname, 'input'), (err, bufSequence) => {
  if (err) {
    console.log(new Error('file not found'))
  } else {
    let r = sequence.seq(bufSequence.toString().split(''))
    console.log(r)
  }
})
