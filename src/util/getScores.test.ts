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
} from './getScores'

describe('getScores', () => {
  describe('getAces', () => {
    it('scores zero when no aces provided', () => {
      expect(getAces([2, 3, 4, 5, 6])).toBe(0)
    })

    it('scores 1', () => {
      expect(getAces([1, 3, 4, 5, 6])).toBe(1)
    })

    it('scores 2', () => {
      expect(getAces([1, 1, 4, 5, 6])).toBe(2)
    })

    it('scores 3', () => {
      expect(getAces([1, 1, 1, 5, 6])).toBe(3)
    })

    it('scores 4', () => {
      expect(getAces([1, 1, 1, 1, 6])).toBe(4)
    })

    it('scores 5', () => {
      expect(getAces([1, 1, 1, 1, 1])).toBe(5)
    })
  })

  describe('getTwos', () => {
    it('scores zero when no twos provided', () => {
      expect(getTwos([1, 3, 4, 5, 6])).toBe(0)
    })

    it('scores 2', () => {
      expect(getTwos([2, 3, 4, 5, 6])).toBe(2)
    })

    it('scores 4', () => {
      expect(getTwos([2, 2, 4, 5, 6])).toBe(4)
    })

    it('scores 6', () => {
      expect(getTwos([2, 2, 2, 5, 6])).toBe(6)
    })

    it('scores 8', () => {
      expect(getTwos([2, 2, 2, 2, 6])).toBe(8)
    })

    it('scores 10', () => {
      expect(getTwos([2, 2, 2, 2, 2])).toBe(10)
    })
  })

  describe('getThrees', () => {
    it('scores zero when no aces provided', () => {
      expect(getThrees([1, 2, 4, 5, 6])).toBe(0)
    })

    it('scores 3', () => {
      expect(getThrees([3, 2, 4, 5, 6])).toBe(3)
    })

    it('scores 6', () => {
      expect(getThrees([3, 3, 4, 5, 6])).toBe(6)
    })

    it('scores 9', () => {
      expect(getThrees([3, 3, 3, 5, 6])).toBe(9)
    })

    it('scores 12', () => {
      expect(getThrees([3, 3, 3, 3, 6])).toBe(12)
    })

    it('scores 15', () => {
      expect(getThrees([3, 3, 3, 3, 3])).toBe(15)
    })
  })

  describe('getFours', () => {
    it('scores zero when no aces provided', () => {
      expect(getFours([1, 2, 3, 5, 6])).toBe(0)
    })

    it('scores 4', () => {
      expect(getFours([1, 2, 4, 5, 6])).toBe(4)
    })

    it('scores 8', () => {
      expect(getFours([4, 3, 4, 5, 6])).toBe(8)
    })

    it('scores 12', () => {
      expect(getFours([4, 4, 4, 5, 6])).toBe(12)
    })

    it('scores 16', () => {
      expect(getFours([4, 4, 4, 4, 6])).toBe(16)
    })

    it('scores 20', () => {
      expect(getFours([4, 4, 4, 4, 4])).toBe(20)
    })
  })

  describe('getFives', () => {
    it('scores zero when no aces provided', () => {
      expect(getFives([1, 2, 3, 4, 6])).toBe(0)
    })

    it('scores 5', () => {
      expect(getFives([1, 2, 4, 5, 6])).toBe(5)
    })

    it('scores 10', () => {
      expect(getFives([5, 2, 4, 5, 6])).toBe(10)
    })

    it('scores 15', () => {
      expect(getFives([5, 5, 4, 5, 6])).toBe(15)
    })

    it('scores 20', () => {
      expect(getFives([5, 5, 5, 5, 6])).toBe(20)
    })

    it('scores 25', () => {
      expect(getFives([5, 5, 5, 5, 5])).toBe(25)
    })
  })

  describe('getSixes', () => {
    it('scores zero when no aces provided', () => {
      expect(getSixes([1, 2, 3, 4, 5])).toBe(0)
    })

    it('scores 6', () => {
      expect(getSixes([6, 2, 3, 4, 5])).toBe(6)
    })

    it('scores 12', () => {
      expect(getSixes([6, 6, 3, 4, 5])).toBe(12)
    })

    it('scores 18', () => {
      expect(getSixes([6, 6, 6, 4, 5])).toBe(18)
    })

    it('scores 24', () => {
      expect(getSixes([6, 6, 6, 6, 5])).toBe(24)
    })

    it('scores 30', () => {
      expect(getSixes([6, 6, 6, 6, 6])).toBe(30)
    })
  })

  describe('getThreeOfAKind', () => {
    it('scores zero when there is no three of a kind', () => {
      expect(getThreeOfAKind([1, 2, 3, 4, 5])).toBe(0)
    })

    it('scores 12', () => {
      expect(getThreeOfAKind([1, 1, 1, 4, 5])).toBe(12)
    })

    it('scores 15', () => {
      expect(getThreeOfAKind([2, 2, 2, 4, 5])).toBe(15)
    })

    it('scores 18', () => {
      expect(getThreeOfAKind([3, 3, 3, 4, 5])).toBe(18)
    })

    it('scores 18', () => {
      expect(getThreeOfAKind([1, 4, 4, 4, 5])).toBe(18)
    })

    it('scores 18', () => {
      expect(getThreeOfAKind([1, 2, 5, 5, 5])).toBe(18)
    })
  })

  describe('getFourOfAKind', () => {
    it('scores zero when there is no four of a kind', () => {
      expect(getFourOfAKind([1, 2, 3, 4, 5])).toBe(0)
    })

    it('scores 9', () => {
      expect(getFourOfAKind([1, 1, 1, 1, 5])).toBe(9)
    })

    it('scores 13', () => {
      expect(getFourOfAKind([2, 2, 2, 2, 5])).toBe(13)
    })

    it('scores 17', () => {
      expect(getFourOfAKind([3, 3, 3, 3, 5])).toBe(17)
    })

    it('scores 21', () => {
      expect(getFourOfAKind([4, 4, 4, 4, 5])).toBe(21)
    })

    it('scores 21', () => {
      expect(getFourOfAKind([1, 5, 5, 5, 5])).toBe(21)
    })
  })

  describe('getFullHouse', () => {
    it('scores zero when there is no full house', () => {
      expect(getFullHouse([1, 2, 3, 4, 4])).toBe(0)
    })

    it('scores 25 when there is a full house', () => {
      expect(getFullHouse([1, 1, 2, 2, 2])).toBe(25)
    })

    it('scores 25 when there is a full house', () => {
      expect(getFullHouse([4, 6, 4, 4, 6])).toBe(25)
    })
  })

  describe('getSmallStraight', () => {
    it('scores zero when there is no small straight', () => {
      expect(getSmallStraight([1, 1, 1, 2, 3])).toBe(0)
    })

    it('scores 30 points for a small straight starting with 1', () => {
      expect(getSmallStraight([1, 2, 3, 4, 4])).toBe(30)
    })

    it('scores 30 points for a small straight starting with 2', () => {
      expect(getSmallStraight([2, 3, 4, 5, 5])).toBe(30)
    })

    it('scores 30 points for a small straight starting with 3', () => {
      expect(getSmallStraight([3, 4, 5, 6, 6])).toBe(30)
    })

    it('scores 30 regardless of order of numbers', () => {
      expect(getSmallStraight([6, 3, 1, 4, 2])).toBe(30)
    })
  })

  describe('getLargeStraight', () => {
    it('scores zero when there is no large straight', () => {
      expect(getLargeStraight([1, 1, 2, 3, 4])).toBe(0)
    })

    it('scores 40 points for a small straight starting with 1', () => {
      expect(getLargeStraight([1, 2, 3, 4, 5])).toBe(40)
    })

    it('scores 40 points for a small straight starting with 2', () => {
      expect(getLargeStraight([2, 3, 4, 5, 6])).toBe(40)
    })

    it('scores 40 regardless of order of numbers', () => {
      expect(getLargeStraight([5, 3, 1, 4, 2])).toBe(40)
    })
  })

  describe('getChance', () => {
    it('scores the total of all dice', () => {
      expect(getChance([1, 2, 3, 4, 5])).toBe(15)
    })
  })

  describe('getYahtzee', () => {
    it('scores zero when there is no yahtzee', () => {
      expect(getYahtzee([1, 2, 3, 4, 5])).toBe(0)
    })

    it('scores 5', () => {
      expect(getYahtzee([1, 1, 1, 1, 1])).toBe(50)
    })
  })
})
