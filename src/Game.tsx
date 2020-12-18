import {
  /* useEffect, useReducer,  */ useEffect,
  /* , useState */
} from 'react'
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
  // ROLLS,
  // MAX,
  // MIN,
  // NUM_CATEGORIES,
  TEXT_NEXT_ROUND,
  TEXT_ROLL_DICE,
  TEXT_START_GAME,
  TEXT_NEW_GAME,
  // UPPER_BONUS,
  // UPPER_BONUS_SCORE,
} from './constants'
import { ScoreCategory } from './types'
import { /* getRandomNumber,  */ toCamelCase } from './util'
// import { GameCtx } from "./GameCtx";
// import { gameReducer } from "./gameReducer";
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

  // const [state, dispatch] = useReducer(gameReducer, initialState);

  // const [actionButtonText, setActionButtonText] = useState<string>(
  //   TEXT_START_GAME
  // );
  // const [gameStarted, setGameStarted] = useState<boolean>(false);
  // const [roundStarted, setRoundStarted] = useState<boolean>(false);
  // const [rolling, setRolling] = useState<boolean>(false);
  // const [roundScores, setRoundScores] = useState<Scores>(new Map());
  // const [roundComplete, setRoundComplete] = useState<boolean>(false);
  // const [diceState, setDiceState] = useState<DiceState>(defaultDiceState);
  // const [rolls, setRolls] = useState<number>(0);
  // const [turn, setTurn] = useState<number>(0);
  // const [scored, setScored] = useState<boolean>(false);
  // const [scores, setScores] = useState<Scores[]>();
  // const [round, setRound] = useState<number>(0);
  // const [totalUpperScore, setTotalUpperScore] = useState<number>(0);
  // const [totalLowerScore, setTotalLowerScore] = useState<number>(0);
  // const [totalScore, setTotalScore] = useState<number>(0);
  // const [upperScoreBonus, setUpperScoreBonus] = useState<number>(0);

  // useEffect(() => {
  //   console.log("Round", round);
  //   console.log("Scores", scores);

  //   if (!round || !scores) return;
  //   if (!scores[round - 1]) return;

  //   const upperScore = CATEGORIES.upper
  //     .map((category) => category.id)
  //     .map((id) =>
  //       scores
  //         ? scores[round - 1].get((id as unknown) as ScoreCategory) || 0
  //         : 0
  //     )
  //     .reduce((total, score) => total + score);
  //   const lowerScore = CATEGORIES.lower
  //     .map((category) => category.id)
  //     .map((id) =>
  //       scores
  //         ? scores[round - 1].get((id as unknown) as ScoreCategory) || 0
  //         : 0
  //     )
  //     .reduce((total, score) => total + score);

  //   console.log(upperScore, lowerScore);

  //   setTotalUpperScore(upperScore);
  //   // setTotalLowerScore(lowerScore);
  //   setUpperScoreBonus(upperScore >= UPPER_BONUS_SCORE ? UPPER_BONUS : 0);
  //   setTotalScore(upperScore + lowerScore + upperScoreBonus);
  // }, [round, scores, upperScoreBonus]);

  // useEffect(() => {
  //   if (totalUpperScore >= UPPER_BONUS_SCORE) setUpperScoreBonus(UPPER_BONUS);

  //   // setTotalScore(totalUpperScore + totalLowerScore + upperScoreBonus);
  // }, [totalUpperScore]);

  // useEffect(() => {
  //   if (round && scores) {
  //     setRoundScores(scores[round - 1]);
  //   }
  // }, [round, scores]);

  // const updateActionButton = () => {
  //   if (gameStarted) {
  //     if (roundComplete) {
  //       setActionButtonText(TEXT_NEXT_ROUND);
  //       return;
  //     }

  //     setActionButtonText(`${TEXT_ROLL_DICE} (${rolls})`);
  //     return;
  //   }

  //   setActionButtonText(TEXT_START_GAME);
  // };

  // useEffect(updateActionButton, [
  //   gameStarted,
  //   rolls,
  //   roundComplete,
  //   roundStarted,
  // ]);

  // const nextTurn = () => {
  //   setRoundStarted(false);
  //   setTurn(turn + 1);
  //   setRolls(ROLLS);
  //   setScored(false);
  //   setDiceState(
  //     diceState.map((dieState) => ({
  //       ...dieState,
  //       hold: false,
  //     })) as DiceState
  //   );
  // };

  // const handleClick = () => {
  //   if (!gameStarted) {
  //     startGame();
  //     setGameStarted(true);
  //     setRolls(ROLLS);
  //   }

  //   if (!roundStarted) {
  //     setRoundStarted(true);
  //     setRound(round + 1);
  //     setTurn(1);
  //     return;
  //   }

  //   // Roll the dice
  //   setRolling(true);
  //   setDiceState(
  //     diceState.map((dieState) => {
  //       const { hold, score } = dieState;

  //       if (hold) return dieState;

  //       let rand: number;

  //       do {
  //         rand = getRandomNumber(MAX, MIN);

  //         if (score === 0) break;
  //       } while (rand === score);

  //       return {
  //         ...dieState,
  //         score: rand,
  //       };
  //     }) as DiceState
  //   );
  //   setRolls(rolls - 1);
  // };

  // const handleHold = (dieId: string) => {
  //   const dieStateToUpdate = diceState.find(({ id }) => id === dieId);
  //   if (!dieStateToUpdate) return;

  //   const updatedDiceState = diceState.map((dieState) => {
  //     if (dieState.id !== dieId) return dieState;

  //     return {
  //       ...dieState,
  //       hold: !dieState.hold,
  //     };
  //   }) as DiceState;

  //   if (!updatedDiceState) return;
  //   setDiceState(updatedDiceState);
  // };

  // const diceScores = diceState
  //   ? (diceState.map((dieState) => dieState.score) as DiceNumbers)
  //   : ([0, 0, 0, 0, 0] as DiceNumbers);

  // const updateScores = (roundScores: Map<ScoreCategory, number | null>) => {
  //   console.log("roundScores", roundScores);
  //   const newScores = scores ? [...scores] : [];
  //   newScores[round - 1] = roundScores;
  //   setScores(newScores);

  //   if (roundScores.size === NUM_CATEGORIES) {
  //     setRoundComplete(true);
  //   }
  // };

  // const handleScored = () => {
  //   // setRolls(0);
  //   // setScored(true);
  //   nextTurn();
  // };

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
                disabled={state.rollButtonDisabled}
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
          <h1
            css={css`
              align-self: center;
              margin: 0 auto;
            `}
          >
            React Yahtzee
          </h1>
          <ActionButton onClick={startGame}>{TEXT_START_GAME}</ActionButton>
        </>
      )}
    </div>
  )
}
