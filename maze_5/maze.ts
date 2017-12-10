/*eslint no-undef:"off"*/

export enum MazeStepType {
  Straight = 0,
  Weired,
}

export class Maze {
  private _isEscaped: boolean = false
  private _nSteps: number = 0
  private _pSteps: number = 0
  private _type: MazeStepType

  constructor (private _instructions: number[], type: MazeStepType) {
    this._instructions = _instructions
    this._type = type
  }

  step (): boolean {
    if (!this._isEscaped) {
      let pIncStep: number = this._instructions[this._pSteps]
      if (!isNaN(pIncStep)) {
        let pNextStep: number = this._pSteps + pIncStep
        if (this._type === MazeStepType.Weired) {
          if (pIncStep >= 3) {
            this._instructions[this._pSteps]--
          } else {
            this._instructions[this._pSteps]++
          }
        } else if (this._type === MazeStepType.Straight) {
          this._instructions[this._pSteps]++
        }
        this._pSteps = pNextStep
        this._nSteps++
      } else {
        this._isEscaped = true
      }
    }
    return this._isEscaped
  }

  get steps (): number {
    return this._nSteps
  }

  toString (maxLength): string {
    return this._instructions.slice(0, maxLength).join(',')
  }
}
