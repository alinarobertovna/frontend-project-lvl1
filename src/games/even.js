import { launchGame, generateRandomNumber } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateGameData = () => {
  const question = generateRandomNumber();
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

export default () => {
  launchGame(task, generateGameData);
};
