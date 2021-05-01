import readlineSync from 'readline-sync';

const welcoming = 'Welcome to the Brain Games!';
const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export { welcoming, greeting };
