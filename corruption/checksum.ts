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
/*
export function checksum (spreadsheet: number[][]): number {
  return 12
}
*/
