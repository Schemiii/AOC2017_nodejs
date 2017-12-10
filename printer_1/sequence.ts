export function seq (sequence: number[]) {
  sequence.splice(0, 0, sequence[sequence.length - 1])
  let i, a, b, c
  c = []
  for (i = 0; i < sequence.length - 1; i++) {
    a = sequence[i]
    b = sequence[i + 1]
    if (a === b) {
      c.push(a)
    }
  }
  return c.reduce((r, v) => r + parseInt(v), 0)
}

export function circle (sequence: number[]) {
  let i, a, b, c
  let sl = sequence.length / 2
  c = []
  for (i = 0; i < sequence.length; i++) {
    a = sequence[i]
    b = sequence[(i + sl) % sequence.length]
    if (a === b) {
      c.push(a)
    }
  }
  return c.reduce((r, v) => r + parseInt(v), 0)
}
