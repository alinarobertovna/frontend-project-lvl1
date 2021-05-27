import launchGame from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  } if (num === 2) {
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
  const gameData = [];
  const question = Math.round(Math.random() * 1000);
  const correctAnswer = isPrime(question);
  gameData.push(question, correctAnswer);
  return gameData;
};

export default () => {
  launchGame(task, generateGameData);
};
