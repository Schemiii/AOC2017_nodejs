export class Tower {
  public id: number = 0
  public name: string = ""
  public subtowers: Tower[] = []
  public towerList: string = ''

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}

export class TowerFunctions {
  static towerDepth(tower: Tower): number {
    if (tower.subtowers.length === 0) {
      return 0;
    }
    return tower.subtowers.length + tower.subtowers.reduce((r, e) => {
      return r + this.towerDepth(e)
    }, 0)
  }
}
