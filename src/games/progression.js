import { launchGame, generateRandomNumber } from '../index.js';

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
  const firstNum = generateRandomNumber();
  const progressionStep = Math.round(Math.random() * 100);
  const progression = makeProgression(firstNum, progressionStep);
  const randomFigure = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[randomFigure].toString();
  const newQuestion = hideFigure(progression, randomFigure);
  const question = newQuestion.join(' ');
  return [question, correctAnswer];
};

export default () => {
  launchGame(task, generateGameData);
};
