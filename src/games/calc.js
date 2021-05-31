import { launchGame, generateRandomNumber } from '../index.js';

const task = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculateExpression = (a, b, sign) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};

const generateGameData = () => {
  const firstNum = generateRandomNumber();
  const secondNum = generateRandomNumber();
  const randomSign = Math.floor(Math.random() * operators.length);
  const operator = operators[randomSign];
  const question = `${firstNum} ${operator} ${secondNum}`;
  const calculatedAnswer = calculateExpression(firstNum, secondNum, operator);
  const correctAnswer = calculatedAnswer.toString();
  return [question, correctAnswer];
};

export default () => {
  launchGame(task, generateGameData);
};
