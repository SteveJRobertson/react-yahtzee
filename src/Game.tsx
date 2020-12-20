import { useEffect } from 'react'
/* @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react/macro' // eslint-disable-line @typescript-eslint/no-unused-vars
import {
  ActionButton,
  ButtonGrid,
  Dice,
  GameHeader,
  ScoreButton,
} from './components'
import {
  CATEGORIES,
  TEXT_NEXT_ROUND,
  TEXT_ROLL_DICE,
  TEXT_START_GAME,
  TEXT_NEW_GAME,
} from './constants'
import { ScoreCategory } from './types'
import { toCamelCase } from './util'
import { useGame } from './GameProvider'

export const Game = () => {
  const {
    state,
    startGame,
    rollDice,
    stopRolling,
    selectScore,
    deselectScore,
    nextRound,
  } = useGame()

  useEffect(() => {
    console.log(state)
  }, [state])

  useEffect(() => {
    if (state.rolling) {
      setTimeout(() => {
        stopRolling()
      }, 2000)
    }
  }, [state.rolling, stopRolling])

  const getScoreButtons = () =>
    [...CATEGORIES.upper, ...CATEGORIES.lower].map(
      ({ name, calculator, longText }) => {
        const key = (toCamelCase(name) as unknown) as ScoreCategory
        const disabled =
          state.scoreButtonsDisabled ||
          ((!state.selectedScore && state.scores.get(key)) as boolean)

        return (
          <ScoreButton
            css={css`
              visibility: ${key === (('bonus' as unknown) as ScoreCategory)
                ? 'hidden'
                : 'visible'};
            `}
            key={toCamelCase(name)}
            id={toCamelCase(name)}
            name={name}
            score={
              Number.isInteger(state.scores.get(key))
                ? state.scores.get(key)
                : null
            }
            longText={longText}
            disabled={disabled}
            onClick={() =>
              state.scores.has(key)
                ? deselectScore(key)
                : selectScore(key, calculator)
            }
          >
            {name}
          </ScoreButton>
        )
      }
    )

  return (
    <div
      css={css`
        background-color: SeaGreen;
        color: white;
        display: flex;
        flex-direction: column;
        font-family: 'Lato', sans-serif;
        height: calc(100vh - 3.5rem);
        width: 100%;
      `}
    >
      {state?.displayGame ? (
        <>
          <GameHeader />
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
            <Dice />
          </div>
          {state.rollsRemaining === 0 || state.selectedScore ? (
            state.roundsRemaining === 0 ? (
              <ActionButton
                disabled={state.rollButtonDisabled}
                onClick={startGame}
              >
                {TEXT_NEW_GAME}
              </ActionButton>
            ) : (
              <ActionButton
                disabled={state.rollButtonDisabled || !state.selectedScore}
                onClick={nextRound}
              >
                {TEXT_NEXT_ROUND}
              </ActionButton>
            )
          ) : (
            <ActionButton
              disabled={state.rollButtonDisabled}
              onClick={rollDice}
            >
              {TEXT_ROLL_DICE}{' '}
              {state.rollsRemaining && `(${state.rollsRemaining})`}
            </ActionButton>
          )}
        </>
      ) : (
        <>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              height: calc(100vh - 48px);
              justify-content: center;
              text-align: center;
            `}
          >
            <h1
              css={css`
                margin: 0;
              `}
            >
              React Yahtzee
            </h1>
            <p
              css={css`
                margin: 0.5rem 0;
              `}
            >
              v{`${process.env.REACT_APP_VERSION}`}
            </p>
          </div>
          <ActionButton onClick={startGame}>{TEXT_START_GAME}</ActionButton>
        </>
      )}
    </div>
  )
}
