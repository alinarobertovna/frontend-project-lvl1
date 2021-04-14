import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!';
const condition = 'What is the result of the expression?';
const attemptNumber = 3;

const operators = ['+', '-', '*'];

const calculateExpression = (a, b, sign) => {
  let expression;
  switch (sign) {
    case '+':
      expression = a + b;
      break;
    case '-':
      expression = a - b;
      break;
    case '*':
      expression = a * b;
      break;
    default:
      expression = 'undefined';
      break;
  }
  return expression;
};

const letsCalc = () => {
  console.log(greeting);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);
  let i = 1;
  while (i <= attemptNumber) {
    const firstNumber = Math.round(Math.random() * 1000);
    const secondNumber = Math.round(Math.random() * 1000);
    const randomSign = Math.floor(Math.random() * operators.length);
    const operator = operators[randomSign];
    const expression = `${firstNumber}${operator}${secondNumber}`;
    const correctAnswer = calculateExpression(firstNumber, secondNumber, operator);
    console.log(`Question: ${expression}`);
    const input = readlineSync.prompt();
    console.log(`Your answer: ${input}`);
    if (Number(input) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${input} is wrong answer ;(. Correct answer was ${correctAnswer}. \n Let's try again, ${userName}!`);
      break;
    }
    i += 1;
  }
  if (i === 4) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default letsCalc;
