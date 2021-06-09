import launchGame from '../index.js';
import generateRandomNumber from '../utils.js';

const currentGameDescription = 'What number is missing in the progression?';

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
  const randomItem = generateRandomNumber(0, (progression.length - 1));
  const correctAnswer = progression[randomItem].toString();
  const question = hideItem(progression, randomItem).join(' ');
  return [question, correctAnswer];
};

export default () => {
  launchGame(currentGameDescription, generateGameData);
};
