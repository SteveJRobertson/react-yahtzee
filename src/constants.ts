import { DiceNumbers, DiePositions } from "./types";
import {
  getAces,
  getTwos,
  getThrees,
  getFours,
  getFives,
  getSixes,
  getThreeOfAKind,
  getFourOfAKind,
  getFullHouse,
  getSmallStraight,
  getLargeStraight,
  getChance,
  getYahtzee,
} from "./util";

export const MAX = 6;
export const MIN = 1;
export const NUM_DICE = 5;
export const ROUNDS = 13;
export const ROLLS = 3;
export const TEXT_START_GAME = "Start";
export const TEXT_ROLL_DICE = "Roll";
export const TEXT_NEXT_ROUND = "Next Round";
export const TEXT_NEW_GAME = "New Game";
export const UPPER_BONUS_SCORE = 63;
export const UPPER_BONUS = 35;

export const POSITIONS: DiePositions = [
  [
    { x: 180, y: 1620 },
    { x: 540, y: 1260 },
    { x: 900, y: 900 },
    { x: 1260, y: 540 },
    { x: 1620, y: 180 },
    { x: 1980, y: 1980 },
  ],
  [
    { x: 0, y: 1980 },
    { x: 360, y: 1620 },
    { x: 720, y: 1260 },
    { x: 1080, y: 900 },
    { x: 1440, y: 540 },
    { x: 1800, y: 180 },
  ],
  [
    { x: 180, y: 450 },
    { x: 540, y: 810 },
    { x: 900, y: 1170 },
    { x: 1260, y: 1530 },
    { x: 1620, y: 1890 },
    { x: 1980, y: 90 },
  ],
  [
    { x: 0, y: 90 },
    { x: 360, y: 450 },
    { x: 720, y: 810 },
    { x: 1080, y: 1170 },
    { x: 1440, y: 1530 },
    { x: 1800, y: 1890 },
  ],
  [
    { x: 270, y: 1710 },
    { x: 630, y: 1350 },
    { x: 990, y: 990 },
    { x: 1350, y: 630 },
    { x: 270, y: 1710 },
    { x: 2070, y: 0 },
  ],
  [
    { x: 90, y: 270 },
    { x: 450, y: 630 },
    { x: 810, y: 990 },
    { x: 1170, y: 1350 },
    { x: 1530, y: 1710 },
    { x: 1890, y: 2070 },
  ],
];

export const CATEGORIES: {
  upper: {
    id: string;
    name: string;
    calculator?: (arg0: DiceNumbers) => number;
    longText?: boolean;
  }[];
  lower: {
    id: string;
    name: string;
    calculator?: (arg0: DiceNumbers) => number;
    longText?: boolean;
  }[];
} = {
  upper: [
    { id: "aces", name: "Aces", calculator: getAces },
    { id: "twos", name: "Twos", calculator: getTwos },
    { id: "threes", name: "Threes", calculator: getThrees },
    { id: "fours", name: "Fours", calculator: getFours },
    { id: "fives", name: "Fives", calculator: getFives },
    { id: "sixes", name: "Sixes", calculator: getSixes },
    { id: "upperBonus", name: "Bonus" },
  ],
  lower: [
    {
      id: "threeOfAKind",
      name: "Three of a Kind",
      calculator: getThreeOfAKind,
      longText: true,
    },
    {
      id: "fourOfAKind",
      name: "Four of a Kind",
      calculator: getFourOfAKind,
      longText: true,
    },
    {
      id: "fullHouse",
      name: "Full House",
      calculator: getFullHouse,
      longText: true,
    },
    {
      id: "smallStraight",
      name: "Small Straight",
      calculator: getSmallStraight,
      longText: true,
    },
    {
      id: "largeStraight",
      name: "Large Straight",
      calculator: getLargeStraight,
      longText: true,
    },
    { id: "chance", name: "Chance", calculator: getChance, longText: true },
    { id: "yahtzee", name: "Yahtzee", calculator: getYahtzee, longText: true },
  ],
};

export const NUM_CATEGORIES = CATEGORIES.upper.length + CATEGORIES.lower.length;
