module.exports = {
  seq: (sequence) => {
    sequence.splice(0, 0, sequence[sequence.length - 1])
    let i
    let a, b
    let c = []
    for (i = 0; i < sequence.length - 1; i++) {
      a = sequence[i]
      b = sequence[i + 1]
      if (a === b) {
        c.push(a)
      }
    }
    return c.reduce((r, v) => r + parseInt(v), 0)
  }
  /*
  , circle: (sequence) => {
    return 0
  }
  */
}
