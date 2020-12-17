type Coordinates = {
  x: number;
  y: number;
};

type DiePosition = [
  Coordinates,
  Coordinates,
  Coordinates,
  Coordinates,
  Coordinates,
  Coordinates
];

export type DiePositions = [
  DiePosition,
  DiePosition,
  DiePosition,
  DiePosition,
  DiePosition,
  DiePosition
];

export type DiceNumbers = [number, number, number, number, number];

export type DieState = {
  id: string;
  hold: boolean;
  score: number;
};

export type DiceState = [DieState, DieState, DieState, DieState, DieState];

export type UpperScoreCategory = [
  "aces",
  "twos",
  "threes",
  "fours",
  "fives",
  "sixes"
];

export type LowerScoreCategory = [
  "threeOfAKind",
  "fourOfAKind",
  "fullHouse",
  "smallStraight",
  "largeStraight",
  "chance",
  "yahtzee"
];

export type ScoreCategory = [
  "aces",
  "twos",
  "threes",
  "fours",
  "fives",
  "sixes",
  "threeOfAKind",
  "fourOfAKind",
  "fullHouse",
  "smallStraight",
  "largeStraight",
  "chance",
  "yahtzee"
];

export type Scores = Map<ScoreCategory, number | null>;
