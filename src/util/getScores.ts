import { DiceNumbers } from "../types";

const getNumberScore = (diceScore: DiceNumbers, num: number) =>
  diceScore.reduce(
    (score, number) => (number === num ? score + number : score + 0),
    0
  );

const getOfKind = (diceScore: DiceNumbers, num: number) => {
  for (let i = 1; i <= 6; i++) {
    const matches = diceScore.filter((dieScore) => dieScore === i);

    if (matches.length >= num) {
      return diceScore.reduce((total, match) => total + match);
    }
  }

  return 0;
};

const getConsecutive = (diceScore: DiceNumbers, num: number) => {
  const sorted = diceScore.slice().sort();
  let consecutive = 1;

  for (let i = 1; i < 6; i++) {
    if (sorted[i] === sorted[i - 1] + 1) {
      consecutive = consecutive + 1;
    }
  }

  return consecutive >= num ? (num - 1) * 10 : 0;
};

export const getAces = (diceScore: DiceNumbers) => getNumberScore(diceScore, 1);
export const getTwos = (diceScore: DiceNumbers) => getNumberScore(diceScore, 2);
export const getThrees = (diceScore: DiceNumbers) =>
  getNumberScore(diceScore, 3);
export const getFours = (diceScore: DiceNumbers) =>
  getNumberScore(diceScore, 4);
export const getFives = (diceScore: DiceNumbers) =>
  getNumberScore(diceScore, 5);
export const getSixes = (diceScore: DiceNumbers) =>
  getNumberScore(diceScore, 6);

export const getThreeOfAKind = (diceScore: DiceNumbers) =>
  getOfKind(diceScore, 3);
export const getFourOfAKind = (diceScore: DiceNumbers) =>
  getOfKind(diceScore, 4);
export const getFullHouse = (diceScore: DiceNumbers) => {
  const matches = [];

  for (let i = 1; i <= 6; i++) {
    matches[i] = diceScore.filter((dieScore) => dieScore === i);
  }

  return matches.filter((match) => match.length).length === 2 ? 25 : 0;
};
export const getSmallStraight = (diceScore: DiceNumbers) =>
  getConsecutive(diceScore, 4);
export const getLargeStraight = (diceScore: DiceNumbers) =>
  getConsecutive(diceScore, 5);
export const getChance = (diceScore: DiceNumbers) =>
  diceScore.reduce((total, dieScore) => total + dieScore);
export const getYahtzee = (diceScore: DiceNumbers) => {
  for (let i = 1; i <= 6; i++) {
    const matches = diceScore.filter((dieScore) => dieScore === i);

    if (matches.length === 5) {
      return 50;
    }
  }

  return 0;
};
