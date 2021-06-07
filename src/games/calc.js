import launchGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameTask = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculateExpression = (a, b, sign) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown state:'${sign}'!`);
  }
};

const generateGameData = () => {
  const firstNum = generateRandomNumber(0, 1000);
  const secondNum = generateRandomNumber(0, 1000);
  const randomSign = generateRandomNumber(0, operators.length);
  const operator = operators[randomSign];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const calculatedAnswer = calculateExpression(firstNum, secondNum, operator);
  const correctAnswer = calculatedAnswer.toString();
  return [question, correctAnswer];
};

export default () => {
  launchGame(gameTask, generateGameData);
};
