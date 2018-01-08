export class Tower {
  constructor (public id: number, public name: string, public subtowers?: Tower[] = [], public towerList?: string = '') {
    this.id = id
    this.name = name
    this.subtowers = subtowers
    this.towerList = towerList
  }
}

export class TowerFunctions {
  static towerDepth (tower: Tower): number {
    if (tower.subtowers.length === 0) {
      return 0
    }
    return tower.subtowers.length + tower.subtowers.reduce((r, e) => {
      return r + this.towerDepth(e)
    }, 0)
  }
  static towerWeight (tower: Tower): number {
    if (tower.subtowers.length === 0) {
      return tower.id
    }
    return tower.id + tower.subtowers.reduce((r, e) => {
      return r + this.towerWeight(e)
    }, 0)
  }

  static findUnbalancedTower(tower: Tower): object {
    let i: number
    if(tower.subtowers.length === 0){
      return null
    }
    for (i = 0; i < tower.subtowers.length - 1; i++) {
      let t1 = tower.subtowers[i]
      let t2 = tower.subtowers[i + 1]
      if(this.towerWeight(t1) != this.towerWeight(t2)){
        return tower
      }
    }
    return tower.subtowers.reduce((r, t) => {
      let k = this.findUnbalancedTower(t)
      return k || r
    }, null)
  }

}
