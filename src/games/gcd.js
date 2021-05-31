import { launchGame, generateRandomNumber } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const findBiggestCommonDivisor = (a, b) => {
  if (a === 1 || b === 1) {
    return 1;
  } if (a === b) {
    return a;
  } if (a > b && a % b === 0) {
    return b;
  } if (b > a && b % a === 0) {
    return a;
  }

  let biggestDivisor = 1;
  for (let i = a; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      biggestDivisor = i;
      break;
    }
  }
  return biggestDivisor;
};

const generateGameData = () => {
  const firstNum = generateRandomNumber();
  const secondNum = generateRandomNumber();
  const question = `${firstNum} ${secondNum}`;
  const calculatedAnswer = findBiggestCommonDivisor(firstNum, secondNum);
  const correctAnswer = calculatedAnswer.toString();
  return [question, correctAnswer];
};

export default () => {
  launchGame(task, generateGameData);
};
