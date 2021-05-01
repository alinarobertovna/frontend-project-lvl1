import readlineSync from 'readline-sync';
import { welcoming, greeting } from '../src/index.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const letsPlay = () => {
  console.log(welcoming);
  const userName = greeting();
  console.log(condition);
  let i = 1;
  while (i <= 3) {
    const number = Math.round(Math.random() * 1000);
    console.log(`Question: ${number}`);
    const input = readlineSync.prompt();
    console.log(`Your answer: ${input}`);
    if (number % 2 === 0 && input === 'yes') {
      console.log('Correct!');
    }
    if (number % 2 !== 0 && input === 'no') {
      console.log('Correct!');
    }
    if (number % 2 === 0 && input === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${userName}!`);
      break;
    }
    if (number % 2 !== 0 && input === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${userName}!`);
      break;
    }
    if (input !== 'yes' && input !== 'no') {
      console.log(`${input} is wrong answer ;(. \n Let's try again, ${userName}!`);
      break;
    }
    i += 1;
  }
  if (i === 4) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default letsPlay;
