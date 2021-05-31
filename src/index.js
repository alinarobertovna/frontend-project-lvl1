import readlineSync from 'readline-sync';

export const generateRandomNumber = () => Math.round(Math.random() * 1000);

const attemptNumber = 3;
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const launchGame = (task, generateGameData) => {
  const userName = greeting();
  console.log(task);
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
