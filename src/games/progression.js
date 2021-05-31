import { launchGame, generateRandomNumber } from '../index.js';

const task = 'What number is missing in the progression?';

const makeProgression = () => {
  const progression = [];
  const firstNum = generateRandomNumber();
  const progressionStep = Math.round(Math.random() * 100);
  for (let i = firstNum; progression.length < 10; i += progressionStep) {
    progression.push(i);
  }
  return progression;
};

const hideFigure = () => {
  const progression = makeProgression();
  const randomFigure = Math.floor(Math.random() * progression.length);
  progression[randomFigure] = '..';
  return progression;
};

const getCorrectAnswer = (array) => {
  let correctAnswer = 0;
  let diff = 0;
  for (let i = 0; i <= array.length; i += 1) {
    if (array[array.length - 1] === '..') {
      diff = Number(array[array.length - 2]) - Number(array[array.length - 3]);
      correctAnswer = Number(array[array.length - 2]) + diff;
    } else if (array[array.length - 2] === '..') {
      diff = Number(array[array.length - 3]) - Number(array[array.length - 4]);
      correctAnswer = Number(array[array.length - 3]) + diff;
    }
    if (array[i] === '..') {
      diff = Number(array[i + 2]) - Number(array[i + 1]);
      correctAnswer = Number(array[i + 1]) - diff;
    }
  }
  return correctAnswer.toString();
};

const generateGameData = () => {
  const progression = hideFigure();
  const question = progression.join(' ');
  const correctAnswer = getCorrectAnswer(progression);
  return [question, correctAnswer];
};

export default () => {
  launchGame(task, generateGameData);
};
