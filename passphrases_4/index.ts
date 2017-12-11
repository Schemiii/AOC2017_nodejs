import * as fs from 'fs'
import * as path from 'path'

function uniquePhrases (lines) {
  let nUniquePhrases = 0
  lines.forEach((value) => {
    let phraseEntries = value.split(' ')
    let uniquePhraseEntries = Array.from(new Set(phraseEntries))
    if (phraseEntries.length === uniquePhraseEntries.length) {
      nUniquePhrases++
    }
  })
  return nUniquePhrases
}

function uniquePhrasesSecure (lines) {
  let nUniquePhrasesSecure = 0
  lines.forEach((value) => {
    let phraseEntries = value.split(' ')
    let uniqEntries = Array.from(new Set(phraseEntries.map(pe => pe.split('').sort().join())))
    if (uniqEntries.length === phraseEntries.length) {
      nUniquePhrasesSecure++
    }
  })
  return nUniquePhrasesSecure
}

fs.readFile(path.join(__dirname, 'input'), (err, result) => {
  if (err) {
    process.exit(1)
  }
  let lines = result.toString().split('\n')
  console.log('unique phrases ', uniquePhrases(lines))
  console.log('secure unique phrases ', uniquePhrasesSecure(lines))
})
