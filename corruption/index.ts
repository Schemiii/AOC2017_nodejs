import * as fs from 'fs'
import * as path from 'path'
import * as checksum from './checksum'

fs.readFile(path.join(__dirname, 'input'), (err, result) => {
  if (err) {
    process.exit(1)
  }
  console.log(checksum.checksum(checksum.format(result.toString())))
})
