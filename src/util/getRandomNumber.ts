export const getRandomNumber = (max: number, min: number) =>
  Math.floor(Math.random() * (max + 1 - min)) + min;
