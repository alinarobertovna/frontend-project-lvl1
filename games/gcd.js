import gameEngine from '../src/index.js';

const task = 'Find the greatest common divisor of given numbers.';

const biggestCommonDivisor = (a, b) => {
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
  const gameData = [];
  const firstNum = Math.round(Math.random() * 1000);
  const secondNum = Math.round(Math.random() * 1000);
  const question = `${firstNum} ${secondNum}`;
  const calculatedAnswer = biggestCommonDivisor(firstNum, secondNum);
  const correctAnswer = calculatedAnswer.toString();
  gameData.push(question, correctAnswer);
  return gameData;
};

const findGcd = () => {
  gameEngine(task, generateGameData);
};
export default findGcd;
