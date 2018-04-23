const input = 325489 //325489
const scheibe = (x) => Math.abs(Math.round((Math.sqrt(x)) / 2))
const valueMax = (scheibe) => Math.pow(2 * scheibe + 1, 2) - 1
const len = (scheibe) => 2 * scheibe + 1
const lut = (s) => {
  let l = {}
  let i
  let max = valueMax(s)
  let min = valueMax(s - 1) + 1
  let t = s - 1
  let d = -1
  for (i = max; i >= min; i--) {
    l[i] = t
    t += d
    if (t >= s || t <= 0) {
      d *= -1
    }
  }
  return l
}

let n = scheibe(input)
let vMax = valueMax(n)
let vMin = valueMax(n - 1) + 1
let nFields = vMax - vMin
let seitenlaenge = len(n)
let distanceLookup = lut(n)
let d1 = distanceLookup[input]
let d2 = n
let level1 = `
wert: ${input}
scheibe: ${n}, 
maximalwert: ${vMax}, 
minimalwert: ${vMin}, 
felder: ${nFields}
seitenlaenge: ${seitenlaenge}
manhatten distance: ${d1 + d2}
`
console.log(level1)
//part 2. here we need to build up the square sequentially and assign coordinates to it.
//some of the functionality could be reused.

let grid = {
  '0x0': 1
}

let step = (p) => {
  if (p.x === 0 && p.y === 0) {
    return {
      x: 1,
      y: 0
    }
  }
  let n = Math.abs(p.x) > Math.abs(p.y) ? Math.abs(p.x) : Math.abs(p.y)
  let x, y
  if (p.x === n && p.y === -n) {
    x = p.x + 1
    y = p.y
  } else if (p.x === n && p.y !== n) {
    x = p.x
    y = p.y + 1
  } else if (p.x === -n && p.y !== -n) {
    x = p.x
    y = p.y - 1
  } else if (p.y === n && p.x !== -n) {
    y = p.y
    x = p.x - 1
  } else if (p.y === -n && p.x !== n) {
    y = p.y
    x = p.x + 1
  }
  return {
    x: x,
    y: y
  }
}
let neighbours = (p) => {
  return [
    {x: p.x + 1, y: p.y},
    {x: p.x + 1, y: p.y + 1},
    {x: p.x, y: p.y + 1},
    {x: p.x - 1, y: p.y + 1},
    {x: p.x - 1, y: p.y},
    {x: p.x - 1, y: p.y - 1},
    {x: p.x, y: p.y - 1},
    {x: p.x + 1, y: p.y - 1}
  ]
}

let p = { x: 0, y: 0 }
let ne
let v
do {
  p = step(p)
  ne = neighbours(p)
  v = ne.map(n => grid[n.x + 'x' + n.y]).reduce((r, e) => { return r + (e || 0) }, 0)
  grid[p.x + 'x' + p.y] = v
} while (v < input)
console.log(`der erste wert größer als ${input} beträgt ${v}`)
