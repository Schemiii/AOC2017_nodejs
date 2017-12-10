import * as fs from 'fs'
import * as path from 'path'
import {Maze, MazeStepType} from './maze'

fs.readFile(path.join(__dirname, 'input'), (err, result) => {
  if (err) {
    process.exit(1)
  }
  let aStraightMaze = new Maze(result.toString().split('\n').map(Number), MazeStepType.Straight)
  let aWeiredMaze = new Maze(result.toString().split('\n').map(Number), MazeStepType.Weired)
  while (!aStraightMaze.step()) ;
  console.log(aStraightMaze.steps)
  while (!aWeiredMaze.step()) ;
  console.log(aWeiredMaze.steps)
})
