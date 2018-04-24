let sequence = require('fs').readFileSync('./input').toString()
let foo = 0
const removeGarbage = (input) => {
  let i
  let v = ''
  let k = ''
  let inGarbage = false
  let tGarbage = false
  //Remove every !<C> in garbage
  for (i = 0; i < input.length; i++) {
    if (inGarbage) {
      if (tGarbage) {
        tGarbage = false
        continue
      }
      if (input[i] === '!') {
        tGarbage = true
        foo--
      }
      if (input[i] === '>') {
        inGarbage = false
      } else {
        foo++
      }
      v += input[i]
    } else {
      v += input[i]
      if (input[i] === '<') {
        inGarbage = true
      }
    }
  }
  inGarbage = false
  for (i = 0; i < v.length; i++) {
    if (v[i] === '<') {
      inGarbage = true
    }
    if (inGarbage && v[i] === '>') {
      inGarbage = false
      continue
    }
    if (!inGarbage) {
      k += v[i]
    }
  }
  return k
}

const removeNonRelevant = (input) => {
  let k = ''
  let i
  for (i = 0; i < input.length; i++) {
    if (input[i] === '{' || input[i] === '}') {
      k += input[i]
    }
  }
  return k
}

const score = (input) => {
  let t = []
  let i
  let groupDepth = 0
  for (i = 0; i < input.length; i++) {
    if (input[i] === '{') {
      groupDepth++
    } else if (input[i] === '}') {
      t.push(groupDepth)
      groupDepth--
    }
  }
  return t
}

let inputWithoutGarbage = removeGarbage(sequence)
let cleanInput = removeNonRelevant(inputWithoutGarbage)
let scores = score(cleanInput)
let totalScore = scores.reduce((e, i) => e + i, 0)

console.log(`Part 1 total score is: ${totalScore}`)
console.log(`Garbage length is ${foo}`)
//console.log(`Part 2 garbage score is: ${totalScore}`)
