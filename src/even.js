import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const letsPlay = () => {
  let i = 1;
  while (i <= 3) {
    const number = Math.round(Math.random() * 1000);
    console.log(`Question: ${number}`);
    const input = readlineSync.prompt();
    console.log(`Your answer: ${input}`);
    if (number % 2 === 0 && input === 'Yes') {
      console.log('Correct!');
    }
    if (number % 2 !== 0 && input === 'No') {
      console.log('Correct!');
    }
    if (number % 2 === 0 && input === 'No') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'. Let's try again, userName!");
      break;
    }
    if (number % 2 !== 0 && input === 'Yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, userName!");
      break;
    }
    if (input !== 'Yes' && input !== 'No') {
      console.log(`${input} is wrong answer ;(. Let's try again, userName!`);
      break;
    }
    i += 1;
  }
  if (i === 4) {
    console.log('Congratulations, userName!');
  }
};

letsPlay();
