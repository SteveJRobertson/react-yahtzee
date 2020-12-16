import { useEffect, useRef, useState } from 'react'
/* @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react/macro' // eslint-disable-line @typescript-eslint/no-unused-vars
// import { nanoid } from 'nanoid'
import useResizeObserver from 'use-resize-observer'
import {
  ActionButton,
  ButtonGrid,
  Dice,
  GameHeader,
  ScoreButton,
} from './components'
import {
  CATEGORIES,
  ROLLS,
  TEXT_NEXT_ROUND,
  TEXT_ROLL_DICE,
  TEXT_START_GAME,
} from './constants'
// import { DiceNumbers, DiceState, Scores, ScoreCategory } from './types'
import { toCamelCase } from './util'
import { GameCtx } from './GameCtx'

// const diceIds = [nanoid(), nanoid(), nanoid(), nanoid(), nanoid()]
// const defaultDiceState: DiceState = [
//   { id: diceIds[0], hold: false, score: 0 },
//   { id: diceIds[1], hold: false, score: 0 },
//   { id: diceIds[2], hold: false, score: 0 },
//   { id: diceIds[3], hold: false, score: 0 },
//   { id: diceIds[4], hold: false, score: 0 },
// ]

const Game = () => {
  const [actionButtonText, setActionButtonText] = useState<string>(
    TEXT_START_GAME
  )
  const [gameStarted, setGameStarted] = useState<boolean>(false)
  const [roundStarted, setRoundStarted] = useState<boolean>(false)
  const [roundComplete /* setRoundComplete */] = useState<boolean>(false)
  // const [diceState, setDiceState] = useState<DiceState>(defaultDiceState);
  const [rolls, setRolls] = useState<number>(0)
  // const [turn, setTurn] = useState<number>(0);
  // const [scored, setScored] = useState<boolean>(false);
  // const [scores, setScores] = useState<Scores>(new Map());
  const [totalScore /* setTotalScore */] = useState<number>(0)

  const diceRef = useRef<HTMLDivElement>(null)

  const { width: diceWidth = 1 } = useResizeObserver<HTMLDivElement>({
    ref: diceRef,
  })

  const updateActionButton = () => {
    if (gameStarted) {
      if (roundComplete) {
        setActionButtonText(TEXT_NEXT_ROUND)
        return
      }

      setActionButtonText(`${TEXT_ROLL_DICE} (${rolls})`)
      return
    }

    setActionButtonText(TEXT_START_GAME)
  }

  useEffect(updateActionButton, [
    gameStarted,
    rolls,
    roundComplete,
    roundStarted,
  ])

  const handleClick = () => {
    if (!gameStarted) {
      setGameStarted(true)
      setRolls(ROLLS)
    }

    if (!roundStarted) {
      setRoundStarted(true)
    }
  }

  const getScoreButtons = () =>
    [...CATEGORIES.upper, ...CATEGORIES.lower].map(
      ({ id, name, calculator, longText }, index) => (
        <ScoreButton
          key={toCamelCase(name)}
          id={toCamelCase(name)}
          name={name}
          score={30}
          longText={longText}
        >
          {name}
        </ScoreButton>
      )
    )

  return (
    <GameCtx.Provider
      value={{
        diceWidth,
      }}
    >
      <div
        css={css`
          background-color: SeaGreen;
          color: white;
          display: flex;
          font-family: 'Lato', sans-serif;
          height: calc(100vh - 3.5rem);
          width: 100%;
        `}
      >
        {gameStarted ? (
          <>
            <GameHeader totalScore={totalScore} />
            <div
              css={css`
                display: flex;
                flex-direction: column;
                height: calc(100vh - 48px);
                padding-top: 48px;
                max-width: 640px;
                margin: 0 auto;
              `}
            >
              <ButtonGrid>{getScoreButtons()}</ButtonGrid>
              <Dice ref={diceRef} width={diceWidth} />
            </div>
          </>
        ) : (
          <h1
            css={css`
              align-self: center;
              margin: 0 auto;
            `}
          >
            React Yahtzee
          </h1>
        )}
      </div>
      <ActionButton onClick={handleClick}>{actionButtonText}</ActionButton>
    </GameCtx.Provider>
  )
}

export default Game
