const fs = require('fs');
let input = fs.readFileSync('./input').toString().split('\n');

let variableStates = {};

let allHighestStates = [];

input.forEach(instruction => {
  let inp = instruction.split(' ');
  let variable = inp[0];
  let operation = inp[1];
  let value = Number(inp[2]);
  let conditionvariable = inp[4];
  let condition = inp[5];
  let conditionvalue = Number(inp[6]);
  if (variableStates[variable] === undefined) {
    variableStates[variable] = 0;
  }
  if(variableStates[conditionvariable] === undefined){
    variableStates[conditionvariable] = 0;
  }
  let executeCondition;
  switch(condition){
    case '!=':
      executeCondition = variableStates[conditionvariable] !== conditionvalue;
      break;
    case '<':
      executeCondition = variableStates[conditionvariable] < conditionvalue;
      break;
    case '<=':
      executeCondition = variableStates[conditionvariable] <= conditionvalue;
      break;
    case '==':
      executeCondition = variableStates[conditionvariable] === conditionvalue;
      break;
    case '>':
      executeCondition = variableStates[conditionvariable] > conditionvalue;
      break;
    case '>=':
      executeCondition = variableStates[conditionvariable] >= conditionvalue;
      break;
  }
  if(executeCondition){
    if(operation === 'inc'){
      variableStates[variable] += value;

    }else if(operation === 'dec'){
      variableStates[variable] -= value;
    }
  }
  allHighestStates.push(Object.entries(variableStates).sort((e1, e2) => e2[1] - e1[1])[0]);
});

let max = Object.entries(variableStates).sort((e1, e2) => e2[1] - e1[1])[0];
console.log(max);
let superHigh = allHighestStates.sort((e1, e2) => {
  return e2[1] - e1[1];
})[0];
console.log(superHigh);
