export function format (input: string): number[][] {
  let lines: string[] = input.split('\n')
  let t = /[0-9]+/g
  let r
  if (lines.length <= 1) {
    r = []
  } else {
    r = lines.map((e) => e.match(t).map(e => parseInt(e)))
  }
  return r
}

export function checksum (spreadsheet: number[][]): number {
  const max = (v) => Math.max.apply(null, v)
  const min = (v) => Math.min.apply(null, v)
  const sumDiff = (r, v) => r + max(v) - min(v)
  return spreadsheet.reduce(sumDiff, 0)
}

export function checksumEvenDivisble (spreadsheet: number[][]): number {
  const sortDesc = (e1, e2) => e2 - e1
  const evenDivisible = (e1, e2) => e1 % e2 === 0
  let k = []
  spreadsheet.forEach((t) => {
    let e = t.sort(sortDesc)
    let i, j
    for (i = 0; i < e.length; i++) {
      for (j = i + 1; j < e.length; j++) {
        if (evenDivisible(e[i], e[j])) {
          k.push(e[i] / e[j])
        }
      }
    }
  })
  return k.reduce((r, e) => r + e, 0)
}
