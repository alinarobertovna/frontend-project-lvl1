import launchGame from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const gameData = [];
  const question = Math.round(Math.random() * 1000);
  let correctAnswer = ' ';
  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else if (question % 2 !== 0) {
    correctAnswer = 'no';
  }
  gameData.push(question, correctAnswer);
  return gameData;
};

export default () => {
  launchGame(task, generateGameData);
};
