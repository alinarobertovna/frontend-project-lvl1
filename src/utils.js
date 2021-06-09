const generateRandomNumber = (min, max) => {
  const randomValue = Math.floor(Math.random() * ((max + 1) - min)) + min;
  return randomValue;
};
export default generateRandomNumber;
