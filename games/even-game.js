import gameEngine from '../src/index.js';

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

const evenGame = () => {
  gameEngine(task, generateGameData);
};
export default evenGame;
