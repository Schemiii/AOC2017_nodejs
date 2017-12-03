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
