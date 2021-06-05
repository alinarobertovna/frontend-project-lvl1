import launchGame from '../index.js';
import generateRandomNumber from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const makeProgression = (firstNum, progressionStep, progressionLength) => {
  const progression = [];
  for (let i = firstNum; progression.length < progressionLength; i += progressionStep) {
    progression.push(i);
  }
  return progression;
};

const hideItem = (progression, randomItem) => {
  const updatedProgression = progression;
  updatedProgression[randomItem] = '..';
  return updatedProgression;
};

const generateGameData = () => {
  const firstNum = generateRandomNumber(0, 1000);
  const progressionStep = generateRandomNumber(0, 100);
  const progressionLength = generateRandomNumber(5, 11);
  const progression = makeProgression(firstNum, progressionStep, progressionLength);
  const randomFigure = generateRandomNumber(0, progression.length);
  const correctAnswer = progression[randomFigure].toString();
  const question = hideItem(progression, randomFigure).join(' ');
  return [question, correctAnswer];
};

export default () => {
  launchGame(gameTask, generateGameData);
};
