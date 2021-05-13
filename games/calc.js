import gameEngine from '../src/index.js';

const task = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculateExpression = (a, b, sign) => {
  let expression;
  switch (sign) {
    case '+':
      expression = a + b;
      break;
    case '-':
      expression = a - b;
      break;
    default:
      expression = a * b;
      break;
  }
  return expression;
};

const generateGameData = () => {
  const gameData = [];
  const firstNum = Math.round(Math.random() * 1000);
  const secondNum = Math.round(Math.random() * 1000);
  const randomSign = Math.floor(Math.random() * operators.length);
  const operator = operators[randomSign];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const calculatedAnswer = calculateExpression(firstNum, secondNum, operator);
  const correctAnswer = calculatedAnswer.toString();
  gameData.push(question, correctAnswer);
  return gameData;
};

const letsCalc = () => {
  gameEngine(task, generateGameData);
};
export default letsCalc;
