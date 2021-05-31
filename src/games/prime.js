import { launchGame, generateRandomNumber } from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 2) {
    return 'yes';
  }
  let i = 2;
  while (i <= num / 2) {
    if (num % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const generateGameData = () => {
  const question = generateRandomNumber();
  const correctAnswer = isPrime(question);
  return [question, correctAnswer];
};

export default () => {
  launchGame(task, generateGameData);
};
