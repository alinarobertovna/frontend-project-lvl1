import launchGame from '../index.js';
import generateRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const makeProgression = (firstNum, progressionStep) => {
  const progression = [];
  for (let i = firstNum; progression.length < 10; i += progressionStep) {
    progression.push(i);
  }
  return progression;
};

const hideFigure = (progression, randomFigure) => {
  const updatedProgression = progression;
  updatedProgression[randomFigure] = '..';
  return updatedProgression;
};

const generateGameData = () => {
  const firstNum = generateRandomNumber(0, 1000);
  const progressionStep = generateRandomNumber(0, 100);
  const progression = makeProgression(firstNum, progressionStep);
  const randomFigure = generateRandomNumber(0, progression.length);
  const correctAnswer = progression[randomFigure].toString();
  const newQuestion = hideFigure(progression, randomFigure);
  const question = newQuestion.join(' ');
  return [question, correctAnswer];
};

export default () => {
  launchGame(task, generateGameData);
};
