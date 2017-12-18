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
}
