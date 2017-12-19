import * as fs from 'fs'
import * as path from 'path'
import {Tower, TowerFunctions} from './tower'

fs.readFile(path.join(__dirname, 'input'), (err, result) => {
  if (err) {
    process.exit(1)
  }
  let towers: Tower[] = []
  let input = result.toString()
  let tis = input.split('\n')
  tis.forEach((ti) => {
    let t = ti.split(' ')
    let name = t.splice(0, 1)[0]
    let tid = t.splice(0, 1)[0]
    let id = parseInt(tid.substr(1, tid.length - 1))
    let at = new Tower(id, name)
    towers.push(at)
    if (t.length) {
      t.splice(0, 1)
      at.towerList = t.join('')
    }
  })
  towers.forEach((t) => {
    if (t.towerList.length > 0) {
      t.towerList.split(',').forEach(tle => {
        let tt = towers.find((at) => at.name === tle)
        t.subtowers.push(tt)
      })
    }
  })
  //Frage: Wer ist der root knoten?
  //Heißt: Ich suche einen Knoten, der Kinder hat aber selbst kein Kind ist
  let possibleRootNodes = towers.filter(t => t.subtowers.length > 0)
  let rootNode = {
    node: null,
    depth: 0
  }

  possibleRootNodes.forEach((prn) => {
    let td = TowerFunctions.towerDepth(prn)
    if (td > rootNode.depth) {
      rootNode.node = prn
      rootNode.depth = td
    }
  })

  rootNode.node.subtowers.forEach((t) => {
    console.log(TowerFunctions.towerWeight(t))
  })
})
