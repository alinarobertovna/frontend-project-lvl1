const generateRandomNumber = (min, max) => {
  const randomValue = Math.floor(Math.random() * (max - min)) + min;
  return Math.floor(randomValue);
};

export default generateRandomNumber;
