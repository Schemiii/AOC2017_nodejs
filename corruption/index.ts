import * as fs from 'fs'
import * as path from 'path'

fs.readFile(path.join(__dirname, 'input'), (err, result) => {
  if (err) {
    process.exit(1)
  }
  console.log(result.toString('utf-8'))
})
