import * as fs from 'fs'
import * as path from 'path'
import * as checksum from './checksum'

fs.readFile(path.join(__dirname, 'input'), (err, result) => {
  if (err) {
    process.exit(1)
  }
  let checksumSimple = checksum.checksum(checksum.format(result.toString()))
  let checksumAdvanced = checksum.checksumEvenDivisble(checksum.format(result.toString()))
  console.log(`checksums\n-${checksumSimple}\n-${checksumAdvanced}`)
})
