import { toCamelCase } from "./toCamelCase";

describe("toCamelCase", () => {
  const toConvert = [
    "Ones",
    "Twos",
    "Threes",
    "Fours",
    "Fives",
    "Sixes",
    "Three of a kind",
    "Four of a kind",
    "Full House",
    "Small Straight",
    "Large Straight",
    "Chance",
    "Yahtzee",
  ];
  it("converts sentences to camel case", () => {
    expect(toConvert.map((string) => toCamelCase(string))).toEqual([
      "ones",
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
      "yahtzee",
    ]);
  });
});
