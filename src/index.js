import readlineSync from 'readline-sync';

const attemptNumber = 3;

const launchGame = (currentGameDescription, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(currentGameDescription);
  for (let i = 0; i < attemptNumber; i += 1) {
    const [question, correctAnswer] = generateGameData();
    console.log(`Question: ${question}`);
    const input = readlineSync.prompt();
    console.log(`Your answer: ${input}`);
    if (input === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${input} is wrong answer ;(. Correct answer was ${correctAnswer}. \n Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default launchGame;
