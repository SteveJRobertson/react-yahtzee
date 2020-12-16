import { DiceNumbers } from './types'
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
} from './util'

export const NUM_DICE = 5
export const ROLLS = 3
export const TEXT_START_GAME = 'Start'
export const TEXT_ROLL_DICE = 'Roll'
export const TEXT_NEXT_ROUND = 'Next Round'
export const CATEGORIES: {
  upper: {
    id: string
    name: string
    calculator?: (arg0: DiceNumbers) => number
    longText?: boolean
  }[]
  lower: {
    id: string
    name: string
    calculator?: (arg0: DiceNumbers) => number
    longText?: boolean
  }[]
} = {
  upper: [
    { id: 'aces', name: 'Aces', calculator: getAces },
    { id: 'twos', name: 'Twos', calculator: getTwos },
    { id: 'threes', name: 'Threes', calculator: getThrees },
    { id: 'fours', name: 'Fours', calculator: getFours },
    { id: 'fives', name: 'Fives', calculator: getFives },
    { id: 'sixes', name: 'Sixes', calculator: getSixes },
    { id: 'upperBonus', name: 'Bonus' },
  ],
  lower: [
    {
      id: 'threeOfAKind',
      name: 'Three of a Kind',
      calculator: getThreeOfAKind,
      longText: true,
    },
    {
      id: 'fourOfAKind',
      name: 'Four of a Kind',
      calculator: getFourOfAKind,
      longText: true,
    },
    {
      id: 'fullHouse',
      name: 'Full House',
      calculator: getFullHouse,
      longText: true,
    },
    {
      id: 'smallStraight',
      name: 'Small Straight',
      calculator: getSmallStraight,
      longText: true,
    },
    {
      id: 'largeStraight',
      name: 'Large Straight',
      calculator: getLargeStraight,
      longText: true,
    },
    { id: 'chance', name: 'Chance', calculator: getChance, longText: true },
    { id: 'yahtzee', name: 'Yahtzee', calculator: getYahtzee, longText: true },
  ],
}

export const NUM_CATEGORIES = CATEGORIES.upper.length + CATEGORIES.lower.length
